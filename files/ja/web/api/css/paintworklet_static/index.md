---
title: "CSS: paintWorklet 静的プロパティ"
slug: Web/API/CSS/paintWorklet_static
l10n:
  sourceCommit: f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
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
- [Houdini API](/ja/docs/Web/Guide/Houdini)
