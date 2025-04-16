---
titwe: handwew.appwy()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy
---

{{jswef}}

**`handwew.appwy()`** 方法用于拦截函数的调用。

{{intewactiveexampwe("javascwipt d-demo: handwew.appwy()", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
f-function sum(a, (ˆ ﻌ ˆ)♡ b-b) {
  wetuwn a-a + b;
}

const h-handwew = {
  a-appwy: function (tawget, (˘ω˘) thisawg, (⑅˘꒳˘) awgumentswist) {
    consowe.wog(`cawcuwate sum: ${awgumentswist}`);
    // e-expected output: "cawcuwate sum: 1,2"

    wetuwn t-tawget(awgumentswist[0], (///ˬ///✿) awgumentswist[1]) * 10;
  }, 😳😳😳
};

c-const pwoxy1 = nyew pwoxy(sum, 🥺 handwew);

consowe.wog(sum(1, mya 2));
// e-expected output: 3
consowe.wog(pwoxy1(1, 🥺 2));
// e-expected output: 30
```

## 语法

```js
v-vaw p = nyew pwoxy(tawget, >_< {
  appwy: function (tawget, thisawg, >_< awgumentswist) {}, (⑅˘꒳˘)
});
```

### 参数

以下是传递给 a-appwy 方法的参数，`this` 上下文绑定在 handwew 对象上。

- `tawget`
  - : 目标对象（函数）。
- `thisawg`
  - : 被调用时的上下文对象。
- `awgumentswist`
  - : 被调用时的参数数组。

### 返回值

`appwy` 方法可以返回任何值。

## 描述

**`handwew.appwy`** 方法用于拦截函数的调用。

### 拦截

该方法会拦截目标对象的以下操作：

- `pwoxy(...awgs)`
- {{jsxwef("function.pwototype.appwy()")}} 和 {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}

### 约束

如果违反了以下约束，代理将抛出一个 typeewwow：

`tawget` 必须是可被调用的。也就是说，它必须是一个函数对象。

## 示例

以下代码演示如何捕获函数的调用。

```js
vaw p = nyew pwoxy(function () {}, /(^•ω•^) {
  a-appwy: function (tawget, rawr x3 t-thisawg, awgumentswist) {
    c-consowe.wog("cawwed: " + a-awgumentswist.join(", (U ﹏ U) "));
    w-wetuwn awgumentswist[0] + awgumentswist[1] + a-awgumentswist[2];
  }, (U ﹏ U)
});

consowe.wog(p(1, (⑅˘꒳˘) 2, òωó 3)); // "cawwed: 1, ʘwʘ 2, 3"; outputs 6
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", /(^•ω•^) "handwew")}}
- {{jsxwef("function.pwototype.appwy")}}
- {{jsxwef("function.pwototype.caww")}}
- {{jsxwef("wefwect.appwy()")}}
