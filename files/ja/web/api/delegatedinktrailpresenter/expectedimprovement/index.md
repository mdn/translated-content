---
title: "DelegatedInkTrailPresenter: expectedImprovement プロパティ"
short-title: expectedImprovement
slug: Web/API/DelegatedInkTrailPresenter/expectedImprovement
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Ink API")}}{{Deprecated_header}}{{Non-Standard_Header}}

**`expectedImprovement`** は {{domxref("DelegatedInkTrailPresenter")}} インターフェイスの読み取り専用プロパティで、このプレゼンターを使用することで期待できる遅延の改善をミリ秒単位で返します。

### 値

数値です。

## 例

```js
async function inkInit() {
  const ink = navigator.ink;
  const presenter = await ink.requestPresenter({ presentationArea: canvas });
  console.log(presenter.expectedImprovement);

  // …
}
```

## 仕様書

この機能は仕様から削除されました。

## ブラウザーの互換性

{{Compat}}
