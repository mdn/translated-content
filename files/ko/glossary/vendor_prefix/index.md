---
title: 공급업체 접두사 (Vendor Prefix)
slug: Glossary/Vendor_Prefix
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

브라우저 공급자는 개발자가 새로운 아이디어를 실험할 수 있도록 실험적이거나 비표준 CSS 속성과 JavaScript API에 접두사를 추가하곤 했습니다. 이 방법은 이론적으로 표준화 과정에서 실험이 의존성을 가지게 되고 웹 개발자의 코드가 손상되는 것을 방지하는 데 도움이 되었습니다.

웹 개발자는 실험적 성격에도 불구하고 프로덕션 웹 사이트에 접두사 기능을 포함했습니다. 이로 인해 브라우저 공급자가 새로운 기능을 개발하는 동안 호환성을 보장하기가 더욱 어려워졌습니다. 접두사가 붙은 기능을 포함하면 인기 있는 웹사이트를 렌더링하기 위해, 다른 브라우저의 접두사를 추가해야 하는 소규모 브라우저 공급자에도 피해를 주었습니다.

이제, 브라우저의 실험적 기능은 플래그 뒤에 위치합니다.
이를 통해 개발자는 브라우저 구성을 변경하여 향후 기능을 테스트할 수 있습니다. 또한, 브라우저는 사용자가 제어하는 플래그 또는 기본 설정 뒤에 실험적 기능을 추가합니다. 더 작은 명세서에 대해 플래그를 추가하면 훨씬 더 빠르게 안정적인 상태에 도달할 수 있습니다.

## CSS 접두사

이전 코드 베이스에서 볼 수 있는 가장 일반적인 브라우저 CSS 접두사는 아래와 같습니다.

- `-webkit-` (Chrome, Safari, 최신 버전의 Opera 및 Edge, 거의 모든 iOS 브라우저(iOS용 Firefox), 기본적으로 모든 WebKit 및 Chromium 기반 브라우저)
- `-moz-` (Firefox)
- `-o-` (WebKit 이전의 오래된 Opera 버전)
- `-ms-` (인터넷 익스플로러 및 Chromium 이전 Microsoft Edge)

예제 사용법입니다.

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

코드 베이스에서 위 코드를 발견하면 마지막 줄을 제외하고 모두 안전하게 제거할 수 있습니다. 모든 브라우저는 공급자 접두사 없이 [전환](/ko/docs/Web/CSS/transition#browser_compatibility)을 지원합니다.

```css
transition: all 4s ease;
```

## API 접두사

역사적으로, 브라우저 공급자는 실험적인 API에도 접두사를 사용해 왔습니다. 전체 인터페이스가 실험적이라면 인터페이스 이름이 접두어로 붙습니다(그러나 내부의 속성이나 메서드는 붙지 않습니다). 실험적인 속성이나 방법이 표준화된 인터페이스에 추가된 경우, 개별 방법이나 속성이 앞에 붙었습니다.

### 인터페이스 접두사

인터페이스 이름의 접두사는 대문사입니다.

- `WebKit` (Chrome, Safari, 최신 버전의 Opera 및 Edge, 거의 모든 iOS 브라우저(iOS용 Firefox), 기본적으로 모든 WebKit 및 Chromium 기반 브라우저)
- `Moz` (Firefox)
- `O` (WebKit 이전의 오래된 Opera 버전)
- `MS` (인터넷 익스플로러 및 Chromium 이전 Microsoft Edge)

### 속성 및 메서드 접두사

속성과 메서드의 접두사는 소문자입니다.

- `webkit` (Chrome, Safari, 최신 버전의 Opera 및 Edge, 거의 모든 iOS 브라우저(iOS용 Firefox), 기본적으로 모든 WebKit 및 Chromium 기반 브라우저)
- `moz` (Firefox)
- `o` (WebKit 이전의 오래된 Opera 버전)
- `ms` (인터넷 익스플로러 및 Chromium 이전 Microsoft Edge)

예제 사용법입니다.

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

코드베이스에서 위 코드를 발견하면, 첫 번째 줄을 제외한 모든 줄을 안전하게 제거할 수 있습니다. 모든 브라우저는 공급자 접두사 및 `window` 없이 [`requestAnimationFrame`](/ko/docs/Web/API/Window/requestAnimationFrame#browser_compatibility)을 지원합니다.

```js
requestAnimationFrame(callback);
```

## 같이 보기

- 위키백과의 [브라우저 접두사](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes)
