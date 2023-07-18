---
title: Callback function (コールバック関数)
slug: Glossary/Callback_function
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

コールバック関数とは、引数として他の関数に渡され、外側の関数の中で呼び出されて、何らかのルーチンやアクションを完了させる関数のことです。

簡単な例を以下に示します。

```js
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```

上記の例はすぐに実行される{{glossary("synchronous", "同期型")}}コールバックです。

コールバックは{{glossary("asynchronous", "非同期")}}操作が完了した後に続いてコードが実行されることがよくあります。これを非同期コールバックといいます。コールバック関数の良い例は、プロミスが履行されたり拒否されたりした後に連鎖される [`.then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) ブロックの中で実行されるものです。この構造は [`fetch()`](/ja/docs/Web/API/fetch)のような最近の Web API で良く使われています。

## 関連情報

- Wikipedia の[コールバック](<https://ja.wikipedia.org/wiki/コールバック_(情報工学)>)
