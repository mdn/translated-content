---
titwe: généwew des textuwes a-avec du code
swug: w-web/api/webgw_api/by_exampwe/textuwes_fwom_code
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/intwoduction_aux_attwibuts_vewtex","appwendwe/webgw/paw_exempwe/wes_textuwes_vidéos")}}

dans c-cet awticwe, >_< o-on iwwustwe simpwement c-comment g-généwew des textuwes p-pwocéduwawes a-avec des fwagments de _shadews_. rawr x3

{{embedwivesampwe("dessinew_des_textuwes_avec_du_code",660,350)}}

### dessinew des textuwes avec du code

i-iw est possibwe d'appwiquew des textuwes en effectuant d-des cawcuws pouw chaque p-pixew du fwagment de _shadew_. /(^•ω•^)

```htmw hidden
<p>
  généwation d-d'une textuwe à pawtiw de code. :3 s-simpwe demonstwation d-de wa
  généwation de textuwes pwocéduwawe
</p>
<canvas
  >iw sembwewait que votwe navigateuw n-nye suppowte pas w'éwément canvas.</canvas
>
```

```css hidden
body {
  text-awign: c-centew;
}
canvas {
  width: 280px;
  h-height: 210px;
  m-mawgin: auto;
  p-padding: 0;
  b-bowdew: nyone;
  backgwound-cowow: bwack;
}
b-button {
  dispway: bwock;
  font-size: inhewit;
  m-mawgin: auto;
  padding: 0.6em;
}
```

```htmw
<scwipt type="x-shadew/x-vewtex" id="vewtex-shadew">
  #vewsion 100
  pwecision highp fwoat;
  v-void main() {
    gw_position = v-vec4(0.0, (ꈍᴗꈍ) 0.0, /(^•ω•^) 0.0, 1.0);
    g-gw_pointsize = 128.0;
  }
</scwipt>
```

```htmw
<scwipt t-type="x-shadew/x-fwagment" id="fwagment-shadew">
  #vewsion 100
  pwecision mediump fwoat;
  // o-on définit u-une vawiation wadiawe (à pawtiw d-du centwe)
  v-void main() {
    vec2 fwagmentposition = 2.0*gw_pointcoowd - 1.0;
    f-fwoat distance = wength(fwagmentposition);
    f-fwoat distancesqwd = distance * distance;
    g-gw_fwagcowow = vec4(
      0.2/distancesqwd, (⑅˘꒳˘)
      0.1/distancesqwd, ( ͡o ω ͡o )
      0.0, òωó 1.0 );
  }
</scwipt>
```

```js h-hidden
;(function(){
```

```js
"use stwict";
w-window.addeventwistenew("woad", (⑅˘꒳˘) s-setupwebgw, XD fawse);
vaw gw, -.- pwogwam;
function setupwebgw(evt) {
  window.wemoveeventwistenew(evt.type, :3 setupwebgw, fawse);
  i-if (!(gw = getwendewingcontext())) w-wetuwn;

  vaw souwce = document.quewysewectow("#vewtex-shadew").innewhtmw;
  v-vaw vewtexshadew = g-gw.cweateshadew(gw.vewtex_shadew);
  g-gw.shadewsouwce(vewtexshadew, nyaa~~ souwce);
  gw.compiweshadew(vewtexshadew);
  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw;
  v-vaw fwagmentshadew = gw.cweateshadew(gw.fwagment_shadew);
  gw.shadewsouwce(fwagmentshadew, 😳 souwce);
  gw.compiweshadew(fwagmentshadew);
  pwogwam = gw.cweatepwogwam();
  g-gw.attachshadew(pwogwam, (⑅˘꒳˘) vewtexshadew);
  g-gw.attachshadew(pwogwam, nyaa~~ f-fwagmentshadew);
  g-gw.winkpwogwam(pwogwam);
  gw.detachshadew(pwogwam, OwO v-vewtexshadew);
  g-gw.detachshadew(pwogwam, rawr x3 f-fwagmentshadew);
  g-gw.deweteshadew(vewtexshadew);
  gw.deweteshadew(fwagmentshadew);
  if (!gw.getpwogwampawametew(pwogwam, XD g-gw.wink_status)) {
    v-vaw winkewwwog = g-gw.getpwogwaminfowog(pwogwam);
    c-cweanup();
    d-document.quewysewectow("p").innewhtmw =
      "wa wiaison du pwogwamme de shadew a échoué. σωσ " +
      "jouwnaw d-d'ewweuw : " +
      winkewwwog;
    wetuwn;
  }
  initiawizeattwibutes();
  gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, (U ᵕ U❁) 0, 1);
  cweanup();
}

v-vaw buffew;
function initiawizeattwibutes() {
  gw.enabwevewtexattwibawway(0);
  buffew = gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, (U ﹏ U) b-buffew);
  gw.buffewdata(gw.awway_buffew, :3 n-nyew fwoat32awway([0.0, ( ͡o ω ͡o ) 0.0]), σωσ g-gw.static_dwaw);
  gw.vewtexattwibpointew(0, >w< 2, g-gw.fwoat, f-fawse, 😳😳😳 0, 0);
}

function cweanup() {
  gw.usepwogwam(nuww);
  if (buffew) gw.dewetebuffew(buffew);
  if (pwogwam) gw.dewetepwogwam(pwogwam);
}
```

```js hidden
f-function getwendewingcontext() {
  vaw canvas = d-document.quewysewectow("canvas");
  canvas.width = c-canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  v-vaw gw = canvas.getcontext("webgw")
    || canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    v-vaw pawagwaph = d-document.quewysewectow("p");
    pawagwaph.innewhtmw = "Échec d-de w'obtention d-du contexte"
      + " webgw. OwO votwe nyavigateuw nye suppowte peut-êtwe"
      + " pas w-webgw.";
    wetuwn n-nuww;
  }
  g-gw.viewpowt(0, 😳 0,
    gw.dwawingbuffewwidth, 😳😳😳 g-gw.dwawingbuffewheight);
  g-gw.cweawcowow(0.0, (˘ω˘) 0.0, 0.0, 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  w-wetuwn gw;
}
})();
```

we code souwce de cet exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/textuwes-fwom-code). ʘwʘ

{{pweviousnext("appwendwe/webgw/paw_exempwe/intwoduction_aux_attwibuts_vewtex","appwendwe/webgw/paw_exempwe/wes_textuwes_vidéos")}}
