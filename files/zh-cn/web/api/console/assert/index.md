---
title: Console.assert()
slug: Web/API/console/assert
---

{{APIRef("Console API")}}

如果断言为 false，则将一个错误消息写入控制台。如果断言是 `true`，没有任何反应。

{{AvailableInWorkers}}

`console.assert()`方法在 Node.js 中的实现和浏览器中可用的`console.assert()`方法实现是不同的。在浏览器中当`console.assert()`方法接受到一个值为假断言的时候，会向控制台输出传入的内容，但是并不会中断代码的执行，而在 Node.js v10.0.0 之前，一个值为假的断言也将会导致一个`AssertionError`被抛出，使得代码执行被打断。v10.0.0 修复了此差异，所以现在`console.assert()`在 Node 和浏览器中执行行为相同。

## 语法

```js
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // c-like message formatting
```

### 参数

- `assertion`
  - : 一个布尔表达式。如果 assertion 为假，消息将会被输出到控制台之中。
- `obj1` ... `objN`
  - : 被用来输出的 Javascript 对象列表，最后输出的字符串是各个对象依次拼接的结果。
- `msg`
  - : 一个包含零个或多个子串的 Javascript 字符串。
- `subst1` ... `substN`
  - : 各个消息作为字串的 Javascript 对象。这个参数可以让你能够控制输出的格式。

## 案例

下面的代码示例演示了 JavaScript 对象的使用：

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number += 1) {
  console.log("the # is " + number);
  console.assert(number % 2 === 0, { number: number, errorMsg: errorMsg });
  // 或者使用 ES2015 对象简写：
  // console.assert(number % 2 === 0, {number, errorMsg});
}
// 输出：
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

请注意，你可以在大多数浏览器中使用 console.log 进行格式化输出

```js
console.log("the word is %s try number %d", "foo", 123);
// 输出：the word is foo try number 123
```

`但是 console.assert` 在不同浏览器中可能获得不同的效果：

```js
console.assert(false, "the word is %s", "foo");
// correct output in Node (e.g. v8.10.0) and some browsers
//     (e.g. Firefox v60.0.2):
// Assertion failed: the word is foo
// incorrect output in some browsers
//     (e.g. Chrome v67.0.3396.87):
// Assertion failed: the word is %s foo
```

有关详细信息，请参阅 {{Domxref("console")}} 文档中的 [输出文本到控制台](/zh-CN/docs/Web/API/Console#%E8%BE%93%E5%87%BA%E6%96%87%E6%9C%AC%E5%88%B0%E6%8E%A7%E5%88%B6%E5%8F%B0)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [WHATWG Console Standard: console.assert](https://console.spec.whatwg.org/#assert-condition-data)
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/devtools/docs/console#assertions)
