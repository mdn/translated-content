---
title: "Document: createTouchList() メソッド"
short-title: createTouchList()
slug: Web/API/Document/createTouchList
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

**`Document.createTouchList()`** メソッドは、新しい {{DOMxRef("TouchList")}} オブジェクトを生成して返します。

## 構文

```js-nolint
createTouchList(touch1)
createTouchList(touch1, touch2)
createTouchList(touch1, touch2, /* …, */ touchN)
```

### 引数

- `touch1`, …, `touchN`
  - : 0 個以上の {{DOMxRef("Touch")}} オブジェクトです。 **メモ:** Firefox は {{DOMxRef("Touch")}} オブジェクトの[配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)も受け付けます。

### 返値

- `list`
  - : {{DOMxRef("TouchList")}} オブジェクトで、 `touches` 引数で指定された {{DOMxRef("Touch")}} オブジェクトを含みます。

## 例

この例は、 {{DOMxRef("Document.createTouchList()")}} メソッドを使用して {{DOMxRef("TouchList")}} オブジェクトを生成する様子を紹介しています。

以下のコードスニペットでは、いくつかの {{DOMxRef("Touch")}} オブジェクトがタッチ点と共に `target` 要素に生成され、 {{DOMxRef("TouchList")}} オブジェクトを作成するために使用されます。

```js
const target = document.getElementById("target");

// Create some touch points
const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Create an empty TouchList objects
const list0 = document.createTouchList();

// Create a TouchList with only one Touch object
const list1 = document.createTouchList(touch1);

// Create a list with two Touch objects
const list2 = document.createTouchList(touch1, touch2);
```

## 仕様書

この機能は、現在のどの仕様にも属しません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{DOMxRef("Touch")}}
- {{DOMxRef("TouchEvent")}}
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Document.createTouch()")}}
