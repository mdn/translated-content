---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Animations")}}

**Web Animations API**를 사용하면 웹 페이지의 프레젠테이션, 즉 DOM 요소의 애니메이션에 대한 변경 사항을 동기화하고 타이밍을 조정할 수 있습니다. 이는 타이밍 모델과 애니메이션 모델이라는 두 가지 모델을 결합하여 수행됩니다.

## 개념 및 사용법

Web Animations API는 브라우저와 개발자가 DOM 요소의 애니메이션을 설명할 수 있는 공통 언어를 제공합니다. API의 개념과 사용 방법에 대한 자세한 내용은 [Web Animations API 사용하기](/ko/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) 문서를 참조하세요.

## 웹 애니메이션 인터페이스

- {{domxref("Animation")}}
  - : 애니메이션 노드 또는 소스에 대한 재생 컨트롤과 타임라인을 제공합니다. {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} 생성자로 생성된 객체를 받을 수 있습니다.
- {{domxref("KeyframeEffect")}}
  - : **keyframes**이라고 하는 애니메이션 가능한 속성과 값의 집합과 타이밍 옵션을 설명합니다. 그런 다음 {{domxref("Animation.Animation", "Animation()")}} 생성자를 사용하여 재생할 수 있습니다.
- {{domxref("AnimationTimeline")}}
  - : 애니메이션의 타임라인을 나타냅니다. 이 인터페이스는 {{domxref("DocumentTimeline")}} 및 향후 타임라인 객체에 상속되는 타임라인 기능을 정의하기 위해 존재하며, 개발자에 의해 직접 접근되지 않습니다.
- {{domxref("AnimationEvent")}}
  - : 실제 CSS 애니메이션의 일부입니다.
- {{domxref("DocumentTimeline")}}
  - : {{domxref("Document.timeline")}} 속성을 사용하여 접근한 기본 문서 타임라인을 포함한 애니메이션 타임라인을 표시합니다.

## 다른 인터페이스로의 확장

Web Animations API는 {{domxref("document")}}와 {{domxref("element")}}에 몇 가지 새로운 기능을 추가합니다.

### `Document` 인터페이스로의 확장

- {{domxref("document.timeline")}}
  - : 기본 문서 타임라인을 나타내는 `DocumentTimeline` 객체입니다.
- {{domxref("document.getAnimations()")}}
  - : `document`의 요소에 현재 적용 중인 {{domxref("Animation")}} 객체 배열을 반환합니다.

### `Element` 인터페이스로의 확장

- {{domxref("Element.animate()")}}
  - : 요소에서 애니메이션을 생성하고 재생하는 메서드입니다. 생성된 {{domxref("Animation")}} 객체 인스턴스를 반환합니다.
- {{domxref("Element.getAnimations()")}}
  - : 현재 요소의 영향을 미치고 있거나, 향후 영향을 미칠 예정인 {{domxref("Animation")}} 객체의 배열을 반환합니다.

## 명세서

{{Specifications}}

## 같이 보기

- [Web Animations API 사용하기](/ko/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [웹 애니메이션 데모](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Firefox의 현재 구현: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [브라우저 호환 테스트](https://codepen.io/danwilson/pen/xGBKVq)
