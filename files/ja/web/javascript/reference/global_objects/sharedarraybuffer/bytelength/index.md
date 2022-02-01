---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
tags:
  - JavaScript
  - プロパティ
  - 共有メモリー
  - SharedArrayBuffer
  - 型付き配列
browser-compat: javascript.builtins.SharedArrayBuffer.byteLength
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
---
{{JSRef}}

**`byteLength`** アクセサープロパティは 、{{jsxref("SharedArrayBuffer")}} の長さをバイト単位で表します。

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html","shorter")}}

## 解説

`byteLength` プロパティは、 set アクセサー関数が `undefined` であるアクセサープロパティです。つまり、このプロパティは読み取り専用です。値は共有配列が生成されたときに決定され、変更できません。

## 例

### byteLength の使用

```js
var sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
