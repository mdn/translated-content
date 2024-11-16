---
title: 透過用戶代理偵測瀏覽器
slug: Web/HTTP/Browser_detection_using_the_user_agent
---

{{HTTPSidebar}}

針對不同的瀏覽器給予不同的網頁或服務，通常不是好主意：網路的原意，是要讓所有人都能訪問，無論他們使用何種瀏覽器或何種設備。你的網站可以透過基於（瀏覽器）功能可用性的漸進增強法開發，而不是特別指定某種瀏覽器。

不過瀏覽器與標準並不是完美的，有些特殊情況依舊需要偵測瀏覽器。透過用戶代理（user agent）去偵測瀏覽器看似簡單，要做好卻頗為困難。這份文件會盡可能引導你正確處理這種事。

> [!NOTE]
> 因為很重要所以再說一次：實行用戶代理嗅探（User Agent sniffing）通常不是好主意。問題通常都會有更好、更通用的解決方法！

## 使用瀏覽器偵測前應當考慮什麼

在考慮透過用戶代理字串，去偵測使用瀏覽器時，首先要盡可能避免這種用法。先從認清**為什麼**要這麼做開始。

- 你正針對某瀏覽器的特定錯誤奮戰著？
  - : 去專業論壇閱讀或提問：你不太可能是第一個碰上問題的人。另外，去找專家、或只是與你有不同觀點的人問問看，也會對你的除錯思路有所幫助。如果問題看來頗為罕見，你應該去檢查這個錯誤是不是透過缺陷跟蹤管理系統（[Mozilla](https://bugzilla.mozilla.org/)、[WebKit](https://bugs.webkit.org/)、[Blink](https://www.chromium.org/issue-tracking/)、[Opera](https://bugs.opera.com/)）報告到瀏覽器供應商。瀏覽器供應商很重視錯誤報告，相關分析也可能提示該錯誤的其他解決辦法。
- 你正試圖檢查某個特定功能是否存在？
  - : 你的網站需要用到某些瀏覽器不支援的功能，並給這些用戶功能更少，但你知道能正常顯示的網站。這類用戶代理嗅探的理由非常糟糕，因為大多數的瀏覽器，最終都有可能支援該功能。對所有瀏覽器都予以測試也不實際。**絕對不要**用戶代理嗅探、功能偵測是**永遠**的替代方案。
- 你希望給不同的瀏覽器不同的 HTML？
  - : 這種作法通常不太好，不過有時候卻是必要的。在此種情況下，你首先要分析是否真該這麼做。你能藉由加入某些無語意的 {{ HTMLElement("div") }} 或 {{ HTMLElement("span") }} 元素避免嗎？與難以完成的用戶代理偵測比起來，HTML 整潔性的稍稍降低變得相當值得。另外，請重新構思你的設計：你能藉由漸進增強或是流動排版（fluid layouts）來消除用戶代理偵測的需求嗎？

## 避免用戶代理偵測

如果要避免用戶代理偵測，有以下選項！

- 功能偵測

  - : 功能偵測使你無須弄清是哪種瀏覽器在渲染你的網頁，只須檢查需要的具體功能是否能用。如果不能用，就採取備用方案。在極少數的情況下，各瀏覽器行為有所不同。面對這種情況，不要偵測用戶代理，而是用實作測試來檢查瀏覽器 API、並搞清楚用法。最近有個好例子：[Chrome 針對正規表達式，添加了實驗性的 lookbehind 支援](https://chromestatus.com/feature/5668726032564224)，但其他瀏覽器並不支援。你可能以為要這麼用：

    ```js
    // 這個程式以特殊表示法把字串分開來

    if (navigator.userAgent.indexOf("Chrome") !== -1) {
      // 好，這用戶應該是支援 look-behind regexps
      // 不要在不支援該功能的瀏覽器使用 /(?<=[A-Z])/
      // 因為瀏覽器都會解析整個腳本，包括從未執行過的代碼部分。
      // 進而讓不支援該功能的瀏覽器拋出語法錯誤。
      var camelCaseExpression = new RegExp("(?<=[A-Z])");
      var splitUpString = function (str) {
        return ("" + str).split(camelCaseExpression);
      };
    } else {
      /* 這個語法的性能差得多，但能動 */
      var splitUpString = function (str) {
        return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
      };
    }
    console.log(splitUpString("fooBare")); // ["fooB", "are"]
    console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
    ```

    但這程式其實很糟糕、考慮也很不周到。如果 Chrome 把 lookbehind 這功能移走呢？如果其他瀏覽器支援了 lookbehind 正規表達式呢？如果其他瀏覽器在用戶代理名字內，混入了 _Chrome_ 呢？這個列表會因此，讓可怕的錯誤不斷發生。因此，你應該用以下的功能檢測：

    ```js
    var isLookBehindSupported = false;
    try {
      isLookBehindSupported = !!new RegExp("(?<=)");
    } catch (e) {
      // 不支援的瀏覽器會出現 lookbehind expressions err
    }
    var splitUpString = isLookBehindSupported
      ? function (str) {
          return ("" + str).split(new RegExp("(?<=[A-Z])"));
        }
      : function (str) {
          return str.replace(/[A-Z]/g, "z$1").split(/z(?=[A-Z])/g);
        };
    ```

    這程式**一定**會讓瀏覽器在不嗅探用戶代理的情況下測試功能。要作類似這樣的事情，**完全沒有**動用用戶代理嗅探的理由。

    最後，上面的程式碼還附帶一個必須考量的，有關跨瀏覽器的關鍵問題：不要在不支援的瀏覽器，使用到要測試的 API。這聽來簡單，但有時候不是這樣：同樣以上面為例，在簡寫正規表達式使用 lookbehind（如 `/reg/igm`）會讓不支援該功能瀏覽器的解析器出錯。因此，你需要使用 _new RegExp("(?<=look_behind_stuff)");_ 而非 _/(?<=look_behind_stuff)/_，哪怕 lookbehind 已經支援了。

- 漸進增強（Progressive Enhancement）
  - : 此設計技術與網站開發的「層次」有關：它運用下而上的途徑、從簡單的層次開始，透過一連串的層次，漸漸增強網站的能力。
- 優雅降級（Graceful degradation）
  - : 這種由上而下的途徑，是先在建造網站時，就用上所有需要的功能，再調整到令舊版瀏覽器也能執行。這種途徑與漸進增強相比，難度更高、效率也更糟，不過在某些情況下也可能更管用。
- 行動設備偵測（Mobile Device Detection）

  - : 檢查是否透過行動設備上網，大概是用戶代理嗅探最常見的用途與誤用。偵測後要作什麼事，卻往往是被忽略的問題所在。開發者通常透過用戶代理嗅探，將用戶設備導向至易於觸碰的小螢幕，以便加強網站體驗。

    用戶代理這方面有時有用，但問題是所有設備不完全相同：有些行動設備的尺寸很大、有些桌機有一小塊觸控螢幕、有些人使用完全是不同世界的智慧型電視、甚至還有藉由翻轉平板、來動態改變設備長寬的人！

    因此，用戶代理嗅探絕不是好辦法。但是，還有更好的選擇：例如使用 [Navigator.maxTouchPoints](/zh-TW/docs/Web/API/Navigator/maxTouchPoints) 來檢查用戶設備有沒有觸控螢幕；接著在 _if (!("maxTouchPoints" in Navigator)) { /*程式寫在這*/}_ 時，就切回用戶代理檢查。利用這個訊息，來檢查設備有沒有觸控螢幕。

    不要為了觸控設備，就換掉整個排版。這只會讓自己更費工、維護更頭痛；而是加點讓觸摸更便利的東西：像是好按的按鈕（這可以透過在 CSS 增加字體大小完成）。以下是針對 #exampleButton 在手機環境時，增加 1em 的程式範例：

    ```js
    var hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
        var mQ = window.matchMedia &#x26;&#x26; matchMedia("(pointer:coarse)");
        if (mQ &#x26;&#x26; mQ.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
            hasTouchScreen = true; // depedicated, but good fallback
        } else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            hasTouchScreen = (
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        }
    }
    if (hasTouchScreen)
      document.getElementById("exampleButton").style.padding="1em";
    ```

    針對螢幕尺寸，則使用 _window.innerWidth_ 與 _window.addEventListener("resize", function(){ /*更新螢幕尺寸依賴的東西*/ })_。

    不要刪減小螢幕能看到的資訊，這只會激怒被逼著切到桌面版的用戶們；而是應該針對小螢幕，提供行列更少，但頁面更長的資訊；針對大螢幕，則提供行列更多，但頁面更短的資訊。這種效果能透過 [flexboxes](/zh-TW/docs/Learn/CSS/CSS_layout/Flexbox) 實現。如果需要有限支援舊版本，請使用 [floats](/zh-TW/docs/Learn/CSS/CSS_layout/Floats) 屬性。

    另外，試著把不相關或不重要的資訊放到下面、然後把資料放得有意義。然後雖然有點離題，但下面的詳細示例，可能會給你有力的見解和想法，放棄用戶代理嗅探。

    我們先想像一個由各種貓貓或狗狗的訊息框，所組成的頁面；每個訊息框都有圖片、概覽、還有歷史趣聞；而圖片即使在大螢幕上，也要保持最大的合理尺寸。為了讓內容有意義的排列在一起，所有的貓貓訊息框都和狗狗訊息框分開、兩種動物都不會混在一起。在大螢幕上，會節省具有多列的空間，從而減少了圖片左右兩側的間距。訊息框則會透過平分而被拆分為多列。

    現在我們能假設在原始碼裡面，狗狗訊息框都在上面、而貓貓訊息框都在下面。而這兩個框框都在同一個父元素之下。很明顯，有一個狗狗訊息框，就在貓貓訊息框的上面。第一個方法，就是使用水平的 [Flexbox](/zh-TW/docs/Learn/CSS/CSS_layout/Flexbox) 把內容組合起來。這樣，當頁面顯示給最終用戶時，狗狗訊息框就在頁面上方、而貓貓訊息框就在頁面下方；第二個方法，就是使用 [Column](/zh-TW/docs/Web/CSS/Layout_cookbook/Column_layouts) layout and resent 把所有的狗狗與貓貓排到右邊。在這種情況下，就能給沒有 flexboxes/multicolumns 的老舊版本提供適當的呈現：他們會呈現一列非常寬的框。

    再考慮一下這個例子：如果有人是想來看貓貓的，那我們就可以在原始碼裡面，把貓貓放到狗狗的上面。這樣一來，更多的人就可以在更小的螢幕上（內容折疊成一列）更快找到需要的內容。

    接著，確保程式是動態性的。用戶可以翻轉手機，以改變頁面長寬；或是未來使用某些類似功能的怪設備。不要為了用戶翻轉行為焦頭額爛、在使用開發工具確實檢查前也不要自滿。實踐的最佳辦法，就是在一個函式內透過螢幕尺寸，把所有可移動內容的程式分開。而分開這些程式的觸發點，則放在頁面載入、或觸動 [resize](/zh-TW/docs/Web/API/Window/resize_event) 事件時。如果載入新佈局頁面前，需要在函式內計算很多東西，請考慮對事件偵聽器使用 debouncing 以避免過度呼叫。

    另請注意，`(max-width: 25em)`, `not all and (min-width: 25em)`, and `(max-width: 24.99em)`是不一樣的：`(max-width: 25em)` 會排除 `(max-width: 25em)`；而 `not all and (min-width: 25em)` 則包含了 `(max-width: 25em)`。`(max-width: 24.99em)` 是仆街版的 `not all and (min-width: 25em)`。不要用 `(max-width: 24.99em)`，因為在字型很大、或解析度很高時，版面*可能*會跑掉。謹慎選擇正確的 media query、以及在 Javascript 正確使用 >=, <=, >, < 等運算符。因為 Javascript 可能把這些東西都混為一談，然後你的網站就會在某些尺寸下亂閃亂排。因此，徹底測試在不同寬高下，網站會怎麼改變，以確保佈局不出錯。

## 把用戶代理嗅探搞到最好

在探討所有能替代用戶代理嗅探的方法後，還是可能會有合理的理由，用到用戶代理嗅探。

其中一個例子，就是透過用戶代理嗅探，提供觸控螢幕的支援。詳請參閱上面的「行動設備偵測」章節。另一個例子，則是修復在沒有自動更新功能的瀏覽器上，所發生的錯誤。Windows 的 Internet Explorer 與 iOS 的 Webkit 就是個好實例。

Internet Explorer 在第九代以前，有著各種難以置信的問題。問題涵蓋了渲染、CSS、API 等方方面面。不過 IE9 之前的版本，是個相當~~機車~~特殊的例外。我們可以輕易透過該瀏覽器的特定功能，檢測到相關訊息。

蘋果強迫所有瀏覽器使用 Webkit 核心，所以 Webkit 的情形更糟糕；用戶也無法在舊設備上，得到更新的瀏覽器。大多數錯誤都能找出來，但某些錯誤，需要花更多時間抓出來。在這種情況下，使用用戶代理嗅探來可能是更有益的。

```js
var UA = navigator.userAgent,
  isWebkit =
    /\b(iPad|iPhone|iPod)\b/.test(UA) &&
    /WebKit/.test(UA) &&
    !/Edge/.test(UA) &&
    !window.MSStream;

var mediaQueryUpdated = true,
  mqL = [];
function whenMediaChanges() {
  mediaQueryUpdated = true;
}

var listenToMediaQuery = isWebkit
  ? function (mQ, f) {
      if (/height|width/.test(mQ.media)) mqL.push([mQ, f]);
      mQ.addListener(f), mQ.addListener(whenMediaChanges);
    }
  : function () {};
var destroyMediaQuery = isWebkit
  ? function (mQ) {
      for (var i = 0, len = mqL.length | 0; i < len; i = (i + 1) | 0)
        if (mqL[i][0] === mQ) mqL.splice(i, 1);
      mQ.removeListener(whenMediaChanges);
    }
  : listenToMediaQuery;

var orientationChanged = false;
addEventListener(
  "orientationchange",
  function () {
    orientationChanged = true;
  },
  PASSIVE_LISTENER_OPTION,
);

addEventListener(
  "resize",
  setTimeout.bind(
    0,
    function () {
      if (orientationChanged && !mediaQueryUpdated)
        for (var i = 0, len = mqL.length | 0; i < len; i = (i + 1) | 0)
          mqL[i][1](mqL[i][0]);
      mediaQueryUpdated = orientationChanged = false;
    },
    0,
  ),
);
```

## 你想找到用戶代理的哪個資訊

因為用戶代理字串的差異處並沒有統一，這方面會頗為棘手。

### 瀏覽器名稱

當別人說要「偵測瀏覽器」的時候，他們通常要的是「偵測排版引擎」：你真的要偵測到用戶在使用 Firefox 抑或相對應的 SeaMonkey，或偵測到在使用 Chrome 抑或相對應的 Chromium 嗎？還是說只要偵測瀏覽器用的是 Gecko 或是 WebKit 排版引擎？如果你要的是後者，請直接看後面的章節。

雖然有 Internet Explorer 這個明顯的例外，多數瀏覽器通常會把瀏覽器名字與版本用成 _BrowserName/VersionNumber_（_瀏覽器名/版本名_）格式。然而，因為用戶代理不是只有瀏覽器名提供這種格式，你不能找到瀏覽器的名字，你只能檢查該名字是否為你要尋找的目標。也請注意瀏覽器還會「造假」：例如 Chrome 就會同時宣稱自己是 Chrome 與 Safari。因此，如果要找出 Safari 瀏覽器，你就要在找出 Safari 字串的同時，排除掉 Chrome 字串。此外，Chromium 也常常宣稱自己是 Chrome、而 Seamonkey 有時也會宣稱自己是 Firefox。

另請注意，不要針對 BrowserName 使用簡單的正規表達式，因為用戶代理可能有不是 Keyword/Value 的字串。例如 Safari 與 Chrome 在字串內就包含了 like Gecko（類似 Gecko）。

|                   | 必定包含                   | 必定不包含                 | 註解                                                                                                   |
| ----------------- | -------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| Firefox           | Firefox/xyz                | Seamonkey/xyz              |                                                                                                        |
| Seamonkey         | Seamonkey/xyz              |                            |                                                                                                        |
| Chrome            | Chrome/xyz                 | Chromium/xyz               |                                                                                                        |
| Chromium          | Chromium/xyz               |                            |                                                                                                        |
| Safari            | Safari/xyz                 | Chrome/xyz or Chromium/xyz | Safari 給出了兩個版本號、一個是偏技術性的 Safari/xyz token，另一個則是偏向用戶友好的 Version/xyz token |
| Opera             | OPR/xyz \[1]Opera/xyz \[2] |                            | \[1] Opera 15+ (Blink-based engine)\[2] Opera 12- (Presto-based engine)                                |
| Internet Explorer | ; MSIE xyz;                |                            | Internet Explorer 並不使用 _BrowserName/VersionNumber_ 格式                                            |

當然這裡不保證沒有其他瀏覽器，騎劫其他瀏覽器的可能，例如過去的 Chrome 就騎劫過 Safari。這也是為什麼透過用戶代理字串來探測瀏覽器是靠不住的，它也只能用在探測版本號（不太可能有騎劫過去版本號的情形）。

### 瀏覽器版本

瀏覽器版本通常，但不是每次，都把數值放在用戶代理字串的 _BrowserName/VersionNumber_ token。把版本號放在 MSIE 之後的 Internet Explorer、還有加了 Version/_VersionNumber_ token 的第十代以後 Opera 版本就是明顯的例子。

再次強調，因為無法確保尋找的瀏覽器會包含有效的數字，請確認你針對的瀏覽器，選取了正確的 token。

### 排版引擎

如同前述，多數情況下，找尋排版引擎（rendering engine）更為恰當。這能讓少有人知的瀏覽器，不致遭到排除在外。使用某一種排版引擎的瀏覽器，共享相同的網頁瀏覽：這種「一處有效、處處有效」的假設，是很公平的。

目前有五大主流的排版引擎：Trident, Gecko, Presto, Blink 與 WebKit。因為排版引擎嗅探頗為常見，許多用戶代理也會加入其他的排版引擎，以觸發探測。所以在偵測排版引擎的時候，當心別錯誤觸發。

|          | 絕對有          |                                                                                                                                                                                              |
| -------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gecko    | Gecko/xyz       |                                                                                                                                                                                              |
| WebKit   | AppleWebKit/xyz | 請注意 WebKit 瀏覽器會加上「like Gecko」字串。如果探測不加留意，就會錯誤觸發針對 Gecko 的情形。                                                                                              |
| Presto   | Opera/xyz       | **注意：**Presto 在 Opera15 以後不再使用（請參見 Blink）                                                                                                                                     |
| Trident  | Trident/xyz     | Internet Explorer 把這個 token 放在 User Agent String 的 _comment_（註解）部份                                                                                                               |
| EdgeHTML | Edge/xyz        | The non-Chromium Edge puts its engine version after the _Edge/_ token, not the application version. **Note:** EdgeHTML is no longer used in Edge browser builds >= version 79 (see 'Blink'). |
| Blink    | Chrome/xyz      |                                                                                                                                                                                              |

## 排版引擎版本

除了 Gecko 這個著名的例外，多數排版引擎版本的 token 通常會是 _RenderingEngine/VersionNumber_（排版引擎/版本號）。Gecko 把版本號放在用戶代理內，位於 `rv:` 字串後的註解部份。但在 Gecko 14（攜帶版）或 Gecko 17（桌面版）以後，版本號也出現在 Gecko/version token 裡面（之前的版本則是寫建置日期、固定的日期則呼叫 GeckoTrail）。

## 作業系統

大多數的用戶代理都會表明自己固定字符串在個作業系統上運行（儘管如 Firefox OS 這種以網路為中心的平台並沒有這樣做），不過格式的差異卻頗大。它是個固定字串，位於用戶代理註解部份的兩個分號間。對每個瀏覽器而言。這些字串是特定的。這些字串給出了作業系統、通常也給出他們的版本以及在哪個設備上運作（32 位元或 64 位元、抑或 Mac 的 Intel/PPC）。

如同其他個案，這些字串可能在未來會有所變動，只應該用於檢測已經出現的瀏覽器。在瀏覽器的新版本出現後，也要進行技術研究，以確保程式能夠適應。

### 手機、平板、桌機

最常實行用戶代理嗅探的理由，是判別瀏覽器是在哪個設備執行。這麼做的目的是提供不同類型的 HTML 內容給不同類型的上網設備。

- 絕對不要假設某個瀏覽器或排版引擎，只在某種類型的設備執行。更不要對不同的瀏覽器或排版引擎，給予不同的預設值。
- 也絕對不要用 OS token 來定義該瀏覽器在手機、平板、抑或桌機上執行。作業系統可能在不只一種設備運作。例如，Android 可以在手機、也可以在平板上運作。

以下表格概括了主要的瀏覽器製造者，如何表明它們的瀏覽器在手機上運作：

| 瀏覽器                                           | 規則                                                                                                                                                                                                                                       | 示例                                                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                         | 註解內的 [**Mobile** 或 **Tablet** token](/zh-TW/docs/Gecko_user_agent_string_reference)                                                                                                                                                   | Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0                                                                                                 |
| WebKit-based (Android, Safari)                   | 註解外的 [**Mobile Safari** token](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html#//apple_ref/doc/uid/TP40006517-SW3) | Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30               |
| Blink-based (Chromium, Google Chrome, Opera 15+) | 註解外的 [**Mobile Safari** token](https://developer.chrome.com/multidevice/user-agent)                                                                                                                                                    | Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047 |
| Presto-based (Opera 12-)                         | 註解內的 [**Opera Mobi/xyz** token](https://blogs.opera.com/news/) (Opera 12-)                                                                                                                                                             | Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50                                                            |
| Internet Explorer                                | 註解內的 **IEMobile/xyz**                                                                                                                                                                                                                  | Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)                                                                            |

總之，我們建議藉著找出用戶代理的「Mobi」字串，來偵測行動設備。

> [!NOTE]
> 如果設備尺寸夠大的話，它就不會標示「Mobi」。針對這種情形，你應該提供桌面版網站。另外，因為最近桌面設備的觸控螢幕越來越多，為了提供最佳習慣，網站應該支援觸控輸入。
