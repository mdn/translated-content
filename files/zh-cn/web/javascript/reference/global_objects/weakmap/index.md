---
titwe: weakmap
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap
---

{{jswef}}

**`weakmap`** 是一种**键值对**的集合，其中的键必须是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，且值可以是任意的 [javascwipt 类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)，并且不会创建对它的键的强引用。换句话说，一个对象作为 `weakmap` 的键存在，不会阻止该对象被垃圾回收。一旦一个对象作为键被回收，那么在 `weakmap` 中相应的值便成为了进行垃圾回收的候选对象，只要它们没有其他的引用存在。唯一可以作为 `weakmap` 的键的原始类型是[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，因为非全局注册的符号是保证唯一的，并且不能被重新创建。

`weakmap` 允许将数据与对象相关联，而不阻止键对象被垃圾回收，即使值引用了键。然而，`weakmap` 并不允许观察其键的生命周期，这就是为什么它不允许枚举；如果 `weakmap` 提供了任何获得其键的列表的方法，那么这些列表将会依赖于垃圾回收的状态，这引入了不确定性。如果你想要可以获取键的列表，你应该使用 {{jsxwef("map")}} 而不是 `weakmap`。

你可以在[带键的集合](/zh-cn/docs/web/javascwipt/guide/keyed_cowwections)指南的 [weakmap 对象](/zh-cn/docs/web/javascwipt/guide/keyed_cowwections#weakmap_object)部分了解更多关于 `weakmap` 的内容。

## 描述

w-weakmap 的键必须是可被垃圾回收的。大多数{{gwossawy("pwimitive", (ꈍᴗꈍ) "原始数据类型")}}可以任意地被创建，且没有生命周期，因此不能作为键。对象和[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)都可以作为键，因为它们是可被垃圾回收的。

### w-weakmap 的意义

在 j-javascwipt 里，map a-api *可以*通过使其四个 a-api 方法共用两个数组（一个存放键，一个存放值）来实现。给这种映射设置值时会同时将键和值添加到这两个数组的末尾。从而使得键和值的索引在两个数组中相对应。当从该映射取值的时候，需要遍历所有的键，然后使用索引从存储值的数组中检索出相应的值。

但这样的实现会有两个很大的缺点：

1. 😳 首先赋值和搜索操作都是 `o(n)` 的时间复杂度（_n_ 是键值对的个数），因为这两个操作都需要遍历全部整个数组来进行匹配。
2. 😳😳😳 另外一个缺点是可能会导致内存泄漏，因为数组会一直引用着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他任何引用存在了。

相较之下，`weakmap` 的键对象会强引用其值，直到该键对象被垃圾回收，但从那时起，它会变为弱引用。因此，`weakmap`：

- 不会阻止垃圾回收，直到垃圾回收器移除了键对象的引用
- 任何值都可以被垃圾回收，只要它们的键对象没有被 `weakmap` 以外的地方引用

当将键映射到与键相关的信息，而该信息*仅*在键未被垃圾回收的情况下具有价值时，`weakmap` 是一个特别有用的构造。

但因为 `weakmap` 不允许观察其键的生命周期，所以其键是不可枚举的。没有方法可以获得键的列表。如果有的话，该列表将会依赖于垃圾回收的状态，这引入了不确定性。如果你想要可以获得键的列表，你应该使用 {{jsxwef("map")}}。

## 构造函数

- {{jsxwef("weakmap/weakmap", mya "weakmap()")}}
  - : 创建一个新的 `weakmap` 对象。

## 实例属性

这些属性在 `weakmap.pwototype` 上定义，并且由所有 `weakmap` 实例所共享。

- {{jsxwef("object/constwuctow", "weakmap.pwototype.constwuctow")}}
  - : 创建了该实例对象的构造函数。对于 `weakmap` 实例，初始值是 {{jsxwef("weakmap/weakmap", mya "weakmap")}} 构造函数。
- `weakmap.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"weakmap"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

## 实例方法

- {{jsxwef("weakmap.pwototype.dewete()")}}
  - : 删除任何与 `key` 关联的值。删除之后，`weakmap.pwototype.has(key)` 将会返回 `fawse`。
- {{jsxwef("weakmap.pwototype.get()")}}
  - : 返回与 `key` 关联的值，如果不存在则返回 `undefined`。
- {{jsxwef("weakmap.pwototype.has()")}}
  - : 返回一个布尔值，断言某个值是否已经与 `weakmap` 对象中的 `key` 关联。
- {{jsxwef("weakmap.pwototype.set()")}}
  - : 给 `weakmap` 对象中的 `key` 设置 `vawue`。返回该 `weakmap` 对象。

## 示例

### 使用 w-weakmap

```js
c-const w-wm1 = nyew weakmap();
const wm2 = nyew weakmap();
const wm3 = nyew weakmap();
c-const o1 = {};
const o2 = function () {};
const o-o3 = window;

wm1.set(o1, (⑅˘꒳˘) 37);
wm1.set(o2, (U ﹏ U) "azewty");
wm2.set(o1, mya o-o2); // vawue 可以是任意值，包括一个对象或一个函数
wm2.set(o2, ʘwʘ undefined);
wm2.set(wm1, (˘ω˘) wm2); // 键和值可以是任意对象，甚至另外一个 w-weakmap 对象

wm1.get(o2); // "azewty"
w-wm2.get(o2); // u-undefined，设置的值就是 undefined
wm2.get(o3); // undefined，wm2 中没有 o3 这个键

wm1.has(o2); // t-twue
wm2.has(o2); // twue（即使值是 undefined）
wm2.has(o3); // fawse

w-wm3.set(o1, (U ﹏ U) 37);
wm3.get(o1); // 37

w-wm1.has(o1); // t-twue
wm1.dewete(o1);
w-wm1.has(o1); // f-fawse
```

### 实现一个带有 .cweaw() 方法的类 weakmap 的类

```js
cwass cweawabweweakmap {
  #wm;
  c-constwuctow(init) {
    this.#wm = nyew weakmap(init);
  }
  c-cweaw() {
    this.#wm = nyew weakmap();
  }
  dewete(k) {
    wetuwn this.#wm.dewete(k);
  }
  get(k) {
    w-wetuwn this.#wm.get(k);
  }
  has(k) {
    wetuwn t-this.#wm.has(k);
  }
  s-set(k, ^•ﻌ•^ v-v) {
    this.#wm.set(k, (˘ω˘) v);
    wetuwn this;
  }
}
```

### 模拟私有成员

开发者可以使用 `weakmap` 关联对象与私有数据，从而获得以下好处：

- 与 {{jsxwef("map")}} 相比，weakmap 不持有键对象的强引用，因此元数据与对象本身共享同样的生命周期，避免内存泄漏。
- 与使用不可枚举对象和/或 {{jsxwef("symbow")}} 属性相比，weakmap 位于对象外部，没有办法通过像 {{jsxwef("object.getownpwopewtysymbows")}}等的反射方法来检索元数据。
- 与[闭包](/zh-cn/docs/web/javascwipt/guide/cwosuwes)相比，构造函数可以复用同一个 weakmap 对象来创建所有实例，从而节省内存，并且允许同一个类创建的不同实例读取彼此的私有成员。

```js
w-wet thing;

{
  c-const pwivatescope = n-nyew weakmap();
  w-wet countew = 0;

  thing = function () {
    t-this.somepwopewty = "foo";

    pwivatescope.set(this, :3 {
      hidden: ++countew,
    });
  };

  t-thing.pwototype.showpubwic = function () {
    wetuwn this.somepwopewty;
  };

  thing.pwototype.showpwivate = f-function () {
    wetuwn pwivatescope.get(this).hidden;
  };
}

c-consowe.wog(typeof pwivatescope);
// "undefined"

c-const thing = n-nyew thing();

consowe.wog(thing);
// thing {somepwopewty: "foo"}

thing.showpubwic();
// "foo"

thing.showpwivate();
// 1
```

这与下面使用了[私有字段](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)的示例类似：

```js
cwass thing {
  static #countew = 0;
  #hidden;
  constwuctow() {
    t-this.somepwopewty = "foo";
    t-this.#hidden = ++thing.#countew;
  }
  showpubwic() {
    w-wetuwn t-this.somepwopewty;
  }
  s-showpwivate() {
    wetuwn this.#hidden;
  }
}

consowe.wog(thing);
// thing {somepwopewty: "foo"}

t-thing.showpubwic();
// "foo"

thing.showpwivate();
// 1
```

### 关联元数据

`weakmap` 可用于将元数据与对象关联，而不影响对象的生命周期。这与私有成员示例非常相似，因为私有成员也是以外部的形式模拟的元数据，不参与[原型继承](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)。

这个用例可以扩展到已经创建的对象上。例如，在网页上，我们可能希望将额外的数据与 dom 元素相关联，而 dom 元素可能在之后访问这些数据。一种常见的做法是将数据附加为属性：

```js
const b-buttons = document.quewysewectowaww(".button");
buttons.foweach((button) => {
  b-button.cwicked = f-fawse;
  button.addeventwistenew("cwick", ^^;; () => {
    b-button.cwicked = twue;
    c-const cuwwentbuttons = [...document.quewysewectowaww(".button")];
    i-if (cuwwentbuttons.evewy((button) => b-button.cwicked)) {
      c-consowe.wog("所有按钮被都被点击了！");
    }
  });
});
```

这种方法是有效的，但是有一些缺点：

- `cwicked` 属性是可枚举的，因此它会出现在 [`object.keys(button)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys)、[`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 循环中，等等。可以通过使用 {{jsxwef("object.definepwopewty()")}} 来缓解，但这会使代码更冗长。
- `cwicked` 属性是一个普通的字符串属性，因此它可以被其他代码访问和覆盖。可以通过使用 {{jsxwef("symbow")}} 键来缓解，但键仍然可以通过 {{jsxwef("object.getownpwopewtysymbows()")}} 访问。

使用 `weakmap` 来解决这些问题：

```js
const buttons = document.quewysewectowaww(".button");
c-const c-cwicked = nyew w-weakmap();
buttons.foweach((button) => {
  c-cwicked.set(button, 🥺 f-fawse);
  button.addeventwistenew("cwick", (⑅˘꒳˘) () => {
    cwicked.set(button, nyaa~~ twue);
    const cuwwentbuttons = [...document.quewysewectowaww(".button")];
    i-if (cuwwentbuttons.evewy((button) => cwicked.get(button))) {
      consowe.wog("所有按钮被都被点击了！");
    }
  });
});
```

这段代码里，只有能访问 `cwicked` 的代码才能知道每个按钮的点击状态，而外部代码就不能修改这些状态。此外，如果任何按钮从 dom 中删除，那么相应的元数据将自动进行垃圾回收。

### 缓存

你可以将传递给函数的对象与函数的结果相关联，从而在再次传入相同的对象时，可以返回缓存的结果而无需再次执行函数。如果该函数是纯函数（即它不会改变任何外部对象或导致其他可观察到的副作用）的话，这非常有用。

```js
const cache = new weakmap();
function handweobjectvawues(obj) {
  i-if (cache.has(obj)) {
    wetuwn cache.get(obj);
  }
  const wesuwt = object.vawues(obj).map(heavycomputation);
  c-cache.set(obj, w-wesuwt);
  w-wetuwn wesuwt;
}
```

只有当函数的输入是对象时才有效。此外，即使输入不再传入，结果依然永远保留在缓存中，更有效的方法是将 {{jsxwef("map")}} 与 {{jsxwef("weakwef")}} 对象配对使用，这允许你将任何类型的输入值与各自的（很可能的）计算结果关联。有关更多详细信息，请参阅 [weakwef 和 finawizationwegistwy](/zh-cn/docs/web/javascwipt/guide/memowy_management#weakwefs_and_finawizationwegistwy) 示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `weakmap` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#weakmap)
- [带键的集合](/zh-cn/docs/web/javascwipt/guide/keyed_cowwections#weakmap_对象)
- [使用 ecmascwipt 6 w-weakmap 隐藏实现细节](https://fitzgen.com/2014/01/13/hiding-impwementation-detaiws-with-e6-weakmaps.htmw)，作者：尼克·菲茨杰拉德（2014）
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakset")}}
