---
title: ProgressEvent.total
slug: Web/API/ProgressEvent/total
tags:
  - API
  - 進捗イベント
  - ProgressEvent
  - プロパティ
  - Reference
browser-compat: api.ProgressEvent.total
translation_of: Web/API/ProgressEvent/total
---
{{APIRef("DOM Events")}}

**`ProgressEvent.total`** は読み取り専用のプロパティであり、 64 ビット符号なし整数値で、処理または転送されるデータの全体の大きさを示します。 HTTP 通信の場合は、これはメッセージの本文の大きさ (`Content-Length`) であり、ヘッダーやその他のオーバーヘッドは含みません。

このイベントの {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} プロパティが `false` であった場合、この値は意味がなく、無視されます。

## 構文

```js
let value = progressEvent.total;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("ProgressEvent")}} インターフェイス
