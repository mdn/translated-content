---
title: Svelte 시작하기
slug: >-
    Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - Svelte
  - client-side
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

이 문서에는 [스벨트 프레임워크](https://svelte.dev/)에 대한 빠른 소개를 제공합니다.
Svelte가 어떻게 작동하는지, 지금까지 본 나머지 프레임워크 및 도구와 Svelte가 어떻게 다른지 살펴보겠습니다. 그런 다음 개발 환경을 설정하고, 샘플 앱을 만들고, 프로젝트 구조를 이해하고, 로컬에서 실행하고 프로덕션용으로 빌드하는 방법을 배웁니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제사항:</th>
      <td>
        <p>
          적어도
          <a href="/en-US/docs/Learn/HTML">HTML</a>,
          <a href="/en-US/docs/Learn/CSS">CSS</a>, and
          <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> 
          언어에 사용에 익숙하기를 권장합니다. 그리고
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >의 사용법에 대해서도 지식이 있어야합니다.
        </p>
        <p>
        스벨트 컴파일러는 우리의 소스로 부터 최소화 및 최적화된 자바스크립트 코드를 생성합니다.
        당신은 앱을 컴파일하고 빌드하기 위한 노드와 npm이 설치된 터미널이 필요합니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
      로컹 스벨트 개발 환경을 설정하기 위해, 시작하는 앱을 생성 및 빌드하고 스벨트가 어떻게 동작하는지에 대해서 이해합니다.
      </td>
    </tr>
  </tbody>
</table>


## 스벨트: 풍부한 사용자 인터페이스를 구축하기 위한 새로운 접근

스벨트는