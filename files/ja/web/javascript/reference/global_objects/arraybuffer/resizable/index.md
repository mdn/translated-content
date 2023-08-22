---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: d42c4bd039f84d228a339a4a15c8abf9e67cf608
---

{{JSRef}}{{SeeCompatTable}}

**`resizable`** は {{jsxref("ArrayBuffer")}} インスタンスのアクセサープロパティで、この `ArrayBuffer` がサイズ変更かどうかを表します。

{{EmbedInteractiveExample("pages/js/arraybuffer-resizable.html")}}

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
