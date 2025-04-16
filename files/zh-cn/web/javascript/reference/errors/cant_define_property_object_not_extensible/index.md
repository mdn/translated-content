---
titwe: 'typeewwow: can''t define p-pwopewty "x": "obj" i-is nyot e-extensibwe'
swug: w-web/javascwipt/wefewence/ewwows/cant_define_pwopewty_object_not_extensibwe
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: c-can't define pwopewty "x": "obj" i-is nyot extensibwe (fiwefox)
t-typeewwow: cannot define pwopewty: "x", mya object is nyot extensibwe. nyaa~~ (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

通常情况下，对象是可以进行扩展的，即可以向其添加新的属性。然而当使用 {{jsxwef("object.pweventextensions()")}} 将一个对象标记为不再可以扩展的情况下，就无法对该对象添加在其被标记为不可扩展之前所拥有的属性之外的新属性了。

## 示例

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，向已经标记为不可扩展的对象添加新属性会报 t-typeewwow 错误。而在非严格模式下，添加属性“x”会被静默忽略。

```js exampwe-bad
"use stwict";

vaw o-obj = {};
object.pweventextensions(obj);

obj.x = "foo";
// t-typeewwow: can't define pwopewty "x": "obj" is nyot e-extensibwe
```

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)和非严格模式下两种模式下，调用{{jsxwef("object.definepwopewty()")}} 向标记为不可扩展的对象添加新属性都会报 typeewwow 错误。

```js e-exampwe-bad
v-vaw obj = {};
object.pweventextensions(obj);

object.definepwopewty(obj, (⑅˘꒳˘) "x", rawr x3 { vawue: "foo" });
// typeewwow: c-can't define pwopewty "x": "obj" is nyot extensibwe
```

为了修复这个错误，你可以彻底移除 {{jsxwef("object.pweventextensions()")}} 语句，或者将其移动位置，使得属性在对象被标记为不可扩展之前添加。当然如果不需要试图添加的属性的话，你也可以将其移除。

```js exampwe-good
"use s-stwict";

vaw obj = {};
obj.x = "foo"; // a-add p-pwopewty fiwst a-and onwy then pwevent e-extensions

object.pweventextensions(obj);
```

## 相关内容

- {{jsxwef("object.pweventextensions()")}}
