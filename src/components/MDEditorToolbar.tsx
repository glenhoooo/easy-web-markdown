import React, { useEffect, useRef } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { Compartment } from "@codemirror/state";
import {
  LuHeading3,
  LuBold,
  LuItalic,
  LuStrikethrough,
  LuQuote,
  LuCode,
  LuLink,
  LuList,
  LuListOrdered,
  LuListTodo,
} from "react-icons/lu";

/** A single toolbar action definition. */
interface ToolbarAction {
  /** Lucide icon component */
  icon: React.ComponentType<{ size?: number }>;
  /** Accessible title */
  title: string;
  /** Keyboard shortcut label (display only) */
  shortcutLabel: string;
  /** CodeMirror keymap key string */
  keybinding: string;
  /** Prefix inserted before the selection (or placeholder). */
  prefix: string;
  /** Suffix inserted after the selection (or placeholder). */
  suffix: string;
  /** Placeholder text inserted when there is no selection. */
  placeholder: string;
  /** If true, the prefix is applied at line level (beginning of each selected line). */
  block?: boolean;
}

const isMac = typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const modLabel = isMac ? "⌘" : "Ctrl+";

const ACTIONS: ToolbarAction[] = [
  {
    icon: LuHeading3,
    title: "Heading",
    shortcutLabel: `${modLabel}⇧H`,
    keybinding: "Mod-Shift-h",
    prefix: "### ",
    suffix: "",
    placeholder: "heading",
    block: true,
  },
  {
    icon: LuBold,
    title: "Bold",
    shortcutLabel: `${modLabel}B`,
    keybinding: "Mod-b",
    prefix: "**",
    suffix: "**",
    placeholder: "bold text",
  },
  {
    icon: LuItalic,
    title: "Italic",
    shortcutLabel: `${modLabel}I`,
    keybinding: "Mod-i",
    prefix: "_",
    suffix: "_",
    placeholder: "italic text",
  },
  {
    icon: LuStrikethrough,
    title: "Strikethrough",
    shortcutLabel: `${modLabel}⇧X`,
    keybinding: "Mod-Shift-x",
    prefix: "~~",
    suffix: "~~",
    placeholder: "strikethrough text",
  },
  {
    icon: LuQuote,
    title: "Quote",
    shortcutLabel: `${modLabel}⇧.`,
    keybinding: "Mod-Shift-.",
    prefix: "> ",
    suffix: "",
    placeholder: "quote",
    block: true,
  },
  {
    icon: LuCode,
    title: "Code",
    shortcutLabel: `${modLabel}E`,
    keybinding: "Mod-e",
    prefix: "`",
    suffix: "`",
    placeholder: "code",
  },
  {
    icon: LuLink,
    title: "Link",
    shortcutLabel: `${modLabel}K`,
    keybinding: "Mod-k",
    prefix: "[",
    suffix: "](url)",
    placeholder: "link text",
  },
  {
    icon: LuList,
    title: "Unordered List",
    shortcutLabel: `${modLabel}⇧8`,
    keybinding: "Mod-Shift-8",
    prefix: "- ",
    suffix: "",
    placeholder: "list item",
    block: true,
  },
  {
    icon: LuListOrdered,
    title: "Ordered List",
    shortcutLabel: `${modLabel}⇧7`,
    keybinding: "Mod-Shift-7",
    prefix: "1. ",
    suffix: "",
    placeholder: "list item",
    block: true,
  },
  {
    icon: LuListTodo,
    title: "Task List",
    shortcutLabel: `${modLabel}⇧L`,
    keybinding: "Mod-Shift-l",
    prefix: "- [ ] ",
    suffix: "",
    placeholder: "task",
    block: true,
  },
];

function applyAction(view: EditorView, action: ToolbarAction) {
  const state = view.state;
  const { from, to } = state.selection.main;
  const selectedText = state.sliceDoc(from, to);

  let insert: string;
  let cursorPos: number;

  if (action.block) {
    if (selectedText) {
      const lines = selectedText.split("\n");
      insert = lines.map((line: string) => `${action.prefix}${line}`).join("\n");
      cursorPos = from + insert.length;
    } else {
      insert = `${action.prefix}${action.placeholder}`;
      cursorPos = from + action.prefix.length + action.placeholder.length;
    }
  } else {
    if (selectedText) {
      insert = `${action.prefix}${selectedText}${action.suffix}`;
      cursorPos = from + insert.length;
    } else {
      insert = `${action.prefix}${action.placeholder}${action.suffix}`;
      cursorPos = from + action.prefix.length + action.placeholder.length;
    }
  }

  view.dispatch({
    changes: { from, to, insert },
    selection: selectedText ? { anchor: cursorPos } : { anchor: from + action.prefix.length, head: cursorPos },
  });

  view.focus();
}

/** Stable compartment ref for dynamically injecting the keymap. */
export const keymapCompartment = new Compartment();

export interface MDEditorToolbarProps {
  editorView: EditorView | null;
}

export function MDEditorToolbar({ editorView }: MDEditorToolbarProps) {
  const installedRef = useRef(false);

  // Install keyboard shortcuts into the editor once it's available
  useEffect(() => {
    if (!editorView || installedRef.current) return;

    const keymapExtension = keymap.of(
      ACTIONS.map((action) => ({
        key: action.keybinding,
        run: (view: EditorView) => {
          applyAction(view, action);
          return true;
        },
      })),
    );

    editorView.dispatch({
      effects: keymapCompartment.reconfigure(keymapExtension),
    });
    installedRef.current = true;

    return () => {
      try {
        editorView.dispatch({
          effects: keymapCompartment.reconfigure([]),
        });
      } catch {
        // view may already be destroyed
      }
      installedRef.current = false;
    };
  }, [editorView]);

  const handleClick = (action: ToolbarAction) => {
    if (!editorView) return;
    applyAction(editorView, action);
  };

  return (
    <div className="md-toolbar">
      {ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.title}
            className="md-toolbar-btn"
            title={`${action.title} (${action.shortcutLabel})`}
            onMouseDown={(e) => {
              e.preventDefault();
              handleClick(action);
            }}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
