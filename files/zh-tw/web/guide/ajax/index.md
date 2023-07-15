---
title: Ajax
slug: Web/Guide/AJAX
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-TW/docs/Web/Guide")}}
</section>

**非同步 JavaScript 及 XML**（Asynchronous JavaScript and XML，[AJAX](https://www.semanticscholar.org/paper/Ajax%3A-A-New-Approach-to-Web-Applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df)）並不能稱做是種「技術」，而是 2005 年時由 Jesse James Garrett 所發明的術語，描述一種使用數個既有技術的「新」方法。這些技術包括 [HTML](/zh-TW/docs/Web/HTML) 或 [XHTML](/zh-TW/docs/Glossary/XHTML)、[層疊樣式表](/zh-TW/docs/Web/CSS)、[JavaScript](/zh-TW/docs/Web/JavaScript)、[文件物件模型](/zh-TW/docs/Web/API/Document_Object_Model)、[XML](/zh-TW/docs/Web/XML)、[XSLT](/zh-TW/docs/Web/XSLT) 以及最重要的 {{domxref("XMLHttpRequest")}} 物件。當這些技術被結合在 Ajax 模型中，Web 應用程式便能快速、即時更動介面及內容，不需要重新讀取整個網頁，讓程式更快回應使用者的操作。

雖然 X 在 Ajax 中代表 XML，但由於 {{glossary("JSON")}} 的許多優點，如輕量以及其本身就是 JavaScript 的一部分等，讓現今 JSON 比起 XML 被更廣泛的使用。JSON 與 XML 兩者都被用來在 Ajax 模型中包裝資訊。

## 範例

### 第一步 – 如何發出 HTTP 請求

為了使用 JavaScript 向伺服器發送 [HTTP](/zh-TW/docs/Web/HTTP) 請求，便需要一個能夠提供相關功能的類別實體。Mozilla、Safari 及其他瀏覽器則隨後跟進，實作了 `XMLHttpRequest` 類別，以提供微軟最初的 ActiveX 物件中的方法及屬性。

因此，為了建立能夠跨瀏覽器的物件實體，可以這麼寫：

```js
const httpRequest = new XMLHttpRequest();
```

> **備註：** 出於解說上的需要，上述代碼使用最簡方式建立 XMLHTTP 的實體。較貼近實際運用的範例，見第三步。

接下來是要決定伺服器傳回資料後的處理方式，此時你只要以 `onreadystatechange` 這個屬性指明要處理傳回值的 JavaScript 函式名稱即可，例如：

```js
function handler() {
  // Process the server response here.
}

httpRequest.onreadystatechange = handler;
```

注意，指定的函式名稱後不加括號也沒有參數。這只是簡單的賦值，而非真的呼叫函數。除了指定函式名稱外，你也能用 Javascript 即時定義函式的技巧（稱為〝匿名函數〞）來定一個新的處理函式，如下：

```js
httpRequest.onreadystatechange = () => {
  // 做些事
};
```

決定處理方式之後你得確實發出 request，此時需叫用 HTTP request 類別的 `open()` 及 `send()` 方法，如下：

```js
httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send();
```

- `open()` 的第一個參數是 HTTP request 的方法，也就是從 GET、POST、HEAD 等伺服器支援的方法中擇一使用。為遵循 HTTP 標準，請記得這些方法都是大寫，否則有的瀏覽器（如 Firefox）不會處理這些請求。其他可用的 HTTP request 方法的列表請參考 [W3C 規格書](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)。
- 第二個參數是請求頁面的 URL。基於安全考量，你不能叫用同網域以外的網頁。如果網域不同，則叫用 `open()` 時會出現「權限不足，拒絕存取」那類的錯誤。常見的錯誤多為在 domain.tld 的網站下呼叫 www\.domain.tld 中的網頁，僅是一點點差別都不行。
- 第三個參數決定此 request 是否不同步進行，如果設定為 `TRUE` 則即使伺服器尚未傳回資料也會繼續執行其餘的程式，這也就是 AJAX 中第一個 A 代表的意義。

`send()` 的參數在以 POST 發出 request 時，可以是任何想傳給伺服器的東西，而資料則以查詢字串的方式列出，例如：

```plain
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

不過如果你想要以 POST 方式傳送資料，則必須先將 MIME 型態改好，如下：

```js
httpRequest.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded",
);
```

否則伺服器就不會理你傳過來的資料了。

### 第二步 – 處理伺服器傳回的資料

傳出 request 時必須提供處理傳回值的函數名稱，這個函數是用來處理伺服器的回應。

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

那麼來看看這個函數該做些什麼。首先，它必須檢查 request 目前的狀態。如果狀態值為 4 代表伺服器已經傳回所有資訊了，便可以開始解析所得資訊。

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  // 一切 ok, 繼續解析
} else {
  // 還沒完成
}
```

`readyState` 所有可能的值如下：

- 0（還沒開始）
- 1（讀取中）
- 2（已讀取）
- 3（資訊交換中）
- 4（一切完成）

接下來要檢查伺服器傳回的 HTTP 狀態碼。所有狀態碼列表可於 [W3C 網站](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)上查到，但我們要管的是 `200 OK` 這種狀態。

```js
if (httpRequest.status === 200) {
  // 萬事具備
} else {
  // 似乎有點問題。
  // 或許伺服器傳回了 404（查無此頁）
  // 或者 500（內部錯誤）什麼的。
}
```

檢查傳回的 HTTP 狀態碼後，要怎麼處理傳回的資料就由你決定了。有兩種存取資料的方式：

- `httpRequest.responseText`——這樣會把傳回值視為字串用
- `httpRequest.responseXML`——這樣會把傳回值視為 `XMLDocument` 物件，而後可用 JavaScript DOM 相關函式處理

### 第三步 – 簡單範例

好，接著就做一次簡單的 HTTP 範例，演示方才的各項技巧。這段 JavaScript 會向伺服器要一份裡頭有「I'm a test.」字樣的 HTML 文件（`test.html`），而後以 `alert()` 將文件內容列出。

```html
<button id="ajaxButton" type="button">Make a request</button>

<script>
  (function () {
    var httpRequest;
    document
      .getElementById("ajaxButton")
      .addEventListener("click", makeRequest);

    function makeRequest() {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        alert("Giving up :( Cannot create an XMLHTTP instance");
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open("GET", "test.html");
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert("There was a problem with the request.");
        }
      }
    }
  })();
</script>
```

在此範例中：

- 首先使用者按下「Make a request」
- 這麼一來就會呼叫 `makeRequest()` 函式，亦傳入參數值 `test.html`（也就是那份 HTML 檔的名稱，放在同目錄下）
- 接著發出 request，而後會將主導權交給 `onreadystatechange` 指定的 `alertContents()` 函式
- `alertContents()` 檢查回應是否正常，而後以 `alert()` 將 `test.html` 的內容列出

你可以[由此測試本例](http://www.w3clubs.com/mozdev/httprequest_test.html)，也可以參考[測試檔案](http://www.w3clubs.com/mozdev/test.html)。

> **備註：** 如果你傳送一個要求到一段代碼，而這段代碼將回應 XML 而非靜態的 HTML 檔，那則必須要設定一個可以在 IE 中運作的 header。如果我們不設定 header `Content-Type: application/xml`，IE 將會在我們試圖運作的 XML 項目行下，回應一個 「Object Expected」 的錯誤。

> **備註：** 如果我們沒有設定 header `Cache-Control: no-cache`，那瀏覽器將會藏匿 response 並且不再重新傳送 request，造成除錯上的挑戰。我們也可以增加一個 always-different GET 參數，像是 timestamp 或 random number（詳見[bypassing the cache](/zh-TW/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache)）

> **備註：** If the `httpRequest` variable is used globally, competing functions calling `makeRequest()` can overwrite each other, causing a race condition. Declaring the `httpRequest` variable local to a [closure](/zh-TW/JavaScript/Guide/Closures) containing the AJAX functions avoids this.

In the event of a communication error (such as the server going down), an exception will be thrown in the `onreadystatechange` method when accessing the response status. To mitigate this problem, you could wrap your `if...then` statement in a `try...catch`:

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("There was a problem with the request.");
      }
    }
  } catch (e) {
    alert("Caught Exception: " + e.description);
  }
}
```

### 第四步 – 運用 XML 資料

前面的例子中，在收到 HTTP 傳回值後我們以物件的 `reponseText` 屬性接收 `test.html` 檔案的內容，接著來試試 `responseXML` 屬性。

首先，我們得做個格式正確的 XML 文件以便稍後取用。文件（`test.xml`）內容如下：

```html
<?xml version="1.0" ?>
<root> I'm a test. </root>
```

在程式中，我們叫用檔案的地方只須略事修改如下：

```js
...
onclick="makeRequest('test.xml')">
...
```

接著在 `alertContents()` 中，我們把 `alert(http_request.responseText);` 改成這樣：

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName("root").item(0);
alert(root_node.firstChild.data);
```

這樣一來我們便可取得 `responseXML` 所傳回的 `XMLDocument` 物件，而後以 DOM 方法取用 XML 文件的內容。你可以參考 [`test.xml` 的原始碼](http://www.w3clubs.com/mozdev/test.xml)以及修改過後的[測試程式](http://www.w3clubs.com/mozdev/httprequest_test_xml.html)。

關於 DOM 方法，請參考 [Mozilla DOM](http://www.mozilla.org/docs/dom/) 文件。

### Step 5 – Working with data

Finally, let's send some data to the server and receive a response. Our JavaScript will request a dynamic page this time, `test.php`, which will take the data we send and return a "computed" string - "Hello, \[user data]!" - which we'll `alert().`

First we'll add a text box to our HTML so the user can enter their name:

```html
<label
  >Your name:
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

We'll also add a line to our event handler to get the user's data from the text box and send it to the `makeRequest()` function along with the URL of our server-side script:

```js
document.getElementById("ajaxButton").onclick = function () {
  var userName = document.getElementById("ajaxTextbox").value;
  makeRequest("test.php", userName);
};
```

We need to modify `makeRequest()` to accept the user data and pass it along to the server. We'll change the request method from `GET` to `POST`, and include our data as a parameter in the call to `httpRequest.send()`:

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

The function `alertContents()` can be written the same way it was in Step 3 to alert our computed string, if that's all the server returns. However, let's say the server is going to return both the computed string and the original user data. So if our user typed "Jane" in the text box, the server's response would look like this:

`{"userData":"Jane","computedString":"Hi, Jane!"}`

To use this data within `alertContents()`, we can't just alert the `responseText`, we have to parse it and alert `computedString`, the property we want:

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert("There was a problem with the request.");
    }
  }
}
```

The `test.php file should contain the following:`

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name;
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

For more on DOM methods, be sure to check out [Document Object Model (DOM)](/zh-TW/docs/Web/API/Document_Object_Model).

## 參見

- [使用 XMLHttpRequest API](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - : {{domxref("XMLHttpRequest")}} 是 Ajax 的核心。這篇文章將解釋如何使用一些 Ajax 技術，例如：
    - [分析及處理伺服器回應](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#處理回應)
    - [監視請求進度](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#監視進度)
    - [提交表單與上傳二進制檔案](/zh-TW/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#提交表單與上傳檔案)——使用*單純的* Ajax，或使用 [`FormData`](/zh-TW/docs/DOM/XMLHttpRequest/FormData) 物件
    - 在 [Web worker](/zh-TW/docs/Web/API/Worker) 中使用 Ajax
- [_Pure-Ajax_ navigation example](/zh-TW/docs/Web/API/History_API/Example)
  - : This article provides a working (minimalist) example of a _pure-Ajax_ website composed only of three pages.
- [Sending and Receiving Binary Data](/zh-TW/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : The `responseType` property of the `XMLHttpRequest` object can be set to change the expected response type from the server. Possible values are the empty string (default), `arraybuffer`, `blob`, `document`, `json`, and `text`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This article will show some Ajax I/O techniques.
- [XML](/zh-TW/docs/Web/XML)
  - : 可擴展標記語言（Extensible Markup Language，XML）是 W3C 推薦的用於創建特殊用途標記語言的通用標記語言。它是 SGML 的簡化子集，能夠描述許多不同類型的數據。其主要目的是促進不同系統間的數據共享，特別是通過網際網路連接的系統。
- [解析和序列化 XML](/zh-TW/docs/Web/Guide/Parsing_and_serializing_XML)
  - : 如何從一串字串，一個檔案中透過 Javascript 解析一個 XML 文件 ，以及如何將 XML 檔案序列化成字串、Javascript 物件樹(JXON) 或檔案。
- [XPath](/zh-TW/docs/Web/XPath)
  - : XPath stands for **X**ML **Path** Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an [XML](/zh-TW/docs/Web/XML) document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.
- {{domxref("FileReader")}} API
  - : The `FileReader` API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read. File objects may be obtained from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, or from a drag and drop operation's {{domxref("DataTransfer")}} object.
- [HTML in XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : The [XMLHttpRequest](https://xhr.spec.whatwg.org/) specification adds HTML parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using `XMLHttpRequest`.
- [XMLHttpRequest specification](https://xhr.spec.whatwg.org/)
  - : WHATWG Living Standard
