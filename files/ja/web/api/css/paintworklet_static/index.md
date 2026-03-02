---
title: "CSS: paintWorklet 静的プロパティ"
short-title: paintWorklet
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`paintWorklet`** は {{DOMxRef("CSS")}} インターフェイスの静的な読み取り専用プロパティで、ペイント[ワークレット](/ja/docs/Web/API/Worklet)へのアクセスを提供します。これは、CSS のプロパティが画像ファイルを期待する場所においてプログラムで画像を生成します。

## 値

関連付けられた {{DOMxRef('Worklet')}} オブジェクトです。

## 例

次の例は、js ファイルからペイント[ワークレット](/ja/docs/Web/API/Worklet)を読み込む方法を示しており、機能検出によって読み込みます。

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [Houdini API](/ja/docs/Web/API/Houdini_APIs)
