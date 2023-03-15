---
title: URL
slug: Web/API/URL
---

{{APIRef("URL API")}}

**`URL`** インターフェイスは、{{glossary("URL", "URL")}} の解析、構築、正規化、およびエンコードに使用します。 URL のコンポーネントを簡単に読み取って変更できるプロパティを提供することで機能します。 通常、新しい `URL` オブジェクトを作成するにはコンストラクターを呼び出すときに URL を文字列として指定するか、相対 URL とベース URL を指定します。その後、解析された URL のコンポーネントを簡単に読み取ったり、URL を変更したりすることができます。

ブラウザーがまだ {{domxref("URL.URL", "URL()")}} コンストラクターをサポートしていない場合は、{{domxref("Window")}} インターフェイスの {{domxref("Window.URL")}} プロパティを使用して `URL` オブジェクトにアクセスできます。 対象とするブラウザーのいずれかに、この接頭辞を付ける必要があるかどうかを確認してください。

{{AvailableInWorkers}}

## コンストラクター

- {{domxref("URL.URL", "new URL()")}}
  - : 絶対 URL 文字列、または相対 URL 文字列とベース URL 文字列を使用して指定された URL を参照する `URL` オブジェクトを作成して返します。

## プロパティ

- {{domxref("URL.hash", "hash")}}
  - : `'#'` に続いて URL のフラグメント識別子を含む {{domxref("USVString")}}。
- {{domxref("URL.host", "host")}}
  - : ドメイン（_ホスト名_）に続いて（ポートが指定されている場合）、`':'` と URL の*ポート*を含む {{domxref("USVString")}}。
- {{domxref("URL.hostname", "hostname")}}
  - : URL のドメインを含む {{domxref("USVString")}}。
- {{domxref("URL.href", "href")}}
  - : URL 全体を含む {{domxref("USVString")}} を返す{{Glossary("stringifier", "文字列化子")}}です。
- {{domxref("URL.origin", "origin")}} {{readonlyInline}}
  - : URL のオリジン、つまりそのスキーム、ドメイン、およびポートを含む {{domxref("USVString")}} を返します。
- {{domxref("URL.password", "password")}}
  - : ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}}。
- {{domxref("URL.pathname", "pathname")}}
  - : 最初の `'/'` に続いて URL のパスを含む {{domxref("USVString")}}。
- {{domxref("URL.port", "port")}}
  - : URL のポート番号を含む {{domxref("USVString")}}。
- {{domxref("URL.protocol", "protocol")}}
  - : 最後の `':'` までを含めた URL のプロトコルスキームを含む {{domxref("USVString")}}。
- {{domxref("URL.search", "search")}}
  - : URL 引数文字列を示す {{domxref("USVString")}}。 引数が指定されている場合、この文字列には先頭の `?` 文字で始まるすべての引数が含まれます。
- {{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}
  - : `search` で見つかった個々のクエリー引数にアクセスするために使用できる {{domxref("URLSearchParams")}} オブジェクト。
- {{domxref("URL.username","username")}}
  - : ドメイン名の前に指定されたユーザー名を含む {{domxref("USVString")}}。

## メソッド

- {{domxref("URL.toString", "toString()")}}
  - : URL 全体を含む {{domxref("USVString")}} を返します。 {{domxref("URL.href")}} と同義ですが、値の変更に使用することはできません。
- {{domxref("URL.toJSON", "toJSON()")}}
  - : URL 全体を含む {{domxref("USVString")}} を返します。 `href` プロパティと同じ文字列を返します。

## 静的メソッド

- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : 一意の blob URL を含む {{domxref("DOMString")}} を返します。 これは、スキームとして `blob:` を含む URL で、その後にブラウザー内のオブジェクトを一意に識別する不透明な文字列が続きます。
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : {{domxref("URL.createObjectURL()")}} を使用して以前に生成したオブジェクト URL を取り消します。

## 使用上の注意

コンストラクターは、`url` 引数と、`url` 引数が相対 URL の場合にベースとして使用するオプションの `base` 引数を受け取ります。

```js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

URL を構築するために URL のプロパティを設定できます。

```js
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URL は、{{RFC(3986)}} にあるルールに従ってエンコードされます。 例えば、次のとおりです。

```js
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

URL のクエリー文字列を構築および操作するために、{{domxref("URLSearchParams")}} インターフェイスを使用できます。

現在のウィンドウの URL から検索引数を取得するには、次のようにします。

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

URL の `toString()` メソッドは `href` プロパティの値を返すだけなので、コンストラクターを使用して URL を直接に正規化およびエンコードできます。

```js
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.URL")}}

## 関連情報

- [URL API](/ja/docs/Web/API/URL_API)
- [URL とは何か](/ja/docs/Learn/Common_questions/What_is_a_URL)
- `URL` オブジェクトを取得するプロパティ: {{domxref("Window.URL")}}
- {{domxref("URLSearchParams")}}
