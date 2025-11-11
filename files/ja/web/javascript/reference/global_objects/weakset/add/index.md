---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
---

{{JSRef}}

**`add()`** メソッドは、新しい要素を `WeakSet` オブジェクトの最後に追加します。

{{InteractiveExample("JavaScript デモ: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);
console.log(weakset1.has(object1));
// Expected output: true

try {
  weakset1.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## 構文

```
ws.add(value);
```

### 引数

- `value`
  - : 必須。 `WeakSet` コレクションに追加する要素の値です。

### 返値

`WeakSet` オブジェクトです。

## 例

### add() の使用

```js
var ws = new WeakSet();

ws.add(window); //window オブジェクトを WeakSet へ追加

ws.has(window); // true

// WeakSet は引数としてオブジェクトのみを取ります。
ws.add(1);
// 結果は "TypeError: Invalid value used in weak set" (Chrome)
// "TypeError: 1 is not a non-null object" (Firefox)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
