---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ ApiRef() }}

`document.designMode` переключает режим редактирования для всего документа. Допустимые значения: "on" и "off". В соответствии со спецификацией, это свойство по умолчанию имеет значение "off". Firefox следует этому стандарту. В более ранних версии Chrome и IE это свойство по умолчанию имеет значение "inherit". Начиная с Chrome 43 значение по умолчанию "off", а значение "inherit" более не поддерживается. В IE6-10 значение должно быть указанно с большой буквы ("On" и "Off")

## Синтаксис

```
var mode = document.designMode;
document.designMode = "on" || "off";
```

## Пример

Включить режим редактирования для {{HTMLElement("iframe")}} :

```
iframeNode.contentDocument.designMode = "on";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Rich-Text Editing в Mozilla](/ru/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
- [Свойство designMode](<https://msdn.microsoft.com/ru-ru/library/ms533720(v=vs.85).aspx>) на MSDN
