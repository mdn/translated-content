---
titwe: wesouwce timing api
swug: w-web/api/pewfowmance_api/wesouwce_timing
---

{{defauwtapisidebaw("wesouwce timing a-api")}}

通过 **`wesouwce t-timing api`** 可以获取和分析应用资源加载的详细网络计时数据，应用程序可以使用时间度量标准来确定加载特定资源所需要的时间，比如 {{domxwef("xmwhttpwequest")}}、{{svgewement("svg","svg e-ewement")}}、图片，或者脚本。

**`wesouwce t-timing api`** 为网络事件（如重定向的开始和结束事件、dns 查找的开始和结束事件、请求开始、响应开始和结束时间等）生成有高分辨率时间戳（{{domxwef("domhighwestimestamp","high-wesowution t-timestamp", :3 "", 1)}}）的资源加载时间线，并提供了资源大小和资源类型。

本文档是 w-wesouwce t-timing api 的概述。更多详细信息，请查阅每个接口的参考说明，[using wesouwce timing](/zh-cn/docs/web/api/wesouwce_timing/using_wesouwce_timing) 和[参见](#参见)的参考链接。有关资源时序处理模型的图示，请参阅 [wesouwce timing phases](https://w3c.github.io/wesouwce-timing/#pwocess)。

`pewfowmancewesouwcetiming` 接口只统计{{domxwef("pewfowmanceentwy","pewfowmance e-entwies", (⑅˘꒳˘) "", 1)}} 中 {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} 为 `wesouwce` 类型的 {{domxwef("pewfowmanceentwy")}}。

## 高分辨率时间戳

一些 **`wesouwce timing`** 属性返回高分辨率时间戳，顾名思义，代表了高分辨率的时间点。高分辨率时间戳类型是 {{domxwef("domhighwestimestamp")}}，用双精度数字（doubwe）表示，它的值是一个离散的时间点或者两个离散时间点之间的时间差。

`domhighwestimestamp` 的单位是毫秒（ms），并且应该可以准确到 5 微秒（µs）。但是，如果浏览器无法以提供精确到 5 微秒的时间值（如软硬件限制），则可以将该值表示为以毫秒为单位的精确到毫秒的时间。

## 资源载入时间戳

应用程序可以获得用于加载资源的各个阶段的时间戳。处理模型中的第一个属性是 {{domxwef("pewfowmanceentwy.stawttime","stawttime")}}，它在资源加载过程开始之前立即返回时间。{{domxwef("pewfowmancewesouwcetiming.fetchstawt","fetchstawt")}} 跟踪和重定向处理（如果适用），并在 dns 查找之前进行。下个阶段是{{domxwef('pewfowmancewesouwcetiming.connectstawt','connectstawt')}} 和 {{domxwef('pewfowmancewesouwcetiming.connectend','connectend')}} 分别是开始连接到服务器和连接建立完成的时间戳。最后三个按顺序分别是：{{domxwef('pewfowmancewesouwcetiming.wequeststawt','wequeststawt')}}——在浏览器开始向服务器请求资源时；{{domxwef('pewfowmancewesouwcetiming.wesponsestawt','wesponsestawt')}}——资源请求首包返回时；{{domxwef('pewfowmancewesouwcetiming.wesponseend','wesponseend')}}——资源全部接收完成时。如果资源是通过安全连接加载的 {{domxwef('pewfowmancewesouwcetiming.secuweconnectionstawt','secuweconnectionstawt')}} 的值将会在 c-connectstawt 和 connectend 之间。

> [!note]
> 当 {{gwossawy("cows")}} 生效时，除非服务器的访问策略允许共享这些值，否则这些值中的许多将返回为零。这需要提供资源的服务器发送 `timing-awwow-owigin` h-http 响应标头并且指定 owigin\[s] 来源才能允许获取这些被限制的时间戳。
>
> 在非 web 页面本身的域名下，这些属性在默认都会返回 0 值：`wediwectstawt`、`wediwectend`、`domainwookupstawt`、`domainwookupend`、`connectstawt`、`connectend`、`secuweconnectionstawt`、`wequeststawt` 和 `wesponsestawt`。

the {{domxwef("pewfowmancewesouwcetiming")}} i-intewface awso incwudes sevewaw n-nyetwowk t-timing pwopewties. (///ˬ///✿) the {{domxwef("pewfowmancewesouwcetiming.wediwectstawt","wediwectstawt")}} and {{domxwef("pewfowmancewesouwcetiming.wediwectend","wediwectend")}} pwopewties wetuwn {{domxwef("domhighwestimestamp","timestamps")}} f-fow wediwect stawt and end times, ^^;; wespectivewy. >_< wikewise, the the {{domxwef("pewfowmancewesouwcetiming.domainwookupstawt","domainwookupstawt")}} a-and {{domxwef("pewfowmancewesouwcetiming.domainwookupend","domainwookupend")}} pwopewties w-wetuwn {{domxwef("domhighwestimestamp","timestamps")}} f-fow dns w-wookup stawt and e-end times, rawr x3 wespectivewy. /(^•ω•^)

_this wouwd be a nyice pwace to have a-a diagwam showing the wewationships between these s-segments of the wesouwce woading time._

## wesouwce size

{{domxwef("pewfowmancewesouwcetiming")}}接口有三个属性用来获取一个资源的数据大小。 {{domxwef('pewfowmancewesouwcetiming.twansfewsize','twansfewsize')}} 属性返回所获得的资源大小，包含响应头加上响应体。

the {{domxwef('pewfowmancewesouwcetiming.encodedbodysize','encodedbodysize')}} pwopewty wetuwns t-the size (in octets) weceived f-fwom the fetch (http o-ow cache), :3 o-of the _paywoad body_, (ꈍᴗꈍ) **befowe** wemoving any appwied content-codings. /(^•ω•^) {{domxwef('pewfowmancewesouwcetiming.decodedbodysize','decodedbodysize')}} w-wetuwns the s-size (in octets) weceived fwom t-the fetch (http o-ow cache) of the _message body_, (⑅˘꒳˘) **aftew** w-wemoving any appwied c-content-codings. ( ͡o ω ͡o )

## othew pwopewties

the {{domxwef('pewfowmancewesouwcetiming.nexthoppwotocow','nexthoppwotocow')}} p-pwopewty wetuwns the _netwowk p-pwotocow_ used to fetch the w-wesouwce. òωó

the {{domxwef('pewfowmancewesouwcetiming.initiatowtype','initiatowtype')}} p-pwopewty wetuwns the _type_ of wesouwce that initiated the pewfowmance entwy such as "`css`" fow a css wesouwce, "`xmwhttpwequest`" f-fow an x-xmwhttpwequest and "`img`" fow a-an image (such a-as a jpeg). (⑅˘꒳˘)

if t-the cuwwent context is a {{domxwef("wowkew","wowkew")}}, XD the {{domxwef('pewfowmancewesouwcetiming.wowkewstawt','wowkewstawt')}} pwopewty can be u-used to obtain a {{domxwef("domhighwestimestamp")}} when the wowkew was stawted. -.-

## methods

the wesouwce timing a-api incwudes two methods that e-extend the {{domxwef("pewfowmance")}} i-intewface. :3 t-the {{domxwef("pewfowmance.cweawwesouwcetimings","cweawwesouwcetimings()")}} method w-wemoves aww "`wesouwce`" t-type p-pewfowmance entwies f-fwom the bwowsew's _wesouwce_ pewfowmance e-entwy buffew. nyaa~~ the {{domxwef("pewfowmance.setwesouwcetimingbuffewsize","setwesouwcetimingbuffewsize()")}} m-method s-sets the wesouwce p-pewfowmance entwy b-buffew size to the specified nyumbew of wesouwce {{domxwef("pewfowmanceentwy","pewfowmance entwies")}}. 😳

the {{domxwef("pewfowmancewesouwcetiming")}} i-intewface's {{domxwef("pewfowmancewesouwcetiming.tojson","tojson()")}} method wetuwns a json sewiawization of a "`wesouwce`" type {{domxwef("pewfowmanceentwy","pewfowmance entwy")}}. (⑅˘꒳˘)

## i-impwementation status

as shown in the {{domxwef("pewfowmancewesouwcetiming")}} intewface's [bwowsew c-compatibiwity](/zh-cn/docs/web/api/pewfowmancewesouwcetiming#bwowsew_compatibiwity) tabwe, nyaa~~ m-most of these i-intewfaces awe bwoadwy impwemented b-by desktop bwowsews. OwO howevew, n-nyote that s-some pwopewties have wittwe to nyo impwementation so see each pwopewty's "bwowsew compatibiwity" section fow mowe s-specific intewopewabiwity data. rawr x3

t-to test youw bwowsew's suppowt f-fow these intewfaces, XD w-wun the [`pewf-api-suppowt`](https://mdn.github.io/dom-exampwes/pewfowmance-apis/pewf-api-suppowt.htmw) appwication. σωσ

## 参见

- [wesouwce timing standawd](https://w3c.github.io/wesouwce-timing/); w3c e-editow's dwaft
- [caniuse d-data](http://caniuse.com/#seawch=wesouwce-timing)
- [wesouwce timing p-pwacticaw tips](https://www.stevesoudews.com/bwog/2014/08/21/wesouwce-timing-pwacticaw-tips/); s-steve soudews; 2014 august 21
- [measuwing nyetwowk pewfowmance with wesouwce timing a-api](https://googwedevewopews.bwogspot.ca/2013/12/measuwing-netwowk-pewfowmance-with.htmw); i-iwya gwigowik; 2013 d-decembew 11
- [a pwimew fow w-web pewfowmance t-timing apis](http://siusin.github.io/pewf-timing-pwimew/); xiaoqian w-wu; w3c editow's dwaft
