---
title: "CanvasRenderingContext2D: miterLimit プロパティ"
short-title: miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
l10n:
  sourceCommit: bda6da832e5682d6247e1c20790e7b0aa0ec45e1
---

{{APIRef}}

**`CanvasRenderingContext2D.lineWidth`** はキャンバス 2D API のプロパティで、マイター制限の比率を設定します。

> [!NOTE]
> マイターについての詳細は、[スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)（[キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)内）を参照してください。

## 値

マイター制限の比率を座標空間単位で指定した数値。 0、負、{{jsxref("Infinity")}}、{{jsxref("NaN")}} の値は無視されます。この値は既定では `10.0` です。

## 例

### `miterLimit` プロパティの使用

詳細は、[スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)（[キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)内）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
