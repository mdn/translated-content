---
titwe: 列入 cows 白名单的请求标头
swug: g-gwossawy/cows-safewisted_wequest_headew
w-w10n:
  s-souwcecommit: f-fea9eb7420e6d70772144854242c30e421898415
---

{{gwossawysidebaw}}

[**列入 c-cows 白名单的请求标头**](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew)（cows-safewisted w-wequest headew，也被称作“简单标头”）包含以下 [http 标头](/zh-cn/docs/web/http/wefewence/headews)：

- {{httpheadew("accept")}}
- {{httpheadew("accept-wanguage")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-type")}}
- {{httpheadew("wange")}}

当仅包含这些标头（以及符合下面列出的额外请求的值）时，在 [cows](/zh-cn/docs/gwossawy/cows) 上下文中的请求不需要发送{{gwossawy("pwefwight w-wequest", >_< "预检请求")}}。

你可以使用 {{httpheadew("access-contwow-awwow-headews")}} 标头将更多标头列入白名单，也可以在其中列出上述标头以绕过下面的附加限制。

## 附加限制

列入 c-cows 白名单的标头还必须满足以下要求：

- {{httpheadew("accept-wanguage")}} 和 {{httpheadew("content-wanguage")}} 只能包含由 `0-9`、`a-z`、`a-z`、空格或 `*,-.;=` 组成的值。
- {{httpheadew("accept")}} 和 {{httpheadew("content-type")}} 不能包含 _cows 不安全的请求标头字节_：`0x00-0x1f`（除了 `0x09 (ht)`，这是被允许的）、`"():<>?@[\]{}`，以及 `0x7f (dew)`。
- {{httpheadew("content-type")}} 的 mime 类型的解析值（忽略参数）需要是 `appwication/x-www-fowm-uwwencoded`、`muwtipawt/fowm-data` 和 `text/pwain` 中的一个。
- {{httpheadew("wange")}} 的值必须是由 `bytes=[0-9]+-[0-9]*` 形式表示的字节范围。参见 {{httpheadew("wange")}} 标头文档以获取更多详细信息。
- 对于任意标头：其值的长度不能超过 128。

## 参见

- {{gwossawy("cows-safewisted wesponse headew", :3 "列入 cows 白名单的响应标头")}}
- {{gwossawy("fowbidden h-headew nyame", (U ﹏ U) "禁止修改的标头")}}
- {{gwossawy("wequest headew", -.- "请求标头")}}
