---
title: WheelEvent
slug: Web/API/WheelEvent
tags:
  - API
  - DOM
  - Interface
  - Reference
  - WheelEvent
translation_of: Web/API/WheelEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong><code>WheelEvent</code></strong> インターフェイスは、ユーザーがマウスホイールやそれに似た機器を動かしたときに発行されるイベントを表します。</p>

<div class="blockIndicator warning">
<p><strong>重要: これは標準のホイールイベントインターフェイスです。</strong>古いバージョンのブラウザーは、標準外でブラウザー間の互換性のない {{DOMxRef("MouseWheelEvent")}} および {{DOMxRef("MouseScrollEvent")}} インターフェイスを実装していました。これらを避けて、このインターフェイスを使用してください。</p>
</div>

<div class="blockIndicator note">
<p><strong>注:</strong> {{domxref("Element/wheel_event", "wheel")}} イベントと {{domxref("Element/scroll_event", "scroll")}} イベントを混同しないでください。 <code>wheel</code> イベントの既定のアクションは実装固有のものです。したがって、 <code>wheel</code> イベントは必ずしも <code>scroll</code> イベントを発行するわけではありません。その場合でも、 <code>wheel</code> イベントの <code>delta*</code> 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。したがって、スクロールの方向を取得するために、 <code>wheel</code> イベントの <code>delta*</code> プロパティに頼らないようにしてください。代わりに、 <code>scroll</code> イベント内のターゲットの {{DOMxRef("Element.scrollLeft", "scrollLeft")}} や {{DOMxRef("Element.scrollTop", "scrollTop")}} の値の変化を検出するようにしてください。</p>
</div>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{DOMxRef("WheelEvent.WheelEvent", "WheelEvent()")}}</dt>
 <dd><code>WheelEvent</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスは、その祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} からプロパティを継承しています。</em></p>

<dl id="raw_prop">
 <dt>{{DOMxRef("WheelEvent.deltaX")}}{{ReadOnlyInline}}</dt>
 <dd>水平方向のスクロール量を表す <code>double</code> を返します。</dd>
 <dt>{{DOMxRef("WheelEvent.deltaY")}}{{ReadOnlyInline}}</dt>
 <dd>垂直方向のスクロール量を表す <code>double</code> を返します。</dd>
 <dt>{{DOMxRef("WheelEvent.deltaZ")}}{{ReadOnlyInline}}</dt>
 <dd>Z 軸方向のスクロール量を表す <code>double</code> を返します。</dd>
 <dt>{{DOMxRef("WheelEvent.deltaMode")}}{{ReadOnlyInline}}</dt>
 <dd>スクロール量の差分値の単位を表す <code>unsigned long</code> を返します。許容値は以下のとおりです:
 <table class="standard-table">
  <thead>
   <tr>
    <td class="header">定数</td>
    <td class="header">値</td>
    <td class="header">説明</td>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>DOM_DELTA_PIXEL</code></td>
    <td><code>0x00</code></td>
    <td><code>delta*</code> はピクセル数で指定されます。</td>
   </tr>
   <tr>
    <td><code>DOM_DELTA_LINE</code></td>
    <td><code>0x01</code></td>
    <td><code>delta*</code> は行数で指定されます。</td>
   </tr>
   <tr>
    <td><code>DOM_DELTA_PAGE</code></td>
    <td><code>0x02</code></td>
    <td><code>delta*</code> はページ数で指定されます。</td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスではメソッドが定義されていませんが、祖先である {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, {{DOMxRef("Event")}} のメソッドを継承しています。</em></p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("UI Events", "#interface-wheelevent", "The <code>WheelEvent</code> interface")}}</td>
   <td>{{Spec2("UI Events")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#interface-wheelevent', 'WheelEvent')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WheelEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element/wheel_event", "wheel")}} イベント</li>
 <li>置き換えたインターフェイス:
  <ul>
   <li>Gecko の古いマウスホイールイベントオブジェクト: {{DOMxRef("MouseScrollEvent")}}</li>
   <li>Gecko 以外のブラウザーの古いマウスホイールイベントオブジェクト: {{DOMxRef("MouseWheelEvent")}}</li>
  </ul>
 </li>
</ul>
