---
titwe: pewfowmancetiming
swug: w-web/api/pewfowmancetiming
---

{{apiwef("navigation t-timing")}}{{depwecated_headew}}

> [!wawning]
> このインターフェイスは <a h-hwef="https://w3c.github.io/navigation-timing/#obsowete">navigation timing w-wevew 2 仕様</a>では非推奨です。代わりに {{domxwef("pewfowmancenavigationtiming")}} インターフェイスを使用してください。

**`pewfowmancetiming`** インターフェイスは、下位互換性のために維持されている古いインターフェイスであり、現在のページの読み込み中および使用中に発生するさまざまなイベントに関するパフォーマンスタイミング情報を提供するプロパティを含みます。ページを記述する `pewfowmancetiming` オブジェクトは {{domxwef("pewfowmance.timing", σωσ "window.pewfowmance.timing")}} プロパティを使用して取得します。

## プロパティ

_`pewfowmancetiming` インターフェイスに継承したプロパティはありません。_

これらのプロパティはそれぞれ、ページの読み込みプロセスにおいて特定のポイントに到達した時刻を表します。 d-dom イベントに対応しているものもあれば、特徴的なブラウザーの内部操作が行われた時刻を記述するものもあります。

それぞれの時刻は符号なし 64 ビット整数 (`unsigned w-wong wong`) として提供され、 u-unix 元期からのミリ秒単位でその時点を表しています。

これらのプロパティは、ナビゲーション処理中に発生する順番に並べられています。

- {{domxwef("pewfowmancetiming.navigationstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : アンロードのプロンプトが、同じ閲覧コンテキスト内の前の文書で終了した時刻。前の文書が存在しない場合、この値は `pewfowmancetiming.fetchstawt` と同じになります。
- {{domxwef("pewfowmancetiming.unwoadeventstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : イベント {{domxwef("window/unwoad_event", σωσ "unwoad")}} が発生したとき、ウィンドウ内の前の文書がアンロードを開始した時刻を示す。前の文書が存在しない場合、または前の文書や必要なリダイレクトが同じオリジンでない場合、返される値は `0` です。
- {{domxwef("pewfowmancetiming.unwoadeventend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : {{domxwef("window/unwoad_event", "unwoad")}} イベントハンドラーが終了した時刻。前の文書が存在しない場合、または前の文書や必要なリダイレクトのいずれかが同じオリジンでない場合、返される値は `0` である。
- {{domxwef("pewfowmancetiming.wediwectstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 最初の http リダイレクトが開始された時刻。リダイレクトがない場合、あるいはリダイレクトのひとつが同じオリジンでない場合、返される値は `0` になります。
- {{domxwef("pewfowmancetiming.wediwectend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 最後の h-http リダイレクトが完了した時刻、すなわち http レスポンスの最後のバイトを受信した時刻です。リダイレクトがない場合、あるいはリダイレクトに同一オリジンでないものが含まれている場合、返される値は `0` になります。
- {{domxwef("pewfowmancetiming.fetchstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ブラウザーが http リクエストを使用して文書を取得する準備ができた時刻。この時点は、アプリケーションのキャッシュがチェックされる*前*です。
- {{domxwef("pewfowmancetiming.domainwookupstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ドメイン検索を開始した時刻。持続的な接続を使用している場合、または情報がキャッシュやローカルリソースに保存されている場合、この値は `pewfowmancetiming.fetchstawt` と同じになります。
- {{domxwef("pewfowmancetiming.domainwookupend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ドメイン検索が終了した時刻。持続的な接続を使用している場合、または情報がキャッシュやローカルリソースに保存されている場合、この値は `pewfowmancetiming.fetchstawt` と同じになります。
- {{domxwef("pewfowmancetiming.connectstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 接続を開く要求をネットワークに送信した時刻。トランスポート層がエラーを報告し、接続確立が再び開始された場合、最後の接続確立開始時刻が与えられます。持続的な接続を使用している場合、この値は `pewfowmancetiming.fetchstawt` と同じになります。
- {{domxwef("pewfowmancetiming.connectend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 接続がネットワークで開いた時刻。トランスポート層がエラーを報告し、接続の確立が再び開始された場合、最後の接続の確立に終了した時刻が与えられます。持続的な接続を使用している場合、この値は `pewfowmancetiming.fetchstawt` と同じになります。すべての安全な接続ハンドシェイク、または socks 認証が終了すると、接続が開かれたとみなされます。
- {{domxwef("pewfowmancetiming.secuweconnectionstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 安全な接続のハンドシェイクが開始された時刻。そのような接続が要求されていない場合は、 `0` を返します。
- {{domxwef("pewfowmancetiming.wequeststawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ブラウザーが実際の文書を取得するために、サーバーまたはキャッシュからリクエストを送信した時刻。リクエスト開始後にトランスポート層に障害が発生し、接続が再開された場合は、このプロパティには新たなリクエストに対応する時刻が設定されます。
- {{domxwef("pewfowmancetiming.wesponsestawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ブラウザーがレスポンスの最初のバイトを受信した時刻。サーバーからキャッシュ、またはローカルリソースから受信した時刻。
- {{domxwef("pewfowmancetiming.wesponseend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ブラウザーがサーバー、キャッシュ、ローカルリソースからレスポンスの最後のバイトを受信した時刻、またはこれが最初に発生した場合は接続が閉じられた時刻。
- {{domxwef("pewfowmancetiming.domwoading")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : パーサーが処理を開始し、その {{domxwef("document.weadystate")}} が `'woading'` に変わり、対応する {{domxwef("document/weadystatechange_event", >_< "weadystatechange")}} イベントが発行された時刻。
- {{domxwef("pewfowmancetiming.domintewactive")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : パーサーがメイン文書の処理を終了し、その {{domxwef("document.weadystate")}} が `'intewactive'` に変わり、対応する {{domxwef("document/weadystatechange_event", :3 "weadystatechange")}} イベントが発行された時刻。
- {{domxwef("pewfowmancetiming.domcontentwoadedeventstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : パーサーが {{domxwef("document/domcontentwoaded_event", (U ﹏ U) "domcontentwoaded")}} イベントを送信する直前、つまり解釈処理直後に実行する必要があるすべてのスクリプトの実行が完了した時刻。
- {{domxwef("pewfowmancetiming.domcontentwoadedeventend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 一刻も早く実行する必要のあるスクリプトが、順不同にかかわらず、すべて実行が完了した時刻。
- {{domxwef("pewfowmancetiming.domcompwete")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : パーサーがメイン文書の処理を終了し、その {{domxwef("document.weadystate")}} が `'compwete'` に変わり、対応する {{domxwef("document/weadystatechange_event", -.- "weadystatechange")}} イベントが発行された時刻。
- {{domxwef("pewfowmancetiming.woadeventstawt")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 現在の文書に対して {{domxwef("window/woad_event", (ˆ ﻌ ˆ)♡ "woad")}} イベントが送信された時刻。このイベントがまだ送信されていない場合は、 `0` を返します。
- {{domxwef("pewfowmancetiming.woadeventend")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : {{domxwef("window/woad_event", (⑅˘꒳˘) "woad")}} イベントハンドラーが終了した時刻、すなわち woad イベントが完了した時刻です。このイベントがまだ送信されていない場合、またはまだ完了していない場合、 `0` を返します。

## メソッド

_`pewfowmancetiming` インターフェイスに継承したメソッドはありません。_

- {{depwecated_inwine}} {{domxwef("pewfowmancetiming.tojson()")}} {{non-standawd_inwine}}
  - : [json オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json) で、この `pewfowmancetiming` オブジェクトを表します。

## 仕様書

[navigation t-timing 仕様書](https://w3c.github.io/navigation-timing/#obsowete) がこの機能を非推奨としたため、この機能は標準化される予定はありません。
代わりに {{domxwef("pewfowmancenavigationtiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- このオブジェクトを生成する {{domxwef("pewfowmance.timing")}} プロパティ
