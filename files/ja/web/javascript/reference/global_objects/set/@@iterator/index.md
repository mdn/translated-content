---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
tags:
  - ECMAScript 2015
  - 反復子
  - JavaScript
  - メソッド
  - プロトタイプ
  - リファレンス
  - set
browser-compat: javascript.builtins.Set.@@iterator
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
---
{{JSRef}}

**`@@iterator`** プロパティの初期値は {{jsxref("Set.prototype.values()", "values")}} プロパティの初期値と同じ関数オブジェクトです。

{{EmbedInteractiveExample("pages/js/set-prototype-@@iterator.html")}}

## 構文

```js
mySet[Symbol.iterator]
```

### 返値

`Set` **イテレーター**関数です。既定では {{jsxref("Set.prototype.values()", "values()")}} 関数です。

## 例

### \[@@iterator]\() の使用

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

### for..of とともに \[@@iterator]\() を使う

```js
const mySet = new Set();
mySet.add('0');
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
