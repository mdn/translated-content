---
title: :placeholder-shown
slug: Web/CSS/Reference/Selectors/:placeholder-shown
original_slug: Web/CSS/:placeholder-shown
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

**`:placeholder-shown`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) 는 현재 [플레이스홀더 텍스트](/ko/docs/Web/HTML/Element/input#placeholder)를 표시 중인 모든 {{HTMLElement("input")}} 또는 {{HTMLElement("textarea")}} 요소를 나타냅니다.

{{InteractiveExample("CSS Demo: :placeholder-shown", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:placeholder-shown {
  background-color: ivory;
  border: 2px solid darkorange;
  border-radius: 5px;
}
```

```html interactive-example
<form>
  <label for="name">Full Name:</label>
  <input id="name" name="name" type="text" />

  <label for="email">Email Address:</label>
  <input id="email" name="email" type="email" placeholder="name@example.com" />

  <label for="age">Your age:</label>
  <input
    id="age"
    name="age"
    type="number"
    value="18"
    placeholder="You must be 18+" />
</form>
```

## 구문

```css
:placeholder-shown {
  /* ... */
}
```

## 예제

### 기본 예제

이 예제는 플레이스홀더가 나타날 때 특별한 글꼴과 테두리 스타일을 적용합니다.

#### HTML

```html
<input placeholder="아무 내용이나 입력하세요!" />
```

#### CSS

```css
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: teal;
  color: purple;
  font-style: italic;
}
```

#### 결과

{{EmbedLiveSample("Basic_example", 200, 80)}}

### 문자열 넘침

폼 필드가 너무 작으면 플레이스홀더 텍스트가 바람직하지 않은 방식으로 잘릴 수 있습니다. {{cssxref("text-overflow")}} 속성을 사용하여 넘치는 문자열이 표시되는 방식을 변경할 수 있습니다.

#### HTML

```html
<input id="input1" placeholder="이름, 등급 그리고 일련번호" /> <br /><br />
<input id="input2" placeholder="이름, 등급 그리고 일련번호" />
```

#### CSS

```css
#input2:placeholder-shown {
  text-overflow: ellipsis;
}
```

#### 결과

{{EmbedLiveSample("Overflowing_text", 200, 80)}}

### 사용자 정의 입력 필드

다음 예제는 사용자 정의 스타일로 학생의 고유번호 필드를 강조합니다.

#### HTML

```html
<form id="test">
  <p>
    <label for="name">학생 이름을 입력하세요:</label>
    <input id="name" placeholder="학생 이름" />
  </p>
  <p>
    <label for="branch">학생부를 입력하세요:</label>
    <input id="branch" placeholder="학생부" />
  </p>
  <p>
    <label for="sid">학생 고유번호를 입력하세요:</label>
    <input
      type="number"
      pattern="[0-9]{8}"
      title="8 digit ID"
      id="sid"
      class="studentid"
      placeholder="8자리 고유번호" />
  </p>
  <input type="submit" />
</form>
```

#### CSS

```css
input {
  background-color: #e8e8e8;
  color: black;
}

input.studentid:placeholder-shown {
  background-color: yellow;
  color: red;
  font-style: italic;
}
```

#### 결과

{{EmbedLiveSample("Customized_input_field", 200, 180)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{CSSxRef("::placeholder")}} 의사 요소는 플레이스홀더 자체를 꾸밉니다.
- 관련된 HTML 요소들: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [HTML forms](/ko/docs/Learn_web_development/Extensions/Forms)
