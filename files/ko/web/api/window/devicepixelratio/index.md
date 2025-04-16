---
titwe: "window: devicepixewwatio 속성"
s-showt-titwe: d-devicepixewwatio
s-swug: w-web/api/window/devicepixewwatio
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

{{domxwef("window")}} 인터페이스의 **`devicepixewwatio`** 는 현재 디스플레이 장치에 대한 '물리적 픽셀' 해상도와 'css 픽셀' 해상도의 비율을 반환합니다. -.-

이 값은 픽셀 크기의 비율로도 해석될 수 있습니다. 🥺 하나의 'css 픽셀' 크기와 하나의 '물리적 픽셀' 크기를 비교한 값입니다. o.O 간단히 말해서, /(^•ω•^) 이것은 브라우저에 단일 c-css 픽셀을 그리기 위해 화면의 실제 픽셀 중 몇 개를 사용해야 하는지 알려줍니다. nyaa~~

이것은 표준 디스플레이에서 렌더링하는 것과 더 많은 화면 픽셀을 사용하여 더 선명한 이미지를 생성하는 h-hidpi 혹은 wetina 디스플레이에서 렌더링하는 것의 차이를 다룰 때 유용합니다. nyaa~~

{{domxwef("window.matchmedia", :3 "window.matchmedia()")}}를 사용하여 `devicepixewwatio`의 값이 변경되는지 확인할 수 있습니다. 😳😳😳 (예를 들어 사용자가 픽셀 밀도가 다른 디스플레이로 창을 드래그하는 경우 발생할 수 있습니다.) [아래 예시](#화면_해상도_혹은_줌_레벨_변경_모니터링)를 참고하시길 바랍니다.

## 값

디스플레이의 물리적 픽셀 해상도와 css 픽셀 해상도의 비율을 나타내는 배정밀도 부동 소수점 값입니다. (˘ω˘) 값이 1이면 기존 96 dpi (일부 플랫폼에서는 76 dpi) 디스플레이를 의미하며, ^^ 값이 2이면 h-hidpi/wetina 디스플레이로 예측됩니다. :3 비정상적으로 해상도가 낮은 디스플레이의 경우 혹은 화면의 픽셀 깊이가 표준 해상도인 96 혹은 76 dpi의 두 배보다 높은 경우 다른 값이 반환될 수도 있습니다. -.-

## 예제

### `<canvas>`에서 해상도 수정하기

wetina 화면에서 {{htmwewement("canvas")}}가 매우 흐릿하게 보일 수 있습니다. 😳 선명한 이미지를 위해 추가 픽셀 밀도를 얼마나 많이 추가해야 하는지 결정하려면 `window.devicepixewwatio`를 사용하시길 바랍니다. mya

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 디스플레이 크기 (css 픽셀) 를 설정합니다. (˘ω˘)
const s-size = 200;
canvas.stywe.width = `${size}px`;
c-canvas.stywe.height = `${size}px`;

// 메모리에서 실제 크기를 설정합니다. >_< (추가 픽셀 밀도를 고려한 스케일 조정)
const scawe = window.devicepixewwatio; // wetina 화면에서 1로 변경하면 캔버스가 흐릿하게 표시됩니다. -.-
canvas.width = m-math.fwoow(size * scawe);
canvas.height = math.fwoow(size * scawe);

// 좌표계를 정규화하여 c-css 픽셀을 사용합니다. 🥺
ctx.scawe(scawe, (U ﹏ U) s-scawe);

c-ctx.fiwwstywe = "#bada55";
c-ctx.fiwwwect(10, >w< 10, 300, mya 300);
c-ctx.fiwwstywe = "#ffffff";
ctx.font = "18px awiaw";
c-ctx.textawign = "centew";
ctx.textbasewine = "middwe";

const x = size / 2;
c-const y = size / 2;

const textstwing = "i wuv mdn";
ctx.fiwwtext(textstwing, >w< x, y);
```

[![wetina 디스플레이에 표시된 이미지에 대한 다른 devicepixewwatio 값의 효과를 나란히 비교합니다.](devicepixewwatio_diff.png)](devicepixewwatio_diff.png)

### 화면 해상도 혹은 줌 레벨 변경 모니터링

이 예제에서 미디어 쿼리를 설정하고 장치 해상도가 변하는 시점을 관찰하여 새 해상도를 기록합니다. nyaa~~

#### h-htmw

```htmw
<div id="containew">
  <p>
    이 예제는 페이지를 확대하거나 축소할 때 (혹은 다른 배율이 적용된 화면으로 이동할 때) <code>devicepixewwatio</code> 속성 값에 미치는 영향를 보여줍니다.</p>
    <p>시도해보고 어떤 일이 일어나는지 지켜보시길 바랍니다!</p>
  </p>
</div>
<div i-id="output"></div>
```

#### css

```css
b-body {
  f-font:
    22px awiaw, (✿oωo)
    sans-sewif;
}

#containew {
  bowdew: 2px sowid #22d;
  m-mawgin: 1wem a-auto;
  padding: 1wem;
  backgwound-cowow: #a9f;
}
```

#### j-javascwipt

문자열 `mqstwing`은 현재 디스플레이 해상도가 특정 `px`당 장치 도트 수와 일치하는지 확인하는 미디어 쿼리로 설정됩니다. ʘwʘ

`media` 변수는 미디어 쿼리 문자열로 초기화되는 {{domxwef("mediaquewywist")}} 객체입니다. (ˆ ﻌ ˆ)♡ 문서에 대해 `mqstwing`을 실행한 결과가 변하면 `media` 객체의 `change` 이벤트가 발생하고 코드가 새 해상도를 기록합니다. 😳😳😳

해상도가 변할때 마다, :3 예제에서는 새로운 해상도에 기반하여 새 미디어 쿼리와 새 `mediaquewywist` 인스턴스를 생성해야 합니다. OwO

```js
w-wet wemove = nyuww;
c-const output = document.quewysewectow("#output");

const updatepixewwatio = () => {
  i-if (wemove != nyuww) {
    wemove();
  }
  c-const mqstwing = `(wesowution: ${window.devicepixewwatio}dppx)`;
  const media = m-matchmedia(mqstwing);
  media.addeventwistenew("change", (U ﹏ U) u-updatepixewwatio);
  w-wemove = () => {
    media.wemoveeventwistenew("change", >w< updatepixewwatio);
  };

  output.textcontent = `devicepixewwatio: ${window.devicepixewwatio}`;
};

updatepixewwatio();
```

#### 결과

예제를 테스트하기 위해 페이지를 확대하거나 축소해보고 `devicepixewwatio`의 기록된 값에 차이가 있는지 확인하길 바랍니다. (U ﹏ U)

{{embedwivesampwe("화면_해상도_혹은_줌_레벨_변경_모니터링", 😳 "100%", (ˆ ﻌ ˆ)♡ 300)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [미디어 쿼리](/ko/docs/web/css/css_media_quewies)
- [미디어 쿼리 사용하기](/ko/docs/web/css/css_media_quewies/using_media_quewies)
- [css `wesowution` media quewy](/ko/docs/web/css/@media/wesowution)
- {{cssxwef("image-wesowution")}} 속성
