---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
browser-compat: javascript.builtins.Promise.all
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/all
---
{{JSRef}}

**`Promise.all()`** メソッドは入力としてプロミスの集合の反復可能オブジェクトを取り、入力したプロミスの集合の結果の配列に解決される単一の {{jsxref("Promise")}} を返します。この返却されたプロミスは、入力したプロミスがすべて解決されるか、入力した反復可能オブジェクトにプロミスが含まれていない場合に解決されます。入力したプロミスのいずれかが拒否されるか、プロミス以外のものがエラーを発生させると直ちに拒否され、最初に拒否されたメッセージまたはエラーをもって拒否されます。

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## 構文

```js
Promise.all(iterable);
```

### 引数

- `iterable`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)オブジェクト、例えば {{jsxref("Array")}} など。

### 返値

- 渡された*反復可能*オブジェクトが空であった場合は、**解決済み**の {{jsxref("Promise")}} です。
- 渡された*反復可能*オブジェクトにプロミスがなかった場合、**非同期に解決した** {{jsxref("Promise")}} です。ただし、 Google Chrome 58 ではこの場合。**解決済み**のプロミスを返します。
- その他の場合は**待機状態**の {{jsxref("Promise")}} 。この返却されるプロミスはそれから、*反復可能*オブジェクトで与えられたすべてのプロミスが解決したとき、**非同期に** (スタックが空になるとすぐに) 解決/拒否されます。下記の「Promise.all の非同期性・同期性」の例を見てください。返値は、実行完了順とは関係なく、 Promise が渡された順に並びます。

## 解説

このメソッドは複数のプロミスの結果を集約するのに便利です。このメソッドは、コード全体が正常に動作するために依存している複数の関連する非同期タスクがあり、コードの実行を続ける前にそれらすべてを履行させたい場合によく使われます。

`Promise.all()` は、入力されたプロミスの**いずれか**が拒否されると直ちに拒否されます。それに対して、{{jsxref("Promise.allSettled()")}} が返すプロミスは、入力されたプロミスが拒否されたかどうかに関わらず、すべての入力されたプロミスが完了するのを待ちます。その結果、入力された反復可能オブジェクトのすべてのプロミスと関数の最終結果を常に返します。

> **Note:** プロミスの配列の順序は、このメソッドが完了された時点で保持されます。

### 履行の場合

返されたプロミスは、引数として渡された*反復可能*オブジェクトに含まれる**すべて**の解決済みの値 (プロミス以外の値を含む) を含む配列で履行されます。

- 空の*反復可能*オブジェクトが渡された場合は、このメソッドが返すプロミスは同期的に履行されます。解決される値は空の配列です。
- 空ではない*反復可能*オブジェクトが渡され、**すべて**のプロミスが履行されるか、またはプロミスではなかった場合、このメソッドが返すプロミスは非同期に履行されます。

### 拒否の場合

渡されたプロミスのいずれかが拒否された場合、`Promise.all` は、他のプロミスが解決したかどうかに関わらず、拒否されたプロミスの値で非同期的に拒否されます。

## 例

### `Promise.all` の使用

`Promise.all` はすべての履行 (または最初の拒否) を待ちます。

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

*反復可能*オブジェクトにプロミスではない値が含まれる場合は無視されますが、 (プロミスが履行された場合) 返されるプロミスの配列の値にはカウントされます。

```js
// これは、渡された反復可能オブジェクトが空であるかのようにカウントされるので、履行される
var p = Promise.all([1,2,3]);
// これは、渡された反復可能オブジェクトに、 "444" の値で解決されたプロミスだけが含まれているようにカウントされるので、履行される
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// これは、渡された反復可能オブジェクトに、 "555" の値で拒否されたプロミスだけが含まれているようにカウントされるので、拒否される
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// setTimeout を使うことで、スタックが空になってからコードを実行することができる
setTimeout(function() {
    console.log(p);
    console.log(p2);
    console.log(p3);
});

// ログ
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### `Promise.all` の非同期性・同期性

以下の例では `Promise.all` の非同期性 (または渡された*反復可能*オブジェクトが空の場合、同期性) を実演します。

```js
// Promise.all をできるだけ早く起動するために、すでに解決されたプロミスの
// 配列を引数として渡している
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
//  p の値を直接ログ出力
console.log(p);

// setTimeout を使用してスタックが空になった後にコードを実行することができる
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

`Promise.all` が拒否されたときも同じことが起きます.。

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p);
});

// logs
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

しかし、`Promise.all` は渡された*反復可能*オブジェクトが空の**場合だけ**同期的に解決します。

```js
var p = Promise.all([]); // 直ちに解決される
var p2 = Promise.all([1337, "hi"]); // プロミスではない値は無視されるが、評価は非同期に行われる
console.log(p);
console.log(p2)
setTimeout(function() {
    console.log('the stack is now empty');
    console.log(p2);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### `Promise.all`のフェイルファストの挙動

`Promise.all` は要素のひとつでも拒否されると拒否します。例えば、タイムアウト後に 4 つのプロミスが解決しても、 1 つのプロミスが直ちに拒否された場合、 `Promise.all` は直ちに拒否されます。

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error('reject'));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
.then(values => {
  console.log(values);
})
.catch(error => {
  console.error(error.message)
});

//From console:
//"reject"
```

この動作は失敗する可能性を制御することで変更することができます。

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1_delayed_resolution'), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error('p2_immediate_rejection'));
});

Promise.all([
  p1.catch(error => { return error }),
  p2.catch(error => { return error }),
]).then(values => {
  console.log(values[0]) // "p1_delayed_resolution"
  console.error(values[1]) // "Error: p2_immediate_rejection"
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
