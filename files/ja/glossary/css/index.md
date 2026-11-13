---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**CSS** (Cascading StyleSheets) は {{glossary("browser","ブラウザー")}} でのウェブページの見た目を調整する宣言型の言語です。

ウェブブラウザーは、指定された要素を適切に表示するために CSS スタイル宣言を適用する働きを持ちます。スタイルの宣言には、ウェブページの見た目を決定するプロパティとプロパティの値が含まれています。

CSS は {{Glossary("HTML")}} と {{Glossary("JavaScript")}} と合わせて、核となる 3 つのウェブ技術のうちの 1 つです。CSS は普通、{{Glossary("Element","HTML 要素")}} のデザインをしますが、{{Glossary("SVG")}} や {{Glossary("XML")}} のような他のマークアップ言語でも使用できます。

CSS のルールは、 {{Glossary("property/CSS","プロパティ")}} に関連付けられた一連の{{Glossary("CSS selector", "セレクター")}}です。以下の例は、黄色い文字と黒い背景を HTML の各段落要素に適用するものです:

```css
/* "p" セレクターは、そのルールによってドキュメント内のすべての段落に作用することを表します。*/
p {
  /* "color" プロパティは文字の色を定義するもので、ここでは黄色に設定しています。*/
  color: yellow;

  /* "background-color" プロパティは背景の色を定義するもので、ここでは黒色に設定しています。*/
  background-color: black;
}
```

「カスケード」とは、ページの外観を変更するためにセレクターをどのように優先づけするかを支配するルールを参照します。カスケードはとても重要な機能で、複雑なウェブサイトでは数千もの CSS ルールがあります。

## 関連情報

- [CSS を学ぶ](/ja/docs/Learn_web_development/Core/Styling_basics)
- [CSS のドキュメント](/ja/docs/Web/CSS)
- [CSS](https://ja.wikipedia.org/wiki/CSS) （ウィキペディア）
- [The CSS Working Group current work](https://www.w3.org/Style/CSS/current-work)
