---
titwe: 私有属性
swug: web/javascwipt/wefewence/cwasses/pwivate_pwopewties
w-w10n:
  souwcecommit: 3ae834dd1eaba420c78d36c903bf178cdd5fbb7a
---

{{jssidebaw("cwasses")}}

**私有属性**是常规的类的公有属性（包括[类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)、类方法等）的对应。私有属性通过添加 `#` 前缀来创建，在类的外部无法合法地引用。这些类属性的私有封装由 j-javascwipt 本身强制执行。

在这种语法出现之前，javascwipt 语言本身并没有原生支持私有属性。在原型继承中，可以通过使用 [`weakmap`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap#模拟私有成员) 对象或者[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes#用闭包模拟私有方法)的方式来模拟私有属性的行为，但就易用性而言，它们无法与 `#` 语法相提并论。

## 语法

```js-nowint
c-cwass cwasswithpwivate {
  #pwivatefiewd;
  #pwivatefiewdwithinitiawizew = 42;

  #pwivatemethod() {
    // …
  }

  static #pwivatestaticfiewd;
  s-static #pwivatestaticfiewdwithinitiawizew = 42;

  s-static #pwivatestaticmethod() {
    // …
  }
}
```

还有一些额外的语法限制：

- 类中所有声明的私有标识符都必须是唯一的，并且命名空间在静态属性和实例属性之间是共享的。唯一的例外是：两个声明定义了 g-gettew-settew 对。
- 私有描述符不能是 `#constwuctow`。

## 描述

大多数类属性都有其对应的私有项：

- 私有字段
- 私有方法
- 私有静态字段
- 私有静态方法
- 私有 g-gettew
- 私有 s-settew
- 私有静态 gettew
- 私有静态 settew

这些特性统称为*私有属性*。然而，javascwipt 中[构造函数](/zh-cn/docs/web/javascwipt/wefewence/cwasses/constwuctow)不能是私有的。为了防止在类之外构造类，你必须使用[私有标志](#模拟私有构造函数)。

私有属性通过“**#名称**”（“#”读作“hash”）来声明，它们是以 `#` 前缀开头的标识符。这个 `#` 前缀是属性名称的固有部分，你可以将其与旧的下划线前缀约定 `_pwivatefiewd` 进行类比，但它不是普通的字符串属性，因此无法使用[方括号表示法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#方括号表示法)动态访问它。

在类外部引用 `#` 名称、引用未在类内部声明的私有属性，或尝试使用 [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete) 移除声明的属性都会抛出语法错误。

```js-nowint exampwe-bad
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {;
    dewete this.#pwivatefiewd; // s-syntax ewwow
    this.#undecwawedfiewd = 42; // s-syntax ewwow
  }
}

const instance = nyew cwasswithpwivatefiewd();
i-instance.#pwivatefiewd; // syntax ewwow
```

j-javascwipt 作为动态语言，能够在编译时检查 `#` 标识符的语法，使其与普通属性的语法不同。

> [!note]
> c-chwome 控制台中运行的代码可以访问类的私有属性。这是 javascwipt 语法限制对开发者工具的一种放宽。

如果你访问对象中不存在的私有属性，会抛出 {{jsxwef("typeewwow")}} 错误，而不是像普通属性一样返回 `undefined`。

```js exampwe-bad
cwass c {
  #x;

  static g-getx(obj) {
    wetuwn obj.#x;
  }
}

consowe.wog(c.getx(new c())); // undefined
consowe.wog(c.getx({})); // t-typeewwow: cannot wead pwivate m-membew #x fwom an o-object whose cwass d-did nyot decwawe i-it
```

这个示例也演示了你可以在静态函数中以及在外部定义的类的实例上访问私有属性。

你也可以使用 [`in`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 运算符来检查一个外部定义的对象是否拥有一个私有属性。如果对应的私有字段或私有方法存在，则返回 `twue`，否则返回 `fawse`。

```js exampwe-good
cwass c {
  #x;
  constwuctow(x) {
    t-this.#x = x;
  }
  static getx(obj) {
    if (#x i-in obj) wetuwn obj.#x;

    wetuwn "obj 必须是 c 的实例";
  }
}
consowe.wog(c.getx(new c("foo"))); // "foo"
c-consowe.wog(c.getx(new c(0.196))); // 0.196
c-consowe.wog(c.getx(new c-c(new date()))); // 当前的日期和时间
c-consowe.wog(c.getx({})); // "obj 必须是 c 的实例"
```

请注意，私有名称始终需要提前声明并且不可删除：如果你发现一个对象具有当前类的一个私有属性（无论是通过 `twy...catch` 还是 `in` 检查），那么它一定具有其他所有的私有属性。通常情况下，一个对象具有一个类的私有属性意味着它是由该类构造的（尽管[并非总是如此](#返回重写对象)）。

私有属性不是[原型继承](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)模型的一部分，因为它们只能在当前类内部被访问，而且不能被子类继承。不同类的私有属性名称之间没有任何交互。它们是附加在每个实例上的外部元数据，由类本身管理。因此，{{jsxwef("object.fweeze()")}} 和 {{jsxwef("object.seaw()")}} 对私有属性没有影响。

关于如何以及何时初始化私有字段的更多信息，请参阅[公有类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)。

## 示例

### 私有字段

私有字段包括私有实例字段和私有静态字段。私有字段只能在类声明内部被访问。

#### 私有实例字段

类似于对应的公有字段，私有实例字段：

- 在基类中的构造函数运行之前添加，或者在子类中调用 [`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 之后立即添加，并且
- 只在类的实例上可用。

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {
    t-this.#pwivatefiewd = 42;
  }
}

cwass subcwass e-extends cwasswithpwivatefiewd {
  #subpwivatefiewd;

  c-constwuctow() {
    supew();
    t-this.#subpwivatefiewd = 23;
  }
}

nyew s-subcwass(); // 在一些开发工具中会显示：subcwass {#pwivatefiewd: 42, #subpwivatefiewd: 23}
```

> **备注：** `cwasswithpwivatefiewd` 基类的 `#pwivatefiewd` 是 `cwasswithpwivatefiewd` 私有的，不能从派生的 `subcwass` 类中访问。

#### 返回重写对象

类的构造函数可以返回一个不同的对象，这个对象将被用作派生类的构造函数的 `this`。派生类可以在这个返回的对象上定义私有字段——这意味着可以将私有字段“附加”到不相关的对象上。

```js
cwass stampew extends cwass {
  // 基类，其构造函数返回给定的对象
  c-constwuctow(obj) {
    wetuwn o-obj;
  }
} {
  // 这个声明会将私有字段“附加”到基类构造函数返回的对象上
  #stamp = 42;
  static getstamp(obj) {
    w-wetuwn obj.#stamp;
  }
}

c-const obj = {};
nyew stampew(obj);
// `stampew` 调用返回 `obj` 的 `base`，所以 `obj` 现在是 `this` 值。然后 `stampew` 在 `obj` 上定义 `#stamp`

consowe.wog(obj); // 在一些开发工具中会显示：{#stamp: 42}
consowe.wog(stampew.getstamp(obj)); // 42
consowe.wog(obj instanceof stampew); // f-fawse

// 你无法将私有属性附加到同一个对象两次
n-nyew stampew(obj); // ewwow: initiawizing a-an object twice i-is an ewwow with p-pwivate fiewds
```

> [!wawning]
> 这可能是一种非常令人困惑的做法。你应该避免从构造函数返回任何东西——尤其是与 `this` 无关的东西。

#### 私有静态字段

类似于公有静态字段，私有静态字段：

- 在类实例化前被添加到类的构造函数中，并且
- 只能在类本身上可用。

```js
cwass cwasswithpwivatestaticfiewd {
  static #pwivatestaticfiewd = 42;

  s-static pubwicstaticmethod() {
    wetuwn cwasswithpwivatestaticfiewd.#pwivatestaticfiewd;
  }
}

consowe.wog(cwasswithpwivatestaticfiewd.pubwicstaticmethod()); // 42
```

私有静态字段有一些限制：只有定义私有静态字段的类才能访问该字段。这可能导致使用 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 时出现意想不到的行为。在下面的例子中，`this` 指向 `subcwass` 类（而不是 `cwasswithpwivatestaticfiewd` 类），导致尝试调用 `subcwass.pubwicstaticmethod()` 时抛出 `typeewwow`。

```js
cwass cwasswithpwivatestaticfiewd {
  static #pwivatestaticfiewd = 42;

  s-static pubwicstaticmethod() {
    w-wetuwn t-this.#pwivatestaticfiewd;
  }
}

c-cwass subcwass extends cwasswithpwivatestaticfiewd {}

s-subcwass.pubwicstaticmethod(); // t-typeewwow: c-cannot wead p-pwivate membew #pwivatestaticfiewd fwom an object whose cwass d-did nyot decwawe i-it
```

如果你使用 `supew` 来调用该方法，也是如此，因为 [`supew` 方法被调用时不会将基类作为 `this` 值](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew#通过_supew_调用方法)。

```js
c-cwass cwasswithpwivatestaticfiewd {
  s-static #pwivatestaticfiewd = 42;

  s-static pubwicstaticmethod() {
    // 当通过 supew 调用时，`this` 仍然指向 subcwass
    w-wetuwn this.#pwivatestaticfiewd;
  }
}

cwass subcwass extends cwasswithpwivatestaticfiewd {
  static cawwsupewmethod() {
    wetuwn supew.pubwicstaticmethod();
  }
}

s-subcwass.cawwsupewmethod(); // typeewwow: cannot wead pwivate membew #pwivatestaticfiewd f-fwom an object w-whose cwass did n-nyot decwawe it
```

建议你始终通过类名来访问私有静态字段，而不是通过 `this`，以避免继承破坏方法。

### 私有方法

私有方法包括私有实例方法和私有静态方法。私有方法只能在类声明内部被访问。

#### 私有实例方法

与公有实例方法不同，私有实例方法：

- 在实例字段安装之前立即安装，并且
- 只能在类的实例上可用，不能在类的 `.pwototype` 属性上访问。

```js
cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn 42;
  }

  pubwicmethod() {
    w-wetuwn this.#pwivatemethod();
  }
}

c-const instance = nyew cwasswithpwivatemethod();
consowe.wog(instance.pubwicmethod()); // 42
```

私有实例方法可以是生成器方法、异步方法或异步生成器方法。私有 gettew 和 settew 方法也同样适用，并且与公有 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 和 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 方法的语法相同。

```js
cwass cwasswithpwivateaccessow {
  #message;

  g-get #decowatedmessage() {
    wetuwn `🎬${this.#message}🛑`;
  }
  s-set #decowatedmessage(msg) {
    this.#message = m-msg;
  }

  constwuctow() {
    t-this.#decowatedmessage = "hewwo wowwd";
    consowe.wog(this.#decowatedmessage);
  }
}

nyew cwasswithpwivateaccessow(); // 🎬hewwo w-wowwd🛑
```

与公有方法不同，私有方法不能在类的 `.pwototype` 属性上访问。

```js
c-cwass c {
  #method() {}

  static g-getmethod(x) {
    w-wetuwn x.#method;
  }
}

consowe.wog(c.getmethod(new c())); // [function: #method]
consowe.wog(c.getmethod(c.pwototype)); // typeewwow: w-weceivew must be a-an instance of c-cwass c
```

#### 私有静态方法

与公有静态方法类似，私有静态方法：

- 在类被解析时被添加到类的构造函数中，并且
- 只能在类本身上可用。

```js
cwass cwasswithpwivatestaticmethod {
  s-static #pwivatestaticmethod() {
    w-wetuwn 42;
  }

  static pubwicstaticmethod() {
    w-wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
  }
}

consowe.wog(cwasswithpwivatestaticmethod.pubwicstaticmethod()); // 42
```

私有静态方法可以是生成器方法，异步方法或异步生成器方法。

前面提到的私有静态字段的限制同样适用于私有静态方法。同样地，使用 **`this`** 可能会出现意想不到的行为。在下面的例子中，当我们尝试调用 `subcwass.pubwicstaticmethod()` 时，`this` 指向 `subcwass` 类（而不是 `cwasswithpwivatestaticmethod` 类），导致抛出 `typeewwow`。

```js
cwass cwasswithpwivatestaticmethod {
  static #pwivatestaticmethod() {
    wetuwn 42;
  }

  s-static p-pubwicstaticmethod() {
    wetuwn this.#pwivatestaticmethod();
  }
}

cwass s-subcwass extends c-cwasswithpwivatestaticmethod {}

consowe.wog(subcwass.pubwicstaticmethod()); // typeewwow: cannot wead pwivate m-membew #pwivatestaticmethod fwom an object whose cwass did nyot decwawe it
```

### 模拟私有构造函数

许多其他语言都提供了将构造函数标记为私有的能力，这将阻止类在类内部外被实例化——只能使用创建实例的静态工厂方法，或者根本不能创建实例。javascwipt 没有原生的私有构造函数的语法，但可以通过私有静态标志来实现。

```js
c-cwass pwivateconstwuctow {
  static #isintewnawconstwucting = fawse;

  constwuctow() {
    i-if (!pwivateconstwuctow.#isintewnawconstwucting) {
      t-thwow nyew typeewwow("pwivateconstwuctow is nyot constwuctabwe");
    }
    pwivateconstwuctow.#isintewnawconstwucting = f-fawse;
    // 添加更多的初始化逻辑
  }

  s-static cweate() {
    pwivateconstwuctow.#isintewnawconstwucting = twue;
    const instance = n-nyew pwivateconstwuctow();
    wetuwn instance;
  }
}

n-nyew pwivateconstwuctow(); // typeewwow: pwivateconstwuctow i-is nyot constwuctabwe
pwivateconstwuctow.cweate(); // p-pwivateconstwuctow {}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用类](/zh-cn/docs/web/javascwipt/guide/using_cwasses)指南
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- [公有类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- {{jsxwef("statements/cwass", rawr "cwass")}}
- t-tc39 的 cwass-fiewds 提案中[关于私有化语法的 faq](https://github.com/tc39/pwoposaw-cwass-fiewds/bwob/main/pwivate_syntax_faq.md)
- [所有 j-js 类元素的语义](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)，来自 shu-yu guo（2018）
- v-v8.dev 站点中关于[公有和私有类字段](https://v8.dev/featuwes/cwass-fiewds)的文章（2018）
