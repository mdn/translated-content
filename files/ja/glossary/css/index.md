---
title: CSS
slug: Glossary/CSS
---

**CSS** (Cascading StyleSheets) は {{glossary("browser","ブラウザー")}} でウェブページの見た目を調整する宣言型の言語です。ウェブブラウザーは、指定された要素を適切に表示するために CSS スタイル宣言を適用する働きを持ちます。スタイルの宣言には、ウェブページの見た目を決定するプロパティとプロパティの値が含まれています。

CSS は {{Glossary("HTML")}} と {{Glossary("JavaScript")}} と合わせて、核となる 3 つのウェブ技術のうちの 1 つです。CSS は普通、{{Glossary("Element","HTML 要素")}} のデザインをしますが、{{Glossary("SVG")}} や {{Glossary("XML")}} のような他のマークアップ言語でも使用できます。

1 つの CSS のルールは、{{Glossary("CSS selector", "セレクタ")}} と、関連した {{Glossary("CSS Property","プロパティ")}} がセットになっています。以下の例は、黄色い文字と黒い背景を HTML の各段落要素に適用するものです:

```css
/* "p" セレクタは、そのルールによってドキュメント内のすべての段落に作用することを表します。*/
p {
  /* "color" プロパティは文字の色を定義するもので、ここでは黄色に設定しています。*/
  color: yellow;

  /* "background-color" プロパティは背景の色を定義するもので、ここでは黒色に設定しています。*/
  background-color: black;
}
```

"カスケーディング" 機能は、ルールを参照して、ページの見た目を変更するために、セレクタがどう優先的に取り扱われるか決定します。カスケーディングはとても重要な機能で、複雑なウェブサイトでは数千もの CSS ルールがあります。

## 詳細

### 一般知識

- [CSS を学ぶ](/ja/Learn/CSS)
- Wikipedia の [CSS](https://ja.wikipedia.org/wiki/CSS) 記事

### 技術的な文書

- [MDN 上の CSS ドキュメント](/ja/docs/Web/CSS)
- [The CSS Working Group current work](http://www.w3.org/Style/CSS/current-work)
