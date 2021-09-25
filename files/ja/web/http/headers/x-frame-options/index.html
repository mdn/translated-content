---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
tags:
  - Apache
  - Gecko
  - HAProxy
  - HTTP
  - Security
  - nginx
  - セキュリティ
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/X-Frame-Options
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>X-Frame-Options</code></strong> は <a href="/ja/docs/Web/HTTP">HTTP</a> のレスポンスヘッダーで、ブラウザーがページを {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}} の中に表示することを許可するかどうかを示すために使用されます。サイトはコンテンツが他のサイトに埋め込まれないよう保証することで、{{interwiki("wikipedia", "クリックジャッキング")}}攻撃を防ぐために使用することができます。</p>

<p>強化されたセキュリティは、ユーザーが <code>X-Frame-Options</code> に対応したブラウザーを使用して文書にアクセスした場合のみ提供されます。</p>

<div class="note">
<p><strong>Note:</strong> {{HTTPHeader("Content-Security-Policy")}} ヘッダーには <code><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors">frame-ancestors</a></code> ディレクティブがあり、対応しているブラウザーにおいてこのヘッダーを<a href="https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options">置き換えて</a>います。</p>
</div>

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

<p><code>X-Frame-Options</code> には二つの有効なディレクティブがあります。</p>

<pre class="syntaxbox notranslate">X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
</pre>

<h3 id="Directives" name="Directives">ディレクティブ</h3>

<p><code>DENY</code> を指定した場合は、他のサイトからフレームにページを読み込もうとした時に失敗するだけでなく、同じサイトから読み込もうとした時にも失敗します。一方、 <code>SAMEORIGIN</code> を指定した場合は、フレームの中のページを含むサイトが、ページを提供しているサイトと同じである限り、フレーム内でページを利用することができます。</p>

<dl>
 <dt><code>DENY</code></dt>
 <dd>サイト側の意図に関わらず、ページをフレーム内に表示することはできません。</dd>
 <dt><code>SAMEORIGIN</code></dt>
 <dd>ページは、ページ自体と同じオリジンのフレーム内でのみ表示されます。仕様書ではこのオプションを最上位、親、チェーン全体のどれに適用するかをブラウザーベンダーに任せていますが、すべての生成元が同じオリジンでない限り、利用価値がないと議論されています。 ({{bug(725490)}} を参照)。対応の詳細は{{anch("Browser compatibility", "ブラウザーの互換性")}}もご覧ください。</dd>
 <dt><code>ALLOW-FROM <em>uri</em></code><em> (廃止)</em></dt>
 <dd>これは廃止されたディレクティブであり、最近のブラウザーでは動作しません。使用しないでください。対応している古いブラウザーでは、ページは指定されたオリジン <em>uri</em> のフレーム内でのみ表示されます。なお、従来の Firefox では <code>SAMEORIGIN</code> と同じ問題がありました。 — フレームの生成元が同じオリジンであるかどうかをチェックしません。 {{HTTPHeader("Content-Security-Policy")}} ヘッダーには <code>frame-ancestors</code> ディレクティブがあり、代わりにこれを使用することができます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<div class="note">
<p><strong>メモ:</strong> meta タグに設定しても意味がありません。例えば、 <code>&lt;meta http-equiv="X-Frame-Options" content="deny"&gt;</code> は効果がありません。使用しないでください。以下の例にあるように、 <code>X-Frame-Options</code> は HTTP ヘッダーを通じて設定された場合のみ動作します。</p>
</div>

<h3 id="Configuring_Apache" name="Configuring_Apache">Apache の設定</h3>

<p>Apache で X-Frame-Options ヘッダをすべてのページで送信するように設定するには、サイトの設定に以下の記述を追加してください。</p>

<pre class="notranslate">Header always set X-Frame-Options "SAMEORIGIN"
</pre>

<p>Apache で <code>X-Frame-Options</code> を DENY に設定するには、サイトの設定に以下の記述を追加してください</p>

<pre class="notranslate">Header set X-Frame-Options "DENY"
</pre>

<h3 id="Configuring_nginx" name="Configuring_nginx">nginx の設定</h3>

<p>nginx で <code>X-Frame-Options</code> ヘッダーを送信するように設定するには、以下の記述を http、server、 location のいずれかの設定に追加してください。</p>

<pre class="notranslate">add_header X-Frame-Options SAMEORIGIN always;
</pre>

<h3 id="Configuring_IIS" name="Configuring_IIS">IIS の設定</h3>

<p>IIS で <code>X-Frame-Options</code> ヘッダーを送信するように設定するには、サイトの <code>Web.config</code> ファイルに以下の設定を追加してください。</p>

<pre class="brush: xml notranslate">&lt;system.webServer&gt;
  ...

  &lt;httpProtocol&gt;
    &lt;customHeaders&gt;
      &lt;add name="X-Frame-Options" value="SAMEORIGIN" /&gt;
    &lt;/customHeaders&gt;
  &lt;/httpProtocol&gt;

  ...
&lt;/system.webServer&gt;
</pre>

<h3 id="Configuring_HAProxy" name="Configuring_HAProxy">HAProxy の設定</h3>

<p>HAProxy で <code>X-Frame-Options</code> ヘッダーを送信するように設定するには、以下の記述を front-end、listen、backend のいずれかの設定に追加してください。</p>

<pre class="notranslate">rspadd X-Frame-Options:\ SAMEORIGIN
</pre>

<p>他にも、より新しいバージョンでは次のような設定ができます。</p>

<pre class="notranslate">http-response set-header X-Frame-Options SAMEORIGIN
</pre>

<h3 id="Configuring_Express" name="Configuring_Express">Express の設定</h3>

<p>Express で <code>X-Frame-Options</code> ヘッダーを送信するように設定するには、 <a href="https://helmetjs.github.io/">helmet</a> を使用して <a href="https://helmetjs.github.io/docs/frameguard/">frameguard</a> でヘッダーを設定します。以下の記述をサーバー設定に追加してください。</p>

<pre class="brush: js notranslate">const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
</pre>

<p>他にも、直接 frameguard を使用することもできます。</p>

<pre class="brush: js notranslate">const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7034")}}</td>
   <td>HTTP Header Field X-Frame-Options</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.X-Frame-Options")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors"><code>frame-ancestors</code> (CSP)</a></li>
 <li><a href="https://tools.ietf.org/html/rfc7034">HTTP Header Field X-Frame-Options - RFC 7034</a></li>
 <li><a class="external" href="https://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx">ClickJacking Defenses - IEBlog</a></li>
 <li><a href="https://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx">Combating ClickJacking with X-Frame-Options - IEInternals</a></li>
</ul>
