---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
tags:
  - HTTP
  - HTTP Header
  - HTTP ヘッダー
  - Reference
  - Response Header
  - ヘッダー
  - リファレンス
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/Clear-Site-Data
---
<p>{{HTTPSidebar}}</p>

<p><strong><code>Clear-Site-Data</code></strong> ヘッダーは、リクエストしているウェブサイトに関連付けられた閲覧用データ (クッキー、ストレージ、キャッシュ) を消去します。ウェブ開発者がそのオリジンのためにブラウザーがローカルに保存したデータをより制御できます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>Clear-Site-Data</code> ヘッダーは、1つまたは複数のディレクティブを受け付けます。すべての種類のデータを消去する場合は、ワイルドカードのディレクティブ (<code>"*"</code>) を使用することができます。</p>

<pre class="notranslate">// 単一のディレクティブ
Clear-Site-Data: "cache"

// 複数のディレクティブ (カンマ区切り)
Clear-Site-Data: "cache", "cookies"

// ワイルドカード
Clear-Site-Data: "*"
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<p class="note">すべてのディレクティブは<a href="https://tools.ietf.org/html/rfc7230#section-3.2.6">引用符で囲まれた文字列の文法r</a>に従わなければなりません。二重引用符を含まないディレクティブは無効です。</p>

<dl>
 <dt id="cache"><code>"cache"</code></dt>
 <dd>サーバーが、レスポンス URL のオリジンに関するローカルにキャッシュされたデータ (つまり、ブラウザーキャッシュ、<a href="/ja/docs/Web/HTTP/Caching">HTTP キャッシュ</a>を参照) の消去を望んでいることを示します。ブラウザーによっては、予備レンダリングページ、スクリプトキャッシュ、 WebGL シェーダーキャッシュ、アドレスバーのサジェスト等のようなものも消去します。</dd>
 <dt id="cookies"><code>"cookies"</code></dt>
 <dd>サーバーが、レスポンス URL のオリジンに関するすべてのクッキーの消去を望んでいることを示します。これは登録されたドメインにサブドメインを含め影響します。ですから、 https://example.com と同様に https://stage.example.com のクッキーも消去されます。</dd>
 <dt id="storage"><code>"storage"</code></dt>
 <dd>サーバーが、レスポンス URL のオリジンに関するすべての DOM ストレージの消去を望んでいることを示します。これは以下のようなストレージ機構を含みます。
 <ul>
  <li>localStorage (<code>localStorage.clear</code> を実行)</li>
  <li>sessionStorage (<code>sessionStorage.clear</code> を実行)</li>
  <li>IndexedDB (それぞれのデータベースに {{domxref("IDBFactory.deleteDatabase")}} を実行)</li>
  <li>サービスワーカーの登録 (登録されたそれぞれのサービスワーカーに対して、 {{domxref("ServiceWorkerRegistration.unregister")}} を実行)</li>
  <li><a href="/ja/docs/Web/HTML/Using_the_application_cache">AppCache</a></li>
  <li>WebSQL データベース</li>
  <li><a href="/ja/docs/Web/API/File_and_Directory_Entries_API">FileSystem API のデータ</a></li>
  <li>プラグインのデータ (<code><a href="https://wiki.mozilla.org/NPAPI:ClearSiteData">NPP_ClearSiteData</a></code> によって消去)</li>
 </ul>
 </dd>
 <dt id="executionContexts"><code>"executionContexts"</code></dt>
 <dd>サーバーが、レスポンスのオリジンに関するすべての閲覧コンテキストの再読み込みを望んでいることを示します。 ({{domxref("Location.reload")}})</dd>
 <dt><code>"*"</code> (ワイルドカード)</dt>
 <dd>サーバーが、レスポンスのオリジンに関するすべての種類のデータの消去を望んでいることを示します。このヘッダーの将来のバージョンでデータの種類が追加された場合、それも消去します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Sign_out_of_web_site" name="Sign_out_of_web_site">ウェブサイトのログアウト</h3>

<p>ユーザーがウェブサイトやサービスからログアウトした場合、ローカルに保存されているデータを削除したい場合があります。サイトからのログアウトが正常に完了したことを確認するページ (https://example.com/logout など)を送信する際に <code>Clear-Site-Data</code> ヘッダーを追加することで、これを実現することができます。</p>

<pre class="notranslate">Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"</pre>

<h3 id="Clearing_cookies" name="Clearing_cookies">クッキーの消去</h3>

<p>以下のヘッダーが https://example.com/clear-cookies のレスポンスで配信された場合、同じドメイン https://example.com 及びあらゆるサブドメイン (https://stage.example.com など) が消去されます。</p>

<pre class="notranslate">Clear-Site-Data: "cookies"</pre>

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
   <td><a href="https://w3c.github.io/webappsec-clear-site-data">Clear Site Data</a></td>
   <td>Working Draft</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Clear-Site-Data")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Cache-Control")}}</li>
</ul>
