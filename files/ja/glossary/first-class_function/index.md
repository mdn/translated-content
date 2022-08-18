---
title: First-class Function (第一級関数)
slug: Glossary/First-class_Function
tags:
  - CodingScripting
  - Glossary
  - JavaScript
translation_of: Glossary/First-class_Function
---
プログラミング言語が**第一級関数 (First-class functions)** を持つと言われる場合、その言語の関数がその他の変数と同様に扱われることを表します。例えば、こうした言語では、関数を他の関数への引数として渡したり、他の関数から返却したり、変数の値として代入したりすることができます。

## 例 | 関数を変数へ代入する

### JavaScript

```js
const foo = function() {
   console.log("foobar");
}
// 変数を使用して呼び出し
foo();
```

ここでは**無名関数**を{{glossary("Variable", "変数")}}に代入してから、変数を使用して末尾に括弧 `()` を追加することで、その関数を呼び出しています。

> **Note:** **関数に名前があっても**、変数を使用してその関数を呼び出すことができます。名前を付けるとコードをデバッグするときに役立ちますが、_呼び出し方法に影響はありません_。

## 例 | 引数として関数を渡す

### JavaScript

```js
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// `sayHello` を `greeting` 関数の引数として渡す
greeting(sayHello, "JavaScript!");
```

ここでは `sayHello()` 関数を `greeting()` 関数の引数として渡しており、関数を**変数**として扱っていることを示しています。

> **Note:** 他の関数へ引数として渡される関数は、**{{glossary("Callback function", "コールバック関数")}}**と呼ばれます。 _`sayHello` はコールバック関数です。_

## 例 | 関数を返す

### JavaScript

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
```

この例では、関数を他の関数から返す必要があります。 - _関数を返すことができるのは、 JavaScript では関数を**値**として扱っているからです。_

<div class="note"><p><em>関数を返す関数は<strong>高階関数</strong>と呼ばれます。</em></p></div>

_例に戻ると、 `sayHello` 関数とそこから返される`無名関数`を呼び出す必要があるとします。そのためには二つの方法があります。_

### _1. 変数を使用する_

```js
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
```

_この方法では、 `Hello!` メッセージが返されます。_

<div class="note"><p><em>他の変数を使用する必要があります。直接 <code>sayHello</code> を呼び出すと、<strong>帰される関数を呼び出すことなく</strong>関数自体が返されます。</em></p></div>

### _2. 二重括弧の使用_

```js
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
```

_二重括弧 `()()` を使用して、返された関数を呼び出しています。_

1.  _Wikipedia の {{Interwiki("wikipedia", "First-class functions", "First-class functions")}}_
2.  _[MDN Web Docs 用語集](/ja/docs/Glossary)_

    - _{{glossary("Callback function", "コールバック関数")}}_
    - _{{glossary("Function", "関数")}}_
    - _{{glossary("Variable", "変数")}}_

    \_\_
