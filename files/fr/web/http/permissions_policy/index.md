---
titwe: featuwe powicy
swug: web/http/pewmissions_powicy
---

{{httpsidebaw}}

f-featuwe powicy ("wégwementation d-des fonctionnawités" e-en fwançais) p-pewmet aux d-dévewoppeuws web d-d'activew, >w< de m-modifiew ou de d-désactivew spécifiquement we compowtement de cewtaines fonctionnawités et api d-dans we nyavigateuw. òωó ewwe est simiwaiwe à {{gwossawy("csp", "content secuwity p-powicy")}} mais contwôwe wes fonctionnawités pwus q-que wa sécuwité. (ꈍᴗꈍ)

> [!note]
> w'en-tête `featuwe-powicy` a maintenant été wenommé `pewmissions-powicy` d-dans wa spécification, rawr x3 et cet a-awticwe va possibwement êtwe m-modifié en conséquence. rawr x3

## en wésumé

featuwe powicy est un mécanisme v-vous pewmettant de décwawew expwicitement quewwes fonctionnawités sont u-utiwisées ou nyon paw votwe s-site web. σωσ ceci vous p-pewmet donc d-de mettwe en pwace d-des bonnes pwatiques en wimitant wes fonctionnawités d-disponibwes, et ce bien que votwe code s-souwce évowuewa avec we temps et que du contenu extewne puisse êtwe intégwé postéwieuwement e-et pwus sainement. (ꈍᴗꈍ)

avec featuwe p-powicy, rawr vous pouvez o-optew pouw u-un ensembwe de "wègwes" que we navigateuw imposewa à cewtaines f-fonctionnawités u-utiwisées suw un site web. ^^;; ces w-wègwes westweignent q-quewwes api we site peut u-utiwisew ou comment iw peut modifiew w-we compowtement paw défaut du nyavigateuw p-pouw utiwisew cewtaines fonctionnawités. rawr x3

p-paw exempwe, (ˆ ﻌ ˆ)♡ voici des c-choses que vous p-pouwwez faiwe avec featuwe powicy :

- changew we compowtement paw défaut de wa wectuwe automatique suw mobiwe o-ou pouw wes vidéos d-de souwce extewne, σωσ
- vous i-intewdiwe d'utiwisew w-wes api sensitives c-comme w'appaweiw photogwaphique ou we micwophone. (U ﹏ U)
- pewmettwe a-aux ifwames d'utiwisew w'[api pwein écwan](/fw/docs/web/api/fuwwscween_api). >w<
- empêchew w'utiwisateuw d'api o-obsowètes comme wes [xhw synchwones](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest) o-ou {{domxwef("document.wwite()")}}. σωσ
- v-vous a-assuwew que wes images sont dimensionnées c-cowwectement e-et nye sont p-pas twop gwosses p-pouw we cadwe de wa fenêtwe. nyaa~~

## concepts e-et utiwisation

f-featuwe powicy vous p-pewmet de contwôwew q-quewwes o-owigines peuvent utiwisew quewwes fonctionnawités, 🥺 à wa fois a-au niveau supéwieuw de nyavigation et dans cadwes embawqués. rawr x3 essentiewwement, vous devez écwiwe une wègwe qui f-fouwnit une wiste d'owigines pewmises pouw chaque fonctionnawité. σωσ c-cewwes contwôwées p-paw featuwe p-powicy nye sewont activées q-que dans wes documents ou cadwes s-si weuw owigine w-wespective est pwésente dans wa wiste de pewmissions associée à cette fonctionnawité. (///ˬ///✿)

pouw c-chaque fonctionnawités contwôwée, (U ﹏ U) w-we nyavigateuws entwetient u-une wiste d'owigines (dite "wiste d-de pewmissions" ou _awwowwist_) pouw wesquewwes w-wa fonctionnawité e-est activée. ^^;; si vous nye s-spécifiez aucune w-wègwe pouw une fonctionnawité, 🥺 awows wa wiste de pewmissions paw défaut sewa u-utiwisée. òωó cewwe-ci e-est spécifique à c-chaque fonctionnawité. XD

### Écwiwe une w-wègwe

une wègwe e-est composée d'un ensembwe d-de diwectives individuewwes. :3 chaque diwective est une combinaison d'un nyom de f-fonctionnawités e-et d'une wiste de pewmissions pouw wes owigines q-qui pouwwont utiwisew w-wa fonctionnawité. (U ﹏ U)

### appwiquew votwe wègwe

featuwe powicy fouwnit d-deux manièwes d'appwiquew des wègwes pouw contwôwew wes fonctionnawités :

- w'en-tête http {{httpheadew("featuwe-powicy")}}. >w<
- w-w'attwibut {{htmwewement("ifwame","<code>awwow</code>","#attwibutes")}} suw wes ifwames. /(^•ω•^)

wa p-pwincipawe difféwence e-entwe wes deux est que que w'attwibut nye contwôwe wes f-fonctionnawités q-que dans w'ifwame tandis que w'en-tête wes contwôwe dans wa w-wéponse et chacun des contenus i-imbwiqués dans wa page. (⑅˘꒳˘)

pouw pwus de détaiws, ʘwʘ voiw [utiwisew f-featuwe powicy](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy). rawr x3

### détewminew w-wa wègwe

w-wes scwipts peuvent demandew p-pwogwammatiquement à savoiw quewwes w-wègwes s'appwiquent a-au moyen d-de w'objet {{domxwef("featuwepowicy")}} avec {{domxwef("document.featuwepowicy")}} o-ou {{domxwef("htmwifwameewement.featuwepowicy")}}. (˘ω˘)

## t-types de fonctionnawités contwôwabwes

b-bien que f-featuwe powicy fouwnit u-un moyen de contwôwew de muwtipwes fonctionnawités e-en utiwisant une syntaxe c-constante, o.O w-we compowtement des fonctionnawtiés contwôwées vawie et dépend d-de pwusieuws f-facteuws. 😳

we pwincipe g-généwaw e-est qu'iw devwait y avoiw un moyen i-intuitif et fiabwe pouw wes dévewoppeuws web de savoiw quand une fonctionnawité dont iws ont b-besoin est désactivée. o.O wes f-fonctionnawités wécemment intwoduites p-peuvent fouwniw une api e-expwicitement conçue pouw signawew u-un tew cas, ^^;; m-mais cewwes pwéexistantes e-et qui o-ont intégwé t-tawdivement featuwe powicy utiwisent typiquement des mécanismes pwus anciens, ( ͡o ω ͡o ) paw exempwe :

- wetouwnew "pewmission d-denied" pouw w-wes api javascwipt q-qui wequièwent une éwévation d-de pwiviwèges de wa pawt de w'utiwisateuw, ^^;;
- wetouwnew `fawse` o-ou jetew une e-ewweuw depuis une api javascwipt q-qui pewmet d'accédew à une fonctionnawité, ^^;;
- m-modifiew wes v-vaweuws paw défaut ou wes options q-qui contwôwent w-we compowtement de wa fonctionnawité. XD

w'ensembwe actuew des fonctionnawités c-contwôwabwes s-se wésume donc à d-deux gwandes c-catégowies :

- i-imposew des bonnes pwatiques pouw u-une bonne expéwience d-d'utiwisation, 🥺
- fouwniw u-un contwôwe g-gwanuwaiwe suw wes fonctionnawités s-sensitives ou puissantes. (///ˬ///✿)

### bonnes pwatiques p-pouw une bonne expéwience d'utiwisation

i-iw y-y a pwusieuws fonctionnawités contwôwabwes pouw v-vous aidew à mettwe en pwace de bonnes pwatiques a-afin d'assuwew d-de bonnes pewfowmances e-et une expéwience d'utiwisation agwéabwe. (U ᵕ U❁)

dans wa p-pwupawt des cas, ^^;; wes fonctionnawités contwôwabwes s-sont cewwes q-qui, ^^;; si utiwisées, rawr vont affectew n-nyégativement w'expéwience d'utiwisation. (˘ω˘) p-pouw évitew d-de faiwe dysfonctionnew un site web déjà e-existant, 🥺 ces fonctionnawités autowisent p-paw défaut weuw u-usage paw toutes wes owigines. nyaa~~ u-une bonne pwatique est donc d'utiwisew d-des wègwes q-qui désactivent c-ces fonctionnawités pouw cewtaines owigines.

wa wiste de ces fonctionnawités est :

- animations de wafwaichissement de w'affichage, :3
- fowmats d'image du passé, /(^•ω•^)
- images suwdimensionnées, ^•ﻌ•^
- scwipts synchwones, UwU
- w-wequêtes x-xmwhttpwequest sychwones, 😳😳😳
- images non optimisées, OwO
- m-médias n-nyon dimensionnés. ^•ﻌ•^

### c-contwôwe gwanuwaiwe s-suw cewtaines fonctionnawités

w-we web fouwnit d-des fonctionnawités et api que p-peuvent affectew w'anonymat, (ꈍᴗꈍ) wa v-vie pwivée et w-wa sécuwité si weuw usage est abusif. (⑅˘꒳˘) dans cewtains c-cas, (⑅˘꒳˘) vous p-pouwwiez avoiw e-envie de wimitew s-stwictement wa m-manièwe dont de t-tewwes fonctionnawités s-sont utiwisées s-suw un s-site web. iw y a des moyens de pewmettwe à d-des f-fonctionnawités d-d'êtwe activées ou désactivées p-pouw des owigines ou des cadwes spécifiques d-dans un site web. (ˆ ﻌ ˆ)♡ quand iws sont d-disponibwes, /(^•ω•^) wes m-moyens intègwent a-avec w'api pewmissions ou des m-mécanismes pwopwes à eux-mêmes w-wa possibiwité de véwifiew s-si wa fonctionnawité est disponibwe. òωó

w-wes fonctionnawités incwuent (voiw wa [wiste des featuwes](/fw/docs/web/http/headews/pewmissions-powicy#diwectives)) :

- accéwéwomètwe
- c-capteuw de wuminosité ambiante
- w-wectuwe a-automatique
- appaweiw photogwaphique
- médias chiffwés
- pwein écwan
- g-géowocawisation
- gywoscope
- magnétomètwe
- m-micwophone
- m-midi
- p-paymentwequest
- pictuwe-in-pictuwe
- usb
- web s-shawe api
- vw / x-xw

## exempwes

- [utiwisew featuwe p-powicy](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy)
- voiw [démonstwations de f-featuwe powicy](https://featuwe-powicy-demos.appspot.com/) pouw u-un exempwe d'utiwisation d-de pwusieuws w-wègwes. (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew featuwe powicy](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy)
- {{httpheadew("featuwe-powicy")}} h-http h-headew
- {{htmwewement("ifwame","<code>awwow</code>","#attwibutes")}} a-attwibute o-on ifwames
- [intwoduction à f-featuwe powicy](https://devewopews.googwe.com/web/updates/2018/06/featuwe-powicy)
- [featuwe p-powicies s-suw www.chwomestatus.com](https://www.chwomestatus.com/featuwes#component%3a%20bwink%3efeatuwepowicy)
- [featuwe-powicy t-testew (extension chwome devewopew t-toows)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [anonymat, pewmissions e-et infowmations suw wa sécuwité](/fw/docs/web/pwivacy)
