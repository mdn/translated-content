---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
---

{{APIRef("WebRTC")}}

**`RTCDataChannel`** インターフェイスは、2 つのピア間で双方向に任意のデータを転送するためのネットワークチャンネルを表現します。すべてのデータチャンネルは {{domxref("RTCPeerConnection")}} に関連付けられており、それぞれのぴあコネクションは理論上、最大 65,534 個のデータチャンネルを持つことができます (実際の上限はブラウザーごとに異なります)。

データチャンネルを作成してリモートのピアに参加するかを問い合わせるには、{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} メソッドを呼び出します。データ交換に招かれているピアは {{event("datachannel")}} イベント ({{domxref("RTCDataChannelEvent")}} 型) を受け取って、コネクションにデータチャンネルが追加されたことを知ります。

## プロパティ

- {{domxref("RTCDataChannel.label")}} {{readOnlyInline}}
  - : データチャネルを示す名前を含む{{domxref("DOMString")}}を返します。この値に関して固有でなければならない制約はありません。
- {{domxref("RTCDataChannel.ordered")}} {{readOnlyInline}}
  - : メッセージの配達順序を保証するかしないかを示す{{domxref("Boolean")}}を返します。
- {{domxref("RTCDataChannel.protocol")}} {{readOnlyInline}}
  - : 利用している副プロトコルの名前を含む{{Domxref("DOMString")}}を返します。ない場合は `""`を返します。
- {{domxref("RTCDataChannel.id")}} {{readOnlyInline}}
  - : このチャンネルの固有 ID を示す `unsigned short` を返します。この値は、{{domxref("RTCDataChannel")}}オブジェクトの作成時に設定されます。
- {{domxref("RTCDataChannel.readyState")}} {{readOnlyInline}}

  - : 下位のデータコネクションの状態を表現する列挙型の `RTCDataChannelState` を返します。次のいずれかの値をとります。

    - `"connecting"`: 下位のコネクションがまだ確立されておらず有効でないことを示します。{{domxref("RTCPeerConnection.createDataChannel()")}}によって生成されたデータチャネルの初期状態です。
    - `"open"`: 下位のコネクションが確立され動作中であることを示します。{{domxref("RTCDataChannelEvent")}} によって、データチャンネルがディスパッチされた時の初期状態です。
    - `"closing"`: 下位のコネクションがシャットダウン処理中であることを示します。新しい送信タスクは受け付けませんが、送信または受信中のキャッシュされたメッセージは処理されます。
    - `"closed"`: 下位のコネクションがシャットダウンされたこと(または、確立できなかったこと)を示します。

- {{domxref("RTCDataChannel.bufferedAmount")}} {{readOnlyInline}}
  - : 送信キューのバイト量を含む`unsigned long`を返します。これは、{{domxref("RTCDataChannel.send()")}}を介して送信要求され、まだ送信されていないデータの量です。チャンネルが閉じている場合、バッファリングは継続することに注意してください。
- {{domxref("RTCDataChannel.binaryType")}}
  - : コネクションによって送信されたバイナリデータの種類を示す{{domxref("DOMString")}}です。この値は、{{domxref("Blob")}}が利用されている場合は`"blob"、`{{domxref("ArrayBuffer")}}が利用されている場合は`"arraybuffer"`にすべきです。初期状態では、`"blob"`が設定されます。
- {{domxref("RTCDataChannel.maxPacketLifeTime")}} {{readOnlyInline}}
  - : 無信頼性モードでのメッセージングでの、ミリ秒単位のウィンドウ長を示す`unsigned shortです。`
- {{domxref("RTCDataChannel.maxRetransmits")}} {{readOnlyInline}}
  - : 無信頼性モードでのメッセージングでの、最大再送信回数を示す`unsigned shortです。`
- {{domxref("RTCDataChannel.negotiated")}} {{readOnlyInline}}
  - : アプリケーションによってチャンネルがネゴシエーションされたかされていなかを示す{{domxref("Boolean")}}です。
- {{domxref("DataChannel.reliable")}} {{non-standard_inline}} {{readOnlyInline}}
  - : コネクションはメッセージを無信頼性モードで送信可能かを示す{{domxref("Boolean")}}です。
- {{domxref("DataChannel.stream")}} {{non-standard_inline}} {{readOnlyInline}}
  - : 旧式です。{{domxref("RTCDataChannel.id")}}と同じ意味を持ちます。

### イベントハンドラ

- {{domxref("RTCDataChannel.onopen")}}
  - : {{event("open")}} イベントを受信した時に呼ばれるイベントハンドラです。このイベントは、データコネクションのための下位のデータトランスポートが確立された時に送信されます。
- {{domxref("RTCDataChannel.onmessage")}}
  - : {{event("message")}} イベントを受信した時に呼ばれるイベントハンドラです。このイベントは、データコネクション上でメッセージを受信した時に送信されます。
- {{domxref("RTCDataChannel.onclose")}}
  - : {{event("close")}} イベントを受信した時に呼ばれるイベントハンドラです。このイベントは、下位のデータトランスポートが閉じた時に送信されます。
- {{domxref("RTCDataChannel.onerror")}}
  - : {{event("error")}} イベントを受信した時に呼ばれるイベントハンドラです。このイベントは、エラーに遭遇した時に送信されます。

## メソッド

- {{domxref("RTCDataChannel.close()")}}
  - : チャンネルを閉じます。突然でない方法でチャンネルを閉じます。チャンネルの{{domxref("RTCDataChannel.readyState", "state")}} は `"closing"`に設定され、送信されていないメッセージは送信されてから、チャンネルを閉じます。
- {{domxref("RTCDataChannel.send()")}}
  - : チャンネルのパラメータに従いデータを送信します。送信可能なデータの型は {{domxref("DOMString")}}　または {{domxref("Blob")}}、 {{domxref("ArrayBuffer")}}、{{domxref("ArrayBufferView")}} です。

## 例

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};
```

## 仕様

| Specification                                                                                    | Status                           | Comment                |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------- |
| {{ SpecName('WebRTC 1.0', '#idl-def-RTCDataChannel', 'RTCDataChannel') }} | {{ Spec2('WebRTC 1.0') }} | Initial specification. |

## ブラウザー互換性

{{Compat("api.RTCDataChannel")}}

## 関連情報

- [WebRTC](/ja/docs/Web/Guide/API/WebRTC)
