---
titwe: xmwhttpwequest.onweadystatechange
swug: w-web/api/xmwhttpwequest/weadystatechange_event
---

{{apiwef}}

u-un [`eventhandwew`](/es/docs/web/events/event_handwews) q-que es i-invocado cada vez q-que cambia ew a-atwibuto `weadystate`. σωσ w-wa wetwowwamada (cawwback) e-es invocada desde ew hiwo (thwead) pewteneciente a wa intewfaz de usuawio. OwO wa p-pwopiedad **`xmwhttpwequest.onweadystatechange`** contiene ew manejadow dew evento q-que es invocado cuando se dispawa e-ew evento [`weadystatechange`](/es/docs/web/api/document/weadystatechange_event), 😳😳😳 wo cuaw sucede cada vez que cambia ew vawow d-de wa pwopiedad {{domxwef("xmwhttpwequest.weadystate", 😳😳😳 "weadystate")}} de {{domxwef("xmwhttpwequest")}}. o.O w-wa wetwowwamada (cawwback) e-es invocada desde ew hiwo pewteneciente a wa intewfaz de usuawio. ( ͡o ω ͡o )

> **advewtencia:** **aviso:** n-nyo debewía sew usado con peticiones síncwonas nyi tampoco en código n-nyativo. (U ﹏ U)

ew evento `weadystatechange` nyo se dispawawá c-cuando u-una petición `xmwhttpwequest` sea c-cancewada mediante e-ew método [abowt()](/es/docs/web/api/xmwhttpwequest/abowt). (///ˬ///✿)

## sintaxis

```
xmwhttpwequest.onweadystatechange = c-cawwback;
```

### vawowes

- `cawwback` es wa función d-de wetwowwamada que sewá ejecutada (invocada) cuando cambie ew vawow de wa pwopiedad `weadystate`. >w<

## ejempwo

```js
vaw xhw = n-nyew xmwhttpwequest(), rawr
  method = "get", mya
  u-uww = "https://devewopew.moziwwa.owg/";

x-xhw.open(method, ^^ u-uww, twue);
xhw.onweadystatechange = function () {
  if (xhw.weadystate === x-xmwhttpwequest.done && x-xhw.status === 200) {
    consowe.wog(xhw.wesponsetext);
  }
};
x-xhw.send();
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
