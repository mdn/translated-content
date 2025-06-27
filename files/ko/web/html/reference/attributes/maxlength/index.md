---
title: "HTML attribute: maxlength"
slug: Web/HTML/Reference/Attributes/maxlength
original_slug: Web/HTML/Attributes/maxlength
l10n:
  sourceCommit: a78cecea4f3b1a7f35564a547052e163911ac491
---

{{HTMLSidebar}}

**`maxlength`** 특성은 유저가 {{htmlelement('input')}} 요소나 {{htmlelement('textarea')}} 요소에 입력할 수 있는 최대 글자 수를 정의합니다. 특성의 값은 반드시 0 이상의 정수여야 합니다.

길이는 글자의 개수에 해당하는 ([더 많은 내용](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) UTF-16 코드 단위를 기준으로 계산됩니다. `maxlength`가 특정되지 않거나 올바르지 않은 값으로 설정되면 해당 입력 칸은 최대 길이의 제한이 없게 됩니다.

유효한 [`minlength`](/ko/docs/Web/HTML/Attributes/minlength) 값이 존재한다면 `maxlength` 값은 그보다 크거나 같아야만 합니다. 입력 칸의 텍스트 길이가 UTF-16 코드 단위 maxlength보다 크다면 input은 제약 조건 유효성 검사에 실패하게 됩니다. 제약 조건 유효성 검사는 사용자가 값을 변경했을 때에만 적용됩니다.

### 제약 조건 유효성 검사

일반적으로 브라우저는 maxlength의 범위보다 더 긴 텍스트를 입력하는 것을 방지하지만, 텍스트의 길이가 maxlength보다 커진 경우에는 {{domxref("ValidityState")}} 객체의 읽기 전용 속성 {{domxref("ValidityState.tooLong", "tooLong")}}이 true가 됩니다.

{{InteractiveExample("HTML Demo: maxlength", "tabbed-shorter")}}

```html interactive-example
<label for="name">Product name:</label>
<input
  id="name"
  name="name"
  type="text"
  value="Shampoo"
  minlength="3"
  maxlength="20"
  required />

<label for="description">Product description:</label>
<textarea
  id="description"
  name="description"
  minlength="10"
  maxlength="40"
  required></textarea>
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid,
textarea:valid {
  background-color: palegreen;
}
```

## 예제

```html
<input type="password" maxlength="4" />
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`minlength`](/ko/docs/Web/HTML/Attributes/minlength)
- [`size`](/ko/docs/Web/HTML/Reference/Attributes/size)
- [`pattern`](/ko/docs/Web/HTML/Attributes/pattern)
- [Constraint validation](/ko/docs/Web/HTML/Constraint_validation)
- [Form validation](/ko/docs/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
