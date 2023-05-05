---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

**`codePointAt()`** 方法返回 一个 Unicode 编码点值的非负整数。

## 语法

```plain
str.codePointAt(pos)
```

### 参数

- `pos`
  - : 这个字符串中需要转码的元素的位置。

### 返回值

返回值是在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 {{jsxref("undefined")}} 。

## 描述

如果在指定的位置没有元素则返回 {{jsxref("undefined")}}。如果在索引处开始没有 UTF-16 代理对，将直接返回在那个索引处的编码单元。

Surrogate Pair 是 UTF-16 中用于扩展字符而使用的编码方式，是一种采用四个字节 (两个 UTF-16 编码) 来表示一个字符，称作代理对。

## 示例

### 使用 `codePointAt()`

```js
'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
```

## 替补支持（Polyfill）

给原生不支持 ECMAScript 6 的浏览器使用`codePointAt()`方法的的一个字符串扩展方法。

```js
/*! http://mths.be/codepointat v0.1.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // 严格模式，needed to support `apply`/`call` with `undefined`/`null`
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // 变成整数
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // 边界
      if (index < 0 || index >= size) {
        return undefined;
      }
      // 第一个编码单元
      var first = string.charCodeAt(index);
      var second;
      if ( // 检查是否开始 surrogate pair
        first >= 0xD800 && first <= 0xDBFF && // high surrogate
        size > index + 1 // 下一个编码单元
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) { // low surrogate
          // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
