---
title: Express 웹 프레임워크 (Node.js/JavaScript의 활용)
slug: Learn/Server-side/Express_Nodejs
---

{{LearnSidebar}}

Express는 JavaScript로 작성되고 Node.js 런타임 환경에서 구동되는 인기 있는 웹 프레임워크입니다. 이 장에서는 Express 프레임워크의 몇 가지 장점과 개발환경 설치 방법, 웹 개발과 배포작업의 방법을 다룹니다.

## 알아야할 것들

이 장의 내용은 Server-side 웹 프로그래밍과 웹 프레임워크에 대한 이해가 필요합니다. 잘 모르겠다면 [Server-side website programming first steps](/ko/docs/Learn/Server-side/First_steps) 을 먼저 확인해보세요. 일반적인 프로그래밍 컨셉과 [JavaScript](/ko/docs/Web/JavaScript) 의 지식이 요구되지만, 핵심까지 세세하게 알 필요는 없습니다.

> **참고:** 여기서는 클라이언트 측에서의 자바스크립에 관한 많은 유용한 자료들을 이용할 수 있다. [JavaScript](/ko/docs/Web/JavaScript), [JavaScript Guide](/ko/docs/Web/JavaScript/Guide), [JavaScript Basics](/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/ko/docs/Learn/JavaScript) (한 번 배워보자). 자바스크립트의 핵심과 컨셉은 Node.js를 이용한 서버측 개발과 같으므로, 여기의 자료들을 이용하는 게 좋을 것이다. Node.js 는HTTP서버를 구축하고 파일 시스템에 접근하는 등의 브라우저가 필요없는 환경에서에서 유용한 기능을 제공하는 [additional APIs](https://nodejs.org/dist/latest-v6.x/docs/api/documentation.htm)를 제공하지만, 브라우저나 DOM에서 작동되는 자바스크립트 API는 지원하지 않는다.
>
> 다음 목차에서는 Node.js와 Express 그리고 인터넷과 책에서의 방대한 좋은 자료들에 있는 정보들을 알려준다. 이들은 [How do I get started with Node.js](http://stackoverflow.com/a/5511507/894359) (StackOverflow) 나 [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Quora)에 참고해보자

## 목차

- [Express/Node introduction](/ko/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : 처음으로 Express에 배우는 이 곳에서는 "Node가 뭐지?", "Express는 뭐지?"의 물음에 답하고, Express 웹 프레임워크의 전반적인 사항에 대해 알아볼 것이다. 주된 내용의 뼈대를 완성하고, Express 어플리케이션을 하나하나씩 배워볼 것이다. (하지만, 이 곳에서는 아직 어디서 테스팅이 이루어질 지 개발 환경등에서는 다루지 않을 것이다.).
- [Setting up a Node (Express) development environment](/ko/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : 이제 Express가 어디에 이용되는지 알아볼 것이다. Windows, Linux(Ubuntu), Mac OS X에서 Node/Express의 개발환경을 구축하기 위한 방법도 살펴볼 것이다. 운영체제에 관계없이, 여기서는 Express 개발을 시작하기위해서 어떤 것이 필요한지도 알려준다.
- [Express Tutorial: The Local Library website](/ko/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : 실질적인 튜토리얼에 해당하는 이번 수업에서는 어떤 것을 배우고 차후 수업에 필요한 "로컬 라이브러리"에서의 웹사이트의 전반적인 개요도 알아본다.
- [Express Tutorial Part 2: Creating a skeleton website](/ko/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : 여기서는 웹사이트의 뼈대를 구성해 나갈 것이다. 웹사이트의 뼈대란 사이트의 사이트맵, 템플릿 및 데이터베이스등을 말하므로 이를 만들어볼 것이다.
- [Express Tutorial Part 3: Using a Database (with Mongoose)](/ko/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : 여기서는 간단하게나마 Node/Express에 필요한 데이터베이스의 개요에 대해 소개할 것이다. 그리고 로컬의 웹사이트의 DB에 접근하기 위해 [Mongoose](http://mongoosejs.com/)를 사용하는 법도 알아본다. DB에서의 스키마와 모델이 어떻게 정의되는지, 필드의 타입과 기본적인 유효성에 대해서도 알아본다. 또한, 짧게나마 모델 데이터를 접근하는 주된 방법도 알아본다.
- [Express Tutorial Part 4: Routes and controllers](/ko/docs/Learn/Server-side/Express_Nodejs/routes)
  - : 이 수업에서는 _LocalLibray_ 웹사이트에 사용하기 위해 "더미" 핸들러 함수를 통한 라우터(URL 핸들링 코드)에 대해 배운다. 여러분의 라우팅 핸들링 코드를 사용할 수 있는 모듈 구조를 가지고 있으며, 다음 장에서 실제로 핸들러 기능을 확장할 수 있게 된다. 또한, Express에서 사용가능한 모듈 형식의 라우팅에 대해 쉽게 이해할 수 있을 것이다.
- [Express Tutorial Part 5: Displaying library data](/ko/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : 자, 이제 웹사이트에 책이나 데이터들을 표시할 페이지를 추가할 수 있다. 페이지에는 사이트에 관련된 자세한 부분과 리스트 및 모델 타입들이 얼마나 많이 기록되는지에 관한 홈 페이지가 포함되어 있다. 따라서 우리들은 데이터베이스에서 기록을 얻고 템플릿을 사용하는 데 실질적인 경험을 가질 수 있다.
- [Express Tutorial Part 6: Working with forms](/ko/docs/Learn/Server-side/Express_Nodejs/forms)
  - : 이 수업에서는 Pug를 사용해서 어떻게 Express에서 [HTML Forms](/ko/docs/Web/Guide/HTML/Forms) 이 사용되는지 보여주고, 특히 데이터베이스에서 폼을 작성하고 업데이트하고 지우기 위해 사용하는 방법에 대해 배울 것이다.
- [Express Tutorial Part 7: Deploying to production](/ko/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : 이제 꽤 훌륭한 로컬라이브러리 웹사이트 만들 수 있으며 , 웹 서버에 업로드 함으로서 여러 사람들이 인터넷을 통해 접근할 수 있게 만들 수 있다. 이 수업은 전반적으로 웹 사이트를 배포하기 위해 호스트와 연결하는 등을 배우고, 실제 서비스를 하기위해 준비해야할 것들을 알려 준다.

## 튜토리얼 추가하기

**자습서의 끝입니다.** (지금은 말이죠). 만약 이 자습서의 내용을 보충하고 싶으시다면 아래와 같은 주제를 해 주시면 좋을 것 같네요:

- 세션 이용하기
- 사용자 인증
- 사용자 권한 부여 및 허가
- Express 웹 어플리케이션 테스트
- Express 웹 어플리케이션 보안

그리고 평가 작업도 있으면 정말 좋을 것 같아요!
