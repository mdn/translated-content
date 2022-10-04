---
title: Document.createTouchList()
slug: Web/API/Document/createTouchList
---

{{APIRef("DOM")}}{{Deprecated_Header}}

> **メモ:** {{Gecko("25.0")}} 以前では、このメソッドは {{DOMxRef("DocumentTouch")}} ミックスインで定義されていました。

**`Document.createTouchList()`** メソッドは、新しい {{DOMxRef("TouchList")}} オブジェクトを生成して返します。

## 構文

```
var list = DocumentTouch.createTouchList([touch1 [, touch2 [, ...]]]);
```

### 引数

- `touches`
  - : 0 個以上の {{DOMxRef("Touch")}} オブジェクトです。 **注:** Firefox は {{DOMxRef("Touch")}} オブジェクトの[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)も受け付けます。

### 返値

- `list`
  - : {{DOMxRef("TouchList")}} オブジェクトで、 `touches` 引数で指定された {{DOMxRef("Touch")}} オブジェクトを含みます。

## 例

この例は、 {{DOMxRef("Document.createTouchList()")}} メソッドを使用して {{DOMxRef("TouchList")}} オブジェクトを生成する様子を紹介しています。

以下のコードスニペットでは、いくつかの {{DOMxRef("Touch")}} オブジェクトがタッチ点と共に `target` 要素に生成され、 {{DOMxRef("TouchList")}} オブジェクトを作成するために使用されます。

```js
var target = document.getElementById("target");

// Create some touch points
var touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
var touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Create an empty TouchList objects
var list0 = document.createTouchList();

// Create a TouchList with only one Touch object
var list1 = document.createTouchList(touch1);

// Create a list with two Touch objects
var list2 = document.createTouchList(touch1, touch2);
```

## 仕様書

| 仕様書                                                                                                                                                       | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Touch Events", "#widl-Document-createTouchList-TouchList-Touch-touches", "Document.createTouchList()")}} | {{Spec2("Touch Events")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{DOMxRef("Touch")}}
- {{DOMxRef("TouchEvent")}}
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Document.createTouch()")}}
