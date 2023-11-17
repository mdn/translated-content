---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
---

{{JSRef}}

对*正则表达式*匹配*字符串*时，**`[@@match]()`**方法用于获取匹配结果。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## 语法

```plain
regexp[Symbol.match](str)
```

### 参数

- `str`
  - : match 的目标参数是{{jsxref("String")}}

### 返回值

match 方法会返回一个数组，它包括整个匹配结果，和通过捕获组匹配到的结果，如果没有匹配到则返回 null

## 描述

这个方法在 {{jsxref("String.prototype.match()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

这个方法为自定义 `RegExp` 子类中的匹配行为而存在。

## 示例

### 直接调用

这个方法的使用方式和 {{jsxref("String.prototype.match()")}} 相同，不同之处是 `this` 和参数顺序。

```js
var re = /[0-9]+/g;
var str = "2016-01-02";
var result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### 在子类中使用`@@match`

{{jsxref("RegExp")}} 的子类可以覆写 `[@@match]()`方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    var result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

var re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
var str = "2016-01-02";
var result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
