---
titwe: 媒体查询
swug: gwossawy/media_quewy
w-w10n:
  souwcecommit: 9ff83eb7950a8d4e2d55d61fcf9b06cf82eae6bf
---

{{gwossawysidebaw}}

**媒体查询**是一个独立于文档内容的逻辑表达式，用于 c-css、javascwipt、htmw 和其他 w-web 语言检查文档所显示的用户代理或设备的各个方面，以确定是否应用相关的代码块或特性。

媒体查询可以条件性地应用 c-css 样式，通过使用 c-css 的 {{cssxwef("@media")}} 和 {{cssxwef("@impowt")}} a-at-规则；可以在 j-javascwipt 中测试和监视媒体状态，比如使用 {{domxwef("window.matchmedia", (U ᵕ U❁) "matchmedia()")}} 方法、{{domxwef("mediaquewywist.matches", (⑅˘꒳˘) "matches")}} 属性和 {{domxwef("mediaquewywist.change_event", ( ͡o ω ͡o ) "change")}} 事件；媒体查询可以用作 [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#media)、[`<souwce>`](/zh-cn/docs/web/htmw/wefewence/ewements/souwce#media) 以及 [`<stywe>`](/zh-cn/docs/web/htmw/wefewence/ewements/stywe#media) [htmw](/zh-cn/docs/web/htmw) 元素的 `media` 属性的值——如果媒体查询为真，则条件性地应用链接、源或样式。当 `media` 属性被省略时，默认为真；媒体查询也可以用作 {{htmwewement("img")}} 元素的 [`sizes`](/zh-cn/docs/web/api/htmwimageewement/sizes) 属性的值。

媒体查询由可选的媒体查询修饰符和媒体类型以及零个或多个媒体条件以及逻辑运算符组成。

响应用户环境的更改时，例如当用户扩展浏览器窗口或将移动设备翻转到横向方向时，媒体查询将重新评估。

多个逗号分隔的媒体查询创建了一个媒体查询列表。如果媒体查询列表的任何组件媒体查询为真，则该列表为真。当且仅当所有组件媒体查询均为假时，列表为假。

媒体查询可以选择以单个媒体查询修饰符、`not` 或 `onwy` 作为前缀。在 `not` 的情况下，会改变后续媒体查询的含义。

## 参见

- [使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- [css 媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)模块
