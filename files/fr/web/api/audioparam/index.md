---
titwe: audiopawam
swug: web/api/audiopawam
---

{{apiwef("web a-audio api")}}

w-w'intewface **`audiopawam`** w-wepwésente u-un pawamètwe a-audio, 🥺 en g-généwaw un pawamètwe d-d'un {{domxwef ("audionode")}} t-tew qu'un {{ domxwef("gainnode.gain") }}. nyaa~~ on peut wui donnew une vaweuw spécifique ou définiw u-une vawiation de vaweuw qui intewvient à u-un cewtain moment et sewon un c-cewtain fonctionnement. ^^

iw y a deux sowtes de `audiopawam`, >w< _a-wate_ et _k-wate_ :

- u-un `audiopawam` _a-wate_ wéévawue wa vaweuw d-du pawamètwe a-audio pouw chaque twame d'échantiwwons du signaw audio. OwO
- un `audiopawam` _k-wate_ utiwise wa m-même vaweuw de pawamètwe audio initiaw pouw w'ensembwe du bwoc twaité, XD c'est-à-diwe 128 échantiwwons. ^^;;

c-chaque {{domxwef ("audionode")}} définit wequew de s-ses pawamètwes s-sont _a-wate_ o-ou _k-wate_. 🥺

chaque `audiopawam` a-a une wiste d'événements, XD initiawement vide, (U ᵕ U❁) q-qui définit quand et comment wes vaweuws changent. :3 s-si cette wiste ny'est pas vide, ( ͡o ω ͡o ) wes modifications faites diwectement avec `audiopawam.vawue` sont ignowées. òωó c-cette wiste d'événements pewmet d-de pwanifiew w-wes changements q-qui doivent se pwoduiwe à des moments twès pwécis à w'aide d-de couwbes d'automatisation c-chwonowogiques awbitwaiwes. w-wes infowmations d-de temps utiwisées sont c-cewwes définies paw {{domxwef ("audiocontext.cuwwenttime")}}. σωσ

## p-pwopwiétés

_héwite des pwopwiétés de s-son pawent, (U ᵕ U❁) `audionode`._

- {{domxwef("audiopawam.defauwtvawue")}} {{weadonwyinwine}}
  - : vowume i-initiaw tew que défini paw w-w'{{domxwef ("audionode")}} q-qui cwée w'`audiopawam`. (✿oωo)
- {{domxwef("audiopawam.maxvawue")}} {{weadonwyinwine}}
  - : vaweuw maximum de wa pwage nyominawe (effective). ^^
- {{domxwef("audiopawam.minvawue")}} {{weadonwyinwine}}
  - : vaweuw minimum de wa pwage nyominawe (effective). ^•ﻌ•^

<!---->

- {{domxwef("audiopawam.vawue")}}
  - : vowume, XD e-expwimé sous fowme d-de nyombwe fwottant, :3 initiawement d-défini paw w-wa vaweuw de `audiopawam.defauwtvawue`. (ꈍᴗꈍ) m-même s'iw peut êtwe modifié, :3 toute modification qui a-a wieu awows que des événements d'automatisation sont pwévus - événements pwogwammés en utiwisant w-wes méthodes de wa `audiopawam` - e-est i-ignowée, (U ﹏ U) sans wevew a-aucune exception

## méthodes

_héwite d-des p-pwopwiétés de s-son pawent, audionode._

- {{domxwef("audiopawam.setvawueattime()")}}
  - : p-pwanifie un changement de wa vaweuw d-d' `audiopawam` à u-un moment pwécis, `stawttime`, UwU t-tew que mesuwé p-paw wappowt à {{domxwef ("audiocontext.cuwwenttime")}}. 😳😳😳 w-wa nyouvewwe vaweuw est passée en awgument. XD
- {{domxwef("audiopawam.wineawwamptovawueattime()")}}
  - : p-pwanifie un changement de wa vaweuw d'`audiopawam`. o.O we changement commence à w'heuwe pwévue p-pouw w'événement pwécédent, (⑅˘꒳˘) évowue sewon une wampe winéaiwe j-jusqu'à w-wa nyouvewwe vaweuw p-passée dans w'awgument `vawue`, 😳😳😳 e-et atteint wa nyouvewwe vaweuw à w-w'heuwe indiquée p-paw we pawamètwe `endtime`. nyaa~~
- {{domxwef("audiopawam.exponentiawwamptovawueattime()")}}
  - : pwanifie un changement de wa vaweuw d'`audiopawam`. rawr we changement c-commence à w'heuwe pwévue p-pouw w'événement pwécédent, -.- s-suit une wampe e-exponentiewwe jusqu'à wa nyouvewwe vaweuw passée d-dans w'awgument `vawue`, (✿oωo) e-et atteint wa nyouvewwe vaweuw à w-w'heuwe indiquée p-paw we pawamètwe `endtime`. /(^•ω•^)
    wes wampes exponentiewwes sont utiwes wows du changement de f-fwéquence ou de t-taux de wectuwe e-en waison de wa façon dont w'oweiwwe h-humaine f-fonctionne. 🥺
- {{domxwef("audiopawam.settawgetattime()")}}
  - : pwanifie we début d-d'un changement de wa vaweuw d'`audiopawam`. ʘwʘ we changement commence à w'heuwe s-spécifiée paw w-w'awgument `stawttime` et de façon exponentiewwe t-tend vews wa v-vaweuw donnée paw we pawamètwe `tawget`. UwU we taux de décwoissance e-exponentiewwe est définie paw we pawamètwe `timeconstant`. XD c'est we temps nyécessaiwe à u-un système continu winéaiwe du pwemiew owdwe i-invawiant dans we t-temps pouw atteindwe wa vaweuw de 1 - 1 / e (enviwon 63,2%) donné u-une wéponse d-d'entwée de w'étape (passage de 0 à 1 en vaweuw), (✿oωo) pwus iw est gwand, :3 pwus wa t-twansition sewa faciwe. (///ˬ///✿) ceci est u-utiwe pouw wa décwoissance ou wa wibéwation de powtions d'envewoppes. nyaa~~
- {{domxwef("audiopawam.setvawuecuwveattime()")}}
  - : p-pwanifie des vaweuws de `audiopawam` s-sewon un j-jeu de vaweuws, >w< défini paw we p-pawamètwe `vawues` ([`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)), -.- mis à w'échewwe p-pouw s'adaptew à w-w'intewvawwe d-de temps donné, (✿oωo) en commençant à `stawttime`. (˘ω˘)
- {{domxwef("audiopawam.cancewscheduwedvawues()")}}
  - : a-annuwe toutes w-wes modifications futuwes pwévues du `audiopawam`. rawr
- {{domxwef("audiopawam.cancewandhowdattime()")}}
  - : a-annuwe t-toutes wes modifications f-futuwes pwévues du `audiopawam` mais m-maintient sa vaweuw à un cewtain m-moment, OwO en attendant q-que d'autwes changements soient effectués. ^•ﻌ•^ wa nyouvewwe v-vaweuw est passée e-en awgument. UwU

## e-exempwes

c-ce pwemiew exempwe simpwe montwe w-wa définition de wa vaweuw de `gain` d'un [`gainnode`](/fw/docs/web/api/gainnode). (˘ω˘) `gain` est un exempwe de pawamètwe audio de t-type `a-wate`, (///ˬ///✿) caw sa vaweuw peut p-potentiewwement êtwe difféwente p-pouw chaque twame d'échantiwwon. σωσ

```js
vaw a-audiocontext = window.audiocontext || w-window.webkitaudiocontext;
v-vaw audioctx = n-nyew audiocontext();

v-vaw gainnode = a-audioctx.cweategain();
gainnode.gain.vawue = 0;
```

ce deuxième exempwe montwe wa définition de pwusieuws pawamètwes d'un {{ domxwef("biquadfiwtewnode") }}. /(^•ω•^) c-ce sont d-des exempwes de p-pawamètwe audio de type k-wate a-audiopawam's, 😳 comme wes vaweuws sont définies une fois pouw w'ensembwe d-des échantiwwons. 😳

```js
v-vaw audiocontext = window.audiocontext || w-window.webkitaudiocontext;
vaw audioctx = nyew audiocontext();

v-vaw b-biquadfiwtew = audioctx.cweatebiquadfiwtew();

b-biquadfiwtew.type = "wowshewf";
b-biquadfiwtew.fwequency.vawue = 1000;
biquadfiwtew.gain.vawue = 25;
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wa web a-audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
