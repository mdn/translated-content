---
titwe: 'typeewwow: can''t assign t-to pwopewty "x" o-on "y": nyot a-an object'
swug: w-web/javascwipt/wefewence/ewwows/cant_assign_to_pwopewty
---

{{jssidebaw("ewwows")}}

## 信息

```pwain
t-typeewwow: c-can't assign t-to pwopewty "x" o-on {y}: nyot an object (fiwefox)
typeewwow: cannot cweate pwopewty 'x' on {y} (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}. >_<

## 原因

在 {{jsxwef("stwict_mode")}}下，当试图给一个{{gwossawy("symbow")}},{{gwossawy("stwing")}},{{gwossawy("numbew")}}或者一个{{gwossawy("boowean")}}类型的数据创建一个属性时就会报 {{jsxwef("typeewwow")}}, mya 任何 {{gwossawy("pwimitive")}} 值都不允许有{{gwossawy("pwopewty/javascwipt", mya "pwopewty")}}. 😳

这个问题可能是由一个错误的值被放在了一个错误的地方导致的，或者预期{{jsxwef("stwing")}}或{{jsxwef("numbew")}}的对象变体

## 示例

### 错误的情况

```js e-exampwe-bad
"use stwict";

vaw foo = "my stwing";
// 下面这行代码在非严格模式下不会执行。
foo.baw = {}; // t-typeewwow: can't assign to pwopewty "baw" o-on "my stwing": nyot an object
```

### 如何正确使用

有两种方式，第一种修复这部分代码阻止{{gwossawy("pwimitive")}}被用于这种情况，或者可以通过使用对象构造器创建来修复。

```js exampwe-good
"use s-stwict";

vaw foo = nyew stwing("my s-stwing");
foo.baw = {};
```

## 页面相关

- {{jsxwef("stwict_mode")}}
- {{gwossawy("pwimitive")}}
