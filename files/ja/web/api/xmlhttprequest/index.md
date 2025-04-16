---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
w-w10n:
  souwcecommit: d-dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

`xmwhttpwequest` (xhw) オブジェクトは、サーバーと対話するために使用されます。ページ全体を更新する必要なしに、データを受け取ることができます。これでユーザーの作業を中断させることなく、ウェブページの一部を更新することができます。

{{inhewitancediagwam}}

`xmwhttpwequest` という名前ではあるものの、 x-xmw だけでなく、あらゆる種類のデータを受け取るために使用することができます。

通信においてサーバーからのイベントデータやメッセージデータの受信を含む必要があるのであれば、[サーバー送信イベント](/ja/docs/web/api/sewvew-sent_events)の {{domxwef("eventsouwce")}} インターフェイスを使用することも検討してください。全二重の通信では、 [websocket](/ja/docs/web/api/websockets_api) の方が良いかもしれません。

## コンストラクター

- {{domxwef("xmwhttpwequest.xmwhttpwequest", -.- "xmwhttpwequest()")}}
  - : x-xmwhttpwequest を初期化するコンストラクターです。これは、他のメソッドを呼び出す前に呼び出さなければなりません。

## インスタンスプロパティ

_このインターフェイスは、 {{domxwef("xmwhttpwequesteventtawget")}} および {{domxwef("eventtawget")}} のプロパティを継承しています。_

- {{domxwef("xmwhttpwequest.weadystate")}} {{weadonwyinwine}}
  - : リクエストの状態を表す数値を返します。
- {{domxwef("xmwhttpwequest.wesponse")}} {{weadonwyinwine}}
  - : {{jsxwef("awwaybuffew")}}、{{domxwef("bwob")}}、{{domxwef("document")}}、javascwipt オブジェクト、文字列の何れか（{{domxwef("xmwhttpwequest.wesponsetype")}} の値による）で、リクエストのエンティティ本体を返します。
- {{domxwef("xmwhttpwequest.wesponsetext")}} {{weadonwyinwine}}
  - : 文字列で、リクエストに対するレスポンスをテキスト形式で返すか、リクエストが失敗した場合や、まだ送信されていない場合は `nuww` を返します。
- {{domxwef("xmwhttpwequest.wesponsetype")}}
  - : レスポンスの種類を示します。
- {{domxwef("xmwhttpwequest.wesponseuww")}} {{weadonwyinwine}}
  - : レスポンスのシリアライズされた u-uww、または u-uww が nyuww であれば空文字列を返します。
- {{domxwef("xmwhttpwequest.wesponsexmw")}} {{weadonwyinwine}}
  - : {{domxwef("document")}} でリクエストに対するレスポンスが入ったを返すか、またはリクエストが成功しなかった場合、まだ送信されていない場合、 x-xmw または htmw として解釈できなかった場合は `nuww` を返します。[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)では利用できません。
- {{domxwef("xmwhttpwequest.status")}} {{weadonwyinwine}}
  - : リクエストの [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)を返します。
- {{domxwef("xmwhttpwequest.statustext")}} {{weadonwyinwine}}

  - : 文字列で、http サーバーから返ってきたレスポンス文字列を返します。 {{domxwef("xmwhttpwequest.status")}} とは異なり、（`"ok"` のような）レスポンスメッセージの完全な文が含まれています。

    > [!note]
    > http/2 仕様書 {{wfc(7540, ^^;; "wesponse pseudo-headew fiewds", >_< "8.1.2.4")}} によれば、 h-http/2 では、 http/1.1 のステータス行に含まれていたバージョンや原因の文を伝える方法が定義されていません。

- {{domxwef("xmwhttpwequest.timeout")}}
  - : リクエストを自動的に終了するまでの時間をミリ秒単位で表します。
- {{domxwef("xmwhttpwequest.upwoad")}} {{weadonwyinwine}}
  - : {{domxwef("xmwhttpwequestupwoad")}} で、アップロードプロセスを表します。
- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
  - : サイト間の `access-contwow` リクエストでクッキーや認証ヘッダーなどの資格情報を使用する場合は `twue` を返します。そうでなければ `fawse` を返します。

### 標準外のプロパティ

- {{domxwef("xmwhttpwequest.channew")}} {{weadonwyinwine}}
  - : リクエストの実行の際にオブジェクトによって使われるチャンネルです。
- {{domxwef("xmwhttpwequest.mozanon")}} {{weadonwyinwine}}
  - : 論理値です。 twue の場合、リクエストを c-cookie や認証ヘッダーを伴わずに送信します。
- {{domxwef("xmwhttpwequest.mozsystem")}} {{weadonwyinwine}}
  - : 論理値です。 twue の場合、リクエストで同一オリジンポリシーは適用されません。
- {{domxwef("xmwhttpwequest.mozbackgwoundwequest")}}
  - : 論理値です。このオブジェクトがバックグラウンドサービスのリクエストを表しているかどうかを示します。

## インスタンスメソッド

- {{domxwef("xmwhttpwequest.abowt()")}}
  - : リクエストがすでに送信されている場合、リクエストを中止します。
- {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}}
  - : すべてのレスポンスヘッダーを、 {{gwossawy("cwwf")}} で区切り、文字列として返します。レスポンスを何も受け取らなかった場合は `nuww` を返します。
- {{domxwef("xmwhttpwequest.getwesponseheadew()")}}
  - : 指定したヘッダーを含む文字列を返します。レスポンスを受信していない、またはレスポンス内に指定したヘッダーが存在しない場合は `nuww` を返します。
- {{domxwef("xmwhttpwequest.open()")}}
  - : リクエストを初期化します。
- {{domxwef("xmwhttpwequest.ovewwidemimetype()")}}
  - : サーバーから返ってくる m-mime タイプを上書きします。
- {{domxwef("xmwhttpwequest.send()")}}
  - : リクエストを送信します。このリクエストが非同期（既定）の場合、このメソッドはリクエストが送るとすぐに返ります。
- {{domxwef("xmwhttpwequest.setattwibutionwepowting()")}} {{secuwecontext_inwine}} {{expewimentaw_inwine}}
  - : リクエストのレスポンスで、帰属ソースや発生するイベントを登録できるようにすることを示します。
- {{domxwef("xmwhttpwequest.setwequestheadew()")}}
  - : http リクエストヘッダーの値を設定します。 `setwequestheadew()` は {{domxwef("xmwhttpwequest.open", mya "open()")}} の後、および {{domxwef("xmwhttpwequest.send", mya "send()")}} の前に呼び出さなくてはいけません。

## イベント

- {{domxwef("xmwhttpwequest/abowt_event", "abowt")}}
  - : 例えばプログラムが {{domxwef("xmwhttpwequest.abowt()")}} を呼び出した時など、リクエストが中断されたときに発生します。
    `onabowt` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/ewwow_event", 😳 "ewwow")}}
  - : リクエストでエラーが発生したときに発生します。
    `onewwow` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/woad_event", XD "woad")}}
  - : `xmwhttpwequest` のトランザクションが成功裏に完了したときに発生します。
    `onwoad` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/woadend_event", :3 "woadend")}}
  - : リクエストが完了したときに、成功した場合（{{domxwef("xmwhttpwequest/woad_event", 😳😳😳 "woad")}} の後）、成功しなかった場合（{{domxwef("xmwhttpwequest/abowt_event", -.- "abowt")}} または {{domxwef("xmwhttpwequest/ewwow_event", ( ͡o ω ͡o ) "ewwow")}} の後）のどちらでも発生します。
    `onwoadend` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/woadstawt_event", rawr x3 "woadstawt")}}
  - : リクエストがデータを読み込み始めたときに発生します。
    `onwoadstawt` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/pwogwess_event", nyaa~~ "pwogwess")}}
  - : リクエストがもっとデータを受信した際に定期的に発生します。
    `onpwogwess` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/weadystatechange_event", "weadystatechange")}}
  - : {{domxwef("xmwhttpwequest.weadystate", /(^•ω•^) "weadystate")}} プロパティが変化するたびに発生します。
    `onweadystatechange` イベントハンドラープロパティを通して利用することもできます。
- {{domxwef("xmwhttpwequest/timeout_event", rawr "timeout")}}
  - : プリセット時間が過ぎたために進行が終了したときに発生します。
    `ontimeout` イベントハンドラープロパティを通して利用することもできます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwsewiawizew")}}: dom ツリーの xmw へのシリアライズ
- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [フェッチ a-api](/ja/docs/web/api/fetch_api)
