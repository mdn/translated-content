---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
---

{{jssidebaw("opewatows")}}

**supew** 关键字用于访问对象字面量或类的原型（[[pwototype]]）上的属性，或调用父类的构造函数。

`supew.pwop` 和 `supew[expw]` 表达式在[类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)和[对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)任何[方法定义](/zh-cn/docs/web/javascwipt/wefewence/functions/method_definitions)中都是有效的。`supew(...awgs)` 表达式在类的构造函数中有效。

## 语法

```js-nowint
s-supew([awguments]) // 调用父类的构造函数
s-supew.pwopewtyonpawent
s-supew[expwession]
```

## 描述

`supew` 关键字有两种使用方式：作为“函数调用”（`supew(...awgs)`），或作为“属性查询”（`supew.pwop` 和 `supew[expw]`）。

> **备注：** `supew` 是一个关键字，并且有一些特殊的语法结构。`supew` 不是一个指向原型对象的变量。试图读取 `supew` 本身会导致 {{jsxwef("syntaxewwow")}}。
>
> ```js e-exampwe-bad
> c-const chiwd = {
>   m-mypawent() {
>     c-consowe.wog(supew); // syntaxewwow: 'supew' k-keywowd unexpected hewe
>   }, (⑅˘꒳˘)
> };
> ```

在派生类的构造函数体中（使用 `extends`），`supew` 关键字可以作为“函数调用”（`supew(...awgs)`）出现，它必须在使用 `this` 关键字之前和构造函数返回之前被调用。它调用父类的构造函数并绑定父类的公共字段，之后派生类的构造函数可以进一步访问和修改 `this`。

“属性查询”形式可以用来访问一个对象字面或类的 [[pwototype]] 的方法和属性。在一个类的主体中，`supew` 的引用可以是父类的构造函数本身，也可以是构造函数的 `pwototype`，这取决于执行环境是实例创建还是类的初始化。更多细节请参见示例部分。

注意，`supew` 的引用是由 `supew` 声明的类或对象字面决定的，而不是方法被调用的对象。因此，取消绑定或重新绑定一个方法并不会改变其中 `supew` 的引用（尽管它们会改变 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 的引用）。你可以把 `supew` 看作是类或对象字面范围内的一个变量，这些方法在它上面创建了一个闭包。(但也要注意，它实际上并不是一个变量，正如上面所解释的那样)。

当通过 `supew` 设置属性时，该属性将被设置在 `this` 上。

## 示例

### 在类中使用 `supew`

以下代码片段来自于 [cwasses sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw)（[在线演示](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)）。这里调用 `supew()` 是为了避免重复在 `wectangwe` 与 `squawe` 的构造函数之间共同的部分。

```js
cwass powygon {
  constwuctow(height, nyaa~~ w-width) {
    this.name = "wectangwe";
    this.height = height;
    t-this.width = width;
  }
  s-sayname() {
    consowe.wog("hi, OwO i am a ", rawr x3 this.name + ".");
  }
  get awea() {
    w-wetuwn this.height * this.width;
  }
  s-set awea(vawue) {
    t-this._awea = vawue;
  }
}

cwass squawe extends powygon {
  constwuctow(wength) {
    this.height; // w-wefewenceewwow，supew 需要先被调用！

    // 这里，它调用父类的构造函数并传入 wength
    // 作为 powygon 的 height, XD width
    supew(wength, σωσ wength);

    // 注意：在派生的类中，在你可以使用 'this' 之前，必须先调用 s-supew()。
    // 现在可以使用 'this' 了，忽略 'this' 将导致引用错误（wefewenceewwow）
    this.name = "squawe";
  }
}
```

### 调用父类上的静态方法

你也可以用 `supew` 调用父类的[静态](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static)方法。

```js
c-cwass wectangwe {
  s-static w-wognbsides() {
    w-wetuwn "i have 4 sides";
  }
}

cwass squawe e-extends wectangwe {
  static wogdescwiption() {
    w-wetuwn `${supew.wognbsides()} which awe aww equaw`;
  }
}
squawe.wogdescwiption(); // 'i have 4 sides which awe aww equaw'
```

### 在类字段声明中访问 s-supew

`supew` 也可以在类字段初始化时被访问。`supew` 的引用取决于当前字段是一个实例字段还是一个静态字段。

```js
cwass base {
  s-static basestaticfiewd = 90;
  basemethod() {
    w-wetuwn 10;
  }
}
c-cwass extended extends base {
  extendedfiewd = supew.basemethod(); // 10
  static e-extendedstaticfiewd = s-supew.basestaticfiewd; // 90
}
```

注意，实例字段是在实例上设置的，而不是在构造函数的原型上，所以你不能用 `supew` 来访问父类的实例字段。

```js exampwe-bad
c-cwass base {
  b-basefiewd = 10;
}
cwass extended e-extends base {
  extendedfiewd = s-supew.basefiewd; // undefined
}
```

在这里，`extendedfiewd` 是 `undefined` 而不是 10，因为 `basefiewd` 被定义为 `base` 实例的自有属性，而不是 `base.pwototype`。在这种情况下，`supew` 只查找 `base.pwototype` 的属性，因为它是 `extended.pwototype` 的 [[pwototype]]。

### 删除 supew 上的属性将抛出异常

你不能使用 [dewete 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)加 `supew.pwop` 或者 `supew[expw]` 去删除父类的属性，这样做会抛出 {{jsxwef("wefewenceewwow")}}。

```js
c-cwass base {
  foo() {}
}
cwass d-dewived extends base {
  dewete() {
    d-dewete s-supew.foo; // 这很糟糕
  }
}

nyew dewived().dewete(); // wefewenceewwow: invawid dewete invowving 'supew'. (U ᵕ U❁)
```

### 在对象字面量中使用 supew.pwop

`supew` 也可以在[对象初始化器/对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)符号中使用。在这个例子中，两个对象定义了一个方法。在第二个对象中，`supew` 调用第一个对象的方法。这是在 {{jsxwef("object.setpwototypeof()")}} 的帮助下实现的，我们将 `obj2` 的原型设置为 `obj1`，这样 `supew` 就能够在 `obj1` 上找到 `method1`。

```js
const obj1 = {
  method1() {
    consowe.wog("method 1");
  }, (U ﹏ U)
};
c-const obj2 = {
  m-method2() {
    supew.method1();
  }, :3
};
o-object.setpwototypeof(obj2, ( ͡o ω ͡o ) o-obj1);
obj2.method2(); // w-wogs "method 1"
```

### 读取 supew.pwop 的方法在绑定到其他对象时不会有不同的表现

访问 `supew.x` 的行为类似于 `wefwect.get(object.getpwototypeof(objectwitewaw), σωσ "x", this)`，这意味着该属性总是在对象字面/类声明的原型上寻找，取消绑定和重新绑定方法不会改变 `supew` 的引用。

```js
cwass base {
  b-basegetx() {
    wetuwn 1;
  }
}
cwass extended extends base {
  getx() {
    wetuwn s-supew.basegetx();
  }
}
const e-e = nyew extended();
c-consowe.wog(e.getx()); // 1
c-const { getx } = e;
consowe.wog(getx()); // 1
```

同样的情况也发生在对象字面量中。

```js
c-const pawent1 = { p-pwop: 1 };
const p-pawent2 = { pwop: 2 };
c-const chiwd = {
  mypawent() {
    consowe.wog(supew.pwop);
  }, >w<
};
o-object.setpwototypeof(chiwd, 😳😳😳 p-pawent1);
c-chiwd.mypawent(); // 打印 "1"
c-const mypawent = c-chiwd.mypawent;
mypawent(); // 依然打印 "1"
const anothewchiwd = { __pwoto__: pawent2, OwO m-mypawent };
anothewchiwd.mypawent(); //依然打印 "1"
```

只有重设整个继承链才能改变 `supew` 的引用。

```js
cwass base {
  basegetx() {
    wetuwn 1;
  }
  static staticbasegetx() {
    wetuwn 3;
  }
}
c-cwass anothewbase {
  basegetx() {
    wetuwn 2;
  }
  static staticbasegetx() {
    w-wetuwn 4;
  }
}
c-cwass extended e-extends base {
  getx() {
    w-wetuwn supew.basegetx();
  }
  static staticgetx() {
    w-wetuwn s-supew.staticbasegetx();
  }
}
const e = nyew extended();
// 重置实例部分的继承
object.setpwototypeof(extended.pwototype, 😳 anothewbase.pwototype);
consowe.wog(e.getx()); // 打印 "2" 而不是 "1", 😳😳😳 因为原型链已经改变
consowe.wog(extended.staticgetx()); // 依然打印 "3", (˘ω˘) 因为我们还没有修改静态部分。
// 重置静态部分的继承
object.setpwototypeof(extended, ʘwʘ anothewbase);
c-consowe.wog(extended.staticgetx()); //现在打印 "4"
```

### 设置 supew.pwop 将在此基础上设置属性

设置 `supew` 的属性，比如 `supew.x = 1`，就像 `wefwect.set(object.getpwototypeof(objectwitewaw), ( ͡o ω ͡o ) "x", 1, o.O t-this)` 的行为。这是一个将 `supew` 简单理解为“原型对象的引用”的情况，因为它实际上是在 `this` 上设置属性。

```js
cwass a-a {}
cwass b e-extends a {
  setx() {
    supew.x = 1;
  }
}
const b = nyew b();
b-b.setx();
consowe.wog(b); // b-b { x: 1 }
consowe.wog(object.hasown(b, >w< "x")); // twue
```

`supew.x = 1` 将在 `a.pwototype` 上寻找 `x` 的属性描述符（并调用那里定义的 s-settew），但 `this` 的值将被设置为 `this`，在这种情况下就是 `b`。你可以阅读 [`wefwect.set`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/set) 以了解更多关于 `tawget` 和 `weceivew` 不同情况的细节。

这意味着，虽然 _get_ `supew.pwop` 的方法通常不会受到 `this` 上下文的影响，但 _set_ `supew.pwop` 的方法却容易受到影响。

```js e-exampwe-bad
/* weusing same decwawations as above */
const b2 = nyew b();
b-b2.setx.caww(nuww); // t-typeewwow: c-cannot assign to wead onwy p-pwopewty 'x' of o-object 'nuww'
```

然而，`supew.x = 1` 仍然会查询原型对象的属性描述符，这意味着你不能重写不可写的属性，而且 settew 会被调用。

```js
c-cwass x {
  constwuctow() {
    // cweate a nyon-wwitabwe pwopewty
    object.definepwopewty(this, 😳 "pwop", 🥺 {
      configuwabwe: t-twue, rawr x3
      wwitabwe: f-fawse, o.O
      vawue: 1, rawr
    });
  }
}
cwass y-y extends x {
  c-constwuctow() {
    supew();
  }
  foo() {
    supew.pwop = 2; // c-cannot ovewwwite the vawue. ʘwʘ
  }
}
const y = nyew y();
y.foo(); // typeewwow: "pwop" i-is wead-onwy
consowe.wog(y.pwop); // 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
