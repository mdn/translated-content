---
title: '::slotted()'
slug: Web/CSS/::slotted
tags:
  - '::slotted'
  - CSS
  - レイアウト
  - 擬似要素
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.slotted
translation_of: Web/CSS/::slotted
---
{{ CSSRef }}

**`::slotted()`** は [CSS](/ja/docs/Web/CSS) の [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、 HTML テンプレート内にあるスロットに配置された任意の要素を表します (詳しくは[テンプレートとスロットの利用](/ja/docs/Web/Web_Components/Using_templates_and_slots)をご覧ください)。

これは [shadow DOM](/ja/docs/Web/Web_Components/Using_shadow_DOM) 内に配置された CSS の中で使われた時のみ機能します。なお、このセレクターはスロット内に配置されたテキストノードは選択しません。実際の要素のみを対象にします。

```css
/* スロット内に配置された任意の要素を選択 */
::slotted(*) {
  font-weight: bold;
}

/* スロット内に配置された &lt;span&gt; 要素を選択 */
::slotted(span) {
  font-weight: bold;
}
```

## 構文

{{csssyntax}}

## 例

###スロット化された要素を強調

以下のコードの断片は [slotted-pseudo-element](https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element) デモから取られたものです ([ライブでもご覧ください](https://mdn.github.io/web-components-examples/slotted-pseudo-element/))。

このデモでは、 3 つのスロットを持つ単純なテンプレートを使用します。

```html
<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>
```

カスタム要素 — `<person-details>` — は以下のように定義されています。

```js
customElements.define('person-details',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('person-template');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'});

      let style = document.createElement('style');
      style.textContent = 'div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }' +
                           'h2 { margin: 0 0 10px; }' +
                           'ul { margin: 0; }' +
                           'p { margin: 10px 0; }' +
                           '::slotted(*) { color: gray; font-family: sans-serif; } ';

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
  }
})
```

`style` 要素のコンテンツを埋めると、スロットになるすべての要素を選択し (`::slotted(*)`)、それぞれに異なるフォントと色を与えているのが分かるでしょう。これにより、隣のコンテンツが埋まらなかったスロットよりも目立たせることができます。

この要素がページに挿入されると、以下のように見えます。

```html
<person-details>
  <p slot="person-name">Dr. Shazaam</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
