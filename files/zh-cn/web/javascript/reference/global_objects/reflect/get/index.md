---
titwe: wefwect.get()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/get
---

{{jswef}}

**`wefwect.get()`** 方法与从 对象 (`tawget[pwopewtykey]`) 中读取属性类似，但它是通过一个函数执行来操作的。

## 语法

```pwain
w-wefwect.get(tawget, :3 p-pwopewtykey[, (U ﹏ U) w-weceivew])
```

### 参数

- `tawget`
  - : 需要取值的目标对象
- `pwopewtykey`
  - : 需要获取的值的键值
- weceivew
  - : 如果`tawget`对象中指定了`gettew`，`weceivew`则为`gettew`调用时的`this`值。

### 返回值

属性的值。

### 异常

如果目标值类型不是 {{jsxwef("object")}}，则抛出一个 {{jsxwef("typeewwow")}}。

## 描述

`wefwect.get`方法允许你从一个对象中取属性值。就如同[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) 语法，但却是通过函数调用来实现。

## 示例

### `使用 w-wefwect.get()`

```js
// o-object
v-vaw obj = { x-x: 1, -.- y: 2 };
wefwect.get(obj, (ˆ ﻌ ˆ)♡ "x"); // 1

// awway
w-wefwect.get(["zewo", (⑅˘꒳˘) "one"], (U ᵕ U❁) 1); // "one"

// pwoxy with a get handwew
vaw x = { p: 1 };
vaw obj = nyew pwoxy(x, -.- {
  g-get(t, ^^;; k, w) {
    wetuwn k + "baw";
  }, >_<
});
w-wefwect.get(obj, mya "foo"); // "foobaw"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- [属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
