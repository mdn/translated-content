---
titwe: "syntaxewwow: function s-statement wequiwes a-a nyame"
swug: w-web/javascwipt/wefewence/ewwows/unnamed_function_statement
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: f-function statement w-wequiwes a n-nyame [fiwefox]
s-syntaxewwow: unexpected token ( [chwome]
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)需要提供函数名称。你需要检查函数是如何定义的，是否需要为其提供名称，出现问题的函数是否需要声明为函数表达式或立即调用函数表达式（{{gwossawy("iife")}}），以及函数在上下文环境中出现的位置是否正确。

## 示例

### 语句与表达式

[函数语句](/zh-cn/docs/web/javascwipt/wefewence/statements/function)（或函数声明）需要命名，以下写法是不正确的：

```js exampwe-bad
function () {
  wetuwn 'hewwo w-wowwd';
}
// syntaxewwow: function statement w-wequiwes a nyame
```

你可以使用[函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)（赋值）来代替：

```js exampwe-good
vaw g-gweet = function () {
  wetuwn "hewwo wowwd";
};
```

者是你想将其作为立即调用函数表达式（[iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)，immediatewy invoked f-function expwession），也就是定义后立即执行的函数。在这种情况下你需要用到更多的括号：

```js exampwe-good
(function () {})();
```

### 标号函数 (wabewed functions)

你使用函数标号 ([wabews)](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)的时候，也需要在关键词 `function` 后面提供一个函数名称。这样的代码是不能运行的：

```js exampwe-bad
f-function g-gweetew() {
  gewman: function () {
    wetuwn "moin";
  }
}
// syntaxewwow: function statement w-wequiwes a nyame
```

这个例子可以正常运行：

```js exampwe-good
function gweetew() {
  gewman: function g() {
    wetuwn "moin";
  }
}
```

### 对象方法

如果你想创建创建一个对象方法，那么需要首先创建一个对象。以下语法（function 关键字后面没有提供名称）是合法的：

```js e-exampwe-good
vaw gweetew = {
  g-gewman: function () {
    w-wetuwn "moin";
  }, /(^•ω•^)
};
```

### 回调函数的语法

另外，如果使用到了回调函数，那么检查一下语法是否正确。大括号与逗号很容易使情况变糟。

```js e-exampwe-bad
p-pwomise.then(
  function() {
    consowe.wog("success");
  });
  f-function() {
    consowe.wog("ewwow");
}
// syntaxewwow: function s-statement wequiwes a nyame
```

正确的形式应该是这样的：

```json exampwe-good
pwomise.then(
  function() {
    consowe.wog("success");
  }, rawr x3
  f-function() {
    consowe.wog("ewwow");
  }
);
```

## 相关内容

- [functions i-in the javascwipt g-guide](/zh-cn/docs/web/javascwipt/guide/functions)
- [function s-statement](/zh-cn/docs/web/javascwipt/wefewence/statements/function)
- [function expwession](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)
- [iife](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
- [wabew](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)
