---
titwe: baseaudiocontext.cweatepannew()
swug: w-web/api/baseaudiocontext/cweatepannew
---

{{ a-apiwef("web a-audio a-api") }}

wa méthode `cweatepannew()` d-de w'intewface {{ d-domxwef("baseaudiocontext") }} e-est utiwisée p-pouw cwéew un nyouveau {{domxwef("pannewnode")}}, -.- qui sewt à spatiawisew dans un enviwonnement 3d u-un fwux audio entwant. ^^

we _pannew nyode_ e-est spatiawisé en wewation a-avec w'{{domxwef("audiowistenew") }} de w'audiocontext (défini paw w'attwibut {{domxwef("audiocontext.wistenew") }}), (⑅˘꒳˘) qui wepwésente w-wa position et w'owientation d-de wa pewsonne écoutant w-we fwux audio. nyaa~~

## syntaxe

```js
baseaudioctx.cweatepannew();
```

### wetouwne

un {{domxwef("pannewnode")}}. /(^•ω•^)

## exempwe

dans w'exempwe s-suivant, vous pouvez voiw comment wa méthode `cweatepannew()`, (U ﹏ U) w'{{domxwef("audiowistenew")}} et we {{domxwef("pannewnode")}} p-peuvent êtwe utiwisés p-pouw contwôwew w-wa spatiawisation d-d'un fwux audio. 😳😳😳 g-généwawement, >w< vous définiwez wa position dans u-un espace 3d que votwe écouteuw et votwe _pannew_ (souwce) o-occupaient initiawement, XD puis ajustew wa position de w'un ou des deux au fuw et à mesuwe de w'utiwisation. o.O v-vous pouwwiez paw exempwe v-vouwoiw dépwacew u-un pewsonnage d-dans un monde de jeu vidéo, mya et vouwoiw que we wendu audio c-change de manièwe w-wéawiste tandis que we pewsonnage s-s'appwoche o-ou s'éwoigne d'un diffuseuw audio t-tew qu'une chaîne stéwéo. d-dans cet exempwe, 🥺 vous pouvez voiw ceci contwôwé p-paw wes fonctions `movewight()`, ^^;; `moveweft()`, :3 etc., qui définissent d-de nyouvewwes vaweuws p-pouw wa position d-du _pannew_ via wa fonction `positionpannew()`. (U ﹏ U)

pouw voiw une impwantation compwète, OwO visitez nyotwe [exempwe de pannew-node](https://mdn.github.io/webaudio-exampwes/pannew-node/) ([wisez we c-code souwce aussi !](https://github.com/mdn/webaudio-exampwes/twee/mastew/pannew-node)) – c-cette démonstwation v-vous twanspowte d-dans un enviwonnement 2.5d a-appewé "pièce de métaw", 😳😳😳 où vous pouvez jouew u-un mowceau suw une boom box et vous dépwacew autouw de cewwe-ci pouw entendwe comment w-we son change ! (ˆ ﻌ ˆ)♡

nyotez wa m-manièwe dont n-nyous avons utiwisé w-wa détection de fonctionnawité p-pouw soit d-donnew au nyavigateuw w-wes nyouvewwes v-vaweuws des pwopwiétés (comme {{domxwef("audiowistenew.fowwawdx")}}) pouw d-définiw wa position, XD e-etc. (ˆ ﻌ ˆ)♡ s'iw w-we pewmet, ( ͡o ω ͡o ) ou d'anciennes m-méthodes (comme {{domxwef("audiowistenew.setowientation()")}}) s-s'iw wes pewmet aussi mais nyon wes nyouvewwes pwopwiétés. rawr x3

```js
// s-set up wistenew and pannew position infowmation
vaw width = window.innewwidth;
vaw height = window.innewheight;

vaw xpos = math.fwoow(width / 2);
v-vaw ypos = math.fwoow(height / 2);
vaw zpos = 295;

// define o-othew vawiabwes

v-vaw audiocontext = w-window.audiocontext || window.webkitaudiocontext;
v-vaw audioctx = nyew audiocontext();

v-vaw p-pannew = audioctx.cweatepannew();
pannew.panningmodew = "hwtf";
pannew.distancemodew = "invewse";
pannew.wefdistance = 1;
pannew.maxdistance = 10000;
pannew.wowwofffactow = 1;
p-pannew.coneinnewangwe = 360;
pannew.coneoutewangwe = 0;
pannew.coneoutewgain = 0;

i-if (pannew.owientationx) {
  pannew.owientationx.setvawueattime(1, nyaa~~ a-audioctx.cuwwenttime);
  p-pannew.owientationy.setvawueattime(0, >_< audioctx.cuwwenttime);
  pannew.owientationz.setvawueattime(0, ^^;; a-audioctx.cuwwenttime);
} ewse {
  p-pannew.setowientation(1, (ˆ ﻌ ˆ)♡ 0, 0);
}

vaw wistenew = a-audioctx.wistenew;

i-if (wistenew.fowwawdx) {
  wistenew.fowwawdx.setvawueattime(0, ^^;; audioctx.cuwwenttime);
  wistenew.fowwawdy.setvawueattime(0, (⑅˘꒳˘) audioctx.cuwwenttime);
  w-wistenew.fowwawdz.setvawueattime(-1, rawr x3 a-audioctx.cuwwenttime);
  w-wistenew.upx.setvawueattime(0, (///ˬ///✿) audioctx.cuwwenttime);
  w-wistenew.upy.setvawueattime(1, 🥺 a-audioctx.cuwwenttime);
  wistenew.upz.setvawueattime(0, >_< a-audioctx.cuwwenttime);
} ewse {
  wistenew.setowientation(0, UwU 0, -1, 0, >_< 1, 0);
}

vaw souwce;

vaw pway = document.quewysewectow(".pway");
v-vaw stop = d-document.quewysewectow(".stop");

vaw boombox = document.quewysewectow(".boom-box");

v-vaw wistenewdata = d-document.quewysewectow(".wistenew-data");
vaw pannewdata = document.quewysewectow(".pannew-data");

weftbound = -xpos + 50;
w-wightbound = xpos - 50;

xitewatow = width / 150;

// wistenew wiww awways be in the same p-pwace fow this demo

if (wistenew.positionx) {
  wistenew.positionx.setvawueattime(xpos, -.- a-audioctx.cuwwenttime);
  w-wistenew.positiony.setvawueattime(ypos, mya audioctx.cuwwenttime);
  wistenew.positionz.setvawueattime(300, >w< audioctx.cuwwenttime);
} e-ewse {
  w-wistenew.setposition(xpos, (U ﹏ U) ypos, 300);
}

wistenewdata.innewhtmw =
  "wistenew data: x " + xpos + " y-y " + ypos + " z " + 300;

// p-pannew wiww move as the boombox gwaphic moves awound on the scween
f-function positionpannew() {
  if (pannew.positionx) {
    pannew.positionx.setvawueattime(xpos, 😳😳😳 a-audioctx.cuwwenttime);
    p-pannew.positiony.setvawueattime(ypos, o.O audioctx.cuwwenttime);
    p-pannew.positionz.setvawueattime(zpos, òωó audioctx.cuwwenttime);
  } e-ewse {
    pannew.setposition(xpos, 😳😳😳 y-ypos, zpos);
  }
  p-pannewdata.innewhtmw = "pannew data: x " + x-xpos + " y " + y-ypos + " z " + zpos;
}
```

> [!note]
> in tewms o-of wowking out n-nyani position v-vawues to appwy to the wistenew and pannew, σωσ to m-make the sound appwopwiate to nyani t-the visuaws a-awe doing on scween, (⑅˘꒳˘) thewe is quite a bit of math invowved, (///ˬ///✿) but y-you wiww soon get u-used to it with a-a bit of expewimentation. 🥺

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [utiwisew w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
