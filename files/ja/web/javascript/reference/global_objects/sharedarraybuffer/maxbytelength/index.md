---
title: SharedArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

**`maxByteLength`** は {{jsxref("SharedArrayBuffer")}} インスタンスのアクセサープロパティで、この `SharedArrayBuffer` が伸長できる最大長（バイト単位）を返します。

## 解説

`maxByteLength` プロパティはアクセサプロパティであり、その set アクセサ－関数は `undefined` です。つまり、このプロパティは読み取り専用です。この値は、この共有配列が構築されたときに設定され、 {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} コンストラクターの `maxByteLength` オプションを介して設定され、変更することはできません。

この `SharedArrayBuffer` が `maxByteLength` 値を指定せずに構築された場合、このプロパティは、この `SharedArrayBuffer` の {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}} 値に等しい値を返します。

## 例

これらの例は、コンソールや任意のウェブページから直接実行することはできません。`SharedArrayBuffer` は、その[セキュリティ要件](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#セキュリティ要件)が満たされない限り定義されないからです。

### maxByteLength の使用

この例では、 8 バイトのバッファーを作成し、最大 16 バイトまで伸縮可能であるようにします。そして、その `maxByteLength` を返します。

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
