---
title: XMLHttpRequest の使用
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
tags:
  - AJAX
  - AJAXfile
  - DOM
  - HTTP
  - JXON
  - MakeBrowserAgnostic
  - XHR
  - XML
  - XMLHttpRequest
  - ガイド
  - チュートリアル
  - 高度
translation_of: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---
<div>{{APIRef("XMLHttpRequest")}}</div>

<p><span class="seoSummary">このガイドでは、ウェブサイトとサーバーの間でデータ交換をするために、 {{domxref("XMLHttpRequest")}} を使用して <a href="/ja/docs/Web/HTTP">HTTP</a> リクエストを発行する方法を紹介します。</span> <code>XMLHttpRequest</code> のよくある使用例やもっと分かりにくい使用例も含まれています。</p>

<p>HTTP リクエストを送るには、 <code>XMLHttpRequest</code> オブジェクトを作成し、 URL を開いてリクエストを送信します。トランザクションが完了すると、オブジェクトには結果の <a href="/ja/docs/Web/HTTP/Status">HTTP ステータスコード</a>やレスポンスの本文などの有益な情報が格納されます。</p>

<pre class="brush: js notranslate">function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();</pre>

<h2 id="Types_of_requests" name="Types_of_requests">リクエストの種類</h2>

<p><code>XMLHttpRequest</code> によって作成されたリクエストは、非同期または同期のいずれかの方法でデータを取得することが可能です。リクエストをどちらの方法で行うかは、 {{domxref("XMLHttpRequest.open()")}} メソッドの <code>async</code> 引数 (第3引数) で指示できます (オプション)。このプロパティを <code>true</code> に指定するか指定しなければ <code>XMLHttpRequest</code> は非同期で処理され、それ以外だと同期的に扱われます。これら二つの種類のリクエストに関する詳細および使用例は、<a href="/ja/docs/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">同期および非同期リクエスト</a>のページを参照してください。ウェブワーカー以外では同期リクエストを使用しないでください。</p>

<div class="note"><strong>注:</strong> Gecko 30.0 {{ geckoRelease("30.0") }} から、メインスレッドにおける同期リクエストはユーザーの使い勝手に悪影響を与えるため、非推奨になりました。</div>

<div class="note"><strong>注:</strong> コンストラクター関数 <code>XMLHttpRequest</code> は XML 文書に限定されていません。 <strong>"XML"</strong> で始まっているのは、これが作成されたときに非同期データ交換に使用されていた主要な形式が XML であったからです。</div>

<h2 id="Handling_responses" name="Handling_responses">レスポンスの取り扱い</h2>

<p>HTML Living Standard 仕様書で定義されている {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} コンストラクターの <a href="https://xhr.spec.whatwg.org/">response 属性</a>は何種類かがあります。これらはクライアントに <code>XMLHttpRequest</code> にレスポンスのステータスに関する重要な情報を作るように指示します。テキスト以外のレスポンス型を扱う場合は、後の節で概説する操作や解析が入ることがあるかもしれません。</p>

<h3 id="Analyzing_and_manipulating_the_responseXML_property" name="Analyzing_and_manipulating_the_responseXML_property">responseXML プロパティの解析と操作</h3>

<p>リモートの XML 文書のコンテンツを得るために <code>XMLHttpRequest</code> を使う場合、 <code>responseXML</code> プロパティが解析済みの XML 文書を含む DOM オブジェクトとなります。これによって、操作や解析が難しくなる可能性があります。この XML 文書を解析するには主な4つの方法があります。</p>

<ol>
 <li>部品を指すために <a href="/ja/docs/Web/XPath">XPath</a> を使う。</li>
 <li>手動で <a href="/ja/docs/Web/Guide/Parsing_and_serializing_XML">XML を解析及びシリアライズして</a>文字列やオブジェクトにする。</li>
 <li>{{domxref("XMLSerializer")}} を使って <strong>DOM ツリーを文字列やファイルに</strong>シリアライズする。</li>
 <li>事前に XML 文書の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を <code>RegExp</code> でスキャンする場合に、改行を除去した方がよく見えることもありますが、 XML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。</li>
</ol>

<div class="note">
<p><strong>注:</strong> <code>XMLHttpRequest</code> は {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティを使用することによって、 HTML を解釈できるようになりました。この方法について学ぶには、 <a href="/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest での HTML</a> についての記事をお読みください。</p>
</div>

<h3 id="Processing_a_responseText_property_containing_an_HTML_document" name="Processing_a_responseText_property_containing_an_HTML_document">HTML 文書を含む responseText プロパティの処理</h3>

<p><code>XMLHttpRequest</code> を使ってリモート HTML ウェブページのコンテンツを取得する場合、 {{domxref("XMLHttpRequest.responseText", "responseText")}} プロパティは生の HTML が入った文字列です。これは操作や解析が難しいことを示しています。この生の HTML 文字列を分析し解析するには、主に3つの方法があります。</p>

<ol>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest での HTML</a> の記事で紹介されている <code>XMLHttpRequest.responseXML</code> プロパティを使用する。</li>
 <li><code>fragment.body.innerHTML</code> を通して<a href="/ja/docs/Web/API/DocumentFragment">文書フラグメント</a>の本文をコンテンツに挿入し、そのフラグメントの DOM を巡る。</li>
 <li>事前に HTML の <code>responseText</code> の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を RegExp でスキャンする場合に、改行を除去した方がよく見えることもありますが、 HTML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。</li>
</ol>

<h2 id="Handling_binary_data" name="Handling_binary_data">バイナリデータの扱い</h2>

<p>{{domxref("XMLHttpRequest")}} はテキストデータの送受信に最もよく使われますが、バイナリコンテンツの送受信にも使えます。 <code>XMLHttpRequest</code> のレスポンスをバイナリデータ送信に強制するためのテストされたメソッドがいくつかあります。この中には <code>XMLHttpRequest</code> オブジェクトの {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} メソッドを活用して使える解決法としているものも入っています。</p>

<pre class="brush:js notranslate">var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// バイナリ文字列として未処理のデータを取得する
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
</pre>

<p>しかし、もっと新しいテクニックも使用でき、 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性がいくつもの追加のコンテンツ型に対応するようになったので、データの送信や受信がずっと簡単になりました。</p>

<p>例えばこのスニペットでは、 <code>responseType</code> に "<code>arraybuffer</code>" を使用して、生のバイナリデータを格納できる {{jsxref("ArrayBuffer")}} オブジェクトにリモートコンテンツを取得しています。</p>

<pre class="brush:js notranslate">var oReq = new XMLHttpRequest();

oReq.onload = function(e) {
  var arraybuffer = oReq.response; // responseText ではない
  /* ... */
}
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();</pre>

<p>その他の例は、<a href="/ja/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data">Sending and Receiving Binary Data</a> ページを確認してください。</p>

<h2 id="Monitoring_progress" name="Monitoring_progress">進捗の監視</h2>

<p><code>XMLHttpRequest</code> は、リクエストが処理されている間に発生する様々なイベントを待受けする機能を提供しています。これには定期的な進捗の通知、エラーの通知、などが含まれます。</p>

<p><code>XMLHttpRequest</code> の転送を監視する DOM 進捗イベントの対応は、 <a href="https://xhr.spec.whatwg.org/#interface-progressevent">specification for progress events</a> に従います。このイベントは {{domxref("ProgressEvent")}} インターフェイスを実装します。進行中の転送の状態を特定するために監視することができる実際のイベントは、以下の通りです。</p>

<dl>
 <dt>{{event("progress")}}</dt>
 <dd>受取済みのデータ量が変化したとき。</dd>
 <dt>{{event("load")}}</dt>
 <dd>転送が完了したとき。すべてのデータが <code>response</code> に入っています。</dd>
</dl>

<pre class="brush:js notranslate">var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// サーバーからクライアントへの転送の進捗 (ダウンロード)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
    // ...
  } else {
    // 全体の長さが不明なため、進捗情報を計算できない
  }
}

function transferComplete(evt) {
  console.log("転送が完了しました。");
}

function transferFailed(evt) {
  console.log("ファイルの転送中にエラーが発生しました。");
}

function transferCanceled(evt) {
  console.log("ユーザーが転送をキャンセルしました。");
}</pre>

<p>3-6 行目で <code>XMLHttpRequest</code> を使ってデータ転送を行うときに送られる色々なイベントへのためのイベントリスナーを追加しています。</p>

<div class="note"><strong>注:</strong> イベントリスナーはリクエストの <code>open()</code> を呼び出す前に追加する必要があります。そうしないと <code>progress</code> イベントは発火しません。</div>

<p>進捗のイベントハンドラーは、この例では <code>updateProgress()</code> 関数で指定され、全転送バイト数と、これまで転送されたバイト数をイベントの <code>total</code> と <code>loaded</code> フィールドで受け取ります。しかし、<code>lengthComputable</code> フィールドが false なら、全体の長さは不明で、ゼロになります。</p>

<p>進捗イベントはダウンロード、アップロードの両方で存在します。ダウンロードイベントは、上記サンプルのように、<code>XMLHttpRequest</code> オブジェクトそのもので発火されます。アップロードイベントは下記のように、 <code>XMLHttpRequest.upload</code> オブジェクトで発火されます:</p>

<pre class="brush:js notranslate">var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
</pre>

<div class="note"><strong>注:</strong> 進捗イベントは <code>file:</code> プロトコルでは利用できません。</div>

<div class="note">
<p><strong>注:</strong> {{Gecko("9.0")}} から、進捗イベントは受け取ったデータチャンクごとに起こり、最後のパケットを受け取って進捗イベントが発火する前に接続が閉じた場合のチャンクも含まれます。この場合、進捗イベントはそのパケットのロードイベントが起きた時に自動的に発火します。これで「進捗」イベントをウォッチするだけで安定した進捗を監視できます。</p>
</div>

<div class="note">
<p><strong>注:</strong> {{Gecko("12.0")}} 以降、"moz-blob" の <code>responseType</code> で進捗イベントが呼ばれた場合、レスポンスの値はこれまで受け取ったデータを含む {{domxref("Blob")}} となります。</p>
</div>

<p>ロードを終える3つの条件 (<code>abort</code>, <code>load</code>, か <code>error</code>) を <code>loadend</code> イベントで検出することもできます:</p>

<pre class="brush:js notranslate">req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log("The transfer finished (although we don't know if it succeeded or not).");
}
</pre>

<p>注意点として、<code>loadend</code> イベントで受け取った情報から、どの条件で動作が終了したのかを確かめる方法はありません。しかし、これを使ってすべての転送終了シナリオにて行う必要のあるタスクを処理できます。</p>

<h2 id="Submitting_forms_and_uploading_files" name="Submitting_forms_and_uploading_files">フォームの投稿とファイルのアップロード</h2>

<p><code>XMLHttpRequest</code> のインスタンスはフォームの投稿をするのにも次の2つの方法で利用することができます。</p>

<ul>
 <li>AJAX だけを使う</li>
 <li>{{domxref("XMLHttpRequest.FormData", "FormData")}} API を使う</li>
</ul>

<p><code>FormData</code> API を使うのが最もシンプルで速く、しかし集めたデータを<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">文字列化</a>できない短所があります。<br>
 AJAX だけを使うのはもっと複雑ですが、ふつうより柔軟で強力です。</p>

<h3 id="Using_nothing_but_XMLHttpRequest" name="Using_nothing_but_XMLHttpRequest"><code>XMLHttpRequest</code> だけを使う</h3>

<p><code>FormData</code> API を使用せずにフォームを送信する場合は、多くの場合は他の API が必要ではありません。追加の API が必要な場合は、<strong>１つ以上のファイルをアップロードしたい場合</strong>に {{domxref("FileReader")}} API を使用する場合だけです。</p>

<h4 id="A_brief_introduction_to_the_submit_methods" name="A_brief_introduction_to_the_submit_methods">submit メソッドの簡単な入門</h4>

<p>html {{ HTMLElement("form") }} は、次の４つの方法で送ることができます。</p>

<ul>
 <li><code>POST</code> メソッドを使い、 <code>enctype</code> 属性を <code>application/x-www-form-urlencoded</code> (既定値) に設定する</li>
 <li><code>POST</code> メソッドを使い、 <code>enctype</code> 属性を <code>text/plain</code>にセットする;</li>
 <li><code>POST</code> メソッドを使い、 <code>enctype</code> 属性を <code>multipart/form-data</code>にセットする;</li>
 <li><code>GET</code> メソッドを使う (この場合 <code>enctype</code> 属性は無視される)。</li>
</ul>

<p>ここで、たった2つの<code>foo</code> と <code>baz</code>の名前のフィールドを持つフォームの投稿を考えます。 <code>POST</code> メソッドを使うとサーバーは、使っている encoding type によって次の3つのサンプルのうちのどれかの文字列を受け取ります:</p>

<ul>
 <li>
  <p>メソッド: <code>POST</code>; エンコーディングタイプ: <code>application/x-www-form-urlencoded</code> (default):</p>

  <pre class="brush:plain notranslate">Content-Type: application/x-www-form-urlencoded

foo=bar&amp;baz=The+first+line.%0D%0AThe+second+line.%0D%0A</pre>
 </li>
 <li>
  <p>メソッド: <code>POST</code>; エンコーディングタイプ: <code>text/plain</code>:</p>

  <pre class="brush:plain notranslate">Content-Type: text/plain

foo=bar
baz=The first line.
The second line.</pre>
 </li>
 <li>
  <p>メソッド: <code>POST</code>; エンコーディングタイプ: <code><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">multipart/form-data</a></code>:</p>

  <pre class="brush:plain notranslate">Content-Type: multipart/form-data; boundary=---------------------------314911788813839

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

<p>しかし、 <code>GET</code> メソッドを使っている場合、次のような文字列が URL に追加されます。</p>

<pre class="brush:plain notranslate">?foo=bar&amp;baz=The%20first%20line.%0AThe%20second%20line.</pre>

<h4 id="A_little_vanilla_framework" name="A_little_vanilla_framework">小さな vanilla フレームワーク</h4>

<p>こうしたすべての効果は {{HTMLElement("form")}} を投稿するたびにウェブブラウザーで自動的に行われます。 JavaScript を使って同じ効果を実行したい場合、<em>すべて</em>をインタープリターに教えなければなりません。ゆえに、<em>純粋な</em> AJAX でフォームを送る方法をここで詳しく説明するには複雑すぎます。このため、<strong>完全な (しかし教訓的な) フレームワーク</strong>を置いて、この4つの<em>送信</em>の方法すべてを使い、<strong>ファイルをアップロードします</strong>。</p>

<div style="height: 400px; margin-bottom: 12px; overflow: auto;">
<pre class="brush: html notranslate">&lt;!doctype html&gt;
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
|*|  https://developer.mozilla.org/ja/docs/DOM/XMLHttpRequest#sendAsBinary()
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
|*|  https://developer.mozilla.org/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
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

<p>これをテストするには、 <strong>register.php</strong> というページ (サンプルフォームの <code>action</code> 属性の内容) を作って下記の<em>最小の</em>コンテンツを置きます。</p>

<pre class="brush: php notranslate">&lt;?php
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

<p>このスクリプトを有効化する文法は単純です。</p>

<pre class="syntaxbox notranslate">AJAXSubmit(myForm);</pre>

<div class="note"><strong>注:</strong> このフレームワークはファイルのアップロード送信に {{domxref("FileReader")}} API を使っています。これは最近の API であり、 IE9 以下では実装されていません。このため、 AJAX のみのアップロードは<strong>実験的なテクニック</strong>と考えられています。バイナリーファイルをアップロードする必要がなければ、このフレームワークはたいていのブラウザーでうまく動作します。</div>

<div class="note"><strong>注:</strong> バイナリコンテンツを送信する場合、 {{jsxref("ArrayBuffer", "ArrayBuffers")}} 又は {{domxref("Blob", "Blobs")}} を使用して {{domxref("XMLHttpRequest.send()", "send()")}} メソッド及び、できれば <code>FileReader</code> API の {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} メソッドと組み合わせて送信するのが最良の方法です。しかし、このスクリプトのねらいは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">文字列化可能</a>な生データを扱うことであり、 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} メソッドに、<code>FileReader</code> API の {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} メソッドを組み合わせて使用しました。このように、上記のスクリプトは小さいファイルを扱うときのみ意味を持ちます。バイナリコンテンツをアップロードするのでなければ、代わりに <code>FormData</code> API を使用することを検討してください。</div>

<div class="note"><strong>注:</strong> 標準外の <code>sendAsBinary</code> メソッドは Gecko 31 {{geckoRelease(31)}} から非推奨と扱われるようになり、まもなく削除されます。その代わりに標準の <code>send(Blob data)</code> メソッドを使用できます。</div>

<h3 id="Using_FormData_objects" name="Using_FormData_objects">FormData オブジェクトの使用</h3>

<p>{{domxref("XMLHttpRequest.FormData", "FormData")}} コンストラクターでは <code>XMLHttpRequest</code> を使用して送信するためのキー/値の組のセットをコンパイルできます。この主な使い方はフォームの送信ですが、フォームとは独立してキー付きのユーザーデータを転送するときにも使用することができます。フォームのエンコーディングタイプが "multipart/form-data" に設定された場合、送信されたデータは、データ送信に使うフォームの <code>submit()</code> メソッドと同じ書式です。 FormData オブジェクトは色々な方法で <code>XMLHttpRequest</code> と一緒に使うことができます。例や FormData と XMLHttpRequests を使用方法についての説明は、 <a href="/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects">FormData オブジェクトの使用</a>のページをご覧ください。ここでは説明目的で、<strong><a href="#A_little_vanilla_framework">前の例</a>の<em>翻訳</em>を <code>FormData</code> API を使用するよう変換</strong>してみます。コードの簡潔さに注目してください。</p>

<div style="height: 400px; margin-bottom: 12px; overflow: auto;">
<pre class="brush: html notranslate">&lt;!doctype html&gt;
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

<div class="note"><strong>注:</strong> 前述のように、 <strong>{{domxref("FormData")}} オブジェクトは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">文字列化できる</a> オブジェクトではありません</strong>。送信データを文字列化したい場合、<a href="#A_little_vanilla_framework">前の<em>純粋な</em> AJAX の例</a>を使ってください。また、この例では <code>file</code> {{ HTMLElement("input") }} フィールドがいくつかあり、 <strong><code>FormData</code> API を使ってフォームを送信するときに {{domxref("FileReader")}} API を使う必要もありません</strong>。ファイルは自動的に読み込まれてアップロードされます。</div>

<h2 id="Get_last_modified_date" name="Get_last_modified_date">最終更新日を取得する</h2>

<pre class="brush: js notranslate">function getHeaderTime () {
  console.log(this.getResponseHeader("Last-Modified"));  /* A valid GMTString date or null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* use HEAD if you only need the headers! */, "yourpage.html");
oReq.onload = getHeaderTime;
oReq.send();</pre>

<h3 id="Do_something_when_last_modified_date_changes" name="Do_something_when_last_modified_date_changes">最終更新日付が変わった時に何かする</h3>

<p>２つの関数を作ってみましょう。</p>

<pre class="brush: js notranslate">function getHeaderTime () {
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

<p>そしてテストします。</p>

<pre class="brush: js notranslate">/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});</pre>

<p><strong><em>現在のページ</em>が変更された<em>かどうか</em></strong>を知りたい場合は、 {{domxref("document.lastModified")}} についての記事をお読みください。</p>

<h2 id="Cross-site_XMLHttpRequest" name="Cross-site_XMLHttpRequest">サイト間の XMLHttpRequest</h2>

<p>現在のブラウザーは、<ruby><a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有</a><rp> (</rp><rt>Cross-Origin Resource Sharing</rt><rp>) </rp></ruby> (CORS) を実装することでサイト間リクエストに対応しています。サーバーがウェブアプリケーションのオリジンからのリクエストを許可するように構成されている場合のみ、 <code>XMLHttpRequest</code> は動作します。それ以外の場合は、 <code>INVALID_ACCESS_ERR</code> 例外が投げられます。</p>

<h2 id="Bypassing_the_cache" name="Bypassing_the_cache">キャッシュをバイパスする</h2>

<p>キャッシュをバイパスするブラウザー間で互換性のあるアプローチは、 URL にタイムスタンプを追加することで、適切に "?" 又は "&amp;" を付け加えます。例えば以下のようにします。</p>

<pre class="brush:plain notranslate">http://foo.com/bar.html -&gt; http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -&gt; http://foo.com/bar.html?foobar=baz&amp;12345
</pre>

<p>ローカルのキャッシュは URL によって索引づけられるため、これですべてのリクエストが固有のものとなり、それによってキャッシュをバイパスします。</p>

<p>以下のコードを使用すると、自動的に URL を調整することができます。</p>

<pre class="brush:js notranslate">var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&amp;" : "?") + (new Date()).getTime());
oReq.send(null);</pre>

<h2 id="Security" name="Security">セキュリティ</h2>

<p>{{fx_minversion_note(3, "Firefox 3 以前のバージョンの Firefox は、設定の <code>capability.policy.&lt;policyname&gt;.XMLHttpRequest.open&lt;/policyname&gt;</code> を <code>allAccess</code> に設定することで、特定のサイトのサイト間アクセスを許可することができます。これはもう対応されていません。")}}</p>

<p>{{fx_minversion_note(5, "Firefox 5 以前のバージョンの Firefox は、 <code>netscape.security.PrivilegeManager.enablePrivilege(\"UniversalBrowserRead\");</code> を使用してサイト間アクセスをリクエストすることができます。これはもう対応されていませんが、警告は表示されず、アクセス権のダイアログは現在も表示されます。")}}</p>

<p>サイト間スクリプトを有効にするための推奨される方法は、 XMLHttpRequest へのレスポンスの中で HTTP の <code>Access-Control-Allow-Origin</code> ヘッダーを使用することです。</p>

<h3 id="XMLHttpRequests_being_stopped" name="XMLHttpRequests_being_stopped">XMLHttpRequests の停止</h3>

<p>XMLHttpRequest が <code>status=0</code> 及び <code>statusText=null</code> を受信して終了すると、リクエストを実行することが許可されていないことを意味します。これは未送信 (<code><a href="https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent">UNSENT</a></code>) 状態です。この原因の多くは、 XMLHttpRequest が <code>open()</code> の時に <a href="https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin"><code>XMLHttpRequest</code> のオリジン</a> (XMLHttpRequest が作成された場所) が変更されたことによるものです。これは例えば、 XMLHttpRequest を持ったページで onunload イベントが発生し、ウィンドウが閉じようとしている時に XMLHttpRequest が作成され、ウィンドウがフォーカスを失って他のウィンドウがフォーカスを得たときにリクエストの送信 (言い換えれば <code>open()</code>) が行なわれた場合に発生することがあります。この問題を防ぐ最も効果的な方法は、 {{event("unload")}} イベントが発生したときに、新しいウィンドウの {{event("activate")}} イベントのリスナーを設定することです。</p>

<h2 id="Workers" name="Workers">ワーカー</h2>

<p>overrideMimeType を設定すると、 {{domxref("Worker")}} では動作しません。詳しくは {{bug(678057)}} を参照してください。他のブラウザーは扱いが異なるかもしれません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>ライブスタンダードの最新版</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLHttpRequest")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ol>
 <li><a href="/ja/docs/AJAX/Getting_Started">MDN の AJAX 入門</a></li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest での HTML</a></li>
 <li><a href="/ja/docs/Web/HTTP/Access_control_CORS">HTTP アクセス制御</a></li>
 <li><a href="/ja/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL">SSL 経由の XMLHTTPRequest のセキュリティ状態をチェックする方法</a></li>
 <li><a href="http://www.peej.co.uk/articles/rich-user-experience.html">XMLHttpRequest - REST and the Rich User Experience</a></li>
 <li><a href="https://msdn.microsoft.com/library/ms535874">Microsoft documentation</a></li>
 <li><a href="http://jibbering.com/2002/4/httprequest.html">"Using the XMLHttpRequest Object" (jibbering.com)</a></li>
 <li><a href="https://xhr.spec.whatwg.org/">The <code>XMLHttpRequest</code> object: WHATWG specification</a></li>
</ol>
