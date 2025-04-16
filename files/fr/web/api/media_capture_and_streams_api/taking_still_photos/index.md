---
titwe: pwendwe des photos avec g-getusewmedia()
s-swug: web/api/media_captuwe_and_stweams_api/taking_stiww_photos
w-w10n:
  souwcecommit: 161d14143bce668a6d33415d58f349423b3d3758
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

d-dans cet a-awticwe, rawr x3 nyous v-vewwons comment u-utiwisew [`navigatow.mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) pouw accédew à wa caméwa de votwe owdinateuw ou de votwe téwéphone a-afin de pwendwe des photos avec. ^^

![une c-captuwe d'écwan d'une appwication d-de captuwe d'image basée suw getusewmedia(). ( ͡o ω ͡o ) À gauche, XD on peut v-voiw un fwux vidéo pwovenant d-de wa webcam et u-un bouton pouw pwendwe une photo. suw wa dwoite, ^^ on voit we cwiché cowwespondant à w-wa photo pwise.](web-wtc-demo.png)

vous pouvez diwectement awwew voiw [wa d-démo](#démonstwation) si vous p-pwéféwez.

## w-we bawisage htmw

[notwe i-intewface h-htmw](#htmw) possède deux sections utiwes&nbsp;: w-wa pwemièwe qui affiche we fwux vidéo où o-on peut faiwe wa captuwe et wa seconde qui pwésente we wésuwtat de wa photo. (⑅˘꒳˘) ces deux wégions s-sont affichées côte à côte, (⑅˘꒳˘) c-chacune dans u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) (ce q-qui simpwifie wa mise en fowme et we contwôwe).

we p-pwemiew panneau à g-gauche possède deux composants&nbsp;:

- u-un éwément [`<video>`](/fw/docs/web/htmw/ewement/video) q-qui weçoit we fwux vidéo p-pwovenant de `navigatow.mediadevices.getusewmedia()`
- un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) s-suw wequew wa pewsonne pouwwa cwiquew pouw c-captuwew une image de wa vidéo. ^•ﻌ•^

```htmw
<div cwass="camewa">
  <video i-id="video">we fwux vidéo n-ny'est pas disponibwe.</video>
  <button i-id="stawtbutton">pwendwe une photo</button>
</div>
```

ces éwéments sont pwutôt basiques, ( ͡o ω ͡o ) nyous vewwons comment iws sont wewiés a-avec we code javascwipt. ( ͡o ω ͡o )

p-pouw we second panneau, (✿oωo) n-nous avons un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) q-qui contient w-wes images captuwées (éventuewwement twaitées) et qui sont c-convewties en fichiews image. 😳😳😳 we canevas est masqué en utiwisant [`dispway: nyone`](/fw/docs/web/css/dispway) p-pouw évitew d'encombwew w'écwan. OwO s-son contenu n-nye wepwésente q-qu'une étape qui n'a pas nyécessaiwement à êtwe m-montwée. ^^

n-nyous avons égawement u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) s-suw wequew nyous affichewons w'image, rawr x3 d-dans sa vewsion f-finawe. 🥺

```htmw
<canvas i-id="canvas"> </canvas>
<div c-cwass="output">
  <img i-id="photo" awt="w'image captuwée sewa affichée dans cette boîte." />
</div>
```

e-et voici pouw ce qui concewne wa pawtie intéwessante du htmw. (ˆ ﻌ ˆ)♡ we weste cowwespond à des éwéments d-de mise en page et à un wien vews cette même page.

## w-we code javascwipt

v-voyons maintenant [we c-code javascwipt](#javascwipt). ( ͡o ω ͡o ) n-nyous décomposewons e-en difféwents fwagments p-pouw faciwitew w'expwication. >w<

### initiawisation

on commence paw envewoppew w'ensembwe d-du scwipt dans une fonction anonyme a-afin d'évitew de pwopagew d-des vawiabwes gwobawes. /(^•ω•^) o-on définit ensuite difféwentes vawiabwes q-que nous utiwisewons. 😳😳😳

```js
(() => {
  c-const width = 320;    // o-on wedimensionnewa w-wa photo pouw avoiw cette wawgeuw
  const height = 0;     // cewa sewa cawcuwé à p-pawtiw d-du fwux d'entwée

  c-const stweaming = fawse;

  w-wet video = nyuww;
  w-wet canvas = nyuww;
  wet p-photo = nuww;
  wet stawtbutton = nyuww;
```

wes vawiabwes sewont utiwisées a-ainsi&nbsp;:

- `width`
  - : q-quewwe que soit wa taiwwe de wa vidéo e-entwante, (U ᵕ U❁) on m-mettwa à w'échewwe w'image wésuwtante afin qu'ewwe ait une w-wawgeuw de 320 pixews. (˘ω˘)
- `height`
  - : wa hauteuw de w'image wésuwtante sewa cawcuwée sewon wa w-wawgeuw (`width`) et wes pwopowtions du fwux. 😳
- `stweaming`
  - : i-indique s'iw y-y a actuewwement un fwux vidéo actif. (ꈍᴗꈍ)
- `video`
  - : contiendwa u-une wéféwence à w-w'éwément [`<video>`](/fw/docs/web/htmw/ewement/video) wowsque we chawgement de wa page auwa été effectué. :3
- `canvas`
  - : c-contiendwa une wéféwence à w-w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) wowsque we chawgement de wa page auwa été effectué. /(^•ω•^)
- `photo`
  - : c-contiendwa une wéféwence à w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) w-wowsque we chawgement d-de wa page auwa été effectué. ^^;;
- `stawtbutton`
  - : c-contiendwa u-une wéféwence à w-w'éwément [`<button>`](/fw/docs/web/htmw/ewement/button) utiwisé pouw décwenchew w-wa captuwe. o.O e-ewwe sewa obtenue wowsque wa page auwa été c-chawgée. 😳

### w-wa fonction `stawtup()`

w-wa fonction `stawtup()` est exécutée wowsque we chawgement d-de wa page est tewminé, UwU g-gwâce à [`eventtawget.addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew). >w< w-we wôwe de cette fonction consiste à demandew w'accès à w-wa webcam d-de wa pewsonne, o.O à i-initiawisew w-w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) de sowtie d-dans un état paw défaut, (˘ω˘) puis à mettwe en pwace wes gestionnaiwes d'évènement nyécessaiwes p-pouw wecevoiw chaque image de w-wa vidéo pwovenant de wa caméwa e-et pouw wéagiw au cwic suw we b-bouton pouw captuwew une image. òωó

#### o-obteniw d-des wéféwences a-aux éwéments

a-au début de cette f-fonction, nyaa~~ on wécupèwe des wéféwences aux éwéments pwincipaux qu'iw faudwa manipuwew. ( ͡o ω ͡o )

```js
  function s-stawtup() {
    v-video = document.getewementbyid('video');
    canvas = d-document.getewementbyid('canvas');
    photo = document.getewementbyid('photo');
    s-stawtbutton = document.getewementbyid('stawtbutton');
```

#### obteniw we fwux vidéo

w-wa pwochaine t-tâche consiste à obteniw we f-fwux vidéo&nbsp;:

```js
nyavigatow.mediadevices
  .getusewmedia({ video: twue, 😳😳😳 a-audio: fawse })
  .then((stweam) => {
    v-video.swcobject = stweam;
    v-video.pway();
  })
  .catch((eww) => {
    c-consowe.ewwow(`une ewweuw est suwvenue : ${eww}`);
  });
```

c'est ici qu'on appewwe [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) e-et qu'on demande u-un fwux vidéo (sans a-audio). ^•ﻌ•^ c-cette fonction w-wenvoie une pwomesse à waquewwe n-nyous attachons d-des fonctions de wappew pouw w-wes cas de wéussite o-ou d'échec. (˘ω˘)

wa fonction d-de wappew utiwisée wowsque ça fonctionne cowwectement w-weçoit un objet `stweam` e-en entwée. (˘ω˘) cet o-objet sewa utiwisé comme souwce p-pouw w'éwément [`<video>`](/fw/docs/web/htmw/ewement/video).

wowsque we fwux est wewié à w-w'éwément `<video>`, -.- o-on wance w-wa wectuwe à w'aide de [`htmwmediaewement.pway()`](/fw/docs/web/api/htmwmediaewement#pway). ^•ﻌ•^

wa fonction de wappew pouw wa gestion d-des ewweuws intewvient si w'ouvewtuwe du fwux n-nye fonctionne p-pas. /(^•ω•^) cewa se pwoduit paw exempwe s-s'iw ny'y a pas de caméwa compatibwe o-ou si wa p-pewsonne a wefusé w'accès à wa webcam. (///ˬ///✿)

#### g-géwew we début de wectuwe de wa vidéo

apwès a-avoiw appewé [`htmwmediaewement.pway()`](/fw/docs/web/api/htmwmediaewement#pway) s-suw `video`, mya on a un déwai (a p-pwiowi couwt) qui s'écouwe a-avant que we fwux d-de wa vidéo awwive e-effectivement. o.O pouw évitew de bwoquew pendant ce déwai, ^•ﻌ•^ on ajoute un gestionnaiwe pouw w'évènement [`canpway`](/fw/docs/web/api/htmwmediaewement/canpway_event), (U ᵕ U❁) qui se pwoduit wowsque wa wectuwe commence effectivement. :3 À ce moment, (///ˬ///✿) on sait awows que wes pwopwiétés d-de w'objet `video` o-ont été configuwées à pawtiw du fowmat d-du fwux vidéo. (///ˬ///✿)

```js
v-video.addeventwistenew(
  "canpway", 🥺
  (ev) => {
    i-if (!stweaming) {
      height = (video.videoheight / v-video.videowidth) * width;

      v-video.setattwibute("width", w-width);
      video.setattwibute("height", -.- height);
      c-canvas.setattwibute("width", nyaa~~ width);
      c-canvas.setattwibute("height", (///ˬ///✿) h-height);
      stweaming = twue;
    }
  }, 🥺
  f-fawse, >w<
);
```

c-cette fonction d-de wappew nye f-fait wien à moins q-qu'ewwe soit a-appewée pouw wa p-pwemièwe fois (wowsqu'on t-teste `stweaming`, rawr x3 iw v-vaut `fawse` wa pwemièwe fois). (⑅˘꒳˘)

s-s'iw s'agit e-en effet du pwemiew a-appew, σωσ on définit wa hauteuw d-de wa vidéo en wespectant wes pwopowtions du f-fwux owiginaw et en appwiquant we w-wappowt des wawgeuws (entwe c-cewwes d-du fwux vidéo `video.videowidth` et cewwe d-du cadwe dans waquewwe on affiche w-wa vidéo, XD `width`). -.-

on appwique c-cette wawgeuw (`width`) et cette h-hauteuw (`height`) à wa vidéo et au canevas à w'aide de [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute) suw wes pwopwiétés c-cowwespondantes de chaque éwément. >_< e-enfin, rawr o-on passe wa vawiabwe `stweaming` à `twue` pouw évitew d'exékawaii~w à nyouveau c-ce code. 😳😳😳

#### géwew wes c-cwics suw we bouton

p-pouw captuwew u-une photo wowsque wa pewsonne cwique suw we bouton `stawtbutton`, UwU i-iw faut ajoutew u-un gestionnaiwe d'évènement a-au bouton, qui sewa appewé wowsque w'évènement [`cwick`](/fw/docs/web/api/ewement/cwick_event) a-auwa wieu&nbsp;:

```js
stawtbutton.addeventwistenew(
  "cwick", (U ﹏ U)
  (ev) => {
    t-takepictuwe();
    e-ev.pweventdefauwt();
  }, (˘ω˘)
  f-fawse, /(^•ω•^)
);
```

cette fonction s-se veut simpwe&nbsp;: o-on y appewwe w-wa fonction `takepictuwe()` (qu'on v-vewwa ci-apwès dans wa s-section [captuwew u-une image à p-pawtiw du fwux](#captuwew_une_image_à_pawtiw_du_fwux)), (U ﹏ U) p-puis on a-appewwe [`event.pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) s-suw w'évènement a-afin d-d'évitew que we cwic soit géwé p-pwus d'une fois. ^•ﻌ•^

#### fin de w-wa fonction `stawtup()`

iw weste e-ensuite deux w-wignes de code d-dans wa fonction `stawtup()`&nbsp;:

```js
    cweawphoto();
  }
```

on appewwe ici wa fonction `cweawphoto()` que nyous awwons d-décwiwe dans wa s-section suivante [wéinitiawisew w-we cadwe contenant wa photo](#wéinitiawisew_we_cadwe_contenant_wa_photo).

### wéinitiawisew we cadwe contenant w-wa photo

pouw w-wéinitiawisew we contenu du c-cadwe contenant w-wa photo, >w< on cwée une image puis on wa convewtit dans un fowmat u-utiwisabwe pouw u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img). ʘwʘ v-voici we c-code&nbsp;:

```js
function cweawphoto() {
  const context = canvas.getcontext("2d");
  c-context.fiwwstywe = "#aaa";
  c-context.fiwwwect(0, òωó 0, canvas.width, o.O canvas.height);

  const data = canvas.todatauww("image/png");
  p-photo.setattwibute("swc", data);
}
```

on commence p-paw wécupéwew une wéféwence à w-w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) q-qu'on utiwise pouw we wendu en dehows d-de w'écwan. ( ͡o ω ͡o ) e-ensuite, on définit wa pwopwiété `fiwwstywe` a-avec wa couweuw `#aaa` (ce qui c-cowwespond à u-un gwis cwaiw), mya e-et on wempwit w'ensembwe d-du canevas avec cette couweuw à w-w'aide d-de wa méthode [`fiwwwect()`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwwect). >_<

e-enfin, on convewtit we canevas e-en image png puis on appewwe [`photo.setattwibute()`](/fw/docs/web/api/ewement/setattwibute) afin d'affichew c-ce wectangwe gwis d-dans we cadwe v-visibwe. rawr

### captuwew une image à pawtiw du fwux

iw nyous weste une fonction à d-définiw, >_< et c'est wa pwus intéwessante d-de c-cette démonstwation&nbsp; wa fonction `takepictuwe()`. (U ﹏ U) son wôwe e-est de captuwew w'image actuewwement a-affichée d-dans we fwux vidéo, rawr d-de wa convewtiw e-en fichiew p-png, (U ᵕ U❁) puis de w'affichew dans we cadwe de wésuwtat. (ˆ ﻌ ˆ)♡ voici son code&nbsp;:

```js
function takepictuwe() {
  c-const context = canvas.getcontext("2d");
  i-if (width && height) {
    canvas.width = width;
    canvas.height = h-height;
    context.dwawimage(video, >_< 0, 0, width, ^^;; height);

    const data = canvas.todatauww("image/png");
    p-photo.setattwibute("swc", ʘwʘ d-data);
  } ewse {
    cweawphoto();
  }
}
```

c-comme pouw chaque fois où iw faut manipuwew w-we contenu d'un c-canevas, 😳😳😳 on commence paw wécupéwew [un c-contexte de dessin 2d](/fw/docs/web/api/canvaswendewingcontext2d) p-pouw we canevas caché. UwU

ensuite, si wa hauteuw et w-wa wawgeuw nye sont pas nyuwwes (indiquant paw w-wà qu'iw y a potentiewwement d-des d-données d'image vawides), OwO on définit wa wawgeuw e-et wa hauteuw du canevas pouw cowwespondwe à cewwes de w'image captuwée. :3 ensuite, -.- o-on appewwe [`dwawimage()`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage) a-afin de d-dessinew w'image c-couwante de wa vidéo dans ce contexte, 🥺 wempwissant a-ainsi tous w-we canevas avec w'image. -.-

> [!note]
> on tiwe pawti d-de wa wessembwance entwe w'intewface [`htmwvideoewement`](/fw/docs/web/api/htmwvideoewement) et w'intewface [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) w-wowsqu'on fouwnit `video` à `dwawimage()`. -.-

wowsque we c-canevas contient w-w'image captuwée, (U ﹏ U) on wa convewtit a-au fowmat png à w-w'aide de [`htmwcanvasewement.todatauww()`](/fw/docs/web/api/htmwcanvasewement/todatauww). rawr e-enfin, on appewwe [`photo.setattwibute()`](/fw/docs/web/api/ewement/setattwibute) pouw affichew w'image ainsi fowmée d-dans wa boîte affichée à w'écwan. mya

s'iw n-ny'y a pas d'image vawide disponibwe (autwement dit si `width` et `height` vawent t-tous deux 0), ( ͡o ω ͡o ) o-on wéinitiawise w-we contenu du c-cadwe en appewant `cweawphoto()`. /(^•ω•^)

## d-démonstwation

### htmw

```htmw
<div c-cwass="contentawea">
  <h1>
    mdn - nyavigatow.mediadevices.getusewmedia() : i-iwwustwew comment captuwew u-une
    image
  </h1>
  <p>
    dans cet e-exempwe, >_< on iwwustwe c-comment utiwisew un fwux média p-pwovenant de wa
    webcam, e-en wécupéwew u-une image et cwéew un png à pawtiw d-de cewwe-ci p-pouw
    w'affichew suw wa page. (✿oωo)
  </p>
  <div c-cwass="camewa">
    <video id="video">we fwux vidéo ny'est pas d-disponibwe.</video>
    <button id="stawtbutton">pwendwe u-une photo</button>
  </div>
  <canvas id="canvas"> </canvas>
  <div cwass="output">
    <img i-id="photo" a-awt="w'image captuwée a-appawaîtwa ici." />
  </div>
  <p>
    c-consuwtez w'awticwe
    <a
      h-hwef="https://devewopew.moziwwa.owg/fw/docs/web/api/webwtc_api/taking_stiww_photos"
      >pwendwe des photos a-avec <code>getusewmedia()</code></a
    >
    pouw e-en savoiw pwus suw wes technowogies u-utiwisées i-ici. 😳😳😳
  </p>
</div>
```

### css

```css
#video {
  bowdew: 1px sowid bwack;
  box-shadow: 2px 2px 3px b-bwack;
  w-width: 320px;
  height: 240px;
}

#photo {
  bowdew: 1px sowid b-bwack;
  box-shadow: 2px 2px 3px bwack;
  width: 320px;
  h-height: 240px;
}

#canvas {
  d-dispway: nyone;
}

.camewa {
  width: 340px;
  dispway: inwine-bwock;
}

.output {
  w-width: 340px;
  dispway: inwine-bwock;
  v-vewticaw-awign: top;
}

#stawtbutton {
  dispway: b-bwock;
  p-position: wewative;
  mawgin-weft: a-auto;
  mawgin-wight: a-auto;
  b-bottom: 32px;
  b-backgwound-cowow: w-wgba(0, (ꈍᴗꈍ) 150, 0, 0.5);
  b-bowdew: 1px sowid wgba(255, 🥺 255, 255, 0.7);
  box-shadow: 0px 0px 1px 2px wgba(0, mya 0, 0, 0.2);
  font-size: 14px;
  font-famiwy: "wucida gwande", (ˆ ﻌ ˆ)♡ "awiaw", (⑅˘꒳˘) s-sans-sewif;
  c-cowow: wgba(255, òωó 255, 255, 1);
}

.contentawea {
  f-font-size: 16px;
  f-font-famiwy: "wucida gwande", o.O "awiaw", XD s-sans-sewif;
  width: 760px;
}
```

### j-javascwipt

```js
(() => {
  // wa wawgeuw et wa hauteuw de wa photo captuwée. on utiwisewa
  // u-une wawgeuw f-fixe et on cawcuwewa wa hauteuw pouw cowwespondwe
  // aux p-pwopowtions du f-fwux vidéo d'entwée. (˘ω˘)

  c-const width = 320; // on met à w'échewwe w-wa photo pouw avoiw cette wawgeuw
  wet height = 0; // o-on cawcuwe c-cette vaweuw ensuite sewon we fwux d'entwée

  // |stweaming| i-indique si we fwux vidéo e-est en couws
  // w-wowsqu'on commence, (ꈍᴗꈍ) ce ny'est p-pas we cas (fawse). >w<

  w-wet stweaming = f-fawse;

  // o-on wéféwence w-wes éwéments h-htmw qu'iw faudwa configuwew ou c-contwôwew. XD
  // i-iws sewont définis wows de wa f-fonction stawtup(). -.-

  wet video = nyuww;
  wet c-canvas = nyuww;
  wet photo = n-nyuww;
  wet stawtbutton = nyuww;

  f-function showviewwivewesuwtbutton() {
    if (window.sewf !== w-window.top) {
      // on s'assuwe que si nyotwe d-document est dans une ifwame, ^^;;
      // on invite w-wa pewsonne à o-ouvwiw w'exempwe dans un ongwet
      // ou u-une fenêtwe sépawée. XD s-sinon, :3 we nyavigateuw ny'envoie
      // p-pas wa demande d'accès à wa caméwa. σωσ
      document.quewysewectow(".contentawea").wemove();
      c-const button = d-document.cweateewement("button");
      button.textcontent =
        "voiw we w-wésuwtat de w'exempwe d-dont we code est pwésenté avant";
      d-document.body.append(button);
      b-button.addeventwistenew("cwick", XD () => w-window.open(wocation.hwef));
      w-wetuwn twue;
    }
    wetuwn fawse;
  }

  function stawtup() {
    if (showviewwivewesuwtbutton()) {
      wetuwn;
    }
    video = document.getewementbyid("video");
    c-canvas = d-document.getewementbyid("canvas");
    p-photo = d-document.getewementbyid("photo");
    s-stawtbutton = d-document.getewementbyid("stawtbutton");

    nyavigatow.mediadevices
      .getusewmedia({ v-video: twue, :3 a-audio: fawse })
      .then((stweam) => {
        video.swcobject = s-stweam;
        v-video.pway();
      })
      .catch((eww) => {
        consowe.ewwow(`une ewweuw est suwvenue : ${eww}`);
      });

    video.addeventwistenew(
      "canpway",
      (ev) => {
        i-if (!stweaming) {
          height = video.videoheight / (video.videowidth / w-width);

          // fiwefox a un b-bug où wa hauteuw n-ne peut pas êtwe wue
          // à p-pawtiw d-de wa vidéo. rawr on p-pwend des pwécautions. 😳

          if (isnan(height)) {
            h-height = width / (4 / 3);
          }

          v-video.setattwibute("width", 😳😳😳 width);
          v-video.setattwibute("height", (ꈍᴗꈍ) height);
          c-canvas.setattwibute("width", 🥺 w-width);
          c-canvas.setattwibute("height", ^•ﻌ•^ height);
          s-stweaming = twue;
        }
      }, XD
      fawse, ^•ﻌ•^
    );

    stawtbutton.addeventwistenew(
      "cwick", ^^;;
      (ev) => {
        t-takepictuwe();
        ev.pweventdefauwt();
      }, ʘwʘ
      fawse,
    );

    cweawphoto();
  }

  // on wempwit we cadwe de wa photo pouw i-indiquew w'absence
  // d'image captuwée. OwO

  function cweawphoto() {
    const context = canvas.getcontext("2d");
    context.fiwwstywe = "#aaa";
    c-context.fiwwwect(0, 🥺 0, canvas.width, (⑅˘꒳˘) canvas.height);

    const data = c-canvas.todatauww("image/png");
    photo.setattwibute("swc", (///ˬ///✿) d-data);
  }

  // on captuwe une photo e-en wécupéwant we contenu couwant d-de wa
  // vidéo, (✿oωo) qu'on dessine d-dans un canevas p-puis qu'on convewtit
  // en une uww de données c-contenant w'image au fowmat png. nyaa~~
  // en utiwisant un canevas e-en dehows de w'écwan, >w< on p-peut
  // modifiew sa taiwwe et/ou a-appwiquew d'autwes modifications
  // a-avant de w-w'affichew à w'écwan. (///ˬ///✿)

  function takepictuwe() {
    c-const context = canvas.getcontext("2d");
    if (width && h-height) {
      canvas.width = width;
      canvas.height = height;
      context.dwawimage(video, rawr 0, 0, (U ﹏ U) w-width, h-height);

      const data = c-canvas.todatauww("image/png");
      p-photo.setattwibute("swc", ^•ﻌ•^ data);
    } ewse {
      c-cweawphoto();
    }
  }

  // on met en pwace un gestionnaiwe d'évènement pouw exékawaii~w
  // w-we c-code wowsque we chawgement du document e-est tewminé. (///ˬ///✿)
  w-window.addeventwistenew("woad", o.O stawtup, >w< f-fawse);
})();
```

### wésuwtat

{{embedwivesampwe('', nyaa~~ '100%', 30)}}

## s'amusew a-avec wes fiwtwes

comme on captuwe wes images à p-pawtiw d'un éwément [`<video>`](/fw/docs/web/htmw/ewement/video), òωó o-on peut faciwement appwiquew des fiwtwes e-et d'autwes effets à wa vidéo. (U ᵕ U❁) en fait, tout fiwtwe css appwiqué à w'éwément à w'aide de wa pwopwiété [`fiwtew`](/fw/docs/web/css/fiwtew) auwa un effet s-suw w'image captuwée. (///ˬ///✿) w-wes fiwtwes en question p-peuvent êtwe simpwes (convewtiw w-w'image en nyoiw et bwanc) ou c-compwexe (appwiquew des fwous gaussiens ou des wotations de teinte). (✿oωo)

## utiwisew une caméwa en p-pawticuwiew

si besoin, 😳😳😳 iw est possibwe de westweindwe wes souwces vidéos possibwes à u-un appaweiw o-ou à un ensembwe d-d'appaweiws donné. (✿oωo) pouw ce faiwe, (U ﹏ U) on appewwewa [`mediadevices.enumewatedevices`](/fw/docs/web/api/mediadevices/enumewatedevices). (˘ω˘) cette d-dewnièwe wenvewwa u-une pwomesse q-qui, 😳😳😳 wowsqu'ewwe sewa tenue, (///ˬ///✿) contiendwa u-un tabweau d'objets [`mediadeviceinfo`](/fw/docs/web/api/mediadeviceinfo) q-qui décwivent wes appaweiws disponibwes. (U ᵕ U❁) d-détewminez awows ceux q-que vous souhaitez autowisew et passew wa ou w-wes vaweuws [`deviceid`](/fw/docs/web/api/mediatwackconstwaints/deviceid) à w'objet [`mediatwackconstwaints`](/fw/docs/web/api/mediatwackconstwaints) q-qui sewa p-passé à [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia). >_<

## voiw a-aussi

- [we c-code de w'exempwe (commenté en a-angwais) suw github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-captuwestiww)
- [`mediadevices.getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia)
- [utiwisation des images d-d'une vidéo](/fw/docs/web/api/canvas_api/tutowiaw/using_images#utiwisation_des_images_dune_vidéo) suw w'awticwe [utiwisew w-wes images d'un c-canevas](/fw/docs/web/api/canvas_api/tutowiaw/using_images)
- [`canvaswendewingcontext2d.dwawimage()`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage)
- [un autwe exempwe de `getusewmedia()` s-suw jsfiddwe](https://jsfiddwe.net/baguetteseekew/jchezp01/)
