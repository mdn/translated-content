---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

**`growable`** は {{jsxref("SharedArrayBuffer")}} インスタンスのアクセサープロパティで、この `SharedArrayBuffer` が伸長可能かどうかを返します。

## 解説

`growable` プロパティはアクセサープロパティであり、その set アクセサー関数は `undefined` です。つまり、このプロパティは読み取り専用ということです。値は配列が構築されたときに設定されます。コンストラクターで `maxByteLength` オプションが設定されている場合、`growable` は `true` を返します。設定されていない場合は、`false` を返します。

## 例

### growable の使用

この例では、 8 バイトのバッファーを作成し、最大 16 バイトまで伸長できるようにします。次に、その `growable` プロパティをチェックし、 `growable` が `true` を返した場合に伸長します。

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
