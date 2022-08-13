---
title: Window.menubar
slug: Web/API/Window/menubar
tags:
- API
- HTML DOM
- Property
- Reference
- Window
translation_of: Web/API/Window/menubar
---
<div>{{ APIRef() }}</div>

<p><code><strong>Window.menubar</strong></code> プロパティは <code>menubar</code> オブジェクトを返します。これによって表示状態を確認することができます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>objRef</em> = <em>window</em>.menubar
</pre>

<h2 id="Example">例</h2>

<p>以下の完全な HTML の例は、 <code>menubar</code> オブジェクトの <code>visible</code> プロパティの使用方法を示しています。</p>

<pre class="brush:html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;様々な DOM テスト&lt;/title&gt;
  &lt;script&gt;
    var visible = window.menubar.visible;
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;様々な DOM テスト&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-window-menubar',
        'Window.menubar')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window-menubar', 'Window.menubar')}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.menubar")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Window.locationbar")}}</li>
  <li>{{domxref("Window.personalbar")}}</li>
  <li>{{domxref("Window.scrollbars")}}</li>
  <li>{{domxref("Window.statusbar")}}</li>
  <li>{{domxref("Window.toolbar")}}</li>
</ul>
