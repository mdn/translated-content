---
title: 画面キャプチャ API
slug: Web/API/Screen_Capture_API
l10n:
  sourceCommit: 6e78306f9674a5e6329e07eca5f2791ce3138f0c
---

{{DefaultAPISidebar("Screen Capture API")}}

画面キャプチャ API (Screen Capture API) は、既存のメディアキャプチャおよびストリーム API に追加して、ユーザーが画面または画面の一部（ウィンドウなど）を選択してメディアストリームとしてキャプチャできるようにしたものです。このストリームは、ネットワーク上で録画したり、他の人と共有したりすることができます。

## 画面キャプチャ API の概念と使用方法

画面キャプチャ API は比較的簡単に使用することができます。唯一のメソッドは {{domxref("MediaDevices.getDisplayMedia()")}} で、その仕事はユーザーにキャプチャする画面または画面の一部を選択するよう促し、 {{domxref("MediaStream")}} 形式でキャプチャすることです。

画面から動画をキャプチャするには、 `getDisplayMedia()` を `navigator.mediaDevices` 上で呼び出してください。

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

{{jsxref("Promise")}} が `getDisplayMedia()` から返され、これはキャプチャされたメディアをストリーミングする {{domxref("MediaStream")}} で解決します。

画面キャプチャ API を使用する方法については、[画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)の記事を参照してください。

## インターフェイス

- {{domxref("CaptureController")}}
  - : {{domxref("MediaDevices.getDisplayMedia()")}} による開始とは別に、キャプチャセッションをさらに操作するために使用できるメソッドを提供します。`CaptureController` オブジェクトは、{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} 呼び出しに options オブジェクトの `controller` プロパティの値として渡すことで、キャプチャセッションに関連付けられます。

### MediaDevices インターフェイスへの追加

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : `getDisplayMedia()` メソッドが `MediaDevices` インターフェイスに追加されています。 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} と同様、このメソッドは、ユーザーが選択した表示領域を、指定されたオプションに一致する形式で含む {{domxref("MediaStream")}} で解決するプロミスを作成します。

## 既存の辞書への追加

画面キャプチャ API は、他の仕様書で定義された以下の辞書にプロパティを追加します。

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、キャプチャする表示面の種類を指定します。値は `application`、`browser`、`monitor`、`window` のいずれかです。
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : ストリームの映像が、論理的な表示面（つまり、画面上に完全に表示されていない、あるいは完全に画面外にある可能性のあるもの）を表しているかどうかを示します。値が `true` の場合、論理的な表示面をキャプチャすることを示します。
- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}
  - : タブがキャプチャされた際に、タブ内で再生中の音声をユーザーのローカルスピーカーから引き続き再生するか、または停止するかを制御します。値が `true` の場合、停止することを示します。

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : 文字列で、現在キャプチャしている表示面にマウスカーソルが含まれているかどうか、含まれている場合はマウスが動いている間だけ見えるのか、常に見えているのかを示します。値は `always`、`motion`、`never` のいずれかです。
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : 文字列で、現在キャプチャしている表示面の種類を示します。値は `browser`、`monitor`、`window` のいずれかです。
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : 論理値で、キャプチャした映像が、画面上の単一の表示領域に直接対応していない場合に `true` となります。
- {{domxref("MediaTrackSettings.suppressLocalAudioPlayback")}}
  - : 論理値で、キャプチャされた音声がユーザーのローカルスピーカーから再生されていない場合は `true` となります。

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : 論理値で、 `true` であれば現在の環境が {{domxref("MediaTrackConstraints.displaySurface")}} 制約に対応していることを示します。
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : 論理値で、 `true` であれば現在の環境が {{domxref("MediaTrackConstraints.logicalSurface")}} 制約に対応していることを示します。
- {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}}
  - : 論理値で、現在の環境が {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}} 制約に対応している場合は `true` となります。

## 権限ポリシーの検証

（HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーまたは {{HTMLElement("iframe")}} の `allow` 属性のいずれかを使用した）[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)に対応するユーザーエージェントは、画面キャプチャ API を使用する意思を、`display-capture` ディレクティブを使用して指定することができます。

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

既定の許可リストは `self` で、同一オリジン内のあらゆるコンテンツに画面キャプチャを使用させることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
