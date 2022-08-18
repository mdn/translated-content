---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
- HTTP
- HTTP Header
- Reference
- Request header
- header
translation_of: Web/HTTP/Headers/Authorization
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>Authorization</code></strong> リクエストヘッダーは、ユーザーエージェントがサーバーから認証を受けるための証明書を保持し、ふつうは、必ずではありませんが、サーバーが {{HTTPStatus("401")}} <code>Unauthorized</code> ステータスと {{HTTPHeader("WWW-Authenticate")}} ヘッダーを返した後に使われます。</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">構文</h2>

<pre class="brush: html">Authorization: &lt;type&gt; &lt;credentials&gt;</pre>

<h2 id="Directives">ディレクティブ</h2>

<dl>
  <dt>&lt;type&gt;</dt>
  <dd><a href="/ja/docs/Web/HTTP/Authentication#認証方式">認証方式</a>。一般的には <a href="/ja/docs/Web/HTTP/Authentication#basic_認証方式">"Basic"</a> です。それ以外に以下のような種類があります。
    <ul>
      <li><a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">認証スキームの IANA レジストリ</a></li>
      <li><a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">AWS サーバーの認証 (<code>AWS4-HMAC-SHA256</code>)</a></li>
    </ul>
  </dd>
  <dt>&lt;credentials&gt;</dt>
  <dd>"Basic" 認証方式を使用している場合、認証情報は次のように構築されます。
    <ul>
      <li>コロンで結合したユーザー名とパスワード (<code>aladdin:opensesame</code>)。</li>
      <li>結果の文字列は <a href="/ja/docs/Glossary/Base64">base64</a> でエンコードされます (<code>YWxhZGRpbjpvcGVuc2VzYW1l</code>)。</li>
    </ul>

    <div class="note">
      <p><strong>注</strong>: Base64 エンコードは暗号化でもハッシュでもありません。この方法の安全性はクリアテキストで認証情報を送るのと同等です (Base64 は可逆エンコーディングです)。 Basic 認証は HTTPS との組み合わせで使用することをお勧めします。</p>
    </div>
  </dd>
</dl>

<h2 id="Examples">例</h2>

<pre>Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
</pre>

<p>Apache や nginx サーバーで HTTP Basic 認証を使用してサイトを保護する方法の例については、 <a href="/ja/docs/Web/HTTP/Authentication">HTTP authentication</a> を参照してください。</p>

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
      <td>{{RFC("7235", "Authorization", "4.2")}}</td>
      <td>HTTP/1.1: Authentication</td>
    </tr>
    <tr>
      <td>{{RFC("7617")}}</td>
      <td>The 'Basic' HTTP Authentication Scheme</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Authentication">HTTP 認証</a></li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
