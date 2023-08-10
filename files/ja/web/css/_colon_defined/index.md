---
title: ":defined"
slug: Web/CSS/:defined
---

{{ CSSRef }}

**`:defined`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、定義されているすべての要素を表します。これにはブラウザーに組み込まれたすべての標準要素と、 ({{domxref("CustomElementRegistry.define()")}} メソッドを使用して) 定義に成功したカスタム要素が含まれます。

```css
/* 定義されたすべての要素を選択 */
:defined {
  font-style: italic;
}

/* 特定の custom 要素のすべてのインスタンスを選択 */
simple-custom:defined {
  display: block;
}
```

## 構文

```
:defined
```

## 例

### 定義されるまで要素を非表示にする

以下のスニペットは、 [defined-pseudo-class](https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class) のデモから取ったものです ([ライブでも参照してください](https://mdn.github.io/web-components-examples/defined-pseudo-class/)).

このデモでは、非常にシンプルで些細なカスタム要素を定義しています。

```js
customElements.define(
  "simple-custom",
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement("div");
      divElem.textContent = this.getAttribute("text");

      let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(divElem);
    }
  },
);
```

次に、この要素のコピーを、標準的な `<p>` と共に文書に挿入します。

```html
<simple-custom text="Custom element example text"></simple-custom>

<p>Standard paragraph example text</p>
```

CSS では、まず以下のルールを設定します。

```css
/* 2 つの要素を背景で区別できるようにする */
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

/* カスタム要素と組み込み要素を両方イタリック体にする */
:defined {
  font-style: italic;
}
```

それから、カスタム要素が定義されていないときには非表示にし、定義されていたらブロックレベル要素として定義して表示するという 2 つのルールを設定します。

```css
simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}
```

これは、複雑なカスタム要素があってページの読み込みを待ちたいときに便利です。定義が完了するまで要素のインスタンスを非表示にして、ページ上でスタイル適用前の醜い要素が一瞬現れるのを防ぐことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
