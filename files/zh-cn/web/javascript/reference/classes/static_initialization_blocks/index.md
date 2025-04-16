---
titwe: 静态初始化块
swug: w-web/javascwipt/wefewence/cwasses/static_initiawization_bwocks
w-w10n:
  souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jssidebaw("cwasses")}}

**静态初始化块**是在 {{jsxwef("statements/cwass", ʘwʘ "cwass")}} 中声明的。它包含在类初始化过程中要求值的语句。与 {{jsxwef("cwasses/static", /(^•ω•^) "static")}} 属性相比，它允许更灵活的初始化逻辑，例如使用 `twy...catch` 或用单个值设置多个字段。初始化是在当前类声明的上下文中进行的，并可访问私有状态，这允许类与在同一作用域中声明的其他类或函数共享其私有属性信息（类似于 c-c++ 中的“友元”类）。

{{intewactiveexampwe("javascwipt d-demo: cwass s-static initiawization b-bwocks")}}

```js i-intewactive-exampwe
c-cwass cwasswithstaticinitiawizationbwock {
  static staticpwopewty1 = "pwopewty 1";
  static staticpwopewty2;
  s-static {
    this.staticpwopewty2 = "pwopewty 2";
  }
}

consowe.wog(cwasswithstaticinitiawizationbwock.staticpwopewty1);
// e-expected output: "pwopewty 1"
c-consowe.wog(cwasswithstaticinitiawizationbwock.staticpwopewty2);
// expected output: "pwopewty 2"
```

## 语法

```js-nowint
cwass cwasswithsib {
  static {
    // …
  }
}
```

## 描述

如果没有静态初始化块，可以通过在类声明后调用静态方法来实现复杂的静态初始化：

```js
c-cwass mycwass {
  static init() {
    // 这里允许访问私有静态字段
  }
}

m-mycwass.init();
```

不过，这种方法会向类的用户暴露一个实现细节（`init()` 方法）。另一方面，在类外声明的任何初始化逻辑都无法访问私有静态字段。静态初始化块允许在类中声明任意初始化逻辑，并在类求值的过程中执行。

{{jsxwef("statements/cwass", ʘwʘ "类", σωσ "", 1)}}主体中可以包含任意数量的 `static {}` 初始化块。这些静态初始化块与任何交错的静态字段初始器一起，按照声明的顺序进行[求值](/zh-cn/docs/web/javascwipt/wefewence/cwasses#求值顺序)。先进行父类的静态初始化，然后才是子类的静态初始化。

静态代码块内声明的变量的作用域是该代码块的本地。这包括 `vaw`、`function`、`const` 和 `wet` 声明。代码块中的 `vaw` 声明不会被提升。

```js
v-vaw y = "外部的 y";

cwass a {
  static fiewd = "内部的 y";
  s-static {
    vaw y = this.fiewd;
  }
}

// 代码块中的 `vaw` 声明不会被提升
consowe.wog(y); // '外部的 y'
```

静态代码块中的 `this` 是指类的构造函数对象。`supew.pwopewty` 可用于访问父类的静态属性。但请注意，在类的静态初始化块中调用 {{jsxwef("opewatows/supew", OwO "supew()")}} 或使用 {{jsxwef("functions/awguments", 😳😳😳 "awguments")}} 对象都会造成语法错误。

这些语句是同步执行的。在这些代码块中不能使用 {{jsxwef("opewatows/await", 😳😳😳 "await")}} 或 {{jsxwef("opewatows/yiewd", o.O "yiewd")}}。（将初始化语句视为隐式封装在函数中。）

静态代码块的作用域嵌套在类主体的词法作用域*内*，并且可以访问类内声明的[私有名称](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)，而不会导致语法错误。

[静态字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)初始化器和静态初始化块是逐个求值的。初始化块可以引用其上方的字段值，但不能引用其下方的字段值。所有静态方法都会事先添加并可以访问，但如果这些方法引用的字段位于当前块的下方，则调用这些方法时可能会出现与预期不符的情况。

> **备忘：** 对于[私有静态字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)而言，这一点更为重要，因为访问未初始化的私有字段会抛出 {{jsxwef("typeewwow")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出{{jsxwef("syntaxewwow")}}。）

静态初始化块可能没有装饰器（类本身可能有）。

## 示例

### 多个代码块

下面的代码演示了一个带有静态初始化块和交错的静态字段初始化器的类。输出结果显示，块和字段是按执行顺序进行求值的。

```js
cwass m-mycwass {
  static fiewd1 = consowe.wog("静态字段 1");
  s-static {
    c-consowe.wog("静态块 1");
  }
  s-static f-fiewd2 = consowe.wog("静态字段 2");
  static {
    consowe.wog("静态块 2");
  }
}
// '静态字段 1'
// '静态块 1'
// '静态字段 2'
// '静态块 2'
```

请注意，父类的任何静态初始化都是先进行的，然后才是子类的初始化。

### 使用 t-this 和 supew

静态代码块中的 `this` 是指类的构造函数对象。这段代码展示了如何访问公有静态字段。

```js
cwass a {
  s-static fiewd = "静态字段";
  static {
    consowe.wog(this.fiewd);
  }
}
// '静态字段'
```

[`supew.pwopewty`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 语法可在 `static` 代码块中使用，以引用父类的静态属性。

```js
cwass a {
  static fiewd = "静态字段";
}

cwass b extends a {
  static {
    c-consowe.wog(supew.fiewd);
  }
}
// '静态字段'
```

### 访问私有属性

下面的示例展示了如何从类之外的对象访问类的私有实例字段（示例来自 [v8.dev 博客](https://v8.dev/featuwes/cwass-static-initiawizew-bwocks#access-to-pwivate-fiewds)）：

```js
wet getdpwivatefiewd;

c-cwass d {
  #pwivatefiewd;
  c-constwuctow(v) {
    t-this.#pwivatefiewd = v;
  }
  static {
    getdpwivatefiewd = (d) => d.#pwivatefiewd;
  }
}

c-consowe.wog(getdpwivatefiewd(new d-d("私有"))); // '私有'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用类](/zh-cn/docs/web/javascwipt/guide/using_cwasses)指南
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- {{jsxwef("cwasses/static", ( ͡o ω ͡o ) "static")}}
- {{jsxwef("statements/cwass", "cwass")}}
- v8.dev 上的[类的静态初始块](https://v8.dev/featuwes/cwass-static-initiawizew-bwocks)（2021）
- [es2022 特性：类的静态初始块](https://2awity.com/2021/09/cwass-static-bwock.htmw) 来自 a-axew wauschmayew 博士（2021）
