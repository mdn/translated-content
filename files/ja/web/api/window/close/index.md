---
title: window.close
slug: Web/API/Window/close
tags:
  - API
  - DOM
  - Gecko
  - Method
  - Reference
  - Window
translation_of: Web/API/Window/close
---
<p>{{APIRef}}</p>

<p><code><strong>Window.close()</strong></code> メソッドは、現在のウィンドウ、またはそのページ上で呼び出されたウィンドウを閉じます。</p>

<p>このメソッドが許可されるのは、{{domxref("window.open()")}} メソッドを用いたスクリプトにより開かれたウィンドウに対する呼び出しのみです。ウィンドウがスクリプトにより開かれたものでない場合、次のようなエラーがコンソールに表示されます: <code>スクリプトはスクリプトによって開かれたウィンドウ以外を閉じることができません。</code></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.close();</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Closing_a_window_opened_with_window.open.28.29" name="Closing_a_window_opened_with_window.open.28.29"><code>window.open()</code> で開かれたウィンドウを閉じる</h3>

<p>この例は、ウィンドウを開くメソッドと、そのウィンドウを閉じるメソッドです。これは、{{domxref("window.open()")}} の呼び出しにより開かれたウィンドウを閉じる <code>Window.close()</code> の使い方を実演します。</p>

<pre class="brush: js">//開いたウィンドウへの参照を保持するグローバル変数
var openedWindow;

function openWindow() {
  openedWindow = window.open('moreinfo.htm');
}

function closeOpenedWindow() {
  openedWindow.close();
}
</pre>

<h3 id="Closing_the_current_window" name="Closing_the_current_window">現在のウィンドウを閉じる</h3>

<p>以前は、<code>window</code> <strong>インスタンス</strong>の <code>close()</code> を呼び出す代わりに <code>window</code> オブジェクトの <code>close()</code> メソッドを直接呼び出した場合、ブラウザは、スクリプトで開いたウィンドウであるかどうかに関わらず、最前面のウィンドウを閉じていました。セキュリティ上の理由により、スクリプトにより開いたものでないウィンドウを閉じることは許可されなくなりました (Firefox 46.0.1: スクリプトは、そのスクリプトが開いたものでないウィンドウを閉じることができません)。</p>

<pre class="brush: js">function closeCurrentWindow() {
  window.close();
}
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-window-close', 'window.close()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#dom-window-close", "Window.close()")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>



<p>{{Compat("api.Window.close")}}</p>
