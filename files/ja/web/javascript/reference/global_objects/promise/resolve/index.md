---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
  - リファレンス
browser-compat: javascript.builtins.Promise.resolve
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/resolve
---
{{JSRef}}

**`Promise.resolve()`** メソッドは、与えられた値で解決した {{jsxref("Promise")}} オブジェクトを返します。その値がプロミスであった場合は、そのプロミスが返されます。その値が thenable (すなわち {{jsxref("Promise.then", "\"then\" メソッド")}} を持っている場合) であれば、返されるプロミスは thenable を「追跡」し、その最終的な状態を採用します。それ以外の場合は、引数で満足したプロミスが返されます。この関数は複数階層のプロミス風オブジェクト (例えば、何かで解決するプロミスで解決するプロミス) を単一の階層に平坦化します。

## 構文

```js
Promise.resolve(value);
```

### 引数

- `value`
  - : この `Promise` で解決する際の引数。解決するための `Promise` または thenable にすることもできます。

### 返値

与えられた値で解決された {{jsxref("Promise")}}、または value がプロミスオブジェクトであった場合、値として渡されたプロミスです。

## 解説

静的な `Promise.resolve` 関数は、解決する `Promise` を返します。

## 例

### 静的な Promise.resolve メソッドの使用

```js
Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // 呼び出されない
});
```

### 配列で解決

```js
var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
```

### 別の Promise で解決

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});
console.log('original === cast ? ' + (original === cast));

// ログ（順番通り）:
// original === cast ? true
// value: 33
```

ログの順番が反転するのは、 `then` ハンドラーが非同期に呼び出されるために発生します。 `then` がどのように動作するのかは[こちら](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value)を参照してください。

### thenables で解決してエラーを発生させる

```js
// thenable オブジェクトを解決
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill('fulfilled!'); }
});
console.log(p1 instanceof Promise) // true、オブジェクトが Promise にキャストされた

p1.then(function(v) {
    console.log(v); // "fulfilled!"
  }, function(e) {
    // 呼び出されない
});

// Thenable throws before callback
// Promise rejects
var thenable = { then: function(resolve) {
  throw new TypeError('Throwing');
  resolve('Resolving');
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // 呼び出されない
}, function(e) {
  console.error(e); // TypeError: Throwing
});

// Thenable throws after callback
// Promise resolves
var thenable = { then: function(resolve) {
  resolve('Resolving');
  throw new TypeError('Throwing');
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // "Resolving"
}, function(e) {
  // 呼び出されない
});
```

> **Warning:** 自分自身に解決する thenable に対して `Promise.resolve()` を呼び出さないでください。これは無限にネストしたプロミスを平坦化しようとするため、無限の再帰を引き起こします。

```js example-bad
let thenable = {
  then: (resolve, reject) => {
    resolve(thenable)
  }
}

Promise.resolve(thenable)  // 無限の再帰を引き起こす
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
