import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";

// ایجاد lowlight با استفاده از createLowlight
const lowlight = createLowlight();

// دیگر نیازی به ثبت زبان‌ها نیست
// فقط کافیست زبان‌ها به طور مستقیم به `lowlight` ارجاع داده شوند.

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  CodeBlockLowlight.configure({
    lowlight,
    languages: {
      html,
      css,
      js,
      ts,
    },
  }),
  Dropcursor,
  Image,
];
