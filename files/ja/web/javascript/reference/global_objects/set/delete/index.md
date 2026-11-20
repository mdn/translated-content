---
title: Set.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`delete()`** は {{jsxref("Set")}} インターフェイスのメソッドで、指定された値がこの集合にあれば、取り除きます。

{{InteractiveExample("JavaScript デモ: Set.prototype.delete()")}}

```js interactive-example
const set = new Set();
set.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// `x > 10` であるすべての点を削除
set.forEach((point) => {
  if (point.x > 10) {
    set.delete(point);
  }
});

console.log(set.size);
// 予想される結果: 1
```

## 構文

```js-nolint
setInstance.delete(value)
```

### 引数

- `value`
  - : この `Set` オブジェクトから取り除く要素の値です。オブジェクトは、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって比較されます。

### 返値

`Set` オブジェクト内の値が正常に取り除かれた場合、`true` を返します。`Set` 内にその値が見つからない場合は、`false` を返します。

## 例

### delete() の使用

```js
const mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // 削除するべき要素が見つからなければ false を返す
mySet.delete("foo"); // 正常に要素を削除出来れば true を返す

mySet.has("foo"); // 存在しない要素を確認すると false を返す
```

### Set からオブジェクトを削除する

オブジェクト同士は参照で比較されるため、元のオブジェクトへの参照を保持していない場合は、個々のプロパティをチェックして削除する必要があります。

```js
const setObj = new Set(); // 新しいセットを作成

setObj.add({ x: 10, y: 20 }); // セットにオブジェクトを追加

setObj.add({ x: 20, y: 30 }); // セットにオブジェクトを追加

// `x > 10` のポイントを削除
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.clear()")}}
- {{jsxref("Set.prototype.has()")}}
