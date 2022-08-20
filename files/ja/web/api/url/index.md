---
title: URL
slug: Web/API/URL
tags:
  - API
  - Address
  - Domain
  - Interface
  - Location
  - Networking
  - Reference
  - URI
  - URL API
  - Web
  - hostname
  - href
  - origin
translation_of: Web/API/URL
---
<p>{{APIRef("URL API")}}</p>

<p><span class="seoSummary"><strong><code>URL</code></strong> インターフェイスは、{{glossary("URL", "URL")}} の解析、構築、正規化、およびエンコードに使用します。 URL のコンポーネントを簡単に読み取って変更できるプロパティを提供することで機能します。</span> 通常、新しい <code>URL</code> オブジェクトを作成するにはコンストラクターを呼び出すときに URL を文字列として指定するか、相対 URL とベース URL を指定します。その後、解析された URL のコンポーネントを簡単に読み取ったり、URL を変更したりすることができます。</p>

<p>ブラウザーがまだ {{domxref("URL.URL", "URL()")}} コンストラクターをサポートしていない場合は、{{domxref("Window")}} インターフェイスの {{domxref("Window.URL")}} プロパティを使用して <code>URL</code> オブジェクトにアクセスできます。 対象とするブラウザーのいずれかに、この接頭辞を付ける必要があるかどうかを確認してください。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("URL.URL", "new URL()")}}</dt>
 <dd>絶対 URL 文字列、または相対 URL 文字列とベース URL 文字列を使用して指定された URL を参照する <code>URL</code> オブジェクトを作成して返します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("URL.hash", "hash")}}</dt>
 <dd><code>'#'</code> に続いて URL のフラグメント識別子を含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.host", "host")}}</dt>
 <dd>ドメイン（<em>ホスト名</em>）に続いて（ポートが指定されている場合）、<code>':'</code> と URL の<em>ポート</em>を含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.hostname", "hostname")}}</dt>
 <dd>URL のドメインを含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.href", "href")}}</dt>
 <dd>URL 全体を含む {{domxref("USVString")}} を返す文字列化関数です。</dd>
 <dt>{{domxref("URL.origin", "origin")}} {{readonlyInline}}</dt>
 <dd>URL のオリジン、つまりそのスキーム、ドメイン、およびポートを含む {{domxref("USVString")}} を返します。</dd>
 <dt>{{domxref("URL.password", "password")}}</dt>
 <dd>ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.pathname", "pathname")}}</dt>
 <dd>最初の <code>'/'</code> に続いて URL のパスを含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.port", "port")}}</dt>
 <dd>URL のポート番号を含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.protocol", "protocol")}}</dt>
 <dd>最後の <code>':'</code> までを含めた URL のプロトコルスキームを含む {{domxref("USVString")}}。</dd>
 <dt>{{domxref("URL.search", "search")}}</dt>
 <dd>URL 引数文字列を示す {{domxref("USVString")}}。 引数が指定されている場合、この文字列には先頭の <code>?</code> 文字で始まるすべての引数が含まれます。</dd>
 <dt>{{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}</dt>
 <dd><code>search</code> で見つかった個々のクエリー引数にアクセスするために使用できる {{domxref("URLSearchParams")}} オブジェクト。</dd>
 <dt>{{domxref("URL.username","username")}}</dt>
 <dd>ドメイン名の前に指定されたユーザー名を含む {{domxref("USVString")}}。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("URL.toString", "toString()")}}</dt>
 <dd>URL 全体を含む {{domxref("USVString")}} を返します。 {{domxref("URL.href")}} と同義ですが、値の変更に使用することはできません。</dd>
 <dt>{{domxref("URL.toJSON", "toJSON()")}}</dt>
 <dd>URL 全体を含む {{domxref("USVString")}} を返します。 <code>href</code> プロパティと同じ文字列を返します。</dd>
</dl>

<h2 id="Static_methods" name="Static_methods">静的メソッド</h2>

<dl>
 <dt>{{domxref("URL.createObjectURL", "createObjectURL()")}}</dt>
 <dd>一意の blob URL を含む {{domxref("DOMString")}} を返します。 これは、スキームとして <code>blob:</code> を含む URL で、その後にブラウザー内のオブジェクトを一意に識別する不透明な文字列が続きます。</dd>
 <dt>{{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}</dt>
 <dd>{{domxref("URL.createObjectURL()")}} を使用して以前に生成したオブジェクト URL を取り消します。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>コンストラクターは、<code>url</code> 引数と、<code>url</code> 引数が相対 URL の場合にベースとして使用するオプションの <code>base</code> 引数を受け取ります。</p>

<pre class="brush: js notranslate">const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
</pre>

<p>URL を構築するために URL のプロパティを設定できます。</p>

<pre class="brush: js notranslate">url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
</pre>

<p>URL は、{{RFC(3986)}} にあるルールに従ってエンコードされます。 例えば、次のとおりです。</p>

<pre class="brush: js notranslate">url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
</pre>

<p>URL のクエリー文字列を構築および操作するために、{{domxref("URLSearchParams")}} インターフェイスを使用できます。</p>

<p>現在のウィンドウの URL から検索引数を取得するには、次のようにします。</p>

<pre class="brush: js notranslate">// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
</pre>

<p>URL の <code>toString()</code> メソッドは <code>href</code> プロパティの値を返すだけなので、コンストラクターを使用して URL を直接に正規化およびエンコードできます。</p>

<pre class="brush: js notranslate">const response = await fetch(new URL('http://www.example.com/démonstration.html'));</pre>

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
   <td>{{SpecName('File API', '#creating-revoking', 'URL')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>静的メソッドの <code>URL.createObjectURL()</code> と <code>URL.revokeObjectURL()</code> の追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#api', 'API')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初回定義 (<code>URLUtils</code> を実装)。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.URL")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/URL_API">URL API</a></li>
 <li><a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL とは何か</a></li>
 <li><code>URL</code> オブジェクトを取得するプロパティ: {{domxref("Window.URL")}}</li>
 <li>{{domxref("URLSearchParams")}}</li>
</ul>
