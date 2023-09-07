---
title: 결합자
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

우리가 살펴볼 최종 선택자는 결합자라고 합니다. 다른 선택자를 서로 유용한 관계와 문서의 콘텐츠 위치를 제공하는 방식으로 결합하기 때문입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >설치된 기본 소프트웨어</a
        >,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >에 대한 기본 지식, HTML 기초 (
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 입문</a
        > 학습), CSS 작동 방식에 대한 아이디어 (
        <a href="/ko/docs/Learn/CSS/First_steps">CSS 첫 번째 단계</a> 학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        CSS에서 사용할 수 있는 다양한 결합자 선택자에 대해 알아봅시다.
      </td>
    </tr>
  </tbody>
</table>

## 후손 결합자

**후손 결합자** - 일반적으로 단일 공백(" ") 문자로 표시됩니다 - 첫 번째 선택자와 일치하는 조상(부모, 부모의 부모, 부모의 부모의 부모 등) 요소가 있는 경우 두 번째 선택자와 일치하는 요소가 선택되도록 두 선택자를 결합합니다. 후손 결합자를 활용하는 선택자를 하위 선택자라고 합니다.

```css
body article p
```

아래 예에서는, `.box` 클래스가 있는 요소 내부에 있는 `<p>` 요소만 일치시킵니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## 자식 결합자

**자식 결합자**(`>`)는 두 CSS 선택자 사이에 배치됩니다. 첫 번째와 일치하는 요소의 직계 자식인 두 번째 선택자와 일치하는 요소만 일치합니다. 계층 구조에서 더 아래에 있는 하위 요소는 일치하지 않습니다. 예를 들어, `<article>` 요소의 직계 자식인 `<p>` 요소만 선택하려면 다음을 수행하세요.

```css
article > p
```

다음 예제에는, 정렬되지 않은 목록이 있으며, 내부에 정렬된 목록이 중첩되어 있습니다. 자식 결합자는 `<ul>`의 직계 자식인 `<li>` 요소만 선택하고 위쪽 테두리로 스타일을 지정합니다.

이것을 자식 결합자로 지정하는 `>`를 제거하면, 후손 선택자가 되고 모든 `<li>` 요소는 빨간색 테두리를 갖게 됩니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## 인접 형제 결합자

인접한 형제 선택자 (`+`)는 두 CSS 선택자 사이에 배치됩니다. 첫 번째 선택자의 다음 형제 요소인 두 번째 선택자와 일치하는 요소만 일치합니다. 예를 들어, `<p>` 요소 바로 앞에 있는 모든 `<img>` 요소를 선택하려면 다음을 수행하세요.

```css
p + img
```

일반적인 사용 사례는 아래 예와 같이 제목 뒤에 오는 단락으로 작업을 수행하는 것입니다. 이 예에서, 우리는 부모 요소를 `<h1>`과 공유하고 `<h1>` 바로 다음에 오는 모든 단락을 찾고 있습니다.

`<h1>`과 `<p>` 사이에 `<h2>`와 같은 다른 요소를 삽입하면 단락이 더 이상 선택기와 일치하지 않으므로 요소가 인접할 때 적용되는 배경 및 전경색을 얻지 못합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## 일반 형제 결합자

요소의 형제 요소가 바로 인접하지 않더라도 선택하려면 일반 형제 연결자(`~`)를 사용할 수 있습니다. `<p>` 요소 다음에 오는 모든 `<img>` 요소를 선택하려면 다음을 수행합니다.

```css
p ~ img
```

아래 예에서는 `<h1>` 뒤에 오는 모든 `<p>` 요소를 선택하고 있으며 문서에도 `<div>`가 있지만 그 뒤에 오는 `<p>`가 선택됩니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## 결합자 사용

문서의 일부를 선택하기 위해 이전 수업에서 배운 선택자를 연결자와 결합할 수 있습니다. 예를 들어 `<ul>`의 직계 자식인 "a" 클래스가 있는 목록 항목을 선택하려면, 다음을 시도하세요.

```css
ul > li[class="a"] {
}
```

그러나, 문서의 특정 부분을 선택하는 큰 선택자 목록을 만들 때는 주의하세요. 마크업에서 해당 요소의 위치에 매우 특정한 선택자를 만들었기 때문에 CSS 규칙을 재사용하기 어려울 것입니다.

간단한 클래스를 만들고 해당 요소에 적용하는 것이 더 나은 경우가 많습니다. 즉, 결합자에 대한 지식은 문서에서 스타일을 지정해야 하고 HTML이 {{Glossary("CMS")}}에 의해 생성되기 때문에 HTML에 액세스할 수 없는 경우 매우 유용할 것입니다.

## 능력을 시험해보세요

이 기사의 끝에 도달했지만, 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하고 있는지 확인하는 추가 테스트를 찾을 수 있습니다. - [Test your skills: Selectors](/ko/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks)를 참조하세요.

## 요약

이 부분은 선택자에 대한 강의 마지막 세션입니다. 다음으로 CSS의 또 다른 중요한 부분인 [cascade, specificity, and inheritance](/ko/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)으로 이동합니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}
