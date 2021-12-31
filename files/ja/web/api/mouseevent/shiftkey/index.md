---
title: MouseEvent.shiftKey
slug: Web/API/MouseEvent/shiftKey
translation_of: Web/API/MouseEvent/shiftKey
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>MouseEvent.shiftKey</code></strong>は読み取り専用のプロパティです。  <kbd>shift</kbd> キーが押された (<code>true</code>) か離されている (<code>false</code>) かを各イベント時に表します。</p>

<h2 id="文法">文法</h2>

<pre class="syntaxbox">var <em>shiftKeyPressed</em> = <em>instanceOfMouseEvent</em>.shiftKey
</pre>

<h3 id="返り値">返り値</h3>

<p>A boolean</p>

<h2 id="Example" name="Example">使用例</h2>

<pre class="brush: js">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;shiftKey example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body onkeypress="showChar(event);"&gt;
&lt;p&gt;シフトキーを押しながらアルファベットキーを押してみてください。&lt;br /&gt;
同様に Altキーとも同時に使うことができます。&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">注釈</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events','#widl-MouseEvent-shiftKey','MouseEvent.shiftKey')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>次から変更なし{{SpecName('DOM2 Events')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent.shiftKey')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
   <td>初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.MouseEvent.shiftKey")}}</p>

<h2 id="See_also" name="See_also">参考</h2>

<ul>
 <li>{{ domxref("MouseEvent") }}</li>
</ul>
