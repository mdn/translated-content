---
title: Printing
slug: Web/CSS/CSS_media_queries/Printing
l10n:
  sourceCommit: f7daf15512ea736498837b68bcc36d82d6a323f4
---

{{CSSRef}}

웹 사이트나 애플리케이션에서 사용자가 콘텐츠를 인쇄할 때 사용자 경험을 향상시키고자 하는 경우가 존재합니다.
다음은 몇 가지 가능한 시나리오입니다.

- 용지의 크기와 모양에 맞추어 레이아웃을 맞추고 싶은 경우
- 용지에 인쇄되는 외관을 향상시키기 위해 다른 스타일을 사용하고 싶은 경우
- 더 나은 결과물을 위해 높은 해상도를 사용하고 싶은 경우
- 인쇄가 시작되기 전에 지정된 형식의 버전의 콘텐츠를 표시하는 것처럼 인쇄하는 사용자의 경험을 조정하고 싶은 경우

위에 제공된 아주 일반적인 시나리오 외에도 인쇄 절차를 관리하려는 더 많은 방법이 있을 수 있습니다.
이 안내서에서는 웹 콘텐츠를 어떻게 더 나은 방법으로 인쇄하는지에 대한 팁과 기술을 제공합니다.

## 인쇄 스타일시트 사용하기

다음 {{HTMLElement("head")}} 태그를 추가해 보세요.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## 미디어 쿼리와 @page 를 사용하여 인쇄 콘텐츠 제어하기

CSS 의 {{cssxref("@media")}} @-규칙을 사용하면 웹 페이지가 화면에 보이는 경우와 PDF 형식인 경우, 그리고 용지에 인쇄되는 경우마다 각각 다른 스타일을 지정할 수 있게 됩니다. `print` [미디어 유형](/ko/docs/Web/CSS/@media#media_type) 은 인쇄 미디어를 위한 스타일을 적용하는데, 이 스타일은 인쇄된 콘텐츠에만 적용됩니다.

아래 코드를 스타일 시트 가장 뒤에 삽입해 보세요. [명시도](/ko/docs/Web/CSS/Specificity) 와 우선순위는 여전히 적용된다는 것을 참고해야 합니다.

```css
@media print {
  /* 인쇄 스타일은 이곳에 작성하면 됩니다. */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

{{cssxref("@page")}} @-규칙을 사용하여 페이지의 크기, 방향 및 바깥 여백을 포함한 페이지의 다양한 요소들을 수정할 수 있습니다. `@page` @-규칙은 인쇄될 모든 페이지 혹은 특정 페이지들의 집합을 대상으로도 사용될 수 있습니다.

## 인쇄 요청 감지하기

브라우저는 {{domxref("Window/beforeprint_event", "beforeprint")}} 와 {{domxref("Window/afterprint_event", "afterprint")}} 이벤트를 통해 인쇄가 언제 발생할지 감지할 수 있습니다. 이를 활용하여 인쇄 도중 표시되는 사용자 인터페이스를 조정할 수 있습니다(예를 들어, 인쇄 과정에서는 사용자의 인터페이스를 표시하거나 숨기는 등).

## 예제

여기서 일반적인 예제를 확인해 보세요.

### 인쇄가 끝나면 자동적으로 창을 닫기

다음은 콘텐츠가 모두 인쇄가 되면 자동으로 창을 닫는 예제입니다.

```js
window.addEventListener("afterprint", () => self.close);
```

### 외부 페이지를 열지 않고 인쇄하기

외부 페이지를 열지 않고 인쇄만 하는 경우에는 숨겨진 {{HTMLElement("iframe")}} 유틸리티를 활용할 수 있습니다 ((참고: [HTMLIFrameElement](/ko/docs/Web/API/HTMLIFrameElement))), 사용자가 해당 콘텐츠를 인쇄한 이후 자동으로 이를 제거합니다. 다음은 `externalPage.html` 라는 파일을 인쇄하는 예제입니다.

#### HTML

```html
<button id="print_external">외부 페이지 인쇄하기!</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // iframe 숨김 처리
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## 같이 보기

- [`window.print`](/ko/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }} 이벤트
- {{ domxref("window.afterprint_event", "afterprint") }} 이벤트
- [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
- [CSS paged media](/ko/docs/Web/CSS/CSS_paged_media) 모듈
