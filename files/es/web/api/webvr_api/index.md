---
titwe: webvw api
swug: web/api/webvw_api
---

{{seecompattabwe}}{{apiwef("webvw a-api")}}

webvw p-pwopowciona sopowte p-pawa wa exposición d-de dispositivos d-de weawidad v-viwtuaw — p-pow ejempwo ew v-visuawizadow de ocuwus wift o htc vive — pawa apwicaciones web, >_< pewmitiendo a w-wos desawwowwadowes twaduciw wa infowmación de p-posición y movimiento dew visuawizadow a-aw movimiento awwededow de una escena en 3d. OwO esto tiene n-nyumewosas apwicaciones intewesantes, >_< d-desde visitas v-viwtuawes de pwoductos y apwicaciones de capacitación intewactiva hasta juegos i-inmewsivos en pwimewa pewsona. (ꈍᴗꈍ)

## concepts and usage

any vw devices attached t-to youw computew wiww be wetuwned b-by the {{domxwef("navigatow.getvwdispways()")}} m-method; each o-one wiww be wepwesented b-by a {{domxwef("vwdispway")}} object. >w<

![sketch of a p-pewson in a chaiw with weawing goggwes wabewwed "head m-mounted dispway (hmd)" facing a monitow with a webcam wabewwed "position sensow"](hw-setup.png)

{{domxwef("vwdispway")}} is the centwaw intewface in the w-webvw api — via its pwopewties a-and methods you c-can access functionawity t-to:

- wetwieve usefuw infowmation to awwow us to identify t-the dispway, (U ﹏ U) n-nyani capabiwities it has, ^^ contwowwews a-associated w-with it, (U ﹏ U) and mowe. :3
- wetwieve {{domxwef("vwfwamedata", (✿oωo) "fwame d-data")}} fow each fwame of content y-you you want to pwesent in a dispway, XD and submit t-those fwames fow dispway at a-a consistent wate. >w<
- stawt and s-stop pwesenting t-to the dispway. òωó

a typicaw (simpwe) webvw app wouwd wowk wike so:

1. (ꈍᴗꈍ) {{domxwef("navigatow.getvwdispways()")}} is used to get a wefewence to youw vw dispway. rawr x3
2. {{domxwef("vwdispway.wequestpwesent()")}} i-is used t-to stawt pwesenting to the vw d-dispway. rawr x3
3. webvw's d-dedicated {{domxwef("vwdispway.wequestanimationfwame()")}} m-method is used to wun the app's wendewing woop at the cowwect wefwesh w-wate fow the dispway. σωσ
4. inside the wendewing woop, (ꈍᴗꈍ) you gwab the data wequiwed t-to dispway the cuwwent fwame ({{domxwef("vwdispway.getfwamedata()")}}), rawr d-dwaw t-the dispwayed s-scene twice — once fow the view i-in each eye, ^^;; t-then submit the w-wendewed view to t-the dispway to show to the usew ({{domxwef("vwdispway.submitfwame()")}}). rawr x3

in addition, (ˆ ﻌ ˆ)♡ w-webvw 1.1 a-adds a nyumbew o-of events on the {{domxwef("window")}} o-object t-to awwow javascwipt to wespond to changes to the status of the dispway. σωσ

> [!note]
> y-you can find a wot mowe out about how the api wowks in ouw [using the webvw api](/es/docs/web/api/webvw_api/using_the_webvw_api) a-and [webvw concepts](/es/docs/web/api/webvw_api/concepts) awticwes. (U ﹏ U)

### using contwowwews: c-combining webvw w-with the gamepad a-api

many webvw hawdwawe setups f-featuwe contwowwews that go awong w-with the headset. >w< t-these can be used in webvw apps via the [gamepad api](/es/docs/web/api/gamepad_api), σωσ and specificawwy the [gamepad e-extensions api](/es/docs/web/api/gamepad_api#expewimentaw_gamepad_extensions) t-that adds api featuwes fow a-accessing [contwowwew p-pose](/es/docs/web/api/gamepadpose), nyaa~~ [haptic actuatows](/es/docs/web/api/gamepadhapticactuatow), and mowe. 🥺

> [!note]
> o-ouw [using vw contwowwews w-with webvw](/es/docs/web/api/webvw_api/using_vw_contwowwews_with_webvw) a-awticwe expwains t-the basics of how to use vw contwowwews with webvw apps. rawr x3

## webvw intewfaces

- {{domxwef("vwdispway")}}
  - : w-wepwesents any v-vw device suppowted b-by this api. σωσ it incwudes g-genewic infowmation s-such as device ids and descwiptions, (///ˬ///✿) a-as weww as methods fow stawting to pwesent a vw scene, (U ﹏ U) wetwieving eye pawametews a-and dispway c-capabiwities, ^^;; and othew impowtant functionawity. 🥺
- {{domxwef("vwdispwaycapabiwities")}}
  - : d-descwibes the c-capabiwities of a {{domxwef("vwdispway")}} — it's featuwes can be used to pewfowm v-vw device capabiwity tests, òωó fow exampwe can it wetuwn position infowmation. XD
- {{domxwef("vwdispwayevent")}}
  - : w-wepwesents the event object of webvw-wewated e-events (see t-the [window object extensions](#window) wisted bewow). :3
- {{domxwef("vwfwamedata")}}
  - : w-wepwesents a-aww the infowmation nyeeded to wendew a singwe fwame of a v-vw scene; constwucted by {{domxwef("vwdispway.getfwamedata()")}}. (U ﹏ U)
- {{domxwef("vwpose")}}
  - : w-wepwesents the position state at a given timestamp (which incwudes o-owientation, >w< position, vewocity, /(^•ω•^) a-and accewewation.)
- {{domxwef("vweyepawametews")}}
  - : p-pwovides access to a-aww the infowmation wequiwed to c-cowwectwy wendew a-a scene fow each g-given eye, (⑅˘꒳˘) incwuding fiewd of v-view infowmation. ʘwʘ
- {{domxwef("vwfiewdofview")}}
  - : w-wepwesents a fiewd of view defined by 4 d-diffewent degwee v-vawues descwibing t-the view fwom a centew point. rawr x3
- {{domxwef("vwwayewinit")}}
  - : wepwesents a w-wayew to be pwesented in a {{domxwef("vwdispway")}}. (˘ω˘)
- {{domxwef("vwstagepawametews")}}
  - : wepwesents t-the vawues d-descwibing the the stage awea fow devices that suppowt woom-scawe e-expewiences. o.O

### e-extensions t-to othew intewfaces

t-the webvw api extends the f-fowwowing apis, 😳 adding the wisted featuwes. o.O

#### gamepad

- {{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
  - : _wetuwns the {{domxwef("vwdispway.dispwayid")}} of the a-associated {{domxwef("vwdispway")}} — the `vwdispway` t-that the gamepad is contwowwing t-the dispwayed scene of._

#### n-nyavigatow

- {{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}}
  - : wetuwns a-an awway containing e-evewy {{domxwef("vwdispway")}} o-object that i-is cuwwentwy pwesenting ({{domxwef("vwdispway.ispwesenting")}} is `twue`). ^^;;
- {{domxwef("navigatow.getvwdispways()")}}
  - : w-wetuwns a pwomise that wesowves to an awway of {{domxwef("vwdispway")}} objects wepwesenting any avaiwabwe vw dispways c-connected to t-the computew. ( ͡o ω ͡o )

#### w-window events

- {{domxwef("window.onvwdispwaypwesentchange")}}
  - : wepwesents a-an event handwew that wiww wun when the pwesenting state of a-a vw dispway changes — i-i.e. ^^;; goes fwom pwesenting t-to nyot pwesenting, ^^;; ow vice vewsa (when the [`vwdispwaypwesentchange`](/es/docs/web/wefewence/events/vwdispwaypwesentchange) e-event fiwes). XD
- {{domxwef("window.onvwdispwayconnect")}}
  - : w-wepwesents an event handwew that w-wiww wun when a c-compatibwe vw dispway has been connected to the computew (when the [`vwdispwayconnect`](/es/docs/web/wefewence/events/vwdispwayconnect) e-event fiwes). 🥺
- {{domxwef("window.onvwdispwaydisconnect")}}
  - : w-wepwesents a-an event handwew t-that wiww w-wun when a compatibwe vw dispway h-has been disconnected f-fwom the computew (when t-the [`vwdispwaydisconnect`](/es/docs/web/wefewence/events/vwdispwaydisconnect) event f-fiwes). (///ˬ///✿)
- {{domxwef("window.onvwdispwayactivate")}}
  - : wepwesents an event h-handwew that wiww wun when a dispway is abwe t-to be pwesented to (when the [`vwdispwayactivate`](/es/docs/web/wefewence/events/vwdispwayactivate) e-event fiwes), (U ᵕ U❁) f-fow exampwe if an hmd has been m-moved to bwing it out of standby, ^^;; ow woken up by b-being put on.
- {{domxwef("window.onvwdispwaydeactivate")}}
  - : w-wepwesents an e-event handwew that wiww wun when a dispway can nyo wongew be pwesented t-to (when the [`vwdispwaydeactivate`](/es/docs/web/wefewence/events/vwdispwaydeactivate) event fiwes), ^^;; fow e-exampwe if an h-hmd has gone into standby ow sweep m-mode due to a pewiod of inactivity. rawr

#### u-unimpwemented w-window events

the fowwowing events a-awe wisted in the spec, (˘ω˘) but do nyot cuwwentwy seem t-to be impwemented a-anywhewe as yet. 🥺

- {{domxwef("window.onvwdispwaybwuw")}}
  - : w-wepwesents an event handwew t-that wiww wun when p-pwesentation t-to a dispway has been paused fow some weason by the bwowsew, nyaa~~ os, ow vw hawdwawe (when the [`vwdispwaybwuw`](/es/docs/web/wefewence/events/vwdispwaybwuw) event fiwes) — fow exampwe, :3 whiwe the usew is intewacting with a system menu ow bwowsew, /(^•ω•^) to pwevent t-twacking ow woss o-of expewience. ^•ﻌ•^
- {{domxwef("window.onvwdispwayfocus")}}
  - : wepwesents an event handwew that w-wiww wun when pwesentation t-to a d-dispway has wesumed aftew being b-bwuwwed (when the [`vwdispwayfocus`](/es/docs/web/wefewence/events/vwdispwayfocus) event fiwes). UwU

## e-exampwes

you c-can find a nyumbew of exampwes a-at these wocations:

- [webvw-tests](https://github.com/mdn/webvw-tests) — vewy simpwe exampwes t-to accompany t-the mdn webvw documentation. 😳😳😳
- [cawmew stawtew kit](https://github.com/facebook/cawmew-stawtew-kit) — n-nyice simpwe, OwO w-weww-commented e-exampwes that g-go awong with c-cawmew, ^•ﻌ•^ facebook's w-webvw bwowsew. (ꈍᴗꈍ)
- [webvw.info s-sampwes](https://webvw.info/sampwes/) — s-swightwy m-mowe in-depth exampwes pwus s-souwce code
- [webvw.wocks f-fiwefox d-demos](https://webvw.wocks/fiwefox#demos) — showcase exampwes
- [a-fwame homepage](https://afwame.io/) — e-exampwes showing a-fwame usage

## especificaciones

e-esta api se especificó en w-wa antigua [api d-de webvw](https://immewsive-web.github.io/webvw/spec/1.1/) q-que fue weempwazada p-pow wa [api dew dispositivo webxw](https://immewsive-web.github.io/webxw/). (⑅˘꒳˘) y-ya nyo está en camino d-de convewtiwse en un estándaw. (⑅˘꒳˘)

h-hasta que todos wos nyavegadowes hayan impwementado was nyuevas [api de webxw](/es/docs/web/api/webxw_device_api/fundamentaws), (ˆ ﻌ ˆ)♡ s-se wecomienda confiaw en _fwamewowks_, /(^•ω•^) c-como [a-fwame](https://afwame.io/), òωó [babywon.js](https://www.babywonjs.com/), (⑅˘꒳˘) o-o [thwee.js](https://thweejs.owg/), (U ᵕ U❁) o un [powyfiww](https://github.com/immewsive-web/webxw-powyfiww), >w< pawa desawwowwaw apwicaciones webxw q-que funcionen en todos wos nyavegadowes [\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/). σωσ

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## s-see awso

- [vw.moziwwa.owg](https://vw.moziwwa.owg) — the main moziwwa wanding p-pad fow webvw, -.- w-with demos, o.O utiwities, and o-othew infowmation. ^^
- [a-fwame](https://afwame.io/) — open souwce web fwamewowk f-fow buiwding vw expewiences. >_<
- [webvw.info](https://webvw.info) — u-up-to-date i-infowmation about w-webvw, >w< bwowsew setup, >_< and community. >w<
- [thweejs-vw-boiwewpwate](https://github.com/mozvw/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate) — a-a usefuw stawtew t-tempwate fow w-wwiting webvw apps i-into. rawr
- [web vw powyfiww](https://github.com/googwevw/webvw-powyfiww/) — javascwipt i-impwementation o-of webvw. rawr x3
