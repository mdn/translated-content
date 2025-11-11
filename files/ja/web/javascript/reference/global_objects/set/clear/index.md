---
title: Set.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`clear()`** は {{jsxref("Set")}} インターフェイスのメソッドで、この集合からすべての要素を取り除きます。

{{InteractiveExample("JavaScript デモ: Set.prototype.clear()")}}

```js interactive-example
const set = new Set();
set.add(1);
set.add("foo");

console.log(set.size);
// 予想される結果: 2

set.clear();

console.log(set.size);
// 予想される結果: 0
```

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### clear() メソッドの使用

```js
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
