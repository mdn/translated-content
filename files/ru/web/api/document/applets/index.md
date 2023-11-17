---
title: Document.applets
slug: Web/API/Document/applets
---

{{APIRef("DOM")}}

**`applets`** возвращает массив апплетов, находящихся в документе.

> **Примечание:** The {{htmlelement("applet")}} element was removed in [Gecko 56](https://bugzilla.mozilla.org/show_bug.cgi?id=1279218) and [Chrome in late 2015](https://bugs.chromium.org/p/chromium/issues/detail?id=470301). Since then, calling `document.applets` in those browsers always returns an empty {{domxref("HTMLCollection")}}. Removal is being considered in [WebKit](https://bugs.webkit.org/show_bug.cgi?id=157926)and [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11946645/).

## Синтаксис

```
nodeList = document.applets
```

### Значение

{{domxref("HTMLCollection")}}.

## Пример

```
// Когда вы точно знаете, что вам нужен 2й апплет
my_java_app = document.applets[1];
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
