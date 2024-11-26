---
title: "Navigator: pdfViewerEnabled プロパティ"
short-title: pdfViewerEnabled
slug: Web/API/Navigator/pdfViewerEnabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}

**`pdfViewerEnabled`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、ブラウザーが PDF ファイルへの移動時にインライン表示に対応しているかどうかを示します。

インライン表示に対応していない場合は、PDF がダウンロードされ、外部アプリケーションで処理される場合があります。

> [!NOTE]
> このメソッドは、PDFファイルのインライン表示に対応していることを推測する、古いメソッドのいくつかを置き換えます。

## 値

`true` は、ブラウザーが PDF ファイルをインラインで表示できる場合（内部ビューアーまたは PDF ビューアー拡張機能を使用して）を示します。そうでない場合は `false` です。

## 例

PDF のインライン表示対応を調べるには、次のようにします。

```js
if (!navigator.pdfViewerEnabled) {
  // このブラウザーは PDF ファイルのインライン表示に対応していません。
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
