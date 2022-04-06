---
title: CSS.paintWorklet (静的プロパティ)
slug: Web/API/CSS/paintWorklet
tags:
  - API
  - CSS
  - CSS 描画 API
  - 実験的
  - Houdini
  - 描画
  - プロパティ
  - リファレンス
  - ワークレット
  - paintWorklet
browser-compat: api.CSS.paintWorklet
translation_of: Web/API/CSS/paintWorklet
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`paintWorklet`** は {{DOMxRef("CSS")}} インターフェイスの静的な読み取り専用プロパティで、{{DOMxRef("PaintWorklet")}} へのアクセスを提供します。 これは、CSS のプロパティが画像ファイルを期待する場所においてプログラムで画像を生成します。

## 値

{{DOMxRef('PaintWorklet')}} オブジェクトです。

## 例

次の例は、js ファイルから {{DOMxRef('PaintWorklet')}} を読み込む方法を示しており、機能検出によって読み込みます。

```js
<script>
  if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('checkerboard.js');
  }
</script>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [Houdini API](/ja/docs/Web/Houdini)
- [Houdini の概要](/ja/docs/Web/Houdini/learn)
