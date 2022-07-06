---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
  - プロトタイプ
browser-compat: javascript.builtins.Promise.catch
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/catch
---
{{JSRef}}

**`catch()`** メソッドは {{jsxref("Promise")}} を返しますが、拒否された場合のみ扱います。 {{jsxref("Promise.then", "Promise.prototype.then(undefined, onRejected)")}} の呼び出しと同じ動作をします（実際、 `obj.catch(onRejected)` の呼び出しは内部的に `obj.then(undefined, onRejected)` を呼び出しています）。つまり、返値を `undefined` に代替させたい場合でも、 `onRejected` 関数を提供する必要があります。 - 例えば、 `obj.catch(() => {})` のようにします。

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## 構文

```js
p.catch(onRejected);

p.catch(function(reason) {
   // 拒否
});
```

### 引数

- `onRejected`

  - : `Promise` が失敗した時に呼び出される {{jsxref("Function")}} です。この関数は一つの引数を持ちます。

    - `reason`
      - : 拒否された理由です。

    `catch()` で返される Promise は、 `onRejected` がエラーを発生させた場合、または返される Promise それ自体が拒否された場合は、拒否となります。それ以外の場合は、解決となります。

### 返値

内部的には、呼び出されたオブジェクトの `Promise.prototype.then` を呼び出し、引数に `undefined` と、受け取った `onRejected` ハンドラーを渡します。返値はこの呼び出しの値であり、すなわち {{jsxref("Promise")}} です。

> **Warning:** なお、以下の例は [Error](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) のインスタンスを投げています。これは文字列を投げる場合と比較して、良い習慣と見なされています。そうでなければ、捕捉する部分で引数が文字列かエラーかをチェックする必要があり、スタックトレースなどの価値のある情報を失う可能性があります。

**内部呼び出しの例**

```js
// overriding original Promise.prototype.then/catch just to add some logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function(){
        console.log('> > > > > > called .then on %o with arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.error('> > > > > > called .catch on %o with arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);

// calling catch on an already resolved promise
Promise.resolve().catch(function XXX(){});

// logs:
// > > > > > > called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// > > > > > > called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

## 解説

`catch` メソッドは複合したプロミスの複合のエラー処理に使用されます。これは {{jsxref("Promise")}} を返しますので、姉妹メソッドである {{jsxref("Promise.then", "then()")}} と同様の方法で[連鎖が可能](/ja/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch)です。

## 例

### catch メソッドの使用とチェーン化

```js
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw new Error('oh, no!');
}).catch(function(e) {
  console.error(e.message); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// 以下は、上記と同様に動作します
p1.then(function(value) {
  console.log(value); // "Success!"
  return Promise.reject('oh, no!');
}).catch(function(e) {
  console.error(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});
```

### エラーが発生したことを知る

```js
// エラーが発生すると、ほとんどの場合、 catch メソッドが呼び出される
var p1 = new Promise(function(resolve, reject) {
  throw new Error('Uh-oh!');
});

p1.catch(function(e) {
  console.error(e); // "Uh-oh!"
});

// 非同期関数内で発生したエラーは捕捉されないエラーとして扱われる
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Uncaught Exception!');
  }, 1000);
});

p2.catch(function(e) {
  console.error(e); // これは呼び出されない
});

// resolve が呼び出された後に発生したエラーは消える
var p3 = new Promise(function(resolve, reject) {
  resolve();
  throw new Error('Silenced Exception!');
});

p3.catch(function(e) {
   console.error(e); // これは呼び出されない
});
```

### 解決される場合

```js
// onReject を呼び出さないプロミスを作る
var p1 = Promise.resolve("calling next");

var p2 = p1.catch(function (reason) {
    // これは呼び出されない
    console.error("catch p1!");
    console.error(reason);
});

p2.then(function (value) {
    console.log("next promise's onFulfilled"); /* 次のプロミスの onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
