---
title: フェッチ API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{DefaultAPISidebar("Fetch API")}}

フェッチ API は（ネットワーク越しの通信を含む）リソース取得のためのインターフェイスを提供しています。 {{DOMxRef("XMLHttpRequest")}} と似たものではありますが、より強力で柔軟な操作が可能です。

{{AvailableInWorkers}}

## 概念と利用方法

フェッチでは、 {{DOMxRef("Request")}} および {{DOMxRef("Response")}} オブジェクト（およびネットワークリクエストに関わるその他のもの）の汎用的な定義が提供されています。これにより、サービスワーカー、キャッシュ API、リクエストやレスポンスを処理または変更するその他の類似のもの、またはプログラム的にレスポンスを生成する (つまり、コンピュータプログラムまたはパーソナルプログラミング命令を使用する) 必要があるあらゆる種類の利用法など、将来的に必要とされるあらゆる場所で使用できるようになります。

また CORS や HTTP の Origin ヘッダーの振る舞いといった関連した概念についても定義しています。この定義は、現行の分散している個別の定義を置き換えるものです。

リソースを取得するためのリクエストは、 {{DOMxRef("fetch()")}} メソッドを呼ぶことで作成できます。このメソッドは {{DOMxRef("Window")}} や {{DOMxRef("WorkerGlobalScope")}} といったインターフェイスによって実装されています。その結果、リソース取得を必要とする様々な場面での利用が可能です。

`fetch()` メソッドは必須の引数を 1 つ取り、取得したいリソースのパスを指定します。これは {{JSxRef("Promise")}} を返します。これはサーバーがヘッダーで返答するとすぐに、**サーバーレスポンスが HTTP エラーステータスであったとしても**、 {{DOMxRef("Response")}} に解決します。第 2 引数は任意で、 `init` オプションオブジェクトを渡すことができます（{{DOMxRef("Request")}} を参照してください）。

{{DOMxRef("Response")}} を受け取ると、レスポンスに含まれるコンテンツ本体と、その処理方法を定義するための多数のメソッドが利用できるようになります。

{{DOMxRef("Request.Request", "Request()")}} および {{DOMxRef("Response.Response", "Response()")}} を利用することで、リクエストとレスポンスを直接作成できます。ただしこれらのオブジェクトは、{{DOMxRef("FetchEvent.respondWith()")}} のような他の API 呼び出しの結果として取得されるべきもので、直接作成しないほうが良いでしょう。

### jQuery との違い

`fetch` は主に 3 つの点で `jQuery.ajax()` と異なります。

- `fetch()` から返されたプロミスは、レスポンスが HTTP `404` や `500` であっても、 **HTTP エラーステータスで拒否されません**。代わりに、正常に解決され (`ok` ステータスが `false` に設定されます)、ネットワーク障害が発生した場合、または要求の完了が妨げられた場合にのみ拒否されます。
- `fetch()` は _credentials_ の[初期化オプション](/ja/docs/Web/API/fetch#引数)を（`include` に）設定しない限り、**オリジンをまたいだ Cookie を送信しません**。

  - [2018 年 4 月](https://github.com/whatwg/fetch/pull/585)、に仕様の既定の認証情報ポリシーが `'same-origin'` に変更され、古いネイティブの fetch が Firefox 61.0b13, Safari 12, Chrome 68 のバージョンのブラウザーで更新されました。
  - これらのブラウザーより古いバージョンをターゲットにしている場合は、 Cookie/ユーザーログイン状態の影響を受ける可能性のあるすべての API リクエストに `'same-origin'` を[初期化オプション](/ja/docs/Web/API/fetch#引数) に設定した認証情報を必ず含めてください。

> **メモ:** フェッチ API の詳しい利用方法は [フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)を参照してください。また [フェッチの基本概念](/ja/docs/Web/API/Fetch_API/Basic_concepts)では、フェッチ API の基本概念が解説されています。

### フェッチの中止

未完了の `fetch()` （または `XMLHttpRequest`）の操作を中止するには、 {{DOMxRef("AbortController")}} および {{DOMxRef("AbortSignal")}} インターフェイスを使用してください。

## Fetch インターフェイス

- {{DOMxRef("fetch()")}}
  - : `fetch()` メソッドはリソース取得のために使用されます。
- {{DOMxRef("Headers")}}
  - : リクエストとレスポンスのヘッダーを表現しています。ヘッダー情報への問い合わせや、結果による振る舞いの選択が可能です。
- {{DOMxRef("Request")}}
  - : リソースのリクエストを表します。
- {{DOMxRef("Response")}}
  - : リクエストに対するレスポンスを表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチの使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
- [フェッチのポリフィル](https://github.com/github/fetch)
- [フェッチの基本概念](/ja/docs/Web/API/Fetch_API/Basic_concepts)
