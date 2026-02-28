---
title: Generator.prototype.return()
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`return()`** は {{jsxref("Generator")}} インスタンスのメソッドで、ジェネレーターの本体内で、現在の停止位置に `return` 文が挿入されたかのように振る舞い、これによりジェネレーターが完了します。また、[`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_ブロック) ブロックと組み合わせることで、ジェネレーターがクリーンアップ処理を実行することができるようにします。

## 構文

<!-- 通常、メソッドには "generatorInstance" という主題を追加しません。ただし、ここでは "return" がキーワードであるため、これがないと構文が不正になるので必要です。 -->

```js-nolint
generatorInstance.return()
generatorInstance.return(value)
```

### 引数

- `value` {{optional_inline}}
  - : 返却する値です。

### 返値

以下の 2 つのプロパティを持った {{jsxref("Object")}} です。

- `done`
  - : 論理値です。
    - このジェネレーター関数の制御フローが末尾に達している場合、`true` になります。
    - このジェネレーター関数の制御フローが末尾に達しておらず、さらに値を生成できる場合、`false` になります。これは、`return` が [`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_ブロック) で捕捉され、かつ `finally` ブロック内にさらに `yield` 式が存在する場合にのみ発生します。

- `value`
  - : 引数として指定された値、または `yield` 式が [`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_ブロック)で囲まれている場合、`finally` ブロックから yield/return で返された値。

### 例外

- {{jsxref("TypeError")}}
  - : ジェネレーターが既に実行中である場合に発生します。

## 解説

`return()` メソッドが呼び出されると、ジェネレーターの本体内で現在中断された位置に `return value;` 文が挿入されたかのように見なされます。ここで `value` は `return()` メソッドに渡された値です。したがって、通常のフローでは、`return(value)` を呼び出すと `{ done: true, value: value }` が返されます。ただし、`yield` 式が `try...finally` ブロックで囲まれている場合、制御フローは関数本体から抜けず、代わりに `finally` ブロックに進みます。この場合、返される値は異なる可能性があり、`finally` ブロック内にさらに `yield` 式がある場合、`done` が `false` になることもあります。

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

### return() と try...finally

`return` メソッドが呼び出された事実は、`yield` 式が `try...finally` ブロックで囲まれている場合にのみ、ジェネレーター自身で認識できます。

`return` メソッドが `try` ブロック内で一時停止されたジェネレーターに対して呼び出されると、ジェネレーター内の実行は `finally` ブロックに進みます。これは、`try...finally` 文では `finally` ブロックが常に実行されるためです。

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// 実行が try...finally の前で一時停止
g1.return("early return"); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// 実行が try...finally の中で一時停止
g2.return("early return"); // { value: 'cleanup', done: false }

// 完了値は保持される
g2.next(); // { value: 'early return', done: true }

// ジェネレーターは完了状態
g2.return("not so early return"); // { value: 'not so early return', done: true }
```

finally ブロックの返値は、`return` 呼び出しから返される結果の `value` にもなります。

```js
function* gen() {
  try {
    yield 1;
  } finally {
    return "cleanup";
  }
}

const generator = gen();
generator.next(); // { value: 1, done: false }
generator.return("early return"); // { value: 'cleanup', done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
