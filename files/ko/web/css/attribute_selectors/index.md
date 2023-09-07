---
title: 특성 선택자
slug: Web/CSS/Attribute_selectors
---

{{CSSRef("Selectors")}}

[CSS](/ko/docs/Web/CSS) **특성 선택자**는 주어진 특성의 존재 여부나 그 값에 따라 요소를 선택합니다.

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

## 구문

- `[attr]`
  - : `attr`이라는 이름의 특성을 가진 요소를 선택합니다.
- `[attr=value]`
  - : `attr`이라는 이름의 특성값이 정확히 `value`인 요소를 선택합니다.
- `[attr~=value]`
  - : `attr`이라는 이름의 특성값이 정확히 `value`인 요소를 선택합니다. `attr` 특성은 공백으로 구분한 여러 개의 값을 가지고 있을 수 있습니다.
- `[attr|=value]`
  - : `attr`이라는 특성값을 가지고 있으며, 그 특성값이 정확히 `value`이거나 `value`로 시작하면서 `-`(U+002D) 문자가 곧바로 뒤에 따라 붙으면 이 요소를 선택합니다. 보통 언어 서브코드(`en-US`, `ko-KR` 등)가 일치하는지 확인할 때 사용합니다.
- `[attr^=value]`
  - : `attr`이라는 특성값을 가지고 있으며, 접두사로 `value`가 값에 포함되어 있으면 이 요소를 선택합니다.
- `[attr$=value]`
  - : `attr`이라는 특성값을 가지고 있으며, 접미사로 `value`가 값에 포함되어 있으면 이 요소를 선택합니다.
- `[attr*=value]`
  - : `attr`이라는 특성값을 가지고 있으며, 값 안에 `value`라는 문자열이 적어도 하나 이상 존재한다면 이 요소를 선택합니다.
- `[attr operator value i]`
  - : 괄호를 닫기 전에 `i` 혹은 `I`를 붙여주면 값의 대소문자를 구분하지 않습니다. (ASCII 범위 내에 존재하는 문자에 한해서 적용됩니다)
- `[attr operator value s]` {{experimental_inline}}
  - : 괄호를 닫기 전에 `s` 혹은 `S`를 붙여주면 값의 대소문자를 구분합니다. (ASCII 범위 내에 존재하는 문자에 한해서 적용됩니다)

## 예제

### 링크

#### CSS

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}
```

#### HTML

```html
<ul>
  <li><a href="#internal">Internal link</a></li>
  <li><a href="http://example.com">Example link</a></li>
  <li><a href="#InSensitive">Insensitive internal link</a></li>
  <li><a href="http://example.org">Example org link</a></li>
</ul>
```

#### 결과

{{EmbedLiveSample("링크")}}

### 언어

#### CSS

```css
/* All divs with a `lang` attribute are bold. */
div[lang] {
  font-weight: bold;
}

/* All divs in US English are blue. */
div[lang~="en-us"] {
  color: blue;
}

/* All divs in Portuguese are green. */
div[lang="pt"] {
  color: green;
}

/* All divs in Chinese are red, whether
   simplified (zh-CN) or traditional (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* All divs with a Traditional Chinese
   `data-lang` are purple. */
/* Note: You could also use hyphenated attributes
   without double quotes */
div[data-lang="zh-TW"] {
  color: purple;
}
```

#### HTML

```html
<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">世界您好！</div>
```

#### 결과

{{EmbedLiveSample("언어")}}

### HTML 정렬 목록

[`type`](/ko/docs/Web/HTML/Element/input#type) 특성은 주로 {{htmlelement("input")}} 요소에 사용하므로, HTML 명세는 type의 대소문자를 구분하지 않고 선택하도록 요구하고 있습니다. 그러므로 {{htmlelement("ol")}}의 [`type`](/ko/docs/Web/HTML/Element/ol#type)을 특성 선택자로 선택할 땐 [대소문자 구분](#case-sensitive) 수정자를 지정하지 않으면 동작하지 않습니다.

#### CSS

```css
/* List types require the case sensitive flag due to a quirk in how HTML treats the type attribute. */
ol[type="a"] {
  list-style-type: lower-alpha;
  background: red;
}

ol[type="a" s] {
  list-style-type: lower-alpha;
  background: lime;
}

ol[type="A" s] {
  list-style-type: upper-alpha;
  background: lime;
}
```

#### HTML

```html
<ol type="A">
  <li>Example list</li>
</ol>
```

#### 결과

{{EmbedLiveSample("HTML_정렬_목록")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS {{cssxref("attr")}} 함수
