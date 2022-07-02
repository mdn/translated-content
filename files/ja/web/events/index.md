---
title: イベントリファレンス
slug: Web/Events
tags:
  - Event
  - Overview
  - Reference
translation_of: Web/Events
---
[イベント](/ja/docs/Learn/JavaScript/Building_blocks/Events)は、コードの実行に影響を与える可能性のある「興味深い変化」をコードに通知するために発行されます。これは、マウス操作やウィンドウのサイズ変更などのユーザー操作や、環境の変化 (バッテリー残量の低下や OS のメディアイベントなど)、その他の原因によって発行されます。

それぞれのイベントは、 {{domxref("Event")}} インターフェイスに基づいたオブジェクトで表現され、何が起こったかについての情報を提供するために、追加のカスタムフィールドや関数を持つことがあります。各イベントのドキュメントには、関連するイベントインターフェイスへのリンクや、その他の関連情報を含む表が (上部付近に) あります。イベントの種類の一覧は、[イベント > Event を基にしたインターフェイス](/ja/docs/Web/API/Event#introduction)にあります。

この記事では、興味のありそうな*主な*イベントの種類 (アニメーション、クリップボード、ワーカーなど) と、それらの種類のイベントを実装する主なクラスの索引を提供します。最後には、ドキュメント化されたすべてのイベントの一覧を掲載しています。

> **Note:** このページでは、ウェブ上で遭遇する最も一般的なイベントの多くをリストアップしています。ここに掲載されていないイベントを探している場合は、 MDN の他の部分でその名前、トピック領域、関連する仕様書を検索してみてください。

## イベント索引

<table class="standard-table">
  <tbody>
    <tr>
      <th>イベントの種類</th>
      <th style="width: 50%">説明</th>
      <th>ドキュメント</th>
    </tr>
    <tr>
      <td>アニメーション</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Web_Animations_API">Web Animation API</a> に関するイベント。
        </p>
        <p>
          アニメーション状態の変化 (例えば、アニメーションの開始または終了) に応答するために使用される。
        </p>
      </td>
      <td>
        アニメーションイベントは <a href="/ja/docs/Web/API/Document#animation_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Window#animation_events"><code>Window</code></a>, <a href="/ja/docs/Web/API/HTMLElement#animation_events"><code>HTMLElement</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>非同期データ読み取り</td>
      <td><p>データの読み取りに関するイベント。</p></td>
      <td>
        イベントは <a href="/ja/docs/Web/API/AbortSignal#events"><code>AbortSignal</code></a>, <a href="/ja/docs/Web/API/XMLHttpRequest#events"><code>XMLHttpRequest</code></a>, <a href="/ja/docs/Web/API/FileReader#events"><code>FileReader</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>クリップボード</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Clipboard_API">Clipboard API</a> に関するイベント。
        </p>
        <p>コンテンツが切り取り、コピー、貼り付けされたときを知るために使用。</p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#clipboard_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Element#clipboard_events"><code>Element</code></a>, <a href="/ja/docs/Web/API/Window#clipboard_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>変換</td>
      <td>
        <p>
          変換、すなわち (通常のキー押下を使用しない) テキストの「間接的な」入力に関するイベント。
        </p>
        <p>
          例えば、音声入力エンジンからのテキスト入力、他の言語の新しい文字を表現するための特殊な装飾キー入力の組み合わせ。
        </p>
        <p>訳注: 日本語のかな漢字変換も含む。</p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Element#composition_events"><code>Element</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>CSS トランジション</td>
      <td>
        <p>
          <a href="/ja/docs/Web/CSS/CSS_Transitions">CSS トランジション</a>に関するイベント。
        </p>
        <p>
          CSS トランジションの開始、終了、キャンセルなどの時の通知イベントを提供する。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#transition_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/HTMLElement#transition_events"><code>HTMLElement</code></a>, <a href="/ja/docs/Web/API/Window#transition_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>データベース</td>
      <td>
        <p>
          データベース操作時、開く、閉じる、トランザクション、エラーなどに関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/IDBDatabase#events"><code>IDBDatabase</code></a>, <a href="/ja/docs/Web/API/IDBOpenDBRequest#events"><code>IDBOpenDBRequest</code></a>, <a href="/ja/docs/Web/API/IDBRequest#events"><code>IDBRequest</code></a>, <a href="/ja/docs/Web/API/IDBTransaction#events"><code>IDBTransaction</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>DOM 変化</td>
      <td>
        <p>
          Document Object Model (DOM) 階層やノードに対する変更に関するイベント。
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>警告:</strong>
            <a href="/ja/docs/Web/API/MutationEvent">Mutation イベント</a>は非推奨です。
            代わりに <a href="/ja/docs/Web/API/MutationObserver">Mutation Observer</a> を使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>ドラッグ＆ドロップ、ホイール</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">HTML Drag and Drop API</a> に関するイベントや<a href="/ja/docs/Web/API/WheelEvent">ホイールイベント</a>。
        </p>
        <p>
          ドラッグイベントやホイールイベントは、マウスイベントから派生したものです。これらのイベントは、マウスホイールやドラッグ/ドロップを使用したときに発行されますが、他の適切なハードウェアでも使用されることがあります。
        </p>
      </td>
      <td>
        <p>
          ドラッグイベントは <a href="/ja/docs/Web/API/Document#drag_drop_events"><code>Document</code></a> で発行される。
        </p>
        <p>
          ホイールイベントは <a href="/ja/docs/Web/API/Document/wheel_event"><code>Document</code></a> および <a href="/ja/docs/Web/API/Element/wheel_event"><code>Element</code></a> で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>フォーカス</td>
      <td><p>要素がフォーカスを得たり失ったりすることに関するイベント。</p></td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Element#focus_events"><code>Element</code></a>, <a href="/ja/docs/Web/API/Window#focus_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>フォーム</td>
      <td>
        <p>フォームが構築されたり、リセットされたり、送信されたりすることに関するイベント。</p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/HTMLFormElement#events"><code>HTMLFormElement</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>全画面</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a> に関するイベント。
        </p>
        <p>
          全画面モードとウィンドウモードの間で遷移したとき、この遷移の間でエラーが発生したときの通知に使用。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#fullscreen_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Element#fullscreen_events"><code>Element</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>ゲームパッド</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Gamepad_API">Gamepad API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#gamepad_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>ジェスチャー</td>
      <td>
        <p>
          ジェスチャーの実装には<a href="/ja/docs/Web/API/Touch_events">タッチイベント</a>が推奨されます。
        </p>
      </td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Document#touch_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Element#touch_events"><code>Element</code></a> で発行される。
        </p>
        <p>加えて、いくつもの標準外のジェスチャーイベントが存在する。</p>
        <ul>
          <li>
            標準外の WebKit 固有のイベントは <a href="/ja/docs/Web/API/Element#touch_events"><code>Element</code></a>: <a href="/ja/docs/Web/API/Element/gesturestart_event"><code>gesturestart</code> イベント</a>, <a href="/ja/docs/Web/API/Element/gesturechange_event"><code>gesturechange</code> イベント</a>, <a href="/ja/docs/Web/API/Element/gestureend_event"><code>gestureend</code> イベント</a>。
          </li>
          <li>
            標準外の IE 固有のイベントは <a href="/ja/docs/Web/API/Element#touch_events"><code>Element</code></a>: <a href="/ja/docs/Web/API/Element/MSGestureStart_event"><code>MSGestureStart</code></a>, <a href="/ja/docs/Web/API/Element/MSGestureChange_event"><code>MSGestureChange</code></a>, <a href="/ja/docs/Web/API/Element/MSGestureEnd_event"><code>MSGestureEnd</code></a>, <a href="/ja/docs/Web/API/Element/MSGestureHold_event"><code>MSGestureHold</code></a>, <a href="/ja/docs/Web/API/Element/MSGestureTap_event"><code>MSGestureTap</code></a>。
          </li>
          <li>
            非推奨/標準外の Mozilla のタッチイベントは <a href="/ja/docs/Web/API/Touch_events/Mozilla_experimental_events">Touch events (Mozilla experimental)</a>
          </li>
          <li>
            <a href="/ja/docs/Web/Events/Mouse_gesture_events">Firefox アドオンのマウスジェスチャーイベント</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>履歴</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/History_API">History API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#history_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>HTML 要素コンテンツの表示管理</td>
      <td>
        <p>
          表示またはテキスト要素の状態の変更に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/HTMLDetailsElement#events"><code>HTMLDetailsElement</code></a>, <a href="/ja/docs/Web/API/HTMLDialogElement#events"><code>HTMLDialogElement</code></a>, <a href="/ja/docs/Web/API/HTMLSlotElement#events"><code>HTMLSlotElement</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>入力</td>
      <td>
        <p>
          HTML の input 要素、例えば {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/HTMLElement#input_events"><code>HTMLElement</code></a>, <a href="/ja/docs/Web/API/HTMLInputElement#events"><code>HTMLInputElement</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>キーボード</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/KeyboardEvent">キーボード</a>の使用に関するイベント。
        </p>
        <p>キーが上がった、下がった、押された時の通知に使用する。</p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#keyboard_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Element#keyboard_events"><code>Element</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>文書の読み込み/アンロード</td>
      <td><p>文書の読み込みやアンロードに関するイベント。</p></td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Document#load_unload_events"><code>Document</code></a> や <a href="/ja/docs/Web/API/Window#load_unload_events"><code>Window</code></a> で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>マニフェスト</td>
      <td>
        <p>
          <a href="/ja/docs/Web/Manifest">プログレッシブウェブアプリのマニフェスト</a>のインストールに関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#manifest_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr id="media">
      <td>メディア</td>
      <td>
        <p>
          メディアの使用 (<a href="/ja/docs/Web/API/Media_Streams_API#events">Media Capture and Streams API</a>, <a href="/ja/docs/Web/API/Web_Audio_API#events">Web Audio API</a>, <a href="/ja/docs/Web/API/Picture-in-Picture_API#events">Picture-in-Picture API</a>, など) に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/ScriptProcessorNode#events"><code>ScriptProcessorNode</code></a>, <a href="/ja/docs/Web/API/HTMLMediaElement#events"><code>HTMLMediaElement</code></a>, <a href="/ja/docs/Web/API/AudioTrackList#events"><code>AudioTrackList</code></a>, <a href="/ja/docs/Web/API/AudioScheduledSourceNode#events"><code>AudioScheduledSourceNode</code></a>, <a href="/ja/docs/Web/API/MediaRecorder#events"><code>MediaRecorder</code></a>, <a href="/ja/docs/Web/API/MediaStream#events"><code>MediaStream</code></a>, <a href="/ja/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a>, <a href="/ja/docs/Web/API/VideoTrackList#events"><code>VideoTrackList</code></a>, <a href="/ja/docs/Web/API/HTMLTrackElement#events"><code>HTMLTrackElement</code></a>, <a href="/ja/docs/Web/API/OfflineAudioContext#events"><code>OfflineAudioContext</code></a>, <a href="/ja/docs/Web/API/TextTrack#events"><code>TextTrack</code></a>, <a href="/ja/docs/Web/API/TextTrackList#events"><code>TextTrackList</code></a>, <a href="/ja/docs/Web/HTML/Element/audio#events">Element/audio</a>, <a href="/ja/docs/Web/HTML/Element/video#events">Element/video</a> で発行される。
      </td>
    </tr>
    <tr>
      <td>メッセージ</td>
      <td>
        <p>
          ウィンドウが他の閲覧コンテキストからメッセージを受け取ることに関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#messaging_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>マウス</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/MouseEvent">コンピューターのマウス</a>の使用に関するイベント。
        </p>
        <p>
          マウスのクリック、ダブルクリック、離す、押すイベント、右クリック、要素内または要素外への移動、テキスト選択など。
        </p>
        <p>
          ポインターイベントは、ハードウェアに依存しない、マウスイベントの代替となるものです。ドラッグイベント、ホイールイベントは、マウスイベントから派生したものです。
        </p>
      </td>
      <td>
        マウスイベントは <a href="/ja/docs/Web/API/Element#mouse_events"><code>Element</code></a> で発行されます。
      </td>
    </tr>
    <tr>
      <td>ネットワーク/接続</td>
      <td><p>ネットワーク接続が得られた、または失われたことに関するイベント。</p></td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Window#connection_events"><code>Window</code></a> で発行される。
        </p>
        <p>
          イベントは <a href="/ja/docs/Web/API/NetworkInformation#event_handler"><code>NetworkInformation</code></a> (<a href="/ja/docs/Web/API/Network_Information_API">Network Information API</a>) で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>支払い</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Payment_Request_API">Payment Request API</a> に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/PaymentRequest#events"><code>PaymentRequest</code></a>, <a href="/ja/docs/Web/API/PaymentResponse#events"><code>PaymentResponse</code></a> で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>パフォーマンス</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Performance_API">High Resolution Time API</a>, <a href="/ja/docs/Web/API/Performance_Timeline">Performance Timeline API</a>, <a href="/ja/docs/Web/API/Navigation_timing_API">Navigation Timing API</a>, <a href="/ja/docs/Web/API/User_Timing_API">User Timing API</a>, and <a href="/ja/docs/Web/API/Resource_Timing_API">Resource Timing API</a> に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Performance#events"><code>Performance</code></a> で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>ポインター</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Pointer_events">Pointer Events API</a> に関するイベント。
        </p>
        <p>
          マウス、タッチ、ペン/スタイラスなどのポインティングデバイスから、ハードウェアに依存しない通知を提供する。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#pointer_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/HTMLElement#pointer_events"><code>HTMLElement</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>印刷</td>
      <td><p>印刷に関するイベント。</p></td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#print_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>プロミスの拒否</td>
      <td>
        <p>
          JavaScript のプロミスが拒否されたときにグローバルスクリプトコンテキストに送信されるイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Window#promise_rejection_events"><code>Window</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>ソケット</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/WebSockets_API">WebSockets API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/WebSocket#events"><code>Websocket</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>SVG 画像に関するイベント。</p></td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/SVGElement#events"><code>SVGElement</code></a>, <a href="/ja/docs/Web/API/SVGAnimationElement#events"><code>SVGAnimationElement</code></a>, <a href="/ja/docs/Web/API/SVGGraphicsElement#events"><code>SVGGraphicsElement</code></a> で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>テキスト選択</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Selection">テキストの選択</a>に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Document#selection_events"><code>Document</code></a> で発行
        </p>
      </td>
    </tr>
    <tr>
      <td>タッチ</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Touch_events">Touch Events API</a> に関するイベント。
        </p>
        <p>
          タッチ反応画面 (すなわち指またはスタイラスを使用したもの) の操作による通知イベントを提供する。 <a href="/ja/docs/Web/API/Force_Touch_events#events">Force Touch API</a> に関するものではない。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#touch_events"><code>Document</code></a>, <a href="/ja/docs/Web/API/Element#touch_events"><code>Element</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>バーチャルリアリティ</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR Device API</a> に関するイベント。
        </p>
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> (および関連する <a href="/ja/docs/Web/API/Window#webvr_events"><code>Window</code> イベント</a>) は非推奨です。
          </p>
        </div>
      </td>
      <td>イベントは <a href="/ja/docs/Web/API/XRSystem#events"><code>XRSystem</code></a>, <a href="/ja/docs/Web/API/XRSession#events"><code>XRSession</code></a>, <a href="/ja/docs/Web/API/XRReferenceSpace#events"><code>XRReferenceSpace</code></a> で発行される。</td>
    </tr>
    <tr>
      <td>RTC (リアルタイムコミュニケーション)</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/RTCDataChannel#events"><code>RTCDataChannel</code></a>, <a href="/ja/docs/Web/API/RTCDTMFSender#events"><code>RTCDTMFSender</code></a>, <a href="/ja/docs/Web/API/RTCIceTransport#events"><code>RTCIceTransport</code></a>, <a href="/ja/docs/Web/API/RTCPeerConnection#events"><code>RTCPeerConnection</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>サーバー送信イベント</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Server-sent_events">server sent events API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/EventSource#events"><code>EventSource</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>発声</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Web_Speech_API">Web Speech API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/SpeechSynthesisUtterance#events"><code>SpeechSynthesisUtterance</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>ワーカー</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Web_Workers_API">Web Workers API</a>, <a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a>, <a href="/ja/docs/Web/API/Broadcast_Channel_API">Broadcast Channel API</a>, <a href="/ja/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a> に関するイベント。
        </p>
        <p>
          新しいメッセージやメッセージ送信エラーに応答するために使用されます。サービスワーカーは、プッシュ通知、表示された通知をユーザーがクリックしたこと、プッシュ購読が無効になったこと、コンテンツインデックスからアイテムが削除されたことなど、その他のイベントを通知することもできます。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/ServiceWorkerGlobalScope#events"><code>ServiceWorkerGlobalScope</code></a>, <a href="/ja/docs/Web/API/DedicatedWorkerGlobalScope#events"><code>DedicatedWorkerGlobalScope</code></a>, <a href="/ja/docs/Web/API/SharedWorkerGlobalScope#events"><code>SharedWorkerGlobalScope</code></a>, <a href="/ja/docs/Web/API/WorkerGlobalScope#events"><code>WorkerGlobalScope</code></a>, <a href="/ja/docs/Web/API/Worker#events"><code>Worker</code></a>, <a href="/ja/docs/Web/API/WorkerGlobalScope#events"><code>WorkerGlobalScope</code></a>, <a href="/ja/docs/Web/API/BroadcastChannel#events"><code>BroadcastChannel</code></a>, <a href="/ja/docs/Web/API/MessagePort#events"><code>MessagePort</code></a> で発行されます。
      </td>
    </tr>
  </tbody>
</table>

## イベントの一覧

この節では、 MDN に*独自の*リファレンスページを持つイベントをリストアップしています。ここに掲載されていないイベントに興味がある場合は、 MDN の他の部分でその名前、トピック領域、または関連する仕様書を検索してみてください。

- {{DOMxRef("AbortSignal")}}

  - [abort イベント](/ja/docs/Web/API/AbortSignal/abort_event)

- {{DOMxRef("AudioScheduledSourceNode")}}

  - [ended イベント](/ja/docs/Web/API/AudioScheduledSourceNode/ended_event)

- {{DOMxRef("AudioTrackList")}}

  - [addtrack イベント](/ja/docs/Web/API/AudioTrackList/addtrack_event)
  - [change イベント](/ja/docs/Web/API/AudioTrackList/change_event)
  - [removetrack イベント](/ja/docs/Web/API/AudioTrackList/removetrack_event)

- {{DOMxRef("BroadcastChannel")}}

  - [messageerror イベント](/ja/docs/Web/API/BroadcastChannel/messageerror_event)
  - [message イベント](/ja/docs/Web/API/BroadcastChannel/message_event)

- {{DOMxRef("DedicatedWorkerGlobalScope")}}

  - [messageerror イベント](/ja/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - [message イベント](/ja/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

- {{DOMxRef("Document")}}

  - [animationcancel イベント](/ja/docs/Web/API/Document/animationcancel_event)
  - [animationend イベント](/ja/docs/Web/API/Document/animationend_event)
  - [animationiteration イベント](/ja/docs/Web/API/Document/animationiteration_event)
  - [animationstart イベント](/ja/docs/Web/API/Document/animationstart_event)
  - [copy イベント](/ja/docs/Web/API/Document/copy_event)
  - [cut イベント](/ja/docs/Web/API/Document/cut_event)
  - [DOMContentLoaded イベント](/ja/docs/Web/API/Document/DOMContentLoaded_event)
  - [dragend イベント](/ja/docs/Web/API/Document/dragend_event)
  - [dragenter イベント](/ja/docs/Web/API/Document/dragenter_event)
  - [dragleave イベント](/ja/docs/Web/API/Document/dragleave_event)
  - [dragover イベント](/ja/docs/Web/API/Document/dragover_event)
  - [dragstart イベント](/ja/docs/Web/API/Document/dragstart_event)
  - [drag イベント](/ja/docs/Web/API/Document/drag_event)
  - [drop イベント](/ja/docs/Web/API/Document/drop_event)
  - [fullscreenchange イベント](/ja/docs/Web/API/Document/fullscreenchange_event)
  - [fullscreenerror イベント](/ja/docs/Web/API/Document/fullscreenerror_event)
  - [gotpointercapture イベント](/ja/docs/Web/API/Document/gotpointercapture_event)
  - [keydown イベント](/ja/docs/Web/API/Document/keydown_event)
  - [keypress イベント](/ja/docs/Web/API/Document/keypress_event)
  - [keyup イベント](/ja/docs/Web/API/Document/keyup_event)
  - [lostpointercapture イベント](/ja/docs/Web/API/Document/lostpointercapture_event)
  - [paste イベント](/ja/docs/Web/API/Document/paste_event)
  - [pointercancel イベント](/ja/docs/Web/API/Document/pointercancel_event)
  - [pointerdown イベント](/ja/docs/Web/API/Document/pointerdown_event)
  - [pointerenter イベント](/ja/docs/Web/API/Document/pointerenter_event)
  - [pointerleave イベント](/ja/docs/Web/API/Document/pointerleave_event)
  - [pointerlockchange イベント](/ja/docs/Web/API/Document/pointerlockchange_event)
  - [pointerlockerror イベント](/ja/docs/Web/API/Document/pointerlockerror_event)
  - [pointermove イベント](/ja/docs/Web/API/Document/pointermove_event)
  - [pointerout イベント](/ja/docs/Web/API/Document/pointerout_event)
  - [pointerover イベント](/ja/docs/Web/API/Document/pointerover_event)
  - [pointerup イベント](/ja/docs/Web/API/Document/pointerup_event)
  - [readystatechange イベント](/ja/docs/Web/API/Document/readystatechange_event)
  - [scroll イベント](/ja/docs/Web/API/Document/scroll_event)
  - [selectionchange イベント](/ja/docs/Web/API/Document/selectionchange_event)
  - [selectstart イベント](/ja/docs/Web/API/Document/selectstart_event)
  - [touchcancel イベント](/ja/docs/Web/API/Document/touchcancel_event)
  - [touchend イベント](/ja/docs/Web/API/Document/touchend_event)
  - [touchmove イベント](/ja/docs/Web/API/Document/touchmove_event)
  - [touchstart イベント](/ja/docs/Web/API/Document/touchstart_event)
  - [transitioncancel イベント](/ja/docs/Web/API/Document/transitioncancel_event)
  - [transitionend イベント](/ja/docs/Web/API/Document/transitionend_event)
  - [transitionrun イベント](/ja/docs/Web/API/Document/transitionrun_event)
  - [transitionstart イベント](/ja/docs/Web/API/Document/transitionstart_event)
  - [visibilitychange イベント](/ja/docs/Web/API/Document/visibilitychange_event)
  - [wheel イベント](/ja/docs/Web/API/Document/wheel_event)

- {{DOMxRef("Element")}}

  - [afterscriptexecute イベント](/ja/docs/Web/API/Element/afterscriptexecute_event)
  - [auxclick イベント](/ja/docs/Web/API/Element/auxclick_event)
  - [beforescriptexecute イベント](/ja/docs/Web/API/Element/beforescriptexecute_event)
  - [blur イベント](/ja/docs/Web/API/Element/blur_event)
  - [click イベント](/ja/docs/Web/API/Element/click_event)
  - [compositionend イベント](/ja/docs/Web/API/Element/compositionend_event)
  - [compositionstart イベント](/ja/docs/Web/API/Element/compositionstart_event)
  - [compositionupdate イベント](/ja/docs/Web/API/Element/compositionupdate_event)
  - [contextmenu イベント](/ja/docs/Web/API/Element/contextmenu_event)
  - [copy イベント](/ja/docs/Web/API/Element/copy_event)
  - [cut イベント](/ja/docs/Web/API/Element/cut_event)
  - [dblclick イベント](/ja/docs/Web/API/Element/dblclick_event)
  - [DOMActivate イベント](/ja/docs/Web/API/Element/DOMActivate_event)
  - [DOMMouseScroll イベント](/ja/docs/Web/API/Element/DOMMouseScroll_event)
  - [error イベント](/ja/docs/Web/API/Element/error_event)
  - [focusin イベント](/ja/docs/Web/API/Element/focusin_event)
  - [focusout イベント](/ja/docs/Web/API/Element/focusout_event)
  - [focus イベント](/ja/docs/Web/API/Element/focus_event)
  - [fullscreenchange イベント](/ja/docs/Web/API/Element/fullscreenchange_event)
  - [fullscreenerror イベント](/ja/docs/Web/API/Element/fullscreenerror_event)
  - [gesturechange イベント](/ja/docs/Web/API/Element/gesturechange_event)
  - [gestureend イベント](/ja/docs/Web/API/Element/gestureend_event)
  - [gesturestart イベント](/ja/docs/Web/API/Element/gesturestart_event)
  - [keydown イベント](/ja/docs/Web/API/Element/keydown_event)
  - [keypress イベント](/ja/docs/Web/API/Element/keypress_event)
  - [keyup イベント](/ja/docs/Web/API/Element/keyup_event)
  - [mousedown イベント](/ja/docs/Web/API/Element/mousedown_event)
  - [mouseenter イベント](/ja/docs/Web/API/Element/mouseenter_event)
  - [mouseleave イベント](/ja/docs/Web/API/Element/mouseleave_event)
  - [mousemove イベント](/ja/docs/Web/API/Element/mousemove_event)
  - [mouseout イベント](/ja/docs/Web/API/Element/mouseout_event)
  - [mouseover イベント](/ja/docs/Web/API/Element/mouseover_event)
  - [mouseup イベント](/ja/docs/Web/API/Element/mouseup_event)
  - [mousewheel イベント](/ja/docs/Web/API/Element/mousewheel_event)
  - [msContentZoom イベント](/ja/docs/Web/API/Element/msContentZoom_event)
  - [MSGestureChange イベント](/ja/docs/Web/API/Element/MSGestureChange_event)
  - [MSGestureEnd イベント](/ja/docs/Web/API/Element/MSGestureEnd_event)
  - [MSGestureHold イベント](/ja/docs/Web/API/Element/MSGestureHold_event)
  - [MSGestureStart イベント](/ja/docs/Web/API/Element/MSGestureStart_event)
  - [MSGestureTap イベント](/ja/docs/Web/API/Element/MSGestureTap_event)
  - [MSInertiaStart イベント](/ja/docs/Web/API/Element/MSInertiaStart_event)
  - [MSManipulationStateChanged イベント](/ja/docs/Web/API/Element/MSManipulationStateChanged_event)
  - [paste イベント](/ja/docs/Web/API/Element/paste_event)
  - [scroll イベント](/ja/docs/Web/API/Element/scroll_event)
  - [select イベント](/ja/docs/Web/API/Element/select_event)
  - [show イベント](/ja/docs/Web/API/Element/show_event)
  - [touchcancel イベント](/ja/docs/Web/API/Element/touchcancel_event)
  - [touchend イベント](/ja/docs/Web/API/Element/touchend_event)
  - [touchmove イベント](/ja/docs/Web/API/Element/touchmove_event)
  - [touchstart イベント](/ja/docs/Web/API/Element/touchstart_event)
  - [webkitmouseforcechanged イベント](/ja/docs/Web/API/Element/webkitmouseforcechanged_event)
  - [webkitmouseforcedown イベント](/ja/docs/Web/API/Element/webkitmouseforcedown_event)
  - [webkitmouseforceup イベント](/ja/docs/Web/API/Element/webkitmouseforceup_event)
  - [webkitmouseforcewillbegin イベント](/ja/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - [wheel イベント](/ja/docs/Web/API/Element/wheel_event)

- {{DOMxRef("EventSource")}}

  - [error イベント](/ja/docs/Web/API/EventSource/error_event)
  - [message イベント](/ja/docs/Web/API/EventSource/message_event)
  - [open イベント](/ja/docs/Web/API/EventSource/open_event)

- {{DOMxRef("FileReader")}}

  - [abort イベント](/ja/docs/Web/API/FileReader/abort_event)
  - [error イベント](/ja/docs/Web/API/FileReader/error_event)
  - [loadend イベント](/ja/docs/Web/API/FileReader/loadend_event)
  - [loadstart イベント](/ja/docs/Web/API/FileReader/loadstart_event)
  - [load イベント](/ja/docs/Web/API/FileReader/load_event)
  - [progress イベント](/ja/docs/Web/API/FileReader/progress_event)

- {{DOMxRef("HTMLCanvasElement")}}

  - [webglcontextcreationerror イベント](/ja/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - [webglcontextlost イベント](/ja/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - [webglcontextrestored イベント](/ja/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

- {{DOMxRef("HTMLDetailsElement")}}

  - [toggle イベント](/ja/docs/Web/API/HTMLDetailsElement/toggle_event)

- {{DOMxRef("HTMLDialogElement")}}

  - [cancel イベント](/ja/docs/Web/API/HTMLDialogElement/cancel_event)
  - [close イベント](/ja/docs/Web/API/HTMLDialogElement/close_event)

- {{DOMxRef("HTMLElement")}}

  - [animationcancel イベント](/ja/docs/Web/API/HTMLElement/animationcancel_event)
  - [animationend イベント](/ja/docs/Web/API/HTMLElement/animationend_event)
  - [animationiteration イベント](/ja/docs/Web/API/HTMLElement/animationiteration_event)
  - [animationstart イベント](/ja/docs/Web/API/HTMLElement/animationstart_event)
  - [beforeinput イベント](/ja/docs/Web/API/HTMLElement/beforeinput_event)
  - [change イベント](/ja/docs/Web/API/HTMLElement/change_event)
  - [gotpointercapture イベント](/ja/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [input イベント](/ja/docs/Web/API/HTMLElement/input_event)
  - [lostpointercapture イベント](/ja/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [pointercancel イベント](/ja/docs/Web/API/HTMLElement/pointercancel_event)
  - [pointerdown イベント](/ja/docs/Web/API/HTMLElement/pointerdown_event)
  - [pointerenter イベント](/ja/docs/Web/API/HTMLElement/pointerenter_event)
  - [pointerleave イベント](/ja/docs/Web/API/HTMLElement/pointerleave_event)
  - [pointermove イベント](/ja/docs/Web/API/HTMLElement/pointermove_event)
  - [pointerout イベント](/ja/docs/Web/API/HTMLElement/pointerout_event)
  - [pointerover イベント](/ja/docs/Web/API/HTMLElement/pointerover_event)
  - [pointerup イベント](/ja/docs/Web/API/HTMLElement/pointerup_event)
  - [transitioncancel イベント](/ja/docs/Web/API/HTMLElement/transitioncancel_event)
  - [transitionend イベント](/ja/docs/Web/API/HTMLElement/transitionend_event)
  - [transitionrun イベント](/ja/docs/Web/API/HTMLElement/transitionrun_event)
  - [transitionstart イベント](/ja/docs/Web/API/HTMLElement/transitionstart_event)

- {{DOMxRef("HTMLFormElement")}}

  - [formdata イベント](/ja/docs/Web/API/HTMLFormElement/formdata_event)
  - [reset イベント](/ja/docs/Web/API/HTMLFormElement/reset_event)
  - [submit イベント](/ja/docs/Web/API/HTMLFormElement/submit_event)

- {{DOMxRef("HTMLInputElement")}}

  - [invalid イベント](/ja/docs/Web/API/HTMLInputElement/invalid_event)
  - [search イベント](/ja/docs/Web/API/HTMLInputElement/search_event)

- {{DOMxRef("HTMLMediaElement")}}

  - [abort イベント](/ja/docs/Web/API/HTMLMediaElement/abort_event)
  - [canplaythrough イベント](/ja/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - [canplay イベント](/ja/docs/Web/API/HTMLMediaElement/canplay_event)
  - [durationchange イベント](/ja/docs/Web/API/HTMLMediaElement/durationchange_event)
  - [emptied イベント](/ja/docs/Web/API/HTMLMediaElement/emptied_event)
  - [ended イベント](/ja/docs/Web/API/HTMLMediaElement/ended_event)
  - [error イベント](/ja/docs/Web/API/HTMLMediaElement/error_event)
  - [loadeddata イベント](/ja/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - [loadedmetadata イベント](/ja/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - [loadstart イベント](/ja/docs/Web/API/HTMLMediaElement/loadstart_event)
  - [pause イベント](/ja/docs/Web/API/HTMLMediaElement/pause_event)
  - [playing イベント](/ja/docs/Web/API/HTMLMediaElement/playing_event)
  - [play イベント](/ja/docs/Web/API/HTMLMediaElement/play_event)
  - [progress イベント](/ja/docs/Web/API/HTMLMediaElement/progress_event)
  - [ratechange イベント](/ja/docs/Web/API/HTMLMediaElement/ratechange_event)
  - [seeked イベント](/ja/docs/Web/API/HTMLMediaElement/seeked_event)
  - [seeking イベント](/ja/docs/Web/API/HTMLMediaElement/seeking_event)
  - [stalled イベント](/ja/docs/Web/API/HTMLMediaElement/stalled_event)
  - [suspend イベント](/ja/docs/Web/API/HTMLMediaElement/suspend_event)
  - [timeupdate イベント](/ja/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - [volumechange イベント](/ja/docs/Web/API/HTMLMediaElement/volumechange_event)
  - [waiting イベント](/ja/docs/Web/API/HTMLMediaElement/waiting_event)

- {{DOMxRef("HTMLSlotElement")}}

  - [slotchange イベント](/ja/docs/Web/API/HTMLSlotElement/slotchange_event)

- {{DOMxRef("HTMLTrackElement")}}

  - [cuechange イベント](/ja/docs/Web/API/HTMLTrackElement/cuechange_event)

- {{DOMxRef("HTMLVideoElement")}}

  - [enterpictureinpicture イベント](/ja/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - [leavepictureinpicture イベント](/ja/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)

- {{DOMxRef("IDBDatabase")}}

  - [abort イベント](/ja/docs/Web/API/IDBDatabase/abort_event)
  - [close イベント](/ja/docs/Web/API/IDBDatabase/close_event)
  - [error イベント](/ja/docs/Web/API/IDBDatabase/error_event)
  - [versionchange イベント](/ja/docs/Web/API/IDBDatabase/versionchange_event)

- {{DOMxRef("IDBOpenDBRequest")}}

  - [blocked イベント](/ja/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - [upgradeneeded イベント](/ja/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

- {{DOMxRef("IDBRequest")}}

  - [error イベント](/ja/docs/Web/API/IDBRequest/error_event)
  - [success イベント](/ja/docs/Web/API/IDBRequest/success_event)

- {{DOMxRef("IDBTransaction")}}

  - [abort イベント](/ja/docs/Web/API/IDBTransaction/abort_event)
  - [complete イベント](/ja/docs/Web/API/IDBTransaction/complete_event)
  - [error イベント](/ja/docs/Web/API/IDBTransaction/error_event)

- {{DOMxRef("MediaDevices")}}

  - [devicechange イベント](/ja/docs/Web/API/MediaDevices/devicechange_event)

- {{DOMxRef("MediaRecorder")}}

  - [error イベント](/ja/docs/Web/API/MediaRecorder/error_event)

- {{DOMxRef("MediaStream")}}

  - [addtrack イベント](/ja/docs/Web/API/MediaStream/addtrack_event)
  - [removetrack イベント](/ja/docs/Web/API/MediaStream/removetrack_event)

- {{DOMxRef("MediaStreamTrack")}}

  - [ended イベント](/ja/docs/Web/API/MediaStreamTrack/ended_event)
  - [mute イベント](/ja/docs/Web/API/MediaStreamTrack/mute_event)
  - [unmute イベント](/ja/docs/Web/API/MediaStreamTrack/unmute_event)

- {{DOMxRef("MessagePort")}}

  - [messageerror イベント](/ja/docs/Web/API/MessagePort/messageerror_event)
  - [message イベント](/ja/docs/Web/API/MessagePort/message_event)

- {{DOMxRef("OfflineAudioContext")}}

  - [complete イベント](/ja/docs/Web/API/OfflineAudioContext/complete_event)

- {{DOMxRef("PaymentRequest")}}

  - [merchantvalidation イベント](/ja/docs/Web/API/PaymentRequest/merchantvalidation_event)
  - [paymentmethodchange イベント](/ja/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - [shippingaddresschange イベント](/ja/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - [shippingoptionchange イベント](/ja/docs/Web/API/PaymentRequest/shippingoptionchange_event)

- {{DOMxRef("PaymentResponse")}}

  - [payerdetailchange イベント](/ja/docs/Web/API/PaymentResponse/payerdetailchange_event)

- {{DOMxRef("Performance")}}

  - [resourcetimingbufferfull イベント](/ja/docs/Web/API/Performance/resourcetimingbufferfull_event)

- {{DOMxRef("PictureInPictureWindow")}}

  - [resize イベント](/ja/docs/Web/API/PictureInPictureWindow/resize_event)

- {{DOMxRef("RTCDataChannel")}}

  - [bufferedamountlow イベント](/ja/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - [close イベント](/ja/docs/Web/API/RTCDataChannel/close_event)
  - [closing イベント](/ja/docs/Web/API/RTCDataChannel/closing_event)
  - [error イベント](/ja/docs/Web/API/RTCDataChannel/error_event)
  - [message イベント](/ja/docs/Web/API/RTCDataChannel/message_event)
  - [open イベント](/ja/docs/Web/API/RTCDataChannel/open_event)

- {{DOMxRef("RTCDtlsTransport")}}

  - [error イベント](/ja/docs/Web/API/RTCDtlsTransport/error_event)

- {{DOMxRef("RTCDTMFSender")}}

  - [tonechange イベント](/ja/docs/Web/API/RTCDTMFSender/tonechange_event)

- {{DOMxRef("RTCIceTransport")}}

  - [gatheringstatechange イベント](/ja/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - [selectedcandidatepairchange イベント](/ja/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - [statechange イベント](/ja/docs/Web/API/RTCIceTransport/statechange_event)

- {{DOMxRef("RTCPeerConnection")}}

  - [addstream イベント](/ja/docs/Web/API/RTCPeerConnection/addstream_event)
  - [connectionstatechange イベント](/ja/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - [datachannel イベント](/ja/docs/Web/API/RTCPeerConnection/datachannel_event)
  - [icecandidateerror イベント](/ja/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - [icecandidate イベント](/ja/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - [iceconnectionstatechange イベント](/ja/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - [icegatheringstatechange イベント](/ja/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - [negotiationneeded イベント](/ja/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - [removestream イベント](/ja/docs/Web/API/RTCPeerConnection/removestream_event)
  - [signalingstatechange イベント](/ja/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - [track イベント](/ja/docs/Web/API/RTCPeerConnection/track_event)

- {{DOMxRef("ScriptProcessorNode")}}

  - [audioprocess イベント](/ja/docs/Web/API/ScriptProcessorNode/audioprocess_event)

- {{DOMxRef("ServiceWorkerContainer")}}

  - [message イベント](/ja/docs/Web/API/ServiceWorkerContainer/message_event)

- {{DOMxRef("ServiceWorkerGlobalScope")}}

  - [activate イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - [contentdelete イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)
  - [install イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - [message イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - [notificationclick イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - [pushsubscriptionchange イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - [push イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/push_event)

- {{DOMxRef("SharedWorkerGlobalScope")}}

  - [connect イベント](/ja/docs/Web/API/SharedWorkerGlobalScope/connect_event)

- {{DOMxRef("SpeechRecognition")}}

  - [audioend イベント](/ja/docs/Web/API/SpeechRecognition/audioend_event)
  - [audiostart イベント](/ja/docs/Web/API/SpeechRecognition/audiostart_event)
  - [end イベント](/ja/docs/Web/API/SpeechRecognition/end_event)
  - [error イベント](/ja/docs/Web/API/SpeechRecognition/error_event)
  - [nomatch イベント](/ja/docs/Web/API/SpeechRecognition/nomatch_event)
  - [result イベント](/ja/docs/Web/API/SpeechRecognition/result_event)
  - [soundend イベント](/ja/docs/Web/API/SpeechRecognition/soundend_event)
  - [soundstart イベント](/ja/docs/Web/API/SpeechRecognition/soundstart_event)
  - [speechend イベント](/ja/docs/Web/API/SpeechRecognition/speechend_event)
  - [speechstart イベント](/ja/docs/Web/API/SpeechRecognition/speechstart_event)
  - [start イベント](/ja/docs/Web/API/SpeechRecognition/start_event)

- {{DOMxRef("SpeechSynthesis")}}

  - [voiceschanged イベント](/ja/docs/Web/API/SpeechSynthesis/voiceschanged_event)

- {{DOMxRef("SpeechSynthesisUtterance")}}

  - [boundary イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - [end イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - [error イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - [mark イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - [pause イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - [resume イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - [start イベント](/ja/docs/Web/API/SpeechSynthesisUtterance/start_event)

- {{DOMxRef("SVGAnimationElement")}}

  - [beginEvent イベント](/ja/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - [endEvent イベント](/ja/docs/Web/API/SVGAnimationElement/endEvent_event)
  - [repeatEvent イベント](/ja/docs/Web/API/SVGAnimationElement/repeatEvent_event)

- {{DOMxRef("SVGElement")}}

  - [abort イベント](/ja/docs/Web/API/SVGElement/abort_event)
  - [error イベント](/ja/docs/Web/API/SVGElement/error_event)
  - [load イベント](/ja/docs/Web/API/SVGElement/load_event)
  - [resize イベント](/ja/docs/Web/API/SVGElement/resize_event)
  - [scroll イベント](/ja/docs/Web/API/SVGElement/scroll_event)
  - [unload イベント](/ja/docs/Web/API/SVGElement/unload_event)

- {{DOMxRef("SVGGraphicsElement")}}

  - [copy イベント](/ja/docs/Web/API/SVGGraphicsElement/copy_event)
  - [cut イベント](/ja/docs/Web/API/SVGGraphicsElement/cut_event)
  - [paste イベント](/ja/docs/Web/API/SVGGraphicsElement/paste_event)

- {{DOMxRef("TextTrack")}}

  - [cuechange イベント](/ja/docs/Web/API/TextTrack/cuechange_event)

- {{DOMxRef("TextTrackList")}}

  - [addtrack イベント](/ja/docs/Web/API/TextTrackList/addtrack_event)
  - [change イベント](/ja/docs/Web/API/TextTrackList/change_event)
  - [removeTrack イベント](/ja/docs/Web/API/TextTrackList/removeTrack_event)

- {{DOMxRef("VideoTrackList")}}

  - [addtrack イベント](/ja/docs/Web/API/VideoTrackList/addtrack_event)
  - [change イベント](/ja/docs/Web/API/VideoTrackList/change_event)
  - [removetrack イベント](/ja/docs/Web/API/VideoTrackList/removetrack_event)

- {{DOMxRef("VisualViewport")}}

  - [resize イベント](/ja/docs/Web/API/VisualViewport/resize_event)
  - [scroll イベント](/ja/docs/Web/API/VisualViewport/scroll_event)

- {{DOMxRef("WebSocket")}}

  - [close イベント](/ja/docs/Web/API/WebSocket/close_event)
  - [error イベント](/ja/docs/Web/API/WebSocket/error_event)
  - [message イベント](/ja/docs/Web/API/WebSocket/message_event)
  - [open イベント](/ja/docs/Web/API/WebSocket/open_event)

- {{DOMxRef("Window")}}

  - [afterprint イベント](/ja/docs/Web/API/Window/afterprint_event)
  - [animationcancel イベント](/ja/docs/Web/API/Window/animationcancel_event)
  - [animationend イベント](/ja/docs/Web/API/Window/animationend_event)
  - [animationiteration イベント](/ja/docs/Web/API/Window/animationiteration_event)
  - [animationstart イベント](/ja/docs/Web/API/Window/animationstart_event)
  - [appinstalled イベント](/ja/docs/Web/API/Window/appinstalled_event)
  - [beforeprint イベント](/ja/docs/Web/API/Window/beforeprint_event)
  - [beforeunload イベント](/ja/docs/Web/API/Window/beforeunload_event)
  - [blur イベント](/ja/docs/Web/API/Window/blur_event)
  - [copy イベント](/ja/docs/Web/API/Window/copy_event)
  - [cut イベント](/ja/docs/Web/API/Window/cut_event)
  - [devicemotion イベント](/ja/docs/Web/API/Window/devicemotion_event)
  - [deviceorientation イベント](/ja/docs/Web/API/Window/deviceorientation_event)
  - [DOMContentLoaded イベント](/ja/docs/Web/API/Window/DOMContentLoaded_event)
  - [error イベント](/ja/docs/Web/API/Window/error_event)
  - [focus イベント](/ja/docs/Web/API/Window/focus_event)
  - [gamepadconnected イベント](/ja/docs/Web/API/Window/gamepadconnected_event)
  - [gamepaddisconnected イベント](/ja/docs/Web/API/Window/gamepaddisconnected_event)
  - [hashchange イベント](/ja/docs/Web/API/Window/hashchange_event)
  - [languagechange イベント](/ja/docs/Web/API/Window/languagechange_event)
  - [load イベント](/ja/docs/Web/API/Window/load_event)
  - [messageerror イベント](/ja/docs/Web/API/Window/messageerror_event)
  - [message イベント](/ja/docs/Web/API/Window/message_event)
  - [offline イベント](/ja/docs/Web/API/Window/offline_event)
  - [online イベント](/ja/docs/Web/API/Window/online_event)
  - [orientationchange イベント](/ja/docs/Web/API/Window/orientationchange_event)
  - [pagehide イベント](/ja/docs/Web/API/Window/pagehide_event)
  - [pageshow イベント](/ja/docs/Web/API/Window/pageshow_event)
  - [paste イベント](/ja/docs/Web/API/Window/paste_event)
  - [popstate イベント](/ja/docs/Web/API/Window/popstate_event)
  - [rejectionhandled イベント](/ja/docs/Web/API/Window/rejectionhandled_event)
  - [resize イベント](/ja/docs/Web/API/Window/resize_event)
  - [storage イベント](/ja/docs/Web/API/Window/storage_event)
  - [transitioncancel イベント](/ja/docs/Web/API/Window/transitioncancel_event)
  - [transitionend イベント](/ja/docs/Web/API/Window/transitionend_event)
  - [transitionrun イベント](/ja/docs/Web/API/Window/transitionrun_event)
  - [transitionstart イベント](/ja/docs/Web/API/Window/transitionstart_event)
  - [unhandledrejection イベント](/ja/docs/Web/API/Window/unhandledrejection_event)
  - [unload イベント](/ja/docs/Web/API/Window/unload_event)
  - [vrdisplayactivate イベント](/ja/docs/Web/API/Window/vrdisplayactivate_event)
  - [vrdisplayblur イベント](/ja/docs/Web/API/Window/vrdisplayblur_event)
  - [vrdisplayconnect イベント](/ja/docs/Web/API/Window/vrdisplayconnect_event)
  - [vrdisplaydeactivate イベント](/ja/docs/Web/API/Window/vrdisplaydeactivate_event)
  - [vrdisplaydisconnect イベント](/ja/docs/Web/API/Window/vrdisplaydisconnect_event)
  - [vrdisplayfocus イベント](/ja/docs/Web/API/Window/vrdisplayfocus_event)
  - [vrdisplaypointerrestricted イベント](/ja/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - [vrdisplaypointerunrestricted イベント](/ja/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - [vrdisplaypresentchange イベント](/ja/docs/Web/API/Window/vrdisplaypresentchange_event)

- {{DOMxRef("Worker")}}

  - [messageerror イベント](/ja/docs/Web/API/Worker/messageerror_event)
  - [message イベント](/ja/docs/Web/API/Worker/message_event)

- {{DOMxRef("WorkerGlobalScope")}}

  - [languagechange イベント](/ja/docs/Web/API/WorkerGlobalScope/languagechange_event)

- {{DOMxRef("XMLHttpRequest")}}

  - [abort イベント](/ja/docs/Web/API/XMLHttpRequest/abort_event)
  - [error イベント](/ja/docs/Web/API/XMLHttpRequest/error_event)
  - [loadend イベント](/ja/docs/Web/API/XMLHttpRequest/loadend_event)
  - [loadstart イベント](/ja/docs/Web/API/XMLHttpRequest/loadstart_event)
  - [load イベント](/ja/docs/Web/API/XMLHttpRequest/load_event)
  - [progress イベント](/ja/docs/Web/API/XMLHttpRequest/progress_event)
  - [timeout イベント](/ja/docs/Web/API/XMLHttpRequest/timeout_event)

- {{DOMxRef("XRReferenceSpace")}}

  - [reset イベント](/ja/docs/Web/API/XRReferenceSpace/reset_event)

- {{DOMxRef("XRSession")}}

  - [end イベント](/ja/docs/Web/API/XRSession/end_event)
  - [inputsourceschange イベント](/ja/docs/Web/API/XRSession/inputsourceschange_event)
  - [selectend イベント](/ja/docs/Web/API/XRSession/selectend_event)
  - [selectstart イベント](/ja/docs/Web/API/XRSession/selectstart_event)
  - [select イベント](/ja/docs/Web/API/XRSession/select_event)
  - [squeezeend イベント](/ja/docs/Web/API/XRSession/squeezeend_event)
  - [squeezestart イベント](/ja/docs/Web/API/XRSession/squeezestart_event)
  - [squeeze イベント](/ja/docs/Web/API/XRSession/squeeze_event)
  - [visibilitychange イベント](/ja/docs/Web/API/XRSession/visibilitychange_event)

- {{DOMxRef("XRSystem")}}

  - [devicechange イベント](/ja/docs/Web/API/XRSystem/devicechange_event)

## 仕様書

| 仕様書                                                                                                            | 状態                           | 備考 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#event-handler-attributes', 'event handlers')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'webappapis.html#event-handler-attributes', 'event handlers')}}     | {{Spec2('HTML5 W3C')}}     |         |

<section id="Quick_links"><ul><li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></ul>{{ListSubpages}}</section>
