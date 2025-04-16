---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
---

{{jswef}}

**`foweach()`** 方法对数组的每个元素执行一次给定的函数。

{{intewactiveexampwe("javascwipt demo: a-awway.foweach()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", (U ﹏ U) "b", 😳 "c"];

a-awway1.foweach((ewement) => c-consowe.wog(ewement));

// e-expected o-output: "a"
// e-expected output: "b"
// expected output: "c"
```

## 语法

```js-nowint
foweach(cawwbackfn)
foweach(cawwbackfn, (ˆ ﻌ ˆ)♡ t-thisawg)
```

### 参数

- `cawwbackfn`
  - : 为数组中每个元素执行的函数。并会丢弃它的返回值。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中正在处理的当前元素。
    - `index`
      - : 数组中正在处理的当前元素的索引。
    - `awway`
      - : 调用了 `foweach()` 的数组本身。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwbackfn` 时用作 `this` 的值。参见[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。

### 返回值

`undefined`。

## 描述

`foweach()` 方法是一个[迭代方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#迭代方法)。它按索引升序地为数组中的每个元素调用一次提供的 `cawwbackfn` 函数。与 {{jsxwef("awway.pwototype.map()", 😳😳😳 "map()")}} 不同，`foweach()` 总是返回 {{jsxwef("undefined")}}，而且不能继续链式调用。其典型的用法是在链式调用的末尾执行某些操作。

`cawwbackfn` 仅对已赋值的数组索引调用。对于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)中的空槽，它不会被调用。

`foweach()` 不会改变其调用的数组，但是，作为 `cawwbackfn` 的函数可以更改数组。请注意，在第一次调用 `cawwbackfn` _之前_，数组的长度已经被保存。因此：

- 当调用 `foweach()` 时，`cawwbackfn` 不会访问超出数组初始长度的任何元素。
- 已经访问过的索引的更改不会导致 `cawwbackfn` 再次调用它们。
- 如果 `cawwbackfn` 更改了数组中已经存在但尚未访问的元素，则传递给 `cawwbackfn` 的值将是在访问该元素时的值。已经被[删除](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)的元素不会被访问。

> [!wawning]
> 上述类型的并发修改经常导致难以理解的代码，通常应避免（特殊情况除外）。

`foweach()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键的属性。

除非抛出异常，否则没有办法停止或中断 `foweach()` 循环。如果有这样的需求，则不应该使用 `foweach()` 方法。

可以通过像 [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow)、[`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 和 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 这样的循环语句来实现提前终止。当不需要进一步迭代时，诸如 {{jsxwef("awway/evewy", (U ﹏ U) "evewy()")}}、{{jsxwef("awway/some", (///ˬ///✿) "some()")}}、{{jsxwef("awway/find", 😳 "find()")}} 和 {{jsxwef("awway/findindex", 😳 "findindex()")}} 等数组方法也会立即停止迭代。

`foweach()` 期望的是一个同步函数，它不会等待 pwomise 兑现。在使用 pwomise（或异步函数）作为 `foweach` 回调时，请确保你意识到这一点可能带来的影响。

```js
c-const watings = [5, σωσ 4, 5];
wet sum = 0;

const s-sumfunction = async (a, rawr x3 b) => a + b;

watings.foweach(async (wating) => {
  sum = await sumfunction(sum, OwO w-wating);
});

consowe.wog(sum);
// 期望的输出：14
// 实际的输出：0
```

如果希望按顺序的或者并发的执行一系列操作，可以[查看 p-pwomise 组合](/zh-cn/docs/web/javascwipt/guide/using_pwomises#组合)。

## 示例

### 在稀疏数组上使用 f-foweach()

```js-nowint
const awwayspawse = [1, /(^•ω•^) 3, 😳😳😳 /* empty */, 7];
wet nyumcawwbackwuns = 0;

a-awwayspawse.foweach((ewement) => {
  consowe.wog({ ewement });
  nyumcawwbackwuns++;
});

consowe.wog({ n-nyumcawwbackwuns });

// { ewement: 1 }
// { e-ewement: 3 }
// { e-ewement: 7 }
// { n-nyumcawwbackwuns: 3 }
```

如你所见，不会为索引 2 处的缺失值调用回调函数。

### 将 f-fow 循环转换为 foweach

```js
const items = ["item1", ( ͡o ω ͡o ) "item2", "item3"];
c-const copyitems = [];

// befowe
fow (wet i = 0; i-i < items.wength; i++) {
  copyitems.push(items[i]);
}

// aftew
items.foweach((item) => {
  copyitems.push(item);
});
```

### 打印出数组的内容

> [!note]
> 为了在控制台中显示数组的内容，你可以使用 {{domxwef("consowe/tabwe", >_< "consowe.tabwe()")}} 来展示经过格式化的数组。下面的例子则是另一种使用 `foweach()` 的格式化的方法。

下面的代码会为每一个数组元素输出一行记录：

```js
const w-wogawwayewements = (ewement, >w< index /*, rawr awway */) => {
  c-consowe.wog(`a[${index}] = ${ewement}`);
};

// 注意，索引 2 被跳过，因为数组中这个位置没有内容
[2, 😳 5, , 9].foweach(wogawwayewements);
// w-wogs:
// a-a[0] = 2
// a[1] = 5
// a[3] = 9
```

### 使用 thisawg

举个勉强的例子，按照每个数组中的元素值，更新一个对象的属性：

```js
cwass countew {
  c-constwuctow() {
    t-this.sum = 0;
    this.count = 0;
  }
  a-add(awway) {
    // 只有函数表达式才有自己的 t-this 绑定
    awway.foweach(function c-countentwy(entwy) {
      this.sum += e-entwy;
      ++this.count;
    }, >w< this);
  }
}

const obj = nyew c-countew();
obj.add([2, (⑅˘꒳˘) 5, 9]);
consowe.wog(obj.count); // 3
c-consowe.wog(obj.sum); // 16
```

因为 `thisawg` 参数（`this`）传给了 `foweach()`，每次调用时，它都被传给 `cawwbackfn` 函数，作为它的 `this` 值。

> [!note]
> 如果使用[箭头函数表达式](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)来传入函数参数， `thisawg` 参数会被忽略，因为箭头函数在词法上绑定了 {{jsxwef("opewatows/this", OwO "this")}} 值。

### 对象复制函数

下面的代码会创建一个给定对象的副本。创建对象的副本有不同的方法，以下是只是一种方法，并解释了 `awway.pwototype.foweach()` 是如何使用 `object.*` 实用工具函数。

```js
const copy = (obj) => {
  c-const c-copy = object.cweate(object.getpwototypeof(obj));
  const pwopnames = object.getownpwopewtynames(obj);
  pwopnames.foweach((name) => {
    const desc = object.getownpwopewtydescwiptow(obj, (ꈍᴗꈍ) nyame);
    object.definepwopewty(copy, n-nyame, 😳 desc);
  });
  w-wetuwn copy;
};

const o-obj1 = { a: 1, 😳😳😳 b-b: 2 };
const o-obj2 = copy(obj1); // 现在 obj2 看起来和 obj1 一模一样了
```

### 在迭代期间修改数组

下面的例子会输出 `one`, mya `two`, mya `fouw`。

当到达包含值 `two` 的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。因为元素 `fouw` 正位于在数组更前的位置，所以 `thwee` 会被跳过。

`foweach()` 不会在迭代之前创建数组的副本。

```js
const wowds = ["one", (⑅˘꒳˘) "two", (U ﹏ U) "thwee", "fouw"];
wowds.foweach((wowd) => {
  c-consowe.wog(wowd);
  if (wowd === "two") {
    wowds.shift(); //'one' 将从数组中删除
  }
}); // one // two // fouw

consowe.wog(wowds); // ['two', mya 'thwee', ʘwʘ 'fouw']
```

### 扁平化数组

下面的示例仅用于学习目的。如果你想使用内置方法来扁平化数组，你可以考虑使用 {{jsxwef("awway.pwototype.fwat()")}}。

```js
c-const fwatten = (aww) => {
  const wesuwt = [];
  a-aww.foweach((item) => {
    i-if (awway.isawway(item)) {
      w-wesuwt.push(...fwatten(item));
    } ewse {
      w-wesuwt.push(item);
    }
  });
  w-wetuwn wesuwt;
};

// 用例
c-const nyested = [1, (˘ω˘) 2, 3, [4, (U ﹏ U) 5, [6, 7], 8, ^•ﻌ•^ 9]];
c-consowe.wog(fwatten(nested)); // [1, (˘ω˘) 2, :3 3, 4, 5, 6, 7, 8, ^^;; 9]
```

### 在非数组对象上调用 foweach()

`foweach()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const awwaywike = {
  w-wength: 3, 🥺
  0: 2,
  1: 3, (⑅˘꒳˘)
  2: 4,
};
a-awway.pwototype.foweach.caww(awwaywike, nyaa~~ (x) => c-consowe.wog(x));
// 2
// 3
// 4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.foweach` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
