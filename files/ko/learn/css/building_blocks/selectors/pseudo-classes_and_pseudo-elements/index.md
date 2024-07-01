---
title: 의사 클래스와 의사 요소
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

다음으로 살펴볼 선택자의 종류는 **의사 클래스** 및 **의사 요소**라고 합니다. 여러 개가 있으며, 종종 매우 특정한 목적을 위해 사용됩니다. 사용 방법을 알게 되면 목록을 보고 달성하려는 작업에 적합한 것이 있는지 확인할 수 있습니다. 다시 한 번 각 선택자에 대한 관련 MDN 페이지는 브라우저 지원을 설명하는 데 도움이 됩니다.

<table>
  <tbody>
    <tr>
      <th scope="row">전제 조건:</th>
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
          >HTML 입문</a
        > 학습), CSS 작동 방식에 대한 아이디어 (
        <a href="/ko/docs/Learn/CSS/First_steps">CSS 첫 번째 단계</a> 학습).
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>의사 클래스 및 의사 요소 선택자에 대해 알아봅시다.</td>
    </tr>
  </tbody>
</table>

## 의사 클래스란 무엇입니까?

의사 클래스는 특정 상태에 있는 요소를 선택하는 선택자입니다. 해당 유형의 첫 번째 요소이거나 마우스 포인터로 가리키고 있습니다. 그들은 마치 문서의 일부에 클래스를 적용한 것처럼 행동하는 경향이 있으며, 종종 마크업에서 과도한 클래스를 줄이는 데 도움이 되고, 더 유연하고 유지관리 가능한 코드를 만들어 줄 수 있습니다.

의사 클래스는 콜론으로 시작하는 키워드입니다. 예를 들어, `:hover`는 의사 클래스입니다.

### 간단한 의사-클래스 예

간단한 예를 살펴보겠습니다. 기사의 첫 번째 단락을 더 크고 굵게 만들고 싶다면 아래 첫 번째 예와 같이 해당 단락에 클래스를 추가한 다음 해당 클래스에 CSS를 추가할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

그러나, 이 방법은 유지하기가 귀찮을 수 있습니다 - 문서 상단에 새 단락이 추가되면 어떻게 될까요? 클래스를 새 단락으로 이동해야 합니다. 클래스를 추가하는 대신 {{cssxref(":first-child")}} 의사 클래스 선택자를 사용할 수 있습니다 - 이것은 _항상_ 문서의 첫 번째 하위 요소를 대상으로 하며 더 이상 HTML을 편집할 필요가 없습니다(어쨌든 CMS에서 생성되기 때문에 항상 가능한 것은 아닙니다).

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

모든 의사 클래스는 이와 같은 방식으로 작동합니다. HTML에 클래스를 추가한 것처럼 동작하여 특정 상태에 있는 문서의 일부를 대상으로 합니다. MDN의 다른 예를 살펴보십시오.

- [`:last-child`](/ko/docs/Web/CSS/:last-child)
- [`:only-child`](/ko/docs/Web/CSS/:only-child)
- [`:invalid`](/ko/docs/Web/CSS/:invalid)

> **참고:** 앞에 요소 선택자가 없는 의사 클래스와 요소를 작성하는 것은 유효합니다. 위의 예에서 `:first-child`를 작성할 수 있으며 규칙은 단락 첫 번째 자식이 아니라(`:first-child`는 `*:first-child`와 동일합니다), `<article>` 요소의 첫 번째 자식인 _any_ 요소에 적용됩니다. 그러나 일반적으로 그보다 더 많은 제어를 원하므로, 더 구체적이어야 합니다.

### 사용자-행동 유사 클래스

일부 의사 클래스는 사용자가 어떤 방식으로든 문서와 상호 작용할 때만 적용됩니다. **동적 의사 클래스**라고도 하는 이러한 **사용자 행동** 의사 클래스는 사용자가 요소와 상호 작용할 때 클래스가 요소에 추가된 것처럼 작동합니다. 예를 들면, 다음과 같습니다.

- [`:hover`](/ko/docs/Web/CSS/:hover) — mentioned above; this only applies if the user moves their pointer over an element, typically a link.
- [`:focus`](/ko/docs/Web/CSS/:focus) — only applies if the user focuses the element by clicking or using keyboard controls.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## 의사-요소란 무엇인가요?

의사 요소는 유사한 방식으로 동작합니다. 그러나 기존 요소에 클래스를 적용하는 것이 아니라 완전히 새로운 HTML 요소를 마크업에 추가한 것처럼 작동합니다.

의사 요소는 이중 콜론 `::`으로 시작합니다. `::before`는 의사 요소의 예입니다.

> **참고:** 일부 초기 의사 요소는 단일 콜론 구문을 사용했기 때문에 코드나 예제에서 이를 볼 수 있습니다. 최신 브라우저는 이전 버전과의 호환성을 위해 단일 또는 이중 콜론 구문으로 초기 의사 요소를 지원합니다.

예를 들아, 단락의 첫 줄을 선택하려면 `<span>` 요소로 감싸고 요소 선택자를 사용할 수 있습니다. 그러나 래핑한 단어 수가 부모 요소의 너비보다 길거나 짧으면 실패합니다. 한 줄에 얼마나 많은 단어가 들어갈지 모르는 경향이 있고 - 화면 너비나 글꼴 크기가 변경되면 변경되고 - HTML을 추가하여 이를 강력하게 수행하는 것은 불가능합니다.

`::first-line` 의사 요소 선택자는 이 작업을 안정적으로 수행합니다. - 단어 수가 증가하거나 감소하더라도 여전히 첫 번째 행만 선택합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

마치 `<span>`이 첫 번째 서식이 지정된 줄을 마법처럼 감싸고 줄 길이가 변경될 때마다 업데이트되는 것처럼 작동합니다.

You can see that this selects the first line of both paragraphs.
이렇게 하면 두 단락의 첫 번째 줄이 선택되는 것을 볼 수 있습니다.

## 의사 클래스와 의사 요소들의 혼합

첫 번째 단락의 첫 줄을 굵게 만들고 싶다면 `:first-child` 및 `::first-line` 선택자를 함께 연결할 수 있습니다. 다음 CSS를 사용하도록 이전 라이브 예제를 편집해 보세요. `<article>` 요소 안에 있는 첫 번째 `<p>` 요소의 첫 번째 줄을 선택하려고 합니다.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## ::before 및 ::after로 콘텐츠 생성

CSS를 사용하여 문서에 콘텐츠를 삽입하기 위해 [`content`](/ko/docs/Web/CSS/content) 속성과 함께 사용되는 몇 가지 특수 의사 요소가 있습니다.

이를 사용하여 아래의 실제 예와 같이 텍스트 문자열을 삽입할 수 있습니다. {{cssxref("content")}} 속성의 텍스트 값을 변경해고 출력에서 변경되는 것을 확인해보세요. 또한 `::before` 의사 요소를 `::after`로 변경하고 요소의 시작 부분 대신 끝에 삽입된 텍스트를 볼 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

CSS에서 텍스트 문자열을 삽입하는 것은 실제로 웹에서 매우 자주 수행하는 작업이 아닙니다. 해당 텍스트는 일부 스크린 리더에서 액세스할 수 없고 나중에 다른 사람이 찾아서 편집하기 어려울 수 있기 때문입니다.

이러한 의사 요소를 보다 효과적으로 사용하는 방법은 아이콘을 삽입하는 것입니다. 예를 들어 아래 예에 추가된 작은 화살표는 스크린 리더에서 읽지 않기를 바라는 시각적 표시기입니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

이러한 의사 요소는 빈 문자열을 삽입하는 데 자주 사용되며, 그런 다음 페이지의 모든 요소처럼 스타일을 지정할 수 있습니다.

다음 예제에서는, `::before` 의사 요소를 사용하여 빈 문자열을 추가했습니다. 너비와 높이로 스타일을 지정할 수 있도록 이것을 `display: block`으로 설정했습니다. 그런 다음 CSS를 사용하여 다른 요소처럼 스타일을 지정합니다. CSS를 가지고 놀면서 모양과 작동 방식을 변경할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

`content` 속성과 함께 `::before` 및 `::after` 의사 요소를 사용하는 것을 CSS에서는 "생성된 콘텐츠"라고 하며, 이 기술이 다양한 작업에 사용되는 것을 자주 볼 수 있습니다. 좋은 예는 CSS로 화살표를 생성하는 데 도움이 되는 [CSS Arrow Please](https://cssarrowplease.com/) 사이트입니다. 화살표를 만들 때 CSS를 보면 {{cssxref("::before")}} 및 {{cssxref("::after")}} 의사 요소가 사용 중인 것을 볼 수 있습니다. 이러한 선택자를 볼 때마다 {{cssxref("content")}} 속성을 살펴보고 HTML 요소에 추가되는 항목을 확인하세요.

## 요약

이 기사에서는 특별한 유형의 선택자인 CSS 의사 클래스와 의사 요소를 소개했습니다.

의사 클래스를 사용하면 해당 상태에 대한 클래스를 DOM에 추가한 것처럼 특정 상태에 있는 요소를 대상으로 지정할 수 있습니다. 의사 요소는 DOM에 완전히 새로운 요소를 추가한 것처럼 작동하며 스타일을 지정할 수 있습니다. `::before` 및 `::after` 의사 요소를 사용하면 CSS를 사용하여 문서에 콘텐츠를 삽입할 수 있습니다.

다음 글에서는 [combinators](/ko/docs/Learn/CSS/Building_blocks/Selectors/Combinators)에 대해 알아보겠습니다.

## See also

- [Pseudo-classes reference](/ko/docs/Web/CSS/Pseudo-classes)
- [Pseudo-elements reference](/ko/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
