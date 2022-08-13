---
title: 安全なコンテキスト
slug: Web/Security/Secure_Contexts
tags:
  - Secure contexts
  - Security
  - セキュリティ
  - 安全なコンテキスト
translation_of: Web/Security/Secure_Contexts
---
<p><span class="seoSummary"><strong>セキュアコンテキスト</strong>とは、認証と機密性の一定の最低基準を満たしている <code>Window</code> や <code>Worker</code> のことです。</span>多くの Web API や機能は安全なコンテキストでのみアクセス可能です。セキュアコンテキストの主な目的は、{{interwiki("wikipedia", "中間者攻撃", "中間者攻撃")}} が攻撃の犠牲者をさらに危険にさらす可能性のある強力な API にアクセスすることを防ぐことです。</p>

<h2 id="Why_should_some_features_be_restricted" name="Why_should_some_features_be_restricted">機能をアクセス制限すべき理由</h2>

<p>Web の API には強力なものもあり、攻撃者に対して以下のような (それよりも多くの) 能力を与えてしまう可能性があります。</p>

<ul>
 <li>ユーザーのプライバシーを侵害する</li>
 <li>ユーザーのコンピューターに対して低水準のアクセス権限を得る</li>
 <li>ユーザーの認証情報のようなデータへのアクセス権限を得る</li>
</ul>

<h2 id="When_is_a_context_considered_secure" name="When_is_a_context_considered_secure">コンテキストが安全とみなされるのはいつですか？</h2>

<p>コンテキストは、<a href="https://w3c.github.io/webappsec-secure-contexts/">Secure Contexts</a> 仕様で定義されている認証および機密性の一定の最低基準を満たしている場合に、セキュアなコンテキストとみなされます。特定の文書がセキュアコンテキストである<a href="https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context">トップレベルのブラウジングコンテキスト</a> (基本的には、セキュアコンテキストであるウィンドウやタブを含むコンテキスト) の<a href="https://html.spec.whatwg.org/multipage/browsers.html#active-document">アクティブな文書</a>である場合、その文書はセキュアコンテキストにあるとみなされます。</p>

<p>例えば、{{HTMLElement("iframe")}} 内で TLS 上で配信された文書であっても、TLS 上で配信されなかった祖先がある場合には、そのコンテキストは安全であるとは見なされ<strong>ません</strong>。</p>

<p>しかし、安全ではないコンテキストによって (<a href="/ja/docs/Web/API/Window/open#noopener">noopener</a> を指定してもしなくても) 新しいウィンドウが作成された場合、 オープナーが安全ではないという事実は、新しいウィンドウが安全であるとみなされるかどうかに影響を与えないことに注意してください。これは、特定の文書が安全なコンテキストにあるかどうかの判断は、それが関連付けられているトップレベルのブラウジングコンテキスト内でそれを考慮することにのみ基づいており、安全でないコンテキストがたまたまその文書を作成するために使用されたかどうかではないからです。</p>

<p><em>http://127.0.0.1</em> の URL、<em>http://localhost</em> の URL (一定の条件の下で)、<em>file://</em> の URL など、ローカルに配信されたリソースも安全に配信されていると考えられます。</p>

<p>ローカルではないリソースが安全であるとみなされるためには、以下の基準を満たす必要があります。</p>

<ul>
 <li><em>https://</em> または <em>wss://</em> URL で提供されなければなりません</li>
 <li>リソースを配信するために使用されるネットワークチャネルのセキュリティプロパティは、非推奨と見なされてはなりません</li>
</ul>

<h2 id="Feature_detection" name="Feature_detection">機能の判別</h2>

<p>グローバルスコープで利用できる {{domxref("WindowOrWorkerGlobalScope.isSecureContext", "isSecureContext")}} の真偽値を用いることで、そのページ自身が安全なコンテキストの中にいるかどうか確かめることができます。</p>

<pre class="brush: js notranslate">if (window.isSecureContext) {
  // Service Worker が実行されているので、このページは安全なコンテキストです
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Secure Contexts')}}</td>
   <td>{{Spec2('Secure Contexts')}}</td>
   <td>編集者による草稿</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts">安全なコンテキストに制限されたプラットフォーム機能</a> — 安全なコンテキストでのみ使用できる機能のリスト</li>
 <li>{{domxref("Window.isSecureContext")}}</li>
 <li><a href="https://permission.site">https://permission.site</a> — HTTP と HTTPS を使用して、ブラウザーが使用している API のアクセス許可チェックを確認できるサイト。</li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> HTTP ヘッダー</li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</div>
