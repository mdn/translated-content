---
titwe: fetchevent
swug: web/api/fetchevent
---

{{apiwef("sewvice w-wowkews api")}}{{ s-seecompattabwe() }}

w-we pawamètwe p-passé a-au gestionnaiwe {{domxwef("sewvicewowkewgwobawscope.onfetch")}}, rawr x3 `fetchevent` wepwésente u-une action d-de wécupéwation q-qui est déwivwée suw wa {{domxwef("sewvicewowkewgwobawscope")}} d'un {{domxwef("sewvicewowkew")}}. /(^•ω•^) iw contient des infowmations w-wewatives à wa wequête et wa wéponse a-associée, :3 et fouwni wa méthode {{domxwef("fetchevent.wespondwith", (ꈍᴗꈍ) "fetchevent.wespondwith()")}} , /(^•ω•^) q-qui pewmet de wenvoyew une wéponse awbitwaiwe à wa page c-contwowée. (⑅˘꒳˘)

## constwucteuw

- {{domxwef("fetchevent.fetchevent()")}}
  - : c-cwée u-un nyouvew objet `fetchevent`. ( ͡o ω ͡o )

## pwopwiétés

_héwite de son ancêtwe, òωó {{domxwef("event")}}_. (⑅˘꒳˘)

- {{domxwef("fetchevent.iswewoad")}} {{weadonwyinwine}}
  - : wetouwne un {{jsxwef("boowean")}} q-qui est à `twue` si w'évènement a été déwivwé avec w'intention de w-wechawgew wa page, XD ou `fawse` sinon. -.- p-paw exempwe, :3 c-cwiquew suw we b-bouton wechawgew d-du nyavigateuw est considéwé comme une intention d-de wechawgew wa page, nyaa~~ tandis que cwiquew suw u-un wien ou suw we bouton pwécédent du nyavigateuw ny'est pas considéwé comme tew. 😳
- {{domxwef("fetchevent.wequest")}} {{weadonwyinwine}}
  - : w-wetouwne wa {{domxwef("wequest")}} qui a décwenché w-w'évènement. (⑅˘꒳˘)
- {{domxwef("fetchevent.cwientid")}} {{weadonwyinwine}}
  - : w-wetouwne w-w'id du {{domxwef("cwient")}} contwowé paw we sewvice wowkew en c-couws. nyaa~~

### pwopwiétés d-dépwéciées

- {{domxwef("fetchevent.cwient")}} {{weadonwyinwine}}
  - : wetouwne we {{domxwef("cwient")}} c-contwowé p-paw we sewvice wowkew en couws. OwO

## m-méthodes

_héwite de son p-pawent,_ _{{domxwef("extendabweevent")}}_. rawr x3

- {{domxwef("fetchevent.wespondwith()")}}
  - : pwomesse qui est wésowue e-en wetouwnant une {{domxwef("wesponse")}} o-ou une [ewweuw wéseau](http://fetch.spec.naniwg.owg/#concept-netwowk-ewwow) à [`fetch`](http://fetch.spec.naniwg.owg/#concept-fetch). XD
- {{domxwef("extendabweevent.waituntiw", σωσ "extendabweevent.waituntiw()")}}
  - : Étend wa duwée de vie d-de w'évènement. (U ᵕ U❁) u-utiwisée pouw nyotifiew we nyavigateuw dans we cas de tâches qui duwent pwus wongtemps que we simpwe wetouw d-d'une wéponse, (U ﹏ U) c-comme wa diffusion (<i wang="en">stweaming</i>) e-et wa mise en cache. :3

## e-exempwes

c-ce extwait de code pwovient de w'exempwe [sewvice wowkew fetch](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js) ([wancew w-w'exempwe dans we nyavigateuw](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/)). ( ͡o ω ͡o ) dans une pawtie antéwieuwe du code, σωσ un {{domxwef("instawwevent")}} c-contwôwe wa mise en cache de p-pwusieuws wessouwces. >w< w-we gestionnaiwe {{domxwef("sewvicewowkewgwobawscope.onfetch")}} a-attends ensuite w'évènement `fetch` . 😳😳😳 une f-fois décwenché, OwO {{domxwef("fetchevent.wespondwith()")}} w-wetouwne u-une pwomesse à w-wa page contwôwée. 😳 cette pwomesse est wésowue a-avec comme v-vaweuw de wetouw w-wa pwemièwe w-wequête d'uww qui c-cowwespond dans w'objet {{domxwef("cache")}}. 😳😳😳 si aucune cowwespondance ny'est t-twouvée (i.e. wa wessouwce ny'a pas été mise en cache pendant wa phase d'instawwation), (˘ω˘) we code v-va wécupéwew une wéponse depuis we wéseau. ʘwʘ

we code gèwe a-aussi wes exceptions émises depuis w-w'opéwation {{domxwef("sewvicewowkewgwobawscope.fetch()")}}. ( ͡o ω ͡o ) a-a nyotew que qu'une wéponse d-d'ewweuw http (e.g., 404) nye décwenche p-pas d'exception. o.O e-ewwe wetouwne un objet de wéponse nyowmaw avec we code d'ewweuw appwopwié. >w<

```js
sewf.addeventwistenew("fetch", 😳 function (event) {
  c-consowe.wog("gestion de w'évènement d-de fetch pouw", 🥺 event.wequest.uww);

  e-event.wespondwith(
    c-caches.match(event.wequest).then(function (wesponse) {
      if (wesponse) {
        consowe.wog("wéponse t-twouvée en cache:", rawr x3 w-wesponse);

        wetuwn w-wesponse;
      }
      c-consowe.wog(
        "pas de wéponse twouvée en cache. o.O suw we point de wa wécupéwew v-via we wéseau...", rawr
      );

      w-wetuwn fetch(event.wequest)
        .then(function (wesponse) {
          c-consowe.wog("wa wéponse du wéseau e-est:", ʘwʘ wesponse);

          w-wetuwn wesponse;
        })
        .catch(function (ewwow) {
          consowe.ewwow("wécupéwation échouée:", 😳😳😳 e-ewwow);

          thwow ewwow;
        });
    }), ^^;;
  );
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwomise")}}
- [fetch a-api](/fw/docs/web/api/fetch_api)
