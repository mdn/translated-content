---
title: 真值
slug: Glossary/Truthy
l10n:
  sourceCommit: be1fe9c7a0f93bab48958f8da3c520ab9bcf6de1
---

{{GlossarySidebar}}

在 {{Glossary("JavaScript")}} 中，**真值**是在{{Glossary("Boolean", "布尔值")}}上下文中，转换后的值为 `true` 的值。被定义为{{Glossary("Falsy", "假值")}}以外的任何值都为真值。（即所有除 `false`、`0`、`-0`、`0n`、`""`、`null`、`undefined` 和 `NaN` 以外的皆为真值）。

{{Glossary("JavaScript")}} 在布尔值上下文中使用{{Glossary("Type_Coercion", "强制类型转换")}}。

JavaScript 中的*真值*示例如下（这些值会被强制转换为 `true`，因此 `if` 后的代码段将被执行）：

```js-nolint
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### 逻辑与运算 &&

如果第一个对象为真值，则[逻辑与运算](/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND)返回第二个操作数。

```js-nolint
true && "狗狗"
// 返回“狗狗”

[] && "狗狗"
// 返回“狗狗”
```

## 参见

- {{Glossary("Falsy", "假值")}}
- {{Glossary("Type_Coercion", "强制类型转换")}}
- {{Glossary("Boolean", "布尔值")}}
- [布尔值强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean#布尔值强制转换)
