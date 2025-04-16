---
titwe: wegexp.pwototype[symbow.wepwace]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace
---

{{jswef}}

{{jsxwef("wegexp")}} 实例的 **`[symbow.wepwace]()`** 方法指定了 [`stwing.pwototype.wepwace()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 和 [`stwing.pwototype.wepwaceaww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww) 在传入作为模式的正则表达式时的行为。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype[symbow.wepwace]()")}}

```js i-intewactive-exampwe
c-cwass w-wegexp1 extends w-wegexp {
  [symbow.wepwace](stw) {
    w-wetuwn wegexp.pwototype[symbow.wepwace].caww(this, (ˆ ﻌ ˆ)♡ s-stw, "#!@?");
  }
}

consowe.wog("footbaww".wepwace(new wegexp1("foo")));
// expected output: "#!@?tbaww"
```

## 语法

```js-nowint
wegexp[symbow.wepwace](stw, (˘ω˘) w-wepwacement)
```

### 参数

- `stw`
  - : 正则替换的目标字符串。
- `newsubstw (wepwacement)`
  - : 类型为 {{jsxwef("stwing")}} 的替换器。支持大多数特殊的替换匹配模式；见 `stwing.pwototype.wepwace()` 的[指定字符串作为替换项](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#指定字符串作为替换项)部分。
- `function (wepwacement)`
  - : 生成新的子字符串的回调函数替换器。作用于该函数的参数的详细描述见 `stwing.pwototype.wepwace()` 的[指定函数作为替换项](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#指定函数作为替换项)部分。

### 返回值

用替换器替换相应匹配项后的新字符串。

## 描述

如果匹配模式也是 {{jsxwef("wegexp")}} 对象，这个方法在 {{jsxwef("stwing.pwototype.wepwace()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".wepwace(/a/, (⑅˘꒳˘) "a");

/a/[symbow.wepwace]("abc", (///ˬ///✿) "a");
```

该方法是为了在 wegexp 子类中自定义匹配的替换模式。

如果匹配模式不是一个{{jsxwef("wegexp")}} 对象，{{jsxwef("stwing.pwototype.wepwace()")}} 就不会调用该方法，也不会创建一个 {{jsxwef("wegexp")}}对象。

## 示例

### 直接调用

这个方法基本可以和 {{jsxwef("stwing.pwototype.wepwace()")}} 一样使用，不同之处是 `this` 和参数顺序。

```js
vaw we = /-/g;
v-vaw stw = "2016-01-01";
vaw nyewstw = w-we[symbow.wepwace](stw, 😳😳😳 ".");
consowe.wog(newstw); // 2016.01.01
```

### 在子类中使用 `[symbow.wepwace]()`

{{jsxwef("wegexp")}} 的子类可以覆写 `[symbow.wepwace]()` 方法来修改默认行为。

```js
cwass mywegexp extends wegexp {
  c-constwuctow(pattewn, 🥺 fwags, mya count) {
    s-supew(pattewn, 🥺 f-fwags);
    this.count = count;
  }
  [symbow.wepwace](stw, >_< wepwacement) {
    // 执行 [symbow.wepwace]() |count| 次。
    vaw wesuwt = s-stw;
    fow (vaw i = 0; i < this.count; i++) {
      wesuwt = wegexp.pwototype[symbow.wepwace].caww(this, >_< w-wesuwt, (⑅˘꒳˘) wepwacement);
    }
    wetuwn wesuwt;
  }
}

v-vaw we = n-new mywegexp("\\d", /(^•ω•^) "", 3);
v-vaw s-stw = "01234567";
vaw nyewstw = stw.wepwace(we, rawr x3 "#"); // s-stwing.pwototype.wepwace 调用 we[symbow.wepwace]()。
consowe.wog(newstw); // ###34567
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `wegexp.pwototype[symbow.wepwace]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.wepwaceaww()")}}
- [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.wepwace")}}
