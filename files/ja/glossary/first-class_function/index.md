---
title: First-class Function (第一級関数)
slug: Glossary/First-class_Function
l10n:
  sourceCommit: fead53324d271aa05e93b369966a773bb328c64b
---

あるプログラミング言語が**第一級関数 (First-class functions)** を持つと言われる場合、その言語の関数がその他の変数と同様に扱われることを表します。例えば、こうした言語では、関数を他の関数への引数として渡したり、他の関数から返却したり、変数の値として代入したりすることができます。

## 例

### 関数を変数へ代入

```js
const foo = () => {
  console.log("foobar");
};
foo(); // 変数を使用して呼び出し
// foobar
```

ここでは**無名関数**を{{glossary("Variable", "変数")}}に代入してから、変数を使用して末尾に括弧 `()` を追加することで、その関数を呼び出しています。

> **メモ:** **関数に名前があっても**、変数を使用してその関数を呼び出すことができます。名前を付けるとコードをデバッグするときに役立ちますが、_呼び出し方法に影響はありません_。

### 引数として関数を渡す

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello` を `greeting` 関数の引数として渡す
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

ここでは `sayHello()` 関数を `greeting()` 関数の引数として渡しており、関数を**変数**として扱っていることを示しています。

> **メモ:** 他の関数へ引数として渡される関数は、**{{glossary("Callback function", "コールバック関数")}}** と呼ばれます。 _`sayHello` はコールバック関数です。_

### 関数を返す

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

この例では、関数を他の関数から返す必要があります。 - _関数を返すことができるのは、 JavaScript では関数を値として扱っているからです。_

> **メモ:** 関数を返す関数は**高階関数**と呼ばれます。

## 関連情報

- ウィキペディアの[第一級関数](https://ja.wikipedia.org/wiki/第一級関数)
- [MDN Web Docs 用語集](/ja/docs/Glossary)

  - {{glossary("Callback function", "コールバック関数")}}
  - {{glossary("Function", "関数")}}
  - {{glossary("Variable", "変数")}}
