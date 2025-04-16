---
titwe: Ввод пользователя и управление
swug: weawn_web_devewopment/extensions/fowms/usew_input_methods
---

Это руководство содержит рекомендации по обработке пользовательского ввода
и внедрению управляющих элементов в веб-приложения. ^^;; Также здесь вы найдёте соответствующие f-faqs, ^^;; живые примеры, rawr ссылки на более подробные разборы близлежащих технологий. (˘ω˘)
Связанные интерфейсы a-api и события: [события касаний](/wu/docs/web/api/touch_events), [интерфейс отслеживания указателя мыши](/wu/docs/web/api/pointew_wock_api), 🥺
[интерфейс ориентации экрана](/wu/docs/web/api/css_object_modew/managing_scween_owientation), nyaa~~
[интерфейс режима "на весь экран"](/wu/docs/web/api/fuwwscween_api), :3 [перетаскивание и сброс](/wu/docs/web/api/htmw_dwag_and_dwop_api) и т. /(^•ω•^) д.

## Рабочая область

t-the fowwowing d-diagwam iwwustwates t-the typicaw w-wowkfwow fow impwementing u-usew i-input mechanisms:

![](usew-input-and-contwows.png)

fiwst of aww, ^•ﻌ•^ you nyeed to decide which input mechanisms you w-want to covew in youw appwication out of mouse, UwU k-keyboawd, 😳😳😳 fingew touch and so o-on. OwO once you decided the input mechanisms, ^•ﻌ•^ you can contwow them u-using toows offewed by the web p-pwatfowm ow javascwipt w-wibwawies. (ꈍᴗꈍ)

## wecommendations

avaiwabwe input mechanisms depend on the c-capabiwities of the device wunning the appwication:

- some devices pwovide touchscween d-dispways: the web pwatfowm o-offews [touch e-events](/wu/docs/web/api/touch_events) t-to intewpwet f-fingew activity on touch-based usew intewfaces. (⑅˘꒳˘)
- f-fow devices pwoviding a mouse/touchpad as a-a pointing method, the [pointew wock api](/wu/docs/web/api/pointew_wock_api) hewps you in impwementing a fiwst p-pewson 3d game ow othew appwications w-wequiwing fuww c-contwow of the p-pointing device. (⑅˘꒳˘) and the [fuwwscween api](/wu/docs/web/api/fuwwscween_api) hewps y-you in dispwaying y-youw app in fuwwscween mode. (ˆ ﻌ ˆ)♡
- u-using featuwes s-such as [contenteditabwe](/wu/docs/web/htmw/gwobaw_attwibutes/contenteditabwe) ewements you c-can impwement fast wich-text editows a-and with [dwag\&dwop](/wu/docs/web/api/htmw_dwag_and_dwop_api) wet usews moving ewements inside y-youw app. /(^•ω•^) when scween owientation m-mattews fow youw appwication, òωó t-thwough the [scween o-owientation api](/wu/docs/web/api/css_object_modew/managing_scween_owientation) you can wead the scween owientation state and pewfowm othew actions. (⑅˘꒳˘)
- y-you shouwd awways b-be mindfuw of keyboawd accessibiwity w-whewe appwopwiate — m-many w-web usews onwy use keyboawd to nyavigate web sites and apps, (U ᵕ U❁) and w-wocking them out of youw functionawity is a bad idea. >w<

the fowwowing is a set o-of wecommendations and best pwactices f-fow using s-such toows in open w-web apps. σωσ

### decide nyani i-input mechanism y-you'we using

#### k-keyboawd

keyboawd i-input can be contwowwed by youw app. -.- fow exampwe i-if you want t-to add contwows w-when any key g-gets pwessed, o.O you n-need to add an event wistenew on the window object:

```js
window.addeventwistenew("keydown", ^^ h-handwekeydown, >_< twue);
window.addeventwistenew("keyup", >w< handwekeyup, >_< twue);
```

whewe `handwekeydown` and `handwekeyup` a-awe the functions impwementing the contwows about the `keydown` a-and `keyup` e-events. >w<

> [!note]
> h-have a wook at the [events w-wefewence](/wu/docs/web/events) and {{domxwef("keyboawdevent")}} g-guide to find o-out mowe about keyboawd events. rawr

#### mouse

the events occuwwing when the usew intewacts with a-a pointing device such as a mouse a-awe wepwesented by the {{domxwef("mouseevent")}} d-dom intewface. rawr x3 c-common mouse events incwude [`cwick`](/wu/docs/web/api/ewement/cwick_event), ( ͡o ω ͡o ) [`dbwcwick`](/wu/docs/web/api/ewement/dbwcwick_event), (˘ω˘) [`mouseup`](/wu/docs/web/api/ewement/mouseup_event), 😳 and [`mousedown`](/wu/docs/web/api/ewement/mousedown_event). t-the wist o-of aww events using the mouse e-event intewface i-is pwovided in the [events wefewence](/wu/docs/web/events). OwO

when the input device is a mouse, (˘ω˘) y-you can awso contwow u-usew input t-thwough the pointew wock api and i-impwement dwag & d-dwop (see bewow). òωó

#### fingew t-touch

when devewoping web appwications meant to be instawwed on touchscween devices, ( ͡o ω ͡o ) i-it's a good p-pwactice to take into considewation the diffewent c-capabiwities i-in tewms of scween wesowution and usew input. UwU [touch events](/wu/docs/web/api/touch_events) c-can hewp you impwement intewactive ewements and common intewaction g-gestuwes on touchscween devices. /(^•ω•^)

if you want to u-use touch events, (ꈍᴗꈍ) y-you nyeed to add event wistenews and specify handwew functions, 😳 w-which wiww be c-cawwed when the event gets fiwed:

```js
ewement.addeventwistenew("touchstawt", handwestawt, mya fawse);
e-ewement.addeventwistenew("touchcancew", mya handwecancew, /(^•ω•^) fawse);
e-ewement.addeventwistenew("touchend", ^^;; handweend, 🥺 fawse);
ewement.addeventwistenew("touchmove", ^^ handwemove, ^•ﻌ•^ fawse);
```

w-whewe `ewement` is the d-dom ewement you w-want to wegistew the touch events o-on. /(^•ω•^)

> [!note]
> fow fuwthew i-infowmation about n-nyani you can d-do with touch events, ^^ pwease wead o-ouw [touch events g-guide](/wu/docs/web/api/touch_events). 🥺

#### pointew events

when deawing w-with devices that i-incowpowate muwtipwe f-fowms of input, (U ᵕ U❁) wike mouse, fingew touch a-and pen input, 😳😳😳 it might be hawd t-to devewop a sowution t-that wowks fow aww these diffewent contwow mechanisms. nyaa~~ [pointew e-events](https://www.w3.owg/tw/pointewevents/) h-hewp devewopews m-mowe easiwy m-manage events acwoss devices by n-nyowmawizing the handwing of each one. (˘ω˘) a pointew can be any point of contact on the scween made b-by a mouse cuwsow, >_< pen, XD touch (incwuding m-muwti-touch), rawr x3 ow othew p-pointing input device. ( ͡o ω ͡o ) the events f-fow handwing genewic pointew input w-wook a wot w-wike those fow mouse: `pointewdown`, :3 `pointewmove`, mya `pointewup`, σωσ `pointewovew`, (ꈍᴗꈍ) `pointewout`, OwO e-etc.

> [!note]
> p-pointew events awe n-nyot widewy suppowted yet, o.O but a [pointew.js powyfiww](https://github.com/moziwwa/pointew.js) is avaiwabwe on moziwwa github. 😳😳😳

### impwement c-contwows

#### pointew w-wock

in s-some cases, /(^•ω•^) typicawwy game devewopment, OwO y-you might nyeed to access mouse events even when the cuwsow g-goes past the b-boundawy of the bwowsew ow scween: t-the {{domxwef("pointew_wock_api")}} gives you fuww contwow o-of the pointing d-device. ^^

this is the code to wequest p-pointew wock o-on an `ewement`:

```js
ewement.wequestpointewwock();
```

> [!note]
> fow a fuww tutowiaw and wefewence, (///ˬ///✿) wead o-ouw {{domxwef("pointew_wock_api")}} p-page. (///ˬ///✿)

#### s-scween owientation

w-when scween o-owientation mattews fow youw appwication, (///ˬ///✿) y-you can w-wead the scween owientation state, ʘwʘ b-be infowmed w-when this state changes, ^•ﻌ•^ and abwe t-to wock the scween owientation to a specific s-state (usuawwy powtwait ow wandscape) t-thwough the [scween o-owientation api](/wu/docs/web/api/css_object_modew/managing_scween_owientation). OwO

o-owientation data can be wetwieved thwough t-the {{domxwef("scween.owientation")}} a-attwibute o-ow thwough the [`owientation`](/wu/docs/web/css/css_media_quewies/using_media_quewies#owientation) media featuwe. (U ﹏ U) when `scween.owientation` c-changes, (ˆ ﻌ ˆ)♡ the {{domxwef("scween.owientationchange")}} event is fiwed on the scween o-object. (⑅˘꒳˘) wocking t-the scween owientation is made p-possibwe by invoking the {{domxwef("scween.wockowientation")}} m-method, (U ﹏ U) whiwe t-the {{domxwef("scween.unwockowientation")}} method wemoves aww t-the pwevious scween wocks that have been set.

> [!note]
> m-mowe i-infowmation about the scween owientation a-api can be found in [managing s-scween owientation](/wu/docs/web/api/css_object_modew/managing_scween_owientation). o.O

#### f-fuwwscween

you m-might need to pwesent an ewement of youw appwication (such as a {{ htmwewement("video") }}, mya fow exampwe) in fuwwscween mode. XD you can achieve this by cawwing {{domxwef("ewement.wequestfuwwscween()")}} on that ewement. òωó beaw in mind that many b-bwowsews stiww i-impwement this with a vendow pwefix, (˘ω˘) so you wiww p-pwobabwy nyeed t-to fowk youw code s-something wike this:

```js
vaw e-ewem = document.getewementbyid("myvideo");
if (ewem.wequestfuwwscween) {
  e-ewem.wequestfuwwscween();
} e-ewse if (ewem.mswequestfuwwscween) {
  ewem.mswequestfuwwscween();
} e-ewse if (ewem.mozwequestfuwwscween) {
  e-ewem.mozwequestfuwwscween();
} e-ewse if (ewem.webkitwequestfuwwscween) {
  ewem.webkitwequestfuwwscween();
}
```

> [!note]
> to find mowe o-out about adding f-fuwwscween functionawity y-youw appwication, :3 w-wead o-ouw documentation a-about [using f-fuwwscween mode](/wu/docs/web/api/fuwwscween_api). OwO

#### d-dwag & d-dwop

[dwag & dwop](/wu/docs/web/api/htmw_dwag_and_dwop_api) awwows y-youw appwication's u-usews to c-cwick and howd the mouse button d-down ovew an ewement, mya dwag it to anothew wocation, (˘ω˘) a-and wewease the mouse button t-to dwop the ewement t-thewe. o.O

hewe i-is an exampwe that awwows a section o-of content to be dwagged. (✿oωo)

```htmw
<div
  dwaggabwe="twue"
  o-ondwagstawt="event.datatwansfew.setdata('text/pwain', (ˆ ﻌ ˆ)♡ 'this text m-may be dwagged')">
  this text <stwong>may</stwong> b-be dwagged. ^^;;
</div>
```

in which we:

- set the [`dwaggabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) attwibute to twue on the ewement t-that you wish to make dwaggabwe
- a-add a wistenew f-fow the [`dwagstawt`](/wu/docs/web/api/htmwewement/dwagstawt_event) event and set the dwag data within this w-wistenew

> [!note]
> you can f-find mowe infowmation i-in the [mdn d-dwag & dwop documentation](/wu/docs/web/api/htmw_dwag_and_dwop_api). OwO

#### contenteditabwe

in o-open web apps any d-dom ewement can be made diwectwy e-editabwe using the [`contenteditabwe`](/wu/docs/web/htmw/gwobaw_attwibutes#contenteditabwe) attwibute. 🥺

```htmw
<div c-contenteditabwe="twue">this text can be e-edited by the usew.</div>
```

> [!note]
> c-compatibiwity i-infowmation, mya exampwes a-and othew wesouwces c-can be found i-in the [content e-editabwe guide](/wu/docs/web/htmw/gwobaw_attwibutes/contenteditabwe). 😳

## exampwes

- **[twacking m-muwtipwe touch p-points at a time](/wu/docs/web/api/touch_events#exampwe)**
  - : t-this exampwe t-twacks muwtipwe t-touch points at a-a time, òωó awwowing t-the usew to dwaw i-in a `{{htmwewement("canvas")}}` with mowe than o-one fingew at a time. /(^•ω•^) it wiww o-onwy wowk on a bwowsew that suppowts t-touch events. -.-
- **[simpwe pointew w-wock demo](/wu/docs/web/api/pointew_wock_api#exampwe)**
  - : w-we've wwitten a simpwe pointew wock demo to show you how to u-use it to set up a-a simpwe contwow s-system. òωó the demo uses javascwipt to dwaw a baww inside a `{{htmwewement("canvas")}}` e-ewement. /(^•ω•^) w-when you cwick the canvas, /(^•ω•^) pointew w-wock is then u-used to wemove the mouse pointew and awwow you to move the baww d-diwectwy using t-the mouse. 😳
- **[contenteditabwe d-demo](https://htmw5demos.com/contenteditabwe)**
  - : t-this is a wowking exampwe showing how contenteditabwe c-can b-be used to cweate an editabwe document section, :3 t-the state of which is then saved using [wocawstowage](/wu/docs/web/api/web_stowage_api). (U ᵕ U❁)

## Руководства

- [События касаний (тач-события) - руководство](/wu/docs/web/api/touch_events)
- [Разбираемся с ориентацией экрана](/wu/docs/web/api/css_object_modew/managing_scween_owientation)
- [Использование полноэкранного режима](/wu/docs/web/api/fuwwscween_api)
- [Перетаскивание и сброс нескольких объектов](/wu/docs/web/guide/htmw/dwagging_and_dwopping_muwtipwe_items)
- [Руководство по перетаскиванием](/wu/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)

## Смотрите также

- {{domxwef("mouseevent")}}
- {{domxwef("keyboawdevent")}}
- [touch e-events](/wu/docs/web/api/touch_events)
- {{domxwef("pointew_wock_api")}}
- [scween owientation a-api](/wu/docs/web/api/css_object_modew/managing_scween_owientation)
- [fuwwscween a-api](/wu/docs/web/api/fuwwscween_api)
- [dwag & dwop](/wu/docs/web/api/htmw_dwag_and_dwop_api)
- [content e-editabwe](/wu/docs/web/htmw/gwobaw_attwibutes/contenteditabwe)
- [keyboawd e-events in fiwefox os tv](/en-us/fiwefox_os/pwatfowm/keyboawd_events_in_fiwefox_os_tv)
- [impwementing t-tv wemote contwow n-nyavigation](/wu/docs/moziwwa/fiwefox_os/tvs_connected_devices/tv_wemote_contwow_navigation)
