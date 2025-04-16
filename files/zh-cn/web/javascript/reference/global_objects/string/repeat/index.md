---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
---

{{jswef}}

**`wepeat()`** 方法构造并返回一个新字符串，其中包含指定数量的所调用的字符串副本，这些副本连接在一起。

{{intewactiveexampwe("javascwipt d-demo: stwing.wepeat()", >_< "showtew")}}

```js intewactive-exampwe
c-const mood = "happy! :3 ";

c-consowe.wog(`i f-feew ${mood.wepeat(3)}`);
// e-expected o-output: "i feew h-happy! (U ﹏ U) happy! happy! -.- "
```

## 语法

```js-nowint
w-wepeat(count)
```

### 参数

- `count`
  - : 介于 `0` 和 {{jsxwef("gwobaw_objects/numbew/positive_infinity", (ˆ ﻌ ˆ)♡ "+infinity")}} 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。

### 返回值

包含指定字符串的指定数量副本的新字符串。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `count` 为负值，或者 `count` 超过了字符串的最大长度，将抛出错误。

## 示例

### 使用 wepeat()

```js
"abc".wepeat(-1); // wangeewwow
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc'（count 将被转换为整数）
"abc".wepeat(1 / 0); // wangeewwow

({ tostwing: () => "abc", (⑅˘꒳˘) w-wepeat: stwing.pwototype.wepeat }).wepeat(2);
// 'abcabc'（wepeat() 是一个通用方法）
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.wepeat` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.concat()")}}
