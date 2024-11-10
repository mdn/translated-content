---
title: "MediaCapabilities: encodingInfo() メソッド"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 7b565c5f4610bea19c844f35532853624d87cde3
---

{{APIRef("Media Capabilities API")}}

**`encodingInfo()`** は {{domxref("MediaCapabilities")}} インターフェイスのメソッドで、確認されたメディア構成のエンコード方式の能力を履行するプロミスを返します。
これには、端末がメディアの種類とどの程度互換性があるかを記述する 3 つの論理値プロパティ、`supported`、`smooth`、`powerefficient` があります。

## 構文

```js-nolint
encodingInfo(configuration)
```

### 引数

- `configuration`

  - : `type` プロパティと、適切な型の構成を格納する `video` または `audio` プロパティを持つオブジェクトです。 <!-- 仕様書上の MediaEncodingConfiguration -->

    - `type`

      - : 検査対象のメディアの種類。これは 2 つの値のうちの 1 つを取ります。

        - `record`
          - : メディアの録画構成を表します。例えば、{{domxref("MediaRecorder")}}を使用します。
        - `webrtc`
          - : 電子的手段で送信されることを意味している構成を表します（例えば、{{domxref("RTCPeerConnection")}}を使用）。 **メモ:** Firefox ではこの型に `transmission` を使用しており、`webrtc` は動作しません。
        - `transmission` {{non-standard_inline}}
          - : Firefox で使用する `webrtc` の同義語。

    - `video`

      - : 動画メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の VideoConfiguration -->

        - `contentType`
          - : 有効な動画の MIME タイプ、および（オプションで）[`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)の入った文字列です。
        - `width`
          - : 映像の幅です。
        - `height`
          - : 映像の高さです。
        - `bitrate`
          - : 動画ファイルの 1 秒をエンコードするために使用するビット数。
        - `framerate`
          - : 動画再生の 1 秒を構成するフレーム数。

    - `audio`

      - : 音声メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の AudioConfiguration -->

        - `contentType`
          - : 有効な音声の MIME タイプ、および（オプションで）[`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)の入った文字列です。
        - `channels`
          - : 音声トラックが使用するチャンネル数。
        - `bitrate`
          - : 音声ファイルの 1 秒をエンコードするのに用いるビット数。
        - `samplerate`
          - : 音声ファイルの 1 秒を構成する音声サンプルの数。

### 返値

{{jsxref('Promise')}} で、以下の論理値属性を持つオブジェクトで履行されます。

- `supported`
  - : メディアコンテンツがすべてエンコードできる場合は `true`。そうでない場合は `false`。
- `smooth`
  - : メディアの再生がスムーズ（高品質）に行われる場合は `true`、そうでない場合は `false` です。
- `powerEfficient`
  - : メディアの再生が電力効率的であれば `true`、そうでなければ `false` です。

ブラウザーは、この端末の統計情報が記録されるまで、対応しているメディア構成を`smooth` および `powerEfficient` と報告します。
対応している音声コーデックはすべて電力効率が良いと報告されます。

### 例外

- {{jsxref("TypeError")}}
  - : `encodingInfo()` メソッドに渡された `configuration` が不正な場合に発生します。これは、以下の理由の内のいずれかに起因する可能性が考えられます。
    - 型が映像または音声ではない。
    - `contentType` が有効なコーデックの MIME タイプではありません。
    - メソッドに渡すメディア構成に、`configuration` 要素が省略されているなど、その他のエラーがある場合。

## 例

```js-nolint
//Create media configuration to be tested
const mediaConfig = {
  type: "record", // or 'transmission'
  video: {
    contentType: "video/webm;codecs=vp8.0", // valid content type
    width: 1920, // width of the video
    height: 1080, // height of the video
    bitrate: 120000, // number of bits used to encode 1s of video
    framerate: 48, // number of frames making up that 1s.
  },
};

// サポートとパフォーマンスを確認する
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(
    `この構成には対応して${result.supported ? "おり" : "おらず"}、`,
  );
  console.log(`円滑で${result.smooth ? "あり" : "なく"}、`);
  console.log(`電力効率に優れて${result.powerEfficient ? "います" : "いません"}。`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaCapabilities.decodingInfo()")}}
