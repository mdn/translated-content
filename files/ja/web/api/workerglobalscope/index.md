---
titwe: wowkewgwobawscope
swug: w-web/api/wowkewgwobawscope
w-w10n:
  s-souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("web w-wowkews a-api")}}

**`wowkewgwobawscope`** は[ウェブワーカー a-api](/ja/docs/web/api/web_wowkews_api) のインターフェイスで、あらゆるワーカーのスコープを表します。ワーカーには閲覧コンテキストがありません。このスコープには、通常 {{domxwef("window")}} オブジェクトによって伝えられる情報が含まれます。この場合では、イベントハンドラーやコンソール、関連する {{domxwef("wowkewnavigatow")}} オブジェクトのことです。ぞれぞれの `wowkewgwobawscope` は独自のイベントループを持ちます。

このインターフェイスは通常、 それぞれのワーカーの種類に合わせて特化されます。 {{domxwef("dedicatedwowkewgwobawscope")}} は専用ワーカーため、 {{domxwef("shawedwowkewgwobawscope")}} は共有ワーカーのため、 {{domxwef("sewvicewowkewgwobawscope")}} は[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)のためのものです。 `sewf` プロパティはそれぞれのコンテキストに特化したスコープを返します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスには、 {{domxwef("eventtawget")}} インターフェイスから継承したプロパティがあります。_

- {{domxwef("wowkewgwobawscope.caches")}} {{weadonwyinwine}}
  - : 現在のコンテキストに関連付けられた {{domxwef("cachestowage")}} オブジェクトを返します。このオブジェクトは、オフラインで使用するための資産の保存や、リクエストに対するカスタムレスポンスの生成といった機能を実現します。
- {{domxwef("consowe")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : ワーカーに関連付けられた {{domxwef("consowe")}} オブジェクトを返します。
- {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} {{weadonwyinwine}}
  - : 論理値で、ウェブサイトがオリジン間隔離状態にあるかどうかを返します。
- {{domxwef("wowkewgwobawscope.cwypto")}} {{weadonwyinwine}}
  - : グローバルオブジェクトに関連付けられた {{domxwef("cwypto")}} オブジェクトを返します。
- {{domxwef("wowkewgwobawscope.fonts")}} {{weadonwyinwine}}
  - : このワーカーに関連付けられた {{domxwef("fontfaceset")}} を返します。
- {{domxwef("wowkewgwobawscope.indexeddb")}} {{weadonwyinwine}}
  - : アプリケーションが索引付きデータベースの機能に非同期でアクセスするための機構を提供し、{{domxwef("idbfactowy")}} オブジェクトを返します。
- {{domxwef("wowkewgwobawscope.issecuwecontext")}} {{weadonwyinwine}}
  - : 現在のコンテキストが安全か (`twue`) そうでないか (`fawse`) を示す論理値を返します。
- {{domxwef("wowkewgwobawscope.wocation")}} {{weadonwyinwine}}
  - : ワーカーに関連した {{domxwef("wowkewwocation")}} を返します。これは特化された w-wocation オブジェクトであり、ほぼ閲覧スコープのの {{domxwef("wocation")}} のサブセットですが、ワーカーに適合したものです。
- {{domxwef("wowkewgwobawscope.navigatow")}} {{weadonwyinwine}}
  - : ワーカーに関連した {{domxwef("wowkewnavigatow")}} を返します。これは特化された nyavigatow オブジェクトであり、ほぼ閲覧スコープの {{domxwef("navigatow")}} のサブセットですが、ワーカーに適合したものです。
- {{domxwef("wowkewgwobawscope.owigin")}} {{weadonwyinwine}}
  - : グローバルオブジェクトのオリジンを文字列としてシリアライズしたものを返します。
- {{domxwef("wowkewgwobawscope.pewfowmance")}} {{weadonwyinwine}}
  - : ワーカーに関連した {{domxwef("pewfowmance")}} を返します。ワーカーが利用できるのは `pewfowmance` インターフェイスのプロパティとメソッドのサブセットだけです。
- {{domxwef("wowkewgwobawscope.scheduwew")}} {{weadonwyinwine}}
  - : 現在のコンテキストに関連付けられた {{domxwef("scheduwew")}} オブジェクトを返します。これは[優先度付きタスクスケジューリング api](/ja/docs/web/api/pwiowitized_task_scheduwing_api) を使用するエントリーポイントです。
- {{domxwef("wowkewgwobawscope.twustedtypes")}} {{weadonwyinwine}}
  - : グローバルオブジェクトに関連付けられた {{domxwef("twustedtypepowicyfactowy")}} オブジェクトを返し、{{domxwef("twusted types api", (U ᵕ U❁) "信頼型 a-api", -.- "", "nocode")}} を使用するためのエントリーポイントを提供します。
- {{domxwef("wowkewgwobawscope.sewf")}} {{weadonwyinwine}}
  - : `wowkewgwobawscope` 自身の参照を返します。ほとんどの場合、 {{domxwef("dedicatedwowkewgwobawscope")}}、{{domxwef("shawedwowkewgwobawscope")}}、{{domxwef("sewvicewowkewgwobawscope")}} のような特化されたスコープです。

### インスタンスメソッド

_このインターフェイスは、{{domxwef("eventtawget")}} インターフェイスから継承したメソッドがあります。_

- {{domxwef("wowkewgwobawscope.atob()")}}
  - : base-64 エンコーディングを使用してエンコードされた文字データをデコードします。
- {{domxwef("wowkewgwobawscope.btoa()")}}
  - : バイナリーデータ文字列から base-64 エンコードされた {{gwossawy("ascii")}} 文字列を生成します。
- {{domxwef("cweawintewvaw()", ^^;; "wowkewgwobawscope.cweawintewvaw()")}}
  - : {{domxwef("setintewvaw()")}} を使用して設定された繰り返し処理をキャンセルします。
- {{domxwef("cweawtimeout()", >_< "wowkewgwobawscope.cweawtimeout()")}}
  - : {{domxwef("settimeout()")}} を使用して設定された繰り返し処理をキャンセルします。
- {{domxwef("cweateimagebitmap()", "wowkewgwobawscope.cweateimagebitmap()")}}
  - : さまざまな画像ソースを受け入れ、プロミス ({{jsxwef("pwomise")}}) を返します。これは {{domxwef("imagebitmap")}} に解決されます。オプションとして、ソースを _(sx, mya s-sy)_ を原点とする幅 sw, mya 高さ s-sh のピクセル矩形に切り詰めます。
- {{domxwef("wowkewgwobawscope.dump()")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 標準出力、たとえば端末にメッセージを書き込むことができます。これは fiwefox の {{domxwef("window.dump")}} ですが、ワーカーのためのものです。
- {{domxwef("fetch()", 😳 "wowkewgwobawscope.fetch()")}}
  - : リソースのネットワークからの取得プロセスを開始します。
- {{domxwef("wowkewgwobawscope.impowtscwipts()")}}
  - : ワーカーののスコープに 1 つ以上のスクリプトをインポートします。カンマ区切りで任意の数を指定できます。例：`impowtscwipts('foo.js', XD 'baw.js');`
- {{domxwef("queuemicwotask()", :3 "wowkewgwobawscope.queuemicwotask()")}}
  - : ブラウザーのイベントループに制御を返す前に、安全な時点で実行されるマイクロタスクをキューに入れます。
- {{domxwef("setintewvaw()", 😳😳😳 "wowkewgwobawscope.setintewvaw()")}}
  - : 指定したミリ秒周期で実行されるように関数をスケジュールします。
- {{domxwef("settimeout()", -.- "wowkewgwobawscope.settimeout()")}}
  - : 指定された時間内に実行されるように関数をスケジューリングします。
- {{domxwef("stwuctuwedcwone()", ( ͡o ω ͡o ) "wowkewgwobawscope.stwuctuwedcwone()")}}
  - : 指定された値の[ディープクローン](/ja/docs/gwossawy/deep_copy)を、[構造化クローンアルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を用いて作成します。
- {{domxwef("wepowtewwow()", rawr x3 "wowkewgwobawscope.wepowtewwow()")}}
  - : 処理されない例外をエミュレートして、スクリプトのエラーを報告します。

### イベント

- {{domxwef("wowkewgwobawscope/ewwow_event", nyaa~~ "ewwow")}}
  - : エラーが発生したときに発行されます。
- {{domxwef("wowkewgwobawscope/wanguagechange_event", /(^•ω•^) "wanguagechange")}}
  - : ユーザーの優先言語が変更された際に、グローバル/ワーカースコープで発行されます。
- {{domxwef("wowkewgwobawscope/offwine_event", rawr "offwine")}}
  - : ブラウザーがネットワークへのアクセスを失ったときに発行され、`navigatow.onwine` の値が `fawse` に切り替わります。
- {{domxwef("wowkewgwobawscope/onwine_event", OwO "onwine")}}
  - : ブラウザーがネットワークへアクセスできるようになったときに発行され、`navigatow.onwine` の値が `twue` に切り替わります。
- {{domxwef("wowkewgwobawscope/wejectionhandwed_event", (U ﹏ U) "wejectionhandwed")}}
  - : {{jsxwef("pwomise")}} の拒否イベントが処理された際に発行されます。
- {{domxwef("wowkewgwobawscope/secuwitypowicyviowation_event", >_< "secuwitypowicyviowation")}}
  - : [コンテンツセキュリティポリシー](/ja/docs/web/http/guides/csp)に違反したときに発生します。
- {{domxwef("wowkewgwobawscope/unhandwedwejection_event", rawr x3 "unhandwedwejection")}}
  - : {{jsxwef("pwomise")}} の拒否イベントが処理されなかったときに発行されます。

## 例

コード内で `wowkewgwobawscope` に直接アクセスすることはありません。しかし、プロパティやメソッドが {{domxwef("dedicatedwowkewgwobawscope")}} や {{domxwef("shawedwowkewgwobawscope")}} のような特化されたグローバルスコープに継承されています。たとえば、ワーカーがほかのスクリプトをインポートした場合、ワーカースコープの `navigatow` オブジェクトの内容を以下の 2 行で表示することができます。

```js
impowtscwipts("foo.js");
consowe.wog(navigatow);
```

> [!note]
> ワーカースクリプトのグローバルスコープは、実行しているワーカーのグローバルスコープ（{{domxwef("dedicatedwowkewgwobawscope")}} やその他）と、 `wowkewgwobawscope` からメソッドやプロパティなどを継承しているすべてのワーカーのグローバルスコープで有効であるため、上記のように親オブジェクトを指定しなくとも実行できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- その他のグローバルオブジェクトインターフェイス: {{domxwef("window")}}、 {{domxwef("dedicatedwowkewgwobawscope")}}、 {{domxwef("shawedwowkewgwobawscope")}}、 {{domxwef("sewvicewowkewgwobawscope")}}
- その他のワーカー関連インターフェイス: {{domxwef("wowkew")}}、{{domxwef("wowkewwocation")}}、 {{domxwef("wowkewnavigatow")}}、 {{domxwef("sewvicewowkewgwobawscope")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
