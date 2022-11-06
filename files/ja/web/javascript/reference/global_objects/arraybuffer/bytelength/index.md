---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

**`byteLength`** アクセサープロパティは、{{jsxref("ArrayBuffer")}} の長さをバイト単位で表します。

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## 解説

`byteLength` プロパティはアクセサープロパティで、 set アクセサー関数が `undefined`、つまりこのプロパティは読み取り専用です。値は配列が構築されるときに設定され、変更することができません。この `ArrayBuffer` が取り外された場合、このプロパティは 0 を返します。

## 例

### byteLength の使用

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 仕様書

| 仕様書                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
