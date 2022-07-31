---
title: Fetch API
slug: Web/API/Fetch_API
tags:
  - API
  - Fetch
  - Landing
  - Reference
  - レスポンス
  - XMLHttpRequest
  - リクエスト
translation_of: Web/API/Fetch_API
---
<div>{{DefaultAPISidebar("Fetch API")}}</div>

Fetch API は (ネットワーク越しの通信を含む) リソース取得のためのインターフェイスを提供しています。 {{DOMxRef("XMLHttpRequest")}} と似たものではありますが、より強力で柔軟な操作が可能です。

{{AvailableInWorkers}}

## 概念と利用方法

フェッチでは、 {{DOMxRef("Request")}} および {{DOMxRef("Response")}} オブジェクト (およびネットワークリクエストに関わるその他のもの) の汎用的な定義が提供されています。これにより、サービスワーカー、キャッシュ API、リクエストやレスポンスを処理または変更するその他の類似のもの、またはプログラム的にレスポンスを生成する (つまり、コンピュータプログラムまたはパーソナルプログラミング命令を使用する) 必要があるあらゆる種類の利用法など、将来的に必要とされるあらゆる場所で使用できるようになります。

また CORS や HTTP の Origin ヘッダーの振る舞いといった関連した概念についても定義しています。この定義は、現行の分散している個別の定義を置き換えるものです。

リソースを取得するためのリクエストは、 {{DOMxRef("fetch()")}} メソッドを呼ぶことで作成できます。このメソッドは {{DOMxRef("Window")}} や {{DOMxRef("WorkerGlobalScope")}} といったインターフェイスによって実装されています。その結果、リソース取得を必要とする様々な場面での利用が可能です。

`fetch()` メソッドは必須の引数を 1 つ取り、取得したいリソースのパスを指定します。成功か失敗かに関わらず、リクエストに対する {{DOMxRef("Response")}} に解決する {{JSxRef("Promise")}} を返します。第 2 引数は任意で、 `init` オプションオブジェクトを渡すことができます。({{DOMxRef("Request")}} を参照してください。)

{{DOMxRef("Response")}} を受け取ると、レスポンスに含まれるコンテンツ本体と、その処理方法を定義するための多数のメソッドが利用できるようになります。

{{DOMxRef("Request.Request", "Request()")}} および {{DOMxRef("Response.Response", "Response()")}} を利用することで、リクエストとレスポンスを直接作成できます。ただしこれらのオブジェクトは、{{DOMxRef("FetchEvent.respondWith()")}} のような他の API 呼び出しの結果として取得されるべきもので、直接作成しないほうが良いでしょう。

### jQuery との違い

`fetch` は主に 3 つの点で `jQuery.ajax()` と異なります。

- `fetch()` から返されたプロミスは、レスポンスが HTTP `404` や `500` であっても、 **HTTP エラーステータスで拒否されません**。代わりに、正常に解決され (`ok` ステータスが `false` に設定されます)、ネットワーク障害が発生した場合、または要求の完了が妨げられた場合にのみ拒否されます。
- `fetch()` は資格情報の[初期化オプション](/ja/docs/Web/API/fetch#parameters)を (`include` に) 設定しない限り、**オリジンをまたいだ Cookie を送信しません**。

  - [2018 年 4 月](https://github.com/whatwg/fetch/pull/585)、に仕様の既定の認証情報ポリシーが `'same-origin'` に変更され、古いネイティブの fetch が Firefox 61.0b13, Safari 12, Chrome 68 のバージョンのブラウザーで更新されました。
  - これらのブラウザーより古いバージョンをターゲットにしている場合は、 Cookie/ユーザーログイン状態の影響を受ける可能性のあるすべての API リクエストに `'same-origin'` を[初期化オプション](/ja/docs/Web/API/fetch#parameters) に設定した認証情報を必ず含めてください。

> **Note:** Fetch API の詳しい利用方法は [Fetch の使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)を参照してください。また [Fetch の基本概念](/ja/docs/Web/API/Fetch_API/Basic_concepts)では、Fetch API の基本概念が解説されています。

### フェッチの中止

ブラウザーは Fetch や XHR などの操作を完了前に中止させることができる {{DOMxRef("AbortController")}} および {{DOMxRef("AbortSignal")}} インターフェイス (つまり Abort API) に実験的に対応し始めています。詳しくは各インターフェイスのページを参照してください。

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

| 仕様書                | 状態               | 備考     |
| --------------------- | ------------------ | -------- |
| {{SpecName("Fetch")}} | {{Spec2("Fetch")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.fetch")}}

## 関連情報

- [Using Fetch](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
- [Fetch のポリフィル](https://github.com/github/fetch)
- [Fetch の基本概念](/ja/docs/Web/API/Fetch_API/Basic_concepts)
