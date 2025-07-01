---
title: View Transitions API
slug: Web/API/View_Transition_API
original_slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: 6d4b6a0f9df94de158c373d6b08c504caafcee5f
---

{{SeeCompatTable}}{{DefaultAPISidebar("View Transitions API")}}

**View Transitions API**는 서로 다른 DOM 상태 간에 애니메이션 전환을 쉽게 만들 수 있는 메커니즘을 제공하는 동시에 한 단계로 DOM 콘텐츠를 업데이트할 수 있습니다.

## 개념 및 사용법

뷰 전환(View Transition)은 사용자의 인지 부하를 줄이고 맥락을 유지하며 애플리케이션의 상태 또는 뷰 간에 이동할 때 인지되는 로딩 지연 시간을 줄이는데 널리 사용되는 디자인 옵션입니다.

하지만 웹에서 뷰 전환을 만드는 것은 지금까지는 어려웠습니다. 단일 페이지 애플리케이션(SPA)에서 상태 간 전환에는 상당한 양의 CSS와 JavaScript를 작성해야 하는 경향이 있었습니다.

- 이전 콘텐츠와 새 콘텐츠의 로딩 및 포지셔닝을 처리합니다.
- 이전 상태와 새 상태에 애니메이션을 적용하여 전환을 만듭니다.
- 이전 콘텐츠와의 우발적인 사용자 상호 작용으로 인해 문제가 발생하지 않도록 합니다.
- 전환이 완료되면 이전 콘텐츠를 제거합니다.

읽기 위치 손실, 초점 혼란, 이상한 라이브 영역 알림 동작과 같은 접근성 문제가 새 콘텐츠와 이전 콘텐츠가 DOM에 한꺼번에 존재할 때 발생할 수 있습니다. 또한, SPA가 아닌 일반 웹사이트 등에서 문서 간 뷰 전환이 불가능합니다.

View Transitions API는 필요한 DOM 변경 및 전환 애니메이션을 훨씬 쉽게 처리할 수 있는 방법을 제공합니다.

> [!NOTE]
> The View Transitions API는 현재 문서 간 뷰 전환을 지원하지 않지만, 향후 사양에 포함될 예정이며 현재 활발히 작업 중입니다.

### 기본적인 뷰 전환 만들기

예를 들어, SPA에는 탐색 링크가 클릭되거나 서버에서 업데이트가 푸시되는 등의 이벤트에 대한 응답으로 새 콘텐츠를 가져오고 DOM을 업데이트하는 기능이 포함될 수 있습니다. [기본 뷰 전환 데모](https://mdn.github.io/dom-examples/view-transitions/)에서는 클릭한 섬네일을 기반으로 새로운 전체 크기 이미지를 표시하는 `displayNewImage()` 함수로 이 기능을 단순화했습니다. 브라우저에서 지원하는 경우에만 View Transition API를 호출하는 `updateView()` 함수 안에 이 기능을 캡슐화했습니다.

```js
function updateView(event) {
  // 이벤트가 <a> 태그에서 실행되는지, <img> 태그에서 실행하는지에 따라 차이를 처리합니다.
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // 뷰 전환을 지원하지 않는 브라우저를 위한 폴백입니다.
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // 뷰 전환을 사용합니다.
  const transition = document.startViewTransition(() => displayNewImage());
}
```

이 코드는 표시되는 이미지 간의 전환을 처리하는 데 충분합니다. 지원 브라우저에서는 이전 이미지와 캡션에서 새 이미지와 캡션으로의 변경이 부드러운 크로스 페이드(기본 뷰 전환)로 표시됩니다. 비지원 브라우저에서도 여전히 작동하지만, 멋진 애니메이션은 제공되지 않습니다.

또한 `startViewTransition()`은 뷰 전환 프로세스의 여러 부분에 도달할 때마다 코드를 실행할 수 있도록 여러 프로미스를 포함하는 {{domxref("ViewTransition")}} 인스턴스를 반환한다는 점도 언급할 가치가 있습니다.

### 뷰 전환 프로세스

뷰 전환이 어떻게 작동하는지 살펴보겠습니다.

1. {{domxref("Document.startViewTransition()", "document.startViewTransition()")}}이 호출되면, API는 현재 페이지의 스크린샷을 찍습니다.
2. 그런 다음 `startViewTransition()`에 전달된 콜백(이 경우, `displayNewImage`)이 호출되어 DOM이 변경됩니다. 콜백이 성공적으로 실행되면 {{domxref("ViewTransition.updateCallbackDone")}} 프로미스가 이행되어 DOM 업데이트에 응답할 수 있습니다.
3. API는 페이지의 새 상태를 실시간 표현으로 캡처합니다.
4. API는 다음과 같은 구조로 의사 요소 트리를 구성합니다.

   ```plain
   ::view-transition
   └─ ::view-transition-group(root)
      └─ ::view-transition-image-pair(root)
         ├─ ::view-transition-old(root)
         └─ ::view-transition-new(root)
   ```

   - {{cssxref("::view-transition")}}은 모든 뷰 전환을 포함하고 다른 모든 페이지 콘텐츠 위에 위치하는 뷰 전환 오버레이의 루트입니다.
   - {{cssxref("::view-transition-old")}}는 이전 페이지 뷰의 스크린샷이고, {{cssxref("::view-transition-new")}}는 새 페이지 뷰의 실시간 표현입니다. 이 두 가지 모두 {{htmlelement("img")}} 또는 {{htmlelement("video")}}와 같은 방식으로 대체된 콘텐츠로 렌더링되므로 {{cssxref("object-fit")}} 및 {{cssxref("object-position")}}과 같은 편리한 속성을 사용하여 스타일을 지정할 수 있습니다.

   전환 애니메이션이 실행되려고 하면 {{domxref("ViewTransition.ready")}} 프로미스가 이행되며, 기본값 대신 사용자 지정 자바스크립트 애니메이션을 실행하여 응답할 수 있습니다.

5. 이전 페이지 뷰는 {{cssxref("opacity")}} 1에서 0으로 애니메이션을 적용하고, 새로운 뷰는 `opacity`를 0에서 1로 애니메이션을 적용하며 기본 크로스 페이드가 생성됩니다.
6. 전환 애니메이션이 종료 상태에 도달하면, {{domxref("ViewTransition.finished")}} 프로미스가 이행되어 응답할 수 있습니다.

### 요소마다 다른 전환

현재 DOM 업데이트 시 변경되는 모든 다른 요소는 동일한 애니메이션을 사용하여 전환됩니다. 다른 요소에 기본 "루트" 애니메이션과 다른 애니메이션을 적용하려면 {{cssxref("view-transition-name")}} 속성을 사용하여 요소를 구분할 수 있습니다. 아래는 예시입니다.

```css
figcaption {
  view-transition-name: figure-caption;
}
```

뷰 전환 측면에서 페이지의 나머지 부분과 구분하기 위해 {{htmlelement("figcaption")}} 요소에 `figure-caption`이라는 `view-transition-name`을 지정했습니다.

이 CSS를 적용하면, 의사 요소 트리는 이제 다음과 같이 표시됩니다.

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

두 번째 의사 요소 세트의 존재로 `<figcaption>`에만 별도의 뷰 전환 스타일을 적용할 수 있습니다. 서로 다른 이전 및 새 페이지 뷰 캡처는 서로 완전히 분리되어 처리됩니다.

`view-transition-name`의 값은 `none`을 제외한 모든 값을 사용할 수 있으며, 특히 `none` 값은 해당 요소가 뷰 전환에 참여하지 않음을 의미합니다.

> **참고:** `view-transition-name`은 고유해야 합니다. 만약 렌더링된 두 요소의 `view-transition-name`이 같으면, {{domxref("ViewTransition.ready")}}가 거부되고 전환이 건너뛰어집니다.

### 애니메이션 사용자 지정하기

뷰 전환 의사 요소에는 기본 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_animations)이 적용됩니다. ([참조 페이지](#css_추가_사항)에 자세히 설명되어 있습니다).

특히 `높이`, `너비`, `위치` 및 `변형`에 대한 전환에는 부드러운 교차 페이드 애니메이션이 사용되지 않습니다. 대신, 높이 및 너비 전환은 부드러운 스케일링 애니메이션을 적용합니다. 반면 위치와 변형 전환은 요소에 부드러운 이동 애니메이션을 적용합니다.

일반 CSS를 사용하여 원하는 방식으로 기본 애니메이션을 수정할 수 있습니다.

예를 들어 속도를 변경할 수 있습니다.

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

좀 더 흥미로운 것을 살펴보겠습니다. `<figcaption>`에 대한 사용자 지정 애니메이션입니다.

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

여기서는 사용자 정의 CSS 애니메이션을 만들어 `::view-transition-old(figure-caption)` 및 `::view-transition-new(figure-caption)` 의사 요소에 적용했습니다. 또한 두 요소에 다른 여러 스타일을 추가하여 같은 위치에 유지하고 기본 스타일이 사용자 정의 애니메이션을 방해하지 않도록 했습니다.

또한 위보다 더 간단하고 더 멋진 결과를 만들어 내는 다른 전환 옵션도 발견했습니다. 최종 `<figcaption>` 뷰 전환은 다음과 같이 완성되었습니다.

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: 100%;
}
```

기본적으로 `::view-transition-group` 은 이전 뷰와 새 뷰 간에 너비와 높이를 전환하기 때문에 이 방법이 작동합니다. 두 상태 모두에 고정된 `높이`를 설정하기만 하면 작동합니다.

> **참고:** [View Transitions API를 사용한 부드럽고 간단한 전환](https://developer.chrome.com/docs/web-platform/view-transitions/)에는 몇 가지 다른 사용자 지정 예제가 포함되어 있습니다.

### JavaScript로 애니메이션 제어하기

{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 메서드는 여러 프로미스 멤버를 포함하는 {{domxref("ViewTransition")}} 객체 인스턴스를 반환하며, 이 인스턴스에는 전환의 다양한 상태에 도달할 때 JavaScript를 실행할 수 있는 여러 프로미스 멤버가 있습니다. 예를 들어, 의사 요소 트리가 생성되고 애니메이션이 시작되면 {{domxref("ViewTransition.ready")}}가 이행되고, 애니메이션이 완료되고 새 페이지 뷰가 사용자에게 표시되고 상호 작용하면 {{domxref("ViewTransition.finished")}}가 이행됩니다.

예를 들어, 다음 JavaScript를 사용하여 클릭 시 사용자의 커서 위치에서 발생하는 원형 뷰 전환을 생성할 수 있으며, {{domxref("Web Animations API", "Web Animations API", "", "nocode")}}에서 제공하는 애니메이션을 사용할 수 있습니다.

```js
// 마지막 클릭 이벤트를 저장합니다.
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // 이 API를 지원하지 않는 브라우저를 위한 폴백입니다.
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // 클릭 위치 가져오거나 화면 중앙으로 폴백합니다.
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 가장 먼 가장자리까지의 거리를 구합니다.
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // 전환을 만듭니다.
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 의사 요소가 생성될 때까지 기다립니다.
  transition.ready.then(() => {
    // 루트의 새 뷰에 애니메이션을 적용합니다.
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // 애니메이션을 적용할 의사 요소를 지정합니다.
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

이 애니메이션에는 기본 CSS 애니메이션을 끄고 이전 뷰 상태와 새 뷰 상태가 어떤 식으로든 혼합되지 않고, 새로운 상태가 전환되는 것이 아니라 이전 상태 위로 "지워지도록" 하려면, 다음 CSS도 필요합니다.

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

## 인터페이스

- {{domxref("ViewTransition")}}
  - : 뷰 전환을 나타내며, 전환이 다른 상태(예: 애니메이션 실행 준비 또는 애니메이션 완료)에 도달할 때 반응하거나, 전환을 완전히 건너뛸 수 있는 기능을 제공합니다.

## 다른 인터페이스로의 확장

- {{domxref("Document.startViewTransition()")}}
  - : 새 뷰 전환을 시작하고 이를 나타내는 {{domxref("ViewTransition")}} 객체를 반환합니다.

## CSS 추가 사항

### 속성

- {{cssxref("view-transition-name")}}
  - : 선택한 요소에 별도의 식별 이름을 제공하고 루트 뷰 전환과 별도의 뷰 전환에 참여하도록 하거나 `none` 값이 지정된 경우 뷰 전환을 수행하지 않도록 합니다.

### 의사 요소(Pseudo-elements)

- {{cssxref("::view-transition")}}
  - : 모든 뷰 전환을 포함하고 다른 모든 페이지 콘텐츠 위에 위치하는 뷰 전환 오버레이의 루트입니다.
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : 단일 뷰 전환의 루트입니다.
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : 뷰 전환의 이전 뷰와 새 뷰(전환 전과 후)를 위한 컨테이너입니다.
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : 전환 전 이전 뷰에 대한 정적 스크린샷입니다.
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : 전환 후 새로운 뷰애 대한 실시간 표현입니다.

## 예제

- [기본 뷰 전환 데모](https://mdn.github.io/dom-examples/view-transitions/): 이전 이미지와 새 이미지, 이전 캡션과 새 캡션 간에 별도의 전환이 있는 기본 이미지 갤러리 데모입니다.
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): 다양한 뷰 전환을 제공하는 보다 정교한 동영상 플레이어 데모 앱으로, [View Transitions API를 사용한 부드럽고 간단한 전환](https://developer.chrome.com/docs/web-platform/view-transitions/)에 대해 설명합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [View Transitions API를 사용한 부드럽고 간단한 전환](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: 부드러운 페이지 전환 만들기](https://stackdiary.com/view-transitions-api/)
