---
title: Your second extension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---
{{AddonSidebar}}

[Your first extension](/ko/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) 장을 읽었다면, 확장앱을 만드는 법을 알게 되었을 것이다. 이번 장에서는 몇개의 API를 사용하는 약간 더 복잡한 확장앱을 만들어볼 것이다.

이 확장앱은 파이어폭스 툴바에 새로운 버튼을 추가한다. 사용자가 이 버튼을 클릭하면 동물을 선택하는 팝업을 보여준다. 동물을 선택하면 현재 웹페이지의 내용을 선택한 동물 이미지로 변경한다.

구현내용:

- **파이어폭스 툴바에 추가된 버튼의 [browser action](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_action)을 정의한다.**
  버튼을 위해 필요한것:

  - "beasts-32.png" 아이콘
  - 버튼을 누를때 나오는 팝업. 이 팝업은 HTML과 CSS, 자바스크립트로 구성된다.

- **애드온 메니저에 보여질 확장앱 아이콘을 정의한다.**
- **웹페이지에 주입될 "beastify.js"라는 content script를 작성한다.**
  이것이 실제로 웹페이지를 변경할 코드이다.
- **웹페이지를 변경할 동물 이미지를 패키징한다.**
  이미지를 "웹 접근 가능 자원"으로 만들어 웹페이지에서 참조 하게 한다.

확장앱의 구조를 표현하면 아래와 같다:

![](https://mdn.mozillademos.org/files/13671/Untitled-1.png)

간단한 확장앱이지만 WebExtensions API의 기본 개념을 잘 보여줍니다.

- 툴바에 버튼 추가
- 팝업에 쓰일 HTML, CSS, 자바스크립트 정의
- 웹페이지에 content scripts 주입
- 컨텐츠 스크립트와 나머지 확장앱과의 통신
- 확장앱의 웹페이지에서 사용할 리소스 패키징

[깃헙 예제 소스코드](https://github.com/mdn/webextensions-examples/tree/master/beastify).

이 확장앱을 만드려면 파이어폭스 45이상이 필요하다.

## Writing the extension

새 디렉토리 생성:

```bash
mkdir beastify
cd beastify
```

### manifest.json

이제 "manifest.json" 파일을 아래와 같은 내용으로 생성:

```json
{

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
```

- 위에서부터 세가지 키인 [`manifest_version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), and [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)는 , 필수항목이고 확장앱의 기본 정보이다.
- [`description`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) 과 [`homepage_url`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)은 선택사항이나, 확장앱에관한 유용한 정보를 가지기에 권장한다.
- [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) 도 선택사항이나 애드온 매니저에서 확장앱을 알리는 아이콘이니 권장한다.
- [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 은 확장앱이 필요로 하는 권한의 목록이다. 이 확장앱에서는 [`activeTab` 과 permission](/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) 을 사용한다.
- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)는 툴바에 나오는 버튼을 정의하고 세가지 정보를 정의한다:

  - `default_icon` 는 필수이고 , 버튼의 아이콘을 정의한다.
  - `default_title` 는 선택사항이고 툴팁을 정의한다.
  - `default_popup` 은 사용자가 버튼을 클릭할때 팝업을 보여주고 싶을때 사용한다. 우리는 이 항목을 추가해서 확장앱에 포함된 HTML파일을 지정한다.

- [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)는 웹페이지에서 접근가능한 파일들의 목록이다. 확장앱은 이미지로 웹페이지의 컨텐츠를 변경해야하기에 이 이미지들이 페이지에 접근가능하게 해야한다.

manifest.json와 연관된 모든 경로의 것들을 기술한다.

### The icon

확장앱은 아이콘을 가져야한다. 이 아이콘은 애드온 매니저에서 확장앱의 목록에서 보여진다.("about:addons" url을 통해 열수 있다). 이번에 만든 manifest.json는 "icons / beasts-48.png" 아이콘을 정의하였다

"icons"라는 디렉토리를 만들고 "beasts-48.png" 파일을 그 아래에 저장한다. 우리 예제는 [Aha-Soft’s Free Retina iconset](https://www.iconfinder.com/iconsets/free-retina-icon-set)에서 가져온 이미지를 [라이센스](http://www.aha-soft.com/free-icons/free-retina-icon-set/) 조건에 따라 사용했다.

자신만의 아이콘을 사용하려면 48x48 픽셀이어야한다. 또한 고해상도를 위한 96x96 필셀도 지원한다. 만약 고해상도를 지원하게 하고싶다면 manifest.json의 아이콘 부분을 아래처럼 작성하면 된다.

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### The toolbar button

툴바 버튼도 아이콘이 필요한데, 우리 manifest.json 파일에 툴바 버튼의 아이콘을 "icons/beasts-32.png"으로 기술하였다.

"icons" 디렉토리 아래 "beasts-32.png" 파일을 저장한다. 우리는 우리 예제의 [이미지](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png)는 [IconBeast Lite icon set](http://www.iconbeast.com/free)에서 가져온 이미지를 [라이센스](http://www.iconbeast.com/faq/) 조건에 따라 사용했다.

팝업을 제공하지 않으면 사용자가 버튼을 클릭 할 때 클릭 이벤트가 없어지게된다. 팝업을 제공한다면 이벤트는 없이지지않고 대신 팝업이 열린다. 우리는 팝업을 열어야하니 다음에서 팝업을 정의한다.

### The popup

이 팝업의 기능은 세 동물중 하나를 선택하는 기능이다.

확장앱 로트 아래 "popup" 디렉토리를 생성한다. 여기에대가 팝업 관련 파일들을 저장할 것 이다. 이 팝업이 가지는 세가 파일:

- **`choose_beast.html`** 컨텐츠의 패널 정의
- **`choose_beast.css`** 스타일
- **`choose_beast.js`** 활성화된 탭에 사용자가 선택한 이미지를 content script를 통해 반영한다.

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

HTML파일의 내용:

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="choose_beast.css"/>
  </head>

<body>
  <div id="popup-content">
    <div class="button beast">Frog</div>
    <div class="button beast">Turtle</div>
    <div class="button beast">Snake</div>
    <div class="button reset">Reset</div>
  </div>
  <div id="error-content" class="hidden">
    <p>Can't beastify this web page.</p><p>Try a different page.</p>
  </div>
  <script src="choose_beast.js"></script>
</body>

</html>
```

각각의 동물들을 보여주는 항목을 가지는 [`<div>`](/en-US/docs/Web/HTML/Element/div) 요소의 ID에 `"popup-content"` 를 정의하였다. 또 다른 `"error-content"` ID를 가지는 `<div>`는 `"hidden"` 이라는 class를 정의하였고 팝업을 초기화 할때 문제가 생기는 경우 사용할 것이다.

이 HTML파일은 일반 웹페이지처럼 CSS파일과 JS파일을 포함한다.

#### choose_beast.css

이 CSS는 팝업의 크기를 정의하고 선택항목의 공간을 정의하는등 기본적인 스타일링을 한다. 또한 `class="hidden"` 이라고 정의한 항목을 숨긴다. 이것은 `"error-content"` `<div>` 가 기본적으로는 숨겨진다는 것을 뜻한다.

```css
html, body {
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
```

#### choose_beast.js

팝업의 자바스크립트 코드는 아래와 같다:

```js
/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {

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
      browser.tabs.insertCSS({code: hidePage}).then(() => {
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
      browser.tabs.removeCSS({code: hidePage}).then(() => {
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
```

이 코드의 시작접은 96번째 라인이다. 이 스크립트는 browser.tabs.executeScript () API를 사용해 팝업이 로드될때 활성화된 탭에 content script (beastify.js)를 주입한다. content script를 성공적으로 주입하면 사용자가 탭을 닫거나 페이지를 이동할 때까지 content script가 주입 된 상태로 유지된다.

`browser.tabs.executeScript()`API호출이 실패하는 공통적인 이유는 모든 웹페이지에 content scripts를 주입할 수 없기 때문이다. 예를들어 about:debugging 같은 권한이 있는 페이지에서는 content scripts를 주입할 수 없고 [addons.mozilla.org](https://addons.mozilla.org/) 도 마찬가지이다. 이처럼 실패할때는 `reportExecuteScriptError()`가 호출되어 `"popup-content"` `<div>` 를 숨기고 `"error-content"` `<div>`를 보여주고 [콘솔](/en-US/Add-ons/WebExtensions/Debugging)에 에러를 로깅한다.

content script 주입이 성공하면 `listenForClicks()`이 호출 된다. 이 함수는 팝업에서 클릭을 위한 리스너이다.

- `"beast"`클래스를 가진 버튼을 클릭하면 `beastify()` 함수가 호출 된다.
- `"reset"`클래스를 가진 버튼을 클릭하면 `reset()`함수가 호출 된다.

`beastify()` 함수는 3가지 기능을 한다:

- 클릭 한 버튼을 동물의 이미지 URL로 매핑
- [`browser.tabs.insertCSS()`](/en-US/Add-ons/WebExtensions/API/tabs/insertCSS) API로 CSS를 주입하여 페이지의 전체를 숨긴다.
- 페이지를 동물그림으로 변경하도록 짐승 이미지 URL을 전달 요청하기 위해[`browser.tabs.sendMessage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API로 "beastify"메시지를 content script에 보낸다.

`reset()` 함수는 페이지가 동물그림으로 변경된 것을 취소한다:

- [`browser.tabs.removeCSS()`](/en-US/Add-ons/WebExtensions/API/tabs/removeCSS) API로 추가한 CSS를 제거한다.
- 페이지를 리셋하기 위해 content script에 "reset" 메시지를 보낸다.

### The content script

확장앱의 루트에 "content_scripts"라는 디렉토리를 생성하고, "beastify.js" 파일을 아래 내용으로 작성한다:

```js
(function() {
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
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });

})();
```

content script는 먼저 전역 변수 `window.hasRun`을 확인한다: content script가 이미 실행되어 있다면 아무작업도 하지 않고, 아직 주입되어 있지않으면 `window.hasRun`를 true로 셋팅한뒤 잡업을 계속한다. 이 작업을 하는 이유는 팝업을 열 때마다 활성화된 탭에 content script를 실행하기 때문에 스크립트가 중복으로 실행되기 때문에 첫번째 팝업오픈시에만 content script를 실행해야한다.

그런 다음 40번째 라인에서 content script는 browser.runtime.onMessage API로 팝업의 메시지를 받는다. 위에서 봤던 팝업의 스크립트는 "beastify"와 "reset" 두 종류의 메시지를 보낸다.

- "beastify" 메시지를 받으면 메시지에 동물이미지의 URL이 있다는 걸 예상할수 있다. 우리는 이전의 "beastify" 메시지로 추가 된 동물을 제거하고 \<img> 요소를 만들어서 src속성에 동물 이미지 URL을 셋팅한다.
- "reset" 메시지를 받으면 그냥 모든 추가된 동물을 삭제한다.

### The beasts

마지막으로 동물의 이미지를 추가한다.

"beasts" 디렉토리를 만들고 그 아래 적절한 이름의 이미지 세개를 추가한다. [GitHub 저장소](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts)에서 이미지를 가져올 수 있다.

![](https://mdn.mozillademos.org/files/11459/frog.jpg)![](https://mdn.mozillademos.org/files/11461/snake.jpg)![](https://mdn.mozillademos.org/files/11463/turtle.jpg)

## Testing it out

먼저 파일들이 제자리에 있는 지 확인한다:

```
    beastify/

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

        manifest.json
```

파이어폭스 45에서 디스크로부터 임시로 확장 기능을 설치할 수 있다.

파이어폭스에서 about:debugging를 열고 "Load Temporary Add-on"를 클릭한다음 manifest.json 파일을 선택한다. 그러면 파이어폭스 툴바에서 버튼을 볼수 있을것이다.

{{EmbedYouTube("sAM78GU4P34")}}

웹페이지를 열고 툴바 버튼을 클릭하고 동물을 선택하면 웹페이지가 바뀌는것을 볼 수 있을것이다.

{{EmbedYouTube("YMQXyAQSiE8")}}

## Developing from the command line

아래처럼 [web-ext](/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)툴을 이용해 설치할 수도 있다.

```bash
cd beastify
web-ext run
```
