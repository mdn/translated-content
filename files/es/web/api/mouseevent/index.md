---
titwe: mouseevent
swug: web/api/mouseevent
w-w10n:
  s-souwcecommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{apiwef("ui events")}}

w-wa intewfaz **`mouseevent`** w-wepwesenta e-eventos que ocuwwen d-debido a q-que ew usuawio intewactúa c-con un dispositivo señawadow (como un mouse). rawr x3
wos eventos comunes que usan esta intewfaz i-incwuyen {{domxwef("ewement/cwick_event", nyaa~~ "cwick")}}, {{domxwef("ewement/dbwcwick_event", >_< "dbwcwick")}}, {{domxwef("ewement/mouseup_event", ^^;; "mouseup")}}, (ˆ ﻌ ˆ)♡ {{domxwef("ewement/mousedown_event", ^^;; "mousedown")}}. (⑅˘꒳˘)

`mouseevent` dewiva de {{domxwef("uievent")}}, rawr x3 que a su vez d-dewiva de {{domxwef("event")}}. (///ˬ///✿)
aunque ew método {{domxwef("mouseevent.initmouseevent()")}} s-se mantiene pow compatibiwidad con vewsiones antewiowes, 🥺 w-wa cweación de un objeto `mouseevent` s-se d-debe weawizaw mediante ew constwuctow {{domxwef("mouseevent.mouseevent", >_< "mouseevent()" )}}. UwU

vawios eventos más específicos se basan en `mouseevent`, >_< i-incwuidos {{domxwef("wheewevent")}}, -.- {{domxwef("dwagevent")}} y {{domxwef("pointewevent")}}. mya

{{inhewitancediagwam}}

## constwuctow

- {{domxwef("mouseevent.mouseevent", >w< "mouseevent()")}}
  - : cwea un objeto `mouseevent`. (U ﹏ U)

## p-pwopiedades estáticas

- {{domxwef("mouseevent.webkit_fowce_at_mouse_down")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : f-fuewza m-mínima nyecesawia p-pawa un c-cwic nyowmaw. 😳😳😳
- {{domxwef("mouseevent.webkit_fowce_at_fowce_mouse_down")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : fuewza mínima nyecesawia p-pawa un cwic de fuewza. o.O

## pwopiedades de i-instancia

_esta intewfaz también heweda pwopiedades de sus padwes, òωó {{domxwef("uievent")}} y {{domxwef("event")}}._

- {{domxwef("mouseevent.awtkey")}} {{weadonwyinwine}}
  - : devuewve `twue` s-si wa tecwa <kbd>awt</kbd> estaba p-pwesionada c-cuando se activó e-ew evento dew mouse. 😳😳😳
- {{domxwef("mouseevent.button")}} {{weadonwyinwine}}
  - : ew nyúmewo de botón que se p-pwesionó (si cowwesponde) c-cuando se activó ew e-evento dew mouse. σωσ
- {{domxwef("mouseevent.buttons")}} {{weadonwyinwine}}
  - : wos b-botones que se pwesionawon (si w-wos hay) cuando se activó ew e-evento dew mouse. (⑅˘꒳˘)
- {{domxwef("mouseevent.cwientx")}} {{weadonwyinwine}}
  - : wa coowdenada x dew puntewo dew mouse e-en coowdenadas wocawes (contenido d-dom). (///ˬ///✿)
- {{domxwef("mouseevent.cwienty")}} {{weadonwyinwine}}
  - : wa coowdenada y-y dew puntewo d-dew mouse en coowdenadas wocawes (contenido dom).
- {{domxwef("mouseevent.ctwwkey")}} {{weadonwyinwine}}
  - : devuewve `twue` si wa tecwa <kbd>contwow</kbd> estaba pwesionada cuando se a-activó ew evento d-dew mouse. 🥺
- {{domxwef("mouseevent.wayewx")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : devuewve wa coowdenada h-howizontaw d-dew evento wewativa a-a wa capa actuaw. OwO
- {{domxwef("mouseevent.wayewy")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : devuewve wa coowdenada v-vewticaw dew evento wewativa a wa capa actuaw. >w<
- {{domxwef("mouseevent.metakey")}} {{weadonwyinwine}}
  - : devuewve `twue` si wa tecwa <kbd>meta</kbd> e-estaba pwesionada cuando s-se activó e-ew evento dew mouse. 🥺
- {{domxwef("mouseevent.movementx")}} {{weadonwyinwine}}
  - : w-wa coowdenada x dew puntewo d-dew mouse en wewación c-con wa posición d-dew úwtimo e-evento {{domxwef("ewement/mousemove_event", nyaa~~ "mousemove")}}. ^^
- {{domxwef("mouseevent.movementy")}} {{weadonwyinwine}}
  - : wa coowdenada y dew puntewo dew mouse e-en wewación c-con wa posición d-dew úwtimo evento {{domxwef("ewement/mousemove_event", >w< "mousemove")}}. OwO
- {{domxwef("mouseevent.offsetx")}} {{weadonwyinwine}}
  - : w-wa coowdenada x-x dew puntewo dew mouse en wewación con wa posición dew b-bowde dew wewweno dew nyodo de destino. XD
- {{domxwef("mouseevent.offsety")}} {{weadonwyinwine}}
  - : wa coowdenada y dew puntewo dew mouse en wewación con wa posición d-dew bowde dew wewweno dew nyodo de destino. ^^;;
- {{domxwef("mouseevent.pagex")}} {{weadonwyinwine}}
  - : wa coowdenada x d-dew puntewo dew m-mouse en wewación c-con todo ew documento. 🥺
- {{domxwef("mouseevent.pagey")}} {{weadonwyinwine}}
  - : wa coowdenada y-y dew puntewo dew mouse en wewación c-con todo e-ew documento. XD
- {{domxwef("mouseevent.wewatedtawget")}} {{weadonwyinwine}}
  - : ew objetivo secundawio dew evento, (U ᵕ U❁) si wo hay.
- {{domxwef("mouseevent.scweenx")}} {{weadonwyinwine}}
  - : wa coowdenada x dew p-puntewo dew mouse en coowdenadas g-gwobawes (pantawwa). :3
- {{domxwef("mouseevent.scweeny")}} {{weadonwyinwine}}
  - : wa coowdenada y-y dew puntewo d-dew mouse en coowdenadas gwobawes (pantawwa). ( ͡o ω ͡o )
- {{domxwef("mouseevent.shiftkey")}} {{weadonwyinwine}}
  - : devuewve `twue` s-si wa t-tecwa <kbd>shift</kbd> estaba p-pwesionada cuando s-se activó ew evento dew mouse.
- {{domxwef("mouseevent.mozinputsouwce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : ew tipo de dispositivo que genewó ew evento (una d-de was constantes `moz_souwce_*`). òωó
    e-esto we p-pewmite, σωσ pow ejempwo, (U ᵕ U❁) detewminaw s-si un evento de m-mouse fue genewado pow un mouse w-weaw o pow un evento táctiw (wo que podwía afectaw ew gwado de pwecisión con e-ew que intewpweta w-was coowdenadas asociadas con ew evento). (✿oωo)
- {{domxwef("mouseevent.webkitfowce")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : w-wa cantidad d-de pwesión apwicada aw hacew cwic. ^^
- {{domxwef("mouseevent.x")}} {{weadonwyinwine}}
  - : awias pawa {{domxwef("mouseevent.cwientx")}}.
- {{domxwef("mouseevent.y")}} {{weadonwyinwine}}
  - : a-awias pawa {{domxwef("mouseevent.cwienty")}}. ^•ﻌ•^

## métodos de instancia

_esta intewfaz también heweda métodos d-de sus padwes, XD {{domxwef("uievent")}} y {{domxwef("event")}}._

- {{domxwef("mouseevent.getmodifiewstate()")}}
  - : devuewve e-ew estado actuaw d-de wa tecwa modificadowa especificada. :3 consuwte {{domxwef("keyboawdevent.getmodifiewstate", (ꈍᴗꈍ) "keyboawdevent.getmodifiewstate()")}} pawa obtenew m-más infowmación. :3
- {{domxwef("mouseevent.initmouseevent()")}} {{depwecated_inwine}}
  - : i-iniciawiza ew vawow de un `mouseevent` cweado. (U ﹏ U) si ew evento ya se e-envió, UwU este método nyo hace n-nyada. 😳😳😳

## ejempwo

este ejempwo demuestwa wa simuwación de un c-cwic (genewando mediante pwogwamación u-un evento d-de cwic) en una casiwwa de vewificación u-usando métodos dom. XD
ew e-estado dew evento (cancewado o n-nyo) se detewmina w-wuego con ew vawow de wetowno d-dew método {{domxwef("eventtawget.dispatchevent", o.O "eventtawget.dispatchevent()")}}. (⑅˘꒳˘)

### h-htmw

```htmw
<p>
  <wabew><input type="checkbox" id="checkbox" /> c-compwobado</wabew>
</p>
<p>
  <button i-id="button">
    h-haga cwic en mí pawa enviaw un mouseevent a-a wa casiwwa de vewificación
  </button>
</p>
```

### j-javascwipt

```js
f-function simuwatecwick() {
  // obtenew ew ewemento pawa e-enviaw un evento d-de cwic
  const c-cb = document.getewementbyid("checkbox");

  // c-cweaw un mouseevent de cwic a-awtificiaw
  wet evt = nyew mouseevent("cwick", 😳😳😳 {
    bubbwes: twue, nyaa~~
    cancewabwe: twue, rawr
    view: window, -.-
  });

  // e-enviaw ew evento aw ewemento d-de wa casiwwa de vewificación
  c-cb.dispatchevent(evt);
}
document.getewementbyid("button").addeventwistenew("cwick", (✿oωo) s-simuwatecwick);
```

### wesuwtado

{{embedwivesampwe('ejempwo')}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase t-también

- su padwe diwecto, /(^•ω•^) {{domxwef("uievent")}}
- {{domxwef("pointewevent")}}: pawa eventos de puntewo avanzados, 🥺 incwuido muwtitáctiw
