---
title: JavaScript 구성요소
slug: Learn/JavaScript/Building_blocks
---

{{LearnSidebar}}

이번 과정에서는 조건문, 반복문, 함수, 이벤트 등 일반적으로 발생하는 코드 종류를 중심으로 JavaScript의 중요한 기본 기능에 대해 설명합니다. 지금까지의 과정을 지나면서 여기서 다룰 내용을 살짝 보셨겠지만 좀 더 심도있게 다룰 것입니다.

> [!CALLOUT]
> 프론트엔드 웹 개발자가 되기를 생각해보고 계신가요?저희는 여러분의 목표를 향해 공부할 필요가 있는 모든 필수적인 정보를 담고 있는 코스를 준비해 놓았습니다.[**시작하기**](/ko/docs/Learn/Front-end_web_developer)

## 필요한 사전 지식

시작하기 전에, 기본적인 [HTML](/ko/docs/Learn/HTML/Introduction_to_HTML)과 [CSS](/ko/docs/Learn/CSS/First_steps) 지식을 알고 계셔야 하고, 또한 지난 모듈인 [JavaScript 첫걸음](/ko/docs/Learn/JavaScript/First_steps)을 학습하셔야 합니다.

> [!NOTE]
> 여기 나온 코드를 작성하고 실행해 볼 수 없는 환경이라면 (태블릿, 스마트폰, 기타 장치), [JSBin](https://jsbin.com/)이나 [Glitch](https://glitch.com)에서 대부분의 예제를 시험해 볼 수 있습니다.

## 가이드

- [판단 내리기 — 조건문](/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
  - : 어떤 프로그래밍 언어든 코드는 의사 결정을 내리고 입력 내용에 따라 작업을 수행해야 합니다. 예를 들어 게임에서 플레이어의 생명 수치가 0이면 게임이 종료됩니다. 날씨 앱에서는 아침에 해가 뜬 그림을 보여주고 밤에는 달과 별을 보여줍니다. 이 문서에서는 JavaScript에서 조건문이 작동하는 방법을 살펴 보겠습니다.
- [반복문](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code)
  - : 때때로 한 번보다 많이 연이어 작업을 완료해야 할 필요가 있습니다. 예를 들자면, 이름 목록을 순회하는 것입니다. 프로그래밍에서, 반복문은 이 작업을 대단히 잘 수행합니다. 여기서 우리는 JavaScript에서의 반복문 구조를 살펴볼 것입니다.
- [함수 — 코드 재사용](/ko/docs/Learn/JavaScript/Building_blocks/Functions)
  - : 코딩에서의 또 다른 필수적인 개념은 **함수**입니다. **함수**를 사용하면 정의된 블록 안에 하나의 작업을 수행하는 코드 조각을 저장할 수 있고, 언제든지 그 코드 조각이 필요할 때 같은 코드를 여러번 입력하지 않고도 짧은 명령을 사용해 그 코드를 호출할 수 있습니다. 이 문서에서는 기본 문법, 어떻게 함수를 호출하고 정의하는지, 스코프, 그리고 매개변수와 같은 함수의 기본 개념을 탐사할 것입니다.
- [함수 만들기](/ko/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
  - : 그동안 배운 이론을 활용해, 이 문서에서는 실용적인 경험을 제공합니다. 여기서 여러분은 사용자 정의 함수를 만드는 연습을 할 것입니다. 그 과정에서, 우리는 또한 함수를 다루는 데 있어 유용한 추가적인 세부 사항을 알아볼 것입니다.
- [함수 반환 값](/ko/docs/Learn/JavaScript/Building_blocks/Return_values)
  - : 함수에 대해 알아야 할 마지막 필수 개념은 반환 값입니다. 어떤 함수는 완료 후에 중요한 값을 반환하지 않지만, 반환하는 함수도 있습니다. 그 값이 무엇인지, 어떻게 사용하는지, 그리고 어떻게 유용한 값들을 반환하는 사용자 정의 함수를 만드는지를 이해하는 것은 중요합니다.
- [이벤트 입문](/ko/docs/Learn/JavaScript/Building_blocks/Events)
  - : 이벤트란 여러분이 프로그래밍하고 있는 시스템에서 발생하는 동작이나 발생인데, 이는 시스템이 여러분에게 알려주므로 만약 원한다면 어떠한 방식으로 이에 응답할 수 있습니다. 예를 들어 만약 사용자가 웹페이지의 버튼을 클릭한다면, 여러분은 그 동작에 응답하여 인포메이션 박스를 표시함으로써 응답하기를 원할지도 모릅니다. 이 자미가 문서에서 우리는 이벤트에 대한 중요한 개념을 논하고, 이벤트가 브라우저에서 어떻게 동작하는지 살펴볼 것입니다.

## 평가

다음의 평가는 위의 가이드에서 다뤄진 기본 JavaScript에 대한 여러분의 이해를 테스트할 것입니다.

- [이미지 갤러리](/ko/docs/Learn/JavaScript/Building_blocks/Image_gallery)
  - : 이제 JavaScript의 기본 구성 요소를 살펴 보았으므로, 많은 웹 사이트에서 볼 수 있는 상당히 공통적인 항목인 JavaScript 기반 이미지 갤러리를 구현하며 반복문, 함수, 조건문, 그리고 이벤트에 대한 여러분의 지식을 테스트할 것입니다.

## 같이 보기

- [Learn JavaScript](https://learnjavascript.online/)
  - : 웹 개발자가 되려는 분들에게 훌륭한 자원입니다 — Learn JavaScript는 자동화된 평가에 의해 가이드되며, 짧은 강의와 상호작용을 하는 테스트를 가진 대화형 환경입니다. 처음 40개의 강의는 무료이며, 전체 코스는 한 번의 작은 지불로 이용 가능합니다.
