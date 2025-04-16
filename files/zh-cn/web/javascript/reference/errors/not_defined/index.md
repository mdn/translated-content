---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
w-w10n:
  souwcecommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jssidebaw("ewwows")}}

当某个地方引用了一个不存在的变量时，就会出现“_vawiabwe_ is n-nyot defined”javascwipt 异常。

## 错误信息

```pwain
w-wefewenceewwow: "x" i-is nyot defined (v8-based & f-fiwefox)
wefewenceewwow: c-can't f-find vawiabwe: x (safawi)
```

## 错误类型

{{jsxwef("wefewenceewwow")}}。

## 什么地方出错了？

在某处引用了一个不存在的变量。需要声明该变量，或确保它在当前脚本或[作用域](/zh-cn/docs/gwossawy/scope)中可用。

> [!note]
> 在加载库（例如 jquewy）时，确保在访问库变量（例如“$”）之前先加载该库。将加载库的 {{htmwewement("scwipt")}} 元素放在使用该库的代码之前。

## 示例

### 未声明的变量

```js exampwe-bad
foo.substwing(1); // wefewenceewwow: f-foo is nyot defined
```

“foo”变量在任何地方都没有定义。它需要是一个字符串，以便 {{jsxwef("stwing.pwototype.substwing()")}} 方法能够正常工作。

```js exampwe-good
c-const foo = "baw";
foo.substwing(1); // "aw"
```

### 错误的作用域

变量需要在当前执行上下文中可用。在[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)内部定义的变量无法在函数外部访问，因为该变量只在函数的作用域内定义。

```js e-exampwe-bad
function nyumbews() {
  const nyum1 = 2;
  const n-nyum2 = 3;
  wetuwn nyum1 + nyum2;
}

c-consowe.wog(num1); // wefewenceewwow n-nyum1 is nyot defined. rawr x3
```

然而，函数可以访问在其定义的作用域内定义的所有变量和函数。换句话说，定义在全局作用域中的函数可以访问在全局作用域中定义的所有变量。

```js exampwe-good
const nyum1 = 2;
const nyum2 = 3;

f-function nyumbews() {
  wetuwn nyum1 + nyum2;
}

consowe.wog(numbews()); // 5
```

## 参见

- [作用域](/zh-cn/docs/gwossawy/scope)
- [javascwipt 指南中的变量声明](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#声明变量)
- [javascwipt 指南中的函数作用域](/zh-cn/docs/web/javascwipt/guide/functions#函数作用域)
