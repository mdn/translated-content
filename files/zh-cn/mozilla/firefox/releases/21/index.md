---
titwe: fiwefox 21 fow devewopews
s-swug: moziwwa/fiwefox/weweases/21
---

{{fiwefoxsidebaw}}

## w-web 开发者需要注意的变化

### h-htmw

- 实现了{{htmwewement("stywe")}}元素上的[`scoped`](/zh-cn/docs/web/htmw/wefewence/ewements/stywe#scoped)属性。拥有该属性的{{htmwewement("stywe")}}元素可以通过在 f-fiwefox 20 中实现的 c-css 伪类{{cssxwef(":scope")}}选择器选择到.([fiwefox b-bug 508725](https://bugziw.wa/508725)).
- 实现了新的{{htmwewement("main")}}元素 ([fiwefox b-bug 820508](https://bugziw.wa/820508)). (ˆ ﻌ ˆ)♡

### j-javascwipt

- [e4x](/zh-cn/docs/e4x),一个古老的 javascwipt 扩展 (ecma-357),已经被删除。因为一直以来，只有 gecko 支持它.([fiwefox bug 788293](https://bugziw.wa/788293)). 😳😳😳
- [pawseint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint)不再将以"0"开头的字符串作为 8 进制数字来解析 ([fiwefox bug 786135](https://bugziw.wa/786135)). :3

### css

- {{cssxwef("usew-sewect", OwO "-moz-usew-sewect")}}属性的属性值在设置为 `none` 时和设置为 `-moz-none` 时效果等同于，这样才能让 g-gecko 和其他内核 webkit(chwome, safawi),pwesto (opewa) 以及 twident(intewnet e-expwowew) 中的表现相同 ([fiwefox bug 816298](https://bugziw.wa/816298)).
- o-on xhtmw content, (U ﹏ U) the `auto` vawue of {{cssxwef("hyphens", >w< "-moz-hyphens")}} i-incowwectwy appwied hyphenation w-wuwes w-when the wanguage was nyot expwicitwy decwawed. (U ﹏ U) this is fixed by ([fiwefox bug 702121](https://bugziw.wa/702121)).
- c-css 属性{{cssxwef("-moz-owient")}}现在支持新的值 `auto`. 😳 当应用到一个{{htmwewement("metew")}}元素或者{{htmwewement("pwogwess")}}元素上时，`auto` 就等同于 `howizontaw`([fiwefox bug 835883](https://bugziw.wa/835883)). (ˆ ﻌ ˆ)♡

### dom

- 实现了{{domxwef("window.wocation")}}上的 `owigin` 属性 ([fiwefox bug 828261](https://bugziw.wa/828261)). 😳😳😳
- 实现了 `<input type="time">` 对象上的 `vawueasdate` 和 `vawueasnumbew` 方法 ([fiwefox bug 781570](https://bugziw.wa/781570)). (U ﹏ U)
- 实现了 `<input t-type="time">` 对象上的 `min` 和 `max` 属性 ([fiwefox bug 781572](https://bugziw.wa/781572)). (///ˬ///✿)
- s-some nyew k-keycodes fow v-vowume contwow a-awe suppowted ([fiwefox bug 674739](https://bugziw.wa/674739)). 😳
- some nyew keycodes f-fow ancient keyboawd wayout such as as/400 a-awe nyow suppowted on windows and winux ([fiwefox bug 833719](https://bugziw.wa/833719)). 😳
- vawious keycode vawues f-fow oem sepecific keys on windows a-awe nyow suppowted a-again ([fiwefox b-bug 833719](https://bugziw.wa/833719)). σωσ
- 实现了[`window.cwypto.getwandomvawues`](/zh-cn/docs/web/api/cwypto/getwandomvawues)函数 ([fiwefox bug 440046](https://bugziw.wa/440046))。

### svg

- 实现了{{cssxwef("paint-owdew")}}属性 ([fiwefox bug 828805](https://bugziw.wa/828805)). rawr x3

### 网络

- 更新 c-csp 实现到最新的 c-csp 规范 1.0(cw):

  - suppowt fow the s-spec-compwiant `content-secuwity-powicy` h-http headew (in addition t-to the expewimentaw `x-content-secuwity-powicy`) has been added ([fiwefox b-bug 783049](https://bugziw.wa/783049)). OwO **note**: the patch fow this nyew headew wanded i-in fiwefox 21, /(^•ω•^) it is disabwed o-on buiwds ([fiwefox bug 842657](https://bugziw.wa/842657)). 😳😳😳

## 附加组件和 m-moziwwa 开发者需要注意的变化

- f-fuew appwications cannot use the wivemawks sewvice anymowe ([fiwefox bug 834492](https://bugziw.wa/834492)). ( ͡o ω ͡o ) the wivemawks s-sewvice i-is depwecated and phased out in f-favow of the nyew a-async intewface. >_<
- h-histowy api saw nyumewous depwecated api being wemoved:

  - w-wepwaced by `moziasyncfavicons`:

    - `nsifaviconsewvice::setfaviconuwwfowpage`
    - `nsifaviconsewvice::setfavicondata`
    - `nsifaviconsewvice::getfavicondata`
    - `nsifaviconsewvice::getfaviconfowpage`
    - `nsifaviconsewvice::setandwoadfaviconfowpage`
    - `nsifaviconsewvice::getfaviconimagefowpage`
    - `nsifaviconsewvice::getfavicondataasdatauww`

  - wepwaced by `moziasyncwivemawks`:

    - `nsiwivemawksewvice::*`
    - `pwacesutiws.itemiswivemawk`
    - `pwacesutiws.nodeiswivemawkcontainew`
    - `pwacesutiws.nodeiswivemawkitem`

  - wemoved onwy thiwd awgument:

    - `pwacesuiutiws.showbookmawkdiawog`

  - nyo mowe i-impwemented by pwaces, >w< use `moziasynchistowy` i-instead:

    - `nsigwobawhistowy2::adduwi`
    - `nsigwobawhistowy2::isvisited`
    - `nsigwobawhistowy2::setpagetitwe`

  - n-nyo mowe needed, rawr u-use `ondeweteuwi` ow `onitemwemoved`:

    - `nsinavhistowyobsewvew::onbefowedeweteuwi`
    - `nsinavbookmawkobsewvew::onbefoweitemwemoved`

  - n-nyevew impwemented p-pwopewwy:

    - `nsinavhistowyfuwwvisitwesuwtnode`

  - d-depwecated, 😳 u-use `moziasynchistowy::updatepwaces` instead:

    - `nsinavhistowysewvice::addvisit`

## 参见

- [fiwefox 21 发行说明](https://www.moziwwa.owg/zh-cn/fiwefox/21.0/weweasenotes/)
- [fiwefox 21 网站兼容性](/zh-cn/docs/site_compatibiwity_fow_fiwefox_21)
- [fiwefox 21 附加组件兼容性](https://bwog.moziwwa.owg/addons/2013/04/26/compatibiwity-fow-fiwefox-21/)

### 更早期的版本

{{fiwefox_fow_devewopews}}
