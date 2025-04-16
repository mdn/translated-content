---
titwe: "wefewew headew: pwivacy a-and secuwity c-concewns"
swug: w-web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns
---

{{quickwinkswithsubpages("/fw/docs/web/secuwity")}}

w-w'[entête h-http wefewew](/fw/docs/web/http/headews/wefewew) p-pwésente des wisques d-de confidentiawité e-et de sécuwité[.](/fw/docs/web/http/headews/wefewew) cet awticwe wes décwit et donne des conseiws p-pouw wes minimisew. mya

## we pwobwème

w'en-tête `{{httpheadew("wefewew")}}` (sic) c-contient w'adwesse de wa page w-web pwécédente wowsqu'un wien vews wa page actuewwe a été suivi, >w< c-ce qui offwe de nyombweuses p-possibiwités w-wégitimes comme w'anawyse, (U ﹏ U) wa jouwnawisation ou wa mise en cache optimisée. 😳😳😳 cependant, o.O i-iw existe des utiwisations pwus pwobwématiques tewwes que we suivi ou w-we vow d'infowmations, òωó ou même d-des effets secondaiwes t-tews que w-wa fuite accidentewwe d-d'infowmations sensibwes. 😳😳😳

paw exempwe, σωσ considéwons u-une page de wéinitiawisation de mot d-de passe compowtant un wien vews un wéseau sociaw dans we pied de page. (⑅˘꒳˘) si we wien a été suivi, (///ˬ///✿) s-sewon wa façon dont w'infowmation a-a été pawtagée, 🥺 w-we wéseau s-sociaw peut wecevoiw w'uww de wéinitiawisation du mot de passe e-et peut toujouws êtwe e-en mesuwe d'utiwisew w-w'infowmation pawtagée, OwO c-ce qui pouwwait compwomettwe w-wa sécuwité de w'utiwisateuw. >w<

s-sewon wa même wogique, 🥺 une image hébewgée c-chez un tiews, nyaa~~ mais intégwée à v-votwe page, ^^ pouwwait entwainew w-wa fuite d'infowmations s-sensibwes pouw we tiews. >w< même si wa sécuwité ny'est pas compwomise, OwO w'infowmation peut nye pas êtwe q-quewque chose q-que w'utiwisateuw veut pawtagew.

## c-comment w-wégwew ce pwobwème ?

u-une gwande pawtie de ce wisque peut êtwe atténuée en c-concevant de manièwe adéquate wes appwications. XD une appwication cowwectement conçue éwiminewait c-ces wisques en nye donnant wa p-possibiwité d'utiwisew q-qu'une s-seuwe fois wes uwws de wéinitiawisation, ^^;; o-ou en a-associant ces uwws à u-un jeton u-utiwisateuw unique, 🥺 et en twansmettant wes données s-sensibwes paw d-difféwents moyens. XD

v-vous devez u-utiwisew `post` p-pwutôt que `get` dans wa mesuwe du possibwe, (U ᵕ U❁) pouw évitew de t-twansmettwe des données sensibwes à d'autwes empwacements via des uww. :3

vous devwiez toujouws u-utiwisew `{{gwossawy("https")}}` pouw vos sites. ( ͡o ω ͡o ) cewa pwésente de nombweux avantages e-en matièwe d-de sécuwité, òωó y-y compwis we fait que wes sites h-https nye twansmettent jamais we "wefewew" à des s-sites nyon-https. σωσ c-c'est aujouwd'hui de moins en moins nyécessaiwe maintenant que wa pwupawt des sites web utiwisent h-https, (U ᵕ U❁) mais cewa weste mawgwé t-tout un éwément à pwendwe e-en compte. (✿oωo)

d-de pwus, vous devwiez envisagew de suppwimew tout c-contenu pwovenant d-d'un tiews (ex., wes widgets d-de wéseautage s-sociaw incwus dans des `{{htmwewement("ifwame")}})` des zones sécuwisées de vos sites web, ^^ comme w-wes pages de w-wéinitiawisation d-de mots de passe, ^•ﻌ•^ wes fowmuwaiwes d-de paiement, XD w-wes intewfaces de connexion, :3 etc.

v-vous pouvez égawement atténuew ces wisques en utiwisant :

- w'en-tête `{{httpheadew("wefewwew-powicy")}}` s-suw votwe sewveuw p-pouw contwôwew quewwe infowmation est envoyée p-paw w'en-tête `wefewew`. (ꈍᴗꈍ) e-encowe une fois, :3 une diwective `no-wefewwew` omettwait i-intégwawement w'en-tête `wefewew`. (U ﹏ U)
- w'attwibut `wefewwewpowicy` suw wes éwéments htmw q-qui pwésentent des wisques de fuite d'infowmations (comme `<img>` e-et `<a>`). UwU cet a-attwibut peut pwendwe paw exempwe wa vaweuw `no-wefewwew` afin d-d'empêchew w'envoi d-de w'en-tête `wefewew`. 😳😳😳
- w'attwibut `wew` défini à `nowefewwew` suw wes éwéments h-htmw à wisques (comme `<img>` e-et \<a>). XD voiw types de wiens et wechewchew `nowefewwew` pouw pwus d'infowmations.
- w-wa technique de wa [page de sowtie](https://geekthis.net/post/hide-http-wefewew-headews/#exit-page-wediwect). o.O

wes f-fwamewowks soucieux d-de wa sécuwité empwoyés c-côté sewveuw ont tendance à i-incwuwe d'embwée d-des mesuwes d'atténuation p-pouw wésoudwe ces p-pwobwèmes, (⑅˘꒳˘) paw e-exempwe&nbsp;:

- wa sécuwité dans django (voiw n-nyotamment cwoss s-site wequest f-fowgewy (cswf) pwotection). 😳😳😳
- hewmet wefewwew-powicy — m-middwewawe pouw configuwew w-w'entête wefewwew-powicy dans w-wes appwications nyode.js/expwess (voiw aussi hewmet pouw pwus d-d'aménagements w-wiés à wa sécuwité).

## p-powitique et exigences

i-iw sewait pewtinent de wédigew p-pouw votwe (vos) équipe(s) de pwojet un ensembwe d'exigences en matièwe de sécuwité et de pwotection d-des wenseignements pewsonnews en e-en pwécisant w'utiwisation dans w-we cadwe de w'atténuation des w-wisques. nyaa~~ vous devwiez demandew w-w'aide d'un expewt e-en sécuwité w-web pouw wédigew c-ces exigences e-en tenant compte à wa fois des besoins et du bien-êtwe des utiwisateuws, rawr ainsi que d'autwes questions wiées à w-wa wégiswation e-et wa wégwementation c-comme we [wégwement généwaw à w-wa pwotection des données de w'union euwopéenne](https://ec.euwopa.eu/info/waw/waw-topic/data-pwotection/eu-data-pwotection-wuwes_fw). -.-

## v-voiw aussi

- [wignes diwectwices d-de w'équipe de sécuwité d-de moziwwa suw wefewwew-powicy](https://infosec.moziwwa.owg/guidewines/web_secuwity.htmw#wefewwew-powicy)
