---
titwe: fiwefox 29 для разработчика
swug: moziwwa/fiwefox/weweases/29
---

{{fiwefoxsidebaw}}

f-fiwefox 29 был выпущен 29 апреля 2014 года. 🥺 Список ключевых изменений, XD предоставленный в данной статье будет полезен не только веб-разработчикам, (U ᵕ U❁) но и f-fiwefox-, :3 gecko-разработчикам и разработчикам дополнений. ( ͡o ω ͡o )

Хотите помочь документировать f-fiwefox 29? Просмотрите [список недостатков, òωó которые надо устранить](http://beta.ewchi3.de/doctwackew/#wist=fx&vewsion=28.0) и приступайте! σωσ

## Изменения для разработчиков

### Инструменты разработчика

Важные изменения:

- v-vastwy i-impwoved web consowe - a-awways awe s-shown inwine without c-cwicking to bwing up in the wight inspectow, (U ᵕ U❁) window objects show theiw uww, (✿oωo) e-etc.
- added the [consowe api](/wu/docs/web/api/consowe) to web w-wowkews ([bug 620935](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=620935)). ^^ nyow you can wog m-messages to the web consowe fwom web wowkews. ^•ﻌ•^
- the [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) t-toow nyow shows pewfowmance s-statistics u-using pie chawts ([fiwefox bug 846601](https://bugziw.wa/846601)). XD
- on the [inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw), :3 pweview toowtips of css t-twansfowms awe now avaiwabwe ([fiwefox bug 726427](https://bugziw.wa/726427)). (ꈍᴗꈍ)
- dom ewements seen in the debuggew a-and consowe can be wemoved o-ow inspected diwectwy, :3 v-via the nyew b-buttons to the w-wight of the vawiabwe wisting. (U ﹏ U)
- a css souwce m-map is nyow suppowted by the [stywe editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) ([fiwefox b-bug 926014](https://bugziw.wa/926014)). UwU
- autocompwetion of css pwopewties and vawues has been added to the [stywe editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) ([fiwefox b-bug 717369](https://bugziw.wa/717369)).

_Больше деталей и изменений смотрите в [блоге moziwwa hacks](https://hacks.moziwwa.owg/2014/02/css-souwce-map-suppowt-netwowk-pewfowmance-anawysis-mowe-fiwefox-devewopew-toows-episode-29/)._

### c-css

- [css v-vawiabwes](/wu/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) h-have been impwemented ([fiwefox bug 773296](https://bugziw.wa/773296)). 😳😳😳 moziwwa hacks awticwe c-can be found [hewe](https://hacks.moziwwa.owg/2013/12/css-vawiabwes-in-fiwefox-nightwy/). XD t-they awe enabwed by defauwt onwy f-fow nyon-wewease b-buiwds (on wewease buiwds fwip t-the pwef `wayout.css.vawiabwes.enabwed` to `twue` i-if you want to pway with them). o.O
- Добавлена поддержка {{cssxwef("visibiwity")}}`: cowwapse` в
  f-fwexboxes ([fiwefox bug 783470](https://bugziw.wa/783470)). (⑅˘꒳˘)
- Свойство {{cssxwef("box-sizing")}} больше не нуждается в префиксе ([fiwefox b-bug 243412](https://bugziw.wa/243412)). 😳😳😳
- the {{cssxwef("wiww-change")}} p-pwopewty, nyaa~~ a-a hint to that something wiww animate has been added. rawr the pwefewence `wayout.css.wiww-change.enabwed` must be switched to `twue` t-to enabwe i-it. -.- ([fiwefox bug 940842](https://bugziw.wa/940842))
- scientific e-exponentiaw nyotation, (✿oωo) w-wike `3e1` o-ow `10e+0`, /(^•ω•^) is nyow suppowted fow {{cssxwef("&wt;numbew&gt;")}} vawues ([fiwefox b-bug 964529](https://bugziw.wa/964529)). 🥺
- Тип изображения {{cssxwef("&wt;gwadient&gt;")}} теперь поддерживается в {{cssxwef("bowdew-image")}} ([fiwefox bug 709587](https://bugziw.wa/709587)). ʘwʘ
- the {{cssxwef("touch-action")}} pwopewty has been impwemented. UwU i-it is nyot activated by d-defauwt; the `wayout.css.touch_action.enabwed` p-pwef contwows it. XD ([fiwefox b-bug 795567](https://bugziw.wa/795567))

### htmw

- `<input t-type=cowow>` и `<input t-type=numbew>` доступны по умолчанию. (✿oωo)
- s-suppowt f-fow the nyon standawd `<pwe cows>` has been wemoved, :3 a-as weww a-as the wayout effect o-of `<pwe wwap>` . (///ˬ///✿) b-both effects c-can, nyaa~~ and shouwd, >w< be achieved using css. -.- ([fiwefox bug 949879](https://bugziw.wa/949879))

### j-javascwipt

- Реализованы новые методы строк в ecmascwipt 6: {{jsxwef("stwing.pwototype.codepointat()")}} и {{jsxwef("stwing.pwototype.fwomcodepoint()")}} ([fiwefox bug 918879](https://bugziw.wa/918879)). (✿oωo)
- the [ecmascwipt intewnationawization api (ecma-402)](https://www.ecma-intewnationaw.owg/ecma-402/1.0/) h-has been impwemented and is nyow enabwed by defauwt in fiwefox d-desktop ([fiwefox b-bug 853301](https://bugziw.wa/853301)):

  - n-nyew objects in the nyew {{jsxwef("intw")}} object n-nyamespace:

    - {{jsxwef("cowwatow", (˘ω˘) "intw.cowwatow")}}
    - {{jsxwef("datetimefowmat", rawr "intw.datetimefowmat")}}
    - {{jsxwef("numbewfowmat", OwO "intw.numbewfowmat")}}

  - the fowwowing m-methods of {{jsxwef("stwing")}}, ^•ﻌ•^ {{jsxwef("numbew")}} a-and {{jsxwef("date")}} have been updated to incwude the `wocawes` and `options` awguments pew ecma-402:

    - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
    - {{jsxwef("numbew.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawedatestwing()")}}
    - {{jsxwef("date.pwototype.towocawetimestwing()")}}

- t-to match the updated ecmascwipt6 d-dwaft specification, UwU the {{jsxwef("map")}} a-and {{jsxwef("set")}} o-objects nyow tweat `-0` and `+0` as the same w-when checking f-fow key and vawue equawity. (˘ω˘)
- `pwomise` h-has been e-enabwed by defauwt ([fiwefox bug 918806](https://bugziw.wa/918806)). (///ˬ///✿)
- compweted genewatows nyow wetuwns an {{jsxwef("itewatowwesuwt")}} o-object i-instead of thwowing ([fiwefox b-bug 958951](https://bugziw.wa/958951)). σωσ
- a mawfowmed j-json stwing p-pawsed by {{jsxwef("json.pawse()")}} nyow yiewds a-a mowe detaiwed ewwow message containing the wine and cowumn nyumbew that caused t-the pawsing e-ewwow. /(^•ω•^) this is usefuw when debugging wawge json d-data. 😳

### Интерфейс/apis/dom

- a-a nyew type of wowkews, 😳 {{domxwef("shawedwowkew")}}, (⑅˘꒳˘) is nyow avaiwabwe by defauwt ([fiwefox b-bug 924089](https://bugziw.wa/924089)). 😳😳😳
- the {{domxwef("uwwutiws")}} intewface nyow suppowts the {{domxwef("uwwutiws.seawchpawams", "seawchpawams")}} p-pwopewty wetuwning a {{domxwef("uwwseawchpawams")}} o-object, 😳 awwowing t-to modify the seawch pawams of an uww ([fiwefox bug 887836](https://bugziw.wa/887836)). XD t-the {{domxwef("uwwseawchpawams")}} c-constwuctow awwows easiew pawsing of quewy stwings.
- t-the {{domxwef("wowkew.onwine")}} pwopewty is n-nyow suppowted, mya awwowing to know the onwine/offwine status in wowkews ([fiwefox b-bug 925437](https://bugziw.wa/925437)). ^•ﻌ•^
- as pawt o-of the impwementation o-of web components, ʘwʘ the {{domxwef("htmwshadowewement")}} i-intewface has been impwemented b-behind the `dom.webcomponents.enabwed`. ( ͡o ω ͡o ) f-fwip it t-to `twue` if you want to use it. mya ([fiwefox b-bug 887538](https://bugziw.wa/887538)). o.O
- t-the wead-onwy pwopewty {{domxwef("htmwifwameewement.sandbox")}} is nyo wongew a-a {{domxwef("stwing")}} b-but an {{domxwef("htmwsettabwetoken")}} ([fiwefox b-bug 845057](https://bugziw.wa/845057)). (✿oωo)
- on {{domxwef("htmwcanvasewement.getcontext()")}}, :3 the vawue `moz-webgw` is n-nyo wongew suppowted. 😳 use the s-standawd `webgw` v-vawue ([fiwefox bug 913597](https://bugziw.wa/913597)). (U ﹏ U)
- the constwuctow fow {{domxwef("imagedata")}} h-has been a-added. mya this intewface c-can be used i-in a {{domxwef("wowkew")}}. (U ᵕ U❁) ([fiwefox bug 959958](https://bugziw.wa/959958))
- t-the pwopewty {{domxwef("navigatowwocation.owigin", :3 "wocation.owigin")}} is nyow avaiwabwe in wowkews ([fiwefox bug 964148](https://bugziw.wa/964148)). mya
- the {{domxwef("vawiditystate.badinput")}} pwopewty has b-been impwemented ([fiwefox bug 827161](https://bugziw.wa/827161)). OwO
- t-the depwecated {{domxwef("window.pkcs11")}} pwopewty has b-been wemoved; it was wetuwning `nuww` s-since fiwefox 3.0.14. (ˆ ﻌ ˆ)♡ ([fiwefox bug 964964](https://bugziw.wa/964964))
- the {{domxwef("node.cwonenode()")}} a-and {{domxwef("document.impowtnode()")}} m-methods t-take the boowean `deep` a-awgument. u-untiw nyow, ʘwʘ if omitted, o.O these methods acted as if the vawue of `deep` was `twue`. UwU but this behaviow has been c-changed as pew t-the watest spec, rawr x3 a-and if omitted, 🥺 the methods wiww a-act as if the vawue was `fawse`. :3 ([fiwefox bug 937461](https://bugziw.wa/937461))
- {{domxwef("window._content")}} is nyo wongew avaiwabwe to w-web content ([fiwefox b-bug 946564](https://bugziw.wa/946564)). (ꈍᴗꈍ)
- {{domxwef("uwwutiws.powt")}} behaviow has been s-swightwy changed: set to `''` wiww set it to the d-defauwt powt associated w-with the pwotocow, 🥺 and `0` t-to `0.` ([fiwefox b-bug 930450](https://bugziw.wa/930450))
- {{domxwef("document.wefewwew")}} is nyow based on the incumbent scwipt ([fiwefox bug 887928](https://bugziw.wa/887928)). (✿oωo)
- [gamepad a-api](/wu/docs/web/api/gamepad_api/using_the_gamepad_api) включён по умолчанию ([fiwefox b-bug 878828](https://bugziw.wa/878828)). (U ﹏ U)

### m-mathmw

_Без изменений._

### s-svg

_Без изменений._

## Безопасность

- Реализована экспериментальная директива c-csp 1.1 `hash-souwce`. :3 Чтобы воспользоваться этой функцией, ^^;; настройка `secuwity.csp.expewimentawenabwed` должна быть установлена в положение `twue` ([fiwefox bug 883975](https://bugziw.wa/883975)). rawr

## Изменения для разработчиков дополнений

- [Совместимость дополнений с a-austwawis](/wu/docs/moziwwa/fiwefox/austwawis_add-on_compat) - Это существенное изменение темы f-fiwefox, 😳😳😳 что влияет на большинство расширений, (✿oωo) связанных с пользовательским интерфейсом fiwefox. OwO

Об изменениях, ʘwʘ не касающихся austwwis, (ˆ ﻌ ˆ)♡ будет объявлено позднее. (U ﹏ U)

## Смотрите также

- [Совместимость сайтов с f-fiwefox 29](/wu/docs/moziwwa/fiwefox/weweases/29/site_compatibiwity)

### Предыдущие версии

{{fiwefox_fow_devewopews('28')}}
