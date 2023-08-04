---
title: "<canvas>: 그래픽 캔버스 요소"
slug: Web/HTML/Element/canvas
---

{{HTMLSidebar}}

**HTML `<canvas>` 요소**는 [캔버스 스크립팅 API](/ko/docs/Web/HTML/Canvas) 또는 [WebGL API](/ko/docs/Web/API/WebGL_API)와 함께 사용해 그래픽과 애니메이션을 그릴 수 있습니다.

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
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#내장_콘텐츠"
          >내장 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#투명_콘텐츠_모델"
          >투명</a
        >하지만
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >가 아닌 요소. 단, {{HTMLElement("a")}},
        {{HTMLElement("button")}}, 그리고
        {{HTMLElement("input")}} 중
        <a href="/ko/docs/Web/HTML/Element/input#type"><code>type</code></a> 특성이
        <code>checkbox</code>, <code>radio</code>, <code>button</code>인 요소는
        가능
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
      <td>{{domxref("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("height")}}
  - : 좌표 공간의 높이입니다. CSS 픽셀 단위로, 기본값은 150입니다.
- {{htmlattrdef("moz-opaque")}} {{non-standard_inline}} {{deprecated_inline}}
  - : 투명도가 중요한 요소인지를 캔버스에 알려줍니다. 투명도가 없음을 알게되면 페인팅 성능이 최적화됩니다. Mozilla 기반 브라우저에서만 지원하므로, 표준 {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}} 를 대신 사용하세요.
- {{htmlattrdef("width")}}
  - : 좌표 공간의 너비입니다. CSS 픽셀 단위로, 기본값은 300입니다.

## 사용 일람

### 대체 콘텐츠

`<canvas>` 블록 안에 콘텐츠를 추가해 대체 콘텐츠로서 사용할 수 있습니다. 대체 콘텐츠는 캔버스를 지원하지 않는 구형 브라우저와, JavaScript를 비활성화한 브라우저에서 표시됩니다. 유용한 대체 텍스트, 혹은 하위 DOM을 제공하면 캔버스의 접근성을 향상할 수 있습니다.

### 닫는 태그 필수

{{HTMLElement("img")}} 요소와 달리, `<canvas>` 요소는 닫는 태그(`</canvas>`)를 필요로 합니다.

### 캔버스 크기 조절: CSS vs. HTML

캔버스의 표시 크기는 CSS로도 수정할 수 있습니다. 그러나, CSS를 사용할 경우 렌더링 과정에서 CSS 크기에 맞추기 위해 이미지의 크기를 조절하므로, 최종 그래픽이 변형될 수 있습니다.

따라서 `<canvas>` 요소의 `width`와 `height` 특성을 통해 직접 크기를 바꾸는 것이 좋습니다. HTML에서 직접 할 수도 있고, JavaScript를 사용할 수도 있습니다.

### 최대 캔버스 크기

`<canvas>` 요소의 최대 크기는 매우 크지만, 정확한 최대 크기는 브라우저마다 다릅니다. 다음 표는 다양한 테스트와 여러 출처([Stack Overflow](https://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element) 등)에서 수집한 값입니다.

| 브라우저 | 최대 높이   | 최대 너비   | 최대 크기                                |
| -------- | ----------- | ----------- | ---------------------------------------- |
| Chrome   | 32,767 픽셀 | 32,767 픽셀 | 268,435,456 픽셀 (i.e., 16,384 x 16,384) |
| Firefox  | 32,767 픽셀 | 32,767 픽셀 | 472,907,776 픽셀 (i.e., 22,528 x 20,992) |
| Safari   | 32,767 픽셀 | 32,767 픽셀 | 268,435,456 픽셀 (i.e., 16,384 x 16,384) |
| IE       | 8,192 픽셀  | 8,192 픽셀  | ?                                        |

> **참고:** 최대 면적 또는 영역을 초과하면 그리기 명령이 동작하지 않으므로, 캔버스를 사용할 수 없습니다.

## 예제

### HTML

이 코드 조각은 HTML 문서에 캔버스를 추가합니다. 대체 텍스트를 추가해서 브라우저가 캔버스를 렌더링 할 수 없거나, 캔버스를 읽을 수 없는 경우에 대비했습니다.

```html
<canvas id="canvas" width="300" height="300">
  캔버스의 내용을 설명하는 대체 텍스트
</canvas>
```

### JavaScript

그 다음, JavaScript 코드 내에서 {{domxref("HTMLCanvasElement.getContext()")}}를 호출해 그리기 맥락을 얻어서 캔버스 위에 그립니다.

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

### 결과

{{EmbedLiveSample("예제")}}

## 접근성 문제

### 대체 콘텐츠

`<canvas>` 요소 자체는 비트맵에 불과하며 그려진 객체에 대한 어떠한 정보도 제공하지 않습니다. 캔버스 콘텐츠는 시맨틱 HTML 같은 접근성 도구에 노출되지 않습니다. 일반적으로 접근성 웹 사이트나 앱에서는 캔버스 사용을 피해야 합니다. 다음 안내서는 캔버스를 보다 쉽게 접근 가능한 형태로 사용하는 법을 설명합니다.

- [MDN Hit regions and accessability](/ko/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [Canvas 접근성 유즈 케이스](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas 엘리먼트 접근성 문제](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [Firefox 13 의 HTML5 Canvas 접근성 – by Steve Faulkner](http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
- [대화형 캔버스 엘리먼트의 모범 사례](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Canvas API](/ko/docs/Web/HTML/Canvas)
- [캔버스 자습서](/ko/docs/Web/HTML/Canvas/Tutorial)
- [캔버스 치트 시트](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [캔버스 관련 데모](/ko/docs/Web/Demos_of_open_web_technologies)
