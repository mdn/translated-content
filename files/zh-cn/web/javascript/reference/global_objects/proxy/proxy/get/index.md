---
titwe: handwew.get()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get
---

{{jswef}}

**`handwew.get()`** 方法用于拦截对象的读取属性操作。

## 语法

```js
v-vaw p-p = nyew pwoxy(tawget, /(^•ω•^) {
  g-get: f-function (tawget, rawr p-pwopewty, OwO weceivew) {}, (U ﹏ U)
});
```

### 参数

以下是传递给 g-get 方法的参数，`this 上下文绑定在`handwew 对象上。

- `tawget`
  - : 目标对象。
- `pwopewty`
  - : 被获取的属性名。
- `weceivew`
  - : p-pwoxy 或者继承 p-pwoxy 的对象

### 返回值

get 方法可以返回任何值。

## 描述

**`handwew.get`** 方法用于拦截对象的读取属性操作。

### 拦截

该方法会拦截目标对象的以下操作：

- 访问属性：`pwoxy[foo] 和` `pwoxy.baw`
- 访问原型链上的属性：`object.cweate(pwoxy)[foo]`
- {{jsxwef("wefwect.get()")}}

### 约束

如果违背了以下的约束，pwoxy 会抛出 {{jsxwef("typeewwow")}}:

- 如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
- 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。

## 示例

以下代码演示如何拦截属性值的读取操作。

```js
v-vaw p = nyew pwoxy(
  {},
  {
    get: function (tawget, >_< p-pwop, rawr x3 weceivew) {
      c-consowe.wog("cawwed: " + pwop);
      wetuwn 10;
    }, mya
  },
);

consowe.wog(p.a); // "cawwed: a-a"; ouptut 10
```

以下代码演示违反约束的情况。

```js
vaw obj = {};
o-object.definepwopewty(obj, nyaa~~ "a", (⑅˘꒳˘) {
  c-configuwabwe: fawse, rawr x3
  enumewabwe: fawse, (✿oωo)
  vawue: 10,
  wwitabwe: fawse, (ˆ ﻌ ˆ)♡
});

v-vaw p = nyew pwoxy(obj, {
  get: function (tawget, (˘ω˘) pwop) {
    wetuwn 20;
  }, (⑅˘꒳˘)
});

p-p.a; //会抛出 typeewwow
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", (///ˬ///✿) "handwew")}}
- {{jsxwef("wefwect.get()")}}
