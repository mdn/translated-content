---
title: 建構子
slug: Glossary/Constructor
---

建構子（**constructor**）屬於實做（instantiated）的指定 class {{glossary("object")}}。建構子概念可應用到大多數的{{glossary("OOP","物件導向")}}程式語言。基本上，{{glossary("JavaScript")}} 建構子用於在 {{glossary("class")}} 的實做（instance）聲明。

## 語法

```js
// 這是個通用的建構子 class Default
function Default() {
}

// 這是擁有幾個參數的過載建構子 class Overloaded
function Overloaded(arg1, arg2, ...,argN){
}
```

要呼叫 JavaScript 內的建構子 class ，請用 `new` 操作符給 {{glossary("variable")}} 宣告新的 {{glossary("object reference")}}。

```js
function Default() {}

// 新的 Default 物件參照被分派給局部變數 defaultReference
var defaultReference = new Default();
```

## 深入理解

### 基本知識

- 維基百科的 [構造器](https://zh.wikipedia.org/wiki/構造器)

### 技術資訊

- MDN 的 [JavaScript 物件導向介紹](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects#the_constructor)
- MDN 的 [JavaScript 的 new 操作符](/zh-TW/docs/Web/JavaScript/Reference/Operators/new)
