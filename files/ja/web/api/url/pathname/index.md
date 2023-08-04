---
title: "URL: pathname プロパティ"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`pathname`** は {{domxref("URL")}} インターフェイスのプロパティで、階層構造内のある位置を表します。これはパスセグメントのリストで構成される文字列で、それぞれの先頭に `/` 文字が付きます。URL にパスセグメントがない場合、 `pathname` プロパティの値は空文字列になります。

`https` や `http` などの URL で、[階層スキーム](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3)（URL 標準では "[special schemes](https://url.spec.whatwg.org/#special-scheme)" と呼んでいます）を持つ URL は、常に少なくとも 1 つの（不可視の）パスセグメント、つまり空文字列を持ちます。そのため、そのような "special scheme" を持つ URL の `pathname` の値は決して空文字列にはなりません。

例えば、URL `https://developer.mozilla.org` のパスセグメントは空文字列の 1 つだけなので、 `pathname` の値は空文字列の前に `/` 文字を付加して構成されます。

システムによっては、スラッグという用語は、人間が読めるキーワードでページを特定する場合、空でないパスの最後のセグメントを意味すると定義しています。例えば、`https://example.org/articles/this-that-other-outre-collection` という URL のスラッグは `this-that-other-outre-collection` です。

システムによっては `;` と `=` の文字を使って、パスセグメントに適用できる引数と引数の値を区切ります。例えば、`https://example.org/users;id=42/tasks;state=open?sort=modified` という URL の場合、システムは `users;id=42` と `tasks;state=open` というパスセグメントから `id=42` と `state=open` というパスセグメント引数を抽出して使用するかもしれません。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // "/ja/docs/Web/API/URL/pathname" とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
