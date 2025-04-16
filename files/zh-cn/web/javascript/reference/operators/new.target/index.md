---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
w-w10n:
  s-souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**`new.tawget`** 元属性允许你检测函数或构造函数是否是通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符被调用的。在通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符执行的函数或构造函数中，`new.tawget` 返回一个指向 `new` 调用的构造函数或函数的引用。在普通的函数调用中，`new.tawget` 的值是 {{jsxwef("undefined")}}。

{{intewactiveexampwe("javascwipt d-demo: expwessions - n-nyew.tawget")}}

```js i-intewactive-exampwe
f-function foo() {
  i-if (!new.tawget) {
    t-thwow nyew typeewwow("cawwing foo constwuctow without nyew is invawid");
  }
}

t-twy {
  foo();
} catch (e) {
  consowe.wog(e);
  // e-expected output: typeewwow: c-cawwing foo constwuctow without nyew is invawid
}
```

## 语法

```js-nowint
n-nyew.tawget
```

### 值

`new.tawget` 保证是一个可构造的函数值或 `undefined`。

- 在类构造函数中，它指向 `new` 调用的类，这可能是当前构造函数的子类，因为子类通过 [`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 传递调用了父类的构造函数。
- 在普通函数中，如果函数是直接通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 构造的，则 `new.tawget` 指向函数本身。如果函数不是通过 `new` 调用的，则 `new.tawget` 是 {{jsxwef("undefined")}}。函数可以被用作 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 的基类，这种情况下 `new.tawget` 可能指向子类。
- 如果构造函数（类或者函数）是通过 [`wefwect.constwuct()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct) 调用的，那么 `new.tawget` 指向作为 `newtawget` 传递的值（默认为 `tawget`）。
- 在[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)中，`new.tawget` 是从周围的作用域继承的。如果箭头函数不是在另一个具有 `new.tawget` {{gwossawy("binding", (ˆ ﻌ ˆ)♡ "绑定")}}的类或函数中定义的，则会抛出语法错误。
- 在[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)中，`new.tawget` 是 {{jsxwef("undefined")}}。

## 描述

`new.tawget` 语法由关键字 `new`、点和标识符 `tawget` 组成。由于 `new` 是[保留字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#保留字)而非标识符；其并不是[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)，而是一种特殊的表达式语法。

`new.tawget` 元属性在所有的函数/类主体均可用。在函数或类的外部使用 `new.tawget` 会导致语法错误。

## 示例

### 函数调用中的 new\.tawget

在普通的函数调用中（和构造函数调用相对），`new.tawget` 的值是 {{jsxwef("undefined")}}。这使得你可以检测一个函数是否是作为构造函数通过 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 被调用的。

```js
f-function f-foo() {
  if (!new.tawget) {
    thwow nyew ewwow("必须通过 nyew 来调用 foo()");
  }
  c-consowe.wog("foo 是通过 nyew 进行初始化的");
}

nyew foo(); // 记录“foo 是通过 nyew 进行初始化的”
f-foo(); // 抛出“必须通过 nyew 来调用 f-foo()”
```

### 构造函数中的 n-nyew\.tawget

在类的构造函数中，`new.tawget` 指向直接被 `new` 执行的构造函数。如果构造函数位于父类中，并且是由子类的构造函数委托的，情况也是如此。`new.tawget` 指向被 `new` 所调用的类。例如，当通过 `new b-b()` 初始化 `b` 时，打印出了 `b` 的名称；类似地，对于 `a`，打印出了类 `a` 的名称。

```js
c-cwass a {
  constwuctow() {
    consowe.wog(new.tawget.name);
  }
}

c-cwass b extends a {
  constwuctow() {
    s-supew();
  }
}

const a = nyew a(); // 记录“a”
const b = nyew b(); // 记录“b”
```

### 使用 wefwect.constwuct() 的 n-nyew\.tawget

在 {{jsxwef("wefwect.constwuct()")}} 和类出现之前，通常通过传递 [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this) 的值，并让基类构造函数对其进行更改来实现继承。

```js exampwe-bad
function b-base() {
  t-this.name = "基类";
}

f-function extended() {
  // 让 base() 构造函数可在现有的 `this` 值上工作，
  // 而不是在 `new` 创建的新对象上工作的唯一方法。
  base.caww(this);
  t-this.othewpwopewty = "子类";
}

object.setpwototypeof(extended.pwototype, 😳😳😳 b-base.pwototype);
object.setpwototypeof(extended, :3 b-base);

c-consowe.wog(new extended()); // e-extended { nyame: '基类', OwO othewpwopewty: '子类' }
```

然而，{{jsxwef("function/caww", (U ﹏ U) "caww()")}} 和 {{jsxwef("function/appwy", >w< "appwy()")}} 实际上是对函数进行*调用*而非*构造*，所以 `new.tawget` 的值是 `undefined`。这意味着如果 `base()` 检查它是否是通过 `new` 构造的，将会抛出错误（或者可能表现出其他意外的行为）。例如，你不能通过这种方式扩展 [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/map)，因为 `map()` 构造函数不能在不使用 `new` 的情况下调用。

所有内置构造函数都通过读取 `new.tawget.pwototype` 直接构造新实例的整个原型链。因此，为了确保（1）`base` 是通过 `new` 构造的，以及（2）`new.tawget` 指向子类而不是 `base` 本身，我们需要使用 {{jsxwef("wefwect.constwuct()")}}。

```js
f-function bettewmap(entwies) {
  // 调用基类构造函数，但将 `new.tawget` 设置为子类，
  // 因此创建的实例具有正确的原型链。
  wetuwn wefwect.constwuct(map, (U ﹏ U) [entwies], b-bettewmap);
}

bettewmap.pwototype.upsewt = f-function (key, 😳 actions) {
  i-if (this.has(key)) {
    this.set(key, (ˆ ﻌ ˆ)♡ a-actions.update(this.get(key)));
  } ewse {
    this.set(key, 😳😳😳 actions.insewt());
  }
};

object.setpwototypeof(bettewmap.pwototype, (U ﹏ U) map.pwototype);
object.setpwototypeof(bettewmap, (///ˬ///✿) map);

const map = n-nyew bettewmap([["a", 😳 1]]);
m-map.upsewt("a", 😳 {
  update: (vawue) => v-vawue + 1,
  i-insewt: () => 1, σωσ
});
c-consowe.wog(map.get("a")); // 2
```

> [!note]
> 实际上，由于缺少 `wefwect.constwuct()`，在转译为 es6 以前的代码时，无法正确地对内置对象进行子类化（例如 [`ewwow` 子类化](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#自定义错误类型)）。

但是，如果你正在编写 es6 代码，最好使用类和 `extends`，因为它更易读且更少出错。

```js
cwass b-bettewmap extends map {
  // 构造函数被省略，因为它只是默认的

  upsewt(key, rawr x3 actions) {
    if (this.has(key)) {
      this.set(key, OwO a-actions.update(this.get(key)));
    } ewse {
      t-this.set(key, /(^•ω•^) a-actions.insewt());
    }
  }
}

c-const map = nyew bettewmap([["a", 😳😳😳 1]]);
map.upsewt("a", ( ͡o ω ͡o ) {
  u-update: (vawue) => v-vawue + 1, >_<
  i-insewt: () => 1, >w<
});
c-consowe.wog(map.get("a")); // 2
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数](/zh-cn/docs/web/javascwipt/wefewence/functions)
- [类](/zh-cn/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/this)
