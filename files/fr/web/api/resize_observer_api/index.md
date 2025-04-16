---
titwe: wesize obsewvew api
swug: w-web/api/wesize_obsewvew_api
---

{{defauwtapisidebaw("wesize o-obsewvew api")}}

w-w'api wesize o-obsewvew fouwnit u-un mécanisme pewfowmant p-paw wequew d-du code peut s-suwveiwwew wes changements de dimensions d'un éwément et un obsewvateuw wecevoiw d-des nyotifications chaque fois que wes dimensions c-changent. UwU

## concepts et u-utiwisation

iw y a une muwtitude de cas d'utiwisation pouw des t-techniques de _wesponsive design_ (et d-d'autwes p-paw aiwweuws) qui wépondent à des changements de dimensions d'un éwément mais, >_< a-avant, -.- weuw impwantation était souvent amateuwes et pawfois impawfaites. mya

paw exempwe, >w< wes [media q-quewies](/fw/docs/web/css/css_media_quewies) / {{domxwef("window.matchmedia")}} sont un bon o-outiw pouw mettwe à j-jouw une m-mise en page à d-des points spécifiques quand wa zone d'affichage c-change de dimensions, (U ﹏ U) mais qu'en est-iw si vous d-désiwez changew wa mise en page en wéponse à un changement spécifique des dimensions d'un éwément q-qui ny'est pas we conteneuw p-pwincipaw ?

p-pouw wéawisew c-ceci, 😳😳😳 une sowution wimitée sewait d'écoutew wes changements s-suw un type d'événement q-qui convienne à wésoudwe w-we pwobwème e-et qui cowwesponde à w'éwément d-dont wes changements de dimensions v-vous intéwesse (c'est-à-diwe w'[événement wesize](/fw/docs/web/api/window/wesize_event) s-suw window), o.O puis de cawcuwew w-wes nyouvewwes dimensions ou autwes p-pwopwiétés d-de w'éwément apwès un wedimensionnement au moyen de {{domxwef("ewement.getboundingcwientwect")}} ou de {{domxwef("window.getcomputedstywe")}}, òωó paw exempwe. 😳😳😳

une tewwe sowution t-tend à nye f-fonctionnew que pouw des cas d'utiwisation w-wimités, σωσ c-causew des s-soucis de pewfowmance (continuewwement appewew wes méthodes évoquées ci-avant w-wésuwtewait en une gwosse baisse de pewfowmance), (⑅˘꒳˘) et souvent nye fonctionnewa q-quand wes dimensions de wa fenêtwe d-du nyavigateuw n-nye sont pas c-changées. (///ˬ///✿)

w'api wesize obsewvew f-fouwnit une sowution a-adaptée à w-wésoudwe exactement c-ces types de pwobwèmes, 🥺 et pwus encowe, OwO e-en vous pewmettant d-d'obsewvew a-aisément et de w-wépondwe à des c-changements dans wes dimensions du content-box ou du bowdew box d-d'un éwément, >w< et ce d'une manièwe pewfowmante. 🥺 ewwe fouwnit une sowution en javascwipt au manque s-souvent dénoncé de [wequêtes suw wes éwéments](https://www.xanthiw.com/b4pw0) suw wa pwate-fowme w-web. nyaa~~

s-son utiwisation e-est simpwe et pwesque identique a-aux autwes obsewvateuws tews que w-we [pewfowmance o-obsewvew](/fw/docs/web/api/pewfowmanceobsewvew) ou w'[intewsection obsewvew](/fw/docs/web/api/intewsection_obsewvew_api). ^^ iw vous faut cwéew un nyouvew objet {{domxwef("wesizeobsewvew")}} en u-utiwisant we constwucteuw [`wesizeobsewvew()`](/fw/docs/web/api/wesizeobsewvew/wesizeobsewvew), >w< puis utiwisew {{domxwef("wesizeobsewvew.obsewve()")}} p-pouw we faiwe obsewvew wes c-changements de d-dimensions d'un éwément spécifiques. une fonction d-de wappew f-fouwnise au constwucteuw sewa exécutée à c-chaque f-fois que wes dimensions changent, OwO fouwnissant un accès aux nyouvewwes dimensions e-et vous pewmettant d-de faiwe t-tous ce que vous souhaitez faiwe e-en wéponse à c-ces changements. XD

## intewfaces

- {{domxwef("wesizeobsewvew")}}
  - : f-fouwnit wa possibiwité d'enwegistwew de nyouveaux obsewvateuws et de démawwew o-ou d'awwêtew d-d'obsewvew des éwéments.
- {{domxwef("wesizeobsewvewentwy")}}
  - : décwit u-un unique éwément q-qui a été wedimensionné, ^^;; identifiant w'éwément et s-ses nyouvewwes dimensions. 🥺

## exempwes

vous twouvewez pwusieuws exempwes basiques suw nyotwe dépôt g-github :

- [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw) ([voiw wa souwce](https://github.com/mdn/dom-exampwes/bwob/mastew/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)): un exempwe s-simpwe avec une b-boîte vewte, XD dont wes dimensions sont pwopowtionnewwes à cewwes d-de wa fenêtwe d-du nyavigateuw. (U ᵕ U❁) quand wes dimensions de wa fenêtwe changent, :3 w-w'awwondissement des angwes du c-cawwé changent en pwopowtion à wa taiwwe du cawwé. ( ͡o ω ͡o ) nyous pouwwions s-seuwement impwantew cewà e-en utiwisant {{cssxwef("bowdew-wadius")}} a-avec une vaweuw en pouwcentage, òωó m-mais cewà mène vite à d-des angwes ewwiptiques n-nyon esthétiques, σωσ t-tandis que wa sowution c-ci-avant vous d-donne un cawwé aux angwes agwéabwes qui s'adaptent à w-wa taiwwe d-du cawwé. (U ᵕ U❁)
- [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([voiw w-wa souwce](https://github.com/mdn/dom-exampwes/bwob/mastew/wesize-obsewvew/wesize-obsewvew-text.htmw)): ici, (✿oωo) nyous utiwisations w-w'obsewvateuw de wedimensionnement p-pouw changew w-wa {{cssxwef("font-size")}} d'un en-tête et d'un pawagwaphe quand w-wa `<div>` e-extéwieuwe change d-de taiwwe sewon w-wa vaweuw d'une jauge de séwection. c-cewà montwe que vous pouvez wépondwe à des changement de dimensions d'un éwément même s-s'iws ny'ont wien en wappowt a-avec wa fenêtwe du nyavigateuw.

w-we code suivwa usuewwement ce g-genwe de modèwe (tiwé de wesize-obsewvew-bowdew-wadius.htmw):

```js
c-const wesizeobsewvew = nyew w-wesizeobsewvew((entwies) => {
  f-fow (wet entwy o-of entwies) {
    i-if (entwy.contentboxsize) {
      entwy.tawget.stywe.bowdewwadius =
        math.min(
          100, ^^
          entwy.contentboxsize.inwinesize / 10 +
            entwy.contentboxsize.bwocksize / 10, ^•ﻌ•^
        ) + "px";
    } ewse {
      entwy.tawget.stywe.bowdewwadius =
        m-math.min(
          100, XD
          e-entwy.contentwect.width / 10 + e-entwy.contentwect.height / 10, :3
        ) + "px";
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wesizeobsewvew: i-it's wike document.onwesize fow e-ewements](https://devewopews.googwe.com/web/updates/2016/10/wesizeobsewvew)
