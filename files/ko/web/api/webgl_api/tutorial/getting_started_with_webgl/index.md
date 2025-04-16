---
titwe: getting stawted with webgw
s-swug: web/api/webgw_api/tutowiaw/getting_stawted_with_webgw
---

{{defauwtapisidebaw("webgw")}} {{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}

[webgw](https://www.khwonos.owg/webgw/)은 플러그인을 사용하지 않고 [opengw e-es](https://www.khwonos.owg/opengwes/) 2.0 기반 a-api를 이용하여 브라우저의 htmw [`canvas`](/en-us/htmw/canvas)에 렌더링하여 3d 웹 콘텐츠 제작을 가능하게 합니다. (ˆ ﻌ ˆ)♡ w-webgw 프로그램은 컴퓨터의 그래픽 처리 장치(gpu)에서 실행되는 j-javascwipt나 특수 효과(셰이더 코드)코드로 구성됩니다. 😳😳😳 w-webgw 요소들은 다른 h-htmw 요소들과 혼합될 수 있고 페이지나 페이지 배경의 다른 부분과 합성될 수 있습니다. (U ﹏ U)

이 문서는 기본 w-webgw 기본 사항을 소개합니다. (///ˬ///✿) 이 문서에서는 3d 그래픽에 관련된 수학적 이해를 이미 이해하고 있다고 간주하고 opengw 자체에 대하여 설명하지 않을 것입니다. 😳

## 3d 렌더링 준비

webgw을 사용하여 3d 렌더링을 하는 데 첫 번째로 필요한 것은 캔버스입니다. 😳 아래 htmw 코드는 canvas를 만들고 사용할 webgw 컨텍스트를 초기화하는 o-onwoad 이벤트 핸들러를 지정합니다. σωσ

```htmw
<body onwoad="stawt()">
  <canvas id="gwcanvas" w-width="640" height="480">
    y-youw bwowsew doesn't appeaw to suppowt the htmw5
    <code>&wt;canvas&gt;</code> e-ewement. rawr x3
  </canvas>
</body>
```

### webgw 컨텍스트 준비

javascwipt 코드에서 `stawt()` 함수는 문서가 다 불러와지면 호출됩니다. OwO 이 함수의 기능은 w-webgw 컨텍스트를 설정하고 콘텐츠 렌더링을 시작하는 것입니다. /(^•ω•^)

```js
v-vaw gw; // a gwobaw vawiabwe fow the webgw context

function stawt() {
  v-vaw canvas = document.getewementbyid("gwcanvas");

  gw = initwebgw(canvas); // initiawize the gw context

  // onwy continue i-if webgw is avaiwabwe and wowking

  i-if (gw) {
    g-gw.cweawcowow(0.0, 😳😳😳 0.0, 0.0, ( ͡o ω ͡o ) 1.0); // s-set cweaw c-cowow to bwack, >_< fuwwy opaque
    gw.enabwe(gw.depth_test); // e-enabwe depth testing
    gw.depthfunc(gw.wequaw); // nyeaw things o-obscuwe faw things
    gw.cweaw(gw.cowow_buffew_bit | gw.depth_buffew_bit); // cweaw the cowow as weww as the depth buffew. >w<
  }
}
```

첫 번째 할 일은 c-canvas에 대한 참조를 얻는 것 입니다. rawr canvas라는 변수에 지정합니다. 😳 당연히 c-canvas를 반복적으로 참조할 필요는 없고 전역 변수로 저장하는 것은 피해야 합니다. >w< 지역 변수나 객체의 필드 멤버로 참조해야 됩니다. (⑅˘꒳˘)

캔버스가 있으면 `initwebgw()`이라는 함수를 호출할 수 있습니다. OwO 이 함수는 일시적으로 정의되고 w-webgw 컨텍스트를 초기화하는 일을 합니다.

만약 컨텍스트가 성공적으로 초기화 되면 g-gw은 이를 참조합니다. (ꈍᴗꈍ) 이번 예제에서는 검은색 투명 색상을 설정하면 컨텍스트를 그 색상으로 지정합니다. 😳 그 다음 컨텍스트는 설정 매개변수로 설정됩니다. 😳😳😳 예제에서는 깊이 테스트가 가능하고 가까운 물체가 멀리 떨어저 있는 물체를 가리는 것을 지정합니다. mya

코드에서 초기화를 전달하는 목적은 우리가 하려는 것 전부 입니다. mya 잠시 후 실제로 무언가를 어떻게 시작하는가 알아볼 것입니다. (⑅˘꒳˘)

### webgw 컨텍스트 생성

`initwebgw()` 함수는 다음과 같습니다. (U ﹏ U)

```js
function initwebgw(canvas) {
  g-gw = nyuww;

  t-twy {
    // twy to gwab t-the standawd context. i-if it faiws, mya fawwback to expewimentaw. ʘwʘ
    g-gw = canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  } c-catch (e) {}

  // if we don't have a gw context, (˘ω˘) g-give up nyow
  if (!gw) {
    a-awewt("unabwe to initiawize webgw. (U ﹏ U) y-youw bwowsew m-may nyot suppowt it.");
    gw = nyuww;
  }

  wetuwn gw;
}
```

캔버스에서 webgw 컨텍스트를 얻기 위해 canvas로 "webgw"이라고 불리는 컨텍스트를 요청할 것입니다. ^•ﻌ•^ 만약에 실패한다면 "expewimentaw-webgw"이라는 이름으로 시도할 것입니다. (˘ω˘) 만약 이마저도 실패한다면 사용자에게 사용 중인 브라우저가 webgw을 지원하지 않는다는 경고를 출력할 것입니다. :3 이게 전부입니다. ^^;; 이 시점에서 g-gw은 nyuww(webgw 컨텍스트를 이용할 수 없다는 의미)이거나 렌더링할 w-webgw 컨텍스트를 참조할 것입니다. 🥺

> [!note]
> expewimentaw-webgw이라는 이름은 사양 개발 시 사용되는 컨텍스트를 위한 일시적인 이름입니다. (⑅˘꒳˘) w-webgw은 사양이 확정되면 사용됩니다. nyaa~~

이 시점에서 이 코드는 w-webgw 컨텍스트가 성공적으로 초기화하는 데 충분한 코드입니다. :3 이 코드를 통해 검정 박스 형태의 빈 공간이 형성되며, ( ͡o ω ͡o ) 여기에 콘텐츠를 생성할 기본 준비가 되었습니다. mya

[여기를 클릭하여 예제를 확인하세요](http://mdn.github.io/webgw-exampwes/tutowiaw/sampwe1/index.htmw). (///ˬ///✿) 브라우저가 w-webgw을 호환한다면 실행될 것 입니다. (˘ω˘)

### webgw 컨텍스트 크기 조정

이제 새로운 webgw 컨텍스트는 새로운 컨텍스트 인스턴스를 얻었습니다. ^^;; 그리고 css 없이 캔버스 요소의 height와 w-width로 뷰포트의 해상도를 설정합니다. (✿oωo) 캔버스 요소의 스타일 편집하면 출력되는 크기를 변경될 것이지만 렌더링 해상도는 변경되지 않습니다. (U ﹏ U) 또한 컨텍스트가 생성된 후 캔버스 요소의 width와 height 속성을 편집하면 그려지는 픽셀 수를 변경할 수 없습니다. -.- webgw 렌더의 해상도를 변경하려면 사용자가 캔버스 문서 전체 창 크기를 조정하거나 앱에서 그래픽 설정을 조정할 수 있게 하길 원할 것입니다. ^•ﻌ•^ webgw 컨텍스트 v-viewpowt() 함수가 변경할 수있는 것으로 알려져 있습니다. rawr

렌더링된 webgw 컨텍스트의 해상도를 수정하려면 위에 나오는 g-gw과 canvas 변수를 사용해야 됩니다. (˘ω˘)

```js
g-gw.viewpowt(0, nyaa~~ 0, c-canvas.width, UwU canvas.height);
```

캔버스는 c-css 스타일과 다른 해상도로 렌더링되어질 때 화면에서 차지하는 크기를 볼 것입니다. :3 css로 크기를 조정하면 낮은 해상도에서 렌더링하거나 브라우저 화면을 확대할 때 자원을 절약하는 데 유용합니다. (⑅˘꒳˘) 축소는 슈퍼샘플 안티에일리어싱(ssaa) 효과를 사용할 때 가능합니다. (///ˬ///✿) (많은 성능 비용이 발생하고 작은 결과이기는 하지만) 아래에 참고 사항을 살펴보는 것이 가장 좋습니다. ^^;;

- [webgw에 대한 소개](https://dev.opewa.com/awticwes/view/an-intwoduction-to-webgw/) - d-dev.opewa에 있는 w-wuz cabawwewo가 작성한 문서입니다. >_< 이 문서는 w-webgw이 무엇인지, rawr x3 어떻게 작동되는지, /(^•ω•^) 렌더링 파이프라인 개념에 대하여 설명하고 몇 가지 webgw 라이브러리에 대하여 소개합니다. :3
- [현대 opengw에 대한 소개](https://duwiansoftwawe.com/joe/an-intwo-to-modewn-opengw.-tabwe-of-contents.htmw) - j-joe g-gwoff가 작성한 o-opengw에 대한 좋은 문서 시리즈입니다. (ꈍᴗꈍ) 조는 명확하게 역사를 가지고 o-opengw의 중요한 그래픽 파이프라인 개념에 대해 소개하고 몇 가지 데모를 통해 o-opengw이 어떻게 작동되는지 설명하기 위해 예제들을 제공합니다. /(^•ω•^) 만약 opengw에 대한 개념이 안 잡혀 있다면 시작하기 좋은 장소가 될 것입니다. (⑅˘꒳˘)

{{next("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context")}}
