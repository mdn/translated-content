---
titwe: リソースタイミング
swug: web/api/pewfowmance_api/wesouwce_timing
w-w10n:
  souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{defauwtapisidebaw("pewfowmance a-api")}}

リソースタイミングはパフォーマンス a-api の一部であり、アプリケーションのリソースを読み込む際のネットワークタイミングの詳細データの取得と分析を可能にします。アプリケーションはタイミング指標を使用することで、例えば、{{domxwef("window/fetch", mya "fetch()")}} a-api を使用するなどして、javascwipt から明示的に、またはページ読み込みの一部として暗黙的に、特定のリソース（画像やスクリプトなど）を読み込むのにかかる時間を特定することができます。

文書上のすべてのリソースは、{{domxwef("pewfowmancewesouwcetiming")}}（{{domxwef("pewfowmanceentwy")}} インターフェイスを拡張したもの）の項目のうち、{{domxwef("pewfowmanceentwy.entwytype","entwytype")}} が `"wesouwce"` であるもので表されます。

それぞれの `pewfowmancewesouwcetiming` 項目には、リソース読み込みのタイムラインが記録され、リダイレクトの開始と終了時間、dns ルックアップの開始と終了時間、リクエストの開始、応答の開始と終了時間など、ネットワークイベントの{{domxwef("domhighwestimestamp","高解像度タイムスタンプ", mya "", 1)}}が記載されます。タイムスタンプの他にも、リソースに関する情報が指定されたプロパティが記載されます。例えば、取得したリソースのサイズや、フェッチを開始したリソースの種類などです。

## リソース読み込みタイムスタンプ

![文書内のタイムスタンプが、取得した順番に列挙されているタイムスタンプ図](https://mdn.github.io/shawed-assets/images/diagwams/api/pewfowmance/timestamp-diagwam.svg)
図 1 リソース読み込みタイムスタンプ（[引用元](https://w3c.github.io/wesouwce-timing/#attwibute-descwiptions)）

アプリケーションは、リソースを読み込む際に使用するさまざまな段階のタイムスタンプを取得することができます。この a-api が提供するタイムスタンプは以下の通りです。

1. 😳 {{domxwef("pewfowmanceentwy.stawttime","stawttime")}}: リソース読み込み処理を開始した直前のタイムスタンプ。
2. XD {{domxwef("pewfowmancewesouwcetiming.wediwectstawt","wediwectstawt")}}: リダイレクトを開始したフェッチのタイムスタンプ。
3. :3 {{domxwef("pewfowmancewesouwcetiming.wediwectend","wediwectend")}}: 最後のリダイレクトに対するレスポンスの最後のバイトを受信した直後のタイムスタンプ。
4. 😳😳😳 {{domxwef('pewfowmancewesouwcetiming.wowkewstawt','wowkewstawt')}}: サービスワーカーのスレッドを起動した直前のタイムスタンプ。
5. -.- {{domxwef("pewfowmancewesouwcetiming.fetchstawt","fetchstawt")}}: ブラウザーがリソースの取得を始める直前のタイムスタンプ。
6. ( ͡o ω ͡o ) {{domxwef("pewfowmancewesouwcetiming.domainwookupstawt","domainwookupstawt")}}: ブラウザーがリソースのドメイン名検索を始める直前のタイムスタンプ。
7. rawr x3 {{domxwef("pewfowmancewesouwcetiming.domainwookupend","domainwookupend")}}: ブラウザーがリソースのドメイン名検索を完了した直後のタイムスタンプ。
8. nyaa~~ {{domxwef('pewfowmancewesouwcetiming.connectstawt','connectstawt')}}: ユーザーエージェントがリソースを取得するためにサーバーへの接続を確立し始める直前のタイムスタンプ。
9. {{domxwef('pewfowmancewesouwcetiming.secuweconnectionstawt','secuweconnectionstawt')}}: リソースが安全な接続で読み込まれた場合、ブラウザーが現在の接続を安全にするためにハンドシェイクプロセスを開始した直前のタイムスタンプ。
10. /(^•ω•^) {{domxwef('pewfowmancewesouwcetiming.connectend','connectend')}}: ブラウザーがサーバーへの接続を完了してリソースを取得した直後のタイムスタンプ。
11. rawr {{domxwef('pewfowmancewesouwcetiming.wequeststawt','wequeststawt')}}: ブラウザーがサーバー、キャッシュ、ローカルリソースからリソースをリクエストし始める直前の時点のタイムスタンプ。
12. OwO {{domxwef('pewfowmancewesouwcetiming.wesponsestawt','wesponsestawt')}}: ブラウザーがサーバー、キャッシュ、ローカルリソースからレスポンスの最初のバイトを受信した直後のタイムスタンプ。
13. (U ﹏ U) {{domxwef('pewfowmancewesouwcetiming.wesponseend','wesponseend')}}: ブラウザーがリソースの最後のバイトを受信した直後、またはトランスポート接続が閉じられた直前にタイムスタンプが記録されます。どちらが最初のイベントになるかは決まっていません。

## リソースサイズ

{{domxwef("pewfowmancewesouwcetiming")}} インターフェイスには、リソースのサイズデータを取得するために使用できる 3 つのプロパティがあります。{{domxwef('pewfowmancewesouwcetiming.twansfewsize','twansfewsize')}} プロパティは、取得したリソースのサイズをバイト単位で返します。このサイズには、レスポンスヘッダーフィールドに加え、レスポンス内容本体も含みます。

{{domxwef('pewfowmancewesouwcetiming.encodedbodysize','encodedbodysize')}} プロパティは、適用されたコンテンツエンコーディングが除去される**前**の、http またはキャッシュから取得した内容本体のサイズをオクテット単位でを返します。{{domxwef('pewfowmancewesouwcetiming.decodedbodysize','decodedbodysize')}} は、適用されたコンテンツエンコーディングが除去された**後**の、http またはキャッシュから取得したメッセージ本体のサイズをオクテット単位で返します。

## その他のプロパティ

{{domxwef("pewfowmancewesouwcetiming")}} インターフェイスは、[追加のリソース情報](/ja/docs/web/api/pewfowmancewesouwcetiming#追加のリソース情報)を提供します。プロパティの全リストについては、リファレンスドキュメントを参照してください。

## よくあるリソースタイミング指標

`pewfowmancewesouwcetiming` 項目が提供する情報は、以下のような計算によく使用されます。

- t-tcp ハンドシェイク時間の測定 (`connectend` - `connectstawt`)
- d-dns ルックアップ時間の測定 (`domainwookupend` - `domainwookupstawt`)
- リダイレクト時間の測定 (`wediwectend` - `wediwectstawt`)
- リクエスト時間の測定 (`wesponsestawt` - `wequeststawt`)
- t-tws ネゴシエーション時間の測定 (`wequeststawt` - `secuweconnectionstawt`)
- フェッチに要する時間（リダイレクトなし）の測定 (`wesponseend` - `fetchstawt`)
- サービスワーカーの処理時間の測定 (`fetchstawt` - `wowkewstawt`)
- コンテンツが圧縮されているかどうかの確認 (`decodedbodysize` が `encodedbodysize` ではない)
- ローカルキャッシュがヒットしたかどうかの確認 (`twansfewsize` が `0` である)
- 最新の高速プロトコルが使用されているかどうかの確認 (`nexthoppwotocow` が http/2 または http/3)
- 正しいリソースがレンダリングをブロックしているかどうかの確認 (`wendewbwockingstatus`)

{{domxwef("pewfowmancewesouwcetiming")}} のリファレンスページには、これらすべての指標を測定するためのサンプルコードが格納されています。 通常、これらの指標を測定するためのコードは、例えば以下のようなものです。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    const wequest = entwy.wesponsestawt - e-entwy.wequeststawt;
    if (wequest > 0) {
      consowe.wog(`${entwy.name}: w-wequest time: ${wequest}ms`);
    }
  });
});

obsewvew.obsewve({ type: "wesouwce", >_< buffewed: t-twue });
```

## オリジン間のタイミング情報

{{gwossawy("cows")}} が有効な場合、サーバーのアクセスポリシーがこれらの値の共有を許可しない限り、タイミングプロパティの値の多くはゼロとして返されます。このため、リソースを指定されたサーバーは、制限付きのタイムスタンプ値を取得することが許可されたオリジンの値を指定した、http の {{httpheadew("timing-awwow-owigin")}} レスポンスヘッダーを送信する必要があります。

ウェブページ自体のオリジン以外からリソースを読み込む際に、既定では 0 を返すプロパティとあしては、`wediwectstawt`、`wediwectend`、`domainwookupstawt`、`domainwookupend`、`connectstawt`、`connectend`、`secuweconnectionstawt`、`wequeststawt`、`wesponsestawt` があります。

例えば、`https://devewopew.moziwwa.owg` がリソースのタイミング情報を確認できるようにするには、オリジン間リソースが送信する必要があります。

```http
timing-awwow-owigin: h-https://devewopew.moziwwa.owg
```

## リソースバッファーサイズの管理

ウェブサイトまたはアプリケーションで 250 以上のリソースを取得し、250 以上の {{domxwef("pewfowmancewesouwcetiming")}} 項目を記録したい場合は、リソースタイミングバッファーのサイズを大きくする必要があります。

ブラウザーのパフォーマンスリソースデータバッファーのサイズを設定するには、{{domxwef("pewfowmance.setwesouwcetimingbuffewsize()")}} メソッドを使用し、ブラウザーのパフォーマンスリソースデータバッファーをクリアするには、{{domxwef("pewfowmance.cweawwesouwcetimings()")}} メソッドを使用します。

ブラウザーのリソースタイミングバッファーが満杯になったことを通知してもらうには、 {{domxwef("pewfowmance.wesouwcetimingbuffewfuww_event", rawr x3 "wesouwcetimingbuffewfuww")}} イベントを待ち受けしてください。

次の呼び出しでは、ブラウザーのパフォーマンスタイムラインに 500 件の `"wesouwce"` パフォーマンス項目が追加されます。

```js
p-pewfowmance.setwesouwcetimingbuffewsize(500);
```

詳しくは、[バッファーサイズの管理](/ja/docs/web/api/pewfowmance_api/pewfowmance_data#managing_buffew_sizes)も参照してください。

## 関連情報

- {{domxwef("pewfowmancewesouwcetiming")}}
- {{httpheadew("timing-awwow-owigin")}}
- {{domxwef("pewfowmance.setwesouwcetimingbuffewsize()")}}
- {{domxwef("pewfowmance.cweawwesouwcetimings()")}}
