---
title: 使用 XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

要送出一個 HTTP 請求，需要建立一個 {{domxref("XMLHttpRequest")}} 物件、開啟一個 URL，並發起一個請求。在交易（transaction）完成後，`XMLHttpRequest` 物件將會包含如回應內容（response body）及 [HTTP 狀態](/docs/Web/HTTP/Status)等等請求結果中的有用資訊。本頁概述了一些常見的、甚至略為難理解的 `XMLHttpRequest` 物件使用案例。

```js
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```

## 請求類型

透過 `XMLHttpRequest` 建立的請求，其取得資料的方式可以為非同步（asynchronously）或同步（synchronously）兩種之一。請求的種類是由 {{domxref("XMLHttpRequest.open()")}} 方法的選擇性參數 `async`（第三個參數）決定。若 `async` 參數為 `true` 或是未指定，`XMLHttpRequest` 會被設定為非同步，相反的若為 `false` 則會被設定為同步。這兩種請求類型的細節討論與示範可以在[同步與非同步請求](/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)頁面中找到。一般來說，很少會使用到同步請求。

> **備註：** 自 Gecko 30.0 開始，在主執行緒上的同步請求因其差勁的使用者體驗已被棄用。

## 處理回應

`XMLHttpRequest` 的活動標準規範（living standard specification）定義了數個 `XMLHttpRequest` 建構出之物件的[回應屬性](https://xhr.spec.whatwg.org/)。這些回應屬性告訴客戶端關於 `XMLHttpRequest` 回應狀態的重要資訊。一些處理非文字類型回應的案例可能會需要一些在下面小節所說明的分析和操作。

### 分析及操作 `responseXML` 屬性

透過 `XMLHttpRequest` 取得一個遠端的 XML 文件內容時，`responseXML` 屬性（{{Glossary("property/JavaScript", "property")}}）將會是一個由 XML 文件解析而來的 DOM 物件。這可能會造成分析和操作上的一些困難，以下有四種主要的 XML 文件分析方式：

1. 利用 [XPath](/docs/Web/XPath) 指向需要部份。
2. 手動的[解析與序列化 XML](/docs/Web/Guide/Parsing_and_serializing_XML) 成字串或物件。
3. 利用 {{domxref("XMLSerializer")}} 來序列化 **DOM 樹成字串或檔案**。
4. 如果事先知道 XML 文件內容，可利用 {{jsxref("RegExp")}}。如果換行符號會影響 `RegExp` 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（last resort）」，因為一旦 XML 文件內容稍有變動，此方式就可能會失敗。

### 分析及操作含有 HTML 文件的 `responseText` 屬性

> **備註：** W3C 的[XMLHttpRequest](https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) 規範允許透過 `XMLHttpRequest.responseXML` 屬性（{{Glossary("property/JavaScript", "property")}}）來解析 HTML。相關細節請參考 [HTML in XMLHttpRequest](/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) 一文。

若透過 `XMLHttpRequest` 來取得一個遠端的 HTML 網頁內容，則 `responseText` 屬性（{{Glossary("property/JavaScript", "property")}}）會是「一串（soup）」包含所有 HTML 標籤的字串。這可能使得在分析和操作上造成困難，以下有三種主要分析此一大串 HTML 字串的方式：

1. 利用 `XMLHttpRequest.responseXML` 屬性。
2. 將內容透過 `fragment.body.innerHTML` 注入[文件片段（document fragment）](/docs/Web/API/DocumentFragment)之 `body` 中，並遍歷（traverse）文件片段的 DOM。
3. 如果事先知道 HTML 之 `responseText` 內容，可利用 {{jsxref("RegExp")}}。如果換行符號會影響 `RegExp` 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（last resort）」，因為一旦 HTML 程式碼稍有變動，此方式就可能會失敗。

## 處理二進位資料

僅管 `XMLHttpRequest` 最常被用在傳送及接收文字資料，但它其實也可以傳送及接收二進位內容。有幾種經過良好測試的方法可以用來強制使用 `XMLHttpRequest` 發送二進位資料。透過使用 `XMLHttpRequest` 物件的 `.overrideMimeType()` 方法是一個可行的解決方案。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// retrieve data unprocessed as a binary string
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

XMLHttpRequest Level 2 規範加入了新的 [`responseType` 屬性](https://xhr.spec.whatwg.org/#the-responsetype-attribute)，讓收發二進位資料變得容易許多。

```js
var oReq = new XMLHttpRequest();

oReq.onload = function (e) {
  var arraybuffer = oReq.response; // not responseText
  /* ... */
};
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();
```

更多的範例可參考[傳送及接收二進位資料](/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data)頁面。

## 監視進度

`XMLHttpRequest` 提供了監聽請求於處理過程中所發生的各項事件之能力。包括了定期進度通知、錯誤通知等等。

`XMLHttpRequest` 支援可監視其傳輸進度的 DOM 進度事件，此事件遵循[進度事件規範](https://xhr.spec.whatwg.org/#interface-progressevent)：這些事件實作了 {{domxref("ProgressEvent")}} 介面。

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// progress on transfers from the server to the client (downloads)
function updateProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}
```

第 3-6 行加入了事件監聽器來處理使用 `XMLHttpRequest` 執行資料收發過程中的各類事件。

> **備註：** 必須在呼叫 `open()` 方法開啟請求連線之前就註冊好事件監聽器，否則 `progress` 事件將不會被觸發。

在這個例子中，指定了 `updateProgress()` 函式作為 `progress` 事件處理器，`progress` 事件處理器會於 `progress` 事件物件的 `total` 及 `loaded` 屬性分別接收到要傳輸的總位元數及已送出的位元數。然而，假如 `lengthComputable` 屬性值為假，則代表要傳輸的總位元數是未知且 `total` 屬性值將會為零。

`progress` 事件同時存在於上傳及下載傳輸中。下載的相關事件會於 `XMLHttpRequest` 物件自己身上被觸發，如上面的範例。而上傳相關事件則在 `XMLHttpRequest.upload` 物件上被觸發，如以下範例：

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **備註：** `progress` 事件無法用於 `file:` 通訊協定。

> **備註：** 自 Gecko 9.0 開始，接收到每一個資料的區塊（chunk）時，`progress` 事件都會被觸發。包括在 `progress` 事件被觸發前，就已經接收到含有最後一個資料區塊的最後一個封包並且關閉連線的狀況下，在載入此封包時仍會自動觸發 `progress` 事件。這代表我們可以僅關注 `progress` 事件即能夠可靠的監視進度。

> **備註：** 在 Gecko 12.0 中，如果 `XMLHttpRequest` 的 `responseType` 屬性為「moz-blob」，那麼 `progress` 事件觸發時的 `XMLHttpRequest.response` 值會是一個目前包含了所接收資料的 {{domxref("Blob")}}。

我們也可以透過 `loadend` 事件來偵測到所有之三種下載結束狀況（`abort`、`load` 或 `error`）：

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not).",
  );
}
```

請注意由 `loadend` 事件中接收到的資訊並無法確定是由何種結束狀況所觸發。不過還是可以用 `loadend` 事件來處理所有傳輸結束情況下需要執行的任務。

## 提交表單與上傳檔案

`XMLHttpRequest` 物件實體有兩種方式來提交表單：

- 僅使用 AJAX
- 使用 {{domxref("XMLHttpRequest.FormData", "FormData")}} API

使用 `FormData` API 是最簡單、快速的方式，但不利於將資料集合進行[字串化](/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)。
只使用 AJAX 的方式較為複雜，但也更加靈活、強大。

### 僅使用 `XMLHttpRequest`

以不透過 `FormData` API 提交表單的方式在大多數的情況下都不需要使用其他額外的 API。唯一的例外是**要上傳一或多個檔案**時，會需要用到 {{domxref("FileReader")}} API。

#### 提交方法簡介

一個 HTML {{HTMLElement("form", "表單（form）")}}有以下四種提交方式：

- 使用 `POST` 方法，並且設定 `enctype` 屬性（{{Glossary("attribute")}}）為 `application/x-www-form-urlencoded`（預設值）。
- 使用 `POST` 方法，並且設定 `enctype` 屬性為 `text/plain`。
- 使用 `POST` 方法，並且設定 `enctype` 屬性為 `multipart/form-data`。
- 使用 `GET` 方法（在此情況下，`enctype` 屬性將會被忽略）。

現在，假設要提交一個只包含兩個欄位的表單，欄位名稱為 `foo` 及 `baz`。若是使用 `POST` 方法，伺服器將會收到一個如以下三個例子之一的字串，這取決於所使用的編碼類型（encoding type）：

- 方法：`POST`；編碼類型：`application/x-www-form-urlencoded`（預設值）：

  ```plain
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
  ```

- 方法：`POST`；編碼類型：`text/plain`：

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- 方法：`POST`；編碼類型：[`multipart/form-data`](/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data)：

  ```plain
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

如果是使用 `GET` 方法，一個如下方的字串會被直接附加入到 URL 上：

```plain
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### 小型原生框架

在我們提交 {{HTMLElement("form")}} 時，瀏覽器自動幫我們做了上面這些工作。假如要使用 JavaScript 達到同樣的效果就必須告訴直譯器（interpreter）要處理的*所有事*。然而，如何透過*純粹的* AJAX 來傳送表單複雜到難以在本頁解釋所有細節。基於這個理由，我們改為在這此提供**一組完整（教學用）的框架**，可用於上述四種的每一種*提交*（submit），並包括**上傳檔案**：

```html hidden
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Sending forms with pure AJAX &ndash; MDN</title>
    <script type="text/javascript">
      "use strict";

      /*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/zh-TW/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

      if (!XMLHttpRequest.prototype.sendAsBinary) {
        XMLHttpRequest.prototype.sendAsBinary = function (sData) {
          var nBytes = sData.length,
            ui8Data = new Uint8Array(nBytes);
          for (var nIdx = 0; nIdx < nBytes; nIdx++) {
            ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
          }
          /* send as ArrayBufferView...: */
          this.send(ui8Data);
          /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
        };
      }

      /*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

      var AJAXSubmit = (function () {
        function ajaxSuccess() {
          /* console.log("AJAXSubmit - Success!"); */
          console.log(this.responseText);
          /* you can get the serialized data through the "submittedData" custom property: */
          /* console.log(JSON.stringify(this.submittedData)); */
        }

        function submitData(oData) {
          /* the AJAX request... */
          var oAjaxReq = new XMLHttpRequest();
          oAjaxReq.submittedData = oData;
          oAjaxReq.onload = ajaxSuccess;
          if (oData.technique === 0) {
            /* method is GET */
            oAjaxReq.open(
              "get",
              oData.receiver.replace(
                /(?:\?.*)?$/,
                oData.segments.length > 0 ? "?" + oData.segments.join("&") : "",
              ),
              true,
            );
            oAjaxReq.send(null);
          } else {
            /* method is POST */
            oAjaxReq.open("post", oData.receiver, true);
            if (oData.technique === 3) {
              /* enctype is multipart/form-data */
              var sBoundary =
                "---------------------------" + Date.now().toString(16);
              oAjaxReq.setRequestHeader(
                "Content-Type",
                "multipart\/form-data; boundary=" + sBoundary,
              );
              oAjaxReq.sendAsBinary(
                "--" +
                  sBoundary +
                  "\r\n" +
                  oData.segments.join("--" + sBoundary + "\r\n") +
                  "--" +
                  sBoundary +
                  "--\r\n",
              );
            } else {
              /* enctype is application/x-www-form-urlencoded or text/plain */
              oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
              oAjaxReq.send(
                oData.segments.join(oData.technique === 2 ? "\r\n" : "&"),
              );
            }
          }
        }

        function processStatus(oData) {
          if (oData.status > 0) {
            return;
          }
          /* the form is now totally serialized! do something before sending it to the server... */
          /* doSomething(oData); */
          /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
          submitData(oData);
        }

        function pushSegment(oFREvt) {
          this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(sText) {
          /* How should I treat a text/plain form encoding?
       What characters are not allowed? this is what I suppose...: */
          /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
          return sText.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(oTarget) {
          var nFile,
            sFieldType,
            oField,
            oSegmReq,
            oFile,
            bIsPost = oTarget.method.toLowerCase() === "post";
          /* console.log("AJAXSubmit - Serializing form..."); */
          this.contentType =
            bIsPost && oTarget.enctype
              ? oTarget.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = bIsPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = oTarget.action;
          this.status = 0;
          this.segments = [];
          var fFilter = this.technique === 2 ? plainEscape : escape;
          for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
            oField = oTarget.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE" && oField.files.length > 0) {
              if (this.technique === 3) {
                /* enctype is multipart/form-data */
                for (nFile = 0; nFile < oField.files.length; nFile++) {
                  oFile = oField.files[nFile];
                  oSegmReq = new FileReader();
                  /* (custom properties:) */
                  oSegmReq.segmentIdx = this.segments.length;
                  oSegmReq.owner = this;
                  /* (end of custom properties) */
                  oSegmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"; filename="' +
                      oFile.name +
                      '"\r\nContent-Type: ' +
                      oFile.type +
                      "\r\n\r\n",
                  );
                  this.status++;
                  oSegmReq.readAsBinaryString(oFile);
                }
              } else {
                /* enctype is application/x-www-form-urlencoded or text/plain or
             method is GET: files will not be sent! */
                for (
                  nFile = 0;
                  nFile < oField.files.length;
                  this.segments.push(
                    fFilter(oField.name) +
                      "=" +
                      fFilter(oField.files[nFile++].name),
                  )
                );
              }
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              /* NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial. */
              /* field type is not FILE or is FILE but is empty */
              this.segments.push(
                this.technique === 3 /* enctype is multipart/form-data */
                  ? 'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"\r\n\r\n' +
                      oField.value +
                      "\r\n"
                  : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
                    fFilter(oField.name) + "=" + fFilter(oField.value),
              );
            }
          }
          processStatus(this);
        }

        return function (oFormElement) {
          if (!oFormElement.action) {
            return;
          }
          new SubmitRequest(oFormElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Sending forms with pure AJAX</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>Your name: <input type="text" name="user" /></p>
        <p>
          Your message:<br />
          <textarea name="message" cols="40" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

為了進行測試，建立一個名為 **register.php** 的 PHP 頁面（即為上面範例表單之 `action` 屬性（{{Glossary("attribute")}}）所指向的位置），並輸入以下*最簡化*的內容：

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

使用這個框架的語法簡單如下：

```plain
AJAXSubmit(myForm);
```

> **備註：** 此框架使用了 {{domxref("FileReader")}} API 來發送檔案上傳。這是個較新的 API，且 IE9 或其先前版本並未實作。因為這個理由，AJAX-only 上傳被認為是**一項實驗性技術**。若沒有需要上傳二進位檔案，此框架可於大部分瀏覽器中運作良好。

> **備註：** 傳送二進位檔案的最佳方式是藉由 {{jsxref("ArrayBuffer", "ArrayBuffers")}} 或 {{domxref("Blob", "Blobs")}} 結合 {{domxref("XMLHttpRequest.send()", "send()")}} 方法來送出，如果可以也能搭配 `FileReader` API 的 {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} 方法先進行讀取。但因為這段程式指令碼（script）的目的是要處理[可字串化的](/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)原始資料，所以使用 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} 方法結合 `FileReader` API 的 {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} 方法。就其本身來看，以上的指令碼只有在處理小型檔案時才有意義。假如不打算上傳二進位內容，請考慮使用 `FormData` API。

> **備註：** 非標準的 `sendAsBinary` 方法在 Gecko 31 已被認為是棄用的（deprecated），並且即將被移除。而標準的 `send(Blob data)` 方法可以作為替代。

### 使用 FormData 物件

{{domxref("XMLHttpRequest.FormData", "FormData")}} 建構式可以讓我們收集一連串名／值對資料並透過 `XMLHttpRequest` 送出。其主要用於傳送表單資料，但也能夠單獨的由表單建立來傳輸使用者輸入的資料。若表單的編碼類型（encoding type）被設定為「multipart/form-data」，則由 `FormData` 所發送的資料格式和表單用來傳送資料的 `submit()` 方法相同。FormData 物件可以搭配 `XMLHttpRequest` 以多種方式使用。相關的範例，以及可以怎麼利用 FormData 配合 XMLHttpRequest 的說明，請參考[使用 FormData 物件](/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)頁面。為了教學使用，下方為**一個利用 `FormData` API 來改寫[先前範例](#小型原生框架)的*翻譯*版本**。注意這段精簡後的程式碼：

```html hidden
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" charset="UTF-8" />
    <title>Sending forms with FormData &ndash; MDN</title>
    <script>
      "use strict";

      function ajaxSuccess() {
        console.log(this.responseText);
      }

      function AJAXSubmit(oFormElement) {
        if (!oFormElement.action) {
          return;
        }
        var oReq = new XMLHttpRequest();
        oReq.onload = ajaxSuccess;
        if (oFormElement.method.toLowerCase() === "post") {
          oReq.open("post", oFormElement.action);
          oReq.send(new FormData(oFormElement));
        } else {
          var oField,
            sFieldType,
            nFile,
            sSearch = "";
          for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE") {
              for (
                nFile = 0;
                nFile < oField.files.length;
                sSearch +=
                  "&" +
                  escape(oField.name) +
                  "=" +
                  escape(oField.files[nFile++].name)
              );
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
            }
          }
          oReq.open(
            "get",
            oFormElement.action.replace(
              /(?:\?.*)?$/,
              sSearch.replace(/^&/, "?"),
            ),
            true,
          );
          oReq.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Sending forms with FormData</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <p>The text/plain encoding is not supported by the FormData API.</p>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

> **備註：** 如同之前所說，**{{domxref("FormData")}} 物件是不能被[字串化](/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)的物件**。若想要字串化一個被提交的資料，請使用[先前的*純* AJAX 範例](#小型原生框架)。還要注意的是，雖然在這個例子中有一些 `file` {{ HTMLElement("input") }} 欄位，**當你透過 `FormData` API 來提交表單便也不需要使用 {{domxref("FileReader")}} API**：檔案會自動地載入並上傳。

## 取得最後修改日期

```js
function getHeaderTime() {
  console.log(
    this.getResponseHeader("Last-Modified"),
  ); /* A valid GMTString date or null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* use HEAD if you only need the headers! */, "yourpage.html");
oReq.onload = getHeaderTime;
oReq.send();
```

### 當最後修改日期改變時做一些事

先建立兩個函式：

```js
function getHeaderTime() {
  var nLastVisit = parseFloat(
    window.localStorage.getItem("lm_" + this.filepath),
  );
  var nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem("lm_" + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* use HEAD - we only need the headers! */, sURL);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

並進行測試：

```js
/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log(
    "The page '" +
      this.filepath +
      "' has been changed on " +
      new Date(nModif).toLocaleString() +
      "!",
  );
});
```

如果想要知道**目前頁面是否已變更**，請參考 {{domxref("document.lastModified")}} 一文。

## 跨網域 XMLHttpRequest

現代瀏覽器支援跨網域（cross-site）請求並實作了網路應用程式工作小組（Web Applications (WebApps) Working Group）提出的[跨網域請求存取控制](/docs/Web/HTTP/Access_control_CORS)標準。只要伺服器被設定為允許來自你的網路應用程式來源（origin）網域之請求，`XMLHttpRequest` 便能正常運作。否則，將會拋出一個 `INVALID_ACCESS_ERR` 例外。

## 避開快取

有一個跨瀏覽器相容的避開快取方法，便是將時間戳記（timestamp）附加於 URL 後方，請確保加上了適當的「?」或「&」。例如：

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

由於本地快取的索引是基於 URL，加入時間戳記會導致每一個請求都會是唯一的，藉此避開快取。

可以使用以下的程式碼來自動的調整 URL：

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
oReq.send(null);
```

## 安全性

開啟跨網域指令碼（script）的建議方式是於 XMLHttpRequest 的回應中使用 `Access-Control-Allow-Origin` HTTP 標頭。

### 被中止的 XMLHttpRequest

如果你發現 `XMLHttpRequest` 的 `status=0` 且 `statusText=null`，這代表請求並不被允許執行，其狀態為 [`UNSENT（未送出）`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent)。被中止的原因可能是因為 [`XMLHttpRequest` 物件所關聯的 origin（來源網域）值](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin)（於 `XMLHttpRequest` 物件建立時自 `window.origin` 取得）在呼叫 `open()` 方法之前就已經被改變。這是可能發生的，例如在 `window` 的 `onunload` 事件觸發時送出 `XMLHttpRequest` 請求，預期的情況為：`XMLHttpRequest` 物件剛被建立，而目前的視窗尚未關閉，而最後發送請求（即呼叫了 `open()` 方法）的時間點是在此視窗失去了焦點並且另外的視窗取得焦點之間。要避開這個問題的最有效方法是在要被終止的（terminated）`window` 觸發 `unload` 事件時，於新的 `window` 的上註冊一個新的 `activate` 事件監聽器來發送請求。

## 使用 JavaScript 模組／XPCOM 元件中的 XMLHttpRequest

自 [JavaScript 模組](/docs/Mozilla/JavaScript_code_modules/Using) 或 XPCOM 元件實體化一個 `XMLHttpRequest` 物件在做法上會有些許不同；我們無法用 `XMLHttpRequest()` 建構式，因為此建構式並未在元件中定義，並會導致程式產生錯誤。較佳的方式是使用 XPCOM 元件的建構式。

```js
const XMLHttpRequest = Components.Constructor(
  "@mozilla.org/xmlextras/xmlhttprequest;1",
  "nsIXMLHttpRequest",
);
```

在 Gecko 16 之前，存在著一個透過這種方式發送的請求會被無條件取消的臭蟲。若程式需要在 Gecko 15 或更早的版本上運作，可以從隱藏的 DOM window 中取得 `XMLHttpRequest()` 建構式。

```js
const { XMLHttpRequest } = Components.classes[
  "@mozilla.org/appshell/appShellService;1"
].getService(Components.interfaces.nsIAppShellService).hiddenDOMWindow;
var oReq = new XMLHttpRequest();
```

## 參見

- [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- [HTTP 存取控制](/zh-TW/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- ["Using the XMLHttpRequest Object" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
- [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
