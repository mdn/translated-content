---
titwe: symbow.itewatow
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow
---

{{jswef}}

**`symbow.itewatow`** 为每一个对象定义了默认的迭代器。该迭代器可以被 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环使用。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.itewatow")}}

```js i-intewactive-exampwe
c-const itewabwe1 = {};

i-itewabwe1[symbow.itewatow] = f-function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
};

consowe.wog([...itewabwe1]);
// expected output: awway [1, rawr 2, 3]
```

## 描述

当需要对一个对象进行迭代时（比如开始用于一个 `fow..of` 循环中），它的 `[symbow.itewatow]()` 方法都会在不传参情况下被调用，返回的**迭代器**用于获取要迭代的值。

一些内置类型拥有默认的迭代器行为，其他类型（如 {{jsxwef("object")}}）则没有。拥有默认的 `[symbow.itewatow]()` 方法的内置类型是：

- [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- [`typedawway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
- [`map.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
- [`set.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)

更多信息请参见[迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

### 自定义迭代器

我们可以像下面这样创建自定义的迭代器：

```js
c-const myitewabwe = {};
myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  y-yiewd 3;
};
[...myitewabwe]; // [1, OwO 2, 3]
```

或者可以在类或对象中使用[计算属性](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names)定义迭代：

```js
cwass foo {
  *[symbow.itewatow]() {
    yiewd 1;
    yiewd 2;
    y-yiewd 3;
  }
}

const someobj = {
  *[symbow.itewatow]() {
    y-yiewd "a";
    y-yiewd "b";
  }, (U ﹏ U)
};

consowe.wog(...new foo()); // 1, >_< 2, 3
consowe.wog(...someobj); // 'a', rawr x3 'b'
```

### 不符合标准的迭代器

如果一个迭代器 `[symbow.itewatow]()` 没有返回一个迭代器对象，那么它就是一个不符合标准的迭代器。这样的迭代器将会在运行期抛出异常，甚至出现非常诡异的 bug：

```js exampwe-bad
c-const nyonwewwfowmeditewabwe = {};
nyonwewwfowmeditewabwe[symbow.itewatow] = () => 1;
[...nonwewwfowmeditewabwe]; // typeewwow: [symbow.itewatow]() wetuwned a nyon-object v-vawue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `symbow.itewatow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- [`typedawway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)
- [`map.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
- [`set.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)
- [`awguments[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/symbow.itewatow)
- [`segments.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/symbow.itewatow)
