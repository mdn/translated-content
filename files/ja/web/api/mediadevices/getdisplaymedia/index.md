---
title: "MediaDevices: getDisplayMedia() メソッド"
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{DefaultAPISidebar("Screen Capture API")}}

{{domxref("MediaDevices")}} インターフェイスの **`getDisplayMedia()`** メソッドは、ディスプレイまたはその一部（ウィンドウなど）の内容を {{domxref("MediaStream")}} としてキャプチャする許可を選択し、許可するようユーザーに促します。

生成されたストリームは、 [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) を使って記録したり、 [WebRTC](/ja/docs/Web/API/WebRTC_API) セッションとして送信することが可能です。

詳細および使用例については、[画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)を参照してください。

## 構文

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### 引数

- `options` {{optional_inline}}
  - : オプションのオブジェクトで、返される {{domxref("MediaStream")}} の要件を指定します。 `getDisplayMedia()` のオプションは {{domxref("MediaDevices.getUserMedia()")}} メソッドの [constraints](/ja/docs/Web/API/MediaDevices/getUserMedia#parameters) と同じように動作しますが、ただし `audio` および `video` が指定された場合のみです。`getDisplayMedia()` の利用可能なオプションプロパティの一覧は次の通りです。
    - `video` {{optional_inline}}
      - : 論理値または {{domxref("MediaTrackConstraints")}} インスタンスで、既定値は `true` です。このオプションを省略するか、`true` に設定すると、ストリームに映像トラックが格納されます。`true` の値は、返す {{domxref("MediaStream")}} に映像トラックが格納されることを示します。`getDisplayMedia()` は映像トラックを必要とするので、このオプションを `false` に設定すると、プロミスは `TypeError` で拒否されます。
    - `audio` {{optional_inline}}
      - : 論理値または {{domxref("MediaTrackConstraints")}} インスタンスで、既定値は `false` です。返される {{domxref("MediaStream")}} の値が `true` の場合、ユーザーが選択した表示画面が音声が対応していて利用可能な場合、音声トラックが格納されることを示します。
    - `controller` {{optional_inline}}
      - : 含まれている場合、キャプチャセッションをさらに操作するために使用できるメソッドを持つ {{domxref("CaptureController")}} オブジェクトのインスタンスです。
    - `preferCurrentTab` {{non-standard_inline}} {{optional_inline}}
      - : 論理値です。`true` とすると、ブラウザーが現在のタブを最も推奨するキャプチャソースとして提供するように指示します。つまり、ユーザーに表示される「共有するものを選んでください」オプションの中に、別個の「このタブ」オプションとして表示されます。これは、一般的に多くの種類のアプリが現在のタブを共有したいだけなので有益なことです。例えば、スライドデッキアプリは、ユーザーが仮想会議にプレゼンテーションを格納する現在のタブをストリーミングできるようにすることができます。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `selfBrowserSurface` {{optional_inline}}
      - : ブラウザーが、キャプチャのためにユーザーが現在のタブを選択することを許可するかどうかを指定する列挙型値です。これは、動画会議アプリが誤って自分自身でディスプレイを共有してしまったときに経験する「無限の鏡のホール」効果を避けるために役立ちます。使用可能な値は、ブラウザーがキャプチャーの選択肢に現在のタブを含めることを指示する `include` と、除外することを指示する `exclude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `surfaceSwitching` {{optional_inline}}
      - : ブラウザーが、画面共有中にユーザーが共有タブを動的に切り替えるためのコントロールを表示するかどうかを指定する列挙型の値です。これは、ユーザーが共有タブを切り替えたいときに毎回共有プロセス全体を読み直すよりもずっと便利です。使用可能な値は、ブラウザーがコントロールを含めることを指示する `include` と、コントロールを表示しないことを指示する `exclude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。
    - `systemAudio` {{optional_inline}}
      - : ブラウザーがユーザーに提供する使用可能な音声ソースの中にシステム音声を含めるべきかどうかを指定する列挙型の値です。使用可能な値は、ブラウザーがシステム音声を選択肢のリストに含めることを指示する `include` と、除外することを指示する `exclude` です。既定値は仕様書では定められていません。ブラウザー別の既定値については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

> **メモ:** [能力と制約と設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints)の記事を見ると、これらのオプションがどのように動作するかのもっと詳細があります。

### 返値

{{jsxref("Promise")}} で、ユーザーが選択した画面領域から来る映像トラックと、オプションの音声トラックを含む {{domxref("MediaStream")}} に解決します。

> **メモ:** 音声トラックに対するブラウザーの対応は、メディアレコーダーが全く対応していないかどうかという点でも、対応している音声ソースという点でも、さまざまです。各ブラウザーの詳細については、[互換性一覧表](#ブラウザーの互換性)を確認してください。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : エラーまたは失敗がここに挙げた他の例外のいずれにも該当しない場合に返される。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `getDisplayMedia()` の呼び出しが、イベントハンドラーのようなユーザーアクションによって実行されているコードから行われなかった場合に返されます。このイベントのもう一つの原因として考えられるのは、 `getDisplayMedia()` が呼び出されたコンテキストの {{domxref("document")}} が完全にアクティブでないことです。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 画面領域へのアクセス許可がユーザーによって（例えば[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)で）拒否された場合、または現在の閲覧インスタンスが画面共有へのアクセスを許可されていない場合に返されます。
- `NotFoundError` {{domxref("DOMException")}}
  - : キャプチャ可能な画面映像のソースが存在しない場合に返却されます。
- `NotReadableError` {{domxref("DOMException")}}
  - : ユーザーが画面、ウィンドウ、タブ、またはその他の画面データのソースを選択したが、ハードウェアまたはオペレーティングシステムレベルのエラーまたはロックアウトが発生し、選択したソースの共有ができない場合に返されます。
- `OverconstrainedError` {{domxref("DOMException")}}
  - : ストリームを作成した後、互換性のあるストリームが生成できなかったため、指定された制約の適用に失敗した場合に返されます。
- {{jsxref("TypeError")}}
  - : 指定した `options` に許可されていない値が含まれた状態で `getDisplayMedia()` を呼び出した場合、例えば `video` プロパティを false に設定した場合、あるいは指定した {{domxref("MediaTrackConstraints")}} が許可されていない場合などに返されます。`min` と `exact` 値は、{{domxref("MediaDevices.getDisplayMedia()")}} の呼び出しの中で使用される制約では許可されません。

## セキュリティ

`getDisplayMedia()` は悪用される可能性があるため、プライバシーとセキュリティに関する重大な懸念の源となり得ます。そのため、仕様書では `getDisplayMedia()` を完全に対応するためにブラウザーに要求される基準を詳述しています。

- 指定されたオプションは、ユーザーが利用できるオプションを制限するために使用することはできません。代わりに、ユーザーがソースを選択した後、オプションに一致する出力を生成するために適用する必要があります。
- `getDisplayMedia()` を使用するための go-ahead 権限は、再利用のために永続化することはできません。ユーザーは毎回、許可を求めるプロンプトを表示しなければなりません。
- [単発のユーザーにようる有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能を動作させるためには、ユーザーがページや UI 要素を操作する必要があります。
- `getDisplayMedia()`の呼び出しは、イベントハンドラーのようなユーザーのアクションに反応して実行されるコードから行われなければなりません。
- ブラウザーは、ブラウザーを含むディスプレイやウィンドウを共有することについての警告をユーザーに提供し、他のコンテンツがキャプチャされて他のユーザーに表示される可能性があることに注意することが推奨されます。

## 例

以下の例では、 `displayMediaOptions` 引数で指定された一連のオプションを指定して画面のキャプチャを開始する `startCapture()` メソッドが作成されています。このオプションは、優先するストリーム構成と、ビデオをキャプチャする[表示面](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#visible_vs_logical_display_surfaces)を指定したオブジェクトで指定されます。

```js
async function startCapture(displayMediaOptions) {
  let captureStream;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}
```

これは {{jsxref("Operators/await", "await")}} を使用して、 `getDisplayMedia()` が {{domxref("MediaStream")}} で解決するのを非同期に待ち、指定したオプションで要求された表示コンテンツを含むストリームを生成します。ストリームは、ストリームからビデオトラックを追加するために {{domxref("RTCPeerConnection.addTrack()")}} を使用して WebRTC 呼び出しに追加するために使用する呼び出し側に返されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面キャプチャ API](/ja/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/ja/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: カメラやマイクからメディアをキャプチャ
