---
title: "MediaStreamTrack: ended イベント"
slug: Web/API/MediaStreamTrack/ended_event
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**`ended`** は {{domxref("MediaStreamTrack")}} インターフェイスのイベントで、メディアの終端に到達したため、あるいはそれ以上のデータが利用できないために再生やストリーミングが停止したときに発行さ れます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 使用上のメモ

`ended` イベントは、メディアストリームトラックのソースがストリームのデータ送信を恒久的に停止したときに発行されます。これが起こるには、以下のような様々な方法があります。

- 送信できるデータが残っていない。
- ユーザーがデータ送信に必要な権限を剥奪した。
- 送信元データを生成していたハードウェアが取り外されたか、排出された。
- リモート通信相手がデータの送信を永久に停止した。メディアを

## 例

この例では、 `ended` イベントのイベントハンドラーを設定しています。このイベントハンドラーでは、トラックがアクティブでない状態を示すために画面上のアイコンを変更します。

```js
track.addEventListener("ended", () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
});
```

`onended` プロパティを使用してイベントハンドラーを設定することもできます。

```js
track.onended = function () {
  let statusElem = document.getElementById("status-icon");

  statusElem.src = "/images/stopped-icon.png";
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTMLMediaElement の {{domxref("HTMLMediaElement.playing_event", 'playing')}} イベント
- HTMLMediaElement の {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} イベント
- HTMLMediaElement の {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} イベント
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- HTMLMediaElement の {{domxref("HTMLMediaElement.ended_event", 'ended')}} イベント
- AudioScheduledSourceNode の {{domxref("AudioScheduledSourceNode.ended_event", 'ended')}} イベント
