import React, { useState, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";
import { MDEditorToolbar, keymapCompartment } from "./MDEditorToolbar";

export interface MDEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MDEditor({ value, onChange }: MDEditorProps) {
  const [editorView, setEditorView] = useState<EditorView | null>(null);

  const handleCreateEditor = useCallback((view: EditorView) => {
    setEditorView(view);
  }, []);

  return (
    <div className="md-editor-wrapper">
      <MDEditorToolbar editorView={editorView} />
      <div className="md-editor-codemirror">
        <CodeMirror
          value={value}
          height="100%"
          extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), keymapCompartment.of([])]}
          onChange={onChange}
          onCreateEditor={handleCreateEditor}
          theme="light"
          className="cm-editor-fullscreen"
        />
      </div>
    </div>
  );
}
