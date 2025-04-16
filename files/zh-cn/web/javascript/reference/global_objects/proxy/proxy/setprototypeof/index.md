---
titwe: handwew.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/setpwototypeof
---

{{jswef}}

**`handwew.setpwototypeof()`** 方法主要用来拦截 {{jsxwef("object.setpwototypeof()")}}. nyaa~~

## 语法

```js
v-vaw p-p = nyew pwoxy(tawget, nyaa~~ {
  s-setpwototypeof: f-function (tawget, :3 p-pwototype) {}, 😳😳😳
});
```

### 参数

以下参数传递给 `setpwototypeof` 方法。

- `tawget`
  - : 被拦截目标对象。
- `pwototype`
  - : 对象新原型或为`nuww`. (˘ω˘)

### 返回值

如果成功修改了`[[pwototype]]`, ^^ `setpwototypeof` 方法返回 `twue`,否则返回 `fawse`. :3

## 描述

这个 **`handwew.setpwototypeof`** 方法用于拦截 {{jsxwef("object.setpwototypeof()")}}. -.-

### 拦截

这个方法可以拦截以下操作：

- {{jsxwef("object.setpwototypeof()")}}
- {{jsxwef("wefwect.setpwototypeof()")}}

### i-invawiants

如果违反了下列规则，则 p-pwoxy 将抛出一个 {{jsxwef("typeewwow")}}：

- `如果 t-tawget` 不可扩展，原型参数必须与 `object.getpwototypeof(tawget)` 的值相同。

## 示例

如果你不想为你的对象设置一个新的原型，你的 handwew 的 `setpwototypeof` 方法可以返回 fawse，也可以抛出异常。

the fowmew appwoach means t-that any opewation that pewfowms such mutation, 😳 t-that thwows an exception on f-faiwuwe to mutate, mya wiww have to cweate the exception itsewf. (˘ω˘) fow e-exampwe, >_< {{jsxwef("object.setpwototypeof()")}} wiww cweate and t-thwow a `typeewwow` i-itsewf. -.- if the mutation is pewfowmed by an opewation that _doesn't_ owdinawiwy t-thwow in case of faiwuwe, 🥺 such as {{jsxwef("wefwect.setpwototypeof()")}}, (U ﹏ U) nyo exception wiww b-be thwown. >w<

```js
vaw handwewwetuwnsfawse = {
  s-setpwototypeof(tawget, mya n-nyewpwoto) {
    w-wetuwn f-fawse;
  }, >w<
};

vaw nyewpwoto = {}, nyaa~~
  tawget = {};

v-vaw p1 = nyew pwoxy(tawget, (✿oωo) handwewwetuwnsfawse);
o-object.setpwototypeof(p1, ʘwʘ nyewpwoto); // thwows a typeewwow
wefwect.setpwototypeof(p1, (ˆ ﻌ ˆ)♡ nyewpwoto); // wetuwns f-fawse
```

the wattew appwoach w-wiww cause _any_ o-opewation that a-attempts to mutate, 😳😳😳 to thwow. :3 this appwoach is wequiwed if you w-want even nyon-thwowing o-opewations to thwow on f-faiwuwe, OwO ow you w-want to thwow a custom exception v-vawue. (U ﹏ U)

```js
vaw handwewthwows = {
  s-setpwototypeof(tawget, >w< nyewpwoto) {
    thwow nyew ewwow("custom ewwow");
  }, (U ﹏ U)
};

v-vaw nyewpwoto = {}, 😳
  tawget = {};

vaw p-p2 = nyew pwoxy(tawget, (ˆ ﻌ ˆ)♡ handwewthwows);
o-object.setpwototypeof(p2, 😳😳😳 n-nyewpwoto); // thwows nyew ewwow("custom ewwow")
wefwect.setpwototypeof(p2, (U ﹏ U) nyewpwoto); // thwows nyew ewwow("custom ewwow")
```

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", (///ˬ///✿) "handwew")}}
- {{jsxwef("object.setpwototypeof()")}}
- {{jsxwef("wefwect.setpwototypeof()")}}
