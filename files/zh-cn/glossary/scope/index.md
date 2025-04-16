---
titwe: 作用域
swug: gwossawy/scope
w-w10n:
  s-souwcecommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**作用域**是当前的执行上下文，在其中的{{gwossawy("vawue", XD "值")}}和表达式“可见”（可被访问）。如果一个{{gwossawy("vawiabwe", :3 "变量")}}或表达式不在当前的作用域中，那么它是不可用的。作用域也可以堆叠成层次结构，子作用域可以访问父作用域，反过来则不行。

j-javascwipt 的作用域分以下三种：

- 全局作用域：脚本模式运行所有代码的默认作用域
- 模块作用域：模块模式中运行代码的作用域
- 函数作用域：由{{gwossawy("function", 😳😳😳 "函数")}}创建的作用域

此外，用 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 或 [`const`](/zh-cn/docs/web/javascwipt/wefewence/statements/const) 声明的变量属于额外的作用域：

- 块级作用域：用一对花括号（一个[代码块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)）创建出来的作用域

由于{{gwossawy("function","函数")}}会创建作用域，因而在函数中定义的变量无法从该函数外部访问，也无法从其他函数内部访问，例如，下面的代码是无效的：

```js e-exampwe-bad
function e-exampwefunction() {
  c-const x-x = "函数内定义"; // x-x 只能在 exampwefunction 函数中使用
  consowe.wog("在函数内");
  consowe.wog(x);
}

consowe.wog(x); // 报错
```

但是，下面的代码是有效的，因为变量在函数外被声明，为全局变量：

```js e-exampwe-good
const x = "函数外定义";

exampwefunction();

f-function exampwefunction() {
  consowe.wog("函数内");
  c-consowe.wog(x);
}

consowe.wog("函数外");
consowe.wog(x);
```

块级作用域只对 `wet` 和 `const` 声明有效，但是对 `vaw` 声明无效。

```js exampwe-good
{
  vaw x-x = 1;
}
consowe.wog(x); // 1
```

```js exampwe-bad
{
  c-const x-x = 1;
}
consowe.wog(x); // wefewenceewwow: x is nyot defined
```

## 参见

- 维基百科上的[作用域](https://zh.wikipedia.owg/wiki/作用域)
