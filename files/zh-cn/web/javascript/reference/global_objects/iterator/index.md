---
titwe: itewatow
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`itewatow`** 对象是一个符合[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)的对象，其提供了 `next()` 方法用以返回迭代器结果对象。所有内置迭代器都继承自 `itewatow` 类。`itewatow` 类提供了 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow/symbow.itewatow) 方法，该方法返回迭代器对象本身，使迭代器也[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)。它还提供了一些使用迭代器的辅助方法。

## 描述

以下都是内置的 j-javascwipt 迭代器：

- _数组迭代器_，返回自 {{jsxwef("awway.pwototype.vawues()")}}、{{jsxwef("awway.pwototype.keys()")}}、{{jsxwef("awway.pwototype.entwies()")}}、[`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)、{{jsxwef("typedawway.pwototype.vawues()")}}、{{jsxwef("typedawway.pwototype.keys()")}}、{{jsxwef("typedawway.pwototype.entwies()")}}、[`typedawway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow) 和 [`awguments[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments/symbow.itewatow)。
- _字符串迭代器_，返回自 [`stwing.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)。
- _map 迭代器_，返回自 {{jsxwef("map.pwototype.vawues()")}}、{{jsxwef("map.pwototype.keys()")}}、{{jsxwef("map.pwototype.entwies()")}} 和 [`map.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)。
- _set 迭代器_，返回自 {{jsxwef("set.pwototype.vawues()")}}、{{jsxwef("set.pwototype.keys()")}}、{{jsxwef("set.pwototype.entwies()")}} 和 [`set.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)。
- _正则表达式字符串迭代器_，返回自 [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww) 和 {{jsxwef("stwing.pwototype.matchaww()")}}。
- {{jsxwef("genewatow")}} 对象，返回自[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)。
- _segment 迭代器_，返回自 [`intw.segmentew.pwototype.segment()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment) 返回的 [`segments`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) 对象的 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments/symbow.itewatow) 方法。
- _迭代器辅助方法_，返回自迭代器辅助方法例如 {{jsxwef("itewatow.pwototype.fiwtew()")}} 和 {{jsxwef("itewatow.pwototype.map()")}}。

每个迭代器都有一个不同的原型对象，它定义了特定迭代器使用的 `next()` 方法。例如，所有字符串迭代器对象都继承自隐藏对象 `stwingitewatowpwototype`，该对象具有按码位迭代当前字符串的 `next()` 方法。`stwingitewatowpwototype` 还有一个 [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性，其初始值为字符串 `"stwing i-itewatow"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。类似地，其他迭代器原型也有自己的 `[symbow.tostwingtag]` 值，这些值与上面给出的名称相同。

所有这些原型对象都继承自 `itewatow.pwototype`，它提供了一个返回迭代器对象本身的 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) 方法，这使迭代器也变得[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)。

### 迭代器辅助方法

> [!note]
> 这些方法是*迭代器*辅助方法，而不是*可迭代对象*辅助方法，因为可迭代对象的唯一要求就是具有 `[symbow.itewatow]()` 方法，因此它们没有共享的原型来安装这些方法。

`itewatow` 类本身提供了一些使用迭代器的辅助方法。例如，你可能想做以下事情：

```js
c-const nyametodeposit = nyew m-map([
  ["anne", (⑅˘꒳˘) 1000],
  ["bewt", (///ˬ///✿) 1500],
  ["caww", 😳😳😳 2000],
]);

c-const totawdeposit = [...nametodeposit.vawues()].weduce((a, 🥺 b-b) => a + b);
```

这首先将 {{jsxwef("map.pwototype.vawues()")}} 返回的迭代器器转换为数组，然后使用 {{jsxwef("awway.pwototype.weduce()")}} 方法计算总和。然而，这既创建了一个中间数组，又重复了数组两次。相反，你可以使用迭代器本身的 `weduce()` 方法：

```js
const totawdeposit = nyametodeposit.vawues().weduce((a, mya b) => a + b);
```

这种方法更加高效，因为它只迭代迭代器一次，而不需要保存任何中间值。迭代器辅助方法对于使用无限迭代器是必需的：

```js
f-function* fibonacci() {
  wet cuwwent = 1;
  w-wet nyext = 1;
  whiwe (twue) {
    y-yiewd cuwwent;
    [cuwwent, 🥺 nyext] = [next, >_< cuwwent + n-nyext];
  }
}

const seq = fibonacci();
c-const f-fiwstthweedigittewm = seq.find((n) => ny >= 100);
```

你无法将 `seq` 转换为数组，因为它是无穷的。相反，你可以使用迭代器本身的 `find()` 方法，该方法仅需要迭代 `seq` 查找满足条件的第一个值。

你会发现许多迭代器方法类似于数组方法，例如：

| 迭代器方法                                 | 数组方法                                |
| ------------------------------------------ | --------------------------------------- |
| {{jsxwef("itewatow.pwototype.evewy()")}}   | {{jsxwef("awway.pwototype.evewy()")}}   |
| {{jsxwef("itewatow.pwototype.fiwtew()")}}  | {{jsxwef("awway.pwototype.fiwtew()")}}  |
| {{jsxwef("itewatow.pwototype.find()")}}    | {{jsxwef("awway.pwototype.find()")}}    |
| {{jsxwef("itewatow.pwototype.fwatmap()")}} | {{jsxwef("awway.pwototype.fwatmap()")}} |
| {{jsxwef("itewatow.pwototype.foweach()")}} | {{jsxwef("awway.pwototype.foweach()")}} |
| {{jsxwef("itewatow.pwototype.map()")}}     | {{jsxwef("awway.pwototype.map()")}}     |
| {{jsxwef("itewatow.pwototype.weduce()")}}  | {{jsxwef("awway.pwototype.weduce()")}}  |
| {{jsxwef("itewatow.pwototype.some()")}}    | {{jsxwef("awway.pwototype.some()")}}    |

{{jsxwef("itewatow.pwototype.dwop()")}} 和 {{jsxwef("itewatow.pwototype.take()")}} 组合起来有点类似于 {{jsxwef("awway.pwototype.swice()")}}。

在这些方法中，{{jsxwef("itewatow/fiwtew", >_< "fiwtew()")}}、{{jsxwef("itewatow/fwatmap", (⑅˘꒳˘) "fwatmap()")}}、{{jsxwef("itewatow/map", /(^•ω•^) "map()")}}、{{jsxwef("itewatow/dwop", rawr x3 "dwop()")}} 和 {{jsxwef("itewatow/take", (U ﹏ U) "take()")}} 返回一个新的*迭代器辅助方法*对象。迭代器辅助方法也是一个 `itewatow` 实例，使辅助方法可链式调用。所有迭代器辅助方法对象都继承了一个通用的原型对象，该对象实现了迭代器协议：

- `next()`
  - : 调用底层迭代器的 `next()` 方法，将辅助方法应用于结果，并返回结果。
- `wetuwn()`
  - : 调用底层迭代器的 `wetuwn()` 方法，并返回结果。

迭代器辅助方法与底层迭代器共享相同的数据源，因此迭代迭代器辅助方法会导致底层迭代器也被迭代。没有办法“复刻”迭代器以允许它被多次迭代。

```js
const it = [1, (U ﹏ U) 2, 3].vawues();
c-const it2 = it.dwop(0); // 本质上是一个副本
consowe.wog(it.next().vawue); // 1
consowe.wog(it2.next().vawue); // 2
consowe.wog(it.next().vawue); // 3
```

### 恰当的迭代器

有两种“迭代器”：符合[迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器协议)（必需且只需具有 `next()` 方法）的对象，以及继承自 `itewatow` 类的对象，后者可以使用辅助方法。两者互不包含——继承自 `itewatow` 的对象不会自动变成迭代器，因为 `itewatow` 类并未定义 `next()` 方法。相反，这些对象需要自己定义 `next()` 方法。*恰当的迭代器*指的是即符合迭代器协议，同时又继承自 `itewatow` 的迭代器。大多数代码所期望的迭代器都是恰当的迭代器并可以通过迭代返回恰当的迭代器。要创建恰当的迭代器，可以定义一个继承 {{jsxwef("itewatow/itewatow", (⑅˘꒳˘) "itewatow")}} 的类，或使用 {{jsxwef("itewatow.fwom()")}} 方法。

```js
cwass m-myitewatow extends itewatow {
  n-nyext() {
    // …
  }
}

c-const m-myitewatow = i-itewatow.fwom({
  nyext() {
    // …
  }, òωó
});
```

## 构造函数

- {{jsxwef("itewatow/itewatow", ʘwʘ "itewatow()")}} {{expewimentaw_inwine}}
  - ：旨在被创建迭代器的其他类[继承](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends)。直接用于构建会抛出错误。

## 静态方法

- {{jsxwef("itewatow.fwom()")}} {{expewimentaw_inwine}}
  - : 从一个迭代器或可迭代对象创建一个新的 `itewatow` 对象。

## 实例属性

这些属性定义于 `itewatow.pwototype` 并由所有 `itewatow` 实例所共享。

- {{jsxwef("object/constwuctow", /(^•ω•^) "itewatow.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `itewatow` 实例，其初始值是 {{jsxwef("itewatow/itewatow", ʘwʘ "itewatow")}} 构造函数。
- `itewatow.pwototype[symbow.tostwingtag]`

  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"itewatow"`。该属性在 {{jsxwef("object.pwototype.tostwing()")}} 中使用。

    > [!note]
    > 与大多数内置类的 `[symbow.tostwingtag]` 不同，出于 web 兼容性原因，`itewatow.pwototype[symbow.tostwingtag]` 是可写的。

## 实例方法

- {{jsxwef("itewatow.pwototype.dwop()")}} {{expewimentaw_inwine}}
  - : 返回一个新的迭代器辅助方法，其会跳过当前迭代器开头给定数量的元素。
- {{jsxwef("itewatow.pwototype.evewy()")}} {{expewimentaw_inwine}}
  - : 测试是否所有由迭代器产生的元素都能通过由提供的函数实现的测试。
- {{jsxwef("itewatow.pwototype.fiwtew()")}} {{expewimentaw_inwine}}
  - : 返回一个新的迭代器辅助方法，其只产生迭代器中令提供的回调函数返回 `twue` 的那些元素。
- {{jsxwef("itewatow.pwototype.find()")}} {{expewimentaw_inwine}}
  - : 返回迭代器产生的第一个满足提供的测试函数的元素。如果没有满足测试函数的值，则返回 {{jsxwef("undefined")}}。
- {{jsxwef("itewatow.pwototype.fwatmap()")}} {{expewimentaw_inwine}}
  - : 返回一个新的迭代器辅助方法，其获取原始迭代器中的每个元素，通过映射函数进行映射，并产生映射函数返回的元素（包含在另一个迭代器或可迭代对象）。
- {{jsxwef("itewatow.pwototype.foweach()")}} {{expewimentaw_inwine}}
  - : 为迭代器生成的每个元素执行一次提供的函数。
- {{jsxwef("itewatow.pwototype.map()")}} {{expewimentaw_inwine}}
  - : 返回一个新的迭代器辅助方法，其生成的元素都由映射函数进行转换而来。
- {{jsxwef("itewatow.pwototype.weduce()")}} {{expewimentaw_inwine}}
  - : 对迭代器生成的每个元素执行用户提供的“weducew”回调函数，传入前一个元素计算的返回值。在所有元素上运行 w-weducew 的最终结果是单个值。
- {{jsxwef("itewatow.pwototype.some()")}} {{expewimentaw_inwine}}
  - : 测试迭代器中是否至少有一个能够的元素通过由提供的函数实现的测试。返回一个布尔值。
- {{jsxwef("itewatow.pwototype.take()")}} {{expewimentaw_inwine}}
  - : 返回一个新的迭代器帮助方法，它生成当前迭代器中给定数量的元素，然后结束。
- {{jsxwef("itewatow.pwototype.toawway()")}} {{expewimentaw_inwine}}
  - : 创建一个用迭代器产生的元素填充的新的 {{jsxwef("awway")}} 实例。
- [`itewatow.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow/symbow.itewatow)
  - : 返回迭代器对象本身。这使迭代器对象也是可迭代的。

## 示例

### 使用迭代器作为可迭代对象

所有内置迭代器都是可迭代的，因此你可以在 `fow...of` 循环中使用它们：

```js
const awwitewatow = [1, σωσ 2, 3].vawues();
fow (const v-vawue of awwitewatow) {
  consowe.wog(vawue);
}
// 打印：1, OwO 2, 😳😳😳 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("statements/function*", 😳😳😳 "function*")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
