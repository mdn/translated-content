---
title: content
slug: Web/CSS/content
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`content`** 속성은 생성한 값으로 요소를 대체합니다. `content` 속성으로 추가한 요소는 "익명 [대체 요소](/ko/docs/Web/CSS/Replaced_element)"입니다.

```css
/* 다른 값과 조합할 수 없는 키워드 */
content: normal;
content: none;

/* <image> 값 */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);

/* 생성한 값의 대체 텍스트, Level 3 명세에서 추가 */
content: url("http://www.example.com/test.png") / "This is the alt text";

/* 앞선 값은 모두 ::before와 ::after에만 적용 가능 */

/* <string> 값 */
content: "prefix";

/* <counter> 값 */
content: counter(chapter_counter);
content: counters(section_counter, ".");

/* HTML 속성값으로 연결하는 attr() */
content: attr(value string);

/* 언어와 요소 위치 기반 키워드 */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* normal과 none을 제외하면 여러 키워드를 함께 사용할 수 있음 */
content: open-quote chapter_counter;

/* 전역 값 */
content: inherit;
content: initial;
content: unset;
```

{{cssinfo}}

## 구문

### 값

- `none`
  - : 의사 요소를 생성하지 않음.
- `normal`
  - : `::before`와 `::after` 의사 요소인 경우 `none`.
- {{cssxref("&lt;string&gt;")}}
  - : 요소의 "대체 텍스트". 모든 숫자와 문자가 가능합니다. 단, 라틴계 문자가 아닌 경우 유니코드 이스케이프 시퀀스를 사용해 인코딩해야 합니다. 예를 들어, `\000A9`는 저작권 기호입니다.
- {{cssxref("&lt;image&gt;")}}
  - : {{cssxref("&lt;url&gt;")}}이나 {{cssxref("&lt;gradient&gt;")}} 자료형을 사용한 {{cssxref("&lt;image&gt;")}}, 또는 {{cssxref("element")}} 함수를 사용해 가리킨, 보여줄 웹페이지의 일부.
- {{cssxref("&lt;counter&gt;")}}

  - : 보통 숫자인 <a href="/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">CSS 카운터 값</a>.{{cssxref("counter")}}나 {{cssxref("counters")}} 함수를 사용해 지정할 수 있습니다.

    {{cssxref("counter")}} 함수는 `counter(<var>name</var>)`과 `counter(<var>name</var>, <var>style</var>)`의 두 형태를 가지고 있습니다. 생성하는 값은 주어진 의사 요소의 현재 범위에서, 해당하는 이름을 가진 가장 안쪽 카운터의 값입니다. 지정한 스타일(기본 `decimal`)에 맞춰 서식을 적용합니다.

    {{cssxref("counters")}} 함수 역시 `counters(<var>name</var>, <var>string</var>)'과 'counters(<var>name</var>, <var>string</var>, <var>style</var>)`의 두 형태를 가집니다. 생성하는 값은 주어진 의사 요소의 현재 범위에서, 해당하는 이름을 가진 카운터 값의 목록으로 바깥쪽부터 시작하며 주어진 문자열을 사용해 구분합니다. 지정한 스타일(기본 `decimal`)에 맞춰 서식을 적용합니다..

- `attr(x)`
  - : 문자열로 변환한, 요소 속성 `x`의 값. `x` 속성이 존재하지 않으면 빈 문자열을 반환합니다. 속성명의 대소문자 구분 여부는 문서 언어에 따릅니다.
- `open-quote` | `close-quote`
  - : {{cssxref("quotes")}} 속성에서 가져온 적절한 문자열을 사용해 대체.
- `no-open-quote` | `no-close-quote`
  - : 콘텐츠는 추가하지 않고, 대신 따옴표의 중첩 단계를 증감.

### 형식 구문

{{csssyntax}}

## 예제

### 헤딩과 따옴표

다음 예제는 인용구 주변에 따옴표를 추가하고, 헤딩 앞에 단어 "Chapter"를 추가합니다.

#### HTML

```html
<h1>5</h1>
<p>
  According to Sir Tim Berners-Lee,
  <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet"
    >I was lucky enough to invent the Web at the time when the Internet already
    existed - and had for a decade and a half.</q
  >
  We must understand that there is nothing fundamentally wrong with building on
  the contributions of others.
</p>

<h1>6</h1>
<p>
  According to the Mozilla Manifesto,
  <q cite="http://www.mozilla.org/en-US/about/manifesto/"
    >Individuals must have the ability to shape the Internet and their own
    experiences on the Internet.</q
  >
  Therefore, we can infer that contributing to the open web can protect our own
  individual experiences on it.
</p>
```

#### CSS

```css
q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before {
  content: "Chapter "; /* The trailing space creates separation
                           between the added content and the
                           rest of the content */
}
```

#### 결과

{{EmbedLiveSample('헤딩과_따옴표', '100%', 200)}}

### 이미지와 텍스트

다음 예제는 링크 앞에 이미지를 추가합니다. 이미지를 가져오지 못한 경우 텍스트를 대신 추가합니다.

#### HTML

```html
<a href="http://www.mozilla.org/en-US/">Mozilla Home Page</a>
```

#### CSS

```css
a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico")
    " MOZILLA: ";
  font:
    x-small Arial,
    sans-serif;
  color: gray;
}
```

#### 결과

{{EmbedLiveSample('이미지와_텍스트', '100%', 60)}}

### 클래스 사용

다음 예제는 목록의 특별한 항목 뒤에 추가 텍스트를 삽입합니다.

#### HTML

```html
<h2>Paperback Best Sellers</h2>
<ol>
  <li>Political Thriller</li>
  <li class="new-entry">Halloween Stories</li>
  <li>My Biography</li>
  <li class="new-entry">Vampire Romance</li>
</ol>
```

#### CSS

```css
.new-entry::after {
  content: " New!"; /* The leading space creates separation
                        between the added content and the
                        rest of the content */
  color: red;
}
```

#### 결과

{{EmbedLiveSample('클래스_사용', '100%', 160)}}

### 이미지와 요소 속성

다음 예제는 링크 앞에 이미지를 추가하고, 뒤에 `id` 속성의 값을 붙입니다.

#### HTML

```html
<ul>
  <li><a id="moz" href="http://www.mozilla.org/"> Mozilla Home Page</a></li>
  <li>
    <a id="mdn" href="https://developer.mozilla.org/">
      Mozilla Developer Network</a
    >
  </li>
</ul>
```

#### CSS

```css
a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico");
}

#mdn::before {
  content: url("mdn-favicon16.png");
}

li {
  margin: 1em;
}
```

#### 결과

{{EmbedLiveSample('이미지와_요소_속성', '100%', 160)}}

### 요소 대체

다음 예제는 요소의 콘텐츠를 이미지로 대체합니다. {{cssxref("&lt;url&gt;")}} 또는 {{cssxref("&lt;image&gt;")}} 사용하면 콘텐츠를 대체합니다. 요소를 대체했으므로 `::before`나 `::after`는 생성하지 않습니다.

#### HTML

```html
<div id="replaced">Mozilla</div>
```

#### CSS

```css
#replaced {
  content: url("mdn.svg");
}

#replaced::after {
  /* will not show if element replacement is supported */
  content: " (" attr(id) ")";
}
```

#### 결과

{{EmbedLiveSample('요소_대체', '100%', 200)}}

## 접근성 고려사항

CSS로 생성한 콘텐츠는 [DOM](/ko/docs/Web/API/Document_Object_Model/소개)이 포함하지 않고, [접근성 트리](/ko/docs/Learn/접근성/What_is_accessibility)에도 들어가지 않습니다. 따라서 특정 접근성 기술/브라우저 조합이 내용을 표현하지 않을 수 있습니다. 콘텐츠가 포함한 정보가 페이지의 목적을 이해하는 것에 중요하다면 주 문서로 포함하는 것이 좋습니다.

- [Accessibility support for CSS generated content – Tink](https://tink.uk/accessibility-support-for-css-generated-content/)
- [Explanation of WCAG, Guideline 1.3 – MDN](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("::after")}}
- {{Cssxref("::before")}}
- {{Cssxref("::marker")}}
- {{Cssxref("quotes")}}
- {{cssxref("url()")}} 함수
