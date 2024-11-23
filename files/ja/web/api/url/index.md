---
title: URL
slug: Web/API/URL
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

**`URL`** インターフェイスは、{{glossary("URL", "URL")}} の解釈、構築、正規化、およびエンコードに使用します。 URL のコンポーネントを簡単に読み取って変更できるプロパティを提供することで機能します。

通常、新しい `URL` オブジェクトを作成するにはコンストラクターを呼び出すときに URL を文字列として指定するか、相対 URL とベース URL を指定します。その後、解釈された URL のコンポーネントを簡単に読み取ったり、URL を変更したりすることができます。

## コンストラクター

- {{domxref("URL.URL", "URL()")}}
  - : `URL` オブジェクトを、URL 文字列とオプションのベース URL 文字列から作成し、それを返します。
    渡された引数が有効な URL を定義していない場合、例外が発生します。

## プロパティ

- {{domxref("URL.hash", "hash")}}
  - : `'#'` に続いて URL のフラグメント識別子の入った文字列です。
- {{domxref("URL.host", "host")}}
  - : ドメイン（_ホスト名_）に続いて（ポートが指定されている場合）、`':'` と URL の*ポート番号*の入った文字列。
- {{domxref("URL.hostname", "hostname")}}
  - : URL のドメインの入った文字列です。
- {{domxref("URL.href", "href")}}
  - : URL 全体の入った文字列を返す{{Glossary("stringifier", "文字列化子")}}です。
- {{domxref("URL.origin", "origin")}} {{ReadOnlyInline}}
  - : URL のオリジン、つまりそのスキーム、ドメイン、およびポート番号の入った文字列を返します。
- {{domxref("URL.password", "password")}}
  - : ドメイン名の前に指定されたパスワードの入った文字列です。
- {{domxref("URL.pathname", "pathname")}}
  - : 最初の `'/'` に続いて URL のパスの入り、クエリー文字列やフラグメントが入らない文字列です。
- {{domxref("URL.port", "port")}}
  - : URL のポート番号の入った文字列です。
- {{domxref("URL.protocol", "protocol")}}
  - : 最後の `':'` までを含めた URL のプロトコルスキームの入った文字列です。
- {{domxref("URL.search", "search")}}
  - : URL 引数文字列を示す文字列です。引数が指定されている場合、この文字列には先頭の `?` 文字で始まるすべての引数が含まれます。
- {{domxref("URL.searchParams", "searchParams")}} {{ReadOnlyInline}}
  - : `search` で見つかった個々のクエリー引数にアクセスするために使用できる {{domxref("URLSearchParams")}} オブジェクトです。
- {{domxref("URL.username","username")}}
  - : ドメイン名の前に指定されたユーザー名の入った文字列です。

## 静的メソッド

- {{domxref("URL.canParse_static", "canParse()")}}
  - : URL 文字列とオプションのベース URL 文字列から定義された URL が解釈可能で有効かどうかを示す論理値を返します。
- {{domxref("URL.createObjectURL_static", "createObjectURL()")}}
  - : 一意の blob URL の入った文字列を返します。 これは、スキームとして `blob:` の入った URL で、その後にブラウザー内のオブジェクトを一意に識別する不透明な文字列が続きます。
- {{domxref("URL.parse_static", "parse()")}}
  - : `URL` オブジェクトを、URL 文字列とオプションのベース URL 文字列から作成して返します。渡された引数が無効な `URL` を定義している場合は、`null` を返します。
- {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}
  - : {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} を使用して以前に生成したオブジェクト URL を取り消します。

## メソッド

- {{domxref("URL.toString", "toString()")}}
  - : URL 全体の入った文字列を返します。 {{domxref("URL.href")}} と同義ですが、値の変更に使用することはできません。
- {{domxref("URL.toJSON", "toJSON()")}}
  - : URL 全体の入った文字列を返します。 `href` プロパティと同じ文字列を返します。

## 使用上の注意

コンストラクターは、`url` 引数と、`url` 引数が相対 URL の場合にベースとして使用するオプションの `base` 引数を受け取ります。

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

コンストラクターは URL を有効な URL に解釈できない場合に例外を発生させます。
上記のコードを [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロックの中で呼び出すか、{{domxref("URL.canParse_static", "canParse()")}} 静的メソッドを使って先に URL が有効かどうかをチェックしてください。

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("無効な URL"); // 無効な URL
}
```

URL を構築するために URL のプロパティを設定できます。

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URL は、{{RFC(3986)}} にあるルールに従ってエンコードされます。 例えば、次のとおりです。

```js
url.pathname = "démonstration.html";
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

URL のクエリー文字列を構築および操作するために、{{domxref("URLSearchParams")}} インターフェイスを使用できます。

現在のウィンドウの URL から検索引数を取得するには、次のようにします。

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

URL の {{domxref("URL.toString", "toString()")}} メソッドは {{domxref("URL.href", "href")}} プロパティの値を返すだけなので、コンストラクターを使用して URL を直接に正規化およびエンコードできます。

```js
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URL` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/ja/docs/Web/API/URL_API)
- [URL とは何か](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- {{domxref("URLSearchParams")}}
