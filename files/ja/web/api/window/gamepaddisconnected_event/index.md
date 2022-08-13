---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
translation_of: Web/API/Window/gamepaddisconnected_event
---
<p><span id="result_box" lang="ja"><span>ゲームパッドが切断されたことをブラウザが検出すると、</span></span><code>gampaddisconnected</code> <span id="result_box" lang="ja"><span>イベントが発生します。</span></span></p>

<h2 id="一般的な情報">一般的な情報</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">仕様</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event">Gamepad</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">インターフェース</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">バブリング</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">キャンセル可能</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">対象</dt>
 <dd style="margin: 0 0 0 120px;">DefaultView (<code>&lt;window&gt;</code>)</dd>
 <dt style="float: left; text-align: right; width: 120px;">標準の動作</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
</dl>

<h2 id="属性">属性</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>gamepad</code> {{readonlyInline}}</td>
   <td>{{domxref("Gamepad")}}</td>
   <td>The single gamepad attribute provides access to the associated gamepad data for this event.</td>
  </tr>
 </tbody>
</table>

<h2 id="関連するイベント">関連するイベント</h2>

<ul>
 <li><a href="/ja/docs/Web/Reference/Events/gamepadconnected">gamepadconnected</a></li>
</ul>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API">Gamepad API の利用</a></li>
</ul>
