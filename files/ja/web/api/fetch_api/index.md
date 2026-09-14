---
title: フェッチ API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{DefaultAPISidebar("Fetch API")}}

フェッチ API は（ネットワーク越しの通信を含む）リソース取得のためのインターフェイスを提供しています。これは {{DOMxRef("XMLHttpRequest")}} をより強力かつ柔軟に置き換えたものです。

## 概念と使用方法

フェッチ API は {{DOMxRef("Request")}} と {{DOMxRef("Response")}} オブジェクト（他にもネットワークリクエストに関係すること）と、CORS や HTTP の Origin ヘッダーの意味づけのような関連の概念を使用します。

リクエストを行ってリソースを読み取るには、{{domxref("Window/fetch", "fetch()")}} メソッドを使用します。これは {{DOMxRef("Window")}} と {{DOMxRef("WorkerGlobalScope", "Worker")}} コンテキストの両方でグローバルメソッドです。このため、リソースを取得するほとんどのコンテキストで利用できます。

`fetch()` メソッドは必須の引数を 1 つ取り、取得したいリソースのパスを指定します。これは {{JSxRef("Promise")}} を返します。これはサーバーがヘッダーで返答するとすぐに、**サーバーレスポンスが HTTP エラーステータスであったとしても**、 {{DOMxRef("Response")}} に解決します。第 2 引数は任意で、 `init` オプションオブジェクトを渡すことができます（{{DOMxRef("Request")}} を参照してください）。

{{DOMxRef("Response")}} を受け取ると、レスポンスに含まれるコンテンツ本体と、その処理方法を定義するための多数のメソッドが利用できるようになります。

{{DOMxRef("Request.Request", "Request()")}} および {{DOMxRef("Response.Response", "Response()")}} を利用することで、リクエストとレスポンスを直接作成できます。ただしこれらのオブジェクトは、{{DOMxRef("FetchEvent.respondWith()")}} のような他の API 呼び出しの結果として取得されるべきもので、直接作成しないほうが良いでしょう。

フェッチ API の詳しい利用方法は [フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)を参照してください。

### 遅延フェッチ

{{domxref("Window/fetchLater", "fetchLater()")}} API を使用すると、開発者は遅延フェッチをリクエストできます。これは、指定した時間が経過した後、あるいはページが閉じられたときや別のページに移動したときに送信されるものです。詳しくは、[遅延フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Deferred_Fetch)を参照してください。

## Fetch インターフェイス

- {{DOMxRef("Window.fetch", "fetch()")}}
  - : `fetch()` メソッドはリソース取得のために使用されます。
- {{domxref("Window.fetchLater()")}}
  - : 遅延フェッチリクエストを行うために使用します。
- {{domxref("DeferredRequestInit")}}
  - : 遅延フェッチリクエストの設定に使用できる一連のオプションを表します。
- {{domxref("FetchLaterResult")}}
  - : 遅延フェッチをリクエストした結果を表します。
- {{DOMxRef("Headers")}}
  - : リクエストとレスポンスのヘッダーを表現しています。ヘッダー情報への問い合わせや、結果による振る舞いの選択が可能です。
- {{DOMxRef("Request")}}
  - : リソースのリクエストを表します。
- {{DOMxRef("Response")}}
  - : リクエストに対するレスポンスを表します。

## HTTP ヘッダー

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : `fetchLater()` API の[最上位クォータ](/ja/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas)を制御します。
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : `fetchLater()` API の[共有クロスオリジンサブフレームクォータ](/ja/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas)を制御します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
- [ローカルネットワークアクセス](/ja/docs/Web/Security/Defenses/Local_network_access)
