---
title: Set.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`add()`** は {{jsxref("Set")}} インスタンスのメソッドで、この集合に同じ値を持つ要素がない場合、指定した値を持つ新しい要素をこの集合に追加します。

{{InteractiveExample("JavaScript デモ: Set.prototype.add()")}}

```js interactive-example
const set = new Set();

set.add(42);
set.add(42);
set.add(13);

for (const item of set) {
  console.log(item);
  // 予想される結果: 42
  // 予想される結果: 13
}
```

## 構文

```js-nolint
add(value)
```

### 引数

- `value`
  - : `Set` オブジェクトに追加する要素の値です。

### 返値

追加された値を持つ `Set` オブジェクトです。

## 例

### add() メソッドの使用

```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 連鎖可能

console.log(mySet);
// Set [1, 5, "some text"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
- {{jsxref("Set.prototype.has()")}}
