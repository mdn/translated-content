---
title: Basics of HTTP
slug: Web/HTTP/Basics_of_HTTP
---

{{HTTPSidebar}}

HTTP is a pretty extensible protocol. It relies on a few basic concepts like the notion of resources and URIs, a simple structure of messages, and a client-server structure for the communication flow. On top of these basic concepts, numerous extensions have appeared over the years, adding new functionality and new semantics by creating new HTTP methods or headers.

## Articles

- [Overview of HTTP](/zh-TW/docs/Web/HTTP/Overview)
  - : Describes what HTTP is and its role in the Web architecture, its position in the protocol stack.
- [Evolution of HTTP](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP was created in the early 1990s and has been extended several times. This article goes through its history and describes HTTP/0.9, HTTP/1.0, HTTP/1.1, and the modern HTTP/2 as well as minor novelties introduced over the years.
- [Negotiating an HTTP version](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Negotiating_an_HTTP_version)
  - : Explains how a client and a server can negotiate a specific HTTP version and eventually upgrade the protocol version used.
- [Resources and URIs](/zh-TW/docs/Web/HTTP/Resources_and_URIs)
  - : A brief introduction of the notion of resources, identifiers, and locations on the Web.
- [Identifying resources on the Web](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : Describes how Web resources are referenced and how to locate them.
- [Data URIs](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : A specific kind of URIs that directly embeds the resource it represents. Data URIs are very convenient, but have some caveats.
- [Resource URLs](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Resource_URLs) {{Non-standard_Inline}}
  - : Resource URLs, URLs prefixed with the `resource:` scheme, are used by Firefox and Firefox browser extensions to load resources internally, but some of the information is available to sites the browser connects to as well.
- Separating identity and location of a resource: the Alt-Svc HTTP header
  - : Most of the time identity and location of a Web resource are shared, this can be changed with the {{HTTPHeader("Alt-Svc")}} header.
- [MIME types](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Since HTTP/1.0, different types of content can be transmitted. This article explains how this is done using the {{HTTPHeader("Content-Type")}} header and the MIME standard.
- [Choosing between www and non-www URLs](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : Advice on using a www-prefixed domain or not, this article explains the consequences of the choice as well as how to make it.
- [Flow of an HTTP session](/zh-TW/docs/Web/HTTP/Flow_of_an_HTTP_session)
  - : This fundamental article describes a typical HTTP session: what happens under the hood when you click on a link in your browser…
- [HTTP Messages](/zh-TW/docs/Web/HTTP/Messages)
  - : HTTP Messages transmitted during requests or responses have a very clear structure; this introductory article describes this structure, its purpose and its possibilities.
- [Frame and message structure in HTTP/2](</zh-TW/docs/Web/HTTP/Frame and message structure in HTTP_2>)
  - : HTTP/2 encapsulates and represents HTTP/1.x messages in a binary frame. This article explains the frame structure, its purpose and the way it is encoded.
- [Connection management in HTTP/1.x](/zh-TW/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 was the first version of HTTP to support persistent connection and pipelining. This article explains these two concepts.
- [Connection management in HTTP/2](/zh-TW/docs/Web/HTTP/Connection_management_in_HTTP_2)
  - : HTTP/2 completely revisited how connections are created and maintained: this article explains how HTTP frames allow multiplexing and solve the 'head-of-line' blocking problem of former HTTP versions.
- [Content Negotiation](/zh-TW/docs/Web/HTTP/Content_negotiation)
  - : HTTP introduces a set of headers, starting with `Accept-` as a way for a browser to announce the format, language, or encoding it prefers. This article explains how this advertisement happens, how the server is expected to react and how it will choose the most adequate response.
