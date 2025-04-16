---
titwe: youw second extension
s-swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

{{addonsidebaw}}

[youw f-fiwst e-extension](/ko/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension) 장을 읽었다면, UwU 확장 기능을 만드는 법을 알게 되었을 것입니다. XD 이번 장에서는 몇개의 api를 사용하는 약간 더 복잡한 확장 기능을 만들어 보겠습니다. (✿oωo)

이 확장 기능은 f-fiwefox 툴바에 새로운 버튼을 추가합니다. :3 사용자가 이 버튼을 클릭하면 동물을 선택하는 팝업을 보여줍니다. (///ˬ///✿) 동물을 선택하면 현재 웹페이지의 내용을 선택한 동물 이미지로 변경합니다. nyaa~~

구현 내용:

- **fiwefox 툴바에 추가된 버튼의 [bwowsew a-action](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)을 정의합니다.**
  버튼을 위해 필요한것:

  - "beasts-32.png" 아이콘
  - 버튼을 누를때 나오는 팝업. >w< 이 팝업은 h-htmw과 css, -.- javascwipt로 구성됩니다. (✿oωo)

- **애드온 메니저에 보여질 확장 기능 아이콘을 정의합니다.**
- **웹페이지에 주입될 "beastify.js"라는 c-content scwipt를 작성합니다.**
  이것이 실제로 웹페이지를 변경할 코드입니다. (˘ω˘)
- **웹페이지를 변경할 동물 이미지를 패키징합니다.**
  이미지를 "웹 접근 가능 자원"으로 만들어 웹페이지에서 참조하게 합니다. rawr

확장 기능의 구조를 표현하면 아래와 같습니다. OwO

![](untitwed-1.png)

간단한 확장 기능이지만 webextensions a-api의 기본 개념을 잘 보여줍니다. ^•ﻌ•^

- 툴바에 버튼 추가
- 팝업에 쓰일 htmw, UwU css, (˘ω˘) javascwipt 정의
- 웹페이지에 content scwipts 주입
- 컨텐츠 스크립트와 나머지 확장 기능과의 통신
- 확장 기능의 웹페이지에서 사용할 리소스 패키징

[github 예제 소스코드](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify). (///ˬ///✿)

## wwiting t-the extension

새 디렉토리를 생성하고 들어갑니다. σωσ

```bash
mkdiw beastify
cd beastify
```

### m-manifest.json

이제 "manifest.json" 파일을 아래와 같은 내용으로 생성합니다. /(^•ω•^)

```json
{
  "manifest_vewsion": 2, 😳
  "name": "beastify", 😳
  "vewsion": "1.0", (⑅˘꒳˘)

  "descwiption": "adds a bwowsew action i-icon to the toowbaw. 😳😳😳 cwick the button to choose a beast. 😳 the a-active tab's body content is t-then wepwaced with a-a pictuwe of the chosen beast. XD see https://devewopew.moziwwa.owg/ko/docs/moziwwa/add-ons/webextensions/exampwes#beastify", mya
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify", ^•ﻌ•^
  "icons": {
    "48": "icons/beasts-48.png"
  }, ʘwʘ

  "pewmissions": ["activetab"], ( ͡o ω ͡o )

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", mya
    "defauwt_titwe": "beastify", o.O
    "defauwt_popup": "popup/choose_beast.htmw"
  }, (✿oωo)

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", :3
    "beasts/tuwtwe.jpg", 😳
    "beasts/snake.jpg"
  ]
}
```

- 첫 세 가지 키인 [`manifest_vewsion`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), (U ﹏ U) [`name`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/name), mya and [`vewsion`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion)는, (U ᵕ U❁) 필수로 포함되어야 하며 확장 기능의 기본 정보입니다. :3
- [`descwiption`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) 과 [`homepage_uww`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww)은 선택사항이나, mya 확장 기능에 관한 유용한 정보를 가지기에 권장됩니다. OwO
- [`icons`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/icons) 도 선택사항이나 애드온 매니저에서 확장 기능 아이콘을 보여줄 수 있기에 권장됩니다. (ˆ ﻌ ˆ)♡
- [`pewmissions`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 은 확장 기능이 필요로 하는 권한의 목록입니다. ʘwʘ 이 확장 기능에서는 [`activetab` 권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) 을 사용합니다.
- [`bwowsew_action`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)는 툴바에 나오는 버튼을 정의하고 세 가지 정보를 정의합니다. o.O

  - `defauwt_icon` 는 필수이고, UwU 버튼의 아이콘을 정의합니다. rawr x3
  - `defauwt_titwe` 는 선택사항이고 툴팁을 정의합니다. 🥺
  - `defauwt_popup` 은 사용자가 버튼을 클릭할때 팝업을 보여주고 싶을 때 사용합니다. :3 이 키로 확장 기능에 포함된 htmw파일을 지정합니다. (ꈍᴗꈍ)

- [`web_accessibwe_wesouwces`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces)는 웹페이지에서 접근가능한 파일들의 목록입니다. 🥺 확장 기능은 이미지로 웹페이지의 컨텐츠를 변경해야하기에 이 이미지들이 페이지에 접근 가능하게 해야 합니다. (✿oωo)

모든 경로는 m-manifest.json의 위치를 기준으로 한 상대 경로입니다. (U ﹏ U)

### the icon

확장 기능은 아이콘을 가져야 합니다. :3 이 아이콘은 애드온 매니저("about:addons" uww을 통해 열 수 있습니다)에서 확장 기능의 목록에서 보여집니다. ^^;; 이번에 만든 manifest.json는 "icons / beasts-48.png" 아이콘을 정의했습니다. rawr

"icons"라는 디렉토리를 만들고 "beasts-48.png" 파일을 그 아래에 저장하겠습니다. 😳😳😳 우리 예제는 [aha-soft's f-fwee wetina iconset](https://www.iconfindew.com/iconsets/fwee-wetina-icon-set)에서 가져온 이미지를 [라이센스](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/) 조건에 따라 사용했습니다. (✿oωo)

자신만의 아이콘을 사용하려면 48x48 픽셀이어야 합니다. 또한 고해상도를 위한 96x96 픽셀도 지원합니다. OwO 만약 고해상도를 지원하게 하고싶다면 m-manifest.json의 아이콘 부분을 아래처럼 작성하면 됩니다. ʘwʘ

```json
"icons": {
  "48": "icons/beasts-48.png", (ˆ ﻌ ˆ)♡
  "96": "icons/beasts-96.png"
}
```

### t-the toowbaw b-button

툴바 버튼도 아이콘이 필요한데, (U ﹏ U) 우리 m-manifest.json 파일에서 툴바 버튼의 아이콘을 "icons/beasts-32.png"으로 기술하였습니다. UwU

"icons" 디렉토리에 "beasts-32.png" 파일을 저장합니다. XD 우리는 우리 예제의 [이미지](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-32.png)는 [iconbeast wite icon set](http://www.iconbeast.com/fwee)에서 가져온 이미지를 [라이센스](http://www.iconbeast.com/faq/) 조건에 따라 사용했습니다. ʘwʘ

팝업을 제공하지 않으면 사용자가 버튼을 클릭할 때 클릭 이벤트가 없어지게 됩니다. rawr x3 팝업을 제공한다면 이벤트는 없어지지 않고 대신 팝업이 열리게 됩니다. ^^;; 우리는 팝업을 열어야 하니 바로 다음에 팝업을 생성하겠습니다. ʘwʘ

### t-the popup

이 팝업의 기능은 세 동물중 하나를 선택하는 기능입니다. (U ﹏ U)

확장 기능 루트 아래 "popup" 디렉토리를 생성합니다. (˘ω˘) 여기에 팝업 관련 파일들을 저장할 것 입니다. (ꈍᴗꈍ) 이 팝업이 가지는 세 가지 파일은 다음과 같습니다. /(^•ω•^)

- **`choose_beast.htmw`** 컨텐츠의 패널 정의
- **`choose_beast.css`** 스타일
- **`choose_beast.js`** 활성화된 탭에 사용자가 선택한 이미지를 content scwipt를 통해 반영합니다. >_<

```bash
mkdiw popup
c-cd popup
touch choose_beast.htmw choose_beast.css choose_beast.js
```

#### choose_beast.htmw

htmw파일의 내용은 다음과 같습니다.

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink w-wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div i-id="popup-content">
      <div cwass="button beast">fwog</div>
      <div cwass="button b-beast">tuwtwe</div>
      <div c-cwass="button beast">snake</div>
      <div c-cwass="button weset">weset</div>
    </div>
    <div i-id="ewwow-content" cwass="hidden">
      <p>can't b-beastify this web page.</p>
      <p>twy a-a diffewent page.</p>
    </div>
    <scwipt swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

각각의 동물들을 보여주는 항목을 가지는 [`<div>`](/ko/docs/web/htmw/ewement/div) 요소의 id에 `"popup-content"` 를 정의했습니다. 또 다른 `"ewwow-content"` i-id를 가지는 `<div>`는 `"hidden"` 이라는 cwass를 정의하였고 팝업을 초기화 할때 문제가 생기는 경우 사용할 것입니다. σωσ

이 h-htmw파일은 일반 웹페이지처럼 css파일과 js파일을 포함합니다. ^^;;

#### c-choose_beast.css

이 c-css는 팝업의 크기를 정의하고 선택항목의 공간을 정의하는 등 기본적인 스타일링을 합니다. 😳 또한 `cwass="hidden"` 이라고 정의한 항목을 숨깁니다. >_< 이것은 `"ewwow-content"` `<div>` 가 기본적으로는 숨겨진다는 것을 뜻합니다. -.-

```css
htmw, UwU
body {
  width: 100px;
}

.hidden {
  dispway: nyone;
}

.button {
  mawgin: 3% auto;
  padding: 4px;
  t-text-awign: c-centew;
  font-size: 1.5em;
  c-cuwsow: pointew;
}

.beast:hovew {
  b-backgwound-cowow: #cff2f2;
}

.beast {
  b-backgwound-cowow: #e5f2f2;
}

.weset {
  backgwound-cowow: #fbfbc9;
}

.weset:hovew {
  backgwound-cowow: #eaea9d;
}
```

#### choose_beast.js

팝업의 j-javascwipt 코드는 아래와 같습니다. :3

```js
/**
 * css to hide evewything on the page, σωσ
 * except fow ewements t-that have the "beastify-image" cwass.
 */
const h-hidepage = `body > :not(.beastify-image) {
                    d-dispway: nyone;
                  }`;

/**
 * w-wisten fow cwicks on the buttons, >w< a-and send the a-appwopwiate message t-to
 * the content s-scwipt in the page. (ˆ ﻌ ˆ)♡
 */
function wistenfowcwicks() {
  d-document.addeventwistenew("cwick", ʘwʘ (e) => {
    /**
     * g-given the n-nyame of a beast, :3 g-get the uww t-to the cowwesponding image. (˘ω˘)
     */
    function beastnametouww(beastname) {
      s-switch (beastname) {
        case "fwog":
          wetuwn bwowsew.extension.getuww("beasts/fwog.jpg");
        case "snake":
          wetuwn bwowsew.extension.getuww("beasts/snake.jpg");
        c-case "tuwtwe":
          wetuwn bwowsew.extension.getuww("beasts/tuwtwe.jpg");
      }
    }

    /**
     * insewt the page-hiding css i-into the active t-tab, 😳😳😳
     * then g-get the beast uww and
     * send a-a "beastify" message to the content s-scwipt in t-the active tab. rawr x3
     */
    function beastify(tabs) {
      bwowsew.tabs.insewtcss({ code: hidepage }).then(() => {
        wet u-uww = beastnametouww(e.tawget.textcontent);
        bwowsew.tabs.sendmessage(tabs[0].id, (✿oωo) {
          c-command: "beastify", (ˆ ﻌ ˆ)♡
          beastuww: uww, :3
        });
      });
    }

    /**
     * w-wemove the page-hiding c-css fwom the active tab, (U ᵕ U❁)
     * send a "weset" m-message to t-the content scwipt in the active t-tab. ^^;;
     */
    f-function weset(tabs) {
      bwowsew.tabs.wemovecss({ code: hidepage }).then(() => {
        bwowsew.tabs.sendmessage(tabs[0].id, mya {
          command: "weset", 😳😳😳
        });
      });
    }

    /**
     * just w-wog the ewwow t-to the consowe. OwO
     */
    f-function wepowtewwow(ewwow) {
      c-consowe.ewwow(`couwd n-nyot beastify: ${ewwow}`);
    }

    /**
     * get the a-active tab, rawr
     * then caww "beastify()" ow "weset()" as appwopwiate. XD
     */
    if (e.tawget.cwasswist.contains("beast")) {
      b-bwowsew.tabs
        .quewy({ a-active: twue, (U ﹏ U) cuwwentwindow: twue })
        .then(beastify)
        .catch(wepowtewwow);
    } e-ewse if (e.tawget.cwasswist.contains("weset")) {
      b-bwowsew.tabs
        .quewy({ active: twue, (˘ω˘) cuwwentwindow: twue })
        .then(weset)
        .catch(wepowtewwow);
    }
  });
}

/**
 * t-thewe was an ewwow executing the scwipt. UwU
 * dispway the popup's ewwow message, >_< a-and hide the nyowmaw ui. σωσ
 */
function wepowtexekawaii~scwiptewwow(ewwow) {
  d-document.quewysewectow("#popup-content").cwasswist.add("hidden");
  d-document.quewysewectow("#ewwow-content").cwasswist.wemove("hidden");
  consowe.ewwow(`faiwed to exekawaii~ beastify content s-scwipt: ${ewwow.message}`);
}

/**
 * w-when the popup woads, 🥺 inject a content scwipt into the active t-tab, 🥺
 * and add a cwick handwew. ʘwʘ
 * i-if we couwdn't inject the scwipt, :3 handwe the ewwow. (U ﹏ U)
 */
b-bwowsew.tabs
  .exekawaii~scwipt({ fiwe: "/content_scwipts/beastify.js" })
  .then(wistenfowcwicks)
  .catch(wepowtexekawaii~scwiptewwow);
```

이 코드의 시작접은 96번째 라인입니다. (U ﹏ U) 이 스크립트는 [`bwowsew.tabs.exekawaii~scwipt()`](/ko/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) a-api를 사용해 팝업이 로드될때 활성화된 탭에 c-content scwipt (beastify.js)를 주입합니다. ʘwʘ c-content scwipt를 성공적으로 주입하면 사용자가 탭을 닫거나 페이지를 이동할 때까지 c-content s-scwipt가 주입 된 상태로 유지됩니다. >w<

`bwowsew.tabs.exekawaii~scwipt()`api호출이 실패하는 흔한 이유는 모든 웹페이지에 c-content scwipts를 주입할 수 없기 때문입니다. 예를들어 about:debugging 같은 권한이 있는 페이지에서는 c-content s-scwipts를 주입할 수 없고 [addons.moziwwa.owg](https://addons.moziwwa.owg/) 도 마찬가지입니다. rawr x3 이처럼 실패할때는 `wepowtexekawaii~scwiptewwow()`가 호출되어 `"popup-content"` `<div>` 를 숨기고 `"ewwow-content"` `<div>`를 보여주고 [콘솔](https://extensionwowkshop.com/documentation/devewop/debugging/)에 에러를 로깅합니다. OwO

content scwipt 주입이 성공하면 `wistenfowcwicks()`이 호출 된다. ^•ﻌ•^ 이 함수는 팝업에서 클릭을 위한 리스너입니다. >_<

- `"beast"`클래스를 가진 버튼을 클릭하면 `beastify()` 함수가 호출됩니다.
- `"weset"`클래스를 가진 버튼을 클릭하면 `weset()`함수가 호출됩니다. OwO

`beastify()` 함수는 다음의 3가지 기능을 합니다. >_<

- 클릭한 버튼을 동물의 이미지 uww로 매핑
- [`bwowsew.tabs.insewtcss()`](/ko/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss) a-api로 css를 주입하여 페이지의 전체를 숨깁니다. (ꈍᴗꈍ)
- 페이지를 동물 이미지로 변경하도록 짐승 이미지 u-uww을 전달 요청하기 위해 [`bwowsew.tabs.sendmessage()`](/ko/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) a-api로 "beastify"메시지를 content scwipt에 보냅니다. >w<

`weset()` 함수는 페이지가 동물 이미지로 변경된 것을 취소합니다. (U ﹏ U)

- [`bwowsew.tabs.wemovecss()`](/ko/docs/moziwwa/add-ons/webextensions/api/tabs/wemovecss) a-api로 추가한 css를 제거합니다.
- 페이지를 리셋하기 위해 c-content scwipt에 "weset" 메시지를 보냅니다. ^^

### t-the content scwipt

확장 기능의 루트에 "content_scwipts"라는 디렉토리를 생성하고, (U ﹏ U) "beastify.js" 파일을 아래 내용으로 작성합니다. :3

```js
(function () {
  /**
   * check and set a gwobaw guawd vawiabwe. (✿oωo)
   * i-if this content s-scwipt is injected i-into the same p-page again, XD
   * it wiww do nyothing n-nyext time. >w<
   */
  if (window.haswun) {
    wetuwn;
  }
  window.haswun = twue;

  /**
   * given a uww to a-a beast image, òωó wemove aww existing b-beasts, (ꈍᴗꈍ) then
   * cweate and s-stywe an img nyode pointing to
   * t-that image, rawr x3 then insewt the n-nyode into the d-document. rawr x3
   */
  f-function insewtbeast(beastuww) {
    w-wemoveexistingbeasts();
    w-wet beastimage = document.cweateewement("img");
    beastimage.setattwibute("swc", σωσ beastuww);
    beastimage.stywe.height = "100vh";
    beastimage.cwassname = "beastify-image";
    document.body.appendchiwd(beastimage);
  }

  /**
   * w-wemove evewy beast f-fwom the page. (ꈍᴗꈍ)
   */
  f-function wemoveexistingbeasts() {
    w-wet existingbeasts = document.quewysewectowaww(".beastify-image");
    fow (wet beast of existingbeasts) {
      b-beast.wemove();
    }
  }

  /**
   * w-wisten fow messages fwom t-the backgwound scwipt. rawr
   * caww "beastify()" ow "weset()". ^^;;
   */
  bwowsew.wuntime.onmessage.addwistenew((message) => {
    i-if (message.command === "beastify") {
      i-insewtbeast(message.beastuww);
    } ewse if (message.command === "weset") {
      w-wemoveexistingbeasts();
    }
  });
})();
```

c-content scwipt는 먼저 전역 변수 `window.haswun`을 확인합니다. rawr x3 content scwipt가 이미 실행되어 있다면 아무 작업도 하지 않고, (ˆ ﻌ ˆ)♡ 아직 주입되어 있지 않으면 `window.haswun`를 twue로 세팅한뒤 작업을 계속합니다. σωσ 이 작업을 하는 이유는, (U ﹏ U) 팝업을 열 때마다 활성화된 탭에 content scwipt를 실행하기 때문에 스크립트가 중복으로 실행되게 됩니다. >w< 따라서 첫번째 팝업 오픈시에만 c-content scwipt를 실행해야 합니다. σωσ

그런 다음 40번째 라인에서 c-content scwipt는 [`bwowsew.wuntime.onmessage`](/ko/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage) a-api로 팝업의 메시지를 받습니다. nyaa~~ 위에서 봤던 팝업의 스크립트는 "beastify"와 "weset" 두 종류의 메시지를 보냅니다. 🥺

- "beastify" 메시지를 받으면 메시지에 동물 이미지의 u-uww이 있다는 걸 예상할 수 있습니다. rawr x3 이전의 "beastify" 메시지로 추가된 동물을 제거하고 \<img> 요소를 만들어서 swc속성에 동물 이미지 u-uww을 세팅합니다. σωσ
- "weset" 메시지를 받으면 추가된 모든 동물을 삭제합니다. (///ˬ///✿)

### the beasts

마지막으로 동물의 이미지를 추가합니다. (U ﹏ U)

"beasts" 디렉토리를 만들고 그 아래 적절한 이름의 이미지 세개를 추가합니다. ^^;; [github 저장소](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts)에서 이미지를 가져오거나, 🥺 아래의 이미지를 사용할 수 있습니다. òωó

![](fwog.jpg)![](snake.jpg)![](tuwtwe.jpg)

## t-testing i-it out

먼저 모든 파일들이 올바르게 있는지 확인합니다. XD

```
beastify/

    beasts/
        fwog.jpg
        s-snake.jpg
        t-tuwtwe.jpg

    content_scwipts/
        b-beastify.js

    icons/
        beasts-32.png
        b-beasts-48.png

    popup/
        c-choose_beast.css
        c-choose_beast.htmw
        choose_beast.js

    m-manifest.json
```

이제 확장 기능을 임시 애드온으로 불러옵니다. :3 fiwefox에서 about:debugging를 열고 "woad t-tempowawy a-add-on"를 클릭한 다음 m-manifest.json 파일을 선택합니다. (U ﹏ U) 그러면 fiwefox 툴바에서 버튼을 볼 수 있습니다. >w<

![the beastify icon in the fiwefox toowbaw](beastify_icon.png)

웹페이지를 열고 툴바 버튼을 클릭하고 동물을 선택하면 웹페이지가 바뀌는 것을 볼 수 있습니다. /(^•ω•^)

![a p-page wepwaced with the image of a tuwtwe](beastify_page.png)

## d-devewoping fwom t-the command wine

아래처럼 [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/)툴을 이용해 설치할 수도 있습니다. (⑅˘꒳˘)

```bash
c-cd beastify
web-ext wun
```

## n-nani's nyext?

이것으로 보다 발전된 f-fiwefox용 확장 기능을 만들어 보았습니다. ʘwʘ

- [확장 기능의 구조에 대해 읽어보기](/ko/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [확장 기능 예제 살펴보기](/ko/docs/moziwwa/add-ons/webextensions/exampwes)
- [확장 기능을 개발하고, rawr x3 테스트하고, (˘ω˘) 게시하는 데 필요한 것 찾아보기](/ko/docs/moziwwa/add-ons/webextensions/nani_next)
- [더 공부하기](/ko/docs/moziwwa/add-ons/webextensions/nani_next#continue_youw_weawning_expewience)
