---
title: 새로운 지식을 사용하기
slug: Learn/CSS/First_steps/Styling_a_biography_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

지난 몇 단원에서 배운 내용을 통해 CSS 를 사용하여 간단한 텍스트 문서의 서식을 지정하여 자신만의 스타일을 추가 할 수 있다는 것을 알게 될 것입니다. 이 평가는 그 기회를 제공합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        이 평가를 시도하기 전에 나머지 CSS 기본 과목을 살펴보고 HTML 기본 사항
        (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML">HTML 소개</a>
        학습) 을 이해해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>CSS 를 가지고 놀면서 새로운 지식을 테스트하기</td>
    </tr>
  </tbody>
</table>

## 시작점

아래의 라이브 편집기에서 작업하거나 , [시작점을 다운로드](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/) 하여 자신의 편집기에서 작업할 수 있습니다. 이 페이지는 HTML 과 문서 head 의 시작점 CSS 가 포함된 단일 페이지 입니다. 원하는 경우 로컬 컴퓨터에서 예제를 만들 때, 이 CSS 를 별도의 파일로 옮길수 있습니다. 또는 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) 또는 [Glitch](https://glitch.com/) 와 같은 온라인 도구를 사용하여 작업을 수행하십시오.

> **참고:** 문제가 발생하면, 도움을 요청하십시오 — 이 페이지 하단의 [평가 또는 추가 도움말](/ko/docs/Learn/CSS/First_steps/Using_your_new_knowledge#Assessment_or_further_help) 섹션을 참조하십시오.

## CSS 를 사용한 작업

다음 라이브 예는 CSS 를 사용하여 스타일이 지정된 전기(biography) 를 보여줍니다. 내가 사용한 CSS 속성은 다음과 같습니다 — 각 속성은 MDN 의 속성 페이지에 연결되어 더 많은 사용 예를 제공합니다.

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

나는 선택자, h1 및 h2 와 같은 스타일 요소를 혼합하여 사용했지만, 작업 제목 및 스타일을 위한 class 를 만들었습니다.

CSS 를 사용하여 내가 사용한 속성 값을 변경하여 이 전기(biography) 의 모양을 변경하십시오.

1. CSS color 키워드인 `hotpink` 를 사용하여 h1 제목을 분홍색으로 만듭니다.
2. CSS color 키워드 `purple` 을 사용하는 10px 점선 {{cssxref("border-bottom")}} 을 제목으로 지정하십시오.
3. h2 제목을 기울임 꼴로 만듭니다.
4. 연락처 세부 정보에 사용된 `ul` 에 {{cssxref("background-color")}} 를 `#eeeeee` 및 5px 의 단색 자주색 {{cssxref("border")}} 으로 만듭니다. {{cssxref("padding")}} 을 사용하여 콘텐츠를 테두리에서 밀어냅니다.
5. 마우스를 가리키면 `green` 으로 만듭니다.

이 이미지와 비슷한 결과가 나옵니다.

![Screenshot of how the example should look after completing the assessment.](learn-css-basics-assessment.png)

그런 다음 [MDN CSS 참조](/ko/docs/Web/CSS/Reference) 에서 이 페이지에 언급되지 않은 일부 속성을 찾아보고 시도해 보십시오!

여기에 오답이 없다는 것을 기억하십시오 — 이 단계의 학습에서는 약간의 즐거움을 가질 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## 평가 또는 추가 도움

작업을 평가하고 싶거나 작업이 정체되어 도움을 요청하려는 경우:

1. 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) 또는 [Glitch](https://glitch.com/) 와 같은 온라인 공유 가능 편집기에 입력합니다.
2. [MDN 토론 포럼 학습 카데고리](https://discourse.mozilla.org/c/mdn/learn) 에 평가 및 도움을 요청하는 게시물을 작성 하십시오. 게시물에는 다음이 포함되어야 합니다:

   - "CSS 첫 단계에 대한 평가가 필요했습니다" 와 같은 설명적인 제목입니다.
   - 당신이 이미 시도한 내용 및 당신이 우리가 무엇을 하기를 원하는지에 대한 세부 사항 입니다. 예: 당신이 정체되어 있고 도움이 필요하거나 평가를 원하는지에 대한 세부사항들.
   - 온라인 공유 가능 편집기 (위의 1 단계에서 언급한) 에서 평가하거나 도움이 필요한 예에 대한 링크입니다. 이것은 좋은 습관입니다 — 코드가 보이지 않으면 코딩에 문제가 있는 사람을 돕는 것이 매우 어렵습니다.
   - 실제 작업 또는 평가 페이지에 대한 링크로 도움이 필요한 질문을 찾을 수 있습니다.

## 다음은 뭐죠?

첫 번째 강의를 완료한 것을 축하합니다. 이제 CSS 에 대해 잘 이해하고 스타일 시트에서 발생하는 많은 부분을 이해할 수 있어야 합니다. 다음 강의인 [CSS building blocks](/ko/docs/Learn/CSS/Building_blocks) 에서는 여러 가지 주요 영역을 자세히 살펴보겠습니다.

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
