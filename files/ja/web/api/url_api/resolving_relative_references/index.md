---
title: 相対参照の URL への解決
slug: Web/API/URL_API/Resolving_relative_references
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("URL API")}}

[`URL()` コンストラクター](/ja/docs/Web/API/URL/URL)、または {{domxref("URL.parse_static", "URL.parse()")}} 静的メソッド ([URL API](/ja/docs/Web/API/URL_API)) を使用すると、相対参照とベース URL を絶対 URL に解決することができます。

どちらのメソッドも、最大 2 つの文字列引数を取り、絶対 URL を表す [`URL()`](/ja/docs/Web/API/URL) オブジェクトを返します。
最初の引数は絶対 URL または URL への相対参照を表し、2 番目の引数は、最初の引数に相対参照が指定されている場合にその相対参照を解決するために使用されるベース URL です。
これらのメソッドは、無効な URL が渡されると `URL()` コンストラクターがエラーを発生させるのに対し、`parse()` は `null` を返すという点を除いて、同じ方法で相対参照を解決します。

下記コードは、同じ `url` および `base` URL 値を使用してメソッドがどのように使用されるかを示しています。

```js
const url = "articles";
const base = "https://developer.mozilla.org/some/path";
const constructorResult = new URL(url, base);
// => https://developer.mozilla.org/some/articles
const parseResult = URL.parse(url, base);
// => https://developer.mozilla.org/some/articles
```

例えば、指定されたベース URL と相対参照から `URL` を解決することは、単純に指定された引数を結合するだけではないことが分かります。

この場合、カレントディレクトリーに相対するパス (`articles`) が渡されます。
ベース URL のカレントディレクトリーは、最後のスラッシュまでの URL 文字列です。
この例では、`https://developer.mozilla.org/some/path` の末尾にスラッシュが指定されていないため、カレントディレクトリーは `https://developer.mozilla.org/some/` となり、最終的な URL は `https://developer.mozilla.org/some/articles` となります。

相対参照は、カレントディレクトリー (`./`)、カレントディレクトリーの親ディレクトリー (`../`)、またはサイトルート (`/`) に対する相対パス参照を使用して、ベース URL に対して解決されます。
以下の章では、相対パスの各タイプについて、解決の作業方法を表示させます。

## カレントディレクトリーからの相対

`./` で始まる相対参照、または接頭辞のない参照、例えば `./article`、`article`、`./article/` は、`base` 引数で表される URL のカレントディレクトリーに対する相対参照です。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 90px;
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

ベース URL のカレントディレクトリーは、最後のスラッシュまでの URL 文字列であり、下記コードブロックのベース文字列どちらも `https://test.example.org/api/` です。
カレントディレクトリーから相対参照する `article` がこれに追加され、`https://test.example.org/api/article` に解決されます。

```js
log(new URL("./article", "https://test.example.org/api/").href);
// => https://test.example.org/api/article
log(new URL("article", "https://test.example.org/api/v1").href);
// => https://test.example.org/api/article
```

同様に、下記どちらのベース URL 文字列も、カレントディレクトリーは `https://test.example.org/api/v2/` です。
最終的な URL を解決するために、これらに `story/` と `story` を追加します。

```js
log(new URL("./story/", "https://test.example.org/api/v2/").href);
// => https://test.example.org/api/v2/story/
log(new URL("./story", "https://test.example.org/api/v2/v3").href);
// => https://test.example.org/api/v2/story
```

{{EmbedLiveSample('Current directory relative', '100%', '140px')}}

## 親ディレクトリーからの相対

`../` という接頭辞が付いた相対参照、例えば `../path` は、`base` 引数で表される URL の現在のディレクトリーの親ディレクトリーに対する相対参照です。
`../` の各インスタンスは現在のディレクトリーからフォルダー内を削除し、`../` 以降のテキストは残りのベースパスに追加されます。
`../` を複数回指定することで親ディレクトリーに移動できますが、サイトルートのレベルまでです。

例えば、ベース URL `https://test.example.com/test/api/v1/` とその親の相対 URL `../some/path` が指定された場合、カレントディレクトリーは `https://test.example.com/test/api/v1/`、親ディレクトリーは `https://test.example.com/test/api/`、解決された絶対 URL は `https://test.example.com/test/api/some/path` となります。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

次の例では、この点をより詳しく説明します。
すべてのケースにおいて、カレントディレクトリーは `https://test.example.org/api/v1/v2/` です（2 つ目のケースでは、`v3` が最後のスラッシュの後に続きます）。相対参照はそれぞれ異なる親ディレクトリーを指します。

```js
log(new URL("../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/api/v1/path
log(new URL("../../path", "https://test.example.org/api/v1/v2/v3").href);
// => https://test.example.org/api/path
log(new URL("../../../../path", "https://test.example.org/api/v1/v2/").href);
// => https://test.example.org/path
```

{{EmbedLiveSample('Parent-directory relative', '100%')}}

## ルートからの相対

`/` 接頭辞付きの相対参照、たとえば `/path` は、`base` 引数で指定された URL のサイトルートに対する相対パスとなります。
例えば、ベース URL が `https://test.example.com/api/v1` の場合、ルート相対 URL `/some/path` の解決後の URL は `https://test.example.com/some/path` となります。

> [!NOTE]
> ルート相対 URL を解決すると、`base` URL のパス部分は関係なくなります。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
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

以下に、いくつか例を挙げます。

```js
log(new URL("/some/path", "https://test.example.org/api/").href);
// => https://test.example.org/some/path
log(new URL("/", "https://test.example.org/api/v1/").href);
// => https://test.example.org/
log(new URL("/article", "https://example.com/api/v1/").href);
// => https://example.com/article
```

{{EmbedLiveSample('Root relative', '100%')}}

## 関連情報

- [RFC 3986 - Relative Resolution](https://datatracker.ietf.org/doc/html/rfc3986.html#section-5.2): ベース及び相対 URL の解決の仕様書
