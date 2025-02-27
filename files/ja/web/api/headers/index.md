---
title: Headers
slug: Web/API/Headers
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`Headers`** は[フェッチ API](/ja/docs/Web/API/Fetch_API) のインターフェイスで、 [HTTP リクエスト／レスポンス](/ja/docs/Web/HTTP/Headers)ヘッダー上のさまざまなアクションを実行します。アクションとしては、リクエストヘッダーのリストに対するヘッダーの取得、設定、追加、削除などがあります。

`Headers` オブジェクトは {{domxref("Request.headers")}} および {{domxref("Response.headers")}} プロパティから受け取ることができ、新しい `Headers` オブジェクトは {{domxref("Headers.Headers", "Headers()")}} コンストラクターで作成することができます。

> [!NOTE]
> 利用可能なヘッダーについての詳細は、 [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)のリファレンスをお読みください。

## 解説

`Headers` オブジェクトは、初期状態では空で 0 個以上の名前と値のペアで構成される関連するヘッダーの連想リストを持っています。 {{domxref("Headers.append","append()")}} （[例](#例)を見てください）のようなメソッドを使用して、ヘッダーを追加することができます。このインターフェイスのすべてのメソッドで、ヘッダー名は大文字小文字を区別しないバイト列として照合されます。

`Headers` を実装しているオブジェクトは、 {{domxref('Headers.entries()', 'entries()')}} を使用しなくても、 {{jsxref("Statements/for...of", "for...of")}} 構造で直接使用することができます。 `for (const p of myHeaders)` は `for (const p of myHeaders.entries())` と同等です。

### 変更の制限

一部の `Headers` オブジェクトは、{{domxref("Headers.set","set()")}}、{{domxref("Headers.delete","delete()")}}、{{domxref("Headers.append","append()")}} の各メソッドでヘッダーが変更できるかどうかの制限があります。この変更の制限は、その `Headers` オブジェクトがどのように作成されたかによって決まります。

- {{domxref("Headers.Headers","Headers()")}} コンストラクターで作成されたヘッダーについては、変更の制限はありません。
- {{domxref("Request")}} オブジェクトのヘッダーについては次の通りです。
  - そのリクエストの {{domxref("Request.mode","mode")}} が `no-cors` である場合、すべての {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}の名前と値が変更できます。
  - そうでない場合、すべての {{Glossary("forbidden header name", "禁止ヘッダーでないヘッダー")}}の名前と値が変更できます。
- {{domxref("Response")}} オブジェクトのヘッダーについては次の通りです。
  - そのレスポンスが {{domxref("Response.error_static", "Response.error()")}} または {{domxref("Response.redirect_static", "Response.redirect()")}} から作成されたか、 {{domxref("Window/fetch", "fetch()")}} 呼び出しから取得されたものであるヘッダーは不変であり、変更することはできません。
  - そうでない場合、そのレスポンスが {{domxref("Response.Response","Response()")}} または {{domxref("Response.json_static","Response.json()")}} で作成されたものであれば、すべての {{Glossary("forbidden header name", "禁止ヘッダーでないレスポンスヘッダー")}}の名前と値が変更できます。

Headers のすべてのメソッドは、[有効な HTTP ヘッダー名](https://fetch.spec.whatwg.org/#concept-header-name)ではない名前を参照として渡そうとすると、 {{jsxref("TypeError")}} が発生します。そのヘッダーが不変である場合は、変更操作で `TypeError` が発生します。それ以外の失敗は、すべて暗黙に失敗します。

## コンストラクター

- {{domxref("Headers.Headers()", "Headers()")}}
  - : 新しい `Headers` オブジェクトを生成します。

## インスタンスメソッド

- {{domxref("Headers.append()")}}
  - : `Headers` オブジェクト内の既存のヘッダーに新しい値を追加するか、まだ存在しない場合はヘッダーを追加します。
- {{domxref("Headers.delete()")}}
  - : `Headers` オブジェクトからヘッダーを削除します。
- {{domxref("Headers.entries()")}}
  - : このオブジェクトに含まれるすべてのキー/値のペアを通して処理するための{{jsxref("Iteration_protocols","イテレーター","","true")}}を返します。
- {{domxref("Headers.forEach()")}}
  - : 指定された関数を、この `Headers` オブジェクトのキー/値のペアそれぞれに対して一度ずつ実行します。
- {{domxref("Headers.get()")}}
  - : `Headers` オブジェクトにある指定された名前を持つ、ヘッダーのすべての値を示す文字列の配列を返します。
- {{domxref("Headers.getSetCookie()")}}
  - : レスポンスに関連付けられたすべての {{httpheader("Set-Cookie")}} ヘッダーの値の入った配列を返します。
- {{domxref("Headers.has()")}}
  - : `Headers` オブジェクトが特定のヘッダーを含むかどうかを示す値を、論理値で返します。
- {{domxref("Headers.keys()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべてのキーを通して処理するための {{jsxref("Iteration_protocols", "イテレーター", "", 1)}}を返します。
- {{domxref("Headers.set()")}}
  - : オブジェクト内の既存のヘッダーに新しい値を設定するか、まだ存在しない場合はヘッダーを追加する。
- {{domxref("Headers.values()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべての値を通して処理するための{{jsxref("Iteration_protocols", "イテレーター", "", 1)}}を返します。

> **メモ:** {{domxref("Headers.set()")}} と {{domxref("Headers.append()")}} の明確な違いは、複数の値を受け入れる特定のヘッダーが既に存在しているときの挙動です。{{domxref("Headers.set()")}} は既存の値を新しい値で上書きしますが、{{domxref("Headers.append()")}} は既存の値の末尾に新しい値を追加します。サンプルコードはそれぞれの専用ページで確認してください。

> [!NOTE]
> ヘッダーを反復処理する時は、自動的に辞書順への並び替えが行われ、重複する名前は結合されます。

## 例

次のコードスニペットでは、`Headers()` コンストラクターを使用して新しいヘッダーを生成し、`append()` を使用して新しいヘッダーを追加しています。その後、 `get()` を使用してヘッダーの値を返します。

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // 'text/xml' を返す。
```

同じことがコンストラクターにオブジェクトリテラルか配列リテラルの配列リテラルを渡すことでできます。

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// または、配列の配列を使用して
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // 'text/xml' が返される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
