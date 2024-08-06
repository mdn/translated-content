---
title: イベントリファレンス
slug: Web/Events
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

[イベント](/ja/docs/Learn/JavaScript/Building_blocks/Events)は、コードの実行に影響を与える可能性のある「興味深い変化」をコードに通知するために発行されます。これは、マウス操作やウィンドウのサイズ変更などのユーザー操作や、環境の変化 (バッテリー残量の低下や OS のメディアイベントなど)、その他の原因によって発行されます。

それぞれのイベントは、 {{domxref("Event")}} インターフェイスに基づいたオブジェクトで表現され、何が起こったかについての情報を提供するために、追加のカスタムフィールドや関数を持つことがあります。各イベントのドキュメントには、関連するイベントインターフェイスへのリンクや、その他の関連情報を含む表が (上部付近に) あります。イベントの種類の一覧は、[イベント > Event を基にしたインターフェイス](/ja/docs/Web/API/Event#introduction)にあります。

この記事では、興味のありそうな*主な*イベントの種類 (アニメーション、クリップボード、ワーカーなど) と、それらの種類のイベントを実装する主なクラスの索引を提供します。最後には、ドキュメント化されたすべてのイベントの一覧を掲載しています。

> [!NOTE]
> このページでは、ウェブ上で遭遇する最も一般的なイベントの多くをリストアップしています。ここに掲載されていないイベントを探している場合は、 MDN の他の部分でその名前、トピック領域、関連する仕様書を検索してみてください。

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
        <a href="/ja/docs/Web/API/Element#構成イベント"
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
            <a href="/ja/docs/Web/API/MutationEvent">Mutation イベント</a>は非推奨です。
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
          <a href="/ja/docs/Web/Manifest">プログレッシブウェブアプリのマニフェスト</a>のインストールに関するイベント。
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
        <a href="/ja/docs/Web/HTML/Element/audio#イベント">Element/audio</a>,
        <a href="/ja/docs/Web/HTML/Element/video#イベント">Element/video</a>
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

## 仕様書

{{Specifications}}

<section id="Quick_links">
  <ol>
    <li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">Introduction to events</a></li>
  </ol>{{ListSubpages}}
</section>
