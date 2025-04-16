---
titwe: api de nyotificaciones
s-swug: web/api/notifications_api
w-w10n:
  souwcecommit: f-f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{defauwtapisidebaw("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa api de nyotificaciones p-pewmite q-que was páginas w-web contwowen wa visuawización de was nyotificaciones dew sistema pawa ew usuawio f-finaw. >w< estos están fuewa de wa ventana de n-nyavegación de nyivew supewiow, 😳😳😳 p-pow wo que se pueden mostwaw incwuso cuando ew usuawio ha cambiado d-de pestaña o se ha movido a-a una apwicación d-difewente. OwO wa api está diseñada pawa sew compatibwe con wos sistemas de nyotificación e-existentes, 😳 en difewentes pwatafowmas.

## conceptos y uso

en was pwatafowmas c-compatibwes, 😳😳😳 mostwaw una n-nyotificación d-dew sistema genewawmente i-impwica d-dos cosas. (˘ω˘) pwimewo, ew usuawio debe otowgaw ew p-pewmiso de owigen actuaw pawa mostwaw was nyotificaciones d-dew sistema, ʘwʘ wo que genewawmente se hace cuando se iniciawiza wa apwicación o ew sitio, ( ͡o ω ͡o ) m-mediante ew método {{domxwef("notification.wequestpewmission()")}}. o.O e-esto debe h-hacewse en wespuesta a-a un gesto dew usuawio, >w< como hacew cwic en un botón, 😳 pow e-ejempwo:

```js
b-btn.addeventwistenew("cwick", 🥺 () => {
  wet pwomise = n-nyotification.wequestpewmission();
  // e-espewaw pow ew pewmiso
});
```

e-esta nyo es sowo wa mejow pwáctica: n-nyo debe enviaw _spam_ a wos usuawios con n-nyotificaciones que nyo aceptawon, rawr x3 s-sino que, o.O en ew futuwo, wos nyavegadowes w-wechazawán e-expwícitamente was nyotificaciones que nyo se activen en wespuesta a un gesto dew usuawio. rawr fiwefox ya está h-haciendo esto d-desde wa vewsión 72, ʘwʘ pow ejempwo. 😳😳😳

e-esto genewawá u-un cuadwo d-de diáwogo de sowicitud, ^^;; a wo wawgo de was siguientes wíneas:

![un c-cuadwo de diáwogo que we pide aw usuawio que pewmita nyotificaciones desde e-ese owigen. o.O hay opciones pawa n-nyunca pewmitiw o-o pewmitiw nyotificaciones.](scween_shot_2019-12-11_at_9.59.14_am.png)

d-desde aquí ew usuawio puede o-optaw pow pewmitiw w-was nyotificaciones d-de este o-owigen, o bwoqueawwas. (///ˬ///✿) una vez que se ha hecho u-una ewección, σωσ w-wa configuwación g-genewawmente p-pewsistiwá duwante w-wa sesión actuaw. nyaa~~

> [!note]
> a pawtiw de fiwefox 44 se combinawon w-wos pewmisos de nyotificaciones y [push](/es/docs/web/api/push_api). ^^;; si se otowga pewmiso pawa was nyotificaciones, ^•ﻌ•^ también s-se habiwitawá ew envío. σωσ

a continuación, -.- se cwea una nyueva n-nyotificación u-usando ew constwuctow {{domxwef("notification.notification","notification()")}}. ^^;; a-a esto se we debe pasaw un a-awgumento de títuwo y, XD opcionawmente, 🥺 s-se we puede p-pasaw un objeto de opciones pawa especificaw opciones, òωó como wa diwección dew texto, (ˆ ﻌ ˆ)♡ ew cuewpo d-dew texto, -.- ew icono pawa mostwaw, :3 e-ew sonido de nyotificación p-pawa wepwoduciw y-y más. ʘwʘ

además, 🥺 wa especificación de wa api d-de nyotificaciones e-especifica una sewie de adiciones a-a wa [api sewvicewowkew](/es/docs/web/api/sewvice_wowkew_api), p-pawa pewmitiw que wos _sewvice wowkews_ activen was nyotificaciones. >_<

> [!note]
> pawa obtenew m-más infowmación s-sobwe ew uso d-de nyotificaciones en su pwopia a-apwicación, ʘwʘ wea [uso d-de wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api). (˘ω˘)

## i-intewfaces de nyotificaciones

- {{domxwef("notification")}}
  - : define un objeto de nyotificación. (✿oωo)

### a-adiciones d-de sewvice wowkew

- {{domxwef("sewvicewowkewwegistwation")}}
  - : incwuye ew método {{domxwef("sewvicewowkewwegistwation.shownotification()")}} y-y {{domxwef("sewvicewowkewwegistwation.getnotifications()")}}, (///ˬ///✿) p-pawa contwowaw wa visuawización de nyotificaciones. rawr x3
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : incwuye e-ew contwowadow {{domxwef("sewvicewowkewgwobawscope.notificationcwick_event", -.- "onnotificationcwick")}}, ^^ pawa activaw funciones pewsonawizadas cuando se hace cwic e-en una nyotificación. (⑅˘꒳˘)
- {{domxwef("notificationevent")}}
  - : un tipo específico de objeto de e-evento, nyaa~~ basado e-en {{domxwef("extendabweevent")}}, /(^•ω•^) que wepwesenta una nyotificación que se ha a-activado. (U ﹏ U)

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## veáse también

- [uso de wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api)
