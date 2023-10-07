---
title: Your second extension
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---

{{AddonSidebar}}

[Your first extension](/ko/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) 장을 읽었다면, 확장 기능을 만드는 법을 알게 되었을 것입니다. 이번 장에서는 몇개의 API를 사용하는 약간 더 복잡한 확장 기능을 만들어 보겠습니다.

이 확장 기능은 Firefox 툴바에 새로운 버튼을 추가합니다. 사용자가 이 버튼을 클릭하면 동물을 선택하는 팝업을 보여줍니다. 동물을 선택하면 현재 웹페이지의 내용을 선택한 동물 이미지로 변경합니다.

구현 내용:

- **Firefox 툴바에 추가된 버튼의 [browser action](/ko/docs/Mozilla/Add-ons/WebExtensions/Browser_action)을 정의합니다.**
  버튼을 위해 필요한것:

  - "beasts-32.png" 아이콘
  - 버튼을 누를때 나오는 팝업. 이 팝업은 HTML과 CSS, JavaScript로 구성됩니다.

- **애드온 메니저에 보여질 확장 기능 아이콘을 정의합니다.**
- **웹페이지에 주입될 "beastify.js"라는 content script를 작성합니다.**
  이것이 실제로 웹페이지를 변경할 코드입니다.
- **웹페이지를 변경할 동물 이미지를 패키징합니다.**
  이미지를 "웹 접근 가능 자원"으로 만들어 웹페이지에서 참조하게 합니다.

확장 기능의 구조를 표현하면 아래와 같습니다.

![](Untitled-1.png)

간단한 확장 기능이지만 WebExtensions API의 기본 개념을 잘 보여줍니다.

- 툴바에 버튼 추가
- 팝업에 쓰일 HTML, CSS, JavaScript 정의
- 웹페이지에 content scripts 주입
- 컨텐츠 스크립트와 나머지 확장 기능과의 통신
- 확장 기능의 웹페이지에서 사용할 리소스 패키징

[GitHub 예제 소스코드](https://github.com/mdn/webextensions-examples/tree/master/beastify).

## Writing the extension

새 디렉토리를 생성하고 들어갑니다.

```bash
mkdir beastify
cd beastify
```

### manifest.json

이제 "manifest.json" 파일을 아래와 같은 내용으로 생성합니다.

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Adds a browser action icon to the toolbar. Click the button to choose a beast. The active tab's body content is then replaced with a picture of the chosen beast. See https://developer.mozilla.org/ko/docs/Mozilla/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

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

- 첫 세 가지 키인 [`manifest_version`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), and [`version`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)는, 필수로 포함되어야 하며 확장 기능의 기본 정보입니다.
- [`description`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) 과 [`homepage_url`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)은 선택사항이나, 확장 기능에 관한 유용한 정보를 가지기에 권장됩니다.
- [`icons`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) 도 선택사항이나 애드온 매니저에서 확장 기능 아이콘을 보여줄 수 있기에 권장됩니다.
- [`permissions`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 은 확장 기능이 필요로 하는 권한의 목록입니다. 이 확장 기능에서는 [`activeTab` 권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) 을 사용합니다.
- [`browser_action`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)는 툴바에 나오는 버튼을 정의하고 세 가지 정보를 정의합니다.

  - `default_icon` 는 필수이고, 버튼의 아이콘을 정의합니다.
  - `default_title` 는 선택사항이고 툴팁을 정의합니다.
  - `default_popup` 은 사용자가 버튼을 클릭할때 팝업을 보여주고 싶을 때 사용합니다. 이 키로 확장 기능에 포함된 HTML파일을 지정합니다.

- [`web_accessible_resources`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)는 웹페이지에서 접근가능한 파일들의 목록입니다. 확장 기능은 이미지로 웹페이지의 컨텐츠를 변경해야하기에 이 이미지들이 페이지에 접근 가능하게 해야 합니다.

모든 경로는 manifest.json의 위치를 기준으로 한 상대 경로입니다.

### The icon

확장 기능은 아이콘을 가져야 합니다. 이 아이콘은 애드온 매니저("about:addons" url을 통해 열 수 있습니다)에서 확장 기능의 목록에서 보여집니다. 이번에 만든 manifest.json는 "icons / beasts-48.png" 아이콘을 정의했습니다.

"icons"라는 디렉토리를 만들고 "beasts-48.png" 파일을 그 아래에 저장하겠습니다. 우리 예제는 [Aha-Soft's Free Retina iconset](https://www.iconfinder.com/iconsets/free-retina-icon-set)에서 가져온 이미지를 [라이센스](http://www.aha-soft.com/free-icons/free-retina-icon-set/) 조건에 따라 사용했습니다.

자신만의 아이콘을 사용하려면 48x48 픽셀이어야 합니다. 또한 고해상도를 위한 96x96 픽셀도 지원합니다. 만약 고해상도를 지원하게 하고싶다면 manifest.json의 아이콘 부분을 아래처럼 작성하면 됩니다.

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### The toolbar button

툴바 버튼도 아이콘이 필요한데, 우리 manifest.json 파일에서 툴바 버튼의 아이콘을 "icons/beasts-32.png"으로 기술하였습니다.

"icons" 디렉토리에 "beasts-32.png" 파일을 저장합니다. 우리는 우리 예제의 [이미지](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png)는 [IconBeast Lite icon set](http://www.iconbeast.com/free)에서 가져온 이미지를 [라이센스](http://www.iconbeast.com/faq/) 조건에 따라 사용했습니다.

팝업을 제공하지 않으면 사용자가 버튼을 클릭할 때 클릭 이벤트가 없어지게 됩니다. 팝업을 제공한다면 이벤트는 없어지지 않고 대신 팝업이 열리게 됩니다. 우리는 팝업을 열어야 하니 바로 다음에 팝업을 생성하겠습니다.

### The popup

이 팝업의 기능은 세 동물중 하나를 선택하는 기능입니다.

확장 기능 루트 아래 "popup" 디렉토리를 생성합니다. 여기에 팝업 관련 파일들을 저장할 것 입니다. 이 팝업이 가지는 세 가지 파일은 다음과 같습니다.

- **`choose_beast.html`** 컨텐츠의 패널 정의
- **`choose_beast.css`** 스타일
- **`choose_beast.js`** 활성화된 탭에 사용자가 선택한 이미지를 content script를 통해 반영합니다.

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

HTML파일의 내용은 다음과 같습니다.

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <div class="button beast">Frog</div>
      <div class="button beast">Turtle</div>
      <div class="button beast">Snake</div>
      <div class="button reset">Reset</div>
    </div>
    <div id="error-content" class="hidden">
      <p>Can't beastify this web page.</p>
      <p>Try a different page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

각각의 동물들을 보여주는 항목을 가지는 [`<div>`](/ko/docs/Web/HTML/Element/div) 요소의 ID에 `"popup-content"` 를 정의했습니다. 또 다른 `"error-content"` ID를 가지는 `<div>`는 `"hidden"` 이라는 class를 정의하였고 팝업을 초기화 할때 문제가 생기는 경우 사용할 것입니다.

이 HTML파일은 일반 웹페이지처럼 CSS파일과 JS파일을 포함합니다.

#### choose_beast.css

이 CSS는 팝업의 크기를 정의하고 선택항목의 공간을 정의하는 등 기본적인 스타일링을 합니다. 또한 `class="hidden"` 이라고 정의한 항목을 숨깁니다. 이것은 `"error-content"` `<div>` 가 기본적으로는 숨겨진다는 것을 뜻합니다.

```css
html,
body {
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
  background-color: #cff2f2;
}

.beast {
  background-color: #e5f2f2;
}

.reset {
  background-color: #fbfbc9;
}

.reset:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

팝업의 JavaScript 코드는 아래와 같습니다.

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
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
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
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    } else if (e.target.classList.contains("reset")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
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
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

이 코드의 시작접은 96번째 라인입니다. 이 스크립트는 [`browser.tabs.executeScript()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API를 사용해 팝업이 로드될때 활성화된 탭에 content script (beastify.js)를 주입합니다. content script를 성공적으로 주입하면 사용자가 탭을 닫거나 페이지를 이동할 때까지 content script가 주입 된 상태로 유지됩니다.

`browser.tabs.executeScript()`API호출이 실패하는 흔한 이유는 모든 웹페이지에 content scripts를 주입할 수 없기 때문입니다. 예를들어 about:debugging 같은 권한이 있는 페이지에서는 content scripts를 주입할 수 없고 [addons.mozilla.org](https://addons.mozilla.org/) 도 마찬가지입니다. 이처럼 실패할때는 `reportExecuteScriptError()`가 호출되어 `"popup-content"` `<div>` 를 숨기고 `"error-content"` `<div>`를 보여주고 [콘솔](https://extensionworkshop.com/documentation/develop/debugging/)에 에러를 로깅합니다.

content script 주입이 성공하면 `listenForClicks()`이 호출 된다. 이 함수는 팝업에서 클릭을 위한 리스너입니다.

- `"beast"`클래스를 가진 버튼을 클릭하면 `beastify()` 함수가 호출됩니다.
- `"reset"`클래스를 가진 버튼을 클릭하면 `reset()`함수가 호출됩니다.

`beastify()` 함수는 다음의 3가지 기능을 합니다.

- 클릭한 버튼을 동물의 이미지 URL로 매핑
- [`browser.tabs.insertCSS()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) API로 CSS를 주입하여 페이지의 전체를 숨깁니다.
- 페이지를 동물 이미지로 변경하도록 짐승 이미지 URL을 전달 요청하기 위해 [`browser.tabs.sendMessage()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) API로 "beastify"메시지를 content script에 보냅니다.

`reset()` 함수는 페이지가 동물 이미지로 변경된 것을 취소합니다.

- [`browser.tabs.removeCSS()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS) API로 추가한 CSS를 제거합니다.
- 페이지를 리셋하기 위해 content script에 "reset" 메시지를 보냅니다.

### The content script

확장 기능의 루트에 "content_scripts"라는 디렉토리를 생성하고, "beastify.js" 파일을 아래 내용으로 작성합니다.

```js
(function () {
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

content script는 먼저 전역 변수 `window.hasRun`을 확인합니다. content script가 이미 실행되어 있다면 아무 작업도 하지 않고, 아직 주입되어 있지 않으면 `window.hasRun`를 true로 세팅한뒤 작업을 계속합니다. 이 작업을 하는 이유는, 팝업을 열 때마다 활성화된 탭에 content script를 실행하기 때문에 스크립트가 중복으로 실행되게 됩니다. 따라서 첫번째 팝업 오픈시에만 content script를 실행해야 합니다.

그런 다음 40번째 라인에서 content script는 [`browser.runtime.onMessage`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) API로 팝업의 메시지를 받습니다. 위에서 봤던 팝업의 스크립트는 "beastify"와 "reset" 두 종류의 메시지를 보냅니다.

- "beastify" 메시지를 받으면 메시지에 동물 이미지의 URL이 있다는 걸 예상할 수 있습니다. 이전의 "beastify" 메시지로 추가된 동물을 제거하고 \<img> 요소를 만들어서 src속성에 동물 이미지 URL을 세팅합니다.
- "reset" 메시지를 받으면 추가된 모든 동물을 삭제합니다.

### The beasts

마지막으로 동물의 이미지를 추가합니다.

"beasts" 디렉토리를 만들고 그 아래 적절한 이름의 이미지 세개를 추가합니다. [GitHub 저장소](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts)에서 이미지를 가져오거나, 아래의 이미지를 사용할 수 있습니다.

![](frog.jpg)![](snake.jpg)![](turtle.jpg)

## Testing it out

먼저 모든 파일들이 올바르게 있는지 확인합니다.

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

이제 확장 기능을 임시 애드온으로 불러옵니다. Firefox에서 about:debugging를 열고 "Load Temporary Add-on"를 클릭한 다음 manifest.json 파일을 선택합니다. 그러면 Firefox 툴바에서 버튼을 볼 수 있습니다.

![The beastify icon in the Firefox toolbar](beastify_icon.png)

웹페이지를 열고 툴바 버튼을 클릭하고 동물을 선택하면 웹페이지가 바뀌는 것을 볼 수 있습니다.

![A page replaced with the image of a turtle](beastify_page.png)

## Developing from the command line

아래처럼 [web-ext](/ko/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)툴을 이용해 설치할 수도 있습니다.

```bash
cd beastify
web-ext run
```

## What's next?

이것으로 보다 발전된 Firefox용 확장 기능을 만들어 보았습니다.

- [확장 기능의 구조에 대해 읽어보기](/ko/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [확장 기능 예제 살펴보기](/ko/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [확장 기능을 개발하고, 테스트하고, 게시하는 데 필요한 것 찾아보기](/ko/docs/Mozilla/Add-ons/WebExtensions/What_next_)
- [더 공부하기](/ko/docs/Mozilla/Add-ons/WebExtensions/What_next_#continue_your_learning_experience)
