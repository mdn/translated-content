---
title: CSS 선택자
slug: Learn/CSS/Building_blocks/Selectors
original_slug: Learn/CSS/Building_blocks/선택자
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

{{Glossary("CSS")}} 에서, 선택자는 스타일을 지정할 웹 페이지의 {{glossary("HTML")}} 요소를 대상으로 하는 데 사용됩니다. 사용 가능한 다양한 CSS 선택자가 있으며, 스타일을 지정할 요소를 선택할 때 세밀한 정밀도를 허용합니다. 이 기사와 하위 기사에서는 다양한 유형을 자세히 살펴보고 작동 방식을 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및 CSS 작동 방식에 대한 이해 (<a
          href="/en-US/docs/Learn/CSS/First_steps"
          >CSS 첫 단계</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>CSS 선태자 작동 방식에 대해 자세히 알아보기.</td>
    </tr>
  </tbody>
</table>

## 선택자란 무엇인가?

우리는 이미 선택자 (selector) 를 만났습니다. CSS 선택자는 CSS 규칙의 첫 부분입니다. 규칙 내의 CSS 속성값을 적용하기 위해 어떤 HTML 요소를 선택해야 하는지 브라우저에 알려주는 요소 및 기타 용어의 패턴입니다. 선택자에 의해 선택된 요소들은 **선택자의 주제(subject)** 로 지칭됩니다.

![h1이 강조된 코드](selector.png)

이전 기사에서는 몇 가지 다른 선택자를 만났으며 — 예를 들어 `h1` 과 같은 요소 또는 `.special` 과 같은 class 를 선택하는 등 다양한 방법으로 문서를 대상으로 하는 선택자가 있다는 것을 배웠습니다.

CSS 에서, 선택자는 CSS 선택자 사양에 정의되어 있습니다. CSS 의 다른 부분과 마찬가지로 작동하려면, 브라우저에서 지원해야합니다. 당신이 보게 될 대부분의 선택자는 [Level 3 선택자 사양](https://www.w3.org/TR/selectors-3/) 에 정의되어 있으므로, 이러한 선택자에 대한 훌륭한 브라우저 지원을 찾을 수 있습니다.

## 선택자 목록

동일한 CSS 를 사용하는 항목이 두 개 이상인 경우 규칙이 모든 개별 선택자에 적용되도록 개별 선택자를 ***선택자 목록** *으로 결합할 수 있습니다. 예를 들어, `h1` 에 대해 동일한 CSS 와 `special` class 를 사용하면 이것을 두 개의 별도 규칙으로 작성할 수 있습니다.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

또한 이들 사이에 쉼표를 추가하여 선택자 목록으로 결합할 수도 있습니다.

```css
h1, .special {
  color: blue;
}
```

공백은 쉼표 앞뒤에 유효합니다. 각 라인이 새 라인에 있으면 선택자를 더 읽기 쉽습니다.

```css
h1,
.special {
  color: blue;
}
```

아래 라이브 예제에서 동일한 선언을 가진 두 선택자를 결합 하십시오. 시각적 디스플레이는 결합 후 동일해야 합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

이러한 방식으로 선택자를 그룹화할 때, 선택자가 유효하지 않은 경우 전체 규칙이 무시됩니다.

다음 예에서는 잘못된 class 선택자 규칙이 무시되고 `h1` 은 여전히 스타일이 지정됩니다.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

그러나 결합하면, 전체 규칙이 유효하지 않은 것으로 간주되어 `h1` 또는 class 가 스타일 지정되지 않습니다.

```css
h1, ..special {
  color: blue;
}
```

## 선택자의 유형

선택자에는 몇 가지 그룹이 있으며, 어떤 유형의 선택자가 필요한지 알면 작업에 적합한 도구를 찾는데 도움이 됩니다. 이 기사의 하위 기사에서는 다양한 선택자 그룹을 자세히 살펴 보겠습니다.

### Type, class 및 ID 선택자

이 그룹에는 `<h1>` 과 같은 HTML 요소를 대상으로 하는 선택자가 포함됩니다.

```css
h1 { }
```

또한 class 를 대상으로 하는 선택자가 포함됩니다.

```css
.box { }
```

또는 ID

```css
#unique { }
```

### 속성 선택자

이 선택자 그룹은 요소에 특정 속성이 있는지에 따라 요소를 선택하는 다른 방법을 제공합니다.

```css
a[title] { }
```

또는 특정 값을 가진 속성의 존재 여부를 기반으로 선택하십시오:

```css
a[href="https://example.com"] { }
```

### Pseudo-classes 및 pseudo-elements

이 선택자 그룹에는 요소의 특정 상태를 스타일링하는 pseudo-classes 가 포함됩니다. 예를 들어 `:hover` pseudo-class 는 마우스 포인터에 의해 요소를 가리킬 때만 요소를 선택합니다:

```css
a:hover { }
```

또한 요소 자체가 아닌 요소의 특정 부분을 선택하는 pseudo-elements 도 포함됩니다. 예를 들어, `::first-line` 은 항상 `<span>` 이 첫 번째 형식의 라인을 감싸는 것처럼 작동하여, 요소 내부의 첫 번째 텍스트 라인 (아래의 경우 `<p>`) 을 선택합니다.

```css
p::first-line { }
```

### 결합자 (Combinators)

최종 선택자 그룹은 문서 내의 요소를 대상으로 하기 위해 다른 선택자를 결합합니다. 예를 들어 다음은 자식 결합자 (`>`) 를 사용하여 `<article>` 요소의 자식인 단락을 선택합니다:

```css
article > p { }
```

## 다음 단계

이 학습 섹션 또는 일반적으로 MDN 에서 다양한 유형의 선택자로 직접 연결되는 링크에 대해서는 아래의 선택자 참조 표를 참고하거나 [type, class 및 ID 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) 에 대해 계속해서 여행을 시작하십시오.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## 선택자 참조 표

아래 표는 사용 가능한 선택자의 개요와 이 안내서의 페이지에 대한 링크와 함께 각 유형의 선택자 사용법을 보여줍니다. 브라우저 지원 정보를 확인할 수 있는 각 선택자의 MDN 페이지에 대한 링크도 포함되어 있습니다. 이 자료를 나중에 자료에서 선택자를 찾아 보거나, CSS 를 일반적으로 실험할 때 다시 참조할 수 있습니다.

| 선택자                                                           | 예제                | CSS 자습서 배우기                                                                                                                    |
| ---------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Type 선택자](/ko/docs/Web/CSS/Type_selectors)                   | `h1 { }`            | [Type selectors](/ko/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Type_selectors)                   |
| [범용 선택자](/ko/docs/Web/CSS/Universal_selectors)              | `* { }`             | [The universal selector](/ko/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#The_universal_selector)   |
| [Class 선택자](/ko/docs/Web/CSS/Class_selectors)                 | `.box { }`          | [Class selectors](/ko/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Class_selectors)                 |
| [id 선택자](/ko/docs/Web/CSS/ID_selectors)                       | `#unique { }`       | [ID selectors](/ko/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#ID_Selectors)                       |
| [속성 선택자](/ko/docs/Web/CSS/Attribute_selectors)              | `a[title] { }`      | [Attribute selectors](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Attribute_selectors)                                     |
| [Pseudo-class 선택자](/ko/docs/Web/CSS/Pseudo-classes)           | `p:first-child { }` | [Pseudo-classes](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)    |
| [Pseudo-element 선택자](/ko/docs/Web/CSS/Pseudo-elements)        | `p::first-line { }` | [Pseudo-elements](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) |
| [하위 결합자](/ko/docs/Web/CSS/Descendant_combinator)            | `article p`         | [Descendant combinator](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Descendant_Selector)                       |
| [자식 결합자](/ko/docs/Web/CSS/Child_combinator)                 | `article > p`       | [Child combinator](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Child_combinator)                               |
| [인접 형제 결합자](/ko/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [Adjacent sibling](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Adjacent_sibling)                               |
| [일반 형제 결합자](/ko/docs/Web/CSS/General_sibling_combinator)  | `h1 ~ p`            | [General sibling](/ko/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#General_sibling)                                 |
