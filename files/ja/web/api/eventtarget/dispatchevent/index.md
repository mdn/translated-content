---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - 要更新
translation_of: Web/API/EventTarget/dispatchEvent
---
<p>{{APIRef("DOM Events")}}</p>

<p>特定の {{domxref("EventTarget")}} に {{domxref("Event")}} をディスパッチし、影響する {{domxref("EventListener")}} を適切な順序で呼び出します。通常のイベント処理ルール（capturing フェーズと任意的な bubbling フェーズを含む）は <code>dispatchEvent()</code> で手動でディスパッチされたイベントにも適用されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>cancelled</em> = !<em>target</em>.dispatchEvent(<em>event</em>)
</pre>

<ul>
 <li><code>event</code> は、ディスパッチされる {{domxref("Event")}} オブジェクトです。</li>
 <li><code>target</code> は {{domxref("Event", "", "target")}} を初期化し、どのイベントリスナーを呼び出すかを決定するのに使われます。</li>
 <li>このイベントを処理した少なくともひとつのイベントハンドラが {{domxref("Event.preventDefault()")}} を呼び出した場合、戻り値は <code>false</code> となります。そうでなければ <code>true</code> となります。</li>
</ul>

<p>もしメソッド呼び出しの前にイベントが初期化されず、イベントのタイプが指定されなかった場合、あるいはイベントのタイプが <code>null</code> または空文字列だった場合、<code>dispatchEvent</code> は <code>UNSPECIFIED_EVENT_TYPE_ERR</code> を投げます。イベントハンドラから投げられた例外は、キャッチされなかった例外として報告されます。イベントハンドラは入れ子のコールスタック上で実行され、実行が完了するまで呼び出し元をブロックしますが、例外は呼び出し元まで伝播しません。</p>

<h2 id="Notes" name="Notes">注</h2>

<p><code>dispatchEvent</code> は 作成-初期化-ディスパッチ プロセスの最後のステップであり、イベントを実装系のイベントモデルにディスパッチするのに使われます。イベントは <a href="/ja/docs/Web/API/Document/createEvent">document.createEvent</a> メソッドを使って作成され、<a href="/ja/docs/Web/API/Event/initEvent">initEvent</a> メソッド、またはその他の、<a href="/ja/docs/Web/API/Event/initMouseEvent">initMouseEvent</a> や <a href="/ja/docs/Web/API/Event/initUIEvent">initUIEvent</a> といったより具体的な初期化メソッドを使って初期化されます。</p>

<p><a href="/ja/docs/Web/API/Event">Event オブジェクトのリファレンス</a>も参照してください。</p>

<h2 id="Example" name="Example">例</h2>

<p><a href="/ja/docs/Web/Guide/DOM/Events/Creating_and_triggering_events">Creating and triggering events</a> を参照。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-dispatchEvent">DOM Level 2 Events: dispatchEvent</a></li>
</ul>
