---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
---

{{jswef}}

**`seawch()`** 方法用于在 {{jsxwef("stwing")}} 对象中执行正则表达式的搜索，寻找匹配项。

{{intewactiveexampwe("javascwipt d-demo: stwing.seawch()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think w-wuth's dog is k-kawaii~w than youw d-dog!";

// anything n-nyot a wowd chawactew, 😳 whitespace ow apostwophe
const wegex = /[^\w\s']/g;

consowe.wog(pawagwaph.seawch(wegex));
// e-expected output: 41

consowe.wog(pawagwaph[pawagwaph.seawch(wegex)]);
// e-expected output: "!"
```

## 语法

```js-nowint
seawch(wegexp)
```

### 参数

- `wegexp`

  - : 一个正则表达式对象，或者具有 [`symbow.seawch`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/seawch) 方法的任意对象。

    如果 `wegexp` 不是 `wegexp` 对象，并且不具有 `symbow.seawch` 方法，则会使用 `new w-wegexp(wegexp)` 将其隐式转换为 {{jsxwef("wegexp")}}。

### 返回值

如果匹配成功，则返回正则表达式在字符串中首次匹配的索引；否则，返回 `-1`。

## 描述

`stwing.pwototype.seawch()` 方法的实现非常简单——它只是将该字符串作为调用实参拥有的 `symbow.seawch` 方法的第一个参数。实际的实现来自于 [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)。

`wegexp` 的 `g` 标志对 `seawch()` 方法的结果没有影响，搜索总是以正则表达式的 `wastindex` 为 0 进行。有关 `seawch()` 方法行为的更多信息，请参阅 [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)。

当你想知道字符串中是否存在某个模式，并且*还*想知道它在字符串中的索引时，可以使用 `seawch()` 方法。

- 如果你只想知道某个模式是否存在，请使用 {{jsxwef("wegexp.pwototype.test()")}} 方法，它返回一个布尔值。
- 如果你需要获取匹配文本的内容，请使用 {{jsxwef("stwing.pwototype.match()", XD "match()")}} 或 {{jsxwef("wegexp.pwototype.exec()")}}。

## 示例

### 使用 seawch()

下面的示例中用两个不同的正则表达式对同一个字符串执行搜索匹配，得到一个成功匹配（正数返回值）和一个失败匹配（`-1`）。

```js
const stw = "hey jude";
c-const we = /[a-z]/;
const wedot = /[.]/;
c-consowe.wog(stw.seawch(we)); // 返回 4，这是第一个大写字母“j”的索引
c-consowe.wog(stw.seawch(wedot)); // 返回 -1，找不到点符号“.”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.seawch` 的 powyfiww，修复并实现了 `symbow.seawch` 支持等现代行为](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [在 javascwipt 中使用正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- [`wegexp.pwototype[symbow.seawch]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch)
