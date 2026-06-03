---
title: 帰属レポートの生成
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

この記事では、[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) レポート（帰属レポートとデバッグレポートの両方）の生成方法、および生成されたレポートを制御する方法について説明します。これには、ノイズの処理、レポートの優先順位付け、レポートのフィルター、デバッグレポートの生成が含まれます。

## 基本的な処理

トリガーとソースが一致すると、ブラウザーはレポートを生成し、認証されていない [`POST`](/ja/docs/Web/HTTP/Reference/Methods/POST) リクエストとして、レポートの送信元である特定のエンドポイントに送信します。

- イベントレベルのレポートについては、これは `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution` です。
- 概要レポートでは、これは `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution` です。

`<reporting-origin>` は、ソースとトリガーを登録したものと同一のオリジンになります。

レポートデータは JSON 構造に含まれています。

## イベントレベルのレポート

イベントレベルのレポートは、それを含む **レポートウィンドウ** の最後に送信されるように生成およびスケジュールされます。レポートウィンドウの長さは、ソースの {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーで設定された [`"event_report_window"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) または [`"event_report_windows"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) フィールドで設定された値によって決定されます。

これらのフィールドがどちらも指定されていない場合、レポートウィンドウは次の既定値に戻ります。

- [イベントベースのソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#イベントベースの帰属ソース)の場合、既定のレポートウィンドウは、 `Attribution-Reporting-Register-Source` [`"expiry"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) フィールドで設定されたソースの有効期限で終わります。明示的に設定されていない場合、既定は登録後 30 日間です。
- [ナビゲーションベースのソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#ナビゲーションベースの帰属ソース)の場合、既定のレポートウィンドウは 2 日間、7 日間、およびソースの `"expiry"` です。

詳しくは [Custom report windows](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows) を参照してください。

イベントレベルのレポートが適切なエンドポイントで受信されると、データの処理、格納、表示の方法は完全に開発者に委ねられます。一般的なイベントレベルのレポートは、次のように見ていくことができます。

```json
{
  "attribution_destination": "https://advertiser.example",
  "source_event_id": "412444888111012",
  "trigger_data": "4",
  "report_id": "123e4567-e89b-12d3-a456-426614174000",
  "source_type": "navigation",
  "randomized_trigger_rate": 0.34,
  "scheduled_report_time": "1692255696",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

プロパティは次のとおりです。

- `"attribution_destination"`
  - : 文字列、または 2～3 個の文字列の配列。ソースが複数の出力先に登録されているかどうかによって異なります。これらの文字列は、帰属の宛先 ([`"destination"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)) サイトを表し、関連する {{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーでソース登録されます。
- `"source_event_id"`
  - : 帰属ソース ID を表す文字列。これは、ソース登録で（関連付けられた {{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーを介して）設定された [`"source_event_id"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id) と同じです。
- `"trigger_data"`
  - : トリガー登録で設定された、属性トリガーに由来するデータを表す文字列（関連付けられた {{httpheader("Attribution-Reporting-Register-Trigger")}} レスポンスヘッダーで設定される [`"trigger_data"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data)）。
- `"report_id"`
  - : このレポートの [Universally Unique Identifier (UUID)](/ja/docs/Glossary/UUID) を表す文字列。重複カウントを防ぐために使用できます。
- `"source_type"`
  - : `"navigation"` または `"event"` のいずれかに等しい文字列。それぞれ、関連付けられた帰属ソースが [ナビゲーションベース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#ナビゲーションベースの帰属ソース)であるか、[イベントベース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#イベントベースの帰属ソース)であるかを示します。
- `"randomized_trigger_rate"`
  - : 0 から 1 までの乱数で、この具体的なソース構成に対して[ノイズ](#レポートにノイズを追加)が適用される頻度を示します。
- `"scheduled_report_time"`
  - : 文字列で、 Unix 元期から、ブラウザーがレポートの送信を最初に予定した時刻までの秒数を表します（オフラインの端末による報告の遅れによる不正確さを避けるため）。
- `"source_debug_key"` {{optional_inline}}
  - : 帰属ソースのデバッグキーを表す 64 ビットの符号なし整数。これは、関連付けられた {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーの [`"debug_key"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) フィールドに設定された値を反映します。詳細については、[デバッグレポート](#デバッグレポート)を参照してください。
- `"trigger_debug_key"` {{optional_inline}}
  - : 関連付けられたトリガーのデバッグキーを表す 64 ビットの符号なし整数。これは、関連付けられた {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーの `"debug_key"` フィールドに設定された値を反映します。詳細については、[デバッグレポート](#デバッグレポート)を参照してください。

## 概要レポート

適切なエンドポイントで受信した複数の集約可能なレポートから概要レポートが作成され、[バッチ処理](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching)によって[集約サービス](https://privacysandbox.google.com/private-advertising/aggregation-service)で処理されるようにします。これが発生した場合、データの処理、格納、表示の方法は、開発者に完全に委ねられます。

既定では、集約可能なレポートが生成され、トリガーが作用した後、タイミングをランダムに遅らせて送信されるようにスケジュールされます。これは、タイミングを曖昧にしてプライバシーを改善するのに役立ちます。指定された登録済み帰属ソースについては、ソースの有効期限が切れるまで、登録から帰属ソースイベントが記録されます。これを**レポートウィンドウ**と呼びます。

有効期限は、関連する {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーで設定された `expiry` 値によって定義されます。明示的に設定されていない場合、既定値は登録後 30 日間です。レポートウィンドウの長さは、`Attribution-Reporting-Register-Source` ヘッダーに `aggregatable_report_window` 値を設定することでさらに変更できることにご注意ください。詳細については、[独自のレポートウィンドウ](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows)を参照してください。

> [!NOTE]
> ユーザーのプライバシーをさらに保護するため、それぞれの帰属ソースに関連付けられた概要レポートの値には、有限の合計値があります。これを**貢献度上限 (contribution budget)** と呼びます。この値は、API の実装によって異なります。Chrome では 65,536 です。この制限を超える値を追加するレポートを生成するコンバージョンは、記録されません。上限を常に把握し、測定するさまざまな指標間で共有してください。

一般的な集約可能なレポートは、次のように見ていくことができます。

```json
{
  "shared_info": "{\"api\":\"attribution-reporting\",\"attribution_destination\":\"https://advertiser.example\",\"report_id\":\"123e4567-e89b-12d3-a456-426614174000\",\"reporting_origin\":\"https://reporter.example\",\"scheduled_report_time\":\"1692255696\",\"source_registration_time\":\"1692230400\",\"version\":\"3\"}",
  "aggregation_service_payloads": [
    {
      "payload": "[base64-encoded HPKE encrypted data readable only by the aggregation service]",
      "key_id": "[string identifying public key used to encrypt payload]",
      "debug_cleartext_payload": "[base64-encoded unencrypted payload]"
    }
  ],
  "aggregation_coordinator_origin": "https://publickeyservice.aws.privacysandboxservices.com",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

プロパティは次のとおりです。

- `"shared_info"`
  - : これは、集約サービスが概要レポートを用意するために使用する情報を提供する、シリアライズされた JSON オブジェクトです。このデータは、改ざんを防ぐために[認証付き暗号](https://ja.wikipedia.org/wiki/認証付き暗号)を使用して[暗号化](/ja/docs/Glossary/Encryption)されています。次のプロパティは、シリアライズされた文字列で表されます。
    - `"api"`
      - : レポート生成を開始した API を表す列挙値。現在、これは常に `"attribution-reporting"` ですが、将来、それ以外の API に対応するために追加の値が追加される可能性があります。
    - `"attribution_destination"`
      - : ソース登録（関連する {{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダー）で設定された帰属の宛先 ([`"destination"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)) URL を表す文字列。
    - `"report_id"`
      - : このレポートの [Universally Unique Identifier (UUID)](/ja/docs/Glossary/UUID) を表す文字列。重複カウントを防ぐために使用することができます。
    - `"reporting_origin"`
      - : レポート生成の発生したオリジン。
    - `"scheduled_report_time"`
      - : 文字列で、Unix 元期から、ブラウザーがレポートの送信を最初に予定した時刻までの秒数を表します（オフラインの端末による報告の遅れによる不正確さを避けるため）。
    - `"source_registration_time"`
      - : 文字列で、Unix 元期から帰属ソースが登録されたまでの秒数を表します。1 日未満は切り捨てられます。
    - `"version"`
      - : レポートの生成に使用されている API のバージョンを表す文字列。
- `"aggregation_service_payloads"`
  - : レポートに含まれるデータを組み立てるために、集約サービスが使用するヒストグラムの寄与を含む、ペイロードオブジェクトの配列。現在、レポートごとに対応されているペイロードは 1 つだけで、ブラウザーで構成されます。将来は、複数のカスタマイズ可能なペイロードが対応される可能性があります。それぞれのペイロードオブジェクトには、次のプロパティを含めることができます。
    - `"payload"`
      - : A [CBOR] (https://cbor.io/) マップで、[HPKE] (https://datatracker.ietf.org/doc/rfc9180/) によって暗号化され、[base64] (/ja/docs/Glossary/Base64) でエンコードされたもの。次のような構造です（表記には JSON を使用します）。

        ```json
        {
          "operation": "histogram",
          "data": [
            {
              "bucket": "<Encoded as a 16-byte (i.e. 128-bit) big-endian bytestring>",
              "value": "<Encoded as a 4-byte (i.e. 32-bit) big-endian bytestring>"
            }
            // …
          ]
        }
        ```

        `operation` は常に `"histogram"` です。これにより、サービスは将来、他の操作にも対応できるようになります。

    - `"key_id"`
      - : ペイロードの暗号化に使用される公開鍵を識別する文字列です。
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : オプションのデバッグ情報。

- `"aggregation_coordinator_origin"`
  - : 集約サービスの展開オプション。
- `"source_debug_key"` {{optional_inline}}
  - : 帰属ソースのデバッグキーを表す 64 ビットの符号なし整数。これは、関連する {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーの [`"debug_key"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) フィールドに設定された値を反映します。詳細については、[デバッグレポート](#デバッグレポート)を参照してください。
- `"trigger_debug_key"` {{optional_inline}}
  - : 属性トリガーのデバッグキーを表す 64 ビットの符号なし整数です。これは、関連する {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーの `"debug_key"` フィールドに設定された値を反映します。詳細については、[デバッグレポート](#デバッグレポート)を参照してください。

## レポートにノイズを追加

<!--
THIS INFORMATION IS NOT COMPLETE; WE HAVE PARKED IT FOR NOW SO THAT WE CAN GET THIS DOCUMENTATION PUBLISHED, AND WE WILL DO MORE WORK ON ARA NOISE ON A FUTURE DATE, IF/WHEN THE DEMAND IS THERE

In the case of event-level reports, this is done using a randomized response algorithm, which works like so:

1. When an attribution source is stored, the browser generates a list of all possible sets of reports that could originate from the source's configuration (including the set consisting of no reports).
2. In a small percentage of cases, the browser prevents the source from being attributed and instead picks a random member of that list to use as the source's reports. The probability of this happening is based on the size of that list, the browser's implementation-specific privacy parameters, and the source's chosen [`"event_level_epsilon"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typical settings in the {{httpheader("Attribution-Reporting-Register-Source")}} header might look like so:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

The source `"trigger_data"` can have a maximum of 32 values. Increasing the number of values and `"event_report_windows"` increases the number of elements in the overall report set.

A matching {{httpheader("Attribution-Reporting-Register-Trigger")}} could contain the following:

```json
{
  ...,
  "event_trigger_data": [
    {
      // The value 4 is contained in the source data, therefore a match is possible
      "trigger_data": "4"
    },
  ],
  ...,
}
```

It is however still possible that a match may not occur, based on the randomized response algorithm described above.
-->

特定のソースに関連付けられた出力を不明瞭にし、それによってユーザーのプライバシーを保護するために、レポートにはノイズが追加されています。正確なソースデータは特定できず、個々のユーザーに関連付けることもできませんが、データから導き出された全体的なパターンは、同じ意味を提供します。

属性レポートにおけるノイズの動作に関する情報については、以下をご覧ください。

- [Understanding noise in summary reports](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Data limits and noise](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Working with noise](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## レポートの優先順位と制限

既定では、すべての帰属ソースの優先度は同じであり、帰属モデルはラストタッチです。つまり、コンバージョンは、最も最近の一致するソースイベントに帰属されます。イベントレベルおよび集約可能なレポートの両方で、関連する {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーの `"priority"` フィールドに新しい値を設定して、ソースの優先度を変更できます。既定値は `0` です。特定のソースで `"priority"` の値を `1` に設定すると、そのソースは、優先度 `0` のソースよりも最初に照合されます。 `"priority": "2"` のソースは、 `"priority": "1"` のソースよりも先に照合されます。といった具合に、優先度が高いソースが先に照合されます。

帰属トリガーの優先度も同様に機能します。関連する {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーに `"priority"` フィールドを追加して、トリガーの優先度を設定することもできますが、これはイベントレベルのレポートにのみ適用されます。

ソースの種類によって、既定の制限が異なります。

- [ナビゲーションベースの帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#ナビゲーションベースの帰属ソース) には、既定で 3 件のレポート制限があります。例えば、ユーザーが広告をクリックして 4 回コンバージョンした場合、ユーザーは広告主のサイトのホームページにアクセスし、次に製品ページにアクセスしてニュースレターに登録し、最後に購入に至ります。購入レポートは、4 回目のコンバージョンから決まるため、削除されます。
- [イベントベースの帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#イベントベースの帰属ソース) は、既定で 1 つのレポートに制限されています。

> [!NOTE]
> レポートの制限は、関連付けられた `Attribution-Reporting-Register-Source` ヘッダーの [`"event_report_windows"`](/ja/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) フィールドに異なる数値を設定することで調整できます。

指定されたソースイベントに対して帰属が開始されたとき、このソースに対して帰属の最大数値（クリックの場合は 3、画像やスクリプトの場合は 1）に達している場合、ブラウザーは次の動作を行います。

- 新しいレポートの優先度を、同じソースに対してスケジュールされている既存のレポートの優先度と比較します。
- 優先度の最も低いレポートを削除し、その代わりに新しいレポートをスケジュールします。新しいレポートが優先度の最も低いレポートである場合、そのレポートは無視され、受信されません。

優先度が設定されていない場合、ブラウザーは既定の動作に戻ります。つまり、クリックの 3 つ目のコンバージョン、またはビューの最初のコンバージョン後に現れたコンバージョンは削除されます。

## フィルター

フィルターを使用して、レポートを生成するコンバージョンのルールを定義することができます。例えば、特定の製品カテゴリーのコンバージョンのみをカウントし、それ以外のカテゴリーのコンバージョンは除外するように選択することができます。

フィルターを宣言するには、次のようにします。

1. ソース登録で、トリガー側でコンバージョンをフィルタリングするために使用するフィルターキーを定義する `filter_data` フィールドを {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーに追加します。これらは完全に独自のフィールドです。例えば、特定のサブドメインおよび特定の製品に関するコンバージョンのみを指定するには、次のように指定します。

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. トリガー登録時に、 `filters` フィールドを {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーに追加します。例えば、次の例では、トリガー操作が上記のソース登録と一致します。これは、どちらも `"electronics.megastore"` `"conversion_subdomain"` フィールドを含むためです。一方、 `"directory"` フィルターは、照合が試みられた場合、上記ソース登録に含まれていないため、無視されます。

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

`"filter_data"` および `"filters"` フィールドに一致するサブフィールドが含まれているが（上記の例で `"conversion_subdomain"` のように）、サブフィールドの値が一致しない場合、トリガーは無視され、一致なしとなります。

### トリガーデータのフィルタリング

{{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーの `event_trigger_data` フィールドを拡張して、{{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーで定義された `filter_data` に基づいて、`trigger_data`、`priority`、`deduplication_key` を設定するための選択的なフィルタリングを行うことができます。

例を示します。

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": { "source_type": ["navigation"] }
    },
    {
      "trigger_data": "1",
      "filters": { "source_type": ["event"] }
    }
  ]
}
```

> [!NOTE]
> `"source_type"` は、ソースの `"filter_data"` で自動的に入力されるフィールドです。

> [!NOTE]
> 否定でフィルタリングする `not_filters` にも対応しています。

このコンテキストでは、`filters` はオブジェクトまたはオブジェクトの配列です。リストが指定されている場合、トリガーが考慮されるためには 1 つの辞書だけが一致する必要があります。

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": [
        {
          "product": ["1234"],
          "conversion_subdomain": ["electronics.megastore"]
        },
        {
          "product": ["4321"],
          "conversion_subdomain": ["electronics4.megastore"]
        }
      ]
    }
  ]
}
```

フィルタがどのイベントトリガーにも一致しない場合、イベントレベルのレポートは作成されません。フィルタが複数のイベントトリガーに一致する場合、最初に一致したイベントトリガーが使用されます。

## デバッグレポート

デバッグレポートを有効にすると、帰属レポートに関するトラブルシューティング情報を返すことができます。これらは、例えば、設定が正常に動作しているかどうかを調べたり、古いクッキーベースの実装と新しい帰属レポートの 実装との測定結果のギャップを理解するために使用することができます。デバッグレポートはすぐに送信されます。イベントレベルレポートや概要レポートと同じスケジュールは適用されません。

デバッグレポートには 2 種類があります。

- **成功デバッグレポート** は、特定の属性レポートの生成が成功したことを予定通り追跡します。成功デバッグレポートは、対応するトリガーが登録されるとすぐに生成され、送信されます。
- **詳細デバッグレポート** は、帰属レポートに帰属ソースおよび帰属トリガーイベントに関連する情報をより詳しく表示します。これにより、ソースが正常に登録されたことを確実に確認したり、不足しているレポートを追跡してその原因（ソースまたはトリガーイベントの登録の失敗、レポートの送信または生成の失敗など）を特定したりすることができます。詳細デバッグレポートは、ソースまたはトリガーの登録直後に送信されます。

> [!NOTE]
> デバッグレポートを使用するには、レポートの送信元がクッキーを設定する必要があります。レポートの受信に設定された送信元がサードパーティーの場合、このクッキーは [サードパーティクッキー](/ja/docs/Web/Privacy/Guides/Third-party_cookies) となり、サードパーティクッキーが無効または利用できないブラウザーではデバッグレポートが利用できなくなります。

### デバッグレポートの使い方

デバッグレポートを使用するには、次の操作を行う必要があります。

1. レポートの送信元で `ar_debug` クッキーを設定します。これは、ソースとトリガーの両方の登録時に存在している必要があります。

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. デバッグ情報を公開する帰属レポートに関連する {{httpheader("Attribution-Reporting-Register-Source")}} および {{httpheader("Attribution-Reporting-Register-Trigger")}} レスポンスヘッダーの `debug_key` フィールドを設定します。それぞれの `debug_key` の値は、10 進文字列として書式化された 64 ビットの符号なし整数でなければなりません。各デバッグキーは固有の ID にしてください。例えば、それぞれをクッキー ID + ソース/トリガーのタイムスタンプとして設定することができます（2 つを比較したい場合は、古いクッキーベースのシステムでも同じタイムスタンプを捕捉してください）。

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > ソース側のデバッグキーを `source_event_id` とは別のものにすると、同じソースイベント ID を持つ個々のレポートを区別できるようにします。

3. オプションで、`Attribution-Reporting-Register-Source` および `Attribution-Reporting-Register-Trigger` ヘッダーの両方で、`debug_reporting` フィールドを `true` に設定します。これを行うと、詳細なデバッグレポートが生成されます。これを行わない場合、生成している帰属レポートのタイプ（イベントレベルまたは集約可能）を反映した、成功のデバッグレポートが生成されます。

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. 生成したいデバッグレポートを受信するための適切なエンドポイントを設定します。デバッグレポートは、レポートの送信元にある 3 つの別個のエンドポイントに送信されます。
   - イベントレベル成功デバッグレポートのエンドポイント: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - 集約成功デバッグレポートのエンドポイント: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - 詳細デバッグレポートのエンドポイント: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

生成された成功デバッグレポートは、帰属レポートとまったく同じで、ソース側とトリガー側のデバッグキーが、それぞれ `"source_debug_key"` および `"trigger_debug_key"` フィールドに含まれています。

詳細および例については、以下をご覧ください。

- [Introduction to debug reports](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) (privacysandbox.google.com, 2023)
- [Set up debug reports](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) (privacysandbox.google.com, 2023)
- [Debugging cookbook](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) (privacysandbox.google.com, 2023)
