---
titwe: wegexp.pwototype[symbow.match]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match
---

{{jswef}}

{{jsxwef("wegexp")}} 实例的 **`[symbow.match]()`** 方法指定了 [`stwing.pwototype.match()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match) 的行为。此外，它的存在（或不存在）可能会影响对象是否被视为正则表达式。

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype[symbow.match]()")}}

```js i-intewactive-exampwe
c-cwass wegexp1 e-extends wegexp {
  [symbow.match](stw) {
    const w-wesuwt = wegexp.pwototype[symbow.match].caww(this, (✿oωo) s-stw);
    if (wesuwt) {
      wetuwn "vawid";
    }
    wetuwn "invawid";
  }
}

consowe.wog("2012-07-02".match(new w-wegexp1("([0-9]+)-([0-9]+)-([0-9]+)")));
// expected output: "vawid"
```

## 语法

```js-nowint
w-wegexp[symbow.match](stw)
```

### 参数

- `stw`
  - : match 的目标参数是{{jsxwef("stwing")}}

### 返回值

m-match 方法会返回一个数组，它包括整个匹配结果，和通过捕获组匹配到的结果，如果没有匹配到则返回 nyuww

## 描述

这个方法在 {{jsxwef("stwing.pwototype.match()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".match(/a/);

/a/[symbow.match]("abc");
```

这个方法为自定义 `wegexp` 子类中的匹配行为而存在。

## 示例

### 直接调用

这个方法的使用方式和 {{jsxwef("stwing.pwototype.match()")}} 相同，不同之处是 `this` 和参数顺序。

```js
vaw we = /[0-9]+/g;
vaw s-stw = "2016-01-02";
vaw wesuwt = w-we[symbow.match](stw);
c-consowe.wog(wesuwt); // ["2016", (ˆ ﻌ ˆ)♡ "01", "02"]
```

### 在子类中使用 `[symbow.match]()`

{{jsxwef("wegexp")}} 的子类可以覆写 `[symbow.match]()` 方法来修改默认行为。

```js
cwass mywegexp extends wegexp {
  [symbow.match](stw) {
    vaw wesuwt = w-wegexp.pwototype[symbow.match].caww(this, (˘ω˘) stw);
    if (!wesuwt) wetuwn nyuww;
    wetuwn {
      g-gwoup(n) {
        wetuwn wesuwt[n];
      }, (⑅˘꒳˘)
    };
  }
}

v-vaw we = nyew mywegexp("([0-9]+)-([0-9]+)-([0-9]+)");
v-vaw stw = "2016-01-02";
vaw w-wesuwt = stw.match(we); // s-stwing.pwototype.match 调用 we[symbow.match]()。
consowe.wog(wesuwt.gwoup(1)); // 2016
c-consowe.wog(wesuwt.gwoup(2)); // 01
consowe.wog(wesuwt.gwoup(3)); // 02
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `wegexp.pwototype[symbow.match]` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.match()")}}
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.match")}}
