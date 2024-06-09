---
title: "WorkerGlobalScope: fonts プロパティ"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("DOM")}}

**`fonts`** は {{domxref("WorkerGlobalScope")}} インターフェイスのプロパティで、このワーカーの {{domxref("FontFaceSet")}} インターフェイスを返します。

このプロパティは [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) の一部です。

## 値

返される値はこのワーカーの {{domxref("FontFaceSet")}} インターフェイスです。
`FontFaceSet` インターフェイスは、新しいフォントを読み込んだり、以前に読み込んだフォントの状態を調べたりするのに有益なものです。

## 例

### すべてのフォントを読み込んだ後に処理を実行

```js
fonts.ready.then(() => {
  // すべてのフォントの読み込みが完了してから行う必要がある処理は、
  // ここで行います。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FontFaceSet")}} インターフェイス
- {{domxref("FontFace")}}
