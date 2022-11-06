---
title: PushEvent.PushEvent()
slug: Web/API/PushEvent/PushEvent
---

{{APIRef("Push API")}}{{SeeCompatTable()}}

**`PushEvent()`** コンストラクタは、新しい {{domxref("PushEvent")}} オブジェクトを生成します。このコンストラクタは、service worker にのみ公開されていることに注意してください。

## 構文

```
var myPushEvent = new PushEvent(type, eventInitDict);
```

### パラメーター

- _type_
  - : `PushEvent` の型を定義する {{domxref("DOMString")}}。{{event("push")}} か {{event("pushsubscriptionchange")}} を設定可能。
- _eventInitDict_ {{optional_inline}}

  - : `PushEvent` オブジェクトに設定するいずれかの初期データを含むオプションオブジェクト。オプションは次のとおり：

    - `data`： `PushEvent` に含ませる何らかのデータ。コンストラクタが呼び出された際、結果オブジェクトの {{domxref("PushEvent.data")}} プロパティは、`eventInitDict データ`メンバーから抽出されたバイトを含む新しい {{domxref("PushMessageData")}} オブジェクトを設定する。

## 例

```
var dataInit = {
                data : 'Some sample text'
              }

var myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // 'Some sample text' を返す
```

## 仕様

| 仕様                                                                     | 状態                         | コメント   |
| ------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{SpecName('Push API','#the-push-event','PushEvent')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.PushEvent.PushEvent")}}

## 関連項目

- [Using the Push API](/ja/docs/Web/API/Push_API/Using_the_Push_API)
- [Push API](/ja/docs/Web/API/Push_API)
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
