---
title: UIEvent.initUIEvent()
slug: Web/API/UIEvent/initUIEvent
tags:
  - API
  - DOM
  - Deprecated
  - Event
  - Method
  - UIEvent
browser-compat: api.UIEvent.initUIEvent
---
{{APIRef("DOM Events")}} {{deprecated_header}}

**`UIEvent.initUIEvent()`** メソッドは、一度作成された UI イベントを初期化します。

この方法で初期化されるイベントは {{ domxref("Document.createEvent()") }} で作成されている必要があります。このメソッドでイベントを設定するには、 {{ domxref("EventTarget.dispatchEvent()") }} を使用してイベントを発行する前に行う必要があります。発行された後は、何もしません。

> **Warning:** このメソッドは非推奨なので、もう使用しないでください。
>
> 代わりに、 {{domxref("UIEvent.UIEvent", "UIEvent()")}} などの具体的なイベントのコンストラクターを使用してください。[イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)のページで、これらの使用方法について詳しく説明しています。

## 構文

```js
event.initUIEvent(type, canBubble, cancelable, view, detail)
```

### 引数

- _`type`_
  - : {{domxref("DOMString")}} で、イベントの種類を定義します。
- _`canBubble`_
  - : 論理値で、イベントがイベントチェーンを通じてバブリングするかどうかを決定します。設定すると、読み取り専用のプロパティ {{ domxref("Event.bubbles") }} がその値を提供します。
- _`cancelable`_
  - : 論理値で、イベントをキャンセルできるかどうかを定義します。設定すると、読み取り専用のプロパティ {{ domxref("Event.cancelable") }} がその値を提供します。
- _`view`_
  - : イベントに関連付けられた {{domxref("WindowProxy")}} です。
- _`detail`_
  - : `unsigned long` で、イベントの種類に応じて、イベントの詳細情報を示します。マウスイベントの場合、指定された画面の場所でマウスが何回クリックされたかを示します。

## 例

```js
var e = document.createEvent("UIEvent");
// creates a click event that bubbles, can be cancelled,
// and with its view and detail property initialized to window and 1,
// respectively
e.initUIEvent("click", true, true, window, 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("UIEvent") }}
- この非推奨のメソッドの代わりに使用するコンストラクター:
  {{domxref("UIEvent.UIEvent", "UIEvent()")}}。より具体的なコンストラクターを使用することもできます。
