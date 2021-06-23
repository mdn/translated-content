---
title: CloseEvent
slug: Web/API/CloseEvent
tags:
  - API
  - Web
  - WebSocket
  - WebSockets
  - インターフェース
  - リファレンス
translation_of: Web/API/CloseEvent
---
<div>{{APIRef("Websockets API")}}</div>

<p><code>CloseEvent</code> は、 {{Glossary("WebSockets")}} を使用して接続が閉じられたときにクライアントに送信されます。これは <code>WebSocket</code> オブジェクトの <code>onclose</code> 属性で指定されたリスナーに配信されます。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}</dt>
 <dd>新しい <code>CloseEvent</code> を作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインタフェースは親である {{domxref("Event")}} からプロパティを継承します。</em></p>

<dl>
 <dt>{{domxref("CloseEvent.code")}} {{readOnlyInline}}</dt>
 <dd>サーバーが送信したクローズコードを含む <code>unsigned short</code> を返します。以下の値は許可されたステータスコードです。以下の定義は、 IANA のウェブサイト [<a href="https://www.iana.org/assignments/websocket/websocket.xml#close-code-number">Ref</a>] から供給されています。 1xxx コードは WebSocket 内部のみであり、転送されたデータと同じ意味ではありません (アプリケーション層プロトコルが無効な場合など)。 Firefox で指定できるコードは 1000 と 3000〜4999 [<a href="https://searchfox.org/mozilla-central/rev/bf81d741ff5dd11bb364ef21306da599032fd479/dom/websocket/WebSocket.cpp#2533">Source</a>, <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1467107">Bug</a>] のみです。
 <table class="standard-table" id="Status_codes">
  <tbody>
   <tr>
    <td class="header">ステータスコード</td>
    <td class="header">名前</td>
    <td class="header">説明</td>
   </tr>
   <tr>
    <td><code>0</code>–<code>999</code></td>
    <td></td>
    <td><strong>予約済みで使用されていません。</strong></td>
   </tr>
   <tr>
    <td><code>1000</code></td>
    <td>Normal Closure</td>
    <td>通常のクロージャ。接続が作成された目的に関係なく、接続は正常に完了しました。</td>
   </tr>
   <tr>
    <td><code>1001</code></td>
    <td>Going Away</td>
    <td>エンドポイントは、サーバーに障害が発生したか、またはブラウザーが接続を作成したページから離れようとしているために接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1002</code></td>
    <td>Protocol Error</td>
    <td>エンドポイントがプロトコルエラーのために接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1003</code></td>
    <td>Unsupported Data</td>
    <td>エンドポイントが受け入れられないタイプのデータを受信したため (たとえば、テキストのみのエンドポイントがバイナリデータを受信したとき)、接続が終了しています。</td>
   </tr>
   <tr>
    <td><code>1004</code></td>
    <td></td>
    <td><strong>予約済。</strong> 意味は将来定義されるかもしれません。</td>
   </tr>
   <tr>
    <td><code>1005</code></td>
    <td>No Status Received</td>
    <td><strong>予約済。</strong>予想されたにもかかわらずステータスコードが提供されなかったことを示します。</td>
   </tr>
   <tr>
    <td><code>1006</code></td>
    <td>Abnormal Closure</td>
    <td><strong>予約済。</strong>ステータスコードが必要なときに、接続が異常終了した (つまり、クローズフレームが送信されていない) ことを示すために使用されます。</td>
   </tr>
   <tr>
    <td><code>1007</code></td>
    <td>Invalid frame payload data</td>
    <td>矛盾したデータ (例えば、テキストメッセージ内の非 UTF-8 データ) を含むメッセージを受信したため、エンドポイントは接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1008</code></td>
    <td>Policy Violation</td>
    <td>エンドポイントはポリシーに違反するメッセージを受信したため、接続を終了しています。これは一般的なステータスコードであり、コード 1003 と 1009 が適切でない場合に使用されます。</td>
   </tr>
   <tr>
    <td><code>1009</code></td>
    <td>Message too big</td>
    <td>大きすぎるデータフレームを受信したため、エンドポイントは接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1010</code></td>
    <td>Missing Extension</td>
    <td>クライアントは、サーバーが1つ以上の拡張をネゴシエートすることを期待していましたがサーバーはそれを行わなかったため、サーバーは接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1011</code></td>
    <td>Internal Error</td>
    <td>サーバーは、予期しない条件が発生し要求の実行を妨げたため、接続を終了しています。</td>
   </tr>
   <tr>
    <td><code>1012</code></td>
    <td>Service Restart</td>
    <td>サーバーが再起動しているため、接続を終了しています。[<a href="https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">Ref</a>]</td>
   </tr>
   <tr>
    <td><code>1013</code></td>
    <td>Try Again Later</td>
    <td>サーバは、一時的な条件のために接続を終了しています。それはオーバーロードされ、クライアントの一部をキャストしています。[<a href="https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html">Ref</a>]</td>
   </tr>
   <tr>
    <td><code>1014</code></td>
    <td>Bad Gateway</td>
    <td>サーバーがゲートウェイまたはプロキシとして機能し、アップストリームサーバーから無効なレスポンスを受信しました。これは 502 HTTP ステータスコードに似ています。</td>
   </tr>
   <tr>
    <td><code>1015</code></td>
    <td>TLS Handshake</td>
    <td><strong>予約済。</strong>TLS ハンドシェイクの実行に失敗 (サーバー証明書を確認できないなど) したために接続が閉じられたことを示します。</td>
   </tr>
   <tr>
    <td><code>1016</code>–<code>1999</code></td>
    <td></td>
    <td><strong>将来の WebSocket 標準での使用のために予約されています。</strong></td>
   </tr>
   <tr>
    <td><code>2000</code>–<code>2999</code></td>
    <td></td>
    <td><strong>WebSocket 拡張機能で使用するために予約されています。</strong></td>
   </tr>
   <tr>
    <td><code>3000</code>–<code>3999</code></td>
    <td></td>
    <td>ライブラリとフレームワークで使用できます。 アプリケーションによって使用<strong>されない可能性があります</strong>。先着順で IANA に登録できます。</td>
   </tr>
   <tr>
    <td><code>4000</code>–<code>4999</code></td>
    <td></td>
    <td>アプリケーションで使用することができます。</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt>{{domxref("CloseEvent.reason")}} {{readOnlyInline}}</dt>
 <dd>サーバーが接続を終了した理由を示す {{domxref("DOMString")}} を返します。これは特定のサーバーとサブプロトコルに固有です。</dd>
 <dt>{{domxref("CloseEvent.wasClean")}} {{readOnlyInline}}</dt>
 <dd>接続がきれいに閉じられたかどうかを示す {{jsxref("Boolean")}} を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェースは親である {{domxref("Event")}} からメソッドを継承しています。</em></p>

<dl>
 <dt>{{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}} {{Obsolete_inline}}</dt>
 <dd>作成された <code>CloseEvent</code> の値を初期化します。イベントがすでにディスパッチされている場合、このメソッドは何も行いません。このメソッドをもう使用しないでください。代わりに、{{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} コンストラクタを使用してください。</dd>
</dl>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{ SpecName('HTML WHATWG', 'web-sockets.html#the-closeevent-interface', 'CloseEvent') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.CloseEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("WebSocket")}}</li>
</ul>
