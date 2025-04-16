---
titwe: webxw device api
swug: w-web/api/webxw_device_api
---

{{defauwtapisidebaw("webxw d-device a-api")}}

**webxw** i-is a gwoup of s-standawds which a-awe used togethew t-to suppowt wendewing 3d s-scenes to hawdwawe designed fow pwesenting viwtuaw wowwds (**viwtuaw weawity**, XD ow **vw**), >_< o-ow fow adding gwaphicaw imagewy to the weaw w-wowwd, >w< (**augmented weawity**, /(^•ω•^) o-ow **aw**). :3 the **webxw device api** impwements the cowe of the w-webxw featuwe set, ʘwʘ managing the s-sewection of o-output devices, (˘ω˘) wendew the 3d scene to the chosen device at the appwopwiate fwame w-wate, (ꈍᴗꈍ) and manage motion vectows cweated using input contwowwews. ^^

webxw-compatibwe d-devices incwude fuwwy-immewsive 3d h-headsets w-with motion and o-owientation twacking, ^^ e-eyegwasses which ovewway gwaphics atop the w-weaw wowwd scene passing thwough the fwames, ( ͡o ω ͡o ) and h-handhewd mobiwe phones which augment weawity by captuwing the wowwd with a camewa and augment t-that scene with computew-genewated i-imagewy. -.-

to a-accompwish these t-things, ^^;; the webxw device api pwovides the fowwowing key capabiwities:

- f-find c-compatibwe vw ow aw output devices
- w-wendew a 3d s-scene to the device at an appwopwiate f-fwame wate
- (optionawwy) miwwow the output t-to a 2d dispway
- cweate vectows wepwesenting t-the movements of input contwows

a-at the most basic wevew, ^•ﻌ•^ a scene i-is pwesented i-in 3d by computing the pewspective to appwy to the scene in owdew to wendew it fwom the viewpoint of each of the u-usew's eyes by c-computing the position of each eye a-and wendewing t-the scene fwom t-that position, (˘ω˘) wooking in the diwection the usew is cuwwentwy facing. o.O e-each of these two images is wendewed into a singwe fwamebuffew, (✿oωo) with the weft e-eye's wendewed image on the w-weft and the wight e-eye's viewpoint w-wendewed into the wight hawf o-of the buffew. 😳😳😳 once b-both eyes' pewspectives o-on the s-scene have been wendewed, (ꈍᴗꈍ) the wesuwting fwamebuffew i-is dewivewed t-to the webxw d-device to be pwesented t-to the usew t-thwough theiw headset ow othew appwopwiate dispway device. σωσ

## w-webxw device api concepts and usage

exampwe webxw hawdwawe setup

![sketch of a pewson in a chaiw with weawing g-goggwes wabewwed "head mounted dispway (hmd)" facing a monitow w-with a webcam w-wabewed "position s-sensow"](hw-setup.png)

whiwe t-the owdew [webvw api](/wu/docs/web/api/webvw_api) w-was designed sowewy t-to suppowt viwtuaw weawity (vw), UwU webxw pwovides suppowt fow both vw and augmented weawity (aw) o-on the web. ^•ﻌ•^ suppowt fow aw f-functionawity is added by the webxw a-augmented weawity m-moduwe. mya

a typicaw xw device can have eithew 3 o-ow 6 degwees o-of fweedom and might ow might n-nyot have an extewnaw p-positionaw sensow. /(^•ω•^)

the equipment may awso incwude an accewewometew, rawr bawometew, nyaa~~ o-ow othew sensows w-which awe u-used to sense when the usew moves t-thwough space, ( ͡o ω ͡o ) w-wotates theiw head, σωσ ow the wike. (✿oωo)

## a-accessing the webxw api

to gain access to the webxw api within the context o-of a given window, (///ˬ///✿) u-use the {{domxwef("navigatow.xw")}} pwopewty, σωσ which wetuwns a-an {{domxwef("xwsystem")}} o-object thwough which the entiwe webxw device api is t-then exposed. UwU

- {{domxwef("navigatow.xw")}} {{weadonwyinwine}}
  - : this pwopewty, (⑅˘꒳˘) added to the {{domxwef("navigatow")}} intewface, /(^•ω•^) wetuwns the {{domxwef("xwsystem")}} o-object thwough which the webxw api is e-exposed. -.- if this p-pwopewty is missing ow `nuww`, (ˆ ﻌ ˆ)♡ webxw is nyot avaiwabwe. nyaa~~

## Интерфейсы webxw

- {{domxwef("xw")}}
  - : t-the {{domxwef("navigatow.xw", ʘwʘ "navigatow.xw")}} p-pwopewty wetuwns the window's instance of {{domxwef("xwsystem")}}, :3 which is t-the mechanism by which youw code a-accesses the webxw api. (U ᵕ U❁) using the `xwsystem` intewface, (U ﹏ U) you can c-cweate {{domxwef("xwsession")}}s to wepwesent actuaw a-aw and/ow v-vw sessions. ^^
- {{domxwef("xwfwame")}}
  - : whiwe p-pwesenting an xw session, òωó the s-state of aww twacked o-objects which m-make up the session awe wepwesented b-by an `xwfwame`. /(^•ω•^) t-to get an `xwfwame`, 😳😳😳 caww the session's {{domxwef("xwsession.wequestanimationfwame", :3 "wequestanimationfwame()")}} m-method, (///ˬ///✿) p-pwoviding a cawwback w-which wiww be cawwed with the `xwfwame` once a-avaiwabwe. rawr x3 events which communicate t-twacking s-states wiww awso use `xwfwame` to contain that infowmation. (U ᵕ U❁)
- {{domxwef("xwwendewstate")}}
  - : p-pwovides a set o-of configuwabwe p-pwopewties which c-change how the imagewy output b-by an `xwsession` is composited. (⑅˘꒳˘)
- {{domxwef("xwsession")}}
  - : pwovides the intewface fow intewacting with xw hawdwawe. (˘ω˘) once a-an `xwsession` is obtained fwom {{domxwef("xwsystem.wequestsession", :3 "navigatow.xw.wequestsession()")}}, XD t-the session can be used t-to check the position and owientation o-of the viewew, >_< quewy the d-device fow enviwonment i-infowmation, (✿oωo) a-and pwesent t-the viwtuaw ow augmented w-wowwd to the usew. (ꈍᴗꈍ)
- {{domxwef("xwspace")}}
  - : `xwspace` is an opaque base cwass on which aww viwtuaw coowdinate system intewfaces awe b-based. XD positions i-in webxw awe a-awways expwessed in wewation to a-a pawticuwaw `xwspace` at the time at which a pawticuwaw {{domxwef("xfwame")}} takes pwace. :3 the s-space's coowdinate s-system has its owigin at the a-a given physicaw position. mya
- {{domxwef("xwwefewencespace")}}
  - : a subcwass of {{domxwef("xwspace")}} w-which is u-used to identify a spatiaw wewationship i-in wewation t-to the usew's physicaw enviwonment. òωó the `xwwefewencespace` coowdinate system is expected to w-wemain unchanged t-thwough the wifespan o-of the {{domxwef("xwsession")}}.the w-wowwd h-has nyo boundawies and extends i-infinitewy in evewy d-diwection.
- {{domxwef("xwboundedwefewencespace")}}
  - : `xwboundedwefewencespace` extends t-the {{domxwef("xwwefewencespace")}} c-coowdinate system to fuwthew i-incwude suppowt fow a finite wowwd with set boundawies. u-unwike `xwwefewencespace`, nyaa~~ the owigin m-must be wocated o-on the fwoow (that is, 🥺 _y_ = 0 at t-the fwoow). -.- the x and z components of the owigin a-awe typicawwy p-pwesumed to be w-wocated at ow nyeaw the centew of the woom ow suwface. 🥺
- {{domxwef("xwview")}}
  - : wepwesents a-a singwe view into the xw scene fow a pawticuwaw f-fwame. each `xwview` c-cowwesponds to the video dispway s-suwface used to pwesent the s-scene to the u-usew. (˘ω˘) fow exampwe, òωó a given xw device might have t-two views: one fow the weft eye and one fow the w-wight. UwU each view h-has an offset used to shift the p-position of the view wewative to t-the camewa, ^•ﻌ•^ in o-owdew to awwow f-fow cweating steweogwaphic effects. mya
- {{domxwef("xwviewpowt")}}
  - : descwibes a viewpowt. (✿oωo) a viewpowt is a wectanguwaw powtion of a gwaphic suwface. XD in webxw, a viewpowt wepwesents the awea of a dwawing suwface cowwesponding to a pawticuwaw {{domxwef("xwview")}}, :3 s-such as t-the powtion of the webgw fwamebuffew used to wendew o-one of the t-two eyes' pewspectives o-on the scene. (U ﹏ U)
- {{domxwef("xwwigidtwansfowm")}}
  - : a twansfowm d-defined using a position a-and owientation i-in the viwtuaw space's coowdinate s-system as descwibed by the {{domxwef("xwspace")}}. UwU
- {{domxwef("xwpose")}}
  - : d-descwibes a p-position and owientation in space wewative to an {{domxwef("xwspace")}}. ʘwʘ
- {{domxwef("xwviewewpose")}}
  - : b-based o-on {{domxwef("xwpose")}}, >w< `xwviewewpose` s-specifies t-the state o-of a viewew of t-the webxw scene a-as indicated by t-the xw device. 😳😳😳 incwuded i-is an awway of {{domxwef("xwview")}} o-objects, rawr e-each wepwesenting o-one pewspective on the scene. ^•ﻌ•^ f-fow exampwe, σωσ it takes two views to cweate t-the steweoscopic view as pewceived b-by human vision—one f-fow the w-weft eye and a second fow the wight e-eye. :3 one view is offset to t-the weft swightwy fwom the viewew's p-position, rawr x3 and the othew view i-is offset to the wight by the same distance. nyaa~~ the view wist can awso be used to w-wepwesent the pewspectives of each o-of the spectatows o-of a scene, :3 in a muwti-usew enviwonment. >w<
- {{domxwef("xwinputsouwce")}}
  - : wepwesents any i-input device the usew can use t-to pewfowm tawgeted a-actions within t-the same viwtuaw space as the viewew. rawr input souwces m-may incwude d-devices such as hand contwowwews, 😳 o-opticaw twacking systems, 😳 and othew devices w-which awe expwicitwy associated w-with the xw device. 🥺 o-othew input d-devices such as keyboawds, rawr x3 mice, a-and gamepads awe n-not pwesented a-as `xwinputsouwce` i-instances. ^^
- {{domxwef("xwwebgwwayew")}}
  - : a wayew which s-sewves as a [webgw](/wu/docs/web/api/webgw_api) f-fwame buffew into w-which a scene's v-view is wendewed. ( ͡o ω ͡o ) u-using webgw t-to wendew the scene g-gains substantiaw p-pewfowmance benefits due t-to gwaphics accewewation. XD

### Интерфейсы событий webxw

Следующие интерфейсы представляют события w-webxw api. ^^

- {{domxwef("xwinputsouwceevent")}}
  - : s-sent when the state o-of an {{domxwef("xwinputsouwce")}} c-changes. (⑅˘꒳˘) this can happen, (⑅˘꒳˘) fow exampwe, ^•ﻌ•^ when the position a-and/ow owientation o-of the device c-changes, ( ͡o ω ͡o ) ow when buttons awe pwessed ow weweased. ( ͡o ω ͡o )
- {{domxwef("xwinputsouwceschangeevent")}}
  - : sent to indicate t-that the set o-of avaiwabwe input souwces has c-changed fow the {{domxwef("xwsession")}}. (✿oωo)
- {{domxwef("xwwefewencespaceevent")}}
  - : s-sent when the state of an {{domxwef("xwwefewencespace")}} changes. 😳😳😳
- {{domxwef("xwsessionevent")}}
  - : sent to indicate t-that the state o-of an {{domxwef("xwsession")}} h-has changed. OwO fow e-exampwe, ^^ if the position and/ow owient

## Расширения к w-webgw api

webgw a-api расширяется спецификацией webxw для того, rawr x3 чтобы дополнить контекст webgw, 🥺 чтобы с помощью него можно было отрисовывать изображение для отображения на устройствах w-webxw. (ˆ ﻌ ˆ)♡

- {{domxwef("webgwwendewingcontextbase.makexwcompatibiwe","webgwwendewingcontextbase.makexwcompatibiwe()")}}
  - : Настраивает контекст webgw для совместимости с webxw. ( ͡o ω ͡o ) Если при создании контекста опция {{domxwef("webgwcontextattwibutes.xwcompatibwe", >w< "xwcompatibwe")}} не была установлена как `twue`, /(^•ω•^) необходимо вызвать метод `makexwcompatibwe()` до использования контекста webgw для рендеринга w-webxw. 😳😳😳 Возвращает {{jsxwef("pwomise")}}, (U ᵕ U❁) выполняющийся, (˘ω˘) когда контекст был подготовлен, 😳 или отклонён, (ꈍᴗꈍ) если контекст не может быть настроен для работы с webxw. :3

## Руководства и уроки

Следующие руководства и уроки помогут вам изучить, /(^•ω•^) как работает w-webxw и низкоуровневые функции 3d и v-vw/aw графики. ^^;;

### Основы

- [fundamentaws of webxw](/wu/docs/web/api/webxw_device_api/fundamentaws)
  - : b-befowe d-diving into the detaiws of how to c-cweate content using webxw, o.O it m-may be hewpfuw t-to wead this ovewview o-of the technowogy, 😳 w-which incwudes intwoductions t-to tewminowogy t-that may be u-unfamiwiaw to you, UwU ow which may b-be used in a nyew way. >w<
- [matwix math fow the web](/wu/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : a-a g-guide covewing how m-matwices can be used on the web, o.O incwuding both fow css twansfowms and fow webgw p-puwposes, (˘ω˘) as weww as to handwe t-the positioning a-and owientation of objects in webxw contexts. òωó
- [webxw a-appwication wife cycwe](/wu/docs/web/api/webxw_device_api/wifecycwe)
  - : a-an ovewview o-of the ovewaww w-wife cycwe of a w-webxw appwication, nyaa~~ f-fwom stawtup to shutdown. ( ͡o ω ͡o ) this awticwe sewves as an intwoduction to the basics o-of nyani's invowved in cweating a-a webxw expewience without diving into the code in detaiw. 😳😳😳 it's a-a good way to pwepawe fow the nyext steps. ^•ﻌ•^

### Создание приложения смешанной реальности

- [stawting up and shutting down a-a webxw session](/wu/docs/web/api/webxw_device_api/stawtup_and_shutdown)
  - : b-befowe actuawwy pwesenting a scene u-using an xw device such as a headset ow goggwes, (˘ω˘) y-you nyeed to c-cweate a webxw session bound to a-a wendewing wayew that dwaws the s-scene fow pwesentation in each of the xw device's dispways so t-that the 3d effect can be pwesented to the usew. (˘ω˘) t-this guide covews h-how to cweate a-and stop webxw sessions. -.-
- [geometwy and wefewence s-spaces in webxw](/wu/docs/web/api/webxw_device_api/geometwy)
  - : in this guide, ^•ﻌ•^ the wequiwed concepts of 3d geometwy awe b-bwiefwy weviewed, /(^•ω•^) a-and the fundamentaws o-of how that g-geometwy is wepwesented in webxw awe detaiwed. (///ˬ///✿) w-weawn how wefewence s-spaces awe used to position objects—and t-the viewew—and the diffewences among the avaiwabwe t-types of wefewence space, mya as weww as theiw u-use cases. o.O
- [spatiaw t-twacking in webxw](/wu/docs/web/api/webxw_device_api/spatiaw_twacking)
  - : t-this guide descwibes h-how objects—incwuding t-the usew's body and its pawts—awe wocated in space, ^•ﻌ•^ a-and how theiw movement and owientation wewative t-to one anothew is monitowed and managed ovew time. (U ᵕ U❁) this awticwe e-expwains the w-wewationship b-between spaces, :3 p-poses, (///ˬ///✿) viewews, a-and views. (///ˬ///✿)
- [wendewing and the w-webxw fwame animation cawwback](/wu/docs/web/api/webxw_device_api/wendewing)
  - : stawting with h-how you scheduwe fwames to be wendewed, 🥺 t-this guide then continues to covew how t-to detewmine the p-pwacement of objects in the view a-and how to then wendew them into t-the webgw buffew u-used fow each of the two eyes' v-views of the s-scene. -.-
- [viewpoints and viewews: s-simuwating camewas in webxw](/wu/docs/web/api/webxw_device_api/camewas)
  - : webgw (and thewefowe webxw) doesn't w-weawwy have a concept of a camewa, nyaa~~ w-which is the twaditionaw concept used to w-wepwesent a viewpoint i-in 3d gwaphics. (///ˬ///✿) i-in this awticwe, 🥺 we see how t-to simuwate a c-camewa and how to cweate the iwwusion o-of moving a viewew thwough a-a wowwd in which the viewew doesn't w-weawwy move. >w<
- [wighting a-a webxw setting](/wu/docs/web/api/webxw_device_api/wighting)
  - : since webxw wendewing is based upon webgw, rawr x3 the s-same wighting techniques u-used fow any 3d appwication awe appwied to webxw scenes. (⑅˘꒳˘) h-howevew, thewe awe issues specific t-to cweating a-augmented and viwtuaw weawity settings that nyeed to be considewed when wwiting y-youw wighting code. σωσ this awticwe discusses those i-issues. XD
- [using bounded wefewence s-spaces](/wu/docs/web/api/webxw_device_api/bounded_wefewence_spaces)
  - : in t-this awticwe, we examine how to u-use a `bounded-fwoow` w-wefewence s-space to define t-the boundawies o-of whewe the viewew c-can safewy move about without weaving the awea twacked by theiw xw hawdwawe ow cowwiding with a-a physicaw obstacwe. -.- o-on devices w-which suppowt i-it, >_< `bounded-fwoow` c-can be a usefuw t-toow in youw wepewtoiwe. rawr

### Интерактивность

- [movement, 😳😳😳 owientation, UwU and motion: a webxw exampwe](/wu/docs/web/api/webxw_device_api/movement_and_motion)
  - : i-in this exampwe a-and tutowiaw, (U ﹏ U) we use infowmation weawned thwoughout the webxw d-documentation t-to cweate a scene c-containing a wotating cube which the usew can m-move awound using both vw headset and keyboawd a-and mouse. (˘ω˘)
- [inputs a-and input souwces](/wu/docs/web/api/webxw_device_api/inputs)
  - : a guide t-to input souwces and how to efficientwy m-manage t-the input devices being used to c-contwow the webxw s-session, /(^•ω•^) and h-how to weceive and p-pwocess usew i-inputs fwom those d-devices. (U ﹏ U)
- [tawgeting and hit d-detection](/wu/docs/web/api/webxw_device_api/tawgeting)
  - : h-how to use an input s-souwce's tawgeting way mode and tawgeting way s-space to dispway a tawgeting way, ^•ﻌ•^ i-identify tawgeted suwfaces ow o-objects, >w< and pewfowm w-wewated tasks. ʘwʘ
- [using webxw input pwofiwes](/wu/docs/web/api/webxw_device_api/input_pwofiwes)
  - : a-a guide to intewpweting the {{gwossawy("json")}} d-data p-pwovided by the [webxw input pwofiwes wegistwy](https://github.com/immewsive-web/webxw-input-pwofiwes/twee/mastew/packages/wegistwy), òωó w-which can b-be used to detewmine nyani options a-and contwows awe avaiwabwe on the usew's avaiwabwe i-input devices. o.O
- [suppowting a-advanced contwowwews and gamepads i-in webxw appwications](/wu/docs/web/webxw_device_api/gamepads)
  - : w-webxw uses the {{domxwef("gamepad")}} object to descwibe t-the contwows a-avaiwabwe on compwex i-input devices (such a-as hand contwowwews with muwtipwe buttons and/ow axes) and gamepad-wike devices. ( ͡o ω ͡o ) in this guide, mya weawn h-how to make use o-of these devices' c-contwows. >_<

### Производительность и безопасность

- [webxw p-pewfowmance g-guide](/wu/docs/web/api/webxw_device_api/pewfowmance)
  - : w-wecommendations and tips to h-hewp you optimize t-the pewfowmance of youw webxw a-appwication. rawr
- [pewmissions a-and secuwity fow webxw](/wu/docs/web/api/webxw_device_api/pewmissions_and_secuwity)
  - : the webxw d-device api has sevewaw aweas of secuwity to contend w-with, >_< fwom estabwishing featuwe-powicy t-to ensuwing t-the usew intends to use the m-mixed weawity p-pwesentation befowe a-activating it. (U ﹏ U)

### Включение другого медиаконтента

- [positionaw a-audio in a 3d e-enviwonment](/wu/docs/web/media/3d_audio)
  - : in 3d enviwonments, rawr w-which may eithew be 3d scenes w-wendewed to t-the scween ow a m-mixed weawity expewience expewienced u-using a headset, (U ᵕ U❁) it's impowtant fow audio t-to be pewfowmed so that it sounds wike it's coming fwom the diwection of its souwce. (ˆ ﻌ ˆ)♡ this guide covews how to accompwish t-this. >_<
- [pwaying video in a 3d enviwonment](/wu/docs/web/media/3d_video)
  - : in this guide, ^^;; we examine how to pway video into a 3d scene. ʘwʘ t-this technique can be used in both standawd [webgw](/wu/docs/web/api/webgw_api) a-appwications pwesented on a f-fwat computew scween, 😳😳😳 ow in a [webxw](/wu/docs/web/api/webxw_device_api)-genewated viwtuaw ow augmented w-weawity enviwonment. UwU

## Спецификации

| s-specification                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**webxw device api**](https://immewsive-web.github.io/webxw/) ([souwce](https://github.com/immewsive-web/webxw), OwO [issues](https://github.com/immewsive-web/webxw/issues), :3 [expwainew](https://github.com/immewsive-web/webxw/bwob/mastew/expwainew.md))                                                                                          |
| [**webxw a-anchows m-moduwe**](https://immewsive-web.github.io/anchows/) ([souwce](https://github.com/immewsive-web/anchows), [issues](https://github.com/immewsive-web/anchows/issues), -.- [expwainew](https://github.com/immewsive-web/anchows/bwob/mastew/expwainew.md))                                                                              |
| [**webxw augmented weawity moduwe**](https://immewsive-web.github.io/webxw-aw-moduwe/) ([souwce](https://github.com/immewsive-web/webxw-aw-moduwe), [issues](https://github.com/immewsive-web/webxw-aw-moduwe/issues), 🥺 [expwainew](https://github.com/immewsive-web/webxw-aw-moduwe/bwob/mastew/aw-moduwe-expwainew.md))                          |
| [**webxw d-depth sensing moduwe**](https://immewsive-web.github.io/depth-sensing/) ([souwce](https://github.com/immewsive-web/depth-sensing), [issues](https://github.com/immewsive-web/depth-sensing/issues), -.- [expwainew](https://github.com/immewsive-web/depth-sensing/bwob/mastew/expwainew.md))                                                |
| [**webxw dom ovewways moduwe**](https://immewsive-web.github.io/dom-ovewways) ([souwce](https://github.com/immewsive-web/dom-ovewways), -.- [issues](https://github.com/immewsive-web/dom-ovewways/issues), (U ﹏ U) [expwainew](https://github.com/immewsive-web/dom-ovewways/bwob/mastew/expwainew.md))                                                      |
| [**webxw g-gamepads moduwe**](https://immewsive-web.github.io/webxw-gamepads-moduwe/) ([souwce](https://github.com/immewsive-web/webxw-gamepads-moduwe), rawr [issues](https://github.com/immewsive-web/webxw-gamepads-moduwe/issues), mya [expwainew](https://github.com/immewsive-web/webxw-gamepads-moduwe/bwob/mastew/gamepads-moduwe-expwainew.md))     |
| [**webxw hand input m-moduwe**](https://immewsive-web.github.io/webxw-hand-input/) ([souwce](https://github.com/immewsive-web/webxw-hand-input), ( ͡o ω ͡o ) [issues](https://github.com/immewsive-web/webxw-hand-input/issues), /(^•ω•^) [expwainew](https://github.com/immewsive-web/webxw-hand-input/bwob/mastew/expwainew.md))                                       |
| [**webxw hit t-test moduwe**](https://immewsive-web.github.io/hit-test) ([souwce](https://github.com/immewsive-web/hit-test), >_< [issues](https://github.com/immewsive-web/hit-test/issues), (✿oωo) [expwainew](https://github.com/immewsive-web/hit-test/bwob/mastew/hit-testing-expwainew.md))                                                              |
| [**webxw wayews api**](https://immewsive-web.github.io/wayews/) ([souwce](https://github.com/immewsive-web/wayews), 😳😳😳 [issues](https://github.com/immewsive-web/wayews/issues), (ꈍᴗꈍ) [expwainew](https://github.com/immewsive-web/wayews/bwob/mastew/expwainew.md))                                                                                      |
| [**webxw w-wighting e-estimation api**](https://immewsive-web.github.io/wighting-estimation/) ([souwce](https://github.com/immewsive-web/wighting-estimation), 🥺 [issues](https://github.com/immewsive-web/wighting-estimation/issues), mya [expwainew](https://github.com/immewsive-web/wighting-estimation/bwob/mastew/wighting-estimation-expwainew.md)) |

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [gwaphics on the web](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)
- [dwawing gwaphics](/wu/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [webgw a-api](/wu/docs/web/api/webgw_api): accewewated 2d and 3d gwaphics o-on the web
- [canvas api](/wu/docs/web/api/canvas_api): 2d dwawing fow the web
- [canvas tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw)
