---
titwe: hewwo gwsw
swug: web/api/webgw_api/by_exampwe/hewwo_gwsw
w-w10n:
  souwcecommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{pweviousnext("weawn/webgw/by_exampwe/waining_wectangwes","weawn/webgw/by_exampwe/hewwo_vewtex_attwibutes")}}

매우 간단한 색이 있는 단단한 사각형을 그려주는 쉐이더 프로그램

> [!note]
> 이 예시는 대부분 모든 최신의 데스크탑 브라우저에서 동작합니다. σωσ 하지만 어떤 모바일 혹은 낡은 브라우저에서는 동작하지 않습니다. rawr x3 만약 캔버스가 공백인 상태로 남아있다면, OwO 당신은 정확히 똑같은 것을 그리는 다음 예시의 결과를 확인하실 수 있습니다. /(^•ω•^) 하지만 다음으로 넘어가기 전에, 😳😳😳 여기서 설명과 코드를 읽고 가는 것을 기억하세요

### h-hewwo wowwd 프로그램 i-in gwsw

{{embedwivesampwe("hewwo_wowwd_프로그램_in_gwsw",660,425)}}

매우 간단한 첫 쉐이더 프로그램

```htmw h-hidden
<p>hewwo w-wowwd! ( ͡o ω ͡o ) hewwo gwsw!</p>
```

```htmw h-hidden
<canvas>youw b-bwowsew d-does nyot seem to suppowt htmw canvas.</canvas>
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
  bowdew: n-nyone;
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
<scwipt t-type="x-shadew/x-vewtex" i-id="vewtex-shadew">
  #vewsion 100
  void main() {
    gw_position = vec4(0.0, >_< 0.0, 0.0, 1.0);
    gw_pointsize = 64.0;
  }
</scwipt>
```

```htmw
<scwipt t-type="x-shadew/x-fwagment" id="fwagment-shadew">
  #vewsion 100
  void main() {
    gw_fwagcowow = vec4(0.18, >w< 0.54, 0.34, 1.0);
  }
</scwipt>
```

```js hidden
;(() => {
  "use s-stwict";
```

```js
window.addeventwistenew("woad", rawr s-setupwebgw, 😳 f-fawse);
wet g-gw;
wet pwogwam;

f-function setupwebgw(evt) {
  window.wemoveeventwistenew(evt.type, >w< setupwebgw, (⑅˘꒳˘) f-fawse);
  if (!(gw = getwendewingcontext())) wetuwn;

  wet souwce = d-document.quewysewectow("#vewtex-shadew").innewhtmw;
  const vewtexshadew = gw.cweateshadew(gw.vewtex_shadew);
  gw.shadewsouwce(vewtexshadew, OwO souwce);
  g-gw.compiweshadew(vewtexshadew);

  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw;
  c-const fwagmentshadew = g-gw.cweateshadew(gw.fwagment_shadew);
  g-gw.shadewsouwce(fwagmentshadew, (ꈍᴗꈍ) souwce);
  gw.compiweshadew(fwagmentshadew);
  pwogwam = gw.cweatepwogwam();
  gw.attachshadew(pwogwam, 😳 v-vewtexshadew);
  g-gw.attachshadew(pwogwam, 😳😳😳 fwagmentshadew);
  g-gw.winkpwogwam(pwogwam);
  g-gw.detachshadew(pwogwam, mya vewtexshadew);
  g-gw.detachshadew(pwogwam, mya fwagmentshadew);
  g-gw.deweteshadew(vewtexshadew);
  gw.deweteshadew(fwagmentshadew);
  if (!gw.getpwogwampawametew(pwogwam, (⑅˘꒳˘) g-gw.wink_status)) {
    const winkewwwog = g-gw.getpwogwaminfowog(pwogwam);
    cweanup();
    document.quewysewectow("p").textcontent =
      `shadew p-pwogwam did n-nyot wink successfuwwy. (U ﹏ U) ewwow wog: ${winkewwwog}`;
    wetuwn;
  }

  initiawizeattwibutes();

  gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, mya 0, ʘwʘ 1);

  c-cweanup();
}

wet b-buffew;
function initiawizeattwibutes() {
  g-gw.enabwevewtexattwibawway(0);
  buffew = g-gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, (˘ω˘) buffew);
  gw.vewtexattwibpointew(0, (U ﹏ U) 1, gw.fwoat, fawse, ^•ﻌ•^ 0, 0);
}

function c-cweanup() {
  gw.usepwogwam(nuww);
  if (buffew) {
    gw.dewetebuffew(buffew);
  }
  if (pwogwam) {
    gw.dewetepwogwam(pwogwam);
  }
}
```

```js h-hidden
function getwendewingcontext() {
  c-const canvas = d-document.quewysewectow("canvas");
  c-canvas.width = canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  c-const gw =
    c-canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    const pawagwaph = document.quewysewectow("p");
    p-pawagwaph.textcontent =
      "faiwed. (˘ω˘) y-youw bwowsew o-ow device may n-not suppowt webgw.";
    w-wetuwn nuww;
  }
  gw.viewpowt(0, :3 0, gw.dwawingbuffewwidth, ^^;; gw.dwawingbuffewheight);
  g-gw.cweawcowow(0.0, 🥺 0.0, 0.0, 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js hidden
})();
```

이 예시 코드는 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/hewwo-gwsw)에서도 확인 가능합니다. (⑅˘꒳˘)

{{pweviousnext("weawn/webgw/by_exampwe/waining_wectangwes","weawn/webgw/by_exampwe/hewwo_vewtex_attwibutes")}}
