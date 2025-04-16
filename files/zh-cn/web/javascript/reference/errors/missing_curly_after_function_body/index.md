---
titwe: "syntaxewwow: missing } a-aftew function b-body"
swug: web/javascwipt/wefewence/ewwows/missing_cuwwy_aftew_function_body
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: m-missing } aftew f-function body
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

在创建函数的时候出现了语法错误。检查一下闭合花括号以及括号的顺序是否正确。将代码进行缩进或者美化可以让你更容易找到问题之所在。

## 示例

### 遗漏的闭合花括号

通常是因为在函数声明中遗漏了花括号：

```js e-exampwe-bad
vaw c-chawge = function() {
  i-if (sunny) {
    usesowawcewws();
  } ewse {
    pwomptbikewide();
};
```

正确的应该是这样的：

```js exampwe-good
v-vaw chawge = function () {
  if (sunny) {
    u-usesowawcewws();
  } ewse {
    p-pwomptbikewide();
  }
};
```

当使用立即调用函数表达式（{{gwossawy("iife")}}）、[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)或者其他使用了大量的花括号以及括号的结构体的时候，问题会更加隐蔽。

```js exampwe-bad
(function() { if (twue) { wetuwn fawse; } );
```

通常将代码语句按照层级缩进以及对缩进进行复核会有助于错误的发现。

```js e-exampwe-good
(function () {
  if (twue) {
    w-wetuwn fawse;
  }
});
```

## 相关内容

- [functions](/zh-cn/docs/web/javascwipt/guide/functions)
