---
title: DOMTokenList
slug: Web/API/DOMTokenList
tags:
  - API
  - DOM
  - DOMTokenList
  - Interface
  - Reference
  - インターフェイス
translation_of: Web/API/DOMTokenList
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>DOMTokenList</strong></code> インターフェイスは、スペースで区切られたトークンのセットを表します。こうしたセットは {{domxref("Element.classList")}}、{{domxref("HTMLLinkElement.relList")}}、{{domxref("HTMLAnchorElement.relList")}}、{{domxref("HTMLAreaElement.relList")}}、{{domxref("HTMLIframeElement.sandbox")}}、{{domxref("HTMLOutputElement.htmlFor")}} 等から返されるものです。インデックスは JavaScript の {{jsxref("Array")}} オブジェクトのように <code>0</code> から始まります。 <code>DOMTokenList</code> は常に大文字と小文字を区別します。</p>

<h2 id="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}</dt>
 <dd><code>integer</code> で、このオブジェクトに格納されているオブジェクトの数を表します。</dd>
 <dt>{{domxref("DOMTokenList.value")}}</dt>
 <dd>文字列化プロパティであり、リストの値を {{domxref("DOMString")}} で返します。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("DOMTokenList.item()", "DOMTokenList.item(<var>index</var>)")}}</dt>
 <dd>そのリスト内で <code><var>index</var></code> の位置の項目を返します。 <code><var>index</var></code> がそのリストの <code>length</code> 以上であれば <code>undefined</code> を返します。</dd>
 <dt>{{domxref("DOMTokenList.contains()", "DOMTokenList.contains(<var>token</var>)")}}</dt>
 <dd>指定された <code><var>token</var></code> がリストに含まれていれば <code>true</code> を返し、そうでなければ <code>false</code>を返します。</dd>
 <dt>{{domxref("DOMTokenList.add()", "DOMTokenList.add(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}</dt>
 <dd>指定された <code><var>token</var></code> をリストに追加します。</dd>
 <dt>{{domxref("DOMTokenList.remove()", "DOMTokenList.remove(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]])")}}</dt>
 <dd>指定された <code><var>token</var></code> をリストから削除します。</dd>
 <dt>{{domxref("DOMTokenList.replace()", "DOMTokenList.replace(<var>oldToken</var>, <var>newToken</var>)")}}</dt>
 <dd>既存の <code><var>token</var></code> を <code><var>newToken</var></code> で置き換えます。</dd>
 <dt>{{domxref("DOMTokenList.supports()", "DOMTokenList.supports(<var>token</var>)")}}</dt>
 <dd>指定された <code><var>token</var></code> が、関連付けられた属性で対応しているトークンであれば <code>true</code> を返します。</dd>
 <dt>{{domxref("DOMTokenList.toggle()", "DOMTokenList.toggle(<var>token</var> [, <var>force</var>])")}}</dt>
 <dd>もし <code><var>token</var></code> が存在すればリストから削除し、存在しなければ <code><var>token</var></code> をリストに追加します。操作後にリスト内に <code><var>token</var></code> が存在するかどうかを boolean で返します。</dd>
 <dt>{{domxref("DOMTokenList.entries()")}}</dt>
 <dd>このオブジェクト内に含まれるすべてのキーと値のペアを反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。</dd>
 <dt>{{domxref("DOMTokenList.forEach()", "DOMTokenList.forEach(<var>callback</var> [, <var>thisArg</var>])")}}</dt>
 <dd><code>DOMTokenList</code> オブジェクトの各要素に対して 1 回ずつ、指定した <code><var>callback</var></code> 関数を実行します。</dd>
 <dt>{{domxref("DOMTokenList.keys()")}}</dt>
 <dd>このオブジェクト内に含まれるすべてのキーと値のペアのうちキーを反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。</dd>
 <dt>{{domxref("DOMTokenList.values()")}}</dt>
 <dd>このオブジェクト内に含まれるすべてのキーと値のペアのうち値を反復処理することができる{{jsxref("Iteration_protocols", "反復子", "", 1)}}を返します。</dd>
</dl>

<h2 id="Examples">例</h2>

<p>以下の簡単な例では、 {{htmlelement("p")}} 要素のクラスのリストを {{domxref("Element.classList")}} を使用して <code>DOMTokenList</code> として受け取り、 {{domxref("DOMTokenList.add()")}} を使用してクラスを 1 つ追加し、最後に <code>&lt;p&gt;</code> の {{domxref("Node.textContent")}} が <code>DOMTokenList</code> と等しくなるように更新します。</p>

<p>まず、 HTML は以下のとおりです。</p>

<pre class="brush: html">&lt;p class="a b c"&gt;&lt;/p&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let para = document.querySelector("p");
let classes = para.classList;
para.classList.add("d");
para.textContent = `paragraph classList is "${classes}"`;</pre>

<p>出力結果はこのようになります。</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Trimming_of_whitespace_and_removal_of_duplicates">ホワイトスペースのトリミングと重複の削除</h2>

<p><code>DOMTokenList</code> を編集するメソッド ({{domxref("DOMTokenList.add()")}} など) は、自動的にそのリストから余分な{{Glossary("Whitespace", "ホワイトスペース")}}をトリミングし、重複した値を削除します。例えば次のようになります。</p>

<pre class="brush: html">&lt;span class="    d   d e f"&gt;&lt;/span&gt;</pre>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
span.classList.add("x");
span.textContent = `span classList is "${classes}"`;</pre>

<p>出力結果はこのようになります。</p>

<p>{{ EmbedLiveSample('Trimming_of_whitespace_and_removal_of_duplicates', '100%', 60) }}</p>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName("DOM WHATWG", "#interface-domtokenlist", "DOMTokenList")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList")}}</p>
