---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
tags:
  - API
  - DOM
  - Method
  - NeedsMarkupWork
  - NeedsSpecTable
  - Reference
  - getElementsByTagNameNS
translation_of: Web/API/Document/getElementsByTagNameNS
---
<div>{{APIRef("DOM")}}</div>

<p>指定された名前空間の指定されたタグ名を持つ要素のリストを返します。ルートノードを含め、文書全体が検索されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>elements</var> = document.getElementsByTagNameNS(<var>namespace</var>, <var>name</var>)
</pre>

<ul>
 <li><var>elements</var> は見つかった要素の生きた {{DOMxRef("NodeList")}} (但し下記のメモを参照) で、ツリーに現れる順です。</li>
 <li><var>namespace</var> は検索する要素の名前空間 URI です ({{domxref("Node.namespaceURI", "element.namespaceURI")}} を参照)。</li>
 <li><var>name</var> は検索する要素の局所名、またはすべての要素に一致する特殊な値 <code>*</code> です ({{domxref("Node.localName", "element.localName")}} を参照)。</li>
</ul>

<p class="note"><strong>注:</strong> W3C の仕様書では <code>elements</code> は <code>NodeList</code> であるとされていますが、 Gecko および Internet Explorer ではこのメソッドは {{DOMxRef("HTMLCollection")}} を返します。 Opera は <code>NodeList</code> を返しますが、 <code>namedItem</code> メソッドを実装しているので、 <code>HTMLCollection</code> と同様になります。2012年1月時点で、 WebKit ブラウザーのみが純粋な <code>NodeList</code> の値を返します。詳しくは <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=14869">bug 14869</a> を参照してください。</p>

<p class="note"><strong>注:</strong> 現在、このメソッドの引数は大文字と小文字を区別しますが、 Firefox 3.5 以前は大文字と小文字を区別していませんでした。詳しくは <a href="/ja/docs/Mozilla/Firefox/Releases/3.6#DOM">Firefox 3.6 の開発者リリースノート</a>および {{domxref("Element.getElementsByTagNameNS")}} のブラウザーの互換性のメモをご覧ください。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下の例では、 <code>getElementsByTagNameNS</code> は特定の親要素から始め、 DOM 内を親要素から再帰的に通して検索し、タグの <code>name</code> が引数に一致する子要素を検索します。</p>

<p>なお、 <code>getElementsByTagName</code> が呼び出されたノードが <code>document</code> ではない場合、実際には {{domxref("element.getElementsByTagNameNS")}} メソッドが使用されます。</p>

<p>以下の例を使用するには、新しいファイルにそのままコピー＆ペーストして、 .xhtml の拡張子で保存してください。</p>

<pre class="brush: html notranslate">&lt;html xmlns="<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>"&gt;

&lt;head&gt;
&lt;title&gt;getElementsByTagNameNS example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function getAllParaElems()
{
  var allParas = document.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = allParas.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in this document");
}


function div1ParaElems()
{
  var div1 = document.getElementById("div1")
  var div1Paras = div1.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = div1Paras.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in div1 element");
}


function div2ParaElems()
{
  var div2 = document.getElementById("div2")
  var div2Paras = div2.getElementsByTagNameNS("<a class="external" href="http://www.w3.org/1999/xhtml" rel="freelink">http://www.w3.org/1999/xhtml</a>", "p");

  var num = div2Paras.length;

  alert("There are " + num + " &amp;lt;p&amp;gt; elements in div2 element");
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body style="border: solid green 3px"&gt;
&lt;p&gt;Some outer text&lt;/p&gt;
&lt;p&gt;Some outer text&lt;/p&gt;

  &lt;div id="div1" style="border: solid blue 3px"&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;
    &lt;p&gt;Some div1 text&lt;/p&gt;

    &lt;div id="div2" style="border: solid red 3px"&gt;
    &lt;p&gt;Some div2 text&lt;/p&gt;
    &lt;p&gt;Some div2 text&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;p&gt;Some outer text&lt;/p&gt;
&lt;p&gt;Some outer text&lt;/p&gt;

&lt;button onclick="getAllParaElems();"&gt;
 show all p elements in document&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div1ParaElems();"&gt;
 show all p elements in div1 element&lt;/button&gt;&lt;br /&gt;

&lt;button onclick="div2ParaElems();"&gt;
 show all p elements in div2 element&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Potential_Workaround_for_other_browsers_which_do_not_support" name="Potential_Workaround_for_other_browsers_which_do_not_support">対応していないブラウザーでの代替方法</h2>

<p>要求されたブラウザーが XPath に対応していない場合、他のアプローチ (DOM のすべての子要素をたどって、すべての @xmlns インスタンスで識別する、など) で要求された局所名および名前空間を持つすべてのタグを検索する必要がありますが、 XPath の方がはるかに高速です。 (Explorer に対応するためには、<a class="external" href="http://www.davidflanagan.com/javascript5/display.php?n=21-10&amp;f=21/10.js">このラッパークラス</a>のように、以下の関数で XPath の代わりに XPath のラッパーを呼び出すことができます (Explorer は異なる API を持つ XPath に対応しています)。</p>

<pre class="brush: js notranslate">function getElementsByTagNameNSWrapper (ns, elName, doc, context) {
 if (!doc) {
  doc = document;
 }
 if (!context) {
  context = doc;
 }

 var result = doc.evaluate('//*[local-name()="'+elName+'" and namespace-uri() = "'+ns+'"]', context, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        var a = [];
        for(var i = 0; i &lt; result.snapshotLength; i++) {
            a[i] = result.snapshotItem(i);
        }
        return a;
}
</pre>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-getelementsbytagnamens', 'document.getElementsByTagNameNS')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.getElementsByTagNameNS")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("Element.getElementsByTagNameNS()")}}</li>
</ul>
