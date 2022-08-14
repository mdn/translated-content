---
title: Cross-Origin Resource Sharing (CORS)
slug: Web/HTTP/CORS
tags:
  - AJAX
  - CORS
  - Cross-Origin Resource Sharing
  - Fetch
  - Fetch API
  - HTTP
  - HTTP Access Controls
  - NeedsTranslation
  - Same-origin policy
  - Security
  - TopicStub
  - XMLHttpRequest
  - l10n:priority
translation_of: Web/HTTP/CORS
---
{{HTTPSidebar}}

**Cross-Origin Resource Sharing** ({{Glossary("CORS")}}) ist ein Mechanismus, der zusätzliche {{Glossary("HTTP")}} Header verwendet um einem Browser mitzuteilen, dass er einer Webanwendung, die auf einer anderen Domain(Origin) läuft, die Berechtigung erteilt auf ausgewählte Ressourcen von einem Server eines anderen Ursprungs(Origin) zuzugreifen. Eine Webanwendung stellt eine **cross-origin HTTP-Anfage,** wenn sie eine Ressource anfordert, die einen anderen Ursprung(Domain, Protokoll und Port) hat, als ihren eigenen.

Ein Beispiel für cross-origin Anfragen: Der Frontend-JavaScript-Code für eine von `http://domain-a.com` bereitgestellte Webanwendung verwendet {{domxref("XMLHttpRequest")}} um eine Anfrage an `http://api.domain-b.com/data.json`zu stellen

Aus Sicherheitsgründen beschränken Browser die aus Skripten heraus initiierten HTTP-Anfragen mit unterschiedlichen Herkunftsbezeichnungen. Beispielsweise folgen XMLHttpRequest und die[Fetch-API](/de/docs/Web/API/Fetch_API) der [Richtlinie gleichen Ursprungs](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass eine Webanwendung, die diese APIs verwendet, nur HTTP-Ressourcen aus der gleichen Herkunft anfordern kann, aus der die Anwendung geladen wurde, es sei denn, die Antwort aus der anderen Herkunft enthält die richtigen CORS-Header.

![](https://mdn.mozillademos.org/files/14295/CORS_principle.png)

Der CORS-Mechanismus unterstützt sichere Cross-Origin-Anfragen und Datenübertragungen zwischen Browsern und Webservern. Moderne Browser verwenden CORS in einem API-Container wie `XMLHttpRequest` oder [Fetch](/de/docs/Web/API/Fetch_API), um das Risiko von Cross-Origin-HTTP-Anfragen zu minimieren.

## Wer sollte diesen Artikel lesen?

Wirklich jeder.

Genauer gesagt richtet sich dieser Artikel an Webadministratoren, Server- und Frontend-Entwickler. Moderne Browser handhaben die clientseitigen Komponenten von Cross-Origin Sharing, einschließlich Header und Richtliniendurchsetzung. Dieser neue Standard bedeutet jedoch, dass Server neue Anfrage- und Antwortheader verarbeiten müssen. Ein weiterer Artikel für Server-Entwickler, in dem [cross-origin sharing aus der Server-Perspektive (mit PHP-Code-Snippets)](/de/docs/Web/HTTP/Server-Side_Access_Control) diskutiert wird, ist eine ergänzende Lektüre.

## Welche Requests benutzen CORS?

Der [cross-origin sharing standard](https://fetch.spec.whatwg.org/#http-cors-protocol) wird benutzt um cross-site HTTP Requests für die:

- Invocations of the {{domxref("XMLHttpRequest")}} or [Fetch](/de/docs/Web/API/Fetch_API) APIs in a cross-site manner, as discussed above.
- Web Fonts (for cross-domain font usage in `@font-face` within CSS), [so that servers can deploy TrueType fonts that can only be cross-site loaded and used by web sites that are permitted to do so.](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements)
- [WebGL textures](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL).
- Images/video frames drawn to a canvas using {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}}.

This article is a general discussion of Cross-Origin Resource Sharing and includes a discussion of the necessary HTTP headers.

## Functional overview

The Cross-Origin Resource Sharing standard works by adding new [HTTP headers](/de/docs/Web/HTTP/Headers) that allow servers to describe the set of origins that are permitted to read that information using a web browser. Additionally, for HTTP request methods that can cause side-effects on server's data (in particular, for HTTP methods other than {{HTTPMethod("GET")}}, or for {{HTTPMethod("POST")}} usage with certain [MIME types](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with an HTTP {{HTTPMethod("OPTIONS")}} request method, and then, upon "approval" from the server, sending the actual request with the actual HTTP request method. Servers can also notify clients whether "credentials" (including [Cookies](/de/docs/Web/HTTP/Cookies) and HTTP Authentication data) should be sent with requests.

CORS failures result in errors, but for security reasons, specifics about what went wrong _are not available to JavaScript code_. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

Subsequent sections discuss scenarios, as well as provide a breakdown of the HTTP headers used.

## Examples of access control scenarios

Here, we present three scenarios that illustrate how Cross-Origin Resource Sharing works. All of these examples use the {{domxref("XMLHttpRequest")}} object, which can be used to make cross-site invocations in any supporting browser.

The JavaScript snippets included in these sections (and running instances of the server-code that correctly handles these cross-site requests) can be found "in action" at <http://arunranga.com/examples/access-control/>, and will work in browsers that support cross-site `XMLHttpRequest`.

A discussion of Cross-Origin Resource Sharing from a server perspective (including PHP code snippets) can be found in the [Server-Side Access Control (CORS)](/de/docs/Web/HTTP/Server-Side_Access_Control) article.

### Simple requests

Some requests don’t trigger a [CORS preflight](#Preflighted_requests). Those are called “simple requests” in this article, though the {{SpecName('Fetch')}} spec (which defines CORS) doesn’t use that term. A request that doesn’t trigger a [CORS preflight](#Preflighted_requests)—a so-called “simple request”—is one that meets all the following conditions:

- The only allowed methods are:

  - {{HTTPMethod("GET")}}
  - {{HTTPMethod("HEAD")}}
  - {{HTTPMethod("POST")}}

- Apart from the headers set automatically by the user agent (for example, {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, or [any of the other headers with names defined in the Fetch spec as a “forbidden header name”](https://fetch.spec.whatwg.org/#forbidden-header-name)), the only headers which are allowed to be manually set are [those which the Fetch spec defines as being a “CORS-safelisted request-header”](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), which are:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (but note the additional requirements below)

- The only allowed values for the {{HTTPHeader("Content-Type")}} header are:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- No event listeners are registered on any {{domxref("XMLHttpRequestUpload")}} object used in the request; these are accessed using the {{domxref("XMLHttpRequest.upload")}} property.
- No {{domxref("ReadableStream")}} object is used in the request.

> **Note:** These are the same kinds of cross-site requests that web content can already issue, and no response data is released to the requester unless the server sends an appropriate header. Therefore, sites that prevent cross-site request forgery have nothing new to fear from HTTP access control.

> **Note:** WebKit Nightly and Safari Technology Preview place additional restrictions on the values allowed in the {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, and {{HTTPHeader("Content-Language")}} headers. If any of those headers have ”non-standard” values, WebKit/Safari does not consider the request to meet the conditions for a “simple request”. What WebKit/Safari considers “non-standard” values for those headers is not documented except in the following WebKit bugs: [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178), [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566), and [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363). No other browsers implement those extra restrictions, because they’re not part of the spec.

For example, suppose web content on domain `http://foo.example` wishes to invoke content on domain `http://bar.other`. Code of this sort might be used within JavaScript deployed on foo.example:

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';

function callOtherDomain() {
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

This will lead to a simple exchange between the client and the server, using CORS headers to handle the privileges:

![](https://mdn.mozillademos.org/files/14293/simple_req.png)

Let us look at what the browser will send to the server in this case, and let's see how the server responds:

```shell
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

Lines 1 - 10 are headers sent. The main HTTP request header of note here is the {{HTTPHeader("Origin")}} header on line 10 above, which shows that the invocation is coming from content on the domain `http://foo.example`.

Lines 13 - 22 show the HTTP response from the server on domain `http://bar.other`. In response, the server sends back an {{HTTPHeader("Access-Control-Allow-Origin")}} header, shown above in line 16. The use of the {{HTTPHeader("Origin")}} header and of {{HTTPHeader("Access-Control-Allow-Origin")}} show the access control protocol in its simplest use. In this case, the server responds with a `Access-Control-Allow-Origin: *` which means that the resource can be accessed by **any** domain in a cross-site manner. If the resource owners at `http://bar.other` wished to restrict access to the resource to requests only from `http://foo.example`, they would send back:

`Access-Control-Allow-Origin: http://foo.example`

Note that now, no domain other than `http://foo.example` (identified by the ORIGIN: header in the request, as in line 10 above) can access the resource in a cross-site manner. The `Access-Control-Allow-Origin` header should contain the value that was sent in the request's `Origin` header.

### Preflighted requests

Unlike [“simple requests” (discussed above)](#Simple_requests), "preflighted" requests first send an HTTP request by the {{HTTPMethod("OPTIONS")}} method to the resource on the other domain, in order to determine whether the actual request is safe to send. Cross-site requests are preflighted like this since they may have implications to user data.

In particular, a request is preflighted if **any of the following conditions** is true:

- **If** the request uses any of the following methods:

  - {{HTTPMethod("PUT")}}
  - {{HTTPMethod("DELETE")}}
  - {{HTTPMethod("CONNECT")}}
  - {{HTTPMethod("OPTIONS")}}
  - {{HTTPMethod("TRACE")}}
  - {{HTTPMethod("PATCH")}}

- **Or if**, apart from the headers set automatically by the user agent (for example, {{HTTPHeader("Connection")}}, {{HTTPHeader("User-Agent")}}, or [any of the other header with a name defined in the Fetch spec as a “forbidden header name”](https://fetch.spec.whatwg.org/#forbidden-header-name)), the request includes any headers other than [those which the Fetch spec defines as being a “CORS-safelisted request-header”](https://fetch.spec.whatwg.org/#cors-safelisted-request-header), which are the following:

  - {{HTTPHeader("Accept")}}
  - {{HTTPHeader("Accept-Language")}}
  - {{HTTPHeader("Content-Language")}}
  - {{HTTPHeader("Content-Type")}} (but note the additional requirements below)
  - [`DPR`](http://httpwg.org/http-extensions/client-hints.html#dpr)
  - {{HTTPHeader("Downlink")}}
  - [`Save-Data`](http://httpwg.org/http-extensions/client-hints.html#save-data)
  - [`Viewport-Width`](http://httpwg.org/http-extensions/client-hints.html#viewport-width)
  - [`Width`](http://httpwg.org/http-extensions/client-hints.html#width)

- **Or if** the {{HTTPHeader("Content-Type")}} header has a value other than the following:

  - `application/x-www-form-urlencoded`
  - `multipart/form-data`
  - `text/plain`

- **Or if** one or more event listeners are registered on an {{domxref("XMLHttpRequestUpload")}} object used in the request.
- **Or if** a {{domxref("ReadableStream")}} object is used in the request.

> **Note:** WebKit Nightly and Safari Technology Preview place additional restrictions on the values allowed in the {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}, and {{HTTPHeader("Content-Language")}} headers. If any of those headers have ”non-standard” values, WebKit/Safari preflights the request. What WebKit/Safari considers “non-standard” values for those headers is not documented except in the following WebKit bugs: [Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language](https://bugs.webkit.org/show_bug.cgi?id=165178), [Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS](https://bugs.webkit.org/show_bug.cgi?id=165566), and [Switch to a blacklist model for restricted Accept headers in simple CORS requests](https://bugs.webkit.org/show_bug.cgi?id=166363). No other browsers implement those extra restrictions, because they’re not part of the spec.

The following is an example of a request that will be preflighted.

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain(){
  if(invocation)
    {
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/xml');
      invocation.onreadystatechange = handler;
      invocation.send(body);
    }
}

......
```

In the example above, line 3 creates an XML body to send with the `POST` request in line 8. Also, on line 9, a "customized" (non-standard) HTTP request header is set (`X-PINGOTHER: pingpong`). Such headers are not part of the HTTP/1.1 protocol, but are generally useful to web applications. Since the request uses a Content-Type of `application/xml`, and since a custom header is set, this request is preflighted.

![](https://mdn.mozillademos.org/files/16753/preflight_correct.png)

(Note: as described below, the actual POST request does not include the Access-Control-Request-\* headers; they are needed only for the OPTIONS request.)

Let's take a look at the full exchange between client and server. The first exchange is the _preflight request/response_:

    OPTIONS /resources/post-here/ HTTP/1.1
    Host: bar.other
    User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Language: en-us,en;q=0.5
    Accept-Encoding: gzip,deflate
    Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
    Connection: keep-alive
    Origin: http://foo.example
    Access-Control-Request-Method: POST
    Access-Control-Request-Headers: X-PINGOTHER, Content-Type


    HTTP/1.1 200 OK
    Date: Mon, 01 Dec 2008 01:15:39 GMT
    Server: Apache/2.0.61 (Unix)
    Access-Control-Allow-Origin: http://foo.example
    Access-Control-Allow-Methods: POST, GET, OPTIONS
    Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    Access-Control-Max-Age: 86400
    Vary: Accept-Encoding, Origin
    Content-Encoding: gzip
    Content-Length: 0
    Keep-Alive: timeout=2, max=100
    Connection: Keep-Alive
    Content-Type: text/plain

Once the preflight request is complete, the real request is sent:

    POST /resources/post-here/ HTTP/1.1
    Host: bar.other
    User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Language: en-us,en;q=0.5
    Accept-Encoding: gzip,deflate
    Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
    Connection: keep-alive
    X-PINGOTHER: pingpong
    Content-Type: text/xml; charset=UTF-8
    Referer: http://foo.example/examples/preflightInvocation.html
    Content-Length: 55
    Origin: http://foo.example
    Pragma: no-cache
    Cache-Control: no-cache

    <?xml version="1.0"?><person><name>Arun</name></person>


    HTTP/1.1 200 OK
    Date: Mon, 01 Dec 2008 01:15:40 GMT
    Server: Apache/2.0.61 (Unix)
    Access-Control-Allow-Origin: http://foo.example
    Vary: Accept-Encoding, Origin
    Content-Encoding: gzip
    Content-Length: 235
    Keep-Alive: timeout=2, max=99
    Connection: Keep-Alive
    Content-Type: text/plain

    [Some GZIP'd payload]

Lines 1 - 12 above represent the preflight request with the {{HTTPMethod("OPTIONS")}} method. The browser determines that it needs to send this based on the request parameters that the JavaScript code snippet above was using, so that the server can respond whether it is acceptable to send the request with the actual request parameters. OPTIONS is an HTTP/1.1 method that is used to determine further information from servers, and is a {{Glossary("safe")}} method, meaning that it can't be used to change the resource. Note that along with the OPTIONS request, two other request headers are sent (lines 10 and 11 respectively):

    Access-Control-Request-Method: POST
    Access-Control-Request-Headers: X-PINGOTHER, Content-Type

The {{HTTPHeader("Access-Control-Request-Method")}} header notifies the server as part of a preflight request that when the actual request is sent, it will be sent with a `POST` request method. The {{HTTPHeader("Access-Control-Request-Headers")}} header notifies the server that when the actual request is sent, it will be sent with a `X-PINGOTHER` and Content-Type custom headers. The server now has an opportunity to determine whether it wishes to accept a request under these circumstances.

Lines 14 - 26 above are the response that the server sends back indicating that the request method (`POST`) and request headers (`X-PINGOTHER`) are acceptable. In particular, let's look at lines 17-20:

    Access-Control-Allow-Origin: http://foo.example
    Access-Control-Allow-Methods: POST, GET
    Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
    Access-Control-Max-Age: 86400

The server responds with `Access-Control-Allow-Methods` and says that `POST` and `GET` are viable methods to query the resource in question. Note that this header is similar to the {{HTTPHeader("Allow")}} response header, but used strictly within the context of access control.

The server also sends `Access-Control-Allow-Headers` with a value of "`X-PINGOTHER, Content-Type`", confirming that these are permitted headers to be used with the actual request. Like `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers` is a comma separated list of acceptable headers.

Finally, {{HTTPHeader("Access-Control-Max-Age")}} gives the value in seconds for how long the response to the preflight request can be cached for without sending another preflight request. In this case, 86400 seconds is 24 hours. Note that each browser has a [maximum internal value](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age) that takes precedence when the `Access-Control-Max-Age` is greater.

#### Preflighted requests and redirects

Not all browsers currently support following redirects after a preflighted request. If a redirect occurs after a preflighted request, some browsers currently will report an error message such as the following.

> The request was redirected to 'https\://example.com/foo', which is disallowed for cross-origin requests that require preflight

> Request requires preflight, which is disallowed to follow cross-origin redirect

The CORS protocol originally required that behavior but [was subsequently changed to no longer require it](https://github.com/whatwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). However, not all browsers have implemented the change, and so still exhibit the behavior that was originally required.

So until all browsers catch up with the spec, you may be able to work around this limitation by doing one or both of the following:

- change the server-side behavior to avoid the preflight and/or to avoid the redirect—if you have control over the server the request is being made to
- change the request such that it is a [simple request](#Simple_requests) that doesn’t cause a preflight

But if it’s not possible to make those changes, then another way that may be possible is to this:

1.  Make a [simple request](#Simple_requests) (using {{domxref("Response.url")}} for the Fetch API, or {{domxref("XMLHttpRequest.responseURL")}}) to determine what URL the real preflighted request would end up at.
2.  Make another request (the “real” request) using the URL you obtained from `Response.url` or `XMLHttpRequest.responseURL` in the first step.

However, if the request is one that triggers a preflight due to the presence of the `Authorization` header in the request, you won’t be able to work around the limitation using the steps above. And you won’t be able to work around it at all unless you have control over the server the request is being made to.

### Requests with credentials

The most interesting capability exposed by both {{domxref("XMLHttpRequest")}} or [Fetch](/de/docs/Web/API/Fetch_API) and CORS is the ability to make "credentialed" requests that are aware of [HTTP cookies](/de/docs/Web/HTTP/Cookies) and HTTP Authentication information. By default, in cross-site `XMLHttpRequest"` or [Fetch](/de/docs/Web/API/Fetch_API) invocations, browsers will **not** send credentials. A specific flag has to be set on the `XMLHttpRequest"` object or the {{domxref("Request")}} constructor when it is invoked.

In this example, content originally loaded from `http://foo.example` makes a simple GET request to a resource on `http://bar.other` which sets Cookies. Content on foo.example might contain JavaScript like this:

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/credentialed-content/';

function callOtherDomain(){
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.onreadystatechange = handler;
    invocation.send();
  }
}
```

Line 7 shows the flag on {{domxref("XMLHttpRequest")}} that has to be set in order to make the invocation with Cookies, namely the `withCredentials` boolean value. By default, the invocation is made without Cookies. Since this is a simple `GET` request, it is not preflighted, but the browser will **reject** any response that does not have the {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` header, and **not** make the response available to the invoking web content.

![](https://mdn.mozillademos.org/files/14291/cred-req.png)

Here is a sample exchange between client and server:

    GET /resources/access-control-with-credentials/ HTTP/1.1
    Host: bar.other
    User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Language: en-us,en;q=0.5
    Accept-Encoding: gzip,deflate
    Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
    Connection: keep-alive
    Referer: http://foo.example/examples/credential.html
    Origin: http://foo.example
    Cookie: pageAccess=2


    HTTP/1.1 200 OK
    Date: Mon, 01 Dec 2008 01:34:52 GMT
    Server: Apache/2.0.61 (Unix) PHP/4.4.7 mod_ssl/2.0.61 OpenSSL/0.9.7e mod_fastcgi/2.4.2 DAV/2 SVN/1.4.2
    X-Powered-By: PHP/5.2.6
    Access-Control-Allow-Origin: http://foo.example
    Access-Control-Allow-Credentials: true
    Cache-Control: no-cache
    Pragma: no-cache
    Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
    Vary: Accept-Encoding, Origin
    Content-Encoding: gzip
    Content-Length: 106
    Keep-Alive: timeout=2, max=100
    Connection: Keep-Alive
    Content-Type: text/plain


    [text/plain payload]

Although line 11 contains the Cookie destined for the content on `http://bar.other`, if bar.other did not respond with an {{HTTPHeader("Access-Control-Allow-Credentials")}}`: true` (line 19) the response would be ignored and not made available to web content.

#### Credentialed requests and wildcards

When responding to a credentialed request, the server **must** specify an origin in the value of the `Access-Control-Allow-Origin` header, instead of specifying the "`*`" wildcard.

Because the request headers in the above example include a `Cookie` header, the request would fail if the value of the `Access-Control-Allow-Origin` header were "\*". But it does not fail: Because the value of the `Access-Control-Allow-Origin` header is "`http://foo.example`" (an actual origin) rather than the "`*`" wildcard, the credential-cognizant content is returned to the invoking web content.

Note that the `Set-Cookie` response header in the example above also sets a further cookie. In case of failure, an exception—depending on the API used—is raised.

#### Third-party cookies

Note that cookies set in CORS responses are subject to normal third-party cookie policies. In the example above, the page is loaded from `foo.example`, but the cookie on line 22 is sent by `bar.other`, and would thus not be saved if the user has configured their browser to reject all third-party cookies.

## The HTTP response headers

This section lists the HTTP response headers that servers send back for access control requests as defined by the Cross-Origin Resource Sharing specification. The previous section gives an overview of these in action.

### Access-Control-Allow-Origin

A returned resource may have one {{HTTPHeader("Access-Control-Allow-Origin")}} header, with the following syntax:

    Access-Control-Allow-Origin: <origin> | *

`Access-Control-Allow-Origin` specifies either a single origin, which tells browsers to allow that origin to access the resource; or else — for requests **without** credentials — the "`*`" wildcard, to tell browsers to allow any origin to access the resource.

For example, to allow code from the origin `http://mozilla.org` to access the resource, you can specify:

    Access-Control-Allow-Origin: http://mozilla.org

If the server specifies a single origin rather than the "`*`" wildcard, then the server should also include `Origin` in the {{HTTPHeader("Vary")}} response header — to indicate to clients that server responses will differ based on the value of the {{HTTPHeader("Origin")}} request header.

### Access-Control-Expose-Headers

The {{HTTPHeader("Access-Control-Expose-Headers")}} header lets a server whitelist headers that browsers are allowed to access. For example:

    Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header

This allows the `X-My-Custom-Header` and `X-Another-Custom-Header` headers to be exposed to the browser.

### Access-Control-Max-Age

The {{HTTPHeader("Access-Control-Max-Age")}} header indicates how long the results of a preflight request can be cached. For an example of a preflight request, see the above examples.

    Access-Control-Max-Age: <delta-seconds>

The `delta-seconds` parameter indicates the number of seconds the results can be cached.

### Access-Control-Allow-Credentials

The {{HTTPHeader("Access-Control-Allow-Credentials")}} header Indicates whether or not the response to the request can be exposed when the `credentials` flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note that simple `GET` requests are not preflighted, and so if a request is made for a resource with credentials, if this header is not returned with the resource, the response is ignored by the browser and not returned to web content.

    Access-Control-Allow-Credentials: true

[Credentialed requests](#Requests_with_credentials) are discussed above.

### Access-Control-Allow-Methods

The {{HTTPHeader("Access-Control-Allow-Methods")}} header specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request. The conditions under which a request is preflighted are discussed above.

    Access-Control-Allow-Methods: <method>[, <method>]*

An example of a [preflight request is given above](#Preflighted_requests), including an example which sends this header to the browser.

### Access-Control-Allow-Headers

The {{HTTPHeader("Access-Control-Allow-Headers")}} header is used in response to a [preflight request](#Preflighted_requests) to indicate which HTTP headers can be used when making the actual request.

    Access-Control-Allow-Headers: <field-name>[, <field-name>]*

## The HTTP request headers

This section lists headers that clients may use when issuing HTTP requests in order to make use of the cross-origin sharing feature. Note that these headers are set for you when making invocations to servers. Developers using cross-site {{domxref("XMLHttpRequest")}} capability do not have to set any cross-origin sharing request headers programmatically.

### Origin

The {{HTTPHeader("Origin")}} header indicates the origin of the cross-site access request or preflight request.

    Origin: <origin>

The origin is a URI indicating the server from which the request initiated. It does not include any path information, but only the server name.

> **Note:** The `origin` can be the empty string; this is useful, for example, if the source is a `data` URL.

Note that in any access control request, the {{HTTPHeader("Origin")}} header is **always** sent.

### Access-Control-Request-Method

The {{HTTPHeader("Access-Control-Request-Method")}} is used when issuing a preflight request to let the server know what HTTP method will be used when the actual request is made.

    Access-Control-Request-Method: <method>

Examples of this usage can be [found above.](#Preflighted_requests)

### Access-Control-Request-Headers

The {{HTTPHeader("Access-Control-Request-Headers")}} header is used when issuing a preflight request to let the server know what HTTP headers will be used when the actual request is made.

    Access-Control-Request-Headers: <field-name>[, <field-name>]*

Examples of this usage can be [found above](#Preflighted_requests).

## Specifications

| Specification                                                    | Status                   | Comment                                                                          |
| ---------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------- |
| {{SpecName('Fetch', '#cors-protocol', 'CORS')}} | {{Spec2('Fetch')}} | New definition; supplants [W3C CORS](https://www.w3.org/TR/cors/) specification. |

## Browser compatibility

{{Compat("http.headers.Access-Control-Allow-Origin")}}

### Compatibility notes

- Internet Explorer 8 and 9 expose CORS via the `XDomainRequest` object, but have a full implementation in IE 10.
- While Firefox 3.5 introduced support for cross-site `XMLHttpRequests` and Web Fonts, certain requests were limited until later versions. Specifically, Firefox 7 introduced the ability for cross-site HTTP requests for WebGL Textures, and Firefox 9 added support for Images drawn on a canvas using `drawImage()`.

## See also

- [CORS errors](/de/docs/Web/HTTP/CORS/Errors)
- [Enable CORS: I want to add CORS support to my server](https://enable-cors.org/server.html)
- {{domxref("XMLHttpRequest")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Using CORS with All (Modern) Browsers](http://www.kendoui.com/blogs/teamblog/posts/11-10-03/using_cors_with_all_modern_browsers.aspx)
- [Using CORS - HTML5 Rocks](http://www.html5rocks.com/en/tutorials/cors/)

- [Code Samples Showing `XMLHttpRequest` and Cross-Origin Resource Sharing](https://arunranga.com/examples/access-control/)
- [Client-Side & Server-Side (Java) sample for Cross-Origin Resource Sharing (CORS)](https://github.com/jackblackevo/cors-jsonp-sample)
- [Cross-Origin Resource Sharing From a Server-Side Perspective (PHP, etc.)](/de/docs/Web/HTTP/Server-Side_Access_Control)
- [Stack Overflow answer with “how to” info for dealing with common problems](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141):

  - How to avoid the CORS preflight
  - How to use a CORS proxy to get around _“No Access-Control-Allow-Origin header”_
  - How to fix _“Access-Control-Allow-Origin header must not be the wildcard”_

{{HTTPSidebar}}
