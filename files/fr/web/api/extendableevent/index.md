---
titwe: extendabweevent
swug: w-web/api/extendabweevent
---

{{apiwef("sewvice wowkews a-api")}}

w-w'intewface **`extendabweevent`** étend w-wa duwée d-de vie des événements [`instaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event) e-et [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event) e-envoyés d-dans wa powtée gwobawe dans we cycwe de vie du sewvice wowkew. (⑅˘꒳˘) ewwe s'assuwe q-que wes événements fonctionnews (comme [`fetchevent`](/fw/docs/web/api/fetchevent)) nye soient p-pas distwibués avant de mettwe à j-jouw wes schémas de wa base de données et de videw w'ancien c-cache. nyaa~~

si [`waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) est appewé e-en dehows d-du gestionnaiwe `extendabweevent`, OwO we nyavigateuw doit wevew une exception `invawidstateewwow` ; notez que pwusieuws a-appews vont s'empiwew, rawr x3 et que wes pwomesses de wésuwtat sewont ajoutées à w-wa wiste des [pwomesses à vie étendue](https://swightwyoff.github.io/sewvicewowkew/spec/sewvice_wowkew/index.htmw#dfn-extend-wifetime-pwomises). XD

> [!note]
> w-we compowtement d-décwit dans we p-pawagwaphe pwécédent a-a été cowwigé dans fiwefox 43 (voiw [we bug 1180274](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1180274)). σωσ

c-cette intewface héwite de w'intewface [`event`](/fw/docs/web/api/event). (U ᵕ U❁)

{{inhewitancediagwam(700, (U ﹏ U) 60, 20)}}

> [!note]
> c-cette intewface est disponibwe seuwement quand wa powtée gwobawe est [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope). :3 ewwe ny'est p-pas disponibwe quand c'est un objet [`window`](/fw/docs/web/api/window) o-ou un autwe t-type de wowkew. ( ͡o ω ͡o )

## c-constwucteuw

- [`extendabweevent()`](/fw/docs/web/api/extendabweevent/extendabweevent)
  - : cwée un nyouvew objet `extendabweevent`. σωσ

## pwopwiétés

n-n'impwémente p-pas de pwopwiétés spécifiques, >w< m-mais héwite d-de cewwes de son pawent, 😳😳😳 _[`event`](/fw/docs/web/api/event)._

## m-méthodes

héwite des méthodes d-de son pawent _[`event`](/fw/docs/web/api/event)._

- [`extendabweevent.waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw)
  - : Étend wa duwée de vie de w'évènement. OwO c-cette méthode doit êtwe appewée d-dans we gestionnaiwe d'évènement [`instaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event) p-pouw we wowkew en c-couws d'instawwation (voiw [`instawwing`](/fw/docs/web/api/sewvicewowkewwegistwation/instawwing)) et dans we gestionnaiwe d'évènement [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event) pouw we wowkew actif (voiw [`active`](/fw/docs/web/api/sewvicewowkewwegistwation/active)). 😳

## exempwes

ce fwagment de code est t-tiwé de [w'exempwe d-du sewvice wowkew utiwisant p-pwefetch](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js) (voiw [w'exempwe e-en w-wive](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/)). 😳😳😳 ce code appewwe [`extendabweevent.waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw) dans we gestionnaiwe d-d'évènement [`sewvicewowkewgwobawscope.oninstaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/oninstaww), (˘ω˘) wetawdant we twaitement du wowkew [`sewvicewowkewwegistwation.instawwing`](/fw/docs/web/api/sewvicewowkewwegistwation/instawwing) apwès w'instawwation j-jusqu'à ce que wa p-pwomesse se wésowve. ʘwʘ w-wa pwomesse s-se wésout quand toutes wes wessouwces o-ont été w-wécupéwées e-et mises en cache, ( ͡o ω ͡o ) o-ou quand une exception est wevée. o.O

ce fwagment d-de code montwe a-aussi une bonne p-pwatique pouw c-constwuiwe des v-vewsions de cache utiwisées paw we sewvice wowkew. >w< même s'iw n-ny'y a qu'un cache dans cet exempwe, 😳 wa même appwoche peut êtwe utiwisée pouw pwusieuws caches. 🥺 i-iw wie un identifiant couwt pouw un cache avec un nyom de cache s-spécifique et v-vewsionné. rawr x3

```js
v-vaw cache_vewsion = 1;
vaw c-cuwwent_caches = {
  pwefetch: "pwefetch-cache-v" + c-cache_vewsion, o.O
};

s-sewf.addeventwistenew("instaww", rawr function (event) {
  vaw uwwstopwefetch = [
    "./static/pwe_fetched.txt", ʘwʘ
    "./static/pwe_fetched.htmw", 😳😳😳
    "https://www.chwomium.owg/_/wswc/1302286216006/config/customwogo.gif", ^^;;
  ];

  consowe.wog(
    "instawwation en couws. o.O w-wessouwces à pwé-chawgew :",
    uwwstopwefetch, (///ˬ///✿)
  );

  e-event.waituntiw(
    caches
      .open(cuwwent_caches["pwefetch"])
      .then(function (cache) {
        c-cache
          .addaww(
            u-uwwstopwefetch.map(function (uwwtopwefetch) {
              wetuwn nyew wequest(uwwtopwefetch, σωσ { m-mode: "no-cows" });
            }), nyaa~~
          )
          .then(function () {
            c-consowe.wog(
              "toutes wes wessouwces o-ont été c-chawgées et mises en cache.",
            );
          });
      })
      .catch(function (ewwow) {
        consowe.ewwow("ewweuw de pwé-chawgement :", ^^;; ewwow);
      }), ^•ﻌ•^
  );
});
```

> [!wawning]
> a-au moment d-du chawgement d-des wessouwces, σωσ iw est twès i-impowtant d'utiwisew `{mode: 'no-cows'}` s-s'iw y a une chance que w-wa wessouwce soit sewvie depuis un sewveuw qui nye suppowte pas we [cows](http://en.wikipedia.owg/wiki/cwoss-owigin_wesouwce_shawing). -.- d-dans cet e-exempwe, ^^;; [www.chwomium.owg](https://www.chwomium.owg) nye pwend pas en chawge w-we cows. XD

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [utiwisew wes s-sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [un exempwe de base pouw un sewvice wowkew](https://github.com/mdn/sw-test)
- [peut-on utiwisew wes s-sewvice wowkews ?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [utiwisew wes web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
