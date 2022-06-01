---
title: ProgressEvent.loaded
slug: Web/API/ProgressEvent/loaded
tags:
  - API
  - 進捗イベント
  - ProgressEvent
  - プロパティ
browser-compat: api.ProgressEvent.loaded
---
{{APIRef("DOM Events")}}

**`ProgressEvent.loaded`** は読み取り専用プロパティであり、整数で基礎となるプロセスの既に行われた仕事の量を表します。進捗率は、このプロパティと `ProgressEvent.total` から計算することができます。
HTTP を使用してリソースをダウンロードする場合、この値はバイト単位を示し（ビット単位ではありません）、ヘッダーやその他のオーバーヘッドを除いた内容物自体のみを表します。 

## 構文

```js
value = ProgressEvent.loaded
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("ProgressEvent")}} インターフェイス
