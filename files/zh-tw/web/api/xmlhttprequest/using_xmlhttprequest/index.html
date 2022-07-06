---
title: 使用 XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
tags:
  - AJAX
  - AJAXfile
  - Advanced
  - DOM
  - JXON
  - MakeBrowserAgnostic
  - NeedsCompatTable
  - XML
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---
<p>要送出一個 HTTP 請求，需要建立一個 {{domxref("XMLHttpRequest")}} 物件、開啟一個 URL，並發起一個請求。在交易（transaction）完成後，<code>XMLHttpRequest</code> 物件將會包含如回應內容（response body）及 <a href="/docs/Web/HTTP/Status">HTTP 狀態</a>等等請求結果中的有用資訊。本頁概述了一些常見的、甚至略為難理解的 <code>XMLHttpRequest</code> 物件使用案例。</p>

<pre class="brush: js">function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();</pre>

<h2 id="請求類型">請求類型</h2>

<p>透過 <code>XMLHttpRequest</code> 建立的請求，其取得資料的方式可以為非同步（asynchronously）或同步（synchronously）兩種之一。請求的種類是由 {{domxref("XMLHttpRequest.open()")}} 方法的選擇性參數 <code>async</code>（第三個參數）決定。若 <code>async</code> 參數為 <code>true</code> 或是未指定，<code>XMLHttpRequest</code> 會被設定為非同步，相反的若為 <code>false</code> 則會被設定為同步。這兩種請求類型的細節討論與示範可以在<a href="/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">同步與非同步請求</a>頁面中找到。一般來說，很少會使用到同步請求。</p>

<div class="note"><strong>備註：</strong>自 Gecko 30.0 {{ geckoRelease("30.0") }} 開始，在主執行緒上的同步請求因其差勁的使用者體驗已被棄用。</div>

<h2 id="處理回應">處理回應</h2>

<p><code>XMLHttpRequest</code> 的活動標準規範（living standard specification）定義了數個 <code>XMLHttpRequest</code> 建構出之物件的<a href="https://xhr.spec.whatwg.org/">回應屬性</a>。這些回應屬性告訴客戶端關於 <code>XMLHttpRequest</code> 回應狀態的重要資訊。一些處理非文字類型回應的案例可能會需要一些在下面小節所說明的分析和操作。</p>

<h3 id="分析及操作_responseXML_屬性">分析及操作 <code>responseXML</code> 屬性</h3>

<p>透過 <code>XMLHttpRequest</code> 取得一個遠端的 XML 文件內容時，<code>responseXML</code> 屬性（{{Glossary("property/JavaScript", "property")}}）將會是一個由 XML 文件解析而來的 DOM 物件。這可能會造成分析和操作上的一些困難，以下有四種主要的 XML 文件分析方式：</p>

<ol>
 <li>利用 <a href="/docs/Web/XPath">XPath</a> 指向需要部份。</li>
 <li>手動的<a href="/docs/Web/Guide/Parsing_and_serializing_XML">解析與序列化 XML</a> 成字串或物件。</li>
 <li>利用 {{domxref("XMLSerializer")}} 來序列化 <strong>DOM 樹成字串或檔案</strong>。</li>
 <li>如果事先知道 XML 文件內容，可利用 {{jsxref("RegExp")}}。如果換行符號會影響 <code>RegExp</code> 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（last resort）」，因為一旦 XML 文件內容稍有變動，此方式就可能會失敗。</li>
</ol>

<h3 id="分析及操作含有_HTML_文件的_responseText_屬性">分析及操作含有 HTML 文件的 <code>responseText</code> 屬性</h3>

<div class="note"><strong>備註：</strong>W3C 的<a href="https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html">XMLHttpRequest</a> 規範允許透過 <code>XMLHttpRequest.responseXML</code> 屬性（{{Glossary("property/JavaScript", "property")}}）來解析 HTML。相關細節請參考 <a href="/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">HTML in XMLHttpRequest</a> 一文。</div>

<p>若透過 <code>XMLHttpRequest</code> 來取得一個遠端的 HTML 網頁內容，則 <code>responseText</code> 屬性（{{Glossary("property/JavaScript", "property")}}）會是「一串（soup）」包含所有 HTML 標籤的字串。這可能使得在分析和操作上造成困難，以下有三種主要分析此一大串 HTML 字串的方式：</p>

<ol>
 <li>利用 <code>XMLHttpRequest.responseXML</code> 屬性。</li>
 <li>將內容透過 <code>fragment.body.innerHTML</code> 注入<a href="/docs/Web/API/DocumentFragment">文件片段（document fragment）</a>之 <code>body</code> 中，並遍歷（traverse）文件片段的 DOM。</li>
 <li>如果事先知道 HTML 之 <code>responseText</code> 內容，可利用 {{jsxref("RegExp")}}。如果換行符號會影響 <code>RegExp</code> 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（last resort）」，因為一旦 HTML 程式碼稍有變動，此方式就可能會失敗。</li>
</ol>

<h2 id="處理二進位資料">處理二進位資料</h2>

<p>僅管 <code>XMLHttpRequest</code> 最常被用在傳送及接收文字資料，但它其實也可以傳送及接收二進位內容。有幾種經過良好測試的方法可以用來強制使用 <code>XMLHttpRequest</code> 發送二進位資料。透過使用 <code>XMLHttpRequest</code> 物件的 <code>.overrideMimeType()</code> 方法是一個可行的解決方案。</p>

<pre class="brush:js">var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// retrieve data unprocessed as a binary string
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
</pre>

<p>XMLHttpRequest Level 2 規範加入了新的 <a href="https://xhr.spec.whatwg.org/#the-responsetype-attribute"><code>responseType</code> 屬性</a>，讓收發二進位資料變得容易許多。</p>

<pre class="brush:js">var oReq = new XMLHttpRequest();

oReq.onload = function(e) {
  var arraybuffer = oReq.response; // not responseText
  /* ... */
}
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();</pre>

<p>更多的範例可參考<a href="/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data">傳送及接收二進位資料</a>頁面。</p>

<h2 id="監視進度">監視進度</h2>

<p><code>XMLHttpRequest</code> 提供了監聽請求於處理過程中所發生的各項事件之能力。包括了定期進度通知、錯誤通知等等。</p>

<p><code>XMLHttpRequest</code> 支援可監視其傳輸進度的 DOM 進度事件，此事件遵循<a href="https://xhr.spec.whatwg.org/#interface-progressevent">進度事件規範</a>：這些事件實作了 {{domxref("ProgressEvent")}} 介面。</p>

<pre class="brush:js">var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
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
}</pre>

<p>第 3-6 行加入了事件監聽器來處理使用 <code>XMLHttpRequest</code> 執行資料收發過程中的各類事件。</p>

<div class="note"><strong>備註：</strong>必須在呼叫 <code>open()</code> 方法開啟請求連線之前就註冊好事件監聽器，否則 <code>progress</code> 事件將不會被觸發。</div>

<p>在這個例子中，指定了 <code>updateProgress()</code> 函式作為 <code>progress</code> 事件處理器，<code>progress</code> 事件處理器會於 <code>progress</code> 事件物件的 <code>total</code> 及 <code>loaded</code> 屬性分別接收到要傳輸的總位元數及已送出的位元數。然而，假如 <code>lengthComputable</code> 屬性值為假，則代表要傳輸的總位元數是未知且 <code>total</code> 屬性值將會為零。</p>

<p><code>progress</code> 事件同時存在於上傳及下載傳輸中。下載的相關事件會於 <code>XMLHttpRequest</code> 物件自己身上被觸發，如上面的範例。而上傳相關事件則在 <code>XMLHttpRequest.upload</code> 物件上被觸發，如以下範例：</p>

<pre class="brush:js">var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
</pre>

<div class="note"><strong>備註：</strong><code>progress</code> 事件無法用於 <code>file:</code> 通訊協定。</div>

<div class="note">
<p><strong>備註：</strong>自 {{Gecko("9.0")}} 開始，接收到每一個資料的區塊（chunk）時，<code>progress</code> 事件都會被觸發。包括在 <code>progress</code> 事件被觸發前，就已經接收到含有最後一個資料區塊的最後一個封包並且關閉連線的狀況下，在載入此封包時仍會自動觸發 <code>progress</code> 事件。這代表我們可以僅關注 <code>progress</code> 事件即能夠可靠的監視進度。</p>
</div>

<div class="note">
<p><strong>備註：</strong>在 {{Gecko("12.0")}} 中，如果 <code>XMLHttpRequest</code> 的 <code>responseType</code> 屬性為「moz-blob」，那麼 <code>progress</code> 事件觸發時的 <code>XMLHttpRequest.response</code> 值會是一個目前包含了所接收資料的 {{domxref("Blob")}}。</p>
</div>

<p>我們也可以透過 <code>loadend</code> 事件來偵測到所有之三種下載結束狀況（<code>abort</code>、<code>load</code> 或 <code>error</code>）：</p>

<pre class="brush:js">req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log("The transfer finished (although we don't know if it succeeded or not).");
}
</pre>

<p>請注意由 <code>loadend</code> 事件中接收到的資訊並無法確定是由何種結束狀況所觸發。不過還是可以用 <code>loadend</code> 事件來處理所有傳輸結束情況下需要執行的任務。</p>

<h2 id="提交表單與上傳檔案">提交表單與上傳檔案</h2>

<p><code>XMLHttpRequest</code> 物件實體有兩種方式來提交表單：</p>

<ul>
 <li>僅使用 AJAX</li>
 <li>使用 {{domxref("XMLHttpRequest.FormData", "FormData")}} API</li>
</ul>

<p>使用 <code>FormData</code> API 是最簡單、快速的方式，但不利於將資料集合進行<a href="/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">字串化</a>。<br>
 只使用 AJAX 的方式較為複雜，但也更加靈活、強大。</p>

<h3 id="僅使用_XMLHttpRequest">僅使用 <code>XMLHttpRequest</code></h3>

<p>以不透過 <code>FormData</code> API 提交表單的方式在大多數的情況下都不需要使用其他額外的 API。唯一的例外是<strong>要上傳一或多個檔案</strong>時，會需要用到 {{domxref("FileReader")}} API。</p>

<h4 id="提交方法簡介">提交方法簡介</h4>

<p>一個 HTML {{HTMLElement("form", "表單（form）")}}有以下四種提交方式：</p>

<ul>
 <li>使用 <code>POST</code> 方法，並且設定 <code>enctype</code> 屬性（{{Glossary("attribute")}}）為 <code>application/x-www-form-urlencoded</code>（預設值）。</li>
 <li>使用 <code>POST</code> 方法，並且設定 <code>enctype</code> 屬性為 <code>text/plain</code>。</li>
 <li>使用 <code>POST</code> 方法，並且設定 <code>enctype</code> 屬性為 <code>multipart/form-data</code>。</li>
 <li>使用 <code>GET</code> 方法（在此情況下，<code>enctype</code> 屬性將會被忽略）。</li>
</ul>

<p>現在，假設要提交一個只包含兩個欄位的表單，欄位名稱為 <code>foo</code> 及 <code>baz</code>。若是使用 <code>POST</code> 方法，伺服器將會收到一個如以下三個例子之一的字串，這取決於所使用的編碼類型（encoding type）：</p>

<ul>
 <li>
  <p>方法：<code>POST</code>；編碼類型：<code>application/x-www-form-urlencoded</code>（預設值）：</p>

  <pre class="brush:plain">Content-Type: application/x-www-form-urlencoded

foo=bar&amp;baz=The+first+line.%0D%0AThe+second+line.%0D%0A</pre>
 </li>
 <li>
  <p>方法：<code>POST</code>；編碼類型：<code>text/plain</code>：</p>

  <pre class="brush:plain">Content-Type: text/plain

foo=bar
baz=The first line.
The second line.</pre>
 </li>
 <li>
  <p>方法：<code>POST</code>；編碼類型：<code><a href="/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">multipart/form-data</a></code>：</p>

  <pre class="brush:plain">Content-Type: multipart/form-data; boundary=---------------------------314911788813839

-----------------------------314911788813839
Content-Disposition: form-data; name="foo"

bar
-----------------------------314911788813839
Content-Disposition: form-data; name="baz"

The first line.
The second line.

-----------------------------314911788813839--</pre>
 </li>
</ul>

<p>如果是使用 <code>GET</code> 方法，一個如下方的字串會被直接附加入到 URL 上：</p>

<pre class="brush:plain">?foo=bar&amp;baz=The%20first%20line.%0AThe%20second%20line.</pre>

<h4 id="小型原生框架">小型原生框架</h4>

<p>在我們提交 {{HTMLElement("form")}} 時，瀏覽器自動幫我們做了上面這些工作。假如要使用 JavaScript 達到同樣的效果就必須告訴直譯器（interpreter）要處理的<em>所有事</em>。然而，如何透過<em>純粹的</em> AJAX 來傳送表單複雜到難以在本頁解釋所有細節。基於這個理由，我們改為在這此提供<strong>一組完整（教學用）的框架</strong>，可用於上述四種的每一種<em>提交（submit）</em>，並包括<strong>上傳檔案</strong>：</p>

<div style="height: 400px; margin-bottom: 12px; overflow: auto;">
<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;title&gt;Sending forms with pure AJAX &amp;ndash; MDN&lt;/title&gt;
&lt;script type="text/javascript"&gt;

"use strict";

/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function(sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx &lt; nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) &amp; 0xff;
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
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

var AJAXSubmit = (function () {

  function ajaxSuccess () {
    /* console.log("AJAXSubmit - Success!"); */
    console.log(this.responseText);
    /* you can get the serialized data through the "submittedData" custom property: */
    /* console.log(JSON.stringify(this.submittedData)); */
  }

  function submitData (oData) {
    /* the AJAX request... */
    var oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;
    oAjaxReq.onload = ajaxSuccess;
    if (oData.technique === 0) {
      /* method is GET */
      oAjaxReq.open("get", oData.receiver.replace(/(?:\?.*)?$/,
          oData.segments.length &gt; 0 ? "?" + oData.segments.join("&amp;") : ""), true);
      oAjaxReq.send(null);
    } else {
      /* method is POST */
      oAjaxReq.open("post", oData.receiver, true);
      if (oData.technique === 3) {
        /* enctype is multipart/form-data */
        var sBoundary = "---------------------------" + Date.now().toString(16);
        oAjaxReq.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary);
        oAjaxReq.sendAsBinary("--" + sBoundary + "\r\n" +
            oData.segments.join("--" + sBoundary + "\r\n") + "--" + sBoundary + "--\r\n");
      } else {
        /* enctype is application/x-www-form-urlencoded or text/plain */
        oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
        oAjaxReq.send(oData.segments.join(oData.technique === 2 ? "\r\n" : "&amp;"));
      }
    }
  }

  function processStatus (oData) {
    if (oData.status &gt; 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    /* doSomething(oData); */
    /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData (oData);
  }

  function pushSegment (oFREvt) {
    this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
    this.owner.status--;
    processStatus(this.owner);
  }

  function plainEscape (sText) {
    /* How should I treat a text/plain form encoding?
       What characters are not allowed? this is what I suppose...: */
    /* "4\3\7 - Einstein said E=mc2" ----&gt; "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
    return sText.replace(/[\s\=\\]/g, "\\$&amp;");
  }

  function SubmitRequest (oTarget) {
    var nFile, sFieldType, oField, oSegmReq, oFile, bIsPost = oTarget.method.toLowerCase() === "post";
    /* console.log("AJAXSubmit - Serializing form..."); */
    this.contentType = bIsPost &amp;&amp; oTarget.enctype ? oTarget.enctype : "application\/x-www-form-urlencoded";
    this.technique = bIsPost ?
        this.contentType === "multipart\/form-data" ? 3 : this.contentType === "text\/plain" ? 2 : 1 : 0;
    this.receiver = oTarget.action;
    this.status = 0;
    this.segments = [];
    var fFilter = this.technique === 2 ? plainEscape : escape;
    for (var nItem = 0; nItem &lt; oTarget.elements.length; nItem++) {
      oField = oTarget.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE" &amp;&amp; oField.files.length &gt; 0) {
        if (this.technique === 3) {
          /* enctype is multipart/form-data */
          for (nFile = 0; nFile &lt; oField.files.length; nFile++) {
            oFile = oField.files[nFile];
            oSegmReq = new FileReader();
            /* (custom properties:) */
            oSegmReq.segmentIdx = this.segments.length;
            oSegmReq.owner = this;
            /* (end of custom properties) */
            oSegmReq.onload = pushSegment;
            this.segments.push("Content-Disposition: form-data; name=\"" +
                oField.name + "\"; filename=\"" + oFile.name +
                "\"\r\nContent-Type: " + oFile.type + "\r\n\r\n");
            this.status++;
            oSegmReq.readAsBinaryString(oFile);
          }
        } else {
          /* enctype is application/x-www-form-urlencoded or text/plain or
             method is GET: files will not be sent! */
          for (nFile = 0; nFile &lt; oField.files.length;
              this.segments.push(fFilter(oField.name) + "=" + fFilter(oField.files[nFile++].name)));
        }
      } else if ((sFieldType !== "RADIO" &amp;&amp; sFieldType !== "CHECKBOX") || oField.checked) {
        /* NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial. */
        /* field type is not FILE or is FILE but is empty */
        this.segments.push(
          this.technique === 3 ? /* enctype is multipart/form-data */
            "Content-Disposition: form-data; name=\"" + oField.name + "\"\r\n\r\n" + oField.value + "\r\n"
          : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
            fFilter(oField.name) + "=" + fFilter(oField.value)
        );
      }
    }
    processStatus(this);
  }

  return function (oFormElement) {
    if (!oFormElement.action) { return; }
    new SubmitRequest(oFormElement);
  };

})();

&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Sending forms with pure AJAX&lt;/h1&gt;

&lt;h2&gt;Using the GET method&lt;/h2&gt;

&lt;form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Registration example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;h2&gt;Using the POST method&lt;/h2&gt;
&lt;h3&gt;Enctype: application/x-www-form-urlencoded (default)&lt;/h3&gt;

&lt;form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Registration example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;h3&gt;Enctype: text/plain&lt;/h3&gt;

&lt;form action="register.php" method="post" enctype="text/plain"
    onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Registration example&lt;/legend&gt;
    &lt;p&gt;
      Your name: &lt;input type="text" name="user" /&gt;
    &lt;/p&gt;
    &lt;p&gt;
      Your message:&lt;br /&gt;
      &lt;textarea name="message" cols="40" rows="8"&gt;&lt;/textarea&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;h3&gt;Enctype: multipart/form-data&lt;/h3&gt;

&lt;form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Upload example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;&lt;br /&gt;
      Sex:
      &lt;input id="sex_male" type="radio" name="sex" value="male" /&gt;
      &lt;label for="sex_male"&gt;Male&lt;/label&gt;
      &lt;input id="sex_female" type="radio" name="sex" value="female" /&gt;
      &lt;label for="sex_female"&gt;Female&lt;/label&gt;&lt;br /&gt;
      Password: &lt;input type="password" name="secret" /&gt;&lt;br /&gt;
      What do you prefer:
      &lt;select name="image_type"&gt;
        &lt;option&gt;Books&lt;/option&gt;
        &lt;option&gt;Cinema&lt;/option&gt;
        &lt;option&gt;TV&lt;/option&gt;
      &lt;/select&gt;
    &lt;/p&gt;
    &lt;p&gt;
      Post your photos:
      &lt;input type="file" multiple name="photos[]"&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /&gt;
      &lt;label for="vehicle_bike"&gt;I have a bike&lt;/label&gt;&lt;br /&gt;
      &lt;input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /&gt;
      &lt;label for="vehicle_car"&gt;I have a car&lt;/label&gt;
    &lt;/p&gt;
    &lt;p&gt;
      Describe yourself:&lt;br /&gt;
      &lt;textarea name="description" cols="50" rows="8"&gt;&lt;/textarea&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<p>為了進行測試，建立一個名為 <strong>register.php</strong> 的 PHP 頁面（即為上面範例表單之 <code>action</code> 屬性（{{Glossary("attribute")}}）所指向的位置），並輸入以下<em>最簡化</em>的內容：</p>

<pre class="brush: php">&lt;?php
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

</pre>

<p>使用這個框架的語法簡單如下：</p>

<pre class="syntaxbox">AJAXSubmit(myForm);</pre>

<div class="note"><strong>備註：</strong>此框架使用了 {{domxref("FileReader")}} API 來發送檔案上傳。這是個較新的 API，且 IE9 或其先前版本並未實作。因為這個理由，AJAX-only 上傳被認為是<strong>一項實驗性技術</strong>。若沒有需要上傳二進位檔案，此框架可於大部分瀏覽器中運作良好。</div>

<div class="note"><strong>備註：</strong>傳送二進位檔案的最佳方式是藉由 {{jsxref("ArrayBuffer", "ArrayBuffers")}} 或 {{domxref("Blob", "Blobs")}} 結合 {{domxref("XMLHttpRequest.send()", "send()")}} 方法來送出，如果可以也能搭配 <code>FileReader</code> API 的 {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} 方法先進行讀取。但因為這段程式指令碼（script）的目的是要處理<a href="/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">可字串化的</a>原始資料，所以使用 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} 方法結合 <code>FileReader</code> API 的 {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} 方法。就其本身來看，以上的指令碼只有在處理小型檔案時才有意義。假如不打算上傳二進位內容，請考慮使用 <code>FormData</code> API。</div>

<div class="note"><strong>備註：</strong>非標準的 <code>sendAsBinary</code> 方法在 Gecko 31 {{geckoRelease(31)}} 已被認為是棄用的（deprecated），並且即將被移除。而標準的 <code>send(Blob data)</code> 方法可以作為替代。</div>

<h3 id="使用_FormData_物件">使用 FormData 物件</h3>

<p>{{domxref("XMLHttpRequest.FormData", "FormData")}} 建構式可以讓我們收集一連串名／值對資料並透過 <code>XMLHttpRequest</code> 送出。其主要用於傳送表單資料，但也能夠單獨的由表單建立來傳輸使用者輸入的資料。若表單的編碼類型（encoding type）被設定為「multipart/form-data」，則由 <code>FormData</code> 所發送的資料格式和表單用來傳送資料的 <code>submit()</code> 方法相同。FormData 物件可以搭配 <code>XMLHttpRequest</code> 以多種方式使用。相關的範例，以及可以怎麼利用 FormData 配合 XMLHttpRequest 的說明，請參考<a href="/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects">使用 FormData 物件</a>頁面。為了教學使用，下方為<strong>一個利用 <code>FormData</code> API 來改寫<a href="#小型原生框架">先前範例</a>的<em>翻譯</em>版本</strong>。注意這段精簡後的程式碼：</p>

<div style="height: 400px; margin-bottom: 12px; overflow: auto;">
<pre class="brush: html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" charset="UTF-8" /&gt;
&lt;title&gt;Sending forms with FormData &amp;ndash; MDN&lt;/title&gt;
&lt;script&gt;
"use strict";

function ajaxSuccess () {
  console.log(this.responseText);
}

function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) { return; }
  var oReq = new XMLHttpRequest();
  oReq.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    oReq.open("post", oFormElement.action);
    oReq.send(new FormData(oFormElement));
  } else {
    var oField, sFieldType, nFile, sSearch = "";
    for (var nItem = 0; nItem &lt; oFormElement.elements.length; nItem++) {
      oField = oFormElement.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ?
          oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE") {
        for (nFile = 0; nFile &lt; oField.files.length;
            sSearch += "&amp;" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
      } else if ((sFieldType !== "RADIO" &amp;&amp; sFieldType !== "CHECKBOX") || oField.checked) {
        sSearch += "&amp;" + escape(oField.name) + "=" + escape(oField.value);
      }
    }
    oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&amp;/, "?")), true);
    oReq.send(null);
  }
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Sending forms with FormData&lt;/h1&gt;

&lt;h2&gt;Using the GET method&lt;/h2&gt;

&lt;form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Registration example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;h2&gt;Using the POST method&lt;/h2&gt;
&lt;h3&gt;Enctype: application/x-www-form-urlencoded (default)&lt;/h3&gt;

&lt;form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Registration example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;

&lt;h3&gt;Enctype: text/plain&lt;/h3&gt;

&lt;p&gt;The text/plain encoding is not supported by the FormData API.&lt;/p&gt;

&lt;h3&gt;Enctype: multipart/form-data&lt;/h3&gt;

&lt;form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Upload example&lt;/legend&gt;
    &lt;p&gt;
      First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
      Last name: &lt;input type="text" name="lastname" /&gt;&lt;br /&gt;
      Sex:
      &lt;input id="sex_male" type="radio" name="sex" value="male" /&gt;
      &lt;label for="sex_male"&gt;Male&lt;/label&gt;
      &lt;input id="sex_female" type="radio" name="sex" value="female" /&gt;
      &lt;label for="sex_female"&gt;Female&lt;/label&gt;&lt;br /&gt;
      Password: &lt;input type="password" name="secret" /&gt;&lt;br /&gt;
      What do you prefer:
      &lt;select name="image_type"&gt;
        &lt;option&gt;Books&lt;/option&gt;
        &lt;option&gt;Cinema&lt;/option&gt;
        &lt;option&gt;TV&lt;/option&gt;
      &lt;/select&gt;
    &lt;/p&gt;
    &lt;p&gt;
      Post your photos:
      &lt;input type="file" multiple name="photos[]"&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" /&gt;
      &lt;label for="vehicle_bike"&gt;I have a bike&lt;/label&gt;&lt;br /&gt;
      &lt;input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" /&gt;
      &lt;label for="vehicle_car"&gt;I have a car&lt;/label&gt;
    &lt;/p&gt;
    &lt;p&gt;
      Describe yourself:&lt;br /&gt;
      &lt;textarea name="description" cols="50" rows="8"&gt;&lt;/textarea&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type="submit" value="Submit" /&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<div class="note"><strong>備註：</strong>如同之前所說，<strong>{{domxref("FormData")}} 物件是不能被<a href="/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">字串化</a>的物件</strong>。若想要字串化一個被提交的資料，請使用<a href="#小型原生框架">先前的<em>純</em> AJAX 範例</a>。還要注意的是，雖然在這個例子中有一些 <code>file</code> {{ HTMLElement("input") }} 欄位，<strong>當你透過 <code>FormData</code> API 來提交表單便也不需要使用 {{domxref("FileReader")}} API</strong>：檔案會自動地載入並上傳。</div>

<h2 id="取得最後修改日期">取得最後修改日期</h2>

<pre class="brush: js">function getHeaderTime () {
  console.log(this.getResponseHeader("Last-Modified"));  /* A valid GMTString date or null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* use HEAD if you only need the headers! */, "yourpage.html");
oReq.onload = getHeaderTime;
oReq.send();</pre>

<h3 id="當最後修改日期改變時做一些事">當最後修改日期改變時做一些事</h3>

<p>先建立兩個函式：</p>

<pre class="brush: js">function getHeaderTime () {
  var nLastVisit = parseFloat(window.localStorage.getItem('lm_' + this.filepath));
  var nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif &gt; nLastVisit) {
    window.localStorage.setItem('lm_' + this.filepath, Date.now());
    isFinite(nLastVisit) &amp;&amp; this.callback(nLastModif, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* use HEAD - we only need the headers! */, sURL);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}</pre>

<p>並進行測試：</p>

<pre class="brush: js">/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});</pre>

<p>如果想要知道<strong><em>目前頁面</em><em>是否</em>已變更</strong>，請參考 {{domxref("document.lastModified")}} 一文。</p>

<h2 id="跨網域_XMLHttpRequest">跨網域 XMLHttpRequest</h2>

<p>現代瀏覽器支援跨網域（cross-site）請求並實作了網路應用程式工作小組（Web Applications (WebApps) Working Group）提出的<a href="/docs/Web/HTTP/Access_control_CORS">跨網域請求存取控制</a>標準。只要伺服器被設定為允許來自你的網路應用程式來源（origin）網域之請求，<code>XMLHttpRequest</code> 便能正常運作。否則，將會拋出一個 <code>INVALID_ACCESS_ERR</code> 例外。</p>

<h2 id="避開快取">避開快取</h2>

<p>有一個跨瀏覽器相容的避開快取方法，便是將時間戳記（timestamp）附加於 URL 後方，請確保加上了適當的「?」或「&amp;」。例如：</p>

<pre class="brush:plain">http://foo.com/bar.html -&gt; http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -&gt; http://foo.com/bar.html?foobar=baz&amp;12345
</pre>

<p>由於本地快取的索引是基於 URL，加入時間戳記會導致每一個請求都會是唯一的，藉此避開快取。</p>

<p>可以使用以下的程式碼來自動的調整 URL：</p>

<pre class="brush:js">var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&amp;" : "?") + (new Date()).getTime());
oReq.send(null);</pre>

<h2 id="安全性">安全性</h2>

<p>{{fx_minversion_note(3, "Firefox 3 之前的版本允許在偏好設定中設定 <code>capability.policy.&lt;policyname&gt;.XMLHttpRequest.open&lt;/policyname&gt;</code> 為 <code>allAccess</code> 來讓指定的網域能夠跨網域存取。現已不再支援。")}}</p>

<p>{{fx_minversion_note(5, "Firefox 5 之前的版本可以使用 <code>netscape.security.PrivilegeManager.enablePrivilege(\"UniversalBrowserRead\");</code> 來發送跨網域存取請求。現已不再支援，即使它不會有警告並且依然會顯示允許請求的權限對話框。")}}</p>

<p>開啟跨網域指令碼（script）的建議方式是於 XMLHttpRequest 的回應中使用 <code>Access-Control-Allow-Origin</code> HTTP 標頭。</p>

<h3 id="被中止的_XMLHttpRequest">被中止的 XMLHttpRequest</h3>

<p>如果你發現 <code>XMLHttpRequest</code> 的 <code>status=0</code> 且 <code>statusText=null</code>，這代表請求並不被允許執行，其狀態為 <code><a href="https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent">UNSENT（未送出）</a></code>。被中止的原因可能是因為 <a href="https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin"><code>XMLHttpRequest</code> 物件所關聯的 origin（來源網域）值</a>（於 <code>XMLHttpRequest</code> 物件建立時自 <code>window.origin</code> 取得）在呼叫 <code>open()</code> 方法之前就已經被改變。這是可能發生的，例如在 <code>window</code> 的 <code>onunload</code> 事件觸發時送出 <code>XMLHttpRequest</code> 請求，預期的情況為：<code>XMLHttpRequest</code> 物件剛被建立，而目前的視窗尚未關閉，而最後發送請求（即呼叫了 <code>open()</code> 方法）的時間點是在此視窗失去了焦點並且另外的視窗取得焦點之間。要避開這個問題的最有效方法是在要被終止的（terminated）<code>window</code> 觸發 <code>unload</code> 事件時，於新的 <code>window</code> 的上註冊一個新的 <code>activate</code> 事件監聽器來發送請求。</p>

<h2 id="使用_JavaScript_模組／XPCOM_元件中的_XMLHttpRequest">使用 JavaScript 模組／XPCOM 元件中的 XMLHttpRequest</h2>

<p>自 <a href="/docs/Mozilla/JavaScript_code_modules/Using">JavaScript 模組</a> 或 XPCOM 元件實體化一個 <code>XMLHttpRequest</code> 物件在做法上會有些許不同；我們無法用 <code>XMLHttpRequest()</code> 建構式，因為此建構式並未在元件中定義，並會導致程式產生錯誤。較佳的方式是使用 XPCOM 元件的建構式。</p>

<pre class="brush: js">const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1",
    "nsIXMLHttpRequest");
</pre>

<p>在 Gecko 16 之前，存在著一個透過這種方式發送的請求會被無條件取消的臭蟲。若程式需要在 Gecko 15 或更早的版本上運作，可以從隱藏的 DOM window 中取得 <code>XMLHttpRequest()</code> 建構式。</p>

<pre class="brush:js">const { XMLHttpRequest } = Components.classes["@mozilla.org/appshell/appShellService;1"]
                                     .getService(Components.interfaces.nsIAppShellService)
                                     .hiddenDOMWindow;
var oReq = new XMLHttpRequest();</pre>

<h2 id="參見">參見</h2>

<ol>
 <li><a href="/docs/AJAX/Getting_Started">MDN AJAX 介紹</a></li>
 <li><a href="/docs/Web/HTTP/Access_control_CORS">HTTP 存取控制</a></li>
 <li><a href="/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL">How to check the security state of an XMLHTTPRequest over SSL</a></li>
 <li><a href="http://www.peej.co.uk/articles/rich-user-experience.html">XMLHttpRequest - REST and the Rich User Experience</a></li>
 <li><a href="https://msdn.microsoft.com/library/ms535874">Microsoft documentation</a></li>
 <li><a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/XHR.html">Apple developers' reference</a></li>
 <li><a href="http://jibbering.com/2002/4/httprequest.html">"Using the XMLHttpRequest Object" (jibbering.com)</a></li>
 <li><a href="https://xhr.spec.whatwg.org/">The <code>XMLHttpRequest</code> object: WHATWG specification</a></li>
</ol>
