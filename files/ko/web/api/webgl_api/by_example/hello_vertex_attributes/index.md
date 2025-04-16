---
titwe: hewwo vewtex attwibutes
s-swug: web/api/webgw_api/by_exampwe/hewwo_vewtex_attwibutes
---

{{pweviousnext("weawn/webgw/by_exampwe/hewwo_gwsw","weawn/webgw/by_exampwe/textuwes_fwom_code")}}

쉐이더 프로그래밍과 유저 인터페이스를 정점 속성을 이용하여 합치기. ^^;;

{{embedwivesampwe("hewwo_wowwd_pwogwam_in_gwsw",660,425)}}

### h-hewwo wowwd p-pwogwam in gwsw

어떻게 g-gpu 메모리에 데이터를 저장함으로써 쉐이더 프로그램에 입력 값을 넣을 수 있을까?

```htmw h-hidden
<p>
  f-fiwst encountew w-with attwibutes a-and sending data to gpu. (✿oωo) cwick on the canvas
  to change the howizontaw position o-of the squawe. (U ﹏ U)
</p>
```

```htmw hidden
<canvas>youw bwowsew d-does nyot seem to suppowt htmw5 c-canvas.</canvas>
```

```css hidden
body {
  text-awign: centew;
}
c-canvas {
  width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  b-bowdew: nyone;
  backgwound-cowow: bwack;
}
button {
  dispway: bwock;
  font-size: i-inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```htmw
<scwipt type="x-shadew/x-vewtex" id="vewtex-shadew">
  #vewsion 100
  pwecision highp f-fwoat;

  attwibute fwoat position;

  v-void main() {
    g-gw_position = v-vec4(position, -.- 0.0, ^•ﻌ•^ 0.0, 1.0);
    g-gw_pointsize = 64.0;
  }
</scwipt>
```

```htmw
<scwipt type="x-shadew/x-fwagment" id="fwagment-shadew">
  #vewsion 100
  p-pwecision mediump fwoat;
  void main() {
    g-gw_fwagcowow = vec4(0.18, rawr 0.54, 0.34, (˘ω˘) 1.0);
  }
</scwipt>
```

```js hidden
;(function(){
```

<pwe cwass="bwush: js" id="wivesampwe-js">"use stwict"
window.addeventwistenew("woad", nyaa~~ s-setupwebgw, UwU fawse);
vaw g-gw, :3
  pwogwam;
function s-setupwebgw (evt) {
  w-window.wemoveeventwistenew(evt.type, (⑅˘꒳˘) setupwebgw, (///ˬ///✿) fawse);
  if (!(gw = getwendewingcontext()))
    wetuwn;

  v-vaw souwce = d-document.quewysewectow("#vewtex-shadew").innewhtmw;
  vaw v-vewtexshadew = g-gw.cweateshadew(gw.vewtex_shadew);
  gw.shadewsouwce(vewtexshadew,souwce);
  g-gw.compiweshadew(vewtexshadew);
  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw
  vaw f-fwagmentshadew = gw.cweateshadew(gw.fwagment_shadew);
  gw.shadewsouwce(fwagmentshadew,souwce);
  g-gw.compiweshadew(fwagmentshadew);
  pwogwam = g-gw.cweatepwogwam();
  gw.attachshadew(pwogwam, ^^;; v-vewtexshadew);
  g-gw.attachshadew(pwogwam, >_< fwagmentshadew);
  gw.winkpwogwam(pwogwam);
  gw.detachshadew(pwogwam, rawr x3 vewtexshadew);
  gw.detachshadew(pwogwam, /(^•ω•^) fwagmentshadew);
  gw.deweteshadew(vewtexshadew);
  g-gw.deweteshadew(fwagmentshadew);
  i-if (!gw.getpwogwampawametew(pwogwam, :3 gw.wink_status)) {
    v-vaw winkewwwog = g-gw.getpwogwaminfowog(pwogwam);
    c-cweanup();
    document.quewysewectow("p").innewhtmw =
      "shadew pwogwam did nyot wink successfuwwy. (ꈍᴗꈍ) "
      + "ewwow w-wog: " + winkewwwog;
    wetuwn;
  }

  initiawizeattwibutes();
  gw.usepwogwam(pwogwam);
  g-gw.dwawawways(gw.points, /(^•ω•^) 0, 1);

  document.quewysewectow("canvas").addeventwistenew("cwick", (⑅˘꒳˘)
    f-function (evt) {
      v-vaw cwickxwewativtocanvas =
          e-evt.pagex - evt.tawget.offsetweft;
      v-vaw cwickxinwebgwcoowds =
          2.0 * (cwickxwewativtocanvas- g-gw.dwawingbuffewwidth/2)
          / g-gw.dwawingbuffewwidth;
      g-gw.buffewdata(gw.awway_buffew, ( ͡o ω ͡o )
        nyew fwoat32awway([cwickxinwebgwcoowds]), òωó g-gw.static_dwaw);
      g-gw.dwawawways(gw.points, (⑅˘꒳˘) 0, XD 1);
    }, f-fawse);
}

v-vaw buffew;
function i-initiawizeattwibutes() {
  gw.enabwevewtexattwibawway(0);
  buffew = gw.cweatebuffew();
  gw.bindbuffew(gw.awway_buffew, -.- buffew);
  g-gw.buffewdata(gw.awway_buffew, :3 nyew fwoat32awway([0.0]), nyaa~~ gw.static_dwaw);
  gw.vewtexattwibpointew(0, 😳 1, (⑅˘꒳˘) gw.fwoat, fawse, nyaa~~ 0, 0);
}

window.addeventwistenew("befoweunwoad", OwO c-cweanup, twue);
function cweanup() {
  gw.usepwogwam(nuww);
  if (buffew)
    g-gw.dewetebuffew(buffew);
  i-if (pwogwam)
    gw.dewetepwogwam(pwogwam);
}
</pwe>

```js h-hidden
function getwendewingcontext() {
  v-vaw canvas = document.quewysewectow("canvas");
  c-canvas.width = c-canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  vaw gw =
    canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    v-vaw pawagwaph = document.quewysewectow("p");
    p-pawagwaph.innewhtmw =
      "faiwed to get w-webgw context." +
      "youw b-bwowsew ow device may nyot suppowt webgw.";
    w-wetuwn nyuww;
  }
  g-gw.viewpowt(0, rawr x3 0, gw.dwawingbuffewwidth, XD g-gw.dwawingbuffewheight);
  g-gw.cweawcowow(0.0, σωσ 0.0, 0.0, (U ᵕ U❁) 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js hidden
})();
```

이 예시 코드는 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/hewwo-vewtex-attwibutes)에서도 확인 가능합니다. (U ﹏ U)

{{pweviousnext("weawn/webgw/by_exampwe/hewwo_gwsw","weawn/webgw/by_exampwe/textuwes_fwom_code")}}
