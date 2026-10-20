---
title: "ShadowRoot: elementFromPoint() メソッド"
short-title: elementFromPoint()
slug: Web/API/ShadowRoot/elementFromPoint
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{APIRef("DOM")}}{{Non-standard_Header}}

**`elementFromPoint()`** メソッドは {{domxref("ShadowRoot")}} オブジェクト上で利用可能で、ビューポートを基準とした指定された座標にある、最上位のシャドウルートレイヤーの要素（表示の Z 順序で最も上位にあり、ポインタイベントを受け取ることができるシャドウルート）を返します。{{cssxref("pointer-events")}} が `none` に設定されているシャドウルート要素は無視されます。

指定された点がシャドウルートの境界外にある場合、結果は `undefined` となります。

## 構文

```js-nolint
elementFromPoint(x, y)
```

### 引数

- `x`
  - : 点の水平座標で、現在の{{Glossary("viewport", "ビューポート")}}の左端からの相対値です。
- `y`
  - : 点の垂直座標で、現在の{{Glossary("viewport", "ビューポート")}}の上端からの相対値です。

### 返値

{{domxref("Element")}}。指定された座標にある最上位のシャドウルート要素（存在する場合）。

## 例

この例では、HTML 内に {{htmlelement("template")}} が存在すると仮定して、`<my-custom-element>` を定義します。追加されたカスタム要素がビューポートの左上角に隣接している場合、またはその一部が左上角と重なっている場合、この点でカスタム要素の最上層にある要素には、細い赤い破線の境界線が表示されます。

```js
customElements.define(
  "my-custom-element",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("my-custom-element-template");
      const sRoot = this.attachShadow({ mode: "open" });
      sRoot.appendChild(document.importNode(template.content, true));
      // ビューポートの左上角にある最上部の要素を取得する
      const srElement = this.shadowRoot.elementFromPoint(0, 0);
      // この要素に境界線を適用する
      srElement.style.border = "1px dashed red";
    }
  },
);
```

## 仕様書

どの標準規格にも属しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.elementsFromPoint()")}}
- {{domxref("Document.elementFromPoint()")}}
