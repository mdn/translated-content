---
title: window.sidebar
slug: Web/API/Window/sidebar
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Window
translation_of: Web/API/Window/sidebar
---
<div>
 {{ApiRef}} {{Non-standard_header}} {{deprecated_header}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>ブラウザにアドオンを追加するためのいくつかのメソッドを含む、sidebar オブジェクトを返します。</p>
<h2 id="Example" name="Example">例</h2>
<pre class="syntaxbox">window.sidebar.addPanel("Google", "http://www.google.com/", "");
</pre>
<p>注記：三番目の空の引数は必須です！</p>
<h2 id="Notes" name="Notes">注記</h2>
<p>戻り値となる sidebar オブジェクトは、以下のメソッドを持ちます。</p>
<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>メソッド</th>
   <th>説明</th>
  </tr>
  <tr>
   <td><code>addPanel(<var>title</var>, <var>contentURL</var>, <var>customizeURL</var>)</code> {{Obsolete_inline(23)}}</td>
   <td>サイドバーパネルを追加します。 Firefox 2 以降でのサイドバーの詳細については、『<a href="/ja/docs/Creating_a_Firefox_sidebar">Firefox のサイドバーの作成</a>』を参照してください。</td>
  </tr>
  <tr>
   <td><code>addPersistentPanel(<var>title, <var>contentURL</var>, <var>customizeURL</var>)</var></code> {{Obsolete_inline(23)}}</td>
   <td>バックグラウンドでの動作が可能なサイドバーパネルを追加します。これは SeaMonkey 及び Firefox 1.x でのみ動作します (Firefox 2 以降では <code>addPanel()</code> のみで可)</td>
  </tr>
  <tr>
   <td><code>addSearchEngine(<var>engineURL</var>, <var>iconURL</var>, <var>suggestedTitle</var>, <var>suggestedCategory</var>)</code></td>
   <td>Sherlock 検索エンジンをインストールします。詳細は、『<a href="/ja/docs/Adding_search_engines_from_web_pages">ウェブページからの検索エンジンの追加</a>』をご覧下さい。</td>
  </tr>
  <tr>
   <td><code>addMicrosummaryGenerator(<var>generatorURL</var>)</code> {{gecko_minversion_inline("1.8.1")}} {{Obsolete_inline(6)}}</td>
   <td>microsummary generator をインストールします。 <a href="/ja/docs/Mozilla/Firefox/Releases/2">Firefox 2</a> からの新機能です。</td>
  </tr>
 </tbody>
</table>
<h2 id="Specification" name="Specification">仕様</h2>
<p>Mozilla 固有のプロパティです。どの標準にも属しません。</p>
