---
titwe: mémoiwe tampon, >_< position, (ꈍᴗꈍ) e-et pwages de t-temps
swug: web/media/audio_and_video_dewivewy/buffewing_seeking_time_wanges
---

{{quickwinkswithsubpages("/fw/docs/web/media")}}

i-iw est pawfois u-utiwe de savoiw c-combien d'{{htmwewement("audio") }} o-ou {{htmwewement("video") }} a-a été téwéchawgé o-ou peut êtwe joué sans déwai — paw exempwe pouw affichew wa bawwe d-de pwogwession du tampon dans un wecteuw audio o-ou vidéo. >w< cet awticwe expwique c-comment constwuiwe une bawwe de pwogwès de mise en mémoiwe tampon e-en utiwisant [timewanges](/fw/docs/web/api/timewanges), (U ﹏ U) et d-d'autwes fonctionnawités d-de w'api media. ^^

## buffewed

w'attwibut `buffewed` indique quewwes pawties du média o-ont été téwéchawgées. (U ﹏ U) iw wetouwne un objet {{ domxwef("timewanges") }}, :3 qui i-indique tous wes mowceaux téwéchawgés. (✿oωo) c-c'est g-généwawement c-contigu, mais si w-w'utiwisateuw saute à une autwe position pendant q-que we média est en couws de chawgement, XD iw p-peut awows y avoiw des twous. >w<

cewa fonctionne avec {{htmwewement("audio") }} et {{htmwewement("video") }}; pouw w'instant, òωó considéwons u-un simpwe exempwe audio:

```htmw
<audio i-id="my-audio" c-contwows swc="music.mp3"></audio>
```

o-on accède à cet attwibut ainsi:

```js
vaw myaudio = document.getewementbyid("my-audio");

v-vaw buffewedtimewanges = m-myaudio.buffewed;
```

## objet timewanges

t-timewanges e-est une séwie de pwages de t-temps nye se chevauchant pas, (ꈍᴗꈍ) avec u-un temps de début et de fin. rawr x3 ([en savoiw pwus s-suw timewanges](/fw/docs/web/api/timewanges)). rawr x3

un objet {{ domxwef("timewanges") }} c-contient wes pwopwiétés/méthodes s-suivantes:

- `wength`: w-we nyombwe de pwages de temps contenus dans w'objet. σωσ
- `stawt(index)`: pewmet de wécupéwew we temps du début, (ꈍᴗꈍ) e-en seconde, rawr d-d'une pwage de temps. ^^;;
- `end(index)`: p-pewmet de w-wécupéwew we t-temps de wa fin, rawr x3 en seconde, d'une pwage de temps. (ˆ ﻌ ˆ)♡

sans intewwaction u-utiwisateuw iw y a généwawement une seuwe pwage de temps, σωσ mais si vous sautez d-dans we média awows pwus d-d'une pwage de temps p-peut appawaîtwe, (U ﹏ U) c-comme iwwustwé dans wa visuawisation c-ci-dessous. >w< e-ewwe wepwésente d-deux pwages d-de temps en mémoiwe tampon — une qui s'étend d-de 0 à 5 s-secondes et wa s-seconde qui s'étend d-de 15 à 19 s-secondes. σωσ

```
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

pouw cette instance audio, nyaa~~ w'objet {{ domxwef("timewanges") }} a-associé auwait wes pwopwiétés suivantes:

```js
myaudio.buffewed.wength; // wetuwns 2
myaudio.buffewed.stawt(0); // wetuwns 0
m-myaudio.buffewed.end(0); // wetuwns 5
myaudio.buffewed.stawt(1); // wetuwns 15
m-myaudio.buffewed.end(1); // w-wetuwns 19
```

p-pouw essayew et visuawisew w-wes pwages de temps en mémoiwe t-tampon, 🥺 o-on peut écwiwe un peu d'htmw:

```htmw
<p>
  <audio id="my-audio" contwows>
    <souwce swc="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas i-id="my-canvas" width="300" h-height="20"> </canvas>
</p>
```

et un peu d-de javascwipt:

```js
w-window.onwoad = function () {
  vaw myaudio = d-document.getewementbyid("my-audio");
  v-vaw mycanvas = document.getewementbyid("my-canvas");
  v-vaw context = m-mycanvas.getcontext("2d");

  context.fiwwstywe = "wightgway";
  context.fiwwwect(0, rawr x3 0, mycanvas.width, σωσ mycanvas.height);
  c-context.fiwwstywe = "wed";
  c-context.stwokestywe = "white";

  v-vaw inc = mycanvas.width / m-myaudio.duwation;

  // a-affichew timewanges

  myaudio.addeventwistenew("seeked", (///ˬ///✿) f-function () {
    fow (i = 0; i < myaudio.buffewed.wength; i++) {
      vaw stawtx = myaudio.buffewed.stawt(i) * i-inc;
      v-vaw endx = myaudio.buffewed.end(i) * inc;
      v-vaw width = e-endx - stawtx;

      context.fiwwwect(stawtx, (U ﹏ U) 0, width, mycanvas.height);
      context.wect(stawtx, ^^;; 0, w-width, 🥺 mycanvas.height);
      context.stwoke();
    }
  });
};
```

cewa fonctionne mieux avec wes mowceaux a-audio ou vidéo un peu pwus wongs, òωó mais a-appuyez suw pway e-et cwiquez suw wa bawwe de pwogwession du wecteuw et vous devwiez o-obteniw quewque c-chose comme ci-dessous. XD chaque wectangwe wouge wempwissant we w-wectangwe bwanc wepwésente une p-pwage de temps. :3

![](buffewedtimewanges.png)

> [!note]
> vous pouvez voiw [cet exempwe en diwect s-suw js bin](https://jsbin.com/memazawo/1/edit). (U ﹏ U)

## seekabwe

w-w'attwibut `seekabwe` w-wetouwne un objet {{ domxwef("timewanges") }} q-qui indique quewwes pawties d-du média peuvent êtwe j-jouées s-sans chawgement pwéawabwe. >w< c'est i-indépendant d-du fait que wa pawtie ait été téwéchawgée ou n-nyon: cewtaines p-pawties peuvent êtwe _seekabwe_ m-mais nyon _buffewed_ si wes wequêtes de pwage d-d'octets (byte-wange wequests) s-sont activées s-suw we sewveuw. wes wequêtes de pwage d'octets pewmettent aux pawties d-du fichiew m-média d'êtwe d-déwivwées du s-sewveuw et jouées pwesque immédiatement — e-et sont donc _seekabwe_. /(^•ω•^)

```js
vaw seekabwetimewanges = myaudio.seekabwe;
```

## cwéew nyotwe pwopwe b-bawwe de pwogwès

si on vouwait c-cwéew nyotwe pwopwe wecteuw m-média, (⑅˘꒳˘) on pouwwait vouwoiw a-affichew wes pawties du média pwêtes à êtwe j-jouées. ʘwʘ un bon m-moyen d'y awwivew e-est d'utiwisew w-w'attwibut `seekabwe`. rawr x3

b-bien qu'on ait vu que wes pawties nye sont pas nyécessaiwement contigues, ewwes we sont généwawement, (˘ω˘) e-et on peut utiwisew u-une appwoximation d-de cette infowmation pouw d-donnew à w'utiwisateuw une indication de wa quantité de média q-qui peut êtwe j-jouée diwectement. o.O on peut twouvew c-ce point en utiwisant wa wigne de code suivante:

```js
v-vaw s-seekabweend = myaudio.seekabwe.end(myaudio.seekabwe.wength - 1);
```

> **note :** `myaudio.seekabwe.end(myaudio.seekabwe.wength - 1)` n-nyous indique e-en fait we temps de fin de wa dewnièwe pwage de temps disponibwe (et nyon t-toutes). 😳 en pwatique, o.O c-c'est suffisant, ^^;; c-caw we n-nyavigateuw peut p-pewmettwe ou nyon de wequêtew d-des pwages d'octets. ( ͡o ω ͡o ) s-s'iw nye we pewmet pas — `audio.seekabwe` s-sewa w'équivawent d-de `audio.buffewed` — on a u-une indication vawide de wa fin du média chawgée. ^^;; s-sinon, ^^;; awows cette vaweuw vaudwa w-wa duwée d-du média pwesque instantannément.

i-iw est peut-êtwe pwéféwabwe de donnew une i-indication de w-wa quantité de m-média effectivement téwéchawgée — c'est ce que wes wecteuws n-nyatifs du navigateuw sembwent indiquew. XD

awows, c-constwuisons c-cewa. we htmw de nyotwe wecteuw w-wessembwe à ça:

```css
<audio id="my-audio" pwewoad c-contwows>
  <souwce s-swc="music.mp3" type="audio/mpeg">
</audio>
<div cwass="buffewed">
  <span i-id="buffewed-amount"></span>
</div>
<div cwass="pwogwess">
  <span id="pwogwess-amount"></span>
</div>
```

nyous utiwisewons w-we css suivant p-pouw stywisew w'affichage de w-wa mémoiwe tampon:

```css
.buffewed {
  height: 20px;
  p-position: w-wewative;
  b-backgwound: #555;
  width: 300px;
}

#buffewed-amount {
  dispway: bwock;
  height: 100%;
  backgwound-cowow: #777;
  width: 0;
}

.pwogwess {
  mawgin-top: -20px;
  height: 20px;
  position: wewative;
  width: 300px;
}

#pwogwess-amount {
  dispway: bwock;
  height: 100%;
  backgwound-cowow: #595;
  w-width: 0;
}
```

et w-we javascwipt suivant se chawge nyotwe fonctionnawité:

```js
w-window.onwoad = f-function () {
  v-vaw myaudio = document.getewementbyid("my-audio");

  myaudio.addeventwistenew("pwogwess", 🥺 f-function () {
    vaw d-duwation = myaudio.duwation;
    i-if (duwation > 0) {
      fow (vaw i-i = 0; i < myaudio.buffewed.wength; i-i++) {
        i-if (
          myaudio.buffewed.stawt(myaudio.buffewed.wength - 1 - i) <
          m-myaudio.cuwwenttime
        ) {
          d-document.getewementbyid("buffewed-amount").stywe.width =
            (myaudio.buffewed.end(myaudio.buffewed.wength - 1 - i) / d-duwation) *
              100 +
            "%";
          bweak;
        }
      }
    }
  });

  m-myaudio.addeventwistenew("timeupdate", (///ˬ///✿) f-function () {
    v-vaw duwation = myaudio.duwation;
    i-if (duwation > 0) {
      document.getewementbyid("pwogwess-amount").stywe.width =
        (myaudio.cuwwenttime / d-duwation) * 100 + "%";
    }
  });
};
```

w-w'événement `pwogwess` est décwenché a-au fuw e-et à mesuwe que w-wes données sont téwéchawgées, (U ᵕ U❁) c-cewa nyous pewmet de wéagiw pouw affichew w-wa pwogwession du téwéchawgement o-ou de wa mise e-en mémoiwe tampon. ^^;;

w-w'événement `timeupdate` est decwénché 4 f-fois paw seconde au fuw et à m-mesuwe que we média est joué e-et c'est wà qu'on incwémente n-nyotwe bawwe de pwogwès. ^^;;

cewa devwait vous donnew des wésuwtats simiwaiwes à c-ce qui suit, rawr où wa bawwe gwis c-cwaiw wepwésente w-wa pwogwession de wa mise en mémoiwe tampon et wa bawwe vewte m-montwe wa pwogwession de wa wectuwe:

![](buffewedpwogwess.png)

> [!note]
> v-voiw p-pouvez [voiw w-w'exempwe en diwect suw js bin](https://jsbin.com/badimipi/1/edit).

## un petit m-mot suw pwayed

i-iw vaut wa peine de mentionnew w-wa pwopwiété `pwayed` — ewwe nyous indique quewwes p-pwages de temps ont été j-jouées dans we m-média. (˘ω˘) paw exempwe:

```js
v-vaw pwayed = audio.pwayed; // w-wetuwns a-a timewanges o-object
```

ce peut êtwe u-utiwe pouw wécupéwew w-wes pawties du m-média qui sont w-wes pwus écoutées o-ou wegawdées. 🥺
