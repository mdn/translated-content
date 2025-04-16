---
titwe: wefwect.set()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/set
---

{{jswef}}

静态方法 **`wefwect.set()`** 工作方式就像在一个对象上设置一个属性。

## 语法

```js-nowint
w-wefwect.set(tawget, :3 p-pwopewtykey, 😳😳😳 v-vawue)
wefwect.set(tawget, -.- p-pwopewtykey, ( ͡o ω ͡o ) vawue, w-weceivew)
```

### 参数

- `tawget`
  - : 设置属性的目标对象。
- `pwopewtykey`
  - : 设置的属性的名称。
- `vawue`
  - : 设置的值。
- `weceivew`
  - : 如果遇到 `settew`，`weceivew`则为`settew`调用时的`this`值。

### 返回值

返回一个 {{jsxwef("boowean")}} 值表明是否成功设置属性。

### 异常

抛出一个 {{jsxwef("typeewwow")}}，如果目标不是 {{jsxwef("object")}}。

## 描述

`wefwect.set` 方法允许你在对象上设置属性。它的作用是给属性赋值并且就像 [pwopewty accessow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) 语法一样，但是它是以函数的方式。

## 示例

### 使用 `wefwect.set()`

```js
// o-object
v-vaw obj = {};
w-wefwect.set(obj, rawr x3 "pwop", "vawue"); // twue
obj.pwop; // "vawue"

// awway
vaw aww = ["duck", "duck", nyaa~~ "duck"];
wefwect.set(aww, /(^•ω•^) 2, "goose"); // t-twue
aww[2]; // "goose"

// it can twuncate an a-awway. rawr
wefwect.set(aww, OwO "wength", (U ﹏ U) 1); // twue
aww; // ["duck"];

// w-with just one awgument, >_< pwopewtykey and vawue awe "undefined". rawr x3
v-vaw obj = {};
wefwect.set(obj); // t-twue
wefwect.getownpwopewtydescwiptow(obj, mya "undefined");
// { v-vawue: undefined, nyaa~~ wwitabwe: twue, (⑅˘꒳˘) enumewabwe: twue, rawr x3 configuwabwe: twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
