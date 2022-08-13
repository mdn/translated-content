---
title: HTML ドラッグ＆ドロップ API
slug: Web/API/HTML_Drag_and_Drop_API
tags:
  - Advanced
  - Guide
  - HTML5
  - Overview
  - XUL
  - drag and drop
  - events
  - ドラッグ＆ドロップ
translation_of: Web/API/HTML_Drag_and_Drop_API
---
<div>{{DefaultAPISidebar("HTML Drag and Drop API")}}</div>

<p><span class="seoSummary"><strong>HTML ドラッグ &amp; ドロップ</strong>インターフェイスにより、アプリケーションはブラウザーでドラッグ＆ドロップ機能を使用することができます。</span>ユーザーはマウスで<em>ドラッグ可能</em>な要素を選択し、その要素を<em>ドロップ可能</em>な要素へドラッグし、マウスボタンを離すことでドロップすることができます。ドラッグ操作の間、<em>ドラッグ可能な</em>要素の半透明の表示がマウスポインターに続きます。</p>

<p>ウェブサイト、拡張機能、XUL アプリケーションでは、<em>ドラッグ可能</em>にできる要素の種類、<em>ドラッグ可能な</em>要素が生成するフィードバックの種類、および<em>ドロップ可能な</em>要素をカスタマイズできます。</p>

<p>この HTML ドラッグ＆ドロップの概要では、インターフェイスの説明、アプリケーションにドラッグ＆ドロップのサポートを追加するための基本的なステップ、およびインターフェイスの相互運用性の要約が含まれています。</p>

<h2 id="Drag_Events" name="Drag_Events">ドラッグイベント</h2>

<p>HTML ドラッグ &amp; ドロップ では {{domxref("Event","DOM イベントモデル")}} と {{domxref("MouseEvent","マウスイベント")}} を継承した <em>{{domxref("DragEvent","ドラッグイベント")}}</em> を使います。典型的な<em>ドラッグ操作は</em> ユーザーが<em>ドラッグ可能な</em>要素を選択したときと、<em>ドロップ可能な</em>要素に要素をドラッグしたとき、ドラッグ可能な要素を離したときに開始します。</p>

<p>ドラッグ操作のあいだ、いくつかのイベント種類が発生し、そのうちいくつかは {{domxref('Document/drag_event', 'drag')}} や {{domxref('Document/dragover_event', 'dragover')}} イベントのように、複数発生することもあります。</p>

<p>おのおのの <a href="/ja/docs/Web/API/DragEvent#Event_types">ドラッグイベントタイプ</a>には関連した<a href="/ja/docs/Web/API/DragEvent#GlobalEventHandlers">グローバルイベントハンドラー</a>があります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">イベント</th>
   <th scope="col">On イベントハンドラー</th>
   <th scope="col">発生する条件…</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{domxref('Document/drag_event', 'drag')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondrag','ondrag')}}</td>
   <td>…ドラッグ項目 (要素や選択テキスト) がドラッグされた場合</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragend_event', 'dragend')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragend','ondragend')}}</td>
   <td>…ドラッグ操作の終了 (マウスボタンを離したり、Esc キーを押したりした場合。詳しくは<a href="/ja/docs/DragDrop/Drag_Operations#dragend" title="DragDrop/Drag Operations#dragend">ドラッグの終了</a>を参照してください。)</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragenter_event', 'dragenter')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragenter','ondragenter')}}</td>
   <td>…ドラッグ項目が有効なドロップ対象に入った場合(<a href="/ja/docs/DragDrop/Drag_Operations#droptargets" title="Specifying Drop Targets">Specifying Drop Targets</a> を見てください)</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragexit_event', 'dragexit')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}</td>
   <td>…要素がドラッグ操作の選択対象でなくなった場合</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragleave_event', 'dragleave')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragleave','ondragleave')}}</td>
   <td>…ドラッグ項目が有効なドロップ対象を離れた場合</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragover_event', 'dragover')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragover','ondragover')}}</td>
   <td>…ドラッグ項目が有効なドロップ対象にドラッグされた場合、数百ミリ秒ごとに</td>
  </tr>
  <tr>
   <td>{{domxref('Document/dragstart_event', 'dragstart')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragstart','ondragstart')}}</td>
   <td>…ユーザーが項目をドラッグ開始した場合(<a href="/ja/docs/DragDrop/Drag_Operations#dragstart" title="Starting a Drag Operation">ドラッグ操作の開始</a> を見てください)</td>
  </tr>
  <tr>
   <td>{{domxref('Document/drop_event', 'drop')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondrop','ondrop')}}</td>
   <td>…項目が有効なドロップ対象にドロップされた場合(<a href="/ja/docs/DragDrop/Drag_Operations#drop" title="Performing a Drop">ドロップの実行</a> を見てください)</td>
  </tr>
 </tbody>
</table>

<p class="note"><strong>メモ:</strong> <code>dragstart</code> と <code>dragend</code> イベントは、どちらも OS からブラウザーにファイルをドラッグしたときには発生しません。</p>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<p>HTML ドラッグとドロップのインターフェイスは {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} {{domxref("DataTransferItemList")}} です。</p>

<p>{{domxref("DragEvent")}} インターフェイスには、コンストラクターと {{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティ一つがあり、これは {{domxref("DataTransfer")}} オブジェクトです。</p>

<p>{{domxref("DataTransfer")}} オブジェクトはドラッグイベントの状態、例えば (<code>copy</code> や <code>move</code> のような) ドラッグの種類や、ドラッグのデータ (1 つ以上の項目)や、各<em>ドラッグ項目</em>の MIME タイプのようなものを含んでいます。{{domxref("DataTransfer")}} オブジェクトにはドラッグデータを追加・削除するメソッドもあります。</p>

<p>{{domxref("DragEvent")}} と {{domxref("DataTransfer")}} インターフェイスは、アプリケーションに HTML ドラッグ &amp; ドロップ機能を追加するために必要な唯一のものです。 (Firefox では <a href="#gecko_specific_interfaces">Gecko 独自拡張</a> を {{domxref("DataTransfer")}} オブジェクトへ施していますが、この拡張機能は Firefox でのみ動作します。)</p>

<p>それぞれの {{domxref("DataTransfer")}} オブジェクトには {{domxref("DataTransfer.items","items")}} プロパティがあり、これは {{domxref("DataTransferItem")}} オブジェクトの {{domxref("DataTransferItemList","list")}} です。 {{domxref("DataTransferItem")}} オブジェクトは単一の<em>ドラッグ項目</em>を表し、それぞれが {{domxref("DataTransferItem.kind","kind")}} プロパティ (<code>string</code> か <code>file</code> の値を取る) と項目の MIME タイプを表す {{domxref("DataTransferItem.type","type")}} プロパティを持ちます。{{domxref("DataTransferItem")}} オブジェクトにはドラッグ項目のデータを取得するメソッドもあります。</p>

<p>{{domxref("DataTransferItemList")}} オブジェクトは {{domxref("DataTransferItem")}} オブジェクトのリストです。このリストオブジェクトはリストにドラッグ項目を追加したり、リストからドラッグ項目を削除したり、ドラッグ項目のリストをクリアするメソッドを持ちます。</p>

<p>{{domxref("DataTransfer")}} と{{domxref("DataTransferItem")}} インターフェイスの主な違いは、前者が同期の {{domxref("DataTransfer.getData","getData()")}} メソッドを使ってドラッグ項目のデータにアクセスするのに対し、後者は代わりに非同期の{{domxref("DataTransferItem.getAsString","getAsString()")}} メソッドを使うことです。.</p>

<p class="note"><strong>メモ:</strong> {{domxref("DragEvent")}} と {{domxref("DataTransfer")}} はデスクトップブラウザーでは広く対応していますが、 {{domxref("DataTransferItem")}} と {{domxref("DataTransferItemList")}} インターフェイスのブラウザーの対応は限られています。相互運用性について、より詳しくは<a href="#interoperability">相互運用性</a>を見てください。</p>

<h3 id="Gecko-specific_interfaces" name="Gecko-specific_interfaces">Gecko-特有のインターフェイス</h3>

<p>Mozilla と Firefox は、標準のドラッグ＆ドロップのモデルに含まれていないいくつかの機能に対応しています。複数の項目や、文字列以外のデータ (ファイルなど) をドラッグしたりする補助になる<em>便利な関数</em>があります。詳しくは<a href="/ja/docs/DragDrop/Dragging_and_Dropping_Multiple_Items" title="DragDrop/Dragging and Dropping Multiple Items">複数の項目のドラッグ＆ドロップ</a>を参照してください。加えて、{{domxref("DataTransfer")}} リファレンスページを見るとすべての <a href="/ja/docs/Web/API/DataTransfer#Gecko_properties">Gecko 固有プロパティ</a>と <a href="/ja/docs/Web/API/DataTransfer#Gecko_methods">Gecko 固有メソッド</a>がわかります。</p>

<h2 id="The_basics" name="The_basics">基本</h2>

<p>この節は、アプリにドラッグ&amp;ドロップ機能を追加する基本手順のまとめです。</p>

<h3 id="Identify_what_is_draggable" name="Identify_what_is_draggable"><em>ドラッグ可能なものを</em>特定する</h3>

<p>要素を<em>ドラッグ可能</em>とするには、以下のコードのように {{htmlattrxref("draggable")}} 属性と {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} のグローバルイベントハンドラを追加することが求められます:</p>

<pre class="brush: html">&lt;script&gt;
  function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener('DOMContentLoaded', () =&gt; {
    // Get the element by id
    const element = document.getElementById("p1");
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstart_handler);
  });
&lt;/script&gt;

&lt;p id="p1" draggable="true"&gt;この要素はドラッグできます。&lt;/p&gt;</pre>

<p>詳しくは、以下の記事を参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/HTML/Global_attributes/draggable" title="draggable global attribute">draggable 属性リファレンス</a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/Drag_operations#draggableattribute">ドラッグ操作ガイド</a></li>
</ul>

<h3 id="Define_the_drags_data" name="Define_the_drags_data">ドラッグするデータの定義</h3>

<p>アプリケーションは、ドラッグ操作にいくつでもデータ項目を含めることが自由にできます。各データ項目は特定 <code>type</code> の {{domxref("DOMString","string")}} —よくあるのは <code>text/html</code> のような MIME タイプです。</p>

<p>各{{domxref("DragEvent","ドラッグイベント")}}はイベントのデータを格納する{{domxref("DragEvent.dataTransfer","dataTransfer")}} プロパティを持ちます。このプロパティ (これは {{domxref("DataTransfer")}} オブジェクトです) にはドラッグデータを管理するメソッドもあります。{{domxref("DataTransfer.setData","setData()")}} メソッドはドラッグデータに項目を追加するのに使用され、その例は下記の通りです。</p>

<pre class="brush: js">function dragstart_handler(ev) {
  // 異なる種類のドラッグデータを追加する
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
}
</pre>

<ul>
 <li>ドラッグ＆ドロップで使用される一般的なデータ型の一覧 (テキスト、HTML、リンク、ファイルなど) については、<a href="/ja/docs/DragDrop/Recommended_Drag_Types">推奨されるドラッグ型</a>をご覧ください。</li>
 <li>ドラッグデータについて詳しくは、<a href="/ja/docs/DragDrop/Drag_Operations#dragdata">ドラッグデータ</a>をご覧ください。</li>
</ul>

<h3 id="Define_the_drag_image" name="Define_the_drag_image">ドラッグ画像の定義</h3>

<p>既定では、ブラウザーはドラッグ操作中にポインターの横に現れる画像を提供します。しかし以下の例のように、アプリケーションは {{domxref("DataTransfer.setDragImage","setDragImage()")}} メソッドでカスタム画像を定義できます。</p>

<pre class="brush: js">function dragstart_handler(ev) {
  // 画像を作成し、ドラッグ画像として使う。
  // 注: "example.gif" は実際の画像の URL に変更してください。
  // でないと、既定ののドラッグ画像が使用されます。
  let img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}
</pre>

<p>ドラッグフィードバック画像について詳しくは、下記を参照してください。</p>

<ul>
 <li><a href="/ja/docs/DragDrop/Drag_Operations#dragfeedback">ドラッグフィードバック画像の設定</a>


 </li>
</ul>

<h3 id="Define_the_drag_effect" name="Define_the_drag_effect">ドラッグ<em>効果</em>の定義</h3>

<p>{{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティはドラッグ&amp;ドロップ操作中のユーザーへのフィードバックを管理するのに使います。よくあるのはドラッグ中にどのカーソルをブラウザーが表示するかに影響します。例えば、ユーザーがドロップターゲット上に持ってきたとき、ブラウザーのカーソルは起こる動作の種類を示すことがあります。</p>

<p>3通りの効果が発生する可能性があります。</p>

<ol>
 <li><strong><code>copy</code></strong> はドラッグしたデータが現在の場所からドロップされる場所にコピーされることを示します。</li>
 <li><strong><code>move</code></strong> はドラッグデータが現在の場所からドロップされる場所に移動されることを示します。</li>
 <li><strong><code>link</code></strong> はドラッグデータが元からドロップ先にある種の関連や接続が作成されることを示します。</li>
</ol>

<p>ドラッグ操作の間、ある効果はある場所にだけ許可されることを示すために、ドラッグ効果は変更される場合があります。</p>

<p>下記の例はこのプロパティの使い方を示します。</p>

<pre class="brush: js">function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
</pre>

<p>詳しくは以下を参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Drag_operations#drageffects" title="Drag Effects">Drag の効果</a>


 </li>
</ul>

<h3 id="Define_a_drop_zone" name="Define_a_drop_zone"><em>ドロップゾーン</em>の定義</h3>

<p>既定では、ブラウザーはほとんどの HTML 要素に何かがドロップされたとき、あらゆることが発生するのを防いでいます。この動作を変更して要素を<em>ドロップゾーン</em>や<em>ドロップ可能</em>にするには、要素は{{domxref("GlobalEventHandlers.ondragover","ondragover")}} と {{domxref("GlobalEventHandlers.ondrop","ondrop")}} イベントハンドラー属性を持たねばなりません。</p>

<p>以下の例は、この属性の使い方と、各属性の基本的なイベントハンドラーを示しています。</p>

<pre class="brush: html">&lt;script&gt;
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // 移動された要素のidを取得して、その要素をtargetのDOMに追加する
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;

&lt;p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"&gt;Drop Zone&lt;/p&gt;
</pre>

<p>各ハンドラーが {{domxref("Event.preventDefault","preventDefault()")}} を呼んで、このイベントが (<a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>や<a href="/ja/docs/Web/API/Pointer_events">ポインターイベント</a>などに) 追加で処理されることを防いでいるのに注意してください</p>

<p>詳しくは、以下を参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Drag_operations#droptargets">ドロップ先の指定</a></li>
</ul>

<h3 id="ドロップ効果を扱う">ドロップ<em>効果</em>を扱う</h3>

<p>{{domxref("Document/drop_event", "drop")}} イベントのハンドラーでは、アプリケーション固有の方法でドラッグデータを自由に処理できます。</p>

<p>ふつう、アプリケーションは{{domxref("DataTransfer.getData","getData()")}} メソッドでドラッグ項目を取得して、そのようよ処理します。加えて、アプリケーションのセマンティクスは {{domxref("DataTransfer.dropEffect","dropEffect")}} の値や修飾キーの状態により異なります。</p>

<p>下記の例では、ドラッグデータからソース要素の <code>id</code> を取得し、 <code>id</code> を使ってソース要素をドロップ要素に移動するドロップハンドラのを示しています。</p>

<pre class="brush: html">&lt;script&gt;
function dragstart_handler(ev) {
 // 対象となる要素の id を DataTransfer オブジェクトに追加する
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // 移動された要素の id を取得して、その要素を target の DOM に追加する
 const data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;

&lt;p id="p1" draggable="true" ondragstart="dragstart_handler(event)"&gt;This element is draggable.&lt;/p&gt;
&lt;div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"&gt;Drop Zone&lt;/div&gt;
</pre>

<p>詳しくは、以下を参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Drag_operations#drop">ドロップの実行</a></li>
</ul>

<h3 id="Drag_end" name="Drag_end">ドラッグの終了</h3>

<p>ドラッグ操作の終わりに、 {{domxref("Document/dragent_event", "dragend")}} イベントが<em>ドラッグ元の</em>要素で発生します。 — ドラッグが開始された対象の要素です。</p>

<p>このイベントはドラッグの完了とキャンセルのどちらでも発生します。 {{domxref("Document/dragent_event", "dragend")}} イベントハンドラーは {{domxref("DataTransfer.dropEffect","dropEffect")}} プロパティの値をチェックしてドラッグ操作が成功したか否かを決定できます。</p>

<p>ドラッグ操作の終了を扱うことの詳細は、以下を参照してください。</p>

<ul>
 <li><a href="/ja/docs/DragDrop/Drag_Operations#dragend" title="Finishing a Drag">ドラッグの終了</a></li>
</ul>

<h2 id="Interoperability" name="Interoperability">相互運用性</h2>

<p><a href="/ja/docs/Web/API/DataTransferItem#Browser_compatibility">DataTransferItem インターフェイスのブラウザー互換性テーブル</a>に見られるように、ドラッグ&amp;ドロップの相互接続性はデスクトップブラウザーでは相対的に広いです(サポートの少ない{{domxref("DataTransferItem")}} と{{domxref("DataTransferItemList")}} インターフェイスを除いて)。このデータはモバイルブラウザーでのドラッグ&amp;ドロップサポートはとても低いことも示しています。</p>

<h2 id="Examples_and_demos" name="Examples_and_demos">例とデモ</h2>

<ul>
 <li><a href="https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html">Copying and moving elements with the <code>DataTransfer</code> interface</a></li>
 <li><a href="http://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html">Copying and moving elements with the <code>DataTransferListItem</code> interface</a></li>
 <li>ファイルのドラッグ&amp;ドロップ (Firefox のみ): <a class="external" href="http://jsfiddle.net/9C2EF/">http://jsfiddle.net/9C2EF/</a></li>
 <li>ファイルのドラッグ&amp;ドロップ (全ブラウザー): <a class="external" href="https://jsbin.com/hiqasek/edit?html,js,output">https://jsbin.com/hiqasek/</a></li>
 <li>
  <p>Drag and Drop API を使った駐車場プロジェクト: <a href="https://park.glitch.me/">https://park.glitch.me/</a> (<a href="https://glitch.com/edit/#!/park">ここで</a>編集できます)</p>
 </li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="internal" href="/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations" title="Drag Operations">ドラッグ操作</a></li>
 <li><a class="internal" href="/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items" title="Dragging and Dropping Multiple Items">複数アイテムのドラッグとドロップ</a></li>
 <li><a class="internal" href="/ja/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types" title="Recommended Drag Types">推奨されるドラッグ型</a></li>
 <li><a href="https://html.spec.whatwg.org/multipage/interaction.html#dnd" title="Drag and Drop Standard">HTML5 Living Standard: Drag and Drop</a></li>
 <li><a href="http://caniuse.com/#search=draganddrop" title="Drag and Drop interoperability data from CanIUse">Drag and Drop interoperability data from CanIUse</a></li>
</ul>
