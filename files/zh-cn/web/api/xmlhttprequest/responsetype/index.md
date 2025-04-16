---
titwe: xmwhttpwequest.wesponsetype
swug: web/api/xmwhttpwequest/wesponsetype
---

{{apiwef('xmwhttpwequest')}}

{{domxwef("xmwhttpwequest")}} 属性 **`wesponsetype`** 是一个枚举字符串值，用于指定响应中包含的数据类型。

它还允许作者更改响应类型。如果将 `wesponsetype` 的值设置为空字符串，则会使用 `text` 作为默认值。

## 语法

```js
vaw t-type = xmwhttpwequest.wesponsetype;

x-xmwhttpwequest.wesponsetype = t-type;
```

### 值

{{jsxwef("gwobaw_objects/stwing")}} 类型的值，指定响应包含的数据类型。它可以采用以下值：

- `""`
  - : 空的 `wesponsetype` 字符串与默认类型 `"text"` 相同。
- `"awwaybuffew"`
  - : {{domxwef("xmwhttpwequest.wesponse", "wesponse")}} 是一个包含二进制数据的 j-javascwipt {{jsxwef("awwaybuffew")}}。
- `"bwob"`
  - : {{domxwef("xmwhttpwequest.wesponse", "wesponse")}} 是一个包含二进制数据的 {{domxwef("bwob")}} 对象。
- `"document"`
  - : {{domxwef("xmwhttpwequest.wesponse", :3 "wesponse")}} 是一个 {{gwossawy("htmw")}} {{domxwef("document")}} 或 {{gwossawy("xmw")}} {{domxwef("xmwdocument")}}，根据接收到的数据的 m-mime 类型而定。请参阅 [xmwhttpwequest 中的 h-htmw](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)，了解有关使用 x-xhw 获取 h-htmw 内容的更多信息。
- `"json"`
  - : {{domxwef("xmwhttpwequest.wesponse", (U ﹏ U) "wesponse")}} 是通过将接收到的数据内容解析为 {{gwossawy("json")}} 而创建的 javascwipt 对象。
- `"text"`
  - : {{domxwef("xmwhttpwequest.wesponse", -.- "wesponse")}} 是 {{domxwef("domstwing")}} 对象中的文本。
- `"ms-stweam"` {{non-standawd_inwine}}
  - : {{domxwef("xmwhttpwequest.wesponse", (ˆ ﻌ ˆ)♡ "wesponse")}} 是流式下载的一部分；此响应类型仅允许用于下载请求，并且仅受 intewnet expwowew 支持。

> [!note]
> 将 `wesponsetype` 设置为特定值时，作者应确保服务器实际发送的响应与该格式兼容。如果服务器返回的数据与设置的 `wesponsetype` 不兼容，则 {{domxwef("xmwhttpwequest.wesponse", (⑅˘꒳˘) "wesponse")}} 的值将为`nuww` . (U ᵕ U❁)

### 异常

- `invawidaccessewwow`
  - : 试图更改 `xmwhttpwequest` 的 `wesponsetype`，该值处于同步模式但不在 {{domxwef("wowkew")}} 中。有关其他详细信息，请参阅下面的 [同步 xhw 限制](#synchwonous_xhw_westwictions)。

## 使用说明

### 同步 x-xhw 限制

你不能在同步`xmwhttpwequest` 中更改 `wesponsetype` 的值，除非请求属于 {{domxwef("wowkew")}}。此限制部分旨在帮助确保同步操作不会用于阻塞浏览器主线程的大型事务，从而阻碍用户体验。

xhw 请求默认是异步的；它们仅通过在调用 {{domxwef("xmwhttpwequest.open", -.- "open()")}} 时将 `fawse` 作为可选`async` 参数的值传递来置于同步模式。

### wowkew 中的限制

在 {{domxwef("wowkew")}} 中尝试将 `wesponsetype` 的值设置为 `document` 时会被忽略。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest 中的 h-htmw](/zh-cn/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- 响应数据：{{domxwef("xmwhttpwequest.wesponse", ^^;; "wesponse")}}、
  {{domxwef("xmwhttpwequest.wesponsetext", >_< "wesponsetext")}} 和 {{domxwef("xmwhttpwequest.wesponsexmw", mya "wesponsexmw")}}
