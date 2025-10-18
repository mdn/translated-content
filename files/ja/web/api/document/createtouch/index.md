---
title: "Document: createTouch() メソッド"
short-title: createTouch()
slug: Web/API/Document/createTouch
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

**`Document.createTouch()`** メソッドは、新しい {{DOMxRef("Touch")}} オブジェクトを生成して返します。

> [!NOTE]
> {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}} コンストラクターを使用してください。

## 構文

```js-nolint
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### 引数

> [!NOTE]
> すべての引数が省略可能です。

- `view`
  - : タッチが発生した {{DOMxRef("window")}} です。
- `target`
  - : タッチの {{DOMxRef("EventTarget")}} です。
- `identifier`
  - : {{DOMxRef("Touch.identifier")}} の値です。
- `pageX`
  - : {{DOMxRef("Touch.pageX")}} の値です。
- `pageY`
  - : {{DOMxRef("Touch.pageY")}} の値です。
- `screenX`
  - : {{DOMxRef("Touch.screenX")}} の値です。
- `screenY`
  - : {{DOMxRef("Touch.screenY")}} の値です。

> [!NOTE]
> このメソッドの以前のバージョンでは、以下の追加の引数を含んでいましたが、これらの引数は下記の標準のいずれにも含まれていません。従って、これらの引数は非推奨であり、使用されないと考えてください。

- `clientX`
  - : {{DOMxRef("Touch.clientX")}} の値です。
- `clientY`
  - : {{DOMxRef("Touch.clientY")}} の値です。
- `radiusX`
  - : {{DOMxRef("Touch.radiusX")}} の値です。
- `radiusY`
  - : {{DOMxRef("Touch.radiusY")}} の値です。
- `rotationAngle`
  - : {{DOMxRef("Touch.rotationAngle")}} の値です。
- `force`
  - : {{DOMxRef("Touch.force")}} の値です。

### 返値

- `touch`
  - : 入力引数で記述されたように構成された {{DOMxRef("Touch")}} オブジェクトです。

## 例

この例は {{DOMxRef("Document.createTouch()")}} メソッドを使用して {{DOMxRef("Touch")}} オブジェクトを生成する様子を示しています。

以下のコードスニペットでは、2 つの {{DOMxRef("Touch")}} オブジェクトが `target` 要素に生成されます。

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## 仕様書

この機能は、現在のどの仕様にも属しません。標準化の予定はなくなりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Touch")}}
- {{DOMxRef("Document.createTouchList()")}}
