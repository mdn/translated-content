---
title: Browsing context
slug: Glossary/Browsing_context
---

**Browsing context** (контекст просмотра) - это окружение, в котором {{glossary("browser","браузер")}} отображает {{domxref("Document")}} (на сегодняшний день обычно это вкладки, однако, возможно окно или frame внутри страницы).

Каждый контекст просмотра имеет определённый {{glossary("origin","источник")}}, источник текущего активного документа и историю, которая содержит все отображённые документы в соответствующем порядке.

Взаимодействие между контекстами просмотра очень ограничено. Между контекстами просмотра из одного источника может быть открыт и использован {{domxref("BroadcastChannel")}}.

## Learn more

### Техническая документация

- [Browsing context на WHATWG](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [Browsing context на W3C](http://w3c.github.io/html/browsers.html#sec-browsing-contexts)
