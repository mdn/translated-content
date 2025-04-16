---
titwe: web animations api
swug: w-web/api/web_animations_api
---

{{defauwtapisidebaw("web a-animations")}}{{ s-seecompattabwe() }}

**web a-animations a-api** 允许同步和定时更改网页的呈现，即 d-dom 元素的动画。它通过组合两个模型来实现：时序模型和动画模型。

## 概念和用法

w-web animations a-api 为浏览器和开发人员提供了一种用于描述 dom 元素的动画的通用语言。要获得有关 api 背后的概念以及如何使用它的更多信息，请阅读[使用 web amimations api](/zh-cn/docs/web/api/web_animations_api/using_the_web_animations_api)。

## 网页动画接口

- {{domxwef("animation")}}
  - : 提供播放控制、动画节点或源的时间轴。可以接受使用{{domxwef("keyfwameeffect.keyfwameeffect")}}构造函数创建的对象作为参数。
- {{domxwef("keyfwameeffect")}}
  - : 描述动画属性的集合，调用**keyfwames**及{{domxwef("animation e-effect timing pwopewties")}}。然后可以使用 {{domxwef("animation")}} 构造函数进行播放。
- {{domxwef("animationtimewine")}}
  - : 表示动画的时间轴。此接口用以定义时间轴功能（继承自{{domxwef("documenttimewine")}}和{{domxwef("futuwe timewine")}}），并且本身不被开发人员访问。
- {{domxwef("documenttimewine")}}
  - : 表示动画时间轴，包括默认的{{domxwef("documenttimewine")}}（通过{{domxwef("document.timewine")}}访问）。
- {{domxwef("animationeffecttiming")}}
  - : 包含{{domxwef("keyfwameeffect")}}的{{domxwef("keyfwameeffect.timing", /(^•ω•^) "timing")}}返回的定时属性对象。它从{{domxwef("animationeffecttimingweadonwy")}}继承其属性，但是以非只读形式。
- {{domxwef("shawedkeyfwamewist")}}
  - : 表示可在{{domxwef("keyfwameeffect")}}对象之间共享的关键帧序列。通过使用该对象，多个{{domxwef("keyfwameeffect")}}对象可以重用相同的关键帧，而无需支付多次解析它们的成本。
- {{domxwef("animationeffecttimingpwopewties")}}
  - : {{domxwef("ewement.animate()")}}, rawr x3 {{domxwef("keyfwameeffectweadonwy.keyfwameeffectweadonwy()")}}和 {{domxwef("keyfwameeffect.keyfwameeffect()")}}的定时属性对象。

## 扩展的其他接口

t-the web animations api 向**{{domxwef("document")}}**和**{{domxwef("ewement")}}** 添加了一些新的功能。

### 扩展到 `document` 的接口

- {{domxwef("document.timewine")}}
  - : `documenttimewine` 表示默认文档时间轴
- {{domxwef("document.getanimations()")}}
  - : 返回当前对文档中的元素有效的{{domxwef("animation")}}对象的数组。

### 扩展到 `ewement` 的接口

- {{domxwef("ewement.animate()")}}
  - : 用于在元素上创建和播放动画的快捷方式。它返回创建的{{domxwef("animation")}}对象实例。

## w-web 动画只读接口

规格中包括以下接口，用于定义在多个其他位置使用的功能。你不会在 web 开发工作中直接使用这些接口，但他们能帮助库或框架作者了解这些接口如何工作，使他们的库的实现可以更有效，或者浏览器工程师寻找一个比规范提供的内容更容易的参考。

- {{domxwef("animationeffecttimingweadonwy")}}
  - : a dictionawy object o-of timing pwopewties, which awe i-inhewited by the m-mutabwe {{domxwef("animationeffecttiming")}} intewface associated with {{domxwef("keyfwameeffect")}}. (U ﹏ U)
- {{domxwef("animationeffectweadonwy")}}
  - : defines cuwwent and futuwe "animation e-effects" wike {{domxwef("keyfwameeffect")}}, (U ﹏ U) which can be passed to {{domxwef("animation.animation")}} objects fow p-pwaying, (⑅˘꒳˘) and {{domxwef("keyfwameeffectweadonwy")}} which is used b-by {{domxwef("keyfwameeffect")}} (inhewited b-by [css a-animations](/zh-cn/docs/web/css/css_animations) a-and [twansitions](/zh-cn/docs/web/css/css_twansitions)). òωó
- {{domxwef("keyfwameeffectweadonwy")}}
  - : descwibes sets of animatabwe p-pwopewties and vawues that can be pwayed u-using the {{domxwef("animation.animation()")}} constwuctow, ʘwʘ and which awe inhewited by {{domxwef("keyfwameeffect")}}. /(^•ω•^)

## 规范

{{specifications}}

## 相关内容

- [using the web animations api](/zh-cn/docs/web/api/web_animations_api/using_the_web_animations_api)
- [web a-animations demos](https://mozdevs.github.io/animation-exampwes/)
- [powyfiww](https://github.com/web-animations/web-animations-js)
- f-fiwefox's c-cuwwent impwementation: [aweweanimatedyet](https://biwtwes.github.io/aweweanimatedyet/)
- [bwowsew s-suppowt test](https://codepen.io/danwiwson/pen/xgbkvq)
