---
title: Fetch API
slug: Web/API/Fetch_API
tags:
  - API
  - Fetch
  - Landing
  - Reference
  - XMLHttpRequest
  - リクエスト
  - レスポンス
translation_of: Web/API/Fetch_API
---
<div>{{DefaultAPISidebar("Fetch API")}}</div>

<p class="summary"><span class="seoSummary">Fetch API は (ネットワーク越しの通信を含む) リソース取得のためのインターフェイスを提供しています。 {{DOMxRef("XMLHttpRequest")}} と似たものではありますが、より強力で柔軟な操作が可能です。</span></p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Concepts_and_usage">概念と利用方法</h2>

<p>Fetch は {{DOMxRef("Request")}} と {{DOMxRef("Response")}} オブジェクト (およびネットワークリクエストに関わるその他のもの) の汎用的な定義が提供されています。これにより、サービスワーカー、キャッシュ API、リクエストやレスポンスを処理または変更するその他の類似のもの、またはプログラム的にレスポンスを生成する (つまり、コンピュータプログラムまたはパーソナルプログラミング命令を使用する) 必要があるあらゆる種類の利用法など、将来的に必要とされるあらゆる場所で使用できるようになります。</p>

<p>また CORS や HTTP の Origin ヘッダーの振る舞いといった関連した概念についても定義されています。この定義は、現行の分散している個別の定義を置き換えるものです。</p>

<p>リソースを取得するためのリクエストは、 {{DOMxRef("WindowOrWorkerGlobalScope.fetch()")}} メソッドを呼ぶことで作成できます。このメソッドは {{DOMxRef("Window")}} や {{DOMxRef("WorkerGlobalScope")}} といったインターフェイスによって実装されています。その結果、リソース取得を必要とする様々な場面での利用が可能です。</p>

<p><code>fetch()</code> メソッドは必須の引数を 1 つ取り、取得したいリソースのパスを指定します。成功か失敗かに関わらず、リクエストに対する {{DOMxRef("Response")}} に解決できる {{JSxRef("Promise")}} を返します。第 2 引数は任意で、 <code>init</code> オプションオブジェクトを渡すことができます。({{DOMxRef("Request")}} を参照してください。)</p>

<p>{{DOMxRef("Response")}} を受け取ると、レスポンスに含まれるコンテンツ本体と、その処理方法を定義するための多数のメソッドが利用できるようになります。</p>

<p>{{DOMxRef("Request.Request","Request()")}} および {{DOMxRef("Response.Response","Response()")}} を利用することで、リクエストとレスポンスを直接作成できます。ただしこれらのオブジェクトは、{{DOMxRef("FetchEvent.respondWith")}} のような他の API 呼び出しの結果として取得されるべきもので、直接作成しないほうが良いでしょう。</p>

<h3 id="Differences_from_jQuery">jQueryとの違い</h3>

<p><code>fetch</code> は主に 3 つの点で <code>jQuery.ajax()</code> と異なります。</p>

<ul>
 <li><code>fetch()</code> から返された Promise は、レスポンスが HTTP <code>404</code> または <code>500</code> であっても、 <strong>HTTP エラーステータスで拒否されません</strong>。代わりに、正常に解決され (<code>ok</code> ステータスが <code>false</code> に設定されます)、ネットワーク障害が発生した場合、または要求の完了が妨げられた場合にのみ拒否されます。</li>
 <li><code>fetch()</code> は<em>認証情報</em>の<a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters">初期化オプション</a>を (<code>include</code> に) 設定しない限り、<strong>オリジンをまたいだ Cookie を送信しません</strong>。
  <ul>
   <li><a href="https://github.com/whatwg/fetch/pull/585" rel="nofollow noopener">2018 年 4 月</a>、に仕様が既定の認証情報ポリシーが <code>'same-origin'</code> に変更され、古いネイティブ fetch が Firefox 61.0b13, Safari 12, Chrome 68 のバージョンのブラウザーで更新されました。</li>
   <li>これらのブラウザより古いバージョンをターゲットにしている場合は、 Cookie/ユーザーログイン状態の影響を受ける可能性のあるすべての API リクエストに <code>'same-origin'</code> <a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch#parameters">init オプション</a> の認証情報を必ず含めてください。</li>
  </ul>
 </li>
</ul>

<div class="note">
<p><strong>注</strong>: Fetch API の詳しい利用方法は <a href="/ja/docs/Web/API/Fetch_API/Using_Fetch">Fetch の使用</a>を参照してください。また <a href="/ja/docs/Web/API/Fetch_API/Basic_concepts">Fetch の基本概念</a>では、Fetch API の基本概念が解説されています。</p>
</div>

<h3 id="Aborting_a_fetch">フェッチの中止</h3>

<p>ブラウザーは Fetch や XHR などの操作を完了前に中止させることができる {{DOMxRef("AbortController")}} および {{DOMxRef("AbortSignal")}} インターフェイス (つまり Abort API) に実験的に対応し始めています。詳しくはインターフェイスのページを参照してください。</p>

<h2 id="Fetch_Interfaces">Fetch インターフェイス</h2>

<dl>
 <dt>{{DOMxRef("WindowOrWorkerGlobalScope.fetch()")}}</dt>
 <dd><code>fetch()</code> メソッドはリソース取得のために使用されます。</dd>
 <dt>{{DOMxRef("Headers")}}</dt>
 <dd>リクエストとレスポンスのヘッダーを表現しています。ヘッダー情報への問い合わせや、結果による振る舞いの選択が可能です。</dd>
 <dt>{{DOMxRef("Request")}}</dt>
 <dd>リソースのリクエストを表します。</dd>
 <dt>{{DOMxRef("Response")}}</dt>
 <dd>リクエストに対するレスポンスを表します。</dd>
</dl>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName("Fetch")}}</td>
   <td>{{Spec2("Fetch")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.fetch")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Fetch_API/Using_Fetch">Using Fetch</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS">HTTP access control (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
 <li><a href="https://github.com/github/fetch">Fetch のポリフィル</a></li>
 <li><a href="/ja/docs/Web/API/Fetch_API/Basic_concepts">Fetch の基本概念</a></li>
</ul>
