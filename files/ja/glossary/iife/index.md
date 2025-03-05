---
title: IIFE (即時実行関数式)
slug: Glossary/IIFE
---

{{GlossarySidebar}}

**IIFE** (Immediately Invoked Function Expression; 即時実行関数式) は定義されるとすぐに実行される {{glossary("JavaScript")}} の{{glossary("function", "関数")}}です。

IIFE という名前は [Ben Alman のブログ](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)で付けられました。

```js
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

このデザインパターンは{{glossary("Self-Executing Anonymous Function", "自己実行無名関数")}}とも呼ばれ、主に次の 2 つを含みます。

1. 最初の部分は {{jsxref("Operators/Grouping", "グループ化演算子")}} `()` に囲まれた静的スコープ付きの無名関数です。これは IIFE イディオム内で、汚いグローバルスコープと同様に変数へアクセスすることを防ぎます。
2. 2 つ目の部分は即時実行関数式の `()` で、これを通じて JavaScript エンジンは直接関数を解釈実行します。

## 使用例

### グローバル名前空間の汚染を避ける

別々のファイルからたくさんの関数やグローバル変数がアプリケーションに含まれるため、グローバル変数の数を制限することが重要です。
もし再利用する必要のない初期化コードがあるなら、1 つの関数宣言や関数式よりも IIFE を使ったほうが良いです。

```js
(() => {
  // 初期化の処理
  let firstVariable;
  let secondVariable;
})();

// firstVariable と secondVariable は関数が実行されたら破棄されます。
```

### 非同期関数の実行

[`async`](/ja/docs/Web/JavaScript/Reference/Operators/async_function) IIFE は [top-level await](/ja/docs/Web/JavaScript/Reference/Operators/await#top_level_await) が無い古いブラウザーや JavaScript のランタイムでも [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) と [`for-await`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) を使えるようにします。

```js
const getFileStream = async (url) => {
  // 実装
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### モジュールパターン

IIFE はプライベート変数やパブリック変数、メソッドを作るためにも使えます。もっと洗練されたモジュールパターンや IIFE を知りたいなら、 Addy Osmani による本 Learning JavaScript Design Patterns を読むと良いでしょう。

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // この変数はプライベートです
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; このメソッドはプライベートです
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### ES6 以前の var を使ったループ

ブロックスコープや **ES6** での **let** や **const** の導入前の古いコードで、次のような IIFE の使い方を見ることができます。
**var** では、関数のスコープとグローバルなスコープしかありませんでした。
「ボタン 0」「ボタン 1」という 2 つのボタンをクリックした時に、それぞれ「0」「1」が表示されるようにしてみます。以下のコードではうまく動きません:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `ボタン ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

クリックすると、「ボタン 0」「ボタン 1」の両方で 2 が表示されます。
これは変数 `i` がグローバルであり、最後に代入された値が 2 であるためです。

ES6 以前にこの問題を解決する時は、 IIFE パターンを使っていました:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `ボタン ${i}`;
  button.onclick = (function (copyOfI) {
    return () => {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

クリックすると、「ボタン 0」なら 0 が、「ボタン 1」なら 1 が表示されます。
上記のコードでも、変数 `i` はグローバルに定義されています。
**let** を使うともっと簡単に書けます:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `ボタン ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

クリックすると、「ボタン 0」なら 0 が、「ボタン 1」なら 1 が表示されます。

## 関連情報

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- 関連用語:

  - {{Glossary("Function", "関数")}}
  - {{Glossary("Self-Executing Anonymous Function", "自己実行無名関数")}}
