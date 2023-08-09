---
title: 사용자 에이전트를 이용한 브라우저 감지
slug: Web/HTTP/Browser_detection_using_the_user_agent
---

{{HTTPSidebar}}

보통 브라우저마다 다른 웹 페이지 또는 서비스를 제공하는 것은 나쁜 생각입니다. 웹은 사용자가 어떤 브라우저나 디바이스를 사용하고 있는지 개의치 않고 모두에게 접근성이 용이해야 하기 때문입니다. 따라서 특정 브라우저를 타겟으로 개발하는 것보다 가용적인 기능들 (예를 들어 Web API 등)을 이용하여 당신의 웹 사이트를 개선하는 것을 추천합니다.

하지만 브라우저와 웹 표준은 완벽하지 않고 그 간극은 여전히 브라우저 감지 기능을 필요로 합니다. [User-Agent](/ko/docs/Web/HTTP/Headers/User-Agent)를 사용하여 브라우저를 감지하는 것은 간단해 보이지만, 사실 그것을 잘 이용하는 것은 무척 힘든 일입니다. 이 문서는 사용자 에이전트를 이용하여 브라우저를 바르게 감지하도록 안내합니다.

> **참고:** 주의하세요! user agent 정보를 가로채는 것은 좋은 아이디어가 아닙니다. 대부분의 경우 호환성이 뛰어난 좋은 다른 해결방안을 찾을 수 있을 것입니다.

## 브라우저 감지를 하기 전 고려할 것

사용자 에이전트 문자열을 이용해 브라우저를 감지하기 전에 가능하다면 이것을 사용하지 않는 것이 첫 번째입니다. 내가 **왜** 이 기능을 원하는지 다시 한 번 스스로 확인하길 바랍니다.

- 특정 브라우저 버전의 버그를 고치려고 하나요?
  - : 포럼에서 찾아보십시오. 만약 이 버그를 당신이 처음 발견했다면 포럼에 질문을 하십시오. 또한 전문가나 다른 견해를 가진 이들이 이 버그를 해결하는데 도움을 줄 것입니다. 만약 버그가 좀처럼 없는 문제라면 브라우저 제공자의 버그 추적 시스템([Mozilla](https://bugzilla.mozilla.org/), [WebKit](http://bugs.webkit.org/), [Blink](https://www.chromium.org/issue-tracking), [Opera](https://bugs.opera.com/))에 보고된 버그인지 확인하세요.
- 특정 기능의 존재를 확인하려고 하나요?
  - : 당신의 사이트에 몇몇 브라우저에서 아직 지원하지 않은 기능을 사용해야 하고, 해당 유저들을 이전 버전의 웹사이트로 보내고 싶어 하지만 당신은 후에 해당 브라우저에서 해당 기능이 동작할 것이라는걸 압니다. 이것이 사용자 에이전트 탐지를 사용하는 가장 나쁜 이유인데, 결국 다른 브라우저들이 그 문제를 따라잡을 것이기 때문입니다. 이러한 시나리오에서 당신은 가능한 유저 에이전트 탐지를 **절대** 피해야 하고, 대신 언제나 기능탐지를 하는데 최선을 다해야 합니다. 대신 **언제든지** 기능 탐지를 할 수 있는 대체방안이 존재합니다
- 사용하는 브라우저에 따라 다른 HTML을 제공해야 하나요?
  - : 이는 권해드리고 싶지 않지만, 필요에 따른 몇가지 방법이 있습니다. 이러한 상황들일 경우, 우선 브라우저에 따른 다양한 HTML을 사용해야 하는지 결정하기 위해 당신의 상황을 분석할 필요가 있습니다. 당신은 non-semantic인 {{ HTMLElement("div") }} 나 {{ HTMLElement("span") }} 요소를 추가함으로써 이를 방지할 수 있나요? user Agent 감지를 성공적으로 하는 것의 어려움은 몇몇 혼란스러운 HTML을 깨끗하게 바꾸는데 가치가 있습니다. 또한 당신의 디자인에 대해 다시한번 생각해보세요. 브라우저별로 다른 HTML을 사용할 필요성을 없애기 위해 점진적 향상([progressive enhancement](/ko/docs/Glossary/Progressive_Enhancement))이나 가변 레이아웃(fluid layout)을 사용할 수 있나요?

## 사용자 에이전트를 대신할 방법

user agent 감지를 피하는 몇 가지 방법이 있습니다!

- `기능 탐지` 기능 탐지는 어떤 브라우저가 당신의 페이지를 렌더링하는지를 알아내려고 할 때가 아니라, 어떤 특정한 기능을 당신이 사용가능한지를 확인할 때 사용합니다. 그렇지 않다면, 대비책을 사용하세요. 브라우저 간의 차이점을 찾는 몇 안되는 경우에서는 user agent 문자열을 사용하는 대신, 브라우저가 API를 구현하는 방법을 탐지하고 API를 사용하는 방법을 결정하는 테스트를 구현하는 것이 좋습니다. 아래는 기능탐지의 좋은 최신 예시 입니다. 최근 크롬은[experimental lookbehind support to regular expressions](https://www.chromestatus.com/feature/5668726032564224)을 추가했지만, 다른 브라우저들은 이를 지원하지 않습니다. 그러므로 당신은 이와 같이 해야 한다고 잘못 생각하고 있을 것입니다.

```js
// 아래 코드 조각은 한 문자열을 특별한 표기법으로 쪼갭니다.

if (navigator.userAgent.indexOf("Chrome") !== -1) {
  // 네! 이 사용자가 정규표현식의 look-behind 기능을 사용하려는 것
  // 같습니다.
  // /(?&#x3C;=[A-Z])/를 사용하지 마십시오. 정규표현식의
  // look-behind 기능을 지원하지 않는 브라우저에서는 문법오류가
  // 발생할 것입니다. 왜냐하면, 모든 브라우저들은 실제로 실행되지
  // 않는 부분을 포함한 전체 스크립트를 해석하기 때문입니다.
  var camelCaseExpression = new RegExp("(?&#x3C;=[A-Z])");
  var splitUpString = function (str) {
    return ("" + str).split(camelCaseExpression);
  };
} else {
  /_아래 fallback 코드는 성능이 떨어지지만 작동하긴 합니다._/;
  var splitUpString = function (str) {
    return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
  };
}
console.log(splitUpString("fooBare")); // ["fooB", "are"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

위의 코드는 다음과 같은 몇 가지 잘못된 가정을 했습니다.

- 하위 문자열 "Chrome"을 포함하는 모든 사용자 에이전트 문자열은 크롬이라고 가정했습니다. UA 문자열은 틀릴 가능성이 매우 높습니다.
- 정규표현식의 look-behind 기능이 크롬 브라우저에서는 항상 지원될 것이라고 가정했습니다. 하지만 agent가 해당 기능이 지원되기 전인 옛 버전의 크롬일 수도 있고, 당시에는 look-behind는 실험적 기능이었기 때문에, 이를 제거한 버전의 크롬일 수도 있습니다.
- 가장 중요한 점은, 다른 모든 브라우저들이 look-behind를 지원할 것이라고 가정했습니다. 다른 브라우저들도 look-behind 기능을 지원하는 버전이 모두 다를텐데, 이 코드는 이를 무시하고 코드를 진행합니다.

look-behind 지원여부 자체를 테스트함으로써 이 문제들을 회피할 수 있습니다.

```js
var isLookBehindSupported = false;

try {
  new RegExp("(?&#x3C;=)");
  isLookBehindSupported = true;
} catch (err) {
  // agent가 look-behind 기능을 지원하지 않는다면, 위 문법을 사용한
  // RegExp 객체의 생성이 에러를 던질 것이고, isLookBehindSupported는
  // 여전히 false일 것입니다.
}

var splitUpString = isLookBehindSupported
  ? function (str) {
      return ("" + str).split(new RegExp("(?&#x3C;=[A-Z])"));
    }
  : function (str) {
      return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
    };
```

위의 코드가 시범을 보였듯이, user agent를 살펴보지 않고도 어떤 기능에 대한 브라우저 지원 여부를 시험할 수 있는 방법이 **항상** 존재합니다. 기능 지원 여부를 확인하기 위해 user agent 문자열을 확인할 필요가 **전혀** 없습니다.

마지막으로, 위의 코드 조각은 크로스 브라우저 코딩과 관련하여 항상 염두에 두어야만 하는 중요한 이슈를 시사합니다.테스트 중인 API를 해당 기능이 지원되지 않는 브라우저에서 실수로 사용하지 마십시오. 확실하고 단순한 이야기 같지만, 때때로 그렇지 않습니다. 예를 들어, 위의 코드 조각에서, lookbehind 기능을 short-regexp 표기법(예를 들어, /reg/igm)으로 사용한다면, 지원되지 않는 브라우저에서는 파싱 에러가 발생할 것입니다. 따라서, 위의 예제에서, `/(?&#x3C;=look_behind_stuff)/` 대신에 `new RegExp("(?&#x3C;=look_behind_stuff)")`를 사용하는 것이 좋습니다. 심지어 lookbehind가 지원되는 조건분기의 코드에서도 말입니다.

`점진적 향상`이 디자인 테크닉은 여러분의 사이트를 상향식 접근방법으로 "레이어" 형태 개발할 수 있게 해줍니다. 간단한 레이어로 시작하여, 각각이 더 많은 기능을 이용하는 연속적인 레이어를 가진 사이트로 성능을 개선할 수 있습니다.`부드러운 하향`이는 여러분이 원하는 모든 기능이 포함된 최선의 사이트를 만들고 나서 오래된 브라우저들도 지원하게 수정하는 하향식 접근입니다. 점진적 상향 방식보다는 조금 더 어렵기도 하고 덜 효과적이기도 하지만, 몇몇 케이스에서는 유용할 것입니다.

- Progressive enhancement
  - : This design technique involves developing your Web site in 'layers', using a bottom-up approach, starting with a simpler layer and improving the capabilities of the site in successive layers, each using more features.
- Graceful degradation
  - : This is a top-down approach in which you build the best possible site using all the features you want, then tweak it to make it work on older browsers. This can be harder to do, and less effective, than progressive enhancement, but may be useful in some cases.
- Mobile device detection

  - : Arguably the most common use and misuse of user agent sniffing is to detect if the device is a mobile device. However, people too often overlook what they are really after. People use user agent sniffing to detect if the users' device is touch-friendly and has a small screen so they can optimize their website accordingly. While user agent sniffing can sometimes detect these, not all devices are the same: some mobile devices have big screen sizes, some desktops have a small touchscreen, some people use smart TV's which are an entirely different ballgame altogether, and some people can dynamically change the width and height of their screen by flipping their tablet on its side! So, user agent sniffing is definitely not the way to go. Thankfully, there are much better alternatives. Use [Navigator.maxTouchPoints](/ko/docs/Web/API/Navigator/maxTouchPoints) to detect if the user's device has a touchscreen. Then, default back to checking the user agent screen only _if (!("maxTouchPoints" in navigator)) { /\*Code here\*/}_. Using this information of whether the device has a touchscreen, do not change the entire layout of the website just for touch devices: you will only create more work and maintenance for yourself. Rather, add in touch conveniences such as bigger, more easily clickable buttons (you can do this using CSS by increasing the font size). Here is an example of code that increases the padding of #exampleButton to 1em on mobile devices.

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

As for the screen size, use _window\.innerWidth_ and window\.addEventListener("resize", () => { /\*refresh screen size dependent things\*/ }). What you want to do for screen size is not slash off information on smaller screens. That will only annoy people because it will force them to use the desktop version. Rather, try to have fewer columns of information in a longer page on smaller screens while having more columns with a shorter page on larger screen sizes. This effect can be easily achieved using CSS [flexboxes](/ko/docs/Learn/CSS/CSS_layout/Flexbox), sometimes with [floats](/ko/docs/Learn/CSS/CSS_layout/Floats) as a partial fallback.

Also try to move less relevant/important information down to the bottom and group the page's content together meaningfully. Although it is off-topic, perhaps the following detailed example might give you insights and ideas that persuade you to forgo user agent sniffing. Let us imagine a page composed of boxes of information; each box is about a different feline breed or canine breed. Each box has an image, an overview, and a historical fun fact. The pictures are kept to a maximum reasonable size even on large screens. For the purposes of grouping the content meaningfully, all the cat boxes are separated from all the dog boxes such that the cat and dog boxes are not intermixed together. On a large screen, it saves space to have multiple columns to reduce the space wasted to the left and to the right of the pictures. The boxes can be separated into multiple columns via two equally fair method. From this point on, we shall assume that all the dog boxes are at the top of the source code, that all the cat boxes are at the bottom of the source code, and that all these boxes have the same parent element. There a single instance of a dog box immediately above a cat box, of course. The first method uses horizontal [Flexboxes](/ko/docs/Learn/CSS/CSS_layout/Flexbox) to group the content such that when the page is displayed to the end user, all the dogs boxes are at the top of the page and all the cat boxes are lower on the page. The second method uses a [Column](/ko/docs/Web/CSS/Layout_cookbook/Column_layouts) layout and resents all the dogs to the left and all the cats to the right. Only in this particular scenario, it is appropriate to provide no fallback for the flexboxes/multicolumns, resulting in a single column of very wide boxes on old browsers. Also consider the following. If more people visit the webpage to see the cats, then it might be a good idea to put all the cats higher in the source code than the dogs so that more people can find what they are looking for faster on smaller screens where the content collapses down to one column.

Next, always make your code dynamic.
The user can flip their mobile device on its side, changing the width and height of the page.
Or, there might be some weird flip-phone-like device thing in the future where flipping it out extends the screen.
Do not be the developer having a headache over how to deal with the flip-phone-like device thing.
Never be satisfied with your webpage until you can open up the dev tools side panel and resize the screen while the webpage looks smooth, fluid, and dynamically resized.
The simplest way to do this is to separate all the code that moves content around based on screen size to a single function that is called when the page is loaded and at each [resize](/ko/docs/Web/API/Window/resize_event) event thereafter. If there is a lot calculated by this layout function before it determines the new layout of the page, then consider debouncing the event listener such that it is not called as often.
Also note that there is a huge difference between the media queries `(max-width: 25em)`, `not all and (min-width: 25em)`, and `(max-width: 24.99em)`: `(max-width: 25em)` excludes `(max-width: 25em)`, whereas `not all and (min-width: 25em)` includes `(max-width: 25em)`.
`(max-width: 24.99em)` is a poor man's version of `not all and (min-width: 25em)`: do not use `(max-width: 24.99em)` because the layout _might_ break on very high font sizes on very high definition devices in the future.
Always be very deliberate about choosing the right media query and choosing the right >=, <=, >, or < in any corresponding JavaScript because it is very easy to get these mixed up, resulting in the website looking wonky right at the screen size where the layout changes.
Thus, thoroughly test the website at the exact widths/heights where layout changes occur to ensure that the layout changes occur properly.

## Making the best of user agent sniffing

After reviewing all of the above better alternatives to user agent sniffing, there are still some potential cases where user agent sniffing is appropriate and justified.

One such case is using user agent sniffing as a fallback when detecting if the device has a touch screen. See the [Mobile Device Detection](#mobile_device_detection) section for more information.

Another such case is for fixing bugs in browsers that do not automatically update. Internet Explorer (on Windows) and Webkit (on iOS) are two perfect examples. Prior to version 9, Internet Explorer had issues with rendering bugs, CSS bugs, API bugs, and so forth. However, prior to version 9, Internet Explorer was very easy to detect based upon the browser-specific features available. Webkit is a bit worse because Apple forces all of the browsers on IOS to use Webkit internally, thus the user has no way to get a better more updated browser on older devices. Most bugs can be detected, but some bugs take more effort to detect than others. In such cases, it might be beneficial to use user agent sniffing to save on performance. For example, Webkit 6 has a bug whereby when the device orientation changes, the browser might not fire [MediaQueryList](/ko/docs/Web/API/MediaQueryList) listeners when it should. To overcome this bug, observe the code below.

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

## Which part of the user agent contains the information you are looking for?

As there is no uniformity of the different part of the user agent string, this is the tricky part.

### Browser Name

When people say they want "browser detection", often they actually want "rendering engine detection". Do you actually want to detect Firefox, as opposed to SeaMonkey, or Chrome as opposed to Chromium? Or do you actually want to see if the browser is using the Gecko or the WebKit rendering engine? If this is what you need, see further down the page.

Most browsers set the name and version in the format _BrowserName/VersionNumber_, with the notable exception of Internet Explorer. But as the name is not the only information in a user agent string that is in that format, you can not discover the name of the browser, you can only check if the name you are looking for. But note that some browsers are lying: Chrome for example reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string, Chromium often reports itself as Chrome too or Seamonkey sometimes reports itself as Firefox.

Also, pay attention not to use a simple regular expression on the BrowserName, user agents also contain strings outside the Keyword/Value syntax. Safari & Chrome contain the string 'like Gecko', for instance.

| Engine                          | Must contain            | Must not contain               |
| ------------------------------- | ----------------------- | ------------------------------ |
| Firefox                         | `Firefox/xyz`           | `Seamonkey/xyz`                |
| Seamonkey                       | `Seamonkey/xyz`         |                                |
| Chrome                          | `Chrome/xyz`            | `Chromium/xyz`                 |
| Chromium                        | `Chromium/xyz`          |                                |
| Safari                          | `Safari/xyz`            | `Chrome/xyz` or `Chromium/xyz` |
| Opera 15+ (Blink-based engine)  | `OPR/xyz`               |                                |
| Opera 12- (Presto-based engine) | `Opera/xyz`             |                                |
| Internet Explorer 10-           | `; MSIE xyz;`           |                                |
| Internet Explorer 11            | `Trident/7.0; .*rv:xyz` |                                |

\[1] Safari gives two version numbers: one technical in the `Safari/xyz` token, and one user-friendly in a `Version/xyz` token.

Of course, there is absolutely no guarantee that another browser will not hijack some of these things (like Chrome hijacked the Safari string in the past). That's why browser detection using the user agent string is unreliable and should be done only with the check of the version number (hijacking of past versions is less likely).

### Browser version

The browser version is often, but not always, put in the value part of the _BrowserName/VersionNumber_ token in the User Agent String. This is of course not the case for Internet Explorer (which puts the version number right after the MSIE token), and for Opera after version 10, which has added a Version/_VersionNumber_ token.

Here again, be sure to take the right token for the browser you are looking for, as there is no guarantee that others will contain a valid number.

### Rendering engine

As seen earlier, in most cases, looking for the rendering engine is a better way to go. This will help to not exclude lesser known browsers. Browsers sharing a common rendering engine will display a page in the same way: it is often a fair assumption that what will work in one will work in the other.

There are five major rendering engines: Trident, Gecko, Presto, Blink, and WebKit. As sniffing the rendering engines names is common, a lot of user agents added other rendering names to trigger detection. It is therefore important to pay attention not to trigger false-positives when detecting the rendering engine.

| Engine   | Must contain      | Comment                                                                                                                                                                                      |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                              |
| WebKit   | `AppleWebKit/xyz` | Pay attention, WebKit browsers add a 'like Gecko' string that may trigger false positive for Gecko if the detection is not careful.                                                          |
| Presto   | `Opera/xyz`       | **Note:** Presto is no longer used in Opera browser builds >= version 15 (see 'Blink')                                                                                                       |
| Trident  | `Trident/xyz`     | Internet Explorer put this token in the _comment_ part of the User Agent String                                                                                                              |
| EdgeHTML | `Edge/xyz`        | The non-Chromium Edge puts its engine version after the _Edge/_ token, not the application version. **Note:** EdgeHTML is no longer used in Edge browser builds >= version 79 (see 'Blink'). |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                              |

## Rendering engine version

Most rendering engines put the version number in the _RenderingEngine/VersionNumber_ token, with the notable exception of Gecko. Gecko puts the Gecko version number in the comment part of the User Agent after the `rv:` string. From Gecko 14 for the mobile version and Gecko 17 for the desktop version, it also puts this value in the `Gecko/version` token (previous version put there the build date, then a fixed date called the GeckoTrail).

## OS

The Operating System is given in most User Agent strings (although not web-focused platforms like Firefox OS), but the format varies a lot. It is a fixed string between two semicolons, in the comment part of the User Agent. These strings are specific for each browser. They indicate the OS, but also often its version and information on the relying hardware (32 or 64 bits, or Intel/PPC for Mac).

Like in all cases, these strings may change in the future, one should use them only in conjunction with the detection of already released browsers. A technological survey must be in place to adapt the script when new browser versions are coming out.

### Mobile, Tablet or Desktop

The most common reason to perform user agent sniffing is to determine which type of device the browser runs on. The goal is to serve different HTML to different device types.

- Never assume that a browser or a rendering engine only runs on one type of device. Especially don't make different defaults for different browsers or rendering engines.
- Never use the OS token to define if a browser is on mobile, tablet or desktop. The OS may run on more than one type of (for example, Android runs on tablets as well as phones).

The following table summarizes the way common browser vendors indicate that their browsers are running on a mobile device:

| Browser                                                           | Rule                                                                                                                                                                                                                                                 | Example                                                                                                                                                          |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                          | `Mobile` or `Tablet` inside the comment.                                                                                                                                                                                                             | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-based (Android, Safari)                                    | `Mobile Safari` token [outside](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3) the comment. | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-based (Chromium, Google Chrome, Opera 15+, Edge on Android) | `Mobile Safari` token [outside](https://developer.chrome.com/docs/multidevice/user-agent/) the comment.                                                                                                                                              | `Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047` |
| Presto-based (Opera 12-)                                          | `Opera Mobi/xyz` token [inside](https://developers.whatismybrowser.com/useragents/explore/layout_engine_name/presto/) the comment.                                                                                                                   | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Internet Explorer                                                 | `IEMobile/xyz` token in the comment.                                                                                                                                                                                                                 | `Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)`                                                                            |
| Edge on Windows 10 Mobile                                         | `Mobile/xyz` and `Edge/` tokens outside the comment.                                                                                                                                                                                                 | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

In summary, we recommend looking for the string `Mobi` anywhere in the User Agent to detect a mobile device.

> **참고:** If the device is large enough that it's not marked with `Mobi`, you should serve your desktop site (which, as a best practice, should support touch input anyway, as more desktop machines are appearing with touchscreens).
