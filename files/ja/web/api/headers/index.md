---
title: Headers
slug: Web/API/Headers
---

{{ APIRef("Fetch") }}

[Fetch API](/ja/docs/Web/API/Fetch_API) の **`Headers`** インターフェースは、HTTP リクエストとレスポンスのヘッダ上のさまざまなアクションを実行します。これらのアクションには、取得や設定、追加、削除が含まれます。`Headers` オブジェクトは、最初は空で 0 個以上の名前と値のペアで構成される関連するヘッダリストを持っています。追加には {{domxref("Headers.append","append()")}}（[例](#例) を見てください）のようなメソッドを使用できます。このインタフェースのすべてのメソッドで、ヘッダ名は大文字と小文字を区別しないバイトシーケンスにマッチしています。

セキュリティ上の理由から、いくつかのヘッダはユーザーエージェントでしか制御できません。それらのヘッダには、{{Glossary("Forbidden_header_name", "forbidden header names", 1)}} と {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}} が含まれます。

ヘッダは関連するガードも持っています。ガードは `immutable` か `request`、`request-no-cors`、`response`、`none` のいずれかの値を取ります。これはヘッダを変更する {{domxref("Headers.set","set()")}} メソッドと {{domxref("Headers.delete","delete()")}} メソッド、{{domxref("Headers.append","append()")}} メソッドに影響を与えます。詳細は {{Glossary("Guard")}} を見てください。

{{domxref("Request.headers")}} プロパティと {{domxref("Response.headers")}} プロパティ経由で `Headers` オブジェクトを取得することも、{{domxref("Headers.Headers()")}} コンストラクタを使用して新しい `Headers` オブジェクトを生成することもできます。

`Headers` を実装したオブジェクトは、{{domxref('Headers.entries()', 'entries()')}} の代わりに直接 {{jsxref("Statements/for...of", "for...of")}} 構文で使用できます： `for (var p of myHeaders)` と `for (var p of myHeaders.entries())` は同等です。

> **メモ:** 利用できるヘッダについては[HTTP ヘッダ](/ja/docs/Web/HTTP/Headers) を参照してください。

## コンストラクタ

- {{domxref("Headers.Headers()")}}
  - : 新しい `Headers` オブジェクトを生成する。

## メソッド

- {{domxref("Headers.append()")}}
  - : `Headers` オブジェクト内の既存のヘッダに新しい値を追加するか、まだ存在しない場合はヘッダを追加する。
- {{domxref("Headers.delete()")}}
  - : `Headers` オブジェクトからヘッダを削除する。
- {{domxref("Headers.entries()")}}
  - : このオブジェクトに含まれるすべてのキー/値 ペアを通して処理するための {{jsxref("Iteration_protocols","iterator")}} を返す。
- {{domxref("Headers.get()")}}
  - : `Headers` オブジェクト内から指定したヘッダのすべての値の {{domxref("ByteString")}} を返す。
- {{domxref("Headers.has()")}}
  - : `Headers` オブジェクトが特定のヘッダを含むかどうかを示す boolean 値を返す。
- {{domxref("Headers.keys()")}}
  - : このオブジェクトに含まれるキー/値 ペアのすべてのキーを通して処理するための {{jsxref("Iteration_protocols","iterator")}} を返す。
- {{domxref("Headers.set()")}}
  - : オブジェクト内の既存のヘッダに新しい値を設定するか、まだ存在しない場合はヘッダを追加する。
- {{domxref("Headers.values()")}}
  - : このオブジェクトに含まれるキー/値 ペアのすべての値を通して処理するための {{jsxref("Iteration_protocols","iterator")}} を返す。

> **メモ:** {{domxref("Headers.set()")}} と {{domxref("Headers.append()")}} の明確な違いは、複数の値を受け入れる特定のヘッダが既に存在しているときの挙動です。{{domxref("Headers.set()")}} は既存の値を新しい値で上書きしますが、{{domxref("Headers.append()")}} は既存の値の末尾に新しい値を追加します。サンプルコードはそれぞれの専用ページで確認してください。

> **メモ:** [有効な HTTP ヘッダ名](https://fetch.spec.whatwg.org/#concept-header-name) ではない名前の参照を渡そうとすると、すべての Headers メソッドは `TypeError` をスローします。ヘッダに immutable {{Glossary("Guard")}} がある場合、変更操作は `TypeError` をスローします。そのほかの場外の場合は、単にに失敗します。

> **メモ:** ヘッダーをイテレートする時、自動的に辞書順への並び替えが行われ、重複する名前は結合されます。

### 廃止になった機能

- {{domxref("Headers.getAll()")}}
  - : `Headers` オブジェクト内で指定されたヘッダのすべての値を配列として返す。このメソッドは規格から削除されており、 {{domxref("Headers.get()")}} は現在では与えられた名前に一致する最初のものを返します。

## 例

次のコードスニペットでは、`Headers()` コンストラクタを使用して新しいヘッダを生成し、`append()` を使用して新しいヘッダを追加しています。その後、`get()` を使用してヘッダの値を返しています：

```js
var myHeaders = new Headers();

myHeaders.append('Content-Type', 'text/xml');
myHeaders.get('Content-Type') // 'text/xml' を返す。
```

同じことがコンストラクタにオブジェクトリテラルか配列リテラルの配列リテラルを渡すことでできます。

```js
var myHeaders = new Headers({
    'Content-Type': 'text/xml'
});

// or, using an array of arrays:
myHeaders = new Headers([
    ['Content-Type', 'text/xml']
]);

myHeaders.get('Content-Type') // should return 'text/xml'
```

## 仕様

| 仕様                                                             | 状態                     | コメント |
| ---------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('Fetch','#headers-class','Headers')}} | {{Spec2('Fetch')}} |          |

## ブラウザ実装状況

{{Compat("api.Headers")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
