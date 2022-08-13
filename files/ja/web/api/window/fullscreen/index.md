---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
tags:
  - API
  - HTML DOM
  - NeedsMarkupWork
  - Non-standard
  - Property
  - Reference
  - Window
  - プロパティ
  - 標準外
translation_of: Web/API/Window/fullScreen
---
<div>{{APIRef}}{{Non-standard_Header}}</div>

<p><code><strong>fullScreen</strong></code> は <code>Window</code> インターフェイスのプロパティで、そのウィンドウが全画面モードで表示されているかどうかを示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>isInFullScreen</var> = <var>windowRef</var>.fullScreen;
</pre>

<p>クローム特権があればこのプロパティは読み書き可能で、それ以外では読み取り専用です。クローム特権なしでこのプロパティを設定しようとすると、例外は発生せず、ただ暗黙に失敗することに注意してください。これは、 Internet Explorer でこのプロパティを設定するように設計されたスクリプトが壊れるのを防ぐためです。</p>

<h3 id="Return_Value" name="Return_Value">返値</h3>

<dl>
 <dt><code>isInFullScreen</code></dt>
 <dd>論理値。取り得る値は次の通りです。</dd>
</dl>

<ul>
 <li><code>true</code>: そのウィンドウは全画面モードです。</li>
 <li><code>false</code>: そのウィンドウは全画面モードではありません。</li>
</ul>

<h2 id="Notes" name="Notes">注</h2>

<ul>
 <li>通常のウィンドウと全画面との間で切り替えが行われると、 "resize" イベントが該当するウィンドウで発生します。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">if (window.fullScreen) {
  // 全画面モード
}
else {
  // 全画面モードではない
}</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.fullScreen")}}</p>
