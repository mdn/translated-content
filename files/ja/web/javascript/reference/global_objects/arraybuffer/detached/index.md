---
title: ArrayBuffer.prototype.detached
short-title: detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`detached`** は {{jsxref("ArrayBuffer")}} インスタンスのアクセサープロパティで、このバッファーが分離（移譲）されたかどうかを示す論理値を返します。

## 解説

`detached` プロパティはアクセサープロパティであり、その設定アクセサー関数は `undefined` です。つまり、このプロパティは読み取り専用です。`ArrayBuffer` が最初に作成された時点では値は `false` です。`ArrayBuffer` が[移譲](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#arraybuffer_の移譲)されると値は `true` になり、これによりインスタンスが基盤となるメモリーから切り離されます。バッファーが切り離されると、それ以降は使用できなくなります。

## 例

### detached の使用

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ArrayBuffer.prototype.detached` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims による `ArrayBuffer.prototype.detached` のポリフィル](https://www.npmjs.com/package/arraybuffer.prototype.detached)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
