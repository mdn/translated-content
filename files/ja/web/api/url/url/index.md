---
title: "URL: URL() コンストラクター"
short-title: URL()
slug: Web/API/URL/URL
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("URL API")}}

**`URL()`** コンストラクターは、引数によって定義された URL を表す、新しく生成された {{domxref("URL")}} オブジェクトを返します。

与えられたベース URL または結果の URL が有効な URL でない場合、JavaScript の {{jsxref("TypeError")}} 例外が発生します。

{{AvailableInWorkers}}

## 構文

```js-nolint
new URL(url)
new URL(url, base)
```

### 引数

- `url`
  - : 絶対または相対 URL を表す文字列または{{Glossary("stringifier", "文字列化")}}のあるその他のオブジェクト、例えば {{htmlelement("a")}} や {{htmlelement("area")}} 要素です。
    `url` が相対 URL である場合、`base` は必須であり、ベース URL として使用されます。
    `url` が絶対 URL である場合、指定された `base` は無視されます。
- `base` {{optional_inline}}
  - : `url` が相対 URL の場合に使用するベース URL を表す文字列です。
    指定されなかった場合、既定値は `undefined` です。

> **メモ:** 引数 `url` と `base` はそれぞれ、文字列を受け入れる他の Web API と同様に、渡された値から文字列化されます。
> 具体的な例としては、既存の {{domxref("URL")}} オブジェクトをどちらの引数にも使用することができ、そのオブジェクトの {{domxref("URL.href", "href")}} プロパティに文字列化されます。

### 例外

| 例外                             | 説明                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{jsxref("TypeError")}} | `url`（絶対 URL の場合）または `base` + `url`（相対 URL の場合）が、有効な URL ではありません。 |

## 例

```js
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

// 無効な URL:

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

- [`URL` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- 所属しているインターフェース: {{domxref("URL")}}。
