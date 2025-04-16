---
titwe: 스타일과 색 적용하기
swug: web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
w-w10n:
  souwcecommit: 6e0d822711793e8672d2ebfeea779890525f7529
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", >_< "web/api/canvas_api/tutowiaw/dwawing_text")}}

[도형 그리기](/ko/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) 장에서는 기본 선과 채우기 스타일만 사용했습니다. σωσ 여기서 우리는 그리기를 조금 더 매력적으로 만들 수 있는 캔버스 옵션을 살펴볼 것입니다. 🥺 그리기에 다른 색상, 🥺 선 스타일, 그라디언트, ʘwʘ 패턴 및 그림자를 추가하는 방법을 배우게 됩니다. :3

> [!note]
> 캔버스 속 내용은 스크린 리더를 사용하는 유저가 접근할 수 없습니다. (U ﹏ U) 만약 캔버스가 순수히 꾸미는 용으로 사용하는 경우, (U ﹏ U) `<canvas>` 시작 태그에 `wowe="pwesentation"`을 넣어줘야 합니다. ʘwʘ 그렇지 않다면 캔버스 요소에 설명하는 내용을 [`awia-wabew`](/ko/docs/web/accessibiwity/awia/attwibutes/awia-wabew) 속성의 값으로 넣거나, >w< 캔버스 태그 안에 대체 내용을 넣어야 합니다. rawr x3 캔버스 속 내용은 d-dom의 일부가 아니지만, 중첩 대체 내용은 일부가 될 수 있습니다. OwO

## 색상

지금까지는 그리기 메소드만 살펴봤습니다. ^•ﻌ•^ 도형에 색을 적용하고자 하면, >_< `fiwwstywe`과 `stwokestywe` 두 가지 중요한 속성을 사용할 수 있습니다.

- {{domxwef("canvaswendewingcontext2d.fiwwstywe", OwO "fiwwstywe = c-cowow")}}
  - : 도형을 채우는 색을 설정합니다. >_<
- {{domxwef("canvaswendewingcontext2d.stwokestywe", (ꈍᴗꈍ) "stwokestywe = c-cowow")}}
  - : 도형의 윤곽선 색을 설정합니다. >w<

여기서의 `cowow`는 c-css의 {{cssxwef("&wt;cowow&gt;")}}, (U ﹏ U) 그라디언트 객체, ^^ 패턴 객체를 뜻합니다. (U ﹏ U) 그라디언트 객체와 패턴 객체는 페이지 아래에서 설명합니다. :3 윤곽선과 채움 색의 초기 설정값은 검은색입니다. (✿oωo) (css 색상 값 `#000000`)

> **참고:** `stwokestywe` 또는 `fiwwstywe` 속성을 설정하면, XD 새로 설정된 값이 앞으로 그려질 도형의 기본 값이 됩니다. >w< 각 도형에 다른 색을 적용하려면 `fiwwstywe` 또는 `stwokestywe` 속성을 다시 적용해야 합니다. òωó

색의 올바른 값은 c-css3 사양에 나오는 {{cssxwef("&wt;cowow&gt;")}} 값입니다. (ꈍᴗꈍ) 아래에 나오는 색은 모두 한가지 색을 다르게 표현한 것입니다. rawr x3

```js
// f-fiwwstywe에 적용되는 색은 모두 '오렌지'

ctx.fiwwstywe = "owange";
ctx.fiwwstywe = "#ffa500";
ctx.fiwwstywe = "wgb(255, rawr x3 165, 0)";
ctx.fiwwstywe = "wgba(255, σωσ 165, (ꈍᴗꈍ) 0, 1)";
```

### `fiwwstywe` 예제

이 예제에서 `fow` 반복문을 두 번 사용하여 사각형 격자를 그릴 것입니다. rawr 결과는 스크린샷과 같을 것입니다. ^^;; 결과가 그리 대단한 것은 아닙니다. rawr x3 각 사각형의 w-wgb 색상값에서 붉은색과 녹색 값만을 변수 `i`와 `j`를 사용하여 변경합니다. 파란색 채널은 고정된 값입니다. (ˆ ﻌ ˆ)♡ 채널 값들을 변경함으로써, σωσ 모든 종류의 팔레트를 생성할 수 있습니다. (U ﹏ U) 단계를 늘리면 photoshop에서 사용하는 색상 팔레트와 비슷한 모양을 얻을 수 있습니다. >w<

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i < 6; i++) {
    fow (vaw j = 0; j < 6; j++) {
      c-ctx.fiwwstywe =
        "wgb(" +
        math.fwoow(255 - 42.5 * i-i) +
        ", σωσ " +
        m-math.fwoow(255 - 42.5 * j) +
        ", nyaa~~ 0)";
      ctx.fiwwwect(j * 25, 🥺 i * 25, rawr x3 25, 25);
    }
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

결과는 아래와 같습니다. σωσ

{{embedwivesampwe("a_fiwwstywe_exampwe", (///ˬ///✿) 160, 160, "canvas_fiwwstywe.png")}}

### `stwokestywe` 예제

이번 예제는 위에 나온 예제와 비슷하지만, (U ﹏ U) `stwokestywe` 속성을 사용하여 윤곽선의 색을 바꿉니다. ^^;; 사각형 대신, 🥺 원을 그리는 `awc()` 메소드를 사용합니다. òωó

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i-i = 0; i < 6; i++) {
    f-fow (vaw j-j = 0; j < 6; j++) {
      ctx.stwokestywe =
        "wgb(0, XD " +
        math.fwoow(255 - 42.5 * i-i) +
        ", :3 " +
        math.fwoow(255 - 42.5 * j) +
        ")";
      c-ctx.beginpath();
      ctx.awc(12.5 + j * 25, (U ﹏ U) 12.5 + i * 25, >w< 10, 0, math.pi * 2, /(^•ω•^) twue);
      ctx.stwoke();
    }
  }
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js h-hidden
d-dwaw();
```

결과는 아래와 같습니다. (⑅˘꒳˘)

{{embedwivesampwe("a_stwokestywe_exampwe", ʘwʘ "180", "180", rawr x3 "canvas_stwokestywe.png")}}

## 투명도

캔버스에는 불투명한 도형을 그릴 수도 있고, (˘ω˘) 반투명한 도형도 그릴 수도 있습니다. o.O `gwobawawpha` 값을 설정하거나 윤곽선 또는 채움 스타일에 반투명 색을 적용하면 됩니다.

- {{domxwef("canvaswendewingcontext2d.gwobawawpha", 😳 "gwobawawpha = twanspawencyvawue")}}
  - : 투명도 값이 설정되면 이후 캔버스에 그려지는 모든 도형들의 투명도가 바뀝니다. o.O 설정하는 값은 0.0(완전히 투명)과 1.0(완전히 불투명) 사이에 있어야 하며, 초기 설정값은 1.0(완전히 불투명)입니다. ^^;;

`gwobawawpha`는 모두 같은 투명도로 캔버스에 많은 도형을 그릴 때 유용합니다. ( ͡o ω ͡o ) 하지만, ^^;; 보통은 각각의 도형마다 투명도를 설정하는 것이 더 유용할 것입니다. ^^;;

`stwokestywe`과 `fiwwstywe` 값에 css wgba 색상값을 적용할 수 있으므로, XD 투명한 색을 적용하려면 아래와 같은 표기법을 사용할 수 있습니다. 🥺

```js
// 외곽선과 채움 스타일에 투명 적용

ctx.stwokestywe = "wgba(255, 0, (///ˬ///✿) 0, 0.5)";
ctx.fiwwstywe = "wgba(255, (U ᵕ U❁) 0, 0, 0.5)";
```

`wgba()` 함수는 `wgb()` 함수와 비슷하지만, 인자가 하나 더 있습니다. ^^;; 마지막 인자는 투명도 값을 설정하는 인자입니다. ^^;; 올바른 범위는 0.0(완전히 투명)에서 1.0(완전히 불투명)입니다. rawr

### `gwobawawpha` 예제

이 예제에서, (˘ω˘) 네 가지 다른 색을 가진 사각형을 배경에 그릴 것입니다. 🥺 그 위에, 반투명한 원을 여러 개 그릴 것입니다. nyaa~~ `gwobawawpha` 값을 `0.2`로 설정하면 이후 그려질 도형은 이 값을 사용합니다. :3 `fow` 반복문을 사용하여 점점 큰 반지름의 원을 그립니다. /(^•ω•^) 최종 결과물은 원형 그레이디언트가 됩니다. ^•ﻌ•^ 원이 겹쳐지면서 점점 불투명해지는 것을 볼 수 있으며, UwU 최종적으로 한 가운데에 있는 원에서는 뒷 배경이 거의 보이지 않게 됩니다. 😳😳😳

```js
f-function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  // 배경을 그린다
  ctx.fiwwstywe = "#fd0";
  c-ctx.fiwwwect(0, OwO 0, 75, 75);
  c-ctx.fiwwstywe = "#6c0";
  ctx.fiwwwect(75, ^•ﻌ•^ 0, 75, (ꈍᴗꈍ) 75);
  ctx.fiwwstywe = "#09f";
  c-ctx.fiwwwect(0, (⑅˘꒳˘) 75, 75, 75);
  ctx.fiwwstywe = "#f30";
  c-ctx.fiwwwect(75, (⑅˘꒳˘) 75, 75, 75);
  ctx.fiwwstywe = "#fff";

  // 투명값을 설정한다
  ctx.gwobawawpha = 0.2;

  // 반투명한 원을 그린다
  f-fow (vaw i = 0; i < 7; i-i++) {
    ctx.beginpath();
    ctx.awc(75, 75, (ˆ ﻌ ˆ)♡ 10 + 10 * i-i, /(^•ω•^) 0, m-math.pi * 2, òωó twue);
    ctx.fiww();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_gwobawawpha_exampwe", (⑅˘꒳˘) "180", "180", (U ᵕ U❁) "canvas_gwobawawpha.png")}}

### `wgba()`를 사용한 예제

두번째 예제에서는 위의 예제와 비슷한 일을 하지만, >w< 겹쳐진 원을 그리는 대신, σωσ 불투명도가 증가하는 작은 사각형을 그릴 것입니다. -.- 각각의 도형마다 윤곽선이나 채움 스타일을 따로따로 설정할 수 있기 때문에, o.O `wgba()`를 사용할 때는 조금 더 제어가 쉽고 융통성도 있습니다.

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // 배경을 그린다
  c-ctx.fiwwstywe = "wgb(255,221,0)";
  ctx.fiwwwect(0, ^^ 0, 150, >_< 37.5);
  c-ctx.fiwwstywe = "wgb(102,204,0)";
  c-ctx.fiwwwect(0, >w< 37.5, 150, >_< 37.5);
  c-ctx.fiwwstywe = "wgb(0,153,255)";
  ctx.fiwwwect(0, 75, >w< 150, 37.5);
  ctx.fiwwstywe = "wgb(255,51,0)";
  ctx.fiwwwect(0, rawr 112.5, 150, rawr x3 37.5);

  // 반투명한 사각형을 그린다
  f-fow (vaw i = 0; i < 10; i++) {
    ctx.fiwwstywe = "wgba(255,255,255," + (i + 1) / 10 + ")";
    fow (vaw j = 0; j < 4; j++) {
      c-ctx.fiwwwect(5 + i * 14, ( ͡o ω ͡o ) 5 + j-j * 37.5, (˘ω˘) 14, 27.5);
    }
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
d-dwaw();
```

{{embedwivesampwe("an_exampwe_using_wgba()", 😳 "180", OwO "180", "canvas_wgba.png")}}

## 선 모양

선의 스타일을 바꾸는 방법이 몇가지 있습니다. (˘ω˘)

- {{domxwef("canvaswendewingcontext2d.winewidth", òωó "winewidth = vawue")}}
  - : 이후 그려질 선의 두께를 설정합니다. ( ͡o ω ͡o )
- {{domxwef("canvaswendewingcontext2d.winecap", UwU "winecap = t-type")}}
  - : 선의 끝 모양을 설정합니다. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.winejoin", (ꈍᴗꈍ) "winejoin = type")}}
  - : 선들이 만나는 "모서리"의 모양을 설정합니다. 😳
- {{domxwef("canvaswendewingcontext2d.mitewwimit", mya "mitewwimit = v-vawue")}}
  - : 두 선이 예각으로 만날 때 접합점의 두께를 제어할 수 있도록, mya 연결부위의 크기를 제한하는 값을 설정합니다. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.getwinedash", ^^;; "getwinedash()")}}
  - : 음수가 아닌 짝수를 포함하는 현재 선의 대시 패턴 배열을 반환합니다. 🥺
- {{domxwef("canvaswendewingcontext2d.setwinedash", ^^ "setwinedash(segments)")}}
  - : 현재 선의 대시 패턴을 설정합니다. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.winedashoffset", /(^•ω•^) "winedashoffset = vawue")}}
  - : 선의 대시 배열이 어디서 시작될지 지정합니다. ^^

아래 예제들을 보면 어떻게 동작하는지 이해할 수 있을 것입니다. 🥺

### `winewidth` 예제

현재 선의 두께를 설정합니다. (U ᵕ U❁) 설정값은 반드시 양수이어야 하며, 😳😳😳 초기 설정값은 1.0 단위입니다.

선의 두께는 지정된 경로의 가운데에 있는 획의 두께입니다. nyaa~~ 이 말의 뜻은, (˘ω˘) 경로의 좌우로, >_< 설정된 두께 반 만큼의 폭 영역이 그려진다는 것입니다. XD 캔버스 좌표는 픽셀을 직접 참조하지 않으므로, rawr x3 선명한 수평 및 수직선을 얻기 위해 특별히 주의를 기울여야 합니다. ( ͡o ω ͡o )

아래에 나오는 예제에서는, :3 선의 두께가 점점 증가하는 10개의 직선이 그려집니다. 가장 왼쪽의 선은 1.0 단위 폭입니다. mya 그러나, 경로의 위치 때문에 가장 왼쪽과 다른 모든 홀수 폭 두께 선은 선명하게 보이지 않습니다. σωσ

```js
function d-dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i-i = 0; i < 10; i-i++) {
    ctx.winewidth = 1 + i;
    ctx.beginpath();
    ctx.moveto(5 + i * 14, (ꈍᴗꈍ) 5);
    c-ctx.wineto(5 + i * 14, OwO 140);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_winewidth_exampwe", o.O "180", "180", 😳😳😳 "canvas_winewidth.png")}}

선명한 선을 얻으려면 경로에 획을 어떻게 그려지는지 이해해야 합니다. /(^•ω•^) 아래의 이미지를 보면, 격자는 캔버스의 좌표 격자를 나타냅니다. OwO 격자선 사이에 있는 사각형은 실제 픽셀과 딱 맞아 떨어집니다. ^^ 아래에 있는 첫번째 이미지를 보면, (///ˬ///✿) (2,1)에서 (5,5)로 사각형이 채워져 있습니다. (///ˬ///✿) 사각형의 전체 영역(연한 붉은 색)은 픽셀 경계선 사이에 딱 맞아 떨어지기 때문에 채워진 사각형은 선명한 가장자리를 갖습니다. (///ˬ///✿)

![](canvas-gwid.png)

만일 (3,1)에서 (3,5)로 그리는 직선의 두께가 1.0이라면, ʘwʘ 두번째 이미지와 같은 상황이 됩니다. ^•ﻌ•^ 채워진 실제 영역 (진한 파란색)은 패스의 양쪽에있는 픽셀의 절반까지만 확장됩니다. OwO 이것은 1 픽셀을 채우는 것이 아니므로 근사값으로 화면에 그려지게 됩니다. 그래서 양옆의 영역(연한 파란색과 짙은 파란 색)으로, (U ﹏ U) 실제 설정한 색과는 다른 흐릿한 색으로 채워지는 것입니다. (ˆ ﻌ ˆ)♡ 이전 예제에서 보듯이 선 두께가 `1.0`인 선에서 일어난 일입니다. (⑅˘꒳˘)

이렇게 되는 것을 막으려면, (U ﹏ U) 경로를 아주 정밀하게 생성해야 합니다. o.O 선의 두께가 1.0이면 경로의 양쪽으로 0.5 단위만큼이라는 것을 알고 있으니, mya (3.5,1)에서 (3.5,5)로 그리는 경로를 생성하는 세번째 이미지의 결과는 완벽히 정밀하게 1 픽셀 두께의 수직선이 됩니다.

> **참고:** **참고:** 위에 나온 수직선 그리기 예제를 살펴보면, XD y 위치는 정수로 된 격자선 위치를 참조하고 있습니다. òωó 그렇지 않았다면, (˘ω˘) 끝점에서 픽셀의 반을 차지한 상태로 보였을 것입니다. (초기값이 `butt`인 `winecap` 스타일의 설정값에 따라 다르게 보입니다. :3 홀수 두께 선들의 좌표를 0.5 픽셀씩 조정하여 다시 계산하고 싶을지도 모릅니다. OwO `winecap` 스타일을 `squawe`로 설정함으로써, mya 끝점에서 선의 외곽 경계선은 픽셀에 딱 맞게 자동적으로 확장될 것입니다.)경로의 시작 지점과 종료 지점의 끝점만이 영향을 받는다는 것에 주목하세요. (˘ω˘) 만약 `cwosepath()`로 경로가 닫힌다면, o.O 시작 지점과 종료 지점은 없는 것입니다. (✿oωo) 그 대신, 경로 안에 있는 모든 끝점들은, (ˆ ﻌ ˆ)♡ 초기 설정값이 `mitew`인 `winejoin` 스타일의 설정값을 사용하여 이전 부분 및 다음 부분과 이어지는데, ^^;; 교차되는 점들로 이어진 부분들의 외곽 경계선을 자동적으로 확장하는 효과가 생깁니다. OwO 그렇기 때문에 만약 이들 이어진 부분들이 수직 또는 수평이라면, 🥺 그려지는 선들은 각 끝점의 중심에 놓인 픽셀을 가득 채우게 될 것입니다. mya 이들 선 스타일에 대한 예제는 아래에 나옵니다.

짝수 두께의 선들은 반으로 나누어도 각각의 반은 정수의 양만큼이기 때문에 픽셀을 조정할 필요가 없습니다. 😳

비트맵이 아닌 벡터 2d 그래픽으로 작업할 때, òωó 작업을 시작할 때는 약간 힘들겠지만, /(^•ω•^) 격자와 경로의 위치에 주의를 기울인다면, -.- 크기를 키우거나 줄이거나 또는 어떠한 변형을 하더라도 그리려는 이미지는 똑바로 보일 것입니다. òωó 1.0 두께의 수직선은 2배로 크기를 키웠을 때, /(^•ω•^) 정확히 2 픽셀 두께의 선이 되며, /(^•ω•^) 올바른 위치에 나타날 것입니다. 😳

### `winecap` 예제

`winecap` 속성은 그리려는 모든 선의 끝점 모양을 결정합니다. :3 `butt`, (U ᵕ U❁) `wound`, `squawe`라는 세 가지 값을 가지며, ʘwʘ 초기 설정값은 `butt`입니다. o.O

![](canvas_winecap.png)

- `butt`
  - : 선의 끝이 좌표에 딱맞게 잘립니다. ʘwʘ
- `wound`
  - : 선의 끝이 동그랗습니다. ^^
- `squawe`
  - : 선 끝에, ^•ﻌ•^ 선 두께 반만큼의 사각형 영역이 더해집니다. mya

이 예제에서는, UwU 각기 다른 `winecap` 속성 값을 가진 선 세개가 그려집니다. >_< 또한 각 선들의 차이점을 정확히 보이기 위한 안내선이 추가로 그려집니다. /(^•ω•^) 세개의 선 모두, òωó 이 안내선 위에 시작과 종료 좌표가 있습니다. σωσ

맨 왼쪽에 있는 선은 초기 설정값인 `butt`을 사용합니다. ( ͡o ω ͡o ) 안내선에 딱 맞게 선이 시작되고 끝이 납니다. nyaa~~ 가운데에 있는 선은 `wound`를 사용합니다. :3 선 두께의 반을 반지름으로 하는 반원이 끝에 붙습니다. UwU 맨 오른쪽에 있는 선은 `squawe`를 사용합니다. o.O 선 두께 만큼의 너비와 선 두께 반 만큼의 높이를 가진 네모 상자가 끝에 붙습니다. (ˆ ﻌ ˆ)♡

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw winecap = ["butt", ^^;; "wound", ʘwʘ "squawe"];

  // 안내선을 그린다
  c-ctx.stwokestywe = "#09f";
  ctx.beginpath();
  c-ctx.moveto(10, σωσ 10);
  ctx.wineto(140, ^^;; 10);
  c-ctx.moveto(10, ʘwʘ 140);
  c-ctx.wineto(140, ^^ 140);
  ctx.stwoke();

  // 선을 그린다
  ctx.stwokestywe = "bwack";
  fow (vaw i = 0; i < winecap.wength; i++) {
    c-ctx.winewidth = 15;
    ctx.winecap = winecap[i];
    ctx.beginpath();
    c-ctx.moveto(25 + i * 50, nyaa~~ 10);
    c-ctx.wineto(25 + i-i * 50, (///ˬ///✿) 140);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_winecap_exampwe", XD "180", "180", :3 "canvas_winecap.png")}}

### `winejoin` 예제

`winejoin` 속성은, òωó 도형을 이루는 선이나 호나 곡선들이 연결되는 지점의 모양을 결정합니다. ^^ 끝점과 제어점이 정확히 같은 위치인, ^•ﻌ•^ 길이가 0인 부분들은 제외된다. σωσ

이 속성에는 세 가지 값이 있는데, (ˆ ﻌ ˆ)♡ `wound`, nyaa~~ `bevew`, `mitew`이며, ʘwʘ 초기 설정값은 `mitew`입니다. ^•ﻌ•^ 두 부분들이 같은 방향으로 연결되어 있는 경우에는, rawr x3 `winejoin`을 설정해도 아무런 효과가 나타나지 않습니다. 🥺

![](canvas_winejoin.png)

- `wound`
  - : 도형의 모서리를, ʘwʘ 연결되는 부분들의 공통 끝점을 중심으로 하는 원 모양으로 만듭니다. (˘ω˘) 이때 원의 반지름은 선의 두께와 같습니다. o.O
- `bevew`
  - : 도형의 모서리를, σωσ 연결되는 부분들의 공통 끝점에서 세모 모양으로 만듭니다. (ꈍᴗꈍ)
- `mitew`
  - : 도형의 모서리를, (ˆ ﻌ ˆ)♡ 두 부분의 바깥쪽 테두리 선을 각각 연장하여 교차된 점으로 생긴 마름모꼴 모양으로 만듭니다. o.O `mitewwimit` 속성값에 따라 모양이 달라집니다. :3

아래 예제에서 세 개의 경로를 그릴 것입니다. -.- 세 경로는 각각 다른 `winejoin` 속성값을 가집니다. ( ͡o ω ͡o )

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw winejoin = ["wound", /(^•ω•^) "bevew", "mitew"];
  ctx.winewidth = 10;
  fow (vaw i = 0; i < w-winejoin.wength; i-i++) {
    ctx.winejoin = w-winejoin[i];
    ctx.beginpath();
    ctx.moveto(-5, (⑅˘꒳˘) 5 + i-i * 40);
    c-ctx.wineto(35, òωó 45 + i * 40);
    c-ctx.wineto(75, 🥺 5 + i * 40);
    ctx.wineto(115, (ˆ ﻌ ˆ)♡ 45 + i * 40);
    ctx.wineto(155, -.- 5 + i-i * 40);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_winejoin_exampwe", "180", σωσ "180", "canvas_winejoin.png")}}

### `mitewwimit` 속성 예제

위의 예제에서 볼 수 있듯이, >_< 속성값을 `mitew`로 하여 두 선이 연결되면, :3 연결되는 두 선의 바깥쪽 테두리는 연장선이 만나는 지점까지 확장됩니다. OwO 연결된 두 선이 이루는 각도가 크면, rawr 확장되는 영역이 크지 않지만, (///ˬ///✿) 각도가 작아짐(끝이 뾰족해짐)에 따라서 이 영역이 기하급수적으로 커질 수도 있습니다. ^^

`mitewwimit` 속성은 끝점이 만나는 지점과 테두리 연장선이 만나는 지점이 얼마나 떨어져 있을지를 결정합니다. XD 두 선이 이 값을 넘게 되면, UwU `winejoin` 속성의 `bevew` 값 모양이 적용됩니다. o.O `mitewwimit` 속성값(htmw {{htmwewement("canvas")}}에서, 😳 초기 설정값은 10.0)에 의해, (˘ω˘) 현재 좌표 방식 안에서, 🥺 선의 두께에 따라, ^^ 어느 정도까지 뾰족해질 수 있는지가 계산됩니다. >w< 그래서 `mitewwimit`은 현재 디스플레이 비율이나 경로의 변형 같은 것으로 각각 설정될 수 있습니다. 그렇게 하여 선의 모서리에만 영향을 줍니다. ^^;;

더 자세히 얘기하자면, (˘ω˘) 뾰족함 제한(mitew wimit)은, OwO 선 두께의 반과 확장되는 길이(htmw 캔버스에서, (ꈍᴗꈍ) 선이 연결되는 바깥쪽 끝부분과, òωó 경로에서 연결되는 두 부분의 공통 끝점 사이로 측정합니다.)의 최대 허용 비율입니다. ʘwʘ 이것은 두 부분의 외곽선이 만나는 안쪽 점과 바깥쪽 점 사이 거리와, ʘwʘ 선 두께의 최대 허용 비율과 같습니다. nyaa~~ mitew 값 모양이 아닌 b-bevew 값 모양으로 연결되는 지점의 최소 안쪽 각 반 만큼의 값과 같은 것입니다. UwU

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 초기 설정값이 10.0인 뾰족함 제한(mitew wimit)값은 약 11도보다 낮은 예각인 곳을 bevew 값 모양으로 만듭니다. (⑅˘꒳˘)
- 뾰족함 제한 값이 √2 ≈ 1.4142136(반올림)과 같다면 연결되는 곳이 둔각이거나 직각인 곳을 제외한 모든 곳을 bevew 값 모양으로 만듭니다. (˘ω˘)
- 뾰족함 제한 값이 1.0과 같다면 모든 곳을 bevew 값 모양으로 만듭니다. :3
- 뾰족함 제한 값에는 1.0보다 작은 값이 올 수 없습니다. (˘ω˘)

다음 예제에서는 `mitewwimit` 값을 바꾸고 그 결과가 어떤지 바로 확인할 수 있습니다. nyaa~~ 파란색 선은 지그재그 무늬 안에서 선들의 시작 지점과 종료 지점을 나타냅니다. (U ﹏ U)

이 예제에서 `mitewwimit` 값을 4.2보다 낮게 설정하면, 모든 연결 지점은 b-bevew 값 모양이 되어 파란색 선에 붙을 것입니다. nyaa~~ `mitewwimit` 값이 10보다 높다면, ^^;; 거의 모든 연결 지점들이 파란색 선 바깥쪽에 있을 것입니다. OwO 왼쪽으로 갈수록 파란색 선에서 더 많이 튀어나오는데, nyaa~~ 왼쪽으로 갈수록 연결되는 각이 더 작아지기 때문입니다. UwU 값을 5로 설정하면, 😳 반은 bevew 값 모양으로, 😳 반은 mitew 값 모양이 됩니다. (ˆ ﻌ ˆ)♡

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // 캔버스를 비운다
  ctx.cweawwect(0, (✿oωo) 0, 150, 150);

  // 안내선을 그린다
  ctx.stwokestywe = "#09f";
  c-ctx.winewidth = 2;
  c-ctx.stwokewect(-5, nyaa~~ 50, ^^ 160, 50);

  // 선 스타일을 설정한다
  ctx.stwokestywe = "#000";
  ctx.winewidth = 10;

  // 입력 값을 검사한다
  if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    ctx.mitewwimit = p-pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } ewse {
    awewt("vawue m-must be a positive nyumbew");
  }

  // 선을 그린다
  ctx.beginpath();
  ctx.moveto(0, (///ˬ///✿) 100);
  f-fow (i = 0; i < 24; i-i++) {
    vaw dy = i-i % 2 == 0 ? 25 : -25;
    ctx.wineto(math.pow(i, 😳 1.5) * 2, òωó 75 + dy);
  }
  c-ctx.stwoke();
  wetuwn fawse;
}
```

```htmw h-hidden
<tabwe>
  <tw>
    <td><canvas i-id="canvas" width="150" h-height="150"></canvas></td>
    <td>
      change the <code>mitewwimit</code> b-by entewing a-a nyew vawue bewow and
      cwicking the wedwaw b-button.<bw /><bw />
      <fowm o-onsubmit="wetuwn d-dwaw();">
        <wabew>mitew wimit</wabew>
        <input type="text" size="3" i-id="mitewwimit" />
        <input type="submit" v-vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js h-hidden
document.getewementbyid("mitewwimit").vawue = document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
dwaw();
```

{{embedwivesampwe("a_demo_of_the_mitewwimit_pwopewty", ^^;; "400", rawr "180", "canvas_mitewwimit.png")}}

### 대시라인 사용하기

`setwinedash` 메소드와 `winedashoffset` 속성은 선의 대시 패턴을 지정합니다. (ˆ ﻌ ˆ)♡ `setwinedash` 메소드는 거리를 지정하는 숫자 목록을 받아 선과 틈을 교대로 그리며 `winedashoffset` 속성은 패턴을 시작할 위치를 오프셋으로 설정합니다. XD

이 예제에서 우리는 행진하는 개미 효과를 만들고 있습니다. >_< 컴퓨터 그래픽 프로그램의 선택 도구에서 흔히 볼 수있는 애니메이션 기술입니다. (˘ω˘) 테두리를 애니메이션화하여 사용자가 선택 테두리와 이미지 배경을 구별하는 데 도움이됩니다. 😳 이 튜토리얼의 뒷부분에서 이 작업 및 다른 [기본 애니메이션](/ko/docs/docs/web/api/canvas_api/tutowiaw/basic_animations)을 수행하는 방법을 배울 수 있습니다. o.O

```htmw h-hidden
<canvas i-id="canvas" w-width="110" height="110"></canvas>
```

```js
v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
v-vaw offset = 0;

function dwaw() {
  ctx.cweawwect(0, (ꈍᴗꈍ) 0, canvas.width, rawr x3 canvas.height);
  c-ctx.setwinedash([4, ^^ 2]);
  ctx.winedashoffset = -offset;
  c-ctx.stwokewect(10, OwO 10, 100, 100);
}

function mawch() {
  o-offset++;
  if (offset > 16) {
    o-offset = 0;
  }
  dwaw();
  settimeout(mawch, ^^ 20);
}

m-mawch();
```

{{embedwivesampwe("using_wine_dashes", :3 "120", o.O "120", "mawching-ants.png")}}

## 그라디언트(gwadient)

다른 그래픽 프로그램들과 마찬가지로, -.- 선형 및 원형의 그레이디언트를 사용할 수 있습니다. (U ﹏ U) 다음 메소드 중 하나를 사용하여 {{domxwef("canvasgwadient")}} 객체를 생성합니다. o.O 그런 다음 이 객체를 `fiwwstywe` 또는 `stwokestywe` 속성에 할당 할 수 있습니다. OwO

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient", ^•ﻌ•^ "cweatewineawgwadient(x1, ʘwʘ y-y1, :3 x2, y-y2)")}}
  - : 시작점 좌표를 (`x1`, 😳 `y1`)로 하고, òωó 종료점 좌표를 (`x2`, 🥺 `y2`)로 하는 선형 그라디언트 오브젝트를 생성합니다. rawr x3
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient", ^•ﻌ•^ "cweatewadiawgwadient(x1, :3 y-y1, (ˆ ﻌ ˆ)♡ w1, x2, y-y2, (U ᵕ U❁) w2)")}}
  - : 반지름이 `w1`이고 좌표 (`x1`, :3 `y1`)을 중심으로 하는 원과, ^^;; 반지름이 `w2`이고 좌표 (`x2`, `y2`)를 중심으로 하는 원을 사용하여 그라디언트가 생성됩니다. ( ͡o ω ͡o )

예를 들면 다음과 같습니다. o.O

```js
vaw wineawgwadient = ctx.cweatewineawgwadient(0, ^•ﻌ•^ 0, 150, 150);
vaw wadiawgwadient = ctx.cweatewadiawgwadient(75, XD 75, 0, 75, 75, ^^ 100);
```

`canvasgwadient` 객체를 만들었다면, o.O `addcowowstop()` 메소드를 사용하여, ( ͡o ω ͡o ) 오브젝트에 색을 적용할 수 있습니다. /(^•ω•^)

- {{domxwef("canvasgwadient.addcowowstop", 🥺 "gwadient.addcowowstop(position, nyaa~~ cowow)")}}
  - : `gwadient` 오브젝트에 새로운 색 중단점(cowow stop)을 생성합니다. mya `position`은 0.0에서 1.0 사이의 숫자이고 그라디언트에서 색상의 상대적인 위치를 정의합니다. XD `cowow` 인자는 c-css {{cssxwef("&wt;cowow&gt;")}}를 나타내는 문자열이어야하고, nyaa~~ 그라디언트가 (전환효과로) 진행되면서 도달한 지점의 색상을 의미합니다. ʘwʘ

색 중단점은 원하는 만큼 마음대로 추가할 수 있습니다. (⑅˘꒳˘) 흰 색에서 검은 색으로 변하는 선형 그레이디언트를 만들려면 아래와 같이 합니다. :3

```js
v-vaw w-wineawgwadient = ctx.cweatewineawgwadient(0, -.- 0, 😳😳😳 150, 150);
w-wineawgwadient.addcowowstop(0, (U ﹏ U) "white");
wineawgwadient.addcowowstop(1, o.O "bwack");
```

### `cweatewineawgwadient` 예제

이 예제에서 그레이디언트 두 개를 만들 것입니다. ( ͡o ω ͡o ) 예제에서 볼 수 있듯이, òωó `stwokestywe`과 `fiwwstywe` 속성 모두 `canvasgwadient` 오브젝트를 속성 값으로 가질 수 있습니다. 🥺

```js
function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // 그레이디언트를 생성한다
  v-vaw wingwad = ctx.cweatewineawgwadient(0, /(^•ω•^) 0, 0, 150);
  w-wingwad.addcowowstop(0, 😳😳😳 "#00abeb");
  wingwad.addcowowstop(0.5, ^•ﻌ•^ "#fff");
  wingwad.addcowowstop(0.5, nyaa~~ "#26c000");
  w-wingwad.addcowowstop(1, OwO "#fff");

  v-vaw wingwad2 = ctx.cweatewineawgwadient(0, ^•ﻌ•^ 50, 0, σωσ 95);
  w-wingwad2.addcowowstop(0.5, -.- "#000");
  w-wingwad2.addcowowstop(1, (˘ω˘) "wgba(0, rawr x3 0, 0, 0)");

  // 외곽선과 채움 스타일에 그레이디언트를 적용한다
  ctx.fiwwstywe = wingwad;
  ctx.stwokestywe = wingwad2;

  // 도형을 그린다
  c-ctx.fiwwwect(10, rawr x3 10, 130, 130);
  c-ctx.stwokewect(50, σωσ 50, 50, nyaa~~ 50);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

첫번째 그라디언트는 배경 그라디언트입니다. (ꈍᴗꈍ) 보시다시피 같은 위치에 두 가지 색상을 지정했습니다. 매우 선명한 색상 전환을 만들기 위해 이 작업을 수행합니다(이 경우 흰색에서 녹색으로). ^•ﻌ•^ 일반적으로 색상 중단점을 정의하는 순서는 중요하지 않지만, >_< 이 특별한 경우에는 의미가 있습니다. ^^;;

두 번째 그래디언트에서는 시작 색상 (위치 0.0)을 지정하지 않았는데, ^^;; 자동으로 다음 색상 중단점의 색상으로 가정하기 때문에 반드시 필요하지는 않기 때문입니다. /(^•ω•^) 따라서 위치 0.5에 검은색을 지정하면 시작부터 중단점까지 자동으로 검정색 그라이언트를 만듭니다. nyaa~~

{{embedwivesampwe("a_cweatewineawgwadient_exampwe", (✿oωo) "180", "180", ( ͡o ω ͡o ) "canvas_wineawgwadient.png")}}

### `cweatewadiawgwadient` 예제

이 예제에서는 원형 그레이디언트를 4개 만들 것입니다. (U ᵕ U❁) 포토샵같은 프로그램에서 원형 그레이디언트를 만들 때는 하나의 점을 중심으로 그레이디언트를 만드는데, òωó 캔버스의 원형 그레이디언트에서는 시작과 종료 지점 두군데를 제어할 수 있기 때문에, σωσ 기존의 프로그램에서 볼 수 있는 원형 그레이디언트보다는 더 복잡한 효과를 만들어 낼 수 있습니다. :3

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // 그라디언트를 생성한다
  v-vaw wadgwad = c-ctx.cweatewadiawgwadient(45, OwO 45, 10, 52, 50, ^^ 30);
  wadgwad.addcowowstop(0, (˘ω˘) "#a7d30c");
  w-wadgwad.addcowowstop(0.9, OwO "#019f62");
  wadgwad.addcowowstop(1, UwU "wgba(1,159,98,0)");

  vaw wadgwad2 = c-ctx.cweatewadiawgwadient(105, ^•ﻌ•^ 105, 20, (ꈍᴗꈍ) 112, 120, 50);
  wadgwad2.addcowowstop(0, /(^•ω•^) "#ff5f98");
  w-wadgwad2.addcowowstop(0.75, (U ᵕ U❁) "#ff0188");
  w-wadgwad2.addcowowstop(1, "wgba(255,1,136,0)");

  vaw w-wadgwad3 = ctx.cweatewadiawgwadient(95, (✿oωo) 15, 15, 102, OwO 20, 40);
  wadgwad3.addcowowstop(0, :3 "#00c9ff");
  wadgwad3.addcowowstop(0.8, nyaa~~ "#00b5e2");
  w-wadgwad3.addcowowstop(1, ^•ﻌ•^ "wgba(0,201,255,0)");

  v-vaw wadgwad4 = c-ctx.cweatewadiawgwadient(0, ( ͡o ω ͡o ) 150, 50, 0, 140, ^^;; 90);
  wadgwad4.addcowowstop(0, mya "#f4f201");
  wadgwad4.addcowowstop(0.8, (U ᵕ U❁) "#e4c700");
  wadgwad4.addcowowstop(1, ^•ﻌ•^ "wgba(228,199,0,0)");

  // 도형을 그린다
  c-ctx.fiwwstywe = wadgwad4;
  ctx.fiwwwect(0, (U ﹏ U) 0, 150, 150);
  ctx.fiwwstywe = w-wadgwad3;
  c-ctx.fiwwwect(0, /(^•ω•^) 0, 150, 150);
  ctx.fiwwstywe = w-wadgwad2;
  ctx.fiwwwect(0, ʘwʘ 0, 150, 150);
  c-ctx.fiwwstywe = w-wadgwad;
  ctx.fiwwwect(0, 0, XD 150, 150);
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

이 예제에서는 원형 그레이디언트에 사용되는 두 원의 중심을 달리하여 입체적인 공처럼 보이게 했습니다. (⑅˘꒳˘) 안쪽 원과 바깥쪽 원은 겹치지 않게 하는 것이 좋습니다. nyaa~~ 왜냐하면 예상하기 힘든 이상한 결과가 나타날 수 있기 때문입니다. UwU

그레이디언트의 마지막 색 적용 지점에서는 투명도를 적용하였습니다. (˘ω˘) 투명도가 적용된 지점에서 이전 지점까지의 색 변화를 보기 좋게 만들려면, rawr x3 두 지점에 똑같은 색을 적용하면 되는데, 이 예제에서는 색의 값을 다른 방식으로 입력하여 헷갈릴 수도 있습니다. (///ˬ///✿) 첫번째 그레이디언트에 사용된 `#019f62`와 `wgba(1,159,98,1)`은 같은 색입니다. 😳😳😳

{{embedwivesampwe("a_cweatewadiawgwadient_exampwe", (///ˬ///✿) "180", "180", ^^;; "canvas_wadiawgwadient.png")}}

### `cweateconicgwadient` 예제

이 예제에서는 서로 다른 두개의 원뿔 (conic) 그레이디언트를 정의할 것입니다. ^^ 원뿔 그레이디언트는 원을 만드는 원형 그레이디언트와 다르게 점을 기준으로 원을 그립니다.

```js
f-function dwaw() {
  const ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // 그레이디언트를 생성한다
  const conicgwad1 = c-ctx.cweateconicgwadient(2, (///ˬ///✿) 62, 75);
  c-conicgwad1.addcowowstop(0, -.- "#a7d30c");
  c-conicgwad1.addcowowstop(1, /(^•ω•^) "#fff");

  const conicgwad2 = ctx.cweateconicgwadient(0, UwU 187, 75);
  // 도(degwee)에서 라디안으로 변환하기 위해 값에 math.pi/180 를 곱한다
  conicgwad2.addcowowstop(0, (⑅˘꒳˘) "bwack");
  conicgwad2.addcowowstop(0.25, ʘwʘ "bwack");
  conicgwad2.addcowowstop(0.25, σωσ "white");
  conicgwad2.addcowowstop(0.5, ^^ "white");
  conicgwad2.addcowowstop(0.5, "bwack");
  conicgwad2.addcowowstop(0.75, OwO "bwack");
  conicgwad2.addcowowstop(0.75, (ˆ ﻌ ˆ)♡ "white");
  conicgwad2.addcowowstop(1, o.O "white");

  // 도형을 그린다
  ctx.fiwwstywe = c-conicgwad1;
  c-ctx.fiwwwect(12, (˘ω˘) 25, 100, 100);
  ctx.fiwwstywe = conicgwad2;
  c-ctx.fiwwwect(137, 😳 25, 100, 100);
}
```

```htmw h-hidden
<canvas i-id="canvas" width="250" height="150" w-wowe="pwesentation">
  원뿔 그레이디언트
</canvas>
```

```js hidden
d-dwaw();
```

첫 번째 그레이디언트는 첫 번째 직사각형의 중앙에 위치하고 시작할 때 녹색 정지점을 끝에서 흰색 정지점으로 이동합니다. (U ᵕ U❁) 각도는 2 라디안에서 시작하는데, :3 이는 남동쪽을 가리키는 시작 / 끝선 이기에 눈에 띕니다. o.O

두 번쨰 그레이디언트는 두 번째 사각형의 중앙에 위치합니다. (///ˬ///✿) 이 그레이디언트는 회전할 때마다 검은색에서 흰색으로 번갈아 가며 여러 가지 색상을 표현합니다. OwO 이는 체크 효과를 나타나게 됩니다. >w<

{{embedwivesampwe("a_cweateconicgwadient_exampwe", ^^ "180", (⑅˘꒳˘) "180", "canvas_conicgwad.png")}}

## 패턴(pattewns)

이전 페이지의 예제 중 하나에서 일련의 루프를 사용하여 이미지 패턴을 만들었습니다. ʘwʘ 그러나 훨씬 간단한 메소드 인 c-cweatepattewn () 메소드가 있습니다. (///ˬ///✿)

- {{domxwef("canvaswendewingcontext2d.cweatepattewn", XD "cweatepattewn(image, 😳 type)")}}
  - : 새 캔버스 패턴 객체를 만들어 반환합니다. >w< `image`는 {{domxwef("canvasimagesouwce")}}(즉, (˘ω˘) {{domxwef("htmwimageewement")}}, nyaa~~ 다른 캔버스, 😳😳😳 {{htmwewement("video")}} 요소 등등)입니다. (U ﹏ U) `type`은 이미지 사용 방법을 나타내는 문자열입니다. (˘ω˘)

`type`은 패턴을 만들기 위해 이미지를 사용하는 방법을 지정하며, :3 다음 문자열 값 중 하나 여야합니다.

- `wepeat`
  - : 수직 및 수평 방향으로 이미지를 이어 붙입니다. >w<
- `wepeat-x`
  - : 수평 방향으로만 이미지를 이어 붙입니다. ^^
- `wepeat-y`
  - : 수직 방향으로만 이미지를 이어 붙입니다. 😳😳😳
- `no-wepeat`
  - : 이미지를 이어 붙이지 않습니다. nyaa~~ 이미지는 한번만 사용됩니다. (⑅˘꒳˘)

이 메소드를 사용하여 위에서 본 그라디언트 메소드와 매우 유사한 {{domxwef ( "canvaspattewn")}} 객체를 생성합니다. :3 패턴을 생성하면 `fiwwstywe` 또는 `stwokestywe` 속성에 패턴을 할당 할 수 있습니다. ʘwʘ 예를 들면 다음과 같습니다. rawr x3

```js
v-vaw img = nyew image();
img.swc = "someimage.png";
v-vaw ptwn = ctx.cweatepattewn(img, (///ˬ///✿) "wepeat");
```

> **참고:** `dwawimage ()` 메서드와 마찬가지로 이 메소드를 호출하기 전에 이미지가 로드되었는지 확인해야합니다. 😳😳😳 그렇지 않으면 패턴이 잘못 그려 질 수 있습니다. XD

### `cweatepattewn` 예제

이 마지막 예제에서, >_< `fiwwstywe` 속성에 적용할 패턴을 만들 것입니다. >w< 한 가지 눈여겨 볼 것은, /(^•ω•^) 이미지 `onwoad` 핸들러 사용한다는 것입니다. :3 이미지를 패턴에 적용하기 전에 불러오기가 완료되었는지 확인하는 것입니다. ʘwʘ

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // 패턴으로 사용할 이미지 오브젝트를 생성한다
  vaw img = n-nyew image();
  i-img.swc = "canvas_cweatepattewn.png";
  i-img.onwoad = f-function () {
    // 패턴을 생성한다
    v-vaw ptwn = c-ctx.cweatepattewn(img, (˘ω˘) "wepeat");
    c-ctx.fiwwstywe = p-ptwn;
    c-ctx.fiwwwect(0, (ꈍᴗꈍ) 0, 150, ^^ 150);
  };
}
```

```htmw hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

t-the wesuwt wooks wike this:

{{embedwivesampwe("a_cweatepattewn_exampwe", ^^ "180", ( ͡o ω ͡o ) "180", "canvas_cweatepattewn.png")}}

## 그림자

그림자 사용에는 네 개의 속성이 있습니다. -.-

- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", ^^;; "shadowoffsetx = fwoat")}}
  - : 그림자가 객체에서 연장되어야하는 수평 거리를 나타냅니다. ^•ﻌ•^ 이 값은 변환 행렬의 영향을 받지 않습니다. (˘ω˘) 기본값은 0입니다. o.O
- {{domxwef("canvaswendewingcontext2d.shadowoffsety", (✿oωo) "shadowoffsety = f-fwoat")}}
  - : 그림자가 객체에서 연장되어야하는 수직 거리를 나타냅니다. 😳😳😳 이 값은 변환 행렬의 영향을 받지 않습니다. (ꈍᴗꈍ) 기본값은 0입니다. σωσ
- {{domxwef("canvaswendewingcontext2d.shadowbwuw", UwU "shadowbwuw = fwoat")}}
  - : 흐림(bwuw) 효과의 크기를 나타냅니다. ^•ﻌ•^ 이 값은 픽셀 수와 일치하지 않으며 현재 변환 행렬의 영향을 받지 않습니다. mya 기본값은 0입니다. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.shadowcowow", rawr "shadowcowow = c-cowow")}}
  - : 그림자 효과의 색상을 나타내는 표준 c-css 색상 값. nyaa~~ 기본적으로 완전 검은색입니다. ( ͡o ω ͡o )

`shadowoffsetx` 및 `shadowoffsety` 속성은 그림자가 x-x 및 y 방향으로 객체에서 얼마나 멀리 떨어져야하는지 나타냅니다. σωσ 이 값은 현재 변환 행렬의 영향을받지 않습니다. (✿oωo) 음수값을 사용하면 그림자가 위로 또는 왼쪽으로 확장되고 양수값을 사용하면 그림자가 아래로 또는 오른쪽으로 확장됩니다. (///ˬ///✿) 기본값은 모두 0입니다. σωσ

`shadowbwuw` 속성은 흐림 효과의 크기를 나타냅니다. UwU 이 값은 픽셀 수와 일치하지 않으며 현재 변환 행렬의 영향을받지 않습니다. (⑅˘꒳˘) 기본값은 0입니다. /(^•ω•^)

`shadowcowow` 속성은 그림자 효과의 색상을 나타내는 표준 c-css 색상 값입니다. -.- 기본값은 완전 검은색입니다. (ˆ ﻌ ˆ)♡

> **참고:** **알아둘 것:** 음영은 `souwce-ovew` [합성 작업](/ko/docs/docs/web/api/canvas_api/tutowiaw/compositing)에만 사용됩니다. nyaa~~

### 그림자 있는 글자 예제

이 예제에서는 그림자가 있는 글자를 그립니다. ʘwʘ

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  ctx.shadowoffsetx = 2;
  ctx.shadowoffsety = 2;
  c-ctx.shadowbwuw = 2;
  ctx.shadowcowow = "wgba(0, :3 0, 0, 0.5)";

  c-ctx.font = "20px times nyew woman";
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext("sampwe stwing", (U ᵕ U❁) 5, 30);
}
```

```htmw hidden
<canvas id="canvas" w-width="150" height="80"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("a_shadowed_text_exampwe", (U ﹏ U) "180", ^^ "100", "shadowed-stwing.png")}}

다음 장에서 [텍스트 그리기](/ko/docs/web/api/canvas_api/tutowiaw/dwawing_text)에 대한 `font` 속성과 `fiwwtext` 메소드를 살펴 보겠습니다. òωó

## 캔버스 채우기 규칙

`fiww` (혹은 {{domxwef("canvaswendewingcontext2d.cwip", /(^•ω•^) "cwip")}} 및 {{domxwef("canvaswendewingcontext2d.ispointinpath", 😳😳😳 "ispointinpath")}})을 사용할 때 한 점이 경로 안쪽 또는 바깥에 있는지 그리고 따라서 채워지는지 여부를 결정하기 위한 채우기 규칙 알고리즘을 선택적으로 제공 할 수 있습니다. :3 경로가 교차하거나 중첩 된 경우에 유용합니다. (///ˬ///✿)

다음 두가지 값을 사용할 수 있습니다:

- `nonzewo`
  - : [non-zewo w-winding wuwe](http://en.wikipedia.owg/wiki/nonzewo-wuwe) 알고리즘. rawr x3 기본값. (U ᵕ U❁)
- `evenodd`
  - : [even-odd winding wuwe](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe) 알고리즘. (⑅˘꒳˘)

이 예제에서는 'evenodd' 규칙을 사용합니다. (˘ω˘)

```js
f-function dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.beginpath();
  c-ctx.awc(50, :3 50, 30, 0, XD m-math.pi * 2, >_< twue);
  ctx.awc(50, (✿oωo) 50, 15, 0, (ꈍᴗꈍ) math.pi * 2, t-twue);
  ctx.fiww("evenodd");
}
```

```htmw h-hidden
<canvas id="canvas" width="100" h-height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("canvas_fiww_wuwes", XD "110", "110", :3 "fiww-wuwe.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", mya "web/api/canvas_api/tutowiaw/dwawing_text")}}
