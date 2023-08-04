---
title: Screen
slug: Web/API/Screen
---

{{APIRef("CSSOM")}}

`Screen` インターフェイスは画面を表し、通常は、現在のウィンドウが描画されている画面であり、 {{DOMxRef("window.screen")}} を使用して取得されます。

なお、ブラウザーはブラウザーのウィンドウの中心がどの画面にあるかを検出することで、報告する現在の画面がどれかを判断します。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("EventTarget")}} から継承したプロパティもあります_。

- {{DOMxRef("Screen.availTop")}} {{Non-standard_Inline}}
  - : 永続的または半永続的なユーザーインターフェイス機能に割り当てられていない最初のピクセルの y 座標を指定します。
- {{DOMxRef("Screen.availLeft")}} {{Non-standard_Inline}}
  - : スクリーンの左端からの、最初の利用可能なピクセルの値を返します。
- {{DOMxRef("Screen.availHeight")}}
  - : Windows のタスクバーなど、オペレーティングシステムが表示する永続的または半永続的なユーザーインターフェイス機能を除いた画面の高さをピクセル単位で指定します。
- {{DOMxRef("Screen.availWidth")}}
  - : ウィンドウで利用可能な水平方向の空間の合計をピクセルで返します。
- {{DOMxRef("Screen.colorDepth")}}
  - : 画面の色深度を返します。
- {{DOMxRef("Screen.height")}}
  - : 画面の高さをピクセルで返します。
- {{DOMxRef("Screen.left")}} {{Non-standard_Inline}}
  - : メイン画面の左端から現在の画面の左端までの距離をピクセルで返します。
- {{DOMxRef("Screen.orientation")}}
  - : 現在の画面の向きを返します。
- {{DOMxRef("Screen.pixelDepth")}}
  - : 画面のピット深度を取得します。
- {{DOMxRef("Screen.top")}} {{Non-standard_Inline}}
  - : 現在の画面の上端からの距離をピクセル単位で返します。
- {{DOMxRef("Screen.width")}}
  - : 画面の幅を返します。
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 論理値です。 `false` に設定すると、端末の画面がオフになります。
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 端末の画面の明るさをコントロールします。0 から 1.0 までの倍精度実数値で指定します。

## メソッド

_親である {{domxref("EventTarget")}} から継承したメソッドもあります_。

- {{DOMxRef("Screen.lockOrientation")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 画面の向きをロックします (全画面かインストールしたアプリでのみ動作します)
- {{DOMxRef("Screen.unlockOrientation")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 画面の向きのロックを解除します。 (全画面時かインストールしたアプリでのみ動作します)

## イベント

- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} {{Deprecated_Inline}}
  - : 画面の向きが変化したときに発生します。

## 例

```js
if (screen.pixelDepth < 8) {
  // 色数の少ないバージョンのページを使う
} else {
  // 通常の色数のページを使う
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
