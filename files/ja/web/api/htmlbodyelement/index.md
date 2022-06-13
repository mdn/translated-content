---
title: HTMLBodyElement
slug: Web/API/HTMLBodyElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLBodyElement
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>HTMLBodyElement</code></strong> インターフェイスは、{{HtmlElement("body")}} 要素を操作するための特別なプロパティ（通常の {{ domxref("HTMLElement") }} インターフェイスから継承されたプロパティを超える）を提供します。</span></p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親の {{domxref("HTMLElement")}} および {{domxref("WindowEventHandlers")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("HTMLBodyElement.aLink")}} {{obsolete_inline}}</dt>
 <dd>アクティブなハイパーリンクの色を表す {{ domxref("DOMString") }} です。</dd>
 <dt>{{domxref("HTMLBodyElement.background")}} {{obsolete_inline}}</dt>
 <dd>背景画像リソースの場所の説明を表す {{ domxref("DOMString") }} です。 これは URI ではないことに注意してください。 ただし、一部のブラウザーの一部の古いバージョンはそれを想定しています。</dd>
 <dt>{{domxref("HTMLBodyElement.bgColor")}} {{obsolete_inline}}</dt>
 <dd>ドキュメントの背景色を表す {{ domxref("DOMString") }} です。</dd>
 <dt>{{domxref("HTMLBodyElement.link")}} {{obsolete_inline}}</dt>
 <dd>未訪問のリンクの色を表す {{ domxref("DOMString") }} です。</dd>
 <dt>{{domxref("HTMLBodyElement.text")}} {{obsolete_inline}}</dt>
 <dd>テキストの前景色を表す {{ domxref("DOMString") }} です。</dd>
 <dt>{{domxref("HTMLBodyElement.vLink")}} {{obsolete_inline}}</dt>
 <dd>訪問済みのリンクの色を表す {{ domxref("DOMString") }} です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>固有のメソッドはありません。 親の {{domxref("HTMLElement")}} および {{domxref("WindowEventHandlers")}} からメソッドを継承します。</em></p>

<h2 id="Event_handlers" name="Event_handlers">イベントハンドラ</h2>

<p><em>固有のイベントハンドラはありません。 親の {{domxref("HTMLElement")}} および {{domxref("WindowEventHandlers")}} からイベントハンドラを継承します。</em></p>

<dl>
 <dt>{{domxref("WindowEventHandlers.onafterprint")}}</dt>
 <dd>{{event("afterprint")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeprint")}}</dt>
 <dd>{{event("beforeprint")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeunload")}}</dt>
 <dd>{{event("beforeunload")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onhashchange")}}</dt>
 <dd>{{event("hashchange")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>{{event("languagechange")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onmessage")}}</dt>
 <dd>オブジェクトが {{event("message")}} イベントを受け取るたびに呼び出される {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onmessageerror")}}</dt>
 <dd>オブジェクトが {{event("messageerror")}} イベントを受け取るたびに呼び出される {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onoffline")}}</dt>
 <dd>{{event("offline")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.ononline")}}</dt>
 <dd>{{event("online")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onpagehide")}}</dt>
 <dd>{{event("pagehide")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onpageshow")}}</dt>
 <dd>{{event("pageshow")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onpopstate")}}</dt>
 <dd>{{event("popstate")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onrejectionhandled")}}</dt>
 <dd>{{event("rejectionhandled")}} イベントが発生したときに実行されるコードを表す {{event("Event_handlers", "event handler")}} です。 {{jsxref("Promise")}} が拒否され、拒否が処理されたことを示します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onresize")}}</dt>
 <dd>{{event("resize")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onstorage")}}</dt>
 <dd>{{event("storage")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
 <dt>{{domxref("WindowEventHandlers.onunhandledrejection")}}</dt>
 <dd>{{event("unhandledrejection")}} イベントが発生したときに実行されるコードを表す {{event("Event_handlers", "event handler")}} です。 {{jsxref("Promise")}} は拒否されたが拒否が処理されなかったことを示します。</dd>
 <dt>{{domxref("WindowEventHandlers.onunload")}}</dt>
 <dd>{{event("unload")}} イベントが発生したときに呼び出されるコードを表す {{event("Event_handlers", "event handler")}} です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#htmlbodyelement", "HTMLBodyElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>技術的には、イベント関連プロパティの <code>onafterprint</code>、<code>onbeforeprint</code>、<code>onbeforeunload</code>、<code>onblur</code>、<code>onerror</code>、<code>onfocus</code>、<code>onhashchange</code>、<code>onlanguagechange</code>、<code>onload</code>、<code>onmessage</code>、<code>onoffline</code>、<code>ononline</code>、<code>onpopstate</code>、<code>onresize</code>、<code>onstorage</code>、<code>onunload</code> は {{domxref("WindowEventHandlers")}} に移動されました。 <code>HTMLBodyElement</code> はこのインターフェイスを実装します。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "sections.html#the-body-element", "HTMLBodyElement")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "sections.html#the-body-element", "HTMLBodyElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>次のプロパティは廃止されました: <code>aLink</code>、<code>bgColor</code>、<code>background</code>、<code>link</code>、<code>text</code>、<code>vLink</code>。<br>
    次のプロパティが追加されました: <code>onafterprint</code>、<code>onbeforeprint</code>、<code>onbeforeunload</code>、<code>onblur</code>、<code>onerror</code>、<code>onfocus</code>、<code>onhashchange</code>、<code>onload</code>、<code>onmessage</code>、<code>onoffline</code>、<code>ononline</code>、<code>onpopstate</code>、<code>onresize</code>、<code>onstorage</code>、<code>onunload</code>。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-62018039', 'HTMLBodyElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} からの変更はありません。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-62018039', 'HTMLBodyElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLBodyElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このインターフェイスを実装する HTML 要素: {{ HTMLElement("body") }}</li>
 <li>{{domxref("WindowEventHandlers")}}</li>
</ul>
