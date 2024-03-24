---
title: MediaStreamTrack.enabled
slug: Web/API/MediaStreamTrack/enabled
---

{{APIRef("Media Capture and Streams")}}

**`enabled`** は {{domxref("MediaStreamTrack")}} インターフェイスのプロパティで、このトラックがソースストリームから出力が許可されている場合は `true`、そうでない場合は `false` となる論理値です。これは意図的にトラックをミュートするために使用することができます。

有効な場合、トラックのデータはソースから出力先に出力され、そうでない場合は空のフレームが出力されます。

音声の場合、無効なトラックは無音の（つまり、すべてのサンプルの値が 0 であるフレーム）を生成します。動画トラックでは、すべてのフレームが黒いピクセルで完全に埋められます。

一方 {{domxref("MediaStreamTrack.muted", "muted")}} プロパティは、トラックが一時的にデータを出力できない状態（転送中にフレームが失われた場合など）を示しています。

> **メモ:** トラックが接続されていない場合でも、このプロパティの値は変更可能ですが、効果はありません。

## 値

`true` の場合、 `enabled` はそのトラックが実際のメディアを出力にレンダリングすることが許可されていることを示します。 `enabled` が `false` に設定されている場合、トラックは空のフレームのみを生成します。

空のオーディオフレームは、すべてのサンプルの値が 0 に設定されます。空のビデオフレームは、すべてのピクセルが黒に設定されます。

> **メモ:** ミュート/ミュート解除機能を実装する場合は、 `enabled` プロパティを使用してください。

## 使用上のメモ

この {{domxref("MediaStreamTrack")}} がカメラからの動画入力を表している場合、 `enabled` を `false` に設定してトラックを無効にすると、カメラが現在録画やストリーミングをしていないことを示すデバイスアクティビティインジケーターも更新されます。例えば、 iMac や MacBook コンピューターでは、この方法でトラックをミュートしている間、カメラの横にある緑の「使用中」ランプが消灯します。

## 例

この例では、一時停止ボタンの {{domxref("Element/click_event", "click")}} イベントハンドラーの使用例を示しています。

```js
pauseButton.onclick = function (evt) {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

これは、現在の `enabled` の値と逆の値である `newState` という変数を作成し、それを使用して、一時停止ボタンの要素の新しい {{domxref("Element.innerHTML", "innerHTML")}} として "play" アイコンまたは "pause" アイコン用の絵文字を選択するものです。

最後に、新しい値を `enabled` に保存し、変更が有効になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream API](/ja/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- [WebRTC](/ja/docs/Web/API/WebRTC_API)
