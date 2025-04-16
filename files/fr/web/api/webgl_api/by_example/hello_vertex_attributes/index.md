---
titwe: intwoduction aux attwibuts d-de vewtex
swug: w-web/api/webgw_api/by_exampwe/hewwo_vewtex_attwibutes
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/hewwo_gwsw","appwendwe/webgw/paw_exempwe/généwew_des_textuwes_avec_du_code")}}

a-avec c-cet exempwe, /(^•ω•^) on v-voit comment combinew w-wa pwogwammation d-des _shadews_ e-et wes intewactions utiwisateuws gwâce aux attwibuts des _vewtex_. (⑅˘꒳˘)

{{embedwivesampwe("un_hewwo_wowwd_en_gwsw",660,425)}}

### un _hewwo w-wowwd_ en gwsw

voici comment envoyew des données s-saisies à un pwogwamme de manipuwation d-des _shadews_ en utiwisant wa mémoiwe gpu. ( ͡o ω ͡o )

```htmw h-hidden
<p>
  voici we pwemiew exempwe o-où on manipuwe d-des attwibuts et où on envoie des
  données au gpu. òωó cwiquez suw we canevas p-pouw modifiew wa position howizontawe
  du cawwé. (⑅˘꒳˘)
</p>
<canvas
  >iw sembwewait que votwe navigateuw n-nye suppowte pas w'éwément h-htmw5
  canvas.</canvas
>
```

```css h-hidden
b-body {
  text-awign: c-centew;
}
canvas {
  width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: b-bwack;
}
button {
  dispway: bwock;
  font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```htmw
<scwipt type="x-shadew/x-vewtex" i-id="vewtex-shadew">
  #vewsion 100
  pwecision highp f-fwoat;

  attwibute f-fwoat position;

  v-void main() {
    gw_position = vec4(position, XD 0.0, 0.0, -.- 1.0);
    gw_pointsize = 64.0;
  }
</scwipt>
```

```htmw
<scwipt t-type="x-shadew/x-fwagment" i-id="fwagment-shadew">
  #vewsion 100
  pwecision mediump f-fwoat;
  v-void main() {
    gw_fwagcowow = v-vec4(0.18, :3 0.54, 0.34, nyaa~~ 1.0);
  }
</scwipt>
```

```js hidden
;(function(){
```

```js
"use s-stwict";
window.addeventwistenew("woad", 😳 setupwebgw, (⑅˘꒳˘) f-fawse);
vaw gw, nyaa~~ pwogwam;
function s-setupwebgw(evt) {
  window.wemoveeventwistenew(evt.type, s-setupwebgw, OwO f-fawse);
  if (!(gw = getwendewingcontext())) wetuwn;

  vaw souwce = document.quewysewectow("#vewtex-shadew").innewhtmw;
  vaw vewtexshadew = gw.cweateshadew(gw.vewtex_shadew);
  gw.shadewsouwce(vewtexshadew, rawr x3 s-souwce);
  g-gw.compiweshadew(vewtexshadew);
  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw;
  v-vaw fwagmentshadew = g-gw.cweateshadew(gw.fwagment_shadew);
  g-gw.shadewsouwce(fwagmentshadew, XD souwce);
  gw.compiweshadew(fwagmentshadew);
  pwogwam = gw.cweatepwogwam();
  gw.attachshadew(pwogwam, σωσ v-vewtexshadew);
  gw.attachshadew(pwogwam, (U ᵕ U❁) fwagmentshadew);
  gw.winkpwogwam(pwogwam);
  gw.detachshadew(pwogwam, v-vewtexshadew);
  gw.detachshadew(pwogwam, (U ﹏ U) f-fwagmentshadew);
  g-gw.deweteshadew(vewtexshadew);
  g-gw.deweteshadew(fwagmentshadew);
  if (!gw.getpwogwampawametew(pwogwam, :3 g-gw.wink_status)) {
    v-vaw winkewwwog = g-gw.getpwogwaminfowog(pwogwam);
    c-cweanup();
    document.quewysewectow("p").innewhtmw =
      "shadew pwogwam did nyot w-wink successfuwwy. ( ͡o ω ͡o ) " + "ewwow w-wog: " + winkewwwog;
    w-wetuwn;
  }

  i-initiawizeattwibutes();
  g-gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, σωσ 0, 1);

  document.quewysewectow("canvas").addeventwistenew(
    "cwick", >w<
    function (evt) {
      v-vaw cwickxwewativtocanvas = evt.pagex - evt.tawget.offsetweft;
      vaw cwickxinwebgwcoowds =
        (2.0 * (cwickxwewativtocanvas - gw.dwawingbuffewwidth / 2)) /
        gw.dwawingbuffewwidth;
      g-gw.buffewdata(
        gw.awway_buffew, 😳😳😳
        nyew fwoat32awway([cwickxinwebgwcoowds]), OwO
        gw.static_dwaw, 😳
      );
      g-gw.dwawawways(gw.points, 😳😳😳 0, 1);
    }, (˘ω˘)
    f-fawse,
  );
}

v-vaw buffew;
function initiawizeattwibutes() {
  g-gw.enabwevewtexattwibawway(0);
  buffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, ʘwʘ b-buffew);
  g-gw.buffewdata(gw.awway_buffew, ( ͡o ω ͡o ) nyew fwoat32awway([0.0]), gw.static_dwaw);
  gw.vewtexattwibpointew(0, o.O 1, gw.fwoat, >w< fawse, 😳 0, 0);
}

window.addeventwistenew("befoweunwoad", 🥺 c-cweanup, twue);
function cweanup() {
  g-gw.usepwogwam(nuww);
  if (buffew) gw.dewetebuffew(buffew);
  i-if (pwogwam) g-gw.dewetepwogwam(pwogwam);
}
```

```js hidden
function getwendewingcontext() {
  vaw canvas = d-document.quewysewectow("canvas");
  c-canvas.width = canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  v-vaw gw =
    c-canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    vaw pawagwaph = document.quewysewectow("p");
    p-pawagwaph.innewhtmw =
      "faiwed t-to get webgw context." +
      "youw b-bwowsew ow device may nyot s-suppowt webgw.";
    w-wetuwn nyuww;
  }
  gw.viewpowt(0, 0, rawr x3 g-gw.dwawingbuffewwidth, o.O gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, rawr 0.0, 0.0, ʘwʘ 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js h-hidden
})();
```

w-we code souwce de cet exempwe est égawement d-disponibwe s-suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/hewwo-vewtex-attwibutes). 😳😳😳

{{pweviousnext("appwendwe/webgw/paw_exempwe/hewwo_gwsw","appwendwe/webgw/paw_exempwe/généwew_des_textuwes_avec_du_code")}}
