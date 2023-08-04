---
title: "Django 튜토리얼: 지역 도서관 웹사이트"
slug: Learn/Server-side/Django/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

이번은 실전 튜토리얼 시리즈의 첫번째 파트로서 당신이 배울 내용을 설명하고, 이어지는 튜토리얼 시리즈에서 개발하고 개선시켜볼 "지역 도서관" 예제 웹사이트에 대한 개요를 제공한다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전학습:</th>
      <td>
        <a href="/ko/docs/Learn/Server-side/Django/Introduction">Django 소개</a>
        파트를 읽으세요. 이어지는 파트를 위해서는
        <a href="/ko/docs/Learn/Server-side/Django/development_environment"
          >Django개발 환경 설치하기</a
        >
        파트도 필요합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">학습목표:</th>
      <td>
        이 튜토리얼에서 사용될 예제 어플리케이션을 소개하고, 여기서 논의될
        토픽들의 범위에 대해 이해하기
      </td>
    </tr>
  </tbody>
</table>

## 개요

MDN "로컬 라이브러리" 장고 튜토리얼에서 오신 것을 환영합니다. 여기에서는 , "로컬 라이브러리" 카탈로그를 운영하는데 사용될 수 있는 웹사이트를 개발할 것이다.

이 튜토리얼 시리즈는 아래 내용을 다룬다:

- 웹 애플리케이션의 골격을 만들기 위해 장고 도구 사용하기
- 개발 서버 시작하기와 끝내기
- 애플리케이션 데이터의 틀이 되는 모델 생성하기
- 데이터를 입력하기 위해서 장고 관리자(admin) 사이트 사용하기
- 여러가지 요청에 따른 특정 데이터를 가져오는 뷰(view)와 브라우저상에서 이 데이타를 볼수 있도록 HTML로 렌더링하는 템플릿을 생성하기
- 여러가지 URL 패턴과 특정한 뷰를 연결하는 맵퍼(mappers) 만들기
- 사이트 동작과 접속을 통제하기 위한 유저 인증(authorization) & 세션 추가하기
- 폼으로 작업하기
- 앱을 테스트할 코드 작성하기
- 장고의 보안도구를 효과적으로 사용하기
- 애플리케이션을 운영환경에 배포하기

여러분은 이 토픽들 중 일부는 이미 배웠고, 나머지는 가볍게 경험했다. 이 튜토리얼 시리즈를 완료하면, 여러분은 간단한 장고 앱을 혼자서 충분히 개발할 수 있다.

## LocalLibrary 웹사이트

_LocalLibrary는 이 튜토리얼 시리즈에서 우리가 만들고 개선시켜나갈 웹사이트의 이름이다._ 이름에서 예상되듯이, 이용자들이 대여 가능한 책을 찾아보고 사용자 계정을 관리할 수 있는, 작은 지역 도서관을 위한 온라인 도서목록을 제공하는 것이 목적이다.

이 예제는, 우리가 필요에 따라 크게 혹은 작게 확장할 수 있고, 대부분은 장고의 특성을 보여줄 수 있도록 아주 신중하게 선택된 예제이다. 더욱 중요한 것은 이 예제는 장고 웹 프레임워크의 가장 중요한 기능들을 경험해 보도록 안내된 경로를 제공한다:

- 처음 몇몇의 튜토리얼에서, 사용자가 어떤 책을 이용할 수 있는지 찾아볼 수 있도록, 간단한 둘러보기 전용 도서관 기능을 정의할 것이다. 이 내용은 거의 모든 웹사이트에서 일반적으로 제공되는 동작(데이타베이스에서 내용을 읽고 보여주는 것)을 탐색해볼 수 있도록 해줄 것이다.
- 튜토리얼을 좀 더 진행해 가면서, 도서관 예제는 좀 더 고급의 장고 기능을 보여줄 수 있도록 자연스럽게 확장된다. 예를 들면, 사용자가 책을 예약하도록 기능을 확장할 수 있고 이것을 이용해 폼을 사용하는 방법과 사용자 인증을 지원하는 방법을 보여줄 수 있다.

이것은 매우 확장성있는 예제이지만, 다음과 같은 이유로 _**Local**Library(Local에 강조)로 이름을 지었다. 그 이유는, 당신이 장고 개발을 빠르게 착수할 수 있도록, 필요한 최소한의 정보만 보여주고자 의도한 것이다. 결과적으로 책, 책의 판본, 저자및 다른 Key 정보를 저장할 것이다. 하지만 그외의 일반적인 도서관이 추가로 저장할만한 정보는 저장하지 않을 것이며, 여러개의 도서관 사이트를 지원하거나, "커다란 도서관"을 위한 기능은 제공하지 않을것이다._

## 개발중에 막혔어요, 소스코드는 어딨죠?

튜토리얼을 진행하면서, 각 포인트마다 복사해서 붙여넣기할 수 있는 적절한 토막 코드가 제공될 것이다. 또한 당신이 스스로 (약간의 안내문과 함께) 도전해볼 수 있는 부분도 있을 것이다.

개발중에 진행이 어렵다면, 여기 [Github](https://github.com/mdn/django-locallibrary-tutorial)에 완전히 개발된 버전의 웹사이트 소스코드를 참고할 수도 있다.

## 요약

LocalLibrary 웹사이트와 당신이 앞으로 배울 내용에 대해 좀 더 알게되었다. 이제 우리 예제를 담을 [뼈대 프로젝트(skeleton project)](/ko/docs/Learn/Server-side/Django/skeleton_website)를 생성해볼 차례이다.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
