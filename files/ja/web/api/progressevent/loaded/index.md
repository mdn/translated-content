---
title: "ProgressEvent: loaded プロパティ"
slug: Web/API/ProgressEvent/loaded
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("XMLHttpRequest")}}

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
