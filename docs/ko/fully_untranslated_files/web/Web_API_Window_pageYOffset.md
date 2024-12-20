---
title: Window.pageYOffset
slug: Web/API/Window/pageYOffset
---

{{ APIRef("CSSOM View") }}

{{domxref("Window")}} 인터페이스의 **`pageYOffset`** 읽기 전용 속성은 {{domxref("Window.scrollY", "scrollY")}}의 다른 이름으로, 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다.

일부 오래된 브라우저는 `scrollY` 대신 `pageYOffset`만 지원하는 경우가 있지만, 노후 환경을 신경쓰지 않아도 된다면 둘 중 아무거나 사용해도 괜찮습니다.

수평 스크롤을 나타내는 {{domxref("Window.pageXOffset", "pageXOffset")}} 속성 역시 {{domxref("Window.scrollX", "scrollX")}}의 다른 이름입니다.

## 구문

```js
yOffset = window.pageYOffset;
```

### 값

{{domxref("Window")}} 안의 {{domxref("Document")}}가 수직 방향으로 스크롤된 거리를 픽셀 단위로 나타낸 부동소숫점 수. 단일 픽셀보다 높은 수준의 정밀도를 가지므로 정수가 아닐 수 있습니다. `0.0`은 창의 콘텐츠 영역과 문서의 위쪽 모서리 위치가 일치함을 나타냅니다.

`pageYOffset`은 {{domxref("Window.scrollY")}}의 다른 이름이므로, 값에 대한 더 자세한 정보는 해당 문서를 방문해주세요.

## 예제

```js hidden
var contentHTML = `
    <h2 id="introduction">Introduction</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean volutpat vitae felis non dictum. Ut auctor
eros tortor, vel elementum arcu rhoncus nec. Donec non
laoreet massa. Donec pretium nisi et condimentum convallis.
Nullam dictum molestie finibus. Nullam vitae lorem non
augue mattis cursus.</p>
  <p>Maecenas nec tortor tincidunt, sollicitudin mi eget,
fermentum turpis. Vestibulum ac ante et libero efficitur
faucibus id eget ex. Pellentesque tempor pharetra
tincidunt. Suspendisse potenti. Nulla vulputate nunc sit
amet hendrerit faucibus. Nullam metus dui, venenatis
lacinia nunc nec, vestibulum viverra nunc. Quisque interdum
quam tortor, sit amet varius neque consectetur at. Quisque
vel turpis justo.</p>
  <h2 id="overview">Overview</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Etiam dui dolor, pulvinar sed diam id, eleifend
dapibus odio. Duis vitae ante nibh. Integer bibendum
imperdiet suscipit. Fusce ligula leo, consectetur ac ante
eget, gravida laoreet purus. Cras sodales efficitur risus,
sed feugiat sem. Pellentesque justo augue, placerat non leo
sit amet, laoreet fringilla arcu.</p>
  <p>Class aptent taciti sociosqu ad litora torquent per
conubia nostra, per inceptos himenaeos. Proin in gravida
libero. Vivamus placerat, lacus eget condimentum sagittis,
enim nunc bibendum nisi, quis varius erat felis sit amet
risus.</p>
<p>Sed non finibus ligula. Fusce a magna auctor, molestie
nibh eget, sodales felis. Donec imperdiet facilisis mi ut
aliquam. Etiam sodales suscipit urna, eget hendrerit neque
elementum a. Vivamus fringilla sodales est ut ultricies.
Nulla convallis congue maximus. Nullam consectetur felis
vitae ultricies accumsan. Mauris at aliquam felis. Mauris
efficitur tellus massa, id ullamcorper ipsum fermentum eu.
Aenean mollis dignissim ultrices. Nunc gravida, sem sit
amet lobortis iaculis, dolor ligula convallis nibh, id
condimentum metus libero nec odio. Quisque nec ante
pretium, viverra neque nec, facilisis risus. Duis
condimentum sapien non felis cursus blandit. Integer
euismod lectus a ipsum pellentesque lacinia.</p>
`;

document.getElementById("frame").contentDocument.body.innerHTML = contentHTML;
```

In this example, an {{HTMLElement("iframe")}} is created and filled with content, then a specific element within the document is scrolled into view in the frame. Once that's done, the vertical scroll position is checked by looking at the value of `pageYOffset` in the frame's {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}}.

### HTML

HTML은 단 두 개의 요소를 가진 짧은 코드입니다. 하나는 스크롤할 문서를 담은 {{HTMLElement("iframe")}}이고, 다른 하나는 스크롤을 끝냈을 때 `pageYOffset`의 값을 기록할 {{HTMLElement("div")}}입니다.

```html
<iframe id="frame"> </iframe>

<div id="info"></div>
```

### JavaScript

```js
var frame = document.getElementById("frame");
var frameDoc = frame.contentDocument;
var info = document.getElementById("info");

var target = frameDoc.getElementById("overview");
frameDoc.scrollingElement.scrollTop = target.offsetTop;

info.innerText =
  "스크롤 후 Y축 차이: " + frame.contentWindow.pageYOffset + " 픽셀";
```

The JavaScript code begins by getting into `frame` and `info` the `<iframe>` element that contains our content as well as the `<div>` element into which we'll output the result of our scroll position check. It then gets a reference to the element we want to scroll into view calling {{domxref("Document.getElementById", "getElementById()")}} on the frame's {{domxref("HTMLIFrameElement.contentDocument")}}.

With the target element in hand, we set the {{domxref("Element.scrollTop", "scrollTop")}} of the frame's {{domxref("Document.scrollingElement", "scrollingElement")}} to the {{domxref("Element.offsetTop", "offsetTop")}} of the target element. By doing so, we set the vertical scrolling position of the frame's document so that it's the same as the top edge of the target element.

This will automatically set the scrolling position to the maximum possible value if the attempted scroll would exceed the maximum. This prevents us from falling off the edge of the document. Nobody wants to know what's out there. There might be dragons.

```css hidden
iframe {
  width: 620px;
  height: 450px;
  border: 1px solid black;
}

#info {
  margin-top: 20px;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial";
}
```

### 결과

The result follows. Note that the frame's contents have been scrolled to show the section named "Overview", and that the value of the `pageYOffset` property is shown with the corresponding value.

{{EmbedLiveSample("예제", 650, 500)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Window.pageXOffset", "pageXOffset")}}
- {{domxref("Window.scrollY", "scrollY")}} and {{domxref("Window.scrollX", "scrollX")}}
- {{domxref("Window.scroll", "scroll()")}}, {{domxref("Window.scrollBy", "scrollBy()")}}, and {{domxref("window.scrollTo", "scrollTo()")}}
