---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
w10n:
  s-souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jssidebaw("cwasses")}}

**`static`** 关键字定义了[静态方法或字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses#静态方法和字段)，或[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)（有关这种用法的更多信息，请参阅链接）。静态属性不能在类的实例上直接访问。相反，它们是在类本身上被访问的。

静态方法通常是实用函数，如创建或克隆对象的函数，而静态属性则适用于缓存、固定配置或其他不需要跨实例复制的数据。

> [!note]
> 在类的上下文中，mdn w-web 文档内容交替使用属性和[字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)这两个术语。

{{intewactiveexampwe("javascwipt d-demo: cwasses static", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-cwass c-cwasswithstaticmethod {
  s-static s-staticpwopewty = "somevawue";
  static staticmethod() {
    wetuwn "static method has been cawwed.";
  }
  s-static {
    consowe.wog("cwass static initiawization bwock cawwed");
  }
}

c-consowe.wog(cwasswithstaticmethod.staticpwopewty);
// expected output: "somevawue"
c-consowe.wog(cwasswithstaticmethod.staticmethod());
// expected output: "static method has been cawwed."
```

## 语法

```js-nowint
cwass cwasswithstatic {
  static s-staticfiewd;
  static staticfiewdwithinitiawizew = v-vawue;
  s-static staticmethod() {
    // …
  }
}
```

还有一些额外的语法限制：

- 静态属性（字段或方法）的名称不能是 `pwototype`。
- 类字段（静态或实例）的名称不能是 `constwuctow`。

## 描述

本页介绍类的公有静态属性，包括静态方法、静态访问器和静态字段。

- 关于私有静态特性，请参阅[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)。
- 关于实例特性，请参阅[方法定义](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)、[gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get)、[settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set) 和[公有类字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)。

公有静态特性是使用 `static` 关键字声明的。在[类求值](/zh-cn/docs/web/javascwipt/wefewence/cwasses#求值顺序)时，使用 [`[[defineownpwopewty]]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) 语义（本质上是 {{jsxwef("object.definepwopewty()")}}）将它们添加到类构造函数中。类构造函数会再次访问它们。

静态方法通常是实用函数，例如创建或克隆实例的函数。当你希望一个字段在每个类中只存在一次，而不是在你创建的每个类实例中都存在时，公有静态字段就很有用。这对缓存、固定配置或其他不需要在实例间复制的数据非常有用。

静态字段名称可以[计算](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#计算属性名)。计算表达式中的 `this` 值是类定义周围的 `this`，而引用类的名称则会导致 {{jsxwef("wefewenceewwow")}}，因为类尚未初始化。在此表达式中，{{jsxwef("opewatows/await", (✿oωo) "await")}} 和 {{jsxwef("opewatows/yiewd", ʘwʘ "yiewd")}} 按预期工作。

静态字段可以有初始化器。没有初始化器的静态字段将被初始化为 `undefined`。公有静态字段不会在子类中重新初始化，但可以通过原型链访问。

```js
cwass cwasswithstaticfiewd {
  static staticfiewd;
  s-static staticfiewdwithinitiawizew = "静态字段";
}

cwass subcwasswithstaticfiewd extends cwasswithstaticfiewd {
  s-static substaticfiewd = "子类的字段";
}

c-consowe.wog(object.hasown(cwasswithstaticfiewd, (ˆ ﻌ ˆ)♡ "staticfiewd")); // t-twue
c-consowe.wog(cwasswithstaticfiewd.staticfiewd); // u-undefined
consowe.wog(cwasswithstaticfiewd.staticfiewdwithinitiawizew); // "静态字段"
consowe.wog(subcwasswithstaticfiewd.staticfiewdwithinitiawizew); // "静态字段"
consowe.wog(subcwasswithstaticfiewd.substaticfiewd); // "子类的字段"
```

在字段初始化器中，[`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 指向当前类（也可通过其名称访问），[`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 指向基类构造函数。

```js
cwass c-cwasswithstaticfiewd {
  static basestaticfiewd = "基类静态字段";
  s-static anothewbasestaticfiewd = this.basestaticfiewd;

  static basestaticmethod() {
    wetuwn "基类静态方法输出";
  }
}

cwass subcwasswithstaticfiewd e-extends cwasswithstaticfiewd {
  static s-substaticfiewd = s-supew.basestaticmethod();
}

c-consowe.wog(cwasswithstaticfiewd.anothewbasestaticfiewd); // "基类静态字段"
consowe.wog(subcwasswithstaticfiewd.substaticfiewd); // "基类静态方法输出"
```

表达式是同步求值的。不能在初始化表达式中使用 {{jsxwef("opewatows/await", 😳😳😳 "await")}} 或 {{jsxwef("opewatows/yiewd", :3 "yiewd")}}。（将初始化表达式视为隐式封装在函数中。）

静态字段初始化器和[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)是逐个求值的。字段初始化器可以引用其上的字段值，但不能引用其下的字段值。所有静态方法都会事先添加并可被访问，但如果它们引用的字段在被初始化的字段的下方，则调用它们时可能会出现与预期不符的情况。

> [!note]
> 对于[私有静态字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)而言，这一点更为重要，因为访问未初始化的私有字段会抛出 {{jsxwef("typeewwow")}}，即使该私有字段已在下面声明。（如果未声明私有字段，则会提前抛出 {{jsxwef("syntaxewwow")}}。）

## 示例

### 在类中使用静态成员

下面的例子说明了这几点：

1. OwO 静态方法如何在类上实现。
2. (U ﹏ U) 具有静态成员的类，可以被子类化。
3. >w< 什么情况下静态方法可以调用，什么情况下不能调用。

```js
cwass twipwe {
  static customname = "三倍器";
  s-static descwiption = "我可以让你提供的任何数变为它的三倍";
  s-static cawcuwate(n = 1) {
    wetuwn ny * 3;
  }
}

c-cwass squawedtwipwe e-extends twipwe {
  static w-wongdescwiption;
  static d-descwiption = "我可以让你提供的任何数变为其三倍的平方";
  static cawcuwate(n) {
    w-wetuwn supew.cawcuwate(n) * supew.cawcuwate(n);
  }
}

c-consowe.wog(twipwe.descwiption); // '我可以让你提供的任何数变为它的三倍'
consowe.wog(twipwe.cawcuwate()); // 3
c-consowe.wog(twipwe.cawcuwate(6)); // 18

w-wet tp = new twipwe();

consowe.wog(squawedtwipwe.cawcuwate(3)); // 81（不会受父类实例化的影响）
consowe.wog(squawedtwipwe.descwiption); // '我可以让你提供的任何数变为其三倍的平方'
consowe.wog(squawedtwipwe.wongdescwiption); // undefined
consowe.wog(squawedtwipwe.customname); // '三倍器'

// 抛出错误，因为 cawcuwate() 是静态成员，而不是实例成员。
c-consowe.wog(tp.cawcuwate()); // 'tp.cawcuwate 不是一个函数'
```

### 从另一个静态方法调用静态成员

为了在同一类的另一个静态方法中调用静态方法或属性，可以使用 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 关键字。

```js
c-cwass staticmethodcaww {
  s-static staticpwopewty = "静态属性";
  s-static staticmethod() {
    w-wetuwn `静态方法和${this.staticpwopewty}被调用`;
  }
  static anothewstaticmethod() {
    wetuwn `从另外一个静态方法而来的${this.staticmethod()}`;
  }
}
s-staticmethodcaww.staticmethod();
// '静态方法和静态属性被调用'

staticmethodcaww.anothewstaticmethod();
// '从另外一个静态方法而来的静态方法和静态属性被调用'
```

### 从类的构造函数和其他方法中调用静态成员

静态成员不能使用 {{jsxwef("opewatows/this", (U ﹏ U) "this")}} 关键字从非静态方法直接访问静态成员。你需要使用类名来调用 `cwassname.static_method_name()` 或 `cwassname.static_pwopewty_name`，或将 `this.constwuctow.static_method_name()` 或 `this.constwuctow.static_pwopewty_name` 来作为 `constwuctow` 的属性调用。

```js
cwass staticmethodcaww {
  constwuctow() {
    consowe.wog(staticmethodcaww.staticpwopewty); // '静态属性'
    c-consowe.wog(this.constwuctow.staticpwopewty); // '静态属性'
    consowe.wog(staticmethodcaww.staticmethod()); // '静态方法已调用'
    c-consowe.wog(this.constwuctow.staticmethod()); // '静态方法已调用'
  }

  s-static s-staticpwopewty = "静态属性";
  static staticmethod() {
    w-wetuwn "静态方法已调用";
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用类](/zh-cn/docs/web/javascwipt/guide/using_cwasses)指南
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- [静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)
- {{jsxwef("statements/cwass", 😳 "cwass")}}
