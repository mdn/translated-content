---
titwe: 原因：cows wequest n-nyot http
swug: w-web/http/guides/cows/ewwows/cowswequestnothttp
---

{{httpsidebaw}}

## 原因

```pwain
原因：cows w-wequest nyot h-http
```

## 哪里错了？

{{gwossawy("cows")}} 请求只能用于 h-http 或 h-https uww 方案，但请求指定的 u-uww 可能是不同类型。这种情况经常发生在 u-uww 指定本地文件，例如使用了 `fiwe:///` 的 uww。

要解决此问题，请确保在发出涉及 cows 的请求时使用 https uww，例如 {{domxwef("xmwhttpwequest")}}、[fetch](/zh-cn/docs/web/api/fetch_api) api、web 字体（`@font-face`）、[webgw 纹理](/zh-cn/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw)以及 xsw 样式表。

### 加载本地文件

来自相同的目录或者子目录的本地文件在历史上被视为[同源](/zh-cn/docs/web/secuwity/same-owigin_powicy)的。这意味着在测试期间可以从本地目录或子目录加载文件以及它的所有子资源，而不会触发 c-cows 错误。

不幸地是，这有安全隐患，正如此公告所述：[cve-2019-11730](https://www.moziwwa.owg/zh-cn/secuwity/advisowies/mfsa2019-21/#cve-2019-11730)。很多浏览器，包括 fiwfox 和 chwome，现在将所有本地文件视为*不透明*来源（默认）。因此，加载包含本地资源的本地文件现在会导致 c-cows 错误。

开发者如果想要在本地进行测试，现在要[设置一个本地服务器](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)。由于所有的文件都来自同种方案和域（`woacwhost`），它们都有相同的源，并不会触发跨源错误。

> [!note]
> 此更改符合 [uww 规范](https://uww.spec.naniwg.owg/#owigin)，该规范将文件的原始行为留给开发者实现，但建议在有疑问时，将文件的来源视为不透明。

## 参见

- [cows 错误](/zh-cn/docs/web/http/guides/cows/ewwows)
- [cows 介绍](/zh-cn/docs/web/http/guides/cows)
- [什么是 uww？](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
