---
title: Element.shadowRoot
slug: Web/API/Element/shadowRoot
tags:
  - API
  - Element
  - プロパティ
  - リファレンス
  - ShadowRoot
  - シャドウ DOM
browser-compat: api.Element.shadowRoot
translation_of: Web/API/Element/shadowRoot
---
{{APIRef("Shadow DOM")}}

`Element.shadowRoot` は読み取り専用のプロパティで、その要素がホストになっているシャドウルートを表します。

既に存在している要素にシャドウルートを追加するには {{DOMxRef("Element.attachShadow()")}} を使用してください。

## 構文

```js
var shadowroot = element.shadowRoot;
```

### 値

{{DOMxRef("ShadowRoot")}} オブジェクトインスタンス、またはシャドウルートが {{DOMxRef("ShadowRoot.mode", "mode")}} に `closed` を設定されて取り付けられた場合は `null` です（詳しくは {{DOMxRef("Element.attachShadow()")}} を参照してください）。

## 例

次のスニペットは [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) の例から取ったものです ([ライブで確認](https://mdn.github.io/web-components-examples/life-cycle-callbacks))。その要素の属性で指定された大きさと色の正方形を表示する要素を生成します。

`<custom-square>` 要素のクラス定義の中に、外部関数である `updateStyle()` を呼び出すライフサイクルコールバックをいくつか入れて、実際にサイズと色を要素に適用しています。引数として `this` （カスタム要素そのもの）を渡していることが分かるでしょう。

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

`updateStyle()` 関数自体で、{{domxref("Element.shadowRoot")}} を使用してシャドウ DOM への参照を取得します。ここから標準的な DOM 走査技術を使用して、シャドウ DOM 内の {{htmlelement("style")}} 要素を見つけ、その中にある CSS を更新します。

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach(childNode => {
    if (childNode.nodeName === 'STYLE') {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute('l')}px;
          height: ${elem.getAttribute('l')}px;
          background-color: ${elem.getAttribute('c')};
        }
      `;
    }
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.openOrClosedShadowRoot")}} {{non-standard_inline}}
