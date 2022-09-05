---
title: Mobile Web Development
slug: Web/Guide/Mobile
---
이 페이지에는 모바일 기기에서도 잘 작동하는 웹 사이트를 디자인하기 위한 몇 가지의 방법과 노하우가 담겨 있습니다. Mozilla Firefox OS 프로젝트에 대한 정보를 찾고 계신다면, [Firefox OS](/en/Mozilla/Firefox_OS) 페이지를 참고하세요. 아니면 [Firefox for Android](/en/Mozilla/Firefox_for_Android)에 대한 자세한 정보를 찾아보실 수도 있습니다.

We've organized it into two sections, [designing for mobile devices](#Designing_for_mobile_devices) and [cross-browser compatibility](#Cross-browser_development). Also see Jason Grlicky's guide to [mobile-friendliness](/ko/docs/Web_Development/Mobile/Mobile-friendliness) for web developers.

## 모바일 기기를 위한 디자인

Mobile devices have quite different hardware characteristics compared with desktop or laptop computers. Their screens are usually smaller, obviously, but they also usually automatically switch the screen orientation between portrait and landscape mode as the user rotates the device. They usually have touch screens for user input. APIs like geolocation or orientation are either not supported on desktops or are much less useful, and these APIs give mobile users new ways to interact with your site.

### 작은 화면에 대응하기

[Responsive Web Design](/ko/docs/Web/Guide/Responsive_design) is a term for a set of techniques that enables your web site to adapt its layout as its viewing environment — most obviously, the size and orientation of the screen — changes. It includes techniques such as:

- fluid CSS layouts, to make the page adapt smoothly as the browser window size changes
- the use of [media queries](/en/CSS/Media_queries) to conditionally include CSS rules appropriate for the device screen [width](/en/CSS/Media_queries#width) and [height](/en/CSS/Media_queries#height)

The [viewport meta tag](/en/Mobile/Viewport_meta_tag) instructs the browser to display your site at the appropriate scale for the user's device.

### 터치 스크린에 대응하기

터치 스크린을 사용하려면 당신은 [DOM 터치 이벤트](/en/DOM/Touch_events)에 대해서 배워야 합니다. You won't be able to use the [CSS :hover](/ko/docs/CSS/:hover) pseudo-class, and will need to design clickable items like buttons to respect the fact that fingers are fatter than mouse pointers. See this article on [designing for touch screens](https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/).

[-moz-touch-enabled](/en/CSS/Media_queries#-moz-touch-enabled) 미디어 쿼리를 이용해 터치를 사용할 수 있는 기기에서 다른 CSS 파일을 불러들일 수도 있습니다.

### 이미지 최적화하기

네트워크 속도가 느리거나 비용이 비싼 기기를 사용하는 사용자들을 위해, 디바이스 화면 크기와 해상도에 맞게 최적화된 이미지를 불러들이게 할 수 있습니다. You do this in CSS by querying for screen [height](/en/CSS/Media_queries#height), [width](/en/CSS/Media_queries#width), and [pixel ratio](/en/CSS/Media_queries#-moz-device-pixel-ratio).

You can also make use of CSS properties to implement visual effects like [gradients](/ko/docs/CSS/Using_CSS_gradients) and [shadows](/ko/docs/CSS/Box-shadow) without images.

### 모바일 API

Finally, you can take advantage of the new possibilities offered by mobile devices, such as [orientation](/en/Detecting_device_orientation) and [geolocation](/ko/docs/Using_geolocation).

## 크로스 브라우저 개발

### 크로스 브라우저 코드 작성하기

다양한 모바일 브라우저에서 잘 작동하는 웹 사이트를 만들기 위해서는 다음 내용을 알아두셔야 합니다. :

- 벤더별 접두어(vendor-prefix)가 사용된 CSS 프로퍼티 등 특정 브라우저에서만 작동하는 기능 사용을 배제할 것.
- 그러한 특정 기능을 사용해야 하는 경우, 다른 브라우저에서도 그러한 기능이 구현되어 있는지 확인할 것. 그러한 기능이 있다면, 그 브라우저에 대한 지원도 목표로 할 것.
- 다른 브라우저에서 그러한 특정 기능이 지원되지 않는다면, 그런 브라우저들을 위해 납득 가능한 대체재(fallback)를 만들어 둘 것.

For example, if you set a gradient as a background for some text using a vendor-prefixed property like `-webkit-linear-gradient`, it's best to include the other vendor-prefixed versions of the [linear-gradient](/en/CSS/linear-gradient) property. If you don't do that, at least make sure that the default background contrasts with the text: that way, the page will at least be usable in a browser which is not targeted by your `linear-gradient` rule.

See this [list of Gecko-specific properties](/en/CSS/CSS_Reference/Mozilla_Extensions), and this list of [WebKit-specific properties](/en/CSS/CSS_Reference/Webkit_Extensions), and Peter Beverloo's [table of vendor-specific properties](http://peter.sh/experiments/vendor-prefixed-css-property-overview/).

Using tools like [CSS Lint](http://csslint.net/) can help find problems like this in code, and preprocessors like [SASS](http://sass-lang.com/) and [LESS](http://lesscss.org/) can help you to produce cross-browser code.

### Take care with user agent sniffing

It's preferable for web sites to detect specific device features such as screen size and touch screens using the techniques listed above, and adapt themselves accordingly. But sometimes this is impractical, and web sites resort to parsing the browser's user agent string to try to distinguish between desktops, tablets, and phones, to serve different content to each type of device.

If you do this, make sure your algorithm is correct, and you aren't serving the wrong type of content to a device because you don't understand a particular browser's user agent string. See this [guide to using the user agent string to determine device type](/en/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop).

### 다양한 브라우저에서 테스트하기

Test your web site on multiple browsers. This means testing on multiple platforms — at least iOS and Android.

- test mobile Safari on the iPhone using the [iOS simulator](https://developer.apple.com/devcenter/ios/index.action)
- test Opera and Firefox using the [Android SDK](https://developer.android.com/sdk/index.html). See these additional instructions for [running Firefox for Android using the Android emulator](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator).
