---
title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
---

{{APIRef("Service Workers API")}}

**`ExtendableMessageEvent()`** コンストラクターは、新しい {{domxref("ExtendableMessageEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```
var extendableMessageEvent = new ExtendableMessageEvent(type, init);
```

### パラメーター

- type
  - : 作成されるメッセージイベントのタイプを定義する {{domxref("DOMString")}}。
- init {{optional_inline}}

  - : 次のパラメータを含む初期化オブジェクト。

    - `data`: イベントのデータ — これはどのデータ型でもかまいません。
    - `origin`: 対応するサービスワーカーの環境設定オブジェクトのオリジンを定義する {{domxref("DOMString")}}。
    - `lastEventId`: イベントソースの最後のイベント ID を定義する {{domxref("DOMString")}}。
    - `source`: メッセージを送信した {{domxref("Client")}}、{{domxref("ServiceWorker")}}、または {{domxref("MessagePort")}}。
    - `ports`: メッセージを送信するチャネルに接続された {{domxref("MessagePort")}} オブジェクトを含む配列。

## 例

```js
var init = {
             data : 'hello message',
             source : MessagePortReference,
             ports : MessagePortListReference
           }

var myEME = new ExtendableMessageEvent('message', init);
```

## 仕様

| 仕様                                                                                                                                                     | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-extendablemessageevent-extendablemessageevent', 'ExtendableMessageEvent()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ExtendableMessageEvent.ExtendableMessageEvent")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- [Channel Messaging](/ja/docs/Web/API/Channel_Messaging_API)
