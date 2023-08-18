---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
---

{{JSRef}}

**`[@@search]()`** 方法执行了一个在给定字符串中的一个搜索以取得匹配正则模式的项。

## 语法

```plain
regexp[Symbol.search](str)
```

### 参数

- `str`
  - : 搜索的目标 {{jsxref("String")}}。

### 返回值

- 整数
  - : 如果成功的话，`[@@search]()` 返回该正则模式的第一个匹配项的在字符串中的位置索引。否则将返回 -1。

## 描述

这个方法在 {{jsxref("String.prototype.search()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".search(/a/);

/a/[Symbol.search]("abc");
```

这个方法为自定义 `RegExp` 子类中的匹配行为而存在。

## 示例

### 直接调用

这个方法的使用方式和 {{jsxref("String.prototype.search()")}} 相同，不同之处是 `this` 和参数顺序。

```js
var re = /-/g;
var str = "2016-01-02";
var result = re[Symbol.search](str);
console.log(result); // 4
```

### 在子类中使用`@@search`

{jsxref("RegExp")}} 的子类可以覆写 `[@@search]()`方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp("a+b");
var str = "ab a+b";
var result = str.search(re); // String.prototype.search calls re[@@search].
console.log(result); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.search()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
