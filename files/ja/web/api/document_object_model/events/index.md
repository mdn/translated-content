---
title: DOM イベント
short-title: イベントの扱い
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{DefaultAPISidebar("DOM")}}

[イベント](/ja/docs/Learn_web_development/Core/Scripting/Events)は、コードの実行に影響を与える可能性のある「興味深い変化」をコードに通知するために発行されます。これは、マウス操作やウィンドウのサイズ変更などのユーザー操作や、環境の変化（バッテリー残量の低下や OS のメディアイベントなど）、その他の原因によって発行されます。

それぞれのイベントは、 {{domxref("Event")}} インターフェイスに基づいたオブジェクトで表現され、何が起こったかについての情報を提供するために、追加のカスタムフィールドや関数を持つことがあります。各イベントのドキュメントには、関連するイベントインターフェイスへのリンクや、その他の関連情報を含む表が (上部付近に) あります。イベントの種類の一覧は、[イベント > Event を基にしたインターフェイス](/ja/docs/Web/API/Event#event_を基にしたインターフェイス)にあります。

この記事では、興味のありそうな主なイベントの種類 (アニメーション、クリップボード、ワーカーなど) と、それらの種類のイベントを実装する主なクラスの索引を提供します。最後には、文書化されているすべてのイベントの一覧を掲載しています。

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
          <a href="/ja/docs/Web/API/Web_Animations_API">ウェブアニメーション API</a> に関するイベント。
        </p>
        <p>
          アニメーション状態の変化 (例えば、アニメーションの開始または終了) に応答するために使用される。
        </p>
      </td>
      <td>
        アニメーションイベントは
        <a href="/ja/docs/Web/API/Document#アニメーションイベント"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/Window#アニメーションイベント"
          ><code>Window</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLElement#アニメーションイベント"
          ><code>HTMLElement</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>非同期データ読み取り</td>
      <td><p>データの読み取りに関するイベント。</p></td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/AbortSignal#イベント"
          ><code>AbortSignal</code></a
        >,
        <a href="/ja/docs/Web/API/XMLHttpRequest#イベント"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/ja/docs/Web/API/FileReader#イベント"
          ><code>FileReader</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>クリップボード</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Clipboard_API">クリップボード API</a>
          に関するイベント。
        </p>
        <p>コンテンツが切り取り、コピー、貼り付けされたときを知るために使用。</p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Document#クリップボード"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/Element#クリップボード"
          ><code>Element</code></a
        >,
        <a href="/ja/docs/Web/API/Window#クリップボード"
          ><code>Window</code></a
        > で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/Element#変換イベント"
          ><code>Element</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>CSS トランジション</td>
      <td>
        <p>
          <a href="/ja/docs/Web/CSS/CSS_transitions">CSS トランジション</a>に関するイベント。
        </p>
        <p>
          CSS トランジションの開始、終了、キャンセルなどの時の通知イベントを提供する。
        </p>
      </td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Document#トランジションイベント"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLElement#トランジションイベント"
          ><code>HTMLElement</code></a
        >,
        <a href="/ja/docs/Web/API/Window#トランジションイベント"
          ><code>Window</code></a
        > で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/IDBDatabase#イベント"
          ><code>IDBDatabase</code></a
        >,
        <a href="/ja/docs/Web/API/IDBOpenDBRequest#イベント"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/ja/docs/Web/API/IDBRequest#イベント"
          ><code>IDBRequest</code></a
        >,
        <a href="/ja/docs/Web/API/IDBTransaction#イベント"
          ><code>IDBTransaction</code></a
        > で発行される。
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
            <a href="/ja/docs/Web/API/MutationEvent">変化イベント</a>は非推奨です。
            代わりに <a href="/ja/docs/Web/API/MutationObserver"
              >Mutation Observer</a
            >
            を使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>ドラッグ＆ドロップ、ホイール</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API"
            >HTML ドラッグ＆ドロップ API</a
          >
          に関するイベントや<a href="/ja/docs/Web/API/WheelEvent">ホイールイベント</a>。
        </p>
        <p>
          ドラッグイベントやホイールイベントは、マウスイベントから派生したものです。これらのイベントは、マウスホイールやドラッグ/ドロップを使用したときに発行されますが、他の適切なハードウェアでも使用されることがあります。
        </p>
      </td>
      <td>
        <p>
          ドラッグイベントは
          <a href="/ja/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          > で発行される。
        </p>
        <p>
          ホイールイベントは
          <a href="/ja/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          > で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>フォーカス</td>
      <td><p>要素がフォーカスを得たり失ったりすることに関するイベント。</p></td>
      <td>
        イベントは <a href="/ja/docs/Web/API/Element#フォーカスイベント"
          ><code>Element</code></a
        >,
        <a href="/ja/docs/Web/API/Window#フォーカスイベント"><code>Window</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>フォーム</td>
      <td>
        <p>フォームが構築されたり、リセットされたり、送信されたりすることに関するイベント。</p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/HTMLFormElement#イベント"
          ><code>HTMLFormElement</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>全画面</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Fullscreen_API">全画面 API</a> に関するイベント。
        </p>
        <p>
          全画面モードとウィンドウモードの間で遷移したとき、この遷移の間でエラーが発生したときの通知に使用。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Document#全画面イベント"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/Element#全画面イベント"
          ><code>Element</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>ゲームパッド</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Gamepad_API">ゲームパッド API</a>
          に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Window#ゲームパッドイベント"
          ><code>Window</code></a
        > で発行される。
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
          イベントは
          <a href="/ja/docs/Web/API/Document#タッチイベント"
            ><code>Document</code></a
          >,
          <a href="/ja/docs/Web/API/Element#タッチイベント"
            ><code>Element</code></a
          > で発行される。
        </p>
        <p>加えて、いくつもの標準外のジェスチャーイベントが存在する。</p>
        <ul>
          <li>
            標準外の WebKit 固有のイベントは
            <a href="/ja/docs/Web/API/Element#タッチイベント"
              ><code>Element</code></a
            >:
            <a href="/ja/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code> イベント</a
            >,
            <a href="/ja/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code> イベント</a
            >,
            <a href="/ja/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code> イベント</a
            >。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>履歴</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/History_API">履歴 API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Window#履歴イベント"
          ><code>Window</code></a
        > で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/HTMLDetailsElement#イベント"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLDialogElement#イベント"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLSlotElement#イベント"
          ><code>HTMLSlotElement</code></a
        > で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/HTMLElement#入力イベント"
          ><code>HTMLElement</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLInputElement#イベント"
          ><code>HTMLInputElement</code></a
        > で発行される。
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
        イベントは <a href="/ja/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>文書の読み込み/アンロード</td>
      <td><p>文書の読み込みやアンロードに関するイベント。</p></td>
      <td>
        <p>
          イベントは <a href="/ja/docs/Web/API/Document#ロード＆アンロードイベント"
            ><code>Document</code></a
          >
          や
          <a href="/ja/docs/Web/API/Window#ロード＆アンロードイベント"
            ><code>Window</code></a
          > で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>マニフェスト</td>
      <td>
        <p>
          <a href="/ja/docs/Web/Progressive_web_apps/Manifest">プログレッシブウェブアプリのマニフェスト</a>のインストールに関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Window#マニフェストイベント"
          ><code>Window</code></a
        > で発行される。
      </td>
    </tr>
    <tr id="media">
      <td>メディア</td>
      <td>
        <p>
          メディアの使用 (<a href="/ja/docs/Web/API/Media_Capture_and_Streams_API#イベント"
            >メディアキャプチャとストリーム API</a
          >、
          <a href="/ja/docs/Web/API/Web_Audio_API#イベント">ウェブオーディオ API</a>、
          <a href="/ja/docs/Web/API/Picture-in-Picture_API#イベント">ピクチャインピクチャ API</a>、など) に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/ScriptProcessorNode#イベント"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLMediaElement#イベント"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/ja/docs/Web/API/AudioTrackList#イベント"
          ><code>AudioTrackList</code></a
        >,
        <a href="/ja/docs/Web/API/AudioScheduledSourceNode#イベント"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/ja/docs/Web/API/MediaRecorder#イベント"
          ><code>MediaRecorder</code></a
        >,
        <a href="/ja/docs/Web/API/MediaStream#イベント"
          ><code>MediaStream</code></a
        >,
        <a href="/ja/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/ja/docs/Web/API/VideoTrackList#イベント"
          ><code>VideoTrackList</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLTrackElement#イベント"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/ja/docs/Web/API/OfflineAudioContext#イベント"
          ><code>OfflineAudioContext</code></a
        >,
        <a href="/ja/docs/Web/API/TextTrack#イベント"><code>TextTrack</code></a
        >,
        <a href="/ja/docs/Web/API/TextTrackList#イベント"
          ><code>TextTrackList</code></a
        >,
        <a href="/ja/docs/Web/HTML/Reference/Elements/audio#イベント">Element/audio</a>,
        <a href="/ja/docs/Web/HTML/Reference/Elements/video#イベント">Element/video</a>
        で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/Window#メッセージングイベント"
          ><code>Window</code></a
        > で発行される。
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
        マウスイベントは
        <a href="/ja/docs/Web/API/Element#mouse_events"
          ><code>Element</code></a
        > で発行されます。
      </td>
    </tr>
    <tr>
      <td>ネットワーク/接続</td>
      <td><p>ネットワーク接続が得られた、または失われたことに関するイベント。</p></td>
      <td>
        <p>
          イベントは
          <a href="/ja/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          > で発行される。
        </p>
        <p>
          イベントは
          <a href="/ja/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/ja/docs/Web/API/Network_Information_API"
            >ネットワーク情報 API</a
          >) で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>決済</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Payment_Request_API"
            >決済リクエスト API</a
          > に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは
          <a href="/ja/docs/Web/API/PaymentRequest#イベント"
            ><code>PaymentRequest</code></a
          >,
          <a href="/ja/docs/Web/API/PaymentResponse#イベント"
            ><code>PaymentResponse</code></a
          > で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>パフォーマンス</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Performance_API"
            >パフォーマンス API</a
          > に分類されたパフォーマンス関連仕様書に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは
          <a href="/ja/docs/Web/API/Performance#イベント"
            ><code>Performance</code></a
          > で発行される。
        </p>
      </td>
    </tr>
    <tr>
      <td>ポインター</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Pointer_events">ポインターイベント API</a> に関するイベント。
        </p>
        <p>
          マウス、タッチ、ペン/スタイラスなどのポインティングデバイスから、ハードウェアに依存しない通知を提供する。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Document#ポインターイベント"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/HTMLElement#ポインターイベント"
          ><code>HTMLElement</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>印刷</td>
      <td><p>印刷に関するイベント。</p></td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Window#印刷イベント"><code>Window</code></a> で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/Window#プロミス拒否イベント"
          ><code>Window</code></a
        > で発行される。
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
        イベントは <a href="/ja/docs/Web/API/WebSocket#イベント"><code>Websocket</code></a> で発行される。
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>SVG 画像に関するイベント。</p></td>
      <td>
        <p>
          イベントは
          <a href="/ja/docs/Web/API/SVGElement#イベント"
            ><code>SVGElement</code></a
          >,
          <a href="/ja/docs/Web/API/SVGAnimationElement#イベント"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/ja/docs/Web/API/SVGGraphicsElement#イベント"
            ><code>SVGGraphicsElement</code></a
          > で発行される。
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
          イベント (<code>selectionchange</code>) は、
          {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}}、{{domxref("HTMLInputElement/selectionchange_event", "HTMLInputElement")}} で発行される。
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
          タッチ反応画面 (すなわち指またはスタイラスを使用したもの) の操作による通知イベントを提供する。
          <a href="/ja/docs/Web/API/Force_Touch_events#イベント"
            >Force Touch API</a
          > に関するものではない。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/Document#タッチイベント"
          ><code>Document</code></a
        >,
        <a href="/ja/docs/Web/API/Element#タッチイベント"
          ><code>Element</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>バーチャルリアリティ</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/WebXR_Device_API">WebXR 機器 API</a> に関するイベント。
        </p>
        <div class="notecard warning">
          <p>
            <strong>警告:</strong> <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> (および関連する
            <a href="/ja/docs/Web/API/Window#webvr_イベント"
              ><code>Window</code> イベント</a
            >) は非推奨です。
          </p>
        </div>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/XRSystem#イベント"><code>XRSystem</code></a
        >,
        <a href="/ja/docs/Web/API/XRSession#イベント"><code>XRSession</code></a
        >,
        <a href="/ja/docs/Web/API/XRReferenceSpace#イベント"
          ><code>XRReferenceSpace</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>RTC (リアルタイムコミュニケーション)</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/WebRTC_API">WebRTC API</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/RTCDataChannel#イベント"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/ja/docs/Web/API/RTCDTMFSender#イベント"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/ja/docs/Web/API/RTCIceTransport#イベント"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/ja/docs/Web/API/RTCPeerConnection#イベント"
          ><code>RTCPeerConnection</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>サーバー送信イベント</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Server-sent_events"
            >サーバー送信イベント API</a
          > に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/EventSource#イベント"
          ><code>EventSource</code></a
        > で発行される。
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
        イベントは
        <a href="/ja/docs/Web/API/SpeechSynthesisUtterance#イベント"
          ><code>SpeechSynthesisUtterance</code></a
        > で発行される。
      </td>
    </tr>
    <tr>
      <td>ワーカー</td>
      <td>
        <p>
          <a href="/ja/docs/Web/API/Web_Workers_API">ウェブワーカー API</a>,
          <a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカー API</a
          >,
          <a href="/ja/docs/Web/API/Broadcast_Channel_API"
            >ブロードキャストチャンネル API</a
          >,
          <a href="/ja/docs/Web/API/Channel_Messaging_API"
            >チャンネルメッセージング API</a
          > に関するイベント。
        </p>
        <p>
          新しいメッセージやメッセージ送信エラーに応答するために使用されます。サービスワーカーは、プッシュ通知、表示された通知をユーザーがクリックしたこと、プッシュ購読が無効になったこと、コンテンツインデックスからアイテムが削除されたことなど、その他のイベントを通知することもできます。
        </p>
      </td>
      <td>
        イベントは
        <a href="/ja/docs/Web/API/ServiceWorkerGlobalScope#イベント"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/ja/docs/Web/API/DedicatedWorkerGlobalScope#イベント"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/ja/docs/Web/API/SharedWorkerGlobalScope#イベント"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/ja/docs/Web/API/WorkerGlobalScope#イベント"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/ja/docs/Web/API/Worker#イベント"
          ><code>Worker</code></a
        >,
        <a href="/ja/docs/Web/API/BroadcastChannel#イベント"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/ja/docs/Web/API/MessagePort#イベント"
          ><code>MessagePort</code></a
        > で発行されます。
      </td>
    </tr>
  </tbody>
</table>

## イベントの作成と配信

組み込みインターフェイスによって発行されるイベントに加えて、DOM イベントを自分で作成して配信することができます。このようなイベントは、ブラウザーによって発行されるイベントとは対照的に、一般に「合成イベント」と呼ばれます。

## カスタムイベントの作成

イベントは、次のように [`Event`](/ja/docs/Web/API/Event) コンストラクターを使用して作成できます。

```js
const event = new Event("build");

// イベントを待ち受けする
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// イベントを配信する
elem.dispatchEvent(event);
```

上記のコード例は [EventTarget.dispatchEvent()](/ja/docs/Web/API/EventTarget/dispatchEvent) メソッドを使用します。

### カスタムデータの追加 – CustomEvent()

イベントオブジェクトにデータを追加するには、[CustomEvent](/ja/docs/Web/API/CustomEvent) インターフェイスが存在し、**detail** プロパティを使用してカスタムデータを渡すことができます。
たとえば、イベントは次のようにして作成することができます。

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

これにより、イベントリスナー内の追加データにアクセスすることができます。

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### カスタムデータの追加 - Event のサブクラス化

[`Event`](/ja/docs/Web/API/Event) インターフェイスもサブクラス化することができます。これは、再利用や、より複雑な独自のデータ、あるいはイベントにメソッドを追加する場合などに特に有益です。

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

このサンプルコードは、読み取り専用のプロパティと固定イベント型を持つ `BuildEvent` クラスを定義しています。

このイベントは、次のように作成できます。

```js
const event = new BuildEvent(elem.dataset.time);
```

追加のデータは、独自のプロパティを使用して、イベントリスナーでアクセスすることができます。

```js
function eventHandler(e) {
  console.log(`時刻: ${e.buildTime}`);
}
```

### イベントのバブリング

子要素からイベントを起動させ、祖先要素がそれを、任意でデータも、受け取りたい場合がよくあります。

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// 新しいイベントを生成し、バブリングを許可し、 "detail" プロパティに渡したいデータを設定する
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// フォームイベントが "awesome" カスタムイベントを待ち受けし、渡されたものの text() メソッドをコンソールに出力する
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// ユーザー型の場合、 form 内の textarea は発生させるイベントを起動・処理し、それを開始点として使用する
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### イベントの動的な生成と処理

要素はまだ作成されていないイベントを待ち受けすることができます。

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // イベントをその場で作成、配信/起動する
  // メモ: オプションとして、「アロー関数式」の代わりに「関数式」を活用して、 "this" が要素を表すようにしています。
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

### 組み込みイベントの起動

この例では、 DOM メソッドを使用してチェックボックスでクリック (プログラムでクリックイベントを生成する) をシミュレートする方法を示します。[デモを見る](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)。

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // preventDefault というハンドラーが呼び出されます。
    alert("キャンセルされました");
  } else {
    // 呼び出されたハンドラーはどれも preventDefault を呼び出していません。
    alert("キャンセルされていません");
  }
}
```

## イベントハンドラーの登録

ハンドラーの登録には、推奨される方法が 2 つあります。イベントハンドラーのコードは、ターゲットとなる要素の対応する _onイベント名_ プロパティに代入して、イベントが起動されたときに実行されるようにするか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用して、ハンドラーを要素のリスナーとして登録するかすることができます。いずれの場合も、ハンドラーは [`Event` インターフェイス](/ja/docs/Web/API/Event) (または[派生インターフェイス](/ja/docs/Web/API/Event#event_を基にしたインターフェイス)) に準拠したオブジェクトを受け取ります。主な違いは、イベントリスナーのメソッドを使うと、複数のイベントハンドラーを追加 (または削除) できることです。

> [!WARNING]
> 第 3 の方法として、 HTML の onイベント名 属性を使ってイベントハンドラーを設定する方法がありますが、お勧めしません。これはマークアップを膨張させ、可読性を低下させ、デバッグを困難にします。詳しくは、[インラインイベントハンドラー](/ja/docs/Learn_web_development/Core/Scripting/Events#インラインイベントハンドラー_—_使用しないでください)を参照してください。

### onevent プロパティの使用

慣習上、イベントを発行する JavaScript オブジェクトには、それに対応する "onevent" プロパティ (イベント名の前に "on" を付けて命名) があります。これらのプロパティは、イベントが発行されたときに、関連するハンドラーコードを実行するために呼び出されます。

イベントハンドラーのコードを設定するには、適切な onevent プロパティに代入してください。 1 つの要素のそれぞれのイベントに対して、割り当てることができるイベントハンドラーは 1 つだけです。必要に応じて、同じプロパティに別の関数を代入することで、ハンドラーを置き換えることができます。

以下の例では、 `greet()` 関数を `click` イベントに割り当てるために `onclick` プロパティを使用しています。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

なお、イベントハンドラーの第一引数には、イベントを表すオブジェクトが渡されます。このイベントオブジェクトは、 {{domxref("Event")}} インターフェイスを実装しているか、またはそれを継承しています。

### EventTarget.addEventListener

要素にイベントハンドラーを設定する最も柔軟な方法は、 {{domxref("EventTarget.addEventListener")}} メソッドを使用することです。この方法では、複数のリスナーを 1 つの要素に割り当てることができ、必要に応じて ({{domxref("EventTarget.removeEventListener")}} を使用して) リスナーを削除することができます。

> [!NOTE]
> イベントハンドラーの追加と削除ができることで、例えば、同じボタンで状況によって異なるアクションを実行することができます。また、より複雑なプログラムでは、古い、使われていないイベントハンドラーを整理することで、効率を上げることができます。

以下では、単純な `greet()` 関数をクリックイベントのリスナーまたはイベントハンドラーとして設定する方法を示します (必要に応じて、名前付き関数の代わりにラムダ関数を使用することもできます)。繰り返しますが、イベントは、イベントハンドラーの第一引数として渡されます。

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

このメソッドは、イベントのキャプチャおよび削除の制御をするために、追加の引数/オプションを取ることもできます。詳細については、 {{domxref("EventTarget.addEventListener")}} のリファレンスページを参照してください。

#### 中止シグナルの使用

イベントリスナーの注目すべき機能は、中止シグナルを使って複数のイベントハンドラーを同時にクリーンアップできることです。

これは、同じ {{domxref("AbortSignal")}} を、一緒に削除できるようにしたいすべてのイベントハンドラーの {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 呼び出しに渡すことで行われます。その後、 `AbortSignal` を所有するコントローラーで {{domxref("AbortController/abort()", "abort()")}} を呼び出すと、そのシグナルで追加されたすべてのイベントハンドラーが削除されます。例えば、 `AbortSignal` で削除できるイベントハンドラーを追加するには、次のようにします。

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // このハンドラーに AbortSignal を渡す
```

上記のコードで生成したイベントハンドラーは、次のようにして削除することができます。

```js
controller.abort(); // このコントローラーに関連付けられたすべてのイベントハンドラーを削除
```

## 仕様書

{{Specifications}}

## 関連情報

- [イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- [イベントのバブリング](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)
