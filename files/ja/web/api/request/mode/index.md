---
title: Request.mode
slug: Web/API/Request/mode
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

{{domxref("Request")}} インターフェースの **`mode`** 読み取り専用プロパティは、リクエストのモード（たとえば、`cors`、`no-cors`、`cors-with-forced-preflight`、`same-origin`）を含みます。これは、クロスオリジンリクエストに対して有効なレスポンスができるか、またレスポンスのプロパティが読み取り可能かどうかを判定するために使用されます。

## 構文

```
var myMode = request.mode;
```

### 値

{{domxref("RequestMode")}} の値は以下のいずれかです。

- `same-origin` — このモードを設定してほかのオリジンにリクエストをした場合、結果は単純にエラーになります。リクエストが常に同一オリジンに行われることを保証するために使用できます。
- `no-cors` — `HEAD か` `GET`、`POST` 以外のメソッドを防ぎます。任意の ServiceWorkers がこれらをインターセプトする場合、[シンプルヘッダー](https://fetch.spec.whatwg.org/#simple-header)を除いてヘッダーを追加したりオーバーライドしたりできなくなります。加えて、JavaScript は解決された {{domxref("Response")}} のプロパティにはアクセスできません。これは ServiceWorkers が Web のセマンティクスに影響を与えないことを保証し、ドメインを跨いでデータが流出することでセキュリティやプライバシーの問題が生じるのを防ぎます。
- `cors` — クロスオリジンリクエストを許可します。たとえば、サードパーティベンダーが提供する様々な API にアクセスできます。これらは、[CORS プロトコル](/ja/docs/Web/HTTP/Access_control_CORS)に則ることが期待されています。[制限された](https://fetch.spec.whatwg.org/#concept-filtered-response-cors)ヘッダーだけが {{domxref("Response")}} で使用できますが、body は読み取り可能です。
- `navigate` — ナビゲーションを許可します。`navigate` は HTML ナビゲーションによってのみ利用されることを意図しています。ナビゲーションリクエストはドキュメント間のナビゲーションの場合にだけ生成されます。

#### デフォルトの mode

リクエストは様々な方法で初期化されますが、mode の値はその方法によって変わります。

たとえば、`Request`オブジェクトが{{domxref("Request.Request")}}コンストラクタで生成された場合、`mode`の値は`cors`にセットされます。

しかし、リクエストが{{domxref("Request.Request")}}コンストラクタ以外で生成された場合は`mode`として通常`no-cors`がセットされます。たとえばマークアップから生成された埋め込みリソースのようなリクエストは、[`crossorigin`](/ja/docs/Web/HTML/CORS_settings_attributes)アトリビュートが設定されていない限り、`no-cors`を利用します。そのようなものの例として、{{HTMLElement("link")}} や {{HTMLElement("script")}} エレメント（ただしモジュールを除く）、{{HTMLElement("img")}}、{{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("object")}}、{{HTMLElement("embed")}}、{{HTMLElement("iframe")}} エレメントなどが存在します。

## 例

以下のスニペットは、{{domxref("Request.Request()")}} コンストラクタを使って（スクリプトと同じディレクトリにある画像ファイルのために）新しいリクエストを生成してから、リクエストモードを変数に保存しています：

```js
var myRequest = new Request('flowers.jpg');
var myMode = myRequest.mode; // 既定で "cors" を返す。
```

## 仕様

| 仕様                                                             | 状態                     | コメント           |
| ---------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch','#dom-request-mode','mode')}} | {{Spec2('Fetch')}} | Initial definition |

## ブラウザ実装状況

{{Compat("api.Request.mode")}}

## 関連項目

- [**ServiceWorker API**](/ja/docs/Web/API/ServiceWorker_API)
- [**HTTP access control (CORS)**](/ja/docs/Web/HTTP/Access_control_CORS)
- [**HTTP**](/ja/docs/Web/HTTP)
