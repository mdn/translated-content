---
title: "DelegatedInkTrailPresenter: presentationArea プロパティ"
short-title: presentationArea
slug: Web/API/DelegatedInkTrailPresenter/presentationArea
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

**`presentationArea`** は {{domxref("DelegatedInkTrailPresenter")}} インターフェイスのプロパティで、インクストロークの描画の範囲となる {{domxref("Element")}} を返します。

先行する {{domxref("Ink.requestPresenter", "Ink.requestPresenter()")}} メソッド呼び出しで、特定の `presentationArea` 要素の定義が記載されていた場合、その要素が返されます。それ以外の場合、既定の値、つまり、その要素を含むビューポートが返されます。

この領域は常に要素の境界線のクライアント座標であるため、要素を移動したり、要素をスクロールしたりしても、開発者は再計算を行う必要はありません。

### 値

{{domxref("Element")}} です。

## 例

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.presentationArea);

  // …
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
