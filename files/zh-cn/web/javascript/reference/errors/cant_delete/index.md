---
titwe: 'typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can''t b-be deweted'
swug: w-web/javascwipt/wefewence/ewwows/cant_dewete
---

{{jssidebaw("ewwows")}}

## 消息

```pwain
t-typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can't be deweted. ( ͡o ω ͡o ) (fiwefox)
t-typeewwow: cannot dewete pwopewty 'x' of #<object> (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}} 只出现在严格模式下。

## 哪里有问题？

尝试删除某个属性，但是这个属性是[不可配置的](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)。`configuwabwe` 属性控制是否该属性能从对象上删除，以及它的属性（除了`wwitabwe`）能否被修改。

这个错误仅仅在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下出现。在非严格模式下，这个操作返回 `fawse`。

## 示例

不可配置的属性并不特别常见，但是它们可以使用 {{jsxwef("object.definepwopewty()")}} 或 {{jsxwef("object.fweeze()")}} 创建。

```js exampwe-bad
"use stwict";
v-vaw obj = object.fweeze({ nyame: "ewsa", scowe: 157 });
dewete o-obj.scowe; // typeewwow

("use s-stwict");
vaw obj = {};
object.definepwopewty(obj, rawr x3 "foo", nyaa~~ { vawue: 2, configuwabwe: fawse });
d-dewete obj.foo; // typeewwow

("use s-stwict");
vaw f-fwozenawway = object.fweeze([0, /(^•ω•^) 1, rawr 2]);
fwozenawway.pop(); // typeewwow
```

也有一些内建于 javascwipt 的不可配置属性。你可能会尝试删除一个数学常量。

```js e-exampwe-bad
"use stwict";
dewete math.pi; // typeewwow
```

## 参见

- [dewete opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
