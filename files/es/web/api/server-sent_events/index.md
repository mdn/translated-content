---
title: Server-sent events
slug: Web/API/Server-sent_events
---

Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as _[Events](/es/docs/DOM/event) + data_ inside the web page.

## Documentation

- [Using server-sent events](/es/docs/Server-sent_events/Using_server-sent_events)
  - : A tutorial guide to writing both server and client side part of a server-sent events app.
- [EventSource reference](/es/docs/Server-sent_events/EventSource)
  - : A reference to the client-side EventSource API.

## Tools

- Remy Sharp's [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwldrn/jquery.eventsource)

## Related Topics

- [AJAX](/es/docs/AJAX), [JavaScript](/es/docs/JavaScript), [WebSockets](/es/docs/WebSockets)

## See also

- A [Twitter like application](http://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) powered by server-sent events and [its code on Github](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 and Server-sent events](http://dsheiko.com/weblog/html5-and-server-sent-events)
- [Server-sent events using Asp.Net](http://rajudasa.blogspot.in/2012/05/html5-server-sent-events-using-aspnet.html)

## Specification

- [Server-sent events](http://dev.w3.org/html5/eventsource/)
