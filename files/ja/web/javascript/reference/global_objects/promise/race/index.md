---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
  - リファレンス
browser-compat: javascript.builtins.Promise.race
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
---
{{JSRef}}

**`Promise.race()`** メソッドは、反復可能オブジェクトの中のプロミスのうちの 1 つが履行されるか拒否されると、そのプロミスの値または理由で履行または拒否されるプロミスを返します。

{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}

## 構文

```js
Promise.race(iterable);
```

### 引数

- `iterable`
  - : 配列 ({{jsxref("Array")}}) などの反復可能なオブジェクト。[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能_iterable_プロトコル)を確認してください。</dd>

### 返値

**待ち状態の** {{jsxref("Promise")}} で、反復可能オブジェクトの中で最初に履行または解決されたプロミスの値を**非同期に**産出します。

## 解説

`race` 関数は、引数として渡された反復可能オブジェクトの中にある複数のプロミスの中で決定した最初のプロミスと同じ方法で決定される（同じ値を取る）プロミスを返します。

渡された反復可能オブジェクトが空の場合、返されるプロミスは永遠に待機状態のままです。

反復可能オブジェクトに 1 つ以上のプロミス以外の値やすでに決定済みのプロミスが含まれていた場合、 `Promise.race` は反復可能オブジェクトの中で見つけたこれらの値の内の最初の一つで解決します。

## 例

### Promise.race の非同期性

以下の例は、 `Promise.race` の非同期性を示しています。

```js
// Promise.rac eをできるだけ早く起動させるために、解決済みのプロミスの配列を
// 引数として渡しています。
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// 直ちに p の値を出力
console.log(p);

// setTimeout を使用すると、スタックが空になった後でコードが実行される
setTimeout(function(){
    console.log('スタックが空です');
    console.log(p);
});

// logs, in order:
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "fulfilled", <value>: 33 }
```

空の反復可能オブジェクトを渡すと、無限に解決しないプロミスが返されます。

```js
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('スタックが空です');
    console.log(foreverPendingPromise);
});

// ログ（順番に）:
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "pending" }
```

反復可能オブジェクトの中に 1 つ以上のプロミス以外の値や、すでに解決したプロミスが含まれていると、 `Promise.race` は配列の中で見つかった最初のこれらの値で解決します。

```js
var foreverPendingPromise = Promise.race([]);
var alreadyFulfilledProm = Promise.resolve(100);

var arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('スタックが空です');
    console.log(p);
    console.log(p2);
});

// ログ（順番に）
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Promise.race の使用 – setTimeout を使用した例

```js
var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('one'), 500);
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('two'), 100);
});

Promise.race([p1, p2])
.then(function(value) {
  console.log(value); // "two"
  // 両方が履行されるが、 p2 の方が早い
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('three'), 100);
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('four')), 500);
});

Promise.race([p3, p4])
.then(function(value) {
  console.log(value); // "three"
  // p3 の方が早いので、履行される
}, function(error) {
  // Not called
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('five'), 500);
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('six')), 100);
});

Promise.race([p5, p6])
.then(function(value) {
  // 呼び出されない
}, function(error) {
  console.log(error.message); // "six"
  // p6 の方が早いので、拒否される
});
```

### Promise.any との比較

`Promise.race` は最初に決定された {{jsxref("Promise")}} を取ります。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log('succeeded with value:', value);
}).catch((reason) => {
  // Only promise1 is fulfilled, but promise2 is faster
  console.log('failed with reason:', reason);
});
// 期待される出力: "failed with reason: two"
```

{{jsxref("Promise.any")}} は最初に履行された {{jsxref("Promise")}} を取ります。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.any([promise1, promise2]).then((value) => {
  // promise1 のみが履行されるが、 promise2 の方が早く決定する
  console.log('succeeded with value:', value);
}).catch((reason) => {
  console.log('failed with reason:', reason);
});
// 期待される出力: "succeeded with value: one"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
