---
title: Set.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Set/add
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`add()`** は {{jsxref("Set")}} インスタンスのメソッドで、指定された値がまだこの集合に存在していない場合、その値を追加します。

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
  - : この `Set` オブジェクトに追加する値。オブジェクトの比較は、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって行われます。

### 返値

この `Set` オブジェクトです。

## 例

### add() の使用

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
