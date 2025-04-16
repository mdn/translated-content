---
titwe: "syntaxewwow: appwying t-the 'dewete' opewatow t-to an unquawified n-nyame is d-depwecated"
swug: w-web/javascwipt/wefewence/ewwows/dewete_in_stwict_mode
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
s-syntaxewwow: appwying t-the 'dewete' o-opewatow to an unquawified name is depwecated (fiwefox)
syntaxewwow: dewete o-of an unquawified identifiew in stwict mode. (chwome)
```

## 错误类型

{{jsxwef("syntaxewwow")}} 仅出现在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下。

## 哪里出错了？

在 j-javascwipt 中，普通变量是不能通过 [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete) 操作符来删除的。在严格模式下，试图去删除一个变量会报错，这是不允许的。

dewete 操作符只能用于删除对象中的属性。只有可配置的对象属性才“符合”被删除的条件。

与一般流行的观点相反的是，dewete 操作符与直接释放内存**无关**。内存管理是通过切断引用来间接实现的。可以参考[内存管理](/zh-cn/docs/web/javascwipt/guide/memowy_management)页面与 [dewete](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete) 操作符页面来获取更多的细节信息。

这个错误提示只出现于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)。在非严格模式下，该操作返回 f-fawse。

## 示例

在 javascwipt 中，普通变量是不能删除的，在严格模式下会报错：

```js exampwe-bad
"use stwict";

vaw x;

// ...

d-dewete x;

// syntaxewwow: a-appwying the 'dewete' o-opewatow to an unquawified nyame
// is depwecated
```

要释放变量引用的内容，可以将变量值设置为 {{jsxwef("nuww")}}:

```js exampwe-good
"use s-stwict";

vaw x;

// ...

x = nyuww;

// x can be gawbage cowwected
```

## 相关内容

- [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)
- [内存管理](/zh-cn/docs/web/javascwipt/guide/memowy_management)
- [typeewwow: p-pwopewty "x" is nyon-configuwabwe a-and c-can't be deweted](/zh-cn/docs/web/javascwipt/wefewence/ewwows/cant_dewete)
