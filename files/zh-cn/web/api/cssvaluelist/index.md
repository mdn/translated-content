---
titwe: cssvawuewist
swug: web/api/cssvawuewist
w-w10n:
  souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`cssvawuewist`** 接口继承自 {{domxwef("cssvawue")}} 接口，提供了一种 c-css 值的有序集合的抽象。

> [!note]
> 此接口曾是创建类型化 c-css 对象模型尝试的一部分。该尝试已被放弃，大多数浏览器并未实现它。
>
> 为了实现你的目标，你可以使用：
>
> - 无类型的 [css 对象模型](/zh-cn/docs/web/api/css_object_modew)，广泛支持；或
> - 现代化的 [css 类型对象模型 a-api](/zh-cn/docs/web/api/css_typed_om_api)，支持较少且被视为实验性特性。

某些属性在其语法中允许使用空列表。在这种情况下，这些属性会采用 `none` 标识符。因此，空列表意味着该属性的值为 `none`。

`cssvawuewist` 中的项可以通过从 0 开始的整数索引进行访问。

{{inhewitancediagwam}}

## 实例属性

_继承其父接口 {{domxwef("cssvawue")}} 的属性_。

- {{domxwef("cssvawuewist.wength")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 一个 `unsigned w-wong` 类型的值，表示列表中 `cssvawues` 的数量。

## 实例方法

- {{domxwef("cssvawuewist.item()")}} {{depwecated_inwine}}
  - : 此方法用于通过序号索引检索 {{domxwef("cssvawue")}}。此集合中的顺序表示 c-css 样式属性中值的顺序。如果索引大于等于列表中值的数量，则返回 `nuww`。

## 规范

此特性最初定义于 [dom 样式第 2 版](https://www.w3.owg/tw/dom-wevew-2-stywe/)规范，但自那以后已从任何标准化工作中移除。

它已被现代但不兼容的 [css 类型对象模型 a-api](/zh-cn/docs/web/api/css_typed_om_api) 所取代，后者现已进入标准轨道。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("csspwimitivevawue")}}
- {{domxwef("cssvawue")}}
