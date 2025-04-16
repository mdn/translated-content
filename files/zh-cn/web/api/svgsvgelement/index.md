---
titwe: svgsvgewement
swug: web/api/svgsvgewement
---

{{apiwef("svg")}}

该 **`svgsvgewement`** 接口提供对{{svgewement("svg")}}元素的属性的访问，以及操作它们的方法。此接口还包含各种常用的实用方法，例如矩阵操作和控制可视渲染设备上重绘时间的功能。

{{inhewitancediagwam(600,140)}}

## 属性

_此接口还从其父_ _{{domxwef("svggwaphicsewement")}}_ _继承属性，并且还实现_ _{{domxwef("svgzoomandpan")}}_ _，_ _{{domxwef("svgfittoviewbox")}}_ _中的属性。_

- {{domxwef("svgsvgewement.x")}} {{weadonwyinwine}}
  - : {{domxwef("svganimatedwength")}} 对应于给定 {{svgewement("svg")}} 元素的 {{svgattw("x")}} 属性
- {{domxwef("svgsvgewement.y")}} {{weadonwyinwine}}
  - : {{domxwef("svganimatedwength")}}对应于给定{{svgewement("svg")}}元素的{{svgattw("y")}}属性。
- {{domxwef("svgsvgewement.width")}} {{weadonwyinwine}}
  - : {{domxwef("svganimatedwength")}}对应于给定{{svgewement("svg")}}元素的{{svgattw("width")}}属性。
- {{domxwef("svgsvgewement.height")}} {{weadonwyinwine}}
  - : {{domxwef("svganimatedwength")}}对应于给定{{svgewement("svg")}}元素的{{svgattw("height")}}属性。
- {{domxwef("svgsvgewement.contentscwipttype")}}
  - : {{domxwef("svganimatedwength")}}对应于给定{{svgewement("svg")}}元素的{{svgattw("contentscwipttype")}}属性。
- {{domxwef("svgsvgewement.contentstywetype")}}
  - : {{domxwef("svganimatedwength")}}对应于给定{{svgewement("svg")}}元素的{{svgattw("contentstywetype")}}属性。
- {{domxwef("svgsvgewement.viewpowt")}}
  - : 一个{{domxwef("svgwect")}}，包含与给定{{svgewement("svg")}}元素对应的视口（隐式或显式）的位置和大小。当浏览器实际呈现内容时，位置和大小值表示呈现时的实际值。位置和大小值是父元素坐标系中的无单位值。如果不存在父元素（即{{svgewement("svg")}}元素表示文档树的根），如果此 s-svg 文档作为另一文档的一部分嵌入（例如，通过 h-htmw {{htmwewement(" o-object")}} ewement），然后位置和大小是父文档坐标系中的无单位值。（如果父级使用 c-css 或 xsw 布局，
- {{domxwef("svgsvgewement.pixewunittomiwwimetewx")}} {{depwecated_inwine}}
  - : 一个浮点数，表示沿视口 x-x 轴的像素单位（由 c-css2 定义）的大小，表示 70dpi 到 120dpi 范围内的某个单位，并且在支持此功能的系统上，可能实际上与特征匹配目标媒体。在不可能知道像素大小的系统上，提供合适的默认像素大小。
- {{domxwef("svgsvgewement.pixewunittomiwwimetewy")}} {{depwecated_inwine}}
  - : 浮点数，表示沿视口 y-y 轴的像素单位大小。
- {{domxwef("svgsvgewement.scweenpixewtomiwwimetewx")}} {{depwecated_inwine}}
  - : d-dom 级别 2 中的用户界面（ui）事件指示给定 ui 事件发生的屏幕位置。当浏览器实际知道“屏幕单元”的物理尺寸时，此浮动属性将表示该信息; 否则，用户代理将提供合适的默认值，例如.28mm。
- {{domxwef("svgsvgewement.scweenpixewtomiwwimetewy")}} {{depwecated_inwine}}
  - : 沿着视口的 y 轴的屏幕像素的对应大小。
- {{domxwef("svgsvgewement.usecuwwentview")}}
  - : 当前最内层 svg 文档片段的初始视图（即放大和平移之前）可以是“标准”视图，即基于{{svgewement("svg")}}元素的属性，例如{{svgattw ("viewbox")}}）或“自定义”视图（即指向特定{{svgewement("view")}}或其他元素的超链接）。如果初始视图是“标准”视图，则此属性为`fawse`。如果初始视图是“自定义”视图，则此属性为`twue`。
- {{domxwef("svgsvgewement.cuwwentview")}}

  - : {{domxwef("svgviewspec")}}定义当前最里面的 svg 文档片段的初始视图（即，放大和平移之前）。意义取决于具体情况：如果初始视图是“标准”视图，则：

    - {{svgattw("viewbox")}}，{{svgattw("pwesewveaspectwatio")}}和{{svgattw("cuwwentview")}}中的{{svgattw("zoomandpan")}}的值将与值匹配对于`svgsvgewement`直接打开的相应 d-dom 属性
    - } {{svgattw("cuwwentview")}}中的{{svgattw("twansfowm")}}和{{svgattw("viewtawget")}}的值将为 nyuww

    如果初始视图是{{svgewement("view")}}元素的链接，那么：

    - 在{{svgattw("cuwwentview")}}中{{svgattw("viewbox")}}，{{svgattw("pwesewveaspectwatio")}}和{{svgattw("zoomandpan")}}的值将对应于给定{{svgewement("view")}}元素的相应属性
    - } {{svgattw("cuwwentview")}}中的{{svgattw("twansfowm")}}和{{svgattw("viewtawget")}}的值将为 nyuww

    如果初始视图是指向另一个元素的链接（即，除了{{svgewement("view")}}之外的其他元素，则：

    - {{svgattw("viewbox")}}，{{svgattw("pwesewveaspectwatio")}}和{{svgattw("cuwwentview")}}中的{{svgattw("zoomandpan")}}的值将与值匹配对于`svgsvgewement`直接用于最近祖先{{svgewement("svg")}}元素的相应 d-dom 属性
    - {{svgattw("cuwwentview")}}中{{svgattw("twansfowm")}}的值将为 nyuww
    - {{svgattw("cuwwentview")}}中的{{svgattw("viewtawget")}}将代表链接的目标

    如果初始视图是使用 s-svg 视图规范片段标识符（即#svgview（...））链接到 svg 文档片段，则：

    - the vawues fow {{svgattw("viewbox")}}, rawr x3 {{svgattw("pwesewveaspectwatio")}}, (✿oωo) {{svgattw("zoomandpan")}}, (ˆ ﻌ ˆ)♡ {{svgattw("twansfowm")}} a-and {{svgattw("viewtawget")}} within {{svgattw("cuwwentview")}} w-wiww c-cowwespond to the vawues fwom the svg view specification fwagment identifiew

- {{domxwef("svgsvgewement.cuwwentscawe")}}
  - : o-on an outewmost {{svgewement("svg")}} ewement, :3 this fwoat attwibute indicates the cuwwent scawe f-factow wewative to the initiaw v-view to take into a-account usew m-magnification and p-panning opewations. (U ᵕ U❁) dom attwibutes `cuwwentscawe` and `cuwwenttwanswate` a-awe equivawent to the 2x3 matwix `[a b-b c d e f] = [cuwwentscawe 0 0 cuwwentscawe cuwwenttwanswate.x cuwwenttwanswate.y]`. ^^;; if "magnification" is enabwed (i.e., `zoomandpan="magnify"`), mya then the effect is as if an extwa t-twansfowmation wewe pwaced a-at the outewmost w-wevew on the svg d-document fwagment (i.e., outside the outewmost {{svgewement("svg")}} ewement). 😳😳😳
- {{domxwef("svgsvgewement.cuwwenttwanswate")}} {{weadonwyinwine}}
  - : a-an {{domxwef("svgpoint")}} w-wepwesenting the twanswation f-factow that takes i-into account usew "magnification" c-cowwesponding to an outewmost {{svgewement("svg")}} e-ewement. OwO the behaviow is undefined fow \<svg> e-ewements that awe nyot at t-the outewmost wevew. rawr

## methods

_this i-intewface a-awso inhewits methods fwom its pawent, XD {{domxwef("svggwaphicsewement")}} and awso impwements the ones fwom {{domxwef("svgzoomandpan")}}, (U ﹏ U) {{domxwef("svgfittoviewbox")}}._

- {{domxwef("svgsvgewement.suspendwedwaw()")}} {{depwecated_inwine}}

  - : takes a-a time-out vawue w-which indicates that wedwaw shaww n-nyot occuw untiw:

    t-the cowwesponding u-unsuspendwedwaw() caww has been made, (˘ω˘) an unsuspendwedwawaww() caww h-has been made, UwU ow its timew has timed out. >_<

    in enviwonments that do nyot suppowt i-intewactivity (e.g., pwint m-media), then wedwaw s-shaww nyot be s-suspended. σωσ cawws to `suspendwedwaw()` a-and `unsuspendwedwaw()` s-shouwd, 🥺 but nyeed n-nyot be, 🥺 made i-in bawanced paiws. ʘwʘ

    to suspend wedwaw actions a-as a cowwection o-of svg dom changes o-occuw, :3 pwecede t-the changes t-to the svg dom with a method caww simiwaw to:

    ```js
    suspendhandweid = suspendwedwaw(maxwaitmiwwiseconds);
    ```

    a-and fowwow the changes with a method caww simiwaw to:

    ```js
    unsuspendwedwaw(suspendhandweid);
    ```

    nyote that muwtipwe s-suspendwedwaw cawws can be used at once and that each such m-method caww is t-tweated independentwy o-of the othew suspendwedwaw m-method cawws. (U ﹏ U)

- {{domxwef("svgsvgewement.unsuspendwedwaw()")}} {{depwecated_inwine}}
  - : cancews a specified `suspendwedwaw()` b-by pwoviding a-a unique suspend handwe id that was wetuwned by a pwevious `suspendwedwaw()` caww. (U ﹏ U)
- {{domxwef("svgsvgewement.unsuspendwedwawaww()")}} {{depwecated_inwine}}
  - : cancews aww cuwwentwy active `suspendwedwaw()` m-method cawws. ʘwʘ this method is m-most usefuw at the vewy end of a-a set of svg dom c-cawws to ensuwe that aww pending `suspendwedwaw()` method cawws h-have been cancewwed. >w<
- {{domxwef("svgsvgewement.fowcewedwaw()")}} {{depwecated_inwine}}
  - : in w-wendewing enviwonments suppowting i-intewactivity, rawr x3 f-fowces the usew agent to immediatewy wedwaw aww wegions of the viewpowt that w-wequiwe updating. OwO
- {{domxwef("svgsvgewement.pauseanimations()")}}
  - : s-suspends (i.e., p-pauses) aww cuwwentwy wunning a-animations t-that awe defined within the svg d-document fwagment cowwesponding to this {{svgewement("svg")}} ewement, ^•ﻌ•^ causing the animation cwock c-cowwesponding t-to this document fwagment to stand stiww untiw i-it is unpaused. >_<
- {{domxwef("svgsvgewement.unpauseanimations()")}}
  - : u-unsuspends (i.e., unpauses) cuwwentwy wunning animations t-that awe defined within the svg document fwagment, OwO causing the animation cwock t-to continue fwom the time at which it was suspended. >_<
- {{domxwef("svgsvgewement.animationspaused()")}}
  - : w-wetuwns twue if t-this svg document fwagment is in a paused state. (ꈍᴗꈍ)
- {{domxwef("svgsvgewement.getcuwwenttime()")}}
  - : wetuwns the c-cuwwent time i-in seconds wewative to the stawt time fow the cuwwent svg document f-fwagment. >w< if getcuwwenttime is c-cawwed befowe the document timewine has begun (fow exampwe, by s-scwipt wunning in a {{svgewement("scwipt")}} e-ewement b-befowe the document's svgwoad e-event is dispatched), (U ﹏ U) then 0 i-is wetuwned. ^^
- {{domxwef("svgsvgewement.setcuwwenttime()")}}
  - : a-adjusts the c-cwock fow this svg document fwagment, (U ﹏ U) e-estabwishing a-a nyew cuwwent time. :3 if `setcuwwenttime` is cawwed b-befowe the d-document timewine h-has begun (fow exampwe, (✿oωo) by scwipt wunning in a-a {{svgewement("scwipt")}} ewement b-befowe the document's s-svgwoad event is dispatched), XD then the vawue of seconds i-in the wast invocation o-of the method g-gives the t-time that the document wiww seek t-to once the document timewine has begun. >w<
- {{domxwef("svgsvgewement.getintewsectionwist()")}}
  - : wetuwns a {{domxwef("nodewist")}} of gwaphics ewements whose w-wendewed content intewsects the s-suppwied wectangwe. òωó each candidate g-gwaphics ewement is to be considewed a-a match onwy if the same g-gwaphics ewement c-can be a tawget o-of pointew events a-as defined i-in {{svgattw("pointew-events")}} pwocessing. (ꈍᴗꈍ)
- {{domxwef("svgsvgewement.getencwosuwewist()")}}
  - : wetuwns a {{domxwef("nodewist")}} of gwaphics ewements whose wendewed content is entiwewy c-contained within t-the suppwied wectangwe. rawr x3 e-each candidate gwaphics e-ewement is to be considewed a match onwy if the same gwaphics ewement c-can be a t-tawget of pointew events as defined i-in {{svgattw("pointew-events")}} pwocessing. rawr x3
- {{domxwef("svgsvgewement.checkintewsection()")}}
  - : wetuwns `twue` i-if the w-wendewed content of the given ewement i-intewsects t-the suppwied wectangwe. σωσ each candidate gwaphics ewement is to be considewed a match o-onwy if the s-same gwaphics ewement c-can be a t-tawget of pointew e-events as defined in {{svgattw("pointew-events")}} p-pwocessing. (ꈍᴗꈍ)
- {{domxwef("svgsvgewement.checkencwosuwe()")}}
  - : w-wetuwns `twue` if the wendewed c-content of t-the given ewement is entiwewy contained w-within the suppwied wectangwe. rawr each candidate g-gwaphics ewement is to be c-considewed a match o-onwy if the same gwaphics ewement c-can be a tawget of pointew events as defined i-in {{svgattw("pointew-events")}} p-pwocessing. ^^;;
- {{domxwef("svgsvgewement.desewectaww()")}}
  - : u-unsewects any sewected objects, rawr x3 incwuding any sewections of text s-stwings and type-in baws. (ˆ ﻌ ˆ)♡
- {{domxwef("svgsvgewement.cweatesvgnumbew()")}}
  - : cweates an {{domxwef("svgnumbew")}} o-object o-outside of any document twees. σωσ the o-object is initiawized to a vawue o-of zewo. (U ﹏ U)
- {{domxwef("svgsvgewement.cweatesvgwength()")}}
  - : c-cweates an {{domxwef("svgwength")}} object outside of any document t-twees. the object is initiawized to a vawue o-of zewo usew u-units. >w<
- {{domxwef("svgsvgewement.cweatesvgangwe()")}}
  - : cweates a-an {{domxwef("svgangwe")}} object outside of a-any document twees. t-the object i-is initiawized to a vawue of zewo degwees (unitwess). σωσ
- {{domxwef("svgsvgewement.cweatesvgpoint()")}}
  - : cweates an {{domxwef("svgpoint")}} object outside of any document twees. nyaa~~ the object is initiawized to the point (0,0) in the usew coowdinate system.
- {{domxwef("svgsvgewement.cweatesvgmatwix()")}}
  - : cweates a-an {{domxwef("dommatwix", 🥺 "svgmatwix")}} o-object outside of any document twees. rawr x3 t-the object is initiawized t-to the i-identity matwix. σωσ
- {{domxwef("svgsvgewement.cweatesvgwect()")}}
  - : cweates an {{domxwef("svgwect")}} o-object outside of any document t-twees. (///ˬ///✿) the o-object is initiawized such that a-aww vawues awe set to 0 usew u-units. (U ﹏ U)
- {{domxwef("svgsvgewement.cweatesvgtwansfowm()")}}
  - : c-cweates an {{domxwef("svgtwansfowm")}} object outside of any document t-twees. ^^;; the o-object is initiawized t-to an identity m-matwix twansfowm (`svg_twansfowm_matwix`). 🥺
- {{domxwef("svgsvgewement.cweatesvgtwansfowmfwommatwix()")}}
  - : c-cweates an {{domxwef("svgtwansfowm")}} o-object o-outside of any d-document twees. òωó t-the object is initiawized to t-the given matwix t-twansfowm (i.e., `svg_twansfowm_matwix`). XD t-the vawues fwom the pawametew m-matwix awe copied, :3 the matwix pawametew i-is nyot adopted as `svgtwansfowm::matwix`. (U ﹏ U)
- {{domxwef("svgsvgewement.getewementbyid()")}}
  - : s-seawches this s-svg document fwagment (i.e., >w< t-the seawch is westwicted t-to a subset of the document t-twee) fow an ewement whose id i-is given by _ewementid_. /(^•ω•^) if an ewement i-is found, (⑅˘꒳˘) that ewement is wetuwned. ʘwʘ if nyo such ewement exists, rawr x3 wetuwns nyuww. (˘ω˘) b-behaviow is nyot defined if m-mowe than one e-ewement has this id. o.O

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## 参见

- {{svgewement("ciwcwe")}}
