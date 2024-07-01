---
title: Basics of HTTP
slug: Web/HTTP/Basics_of_HTTP
---

{{HTTPSidebar}}

HTTP удобный расширяемый протокол. Он опирается на несколько базовых понятий, таких как: ресурсы и URI (унифицированный идентификатор ресурса), простая структура сообщений и технология "клиент-сервер" для общения. Помимо этих базовых концепций, за последние годы появилось множество расширений, добавляющих новые функциональные возможности и новую семантику путём создания новых HTTP-методов или заголовков.

## Статьи

- [Обзор HTTP](/ru/docs/Web/HTTP/Overview)
  - : Описывает, что такое HTTP и какова его роль в архитектуре всемирной паутины, позицию в стеке протоколов.
- [Эволюция HTTP](/ru/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP был создан в начале 1990-х годов и несколько раз был расширен. Эта статья даёт обзор его истории и описывает HTTP/0.9, HTTP/1.0, HTTP/1.1, и современный HTTP/2, а также незначительные нововведения представленные в последние несколько лет.
- [Обсуждение версии HTTP](/ru/docs/Web/HTTP/Basics_of_HTTP/Negotiating_an_HTTP_version)
  - : Описывает, как клиент и сервер могут договориться о конкретной версии HTTP и в конечном счёте перейти на более новую версию протокола.
- [Resources and URIs](/ru/docs/Web/HTTP/Resources_and_URIs)
  - : A brief introduction of the notion of resources, identifiers, and locations on the Web.
- [Identifying resources on the Web](/ru/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
  - : Describes how Web resources are referenced and how to locate them.
- [Data URIs](/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
  - : A specific kind of URIs that directly embeds the resource it represents. Data URIs are very convenient, but have some caveats.
- Separating identity and location of a resource: the Alt-Svc HTTP header
  - : Most of the time identity and location of a Web resource are shared, this can be changed with the {{HTTPHeader("Alt-Svc")}} header.
- [MIME types](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Since HTTP/1.0, different types of content can be transmitted. This article explains how this is done using the {{HTTPHeader("Content-Type")}} header and the MIME standard.
- [Choosing between www and non-www URLs](/ru/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
  - : Advice on using a www-prefixed domain or not, this article explains the consequences of the choice as well as how to make it.
- Flow of an HTTP session
  - : This fundamental article describes a typical HTTP session: what happens under the hood when you click on a link in your browser…
- [HTTP Messages](/ru/docs/Web/HTTP/Messages)
  - : HTTP Messages transmitted during requests or responses have a very clear structure; this introductory article describes this structure, its purpose and its possibilities.
- Frame and message structure in HTTP/2
  - : HTTP/2 encapsulates and represents HTTP/1.x messages in a binary frame. This article explains the frame structure, its purpose and the way it is encoded.
- [Connection management in HTTP/1.x](/ru/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 was the first version of HTTP to support persistent connection and pipelining. This article explains these two concepts.
- Connection management in HTTP/2
  - : HTTP/2 completely revisited how connections are created and maintained: this article explains how HTTP frames allow multiplexing and solve the 'head-of-line' blocking problem of former HTTP versions.
- [Content Negotiation](/ru/docs/Web/HTTP/Content_negotiation)
  - : HTTP introduces a set of headers, starting with `Accept-` as a way for a browser to announce the format, language, or encoding it prefers. This article explains how this advertisement happens, how the server is expected to react and how it will choose the most adequate response.
