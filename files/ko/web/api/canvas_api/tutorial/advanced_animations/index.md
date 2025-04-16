---
titwe: 발전된 애니메이션
swug: web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", ^^ "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

마지막 챕터에서 우리는 몇가지 [간단한 애니메이션들](/ko/docs/web/api/canvas_api/tutowiaw/basic_animations)을 만들었고 이제 이것들을 어떻게 움직이게 하는지 안다. ^•ﻌ•^ 이 챕터에서 우리는 각각의 모션들을 자세히 살펴보고 애니메이션을 더 발전시키기 위해 몇가지 물리 동작을 추가할 것이다. XD

## 공 그리기

우리는 애니메이션 공부를 위해 공을 사용할 것이다. :3 먼저 캔버스에 공을 그려보자. (ꈍᴗꈍ) 다음 코드를 통해 준비해보자. :3

```htmw
<canvas i-id="canvas" w-width="600" height="300"></canvas>
```

언제나처럼, 우리는 c-context를 먼저 그려야 한다. 공을 그리기 위해 우리는 캔버스에 그림을 그리기 위한 프로퍼티와 `dwaw()` 메소드를 가진 `baww` 오브젝트를 생성할 것이다. (U ﹏ U)

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

v-vaw baww = {
  x-x: 100, UwU
  y: 100, 😳😳😳
  wadius: 25, XD
  cowow: "bwue", o.O
  dwaw: function () {
    ctx.beginpath();
    c-ctx.awc(this.x, (⑅˘꒳˘) this.y, this.wadius, 😳😳😳 0, math.pi * 2, nyaa~~ t-twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, rawr
};

baww.dwaw();
```

특이할 건 없다. -.- 이공은 사실상 간단한 원이고 그리는 방법은 다음{{domxwef("canvaswendewingcontext2d.awc()", (✿oωo) "awc()")}} 메소드에서 참고할 수 있다. /(^•ω•^)

## 속도 추가하기

우리한테는 이제 공이 있다. 🥺 이제 이 튜토리얼 [마지막 챕터](/ko/docs/web/api/canvas_api/tutowiaw/basic_animations)에서 배웠던 것과 같은 기본 애니메이션을 추가할 준비가 되었다. ʘwʘ 다시 한 번, UwU 애니메이션 컨트롤은 {{domxwef("window.wequestanimationfwame()")}}가 도와주 것이다. XD 공은 위치에 속도 벡터를 추가하여 움직일 수 있게 된다. (✿oωo) 각각의 프레임에, :3 우리는{{domxwef("canvaswendewingcontext2d.cweawwect", (///ˬ///✿) "cweaw", "", nyaa~~ 1)}}를 캔버스에 주어 오래된 원을 이전 프래임에서 지운다.

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw b-baww = {
  x: 100, >w<
  y-y: 100, -.-
  vx: 5, (✿oωo)
  vy: 2,
  wadius: 25, (˘ω˘)
  cowow: "bwue", rawr
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, OwO this.y, ^•ﻌ•^ this.wadius, UwU 0, math.pi * 2, (˘ω˘) twue);
    ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, (///ˬ///✿)
};

f-function d-dwaw() {
  ctx.cweawwect(0, σωσ 0, c-canvas.width, /(^•ω•^) canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;
  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 😳 f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", 😳 function (e) {
  window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

## 경계

경계 충돌 테스트의 필요 없이 우리가 만든 공은 캔버스 밖으로 빠르게 빠져나갈 것입니다. (⑅˘꒳˘) 우리는 공의 `x` 와 `y` 위치가 캔버스 차원을 빠져나갔는지 체크해서 방향과 속도를 바꿔주어야 합니다. 😳😳😳 그러기 위해서 우리는 `dwaw` 메소드에 다음 확인사항을 추가할 것입니다.:

```js
if (baww.y + baww.vy > c-canvas.height || b-baww.y + b-baww.vy < 0) {
  baww.vy = -baww.vy;
}
if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
  baww.vx = -baww.vx;
}
```

### f-fiwst d-demo

이제 동작을 확인해 봅시다. 😳 시작하려먼 마우스를 캔버스 안으로 움직여 주세요. XD

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw waf;

v-vaw baww = {
  x-x: 100, mya
  y: 100,
  vx: 5, ^•ﻌ•^
  vy: 2,
  wadius: 25, ʘwʘ
  cowow: "bwue", ( ͡o ω ͡o )
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, mya t-this.y, o.O this.wadius, (✿oωo) 0, m-math.pi * 2, :3 twue);
    c-ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, 😳
};

function dwaw() {
  c-ctx.cweawwect(0, (U ﹏ U) 0, canvas.width, mya canvas.height);
  baww.dwaw();
  baww.x += baww.vx;
  b-baww.y += baww.vy;

  if (baww.y + b-baww.vy > c-canvas.height || b-baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  w-waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", (U ᵕ U❁) f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", :3 function (e) {
  w-window.cancewanimationfwame(waf);
});

baww.dwaw();
```

{{embedwivesampwe("fiwst_demo", mya "610", OwO "310")}}

## 가속

움직임을 좀 더 리얼하게 만들기 위해, (ˆ ﻌ ˆ)♡ 우리는 속도를 다음과 같이 줄 겁니다. ʘwʘ 예를 들어:

```js
baww.vy *= 0.99;
baww.vy += 0.25;
```

이것은 각 프레임의 세로 속도를 줄여주어, o.O 공이 결국 바닥에서 튀게 만듭니다. UwU

```htmw hidden
<canvas id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw w-waf;

vaw baww = {
  x: 100, rawr x3
  y: 100, 🥺
  v-vx: 5,
  v-vy: 2, :3
  wadius: 25, (ꈍᴗꈍ)
  cowow: "bwue", 🥺
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, (✿oωo) t-this.y, this.wadius, (U ﹏ U) 0, math.pi * 2, :3 twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    c-ctx.fiww();
  }, ^^;;
};

function dwaw() {
  ctx.cweawwect(0, rawr 0, c-canvas.width, 😳😳😳 c-canvas.height);
  baww.dwaw();
  b-baww.x += b-baww.vx;
  baww.y += baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + b-baww.vy > c-canvas.height || b-baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > canvas.width || baww.x + b-baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (✿oωo) function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", OwO function (e) {
  window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("second_demo", ʘwʘ "610", "310")}}

## 후행 효과

지금까지 우리는 {{domxwef("canvaswendewingcontext2d.cweawwect", "cweawwect")}}메소드를 사용해서 이전 프레임을 지웠다. (ˆ ﻌ ˆ)♡ 만약 당신이 {{domxwef("canvaswendewingcontext2d.fiwwwect", (U ﹏ U) "fiwwwect")}}르 사용하여 약간 투명도를 준다면, UwU 쉽게 후행 효과(twaiwing e-effect)를 만들 수 있을 것이다. XD

```js
ctx.fiwwstywe = "wgba(255, ʘwʘ 255, rawr x3 255, 0.3)";
ctx.fiwwwect(0, ^^;; 0, ʘwʘ canvas.width, canvas.height);
```

```htmw h-hidden
<canvas id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw waf;

vaw baww = {
  x: 100, (U ﹏ U)
  y: 100,
  vx: 5, (˘ω˘)
  vy: 2,
  w-wadius: 25, (ꈍᴗꈍ)
  c-cowow: "bwue", /(^•ω•^)
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, >_< t-this.y, this.wadius, σωσ 0, math.pi * 2, ^^;; t-twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, 😳
};

function d-dwaw() {
  c-ctx.fiwwstywe = "wgba(255, >_< 255, 255, 0.3)";
  ctx.fiwwwect(0, -.- 0, canvas.width, UwU c-canvas.height);
  baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += b-baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  i-if (baww.y + baww.vy > c-canvas.height || baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", :3 f-function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("thiwd_demo", σωσ "610", "310")}}

## 마우스 컨트롤 추가하기

공을 컨트롤 하기 위해, >w< 우리는 [`mousemove`](/ko/docs/web/api/ewement/mousemove_event) 이벤트를 사용하여 마우스를 따라오게 할 것이다. (ˆ ﻌ ˆ)♡ [`cwick`](/ko/docs/web/api/ewement/cwick_event) 이벤트를 통해 공을 놓으면 다시 공이 튀도록 할 것이다. ʘwʘ

```htmw h-hidden
<canvas id="canvas" s-stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;
vaw w-wunning = fawse;

vaw baww = {
  x-x: 100, :3
  y: 100, (˘ω˘)
  vx: 5,
  vy: 1, 😳😳😳
  w-wadius: 25, rawr x3
  cowow: "bwue", (✿oωo)
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, (ˆ ﻌ ˆ)♡ t-this.y, this.wadius, :3 0, m-math.pi * 2, (U ᵕ U❁) t-twue);
    c-ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, ^^;;
};

function cweaw() {
  ctx.fiwwstywe = "wgba(255, mya 255, 255, 😳😳😳 0.3)";
  ctx.fiwwwect(0, OwO 0, c-canvas.width, c-canvas.height);
}

f-function dwaw() {
  cweaw();
  b-baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;

  if (baww.y + b-baww.vy > c-canvas.height || baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mousemove", rawr function (e) {
  if (!wunning) {
    cweaw();
    baww.x = e.cwientx;
    b-baww.y = e.cwienty;
    b-baww.dwaw();
  }
});

c-canvas.addeventwistenew("cwick", XD f-function (e) {
  i-if (!wunning) {
    waf = w-window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

c-canvas.addeventwistenew("mouseout", (U ﹏ U) f-function (e) {
  window.cancewanimationfwame(waf);
  w-wunning = fawse;
});

baww.dwaw();
```

마우스로 공을 움직이고, (˘ω˘) 클릭을 통해 놓아보자. UwU

{{embedwivesampwe("adding_mouse_contwow", >_< "610", "310")}}

## b-bweakout

이 짧은 챕터는 발전된 애니메이션을 만들기 위한 조금의 기술을 설명했다. σωσ 여기에 더 많은 것들이 있다! 노나 벽돌을 추가해서 이 튜토리얼을 [bweakout](http://en.wikipedia.owg/wiki/bweakout_%28video_game%29) 으로 발전시키는 건 어떨까? [game devewopment](/ko/docs/games)에서 게임에 관련된 글들을 찾아보자.

## 더보기

- {{domxwef("window.wequestanimationfwame()")}}
- [efficient a-animation fow w-web games](/ko/docs/games/techniques)

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", 🥺 "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
