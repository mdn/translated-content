---
title: 'Element: click イベント'
slug: Web/API/Element/click_event
tags:
  - API
  - DOM
  - Element
  - Event
  - Interface
  - MouseEvent
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Reference
  - UI
  - click
  - events
  - mouse
  - イベント
  - インターフェイス
  - マウス
translation_of: Web/API/Element/click_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code><strong>click</strong></code> イベントは、ポインターが要素の中にある状態で、ポインティングデバイスのボタン (マウスの第一ボタンなど) が押されて離されたときに要素に送られます。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th>バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th>キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th>インターフェイス</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th>イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onclick", "onclick")}}</td>
  </tr>
 </tbody>
</table>

<p>ボタンが要素上で押された後、離される前に要素の外側に移動した場合は、イベントは両方の要素を含む最も近い祖先要素で発生します。</p>

<p><code>click</code> は {{event("mousedown")}} および {{event("mouseup")}} イベントの後に、順番通りに発生します。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p><code>click</code> のイベントハンドラーに渡される {{domxref("MouseEvent")}} オブジェクトの {{domxref("Event.detail", "detail")}} プロパティには、 {{domxref("Event.target", "target")}} がクリックされた回数が設定されています。言い換えれば、ダブルクリックの場合は <code>detail</code> が 2 になり、トリプルクリックの場合は 3 になります。このカウンターは、クリックが発生しない短い間隔の後にリセットされます。この間隔の長さの詳細は、ブラウザーやプラットフォームによって異なります。この間隔は、ユーザーの設定によっても影響を受ける可能性があります。例えば、アクセシビリティのオプションは、適応性のあるインターフェイスで複数回のクリックを簡単に実行できるように、この間隔を延長することができます。</p>

<h3 id="Internet_Explorer">Internet Explorer</h3>

<p>Internet Explorer 8 と 9 は、 {{cssxref("background-color")}} の計算値が <a href="/ja/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a> である要素が他の要素の上に重なった時、 <code>click</code> イベントを受け取らないというバグに悩まされていました。すべての <code>click</code> イベントはその下にある要素で発生していました。<a href="http://jsfiddle.net/YUKma/show/">このライブサンプル</a>を参照してください。</p>

<p>このバグの知られている回避方法は以下の通りです。</p>

<ul>
 <li>IE9 のみの場合:
  <ul>
   <li>{{cssxref("background-color")}}<code>: <a href="/ja/docs/Web/CSS/color_value#rgba()">rgba</a>(0,0,0,0)</code> に設定する</li>
   <li>{{cssxref("opacity")}}<code>: 0</code> に設定し、 {{cssxref("background-color")}} を明示的に <a href="/ja/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a> 以外に設定する</li>
  </ul>
 </li>
 <li>IE8 および IE9 の場合: <code><a href="http://msdn.microsoft.com/ja/library/ms532847(v=vs.85).aspx">filter</a>: alpha(opacity=0);</code> に設定し、 {{cssxref("background-color")}} を明示的に <a href="/ja/docs/Web/CSS/color_value#transparent_keyword"><code>transparent</code></a> 以外に設定する</li>
</ul>

<h3 id="Safari_Mobile">Safari Mobile</h3>

<p>Safari Mobile 7.0 以降では (おそらくそれ以前のバージョンも) <a href="https://bugs.webkit.org/show_bug.cgi?id=153887">悩ましいバグ</a>があり、通常は対話型ではない要素 ({{HTMLElement("div")}} など) で、イベントリスナーが要素自身に直接設定されていない場合 (つまり、 <a href="http://davidwalsh.name/event-delegate">イベントの委譲</a>が使用されている場合) に <code>click</code> イベントが発生しません。デモは<a href="http://jsfiddle.net/cvrhulu/k9t0sdnf/show/">このライブ例</a>を参照してください。 <a href="https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6">Safari's docs on making elements clickable</a> および <a href="https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7">definition of "clickable element"</a> も参照してください。</p>

<p>このバグの知られている回避策は以下のとおりです。</p>

<ul>
 <li>要素およびそのすべての祖先に {{cssxref("cursor")}}<code>: pointer;</code> を設定する。</li>
 <li>要素または {{HTMLElement("body")}} 以外の祖先のいずれかに、ダミーの <code>onclick="void(0)"</code> 属性を設定する。</li>
 <li>通常は対話型になる要素 (例えば {{HTMLElement("a")}}) を、通常は対話型でない要素 (例えば {{HTMLElement("div")}}) の代わりに使用する。</li>
 <li><code>click</code> <a href="https://davidwalsh.name/event-delegate">イベントの委譲</a>の使用をやめる。</li>
</ul>

<p>Safari Mobile は以下の要素を通常対話型であるとみなします (したがって、このバグの影響を受けません)。</p>

<ul>
 <li>{{HTMLElement("a")}} (ただし <code>href</code> があるものに限る)</li>
 <li>{{HTMLElement("area")}} (ただし <code>href</code> があるものに限る)</li>
 <li>{{HTMLElement("button")}}</li>
 <li>{{HTMLElement("img")}}</li>
 <li>{{HTMLElement("input")}}</li>
 <li>{{HTMLElement("label")}} (ただしフォームコントロールに関連付けられているものに限る)</li>
 <li>{{HTMLElement("textarea")}}</li>
 <li><em>このリストは不完全です。試験や調査を行って展開することで MDN にご協力ください。</em></li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>この例は {{HtmlElement("button")}} を連続してクリックした数を表示します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;button&gt;Click&lt;/button&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">const button = document.querySelector('button');

button.addEventListener('click', event =&gt; {
  button.innerHTML = `Click count: ${event.detail}`;
});</pre>

<h3 id="Result" name="Result">結果</h3>

<p>高速にするために、繰り返してボタンをクリックするとクリックカウントを増加させます。クリック間に休みが入った場合は、カウントがリセットされます。</p>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-click')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-click', 'click')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events', '#Events-eventgroupings-mouseevents-h3', 'click')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.click_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベントの紹介</a></li>
 <li>{{event("auxclick")}}</li>
 <li>{{event("contextmenu")}}</li>
 <li>{{event("dblclick")}}</li>
 <li>{{event("mousedown")}}</li>
 <li>{{event("mouseup")}}</li>
 <li>{{event("pointerdown")}}</li>
 <li>{{event("pointerup")}}</li>
</ul>
