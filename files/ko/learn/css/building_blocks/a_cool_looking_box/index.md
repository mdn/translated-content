---
title: 멋진 박스를 만들어보자
slug: Learn/CSS/Building_blocks/A_cool_looking_box
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

이 평가에선, 시선을 사로잡는 상자를 만들려고 노력함으로써, 멋진 상자를 만드는 연습을 하게 됩니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        이 평가를 시작하기 전에 이 부분에 있는 모든 문서를 확인해야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        CSS 상자 모델 및 테두리 및 배경과 같은 기타 상자 관련 기능에 대한 이해도를 테스트하고자 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 출발점

이 평가를 시작하기 위해선, 다음을 수행해야 합니다.

- 미리 준비된 [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/index.html) 및 [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/style.css)의 로컬 복사본을 만들어줍니다(새로운 디렉토리에 `index.html` 및 `style.css`로 저장합니다).

또는, [JSBin](https://jsbin.com/) 또는 [Glitch](https://glitch.com/)와 같은 사이트를 사용하여 평가를 할 수도 있습니다. HTML을 붙여넣고 CSS를 이런 온라인 편집기들 중 하나에 채울 수 있습니다. 사용 중인 온라인 편집기에 별도의 CSS 공간이 없는 경우, 문서 머리 부분에 `<style>` 요소에 자유롭게 배치하세요.

> **참고:** 막히면 도움을 요청하세요. 이 페이지 하단의 [Assessment or further help](#assessment_or_further_help) 부분을 참조하세요.

## 프로젝트 개요

당신이 해야할 일은 멋진 상자를 만들고 CSS로 할 수 있는 재미를 탐구하는 것입니다.

### 일반적인 작업

- HTML에 CSS를 적용합니다.

### 상자 스타일링

제공된 {{htmlelement("div")}}의 스타일을 다음과 같이 설정하세요.

- 큰 상자에 적당한 너비는, 약 200px입니다.
- 큰 상자에 적당한 높이는, 텍스트를 세로로 중앙에 배치합니다.
- 상자를 수평으로 중앙에 둡니다.
- 상자 안의 텍스트를 중앙에 맞춥니다.
- 약 17~18px의 계산된 스타일로 글꼴 크기가 약간 증가했습니다. rem을 사용하세요. 값을 계산하는 방법에 대해 의견을 제시해주세요.
- 디자인의 기본 색상입니다. 상자에 이 색상을 배경색으로 지정합니다.
- 텍스트와 대비되는 색상과 검은색 텍스트 그림자입니다.
- 상당히 미묘한 경계선 반경입니다.
- 기본 색상과 비슷하지만, 약간 어두운 1px 실선 테두리입니다.
- 오른쪽 하단 모서리를 향해 가는 선형 반투명 검정 그라데이션을 적용합니다. 처음에는 완전히 투명하게 만들고, 30% 정도 불투명도를 약 0.2로 증가시키고, 끝까지 같은 색상을 유지합니다.
- 상자에 여러 그림자를 적용합니다. 상자가 페이지에서 약간 올라온 것처럼 보이도록 하나의 표준 상자 그림자를 제공합니다. 다른 두 개는 삽입된 상자 그림자(왼쪽 상단 근처의 반투명 흰색 그림자와 오른쪽 하단 근처의 반투명 검은 그림자)로 상자에 멋진 3D 모양을 추가해야 합니다.

## 힌트와 도움

- [W3C CSS 유효성 검사기](https://jigsaw.w3.org/css-validator/)를 사용해, CSS의 실수를 찾아 수정합니다.

## 예시

다음 스크린샷은 완성된 디자인의 예를 보여줍니다.

!['이것은 멋진 상자입니다'라는 텍스트를 가지고, 그림자가 있으며, 모서리가 둥근 큰 빨간색 상자](fancy-box2.png)

## 평가 또는 추가 도움

작업에 대한 평가를 원하거나 막혀서 도움을 요청하고 싶은 경우.

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/) 또는 [Glitch](https://glitch)와 같은 온라인 공유가 가능한 편집기에 작업물을 올려 둡니다.
2. [MDN Discourse 포럼 학습 카테고리](https://discourse.mozilla.org/c/mdn/learn/250)에 평가 또는 도움을 요청하는 게시물을 작성합니다. 게시물에는 다음이 포함되어야 합니다.

   - "멋진 상자에 대한 평가 구함"과 같은 설명적인 제목.
   - 이미 시도해 본 부분과 해주기를 원하는 것에 대한 세부사항. 예를 들어, 막혀서 도움이 필요하거나 평가가 필요한 경우 알려주세요와 같습니다.
   - 온라인으로 공유가 가능한 편집기(위의 1단계에서 언급한 대로) 평가를 원하거나 도움이 필요한 예제에 대한 링크. 이 방법은 좋은 습관입니다. 코드를 볼 수 없다면, 코드 문제가 있는 사람을 돕기가 매우 어렵습니다.
   - 도움이 필요한 질문을 찾을 수 있도록, 실제 작업 또는 평가 페이지에 대한 링크입니다.

{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
