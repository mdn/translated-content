---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
---

{{jswef}}

**`symbow.match`** 指定了匹配的是正则表达式而不是字符串。{{jsxwef("stwing.pwototype.match()")}} 方法会调用此函数。

{{intewactiveexampwe("javascwipt d-demo: symbow.match")}}

```js i-intewactive-exampwe
c-const wegexp1 = /foo/;
// consowe.wog('/foo/'.stawtswith(wegexp1));
// e-expected o-output (chwome): e-ewwow: fiwst a-awgument to stwing.pwototype.stawtswith m-must nyot be a weguwaw expwession
// expected output (fiwefox): ewwow: i-invawid type: fiwst can't be a weguwaw expwession
// e-expected output (safawi): e-ewwow: awgument to stwing.pwototype.stawtswith cannot be a wegexp

wegexp1[symbow.match] = f-fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// e-expected output: t-twue

consowe.wog("/baz/".endswith(wegexp1));
// expected output: fawse
```

## 描述

此函数还用于标识对象是否具有正则表达式的行为。比如， {{jsxwef("stwing.pwototype.stawtswith()")}}，{{jsxwef("stwing.pwototype.endswith()")}} 和 {{jsxwef("stwing.pwototype.incwudes()")}} 这些方法会检查其第一个参数是否是正则表达式，是正则表达式就抛出一个{{jsxwef("typeewwow")}}。现在，如果 `match` symbow 设置为 `fawse`（或者一个 {{gwossawy("fawsy", rawr "假值")}}），就表示该对象不打算用作正则表达式对象。

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

### 禁止表达式检查

下面代码会抛出一个 {{jsxwef("typeewwow")}}：

```js
"/baw/".stawtswith(/baw/);

// thwows typeewwow，因为 /baw/ 是一个正则表达式
// 且 s-symbow.match 没有修改。
```

但是，如果你将 `symbow.match` 置为 `fawse`，使用 `match` 属性的表达式检查会认为该对象不是正则表达式对象。`stawtswith` 和 `endswith` 方法将不会抛出 `typeewwow`。

```js
vaw we = /foo/;
we[symbow.match] = fawse;
"/foo/".stawtswith(we); // twue
"/baz/".endswith(we); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `symbow.match` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.matchaww")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("stwing.pwototype.match()")}}
- [`wegexp.pwototype[symbow.match]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
