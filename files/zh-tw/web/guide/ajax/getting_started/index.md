---
title: 入門篇
slug: Web/Guide/AJAX/Getting_Started
---

這篇文章說明 AJAX 相關技術的基礎，並提供兩個簡單的實際操作範例供您入門。

### AJAX 是什麼？

AJAX 代表 **A**synchronous **J**avaScript **A**nd **X**ML，即非同步 JavaScript 及 XML。簡單地說，AJAX 使用 {{domxref("XMLHttpRequest")}} 物件來與伺服器進行通訊。它可以傳送並接收多種格式的資訊，包括 JSON、XML、HTML、以及文字檔案。AJAX 最吸引人的特點是「非同步」的本質，這代表它可以與伺服溝通、交換資料、以及更新頁面，且無須重整網頁。

有兩項即將討論到的特點如下︰

- 無須重新載入整個頁面，便能對伺服器發送請求
- 分析並運用 XML 文件

### 第一步 – 如何發出 HTTP 請求

為了使用 JavaScript 向伺服器發送 HTTP 請求，便需要一個能夠提供相關功能的類別實體（an instance of a class）。這樣的類別最初由 Internet Explorer 以 ActiveX 物件的方式引入，稱為 `XMLHTTP`。Mozilla、Safari 及其他瀏覽器則隨後跟進，實作了 `XMLHttpRequest` 類別，以提供微軟最初的 ActiveX 物件中的方法及屬性。

因此，為了建立能夠跨瀏覽器的物件實體，可以這麼寫：

```js
// Old compatibility code, no longer needed.
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **備註：** 出於解說上的需要，上述代碼使用最簡方式建立 XMLHTTP 的實體。較貼近實際運用的範例，見第三步。

部分版本的 Mozilla 瀏覽器，在伺服器送回的資料未含 XML `mime-type` 標頭（header）時會出錯。為了避免這個問題，你可以用下列方法覆寫伺服器傳回的檔頭，以免傳回的不是 `text/xml`。

```plain
httpRequest = new XMLHttpRequest();
httpRequest.overrideMimeType('text/xml');
```

接下來是要決定伺服器傳回資料後的處理方式，此時你只要以 `onreadystatechange` 這個屬性指明要處理傳回值的 JavaScript 函式名稱即可，例如：

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

注意，指定的函式名稱後不加括號也沒有參數。這只是簡單的賦值，而非真的呼叫函數。除了指定函式名稱外，你也能用 Javascript 即時定義函式的技巧（稱為〝匿名函數〞）來定一個新的處理函式，如下：

```js
httpRequest.onreadystatechange = function () {
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
  "application/x-www-form-urlencoded"
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

（[資料來源：MSDN](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/readystate_1.asp)）

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

- `httpRequest.responseText` – 這樣會把傳回值視為字串用
- `httpRequest.responseXML` – 這樣會把傳回值視為 `XMLDocument` 物件，而後可用 JavaScript DOM 相關函式處理

### 第三步 – 簡單範例

好，接著就做一次簡單的 HTTP 範例，演示方才的各項技巧。這段 JavaScript 會向伺服器要一份裡頭有「I'm a test.」字樣的 HTML 文件(`test.html`)，而後以 `alert()` 將文件內容列出。

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
- 這麼一來就會呼叫 `makeRequest()` 函式，亦傳入參數值 `test.html` (也就是那份 HTML 檔的名稱，放在同目錄下)
- 接著發出 request，而後會將主導權交給 `onreadystatechange` 指定的 `alertContents()` 函式
- `alertContents()` 檢查回應是否正常，而後以 `alert()` 將 `test.html` 的內容列出

你可以[由此測試本例](http://www.w3clubs.com/mozdev/httprequest_test.html)，也可以參考[測試檔案](http://www.w3clubs.com/mozdev/test.html)。

> **備註：** 如果你傳送一個要求到一段代碼，而這段代碼將回應 XML 而非靜態的 HTML 檔，那則必須要設定一個可以在 IE 中運作的 header。如果我們不設定 header `Content-Type: application/xml`，IE 將會在我們試圖運作的 XML 項目行下，回應一個"Object Expected" 的錯誤。

> **備註：** 如果我們沒有設定 header `Cache-Control: no-cache`，那瀏覽器將會藏匿 response 並且不再重新傳送 request，造成除錯上的挑戰。我們也可以增加一個 always-different GET 參數，像是 timestamp 或 random number (詳見[bypassing the cache](/zh-TW/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache))

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

首先，我們得做個格式正確的 XML 文件以便稍後取用。文件 (`test.xml`) 內容如下：

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

這樣一來我們便可取得 `responseXML` 所傳回的 `XMLDocument` 物件，而後以 DOM 方法取用 XML 文件的內容。你可以參考 [`test.xml` 的原始碼](http://www.w3clubs.com/mozdev/test.xml) 以及修改過後的[測試程式](http://www.w3clubs.com/mozdev/httprequest_test_xml.html)。

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

`For more on DOM methods, be sure to check Mozilla's DOM implementation documents.`
