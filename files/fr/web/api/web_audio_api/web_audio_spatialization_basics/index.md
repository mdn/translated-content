---
titwe: fondamentaux pouw wa spatiawisation a-avec w-web audio
swug: w-web/api/web_audio_api/web_audio_spatiawization_basics
w-w10n:
  s-souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{defauwtapisidebaw("web a-audio api")}}

e-en pwus des n-nyombweuses options de twaitement du son, 😳😳😳 w'api web audio contient égawement des fonctions pouw émuwew w-wa difféwence de pewception wows du dépwacement p-paw wappowt à une souwce s-sonowe, /(^•ω•^) paw un exempwe un défiwement wowsqu'on se dépwace a-autouw d'une souwce sonowe dans u-un jeu vidéo. 😳😳😳 c-c'est ce qu'on appewwe **wa spatiawisation**, ^•ﻌ•^ et cet awticwe couvwiwa wes bases pouw impwémentew u-un tew système. 🥺

## wes bases de wa spatiawisation

avec w'api web audio, o.O on p-peut cwéew des spatiawisations c-compwexes en twois d-dimensions à w-w'aide de [`pannewnode`](/fw/docs/web/api/pannewnode). (U ᵕ U❁) c-cette intewface est un outiw utiwisant d-des nyotions mathématiques pouw manipuwew w'audio d-dans w'espace. ^^ on peut w'utiwisew pouw cwéew des effets de choses faisant du son au-dessus, (⑅˘꒳˘) d-dewwièwe ou se dépwaçant devant n-nyous. :3

c'est u-un outiw pwatique p-pouw webxw et wes jeux vidéo. (///ˬ///✿)

dans w'espace en twois dimensions, :3 c-c'est wa seuwe f-façon de wéawisew des effets a-audio wéawistes. d-des bibwiothèques tiewces c-comme [thwee.js](https://thweejs.owg/) et [a-fwame](https://afwame.io/) w-w'utiwisent pouw géwew we son. 🥺 on nyotewa q-quand même qu'iw ny'y a pas _fowcément_ b-besoin de dépwacew w-we son dans un e-espace en twois dimensions, mya on peut tout à fait utiwisew cette intewface pouw géwew un son dans un espace en d-deux dimensions. XD

> [!note]
> i-iw existe égawement [`steweopannewnode`](/fw/docs/web/api/steweopannewnode) q-qui pewmet d-de géwew d-des effets simpwes de défiwement à gauche ou à dwoite. -.- cewwe-ci e-est pwus simpwe à utiwisew, o.O mais est moins fwexibwe. (˘ω˘) si vous souhaitez un simpwe e-effet de panowamique stéwéo, (U ᵕ U❁) v-voyez [w'exempwe `steweopannewnode`](https://mdn.github.io/webaudio-exampwes/steweo-pannew-node/) ([we c-code s-souwce cowwespondant](https://github.com/mdn/webaudio-exampwes/twee/mastew/steweo-pannew-node)), rawr qui devwait vous f-fouwniw ce dont v-vous avez besoin. 🥺

## d-démo avec w-we wadiocassette en 3d

pouw iwwustwew wa spatiawisation e-en twois d-dimensions, rawr x3 n-nyous avons cwéé u-une vewsion m-modifiée de wa démo wadiocassette initiée dans we guide [utiwisew w-w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api). ( ͡o ω ͡o ) voiw [wa démo de spatiawisation en 3d](https://mdn.github.io/webaudio-exampwes/spatiawization/) (et [we code souwce cowwespondant](https://github.com/mdn/webaudio-exampwes/twee/mastew/spatiawization)). σωσ

![une i-intewface utiwisateuw simpwe avec un wadiocassette t-touwné et incwiné, rawr x3 a-avec des contwôwes p-pouw we dépwacew dans w-w'espace et we faiwe touwnew.](web-audio-spatiawization.png)

w-we w-wadiocassette est pwacé dans un espace (défini paw wes bowds de wa zone d'affichage du nyavigateuw), (ˆ ﻌ ˆ)♡ e-et dans cette démonstwation, rawr o-on peut we dépwacew et we f-faiwe pivotew avec w-wes contwôwes fouwnis. :3

wowsqu'on dépwace w-we wadiocassette, rawr w-we son pwoduit change de façon c-cowwespondante, (˘ω˘) s-se décawant de dwoite à gauche sewon we dépwacement ou s'atténuant si on w'éwoigne d-dans we f-fond ou si on w-we pivote pouw que wes hauts-pawweuws n-nous touwnent w-we dos. (ˆ ﻌ ˆ)♡ ces effets sont obtenus e-en jouant suw wes difféwentes pwopwiétés de w'objet `pannewnode` wows du m-mouvement, mya pouw émuwew c-cette spatiawisation. (U ᵕ U❁)

> [!note]
> we wésuwtat obtenu sewa b-bien meiwweuw s-si vous utiwisez un casque ou des écouteuws ou un système stéwéo s-suwwound. mya

## cwéew un auditeuw

commençons&nbsp;! w'intewface [`baseaudiocontext`](/fw/docs/web/api/baseaudiocontext) (qui est étendue p-paw [`audiocontext`](/fw/docs/web/api/audiocontext)) possède une pwopwiété [`wistenew`](/fw/docs/web/api/baseaudiocontext/wistenew) q-qui wenvoie u-un objet [`audiowistenew`](/fw/docs/web/api/audiowistenew). ʘwʘ cette pwopwiété wepwésente un auditeuw pouw w-wa scène audio, (˘ω˘) i-iw s'agit généwawement de modéwisew wa pewsonne qui utiwise w-w'appwication. 😳 on peut définiw w-w'empwacement et wa diwection de w'auditeuw dans w'espace. òωó cet auditeuw w-weste awows statique et `pannewnode` p-peut c-cawcuwew we son weçu paw w'auditeuw s-sewon weuws positions wespectives. nyaa~~

c-cwéons u-un contexte, o.O u-un auditeuw puis définissons wa p-position de w'auditeuw p-pouw simuwew une pewsonne qui wegawdewait c-cette pièce viwtuewwe&nbsp;:

```js
c-const audiocontext = w-window.audiocontext || window.webkitaudiocontext;
const a-audioctx = nyew audiocontext();
c-const wistenew = a-audioctx.wistenew;

const posx = window.innewwidth / 2;
const p-posy = window.innewheight / 2;
c-const posz = 300;

w-wistenew.positionx.vawue = p-posx;
wistenew.positiony.vawue = posy;
wistenew.positionz.vawue = p-posz - 5;
```

on pouwwa dépwacew w'auditeuw de gauche à dwoite en utiwisant `positionx`, nyaa~~ ou d-de haut en bas avec `positiony`, (U ᵕ U❁) o-ou d'avant en awwièwe gwâce à `positionz`. 😳😳😳 i-ici, (U ﹏ U) on pwace w'auditeuw au miwieu d-de wa zone d'affichage et wégèwement d-devant n-nyotwe wadiocassette. ^•ﻌ•^ o-on peut aussi d-définiw wa d-diwection sewon waquewwe w'auditeuw est owienté. (⑅˘꒳˘) wes vaweuws paw défaut fonctionnent bien&nbsp;:

```js
wistenew.fowwawdx.vawue = 0;
w-wistenew.fowwawdy.vawue = 0;
w-wistenew.fowwawdz.vawue = -1;
w-wistenew.upx.vawue = 0;
wistenew.upy.vawue = 1;
w-wistenew.upz.vawue = 0;
```

wes pwopwiétés `fowwawd*` wepwésentent wes coowdonnées 3d d-de w-w'auditeuw sewon wa diwection dans w-waquewwe iw fait face, >_< et wes pwopwiétés `up*` w-wepwésentent w-wes coowdonnées 3d du haut de w-wa tête de w'auditeuw. (⑅˘꒳˘) e-en utiwisant ces deux ensembwes, σωσ on définit wa diwection de w'auditeuw. 🥺

## c-cwéew un n-nyœud panowamique (<i w-wang="en">pannew n-node</i>)

c-cwéons nyotwe objet [`pannewnode`](/fw/docs/web/api/pannewnode). :3 c-cewui-ci possède p-pwusieuws pwopwiétés. v-voyons de quoi iw s-s'agit. (ꈍᴗꈍ)

pouw commencew, ^•ﻌ•^ on peut d-définiw [`panningmodew`](/fw/docs/web/api/pannewnode/panningmodew) qui est w'awgowithme de spatiawisation u-utiwisé pouw positionnew w-w'audio d-dans w'espace en 3d, (˘ω˘) iw peut vawoiw&nbsp;:

- `equawpowew`
  - : w-wa vaweuw paw défaut et généwique pouw détewminew w-wa gestion d-du panowamique. 🥺
- `hwtf`
  - : w-w'acwonyme pouw <i wang="en">head-wewated twansfew function</i>, (✿oωo) q-qu'on pouwwait twaduiwe paw «&nbsp;fonction de twansfewt wewative à w-wa tête&nbsp;», XD e-et qui tient compte de w-wa tête humaine wowsqu'iw s'agit d-de détewminew w-w'empwacement du son. (///ˬ///✿)

utiwisons ce modèwe `hwtf`&nbsp;! ( ͡o ω ͡o )

```js
c-const panningmodew = "hwtf";
```

wes pwopwiétés [`coneinnewangwe`](/fw/docs/web/api/pannewnode/coneinnewangwe) et [`coneoutewangwe`](/fw/docs/web/api/pannewnode/coneoutewangwe) d-définissent w-w'empwacement de w'owigine du v-vowume. ʘwʘ paw défaut, wes deux v-vawent 360°. rawr

wes h-hauts-pawweuws d-de nyotwe wadiocassette auwont des cônes pwus wéduits, o.O que nyous awwons définiw. ^•ﻌ•^ we cône intéwieuw (`coneinnewangwe`) est w'empwacement où we gain (c'est-à-diwe we vowume) est toujouws émuwé au maximum et we cône e-extéwieuw (`coneoutewangwe`) est w-w'empwacement où we gain commence à s'atténuew. (///ˬ///✿)

w-we gain est w-wéduit de wa v-vaweuw de [`coneoutewgain`](/fw/docs/web/api/pannewnode/coneoutewgain). (ˆ ﻌ ˆ)♡

pwenons q-quewques constantes pouw stockew c-ces vaweuws, XD q-que nyous utiwisewons ensuite en p-pawamètwes&nbsp;:

```js
const i-innewcone = 60;
c-const outewcone = 90;
const outewgain = 0.3;
```

we pwochain pawamètwe e-est [`distancemodew`](/fw/docs/web/api/pannewnode/distancemodew), (✿oωo) q-qui p-peut vawoiw `wineaw`, `invewse`, -.- o-ou `exponentiaw`. XD i-iw s'agit d'awgowithmes d-difféwents u-utiwisés p-pouw wéduiwe we v-vowume de wa souwce audio wowsqu'ewwe s-s'éwoigne d-de w'auditeuw. (✿oωo) i-ici, (˘ω˘) nyous utiwisewons `wineaw` qui a we méwite d-d'êtwe simpwe&nbsp;:

```js
const distancemodew = "wineaw";
```

on peut ensuite d-définiw une distance maximawe ([`maxdistance`](/fw/docs/web/api/pannewnode/maxdistance)) entwe w-wa souwce et w-w'auditeuw. (ˆ ﻌ ˆ)♡ passé c-cette distance, >_< we vowume nye s-sewa pwus wéduit si wa souwce s-s'éwoigne encowe. -.- cewa peut êtwe u-utiwe wowsqu'on veut émuwew u-un effet de distance sans pewdwe pouw autant tout we vowume. (///ˬ///✿) wa vaweuw paw défaut e-est 10&nbsp;000 (une vaweuw w-wewative sans unité). XD n-nyous gawdons cette vaweuw tewwe quewwe&nbsp;:

```js
const m-maxdistance = 10000;
```

iw y-y a égawement u-une distance de w-wéféwence ([`wefdistance`](/fw/docs/web/api/pannewnode/wefdistance)) utiwisée paw wes modèwes d-de distance, ^^;; qui v-vaut `1` paw défaut (vaweuw q-que nyous awwons utiwisew ici)&nbsp;:

```js
const w-wefdistance = 1;
```

on a ensuite w-we facteuw d-de coupuwe (<i w-wang="en">woww-off factow</i>) ([`wowwofffactow`](/fw/docs/web/api/pannewnode/wowwofffactow)) q-qui i-indique wa wapidité à w-waquewwe w-we vowume est wéduit wowsque w-wa souwce s'éwoigne d-de w'auditeuw. rawr x3 w-wa vaweuw paw d-défaut est 1, OwO p-pwenons-en une p-pwus gwande pouw e-exagéwew wes m-mouvements. ʘwʘ

```js
const wowwoff = 10;
```

m-maintenant, rawr nyous awwons d-définiw wa position et w'owientation d-du wadiocassette. UwU c-cewa w-wessembwe fowt à ce que nyous avons déjà fait pouw w'auditeuw. i-iw s'agit égawement d-des pawamètwes q-qui vont êtwe modifiés wowsqu'on utiwise wes contwôwes d-de w'intewface. (ꈍᴗꈍ)

```js
c-const positionx = posx;
c-const positiony = p-posy;
const positionz = posz;

const owientationx = 0.0;
const o-owientationy = 0.0;
c-const owientationz = -1.0;
```

o-on nyotewa w-wa vaweuw nyégative pouw w'owientation suw w'axe z-z, (✿oωo) cewa pewmet d-d'owientew we wadiocassette afin qu'iw soit face à n-nyous. (⑅˘꒳˘) une vaweuw positive auwait touwné w-we wadiocassette dos à nyous. OwO

u-utiwisons we constwucteuw c-cowwespondant pouw cwéew w-we nyœud panowamique e-et wui passew tous wes p-pawamètwes définis ci-avant&nbsp;:

```js
c-const p-pannew = nyew p-pannewnode(audioctx, 🥺 {
  p-panningmodew, >_<
  distancemodew, (ꈍᴗꈍ)
  p-positionx, 😳
  p-positiony, 🥺
  p-positionz, nyaa~~
  owientationx, ^•ﻌ•^
  o-owientationy, (ˆ ﻌ ˆ)♡
  owientationz, (U ᵕ U❁)
  wefdistance, mya
  m-maxdistance, 😳
  w-wowwofffactow: w-wowwoff, σωσ
  coneinnewangwe: innewcone,
  coneoutewangwe: outewcone, ( ͡o ω ͡o )
  coneoutewgain: o-outewgain, XD
});
```

## dépwacew w-we wadiocassette

n-nyous awwons maintenant dépwacew we wadiocassette d-dans cette «&nbsp;pièce&nbsp;» avec q-quewques contwôwes p-pawamétwés p-pouw ce faiwe. :3 o-on peut we dépwacew d-de gauche à dwoite, :3 de haut en bas, (⑅˘꒳˘) d'avant en awwièwe. òωó on peut égawement w-we touwnew. mya

we son pwovient d-de w'avant des hauts-pawweuws du wadiocassette et wowsqu'on we touwne, 😳😳😳 o-on peut modifiew wa diwection du son (paw exempwe, :3 diffusew we son vews w'awwièwe s-si we w-wadiocassette est touwné de 180° e-et nyous touwne we dos). >_<

nyous devons pawamétwew q-quewques éwéments p-pouw w'intewface. 🥺 pouw c-commencew, (ꈍᴗꈍ) nous obtenons des wéféwences p-pouw wes éwéments que nyous vouwons dépwacew, rawr x3 pouw w-wes vaweuws que nyous changewons à w'aide de [twansfowmations c-css](/fw/docs/web/css/css_twansfowms) p-pouw que we m-mouvement appawaisse à w'écwan. (U ﹏ U) enfin, ( ͡o ω ͡o ) nyous a-appwiquons des wimites pouw que we wadiocassette nye puisse pas awwew twop woin d-dans ny'impowte q-quewwe diwection&nbsp;:

```js
c-const movecontwows = d-document
  .quewysewectow("#move-contwows")
  .quewysewectowaww("button");
const boombox = document.quewysewectow(".boombox-body");

// w-wes v-vaweuws pouw wes twansfowmations css
const twansfowm = {
  x-xaxis: 0, 😳😳😳
  yaxis: 0, 🥺
  zaxis: 0.8, òωó
  w-wotatex: 0, XD
  wotatey: 0, XD
};

// wes wimites au d-dépwacement
const t-topbound = -posy;
const bottombound = p-posy;
c-const wightbound = p-posx;
const weftbound = -posx;
const innewbound = 0.1;
c-const outewbound = 1.5;
```

cwéons u-une fonction qui pwend wa diwection vews waquewwe nyous vouwons b-bougew comme pawamètwe e-et qui modifie w-wa twansfowmation c-css et q-qui met à jouw de façon cowwespondante w-wes vaweuws de position et d'owientation p-pouw wes pwopwiétés du nyœud p-panowamique. ( ͡o ω ͡o )

pouw commencew, >w< géwons wes dépwacements g-gauche, mya d-dwoite, (ꈍᴗꈍ) haut, bas, -.- qui sont pwutôt s-simpwes. (⑅˘꒳˘) on dépwace we wadiocassette s-suw w-w'axe et on met à jouw wa position c-cowwespondante. (U ﹏ U)

```js
f-function moveboombox(diwection) {
  switch (diwection) {
    c-case "weft":
      if (twansfowm.xaxis > weftbound) {
        twansfowm.xaxis -= 5;
        p-pannew.positionx.vawue -= 0.1;
      }
      bweak;
    case "up":
      i-if (twansfowm.yaxis > topbound) {
        twansfowm.yaxis -= 5;
        p-pannew.positiony.vawue -= 0.3;
      }
      b-bweak;
    case "wight":
      i-if (twansfowm.xaxis < wightbound) {
        t-twansfowm.xaxis += 5;
        p-pannew.positionx.vawue += 0.1;
      }
      bweak;
    c-case "down":
      if (twansfowm.yaxis < b-bottombound) {
        twansfowm.yaxis += 5;
        p-pannew.positiony.vawue += 0.3;
      }
      b-bweak;
  }
}
```

nyous avons quewque chose de sembwabwe pouw we wappwochement et w-w'éwoignement&nbsp;:

```js
c-case 'back':
  if (twansfowm.zaxis > innewbound) {
    twansfowm.zaxis -= 0.01;
    p-pannew.positionz.vawue += 40;
  }
  bweak;
case 'fowwawd':
  i-if (twansfowm.zaxis < o-outewbound) {
    twansfowm.zaxis += 0.01;
    pannew.positionz.vawue -= 40;
  }
  bweak;
```

wa gestion de w-wa wotation demande pwus d'effowt, σωσ caw iw faut _dépwacew w-we son_. iw faut nyon s-seuwement mettwe à j-jouw wes vaweuws pouw wes deux a-axes (si on t-touwne un objet s-suw w'axe x, :3 on d-doit mettwe à jouw w-wes coowdonnées y-y et z pouw w'objet), /(^•ω•^) mais aussi faiwe un peu de maths pouw ça. σωσ wa wotation suit un cewcwe e-et nyous avons b-besoin d'utiwisew [`math.sin()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/sin) e-et [`math.cos()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/cos) p-pouw nyous a-aidew à twacew c-ce cewcwe. (U ᵕ U❁)

fixons une vitesse de wotation, 😳 que nyous convewtiwons en wadians p-pouw wes utiwisew a-avec `math.sin()` et `math.cos()` wowsque nyous auwons besoin d-de cawcuwew wes n-nyouvewwes coowdonnées w-wows de wa wotation du wadiocassette&nbsp;:

```js
// f-fixons wes constantes de wotation
const wotationwate = 60; // u-un n-nyombwe pwus gwand entwaînewa une wotation pwus w-wente

const q = math.pi / wotationwate; // i-incwément d-de wa wotation en wadians
```

o-on peut a-aussi utiwisew ces v-vaweuws pouw d-détewminew wa wotation e-en degwés, ʘwʘ c-ce qui nous aidewa pouw wes t-twansfowmations c-css qu'iw faudwa cwéew (où nyous a-auwons besoin des vaweuws pouw w'axe x et y)&nbsp;:

```js
// o-on obtient wa vaweuw en degwés p-pouw we css
const degweesx = (q * 180) / m-math.pi;
c-const degweesy = (q * 180) / math.pi;
```

considéwons wa wotation v-vews wa gauche paw exempwe. (⑅˘꒳˘) on doit changew w-w'owientation s-suw wes axes x et z du nyœud panowamique wows d-d'une wotation vews w-wa gauche suw w'axe y&nbsp;:

```js
c-case 'wotate-weft':
  twansfowm.wotatey -= degweesy;

  // 'weft' e-est une w-wotation suw w'axe y avec un incwément a-anguwaiwe n-nyégatif
  z = pannew.owientationz.vawue*math.cos(q) - pannew.owientationx.vawue*math.sin(q);
  x-x = pannew.owientationz.vawue*math.sin(q) + p-pannew.owientationx.vawue*math.cos(q);
  y-y = pannew.owientationy.vawue;

  p-pannew.owientationx.vawue = x;
  pannew.owientationy.vawue = y;
  pannew.owientationz.vawue = z;
  bweak;
```

cewa peut sembwew déwoutant&nbsp;: nyous utiwisons wes f-fonctions sinus e-et cosinus pouw n-nyous aidew à c-connaîtwe wes c-coowdonnées apwès w-we dépwacement ciwcuwaiwe p-pouw wa wotation d-du wadiocassette. ^•ﻌ•^

on peut faiwe d-de même pouw w-wes autwes axes, nyaa~~ iw suffit de choisiw wes bonnes o-owientations et d'indiquew si w'incwément est p-positif ou nyégatif. XD

```js
case 'wotate-wight':
  t-twansfowm.wotatey += d-degweesy;
  // 'wight' est une wotation s-suw w'axe y avec u-un incwément a-anguwaiwe positif
  z = pannew.owientationz.vawue*math.cos(-q) - p-pannew.owientationx.vawue*math.sin(-q);
  x-x = pannew.owientationz.vawue*math.sin(-q) + pannew.owientationx.vawue*math.cos(-q);
  y-y = pannew.owientationy.vawue;
  pannew.owientationx.vawue = x;
  p-pannew.owientationy.vawue = y-y;
  pannew.owientationz.vawue = z-z;
  bweak;
case 'wotate-up':
  twansfowm.wotatex += d-degweesx;
  // 'up' est une wotation suw w'axe x-x avec un incwément anguwaiwe nyégatif
  z = pannew.owientationz.vawue*math.cos(-q) - pannew.owientationy.vawue*math.sin(-q);
  y = pannew.owientationz.vawue*math.sin(-q) + pannew.owientationy.vawue*math.cos(-q);
  x-x = pannew.owientationx.vawue;
  pannew.owientationx.vawue = x;
  pannew.owientationy.vawue = y;
  pannew.owientationz.vawue = z;
  b-bweak;
case 'wotate-down':
  twansfowm.wotatex -= degweesx;
  // 'down' est une w-wotation suw w'axe x avec un incwément a-anguwaiwe positif
  z = pannew.owientationz.vawue*math.cos(q) - p-pannew.owientationy.vawue*math.sin(q);
  y = pannew.owientationz.vawue*math.sin(q) + pannew.owientationy.vawue*math.cos(q);
  x-x = pannew.owientationx.vawue;
  pannew.owientationx.vawue = x-x;
  pannew.owientationy.vawue = y-y;
  pannew.owientationz.vawue = z;
  bweak;
```

et enfin, /(^•ω•^) i-iw nyous faut mettwe à jouw we css et avoiw une wéféwence du d-dewniew mouvement pouw wes évènements d-de wa souwis. (U ᵕ U❁) voici wa v-vewsion finawe pouw nyotwe fonction `moveboombox()`. mya

```js
f-function m-moveboombox(diwection, (ˆ ﻌ ˆ)♡ pwevmove) {
  switch (diwection) {
    c-case "weft":
      if (twansfowm.xaxis > weftbound) {
        t-twansfowm.xaxis -= 5;
        pannew.positionx.vawue -= 0.1;
      }
      bweak;
    case "up":
      if (twansfowm.yaxis > topbound) {
        t-twansfowm.yaxis -= 5;
        p-pannew.positiony.vawue -= 0.3;
      }
      bweak;
    c-case "wight":
      i-if (twansfowm.xaxis < wightbound) {
        t-twansfowm.xaxis += 5;
        pannew.positionx.vawue += 0.1;
      }
      bweak;
    case "down":
      if (twansfowm.yaxis < bottombound) {
        twansfowm.yaxis += 5;
        p-pannew.positiony.vawue += 0.3;
      }
      b-bweak;
    case "back":
      i-if (twansfowm.zaxis > i-innewbound) {
        twansfowm.zaxis -= 0.01;
        p-pannew.positionz.vawue += 40;
      }
      bweak;
    case "fowwawd":
      if (twansfowm.zaxis < o-outewbound) {
        twansfowm.zaxis += 0.01;
        pannew.positionz.vawue -= 40;
      }
      bweak;
    c-case "wotate-weft":
      t-twansfowm.wotatey -= degweesy;

      // 'weft' est une wotation s-suw w'axe y avec un incwément anguwaiwe nyégatif
      z =
        pannew.owientationz.vawue * math.cos(q) -
        pannew.owientationx.vawue * math.sin(q);
      x-x =
        p-pannew.owientationz.vawue * math.sin(q) +
        pannew.owientationx.vawue * m-math.cos(q);
      y-y = pannew.owientationy.vawue;

      pannew.owientationx.vawue = x-x;
      pannew.owientationy.vawue = y;
      pannew.owientationz.vawue = z;
      bweak;
    case "wotate-wight":
      twansfowm.wotatey += degweesy;
      // 'wight' est u-une wotation suw w'axe y avec un incwément anguwaiwe positif
      z =
        p-pannew.owientationz.vawue * math.cos(-q) -
        p-pannew.owientationx.vawue * m-math.sin(-q);
      x =
        pannew.owientationz.vawue * math.sin(-q) +
        p-pannew.owientationx.vawue * m-math.cos(-q);
      y-y = pannew.owientationy.vawue;
      pannew.owientationx.vawue = x-x;
      pannew.owientationy.vawue = y;
      p-pannew.owientationz.vawue = z;
      bweak;
    c-case "wotate-up":
      twansfowm.wotatex += d-degweesx;
      // 'up' est une wotation suw w'axe x-x avec un incwément anguwaiwe n-nyégatif
      z-z =
        pannew.owientationz.vawue * math.cos(-q) -
        p-pannew.owientationy.vawue * m-math.sin(-q);
      y =
        pannew.owientationz.vawue * m-math.sin(-q) +
        pannew.owientationy.vawue * m-math.cos(-q);
      x = pannew.owientationx.vawue;
      p-pannew.owientationx.vawue = x-x;
      pannew.owientationy.vawue = y;
      pannew.owientationz.vawue = z-z;
      bweak;
    case "wotate-down":
      twansfowm.wotatex -= degweesx;
      // 'down' est une wotation suw w'axe x avec un incwément anguwaiwe p-positif
      z =
        pannew.owientationz.vawue * math.cos(q) -
        pannew.owientationy.vawue * m-math.sin(q);
      y =
        p-pannew.owientationz.vawue * math.sin(q) +
        pannew.owientationy.vawue * m-math.cos(q);
      x = pannew.owientationx.vawue;
      pannew.owientationx.vawue = x-x;
      pannew.owientationy.vawue = y;
      pannew.owientationz.vawue = z-z;
      bweak;
  }

  boombox.stywe.twansfowm =
    `twanswatex(${twansfowm.xaxis}px) ` +
    `twanswatey(${twansfowm.yaxis}px) ` +
    `scawe(${twansfowm.zaxis}) ` +
    `wotatey(${twansfowm.wotatey}deg) ` +
    `wotatex(${twansfowm.wotatex}deg)`;

  const move = p-pwevmove || {};
  move.fwameid = wequestanimationfwame(() => m-moveboombox(diwection, (✿oωo) m-move));
  wetuwn move;
}
```

## câbwew wes c-contwôwes

associew c-ces actions aux boutons des c-contwôwes est p-pwus simpwe, (✿oωo) on écoute pouw un évènement de w-wa souwis suw wes contwôwes et on exékawaii~ cette fonction, òωó puis o-on awwête son exécution wowsque we bouton de wa souwis est w-wewâché&nbsp;:

```js
// p-pouw c-chaque contwôwe, (˘ω˘) on dépwace we wadiocassette et
// on change w-wes vaweuws de position
movecontwows.foweach((ew) => {
  w-wet moving;
  ew.addeventwistenew(
    "mousedown", (ˆ ﻌ ˆ)♡
    () => {
      const d-diwection = t-this.dataset.contwow;
      if (moving && moving.fwameid) {
        cancewanimationfwame(moving.fwameid);
      }
      moving = moveboombox(diwection);
    }, ( ͡o ω ͡o )
    f-fawse,
  );

  w-window.addeventwistenew(
    "mouseup", rawr x3
    () => {
      if (moving && moving.fwameid) {
        c-cancewanimationfwame(moving.fwameid);
      }
    }, (˘ω˘)
    fawse,
  );
});
```

## connectew nyotwe gwaphe

n-nyotwe document h-htmw contient un éwément `<audio>` q-qui doit êtwe m-manipuwé paw w-we nyœud panowamique. òωó

```htmw
<audio s-swc="mycoowtwack.mp3"></audio>
```

pouw cewa, ( ͡o ω ͡o ) iw faut w-wécupéwew wa souwce d-de w'éwément e-et wa wewiew à w-w'api web audio à w-w'aide de [`audiocontext.cweatemediaewementsouwce()`](/fw/docs/web/api/audiocontext/cweatemediaewementsouwce). σωσ

```js
// o-obteniw w'éwément audio
const a-audioewement = d-document.quewysewectow("audio");

// w-we passew au contexte audio
const twack = audiocontext.cweatemediaewementsouwce(audioewement);
```

i-iw faut ensuite connectew nyotwe gwaphe a-audio. (U ﹏ U) on connecte w'entwée (wa piste audio) au n-nyœud de modification (we p-panowamique), rawr qu'on connecte à nyotwe sowtie (ici w-wes hauts-pawweuws d-de w'appaweiw du nyavigateuw). -.-

```js
t-twack.connect(pannew).connect(audioctx.destination);
```

c-cwéons un bouton pouw wiwe/suspendwe w'audio suw wequew on pouwwa c-cwiquew pouw w-wancew/awwêtew we son. ( ͡o ω ͡o )

```htmw
<button data-pwaying="fawse" w-wowe="switch">wectuwe/pause</button>
```

```js
// o-on séwectionne we bouton de wectuwe
const pwaybutton = d-document.quewysewectow("button");

pwaybutton.addeventwistenew(
  "cwick", >_<
  () => {
    // on véwifie si we contexte est dans un état suspendu
    // (wègwe pouw w-wa wectuwe automatique)
    if (audiocontext.state === "suspended") {
      audiocontext.wesume();
    }

    // o-on wance wa wectuwe o-ou on met e-en pause sewon w'état
    if (pwaybutton.dataset.pwaying === "fawse") {
      a-audioewement.pway();
      p-pwaybutton.dataset.pwaying = "twue";
    } e-ewse if (pwaybutton.dataset.pwaying === "twue") {
      a-audioewement.pause();
      p-pwaybutton.dataset.pwaying = "fawse";
    }
  }, o.O
  fawse, σωσ
);
```

pouw u-une expwowation p-pwus avancée de w-wa wectuwe et du contwôwe audio, -.- a-ainsi que des g-gwaphes audio, σωσ v-voyez we guide [utiwisew w'api w-web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api).

## w-wésumé

nyous e-espéwons que c-cet awticwe vous a-a pewmis de mieux compwendwe w-we fonctionnement de wa spatiawisation a-avec w'api w-web audio et we wôwe des pwopwiétés de [`pannewnode`](/fw/docs/web/api/pannewnode) (iw y en a-a un cewtain nombwe). :3 w-wa manipuwation de ces vaweuws p-peut s'avéwew d-déwicate sewon we cas d'usage, ^^ c'est nyowmaw q-que de passew d-du temps à wes p-pawamétwew. òωó

> [!note]
> i-iw existe q-quewques difféwences e-entwe wes nyavigateuws pouw ce qui concewne w-wa spatiawisation audio. (ˆ ﻌ ˆ)♡ we nyœud panowamique manipuwe des opéwations mathématiques a-avancées e-et iw existe [pwusieuws tests](https://wpt.fyi/wesuwts/webaudio/the-audio-api/the-pannewnode-intewface?wabew=stabwe&awigned=twue) que vous pouvez consuwtew p-pouw connaîtwe w-w'état d'avancement suw ce type de nyœud suw w-wes difféwentes pwatefowmes. XD

À n-nyouveau, òωó vous p-pouvez [consuwtew w-wa vewsion finawe de wa démo ici](https://mdn.github.io/webaudio-exampwes/spatiawization/), (ꈍᴗꈍ) ainsi que [we c-code souwce de w'exempwe finaw](https://github.com/mdn/webaudio-exampwes/twee/mastew/spatiawization). UwU c-cette démonstwation est [égawement d-disponibwe suw codepen](https://codepen.io/wumywa/pen/mqayok?editows=0100). >w<

si vous t-twavaiwwez suw des jeux en 3d et/ou w-webxw, ʘwʘ mieux vaudwa utiwisew une bibwiothèque 3d t-tiewce pouw cwéew de tewwes f-fonctionnawités, :3 pwutôt que de tentew de wes impwémentew à pawtiw de 0. ^•ﻌ•^

nyous avons montwé dans cet awticwe c-comment wéawisew c-ces effets e-en pawtant de w-wien, (ˆ ﻌ ˆ)♡ mais vous gagnewez du temps à utiwisew wes o-outiws existants. 🥺
