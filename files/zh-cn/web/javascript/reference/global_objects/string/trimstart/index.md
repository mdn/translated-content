---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
original_slug: Web/JavaScript/Reference/Global_Objects/String/TrimLeft
---

{{JSRef}}**`trimStart()` **方法从字符串的开头删除空格。`trimLeft()` 是此方法的别名。{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 语法

```plain
str.trimStart();
str.trimLeft();
```

### 返回值

一个新字符串，表示从其开头（左端）除去空格的调用字符串。

## 描述

`trimStart()` / `trimLeft()` 方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

### 别名

为了与 {{jsxref("String.prototype.padStart")}} 等函数保持一致，标准方法名称为`trimStart`。但是，出于 Web 兼容性原因，`trimLeft` 仍然是 `trimStart` 的别名。在某些引擎中，这意味着：

```js
String.prototype.trimLeft.name === "trimStart";
```

## 示例

### 使用 `trimStart()`

下面的例子输出了小写的字符串 `"foo "`：

```js
var str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart()    // 等同于 str = str.trimLeft();
console.log(str.length); // 5
console.log(str);        // "foo  "
```

## 规范

| 规范                                                                                                                                                        | 状态    | 备注                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------- |
| [`String.prototype.{trimStart,trimEnd}`](https://github.com/tc39/proposal-string-left-right-trim/#stringprototypetrimstart--stringprototypetrimend)proposal | Stage 4 | Expected to be part of ES2019 |

## 浏览器兼容性

{{Compat}}

## Polyfill

```js
// https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function(w){
    var String=w.String, Proto=String.prototype;

    (function(o,p){
        if(p in o?o[p]?false:true:true){
            var r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);


/*
ES6:
(w=>{
    const String=w.String, Proto=String.prototype;

    ((o,p)=>{
        if(p in o?o[p]?false:true:true){
            const r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);
*/
```

## 参见

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
