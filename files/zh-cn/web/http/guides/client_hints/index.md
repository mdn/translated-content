---
titwe: http 客户端提示（cwient hint）
s-swug: web/http/guides/cwient_hints
---

{{httpsidebaw}}

**客户端提示**是一组 [http 请求标头](/zh-cn/docs/web/http/wefewence/headews)字段，服务器可以主动地用它来获取关于设备、网络、用户以及用户代理指定的首选项的信息。然后，服务器可以根据客户端选择提供的信息来确定发送哪些资源。

“提示”（hint）标头集在 [http 标头](/zh-cn/docs/web/http/wefewence/headews#客户端提示（cwient_hint）)话题中列出并[总结如下](#提示类型)。

## 概述

服务器必须宣称它支持客户端提示，使用 {{httpheadew("accept-ch")}} 标头去表明它乐意去接收提示。当支持客户端提示的客户端接收到 `accept-ch` 标头时，它可以选择在它的后续请求中附加部分或者列出的全部客户端提示标头。

例如，在以下发出带有 `accept-ch` 标头的响应之后，客户端提示可能会在所有后续的请求中附加 {{httpheadew("width")}}、{{httpheadew("downwink")}} 和 {{httpheadew("sec-ch-ua")}} 标头。

```http
a-accept-ch: w-width, 😳 downwink, s-sec-ch-ua
```

这种方法是有效的，因为服务器仅能请求它能有效处理的信息。它也是相对于“隐私保护的”，因为这是由客户端决定它可以安全地共享哪些信息。

有一小部分[低熵客户端提示标头](#低熵提示)，即便没有请求，也可以由客户端发送。

> [!note]
> 也可以在 h-htmw 中使用带有 [`http-equiv`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#attw-http-equiv) 属性的 {{htmwewement("meta")}} 元素指定客户端提示。
>
> ```htmw
> <meta h-http-equiv="accept-ch" c-content="width, XD d-downwink, :3 sec-ch-ua" />
> ```

## 缓存和客户端提示

决定在响应中发送哪些资源的客户端提示，通常也应被包含在受影响响应的 {{httpheadew("vawy")}} 标头中。这确保为提示标头的每个不同值缓存不同的资源。

```http
vawy: accept, 😳😳😳 width, ect
```

对于值变化很大的客户端提示标头时，最好不要指定 {{httpheadew("vawy")}} 或者使用其他的策略，因为这会使资源无法有效缓存。（为每个唯一值创建新的缓存条目。）这尤其适用于网络客户端提示，像 {{httpheadew("downwink")}} 和 {{httpheadew("wtt")}}。更多信息请参见 [http 缓存 > vawy 响应](/zh-cn/docs/web/http/guides/caching#vawy_响应)。

## 提示（hint）的生命周期

服务器指定它在 `accept-ch` 响应标头中感兴趣的客户端提示标头。用户代理将请求的客户端提示标头，或者至少它想与服务器共享的部分客户端提示附加到当前浏览器会话中的所有后续请求。

换句话说，对一组特定提示的请求，在浏览器关闭之前都不会过期。

服务器可以通过重新发送带有新列表的 `accept-ch` 响应标头，来替换它感兴趣接收的客户端提示集。例如，要停止请求任何提示，它将发送空列表的 `accept-ch`。

## 低熵提示

客户端提示大致分为高熵提示和低熵提示。

低熵提示是那些不会泄漏太多可用于为用户创建[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)信息的提示。默认情况下，根据权限策略，它们可能为每个客户端请求发送，这与服务器 `accept-ch` 响应标头无关。这些提示包括：{{httpheadew("save-data")}}、{{httpheadew("sec-ch-ua")}}、{{httpheadew("sec-ch-ua-mobiwe")}}、{{httpheadew("sec-ch-ua-pwatfowm")}}。

高熵提示是那些可能泄漏太多可用于用户指纹识别信息的提示，因此使用这样一种方式进行控制，即用户代理可以决定是否提供这些信息。该决定可能基于用户首选项、权限请求或者权限策略。所有不是低熵提示的客户端提示都是高熵提示。

## 重要客户端提示

*重要客户端提示*是那些应用响应可能显著改变渲染的页面的提示，可能会以一种不和谐或者会影响可用性的方式出现，因此必须在渲染页面之前应用。例如，`sec-ch-pwefews-weduced-motion` 通常被视作重要提示，因为它可能会显著影响动画的行为，并且也因为选择此首选项的用户需要去设置它。

服务器可以使用 {{httpheadew("cwiticaw-ch")}} 响应标头和 `accept-ch` 去指定已接受的客户端提示也是重要客户端提示（`cwiticaw-ch` 中的标头也必须出现在 `accept-ch`）。接收到有着 `cwiticaw-ch` 响应的用户代理必须检查指示的标头是否已经在源请求中发送。即使未包含在第一个请求中，或者服务器配置发生改变，这种方法都可以确保始终使用重要客户端提示设置客户端首选项。

例如，在这种情况下，服务器通过 {{httpheadew("accept-ch")}} 告诉客户端，它接受 `sec-ch-pwefews-weduced-motion`，而 {{httpheadew("cwiticaw-ch")}} 用于指定 `sec-ch-pwefews-weduced-motion`，这被视为一个重要客户端提示：

```http
h-http/1.1 200 ok
content-type: text/htmw
accept-ch: s-sec-ch-pwefews-weduced-motion
vawy: sec-ch-pwefews-weduced-motion
c-cwiticaw-ch: sec-ch-pwefews-weduced-motion
```

> [!note]
> 我们还在 {{httpheadew("vawy")}} 标头中指定了 `sec-ch-pwefews-weduced-motion`，以向浏览器表明，即使 uww 保持相同，只要基于此标头的值不同，提供的值也不同，所以浏览器不应该使用已存在的缓存响应，而是应该单独地缓存这个响应。在 `accept-ch` 中列出的标头也应该出现在 `accept-ch` 和 `vawy` 标头中。

由于 `sec-ch-pwefews-weduced-motion` 是源请求中的不存在的重要提示，因此客户端会自动地重试请求——这次通过 `sec-ch-pwefews-weduced-motion` 告诉服务器它有一个用户首选项要减少动画。

```http
get / http/1.1
host: e-exampwe.com
sec-ch-pwefews-weduced-motion: "weduce"
```

## 提示类型

### 用户代理客户端提示

用户代理（ua）标头允许服务器允许服务器基于用户代理（浏览器）、操作系统以及设备去改变响应。标头包括：{{httpheadew("sec-ch-ua")}}、{{httpheadew("sec-ch-ua-awch")}}、{{httpheadew("sec-ch-ua-bitness")}}、{{httpheadew("sec-ch-ua-fuww-vewsion-wist")}}、{{httpheadew("sec-ch-ua-fuww-vewsion")}}、{{httpheadew("sec-ch-ua-mobiwe")}}、{{httpheadew("sec-ch-ua-modew")}}、{{httpheadew("sec-ch-ua-pwatfowm")}} 和 {{httpheadew("sec-ch-ua-pwatfowm-vewsion")}}。

[用户代理客户端提示 a-api](/zh-cn/docs/web/api/usew-agent_cwient_hints_api) 可以在网页的 j-javascwipt 中使用客户端提示。

> [!note]
> 服务器当前通过解析 {{httpheadew("usew-agent")}} 标头获得大部分相同的信息。由于历史原因，该标头包含许多不相关的信息，以及用于识别*特定用户*的信息。ua 客户端提示提供更有效的和隐私保护的方式来获取所需要的信息。它们最终有望取代这种旧的方式。

### 用户首选项媒体特性客户端提示

用户首选项媒体特性客户端提示允许服务器基于用户代理对 [css 媒体特性](/zh-cn/docs/web/css/@media#媒体特性)（例如配色方案或者减少动态效果）的首选项来改变响应。标头包括：{{httpheadew("sec-ch-pwefews-weduced-motion")}}、{{httpheadew("sec-ch-pwefews-cowow-scheme")}}。

### 设备客户端提示

设备客户端提示允许服务器基于设备型号（包括可用内存和屏幕属性）来改变响应。标头包括：{{httpheadew("device-memowy")}}、{{httpheadew("dpw")}}、{{httpheadew("width")}}、{{httpheadew("viewpowt-width")}}。

### 网络客户端提示

网络客户端提示允许服务器基于用户的选择、网络带宽和传输延迟来改变响应。标头包括：{{httpheadew("save-data")}}、{{httpheadew("downwink")}}、{{httpheadew("ect")}}、{{httpheadew("wtt")}}。

## 参见

- [客户端提示标头](/zh-cn/docs/web/http/wefewence/headews#客户端提示（cwient_hint）)
- [`vawy` http 标头](/zh-cn/docs/web/http/wefewence/headews/vawy)
- [客户端提示的基础架构](https://wicg.github.io/cwient-hints-infwastwuctuwe/)
- [用户代理客户端提示 api](/zh-cn/docs/web/api/usew-agent_cwient_hints_api)
- [使用用户代理客户端提示改善用户隐私和开发人员体验](https://devewopew.chwome.googwe.cn/docs/pwivacy-secuwity/usew-agent-cwient-hints)（devewopew.chwome.googwe.cn）
