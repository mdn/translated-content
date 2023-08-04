---
title: <u>
slug: Web/HTML/Element/u
---

{{HTMLSidebar}}

**HTML `<u>` 요소**는 글자로 표현하지 않는 주석을 가진 것으로 렌더링 해야 하는 텍스트를 나타냅니다. 기본값에서는 단순한 밑줄로 표시하지만 CSS를 사용해 바꿀 수 있습니다.

> **경고:** `<u>` 요소는 과거 HTML에서 밑줄(Underline) 요소로 불렸으며 지금도 밑줄을 추가할 목적으로 남용하는 경우가 있습니다. 그러나 밑줄을 위해서는 CSS {{cssxref("text-decoration")}} 속성을 `underline`으로 지정하는 방법을 대신 사용해야 합니다.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

다른 순수 스타일 요소와 마찬가지로, 원래의 HTML 밑줄 요소(`<u>`)는 HTML 4부터 사용을 중단했으나, HTML 5에서 새로운 의미를 얻으며 돌아왔습니다. HTML 5에서 `<u>` 요소는 텍스트가 일종의 문자가 아닌 주석을 가지고 있음을 나타냅니다.

> **참고:** `<u>`와 하이퍼링크 둘 다 기본 스타일이 밑줄이므로, `<u>`를 기본 스타일로 사용하는건 피해야 합니다.

### 사용처

`<u>` 요소의 유효한 사용처는 철자 오류 강조, [중국어의 고유명사 표시](https://en.wikipedia.org/wiki/Proper_name_mark) 등이 있습니다.

`<u>`를 사용해 밑줄만 추가하거나, 책 제목 등을 강조해서는 안됩니다.

### 고려할만한 다른 요소

대부분의 경우 `<u>` 대신 다른 요소를 사용해야 합니다.

- {{htmlelement("em")}} 요소는 강세를 나타냅니다.
- {{htmlelement("b")}} 요소는 사용자의 주의를 텍스트로 돌립니다.
- {{htmlelement("mark")}} 요소는 관련성을 나타냅니다.
- {{htmlelement("strong")}} 요소는 강한 중요성을 나타냅니다.
- {{htmlelement("cite")}} 요소는 책, 공연, 음악 등 저작물의 이름을 나타냅니다.
- {{htmlelement("i")}} 요소는 기술 용어, 외국어, 등장인물의 생각 등을 나타냅니다.

`<u>`가 비 텍스트 표기라면, {{htmlelement("ruby")}}는 텍스트 표기를 제공합니다.

별도의 의미 없이 밑줄만 추가하려면 CSS {{cssxref("text-decoration")}} 속성의 값을 `underline`으로 지정하세요.

## 예제

### 맞춤법 오류 표시

이번 예제는 `<u>`와 약간의 CSS를 사용해, 문단에서 철자 오류가 존재하는 부분을 빨간색 물결 밑줄로 표시합니다.

#### HTML

```html
<p>맞춤법을 틀리면 <u class="spelling">않돼요</u>.</p>
```

`spelling` 클래스를 가진 `<u>` 요소가 "안돼요"의 잘못된 철자를 나타내고 있음을 볼 수 있습니다.

#### CSS

```css
u.spelling {
  text-decoration: red wavy underline;
}
```

CSS는 `spelling` 클래스를 가진 `<u>` 요소에 빨간 물결 밑줄을 적용하고 있습니다. 빨간 물결 밑줄은 맞춤법 오류를 표시할 때 흔히 쓰이는 스타일입니다. 또 다른 스타일은 `red dashed underline`입니다.

#### 결과

최근 워드 프로세서를 사용해본 경우 친숙한 모습일 것입니다.

{{EmbedLiveSample("맞춤법_오류_표시", 650, 80)}}

### `<u>` 피하기

대부분의 경우, 사실 `<u>` 요소를 피하는게 좋습니다. 다음은 다른 요소를 사용해야 하는 몇 가지 경우입니다.

#### 의미를 가지지 않는 밑줄

아무런 의미를 나타내지 않고 밑줄만 추가할 경우 {{HTMLElement("span")}} 요소를 사용하고, {{cssxref("text-decoration")}} 속성의 값은 `underline`으로 지정하세요.

##### HTML

```html
<span class="underline">Today's Special</span>
<br />
Chicken Noodle Soup With Carrots
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### Result

{{EmbedLiveSample("의미를_가지지_않는_밑줄", 650, 80)}}

#### 책 제목 표현하기

책 제목은 `<u>` 대신 {{htmlelement("cite")}}를 사용해 나타내야 합니다.

##### HTML

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

##### 기본 스타일 결과

{{EmbedLiveSample("example-unstyled-cite", 650, 80)}}

`<cite>` 요소의 기본 스타일은 기울임꼴을 적용합니다. 원한다면 CSS를 사용해 재정의할 수 있습니다.

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

##### 사용자 지정 스타일 결과

{{EmbedLiveSample("Presenting_a_book_title", 650, 80)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 보통 {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, {{HTMLElement("cite")}} 요소를 사용하는 편이 더 적합합니다.
- 특별한 의미를 가지지 않는 밑줄은 CSS {{cssxref("text-decoration")}} 속성을 사용해야 합니다.
