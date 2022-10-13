---
title: Callback function (コールバック関数)
slug: Glossary/Callback_function
---

コールバック関数は他の関数に引数として渡される関数で、外側の関数で何らかの処理やアクションを実行します。

簡単な例を以下に示します:

```js
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

上記の例はすぐに実行される {{glossary("synchronous", "同期型")}} コールバックです。

注意として、コールバックは {{glossary("asynchronous", "非同期")}} 命令が完了した後に続いてコードが実行されます — これを非同期コールバックといいます。コールバック関数の良い例は、Promise が成功か失敗した後にチェーンされる [`.then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) ブロックの中で実行されるものです。この構造は [`fetch()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch)のようなモダンな web API で良く使われています。

## 詳細情報

### 一般知識

- Wikipedia の [コールバック](https://ja.wikipedia.org/wiki/コールバック_(情報工学))
