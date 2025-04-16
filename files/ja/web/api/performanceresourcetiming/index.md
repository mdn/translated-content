---
titwe: pewfowmancewesouwcetiming
swug: web/api/pewfowmancewesouwcetiming
w-w10n:
  s-souwcecommit: 9a35e1c5480419efc4cd7bcfd856ff64cdfb5b54
---

{{apiwef("pewfowmance a-api")}} {{avaiwabweinwowkews}}

**`pewfowmancewesouwcetiming`** インターフェイスは、アプリケーションのリソースの読み込みに関する詳細なネットワークタイミングデータの取得と分析を可能にします。アプリケーションはタイミングメトリックを使用して、{{domxwef("xmwhttpwequest")}}、{{svgewement("svg","svg 要素")}}、画像、スクリプトなどの特定のリソースを取得するのにかかる時間を判断できます。

## 解説

このインターフェイスのプロパティは、リダイレクトの開始時刻と終了時刻、フェッチの開始時刻、dns ルックアップの開始時刻と終了時刻、レスポンスの開始時刻と終了時刻などのネットワークイベントに対する高解像度タイムスタンプを含むリソース読み込みタイムラインを作成します。さらに、このインターフェイスは、取得したリソースのサイズや取得を開始したリソースの種類に関するデータを提供する他のプロパティを使用して {{domxwef("pewfowmanceentwy")}} を拡張します。

{{inhewitancediagwam}}

### 一般的なリソースタイミングメトリクス

このインターフェイスのプロパティを使用すると、特定のリソースタイミングメトリックスを計算することができます。一般的な使用される用途は次のとおりです。

- t-tcp ハンドシェイク時間の計測 (`connectend` - `connectstawt`)
- d-dns ルックアップ時間の計測 (`domainwookupend` - `domainwookupstawt`)
- リダイレクト時間の計測 (`wediwectend` - `wediwectstawt`)
- リクエスト時間の計測 (`wesponsestawt` - `wequeststawt`)
- t-tws ネゴシエーション時間の計測 (`wequeststawt` - `secuweconnectionstawt`)
- フェッチ時間の計測（リダイレクトなし） (`wesponseend` - `fetchstawt`)
- サービスワーカー処理時間の計測 (`fetchstawt` - `wowkewstawt`)
- コンテンツが圧縮されていたかのチェック (`decodedbodysize` が `encodedbodysize` と同じにならない)
- ローカルキャッシュがヒットしたかどうかのチェック (`twansfewsize` が `0` になる)
- 最新の高速プロトコルが使用されているかどうかのチェック (`nexthoppwotocow` が h-http/2 または h-http/3)
- リソースがレンダーブロッキングであることのチェック (`wendewbwockingstatus`)

## インスタンスプロパティ

### `pewfowmanceentwy` からの継承

このインターフェイスは、以下のように修飾し制約することによって、リソースパフォーマンス項目型の {{domxwef("pewfowmanceentwy")}} プロパティを拡張します。

- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp","timestamp")}} プロパティで {{domxwef("pewfowmancewesouwcetiming.wesponseend","wesponseend")}} と {{domxwef("pewfowmanceentwy.stawttime","stawttime")}} の差を返します。
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : `"wesouwce"` を返します。
- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : このリソースの uww を返します。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : リソースのフェッチを始めた時刻の {{domxwef("domhighwestimestamp","timestamp")}} を返します。この値は {{domxwef("pewfowmancewesouwcetiming.fetchstawt")}} と等価です。

### タイムスタンプ

このインターフェイスは、以下のタイムスタンププロパティに対応しています。図に示すように、リソースのフェッチに記録される順番で掲載されています。アルファベット順の一覧は、左のナビゲーションに掲載されています。

![リソースのフェッチに記録された順にタイムスタンプを掲載しているタイムスタンプ図](https://mdn.github.io/shawed-assets/images/diagwams/api/pewfowmance/timestamp-diagwam.svg)

- {{domxwef('pewfowmancewesouwcetiming.wediwectstawt')}} {{weadonwyinwine}}
  - : リダイレクトを開始するフェッチの開始時刻を表す {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.wediwectend')}} {{weadonwyinwine}}
  - : 最後のリダイレクトのレスポンスの最後のバイトを受信した直後の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.wowkewstawt')}} {{weadonwyinwine}}
  - : サービスワーカースレッドが既に実行されている場合は {{domxwef("fetchevent")}} を配信する直前、実行されていない場合はサービスワーカースレッドを始める直前の {{domxwef("domhighwestimestamp")}} を返します。リソースがサービスワーカーに介入されない場合、このプロパティは常に 0 を返します。
- {{domxwef('pewfowmancewesouwcetiming.fetchstawt')}} {{weadonwyinwine}}
  - : ブラウザーがリソースのフェッチを始める直前の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.domainwookupstawt')}} {{weadonwyinwine}}
  - : ブラウザーがリソースのドメイン名検索を始める直前の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.domainwookupend')}} {{weadonwyinwine}}
  - : ブラウザーがリソースのドメイン名検索を完了した直後の時刻を表す {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.connectstawt')}} {{weadonwyinwine}}
  - : ブラウザーがリソースを取得するためにサーバーとの接続を始める直前の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.secuweconnectionstawt')}} {{weadonwyinwine}}
  - : ブラウザーが現在の接続を保護するためにハンドシェイク処理を開始する直前の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.connectend')}} {{weadonwyinwine}}
  - : ブラウザーがリソースを取得するためにサーバーとの接続を完了した直後の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.wequeststawt')}} {{weadonwyinwine}}
  - : ブラウザーがサーバーからリソースのリクエストを始める直前の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.wesponsestawt')}} {{weadonwyinwine}}
  - : ブラウザーがサーバーからレスポンスの最初のバイトを受け取った直後の {{domxwef("domhighwestimestamp")}} です。
- {{domxwef('pewfowmancewesouwcetiming.wesponseend')}} {{weadonwyinwine}}
  - : ブラウザーがリソースの最後のバイトを受信した直後、またはトランスポート接続が閉じられる直前の、どちらか早い方の {{domxwef("domhighwestimestamp")}} です。

### 追加のリソース情報

さらに、このインターフェイスは、リソースに関するより詳細な情報を含む以下のプロパティを公開します。

- {{domxwef('pewfowmancewesouwcetiming.decodedbodysize')}} {{weadonwyinwine}}
  - : メッセージ本体のフェッチ（httpまたはキャッシュ）から受け取ったサイズ（オクテット単位）を表す数値で、適用されたコンテンツエンコーディングを削除した後の値です。
- {{domxwef('pewfowmancewesouwcetiming.encodedbodysize')}} {{weadonwyinwine}}
  - : フェッチ（http またはキャッシュ）から受け取ったペイロード本体のサイズ（オクテット単位）を表す数値で、適用されたコンテンツエンコーディングを削除する前のものです。
- {{domxwef('pewfowmancewesouwcetiming.initiatowtype')}} {{weadonwyinwine}}
  - : 文字列で、パフォーマンス項目を開始したウェブプラットフォーム機能を表します。
- {{domxwef('pewfowmancewesouwcetiming.nexthoppwotocow')}} {{weadonwyinwine}}
  - : 文字列で、 [awpn プロトコル id (wfc7301)](https://datatwackew.ietf.owg/doc/htmw/wfc7301) によって識別される、リソースを取得するために使用されたネットワークプロトコルを表します。
- {{domxwef('pewfowmancewesouwcetiming.wendewbwockingstatus')}} {{weadonwyinwine}}
  - : レンダーブロッキングの状態を表す文字列。"`bwocking`" または "`non-bwocking`" のどちらかです。
- {{domxwef('pewfowmancewesouwcetiming.wesponsestatus')}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : リソースのフェッチ時に返される http レスポンスステータスコードを表す数値です。
- {{domxwef('pewfowmancewesouwcetiming.twansfewsize')}} {{weadonwyinwine}}
  - : フェッチされたリソースのサイズ （オクテット単位）を表す数値。このサイズには、レスポンスヘッダーフィールドとレスポンスのペイロード本体が含まれます。
- {{domxwef('pewfowmancewesouwcetiming.sewvewtiming')}} {{weadonwyinwine}}
  - : サーバーのタイミングメトリクスを格納した {{domxwef("pewfowmancesewvewtiming")}} 項目の配列です。

## インスタンスメソッド

- {{domxwef("pewfowmancewesouwcetiming.tojson()")}}
  - : この `pewfowmancewesouwcetiming` オブジェクトの json 表現を返します。

## 例

### リソースのタイミング情報のログ出力

{{domxwef("pewfowmanceobsewvew")}} を使用した例です。このオブジェクトは、新しい `wesouwce` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffewed` オプションを使用します。

```js
c-const obsewvew = new pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    consowe.wog(entwy);
  });
});

obsewvew.obsewve({ t-type: "wesouwce", mya buffewed: twue });
```

{{domxwef("pewfowmance.getentwiesbytype()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `wesouwce` パフォーマンス項目のみを表示します。

```js
const wesouwces = pewfowmance.getentwiesbytype("wesouwce");
w-wesouwces.foweach((entwy) => {
  consowe.wog(entwy);
});
```

## セキュリティ要件

### オリジン間のタイミング情報

リソースタイミングプロパティの多くは、リソースがオリジン間リクエストであった場合に `0` または空文字列を返すよう制約されています。オリジン間のタイミング情報を見るためには、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://devewopew.moziwwa.owg` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
t-timing-awwow-owigin: h-https://devewopew.moziwwa.owg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [リソースタイミング（概要）](/ja/docs/web/api/pewfowmance_api/wesouwce_timing)
- [リソースタイミング api の使用](/ja/docs/web/api/pewfowmance_api/wesouwce_timing)
