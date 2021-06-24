---
title: Document.getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
tags:
  - API
  - DOM
  - Method
  - Reference
translation_of: Web/API/Document/getElementsByTagName
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>getElementsByTagName</code></strong> は {{domxref("Document")}} インターフェイスのメソッドで、<span class="seoSummary">指定されたタグ名を持つ要素の {{domxref("HTMLCollection")}} を返します。</span>ルートノードを含めた文書全体が検索されます。返された <code>HTMLCollection</code> は生きたものであり、つまり <code>document.getElementsByTagName()</code> を再度呼び出さなくても DOM ツリーと同期を取り続けるよう、自動的に自分自身を更新します。.</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>elements</var> = document.getElementsByTagName(<var>name</var>);</pre>

<ul>
 <li><var>elements</var> は生きた {{domxref("HTMLCollection")}} であり、見つかった要素がツリーに出現する順に並んでいます (ただし、下記のメモを見てください)。</li>
 <li><var>name</var> は文字列で、要素の名前を表します。特殊な文字列 "*" は全ての要素を表します。</li>
</ul>

<div class="note"><a href="https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html">最新の W3C 仕様書</a> では <code>elements</code> は <code>HTMLCollection</code> です。しかし、 WebKit ブラウザーではこのメソッドは {{domxref("NodeList")}} を返します。詳しくは {{bug(14869)}} を見てください。</div>

<h2 id="Example" name="Example">例</h2>

<p>以下の例では、 <code>getElementsByTagName()</code> は特定の親要素から開始し、その親要素から DOM を上から下へ再帰的に検索し、タグが <code>name</code> パラメータと一致する子要素を探します。これは <code>document.getElementsByTagName()</code> と、機能的に同等な {{domxref("Element.getElementsByTagName()")}} は、 DOM ツリー内の特定の要素から検索を始めることを示します。</p>

<p>ボタンをクリックすると <code>getElementsByTagName()</code> を使用して、特定の親 (文書自体または2つの {{HTMLElement("div")}} 要素の何れかに囲まれたもの) の子孫の段落要素を数えます。</p>

<pre class="brush:html notranslate">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;title&gt;getElementsByTagName example&lt;/title&gt;
  &lt;script&gt;
    function getAllParaElems() {
      var allParas = document.getElementsByTagName('p');
      var num = allParas.length;
      alert('この文書には ' + num + ' 個の段落があります');
    }

    function div1ParaElems() {
      var div1 = document.getElementById('div1');
      var div1Paras = div1.getElementsByTagName('p');
      var num = div1Paras.length;
      alert('#div1 には ' + num + ' 個の段落があります');
    }

    function div2ParaElems() {
      var div2 = document.getElementById('div2');
      var div2Paras = div2.getElementsByTagName('p');
      var num = div2Paras.length;
      alert('#div2 には' + num + ' 個の段落があります');
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
    文書内のすべての p 要素を表示&lt;/button&gt;&lt;br /&gt;

  &lt;button onclick="div1ParaElems();"&gt;
    div1 要素内のすべての p 要素を表示&lt;/button&gt;&lt;br /&gt;

  &lt;button onclick="div2ParaElems();"&gt;
    div2 要素内のすべての p 要素を表示&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes" name="Notes">注</h2>

<p>HTML 文書上で呼び出された場合、 <code>getElementsByTagName()</code> は処理前に引数を小文字に変換します。これは HTML 文書内のサブツリーにあるキャメルケースの SVG 要素に一致させようとする場合には望ましくありません。この場合は {{Domxref("document.getElementsByTagNameNS()")}} が便利です。 {{Bug(499656)}} を参照してください。</p>

<p><code>document.getElementsByTagName()</code> は、検索が文書全体を含むという点以外は {{domxref("Element.getElementsByTagName()")}} と類似しています。</p>

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
   <td>{{SpecName('DOM WHATWG','#dom-document-getelementsbytagname','document.getElementsByTagName')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.getElementsByTagName")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element.getElementsByTagName()")}}</li>
 <li>{{domxref("document.getElementById()")}} : <code>id</code> によって検索した要素への参照を返す</li>
 <li>{{domxref("document.getElementsByName()")}} : <code>name</code> によって検索した要素への参照を返す</li>
 <li>{{domxref("document.querySelector()")}} : <code>'div.myclass'</code> のような CSS セレクターによって要素への参照を返す</li>
</ul>
