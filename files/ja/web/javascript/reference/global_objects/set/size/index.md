---
title: Set.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Set/size
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`size`** は {{jsxref("Set")}} インスタンスのアクセサープロパティで、この集合内の（固有の）要素の数を返します。

{{InteractiveExample("JavaScript Demo: Set.prototype.size")}}

```js interactive-example
const set1 = new Set();
const object1 = {};

set1.add(42);
set1.add("forty two");
set1.add("forty two");
set1.add(object1);

console.log(set1.size);
// Expected output: 3
```

## 解説

`size` の値は、`Set` オブジェクトがいくつの要素を持つかを表す整数値です。`size` に対するセットアクセサー関数は `undefined` です。よって、このプロパティは変更できません。

## 例

### size の使用

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
