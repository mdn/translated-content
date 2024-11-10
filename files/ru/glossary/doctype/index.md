---
title: Тип документа
slug: Glossary/Doctype
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{GlossarySidebar}}

В {{Glossary("HTML")}} необходимо объявлять **тип документа** с помощью `<!doctype html>` в верхней части документа. Единственное цель этого — не допустить переключение {{Glossary("browser", "браузера")}} в так называемый режим совместимости «([quirks mode](/ru/docs/Quirks_Mode_and_Standards_Mode))» во время рендеринга документа. То есть указание типа документа с помощью `<!doctype html>` гарантирует, что браузер будет следовать соответствующей спецификации, а не использовать другой режим отображения, несовместимый с некоторыми спецификациями.

Объявление doctype не зависит от регистра. В примерах кода на MDN принято использовать строчные буквы, но также часто можно встретить вариант записи `<!DOCTYPE html>`.

## Смотрите также

- [Определение DOCTYPE в спецификации HTML](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Режим совместимости (Quirks Mode) и стандартный режим (Standards Mode)](/ru/docs/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/ru/docs/Web/API/Document/doctype), метод JavaScript, возвращающий тип документа
