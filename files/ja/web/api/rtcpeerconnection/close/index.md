---
title: RTCPeerConnection.close()
slug: Web/API/RTCPeerConnection/close
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}

**`RTCPeerConnection.close()`** メソッドは、現在のピア接続を閉じます。

## 構文

```js-nolint
close()
```

_このメソッドには引数がなく、何も返しません。_

このメソッドを呼び出すと、RTCPeerConnection の ICE エージェントが終了し、進行中の ICE 処理とアクティブなストリームがすべて終了します。また、TURN 権限を含め、ICE エージェントが使用するすべてのリソースを解放します。このメソッドを返すと、すべての {{domxref("RTCRtpSender")}} オブジェクトが停止したとみなされます（まだ停止中かもしれませんが、どう考えても停止しています）。

このメソッドが返されると、{{domxref("RTCPeerConnection.signalingState")}} が返す信号状態は `closed` となります。

同じリモートピアーに接続する新しい接続を作成する前に、前回の {{domxref("RTCPeerConnection")}} への参照をすべて `delete` するようにしてください（ブラウザーによってはエラーが発生する場合があります）。

## 例

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
  pc.close(); // 最初の受信メッセージで閉じることを決定した
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebRTC](/ja/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.signalingState")}}
