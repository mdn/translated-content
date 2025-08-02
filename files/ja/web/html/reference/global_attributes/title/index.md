---
title: HTML title グローバル属性
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`title`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は、要素に関するアドバイザリー情報を表すテキストを含みます。

{{InteractiveExample("HTML デモ: title", "tabbed-shorter")}}

```html-nolint interactive-example
<p>
  <code>title</code> 属性を使用して、 <code>iframe</code> のコンテンツをスクリーンリーダーに明確に識別します。
</p>

<iframe
  title="Wikipedia page for the HTML language"
  src="https://en.m.wikipedia.org/wiki/HTML"></iframe>
<iframe
  title="Wikipedia page for the CSS language"
  src="https://en.m.wikipedia.org/wiki/CSS"></iframe>
```

```css interactive-example
iframe {
  height: 200px;
  margin-bottom: 24px;
  width: 100%;
}
```

`title` 属性の主な用途は、 {{HTMLElement("iframe")}} 要素の支援技術のためのラベル付けです。

`title` 属性は、[データ表](/ja/docs/Web/HTML/Reference/Elements/table)内のコントロールのラベル付けに使用することもできます。

`title` 属性は、[`<link rel="stylesheet">`](/ja/docs/Web/HTML/Reference/Elements/link) に追加すると、代替のスタイルシートを作成することができます。代替スタイルシートを `<link rel="alternate">` で定義する場合、この属性は必須であり、空でない文字列を設定する必要があります。

{{htmlelement('abbr')}} の開始タグに `title` を記述する場合は、略語や頭字語の完全な展開形である必要があります。可能であれば、`title` を使用するのではなく、略語や頭字語を最初に使用する際に、 `<abbr>` を使用して略語をマークアップし、プレーンテキストで略語の展開形を提供してください。こうすることで、すべてのユーザーがその略語や頭字語が、どのような名前や用語を短縮しているのかを知ることができ、同時にユーザーエージェントには、コンテンツをどのように告知すればよいかのヒントを提供することができます。

{{HTMLElement("input")}} 要素にプログラム的に関連付けられたラベルを提供するために `title` を使用することができますが、これは良い習慣ではありません。代わりに {{HTMLElement("label")}} を使用してください。

## 複数行のタイトル

`title` 属性は複数の行を含むことができます。それぞれの `U+000A LINE FEED` (`LF`) 文字が改行を表します。いくつか注意しなければならないのは、これが次のように 2 行にわたって描画されることです。

### HTML

```html
<p>
  Newlines in <code>title</code> should be taken into account, like
  <span
    title="This is a
multiline title"
    >example</span
  >.
</p>
```

### 結果

{{EmbedLiveSample('Multiline_titles')}}

## title 属性の継承

要素に `title` 属性がない場合、属性値は親ノードから継承され、さらにそれはその親ノードから継承されるというようになります。

この属性が空文字列に設定されると、その祖先の `title` が関係なく、この要素のツールチップとして使用するべきではないことを意味します。

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### 結果

{{EmbedLiveSample('Title_attribute_inheritance')}}

## アクセシビリティの考慮

`title` 属性を使用することは、次のような人々にとって大きな問題になります。

- タッチのみの機器を使用している人々
- キーボードで操作している人々
- 読み上げソフトや拡大鏡などの支援技術で操作している人々
- 細かい運動制御障碍を経験している人々
- 認知障碍のある人

これは、ブラウザーが表示するページを追加支援技術が解釈することによる複合性について、ブラウザーの互換性に一貫性がないためです。ツールチップ効果が必要であれば、上記の閲覧方法でもアクセスできる[もっとアクセシブルな技術を使用する](https://inclusive-components.design/tooltips-toggletips/)方が効果的です。

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)。
- {{domxref("HTMLElement.title")}} は、この属性を反映します。
