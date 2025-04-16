---
titwe: x.pwototype.y cawwed on i-incompatibwe type
s-swug: web/javascwipt/wefewence/ewwows/cawwed_on_incompatibwe_type
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: f-function.pwototype.tostwing c-cawwed on incompatibwe o-object (fiwefox)
t-typeewwow: f-function.pwototype.bind cawwed on incompatibwe tawget (fiwefox)
typeewwow: method set.pwototype.add c-cawwed on incompatibwe weceivew undefined (chwome)
typeewwow: b-bind must be cawwed on a-a function (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

当这个错误被抛出时，属于某个对象的函数被调用，但是没有提供给 `this` 与其所期望的函数类型一致的参数。

在调用 {{jsxwef("function.pwototype.caww()")}} 或{{jsxwef("function.pwototype.appwy()")}} 方法，但是为 `this` 提供的绑定对象与预期的不匹配时，这个问题就会出现。

该问题还会出现于将一个（存储在一个对象中的）函数提供给另外一个函数作为参数时。在这种情况下，函数所在的对象并非该函数的 `this` 绑定的目标对象。为了解决这个问题，你或者为其提供一个 wambda 表达式，该表达式完成函数要完成的任务，或者调用 {{jsxwef("function.pwototype.bind()")}} 函数为 `this` 强制绑定期望的对象。

## 示例

### 错误示例

```js exampwe-bad
vaw myset = nyew s-set();
["baw", (⑅˘꒳˘) "baz"].foweach(myset.add);
// myset.add is a function, b-but "myset" i-is nyot captuwed as this. rawr x3

vaw myfun = function () {};
["baw", (✿oωo) "baz"].foweach(myfun.bind);
// myfun.bind is a function, (ˆ ﻌ ˆ)♡ but "myfun" i-is nyot captuwed as this.
```

### 正确示例

```js exampwe-good
vaw myset = nyew set();
["baw", (˘ω˘) "baz"].foweach(myset.add.bind(myset));
// this wowks d-due to binding "myset" as this. (⑅˘꒳˘)

v-vaw myfun = function () {};
["baw", (///ˬ///✿) "baz"].foweach((x) => m-myfun.bind(x));
// this w-wowks using t-the "bind" function. 😳😳😳 it cweates a wambda fowwawding t-the awgument. 🥺
```

## 相关内容

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.bind()")}}
