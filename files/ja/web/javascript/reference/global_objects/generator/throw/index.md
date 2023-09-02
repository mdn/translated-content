---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
---

{{JSRef}}

**`throw()`** メソッドは、ジェネレーターの例外を、エラーを発生させることで再開し、 `done` と `value` の 2 つのプロパティを持ったオブジェクトを返します。

## 構文

```
gen.throw(exception)
```

### 引数

- `exception`
  - : 発生させる例外。デバッグ時には `instanceof` {{jsxref("Error")}} を行うと便利です。

### 返値

2 つのプロパティを持つ {{jsxref("Global_Objects/Object", "Object")}} です。

- `done` (boolean)

  - : &#x20;

    - イテレーターが反復処理の末尾を過ぎている場合、値は `true` になります。この場合、 `value` はオプションでそのイテレーターの*返値*を指定します。
    - イテレーターが反復処理の次の値を生成することができた場合、値は `false` になります。これは `done` プロパティを指定しない場合も同等です。

- `value`
  - : イテレーターが返す何らかの JavaScript の値です。 `done` が `true` の場合は省略可能です。

## 例

### throw() の使用

次の例では、簡単なジェネレーターと、 `throw`メソッドを用いて発生させるエラーを示します。エラーは通常 {{jsxref("Statements/try...catch", "try...catch")}} ブロックによって受け取られます。

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

const g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Generator.throw")}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
