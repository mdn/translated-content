---
title: ArrayBuffer.prototype.resizable
short-title: resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`resizable`** は {{jsxref("ArrayBuffer")}} インスタンスのアクセサープロパティで、この配列バッファーがサイズ変更かどうかを表します。

{{InteractiveExample("JavaScript デモ: ArrayBuffer.prototype.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// 予想される結果: true

console.log(buffer2.resizable);
// 予想される結果: false
```

## 解説

`resizable` プロパティはアクセサープロパティであり、設定アクセサー関数が `undefined` であるためこのプロパティは読み取ることしかできません。この値は、この配列が構築されるときに確定されます。コンストラクターで `maxByteLength` オプションが設定されていれば `resizable` は `true` を返し、そうでなければ `false` を返します。

## 例

### resizable の使用

この例では、最大 16 バイトの長さにサイズ変更可能な 8 バイトのバッファーを作成し、`resizable` プロパティを調べて、`resizable` が true を返す場合にサイズ変更します。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
