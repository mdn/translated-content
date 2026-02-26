---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`throw`** 文は、ユーザー定義の例外を発生させます。現在の関数の実行を停止し（`throw` の後の文は実行されません）、コールスタック内の最初の [`catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックに制御を移します。呼び出し元の関数に `catch` ブロックが存在しない場合は、プログラムが終了します。

{{InteractiveExample("JavaScript デモ: throw 文")}}

```js interactive-example
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("引数が数値ではありません!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // 予想される結果: Error: 引数が数値ではありません!
}
```

## 構文

```js-nolint
throw expression;
```

- `expression`
  - : 発生させる例外の式です。

## 解説

`throw` 文は、文が使用できるすべてのコンテキストで有効です。その実行により例外が生成され、コールスタックを遡って伝播します。エラーの伝播と処理の詳細については、[制御フローとエラー処理](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)を参照してください。

`throw` キーワードの次の式は、下記のようにあらゆる種類の式を続けることができます。

```js
throw error; // （catch ブロックの中などで）前回定義された値を投げる
throw new Error("Required"); // 新しい Error オブジェクトを投げる
```

実際には、投げられる例外は常に {{jsxref("Error")}} オブジェクト、または {{jsxref("RangeError")}} のような `Error` のサブクラスのインスタンスであるべきです。これは、例外を捕捉するコードが、捕捉された値に {{jsxref("Error/message", "message")}} などの特定のプロパティが存在することを期待する可能性があるためです。例えば、Web API は通常、`Error.prototype` を継承する {{domxref("DOMException")}} インスタンスを投げます。

### 自動セミコロン挿入

構文上、`throw`キーワードと投げられる式の間に改行文字を挿入することは禁止されています。

```js-nolint example-bad
throw
new Error();
```

このコードは[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入) によって次のように変換されます。

```js-nolint
throw;
new Error();
```

これは無効なコードです。{{jsxref("Statements/return", "return")}} とは異なり、`throw` は式が続かなければなりません。

この問題を防ぐには（ASI を防ぐには）、括弧で囲むことができます。

```js-nolint
throw (
  new Error()
);
```

## 例

### ユーザー定義エラーを投げる

この例では、入力が期待される型でなかった場合に {{jsxref("TypeError")}} を発生する関数を定義する。

```js
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("数値のみを加えることができます");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}
```

### 既存のオブジェクトを投げる

この例はコールバックベースの非同期関数を呼び出し、コールバックがエラーを受け取った場合に例外を発生させます。

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

この方法で発生するエラーは呼び出し側で捕捉できず、プログラムがクラッシュします。ただし、(a) `readFile` 関数自体がエラーを捕捉する場合、または (b) 最上位のエラーを捕捉するコンテキストでプログラムが実行されている場合を除きます。{{jsxref("Promise/Promise", "Promise()")}} コンストラクターを使用することで、より自然なエラー処理が可能です。

```js
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

try {
  const data = await readFilePromise("foo.txt");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Error")}}
