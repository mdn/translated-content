---
title: window.back
slug: Web/API/Window/back
tags:
  - API
  - DOM
  - Firefox
  - Gecko
  - Method
  - Non-standard
  - Obsolete
  - Window
  - back
translation_of: Web/API/Window/back
---
<div>{{ApiRef}}{{Non-standard_header}}{{obsolete_header}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p><strong>{{domxref("Window")}}</strong> インターフェイスの廃止済みで非標準の <code>back()</code> メソッドは、履歴で前のアイテムの window を返します。これは Firefox 固有のメソッドであり、Firefox 31 で削除しました。代わりに、標準の {{domxref("History.back", "history.back()")}} メソッドを使用してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.back();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>ありません。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code> です。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例は、<code>back()</code> を呼び出して "戻る" ボタンのクリックを制御します。</p>

<pre class="brush:js">function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<p>どの仕様にも属していません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>この非標準メソッドは Firefox だけが実装しており、Firefox 31 で削除しました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("History.back()")}}</li>
 <li>{{domxref("History.forward()")}}</li>
</ul>
