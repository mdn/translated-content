---
title: Screen
slug: Web/API/Screen
l10n:
  sourceCommit: b4739fbae6832960058f513073b23b77244ddeef
---

{{APIRef("CSSOM")}}

`Screen` インターフェイスは画面を表し、通常は、現在のウィンドウが描画されている画面であり、 {{DOMxRef("window.screen")}} を使用して取得されます。

なお、ブラウザーはブラウザーのウィンドウの中心がどの画面にあるかを検出することで、報告する現在の画面がどれかを判断します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("EventTarget")}} から継承したプロパティもあります_。

- {{DOMxRef("Screen.availHeight")}}
  - : Windows のタスクバーなど、オペレーティングシステムが表示する永続的または半永続的なユーザーインターフェイス機能を除いた画面の高さをピクセル単位で指定します。
- {{DOMxRef("Screen.availWidth")}}
  - : ウィンドウで利用可能な水平方向の空間の合計をピクセルで返します。
- {{DOMxRef("Screen.colorDepth")}}
  - : 画面の色深度を返します。
- {{DOMxRef("Screen.height")}}
  - : 画面の高さをピクセルで返します。
- {{domxref("Screen.isExtended")}} {{experimental_inline}} {{securecontext_inline}}
  - : ユーザーの端末に複数の画面が存在する場合、`true` を返し、存在しない場合は `false` を返します。
- {{DOMxRef("Screen.orientation")}}
  - : この画面に関連付けられた {{DOMxRef("ScreenOrientation")}} インスタンスを返します。
- {{DOMxRef("Screen.pixelDepth")}}
  - : 画面のピット深度を取得します。
- {{DOMxRef("Screen.width")}}
  - : 画面の幅を返します。
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 論理値です。 `false` に設定すると、端末の画面がオフになります。
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 端末の画面の明るさをコントロールします。0 から 1.0 までの倍精度実数値で指定します。

## 標準外のプロパティ

以下のプロパティは、[ウィンドウ管理 API](/ja/docs/Web/API/Window_Management_API) の一部として指定されており、 {{domxref("ScreenDetailed")}} インターフェイスで利用可能です。ここでは、これらのプロパティを文書化しています。ただし、この API に対応していないブラウザーでは、 `Screen` インターフェイスで標準外のバージョンが利用可能です。標準外のサポートの詳細については、このページの[ブラウザーの互換性](#ブラウザーの互換性)の表をご覧ください。

- {{domxref("ScreenDetailed.availLeft", "Screen.availLeft")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : 利用可能な画面領域の X 座標（左端）を表す数値です。
- {{domxref("ScreenDetailed.availTop", "Screen.availTop")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : 利用可能な画面領域の Y 座標（上端）を表す数値です。
- {{domxref("ScreenDetailed.left", "Screen.left")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{SecureContext_Inline}}
  - : 画面全体の X 座標（左端）を表す数値です。
- {{domxref("ScreenDetailed.top", "Screen.top")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{deprecated_inline}} {{SecureContext_Inline}}
  - : 画面全体の Y 座標（上端）を表す数値です。

## インスタンスメソッド

_親である {{domxref("EventTarget")}} から継承したメソッドもあります_。

- {{DOMxRef("Screen.lockOrientation")}} {{Deprecated_Inline}}
  - : 画面の向きをロックします（全画面時かインストールしたアプリでのみ動作します）
- {{DOMxRef("Screen.unlockOrientation")}} {{Deprecated_Inline}}
  - : 画面の向きのロックを解除します。（全画面時かインストールしたアプリでのみ動作します）

## イベント

- {{domxref("Screen.change_event", "change")}} {{experimental_inline}} {{securecontext_inline}}
  - : 幅、高さ、利用可能な幅または高さ、色深度、方向など、何らかの変化があった場合に、特定の画面で発行されます。W
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 画面の向きが変化したときに発生します。

## 例

```js
if (screen.colorDepth < 8) {
  // 色数の少ないバージョンのページを使う
} else {
  // 通常の色数のページを使う
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
