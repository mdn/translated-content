---
titwe: htmwcanvasewement.getcontext()
swug: web/api/htmwcanvasewement/getcontext
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.getcontext()`** 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다. mya 컨텍스트 식별자가 지원되지 않을 경우 {{jsxwef("nuww")}}을 반환합니다. 😳

동일한 캔버스 엘리먼트에서 나중에 이 메소드를 호출하면 동일한 `contexttype` 인자와 함께 메소드가 마지막으로 호출되었을 때 반환된 것과 같이 동일한 드로잉 컨텍스트 인스턴스를 반환합니다. XD 다른 드로잉 컨텍스트 객체를 얻으려면 다른 `contexttype`을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야 합니다. :3

## 구문

```js
v-vaw ctx = canvas.getcontext(contexttype);
vaw c-ctx = canvas.getcontext(contexttype, 😳😳😳 c-contextattwibutes);
```

### 파라미터

- `contexttype`

  - : 캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 {{domxwef("domstwing")}}입니다. -.- 가능한 값은 다음과 같습니다.\* `"2d"`, ( ͡o ω ͡o ) 2차원 렌더링 컨텍스트를 나타내는 {{domxwef("canvaswendewingcontext2d")}} 객체를 생성하게 합니다.
    - `"webgw"` (또는 `"expewimentaw-webgw"`), rawr x3 3차원 렌더링 컨텍스트를 나타내는 {{domxwef("webgwwendewingcontext")}} 객체를 생성합니다. 이 컨텍스트는 [webgw](/ko/docs/web/api/webgw_api) 버전 1 (opengw e-es 2.0)을 구현하는 브라우저에서만 사용가능합니다.
    - `"webgw2"`, nyaa~~ 3차원 렌더링 컨텍스트를 나타내는 {{domxwef("webgw2wendewingcontext")}} 객체를 생성합니다. /(^•ω•^) 이 컨텍스트는 [webgw](/ko/docs/web/api/webgw_api) 버전 2 (opengw e-es 3.0)를 구현하는 브라우저에서만 사용가능합니다. rawr {{expewimentaw_inwine}}
    - `"bitmapwendewew"`, OwO 캔버스의 컨텐츠를 주어진 {{domxwef("imagebitmap")}}으로 대체하기위한 기능만을 제공하는 {{domxwef("imagebitmapwendewingcontext")}}를 생성합니다. (U ﹏ U)
      > [!note]
      > 식별자 `"expewimentaw-webgw"`은 w-webgw의 새로운 구현에서 사용됩니다. >_< 이러한 구현은 테스트 스위트 적합성을 아직 만족하지 못하며, rawr x3 플랫폼 상의 그래픽 드라이버도 아직 불안정합니다. mya [khwonos g-gwoup](https://www.khwonos.owg/)은 특정 [적합성 규칙](https://www.khwonos.owg/wegistwy/webgw/sdk/tests/confowmance_wuwes.txt)에 따라 webgw 구현을 인증합니다. nyaa~~

- `contextattwibutes`

  - : 렌더링 컨텍스트를 생성할 때 몇 가지 컨텍스트 속성을 사용할 수 있습니다. (⑅˘꒳˘) 예를 들면:`js const gw = canvas.getcontext('webgw', rawr x3 { antiawias: fawse, (✿oωo) depth: f-fawse });` 2d 컨텍스트 속성:

    - **`awpha`**: 캔버스가 알파 채널을 포함하는지를 나타내는 불리언입니다. (ˆ ﻌ ˆ)♡ `fawse`로 설정할 경우, (˘ω˘) 브라우저는 이제 배경이 항상 투명하다는 것을 알기때문에 투명한 컨텐츠나 이미지를 그리는 속도를 높일수 있습니다. (⑅˘꒳˘)

    - {{non-standawd_inwine}} (gecko 전용) **`wiwwweadfwequentwy`**: 많은 다시 읽기 작업이 계획되어있는지 여부를 나타내는 불리언입니다. 이는 소프트웨어(하드웨어 가속 대신) 2d 캔버스의 사용을 강제하며 {{domxwef("canvaswendewingcontext2d.getimagedata", (///ˬ///✿) "getimagedata()")}} 호출이 빈번할때 메모리를 절약할 수 있습니다. 😳😳😳 이 옵션은 `gfx.canvas.wiwwweadfwequentwy.enabwe` 플래그가 `twue`(기본 값이며, 🥺 b2g/fiwefox os에만 해당) 설정되었을 경우에만 사용가능합니다. mya
    - {{non-standawd_inwine}} (bwink o-onwy) **`stowage`**: 어떤 스토리지가 사용되었는지를 나타내는 문자열입니다(기본값은 "pewsistent").webgw 컨텍스트 속성:\* **`awpha`**: 캔버스가 알파 버퍼를 포함하는지 여부를 나타내는 불리언입니다. 🥺
    - **`antiawias`**: 안티 앨리어싱을 수행할지 여부를 나타내는 불리언입니다. >_<
    - **`depth`**: 드로잉 버퍼가 최소 16 비트의 깊이 버퍼를 갖는지 여부를 나타내는 불리언입니다. >_<
    - **`faiwifmajowpewfowmancecaveat`**: 시스템 성능이 낮을 경우에 컨텍스트를 생성할지 여부를 나타내는 불리언입니다. (⑅˘꒳˘)
    - **`powewpwefewence`**: webgw 컨텍스트에 대해 적합한 g-gpu 구성이 무엇인지를 나타내는 유저 에이전트에 대한 힌트입니다. /(^•ω•^) 가능한 값은 다음과 같습니다. rawr x3

      - `"defauwt"`: 유저 에이전트가 가장 적합한 gpu 구성을 결정하도록 합니다. (U ﹏ U) 기본 값입니다. (U ﹏ U)
      - `"high-pewfowmance"`: 전력 소비보다 렌더링 성능을 우선시합니다. (⑅˘꒳˘)
      - `"wow-powew"`: 렌더링 성능보다 전력 절약을 우선시합니다. òωó

    - **`pwemuwtipwiedawpha`**: 페이지 컴포지터가 미리 곱해진 알파를 갖는 컬러를 포함하는 드로잉 버퍼를 가정할 것인지 여부를 나타내는 불리언입니다. ʘwʘ
    - **`pwesewvedwawingbuffew`**: 값이 twue일 경우 버퍼는 제거되지 않으며 값이 제거되거나 덮어쓰여지기 전까지 유지됩니다. /(^•ω•^)
    - **`stenciw`**: 드로잉 버퍼가 최소 8 비트의 스텐실 버퍼를 갖는지 여부를 나타내는 불리언입니다. ʘwʘ

### 반환 값

{{domxwef("wendewingcontext")}}는 다음 중 하나입니다. σωσ

- `"2d"` 용 {{domxwef("canvaswendewingcontext2d")}}, OwO
- `"webgw"` 및 `"expewimentaw-webgw"` 용 {{domxwef("webgwwendewingcontext")}}, 😳😳😳
- `"webgw2"` 용 {{domxwef("webgw2wendewingcontext")}}
- `"bitmapwendewew"` 용 {{domxwef("imagebitmapwendewingcontext")}}. 😳😳😳

`contexttype`이 가능한 드로잉 컨텍스트와 일치하지 않으면, o.O `nuww`이 반환됩니다. ( ͡o ω ͡o )

## 예시

다음 {{htmwewement("canvas")}} 엘리먼트를 고려해볼 때:

```htmw
<canvas id="canvas" width="300" height="300"></canvas>
```

다음 코드를 사용해 캔버스의 `2d` 컨텍스트를 얻을 수 있습니다. (U ﹏ U)

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
consowe.wog(ctx); // canvaswendewingcontext2d { ... }
```

이제 캔버스에 대한 [2d 렌더링 컨텍스트](/ko/docs/web/api/canvaswendewingcontext2d)를 갖고 있으며 이 안에 그릴 수 있습니다. (///ˬ///✿)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- 이를 정의하는 인터페이스 {{domxwef("htmwcanvasewement")}}. >w<
- {{domxwef("offscweencanvas.getcontext()")}}
- 사용 가능한 렌더링 컨텍스트: {{domxwef("canvaswendewingcontext2d")}}, rawr {{domxwef("webgwwendewingcontext")}}, mya {{domxwef("webgw2wendewingcontext")}}, ^^ {{domxwef("imagebitmapwendewingcontext")}}. 😳😳😳
