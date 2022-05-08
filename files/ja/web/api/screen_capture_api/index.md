---
title: 画面キャプチャ API
slug: Web/API/Screen_Capture_API
tags:
  - API
  - MediaDevices
  - MediaStream
  - 概要
  - リファレンス
  - 画面キャプチャ
  - 画面キャプチャ API
  - 画面共有
  - getDisplayMedia
translation_of: Web/API/Screen_Capture_API
---
{{DefaultAPISidebar("Screen Capture API")}}

画面キャプチャ API (Screen Capture API) は、既存のメディアキャプチャおよびストリーム API に追加して、ユーザーが画面または画面の一部（ウィンドウなど）を選択してメディアストリームとしてキャプチャできるようにしたものです。このストリームは、ネットワーク上で録画したり、他の人と共有したりすることができます。

## 画面キャプチャ API の概念と使用方法

画面キャプチャ API は比較的簡単に使用することができます。唯一のメソッドは {{domxref("MediaDevices.getDisplayMedia()")}} で、その仕事はユーザーにキャプチャする画面または画面の一部を選択するよう促し、 {{domxref("MediaStream")}} 形式でキャプチャすることです。

画面から動画をキャプチャするには、 `getDisplayMedia()` を `Media` `navigator.mediaDevices` のインスタンス上で呼び出してください。

```js
captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

{{jsxref("Promise")}} が `getDisplayMedia()` から返され、これはキャプチャされたメディアをストリーミングする {{domxref("MediaStream")}} で解決します。

画面キャプチャ API を使用する方法については、[画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)の記事を参照してください。

## 既存インターフェイスへの追加

画面キャプチャ API は独自のインターフェイスを持たず、既存の {{domxref("MediaDevices")}} インターフェイスに 1 つのメソッドを追加しています。

### MediaDevices インターフェイス

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : `getDisplayMedia()` メソッドが `MediaDevices` インターフェイスに追加されています。 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} と同様、このメソッドは、ユーザーが選択した表示領域を、指定されたオプションに一致する形式で含む {{domxref("MediaStream")}} で解決するプロミスを作成します。

## 既存の辞書への追加

画面キャプチャ API は、他の仕様書で定義された以下の辞書にプロパティを追加します。

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.cursor")}}
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、カーソルをキャプチャした表示面のストリームに含めるかどうか、また、常に表示するか、マウスが動いている間だけ表示するかを指定します。
- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : [`ConstrainDOMString`](/ja/docs/Web/API/MediaTrackConstraints#constraindomstring) で、キャプチャする表示面の種類を指定します。値は `application`、`browser`、`monitor`、`window` のいずれかです。
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : ストリームの映像が、論理的な表示面（つまり、画面上に完全に表示されていない、あるいは完全に画面外にある可能性のあるもの）を表しているかどうかを示します。値が `true` の場合、論理的な表示面をキャプチャすることを示します。

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : 文字列で、現在キャプチャしている表示面にマウスカーソルが含まれているかどうか、含まれている場合はマウスが動いている間だけ見えるのか、常に見えているのかを示します。値は `always`、`motion`、`never` のいずれかです。
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : 文字列で、現在キャプチャしている表示面の種類を示します。値は `application`、`browser`、`monitor`、`window` のいずれかです。
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : 論理値で、キャプチャした映像が、画面上の単一の表示領域に直接対応していない場合に `true` となります。

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.cursor")}}
  - : 論理値で、 `true` であればユーザーエージェントと機器が {{domxref("MediaTrackConstraints.cursor")}} 制約に対応していることを示します。
- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : 論理値で、 `true` であれば現在の環境が {{domxref("MediaTrackConstraints.displaySurface")}} 制約に対応していることを示します。
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : 論理値で、 `true` であれば現在の環境が {{domxref("MediaTrackConstraints.logicalSurface")}} 制約に対応していることを示します。

## 辞書

以下の辞書が画面キャプチャ API で定義されています。

- `CursorCaptureConstraint`
  - : 列挙文字列型で、設定と制約の `cursor` プロパティの値を提供するために使用されます。指定できる値は `always`、`motion`、`never` です。
- `DisplayCaptureSurfaceType`
  - : 列挙文字列型で、キャプチャするディスプレイ表面の種類を識別するために使用されます。。この型は、制約と設定オブジェクトの `displaySurface` プロパティに使用され、`application`, `browser`, `monitor`, `window` という値を持つことが可能です。

## 機能ポリシーの検証

 {{Glossary("User agent", "ユーザーエージェント")}}のうち（HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーまたは {{HTMLElement("iframe")}} 属性を使用する）機能ポリシーをに対応するものは、ポリシー制御ディレクティブ `display-capture` によってが画面キャプチャ API 使用の希望を指定することができます。

```html
<iframe allow="display-capture" src="/some-other-document.html">
```

既定の許可リストは `self` で、文書内の任意のコンテンツに画面キャプチャを使用させることができます。

機能ポリシーをどのように使うかについてのより深い解説については、[機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)を参照してください。

## 仕様書

| 仕様書                                                      |
| ------------------------------------------------------------------ |
| [Screen Capture](https://w3c.github.io/mediacapture-screen-share/) |

## ブラウザーの互換性

{{Compat("api.MediaDevices.getDisplayMedia")}}

## 関連情報

- [画面キャプチャ API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}
