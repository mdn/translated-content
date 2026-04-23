---
title: serviceworker
slug: Web/Progressive_web_apps/Manifest/Reference/serviceworker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}{{Non-standard_header}}

`serviceworker` メンバーは、商業ウェブサイトで指定された決済方法の決済メカニズムを提供するウェブベースの決済アプリケーションを実行するために、ジャストインタイム (JIT) でインストールされ、登録されたサービスワーカーを指定します。詳細は、{{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}} を参照してください。

### 値

`serviceworker` オブジェクトは以下の値を持つことができます。

- `scope` {{experimental_inline}} {{non-standard_inline}}
  - : サービスワーカーの登録スコープを表す文字列です。

- `src` {{experimental_inline}} {{non-standard_inline}}
  - : サービスワーカーのスクリプトをダウンロードするための URL を表す文字列です。

- `use_cache` {{experimental_inline}} {{non-standard_inline}}
  - : 論理値で、 HTTP キャッシュが更新中のサービスワーカーのスクリプトリソースにどのように使用されるかを設定します。
    これは、 {{domxref("ServiceWorkerContainer.register()")}} を使用して JavaScript 経由でサービスワーカーを登録する際に指定する `updateViaCache` オプションの特定の値と同等な機能を提供します。
    - `true`: HTTP キャッシュはインポートのために照会されますが、メインスクリプトは常にネットワークから更新されます。 HTTP キャッシュにインポート用の新しい項目が見つからない場合は、ネットワークから取得されます。 `updateViaCache: "imports"` と同等です。
    - `false`: メインスクリプトやそのインポートには HTTP キャッシュは使用されません。すべてのサービスワーカーのスクリプトリソースはネットワークから更新されます。 `updateViaCache: "none"` と同等です。

## 例

[決済ハンドラー API > 概念と使用方法](/ja/docs/Web/API/Payment_Handler_API#concepts_and_usage)を確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Service Worker API", "サービスワーカー API", "", "nocode")}}
- {{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [決済ハンドラー API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [決済処理の概要](/ja/docs/Web/API/Payment_Request_API/Concepts)
