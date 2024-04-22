---
title: "URL: canParse() 静的メソッド"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 7c7a078585a36eef960de1d93d28b20691486b99
---

{{ApiRef("URL API")}}

**`URL.canParse()`** は {{domxref("URL")}} の静的メソッドで、絶対 URL、またはベース URL と結合した相対 URL が解析可能で有効かどうかを示す論理値を返します。

これは `URL` を [try...catch](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) ブロック内で組み立てるための高速で簡単な代替手段です。
これは [`URL()` コンストラクター](/ja/docs/Web/API/URL/URL)が成功するのと同じ値に対しては `true` を返し、コンストラクターが例外を発生させる値に対しては `false` を返します。

## 構文

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
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

### 返値

その URL が解釈可能で有効であれば `true`、そうでなければ `false` を返します。

## 例

このライブ例では、静的メソッド `URL.canParse()` を使用して、いくつか異なる絶対 URL 値と相対 URL 値を使用する方法を示します。

例の最初の部分では、ログ出力先の HTML 要素 `<pre>` とログ出力するメソッド `log()` を定義しています。

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

次に、`URL.canParse()` メソッドに対応しているかどうかを、`"canParse" in URL` という条件を用いて調べます。
メソッドが対応している場合は、絶対 URL、ベース URLのない相対 URL、有効なベース URL のある相対 URL を調べた結果をログ出力します。
`URL.canParse()` が対応していない場合もログ出力します。

```js
if ("canParse" in URL) {
  log("有効な絶対 URL を検査");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nベース URL のない相対 URL を検査");
  url = "/ja/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\n有効なベース URL のある相対 URL を検査");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() に対応していません");
}
```

最後に、下記のコードは `baseUrl` が文字列である必要はないことを示しています。
ここでは `URL` オブジェクトを渡しています。

```js
if ("canParse" in URL) {
  log("\nURL オブジェクトとして提供されたベース URL つきの相対 URL を検査");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/ja/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

それぞれのチェック結果を下記に示します。

{{EmbedLiveSample('Examples', '100%', '200')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("URL.URL", "URL()")}}
- [`URL.canParse()` のポリフィル](https://github.com/zloirock/core-js#url-and-urlsearchparams)が [`core-js`](https://github.com/zloirock/core-js) で利用できます
