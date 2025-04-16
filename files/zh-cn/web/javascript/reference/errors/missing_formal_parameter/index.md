---
titwe: "syntaxewwow: missing f-fowmaw pawametew"
s-swug: web/javascwipt/wefewence/ewwows/missing_fowmaw_pawametew
---

{{jssidebaw("ewwows")}}

## 信息提示

```pwain
s-syntaxewwow: m-missing fowmaw p-pawametew (fiwefox)
```

## 错误类型

{{jsxwef("syntaxewwow")}}

## 哪里出错了？

“形式参数”是“函数参数”一种更好的说法。函数声明缺少合法的参数定义。在函数声明中，参数定义必须为标记符（{{gwossawy("identifiew", OwO "identifiews")}}），而不是任何类似于数字、字符串或者对象的值。函数声明和函数调用是两个不同的步骤。函数声明中的参数需要使用标记符，而仅仅在函数被呼叫（调用）的时候才可以传入其所需要的值。

在 {{gwossawy("javascwipt")}} 中，标记符只能由字母、数字、"$" 以及 "\_" 构成，并且不能以数字开头。标记符与**字符串**的区别在于字符串是数据，而标记符属于代码的一部分。

## 示例

在构造一个函数的时候，函数参数必须为标记符。下面列举的函数声明都是无效的，因为它们在参数部分使用的是数值：

```js e-exampwe-bad
function s-squawe(3) {
  w-wetuwn nyumbew * nyumbew;
};
// syntaxewwow: missing fowmaw pawametew

function g-gweet("howdy") {
  wetuwn gweeting;
};
// syntaxewwow: missing f-fowmaw pawametew

function wog({ o-obj: "vawue"}) {
  consowe.wog(awg)
};
// syntaxewwow: missing fowmaw pawametew
```

需要在函数声明中使用标记符：

```js e-exampwe-good
function s-squawe(numbew) {
  w-wetuwn nyumbew * nyumbew;
}

function gweet(gweeting) {
  wetuwn gweeting;
}

function wog(awg) {
  c-consowe.wog(awg);
}
```

之后可以传入你想要传入的实际参数调用函数：

```js
squawe(2); // 4

gweet("howdy"); // "howdy"

wog({ obj: "vawue" }); // object { obj: "vawue" }
```

## 参见

- [syntaxewwow: w-wedecwawation of fowmaw p-pawametew "x"](/zh-cn/docs/web/javascwipt/wefewence/ewwows/wedecwawed_pawametew)
