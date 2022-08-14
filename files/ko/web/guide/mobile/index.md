---
title: Mobile Web Development
slug: Web/Guide/Mobile
tags:
  - Intermediate
  - NeedsExample
  - NeedsTranslation
  - TopicStub
translation_of: Web/Guide/Mobile
---
<p>이 페이지에는 모바일 기기에서도 잘 작동하는 웹 사이트를 디자인하기 위한 몇 가지의 방법과 노하우가 담겨 있습니다. Mozilla Firefox OS 프로젝트에 대한 정보를 찾고 계신다면, <a href="/en/Mozilla/Firefox_OS" title="Boot to Gecko">Firefox OS</a> 페이지를 참고하세요. 아니면 <a href="/en/Mozilla/Firefox_for_Android" title="Firefox for Android">Firefox for Android</a>에 대한 자세한 정보를 찾아보실 수도 있습니다.</p>

<p>We've organized it into two sections, <a href="#Designing_for_mobile_devices">designing for mobile devices</a> and <a href="#Cross-browser_development">cross-browser compatibility</a>. Also see Jason Grlicky's guide to <a href="/en-US/docs/Web_Development/Mobile/Mobile-friendliness" title="/en-US/docs/Web_Development/Mobile/Mobile-friendliness">mobile-friendliness</a> for web developers.</p>

<h2 id="모바일_기기를_위한_디자인">모바일 기기를 위한 디자인</h2>

<p>Mobile devices have quite different hardware characteristics compared with desktop or laptop computers. Their screens are usually smaller, obviously, but they also usually automatically switch the screen orientation between portrait and landscape mode as the user rotates the device. They usually have touch screens for user input. APIs like geolocation or orientation are either not supported on desktops or are much less useful, and these APIs give mobile users new ways to interact with your site.</p>

<h3 id="작은_화면에_대응하기">작은 화면에 대응하기</h3>

<p><a href="/en-US/docs/Web/Guide/Responsive_design" title="/en-US/docs/Web/Guide/Responsive_design">Responsive Web Design</a> is a term for a set of techniques that enables your web site to adapt its layout as its viewing environment — most obviously, the size and orientation of the screen — changes. It includes techniques such as:</p>

<ul>
 <li>fluid CSS layouts, to make the page adapt smoothly as the browser window size changes</li>
 <li>the use of <a href="/en/CSS/Media_queries" title="en/CSS/Media_queries">media queries</a> to conditionally include CSS rules appropriate for the device screen <a href="/en/CSS/Media_queries#width" title="en/CSS/Media_queries#width">width</a> and <a href="/en/CSS/Media_queries#height" title="en/CSS/Media_queries#height">height</a></li>
</ul>

<p>The <a href="/en/Mobile/Viewport_meta_tag" title="en/Mobile/Viewport_meta_tag">viewport meta tag</a> instructs the browser to display your site at the appropriate scale for the user's device.</p>

<h3 id="터치_스크린에_대응하기">터치 스크린에 대응하기</h3>

<p>터치 스크린을 사용하려면 당신은 <a href="/en/DOM/Touch_events" title="en/DOM/Touch_events">DOM 터치 이벤트</a>에 대해서 배워야 합니다. You won't be able to use the <a href="/En/CSS/:hover" title="En/CSS/:hover">CSS :hover</a> pseudo-class, and will need to design clickable items like buttons to respect the fact that fingers are fatter than mouse pointers. See this article on <a class="external" href="https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/">designing for touch screens</a>.</p>

<p><a href="/en/CSS/Media_queries#-moz-touch-enabled" title="en/CSS/Media_queries#-moz-touch-enabled">-moz-touch-enabled</a> 미디어 쿼리를 이용해 터치를 사용할 수 있는 기기에서 다른 CSS 파일을 불러들일 수도 있습니다.</p>

<h3 id="이미지_최적화하기">이미지 최적화하기</h3>

<p>네트워크 속도가 느리거나 비용이 비싼 기기를 사용하는 사용자들을 위해, 디바이스 화면 크기와 해상도에 맞게 최적화된 이미지를 불러들이게 할 수 있습니다. You do this in CSS by querying for screen <a href="/en/CSS/Media_queries#height" title="en/CSS/Media_queries#height">height</a>, <a href="/en/CSS/Media_queries#width" title="en/CSS/Media_queries#width">width</a>, and <a href="/en/CSS/Media_queries#-moz-device-pixel-ratio" title="en/CSS/Media_queries#-moz-device-pixel-ratio">pixel ratio</a>.</p>

<p>You can also make use of CSS properties to implement visual effects like <a href="/en/CSS/Using_CSS_gradients" title="en/CSS/Using_CSS_gradients">gradients</a> and <a href="/En/CSS/Box-shadow" title="En/CSS/Box-shadow">shadows</a> without images.</p>

<h3 id="모바일_API">모바일 API</h3>

<p>Finally, you can take advantage of the new possibilities offered by mobile devices, such as <a href="/en/Detecting_device_orientation" title="en/Detecting_device_orientation">orientation</a> and <a href="/En/Using_geolocation" title="En/Using_geolocation">geolocation</a>.</p>

<h2 id="크로스_브라우저_개발">크로스 브라우저 개발</h2>

<h3 id="크로스_브라우저_코드_작성하기">크로스 브라우저 코드 작성하기</h3>

<p>다양한 모바일 브라우저에서 잘 작동하는 웹 사이트를 만들기 위해서는 다음 내용을 알아두셔야 합니다. :</p>

<ul>
 <li>벤더별 접두어(vendor-prefix)가 사용된 CSS 프로퍼티 등 특정 브라우저에서만 작동하는 기능 사용을 배제할 것.</li>
 <li>그러한 특정 기능을 사용해야 하는 경우, 다른 브라우저에서도 그러한 기능이 구현되어 있는지 확인할 것. 그러한 기능이 있다면, 그 브라우저에 대한 지원도 목표로 할 것.</li>
 <li>다른 브라우저에서 그러한 특정 기능이 지원되지 않는다면, 그런 브라우저들을 위해 납득 가능한 대체재(fallback)를 만들어 둘 것.</li>
</ul>

<p>For example, if you set a gradient as a background for some text using a vendor-prefixed property like <code>-webkit-linear-gradient</code>, it's best to include the other vendor-prefixed versions of the <a href="/en/CSS/linear-gradient" title="en/CSS/linear-gradient">linear-gradient</a> property. If you don't do that, at least make sure that the default background contrasts with the text: that way, the page will at least be usable in a browser which is not targeted by your <code>linear-gradient</code> rule.</p>

<p>See this <a href="/en/CSS/CSS_Reference/Mozilla_Extensions" title="en/CSS/CSS_Reference/Mozilla_Extensions">list of Gecko-specific properties</a>, and this list of <a href="/en/CSS/CSS_Reference/Webkit_Extensions" title="en/CSS/CSS_Reference/Webkit_Extensions">WebKit-specific properties</a>, and Peter Beverloo's <a class="external" href="http://peter.sh/experiments/vendor-prefixed-css-property-overview/">table of vendor-specific properties</a>.</p>

<p>Using tools like <a class="external" href="http://csslint.net/">CSS Lint</a> can help find problems like this in code, and preprocessors like <a class="external" href="http://sass-lang.com/">SASS</a> and <a class="external" href="http://lesscss.org/">LESS</a> can help you to produce cross-browser code.</p>

<h3 id="Take_care_with_user_agent_sniffing">Take care with user agent sniffing</h3>

<p>It's preferable for web sites to detect specific device features such as screen size and touch screens using the techniques listed above, and adapt themselves accordingly. But sometimes this is impractical, and web sites resort to parsing the browser's user agent string to try to distinguish between desktops, tablets, and phones, to serve different content to each type of device.</p>

<p>If you do this, make sure your algorithm is correct, and you aren't serving the wrong type of content to a device because you don't understand a particular browser's user agent string. See this <a href="/en/Browser_detection_using_the_user_agent#Mobile.2C_Tablet_or_Desktop" title="browser detection using the user agent">guide to using the user agent string to determine device type</a>.</p>

<h3 id="다양한_브라우저에서_테스트하기">다양한 브라우저에서 테스트하기</h3>

<p>Test your web site on multiple browsers. This means testing on multiple platforms — at least iOS and Android.</p>

<ul>
 <li>test mobile Safari on the iPhone using the <a class="link-https" href="https://developer.apple.com/devcenter/ios/index.action">iOS simulator</a></li>
 <li>test Opera and Firefox using the <a class="link-https" href="https://developer.android.com/sdk/index.html">Android SDK</a>. See these additional instructions for <a class="link-https" href="https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator">running Firefox for Android using the Android emulator</a>.</li>
</ul>
