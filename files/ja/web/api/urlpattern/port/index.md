---
title: "URLPattern: port プロパティ"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 4535090888f24ac8394e177c27260d16a53631e6
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`port`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のポート番号部分と照合する[パターン](/ja/docs/Web/API/URL_Pattern_API#パターンの構文)を含む文字列です。

この値は、[コンストラクター](/ja/docs/Web/API/URLPattern/URLPattern)に渡されたポート番号のパターンの[正規化値](/ja/docs/Web/API/URL_Pattern_API#パターンの正規化)、 コンストラクターに渡された [`baseURL` からの継承値](/ja/docs/Web/API/URLPattern/URLPattern#baseurl_からの継承値)、任意のポート番号に一致するデフォルト値 (`"*"`) のいずれかです。

なお、パターンが [`url` または `baseURL` 文字列で指定され、ポート番号が明示的に設定されていない場合](/ja/docs/Web/API/URLPattern/URLPattern#url_または_baseurl_のホスト名はデフォルトポート番号へ影響する)、暗黙的に空文字列 (`""`) に設定される場合があります。
この空文字列は、デフォルトのポート番号 (`443`) を使用する URL に一致します。

## 値

文字列です。

## 例

### 基本的な使い方

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、`(80|443|8080)` を `port` 部分として指定しています。
このパターンは、ポート番号 `80`、`443`、`8080` と一致します。

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // "(80|443|8080)"
console.log(pattern.test("http://example.com:8080/")); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
