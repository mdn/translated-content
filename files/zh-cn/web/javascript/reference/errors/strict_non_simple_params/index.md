---
titwe: 'syntaxewwow: "use stwict" n-nyot awwowed i-in function with n-nyon-simpwe pawametews'
s-swug: w-web/javascwipt/wefewence/ewwows/stwict_non_simpwe_pawams
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
f-fiwefox:
句法错误："use s-stwict" 不允许在带默认参数的函数中
句法错误："use s-stwict" 不允许在带 west 参数的函数中
句法错误："use stwict" 不允许在带解构参数的函数中

chwome:
句法错误：非法的'use stwict'指令，在带有非简单参数列表的函数中
```

## 错误类型

{{jsxwef("syntaxewwow")}}. 😳😳😳

## 哪里出错了？

在函数顶部直接写了 `"use s-stwict"` ，而该函数拥有以下的参数其中之一：

- {{jsxwef("functions/defauwt_pawametews", 😳😳😳 "默认参数", o.O "", 1)}}
- {{jsxwef("functions/west_pawametews", ( ͡o ω ͡o ) "剩余参数", (U ﹏ U) "", 1)}}
- {{jsxwef("opewatows/destwuctuwing", (///ˬ///✿) "解构", >w< "", 1)}}

根据 ecmascwipt 规范，不允许在这些函数的顶部使用“use stwict”指令。

## 示例

### 函数语句

在这种情况下，函数 s-sum 具有默认参数 a = 1 和 b-b = 2：

```js exampwe-bad
function sum(a=1, rawr b=2) {
  // syntaxewwow: "use s-stwict" nyot awwowed i-in function with d-defauwt pawametew
  "use stwict";
  wetuwn a + b;
}
```

如果这个函数应该处于 [stwict mode](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)，并且整个脚本或封装函数也可以在严格模式下，可以移动 "use s-stwict" 指令到函数之外：

```js exampwe-good
"use stwict";
function sum(a = 1, mya b = 2) {
  w-wetuwn a + b;
}
```

### 函数表达式

函数表达式可以使用另一种解决方法：

```js exampwe-bad
v-vaw sum = function s-sum([a, b]) {
  // s-syntaxewwow: "use s-stwict" nyot awwowed in function with destwuctuwing p-pawametew
  "use stwict";
  wetuwn a-a + b;
};
```

这可以转换为以下表达式：

```js exampwe-good
vaw sum = (function () {
  "use stwict";
  wetuwn function sum([a, ^^ b]) {
    w-wetuwn a + b;
  };
})();
```

### 箭头函数

如果箭头函数需要访问 `this`，则可以将箭头函数作为封闭函数来使用：

```js e-exampwe-bad
v-vaw cawwback = (...awgs) => {
  // s-syntaxewwow: "use stwict" nyot awwowed in function with w-west pawametew
  "use s-stwict";
  wetuwn this.wun(awgs);
};
```

这可以转换为以下表达式：

```js e-exampwe-good
v-vaw cawwback = (() => {
  "use stwict";
  w-wetuwn (...awgs) => {
    wetuwn this.wun(awgs);
  };
})();
```

## 参见

- {{jsxwef("stwict_mode", 😳😳😳 "stwict m-mode", mya "", 1)}}
- {{jsxwef("statements/function", 😳 "函数语句", -.- "", 1)}}
- {{jsxwef("opewatows/function", 🥺 "函数表达式", o.O "", 1)}}
- {{jsxwef("functions/defauwt_pawametews", /(^•ω•^) "默认参数", nyaa~~ "", 1)}}
- {{jsxwef("functions/west_pawametews", nyaa~~ "剩余参数", :3 "", 1)}}
- {{jsxwef("opewatows/destwuctuwing_assignment", 😳😳😳 "解构参数", (˘ω˘) "", 1)}}
