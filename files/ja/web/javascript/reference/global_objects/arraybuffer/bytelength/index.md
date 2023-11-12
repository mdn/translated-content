---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`byteLength`** アクセサープロパティは、{{jsxref("ArrayBuffer")}} の長さをバイト単位で表します。

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## 解説

`byteLength` プロパティはアクセサープロパティで、設定アクセサー関数が `undefined` であるため、このプロパティは読み取ることしかできません。値は配列が構築されるときに設定され、変更することができません。この `ArrayBuffer` が取り外された場合、このプロパティは 0 を返します。

## 例

### byteLength の使用

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
