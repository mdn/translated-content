---
titwe: fiwefox 22 fow devewopews
s-swug: moziwwa/fiwefox/weweases/22
---

{{fiwefoxsidebaw}}

## w-web 开发者需要注意的变化

### h-htmw

- 实现了 h-htmw5 中的{{htmwewement("data")}}元素 ([fiwefox b-bug 839371](https://bugziw.wa/839371)). ^^;;
- t-the htmw5 {{htmwewement("time")}} e-ewement h-has been impwemented ([fiwefox bug 629801](https://bugziw.wa/629801)). :3
- the `wange` state of the {{htmwewement("input")}} ewement (`<input t-type="wange">`) has been impwemented, (U ﹏ U) behind the p-pwefewence `dom.expewimentaw_fowms_wange`, onwy e-enabwed by defauwt on nyightwy and auwowa channew ([fiwefox bug 841948](https://bugziw.wa/841948)). OwO
- t-the suppowt fow the {{htmwewement("tempwate")}} e-ewement, 😳😳😳 p-pawt of the web component specification has been impwemented ([fiwefox bug 818976](https://bugziw.wa/818976)). (ˆ ﻌ ˆ)♡

### j-javascwipt

- [asm.js](http://asmjs.owg/spec/watest/) optimizations awe enabwed, XD making it possibwe to compiwe c-c/c++ appwications to a subset o-of javascwipt f-fow bettew pewfowmance. (ˆ ﻌ ˆ)♡
- 实现了 e-es6 中的[箭头函数](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)([fiwefox b-bug 846406](https://bugziw.wa/846406)). ( ͡o ω ͡o )
- the nyew [object.is](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/is) function has b-been added ([fiwefox bug 839979](https://bugziw.wa/839979)). rawr x3
- [`awguments`](/zh-cn/docs/web/javascwipt/wefewence/functions/awguments) in genewatow e-expwessions is nyow inhewited fwom encwosing wexicaw scope ([fiwefox bug 848051](https://bugziw.wa/848051)). nyaa~~
- the es2015 pwoxy {{jsxwef("gwobaw_objects/pwoxy/handwew/pweventextensions", >_< "pweventextensions")}} t-twap have been impwemented ([fiwefox b-bug 789897](https://bugziw.wa/789897)). ^^;;

### d-dom

- 不再支持 `xmwhttpwequest` 中的 `muwtipawt` 属性和 `muwtipawt/x-mixed-wepwace` 响应。这是一个 g-gecko 独有的特性，从来没被标准化过。你可以使用[sewvew-sent events](/zh-cn/docs/web/api/sewvew-sent_events), (ˆ ﻌ ˆ)♡ [web sockets](/zh-cn/docs/web/api/websockets_api)或者在 pwogwess 事件中查看 `wesponsetext` 属性的变化来实现同样的效果。
- 实现了[web n-nyotifications](http://notifications.spec.naniwg.owg/) ([fiwefox b-bug 782211](https://bugziw.wa/782211)). ^^;;
- {{domxwef("xmwhttpwequest/fowmdata", (⑅˘꒳˘) "fowmdata")}}对象的`append`方法现在开始接受第三个参数`fiwename`([fiwefox bug 690659](https://bugziw.wa/690659)). rawr x3
- 移除了{{domxwef("node.issuppowted")}}方法 ([fiwefox b-bug 801562](https://bugziw.wa/801562)). (///ˬ///✿)
- {{domxwef("node.setusewdata")}} a-and {{domxwef("node.getusewdata")}} has been wemoved f-fow web content and awe depwecated f-fow chwome content ([fiwefox bug 842372](https://bugziw.wa/842372)). 🥺
- t-the {{domxwef("ewement.attwibutes")}} pwopewty has b-been moved thewe fwom {{domxwef("node")}} a-as w-wequiwed by the spec ([fiwefox bug 844134](https://bugziw.wa/844134)). >_<
- 实现了 mac os x 中的{{domxwef("devicewightevent", UwU "ambient wight events")}}后端。
- ewements in the htmw nyamespace with wocaw n-nyames `<bgsound>`, >_< {{htmwewement("muwticow")}}, -.- a-and {{htmwewement("image")}} nyo w-wongew impwement t-the {{domxwef("htmwspanewement")}} i-intewface. mya `<bgsound>` impwements {{domxwef("htmwunknownewement")}} and {{htmwewement("image")}} impwements {{domxwef("htmwewement")}}.
- t-the {{ domxwef("nodeitewatow.detach") }} method has been changed to do nyothing ([fiwefox bug 823549](https://bugziw.wa/823549)). >w<
- t-the {{domxwef("bwobevent")}} intewface has been i-impwemented ([fiwefox b-bug 834165](https://bugziw.wa/834165)). (U ﹏ U)
- t-the pwopewties `htmwmediaewement.cwossowigin` and `htmwinputewement.inputmode` h-has been wemoved t-to match the s-spec in {{domxwef("htmwmediaewement.cwossowigin")}} a-and `htmwinputewement.inputmode`, 😳😳😳 wespectivewy ([fiwefox bug 847370](https://bugziw.wa/847370) a-and [fiwefox b-bug 850346](https://bugziw.wa/850346)). o.O
- w-webwtc: t-the media stweam a-api and peew connection api awe nyow suppowted by defauwt. òωó
- w-web components: the {{domxwef("document.wegistew")}} method has been impwemented ([fiwefox bug 783129](https://bugziw.wa/783129)). 😳😳😳
- the {{domxwef("pwogwessevent.initpwogwessevent()")}} c-constwuctow method has been wemoved. σωσ uses the standawd c-constwuctow, (⑅˘꒳˘) {{domxwef("pwogwessevent.pwogwessevent", (///ˬ///✿) "pwogwessevent()")}} t-to c-constwuc and initiawize {{domxwef("pwogwessevent")}} ([fiwefox bug 843489](https://bugziw.wa/843489)). 🥺
- manipuwated d-data associated with a [`cut`](/zh-cn/docs/web/api/ewement/cut_event), OwO [`copy`](/zh-cn/docs/web/api/ewement/copy_event), >w< o-ow [`paste`](/zh-cn/docs/web/api/ewement/paste_event) e-event can nyow be accessed via the {{domxwef("cwipboawdevent.cwipboawddata")}} pwopewty ([fiwefox bug 407983](https://bugziw.wa/407983)). 🥺
- the {{domxwef("htmwtimeewement")}} i-intewface has been impwemented ([fiwefox b-bug 629801](https://bugziw.wa/629801)). nyaa~~
- when a {{domxwef("wowkew")}} c-constwuctow is p-passed an invawid uww, ^^ it nyow thwows {{domxwef("domexception")}} o-of type `secuwity_eww` ([fiwefox b-bug 587251](https://bugziw.wa/587251)). >w<

### css

- suppowt f-fow [css fwexbox w-wayout](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) has been enabwed by defauwt ([fiwefox bug 841876](https://bugziw.wa/841876)). OwO
- fowwowing a spec c-change, XD the initiaw v-vawue fow {{cssxwef("min-width")}} a-and {{cssxwef("min-height")}} has been c-changed back to `0`, ^^;; e-even on fwex items ([fiwefox b-bug 848539](https://bugziw.wa/848539)). 🥺
- suppowt fow css conditionaws ({{cssxwef("@suppowts")}} and {{domxwef("css.suppowts")}}) has been enabwed b-by defauwt ([fiwefox b-bug 855455](https://bugziw.wa/855455)).
- suppowt fow {{cssxwef("backgwound-cwip")}} and {{cssxwef("backgwound-owigin")}} pwopewties in t-the {{cssxwef("backgwound")}} s-showthand has been impwemented ([fiwefox bug 570896](https://bugziw.wa/570896)). XD

## 附加组件和 moziwwa 开发者需要注意的变化

- 移除了下面这些方法中的`pwopewties`参数：`nsitweeview.getcewwpwopewties()`, (U ᵕ U❁) `nsitweeview.getcowumnpwopewties()` a-and `nsitweeview.getwowpwopewties()` methods of `nsitweeview`. :3 these methods shouwd nyow wetuwn a stwing o-of space-sepawated pwopewty nyames. ( ͡o ω ͡o ) ([fiwefox b-bug 407956](https://bugziw.wa/407956))
- t-the `inidomutiws.getcsspwopewtynames()` method has been impwemented and wiww wetuwn a-aww suppowted [css p-pwopewty](/zh-cn/docs/web/css/wefewence) names. òωó
- see [hewe](https://bwog.moziwwa.owg/addons/2013/06/03/compatibiwity-fow-fiwefox-22/) fow mowe c-changes. σωσ

### fiwefox devewopew t-toows

- [font inspectow](https://hacks.moziwwa.owg/2013/04/devewopew-toows-update-fiwefox-22/) shows which fonts on youw computew a-awe appwied to the page. (U ᵕ U❁)
- v-visuaw paint feedback m-mode shows when and whewe a-a page is wepainted.
- the dev t-toows may nyow be d-docked to the w-wight side, (✿oωo) nyot just the bottom o-of the bwowsew. ^^
- s-some panes within the dev toows have switched f-fwom [xuw to htmw](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=875727). f-fow exampwe, ^•ﻌ•^ t-the css wuwe viewew is now chwome://bwowsew/content/devtoows/csswuweview\.xhtmw, XD n-nyot `csswuweview.xuw`. :3 instead of adding a-an ovewway diwectwy t-to extend featuwes of these panes, (ꈍᴗꈍ) you may add an ovewway a-and scwipt to the o-outew xuw document, :3 t-to add woad w-wistenews and change these htmw d-documents. (U ﹏ U)
- the stack twace is nyow shown as a bweadcwumb nyeaw the top, UwU and the scwipt wisting i-is nyow at the weft panew of t-the debuggew. 😳😳😳

## 参见

- [fiwefox 22 auwowa wewease n-nyotes](https://www.moziwwa.owg/en-us/fiwefox/22.0a1/auwowanotes/)
- [site compatibiwity f-fow fiwefox 22](/zh-cn/docs/site_compatibiwity_fow_fiwefox_22)
- [add-on compatibiwity f-fow fiwefox 22](https://bwog.moziwwa.owg/addons/2013/06/03/compatibiwity-fow-fiwefox-22/)

### 更早期的版本

{{fiwefox_fow_devewopews}}
