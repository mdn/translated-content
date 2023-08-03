---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

CSS **`white-space`** 속성은 요소가 공백 문자를 처리하는 법을 지정합니다.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

> **참고:** 단어 안에서 줄이 바뀌기를 원하는 경우 {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}를 사용하세요.

## 구문

```css
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;
```

`white-space` 속성은 다음 목록의 키워드 값 중 하나를 사용해 설정합니다.

### 값

- `normal`
  - : 연속 공백을 하나로 합침. 개행 문자도 다른 공백 문자와 동일하게 처리합니다. 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다.
- `nowrap`
  - : 연속 공백을 하나로 합침. 줄 바꿈은 {{htmlelement("br")}} 요소에서만 일어납니다.
- `pre`
  - : 연속 공백 유지. 줄 바꿈은 개행 문자와 {{htmlelement("br")}} 요소에서만 일어납니다.
- `pre-wrap`
  - : 연속 공백 유지. 줄 바꿈은 개행 문자와 {{htmlelement("br")}} 요소에서 일어나며, 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다.
- `pre-line`
  - : 연속 공백을 하나로 합침. 줄바꿈은 개행 문자와 {{htmlelement("br")}} 요소에서 일어나며, 한 줄이 너무 길어서 넘칠 경우 자동으로 줄을 바꿉니다.
- `break-spaces`

  - : 다음 차이점을 제외하면 `pre-wrap`과 동일합니다.

    - 연속 공백이 줄의 끝에 위치하더라도 공간을 차지합니다.
    - 연속 공백의 중간과 끝에서도 자동으로 줄을 바꿀 수 있습니다.
    - 유지한 연속 공백은 `pre-wrap`과 달리 요소 바깥으로 넘치지 않으며, 공간도 차지하므로 박스의 본질 크기(`min-content`, `max-content`)에 영향을 줍니다.

다음은 여러가지 `white-space` 값의 동작을 정리한 표입니다.

|                | 개행 문자 | 스페이스, 탭 | 자동 줄 바꿈 | 줄 끝의 공백 |
| -------------- | --------- | ------------ | ------------ | ------------ |
| `normal`       | 병합      | 병합         | 예           | 제거         |
| `nowrap`       | 병합      | 병합         | 아니오       | 제거         |
| `pre`          | 유지      | 유지         | 아니오       | 유지         |
| `pre-wrap`     | 유지      | 유지         | 예           | 넘침         |
| `pre-line`     | 유지      | 병합         | 예           | 제거         |
| `break-spaces` | 유지      | 유지         | 예           | 줄 바꿈      |

### 형식 구문

{{csssyntax}}

## 예제

### 기본 예제

```css
code {
  white-space: pre;
}
```

### {{HTMLElement("pre")}} 요소 내부의 줄 바꿈

```css
pre {
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: pre-wrap; /* current browsers */
}
```

## 실제로 보기

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
  border-radius: 10px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  height: 400px;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
var select = document.querySelector("#css-code select");
var results = document.querySelector("#results p");
select.addEventListener("change", function (e) {
  results.setAttribute("style", "white-space: " + e.target.value);
});
```

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

### CSS + 결과

{{EmbedLiveSample('See_it_in_action_LiveSample', '100%', 500)}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 단어 안에서의 자동 줄 바꿈 방식을 지정하는 속성: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
