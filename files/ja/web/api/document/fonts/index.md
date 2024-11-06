---
title: "Document: fonts プロパティ"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: e20c5a4ac8437e6a4f66fb1b9992ce47510ba803
---

{{APIRef("DOM")}}

**`fonts`** は {{domxref("Document")}} インターフェイスのプロパティで、文書の {{domxref("FontFaceSet")}} インターフェイスを返します。

この機能は [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) の一部です。

## 値

返値は文書の {{domxref("FontFaceSet")}} インターフェイスです。
`FontFaceSet` インターフェイスは新しいフォントを読み込んだり、以前読み込まれたフォントの状態をチェックしたりするのに有用です。

## 例

### すべてのフォントが読み込まれた後の操作の実行

```js
document.fonts.ready.then((fontFaceSet) => {
  // 使用するフォントをすべて読み込んだ後にのみ行う必要のある処理は、
  // ここで行います。
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // サイトで使用していないフォントがアンロードされることがあります。
  console.log(fontFaces.map((f) => f.status));
});
```

このプロミスは、使用するすべてのフォントの読み込みとレイアウト処理が完了したときに履行されます。使用するフォントの集合は、宣言されたフォントの集合とは異なっても構いません。例えば、オプションのフォント（すなわち `font-display: optional` で宣言されたフォント）が時間内に読み込めなかった場合などです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FontFaceSet")}} インターフェイス
- {{domxref("FontFace")}}
