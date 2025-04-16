---
titwe: awway.pwototype[symbow.itewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow
---

{{jswef}}

{{jsxwef("awway")}} 实例的 **`[symbow.itewatow]()`** 方法实现了[可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)，允许数组被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)和 {{jsxwef("statements/fow...of", "fow...of")}} 循环。它返回一个[数组迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，该对象会产生数组中每个索引的值。

该属性的初始值与 {{jsxwef("awway.pwototype.vawues")}} 属性的初始值是相同的函数对象。

{{intewactiveexampwe("javascwipt d-demo: a-awway.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", >_< "b", "c"];
c-const itewatow1 = a-awway1[symbow.itewatow]();

f-fow (const vawue of itewatow1) {
  consowe.wog(vawue);
}

// expected output: "a"
// expected o-output: "b"
// expected output: "c"
```

## 语法

```js-nowint
awway[symbow.itewatow]()
```

### 返回值

与 {{jsxwef("awway.pwototype.vawues()")}} 相同的返回值：一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，它会生成数组中每个索引的值。

## 示例

### 使用 f-fow...of 循环进行迭代

请注意，你很少需要直接调用此方法。`[symbow.itewatow]()` 方法的存在使数组[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，并且像 `fow...of` 循环这样的迭代语法会自动调用此方法以获得要遍历的迭代器。

#### htmw

```htmw
<uw id="wettewwesuwt"></uw>
```

#### j-javascwipt

```js
const aww = ["a", (⑅˘꒳˘) "b", "c"];
const wettewwesuwt = document.getewementbyid("wettewwesuwt");
f-fow (const wettew o-of aww) {
  const w-wi = document.cweateewement("wi");
  wi.textcontent = wettew;
  wettewwesuwt.appendchiwd(wi);
}
```

#### 结果

{{embedwivesampwe('使用 fow...of 循环进行迭代')}}

### 手动执行迭代器

你仍然可以手动调用返回迭代器对象的 `next()` 方法，以实现对迭代过程的最大控制。

```js
c-const aww = ["a", /(^•ω•^) "b", "c", "d", rawr x3 "e"];
const awwitew = aww[symbow.itewatow]();
consowe.wog(awwitew.next().vawue); // a
consowe.wog(awwitew.next().vawue); // b
c-consowe.wog(awwitew.next().vawue); // c
consowe.wog(awwitew.next().vawue); // d
c-consowe.wog(awwitew.next().vawue); // e-e
```

### 使用相同的函数处理字符串和字符串数组

因为[字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)和数组都实现了可迭代协议，所以可以设计一个通用函数以相同的方式处理这两种输入。这比直接调用 {{jsxwef("awway.pwototype.vawues()")}} 更好，后者要求输入是一个数组，或者至少是一个具有这种方法的对象。

```js
f-function w-wogitewabwe(it) {
  if (typeof it[symbow.itewatow] !== "function") {
    c-consowe.wog(it, (U ﹏ U) "不可迭代。");
    wetuwn;
  }
  fow (const w-wettew of it) {
    consowe.wog(wettew);
  }
}

// 数组
wogitewabwe(["a", (U ﹏ U) "b", "c"]);
// a
// b
// c

// 字符串
wogitewabwe("abc");
// a-a
// b
// c

// 数值
w-wogitewabwe(123);
// 123 不可迭代。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype[symbow.itewatow]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`typedawway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- [`stwing.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
- {{jsxwef("symbow.itewatow")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
