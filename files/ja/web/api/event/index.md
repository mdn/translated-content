---
title: Event
slug: Web/API/Event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - UI
  - インターフェイス
translation_of: Web/API/Event
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>Event</strong></code> インターフェイスは、DOM で発生するイベントを表します。ユーザーによって発生するイベント (マウスやキーボードのイベント) もありますし、API によって発生するイベント (アニメーションの実行が完了したことを示すイベントや、動画再生が一時停止したイベントなど) もあります。さまざまな型のイベントがあり、一部のイベントは基底の <code>Event</code> インターフェイスを基にした他のインターフェイスを使用します。<code>Event</code> 自体は、すべてのイベントで共通のプロパティやメソッドを持ちます。</p>

<h2 id="Introduction" name="Introduction"><code>Event</code> を基にしたインターフェイス</h2>

<p>以下のリストは <code>Event</code> インターフェイスを基にしたインターフェイスの一覧であり、 MDN API リファレンスの各ドキュメントにリンクしています。すべてのイベントインターフェイスは、名称の末尾が "Event" であることに留意してください。</p>

<div class="index">
<ul>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>{{domxref("AudioProcessingEvent")}}</li>
 <li>{{domxref("BeforeInputEvent")}}</li>
 <li>{{domxref("BeforeUnloadEvent")}}</li>
 <li>{{domxref("BlobEvent")}}</li>
 <li>{{domxref("ClipboardEvent")}}</li>
 <li>{{domxref("CloseEvent")}}</li>
 <li>{{domxref("CompositionEvent")}}</li>
 <li>{{domxref("CSSFontFaceLoadEvent")}}</li>
 <li>{{domxref("CustomEvent")}}</li>
 <li>{{domxref("DeviceMotionEvent")}}</li>
 <li>{{domxref("DeviceOrientationEvent")}}</li>
 <li>{{domxref("DeviceProximityEvent")}}</li>
 <li>{{domxref("DOMTransactionEvent")}}</li>
 <li>{{domxref("DragEvent")}}</li>
 <li>{{domxref("EditingBeforeInputEvent")}}</li>
 <li>{{domxref("ErrorEvent")}}</li>
 <li>{{domxref("FetchEvent")}}</li>
 <li>{{domxref("FocusEvent")}}</li>
 <li>{{domxref("GamepadEvent")}}</li>
 <li>{{domxref("HashChangeEvent")}}</li>
 <li>{{domxref("IDBVersionChangeEvent")}}</li>
 <li>{{domxref("InputEvent")}}</li>
 <li>{{domxref("KeyboardEvent")}}</li>
 <li>{{domxref("MediaStreamEvent")}}</li>
 <li>{{domxref("MessageEvent")}}</li>
 <li>{{domxref("MouseEvent")}}</li>
 <li>{{domxref("MutationEvent")}}</li>
 <li>{{domxref("OfflineAudioCompletionEvent")}}</li>
 <li>{{domxref("PageTransitionEvent")}}</li>
 <li>{{domxref("PaymentRequestUpdateEvent")}}</li>
 <li>{{domxref("PointerEvent")}}</li>
 <li>{{domxref("PopStateEvent")}}</li>
 <li>{{domxref("ProgressEvent")}}</li>
 <li>{{domxref("RelatedEvent")}}</li>
 <li>{{domxref("RTCDataChannelEvent")}}</li>
 <li>{{domxref("RTCIdentityErrorEvent")}}</li>
 <li>{{domxref("RTCIdentityEvent")}}</li>
 <li>{{domxref("RTCPeerConnectionIceEvent")}}</li>
 <li>{{domxref("SensorEvent")}}</li>
 <li>{{domxref("StorageEvent")}}</li>
 <li>{{domxref("SVGEvent")}}</li>
 <li>{{domxref("SVGZoomEvent")}}</li>
 <li>{{domxref("TimeEvent")}}</li>
 <li>{{domxref("TouchEvent")}}</li>
 <li>{{domxref("TrackEvent")}}</li>
 <li>{{domxref("TransitionEvent")}}</li>
 <li>{{domxref("UIEvent")}}</li>
 <li>{{domxref("UserProximityEvent")}}</li>
 <li>{{domxref("WebGLContextEvent")}}</li>
 <li>{{domxref("WheelEvent")}}</li>
</ul>
</div>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("Event.Event", "Event()")}}</dt>
 <dd><code>Event</code> オブジェクトを生成して、呼び出し元に返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("Event.bubbles")}} {{readonlyinline}}</dt>
 <dd>イベントが DOM を通して浮上 (bubble up) するかを示す boolean 値です。</dd>
 <dt>{{domxref("Event.cancelBubble")}}</dt>
 <dd>{{domxref("Event.stopPropagation()")}} の歴史的な別名です。イベントハンドラーから戻る前に値 <code>true</code> を設定すると、イベントの伝播を抑制します。</dd>
 <dt>{{domxref("Event.cancelable")}} {{readonlyinline}}</dt>
 <dd>イベントがキャンセル可能かを示す boolean 値です。</dd>
 <dt>{{domxref("Event.composed")}} {{ReadOnlyInline}}</dt>
 <dd>shadow DOM と 通常の DOM の間の境界を越えてイベントが伝播できるかをを示す Boolean 値です。</dd>
 <dt>{{domxref("Event.currentTarget")}} {{readonlyinline}}</dt>
 <dd>イベントが現在登録されているターゲットへの参照。これは、現在イベントの送信先として予定されているオブジェクトです。これは<em>リターゲティング</em>によって、途中で変更できます。</dd>
 <dt>{{domxref("Event.deepPath")}} {{non-standard_inline}}</dt>
 <dd>イベントの伝播で通り抜けた DOM {{domxref("Node")}} の {{jsxref("Array")}} です。</dd>
 <dt>{{domxref("Event.defaultPrevented")}} {{readonlyinline}}</dt>
 <dd>{{domxref("event.preventDefault()")}} がイベントで呼ばれたかどうかを示します。</dd>
 <dt>{{domxref("Event.eventPhase")}} {{readonlyinline}}</dt>
 <dd>イベントの流れのうちどの段階が処理されているかを示します。</dd>
 <dt>{{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>イベントの明確な最初のターゲット (Mozilla 特有)。</dd>
 <dt>{{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>イベントの再ターゲット前の最初のターゲット (Mozilla 特有)。</dd>
 <dt>{{domxref("Event.returnValue")}}</dt>
 <dd>Internet Explorer によって導入された歴史的なプロパティで、既存のサイトが動作し続けることを保証するために結果的に DOM 仕様書に導入されたものです。理想的には、 {{domxref("Event.preventDefault()")}} および {{domxref("Event.defaultPrevented")}} を代わりに使用してみるべきですが、選択次第では <code>returnValue</code> を使用することができます。</dd>
 <dt>{{domxref("Event.srcElement")}} {{non-standard_inline}}</dt>
 <dd>{{domxref("Event.target")}} の、(古いバージョンの Microsoft Internet Explorer 由来の) 標準外の別名であり、ウェブの互換性の目的で一部の他のブラウザーでも対応が始められています。</dd>
 <dt>{{domxref("Event.target")}} {{readonlyinline}}</dt>
 <dd>イベントが最初に送出されたターゲットへの参照。</dd>
 <dt>{{domxref("Event.timeStamp")}} {{readonlyinline}}</dt>
 <dd>イベントが生成された時刻をミリ秒単位で示します。仕様書ではこの値をエポックから経過した時間としていますが、実際のブラウザの定義は異なります。また、値を {{domxref("DOMHighResTimeStamp")}} に変更する作業が進行中です。</dd>
 <dt>{{domxref("Event.type")}} {{readonlyinline}}</dt>
 <dd>イベントの名前 (大文字小文字を区別しません)。</dd>
 <dt>{{domxref("Event.isTrusted")}} {{readonlyinline}}</dt>
 <dd>イベントがブラウザーによって開始されたか (たとえばユーザークリックの後)、または、スクリプトによって開始されたか (<a href="/ja/docs/DOM/event.initEvent">event.initEvent</a> のようなイベントを作るメソッドの使用) どうかを示します。</dd>
</dl>

<h3 id="Obsolete_properties" name="Obsolete_properties">廃止されたプロパティ</h3>

<dl>
 <dt>{{domxref("Event.scoped")}} {{readonlyinline}} {{obsolete_inline}}</dt>
 <dd>{{jsxref("Boolean")}} で、指定されたイベントが標準 DOM の中のシャドウルートを通してバブルするかどうかを示します。このプロパティは {{domxref("Event.composed", "composed")}} に改名されました。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("Event.createEvent()")}} {{deprecated_inline}}</dt>
 <dd>
 <p>新しいイベントを作成し、これはその後で <code>initEvent()</code> メソッドを呼び出すことで初期化する必要があります。</p>
 </dd>
 <dt>{{domxref("Event.composedPath()")}}</dt>
 <dd>(リスナーが呼び出されるオブジェクトへの) イベントのパスを返します。これはシャドウルートが {{domxref("ShadowRoot.mode")}} が閉じた状態で作成されたシャドウツリーのノードを含みません。</dd>
</dl>

<dl>
 <dt>{{domxref("Event.initEvent()")}} {{deprecated_inline}}</dt>
 <dd>生成されたイベントの値を初期化します。イベントがすでにディスパッチされている場合は、何も行いません。</dd>
 <dt>{{domxref("Event.preventDefault()")}}</dt>
 <dd>イベントをキャンセルします (キャンセル可能な場合のみ)。</dd>
 <dt>{{domxref("Event.stopImmediatePropagation()")}}</dt>
 <dd>この特定のイベントのために、他のいかなるリスナーも呼び出されません。同じ要素に付けられたリスナーも、後で横断される（たとえばキャプチャー段階の) 要素に付けられたリスナーも呼び出されません。</dd>
 <dt>{{domxref("Event.stopPropagation()")}}</dt>
 <dd>これ以上イベントが 伝播 (propagation) するのを停止します。</dd>
</dl>

<h3 id="Obsolete_methods" name="Obsolete_methods">廃止されたメソッド</h3>

<dl>
 <dt>{{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}</dt>
 <dd>標準外です。{{domxref("Event.defaultPrevented")}} の値を返します。代わりに {{domxref("Event.defaultPrevented")}} を使用してください。</dd>
 <dt>{{domxref("Event.preventBubble()")}} {{non-standard_inline}} {{Obsolete_inline(24)}}</dt>
 <dd>イベントが 浮上 (bubble up) しないようにします。廃止されたので、代わりに {{domxref("event.stopPropagation")}} を使ってください。</dd>
 <dt>{{domxref("Event.preventCapture()")}} {{non-standard_inline}} {{Obsolete_inline(24)}}</dt>
 <dd>廃止されたので、{{domxref("event.stopPropagation")}} を使ってください。</dd>
</dl>

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
   <td>{{SpecName('DOM WHATWG', '#interface-event', 'Event')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>利用できるイベントのタイプ: <a href="/ja/docs/Web/Reference/Events">イベントリファレンス</a></li>
 <li><a href="/ja/docs/Web/API/Event/Comparison_of_Event_Targets">イベントターゲットの比較</a> (target vs currentTarget vs relatedTarget vs originalTarget)</li>
 <li><a href="/ja/docs/Web/Guide/DOM/Events/Creating_and_triggering_events">カスタムイベントの作成と発火</a></li>
 <li>Firefox アドオン開発者向け:
  <ul>
   <li><a href="/ja/docs/Listening_to_events_in_Firefox_extensions">Listening to events in Firefox extensions</a></li>
   <li><a href="/ja/docs/Listening_to_events_on_all_tabs">Listening to events on all tabs</a></li>
  </ul>
 </li>
</ul>
