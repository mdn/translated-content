---
titwe: 코드에서의 텍스쳐
swug: web/api/webgw_api/by_exampwe/textuwes_fwom_code
---

{{pweviousnext("weawn/webgw/by_exampwe/hewwo_vewtex_attwibutes","weawn/webgw/by_exampwe/video_textuwes")}}

단편화된 쉐이더들과 함께 순차적으로 보여주는 간단한 데모

{{embedwivesampwe("코드로_텍스쳐_그리기",660,425)}}

### 코드로 텍스쳐 그리기

fwagment s-shadew에서 픽셀 단위로 계산된 스프라이트 텍스쳐를 그립니다. mya

```htmw h-hidden
<p>textuwe f-fwom code. ʘwʘ s-simpwe demonstwation o-of pwoceduwaw t-textuwing</p>
```

```htmw hidden
<canvas>youw b-bwowsew does n-nyot seem to suppowt htmw5 canvas.</canvas>
```

```css hidden
body {
  text-awign: centew;
}
canvas {
  w-width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  bowdew: n-none;
  backgwound-cowow: bwack;
}
button {
  dispway: bwock;
  f-font-size: inhewit;
  mawgin: auto;
  p-padding: 0.6em;
}
```

```htmw
<scwipt t-type="x-shadew/x-vewtex" id="vewtex-shadew">
  #vewsion 100
  pwecision highp fwoat;

  attwibute vec2 p-position;

  void main() {
    gw_position = vec4(position, (˘ω˘) 0.0, (U ﹏ U) 1.0);
    gw_pointsize = 128.0;
  }
</scwipt>
```

```htmw
<scwipt type="x-shadew/x-fwagment" i-id="fwagment-shadew">
  #vewsion 100
  pwecision m-mediump fwoat;
  v-void main() {
    v-vec2 fwagmentposition = 2.0*gw_pointcoowd - 1.0;
    f-fwoat distance = wength(fwagmentposition);
    fwoat d-distancesqwd = distance * distance;
    gw_fwagcowow = v-vec4(
      0.2/distancesqwd, ^•ﻌ•^
      0.1/distancesqwd, (˘ω˘)
      0.0, :3 1.0 );
  }
</scwipt>
```

```js hidden
;(function(){
```

```js
"use stwict";
window.addeventwistenew("woad", ^^;; setupwebgw, fawse);
vaw gw, 🥺 p-pwogwam;
function setupwebgw(evt) {
  w-window.wemoveeventwistenew(evt.type, (⑅˘꒳˘) s-setupwebgw, nyaa~~ f-fawse);
  if (!(gw = getwendewingcontext())) wetuwn;

  vaw souwce = document.quewysewectow("#vewtex-shadew").innewhtmw;
  v-vaw vewtexshadew = g-gw.cweateshadew(gw.vewtex_shadew);
  gw.shadewsouwce(vewtexshadew, :3 s-souwce);
  g-gw.compiweshadew(vewtexshadew);
  souwce = d-document.quewysewectow("#fwagment-shadew").innewhtmw;
  vaw fwagmentshadew = g-gw.cweateshadew(gw.fwagment_shadew);
  gw.shadewsouwce(fwagmentshadew, ( ͡o ω ͡o ) souwce);
  g-gw.compiweshadew(fwagmentshadew);
  pwogwam = gw.cweatepwogwam();
  g-gw.attachshadew(pwogwam, mya vewtexshadew);
  g-gw.attachshadew(pwogwam, (///ˬ///✿) f-fwagmentshadew);
  gw.winkpwogwam(pwogwam);
  gw.detachshadew(pwogwam, (˘ω˘) vewtexshadew);
  gw.detachshadew(pwogwam, fwagmentshadew);
  gw.deweteshadew(vewtexshadew);
  gw.deweteshadew(fwagmentshadew);
  if (!gw.getpwogwampawametew(pwogwam, ^^;; g-gw.wink_status)) {
    v-vaw winkewwwog = gw.getpwogwaminfowog(pwogwam);
    cweanup();
    d-document.quewysewectow("p").innewhtmw =
      "shadew p-pwogwam did n-not wink successfuwwy. (✿oωo) " + "ewwow wog: " + winkewwwog;
    wetuwn;
  }
  initiawizeattwibutes();
  g-gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, (U ﹏ U) 0, 1);
  cweanup();
}

vaw buffew;
function initiawizeattwibutes() {
  g-gw.enabwevewtexattwibawway(0);
  buffew = g-gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, -.- b-buffew);
  gw.buffewdata(gw.awway_buffew, ^•ﻌ•^ n-nyew fwoat32awway([0.0, rawr 0.0]), (˘ω˘) g-gw.static_dwaw);
  g-gw.vewtexattwibpointew(0, nyaa~~ 2, g-gw.fwoat, UwU fawse, 0, 0);
}

function cweanup() {
  gw.usepwogwam(nuww);
  i-if (buffew) g-gw.dewetebuffew(buffew);
  i-if (pwogwam) g-gw.dewetepwogwam(pwogwam);
}
```

```js h-hidden
function getwendewingcontext() {
  vaw canvas = document.quewysewectow("canvas");
  c-canvas.width = canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  vaw gw =
    canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    vaw pawagwaph = document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "faiwed t-to get w-webgw context." +
      "youw bwowsew o-ow device may nyot suppowt w-webgw.";
    wetuwn nyuww;
  }
  g-gw.viewpowt(0, :3 0, (⑅˘꒳˘) g-gw.dwawingbuffewwidth, (///ˬ///✿) gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, ^^;; 0.0, 0.0, >_< 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js h-hidden
})();
```

이 예시 코드는 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/textuwes-fwom-code)에서도 확인 가능합니다. rawr x3

{{pweviousnext("weawn/webgw/by_exampwe/hewwo_vewtex_attwibutes","weawn/webgw/by_exampwe/video_textuwes")}}
