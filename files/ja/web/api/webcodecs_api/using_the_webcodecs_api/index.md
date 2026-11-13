---
title: WebCodecs API の使用
slug: Web/API/WebCodecs_API/Using_the_WebCodecs_API
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}

このガイドでは、WebCodecs API の基本的な使用方法について解説します。これには、動画や音声のエンコードおよびデコードの方法に加え、{{domxref("VideoFrame")}} および {{domxref("AudioData")}} の使用方法も含まれます。

## 動画のエンコード

{{domxref("VideoEncoder")}} の基本的な使用パターンは、インスタンス化から始まります。この際、`output` および `error` コールバック関数を定義します。`output` コールバックは、`EncodedVideoChunk` と `metadata` を引数として受け取ります。`metadata` は `EncodedVideoChunkMetadata` 辞書であり、オプションの [decoderConfig](/ja/docs/Web/API/VideoEncoder/VideoEncoder#decoderconfig) プロパティを含みます。このメタデータは、動画ファイルへの多重化を行う際に、多重化ライブラリーによって必要とされます。

```js
const encoder = new VideoEncoder({
  output(chunk, meta) {
    // Do something with chunk, typically send to muxing library
  },
  error(e) {
    // Handle the error
  },
});
```

次に、コーデックパラメーターや、幅、高さ、ビットレート、フレームレートなどのその他のエンコードパラメーターを設定して、エンコーダーを構成する必要があります。コーデックの選択方法については、[コーデックの選択](/ja/docs/Web/API/WebCodecs_API/Codec_selection)ガイドを参照してください。

```js
encoder.configure({
  codec: "vp09.00.40.08.00", // See codec selection guide
  width: 1280,
  height: 720,
  bitrate: 1_000_000, // 1 Mbps
  framerate: 30,
});
```

次に、`VideoFrame` オブジェクトのエンコードを開始します。この際、エンコード対象の `VideoFrame` を指定するだけでなく、そのフレームをキーフレームとしてエンコードするかどうかを示す `keyFrame` パラメーターも指定します。

```js
for (let i = 0; i < 60; i++) {
  const timestamp = (i * 1e6) / 30; // 30 fps, in microseconds
  const frame = new VideoFrame(canvas, { timestamp });
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
  frame.close();
}
```

最初にエンコードするフレームはキーフレームにする必要があります。`VideoEncoder` では、明示的に指定しなくても最初のフレームが自動的にキーフレームとして扱われますが、明示的に設定しておくことをお勧めします。一般的なキーフレームの間隔は、30 フレームごとまたは 60 フレームごとです。キーフレームの数を増やすと動画ファイルのサイズが大きくなりますが、逆に減らしすぎると、一部の動画プレーヤーで再生が不安定になる場合があります。

メモリーリークを防ぐため、`VideoFrame` オブジェクトはエンコード用に送信したらすぐに閉じることが重要です。`VideoFrame` オブジェクトはサイズが大きいため、メモリー内にアクティブなフレームが 100 個未満であっても、アプリケーションがクラッシュする可能性があります。

なお、`VideoEncoder` には `encodeQueue` と呼ばれる、エンコード待ちのフレームのキューも用意されています。30 fps でアニメーションをレンダリングしている場合、各レンダリングごとに `encoder.encode(frame)` を実行すると、エンコーダーの処理能力が 10 fps しかない場合、エンコーダーのキューは次第に膨れ上がり、最終的に動画メモリーが不足してプロセスがクラッシュしてしまいます。

したがって、レンダリングループ内で {{domxref("VideoEncoder.encodeQueueSize")}} を確認し、そのサイズが無制限に増大しないように注意しながら、エンコーダーへのフレーム送信方法とタイミングを適切に管理する必要があります。

`dequeue` イベントを使用することで、エンコードキューが縮小したタイミングを検知できるため、`encodeQueueSize` をポーリングする必要がなくなります。

```js
encoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

エンコード用のすべてのフレームの送信が完了したら、`flush()` メソッドを呼び出す必要があります。

```js
await encoder.flush();
```

端末やブラウザーによっては、`flush()` が呼び出されるまで、エンコーダーが最後の数個の `EncodedVideoChunk` オブジェクトを返さない場合があります。`VideoEncoder` の使用を完全に終了したら、システムリソースを解放するために `close()` メソッドを呼び出す必要があります。

```js
encoder.close();
```

`VideoEncoder` は、ユーザーがタブを切り替えてブラウザがリソースを解放した場合など、さまざまな理由でエンコード処理中にエラーをスローすることがあります。エラーが発生すると、エンコーダーは `"closed"` 状態に永久に移行します。閉じたエンコーダーを再設定することはできず、新しい `VideoEncoder` インスタンスを作成する必要があります。新しいエンコーダーによってエンコードされる最初のフレームは、キーフレームでなければなりません。

```js
if (encoder.state === "closed") {
  // Close the old encoder, instantiate and configure a new encoder
}

encoder.encode(frame, { keyFrame: true });
```

## 動画のデコード

同様に、動画のデコードを行う場合も、まず `output` および `error` コールバック関数を指定して {{domxref("VideoDecoder")}} をインスタンス化します。ここで、`output` コールバックはデコーダーから返される `VideoFrame` オブジェクトを受け取ります。

```js
const decoder = new VideoDecoder({
  output(frame) {
    // Do something with the VideoFrame
  },
  error(e) {
    /** Handle the error */
  },
});
```

次に、デコーダーの設定を行う必要があります。動画ファイルをデコードする場合、多重分離ライブラリーが適切なデコーダー設定を提供してくれます（[多重化と多重分離](/ja/docs/Web/API/WebCodecs_API#多重化と多重分離)を参照してください）。WebCodecs の送信側と受信側間で動画をストリーミングする場合、デコーダーの設定は、エンコードされたチャンクを生成した `VideoEncoder` が返すメタデータと同一になります。

```js
decoder.configure(/* config */);
```

動画ファイルをデコードする場合、動画チャンクを抽出するために多重分離ライブラリーが必要になります。その後、それらのチャンクをデコード処理に送信します。ただし、1つのチャンクだけをデコードに送信し、フレームが出力されるのを待ってから次のチャンクを送信するようなことは避けてください。ブラウザや端末、動画そのものの仕様によっては、デコーダーがフレームの返却を開始する前に複数のチャンクを送信する必要がある場合があり、必要なチャンクの最小数は端末によって異なります。

```js
let chunkIndex = 0;
// Process chunks in batches, not one at a time nor all at once
for (let i = 0; i < BATCH_LENGTH; i++) {
  decoder.decode(chunks[chunkIndex]);
  chunkIndex++;
}
```

`VideoEncoder` と同様に、`VideoDecoder` も管理が必要なデコードキューを保持しています。一度に数千個のチャンクを `VideoDecoder` に送信すると、デコーダーが終了したり失敗したりする可能性があるため、アプリケーション側で {{domxref("VideoDecoder.decodeQueueSize")}} が無制限に増加しないようにする必要があります。エンコーダーと同様に、`dequeue` イベントを待ち受けしてデコードキューの管理に役立てることもできます。

```js
decoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

デコード用のすべてのフレームの送信が完了したら、`flush` を実行できます。

```js
await decoder.flush();
```

端末やブラウザーによっては、`flush()` が呼び出されるまで、デコーダが最後の数個の `VideoFrame` オブジェクトを返さない場合があります。`VideoDecoder` の使用を完全に終了したら、システムリソースを解放するために `close()` メソッドを呼び出す必要があります。

```js
decoder.close();
```

`VideoDecoder` は、ソースの `EncodedVideoChunk` 内のデータが破損している、あるいは欠落しているなど、さまざまな理由でデコード中にエラーを発生させる可能性があります。デコーダーが失敗すると、そのデコーダーは恒久的に `"closed"` 状態に移行するため、新しい `VideoDecoder` インスタンスを作成する必要があります。新しいデコーダーによって最初にデコードされるチャンクはキーフレームでなければならないため、処理を再開する前に、現在の位置から次のキーフレームまで早送りする必要があります。

```js
let chunkIndex = 0;

for (let i = 0; i < BATCH_LENGTH; i++) {
  // Check if decoder failed
  if (decoder.state === "closed") {
    // Seek forward to the next key frame from the current position
    for (let j = chunkIndex; j < chunks.length; j++) {
      if (chunks[j].type === "key") {
        chunkIndex = j;
        break;
      }
    }
    // Close the old decoder, instantiate and configure a new decoder
  }
  decoder.decode(chunks[chunkIndex]);
  chunkIndex++;
}
```

## VideoFrame

{{domxref("VideoFrame")}} は、ピクセルデータやタイムスタンプなどのメタデータを含む、単一の非圧縮動画フレームを表します。これは、エンコードされた動画をデコードする際に `VideoDecoder` によって返されるほか、さまざまなソース画像から生成されることもあります。

### 動画フレームの作成

`VideoFrame`は、任意の画像ソースから作成できます。タイムスタンプはマイクロ秒単位であることに注意してください。

```js
const bitmapFrame = new VideoFrame(imgBitmap, { timestamp: 0 });
const imageFrame = new VideoFrame(htmlImageEl, { timestamp: 0 });
const videoFrame = new VideoFrame(htmlVideoEl, { timestamp: 0 });
const canvasFrame = new VideoFrame(canvasEl, { timestamp: 0 });
```

動画編集アプリケーションでは、通常、`Canvas` から `VideoFrame` を生成することで動画をエンコードします。この場合、ソース動画や画像はキャンバスコンテキスト内で使用され、エフェクトや座標変換が適用されます。また、`Canvas` はユーザーがプレビューできるだけでなく、エンコードされる `VideoFrame` の画像ソースとしても使用されます。

`ArrayBuffer` などのバイナリーデータから直接 `VideoFrame` を作成することも可能です。ただし、その場合は `format` とメタデータを指定する必要があり、フレームの構築に使用するデータが指定された[形式](/ja/docs/Web/API/VideoFrame/format)に準拠していることを確認する必要があります。

```js
const rgbaFrame = new VideoFrame(rgbaData, {
  timestamp: 0,
  format: "RGBA",
  codedWidth: 1920,
  codedHeight: 1080,
});
```

`VideoFrame` オブジェクトは、グラフィックメモリー上のデータと紐付けられています。`Canvas`、`Bitmap`、`Video`、`Image` のいずれかから `VideoFrame` を作成する場合、データはグラフィックメモリーからグラフィックメモリーへコピーされるため、比較的効率的です。

バイナリデータ（例：`ArrayBuffer` や `Uint8ClampedArray`）から構築された `VideoFrame` では、CPU からグラフィックメモリーへのコピー処理が発生します。この処理が繰り返し行われると、パフォーマンスの低下を招く可能性があります。

最後に、前述の[動画のデコード](#decoding_video)のセクションで示したように、`VideoDecoder`を使用して`EncodedVideoChunk`オブジェクトをデコードすることで、`VideoFrame`オブジェクトを生成することもできます。

### 動画フレームの消費

デコードされた動画は、`VideoFrame` オブジェクトを `Canvas` へレンダリングすることで、ブラウザー上でも再生可能です。レンダリング方法によってパフォーマンス特性が異なるため、計算負荷の高い動画処理を実行する際には、この点が重要になる場合があります。

#### Canvas2D

`drawImage` メソッドを使用すると、{{domxref("CanvasRenderingContext2D")}} に図形を描画できます。

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("2d");
ctx.drawImage(frame, 0, 0);
```

2D キャンバスコンテキストはシンプルかつ柔軟な API を備えていますが、ブラウザーごとに内部の実装が異なるため、ブラウザー間で動作にばらつきが生じ、一般的にパフォーマンスが低下しています。

#### BitmapRenderer

フレームから {{domxref("ImageBitmap")}} を作成し、`transferFromImageBitmap` メソッドを使用してキャンバスにレンダリングすることで、{{domxref("ImageBitmapRenderingContext")}} 経由でフレームをキャンバスにレンダリングすることも可能です。

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("bitmaprenderer");

const bitmap = await createImageBitmap(frame);
ctx.transferFromImageBitmap(bitmap);
frame.close();
```

この手法では、グラフィックメモリー内にフレームのコピーを 1 つ作成します。これにより、Canvas2D API に比べてブラウザー間での動作の一貫性が高まり、全体的にパフォーマンスも向上する一方で、比較的シンプルな実装が可能です。

#### WebGPU

`VideoFrame` をキャンバスにレンダリングする最も効率的な方法は、WebGPU の [importExternalTexture](/ja/docs/Web/API/GPUDevice/importExternalTexture) メソッドを使用することです。

```js
const externalTexture = device.importExternalTexture({ source: frame });
```

`importExternalTexture` は、WebGPU パイプライン内でメモリー上のまったく同じ `VideoFrame` オブジェクトを使用するため、ゼロコピー操作となり、効率的です。これは `VideoFrame` をレンダリングする上で最もパフォーマンスが高い方法ですが、設定が最も複雑でもあります。

### メモリー

`VideoFrame` オブジェクトは大量の GPU メモリーを消費する可能性がある上、動画処理では 1 秒あたり多数のフレームを処理するため、アプリケーションのクラッシュを防ぐためには、メモリー管理に細心の注意を払い、メモリーリークを回避する必要があります。

何よりもまず、フレームは不要になった時点で明示的に解放する必要があります。

```js
frame.close();
```

エンコードを行う際は、エンコード用にフレームを送信したらすぐにそのフレームを閉じることができます。

```js
encoder.encode(frame, { keyFrame: true });
frame.close();
```

また、レンダリング直後にフレームを閉じるようにしてください。

```js
ctx.drawImage(frame, 0, 0);
frame.close();
```

スレッド間（例：ワーカー）で `VideoFrame` を転送する際は、[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)として転送する必要があります。

```js
worker.postMessage(frame, [frame]);
```

## 音声

WebCodecs は、{{domxref("AudioEncoder")}} および {{domxref("AudioDecoder")}} を通じて、Opus および AAC コーデックを使用した音声のエンコードとデコードに対応しています。音声を扱う前に、注意すべき重要な点がいくつかあります。

- **パススルー**: 動画をトランスコードする際、音声を変更する必要がない場合は、音声をデコードして再エンコードする必要はまったくありません。`EncodedAudioChunk` オブジェクトは、多重分離ライブラリーから多重化ライブラリーへ直接渡すことができ、これにより効率が大幅に向上します。
- **再生**: WebCodecs APIには、音声再生機能が組み込まれていません。再生を行うには、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)を使用してください。
- **対応形式**: WebCodecs は Opus および AAC のエンコードのみに対応しています。MP3 やその他の形式については、サードパーティ製ライブラリーが必要です。

### 再生

WebCodecs とウェブオーディオ API の間には直接的な橋渡しはありません。{{domxref("AudioData")}} オブジェクトは、生の音声データを表現するために {{domxref("AudioBuffer")}} を使用するウェブオーディオ API に直接渡すことはできません。

再生を行う際の推奨される方法は、多重化ライブラリーを使用して `EncodedAudioChunk` オブジェクトをメモリー内のバッファーに多重化し、そのバッファーを {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} を通じてデコードすることです。

```js
// mux encoded chunks to an ArrayBuffer using a muxing library
const buffer = await muxAudioToBuffer(encodedChunks);
const audioBuffer = await audioContext.decodeAudioData(buffer);
const source = audioContext.createBufferSource();
source.buffer = audioBuffer;
source.connect(audioContext.destination);
source.start();
```

あるいは、`copyTo()` を使って `AudioData` から生のサンプルを抽出し、手動で `AudioBuffer` を構築することもできますが、この方法ではチャンクごとに CPU 側でのデータコピーが必要となるため、処理速度が低下します。

### エンコード

音声エンコードは動画エンコードよりも単純です。キーフレームもなければ、ハードウェアアクセラレーションに関する懸念もなく、それぞれの `AudioData` は正確に 1 つの `EncodedAudioChunk` を生成します。エンコーダーは、単純な非同期パイプラインとして扱うことができます。

```js
const encoder = new AudioEncoder({
  output(chunk) {
    // send to muxer
  },
  error(e) {
    console.error(e);
  },
});

encoder.configure({
  codec: "opus",
  sampleRate: 48000,
  numberOfChannels: 2,
});

for (const audioData of rawAudio) {
  encoder.encode(audioData);
  audioData.close();
}

await encoder.flush();
```

Opus と AAC のどちらを選ぶかについては、[コーデックの選択](/ja/docs/Web/API/WebCodecs_API/Codec_selection#audio_codecs)のガイドを参照してください。

### デコード

オーディオのデコードは、エンコードと同じ手順で行われます。デコーダーの設定は、通常、開発者が選択するのではなく、多重分離ライブラリーによって提供されます。

```js
const decoder = new AudioDecoder({
  output(audioData) {
    // process AudioData
    audioData.close();
  },
  error(e) {
    console.error(e);
  },
});

// config comes from demuxer library
decoder.configure(decoderConfig);

for (const chunk of encodedChunks) {
  decoder.decode(chunk);
}

await decoder.flush();
```

### AudioData

{{domxref("AudioData")}} オブジェクトは、通常 0.2 ～ 0.5 秒分の生の音声セグメントを表します。生のサンプルは、{{domxref("AudioData.copyTo()")}} メソッドを使用して `Float32Array` データとして抽出されます。抽出パターンは、`AudioData` オブジェクトの `format` プロパティによって異なります。

最も一般的な形式は `f32-planar` で、各チャンネルが別々のプレーンに格納されます。`planeIndex` を使用すると、各チャンネルを個別にコピーできます。

```js
// f32-planar: each channel stored separately
const leftChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(leftChannel, { planeIndex: 0 });

const rightChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(rightChannel, { planeIndex: 1 });
```

あまり一般的ではない `f32` 形式では、すべてのチャンネルが単一の配列（`[L, R, L, R, ...]`）にインターリーブされて格納されます。この場合、インターリーブされたバッファー全体をコピーし、手動でインターリーブ解除を行ってください。

```js
// f32: channels interleaved in a single array
const interleaved = new Float32Array(
  audioData.numberOfFrames * audioData.numberOfChannels,
);
audioData.copyTo(interleaved, { planeIndex: 0 });

const leftChannel = new Float32Array(audioData.numberOfFrames);
const rightChannel = new Float32Array(audioData.numberOfFrames);

for (let i = 0; i < audioData.numberOfFrames; i++) {
  leftChannel[i] = interleaved[i * 2];
  rightChannel[i] = interleaved[i * 2 + 1];
}
```

両方の形式に対応するには、次のようにします。

```js
if (audioData.format.includes("planar")) {
  // f32-planar: copy each channel by planeIndex
} else {
  // f32: copy interleaved, then de-interleave
}
```

生のサンプルから `AudioData` を構築するには、すべてのチャンネルのデータを 1 つの `Float32Array` に連結し、各チャンネルのサンプルを順番に配置（`f32-planar` レイアウトに準拠）するとともに、`numberOfFrames` をチャンネルごとのサンプル数に設定する必要があります：

```js
const framesPerChunk = 1024;
const data = new Float32Array(framesPerChunk * 2); // 2 channels
data.set(leftChannel, 0);
data.set(rightChannel, framesPerChunk);

const audioData = new AudioData({
  format: "f32-planar",
  sampleRate: 48000,
  numberOfFrames: framesPerChunk,
  numberOfChannels: 2,
  timestamp: sourceAudioData.timestamp,
  data,
});
```

特定の AAC コーデック文字列（`mp4a.40.5`、`mp4a.40.05`、`mp4a.40.29`）は、スペクトル帯域複製 (SBR) と呼ばれる技術を使用する設定に対応しており、これによりデコーダーは、デコーダー設定で指定されたサンプリングレートの 2 倍のレートで音声を出力することになります。設定値と一致すると仮定するのではなく、常に `audioData.sampleRate` を直接読み取るようにしてください。
`VideoFrame` と同様に、`AudioData` オブジェクトはメモリーを解放するために明示的に閉じる必要があります。

```js
audioData.close();
```

`AudioData` は `VideoFrame` に比べてはるかに少ないメモリーしか必要としませんが、生の音声データはかなりのメモリーを消費します。48kHz のステレオ音声を 1 時間分保存すると、約 1.4GB になります。ファイルサイズが大きい場合は、音声データを一度にすべて処理するのではなく、バッチ処理でデコードおよび処理を行うべきです。

## 関連情報

- [動画処理の概念](/ja/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [コーデックの選択](/ja/docs/Web/API/WebCodecs_API/Codec_selection)
- {{domxref("VideoEncoder")}}
- {{domxref("VideoDecoder")}}
- {{domxref("AudioEncoder")}}
- {{domxref("AudioDecoder")}}
- {{domxref("VideoFrame")}}
- {{domxref("AudioData")}}
- {{domxref("EncodedVideoChunk")}}
- {{domxref("EncodedAudioChunk")}}
