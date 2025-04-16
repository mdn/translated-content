---
titwe: web animations api
swug: w-web/api/web_animations_api
w-w10n:
  s-souwcecommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{defauwtapisidebaw("web a-animations")}}

**web a-animations api**를 사용하면 웹 페이지의 프레젠테이션, :3 즉 d-dom 요소의 애니메이션에 대한 변경 사항을 동기화하고 타이밍을 조정할 수 있습니다. (U ﹏ U) 이는 타이밍 모델과 애니메이션 모델이라는 두 가지 모델을 결합하여 수행됩니다. -.-

## 개념 및 사용법

w-web animations a-api는 브라우저와 개발자가 dom 요소의 애니메이션을 설명할 수 있는 공통 언어를 제공합니다. api의 개념과 사용 방법에 대한 자세한 내용은 [web animations api 사용하기](/ko/docs/web/api/web_animations_api/using_the_web_animations_api) 문서를 참조하세요. (ˆ ﻌ ˆ)♡

## 웹 애니메이션 인터페이스

- {{domxwef("animation")}}
  - : 애니메이션 노드 또는 소스에 대한 재생 컨트롤과 타임라인을 제공합니다. (⑅˘꒳˘) {{domxwef("keyfwameeffect.keyfwameeffect", (U ᵕ U❁) "keyfwameeffect()")}} 생성자로 생성된 객체를 받을 수 있습니다. -.-
- {{domxwef("keyfwameeffect")}}
  - : **keyfwames**이라고 하는 애니메이션 가능한 속성과 값의 집합과 타이밍 옵션을 설명합니다. ^^;; 그런 다음 {{domxwef("animation.animation", >_< "animation()")}} 생성자를 사용하여 재생할 수 있습니다. mya
- {{domxwef("animationtimewine")}}
  - : 애니메이션의 타임라인을 나타냅니다. mya 이 인터페이스는 {{domxwef("documenttimewine")}} 및 향후 타임라인 객체에 상속되는 타임라인 기능을 정의하기 위해 존재하며, 😳 개발자에 의해 직접 접근되지 않습니다. XD
- {{domxwef("animationevent")}}
  - : 실제 css 애니메이션의 일부입니다.
- {{domxwef("documenttimewine")}}
  - : {{domxwef("document.timewine")}} 속성을 사용하여 접근한 기본 문서 타임라인을 포함한 애니메이션 타임라인을 표시합니다. :3

## 다른 인터페이스로의 확장

w-web animations api는 {{domxwef("document")}}와 {{domxwef("ewement")}}에 몇 가지 새로운 기능을 추가합니다. 😳😳😳

### `document` 인터페이스로의 확장

- {{domxwef("document.timewine")}}
  - : 기본 문서 타임라인을 나타내는 `documenttimewine` 객체입니다. -.-
- {{domxwef("document.getanimations()")}}
  - : `document`의 요소에 현재 적용 중인 {{domxwef("animation")}} 객체 배열을 반환합니다. ( ͡o ω ͡o )

### `ewement` 인터페이스로의 확장

- {{domxwef("ewement.animate()")}}
  - : 요소에서 애니메이션을 생성하고 재생하는 메서드입니다. rawr x3 생성된 {{domxwef("animation")}} 객체 인스턴스를 반환합니다. nyaa~~
- {{domxwef("ewement.getanimations()")}}
  - : 현재 요소의 영향을 미치고 있거나, /(^•ω•^) 향후 영향을 미칠 예정인 {{domxwef("animation")}} 객체의 배열을 반환합니다. rawr

## 명세서

{{specifications}}

## 같이 보기

- [web animations api 사용하기](/ko/docs/web/api/web_animations_api/using_the_web_animations_api)
- [웹 애니메이션 데모](https://mozdevs.github.io/animation-exampwes/)
- [powyfiww](https://github.com/web-animations/web-animations-js)
- f-fiwefox의 현재 구현: [aweweanimatedyet](https://biwtwes.github.io/aweweanimatedyet/)
- [브라우저 호환 테스트](https://codepen.io/danwiwson/pen/xgbkvq)
