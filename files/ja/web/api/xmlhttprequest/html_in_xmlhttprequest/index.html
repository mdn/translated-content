---
title: XMLHttpRequest における HTML の扱い
slug: Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest
tags:
  - API
  - HTML
  - HTML の解析
  - HTML の読み込み
  - XMLHttpRequest
  - ウェブ
  - ガイド
translation_of: Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest
---
<div>{{APIRef("XMLHttpRequest")}}</div>

<p>W3C の {{domxref("XMLHttpRequest")}} 仕様書では、もともと {{Glossary("XML")}} の解析しか対応していなかった {{domxref("XMLHttpRequest")}} に <a href="/ja/docs/Web/HTML">HTML</a> の解析を追加しています。この機能によって、ウェブアプリは <code>XMLHttpRequest</code> を使って HTML を解析済の {{Glossary("DOM")}} として取得することができます。</p>

<p>一般的な <code>XMLHttpRequest</code> の使い方についての概要は、 <a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の利用</a>をお読みください。</p>

<h2 id="Limitations" name="Limitations">制限</h2>

<p>同期的な <code>XMLHttpRequest</code> の利用を避けるために、 HTML 対応は同期モードでは利用できません。また、 HTML 対応は {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティが <code>"document"</code> に設定されている時にのみ有効です。この制限によって、古いコードが <code>XMLHttpRequest</code> を使って {{domxref("XMLHttpRequest.responseText", "responseText")}} が <code>text/html</code> であるリソースを既定のモードで受け取るときに、無用に HTML を解釈する時間を浪費することを防ぎます。また、この制限によって HTTP のエラーページ (ふつうは <code>text/html</code> の応答本文を持つ) の際に {{domxref("XMLHttpRequest.responseXML", "responseXML")}} が <code>null</code> と想定する古いコードで問題が発生することを防ぐこともできます。</p>

<h2 id="Usage" name="Usage">使用方法</h2>

<p>{{domxref("XMLHttpRequest")}} を使って HTML リソースを DOM として取得することは、 <code>XMLHttpRequest</code> を使って XML リソースを DOM として取得するのと似ていますが、同期モードを使用することはできず、 <code>XMLHttpRequest</code> オブジェクトの {{domxref("XMLHttpRequest.open", "open()")}} を呼び出した後、 {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に、 {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティに文字列 <code>"document"</code> 代入して、明示的に文書を要求する必要があるという点が異なります。</p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML.title);
}
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
</pre>

<h2 id="Feature_Detection" name="Feature_Detection">機能の検出</h2>

<h3 id="Method_1" name="Method_1">方法1</h3>

<p>この方法は「強制的に非同期」である性質を利用するものです。 <code>XMLHttpRequest</code> オブジェクトを同期モードで開いた後、 <code>responseType</code> 設定しようとすると、機能を実装しているブラウザーではエラーを投げますが、それ以外のブラウザーではそのまま動作します。</p>

<div class="line" id="LC13">
<pre class="brush: js">function HTMLinXHR() {
  if (!window.XMLHttpRequest)
    return false;
  var req = new window.XMLHttpRequest();
  req.open('GET', window.location.href, false);
  try {
    req.responseType = 'document';
  } catch(e) {
    return true;
  }
  return false;
}
</pre>
</div>

<p><a href="https://jsfiddle.net/HTcKP/1/">JSFiddle で閲覧</a></p>

<p>この方法は同期的であり、他の資産に頼りませんが、この機能があることを示すだけで実際の機能をチェックするものではないので、次の方法2の方がより信頼できるかもしれません。</p>

<h3 id="Method_2" name="Method_2">方法2</h3>

<p>ブラウザーが {{domxref("XMLHttpRequest")}} で HTML の解析処理に対応しているかどうかを確実に検出するには、二つの課題があります。まず、 HTML 対応が非同期モードでしか有効でないことから、検出結果は非同期で受け取られることになります。第二に、 <code>data:</code> URL を使用すると同時に <code>data:</code> URL の対応にも依存することになるため、実際に HTTP を通じて文書を取得しなければならないことです。</p>

<p>つまり、 HTML 対応を検出するには、サーバ上にテスト用の HTML 文書が必要になります。このテストファイルは小さく、整形式の XML ではないものです。</p>

<pre class="brush: js">&lt;title&gt;&amp;amp;&amp;&lt;&lt;/title&gt;</pre>

<p>このファイルが <code>detect.html</code> という名前だった場合、 HTML 対応を検出する関数は次のように書くことができます。</p>

<pre class="brush: js">function detectHtmlInXhr(callback) {
  if (!window.XMLHttpRequest) {
    window.setTimeout(function() { callback(false); }, 0);
    return;
  }
  var done = false;
  var xhr = new window.XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 &amp;&amp; !done) {
      done = true;
      callback(!!(this.responseXML &amp;&amp; this.responseXML.title &amp;&amp; this.responseXML.title == "&amp;&amp;&lt;"));
    }
  }
  xhr.onabort = xhr.onerror = function() {
    if (!done) {
      done = true;
      callback(false);
    }
  }
  try {
    xhr.open("GET", "detect.html");
    xhr.responseType = "document";
    xhr.send();
  } catch (e) {
    window.setTimeout(function() {
      if (!done) {
        done = true;
        callback(false);
      }
    }, 0);
  }
}
</pre>

<p>引数の <code>callback</code> は非同期に呼び出される関数であり、 HTML 対応がある場合には唯一の引数が <code>true</code> になり、 HTML 対応がない場合は唯一の引数が <code>false</code> になります。</p>

<p><a href="https://jsfiddle.net/xfvXR/1/">JSFiddle で閲覧</a></p>

<h2 id="Character_Encoding" name="Character_Encoding">文字エンコーディング</h2>

<p>HTTP の {{HTTPHeader("Content-Type")}} ヘッダーで文字エンコーディングが宣言されている場合は、そのエンコーディングが使用されます。そうでない場合、もしバイトオーダーマークがある場合は、そのバイトオーダーマークが示すエンコーディングを使用します。そうでない場合、もしファイルの先頭 1024 バイト以内にエンコーディングを宣言する {{HTMLElement("meta")}} 要素がある場合は、そのエンコーディングが使用されます。それもない場合、ファイルは UTF-8 としてデコードされます。</p>

<h2 id="Handling_HTML_on_older_browsers" name="Handling_HTML_on_older_browsers">古いブラウザーでの HTML の扱い</h2>

<p><code>XMLHttpRequest</code> はもともと、 XML の解析のみ対応していました。 HTML の解析は最近追加されたものです。古いブラウザーでも、 {{domxref("XMLHttpRequest.responseText")}} プロパティと<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions">正規表現</a>の組み合わせで、例えば、指定された ID の HTML 要素のソースコードを取得することができます。</p>

<pre class="brush: js">function getHTML (oXHR, sTargetId) {
  var  rOpen = new RegExp("&lt;(?!\!)\\s*([^\\s&gt;]+)[^&gt;]*\\s+id\\=[\"\']" + sTargetId + "[\"\'][^&gt;]*&gt;" ,"i"),
       sSrc = oXHR.responseText, aExec = rOpen.exec(sSrc);

  return aExec ? (new RegExp("(?:(?:.(?!&lt;\\s*" + aExec[1] + "[^&gt;]*[&gt;]))*.?&lt;\\s*" + aExec[1] + "[^&gt;]*[&gt;](?:.(?!&lt;\\s*\/\\s*" + aExec[1] + "\\s*&gt;))*.?&lt;\\s*\/\\s*" + aExec[1] + "\\s*&gt;)*(?:.(?!&lt;\\s*\/\\s*" + aExec[1] + "\\s*&gt;))*.?", "i")).exec(sSrc.slice(sSrc.indexOf(aExec[0]) + aExec[0].length)) || "" : "";
}

var oReq = new XMLHttpRequest();
oReq.open("GET", "yourPage.html", true);
oReq.onload = function () { console.log(getHTML(this, "intro")); };
oReq.send(null);
</pre>

<div class="note"><strong>メモ:</strong> この方法はインタープリターにとってとても重いものです。<strong>本当に必要なときのみ使用してください</strong>。</div>

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
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<h3 id="XMLHttpRequest_インターフェイス"><code>XMLHttpRequest</code> インターフェイス</h3>

<p>{{Compat("api.XMLHttpRequest")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
</ul>
