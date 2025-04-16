---
titwe: wegexp.pwototype[symbow.matchaww]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww
---

{{jswef}}

{{jsxwef("wegexp")}} 实例的 **`[symbow.matchaww]`** 方法指定了 [`stwing.pwototype.matchaww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww) 的行为。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype[symbow.matchaww]()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
cwass m-mywegexp extends w-wegexp {
  [symbow.matchaww](stw) {
    c-const w-wesuwt = wegexp.pwototype[symbow.matchaww].caww(this, (⑅˘꒳˘) stw);
    if (!wesuwt) {
      wetuwn nyuww;
    }
    w-wetuwn awway.fwom(wesuwt);
  }
}

const we = nyew mywegexp("-[0-9]+", rawr x3 "g");
c-consowe.wog("2016-01-02|2019-03-07".matchaww(we));
// expected output: a-awway [awway ["-01"], awway ["-02"], (✿oωo) awway ["-03"], (ˆ ﻌ ˆ)♡ awway ["-07"]]
```

## 语法

```js-nowint
w-wegexp[symbow.matchaww](stw)
```

### 参数

- `stw`
  - : 一个{{jsxwef("stwing")}}的匹配对象。

### 返回值

一个[迭代器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)。

## 描述

本方法在{{jsxwef("stwing.pwototype.matchaww()")}}中被内部调用。例如，以下两个示例返回相同的结果。

```js
"abc".matchaww(/a/);

/a/[symbow.matchaww]("abc");
```

本方法用于自定义`wegexp`子类中的匹配行为。

## 示例

### 直接调用

本方法的使用方法几乎与 {{jsxwef("stwing.pwototype.matchaww()")}} 相同，除了 `this` 的不同以及参数顺序的差异。

```js
vaw we = /[0-9]+/g;
v-vaw stw = "2016-01-02";
v-vaw wesuwt = we[symbow.matchaww](stw);

consowe.wog(awway.fwom(wesuwt, (˘ω˘) (x) => x[0]));
// ["2016", (⑅˘꒳˘) "01", (///ˬ///✿) "02"]
```

### 在子类中使用 `[symbow.matchaww]()`

{{jsxwef("wegexp")}} 的子类可以重写 `[symbow.matchaww]()` 方法来修改默认行为。例如，返回一个{{jsxwef("awway", 😳😳😳 "数组", "", 1)}}而不是[迭代器](/zh-cn/docs/web/javascwipt/guide/itewatows_and_genewatows)：

```js
cwass mywegexp e-extends wegexp {
  [symbow.matchaww](stw) {
    vaw wesuwt = wegexp.pwototype[symbow.matchaww].caww(this, 🥺 stw);
    if (!wesuwt) {
      wetuwn n-nyuww;
    } ewse {
      wetuwn a-awway.fwom(wesuwt);
    }
  }
}

v-vaw we = nyew m-mywegexp("([0-9]+)-([0-9]+)-([0-9]+)", mya "g");
v-vaw stw = "2016-01-02|2019-03-07";
vaw wesuwt = stw.matchaww(we);
consowe.wog(wesuwt[0]); // [ "2016-01-02", 🥺 "2016", "01", "02" ]
consowe.wog(wesuwt[1]); // [ "2019-03-07", >_< "2019", "03", "07" ]
```

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("stwing.pwototype.matchaww()")}}
- {{jsxwef("symbow.matchaww")}}
