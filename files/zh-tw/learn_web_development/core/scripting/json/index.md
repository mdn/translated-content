---
title: 使用 JSON 資料
slug: Learn_web_development/Core/Scripting/JSON
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) 為將結構化資料 (structured data) 呈現為 JavaScript 物件的標準格式，常用於網站上的資料呈現、傳輸 (例如將資料從伺服器送至用戶端，以利顯示網頁)。你應該會常常遇到，因此本文將說明 JavaScript 搭配 JSON 時所應知道的觀念，包含如何在 JSON 物件中存取資料項目，並寫出你自己的 JSON。

<table>
  <tbody>
    <tr>
      <th scope="row">必要條件：</th>
      <td>
        基礎的計算機素養、了解 HTML 與 CSS 的基本概念、熟悉 JavaScript (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >First steps</a
        >〉與〈<a href="/zh-TW/docs/Learn_web_development/Core/Scripting"
          >Building blocks</a
        >〉) 與 OOJS 基本概念 (參閱〈<a
          href="/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics"
          >Introduction to objects</a
        >〉)。
      </td>
    </tr>
    <tr>
      <th scope="row">主旨：</th>
      <td>了解應如何使用 JSON 格式所儲存的資料，建立自己的 JSON 物件。</td>
    </tr>
  </tbody>
</table>

## 說真的，到底什麼是 JSON？

{{glossary("JSON")}} 是依照 JavaScript 物件語法的資料格式，經 [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) 推廣普及。雖然 JSON 是以 JavaScript 語法為基礎，但可獨立使用，且許多程式設計環境亦可讀取 (剖析) 並產生 JSON。

JSON 可能是物件或字串。當你想從 JSON 中讀取資料時，JSON 可作為物件；當要跨網路傳送 JSON 時，就會是字串。這不是什麼大問題 — JavaScript 提供全域 [JSON](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON) 物件，其內的函式可進行切換。

JSON 物件可儲存於其自有的檔案中，基本上就是副檔名為 `.json` 的文字檔案，以及 `application/json` 的 {{glossary("MIME type")}}。

### JSON 的架構

我們剛提到「JSON 物件基本上就是 JavaScript 物件」，而這敘述在大多數情況下都對。如同標準的 JavaScript 物件，你當然可在 JSON 之內加入相同的基本資料類型，如字串、數字、陣列、布林值，以及其他物件，接著同樣能再建構出資料繼承，如：

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

舉例來說，如果將此物件載入至 JavaScript 程式並將之儲存為「`superHeroes`」變數，如同〈[JavaScript 物件基本概念](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics)〉一文中提過的，接著能以相同的 存取其內部的資料，如下：

```js
superHeroes.hometown;
superHeroes["active"];
```

若要順著繼承往下存取資料，只要將必要的屬性名稱與陣列索引「鍊」在一起即可。舉例來說，如果要存取成員列表中的第二位英雄的第三項超能力，你必須：

```js
superHeroes["members"][1]["powers"][2];
```

1. 首先要有變數名稱 — `superHeroes`。
2. 要在變數中存取 `members` 屬性，所以用 `["members"]`。
3. `members` 包含由物件產生陣列。我們要存取陣列中的第二個物件，所以用 `[1]`。
4. 在此物件中，我們要存取 `powers` 屬性，所以用 `["powers"]`。
5. 在 `powers` 屬性中有 1 個陣列具備所選超級英雄的能力。我們要選第三種能力，所以用 `[2]`。

> [!NOTE]
> 我們在 [JSONText.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) 範例 (參閱[原始碼](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)) 的變數中，示範上述可用的 JSON。你可在自己瀏覽器的 JavaScript 主控台載入此程式碼，並存取變數中的資料。

### 陣列作為 JSON

我們在上面提過「 JSON 物件基本上就是 JavaScript 物件，而這敘述在大多數情況下都對」。其中「在大多數情況下都對」的理由，就是因為陣列也可以是有效的 JSON 物件，例如：

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

上面程式碼絕對是有效的 JSON。你可用陣列指數為開頭來存取陣列項目，例如 `[0]["powers"][0]`。

### 其他附註

- JSON 是純粹的資料格式 — 僅具備屬性，而無函式。
- JSON 需要雙引號，才能使用＼有效。所以最安全的方法就是以雙引號撰寫之。
- 單一個逗號或冒號放錯位置，也會讓 JSON 檔案出錯而無法運作。你應仔細檢視所有要使用的資料 (只要產生器程式能正確運作，由電腦產生的 JSON 也就不容易出錯)。你可透過如 [JSONLint](http://jsonlint.com/) 的應用程式檢驗 JSON。
- 不限於陣列或物件，只要是符合標準 JSON 物件形式的任何資料，都可以夾帶進 JSON 檔案中。因此，單一字串或數字也可能是有效的 JSON 物件，但不一定有用就是了...

## 主動學習：完成 JSON 範例

現在就試著在網站上，透過某些 JSON 資料完成範例吧。

### 入門

在開始之前，先複製我們的 [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) 與 [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css) 到你的本端硬碟中。後者包含某些簡易的 CSS 可塑造網頁風格；前者則提供極簡單主體 HTML：

```html
<header></header>

<section></section>
```

加上 {{HTMLElement("script")}} 元素，才能納入稍後會在此習題中寫出來的 JavaScript 程式碼。目前只有 2 行程式碼，用以取得 {{HTMLElement("header")}} 與 {{HTMLElement("section")}} 元素的參考，並將之儲存於變數之中：

```js
var header = document.querySelector("header");
var section = document.querySelector("section");
```

你可到 GitHub 上找到此 JSON 資料：<https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>。

接著載入到頁面之中，並使用某些有趣的 DOM 操控 (DOM manipulation) 來顯示，如下：

![](json-superheroes.png)

### 載入我們的 JSON

若要將 JSON 載入至頁面，就要透過 {{domxref("XMLHttpRequest")}} API (通常稱為 **XHR**)。此是極好用的 JavaScript 物件，可讓網路請求透過 JavaScript (例如圖片、文字、JSON，甚至 HTML 片段) 來檢索伺幅器的資源，這也代表我們不需載入整個頁面，就能更新小部分的內容。如此可讓網頁反應速度更快；聽起來很棒吧？但可惜本文無法再深入講解更多細節。

1. 一開始，我們先針對要在變數中檢索的 JSON 檔案，將其網址儲存起來。把下列程式碼加到你 JavaScript 程式碼的最下方：

   ```js
   var requestURL =
     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
   ```

2. 為了建立請求，我們必須透過 `new` 關鍵字，先從 `XMLHttpRequest` 建構子建立新的請求物件實例。把下列加到最後一行：

   ```js
   var request = new XMLHttpRequest();
   ```

3. 現在用 [`open()`](/zh-TW/docs/Web/API/XMLHttpRequest/open) 函式開啟新的請求。加入下列程式碼：

   ```js
   request.open("GET", requestURL);
   ```

   這樣就顧到至少 2 個參數。當然也有其他參數可選擇。但這個簡易範例只需要 2 個強制參數：
   - 在設立網路請求時，應使用 HTTP 函式。因為這裡只要檢索簡單的資料，所以用 [`GET`](/zh-TW/docs/Web/HTTP/Reference/Methods/GET) 就可以。
   - URL 提供請求目的地 — 這也就是我們剛剛儲存的 JSON 檔案網址。

4. 接著加入下面 2 行程式碼。我們為 JSON 設定了 [`responseType`](/zh-TW/docs/Web/API/XMLHttpRequest/responseType)，告知伺服器應回傳 JSON 物件，再以 [`send()`](/zh-TW/docs/Web/API/XMLHttpRequest/send) 函式傳送請求：

   ```js
   request.responseType = "json";
   request.send();
   ```

5. 最後就是等待由伺服器所回傳的反應，再接著處理。把下列程式碼加入現有程式碼的最下方：

   ```js
   request.onload = function () {
     var superHeroes = request.response;
     populateHeader(superHeroes);
     showHeroes(superHeroes);
   };
   ```

在這裡，我們將所獲得的響應 (可到 [`response`](/zh-TW/docs/Web/API/XMLHttpRequest/response) 屬性中找到) 儲存到 `superHeroes` 變數之中。此變數現在會納入我們的 JSON。接著再把此 JSON 檔案送到 2 個函式呼叫。第一個函式呼叫會將正確資料填入 <`header>`；第二個函式呼叫則會為團隊中的各個英文建立資訊卡，再插入至 `<section>` 內。

當於請求物件上觸發載入事件時，會執行一個事件處理器。我們就將程式碼包裹至此處理器之中 (參閱 [`onload`](/zh-TW/docs/Web/API/XMLHttpRequestEventTarget/load_event)) — 只要成功回傳響應，就會觸發載入事件。之所以這樣做，是為了確保當我們要以 `request.response` 進行某件事時，此 `request.response` 絕對可用。

### 產生標頭

現在檢索過了 JSON 資料，接著就寫出上面參照過的 2 個函式來利用 JSON 資料吧。首先將下列函式定義加到先前的程式碼中：

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  var myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
```

我們已經將參數命名為 `jsonObj`，所以在這個函式之內就要用 jsonObj 呼叫此參數。這裡先以 [`createElement()`](/zh-TW/docs/Web/API/Document/createElement) 建立 1 組 {{HTMLElement("h1")}} 元素、將其 [`textContent`](/zh-TW/docs/Web/API/Node/textContent) 指定為 JSON 的 `squadName` 屬性、透過 [`appendChild()`](/zh-TW/docs/Web/API/Node/appendChild) 將之附加到標頭。接著 {{HTMLElement("p")}} 元素依樣畫葫蘆一遍：建立、設定其文字內容、附加到標頭。唯一不同之處，就是將該文字設定為 1 組串接字串 (Concatenated string)，其內包含 JSON 的 `homeTown` 與 `formed` 屬性。

### 建立超級英雄的資訊卡片

現在將下列函式加到程式碼底端，用以建立並顯示超級英雄的卡片：

```js
function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];

  for (i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

我們先把 JSON 的 `members` 屬性儲存到新的變數中。此陣列所具備的多個物件，均包含了各個超級英雄的資訊。

接著我們以 [for 迴圈](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop)循環陣列中的各個物件。針對每個物件都會：

1. 建立數個新的元素：1 組 `<article>`、1 組 `<h2>`、3 組 `<p>`、1 組 `<ul>`。
2. 讓 `<h2>` 納入目前超級英雄的 `name`。
3. 接著 3 個段落分別是英雄的 `secretIdentity`、`age`、`Superpowers`，在列表中帶出相關資訊。
4. 另以新變數 `superPowers` 儲存 `powers` 屬性 — 其中包含 1 組陣列以列出目前英雄的超能力。
5. 再用另一個 `for` 迴圈逐一巡過目前英雄的超能力。針對每一項超能力，我們再建立 1 組 `<li>` 元素，把超能力放進該元素之中，再透過 `appendChild()` 把 `listItem` 放入 `<ul>` 元素之內 (`myList`)。
6. 最後就是在 `<article>` (`myArticle`) 之內附加 `<h2>`、`<p>`、`<ul>`；再把 `<article>` 附加於 `<section>` 之內。這附加的順序極為重要，因為這也會是 HTML 中的顯示順序。

> [!NOTE]
> 如果你無法讓此範例運作，可參閱我們的 [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) 原始碼 (亦可看到[實際執行情況](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)。)

> [!NOTE]
> 如果你無法用我們說過的點記法 (dot-)＼括弧記法 (bracket notation) 來存取 JSON，則可用新分頁或自己的文字編輯器開啟 [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) 檔案並參考之。你也可再回去看看 [JavaScript 物件基礎概念](/zh-TW/docs/Learn_web_development/Core/Scripting/Object_basics) ，再次了解點＼括弧記法。

## 物件與文字交互轉換

上述是存取 JSON 的簡易範例，因為我們設定要回傳響應的 XHR 已經是 JSON 格式。透過：

```js
request.responseType = "json";
```

但有時候沒這麼好運。我們有時會接收到文字字串格式的 JSON 資料，且必須將之轉換為物件。且當我們要以某種訊息傳送 JSON 資料時，也必須將之轉換為字串才能正確運作。還好，這 2 種問題在 Web 開發過程中甚為常見。內建的 [JSON](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON) 物件很早就新增到瀏覽器之中，且包含下列 2 種函式：

- [`parse()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)：接收文字字串形式的 JSON 物件作為參數，並回傳對應的物件。
- [`stringify()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)：接收 JSON 物件作為參數，並回傳對等的文字字串形式。

你可到 [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) 範例 (參閱[原始碼](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) 中看到第一個函式的運作情形。這其實跟我們先前範例所進行的事情一模一樣，不同之處在於我們設定 XHR 要回傳 JSON 為文字，接著再使用 `parse()` 轉換為實際的 JSON 物件。關鍵程式碼片段如下：

```js
request.open("GET", requestURL);
request.responseType = "text"; // now we're getting a string!
request.send();

request.onload = function () {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};
```

你可能會猜 `stringify()` 就是反過來運作了吧？可在瀏覽器的 JavaScript 主控台上輸入下列程式碼，看看其運作方式：

```js
var myJSON = { name: "Chris", age: "38" };
myJSON;
var myString = JSON.stringify(myJSON);
myString;
```

這樣就建立了 JSON 物件了。接著檢查內容物之後，就可透過 `stringify()` 將之轉換為字串。將回傳值儲存到新變數之中，再檢查一次即可。

## 摘要

我們透過本文簡單介紹了該如何在程式中使用 JSON、該如何建立＼剖析 JSON、該如何存取其內的資料。接著就要說明物件導向 JavaScript（OOJS）。

## 參見

- [JSON 物件參考頁面](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest 物件參考頁面](/zh-TW/docs/Web/API/XMLHttpRequest)
- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTTP 請求函式](/zh-TW/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
