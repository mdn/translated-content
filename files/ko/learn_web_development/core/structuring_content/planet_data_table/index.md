---
title: 행성 데이터 구조화
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
original_slug: Learn/HTML/Tables/Structuring_planet_data
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

테이블 평가에서 우리는 태양계의 행성에 대한 일부 데이터를 제공하고, 이를 HTML 테이블로 구조화하도록 요청합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 요구 사항:</th>
      <td>
        이 평가를 시도하기 전에 이 모듈의 모든 문서를 이미 읽어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>HTML 테이블 및 관련 기능에 대한 이해를 테스트합니다.</td>
    </tr>
  </tbody>
</table>

## 시작점

평가를 시작하려면 [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css), [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt)의 로컬 복사본을 새 디렉토리에 만듭니다.

또는 [JSBin](https://jsbin.com/) 또는 [Glitch](https://glitch.com/)와 같은 사이트를 사용하여 HTML, CSS 및 JavaScript를 붙여넣어 평가를 수행할 수 있습니다. 별도의 JavaScript/CSS 패널이 없는 온라인 편집기를 사용하는 경우, HTML 문서 내에 인라인 `<script>` 또는 `<style>` 요소로 넣을 수 있습니다.

> [!NOTE]
> 궁금한 점이 있거나 도움이 필요하면 문의하세요. 이 페이지 하단의 [평가 또는 추가 도움](#평가_또는_추가_도움) 섹션을 참조하세요.

## 프로젝트 개요

당신은 학교에서 일하고 있습니다. 현재 학생들은 태양계의 행성을 공부하고 있으며, 행성에 대한 사실과 숫자를 쉽게 찾을 수 있는 데이터 세트를 제공하려고 합니다. 이 경우에는 HTML 데이터 테이블이 좋습니다. 사용 가능한 원시 데이터를 가져와서 아래의 단계를 따라 테이블로 변환해야 합니다.

### 완료해야 할 단계

다음 단계는 테이블 예제를 완료하기 위해 수행해야 할 작업을 설명합니다. 필요한 모든 데이터는 `planets-data.txt` 파일에 포함되어 있습니다. 데이터를 시각화하는 데 어려움이 있다면 아래의 실시간 예제를 참조하거나 다이어그램을 그려보십시오.

1. `blank-template.html`의 복사본을 열고, 외부 컨테이너, 테이블 헤더, 테이블 바디로 테이블을 시작합니다. 이 예제에는 테이블 푸터가 필요하지 않습니다.
2. 제공된 캡션을 테이블에 추가합니다.
3. 모든 열 헤더를 포함하는 행을 테이블 헤더에 추가합니다.
4. 모든 행 헤더를 의미론적으로 제목으로 만들어야 함을 기억하면서 테이블 바디 내에 모든 콘텐츠 행을 생성합니다.
5. 모든 콘텐츠가 관련 행성 옆에 표시된 원시 데이터와 동일한 셀에 배치되도록 합니다.
6. 행 및 열 헤더를 그들이 헤딩으로 작동하는 행, 열 또는 행 그룹과 명확하게 연결하기 위해 속성을 추가합니다.
7. 모든 행성 이름 행 헤더를 포함하는 열 주위에 검은색 [테두리](/ko/docs/Web/CSS/Reference/Properties/border)를 추가합니다.

## 힌트와 팁

- 헤더 행의 첫 번째 셀은 비워 두어야 하며 두 열을 병합해야 합니다.
- 행성 이름 행 헤더(예: Saturn) 옆에 있는 그룹 행 헤더(예: Jovian planets)는 조금 까다롭습니다 — 각 항목이 올바른 수의 행과 열에 걸쳐 있는지 확인해야 합니다.
- 헤더를 행/열과 연결하는 한 가지 방법은 다른 방법보다 훨씬 쉽습니다.

## 예제

완성된 테이블은 다음과 같아야 합니다.

![복잡한 테이블에는 위에 캡션이 있습니다. 상단 행 셀은 열 헤더입니다. 헤더의 세 열이 있습니다. 첫 두 열은 병합된 셀을 가지며, 세 번째 열은 각 행에 대한 개별 헤더입니다. 모든 텍스트는 가운데 정렬됩니다. 헤더와 다른 모든 행에는 약간의 배경색이 있습니다.](assessment-table.png)

또한 [여기에서 실시간 예제를 확인](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html)할 수 있습니다(소스 코드를 보지 마세요 — 속임수를 쓰지 마세요!)

## 평가 또는 추가 도움

작업을 평가받고 싶거나 궁금한 점이 있거나 도움이 필요하면,

1. [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/)와 같은 온라인 공유 편집기에 작업을 넣습니다.
2. [MDN Discourse 포럼 학습 카테고리](https://discourse.mozilla.org/c/mdn/learn/250)에서 평가 및/또는 도움을 요청하는 게시물을 작성합니다. 게시물에는 다음이 포함되어야 합니다.
   - "행성 데이터 구조화에 대한 평가 원함"과 같은 설명적인 제목
   - 이미 시도한 것의 세부 사항과 우리에게 원하는 것; 예를 들어, 궁금한 점이 있거나 도움이 필요하거나 평가를 원한다고 알려주세요.
   - 평가하거나 도움이 필요한 예제의 링크를 온라인 공유 편집기에 제공합니다(위의 1단계에서 언급한 대로). 이것은 좋은 습관입니다 — 코드를 볼 수 없다면 코딩 문제에 도움을 주기가 매우 어렵습니다.
   - 도움을 원하는 질문이나 평가 페이지의 링크를 제공하여 해당 질문을 찾을 수 있도록 합니다.

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
