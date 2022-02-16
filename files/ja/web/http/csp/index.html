---
title: コンテンツセキュリティポリシー (CSP)
slug: Web/HTTP/CSP
tags:
  - CSP
  - Content Security Policy
  - Reference
  - Security
  - コンテンツセキュリティポリシー
  - セキュリティ
translation_of: Web/HTTP/CSP
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><strong>コンテンツセキュリティポリシー</strong> ({{Glossary("CSP")}}) は、クロスサイトスクリプティング ({{Glossary("XSS")}}) やデータインジェクション攻撃などのような、特定の種類の攻撃を検知し、影響を軽減するために追加できるセキュリティレイヤーです。これらの攻撃はデータの窃取からサイトの改ざん、マルウェアの拡散に至るまで、様々な目的に用いられます。</p>

<p>CSP は完全な後方互換性を保って設計されています (ただし、 CSP 2 については後方互換性がない点もあり、明示的に記述されています。詳細は<a href="https://www.w3.org/TR/CSP2">こちら</a>の 1.1 章を参照してください)。そのため、 CSP に未対応のブラウザーでも CSP 実装済のサーバーと通信でき、逆もまた同様です。 CSP 未対応のブラウザーは単に CSP を無視し、ウェブコンテンツにはこれまで通り標準の同一オリジンポリシーを適用します。 CSP ヘッダーを送信しないサーバーに対しても、ブラウザーは同様に標準の <a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a> を適用します。</p>

<p>CSP を有効にするには、ウェブサーバーから {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すように設定する必要があります (<code>X-Content-Security-Policy</code> ヘッダーに関する記述が時々ありますが、これは古いバージョンのものであり、今日このヘッダーを指定する必要はありません)。</p>

<p>他にも、 {{HTMLElement("meta")}} 要素を用いてポリシーを指定することも可能です。 例えば: <code>&lt;meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';"&gt;</code></p>

<h2 id="Threats" name="Threats">脅威</h2>

<h3 id="Mitigating_cross_site_scripting" name="Mitigating_cross_site_scripting">クロスサイトスクリプティングの軽減</h3>

<p>CSP の第一の目的は XSS 攻撃の軽減と報告です。 XSS 攻撃とは、サーバーから取得したコンテンツをブラウザーが信頼する性質を悪用した攻撃です。ブラウザーはコンテンツの送信元を信頼するため、たとえ実際の送信元が見かけ上とは異なっていたとしても、悪意あるスクリプトが被害者のブラウザー上で実行されてしまいます。</p>

<p>サーバー管理者が CSP を利用する場合、実行を許可するスクリプトの正しいドメインをブラウザーに向けて指定することにより、 XSS の発生する箇所を削減・根絶することができます。 CSP をサポートするブラウザーは、サーバーから指定された許可リストに載っているドメインのスクリプトのみ実行し、他のスクリプトはすべて無視します (インラインスクリプトや HTML 属性値のイベントハンドラも無視する対象に含まれます)。</p>

<p>究極的な防衛策として、スクリプトを決して実行させたくないサイトは、スクリプトの実行を全面的に拒否することも可能です。</p>

<h3 id="Mitigating_packet_sniffing_attacks" name="Mitigating_packet_sniffing_attacks">パケット盗聴攻撃の軽減</h3>

<p>取得するコンテンツのドメインを制限することに加えて、サーバーは通信に使うプロトコルを指定することも可能です。例えば、 (セキュリティの観点からはこれが理想的ですが) すべてのコンテンツを HTTPS で取得されるようにサーバーから指定することが出来ます。データ通信におけるセキュリティ戦略を完全なものとするには、HTTPS 通信を強制するだけではなく、すべての <a href="/ja/docs/Web/HTTP/Cookies">Cookie に secure フラグ</a> を付けたり、HTTP ページから対応する HTTPS ページへの自動リダイレクトを整備することも必要です。また、ブラウザーが暗号化された通信路のみを用いてサイトに接続することを保証するため、{{HTTPHeader("Strict-Transport-Security")}} HTTP ヘッダーを利用することも可能です。</p>

<h2 id="Using_CSP" name="Using_CSP">CSP の適用</h2>

<p>コンテンツセキュリティポリシーを適用するには、該当するウェブページについて {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを返すようにし、その値にはユーザエージェントに読み込ませたいリソースの情報を指定します。例えば、画像のアップロード・表示を行うページの場合、画像の出元は任意の場所で構いませんが、フォームの action 属性値は特定のエンドポイントに制限する必要があります。コンテンツセキュリティポリシーを適切に設計すれば、クロスサイトスクリプティング攻撃に対する耐性を高めることができます。この記事では、適切なヘッダーの作成方法と記述例を紹介します。</p>

<h3 id="Specifying_your_policy" name="Specifying_your_policy">ポリシーの設定</h3>

<p>ポリシーの設定には {{HTTPHeader("Content-Security-Policy")}} HTTP ヘッダーを以下のように用います。</p>

<pre class="syntaxbox">Content-Security-Policy: <em>policy</em></pre>

<p><code>policy</code> の箇所には、適用したいコンテンツセキュリティポリシーを表すディレクティブから構成される文字列が入ります。</p>

<h3 id="Writing_a_policy" name="Writing_a_policy">ポリシーの記述</h3>

<p>ポリシーはポリシーディレクティブを列挙することで表現します。このポリシーディレクティブは、特定の種類のリソースや、ポリシーの適用範囲をそれぞれ表すものです。ポリシーには {{CSP("default-src")}} ディレクティブを指定するべきでしょう。このディレクティブは、ポリシーについて特に指定のないリソースに対するフォールバックの役目を果たします (一覧については {{CSP("default-src")}} の説明を参照してください)。また、インラインスクリプトや <code>eval()</code> の実行を防ぐには {{CSP("default-src")}} や {{CSP("script-src")}} を指定する必要があります。さらに、{{HTMLElement("style")}} 要素や <code>style</code> 属性によるインラインスタイルの適用を防ぐには {{CSP("default-src")}} や {{CSP("style-src")}} の指定が必要となります。</p>

<h2 id="Examples_Common_use_cases" name="Examples_Common_use_cases">一般的な適用例</h2>

<p>この章では、一般的なセキュリティポリシーの適用例を示します。</p>

<h3 id="Example_1" name="Example_1">例 1</h3>

<p>サイト管理者が、すべてのコンテンツをサイト自身のドメイン (サブドメインを除く) から取得させたい場合。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src 'self'</pre>

<h3 id="Example_2" name="Example_2">例 2</h3>

<p>サイト管理者が、信頼されたドメインとそのすべてのサブドメインからのコンテンツを許可したい場合 (CSPがセットされたドメインと同一とは限らない)。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src 'self' *.trusted.com</pre>

<h3 id="Example_3" name="Example_3">例 3</h3>

<p>サイト管理者がウェブアプリのユーザーに、任意のドメインからの画像読み込みを許可したい場合。ただし、音声や動画は信頼された配信元からのものだけに制限し、すべてのスクリプトは、信頼されたコードをホストする特定のサーバーのみに制限する。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com</pre>

<p>この例では、コンテンツのデフォルト設定としてドキュメント自身のホストのみを許可していますが、以下の例外を認めています。</p>

<ul>
 <li>画像は任意の場所から読み込まれます (ワイルドカード "*" による指定に注意)。</li>
 <li>メディアは media1.com と media2.com のものだけが許可されます (ただしサブドメインは許可されません)。</li>
 <li>実行可能なスクリプトは userscripts.example.com のものだけ許可されます。</li>
</ul>

<h3 id="Example_4" name="Example_4">例 4</h3>

<p>サイト管理者がオンラインバンキングのウェブサイトについて、リクエスト時の盗聴攻撃を防ぐため、すべてのコンテンツを TLS で読み込むようにしたい場合。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src https://onlinebanking.jumbobank.com</pre>

<p>この例では、ドメインを単一オリジン onlinebanking.jumbobank.com のみに制限し、かつドキュメントへのアクセスを HTTPS のみに制限しています。</p>

<h3 id="Example_5" name="Example_5">例 5</h3>

<p>サイト管理者がウェブメールサイトについて、メール内の HTML を許可し、任意のドメインから画像の読み込みを許可するが、JavaScript や他に危険性のあるコンテンツは許可したくない場合。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src 'self' *.mailsite.com; img-src *</pre>

<p>この例では、 {{CSP("script-src")}} を指定していないことに注意してください。この CSP を適用したサイトは、スクリプトに関して {{CSP("default-src")}} ディレクティブの設定を適用します。つまり、スクリプトは元のサーバーのものだけ読み込まれます。</p>

<h2 id="Testing_your_policy" name="Testing_your_policy">ポリシーのテスト</h2>

<p>本番環境への適用をスムーズに行うため、CSP は report-only モードで動作させることが可能です。このモードの場合、ポリシーによるブロックは行われず、指定した URI へポリシー違反の内容が報告されます。また、新しいポリシーを本番環境に適用する前に試験運用する際にも report-only モードは利用できます。</p>

<p>ポリシーを report-only モードで動作させるには、以下のようにポリシーを {{HTTPHeader("Content-Security-Policy-Report-Only")}} HTTP ヘッダーに指定します。</p>

<pre class="syntaxbox">Content-Security-Policy-Report-Only: <em>policy</em> </pre>

<p>同じレスポンス中に {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと {{HTTPHeader("Content-Security-Policy")}} ヘッダーが存在した場合、どちらのポリシーも考慮されます。<code>Content-Security-Policy</code> ヘッダーに指定したポリシーについてはブロックが行われ、<code>Content-Security-Policy-Report-Only</code> ヘッダーに指定したポリシーは報告のみが行われます。</p>

<h2 id="Enabling_reporting" name="Enabling_reporting">報告機能の利用</h2>

<p>既定では、違反内容は報告されません。違反内容の報告機能を有効にするには {{CSP("report-uri")}} ポリシーディレクティブを指定し、報告先の URI を 1 つ以上指定する必要があります。</p>

<pre class="syntaxbox">Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi</pre>

<p>URI を指定したら報告を受け取るサーバーを立ち上げます。受信した内容は適切に感じるどんな方法でも保存・処理することができます。</p>

<h2 id="Violation_report_syntax" name="Violation_report_syntax">違反内容の報告の構文</h2>

<p>違反内容は以下のデータを含んだ JSON オブジェクトで送信されます。</p>

<dl>
 <dt><code>blocked-uri</code></dt>
 <dd>コンテンツセキュリティポリシーによって読み込みがブロックされたリソースの URI。ブロックされた URI が <code>document-uri</code> とは異なるオリジンだった場合、ブロックされた URI はスキーム・ホスト・ポートのみを含むように切り詰められます。</dd>
</dl>

<dl>
 <dt><code>disposition</code></dt>
 <dd><code>"enforce"</code> または <code>"report"</code> のいずれかで、 {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーか <code>Content-Security-Policy</code> ヘッダーのどちらが使われているかで決まる。</dd>
 <dt><code>document-uri</code></dt>
 <dd>違反が生じたドキュメントの URI。</dd>
 <dt><code>effective-directive</code></dt>
 <dd>実行により違反を起こしたディレクティブです。</dd>
 <dt><code>original-policy</code></dt>
 <dd><code>Content-Security-Policy</code> HTTP ヘッダーに元々指定されていたポリシー。</dd>
 <dt><code>referrer</code></dt>
 <dd>違反が生じたドキュメントのリファラー。</dd>
 <dt><code>script-sample</code></dt>
 <dd>違反を起こしたインラインスクリプト、イベントハンドラー、スタイルの最初の 40 文字、</dd>
 <dt><code>status-code</code></dt>
 <dd>グローバルオブジェクトが初期化されたリソースの HTTP ステータスコード。</dd>
 <dt><code>violated-directive</code></dt>
 <dd>違反したポリシーセクションの名前。</dd>
</dl>

<h2 id="Sample_violation_report" name="Sample_violation_report">違反報告の例</h2>

<p><code>http://example.com/signup.html</code> というページを例に考えます。ここでは次のようなポリシーを指定しており、<code>cdn.example.com</code> のスタイルシートのみを許可しています。</p>

<div>
<pre class="syntaxbox">Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports</pre>
</div>

<p><code>signup.html</code> の内容は次の通りです。</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Sign Up&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    ... Content ...
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>間違いがあることにお気付きでしょうか？スタイルシートの読み込みは <code>cdn.example.com</code> からのみに制限されていますが、実際には自身のドメイン (<code>http://example.com</code>) から読み込もうとしています。このドキュメントを閲覧した際には、次のような違反内容が <code>http://example.com/_/csp-reports</code> へ POST リクエストで送信されます。</p>

<pre>{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports"
  }
}</pre>

<p>ご覧の通り、<code>blocked-uri</code> には違反の原因となったリソースのフルパスが記録されています。ただし、必ずフルパスが記録されるとは限りません。例えば、 <code>signup.html</code> が <code>http://anothercdn.example.com/stylesheet.css</code> から CSS を読み込もうとした場合、<code>blocked-uri</code> にはフルパスではなくオリジンのみ (<code>http://anothercdn.example.com</code>) が記録されます。この一見不思議な挙動は CSP の仕様書に <a href="http://www.w3.org/TR/CSP/#violation-reports">説明されています</a>。手短に言うと、この挙動はクロスオリジンのリソースに関する機密情報の漏えいを防ぐために規定されています。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp")}}</p>

<p>一部のバージョンの Safari には、コンテンツセキュリティポリシーヘッダーが設定されていて Same Origin ヘッダーがないと、ブラウザーが自分自身でホストされたコンテンツやオフサイトコンテンツをブロックし、コンテンツセキュリティポリシーがそのコンテンツを許可していないという誤った報告をするという顕著な非互換があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTTP の {{HTTPHeader("Content-Security-Policy")}} ヘッダー</li>
 <li>HTTP の {{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダー</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">WebExtensions のコンテンツセキュリティ</a></li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy#CSP_in_workers">ウェブワーカーでの CSP</a></li>
 <li><a href="/ja/docs/Web/Privacy">プライバシー、許可、情報セキュリティ</a></li>
 <li><a href="https://github.com/google/csp-evaluator">CSP Evaluator</a> - Evaluate your Content Security Policy</li>
</ul>
