---
title: window.onreset
slug: conflicting/Web/API/HTMLFormElement/reset_event
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Window
translation_of: Web/API/GlobalEventHandlers/onreset
original_slug: Web/API/GlobalEventHandlers/onreset
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>フォームの <code>reset</code> イベントに対応するイベントハンドラです。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox">window.onreset = <var>funcRef</var>;
</pre>
<h3 id="Parameters" name="Parameters">引数</h3>
<ul>
 <li><var>funcRef</var> : 関数への参照、または関数式</li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="ja"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;onreset のテスト&lt;/title&gt;

&lt;script&gt;
function reg() {
  window.onreset = hit;
}

function hit() {
 alert('リセットイベントが発生しました。');
}
&lt;/script&gt;

&lt;/head&gt;
&lt;body onload="reg();"&gt;

&lt;form&gt;
  &lt;div&gt;
    &lt;textarea&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;input type="reset" value="reset" /&gt;
  &lt;/div&gt;
&lt;/form&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>reset イベントは、ユーザがフォーム内のリセットボタン (<code>&lt;input type="reset"/&gt;</code>) をクリックした際に発生します。</p>
<h2 id="Specification" name="Specification">仕様</h2>
<p>標準仕様書には含まれていません。</p>
