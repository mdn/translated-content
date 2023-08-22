---
title: "MediaStreamTrack: unmute イベント"
slug: Web/API/MediaStreamTrack/unmute_event
---

{{APIRef("Media Capture and Streams")}}

**`unmute`** イベントは、トラックのソースが休止時間の後、再びメディアデータを提供するようになると {{domxref("MediaStreamTrack")}} に送られます。

これは {{domxref("MediaStreamTrack/mute_event", "mute")}} で始まった {{domxref("MediaStreamTrack.muted", "muted")}} の状態を終了します。

> **メモ:** 多くの人が「ミュート」と考える状態（すなわち、トラックを無音にすることをユーザーが制御できる方法）は実際には {{domxref("MediaStreamTrack.enabled")}} プロパティを使用して管理され、こちらではイベントが発生しません。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("unmute", (event) => {});

onunmute = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

この例では、イベントハンドラーを {{domxref("MediaStreamTrack/mute_event", "mute")}} および `unmute` の各イベントに設定し、 {{domxref("MediaStreamTrack")}} が入った変数 `musicTrack` のソースからメディアが流れていない場合を検出しています。

```js
musicTrack.addEventListener(
  "mute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
  },
  false,
);

musicTrack.addEventListener(
  "unmute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#fff";
  },
  false,
);
```

これらのイベントハンドラーのある場面で、トラック `musicTrack` が {{domxref("MediaStreamTrack.muted", "muted")}} の状態になったとき、 `timeline-widget` の ID を持った要素の背景色が `#aaa` に変化します。トラックのミュート状態を抜けたことを — `unmuted` イベントが到着したことによって — 検出すると、背景色は白に戻ります。

`onunmute` イベントハンドラープロパティを使用してこのイベントのハンドラーを設定することもできます。同様に、 {{domxref("MediaStreamTrack.mute_event", "onmute")}} イベントハンドラープロパティを `mute` イベントを設定するために利用できます。以下の例ではこれを示しています。

```js
musicTrack.onmute = event => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
}

musicTrack.mute = event = > {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
}
```

### レシーバーでトラックのミュートを解除する

次の例は、レシーバーを使用してトラックのミュートを解除する方法です。

```js
// Peer 1 (Receiver)
audioTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("unmute", (event) => {
  // Do something in UI
});

// Peer 2 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "sendrecv";

const videoTrack = transceivers[1];
videoTrack.direction = "sendrecv";
```

`transceivers` は {{domxref("RTCRtpTransceiver")}} の配列で、送受信される音声または映像トラックを見つけることができます。詳しくは {{domxref("RTCRtpTransceiver.direction", "direction")}} の記事を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaStreamTrack/mute_event", "mute")}} イベント
