---
title: MediaDevices.getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
tags:
  - API
  - キャプチャ
  - 会議
  - メディア
  - MediaDevices
  - メソッド
  - リファレンス
  - 画面キャプチャ
  - 画面キャプチャ API
  - Sharing
  - Video
  - display
  - getDisplayMedia
  - screen
browser-compat: api.MediaDevices.getDisplayMedia
translationof: Web/API/MediaDevices/getDisplayMedia
---
{{DefaultAPISidebar("Screen Capture API")}}

{{domxref("MediaDevices")}} インターフェイスの **`getDisplayMedia()`** メソッドは、ディスプレイまたはその一部（ウィンドウなど）の内容を {{domxref("MediaStream")}} としてキャプチャする許可を選択し、許可するようユーザーに促します。

生成されたストリームは、 [MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) を使って記録したり、 [WebRTC](/ja/docs/Web/API/WebRTC_API) セッションとして送信することが可能です。

詳細および使用例については、[画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)を参照してください。

## 構文

```js
getDisplayMedia(constraints)
```

### 引数

- `constraints` {{optional_inline}}
  - : オプションのオブジェクトで、返される {{domxref("MediaStream")}} の要件を指定します。 `getDisplayMedia()` は動画トラックを要求するので、 `constraints` オブジェクトで明示的に動画トラックが要求されていなくても、返されるストリームは動画トラックを持ちます。詳細は、 {{domxref("MediaDevices.getUserMedia()")}} メソッドの下にある [constraints](/ja/docs/Web/API/MediaDevices/getUserMedia#parameters) のセクション、および記事 [Capabilities, constraints] を参照してください。また、[能力、制約、設定](/ja/docs/Web/API/Media_Streams_API/Constraints) の記事も参照してください。

### 返値

{{jsxref("Promise")}} で、ユーザーが選択した画面領域から来る動画トラックと、オプションの音声トラックを含む {{domxref("MediaStream")}} に解決します。

> **Note:** 音声トラックに対するブラウザーの対応は、メディアレコーダーが全く対応していないかどうかという点でも、対応している音声ソースという点でも、さまざまです。各ブラウザーの詳細については、[互換性一覧表](#ブラウザーの互換性)を確認してください。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : エラーまたは失敗がここに挙げた他の例外のいずれにも該当しない場合に返される。
- `InvalidStateError`  {{domxref("DOMException")}}
  - : `getDisplayMedia()` の呼び出しが、イベントハンドラーのようなユーザーアクションによって実行されているコードから行われなかった場合に返されます。このイベントのもう一つの原因として考えられるのは、 `getDisplayMedia()` が呼び出されたコンテキストの {{domxref("document")}} が完全にアクティブでないことです。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 画面領域へのアクセス許可がユーザによって拒否された場合、または現在のブラウジングインスタンスが画面共有へのアクセスを許可されていない場合に返されます。
- `NotFoundError` {{domxref("DOMException")}}
  - : キャプチャ可能な画面映像のソースが存在しない場合に返却されます。
- `NotReadableError`  {{domxref("DOMException")}}
  - : ユーザーが画面、ウィンドウ、タブ、またはその他の画面データのソースを選択したが、ハードウェアまたはオペレーティングシステムレベルのエラーまたはロックアウトが発生し、選択したソースの共有ができない場合に返されます。
- `OverconstrainedError` {{domxref("DOMException")}}
  - : ストリームを作成した後、互換性のあるストリームが生成できなかったため、指定された `constraints` の適用に失敗した場合に返される。
- {{jsxref("TypeError")}}
  - : 指定された `constraints` が `getDisplayMedia()` を呼び出す際に許可されない制約を含んでいる場合に返されます。これらの対応していない制約は、 `advanced` と `min` または `exact` という名前のメンバーを持つすべての制約です。

## 使用上の注意

### プライバシーとセキュリティ

`getDisplayMedia()` は悪用される可能性があるため、プライバシーとセキュリティに関する重大な懸念の源となり得ます。そのため、この仕様では `getDisplayMedia()` を完全に対応するためにブラウザーに要求される手段を詳述しています。

- 指定された `constraints` は、ユーザーが利用できるオプションを制限するために使用することはできません。代わりに、ユーザーがソースを選択した後に、制約に一致する出力を生成するために適用する必要があります。
- `getDisplayMedia()` を使用するための go-ahead 権限は、再利用のために永続化することはできません。ユーザは毎回、許可を求めるプロンプトを表示しなければなりません。
- `getDisplayMedia()`の呼び出しは、イベントハンドラーのようなユーザーのアクションに反応して実行されるコードから行われなければなりません。
- ブラウザーは、ブラウザーを含むディスプレイやウィンドウを共有することについての警告をユーザーに提供し、他のコンテンツがキャプチャされて他のユーザーに表示される可能性があることに注意することが推奨されます。

## 例

以下の例では、 `displayMediaOptions` 引数で指定された一連のオプションを指定して画面のキャプチャを開始する `startCapture()` メソッドが作成されています。このオプションは、優先するストリーム構成と、ビデオをキャプチャする[表示面](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#visible_vs_logical_display_surfaces)を指定したオブジェクトで指定されます。

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(err) {
    console.error("Error: " + err);
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

- [画面キャプチャ API](/en-US/docs/Web/API/Screen_Capture_API)
- [画面キャプチャ API の使用](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [メディアキャプチャとストリーム API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: カメラやマイクからメディアをキャプチャ
