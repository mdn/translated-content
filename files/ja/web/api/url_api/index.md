---
title: URL API
slug: Web/API/URL_API
tags:
  - API
  - Address
  - Domain
  - Forms
  - Host
  - IP
  - Overview
  - URL
  - URL API
  - Web
  - hostname
translation_of: Web/API/URL_API
---
<p>{{DefaultAPISidebar("URL API")}}</p>

<p><span class="seoSummary">URL API は URL 標準のコンポーネントであり、有効な {{Glossary("URL", "Uniform Resource Locator")}} の構成要素と URL にアクセスして操作する API を定義します。</span> URL 標準は、ドメイン、ホスト、IP アドレスなどの概念も定義し、Web フォームのコンテンツをキー/値のペアのセットとして送信するために使用される従来の <code>application/x-www-form-urlencoded</code> {{Glossary("MIME type","MIME タイプ")}}を標準的な方法で記述しようとします。</p>

<h2 id="URL_concepts_and_usage" name="URL_concepts_and_usage">URL の概念と使用方法</h2>

<p>URL 標準の大部分は、<a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL の定義</a>と、それがどのように構造化および解析されるかによって構成されます。 また、ネットワーク上のコンピューターのアドレス指定に関連するさまざまな用語の定義も取り上げており、IP アドレスと DOM アドレスを解析するアルゴリズムが指定されています。 ほとんどの開発者にとってより興味深いのは、API 自体です。</p>

<h3 id="Accessing_URL_components" name="Accessing_URL_components">URL コンポーネントへのアクセス</h3>

<p>所与の URL の {{domxref("URL")}} オブジェクトを作成すると、URL が解析され、そのプロパティを介して構成部分にすばやくアクセスできます。</p>

<pre class="brush: js notranslate">let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
</pre>

<p>上記のスニペットは、今読んでいる記事の英語版の <code>URL</code> オブジェクトを作成し、{{domxref("URL.host", "host")}} プロパティと {{domxref("URL.pathname", "pathname")}} プロパティを取得します。 この場合、これらの文字列はそれぞれ <code>developer.mozilla.org</code> と <code>/en-US/docs/Web/API/URL_API</code> です。</p>

<h3 id="Changing_the_URL" name="Changing_the_URL">URL の変更</h3>

<p><code>URL</code> のほとんどのプロパティは設定可能です。 それらに新しい値を書き込んで、オブジェクトが表す URL を変更できます。 例えば、URL を作成してそのユーザー名を設定するには、次のようにします。</p>

<pre class="brush: js notranslate">let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
</pre>

<p>{{domxref("URL.username", "username")}} の値を設定すると、そのプロパティの値が設定されるだけでなく、URL 全体が更新されます。 上記のコードスニペットを実行した後、{{domxref("URL.href", "addr.href")}} によって返される値は <code>https://someguy@mysite.com/login</code> です。 これは、書き込み可能なプロパティのいずれにも当てはまります。</p>

<h3 id="Queries" name="Queries">クエリー</h3>

<p><code>URL</code> の {{domxref("URL.search", "search")}} プロパティには、URL のクエリー文字列部分が含まれます。 例えば、URL が <code>https://mysite.com/login?user=someguy&amp;page=news</code> の場合、<code>search</code> プロパティの値は <code>?user=someguy&amp;page=news</code> です。 {{domxref("URLSearchParams")}} オブジェクトの {{domxref("URLSearchParams.get", "get()")}} メソッドを使用して、個々のパラメーターの値を検索することもできます。</p>

<pre class="brush: js notranslate">let addr = new URL("https://mysite.com/login?user=someguy&amp;page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch(err) {
  showErrorMessage(err);
}
</pre>

<p>例えば、上記のスニペットでは、ユーザー名と対象のページをクエリーから取得し、サイトのコードで使用される適切な関数に渡してログインし、サイト内の目的の宛先にユーザーを案内します。</p>

<p><code>URLSearchParams</code> 内の他の関数を使用すると、キーに属する値を変更したり、キーとその値を追加および削除したり、パラメーターのリストをソートしたりすることができます。</p>

<h2 id="URL_API_interfaces" name="URL_API_interfaces">URL API インターフェイス</h2>

<p>URL API は単純な API で、それに対するインターフェイスは次の2つだけです。</p>

<div class="index">
<ul>
 <li><span class="indexListRow"><span class="indexListTerm"><a href="/ja/docs/Web/API/URL"><code>URL</code></a></span></span></li>
 <li><span class="indexListRow"><span class="indexListTerm"><a href="/ja/docs/Web/API/URLSearchParams"><code>URLSearchParams</code></a></span></span></li>
</ul>
</div>

<p>仕様の古いバージョンには {{domxref("URLUtilsReadOnly")}} と呼ばれるインターフェイスが含まれていましたが、これはその後 {{domxref("WorkerLocation")}} インターフェイスに統合されました。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>URL に含まれるパラメーターを処理する場合は、手動で実行できますが、<code>URL</code> オブジェクトを作成してそれを行う方がはるかに簡単です。 以下の <code>fillTableWithParameters()</code> 関数は、{{HTMLElement("table")}} を表す {{domxref("HTMLTableElement")}} オブジェクトを入力として受け取ります。 パラメーターで見つかった各キーに対応する行が表に追加され、最初の列にはキーの名前が含まれ、2番目の列には値が含まれます。</p>

<p>表を生成する前に {{domxref("URLSearchParams.sort()")}} を呼び出してパラメーターリストをソートしていることに注意してください。</p>

<pre class="brush: js notranslate">function fillTableWithParameters(tbl) {
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
}</pre>

<p>この例の働くバージョンは <a href="https://url-api.glitch.me">Glitch にあります</a>。 ページをロードするときに URL にパラメーターを追加するだけで、表に表示されます。 例えば、<code><a href="https://url-api.glitch.me?from=mdn&amp;excitement=high&amp;likelihood=inconceivable">https://url-api.glitch.me?from=mdn&amp;excitement=high&amp;likelihood=inconceivable</a></code> を試してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('URL')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.URL")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ha/docs/Web/API/Fetch_API">Fetch API</a></li>
 <li>CSS {{cssxref("&lt;url&gt;")}} 型</li>
</ul>
