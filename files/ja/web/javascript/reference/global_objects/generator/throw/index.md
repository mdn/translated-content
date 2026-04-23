---
title: Generator.prototype.throw()
short-title: throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`throw()`** は {{jsxref("Generator")}} インスタンスのメソッドで、ジェネレーターの本体内で、現在の停止位置に `throw` 文が挿入されたかのように振る舞い、ジェネレーターがエラー状態にあることを知らせ、エラーを処理したり、クリーンアップ処理を行って自分自身を閉じたりすることができるようにします。

## 構文

<!-- 通常、メソッドには "generatorInstance" という主題を追加しません。ただし、ここでは "throw" がキーワードであるため、これがないと構文が不正になるので必要です。 -->

```js-nolint
generatorInstance.throw(exception)
```

### 引数

- `exception`
  - : 発生させる例外。デバッグ時には `instanceof` {{jsxref("Error")}} を行うと便利です。

### 返値

2 つのプロパティを持つ {{jsxref("Global_Objects/Object", "Object")}} です。

- `done`
  - : 論理値です。
    - このジェネレーター関数の制御フローが末尾に達している場合、`true` になります。
    - このジェネレーター関数がさらに値を生成できる場合、`false` になります。
- `value`
  - : 次の `yield` 式から得られる値です。

### 例外

- {{jsxref("TypeError")}}
  - : ジェネレーターが既に実行中である場合に発生します。

`exception` がジェネレーター関数内の `try...catch` で捕捉されなかった場合、`throw()` の呼び出し側にも例外が送出されます。

## 解説

`throw()` メソッドが呼び出されると、ジェネレーターの本体内で現在中断されている位置に `throw exception;` 文が挿入されたかのように見なされます。ここで `exception` は `throw()` メソッドに渡された例外です。したがって、通常のフローでは、`throw(exception)` を呼び出すとジェネレーターが例外を発生します。ただし、`yield` 式が `try...catch` ブロックで囲まれている場合、エラーが補足され、エラー処理後に制御フローを再開するか、正常に終了させることが可能です。

## 例

### throw() の使用

次の例では、簡単なジェネレーターと、 `throw` メソッドを用いて発生させるエラーを示します。エラーは通常 {{jsxref("Statements/try...catch", "try...catch")}} ブロックによって受け取られます。

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

{{Compat}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
