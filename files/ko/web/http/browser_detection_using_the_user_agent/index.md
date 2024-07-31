---
title: 사용자 에이전트를 사용한 브라우저 감지
slug: Web/HTTP/Browser_detection_using_the_user_agent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTTPSidebar}}

브라우저별로 다른 웹 페이지 또는 서비스를 제공하는 것은 일반적으로 좋지 않은 생각입니다. 웹은 사용하는 브라우저나 장치에 관계없이 모든 사람이 접근할 수 있도록 만들어졌습니다. 특정 브라우저를 대상으로 하기보다는 기능의 가용성을 기반으로 웹사이트를 점진적으로 개선하도록 웹사이트를 개발하는 방법이 있습니다.

그러나 브라우저와 표준은 완벽하지 않으며 브라우저 감지가 필요한 일부 극단적인 경우가 여전히 있습니다. 사용자 에이전트를 사용하여 브라우저를 감지하는 것은 간단해 보이지만, 이를 잘 수행하는 것은 사실 매우 어려운 문제입니다. 이 문서는 이 작업을 가능한 한 정확하게 수행하도록 안내합니다.

> [!NOTE]
> 다시 반복할 가치가 있습니다. 사용자 에이전트 탐지를 사용하는 것은 거의 좋은 생각이 아닙니다. 문제를 해결하기 위해 거의 항상 더 좋고 더 광범위하게 호환되는 방법을 찾을 수 있습니다!

## 브라우저 감지를 사용하기 전 고려 사항

어떤 브라우저가 사용되고 있는지 감지하기 위해 사용자 에이전트 문자열 사용을 고려할 때, 첫 번째 단계는 가능하면 이 방법은 피하는 것입니다. 그 작업을 하고 싶은 **이유**를 파악하는 것부터 시작하세요.

- 일부 브라우저 버전의 특정 버그를 해결하려고 하시나요?
  - : 전문 포럼에서 보거나 질문하세요. 당신이 이 문제에 처음으로 직면할 가능성은 거의 없습니다. 또한, 전문가나 다른 관점을 가진 사람들이 버그 해결을 위한 아이디어를 제공할 수 있습니다. 문제가 흔하지 않은 것 같다면, 이 버그가 버그 추적 시스템을 통해 브라우저 공급업체에 보고되었는지 확인하는 것이 좋습니다([Mozilla](https://bugzilla.mozilla.org); [WebKit](https://bugs.webkit.org); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). 브라우저 제조업체는 버그 보고서에 주의를 기울이고 있으며, 분석을 통해 버그에 대한 다른 해결 방법에 대한 힌트를 얻을 수 있습니다.
- 특정 기능이 있는지 확인하려고 하시나요?
  - : 당신의 사이트는 일부 브라우저가 아직 지원하지 않는 특정 웹 기능을 사용해야 하며, 해당 사용자를 기능은 적지만 작동할 것으로 알고 있는 이전 웹 사이트로 보내고 싶습니다. 이는 결국 다른 모든 브라우저가 따라잡을 가능성이 높기 때문에 사용자 에이전트 감지를 사용하는 최악의 이유입니다. 또한, 덜 널리 사용되는 브라우저를 모두 테스트하고 해당 웹 기능을 테스트하는 것은 실용적이지 않습니다. 사용자 에이전트 스니핑을 **절대** 수행해서는 안 됩니다. 대신 기능 감지를 수행하는 대안이 **항상** 있습니다.
- 어떤 브라우저를 사용하는지에 따라 다른 HTML을 제공하고 싶으신가요?
  - : 이는 일반적으로 나쁜 습관이지만, 일부 경우에는 이것이 필요합니다. 이런 경우에는, 먼저 상황을 분석하여 정말 필요한지 확인해야 합니다. 의미가 없는 {{ HTMLElement("div") }} 또는 {{ HTMLElement("span") }} 요소를 추가해 이를 예방할 수 있나요? 사용자 에이전트 감지를 성공적으로 사용하기에 어려움이 있는 부분은 HTML의 순수성을 위배할 수 있습니다. 또한, 디자인을 다시 생각해보세요. 점진적인 향상이나 유동적인 레이아웃을 사용하여 이러한 작업을 수행할 필요성을 제거할 수 있나요?

## 사용자 에이전트 감지 방지

사용자 에이전트 감지를 사용하지 않으려면, 옵션이 있습니다!

- 기능 감지

  - : 기능 감지는 어떤 브라우저가 페이지를 렌더링하는지 알아내려는 것이 아니라, 필요한 특정 기능을 사용할 수 있는지 확인하는 것입니다. 그렇지 않은 경우, 대체 방법을 사용합니다. 브라우저마다 동작이 다른 드문 경우에는 사용자 에이전트 문자열을 확인하는 대신, 브라우저가 API를 구현하는 방법을 감지하고 이를 사용하는 방법을 결정하는 테스트를 구현해야 합니다. 기능 감지의 예제는 다음과 같습니다. 2017년에, Chrome [정규식에서 플래그가 지정되지 않은 실험적 뒤돌아보기 지원](https://chromestatus.com/feature/5668726032564224), 하지만 다른 브라우저는 이를 지원하지 않았습니다. 따라서 다음과 같이 생각했을 수도 있습니다.

```js
// 이 코드 조각은 문자열을 특수 표기법으로 분할합니다.
let splitUpString;
if (navigator.userAgent.includes("Chrome")) {
  // 넵! 사용자가 Look-Behind 정규 표현식을 지원하는 것으로 의심됩니다.
  // /(?<=[A-Z])/를 사용하지 마세요.
  // look-behind 표현식을 지원하지 않는 브라우저에서는 구문 오류가 발생합니다.
  // 모든 브라우저는 실행되지 않은 코드 섹션을 포함하여 전체 스크립트를 구문 분석하기 때문입니다.
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // 이 대체 코드는 성능이 훨씬 떨어지지만 작동합니다.
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

위의 코드는 몇 가지 잘못된 가정을 했을 것입니다.
먼저, 하위 문자열 'Chrome'을 포함하는 모든 사용자 에이전트 문자열이 Chrome이라고 가정합니다. UA 문자열은 오해의 소지가 있는 것으로 악명이 높습니다.
그런 다음, 브라우저가 Chrome인 경우 lookbehind 기능을 항상 사용할 수 있다고 가정했습니다. 에이전트는 지원이 추가되기 전의 이전 버전의 Chrome일 수도 있고, (당시 기능이 실험적이었기 때문에) 이를 제거한 최신 버전의 Chrome일 수도 있습니다.
가장 중요한 점은 다른 브라우저가 이 기능을 지원하지 않을 것이라고 가정했다는 것입니다. 언제든지 다른 브라우저에 지원이 추가될 수 있지만, 이 코드는 계속해서 열등한 경로를 선택했을 것입니다.

이와 같은 문제는 대신 기능 자체의 지원을 테스트하여 피할 수 있습니다.

```js
let isLookBehindSupported = false;

try {
  new RegExp("(?<=)");
  isLookBehindSupported = true;
} catch (err) {
  // 에이전트가 look behinds를 지원하지 않는 경우, 해당 구문을 사용하여 RegExp 객체를 만들려고 하면
  // isLookBehindSupported가 false로 유지됩니다.
}

const splitUpString = isLookBehindSupported
  ? (str) => String(str).split(new RegExp("(?<=[A-Z])"))
  : (str) =>
      String(str)
        .split(/(.*?[A-Z])/)
        .filter(Boolean);

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

위 코드에서 알 수 있듯이, 사용자 에이전트 스니핑 없이 브라우저 지원을 **항상** 테스트하는 방법이 있습니다. 이에 대해, 사용자 에이전트 문자열을 확인할 이유가 **절대** 없습니다.

마지막으로, 위의 코드 조각은 항상 고려해야 하는 크로스 브라우저 코딩과 관련된 중요한 문제를 가져옵니다. 지원되지 않는 브라우저에서 테스트 중인 API를 실수로 사용하지 마세요. 이는 명백하고 단순하게 들릴 수도 있지만, 때로는 그렇지 않습니다. 예를 들어, 위의 코드 조각에서 짧은 정규식 표기법(예: /reg/igm)으로 lookbehind를 사용하면 지원되지 않는 브라우저에서 구문 분석 오류가 발생합니다. 그러므로, 위의 예시에서는, 코드의 lookbehind 지원 섹션에서도 대신에 _/(?<=look_behind_stuff)/_ 대신 _new RegExp("(?<=look_behind_stuff)");_ 를 사용합니다.

- 점진적인 향상
  - : 이 디자인 기술에는 상향식 접근 방식을 사용하여 '레이어'에서 웹 사이트를 개발하고, 단순한 레이어에서 시작하여 각각 더 많은 기능을 사용하는 연속적인 레이어에서 사이트 기능을 향상시키는 작업이 포함됩니다.
- 우아한 저하
  - : 이는 원하는 모든 기능을 사용하여 최상의 사이트를 구축하는 하향식 접근 방식입니다, 그런 다음 이전 브라우저에서 작동하도록 조정하세요. 이는 점진적인 향상보다 수행하기 어렵고 덜 효과적일 수 있지만, 어떤 경우에는 유용할 수 있습니다.
- 모바일 장치 감지
  - : 사용자 에이전트 스니핑의 가장 일반적인 사용 및 오용은 장치가 모바일 장치인지 감지하는 것입니다. 그러나, 사람들은 자신이 실제로 추구하는 것이 무엇인지 너무 자주 간과합니다. 사람들은 사용자 에이전트 스니핑을 사용하여 사용자의 장치가 터치에 적합하고 화면이 작은지 감지하여, 이에 따라 웹사이트를 최적화할 수 있습니다. 사용자 에이전트 스니핑이 때때로 이를 감지할 수 있지만, 모든 장치가 동일한 것은 아닙니다. 일부 모바일 장치는 화면 크기가 크고, 일부 데스크탑에는 작은 터치스크린이 있고, 일부 사람들은 전혀 다른 스마트 TV를 사용하며, 일부 사람들은 태블릿을 옆으로 뒤집어 화면의 너비와 높이를 동적으로 변경할 수 있습니다! 따라서, 사용자 에이전트 스니핑은 확실히 좋은 방법이 아닙니다. 다행이도, 훨씬 더 나은 대안이 있습니다. [Navigator.maxTouchPoints](/ko/docs/Web/API/Navigator/maxTouchPoints)를 사용하여 사용자 기기에 터치스크린이 있는지 확인하세요. 그런 다음, 기본적으로 (!("maxTouchPoints" in navigator)) { /\*코드는 여기에 있습니다\*/}인 경우에만 사용자 에이전트 화면만 확인하는 것으로 다시 돌아갑니다. 기기에 터치스크린이 있는지 여부에 대한 정보를 사용하여, 터치 기기에 대해서만 웹사이트의 전체 레이아웃을 변경하지 마세요. 당신은 자신을 위해 더 많은 작업과 유지 관리를 생성하게 될 것입니다. 오히려, 더 크고 쉽게 클릭할 수 있는 버튼(CSS를 사용하면 글꼴 크기를 늘릴 수 있음)과 같은 터치 편의성을 추가하세요. 다음은 모바일 장치에서 #exampleButton의 패딩을 1em으로 늘리는 코드의 예입니다.

```js
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

if (hasTouchScreen) {
  document.getElementById("exampleButton").style.padding = "1em";
}
```

화면 크기는, 'window\.innerWidth' 및 window\.addEventListener("resize", () => { /\*화면 크기에 따라 새로고침\*/ })을 사용하세요. 화면 크기에 대해 원하는 것은 작은 화면의 정보를 잘라내는 것이 아닙니다. 데스크톱 버전을 사용하도록 강요하기 때문에, 사람들을 짜증나게 할 뿐입니다. 오히려, 작은 화면에서는 긴 페이지에 더 적은 수의 정보 열을 두고, 큰 화면에서는 더 짧은 페이지에 더 많은 열을 두는 것이 좋습니다. 이 효과는 CSS [flexbox](/ko/docs/Learn/CSS/CSS_layout/Flexbox)를 사용하여 쉽게 얻을 수 있습니다, 때로는 함께 부분 대체로서 [floats](/ko/docs/Learn/CSS/CSS_layout/Floats)도 사용합니다.

또한, 관련성이 낮거나 중요한 정보를 아래쪽으로 옮기고 페이지 콘텐츠를 의미 있게 그룹화하세요. 주제에서 벗어난 내용이지만, 다음의 자세한 예는 사용자 에이전트 스니핑을 중단하도록 설득하는 통찰력과 아이디어를 제공할 수 있습니다. 정보 상자로 구성된 페이지를 상상해 봅시다. 각 상자는 다른 고양이 품종 또는 개 품종에 관한 것입니다. 각 상자에는 이미지, 개요 및 역사적으로 재미있는 사실이 포함되어 있습니다. 사진은 대형 화면에서도 최대한 적당한 크기로 유지됩니다. 콘텐츠를 의미있게 그룹화하기 위해, 고양이 상자와 개 상자가 서로 섞이지 않도록 모든 고양이 상자와 개 상자를 분리합니다. 큰 화면에서는, 여러 개의 열을 배치하여 사진의 왼쪽과 오른쪽에 낭비되는 공간을 줄여, 공간을 절약합니다. 상자는 두 가지 균일한 공정한 방법을 통해 여러 열로 분리될 수 있습니다. 이 시점부터 우리는 모든 강아지 상자가 소스 코드의 상단에 있고, 모든 고양이 상자가 소스 코드의 하단에 있으며, 이 모든 상자가 동일한 부모 요소를 가지고 있다고 가정해봅시다. 물론 고양이 상자 바로 위에 강아지 상자가 하나 있습니다. 첫 번째 방법은 수평 [Flexbox](/ko/docs/Learn/CSS/CSS_layout/Flexbox)를 사용하여 페이지가 최종 사용자에게 표시될 때 모든 강아지 상자가 상단에 오도록 콘텐츠를 그룹화합니다. 페이지와 모든 고양이 상자는 페이지 아래쪽에 있습니다. 두 번째 방법은 [Column](/ko/docs/Web/CSS/Layout_cookbook/Column_layouts) 레이아웃을 사용하고 모든 강아지는 왼쪽으로, 모든 고양이는 오른쪽으로 보냅니다. 이 특정 시나리오에서만 flexbox/다중 열에 대한 대체 동작을 제공하지 않는 것이 적절하므로 이전 브라우저에서는 매우 넓은 상자의 단일 열이 생성됩니다. 또한 다음 상황을 고려하세요. 더 많은 사람들이 고양이를 보기 위해 웹페이지를 방문한다면, 소스 코드에서 개보다 고양이를 모두 상위에 배치하여 더 많은 사람들이 콘텐츠가 한 열 아래로 축소되는 작은 화면에서 원하는 것을 더 빨리 찾을 수 있도록 하는 게 좋습니다.

다음으로, 항상 코드를 동적으로 만들어주세요.
사용자는 모바일 장치를 옆으로 뒤집어 페이지의 너비와 높이를 변경할 수 있습니다.
또는, 나중에 뒤집어서 화면을 확장하는 이상한 플립폰 같은 장치가 있을 수도 있습니다.
플립폰 같은 장치를 어떻게 처리할지 고민하는 개발자가 되지 마세요.
웹페이지가 부드럽고, 유연하며, 동적으로 크기가 조정되는 동안 개발 도구 측면 패널을 열고 화면 크기를 조정할 수 있을 때까지 웹페이지에 만족하지 마세요.
할 수 있는 가장 간단한 방법은 화면 크기에 따라 콘텐츠를 이동하는 모든 코드를 페이지가 로드될 때와 그 후의 각 [resize](/ko/docs/Web/API/Window/resize_event) 이벤트에서 호출되는 단일 함수로 분리하는 것입니다. 페이지의 새 레이아웃을 결정하기 전에 이 레이아웃 함수로 계산된 양이 많은 경우 이벤트 리스너가 자주 호출되지 않도록 디바운싱을 고민해보세요.
또한 미디어 쿼리 `(max-width: 25em)`, `not all and (min-width: 25em)` 및 `(max-width: 24.99em)` 사이에는 큰 차이가 있습니다. `(max-width: 25em)`는 `(max-width: 25em)`을 제외하는 반면, `not all and (min-width: 25em)`는 `(max-width: 25em)`를 포함합니다.
`(max-width: 24.99em)`는 `not all and (min-width: 25em)`의 좋지 않은 버전입니다. `(max-width: 24.99em)`를 사용하지 마세요. 향후 초고화질 기기에서 매우 큰 글꼴 크기로 인해 레이아웃이 '깨질 수' 있기 때문입니다.
올바른 미디어 쿼리를 선택하고 해당 JavaScript에서 올바른 >=, <=, >, 또는 <를 선택하는 데 있어 항상 주의를 기울이세요. 이러한 항목이 혼란을 주기 쉽고, 레이아웃이 변경되는 화면 크기에 따라 웹 사이트가 이상하게 보일 수 있기 때문입니다.
따라서, 레이아웃 변경이 발생하는 정확한 너비/높이에서 웹사이트를 철저하게 테스트하여 레이아웃 변경이 제대로 발생하는지 확인하세요.

## 사용자 에이전트 스니핑을 최대한 활용하기

위의 사용자 에이전트 스니핑에 대한 더 나은 대안을 모두 검토한 후에도, 사용자 에이전트 스니핑이 적절하고 정당한 잠재적인 경우가 여전히 있습니다.

그러한 사례 중 하나는 장치에 터치 스크린이 있는지 감지할 때 대체 수단으로 사용자 에이전트 스니핑을 사용하는 것입니다. 자세한 내용은 [모바일 장치 감지](#mobile_device_detection) 섹션을 참조하세요.

또 다른 사례는 자동으로 업데이트되지 않는 브라우저의 버그를 수정하는 것입니다. Webkit(iOS)이 완벽한 예시로 들 수 있습니다. Apple은 IOS의 모든 브라우저가 내부적으로 Webkit을 사용하도록 강제하므로, 사용자는 이전 장치에서 더 나은 업데이트된 브라우저를 얻을 수 없습니다. 대부분의 버그는 감지할 수 있지만 일부 버그는 다른 버그보다 감지하는 데 더 많은 노력이 필요합니다. 이러한 경우 성능을 절약하기 위해, 사용자 에이전트 스니핑을 사용하는 것이 도움이 될 수 있습니다. 예를 들어, Webkit 6에는 장치 방향이 변경될 때 브라우저가 [MediaQueryList](/ko/docs/Web/API/MediaQueryList) 리스너를 실행해야 할 때 실행하지 않을 수 있는 버그가 있습니다. 이 버그를 극복하려면 아래 코드를 확인해주세요.

```js
const UA = navigator.userAgent;
const isWebkit =
  /\b(iPad|iPhone|iPod)\b/.test(UA) &&
  /WebKit/.test(UA) &&
  !/Edge/.test(UA) &&
  !window.MSStream;

let mediaQueryUpdated = true;
const mqL = [];

function whenMediaChanges() {
  mediaQueryUpdated = true;
}

const listenToMediaQuery = isWebkit
  ? (mQ, f) => {
      if (/height|width/.test(mQ.media)) {
        mqL.push([mQ, f]);
      }
      mQ.addListener(f);
      mQ.addListener(whenMediaChanges);
    }
  : () => {};

const destroyMediaQuery = isWebkit
  ? (mQ) => {
      for (let i = 0; i < mqL.length; i++) {
        if (mqL[i][0] === mQ) {
          mqL.splice(i, 1);
        }
      }
      mQ.removeListener(whenMediaChanges);
    }
  : listenToMediaQuery;

let orientationChanged = false;
addEventListener(
  "orientationchange",
  () => {
    orientationChanged = true;
  },
  PASSIVE_LISTENER_OPTION,
);

addEventListener("resize", () =>
  setTimeout(() => {
    if (orientationChanged && !mediaQueryUpdated) {
      for (let i = 0; i < mqL.length; i++) {
        mqL[i][1](mqL[i][0]);
      }
    }
    mediaQueryUpdated = orientationChanged = false;
  }, 0),
);
```

## 사용자 에이전트의 어느 부분에 찾고 있는 정보가 포함되어 있나요?

사용자 에이전트 문자열의 다른 부분에서는 균일성이 없기 때문에, 이것이 까다로운 부분입니다.

### 브라우저 이름 및 버전

사람들이 "브라우저 감지"를 원한다고 하면, 실제로는 "렌더링 엔진 감지"를 원하는 경우가 많습니다. 실제로 SeaMonkey가 아닌 Firefox를 감지하고 싶거나 Chromium이 아닌 Chrome을 감지하고 싶나요? 아니면 브라우저가 Gecko 또는 WebKit 렌더링 엔진을 사용하고 있는지 실제로 확인하고 싶나요? 필요하면 페이지 아래를 참조하세요.

대부분의 브라우저는 'BrowserName/VersionNumber' 형식으로 이름과 버전을 설정합니다. 그러나 이름은 해당 형식의 사용자 에이전트 문자열에 있는 유일한 정보가 아니기 때문에, 브라우저 이름을 찾을 수 없고, 찾고 있는 이름이 맞는지만 확인할 수 있습니다. 그러나 일부 브라우저는 거짓말을 하고 있습니다. 예를 들어, Chrome은 Chrome과 Safari 모두 보고합니다. 따라서 Safari를 감지하려면 Safari 문자열과 Chrome 문자열이 없는지 확인해야 합니다. Chromium은 종종 자신을 Chrome으로 보고하거나 Seamonkey는 때때로 자신을 Firefox로 보고합니다.

또한, BrowserName에 간단한 정규식을 사용하지 않도록 주의하세요. 사용자 에이전트에는 키워드/값 구문 외부의 문자열도 포함되어 있습니다. 예를 들어, Safari와 Chrome에는 'like Gecko'라는 문자열이 포함되어 있습니다.

| 엔진                         | 반드시 포함해야 함 | 다음을 포함하면 안 됨          |
| ---------------------------- | ------------------ | ------------------------------ |
| Firefox                      | `Firefox/xyz`      | `Seamonkey/xyz`                |
| Seamonkey                    | `Seamonkey/xyz`    |                                |
| Chrome                       | `Chrome/xyz`       | `Chromium/xyz` or `Edg.*/xyz`  |
| Chromium                     | `Chromium/xyz`     |                                |
| Safari                       | `Safari/xyz`       | `Chrome/xyz` or `Chromium/xyz` |
| Opera 15+ (Blink 기반 엔진)  | `OPR/xyz`          |                                |
| Opera 12- (Presto 기반 엔진) | `Opera/xyz`        |                                |

\[1] Safari는 두 가지 버전 번호를 제공합니다. 하나는 기술적인 `Safari/xyz` 토큰이고, 다른 하나는 사용자 친화적인 `Version/xyz` 토큰입니다.

물론, 다른 브라우저가 이러한 기능 중 일부를 가로채지 않을 것이라는 보장은 전혀 없습니다(과거 Chrome이 Safari 문자열을 가로챈 것처럼). 그렇기 때문에 사용자 에이전트 문자열을 사용한 브라우저 감지는 신뢰할 수 없으며, 버전 번호를 확인한 후에만 수행해야 합니다(이전 버전을 가로챌 가능성이 적음).

### 렌더링 엔진

앞서 살펴본 것처럼, 대부분의 경우, 렌더링 엔진을 찾는 것이 더 나은 방법입니다. 이는 덜 알려진 브라우저를 제외하지 않는 데 도움이 됩니다. 공통 렌더링 엔진을 공유하는 브라우저는 동일한 방식으로 페이지를 표시합니다. 즉, 한 페이지에서 작동하는 것이 다른 브라우저에서도 작동할 것이라는 공정한 가정인 경우가 많습니다.

Blink, Gecko 및 WebKit의 세 가지 활성 주요 렌더링 엔진이 있습니다. 렌더링 엔진 이름을 스니핑하는 것이 일반적이기 때문에, 많은 사용자 에이전트가 감지를 트리거하기 위해 다른 렌더링 이름을 추가했습니다. 따라서 렌더링 엔진을 감지할 때 거짓 긍정을 유발하지 않도록 주의하는 것이 중요합니다.

| 엔진     | 반드시 포함해야 함 | 설명                                                                                                                                                                                           |
| -------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`       |                                                                                                                                                                                                |
| Gecko    | `Gecko/xyz`        |                                                                                                                                                                                                |
| WebKit   | `AppleWebKit/xyz`  | 주의하세요, WebKit 브라우저는 감지가 부주의할 경우 Gecko에 대한 오탐지를 유발할 수 있는 'like Gecko' 문자열을 추가합니다.                                                                      |
| Presto   | `Opera/xyz`        | **참고:** Presto는 더 이상 Opera 브라우저 빌드 버전 15 이하에서 사용되지 않습니다('Blink' 참조)                                                                                                |
| EdgeHTML | `Edge/xyz`         | Chromium이 아닌 Edge는 애플리케이션 버전이 아닌 '_Edge/_' 토큰 뒤에 연진 버전을 배치합니다. **참고:** EdgeHTML은 Edge 브라우저 빌드 버전 79 이하에서 더 이상 사용되지 않습니다 ('Blink' 참조). |

## 엔진 버전 렌더링

대부분의 렌더링 엔진은 Gecko를 제외하고 'RenderingEngine/VersionNumber' 토큰에 버전 번호를 넣습니다. Gecko는 `rv:` 문자열 뒤의 사용자 에이전트 주석 부분에 Gecko 버전 번호를 넣습니다. 모바일 버전용 Gecko 14와 데스크톱 버전용 Gecko 17에서는 이 값을 'Gecko/version' 토큰에도 넣습니다(이전 버전에서는 빌드 날짜를 넣은 다음 GeckoTrail이라는 고정 날짜를 넣었습니다)

## 운영체제

운영 체제는 대부분의 사용자 에이전트 문자열에 제공되지만(Firefox OS와 같은 웹 중심 플랫폼은 아님) 형식이 많이 다릅니다. 사용자 에이전트의 주석 부분에 있는 두 개의 세미콜론 사이에 있는 고정 문자열입니다. 이러한 문자열은 각 브라우저마다 다릅니다. 이는 OS뿐만 아니라 해당 버전과 관련 하드웨어(32비트 또는 64비트 또는 Mac용 Intel/PPC)에 대한 정보도 나타냅니다.

모든 경우와 마찬가지로, 이러한 문자열은 향후 변경될 수 있으므로, 이미 출시된 브라우저를 감지하는 경우에만 사용해야 합니다. 새 브라우저 버전이 출시되면 스크립트를 조정하기 위한 기술 조사가 이루어져야 합니다.

### 모바일, 태블릿 또는 데스크톱

사용자 에이전트 스니핑을 수행하는 가장 일반적인 이유는 브라우저가 실행되는 장치 타입을 확인하는 것입니다. 목표는 다양한 장치 타입에 다양한 HTML을 제공하는 것입니다.

- 브라우저나 렌더링 엔진이 한 가지 타입의 장치에서만 실행된다고 가정하지 마세요. 특히 브라우저나 렌더링 엔진마다 기본값을 다르게 설정하지 마세요.
- 브라우저가 모바일, 태블릿 또는 데스크톱에 있는지 정의하기 위해 OS 토큰을 사용하지 마세요. OS는 두 가지 이상의 타입에서 실행될 수 있습니다(예, Android는 휴대폰뿐만 아니라 태블릿에서도 실행됨)

다음 표에는 일반 브라우저 공급업체가 해당 브라우저가 모바일 장치에서 실행되고 있음을 나타내는 방식이 요약되어 있습니다.

| 브라우저                                                         | 규칙                                                                                                                                                                                                                                        | 예시                                                                                                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                         | 설명 안에 `Mobile` 또는 `Tablet`.                                                                                                                                                                                                           | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit 기반 (Android, Safari)                                    | 설명 [외부의](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3) `Mobile Safari` 토큰. | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink 기반 (Chromium, Google Chrome, Opera 15+, Edge on Android) | 설명 [외부의](https://developer.chrome.com/docs/multidevice/user-agent/)`Mobile Safari` 토큰                                                                                                                                                | `Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047` |
| Presto 기반 (Opera 12-)                                          | 설명 [내부에](https://developers.whatismybrowser.com/useragents/explore/layout_engine_name/presto/) `Opera Mobi/xyz` 토큰                                                                                                                   | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge on Windows 10 Mobile                                        | 설명 외부에 `Mobile/xyz` 및 `Edge/` 토큰                                                                                                                                                                                                    | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

요약하자면, 모바일 장치를 감지하려면 사용자 에이전트 어디에서나 `Mobi` 문자열을 찾는 것이 좋습니다.

> [!NOTE]
> 장치가 `Mobi`로 표시되지 않을 만큼 충분히 큰 경우, 데스크톱 사이트를 제공해야 합니다 (더 많은 데스크톱 컴퓨터가 터치 스크린을 사용하므로 어쨌든 터치 입력을 지원하는 것이 가장 좋습니다).
