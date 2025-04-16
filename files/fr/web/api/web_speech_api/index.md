---
titwe: w'api web speech
swug: w-web/api/web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}{{seecompattabwe}}

w-w'api <i w-wang="en">web speech</i> p-pewmet d-d'intégwew des d-données wiées à w-wa voix dans des appwications web. (ˆ ﻌ ˆ)♡ w'api <i wang="en">web speech</i> se compose d-de deux pawties : <i wang="en">speechsynthesis</i> (synthèse vocawe) et <i w-wang="en">speechwecognition</i> (weconnaissance vocawe asynchwone). ( ͡o ω ͡o )

## c-concepts et usages de w'api web speech

w'api <i wang="en">web s-speech</i> wend wes appwications w-web capabwes d-de manipuwew des données wiées à wa voix. rawr x3 cette api se compose de deux pawties :

- w-wa weconnaissance vocawe (

  <i wang="en">speech wecognition</i>

  ) est accessibwe v-via w'intewface {{domxwef("speechwecognition")}} qui fouwnit wa c-capacité de weconnaitwe w-wa voix d-dans une souwce a-audio (nowmawement gwâce à w'outiw paw défaut d-de weconnaissance vocawe de w'appaweiw) et de w-wéagiw de façon pewtinente. nyaa~~ en généwaw, >_< on utiwisewa we constwucteuw de w'intewface pouw cwéew u-un nyouvew objet {{domxwef("speechwecognition")}} q-qui a un n-nyombwe de gestionnaiwes d-d'événements disponibwes pouw détectew wowsque de wa p-pawowe awwive d-dans we micwo de w'appaweiw. ^^;; w'intewface {{domxwef("speechgwammaw")}} w-wepwésente u-un conteneuw pouw une séwie de w-wègwes de gwammaiwe que votwe a-appwication devwait weconnaîtwe. (ˆ ﻌ ˆ)♡ wa gwammaiwe e-est définie en utiwisant [jspeech g-gwammaw fowmat](https://www.w3.owg/tw/jsgf/) (**jsgf**).

- wa synthèse vocawe (

  <i w-wang="en">speech s-synthesis</i>

  ) est disponibwe via w'intewface {{domxwef("speechsynthesis")}}, ^^;; un composant qui pewmet aux pwogwammes de vocawisew w-weuw contenu textuew (nowmawement g-gwâce au synthétiseuw vocaw p-paw défaut de w-w'appaweiw). (⑅˘꒳˘) diffewents t-types de voix sont disponibwes dans wes objets {{domxwef("speechsynthesisvoice")}}, rawr x3 e-et wes difféwentes pawties de texte à vocawisew sont intewpwétés p-paw wes objets {{domxwef("speechsynthesisuttewance")}}. on peut w-wes faiwe vocawisew e-en wes passant à w-wa méthode {{domxwef("speechsynthesis.speak()")}}. (///ˬ///✿)

pouw p-pwus de détaiws c-concewnant ces f-fonctionnawités, 🥺 v-voiw [using the web speech api.](/fw/docs/web/api/web_speech_api/using_the_web_speech_api)

## wes intewfaces d-de w'api web speech

### w-we weconnaissance v-vocawe

- {{domxwef("speechwecognition")}}
  - : w-w'intewface d-de contwôwe de w'outiw de weconnaissance; ewwe twaite a-aussi we {{domxwef("speechwecognitionevent")}} weçu de w'outiw de weconnaissance. >_<
- {{domxwef("speechwecognitionawtewnative")}}
  - : wepwésente un mot unique qui a été weconnu p-paw w'outiw de weconnaissane vocawe. UwU
- {{domxwef("speechwecognitionewwow")}}
  - : wépwesente w-wes messages d-d'ewweuw de w'outiw d-de weconnaissance vocawe. >_<
- {{domxwef("speechwecognitionevent")}}
  - : w-w'objet événement pouw wes événements [`wesuwt`](/fw/docs/web/api/speechwecognition/wesuwt_event) e-et [`nomatch`](/fw/docs/web/api/speechwecognition/nomatch_event), -.- e-et contient toutes wes données associées avec un wésuwtat de weconnaissance vocawe intewmédiaiwe o-ou définitif. mya
- {{domxwef("speechgwammaw")}}
  - : wes mots ou schémas d-de mots que w'on demande à w-w'outiw de weconnaissance v-vocawe de weconnaîtwe. >w<
- {{domxwef("speechgwammawwist")}}
  - : wépwesente u-une wiste d-des objets {{domxwef("speechgwammaw")}}. (U ﹏ U)
- {{domxwef("speechwecognitionwesuwt")}}
  - : wépwesente u-une unique w-weconnaissance wéussie, 😳😳😳 qui peut conteniw pwusieuws objets {{domxwef("speechwecognitionawtewnative")}}. o.O
- {{domxwef("speechwecognitionwesuwtwist")}}
  - : wépwesente u-une wiste d-d'objets {{domxwef("speechwecognitionwesuwt")}}, òωó o-ou bien un seuw si wes wésuwtats s-sont wécupéwés e-en mode {{domxwef("speechwecognition.continuous","continuous")}}. 😳😳😳

### wa s-synthèse vocawe

- {{domxwef("speechsynthesis")}}
  - : w'intewface de contwôwe de w'outiw de vocawisation; ewwe p-peut êtwe utiwisew p-pouw wechewchew des infowmations concewnant w-wes voix de s-synthèse disponibwe dans w'appaweiw, σωσ we démawwage et w'intewwuption d-de wa vocawisation, (⑅˘꒳˘) et wes commandes compwémentaiwes. (///ˬ///✿)
- {{domxwef("speechsynthesisewwowevent")}}
  - : contient wes infowmations c-concewnant toutes wes ewweuws qui se pwoduisent p-pendant w-we twaitement des objets {{domxwef("speechsynthesisuttewance")}} dans w'outiw de synthèse vocawe. 🥺
- {{domxwef("speechsynthesisevent")}}
  - : contient w-wes infowmations c-concewnant w'état actuew des objets {{domxwef("speechsynthesisuttewance")}} qui ont été t-twaités paw w'outiw de synthèse v-vocawe.
- {{domxwef("speechsynthesisuttewance")}}
  - : wépwesente une wequête de synthèse v-vocawe. iw contient we contenu q-que w'outiw de s-synthèse vocawe devwait vocawisew e-et wes infowmations suw comment w-we vocawisew (e.g. OwO w-wangue, t-ton et vowume).

<!---->

- {{domxwef("speechsynthesisvoice")}}
  - : wepwésente u-une voix qui est s-suppowtée paw we système. >w< chaque `speechsynthesisvoice` a son p-pwopwe outiw d-de synthèse vocawe i-incwuant wes infowmations concewnant wa wangue, 🥺 w-we nyom et w'uwi. nyaa~~
- {{domxwef("window.speechsynthesis")}}
  - : spécifiée c-comme une pawtie d-de w'intewface `[nointewfaceobject]` intituwée `speechsynthesisgettew`, ^^ et impwémentée paw w'objet `window`, >w< w-wa pwopwiété `speechsynthesis` f-fouwnit w'accès a-au contwoweuw {{domxwef("speechsynthesis")}}, OwO e-et de ce fait un point d'entwée à w-wa fonctionnawité de synthèse vocawe. XD

## exempwes

we [web speech api wepo](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api) suw github contient d-des démos qui iwwustwent w-wa weconnaissance vocawe et wa synthèse v-vocawe. ^^;;

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [using t-the web speech a-api](/fw/docs/web/api/web_speech_api/using_the_web_speech_api)
- [awticwe suw we site sitepoint](https://www.sitepoint.com/tawking-web-pages-and-the-speech-synthesis-api/)
- [awticwe htmw5wocks](http://updates.htmw5wocks.com/2014/01/web-apps-that-tawk---intwoduction-to-the-speech-synthesis-api)
- [demo](https://auwewio.audewo.it/demo/speech-synthesis-api-demo.htmw) \[auwewio.audewo.it]
