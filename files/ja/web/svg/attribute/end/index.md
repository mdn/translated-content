---
title: end
slug: Web/SVG/Attribute/end
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
translation_of: Web/SVG/Attribute/end
---
<div>{{SVGRef}}</div>

<p><strong><code>end</code></strong> 属性は、アクティブな期間を制限できるアニメーションの終了値を定義します。</p>

<p>5つの要素がこの属性を使用しています。 {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}}, {{SVGElement("set")}} です。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">既定値</th>
   <td><em>なし</em></td>
  </tr>
  <tr>
   <th scope="row">値</th>
   <td><code>&lt;end-value-list&gt;</code></td>
  </tr>
  <tr>
   <th scope="row">アニメーション</th>
   <td>不可</td>
  </tr>
 </tbody>
</table>

<p><code>&lt;end-value-list&gt;</code> は値のセミコロン区切りのリストです。それぞれの値は以下のうちの1つです。</p>

<dl>
 <dt><code>&lt;offset-value&gt;</code></dt>
 <dd>この値は時点を表す <a href="/ja/docs/Web/SVG/Content_type#Clock-value">clock-value</a> を、 SVG 文書の始まり (通常は {{domxref("SVGElement/load_event", "load")}} または {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} イベント) からの相対で定義します。負の数も有効です。</dd>
 <dt><code>&lt;syncbase-value&gt;</code></dt>
 <dd>この値は <em>syncbase</em> と、任意でその <em>syncbase</em> からのオフセットを定義します。要素のアニメーションの終了時刻は、他のアニメーションの開始またはアクティブ状態の終了からの相対で定義します。</dd>
 <dd>有効な syncbase-value は、他のアニメーション要素への ID による参照にドット、そして <code>begin</code> または <code>end</code> が続き、参照先のアニメーション要素の開始とアクティブ状態の終了のどちらと同期するかを識別します。 <code>&lt;offset-value&gt;</code> で定義される任意のオフセット値を追加することができます。</dd>
 <dt><code>&lt;event-value&gt;</code></dt>
 <dd>この値はイベントと任意のオフセットで定義し、要素のアニメーションが終了する時刻を特定します。アニメーションの終了時刻は、指定されたイベントが発生した時刻からの相対で定義します。</dd>
 <dd>有効な event-value は、要素 ID の後にドットと、その要素の対応しているイベントのうちの一つが続きます。すべての有効なイベントは (すべての要素で対応しているとは限りません) DOM および HTML の仕様書で定義されています。これらは、 {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}, {{domxref("Element/activate_event", "activate")}}, {{domxref("Element/auxclick_event", "auxclick")}}, {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/beforeinput_event", "beforeinput")}}, {{domxref("Element/input_event", "input")}}, {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}, {{domxref("Element/compositionstart_event", "compositionstart")}}, {{domxref("Element/compositionupdate_event", "compositionupdate")}}, {{domxref("Element/compositionend_event", "compositionend")}}, {{domxref("SVGElement/load_event", "load")}}, {{domxref("SVGElement/unload_event", "unload")}}, {{domxref("SVGElement/abort_event", "abort")}}, {{domxref("Element/error_event", "error")}}, {{domxref("Element/select_event", "select")}}, {{domxref("Window/resize_event", "resize")}}, {{domxref("Element/scroll_event", "scroll")}}, {{domxref("SVGAnimationElement/beginEvent_event", "beginEvent")}}, {{domxref("SVGAnimationElement/endEvent_event", "endEvent")}}, {{domxref("SVGAnimationElement/repeatEvent_event", "repeatEvent")}} です。 <code>&lt;offset-value&gt;</code> で定義される任意のオフセット値を追加することができます。</dd>
 <dt><code>&lt;repeat-value&gt;</code></dt>
 <dd>この値は修飾された repeat イベントを定義します。この要素のアニメーション終了時刻は指定された回数の repeat イベントが発生したときからの相対で定義されます。</dd>
 <dd>有効な event-value は、要素 ID の後にドットと <code>repeat()</code> 関数に繰り返し回数を指定する整数値を引数として指定したものです。 <code>&lt;offset-value&gt;</code> で定義される任意のオフセット値を追加することができます。</dd>
 <dt><code>&lt;accessKey-value&gt;</code></dt>
 <dd>この値はアニメーションの終了のきっかけとなるアクセスキーを定義します。要素のアニメーションはユーザーが指定されたキーを押したときに終了します。</dd>
 <dd>有効な accessKey-value は、 <code>accessKey()</code> 関数に入力される文字を引数として渡したものです。 <code>&lt;offset-value&gt;</code> で定義される任意のオフセット値を追加することができます。</dd>
 <dt><code>&lt;wallclock-sync-value&gt;</code></dt>
 <dd>この値はアニメーションの終了時刻を現実世界の時刻で定義します。</dd>
 <dd>有効な wallclock-sync-value は <code>wallclock()</code> 関数に時刻を引数として渡したものです。時刻の構文は <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> で定義された構文に基づいたものです。</dd>
 <dt><code>indefinite</code></dt>
 <dd>アニメーションの終了は、 {{domxref("SVGAnimationElement.endElement()")}} メソッド呼び出しで指定されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Offset_example" name="Offset_example">オフセットの例</h3>

<pre class="brush: html">&lt;svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"&gt;

    &lt;!-- animated rectangles --&gt;
    &lt;rect x="10" y="35" height="15" width="0"&gt;
        &lt;animate attributeType="XML" attributeName="width" to="100"
                 begin="0s" end="8s"
                 fill="freeze" /&gt;
    &lt;/rect&gt;

    &lt;rect x="10" y="60" height="15" width="0"&gt;
        &lt;animate attributeType="XML" attributeName="width" to="75"
                 begin="0s" end="6s"
                 fill="freeze" /&gt;
    &lt;/rect&gt;

    &lt;rect x="10" y="85" height="15" width="0"&gt;
        &lt;animate attributeType="XML" attributeName="width" to="50"
                 begin="0s" end="4s"
                 fill="freeze" /&gt;
    &lt;/rect&gt;

    &lt;!-- grid --&gt;
    &lt;text x="10" y="20" text-anchor="middle"&gt;0s&lt;/text&gt;
    &lt;line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="35" y="20" text-anchor="middle"&gt;2s&lt;/text&gt;
    &lt;line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="60" y="20" text-anchor="middle"&gt;4s&lt;/text&gt;
    &lt;line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="85" y="20" text-anchor="middle"&gt;6s&lt;/text&gt;
    &lt;line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="110" y="20" text-anchor="middle"&gt;8s&lt;/text&gt;
    &lt;line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" /&gt;

    &lt;line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" /&gt;
    &lt;line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" /&gt;
&lt;/svg&gt;
</pre>

<p>{{EmbedLiveSample('Offset_example', '100%', 130)}}</p>

<h3 id="Event_example" name="Event_example">イベントの例</h3>

<pre class="brush: html">&lt;svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

    &lt;!-- animated rectangle --&gt;
    &lt;rect x="10" y="35" height="15" width="0"&gt;
        &lt;animate attributeType="XML" attributeName="width" from="0" to="100"
                 begin="0s" end="endButton.click" dur="8s"
                 repeatCount="indefinite" fill="freeze" /&gt;
    &lt;/rect&gt;

    &lt;!-- trigger --&gt;
    &lt;rect id="endButton" style="cursor:pointer;"
          x="19.5" y="62.5" rx="5" height="25" width="80"
          fill="#EFEFEF" stroke="black" stroke-width="1" /&gt;

    &lt;text x="60" y="80" text-anchor="middle"
          style="pointer-events:none;"&gt;Click me.&lt;/text&gt;

    &lt;!-- grid --&gt;
    &lt;text x="10" y="20" text-anchor="middle"&gt;0s&lt;/text&gt;
    &lt;line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="35" y="20" text-anchor="middle"&gt;2s&lt;/text&gt;
    &lt;line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="60" y="20" text-anchor="middle"&gt;4s&lt;/text&gt;
    &lt;line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="85" y="20" text-anchor="middle"&gt;6s&lt;/text&gt;
    &lt;line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="110" y="20" text-anchor="middle"&gt;8s&lt;/text&gt;
    &lt;line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" /&gt;

    &lt;line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" /&gt;
    &lt;line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" /&gt;
&lt;/svg&gt;
</pre>

<p>{{EmbedLiveSample('Event_example', '100%', 130)}}</p>

<h3 id="Accesskey_example" name="Accesskey_example">アクセスキーの例</h3>

<pre class="brush: html">&lt;svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

    &lt;!-- animated rectangles --&gt;
    &lt;rect x="10" y="35" height="15" width="0"&gt;
        &lt;animate attributeType="XML" attributeName="width" from="0" to="100"
                 begin="0s" end="accessKey(e)" dur="8s"
                 repeatCount="indefinite" fill="freeze" /&gt;
    &lt;/rect&gt;

    &lt;!-- trigger --&gt;
    &lt;text x="60" y="80" text-anchor="middle"
          style="pointer-events:none;"&gt;Hit the "s" key&lt;/text&gt;

    &lt;!-- grid --&gt;
    &lt;text x="10" y="20" text-anchor="middle"&gt;0s&lt;/text&gt;
    &lt;line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="35" y="20" text-anchor="middle"&gt;2s&lt;/text&gt;
    &lt;line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="60" y="20" text-anchor="middle"&gt;4s&lt;/text&gt;
    &lt;line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="85" y="20" text-anchor="middle"&gt;6s&lt;/text&gt;
    &lt;line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" /&gt;
    &lt;text x="110" y="20" text-anchor="middle"&gt;8s&lt;/text&gt;
    &lt;line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" /&gt;

    &lt;line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" /&gt;
    &lt;line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" /&gt;
&lt;/svg&gt;
</pre>

<p>{{EmbedLiveSample('Accesskey_example', '100%', 130)}}</p>

<p><em>この例は iFrame に埋め込まれています。キーイベントを有効化したい場合は、まずクリックする必要があります。</em></p>

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
   <td>{{SpecName("SVG Animations 2", "#EndAttribute", "end")}}</td>
   <td>{{Spec2("SVG Animations 2")}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "animate.html#EndAttribute", "end")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>
