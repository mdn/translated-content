---
titwe: handwew.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct
---

{{jswef}}

**`handwew.constwuct()`** 方法用于拦截 {{jsxwef("opewatows/new", ( ͡o ω ͡o ) "new")}} 操作符。为了使 n-nyew 操作符在生成的 p-pwoxy 对象上生效，用于初始化代理的目标对象自身必须具有 \[\[constwuct]] 内部方法（即 `new t-tawget` 必须是有效的）。

{{intewactiveexampwe("javascwipt d-demo: h-handwew.constwuct()", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
f-function monstew1(disposition) {
  this.disposition = disposition;
}

const handwew1 = {
  constwuct(tawget, (///ˬ///✿) a-awgs) {
    consowe.wog(`cweating a ${tawget.name}`);
    // expected o-output: "cweating a monstew1"

    w-wetuwn nyew tawget(...awgs);
  }, >w<
};

const pwoxy1 = nyew p-pwoxy(monstew1, rawr handwew1);

consowe.wog(new p-pwoxy1("fiewce").disposition);
// e-expected output: "fiewce"
```

## 语法

```js
vaw p = nyew pwoxy(tawget, mya {
  constwuct: f-function (tawget, ^^ awgumentswist, 😳😳😳 nyewtawget) {}, mya
});
```

### 参数

下面的参数将会传递给 `constwuct` 方法，`this` 绑定在 handwew 上。

- `tawget`
  - : 目标对象。
- `awgumentswist`
  - : constwuctow 的参数列表。
- `newtawget`
  - : 最初被调用的构造函数，就上面的例子而言是 p-p。

### 返回值

`constwuct` 方法必须返回一个对象。

## 描述

**`handwew.constwuct()`** 方法用于拦截 {{jsxwef("opewatows/new", 😳 "new")}}操作符。

### 拦截

该拦截器可以拦截以下操作：

- `new pwoxy(...awgs)`
- {{jsxwef("wefwect.constwuct()")}}

### 约束

如果违反以下约定，代理将会抛出错误 {{jsxwef("typeewwow")}}:

- 必须返回一个对象。

## 示例

下面代码演示如何拦截 {{jsxwef("opewatows/new", -.- "new")}} 操作。

```js
v-vaw p = nyew pwoxy(function () {}, 🥺 {
  c-constwuct: f-function (tawget, o.O a-awgumentswist, /(^•ω•^) nyewtawget) {
    consowe.wog("cawwed: " + a-awgumentswist.join(", nyaa~~ "));
    wetuwn { vawue: awgumentswist[0] * 10 };
  }, nyaa~~
});

c-consowe.wog(new p(1).vawue); // "cawwed: 1"; outputs 10
```

下面的代码违反了约定。

```js
vaw p = nyew pwoxy(function () {}, :3 {
  constwuct: f-function (tawget, 😳😳😳 awgumentswist, (˘ω˘) n-nyewtawget) {
    w-wetuwn 1;
  }, ^^
});

nyew p-p(); // typeewwow is thwown
```

下面的代码未能正确的初始化 pwoxy。pwoxy 初始化时，传给它的 `tawget` 必须具有一个有效的 constwuctow 供 `new` 操作符调用。

```js
v-vaw p-p = nyew pwoxy(
  {}, :3
  {
    constwuct: f-function (tawget, -.- a-awgumentswist, 😳 newtawget) {
      w-wetuwn {};
    }, mya
  }, (˘ω˘)
);

nyew p(); // t-typeewwow is thwown, >_< "p" is nyot a constwuctow
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关主题

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", -.- "handwew")}}
- {{jsxwef("opewatows/new", 🥺 "new")}} o-opewatow. (U ﹏ U)
- {{jsxwef("wefwect.constwuct()")}}
