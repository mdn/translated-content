---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

**`return()`** メソッドは、指定された値を返してジェネレーターを終了します。

## 構文

```
gen.return(value)
```

### 引数

- `value`
  - : 返却する値です。

### 返値

この関数に引数として与えられている値を返します。

## 例

### return() の使用

次の例では簡単なジェネレーターと `return` メソッドを示します。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

`return(value)` がすでに "完了" の状態のジェネレーターで呼び出されると、ジェネレーターは "完了" の状態のままになります。

引数が提供されなかった場合、返却されるオブジェクトの `value` プロパティは `.next()` の場合と同じになります。引数が提供された場合は、返却されるオブジェクトの `value` プロパティの値に設定されます。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Generator.return")}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
