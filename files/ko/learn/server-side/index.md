---
title: Server-side website programming
slug: Learn/Server-side
---

{{LearnSidebar}}

The **동적 웹사이트 서버-사이드 프로그래밍** 에 대한 주제는 동적 웹사이트를 생성하는 방법을 보여주는 과목(module) 시리즈이다. (Dynamic Websites: HTTP 요구(requests)에 응답하여 요구에 맞는 정보를 전달하는 웹사이트) 각 과목들은 서버-사이드 프로그래밍의 포괄적인 소개를 제공한다. 기본적인 어플리케이션들을 생성하기 위한 Django (Python) 와Express (Node.js/JavaScript) 같은 웹 프레임워크를 사용하는 방법에 대한 초보자 레벨(beginner level)의 가이드도 포함한다.

대부분의 주요 웹사이트들은 요구에 따라 동적으로 다른 데이터들을 보여주기 위해 여러 종류의 서버-사이드 기술을 사용한다. 예를 들어, Amazon에서 이용가능한 물품들이 얼마나 많을까? 그리고 Facebok에 얼마나 많은 게시글이 있을까? 를 상상해보자. 완전히 다른 static pages(정적 페이지)를 사용하여 이런 것들을 보여주는 것은 완전히 비효율적이다, 그래서 대신에 그런 정적인 템플릿([HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS), [JavaScript](/ko/docs/Learn/JavaScript) 를 사용하여 구성된 템플릿)을 보여준 다음, 필요할 때마다, 템플릿 안에 보이는 데이터들을 동적으로 업데이트한다. 예) 당신이 Amazon에서 다른 물품을 보고 싶어할 때 물품만 다른 것으로 업데이트한다.

현대의 웹 개발에서는, 서버-사이드 개발에 대해 배우는 것을 매우 추천한다.

## Learning pathway(학습 경로)

서버-사이드 프로그래밍을 시작하는 것은 보통 클라이언트-사이드(Client-side) 개발보다 더 쉽다. 왜냐하면, 동적 웹사이트는 비슷한 작업들을 많이 수행하는 경향이 있기 때문이다. (데이터베이스에서 데이터를 검색하고 페이지에 보여주는 것, 유저가 입력한 데이터가 유효한 지 확인하고 데이터 베이스에 저장하는 것, 로그인한 유저의 권환을 체크하는 것 등) 그리고 이런 작업들과 다른 일반적인 웹 서버 기능을 쉽게 해주는 웹 프레임워크가 있기 때문이다.

기본적인 프로그래밍 개념에 대한 지식 (또는 특정한 프로그래밍 언어에 대한 지식) 은 유용하나, 필수는 아니다. 비슷하게, 클라이언트-사이드 코딩에 대한 전문지식이 요구되지 않는다, 그러나 기본적인 지식은 클라이언트-사이드 웹 "프론트 엔드(Front End)"를 생성하는 개발자와 일 하는데 도움이 될 것이다.

"웹을 작동하는 방법"을 이해할 필요가 있다. 다음 주제들을 먼저 읽는 것을 추천한다.

- [What is a web server(웹서버는 무엇인가)](/ko/docs/Learn/Common_questions/What_is_a_web_server)
- [What software do I need to build a website?(웹사이트를 만들기 위해 필요한 소프트웨어는 무엇인가)](/ko/docs/Learn/Common_questions/What_software_do_I_need)
- [How do you upload files to a web server?(웹 서버에 파일을 업로드하는 방법은 무엇인가)](/ko/docs/Learn/Common_questions/Upload_files_to_a_web_server)

이런 기본적인 이해를 통해, 이 섹션의 과목들을 공부할 준비가 될 것이다.

## Modules(과목)

이번 주제에는 다음의 과목들을 포함하고 있다. 우선 첫번째 과목을 시작해야한다. 그 후에 두 개의 과목들 중 하나를 선택해 나아가야한다. 두 개의 과목은 가장 대중적인 서버-사이드 언어와 그에 맞는 적절한 웹 프레임워크를 사용하는 방법을 보여준다.

- [Server-side website programming first steps(서버-사이드 웹사이트 프로그래밍의 첫 단계)](/ko/docs/Learn/Server-side/First_steps)
  - : 이 과목은 서버 기술 문외한을 위한 서버-사이드 웹사이트 프로그래밍에 대한 정보를 제공한다. 또한, 서버-사이드 프로그래밍에 대한 근본적인 질문에 대한 답을 포함하고 있다. (그 질문은 서버가 무엇인지, 클라이언트-프로그래밍과 어떻게 다른 지, 서버가 왜 그렇게 유용한 지에 대한 것이다.) 그리고 몇몇의 더 대중적인 서버-사이드 웹 프레임워크에 대한 개요와 당신의 사이트에 가장 적합한 것을 선택하는 방법에 대한 가이드도 있다. 마지막으로, 웹 서버 보안에 대한 기본적인 섹션도 제공한다.
- [Django Web Framework (Python)](/ko/docs/Learn/Server-side/Django)
  - : Django는 매우 대중적이고 Python으로 쓰여진 매우 중요한 서버-사이드 웹 프레임워크이다. 이 과목은 Django가 좋은 웹 서버 프레임워크인 이유, 개발 환경을 구축하는 방법, 그리고 Django로 일반적인 업무를 수행하는 방법을 설명해준다.
- [Express Web Framework (Node.js/JavaScript)](/ko/docs/Learn/Server-side/Express_Nodejs)
  - : Express는 JavaScript로 쓰여진 대중적인 웹 프레임워크이며, node.js 런 타임 환경에서 호스트된다. 이 과목은 이 프레임 워크의 주요 장점, 개발 환경을 구축하는 법, 일반적인 웹 개발과 배치(deployment) 작업을 수행하는 법에 대해 설명해준다.

## 다른 주제

- [Node server without framework(프레임워크 없는 노드 서버)](/ko/docs/Learn/Server-side/Node_server_without_framework)
  - : 이 글은 프레임워크를 사용하고 싶지 않는 사람들을 위해, 순수한 Node.js로 구성된 단순한 정적 파일 서버를 제공한다.
