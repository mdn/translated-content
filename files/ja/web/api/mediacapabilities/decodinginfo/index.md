---
title: "MediaCapabilities: decodingInfo() メソッド"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("Media Capabilities API")}}

**`decodingInfo()`** は {{domxref("MediaCapabilities")}} インターフェイスのメソッドで、指定された構成でユーザーエージェントがメディアをどれだけデコード/表示できるかに関する情報で履行するプロミスを返します。

解決されたオブジェクトには、記述されているメディアのデコードに対応しているかどうか、また対応している場合は場合はデコードがスムーズかつ電力効率的に行われるかどうかを示す、3 つの論理値プロパティ `supported`, `smooth`, `powerefficient` が格納されています。

このメソッドは、キーシステムでエンコードされたメディアをデコードするためのユーザーエージェントの能力を調べるためにも使用できますが、メインスレッドで保護されたコンテキストで呼び出された場合のみです。
`configuration.keySystemConfiguration` プロパティに渡された構成が、データのデコードに対応している場合、解決されたプロミスには {{domxref("MediaKeySystemAccess")}} オブジェクトも含まれることがあります。これは、暗号化された再生を設定するために使用できる {{domxref("MediaKeys")}} オブジェクトを作成するために使用できます。

> [!NOTE]
> このプロパティで `decodingInfo()` を呼び出すと、1 つ以上のシステムリソースにアクセスする許可を求めるなど、ユーザーに視認できる効果をもたらす可能性があります。
> そのため、この関数は、アプリケーションが指定された構成で `MediaKeys` オブジェクトを作成し、使用する準備ができたときにのみ呼び出すべきです。

## 構文

```js-nolint
decodingInfo(configuration)
```

### 引数

- `configuration`
  - : `type` プロパティと、適切な種類の構成を格納する `video` または `audio` プロパティ、および、オプションでキーシステムで暗号化されたメディアをデコードする際に使用する `keySystemConfiguration` を持つオブジェクトです。 <!-- 仕様書上の MediaDecodingConfiguration -->
    - `type`
      - : 検査対象のメディアの種類。これは 3 つの値のうちの 1 つを取ります。
        - `file`
          - : プレーンなファイル再生に使用することを意味する構成を表します。
        - `media-source`
          - : {{domxref("MediaSource")}} の再生に使用することを意味する構成を表します。
        - `webrtc`
          - : {{domxref("RTCPeerConnection")}} を使用して受信することを意味する構成を表します（`keySystemConfiguration` が設定されている場合は許可されません）。

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

    - `keySystemConfiguration` {{optional_inline}}
      - : 暗号化されたメディアのキーシステム構成を指定するオブジェクトです。

        > [!NOTE]
        > [`Navigator.requestMediaKeySystemAccess()`](/ja/docs/Web/API/Navigator/requestMediaKeySystemAccess) は `supportedConfigurations` 引数内と同じデータ型の一部を取ります。

        指定された場合、[`type`](#type) は `media-source` または `file` である必要があります（`webrtc` は指定できません）。
        これには以下のプロパティがあります。<!-- 仕様書上の MediaCapabilitiesKeySystemConfiguration -->
        - `keySystem`
          - : メディアキーシステムを識別する文字俺つです。
            例えば `org.w3.clearkey` や `com.widevine.alpha` です。

        - `initDataType` {{optional_inline}}
          - : 初期データ形式のデータ型名を示す文字列です。例えば `"cenc"`、`"keyids"`、`"webm"` です。
            利用できる名前は、[Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) で定義されているものです。

        - `distinctiveIdentifier` {{optional_inline}}
          - : 文字列で、この構成から作成されたオブジェクトに関連する操作に「一意な識別子」（または一意な恒久識別子）を使用してよいかどうかを示します。
            利用できる値は次の通りです。
            - `required`
              - : 返されるオブジェクトは、この機能に対応している必要があります。
            - `optional`
              - : 返されるオブジェクトは、この機能に対応している可能性があります。
                これが既定値です。
            - `not-allowed`
              - : 返されるオブジェクトは、この機能に対応または利用してはいけません。

        - `persistentState` {{optional_inline}}
          - : 文字列で、返されたオブジェクトがセッションデータなどの状態を維持できる必要があるかどうかを示します。
            利用可能な値は次の通りです。
            - `required`
              - : 返されるオブジェクトは、この機能に対応している必要があります。
            - `optional`
              - : 返されるオブジェクトは、この機能に対応している可能性があります。
                これが既定値です。
            - `not-allowed`
              - : 返されるオブジェクトは、この機能に対応または利用してはいけません。
                永続的な状態が許可されていない場合は、「一時的」なセッションのみを作成することができます。

        - `sessionTypes` {{optional_inline}}
          - : 文字列の配列で、対応している必要があるセッションの種類を示します。
            許可された値は次の通りです。
            - `temporary`
              - : セッションのライセンス、キー、またはセッションに関連の記録またはデータが維持されないセッションです。
                アプリケーションは、このようなストレージを管理する必要はありません。
                実装は、このオプションに対応している必要があり、これが既定です。
            - `persistent-license`
              - : ライセンス（および、そのセッションに関連の他のデータ）が維持されるセッションです。
                ライセンスとそれに関連するキーの記録は、ライセンスが破棄された場合でも維持され、ライセンスとキーがクライアントで使用できなくなくなったことを示す証明を示します。

        - `audio` {{optional_inline}}
          - : 上記の [`audio` 構成](#audio)に関連する音声キーシステムのトラック構成。
            設定した場合は、[`audio` 構成](#audio) も設定する必要があります。
            - `encryptionScheme`
              - : コンテンツの型に関連付けられた暗号化スキームです。例えば `cenc`, `cbcs`, `cbcs-1-9` です。
                この値はアプリケーションで設定する必要があります（既定では `null` に設定されており、任意の暗号化方式を使用できることを示します）。
            - `robustness`
              - : コンテンツの型に関連付けられた堅牢性レベル。
                空文字列は、コンテンツタイプを復号しデコードする能力であれば何でも受け入れられることを示します。

        - `video` {{optional_inline}}
          - : 上記の [`video` 構成](#video)に関連する映像キーシステムのトラック構成。
            設定した場合は、[`video` 構成](#video) も設定する必要があります。
            - `encryptionScheme`
              - : コンテンツの型に関連付けられた暗号化スキームです。例えば `cenc`, `cbcs`, `cbcs-1-9` です。
                この値はアプリケーションで設定する必要があります（既定では `null` に設定されており、任意の暗号化方式を使用できることを示します）。
            - `robustness`
              - : コンテンツの型に関連付けられた堅牢性レベル。
                空文字列は、コンテンツタイプを復号しデコードする能力であれば何でも受け入れられることを示します。

### 返値

{{jsxref('Promise')}} で、以下の属性を持つオブジェクトで履行されます。

- `supported`
  - : メディアコンテンツがすべてデコードできる場合は `true`。そうでない場合は `false`。
- `smooth`
  - : メディアの再生が、フレームを落とすことなく構成で指定したフレームレートで再生できる場合は `true`、そうでない場合は `false` です。
- `powerEfficient`
  - : メディアの再生が電力効率的であれば `true`、そうでなければ `false` です。
- `keySystemAccess`
  - : {{domxref("MediaKeySystemAccess")}} で、 {{domxref("MediaKeys")}} オブジェクトを作成するのに使用することができ、暗号化された再生を設定します。または、指定された構成を使用したデコードに対応していない場合は `null` となります。

ブラウザーは、この端末の統計情報が記録されるまで、対応しているメディア構成を`smooth` および `powerEfficient` と報告します。
対応している音声コーデックはすべて、`powerEfficient` を true と報告します。

### 例外

- {{jsxref("TypeError")}}
  - : `decodingInfo()` メソッドに渡された `configuration` が不正な場合、つまり、型が映像または音声でない場合、`contentType` が有効なコーデック MIME タイプでない場合、メディアのデコード構成が `type`（ファイル、メディアソース、webrtc）の有効な値でない場合、またはメソッドに渡されたメディア構成に値の記載漏れなどその他のエラーがある場合に例外が発生します。

- `InvalidStateError` {{domxref("DOMException")}}
  - : [`configuration.keySystemConfiguration`](#keysystemconfiguration) が定義されている場合で、このメソッドがワーカーから呼び出された場合。

- `SecurityError` {{domxref("DOMException")}}
  - : このメソッドが安全ではないコンテキストで呼び出され、[`configuration.keySystemConfiguration`](#keysystemconfiguration) が定義されています。

## 使用上のメモ

### Navigator.requestMediaKeySystemAccess() との比較

`decodingInfo()` と {{domxref("Navigator.requestMediaKeySystemAccess()")}} メソッド（[Encrypted Media Extensions API](/ja/docs/Web/API/Encrypted_Media_Extensions_API) ）は、暗号化されたメディアをデコードするための構成を選択する根本的に異なる手法を反映しています。

`Navigator.requestMediaKeySystemAccess()` の構成パラメーターは、利用可能な構成の配列を取り、システムが適切と考えるものを選べるようにします。

これに対して、`decodingInfo()` は一度に取る構成は 1 つです。
呼び出し側が `decodingInfo()` を複数回実行し、できれば最も推奨する構成から始め、スムーズで電力効率が良い、またはその両方というアプリケーションの要求を満たす構成をできるだけ早く探すことが期待されます。
言い換えれば、選択の決定は呼び出し側に委ねられます。

## 例

### 暗号化されていないメディアファイルのデコード情報を取得する

この例では、音声ファイルの場合のメディア構成を作成し、それを `MediaCapabilities.decodingInfo()` で使用する方法を示しています。

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
//Create media configuration to be tested
const audioConfig = {
  type: "file", // or 'media-source' or 'webrtc'
  audio: {
    contentType: "audio/ogg; codecs=vorbis", // valid content type
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 5200, // number of audio samples making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(audioConfig).then((result) => {
  if (result.supported) {
    log(
      `The audio configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The audio configuration is not supported");
  }
});
```

Similarly, the code below shows the configuration for a video file.

```js
const videoConfig = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8", // valid content type
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(audioConfig).then((result) => {
  if (result.supported) {
    log(
      `The video configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The video configuration is not supported");
  }
});
```

{{EmbedLiveSample("Getting decoding information for unencrypted media files")}}

### 暗号化されたメディアのデコード情報を取得する

この例では、暗号化されたコンテンツのメディア構成を選択するために `decodingInfo()` を使用する方法を示しています。

例えば前回のようにメディア構成を定義しますが、今回は `type` を `media-source`（`file` ではなく）で使用し、音声と映像の両方のコンテンツを指定します。
また、単純な `keySystemConfiguration` を指定します。

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const encryptedMediaConfig = {
  type: "media-source", // or 'file'
  audio: {
    contentType: "audio/webm; codecs=opus",
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 48000, // number of audio samples making up that 1s.
  },
  video: {
    contentType: 'video/webm; codecs="vp09.00.10.08"',
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
  keySystemConfiguration: {
    keySystem: "org.w3.clearkey",
    initDataType: "webm",
    distinctiveIdentifier: "required",
  },
};
```

前の例では、[プロミス連鎖](/ja/docs/Web/JavaScript/Guide/Using_promises#連鎖)を使用して結果を待ちました。
ここでは、[`async` と `await`](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises#async_と_await) を使用して結果を待ち、その後ログ出力するように選べます。

```js
getDecodingInfo(encryptedMediaConfig);

async function getDecodingInfo(mediaConfig) {
  const result = await navigator.mediaCapabilities.decodingInfo(mediaConfig);
  console.log(result);
  if (!result.supported) {
    log("This encrypted media configuration is not supported.");
    return;
  }

  // keySystemAccess is returned if decoding encrypted media is supported
  // This can be used to decrypt and playback the media
  if (!result.keySystemAccess) {
    log("Encrypted media support is not available.");
    return;
  }

  log(
    `The encrypted media configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
  );
}
```

ログ出力は下記の通りです。

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### 暗号化されたメディアのデコード情報を反復処理する

前回の例では、`decodingInfo()` を使用して単一の構成に関する情報を取得する方法を示しました。
実際には、このメソッドは反復処理で複数の構成を呼び出すのが一般的であり、スムーズな再生や電力効率性など、アプリケーションの基準に一致する最初の対応構成を選択します。
これの動作する方法は後述します。

すでに `orderedMediaConfigs` という名前のメディア構成の配列 (`Array`) があり、最も望ましいものから望ましくないものへと順序付けされていると仮定すると、[`Array.prototype.map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) を使用して、各構成に対して `decodingInfo()` を呼び出し、返されたすべての {{jsxref("Promise")}} オブジェクトを含む配列を取得することができます。

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

次に、[`for await...of` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of)を使用して、プロミスが解決するごとに反復処理します。
ループ内で、最後に対応している構成を `nonSmoothConfig` に格納し、スムーズな構成を探し当てたらすぐにループを終了し、これを `bestConfig` に設定します。

```js
// Assume this app wants a supported && smooth config.
let bestConfig = null;
let nonSmoothConfig = null;
for await (const mediaCapabilityInfo of capabilitiesPromises) {
  if (!mediaCapabilityInfo.supported) continue;

  if (!mediaCapabilityInfo.smooth) {
    nonSmoothConfig = mediaCapabilityInfo;
    continue;
  }

  bestConfig = mediaCapabilityInfo;
  break;
}
```

ループ処理中にスムーズで対応している構成 (`bestConfig`) が見つかった場合、[メディアキーを作成する](/ja/docs/Web/API/MediaKeySystemAccess/createMediaKeys)ためにそれを使用し、メディアをデコードします。
スムーズな構成が見つからなかった場合は、代わりに `nonSmoothConfig` を使用してメディアをデコードします。
これは最後に探された対応している構成であり、元の `orderedMediaConfigs` の順序付け方法により、フレームレートが最も低いものになるはずです。

```js
let keys = null;
if (bestConfig) {
  keys = await bestConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using best config
} else if (nonSmoothConfig) {
  console.log(
    "No smooth configs found. Using lowest resolution configuration!",
  );
  keys = await nonSmoothConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using lowest framerate config
} else {
  console.log("No supported configs!");
  // Fail!
}
```

対応している構成がない場合は、失敗してユーザーに通知するしかありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("HTMLMediaElement.canPlayType()")}}: ファイル向け
- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}}: メディアソース向け
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
