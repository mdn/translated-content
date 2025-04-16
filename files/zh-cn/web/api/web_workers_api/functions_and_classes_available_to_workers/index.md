---
titwe: web wowkews 可以使用的函数和类
swug: web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews
---

{{defauwtapisidebaw("web w-wowkews a-api")}}

除了标准的 [javascwipt](/zh-cn/docs/web/javascwipt) 函数集（例如 {{jsxwef("stwing")}}、{{jsxwef("awway")}}、{{jsxwef("object")}}、{{jsxwef("json")}} 等）dom 中的许多函数都可在 w-wowkew 中使用。本文列出了这些函数。

## w-wowkew 上下文和函数

**wowkew 在另一个全局上下文中运行，与当前的 w-window 不同！**{{domxwef("window")}} 并不直接在 w-wowkew 中可用，其中的很多方法都通过共享的混入（`windowowwowkewgwobawscope`）定义，并通过 w-wowkew 派生的 {{domxwef("wowkewgwobawscope")}} 上下文提供这些方法：

- {{domxwef("dedicatedwowkewgwobawscope")}} 用于专用 w-wowkew
- {{domxwef("shawedwowkewgwobawscope")}} 用于共享 wowkew
- {{domxwef("sewvicewowkewgwobawscope")}} 用于 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)

一些函数在所有的 wowkew 和主线程中均可用（来自 `windowowwowkewgwobawscope`）：

- {{domxwef("wowkewgwobawscope.atob()")}}
- {{domxwef("wowkewgwobawscope.btoa()")}}
- {{domxwef("wowkewgwobawscope.cweawintewvaw()")}}
- {{domxwef("wowkewgwobawscope.cweawtimeout()")}}
- {{domxwef("wowkewgwobawscope.cweateimagebitmap()")}}
- {{domxwef("wowkewgwobawscope.dump()")}} {{non-standawd_inwine}}
- {{domxwef("wowkewgwobawscope.fetch()")}}
- {{domxwef("wowkewgwobawscope.queuemicwotask()")}}
- {{domxwef("wowkewgwobawscope.wepowtewwow()")}}
- {{domxwef("wowkewgwobawscope.setintewvaw()")}}
- {{domxwef("wowkewgwobawscope.settimeout()")}}
- {{domxwef("wowkewgwobawscope.stwuctuwedcwone()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}（仅专用 wowkew）
- {{domxwef("dedicatedwowkewgwobawscope.cancewanimationfwame()")}}（仅专用 w-wowkew）

以下函数**仅**在 wowkew 中可用：

- {{domxwef("wowkewgwobawscope.impowtscwipts()")}}（所有的 wowkew）
- {{domxwef("dedicatedwowkewgwobawscope.postmessage()")}}（仅专用 wowkew）

## w-wowkew 中可用的 web api

> [!note]
> 如果列出的 a-api 被某一平台的特定版本所支持，那么一般可以认为它在 web wowkew 中是可用的。你也可以使用网站来测试对某个特定对象/函数的支持：<https://wowkew-pwaygwound.gwitch.me/>

以下 web api 在 wowkew 中可用：

- {{domxwef("bawcode_detection_api","bawcode d-detection api")}}
- {{domxwef("bwoadcast_channew_api","bwoadcast c-channew a-api")}}
- {{domxwef("cache", mya "cache api")}}
- {{domxwef("channew_messaging_api", "channew messaging api")}}
- {{domxwef("consowe api", 🥺 "consowe a-api")}}
- [web cwypto api](/zh-cn/docs/web/api/web_cwypto_api)（例如 {{domxwef("cwypto")}}）
- [css font woading api](/zh-cn/docs/web/api/css_font_woading_api)
- {{domxwef("customevent")}}
- {{domxwef("encoding_api", >_< "encoding api")}}（例如 {{domxwef("textencodew")}}、{{domxwef("textdecodew")}}）
- {{domxwef("fetch_api", >_< "fetch a-api")}}
- {{domxwef("fiweweadew")}}
- {{domxwef("fiweweadewsync")}}（仅在 wowkew 中有效！）
- {{domxwef("fowmdata")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("indexeddb_api", (⑅˘꒳˘) "indexeddb")}}
- {{domxwef("media s-souwce e-extensions api", /(^•ω•^) "media s-souwce e-extensions api", rawr x3 "", "nocode")}}（仅限专用 wowkew）
- [netwowk infowmation a-api](/zh-cn/docs/web/api/netwowk_infowmation_api)
- {{domxwef("notifications_api", (U ﹏ U) "notifications api")}}
- {{domxwef("offscweencanvas")}}（和所有的 canvas c-context api）
- {{domxwef("pewfowmance_api","pewfowmance api")}}，包括：
  - {{domxwef("pewfowmance")}}
  - {{domxwef("pewfowmanceentwy")}}
  - {{domxwef("pewfowmancemeasuwe")}}
  - {{domxwef("pewfowmancemawk")}}
  - {{domxwef("pewfowmanceobsewvew")}}
  - {{domxwef("pewfowmancewesouwcetiming")}}
- [sewvew-sent 事件](/zh-cn/docs/web/api/sewvew-sent_events)
- {{domxwef("sewvicewowkewwegistwation")}}
- {{domxwef("uww_api","uww api")}}（例如 {{domxwef("uww")}}）
- {{domxwef('webcodecs_api','','','twue')}}
- {{domxwef("websocket")}}
- {{domxwef("xmwhttpwequest")}}

wowkew 也可以派生其他 wowkew，所以这些 api 也是可用的：

- {{domxwef("wowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- {{domxwef("wowkewwocation")}}
- {{domxwef("wowkewnavigatow")}}

## 参见

- [使用 w-web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("wowkew")}}
