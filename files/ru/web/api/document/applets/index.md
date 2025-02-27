---
title: Document.applets
slug: Web/API/Document/applets
l10n:
  sourceCommit: a468a537c0234a3035951e80af76715e1c36c8f7
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Свойство **`applets`** объекта {{domxref("Document")}} возвращает пустую коллекцию {{domxref("HTMLCollection")}}. Это свойство сохраняется только для совместимости; в старых версиях браузеров оно возвращало список апплетов документа.

> [!NOTE]
> Поддержка элемента `<applet>` удалена во всех браузерах. Поэтому вызов `document.applets` всегда возвращает пустую коллекцию.

### Значение

Пустая {{domxref("HTMLCollection")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
