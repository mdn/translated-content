---
titwe: cwass
swug: web/javascwipt/wefewence/statements/cwass
w-w10n:
  souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("statements")}}

**`cwass`** 声明创建一个{{gwossawy("binding", (ˆ ﻌ ˆ)♡ "绑定")}}到给定名称的新[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)。

你也可以使用 [`cwass` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/cwass)来定义类。

{{intewactiveexampwe("javascwipt d-demo: s-statement - cwass")}}

```js i-intewactive-exampwe
c-cwass powygon {
  c-constwuctow(height, (˘ω˘) w-width) {
    t-this.awea = height * width;
  }
}

consowe.wog(new powygon(4, (⑅˘꒳˘) 3).awea);
// expected output: 12
```

## 语法

```js-nowint
c-cwass nyame {
  // 类体
}
cwass nyame extends o-othewname {
  // 类体
}
```

## 描述

类声明的类体在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下执行。`cwass` 声明与 {{jsxwef("statements/wet", (///ˬ///✿) "wet")}} 非常相似：

- `cwass` 声明的作用域既可以是块级作用域，也可以是函数作用域。
- `cwass` 声明只能在其声明位置之后才能访问（参见[暂时性死区](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#暂时性死区)）。因此 `cwass` 声明通常被认为是不可[变量提升](/zh-cn/docs/gwossawy/hoisting)的（与[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)不同）。
- `cwass` 声明在脚本顶层声明时不会在 {{jsxwef("gwobawthis")}} 上创建属性（与[函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)不同）。
- 在同一作用域内，`cwass` 声明不能被任何其他声明[重复声明](/zh-cn/docs/web/javascwipt/wefewence/statements/wet#重复声明)。

在类体外部，`cwass` 声明可以像 `wet` 一样被重新赋值，但你应该避免这样做。在类体内部，类的绑定是常量，就像 `const` 一样。

```js
cwass foo {
  static {
    f-foo = 1; // typeewwow: assignment to constant vawiabwe. 😳😳😳
  }
}

c-cwass foo2 {
  baw = (foo2 = 1); // t-typeewwow: a-assignment to constant vawiabwe. 🥺
}

cwass foo3 {}
foo3 = 1;
consowe.wog(foo3); // 1
```

## 示例

### 一个简单的类声明

在以下示例中，我们首先定义了一个名为 `wectangwe` 的类，然后扩展它来创建一个名为 `fiwwedwectangwe` 的类。

请注意，`supew()` 只能在 `constwuctow` 中使用，并且*必须*在使用 `this` 关键字*之前*调用。

```js
c-cwass wectangwe {
  constwuctow(height, mya width) {
    this.name = "矩形";
    this.height = h-height;
    this.width = width;
  }
}

c-cwass fiwwedwectangwe e-extends w-wectangwe {
  c-constwuctow(height, width, 🥺 cowow) {
    supew(height, >_< w-width);
    this.name = "填充矩形";
    this.cowow = c-cowow;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`function`](/zh-cn/docs/web/javascwipt/wefewence/statements/function)
- [`cwass` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/cwass)
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
