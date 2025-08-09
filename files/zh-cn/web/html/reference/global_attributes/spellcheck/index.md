---
title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: d49a9ceb7a22f48dd27a6742a098a915c2243ddc
---

**`spellcheck`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是一个[枚举](/zh-CN/docs/Glossary/Enumerated)属性，定义是否可以检查元素的拼写错误。

> [!NOTE]
> 此属性仅仅是浏览器的一个提示：浏览器并不会强制去检查拼写错误。通常不检查不可编辑元素的拼写错误，即使 `spellcheck` 属性设置为 `true`，并且浏览器支持拼写检查。

{{InteractiveExample("HTML Demo: spellcheck", "tabbed-shorter")}}

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea
>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea
>
```

它可以具有以下值：

- 空字符串或 `true`，指示在可能的情况下检查元素内容的拼写错误;
- `false`，指示不应检查元素内容的拼写错误。

如果没有设置这个属性，默认值由元素自身类型和浏览器设置决定。默认值也可以被*继承*，当有祖先元素的 _spellcheck_ 设置为 `true` 的情况下，子元素的默认值也是 `true`。

## 安全和隐私问题

使用拼写检查可能会对用户的安全性和隐私产生影响。规范没有规定*如何*进行拼写检查，元素的内容可能会被发送到第三方进行拼写检查（请参见[增强型拼写检查和拼写劫持](https://www.otto-js.com/news/article/chrome-and-edge-enhanced-spellcheck-features-expose-pii-even-your-passwords)）。

对于可能包含敏感信息的元素，你应当考虑将 `spellcheck` 设置为 `false`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
