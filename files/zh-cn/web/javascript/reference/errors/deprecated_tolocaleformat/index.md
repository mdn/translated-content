---
title: 'Warning: Date.prototype.toLocaleFormat is deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
Warning: Date.prototype.toLocaleFormat is deprecated; consider using Intl.DateTimeFormat instead
```

## 错误类型

警告。JavaScript 引擎不会停止运行。

## 哪里出错了？

{{jsxref("Date.prototype.toLocaleFormat")}} 是非标准化的方法，已经被废弃，不应该再进行使用。该方法需要传入与 C 语言中的 strftime() 方法相似的格式化字符串。该实现将会在 [Firefox bug 818634](https://bugzil.la/818634) 中完全移除。

## 示例

### 废止使用的语法

{{jsxref("Date.prototype.toLocaleFormat")}} 方法已经废弃，以后会被移除（只在 Firefox 浏览器中有用到，没有在其他浏览器中使用）。

```js example-bad
var today = new Date();
var date = today.toLocaleFormat('%A, %e. %B %Y');

console.log(date);
// In German locale
// "Freitag, 10. März 2017"
```

### 备选标准语法之一：使用 ECMAScript Intl API

ECMA-402 (ECMAScript Intl API) 标准规定了支持不同语言的日期和时间格式化形式的对象和方法（在 Chrome 24+, Firefox 29+, IE11+, Safari10+ 中可用）。

现在如果只需要格式化一个日期对象的话，那么可以使用 {{jsxref("Date.prototype.toLocaleDateString")}} 方法。

```js example-good
var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('de-DE', options);

console.log(date);
// "Freitag, 10. März 2017"
```

或者，可以使用 {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} 对象，该对象允许你将格式化器对象缓存起来，省去很多重复性的计算工作，所以格式化操作会很快。这在需要对一系列的日期对象进行格式化的时候非常有用。

```js example-good
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date => console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
```

### 备选标准语法之二：使用 Date 对象的方法

{{jsxref("Date")}} 对象提供了一系列的方法来生成定制化的格式化字符串。

```js example-bad
(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
```

可以转换为：

```js example-good
let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"
```

## 相关内容

- {{jsxref("Date.prototype.toLocaleFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
