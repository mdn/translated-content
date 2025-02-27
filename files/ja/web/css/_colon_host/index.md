---
title: :host
slug: Web/CSS/:host
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

**`:host`** は [CSS](/ja/docs/Web/CSS) の [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、その CSS を含む[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のシャドウホストを選択します。 — 言い換えれば、シャドウ DOM の中からカスタム要素を選択できるようにします。

> [!NOTE]
> これはシャドウ DOM の外で使われたときには効果がありません。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host.html", "tabbed-shorter")}}

```css
/* シャドウのルートホストを選択 */
:host {
  font-weight: bold;
}
```

## 構文

```css
:host {
  /* ... */
}
```

## 例

### シャドウホストのスタイル付け

以下のスニペットは、 [host セレクターの例](https://github.com/mdn/web-components-examples/tree/main/host-selectors)（[ライブでも参照](https://mdn.github.io/web-components-examples/host-selectors/)）から取りました。

この例では、テキストの周りを囲むことができる簡単なカスタム要素 — `<context-span>` — を使います。

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

要素のコンストラクターの中で、 `style` および `span` 要素を作成し、 `span` の中をカスタム要素の中身で埋め、 `style` 要素をいくつかの CSS ルールで埋めます。

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
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

`:host { background: rgba(0 0 0 / 10%); padding: 2px 5px; }` のルールは、文書中の `<context-span>` 要素（このインスタンスのシャドウホスト）のすべてのインスタンスにスタイル付けします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}
- [CSS スコープ](/ja/docs/Web/CSS/CSS_scoping)モジュール
