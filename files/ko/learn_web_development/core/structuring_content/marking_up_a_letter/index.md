---
title: "과제: 문서 마크업하기"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
original_slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

우리는 모두 글자를 쓰는 법을 금방 배우게 됩니다. 이 페이지에서 텍스트를 꾸미고 조작하는 것을 테스트 해볼 수 있는 유용한 예제들이 있습니다. 이 장에서는 하이퍼링크와 HTML {{htmlelement("head")}} 요소뿐만이 아니라, 주어진 글을 HTML 기본/혹은 고급 텍스트 포맷팅 방식에 맞춰 다듬는 연습을 할 예정입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        <p>
          이 장에 들어서기에 앞서 필요한 사전 지식에는
          <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
            >HTML 시작하기</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
            >head 안에는 무엇이 있나? HTML 메타 데이터</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
            >HTML 텍스트 기본</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
            >하이퍼링크 만들기</a
          >,
          <a
            href="/ko/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
            >텍스트 조작 고급기법</a
          >
          등이 있습니다.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>
        <p>
          HTML 기본/고급 텍스트 포맷팅 방법, 하이퍼링크, HTML {{htmlelement("head")}} 부분에
          무엇이 들어가는지에 대해 학습합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 시작하기에 앞서

프로젝트를 시작하기 위해서는 두 가지가 필요합니다. [마크업을 할 기본 텍스트](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt)와 [HTML에 스타일을 입힐 CSS 코드](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/css.txt)입니다. 텍스트 편집기를 이용해 .html 파일을 만들거나 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) 또는 [Glitch](https://glitch.com/)와 같은 온라인 코딩 도구를 사용하여 작업을 진행합니다.

> [!NOTE]
> 문제가 해결되지 않으면 이 페이지 하단의 평가 또는 추가 도움말 구획을 참조해 도움을 요청하세요.

## 프로젝트 요약

이 프로젝트에서 여러분은 대학 인트라넷에 호스팅 되어야하는 편지를 마크업하는 것입니다. 이 문서는 예비 박사 과정 학생들이 보낸 질문에 대한 연구원의 답변입니다.

### 블록/구조적인 의미

- 당신은 전체 문서를 doctype을 비롯해 {{htmlelement("html")}}, {{htmlelement("head")}}, {{htmlelement("body")}} 요소들을 이용하여 문서를 다듬어야 합니다.
- 일반적으로 이 문서는 다음과 같은 예시를 제외하고 단락과 제목의 구조로 마크업 해야합니다. 예시에는 가장 높은 단계의 제목("Re:" 줄) 1개와 두 번째 단계의 제목 3개가 있습니다.
- 적절한 목록 유형을 사용하여 학기 시작 날짜, 학습 과목, 이국적인 춤들을 표시 해야합니다.
- 2개의 주소를 {{htmlelement("address")}} 요소 안에 넣어야 합니다. 주소의 각 줄은 새로운 줄에 배치하되, 새 문단에 넣지 않아야 합니다.

### 인라인 구조

- 발신자 및 수신자의 이름, "Tel:", "Email:"은 강조하여 표시해야 합니다.
- 문서의 네 날짜에는 기계가 읽을 수 있는 날짜가 포함된 적절한 요소가 있어야 합니다.
- 문서의 첫 번째 주소와 첫 번째 날짜에는 발신자 열의 클래스 속성 값이 있어야 합니다. 나중에 추가할 CSS는 원본 문서 레이아웃처럼 올바르게 정렬되도록 합니다.
- 문서의 본문에 "PhD", "HTML", "CSS", "BC", "Esq." 등 5가지 약어를 표기하여 각 약어의 확장어를 제공해야 합니다.
- 화학식 및 숫자 10<sup>3</sup>과 10<sup>4</sup>(10의 3과 4 거듭제곱)에 6개의 하위/상위 첨자를 적절하게 표시해야 합니다.
- 본문에서 중요도가 높은 적절한 단어를 두 개 이상 표시해야 합니다.
- 본문에 하이퍼링크가 있어야 하는 위치는 두 곳입니다. 제목과 함께 적절한 링크를 추가합니다. 링크가 가리키는 위치의 URL은 `http://example.com`처럼 기재하면 됩니다.
- 대학 모토 인용문과 인용문에 적절한 요소를 표시합니다.

### 문서의 머리글

- 문서의 문자 집합은 적절한 메타 태그를 사용하여 utf-8로 설정해야 합니다.
- 문서의 작성자는 적절한 메타 태그에 명시해야 합니다.
- 제공된 CSS는 적절한 태그 안에 포함되어야 합니다.

## 힌트와 팁

- [W3C HTML 유효성 검사기](https://validator.w3.org/)를 사용하여 HTML의 유효성을 검사합니다. 유효성 검사를 통과하면 보너스 점수를 받을 수 있습니다.
- 이 프로젝트를 수행하기 위해 CSS를 몰라도 상관없습니다. 제공된 CSS를 HTML 요소 안에 넣기만 하면 됩니다.

## 예제

다음 스크린샷은 마크업 후 문자가 어떻게 보일 수 있는지 보여주는 예시입니다.

![Example](letter_screengrab_2.png)

## 평가 또는 추가 도움말

평가를 받고 싶거나 막혀서 도움을 요청하고 싶은 경우에 읽으시면 됩니다.

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/)와 같은 공유 가능한 온라인 편집기에 작성 코드를 넣습니다.
2. [MDN 토론 포럼 학습 카테고리](https://discourse.mozilla.org/c/mdn/learn/250)에서 평가 또는 도움을 요청하는 게시글을 작성합니다. 게시글에는 다음 내용이 포함되어야 합니다.

   - "문서 마크업에 대한 평가 필요"와 같은 설명이 포함된 제목입니다.
   - 이미 시도한 사항과 바라는 사항(예시: 문제가 발생하여 도움이 필요하거나 평가를 원하는 경우)에 대한 세부 내용을 작성합니다.
   - 평가받고 싶거나 도움이 필요한 경우에 대한 위의 1단계에서 제시한 것 처럼, 온라인 공유 가능 편집기 링크가 있어야합니다. 코드를 볼 수 없다면 코딩에 관한 문제가 있는 사람을 도와주기가 매우 어렵기 때문입니다.
   - 링크는 실제 프로젝트 또는 평가 페이지로 연결되는 링크로, 도움을 받고자 하는 문제를 확인할 수 있습니다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}
