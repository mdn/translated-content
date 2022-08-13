---
title: Window.statusbar
slug: Web/API/Window/statusbar
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
translation_of: Web/API/Window/statusbar
---
<div>{{APIRef}}</div>

<p><code><strong>Window.statusbar</strong></code> プロパティはステータスバーオブジェクトを返します。これにより、ウィンドウ内で表示/非表示を切り替えることができます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>objRef</var> = <em>window</em>.statusbar
</pre>

<h2 id="Example">例</h2>

<p>次の完全な HTML の例は、様々な "bar" オブジェクトの visible プロパティを利用する方法を示しています。既存のウィンドウのあらゆるバーの visible プロパティを書き換えるには、権限が必要です。</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;様々な DOM テスト&lt;/title&gt;

&lt;script&gt;
     // 存在するウィンドウのバーの状態を変更します
    netscape.security.PrivilegeManager.
        enablePrivilege("UniversalBrowserWrite");
    window.statusbar.visible=!window.statusbar.visible;
  &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;様々な DOM テスト&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">注</h2>

<p>上記の例のページを読み込むと、ブラウザーは次のようなダイアログを表示します。<img
    alt="" src="modify_any_open_window_dialog.png"></p>

<p>これらのバーの表示状態を切り替えるには、上記の例のように、スクリプトに署名を入れるか適切な権限を有効にするかしなければなりません。また、様々なツールバーの表示状態を動的に変更すると、ウィンドウの大きさを劇的に変化させ、ページのレイアウトに影響を与える可能性があることに注意してください。</p>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-window-statusbar',
        'Window.statusbar')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window-statusbar',
        'Window.statusbar')}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.statusbar")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/API/Window/locationbar">window.locationbar</a>, <a
      href="/ja/docs/Web/API/Window/menubar">window.menubar</a>, <a
      href="/ja/docs/Web/API/Window/personalbar">window.personalbar</a>, <a
      href="/ja/docs/Web/API/Window/scrollbars">window.scrollbars</a>, <a
      href="/ja/docs/Web/API/Window/toolbar">window.toolbar</a></li>
</ul>
