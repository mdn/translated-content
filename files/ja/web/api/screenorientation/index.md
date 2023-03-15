---
title: ScreenOrientation
slug: Web/API/ScreenOrientation
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Screen Orientation API")}}

[Screen Orientation API](/ja/docs/Web/API/Screen_Orientation_API) の **`ScreenOrientation`** インターフェイスは、文書の現在の向きの情報を提供します。

**`ScreenOrientation`** オブジェクトのインスタンスは、{{domxref("screen.orientation")}} プロパティで取得できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{DOMxRef("ScreenOrientation.type")}} {{ReadOnlyInline}}
  - : 文書の現在の向きのタイプを返します。`"portrait-primary"`、`"portrait-secondary"`、`"landscape-primary"`、`"landscape-secondary"` のいずれかです。
- {{DOMxRef("ScreenOrientation.angle")}} {{ReadOnlyInline}}
  - : 文書の現在の向きの角度を返します。

### イベントハンドラー

- {{DOMxRef("ScreenOrientation.onchange")}}
  - : 画面の向きが変わるたびに呼ばれる[イベントハンドラー](/ja/docs/Web/Events/Event_handlers)です。

## インスタンスメソッド

- {{DOMxRef("ScreenOrientation.lock()")}}
  - : 含んでいる文書の向きをデフォルトの向きに固定し、{{JSxRef("Promise")}} を返します。
- {{DOMxRef("ScreenOrientation.unlock()")}}
  - : 含んでいる文書の向きのデフォルトの向きへの固定を解除します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
