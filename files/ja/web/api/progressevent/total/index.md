---
title: "ProgressEvent: total プロパティ"
short-title: total
slug: Web/API/ProgressEvent/total
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`ProgressEvent.total`** は読み取り専用のプロパティであり、 64 ビット符号なし整数値で、処理または転送されるデータの全体の大きさを示します。 HTTP 通信の場合は、これはメッセージの本文の大きさ (`Content-Length`) であり、ヘッダーやその他のオーバーヘッドは含みません。

このイベントの {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} プロパティが `false` であった場合、この値は意味がなく、無視されます。

## 値

整数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("ProgressEvent")}} インターフェイス
