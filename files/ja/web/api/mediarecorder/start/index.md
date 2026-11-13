---
title: "MediaRecorder: start() メソッド"
short-title: start()
slug: Web/API/MediaRecorder/start
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("MediaStream Recording")}}

{{domxref("MediaRecorder")}} は {{domxref("MediaRecorder")}} インターフェイスのメソッドで、1 つ以上の {{domxref("Blob")}} オブジェクトへのメディアの収録を開始します。

メディアの全期間を単一の `Blob` に（または {{domxref("MediaRecorder.requestData", "requestData()")}} を呼び出すまで）収録することも、一度に収録するミリ秒数を指定することもできます。 その後、その量のメディアが収録されるたびに、収録されたメディアに対応できるようにイベントが配信され、その間に、メディアの次のスライスを収録するための新しい `Blob` が作成されます。

`MediaRecorder` の {{domxref("MediaRecorder.state", "state")}} が `inactive` であると仮定すると、`start()` は `state` を `recording` に設定してから、入力ストリームからメディアのキャプチャを開始します。 タイムスライス期間が経過するか、ソースメディアが終了するまで、`Blob` が作成され、そこにデータが収集されます。 `Blob` がその時点まで満たされるたびに（タイムスライス期間または、スライス期間が指定されていない場合はメディアの終わり）、{{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが収録されたデータとともに `MediaRecorder` に送られます。 ソースがまだ再生中の場合は、新しい `Blob` が作成され、そこに収録が続きます。

ソースストリームが終了すると、`state` は `inactive` に設定され、データ収集は停止します。 最後の {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが `MediaRecorder` に送られ、その後に {{domxref("MediaRecorder/stop_event", "stop")}} イベントが続きます。

> [!NOTE]
> ブラウザーが収録を開始または続行できない場合は {{domxref("MediaRecorder.error_event", "error")}} イベントが発生し、続いて収集した `Blob` を含む {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベント、さらに {{domxref("MediaRecorder/stop_event", "stop")}} イベントが発生します。

## 構文

```js-nolint
start()
start(timeslice)
```

### 引数

- `timeslice` {{optional_inline}}
  - : 各 {{domxref("Blob")}} に収録するミリ秒数。 この引数が含まれていない場合は、{{domxref("MediaRecorder.requestData", "requestData()")}} メソッドが呼び出されて `Blob` が取得され、メディアの収録を継続する新しい `Blob` の作成のきっかけがない限り、メディア期間全体が単一の `Blob` に収録されます。

    > [!NOTE]
    > ウェブ API の他の時間値と同様に、`timeslice` は厳密な値ではなく、次の Blob が作成される前に他の待機中のタスクが存在する場合、実際の間隔はこれよりわずかに長くなることがあります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

すぐに検出できるエラーは DOM 例外としてスローされます。 他のすべてのエラーは、`MediaRecorder` オブジェクトに送られた {{domxref("MediaRecorder.error_event", "error")}} イベントを通じて報告されます。 {{domxref("MediaRecorder.error_event", "onerror")}} イベントハンドラーを実装することで、これらのエラーに対応することができます。

- `InvalidStateError` {{domxref("DOMException")}}
  - : `MediaRecorder` が `inactive` 状態ではない場合に発生します。すでに収録中の場合は、メディアの収録を開始することはできません。 {{domxref("MediaRecorder.state", "state")}} プロパティを参照してください。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - 収録しようとしているメディアストリームが非アクティブである場合。
    - ストリームの 1 つ以上のトラックが現在の設定を使用して収録できない形式である場合。
    - `videoKeyFrameIntervalDuration` および `videoKeyFrameIntervalCount` の両方の引数が、`MediaRecorder` を作成する際に指定された場合。
- `SecurityError` {{domxref("DOMException")}}
  - : {{domxref("MediaStream")}} が収録を禁止するように設定されている場合に発生します。 これは、例えば、ユーザーが入力機器を使用する許可を拒否したときに {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得されたソースの場合などです。この例外は、収録開始後にソースメディアのセキュリティオプションが変更された場合にも {{domxref("MediaRecorder.error_event", "error")}} イベントとして配信される可能性があります。

## 例

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log("収録を開始しました。");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
