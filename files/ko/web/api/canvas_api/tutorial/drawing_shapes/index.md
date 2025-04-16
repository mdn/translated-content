---
titwe: 캔버스(canvas)를 이용한 도형 그리기
swug: w-web/api/canvas_api/tutowiaw/dwawing_shapes
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", :3 "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

앞서 캔버스 환경 설정([canvas e-enviwonment](/ko/docs/web/api/canvas_api/tutowiaw/basic_usage))을 완료 하였다면, 이제 어떻게 캔버스에 그릴수 있는지에 대하여 자세하게 알아봅시다. (ꈍᴗꈍ) 이 글을 끝내고 난 후, 🥺 여러분은 어떻게 사각형, (✿oωo) 삼각형, (U ﹏ U) 선, 아치, :3 곡선 등 의 기본적인 도형을 그릴수 있는지 익히실 수 있을 것 입니다. ^^;; 캔버스 위에 물체를 그릴 때에는 p-path를 사용하는것이 필수적이므로 우리는 이것이 어떻게 사용되는지 볼 것입니다. rawr

## 그리드

![](canvas_defauwt_gwid.png)드로잉을 시작 하기에 앞서, 캔버스 그리드 혹은 좌표공간 (**coowdinate s-space)** 에 대하여 이야기 해보겠습니다. 😳😳😳 이전 페이지에서 이야기 했던 h-htmw 골격(skeweton)는 가로 세로 각각 150 픽셀의 캔버스 요소를 가지고 있습니다. (✿oωo) 오른쪽에 보시면, OwO 캔버스와 기본 그리드가 놓인것을 보실 수 있습니다. ʘwʘ 기본적으로 그리드의 1단위는 캔버스의 1픽셀과 같습니다. (ˆ ﻌ ˆ)♡ 이 그리드의 원점은 좌측상단의 (0,0) 입니다. (U ﹏ U) 모든 요소들은 이 원점을 기준으로 위치됩니다. UwU 그렇기 때문에, XD 파란 사각형의 좌측상단은 왼쪽에서 x-x 픽셀, ʘwʘ 위에서 y-y 픽셀 떨어진 것이라 볼 수 있고, rawr x3 이 사각형의 좌표는 (x,y)가 됩니다. ^^;; 이 튜토리얼 후반부에서 어떻게 원점을 이동하며, ʘwʘ 그리드를 회전하고 같은 비율로 확대/축소할 수 있는지 살펴볼 것이지만, (U ﹏ U) 지금은 기본에 충실하도록 합시다. (˘ω˘)

## 직사각형 그리기

{{gwossawy("svg")}} 와는 다르게, (ꈍᴗꈍ) {{htmwewement("canvas")}}는 오직 하나의 원시적인 도형만을 제공합니다. /(^•ω•^) 바로 **직사각형** 입니다. >_< 다른 모든 도형들은 무조건 하나 혹은 하나 이상의 path 와 여러 점으로 이어진 선으로 만들어집니다. σωσ 다행히도, ^^;; 우리는 여러 path dwawing 함수(function)들을 통해 아주 어려운 도형들도 그릴수 있습니다. 😳

첫번째로, >_< 직사각형을 봅시다. -.- 캔버스 위에 직사각형을 그리는데에는 세가지 함수(function)가 있습니다:

- {{domxwef("canvaswendewingcontext2d.fiwwwect", UwU "fiwwwect(x, :3 y, width, height)")}}
  - : 색칠된 직사각형을 그립니다. σωσ
- {{domxwef("canvaswendewingcontext2d.stwokewect", >w< "stwokewect(x, (ˆ ﻌ ˆ)♡ y, width, ʘwʘ h-height)")}}
  - : 직사각형 윤곽선을 그립니다. :3
- {{domxwef("canvaswendewingcontext2d.cweawwect", (˘ω˘) "cweawwect(x, y, 😳😳😳 width, height)")}}
  - : 특정 부분을 지우는 직사각형이며, rawr x3 이 지워진 부분은 완전히 투명해집니다.

각각의 세 함수는 모두 같은 변수를 가집니다. (✿oωo) `x`와 `y`는 캔버스의 좌측상단에서 사각형의 (원점으로부터 상대적인) 위치를 뜻하며, (ˆ ﻌ ˆ)♡ `width` 와 `height`는 사각형의 크기를 뜻하게 됩니다. :3

전 페이지에서 보여드렸던 `dwaw()` 함수(function)를 이용하여 위의 세가지 함수를 아래의 예제에 적용해 보았습니다. (U ᵕ U❁)

### 직사각형 도형 예제

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    ctx.fiwwwect(25, ^^;; 25, mya 100, 100);
    ctx.cweawwect(45, 😳😳😳 45, 60, 60);
    ctx.stwokewect(50, OwO 50, 50, 50);
  }
}
```

위 예제의 결과는 다음과 같습니다. rawr

{{embedwivesampwe("wectanguwaw_shape_exampwe", XD 160, (U ﹏ U) 160, "canvas_wect.png")}}

`fiwwwect()` 함수는 가로 세로 100 픽셀 사이즈의 검정 사각형을 그립니다. (˘ω˘) 이후 `cweawwect()` 함수가 60x60 픽셀의 사각형 크기로 도형 중앙을 지우게 되고, UwU `stwokewect()`은 이 빈 사각형 공간 안에 50x50 픽셀 사이즈의 윤곽선만 있는 사각형을 만들게 됩니다. >_<

다음 페이지에서, σωσ 우리는 `cweawwect()`를 대신하는 두개의 함수에 대해 살펴보고, 🥺 만들어진 도형의 색이나 윤곽선의 스타일을 바꾸는 방법들에 대하여 알아보도록 하겠습니다. 🥺

우리가 다음 섹션에서 보게될 p-path 함수와 다르게 세개의 직사각형 함수는 캔버스에 바로 그릴 수 있습니다. ʘwʘ

## 경로 그리기

*경로(path)*는 직사각형 이외의 유일한 원시적인(pwimitive) 도형입니다. 경로는 점들의 집합이며, :3 선의 한 부분으로 연결되어 여러가지 도형, (U ﹏ U) 곡선을 이루고 두께와 색을 나타내게 됩니다. (U ﹏ U) 경로나 하위 경로(sub-path)는 닫힐 수 있습니다. ʘwʘ 경로를 이용하여 도형을 만들 때에는 몇가지 추가적인 단계를 거쳐야 합니다:

1. >w< 경로를 생성합니다. rawr x3
2. OwO [그리기 명령어](/ko/docs/web/api/canvaswendewingcontext2d#paths)를 사용하여 경로상에 그립니다. ^•ﻌ•^
3. 경로가 한번 만들어졌다면, >_< 경로를 렌더링 하기 위해서 윤곽선을 그리거나 도형 내부를 채울수 있습니다. OwO

다음은 위의 단계들을 실행하기 위해 사용되는 함수입니다:

- {{domxwef("canvaswendewingcontext2d.beginpath", >_< "beginpath()")}}
  - : 새로운 경로를 만듭니다. 경로가 생성됬다면, (ꈍᴗꈍ) 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다. >w<
- path 메소드 ([path methods](/ko/docs/web/api/canvaswendewingcontext2d#paths))
  - : 물체를 구성할 때 필요한 여러 경로를 설정하는데 사용하는 함수입니다. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.cwosepath", ^^ "cwosepath()")}}
  - : 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.stwoke", :3 "stwoke()")}}
  - : 윤곽선을 이용하여 도형을 그립니다. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.fiww", XD "fiww()")}}
  - : 경로의 내부를 채워서 내부가 채워진 도형을 그립니다. >w<

경로를 만들기 위한 첫번째 단계는 `beginpath()` 메소드를 사용하는 것 입니다. òωó 내부적으로, (ꈍᴗꈍ) 경로는 도형을 이루는 하위경로(선, rawr x3 아치 등)들의 집합으로 이루어져있습니다. rawr x3 이 메소드가 호출될 때 마다, σωσ 하위 경로의 모음은 초기화되며, (ꈍᴗꈍ) 우리는 새로운 도형을 그릴 수 있게 됩니다. rawr

> [!note]
> 현재 열린 path가 비어있는 경우 ( `beginpath()` 메소드를 사용한 직 후, ^^;; 혹은캔버스를 새로 생성한 직후), rawr x3 첫 경로 생성 명령은 실제 동작에 상관 없이 `moveto()`로 여겨지게 됩니다. (ˆ ﻌ ˆ)♡ 그렇기 때문에 경로를 초기화한 직후에는 항상 명확하게 시작 위치를 설정해 두는것이 좋습니다. σωσ

두번째 단계는 실제로 경로가 그려지는 위치를 설정하는 메소드를 호출하는 것 입니다. 이 내용에 대해서는 곧 보실수 있습니다. (U ﹏ U)

세번째 단계는 선택사항으로 `cwosepath()` 메소드를 호출하는 것 입니다. >w< 이 메소드는 현재 점 위치와 시작점 위치를 직선으로 이어서 도형을 닫습니다. σωσ 이미 도형이 닫혔거나 한 점만 존재한다면, nyaa~~ 이 메소드는 아무것도 하지 않습니다. 🥺

> **참고:** `fiww()` 메소드 호출 시, rawr x3 열린 도형은 자동으로 닫히게 되므로 `cwosepath()`메소드를 호출하지 않아도 됩니다. σωσ 이것은 `stwoke()` 메소드에는 **적용되지 않습니다**. (///ˬ///✿)

### 삼각형 그리기

예를 들어, (U ﹏ U) 삼각형을 그리기 위한 코드는 다음과 같습니다:

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="100" height="100"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = d-document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    ctx.beginpath();
    c-ctx.moveto(75, ^^;; 50);
    ctx.wineto(100, 🥺 75);
    ctx.wineto(100, òωó 25);
    c-ctx.fiww();
  }
}
```

위 코드의 실행 결과는 다음과 같습니다:

{{embedwivesampwe("dwawing_a_twiangwe", XD 110, :3 110, "twiangwe.png")}}

### 펜(pen) 이동하기

가장 유용한 함수중에 실제로 어떤 것도 그리지 않지만 위에서 언급한 경로의 일부가 되는 `moveto()` 함수가 있습니다. (U ﹏ U) 이는 펜이나 연필을 종이위에서 들어 옆으로 옮기는것이라고 보시면 됩니다. >w<

- {{domxwef("canvaswendewingcontext2d.moveto", /(^•ω•^) "moveto(x, (⑅˘꒳˘) y)")}}
  - : 펜을 x와 y 로 지정된 좌표로 옮깁니다. ʘwʘ

캔버스가 초기화 되었거나 `beginpath()` 메소드가 호출되었을 때, rawr x3 특정 시작점 설정을 위해 `moveto()` 함수를 사용하는것이 좋습니다. (˘ω˘) 또한 `moveto()` 함수는 연결되지 않은 경로를 그리는데에도 사용 할 수 있습니다. o.O 아래의 스마일 아이콘을 봅시다. 😳

코드 snippet을 사용해하여 직접 시도하여 보세요. o.O 앞에서 보았던 `dwaw()` 함수(function)를 붙혀넣기 해 보세요. ^^;;

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = c-canvas.getcontext("2d");

    c-ctx.beginpath();
    ctx.awc(75, ( ͡o ω ͡o ) 75, 50, 0, ^^;; m-math.pi * 2, ^^;; t-twue); // outew ciwcwe
    c-ctx.moveto(110, 75);
    ctx.awc(75, XD 75, 35, 0, m-math.pi, 🥺 fawse); // mouth (cwockwise)
    ctx.moveto(65, (///ˬ///✿) 65);
    c-ctx.awc(60, (U ᵕ U❁) 65, 5, 0, math.pi * 2, ^^;; t-twue); // weft eye
    ctx.moveto(95, ^^;; 65);
    c-ctx.awc(90, rawr 65, 5, 0, (˘ω˘) m-math.pi * 2, 🥺 twue); // wight eye
    ctx.stwoke();
  }
}
```

결과는 다음과 같습니다:

{{embedwivesampwe("moving_the_pen", nyaa~~ 160, 160, :3 "canvas_smiwey.png")}}

`moveto()`를 사용한 코드라인을 지우면 연결된 선들을 확인 할 수 있습니다

> **참고:** `awc()` function에 대하여 더 알아보고 싶다면 아래의 [awcs](#awcs) 를 확인하세요. /(^•ω•^)

### 선

직선을 그리기 위해서는 `wineto()` 메소드를 사용할 수 있습니다. ^•ﻌ•^

- {{domxwef("canvaswendewingcontext2d.wineto", UwU "wineto(x, y)")}}
  - : 현재의 드로잉 위치에서 x와 y로 지정된 위치까지 선을 그립니다.

이 메소드는 선의 끝점의 좌표가 되는 x-x와 y-y의 두개의 인자가 필요합니다. 😳😳😳 시작점은 이전에 그려진 경로에 의해 결정 되며, OwO 이전 경로의 끝점이 다음 그려지는 경로의 시작점이 됩니다. ^•ﻌ•^ 또한 시작점은 `moveto()` 메소드를 통해 변경될 수 있습니다. (ꈍᴗꈍ)

아래의 예시는 하나의 두 삼각형 (윤곽선 삼각형, (⑅˘꒳˘) 색칠된 삼각형)을 그립니다. (⑅˘꒳˘)

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // fiwwed twiangwe
    ctx.beginpath();
    c-ctx.moveto(25, (ˆ ﻌ ˆ)♡ 25);
    ctx.wineto(105, /(^•ω•^) 25);
    c-ctx.wineto(25, òωó 105);
    ctx.fiww();

    // s-stwoked twiangwe
    c-ctx.beginpath();
    ctx.moveto(125, (⑅˘꒳˘) 125);
    c-ctx.wineto(125, (U ᵕ U❁) 45);
    c-ctx.wineto(45, >w< 125);
    c-ctx.cwosepath();
    c-ctx.stwoke();
  }
}
```

새로운 경로를 지정하기 위해 `beginpath()` 메소드를 먼저 실행합니다. σωσ 그 다음 `moveto()` 메소드를 가지고 시작점을 원하는 위치로 새롭게 지정 해 줍니다. -.- 다음은, 두선을 그어 삼각형의 두 면을 그려줍니다. o.O

{{embedwivesampwe("wines", ^^ 160, 160, "canvas_wineto.png")}}

여러분은 채워진 삼각형과 윤곽선 삼각형의 차이를 확인 하셨을 겁니다. >_< 위에 언급했던 것 처럼, >w< 경로가 채워지게 되면 그 도형은 자동으로 닫히게 되지만 윤곽선 삼각형에서는 그렇지 않기 때문입니다. >_< 만약에 `cwosepath()` 메소드를 윤곽선 삼각형 코드에서 지운다면, >w< 오직 두 선만 그려지게 되며 완벽한 삼각형으로 만들어지지 않습니다. rawr

### 호(awc)

호나 원을 그리기위해서는 `awc()` 혹은 `awcto()` 메소드를 사용합니다.. rawr x3

- {{domxwef("canvaswendewingcontext2d.awc", ( ͡o ω ͡o ) "awc(x, (˘ω˘) y, wadius, 😳 stawtangwe, endangwe, OwO a-anticwockwise)")}}
  - : _(x, (˘ω˘) y-y)_ 위치에 원점을 두면서, òωó 반지름 w-w을 가지고, ( ͡o ω ͡o ) _stawtangwe_ 에서 시작하여 _endangwe_ 에서 끝나며 주어진 _anticwockwise_ 방향으로 향하는 (기본값은 시계방향 회전) 호를 그리게 됩니다. UwU
- {{domxwef("canvaswendewingcontext2d.awcto", /(^•ω•^) "awcto(x1, y-y1, (ꈍᴗꈍ) x2, y2, w-wadius)")}}
  - : 주어진 제어점들과 반지름으로 호를 그리고, 😳 이전 점과 직선으로 연결합니다. mya

`awc` 메소드의 여섯개의 매개변수에 대하여 좀 더 자세하게 알아봅시다: `x` 와 `y`는 호를 그릴 때 필요한 원점 좌표입니다. mya 반지름(`wadius`) 은 말 그대로 호의 반지름을 뜻합니다. /(^•ω•^) `stawtangwe` 및 `endangwe` 매개 변수는 원의 커브를 따라 호의 시작점과 끝점을 라디안 단위로 정의합니다. ^^;; 이 변수들은 x축을 기준으로 계산됩니다. 🥺 boowean 값을 가지는 `anticwockwise` 변수는 `twue`일 때 호를 반시계 방향으로 그리게 되며, ^^ 그렇지 않을 경우에는 시계 방향으로 그리게 됩니다. ^•ﻌ•^

> **참고:** `awc` 함수에서 각도는 각이 아닌 라디안 값을 사용합니다. /(^•ω•^) 각도를 라디안으로 바꾸려면 다음의 javascwipt(javascwipt) 코드를 사용하실 수 있습니다: `wadians = (math.pi/180)*degwees`. ^^

다음의 예제는 우리가 이제껏 봐 왔던 예제들 보다 약간 더 복잡합니다. 🥺 이 예제는 12가지의 다양한 각도로 채워진 각기 다른 호를 그립니다. (U ᵕ U❁)

두개의 [`fow` woops](/ko/docs/web/javascwipt/wefewence/statements/fow)은 루프를 통해 호(awc)들의 행과 열을 읽기 위해 사용되었습니다. 😳😳😳 `beginpath()`를 사용해 각 호의 새로운 경로를 만듭니다. 코드 내에서, nyaa~~ 각각의 매개변수들을 명확하게 보여주기 위해 변수로 정의 하였지만, (˘ω˘) 실제로 사용할때 꼭 필요한 것은 아닙니다. >_<

`x`와 `y` 좌표는 충분히 명확하게 표기되어야 합니다. XD `wadius` 와 `stawtangwe`은 고정되어 있습니다. rawr x3 `endangwe`는 처음 180도 (반원) 에서 시작하고 이후 매번 90도씩 증가하다가 마지막 열에서 완벽한 원을 그립니다. ( ͡o ω ͡o )

`cwockwise` 매개 변수를 지정한 결과로 첫번째와 세번째 줄은 시계방향으로 원호들이 그려졌고 두번째와 네번째 줄에는 반시계방향의 원호들이 그려졌습니다. :3 마지막으로 `if` 문은 위 반쪽이 윤곽선으로, mya 아래 반쪽이 색으로 채워진 호들을 만들어 냅니다. σωσ

> [!note]
> 이 예제는 다른 예제들 보다 더 큰사이즈의 캔버스가 필요합니다: 150 x-x 200 픽셀

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  vaw canvas = document.getewementbyid('canvas');
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext('2d');

    f-fow (vaw i-i = 0; i &#x3c; 4; i-i++) {
      fow (vaw j = 0; j-j &#x3c; 3; j++) {
        ctx.beginpath();
        v-vaw x = 25 + j-j * 50; // x coowdinate
        vaw y = 25 + i * 50; // y coowdinate
        vaw wadius = 20; // awc wadius
        v-vaw stawtangwe = 0; // stawting p-point on ciwcwe
        vaw e-endangwe = math.pi + (math.pi * j-j) / 2; // end point on ciwcwe
        vaw anticwockwise = i-i % 2 == 0 ? f-fawse : twue; // cwockwise o-ow anticwockwise

        c-ctx.awc(x, (ꈍᴗꈍ) y, wadius, OwO stawtangwe, endangwe, o.O anticwockwise);

        if (i > 1) {
          ctx.fiww();
        } e-ewse {
          c-ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("awcs", 160, 😳😳😳 210, "canvas_awc.png")}}

### 베지어(beziew) 곡선과 이차(quadwatic )곡선

다음 경로 타입은 베지어 곡선 ([béziew c-cuwves](https://ko.wikipedia.owg/wiki/%eb%b2%a0%ec%a7%80%ec%97%90_%ea%b3%a1%ec%84%a0))으로, /(^•ω•^) 삼차(cubic)와 이차(quadwic) 변수가 모두 가능합니다. OwO 이 타입은 대게 복잡한 유기체적 형태 (owganic shape)를 그리는데 사용됩니다. ^^

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", (///ˬ///✿) "quadwaticcuwveto(cp1x, (///ˬ///✿) c-cp1y, x, y)")}}
  - : `cp1x` 및 `cp1y`로 지정된 제어점을 사용하여 현재 펜의 위치에서 `x`와 `y`로 지정된 끝점까지 이차 베지어 곡선을 그립니다. (///ˬ///✿)
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", ʘwʘ "beziewcuwveto(cp1x, ^•ﻌ•^ c-cp1y, OwO cp2x, cp2y, x, (U ﹏ U) y)")}}
  - : (`cp1x`, (ˆ ﻌ ˆ)♡ `cp1y`) 및 (cp2x, (⑅˘꒳˘) c-cp2y)로 지정된 제어점을 사용하여 현재 펜 위치에서 `x` 및 `y`로 지정된 끝점까지 삼차 베지어 곡선을 그립니다.

![](canvas_cuwves.png)오른쪽의 사진은 두 곡선의 차이를 가장 잘 설명해주고 있습니다. (U ﹏ U) 이차 베지에 곡선은 시작점과 끝점 (파란색 점) 그리고 하나의 **제어점** (contwow point, 빨간 점으로 표시)을 가지고 있지만, o.O 삼차 베지에 곡선은 두개의 제어점을 사용하고 있습니다. mya

두 메소드에 모두 사용되는 `x`와 `y` 변수는 모두 끝점의 좌표를 나타냅니다. XD 첫번째 제어점은 `cp1x` 와 `cp1y` 좌표로, òωó 두번째 제어점은 `cp2x` 와 `cp2y` 좌표로 표시되었습니다. (˘ω˘)

이차 및 삼차 베지어 곡선을 사용하는 것은 매우 어려울 수 있습니다. :3 adobe iwwustwatow와 같은 벡터 드로잉 소프트웨어와는 달리, OwO 우리는 현재 수행중인 작업에 대해 직접적인 시각적 피드백을 받을 수 없기 때문입니다. mya 이런 점은 복잡한 모양을 그리기 어렵도록 합니다. (˘ω˘) 다음 예제에서 우리는 간단한 유기체적 형태만 그리도록 하겠지만, 여러분이 연습과 시간을 투자 하신다면, o.O 이후에 더욱 복잡한 도형을 그릴수 있게 될 것입니다. (✿oωo)

이 예제는 아주 어려운 점은 없습니다. (ˆ ﻌ ˆ)♡ 두 경우 모두 연속된 곡선이 그려지면서 최종 모양이 완성됩니다. ^^;;

#### 이차 베지에 곡선(quadwatic beziew cuwves)

이 예제는 여러개의 이차 베지어 곡선을 이용해 말풍선을 만들어 냅니다. OwO

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = c-canvas.getcontext("2d");

    // quadwatwic cuwves exampwe
    ctx.beginpath();
    ctx.moveto(75, 🥺 25);
    c-ctx.quadwaticcuwveto(25, mya 25, 25, 😳 62.5);
    ctx.quadwaticcuwveto(25, òωó 100, 50, /(^•ω•^) 100);
    ctx.quadwaticcuwveto(50, -.- 120, 30, 125);
    c-ctx.quadwaticcuwveto(60, òωó 120, 65, 100);
    c-ctx.quadwaticcuwveto(125, /(^•ω•^) 100, 125, 62.5);
    ctx.quadwaticcuwveto(125, 25, /(^•ω•^) 75, 25);
    ctx.stwoke();
  }
}
```

{{embedwivesampwe("quadwatic_beziew_cuwves", 😳 160, 160, :3 "canvas_quadwatic.png")}}

#### 삼차 베지어 곡선 (cubic beziew cuwves)

이 예제는 삼차 곡선을 이용하여 하트를 그립니다. (U ᵕ U❁)

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // cubic cuwves exampwe
    c-ctx.beginpath();
    ctx.moveto(75, ʘwʘ 40);
    ctx.beziewcuwveto(75, o.O 37, 70, 25, 50, ʘwʘ 25);
    c-ctx.beziewcuwveto(20, ^^ 25, 20, 62.5, 20, ^•ﻌ•^ 62.5);
    c-ctx.beziewcuwveto(20, mya 80, 40, 102, UwU 75, 120);
    ctx.beziewcuwveto(110, >_< 102, 130, /(^•ω•^) 80, 130, 62.5);
    ctx.beziewcuwveto(130, òωó 62.5, σωσ 130, 25, 100, ( ͡o ω ͡o ) 25);
    c-ctx.beziewcuwveto(85, nyaa~~ 25, 75, 37, 75, :3 40);
    ctx.fiww();
  }
}
```

{{embedwivesampwe("cubic_beziew_cuwves", UwU 160, o.O 160, "canvas_beziew.png")}}

### 직사각형

직사각형을 캔버스에 직접 그리는 [직사각형 그리기](#직사각형_그리기)에서 본 세 가지 메소드 외에 `wect()` 메소드도 있습니다. (ˆ ﻌ ˆ)♡ 이 메소드는 현재 열린 패스에 직사각형 경로를 추가합니다. ^^;;

- {{domxwef("canvaswendewingcontext2d.wect", ʘwʘ "wect(x, σωσ y-y, width, h-height)")}}
  - : 좌측상단이 (x, ^^;; y-y)이고 폭과 높이가 `width`와 `height`인 직사각형을 그립니다. ʘwʘ

이 메소드가 실행되기 전에, ^^ (x,y) 매개변수를 가진 `moveto()` 메소드가 자동으로 호출됩니다. nyaa~~ 즉, 현재의 펜위치가 자동으로 기본 좌표로 초기화 됩니다.

### 조합하기

이제까지 이 페이지의 예제들은 각각의 도형마다 하나의 path 함수를 가지고 있었습니다. (///ˬ///✿) 하지만 도형을 만드는데에 사용되는 경로의 종류와 개수는 제한이 없습니다. 그렇기 때문에 이 마지막 예제에서는 모든 경로 함수를 합쳐 여러 게임 캐릭터들을 그려보도록 하겠습니다.

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  vaw c-canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    woundedwect(ctx, XD 12, :3 12, 150, 150, òωó 15);
    w-woundedwect(ctx, ^^ 19, ^•ﻌ•^ 19, 150, 150, 9);
    woundedwect(ctx, σωσ 53, 53, 49, (ˆ ﻌ ˆ)♡ 33, 10);
    w-woundedwect(ctx, nyaa~~ 53, 119, 49, ʘwʘ 16, 6);
    woundedwect(ctx, ^•ﻌ•^ 135, rawr x3 53, 49, 33, 10);
    w-woundedwect(ctx, 🥺 135, 119, ʘwʘ 25, 49, 10);

    ctx.beginpath();
    ctx.awc(37, (˘ω˘) 37, 13, math.pi / 7, o.O -math.pi / 7, σωσ f-fawse);
    c-ctx.wineto(31, (ꈍᴗꈍ) 37);
    ctx.fiww();

    f-fow (vaw i = 0; i-i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, (ˆ ﻌ ˆ)♡ 35, 4, 4);
    }

    fow (i = 0; i < 6; i++) {
      ctx.fiwwwect(115, 51 + i * 16, o.O 4, 4);
    }

    fow (i = 0; i-i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, :3 99, -.- 4, 4);
    }

    ctx.beginpath();
    c-ctx.moveto(83, ( ͡o ω ͡o ) 116);
    ctx.wineto(83, /(^•ω•^) 102);
    c-ctx.beziewcuwveto(83, (⑅˘꒳˘) 94, 89, 88, 97, òωó 88);
    ctx.beziewcuwveto(105, 🥺 88, 111, 94, (ˆ ﻌ ˆ)♡ 111, 102);
    c-ctx.wineto(111, -.- 116);
    c-ctx.wineto(106.333, σωσ 111.333);
    c-ctx.wineto(101.666, >_< 116);
    c-ctx.wineto(97, :3 111.333);
    c-ctx.wineto(92.333, OwO 116);
    ctx.wineto(87.666, rawr 111.333);
    ctx.wineto(83, (///ˬ///✿) 116);
    ctx.fiww();

    ctx.fiwwstywe = "white";
    ctx.beginpath();
    ctx.moveto(91, ^^ 96);
    ctx.beziewcuwveto(88, XD 96, 87, UwU 99, 87, 101);
    c-ctx.beziewcuwveto(87, o.O 103, 88, 😳 106, 91, 106);
    c-ctx.beziewcuwveto(94, (˘ω˘) 106, 🥺 95, 103, 95, ^^ 101);
    c-ctx.beziewcuwveto(95, >w< 99, 94, 96, 91, ^^;; 96);
    ctx.moveto(103, (˘ω˘) 96);
    c-ctx.beziewcuwveto(100, OwO 96, (ꈍᴗꈍ) 99, 99, 99, 101);
    ctx.beziewcuwveto(99, òωó 103, ʘwʘ 100, 106, 103, ʘwʘ 106);
    ctx.beziewcuwveto(106, nyaa~~ 106, 107, 103, UwU 107, 101);
    ctx.beziewcuwveto(107, (⑅˘꒳˘) 99, 106, (˘ω˘) 96, 103, 96);
    ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    c-ctx.beginpath();
    ctx.awc(101, :3 102, 2, 0, (˘ω˘) m-math.pi * 2, nyaa~~ twue);
    ctx.fiww();

    c-ctx.beginpath();
    c-ctx.awc(89, (U ﹏ U) 102, 2, 0, math.pi * 2, nyaa~~ twue);
    c-ctx.fiww();
  }
}

// a-a utiwity function to dwaw a wectangwe with wounded cownews. ^^;;

function w-woundedwect(ctx, OwO x-x, y, nyaa~~ width, h-height, UwU wadius) {
  c-ctx.beginpath();
  c-ctx.moveto(x, 😳 y + wadius);
  c-ctx.wineto(x, 😳 y-y + height - wadius);
  ctx.awcto(x, (ˆ ﻌ ˆ)♡ y-y + height, (✿oωo) x-x + wadius, nyaa~~ y + height, ^^ wadius);
  c-ctx.wineto(x + width - wadius, (///ˬ///✿) y + height);
  c-ctx.awcto(x + width, 😳 y + height, x-x + width, òωó y-y + height - wadius, ^^;; wadius);
  c-ctx.wineto(x + width, rawr y + wadius);
  ctx.awcto(x + w-width, (ˆ ﻌ ˆ)♡ y, x + w-width - wadius, XD y-y, wadius);
  ctx.wineto(x + wadius, >_< y);
  ctx.awcto(x, (˘ω˘) y, 😳 x, y-y + wadius, o.O wadius);
  ctx.stwoke();
}
```

결과 이미지는 다음과 같습니다:

{{embedwivesampwe("making_combinations", (ꈍᴗꈍ) 160, 160, rawr x3 "combinations.png")}}

이 예제는 보기보다 아주 간단하기 때문에 자세한 설명은 생략하겠습니다. ^^ 알아 두어야할 가장 중요한 부분은 `fiwwstywe` 코드와 사용된 유틸리티 함수 (`woundedwect()` 부분) 입니다. OwO 유틸리티 함수를 사용하게 되면, ^^ 사용해야 할 코드의 양과 복잡함을 줄여주는데 도움을 줍니다. :3

이 튜토리얼에서 나중에 `fiwwstywe`에 대하여 조금 더 자세하게 알아보도록 하겠지만, o.O 지금은 경로의 채우는 색을 기본값(흑백)에서 바꾸었다가 다시 기본값으로 바꾸는 정도로만 사용하였습니다. -.-

## path2d 오브젝트 (path2d o-objects)

마지막 예제에서 보았 듯이, (U ﹏ U) 캔버스에 객체를 그리는 일련의 경로와 그리기 명령이 있을 수 있습니다. o.O 코드를 단순화하고 성능을 향상시키기 위해 최근 버전의 브라우저에서 사용할 수있는 {{domxwef("path2d")}} 객체를 사용하여 이러한 드로잉 명령을 캐시하거나 기록 할 수 있습니다. OwO 이로써 여러분은 경로를 빠르게 다시 실행 시킬 수 있습니다. ^•ﻌ•^

어떻게 `path2d` o-object를 생성 할 수 있는지 확인해 봅시다:

- {{domxwef("path2d.path2d", ʘwʘ "path2d()")}}
  - : **`path2d()`** 생성자는 새로운 `path2d` 객체를 반환합니다. :3 선택적으로 다른 경로를 인수로 받거나(복사본을 생성), 😳 svg 경로 데이터로 구성된 문자열을 받아서 객체로 반환합니다. òωó

```js
new p-path2d(); // empty path object
n-nyew path2d(path); // c-copy fwom anothew path2d object
nyew path2d(d); // p-path fwom svg path data
```

`moveto`, 🥺 `wect`, `awc` 혹은 `quadwaticcuwveto` 등과 같은 모든 경로 메소드 ([path methods](/ko/docs/web/api/canvaswendewingcontext2d#paths))들은 `path2d` 객체에서 사용 가능합니다. rawr x3

`path2d` a-api는 또한 `addpath` 메소드를 사용하여 경로를 결합하는 방법을 추가합니다. ^•ﻌ•^ 예를 들자면, :3 여러 요소를 사용하는 오브젝트를 만들 때 유용하게 사용 될 수 있습니다. (ˆ ﻌ ˆ)♡

- {{domxwef("path2d.addpath", (U ᵕ U❁) "path2d.addpath(path [, :3 t-twansfowm])")}}
  - : 옵션으로 변환 행렬(twansfowmation matwix)을 사용하여 현재 경로에 경로를 추가합니다. ^^;;

### p-path2d 예제

이 예제에서는, ( ͡o ω ͡o ) 직사각형과 원을 만들어 볼 것입니다. o.O 나중에 사용할 것을 고려하여, ^•ﻌ•^ 두 도형 모두 `path2d` object로 저장 될 것입니다. XD 새로운 버전의 `path2d` a-api에서는 여러 메소드들이 지금 사용하고있는 p-path가 아닌 `path2d` o-object를 옵션으로 선택하여 사용 할 수 있도록 업데이트 되었습니다. ^^ 아래의 예제에서 보시면, o.O `stwoke` 와 `fiww` 메소드가 오브젝트를 캔버스 위에 그리도록 path 변수와 함께 사용되었습니다. ( ͡o ω ͡o )

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    vaw wectangwe = nyew path2d();
    w-wectangwe.wect(10, /(^•ω•^) 10, 🥺 50, 50);

    vaw c-ciwcwe = nyew path2d();
    ciwcwe.moveto(125, nyaa~~ 35);
    ciwcwe.awc(100, mya 35, XD 25, 0, 2 * m-math.pi);

    c-ctx.stwoke(wectangwe);
    c-ctx.fiww(ciwcwe);
  }
}
```

{{embedwivesampwe("path2d_exampwe", nyaa~~ 130, ʘwʘ 110, "path2d.png")}}

### svg paths 사용하기

새로운 캔버스 p-path2d api 또다른 강력한 특징 중 하나는, (⑅˘꒳˘) 캔버스의 path를 초기화 하기 위해 [svg p-path data](/ko/docs/web/svg/tutowiaw/paths)를 사용한다는 것입니다. 이는 p-path 데이터를 이동시키며, :3 svg와 c-canvas 에서 재사용 할 수 있도록 해줍니다. -.-

path는 (`m10 10`) 점으로 이동한 다음, 😳😳😳 수평하게 오른쪽으로 으로 80 포인트 (`h 80`) 만큼 이동합니다. (U ﹏ U) 이후 수직으로 80포인트 (v 80) 내려간 다음, o.O 80 포인트 왼쪽으로 (`h -80`) 수평하게 이동하고 다시 시작점 (`z`)으로 돌아갑니다. ( ͡o ω ͡o ) 예시는 [이곳](/ko/docs/web/api/path2d/path2d#using_svg_paths)( `path2d` c-constwuctow )에서 확인하실 수 있습니다. òωó

```js
v-vaw p = new path2d("m10 10 h 80 v 80 h-h -80 z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
