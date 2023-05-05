---
title: HTTP headers
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}

HTTP headers allow the client and the server to pass additional information with the request or the response. A request header consists of its case-insensitive name followed by a colon '`:`', then by its value (without line breaks). Leading white space before the value is ignored.

Custom proprietary headers can be added using the 'X-' prefix, but this convention was deprecated in June 2012, because of the inconveniences it caused when non-standard fields became standard in [RFC 6648](https://tools.ietf.org/html/rfc6648); others are listed in an [IANA registry](http://www.iana.org/assignments/message-headers/perm-headers.html), whose original content was defined in [RFC 4229](http://tools.ietf.org/html/rfc4229). IANA also maintains a [registry of proposed new HTTP message headers](http://www.iana.org/assignments/message-headers/prov-headers.html).

Headers can be grouped according to their contexts:

- {{Glossary("General header")}}: Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
- {{Glossary("Request header")}}: Headers containing more information about the resource to be fetched or about the client itself.
- {{Glossary("Response header")}}: Headers with additional information about the response, like its location or about the server itself (name and version etc.).
- {{Glossary("Entity header")}}: Headers containing more information about the body of the entity, like its content length or its MIME-type.

Headers can also be grouped according to how proxies handle them:

- <a id="e2e">End-to-end headers</a>
  - : These headers must be transmitted to the final recipient of the message; that is, the server for a request or the client for a response. Intermediate proxies must retransmit end-to-end headers unmodified and caches must store them.
- <a id="hbh">Hop-by-hop headers</a>
  - : These headers are meaningful only for a single transport-level connection and must not be retransmitted by proxies or cached. Such headers are: {{ httpheader("Connection") }}, {{ httpheader("Keep-Alive") }}, {{ httpheader("Proxy-Authenticate") }}, {{ httpheader("Proxy-Authorization") }}, {{ httpheader("TE") }}, {{ httpheader("Trailer") }}, {{ httpheader("Transfer-Encoding") }} and {{ httpheader("Upgrade") }}. Note that only hop-by-hop headers may be set using the {{ httpheader("Connection") }} general header.

The following list summaries HTTP headers by their usage category. For an alphabetical list, see the navigation on the left side.

## Authentication

- {{HTTPHeader("WWW-Authenticate")}}
  - : Defines the authentication method that should be used to gain access to a resource.
- {{HTTPHeader("Authorization")}}
  - : Contains the credentials to authenticate a user agent with a server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Defines the authentication method that should be used to gain access to a resource behind a Proxy server.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Contains the credentials to authenticate a user agent with a proxy server.

## Caching

- {{HTTPHeader("Age")}}
  - : The time in seconds the object has been in a proxy cache.
- {{HTTPHeader("Cache-Control")}}
  - : Specifies directives for caching mechanisms in both, requests and responses.
- {{HTTPHeader("Expires")}}
  - : The date/time after which the response is considered stale.
- {{HTTPHeader("Pragma")}}
  - : Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.
- {{HTTPHeader("Warning")}}
  - : A general warning field containing information about possible problems.

## Client hints

- {{HTTPHeader("Accept-CH")}}
  - : ...
- {{HTTPHeader("Content-DPR")}}
  - : ...
- {{HTTPHeader("DPR")}}
  - : ...
- {{HTTPHeader("Downlink")}}
  - : ...
- {{HTTPHeader("Save-Data")}}
  - : ...
- {{HTTPHeader("Viewport-Width")}}
  - : ...
- {{HTTPHeader("Width")}}
  - : ...

## Conditionals

- {{HTTPHeader("Last-Modified")}}
  - : It is a validator, the last modification date of the resource, used to compare several versions of the same resource. It is less accurate than {{HTTPHeader("ETag")}}, but easier to calculate in some environments. Conditional requests using {{HTTPHeader("If-Modified-Since")}} and {{HTTPHeader("If-Unmodified-Since")}} use this value to change the behavior of the request.
- {{HTTPHeader("ETag")}}
  - : It is a validator, a unique string identifying the version of the resource. Conditional requests using {{HTTPHeader("If-Match")}} and {{HTTPHeader("If-None-Match")}} use this value to change the behavior of the request.
- {{HTTPHeader("If-Match")}}
  - : Makes the request conditional and applies the method only if the stored resource matches one of the given ETags.
- {{HTTPHeader("If-None-Match")}}
  - : Makes the request conditional and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one is already existing.
- {{HTTPHeader("If-Modified-Since")}}
  - : Makes the request conditional and expects the entity to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Makes the request conditional and expects the entity to be transmitted only if it has not been modified after the given date. This is used to ensure the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

## Connection management

- {{HTTPHeader("Connection")}}
  - : Controls whether or not the network connection stays open after the current transaction finishes.
- {{HTTPHeader("Keep-Alive")}}
  - : Controls how long a persistent connection should stay open.

## Content negotiation

- {{HTTPHeader("Accept")}}
  - : Informs the server about the types of data that can be sent back. It is MIME-type.
- {{HTTPHeader("Accept-Charset")}}
  - : Informs the server about which character set the client is able to understand.
- {{HTTPHeader("Accept-Encoding")}}
  - : Informs the server about the encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.
- {{HTTPHeader("Accept-Language")}}
  - : Informs the server about the language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language in a drop down list).

## Controls

- {{HTTPHeader("Expect")}}
  - : ...
- {{HTTPHeader("Max-Forwards")}}
  - : ...

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contains stored [HTTP cookies](/zh-TW/docs/Web/HTTP/Cookies) previously sent by the server with the {{HTTPHeader("Set-Cookie")}} header.
- {{HTTPHeader("Set-Cookie")}}
  - : Send cookies from the server to the user agent.
- {{HTTPHeader("Cookie2")}} {{Deprecated_Inline}}
  - : Used to contain an HTTP cookie, previously sent by the server with the {{HTTPHeader("Set-Cookie2")}} header, but has been obsoleted by the specification. Use {{HTTPHeader("Cookie")}} instead.
- {{HTTPHeader("Set-Cookie2")}} {{Deprecated_Inline}}
  - : Used to send cookies from the server to the user agent, but has been obsoleted by the specification. Use {{HTTPHeader("Set-Cookie")}} instead.

## CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indicates whether the response can be shared.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indicates whether or not the response to the request can be exposed when the credentials flag is true.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Specifies the method or methods allowed when accessing the resource in response to a preflight request.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indicates which headers can be exposed as part of the response by listing their names.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indicates how long the results of a preflight request can be cached.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Used when issuing a preflight request to let the server know which [HTTP method](/zh-TW/docs/Web/HTTP/Methods) will be used when the actual request is made.
- {{HTTPHeader("Origin")}}
  - : Indicates where a fetch originates from.

## Do Not Track

- {{HTTPHeader("DNT")}}
  - : Used for expressing the user's tracking preference.
- {{HTTPHeader("Tk")}}
  - : Indicates the tracking status that applied to the corresponding request.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Is a response header if the resource transmitted should be displayed inline (default behavior when the header is not present), or it should be handled like a download and the browser should present a 'Save As' window.

## Message body information

- {{HTTPHeader("Content-Length")}}
  - : indicates the size of the entity-body, in decimal number of octets, sent to the recipient.
- {{HTTPHeader("Content-Type")}}
  - : Indicates the media type of the resource.
- {{HTTPHeader("Content-Encoding")}}
  - : Used to specify the compression algorithm.
- {{HTTPHeader("Content-Language")}}
  - : Describes the language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.
- {{HTTPHeader("Content-Location")}}
  - : Indicates an alternate location for the returned data.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifies the original host requested that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("Via")}}
  - : Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## Redirects

- {{HTTPHeader("Location")}}
  - : Indicates the URL to redirect a page to.

## Request context

- {{HTTPHeader("From")}}
  - : Contains an Internet email address for a human user who controls the requesting user agent.
- {{HTTPHeader("Host")}}
  - : Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
- {{HTTPHeader("Referer")}}
  - : The address of the previous web page from which a link to the currently requested page was followed.
- {{HTTPHeader("Referrer-Policy")}}
  - : Governs which referrer information sent in the {{HTTPHeader("Referer")}} header should be included with requests made.
- {{HTTPHeader("User-Agent")}}
  - : Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the [Firefox user agent string reference](/zh-TW/docs/Web/HTTP/Headers/User-Agent/Firefox).

## Response context

- {{HTTPHeader("Allow")}}
  - : Lists the set of HTTP request methods support by a resource.
- {{HTTPHeader("Server")}}
  - : Contains information about the software used by the origin server to handle the request.

## Range requests

- {{HTTPHeader("Accept-Ranges")}}
  - : Indicates if the server supports range requests and if so, in which unit the range can be expressed.
- {{HTTPHeader("Range")}}
  - : Indicates the part of a document that the server should return.
- {{HTTPHeader("If-Range")}}
  - : Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.
- {{HTTPHeader("Content-Range")}}
  - : Indicates where in a full body message a partial message belongs.

## Security

- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Controls resources the user agent is allowed to load for a given page.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.
- {{HTTPHeader("Public-Key-Pins")}} ({{Glossary("HPKP")}})
  - : Associates a specific cryptographic public key with a certain web server to decrease the risk of {{Glossary("MITM")}} attacks with forged certificates.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Force communication using HTTPS instead of HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} directive.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Disables MIME sniffing and forces browser to use the type given in {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Indicates whether or not a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}} or {{HTMLElement("object")}}
- {{HTTPHeader("X-XSS-Protection")}}
  - : Enables cross-site scripting filtering.

## Server-sent events

- {{HTTPHeader("Ping-From")}}
  - : ...
- {{HTTPHeader("Ping-To")}}
  - : ...
- {{HTTPHeader("Last-Event-ID")}}
  - : ...

## Transfer coding

- {{HTTPHeader("Transfer-Encoding")}}
  - : Specifies the the form of encoding used to safely transfer the entity to the user.
- {{HTTPHeader("TE")}}
  - : Specifies the transfer encodings the user agent is willing to accept.
- {{HTTPHeader("Trailer")}}
  - : Allows the sender to include additional fields at the end of chunked message.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : ...
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : ...

## Other

- {{HTTPHeader("Date")}}
  - : Contains the date and time at which the message was originated.
- {{HTTPHeader("Large-Allocation")}}
  - : Tells the browser that the page being loaded is going to want to perform a large allocation.
- {{HTTPHeader("Link")}}
  - : ...
- {{HTTPHeader("Retry-After")}}
  - : Indicates how long the user agent should wait before making a follow-up request.
- {{HTTPHeader("Upgrade")}}
  - : This is a Proposed Internet Standard. To view a comprehensive list of all Official and Proposed Internet Standards with detailed information about each, [visit this Internet Standards reference](https://www.rfc-editor.org/standards), which is updated daily. The relevant RFC document for the [Upgrade header field standard is RFC 7230, section 6.7](https://tools.ietf.org/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Niether party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field [please see section 6.1 of the aforementioned RFC](https://tools.ietf.org/html/rfc7230#section-6.1).
- {{HTTPHeader("Vary")}}
  - : Determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.
- {{HTTPHeader("X-Requested-With")}}
  - : ...
- {{HTTPHeader("X-UA-Compatible")}}
  - : ...

## See also

- [Wikipedia page on List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html)
