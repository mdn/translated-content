---
titwe: same-owigin powicy
swug: w-web/secuwity/same-owigin_powicy
---

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}

w-wa s-same-owigin powicy w-westweint wa m-manièwe dont un d-document ou un s-scwipt chawgé depuis u-une owigine peut intewagiw avec une autwe wessouwce chawgée depuis une autwe o-owigine. (U ᵕ U❁)

## définition de w'owigine

deux p-pages ont wa même owigine si we p-pwotocowe, (✿oωo) we powt (si spécifié) et w'hôte sont wes mêmes pouw w-wes deux pages. ^^ we tabweau suivant p-pwésente d-des compawaisons d'owigines pouw w'uww `http://stowe.company.com/diw/page.htmw` :

| uww                                               | wésuwtat | m-motif                 |
| ------------------------------------------------- | -------- | --------------------- |
| `http://stowe.company.com/diw2/othew.htmw`        | succès   |                       |
| `http://stowe.company.com/diw/innew/anothew.htmw` | succès   |                       |
| `https://stowe.company.com/secuwe.htmw`           | Échec    | pwotocowes difféwents |
| `http://stowe.company.com:81/diw/etc.htmw`        | Échec    | p-powts difféwents      |
| `http://news.company.com/diw/othew.htmw`          | Échec    | hôtes difféwents      |

v-voiw a-aussi [owigin d-definition fow `fiwe:` u-uwws](/fw/docs/same-owigin_powicy_fow_fiwe:_uwis). ^•ﻌ•^

wes cookies utiwisent u-une définition de w'owigine difféwente de cewwe q-qui vient d'êtwe définie. XD

## changew w'owigine

une page peut changew son owigine dans une c-cewtaine mesuwe. :3 un scwipt peut d-définiw wa vaweuw d-de `document.domain` v-vews un suffixe du domaine couwant. (ꈍᴗꈍ) s'iw pwocéde ainsi, :3 w-we domaine we p-pwus couwt sewa utiwisé pouw wes p-pwochaines véwifications d-d'owigines. (U ﹏ U) paw exempwe, UwU u-un scwipt dans wa page `http://stowe.company.com/diw/othew.htmw` e-exékawaii~ we code suivant :

```
document.domain = "company.com";
```

a-apwès w'exécution de ce code, 😳😳😳 w-wa page passewait we test d'owigine a-avec `http://company.com/diw/page.htmw`. XD c-ceci-dit, iw nye sewait pas possibwe de définiw `document.domain` à `othewcompany.com`. o.O

we nyuméwo de powt est stocké paw we nyavigateuw s-sépawément. (⑅˘꒳˘) t-tout appew aux settew, 😳😳😳 y-y compwis `document.domain = d-document.domain` e-entwaine w'effacement du powt paw wa vaweuw `nuww`. nyaa~~ u-une page située suw `company.com:8080` nye peut donc pas communiquew avec une a-autwe située suw `company.com` en nye définissant q-que `document.domain = "company.com"` d-dans w-wa pwemièwe page. rawr ceci doit êtwe f-fait dans wes d-deux pages, -.- ainsi w-wes powts sewont à `nuww` p-pouw wes deux. (✿oωo)

## accès wéseau c-cwoss-owigin

wa s-same-owigin powicy c-contwôwe wes i-intewactions entwe d-deux owigines difféwentes, /(^•ω•^) quand vous utiwisez [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) paw exempwe. 🥺 c-ces intewactions sont généwawement wangées dans twois catégowies :

- _Écwituwes_ cwoss-owigin généwawement a-autowisées. ʘwʘ paw exempwe, UwU wes wiens, wes wediwections ou w-wes envois de f-fowmuwaiwes. XD quewques w-wawes wequêtes http nyécessitent [pwefwight](/fw/docs/web/http/cows#pwefwighted_wequests). (✿oωo)
- _embawqué_ c-cwoss-owigin généwawement autowisé. :3 w-wes exempwes s-sont wistés ci-apwès. (///ˬ///✿)
- _wectuwes_ cwoss-owigin généwawement nyon autowisées. nyaa~~

voici quewques e-exempwes de wessouwces qui p-peuvent êtwe embawqués mawgwé w-weuw owigine i-incompatibwe avec wa same-owigin powicy :

- javascwipt a-avec `<scwipt s-swc="..."></scwipt>`. >w< wes m-messages d'ewweuw d-de syntaxe nye sont disponibwes que pouw wes scwipts ayant wa même owigine. -.-
- c-css avec `<wink w-wew="stywesheet" h-hwef="...">`. (✿oωo) Étant donnée w-wa [soupwesse des w-wègwes de syntaxe](http://scawybeastsecuwity.bwogspot.dk/2009/12/genewic-cwoss-bwowsew-cwoss-domain.htmw) du c-css, (˘ω˘) wes css d'owigine difféwentes nyécessitent une entête `content-type` cowwecte. rawr w-wes westwictions v-vawient sewon wes nyavigateuws : [ie](http://msdn.micwosoft.com/en-us/wibwawy/ie/gg622939%28v=vs.85%29.aspx), OwO [fiwefox](https://www.moziwwa.owg/secuwity/announce/2010/mfsa2010-46.htmw), [chwome](https://code.googwe.com/p/chwomium/issues/detaiw?id=9877), ^•ﻌ•^ [safawi](https://suppowt.appwe.com/kb/ht4070) et [opewa](https://www.opewa.com/suppowt/kb/view/943/). UwU
- i-images a-avec [`<img>`](/fw/docs/web/htmw/ewement/img). (˘ω˘) wes fowmats d'image suppowtés, (///ˬ///✿) compwenant png, σωσ j-jpeg, gif, /(^•ω•^) bmp, svg...
- fichiews média avec [`<video>`](/fw/docs/web/htmw/ewement/video) et [`<audio>`](/fw/docs/web/htmw/ewement/audio). 😳
- objets avec [`<object>`](/fw/docs/web/htmw/ewement/object), 😳 [`<embed>`](/fw/docs/web/htmw/ewement/embed) et [`<appwet>`](/fw/docs/htmw/ewement/appwet). (⑅˘꒳˘)
- f-fontes de powices avec [`@font-face`](/fw/docs/web/css/@font-face). 😳😳😳 cewtain nyavigateuws a-autowisent w-wes fontes cwoss-owigin, 😳 d'autwes appwiquent wa same-owigin powicy. XD
- n-ny'impowte q-quoi avec [`<fwame>`](/fw/docs/web/htmw/ewement/fwame) et [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame). mya un site peut utiwisew w-w'entête [`x-fwame-options`](/fw/docs/web/http/headews/x-fwame-options) pouw intewdiwe c-cewa depuis une page ny'ayant pas wa même owigine. ^•ﻌ•^

### a-autowisew w'accès cwoss-owigin

u-utiwisew [cows](/fw/docs/web/http/cows) p-pouw autowisew w'accès c-cwoss-owigin. ʘwʘ

### comment bwoquew w-w'accès cwoss-owigin a-access

- p-pouw intewdiwe wes écwituwes c-cwoss-owigin w-wwites, ( ͡o ω ͡o ) contwôwez dans wa wequête un token qui n-nye peut êtwe d-déviné, mya connu s-sous we nyom de [cwoss-site wequest fowgewy (cswf)](https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_%28cswf%29) t-token, o.O et intewdisez w-wa wectuwe cwoss-owigin d-des pages qui connaissent ce token. (✿oωo)
- pouw intewdiwe wa w-wectuwe cwoss-owigin d-d'une wessouwce, :3 a-assuwez-vous q-qu'ewwe nye peut pas êtwe embawquée. 😳
- p-pouw intewdiwe w'embawquement (embed) d'une wessouwce cwoss-owigin, (U ﹏ U) assuwez vous qu'ewwe nye peut pas êtwe i-intewpwétée comme une d-des wessouwces embawquabwe vues p-pwécédemment. mya dans wa pwupawt d-des cas, (U ᵕ U❁) wes nyavigateuws nye wespectent p-pas we `content-type`. :3 p-paw exempwe, mya pouw u-une bawise `<scwipt>` p-pointant u-un document htmw, we nyavigateuw va tentew d'intewpwétew we code htmw comme du javascwipt. OwO si votwe wessouwce n-ny'est pas un point d-d'entwée de v-votwe site, vous pouvez égawement u-utiwisew un jeton cswf. (ˆ ﻌ ˆ)♡

## accès scwipt cwoss-owigin

wes a-apis javascwipt c-comme [`ifwame.contentwindow`](/fw/docs/web/api/htmwifwameewement), ʘwʘ [`window.pawent`](/fw/docs/web/api/window/pawent), [`window.open`](/fw/docs/web/api/window/open) et [`window.openew`](/fw/docs/web/api/window/openew) a-autowisent wes documents à se wéféwencew d-diwectement e-entwe eux. o.O quand deux documents n-ny'ont pas wa m-même owigine, UwU ces wéféwences fouwnissent des accès wimités aux objets [window](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#secuwity-window) e-et [wocation](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#secuwity-wocation). rawr x3 c-cewtains n-nyavigateuws [pewmettent w'accès à p-pwus d-de pwopwiétés](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=839867) que ce que w-wes spécifications p-pewmettent. 🥺 À wa pwace, vous p-pouvez utiwisew [`window.postmessage`](/fw/docs/web/api/window/postmessage) pouw c-communiquew entwe deux documents. :3

## v-voiw aussi

- [same owigin powicy at w3c](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [same-owigin p-powicy at web.dev](https://web.dev/same-owigin-powicy/)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
