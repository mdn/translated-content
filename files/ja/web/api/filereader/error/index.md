---
title: FileReader.error
slug: Web/API/FileReader/error
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("File API")}}

{{domxref("FileReader")}} の **`error`** プロパティは、ファイルの読み取り中に発生したエラーを返します。

## 値

{{domxref("DOMError")}} に関連するエラーが含まれています。 Chrome 48 以降/Firefox 58 以降では、 `DOMError` が DOM 標準から削除されているため、このプロパティは {{domxref("DOMException")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("FileReader")}}
