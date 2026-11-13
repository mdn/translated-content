---
title: SharedArrayBuffer.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

**`byteLength`** アクセサープロパティは、{{jsxref("SharedArrayBuffer")}} の長さをバイト単位で表します。

## 解説

`byteLength` プロパティは、 set アクセサー関数が `undefined` であるアクセサープロパティです。つまり、このプロパティは読み取り専用です。値は共有配列が生成されたときに決定され、変更できません。

## 例

これらの例は、コンソールや任意のウェブページから直接実行することはできません。`SharedArrayBuffer` は、その[セキュリティ要件](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#セキュリティ要件)が満たされない限り定義されないからです。

### byteLength の使用

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("SharedArrayBuffer")}}
