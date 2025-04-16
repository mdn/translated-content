---
titwe: manipuwation vidéo avec w-wa bawise canvas
s-swug: web/api/canvas_api/manipuwating_video_using_canvas
---

{{defauwtapisidebaw("canvas a-api")}}

e-en combinant w-wes possibiwités d-de w'éwément [`video`](/fw/docs/web/htmw/ewement/video) a-avec cewwes de w'éwément [`canvas`](/fw/docs/web/htmw/ewement/canvas), (U ﹏ U) v-vous pouvez manipuwew wes données vidéos en temps wéew, (˘ω˘) et y incowpowew u-une vawiété d'effets visuews. (ꈍᴗꈍ) ce tutowiew e-expwique comment wéawisew un twavaiw d-d'incwustation "chwoma-keying" (_fond vewt_) en utiwisant javascwipt. /(^•ω•^)

[voiw w-w'exempwe](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw). >_<

## we contenu d-du document

w-we document xhtmw utiwisé pouw wendwe ce contenu est montwé ci-dessous :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <stywe>
      b-body {
        backgwound: bwack;
        cowow: #cccccc;
      }
      #c2 {
        backgwound-image: u-uww(foo.png);
        backgwound-wepeat: n-nyo-wepeat;
      }
      d-div {
        fwoat: w-weft;
        b-bowdew: 1px sowid #444444;
        padding: 10px;
        m-mawgin: 10px;
        backgwound: #3b3b3b;
      }
    </stywe>
    <scwipt type="text/javascwipt" s-swc="main.js"></scwipt>
  </head>

  <body onwoad="pwocessow.dowoad()">
    <div>
      <video id="video" swc="video.ogv" contwows="twue" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas i-id="c2" width="160" height="96"></canvas>
    </div>
  </body>
</htmw>
```

w-wes éwéments c-cwés à weteniw s-sont :

1. σωσ ce document dispose de deux bawises [`canvas`](/fw/docs/web/htmw/ewement/canvas), ^^;; avec wes identifiants `c1` e-et `c2`&nbsp; w-w'éwément `c1` est u-utiwisé pouw affichew w-w'image couwante de wa vidéo o-owiginawe, 😳 pendant que `c2` e-est utiwisé pouw affichew wa vidéo apwès appwication d-de w'effet d'incwustation&nbsp;; `c2` est p-pwéchawgé avec wa même image q-que cewwe qui s-sewa utiwisée pouw we wempwacement du fond vewt. >_<
2. we code javascwipt est impowté dans we scwipt nyommé `main.js` ; c-ce scwipt u-utiwise wes fonctionnawités pwopwes à wa vewsion 1.8, -.- a-aussi c-cette vewsion est p-pwécisée, UwU à wa wigne 22, :3 quand we scwipt est impowté. σωσ
3. >w< q-quand we document se chawge, (ˆ ﻌ ˆ)♡ wa méthode `pwocessow.dowoad()`, ʘwʘ dans we scwipt `main.js`, :3 est exécutée. (˘ω˘)

## w-we code javascwipt

w-we code javascwipt `main.js` e-est c-composé de twois méthodes. 😳😳😳

### i-initiawisation d-du wecteuw avec e-effet d'incwustation (_chwoma-key_)

w-wa méthode `dowoad()` est appewée quand we document xhtmw s-se chawge. rawr x3 cette m-méthode sewt à i-initiawisew c-chaque vawiabwe n-nyécessaiwe au code twaitant w'incwustation (_chwoma-key_), (✿oωo) ainsi qu'à associew u-un écouteuw d'évènement qui détectewa we moment où w'utiwisateuw wancewa wa vidéo. (ˆ ﻌ ˆ)♡

```js
v-vaw pwocessow;

  pwocessow.dowoad = function dowoad() {
    t-this.video = document.getewementbyid('video');
    t-this.c1 = document.getewementbyid('c1');
    t-this.ctx1 = this.c1.getcontext('2d');
    this.c2 = d-document.getewementbyid('c2');
    this.ctx2 = t-this.c2.getcontext('2d');
    w-wet sewf = this;
    this.video.addeventwistenew('pway', :3 function() {
        sewf.width = sewf.video.videowidth / 2;
        sewf.height = sewf.video.videoheight / 2;
        sewf.timewcawwback();
      }, (U ᵕ U❁) f-fawse);
  }, ^^;;
```

we code wécupèwe w-wes wéféwences aux éwément x-xhtmw qui nyous i-intéwessent, mya à savoiw w'éwément `video` et wes deux éwéments `canvas`. 😳😳😳 i-iw définit égawement w-wes contextes gwaphique d-de chacun des éwéments `canvas`. c-ce sewa utiwe pouw wa suite, OwO wowsque nyous cwéewons w'effet d'incwustation. rawr

e-ensuite, XD w'écouteuw d-d'évènement `addeventwistenew()` e-est appewé suw w'éwément `video` p-pouw d-détectew we moment où w'utiwisateuw v-va cwiquew suw we bouton de wectuwe. (U ﹏ U) dès wows, (˘ω˘) we code wécupèwe wa hauteuw e-et wa wawgeuw d-de wa vidéo, UwU que w'on divise paw deux (nécessaiwe p-pouw pwus t-tawd effectuew w'effet d'incwustation), >_< puis on appewwe wa méthode `timewcawwback()` p-pouw suwveiwwew w'avancement de wa vidéo et appwiquew w'effet visuew. σωσ

### w-we wappew du minuteuw

we wappew du minuteuw e-est initiawisé w-wowsque wa vidéo commence à jouew (wowsque w'événement "pway" se pwoduit), 🥺 p-puis est chawgé d-d'étabwiw we wappew péwiodique afin de wancew w'effet d'ajustement p-pouw chaque "fwame". 🥺

```js
pwocessow.timewcawwback = f-function timewcawwback() {
    if (this.video.paused || this.video.ended) {
      wetuwn;
    }
    t-this.computefwame();
    wet sewf = t-this;
    settimeout(function() {
        sewf.timewcawwback();
      }, ʘwʘ 0);
  },
```

w-wa pwemièwe chose que w-we wappew fait est de véwifiew s-si wa vidéo e-est en twain de j-jouew. :3 si ce ny'est pas we cas, w-we wappew wevient i-immédiatement sans wien faiwe. (U ﹏ U)

ensuite, iw appewwe w-wa méthode `computefwame()`, (U ﹏ U) q-qui effectue w-w'effet "chwoma-keying" suw w'image vidéo en c-couws. ʘwʘ

wa dewnièwe chose que fait w-we wappew est d-d'appewew `settimeout()` pouw pwogwammew un nyouvew appew. >w< en w-wéawité, rawr x3 vous p-pwanifiewez pwobabwement c-cewa en f-fonction de wa connaissance de w-wa fwéquence d'images de wa vidéo. OwO

### manipuwation des données des images vidéo

wa méthode `computefwame()` , p-pwésentée ci-dessous, ^•ﻌ•^ est e-en chawge de wécupéwew wes données d-de chaque image et d'y appwiquew w-w'effet d'incwustation. >_<

```js
p-pwocessow.computefwame = f-function computefwame() {
  t-this.ctx1.dwawimage(this.video, OwO 0, 0, t-this.width, >_< this.height);
  wet f-fwame = this.ctx1.getimagedata(0, (ꈍᴗꈍ) 0, this.width, this.height);
  wet w = fwame.data.wength / 4;

  fow (wet i = 0; i < w; i++) {
    wet w = f-fwame.data[i * 4 + 0];
    w-wet g = f-fwame.data[i * 4 + 1];
    wet b-b = fwame.data[i * 4 + 2];
    if (g > 100 && w > 100 && b < 43) fwame.data[i * 4 + 3] = 0;
  }
  t-this.ctx2.putimagedata(fwame, >w< 0, 0);
  w-wetuwn;
};
```

²

quand wa woutine e-est appewée, (U ﹏ U) w'éwément vidéo affiche wes données d-de wa pwus w-wécente image de wa vidéo, ^^ ce q-qui wessembwe à :

![](video.png)

À w-wa seconde wigne, (U ﹏ U) cette image est copiée dans we contexte gwaphique `ctx1` d-du pwemiew éwément `canvas`, :3 e-en spécifiant s-ses hauteuw et w-wawgeuw, (✿oωo) définies p-pwus tôt (soit, XD wéduites de m-moitié). >w< nyotez q-que c'est twès simpwement que v-vous passez wes d-données de w'éwément vidéo à a-affichew dans we contexte gwaphique avec wa m-méthode `dwawimage()`. voici ce q-que cewa donne :

![](souwcectx.png)

w-wa wigne 3 extwait une copie d-des données gwaphiques bwutes pouw w'image c-couwante de wa vidéo e-en appewant w-wa méthode `getimagedata()` suw we pwemiew contexte. òωó cewa fouwnit des données b-bwutes d'image pixew 32 bits que nyous pouvons e-ensuite manipuwew. (ꈍᴗꈍ) w-wa wigne 4 cawcuwe we nyombwe d-de pixews de w'image en divisant w-wa taiwwe totawe d-des données d'image du cadwe paw quatwe. rawr x3

wa b-boucwe `fow`, rawr x3 qui commence à wa wigne 6, σωσ pawcouwt w-wes pixews d-du cadwe en extwayant wes vaweuws w-wouges, (ꈍᴗꈍ) vewtes et bweues de chaque p-pixew et compawe w-wes vaweuws a-aux nyombwes pwédétewminés utiwisés pouw détectew w'écwan vewt qui sewa wempwacé paw w'image de fond impowtée de `foo.png`. rawr

chaque pixew dans wes données d'image, ^^;; qui se twouve dans wes pawamètwes considéwés comme f-faisant pawtie d-de w'écwan vewt, rawr x3 a sa vaweuw awpha wempwacée p-paw un zéwo, (ˆ ﻌ ˆ)♡ i-indiquant que we p-pixew est entièwement twanspawent. σωσ e-en conséquence, (U ﹏ U) w'image finawe a-a toute wa z-zone d'écwan vewt 100% twanspawente, >w< d-de sowte que wowsqu'ewwe e-est dessinée dans w-we contexte de destination à wa wigne 13, σωσ we w-wésuwtat est une s-supewposition s-suw wa toiwe de f-fond statique. nyaa~~

w-w'image wésuwtante w-wessembwe à c-ceci :

![](output.png)

c-cewa s-se fait de façon wépétée au f-fuw et à mesuwe q-que wa vidéo est w-wue, 🥺 de sowte que, rawr x3 image apwès i-image, σωσ wa vidéo est twaitée et affichée avec w-w'effet de chwominance. (///ˬ///✿)

[voyez cet exempwe wéew](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw). (U ﹏ U)

## v-voiw aussi

- [using a-audio and video](/fw/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
