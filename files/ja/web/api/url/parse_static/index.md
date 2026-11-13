---
title: "URL: parse() 静的メソッド"
short-title: parse()
slug: Web/API/URL/parse_static
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}}

**`URL.parse()`** は {{domxref("URL")}} インターフェイスの静的メソッドで、引数で定義された {{domxref("URL")}} を表す、新たに作成された URL オブジェクトを返します。

指定されたベース URL または結果の URL が解析可能で有効な URL でない場合、`null` が返されます。
これは、{{domxref("URL.URL", "URL()")}} コンストラクターを使用することに対する、[try...catch](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロック内で `URL` を構築したり、 {{domxref("URL.canParse_static", "canParse()")}} を使用して引数を調べ、メソッドが `false` を返した場合に `null` を返したりする代替手段です。

## 構文

```js-nolint
URL.parse(url)
URL.parse(url, base)
```

### 引数

- `url`
  - : 文字列、または{{Glossary("stringifier", "文字列化")}}を持つオブジェクトで、絶対 URL または URL への相対参照を表します。
    `url` が相対参照の場合、`base` は要求され、最終的な URL を解決するために使用されます。
    `url` が絶対 URL の場合、指定された `base` は結果の URL を作成するために使用されません。
- `base` {{optional_inline}}
  - : `url` が相対 URL の場合に利用するベース URL を表す文字列です。
    指定しない場合、既定では `undefined` となります。

    `base` URL を指定すると、解決された URL は単に `url` と `base` を結合したものではありません。
    親ディレクトリーおよびカレントディレクトリーへの相対参照は、`base` URL のカレントディレクトリーを基準として解決されます。
    ルートへの相対参照は、`base` のオリジンを基準として解決されます。 詳細については、[相対参照の URL への解決](/ja/docs/Web/API/URL_API/Resolving_relative_references)を参照してください。

> **Note:** `url` および `base` 引数は、渡した値が例えば {{domxref("HTMLAnchorElement")}} や {{domxref("HTMLAreaElement")}} 要素など、何であれそれぞれ文字列化されます。文字列を受け入れる他の Web API と同様です。
> 具体的には、どちらかの引数に既存の {{domxref("URL")}} オブジェクトを使用することができます。そのオブジェクトの {{domxref("URL.href", "href")}} プロパティから文字列化されます。

### 返値

引数が有効な URL に解決できた場合は `URL` です。そうでなければ `null` です。

## 例

[相対参照の URL への解決](/ja/docs/Web/API/URL_API/Resolving_relative_references)および [`URL()` コンストラクター](/ja/docs/Web/API/URL/URL#examples)の記事には、`url` および `base` 値が最終的な絶対 URL に解決される方法を示す例がもっとあります（主に `URL()` を使用するものですが）。

### URL.parse() の使用

この例では、いくつかの異なる絶対参照値と相対参照値に対して、静的メソッド `URL.parse()` を使用する方法を説明しています。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

最初に、`URL.parse()` メソッドに対応しているかどうかを `"parse" in URL` という条件式でチェックします。
メソッドが対応している場合、絶対URL、相対参照、ベース URL、より[複雑なベース URL](/ja/docs/Web/API/URL_API/Resolving_relative_references) を持つ相対参照、有効なベース URL を持つ有効な絶対 URL（これは使用されません）、およびメソッドが `null` を返す不正なベース URL のチェック結果をログ出力します。

また、`URL.parse()` に対応していない場合にもログ出力します。

```js-nolint
if ("parse" in URL) {
  // Absolute URL
  let result = URL.parse("https://developer.mozilla.org/ja/docs");
  log(`[1]: ${result.href}`);

  // 相対参照を有効なベース URL へ
  result = URL.parse("ja/docs", "https://developer.mozilla.org");
  log(`[2]: ${result.href}`);

  // 相対参照を「複雑」で有効なベース URL へ
  // （スキームとドメインのみを使用して URL を解決します）
  result = URL.parse(
    "/different/place",
    "https://developer.mozilla.org:443/some/path?id=4",
  );
  log(`[3]: ${result.href}`);

  // 絶対 URL の引数（ベース URL は無視される）
  result = URL.parse(
    "https://example.org/some/docs",
    "https://developer.mozilla.org",
  );
  log(`[4]: ${result.href}`);

  // 無効なベース URL（コロンの付け忘れ）
  result = URL.parse("ja/docs", "https//developer.mozilla.org");
  log(`[5]: ${result}`);
} else {
  log("URL.parse() に対応していません");
}
```

最後に、下記のコードでは、`base` 引数に `URL` オブジェクトを渡すとことで、引数が文字列でなくてもよいことを示しています。

```js
if ("parse" in URL) {
  // URL オブジェクトとして指定されたベース URL との相対参照
  result = URL.parse("/ja/docs", new URL("https://developer.mozilla.org/"));
  log(`[6]: ${result.href}`);
}
```

それぞれのチェックを以下に表示します。

{{EmbedLiveSample('URL.parse()', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`URL()` コンストラクター](/ja/docs/Web/API/URL/URL): 渡された引数が不正な引数を定義している場合は例外が発生します。
- [`URL.parse()` のポリフィル](https://github.com/zloirock/core-js#url-and-urlsearchparams) が [`core-js`](https://github.com/zloirock/core-js) で利用できます
