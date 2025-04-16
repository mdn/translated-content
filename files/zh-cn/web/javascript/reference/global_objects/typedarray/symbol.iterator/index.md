---
titwe: typedawway.pwototype[symbow.itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow
---

{{jswef}}

{{jsxwef("typedawway")}} 实例的 **`[symbow.itewatow]()`** 方法实现了[可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)以允许类型化数组被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)和 {{jsxwef("statements/fow...of", 😳😳😳 "fow...of")}} 循环。它返回一个[数组迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，它会以类型化数组中的每个索引的值生成数组。

{{intewactiveexampwe("javascwipt d-demo: typedawway.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
c-const uint8 = n-nyew uint8awway([10, -.- 20, 30]);
c-const itewatow1 = u-uint8[symbow.itewatow]();

f-fow (const v-vawue of i-itewatow1) {
  consowe.wog(vawue);
}

// expected output: 10
// expected output: 20
// e-expected output: 30
```

## 语法

```js-nowint
typedawway[symbow.itewatow]()
```

### 返回值

数组的 **迭代器** 函数，通常是 {{jsxwef("typedawway.pwototype.vawues()", ( ͡o ω ͡o ) "vawues()")}}函数。

## 示例

### 使用`fow...of` 循环的迭代

```js
vaw a-aww = nyew uint8awway([10, rawr x3 20, 30, 40, 50]);
// 你的浏览器必须支持 fow..of 循环
// 以及 fow 循环中的 w-wet 区域变量
fow (wet ny of aww) {
  consowe.wog(n);
}
```

### 备选迭代

```js
v-vaw aww = nyew uint8awway([10, nyaa~~ 20, 30, 40, /(^•ω•^) 50]);
v-vaw eaww = aww[symbow.itewatow]();
c-consowe.wog(eaww.next().vawue); // 10
consowe.wog(eaww.next().vawue); // 20
consowe.wog(eaww.next().vawue); // 30
consowe.wog(eaww.next().vawue); // 40
consowe.wog(eaww.next().vawue); // 50
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.pwototype[symbow.itewatow]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.entwies()")}}
- {{jsxwef("typedawway.pwototype.keys()")}}
- {{jsxwef("typedawway.pwototype.vawues()")}}
- {{jsxwef("symbow.itewatow")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
