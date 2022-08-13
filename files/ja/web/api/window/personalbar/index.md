---
title: window.personalbar
slug: Web/API/Window/personalbar
tags:
  - Gecko
  - HTML DOM
  - Window
translation_of: Web/API/Window/personalbar
---
<div>{{ApiRef}}</div>

<h2 id="概要">概要</h2>

<p><code>personalbar</code> オブジェクトを返します。このバーの表示は、ウィンドウ内でトグル（表示/非表示の状態を切り替える）ことができます。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><var>objRef</var> =<em>window</em>.personalbar
</pre>

<h2 id="例">例</h2>

<p>以下の完全な HTML の例は、様々な "bar" オブジェクトの visible プロパティで利用可能な方法を示しています。存在するウィンドウのあらゆるバーの visible プロパティ を書き換えるには、特権が必要です。</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="ja"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;様々な DOM テスト&lt;/title&gt;

&lt;script&gt;
// 存在するウィンドウのバーの状態を変更します
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.personalbar.visible = !window.personalbar.visible;
&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;様々な DOM テスト&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes" name="Notes">注記</h2>

<p>上記の例のページを読み込んだとき、ブラウザは、以下のダイアログを表示するでしょう。<br>
 <img src="https://mdn.mozillademos.org/files/1574/Modify_any_open_window_dialog.png" style="height: 262px; width: 607px;"></p>

<p>バーの表示を切り替えるには、上記の例のように、スクリプトの実行と特権要求を許可しなければなりません。また、様々なツールバーの表示の動的な変更は、ウィンドウのサイズをかなり劇的に変化させることがあり、ページのレイアウトに影響する可能性があることに注意してください。</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'browsers.html#dom-window-personalbar', 'Window.personalbar')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'browsers.html#dom-window-personalbar', 'Window.personalbar')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{domxref("window.locationbar")}} 、{{domxref("window.menubar")}} 、{{domxref("window.scrollbars")}} 、{{domxref("window.statusbar")}} 、{{domxref("window.toolbar")}}</li>
</ul>
