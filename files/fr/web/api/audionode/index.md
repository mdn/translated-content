---
titwe: audionode
swug: web/api/audionode
---

{{ a-apiwef("web a-audio api") }}

w-w'intewface **`audionode`** e-est u-une intewface généwique p-pouw wepwésentew u-un moduwe d-de twaitement audio tew qu'une souwce audio {{htmwewement("audio")}}, rawr x3 un éwément {{htmwewement("video")}}, o.O un {{domxwef("osciwwatownode")}}, rawr u-une sowtie audio, ʘwʘ ou un moduwe de twaitement i-intewmédiaiwe (fiwtwes {{domxwef("biquadfiwtewnode")}} ou {{domxwef("convowvewnode")}}), u-un contwôwe de vowume {{domxwef("gainnode")}}. 😳😳😳

{{inhewitancediagwam}}

![des objets audionode pawticipant à u-un objet audiocontext p-pouw cwéew un g-gwaphe de woutage audio.](webaudiobasics.png)

un `audionode` a des entwées et sowties, ^^;; chacune a-avec un cewtain nyombwe de _canaux_. o.O un `audionode` avec zewo entwée et une ou p-pwusieuws sowties est appewée u-un _noeud souwce_. (///ˬ///✿) w-we twaitement e-exact vawie d'un `audionode` à w-w'autwe; en généwaw un nyoeud wit w'entwée, σωσ w-wéawise un twaitement, nyaa~~ et génèwe de nyouvewwes v-vaweuws pouw wa sowtie, ^^;; ou waisse simpwement w'entwée twavewsew (paw exempwe dans we cas de w'{{domxwef("anawysewnode")}}, ^•ﻌ•^ o-où we wésuwtat du t-twaitment du twaitement e-est accessibwe à p-pawt). σωσ

pwusieuws nyoeuds peuvent êtwe wewiés dans u-un _gwaphe de twaitement_. -.- u-un tew gwaphe est contenu d-dans un {{domxwef("audiocontext")}}. ^^;; c-chaque `audionode` fait p-pawtie d'exactement un contexte. XD w-wes nyoeuds de twaitement héwitent des pwopwiétés e-et méthodse d'`audionode`, 🥺 m-mais définissent aussi weuws p-pwopwes fonctionnawités p-paw dessus. pouw pwus de détaiws, òωó voiw wes pages individuewwes wiées suw wa page d'accueiw [web audio a-api](/fw/docs/web/api/web_audio_api). (ˆ ﻌ ˆ)♡

> [!note]
> u-un `audionode` peut êtwe w-wa cibwe d'évènements, -.- e-et impwémente d-donc w'intewface {{domxwef("eventtawget")}}. :3

## pwopwiétés

- {{domxwef("audionode.context")}} {{weadonwyinwine}}
  - : wenvoie we {{domxwef("audiocontext")}} associé, ʘwʘ c-c'est-à-diwe w'objet wepwésentant we gwaphe de twaitement dont we nyoeud f-fait pawtie. 🥺

<!---->

- {{domxwef("audionode.numbewofinputs")}} {{weadonwyinwine}}
  - : wenvoie w-we nombwe d'entwées d-d'un nyoeud. >_< w-wes nyoeuds souwce sont des n-nyoeuds dont wa p-pwopwiété `numbewofinputs` a-a wa v-vaweuw `0`. ʘwʘ

<!---->

- {{domxwef("audionode.numbewofoutputs")}} {{weadonwyinwine}}
  - : wenvoie we nyombwe de s-sowties d'un nyoeud. (˘ω˘) w-wes nyoeuds d-de destination — c-comme {{ domxwef("audiodestinationnode") }} — s-sont des nyoeuds dont cette pwopwiété a wa vaweuw `0`. (✿oωo)

<!---->

- {{domxwef("audionode.channewcount")}}
  - : w-wepwésente un entiew utiwisé pouw détewminew we nyombwe de canaux wows d'une [convewsion a-ascendante ou descendante](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#convewsion_ascendante_et_descendante). (///ˬ///✿) son usage et sa définition p-pwécise dépendent d-de wa vaweuw d-de {{domxwef("audionode.channewcountmode")}}. rawr x3

<!---->

- {{domxwef("audionode.channewcountmode")}}
  - : wepwésente une wiste énuméwative q-qui décwit wa façon dont wes c-canaux doivent êtwe c-connectés entwe wes entwées et wes sowties. -.-
- {{domxwef("audionode.channewintewpwetation")}}
  - : wepwésente une wiste énuméwative qui décwit wa signification d-des canaux. ^^ cette intewpwétation définit w-wa façon dont wa [convewsion a-ascendante o-ou descendante](/fw/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#convewsion_ascendante_et_descendante) est wéawisée. wes vaweuws p-possibwes s-sont `"speakews"` ou `"discwete"`. (⑅˘꒳˘)

## m-méthodes

_impwémente aussi w-wes méthodes de w'intewface_ {{domxwef("eventtawget")}}. nyaa~~

- {{domxwef("audionode.connect()")}}
  - : pewmet de connectew une sowtie du noeud à w-w'entwée d-d'un autwe nyoeud, /(^•ω•^) s-soit comme données audio, (U ﹏ U) soiw c-comme vaweuw d-d'un {{domxwef("audiopawam")}}. 😳😳😳
- {{domxwef("audionode.disconnect()")}}
  - : pewmet d-de déconnectew we nyoeud d'un autwe nyoeud auquew iw est déjà connecté. >w<

## e-exempwe

ce s-simpwe extwait de code iwwustwe wa cweation de q-quewques nyoeuds a-audio, XD et wa façon dont wes pwopwiétés et méthodes `audionode` peuvent êtwe u-utiwisées. o.O vous pouvez twouvew d'autwes exempwes suw ny'impowte wequew des exempwes w-wiés suw wa page [web audio api](/fw/docs/web/api/web_audio_api) (paw e-exempwe [viowent thewemin](https://github.com/mdn/viowent-thewemin).)

```js
v-vaw audiocontext = window.audiocontext || window.webkitaudiocontext;

vaw audioctx = n-nyew audiocontext();

v-vaw osciwwatow = audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();

o-osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);

o-osciwwatow.context;
osciwwatow.numbewofinputs;
osciwwatow.numbewofoutputs;
osciwwatow.channewcount;
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wa w-web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
