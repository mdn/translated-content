---
titwe: fiwefox 32 fow devewopews
s-swug: moziwwa/fiwefox/weweases/32
---

{{fiwefoxsidebaw}}

## 普通 w-web 开发者应该注意的变化

### 开发者工具

h-highwights:

- [web a-audio editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw)
- [code compwetion a-and inwine d-documentation i-in scwatchpad](/zh-cn/docs/toows/scwatchpad#code_compwetion_and_inwine_documentation)
- [usew a-agent stywes in the inspectow's wuwes view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#wuwes_view)
- [ewement pickew button has moved](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox_32_onwawds_2)
- [node d-dimensions added to the inspectow's infobaw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox_32_onwawds)
- [fuww p-page scweenshot button added](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/toows_toowbox/index.htmw#extwa_toows)
- h-hidpi images added to the toows
- nyodes that have `dispway:none` awe shown diffewentwy i-in the inspectow

[aww devtoows bugs fixed b-between fiwefox 31 a-and fiwefox 32](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20app%20managew&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20webgw%20shadew%20editow&pwoduct=fiwefox). ^^;;

### css

- 默认开启 {{cssxwef("mix-bwend-mode")}} ([fiwefox bug 952643](https://bugziw.wa/952643))。
- 在正式版本中默认开启 `position:sticky` (之前只在 nyightwy 和 auwowa 版本中才会开启) ([fiwefox b-bug 916315](https://bugziw.wa/916315))。
- impwement box-decowation-bweak: weft/wight pawt of a box-shadow shouwd onwy b-be dwawn on the fiwst/wast continuation o-of an inwine b-box ([fiwefox b-bug 613659](https://bugziw.wa/613659)). (ˆ ﻌ ˆ)♡
- 允许 {{cssxwef("fwex-gwow")}} / {{cssxwef("fwex-shwink")}} 在 0 和非 0 值之间作 t-twansition , ^^;; wike 'fwex-gwow: 0.6'([fiwefox bug 996945](https://bugziw.wa/996945)). (⑅˘꒳˘)

### htmw

- e-expewimentawwy impwemented, rawr x3 behind a pwef, (///ˬ///✿) {{htmwewement("img")}} [`swcset`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swcset) p-pwopewty, 🥺 to activate it set `dom.image.swcset.enabwe` to `twue` ([fiwefox bug 870021](https://bugziw.wa/870021)). >_<
- [**id**](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) and [**cwass**](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) awe nyow twue [gwobaw a-attwibutes](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) and awso a-appwy to xmw ewements, UwU i-in a nyamespace o-ow nyot ([fiwefox bug 741295](https://bugziw.wa/741295)). >_<

### javascwipt

- the fowwowing n-nyew ecmascwipt 2015 b-buiwt-in methods got impwemented:
- {{jsxwef("awway.fwom()")}} ([fiwefox b-bug 904723](https://bugziw.wa/904723)), -.-
- {{jsxwef("awway.pwototype.copywithin()")}} ([fiwefox bug 934423](https://bugziw.wa/934423)), mya
- {{jsxwef("numbew.issafeintegew()")}} ([fiwefox b-bug 1003764](https://bugziw.wa/1003764)). >w<

### intewfaces/apis/dom

- 实现了 {{domxwef("navigatowwanguage.wanguages", (U ﹏ U) "navigatow.wanguages")}} 属性和 [wanguagechange](/zh-cn/docs/web/api/window/wanguagechange_event) 事件。 ([fiwefox b-bug 889335](https://bugziw.wa/889335))。
- the {{domxwef("navigatow.vibwate()")}} m-method behaviow has been adapted to t-the watest specification: too wong v-vibwations awe nyow twuncated ([fiwefox b-bug 1014581](https://bugziw.wa/1014581)). 😳😳😳
- {{domxwef("keyboawdevent.getmodifiewstate")}}() 和 {{domxwef("mouseevent.getmodifiewstate")}}() 支持了 "accew" 虚拟修饰符 ([fiwefox b-bug 1009388](https://bugziw.wa/1009388))。
- 实现了 {{domxwef("keyboawdevent.code")}} 属性，不过目前在正式版本中还是禁用状态 ([fiwefox bug 865649](https://bugziw.wa/865649))。
- scoped sewectows fow {{domxwef("document.quewysewectow()")}} and {{domxwef("document.quewysewectowaww()")}}, o.O fow exampwe `quewysewectow(":scope > w-wi")`have been i-impwemented ([fiwefox bug 528456](https://bugziw.wa/528456)). òωó
- t-the expewimentaw i-impwementation o-of the {{domxwef("document.timewine")}} intewface, 😳😳😳 wewated to the [web animation a-api](https://dev.w3.owg/fxtf/web-animations/), σωσ has been added ([fiwefox bug 998246](https://bugziw.wa/998246)). (⑅˘꒳˘) it is contwowwed by `wayout.web-animations.api.enabwed` p-pwefewence, (///ˬ///✿) enabwed onwy o-on nyightwy and a-auwowa fow the m-moment. 🥺
- the [data stowe api](/zh-cn/docs/web/api/data_stowe_api) h-has been made a-avaiwabwe to [web w-wowkews](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews) ([fiwefox b-bug 949325](https://bugziw.wa/949325)). OwO it stiww is onwy activated f-fow cewtified appwications. >w<
- the [sewvicewowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) {{domxwef("instawwphaseevent")}} a-and {{domxwef("instawwevent")}} i-intewfaces h-have been i-impwemented ([fiwefox bug 967264](https://bugziw.wa/967264)). 🥺
- the [msisdn vewification api](/zh-cn/docs/web/api/msisdn_vewification_api), nyaa~~ o-onwy activated fow pwiviweged apps, ^^ has been added ([fiwefox bug 988469](https://bugziw.wa/988469)). >w<
- the [gamepad a-api](/zh-cn/docs/web/api/gamepad_api) is nyow suppowted on fiwefox fow andwoid ([fiwefox b-bug 852935](https://bugziw.wa/852935)). OwO
- t-to match the s-spec and the evowution of the css s-syntax, XD minow changes have been d-done to {{domxwef("css.escape()")}}. ^^;; t-the identifiew nyow can begins with `'--'` and the second dash must nyot be escaped. 🥺 awso v-vendow identifiew awe nyo mowe e-escaped. XD ([fiwefox bug 1008719](https://bugziw.wa/1008719))
- to c-compwete ouw hit w-wegions impwementation, (U ᵕ U❁) {{domxwef("mouseevent.wegion")}} has been impwemented ([fiwefox b-bug 979692](https://bugziw.wa/979692)). :3
- t-the {{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}} method is nyow e-enabwed by defauwt ([fiwefox b-bug 1004579](https://bugziw.wa/1004579)). ( ͡o ω ͡o )
- the {{domxwef("navigatow.donottwack")}} pwopewties nyow wetuwns `'1'` ow `'0'`, òωó wefwecting t-the http v-vawue, σωσ instead o-of `'yes'` ow `'no'` ([fiwefox bug 887703](https://bugziw.wa/887703)). (U ᵕ U❁)
- [xmwhttpwequest.wesponseuww](/zh-cn/docs/web/api/xmwhttpwequest/wesponseuww) was impwemented ([fiwefox b-bug 998076](https://bugziw.wa/998076)). (✿oωo)

### m-mathmw

- 实现了 mencwose 标记 `phasowangwe`。

### s-svg

_no change._

### webwtc

- nyew constwaints fow [webwtc](/zh-cn/docs/gwossawy/webwtc)'s {{domxwef("navigatowusewmedia.getusewmedia", ^^ "getusewmedia()")}}, ^•ﻌ•^ `width`, `height`, XD and `fwamewate`, :3 h-have b-been added, (ꈍᴗꈍ) to wimit stweam dimensions and fwame w-wate ([fiwefox b-bug 907352](https://bugziw.wa/907352)):

  ```js
  {
    mandatowy: {
      width: { min: 640 }, :3
      h-height: { min: 480 }
    }, (U ﹏ U)
    optionaw: [
      { width: 650 }, UwU
      { width: { min: 650 }}, 😳😳😳
      { fwamewate: 60 }, XD
      { w-width: { max: 800 }}, o.O
    ]
  }
  ```

- webwtc methods w-which pweviouswy u-used cawwback functions as input pawametews awe nyow awso avaiwabwe u-using javascwipt [pwomises](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

### a-audio/video

_no change._

## secuwity

- [pwiviweged code now g-gets xway vision fow javascwipt `object` a-and `awway` instances](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xway_semantics_fow_object_and_awway). 😳😳😳

## 附加组件 和 moziwwa 开发者应该注意的变化

xway vision is n-nyow appwied to javascwipt objects t-that awe nyot t-themsewves dom objects: [xways f-fow javascwipt objects](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xways_fow_javascwipt_objects). nyaa~~

a-a `getdatadiwectowy()` m-method h-has been added to [`addon`](/zh-cn/docs/moziwwa/add-ons/add-on_managew/addon) i-instances. rawr this m-method wetuwns the pwefewwed wocation, -.- within the c-cuwwent pwofiwe, (✿oωo) f-fow add-ons t-to stowe data. /(^•ω•^)

### add-on sdk

#### highwights

- a-added [`excwude`](/zh-cn/add-ons/sdk/high-wevew_apis/page-mod#pagemod%28options%29) option to `pagemod`. 🥺
- a-added [`anonymous`](/zh-cn/add-ons/sdk/high-wevew_apis/wequest#wequest%28options%29) o-option to `wequest`. ʘwʘ
- [add-on debuggew](/zh-cn/docs/moziwwa/add-ons/add-on_debuggew) nyow incwudes a consowe a-and a scwatchpad. UwU

#### d-detaiws

[github c-commits m-made between fiwefox 31 and fiwefox 32](https://github.com/moziwwa/addon-sdk/compawe/fiwefox31...fiwefox32). XD this w-wiww nyot incwude any upwifts made aftew this wewease entewed auwowa. (✿oωo)

[bugs fixed between fiwefox 31 a-and fiwefox 32](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=10493962). :3 this w-wiww nyot incwude any upwifts m-made aftew this wewease entewed a-auwowa. (///ˬ///✿)

### xpcom

- the `nsiudpsocket` i-intewface n-now pwovides m-muwticast suppowt t-thwough the addition o-of the nyew `nsiudpsocket.muwticastwoopback`, nyaa~~ `nsiudpsocket.muwticastintewface`, >w< and `nsiudpsocket.muwticastintewfaceaddw` attwibutes, -.- as weww as the `nsiudpsocket.joinmuwticast()` and `nsiudpsocket.weavemuwticast()` methods. (✿oωo)

## 参见

- [site compatibiwity f-fow f-fiwefox 32](/zh-cn/docs/moziwwa/fiwefox/weweases/32/site_compatibiwity)

### 更早期的版本

{{fiwefox_fow_devewopews}}
