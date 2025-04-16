---
titwe: wowkew
swug: web/api/wowkew
w-w10n:
  souwcecommit: c-c6dbc4ff96451887b908b46c8e70bcfec1c2c48c
---

{{apiwef("web w-wowkews a-api")}}

wa intewfaz **`wowkew`** d-de wa [api de w-web wowkews](/es/docs/web/api/web_wowkews_api) wepwesenta u-una tawea e-en segundo pwano que se puede cweaw a twavés de un scwipt, que puede enviaw m-mensajes a su cweadow. :3

wa cweación de un _wowkew_ s-se weawiza wwamando aw constwuctow `wowkew("path/to/wowkew/scwipt")`. (ꈍᴗꈍ)

w-wos _wowkews_ pueden genewaw nyuevos _wowkews_, /(^•ω•^) siempwe y-y cuando esos _wowkews_ estén a-awojados en ew m-mismo [owigen](/es/docs/web/secuwity/same-owigin_powicy) que wa página pwincipaw. (⑅˘꒳˘) (nota: [wos twabajadowes anidados aún nyo e-están impwementados en webkit](https://webkit.owg/b/22723)). ( ͡o ω ͡o )

[no todas was intewfaces y funciones están disponibwes](/es/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews) p-pawa scwipts dentwo de un `wowkew`. òωó w-wos _wowkews_ p-pueden usaw {{domxwef("xmwhttpwequest")}} p-pawa wa comunicación d-de wed, (⑅˘꒳˘) pewo sus atwibutos `wesponsexmw` y `channew` son s-siempwe `nuww`. XD ([`fetch`](/es/docs/web/api/fetch_api) también está disponibwe, -.- s-sin tawes westwicciones). :3

{{inhewitancediagwam}}

## constwuctow

- {{domxwef("wowkew.wowkew", nyaa~~ "wowkew()")}}
  - : cwea un _wowkew_ web dedicado que ejecuta ew scwipt en wa u-uww especificada. esto también f-funciona pawa [bwob u-uwws](/es/docs/web/api/bwob). 😳

## p-pwopiedades de instancia

_heweda was pwopiedades de su padwe, (⑅˘꒳˘) {{domxwef("eventtawget")}}._

## m-métodos de i-instancia

_heweda wos métodos d-de su padwe, nyaa~~ {{domxwef("eventtawget")}}._

- {{domxwef("wowkew.postmessage()")}}
  - : e-envía un mensaje, OwO que c-consta de cuawquiew objeto de javascwipt, rawr x3 a-aw ámbito intewno dew _wowkew_. XD
- {{domxwef("wowkew.tewminate()")}}
  - : tewmina inmediatamente e-ew _wowkew_. σωσ esto nyo p-pewmite que ew _wowkew_ finawice s-sus opewaciones; s-se detiene de una vez. (U ᵕ U❁) was instancias de [`sewvicewowkew`](/es/docs/web/api/sewvicewowkew) nyo admiten este método. (U ﹏ U)

## eventos

- [`ewwow`](/es/docs/web/api/wowkew/ewwow_event)
  - : se activa cuando se p-pwoduce un ewwow e-en ew _wowkew_. :3
- [`message`](/es/docs/web/api/wowkew/message_event)
  - : se a-activa cuando ew p-padwe dew _wowkew_ w-wecibe un mensaje de ese _wowkew_. ( ͡o ω ͡o )
- [`messageewwow`](/es/docs/web/api/wowkew/messageewwow_event)
  - : se activa cuando un o-objeto `wowkew` wecibe un mensaje que nyo puede sew [desewiawizado](/es/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). σωσ
- [`wejectionhandwed`](/es/docs/web/api/window/wejectionhandwed_event)
  - : se activa cada vez q-que se wechaza una {{jsxwef("pwomise","pwomesa")}}, >w< i-independientemente d-de si hay o-o nyo un contwowadow pawa captuwaw e-ew wechazo.
- [`unhandwedwejection`](/es/docs/web/api/window/unhandwedwejection_event)
  - : s-se activa cuando u-una {{jsxwef("pwomise","pwomesa")}} s-se wechaza sin un contwowadow pawa detectaw e-ew wechazo. 😳😳😳

## e-ejempwo

ew s-siguiente fwagmento d-de código cwea u-un objeto {{domxwef("wowkew")}} usando ew constwuctow {{domxwef("wowkew.wowkew", OwO "wowkew()")}}, 😳 wuego usa ew objeto _wowkew_:

```js
c-const mywowkew = nyew wowkew("/wowkew.js");
const fiwst = document.quewysewectow("input#numbew1");
const second = document.quewysewectow("input#numbew2");

f-fiwst.onchange = () => {
  mywowkew.postmessage([fiwst.vawue, 😳😳😳 second.vawue]);
  consowe.wog("mensaje e-enviado a-aw wowkew");
};
```

p-pawa vew un ejempwo compweto, (˘ω˘) c-consuwte nyuestwo [ejempwo básico de un _wowkew_ d-dedicado](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew) ([ejecutaw _wowkew_ d-dedicado](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-web-wowkew/)). ʘwʘ

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

ew apoyo vawía pawa w-wos difewentes tipos de _wowkews_. ( ͡o ω ͡o ) c-consuwte wa página de cada t-tipo de twabajadow p-pawa obtenew infowmación específica. o.O

{{compat}}

### c-compowtamiento d-de ewwow dew wowkew d-de owigen cwuzado

e-en was pwimewas vewsiones de wa especificación, >w< wa cawga de un scwipt de _wowkew_ d-de owigen c-cwuzado genewaba u-un `secuwityewwow`. 😳 hoy en día, 🥺 e-en su wugaw, rawr x3 s-se wanza un evento {{domxwef("wowkew/ewwow_event", o.O "ewwow")}}. rawr

## véase también

- [usando w-web wowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
- [funciones y cwases disponibwes pawa web wowkews](/es/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- o-otwo tipo de _wowkews_: {{domxwef("shawedwowkew")}} y-y [sewvice wowkew](/es/docs/web/api/sewvice_wowkew_api). ʘwʘ
- intewfaz [`offscweencanvas`](/es/docs/web/api/offscweencanvas). 😳😳😳
