---
title: GlobalEventHandlers
slug: Web/API/GlobalEventHandlers
tags:
  - API
  - DOM
  - GlobalEventHandlers
  - HTML DOM
  - Mixin
  - Reference
  - events
  - ミックスイン
translation_of: Web/API/GlobalEventHandlers
---
<div>{{ApiRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>GlobalEventHandlers</code></strong> ミックスインは、 {{domxref("HTMLElement")}} や {{domxref("Document")}} 、 {{domxref("Window")}} といったインターフェイスに共通のイベントハンドラーを示します。</span>もちろん、これらのインターフェイスには、以下のものに加えて他のイベントハンドラーがある場合もあります。</p>

<div class="note">
<p><strong>メモ</strong>: <code>GlobalEventHandlers</code> はミックスインであり、インターフェイスではありません。 <code>GlobalEventHandlers</code> 型のオブジェクトは作成できません。</p>
</div>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスには、以下のイベントハンドラー以外のプロパティはありません。</em></p>

<h3 id="Event_handlers" name="Event_handlers">イベントハンドラー</h3>

<p>以下のイベントハンドラーは {{domxref("GlobalEventHandlers")}} ミックスインで定義されており、 {{domxref("HTMLElement")}}, {{domxref("Document")}}, {{domxref("Window")}}、さらに Web Worker 向けには {{domxref("WorkerGlobalScope")}} が実装しています。</p>

<div id="Properties">
<dl>
 <dt>{{domxref("GlobalEventHandlers.onabort")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{domxref("HTMLMediaElement/abort_event", "abort")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onanimationcancel")}} {{Non-standard_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>がキャンセルされたことを示す {{event("animationcancel")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.onanimationend")}} {{Non-standard_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>の再生が停止したことを示す、 {{event("animationend")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.onanimationiteration")}} {{Non-standard_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>のアニメーションシーケンスが新たなな繰り返しに入ったことを示す、{{event("animationiteration")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.onanimationstart")}} {{Non-standard_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Animations">CSS アニメーション</a>の再生が開始したことを示す、{{event("animationstart")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.onauxclick")}} {{Non-standard_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、入力デバイスで非プライマリーボタン (例えばマウスの中ボタン) が押下されたことを示す、 {{event("auxclick")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.onblur")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("blur")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onerror")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("error")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onfocus")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("focus")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oncancel")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("cancel")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oncanplay")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("canplay")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oncanplaythrough")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("canplaythrough")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onchange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("change")}} イベントが発生した時にときび出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onclick")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("click")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onclose")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("close")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oncontextmenu")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("contextmenu")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oncuechange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("cuechange")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondblclick")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dblclick")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondrag")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("drag")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragend")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragend")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragenter")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragenter")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragexit")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragexit")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragleave")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragleave")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragover")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragover")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondragstart")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("dragstart")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondrop")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("drop")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ondurationchange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("durationchange")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onemptied")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("emptied")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onended")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("ended")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onformdata")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、フォームデータが構築されたことを表す入力リストの後で発生する {{event("formdata")}} イベントの処理をします。</dd>
 <dt>{{domxref("GlobalEventHandlers.ongotpointercapture")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("gotpointercapture")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oninput")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("input")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.oninvalid")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("invalid")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onkeydown")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("keydown")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onkeypress")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("keypress")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onkeyup")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("keyup")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onload")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("load")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onloadeddata")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("loadeddata")}} イベントが発生したときに呼び出すコードをします。</dd>
 <dt>{{domxref("GlobalEventHandlers.onloadedmetadata")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("loadedmetadata")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onloadend")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("loadend")}} イベントが発生した (リソースの読み込みの進行が停止した) ときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onloadstart")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("loadstart")}} イベントが発生した (リソースの読み込みを開始した) ときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onlostpointercapture")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("lostpointercapture")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmousedown")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mousedown")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmouseenter")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mouseenter")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmouseleave")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mouseleave")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmousemove")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mousemove")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmouseout")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mouseout")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmouseover")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mouseover")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmouseup")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mouseup")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onmousewheel")}} {{Non-standard_inline}} {{Deprecated_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("mousewheel")}} イベントが発生したときに呼び出すコードを表します。廃止予定です。 代わりに <code>onwheel</code> を使ってください。</dd>
 <dt>{{ domxref("GlobalEventHandlers.onwheel") }}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("wheel")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpause")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pause")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onplay")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("play")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onplaying")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("playing")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerdown")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerdown")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointermove")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointermove")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerup")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerup")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointercancel")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointercancel")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerover")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerover")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerout")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerout")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerenter")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerenter")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerleave")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerleave")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerlockchange")}} {{experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerlockchange")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onpointerlockerror")}} {{experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("pointerlockerror")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onprogress")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("progress")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onratechange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("ratechange")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onreset")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("reset")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onresize")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("resize")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onscroll")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("scroll")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onseeked")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("seeked")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onseeking")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("seeking")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onselect")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("select")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onselectstart")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("selectstart")}} イベントが発生した (ユーザーがウェブページで新たにテキスト選択を開始した) ときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onselectionchange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("selectionchange")}} イベントが発生した (ウェブページで選択されたテキストが替わった) ときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onshow")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("show")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onsort")}} {{experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("sort")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onstalled")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("stalled")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onsubmit")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("submit")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onsuspend")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("suspend")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontimeupdate")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("timeupdate")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onvolumechange")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("volumechange")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontouchcancel")}} {{Non-standard_inline}} {{Experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("touchcancel")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontouchend")}} {{Non-standard_inline}} {{Experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("touchend")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontouchmove")}} {{Non-standard_inline}} {{Experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("touchmove")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontouchstart")}} {{Non-standard_inline}} {{Experimental_inline}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("touchstart")}} イベントが発生したときに呼び出すコードを表します。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontransitioncancel")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>がキャンセルされたことを示す、 {{event("transitioncancel")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontransitionend")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>の再生が停止したことを示す、{{event("transitionend")}} イベントが送信されたときに呼び出されます。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontransitionrun")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("transitionrun")}} イベントが送信されたときに呼び出され、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>が実行されていることを示しますが、開始されているとは限りません。</dd>
 <dt>{{domxref("GlobalEventHandlers.ontransitionstart")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("transitionstart")}} イベントが送信されたときに呼び出され、 <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>が遷移を開始したことを示します。</dd>
 <dt>{{domxref("GlobalEventHandlers.onwaiting")}}</dt>
 <dd>{{event("Event_handlers", "event handler")}} で、 {{event("waiting")}} イベントが発生したときに呼び出すコードを表します。</dd>
</dl>
</div>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスではメソッドを定義していません。</em></p>

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
   <td>{{SpecName("Selection API",'', 'Extension to GlobalEventHandlers')}}</td>
   <td>{{Spec2('Selection API')}}</td>
   <td><code>onselectionchange</code> を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Lock', '#extensions-to-the-document-interface', 'Extension of Document')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
   <td>{{domxref("Document")}} で <code>onpointerlockchange</code>、<code>onpointerlockerror</code> を追加。実験的に <code>GlobalEventHandlers</code> で実装されています。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#globaleventhandlers', 'GlobalEventHandlers')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>最新のスナップショットである {{SpecName("HTML5.1")}} から変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', '#globaleventhandlers', 'GlobalEventHandlers')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>{{SpecName("HTML WHATWG")}} のスナップショット。{{SpecName("HTML5 W3C")}} のスナップショットに <code>onsort</code> を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "#globaleventhandlers", "GlobalEventHandlers")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>{{SpecName("HTML WHATWG")}} のスナップショット。<code>GlobalEventHandlers</code> を作成 (以前はプロパティが実装対象に存在していました)。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.GlobalEventHandlers")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element")}}</li>
 <li>{{event("Event_handlers", "event handler")}}</li>
 <li>{{domxref("Event")}}</li>
</ul>
