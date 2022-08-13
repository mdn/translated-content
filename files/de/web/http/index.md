---
title: HTTP
slug: Web/HTTP
tags:
  - HTTP
  - NeedsTranslation
  - TopicStub
translation_of: Web/HTTP
---
{{HTTPSidebar}}

**_Das Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschicht](https://de.wikipedia.org/wiki/OSI-Modell#Schicht_7_.E2.80.93_Anwendungsschicht_.28Application_Layer.29)-Protokoll zum Transportieren von [Hypermedia](https://de.wikipedia.org/wiki/Hypermedia) Dokumenten, wie zum Beispiel [HTML](/de/docs/Web/HTML). Hauptsächlich wird es zur Kommunikation zwischen Webservern und Webbrowsern verwendet, jedoch könnte es theoretisch auch für andere Zwecke benutzt werden. Es folgt einem klassischen [Client-Server-Modell](https://de.wikipedia.org/wiki/Client-Server-Modell), mit einem Client der die Verbindung eröffnet, indem er eine Anfrage macht und dann wartet, bis es eine Antwort erhält. Außerdem ist es ein [zustandsloses](https://de.wikipedia.org/wiki/Zustandslosigkeit) [Protokoll](https://de.wikipedia.org/wiki/Netzwerkprotokoll), was bedeutet, dass der Server keine Daten (Zustände) zwischen zwei Anfragen behält.

Obwohl oft auf einer TCP/IP Schicht aufgebaut, könnte es auch auf jede andere verlässliche, verbindungsorientierte [Transportschicht](https://de.wikipedia.org/wiki/OSI-Modell#Schicht_4_.E2.80.93_Transportschicht) aufbauen, sofern sie Nachrichten nicht leise verliert, wie es zum Beispiel bei [UDP](https://de.wikipedia.org/wiki/User_Datagram_Protocol) der Fall ist.

## Dokumentation

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : HTTP-Nachrichten-Header werden verwendet, um genau zu beschreiben, welche Ressource abgeholt wird oder das Verhalten des Servers oder des Clients. Benutzerdefinierte Header können mit dem ' X-' Präfix hinzugefügt werden; Andere sind in einer IANA-Registry aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://tools.ietf.org/html/rfc4229) definiert wurde. IANA unterhält auch eine [Registry der vorgeschlagenen neuen HTTP-Nachrichten-Header](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers).
- [HTTP-Cookies](/de/Web_Development/HTTP_cookies)
  - : Wie Cookies funktionieren, definiert der RFC 6265. Wenn ein Server eine HTTP-Anfrage erhält, kann er einen `Set-Cookie` Header mit der Antwort senden. Danach wird der Cookie-Wert zusammen mit jeder Anfrage an den gleichen Server in Form eines `Cookie` HTTP-Headers gesendet. Zusätzlich kann eine Verfallsverzögerung angegeben werden. Einschränkungen einer bestimmten Domäne und eines bestimmten Pfades können ebenfalls festgelegt werden.

- [Basic access authentication](/de/docs/HTTP/Basic_access_authentication)
  - : Im Kontext einer HTTP-Transaktion ist **basic access authentication** eine Methode für einen [HTTP user agent](/de/docs/Web/API/window.navigator.userAgent) einen Benutzernamen und ein Kennwort beim Stellen einer Anfrage zu übermitteln.
- [HTTP pipelining FAQ](/de/HTTP_Pipelining_FAQ)
  - : HTTP/1.1 Pipelining FAQ
- [HTTP access control (CORS)](/de/docs/HTTP/Access_control_CORS)
  - : **Cross-site HTTP requests** sind [HTTP](/de/docs/HTTP)-Anfragen nach Ressourcen auf einer **anderen Domain** als der Domain, auf der die Ressource liegt, die die Anfrage initiiert. Beispielsweise initiiert eine Ressource, wie eine Web-Seite, die von Domain A (`http://domaina.example`) geladen wird, eine Anfrage durch Verwendung des `img`-Elements (`http://domainb.foo/image.jpg`) nach einem Bild, das auf Domain B (http\://domainb.foo) liegt. Dies tritt heutzutage sehr häufig auf — Seiten laden eine Vielzahl an Ressourcen mittels Cross-site-Verfahren, einschließlich CSS-Stylesheets, Bildern, Skripten und anderen Ressourcen.
- [Steuern des DNS prefetchings](/de/Controlling_DNS_prefetching)
  - : Firefox 3.5 führt **DNS prefetching** durch. Dies ist eine Funktion durch die Firefox gezielt Domain-Namensauflösung betreibt, sowohl für Verknüpfungen, denen der Benutzer möglicherweise folgt, als auch für URLs von Objekten auf die im Dokument Bezug genommen wird, einschließlich Bildern, CSS, JavaScript und so weiter. Dieses Vorausladen wird im Hintergrund durchgeführt, so dass es wahrscheinlich ist, dass der DNS-Name bereits aufgelöst wurde, wenn er benötigt wird. Dies reduziert die Verzögerung wenn ein Benutzer tatsächlich eine Verknüpfung anklickt.
- [HTTP Antwort-Codes](/de/docs/HTTP/HTTP_response_codes)
  - : HTTP Antwort-Codes zeigen an, ob eine bestimmte [HTTP](/de/docs/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen zusammengefasst: Informationsantworten, Erfolgsantworten, Weiterleitungen, Client-Fehler und Server-Fehler.

## Die kurze Geschichte zu HTTP

Since its original conception, as a protocol with one single method (GET) and returning only HTML pages, the HTTP protocol went through several revisions. The first documented version was HTTP/0.9 in 1991, corresponding to the original version. Very simple, it has a rudimentary search capability via the HTML {{ HTMLElement("isindex") }} element and an extension of the URL using the '`?`' character.

Then, in 1992, a version was published that became, with some minor changes, HTTP/1.0 (finalized in [RFC 1945](https://tools.ietf.org/html/rfc1945) in May 1996). One major improvement over the previous version was the ability to transmit files of different types, like images, videos, scripts, CSS documents, and so on, instead of only HTML files: this is achieved by using [MIME types](https://en.wikipedia.org/wiki/Mime_types) in conjunction with the `Content-Type:` header.

In 1995, the [IETF](https://www.ietf.org/) began developing a new version of HTTP, which would become HTTP/1.1. It quickly spread into wide usage, and it was officially standardized in 1997 in [RFC 2068](https://tools.ietf.org/html/rfc2068), with minor fixes in [RFC 2616](https://tools.ietf.org/html/rfc2616) two years later.

HTTP/1.1 brought the ability to reuse established connections for subsequent requests, greatly improving the performance of the protocol by lowering the latency between them; this is especially useful with complex HTML documents that need to fetch several subsequent files, like images or style sheets. It also brought the `Host:` header, which allows a single server, listening on a specific port, to receive requests for several websites; this paved the way for colocating numerous websites on one single server, greatly reducing the cost of hosting.

Since then, the HTTP protocol evolved by adding new [headers](/de/HTTP/Headers), defining new behaviors without the need to fundamentally change the protocol. Unknown headers are simply ignored by servers or clients.

HTTP/1.1 is currently being revised by the [IETF HTTPbis Working Group](https://tools.ietf.org/wg/httpbis/).

## Eine HTTP-Sitzung

Because HTTP is a client-server protocol, an HTTP session consists of three phases:

1. The client establishes a TCP connection (or the appropriate connection if the transport layer is not TCP).
2. The client sends its request and then waits for the answer.
3. The server processes the request and sends back its answer, containing a status code and the appropriate data.

Starting with HTTP/1.1, the connection is no longer closed after the third phase, as the client is allowed to issue another request at this point: the second and third phases can therefore be done several times.

### Herstellen einer Verbindung

Because HTTP is a client-server protocol, it always is the client that establishes the connection. Opening a connection in HTTP really is establishing a connection in the underlying transport layer, usually TCP.

With TCP, the default port for an HTTP server on a computer is port 80, though others are often used, like 8000 or 8080. The URL of a page to fetch contains both the domain name and the port number, though the latter can be omitted if it is 80.

> **Note:** The client-server model does not allow the server to send data to the client without an explicit request of for it. To work around this problem, web developers use several techniques: pinging the server periodically via the [XMLHTTPRequest](/de/DOM/XMLHttpRequest) Javascript object, using the HTML [WebSockets API](/de/WebSockets), or similar protocols.

### Senden einer Client-Anfrage

Once the connection is established, the user-agent can send its request. (A user-agent is typically a web browser, but need not be.) A client request consists of text directives, separated by CRLF (carriage return, followed by line feed), divided in three blocks:

1. The first line contains a request method followed by its parameters:

    - the path of the document, i.e., an absolute URL without the protocol and the domain name
    - the HTTP protocol version used

2. The subsequent lines each represent a specific HTTP header, giving the server some information about what kind of data is appropriate (e.g., what language, what MIME types) or some data altering its behavior (e.g., not sending an answer if it is already cached). These HTTP headers form a block that ends with an empty line.
3. The final block is the optional data block, which contains further data and is mainly used by the POST method.

#### Beispiele von Anfragen

- Fetching the root page of developer.mozilla.org, i.e. [http://developer.mozilla.org/](/), and telling the server that the user-agent would prefer the page in French, if possible:

      GET / HTTP/1.1
      Host: developer.mozilla.org
      Accept-Language: fr

  Note the final empty line, separating the data block from the headers block. As there is no `Content-Length:` HTTP header, the data block is empty and the server can process the request as soon as it receives the empty line marking the end of the headers.

- Sending the result of a form:

      POST /contact_form.php HTTP/1.1
      Host: developer.mozilla.org
      Content-Length: 64
      Content-Type: application/x-www-form-urlencoded

      name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue

### Die Struktur einer Server-Antwort

After the connected agent has sent its request, the web server handles it, and finally sends a response back. Similarly to a client request, a server response is formed of text directives, separated by CRLF, though divided in three different blocks:

1. The first line, the _status line_, consists of an acknowledgment of the HTTP version used followed by a status request (and its meaning in human-readable text).
2. The subsequent lines each represent a specific HTTP header giving the client some information about the data sent (e.g., type, data size, compression algorithm used, hints about caching). Similarly to the block of HTTP headers for a client request, these HTTP headers form a block that ends with an empty line.
3. The final block is the data block, which contains the data (if any).

#### Beispiele von Antworten

- Successful reception of a web page:

      HTTP/1.1 200 OK
      Date: Sat, 09 Oct 2010 14:28:02 GMT
      Server: Apache
      Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
      ETag: "51142bc1-7449-479b075b2891b"
      Accept-Ranges: bytes
      Content-Length: 29769
      Content-Type: text/html

      <!DOCTYPE html... (here comes the 29769 bytes of the requested web page)

- Notification that the requested resource has been permanently moved:

      HTTP/1.1 301 Moved Permanently
      Server: Apache/2.2.3 (Red Hat)
      Content-Type: text/html; charset=iso-8859-1
      Date: Sat, 09 Oct 2010 14:30:24 GMT
      Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
      Keep-Alive: timeout=15, max=98
      Accept-Ranges: bytes
      Via: Moz-Cache-zlb05
      Connection: Keep-Alive
      X-Cache-Info: caching
      X-Cache-Info: caching
      Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

      <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
      <html><head>
      <title>301 Moved Permanently</title>
      </head><body>
      <h1>Moved Permanently</h1>
      <p>The document has moved <a href="https://developer.mozilla.org/">here</a>.</p>
      <hr>
      <address>Apache/2.2.3 (Red Hat) Server at developer.mozilla.org Port 80</address>
      </body></html>

- Notification that the requested resource doesn't exist:

      HTTP/1.1 404 Not Found
      Date: Sat, 09 Oct 2010 14:33:02 GMT
      Server: Apache
      Last-Modified: Tue, 01 May 2007 14:24:39 GMT
      ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
      Accept-Ranges: bytes
      Content-Length: 10732
      Content-Type: text/html

      <!DOCTYPE html... (contains a site-customized page helping the user to find the missing resource)

### Persistente Verbindungen

Persistent connections were introduced in HTTP/1.1. They allow transmitting several requests on the same TCP connection (or on the specific connected transport layer if the HTTP is not built upon TCP/IP). This has several advantages:

- Because the connection can be reused, requests can be [pipelined](/de/HTTP_Pipelining_FAQ) to save part of the connection latency.
- By opening and closing fewer TCP connections, CPU time is saved.
- Network congestion is diminished by lowering the total amount of TCP packets (fewer opening and closing TCP packets).
- The TCP stack has more time to detect network congestion and to adapt its sending and receiving windows.
- HTTP is more adaptive: the cost for trying a feature is considerably lowered as an error response no longer leads to closing the connection.

## HTTP-Antfragemethoden

The request method indicates the action to be performed by the server. The HTTP/1.1 standard defines seven methods and allows other methods to be added later. Over the years, a few ones have been added in standards like [WebDAV](/de/WebDAV). The [IETF HTTPbis Working Group](https://tools.ietf.org/wg/httpbis/) is currently working on an IANA registry to list them all. If a server receives a request method that it doesn't know, it must return a [`501 Not implemented`](/de/HTTP/HTTP_response_codes#501) response; if it knows the method but is configured not to answer it, it must return a [`405 Method not allowed`](/de/HTTP/HTTP_response_codes#501) response. Two methods are required to be supported: HEAD and GET; all others are optional.

Two specific semantics are defined in the standard and are crucial for web developers: the _safety_ property and the _idempotent_ property.

### Sichere Methoden

A _safe method_ is a method that doesn't have any side-effects on the server. In other words, this property means that the method must be used only for _retrieval_ of data. The safe HTTP methods defined in HTTP/1.1 are:

- GET, used to retrieve information identified by the request URI. This information may be generated on the fly or the GET may be conditional if any of the {{ httpheader("If-Modified-Since") }}, {{ httpheader("If-Unmodified-Since") }}, {{ httpheader("If-Match") }}, {{ httpheader("If-None-Match") }} or {{ httpheader("If-Range") }} HTTP headers are set. In that latter case the information is only sent back if all the conditions are fulfilled.
- HEAD, which is identical to GET but without the message body sent.

> **Note:** **Notes:\*** Any safe method is also _idempotent_.
>
> - Not having any side-effects means, for the GET method, that it **must** not be used to trigger an action outside the server, like an order in an e-commerce site. If a side-effect is wanted, a non-_idempotent_ method should be used, like POST.
> - When a page is generated on the fly by a script, the script engine may calculate the page as if it was requested by a GET and then strip the data block. This does not cause problem as long as the GET as implemented in the script is _safe_, but if it has any side-effects (like triggering an order on an e-commerce site), the HEAD method will trigger it too. It is up to the web developer to ensure that both the GET and HEAD method are safely implemented.

### Idempotente Methoden

An _idempotent method_ is a method such that the side-effects on the server of several identical requests with the method are the same as the side-effects of one single request.

- HEAD and GET, like any safe method, are also idempotent, as a safe method doesn't have side-effects on the server.
- PUT is the way to upload a new resource on the server. If the resource already exists and is different, it is replaced; if it doesn't exist, it is created.
- DELETE removes a resource from the server.

### Andere Methoden

- POST is the way to trigger an action on the server. It has side-effects and can be used to trigger an order, to modify a database, to post a message in a forum, and so on.
- OPTIONS is a request for communication options available on the chain between the client and the server (through eventual proxies); this method is typically sent before any [preflighted cross-origin request](/de/HTTP_access_control#Preflighted_requests), in order to know whether it is safe to do it.

  > **Note:** [Preflighted cross-origin requests](/de/HTTP_access_control#Preflighted_requests) cannot be done on servers which don't allow or support the OPTIONS method.

- TRACE is a kind of ping between the client and the server (through eventual proxies).

Many more methods, such as PROPFIND or PATCH are defined in other standards-track RFCs of the IETF, like WebDAV.

The CONNECT method is defined in [RFC 2817](https://tools.ietf.org/html/rfc2817).

### HTTP-Anfragemethoden in HTML-Formularen

In HTML, different HTTP request methods can be specified in the {{ htmlattrxref("method", "form") }} attribute of the {{ HTMLElement("form") }} element, but also to the {{ htmlattrxref("formmethod", "input") }} of the {{ HTMLElement("input") }} and {{ HTMLElement("button") }} elements. But not all HTTP methods can be used with these attributes; only GET and POST method are allowed by the HTML specification. See [this StackExchange answer why other HTTP request methods are not allowed by the HTML specification](https://softwareengineering.stackexchange.com/a/211790).

> **Note:** The choice of a GET or POST method for HTML forms is not neutral. Because the GET method is a [safe method](/de/HTTP#Safe_methods), it should be used only in cases where no side-effect is expected; e.g., it shouldn't be used to transmit an order, as this order is a side-effect. In all cases where such side-effects are expected, the POST method should be used.

## HTTP-Antwort-Codes

When answering a client request, the server sends back a three-digit number indicating whether the request was successfully processed. These codes can be grouped in five categories:

- _Informational responses_ (of the form `1xx`) are provisional responses. Most of the time neither the end user, nor the web developer or webmaster should have to bother with these. The most common is the [`100 Continue`](/de/HTTP/HTTP_response_codes#100) response, indicating that the client should continue to send its request.

  > **Note:** No information response codes were defined in the HTTP/1.0, and therefore they must not be sent back when this version of the protocol is used.

- _Success responses_ (of the form `2xx`) are for successfully processed requests. The [`200 OK`](/de/HTTP/HTTP_response_codes#200) response is by far the most common of these responses, but the [`206 Partial Content`](/de/HTTP/HTTP_response_codes#206) is also often seen when fetching a file or some media data like video or audio.
- _Redirection responses_ (of the form `3xx`) indicate that the resource that the client requested has moved and the server is not able to serve it directly. Most of these responses contain some location information telling where to find the requested resource; user-agents often then retrieve it without further user interaction. The most common responses of this type are [`301 Moved Permanently`](/de/HTTP/HTTP_response_codes#301), indicating that the URI given is no longer valid and has been moved to another place, and [`302 Found`](/de/HTTP/HTTP_response_codes#302) which indicates that the resource has been _temporarily_ moved to another place.

  > **Note:** For webmasters, it is recommended to set up a [`301 Moved Permanently`](/de/HTTP/HTTP_response_codes#301) redirection when moving pages to another URI, during a site reorganization for example. That allows users following links to still reach the resource and it also teaches search engines and other services the new location of the resource, so that they can transfer their metadata to it. It is also important to add adequate cache headers to the [`301 Moved Permanently`](/de/HTTP/HTTP_response_codes#301) response so that this information is cached by the client and prevents it from making unnecessary requests to the original URI prior to fetching the resource itself.

- _Client error responses_ (of the form `4xx`) indicate that the request sent by the client is either invalid, incomplete, or doesn't have enough rights to be performed. The most common such response is [`404 Not Found`](/de/HTTP/HTTP_response_codes#404) which is sent back when the URI requested doesn't exist, but a few others are often presented to the end user, like [`400 Bad Request`](/de/HTTP/HTTP_response_codes#400) sent when the request isn't a valid HTTP request (as this shouldn't happen but may indicate a bug into the user agent or, less likely, the server) or [`403 Forbidden`](/de/HTTP/HTTP_response_codes#403), sent when the client request a resource that does exist but isn't allowed to be transmitted (like a directory content).
- _Server error responses_ (of the form `5xx`) indicate that the server had a problem handling the valid client request. The two most common such responses are [`500 Internal Server Error`](/de/HTTP/HTTP_response_codes#500), a generic error code indicating a bug in the server or [`503 Service Unavailable`](/de/HTTP/HTTP_response_codes#503) indicating that the server cannot process the request due to a temporary problem, like a disabled service for maintenance purposes or the non-availability of a database.

A web developer shouldn't encounter many other response codes, but people building requests using the [`XMLHTTPRequest`](/de/nsIXMLHttpRequest) function may hit [less usual response codes](/de/HTTP/HTTP_response_codes).

### Mehr über Weiterleitungsantworten

Starting in Gecko 9.0 {{ geckoRelease("9.0") }}, redirections (such as 301 and 307) that specify a `javascript:` URI are no longer performed. Instead, a bad connection error is presented. This helps avoid cross-site scripting attacks. See {{ bug(255119) }} if you want more details.

## HTTP-Headers

HTTP-Kopfdaten ermöglichen the client and the server to pass additional information with the request or the response. A request header consists of its case-insensitive name followed by a colon ':', then by its value (without CRLF in it). Leading white space before the value is ignored.

Headers are grouped according the context in which they may appear:

- Allgemeine Kopfdaten
  - : These headers apply to both requests and responses but are unrelated to the data eventually transmitted in the body. They therefore apply only to the message being transmitted. There are only a few of them and new ones cannot been added without increasing the version number of the HTTP protocol. The exhaustive list for HTTP/1.1 is {{ httpheader("Cache-Control") }}, {{ httpheader("Connection") }}, {{ httpheader("Date") }}, {{ httpheader("Pragma") }}, {{ httpheader("Trailer") }}, {{ httpheader("Transfer-Encoding") }}, {{ httpheader("Upgrade") }}, {{ httpheader("Via") }} and {{ httpheader("Warning") }}.
- Anfragekopfdaten
  - : These headers give more precise information about the resource to be fetched or about the client itself. Among them one find [cache-related headers](/de/HTTP_Caching_FAQ), transforming a GET method in a conditional GET, like {{ httpheader("If-Modified-Since") }}, user-preference information like {{ httpheader("Accept-Language") }} or {{ httpheader("Accept-Charset") }} or plain client information like {{ httpheader("User-Agent") }}. New request headers cannot officially be added without increasing the version number of the HTTP protocol. But, it is common for new request headers to be added if both the server and the client agree on their meaning. In that case, a client should not assume that they will be handled adequately by the server; unknown request headers are handled as _entity headers_.
- Antwortkopfdaten
  - : These headers give more information about the resource sent back, like its real location ({{ httpheader("Location") }}) or about the server itself, like its name and version ({{ httpheader("Server") }}). New response headers cannot be added without increasing the version number of the HTTP protocol. But, it is common for new response headers to be added if both the server and the client agree on their meaning. In that case, a server should not assume that they will be handled adequately by the client ; unknown response headers are handled as _entity headers_.
- Entitätskopfdaten
  - : Diese Kopfdaten beinhalten mehr Informationen über den Körper der Entität, wie ihre Länge ({{ httpheader("Content-Length") }}), eine Identifikationsprüfsumme ({{ httpheader("Content-MD5") }}) oder ihren MIME-Typ ({{ httpheader("Content-Type") }}). Neue Entitätskopfdaten können ohne Erhöhung der Versionsnummer des HTTP-Protokolls hinzugefügt werden.

Kopfdaten können auch nach ihrer Handhabung durch puffernde und nicht-puffernde Proxys gruppiert werden:

- Ende-zu-Ende-Kopfdaten
  - : These headers must be transmitted to the final recipient of the message; that is, the server for a request message or the client for a response message. Such a header means that intermediate proxies must retransmit it unmodified and also that caches must store it.
- Sprung-zu-Sprung-Kopfdaten
  - : Diese Kopfdaten sind nur für eine einzelne Verbindung auf Transportebene von Bedeutung und dürfen von Proxys nicht weitergeleitet oder gepuffert werden. Solche Kopfdaten sind: {{ httpheader("Connection") }}, {{ httpheader("Keep-Alive") }}, {{ httpheader("Proxy-Authenticate") }}, {{ httpheader("Proxy-Authorization") }}, {{ httpheader("TE") }}, {{ httpheader("Trailers") }}, {{ httpheader("Transfer-Encoding") }} und {{ httpheader("Upgrade") }}. Zu Beachten ist, dass nur Sprung-zu-Sprung-Kopfdaten {{ httpheader("Connection") }} bei der Verwendung der Allgemeinen Kopfdaten gesetzt werden dürfen.

In order to learn about the specific semantic of each header, see its entry in the [comprehensive list of HTTP headers](/de/HTTP/Headers).

### Nützliche Anfragekopfdaten

Among the numerous [HTTP request headers](/de/HTTP/Headers), several are especially useful when set correctly. If you are building your own requests, by using [`XMLHTTPRequest`](/de/DOM/XMLHttpRequest) or when writing an extension and sending [custom HTTP requests via XPCOM](/de/Setting_HTTP_request_headers), then it is important to ensure the presence of headers that are often set by browsers based on the preferences of the user.

- Steuern der Ressourcensprache
  - : Most user-agents, like Firefox, allow the user to set a preference for the language for receiving a resource. The browser translate this into an {{ httpheader("Accept-Language") }} header. It is good practice for web developers, when building specific HTTP requests, to include such a header too.
- Verwenden des bedingten GET
  - : Caching is a major tool to accelerate the display of web pages. Even when parts of a webpage are refreshed via an [`XMLHTTPRequest`](/de/DOM/XMLHttpRequest):, it is a good idea to use the {{ httpheader("If-Modified-Since") }} header (and other similar ones) in order to fetch the new content only if it has changed. This approach lowers the burden on the network.

### Nützliche Antwortkopfdaten

The configuration of a web server is a critical part to ensure good performance and optimal security of a web site. Among the [numerous HTTP response headers](/de/HTTP/Headers), several are of specific importance and should be configured on the server

#### Restricting framing

Several cross-site scripting (XSS) attacks take advantage of the ability to put third-party content inside an {{ HTMLElement("frame") }} or {{ HTMLElement("iframe") }}. In order to mitigate that risk, modern browsers have introduced the [`CSP frame-ancestors directive`](/de/Security/CSP/CSP_policy_directives#frame-ancestors). By setting it with the value `'none'`, it prevents the browser from displaying this resource inside of a frame. Using it on critical resources (like those containing a formularies or critical information) will reduce the risk caused by XSS attacks. Note that this specific HTTP response header is not the only way to mitigate XSS risks; other techniques, like setting some [Content Security Policies](/de/Security/CSP/Introducing_Content_Security_Policy), may be helpful too.

#### Komprimierung

Minimizing the amount of data transferred accelerates the display of a web page. Though most techniques, like [CSS Sprites](/de/CSS/CSS_Sprites), should be applied on the site itself, compression of data must be set at the web server level. If set, resources requested by the client with an {{ httpheader("Accept-Encoding") }} request header are compressed using the appropriate method and sent back with a {{ httpheader("Content-Encoding") }} response header. Setting these in Apache 2 servers is done by using the [mod_deflate module](https://httpd.apache.org/docs/2.4/mod/mod_deflate.html).

> **Note:** Be aware that not all data formats can be efficiently compressed. Already-compressed media data, like JPEG images or most audio and video formats, do not shrink using another pass of compression. In fact, they often become larger due to the overhead of the compression method. It is important not to try to compress these resource types any further; there is no advantage in size and the compression/decompression mechanism is resource-intensive.

#### Steruern des Puffers

[HTTP Caching](/de/HTTP_Caching_FAQ) is a technique that prevents the same resource from being fetched several times if it hasn't change. Configuring the server with the correct response headers allows the user-agent to adequately cache the data. In order to do that, be sure that:

- Any static resource provides an {{ httpheader("Expires") }} response header that is set to far in the future. That way, the resource may stay in the cache until the user-agent flushes it for its own reasons (like reaching its cache size limit).

  > **Note:**On Apache, use the ExpiresDefault directive in your .htaccess to define a relative expires: `ExpiresDefault "access plus 1 month"`.

- Any dynamic resource provides a {{ httpheader("Cache-control") }} response header. Theoretically, any HTTP request done through a [safe method](/de/HTTP#Safe_Methods) (GET or HEAD) or even through a solely [idempotent one](/de/HTTP#Idempotent_Methods) (DELETE, PUT) may be cached; but in practice careful study is needed to determine if the caching of the response may lead to inappropriate side-effects.

#### Setzen der richtigen MIME-Typen

The MIME type is the mechanism to tell the client the kind of document transmitted: the extension of a file name has no meaning on the web. It is therefore important that the server is correctly set up so that the correct MIME type is transmitted with each document: user-agents often use this MIME-type to determine what default action to do when a resource is fetched.

> **Note:\*** On Apache, one can match file extensions with a given MIME type in the .htaccess using the `AddType` type directive like `AddType image/jpeg jpg.`
>
> - Most web servers send unknown-type resources using the default `application/octet-stream` MIME type; for security reasons, most browsers, like Firefox, do not allow setting a custom default action for such resources and force the user to store it to disk in order to use it. Some common cases of often incorrectly configured servers happens for the following file types:
>
>   - Rar-encoded files. The ideal would be to be able to set the real type of the encoded files; this often is not possible (as it may not be known to the server and these files may contains several resource of different types). In that case, configure the server to send the `application/x-rar-compressed`MIME type or some users won't be able to define a useful default action for them.
>   - Audio and video files. Only resources with the proper MIME Type will be recognized and played, using a {{ HTMLElement("video") }} or {{ HTMLElement("audio") }} elements. Be sure to [use the correct MIME type for audio and video resources](/de/Media_formats_supported_by_the_audio_and_video_elements).
>   - Proprietary file types. Pay special attention when serving a proprietary file type. Be sure not to forget to add an x-prefixed type for it; otherwise, special handling won't be possible. This is especially true with resources using the [Keyhole Markup Language](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), which should be served as `application/vnd.google-earth.kml+xml`for an optimal user experience.

## Siehe auch

- [Controlling DNS prefetching](/de/Controlling_DNS_prefetching)
- The [HTTP pipelining FAQ](/de/HTTP_Pipelining_FAQ)
- [HTTP cookies](/de/Web_Development/HTTP_cookies)
- [HTTP Headers](/de/docs/HTTP/Headers)
- [Basic access authentication](/de/docs/HTTP/Basic_access_authentication)
- [HTTP access control (CORS)](/de/docs/HTTP/Access_control_CORS)
