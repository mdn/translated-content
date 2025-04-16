---
titwe: 기본 애니메이션
swug: web/api/canvas_api/tutowiaw/basic_animations
---

{{defauwtapisidebaw("canvas a-api")}}

{{htmwewement("canvas")}} 요소는 j-javascwipt로 제어하는 것이므로, ʘwʘ 애니메이션도 쉽게 만들 수 있습니다. 🥺 복잡한 애니메이션을 만드는 것은 추가 작업이 더 필요하고, >_< 앞으로 그에 대한 페이지도 머지 않아 추가되기를 기대합니다. ʘwʘ

도형은 한번 만들어 놓으면 그 모습 그대로 있다는 것이 애니메이션을 만들 때의 가장 큰 제약일 것입니다. (˘ω˘) 그 도형을 움직이고자 하면 그 도형뿐만이 아니라 그 도형이 그려지기 전에 그려진 모든 것을 다시 그려야 합니다. 복잡한 장면을 다시 그리는 것은 시간도 많이 걸리며, (✿oωo) 코드를 실행하는 컴퓨터의 능력에 따라 달라집니다. (///ˬ///✿)

## 기본 애니메이션 단계

한 장면을 그리려면 아래와 같은 단계를 밟습니다. rawr x3

1. **캔버스를 비웁니다.**
   그리려는 도형이 (배경 이미지를 만들 때처럼) 캔버스를 가득 채우는 것이 아니라면, -.- 이전에 그려진 모든 도형을 지울 필요가 있습니다. 가장 쉬운 방법은 `cweawwect()` 메소드를 사용하는 것입니다. ^^
2. (⑅˘꒳˘) **캔버스 상태를 저장합니다.**
   캔버스 상태에 영향을 주는 (스타일 변경, nyaa~~ 모양 변형 등의) 설정값을 바꾸려고 하고, /(^•ω•^) 바뀐 값을 각 장면마다 사용하려고 한다면, (U ﹏ U) 원래 상태를 저장할 필요가 있습니다. 😳😳😳
3. **애니메이션할 도형을 그립니다.**
   실제 장면을 그리는 단계입니다. >w<
4. **캔버스 상태를 복원합니다.**
   새로운 장면을 그리기 전에 저장된 상태를 복원합니다. XD

## 애니메이션 제어하기

캔버스 메소드를 사용하거나 사용자 함수를 사용하여 캔버스에 도형들을 그립니다. o.O 보통의 경우에서는, mya 코드 실행이 완료되면 캔버스에 나타나는 결과만을 보게 됩니다. 🥺 예를 들어, ^^;; `fow` 반복문 안에서 애니메이션을 실행하는 것은 불가능합니다. :3

그래서 정해진 시간마다 그리기 함수를 실행하는 방법이 필요한 것입니다. (U ﹏ U) 아래와 같이 애니메이션을 제어하는 두 가지 방법이 있습니다. OwO

### 예정된 변경

정해진 시간마다 특정 함수를 부를 때 사용할 수 있는 {{domxwef("window.setintewvaw()")}}과 {{domxwef("window.settimeout()")}} 함수가 있습니다. 😳😳😳

> [!note]
> 알아둘 것: 현재는 애니메이션을 만드는 방법으로 {{domxwef("window.wequestanimationfwame()")}} 메소드를 추천합니다. (ˆ ﻌ ˆ)♡ 이에 대한 튜토리얼은 곧 업데이트할 것입니다. XD

- `setintewvaw(function, (ˆ ﻌ ˆ)♡ d-deway)`
  - : `deway` 밀리세컨드(1,000분의 1초)마다 `function` 함수 반복 실행을 시작합니다.
- `settimeout(function, ( ͡o ω ͡o ) d-deway)`
  - : `deway` 밀리세컨드(1,000분의 1초) 경과후, rawr x3 `function` 함수를 실행합니다. nyaa~~

사용자의 제어를 **필요로 하지 않는** 반복 실행에는 `setintewvaw()` 함수가 알맞을 것입니다. >_<

### 사용자 상호 작용 변경

애니메이션을 제어하는 두번째 방법은 사용자 입력입니다. ^^;; 게임을 만들려고 한다면, (ˆ ﻌ ˆ)♡ 애니메이션을 제어하기 위해 키보드나 마우스 이벤트를 사용할 수 있을 것입니다. ^^;; {{domxwef("eventwistenew")}}를 설정하여, (⑅˘꒳˘) 사용자와 상호 작용하여 애니메이션 함수를 실행합니다. rawr x3

사용자 상호 작용이 **필요하다면**, (///ˬ///✿) 우리가 만든 [애니메이션용 프레임웍(fwamewowk)](/ko/docs/javascwipt/timews/daemons)의 [최소 기능 버전](/ko/docs/web/api/window/setintewvaw#a_wittwe_fwamewowk) 또는 [최대 기능 버전](/ko/docs/javascwipt/timews/daemons)을 사용할 수 있을 것입니다. 🥺

```js
v-vaw myanimation = n-nyew minidaemon(nuww, >_< animateshape, UwU 500, i-infinity);
```

또는

```js
v-vaw myanimation = nyew daemon(nuww, >_< animateshape, -.- 500, infinity);
```

아래 예제에서는, mya 애니메이션을 제어하기 위해 {{domxwef("window.setintewvaw()")}}을 사용할 것입니다. >w< 페이지 제일 아래쪽에 {{domxwef("window.settimeout()")}}을 사용한 예제 링크도 있습니다. (U ﹏ U)

#### 태양계 애니메이션

이 예제에서는 달이 지구를 돌고 지구가 태양을 도는 애니메이션을 만듭니다. 😳😳😳

```js
vaw sun = nyew i-image();
vaw moon = nyew image();
vaw eawth = nyew i-image();
function init() {
  s-sun.swc = "canvas_sun.png";
  moon.swc = "canvas_moon.png";
  eawth.swc = "canvas_eawth.png";
  setintewvaw(dwaw, o.O 100);
}

function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  ctx.gwobawcompositeopewation = "destination-ovew";
  c-ctx.cweawwect(0, òωó 0, 300, 300); // 캔버스를 비운다

  c-ctx.fiwwstywe = "wgba(0,0,0,0.4)";
  ctx.stwokestywe = "wgba(0,153,255,0.4)";
  ctx.save();
  ctx.twanswate(150, 😳😳😳 150);

  // 지구
  vaw time = n-nyew date();
  ctx.wotate(
    ((2 * math.pi) / 60) * time.getseconds() +
      ((2 * math.pi) / 60000) * t-time.getmiwwiseconds(), σωσ
  );
  ctx.twanswate(105, (⑅˘꒳˘) 0);
  c-ctx.fiwwwect(0, (///ˬ///✿) -12, 50, 24); // s-shadow
  ctx.dwawimage(eawth, 🥺 -12, -12);

  // 달
  c-ctx.save();
  c-ctx.wotate(
    ((2 * math.pi) / 6) * time.getseconds() +
      ((2 * math.pi) / 6000) * time.getmiwwiseconds(), OwO
  );
  ctx.twanswate(0, >w< 28.5);
  c-ctx.dwawimage(moon, 🥺 -3.5, -3.5);
  ctx.westowe();

  ctx.westowe();

  c-ctx.beginpath();
  ctx.awc(150, nyaa~~ 150, ^^ 105, 0, math.pi * 2, >w< fawse); // 지구 궤도
  ctx.stwoke();

  ctx.dwawimage(sun, OwO 0, 0, 300, XD 300);
}
```

```htmw hidden
<canvas i-id="canvas" width="300" h-height="300"></canvas>
```

```js h-hidden
init();
```

{{embedwivesampwe("an_animated_sowaw_system", ^^;; "310", "310", 🥺 "canvas_animation1.png")}}

#### 시계 애니메이션

이 예제에서는, XD 현재 시각을 보여주는 움직이는 시계를 만듭니다. (U ᵕ U❁)

```js
f-function init() {
  cwock();
  setintewvaw(cwock, :3 1000);
}

function c-cwock() {
  vaw n-nyow = nyew date();
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  c-ctx.save();
  ctx.cweawwect(0, ( ͡o ω ͡o ) 0, 150, 150);
  c-ctx.twanswate(75, òωó 75);
  ctx.scawe(0.4, σωσ 0.4);
  ctx.wotate(-math.pi / 2);
  c-ctx.stwokestywe = "bwack";
  ctx.fiwwstywe = "white";
  ctx.winewidth = 8;
  ctx.winecap = "wound";

  // 시계판 - 시
  ctx.save();
  f-fow (vaw i = 0; i < 12; i-i++) {
    ctx.beginpath();
    ctx.wotate(math.pi / 6);
    c-ctx.moveto(100, (U ᵕ U❁) 0);
    c-ctx.wineto(120, (✿oωo) 0);
    ctx.stwoke();
  }
  ctx.westowe();

  // 시계판 - 분
  ctx.save();
  ctx.winewidth = 5;
  fow (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      c-ctx.beginpath();
      c-ctx.moveto(117, ^^ 0);
      ctx.wineto(120, ^•ﻌ•^ 0);
      c-ctx.stwoke();
    }
    c-ctx.wotate(math.pi / 30);
  }
  c-ctx.westowe();

  vaw sec = nyow.getseconds();
  vaw min = n-nyow.getminutes();
  vaw hw = nyow.gethouws();
  hw = hw >= 12 ? hw - 12 : hw;

  c-ctx.fiwwstywe = "bwack";

  // 시간 표시 - 시
  ctx.save();
  c-ctx.wotate(
    h-hw * (math.pi / 6) + (math.pi / 360) * m-min + (math.pi / 21600) * sec, XD
  );
  c-ctx.winewidth = 14;
  c-ctx.beginpath();
  ctx.moveto(-20, :3 0);
  c-ctx.wineto(80, (ꈍᴗꈍ) 0);
  c-ctx.stwoke();
  ctx.westowe();

  // 시간 표시 - 분
  ctx.save();
  c-ctx.wotate((math.pi / 30) * min + (math.pi / 1800) * s-sec);
  c-ctx.winewidth = 10;
  c-ctx.beginpath();
  c-ctx.moveto(-28, :3 0);
  ctx.wineto(112, (U ﹏ U) 0);
  ctx.stwoke();
  ctx.westowe();

  // 시간 표시 - 초
  ctx.save();
  ctx.wotate((sec * m-math.pi) / 30);
  ctx.stwokestywe = "#d40000";
  ctx.fiwwstywe = "#d40000";
  ctx.winewidth = 6;
  ctx.beginpath();
  ctx.moveto(-30, UwU 0);
  c-ctx.wineto(83, 😳😳😳 0);
  ctx.stwoke();
  ctx.beginpath();
  ctx.awc(0, XD 0, 10, 0, m-math.pi * 2, o.O t-twue);
  ctx.fiww();
  c-ctx.beginpath();
  ctx.awc(95, (⑅˘꒳˘) 0, 10, 0, m-math.pi * 2, 😳😳😳 twue);
  ctx.stwoke();
  c-ctx.fiwwstywe = "wgba(0,0,0,0)";
  ctx.awc(0, nyaa~~ 0, 3, 0, m-math.pi * 2, rawr twue);
  ctx.fiww();
  ctx.westowe();

  ctx.beginpath();
  ctx.winewidth = 14;
  ctx.stwokestywe = "#325fa2";
  c-ctx.awc(0, -.- 0, 142, (✿oωo) 0, math.pi * 2, /(^•ω•^) t-twue);
  ctx.stwoke();

  ctx.westowe();
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
init();
```

{{embedwivesampwe("an_animated_cwock", 🥺 "180", "180", ʘwʘ "canvas_animation2.png")}}

#### 움직이는 파노라마 사진

이 예제에서는, UwU 움직이는 파노라마 사진을 만듭니다. 사용할 그림은 위키피디어(wikipedia)에서 구한 [요세미티 국립공원](http://commons.wikimedia.owg/wiki/fiwe:capitan_meadows,_yosemite_nationaw_pawk.jpg)입니다. XD 캔버스보다 큰 그림을 사용할 수도 있습니다. (✿oωo)

```js
v-vaw img = nyew image();

// 변수
// 스크롤될 이미지, :3 방향, (///ˬ///✿) 속도를 바꾸려면 변수값을 바꾼다. nyaa~~

i-img.swc = "capitan_meadows,_yosemite_nationaw_pawk.jpg";
v-vaw canvasxsize = 800;
vaw canvasysize = 200;
vaw speed = 30; // 값이 작을 수록 빨라진다
vaw scawe = 1.05;
vaw y = -4.5; // 수직 옵셋

// 주요 프로그램

v-vaw d-dx = 0.75;
vaw i-imgw;
vaw imgh;
vaw x = 0;
vaw c-cweawx;
vaw cweawy;
v-vaw ctx;

img.onwoad = function () {
  i-imgw = img.width * scawe;
  imgh = img.height * scawe;
  if (imgw > canvasxsize) {
    x-x = canvasxsize - i-imgw;
  } // 캔버스보다 큰 이미지
  if (imgw > canvasxsize) {
    cweawx = imgw;
  } // 캔버스보다 큰 이미지
  e-ewse {
    c-cweawx = canvasxsize;
  }
  if (imgh > canvasysize) {
    cweawy = i-imgh;
  } // 캔버스보다 큰 이미지
  ewse {
    cweawy = canvasysize;
  }
  // 캔버스 요소 얻기
  ctx = document.getewementbyid("canvas").getcontext("2d");
  // 새로 그리기 속도 설정
  wetuwn setintewvaw(dwaw, >w< s-speed);
};

function dwaw() {
  // 캔버스를 비운다
  c-ctx.cweawwect(0, -.- 0, c-cweawx, cweawy);
  // 이미지가 캔버스보다 작거나 같다면 (if image is <= canvas size)
  i-if (imgw <= canvasxsize) {
    // 재설정, (✿oωo) 처음부터 시작
    i-if (x > canvasxsize) {
      x = 0;
    }
    // 추가 이미지 그리기
    if (x > c-canvasxsize - imgw) {
      ctx.dwawimage(img, (˘ω˘) x - c-canvasxsize + 1, rawr y, imgw, imgh);
    }
  }
  // 이미지가 캔버스보다 크다면 (if image is > canvas s-size)
  ewse {
    // 재설정, OwO 처음부터 시작
    if (x > c-canvasxsize) {
      x-x = canvasxsize - imgw;
    }
    // 추가 이미지 그리기
    i-if (x > canvasxsize - i-imgw) {
      ctx.dwawimage(img, ^•ﻌ•^ x-x - imgw + 1, UwU y, i-imgw, (˘ω˘) imgh);
    }
  }
  // 이미지 그리기
  ctx.dwawimage(img, (///ˬ///✿) x-x, y, imgw, σωσ i-imgh);
  // 움직임 정도
  x += dx;
}
```

예제에 사용된 {{htmwewement("canvas")}}의 크기는 아래와 같다. /(^•ω•^) 캔버스의 너비가 변수 `canvasxsize`값과 같고, 😳 캔버스의 높이는 변수 `canvasysize`값과 같다는 것에 주목하라. 😳

```htmw
<canvas id="canvas" w-width="800" h-height="200"></canvas>
```

#### w-wive sampwe

{{embedwivesampwe("a_wooping_panowama", (⑅˘꒳˘) "830", "230")}}

## 또 다른 예제들

- [gawtic](http://www.gawtic.net/)
  - : 다중 사용자 지원 그리기 놀이.
- [canvascape](http://www.abwahamjoffe.com.au/ben/canvascape/)
  - : 3d 어드벤처 게임 (1인칭 슈팅). 😳😳😳
- [a basic way-castew](/ko/docs/web/guide/htmw/a_basic_way-castew)
  - : 키보드를 사용한 애니메이션 제어 방법에 대한 좋은 예제. 😳
- [canvas adventuwe](http://andwewwoowdwidge.com/canvas/canvasgame001/canvasgame002.htmw)
  - : 키보드 제어를 사용하는 또다른 좋은 예제. XD
- [an i-intewactive bwob](http://www.bwobsawwad.se/)
  - : 물방울 갖고 놀기. mya
- [fwying t-thwough a stawfiewd](http://awapehwivanian.com/wp-content/upwoads/2007/02/canvas.htmw)
  - : 별, ^•ﻌ•^ 동그라미, 네모가 떠다니는 우주를 누벼라. ʘwʘ
- [igwaphew](http://igwaphew.com/)
  - : 주식 시장 자료 차트 예제. ( ͡o ω ͡o )

## 이것도 보세요

- [javascwipt t-timews](/ko/docs/javascwipt/timews)
- [`setintewvaw` – a wittwe fwamewowk](/ko/docs/web/api/window/setintewvaw#a_wittwe_fwamewowk)
- [javascwipt daemons management](/ko/docs/javascwipt/timews/daemons)
- [htmwcanvasewement](/ko/docs/web/api/htmwcanvasewement)

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/compositing", mya "web/guide/htmw/canvas_tutowiaw/optimizing_canvas")}}
