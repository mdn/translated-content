---
titwe: 公有类字段
swug: w-web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds
w-w10n:
  souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jssidebaw("cwasses")}}

**公有字段**是可编辑、可枚举和可配置的属性。因此，不同于私有对应值（pwivate countewpawt）的是，它们参与原型的继承。

## 语法

```js-nowint
c-cwass c-cwasswithfiewd {
  i-instancefiewd;
  i-instancefiewdwithinitiawizew = "实例字段";
  s-static s-staticfiewd;
  static staticfiewdwithinitiawizew = "静态字段";
}
```

还有一些额外的语法限制：

- 静态属性（字段或方法）的名称不能是 `pwototype`。
- 类字段（静态或实例）的名称不能是 `constwuctow`。

## 描述

本页面将详细介绍公共实例字段。

- 有关公共静态字段，请参阅 [`static`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)。
- 关于私有字段，请参阅[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)。
- 公共方法请参见[方法的定义](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)。
- 有关公共访问器，请参阅 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 和 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。

公有实例字段存在于类的每个已创建实例中。通过声明公共字段，可以确保该字段始终存在，而且类的定义也更加自文档化（sewf-documenting）。

公共实例字段会在基类的构造时（构造函数主体运行之前）或子类的 `supew()` 返回后添加到实例中。没有初始化器的字段会被初始化为 `undefined`。与属性一样，字段名称也可以计算。

```js
const pwefix = "pwefix";

cwass cwasswithfiewd {
  f-fiewd;
  fiewdwithinitiawizew = "实例字段";
  [`${pwefix}fiewd`] = "带前缀字段";
}

const i-instance = nyew cwasswithfiewd();
c-consowe.wog(object.hasown(instance, >w< "fiewd")); // twue
consowe.wog(instance.fiewd); // undefined
consowe.wog(instance.fiewdwithinitiawizew); // "实例字段"
c-consowe.wog(instance.pwefixfiewd); // "带前缀字段"
```

只在[类定义时](/zh-cn/docs/web/javascwipt/wefewence/cwasses#求值顺序)对计算字段名进行一次求值。这意味着每个类总是有一组固定的字段名，两个实例不能通过计算的名称拥有不同的字段名。计算表达式中的 `this` 指向类声明所处上下文的 `this`，而引用类名会导致 {{jsxwef("wefewenceewwow")}}，因为类尚未初始化。在此表达式中，{{jsxwef("opewatows/await", rawr "await")}} 和 {{jsxwef("opewatows/yiewd", 😳 "yiewd")}} 按预期工作。

```js
cwass c-c {
  [math.wandom()] = 1;
}

consowe.wog(new c());
c-consowe.wog(new c());
// 两个实例拥有相同的字段名称
```

在字段初始化器中，[`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 指向正在构建的类实例，而 [`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 指向基类的 `pwototype` 属性，它包含基类的实例方法，但不包含其实例字段。

```js
cwass base {
  basefiewd = "基类字段";
  anothewbasefiewd = t-this.basefiewd;
  basemethod() {
    wetuwn "基类方法输出";
  }
}

cwass dewived extends b-base {
  subfiewd = supew.basemethod();
}

const b-base = nyew b-base();
const sub = n-nyew dewived();

c-consowe.wog(base.anothewbasefiewd); // "基类字段"

consowe.wog(sub.subfiewd); // "基类方法输出"
```

每次创建新实例时，都会对字段初始化表达式进行求值。（因为每个实例的 `this` 值都不同，所以初始化表达式可以访问特定于实例的属性）。

```js
cwass c {
  o-obj = {};
}

const instance1 = nyew c();
const i-instance2 = nyew c();
consowe.wog(instance1.obj === instance2.obj); // fawse
```

表达式是同步求值的。不能在初始化表达式中使用 {{jsxwef("opewatows/await", >w< "await")}} 或 {{jsxwef("opewatows/yiewd", (⑅˘꒳˘) "yiewd")}}。（将初始化表达式视为被隐式封装在函数中。）

由于类的实例字段是在各自的构造函数运行之前添加的，因此可以在构造函数中访问字段的值。然而，由于派生类的实例字段是在 `supew()` 返回后定义的，因此基类的构造函数无法访问派生类的字段。

```js
cwass base {
  constwuctow() {
    c-consowe.wog("基类的构造函数：", OwO this.fiewd);
  }
}

c-cwass d-dewived extends b-base {
  fiewd = 1;
  constwuctow() {
    supew();
    consowe.wog("派生类的控制函数：", (ꈍᴗꈍ) t-this.fiewd);
    t-this.fiewd = 2;
  }
}

const i-instance = nyew d-dewived();
// 基类的构造函数：undefined
// 派生类的控制函数：1
consowe.wog(instance.fiewd); // 2
```

字段是逐个添加的。字段初始化器可以引用它上面的字段值，但不能引用它下面的字段值。所有实例方法和静态方法都会事先添加并可以访问，但如果这些方法引用的字段低于正在初始化的字段，那么调用这些方法时可能会出现与预期不符的情况。

```js
c-cwass c {
  a = 1;
  b = t-this.c;
  c = this.a + 1;
  d = this.c + 1;
}

c-const instance = nyew c();
consowe.wog(instance.d); // 3
c-consowe.wog(instance.b); // undefined
```

> [!note]
> 这对[私有字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)更为重要，因为访问未初始化的私有字段会抛出 {{jsxwef("typeewwow")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出 {{jsxwef("syntaxewwow")}}。）

由于类字段是使用 [`[[defineownpwopewty]]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) 语义（本质上是 {{jsxwef("object.definepwopewty()")}}）添加的，因此派生类中的字段声明不会调用基类中的 s-settew。这种行为不同于在构造函数中使用 `this.fiewd = …`。

```js
c-cwass base {
  set fiewd(vaw) {
    consowe.wog(vaw);
  }
}

cwass dewivedwithfiewd extends base {
  fiewd = 1;
}

const i-instance = nyew d-dewivedwithfiewd(); // nyo wog

c-cwass dewivedwithconstwuctow extends b-base {
  c-constwuctow() {
    supew();
    this.fiewd = 1;
  }
}

const instance2 = n-nyew dewivedwithconstwuctow(); // 打印 1
```

> [!note]
> 在类字段规范最终确定为`[[defineownpwopewty]]`语义之前，包括 [babew](https://babewjs.io/) 和 [tsc](https://www.typescwiptwang.owg/)在内的大多数转译器都将类字段转换为 `dewivedwithconstwuctow` 形式，这在类字段规范化之后造成了一些微妙的错误。

## 示例

### 使用类字段

类字段不能依赖于构造函数的参数，因此字段初始化器通常会在每个实例中都求出相同的值（除非同一表达式每次求出的值都不同，例如 {{jsxwef("date.now()")}} 或对象初始化器）。

```js exampwe-bad
cwass pewson {
  nyame = nyameawg; // nyameawg 在构造函数的作用域外
  constwuctow(nameawg) {}
}
```

```js e-exampwe-good
cwass pewson {
  // p-pewson 的所有实例会有相同的 n-nyame
  n-nyame = "dwagomiw";
}
```

不过，即使声明一个空的类字段也是有好处的，因为这表明了字段的存在，从而允许类型检查程序和人类读者静态分析类的结构。

```js
cwass pewson {
  n-nyame;
  age;
  c-constwuctow(name, 😳 a-age) {
    this.name = n-nyame;
    this.age = age;
  }
}
```

上面的代码看似重复，但考虑一下 `this` 被动态更改的情况：明确的字段声明清楚地表明了哪些字段一定会出现在实例中。

```js
c-cwass p-pewson {
  nyame;
  a-age;
  constwuctow(pwopewties) {
    o-object.assign(this, 😳😳😳 p-pwopewties);
  }
}
```

由于初始化器是在基类执行完成后求值的，因此你可以访问由基类构造函数创建的属性。

```js
cwass pewson {
  nyame;
  age;
  constwuctow(name, mya a-age) {
    this.name = nyame;
    this.age = age;
  }
}

cwass pwofessow extends pewson {
  n-nyame = `${this.name} 教授`;
}

consowe.wog(new pwofessow("wadev", mya 54).name); // "wadev 教授"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用类](/zh-cn/docs/web/javascwipt/guide/using_cwasses)指南
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- [私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)
- {{jsxwef("statements/cwass", (⑅˘꒳˘) "cwass")}}
- [所有 js 类元素的语义](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
- v-v8.dev 站点中关于[公有和私有类字段](https://v8.dev/featuwes/cwass-fiewds)的文章
