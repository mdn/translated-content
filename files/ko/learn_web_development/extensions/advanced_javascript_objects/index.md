---
title: JavaScript 객체 소개
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects
original_slug: Learn/JavaScript/Objects
---

{{LearnSidebar}}

JavaScript에서는 배열과같은 기능부터 JavaScript 위에 구축된 브라우저 {{Glossary("API", "APIs")}}에 이르기까지 대부분의 것들이 객체입니다. 사용자는 관련된 함수들과 변수들을 효율적인 패키지로 추상화하거나 편리한 데이터 컨테이너로 작동하는 객체를 만들 수 있습니다. 언어에 대한 지식을 가지고 더 멀리 나아고자 한다면 JavaScript의 객체 기반의 본질을 이해하는 것이 중요하므로, 여러분을 돕기위해 이 모듈을 제공하였습니다. 여기에서는 객체 이론과 구문을 자세히 가르쳐드리며, 사용자 정의 객체를 만드는 방법도 알아볼 것입니다.

> [!CALLOUT]
> 프론트엔드 웹 개발자가 되고자 하시나요?목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.[**시작하기**](/ko/docs/orphaned/Learn/Front-end_web_developer)

## 사전 지식

이 장을 읽기 전에, 여러분은 {{Glossary("HTML")}} 과 {{Glossary("CSS")}} 를 어느 정도 알고 있어야 합니다. 그렇지 않다면 [HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)와 [CSS 소개](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics)를 먼저 읽고 오시기 바랍니다.

JavaScript 객체에 대해 자세히 알아보려면, 기본 문법에 대해 어느 정도 능숙해야 합니다. 이 장을 읽기 전에 [JavaScript 첫걸음](/ko/docs/conflicting/Learn_web_development/Core/Scripting)과 [JavaScript 구성 요소](/ko/docs/Learn_web_development/Core/Scripting)를 먼저 읽어보시기를 바랍니다.

> [!NOTE]
> 컴퓨터/태블릿/혹은 다른 디바이스 상에서 스스로 파일을 만들수 없는 환경이라면, [JSBin](https://jsbin.com/) 또는 [Glitch](https://glitch.com/) 과 같은 온라인 코딩 프로그램을 이용하여 (거의 모든) 예제 코드를 테스트해 보실 수 있습니다.

## 가이드

- [객체 기본](/ko/docs/Learn_web_development/Core/Scripting/Object_basics)
  - : JavaScript 객체 소개의 첫 장에서는, 기본적인 JavaScript 객체 문법을 볼 것이며, 이전 과정에서 이미 봐왔던 몇몇 JavaScript 특징들을 다시 들여다 볼 것입니다. 이를 통해 우리는 이전에 다루었던 많은 특징들이 사실상 객체였다는 사실을 알게 될 것입니다.
- [입문자를 위한 객체지향 JavaScript](/ko/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
  - : 가장 기본적인 것으로, 우리는 객체 지향 JavaScript(OOJS) 에 초점을 둘 것입니다. 이 글에서는 객체 지향 프로그래밍(OOP) 이론의 기본 관점을 보여주고, JavaScript 가 생성자함수를 이용하여 객체 클래스를 에뮬레이트 하는 방법과 객체 인스턴스를 생성하는 방법에 대해 탐구합니다.
- [객체 프로토타입](/ko/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
  - : 프로토타입은 JavaScript 객체가 또다른 객체로 특성을 상속시키기 위한 메커니즘이고, 그것들은 고전적인 객체 지향 프로그래밍 언어들의 상속 메커니즘과 다르게 작동합니다. 이 글에서는 그 다름을 탐구하고, 프로토타입 체인이 동작하는 방식을 설명하며 프로토타입의 속성이 기본 생성자들로 메소드를 추가하기 위해 사용되는 방법을 보여줍니다.
- [JavaScript에서의 상속](/ko/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
  - : 이제 OOJS 에 대한 대부분의 세부사항들에 대해서 설명이 되었으므로, 본 장에서는 "부모" 클래스로부터 특성을 상속받은 "자식" 오브젝트 클래스를 생성하는 방법을 보여줍니다. 뿐만 아니라, OOJS 를 언제 또는 어디서 사용하면 좋을 지에 대한 몇몇 조언도 기술되어있습니다.
- [JSON 데이터와 작업](/ko/docs/Learn_web_development/Core/Scripting/JSON)
  - : JSON(JavaScript Object Notation) 은 JavaScript 객체 문법상의 구조화된 데이터를 표현하기 위한 표준 텍스트기반 포맷입니다. 그래서 주로 웹사이트 상에 데이터를 표현하고 전송하는 데 사용되고 있습니다(예를 들면, 웹페이지 상에 데이터를 디스플레이할 수 있도록 서버에서 클라이언트로의 데이터 전송). 이 글에서는 데이터에 접근하기 위해 JSON 을 파싱하고, 또 자신만의 JSON 을 작성하는 것처럼 JavaScript를 사용하여 JSON 과 연동할 필요가 있는 모든 것들을 보여드릴 것입니다.
- [객체 생성 실습](/ko/docs/Learn/JavaScript/Objects/Object_building_practice)
  - : 이전 글들에서 우리는 JavaScript 객체 이론과 문법 세부사항의 중요한 것들을 보았습니다. 본 장에서는 커스텀 JavaScript 객체를 생성하는 다양한 연습을 하면서 실용적인 예들을 깊이 다룹니다.

## 평가

- [Bouncing balls demo 에 기능들 추가](/ko/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
  - : 이 평가에서는 여러분이 이전 글의 bouncing balls demo 를 시작점으로 하여, 몇 가지 새롭고 재미있는 기능들을 추가하길 기대합니다.

## 같이 보기

- [JavaScript 배우기](https://learnjavascript.online/)
  - : 야심찬 웹 개발자를 위한 훌륭한 리소스 — 간단한 강의와 대화형 테스트, 자동화된 평가를 통해 대화형 환경에서 JavaScript를 배우십시오. 처음 40 개의 강의는 무료이며 전체 과정은 소액의 일회성 지불로 이용할 수 있습니다.
