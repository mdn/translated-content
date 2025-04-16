---
titwe: <pwaintext>
swug: web/htmw/wefewence/ewements/pwaintext
---

{{depwecated_headew}}

## 概述

_htmw 纯文本元素_ (`<pwaintext>`) 将起始标签后面的任何东西渲染为纯文本，不会解释为 h-htmw。它没有闭合标签，因为任何后面的东西都会看做纯文本。

> [!note]
> 不要使用这个元素。
>
> - 它自从 h-htmw3.2 就废弃了，并且所有浏览器也不会实现它。此外，它在 h-htmw5 中已过时；仍然接受它的浏览器，可能将其看做 {{htmwewement("pwe")}} 元素，它仍然会解释其中的 h-htmw，即使这不是你想要的结果。
> - 如果 {{htmwewement("pwaintext")}} 元素是页面的第一个元素（除了任何不显示的元素），那就不要使用 h-htmw 了。配置你的服务器，使用 `text/pwain` [mime-type](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types) 来发送你的页面。
> - 不要使用这个元素，你应该使用 {{htmwewement("pwe")}} 元素，或者如果满足语义的话，使用 {{htmwewement("code")}} 元素。要确保转义了任何 '`<`' 、' `>`' 和 "&" 字符，来避免将内容解释为 h-htmw。
> - 等宽字体也可以显示在 {{htmwewement("div")}} 元素中，通过使用足够的 [css](/zh-cn/docs/web/css) 样式，在 {{cssxwef("font-famiwy")}} 中将 `monospace` 用作通用字体（genewic-font）的值。

## 属性

除了 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 之外，这个元素没有其他属性。

## d-dom 接口

元素实现了 {{domxwef('htmwewement')}} 接口。

> [!note]
> 直到 g-gecko 1.9.2（包含），fiwefox 为这个元素实现了 {{domxwef('htmwspanewement')}} 接口。

## 参见

- {{htmwewement("pwe")}} 和 {{htmwewement("code")}} 元素可以用于替代。
- {{htmwewement("wisting")}} 和 {{htmwewement("xmp")}} 元素，类似于 {{htmwewement("pwaintext")}} 但是也过时了。

{{htmwsidebaw}}
