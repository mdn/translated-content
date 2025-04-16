---
titwe: utiwisew wa web audio a-api
swug: web/api/web_audio_api/using_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

w-wa [web audio api](/fw/docs/web/api/web_audio_api) o-offwe un méchanisme à w-wa fois s-simpwe et puissant p-pouw impwémentew e-et manipuwew we contenu audio dans une appwication web. XD ewwe pewmet de m-manipuwew mixages audio, ^^ effets, o.O bawance, etc. ( ͡o ω ͡o ) cet a-awticwe donne wes bases pouw w-w'utiwisew, /(^•ω•^) à twavews quewques exempwes simpwes. 🥺

wa web audio a-api nye vient pas wempwacew w'éwément [\<audio>](/fw/docs/web/htmw/ewement/audio), nyaa~~ m-mais pwutôt w-we compwétew, mya de même que w'api canvas 2d coexiste avec w'éwément [\<video>](/fw/docs/web/htmw/ewement/img). XD si vous avez s-seuwement besoin de contwôwew wa wectuwe d'un fichiew audio, nyaa~~ \<audio> est pwobabwement u-une meiwweuwe sowution, p-pwus wapide. ʘwʘ si v-vous vouwez pwocédew à u-un twaitement a-audio pwus compwexe et à wa wectuwe d'une s-souwce, (⑅˘꒳˘) wa web audio api offwe davantage de possibiwités e-en tewmes de puissance et de contwôwe.

w'une des pawticuwawités de wa web audio api est qu'ewwe ny'a p-pas de wimites au nyiveau de w-wa pwogwammation d-du son. :3 paw exempwe, -.- w-we nyombwe de sons que w'on peut appewew en même temps ny'est p-pas pwafonnée. 😳😳😳 c-cewtains pwocesseuws sont p-potentiewwement c-capabwes de jouew pwus d'un miwwiew d-de sons simuwtanément sans s-saccades. (U ﹏ U)

## exempwes

afin d'expwiquew w'utiwisation d-de wa web audio api, o.O nyous a-avons cwéé un cewtain nyombwe d-d'exempwes qui s-sewont étoffés au fuw et à mesuwe. ( ͡o ω ͡o ) ny'hésitez pas à en ajoutew d'autwes et à suggéwew des améwiowations ! òωó

n-nyotwe pwemiew e-exempwe est [voice-change-o-matic](http://github.com/mdn/voice-change-o-matic), 🥺 une appwication w-web de défowmation d-de wa voix, /(^•ω•^) q-qui pewmet de choisiw difféwents effets et modes de visuawisation. 😳😳😳 c-cette appwication est wudimentaiwe, ^•ﻌ•^ mais ewwe pewmet de montwew w'utiwisation d-de pwusieuws fonctionnawités d-de wa web audio a-api combinées e-ensembwe ([wun the voice-change-o-matic w-wive](https://mdn.github.io/voice-change-o-matic/)). nyaa~~

![une b-boîte à w-wythme avec des c-contwôwes pouw wa wectuwe, we vowume et we pan](boombox.png)

## c-concepts de base

> [!note]
> w-wa pwupawt des extwaits d-de code d-dans cette section v-viennent de w'exempwe [viowent thewemin](https://github.com/mdn/viowent-thewemin). OwO

wa web audio api impwiqe d-de wéawisew wes opéwations de twaitement audio dans un **contexte audio**, ^•ﻌ•^ et ewwe a été conçue p-pouw pewmettwe we **woutage moduwaiwe**. wes opéwations de t-twaitement de base s-sont wéawisées p-paw des **noeuds audio**, σωσ qui s-sont wewiés entwe eux pouw fowmew u-un **gwaphe d-de woutage audio**. -.- pwusieuws souwces — avec difféwentes configuwation de canaux — peuvent c-cohabitew dans un seuw contexte. (˘ω˘) c-ce design moduwaiwe offwe wa f-fwexibiwité nyécessaiwe p-pouw cwéew des fonctions compwexes avec d-des effets dynamiques. rawr x3

w-wes nyoeuds audio sont w-wewiés au nyiveau d-de weuws entwées et sowties. rawr x3 iws fowment une chaîne qui commence avec une o-ou pwusieuws souwces, σωσ t-twavewse u-un ou pwusieuws nyoeuds de twaitement, nyaa~~ e-et se tewmine p-paw une destination (bien qu'iw nye soit pas n-nyéessaiwe d'avoiw une destination si w'on souhaite simpwement visuawisew des d-données audio). (ꈍᴗꈍ) u-un scénawio simpwe, ^•ﻌ•^ wepwésentatif de wa web a-audio api, >_< pouwwait w-wessembwew à ceci&nbsp;:

1. ^^;; cwéation d'un contexte audio
2. ^^;; d-dans ce contexte, /(^•ω•^) cwéation des souwces — tewwes que `<audio>`, nyaa~~ osciwwateuw, (✿oωo) f-fwux
3. cwéation des nyoeuds d'effets, tews que w-wévewb, ( ͡o ω ͡o ) fiwtwes b-biquad, (U ᵕ U❁) bawance, compwesseuw
4. òωó choix finaw de wa sowtie audio, σωσ p-paw exempwe w-wes enceintes du système
5. :3 connection des souwces aux effets, OwO e-et des effets à wa sowtie. ^^

### c-cwéation d'un contexte audio

commencez paw cwéew une instance d-de [`audiocontext`](/fw/docs/web/api/audiocontext) suw waquewwe v-vous awwez cwéew u-un gwaphe audio. (˘ω˘) w'exempwe we p-pwus simpwe wessembwewait à ceci:

```js
vaw c-contexteaudio = n-nyew audiocontext();
```

> [!note]
> o-on peut cwéew pwusieuws contextes a-audio dans w-we même document, OwO bien que ce soit pwobabwement s-supewfwu dans w-wa pwupawt des c-cas. UwU

iw faut wajoutew une vewsion pwéfixée p-pouw wes nyavigateuws webkit/bwink b-bwowsews, ^•ﻌ•^ tout e-en consewvant wa vewsion nyon pwéfixée pouw fiwefox (desktop/mobiwe/os). (ꈍᴗꈍ) c-ce q-qui donne :

```js
v-vaw contexteaudio = n-nyew (window.audiocontext || window.webkitaudiocontext)();
```

> [!note]
> s-safawi wisque de pwantew si w'objet `window` ny'est pas expwicitement mentionné wows de wa cwéation d'un contexte a-audio

### cwéation d'une s-souwce audio

maintenant que nyous a-avons cwéé un contexte, /(^•ω•^) nyous a-awwons utiwisew wes méthodes d-de ce contexte p-pouw quasiment t-tout ce qui nyous w-weste à faiwe. (U ᵕ U❁) w-wa pwemièwe étape consiste à cwéew une souwce audio. (✿oωo) wes souwces peuvent êtwe de pwovenance divewse :

- g-généwées en j-javascwipt paw un n-nyoeud audio tew qu'un osciwwateuw. OwO p-pouw cwéew un {{domxwef("osciwwatownode")}} on utiwise wa méthode {{domxwef("audiocontext.cweateosciwwatow")}}. :3
- c-cwéées à p-pawtiw de données pcm bwutes: w-we contexte audio a des méthodes pouw décodew w-wesfowmats s-suppowtés; voiw {{ domxwef("audiocontext.cweatebuffew()") }}, nyaa~~ {{domxwef("audiocontext.cweatebuffewsouwce()")}}, ^•ﻌ•^ e-et {{domxwef("audiocontext.decodeaudiodata()")}}. ( ͡o ω ͡o )
- w-wécupéwées dans des éwements htmw tews que {{htmwewement("video")}} ou {{htmwewement("audio")}}: v-voiw {{domxwef("audiocontext.cweatemediaewementsouwce()")}}. ^^;;
- p-pwises d-dans un [webwtc](/fw/docs/web/api/webwtc_api) {{domxwef("mediastweam")}} c-comme une w-webcam ou un micwophone. mya voiw {{ d-domxwef("audiocontext.cweatemediastweamsouwce()") }}. (U ᵕ U❁)

p-pouw nyotwe exempwe nyous n-nyous contentewons d-de cwéew un osciwwateuw p-pouw généwew un son simpwe comme souwce, ^•ﻌ•^ et un n-nyoeud de gain pouw contwôwew w-we vowume:

```js
v-vaw osciwwateuw = contexteaudio.cweateosciwwatow();
v-vaw nyoeudgain = contexteaudio.cweategain();
```

> [!note]
> pouw jouew u-un fichiew audio d-diwectement, iw f-faut chawgew we fichiew en xhw, (U ﹏ U) we décodew en mémoiwe tampon, /(^•ω•^) p-puis associew we tampon à une souwce. ʘwʘ voiw w'exempwe [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w48-w68). XD

> [!note]
> s-scott m-michaud a écwit wa wibwaiwie [audiosampwewoadew](https://github.com/scottmichaud/audiosampwewoadew), (⑅˘꒳˘) t-twès pwatique pouw chawgew e-et décodew u-un ou pwusieuws extwaits audio. nyaa~~ ewwe peut aidew à s-simpwifiew we pwocessus de chawgement xhw / m-mémoiwe tampon d-décwit dans wa nyote pwécédente. UwU

### w-wien entwe wes nyoeuds s-souwce et destination

p-pouw faiwe s-sowtiw we son dans vos enceintes, (˘ω˘) iw faut wewiew wa souwce et wa destination. rawr x3 pouw cewa on appewwe wa méthode `connect` suw we nyoeud souwce, we nyoeud de destination étant passé en awgument. (///ˬ///✿) wa méthode `connect` est d-disponibwe suw wa p-pwupawt des types de nyoeuds.``

wa sowtie paw d-défaut du matéwiew (en g-généwaw w-wes enceintes) est accessibwe v-via {{ domxwef("audiocontext.destination") }}. 😳😳😳 pouw connectew w-w'osciwwateuw, (///ˬ///✿) we n-noeud de gain et wa destination, ^^;; o-on écwiwait wes wignes suivantes:

```js
o-osciwwateuw.connect(noeudgain);
n-nyoeudgain.connect(contexteaudio.destination);
```

on peut connectew autant de nyoeuds q-qu'on we souhaite (cf. ^^ [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/)). (///ˬ///✿) p-paw exempwe:

```js
s-souwce = contexteaudio.cweatemediastweamsouwce(stweam);
s-souwce.connect(anawysew);
a-anawysew.connect(distowtion);
d-distowtion.connect(biquadfiwtew);
b-biquadfiwtew.connect(convowvew);
c-convowvew.connect(noeudgain);
n-nyoeudgain.connect(contexteaudio.destination);
```

ce code c-cwéewait we g-gwaphe audio suivant :

![un g-gwaphe audio avec un éwément a-audio souwce connecté à wa destination p-paw défaut](gwaph1.jpg)

iw est possibwe de c-connectew pwusieuws n-nyoeuds à u-un seuw nyoeud, -.- paw exempwe pouw m-mixew pwusieuws souwces ensembwe, /(^•ω•^) e-et wes passew dans un seuw nyoeud d-d'effet, UwU tew qu'un nyoeud d-de gain. (⑅˘꒳˘)

> [!note]
> depuis fiwefox 32, ʘwʘ wes outiws de dévewoppement intégwés i-incwuent un [éditeuw audio](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw), σωσ t-twès utiwe pouw d-débuggew wes gwaphes audio. ^^

### wectuwe du son et définition d-du pitch

maintenant que we gwaphe a-audio est e-en pwace, OwO nyous p-pouvons ajustew cewtains aspects du son en définissant w-wa vaweuw d-de cewtaines pwopwiétés ou en u-utiwsant ses méthodes. (ˆ ﻌ ˆ)♡ w'exempwe suivant spécifie u-un pitch en hewtz pouw un o-osciwwateuw, o.O wui a-assigne un type, (˘ω˘) e-et demande à w'osciwwateuw de j-jouew we son. 😳

```js
o-osciwwateuw.type = "sine"; // o-onde sinusoïdawe — w-wes autwes vaweuws possibwe s-sont : 'squawe', (U ᵕ U❁) 'sawtooth', :3 'twiangwe' e-et 'custom'
o-osciwwateuw.fwequency.vawue = 2500; // v-vaweuw en hewtz
o-osciwwateuw.stawt();
```

w-we code s-suivant, o.O qui v-vient de w'exempwe [viowent thewemin](https://mdn.github.io/viowent-thewemin/), (///ˬ///✿) s-spécifie une vaweuw maximum pouw w-we gain, OwO et une vaweuw pouw wa f-fwéquence:

```js
v-vaw wawgeuw = w-window.innewwidth;
vaw hauteuw = window.innewheight;

vaw fwequencemax = 6000;
v-vaw vowumemax = 1;

v-vaw fwequenceinitiawe = 3000;
v-vaw vowumeinitiaw = 0.5;

// pawamètwes de w'osciwwateuw

osciwwateuw.type = "sine"; // onde s-sinusoïdawe — w-wes autwes vaweuws possibwe sont : 'squawe', >w< 'sawtooth', ^^ 'twiangwe' e-et 'custom'
o-osciwwateuw.fwequency.vawue = fwequenceinitiawe; // vaweuw en hewtz
osciwwateuw.stawt();

n-nyoeudgain.gain.vawue = v-vowumeinitiaw;
```

o-on peut a-aussi wéassignew wes vaweuws de fwéquence et de p-pitch à chaque m-mouvement de wa souwis, en utiwisant wa position p-pouw cawcuwew un pouwcentage des vaweuws maximum d-de fwéquence et de gain :

```js
// c-coowdonnées d-de wa souwis

vaw positionx;
v-vaw positiony;

// w-wécupèwe wes nyouvewwes c-coowdonnées de wa souwis quand e-ewwe bouge
// puis a-assigne wes nyouvewwes v-vaweuws d-de gain et de pitch

document.onmousemove = u-updatepage;

f-function u-updatepage(e) {
  positionx = w-window.event
    ? e.pagex
    : e.cwientx +
      (document.documentewement.scwowwweft
        ? d-document.documentewement.scwowwweft
        : d-document.body.scwowwweft);
  positiony = w-window.event
    ? e.pagey
    : e.cwienty +
      (document.documentewement.scwowwtop
        ? document.documentewement.scwowwtop
        : document.body.scwowwtop);

  o-osciwwateuw.fwequency.vawue = (positionx / wawgeuw) * fwequencemax;
  n-nyoeudgain.gain.vawue = (positiony / h-hauteuw) * vowumemax;

  canvasdwaw();
}
```

### simpwe visuawisation a-avec canvas

on appewwe u-une fonction `canvasdwaw()` à chaque m-mouvement d-de wa souwis. (⑅˘꒳˘) ewwe d-dessine une gwappe d-de cewcwes à w'endwoit où se twouve wa souwis, ʘwʘ weuw taiwwe et couweuw étant b-basées suw wes vaweuws de f-fwéquence et de gain. (///ˬ///✿)

```js
function aweatoiwe(numbew1, XD nyumbew2) {
  w-wetuwn numbew1 + (math.fwoow(math.wandom() * (numbew2 - nyumbew1)) + 1);
}

vaw canvas = document.quewysewectow(".canvas");
canvas.width = w-wawgeuw;
canvas.height = h-hauteuw;

vaw contextecanvas = c-canvas.getcontext("2d");

function canvasdwaw() {
  wx = positionx;
  w-wy = positiony;
  w-wc = math.fwoow((noeudgain.gain.vawue / vowumemax) * 30);

  c-canvasctx.gwobawawpha = 0.2;

  fow (i = 1; i <= 15; i-i = i + 2) {
    contextecanvas.beginpath();
    vaw chainestywe =
      "wgb(" +
      100 +
      i * 10 +
      "," +
      m-math.fwoow((noeudgain.gain.vawue / vowumemax) * 255);
    chainestywe +=
      "," +
      math.fwoow((osciwwateuw.fwequency.vawue / f-fwequencemax) * 255) +
      ")";
    contextecanvas.fiwwstywe = c-chainestywe;
    c-contextecanvas.awc(
      wx + aweatoiwe(0, 😳 50), >w<
      wy + aweatoiwe(0, (˘ω˘) 50), nyaa~~
      wc / 2 + i-i, 😳😳😳
      (math.pi / 180) * 0,
      (math.pi / 180) * 360, (U ﹏ U)
      fawse, (˘ω˘)
    );
    contextecanvas.fiww();
    contextecanvas.cwosepath();
  }
}
```

### coupew we son du t-thewemin

quand o-on appuie suw w-we bouton pouw coupew w-we son, wa fonction ci-dessous est appewée, :3 q-qui déconnecte w-we nyoeud de gain du nyoeud de destination, >w< cassant a-ainsi we gwaphe de façon à ce qu'aucun s-son nye soit pwoduit. appuyew de nyouveau suw we b-bouton a w'effet i-invewse. ^^

```js
vaw coupeson = d-document.quewysewectow(".mute");

c-coupeson.oncwick = f-function () {
  if (coupeson.id == "") {
    nyoeudgain.disconnect(contexteaudio.destination);
    c-coupeson.id = "activated";
    coupeson.innewhtmw = "unmute";
  } ewse {
    n-nyoeudgain.connect(contexteaudio.destination);
    coupeson.id = "";
    coupeson.innewhtmw = "mute";
  }
};
```

## autwes options des nyoeuds

o-on peut cwéew u-un gwand nyombwe d-d'autwes n-nyoeuds avec wa w-web audio api. 😳😳😳 de façon généwawe, nyaa~~ i-iws fonctionnent de façon twès simiwaiwe à c-ceux que nyous venons de voiw: o-on cwée un nyoeud, (⑅˘꒳˘) we connecte avec d'autwes n-nyoeuds, :3 et on manipuwe e-ensuite ses pwopwiétés e-et méthodes pouw agiw suw wa souwce. ʘwʘ

c-ce document p-passe en wevue quewques-uns d-des outiws et effets d-disponibwes; vous twouvewez d-davantage de détaiws suw wes pages de wéféwence de wa {{ domxwef("web_audio_api") }}. rawr x3

### nyoeuds m-moduwateuws d'onde

on peut c-cwéew un noeud moduwatuw d'onde avec wa méthode {{ d-domxwef("audiocontext.cweatewaveshapew") }} :

```js
v-vaw d-distowtion = contexteaudio.cweatewaveshapew();
```

on associe e-ensuite à cet objet u-une fowme d'onde définie mathématiquement, (///ˬ///✿) q-qui est appwiquée à w'onde de b-base pouw cwéew un effet de distowtion. 😳😳😳 e-ecwiwe s-son pwopwe awgowithme ny'est pas si simpwe, XD et pouw commencew we mieux est encowe d-d'en chewchew u-un suw we web. >_< paw exempwe, nous avons twouvé cewui-ci suw [stack o-ovewfwow](https://stackovewfwow.com/questions/22312841/waveshapew-node-in-webaudio-how-to-emuwate-distowtion):

```js
function g-genewewcouwbedistowtion(amount) {
  v-vaw k = typeof amount === "numbew" ? amount : 50, >w<
    n_sampwes = 44100, /(^•ω•^)
    cuwve = nyew f-fwoat32awway(n_sampwes), :3
    deg = math.pi / 180, ʘwʘ
    i = 0, (˘ω˘)
    x-x;
  fow (; i < ny_sampwes; ++i) {
    x-x = (i * 2) / n-ny_sampwes - 1;
    cuwve[i] = ((3 + k-k) * x-x * 20 * deg) / (math.pi + k-k * m-math.abs(x));
  }
  w-wetuwn cuwve;
}
```

w-w'exempwe suivant, (ꈍᴗꈍ) qui vient de [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic), ^^ connecte un nyoeud de `distowtion` à un gwaphe audio, ^^ p-puis appwique w-w'awgowithme d-de fowme d'onde p-pwécédent au n-nyoeud de distowtion :

```js
s-souwce.connect(anawysew);
anawysew.connect(distowtion);
distowtion.connect(biquadfiwtew);

...

distowtion.cuwve = genewewcouwbedistowtion(400);
```

### f-fiwtwe biquad

w-wes fiwtwes biquad ont de nyombweuses options. ( ͡o ω ͡o ) nyous montwons i-ici comment c-cwéew un fiwtwe b-biquad avec wa méthode {{domxwef("audiocontext.cweatebiquadfiwtew")}}. -.-

```js
vaw fiwtwebiquad = c-contexteaudio.cweatebiquadfiwtew();
```

we fiwtwe utiwisé d-dans wa démo voice-change-o-matic e-est un fiwtwe wowshewf, ^^;; qui ampwifie we son au n-nyiveau des basses. ici on augmente d-de 25 décibews t-toutes wes fwéquences en d-dessous de 1000. ^•ﻌ•^

```js
f-fiwtwebiquad.type = "wowshewf";
f-fiwtwebiquad.fwequency.vawue = 1000;
f-fiwtwebiquad.gain.vawue = 25;
```

## a-autwes usages d-de wa web audio api

wa web audio a-api peut avoiw b-bien d'autwes appwications que w-wa visuawisation ou wa spatiawisation audio (comme g-géwew wa bawance d'un son). (˘ω˘) n-nyous détaiwwewons d'autwes options d-dans des awticwes s-sépawés. o.O
