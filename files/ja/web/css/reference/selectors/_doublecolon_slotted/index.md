---
title: ::slotted()
slug: Web/CSS/Reference/Selectors/::slotted
original_slug: Web/CSS/::slotted
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

**`::slotted()`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、 HTML テンプレート内にあるスロットに配置された任意の要素を表します (詳しくは[テンプレートとスロットの利用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)をご覧ください)。

これは[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) 内に配置された CSS の中で使われた時のみ機能します。なお、このセレクターはスロット内に配置されたテキストノードは選択しません。実際の要素のみを対象にします。

{{InteractiveExample("CSS デモ: ::slotted()", "tabbed-shorter")}}

```css interactive-example
/* This CSS is being applied inside the shadow DOM. */

::slotted(.content) {
  background-color: aqua;
}

h2 ::slotted(span) {
  background: silver;
}
```

```html interactive-example
<template id="card-template">
  <div>
    <h2><slot name="caption">title goes here</slot></h2>
    <slot name="content">content goes here</slot>
  </div>
</template>

<my-card>
  <span slot="caption">Error</span>
  <p class="content" slot="content">Build failed!</p>
</my-card>
```

```js interactive-example
customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("card-template");
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));

      const elementStyle = document.createElement("style");
      elementStyle.textContent = `
        div {
          width: 200px;
          border: 2px dotted red;
          border-radius: 4px;
        }`;
      shadow.appendChild(elementStyle);

      const cssTab = document.querySelector("#css-output");
      const editorStyle = document.createElement("style");
      editorStyle.textContent = cssTab.textContent;
      shadow.appendChild(editorStyle);
      cssTab.addEventListener("change", () => {
        editorStyle.textContent = cssTab.textContent;
      });
    }
  },
);
```

```css
/* スロット内に配置された任意の要素を選択 */
::slotted(*) {
  font-weight: bold;
}

/* スロット内に配置された <span> 要素を選択 */
::slotted(span) {
  font-weight: bold;
}
```

## 構文

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## 例

### スロット化された要素を強調

この例では、 3 つのスロットを持つ単純なテンプレートを使用します。

```html
<template id="person-template">
  <div>
    <h2>個人 ID カード</h2>
    <slot name="person-name">氏名不明</slot>
    <ul>
      <li><slot name="person-age">年齢不明</slot></li>
      <li><slot name="person-occupation">職業不明</slot></li>
    </ul>
  </div>
</template>
```

カスタム要素 `<person-details>` は以下のように定義されています。この場合、 JavaScript でスタイルを追加していますが、 {{HTMLElement("template")}} 内の {{HTMLElement("style")}} ブロックで追加しても同じ効果があります。

```js
customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("person-template");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      let style = document.createElement("style");
      style.textContent =
        "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
        "h2 { margin: 0 0 10px; }" +
        "ul { margin: 0; }" +
        "p { margin: 10px 0; }" +
        "::slotted(*) { color: gray; font-family: sans-serif; } " +
        "::slotted(span) {text-decoration: underline;} ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

`style` 要素のコンテンツを埋めると、スロットになるすべての要素を選択し (`::slotted(*)`)、それぞれに異なるフォントと色を与えているのが分かるでしょう。これにより、隣のコンテンツが埋まらなかったスロットよりも目立たせることができます。 `<span>` と {{HTMLElement("p")}} を区別するために、スロット付き {{HTMLElement("span")}} をすべてスタイル設定しました (`::slotted(span)`)。

このマークアップには 3 つのカスタム要素が記載されています。その中には、不正なスロット名を持ち、 `<template>` とはソース順序が異なるカスタム要素も含まれています。

```html
<person-details>
  <p slot="person-name">ワンダーウーマン</p>
  <span slot="person-age">不死身</span>
  <span slot="person-occupation">スーパーヒーロー</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">活動家</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">タイムトラベラー</span>
  <p slot="person-name">ドクターフー</p>
</person-details>
```

#### 結果

{{EmbedLiveSample('Highlighting_slotted_elements', 500, 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- [CSS スコープ](/ja/docs/Web/CSS/Guides/Scoping)モジュール
- HTML [`slot`](/ja/docs/Web/HTML/Reference/Global_attributes/slot) 属性
- HTML {{HTMLElement("slot")}} 要素
- HTML {{HTMLElement("template")}} 要素
- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
