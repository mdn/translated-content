---
title: 'MediaQueryList: change イベント'
slug: Web/API/MediaQueryList/change_event
tags:
  - API
  - CSSOM View
  - Event Handler
  - MediaQueryList
  - Property
  - Reference
  - onchange
  - イベントハンドラー
  - プロパティ
  - メディアクエリー
translation_of: Web/API/MediaQueryList/change_event
original_slug: Web/API/MediaQueryList/change_event
---
<p>{{APIRef("CSSOM")}}</p>
<p>{{DOMxRef("MediaQueryList")}} インターフェイスの <code><strong>change</strong></code> イベントは、メディアクエリーの状態が変化した時に発生します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>{{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドでイベント名を利用するか、イベントハンドラープロパティを設定します。</p>

<pre class="brush: js notranslate">
addEventListener('change', event => { });

onchange = event => { };
</pre>

<h2 id="Event_type" name="Event_type">イベントタイプ</h2>
<p>{{domxref("MediaQueryListEvent")}} です。 {{domxref("Event")}} から継承します。</p>

<h2 id="Event_properties" name="Event_properties">イベントプロパティ</h2>
<p><em><code>MediaQueryListEvent</code> インタフェースは、親インタフェースである {{domxref("Event")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{DOMxRef("MediaQueryList.matches", "MediaQueryListEvent.matches")}}{{ReadOnlyInline}}</dt>
 <dd>{{DOMxRef("Boolean")}}。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば <code>true</code> を返し、そうでなければ <code>false</code> を返します。</dd>
 <dt>{{DOMxRef("MediaQueryList.media", "MediaQueryListEvent.media")}}{{ReadOnlyInline}}</dt>
 <dd>{{DOMxRef("DOMString")}} で、シリアライズされたメディアクエリーを表します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var mql = window.matchMedia('(max-width: 600px)');

mql.onchange = (e) =&gt; {
    if (e.matches) {
      /* ビューポートが 600 ピクセル幅以下 */
    console.log('This is a narrow screen — less than 600px wide.')
  } else {
    /* ビューポートが 600 ピクセル幅より広い */
    console.log('This is a wide screen — more than 600px wide.')
  }
}
</pre>

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
   <td>{{SpecName("CSSOM View", "#dom-mediaquerylist-onchange", "onchange")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.MediaQueryList.change_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/CSS/Media_queries">メディアクエリー</a></li>
 <li><a href="/ja/docs/CSS/Using_media_queries_from_code">コードからのメディアクエリーの使用</a></li>
 <li>{{DOMxRef("window.matchMedia()")}}</li>
 <li>{{DOMxRef("MediaQueryList")}}</li>
 <li>{{DOMxRef("MediaQueryListEvent")}}</li>
</ul>
