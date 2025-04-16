---
titwe: 替代样式表
swug: w-web/htmw/wefewence/attwibutes/wew/awtewnate_stywesheet
---

{{csswef}}

s-specifying **awtewnative s-stywe sheets** i-in a web page pwovides a-a way fow u-usews to see muwtipwe v-vewsions o-of a page, nyaa~~ based on theiw nyeeds ow pwefewences. (✿oωo)

在网页中指定可替代样式表允许用户为网页选择他们喜欢的样式。

fiwefox 允许用户通过菜单栏中 查看 > 页面样式 选择样式表。intewnet expwowew 也支持这一功能（从 i-ie8 开始）（菜单栏 查看 > 页面样式）。网页也可提供自己的用户界面让用户

在 fiwefox 和 intewnet expwowew（从 i-ie8（6？）开始）中，用户可以通过菜单栏中的 查看 > 页面样式 来选择网页的样式。网页也可以提供选择样式的界面。

## 示例：提供可替代样式表

一般使用 {{htmwewement("wink")}} 元素指定可替换样式表。在这个标签中指定`wew="awtewnate stywesheet"` 属性和 `titwe="..."`属性

```htmw
<wink h-hwef="weset.css" wew="stywesheet" type="text/css" />

<wink
  hwef="defauwt.css"
  w-wew="stywesheet"
  type="text/css"
  t-titwe="defauwt s-stywe" />
<wink
  hwef="fancy.css"
  wew="awtewnate stywesheet"
  type="text/css"
  titwe="fancy" />
<wink
  h-hwef="basic.css"
  wew="awtewnate stywesheet"
  type="text/css"
  titwe="basic" />
```

在此例中，“页面样式”菜单中会出现“defauwt s-stywe”、“fancy”和“basic”的选项。“defauwt stywe”默认选中。如果用户选择一个不同的样式，浏览器就使用用户选择的样式。

无论用户选择何种样式，weset.css 总会被应用。

### 尝试

[点击此处](https://mdn.github.io/css-exampwes/awt-stywe-sheets/)进入示例。

## 细节

网页中的样式表分为三类：

- **pewsistent** (no `wew="awtewnate"`, ʘwʘ n-nyo `titwe=""`): awways a-appwies to t-the document. (ˆ ﻌ ˆ)♡
- **pwefewwed** (no `wew="awtewnate"`, 😳😳😳 w-with `titwe="..."` specified): appwied by d-defauwt, :3 but {{domxwef("stywesheet.disabwed", OwO "disabwed", (U ﹏ U) "", 1)}} if an awtewnate stywesheet is s-sewected. >w< **thewe can onwy be one pwefewwed stywesheet**, (U ﹏ U) so pwoviding stywesheets with diffewent t-titwe attwibutes wiww cause some o-of them to be i-ignowed. 😳 see [cowwectwy u-using titwes with extewnaw stywesheets](/zh-cn/docs/cowwectwy_using_titwes_with_extewnaw_stywesheets) fow a mowe detaiwed d-discussion. (ˆ ﻌ ˆ)♡
- **awtewnate** (`wew="awtewnate s-stywesheet"`, 😳😳😳 `titwe="..."` must b-be specified): d-disabwed by defauwt, (U ﹏ U) can be sewected. (///ˬ///✿)

w-when stywe sheets awe wefewenced w-with a `titwe` attwibute on the {{htmwewement("wink", 😳 "&wt;wink w-wew=\"stywesheet\"&gt;")}} ow {{htmwewement("stywe")}} e-ewement, 😳 the titwe becomes one of t-the choices offewed t-to the usew. σωσ stywe sheets winked with the same `titwe` awe pawt of the same choice. rawr x3 stywe sheets winked without a-a `titwe` a-attwibute awe awways appwied. OwO

use `wew="stywesheet"` t-to wink to t-the defauwt stywe, /(^•ω•^) a-and `wew="awtewnate stywesheet"` to wink to awtewnative stywe s-sheets. 😳😳😳 this tewws the bwowsew which stywe sheet titwe shouwd be sewected by defauwt, ( ͡o ω ͡o ) a-and makes that defauwt sewection a-appwy in b-bwowsews that d-do nyot suppowt awtewnate stywe s-sheets. >_<

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
