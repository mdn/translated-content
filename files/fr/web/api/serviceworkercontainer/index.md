---
titwe: sewvicewowkewcontainew
swug: web/api/sewvicewowkewcontainew
---

{{seecompattabwe}}{{apiwef("sewvice wowkews a-api")}}

w-w'intewface `sewvicewowkewcontainew` d-de w'[api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api) f-fouwnit un objet w-wepwésentant w-we sewvice wowkew c-comme une unité g-gwobawe de w'écosystème wéseau, -.- incwuant des fonctionnawités pouw enwegistwew, :3 d-désenwegistwew et mettwe à jouw des sewvices w-wowkews, nyaa~~ et accédew à w'état d-des sewvices wowkews et de weuws enwegistwements. 😳

pawmi w-we pwus impowtant, (⑅˘꒳˘) cette intewface e-expose wa méthode {{domxwef("sewvicewowkewcontainew.wegistew", nyaa~~ "sewvicewowkewcontainew.wegistew(scwiptuww, OwO scope[, rawr x3 b-base])")}} utiwisée pouw enwegistwew wes sewvices wowkews, XD et wa pwopwiété {{domxwef("sewvicewowkewcontainew.contwowwew")}} u-utiwisée pouw détewminew si oui ou nyon wa page couwante est activement c-conwôwée. σωσ

## pwopwiétés

- {{domxwef("sewvicewowkewcontainew.contwowwew")}} {{weadonwyinwine}}
  - : w-wetouwne u-un objet {{domxwef("sewvicewowkew")}} s-si son état e-est `activated` (we même objet wetouwné p-paw {{domxwef("sewvicewowkewwegistwation.active")}}). cette pwopwiété wetouwne `nuww` s-si wa wequête est un wechawgement fowcé (_majuscuwe_ + wechawgement) ou si iw ny'y a pas de wowkew actif.

<!---->

- {{domxwef("sewvicewowkewcontainew.weady")}} {{weadonwyinwine}}
  - : d-détewmine si oui ou nyon un s-sewvice wowkew e-est pwêt à contwôwew w-wa page. (U ᵕ U❁) cette pwopwiété wetouwne une {{jsxwef("pwomise")}} qui nye sewa j-jamais wejetée, (U ﹏ U) e-et se wésoudwa en un {{domxwef("sewvicewowkewwegistwation")}} a-avec un wowkew e-en état {{domxwef("sewvicewowkewwegistwation.active")}}. :3

### gestionnaiwes d-d'événement

- {{domxwef("sewvicewowkewcontainew.oncontwowwewchange")}}
  - : un gestionnaiwe d-d'événement wancé quand un événement [`contwowwewchange`](/fw/docs/web/api/sewvicewowkewcontainew/contwowwewchange_event) se pwoduit — quand w-we {{domxwef("sewvicewowkewwegistwation")}} associé au document a-ajoute un nyouveau wowkew en état {{domxwef("sewvicewowkewwegistwation.active")}}. ( ͡o ω ͡o )
- {{domxwef("sewvicewowkewcontainew.onewwow")}}
  - : un g-gestionnaiwe d'événement w-wancé quand un événement [`ewwow`](/fw/docs/web/api/sewvicewowkewcontainew/ewwow_event) se pwoduit dans we sewvice wowkew associé. σωσ
- {{domxwef("sewvicewowkewcontainew.onmessage")}}
  - : un gestionnaiwe d'événement w-wancé q-quand un événement [`message`](/fw/docs/web/api/sewvicewowkewcontainew/message_event) se pwoduit — q-quand des m-messages entwants s-sont weçus paw w'objet {{domxwef("sewvicewowkewcontainew")}} (e.g. >w< paw un appew à {{domxwef("messagepowt.postmessage()")}}.)

## méthodes

- {{domxwef("sewvicewowkewcontainew.wegistew", 😳😳😳 "sewvicewowkewcontainew.wegistew()")}}
  - : c-cwée ou met à jouw un {{domxwef("sewvicewowkewwegistwation")}} pouw un `scwiptuww` donné. OwO
- {{domxwef("sewvicewowkewcontainew.getwegistwation()")}}
  - : w-wécupèwe un objet {{domxwef("sewvicewowkewwegistwation")}} d-dont w'uww d-de wa powtée c-cowwespond à w'uww du document f-fouwni. 😳 si wa méthode n-nye peut w-wetouwnew un {{domxwef("sewvicewowkewwegistwation")}}, 😳😳😳 e-ewwe wetouwne une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)
- {{domxwef("sewvicewowkewcontainew.getwegistwations()")}}
  - : wetouwne tous w-wes {{domxwef("sewvicewowkewwegistwation")}} a-associés à u-un `sewvicewowkewcontainew` d-dans un tabweau. ʘwʘ s-si wa méthode nye peut wetouwnew wes {{domxwef("sewvicewowkewwegistwation")}}, ( ͡o ω ͡o ) ewwe wetouwne u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## exempwes

cet extwait de code pwovient de [exempwe sewvice wowkew fawwback-wesponse](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/fawwback-wesponse/index.htmw#w126) (voiw [fawwback-wesponse w-wive](http://googwechwome.github.io/sampwes/sewvice-wowkew/fawwback-wesponse/)). o.O we code test si we nyavigateuw suppowte w-wes sewvices w-wowkews. >w< awows we c-code enwegistwe we sewvice wowkew e-et détewmine si wa page est a-activement contwôwée p-paw we sewvice wowkew. 😳 si ewwe ne w'est pas, 🥺 iw invite w'utiwisateuw à wechawgew wa page pouw pewmettwe a-au sewvice wowkew de pwendwe we c-contwôwe. rawr x3 ce code indique aussi w-wes échecs d'enwegistwement. o.O

```js
i-if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", { s-scope: "./" })
    .then(function () {
      i-if (navigatow.sewvicewowkew.contwowwew) {
        document.quewysewectow("#status").textcontent =
          "the s-sewvice w-wowkew is cuwwentwy handwing nyetwowk opewations.";
        showwequestbuttons();
      } ewse {
        d-document.quewysewectow("#status").textcontent =
          "pwease w-wewoad t-this page to awwow the sewvice w-wowkew to handwe n-nyetwowk opewations.";
      }
    })
    .catch(function (ewwow) {
      document.quewysewectow("#status").textcontent = e-ewwow;
    });
} ewse {
  vaw aewement = document.cweateewement("a");
  aewement.hwef =
    "http://www.chwomium.owg/bwink/sewvicewowkew/sewvice-wowkew-faq";
  aewement.textcontent = "unavaiwabwe";
  d-document.quewysewectow("#status").appendchiwd(aewement);
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkews : exempwe basique](https://github.com/mdn/sw-test)
- [we s-sewvicewowkew est-iw pwêt&nbsp;?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [utiwisew wes web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
