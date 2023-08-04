---
title: HTMLElement.innerText
slug: Web/API/HTMLElement/innerText
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 인터페이스의 **`innerText`** 속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타냅니다. `innerText`는 사용자가 커서를 이용해 요소의 콘텐츠를 선택하고 클립보드에 복사했을 때 얻을 수 있는 텍스트의 근삿값을 제공합니다.

> **참고:** `innerText`는 {{domxref("Node.textContent")}}와 혼동하기 쉬우나 중요한 차이점을 가지고 있습니다. 기본적으로, `innerText`는 텍스트의 렌더링 후 모습을 인식할 수 있지만 `textContent`는 그렇지 않습니다.

## 구문

```js
const renderedText = htmlElement.innerText;
htmlElement.innerText = string;
```

### 값

요소의 렌더링 된 텍스트 콘텐츠를 나타내는 {{domxref("DOMString")}}. 요소 자체가 [렌더링 중](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)이 아니라면 {{domxref("Node.textContent")}} 속성의 값과 동일합니다.

## 예제

다음 예제는 `innerText`와 {{domxref("Node.textContent")}}를 비교합니다. `innerText`가 {{htmlElement("br")}} 태그를 인식하고, 숨겨진 요소를 무시하는 점에 주목하세요.

### HTML

```html
<h3>원본 요소:</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
  </style>
  아래에서<br />이 글을<br />어떻게 인식하는지 살펴보세요.
  <span style="display:none">숨겨진 글</span>
</p>
<h3>textContent 결과:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>...</textarea>
<h3>innerText 결과:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>...</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.innerHTML = source.textContent;
innerTextOutput.innerHTML = source.innerText;
```

### 결과

{{EmbedLiveSample("예제", 700, 450)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
