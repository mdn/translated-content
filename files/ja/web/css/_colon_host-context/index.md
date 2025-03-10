---
title: :host-context()
slug: Web/CSS/:host-context
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

**`:host-context()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、その中で使用される CSS を含む[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のシャドウホストを選択します。（そのシャドウ DOM の中からカスタム要素を選択することができます）。ただし、関数の引数として指定されたセレクターが DOM 階層の中にあるシャドウホストの祖先に一致する場合に限ります。

言い換えれば、これはカスタム要素、またはそのカスタム要素のシャドウ DOM 内の何らかの要素が、外部 DOM 内の位置、または祖先要素に適用されるクラス/属性に基づいて異なるスタイルが適用できるようにします。

この典型的な使用例として、例えば `h1` のような子孫セレクター式を使用して、 `<h1>` の中にあるカスタム要素のインスタンスのみを選択することができます。例えば、 `<body>` に `.dark-theme` クラスが適用されたときに異なる文字色を適用するような場合です。

> [!NOTE]
> これは、シャドウ DOM の外で使用しても効果はありません。

{{InteractiveExample("CSS Demo: :host-context()", "tabbed-shorter")}}

```css interactive-example
/* Following CSS is being applied inside the shadow DOM. */

:host-context(.container) {
  border: 5px dashed green;
}

:host-context(h1) {
  color: red;
}
```

```html interactive-example
<!-- elements outside shadow dom -->
<div class="container">
  <h1 id="shadow-dom-host"></h1>
</div>
```

```js interactive-example
const shadowDom = init();

// add a <span> element in the shadow DOM
const span = document.createElement("span");
span.textContent = "Inside shadow DOM";
shadowDom.appendChild(span);

// attach shadow DOM to the #shadow-dom-host element
function init() {
  const host = document.getElementById("shadow-dom-host");
  const shadowDom = host.attachShadow({ mode: "open" });

  const cssTab = document.querySelector("#css-output");
  const shadowStyle = document.createElement("style");
  shadowStyle.textContent = cssTab.textContent;
  shadowDom.appendChild(shadowStyle);

  cssTab.addEventListener("change", () => {
    shadowStyle.textContent = cssTab.textContent;
  });
  return shadowDom;
}
```

```css
/* 指定されたセレクター引数の子孫である場合にのみ、
   シャドウルートホストを選択します。 */
:host-context(h1) {
  font-weight: bold;
}

/* .dark-theme クラスが文書本体に適用されている場合に、
   段落のテキストの色を黒から白に変更します。 */
p {
  color: #000;
}

:host-context(body.dark-theme) p {
  color: #fff;
}
```

## 構文

```css-nolint
:host-context(<compound-selector>) {
  /* ... */
}
```

## 例

### シャドウホストの選択的なスタイル設定

以下は、[ホストセレクターの例](https://github.com/mdn/web-components-examples/tree/main/host-selectors)（[ライブでも見る](https://mdn.github.io/web-components-examples/host-selectors/)）から抜粋したものです。

この例では、テキストを囲むことができる単純なカスタム要素 `<context-span>` があります。

```html
<h1>
  ホストセレクターの<a href="#"><context-span>例</context-span></a>
</h1>
```

要素のコンストラクター内で `style` 要素と `span` 要素を作成し、 `span` 要素にカスタム要素のコンテンツを入れ、`style` 要素に CSS ルールを入れます。

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

`:host-context(h1) { font-style: italic; }` および `:host-context(h1):after { content: " - no links in headers!" }` のルールは `<h1>` 内の `<context-span>` 要素のインスタンス（この例ではシャドウホスト）をスタイル設定します。このデザインでは、カスタム要素が `<h1>` の中に現れてはいけないことを明確にするために使用しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
- CSS {{cssxref(":host")}} 擬似クラス
- CSS {{cssxref(":host_function", ":host()")}} 擬似クラス
- CSS {{CSSXref("::slotted")}} 擬似要素
- HTML {{HTMLElement("template")}} 要素
- [CSS スコープ](/ja/docs/Web/CSS/CSS_scoping)モジュール
