---
title: CSS 生成コンテンツの使用
slug: Learn/CSS/Howto/Generated_content
tags:
  - 基本
  - 初心者
  - CSS
  - CSS:Getting_Started
  - グラフィック
  - ガイド
  - NeedsUpdate
  - ウェブ
translation_of: Learn/CSS/Howto/Generated_content
---
{{LearnSidebar}}

この記事では、 CSS を使用して文書を表示するときにコンテンツを追加するいくつかの方法について説明します。スタイルシートを修正して、テキストコンテンツや画像を追加するのです。

CSS の重要な利点の一つが、文書のスタイルをそのコンテンツから分離しやすくすることです。しかし、あるコンテンツを文書の一部としてではなく、スタイルシートの一部として指定することが理にかなっている場合もあります。テキストや画像の内容が文書の構造に密接に関連している場合は、スタイルシートの中で指定することができます。

> **Note:** スタイルシート内で記述されたコンテンツは、 DOM の一部にはなりません。

スタイルシートでコンテンツを指定すると、厄介な問題が発生することがあります。例えば、スタイルシートが複数の言語版の文書で共有されていることがあります。スタイルシートの中で翻訳が必要なコンテンツを指定する場合は、スタイルシートのその部分を別なファイルに置き、適切な言語版の文書にリンクするようにする必要があります。

この問題は、指定するコンテンツが、あらゆる言語や文化に適用される記号や画像で構成されている場合には発生しません。

## 例

### テキストコンテンツ

CSS で要素の前または後ろにテキストコンテンツを挿入することができます。このためには、ルールを作成して {{cssxref("::before")}} または {{cssxref("::after")}} をそのセレクターに追加します。宣言部分には、 {{ cssxref("content") }} プロパティと、その値としてテキストコンテンツを記述してください。

#### HTML

```html
A text where I need to <span class="ref">something</span>
```

#### CSS

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}
```

#### 出力

{{ EmbedLiveSample('Text_content', 600, 30) }}

スタイルシートの文字セットは規定で UTF-8 ですが、リンク、スタイルシート自身の内部、もしくはその他の方法で指定することができます。CSS 仕様書の [4.4 CSS style sheet representation](https://www.w3.org/TR/CSS21/syndata.html#q23) をご覧ください。

個々の文字は、バックスラッシュをエスケープ文字として使用して、エスケープ機構を使って記述することもできます。例えば、 "\265B" はチェスの黒クイーン ♛ です。詳しくは CSS 仕様書の [Referring to characters not represented in a character encoding](https://www.w3.org/TR/CSS21/syndata.html#q24) と [Characters and case](https://www.w3.org/TR/CSS21/syndata.html#q6) をご覧ください。

### 画像コンテンツ

要素の前や後ろに画像を追加するには、 {{ cssxref("content") }} プロパティの値として画像ファイルの URL を記述します。

このルールは `glossary` を持つすべてのリンクの後ろに、空白とアイコンを追加します。

#### HTML

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

#### CSS

```css
a.glossary::after {
   content: " " url("glossary-icon.gif");
}
```

#### 出力結果

{{ EmbedLiveSample('Image_content', 600, 40) }}
