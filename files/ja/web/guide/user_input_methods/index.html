---
title: ユーザ入力とコントロール
slug: Web/Guide/User_input_methods
tags:
  - Screen Orientation
  - contenteditable
  - drag and drop
  - fullscreen
  - keyboard
  - mouse
  - pointer lock
  - touch
  - user input
translation_of: Web/Guide/User_input_methods
---
<div class="summary">
<p><span class="seoSummary">現代のウェブのユーザー入力は、単純なマウスやキーボードだけではありません。この記事では、ユーザー入力を管理し、オープンなウェブアプリに制御を実装するための推奨事項を、FAQ、実例、および基礎となる技術について、より詳細な情報を必要とする人のための詳細な情報へのリンクとともに提供します。関連する API とイベントには、<a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>、<a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>、<a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Screen Orientation API</a>、<a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a>、<a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">ドラッグ＆ドロップ API</a> などがあります。</span></p>
</div>

<h2 id="User_input_and_controls_workflow" name="User_input_and_controls_workflow">ユーザー入力とコントロールのワークフロー</h2>

<p>次の図式は、ユーザー入力の仕組みを実装するための典型的なワークフローを説明しています。</p>

<p style="text-align: center;"><img alt="" src="https://mdn.mozillademos.org/files/8085/user-input-and-controls.png" style="height: 86px; width: 303px;"></p>

<p>最初に、マウス、キーボード、指でのタッチなどから、アプリケーションで対象としたい入力の仕組みをどれにするかを決める必要があります。入力の仕組みを決めたのであれば、ウェブプラットフォームや JavaScript ライブラリーによって提供されているツールを使い、制御することができます。</p>

<h2 id="Recommendations" name="Recommendations">推奨事項</h2>

<p>利用できる入力の仕組みはアプリを動かしているデバイスの性能に依存します。</p>

<ul>
 <li>デバイスの中にはタッチスクリーンディスプレイを提供するものがあります。そのウェブプラットフォームは、タッチを基にしたユーザーインターフェースで指の動きを解釈するための<a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>を提供します。</li>
 <li>ポインターを操作する方法としてマウスやタッチパッドを提供しているデバイスの場合、<a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a> が一人称視点の 3D ゲームの実装や、他のアプリがポイントを合わせているデバイスの全ての制御を要求するのに役立ちます。そして <a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a> は、あなたのアプリを全画面モードで表示するのに役立ちます。</li>
 <li><a href="/ja/docs/Web/Guide/HTML/Editable_content">コンテンツが編集可能な要素（contentEditable など）</a>のような機能を使うことで、速いリッチテキストエディターを実装することができ、そして<a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">ドラッグ＆ドロップ API</a>はユーザーがあなたのアプリ内に要素を移動することを可能にします。画面の向きがあなたのアプリで問題である時、<a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Screen Orientation API </a>を通して、画面の向きの状態を参照でき、またその他のアクションを実行できます。
 <li>キーボードのアクセシビリティが適切か常に気に掛ける必要があります。多くのユーザーはキーボードのみを使いウェブサイトやアプリを操作します。ですので、あなたのシステムの機能性からそれを除外することは良くない考えです。</li>
</ul>

<p>以下は推奨事項一式であり、オープンなウェブアプリでそのようなツールを利用するためのベストプラクティスです。</p>

<h3 id="Decide_what_input_mechanism_you’re_using">使用する入力の仕組みを決める</h3>

<h4 id="Keyboard" name="Keyboard">キーボード</h4>

<p>キーボード入力はあなたのアプリによって制御できます。例えば、何らかのキーが押された時に制御を追加したい場合、ウィンドウオブジェクトにイベントリスナーを追加する必要があります。</p>

<pre class="brush: js notranslate">window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);</pre>

<p><code>handleKeyDown</code> と <code>handleKeyUp</code> は、<code>keydown</code> と <code>keyup</code> イベントについての制御を実装する関数です。</p>

<div class="note">
<p><strong>注</strong>: キーボードイベントについて、より知りたい人は<a href="/ja/docs/Web/Reference/Events">イベントリファレンス</a> と {{domxref("KeyboardEvent")}} ガイドをご確認ください。</p>
</div>

<h4 id="Mouse" name="Mouse">マウス</h4>

<p>ユーザーがマウスのようなポインティングデバイスと関わっている時に発生するイベントは {{domxref("MouseEvent")}} DOM インターフェースによって表されます。一般的なマウスイベントは、<a href="/ja/docs/Web/Reference/Events/click"><code>click イベント</code></a>、<a href="/ja/docs/Web/API/Element/dblclick_event"><code>dblclick イベント</code></a>、<a href="/ja/docs/Web/API/Element/mouseup_event"><code>mouseup イベント</code></a>、そして <a href="/ja/docs/Web/Reference/Events/mousedown"><code>mousedown イベント</code></a>を含みます。マウスイベントインターフェースが使用している全てのイベントの一覧は、<a href="/ja/docs/Web/Reference/Events">イベントリファレンス</a>に記載されています。</p>

<p>入力デバイスがマウスの場合、ユーザー入力を Pointer Lock API やドラッグ＆ドロップ API の実装でも制御できます (下記を参照してください)。</p>

<h4 id="Finger_touch" name="Finger_touch">指でのタッチ</h4>

<p>タッチスクリーンデバイスにインストールされることを目的としている ウェブアプリを開発している時、ディスプレイ解像度とユーザー入力に関して異なる性能を考慮することは良いプラクティスです。<a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>は、タッチスクリーンデバイス上のインタラクションな要素と一般的なインタラクションジェスチャーを実装するのに役立ちます。</p>

<p>タッチイベントを使いたいのであれば、イベントリスナーを追加して、イベントが発火された時に呼び出されるハンドラー関数を指定する必要があります。</p>

<pre class="brush: js notranslate">element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);</pre>

<p>ここでの <code>element</code> は、あなたがタッチイベントを登録したい DOM 要素です。

<div class="note">
<p><strong>注</strong>: タッチイベントでできることについての更なる情報は、<a href="/ja/docs/Web/API/Touch_events">タッチイベントガイド</a>を読んでください。</p>
</div>

<h4 id="Pointer_Events" name="Pointer_Events">ポインターイベント</h4>

<p>マウス、指でのタッチ、ペン入力など複数の入力形式が内蔵されているデバイスを扱う時、これら全ての異なる制御の仕組みを機能させるソリューションを開発することは難しいかもしれません。<a href="http://www.w3.org/TR/pointerevents/">Pointer Events</a> は、デバイス毎の扱いを標準化することにより、開発者がデバイスを横断してイベントを管理することをより簡単にするのに役立ちます。マウスカーソル、ペン、タッチ（マルチタッチを含む）、またはその他のポインティング入力デバイスによって、ポインターはスクリーン上のあらゆる接点となることができます。汎用的なポインター入力を扱うためのイベントは、<code>pointerdown</code>、<code>pointermove</code>、<code>pointerup</code>、<code>pointerover</code>、<code>pointerout</code> などのマウス用のイベントとよく似ています。</p>

<div class="note">
<p><strong>注</strong>: Pointer Events はまだ広くサポートされていませんが、<a href="https://github.com/mozilla/pointer.js">pointer.js polyfill</a> は Mozilla Github で利用可能です。</p>
</div>

<h3 id="Implement_controls" name="Implement_controls">コントロールの実装</h3>

<h4 id="Pointer_lock" name="Pointer_lock">ポインターロック</h4>

<p>典型的なゲーム開発では、ブラウザやスクリーンの境界を超えた時でさえもマウスイベントにアクセスすることが必要なケースがあるかもしれません。<a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a> はポインティングデバイスの全ての制御を可能にします。</p>

<p>以下は <code>element</code> にポインターロックをリクエストしているコードです。</p>

<pre class="brush: js notranslate">element.requestPointerLock();</pre>

<div class="note">
<p><strong>注</strong>: 全てのチュートリアルとリファレンスは、<a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a> のページを読んでください。</p>
</div>

<h4 id="Screen_Orientation" name="Screen_Orientation">画面の向き</h4>

<p>画面の向きがあなたのアプリケーションの問題である時、<a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Screen Orientation API</a> を通して画面の向きの状態を参照し、状態が変化した時に通知し、そして画面の向きを特定の状態（大抵はポートレートもしくはランドスケープ）に固定することができます。</p>

<p>画面の向きのデータは {{domxref("screen.orientation")}} 属性、または <a href="/ja/docs/Web/CSS/@media/orientation"><code>orientation</code></a> メディア特性を通して取得することができます。<code>screen.orientation</code> が変化した時、{{domxref("screen.orientationchange")}} イベントがスクリーンオブジェクトで発火されます。{{domxref("screen.lockOrientation")}} メソッドを呼ぶことで画面の向きを固定することができます。また、{{domxref("screen.unlockOrientation")}} メソッドはそれまで設定されていた画面のロックを全て解除します。</p>

<div class="note">
<p><strong>注</strong>: Screen Orientation API についてのより多くの情報は<a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">画面の向きの管理</a>で確認することができます。</p>
</div>

<h4 id="Fullscreen" name="Fullscreen">全画面</h4>

<p>あなたのアプリケーションの要素を全画面モードで表示する必要があるかもしれません(例えば {{ htmlelement("video") }} のような)。その要素で {{domxref("Element.requestFullscreen()")}} を呼び出すことによって全画面モードを実現することができます。多くのブラウザーが、これをまだベンダー接頭辞とともに実装していることを覚えておいてください。ですので、あなたのコードを以下のようにフォークする必要があるかもしれません:</p>

<pre class="brush: js notranslate">var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}</pre>

<div class="note">
<p><strong>注</strong>: 全画面の機能性をあなたのアプリケーションに追加することについてもっと知るには、私たちの<a href="/ja/docs/Web/API/Fullscreen_API">全画面モードの使用</a>についてのドキュメントを読んでください。</p>
</div>

<h4 id="Drag_Drop" name="Drag_Drop">ドラッグ＆ドロップ</h4>

<p><a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">ドラッグ＆ドロップ API</a> によりあなたのアプリケーションのユーザーは、クリックして要素を超えてマウスボタンを押し続け、他の場所にドラッグし、そしてその要素を移動先にドロップするためにマウスボタンを離すことができます。</p>

<p>以下は、コンテンツのセクションにドラッグできるようにする例です。</p>

<pre class="brush: html notranslate">&lt;div draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')"&gt;
    This text &lt;strong&gt;may&lt;/strong&gt; be dragged.
 &lt;/div&gt;</pre>

<p>私たちが実装する点は以下です:</p>

<ul>
 <li>ドラッグ可能にしたい要素の <a href="/ja/docs/Web/HTML/Global_attributes#attr-draggable"><code>draggable</code></a> 属性を true にセットします。</li>
 <li><a href="/ja/docs/Web/API/Document/dragstart_event"><code>dragstart</code></a> イベントのためのリスナーを追加し、このリスナーの中にドラッグデータをセットします。</li>
</ul>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">MDN のドラッグ＆ドロップドキュメント</a>でもっと多くの情報を確認することができます。</p>
</div>

<h4 id="contentEditable" name="contentEditable">コンテンツを編集可能にする</h4>

<p><a href="/ja/docs/Web/HTML/Global_attributes#attr-contenteditable"><code>contenteditable</code></a> 属性を使うことで、開いているウェブアプリのあらゆる DOM 要素を直接編集することができます。</p>

<pre class="brush: html notranslate">&lt;div contenteditable="true"&gt;
    このテキストは閲覧者が編集することができます。
&lt;/div&gt;</pre>

<div class="note">
<p><strong>注</strong>: 互換性や例、その他リソースに関する情報は <a href="/ja/docs/Web/Guide/HTML/Editable_content">コンテンツを編集可能にするガイド</a>で確認することができます。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<dl>
 <dt><strong><a href="/ja/DOM/Touch_events#Example">複数のタッチポイントを同時に追跡する</a></strong></dt>
 <dd>この例は一度に複数のタッチ箇所を追跡しており、ユーザーは <code>{{htmlelement("canvas")}}</code> の中で一本以上の指で同時に描くことができます。タッチイベントをサポートしているブラウザーでのみ動きます。</dd>
 <dt><strong><a href="/ja/docs/Web/API/Pointer_Lock_API#example">シンプルなポインターロックデモ</a></strong></dt>
 <dd>シンプルなコントロールシステムをセットアップするためのポインターロックの使い方を紹介するために、シンプルなポインターロックデモを記載しています。このデモでは <code>{{htmlelement("canvas")}}</code> 要素の中にボールを描くために JavaScript を使っています。canvas をクリックすると、ポインターロックはその後、マウスポインターの除去と直接マウスを使ってボールを移動させるために利用されます。</dd>
 <dt><strong><a href="http://html5demos.com/contenteditable">コンテンツを編集可能にするデモ</a></strong></dt>
 <dd>このデモは、編集可能なドキュメントセクションを作成することに利用できる contenteditable がどのように動くか表示しており、その状態はその後 <a href="/ja/docs/Web/API/Web_Storage_API">ローカルストレージ</a>を使い保存されます。</dd>
</dl>

<h2 id="Tutorials" name="Tutorials">チュートリアル</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/DOM/Events/Touch_events">タッチイベントガイド</a></li>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">画面の向きの管理</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">全画面モードの使用</a></li>
 <li><a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items">複数のアイテムのドラッグ＆ドロップ</a></li>
 <li><a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations">ドラッグ操作ガイド</a></li>
</ul>

<h2 id="Reference" name="Reference">関連情報</h2>

<ul>
 <li>{{domxref("MouseEvent")}}</li>
 <li>{{domxref("KeyboardEvent")}}</li>
 <li><a href="/ja/docs/Web/API/Touch_events">タッチイベント</a></li>
 <li><a href="/ja/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a></li>
 <li><a href="/ja/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Screen Orientation API</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
 <li><a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">ドラッグ＆ドロップ API</a></li>
 <li><a href="/ja/docs/Web/Guide/HTML/Editable_content">コンテンツを編集可能にする</a></li>
 <li><a href="/ja/Firefox_OS/Platform/Keyboard_events_in_Firefox_OS_TV">Keyboard events in Firefox OS TV</a></li>
 <li><a href="/ja/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation">Implementing TV remote control navigation</a></li>
</ul>
