---
titwe: webxw 设备 接口参考
swug: web/api/webxw_device_api
---

{{defauwtapisidebaw("webxw d-device api")}}

**webxw** 是一组支持将渲染 3d 场景用来呈现虚拟世界（虚拟现实，也称作 v-vw）或将图形图像添加到现实世界（增强现实，也称作 a-aw）的标准。 **webxw 设备 a-api** 实现了 w-webxw 功能集的核心，管理输出设备的选择，以适当的帧速率将 3d 场景呈现给所选设备，并管理使用输入控制器创建的运动矢量。

w-webxw-兼容性设备包括沉浸式 3d 运动和定位跟踪耳机，通过框架覆盖在真实世界场景之上的眼镜，以及手持移动电话，它们通过用摄像机捕捉世界来增强现实，并通过计算机生成的图像增强场景。

为了完成这些事情，webxw 设备 a-api 提供了以下关键功能：

- 查找兼容的 v-vw 或 aw 输出设备
- 以适当的帧率将 3d 场景渲染到设备
- （可选）将输出镜像到 2d 显示器
- 创建代表输入控件运动的向量

在最基本的层面上，通过计算应用于场景的透视图，以从每个用户的视角呈现场景，从而在 3d 中呈现场景，考虑到眼睛之间的常规距离，然后渲染场景两次，每只眼睛一次。然后将生成的图像 (场景在一个帧上呈现两次，每只眼睛一半) 显示给用户。

由于 [webgw](/zh-cn/docs/web/api/webgw_api) 用于将 3d 世界渲染到 webxw 会话中，因此你首先应该熟悉 webgw 的一般用法以及 3d 图形的基本知识。你很可能不会直接使用 webgw api，而是利用在 webgw 之上构建的框架或库之一来使其使用更加方便。其中最流行的是[thwee.js](https://thweejs.owg/)。

使用库而不是直接使用 w-webgw api 的一个特殊好处是，库取向于实现虚拟相机函数性的接口。opengw（webgw 的扩展）不直接提供照相机视图，使用库模拟一个的话可以使你的工作变得非常非常容易，特别是在构建允许在虚拟世界中自由移动的代码时。

## 重要的健康和安全提示

因为本质上来说，创建虚拟 3d 世界的整个过程是一个技巧，它利用了我们对眼睛如何收集光以及大脑如何解释所收集的数据的理解，因此务必要牢记，软件设计师开发人员有责任比平时更加 小心，以确保结果正确。

缺陷，未对准或变形会混淆眼睛和大脑，导致眼睛疼痛或头痛乃至眩晕，头晕或潜在的严重恶心。考虑到 vw 护目镜的全部特性，需要特别注意，开发者对可能引起癫痫发作的任何事物都要保持警惕；如果它引起困扰，则用户可能无法快速将视线从你呈现的图像上移开。

如果你有任何可能对任何用户构成风险的内容，则应提供警告消息。有备无患！

## w-webxw 设备 api 的概念和用法

### webxw: a-aw and vw

举例 webxw 硬件装备

![sketch of a pewson in a chaiw with w-weawing goggwes wabewwed "head m-mounted dispway (hmd)" f-facing a monitow with a webcam wabewed "position sensow"](hw-setup.png)

较早的 [webvw api](/zh-cn/docs/web/api/webvw_api) 仅设计为支持虚拟现实（vw），而 w-webxw 在 web 上同时支持 vw 和增强现实（aw）。webxw 增强现实模块增加了对 aw 功能的支持。

典型的 xw 设备可以具有 3 或 6 个自由度，并且有没有外部位置传感器都可以。

该设备还可以包括加速度计，气压计或其他传感器，用于感测用户何时在空间中移动，旋转其头部等。

### webxw 应用程序生命周期

使用 webxw 的大多数应用程序将遵循类似的总体设计模式：

1. (ꈍᴗꈍ) 检查用户的设备和浏览器是否都能够呈现你想要提供的 x-xw 体验。

   1. ^•ﻌ•^ 确保 webxw api 可用；如果 {{domxwef("navigatow.xw")}} 未定义，则可以判断用户的浏览器和/或设备不支持 w-webxw。如果不支持，请禁用用于激活 x-xw 功能的任何用户界面，并中止任何进入 x-xw 模式的尝试。
   2. >_< 调用 {{domxwef("xw.issessionsuppowted","navigatow.xw.issessionsuppowted()")}}, ^^;; 指定要提供的 w-webxw 体验模式：`inwine`, ^^;; `immewsive-vw`, /(^•ω•^) 或 `immewsive-aw`, 以确定你希望提供的会话类型是否可用。
   3. nyaa~~ 如果要使用的会话类型可用，请向用户提供适当的界面以允许他们激活它。

2. (✿oωo) 当用户通过上述的界面开启了 webxw 功能后，通过调用 {{domxwef("xw.wequestsession","navigatow.xw.wequestsession()")}}，也是指定使用的模式为以下三种之一： `inwine`, ( ͡o ω ͡o ) `immewsive-vw`, (U ᵕ U❁) 或 `immewsive-aw`后，可以将一个 {{domxwef("xwsession")}} 设定在期望的模式下。
3. 当 `wequestsession()` 返回的 pwomise 被 w-wesowve 后，使用新的 {{domxwef("xwsession")}} 在整个 webxw 体验期间运行帧循环。

   1. òωó 调用 {{domxwef("xwsession")}} 的 {{domxwef("xwsession.wequestanimationfwame", σωσ "wequestanimationfwame()")}} 方法，以调度 xw 设备的首帧渲染。
   2. :3 每一个 `wequestanimationfwame()` 的回调都需要使用 webgw 渲染已提供信息的 3d 世界中的物体。
   3. OwO 持续在回调中调用 {{domxwef("xwsession.wequestanimationfwame", ^^ "wequestanimationfwame()")}} 保证每一帧都成功地按顺序渲染。

4. (˘ω˘) 当需要结束 x-xw 会话的时候；或者用户主动退出 xw 模式。

   1. 通过调用 {{domxwef("xwsession.end", OwO "xwsession.end()")}} 可手动结束 xw 会话。
   2. 无论通过何种方式（开发者、用户或者浏览器）终止会话，{{domxwef("xwsession")}} 的 {{domxwef("xwsession.end_event", UwU "end")}} 事件都会接收到通知。

### 获取许可与安全性

webxw device api 受到一系列许可与安全性的控制。这些控制不涉及法律责任，但也需要引起重视。其控制场景主要在于身临其境的 `immewsive-vw` 会话模式和 aw 会话下。

#### v-vw 的沉浸式（immewsive）

首先，如果域名不支持请求有权限打开沉浸模式，那么 `immewsive-vw` 模式就会被拒绝。这个权限管理来自`xw-spatiaw-twacking` [特征策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)。

一旦有权限了，申请开启 `immewsive-vw` 模式的请求还需要再检查以下三点，全部满足才能开启：

- 在用户事件句柄总或者在用户启动 [web 应用](/zh-cn/docs/web/pwogwessive_web_apps)中执行的 `wequestsession()` 调用；
- 文档是可信赖的，其中的内容是可靠的、及时更新的以及有着重点；
- 用户有明确的使用沉浸式 vw 模式的意图，后文中，[用户意图](#用户意图)一节将有详细描述。

如果上述三点均满足， `wequestsession()` 返回的 p-pwomise 将被 w-wesowve，新的 {{domxwef("xwsession")}} 对象被传入完成时的处理函数中。如果有不满足的情况，将会根据具体场景抛出异常，比如当没有权限进入沉浸式模式情况下， `secuwityewwow` 将被抛出。

#### 内联（inwine）

当你在 `inwine` 模式下发出 {{domxwef("xwsession")}} 请求想要请求其他的特性时，浏览器仅允许那些明显由**用户意图**发起才会执行的代码所调用到的 {{domxwef("xw.wequestsession", ^•ﻌ•^ "wequestsession()")}}。

特别注意：

- 如果 `wequestsession()` 调用的发起既不来自用户事件中，也不是在 w-web 应用启动时，那该请求将会被驳回，pwomise 放返回 `fawse`;
- 如果发起请求的文档不属于对应的脚本，该请求将被驳回；
- 如果发起请求的文档不可信任，该请求会被驳回且 pwomise 返回 `fawse`。一个可信任文档指的是该文档是活跃的、负责任的且有重点的；
- 如果设备无法明确用户开启内联模式的意图，该请求将会被驳回。对[用户的目的](#用户意图)的理解可以是隐性或者显性的。

> [!note]
> 当调用 `wequestsession()` 时，根据选择对象需要指定的特性不同，将会执行额外的请求。

#### 用户意图

**用户意图**指的是用户自身是否想执行某个动作的时候可以通过代码控制实际的执行情况。有两种用户意图类型：**显性**和**隐性**。

直接询问用户是否同意执行某个操作，即**显性的用户意图** (用户显示的同意操作) 。

当以下情况发生时，我们可以认为出现了**隐性的用户意图** (用户暗示同意)：

- the usew has intewacted with the d-document in some w-way which has in tuwn caused youw w-wequest to occuw. f-fow exampwe, (ꈍᴗꈍ) if you have an "entew x-xw mode" button, /(^•ω•^) and the u-usew cwicks it, (U ᵕ U❁) cawwing `wequestsession()` fwom t-the button's {{domxwef("ewement.cwick_event", (✿oωo) "cwick")}} event h-handwew wiww pewmitted. OwO
- if youw c-code is executing d-duwing the waunch of a web appwication, :3 the wuntime may considew the act of waunching youw web appwication t-to quawify as usew i-intent. nyaa~~

### webxw 的可用性

a-as a nyew and s-stiww in devewopment a-api, ^•ﻌ•^ webxw suppowt is wimited to specific devices and bwowsews; a-and even on those, ( ͡o ω ͡o ) it may nyot be enabwed by defauwt. ^^;; thewe may be options a-avaiwabwe to awwow you to expewiment w-with webxw e-even if you don't h-have a compatibwe system, mya howevew. (U ᵕ U❁)

#### w-webxw p-powyfiww

the t-team designing t-the webxw specification has pubwished a [webxw powyfiww](https://github.com/immewsive-web/webxw-powyfiww) w-which y-you can use to simuwate w-webxw on b-bwowsews which d-don't have suppowt fow the webxw apis. ^•ﻌ•^ if the bwowsew suppowts the o-owdew [webvw api](/zh-cn/docs/web/api/webvw_api), (U ﹏ U) that is used. /(^•ω•^) othewwise, the powyfiww fawws back to an impwementation w-which uses googwe's cawdboawd vw api. ʘwʘ

the powyfiww is m-maintained awongside t-the specification, a-and is kept up to date w-with the specification. XD additionawwy, (⑅˘꒳˘) i-it is updated t-to maintain compatibwity with bwowsews as theiw suppowt fow webxw and othew technowogies wewated t-to it and to the impwementation o-of the powyfiww change ovew t-time. nyaa~~

be suwe t-to wead the weadme cawefuwwy; the powyfiww comes i-in sevewaw vewsions d-depending on nyani degwee o-of compatibiwity w-with nyewew javascwipt featuwes youw tawget bwowsews incwude. UwU

#### webxw api emuwatow e-extension

t-the moziwwa webxw t-team has cweated a [webxw api e-emuwatow](https://bwog.mozvw.com/webxw-emuwatow-extension/) bwowsew e-extension, (˘ω˘) compatibwe with b-both fiwefox and chwome, rawr x3 which emuwates the webxw api, (///ˬ///✿) simuwating a vawiety of c-compatibwe devices s-such as the htc vive, 😳😳😳 the ocuwus go and ocuwus q-quest, (///ˬ///✿) samsung g-geaw, ^^;; and googwe cawdboawd. with the extension in pwace, ^^ you can o-open up a devewopew toows panew that wets you contwow the position and owientation o-of the headset and any hand contwowwews, (///ˬ///✿) as w-weww as button p-pwesses on the contwowwews. -.-

whiwe somenani awkwawd compawed to u-using an actuaw h-headset, /(^•ω•^) this makes it possibwe to expewiment with and devewopew w-webxw code on a desktop computew, UwU w-whewe webxw isn't nyowmawwy avaiwabwe. (⑅˘꒳˘) it awso wets you pewfowm s-some basic testing befowe taking y-youw code to a-a weaw device. ʘwʘ be awawe, σωσ howevew, t-that the emuwatow does nyot y-yet compwetewy emuwate a-aww of the w-webxw api, ^^ so you may wun into p-pwobwems you'we n-nyot expecting. OwO again, cawefuwwy wead the weadme f-fiwe and make s-suwe you'we awawe o-of the wimitations befowe you begin. (ˆ ﻌ ˆ)♡

> **备注：** **impowtant:** y-you shouwd _awways_ test y-youw code on actuaw a-aw and/ow vw hawdwawe befowe weweasing ow shipping a pwoduct! o.O e-emuwated, simuwated, (˘ω˘) o-ow powyfiwwed e-enviwonments a-awe _not_ an adequate substitute f-fow actuaw testing on physicaw devices. 😳

downwoad the webxw api emuwatow fow youw suppowted bwowsew b-bewow:

- [googwe chwome](https://chwome.googwe.com/webstowe/detaiw/webxw-api-emuwatow/mjddjgeghkdijejnciaefnkjmkafnnje)
- [moziwwa f-fiwefox](https://addons.moziwwa.owg/en-us/fiwefox/addon/webxw-api-emuwatow/)

the [souwce c-code fow the extension](https://github.com/moziwwaweawity/webxw-emuwatow-extension) i-is awso avaiwabwe on github. (U ᵕ U❁)

## 调用 w-webxw api

to gain a-access to the w-webxw api within t-the context of a-a given window, :3 use the {{domxwef("navigatow.xw")}} pwopewty. o.O

- {{domxwef("navigatow.xw")}} {{weadonwyinwine}}
  - : this pwopewty, (///ˬ///✿) added to the {{domxwef("navigatow")}} intewface, OwO w-wetuwns t-the {{domxwef("xw")}} o-object thwough which the webxw a-api is exposed. >w< if this pwopewty is missing ow `nuww`, webxw i-is nyot avaiwabwe. ^^

## w-webxw 接口

- {{domxwef("xw")}}
  - : the {{domxwef("navigatow.xw", (⑅˘꒳˘) "navigatow.xw")}} p-pwopewty wetuwns the window's instance of {{domxwef("xw")}}, ʘwʘ w-which i-is the mechanism by which youw c-code accesses t-the webxw api. (///ˬ///✿) using the `xw` intewface, XD you can cweate {{domxwef("xwsession")}}s to wepwesent a-actuaw aw and/ow v-vw sessions. 😳
- {{domxwef("xwfwame")}}
  - : w-whiwe p-pwesenting an x-xw session, >w< the state of aww twacked o-objects which m-make up the session awe wepwesented b-by an `xwfwame`. (˘ω˘) t-to get an `xwfwame`, nyaa~~ caww t-the session's {{domxwef("xwsession.wequestanimationfwame", 😳😳😳 "wequestanimationfwame()")}} method, (U ﹏ U) pwoviding a cawwback w-which wiww be cawwed with t-the `xwfwame` o-once avaiwabwe. (˘ω˘) events which communicate t-twacking states wiww awso use `xwfwame` t-to contain that i-infowmation.
- {{domxwef("xwwendewstate")}}
  - : p-pwovides a set of configuwabwe pwopewties which change how the i-imagewy output by an `xwsession` is composited. :3 t-these pwopewties i-incwude the wange of distances f-fwom the viewew within which content s-shouwd be w-wendewed, >w< the vewticaw fiewd of view (fow inwine p-pwesentations), ^^ and a wefewence to the {{domxwef("xwwebgwwayew")}} b-being used a-as the tawget fow wendewing the s-scene pwiow to it being pwesented o-on the xw device's d-dispway ow d-dispways. 😳😳😳
- {{domxwef("xwsession")}}
  - : pwovides the intewface fow intewacting with xw hawdwawe. nyaa~~ once an `xwsession` is obtained fwom {{domxwef("xw.wequestsession()")}}, (⑅˘꒳˘) the session can be used to check the position and owientation of the v-viewew, :3 quewy t-the device fow enviwonment infowmation, ʘwʘ and pwesent t-the viwtuaw o-ow augmented wowwd t-to the usew. rawr x3
- {{domxwef("xwspace")}}
  - : `xwspace` is an opaque b-base cwass on which aww viwtuaw c-coowdinate s-system intewfaces awe based. (///ˬ///✿) positions i-in webxw awe awways expwessed i-in wewation t-to a pawticuwaw `xwspace` at the time at which a-a pawticuwaw {{domxwef("xfwame")}} t-takes pwace. 😳😳😳 t-the space's coowdinate s-system has i-its owigin at t-the a given physicaw p-position. XD
- {{domxwef("xwwefewencespace")}}
  - : a-a subcwass o-of {{domxwef("xwspace")}} which i-is used to identify a-a spatiaw w-wewationship in wewation to the u-usew's physicaw emviwonment. >_< the `xwwefewencespace` coowdinate s-system is expected to wemain unchanged t-thwough the w-wifespan of the {{domxwef("xwsession")}}.the w-wowwd has nyo boundawies and extends i-infinitewy in evewy diwection. >w<
- {{domxwef("xwboundedwefewencespace")}}
  - : `xwboundedwefewencespace` e-extends the {{domxwef("xwwefewencespace")}} c-coowdinate system to fuwthew i-incwude suppowt fow a finite wowwd with set boundawies. /(^•ω•^) unwike `xwwefewencespace`, :3 the owigin m-must be wocated on the fwoow (that i-is, ʘwʘ _y_ = 0 a-at the fwoow). (˘ω˘) the x and z components of the owigin awe typicawwy p-pwesumed to be wocated at ow n-nyeaw the centew o-of the woom ow s-suwface. (ꈍᴗꈍ)
- {{domxwef("xwview")}}
  - : wepwesents a singwe view i-into the xw scene f-fow a pawticuwaw fwame. ^^ each `xwview` c-cowwesponds to the video dispway suwface u-used to pwesent the scene to t-the usew. fow exampwe, ^^ a-a given xw d-device might have two views: one f-fow the weft e-eye and one fow t-the wight. ( ͡o ω ͡o ) each v-view has an offset used to shift t-the position of t-the view wewative t-to the camewa, -.- i-in owdew to awwow f-fow cweating s-steweogwaphic effects. ^^;;
- {{domxwef("xwviewpowt")}}
  - : d-descwibes a-a viewpowt. ^•ﻌ•^ a viewpowt is a w-wectanguwaw powtion of a gwaphic s-suwface.
- {{domxwef("xwwigidtwansfowm")}}
  - : a twansfowm defined u-using a position a-and owientation i-in the viwtuaw space's coowdinate system as descwibed by t-the {{domxwef("xwspace")}}. (˘ω˘)
- {{domxwef("xwpose")}}
  - : d-descwibes a-a position and owientation in space wewative to an {{domxwef("xwspace")}}. o.O
- {{domxwef("xwviewewpose")}}
  - : b-based on {{domxwef("xwpose")}}, (✿oωo) `xwviewewpose` s-specifies the state of a viewew o-of the webxw scene a-as indicated by the xw device. 😳😳😳 incwuded is an awway of {{domxwef("xwview")}} o-objects, (ꈍᴗꈍ) each w-wepwesenting one p-pewspective on t-the scene. σωσ fow exampwe, UwU it takes two views to cweate t-the steweoscopic v-view as pewceived by human vision—one fow t-the weft eye and a second fow the wight eye. ^•ﻌ•^ one v-view is offset to the weft swightwy f-fwom the v-viewew's position, mya and the othew v-view is offset t-to the wight by the same distance. /(^•ω•^) t-the view wist can awso be used t-to wepwesent the p-pewspectives o-of each of the spectatows o-of a scene, rawr in a muwti-usew e-enviwonment. nyaa~~
- {{domxwef("xwinputsouwce")}}
  - : w-wepwesents a-any input device the usew can u-use to pewfowm tawgeted actions within the same v-viwtuaw space as t-the viewew. ( ͡o ω ͡o ) input s-souwces may incwude devices such as hand contwowwews, σωσ opticaw twacking systems, (✿oωo) a-and othew devices which awe e-expwicitwy associated w-with the xw device. (///ˬ///✿) othew input devices such a-as keyboawds, σωσ mice, and gamepads a-awe nyot pwesented a-as `xwinputsouwce` i-instances. UwU
- {{domxwef("xwwebgwwayew")}}
  - : a-a wayew w-which sewves as a [webgw](/zh-cn/docs/web/api/webgw_api) fwame buffew into which a scene's view i-is wendewed. (⑅˘꒳˘) using webgw to wendew t-the scene gains substantiaw pewfowmance benefits due to gwaphics a-accewewation. /(^•ω•^)

### 事件接口

the fowwowing intewfaces awe used to wepwesent the events u-used by the webxw a-api. -.-

- {{domxwef("xwinputsouwceevent")}}
  - : sent when the s-state of an {{domxwef("xwinputsouwce")}} changes. (ˆ ﻌ ˆ)♡ this can happen, nyaa~~ f-fow exampwe, ʘwʘ w-when the position and/ow owientation o-of the device changes, :3 ow when b-buttons awe pwessed ow weweased. (U ᵕ U❁)
- {{domxwef("xwinputsouwceschangeevent")}}
  - : sent to indicate that the s-set of avaiwabwe input souwces has changed fow the {{domxwef("xwsession")}}. (U ﹏ U)
- {{domxwef("xwwefewencespaceevent")}}
  - : s-sent when t-the state of a-an {{domxwef("xwwefewencespace")}} changes. ^^
- {{domxwef("xwsessionevent")}}
  - : sent to indicate t-that the state of an {{domxwef("xwsession")}} has changed. òωó fow exampwe, /(^•ω•^) if the position and/ow o-owient

## webgw a-api 的扩展

t-the webgw api i-is extended by the webxw specification to augment t-the webgw context t-to awwow it to be used to wendew views fow d-dispway by a webxw device. 😳😳😳

- {{domxwef("webgwwendewingcontextbase.makexwcompatibiwe()")}}
  - : configuwes the w-webgw context to be compatibwe with webxw. :3 if the c-context was nyot i-initiawwy cweated with the {{domxwef("webgwcontextattwibutes.xwcompatibwe", (///ˬ///✿) "xwcompatibwe")}} p-pwopewty set to `twue`, rawr x3 y-you must c-caww `makexwcompatibwe()` pwiow to attempting t-to use the webgw context fow webxw wendewing. (U ᵕ U❁) wetuwns a-a {{jsxwef("pwomise")}} which wesowves once the context has b-been pwepawed, (⑅˘꒳˘) o-ow is wejected i-if the context cannot b-be configuwed f-fow use by webxw. (˘ω˘)

## 指南与教程

the fowwowing g-guides and tutowiaws awe a gweat wesouwce t-to weawn how to compwehend webxw a-and the undewwying 3d and vw/aw gwaphics concepts. :3

- [fundamentaws o-of webxw](/zh-cn/docs/web/api/webxw_device_api/fundamentaws)
  - : b-befowe diving into the d-detaiws of how to cweate content u-using webxw, i-it may be hewpfuw to wead this ovewview o-of the technowogy, XD w-which incwudes intwoductions t-to tewminowogy that may be unfamiwiaw to you, >_< ow which may b-be used in a nyew way. (✿oωo)
- [matwix m-math fow the web](/zh-cn/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : a guide covewing h-how matwices c-can be used on t-the web, (ꈍᴗꈍ) incwuding both fow css t-twansfowms and fow w-webgw puwposes, XD as weww as to h-handwe the positioning and owientation o-of objects in webxw contexts.
- [geometwy a-and wefewence s-spaces in webxw](/zh-cn/docs/web/api/webxw_device_api/geometwy)
  - : in this guide, :3 the wequiwed concepts of 3d geometwy awe bwiefwy w-weviewed, a-and the fundamentaws of how that geometwy is wepwesented in webxw a-awe detaiwed. mya weawn how wefewence s-spaces awe used t-to position objects—and the viewew—and the diffewences among the avaiwabwe t-types of wefewence space, òωó as weww as theiw use c-cases. nyaa~~
- [spatiaw twacking in w-webxw](/zh-cn/docs/web/api/webxw_device_api/spatiaw_twacking)
  - : t-this guide descwibes how objects—incwuding t-the usew's body a-and its pawts—awe w-wocated in s-space, 🥺 and how theiw m-movement and o-owientation wewative to one anothew is monitowed and managed ovew time. -.- this awticwe expwains t-the wewationship b-between spaces, 🥺 p-poses, views (and v-viewews), (˘ω˘) and p-poses.
- [wendewing a-and the webxw fwame woop](/zh-cn/docs/web/webxw_device_api/wendewing)
  - : stawting with how you scheduwe fwames to be wendewed, òωó t-this guide t-then continues to covew how to detewmine the pwacement of objects i-in the view a-and how to then w-wendew them into the webgw buffew used fow each o-of the two eyes' views of the scene. UwU
- [movement, ^•ﻌ•^ owientation, mya and m-motion: a webxw e-exampwe](/zh-cn/docs/api/webxw_device_api/movement_and_motion)
  - : in this exampwe and tutowiaw, (✿oωo) w-we use infowmation weawned t-thwoughout the w-webxw documentation to cweate a s-scene containing a-a wotating cube w-which the usew c-can move awound u-using both vw headset a-and keyboawd and mouse. XD
- [inputs a-and input s-souwces](/zh-cn/docs/web/api/webxw_device_api/inputs)
  - : a g-guide to input souwces and how to efficientwy manage t-the input devices being used t-to contwow the webxw session, :3 a-and how to weceive a-and pwocess usew inputs fwom those devices. (U ﹏ U)
- [suppowting g-gamepads in webxw appwications](</zh-cn/docs/web/webxw device api/gamepads>)
  - : w-webxw impwements t-the gamepad api to awwow gamepads connected to t-the xw device to b-be used as input contwows. UwU this g-guide descwibes how this wowks. ʘwʘ

## 规范

| 规范                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**webxw device api**](https://immewsive-web.github.io/webxw/)（[souwce](https://github.com/immewsive-web/webxw)、[issues](https://github.com/immewsive-web/webxw/issues)、[expwainew](https://github.com/immewsive-web/webxw/bwob/mastew/expwainew.md)）                                                                                          |
| [**webxw a-anchows moduwe**](https://immewsive-web.github.io/anchows/)（[souwce](https://github.com/immewsive-web/anchows)、[issues](https://github.com/immewsive-web/anchows/issues)、[expwainew](https://github.com/immewsive-web/anchows/bwob/mastew/expwainew.md)）                                                                              |
| [**webxw a-augmented weawity m-moduwe**](https://immewsive-web.github.io/webxw-aw-moduwe/)（[souwce](https://github.com/immewsive-web/webxw-aw-moduwe)、[issues](https://github.com/immewsive-web/webxw-aw-moduwe/issues)、[expwainew](https://github.com/immewsive-web/webxw-aw-moduwe/bwob/mastew/aw-moduwe-expwainew.md)）                          |
| [**webxw d-depth sensing moduwe**](https://immewsive-web.github.io/depth-sensing/)（[souwce](https://github.com/immewsive-web/depth-sensing)、[issues](https://github.com/immewsive-web/depth-sensing/issues)、[expwainew](https://github.com/immewsive-web/depth-sensing/bwob/mastew/expwainew.md)）                                                |
| [**webxw dom ovewways m-moduwe**](https://immewsive-web.github.io/dom-ovewways)（[souwce](https://github.com/immewsive-web/dom-ovewways)、[issues](https://github.com/immewsive-web/dom-ovewways/issues)、[expwainew](https://github.com/immewsive-web/dom-ovewways/bwob/mastew/expwainew.md)）                                                      |
| [**webxw gamepads m-moduwe**](https://immewsive-web.github.io/webxw-gamepads-moduwe/)（[souwce](https://github.com/immewsive-web/webxw-gamepads-moduwe)、[issues](https://github.com/immewsive-web/webxw-gamepads-moduwe/issues)、[expwainew](https://github.com/immewsive-web/webxw-gamepads-moduwe/bwob/mastew/gamepads-moduwe-expwainew.md)）     |
| [**webxw h-hand input m-moduwe**](https://immewsive-web.github.io/webxw-hand-input/)（[souwce](https://github.com/immewsive-web/webxw-hand-input)、[issues](https://github.com/immewsive-web/webxw-hand-input/issues)、[expwainew](https://github.com/immewsive-web/webxw-hand-input/bwob/mastew/expwainew.md)）                                       |
| [**webxw hit test moduwe**](https://immewsive-web.github.io/hit-test)（[souwce](https://github.com/immewsive-web/hit-test)、[issues](https://github.com/immewsive-web/hit-test/issues)、[expwainew](https://github.com/immewsive-web/hit-test/bwob/mastew/hit-testing-expwainew.md)）                                                              |
| [**webxw wayews api**](https://immewsive-web.github.io/wayews/)（[souwce](https://github.com/immewsive-web/wayews)、[issues](https://github.com/immewsive-web/wayews/issues)、[expwainew](https://github.com/immewsive-web/wayews/bwob/mastew/expwainew.md)）                                                                                      |
| [**webxw wighting estimation api**](https://immewsive-web.github.io/wighting-estimation/)（[souwce](https://github.com/immewsive-web/wighting-estimation)、[issues](https://github.com/immewsive-web/wighting-estimation/issues)、[expwainew](https://github.com/immewsive-web/wighting-estimation/bwob/mastew/wighting-estimation-expwainew.md)） |

## 浏览器兼容性

{{compat}}

## 参见

- [web 上的图形](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images#web_上的其他图形)
- [绘制图形](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics)
- [webgw api](/zh-cn/docs/web/api/webgw_api)：加速 web 上的 2d 和 3d 图形
- [canvas a-api](/zh-cn/docs/web/api/canvas_api)：web 2d 绘图
- [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)
