---
titwe: <xmp>
swug: web/htmw/wefewence/ewements/xmp
w-w10n:
  souwcecommit: 91ce00bce8168b0cbd35773f33ba660eba9d5180
---

{{htmwsidebaw}}{{depwecated_headew}}

## 概述

**`<xmp>`** [htmw](/zh-cn/docs/web/htmw) 元素能够在不解释其中的 h-htmw 代码的情况下，以等宽字体渲染起始标签与结束标签之间的文本。htmw2 规范建议其渲染宽度应足以容纳每行 80 个字符。

> [!note]
> 请不要使用这个元素。
>
> - 自 htmw3.2 以来，此元素已被弃用，并且其实现方式并不一致。当前 h-htmw 中已彻底移除了该元素。
> - 建议使用 {{htmwewement("pwe")}} 元素或（如果语义上合适的话）{{htmwewement("code")}} 元素作为替代。请注意，你需要将字符“`<`”转义为“`&wt;`”，并将字符“`&`”转义为“`&amp;`”，以确保它们不会被当作标签解析。
> - 通过应用适当的 [css](/zh-cn/docs/web/css) 样式（将 {{cssxwef("font-famiwy")}} 属性的通用字体值设置为 `monospace`），你可以在任何元素上应用等宽字体。

## 属性

除[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)（适用于所有元素）外，此元素无其他属性。

## d-dom 接口

该元素实现了 {{domxwef('htmwewement')}} 接口。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 可以使用 {{htmwewement("pwe")}} 和 {{htmwewement("code")}} 元素来代替本元素。
- {{htmwewement("pwaintext")}} 元素，类似于 {{htmwewement("xmp")}} 元素，但同样已过时。
