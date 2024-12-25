---
title: JavaScript 첫걸음
slug: conflicting/Learn_web_development/Core/Scripting
original_slug: Learn/JavaScript/First_steps
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}

우리의 첫 번째 JavaScript 과정에서는, 현실적인 첫 JavaScript 예제 작성에 앞서 "JavaScript란 뭘까", "JavaScript는 어떻게 생겼을까", "JavaScript는 뭘 할 수 있을까"와 같은 핵심적인 질문에 답을 하겠습니다. 그다음으로는 변수, 문자열, 숫자, 배열과 같은 핵심 개념을 자세히 논의해 보겠습니다.

> [!CALLOUT]
>
> 프론트엔드 웹 개발자가 되고자 하시나요?
>
> 목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.
>
> [**시작하기**](/ko/docs/orphaned/Learn/Front-end_web_developer)

## 필요한 사전 지식

JavaScript를 몰라도 이번 과정 시작에는 문제가 없지만, HTML과 CSS는 어느 정도 친숙해야 합니다. JavaScript를 시작하기 이전에 우선 다음 과정부터 진행하시는 게 좋습니다.

- [Web과 함께 시작하기](/ko/docs/Learn/Getting_started_with_the_web) (아주 기본적인 [JavaScript 소개](/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics)도 포함)
- [HTML 소개](/ko/docs/Learn/HTML/Introduction_to_HTML)
- [CSS 소개](/ko/docs/Learn/CSS/First_steps)

> [!NOTE]
> 파일을 만들 수 없는 컴퓨터나 태블릿, 기타 장치에서 작업을 하신다면 예제 코드의 대부분을 [JSBin](https://jsbin.com/)이나 [Glitch](https://glitch.com/) 같은 온라인 코딩 프로그램에서도 시험할 수 있습니다.

## 구성

- [JavaScript가 뭔가요?](/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
  - : MDN의 JavaScript 초급자 과정에 오신 걸 환영합니다! 첫 글은 JavaScript를 넓게 보면서 "뭔가요?", "뭘 하나요?"와 같은 질문을 답변하고, 여러분이 JavaScript에 친숙해지도록 도와드립니다.
- [JavaScript에 발 담그기](/ko/docs/Learn/JavaScript/First_steps/A_first_splash)
  - : JavaScript에 관한 이론과 용도를 약간 배우셨으니, 실용적인 따라해보기와 함께 하는 기초과정 단기 특강을 제공해드리겠습니다. 여기서는 간단한 "숫자 알아맞히기" 게임을 단계별로 차근차근 만들어봅니다.
- [뭐가 잘못됐을까요? JavaScript 문제 해결](/ko/docs/Learn/JavaScript/First_steps/What_went_wrong)
  - : 이전 글에서 "숫자 알아맞히기" 게임을 만든 뒤에, 프로그램이 돌아가지 않는다는 것을 발견하실 겁니다. 두려워하지 마세요. 세 번째 글에서 JavaScript 프로그램의 오류를 찾고 고치는 팁을 배울 수 있습니다.
- [필요한 정보 저장하기 — 변수](/ko/docs/Learn/JavaScript/First_steps/Variables)
  - : 앞선 글을 모두 읽으셨으면 이제 JavaScript가 뭔지, 뭘 할 수 있는지, 다른 웹 기술과 함께 어떻게 사용하는지, 주요 기능이 어떻게 생겼는지 등 넓은 윤곽을 그리실 수 있을겁니다. 이제 진짜 기초로 돌아가, JavaScript의 제일 기본적인 구성 요소를 어떻게 사용하는지 알아보겠습니다. 바로 변수입니다.
- [JavaScript의 기본 수학 — 숫자와 연산자](/ko/docs/Learn/JavaScript/First_steps/Math)
  - : 여기서는 JavaScript에서의 수학을 이야기하면서, 연산자와 다른 기능을 이리 저리 조합하여 숫자를 여러분의 뜻에 맞게 바꾸는 법을 배웁니다.
- [텍스트 다루기 — 문자열](/ko/docs/Learn/JavaScript/First_steps/Strings)
  - : 우리의 시선을 이제 문자열로 돌릴 차례입니다. 프로그래밍에서 텍스트를 일컫는 단어죠. 이번 글에서는 JavaScript를 배울 때 문자열에 대해 알아둬야 하는 것, 예를 들어 문자열 생성, 문자열 안의 따옴표 처리, 문자열 합치기 등을 알아봅니다.
- [유용한 문자열 메서드](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)
  - : 문자열의 기초를 탐구했으니, 한 단계 더 나아가 문자열의 길이 찾기, 문자열 합치고 나누기, 문자를 다른 문자로 치환하기 등 내장 메서드로 할 수 있는 유용한 작업에 대해 생각해봅니다.
- [배열](/ko/docs/Learn/JavaScript/First_steps/Arrays)
  - : 본 과정의 마지막 글에서는 배열에 대해 알아봅니다. 배열은 하나의 변수 이름 아래에 여러 데이터 목록을 저장하는 깔끔한 방법입니다. 배열이 왜 유용한지, 배열을 어떻게 생성하는지, 저장한 데이터를 회수하고, 추가하고, 제거하는 법 등을 배웁니다.

## 평가

다음 평가를 통해 JavaScript의 기초를 얼마나 이해했는지 시험할 수 있습니다.

- [바보같은 이야기 생성기](/ko/docs/Learn/JavaScript/First_steps/Silly_story_generator)
  - : 각자 배운 내용을 돌이켜보면서, 바보같은 이야기를 무작위로 만들어내는 앱을 제작해야 합니다. 행운을 빌어요!

## 같이 보기

- [Learn JavaScript](https://learnjavascript.online/)
  - : 성장하려는 웹 개발자에게 완벽한 자료입니다. 상호작용형 환경에서 자동화 평가의 안내를 받으며 짧은 강의들과 시험을 통해 JavaScript를 배워보세요. 처음 40개의 강의는 무료고, 전체 코스는 저렴한 1회 결제로 볼 수 있습니다.
