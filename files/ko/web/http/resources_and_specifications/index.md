---
title: HTTP 리소스와 명세
slug: Web/HTTP/Resources_and_specifications
translation_of: Web/HTTP/Resources_and_specifications
---
<div>{{HTTPSidebar}}</div>

<p>HTTP는 1990년 초에 처음으로 명세되었습니다. 확장성을 염두에 두고 설계하였고, 해를 거듭하면서 더 많은 추가 사항들이 세상에 나왔습니다; 이런 일로 많은 명세서를 통해 세상에 뿌려진 명세들이 나오게 되었습니다(실험되다가 폐기된 확장들 가운데에서도). 이 페이지에서는 HTTP와 관련해 의미가 있는 리소스들을 나열하고 있습니다.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">제목</th>
   <th scope="col">상태</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{rfc(7230)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7231)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7232)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7233)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7234)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(5861)}}</td>
   <td>HTTP Cache-Control Extensions for Stale Content</td>
   <td>Informational</td>
  </tr>
  <tr>
   <td>{{rfc(7235)}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Authentication</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(6265)}}</td>
   <td>HTTP State Management Mechanism<br>
    <em>Defines Cookies</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-prefixes-00">Draft spec</a></td>
   <td>Cookie Prefixes</td>
   <td>IETF Draft</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00">Draft spec</a></td>
   <td>Same-Site Cookies</td>
   <td>IETF Draft</td>
  </tr>
  <tr>
   <td>{{rfc(2145)}}</td>
   <td>Use and Interpretation of HTTP Version Numbers</td>
   <td>Informational</td>
  </tr>
  <tr>
   <td>{{rfc(6585)}}</td>
   <td>Additional HTTP Status Codes</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7538)}}</td>
   <td>The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect)</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7725)}}</td>
   <td>An HTTP Status Code to Report Legal Obstacles</td>
   <td>On the standard track</td>
  </tr>
  <tr>
   <td>{{rfc(2397)}}</td>
   <td>The "data" URL scheme</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(3986)}}</td>
   <td>Uniform Resource Identifier (URI): Generic Syntax</td>
   <td>Internet Standard</td>
  </tr>
  <tr>
   <td>{{rfc(5988)}}</td>
   <td>Web Linking<br>
    <em>Defines the {{HTTPHeader("Link")}} header</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/id/draft-thomson-hybi-http-timeout-01.html">Experimental spec</a></td>
   <td>Hypertext Transfer Protocol (HTTP) Keep-Alive Header</td>
   <td>Informational (Expired)</td>
  </tr>
  <tr>
   <td><a href="http://httpwg.org/http-extensions/client-hints.html">Draft spec</a></td>
   <td>HTTP Client Hints</td>
   <td>IETF Draft</td>
  </tr>
  <tr>
   <td>{{rfc(7578)}}</td>
   <td>Returning Values from Forms: multipart/form-data</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(6266)}}</td>
   <td>Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(2183)}}</td>
   <td>Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field<br>
    <em>Only a subset of syntax of the {{HTTPHeader("Content-Disposition")}} header can be used in the context of HTTP messages.</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7239)}}</td>
   <td>Forwarded HTTP Extension</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(6455)}}</td>
   <td>The WebSocket Protocol</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(5246)}}</td>
   <td>The Transport Layer Security (TLS) Protocol Version 1.2<br>
    <em>This specification has been modified by subsequent RFCs, but these modifications have no effect on the HTTP protocol.</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td><a href="https://tlswg.github.io/tls13-spec/)">Draft spec</a></td>
   <td>The Transport Layer Security (TLS) Protocol Version 1.3<br>
    <em>Once ready, this protocol will supersede TLS 1.2.</em></td>
   <td>IETF Draft</td>
  </tr>
  <tr>
   <td>{{rfc(2817)}}</td>
   <td>Upgrading to TLS Within HTTP/1.1</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7540)}}</td>
   <td>Hypertext Transfer Protocol Version 2 (HTTP/2)</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(7541)}}</td>
   <td>HPACK: Header Compression for HTTP/2</td>
   <td>On the standard track</td>
  </tr>
  <tr>
   <td>{{rfc(7838)}}</td>
   <td>HTTP Alternative Services</td>
   <td>On the standard track</td>
  </tr>
  <tr>
   <td>{{rfc(7301)}}</td>
   <td>Transport Layer Security (TLS) Application-Layer Protocol Negotiation Extension<br>
    <em>Used to negotiate HTTP/2 at the transport to save an extra request/response round trip.</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(6454)}}</td>
   <td>The Web Origin Concept</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{SpecName("CORS")}}</td>
   <td>Cross-Origin Resource Sharing</td>
   <td>{{Spec2("CORS")}}</td>
  </tr>
  <tr>
   <td>{{rfc(7034)}}</td>
   <td>HTTP Header Field X-Frame-Options</td>
   <td>Informational</td>
  </tr>
  <tr>
   <td>{{rfc(6797)}}</td>
   <td>HTTP Strict Transport Security (HSTS)</td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{SpecName("Upgrade Insecure Requests")}}</td>
   <td>Upgrade Insecure Requests</td>
   <td>{{Spec2("Upgrade Insecure Requests")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("CSP 1.0")}}</td>
   <td>Content Security Policy 1.0<br>
    <em>CSP 1.1 and CSP 3.0 doesn't extend the HTTP standard</em></td>
   <td>{{Spec2("CSP 1.0")}}</td>
  </tr>
  <tr>
   <td><a href="https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx">Microsoft document</a></td>
   <td>Specifying legacy document modes*<br>
    <em>Defines X-UA-Compatible</em></td>
   <td>Note</td>
  </tr>
  <tr>
   <td>{{rfc(5689)}}</td>
   <td>HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)<br>
    <em>These extensions of the Web, as well as CardDAV and CalDAV, are out-of-scope for HTTP on the Web. Modern APIs for application are defines using the RESTful pattern nowadays.</em></td>
   <td>Proposed Standard</td>
  </tr>
  <tr>
   <td>{{rfc(2324)}}</td>
   <td>Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)</td>
   <td>April 1st joke spec</td>
  </tr>
  <tr>
   <td>{{rfc(7168)}}</td>
   <td>The Hyper Text Coffee Pot Control Protocol for Tea Efflux Appliances (HTCPCP-TEA)</td>
   <td>April 1st joke spec</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG")}}</td>
   <td>HTML<br>
    <em>Defines extensions of HTTP for Server-Sent Events</em></td>
   <td>{{Spec2("HTML WHATWG")}}</td>
  </tr>
 </tbody>
</table>

<p> </p>
