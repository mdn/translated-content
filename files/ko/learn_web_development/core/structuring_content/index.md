---
title: HTML
slug: Learn_web_development/Core/Structuring_content
original_slug: Learn/HTML
---

{{LearnSidebar}}

웹사이트를 만들기 위해서는 웹 페이지 구조 정의의 토대가 되는 기술인 {{Glossary('HTML')}}에 대해 알아야 합나다. HTML은 작성하고자 하는 웹 콘텐츠가 문단인지, 리스트인지, 헤드라인인지, 링크인지, 이미지인지, 멀티미디어 플레이어인지, 폼 요소인지 아니면 기타 사용 가능한 다른 요소들 중의 하나인지, 혹은 새롭게 정의한 요소인지를 명확하기 인지할 수 있도록 하는데 사용됩니다.

## 학습 방향

HTML을 배우면서 시작하는 것이 가장 이상적입니다. [HTML에 대한 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)를 읽는 것부터 시작하세요. 그러면, 아래와 같은 고급 주제에 대해 배울 수 있게 될 것입니다.

- [CSS](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics_b957eec7deaf1ea2b20721d6838ea6e1), 그리고 HTML에 스타일을 적용하는 방법 (예를 들어, 사용된 텍스트 크기나 폰트를 변경하고, 테두리 선, 그림자 효과를 추가하고, 페이지의 레이아웃을 다단으로 편집하고, 애니메이션이나 다른 시각적인 효과를 추가할 수 있습니다.)
- [JavaScript](/ko/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792), 그리고 웹 페이지에 동적인 기능을 추가하는 방법 (예를 들어, 현재 위치를 찾아 지도 위에 표시하고, 버튼을 누를 때 마다 UI 요소를 노출하거나 숨길 수 있고, 사용자의 데이터를 로컬 시스템에 저장하는 것 등의 방법을 알 수 있습니다.)

이 주제를 학습하기에 앞서, 최소한 콘텐츠를 보면서 웹서핑하는 정도의 기초적인 컴퓨터 사용에 익숙해야 합니다. [기본적인 소프트웨어를 설치](/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software)하여 작업환경의 기초를 설정하고, [파일을 다뤄보면서](/ko/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) 파일을 생성하고 관리하는 방법을 이해해야 합니다. 이 두 가지가 모두 초보자가 [웹을 정복하기 위한 기본](/ko/docs/Learn_web_development/Getting_started/Your_first_website)이 됩니다.

이 주제를 공부하기 전에 [웹에 대한 기본 학습](/ko/docs/Learn_web_development/Getting_started/Your_first_website)을 추천하지만, 필수는 아닙니다. [HTML의 기본](/ko/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)에서 다루는 대부분의 내용이 우리가 배우게 될 [HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)에도 포함되어 있기는 하지만 좀 더 자세하게 다루고 있습니다.

## 구성

이 주제는 각 단계를 통해 배울 수 있도록 미리 마련해 둔 아래와 같은 순서로 구성되어 있습니다. 첫 단계부터 순서대로 진행하길 바랍니다.

- [HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)
  - : 이 과정은 중요한 컨셉과 구문을 배우게 되는 단계로 텍스트에 HTML을 적용하고, 파이퍼 링크를 추가하는 방법, HTML을 이용하여 웹 페이지의 구조를 작성하는 방법을 알아봅니다.
- [멀티미디어 요소 추가하기(embedding)](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content_010016f551c464adb3e557818ac7189b)
  - : 이 과정은 웹페이지에 HTML을 이용하여 멀티미디어 요소를 추가하는 방법, 이미지를 추가할 수 있는 다른 방법들, 그리고 비디오, 오디오, 혹은 다른 웹페이지를 삽입하는 방법을 살펴봅니다.
- [HTML 폼 요소](/ko/docs/Learn_web_development/Extensions/Forms)
  - : 폼 요소는 웹에서 굉장히 중요합니다. 폼 요소는 회원가입, 로그인, 피드백 보내기, 물건 구입과 같이 웹사이트와 상호작용하는데 필요한 굉장히 많은 기능을 제공합니다. 이 과정은 폼 요소의 클라이언트 측 요소를 만드는 것으로 시작됩니다.
- [HTML 테이블](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : 웹페이지에 표 형태의 데이터를 이해 가능하고, {{glossary("Accessibility", "접근")}}할 수 있는 방법으로 표현하는 것은 도전이 될 수 있습니다. 이 과정은 좀 더 세부적인 기능인 캡션(caption)과 요약(summary)를 적용하는 방법과 함께 테이블 마크업의 기본을 다룹니다.

## 일반적인 HTML 문제 해결하기

타이틀 다루기, 이미지, 비디오 강조된 콘텐츠, 기본 폼 요소 만들기 등 웹페이지를 만들때 생기는 [일반적인 문제들을 해결하기 위해 HTML을 이용](/ko/docs/Learn_web_development/Howto/Solve_HTML_problems)하는 방법을 설명하고 있는 콘텐츠 링크를 제공합니다.

## 함께 보기

- [MDN HTML (HyperText Markup Language)](/ko/docs/Web/HTML)
  - : 요소와 속성에 대한 상세한 설명을 담고 있는 MDN의 HTML 문서를 참고하는 것은 좋은 출발점입니다. 요소가 어떤 속성을 가지고 있는지, 어떤 값과 속성을 사용할 수 있는지를 알고 싶다면, 큰 도움이 될 것입니다.
