---
title: HTML 소개
slug: Learn/HTML/Introduction_to_HTML
---

{{LearnSidebar}}

{{glossary("HTML")}}은 문서의 특정 텍스트 영역이 문단인지 목록인지 표의 일부인지 구분 할 수 있도록 의미를 부여하고, 헤더인지, 콘텐츠 컬럼인지, 네비게이션 메뉴인지 알수 있도록 논리적인 영역으로 구조화 하고, 이미지와 비디오 같은 콘텐츠를 삽입할 수 있게 해주는 요소들로 구성된 지극히 간단한 언어입니다. 이번 과정은 이 두 가지 주제에 대한 소개와 HTML을 이해하기 위해 알아야 하는 기본 개념과 문법을 설명합니다.

## 전제 조건

이번 과정을 시작하기 전에, HTML에 대한 사전 지식은 필요하지 않습니다만, 기본적으로 컴퓨터 사용에 친숙해야 하고, 웹사이트의 콘텐츠를 탐색하는 정도의 웹을 사용할 줄 알아야 합니다. [기본 소프트웨어 설치](/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software)에 있는 기본적인 작업 환경이 구축되어 있어야 하고, [파일 다루기](/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files)에 있는 파일을 생성하고 관리하는 방법을 이해하고 있어야 합니다. 이 두가지 내용은 [웹 시작하기](/ko/docs/Learn/Getting_started_with_the_web)를 위한 초급 과정입니다.

> **참고:** 혹시, 파일을 생성하기 힘든 컴퓨터/테블릿 혹은 다른 기기에서 작업한다면, [JSBin](http://jsbin.com/) 이나 [Thimble](https://thimble.mozilla.org/) 같은 온라인 코딩 프로그램을 이용하여 대부분의 코드 예제를 작성해 볼 수 있습니다.

## 안내서

이 과정은 HTML의 모든 기초 이론을 학습하고, 몇몇 기법을 실습해 볼 수 있는 충분한 기회를 제공합니다. 아래와 같은 내용을 담고 있습니다.

- [HTML 시작하기](/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
  - : HTML을 시작하기 위한 초급 내용을 다룹니다. 요소, 속성을 정의하고, 한번쯤은 들어봤을지도 모르는 중요한 용어들을 알아보고 어디에 사용되는지 살펴봅니다. 또, HTML 요소를 구조화 하는 방법, 일반적인 HTML 페이지가 어떻게 구조화되는지를 알아보고, 언어의 중요한 기본 특징에 대해 설명합니다. 그러면서, 여러분들이 흥미를 가질 수 있도록 HTML 코드를 직접 작성해 보도록 하겠습니다.
- [head 안에는 무엇이 있나? HTML 메타 데이터](/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
  - : HTML 문서의 헤드는 페이지가 로딩될 때 웹 브라우저에는 보이지 않는 부분입니다. 페이지의 {{htmlelement("title")}}, (HTML 콘텐츠에 스타일을 적용하고 싶다면) {{glossary("CSS")}} 링크, 파비콘 링크, 그리고 메타데이터(문서의 작성자, 문서를 설명하기 위한 중요한 키워드와 같은 HTML에 대한 정보)와 같은 정보를 담고 있습니다.
- [HTML 텍스트 기본](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
  - : HTML을 사용하는 주요 목적 중의 하나는 텍스트에 의미를 부여(**시맨틱**)하는 것인데, 그렇게 하면 브라우저는 화면에 어떻게 노출되어야 하는지 명확하게 알 수 있습니다. 이 글에서는 HTML을 이용하여 글의 제목과 문단의 구조에서 텍스트를 분리해 보고, 단어에 강조/중요도를 부여해보고, 리스트 만드는 법 등을 살펴 보겠습니다.
- [하이퍼링크 만들기](/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
  - : 하이퍼링크는 웹을 웹(web, 거미줄, 연결을 의미)으로 만들어주는 것이기 때문에 굉장히 중요합니다. 이 글에서는 링크를 만드는데 필요한 문법을 설명하고, 링크의 사례들을 논의해 봅니다.
- [텍스트 조작 고급기법](/ko/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
  - : HTML에는 텍스트를 조작하기 위한 많은 요소들이 있습니다. [이](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) 글에는 다 담을 수는 없습니다. 이 글에서는 잘 알려지진 않았지만 알아두면 굉장히 유용한 요소들을 살펴보겠습니다. 인용구, 설명 목록, 소스 코드 혹은 관련 텍스트, 위첨자, 아래첨자, 연락 정보 등을 마크업 하는 방법을 알아보겠습니다.
- [문서와 웹사이트 구조](/ko/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
  - : '문단'이나 '이미지'와 같은 페이지의 부분을 정의하는 것처럼, HTML은 '헤더', '네비게이션 메뉴', '주요 내용 컬럼'과 같은 웹사이트의 영역을 정의하는데도 사용됩니다. 이 글에서는 기본 웹사이트 구조를 설계하는 법을 살펴보고, 이 구조를 표현하기 위해 HTML로 직접 작성해 보겠습니다.
- [HTML 디버깅](/ko/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
  - : HTML 작성은 잘 되었는데, 무언가 잘못되었고, 작업을 할 수 없다면 코드에서 에러가 발생하는 부분은 어디일까요? 이 글은 이런 상황에 도움을 줄 수 있는 도구들을 소개합니다.

## 평가

다음의 평가들은 위의 가이드에 있는 HTML 기본을 얼마나 이해하고 있는지 테스트 합니다.

- [마크업](/ko/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
  - : 우리는 모두 글자를 쓰는 법을 금방 배우게 됩니다. 텍스트를 꾸미고 조작하는 것을 테스트 해볼 수 있는 유용한 예제들이 있습니다. 여러분이 마크업 하는 것을 평가합니다.
- [페이지 콘텐츠 구조화](/ko/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
  - : 이 평가는 헤더, 푸터, 네비게이션 메뉴, 주요 콘텐츠, 사이드바를 담고 있는 간단한 웹 페이지의 구조를 HTML로 작성하는 능력을 테스트합니다.

## 같이 보기

- [웹 지식 기본 1](https://teach.mozilla.org/activities/web-lit-basics/)
  - : HTML 소개 과정에서 논의된 많은 기법들을 살펴보고 테스트 해볼 수 있는 모질라 재단 과정이 있습니다. 학습자들은 이 여섯 가지의 과정에서 글을 읽고, 글을 작성하고, 참석하는데 친숙해 질 것입니다. 만들어 보고 협업하면서 탄탄한 웹의 토대를 찾아보세요.
