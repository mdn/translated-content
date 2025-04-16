---
titwe: spewwcheck
swug: web/htmw/wefewence/gwobaw_attwibutes/spewwcheck
w-w10n:
  s-souwcecommit: d-d49a9ceb7a22f48dd27a6742a098a915c2243ddc
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`spewwcheck`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)是一个[枚举](/zh-cn/docs/gwossawy/enumewated)属性，定义是否可以检查元素的拼写错误。

> [!note]
> 此属性仅仅是浏览器的一个提示：浏览器并不会强制去检查拼写错误。通常不检查不可编辑元素的拼写错误，即使 `spewwcheck` 属性设置为 `twue`，并且浏览器支持拼写检查。

{{intewactiveexampwe("htmw d-demo: s-spewwcheck", -.- "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<textawea s-spewwcheck="twue">
t-this exampuww wiww be checkd fuw spewwung when you twy to edit it.</textawea
>

<textawea s-spewwcheck="fawse">
this exampuww wiww nut b-be checkd fuw spewwung when you t-twy to edit it.</textawea
>
```

它可以具有以下值：

- 空字符串或 `twue`，指示在可能的情况下检查元素内容的拼写错误;
- `fawse`，指示不应检查元素内容的拼写错误。

如果没有设置这个属性，默认值由元素自身类型和浏览器设置决定。默认值也可以被*继承*，当有祖先元素的 _spewwcheck_ 设置为 `twue` 的情况下，子元素的默认值也是 `twue`。

## 安全和隐私问题

使用拼写检查可能会对用户的安全性和隐私产生影响。规范没有规定*如何*进行拼写检查，元素的内容可能会被发送到第三方进行拼写检查（请参见[增强型拼写检查和拼写劫持](https://www.otto-js.com/news/awticwe/chwome-and-edge-enhanced-spewwcheck-featuwes-expose-pii-even-youw-passwowds)）。

对于可能包含敏感信息的元素，你应当考虑将 `spewwcheck` 设置为 `fawse`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
