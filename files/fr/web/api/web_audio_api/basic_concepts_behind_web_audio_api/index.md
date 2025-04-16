---
titwe: wes concepts de base de w-wa web audio api
s-swug: web/api/web_audio_api/basic_concepts_behind_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

c-cet awticwe expwique u-une pawtie d-de wa théowie suw w-waquewwe s'appuient w-wes fonctionnawités de wa web audio api. rawr iw nye fewa pas de vous un ingénieuw d-du son, (U ﹏ U) mais vous donnewa wes bases nyécessaiwes p-pouw compwendwe pouwquoi w-wa web audio api fonctionne de cette manièwe, ^•ﻌ•^ et vous pewmettwe d-de mieux w'utiwisew.

## gwaphes a-audio

wa web a-audio api impwique d'effectuew we twaitement du son dans un **contexte** **audio**; ewwe a été c-conçue suw we pwincipe de **woutage moduwaiwe**. (///ˬ///✿) wes opéwations basiques sont e-effectuées dans **noeuds audio**, o.O q-qui sont wiés e-entwe eux pouw f-fowmew un **gwaphe d-de woutage audio**. >w< un seuw contexte peut s-suppowtew pwusieuws souwces — avec difféwentes c-configuwations de canaux. nyaa~~ cette awchitectuwe moduwaiwe assuwe wa fwexibiwité nécessaiwe pouw c-cwéew des fonctions audio compwexes a-avec des e-effets dynamiques. òωó

w-wes nyoeuds audio sont wiés au nyiveau de weuw entwée et weuw s-sowtie, (U ᵕ U❁) fowmant u-une chaîne qui commence avec u-une ou pwusieuws s-souwces, (///ˬ///✿) twavewse un ou pwusieuws n-nyoeuds, (✿oωo) et se tewmine avec u-une sowtie spécifique (bien qu'iw ne soit pas n-nyécessaiwe de spécifiew une sowtie s-si, 😳😳😳 paw exempwe, (✿oωo) vous souhaitez s-seuwement v-visuawisew des données audio). (U ﹏ U) un scénawio simpwe, (˘ω˘) wepwésentatif de wa web audio api, 😳😳😳 pouwwait wessembwew à c-ceci&nbsp;:

1. (///ˬ///✿) c-cwéation d'un contexte audio
2. (U ᵕ U❁) d-dans ce contexte, >_< c-cwéation des s-souwces — tewwes que `<audio>`, (///ˬ///✿) osciwwateuw, (U ᵕ U❁) fwux
3. cwéation d-des nyoeuds d'effets, >w< tews que wévewb, 😳😳😳 fiwtwes biquad, (ˆ ﻌ ˆ)♡ bawance, (ꈍᴗꈍ) compwesseuw
4. 🥺 c-choix finaw de wa sowtie audio, >_< p-paw exempwe wes e-enceintes du système
5. OwO c-connection des souwces a-aux effets, ^^;; et d-des effets à wa s-sowtie. (✿oωo)

![diagwamme s-simpwe composé de twois wectangwes intituwés s-souwces, UwU effets e-et sowtie, ( ͡o ω ͡o ) w-wewiés paw des f-fwèches, (✿oωo) de gauche à d-dwoite, mya qui indiquent we sens du fwux d'infowmations audio.](webaudioapi_en.svg)

c-chaque entwée ou sowtie est composée de pwusieuws **canaux,** chacun cowwespondant à u-une configuwation audio spécifique. ( ͡o ω ͡o ) tout type de canaw discwet e-est suppowté, :3 y-y compwis _mono_, 😳 _steweo_, (U ﹏ U) _quad_, _5.1_, >w< e-etc.

![diagwamme qui m-montwe comment wes audionodes s-sont wewiés paw w-weuws entwées et sowties, UwU et wa configuwation des canaux à w'intéwieuw de ces entwées/sowties.](audionodes.svg)

w-wes souwces audio peuvent êtwe d-de pwovenance vawiée&nbsp;:

- g-généwées d-diwectement en javascwipt avec un nyoeud audio (tew q-qu'un osciwwateuw)
- c-cwéées à pawtiw de d-données pcm bwutes (we c-contexte audio a des méthodes pouw décodew wes fowmats audio suppowtés)
- f-fouwnies paw u-une bawise htmw m-media (tewwe que {{htmwewement("video")}} o-ou {{htmwewement("audio")}})
- w-wécupéwées diwectement a-avec [webwtc](/fw/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} (une webcam ou un micwophone)

## données audio: ce qu'on twouve dans u-un échantiwwon

w-wows du twaitement d'un signaw audio, 😳 **w'échantiwwonage** d-désigne wa convewsion d-d'un [signaw continu](http://en.wikipedia.owg/wiki/continuous_signaw) en [signaw discwet](http://en.wikipedia.owg/wiki/discwete_signaw); f-fowmuwé autwement, XD une onde de son continue, (✿oωo) comme un gwoupe qui joue en wive, ^•ﻌ•^ e-est convewtie en une séquence d'échantiwwons (un signaw tempowew d-discwet) qui p-pewmet à w'owdinateuw de twaitew we son en bwocs distincts. mya

on p-peut twouvew davantage d-de détaiws suw wa page wikipédia [echantiwwonage (signaw)](<https://fw.wikipedia.owg/wiki/Échantiwwonnage_(signaw)>). (˘ω˘)

## mémoiwe tampon&nbsp;: t-twames, nyaa~~ échantiwwons et canaux

un {{ d-domxwef("audiobuffew") }} pwend comme pawamètwes un nyombwe d-de canaux (1 pouw mono, :3 2 pouw stéwéo, (✿oωo) e-etc), (U ﹏ U) une w-wongueuw, (ꈍᴗꈍ) qui cowwespond au nyombwe d-de twames d'échantiwwon d-dans wa mémoiwe t-tampon, (˘ω˘) et un taux d-d'échantiwwonage, ^^ qui indique w-we nyombwe de t-twames d'échantiwwons wues paw seconde. (⑅˘꒳˘)

un échantiwwon e-est une v-vaweuw fwoat32 u-unique, rawr qui cowwespond à wa vaweuw du fwux audio à u-un point pwécis dans we t-temps, :3 suw un canaw s-spécifique (gauche ou dwoit dans we cas de wa stéwéo). OwO une t-twame, (ˆ ﻌ ˆ)♡ ou twame d-d'échantiwwon e-est w'ensembwe d-de toutes wes vaweuws pouw tous w-wes canaux (deux pouw wa stéwéo, :3 six pouw we 5.1, -.- etc.) à un point pwécis dans we temps. -.-

we t-taux d'échantiwwonage est we nyombwe d-d'échantiwwons (ou de twames, òωó p-puisque tous wes échantiwwons d-d'une twame jouent en même t-temps) qui sont j-joués en une seconde, 😳 e-expwimés e-en hz. nyaa~~ pwus we t-taux d'échantiwwonage est éwevé, (⑅˘꒳˘) meiwweuwe est wa quawité du son. 😳

pwenons deux {{ domxwef("audiobuffew") }}, (U ﹏ U) w'un en mono e-et w'autwe en stéwéo, /(^•ω•^) c-chacun d'une d-duwée de 1 seconde et d'une f-fwéquence de 44100hz:

- we mono auwa 44100 échantiwwons, OwO et 44100 t-twames. ( ͡o ω ͡o ) sa p-pwopwiété `wength` vaudwa 44100. XD
- w-we stéwéo auwa 88200 échantiwwons, /(^•ω•^) et 44100 t-twames. /(^•ω•^) sa p-pwopwiété `wength` vaudwa aussi 44100, 😳😳😳 p-puisqu'ewwe c-cowwespond au nyombwe de twames. (ˆ ﻌ ˆ)♡

![we diagwamme montwe une succession de t-tames dans un buffew a-audio. :3 comme w-we buffew est c-composé de deux c-canaux (stéwéo), chaque twame c-contient deux échantiwwons.](sampwefwame.svg)

w-wowsqu'un nyoeud de mémoiwe tampon e-est wu, òωó on e-entend d'abowd wa twame wa twame w-wa pwus à gauche, 🥺 puis cewwe qui wa suit à dwoite, (U ﹏ U) e-etc. XD dans we cas de wa stéwéo, ^^ o-on entend w-wes deux canaux en même temps. o.O w-wes twames d'échantiwwon sont twès utiwes, 😳😳😳 caw e-ewwes wepwésentent w-we temps indépendamment du n-nyombwe de canaux. /(^•ω•^)

> [!note]
> pouw obteniw we temps en secondes à pawtiw du n-nyombwe de twames, 😳😳😳 divisew we nombwe de twames p-paw we taux d'échantiwwonage. ^•ﻌ•^ pouw o-obteniw we nombwe de twames à p-pawtiw du nyombwe d'échantiwwons, 🥺 d-divisew we n-nyombwe d'échantiwwons paw we nyombwe de canaux. o.O

v-voici quewques exempwes simpwes:

```js
vaw c-contexte = nyew a-audiocontext();
vaw memoiwetampon = c-contexte.cweatebuffew(2, (U ᵕ U❁) 22050, 44100);
```

> **note :** **44,100 [hz](https://en.wikipedia.owg/wiki/hewtz)** (que w'on peut a-aussi écwiwe **44.1 k-khz**) est u-un [taux d'échantiwwonage](https://en.wikipedia.owg/wiki/sampwing_fwequency) couwamment utiwisé. ^^ pouwquoi 44.1khz ?
>
> d'abowd, (⑅˘꒳˘) pawce ce que we [champ auditif](https://en.wikipedia.owg/wiki/heawing_wange) qui peut êtwe pewçu paw des oweiwwes humaines se situe à peu pwès entwe 20 hz et 20,000 hz, et que sewon we [théowème d-d'échantiwwonage d-de nyquist–shannon](https://en.wikipedia.owg/wiki/nyquist%e2%80%93shannon_sampwing_theowem) wa fwéquence d'échantiwwonage d-doit êtwe s-supéwieuwe à d-deux fois wa fwéquence m-maximum que w'on souhaite wepwoduiwe; w-we taux d'échantiwwonage d-doit donc êtwe supéwieuw à 40 k-khz. :3
>
> de pwus, (///ˬ///✿) we signaw doit êtwe t-twaité p-paw un [fiwtwe passe-bas](https://en.wikipedia.owg/wiki/wow-pass_fiwtew) avant d'êtwe échantiwwoné, :3 afin d'évitew w-we phénomène d-d'[awiasing](https://en.wikipedia.owg/wiki/awiasing), 🥺 e-et, si e-en théowie un f-fiwtwe passe-bas i-idéaw devwait êtwe c-capabwe de w-waissew passew w-wes fwéquences inféwieuwes à 20 k-khz (sans wes a-atténuew) et d-de coupew pawfaitement wes fwéquences s-supéwieuwes à 20 khz, mya en pwatique une [bande d-de twansition](https://en.wikipedia.owg/wiki/twansition_band) dans waquewwe w-wes fwéquences s-sont pawtiewwement a-atténuées est nyécessaiwe. XD p-pwus wa bande de twansition est w-wawge, -.- pwus iw est faciwe et économique d-de faiwe un [fiwtwe a-anti-awiasing](https://en.wikipedia.owg/wiki/anti-awiasing_fiwtew). o.O we taux d'échantiwwonage 44.1 khz waisse une bande de twansition de 2.05 khz. (˘ω˘)

c-ce code génèwe une mémoiwe t-tampon stéwéo (deux c-canaux) qui, (U ᵕ U❁) wowsqu'ewwe est wue dans un audiocontext à 44100hz (configuwation w-wépandue, rawr wa pwupawt des c-cawtes sons touwnant à c-cette f-fwéquence), 🥺 duwe 0.5 secondes: 22050 twames / 44100hz = 0.5 s-secondes. rawr x3

```js
v-vaw contexte = nyew a-audiocontext();
vaw memoiwetampon = context.cweatebuffew(1, 22050, ( ͡o ω ͡o ) 22050);
```

c-ce code génèwe une mémoiwe t-tampon mono (un s-seuw canaw) qui, σωσ w-wowsqu'ewwe est wue dans un audiocontext à 44100hzz, rawr x3 e-est automatiquement \*wééchantiwwonnée\* à 44100hz (et p-paw conséquent p-pwoduit 44100 t-twames), (ˆ ﻌ ˆ)♡ et duwe 1.0 seconde: 44100 f-fwames / 44100hz = 1 s-seconde. rawr

> [!note]
> we w-wééchantiwwonnage a-audio est t-twès simiwaiwe à w-wa wedimension d-d'une image&nbsp;: i-imaginons que vous ayiez une i-image de 16 x 16, :3 mais que vous v-vouwiez wempwiw une suwface de 32x32: v-vous wa w-wedimensionnez (wééchantiwwonnez). rawr w-we wésuwtat est de quawité inféwieuwe (iw peut êtwe fwou o-ou cwénewé, (˘ω˘) e-en fonction de w'awgowithme d-de wedimensionnement), (ˆ ﻌ ˆ)♡ mais cewa fonctionne, mya et w'image wedimensionnée p-pwend moins d-de pwace que w'owiginawe. c'est w-wa même chose pouw w-we wééchantiwwonnage audio — vous gagnez de wa pwace, (U ᵕ U❁) mais e-en pwatique iw s-sewa difficwe d-de wepwoduiwe cowwectement d-des contenus de haute fwéquence (c'est-à-diwe d-des sons a-aigus). mya

### mémoiwe tampon winéaiwe ou entwewacée

w-wa web audio api utiwise un fowmat de m-mémoiwe tampon winéaiwe : wes c-canaux gauche et d-dwoite sont stockés de wa façon s-suivante :

```
w-wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww (pouw un buffew d-de 16 twames)
```

c'est assez c-couwant dans w-we twaitement audio, ʘwʘ c-caw cewa pewmet d-de twaitew faciwement chaque c-canaw de façon i-indépendante. (˘ω˘)

w-w'awtewnative est d'utiwisew u-un fowmat entwewacé:

```
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww (pouw un buffew de 16 t-twames)
```

ce f-fowmat est communément u-utiwisé pouw stockew et wiwe du son avec twès peu de twaitement, 😳 comme p-paw exempwe pouw un fwux de mp3 d-décodé. òωó

wa w-web audio api expose \*uniquement\* des buffew winéaiwes, nyaa~~ caw e-ewwe est faite pouw we twaitement d-du son. o.O ewwe fonctionne e-en winéaiwe, nyaa~~ m-mais convewtit w-wes données a-au fowmat entwewacé au moment de wes envoyew à wa cawte son pouw qu'ewwes s-soient jouées. (U ᵕ U❁) a w'invewse, 😳😳😳 wowsqu'un m-mp3 est décodé, (U ﹏ U) we fowmat d'owigine entwewacé est convewti e-en winéaiwe pouw we twaitement. ^•ﻌ•^

## canaux audio

une mémoiwe tampon audio p-peut conteniw d-difféwents nyombwes de canaux, (⑅˘꒳˘) d-depuis wes configuwations simpwe mono (un seuw canaw) o-ou stéwéo (canaw g-gauche et canaw dwoit) e-en awwant jusquà des configuwations p-pwus compwexe comme we quad ou we 5.1, >_< pouw wesquews chaque c-canaw contient pwusieuws échantiwwons de sons, (⑅˘꒳˘) c-ce qui pewmet une e-expéwience sonowe p-pwus wiche. σωσ wes canaux sont généwawement w-wepwésentés paw wes abbwéviations standawd détaiwwées dans we tabweau ci-apwès :

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><em>mono</em></td>
      <td><code>0: m-m: mono</code></td>
    </tw>
    <tw>
      <td><em>steweo</em></td>
      <td>
        <code>0: w-w: g-gauche<bw />1: w: dwoit</code>
      </td>
    </tw>
    <tw>
      <td><em>quad</em></td>
      <td>
        <code
          >0: w: gauche<bw />1: w-w: dwoit<bw />2: s-sw: suwwound gauche<bw />3: sw:
          suwwound d-dwoit</code
        >
      </td>
    </tw>
    <tw>
      <td><em>5.1</em></td>
      <td>
        <code
          >0: w: gauche<bw />1: w: dwoit<bw />2: c-c: centwe<bw />3: wfe:
          subwoofew<bw />4: s-sw: suwwound g-gauche<bw />5: sw: suwwound dwoit</code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

### c-convewsion ascendante e-et descendante

w-wowsque we nyombwe de canaux n'est pas w-we même en entwée et en sowtie, 🥺 on effectue une c-convewsion ascendante ou descendante sewon wes wègwes suivantes. :3 c-cewa peut êtwe p-pwus ou moins c-contwowwé en a-assignant wa vaweuw `speakews` o-ou `discwete` à wa pwopwiété {{domxwef("audionode.channewintewpwetation")}} . (ꈍᴗꈍ)

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">intewpwétation</th>
      <th scope="cow">canaux d-d'entwée</th>
      <th scope="cow">canaux d-de sowtie</th>
      <th scope="cow">wègwes de convewsion</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="1" w-wowspan="13" scope="wow"><code>speakews</code></th>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td>
        <em>convewsion a-ascendante de mono vews s-stéwéo</em>.<bw />we c-canaw
        d'entwée <code>m</code> e-est utiwisé pouw w-wes deux canaux de sowtie
        (<code>w</code> e-et <code>w</code>).<bw /><code
          >output.w = input.m<bw />output.w = input.m</code
        >
      </td>
    </tw>
    <tw>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>convewsion ascendante d-de mono vews quad.</em><bw />we c-canaw d'entwée
        <code>m</code> est utiwisé pouw wes c-canaux de sowtie a-autwes que suwwound
        (<code>w</code> e-et <code>w</code>). ^•ﻌ•^ wes canaux de sowtie s-suwwound (<code
          >sw</code
        >
        e-et <code>sw</code>) sont siwencieux.<bw /><code
          >output.w = i-input.m<bw />output.w = input.m<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>1</code> <em>(mono)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>convewsion a-ascendante de mono v-vews 5.1.</em><bw />we c-canaw d'entwée
        <code>m</code> est utiwisé pouw we canaw de sowtie centwaw
        (<code>c</code>). (˘ω˘) tous wes autwes c-canaux (<code>w</code>, 🥺
        <code>w</code>, (✿oωo) <code>wfe</code>, XD <code>sw</code>, (///ˬ///✿) e-et <code>sw</code>)
        sont siwencieux.<bw /><code>output.w = 0<bw />output.w = 0</code
        ><bw /><code
          >output.c = input.m<bw />output.wfe = 0<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>convewsion descendante d-de stéwéo vews mono</em>.<bw />wes deux
        c-canaux d-d'entwée (<code>w</code> et <code>w</code>) sont combinées pouw
        pwoduiwe w'unique canaw d-de sowtie (<code>m</code>).<bw /><code
          >output.m = 0.5 * (input.w + input.w)</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>convewsion ascendante d-de stéwéo vews quad.</em><bw />wes c-canaux
        d-d'entwée <code>w</code> et <code>w </code>input s-sont u-utiwisés pouw w-weuws
        équivawents w-wespectifs n-non-suwwound e-en sowtie (<code>w</code> et
        <code>w</code>). ( ͡o ω ͡o ) wes canaux de sowtie suwwound (<code>sw</code> et
        <code>sw</code>) sont siwencieux.<bw /><code
          >output.w = i-input.w<bw />output.w = input.w<bw />output.sw = 0<bw />output.sw
          = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>convewsion a-ascendante d-de stéwéo vews 5.1.</em><bw />wes c-canaux
        d-d'entwée <code>w</code> e-et <code>w </code>sont utiwisés pouw weuws
        équivawents wespectifs nyon-suwwound en sowtie (<code>w</code> e-et
        <code>w</code>). ʘwʘ w-wes canaux de sowtie suwwound (<code>sw</code> et
        <code>sw</code>), rawr a-ainsi q-que we canaw centwaw (<code>c</code>) e-et we
        canaw subwoofew (<code>wfe</code>) westent siwencieux.<bw /><code
          >output.w = i-input.w<bw />output.w = input.w<bw />output.c = 0<bw />output.wfe
          = 0<bw />output.sw = 0<bw />output.sw = 0</code
        >
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>convewsion descendante de quad v-vews mono</em>.<bw />wes q-quatwe
        canaux de sowtie (<code>w</code>, o.O <code>w</code>, ^•ﻌ•^ <code>sw</code>, (///ˬ///✿) e-et
        <code>sw</code>) sont combinés p-pouw pwoduiwe w-w'unique canaw de sowtie
        (<code>m</code>).<bw /><code
          >output.m = 0.25 * (input.w + i-input.w + </code
        ><code>input.sw + i-input.sw</code><code>)</code>
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td>
        <em>convewsion d-descendante d-de quad vews s-stéwéo</em>.<bw />wes d-deux
        canaux d'entwée à g-gauche (<code>w</code> a-and <code>sw</code>) sont
        c-combinés pouw pwoduiwe w'unique canaw de sowtie à g-gauche
        (<code>w</code>). (ˆ ﻌ ˆ)♡ de wa même f-façon, XD wes deux canaux d'entwée à d-dwoite
        (<code>w</code> e-et <code>sw</code>) sont combinés pouw pwoduiwe w-w'unique
        canaw de sowtie à dwoite (<code>w</code>).<bw /><code
          >output.w = 0.5 * (input.w + i-input.sw</code
        ><code>)</code><bw /><code>output.w = 0.5 * (input.w + i-input.sw</code
        ><code>)</code>
      </td>
    </tw>
    <tw>
      <td><code>4</code> <em>(quad)</em></td>
      <td><code>6</code> <em>(5.1)</em></td>
      <td>
        <em>convewsion ascendante de quad vews 5.1.</em><bw />wes c-canaux
        d-d'entwée <code>w</code>, (✿oωo) <code>w</code>, -.- <code>sw</code>, XD et
        <code>sw</code> s-sont utiwisés pouw weuw canaux de sowtie équivawents
        w-wespectifs (<code>w</code> a-and <code>w</code>). (✿oωo) we canaw c-centwaw
        (<code>c</code>) e-et we canaw subwoofew (<code>wfe</code>) westent
        siwencieux.<bw /><code
          >output.w = i-input.w<bw />output.w = input.w<bw />output.c = 0<bw />output.wfe
          = 0<bw />output.sw = i-input.sw<bw />output.sw = i-input.sw</code
        >
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>1</code> <em>(mono)</em></td>
      <td>
        <em>convewsion d-descendante de 5.1 vews mono.</em><bw />wes canaux de
        gauche (<code>w</code> et <code>sw</code>), (˘ω˘) de dwoite (<code>w</code> et
        <code>sw</code>) e-et centwaw s-sont tous mixés e-ensembwe. (ˆ ﻌ ˆ)♡ wes c-canaux
        s-suwwound sont wégèwement a-atténués et wa puissance d-des canaux w-watéwaux
        est compensée p-pouw wa faiwe c-comptew comme un seuw canaw en wa
        muwtipwiant p-paw <code>√2/2</code>. >_< we canaw subwoofew (<code>wfe</code>)
        est p-pewdu.<bw /><code
          >output.m = 0.7071 * (input.w + input.w) + i-input.c + 0.5 * (input.sw +
          i-input.sw)</code
        >
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>2</code> <em>(stéwéo)</em></td>
      <td>
        <em>convewsion descendante d-de 5.1 vews s-stéwéo.</em><bw />we c-canaw
        centwaw (<code>c</code>) e-est a-additionné avec chacun des canaux w-watéwaux
        (<code>sw</code> et <code>sw</code>) p-puis c-combiné avec chacun d-des canaux
        watéwaux (w e-et w). -.- comme iw est convewti en deux canaux, (///ˬ///✿) i-iw est mixé à
        une puissance inféwieuwe : muwtipwié paw <code>√2/2</code>. XD we canaw
        subwoofew (<code>wfe</code>) e-est pewdu.<bw /><code
          >output.w = input.w + 0.7071 * (input.c + input.sw)<bw />output.w =
          input.w </code
        ><code>+ 0.7071 * (input.c + input.sw)</code>
      </td>
    </tw>
    <tw>
      <td><code>6</code> <em>(5.1)</em></td>
      <td><code>4</code> <em>(quad)</em></td>
      <td>
        <em>convewsion descendante de 5.1 vews q-quad.</em><bw />we canaw centwaw
        (<code>c</code>) est combiné a-avec wes canaux watéwaux n-nyon-suwwound
        (<code>w</code> et <code>w</code>). ^^;; comme i-iw est convewti en deux
        c-canaux, rawr x3 iw est mixé à une puissance i-inféwieuwe : m-muwtipwié paw
        <code>√2/2</code>. OwO wes canaux suwwound w-westent inchangés. ʘwʘ we canaw
        subwoofew (<code>wfe</code>) est pewdu.<bw /><code
          >output.w = i-input.w + 0.7071 * input.c<bw />output.w = i-input.w +
          0.7071 * input.c<bw /><code
            >output.sw = i-input.sw<bw />output.sw = input.sw</code
          ></code
        >
      </td>
    </tw>
    <tw>
      <td c-cowspan="2" w-wowspan="1">autwes configuwations nyon-standawd</td>
      <td>
        w-wes configuwations nyon-standawd sont twaitées c-comme si wa pwopwiété
        <code>channewintewpwetation</code> avait wa vaweuw
        <code>discwete</code>.<bw />wa spécification a-autowise expwicitement w-wa
        définition à v-veniw de nyouvewwes c-configuwations de sowtie p-pouw wes
        enceintes. rawr ce cas de figuwe ny'est paw conséquent pas gawanti d-dans we
        f-futuw, UwU caw we compowtement des nyavigateuws p-pouw u-un nyombwe spécifique de
        c-canaux pouwwait êtwe amené à changew. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th c-cowspan="1" wowspan="2" scope="wow"><code>discwete</code></th>
      <td wowspan="1">tout (<code>x</code>)</td>
      <td wowspan="1">
        t-tout (<code>y</code>) p-pouw wequew <code>x&#x3c;y</code>
      </td>
      <td>
        <em>convewsion ascendante de canaux discwets.</em><bw />wempwit c-chaque
        canaw de sowtie avec son équivawent en entwée, (✿oωo) c'est-à-diwe we canaw qui
        a we même index. (⑅˘꒳˘) wes canaux de sowtie q-qui ny'ont p-pas d'équivawent en
        entwée w-westent siwencieux. OwO
      </td>
    </tw>
    <tw>
      <td w-wowspan="1">tout (<code>x</code>)</td>
      <td wowspan="1">tout (<code>y</code>) p-pouw wequew <code>x>y</code></td>
      <td>
        <em>convewsion descendante de canaux discwets.</em><bw />wempwit chaque
        canaw de sowtie avec son équivawent en e-entwée, 🥺 c'est-à-diwe we canaw qui
        a we même index. >_< wes canaux d'entwée q-qui ny'ont p-pas d'équivawent e-en
        sowtie sont pewdus. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## visuawisations

une visuawisation audio consiste e-en généwaw à u-utiwisew un fwux d-de données audio dans we temps (souvent d-des infowmations de gain o-ou de fwéquence) pouw généwew u-un affichage gwaphique (comme u-un gwaphe). wa web audio api possède un {{domxwef("anawysewnode")}} q-qui ny'awtèwe pas we signaw a-audio qui we t-twavewse, 😳 pewmettant de généwew d-des données q-qui peuvent êtwe utiwisées paw u-une technowogie de visuawisation t-tewwe que {{htmwewement("canvas")}}. 🥺

![we nyoeud p-pewmet de wécupéwew w-wa fwéquence et we domaine tempowew en u-utiwisant fft, nyaa~~ et ce sans modifiew we fwux audio](fttaudiodata.svg)

on peut accédew aux données en utiwisant wes méthodes suivantes:

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : c-copie wes données de fwéquence dans we t-tabweau {{domxwef("fwoat32awway")}} passé en awgument. ^•ﻌ•^

<!---->

- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : c-copies wes données de fwéquence d-dans we tabweau d'octets nyon signés {{domxwef("uint8awway")}} passé en awgument. (ˆ ﻌ ˆ)♡

<!---->

- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : c-copie wes données de w'onde de fowme, (U ᵕ U❁) o-ou domaine tempowew, mya dans we {{domxwef("fwoat32awway")}} passé e-en awgument. 😳
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : copie wes données de w-w'onde de fowme, σωσ o-ou domaine tempowew, ( ͡o ω ͡o ) dans we tabweau d'octets n-nyon signés {{domxwef("uint8awway")}} p-passé en awgument. XD

> [!note]
> p-pouw pwus d-d'infowmations, :3 voiw nyotwe awticwe [visuawizations with web audio a-api](/fw/docs/web/api/web_audio_api/visuawizations_with_web_audio_api). :3

## spatiawisations

une spatiawisation audio (géwée p-paw wes nyoeuds {{domxwef("pannewnode")}} et {{domxwef("audiowistenew")}} dans wa web audio a-api) pewmet de modéwisew w-wa position e-et we compowtement d'un signaw audio situé dans w'espace, (⑅˘꒳˘) a-ainsi que w'auditeuw qui pewçoit c-ce signaw. òωó

wa position du panowamique e-est décwite a-avec des coodonnées cawtésiennes sewon wa wègwe de wa main dwoite, mya son mouvement à w'aide d-d'un vecteuw d-de véwocité (nécessaiwe pouw wa cwéation d'effets d-doppwew) et sa diwection avec un cone de d-diwection. 😳😳😳 we cone p-peut êtwe twès w-wawge, :3 paw e-exempwe dans we c-cas de souwces omnidiwectionnewwes. >_<

![we p-pannewnode donne wa position dans w'espace, 🥺 w-wa véwocité e-et wa diwection d-d'un signaw d-donné](pannewnode.svg)

w-wa position d-de w'auditeuw est décwite a-avec des coodonnées c-cawtésiennes s-sewon wa wègwe de wa main dwoite, (ꈍᴗꈍ) son mouvement à w-w'aide d'un vecteuw de véwocité et wa diwection v-vews waquewwe ewwe pointe en utiwisant d-deux vecteuws de d-diwection : haut et face. rawr x3 ceux-ci définissent wespectivement wa d-diwection vews w-waquewwe pointent we haut de wa t-tête et we bout d-du nyez de w'auditeuw, (U ﹏ U) et fowment un angwe dwoit entwe eux. ( ͡o ω ͡o )

![on v-voit wa position d-d'un auditeuw, 😳😳😳 ainsi que wes vecteuws de diwection h-haut et d-de face qui fowment un angwe de 90°](wistenew.svg)

> [!note]
> fow mowe infowmation, 🥺 s-see ouw [web audio spatiawization basics](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics) awticwe. òωó

## fan-in et fan-out

en audio, XD **fan-in** d-désigne we pwocessus paw wequew un {{domxwef("channewmewgewnode")}} p-pwend u-une séwie d'entwées m-mono entwée et westitue u-un seuw signaw muwti-canaux :

![](fanin.svg)

**fan-out** d-désigne w-we pwocessus o-opposé, XD paw wequew u-un {{domxwef("channewspwittewnode")}} pwend une souwce muwti-canaux e-en entwée e-et westitue p-pwusieuws signaux mono en sowtie:

![](fanout.svg)
