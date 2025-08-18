---
title: "HTMLVideoElement: requestVideoFrameCallback() メソッド"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

**`requestVideoFrameCallback()`** は {{domxref("HTMLVideoElement")}} インターフェイスのメソッドで、新しい映像フレームが合成エンジンに送信された際に実行されるコールバック関数を登録します。これにより、開発者は各映像フレームに対して効率的な操作を行うことができます。

## 解説

`requestVideoFrameCallback()` のよくある使用例としては、映像処理やキャンバスへの描画、映像分析、外部オーディオソースとの同期などがあります。 フレームごとの処理は、{{domxref("HTMLMediaElement.timeupdate_event", "timeupdate")}} イベントが発生するたびに現在の映像表示上で操作を実行することで、効率や精度が低い方法で行われていました。 この方法では、実際の映像フレームへのアクセスはできませんでした。

`requestVideoFrameCallback()` は、{{domxref("Window.requestAnimationFrame()")}} と同様に使用します。この関数を使用すると、次の映像フレームが合成エンジンに送信された際に何らかの処理を行うコールバック関数を実行することができます。コールバック関数は、次の映像フレームが合成された際にコールバック関数を実行するために再び `requestVideoFrameCallback()` を呼び出すことで終了します。しかし、`requestVideoFrameCallback()` は、いくつかの点で映像操作用に調整されています。

- `requestVideoFrameCallback()` は、個々の映像フレームへの信頼性の高いアクセスを提供します。
- `requestAnimationFrame()` は、通常 60Hz である画面のリフレッシュレートに合わせようとします。一方、`requestVideoFrameCallback()` は、映像のフレームレートに合わせようとします。より具体的には、コールバックは映像のフレームレートとブラウザーの描画リフレッシュレートのうち、低い方のレートで実行されます。例えば、フレームレートが 25fps の動画が、60Hz で描画するブラウザーで再生されている場合、コールバックは 25Hz のレートで実行されます。同じ 60Hz のブラウザーでフレームレートが 120 fpsの動画が再生されている場合、コールバックは 60Hz のレートで実行されます。
- `requestVideoFrameCallback()` は、コールバック関数で有用な動画メタデータを取得します。

留意すべき点として、`requestVideoFrameCallback()` は、コールバックからの出力が映像のフレームレートと同期した状態を厳密に保証するものではありません。新しい映像フレームが提示された時点よりも、垂直同期 (V-sync) が 1 回分遅れてコールバックが実行される可能性もあります。（V-sync は、映像のフレームレートをモニターのリフレッシュレートと同期させるグラフィック技術です。）

API はメインスレッド上で実行されますが、映像合成は別の合成スレッド上で実行される可能性が高いです。これらの操作が完了するまでに要する時間、および映像自体と `requestVideoFrameCallback()` 操作の結果が画面に表示されるまでに要する時間も考慮する必要があります。

`now` コールバック引数と `expectedDisplayTime` メタデータプロパティを比較して、コールバックが v-sync に遅れていないかどうかを判断できます。 `expectedDisplayTime` が `now` から約 5 ～ 10 ミリ秒以内であれば、フレームはすでにレンダリングされています。 `expectedDisplayTime` が約 16 ミリ秒ほど未来であれば（ブラウザー/画面が 60Hz でリフレッシュしていると仮定した場合）、コールバックは v-sync アウトです。

## 構文

```js-nolint
requestVideoFrameCallback(callback)
```

### 引数

- `callback`
  - : 新しい映像フレームが合成エンジンに送信された際に実行されるコールバック関数。これには 2 つの引数が含まれています。
    - `now`
      - : コールバックが呼び出された時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
    - `metadata`
      - : 以下のプロパティを持つオブジェクトです。
        - `expectedDisplayTime`: ブラウザーがフレームの表示を期待する時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
        - `height`: メディアピクセル数で表した数値で、映像フレームの縦の長さ（アスペクト比の調整なしで表示可能なデコード済みピクセル）を表します。
        - `mediaTime`: 提示されたフレームのメディアプレゼンテーションタイムスタンプを表す秒単位の数値。これは、{{domxref("HTMLMediaElement.currentTime")}}タイムライン上のフレームのタイムスタンプと等価です。
        - `presentationTime`: ブラウザーがフレームを合成のために送信した時刻を表す {{domxref("DOMHighResTimeStamp")}} です。
        - `presentedFrames`: 現在のコールバックとともに、これまでに構成用に送信されたフレーム数を表す数値。これは、コールバックのインスタンス間でフレームが欠落しているかどうかを検出するために使用できます。
        - `processingDuration`: このフレームと同じプレゼンテーションタイムスタンプを持つエンコードされたパケットがデコーダーに送信されてから（すなわち、`mediaTime`）、デコードされたフレームが提示可能な状態になるまでの時間を秒数で表した数値です。
        - `width`: メディアピクセル数で表した数値で、映像フレームの幅（アスペクト比の調整なしで表示可能なデコード済みピクセル）を表します。

        {{domxref("WebRTC_API", "WebRTC", "", "nocode")}} アプリケーションで使用される `requestVideoFrameCallback()` コールバック内では、追加のメタデータプロパティが利用できる場合があります。
        - `captureTime`: フレームがキャプチャされた時刻を表す {{domxref("DOMHighResTimeStamp")}} です。これは、ローカルまたはリモートソースからの映像フレームに適用されます。リモートソースの場合、キャプチャ時刻は、クロック同期と RTCP 送信者レポートを使用して RTP タイムスタンプをキャプチャ時刻に変換することで推定されます。
        - `receiveTime`: プラットフォームがエンコードされたフレームを受信した時刻を表す {{domxref("DOMHighResTimeStamp")}} です。これはリモートソースからの映像フレームに適用されます。具体的には、このフレームに属する最後のパケットがネットワーク経由で受信された時刻に対応します。
        - `rtpTimestamp`: この映像フレームに付随する RTP タイムスタンプを表す数値です。

> [!NOTE]
> `width` と `height` は、場合によっては {{domxref("HTMLVideoElement.videoWidth")}} および {{domxref("HTMLVideoElement.videoHeight")}} と異なる場合があります（例えば、アナモフィック動画は長方形のピクセルを持つことがあります）。

### 返値

一意のコールバック ID を表す番号。

これは、{{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}} に渡すことで、コールバック登録をキャンセルすることができます。

## 例

### キャンバスに映像フレームを書き込む

この例では、`requestVideoFrameCallback()` を使用して、映像のフレームを映像とまったく同じフレームレートで {{htmlelement("canvas")}} 要素に描画する方法を表示させています。また、デバッグ目的でフレームのメタデータを DOM にログ出力しています。

```js
if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
  let paintCount = 0;
  let startTime = 0.0;

  const updateCanvas = (now, metadata) => {
    if (startTime === 0.0) {
      startTime = now;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const elapsed = (now - startTime) / 1000.0;
    const fps = (++paintCount / elapsed).toFixed(3);
    fpsInfo.innerText = `video fps: ${fps}`;
    metadataInfo.innerText = JSON.stringify(metadata, null, 2);

    // 次のフレームで動作するようにコールバックを再登録する
    video.requestVideoFrameCallback(updateCanvas);
  };

  // 最初のフレームで動作するコールバックの初期登録
  video.requestVideoFrameCallback(updateCanvas);
} else {
  alert("このブラウザーは requestVideoFrameCallback() に対応していません。");
}
```

上記のコードの動作する実装については、 [requestVideoFrameCallback デモ](https://requestvideoframecallback.glitch.me/) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("video")}} 要素
- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
- [`requestVideoFrameCallback()` を使用した、動画の各フレームに対する効率的な処理](https://web.dev/articles/requestvideoframecallback-rvfc) (developer.chrome.com, 2023)（英語）
