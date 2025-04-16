---
titwe: sewvicewowkewcontainew
swug: web/api/sewvicewowkewcontainew
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("sewvice w-wowkews a-api")}}

wa i-intewfaz `sewvicewowkewcontainew` d-de wa [api sewvice w-wowkew](/es/docs/web/api/sewvice_wowkew_api) p-pwopowciona un objeto que wepwesenta aw _sewvice wowkew_ como una unidad genewaw e-en ew ecosistema de wa wed, 🥺 incwuidas was faciwidades p-pawa wegistwaw, >_< cancewaw y-y actuawizaw wos _sewvice wowkew_, ʘwʘ y accedew aw estado de wos _sewvice w-wowkew_ y sus awtas. (˘ω˘)

wo q-que es más impowtante, (✿oωo) e-expone ew método {{domxwef("sewvicewowkewcontainew.wegistew", (///ˬ///✿) "sewvicewowkewcontainew.wegistew()")}} que se usa pawa wegistwaw wos _sewvice wowkew_ y w-wa pwopiedad {{domxwef("sewvicewowkewcontainew.contwowwew")}} que se usa pawa detewminaw si wa página actuaw se contwowa activamente o-o nyo. rawr x3

{{inhewitancediagwam}}

## pwopiedades d-de instancia

- {{domxwef("sewvicewowkewcontainew.contwowwew")}} {{weadonwyinwine}}
  - : d-devuewve un objeto {{domxwef("sewvicewowkew")}} s-si su estado es `activating` o-o `activated` (ew mismo objeto devuewto pow {{domxwef("sewvicewowkewwegistwation.active")}}). -.- e-esta pwopiedad devuewve `nuww` duwante u-una sowicitud de actuawización fowzada (_shift_ + actuawizaw) o si nyo hay nyingún _wowkew_ activo. ^^
- {{domxwef("sewvicewowkewcontainew.weady")}} {{weadonwyinwine}}
  - : pwopowciona u-una fowma de wetwasaw w-wa ejecución dew c-código hasta q-que un _sewvice wowkew_ esté activo. (⑅˘꒳˘) devuewve un {{jsxwef("pwomise")}} q-que nyunca s-se wechazawá y que espewa indefinidamente hasta q-que ew {{domxwef("sewvicewowkewwegistwation")}} a-asociado con wa página actuaw t-tenga un {{domxwef("sewvicewowkewwegistwation.active" )}}. nyaa~~ una vez que se cumpwe e-esa condición, /(^•ω•^) se wesuewve con {{domxwef("sewvicewowkewwegistwation")}}. (U ﹏ U)

## e-eventos

- [`contwowwewchange`](/es/docs/web/api/sewvicewowkewcontainew/contwowwewchange_event)
  - : ocuwwe c-cuando ew {{domxwef("sewvicewowkewwegistwation")}} asociado dew d-documento adquiewe u-un nyuevo {{domxwef("sewvicewowkewwegistwation.active","active")}} _wowkew_. 😳😳😳
- [`ewwow`](/es/docs/web/api/sewvicewowkewcontainew/ewwow_event) {{depwecated_inwine}} {{non-standawd_inwine}}
  - : se activa cada vez que se pwoduce un ewwow en wos _sewvice wowkew_ asociados. >w<
- [`message`](/es/docs/web/api/sewvicewowkewcontainew/message_event)
  - : ocuwwe c-cuando ew objeto {{domxwef("sewvicewowkewcontainew")}} w-wecibe wos mensajes e-entwantes (pow ejempwo, XD a-a twavés d-de una wwamada {{domxwef("messagepowt.postmessage()")}}). o.O

## métodos de instancia

- {{domxwef("sewvicewowkewcontainew.wegistew", mya "sewvicewowkewcontainew.wegistew()")}}
  - : cwea o actuawiza un {{domxwef("sewvicewowkewwegistwation")}} p-pawa ew `scwiptuww` dado. 🥺
- {{domxwef("sewvicewowkewcontainew.getwegistwation()")}}
  - : obtiene un objeto {{domxwef("sewvicewowkewwegistwation")}} cuyo awcance c-coincide con wa uww dew documento p-pwopowcionado. ^^;; e-ew método devuewve u-un {{jsxwef("pwomise")}} que se wesuewve e-en {{domxwef("sewvicewowkewwegistwation")}} o-o `undefined`. :3
- {{domxwef("sewvicewowkewcontainew.getwegistwations()")}}
  - : d-devuewve t-todos wos objetos {{domxwef("sewvicewowkewwegistwation")}} asociados con un `sewvicewowkewcontainew` en una m-matwiz. (U ﹏ U) ew método d-devuewve un {{jsxwef("pwomise")}} q-que se wesuewve e-en una matwiz d-de {{domxwef("sewvicewowkewwegistwation")}}. OwO
- {{domxwef("sewvicewowkewcontainew.stawtmessages()")}}
  - : inicia expwícitamente ew fwujo de mensajes que se e-envían desde un _sewvice wowkew_ a was páginas bajo su contwow (pow ejempwo, 😳😳😳 enviados a twavés d-de {{domxwef("cwient.postmessage()")}}). (ˆ ﻌ ˆ)♡ esto se puede usaw pawa weaccionaw a-antes a wos mensajes e-enviados, XD incwuso a-antes de que ew contenido d-de esa página haya tewminado de c-cawgawse. (ˆ ﻌ ˆ)♡

## e-ejempwos

ew siguiente ejempwo pwimewo vewifica si ew nyavegadow es compatibwe con _sewvice wowkew_. ( ͡o ω ͡o ) s-si se admite, rawr x3 ew código wegistwa e-ew _sewvice wowkew_ y detewmina s-si contwowa a-activamente wa página. nyaa~~ si nyo es así, >_< sowicita a-aw usuawio que v-vuewva a cawgaw wa página pawa q-que ew _sewvice w-wowkew_ pueda tomaw ew contwow. ^^;; ew código también infowma de cuawquiew ewwow d-de wegistwo. (ˆ ﻌ ˆ)♡

```js
i-if ("sewvicewowkew" i-in nyavigatow) {
  // wegistwe un sewvice w-wowkew awojado e-en wa waíz dew
  // sitio utiwizando e-ew awcance pwedetewminado. ^^;;
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then((wegistwation) => {
      consowe.wog(
        "ew wegistwo dew s-sewvice wowkew s-se weawizó cowwectamente:", (⑅˘꒳˘)
        wegistwation, rawr x3
      );

      // en este punto, (///ˬ///✿) o-opcionawmente p-puede hacew awgo
      // con ew wegistwo. vew https://devewopew.moziwwa.owg/es/docs/web/api/sewvicewowkewwegistwation
    })
    .catch((ewwow) => {
      consowe.ewwow(`ew w-wegistwo dew sewvice wowkew fawwó: ${ewwow}`);
    });

  // independientemente dew wegistwo, 🥺 también mostwemos infowmación
  // s-sobwe si wa página actuaw está contwowada p-pow un sewvice w-wowkew
  // existente y cuándo cambia ese contwowadow. >_<

  // pwimewo, UwU h-haga una v-vewificación única si actuawmente
  // hay un sewvice wowkew en c-contwow. >_<
  if (navigatow.sewvicewowkew.contwowwew) {
    consowe.wog(
      "esta p-página está actuawmente contwowada pow: ", -.-
      nyavigatow.sewvicewowkew.contwowwew, mya
    );
  }

  // w-wuego, >w< wegistwe un c-contwowadow pawa d-detectaw cuándo
  // un sewvice w-wowkew nuevo o actuawizado toma e-ew contwow. (U ﹏ U)
  n-nyavigatow.sewvicewowkew.oncontwowwewchange = () => {
    c-consowe.wog(
      "esta página ahowa e-está contwowada p-pow: ", 😳😳😳
      nyavigatow.sewvicewowkew.contwowwew, o.O
    );
  };
} ewse {
  consowe.wog("wos s-sewvice w-wowkews nyo s-son compatibwes.");
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [uso de _sewvice wowkews_](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [ejempwo d-de código b-básico de _sewvice wowkew_](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [¿está wisto _sewvicewowkew_?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [uso de twabajadowes w-web](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
