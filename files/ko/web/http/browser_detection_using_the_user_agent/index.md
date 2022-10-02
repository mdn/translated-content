---
title: 사용자 에이전트를 이용한 브라우저 감지
slug: Web/HTTP/Browser_detection_using_the_user_agent
tags:
  - Compatibility
  - HTTP
  - Web Development
translation_of: Web/HTTP/Browser_detection_using_the_user_agent
original_slug: Web/HTTP/User_agent를_이용한_브라우저_감지
---
<div>{{HTTPSidebar}}</div>

<p>보통 브라우저마다 다른 웹 페이지 또는 서비스를 제공하는 것은 나쁜 생각입니다. 웹은 사용자가 어떤 브라우저나 디바이스를 사용하고 있는지 개의치 않고 모두에게 접근성이 용이해야 하기 때문입니다. 따라서 특정 브라우저를 타겟으로 개발하는 것보다 가용적인 기능들 (예를 들어 Web API 등)을 이용하여 당신의 웹 사이트를 개선하는 것을 추천합니다.</p>

<p>하지만 브라우저와 웹 표준은 완벽하지 않고 그 간극은 여전히 브라우저 감지 기능을 필요로 합니다. <a href="/ko/docs/Web/HTTP/Headers/User-Agent">User-Agent</a>를 사용하여 브라우저를 감지하는 것은 간단해 보이지만, 사실 그것을 잘 이용하는 것은 무척 힘든 일입니다. 이 문서는 사용자 에이전트를 이용하여 브라우저를 바르게 감지하도록 안내합니다.</p>

<div class="note">
<p>주의하세요! user agent 정보를 가로채는 것은 좋은 아이디어가 아닙니다. 대부분의 경우 호환성이 뛰어난 좋은 다른 해결방안을 찾을 수 있을 것입니다.</p>
</div>

<h2 id="브라우저_감지를_하기_전_고려할_것">브라우저 감지를 하기 전 고려할 것</h2>

<p>사용자 에이전트 문자열을 이용해 브라우저를 감지하기 전에 가능하다면 이것을 사용하지 않는 것이 첫 번째입니다. 내가 <strong>왜</strong> 이 기능을 원하는지 다시 한 번 스스로 확인하길 바랍니다.</p>

<dl>
 <dt>특정 브라우저 버전의 버그를 고치려고 하나요?</dt>
 <dd>포럼에서 찾아보십시오. 만약 이 버그를 당신이 처음 발견했다면 포럼에 질문을 하십시오. 또한 전문가나 다른 견해를 가진 이들이 이 버그를 해결하는데 도움을 줄 것입니다. 만약 버그가 좀처럼 없는 문제라면 브라우저 제공자의 버그 추적 시스템(<a href="https://bugzilla.mozilla.org/">Mozilla</a>, <a href="http://bugs.webkit.org/">WebKit</a>, <a href="https://www.chromium.org/issue-tracking">Blink</a>, <a href="https://bugs.opera.com/">Opera</a>)에 보고된 버그인지 확인하세요.</dd>
 <dt>특정 기능의 존재를 확인하려고 하나요?</dt>
 <dd>당신의 사이트에 몇몇 브라우저에서 아직 지원하지 않은 기능을 사용해야 하고, 해당 유저들을 이전 버전의 웹사이트로 보내고 싶어 하지만 당신은 후에 해당 브라우저에서 해당 기능이 동작할 것이라는걸 압니다. 이것이 사용자 에이전트 탐지를 사용하는 가장 나쁜 이유인데, 결국 다른 브라우저들이 그 문제를 따라잡을 것이기 때문입니다. 이러한 시나리오에서 당신은 가능한 유저 에이전트 탐지를 <strong>절대</strong> 피해야 하고, 대신 언제나 기능탐지를 하는데 최선을 다해야 합니다. 대신 <strong>언제든지</strong> 기능 탐지를 할 수 있는 대체방안이 존재합니다</dd>
 <dt>사용하는 브라우저에 따라 다른 HTML을 제공해야 하나요?</dt>
 <dd>이는 권해드리고 싶지 않지만, 필요에 따른 몇가지 방법이 있습니다. 이러한 상황들일 경우, 우선 브라우저에 따른 다양한 HTML을 사용해야 하는지 결정하기 위해 당신의 상황을 분석할 필요가 있습니다. 당신은 non-semantic인  {{ HTMLElement("div") }} 나 {{ HTMLElement("span") }}  요소를 추가함으로써 이를 방지할 수 있나요? user Agent 감지를 성공적으로 하는 것의 어려움은 몇몇 혼란스러운 HTML을 깨끗하게 바꾸는데 가치가 있습니다. 또한 당신의 디자인에 대해 다시한번 생각해보세요. 브라우저별로 다른 HTML을 사용할 필요성을 없애기 위해 점진적 향상(<a href="https://developer.mozilla.org/ko/docs/Glossary/Progressive_Enhancement">progressive enhancement</a>)이나 가변 레이아웃(fluid layout)을 사용할 수 있나요?</dd>
</dl>

<h2 id="사용자_에이전트를_대신할_방법">사용자 에이전트를 대신할 방법</h2>

<p>user agent 감지를 피하는 몇 가지 방법이 있습니다!</p>

<dl>
 <dt>기능 탐지</dt>
 <dd>기능 탐지는 어떤 브라우저가 당신의 페이지를 렌더링하는지를 알아내려고 할 때가 아니라, 어떤 특정한 기능을 당신이 사용가능한지를 확인할 때 사용합니다. 그렇지 않다면, 대비책을 사용하세요. 브라우저 간의 차이점을 찾는 몇 안되는 경우에서는 user agent 문자열을 사용하는 대신, 브라우저가 API를 구현하는 방법을 탐지하고 API를 사용하는 방법을 결정하는 테스트를 구현하는 것이 좋습니다. 아래는 기능탐지의 좋은 최신 예시 입니다. 최근 크롬은<a href="https://www.chromestatus.com/feature/5668726032564224"> experimental lookbehind support to regular expressions</a>을 추가했지만, 다른 브라우저들은 이를 지원하지 않습니다. 그러므로 당신은 이와 같이 해야 한다고 잘못 생각하고 있을 것입니다.</dd>
 <dd>
 <pre class="notranslate">// 아래 코드 조각은 한 문자열을 특별한 표기법으로 쪼갭니다.

if (navigator.userAgent.indexOf("Chrome") !== -1){
    // 네! 이 사용자가 정규표현식의 look-behind 기능을 사용하려는 것
    //  같습니다.
    // /(?&lt;=[A-Z])/를 사용하지 마십시오. 정규표현식의
    //  look-behind 기능을 지원하지 않는 브라우저에서는 문법오류가
    //  발생할 것입니다. 왜냐하면, 모든 브라우저들은 실제로 실행되지
    //  않는 부분을 포함한 전체 스크립트를 해석하기 때문입니다.
    var camelCaseExpression = new RegExp("(?&lt;=[A-Z])");
    var splitUpString = function(str) {
        return (""+str).split(camelCaseExpression);
    };
} else {
    /*아래 fallback 코드는 성능이 떨어지지만 작동하긴 합니다.*/
    var splitUpString = function(str){
        return str.replace(/[A-Z]/g,"z$1").split(/z(?=[A-Z])/g);
    };
}
console.log(splitUpString("fooBare")); // ["fooB", "are"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]</pre>

 <p>위의 코드는 다음과 같은 몇 가지 잘못된 가정을 했습니다.</p>

 <ul>
  <li>하위 문자열 "Chrome"을 포함하는 모든 사용자 에이전트 문자열은 크롬이라고 가정했습니다. UA 문자열은 틀릴 가능성이 매우 높습니다.</li>
  <li>정규표현식의 look-behind 기능이 크롬 브라우저에서는 항상 지원될 것이라고 가정했습니다. 하지만 agent가 해당 기능이 지원되기 전인 옛 버전의 크롬일 수도 있고, 당시에는 look-behind는 실험적 기능이었기 때문에, 이를 제거한 버전의 크롬일 수도 있습니다.</li>
  <li>가장 중요한 점은, 다른 모든 브라우저들이 look-behind를 지원할 것이라고 가정했습니다. 다른 브라우저들도 look-behind 기능을 지원하는 버전이 모두 다를텐데, 이 코드는 이를 무시하고 코드를 진행합니다.</li>
 </ul>

 <p>look-behind 지원여부 자체를 테스트함으로써 이 문제들을 회피할 수 있습니다.</p>

 <pre class="notranslate">var isLookBehindSupported = false;

try {
    new RegExp("(?&lt;=)");
    isLookBehindSupported = true;
} catch (err) {
    // agent가 look-behind 기능을 지원하지 않는다면, 위 문법을 사용한
    // RegExp 객체의 생성이 에러를 던질 것이고, isLookBehindSupported는
    // 여전히 false일 것입니다.
}

var splitUpString = isLookBehindSupported ? function(str) {
    return (""+str).split(new RegExp("(?&lt;=[A-Z])"));
} : function(str) {
    return str.replace(/[A-Z]/g,"z$1").split(/z(?=[A-Z])/g);
};
</pre>

 <p>위의 코드가 시범을 보였듯이, user agent를 살펴보지 않고도 어떤 기능에 대한 브라우저 지원 여부를 시험할 수 있는 방법이 <strong>항상</strong> 존재합니다. 기능 지원 여부를 확인하기 위해 user agent 문자열을 확인할 필요가 <strong>전혀</strong> 없습니다.</p>

 <p>마지막으로, 위의 코드 조각은 크로스 브라우저 코딩과 관련하여 항상 염두에 두어야만 하는 중요한 이슈를 시사합니다.테스트 중인 API를 해당 기능이 지원되지 않는 브라우저에서 실수로 사용하지 마십시오. 확실하고 단순한 이야기 같지만, 때때로 그렇지 않습니다. 예를 들어, 위의 코드 조각에서, lookbehind 기능을 short-regexp 표기법(예를 들어, /reg/igm)으로 사용한다면, 지원되지 않는 브라우저에서는 파싱 에러가 발생할 것입니다. 따라서, 위의 예제에서, <em>/(?&lt;=look_behind_stuff)/</em> 대신에 <em>new RegExp("(?&lt;=look_behind_stuff)")</em>를 사용하는 것이 좋습니다. 심지어 lookbehind가 지원되는 조건분기의 코드에서도 말입니다.</p>
 </dd>
 <dt>점진적 향상</dt>
 <dd>이 디자인 테크닉은 여러분의 사이트를 상향식 접근방법으로 "레이어" 형태 개발할 수 있게 해줍니다. 간단한 레이어로 시작하여, 각각이 더 많은 기능을 이용하는 연속적인 레이어를 가진 사이트로 성능을 개선할 수 있습니다.</dd>
 <dt>부드러운 하향</dt>
 <dd>이는 여러분이 원하는 모든 기능이 포함된 최선의 사이트를 만들고 나서 오래된 브라우저들도 지원하게 수정하는 하향식 접근입니다. 점진적 상향 방식보다는 조금 더 어렵기도 하고 덜 효과적이기도 하지만, 몇몇 케이스에서는 유용할 것입니다.</dd>
 <dt>모바일 장치 감지</dt>
 <dd>Arguably the most common use and misuse of user agent sniffing is to detect if the device is a mobile device. However, what is failed to be accountable is what they're really after. People use user agent sniffing to detect if the users' device is touch-friendly and has a small screen so they can optimize their website accordingly. While user agent sniffing can sometimes detect these, not all devices are the same. Some mobile devices have big screen sizes, some desktops have a small touchscreen, some people use smart TV's which are an entirely different ballgame altogether, some people can dynamically change the width and height of their screen by flipping their tablet on its side! So, user agent sniffing is definitely not the way to go. But, there are much better alternatives. Use <em>Navigator.maxTouchPoints</em> to detect if the user's device has a touchscreen. Then, default back to checking the user agent screen only <em>if (!("maxTouchPoints" in Navigator)) { /*Code here*/}</em>. Using this information of whether the device has a touchscreen, do not change the entire layout of the website just for touch devices: you will only create more work and maintenance for yourself. Rather, add in touch conveniences such as bigger, more easily clickable buttons (you can do this using CSS by simply increasing the font size). As for the screen size, simply use <em>window.innerWidth</em> and <em>window.addEventListener("resize", function(){ /*refresh screen size dependent things*/ })</em>. What you want to do for screen size is not slash off information on smaller screens. That will only annoy people because it will force them to use the desktop version. Rather, try to have fewer columns of information in a longer page on smaller screens while having more columns with a shorter page on larger screen sizes. This effect can be easily achieved using CSS flexboxes. Next, always make your code dynamic. The user can flip their mobile device on its side, changing the width and height of the page. Never be satisfied with your webpage until you can open up the dev tools side panel and resize the screen while the webpage looks smooth, fluid, and dynamically resized.</dd>
</dl>

<h2 id="Which_part_of_the_user_agent_contains_the_information_you_are_looking_for">Which part of the user agent contains the information you are looking for</h2>

<p>As there is no uniformity of the different part of the user agent string, this is the tricky part.</p>

<h3 id="브라우저_이름">브라우저 이름</h3>

<p>사람들이 "브라우저 감시(browser detection)"을 원한다고 말할 때, 실제로 대부분 그들은 "렌더링 엔진 탐지(rendering engine detection)"를 원합니다. Do you actually want to detect Firefox, as opposed to SeaMonkey, or Chrome as opposed to Chromium? Or do you actually simply want to see if the browser is using the Gecko or the WebKit rendering engine? If this is what you need, see further down the page.</p>

<p>Most browser set the name and version in the format <em>BrowserName/VersionNumber</em>, with the notable exception of Internet Explorer. But as the name is not the only information in a user agent string that is in that format, you can not discover the name of the browser, you can only check if the name you are looking for. But note that some browsers are lying: Chrome for example reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string, Chromium often reports itself as Chrome too or Seamonkey sometimes reports itself as Firefox.</p>

<p>Also pay attention not to use a simple regular expression on the BrowserName, user agents also contain strings outside the Keyword/Value syntax. Safari &amp; Chrome contain the string 'like Gecko', for instance.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col">반드시 포함</th>
   <th scope="col">반드시 포함하지 않음</th>
   <th scope="col"></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Firefox</td>
   <td>Firefox/xyz</td>
   <td>Seamonkey/xyz</td>
   <td></td>
  </tr>
  <tr>
   <td>Seamonkey</td>
   <td>Seamonkey/xyz</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>Chrome</td>
   <td>Chrome/xyz</td>
   <td>Chromium/xyz</td>
   <td></td>
  </tr>
  <tr>
   <td>Chromium</td>
   <td>Chromium/xyz</td>
   <td></td>
   <td></td>
  </tr>
  <tr>
   <td>Safari</td>
   <td>Safari/xyz</td>
   <td>Chrome/xyz or Chromium/xyz</td>
   <td>Safari gives two version number, one technical in the Safari/xyz token, one user-friendly in a Version/xyz token</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>
    <p>OPR/xyz <sup>[1]</sup></p>

    <p>Opera/xyz <sup>[2]</sup></p>
   </td>
   <td></td>
   <td>
    <p><sup>[1]</sup>  Opera 15+ (Blink-based engine) </p>

    <p><sup>[2]</sup> Opera 12- (Presto-based engine)</p>
   </td>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>; MSIE xyz;</td>
   <td></td>
   <td>Internet Explorer doesn't put its name in the <em>BrowserName/VersionNumber</em> format</td>
  </tr>
 </tbody>
</table>

<p>Of course, there is absolutely no guarantee that another browser will not hijack some of these things (like Chrome hijacked the Safari string in the past). That's why browser detection using the user agent string is unreliable and should be done only with the check of version number (hijacking of past versions is less likely).</p>

<h3 id="브라우저_버전">브라우저 버전</h3>

<p>The browser version is often, but not always, put in the value part of the <em>BrowserName/VersionNumber</em> token in the User Agent String. This is of course not the case for Internet Explorer (which puts the version number right after the MSIE token), and for Opera after version 10, which has added a Version/<em>VersionNumber</em> token.</p>

<p>Here again, be sure to take the right token for the browser you are looking for, as there is no guarantee that others will contain a valid number.</p>

<h3 id="렌더링_엔진">렌더링 엔진</h3>

<p>As seen earlier, in most cases, looking for the rendering engine is a better way to go. This will help to not exclude lesser known browsers. Browsers sharing a common rendering engine will display a page in the same way: it is often a fair assumption that what will work in one will work in the other.</p>

<p>There are five major rendering engines: Trident, Gecko, Presto, Blink and WebKit. As sniffing the rendering engines names is common, a lot of user agents added other rendering names to trigger detection. It is therefore important to pay attention not to trigger false-positives when detecting the rendering engine.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"></th>
   <th scope="col">반드시 포함</th>
   <th scope="col"></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Gecko</td>
   <td>Gecko/xyz</td>
   <td></td>
  </tr>
  <tr>
   <td>WebKit</td>
   <td>AppleWebKit/xyz</td>
   <td>Pay attention, WebKit browsers add a 'like Gecko' string that may trigger false positive for Gecko if the detection is not careful.</td>
  </tr>
  <tr>
   <td>Presto</td>
   <td>Opera/xyz</td>
   <td><strong>Note:</strong> Presto is no longer used in Opera browser builds &gt;= version 15 (see 'Blink')</td>
  </tr>
  <tr>
   <td>Trident</td>
   <td>Trident/xyz</td>
   <td>Internet Explorer put this token in the <em>comment</em> part of the User Agent String</td>
  </tr>
  <tr>
   <td>Blink</td>
   <td>Chrome/xyz</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="렌더링_엔진_버전">렌더링 엔진 버전</h2>

<p>Most rendering engine put the version number in the <em>RenderingEngine/VersionNumber</em> token, with the notable exception of Gecko. Gecko puts the Gecko version number in the comment part of the User Agent after the <code>rv:</code> string. From Gecko 14 for the mobile version and Gecko 17 for the desktop version, it also puts this value in the <code>Gecko/version</code> token (previous version put there the build date, then a fixed date called the GeckoTrail).</p>

<h2 id="운영체제">운영체제</h2>

<p>The Operating System is given in most User Agent strings (although not web-focussed platforms like Firefox OS), but the format varies a lot. It is a fixed string between two semi-colons, in the comment part of the User Agent. These strings are specific for each browsers. They indicates the OS, but also often its version and information on the relying hardware (32 or 64 bits, or Intel/PPC for Mac).</p>

<p>Like in all cases, these strings may change in the future, one should use them only in conjunction for the detection of already released browsers. A technological survey must be in place to adapt the script when new browser versions are coming out.</p>

<h3 id="모바일_태블릿_데스크톱">모바일, 태블릿, 데스크톱</h3>

<p>The most common reason to perform user agent sniffing is to determine which type of device the browser runs on. The goal is to serve different HTML to different device types.</p>

<ul>
 <li>Never assume that a browser or a rendering engine only runs on one type of device. Especially don't make different defaults for different browsers or rendering engines.</li>
 <li>Never use the OS token to define if a browser is on mobile, tablet or desktop. The OS may run on more than one type of (for example, Android runs on tablets as well as phones).</li>
</ul>

<p>The following table summarizes the way major browser vendors indicate that their browsers are running on a mobile device:</p>

<table>
 <caption>Common browsers User Agent strings</caption>
 <thead>
  <tr>
   <th scope="col">브라우저</th>
   <th scope="col">규칙</th>
   <th scope="col">예제</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Mozilla (Gecko, Firefox)</td>
   <td><a href="/en-US/docs/Gecko_user_agent_string_reference"><strong>Mobile</strong> or <strong>Tablet</strong> token</a> in the comment.</td>
   <td>Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0</td>
  </tr>
  <tr>
   <td>WebKit-based (Android, Safari)</td>
   <td><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3"><strong>Mobile Safari</strong> token</a> outside the comment.</td>
   <td>Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30</td>
  </tr>
  <tr>
   <td>Blink-based (Chromium, Google Chrome, Opera 15+)</td>
   <td><a href="https://developers.google.com/chrome/mobile/docs/user-agent"><strong>Mobile Safari</strong> token</a> outside the comment</td>
   <td>Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047</td>
  </tr>
  <tr>
   <td>Presto-based (Opera 12-)</td>
   <td>
    <p><a href="http://my.opera.com/community/openweb/idopera/"><strong>Opera Mobi/xyz</strong> token</a> in the comment (Opera 12-)</p>
   </td>
   <td>
    <p>Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50</p>
   </td>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td><strong>IEMobile/xyz</strong> token in the comment.</td>
   <td>Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)</td>
  </tr>
 </tbody>
</table>

<p>In summary, we recommend looking for the string “Mobi” anywhere in the User Agent to detect a mobile device.</p>

<div class="note">
<p>If the device is large enough that it's not marked with “Mobi”, you should serve your desktop site (which, as a best practice, should support touch input anyway, as more desktop machines are appearing with touchscreens).</p>
</div>
