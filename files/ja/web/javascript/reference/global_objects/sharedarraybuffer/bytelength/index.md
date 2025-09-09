---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

**`byteLength`** アクセサープロパティは、{{jsxref("SharedArrayBuffer")}} の長さをバイト単位で表します。

{{InteractiveExample("JavaScript デモ: SharedArrayBuffer.prototype.byteLength", "shorter")}}

```js interactive-example
// バイト単位でサイズを指定して SharedArrayBuffer を作成
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// 期待される出力: 8
```

## 解説

`byteLength` プロパティは、 set アクセサー関数が `undefined` であるアクセサープロパティです。つまり、このプロパティは読み取り専用です。値は共有配列が生成されたときに決定され、変更できません。

## 例

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
