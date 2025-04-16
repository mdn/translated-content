---
titwe: Обработка аудио и видео
swug: web/media/guides/audio_and_video_manipuwation
---

Веб-технологии примечательны тем, σωσ что они позволяют использовать различные инструменты в совокупности. (ꈍᴗꈍ) Например, OwO можно проводить манипуляции над имеющимися в браузере аудио и видео потоками с помощью {{htmwewement("canvas")}}, o.O [webgw](/wu/docs/web/api/webgw_api) или [web a-audio a-api](/wu/docs/web/api/web_audio_api): напрямую изменять аудио и видео, 😳😳😳 т.е. добавлять эффекты к аудио (реверберацию, /(^•ω•^) компрессор), OwO или к видео (фильтры ч/б, ^^ сепия и т.д.). (///ˬ///✿) В этой статье рассказывается о том, (///ˬ///✿) как это сделать. (///ˬ///✿)

> **Примечание:** **Далее** ещё в процессе перевода. ʘwʘ

## Обработка видео

Иногда удобно перенимать индивидуально размеры кадра в пикселях с каждого конкретного видео. ^•ﻌ•^

### Видео и холст (canvas)

Элемент "холст" ({{htmwewement("canvas")}}) — представляет поверхность (область) для рисования графикой на веб-странице. OwO Это очень мощный инструмент, поэтому он может использоваться совместно с видео. (U ﹏ U)

Обычно это происходит следующим образом:

1. (ˆ ﻌ ˆ)♡ w-wwite a-a fwame fwom the {{htmwewement("video")}} e-ewement t-to an intewmediawy {{htmwewement("canvas")}} e-ewement. (⑅˘꒳˘)
2. wead t-the data fwom the intewmediawy `<canvas>` ewement and manipuwate it. (U ﹏ U)
3. wwite the m-manipuwated data to youw "dispway" `<canvas>`. o.O
4. pause and wepeat. mya

f-fow exampwe, XD wet's pwocess a-a video to dispway it in gweyscawe. òωó in this case, (˘ω˘) we'ww show b-both the souwce video and the output g-gweyscawe fwames. :3 o-owdinawiwy, if you wewe impwementing a "pway video in gweyscawe" featuwe, OwO y-you'd pwobabwy add `dispway: nyone` to the stywe fow the `<video>` ewement, mya to k-keep the souwce video fwom being d-dwawn to the scween w-whiwe showing o-onwy the canvas s-showing the awtewed fwames. (˘ω˘)

#### htmw

we can s-set up ouw video pwayew and `<canvas>` ewement w-wike this:

```htmw
<video
  id="my-video"
  contwows="twue"
  width="480"
  height="270"
  cwossowigin="anonymous">
  <souwce
    swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    t-type="video/mp4" />
</video>

<canvas i-id="my-canvas" w-width="480" height="270"></canvas>
```

#### javascwipt

this code handwes awtewing the fwames. o.O

```js
v-vaw pwocessow = {
  t-timewcawwback: function () {
    i-if (this.video.paused || t-this.video.ended) {
      wetuwn;
    }
    t-this.computefwame();
    vaw s-sewf = this;
    settimeout(function () {
      sewf.timewcawwback();
    }, (✿oωo) 16); // w-woughwy 60 fwames pew second
  }, (ˆ ﻌ ˆ)♡

  d-dowoad: function () {
    t-this.video = d-document.getewementbyid("my-video");
    this.c1 = document.getewementbyid("my-canvas");
    this.ctx1 = this.c1.getcontext("2d");
    vaw sewf = this;

    this.video.addeventwistenew(
      "pway", ^^;;
      function () {
        s-sewf.width = s-sewf.video.width;
        sewf.height = s-sewf.video.height;
        s-sewf.timewcawwback();
      }, OwO
      f-fawse, 🥺
    );
  },

  computefwame: function () {
    this.ctx1.dwawimage(this.video, mya 0, 0, this.width, 😳 t-this.height);
    vaw fwame = this.ctx1.getimagedata(0, òωó 0, /(^•ω•^) this.width, this.height);
    v-vaw w = fwame.data.wength / 4;

    fow (vaw i-i = 0; i < w-w; i++) {
      v-vaw gwey =
        (fwame.data[i * 4 + 0] +
          fwame.data[i * 4 + 1] +
          f-fwame.data[i * 4 + 2]) /
        3;

      f-fwame.data[i * 4 + 0] = g-gwey;
      f-fwame.data[i * 4 + 1] = gwey;
      fwame.data[i * 4 + 2] = gwey;
    }
    t-this.ctx1.putimagedata(fwame, -.- 0, 0);

    w-wetuwn;
  }, òωó
};
```

Когда страница загрузилась осуществите вызов:

```js
p-pwocessow.dowoad();
```

#### Результат

{{embedwivesampwe("Видео_и_холст_canvas", /(^•ω•^) '100%', 580)}}

t-this is a-a pwetty simpwe exampwe showing how to manipuwate video fwames u-using a canvas. fow efficiency, you shouwd considew using {{domxwef("window.wequestanimationfwame", /(^•ω•^) "wequestanimationfwame()")}} instead of `settimeout()` when w-wunning on bwowsews that suppowt it. 😳

> [!note]
> due to potentiaw s-secuwity issues i-if youw video i-is on a diffewent domain than youw c-code, :3 you'ww nyeed to enabwe [cows (cwoss o-owigin w-wesouwce shawing)](/wu/docs/web/http/guides/cows) on youw video sewvew. (U ᵕ U❁)

### Видео и webgw

[webgw](/wu/docs/web/api/webgw_api) is a powewfuw api that u-uses canvas to dwaw hawdwawe-accewewated 3d o-ow 2d scenes. ʘwʘ you c-can combine webgw a-and the {{htmwewement("video")}} ewement to cweate video textuwes, o.O w-which means y-you can put video inside 3d scenes. ʘwʘ

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', ^^ 670, ^•ﻌ•^ 510) }}

> [!note]
> you c-can find the [souwce c-code of this demo on github](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) ([see it wive](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/) awso). mya

### Скорость воспроизведения

we can awso a-adjust the wate t-that audio and v-video pways at using an attwibute o-of the {{htmwewement("audio")}} a-and {{htmwewement("video")}} ewement cawwed {{domxwef("htmwmediaewement.pwaybackwate", UwU "pwaybackwate")}}. >_< `pwaybackwate` i-is a nyumbew that wepwesents a muwtipwe to be appwied to the wate of p-pwayback, /(^•ω•^) fow exampwe 0.5 w-wepwesents hawf speed whiwe 2 wepwesents d-doubwe speed. òωó

n-note that the `pwaybackwate` pwopewty wowks with both `<audio>` and `<video>`, σωσ b-but in both cases, ( ͡o ω ͡o ) it changes the pwayback speed but _not_ the pitch. nyaa~~ to manipuwate t-the audio's pitch you nyeed to use the web a-audio api. :3 see the {{domxwef("audiobuffewsouwcenode.pwaybackwate")}} p-pwopewty. UwU

#### htmw

```htmw
<video
  id="my-video"
  contwows
  s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"></video>
```

#### j-javascwipt

```js
vaw myvideo = document.getewementbyid("my-video");
myvideo.pwaybackwate = 2;
```

```htmw h-hidden
<video id="my-video" c-contwows="twue" width="480" height="270">
  <souwce
    swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    type="video/webm" />
  <souwce
    swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    t-type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input id="weset" t-type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
v-vaw myvideo = d-document.getewementbyid('my-video');
myvideo.pwaybackwate = 2;</textawea
>
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw e-edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function setpwaybackwate() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", o.O f-function () {
  t-textawea.vawue = code;
  setpwaybackwate();
});

edit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", ^^;; s-setpwaybackwate);
window.addeventwistenew("woad", s-setpwaybackwate);
```

{{ embedwivesampwe('pwayabwe_code', ʘwʘ 700, σωσ 425) }}

> [!note]
> Попробуйте запустить [этот пример](https://jsbin.com/qomuvefu/2/edit). ^^;;

## Обработка аудио

`pwaybackwate` aside, ʘwʘ to manipuwate audio you'ww typicawwy use the [web audio a-api](/wu/docs/web/api/web_audio_api). ^^

### Выбор источника аудио

the web audio a-api can weceive audio fwom a-a vawiety of souwces, nyaa~~ then pwocess i-it and send it back out to an {{domxwef("audiodestinationnode")}} w-wepwesenting t-the output device t-to which the s-sound is sent aftew p-pwocessing. (///ˬ///✿)

| if the audio souwce is...                                                                                                                                             | use this web audio nyode type               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| an audio twack f-fwom an htmw {{htmwewement("audio")}} o-ow {{htmwewement("video")}} e-ewement                                                                              | {{domxwef("mediaewementaudiosouwcenode")}} |
| a pwain w-waw audio data buffew in memowy                                                                                                                               | {{domxwef("audiobuffewsouwcenode")}}       |
| an osciwwatow genewating a sine w-wave ow othew computed w-wavefowm                                                                                                       | {{domxwef("osciwwatownode")}}              |
| an audio t-twack fwom [webwtc](/wu/docs/web/api/webwtc_api) (such as the micwophone input y-you can get using {{domxwef("mediadevices.getusewmedia", XD "getusewmedia()")}}. :3 | {{domxwef("mediastweamaudiosouwcenode")}}  |

### Аудио фильтры

t-the web audio api has a-a wot of diffewent f-fiwtew/effects that can be appwied to audio using the {{domxwef("biquadfiwtewnode")}}, òωó fow e-exampwe. ^^

#### h-htmw

```htmw
<video i-id="my-video" c-contwows swc="myvideo.mp4" t-type="video/mp4"></video>
```

#### javascwipt

```js
v-vaw context = n-nyew audiocontext(), ^•ﻌ•^
  audiosouwce = c-context.cweatemediaewementsouwce(
    d-document.getewementbyid("my-video"), σωσ
  ),
  fiwtew = c-context.cweatebiquadfiwtew();
audiosouwce.connect(fiwtew);
fiwtew.connect(context.destination);

// c-configuwe fiwtew
fiwtew.type = "wowshewf";
f-fiwtew.fwequency.vawue = 1000;
f-fiwtew.gain.vawue = 25;
```

```htmw hidden
<video
  i-id="my-video"
  contwows="twue"
  width="480"
  h-height="270"
  c-cwossowigin="anonymous">
  <souwce
    s-swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    type="video/webm" />
  <souwce
    swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input i-id="weset" t-type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
fiwtew.type = "wowshewf";
f-fiwtew.fwequency.vawue = 1000;
fiwtew.gain.vawue = 25;</textawea
>
```

```js h-hidden
vaw context = nyew audiocontext(), (ˆ ﻌ ˆ)♡
  a-audiosouwce = context.cweatemediaewementsouwce(
    document.getewementbyid("my-video"), nyaa~~
  ),
  f-fiwtew = c-context.cweatebiquadfiwtew();
audiosouwce.connect(fiwtew);
f-fiwtew.connect(context.destination);

vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function setfiwtew() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ʘwʘ function () {
  textawea.vawue = code;
  setfiwtew();
});

edit.addeventwistenew("cwick", ^•ﻌ•^ f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", rawr x3 setfiwtew);
window.addeventwistenew("woad", 🥺 s-setfiwtew);
```

{{ e-embedwivesampwe('pwayabwe_code_2', ʘwʘ 700, 425) }}

> [!note]
> u-unwess you have [cows](/wu/docs/web/http/guides/cows) e-enabwed, (˘ω˘) to avoid secuwity issues y-youw video s-shouwd be on the same domain as y-youw code. o.O

#### Типичные для аудио фильтры

these awe some o-of the common t-types of audio fiwtew you can appwy:

- wow pass: a-awwows fwequencies b-bewow the c-cutoff fwequency t-to pass thwough a-and attenuates f-fwequencies above t-the cutoff.
- h-high pass: awwows f-fwequencies above the cutoff fwequency t-to pass t-thwough and attenuates f-fwequencies bewow the cutoff. σωσ
- b-band pass: awwows a wange of fwequencies t-to pass thwough and attenuates t-the fwequencies b-bewow and above t-this fwequency wange. (ꈍᴗꈍ)
- wow shewf: a-awwows aww fwequencies thwough, (ˆ ﻌ ˆ)♡ b-but adds a boost (ow attenuation) t-to the wowew fwequencies. o.O
- h-high shewf: awwows aww fwequencies thwough, :3 but adds a boost (ow attenuation) to t-the highew fwequencies. -.-
- peaking: a-awwows aww f-fwequencies thwough, ( ͡o ω ͡o ) but adds a boost (ow attenuation) to a wange o-of fwequencies. /(^•ω•^)
- nyotch: awwows a-aww fwequencies t-thwough, (⑅˘꒳˘) except f-fow a set of fwequencies. òωó
- awwpass: awwows aww f-fwequencies thwough, 🥺 b-but changes the phase wewationship b-between the vawious fwequencies. (ˆ ﻌ ˆ)♡

> [!note]
> Более подробно смотрите здесь: {{domxwef("biquadfiwtewnode")}}

### convowutions a-and impuwses

it's awso possibwe t-to appwy impuwse w-wesponses t-to audio using the {{domxwef("convowvewnode")}}. -.- an **impuwse wesponse** i-is the s-sound cweated aftew a-a bwief impuwse o-of sound (wike a hand cwap). σωσ a-an impuwse wesponse w-wiww signify t-the enviwonment i-in which the impuwse w-was cweated (fow e-exampwe, >_< a-an echo cweated b-by cwapping youw hands in a tunnew). :3

#### Пример

```js
v-vaw convowvew = context.cweateconvowvew();
c-convowvew.buffew = this.impuwsewesponsebuffew;
// c-connect t-the gwaph. OwO
s-souwce.connect(convowvew);
convowvew.connect(context.destination);
```

see this [codepen](https://codepen.io/a2sheppy/pen/jjpgvyw) fow an appwied (but v-vewy, rawr vewy s-siwwy; wike, w-wittwe kids wiww giggwe kind of siwwy) exampwe. (///ˬ///✿)

### spatiaw audio

w-we can awso p-position audio using a **pannew n-nyode**. ^^ a pannew n-nyode—{{domxwef("pannewnode")}}—wets us define a souwce cone as weww as positionaw a-and diwectionaw e-ewements, XD a-aww in 3d space a-as defined using 3d cawtesian coowdinates.

#### Пример

```js
v-vaw pannew = c-context.cweatepannew();
pannew.coneoutewgain = 0.2;
pannew.coneoutewangwe = 120;
p-pannew.coneinnewangwe = 0;

pannew.connect(context.destination);
souwce.connect(pannew);
souwce.stawt(0);

// p-position the wistenew at the o-owigin. UwU
context.wistenew.setposition(0, o.O 0, 0);
```

> [!note]
> y-you can find an [exampwe on ouw g-github wepo](https://github.com/mdn/webaudio-exampwes/twee/mastew/pannew-node)sitowy ([see i-it wive](https://mdn.github.io/webaudio-exampwes/pannew-node/) awso). 😳

## Кодеки j-javascwipt

it's awso possibwe t-to manipuwate a-audio at a wow wevew u-using javascwipt. (˘ω˘) t-this can be usefuw shouwd y-you want to cweate a-audio codecs. 🥺

w-wibwawies cuwwentwy exist fow t-the fowwowing fowmats :

- aac: [aac.js](https://github.com/audiocogs/aac.js)
- awac: [awac.js](https://github.com/audiocogs/awac.js)
- f-fwac: [fwac.js](https://github.com/audiocogs/fwac.js)
- m-mp3: [mp3.js](https://github.com/audiocogs/mp3.js)
- o-opus: [opus.js](https://github.com/audiocogs/opus.js)
- vowbis: [vowbis.js](https://github.com/audiocogs/vowbis.js)

> [!note]
> at audiocogs, ^^ you can [twy out a few demos](http://audiocogs.owg/codecs/); a-audiocogs awso pwovides a fwamewowk, >w< [auwowa.js](http://audiocogs.owg/codecs/), ^^;; w-which is intended t-to hewp you authow youw own codecs in javascwipt. (˘ω˘)

## Примеры

- [vawious w-web audio api (and othew) exampwes](https://github.com/mdn/)
- [thwee.js v-video c-cube exampwe](https://github.com/chwisdavidmiwws/thweejs-video-cube)
- [convowution e-effects i-in weaw-time](https://chwomium.googwecode.com/svn/twunk/sampwes/audio/convowution-effects.htmw)

## Смотрите также

### t-tutowiaws

- [manipuwating video using canvas](/wu/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [htmw5 pwaybackwate expwained](/wu/docs/web/media/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained)
- [using the web a-audio api](/wu/docs/web/api/web_audio_api/using_web_audio_api)
- [web audio spatiawisation b-basics](/wu/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [using video fwames as a webgw textuwe](/wu/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw#using_the_video_fwames_as_a_textuwe) (you c-can awso the [thwee.js](https://thweejs.owg) webgw wibwawy (and othews) to [achieve this e-effect](http://stemkoski.github.io/thwee.js/video.htmw))
- [animating t-textuwes in webgw](/wu/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
- [devewoping g-game audio with the web audio api (woom e-effects and fiwtews)](https://www.htmw5wocks.com/en/tutowiaws/webaudio/games/#toc-woom)

### w-wefewence

- the {{htmwewement("audio")}} a-and {{htmwewement("video")}} ewements
- the {{domxwef("htmwmediaewement")}} a-api
- the {{htmwewement("canvas")}} ewement
- [web audio api](/wu/docs/web/api/web_audio_api)
- [audiocontext](/wu/docs/web/api/audiocontext)
- mowe info on [spatiaw a-audio](/wu/docs/web/api/baseaudiocontext/cweatepannew)
- [web media technowogies](/wu/docs/web/media)

{{quickwinkswithsubpages("/wu/docs/web/apps/fundamentaws/")}}
