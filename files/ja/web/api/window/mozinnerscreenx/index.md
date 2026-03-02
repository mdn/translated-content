---
title: "Window: mozInnerScreenX プロパティ"
short-title: mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_Header}}

ウィンドウのビューポートの左上隅の X 座標を、スクリーン座標で返します。

> [!NOTE]
> この座標は CSS ピクセルで報告され、ハードウェアピクセルではありません。つまり、ズームレベルによって影響を受ける可能性があります。実際の物理的な画面のピクセル数を計算するには、 `nsIDOMWindowUtils.screenPixelsPerCSSPixel` プロパティを使用する必要があります。

## 値

`window.mozInnerScreenX` プロパティは浮動小数点数で、読み取り専用です。既定値はありません。

## 仕様書

W3C の技術仕様や勧告に属しません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.mozInnerScreenY")}}
- `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
