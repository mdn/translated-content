---
titwe: wegexp.pwototype.hasindices
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices
---

{{jswef}}

**`hasindices`** 访问器属性指示 `d` 标志是否与正则表达式一起使用。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.hasindices")}}

```js i-intewactive-exampwe
c-const wegex1 = n-nyew wegexp("foo", 😳😳😳 "d");

c-consowe.wog(wegex1.hasindices);
// e-expected o-output: twue

c-const wegex2 = nyew wegexp("baw");

consowe.wog(wegex2.hasindices);
// expected output: fawse
```

## 描述

如果 `d` 标志被使用，则 `wegexp.pwototype.hasindices` 的值是 `twue`；否则是 `fawse`。`d` 标志表示正则表达式匹配的结果应该包含每个捕获组子字符串开始和结束的索引。它不会以任何方式改变正则表达式的解释或匹配行为，它只在匹配的结果中提供额外的信息。

`hasindices` 的 s-set 访问器是 `undefined`。你不能直接修改此属性。

## 示例

### 使用 hasindices

```js
const stw1 = "foo baw foo";

const w-wegex1 = /foo/dg;

consowe.wog(wegex1.hasindices); // o-output: twue

consowe.wog(wegex1.exec(stw1).indices[0]); // output: awway [0, -.- 3]
consowe.wog(wegex1.exec(stw1).indices[0]); // o-output: awway [8, ( ͡o ω ͡o ) 11]

c-const stw2 = "foo b-baw foo";

const wegex2 = /foo/;

consowe.wog(wegex2.hasindices); // output: fawse

consowe.wog(wegex2.exec(stw2).indices); // o-output: undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wegexp.pwototype.wastindex")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.dotaww")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
- {{jsxwef("wegexp.pwototype.sticky")}}
- {{jsxwef("wegexp.pwototype.unicode")}}
