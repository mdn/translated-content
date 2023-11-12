---
title: Managing screen orientation
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
---

{{SeeCompatTable}}

## Summary

Screen orientation 은 [device orientation](/ko/docs/WebAPI/Detecting_device_orientation) 과는 조금 다르다. 비록 장치가 방향을 감지 못하더라도 화면은 언제나 방향을 가지고 있다. 그리고 만약 장치가 방향을 알 수 있더라도 웹 어플리케이션의 인터페이스를 유지하거나 적응하기 위해 화면의 방향을 조정하는 능력을 갖는게 좋다.

화면의 방향을 다루기 위한 여러 방법이 있는데, CSS 와 JavaScript 이다. 첫 번째는 [orientation media query](/ko/docs/CSS/Media_queries#orientation) 이다. 이것은 내용이 CSS를 사용해서 레이아웃을 조정하게 하는데, 브라우저 창이 가로 모드 (너비가 높이보다 큼) 또는 세로모드 (높이가 너비보다 큼) 여부에 달려 있다.

두번째 방법은 JavaScript Screen orientation API 인데 이것은 화면의 현재 방향을 구하고 잠그는데 사용할 수 있다.

## Adjusting layout based on the orientation

방향 변환에서 가장 흔한 케이스 중 하나는 장치의 방향에 따라 내용의 레이아웃을 조정 하는 것이다. 예를 들자면, 당신은 버튼바를 장치 화면의 가장 긴 크기로 펼치고 싶어 할 수 있는데, media query를 이용해서 쉽고 자동으로 할 수 있다.

다음의 HTML code 예제를 보자

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

CSS 는 화면 방향에 따라 특정 스타일을 을 다루기 위해 orientation media query 에 의존한다

```css
/* First let's define some common styles */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0.5em;
  background: white;
}
```

Once we have some common styles we can start defining a special case for the orientation

```css
/* For portrait, we want the tool bar on top */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* For landscape, we want the tool bar stick on the left */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: 0.5em;
  }
}
```

실행 결과를 보자

| Portrait                                                                     | Landscape                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }} | {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }} |

> **참고:** orientation media query 는 실제로 브라우저 창 (또는 iframe) 의 방향에 따라 적용한다. 장치의 방향이 아니다.

## Locking the screen orientation

> **경고:** 이 API 는 실험적이며 현재 [Firefox OS](/ko/docs/Mozilla/Firefox_OS) 와 [Firefox for Android](/ko/docs/Mozilla/Firefox_for_Android) 에서 `moz` 접두사를 이용하여 사용할 수 있다.

몇몇 장치들은 (주로 모바일 장치) 사용자가 언제나 화면을 읽을 수 있게 장치의 방향에 따라 동적으로 화면의 방향을 변화시킬 수 있다. 만약 이러한 행위가 텍스트 컨텐츠에 적합하다면, 이러한 변화 때문에 고통 받을 수 있는 켄텐츠도 있다. 예를 들어, 장치의 방향에 따른 게임들은 이러한 방향전환 때문에 혼란스러울 수 있다.

Screen Orientation API 는 정확히 그러한 변화를 방지하기 위해 만들어졌다.

### Listening orientation change

{{domxref("Window.orientationchange_event", "orientationchange")}} 이벤트는 장치가 화면의 방향을 변환할 때와 방향이 {{domxref("window.screen.orientation","screen.orientation")}} 속성과 함께 읽혀질 때 마다 불려 진다.

```js
screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
```

### Preventing orientation change

모든 웹 어플리케이션은 필요에 따라 스크린을 잠굴 수 있다. 화면은 {{domxref("window.screen.lockOrientation","screen.lockOrientation()")}} 함수를 사용하여 잠그고 {{domxref("window.screen.unlockOrientation","screen.unlockOrientation()")}}. 함수로 잠금 해제 한다.

{{domxref("window.screen.lockOrientation","screen.lockOrientation()")}} 는 적용 할 잠금의 종류를 정의하는 문자열 (또는 일련의 문자열) 을 수용한다. 수용하는 값들: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait`, `landscape` (각각의 값들에 대해 좀 더 알려면 {{domxref("window.screen.lockOrientation","lockOrientation")}} 를 보라).

```js
screen.lockOrientation("landscape");
```

> **참고:** 화면 잠금은 웹 어플리케이션에 따라 다르다. 어플레케이션 A이 가로모드로 잠겨 있고 어플레케이션 B가 세로모드로 잠겨 있을 때, 어플리케이션을 A 에서 B 로 또는 B 에서 A 로 전환하면 {{domxref("Window.orientationchange_event", "orientationchange")}} 를 호출하지 않는다. 왜냐하면 각 어플리케이션은 각자의 방향을 유지 하기 때문이다.그러나, 만약 잠금요구를 만족하기 위해 방향이 바뀌어야한다면 화면잠금은 {{domxref("Window.orientationchange_event", "orientationchange")}} 이벤트를 호출 할 수 있다.

## 같이 보기

- {{domxref("window.screen.orientation","screen.orientation")}}
- {{domxref("window.screen.lockOrientation()","screen.lockOrientation()")}}
- {{domxref("window.screen.unlockOrientation()","screen.unlockOrientation()")}}
- {{domxref("window.screen.onorientationchange","screen.onorientationchange")}}
- [The orientation media query](/ko/docs/CSS/Media_queries#orientation)
- [A short introduction to media queries in Firefox 3.5](http://hacks.mozilla.org/2009/06/media-queries/)
