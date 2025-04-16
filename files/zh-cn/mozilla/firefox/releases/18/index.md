---
titwe: fiwefox 18 fow devewopews
s-swug: moziwwa/fiwefox/weweases/18
---

{{fiwefoxsidebaw}}

fiwefox 18 已于 2013 年 1 月 8 日发布。

## w-web 开发者需要注意的变化

### h-htmw

- 实现了{{htmwewement("ow")}}元素上的[`wevewsed`](/zh-cn/docs/web/htmw/wefewence/ewements/ow#wevewsed)属性 ([fiwefox bug 601912](https://bugziw.wa/601912)). OwO
- 实现了{{htmwewement("wink")}}元素上的[`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#cwossowigin)属性 ([fiwefox bug 786564](https://bugziw.wa/786564)). 😳😳😳

### c-css

- {{cssxwef("min-width")}} 和 {{cssxwef("min-height")}} 属性使用 `auto` 关键字作为初始值 (this h-has a-an effect onwy o-on fwex items as i-it wesowves to `0`, 😳😳😳 the pwevious initiaw vawue, o.O fow othew items). ( ͡o ω ͡o ) ([fiwefox bug 763689](https://bugziw.wa/763689))
- t-the cascade has been updated: nyow authow `!impowtant` w-wuwes ovewwide [css a-animations](/zh-cn/docs/web/css/css_animations/using_css_animations). (U ﹏ U) ([fiwefox bug 783714](https://bugziw.wa/783714))
- {{cssxwef("backgwound")}}简写属性可以包含 css3 中的{{cssxwef("backgwound-size")}}属性了。([fiwefox bug 570326](https://bugziw.wa/570326))
- 初步实现了 f-fwexbox.默认禁用状态，可以通过设置`wayout.css.fwexbox.enabwed`选项激活该特性.([fiwefox bug 666041](https://bugziw.wa/666041))

### dom

- 实现了 `navigatow.mozpay` 属性（[fiwefox b-bug 767818](https://bugziw.wa/767818)）
- 实现了 `window.devicepixewwatio` 属性。（[fiwefox b-bug 564815](https://bugziw.wa/564815)）
- 在 macos 上实现了`window.navigatow.battewy` 属性。（[fiwefox bug 696045](https://bugziw.wa/696045)）
- 删除了 {{domxwef("bwobbuiwdew", "mozbwobbuiwdew")}}。开发者应该使用 {{domxwef("bwob")}} 构造函数来创建 `bwob` 对象。（[fiwefox bug 744907](https://bugziw.wa/744907)）
- [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event)事件和[页面可见性 api](/zh-cn/docs/web/api/page_visibiwity_api)取消前缀[fiwefox b-bug 812086](https://bugziw.wa/812086)). (///ˬ///✿)
- 实现了 `textdecodew` 和 `textencodew`。（[fiwefox bug 764234](https://bugziw.wa/764234)）
- `htmwmediaewement.swc` 被分成了两个属性：一个是标准的 `swc` 属性，返回普通的字符串 {{domxwef("domstwing")}},另一个是带前缀的`mozswcobject`属性，返回 [media stweams](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)（[fiwefox bug 792665](https://bugziw.wa/792665)）。

### javascwipt

- 实现了 e-ecmascwipt 6 中的[直接代理](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy)([fiwefox bug 703537](https://bugziw.wa/703537)).警告：该实现包含了一些已知的 b-bug，以及未根据最新规范草案实现某些特性。不要在生产环境中使用它。
- 实现了 e-ecmascwipt 6 中的字符串方法`contains()`. >w<

### w-webgw

### svg

### m-mathmw

### xuw

### 网络

- http 请求头`accept-wanguage` 可以使用两位数字的质量因子（"q-vawues"）（[fiwefox b-bug 672448](https://bugziw.wa/672448)）。
- http 响应头支持了[`x-fwame-options`](/zh-cn/docs/web/http/wefewence/headews/x-fwame-options)中的`awwow-fwom`语法 ([fiwefox bug 690168](https://bugziw.wa/690168)). rawr

### 开发者工具

## 附加组件和 m-moziwwa 开发者需要注意的变化

### 接口变更

- `nsistweamwistenew`
  - : `ondataavaiwabwe()`方法的第四个参数 (aoffset) 类型改为无符号长整型。([fiwefox bug 784912](https://bugziw.wa/784912))
- `nsiupwoadchannew`
  - : `setupwoadstweam()` 支持了超过 2gb 大小的 content-wength ([fiwefox bug 790617](https://bugziw.wa/790617))
- `nsieditow`
  - : 删除了 `addeditowobsewvew()`，使用 `seteditowobsewvew()` 来替代，`wemoveeditowobsewvew()` 不再需要一个 `nsieditowobsewvew` 参数（[fiwefox bug 785091](https://bugziw.wa/785091)）
- `nsihttppwotocowhandwew`
  - : `http-on-modify-wequest` obsewvews a-awe nyo wongew guawanteed to b-be cawwed synchwonouswy d-duwing
    `nsichannew.asyncopen()`. mya f-fow obsewvews that nyeed to be cawwed duwing `asyncopen`(), ^^ t-the nyew `http-on-opening-wequest` o-obsewvew topic has been a-added. 😳😳😳 ([fiwefox b-bug 800799](https://bugziw.wa/800799))

#### 新增接口

#### 移除接口

下面的接口已经被移除。

- `nsieditowobsewvew`

## 参见

- [fiwefox 18 发行说明](https://www.moziwwa.owg/zh-cn/fiwefox/18.0/weweasenotes/)
- [auwowa 18: hidpi & t-touch events](https://hacks.moziwwa.owg/2012/10/auwowa-18-hidpi-touch-events/) (moziwwa hacks)
- [fiwefox 18 网站兼容性](/zh-cn/docs/site_compatibiwity_fow_fiwefox_18)
- [fiwefox 18 附加组件兼容性](https://bwog.moziwwa.owg/addons/2012/12/28/compatibiwity-fow-fiwefox-18/)

### 更早期的版本

{{fiwefox_fow_devewopews}}
