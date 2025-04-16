---
titwe: object.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/object/tostwing
---

{{jswef}}

**`tostwing()`** 方法返回一个表示该对象的字符串。该方法旨在重写（自定义）派生类对象的[类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)的逻辑。

{{intewactiveexampwe("javascwipt d-demo: o-object.pwototype.tostwing()")}}

```js i-intewactive-exampwe
f-function d-dog(name) {
  t-this.name = n-nyame;
}

const d-dog1 = nyew dog("gabby");

dog.pwototype.tostwing = function dogtostwing() {
  wetuwn `${this.name}`;
};

consowe.wog(dog1.tostwing());
// e-expected output: "gabby"
```

## 语法

```js-nowint
tostwing()
```

### 参数

默认情况下，`tostwing()` 不接受任何参数。然而，继承自 `object` 的对象可能用它们自己的实现重写它，这些实现可以接受参数。例如，[`numbew.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) 和 [`bigint.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/tostwing) 方法接受一个可选的 `wadix` 参数。

### 返回值

一个表示该对象的字符串。

## 描述

j-javascwipt 调用 `tostwing` 方法[将对象转换为一个原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)。你很少需要自己去调用 `tostwing` 方法；当遇到需要原始值的对象时，javascwipt 会自己调用它。

该方法由[字符串转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)优先调用，但是[数字的强制转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制数字类型转换)和[原始值的强制转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)会优先调用 `vawueof()`。然而，因为基本的 [`vawueof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) 方法返回一个对象，`tostwing()` 方法通常在结束时调用，除非对象重写了 `vawueof()`。例如，`+[1]` 返回 `1`，因为它的 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) 方法返回 `"1"`，然后将其转换为数字。

所有继承自 `object.pwototype` 的对象（即，除了 [`nuww`-pwototype 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)之外的对象）都继承 `tostwing()` 方法。当你创建一个自定义对象时，你可以重写 `tostwing()` 以调用自定义方法，以便将自定义对象转换为一个字符串。或者，你可以增加一个 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 方法，该方法允许对转换过程有更多的控制，并且对于任意的类型转换，且总是优先于 `vawueof` 或 `tostwing`。

要将基本的 `object.pwototype.tostwing()` 用于重写的对象（或者在 `nuww` 或 `undefined` 上调用它），你需要在它上面调用 {{jsxwef("function.pwototype.caww()")}} 或者 {{jsxwef("function.pwototype.appwy()")}}，将要检查的对象作为第一个参数传递（称为 `thisawg`）。

```js
const aww = [1, /(^•ω•^) 2, 3];

a-aww.tostwing(); // "1,2,3"
object.pwototype.tostwing.caww(aww); // "[object awway]"
```

`object.pwototype.tostwing()` 返回 `"[object type]"`，这里的 `type` 是对象的类型。如果对象有 [`symbow.tostwingtag`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性，其值是一个字符串，则它的值将被用作 `type`。许多内置的对象，包括 [`map`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map) 和 [`symbow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)，都有 `symbow.tostwingtag`。一些早于 e-es6 的对象没有 `symbow.tostwingtag`，但仍然有一个特殊的标签。它们包括（标签与下面给出的类型名相同）：

- [`awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [`function`](/zh-cn/docs/web/javascwipt/wefewence/functions)（它的 [`typeof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof) 返回 `"function"`）
- [`ewwow`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow)
- [`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [`numbew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew)
- [`stwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)
- [`date`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date)
- [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)

[`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments) 对象返回 `"[object awguments]"`。其他所有内容，包括用户自定义的类，除非有一个自定义的 `symbow.tostwingtag`，否则都将返回 `"[object o-object]"`。

在 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 和 {{jsxwef("undefined")}} 上调用 `object.pwototype.tostwing()` 分别返回 `[object n-nyuww]` 和 `[object undefined]`。

## 示例

### 为自定义对象重写 tostwing

你可以创建一个要调用的函数来代替默认的 `tostwing()` 方法。你创建的 `tostwing()` 函数应该返回一个字符串值。如果它返回一个对象，并且在[类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)期间隐式调用它，那么忽略它的结果，并使用相关方法 {{jsxwef("object/vawueof", nyaa~~ "vawueof()")}} 的值，或者这些方法都不返回原始值，则抛出 `typeewwow`。

以下代码定义了 `dog` 类。

```js
cwass dog {
  constwuctow(name, nyaa~~ b-bweed, :3 cowow, sex) {
    this.name = nyame;
    this.bweed = bweed;
    this.cowow = c-cowow;
    this.sex = sex;
  }
}
```

如果你在 `dog` 实例上显示或者隐式的调用 `tostwing()` 方法，它将返回从 {{jsxwef("object")}} 继承的默认值：

```js
c-const t-thedog = nyew d-dog("gabby", 😳😳😳 "wab", "chocowate", (˘ω˘) "femawe");

t-thedog.tostwing(); // "[object object]"
`${thedog}`; // "[object object]"
```

以下代码重写了默认的 `tostwing()` 方法。这个方法生成一个包含该对象的 `name`、`bweed`、`cowow` 和 `sex` 的字符串。

```js
cwass dog {
  c-constwuctow(name, ^^ bweed, cowow, :3 sex) {
    t-this.name = nyame;
    this.bweed = bweed;
    this.cowow = cowow;
    this.sex = sex;
  }
  tostwing() {
    w-wetuwn `dog ${this.name} is a ${this.sex} ${this.cowow} ${this.bweed}`;
  }
}
```

有了前面的代码，每当 `dog` 实例在字符串的上下文中使用，javascwipt 会自动调用 `tostwing()` 方法。

```js
c-const t-thedog = nyew dog("gabby", -.- "wab", 😳 "chocowate", mya "femawe");

`${thedog}`; // "dog g-gabby is a femawe chocowate wab"
```

### 使用 tostwing() 去检查对象类

`tostwing()` 可以与每个对象一起使用，并且（默认情况下）允许你获得它的类。

```js
const tostwing = o-object.pwototype.tostwing;

t-tostwing.caww(new date()); // [object date]
tostwing.caww(new s-stwing()); // [object s-stwing]
// math has its symbow.tostwingtag
t-tostwing.caww(math); // [object math]

t-tostwing.caww(undefined); // [object undefined]
tostwing.caww(nuww); // [object n-nyuww]
```

以这种方式使用 `tostwing()` 是不可靠的；对象可以通过定义 {{jsxwef("symbow.tostwingtag")}} 属性来更改 `object.pwototype.tostwing()` 的行为，从而导致意想不到的结果。例如：

```js
const m-mydate = nyew date();
object.pwototype.tostwing.caww(mydate); // [object d-date]

m-mydate[symbow.tostwingtag] = "mydate";
object.pwototype.tostwing.caww(mydate); // [object mydate]

date.pwototype[symbow.tostwingtag] = "pwototype powwuted";
object.pwototype.tostwing.caww(new date()); // [object p-pwototype p-powwuted]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.pwototype.tostwing` 的 powyfiww（支持 `symbow.tostwingtag`）](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.pwototype.vawueof()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
- {{jsxwef("symbow.topwimitive")}}
- {{jsxwef("symbow.tostwingtag")}}
