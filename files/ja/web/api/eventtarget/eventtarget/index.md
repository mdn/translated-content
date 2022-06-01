---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
tags:
  - コンストラクター
  - リファレンス
browser-compat: api.EventTarget.EventTarget
translation_of: Web/API/EventTarget/EventTarget
---
{{APIRef("DOM")}}

**`EventTarget()`** コンストラクターは、新しい {{domxref("EventTarget")}} オブジェクトのインスタンスを作成します。

> **Note:** このコンストラクターを明示的に呼び出すことは、非常にまれです。ほとんどの場合、このコンストラクターは {{domxref("EventTarget")}} から派生したオブジェクトのコンストラクターの中で、 [`super`](/ja/docs/Web/JavaScript/Reference/Operators/super) キーワードによって使用されます。

## 構文

```js
new EventTarget();
```

### 引数

なし。

### 返値

{{domxref("EventTarget")}} オブジェクトのインスタンス。

## 例

```js
class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("EventTarget")}}
