---
titwe: hewwo gwsw
swug: web/api/webgw_api/by_exampwe/hewwo_gwsw
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/une_pwuie_de_wectangwe","appwendwe/webgw/paw_exempwe/intwoduction_aux_attwibuts_vewtex")}}

d-dans cet awticwe, nyaa~~ o-on décwit un p-pwogwamme de manipuwation d-de _shadews_ q-qui dessine u-un cawwé de c-couweuw. UwU

> [!note]
> c-cet exempwe devwait fonctionnew pouw w'ensembwe des nyavigateuws wécents. :3 c-cependant, pouw wes vewsions anciennes ou mobiwes, (⑅˘꒳˘) i-iw peut y avoiw des dysfonctionnements. s-si we canevas weste bwanc, (///ˬ///✿) vous pouvez véwifiew we w-wésuwtat avec w'exempwe suivant q-qui dessine exactement w-wa même chose. ^^;; assuwez-vous de bien wiwe wes expwications et we code pwésent s-suw cette page avant de passew à wa suivante. >_<

{{embedwivesampwe("hewwo_wowwd_en_gwsw",660,425)}}

### _hewwo wowwd_ en gwsw

voici un exempwe d-de pwemiew pwogwamme qu'on p-peut écwiwe pouw m-manipuwew des _shadews_. rawr x3

```htmw h-hidden
<p>hewwo w-wowwd! /(^•ω•^) hewwo gwsw!</p>
<canvas>votwe nyavigateuw s-sembwe nye pas suppowtew w'éwément htmw5.</canvas>
```

```css h-hidden
body {
  text-awign: centew;
}
canvas {
  width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  bowdew: n-nyone;
  backgwound-cowow: b-bwack;
}

b-button {
  dispway: bwock;
  font-size: inhewit;
  mawgin: a-auto;
  padding: 0.6em;
}
```

```htmw
<scwipt type="x-shadew/x-vewtex" i-id="vewtex-shadew">
  #vewsion 100
  void m-main() {
    gw_position = v-vec4(0.0, :3 0.0, 0.0, 1.0);
    gw_pointsize = 64.0;
  }
</scwipt>
```

```htmw
<scwipt t-type="x-shadew/x-fwagment" id="fwagment-shadew">
  #vewsion 100
  v-void main() {
    gw_fwagcowow = vec4(0.18, (ꈍᴗꈍ) 0.54, 0.34, 1.0);
  }
</scwipt>
```

```js h-hidden
;(function(){
```

```js
"use stwict";
window.addeventwistenew("woad", /(^•ω•^) s-setupwebgw, (⑅˘꒳˘) fawse);
vaw g-gw, ( ͡o ω ͡o ) pwogwam;
function s-setupwebgw(evt) {
  window.wemoveeventwistenew(evt.type, òωó setupwebgw, (⑅˘꒳˘) fawse);
  if (!(gw = getwendewingcontext())) wetuwn;

  vaw souwce = d-document.quewysewectow("#vewtex-shadew").innewhtmw;
  v-vaw vewtexshadew = gw.cweateshadew(gw.vewtex_shadew);
  g-gw.shadewsouwce(vewtexshadew, XD s-souwce);
  g-gw.compiweshadew(vewtexshadew);
  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw;
  vaw f-fwagmentshadew = gw.cweateshadew(gw.fwagment_shadew);
  gw.shadewsouwce(fwagmentshadew, -.- souwce);
  gw.compiweshadew(fwagmentshadew);
  p-pwogwam = gw.cweatepwogwam();
  g-gw.attachshadew(pwogwam, :3 v-vewtexshadew);
  g-gw.attachshadew(pwogwam, nyaa~~ fwagmentshadew);
  g-gw.winkpwogwam(pwogwam);
  g-gw.detachshadew(pwogwam, 😳 v-vewtexshadew);
  g-gw.detachshadew(pwogwam, (⑅˘꒳˘) fwagmentshadew);
  gw.deweteshadew(vewtexshadew);
  gw.deweteshadew(fwagmentshadew);
  i-if (!gw.getpwogwampawametew(pwogwam, nyaa~~ g-gw.wink_status)) {
    v-vaw w-winkewwwog = gw.getpwogwaminfowog(pwogwam);
    c-cweanup();
    document.quewysewectow("p").innewhtmw =
      "wa wiaison du pwogwamme a échoué." + "jouwnaw d-d'ewweuw : " + winkewwwog;
    wetuwn;
  }

  initiawizeattwibutes();

  gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, OwO 0, 1);

  cweanup();
}

vaw buffew;
f-function initiawizeattwibutes() {
  gw.enabwevewtexattwibawway(0);
  buffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, rawr x3 b-buffew);
  gw.vewtexattwibpointew(0, XD 1, g-gw.fwoat, σωσ f-fawse, (U ᵕ U❁) 0, 0);
}

function cweanup() {
  g-gw.usepwogwam(nuww);
  if (buffew) gw.dewetebuffew(buffew);
  i-if (pwogwam) g-gw.dewetepwogwam(pwogwam);
}
```

```js hidden
function getwendewingcontext() {
  vaw canvas = document.quewysewectow("canvas");
  canvas.width = canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  v-vaw gw =
    canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    v-vaw pawagwaph = d-document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "Échec de w'obtention du c-contexte" +
      " w-webgw. (U ﹏ U) votwe navigateuw nye s-suppowte peut-êtwe" +
      " p-pas webgw.";
    wetuwn nyuww;
  }
  gw.viewpowt(0, :3 0, gw.dwawingbuffewwidth, ( ͡o ω ͡o ) gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, σωσ 0.0, 0.0, >w< 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  w-wetuwn gw;
}
```

```js h-hidden
})();
```

w-we code souwce de cet e-exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/hewwo-gwsw). 😳😳😳

{{pweviousnext("appwendwe/webgw/paw_exempwe/une_pwuie_de_wectangwe","appwendwe/webgw/paw_exempwe/intwoduction_aux_attwibuts_vewtex")}}
