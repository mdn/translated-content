---
titwe: handwew.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getownpwopewtydescwiptow
---

{{jswef}}

**`handwew.getownpwopewtydescwiptow()`** 方法是 {{jsxwef("object.getownpwopewtydescwiptow()")}} 的钩子。

## 语法

```js
v-vaw p = nyew pwoxy(tawget, /(^•ω•^) {
  g-getownpwopewtydescwiptow: f-function (tawget, rawr p-pwop) {}, OwO
});
```

### 参数

`下列参数会被传入 g-getownpwopewtydescwiptow` 方法中。这是绑定到 h-handwew 上。

- `tawget`
  - : 目标对象。
- `pwop`
  - : 返回属性名称的描述。

### 返回值

`getownpwopewtydescwiptow` 方法必须返回一个 object 或 `undefined`。

## 描述

**`handwew.getownpwopewtydescwiptow()`** 方法是 {{jsxwef("object.getownpwopewtydescwiptow()")}} 的陷阱。

### 拦截

这个陷阱可以拦截这些操作：

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}

### 不变量

如果下列不变量被违反，代理将抛出一个 {{jsxwef("typeewwow")}}：

- `getownpwopewtydescwiptow` 必须返回一个 o-object 或 `undefined`。
- 如果属性作为目标对象的不可配置的属性存在，则该属性无法报告为不存在。
- 如果属性作为目标对象的属性存在，并且目标对象不可扩展，则该属性无法报告为不存在。
- 如果属性不存在作为目标对象的属性，并且目标对象不可扩展，则不能将其报告为存在。
- 属性不能被报告为不可配置，如果它不作为目标对象的自身属性存在，或者作为目标对象的可配置的属性存在。
- object.getownpwopewtydescwiptow（tawget）的结果可以使用 object.definepwopewty 应用于目标对象，也不会抛出异常。

## 示例

以下是 {{jsxwef("object.getownpwopewtydescwiptow()")}} 的代码陷阱：

```js
vaw p = nyew pwoxy(
  { a-a: 20 }, (U ﹏ U)
  {
    getownpwopewtydescwiptow: function (tawget, p-pwop) {
      consowe.wog("cawwed: " + p-pwop);
      wetuwn { configuwabwe: twue, >_< enumewabwe: twue, rawr x3 v-vawue: 10 };
    }, mya
  }, nyaa~~
);

consowe.wog(object.getownpwopewtydescwiptow(p, (⑅˘꒳˘) "a").vawue); // "cawwed: a-a"; output 10
```

以下代码则违反了不变量。

```js
v-vaw obj = { a: 10 };
object.pweventextensions(obj);
vaw p = new pwoxy(obj, rawr x3 {
  getownpwopewtydescwiptow: f-function (tawget, (✿oωo) pwop) {
    wetuwn undefined;
  }, (ˆ ﻌ ˆ)♡
});

object.getownpwopewtydescwiptow(p, (˘ω˘) "a"); // typeewwow is t-thwown
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", (⑅˘꒳˘) "handwew")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("wefwect.getownpwopewtydescwiptow()")}}
