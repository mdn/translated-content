---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
tags:
  - JavaScript
  - メソッド
  - プロミス
  - リファレンス
  - allSettled
  - 非同期
  - ポリフィル
browser-compat: javascript.builtins.Promise.allSettled
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---
{{JSRef}}

**`Promise.allSettled()`** メソッドは、与えられたすべてのプロミスが履行されたか拒否された後に、それぞれのプロミスの結果を記述した配列オブジェクトで解決されるプロミスを返します。

一般的には、複数の非同期タスクがあり、お互いに依存せずに正常に完了する場合や、各プロミスの結果を常に知りたい場合に使用されます。

これに対して、 {{jsxref("Promise.all()")}} で返されるプロミスは、タスクがお互いに依存している場合や、タスクのいずれかが拒否されたときにすぐに拒否したい場合にはより適切かもしれません。

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## 構文

```js
Promise.allSettled(iterable);
```

### 引数

- `iterable`
  - : {{jsxref("Array")}} などの[反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)オブジェクトで、それぞれの要素が `Promise` であるものです。

### 返値

**待ち状態**の {{jsxref("Promise")}} で、指定されたプロミスの集合に含まれるすべてのプロミスが、正常に履行されるか拒否されるかのどちらかで完了すると、**非同期に**解決されます。その際、返されたプロミスのハンドラーには、元のプロミスの集合に含まれるの各プロミスの結果を含む配列が入力として渡されます。

ただし、空の反復可能オブジェクトが引数として渡された**場合に限り**、 `Promise.allSettled()` は空の配列として**解決済みの** `Promise` オブジェクトを返します。

出力されるそれぞれのオブジェクトには、 `status` の文字列が存在します。 status が `fulfilled` (履行) であれば、 `value` が存在します。 status が `rejected` (拒否) であれば、 `reason` が存在します。 value (または reason) はそれぞれのプロミスがどの値で履行 (または拒否) されたかを反映します。

## 例

### Promise.allSettled の使用

#### {{JSxRef("Promise.then", "Promise.prototype.then()")}}

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
.then(values => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

#### {{jsxref("Operators/await", "await")}}

```js
const values = await Promise.allSettled([
  Promise.resolve(33),
  new Promise(resolve => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error('an error'))
])
console.log(values)

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Promise.allSettled` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- [Promises](/ja/docs/Archive/Add-ons/Techniques/Promises)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- [プロミスを使った行儀のよい非同期のプログラミング](/ja/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
