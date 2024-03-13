---
title: ":checked"
slug: Web/CSS/:checked
---

{{CSSRef}}

**`:checked`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) 선택자는 선택했거나 `on` 상태인 **라디오**([`<input type="radio">`](/ko/docs/Web/HTML/Element/input/radio)), **체크박스**([`<input type="checkbox">`](/ko/docs/Web/HTML/Element/input/checkbox)), **옵션**({{HTMLElement("option")}} 요소를 나타냅니다.

```css
/* Matches any checked/selected radio, checkbox, or option */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

사용자가 요소를 체크했거나 선택한 경우 활성화되고, 체크나 선택을 해제하는 경우 비활성화됩니다.

> **참고:** 많은 경우 브라우저는 `<option>` 요소를 [대체 요소](/ko/docs/Web/CSS/Replaced_element)로 취급하므로, `:checked` 의사 클래스를 사용한 스타일을 적용할 수 있는 범위도 브라우저마다 다릅니다.

## 구문

{{csssyntax}}

## 예제

### 기본 예제

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" />
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no" />
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### 결과

{{EmbedLiveSample("기본_예제")}}

### 숨겨진 체크박스를 사용해 요소 켜고 끄기

다음 예제 코드는 `:checked` 의사 클래스와 체크박스를 사용해, [JavaScript](/ko/docs/Web/JavaScript) 없이도 사용자가 켜거나 끌 수 있는 콘텐츠를 구현합니다.

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Column #1</th>
      <th>Column #2</th>
      <th>Column #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### 결과

{{EmbedLiveSample("숨겨진_체크박스를_사용해_요소_켜고_끄기", "auto", 220)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
