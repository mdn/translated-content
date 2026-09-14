---
title: HTML exportparts グローバル属性
short-title: exportparts
slug: Web/HTML/Reference/Global_attributes/exportparts
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`exportparts`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) では、ネストした{{Glossary("shadow tree", "シャドウツリー")}}内に存在する要素をパーツ (`part`) 名でエクスポートして、そのスタイルを選択できるようにすることができます。

シャドウツリーは、識別子、クラス、スタイルが、通常の DOM に属するセレクターやクエリーによって到達することができない孤立した構造体です。シャドウツリー要素に適用できる 2 つの HTML 属性があり、これを使用すると、外部からシャドウツリーに CSS スタイルを適用することができます。これらは、 `part` および `exportparts` です。

グローバル属性 [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) は、シャドウツリー要素をその親 DOM から見えるようにします。パーツ名は、 {{CSSxRef("::part", "::part()")}} 擬似要素の引数として使用されます。これにより、シャドウツリー外の要素に CSS スタイルを適用することができます。ただし、 `::part()` 擬似要素は親 DOM からのみ表示されます。つまり、シャドウツリーが入れ子になっている場合、パーツは直接の親以外の祖先には表示されません。`exportparts` 属性は、この制限を解決します。

`exportparts` 属性は、シャドウツリーの一部をシャドウ DOM の外部から見えるようにします。この概念は「エクスポート」と呼ばれます。`exportparts` 属性は、シャドウツリーが関連付けられている要素である、要素のシャドウホストに配置されます。この属性の値は、シャドウツリー内に存在する `part` 名をカンマで区切ったリストです。これらの名前は、現在の構造の外部の DOM で利用可能になります。

```html
<template id="ancestor-component">
  <nested-component exportparts="part1, part2, part5"></nested-component>
</template>
```

`part` をエクスポートする場合、以下のスニペットに示すように、そのパーツに別の名前を割り当てるオプションがあります。 `exportparts` 属性の値は、実際には、パーツ名と割り当てられた名前とのカンマ区切りのリストです。したがって、上記のコードスニペットの `exportparts` 属性は、 `exportparts="part1:part1, part2:part2, part5:part5` と同等であり、それぞれ `part` が同じ名前でエクスポートされることを示しています。それぞれの項目では、最初の文字列はシャドウツリー内のパーツの名前を指定し、2 つ目の文字列はパーツが外部に公開される名前を指定します。

```html
<template id="ancestor-component">
  <nested-component
    exportparts="part1:exposed1, part2:exposed2"></nested-component>
</template>
```

## 例

### 基本的なコンポーネント

入れ子になった構成部分内の部品を対象とするために `exportparts` がどのように使用されるかを示すために、構成部分を作成し、それを別の構成部分に入れ子にします。

#### HTML

まず、別の部分で囲むカード部分を作成しましょう。また、新しく作成した要素を使用し、スロットにプレーンテキストをコンテンツとして入力します。

```html
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-component>
  <p slot="header_slot">これはヘッダーです</p>
  <p slot="body_slot">これは本文です</p>
  <p slot="footer_slot">これはフッターです</p>
</card-component>
```

#### JavaScript

JavaScript を使用して、上記の HTML で定義したウェブコンポーネントを定義します。

```js
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // コンストラクターでは常に最初に super を呼び出してください。
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

#### CSS

`<card-component>` シャドウツリーの各部分のスタイルを、 {{cssxref("::part")}} 擬似要素を使用して設定します。

```css
::part(body) {
  color: red;
  font-style: italic;
}
```

#### 結果

{{ EmbedLiveSample('Basic_component', '100%', '160') }}

### 入れ子のコンポーネント

上記の `<card-component>` の例に続けて、`<card-component>` を別のコンポーネント（この例では `<card-wrapper>` コンポーネント）で囲んで、入れ子コンポーネントを作成します。次に、コンポーネントのシャドウツリーの外からスタイルを設定できるように、入れ子コンポーネントから `exportparts` 属性でエクスポートする部分を作成します。

#### HTML

```html hidden
<template id="card-component-template">
  <style>
    :host {
      display: block;
    }
  </style>
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>
```

```html
<template id="card-wrapper">
  <style>
    :host {
      display: block;
    }
  </style>
  <card-component exportparts="base, header, body">
    <slot name="H" slot="header_slot"></slot>
    <slot name="B" slot="body_slot"></slot>
    <slot name="F" slot="footer_slot"></slot>
  </card-component>
</template>
```

比較のために、カスタム要素 `<card-wrapper>` および `<card-component>` を含めます。

```html
<h2>カードラッパー</h2>

<card-wrapper>
  <p slot="H">これはヘッダーです</p>
  <p slot="B">これは本文です</p>
  <p slot="F">これはフッターです</p>
</card-wrapper>

<h2>カードコンポーネント　　　</h2>

<card-component>
  <p slot="header_slot">これはヘッダーです</p>
  <p slot="body_slot">これは本文です</p>
  <p slot="footer_slot">これはフッターです</p>
</card-component>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // コンストラクターでは、常に最初に super を呼び出す
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // コンストラクターでは、常に最初に super を呼び出す
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

これで、`<card-wrapper>` 内に次のように入れ子にした場合、`<card-component>` の部分を直接対象とすることができます。

```css
h2 {
  background-color: #dedede;
}

card-wrapper,
card-component {
  border: 1px dashed blue;
  width: fit-content;
}

::part(body) {
  color: red;
  font-style: italic;
}

::part(header),
::part(footer) {
  font-weight: bold;
}
```

#### 結果

{{ EmbedLiveSample('Nested_component', '100%', '400') }}

`footer` は、`exportparts` に含まれていないため、入れ子にした場合、太字にはなりません。

### 対応付けられたパーツの公開

エクスポートしたパーツの名前を変更するには、割り当てられたパーツをカンマで区切ったリストを記載します。各割り当てられたパーツには、元の名とエクスポートした名前がコロン (`:`) で区切られて含まれます。

#### HTML

以前の `<card-wrapper>` カスタム要素を、再マッピング構文を使用して更新します （エクスポートされるパーツのリストから `body` を省略します）。

```html hidden
<template id="card-component-template">
  <div class="base" part="base">
    <div part="header"><slot name="header_slot"></slot></div>
    <div part="body"><slot name="body_slot"></slot></div>
    <div part="footer"><slot name="footer_slot"></slot></div>
  </div>
</template>

<card-wrapper>
  <p slot="H">これはヘッダーです</p>
  <p slot="B">これは本文です</p>
  <p slot="F">これはフッターです</p>
</card-wrapper>
```

```html
<template id="card-wrapper">
  <card-component
    exportparts="
       base:card__base,
       header:card__header,
       footer:card__footer
     ">
    <span slot="header_slot"><slot name="H"></slot></span>
    <span slot="body_slot"><slot name="B"></slot></span>
    <span slot="footer_slot"><slot name="F"></slot></span>
  </card-component>
</template>
```

#### JavaScript

```js hidden
customElements.define(
  "card-component",
  class extends HTMLElement {
    constructor() {
      super(); // コンストラクターでは、常に最初に super を呼び出す
      const cardComponent = document.getElementById(
        "card-component-template",
      ).content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardComponent.cloneNode(true));
    }
  },
);
```

```js
customElements.define(
  "card-wrapper",
  class extends HTMLElement {
    constructor() {
      super(); // コンストラクターでは、常に最初に super を呼び出す
      const cardWrapper = document.getElementById("card-wrapper").content;
      const shadowRoot = this.attachShadow({
        mode: "open",
      });
      shadowRoot.appendChild(cardWrapper.cloneNode(true));
    }
  },
);
```

#### CSS

`<card-wrapper>` 内から `<card-component>` の部分をターゲットとして、エクスポートされた部分のみ、公開されている部分名を使用してスタイルを設定することができます。

```css
/* エクスポートするパーツの名前を選択 */
::part(card__header) {
  font-weight: bold;
}
/* 何も選択しない。これらのパーツ名はエクスポートされていない */
::part(footer),
::part(body) {
  font-weight: bold;
}
```

#### 結果

{{ EmbedLiveSample('Exposing_mapped_parts', '100%', '160') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性
- HTML の {{HTMLElement("template")}} 要素と {{HTMLElement("slot")}} 要素
- CSS の {{CSSXref("::part")}} および {{CSSXref("::slotted")}} 擬似要素
- [`ShadowRoot`](/ja/docs/Web/API/ShadowRoot) インターフェイス
- {{DOMxRef("Element.part")}} プロパティ
- [テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)
- [CSS スコープ](/ja/docs/Web/CSS/Guides/Scoping)モジュール
