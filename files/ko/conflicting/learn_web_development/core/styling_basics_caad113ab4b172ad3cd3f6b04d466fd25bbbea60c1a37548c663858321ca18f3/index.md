---
title: 멋진 편지지 양식 만들기
slug: conflicting/Learn_web_development/Core/Styling_basics_caad113ab4b172ad3cd3f6b04d466fd25bbbea60c1a37548c663858321ca18f3
original_slug: Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}

좋은 인상을 남기고 싶다면, 멋진 편지지 양식에 편지를 쓰는 것이 좋은 시작이 될 수 있습니다. 이번 평가에서는 좋은 느낌을 줄 수 있는 온라인 템플릿을 만들어 보도록 하겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
      <td>
        이 평가를 시도하기 전에 이 과정의 모든 문서를 살펴봐야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        CSS 박스 모델 및 배경 구현과 같은 기타 박스 관련 기능에 대한 이해도를 테스트합니다.
      </td>
    </tr>
  </tbody>
</table>

## 시작 지점

이 평가를 시작하려면 다음과 같이 해야 합니다.

- [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/index.html)과 [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/letterheaded-paper-start/style.css)의 복사본을 만들어 새로운 디렉터리에 `index.html` 및 `style.css`로 각각 저장합니다.
- [상단](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png), [하단](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) 및 [로고](https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/logo.png) 이미지의 복사본을 코드 파일과 동일한 디렉터리에 저장합니다.

또는, [JSBin](https://jsbin.com/)이나 [Glitch](https://glitch.com/)와 같은 사이트를 이용하여 평가를 수행할 수도 있습니다. 이러한 온라인 편집기 중 하나에 HTML을 붙여 넣고 CSS를 채울 수 있습니다. 사용 중인 온라인 편집기에 별도의 CSS 패널이 없는 경우 문서 head의 `<style>`요소에 자유롭게 넣어도 됩니다.

> [!NOTE]
> 만약 문제가 해결되지 않으면, 이 페이지 하단의 [평가 및 추가적인 도움말](#평가_또는_추가적인_도움) 섹션을 참조하여 도움을 요청하세요.

## 프로젝트 개요

편지지 템플릿을 만드는 데 필요한 파일이 제공되었습니다. 파일을 조합하기만 하면 됩니다. 그러기 위해서는 다음과 같이 해야 합니다.

### 편지지의 메인 부분

- HTML에 CSS를 적용합니다.
- 편지지에 배경 선언을 추가합니다.
  - 상단 이미지를 편지지의 상단에 고정합니다.
  - 하단 이미지를 편지지의 하단에 고정합니다.
  - 이전 두 배경의 상단에 반투명 그라데이션을 추가하여 글자에 약간의 질감을 더하세요. 상단과 하단 주변은 약간 어둡게 하고, 중앙의 대부분은 완전히 투명하게 만들어야 합니다.

- 이전 선언을 지원하지 않는 브라우저를 위한 대안으로 편지지의 상단에 상단 이미지에만 추가되는 다른 배경 선언을 추가합니다.
- 편지지에 흰 배경 색을 추가합니다.
- 나머지 색 구성표와 일치하는 색상으로 편지지의 상단과 하단에 1mm의 단색 테두리를 추가합니다.

### 로고 부분

- {{htmlelement("Heading_Elements", "h1")}}에 로고를 배경 이미지로 추가합니다.
- 로고에 필터를 추가하여 미세한 그림자를 만듭니다.
- 이제 필터를 주석 처리하고, 둥근 이미지의 모양을 따르는 다른 방식(브라우저 간 호환성이 약간 더 나은 방식)으로 그림자를 구현합니다.

## 힌트 및 팁

- 선언의 대안 버전을 먼저 배치한 다음, 최신 브라우저에서만 작동하는 버전을 배치하여 구형 브라우저에 대한 대안을 만들 수 있다는 것을 기억하세요. 구형 브라우저는 첫 번째 선언을 적용하고, 두 번째 선언을 무시하는 반면, 최신 브라우저는 첫 번째 선언을 적용한 다음 두 번째 선언으로 재정의합니다.
- 원하는 경우, 평가를 위한 그래픽을 직접 만들어도 됩니다.

## 예시

다음 스크린샷은 완성된 디자인이 어떤 모습일지 보여주는 예시입니다.

![A4 용지 한 장 전체가 왼쪽 상단에 두 개의 삼각형 모양(첫 번째는 녹색, 두 번째는 빨간색, 오른쪽 상단에 진한 빨간색 사다리꼴 모양)으로 구성되어 있습니다. 녹색 삼각형 아래에는 흰색 텍스트(AwesomeCompany)가 있는 녹색 별이 그려진 빨간색 원이 있습니다. 페이지 왼쪽 하단에는 진한 빨간색 사다리꼴 모양이 있고, 그다음에는 빨간색 삼각형 모양과 녹색 삼각형 모양 두 개가 있습니다. 녹색 삼각형 모양 위에는 우편 주소를 표시하는 검은색 텍스트가 있습니다.](letterhead.png)

## 평가 또는 추가적인 도움

작업에 대한 평가를 받고 싶거나 막혀서 도움을 요청하는 경우 아래와 같이 하세요.

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 공유 가능한 온라인 편집기에 작업을 입력합니다.
2. [MDN 담론 포럼 학습 카테고리](https://discourse.mozilla.org/c/mdn/learn/250)에서 평가 및 도움을 요청하는 게시물을 작성합니다. 게시물에는 아래 사항이 포함되어야 합니다.
   - "멋진 편지지 양식 만들기에 대한 평가 요청"과 같은 설명이 포함된 제목을 입력합니다.
   - 이미 시도해 본 부분과, 궁금한 부분에 대한 세부 정보에 대해 포함하세요. 예를 들어, 막히거나 평가를 원하는 부분을 써넣으세요.
   - 평가받거나 도움이 필요한 예제에 대한 온라인 공유 가능 편집기 링크(위 1단계에서 설명한 대로)를 포함하세요. 코드를 볼 수 없다면 코딩 문제가 있는 사람을 도와주기 어렵기 때문에 이 방법을 사용하는 것이 좋습니다.
   - 실제 과제 또는 평가 페이지로 연결되는 링크를 통해 도움을 원하는 문제를 찾을 수 있습니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks/A_cool_looking_box", "Learn/CSS/Building_blocks")}}
