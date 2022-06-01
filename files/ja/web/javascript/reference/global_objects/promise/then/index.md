---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript 2015
  - JavaScript
  - メソッド
  - Promise
  - プロトタイプ
browser-compat: javascript.builtins.Promise.then
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/then
---
{{JSRef}}

**`then()`** メソッドは {{jsxref("Promise")}} を返します。最大 2 つの引数として、 `Promise` が成功した場合と失敗した場合のコールバック関数を取ります。

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **Note:** 片方または両方の引数が省略されたり、関数ではないものが渡されたりした場合、 `then` にはハンドラーが不足しますが、エラーは発生しません。 `Promise` が状態 (履行 (`fulfillment`) または拒否 (`rejection`)) を受け入れるに当たって `then` が呼び出された際に、 `then` がハンドラーを持たない場合は、 `then` が呼び出された元の `Promise` の最後の状態を受け入れた、追加のハンドラーのない新しい `Promise` が生成されます。

## 構文

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // 履行
}, reason => {
  // 拒否
});
```

### 引数

- `onFulfilled` {{optional_inline}}
  - : `Promise` が成功したときに呼び出される関数 ({{jsxref("Function")}}) です。この関数は 1 つの引数、 `fulfillment value` を持ちます。これが関数ではない場合は、内部的に "Identity" 関数 (受け取った引数を返す関数) に置き換えられます。
- `onRejected` {{optional_inline}}
  - : `Promise` が拒否されたときに呼び出される関数 ({{jsxref("Function")}}) です。この関数は 1 つの引数、 `rejection reason` を持ちます。これが関数ではない場合は、内部的に "Thrower" 関数 (引数として受け取ったエラーを投げる関数) に置き換えられます。

### 返値

{{jsxref("Promise")}} が履行されるか拒否されると、それぞれのハンドラー関数 (`onFulfilled` または `onRejected`) が**非同期に**呼び出されます (現在のスレッドループにスケジュールされます)。ハンドラー関数のこの動作は特定の一連の規則に従います。もしハンドラー関数が・・・

- 値を返した場合、 `then` によって返されるプロミスは返値をその値として解決します。
- 何も返さなかった場合、 `then` によって返されるプロミスは `undefined` の値で解決します。
- エラーを投げた場合、 `then` によって返されるプロミスは、その値としてエラーを投げて拒否されます。
- すでに履行されたプロミスを返した場合、 `then` によって返されるプロミスは、そのプロミスの値をその値として返します。
- すでに拒否されたプロミスを返した場合、 `then` によって返されるプロミスは、そのプロミスの値をその値として拒否されます。
- 他の**待機**状態のプロミスオブジェクトを返した場合、 `then` によって返されたプロミスの解決/拒否は、ハンドラーによって返されたプロミスの解決/拒否結果に依存します。また、 `then` によって返されたプロミスの解決値は、ハンドラーによって返されたプロミスの解決値と同じになります。

以下は、 `then` メソッドの非同期性を示す例です。

```js
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
    console.log(thenProm);
});

// ログ（この順で）
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
```

## 解説

`then` メソッドや {{jsxref("Promise.prototype.catch()")}} メソッドはプロミスを返すので、[連鎖可能](/ja/docs/Web/JavaScript/Guide/Using_promises#chaining)です。 — これは*合成*と呼ばれる操作です。

## 例

### `then` メソッドの使用

```js
var p1 = new Promise((resolve, reject) => {
  resolve('Success!');
  // or
  // reject(new Error("Error!"));
});

p1.then(value => {
  console.log(value); // Success!
}, reason => {
  console.error(reason); // Error!
});
```

### 連鎖

`then` メソッドは `Promise` を返すので、メソッド連鎖ができます。

関数が `then` にハンドラーとして渡されると `Promise` を返します。同じ `Promise` がメソッド連鎖の次の `then` に現れます。次のスニペットは、非同期実行をシミュレートする、 `setTimeout()` 関数付きのコードです。

```js
Promise.resolve('foo')
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string); // foobarbaz
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

`then` ハンドラー内から値が返された場合は、 `Promise.resolve (<ハンドラーが呼ばれて返された値>)` が返されます。

```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works'); // 2 - A synchronous value works
});

p2.then(function(value) {
  console.log(value); // 1
});
```

`then` の引数として渡した関数が拒否されたプロミスを返した場合や、例外 (エラー) が発生した場合は、拒否されたプロミスを返します。

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .then(() => {
    console.log('Not called.');
  }, error => {
    console.error('onRejected function called: ' + error.message);
  });
```

その他の場合はすべて、解決中 (resolving) のプロミスが返されます。次の例では、連鎖上の以前のプロミスが拒否されていても、最初の `then()` は解決中のプロミスに含まれた `42` を返します。

```js
Promise.reject()
  .then(() => 99, () => 42) // onRejected returns 42 which is wrapped in a resolving Promise
  .then(solution => console.log('Resolved with ' + solution)); // Resolved with 42
```

多くの場合、 `catch` を使って失敗状態のプロミスを補足する方が、 `then` の 2 つのハンドラーを使って処理するよりも現実的です。下記の例を見てください。

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch(error => {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

Promise ベースの API を持った関数同士であれば、別の関数上に他の関数を実装することで連鎖を使うこともできます。

```js
function fetch_current_data() {
  // The fetch() API returns a Promise.  This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch('current-data.json').then(response => {
    if (response.headers.get('content-type') != 'application/json') {
      throw new TypeError();
    }
    var j = response.json();
    // maybe do something with j
    return j; // fulfillment value given to user of
              // fetch_current_data().then()
  });
}
```

`onFulfilled` がプロミスを返した場合、 `then` の返値はプロミスによって解決／拒否されます。

```js
function resolveLater(resolve, reject) {
  setTimeout(function() {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(function() {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(function(v) {
  console.log('resolved', v);  // "resolved", 10
}, function(e) {
  // not called
  console.error('rejected', e);
});

var p3 = p1.then(function() {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(function(v) {
  // not called
  console.log('resolved', v);
}, function(e) {
  console.error('rejected', e); // "rejected", 'Error'
});
```

### window\.setImmediate 形式のプロミスベースの代替処理

{{jsxref("Function.prototype.bind()")}} を使用して、 `Reflect.apply` ({{jsxref("Reflect.apply()")}}) メソッドは (キャンセルできない) {{domxref("window.setImmediate")}} 形式の関数を作成することができます。

```js
const nextTick = (() => {
  const noop = () => {}; // literally
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
    ? Promise.resolve(args).then(rfab(null, fn, null))
    : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
