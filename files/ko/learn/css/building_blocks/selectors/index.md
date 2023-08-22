---
title: CSS 선택자
slug: Learn/CSS/Building_blocks/Selectors
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

{{Glossary("CSS")}} 에서, 선택자는 스타일을 지정할 웹 페이지의 {{glossary("HTML")}} 요소를 대상으로 하는 데 사용됩니다. 사용 가능한 다양한 CSS 선택자가 있으며, 스타일을 지정할 요소를 선택할 때 세밀한 정밀도를 허용합니다. 이 글와 하위 글에서는 다양한 유형을 자세히 살펴보고 작동 방식을 살펴보겠습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및 CSS 작동 방식에 대한 이해 (<a
          href="/ko/docs/Learn/CSS/First_steps"
          >CSS 첫 단계</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>CSS 선택자 작동 방식에 대해 자세히 알아보기.</td>
    </tr>
  </tbody>
</table>

## 선택자란 무엇인가요?

CSS 선택자는 CSS 규칙의 첫 번째 부분입니다. 선택자는 규칙 내부의 CSS 속성 값을 적용하기 위해 어떤 HTML 요소를 선택해야 하는지 브라우저에 알려주는 요소 및 기타 용어의 패턴입니다. 선택자에 의해 선택되는 요소를 선택자의 대상이라고 합니다.

![h1이 강조된 코드](selector.png)

다른 글에서 몇 가지 다른 선택자를 만나보셨습니다. 예를 들어 `h1` 과 같은 요소 또는 `.special` 과 같은 클래스를 선택하는 등 다양한 방법으로 문서를 대상으로 하는 선택자가 있다는 것을 배웠습니다.

CSS에서 선택자는 CSS 선택자 사양에 정의되어 있으며, CSS의 다른 부분과 마찬가지로 브라우저에서 지원되어야 작동합니다. 여러분이 접하게 될 대부분의 선택자는 성숙한 사양인 [레벨 3 선택자 사양](https://www.w3.org/TR/selectors-3/)과 [레벨 4 선택자 사양](https://www.w3.org/TR/selectors-4/)에 정의되어 있으며, 따라서 이러한 선택자에 대한 브라우저 지원은 훌륭합니다.

## 선택자 목록

동일한 CSS를 사용하는 항목이 두 개 이상 있는 경우 개별 선택자를 _선택자 목록_ 으로 결합하여 규칙이 모든 개별 선택자에 적용되도록 할 수 있습니다. 예를 들어 `h1`에 대해 동일한 CSS와 `.special` 클래스가 있는 경우 이를 두 개의 개별 규칙으로 작성할 수 있습니다.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

또한 이들 사이에 쉼표를 추가하여 선택자 목록으로 결합할 수도 있습니다.

```css-nolint
h1, .special {
  color: blue;
}
```

쉼표 앞이나 뒤에 공백을 사용할 수 있습니다. 선택자를 새 줄에 배치하면 가독성을 높일 수도 있습니다.

```css
h1,
.special {
  color: blue;
}
```

아래 라이브 예제에서 선언이 동일한 두 선택자를 결합해 보십시오. 결합 후 시각적 표시가 동일해야 합니다.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

이러한 방식으로 선택자를 그룹화할 때 선택자 중 구문적으로 유효하지 않은 선택자가 있으면 전체 규칙이 무시됩니다.

다음 예제에서는 잘못된 클래스 선택자 규칙이 무시되지만 `h1`의 스타일은 계속 유지됩니다.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

그러나 결합하면 전체 규칙이 유효하지 않은 것으로 간주되므로 `h1`이나 클래스 모두 스타일이 지정되지 않습니다.

```css
h1,
..special {
  color: blue;
}
```

## 선택자의 유형

선택자에는 몇 가지 다른 그룹이 있으며, 어떤 유형의 선택자가 필요한지 알면 작업에 적합한 도구를 찾는 데 도움이 됩니다. 이 글의 하위 문서에서는 다양한 선택자 그룹에 대해 더 자세히 살펴보겠습니다.

### 유형, 클래스 및 ID 선택자

이 그룹에는 `<h1>` 과 같은 HTML 요소를 대상으로 하는 선택자가 포함됩니다.

```css
h1 {
}
```

또한 클래스를 대상으로 하는 선택자가 포함됩니다.

```css
.box {
}
```

또는 ID

```css
#unique {
}
```

### 속성 선택자

이 선택자 그룹은 요소에 특정 속성이 있는지에 따라 요소를 선택하는 다른 방법을 제공합니다.

```css
a[title] {
}
```

또는 특정 값을 가진 속성의 존재 여부에 따라 선택할 수도 있습니다.

```css
a[href="https://example.com"]
{
}
```

### 의사 클래스 및 의사 요소

이 선택자 그룹에는 요소의 특정 상태 스타일을 지정하는 의사 클래스가 포함됩니다. 예를 들어 `:hover` 의사 클래스는 마우스 포인터로 요소를 가리키고 있을 때만 요소를 선택합니다.

```css
a:hover {
}
```

또한 요소 자체가 아닌 요소의 특정 부분을 선택하는 의사 요소도 포함됩니다. 예를 들어 `::first-line`은 항상 요소 내부의 첫 번째 텍스트 줄(아래 사례에서는 `<p>`)을 선택하며, 마치 형식이 지정된 첫 번째 줄을 `<span>`으로 감싼 다음 선택한 것처럼 작동합니다.

```css
p::first-line {
}
```

### 결합자

최종 선택자 그룹은 문서 내의 요소를 대상으로 하기 위해 다른 선택자를 결합합니다. 예를 들어 다음은 하위 결합자(`>`)를 사용하여 `<article>` 요소의 직접 자식인 단락을 선택합니다:

```css
article > p {
}
```

## 요약

이 글에서는 특정 HTML 요소를 타겟팅할 수 있는 CSS 선택자를 소개했습니다. 다음에는 [타입, 클래스 및 ID 선택자](/ko/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)에 대해 자세히 살펴보겠습니다.

전체 선택자 목록은 [CSS 선택자 참조](/ko/docs/Web/CSS/CSS_selectors)를 참고하세요.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}
