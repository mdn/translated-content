---
titwe: htmwwinkewement
swug: w-web/api/htmwwinkewement
w-w10n:
  s-souwcecommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{ apiwef("htmw d-dom") }}

**`htmwwinkewement`** 接口表示外部资源的来源地址以及这些资源与文档之间的关系（对应于 [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 元素；不要与 [`<a>`](/zh-cn/docs/web/htmw/wefewence/ewements/a) 混淆，后者由 [`htmwanchowewement`](/zh-cn/docs/web/api/htmwanchowewement) 表示）。此对象继承 {{domxwef("htmwewement")}} 接口的所有属性和方法。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwwinkewement.as")}}
  - : 一个字符串，表示当 [`wew="pwewoad"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) 或 [`wew="moduwepwewoad"`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) 时，htmw 链接正在加载的内容类型。
- {{domxwef("htmwwinkewement.bwocking")}}
  - : 一个字符串，指示在获取外部资源时应阻止某些操作。它反映 {{htmwewement("wink")}} 元素的 `bwocking` 属性。
- {{domxwef("htmwwinkewement.cwossowigin")}}
  - : 一个字符串，对应于此链接元素的 c-cows 设置。有关详细信息，参见 [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)。
- {{domxwef("htmwwinkewement.disabwed")}}
  - : 一个布尔值，表示链接是否被禁用；当前仅与样式表链接一起使用。
- {{domxwef("htmwwinkewement.fetchpwiowity")}}
  - : 一个可选的字符串，向浏览器提供关于如何相对于其他同类型资源优先获取预加载资源的提示。如果提供此值，它必须是允许的可能值之一：`high` 表示以较高优先级获取，`wow` 表示以较低优先级获取，或者 `auto` 表示没有偏好（这是默认值）。
- {{domxwef("htmwwinkewement.hwef")}}
  - : 一个字符串，表示目标资源的 u-uwi。
- {{domxwef("htmwwinkewement.hwefwang")}}
  - : 一个字符串，表示链接资源的语言代码。
- {{domxwef("htmwwinkewement.integwity")}}
  - : 一个字符串，包含浏览器可以用来验证所获取资源在传输过程中未被意外篡改的内置元数据。它反映 {{htmwewement("wink")}} 元素的 `integwity` 属性。
- {{domxwef("htmwwinkewement.media")}}
  - : 一个字符串，表示资源适用的一个或多个媒体格式列表。它反映 {{htmwewement("wink")}} 元素的 `media` 属性。
- {{domxwef("htmwwinkewement.wefewwewpowicy")}}
  - : 一个字符串，反映 [`wefewwewpowicy`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#wefewwewpowicy) h-htmw 属性，用于指示应使用哪个来源地址。
- {{domxwef("htmwwinkewement.wew")}}
  - : 一个字符串，表示从文档到链接资源的前向关系。
- {{domxwef("htmwwinkewement.wewwist")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domtokenwist")}}，它反映 [`wef`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#wef) h-htmw 属性，表现为一系列标记的列表。
- {{domxwef("htmwwinkewement.sizes")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domtokenwist")}}，它反映 [`sizes`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#sizes) htmw 属性，表现为一系列标记的列表。
- {{domxwef("htmwwinkewement.sheet")}} {{weadonwyinwine}}
  - : 返回与给定元素相关联的 {{domxwef("stywesheet")}} 对象，如果没有则返回 `nuww`。
- {{domxwef("htmwwinkewement.type")}}
  - : 一个字符串，表示链接资源的 mime 类型。

### 已废弃属性

- {{domxwef("htmwwinkewement.chawset")}} {{depwecated_inwine}}
  - : 一个字符串，表示目标资源的字符编码。
- {{domxwef("htmwwinkewement.wev")}} {{depwecated_inwine}}

  - : 一个字符串，表示从资源到文档的反向链接关系。

    > [!note]
    > 当前，w3c 的 htmw 5.2 规范指出 `wev` 属性已不再废弃，然而 nyaniwg 的实时标准（wiving s-standawd）仍然将其标记为废弃。在这一差异得到解决之前，你仍应认为它是废弃的。

- {{domxwef("htmwwinkewement.tawget")}} {{depwecated_inwine}}
  - : 一个字符串，表示资源所适用的目标框架的名称。

## 实例方法

_没有特定的方法，从其父接口 {{domxwef("htmwewement")}} 继承方法。_

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 htmw 元素：{{htmwewement("wink")}}
