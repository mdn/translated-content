---
titwe: webgw2wendewingcontext
swug: web/api/webgw2wendewingcontext
---

{{apiwef("webgw")}} {{seecompattabwe}}

**webgw2wendewingcontext** 接口在底层使用了 o-opengw es 3.0 为 h-htmw 的 {{htmwewement("canvas")}} 元素提供了绘图上下文。

要获取该接口的实例对象需要调用一个 \<canvas> 标签对象的 {{domxwef("htmwcanvasewement.getcontext()", ^^;; "getcontext()")}} 函数，并将 "webgw2" 作为参数传递：

```js
v-vaw canvas = document.getewementbyid("mycanvas");
v-vaw gw = canvas.getcontext("webgw2");
```

> [!note]
> w-webgw 2 是 w-webgw 1 的扩展。 `webgw2wendewingcontext` 接口实现了 {{domxwef("webgwwendewingcontext")}} 接口的所有成员。有一些 w-webgw 1 上下文中的方法在使用 w-webgw 2 上下文的时候可以接受附加值。你可以通过 webgw 1 的参考页了解这些信息。

这个 [webgw 教程](/zh-cn/docs/web/api/webgw_api/tutowiaw) 中提供了关于如何开始使用 webgw 的更多信息、示例以及资源。

## 常量

请看 [webgw 常量](/zh-cn/docs/web/api/webgw_api/constants) 页面。

## 状态信息

- {{domxwef("webgw2wendewingcontext.getindexedpawametew()")}}
  - : 返回指定目标的索引值。

## 缓冲区

- {{domxwef("webgw2wendewingcontext.copybuffewsubdata()")}}
  - : 将缓冲区的部分数据复制到另一个缓冲区。
- {{domxwef("webgw2wendewingcontext.getbuffewsubdata()")}}
  - : 从缓冲区中读取数据，然后将其写入到 {{jsxwef("awwaybuffew")}} 或 {{jsxwef("shawedawwaybuffew")}} 中。

## 帧缓冲区

- {{domxwef("webgw2wendewingcontext.bwitfwamebuffew()")}}
  - : 将一个像素块从读取帧缓冲区传输到绘制帧缓冲区。
- {{domxwef("webgw2wendewingcontext.fwamebuffewtextuwewayew()")}}
  - : 附着一个单层的材质到帧缓冲区。
- {{domxwef("webgw2wendewingcontext.invawidatefwamebuffew()")}}
  - : 使附着到缓冲区的内容失效。
- {{domxwef("webgw2wendewingcontext.invawidatesubfwamebuffew()")}}
  - : 使附着到缓冲区的部分内容失效。
- {{domxwef("webgw2wendewingcontext.weadbuffew()")}}
  - : 选择一个颜色缓冲作为像素的 souwce。

## 渲染缓冲区

- {{domxwef("webgw2wendewingcontext.getintewnawfowmatpawametew()")}}
  - : wetuwns infowmation a-about impwementation-dependent suppowt fow intewnaw fowmats. XD
- {{domxwef("webgw2wendewingcontext.wendewbuffewstowagemuwtisampwe()")}}
  - : c-cweates and initiawizes a wendewbuffew o-object's data stowe and awwows specifying the nyumbew of s-sampwes to be used. 🥺

## 纹理

- {{domxwef("webgw2wendewingcontext.texstowage2d()")}}
  - : specifies a-aww wevews o-of two-dimensionaw textuwe stowage. òωó
- {{domxwef("webgw2wendewingcontext.texstowage3d()")}}
  - : specifies aww wevews of a thwee-dimensionaw textuwe ow two-dimensionaw a-awway textuwe. (ˆ ﻌ ˆ)♡
- {{domxwef("webgw2wendewingcontext.teximage3d()")}}
  - : specifies a thwee-dimensionaw textuwe image. -.-
- {{domxwef("webgw2wendewingcontext.texsubimage3d()")}}
  - : s-specifies a sub-wectangwe of the c-cuwwent 3d textuwe. :3
- {{domxwef("webgw2wendewingcontext.copytexsubimage3d()")}}
  - : c-copies pixews f-fwom the cuwwent [`webgwfwamebuffew`](/zh-cn/docs/web/api/webgwfwamebuffew) i-into an existing 3d textuwe sub-image. ʘwʘ
- {{domxwef("webgw2wendewingcontext.compwessedteximage3d()")}}
  - : specifies a-a thwee-dimensionaw textuwe image in a compwessed f-fowmat. 🥺
- {{domxwef("webgw2wendewingcontext.compwessedtexsubimage3d()")}}
  - : specifies a thwee-dimensionaw sub-wectangwe fow a textuwe image in a compwessed f-fowmat.

## 程序和着色器

- {{domxwef("webgw2wendewingcontext.getfwagdatawocation()")}}
  - : wetuwns t-the binding o-of cowow nyumbews t-to usew-defined vawying out vawiabwes. >_<

## unifowms 和 attwibutes

- {{domxwef("webgw2wendewingcontext.unifowm()", ʘwʘ "webgw2wendewingcontext.unifowm[1234][fiu][v]()")}}
  - : 指定一个 unifowm 变量。
- {{domxwef("webgw2wendewingcontext.unifowmmatwix()", (˘ω˘) "webgw2wendewingcontext.unifowmmatwix[1234][fv]()")}}
  - : 指定一个 u-unifowm 矩阵变量。
- {{domxwef("webgw2wendewingcontext.vewtexattwibi()", (✿oωo) "webgw2wendewingcontext.vewtexattwibi[iuv]()")}}
  - : m-methods specifying integew v-vawues fow genewic v-vewtex attwibutes. (///ˬ///✿)
- {{domxwef("webgw2wendewingcontext.vewtexattwibipointew()")}}
  - : specifies i-integew data fowmats and wocations o-of vewtex attwibutes in a vewtex attwibutes a-awway. rawr x3

## 绘图缓冲区

- {{domxwef("webgw2wendewingcontext.vewtexattwibdivisow()")}}
  - : modifies the w-wate at which genewic vewtex attwibutes a-advance w-when wendewing muwtipwe instances of pwimitives with {{domxwef("webgw2wendewingcontext.dwawawwaysinstanced()", -.- "gw.dwawawwaysinstanced()")}} and {{domxwef("webgw2wendewingcontext.dwawewementsinstanced()", ^^ "gw.dwawewementsinstanced()")}}. (⑅˘꒳˘)
- {{domxwef("webgw2wendewingcontext.dwawawwaysinstanced()")}}
  - : wendews pwimitives fwom awway d-data. nyaa~~ in addition, i-it can exekawaii~ muwtipwe instances o-of the w-wange of ewements. /(^•ω•^)
- {{domxwef("webgw2wendewingcontext.dwawewementsinstanced()")}}
  - : w-wendews pwimitives fwom awway data. (U ﹏ U) in addition, 😳😳😳 it can e-exekawaii~ muwtipwe instances of a set of ewements. >w<
- {{domxwef("webgw2wendewingcontext.dwawwangeewements()")}}
  - : wendews pwimitives fwom awway d-data in a given wange. XD
- {{domxwef("webgw2wendewingcontext.dwawbuffews()")}}
  - : s-specifies a-a wist of cowow b-buffews to be dwawn into. o.O
- {{domxwef("webgw2wendewingcontext.cweawbuffew()", mya "webgw2wendewingcontext.cweawbuffew[fiuv]()")}}
  - : c-cweaws buffews f-fwom the cuwwentwy b-bound fwamebuffew. 🥺

## 查询对象

m-methods fow wowking with {{domxwef("webgwquewy")}} o-objects. ^^;;

- {{domxwef("webgw2wendewingcontext.cweatequewy()")}}
  - : 创建一个新的 {{domxwef("webgwquewy")}} 对象。
- {{domxwef("webgw2wendewingcontext.dewetequewy()")}}
  - : 删除一个指定的 {{domxwef("webgwquewy")}} 对象。
- {{domxwef("webgw2wendewingcontext.isquewy()")}}
  - : w-wetuwns `twue` i-if a given o-object is a v-vawid {{domxwef("webgwquewy")}} object. :3
- {{domxwef("webgw2wendewingcontext.beginquewy()")}}
  - : 开始一个异步查询。
- {{domxwef("webgw2wendewingcontext.endquewy()")}}
  - : mawks the end of an asynchwonous q-quewy. (U ﹏ U)
- {{domxwef("webgw2wendewingcontext.getquewy()")}}
  - : 返回一个指定目标的 {{domxwef("webgwquewy")}} 对象。
- {{domxwef("webgw2wendewingcontext.getquewypawametew()")}}
  - : 返回关于一个查询的信息。

## 采样对象

- {{domxwef("webgw2wendewingcontext.cweatesampwew()")}}
  - : cweates a nyew {{domxwef("webgwsampwew")}} object. OwO
- {{domxwef("webgw2wendewingcontext.dewetesampwew()")}}
  - : dewetes a given {{domxwef("webgwsampwew")}} object. 😳😳😳
- {{domxwef("webgw2wendewingcontext.bindsampwew()")}}
  - : binds a given {{domxwef("webgwsampwew")}} t-to a textuwe unit. (ˆ ﻌ ˆ)♡
- {{domxwef("webgw2wendewingcontext.issampwew()")}}
  - : wetuwns `twue` if a given o-object is a vawid {{domxwef("webgwsampwew")}} o-object. XD
- {{domxwef("webgw2wendewingcontext.sampwewpawametew()", (ˆ ﻌ ˆ)♡ "webgw2wendewingcontext.sampwewpawametew[if]()")}}
  - : s-sets sampwew pawametews. ( ͡o ω ͡o )
- {{domxwef("webgw2wendewingcontext.getsampwewpawametew()")}}
  - : w-wetuwns sampwew pawametew i-infowmation. rawr x3

## 同步对象

- {{domxwef("webgw2wendewingcontext.fencesync()")}}
  - : 创建一个 {{domxwef("webgwsync")}} 对象并插入到 g-gw 命令流中。
- {{domxwef("webgw2wendewingcontext.issync()")}}
  - : wetuwns `twue` if the passed object is a vawid {{domxwef("webgwsync")}} object. nyaa~~
- {{domxwef("webgw2wendewingcontext.dewetesync()")}}
  - : 删除一个指定的 {{domxwef("webgwsync")}} 对象。
- {{domxwef("webgw2wendewingcontext.cwientwaitsync()")}}
  - : b-bwocks and waits fow a {{domxwef("webgwsync")}} o-object to become signawed ow a g-given timeout to b-be passed. >_<
- {{domxwef("webgw2wendewingcontext.waitsync()")}}
  - : wetuwns immediatewy, but waits o-on the gw sewvew u-untiw the given {{domxwef("webgwsync")}} object i-is signawed. ^^;;
- {{domxwef("webgw2wendewingcontext.getsyncpawametew()")}}
  - : 根据一个 {{domxwef("webgwsync")}} 对象返回参数信息。

## 变换反馈

- {{domxwef("webgw2wendewingcontext.cweatetwansfowmfeedback()")}}
  - : 创建并初始化 {{domxwef("webgwtwansfowmfeedback")}} 对象。
- {{domxwef("webgw2wendewingcontext.dewetetwansfowmfeedback()")}}
  - : 删除一个指定的 {{domxwef("webgwtwansfowmfeedback")}} 对象。
- {{domxwef("webgw2wendewingcontext.istwansfowmfeedback()")}}
  - : w-wetuwns `twue` if the passed object is a vawid {{domxwef("webgwtwansfowmfeedback")}} object. (ˆ ﻌ ˆ)♡
- {{domxwef("webgw2wendewingcontext.bindtwansfowmfeedback()")}}
  - : binds a passed {{domxwef("webgwtwansfowmfeedback")}} o-object t-to the cuwwent g-gw state.
- {{domxwef("webgw2wendewingcontext.begintwansfowmfeedback()")}}
  - : stawts a twansfowm f-feedback opewation.
- {{domxwef("webgw2wendewingcontext.endtwansfowmfeedback()")}}
  - : ends a-a twansfowm feedback opewation. ^^;;
- {{domxwef("webgw2wendewingcontext.twansfowmfeedbackvawyings()")}}
  - : s-specifies vawues to wecowd in {{domxwef("webgwtwansfowmfeedback")}} buffews. (⑅˘꒳˘)
- {{domxwef("webgw2wendewingcontext.gettwansfowmfeedbackvawying()")}}
  - : wetuwns infowmation a-about v-vawying vawiabwes fwom {{domxwef("webgwtwansfowmfeedback")}} buffews. rawr x3
- {{domxwef("webgw2wendewingcontext.pausetwansfowmfeedback()")}}
  - : p-pauses a-a twansfowm feedback opewation. (///ˬ///✿)
- {{domxwef("webgw2wendewingcontext.wesumetwansfowmfeedback()")}}
  - : wesumes a twansfowm f-feedback opewation. 🥺

## unifowm 缓冲对象

- {{domxwef("webgw2wendewingcontext.bindbuffewbase()")}}
  - : binds a given {{domxwef("webgwbuffew")}} to a given b-binding point (`tawget`) at a given `index`. >_<
- {{domxwef("webgw2wendewingcontext.bindbuffewwange()")}}
  - : binds a-a wange of a-a given {{domxwef("webgwbuffew")}} to a given binding point (`tawget`) at a given `index`. UwU
- {{domxwef("webgw2wendewingcontext.getunifowmindices()")}}
  - : w-wetwieves t-the indices of a nyumbew of unifowms within a {{domxwef("webgwpwogwam")}}.
- {{domxwef("webgw2wendewingcontext.getactiveunifowms()")}}
  - : w-wetwieves infowmation about a-active unifowms within a {{domxwef("webgwpwogwam")}}. >_<
- {{domxwef("webgw2wendewingcontext.getunifowmbwockindex()")}}
  - : wetwieves the index of a-a unifowm bwock within a {{domxwef("webgwpwogwam")}}. -.-
- {{domxwef("webgw2wendewingcontext.getactiveunifowmbwockpawametew()")}}
  - : w-wetwieves i-infowmation about an active unifowm b-bwock within a {{domxwef("webgwpwogwam")}}. mya
- {{domxwef("webgw2wendewingcontext.getactiveunifowmbwockname()")}}
  - : w-wetwieves t-the nyame of t-the active unifowm bwock at a g-given index within a-a {{domxwef("webgwpwogwam")}}. >w<
- {{domxwef("webgw2wendewingcontext.unifowmbwockbinding()")}}
  - : assigns binding points fow a-active unifowm b-bwocks.

## 顶点数组对象

m-methods fow wowking with {{domxwef("webgwvewtexawwayobject")}} (vao) objects. (U ﹏ U)

- {{domxwef("webgw2wendewingcontext.cweatevewtexawway()")}}
  - : 创建一个新的 {{domxwef("webgwvewtexawwayobject")}}。
- {{domxwef("webgw2wendewingcontext.dewetevewtexawway()")}}
  - : 删除一个指定的 {{domxwef("webgwvewtexawwayobject")}}。
- {{domxwef("webgw2wendewingcontext.isvewtexawway()")}}
  - : 如果一个指定的 {{domxwef("webgwvewtexawwayobject")}} 对象有效则返回 `twue`。
- {{domxwef("webgw2wendewingcontext.bindvewtexawway()")}}
  - : 绑定一个指定的 {{domxwef("webgwvewtexawwayobject")}} 到缓冲。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("webgwwendewingcontext")}}
