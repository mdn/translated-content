---
title: URL API
slug: Web/API/URL_API
---

{{DefaultAPISidebar("URL API")}}

URL API は URL 標準のコンポーネントであり、有効な {{Glossary("URL", "Uniform Resource Locator")}} の構成要素と URL にアクセスして操作する API を定義します。 URL 標準は、ドメイン、ホスト、IP アドレスなどの概念も定義し、Web フォームのコンテンツをキー/値のペアのセットとして送信するために使用される従来の `application/x-www-form-urlencoded` {{Glossary("MIME type","MIME タイプ")}}を標準的な方法で記述しようとします。

## URL の概念と使用方法

URL 標準の大部分は、[URL の定義](/ja/docs/Learn/Common_questions/What_is_a_URL)と、それがどのように構造化および解析されるかによって構成されます。 また、ネットワーク上のコンピューターのアドレス指定に関連するさまざまな用語の定義も取り上げており、IP アドレスと DOM アドレスを解析するアルゴリズムが指定されています。 ほとんどの開発者にとってより興味深いのは、API 自体です。

### URL コンポーネントへのアクセス

所与の URL の {{domxref("URL")}} オブジェクトを作成すると、URL が解析され、そのプロパティを介して構成部分にすばやくアクセスできます。

```js
let addr = new URL("https://developer.mozilla.org/ja/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

上記のスニペットは、今読んでいる記事の英語版の `URL` オブジェクトを作成し、{{domxref("URL.host", "host")}} プロパティと {{domxref("URL.pathname", "pathname")}} プロパティを取得します。 この場合、これらの文字列はそれぞれ `developer.mozilla.org` と `/ja/docs/Web/API/URL_API` です。

### URL の変更

`URL` のほとんどのプロパティは設定可能です。 それらに新しい値を書き込んで、オブジェクトが表す URL を変更できます。 例えば、URL を作成してそのユーザー名を設定するには、次のようにします。

```js
let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
```

{{domxref("URL.username", "username")}} の値を設定すると、そのプロパティの値が設定されるだけでなく、URL 全体が更新されます。 上記のコードスニペットを実行した後、{{domxref("URL.href", "addr.href")}} によって返される値は `https://someguy@mysite.com/login` です。 これは、書き込み可能なプロパティのいずれにも当てはまります。

### クエリー

`URL` の {{domxref("URL.search", "search")}} プロパティには、URL のクエリー文字列部分が含まれます。 例えば、URL が `https://mysite.com/login?user=someguy&page=news` の場合、`search` プロパティの値は `?user=someguy&page=news` です。 {{domxref("URLSearchParams")}} オブジェクトの {{domxref("URLSearchParams.get", "get()")}} メソッドを使用して、個々のパラメーターの値を検索することもできます。

```js
let addr = new URL("https://mysite.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch(err) {
  showErrorMessage(err);
}
```

例えば、上記のスニペットでは、ユーザー名と対象のページをクエリーから取得し、サイトのコードで使用される適切な関数に渡してログインし、サイト内の目的の宛先にユーザーを案内します。

`URLSearchParams` 内の他の関数を使用すると、キーに属する値を変更したり、キーとその値を追加および削除したり、パラメーターのリストをソートしたりすることができます。

## URL API インターフェイス

URL API は単純な API で、それに対するインターフェイスは次の 2 つだけです。

- [`URL`](/ja/docs/Web/API/URL)
- [`URLSearchParams`](/ja/docs/Web/API/URLSearchParams)

仕様の古いバージョンには {{domxref("URLUtilsReadOnly")}} と呼ばれるインターフェイスが含まれていましたが、これはその後 {{domxref("WorkerLocation")}} インターフェイスに統合されました。

## 例

URL に含まれるパラメーターを処理する場合は、手動で実行できますが、`URL` オブジェクトを作成してそれを行う方がはるかに簡単です。 以下の `fillTableWithParameters()` 関数は、{{HTMLElement("table")}} を表す {{domxref("HTMLTableElement")}} オブジェクトを入力として受け取ります。 パラメーターで見つかった各キーに対応する行が表に追加され、最初の列にはキーの名前が含まれ、2 番目の列には値が含まれます。

表を生成する前に {{domxref("URLSearchParams.sort()")}} を呼び出してパラメーターリストをソートしていることに注意してください。

```js
function fillTableWithParameters(tbl) {
  let url = new URL(document.location.href);
  url.searchParams.sort();
  let keys = url.searchParams.keys();

  for (let key of keys) {
    let val = url.searchParams.get(key);
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = key;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = val;
    row.appendChild(cell);
    tbl.appendChild(row);
  };
}
```

この例の働くバージョンは [Glitch にあります](https://url-api.glitch.me)。 ページをロードするときに URL にパラメーターを追加するだけで、表に表示されます。 例えば、[`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable) を試してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.URL")}}

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} 型
