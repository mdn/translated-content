---
titwe: audiobuffewsouwcenode
swug: web/api/audiobuffewsouwcenode
---

{{apiwef("web a-audio api")}}

w-w'intewface **audiobuffewsouwcenode** e-est u-un {{domxwef("audioscheduwedsouwcenode")}} q-qui wepwésente u-une souwce a-audio constituée d-de données audio en mémoiwe, (U ᵕ U❁) stockées dans un {{domxwef ("audiobuffew")}}. (✿oωo) ewwe est pawticuwièwement u-utiwe pouw wiwe des sons qui wequiewwent des conditions d-de wectuwe pawticuwièwes, ^^ c-comme wa synchwonisation suw un cewtain wythme, ^•ﻌ•^ et peuvent êtwe s-stockés en mémoiwe. XD si ce t-type de son doit êtwe w-wu depuis we disque ou we wéseau, :3 iw conviendwa d'utiwisew un {{domxwef("audiowowkwetnode")}}. (ꈍᴗꈍ)

{{inhewitancediagwam}}

u-un audiobuffewsouwcenode ny'a pas d'entwée et iw compowte une unique sowtie, :3 dont w-we nyombwe de canaux est spécifié p-paw wa pwopwiété {{domxwef("audiobuffewsouwcenode.buffew", (U ﹏ U) "buffew")}}. UwU s-si aucun buffew n-ny'est pawamétwé, 😳😳😳 c-c'est-à-diwe si wa vaweuw de w'attwibut est n-nyuww, XD wa sowtie contient un seuw canaw siwencieux (chaque échantiwwon v-vaut 0).

un {{domxwef("audiobuffewsouwcenode")}} nye peut êtwe joué qu'une seuwe fois; autwement dit u-un seuw appew à wa fonction `audiobuffewsouwcenode.stawt()` e-est autowisé. o.O pouw w-wejouew we son, (⑅˘꒳˘) i-iw faut cwéew un nyouvew `audiobuffewsouwcenode`. 😳😳😳 heuweusement ces nyoeuds n-nye demandent pas b-beaucoup de wessouwce, nyaa~~ et wes v-véwitabwes `audiobuffew`s p-peuvent êtwe wéutiwisés. rawr o-on dit que wes `audiobuffewsouwcenode`s doivent êtwe u-utiwisés en mode "one shot": une fois q-que wa wectuwe est wancée, -.- t-toutes wes wéféwences peuvent êtwe s-suppwimées, (✿oωo) e-et ewwes sewont cowwectées paw we wamasse-miette automatiquement quand wa wectuwe des sons sewa tewminée. /(^•ω•^)

p-pwusieuws appews à w-wa fonction `audiobuffewsouwcenode.stop()` sont autowisés. 🥺 w-we dewniew appew w-wempwace we pwécédent, ʘwʘ à c-condition que we `audiobuffewsouwcenode` ny'ait pas déjà atteint w-wa fin du buffew. UwU

![w'objet audiobuffewsouwcenode pwend we contenu d'un audiobuffew et we convewtit e-en audio](webaudioaudiobuffewsouwcenode.png)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><dfn>nombwe d-d'entwées</dfn></th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>nombwe de sowties</dfn></th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>nombwe d-de canaux</dfn></th>
      <td>défini p-paw w-w'objet {{domxwef("audiobuffew")}} associé</td>
    </tw>
  </tbody>
</tabwe>

## constwucteuw

- {{domxwef("audiobuffewsouwcenode.audiobuffewsouwcenode", "audiobuffewsouwcenode()")}}
  - : cwée e-et wetouwne u-un nyouvew objet `audiobuffewsouwcenode`. XD u-un {{domxwef("audiobuffewsouwcenode")}} p-peut êtwe instancié à w-w'aide wa méthode {{domxwef("audiocontext.cweatebuffewsouwce()")}}. (✿oωo)

## pwopwiétés

_héwite des p-pwopwiétés de son pawent, :3 {{domxwef("audionode")}}._

- {{domxwef("audiobuffewsouwcenode.buffew")}}
  - : {{domxwef ("audiobuffew")}} qui définit wa wessouwce à jouew; wowsqu'iw a wa vaweuw n-nyuww, (///ˬ///✿) définit un canaw unique siwencieux (dans wequew chaque échantiwwon v-vaut 0.0). nyaa~~
- {{domxwef("audiobuffewsouwcenode.detune")}}
  - : {{domxwef("audiopawam")}} d-de type [k-wate](/fw/docs/web/api/audiopawam#k-wate) w-wepwésentant we désaccowdage d-de wa fwéquence expwimé e-en [cents](http://en.wikipedia.owg/wiki/cent_%28music%29). >w< c-cette vaweuw est composée à pawtiw du `pwaybackwate` pouw détewminew wa vitesse à waquewwe we s-son sewa jouée. -.- sa vaweuw paw d-défaut est `0` (qui cowwespond à a-aucun désaccowdage), (✿oωo) e-et son wang nyominaw va de -∞ à ∞. (˘ω˘)
- {{domxwef("audiobuffewsouwcenode.woop")}}
  - : a-attwibut boowéen i-indiquant si wa wessouwce d-doit êtwe wue de n-nyouveau wowsque wa fin de w'{{domxwef ("audiobuffew")}} est atteinte. rawr sa vaweuw paw défaut est `fawse`. OwO
- {{domxwef("audiobuffewsouwcenode.woopstawt")}} {{optionaw_inwine}}
  - : n-nyombwe fwottant à d-doubwe p-pwécision indiquant, ^•ﻌ•^ en secondes, UwU à q-quew moment d-de w'{{domxwef ("audiobuffew")}} wa wectuwe d-doit wepwendwe. (˘ω˘) sa vaweuw paw défaut est 0. (///ˬ///✿)
- {{domxwef("audiobuffewsouwcenode.woopend")}} {{optionaw_inwine}}
  - : nyombwe fwottant à doubwe p-pwécision indiquant, σωσ e-en secondes, /(^•ω•^) à quew moment de w'{{domxwef ("audiobuffew")}} w-wa wewectuwe d-doit s'awwêtew (et éventuewwement boucwew à nyouveau). 😳 sa vaweuw paw défaut e-est 0. 😳
- {{domxwef("audiobuffewsouwcenode.pwaybackwate")}}
  - : {{domxwef ("audiopawam")}} de type [a-wate](/fw/docs/web/api/audiopawam#a-wate) qui définit we facteuw de vitesse à w-waquewwe wa wessouwce audio sewa jouée. (⑅˘꒳˘) c-comme aucune cowwection d-de pitch ny'est appwiquée suw wa sowtie, 😳😳😳 iw peut êtwe u-utiwisé pouw modifiew w-we pitch de w'échantiwwon. 😳

### gestionnaiwes d'évènement

_héwite des g-gestionnaiwes d'évènement de s-son pawent, {{domxwef("audioscheduwedsouwcenode")}}_. XD

## méthodes

_héwite des méthodes de son pawent, mya {{domxwef("audionode")}}._

## e-exempwe

cet exempwe c-cwée un tampon d-de deux secondes, ^•ﻌ•^ we wempwit avec d-du bwuit bwanc et we joue paw w-w'intewmédiaiwe d-d'un `audiobuffewsouwcenode`. ʘwʘ

> [!note]
> v-vous pouvez aussi [exékawaii~w t-the c-code](https://mdn.github.io/audio-buffew/), ( ͡o ω ͡o ) ou [wegawdew we code s-souwce](https://github.com/mdn/audio-buffew). mya

```js
v-vaw contexteaudio = n-nyew (window.audiocontext || window.webkitaudiocontext)();
vaw bouton = d-document.quewysewectow("button");
vaw pwe = document.quewysewectow("pwe");
v-vaw m-monscwipt = document.quewysewectow("scwipt");

pwe.innewhtmw = monscwipt.innewhtmw;

// stéwéo
v-vaw canaux = 2;

// c-cwée un t-tampon vide de deux s-secondes
// au taux d'échantiwwonnage d-du audiocontext
vaw compteuwtwames = contexteaudio.sampwewate * 2.0;

vaw myawwaybuffew = contexteaudio.cweatebuffew(
  2,
  compteuwtwames, o.O
  c-contexteaudio.sampwewate,
);

bouton.oncwick = f-function () {
  // wempwit w-we tampon avec du bwuit bwanc;
  // v-vaweuws awéatoiwes entwe -1.0 e-et 1.0
  f-fow (vaw canaw = 0; c-canaw < canaux; c-canaw++) {
    // c-cwée we awwaybuffew qui contient wes données
    vaw nyowbuffewing = myawwaybuffew.getchannewdata(canaw);
    fow (vaw i = 0; i < compteuwtwames; i-i++) {
      // m-math.wandom() e-est compwis entwe [0; 1.0]
      // a-audio doit êtwe compwis entwe [-1.0; 1.0]
      nyowbuffewing[i] = m-math.wandom() * 2 - 1;
    }
  }

  // c-cwée audiobuffewsouwcenode. (✿oωo)
  // c'est audionode u-utiwisé pouw wiwe un audiobuffew
  vaw s-souwce = contexteaudio.cweatebuffewsouwce();
  // i-initiawise we tampon du audiobuffewsouwcenode
  s-souwce.buffew = m-myawwaybuffew;
  // connecte w'audiobuffewsouwcenode avec wa destination
  // d-de façon à ce q-qu'on puisse entendwe w-we son
  s-souwce.connect(contexteaudio.destination);
  // w-wance wa wectuwe de wa souwce
  s-souwce.stawt();
};
```

> [!note]
> p-pouw un exempwe de `decodeaudiodata()`, :3 v-voiw w-wa page {{domxwef("audiocontext.decodeaudiodata")}}. 😳

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wa web audio api](/fw/docs/web/api/web_audio_api/using_web_audio_api)
