---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
l10n:
  sourceCommit: 9cc2c59a86a7987f8a6a4ee854bbb65a29ce21dd
---

{{DefaultAPISidebar("Intersection Observer API")}}

Intersection Observer API는 상위 요소 또는 최상위 문서의 {{Glossary("viewport")}}와 대상 요소 사이의 변화를 비동기적으로 관찰할 수 있는 수단을 제공합니다.

## 개요

역사적으로, 요소의 가시성 또는 관련된 두 요소 사이의 상대적 가시성을 감지하는 것은 해결책을 신뢰할 수 없고 브라우저와 사용자가 접근하는 사이트를 느리게 만드는 어려운 작업이었습니다. Web이 성숙해짐에 따라, 이러한 종류의 정보의 요구가 늘어났습니다. 교차 정보는 다음과 같은 많은 이유로 필요합니다.

- 페이지가 스크롤 될 때 이미지의 또는 다른 컨텐츠의 지연 로딩(Lazy-loading) 됩니다.
- 스크롤할 때 더 많은 컨텐츠가 로드되고 렌더링 되는 "무한 스크롤" 웹 사이트를 구현함으로써, 사용자가 페이지를 넘길 필요가 없습니다.
- 광고 수익 산정을 위해 광고 가시성을 보고합니다.
- 사용자가 결과를 볼 수 있을지 여부에 따라 작업 또는 애니메이션 프로세스를 수행할지 여부를 결정합니다.

과거에 교차 감지 구현은 영향을 받는 모든 요소에 대해 필요한 정보를 축적하기 위해 이벤트 처리기와 {{domxref("Element.getBoundingClientRect()")}}와 같은 메서드를 호출하는 루프를 포함하였습니다. 모든 코드가 메인 스레드에서 실행되기 때문에, 이 중 하나라도 성능 문제를 일으킬 수 있습니다. 이러한 테스트와 함께 사이트가 로드 될 때, 완전히 못생겨질 수 있었습니다.

무한 스크롤을 사용하는 웹 페이지를 생각해봅시다. 주기적으로 페이지에 배치되는 광고를 관리하기 위해 공급업체가 제공하는 라이브러리를 사용하고, 여기저기에 애니메이션 그래픽이 있으며, 공지 박스 같은 것들을 그리는 사용자 정의 라이브러리도 사용합니다. 이 각각에는 해당 교차 감지 루틴이 있고 모두 메인 스레드에서 실행됩니다. 웹 사이트 제작자는 그들이 사용하는 두 가지 라이브러리에 들어있는 내부 작업에 대해서 조금만 알기 때문에 이러한 일이 일어나는 지도 깨닫지 못할 것입니다. 유저가 페이지를 스크롤 할 때, 이러한 교차 감지 루틴은 스크롤 처리 코드가 실행되는 동안 지속적으로 발생하여 사용자가 브라우저, 웹사이트, 컴퓨터에 불만을 느끼게 합니다.

Intersection Observer API는 특정 요소가 다른 요소(또는 {{Glossary("viewport")}})와의 교차점에 들어가거나 나갈 때 또는 두 요소 간의 교차점이 지정된 양만큼 변화될 때 실행되는 콜백 함수를 코드에 등록할 수 있습니다. 이 방법으로, 사이트는 더이상 이러한 종류의 요소 교차를 감시하기 위해 메인 스레드에 아무것도 할 필요가 없고, 브라우저는 적합하다고 판단되는 대로 교차 관리를 자유롭게 최적화할 수 있습니다.

Intersection Observer API가 알려주지 않는 한 가지: 겹치는 픽셀의 정확한 수나 구체적으로 어떤 픽셀인지를 알려주지 못합니다. 그러나 이 API는 "약 N% 정도 겹친다면 어떤 작업을 수행해야 한다"는 더 일반적인 사용 사례를 다룹니다.

## 교차 관찰자 개념과 사용

Intersection Observer API는 다음과 같은 상황이 발생했을 때 호출되는 콜백 함수를 구성할 수 있습니다.

- **대상** 요소는 기기의 뷰포트 또는 특정 요소와 교차합니다. 특정 요소는 Intersection Observer API의 목적에 따라 **루트 요소** 또는 **루트**라고 불립니다.
- observer가 최초로 대상 요소를 관찰하라고 요청 받은 시점입니다.

일반적으로, 대상 요소와 가장 가까운 스크롤 가능한 상위 요소나 타겟요소가 스크롤 가능한 요소의 하위 요소가 아닌 경우, 장치 뷰포트와 관련된 교차 변화를 관찰하고 싶어합니다. 장치 뷰포트와 관련된 교차를 관찰하기 위해서는 `root` 옵션에 `null`을 지정해야 합니다. 교차 관찰자 옵션에 대한 더 자세한 설명을 위해서 계속 읽어야 합니다.

뷰포트를 루트로 사용하던지 다른 요소들을 루트로 사용하던지, API는 같은 방식으로 동작하여 대상 요소의 가시성이 변화하여 요청한 양만큼 루트와 교차할 때마다 사용자가 제공한 콜백함수를 실행합니다.

타겟 요소와 타겟 요소의 루트 사이의 교차의 정도는 **intersection ratio** 입니다. 0.0과 1.0 사이의 값으로 보이는 대상 요소의 백분율을 나타냅니다.

### 교차 관찰자 생성하기

intersection observer는 생성자를 호출하고, threshold가 한 방향 혹은 다른 방향으로 교차할 때마다 실행하기 위한 callback 함수를 전달하여 생성합니다.

```js
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

threshold가 1.0이라는 의미는 `root` 옵션으로 지정된 요소 내에서 타겟 요소가 100% 보이면 콜백이 호출된다는 의미입니다. 다음과 같은 필드가 있습니다.

#### 교차 관찰자 옵션

{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 생성자에 전달되는 `options` 객체는 observer의 콜백이 언제 호출되는지를 제어할 수 있게 해줍니다. 이 객체는 다음과 같은 필드를 가지고 있습니다.

- `root`
  - : 대상 가시성을 체크하기 위한 뷰포트로 사용되는 요소. 반드시 타겟의 상위 요소이어야 합니다. 만약 뷰포트를 지정하지 않거나 `null` 이면 브라우저 뷰포트가 기본으로 설정됩니다.
- `rootMargin`
  - : 루트 주위의 여백입니다. CSS {{cssxref("margin")}} 속성과 비슷한 값을 가질 수 있습니다. 예시. `"10px 20px 30px 40px"` (위, 오른쪽, 아래, 왼쪽). 값은 백분율이 될 수 있습니다. 이 값의 집합은 교차 지점을 계산하기 전에 루트 요소 경계 박스의 각 사이드 값을 늘리거나 줄일 수 있습니다. 기본 값은 0입니다.
- `scrollMargin`
  - : 중첩된 {{glossary("scroll container","scroll containers")}} 주위에 적용되는 여백으로, `rootMargin`과 동일한 값/기본값을 사용합니다. 이 여백은 교차 지점을 계산하기 전에 중첩된 스크롤 가능한 컨테이너에 적용됩니다. 양수 값은 컨테이너의 클리핑 사각형을 확장하여, 타겟이 실제로 보이기 전에 감지되도록 허용하며, 음수 값은 이 영역을 축소합니다.
- `threshold`
  - : 관찰자의 콜백이 무조건 실행되어야 하는 대상의 가시성 백분율을 나타내는 숫자 또는 숫자 배열입니다. 만약 가시성이 50% 지점을 넘는 경우만 감지하고 싶다면, 0.5를 지정하여 사용할 수 있습니다. 만약 가시성이 25%만큼 넘어갈 때마다 콜백을 실행하고 싶다면, \[0, 0.25, 0.5, 0.75, 1]을 지정하여 사용할 수 있습니다. 기본 값은 0 입니다. (1 픽셀이라도 보이면, 콜백이 실행됩니다.) 1.0의 값은 모든 픽셀이 가시 상태가 될 때까지 임계값이 통과되지 않는다는 것을 의미합니다.
- `delay` {{experimental_inline}}
  - : 타겟의 가시성을 추적할 때([trackVisibility](#trackvisibility)가 `true`일 때), 관찰자로부터 발생하는 알림 간에 최소 지연 시간(ms)을 설정하는 데 사용할 수 있습니다. 가시성 계산은 연산 비용이 크기 때문에 알림 빈도를 제한하는 것이 바람직합니다. 가시성을 추적할 때, 100 미만의 값은 자동으로 100으로 설정되며, 허용 가능한 가장 큰 값을 사용하는 것이 권장됩니다. 기본값은 0입니다.
- `trackVisibility` {{experimental_inline}}
  - : `IntersectionObserver`가 타겟의 가시성 변화를 추적할지 여부를 나타내는 boolean 값입니다. 값이 `false`인 경우, 브라우저는 타겟 요소가 루트 요소의 뷰포트로 스크롤되어 들어올 때 교차를 보고합니다. 값이 `true`인 경우, 브라우저는 타겟이 실제로 보이는지, 다른 요소에 의해 가려지지 않았는지, 필터, 투명도 감소, 변형 등에 의해 왜곡되거나 숨겨졌는지를 추가로 확인합니다. 가시성 추적은 연산 비용이 크기 때문에 기본값은 `false`입니다. 이 값을 설정하는 경우 [`delay`](#delay) 옵션도 함께 설정해야 합니다.

#### 관찰할 요소를 대상으로 하기

관찰자를 생성했다면, 관찰할 타겟 요소를 전달해야 합니다.

```js
let target = document.querySelector("#listItem");
observer.observe(target);

// observer를 위해 설정한 콜백은 바로 지금 최초로 실행됩니다
// 대상을 관찰자에 할당할 때까지 기다립니다. (타겟이 현재 보이지 않더라도)
```

언제든지 타겟 요소가 `IntersectionObserver`에 지정된 임계값을 만족시키면, 콜백은 호출됩니다. 콜백은 {{domxref("IntersectionObserverEntry")}} 객체와 관찰자 목록을 받습니다.

```js
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // 각 엔트리는 관찰된 하나의 교차 변화을 설명합니다.
    // 대상 요소:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

콜백이 수신한 엔트리 목록은 교차 상태의 변화를 보고한 각 대상에 대한 하나의 엔트리를 포함합니다. 엔트리가 현재 루트와 교차하는 요소를 나타내는지 보기 위해 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 속성 값을 확인합니다.

콜백이 메인스레드에서 실행되는 것을 유의해야 합니다. 가능한 한 최대한 빨리 동작해야 합니다. 만약 시간 소비가 필요한 일이 마무리 되어야 한다면, {{domxref("Window.requestIdleCallback()")}}을 사용하세요.

또한, `root` 옵션을 지정했다면, 대상은 반드시 루트 요소의 하위 요소이어야만 한다는 점을 명심해야 합니다.

### 교차 계산 방법

Intersection Observer API가 고려하는 모든 영역은 직사각형입니다. 불규칙한 모양의 요소는 모든 요소를 둘러싸는 부분들을 가장 작은 직사각형이 차지하는 것으로 여겨집니다. 비슷하게, 요소의 보이는 부분이 직사각형이 아니면, 요소의 교차하는 직사각형이 요소의 보이는 모든 부분을 포함하는 가장 작은 직사각형으로 간주됩니다.

{{domxref("IntersectionObserverEntry")}}에서 제공하는 다양한 속성이 교차를 어떻게 설명하는지를 조금 이해하는 것이 유용합니다.

#### 교차 루트와 루트 여백

컨테이너와 요소의 교차를 따라가기 전에, 우리는 컨테이너가 무엇인지를 알아야 합니다. 컨테이너는 **교차 루트** 또는 **루트 요소** 입니다. 관찰 대상 요소의 상위 요소인 document의 특정 요소이거나 컨테이너로 문서 뷰포트를 사용하기 위한 `null`이 될 수 있습니다.

**루트 교차 직사각형**은 대상 요소를 확인하기 위한 직사각형입니다. 이 직사각형은 다음과 같이 결정됩니다.

- 만약 교차 루트가 절대적인 루트라면(즉, 최상단 {{domxref("Document")}}), 루트 교차 직사각형은 뷰포트 직사각형입니다.
- 교차 루트에 overflow clip이 있는 경우, 루트 교차 직사각형은 루트 요소의 컨텐츠 영역입니다.
- 위 두 가지 경우가 아니라면, root 교차 직사각형은 교차 루트 경계 클라이언트 직사각형입니다.({{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}를 호출하여 반환된)

루트 교차 직사각형은 {{domxref("IntersectionObserver")}}를 생성할 때, **root margin** , `rootMargin`을 설정함으로 인해 조정될 수 있습니다. `rootMargin` 값은 최종 교차 루트 경계 (콜백이 실행될 때 {{domxref("IntersectionObserverEntry.rootBounds")}}에 공개된)를 생성하기 위해 교차 루트 경계 박스의 각 측면을 더해 오프셋을 정의합니다.
양수 값으로 설정하면 박스가 확장되고, 음수 값으로 설정하면 박스가 축소됩니다. 각 오프셋 값은 픽셀(px) 또는 퍼센트(%) 단위로만 지정할 수 있습니다.

루트 여백을 사용하여 박스를 확장하면, 타겟 요소가 실제로 화면에 보이기 전에 루트와 교차하도록 만들 수 있습니다.
예를 들어, 이미지가 보이기 시작하는 순간이 아니라, 화면에 나타나기 직전에 미리 로딩을 시작하는 데 활용할 수 있습니다.

아래 예제에는 스크롤 가능한 상자와, 초기에는 화면 밖에 있는 요소가 있습니다.
루트의 오른쪽 바깥 여백을 조정하면 다음의 결과를 확인할 수 있습니다.

- 바깥 여백이 양수인 경우, 빨간색 요소가 실제로 보이지 않더라도, 루트의 바깥 여백 영역과 교차하므로 루트와 교차한 것으로 간주됩니다.
- 바깥 여백이 음수인 경우, 빨간색 요소가 보이기 시작하더라도, 루트의 경계 박스가 축소되었기 때문에 루트와 교차한 것으로 간주되지 않습니다.

```html hidden
<div class="demo">
  <div id="container">
    <div id="elem"></div>
    <div id="gutter"></div>
  </div>
  <div id="marginIndicator"></div>
</div>
<div class="controls">
  <label>
    Set the right margin of the root:
    <input id="margin" type="number" value="0" step="5" />px
  </label>
  <label>
    You can also use this slider to scroll the container:
    <input id="scrollAmount" type="range" min="0" max="300" value="0" />
  </label>
  <p>Current intersection ratio: <span id="output"></span></p>
</div>
```

```css hidden
.demo {
  display: flex;
}

.controls {
  display: flex;
  flex-direction: column;
}

#container {
  position: relative;
  width: 200px;
  height: 100px;
  overflow-x: scroll;
  border: 1px solid black;
}

#marginIndicator {
  position: relative;
  height: 100px;
  background-color: blue;
  opacity: 0.5;
}

#elem {
  background-color: red;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 200px;
}

#gutter {
  width: 500px;
  height: 100px;
}
```

```js hidden
let observer;
function createObserver() {
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        output.textContent = entry.intersectionRatio.toFixed(2);
      });
    },
    {
      threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      root: container,
      rootMargin: `0px ${margin.value}px 0px 0px`,
    },
  );
  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;

    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }
  observer.observe(elem);
}
createObserver();
margin.addEventListener("input", () => {
  createObserver();
});
scrollAmount.addEventListener("input", () => {
  container.scrollLeft = scrollAmount.value;
});
```

{{EmbedLiveSample("교차 루트와 루트 여백", "", 200)}}

#### 교차 루트와 스크롤 여백

루트 요소 안에 중첩된 {{glossary("scroll container","scroll containers")}}가 있고, 그중 스크롤 가능한 컨테이너 하나의 내부에 있는 타겟과의 교차를 관찰하려는 경우를 생각해 봅시다.
기본적으로 타겟 요소와의 교차는 루트에 의해 정의된 영역 안에서 타겟이 보이기 시작할 때, 즉 컨테이너가 루트의 뷰 안으로 스크롤되어 들어오고, 동시에 타겟 요소가 해당 컨테이너의 클리핑 사각형 안으로 스크롤되어 들어왔을 때 관찰되기 시작합니다.

스크롤 여백을 사용하면 타겟이 스크롤 컨테이너 안에서 실제로 보이기 전이나 후에 교차 관찰을 시작할 수 있습니다.
이 바깥 여백은 루트 내의 모든 중첩된 스크롤 컨테이너에 추가되며, 루트 요소 자체가 스크롤 컨테이너인 경우도 포함됩니다. 그 결과 교차 계산에 사용되는 클리핑 영역이 확장(양수 바깥 여백)되거나 축소(음수 바깥 여백)되는 효과가 있습니다.

> [!NOTE]
> 스크롤 여백을 적용하고자 하는 각 스크롤 컨테이너마다 개별적으로 교차 관찰자를 생성하고, rootMargin 속성을 사용하면 비슷한 효과를 낼 수도 있습니다.
> 하지만 스크롤 여백을 사용하는 방식이 더 효율적이며, 대부분의 경우 중첩된 타겟을 하나의 교차 관찰자로 관리할 수 있습니다.

아래 예제에는 스크롤 가능한 상자와 초기에는 화면에 밖에 있는 이미지 캐러셀이 있습니다.
루트 요소의 관찰자가 캐러셀 내부의 이미지 요소를 타겟으로 관찰합니다.
이미지 요소가 루트 요소와 교차하기 시작하면, 해당 이미지를 로드하고, 교차를 기록한 뒤 관찰자를 제거합니다.

아래로 스크롤하여 캐러셀을 화면에 표시해보세요.
화면에 보이는 이미지들은 즉시 로딩되어야 합니다.
캐러셀 내부를 스크롤하면, 요소가 눈에 보이는 순간 이미지가 로딩되는 것을 관찰할 수 있습니다.

예제를 초기화한 후, 제공된 컨트롤을 사용하여 스크롤 여백 비율을 변경할 수 있습니다.
만약 20%와 같은 양수 값을 설정하면 스크롤 컨테이너의 클립 사각형이 20% 확장되어, 이미지가 화면에 들어오기 전에 미리 감지되고 로드되는 것을 확인할 수 있습니다.
반대로 음수 값을 설정하면, 이미지가 화면에 들어온 이후에야 교차가 감지됩니다.

```html hidden
<button id="reset" type="button">Reset</button>
```

```html hidden
<div id="root-container">
  <p>content before (scroll down to carousel)</p>

  <div class="flex-container">
    <div class="carousel">
      <img
        src=""
        data-src="ballon-portrait.jpg"
        class="lazy-carousel-img"
        alt="Balloon portrait" />
      <img
        src=""
        data-src="balloon-small.jpg"
        class="lazy-carousel-img"
        alt="balloon-small" />
      <img
        src=""
        data-src="surfer.jpg"
        class="lazy-carousel-img"
        alt="surfer" />
      <img
        src=""
        data-src="border-diamonds.png"
        class="lazy-carousel-img"
        alt="border-diamonds" />
      <img src="" data-src="fire.png" class="lazy-carousel-img" alt="fire" />
      <img
        src=""
        data-src="puppy-header.jpg"
        class="lazy-carousel-img"
        alt="puppy" />
      <img src="" data-src="moon.jpg" class="lazy-carousel-img" alt="moon" />
      <img src="" data-src="rhino.jpg" class="lazy-carousel-img" alt="rhino" />
    </div>
    <div id="margin-indicator"></div>
  </div>
  <p>content after</p>
</div>
```

```html hidden
<div class="controls">
  <label>
    Set the right margin of the scroll root:
    <input id="margin" type="number" value="0" step="5" />%
  </label>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#root-container {
  height: 250px;
  overflow-y: auto;
  border: solid blue;
}

.controls {
  margin-top: 10px;
}

p {
  height: 50vh;
}

.flex-container {
  display: flex;
}

#margin-indicator {
  position: relative;
  height: 100px;
  width: 1px;
  background-color: red;
  opacity: 0.5;
  display: flex;
}

.carousel {
  width: 300px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  border: solid;
  /* outline: 200px solid rgba(0, 0, 0, 0.1); */
}
.carousel img {
  scroll-snap-stop: always;
  scroll-snap-align: start;
  display: block;
  width: 195px;
  height: 99px;
  min-width: 195px;
  min-height: 99px;
  margin-right: 10px;
  background-color: #eeeeee; /* Placeholder background */
}

#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js hidden
const rootContainer = document.getElementById("root-container");
const marginIndicator = document.getElementById("margin-indicator");
const carousel = document.querySelector(".carousel");
const lazyImages = carousel.querySelectorAll(".lazy-carousel-img");
let imageObserver;

function createImageObserver() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  let observerOptions = {
    root: rootContainer,
    rootMargin: "0px", // No extra margin
    scrollMargin: `${margin.valueAsNumber}%`, // No extra margin / Can be set
    threshold: 0.01, // Trigger when 1% of the image is visible
  };

  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        log(`intersect: ${img.dataset.src}`); // Only on first intersection
        img.src = `https://mdn.github.io/shared-assets/images/examples/${img.dataset.src}`; // Load image by setting src
        img.classList.remove("lazy-carousel-img"); // Remove the class
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  }, observerOptions);

  if (margin.valueAsNumber < 0) {
    marginIndicator.style.width = `${-margin.valueAsNumber}px`;
    marginIndicator.style.left = `${margin.valueAsNumber}px`;
    marginIndicator.style.backgroundColor = "blue";
  } else {
    marginIndicator.style.width = `${margin.valueAsNumber}px`;
    marginIndicator.style.left = "0px";
    marginIndicator.style.backgroundColor = "green";
  }

  lazyImages.forEach((image) => {
    imageObserver.observe(image); // Start observing each image
  });
}

if ("IntersectionObserver" in window) {
  createImageObserver();
  margin.addEventListener("input", () => {
    createImageObserver();
  });
} else {
  // Fallback for browsers that don't support Intersection Observer
  // Loads all images immediately if Intersection Observer is not supported.
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
    img.classList.remove("lazy-carousel-img");
  });
  console.warn(
    "Intersection Observer not supported. All carousel images loaded.",
  );
}
```

{{EmbedLiveSample("교차 루트와 스크롤 여백","100%","500px")}}

#### Thresholds

매번 대상 요소가 얼마나 보이는지의 극미한 변화마다 보고하는 것보다 Intersection Observer API는 **thresholds** 를 사용합니다. 관찰자를 생성할 때, 하나 또는 하나 이상의 보이는 대상 요소의 백분율을 나타내는 숫자 값을 제공할 수 있습니다. 그런 다음, API는 이러한 임계값을 넘어가는 가시성 변경 사항만 보고합니다.

예를 들어, 대상의 가시성이 각 25% 지점보다 크거나 작을 때마다 보고를 받고 싶다면, 관찰자를 생성할 때 \[0, 0.25, 0.5, 0.75, 1]로 이루어진 임계값 목록을 지정해야 합니다.

콜백이 호출될 때, 어느 방향에서든 노출된 양이 임계값 중 하나를 초과하는 루트 변화를 교차하는 정도가 관찰된 각 대상에 대한 `IntersectionObserverEntry` 객체 목록을 받습니다.

엔트리의 {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 속성을 관찰함으로써 대상이 현재 루트를 교차하는 것을 볼 수 있습니다. 만약 해당 값이 `true` 라면, 대상은 최소한 부분적으로 루트 요소나 문서와 교차하고 있습니다. 이를 통해 엔트리는 교차하는 요소에서 더 이상 교차하지 않는 요소로의 전환을 나타내거나 교차하지 않음에서 교차하는 전환으로 나타낼 수 있습니다.

교차가 정확이 두 개 사이의 경계 또는 {{domxref("IntersectionObserverEntry.boundingClientRect", "boundingClientRect")}}가 0인 영역을 따르는 경우에 발생하는 무조건 교차하는 직사각형이 존재할 수 있다는 것을 주목해야 합니다. 경계선을 공유하는 대상과 루트의 상태는 교차 상태로의 전환이 충분하지 않다고 여겨질 수 있습니다.

어떻게 임계값이 동작하는 지를 느껴보기 위해서, 아래 상자를 스크롤 해봅시다. 그 안의 각 색칠된 상자는 네 모서리의 보이는 영역의 백분율을 보여주고, 따라서 컨테이너를 스크롤할 때 시간이 지남에 따라 이 비율이 변화하는 것을 볼 수 있습니다. 각 상자는 다른 임계값을 가지고 있습니다.

- 첫번째 상자는 각 가시성 백분율에 대한 임계값을 가지고 있습니다. 즉, {{domxref("IntersectionObserver.thresholds")}} 목록은 `[0.00, 0.01, 0.02, /*…,*/ 0.99, 1.00]` 입니다.
- 두번째 상자는 50% 지점에 하나의 임계값을 가지고 있습니다.
- 세번째 상자는 가시성의 10% 마다 임계값을 가지고 있습니다. (0%, 10%, 20%, 등.).
- 마지막 상자는 각 25% 마다 임계값을 가지고 있습니다.

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // 관찰자를 위한 옵션

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = `box${i + 1}`;
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector(`#${boxID}`));
  }

  // Scroll to the starting position

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let box = entry.target;
    let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("Thresholds", 500, 500)}}

#### 가시성 추적과 지연

기본적으로 관찰자는 타겟 요소가 루트 요소의 뷰포트 안으로 스크롤되어 들어올 때 알림을 제공합니다.
대부분의 상황에서 이것만으로 충분하지만, 때로는 타겟이 "시각적으로 방해받는" 상태일 때 교차가 보고되지 않는 것이 중요한 경우도 있습니다. 예를 들어, 분석 지표나 광고 노출을 계산할 때는 타겟 요소의 전체 또는 일부가 가려지거나 왜곡되지 않았는지가 중요합니다.

`trackVisibility` 값을 설정하면, 투명도 변경이나 필터나 변형 적용 등으로 인해 브라우저가 시각적으로 방해받았다고 생각되지 않는 타겟에 대해서만 교차를 보고하도록 합니다.
이 알고리즘은 보수적으로 설계되어 있어서, 투명도를 아주 약간만 줄여 기술적으로는 보이는 요소일지라도 보고를 생략할 수 있습니다.

가시성 계산은 연산 비용이 크므로, 꼭 필요한 경우에만 사용해야 합니다.
가시성을 추적할 때는 최소 보고 주기를 제한하기 위해 {{domxref("IntersectionObserver/delay","delay")}} 옵션을 함께 설정해야 합니다.
delay 값은 허용 가능한 가장 큰 값으로 설정하는 것이 권장되며, 가시성 추적 시 최소 delay는 100ms입니다.

#### 잘라내기와 교차 직사각형

브라우저는 다음과 같이 최종 교차 직사각형을 계산합니다. 교차가 일어날 때를 더 정확히 이해하기 위해서 아래 순서를 이해하는 것은 도움이 됩니다.

1. 대상 요소의 경계 직사각형 (즉, 요소를 구성하는 모든 컴포넌트의 경계 상자를 완전히 둘러싸는 제일 작은 직사각형)은 타겟의 {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}}로부터 얻습니다. 이건 아마 가장 큰 교차 직사각형입니다. 아래 남은 순서에서 교차 되지 않는 어떤 부분도 제거합니다.
2. 대상의 직계 상위 블록에서 시작하여 밖으로 뻗어 나가면서, 포함된 블록의 잘라낸 조각이 있는 경우 교차 직사각형에 적용됩니다. 블록의 잘라낸 조각은 두 개 블록의 교차와 {{cssxref("overflow")}} 속성에 의해 특정된 잘라내기 모드가 있다면 이를 기반으로 결정됩니다. `overflow` 를 `visible` 이 아닌 것에 설정하면 clipping이 발생할 수 있습니다.
3. 포함된 요소 중 하나가 중첩된 브라우징 컨텍스트({{HTMLElement("iframe")}}에 들어있는 문서와 같은)의 루트라면, 교차 사각형은 포함된 컨텍스트의 뷰포트에 고정되고, 컨테이너를 따라 컨테이너의 포함된 블록과 위쪽으로의 반복이 계속됩니다. `<iframe>` 의 최상단 요소에 도달하면, 교차 사각형은 프레임의 뷰포트의 고정되고, 그 프레임의 부모 요소는 교차 루트를 따라 반복된 다음 블록이 됩니다.
4. 위쪽으로의 반복이 교차 루트에 도달하면, 결과 사각형이 교차 루트의 교차 공간에 매핑됩니다.
5. 결과 사각형은 [root intersection rectangle](#root-intersection-rectangle)과 교차하여 갱신 됩니다.
6. 최종적으로 이 사각형이 대상 {{domxref("document")}} 의 교차 공간에 매핑됩니다.

### 교차 변화 콜백

루트 요소 내에 보이는 대상 요소의 양이 임계값 가시성을 지날 때, {{domxref("IntersectionObserver")}} 객체의 콜백이 실행됩니다. 콜백은 모든 교차된 각 임계값 중 하나씩, {{domxref("IntersectionObserverEntry")}} 객체들의 배열과 `IntersectionObserver` 객체 자체에 대한 참조를 입력으로 받습니다.

목록에 있는 각 엔트리는 교차된 하나의 임계값을 의미하는 {{domxref("IntersectionObserverEntry")}} 객체이고, 각 엔트리가 주어진 요소와 루트 요소가 얼마나 교차하는 지, 요소가 교차하고 있는지에 대한 여부, 그리고 전환이 발생한 위치를 설명합니다.

아래 예시에 나오는 코드 스니펫은 요소가 교차하지 않을 떄부터 루트를 최소 75% 이상 교차할 때 얼마나 전환하는 지를 세는 카운터를 유지하는 콜백을 보여줍니다. 임계값이 0.0 (기본)인 콜백은 [approximately](https://www.w3.org/TR/intersection-observer/#dom-intersectionobserverentry-isintersecting) {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} 불리언 값의 전환될 때 호출됩니다. 따라서 스니펫은 먼저 전환이 긍정적인지 확인하고, {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} 가 75%를 넘을 때 카운터가 증가합니다.

```js
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
};
```

## 인터페이스

- {{domxref("IntersectionObserver")}}
  - : Intersection Observer API의 주요 인터페이스. 같은 교차 설정으로 개수 상관 없이 대상 요소를 관찰할 수 있는 관찰자 생성과 관리를 위해 메서드를 제공합니다. 각 관찰자는 하나 또는 그 이상의 대상 요소와 공유된 상위 요소 또는 최상단 {{domxref("Document")}} {{Glossary('viewport')}} 사이의 교차 속에서 비동기적으로 변화를 감지할 수 있습니다. 상위 요소 또는 뷰포트는 **root** 로 불립니다.
- {{domxref("IntersectionObserverEntry")}}
  - : 대상 요소와 전환하는 특정 순간의 루트 컨테이너 사이의 교차를 말합니다. 이러한 종류의 객체는 `IntersectionObserver` 콜백의 입력 또는 {{domxref("IntersectionObserver.takeRecords()")}}를 호출하는 오직 두 가지 방법으로만 얻을 수 있습니다.

## 간단한 예제

이 간단한 예제는 대상 요소가 어느 정도 가시화 되는지에 따라 색상과 투명도가 변화합니다. [Intersection Observer API를 통한 타이밍 요소 가시성](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), 일련의 요소(예: 광고)가 사용자에게 표시되는 시간을 측정하고, 통계를 기록하거나 요소를 갱신하여 정보에 반응하는 방법을 보여주는 더 광범위한 예제를 찾을 수 있습니다.

### HTML

이 예제의 HTML은 대상이 될 (창의적인 ID `"box"`) 박스인 기본 요소와 박스 내의 일부 컨텐츠로 매우 짧습니다.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

CSS는 이 예제에서 그다지 중요하지 않습니다. 요소를 배치하고 {{cssxref("background-color")}}와 {{cssxref("border")}} 속성이 [CSS transitions](/ko/docs/Web/CSS/Guides/Transitions)에 참여할 수 있도록 설정하여, 요소가 더 많이 혹은 더 적게 보이지 않을 때 요소의 변화에 영향을 주기 위해 사용됩니다.

```css
#box {
  background-color: rgba(40, 40, 190, 1);
  border: 4px solid rgb(20, 20, 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### 자바스크립트

마지막으로, Intersection Observer API를 사용하여 작업을 수행하는 JavaScript 코드를 살펴봅시다.

#### 준비

첫째, 변수를 준비하고 observer를 설치해야 합니다.

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

여기서 설정한 상수와 변수는 다음과 같습니다.

- `numSteps`
  - : 가시성 비율인 0.0과 1.0 사이에서 몇 개의 임계값을 가질 지를 나타내는 상수입니다.
- `prevRatio`
  - : 이 변수는 임계값이 마지막으로 초과된 가시성 비율을 기록하는 데 사용됩니다. 이를 통해 대상 요소가 더 많이 혹은 더 적게 보이는 지를 알 수 있습니다.
- `increasingColor`
  - : 가시성 비율이 증가할 때 대상 요소에 적용할 색깔을 정의하는 문자열입니다. 문자열에서 "ratio"라는 단어는 대상의 현재 가시성 비율로 대체될 것이고, 요소는 색상만 변화하는 것이 아니라 덜 모호해지면서 점차 더 불투명해집니다.
- `decreasingColor`
  - : 비슷하게, 가시성 비율이 감소할 때 적용할 색상을 정의한 문자열입니다.

{{domxref("Window/load_event", "load")}} 이벤트를 수신을 시작하기 위해 {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}}를 호출합니다. 페이지 로딩이 끝나고 나면, {{domxref("Document.querySelector", "querySelector()")}}를 사용하여 `"box"` ID를 가진 요소에 대한 참조를 얻고, 곧 교차 관찰자 구축 및 설치를 처리하기 위해 생성할 `createObserver()` 메서드를 호출합니다.

#### 교차 관찰자 생성

`createObserver()` 메서드는 페이지 로드가 완료되었을 때 호출되어 실제로 새로운 {{domxref("IntersectionObserver")}}를 생성하고 대상 요소를 관찰하는 프로세스를 시작합니다.

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

이는 관찰자에 대한 설정을 포함하는 `options` 객체를 설정하는 것으로부터 시작합니다. 문서의 뷰포트를 기준으로 대상 요소의 가시성 변화를 관찰하려고 하므로 `root`는 `null` 입니다. 여백은 필요 없기 때문에 여백 오프셋인 `rootMargin`을 "0px"로 지정합니다. 이는 관찰자가 대상 요소의 경계와 뷰포트 사이의 어떤 더해진 (혹은 빠진) 공간 없이 교차 변화를 관찰하는 것을 야기합니다.

가시성 비율 임계값 목록인 `threshold` 는 `buildThresholdList()` 함수를 통해 만들어집니다. 임계값 목록은 이 예시에서 수가 많고 그 수를 조정할 수 있으므로 계획적으로 만들어집니다.

`options`가 준비되면, {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 생성자를 호출하고, 교차 지점이 임계값 중 하나를 교차할 때 호출될 함수인 `handleIntersect()`와 옵션의 집합을 지정하여 새로운 관찰자를 생성합니다. 그리고 반환된 관찰자에 {{domxref("IntersectionObserver.observe", "observe()")}}를 호출하여 원하는 대상 요소에 전달합니다.

원한다면 각 요소에 대해 `observer.observe()`를 호출하여 뷰포트에 대한 가시성 교차 변화를 여러 요소에서 모니터링할 수 있도록 선택할 수 있습니다.

#### 임계값 비율의 집합 구축

임계값 집합을 만드는 `buildThresholdList()` 함수는 다음과 같습니다.

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

이렇게 하면 1과 `numSteps` 사이의 각 숫자 `i`에 대해 `i/numSteps` 값을 `thresholds` 집합에 넣음으로써 0.0에서 1.0 사이의 비율인 각 임계값의 집합을 만듭니다. 또한 그 값을 포함하기 위해서 0을 넣습니다. 그 결과, `numSteps`(20)의 기본값을 고려했을 때 임계값 집합은 다음과 같습니다.

<table class="standard-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Ratio</th>
        <th>#</th>
        <th>Ratio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tr>
      <tr>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tr>
      <tr>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tr>
      <tr>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tr>
      <tr>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tr>
      <tr>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tr>
      <tr>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tr>
      <tr>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tr>
      <tr>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tr>
      <tr>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tr>
      <tr>
        <th>10</th>
        <td>0.55</td>
      </tr>
    </tbody>
</table>

물론, 코드 내에 임계값 집합을 하드 코딩할 수 있고, 여러분은 보통 그렇게 작성하게 될 것 입니다. 그러나 이 예제는 세분화를 조정하기 위해 구성 제어를 추가하기 위한 공간을 남겨두었습니다.

#### 교차 변화 처리

대상 요소(이 예제에서 ID가 `"box"`인 요소)가 공개되거나 가려져서 가시성 비율이 임계값 집합 중 하나를 교차하는 것을 브라우저가 감지할 때, 처리 함수인 `handleIntersect()`를 호출합니다.

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

`entries` 목록에 있는 각 {{domxref("IntersectionObserverEntry")}}에 대해 엔트리의 {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}}가 올라가고 있는지 확인합니다. 만약 올라가고 있다면, 대상의 {{cssxref("background-color")}}을 `increasingColor`(기억하세요. 색상은 `"rgba(40, 40, 190, ratio)"` 입니다.)의 문자열에 세팅하고, "ratio"라는 단어를 엔트리의 `intersectionRatio`로 대체합니다. 그 결과 색상만 변화하는 게 아니라, 대상 요소의 투명도도 변화합니다. 가시성 비율이 감소하면, 배경 색상의 알파 값은 같이 감소하므로 요소가 더 투명해집니다.

비슷하게, 만약 `intersectionRatio` 가 감소하면, `decreasingColor` 문자열을 사용하고 대상 요소의 `background-color` 를 설정하기 전에 "ratio"라는 단어를 `intersectionRatio` 로 대체합니다.

결국, 가시성 비율이 증가하는지 감소하는지를 따라가기 위해서 `prevRatio` 변수에 있는 현재 비율을 기억해야 합니다.

### 결과

아래는 결과 컨텐츠입니다. 페이지를 위아래로 스크롤하고 움짐임에 따라 박스 모양이 얼마나 변화하는지 알아보세요.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

더 광범위한 예제는 다음 링크에 있습니다. [Timing element visibility with the Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} and {{domxref("IntersectionObserverEntry")}}
