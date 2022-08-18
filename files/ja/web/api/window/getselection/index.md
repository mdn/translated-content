---
title: window.getSelection
slug: Web/API/Window/getSelection
tags:
  - API
  - DOM
  - Method
  - NeedsMobileBrowserCompatibility
  - Reference
  - Selection
  - Selection API
  - Window
translation_of: Web/API/Window/getSelection
---
<div>{{ ApiRef() }}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>ユーザーが選択した文字列の範囲やキャレットの現在位置を示す {{domxref("Selection")}} オブジェクトを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>selection</em> = <em>window</em>.getSelection();</pre>

<h3 id="Value" name="Value">値</h3>

<p>A {{domxref("Selection")}} オブジェクト。</p>

<p>文字列へ型変換すると、空の文字列(<code>""</code>)を追加するか {{domxref("Selection.toString()")}} を使って、選択された文字列を返します。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">function foo() {
    var selObj = window.getSelection();
    alert(selObj);
    var selRange = selObj.getRangeAt(0);
    // 以下、取得した選択文字列に対して何らかの処理を行う
}</pre>

<h2 id="Notes" name="Notes">注記</h2>

<h3 id="String_representation_of_the_Selection_object" name="String_representation_of_the_Selection_object">Selection オブジェクトの文字列表現</h3>

<p>JavaScript では、文字列が渡されることを前提としている関数 ({{ Domxref("window.alert()") }} や {{ Domxref("document.write()") }}) にオブジェクトが渡されると、そのオブジェクトの {{jsxref("Object.toString", "toString()")}} メソッドが呼び出され、その結果が関数へ渡されます。このため、実際はプロパティとメソッドを持つオブジェクトなのに、文字列であるかのように見えてしまいます。</p>

<p>上の例では、{{domxref("window.alert()")}} へ渡されるときに自動的に <code>selObj.toString()</code> が呼び出されます。しかし、{{domxref("Selection")}} オブジェクトで JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String" title="JS/String">String</a> プロパティや <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length" title="JS/String.length">length</a></code>、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substr" title="JS/String.substr">substr</a></code> などのメソッドを直に使おうとすると、オブジェクトにその名前のプロパティやメソッドが存在しないはエラーとなり、存在する場合は予期せぬ結果を返すでしょう。<code>Selection</code> オブジェクトを文字列として使うなら、下記のように <code>toString()</code> メソッドを呼び出してください。</p>

<pre class="brush:js;gutter:false;">var selectedText = selObj.toString();</pre>

<ul>
  <li><code>selObj</code> は <code>Selection</code> オブジェクトです。</li>
  <li><code>selectedText</code> は文字列です。 (選択された文字列)</li>
</ul>

<h3 id="Related_objects" name="Related_objects">関連オブジェクト</h3>

<p>同じように機能する {{domxref("Document.getSelection()")}} を呼び出すことができます。</p>

<p>HTML input 要素は selection を扱うための簡単な支援 API を提供しています。 (詳細: {{domxref("HTMLInputElement.setSelectionRange()")}})</p>

<p><em>selection</em> と <em>focus</em> の違いに注意してください。{{domxref("Document.activeElement")}} はフォーカスされた要素を返します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">策定状況</th>
      <th scope="col">コメント</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("Selection API", "#extensions-to-window-interface", "Window.getSelection()")}}</td>
      <td>{{Spec2("Selection API")}}</td>
      <td>新仕様</td>
    </tr>
    <tr>
      <td>{{SpecName("HTML Editing", "#dom-window-getselection", "Window.getSelection()")}}</td>
      <td>{{Spec2("HTML Editing")}}</td>
      <td>初期定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Window.getSelection")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/API/Selection_API">Selection API</a></li>
  <li>{{domxref("Selection")}}</li>
  <li>{{domxref("Range")}}</li>
  <li>{{domxref("Document.getSelection()")}}</li>
  <li>{{domxref("HTMLInputElement.setSelectionRange()")}}</li>
</ul>
