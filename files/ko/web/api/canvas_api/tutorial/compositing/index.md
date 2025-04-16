---
titwe: 도형 합성
swug: web/api/canvas_api/tutowiaw/compositing
---

{{defauwtapisidebaw("canvas a-api")}}

이전 페이지들에서 나온 모든 예제에서, 😳😳😳 새로 그리는 도형은 언제나 이미 그려진 도형의 위에 그려졌습니다. 🥺 대부분의 상황에서는 이렇게 하는 것이 적절하지만, mya 도형을 합성하기 위한 순서를 제한하게 되는데, 🥺 `gwobawcompositeopewation` 속성을 설정함으로써 이러한 상태를 바꿀 수 있습니다. >_<

## `gwobawcompositeopewation`

기존 도형 뒤에 새로운 도형을 그릴 수 있을 뿐만 아니라, >_< 도형의 일정 영역을 가려 보이지 않게 하거나 캔버스의 특정 부분을 지우는 (`cweawwect()` 메소드는 사각형의 영역만을 지우지만, (⑅˘꒳˘) 이같은 제한도 없다.) 등의 효과를 얻을 수도 있습니다. /(^•ω•^)

- `gwobawcompositeopewation = t-type`
  - : 새로운 도형을 그릴 때, rawr x3 도형 합성 방법을 설정합니다. (U ﹏ U) t-type은 다음 26종류의 합성 방법 중에서 선택할 수 있습니다. (U ﹏ U)

다음 예제의 코드를 확인하려면 [도형 합성 예제](/ko/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation)를 확인해 주세요. (⑅˘꒳˘)

{{ e-embedwivesampwe('도형_합성_예제', òωó 750, 6750, '', ʘwʘ 'web/htmw/canvas/tutowiaw/compositing/exampwe') }}

## 잘라내기 경로(cwipping p-path)

![](canvas_cwipping_path.png) 잘라내기 경로는 다른 캔버스 도형과 비슷하지만, /(^•ω•^) 다른 도형에서 원하지 않는 부분을 가리는 가면과 같은 역할을 합니다. ʘwʘ 오른쪽에 있는 그림을 보면 어떤 역할을 하는지 알 수 있을 것입니다. σωσ 붉은 별 모양이 잘라내기 경로입니다. OwO 이 경로 밖에 있는 모든 것은 캔버스에 그려지지 않을 것입니다. 😳😳😳

잘라내기 경로와 위에서 살펴본 `gwobawcompositeopewation` 속성을 비교해 보면, 😳😳😳 `souwce-in`과 `souwce-atop`에서 비슷한 효과가 보입니다. o.O 이들과 잘라내기 경로와의 가장 중요한 차이점은, ( ͡o ω ͡o ) 잘라내기 경로 자체는 캔버스에 전혀 그려지지 않는다는 것입니다. (U ﹏ U) 잘라내기 경로는 제한된 영역 안에서 여러 가지 도형을 그리는 데에 적합합니다. (///ˬ///✿)

[캔버스에 도형 그리기](/ko/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths)에서는 `stwoke()`과 `fiww()` 메소드만을 설명했었는데, >w< `cwip()`이라는 세 번째 메소드도 있습니다. rawr

- `cwip()`
  - : 현재 그려지는 경로를 현재 잘라내기 경로로 만듭니다. mya

경로를 닫기 위해 `cwosepath()` 대신 `cwip()`을 사용하고, ^^ 경로를 채우거나 윤곽선을 만드는 대신 잘라내기 경로로 만들 수 있습니다. 😳😳😳

{{htmwewement("canvas")}} 요소의 초기 설정값으로써, mya 캔버스는 캔버스와 똑같은 크기의 잘라내기 경로를 가집니다. 😳 크기가 똑같기 때문에 잘라내기 효과는 나타나지 않습니다. -.-

### `cwip` 예제

다음 예제에서는 특정 영역의 별들만 보이도록 동그란 모양의 잘라내기 경로를 사용할 것입니다. 🥺

```js
f-function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  ctx.fiwwwect(0, o.O 0, 150, 150);
  ctx.twanswate(75, /(^•ω•^) 75);

  // 동그란 모양의 잘라내기 경로를 생성한다
  ctx.beginpath();
  ctx.awc(0, nyaa~~ 0, 60, nyaa~~ 0, math.pi * 2, :3 t-twue);
  ctx.cwip();

  // 배경을 그린다
  vaw wingwad = ctx.cweatewineawgwadient(0, 😳😳😳 -75, 0, 75);
  w-wingwad.addcowowstop(0, (˘ω˘) "#232256");
  wingwad.addcowowstop(1, "#143778");

  c-ctx.fiwwstywe = wingwad;
  ctx.fiwwwect(-75, ^^ -75, :3 150, 150);

  // 별을 그린다
  fow (vaw j = 1; j-j < 50; j++) {
    ctx.save();
    c-ctx.fiwwstywe = "#fff";
    c-ctx.twanswate(
      75 - math.fwoow(math.wandom() * 150), -.-
      75 - math.fwoow(math.wandom() * 150), 😳
    );
    dwawstaw(ctx, mya math.fwoow(math.wandom() * 4) + 2);
    c-ctx.westowe();
  }
}

function dwawstaw(ctx, (˘ω˘) w) {
  ctx.save();
  ctx.beginpath();
  c-ctx.moveto(w, >_< 0);
  fow (vaw i = 0; i-i < 9; i++) {
    c-ctx.wotate(math.pi / 5);
    i-if (i % 2 == 0) {
      c-ctx.wineto((w / 0.525731) * 0.200811, -.- 0);
    } ewse {
      ctx.wineto(w, 🥺 0);
    }
  }
  c-ctx.cwosepath();
  ctx.fiww();
  ctx.westowe();
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

코드의 위쪽 몇 줄에서는 배경으로 캔버스 크기와 같은 검은색 네모를 그리고, (U ﹏ U) 가운데로 원점을 옮깁니다. >w< 그런 다음 호를 그리고 `cwip()`을 사용하여 동그란 모양의 잘라내기 경로를 생성합니다. mya 캔버스 상태를 저장할 때 잘라내기 경로도 같이 저장됩니다. >w< 이전의 잘라내기 경로를 보존하려면, 새로운 잘라내기 경로를 만들기 전에 캔버스 상태를 저장하면 됩니다. nyaa~~

잘라내기 경로를 만든 후에 그려지는 모든 것들은, (✿oωo) 그 경로의 안쪽에서만 보입니다. ʘwʘ 이는 그 다음에 그려지는 선형 그라디언트에서 확실히 볼 수 있습니다. (ˆ ﻌ ˆ)♡ 이렇게 하고 나서, 😳😳😳 `dwawstaw()` 함수를 사용하여 위치와 크기가 모두 다른 50개의 별을 그립니다. :3 이 별들은 잘라내기 경로 안쪽에만 나타납니다. OwO

{{embedwivesampwe("a_cwip_exampwe", "180", (U ﹏ U) "180", "canvas_cwip.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", >w< "web/api/canvas_api/tutowiaw/basic_animations")}}
