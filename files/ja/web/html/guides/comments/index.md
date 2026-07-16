---
title: HTML コメント <!-- … --> の使用
short-title: コメント
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

HTML の**コメント**は、マークアップに説明メモを追加したり、文書内の特定の箇所をブラウザーに解釈させないようにしたりするために使用します。

コメントは文字列 `<!--` で始まり、文字列 `-->` で終わります。通常、その間にはテキストが含まれます。このテキストは文字列 `>` または `->` で始めることはできません。また、文字列 `-->` または `--!>` を含むことも、文字列 `<!-` で終わることもできません。ただし、`<!` は許可されています。

ブラウザーはコードをレンダリングする際にコメントを無視します。言い換えれば、コメントはページ上には表示されず、コード上にのみ表示されます。HTML コメントは、コードやロジックについて役立つメモを書く方法です。

上記のことは、[XML](/ja/docs/Web/XML) コメントにも当てはまります。さらに XML、例えば [SVG](/ja/docs/Web/SVG) や [MathML](/ja/docs/Web/MathML) マークアップなどでは、コメントに文字列 `--` を格納することはできません。

コメントは単一の行で使用することも、複数行にわたって使用することもできます。コメントは以下の場所で使用することができます。

- {{Glossary("Doctype")}} の前後
- {{HTMLElement("html")}} 要素の前後
- ほとんどの要素コンテンツ。ただし、{{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}} は、コンテンツを生のテキストとして解釈するため不可。

> [!NOTE]
> `<script>` 要素は HTML コメントを持たず、[JavaScript コメント](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#コメント)を使用すべきですが、JavaScript に対応していない古いブラウザーではコンテンツがテキストとして表示されないように、スクリプトコンテンツ全体を HTML コメントで囲むという慣習が残っていました。これは現在では [JavaScript 自体の古い機能](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_コメント)であり、これに頼るべきではありません。

## 構文

```html
<!-- コメント -->
```

## 例

```html
<!-- 1 行コメント -->

<!--
複数行に
展開された
コメント
-->

<!-- 下記のコメントは、内部の
   HTML を無効にしている -->
<!--
<p>
   このコンテンツは表示されません。
</p>
-->
```

## メモ

HTML コメントはコンテンツとしてのみ許可されています。タグ内、例えば [HTML 属性](/ja/docs/Glossary/Attribute)の前に使用することはできません。

`<!-- -->` コメント構文を使用するほとんどのプログラミング言語と同様に、コメントはネスト（入れ子）にすることができません。言い換えれば、`<!--` の後に出現した最初の `-->` が、コメントが閉じられたことを意味します。

コメントは `<` で始まり `>` で終わりますが、コメントは HTML 要素ではありません。

## 仕様書

{{Specifications}}

## 関連情報

- [JavaScript のコメント](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#コメント)
- [CSS のコメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
- {{domxref("Comment", "コメント")}} API（`Comment` は {{domxref("Node")}} を継承）
