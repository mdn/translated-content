---
title: HTTP のリソースと仕様書
slug: Web/HTTP/Resources_and_specifications
tags:
  - Guide
  - HTTP
translation_of: Web/HTTP/Resources_and_specifications
---
<div>{{HTTPSidebar}}</div>

<p>HTTP が最初に規定されたのは 1990 年代初頭のことです。拡張性を念頭に置いて設計されていますが、何年にもわたって何度も追加されてきました。このため、その仕様は多くの仕様書に散在しています (実験的に放棄された拡張の中に埋もれています)。このページでは、HTTP に関連するリソースをリストアップしています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">表題</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{rfc(7230)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7231)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7232)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7233)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7234)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(5861)}}</td>
   <td>HTTP Cache-Control Extensions for Stale Content</td>
   <td>情報提供</td>
  </tr>
  <tr>
   <td>{{rfc(8246)}}</td>
   <td>HTTP Immutable Responses</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7235)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Authentication</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(6265)}}</td>
   <td>HTTP State Management Mechanism<br>
    <em>Defines Cookies</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-prefixes-00">草稿仕様</a></td>
   <td>Cookie Prefixes</td>
   <td>IETF 草稿</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00">草稿仕様</a></td>
   <td>Same-Site Cookies</td>
   <td>IETF 草稿</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-alone-01">草稿仕様</a></td>
   <td>Deprecate modification of 'secure' cookies from non-secure origins</td>
   <td>IETF 草稿</td>
  </tr>
  <tr>
   <td>{{rfc(2145)}}</td>
   <td>Use and Interpretation of HTTP Version Numbers</td>
   <td>情報提供</td>
  </tr>
  <tr>
   <td>{{rfc(6585)}}</td>
   <td>Additional HTTP Status Codes</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7538)}}</td>
   <td>The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect)</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7725)}}</td>
   <td>An HTTP Status Code to Report Legal Obstacles</td>
   <td>標準化過程</td>
  </tr>
  <tr>
   <td>{{rfc(2397)}}</td>
   <td>The "data" URL scheme</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(3986)}}</td>
   <td>Uniform Resource Identifier (URI): Generic Syntax</td>
   <td>インターネット標準</td>
  </tr>
  <tr>
   <td>{{rfc(5988)}}</td>
   <td>Web Linking<br>
    <em>Defines the {{HTTPHeader("Link")}} header</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/id/draft-thomson-hybi-http-timeout-01.html">実験的仕様</a></td>
   <td>Hypertext Transfer Protocol (HTTP) Keep-Alive Header</td>
   <td>情報提供 (有効期限切れ)</td>
  </tr>
  <tr>
   <td><a href="http://httpwg.org/http-extensions/client-hints.html">草稿仕様</a></td>
   <td>HTTP Client Hints</td>
   <td>IETF 草稿</td>
  </tr>
  <tr>
   <td>{{rfc(7578)}}</td>
   <td>Returning Values from Forms: multipart/form-data</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(6266)}}</td>
   <td>Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(2183)}}</td>
   <td>Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field<br>
    <em>{{HTTPHeader("Content-Disposition")}} ヘッダーの構文のサブセットのみが HTTP メッセージのコンテキストで利用できます。</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7239)}}</td>
   <td>Forwarded HTTP Extension</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(6455)}}</td>
   <td>The WebSocket Protocol</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(5246)}}</td>
   <td>The Transport Layer Security (TLS) Protocol Version 1.2<br>
    <em>この仕様は後続の RFC によって修正されていますが、これらの修正は HTTP プロトコルに影響を与えていません。</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(8446)}}</td>
   <td>The Transport Layer Security (TLS) Protocol Version 1.3<br>
    <em>TLS 1.2 を置き換え</em></td>
   <td>IETF 草稿</td>
  </tr>
  <tr>
   <td>{{rfc(2817)}}</td>
   <td>Upgrading to TLS Within HTTP/1.1</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7540)}}</td>
   <td>Hypertext Transfer Protocol Version 2 (HTTP/2)</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(7541)}}</td>
   <td>HPACK: Header Compression for HTTP/2</td>
   <td>標準化過程</td>
  </tr>
  <tr>
   <td>{{rfc(7838)}}</td>
   <td>HTTP Alternative Services</td>
   <td>標準化過程</td>
  </tr>
  <tr>
   <td>{{rfc(7301)}}</td>
   <td>Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension<br>
    <em>余分なリクエスト/レスポンスのラウンドトリップを節約するために、トランスポートで HTTP/2 をネゴシエートするために使用されます。</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(6454)}}</td>
   <td>The Web Origin Concept</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{SpecName('Fetch', '#cors-protocol', 'CORS')}}</td>
   <td>Cross-Origin Resource Sharing</td>
   <td>{{Spec2("Fetch")}}</td>
  </tr>
  <tr>
   <td>{{rfc(7034)}}</td>
   <td>HTTP Header Field X-Frame-Options</td>
   <td>情報提供</td>
  </tr>
  <tr>
   <td>{{rfc(6797)}}</td>
   <td>HTTP Strict Transport Security (HSTS)</td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{SpecName("Upgrade Insecure Requests")}}</td>
   <td>Upgrade Insecure Requests</td>
   <td>{{Spec2("Upgrade Insecure Requests")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("CSP 1.0")}}</td>
   <td>Content Security Policy 1.0<br>
    <em>CSP 1.1 および CSP 3.0 は HTTP 標準を拡張するものではありません</em></td>
   <td>{{Spec2("CSP 1.0")}}</td>
  </tr>
  <tr>
   <td><a href="https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx">マイクロソフト文章</a></td>
   <td>Specifying legacy document modes*<br>
    <em>X-UA-Compatible の定義</em></td>
   <td>Note</td>
  </tr>
  <tr>
   <td>{{rfc(5689)}}</td>
   <td>HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)<br>
    <em>これらのウェブの拡張機能は、 CardDAV や CalDAV と同様、ウェブ上の HTTP の対象外です。最近のアプリケーションの API は、 RESTful パターンを使って定義されています。</em></td>
   <td>標準化への提唱</td>
  </tr>
  <tr>
   <td>{{rfc(2324)}}</td>
   <td>Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)</td>
   <td>エイプリルフール冗談仕様</td>
  </tr>
  <tr>
   <td>{{rfc(7168)}}</td>
   <td>The Hyper Text Coffee Pot Control Protocol for Tea Efflux Appliances (HTCPCP-TEA)</td>
   <td>エイプリルフール冗談仕様</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG")}}</td>
   <td>HTML<br>
    <em>Server-Sent Event のための HTTP 拡張を定義</em></td>
   <td>{{Spec2("HTML WHATWG")}}</td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/2011/tracking-protection/drafts/tracking-dnt.html">Tracking Preference Expression</a></td>
   <td>DNT header</td>
   <td>編集者草稿 / 勧告候補</td>
  </tr>
  <tr>
   <td><a href="http://wicg.github.io/reporting/">Reporting API</a></td>
   <td><code>Report-To</code> header</td>
   <td>草稿</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-expect-ct-01">草稿仕様</a></td>
   <td>Expect-CT Extension for HTTP</td>
   <td>IETF 草稿</td>
  </tr>
 </tbody>
</table>
