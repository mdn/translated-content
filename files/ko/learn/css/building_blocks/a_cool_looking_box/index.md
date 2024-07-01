---
title: 멋지게 보이는 박스
slug: Learn/CSS/Building_blocks/A_cool_looking_box
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}

이 평가에서는, 눈길을 사로잡는 박스를 만들어보면서 멋지게 보이는 박스를 만드는 것을 더 많이 연습하게 될 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식</th>
      <td>
        이 평가에 앞서 이 모듈의 모든 문서를 이미 작업해 보셨어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>
       CSS 박스 모델과 테두리 및 배경과 같은 다른 박스 관련 기능에 대한 이해를 테스트합니다.
      </td>
    </tr>
  </tbody>
</table>

## 시작점

이 평가를 시작하려면, 다음을 수행해야 합니다.

- [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/index.html) 와 [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/style.css) 의 시작 로컬 복사본을 만듭니다. — 그것들을 `index.html` 과 `style.css` 로 새로운 디렉토리에 저장합니다.

또는 [JSBin](https://jsbin.com/) 이나 [Glitch](https://glitch.com/)와 같은 사이트를 이용하여 평가를 수행할 수 있습니다. 이러한 온라인 편집기 중 하나에 HTML을 붙여넣고 CSS를 채워넣을 수 있습니다. 사용하는 온라인 편집기에 별도의 CSS 패널이 없는 경우 문서의 `<style>` 요소에 넣어도 괜찮습니다.

> **참고** 곤란에 빠지면, 도움을 요청하세요 — 이 페이지 맨 아래에 있는 [Assessment or further help](#assessment_or_further_help) 섹션을 참조하세요 .

## 프로젝트 요약

작업 내용은 멋지고 화려한 박스를 만들고 CSS로 어떤 재미를 즐길 수 있는지 살펴보는 것입니다.

### 전반적인 과제

- CSS를 HTML에 적용합니다.

### 박스 스타일

주어진 {{htmlelement("div")}}를 다음과 같이 스타일링해보세요.

- 큰 박스에 적합한 너비(예: 약 200픽셀).
- 큰 박스에 적합한 높이, 텍스트를 수직으로 가운데 정렬합니다.
- 박스를 수평으로 가운데 정렬합니다.
- 박스스 내부의 텍스트를 가운데로 정렬합니다.
- 상대적인 크기를 사용하여 약 17-18픽셀의 폰트 크기를 약간 키웁니다. rem 단위를 사용하세요. 값을 어떻게 계산했는지에 대한 설명을 적어보세요.
- 디자인에 기본 색상을 지정합니다. 박스에 이 색상을 배경색으로 지정하세요.
- 텍스트에 대비되는 색상과 검은색 텍스트 그림자를 지정하세요.
- 약간 미묘한 경계 반경을 지정하세요.
- 비슷한 베이스 색상을 가진 1픽셀 두께의 실선 테두리를 지정하세요. 단, 살짝 더 어두운 색상으로 지정하세요.
- 하단 오른쪽 모서리 방향으로 선형 반투명 검은색 그라데이션을 지정하세요. 시작 시 완전히 투명하고 30% 지점까지 약 0.2의 불투명도로 점진적으로 증가하다가 끝까지 같은 색상을 유지합니다.
- 여러 개의 박스 그림자를 지정하세요. 페이지에서 박스가 약간 들어온 듯한 효과를 주기 위해 하나의 표준 박스 그림자를 지정하세요. 나머지 두 개는 상단 왼쪽 근처에 반투명 흰색 그림자와 하단 오른쪽 근처에 반투명 검은색 그림자를 지정하세요. 이러한 그림자들이 박스스에 멋진 듯한 3D 효과를 더해줄 것입니다.

## 도움말

- CSS에서 실수를 잡고 수정하는 데 [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)를 사용하세요.

## 예제

다음 스크린샷은 완성된 디자인 예시를 보여줍니다.

![A big red box with rounded corners. White text with drop shadow reads 'this is a cool box'.](fancy-box2.png)

## 평가 또는 추가 도움말

작업 내용을 평가 받거나 도움이 필요한 경우

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/)와 같은 온라인 공유가능한 편집기에 작업 내용을 넣어주세요.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn/250)에서 평가 또는 도움 요청용 게시물을 작성하세요. 게시물에는 다음과 같은 내용이 포함되어야 합니다.

   - "멋지게 보이는 박스"와 같이 설명적인 제목.
   - 이미 시도한 내용과 원하는 도움이나 평가에 대한 세부 정보. 예를 들어, 도움이 필요하거나 평가를 원하는 상황을 설명하세요.
   - 온라인 공유 가능한 편집기(위의 단계 1에서 언급한 사이트)에 작업 내용을 공유하는 링크. 다른 사람의 코드를 보지 못하면 코딩 문제를 도와드리기 어려울 수 있으므로 이 점을 유의하세요.
   - 도움이 필요한 작업 또는 평가 페이지에 대한 링크

{{PreviousMenu("Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper", "Learn/CSS/Building_blocks")}}
