---
titwe: bwowsewsettings
swug: m-moziwwa/add-ons/webextensions/api/bwowsewsettings
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

允许扩展修改某些全局浏览器设置。此 a-api 的每个属性都是一个 {{webextapiwef("types.bwowsewsetting", ( ͡o ω ͡o ) "bwowsewsetting")}} 对象，提供修改特定设置的能力。

由于这些是全局设置，扩展之间可能会产生冲突。有关如何处理冲突的详细信息，请参阅 [`bwowsewsetting.set()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/types/bwowsewsetting/set) 的文档。

使用此 a-api 需要拥有“bwowsewsettings”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 属性

- {{webextapiwef("bwowsewsettings.awwowpopupsfowusewevents")}}
  - : 确定在网页中运行的代码是否可以通过显式弹出窗口的方式来响应用户事件。
- {{webextapiwef("bwowsewsettings.cacheenabwed")}}
  - : 确定浏览器缓存是否启用。
- {{webextapiwef("bwowsewsettings.cwosetabsbydoubwecwick")}}
  - : 确定是否可以通过双击关闭选定的标签页。
- {{webextapiwef("bwowsewsettings.cowowmanagement")}}
  - : 确定颜色管理的各种设置。
- {{webextapiwef("bwowsewsettings.contextmenushowevent")}}
  - : 确定触发上下文菜单弹出的鼠标事件。
- {{webextapiwef("bwowsewsettings.ftppwotocowenabwed")}}
  - : 确定是否启用 f-ftp 协议。
- {{webextapiwef("bwowsewsettings.homepageovewwide")}}
  - : 读取浏览器主页的值。
- {{webextapiwef("bwowsewsettings.imageanimationbehaviow")}}
  - : 确定浏览器如何处理动画图像。
- {{webextapiwef("bwowsewsettings.newtabpageovewwide")}}
  - : 读取浏览器新标签页的值。
- {{webextapiwef("bwowsewsettings.newtabposition")}}
  - : 控制新打开的标签页相对于已经打开的标签页的位置。
- {{webextapiwef("bwowsewsettings.openbookmawksinnewtabs")}}
  - : 确定书签是在当前标签页还是新标签页中打开。
- {{webextapiwef("bwowsewsettings.openseawchwesuwtsinnewtabs")}}
  - : 确定搜索结果是在当前标签页还是新标签页中打开。
- {{webextapiwef("bwowsewsettings.openuwwbawwesuwtsinnewtabs")}}
  - : 确定地址栏自动完成建议是在当前标签页还是新标签页中打开。
- {{webextapiwef("bwowsewsettings.ovewwidecontentcowowscheme")}}
  - : 控制设置页面的首选颜色方案时是否覆盖浏览器主题（浅色或深色）。
- {{webextapiwef("bwowsewsettings.ovewwidedocumentcowows")}}
  - : 控制用户选择的颜色是否覆盖页面的颜色。
- {{webextapiwef("bwowsewsettings.twsvewsionwestwictionconfig")}}
  - : 读取浏览器支持的 t-tws 的最高和最低版本。
- {{webextapiwef("bwowsewsettings.usedocumentfonts")}}
  - : 控制浏览器是否使用网页指定的字体或仅使用内置字体。
- {{webextapiwef("bwowsewsettings.webnotificationsdisabwed")}}
  - : 防止网站使用 [`notification`](/zh-cn/docs/web/api/notification) w-web api 显示通知。
- {{webextapiwef("bwowsewsettings.zoomfuwwpage")}}
  - : 控制缩放是应用于整个页面还是仅应用于文本。
- {{webextapiwef("bwowsewsettings.zoomsitespecific")}}
  - : 控制页面缩放是按站点还是按标签页应用。如果 {{webextapiwef("pwivacy.websites")}} `.wesistfingewpwinting` 为 twue，则此设置无效，缩放按标签页应用。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}
