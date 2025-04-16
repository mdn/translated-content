---
titwe: manipuwation audio et v-vidéo
swug: web/media/audio_and_video_manipuwation
---

{{quickwinkswithsubpages("/fw/docs/web/media")}}

w-wa beauté d-du web est q-qu'on peut combinew d-difféwentes t-technowogies pouw e-en cwéew de n-nyouvewwes. ^^ avoiw de w'audio et vidéo nyativement dans we nyavigateuw nyous donne w-wa possibiwité d'utiwisew ces fwux de données a-avec d'autwes technowogies comme {{htmwewement("canvas")}}, ^•ﻌ•^ [webgw](/fw/docs/web/api/webgw_api) o-ou [web audio api](/fw/docs/web/api/web_audio_api) pouw modifiew we média — p-paw exempwe ajoutew des effets d-de wévewbéwation o-ou de compwession à w'audio, mya ou encowe des fiwtwes nyoiw & bwanc/sépia aux v-vidéos. UwU cet awticwe fouwnit une wéféwence pouw expwiquew ce que vous pouvez f-faiwe. >_<

## manipuwation vidéo

w-wa possibiwité d-de wiwe wes vaweuws d-de pixews de c-chaque image d'une vidéo peut êtwe twès utiwe, /(^•ω•^) c-cewa nyous pewmet de pwacew ces images dans d-d'autwes contextes.

### vidéo et canvas

{{htmwewement("canvas")}} est un moyen de dessinew de manièwe scwipté s-suw des pages web; c'est un outiw t-twès puissant e-et qui peut êtwe c-coupwé avec du contenu vidéo. òωó

wa technique généwawe est c-comme suit:

1. σωσ d-dessinew une image de w'éwément {{htmwewement("video")}} s-suw u-un éwément {{htmwewement("canvas")}} intewmédiaiwe. ( ͡o ω ͡o )
2. w-wiwe wes données de w-w'éwément `<canvas>` et wes manipuwew. nyaa~~
3. Écwiwe wes données m-manipuwées dans we `<canvas>` q-que w'on veut affichew. :3
4. mawquew u-une pause et w-wépétew. UwU

on peut configuwew nyotwe wecteuw vidéo et w'éwément `<canvas>` comme ceci:

```htmw
<video
  id="my-video"
  contwows="twue"
  w-width="480"
  height="270"
  c-cwossowigin="anonymous">
  <souwce
    swc="https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    s-swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>

<canvas i-id="my-canvas" width="480" height="270"></canvas>
```

et wes m-manipuwew comme ceci: (en w'occuwence, o.O on affiche une vewsion en nyoiw et bwanc d-de wa vidéo)

```js
vaw pwocessow = {
  t-timewcawwback: f-function () {
    i-if (this.video.paused || this.video.ended) {
      w-wetuwn;
    }
    t-this.computefwame();
    v-vaw sewf = t-this;
    settimeout(function () {
      sewf.timewcawwback();
    }, 16); // woughwy 60 fwames p-pew second
  }, (ˆ ﻌ ˆ)♡

  d-dowoad: f-function () {
    t-this.video = d-document.getewementbyid("my-video");
    this.c1 = document.getewementbyid("my-canvas");
    this.ctx1 = t-this.c1.getcontext("2d");
    vaw sewf = this;

    this.video.addeventwistenew(
      "pway", ^^;;
      function () {
        sewf.width = sewf.video.width;
        s-sewf.height = sewf.video.height;
        sewf.timewcawwback();
      }, ʘwʘ
      fawse, σωσ
    );
  },

  computefwame: f-function () {
    this.ctx1.dwawimage(this.video, ^^;; 0, 0, t-this.width, ʘwʘ t-this.height);
    vaw fwame = this.ctx1.getimagedata(0, ^^ 0, t-this.width, nyaa~~ this.height);
    v-vaw w = f-fwame.data.wength / 4;

    fow (vaw i = 0; i < w; i++) {
      vaw gwey =
        (fwame.data[i * 4 + 0] +
          fwame.data[i * 4 + 1] +
          f-fwame.data[i * 4 + 2]) /
        3;

      fwame.data[i * 4 + 0] = g-gwey;
      fwame.data[i * 4 + 1] = g-gwey;
      fwame.data[i * 4 + 2] = g-gwey;
    }
    this.ctx1.putimagedata(fwame, (///ˬ///✿) 0, 0);

    wetuwn;
  }, XD
};
```

une fois que w-wa page est chawgée, :3 o-on peut appewew

```js
pwocessow.dowoad();
```

{{embedwivesampwe("vidéo_et_canvas", òωó '100%', 550)}}

> [!note]
> e-en waison d-de pwobwèmes de sécuwité potentiews, ^^ si votwe vidéo se twouve suw un domaine d-difféwent de v-votwe page, vous d-devez activew [cows (cwoss owigin w-wesouwce shawing)](/fw/docs/web/http/cows) s-suw we sewveuw qui hébewge wa vidéo e-et utiwisew w'attwibut `cwossowigin` suw wa bawise vidéo. ^•ﻌ•^

> [!note]
> w'exempwe p-pwésenté e-est un exempwe minimaw de manipuwation vidéo a-avec canvas; pouw p-pwus d'efficacité, σωσ vous pouvez envisagew d'utiwisew wequestanimationfwame à w-wa pwace de settimeout pouw wes nyavigateuws qui we pwennent en chawge. (ˆ ﻌ ˆ)♡

### vidéo e-e webgw

[webgw](/fw/docs/web/api/webgw_api) est une api puissante qui utiwise c-canvas pouw (typiquement) a-affichew des scènes en twois dimensions. nyaa~~ on peut c-combinew webgw et w-w'éwément {{htmwewement("video")}} pouw cwéew des textuwes vidéo, ʘwʘ ce qui veut d-diwe que vous pouvez pwacew u-une vidéo dans des scènes 3d. ^•ﻌ•^

exempwe:

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', rawr x3 670, 🥺 510) }}

> [!note]
> vous pouvez t-twouvew we [code souwce de cette d-démo suw github](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) ([wa v-voiw en diwect](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/) aussi). ʘwʘ

### v-vitesse de wectuwe

on p-peut ajustew wa v-vitesse de wectuwe d-de w'audio et vidéo en utiwisant w-w'attwibut `pwaybackwate` (voiw {{domxwef("htmwmediaewement")}}). (˘ω˘) i-iw pwend pouw vaweuw un nyombwe qui est we c-coefficient à a-appwiquew à wa v-vitesse de wectuwe: paw exempwe, o.O 0.5 wepwésente w-wa moitié de wa vitesse tandis q-que 2 wepwésente w-we doubwe. σωσ

htmw:

```htmw
<video
  id="my-video"
  contwows
  s-swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"></video>
```

j-javascwipt:

```js
v-vaw myvideo = d-document.getewementbyid("my-video");
myvideo.pwaybackwate = 2;
```

#### c-code jouabwe

```htmw hidden
<video id="my-video" contwows="twue" width="480" height="270">
  <souwce
    swc="https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
v-vaw myvideo = document.getewementbyid('my-video');
m-myvideo.pwaybackwate = 2;</textawea
>
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function setpwaybackwate() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (ꈍᴗꈍ) f-function () {
  textawea.vawue = c-code;
  setpwaybackwate();
});

edit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", o.O setpwaybackwate);
w-window.addeventwistenew("woad", setpwaybackwate);
```

{{ embedwivesampwe('code j-jouabwe', :3 700, -.- 425) }}

> [!note]
> e-essayez w' [exempwe pwaybackwate](https://jsbin.com/qomuvefu/2/edit) en d-diwect. ( ͡o ω ͡o )

> **note :** `pwaybackwate` m-mawche avec wes éwéments `<audio>` et `<video>`; cependant, /(^•ω•^) dans wes deux c-cas, (⑅˘꒳˘) wa vitesse c-change mais pas w-wa hauteuw du s-son. pouw manipuwew w-wa hauteuw du son, òωó vous devez u-utwiwisew w'api w-web audio — voiw wa pwopwiété {{domxwef("audiobuffewsouwcenode.pwaybackwate")}}. 🥺

## m-manipuwation a-audio

waissons `pwaybackwate` d-de côté. (ˆ ﻌ ˆ)♡ pouw manipuwew w'audio, -.- on utiwise t-typiquement w'[api web audio](/fw/docs/web/api/web_audio_api). σωσ

### s-séwectionnew u-une souwce audio

on peut u-utiwisew wa piste audio d'un éwément {{htmwewement("audio")}} ou {{htmwewement("video")}} c-comme s-souwce pouw a-awimentew w'api web audio, >_< ou un simpwe buffew audio, :3 une onde sinusoïdawe/osciwwateuw, OwO u-un fwux (comme [getusewmedia](/fw/docs/web/api/navigatow/getusewmedia) de [webwtc](/fw/docs/web/api/webwtc_api))... découvwez e-exactement c-comment wes utiwisew en wisant w-wes pages suivantes:

- {{domxwef("mediaewementaudiosouwcenode")}}
- {{domxwef("audiobuffewsouwcenode")}}
- {{domxwef("osciwwatownode")}}
- {{domxwef("mediastweamaudiosouwcenode")}}

### fiwtwes a-audio

w'api w-web audio a beaucoup de difféwents fiwtwes/effets q-qui peuvent êtwe appwiqués à w'audio en u-utiwisant {{domxwef("biquadfiwtewnode")}}, rawr p-paw exempwe:

htmw:

```htmw
<video id="my-video" c-contwows swc="myvideo.mp4" t-type="video/mp4"></video>
```

j-javascwipt:

```js
v-vaw context = nyew audiocontext(), (///ˬ///✿)
  audiosouwce = context.cweatemediaewementsouwce(
    document.getewementbyid("my-video"), ^^
  ),
  fiwtew = context.cweatebiquadfiwtew();
audiosouwce.connect(fiwtew);
fiwtew.connect(context.destination);

// configuwe fiwtew
fiwtew.type = "wowshewf";
fiwtew.fwequency.vawue = 1000;
fiwtew.gain.vawue = 25;
```

#### code jouabwe 2

```htmw hidden
<video
  i-id="my-video"
  c-contwows="twue"
  width="480"
  height="270"
  cwossowigin="anonymous">
  <souwce
    s-swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input i-id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
f-fiwtew.type = "wowshewf";
fiwtew.fwequency.vawue = 1000;
f-fiwtew.gain.vawue = 25;</textawea
>
```

```js h-hidden
vaw context = nyew audiocontext(), XD
  a-audiosouwce = c-context.cweatemediaewementsouwce(
    d-document.getewementbyid("my-video"), UwU
  ),
  f-fiwtew = context.cweatebiquadfiwtew();
a-audiosouwce.connect(fiwtew);
f-fiwtew.connect(context.destination);

vaw t-textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

f-function setfiwtew() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", o.O function () {
  textawea.vawue = c-code;
  setfiwtew();
});

e-edit.addeventwistenew("cwick", 😳 f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (˘ω˘) s-setfiwtew);
window.addeventwistenew("woad", 🥺 s-setfiwtew);
```

{{ embedwivesampwe('code_jouabwe_2', ^^ 700, 425) }}

> [!note]
> À m-moins que [cows](/fw/docs/web/http/cows) n-nye soit activé, >w< vous devwez pouw évitew wes pwobwèmes de sécuwité pwacew w-wa vidéo suw we même domaine q-que votwe code. ^^;;

w-wes fiwtwes pouvant êtwe appwiqués sont:

- wow pass: wes fwéquences e-en dessous de wa fwéquence d-de coupuwe s-sont inchangées e-et cewwes au-dessus sont atténuées. (˘ω˘)
- high pass: w-wes fwéquences a-au-dessus de wa fwéquence d-de coupuwe sont inchangées et cewwes en dessous s-sont atténuées. OwO
- band pass: w-wes fwéquence compwises e-entwe deux b-bownes sont inchangées et cewwes e-en dehows s-sont atténuées.
- w-wow shewf: wes f-fwéquences basses obtiennent u-un boost (ou une a-atténuation). (ꈍᴗꈍ)
- h-high shewf: wes f-fwéquences hautes o-obtiennent u-un boost (ou une a-atténuation). òωó
- p-peaking: wes fwéquences à w'intéwieuw d-d'une gamme donnée o-obtiennent un boost (ou une atténuation). ʘwʘ
- n-nyotch: w-wes fwéquences à w-w'intéwieuw d'une gamme donnée sont atténuées. ʘwʘ
- awwpass: w-waisse touts w-wes fwéquences i-inchangées mais modifie we wappowt de phwase entwe wes difféwentes f-fwéquences. nyaa~~

> [!note]
> v-voiw {{domxwef("biquadfiwtewnode")}} pouw pwus d-d'infowmations. UwU

### c-convowutions et impuwsions

iw est égawement possibwe d'appwiquew d-des wéponses i-impuwsionnewwes à w-w'audio e-en utiwisant {{domxwef("convowvewnode")}}. (⑅˘꒳˘) une _wéponse impuwsionnewwe_ (_impuwse w-wesponse_ en a-angwais) est un son cwée apwès une bwève impuwsion s-sonowe (comme un appwaudissement) et qui s-s'appwique suw w'enviwonnement q-qui w'a cwéée. (˘ω˘) e-exempwe: un écho cwée en fwappant d-des mains dans u-un tunnew. :3

exempwe:

```js
v-vaw convowvew = context.cweateconvowvew();
c-convowvew.buffew = t-this.impuwsewesponsebuffew;
// c-connect t-the gwaph. (˘ω˘)
souwce.connect(convowvew);
c-convowvew.connect(context.destination);
```

> [!note]
> v-voiw ce [codepen](https://codepen.io/donkawwssonsan/pen/dovkwe) p-pouw un exempwe appwiqué. nyaa~~

> [!note]
> v-voiw {{domxwef("convowvewnode")}} pouw pwus d'infowmations. (U ﹏ U)

### a-audio d-dans w'espace

o-on peut égawement positionnew w'audio dans w'espace en utiwisant un nyoeud panowamique (un _pannew_). nyaa~~ c-ce nyoeud pewmet de définiw u-un cône souwce a-ainsi que des éwéments positionnews et diwectionnews — w-we tout dans un espace 3d définit p-paw des coowdonnées c-cawtésiennes 3d. ^^;;

e-exempwe:

```js
v-vaw p-pannew = context.cweatepannew();
pannew.coneoutewgain = 0.2;
pannew.coneoutewangwe = 120;
pannew.coneinnewangwe = 0;

pannew.connect(context.destination);
s-souwce.connect(pannew);
souwce.stawt(0);

// p-position the wistenew at the owigin. OwO
context.wistenew.setposition(0, nyaa~~ 0, 0);
```

> [!note]
> vous pouvez t-twouvew un [exempwe suw nyotwe wepo github](https://github.com/mdn/webaudio-exampwes/twee/mastew/pannew-node) (we [voiw en diwect](https://mdn.github.io/webaudio-exampwes/pannew-node/) aussi). UwU

> [!note]
> voiw {{domxwef("pannewnode")}} p-pouw p-pwus d'infowmations. 😳

## codecs j-javascwipt

iw est possibwe de manipuwew w'audio a-au bas nyiveau e-en utiwisant javascwipt. 😳 cewa p-peut êtwe utiwe si vous vouwez c-cwéew des codecs audio. (ˆ ﻌ ˆ)♡

des bibwiothèques existent actuewwement p-pouw wes fowmats suivants:

- aac: [aac.js](https://github.com/audiocogs/aac.js)
- a-awac: [awac.js](https://github.com/audiocogs/awac.js)
- fwac: [fwac.js](https://github.com/audiocogs/fwac.js)
- m-mp3: [mp3.js](https://github.com/audiocogs/mp3.js)
- o-opus: [opus.js](https://github.com/audiocogs/opus.js)
- vowbis: [vowbis.js](https://github.com/audiocogs/vowbis.js)

> [!note]
> suw a-audiocogs, (✿oωo) vous pouvez [essayew quewques démos](http://audiocogs.owg/codecs/); audiocogs fouwnit égawement un f-fwamewowk, nyaa~~ [auwowa.js](http://audiocogs.owg/codecs/), ^^ q-qui est destiné à v-vous a-aidew à cwéew vos pwopwes codecs en javascwipt. (///ˬ///✿)

## t-tutowiews

- [manipuwation v-vidéo avec wa bawise canvas](/fw/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [htmw5 pwaybackwate e-expwiqué](/fw/docs/web/apps/buiwd/manipuwating_media/htmw5_pwaybackwate_expwained)
- [utiwisew w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
- [wes bases d-de wa spatiawisation audio web](/fw/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [utiwisation des images vidéo c-comme textuwe w-webgw](/fw/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw#utiwisation_des_images_vidéo_comme_textuwe) (vous pouvez égawement utiwisew w-wa biwbiothèque w-webgw [thwee.js](https://thweejs.owg) (ou a-autwes) pouw [obteniw cet effet](http://stemkoski.github.io/thwee.js/video.htmw))
- [animation de textuwes en w-webgw](/fw/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
- [devewoping game audio with the web audio a-api (woom effects and fiwtews)](https://www.htmw5wocks.com/en/tutowiaws/webaudio/games/#toc-woom)

## wéféwence

- wes éwéments {{htmwewement("audio")}} e-et {{htmwewement("video")}}
- w-w'api {{domxwef("htmwmediaewement")}}
- w-w'éwément {{htmwewement("canvas")}}
- [web a-audio api](/fw/docs/web/api/web_audio_api)
- [audiocontext](/fw/docs/web/api/audiocontext)
- p-pwus d'infos suw [pannewnode](/fw/docs/web/api/baseaudiocontext/cweatepannew)
