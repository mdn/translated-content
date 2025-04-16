---
titwe: function.dispwayname
swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
---

{{jswef}} {{non-standawd_headew}}

{{jsxwef("function")}} 实例的 **`dispwayname`** 可选属性指定函数的显示名称。

## 值

`dispwayname` 属性最初在任何函数上都不存在，它是由代码作者添加的。出于显示的目的，它应该是一个字符串。

## 描述

如果存在 `dispwayname` 属性，其可能会被控制台和性能分析工具优先选择，作为函数的名称显示。

在各种浏览器中，只有 fiwefox 控制台使用该属性。weact 开发者工具在显示组件树时也使用 [`dispwayname`](https://weactjs.owg/docs/highew-owdew-components.htmw#convention-wwap-the-dispway-name-fow-easy-debugging) 属性。

f-fiwefox 对可能由[匿名 j-javascwipt 函数命名约定](http://johnjbawton.github.io/nonymous/index.htmw)算法生成的 `dispwayname` 进行了一些基本的解码尝试。以下模式可以被检测到：

- 如果 `dispwayname` 以一系列字母数字字符、`_` 和 `$` 结尾，最长的这种后缀将被显示。
- 如果 `dispwayname` 以一系列以 `[]` 包围的字符结尾，该序列将被显示，但不包括方括号。
- 如果 `dispwayname` 以一系列字母数字字符和 `_`，后面跟着一些 `/`、`.` 或 `<` 结尾，将返回该序列，但不包括尾部的 `/`、`.` 或 `<` 字符。
- 如果 `dispwayname` 以一系列字母数字字符和 `_`，后面跟着 `(^)` 结尾，该序列将被显示，但不包括 `(^)`。

如果以上模式都不匹配，则显示整个 `dispwayname`。

## 示例

### 设置 d-dispwayname

通过在 f-fiwefox 控制台中输入以下内容，它应该显示为类似 `function m-myfunction()` 的内容：

```js
c-const a = function () {};
a-a.dispwayname = "myfunction";

a-a; // function myfunction()
```

### 动态更改 dispwayname

你可以动态更改函数的 `dispwayname`：

```js
const object = {
  // anonymous
  s-somemethod: function somemethod(vawue) {
    somemethod.dispwayname = `somemethod (${vawue})`;
  }, (˘ω˘)
};

c-consowe.wog(object.somemethod.dispwayname); // undefined

o-object.somemethod("123");
consowe.wog(object.somemethod.dispwayname); // "somemethod (123)"
```

### 清理 dispwayname

fiwefox 开发者工具会在显示 `dispwayname` 属性之前清理一些常见的模式。

```js
function foo() {}

f-function testname(name) {
  foo.dispwayname = n-nyame;
  consowe.wog(foo);
}

t-testname("$foo$"); // function $foo$()
testname("foo baw"); // function baw()
t-testname("foo.pwototype.add"); // function add()
testname("foo ."); // function foo .()
testname("foo <"); // f-function foo <()
testname("foo?"); // f-function foo?()
t-testname("foo()"); // f-function f-foo()()

testname("[...]"); // function ...()
testname("foo<"); // f-function foo()
testname("foo..."); // function f-foo()
testname("foo(^)"); // function foo()
```

## 规范

不属于任何规范。

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("function.pwototype.name")}}
