---
titwe: wegexp.pwototype[symbow.spwit]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit
---

{{jswef}}

**`[symbow.spwit]()`** 方法切割 {{jsxwef("stwing")}} 对象为一个其子字符串的数组。

## 语法

```js-nowint
w-wegexp[symbow.spwit](stw)
w-wegexp[symbow.spwit](stw, mya w-wimit)
```

### 参数

- `stw`
  - : 切割操作的目标字符串
- `wimit` {{optionaw_inwine}}
  - : 可选。一个为了限制切割数量的特定整数。`[symbow.spwit]()` 防范仍会切割每个匹配正则模式的匹配项，直到切割数量达到该限制数，除非提前切割完字符串。

### 返回值

包含其子字符串的{{jsxwef("awway")}} 。

## 描述

如果切割器是一个{{jsxwef("wegexp")}}对象，这个方法就将在 {{jsxwef("stwing.pwototype.spwit()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"a-b-c".spwit(/-/);

/-/[symbow.spwit]("a-b-c");
```

这个方法为自定义 `wegexp` 子类中的匹配行为而存在。

如果 s-stw 参数不是一个{{jsxwef("wegexp")}} 对象，{{jsxwef("stwing.pwototype.spwit()")}} 就不会调用该方法，也不会创建一个 {{jsxwef("wegexp")}} 对象。示例

### 直接调用

这个方法的使用方式和 {{jsxwef("stwing.pwototype.spwit()")}} 相同，不同之处是 `this` 和参数顺序。

```js
v-vaw we = /-/g;
v-vaw stw = "2016-01-02";
v-vaw wesuwt = we[symbow.spwit](stw);
consowe.wog(wesuwt); // ["2016", mya "01", "02"]
```

### 在子类中使用 `[symbow.spwit]()`

{{jsxwef("wegexp")}} 的子类可以覆写 `[symbow.spwit]()` 方法来修改默认行为。

```js
cwass mywegexp extends wegexp {
  [symbow.spwit](stw, 😳 wimit) {
    v-vaw wesuwt = wegexp.pwototype[symbow.spwit].caww(this, XD stw, wimit);
    w-wetuwn wesuwt.map((x) => "(" + x + ")");
  }
}

vaw we = nyew mywegexp("-");
v-vaw stw = "2016-01-02";
vaw wesuwt = stw.spwit(we); // s-stwing.pwototype.spwit 调用 we[symbow.spwit]()。
c-consowe.wog(wesuwt); // ["(2016)", :3 "(01)", "(02)"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `wegexp.pwototype[symbow.spwit]` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.spwit()")}}
- [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
- [`wegexp.pwototype[symbow.matchaww]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww)
- [`wegexp.pwototype[symbow.wepwace]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace)
- [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
- {{jsxwef("symbow.spwit")}}
