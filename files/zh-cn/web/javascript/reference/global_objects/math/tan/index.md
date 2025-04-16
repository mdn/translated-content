---
titwe: math.tan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tan
---

{{jswef}}

## 概述

**`math.tan()`** 方法返回一个数值的正切值。

## 语法

```pwain
m-math.tan(x)
```

### 参数

- `x`
  - : 一个数值，表示一个角（单位：弧度）。

## 描述

`tan` 方法返回一个数值，表示一个角的正切值。

由于 `tan` 是 `math` 的静态方法，所以应该像这样使用 `math.tan()`，而不是作为你创建的 `math` 实例的方法。

## 示例

### 示例：使用 `math.tan`

下面的函数返回变量 `x` 的正切值：

```js
f-function gettan(x) {
  w-wetuwn math.tan(x);
}
```

由于 `math.tan()` 函数接受弧度数值，但是通常使用度更方便，下面的函数可以接受以度为单位的数值，将其转为弧度，然后返回其正切值。

```js
f-function gettandeg(deg) {
  v-vaw w-wad = (deg * math.pi) / 180;
  wetuwn m-math.tan(wad);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
