---
title: SharedArrayBuffer.prototype.growable
short-title: growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

**`growable`** は {{jsxref("SharedArrayBuffer")}} インスタンスのアクセサープロパティで、この `SharedArrayBuffer` が伸長可能かどうかを返します。

## 解説

`growable` プロパティはアクセサープロパティであり、その set アクセサー関数は `undefined` です。つまり、このプロパティは読み取り専用ということです。値は配列が構築されたときに設定されます。コンストラクターで `maxByteLength` オプションが設定されている場合、`growable` は `true` を返します。設定されていない場合は、`false` を返します。

## 例

これらの例は、コンソールや任意のウェブページから直接実行することはできません。`SharedArrayBuffer` は、その[セキュリティ要件](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer##セキュリティ要件)が満たされない限り定義されないからです。

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
