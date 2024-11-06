---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 948ade920e17ec0b9351e2d1983ec6fec79d87d2
---

{{CSSRef}}

**`env()`** [CSS](/ko/docs/Web/CSS) [함수](/ko/docs/Web/CSS/CSS_Functions)는 {{cssxref("var", "var()")}} 함수나 [사용자 정의 속성](/ko/docs/Web/CSS/--*)과 비슷한 방법으로 환경 변수에 정의된 값을 CSS에 삽입할 때 사용할 수 있습니다. 환경 변수와 사용자 정의 속성의 차이점은 환경 변수는 작성자가 아닌 사용자 에이전트에 의해 정의되며 문서 전체에 전역적으로 적용된다는 점입니다. 반면 사용자 정의 속성은 선언된 요소(들)로 적용 범위가 제한됩니다.

또한 선언 밖에서 사용될 수는 없는 사용자 정의 속성들과는 달리, `env()` 함수는 속성값 또는 설명자의 어떤 부분에서도 사용될 수 있습니다. (예시. [미디어쿼리 규칙](/ko/docs/Web/CSS/@media)). 명세가 발전하면서, 선택자와 같은 다른 곳들에서도 사용될 수 있습니다.

원래는 iOS 브라우저에서 개발자가 뷰포트의 안전 영역에 컨텐츠를 배치할 수 있도록 제공된 `safe-area-inset-*` 값은 사양에 정의된 것처럼 비사각형 화면을 사용하는 사용자들에게도 컨텐츠가 보이도록 돕는데 사용될 수 있습니다.

예를 들어, `env()`로 해결되는 흔한 문제 중 하나는 기기 알림이 앱의 사용자 인터페이스 일부를 가리는 것입니다. 고정된 요소들의 위치를 지정할 때 `env()`를 사용함으로써 요소들이 뷰포트의 안전 영역에 표시되도록 할 수 있습니다.

`env()` 변수를 사용하는 다른 용례는 전체 어플리케이션 창 표면 영역을 이용하기 위해 Window Controls Overlay 기능을 사용하는 데스크탑 [프로그레시브 웹 앱들](/ko/docs/Web/Progressive_web_apps) (PWAs)입니다. `titlebar-area-*` 값을 사용해 타이틀 바가 있었을 위치에 요소들을 배치하고, 컨텐츠가 창 제어 버튼을 가리지 않도록 할 수 있습니다.

## 문법

```css
/* 대체값 없이 네 가지 안전 영역의 인셋(inset) 값 사용하기  */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* 대체값과 함께 사용하기 */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### 값

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : `safe-area-inset-*` 변수들은 네 개의 환경 변수로, 비사각형 화면의 형태로 인해 내용이 잘려 보일 위험 없이 컨텐츠를 안전하게 배치할 수 있는 뷰포트의 가장자리로부터 상단, 우측, 하단, 좌측을 기준으로 하는 사각형을 정의합니다. 사각형 뷰포트, 예를 들어 평균적인 노트북 모니터에서는 그들의 값은 0과 같습니다. 비사각형 디스플레이 — 예를 들어 둥근 시계면과 같은 경우 — 사용자 에이전트에 의해 설정된 네 가지 값은 사각형을 형성하며, 이 사각형 안에 있는 모든 컨텐츠가 보이도록 합니다.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : `titlebar-area-*` 변수는 데스크탑 장치에 설치된 PWA에서 유용합니다. 데스크탑 PWA가 `window-controls-overlay` [display_override](/ko/docs/Web/Manifest/display_override) 값을 사용할 때, `titlebar-area-*` 변수를 사용하면 컨텐츠가 창 제어 버튼(예시. 최소화, 최대화, 닫기)과 겹치지 않도록 보장할 수 있습니다.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : `keyboard-inset-*` 변수는 화면에 표시되는 가상 키보드의 모습에 대한 정보를 제공합니다. 그들은 뷰포트의 가장자리로부터 상단, 우측, 하단, 좌측 인셋에 의해 사각형을 정의합니다 (너비와 높이 인셋은 다른 인셋들로부터 계산됩니다). 더 알아보려면 {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}를 참고해 주세요.

> [!NOTE]
> 다른 CSS 속성들과는 달리, 사용자 에이전트에 의해 정의된 속성 이름들은 대소문자를 구별합니다.

### 형식 구문

{{CSSSyntax}}

## 사용

브라우저에게 화면에 있는 전체 사용 가능 공간을 사용하도록 지시하고, 이를 통해 `env()` 변수들을 사용할 수 있게 하려면 새로운 뷰포트 메타 값을 추가해야 합니다.

```html
<meta name="viewport" content="viewport-fit=cover" />
```

그런 다음 CSS에서 `env()`를 사용할 수 있습니다.

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

## 예시

### 기기 UI에 의해 버튼이 가려지지 않도록 env()를 사용하기

이 예시에서는 고정된 앱 툴바 버튼이 화면 하단의 기기 알림에 의해 가려지지 않도록 하기 위해 `env()` 를 사용했습니다. `safe-area-inset-bottom`은 데스크탑에서는 `0`입니다. 하지만 iOS처럼 화면 하단에서 알림을 표시하는 기기에서는 알람을 표시될 공간을 남겨두는 값을 포함합니다. 이를 {{cssxref("padding-bottom")}} 의 값으로 사용해 장치에서 자연스러운 간격을 만들 수 있습니다.

```html
<main>여기에 앱의 메인 컨텐츠가 배치됩니다</main>
<footer>
  <button>이곳으로 가기</button>
  <button>또는 이곳으로 가기</button>
</footer>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
  /* 초기 패딩값 1em에 safe-area-inset-bottom 값을 더합니다.
  이 변수가 양의 값을 갖는 기기에서는 더 큰 검정 영역이 노출될 것입니다. */
  position: sticky;
  bottom: 0;
}

button {
  padding: 1em;
  background: white;
  color: black;
  margin: 0;
  width: 100%;
  border: none;
  font: 1em system-ui;
}
```

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### 대체값 사용하기

아래 예시는 `env()`의 선택적 두 번째 매개변수를 활용하며, 이를 통해 환경 변수가 사용 가능하지 않은 경우 대체 값을 제공할 수 있습니다.

```html
<p>
  만약 <code>env()</code> 함수가 지원되는 브라우저라면 이 문단의 텍스트는 왼쪽
  테두리와의 사이에 50px의 패딩을 가지게 됩니다 — 하지만 상단, 오른쪽, 그리고
  하단은 아닙니다. 이는 동반된 CSS가 <code>padding: 0 0 0 50px</code>와 동일하기
  때문인데, 그 이유는 다른 CSS 속성들과 달리 사용자 에이전트 속성 이름들은
  대소문자를 구분하기 때문입니다.
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### 값 예시들

```css
/* 모든 사각형 유저 에이전트에 대해 0입니다 */
padding: env(safe-area-inset-bottom, 50px);

/* 유저 에이전트 속성은 대소문자를 구분하기 때문에 50px이 됩니다 */
padding: env(Safe-area-inset-bottom, 50px);

/* x는 유효한 환경 변수가 아니므로 '50px 20px'이 설정됩니다 */
padding: env(x, 50px 20px);

/* '50px, 20px'은 유효한 패딩값이 아니며 x 또한 유효한 환경 변수가 아니기 때문에 무시됩니다  */
padding: env(x, 50px, 20px);
```

대체 값의 문법은 다른 사용자 정의 속성들과 마찬가지로 쉼표를 허용합니다. 하지만 속성값이 쉼표를 지원하지 않는 경우, 그 값은 유효하지 않습니다.

> [!NOTE]
> 유저 에이전트 속성들은 [all](/ko/docs/Web/CSS/all) 속성에 의해 초기화되지 않습니다.

## env() 를 사용해 데스크탑 PWA에서 컨텐츠가 창 제어 버튼에 의해 가려지지 않도록 보장하기

다음 예제에서 `env()`는 [Window Controls Overlay API](/ko/docs/Web/API/Window_Controls_Overlay_API)를 사용하는 데스크탑 프로그레시브 웹 앱에 표시되는 컨텐츠가 운영체제의 창 제어 버튼에 의해 가려지지 않도록 보장합니다. `titlebar-area-*` 값들은 일반적으로 타이틀 바가 표시되었을 위치에 사각형을 정의합니다. 휴대용 기기들처럼 Window Controls Overlay 기능을 지원하지 않는 기기들에서는 대체 값들이 사용됩니다.

데스크탑 기기에 설치된 PWA는 일반적으로 다음과 같은 모습입니다.

![창 제어 버튼, 타이틀 바, 타이틀 바 아래에 웹 컨텐츠를 갖는 데스크탑 PWA의 일반적인 모습](desktop-pwa-window.png)

Window Controls Overlay 기능을 사용하면 웹 콘텐츠가 전체 앱 창 표면 영역을 커버하며, 창 제어 버튼과 PWA 버튼이 오버레이로 표시됩니다.

![Window Controls Overlay 기능이 있는 데스크탑에 설치된 PWA가 어떻게 보이는지에 대한 그림으로, 창 제어 버튼이 있고 타이틀 바가 없으며, 웹 콘텐츠가 전체 창을 아우르고 있습니다](desktop-pwa-window-wco.png)

```html
<header>앱의 제목이 이곳에 옵니다</header>
<main>앱의 주요 컨텐츠가 이곳에 옵니다</main>
```

```css
header {
  position: fixed;
  left: env(titlebar-area-x);
  top: env(titlebar-area-y);
  width: env(titlebar-area-width);
  height: env(titlebar-area-height);
}

main {
  margin-top: env(titlebar-area-height);
}
```

> **참고:** `position:fixed` 를 사용하면 헤더가 나머지 컨텐츠와 함께 스크롤되지 않고, 탄성 오버스크롤(rubber banding 으로도 알려져 있습니다)을 지원하는 기기/브라우저에서도 창 제어 버튼과 정렬되어 유지됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{CSSxRef("var", "var(…)")}}
- [CSS custom properties for cascading variables](/ko/docs/Web/CSS/CSS_cascading_variables) module
- [Custom properties (`--*`): CSS variables](/ko/docs/Web/CSS/--*)
- [Using CSS custom properties (variables)](/ko/docs/Web/CSS/Using_CSS_custom_properties)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/articles/window-controls-overlay)
- [Display content in the title bar](https://docs.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
