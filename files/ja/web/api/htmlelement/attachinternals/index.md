---
title: HTMLElement.attachInternals()
slug: Web/API/HTMLElement/attachInternals
tags:
  - API
  - 要素
  - メソッド
  - リファレンス
  - attachInternals
browser-compat: api.HTMLElement.attachInternals
translation_of: Web/API/HTMLElement/attachInternals
---
{{APIRef('DOM')}}

**`HTMLElement.attachInternals()`** メソッドは、 {{domxref("ElementInternals")}} オブジェクトを返します。このメソッドにより、[カスタム要素](/ja/docs/Web/Web_Components/Using_custom_elements)が HTML フォームに参加することができるようになります。 `ElementInternals` インターフェイスは、標準的な HTML フォーム要素と同じようにこれらの要素を扱うためのユーティリティを提供し、また、要素に対して[アクセシビリティオブジェクトモデル](https://wicg.github.io/aom/explainer.html)を公開します。

## 構文

```js
var internals = element.attachInternals();
```

### 引数

なし。

### 返値

{{domxref("ElementInternals")}} オブジェクト。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : この要素がカスタム要素でなかった場合に発生します。
- `NotSupportedError` {{domxref("DOMException")}}
  - : この要素の定義の一部で「内部」の機能が無効になっていた場合に発生します。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 同じ要素に対してこのメソッドを 2 度呼び出したときに発生します。

## 例

次の例では、カスタムフォームに関連する要素を {{domxref("HTMLElement.attachInternals")}} で作成する方法を示しています。そして、 {{domxref("ElementInternals.form")}} プロパティがコンソールに出力され、 {{domxref("ElementInternals")}} オブジェクトがあることを実証しています。

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  /* ... */

  window.customElements.define("custom-checkbox", CustomCheckbox);
})();

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.form);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [More capable form controls](https://web.dev/more-capable-form-controls/)
- [Creating custom form controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
