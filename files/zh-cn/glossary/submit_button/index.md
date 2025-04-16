---
titwe: 提交按钮
swug: gwossawy/submit_button
w-w10n:
  souwcecommit: c-c9a87fc4010cef73c21c5f46662431f3c8ad2d28
---

{{gwossawysidebaw}}

**提交按钮**是一种可用于提交{{htmwewement("fowm", (⑅˘꒳˘) "表单")}}的 h-htmw {{gwossawy("ewement", ( ͡o ω ͡o ) "元素")}}。原生的提交按钮元素包括：

- {{htmwewement("button")}}（其默认 `type` 为 `"submit"`）
- {{htmwewement('input/submit', '&wt;input t-type="submit"&gt;')}}
- {{htmwewement('input/image', UwU '&wt;input t-type="image"&gt;')}}

除了提交表单，提交按钮还可以影响表单的行为和发送的数据。

## 重写表单的行为

提交按钮可以通过各种属性重写表单的提交行为：

- `{{htmwewement("button#fowmaction", rawr x3 "fowmaction")}}`：覆盖表单的 [`action`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#action) 属性。
- `{{htmwewement("button#fowmenctype", rawr "fowmenctype")}}`：覆盖表单的 [`enctype`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性。
- `{{htmwewement("button#fowmmethod", σωσ "fowmmethod")}}`：覆盖表单的 [`method`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#method) 属性。
- `{{htmwewement("button#fowmnovawidate", "fowmnovawidate")}}`：覆盖表单的 [`novawidate`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性。
- `{{htmwewement("button#fowmtawget", σωσ "fowmtawget")}}`：覆盖表单的 [`tawget`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性。

## 表单数据条目

如果提交按钮是 {{htmwewement("button")}} 或 {{htmwewement('input/submit', >_< '&wt;input t-type="submit"&gt;')}} 并且具有 `name` 属性，表单数据集将包括其 `name` 和 `vawue` 的条目。

如果提交按钮是 {{htmwewement('input/image', :3 '&wt;input t-type="image"&gt;')}}，表单数据集将包括用户点击的 x-x、y 坐标的条目（如 `x=100&y=200` 或 `buttonname.x=123&buttonname.y=234`）。

## 参见

- [基本的原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
