---
title: "Document: свойство designMode"
slug: Web/API/Document/designMode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef}}

Свойство **`document.designMode`** управляет режимом редактирования всего документа. Допустимые значения: `"on"` и `"off"`. В соответствии со спецификацией, это свойство по умолчанию имеет значение `"off"`. Firefox следует этому стандарту. В ранних версиях Chrome и IE значение этого свойства по умолчанию равно `"inherit"`. Начиная с Chrome 43 значение по умолчанию `"off"`, а значение `"inherit"` не поддерживается. В IE6-10 значение должно быть указанно с большой буквы.

## Значение

Строка, указывающая, включен или выключен параметр `designMode`.
Доступные значения: `on` и `off`.

## Пример

Включает режим редактирования для {{HTMLElement("iframe")}}:

```js
iframeNode.contentDocument.designMode = "on";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLElement.contentEditable")}}
