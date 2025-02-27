---
title: "ProgressEvent: loaded プロパティ"
short-title: loaded
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`ProgressEvent.loaded`** は読み取り専用プロパティであり、整数で基礎となるプロセスの既に行われた仕事の量を表します。進捗率は、このプロパティと `ProgressEvent.total` から計算することができます。
HTTP を使用してリソースをダウンロードする場合、この値はバイト単位を示し（ビット単位ではありません）、ヘッダーやその他のオーバーヘッドを除いた内容物自体のみを表します。

## 値

数値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("ProgressEvent")}} インターフェイス
