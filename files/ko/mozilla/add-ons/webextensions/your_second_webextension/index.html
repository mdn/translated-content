---
title: Your second extension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---
<div>{{AddonSidebar}}
<p><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">Your first extension</a> 장을 읽었다면, 확장앱을 만드는 법을 알게 되었을 것이다. 이번 장에서는 몇개의 API를 사용하는 약간 더 복잡한 확장앱을 만들어볼 것이다.</p>

<p>이 확장앱은 파이어폭스 툴바에 새로운 버튼을 추가한다. 사용자가 이 버튼을 클릭하면 동물을 선택하는 팝업을 보여준다. 동물을 선택하면 현재 웹페이지의 내용을 선택한 동물 이미지로 변경한다.</p>

<p>구현내용:</p>

<ul>
 <li><strong>파이어폭스 툴바에 추가된 버튼의 <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_action">browser action</a>을 정의한다. </strong><br>
  버튼을 위해 필요한것:
  <ul>
   <li>"beasts-32.png" 아이콘</li>
   <li>버튼을 누를때 나오는 팝업. 이 팝업은 HTML과 CSS, 자바스크립트로 구성된다.</li>
  </ul>
 </li>
 <li><strong>애드온 메니저에 보여질 확장앱 아이콘을 정의한다.</strong></li>
 <li><strong>웹페이지에 주입될 "beastify.js"라는 content script를 작성한다. </strong><br>
  이것이 실제로 웹페이지를 변경할 코드이다.</li>
 <li><strong>웹페이지를 변경할 동물 이미지를 패키징한다.</strong><br>
  이미지를 "웹 접근 가능 자원"으로 만들어 웹페이지에서 참조 하게 한다.</li>
</ul>

<p>확장앱의 구조를 표현하면 아래와 같다:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13671/Untitled-1.png" style="display: block; height: 1200px; margin-left: auto; margin-right: auto; width: 860px;"></p>

<p>간단한 확장앱이지만 WebExtensions API의 기본 개념을 잘 보여줍니다.</p>

<ul>
 <li>툴바에 버튼 추가</li>
 <li>팝업에 쓰일 HTML, CSS, 자바스크립트 정의</li>
 <li>웹페이지에 content scripts 주입</li>
 <li>컨텐츠 스크립트와 나머지 확장앱과의 통신</li>
 <li>확장앱의 웹페이지에서 사용할 리소스 패키징</li>
</ul>

<p><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">깃헙 예제 소스코드</a>.</p>

<p>이 확장앱을 만드려면 파이어폭스 45이상이 필요하다.</p>

<h2 id="Writing_the_extension">Writing the extension</h2>

<p>새 디렉토리 생성:</p>

<pre class="brush: bash">mkdir beastify
cd beastify</pre>

<h3 id="manifest.json">manifest.json</h3>

<p>이제 "manifest.json" 파일을 아래와 같은 내용으로 생성:</p>

<pre class="brush: json">{

  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": [
    "activeTab"
  ],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]

}
</pre>

<ul>
 <li>위에서부터 세가지 키인 <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version">manifest_version</a></code>, <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name">name</a></code>, and <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version">version</a></code>는 , 필수항목이고 확장앱의 기본 정보이다.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description">description</a></code> 과 <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url">homepage_url</a></code>은 선택사항이나, 확장앱에관한 유용한 정보를 가지기에 권장한다.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons">icons</a></code> 도 선택사항이나 애드온 매니저에서 확장앱을 알리는 아이콘이니 권장한다.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">permissions</a></code> 은 확장앱이 필요로 하는 권한의 목록이다. 이 확장앱에서는 <a href="/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission"><code>activeTab</code> 과 permission</a> 을 사용한다.</li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code>는 툴바에 나오는 버튼을 정의하고 세가지 정보를 정의한다:
  <ul>
   <li><code>default_icon</code> 는 필수이고 , 버튼의 아이콘을 정의한다.</li>
   <li><code>default_title</code> 는 선택사항이고 툴팁을 정의한다.</li>
   <li><code>default_popup</code> 은 사용자가 버튼을 클릭할때 팝업을 보여주고 싶을때 사용한다. 우리는 이 항목을 추가해서 확장앱에 포함된 HTML파일을 지정한다.</li>
  </ul>
 </li>
 <li><code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a></code>는 웹페이지에서 접근가능한 파일들의 목록이다. 확장앱은 이미지로 웹페이지의 컨텐츠를 변경해야하기에 이 이미지들이 페이지에 접근가능하게 해야한다.</li>
</ul>

<p>manifest.json와 연관된 모든 경로의 것들을 기술한다.</p>

<h3 id="The_icon">The icon</h3>

<p>확장앱은 아이콘을 가져야한다. 이 아이콘은 애드온 매니저에서 확장앱의 목록에서 보여진다.("about:addons" url을 통해 열수 있다). 이번에 만든 manifest.json는 "icons / beasts-48.png" 아이콘을 정의하였다</p>

<p>"icons"라는 디렉토리를 만들고 "beasts-48.png" 파일을 그 아래에 저장한다. 우리 예제는 <a href="https://www.iconfinder.com/iconsets/free-retina-icon-set">Aha-Soft’s Free Retina iconset</a>에서 가져온 이미지를 <a href="http://www.aha-soft.com/free-icons/free-retina-icon-set/">라이센스</a> 조건에 따라 사용했다.</p>

<p>자신만의 아이콘을 사용하려면 48x48 픽셀이어야한다. 또한 고해상도를 위한 96x96 필셀도 지원한다. 만약 고해상도를 지원하게 하고싶다면 manifest.json의 아이콘 부분을 아래처럼 작성하면 된다.</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json">"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}</code></pre>

<h3 id="The_toolbar_button">The toolbar button</h3>

<p>툴바 버튼도 아이콘이 필요한데, 우리 manifest.json 파일에 툴바 버튼의 아이콘을 "icons/beasts-32.png"으로 기술하였다.</p>

<p>"icons" 디렉토리 아래 "beasts-32.png"  파일을 저장한다. 우리는  우리 예제의 <a href="https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png">이미지</a>는 <a href="http://www.iconbeast.com/free">IconBeast Lite icon set</a>에서 가져온 이미지를 <a href="http://www.iconbeast.com/faq/">라이센스</a> 조건에 따라 사용했다.</p>

<p>팝업을 제공하지 않으면 사용자가 버튼을 클릭 할 때 클릭 이벤트가 없어지게된다. 팝업을 제공한다면 이벤트는 없이지지않고 대신 팝업이 열린다. 우리는 팝업을 열어야하니 다음에서 팝업을 정의한다.</p>

<h3 id="The_popup">The popup</h3>

<p>이 팝업의 기능은 세 동물중 하나를 선택하는 기능이다.</p>

<p>확장앱 로트 아래 "popup" 디렉토리를 생성한다. 여기에대가 팝업 관련 파일들을 저장할 것 이다. 이 팝업이 가지는 세가 파일:</p>

<ul>
 <li><strong><code>choose_beast.html</code></strong> 컨텐츠의 패널 정의</li>
 <li><strong><code>choose_beast.css</code></strong> 스타일</li>
 <li><strong><code>choose_beast.js</code></strong> 활성화된 탭에 사용자가 선택한 이미지를 content script를 통해 반영한다.</li>
</ul>

<pre class="brush: bash">mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
</pre>

<h4 id="choose_beast.html">choose_beast.html</h4>

<p>HTML파일의 내용:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;

&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;link rel="stylesheet" href="choose_beast.css"/&gt;
  &lt;/head&gt;

&lt;body&gt;
  &lt;div id="popup-content"&gt;
    &lt;div class="button beast"&gt;Frog&lt;/div&gt;
    &lt;div class="button beast"&gt;Turtle&lt;/div&gt;
    &lt;div class="button beast"&gt;Snake&lt;/div&gt;
    &lt;div class="button reset"&gt;Reset&lt;/div&gt;
  &lt;/div&gt;
  &lt;div id="error-content" class="hidden"&gt;
    &lt;p&gt;Can't beastify this web page.&lt;/p&gt;&lt;p&gt;Try a different page.&lt;/p&gt;
  &lt;/div&gt;
  &lt;script src="choose_beast.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</pre>

<p>각각의 동물들을 보여주는 항목을 가지는 <code><a href="/en-US/docs/Web/HTML/Element/div">&lt;div&gt;</a></code> 요소의 ID에 <code>"popup-content"</code> 를 정의하였다. 또 다른 <code>"error-content"</code> ID를 가지는 <code>&lt;div&gt;</code>는  <code>"hidden"</code> 이라는 class를 정의하였고 팝업을 초기화 할때 문제가 생기는 경우 사용할 것이다.</p>

<p>이 HTML파일은 일반 웹페이지처럼 CSS파일과 JS파일을 포함한다.</p>

<h4 id="choose_beast.css">choose_beast.css</h4>

<p>이 CSS는 팝업의 크기를 정의하고 선택항목의 공간을 정의하는등 기본적인 스타일링을 한다. 또한 <code>class="hidden"</code> 이라고 정의한 항목을 숨긴다. 이것은 <code>"error-content"</code> <code>&lt;div&gt;</code> 가 기본적으로는 숨겨진다는 것을 뜻한다.</p>

<pre class="brush: css">html, body {
  width: 100px;
}

.hidden {
  display: none;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #CFF2F2;
}

.beast {
  background-color: #E5F2F2;
}

.reset {
  background-color: #FBFBC9;
}

.reset:hover {
  background-color: #EAEA9D;
}

</pre>

<h4 id="choose_beast.js">choose_beast.js</h4>

<p>팝업의 자바스크립트 코드는 아래와 같다:</p>

<pre class="brush: js">/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body &gt; :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) =&gt; {

    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.extension.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.extension.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.extension.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * Insert the page-hiding CSS into the active tab,
     * then get the beast URL and
     * send a "beastify" message to the content script in the active tab.
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({code: hidePage}).then(() =&gt; {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url
        });
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({code: hidePage}).then(() =&gt; {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * Get the active tab,
     * then call "beastify()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(beastify)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);

</pre>

<p>이 코드의 시작접은 96번째 라인이다. 이 스크립트는 browser.tabs.executeScript () API를 사용해 팝업이 로드될때 활성화된 탭에 content script (beastify.js)를 주입한다. content script를 성공적으로 주입하면 사용자가 탭을 닫거나 페이지를 이동할 때까지 content script가 주입 된 상태로 유지된다.</p>

<p><code>browser.tabs.executeScript()</code>API호출이 실패하는 공통적인 이유는 모든 웹페이지에 content scripts를 주입할 수 없기 때문이다. 예를들어 about:debugging 같은 권한이 있는 페이지에서는 content scripts를 주입할 수 없고 <a href="https://addons.mozilla.org/">addons.mozilla.org</a> 도 마찬가지이다. 이처럼 실패할때는 <code>reportExecuteScriptError()</code>가 호출되어 <code>"popup-content"</code> <code>&lt;div&gt;</code> 를 숨기고 <code>"error-content"</code> <code>&lt;div&gt;</code>를 보여주고 <a href="/en-US/Add-ons/WebExtensions/Debugging">콘솔</a>에 에러를 로깅한다.</p>

<p>content script 주입이 성공하면 <code>listenForClicks()</code>이 호출 된다. 이 함수는 팝업에서 클릭을 위한 리스너이다.</p>

<ul>
 <li><code>"beast"</code>클래스를 가진 버튼을 클릭하면 <code>beastify()</code> 함수가 호출 된다.</li>
 <li><code>"reset"</code>클래스를 가진 버튼을 클릭하면 <code>reset()</code>함수가 호출 된다.</li>
</ul>

<p><code>beastify()</code> 함수는 3가지 기능을 한다:</p>

<ul>
 <li>클릭 한 버튼을 동물의 이미지 URL로 매핑</li>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/tabs/insertCSS">browser.tabs.insertCSS()</a></code> API로 CSS를 주입하여 페이지의 전체를 숨긴다.</li>
 <li>페이지를 동물그림으로 변경하도록 짐승 이미지 URL을 전달 요청하기 위해<code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage">browser.tabs.sendMessage()</a></code> API로 "beastify"메시지를 content script에 보낸다.</li>
</ul>

<p><code>reset()</code> 함수는 페이지가 동물그림으로 변경된 것을 취소한다:</p>

<ul>
 <li><code><a href="/en-US/Add-ons/WebExtensions/API/tabs/removeCSS">browser.tabs.removeCSS()</a></code> API로 추가한 CSS를 제거한다.</li>
 <li>페이지를 리셋하기 위해 content script에 "reset" 메시지를 보낸다.</li>
</ul>

<h3 id="The_content_script">The content script</h3>

<p>확장앱의 루트에 "content_scripts"라는 디렉토리를 생성하고, "beastify.js" 파일을 아래 내용으로 작성한다:</p>

<pre class="brush: js">(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * Remove every beast from the page.
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) =&gt; {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });

})();
</pre>

<p>content script는 먼저 전역 변수 <code>window.hasRun</code>을 확인한다: content script가 이미 실행되어 있다면 아무작업도 하지 않고, 아직 주입되어 있지않으면 <code>window.hasRun</code>를 true로 셋팅한뒤 잡업을 계속한다. 이 작업을 하는 이유는 팝업을 열 때마다 활성화된 탭에 content script를 실행하기 때문에 스크립트가 중복으로 실행되기 때문에 첫번째 팝업오픈시에만 content script를 실행해야한다.</p>

<p>그런 다음 40번째 라인에서 content script는 browser.runtime.onMessage API로 팝업의 메시지를 받는다. 위에서 봤던 팝업의 스크립트는 "beastify"와 "reset" 두 종류의 메시지를 보낸다.</p>

<ul>
 <li>"beastify" 메시지를 받으면 메시지에 동물이미지의 URL이 있다는 걸 예상할수 있다. 우리는 이전의 "beastify" 메시지로 추가 된 동물을 제거하고  &lt;img&gt; 요소를 만들어서 src속성에 동물 이미지 URL을 셋팅한다.</li>
 <li>"reset" 메시지를 받으면 그냥 모든 추가된 동물을 삭제한다.</li>
</ul>

<h3 id="The_beasts">The beasts</h3>

<p>마지막으로 동물의 이미지를 추가한다.</p>

<p>"beasts" 디렉토리를 만들고 그 아래 적절한 이름의 이미지 세개를 추가한다.  <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts">GitHub 저장소</a>에서 이미지를 가져올 수 있다. </p>

<p><img alt="" src="https://mdn.mozillademos.org/files/11459/frog.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11461/snake.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"><img alt="" src="https://mdn.mozillademos.org/files/11463/turtle.jpg" style="display: inline-block; height: 200px; margin: 20px; width: 200px;"></p>

<h2 id="Testing_it_out">Testing it out</h2>

<p>먼저 파일들이 제자리에 있는 지 확인한다:</p>

<pre>beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json</pre>

<p>파이어폭스 45에서 디스크로부터 임시로 확장 기능을 설치할 수 있다.</p>

<p>파이어폭스에서 about:debugging를 열고 "Load Temporary Add-on"를 클릭한다음 manifest.json 파일을 선택한다. 그러면 파이어폭스 툴바에서 버튼을 볼수 있을것이다.</p>

<p>{{EmbedYouTube("sAM78GU4P34")}}</p>

<p>웹페이지를 열고 툴바 버튼을 클릭하고 동물을 선택하면 웹페이지가 바뀌는것을 볼 수 있을것이다.</p>

<p>{{EmbedYouTube("YMQXyAQSiE8")}}</p>

<h2 id="Developing_from_the_command_line">Developing from the command line</h2>

<p>아래처럼 <a href="/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext">web-ext</a>툴을 이용해 설치할 수도 있다.</p>

<pre class="brush: bash">cd beastify
web-ext run</pre>
</div>
