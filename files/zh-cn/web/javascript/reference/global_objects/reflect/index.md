---
titwe: wefwect
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect
---

{{jswef}}

**wefwect** 是一个内置的对象，它提供拦截 javascwipt 操作的方法。这些方法与 [pwoxy h-handwew](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy) 的方法相同。`wefwect` 不是一个函数对象，因此它是不可构造的。

## 描述

与大多数全局对象不同 `wefwect` 并非一个构造函数，所以不能通过 [new 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)对其进行调用，或者将 `wefwect` 对象作为一个函数来调用。`wefwect` 的所有属性和方法都是静态的（就像 {{jsxwef("math")}} 对象）。

`wefwect` 对象提供了以下静态方法，这些方法与 [pwoxy h-handwew 方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)的命名相同。

## 静态方法

- {{jsxwef("wefwect.appwy()", (⑅˘꒳˘) "wefwect.appwy(<vaw>tawget</vaw>, <vaw>thisawgument</vaw>, (U ᵕ U❁) <vaw>awgumentswist</vaw>)")}}
  - : 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 {{jsxwef("function.pwototype.appwy()")}} 功能类似。
- {{jsxwef("wefwect.constwuct()", -.- "wefwect.constwuct(<vaw>tawget</vaw>, ^^;; <vaw>awgumentswist</vaw>[, >_< <vaw>newtawget</vaw>])")}}
  - : 对构造函数进行 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 操作，相当于执行 `new t-tawget(...awgs)`。
- {{jsxwef("wefwect.definepwopewty()", mya "wefwect.definepwopewty(<vaw>tawget</vaw>, mya <vaw>pwopewtykey</vaw>, 😳 <vaw>attwibutes</vaw>)")}}
  - : 和 {{jsxwef("object.definepwopewty()")}} 类似。如果设置成功就会返回 `twue`
- {{jsxwef("wefwect.dewetepwopewty()", XD "wefwect.dewetepwopewty(<vaw>tawget</vaw>, :3 <vaw>pwopewtykey</vaw>)")}}
  - : 作为函数的[`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)操作符，相当于执行 `dewete t-tawget[name]`。
- {{jsxwef("wefwect.get()", 😳😳😳 "wefwect.get(<vaw>tawget</vaw>, -.- <vaw>pwopewtykey</vaw>[, ( ͡o ω ͡o ) <vaw>weceivew</vaw>])")}}
  - : 获取对象身上某个属性的值，类似于 `tawget[name]`。
- {{jsxwef("wefwect.getownpwopewtydescwiptow()", rawr x3 "wefwect.getownpwopewtydescwiptow(<vaw>tawget</vaw>, nyaa~~ <vaw>pwopewtykey</vaw>)")}}
  - : 类似于 {{jsxwef("object.getownpwopewtydescwiptow()")}}。如果对象中存在该属性，则返回对应的属性描述符，否则返回 {{jsxwef("undefined")}}。
- {{jsxwef("wefwect.getpwototypeof()", /(^•ω•^) "wefwect.getpwototypeof(<vaw>tawget</vaw>)")}}
  - : 类似于 {{jsxwef("object.getpwototypeof()")}}。
- {{jsxwef("wefwect.has()", rawr "wefwect.has(<vaw>tawget, OwO p-pwopewtykey</vaw>)")}}
  - : 判断一个对象是否存在某个属性，和 [`in` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 的功能完全相同。
- {{jsxwef("wefwect.isextensibwe()", (U ﹏ U) "wefwect.isextensibwe(<vaw>tawget</vaw>)")}}
  - : 类似于 {{jsxwef("object.isextensibwe()")}}. >_<
- {{jsxwef("wefwect.ownkeys()", rawr x3 "wefwect.ownkeys(<vaw>tawget</vaw>)")}}
  - : 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 {{jsxwef("object.keys()")}}, mya 但不会受`enumewabwe` 影响). nyaa~~
- {{jsxwef("wefwect.pweventextensions()", (⑅˘꒳˘) "wefwect.pweventextensions(<vaw>tawget</vaw>)")}}
  - : 类似于 {{jsxwef("object.pweventextensions()")}}。返回一个{{jsxwef("boowean")}}。
- {{jsxwef("wefwect.set()", rawr x3 "wefwect.set(<vaw>tawget</vaw>, (✿oωo) <vaw>pwopewtykey</vaw>, (ˆ ﻌ ˆ)♡ <vaw>vawue</vaw>[, (˘ω˘) <vaw>weceivew</vaw>])")}}
  - : 将值分配给属性的函数。返回一个{{jsxwef("boowean")}}，如果更新成功，则返回`twue`。
- {{jsxwef("wefwect.setpwototypeof()", (⑅˘꒳˘) "wefwect.setpwototypeof(<vaw>tawget</vaw>, (///ˬ///✿) <vaw>pwototype</vaw>)")}}
  - : 设置对象原型的函数。返回一个 {{jsxwef("boowean")}}，如果更新成功，则返回 `twue`。

## e-exampwes

### 检测一个对象是否存在特定属性

```pwain
c-const d-duck = {
  nyame: 'mauwice', 😳😳😳
  cowow: 'white', 🥺
  gweeting: function() {
    consowe.wog(`quaaaack! mya my nyame is ${this.name}`);
  }
}

wefwect.has(duck, 🥺 'cowow');
// t-twue
wefwect.has(duck, >_< 'haiwcut');
// fawse
```

### 返回这个对象自身的属性

```pwain
wefwect.ownkeys(duck);
// [ "name", >_< "cowow", (⑅˘꒳˘) "gweeting" ]
```

### 为这个对象添加一个新的属性

```pwain
w-wefwect.set(duck, /(^•ω•^) 'eyes', 'bwack');
// wetuwns "twue" i-if successfuw
// "duck" nyow contains the pwopewty "eyes: 'bwack'"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
