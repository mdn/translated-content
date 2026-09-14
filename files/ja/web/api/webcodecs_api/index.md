---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

**WebCodecs API**により、ウェブ開発者はブラウザー内において、（ハードウェアアクセラレーションを活用し）効率的に、かつ、とても低水準の制御（フレーム単位での処理）で、動画や音声のエンコードおよびデコードを行うことができます。

これは、大規模なメディア処理を行うウェブアプリケーションや、メディアのエンコード方法を低水準で制御する必要があるアプリケーションに有用です。
これには、ブラウザーベースの動画・音声編集に加え、ライブストリーミングやビデオ会議などが含まれます。

## 概念

WebCodecs API は、生の動画フレーム、エンコード済みの動画フレーム、生の音声、エンコード済みの音声を表現するための、ブラウザー固有のインターフェイスを提供します。

|                    | 動画                             | 音声                             |
| ------------------ | -------------------------------- | -------------------------------- |
| **生**             | {{domxref("VideoFrame")}}        | {{domxref("AudioData")}}         |
| **エンコード済み** | {{domxref("EncodedVideoChunk")}} | {{domxref("EncodedAudioChunk")}} |

WebCodecs API では、`EncodedVideoChunk` オブジェクトを `VideoFrame` オブジェクトに変換したり、その逆の変換を行ったりする {{domxref("VideoDecoder")}} および {{domxref("VideoEncoder")}} インターフェイスも導入されています。

![VideoEncoder と VideoDecoder](video-encoder-decoder.png)

同様に、WebCodecs API では、`EncodedAudioChunk` オブジェクトを `AudioData` オブジェクトに変換し、その逆も行う {{domxref("AudioDecoder")}} および {{domxref("AudioEncoder")}} インターフェースも導入されています。

![AudioEncoder と AudioDecoder](audio-encoder-decoder.png)

一般的に、各メディア型の生バージョンとエンコード済みバージョンは 1 対 1 の関係にあります。複数の `EncodedVideoChunk` オブジェクトをデコードすると、同じ数の `VideoFrame` オブジェクトが得られます（これはオーディオについても同様です）。

### 動画

`VideoFrame` は動画フレームを表し、端末のグラフィックメモリー上の実際のピクセルデータに加え、タイムスタンプや再生時間（マイクロ秒単位）、フォーマット、解像度などのメタデータと紐付けられています。`VideoFrame` は任意の画像ソースから生成することができ、また、キャンバス描画メソッドのいずれかを使用して {{domxref("Canvas")}} へレンダリングすることも可能です。

`EncodedVideoChunk` は、通常のメモリー内のバイナリーデータおよび同じメタデータと紐付けられた、同じフレームのエンコード済み（圧縮済み）バージョンを表します。
唯一の違いは、`type` というフィールドが 1 つ追加されている点です。このフィールドの値は "key" または "delta" となり、それが[キーフレーム](https://webcodecsfundamentals.org/basics/encoded-video-chunk/#key-frames)に対応するかどうかを表します。`EncodedVideoChunk` が格納するデータは、通常、対応する生の `VideoFrame` よりも 10 分の一から 100 分の一の少ないデータです。

![VideoFrame と EncodedVideoChunk](video-frame.png)

### 音声

`AudioData` オブジェクトは、個々の音声サンプル（通常は 1024 個）を表します。音声サンプルデータは、`copyTo` メソッドを使用して {{jsxref("Float32Array")}} として抽出できます。[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) との直接的な統合機能はありませんが、抽出された `Float32Array` サンプルは、再生のために {{domxref("AudioBuffer")}} に直接コピーすることができます。

同様に、`EncodedAudioChunk` は、圧縮された音声サンプルデータを含む `AudioData` オブジェクトのエンコード済み（圧縮）バージョンを表します。

![AudioData と EncodedAudioChunk](audio-data.png)

### 処理モデル

WebCodecs API は、非同期の[処理モデル](https://w3c.github.io/webcodecs/#codec-processing-model-section)を採用しています。エンコーダーやデコーダーの各インスタンスは、内部で独立した処理キューを保持しています。デコード用のエンコード済みチャンクや、エンコード用のフレーム／サンプルを大量にキューに入れる際は、このモデルを念頭に置いておくことが重要です。

{{domxref("VideoEncoder/configure", "configure()")}}、{{domxref("VideoEncoder/encode", "encode()")}}、{{domxref("VideoDecoder/decode", "decode()")}}、{{domxref("VideoEncoder/flush", "flush()")}} は、制御メッセージをキューの末尾に追加することで非同期に動作しますが、{{domxref("VideoEncoder/reset", "reset()")}} および {{domxref("VideoEncoder/close", "close()")}} という名前のメソッドは、保留中のすべての処理を同期的に中止し、処理キューを消去します。`reset()` の後、`configure()` の呼び出しに続いてさらに処理がキューに追加される可能性がありますが、`close()` は永続的な操作です。これらのメソッドは、音声および動画のデコーダー/エンコーダーの両方で機能します。

`flush()` メソッドを使用すると、`flush()` の呼び出し時点で保留中だったすべての処理が完了するのを待機できます。ただし、通常はこのメソッドは、必要な処理がすべてキューに登録された後に一度だけ呼び出すべきであり、一定間隔で処理を強制的に進めることを意図したものではありません。不必要に呼び出すと、エンコーダーの品質に影響を与え、デコーダーが次の入力としてキーフレームを要求する原因となります。

### コーデック

コーデックとは、動画や音声を符号化（圧縮）および復号（展開）するための特定のアルゴリズムのことです。動画用にはいくつかの業界標準コーデックがあり、音声用にはそれとは別のコーデック群が存在します。WebCodecs API で対応している主なコーデックは以下の通りです。

#### 動画コーデック

- H.264 (AVC)
  - : 最も広く対応されている動画コーデックです。ほとんどの MP4 ファイルは H.264 を使用しています。
- VP9
  - : Google が開発したオープンソース規格です。H.264 よりも優れた圧縮率を誇ります。YouTube や WebM ファイルで広く使用されています。
- AV1
  - : VP9 よりも優れた圧縮性能を持つ最新のオープンソースコーデックです。デコーダーの対応は広範囲に及びますが、ハードウェアエンコーダーの対応はまだ限定的です。
- H.265 (HEVC)
  - : H.264 よりも圧縮効率は高いですが、Apple のプラットフォーム以外ではブラウザーの対応状況に大きな格差があります。

#### 音声コーデック

- Opus
  - : オープンソースで低遅延です。ほとんどの WebCodecs 音声エンコーディングにおいて、推奨される選択肢です。
- AAC
  - : 広く対応されていません。MP4 ファイルでよく見られます。
- MP3
  - : デコードについては広く対応されていますが、WebCodecs ではエンコーダーとして利用できません。
- PCM
  - : 非圧縮音声。音質は劣化しませんが、ファイルサイズが大きくなります。

WebCodecs 仕様書は特定のコーデックセットに対応していますが、個々の端末やブラウザーでは、その一部にしか対応していない場合があります。エンコーダーおよびデコーダーは、`"vp9"` や `"h264"` のような曖昧なコーデック名ではなく、完全に特定されたコーデック文字列（VP9 の場合は `"vp09.00.40.08.00"`、H.264 の場合は `"avc1.4d0034"` など）で設定する必要があります。[コーデック選択ガイド](/ja/docs/Web/API/WebCodecs_API/Codec_selection)には、適切なコーデック文字列の選択に関するガイドがあります（コーデック文字列とそのブラウザーでの対応状況の完全なリストについては、[コーデック対応表](https://webcodecsfundamentals.org/datasets/codec-support-table/)<sup>(英語)</sup> (webcodecsfundamentals.org) を参照してください）。

### 多重化と多重分離

WebCodecs API はエンコードとデコードのみを扱っており、エンコードされたチャンクは単なるバイナリーデータを表すに過ぎません。この API には、動画ファイルから `EncodedVideoChunk` オブジェクトを読み込んだり、再生可能な動画ファイルに書き込んだりする組み込みの機能は備わっていません。

動画ファイルからエンコードされたチャンクを読み込むのは、多重分離 (demuxing) と呼ばれる全く別のプロセスです。動画ファイルから `EncodedVideoChunk` オブジェクトを取得するには、[Mediabunny](https://mediabunny.dev/) や [web-demuxer](https://github.com/bilibili/web-demuxer) などの多重分離ライブラリーを使用する必要があります。

![Demuxer](decoder-demuxer.png)

これらのライブラリーは、動画コンテナーの仕様（例：webm、mp4）に従って、各エンコード済みチャンクのトラックデータとバイトオフセットを抽出し、生ファイルから実際のチャンクを抽出するためのメソッドを提供します。

同様に、再生可能な動画ファイルに書き込むには、多重化ライブラリーが必要となります。主な選択肢としては [Mediabunny](https://mediabunny.dev/) が挙げられます。多重化ライブラリーは、バイナリーエンコードされたデータを整形し、コンテナー仕様に従って出力ファイルストリーム内の正しいバイト位置に配置することで、出力された動画を再生可能にします。

多重化と多重分離に関する詳細情報は、[多重化と多重分離のガイド](https://webcodecsfundamentals.org/basics/muxing/)<sup>(英語)</sup> (webcodecsfundamentals.org) をご覧ください。

## ガイド

- [動画処理の概念](/ja/docs/Web/API/WebCodecs_API/Video_processing_concepts)
  - : 動画処理に関する入門ガイドです。コーデックやコンテナー、多重化と多重分離について解説し、WebCodecs API がこれらの概念をどのように実装しているかを説明する概念的な情報も含まれています。
- [WebCodecs API の使用](/ja/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
  - : WebCodecs API の実際の使用方法に関する詳細ガイドです。エンコーダーおよびデコーダーのインスタンス化と設定方法、動画フレームの作成と処理方法、`AudioData` からのサンプル抽出方法などを解説します。
- [コーデックの選択](/ja/docs/Web/API/WebCodecs_API/Codec_selection)
  - : WebCodecs API では、コーデック文字列が必要です。これは、コーデックのファミリーだけでなく、プロファイル、レベル、その他のパラメーターも指定する正確な識別子です。このガイドでは、コーデック文字列の仕組みと、一般的な使い方に適したコーデックの選び方について説明します。

## インターフェイス

- {{domxref("AudioDecoder")}}
  - : {{domxref("EncodedAudioChunk")}} オブジェクトをデコードします。
- {{domxref("VideoDecoder")}}
  - : {{domxref("EncodedVideoChunk")}} オブジェクトをデコードします。
- {{domxref("AudioEncoder")}}
  - : {{domxref("AudioData")}} オブジェクトをエンコードします。
- {{domxref("VideoEncoder")}}
  - : {{domxref("VideoFrame")}} オブジェクトをエンコードします。
- {{domxref("EncodedAudioChunk")}}
  - : コーデック独自のエンコードされた音声バイトを表します。
- {{domxref("EncodedVideoChunk")}}
  - : コーデック独自のエンコードされた動画バイトを表します。
- {{domxref("AudioData")}}
  - : エンコードされていない音声データを表します。
- {{domxref("VideoFrame")}}
  - : エンコードされていない動画データを表します。
- {{domxref("VideoColorSpace")}}
  - : 動画フレームの色空間を表します。
- {{domxref("ImageDecoder")}}
  - : 画像データを展開してデコードし、アニメーション画像のフレーム列にアクセスできるようにします。
- {{domxref("ImageTrackList")}}
  - : 画像内にて利用可能なトラックのリストを表します。
- {{domxref("ImageTrack")}}
  - : 個々の画像トラックを表します。

## 例

### 基本的な使い方

`VideoEncoder` インスタンスを作成するには、`EncodedVideoChunk` インスタンスが処理可能になった際に呼び出されるコールバック関数と、エラーが発生した際に呼び出されるエラー処理関数を指定するオブジェクトを渡します。
これは以下のコードに示されています。

```js
const encoder = new VideoEncoder({
  output(chunk, meta) {
    // チャンクに対して何らかの処理を行い、通常は多重化ライブラリーに送信する
  },
  error(e) {
    console.warn(e);
  },
});
```

次に、コーデックのパラメーターやその他の各種フィールドを設定して、エンコーダーを構成する必要があります。

```js
encoder.configure({
  codec: "vp09.00.40.08.00", // コーデック選択ガイドを参照
  width: 1280,
  height: 720,
  bitrate: 1_000_000, // 1 Mbps
  framerate: 30,
});
```

その後、エンコーダーへのフレームのエンコードを開始できます。`Canvas` から `VideoFrame` を作成することができます。

```js
for (let i = 0; i < 60; i++) {
  const frame = new VideoFrame(canvas, { timestamp: (i * 1e6) / 30 }); // 30 fps、ミリ秒単位
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
}
```

その他の例については、[WebCodecs API の使用](/ja/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)を参照してください。

## 関連情報

- [Video processing with WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Samples](https://w3c.github.io/webcodecs/samples/)
- [WebCodecsFundamentals](https://webcodecsfundamentals.org/)
- [Real-Time Video Processing with WebCodecs and Streams: Processing Pipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video Frame Processing on the Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN, and WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
