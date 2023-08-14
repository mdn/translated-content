---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{APIRef("Fetch API")}}

**`Headers`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、 [HTTP リクエスト／レスポンス](/ja/docs/Web/HTTP/Headers)ヘッダー上のさまざまなアクションを実行します。アクションとしては、リクエストヘッダーのリストに対するヘッダーの取得、設定、追加、削除などがあります。

`Headers` オブジェクトは、初期状態では空で 0 個以上の名前と値のペアで構成される関連するヘッダーの連想リストを持っています。 {{domxref("Headers.append","append()")}} （[例](#例)を見てください）のようなメソッドを使用して、ヘッダーを追加することができます。このインターフェイスのすべてのメソッドで、ヘッダー名は大文字小文字を区別しないバイト列として照合されます。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名", 1)}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名", 1)}}があります。

ヘッダーは関連するガードも持っています。ガードは `immutable`、`request`、`request-no-cors`、`response`、`none` のいずれかの値を取ります。これはヘッダーを変更する {{domxref("Headers.set","set()")}} メソッドと {{domxref("Headers.delete","delete()")}} メソッド、{{domxref("Headers.append","append()")}} メソッドに影響を与えます。詳細は{{Glossary("Guard", "ガード")}}を見てください。

`Headers` オブジェクトは {{domxref("Request.headers")}} および {{domxref("Response.headers")}} プロパティ経由で取得することができ、また新しい `Headers` オブジェクトを {{domxref("Headers.Headers", "Headers()")}} コンストラクターで生成することもできます。

`Headers` を実装したオブジェクトは、{{domxref('Headers.entries()', 'entries()')}} の代わりに直接 {{jsxref("Statements/for...of", "for...of")}} 構文で使用することができます。 `for (const p of myHeaders)` と `for (const p of myHeaders.entries())` は同等です。

> **メモ:** 利用できるヘッダーについては[HTTP ヘッダー](/ja/docs/Web/HTTP/Headers) を参照してください。

## コンストラクター

- {{domxref("Headers.Headers()", "Headers()")}}
  - : 新しい `Headers` オブジェクトを生成します。

## インスタンスメソッド

- {{domxref("Headers.append()")}}
  - : `Headers` オブジェクト内の既存のヘッダーに新しい値を追加するか、まだ存在しない場合はヘッダーを追加します。
- {{domxref("Headers.delete()")}}
  - : `Headers` オブジェクトからヘッダーを削除します。
- {{domxref("Headers.entries()")}}
  - : このオブジェクトに含まれるすべてのキー/値のペアを通して処理するための {{jsxref("Iteration_protocols","iterator")}} を返します。
- {{domxref("Headers.forEach()")}}
  - : 指定された関数を、この `Headers` オブジェクトのキー/値のペアそれぞれに対して一度ずつ実行します。
- {{domxref("Headers.get()")}}
  - : `Headers` オブジェクトにある指定された名前を持つ、ヘッダーのすべての値を示す文字列の配列を返します。
- {{domxref("Headers.has()")}}
  - : `Headers` オブジェクトが特定のヘッダーを含むかどうかを示す値を、論理値で返します。
- {{domxref("Headers.keys()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべてのキーを通して処理するための {{jsxref("Iteration_protocols", "イテレーター", "", 1)}}を返します。
- {{domxref("Headers.set()")}}
  - : オブジェクト内の既存のヘッダーに新しい値を設定するか、まだ存在しない場合はヘッダーを追加する。
- {{domxref("Headers.values()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべての値を通して処理するための{{jsxref("Iteration_protocols", "イテレーター", "", 1)}}を返します。

> **メモ:** {{domxref("Headers.set()")}} と {{domxref("Headers.append()")}} の明確な違いは、複数の値を受け入れる特定のヘッダーが既に存在しているときの挙動です。{{domxref("Headers.set()")}} は既存の値を新しい値で上書きしますが、{{domxref("Headers.append()")}} は既存の値の末尾に新しい値を追加します。サンプルコードはそれぞれの専用ページで確認してください。

> **メモ:** すべての Headers メソッドで、[有効な HTTP ヘッダー名](https://fetch.spec.whatwg.org/#concept-header-name) ではない名前の参照を渡そうとすると {{jsxref("TypeError")}} が発生します。ヘッダーに immutable {{Glossary("Guard", "ガード")}}がある場合、変更操作をしようとすると `TypeError` が発生します。します。そのほかの場外の場合は、単に失敗します。

> **メモ:** ヘッダーを反復処理する時は、自動的に辞書順への並び替えが行われ、重複する名前は結合されます。

## 例

次のコードスニペットでは、`Headers()` コンストラクターを使用して新しいヘッダーを生成し、`append()` を使用して新しいヘッダーを追加しています。その後、 `get()` を使用してヘッダーの値を返します。

```js
const myHeaders = new Headers();

myHeaders.append('Content-Type', 'text/xml');
myHeaders.get('Content-Type') // 'text/xml' を返す。
```

同じことがコンストラクターにオブジェクトリテラルか配列リテラルの配列リテラルを渡すことでできます。

```js
let myHeaders = new Headers({
    'Content-Type': 'text/xml'
});

// or, using an array of arrays:
myHeaders = new Headers([
    ['Content-Type', 'text/xml']
]);

myHeaders.get('Content-Type') // should return 'text/xml'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
