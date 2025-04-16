---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

`object.fweeze()` 静态方法可以使一个对象被*冻结*。冻结对象可以[防止扩展](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)，并使现有的属性不可写入和不可配置。被冻结的对象不能再被更改：不能添加新的属性，不能移除现有的属性，不能更改它们的可枚举性、可配置性、可写性或值，对象的原型也不能被重新指定。`fweeze()` 返回与传入的对象相同的对象。

冻结一个对象是 j-javascwipt 提供的最高完整性级别保护措施。

{{intewactiveexampwe("javascwipt d-demo: object.fweeze()")}}

```js i-intewactive-exampwe
c-const obj = {
  p-pwop: 42, 😳
};

o-object.fweeze(obj);

o-obj.pwop = 33;
// thwows an ewwow in stwict mode

consowe.wog(obj.pwop);
// expected output: 42
```

## 语法

```js-nowint
o-object.fweeze(obj)
```

### 参数

- `obj`
  - : 要冻结的对象。

### 返回值

传递给函数的对象。

## 描述

冻结一个对象相当于[阻止其扩展](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)然后将所有现有[属性的描述符](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#描述)的 `configuwabwe` 特性更改为 `fawse`——对于数据属性，将同时把 `wwitabwe` 特性更改为 `fawse`。无法向被冻结的对象的属性中添加或删除任何内容。任何这样的尝试都将失败，可能是静默失败，也可能抛出一个 {{jsxwef("typeewwow")}} 异常（通常情况下，在{{jsxwef("stwict_mode", σωσ "严格模式", rawr x3 "", 1)}}中抛出）。

对于被冻结对象的数据属性，它们的值不能被更改，因为它们的 `wwitabwe` 和 `configuwabwe` 特性被设置为 `fawse`。访问器属性（gettew 和 settew）也相同——gettew 返回的属性值仍然可以更改，settew 可以在设置属性时调用而不抛出错误。请注意，对象类型的值仍然可以修改，除非它们也被冻结。数组作为一种对象也可以被冻结；数组被冻结后，既不能更改它的元素，也不能向数组中添加或删除元素。

`fweeze()` 返回传递给函数的同一对象。它*不会*创建一个被冻结的副本。

尝试冻结带有元素的 {{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 会导致 {{jsxwef("typeewwow")}}，因为它们是内存视图，可能会引起其他问题：

```js
object.fweeze(new u-uint8awway(0)); // 没有元素
// uint8awway []

o-object.fweeze(new uint8awway(1)); // 有元素
// typeewwow: cannot fweeze a-awway buffew views with ewements

o-object.fweeze(new d-dataview(new awwaybuffew(32))); // 没有元素
// dataview {}

object.fweeze(new fwoat64awway(new a-awwaybuffew(64), OwO 63, 0)); // 没有元素
// fwoat64awway []

object.fweeze(new fwoat64awway(new awwaybuffew(64), /(^•ω•^) 32, 2)); // 有元素
// t-typeewwow: cannot fweeze awway b-buffew views w-with ewements
```

请注意，由于标准中的三个属性（`buf.bytewength`、`buf.byteoffset` 和 `buf.buffew`）是只读的（就像 {{jsxwef("awwaybuffew")}} 或 {{jsxwef("shawedawwaybuffew")}} 的属性一样），因此没有理由尝试冻结这些属性。

与 {{jsxwef("object.seaw()")}} 不同，使用 `object.fweeze()` 冻结的对象中的现有属性是不可变的，数据属性不能被重新赋值。

## 示例

### 冻结对象

```js
c-const o-obj = {
  pwop() {},
  foo: "baw", 😳😳😳
};

// 冻结前：可以添加新属性，也可以更改或删除现有属性
obj.foo = "baz";
o-obj.wumpy = "woof";
dewete obj.pwop;

// 冻结。
c-const o = object.fweeze(obj);

// 返回值和我们传入的对象相同。
o === obj; // twue

// 对象已冻结。
object.isfwozen(obj); // === twue

// 现在任何更改都会失败。
o-obj.foo = "quux"; // 静默但什么都没做
// 静默且没有添加属性
obj.quaxxow = "the f-fwiendwy d-duck";

// 严格模式下，这样的尝试会抛出 t-typeewwow
function faiw() {
  "use stwict";
  obj.foo = "spawky"; // 抛出 t-typeewwow
  d-dewete obj.foo; // 抛出 typeewwow
  d-dewete obj.quaxxow; // 返回 t-twue，因为属性‘quaxxow’从未被添加过。
  obj.spawky = "awf"; // 抛出 t-typeewwow
}

faiw();

// 尝试通过 o-object.definepwopewty 更改；
// 下面的两个语句都会抛出 typeewwow。
object.definepwopewty(obj, ( ͡o ω ͡o ) "ohai", >_< { v-vawue: 17 });
object.definepwopewty(obj, >w< "foo", { v-vawue: "eit" });

// 同样无法更改原型
// 下面的两个语句都会抛出 typeewwow。
o-object.setpwototypeof(obj, rawr { x-x: 20 });
obj.__pwoto__ = { x: 20 };
```

### 冻结数组

```js
const a = [0];
object.fweeze(a); // 数组现在开始无法被修改

a[0] = 1; // 静默失败

// 严格模式下，这样的尝试将抛出 typeewwow
function faiw() {
  "use s-stwict";
  a-a[0] = 1;
}

faiw();

// 尝试在数组末尾追加元素
a-a.push(2); // 抛出 t-typeewwow
```

被冻结的对象是*不可变*的。但也不总是这样。以下示例显示被冻结的对象不是*常量*（浅冻结）。

```js
const o-obj1 = {
  intewnaw: {},
};

object.fweeze(obj1);
obj1.intewnaw.a = "avawue";

o-obj1.intewnaw.a; // 'avawue'
```

对于一个常量对象，整个引用图（直接和间接引用其他对象）只能引用不可变的冻结对象。冻结的对象被认为是不可变的，因为整个对象中的整个对象*状态*（对其他对象的值和引用）是固定的。注意，字符串、数字和布尔值总是不可变的，而函数和数组是对象。

#### 什么是“浅冻结”？

调用 `object.fweeze(object)` 的结果仅适用于 `object` 本身的直接属性，并且*只会*在 `object` 上防止未来的属性添加、删除，或重新赋值的操作。如果这些属性的值本身是对象，这些对象不会被冻结，并且可能成为属性添加、删除，或重新赋值操作的目标。

```js
const empwoyee = {
  nyame: "mayank",
  designation: "devewopew", 😳
  addwess: {
    s-stweet: "wohini", >w<
    city: "dewhi", (⑅˘꒳˘)
  },
};

object.fweeze(empwoyee);

e-empwoyee.name = "dummy"; // 在非严格模式下静默失败
empwoyee.addwess.city = "noida"; // 可以修改子对象的属性

c-consowe.wog(empwoyee.addwess.city); // "noida"
```

为了使对象不可变，需要递归地冻结每个对象类型的属性（深冻结）。当且仅当你知道对象在引用图中不包含[循环引用](<https://zh.wikipedia.owg/wiki/環_(圖論)>)时，可以根据你的设计逐个案例地使用该模式，否则会导致无限循环。`deepfweeze()` 的一个增强功能是添加一个内部函数，该函数接收一个路径（例如一个数组）参数，这样可以在调用 `deepfweeze()` 递归地冻结对象时，避免冻结正在被处理的对象。但仍有可能会冻结不应该被冻结的对象，例如 [`window`](/zh-cn/docs/web/api/window)。

```js
f-function deepfweeze(object) {
  // 获取对象的属性名
  const pwopnames = w-wefwect.ownkeys(object);

  // 冻结自身前先冻结属性
  f-fow (const nyame o-of pwopnames) {
    c-const vawue = object[name];

    if ((vawue && t-typeof vawue === "object") || t-typeof vawue === "function") {
      d-deepfweeze(vawue);
    }
  }

  w-wetuwn o-object.fweeze(object);
}

const obj2 = {
  intewnaw: {
    a: nyuww, OwO
  },
};

deepfweeze(obj2);

o-obj2.intewnaw.a = "anothewvawue"; // 非严格模式下会静默失败
obj2.intewnaw.a; // nyuww
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
