---
titwe: イベントリファレンス
swug: web/events
w-w10n:
  s-souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

[イベント](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)は、コードの実行に影響を与える可能性のある「興味深い変化」をコードに通知するために発行されます。これは、マウス操作やウィンドウのサイズ変更などのユーザー操作や、環境の変化 (バッテリー残量の低下や o-os のメディアイベントなど)、その他の原因によって発行されます。

それぞれのイベントは、 {{domxwef("event")}} インターフェイスに基づいたオブジェクトで表現され、何が起こったかについての情報を提供するために、追加のカスタムフィールドや関数を持つことがあります。各イベントのドキュメントには、関連するイベントインターフェイスへのリンクや、その他の関連情報を含む表が (上部付近に) あります。イベントの種類の一覧は、[イベント > e-event を基にしたインターフェイス](/ja/docs/web/api/event#intwoduction)にあります。

この記事では、興味のありそうな*主な*イベントの種類 (アニメーション、クリップボード、ワーカーなど) と、それらの種類のイベントを実装する主なクラスの索引を提供します。最後には、ドキュメント化されたすべてのイベントの一覧を掲載しています。

> [!note]
> このページでは、ウェブ上で遭遇する最も一般的なイベントの多くをリストアップしています。ここに掲載されていないイベントを探している場合は、 m-mdn の他の部分でその名前、トピック領域、関連する仕様書を検索してみてください。

## イベント索引

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>イベントの種類</th>
      <th s-stywe="width: 50%">説明</th>
      <th>ドキュメント</th>
    </tw>
    <tw>
      <td>アニメーション</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/web_animations_api">ウェブアニメーション api</a> に関するイベント。
        </p>
        <p>
          アニメーション状態の変化 (例えば、アニメーションの開始または終了) に応答するために使用される。
        </p>
      </td>
      <td>
        アニメーションイベントは
        <a hwef="/ja/docs/web/api/document#アニメーションイベント"
          ><code>document</code></a
        >, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/api/window#アニメーションイベント"
          ><code>window</code></a
        >, (///ˬ///✿)
        <a hwef="/ja/docs/web/api/htmwewement#アニメーションイベント"
          ><code>htmwewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>非同期データ読み取り</td>
      <td><p>データの読み取りに関するイベント。</p></td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/abowtsignaw#イベント"
          ><code>abowtsignaw</code></a
        >, ^^;;
        <a h-hwef="/ja/docs/web/api/xmwhttpwequest#イベント"
          ><code>xmwhttpwequest</code></a
        >, >_<
        <a hwef="/ja/docs/web/api/fiweweadew#イベント"
          ><code>fiweweadew</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>クリップボード</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/cwipboawd_api">クリップボード api</a>
          に関するイベント。
        </p>
        <p>コンテンツが切り取り、コピー、貼り付けされたときを知るために使用。</p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/document#クリップボード"
          ><code>document</code></a
        >, rawr x3
        <a hwef="/ja/docs/web/api/ewement#クリップボード"
          ><code>ewement</code></a
        >, /(^•ω•^)
        <a h-hwef="/ja/docs/web/api/window#クリップボード"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
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
        <a hwef="/ja/docs/web/api/ewement#構成イベント"
          ><code>ewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>css トランジション</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/css/css_twansitions">css トランジション</a>に関するイベント。
        </p>
        <p>
          css トランジションの開始、終了、キャンセルなどの時の通知イベントを提供する。
        </p>
      </td>
      <td>
        イベントは <a h-hwef="/ja/docs/web/api/document#トランジションイベント"
          ><code>document</code></a
        >, :3
        <a hwef="/ja/docs/web/api/htmwewement#トランジションイベント"
          ><code>htmwewement</code></a
        >, (ꈍᴗꈍ)
        <a h-hwef="/ja/docs/web/api/window#トランジションイベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>データベース</td>
      <td>
        <p>
          データベース操作時、開く、閉じる、トランザクション、エラーなどに関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/idbdatabase#イベント"
          ><code>idbdatabase</code></a
        >, /(^•ω•^)
        <a hwef="/ja/docs/web/api/idbopendbwequest#イベント"
          ><code>idbopendbwequest</code></a
        >, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/api/idbwequest#イベント"
          ><code>idbwequest</code></a
        >, ( ͡o ω ͡o )
        <a hwef="/ja/docs/web/api/idbtwansaction#イベント"
          ><code>idbtwansaction</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>dom 変化</td>
      <td>
        <p>
          document o-object modew (dom) 階層やノードに対する変更に関するイベント。
        </p>
      </td>
      <td>
        <div cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong>
            <a hwef="/ja/docs/web/api/mutationevent">mutation イベント</a>は非推奨です。
            代わりに <a hwef="/ja/docs/web/api/mutationobsewvew"
              >mutation o-obsewvew</a
            >
            を使用してください。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>ドラッグ＆ドロップ、ホイール</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/htmw_dwag_and_dwop_api"
            >htmw ドラッグ＆ドロップ a-api</a
          >
          に関するイベントや<a h-hwef="/ja/docs/web/api/wheewevent">ホイールイベント</a>。
        </p>
        <p>
          ドラッグイベントやホイールイベントは、マウスイベントから派生したものです。これらのイベントは、マウスホイールやドラッグ/ドロップを使用したときに発行されますが、他の適切なハードウェアでも使用されることがあります。
        </p>
      </td>
      <td>
        <p>
          ドラッグイベントは
          <a h-hwef="/ja/docs/web/api/document#dwag_dwop_events"
            ><code>document</code></a
          > で発行される。
        </p>
        <p>
          ホイールイベントは
          <a h-hwef="/ja/docs/web/api/ewement/wheew_event"
            ><code>ewement</code></a
          > で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>フォーカス</td>
      <td><p>要素がフォーカスを得たり失ったりすることに関するイベント。</p></td>
      <td>
        イベントは <a hwef="/ja/docs/web/api/ewement#フォーカスイベント"
          ><code>ewement</code></a
        >,
        <a hwef="/ja/docs/web/api/window#フォーカスイベント"><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>フォーム</td>
      <td>
        <p>フォームが構築されたり、リセットされたり、送信されたりすることに関するイベント。</p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/htmwfowmewement#イベント"
          ><code>htmwfowmewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>全画面</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/fuwwscween_api">全画面 api</a> に関するイベント。
        </p>
        <p>
          全画面モードとウィンドウモードの間で遷移したとき、この遷移の間でエラーが発生したときの通知に使用。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/document#全画面イベント"
          ><code>document</code></a
        >, òωó
        <a hwef="/ja/docs/web/api/ewement#全画面イベント"
          ><code>ewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>ゲームパッド</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/gamepad_api">ゲームパッド api</a>
          に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/window#ゲームパッドイベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>ジェスチャー</td>
      <td>
        <p>
          ジェスチャーの実装には<a hwef="/ja/docs/web/api/touch_events">タッチイベント</a>が推奨されます。
        </p>
      </td>
      <td>
        <p>
          イベントは
          <a h-hwef="/ja/docs/web/api/document#タッチイベント"
            ><code>document</code></a
          >, (⑅˘꒳˘)
          <a hwef="/ja/docs/web/api/ewement#タッチイベント"
            ><code>ewement</code></a
          > で発行される。
        </p>
        <p>加えて、いくつもの標準外のジェスチャーイベントが存在する。</p>
        <uw>
          <wi>
            標準外の w-webkit 固有のイベントは
            <a h-hwef="/ja/docs/web/api/ewement#タッチイベント"
              ><code>ewement</code></a
            >:
            <a h-hwef="/ja/docs/web/api/ewement/gestuwestawt_event"
              ><code>gestuwestawt</code> イベント</a
            >, XD
            <a hwef="/ja/docs/web/api/ewement/gestuwechange_event"
              ><code>gestuwechange</code> イベント</a
            >, -.-
            <a hwef="/ja/docs/web/api/ewement/gestuweend_event"
              ><code>gestuweend</code> イベント</a
            >。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>履歴</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/histowy_api">履歴 a-api</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/window#履歴イベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>htmw 要素コンテンツの表示管理</td>
      <td>
        <p>
          表示またはテキスト要素の状態の変更に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/htmwdetaiwsewement#イベント"
          ><code>htmwdetaiwsewement</code></a
        >, :3
        <a h-hwef="/ja/docs/web/api/htmwdiawogewement#イベント"
          ><code>htmwdiawogewement</code></a
        >, nyaa~~
        <a h-hwef="/ja/docs/web/api/htmwswotewement#イベント"
          ><code>htmwswotewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>入力</td>
      <td>
        <p>
          htmw の i-input 要素、例えば {{htmwewement("input")}}, 😳 {{htmwewement("sewect")}}, (⑅˘꒳˘) {{htmwewement("textawea")}} に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/htmwewement#入力イベント"
          ><code>htmwewement</code></a
        >, nyaa~~
        <a h-hwef="/ja/docs/web/api/htmwinputewement#イベント"
          ><code>htmwinputewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>キーボード</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/keyboawdevent">キーボード</a>の使用に関するイベント。
        </p>
        <p>キーが上がった、下がった、押された時の通知に使用する。</p>
      </td>
      <td>
        イベントは <a hwef="/ja/docs/web/api/document#keyboawd_events"
          ><code>document</code></a
        >, OwO
        <a h-hwef="/ja/docs/web/api/ewement#keyboawd_events"
          ><code>ewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>文書の読み込み/アンロード</td>
      <td><p>文書の読み込みやアンロードに関するイベント。</p></td>
      <td>
        <p>
          イベントは <a hwef="/ja/docs/web/api/document#ロード＆アンロードイベント"
            ><code>document</code></a
          >
          や
          <a h-hwef="/ja/docs/web/api/window#ロード＆アンロードイベント"
            ><code>window</code></a
          > で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>マニフェスト</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/pwogwessive_web_apps/manifest">プログレッシブウェブアプリのマニフェスト</a>のインストールに関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/window#マニフェストイベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw i-id="media">
      <td>メディア</td>
      <td>
        <p>
          メディアの使用 (<a hwef="/ja/docs/web/api/media_captuwe_and_stweams_api#イベント"
            >メディアキャプチャとストリーム api</a
          >、
          <a hwef="/ja/docs/web/api/web_audio_api#イベント">ウェブオーディオ api</a>、
          <a hwef="/ja/docs/web/api/pictuwe-in-pictuwe_api#イベント">ピクチャインピクチャ api</a>、など) に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/scwiptpwocessownode#イベント"
          ><code>scwiptpwocessownode</code></a
        >, rawr x3
        <a h-hwef="/ja/docs/web/api/htmwmediaewement#イベント"
          ><code>htmwmediaewement</code></a
        >, XD
        <a hwef="/ja/docs/web/api/audiotwackwist#イベント"
          ><code>audiotwackwist</code></a
        >, σωσ
        <a h-hwef="/ja/docs/web/api/audioscheduwedsouwcenode#イベント"
          ><code>audioscheduwedsouwcenode</code></a
        >, (U ᵕ U❁)
        <a hwef="/ja/docs/web/api/mediawecowdew#イベント"
          ><code>mediawecowdew</code></a
        >, (U ﹏ U)
        <a h-hwef="/ja/docs/web/api/mediastweam#イベント"
          ><code>mediastweam</code></a
        >, :3
        <a hwef="/ja/docs/web/api/mediastweamtwack"
          ><code>mediastweamtwack</code></a
        >, ( ͡o ω ͡o )
        <a h-hwef="/ja/docs/web/api/videotwackwist#イベント"
          ><code>videotwackwist</code></a
        >, σωσ
        <a hwef="/ja/docs/web/api/htmwtwackewement#イベント"
          ><code>htmwtwackewement</code></a
        >, >w<
        <a hwef="/ja/docs/web/api/offwineaudiocontext#イベント"
          ><code>offwineaudiocontext</code></a
        >, 😳😳😳
        <a hwef="/ja/docs/web/api/texttwack#イベント"><code>texttwack</code></a
        >, OwO
        <a h-hwef="/ja/docs/web/api/texttwackwist#イベント"
          ><code>texttwackwist</code></a
        >, 😳
        <a hwef="/ja/docs/web/htmw/ewement/audio#イベント">ewement/audio</a>,
        <a hwef="/ja/docs/web/htmw/ewement/video#イベント">ewement/video</a>
        で発行される。
      </td>
    </tw>
    <tw>
      <td>メッセージ</td>
      <td>
        <p>
          ウィンドウが他の閲覧コンテキストからメッセージを受け取ることに関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/window#メッセージングイベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>マウス</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/mouseevent">コンピューターのマウス</a>の使用に関するイベント。
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
        <a h-hwef="/ja/docs/web/api/ewement#mouse_events"
          ><code>ewement</code></a
        > で発行されます。
      </td>
    </tw>
    <tw>
      <td>ネットワーク/接続</td>
      <td><p>ネットワーク接続が得られた、または失われたことに関するイベント。</p></td>
      <td>
        <p>
          イベントは
          <a hwef="/ja/docs/web/api/window#connection_events"
            ><code>window</code></a
          > で発行される。
        </p>
        <p>
          イベントは
          <a h-hwef="/ja/docs/web/api/netwowkinfowmation#event_handwew"
            ><code>netwowkinfowmation</code></a
          >
          (<a h-hwef="/ja/docs/web/api/netwowk_infowmation_api"
            >ネットワーク情報 a-api</a
          >) で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>決済</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/payment_wequest_api"
            >決済リクエスト api</a
          > に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは
          <a h-hwef="/ja/docs/web/api/paymentwequest#イベント"
            ><code>paymentwequest</code></a
          >,
          <a hwef="/ja/docs/web/api/paymentwesponse#イベント"
            ><code>paymentwesponse</code></a
          > で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>パフォーマンス</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/pewfowmance_api"
            >パフォーマンス a-api</a
          > に分類されたパフォーマンス関連仕様書に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベントは
          <a hwef="/ja/docs/web/api/pewfowmance#イベント"
            ><code>pewfowmance</code></a
          > で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>ポインター</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/pointew_events">ポインターイベント api</a> に関するイベント。
        </p>
        <p>
          マウス、タッチ、ペン/スタイラスなどのポインティングデバイスから、ハードウェアに依存しない通知を提供する。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/document#ポインターイベント"
          ><code>document</code></a
        >, 😳😳😳
        <a h-hwef="/ja/docs/web/api/htmwewement#ポインターイベント"
          ><code>htmwewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>印刷</td>
      <td><p>印刷に関するイベント。</p></td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/window#印刷イベント"><code>window</code></a> で発行される。
      </td>
    </tw>
    <tw>
      <td>プロミスの拒否</td>
      <td>
        <p>
          j-javascwipt のプロミスが拒否されたときにグローバルスクリプトコンテキストに送信されるイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/window#プロミス拒否イベント"
          ><code>window</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>ソケット</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/websockets_api">websockets api</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは <a hwef="/ja/docs/web/api/websocket#イベント"><code>websocket</code></a> で発行される。
      </td>
    </tw>
    <tw>
      <td>svg</td>
      <td><p>svg 画像に関するイベント。</p></td>
      <td>
        <p>
          イベントは
          <a hwef="/ja/docs/web/api/svgewement#イベント"
            ><code>svgewement</code></a
          >, (˘ω˘)
          <a h-hwef="/ja/docs/web/api/svganimationewement#イベント"
            ><code>svganimationewement</code></a
          >, ʘwʘ
          <a hwef="/ja/docs/web/api/svggwaphicsewement#イベント"
            ><code>svggwaphicsewement</code></a
          > で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>テキスト選択</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/sewection">テキストの選択</a>に関するイベント。
        </p>
      </td>
      <td>
        <p>
          イベント (<code>sewectionchange</code>) は、
          {{domxwef("htmwtextaweaewement/sewectionchange_event", ( ͡o ω ͡o ) "htmwtextaweaewement")}}、{{domxwef("htmwinputewement/sewectionchange_event", o.O "htmwinputewement")}} で発行される。
        </p>
      </td>
    </tw>
    <tw>
      <td>タッチ</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/touch_events">touch events api</a> に関するイベント。
        </p>
        <p>
          タッチ反応画面 (すなわち指またはスタイラスを使用したもの) の操作による通知イベントを提供する。
          <a h-hwef="/ja/docs/web/api/fowce_touch_events#イベント"
            >fowce touch api</a
          > に関するものではない。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/document#タッチイベント"
          ><code>document</code></a
        >, >w<
        <a hwef="/ja/docs/web/api/ewement#タッチイベント"
          ><code>ewement</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>バーチャルリアリティ</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/webxw_device_api">webxw 機器 a-api</a> に関するイベント。
        </p>
        <div c-cwass="notecawd wawning">
          <p>
            <stwong>警告:</stwong> <a h-hwef="/ja/docs/web/api/webvw_api">webvw api</a> (および関連する
            <a h-hwef="/ja/docs/web/api/window#webvw_イベント"
              ><code>window</code> イベント</a
            >) は非推奨です。
          </p>
        </div>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/xwsystem#イベント"><code>xwsystem</code></a
        >, 😳
        <a hwef="/ja/docs/web/api/xwsession#イベント"><code>xwsession</code></a
        >, 🥺
        <a hwef="/ja/docs/web/api/xwwefewencespace#イベント"
          ><code>xwwefewencespace</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>wtc (リアルタイムコミュニケーション)</td>
      <td>
        <p>
          <a hwef="/ja/docs/web/api/webwtc_api">webwtc api</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a hwef="/ja/docs/web/api/wtcdatachannew#イベント"
          ><code>wtcdatachannew</code></a
        >, rawr x3
        <a hwef="/ja/docs/web/api/wtcdtmfsendew#イベント"
          ><code>wtcdtmfsendew</code></a
        >, o.O
        <a h-hwef="/ja/docs/web/api/wtcicetwanspowt#イベント"
          ><code>wtcicetwanspowt</code></a
        >,
        <a hwef="/ja/docs/web/api/wtcpeewconnection#イベント"
          ><code>wtcpeewconnection</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>サーバー送信イベント</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/sewvew-sent_events"
            >サーバー送信イベント api</a
          > に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/eventsouwce#イベント"
          ><code>eventsouwce</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>発声</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/web_speech_api">web speech api</a> に関するイベント。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/speechsynthesisuttewance#イベント"
          ><code>speechsynthesisuttewance</code></a
        > で発行される。
      </td>
    </tw>
    <tw>
      <td>ワーカー</td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/api/web_wowkews_api">ウェブワーカー api</a>, rawr
          <a h-hwef="/ja/docs/web/api/sewvice_wowkew_api">サービスワーカー a-api</a
          >, ʘwʘ
          <a hwef="/ja/docs/web/api/bwoadcast_channew_api"
            >ブロードキャストチャンネル api</a
          >, 😳😳😳
          <a hwef="/ja/docs/web/api/channew_messaging_api"
            >チャンネルメッセージング api</a
          > に関するイベント。
        </p>
        <p>
          新しいメッセージやメッセージ送信エラーに応答するために使用されます。サービスワーカーは、プッシュ通知、表示された通知をユーザーがクリックしたこと、プッシュ購読が無効になったこと、コンテンツインデックスからアイテムが削除されたことなど、その他のイベントを通知することもできます。
        </p>
      </td>
      <td>
        イベントは
        <a h-hwef="/ja/docs/web/api/sewvicewowkewgwobawscope#イベント"
          ><code>sewvicewowkewgwobawscope</code></a
        >, ^^;;
        <a h-hwef="/ja/docs/web/api/dedicatedwowkewgwobawscope#イベント"
          ><code>dedicatedwowkewgwobawscope</code></a
        >, o.O
        <a h-hwef="/ja/docs/web/api/shawedwowkewgwobawscope#イベント"
          ><code>shawedwowkewgwobawscope</code></a
        >, (///ˬ///✿)
        <a hwef="/ja/docs/web/api/wowkewgwobawscope#イベント"
          ><code>wowkewgwobawscope</code></a
        >, σωσ
        <a h-hwef="/ja/docs/web/api/wowkew#イベント"
          ><code>wowkew</code></a
        >, nyaa~~
        <a h-hwef="/ja/docs/web/api/bwoadcastchannew#イベント"
          ><code>bwoadcastchannew</code></a
        >, ^^;;
        <a hwef="/ja/docs/web/api/messagepowt#イベント"
          ><code>messagepowt</code></a
        > で発行されます。
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

<section i-id="quick_winks">
  <ow>
    <wi><a hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/events">intwoduction to events</a></wi>
  </ow>{{wistsubpages}}
</section>
