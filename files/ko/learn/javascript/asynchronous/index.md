---
title: 비동기 JavaScript
slug: Learn/JavaScript/Asynchronous
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}

이 과정에서 우리는 {{Glossary("asynchronous")}} {{Glossary("JavaScript")}}와 이것이 중요한 이유, 서버에서 리소스를 가져오는 것과 같은 잠재적 블로킹 연산을 어떻게 효과적으로 다룰 수 있을지에 대해 살펴봅니다.

> **Callout:**
>
> #### 프론트엔드 웹 개발자가 되고싶으신가요?
>
> 목표를 향해 나아가기 위해 필요한 모든 필수 정보를 포함한 교육과정을 준비했습니다.
>
> [**시작하기**](/ko/docs/Learn/Front-end_web_developer)

## 필요한 사전 지식

Asynchronous Javascript는 상당히 고급 주제에 속하고, 시도해보기 전에 [JavaScript 첫걸음](/ko/docs/Learn/JavaScript/First_steps)과 [JavaScript 구성요소](/ko/docs/Learn/JavaScript/Building_blocks) 과정을 거치는것이 좋습니다.

> **참고:** 만약 파일을 만들 수 없는 컴퓨터/테블릿/기타 장치를 사용하고 있다면, [JSBin](https://jsbin.com/)이나 [Glitch](https://glitch.com)와 같은 온라인 코딩 프로그램에서 (대부분의) 예제 코드를 사용해볼 수 있습니다.

## 가이드

- [Introducing asynchronous JavaScript](/ko/docs/Learn/JavaScript/Asynchronous/Introducing)
  - : **동기**와 **비동기** 프로그램이 무엇인지, 비동기 기술을 자주 사용해야하는 이유, 역사적으로 Javascript에서 비동기 함수가 구현된 방식 및 문제를 살펴봅니다.
- [How to use promises](/ko/docs/Learn/JavaScript/Asynchronous/Promises)
  - : 프로미스와 프로미스 기반 API를 어떻게 사용하는지 알아봅니다. 또한 `async` 와 `await` 키워드를 소개합니다.
- [Implementing a promise-based API](/ko/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
  - : 자신만의 프로미스 기반 API를 구현하는 방법을 간략하게 설명합니다.
- [Introducing workers](/ko/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
  - : workers를 사용하면 별도의 스레드에서 특정 작업을 실행하여 메인 코드의 응답성을 유지할 수 있습니다. 이 글에서는 workers를 사용하도록 장기 실행 동기 함수를 다시 작성합니다.

## 평가

- [Sequencing animations](/ko/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
  - : 프로미스를 사용하여 특정 시퀀스에서 애니메이션 세트를 재생하는 평가입니다.

## 같이 보기

- Marijn Haverbeke의 환상적인 [Eloquent JavaScript](https://eloquentjavascript.net/) 온라인 책 [Asynchronous Programming](https://eloquentjavascript.net/11_async.html).
