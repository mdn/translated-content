---
title: "URL: URL() コンストラクター"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 870c21b730828c20ce7059dbd358eec8bed1a4c5
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

**`URL()`** コンストラクターは、引数によって定義された URL を表す、新しく生成された {{domxref("URL")}} オブジェクトを返します。

与えられたベース URL または結果の URL が有効な URL でない場合、JavaScript の {{jsxref("TypeError")}} 例外が発生します。

## 構文

```js-nolint
new URL(url)
new URL(url, base)
```

### 引数

- `url`
  - : 文字列または{{Glossary("stringifier", "文字列化")}}のあるその他のオブジェクトで、絶対またはベース URL に対する相対参照を表します。
    `url` が相対参照である場合、`base` は必須であり、最終的な URL を解決するために使用されます。
    `url` が絶対 URL である場合、指定された `base` は結果の URL を作成するためには使用されません。
- `base` {{optional_inline}}
  - : 文字列で、`url` が相対参照の場合に使用するベース URL を表します。
    指定されなかった場合、既定値は `undefined` です。

    `base` を指定した場合、解決した URL は単に `url` と `base` を結合したものではありません。
    親ディレクトリーおよびカレントディレクトリーへの相対参照は、`base` URL の最後のスラッシュまでのパス部分をカレントディレクトリーとした相対で解決されます。ただし、最後のスラッシュ以降は含まれません。
    ルートへの相対参照は、ベースを原点とした相対で解決されます。
    詳細については、[URL への相対参照の解決](/ja/docs/Web/API/URL_API/Resolving_relative_references)を参照してください。

> [!NOTE]
> 引数 `url` と `base` はそれぞれ、渡された値を何でも、{{domxref("HTMLAnchorElement")}} や {{domxref("HTMLAreaElement")}} であっても文字列化します。これは、文字列を受け入れる他の Web API と同様です。
> 具体的な例としては、既存の {{domxref("URL")}} オブジェクトをどちらの引数にも使用することができ、そのオブジェクトの {{domxref("URL.href", "href")}} プロパティに文字列化されます。

### 例外

- {{jsxref("TypeError")}}
  - : `url`（絶対 URL の場合）または `base` + `url`（相対 URL の場合）が、有効な URL ではない場合。

## 例

コンストラクターを使用する例をいくつか示します。

> [!NOTE]
> [相対参照の URL への解決](/ja/docs/Web/API/URL_API/Resolving_relative_references)では、さまざまな `url` と `base` 値が最終的な絶対 URL に解決される方法を説明するさらなる例が提供されています。

```js-nolint
// ベース URL:
let baseUrl = "https://developer.mozilla.org";

let A = new URL("/", baseUrl);
// => 'https://developer.mozilla.org/'

let B = new URL(baseUrl);
// => 'https://developer.mozilla.org/'

new URL("ja/docs", B);
// => 'https://developer.mozilla.org/ja/docs'

let D = new URL("/ja/docs", B);
// => 'https://developer.mozilla.org/ja/docs'

new URL("/ja/docs", D);
// => 'https://developer.mozilla.org/ja/docs'

new URL("/ja/docs", A);
// => 'https://developer.mozilla.org/ja/docs'

new URL("/ja/docs", "https://developer.mozilla.org/fr-FR/toto");
// => 'https://developer.mozilla.org/ja/docs'
```

こちらは無効な URL の例です。

```js
new URL("/ja/docs", "");
// Raises a TypeError exception as '' is not a valid URL

new URL("/ja/docs");
// Raises a TypeError exception as '/ja/docs' is not a valid URL

// 他の例:

new URL("http://www.example.com");
// => 'http://www.example.com/'

new URL("http://www.example.com", B);
// => 'http://www.example.com/'

new URL("", "https://example.com/?query=1");
// => 'https://example.com/?query=1' （Edge 79 以前はクエリー引数を除去する）

new URL("/a", "https://example.com/?query=1");
// => 'https://example.com/a' (see relative URLs)

new URL("//foo.com", "https://example.com");
// => 'https://foo.com/' (see relative URLs)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("URL.parse_static", "URL.parse()")}}: 例外を発生しないこのコンストラクターの代用
- [`URL` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- 所属しているインターフェイス: {{domxref("URL")}}
