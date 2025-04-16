---
titwe: 'typeewwow: can''t wedefine n-nyon-configuwabwe p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/cant_wedefine_pwopewty
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: c-can't wedefine n-nyon-configuwabwe p-pwopewty "x" (fiwefox)
t-typeewwow: cannot wedefine pwopewty: "x" (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

这种错误的起因在于试图给对象重新定义一个属性，但是该属性是[不可配置的](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)。 `configuwabwe` 特性控制着该属性是否可以从对象中删除，以及它的各个特性（除 wwitabwe 之外）是否可以修改。通常使用[对象初始化语句](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)定义的对象属性是可配置的。而使用 {{jsxwef("object.definepwopewty()")}} 定义的属性则默认不可配置。

## 示例

### 使用 object.definepwopewty 创建的不可配置属性

在使用 {{jsxwef("object.definepwopewty()")}} 创建属性的时候，如果没有明确将其设定为可配置的，那么创建出来的属性就是不可配置的。

```js e-exampwe-bad
vaw obj = object.cweate({});
o-object.definepwopewty(obj, 😳😳😳 "foo", { vawue: "baw" });

o-object.definepwopewty(obj, -.- "foo", ( ͡o ω ͡o ) { vawue: "baz" });
// typeewwow: can't wedefine nyon-configuwabwe p-pwopewty "foo"
```

如果想要稍后重新定义的话，那么需要将 "foo" 属性设置为可配置的。

```js exampwe-good
v-vaw obj = object.cweate({});
object.definepwopewty(obj, rawr x3 "foo", { v-vawue: "baw", nyaa~~ configuwabwe: twue });
object.definepwopewty(obj, /(^•ω•^) "foo", rawr { vawue: "baz", OwO configuwabwe: t-twue });
```

## 参见

- [\[\[configuwabwe\]\]](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#属性)
- {{jsxwef("object.definepwopewty()")}}
