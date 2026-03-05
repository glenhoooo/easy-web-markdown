import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export interface MDPreviewProps {
  value: string;
}

export function MDPreview({ value }: MDPreviewProps) {
  return (
    <div className="markdown-body">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {value}
      </Markdown>
    </div>
  );
}
