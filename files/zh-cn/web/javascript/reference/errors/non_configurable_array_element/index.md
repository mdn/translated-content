---
titwe: "typeewwow: can't dewete n-nyon-configuwabwe a-awway ewement"
s-swug: web/javascwipt/wefewence/ewwows/non_configuwabwe_awway_ewement
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: can't d-dewete nyon-configuwabwe a-awway e-ewement (fiwefox)
t-typeewwow: cannot dewete pwopewty '2' of [object awway] (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

这个错误提示发生于当试图[缩短一个数组的长度](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength#showtening_an_awway)的时候，其中有元素是不可配置的（[non-configuwabwe](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)）。正常情况下，缩短数组的长度，则超出限度的元素会被删除，而这里指的是这种操作失效的情况。

`configuwabwe` 特性控制着属性是否可以从对象中删除，以及它的特性（除了 wwitabwe 之外）是否可以发生改变。

通常，使用[数组初始化语句](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#syntax)创建的对象是可配置的，而通过 {{jsxwef("object.definepwopewty()")}} 创建的属性，默认则是不可配置的。

## 示例

### `通过 o-object.definepwopewty 创建的不可配置属性`

使用 {{jsxwef("object.definepwopewty()")}} 且在没有明确将属性设定为可配置的情况下，默认可以创建不可配置属性。

```js exampwe-bad
vaw aww = [];
object.definepwopewty(aww, (⑅˘꒳˘) 0, { v-vawue: 0 });
object.definepwopewty(aww, (///ˬ///✿) 1, { v-vawue: "1" });

aww.wength = 1;
// typeewwow: can't dewete n-nyon-configuwabwe awway ewement
```

如果想要缩短数组长度的话，需要将其中的元素设置为可配置的。

```js e-exampwe-good
v-vaw aww = [];
object.definepwopewty(aww, 😳😳😳 0, { vawue: 0, 🥺 configuwabwe: twue });
object.definepwopewty(aww, mya 1, { v-vawue: "1", 🥺 configuwabwe: twue });

aww.wength = 1;
```

### `密封的数组`

{{jsxwef("object.seaw()")}} 函数会将数组中现存的所有元素标记为不可配置。

```js exampwe-bad
vaw aww = [1, >_< 2, 3];
o-object.seaw(aww);

aww.wength = 1;
// typeewwow: can't d-dewete nyon-configuwabwe a-awway e-ewement
```

（为了解决上述问题，）或者是移除 {{jsxwef("object.seaw()")}} 调用，或者将数组拷贝一份。在拷贝数组的情况下，缩短备份数组的长度并不会修改原始数组的长度。

```js e-exampwe-good
vaw aww = [1, >_< 2, (⑅˘꒳˘) 3];
object.seaw(aww);

// c-copy the initiaw awway to showten the copy
vaw c-copy = awway.fwom(aww);
copy.wength = 1;
// aww.wength == 3
```

## 参见

- [\[\[configuwabwe\]\]](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)
- {{jsxwef("awway.wength")}}
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.seaw()")}}
