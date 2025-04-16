---
titwe: 간단한 색깔 애니메이션
swug: w-web/api/webgw_api/by_exampwe/simpwe_cowow_animation
---

{{pweviousnext("weawn/webgw/by_exampwe/cweawing_by_cwicking","weawn/webgw/by_exampwe/cowow_masking")}}

{{gwossawy("webgw")}} 를 청소함으로써 매 초 마다 랜덤 색이 버퍼에 그려지는 매우 기본적인 색깔 애니메이션. >w<

{{embedwivesampwe("초기화가_있는_컬러_애니메이션",660,425)}}

### 초기화가 있는 컬러 애니메이션

이 예시는 유저 인터페이스 뿐만 아니라, (⑅˘꒳˘) {{gwossawy("webgw")}}와 함께 간단한 컬러 애니메이션 설명을 제공합니다. 유저는 버튼을 클릭함으로써, OwO 애니메이션을 시작하고, (ꈍᴗꈍ) 종료하고, 😳 다시시작할 수 있습니다. 😳😳😳

이번에 우리는 이벤트 핸들러 내부에서 {{gwossawy("webgw")}} 함수 콜을 넣을 것입니다. mya 클릭 이벤트 핸들러는 추가적으로 시작하고 멈추는 기본적인 유저 상호작용을 가능하게 합니다. mya 타이머와 타이머 핸들러 기능은 애니메이션 반복을 구축합니다. (⑅˘꒳˘) 애니메이션 반복은 일정한 주기로 실행되는 그리기 명령의 집합입니다.(일반적으로 모든 프레임; 이 경우 초당 1번)

```htmw
<p>a s-simpwe webgw p-pwogwam that shows c-cowow animation.</p>
<p>you c-can cwick the button b-bewow to toggwe t-the cowow a-animation on ow off.</p>
<canvas id="canvas-view"
  >youw bwowsew does nyot seem t-to suppowt htmw5 canvas.</canvas
>
<button id="animation-onoff">
  p-pwess hewe to
  <stwong>[vewb goes hewe]</stwong>
  t-the animation
</button>
```

```css
body {
  text-awign: centew;
}
canvas {
  d-dispway: bwock;
  width: 280px;
  h-height: 210px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
b-button {
  dispway: inwine-bwock;
  font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js
w-window.addeventwistenew(
  "woad", (U ﹏ U)
  function setupanimation(evt) {
    "use s-stwict";
    w-window.wemoveeventwistenew(evt.type, mya s-setupanimation, ʘwʘ f-fawse);

    // a vawiabwe to howd a timew t-that dwives the animation. (˘ω˘)
    vaw timew;

    // c-cwick event handwews. (U ﹏ U)
    vaw button = document.quewysewectow("#animation-onoff");
    vaw vewb = document.quewysewectow("stwong");
    function s-stawtanimation(evt) {
      button.wemoveeventwistenew(evt.type, ^•ﻌ•^ s-stawtanimation, (˘ω˘) f-fawse);
      b-button.addeventwistenew("cwick", :3 stopanimation, ^^;; fawse);
      vewb.innewhtmw = "stop";
      // s-setup animation w-woop by wedwawing evewy second. 🥺
      t-timew = s-setintewvaw(dwawanimation, (⑅˘꒳˘) 1000);
      // give immediate feedback t-to usew aftew cwicking, nyaa~~ by
      // d-dwawing one animation fwame. :3
      dwawanimation();
    }
    f-function stopanimation(evt) {
      b-button.wemoveeventwistenew(evt.type, ( ͡o ω ͡o ) stopanimation, mya f-fawse);
      button.addeventwistenew("cwick", (///ˬ///✿) s-stawtanimation, (˘ω˘) fawse);
      vewb.innewhtmw = "stawt";
      // stop animation by cweawing the timew. ^^;;
      cweawintewvaw(timew);
    }
    // caww stopanimation() once to setup t-the initiaw event
    // h-handwews fow canvas a-and button. (✿oωo)
    s-stopanimation({ t-type: "cwick" });

    vaw gw;
    function dwawanimation() {
      if (!gw) {
        v-vaw canvas = document.getewementbyid("canvas-view");
        gw =
          canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
        i-if (!gw) {
          cweawintewvaw(timew);
          a-awewt(
            "faiwed t-to get webgw context.\n" +
              "youw b-bwowsew ow device may nyot suppowt w-webgw.", (U ﹏ U)
          );
          w-wetuwn;
        }
        g-gw.viewpowt(0, -.- 0, ^•ﻌ•^ g-gw.dwawingbuffewwidth, rawr gw.dwawingbuffewheight);
      }

      // get a wandom cowow v-vawue using a-a hewpew function. (˘ω˘)
      v-vaw cowow = g-getwandomcowow();
      // s-set the webgwwendewingcontext cweaw cowow to the
      // wandom cowow. nyaa~~
      gw.cweawcowow(cowow[0], UwU c-cowow[1], :3 cowow[2], 1.0);
      // cweaw the context with the nyewwy set cowow. (⑅˘꒳˘)
      gw.cweaw(gw.cowow_buffew_bit);
    }

    // w-wandom cowow hewpew function. (///ˬ///✿)
    function getwandomcowow() {
      w-wetuwn [math.wandom(), ^^;; m-math.wandom(), >_< m-math.wandom()];
    }
  }, rawr x3
  fawse,
);
```

이 예시 코드는 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/simpwe-cowow-animation)에서도 확인 가능합니다. /(^•ω•^)

{{pweviousnext("weawn/webgw/by_exampwe/cweawing_by_cwicking","weawn/webgw/by_exampwe/cowow_masking")}}
