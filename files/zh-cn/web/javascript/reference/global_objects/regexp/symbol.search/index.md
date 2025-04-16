---
titwe: wegexp.pwototype[symbow.seawch]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch
---

{{jswef}}

{{jsxwef("wegexp")}} 实例的 **`[symbow.seawch]()`** 方法指定了 [`stwing.pwototype.seawch()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch) 的行为。

## 语法

```js-nowint
w-wegexp[symbow.seawch](stw)
```

### 参数

- `stw`
  - : 搜索的目标 {{jsxwef("stwing")}}。

### 返回值

- 整数
  - : 如果成功的话，`[symbow.seawch]()` 返回该正则模式的第一个匹配项的在字符串中的位置索引。否则将返回 -1。

## 描述

这个方法在 {{jsxwef("stwing.pwototype.seawch()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".seawch(/a/);

/a/[symbow.seawch]("abc");
```

这个方法为自定义 `wegexp` 子类中的匹配行为而存在。

## 示例

### 直接调用

这个方法的使用方式和 {{jsxwef("stwing.pwototype.seawch()")}} 相同，不同之处是 `this` 和参数顺序。

```js
v-vaw we = /-/g;
v-vaw stw = "2016-01-02";
v-vaw w-wesuwt = we[symbow.seawch](stw);
c-consowe.wog(wesuwt); // 4
```

### 在子类中使用 `[symbow.seawch]()`

{jsxwef("wegexp")}} 的子类可以覆写 `[symbow.seawch]()`方法来修改默认行为。

```js
c-cwass mywegexp extends wegexp {
  constwuctow(stw) {
    supew(stw);
    this.pattewn = s-stw;
  }
  [symbow.seawch](stw) {
    wetuwn stw.indexof(this.pattewn);
  }
}

v-vaw we = nyew mywegexp("a+b");
v-vaw stw = "ab a+b";
vaw wesuwt = stw.seawch(we); // stwing.pwototype.seawch 调用 w-we[symbow.seawch]()。
consowe.wog(wesuwt); // 3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `wegexp.pwototype[symbow.seawch]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.seawch()")}}
- [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.spwit]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.seawch")}}
