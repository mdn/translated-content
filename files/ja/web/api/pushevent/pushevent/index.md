---
title: PushEvent.PushEvent()
slug: Web/API/PushEvent/PushEvent
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

**`PushEvent()`** コンストラクターは、新しい {{domxref("PushEvent")}} オブジェクトを生成します。このコンストラクターは、サービスワーカーにのみ公開されていることに注意してください。

## 構文

```js-nolint
var myPushEvent = new PushEvent(type, eventInitDict);
```

## 引数

- `type`
  - : `PushEvent` の型を定義する {{domxref("DOMString")}}。{{event("push")}} か {{event("pushsubscriptionchange")}} を設定可能。
- `eventInitDict` {{optional_inline}}

  - : `PushEvent` オブジェクトに設定するいずれかの初期データを含むオプションオブジェクト。オプションは次のとおり：

    - `data`： `PushEvent` に含ませる何らかのデータ。コンストラクタが呼び出された際、結果オブジェクトの {{domxref("PushEvent.data")}} プロパティは、`eventInitDict` データメンバーから抽出されたバイトを含む新しい {{domxref("PushMessageData")}} オブジェクトを設定する。

## 例

```js
var dataInit = {
                data : 'Some sample text'
              }

var myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // 'Some sample text' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.PushEvent.PushEvent")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- [Push API](/ja/docs/Web/API/Push_API)
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
