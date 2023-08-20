---
title: MediaStreamTrack.stop()
slug: Web/API/MediaStreamTrack/stop
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.stop()`** メソッドは、トラックを停止します。

## 構文

```js
stop();
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

`stop()` の呼び出しは、{{glossary("user agent", "ユーザーエージェント")}}へ、トラックのソース（ファイル、ネットワークストリーム、ローカルカメラやマイク）がこれ以上この {{domxref("MediaStreamTrack")}} で必要とされないことを伝えます。複数のトラックが同じソースを使用すること（例えば、 2 つのタブが端末のマイクを使っている場合など）もあるため、ソースが必ずしも直ぐに停止させられる必要はありません。その代わり、トラックからの関連付けが解除され、そのトラックオブジェクトが停止されます。ソースからメディアトラックが使用されなくなると、ソースは実際に完全に停止させられるでしょう。

`stop()` を呼び出した直後に、 {{domxref("MediaStreamTrack.readyState", "readyState")}} の状態は `ended` になります。なお、この場合は [`ended`](/ja/docs/Web/API/MediaStreamTrack/ended_event) イベントは発生しません。

## 例

### 映像ストリームの停止

この例では、この {{HTMLElement("video")}} の各トラックで `stop()` を呼び出すことで、ストリーミングされている映像を停止する関数を定義しています。

```js
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  videoElem.srcObject = null;
}
```

{{domxref("HTMLMediaElement.srcObject", "srcObject")}} プロパティから video 要素のストリームを取得することで機能しています。次に、 {{domxref("MediaStream.getTracks", "getTracks()")}} メソッドを呼び出すことで、ストリームのトラックリストを取得しています。ここから、 {{jsxref("Array.forEach", "forEach()")}} を使ってトラックリストから各トラックを繰り返し呼び出し、それぞれのトラックで `stop()` メソッドを呼び出しています。

最後に、 `srcObject` に `null` を設定することで、この {{domxref("MediaStream")}} オブジェクトへの参照を解き、解放できるようにします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドが属する {{domxref("MediaStreamTrack")}} インターフェイス
- {{domxref("MediaStreamTrack.readyState")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
