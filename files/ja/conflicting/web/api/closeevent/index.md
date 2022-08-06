---
title: CloseEvent.initCloseEvent()
slug: conflicting/Web/API/CloseEvent
tags:
  - API
  - CloseEvent
  - initCloseEvent
  - メソッド
  - リファレンス
  - 非推奨
translation_of: Web/API/CloseEvent/initCloseEvent
original_slug: Web/API/CloseEvent/initCloseEvent
browser-compat: api.CloseEvent.initCloseEvent
---
{{APIRef("Websockets API")}}{{deprecated_header}}

**`CloseEvent.initCloseEvent()`** メソッドは、一度作成された CloseEvent の値を初期化します（通常は {{domxref("Document.createEvent()") }} メソッドを使用します）。

この方法で初期化されるイベントは、 {{domxref("Document.createEvent()") }} メソッドで作成する必要があります。
{{ domxref("EventTarget.dispatchEvent()") }} を使用してイベントを配信する前に、イベントを設定するために呼び出す必要があります。
配信されると、もう何もしません。

> **Note:** このメソッドは非推奨であるため、今後は使用しないでください。
>
> 代わりに特定のイベントのコンストラクター、例えば {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} を使用してください。
> [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)のページでは、これらの使用方法についてのより詳細な情報を提供しています。

## 構文

```js
initCloseEvent(type, canBubble, cancelable, wasClean, reasonCode, reason)
```

### 引数

- _`type`_
  - : このイベントの {{domxref("Event.type", "type")}} に設定する文字列です。利用可能な種類は `close` です。
- _`canBubble`_
  - : このイベントがバブリングするかどうかです。この値を {{domxref("Event.bubbles")}} に設定します。
- _`cancelable`_
  - : このイベントの既定の動作を禁止することができるかどうかです。この値を {{domxref("Event.cancelable")}} に設定します。
- _`wasClean`_
  - : この接続がきれいに閉じたかどうかです。
- `reasonCode`
  - : 閉じた理由です。
- `reason`
  - : 閉じた理由を記述した人間が理解できる文字列です。
    way.

## 仕様書

_これは初期の草稿にはありましたが、どの仕様にも含まれていません。_

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CloseEvent.CloseEvent()","CloseEvent()")}} コンストラクター。 {{domxref("CloseEvent")}} を生成するための現在の標準の方法。
- {{domxref("Event.initEvent()")}} は、同様の目的を果たす、より単純な方法です。これも時代遅れで、今後使うべきではありません。
