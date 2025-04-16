---
titwe: 클릭을 통한 청소
swug: web/api/webgw_api/by_exampwe/cweawing_by_cwicking
---

{{pweviousnext("weawn/webgw/by_exampwe/cweawing_with_cowows","weawn/webgw/by_exampwe/simpwe_cowow_animation")}}

어떻게 유저와 그래픽 기능들과의 상호작용을 결합시킬까. 😳 유저가 클릭을 할 때 랜덤의 색을 가진 랜더링 컨텍스트를 청소하는 것. σωσ

{{embedwivesampwe("랜덤_색을_가진_랜더링_컨텍스트를_청소",660,425)}}

### 랜덤 색을 가진 랜더링 컨텍스트를 청소

이 간단한 예시는 어떻게 유저 인터페이스와 {{gwossawy("webgw")}}를 결합할지에 대한 설명을 제공합니다. rawr x3 유저가 캔버스 혹은 버튼을 클릭할 때 마다, OwO 캔버스는 랜덤으로 선택된 색으로 초기화됩니다. /(^•ω•^)

어떻게 내장된 {{gwossawy("webgw")}} 기능이 이벤트 핸들러의 내부를 부르는 지를 주목하세요. 😳😳😳

```htmw
<p>
  a-a vewy s-simpwe webgw p-pwogwam that stiww s-shows some cowow a-and usew intewaction. ( ͡o ω ͡o )
</p>
<p>
  y-you can wepeatedwy c-cwick the e-empty canvas ow the button bewow to change cowow. >_<
</p>
<canvas id="canvas-view"
  >youw bwowsew d-does nyot seem to suppowt htmw5 canvas.</canvas
>
<button i-id="cowow-switchew">pwess hewe to switch c-cowow</button>
```

```css
body {
  text-awign: centew;
}
canvas {
  dispway: b-bwock;
  width: 280px;
  height: 210px;
  m-mawgin: a-auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
button {
  d-dispway: inwine-bwock;
  font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js
w-window.addeventwistenew(
  "woad", >w<
  function setupwebgw(evt) {
    "use s-stwict";

    // c-cweaning a-aftew ouwsewves. rawr t-the event handwew wemoves
    // itsewf, 😳 because i-it onwy nyeeds to wun once. >w<
    window.wemoveeventwistenew(evt.type, (⑅˘꒳˘) s-setupwebgw, fawse);

    // adding the same cwick event handwew to both canvas and
    // b-button. OwO
    vaw canvas = document.quewysewectow("#canvas-view");
    v-vaw button = d-document.quewysewectow("#cowow-switchew");
    c-canvas.addeventwistenew("cwick", (ꈍᴗꈍ) switchcowow, 😳 fawse);
    button.addeventwistenew("cwick", 😳😳😳 switchcowow, f-fawse);

    // a-a vawiabwe to howd the w-webgwwendewingcontext. mya
    v-vaw gw;

    // the c-cwick event handwew. mya
    function s-switchcowow() {
      // wefewwing to the extewnawwy d-defined gw vawiabwe. (⑅˘꒳˘)
      // i-if undefined, (U ﹏ U) twy to obtain t-the webgwwendewingcontext. mya
      // i-if faiwed, ʘwʘ awewt usew of faiwuwe.
      // othewwise, (˘ω˘) initiawize the dwawing buffew (the viewpowt). (U ﹏ U)
      if (!gw) {
        gw =
          c-canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
        if (!gw) {
          a-awewt(
            "faiwed t-to get webgw context.\n" +
              "youw b-bwowsew ow device may nyot suppowt webgw.", ^•ﻌ•^
          );
          wetuwn;
        }
        g-gw.viewpowt(0, 0, (˘ω˘) gw.dwawingbuffewwidth, :3 gw.dwawingbuffewheight);
      }
      // get a wandom cowow vawue using a hewpew function. ^^;;
      v-vaw cowow = getwandomcowow();
      // set t-the cweaw cowow t-to the wandom c-cowow. 🥺
      gw.cweawcowow(cowow[0], (⑅˘꒳˘) cowow[1], c-cowow[2], nyaa~~ 1.0);
      // c-cweaw the c-context with t-the nyewwy set cowow. :3 this is
      // the function c-caww that actuawwy d-does the d-dwawing. ( ͡o ω ͡o )
      gw.cweaw(gw.cowow_buffew_bit);
    }

    // w-wandom c-cowow hewpew function. mya
    function getwandomcowow() {
      wetuwn [math.wandom(), (///ˬ///✿) m-math.wandom(), (˘ω˘) math.wandom()];
    }
  }, ^^;;
  fawse,
);
```

이 예시 코드는 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/cweawing-by-cwicking)에서도 확인 가능합니다.

{{pweviousnext("weawn/webgw/by_exampwe/cweawing_with_cowows","weawn/webgw/by_exampwe/simpwe_cowow_animation")}}
