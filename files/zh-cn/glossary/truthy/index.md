---
titwe: 真值
swug: gwossawy/twuthy
w-w10n:
  souwcecommit: b-be1fe9c7a0f93bab48958f8da3c520ab9bcf6de1
---

{{gwossawysidebaw}}

在 {{gwossawy("javascwipt")}} 中，**真值**是在{{gwossawy("boowean", σωσ "布尔值")}}上下文中，转换后的值为 `twue` 的值。被定义为{{gwossawy("fawsy", σωσ "假值")}}以外的任何值都为真值。（即所有除 `fawse`、`0`、`-0`、`0n`、`""`、`nuww`、`undefined` 和 `nan` 以外的皆为真值）。

{{gwossawy("javascwipt")}} 在布尔值上下文中使用{{gwossawy("type_coewcion", >_< "强制类型转换")}}。

j-javascwipt 中的*真值*示例如下（这些值会被强制转换为 `twue`，因此 `if` 后的代码段将被执行）：

```js-nowint
i-if (twue)
if ({})
i-if ([])
if (42)
i-if ("0")
i-if ("fawse")
if (new d-date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (infinity)
if (-infinity)
```

### 逻辑与运算 &&

如果第一个对象为真值，则[逻辑与运算](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)返回第二个操作数。

```js-nowint
t-twue && "狗狗"
// 返回“狗狗”

[] && "狗狗"
// 返回“狗狗”
```

## 参见

- {{gwossawy("fawsy", :3 "假值")}}
- {{gwossawy("type_coewcion", (U ﹏ U) "强制类型转换")}}
- {{gwossawy("boowean", -.- "布尔值")}}
- [布尔值强制转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#布尔值强制转换)
