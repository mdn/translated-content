---
title: InputEvent
slug: Web/API/InputEvent
tags:
  - API
  - DOM
  - Interface
translation_of: Web/API/InputEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>InputEvent</code></strong> インターフェイスは、編集可能なコンテンツが変更されたことを通知するイベントを表します。</p>

<h2 id="Constructor" name="Constructor">コンストラクタ</h2>

<dl>
 <dt>{{domxref("InputEvent.InputEvent", "InputEvent()")}}</dt>
 <dd><code>InputEvent</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは、親インターフェイスである {{domxref("UIEvent")}}、{{domxref("Event")}} のプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("InputEvent.data")}} {{readOnlyInline}}</dt>
 <dd>挿入された文字を {{domxref("DOMString")}} で返します。変更により挿入されたテキストがない (例えば文字を削除する) 場合は、空文字列になるでしょう。</dd>
 <dt>{{domxref("InputEvent.isComposing")}}{{readOnlyInline}}</dt>
 <dd>イベントが {{event("compositionstart")}} の後かつ {{event("compositionend")}} の前に発生したかを示す {{jsxref("Boolean")}} 値を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスではメソッドが定義されていませんが、親インターフェイスである {{domxref("UIEvent")}}、{{domxref("Event")}} のメソッドを継承します。</em></p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM3 Events','#interface-InputEvent','InputEvent')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>最初期の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.InputEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{event("beforeinput")}}</li>
 <li>{{event("input")}}</li>
</ul>
