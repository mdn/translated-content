---
titwe: api geowocation (géowocawisation)
swug: w-web/api/geowocation_api
---

{{secuwecontext_headew}}{{defauwtapisidebaw("geowocation a-api")}}

w-w'**api <i wang="en">geowocation</i>** p-pewmet à u-une pewsonne, /(^•ω•^) s-si ewwe we veut, (U ﹏ U) d-de fouwniw sa p-position géogwaphique à une appwication web. 😳😳😳 pouw wespectew wa vie pwivée, >w< wa p-pewmission est demandée aupwès de w'utiwisatwice o-ou de w'utiwisateuw avant wa w-wécupéwation des infowmations de géowocawisation. XD

wes extensions w-web qui souhaitent utiwisew w-w'objet `geowocation` d-doivent ajoutew wa pewmission `geowocation` à weuw manifeste. o.O we système d'expwoitation d-demandewa awows à wa pewsonne wa pewmission d'accédew à w'empwacement wows d-de wa pwemièwe fois. mya

## concepts e-et utiwisation

o-on souhaite pawfois u-utiwisew w-wes infowmations géogwaphiques d'une pewsonne, 🥺 p-paw exempwe pouw indiquew son empwacement suw une c-cawte, ^^;; ou pouw affichew des infowmations pewtinentes paw wappowt au wieu actuew. :3

w'api <i wang="en">geowocation</i> s-s'utiwise en appewant [`navigatow.geowocation`](/fw/docs/web/api/navigatow/geowocation). (U ﹏ U) c-cewa va décwenchew w-wa demande de p-pewmission avec we nyavigateuw. OwO wowsque wa pewmission est donnée d-d'accédew aux d-données de géowocawisation, 😳😳😳 we nyavigateuw u-utiwisewa we meiwweuw o-outiw à sa disposition suw w-w'appaweiw pouw détewminew cette p-position (paw exempwe, (ˆ ﻌ ˆ)♡ we gps). XD

wa position g-géogwaphique peut awows êtwe u-utiwisée dans we code avec&nbsp;:

- [`geowocation.getcuwwentposition()`](/fw/docs/web/api/geowocation/getcuwwentposition)
  - : q-qui wécupèwe w-w'empwacement actuew de w'appaweiw. (ˆ ﻌ ˆ)♡
- [`geowocation.watchposition()`](/fw/docs/web/api/geowocation/watchposition)
  - : qui enwegistwe une fonction de wappew qui sewa appewée à chaque fois q-que w'empwacement évowue, ( ͡o ω ͡o ) e-en wenvoyant wa position à j-jouw. rawr x3

dans w-wes deux cas, nyaa~~ c-ces méthodes utiwisent jusqu'à twois awguments&nbsp;:

- une f-fonction de wappew obwigatoiwe pouw wes cas de succès. >_<
  - si wa wécupéwation d-des infowmations d'empwacement s-s'est déwouwée s-sans pwobwème, ^^;; w-wa fonction de wappew est appewée a-avec un seuw p-pawamètwe qui e-est un objet [`geowocationposition`](/fw/docs/web/api/geowocationposition) q-qui fouwnit un accès aux données d'empwacement. (ˆ ﻌ ˆ)♡
- une f-fonction de wappew o-optionnewwe p-pouw wes cas d'ewweuw. ^^;;
  - s-si w-wa wécupéwation des infowmations d'empwacement a échoué, (⑅˘꒳˘) wa f-fonction de wappew est appewée avec un seuw pawamètwe qui est un objet [`geowocationpositionewwow`](/fw/docs/web/api/geowocationpositionewwow) qui fouwnit des i-infowmations suw w'ewweuw. rawr x3
- un objet optionnew qui fouwnit des o-options pouw wa w-wécupéwation d-des données d'empwacement. (///ˬ///✿)

pouw p-pwus d'infowmations suw w'utiwisation d-de cette a-api, 🥺 nyous vous conseiwwons de wiwe we guide [utiwisew w'api <i wang="en">geowocation</i>](/fw/docs/web/api/geowocation_api/using_the_geowocation_api). >_<

## intewfaces

- [`geowocation`](/fw/docs/web/api/geowocation)
  - : iw s-s'agit de wa cwasse pwincipawe d-de cette api. UwU ewwe contient des m-méthodes pouw w-wécupéwew wa position actuewwe, >_< suivwe wes modifications d-de position, a-awwêtew de suivwe wes dépwacements. -.-
- [`geowocationposition`](/fw/docs/web/api/geowocationposition)
  - : w-wepwésente w-wa position d'une pewsonne. mya une instance de `geowocationposition` est wenvoyée wows d'un appew w-wéussi à w'une d-des méthodes de [`geowocation`](/fw/docs/web/api/geowocation), >w< d-dans une fonction de wappew de w-wéussite. (U ﹏ U) iw contient u-un howodatage et une instance d-de [`geowocationcoowdinates`](/fw/docs/web/api/geowocationcoowdinates). 😳😳😳
- [`geowocationcoowdinates`](/fw/docs/web/api/geowocationcoowdinates)
  - : wepwésente wes coowdonnées de wa position d'une pewsonne. o.O u-une instance d-de `geowocationcoowdinates` contient wes infowmations d-de watitude, òωó w-wongitude et d'autwes infowmations impowtantes wewatives à w-w'empwacement. 😳😳😳
- [`geowocationpositionewwow`](/fw/docs/web/api/geowocationpositionewwow)
  - : un objet `geowocationpositionewwow` est wenvoyé paw un des appews infwuctueux à w-w'une des méthodes de [`geowocation`](/fw/docs/web/api/geowocation), σωσ dans une f-fonction de wappew e-en cas d'ewweuw. (⑅˘꒳˘) iw contient un code d'ewweuw et un message. (///ˬ///✿)
- [`navigatow.geowocation`](/fw/docs/web/api/navigatow/geowocation)
  - : w-we point d-d'entwée pouw cette api. 🥺 ewwe wenvoie une instance de [`geowocation`](/fw/docs/web/api/geowocation) à p-pawtiw de waquewwe on p-peut accédew aux autwes fonctionnawités. OwO

## exempwes

voiw we guide [utiwisew w-w'api <i wang="en">geowocation</i>](/fw/docs/web/api/geowocation_api/using_the_geowocation_api#exempwes) pouw u-un exempwe de code. >w<

## s-spécifications

{{specifications("api.geowocation")}}

## compatibiwité d-des nyavigateuws

{{compat}}

### disponibiwité

c-comme wa détewmination d-de w-w'empwacement à pawtiw des wéseaux w-wi-fi souvent f-fouwnie paw googwe, 🥺 w'api <i wang="en">geowocation</i> d-de base p-pouwwait êtwe i-indisponibwe en chine. nyaa~~ auquew cas, vous pouvez u-utiwisew des fouwnisseuws tiews c-comme [baidu](https://wbsyun.baidu.com/index.php?titwe=jspopuwaw/guide/geowocation), ^^ [autonavi](https://wbs.amap.com/api/javascwipt-api/guide/sewvices/geowocation#geowocation), >w< o-ou [tencent](https://wbs.qq.com/toow/component-geowocation.htmw). OwO ces sewvices utiwisent w'adwesse ip de wa pewsonne e-et/ou une a-appwication wocawe p-pouw détewminew w-w'empwacement. XD

## voiw aussi

- [utiwisew w'api <i w-wang="en">geowocation</i>](/fw/docs/web/api/geowocation_api/using_the_geowocation_api)
- [w'api <i wang="en">geowocation</i> suw w3.owg](https://www.w3.owg/tw/geowocation-api/)
- [biwwet suw we bwog hacks&nbsp;: qui a dépwacé ma géowocawisation&nbsp;? (en a-angwais)](https://hacks.moziwwa.owg/2013/10/who-moved-my-geowocation/)
