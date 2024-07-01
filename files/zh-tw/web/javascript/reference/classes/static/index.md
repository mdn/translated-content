---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}使用關鍵字 **static** 來定義一個靜態的方法（method）給類別（class），靜態方法在由類別所建立的物件實體（instance）上不能被呼叫，取而代之的是，靜態方法只能由類別本身呼叫。他們通常作為工具函式（utility functions）使用。像是建立物件或複製物件的函式。

## 語法

```plain
static methodName() { ... }
```

## 敘述

靜態方法不須實例化(instantiating)其類別即可被呼叫，但當類別被實例化(instantiating)後則靜態方法不能被呼叫。 靜態方法常被使用在建立應用程式的工具函式(utility functions)。

## 範例

下面的範例示範了許多東西。他示範了如何在一個可以有子類別的類別中實作一個靜態方法。最後示範了靜態方法在什麼情形下正確與錯誤的呼叫。

```js
class Triple {
  static triple(n) {
    n = n || 1; //should not be a bitwise operation
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18
console.log(BiggerTriple.triple(3)); // 81
var tp = new Triple();
console.log(tp.triple()); // 'tp.triple is not a function'.
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 你可能會需要看看

- [`class` expression](/zh-TW/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/zh-TW/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/zh-TW/docs/Web/JavaScript/Reference/Classes)
