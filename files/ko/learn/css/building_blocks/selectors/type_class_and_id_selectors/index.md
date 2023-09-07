---
title: Type, class, and ID selectors
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

이 단원에서는, 일을 하면서 가장 자주 사용하게 될 가장 간단한 선택자 중 일부를 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >설치된 기본 소프트웨어</a
        >,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >에 대한 기본 지식, HTML 기초 (
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >를 공부하세요), CSS 작동 방식에 대한 아이디어 (
        <a href="/ko/docs/Learn/CSS/First_steps">CSS 첫 단계</a>를 공부하세요)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        문서에 CSS를 적용하는 데 사용할 수 있는 다양한 CSS 선택자에 대해 알아봅시다.
      </td>
    </tr>
  </tbody>
</table>

## 유형 선택자

**유형 선택자**는 문서에서 HTML 태그/요소를 선택하기 때문에 태그 이름 선택자 또는 요소 선택자라고도 합니다. 아래 예에서는, `span`, `em` 및 `strong` 선택자를 사용했습니다.

**CSS 규칙을 추가하여 `<h1>` 요소를 선택하고 색상을 파란색으로 변경해보세요**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## 범용 선택자

범용 선택기는 별표(`*`)로 표시됩니다. 문서의 모든 항목을 선택합니다(또는 다른 요소 및 하위 연결자와 함께 연결된 경우 상위 요소 내부). 다음 예제에서는 범용 선택기를 사용하여 모든 요소의 여백을 제거합니다. 브라우저에서 추가한 기본 스타일이 제목과 단락의 간격을 두는 것과 반면, 모든 것이 서로 가깝습니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

이러한 종류의 동작은 모든 브라우저 스타일을 제거하는 "스타일시트 재설정"에서 가끔 볼 수 있습니다. 범용 선택기는 전역 변경을 수행하므로 아래 설명된 것과 같은 매우 특정한 상황에 사용합니다.

### 범용 선택자를 사용하여 선택자를 더 쉽게 읽을 수 있도록 만들기

범용 선택자의 한 가지 용도는 선택자를 더 읽기 쉽게 만들고 수행하는 작업의 측면에서 더 명확하게 만드는 것입니다. 예를 들어, 직계 자식을 포함하여 부모의 첫 번째 자식인 `<article>` 요소의 자손 요소를 선택하고 굵게 표시하려면, {{cssxref(":first-child")}} 의사 클래스를 사용할 수 있습니다. 이것에 대해서는 `<article>` 요소 선택자와 함께 하위 선택자로 [의사 클래스와 의사 요소](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)에 대한 강의에서 자세히 알아볼 것입니다.

```css
article :first-child {
  font-weight: bold;
}
```

그러나, 이 선택자는 다른 요소의 첫 번째 자식인 `<article>` 요소를 선택하는 `article:first-child`와 혼동될 수 있습니다.

이러한 혼란을 피하기 위해 `:first-child` 의사 클래스에 범용 선택자를 추가할 수 있으므로 선택자가 수행하는 작업이 더 명확해집니다. `<article>` 요소의 첫 번째 자식인 어떤 요소 또는 `<article>`의 모든 하위 요소의 첫 번째 자식인 어떤 요소를 선택합니다.

```css
article *:first-child {
  font-weight: bold;
}
```

둘 다 동일한 작업을 수행하지만, 가독성이 크게 향상되었습니다.

## 클래스 선택자

클래스 선택자는 점(`.`) 문자로 시작합니다. 해당 클래스가 적용된 문서의 모든 항목이 선택됩니다. 아래 라이브 예제에서 우리는 `highlight`라는 클래스를 만들고 내 문서의 여러 위치에 적용했습니다. 클래스가 적용된 모든 요소가 강조 표시됩니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### 특정 요소에 대한 타켓팅 클래스

클래스가 적용된 특정 요소를 대상으로 하는 선택자를 만들 수 있습니다. 다음 예에서는, `highlight` 클래스가 있는 `<h1>` 제목과 다르게 `highlight` 클래스가 있는 `<span>`을 강조 표시합니다. 대상으로 지정하려는 요소의 유형 선택자를 사용하고, 사이에 공백 없이 점을 사용하여 추가된 클래스를 사용하여 이 작업을 수행합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

이 접근 방식은 규칙의 범위를 줄입니다. 규칙은 특정 요소와 클래스 조합에만 적용됩니다. 규칙을 다른 요소에도 적용해야 한다고 결정한 경우 다른 선택자를 추가해야 합니다.

### 하나 이상의 클래스가 적용된 경우 요소를 대상으로 지정

요소에 여러 클래스를 적용하고 개별적으로 대상을 지정하거나 선택자의 모든 클래스가 있는 경우에만 요소를 선택할 수 있습니다. 이는 사이트에서 다양한 방식으로 결합할 수 있는 컴포넌트를 구축할 때 유용할 수 있습니다.

아래 예시에는, 메모가 포함된 `<div>`가 있습니다. 상자에 `notebox` 클래스가 있는 경우 회색 테두리가 적용됩니다. `warning` 또는 `danger` 클래스도 있는 경우 {{cssxref("border-color")}}를 변경합니다.

우리는 요소 사이에 공백 없이 함께 연결하여 적용된 두 개의 클래스가 있는 경우에만 요소를 일치시키길 원한다고 브라우저에 알릴 수 있습니다. 마지막 `<div>`에는 `danger`클래스만 있기 때문에 스타일이 적용되지 않는 것을 볼 수 있습니다. 무엇이든 적용하려면 `notebox`도 필요합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID 선택자

ID 선택자는 점 문자가 아닌 `#`으로 시작하지만, 클래스 선택자와 동일한 방식으로 사용됩니다. 그러나 ID는 페이지 당 한 번만 사용할 수 있으며, 요소에는 하나의 `id`값만 적용할 수 있습니다. `id`가 설정된 요소를 선택할 수 있으며, 요소와 ID가 모두 일치하는 경우에만 요소를 대상으로 하는 유형 선택자를 ID 앞에 둘 수 있습니다. 다음 예에서 이 두 가지 용도를 모두 볼 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> **경고:** 문서에서 동일한 ID를 여러 번 사용하면 스타일을 지정하기 위해 작동하는 것처럼 보일 수 있지만, 이렇게 하지 마십시오. 이로 인해 잘못된 코드가 생성되고 여러 곳에서 이상한 동작이 발생합니다.
>
> **참고:** 특이성 강의에서 배웠듯이, ID는 특이성이 높습니다. 대부분의 다른 선택자를 무시합니다. 대부분의 경우 ID 대신 요소에 클래스를 추가하는 것이 좋습니다. 그러나 ID를 사용하는 것이 요소를 대상으로 지정하는 유일한 방법인 경우 - 아마도 마크업에 대한 액세스 권한이 없고 편집할 수 없기 때문에 - 이 방법이 작동합니다.

## 요약

유형, 클래스 및 ID 선택자를 마무리합니다. 계속해서 [속성 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)를 살펴봄으로써 선택자를 자세히 탐구해봅시다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
