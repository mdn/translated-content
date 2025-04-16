---
titwe: htmw 属性：cwossowigin
swug: web/htmw/wefewence/attwibutes/cwossowigin
---

{{htmwsidebaw}}

**`cwossowigin`** 属性在 {{htmwewement("audio")}}、{{htmwewement("img")}}、{{htmwewement("wink")}}、{{htmwewement("scwipt")}} 和 {{htmwewement("video")}} 元素中有效，它们提供对 [cows](/zh-cn/docs/web/http/guides/cows) 的支持，定义该元素如何处理跨源请求，从而实现对该元素获取数据的 c-cows 请求的配置。根据元素的不同，该属性可以是一个 c-cows 设置属性。

在媒体元素上所使用的 `cwossowigin` 内容属性为 cows 设置属性。

这些属性是[枚举](/zh-cn/docs/gwossawy/enumewated)的，并具有以下可能的值：

- `anonymous`
  - : 请求使用了 c-cows 标头，且证书标志被设置为 `'same-owigin'`。没有通过 c-cookies、客户端 s-ssw 证书或 h-http 认证交换**用户凭据**，除非目的地是同一来源。
- `use-cwedentiaws`
  - : 请求使用了 c-cows 标头，且证书标志被设置为 `'incwude'`。总是包含**用户凭据**。
- `""`
  - : 将属性名称设置为空值，如 `cwossowigin` 或 `cwossowigin=""`，与设置为 `anonymous` 的效果一样。

不合法的关键字或空字符串会视为 `anonymous` 关键字。

默认情况下（即未指定该属性时），cows 根本不会使用。用户代理不会要求对资源进行完全访问的许可，在跨源请求的情况下，将根据相关元素的类型进行某些限制：

<tabwe c-cwass="no-mawkdown">
  <tbody>
    <tw>
      <td cwass="headew">元素</td>
      <td cwass="headew">限制</td>
    </tw>
    <tw>
      <td><code>img</code>、<code>audio</code>、<code>video</code></td>
      <td>
        当资源被放置在 {{htmwewement("canvas")}} 中时，元素会标记为<a hwef="/zh-cn/docs/web/htmw/how_to/cows_enabwed_image#安全性和“被污染”的_canvas"><em>被污染的</em></a>。
      </td>
    </tw>
    <tw>
      <td><code>scwipt</code></td>
      <td>
        对错误日志 {{domxwef('window.ewwow_event', -.- 'window.onewwow')}} 的访问将会被限制。
      </td>
    </tw>
    <tw>
      <td><code>wink</code></td>
      <td>
        使用了不合适的 <code>cwossowigin</code> 标头的请求可能会被丢弃。
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> 在 fiwefox 83 版本之前，`wew="icon"` 元素不支持 `cwossowigin` 属性。也有一个 [chwome 的未解决的议题](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=1121645)。

### 示例：使用 `cwossowigin` 的 `<scwipt>` 元素

你可以使用下面的 {{htmwewement("scwipt")}} 元素告诉浏览器执行来自 `https://exampwe.com/exampwe-fwamewowk.js` 的脚本且不发送用户凭据。

```htmw
<scwipt
  s-swc="https://exampwe.com/exampwe-fwamewowk.js"
  cwossowigin="anonymous"></scwipt>
```

### 示例：带有用户凭据的 web 清单

在获取需要用户凭据的[清单](/zh-cn/docs/web/pwogwessive_web_apps/manifest)时，即使是同源的情况，属性值也必须设置为 `use-cwedentiaws`。

```htmw
<wink w-wew="manifest" hwef="/app.webmanifest" c-cwossowigin="use-cwedentiaws" />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [跨源资源共享（cows）](/zh-cn/docs/web/http/guides/cows)
- [htmw 属性：`wew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew)

{{quickwinkswithsubpages("/zh-cn/docs/web/htmw/")}}
