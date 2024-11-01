---
title: Doctype
slug: Glossary/Doctype
page-type: glossary-definition
---

{{GlossarySidebar}}

В {{Glossary("HTML")}} объявление типа документа тегом "`<!DOCTYPE html>`" - обязательная преамбула, расположенная в верхней части документа. Единственное предназначение тега - не допустить переключение {{Glossary("browser","браузера")}} в так называемый режим совместимости (["quirks mode"](/ru/docs/Quirks_Mode_and_Standards_Mode)) во время рендеринга документа; то есть, тег "`<!DOCTYPE html>`" гарантирует, что браузер с максимальными усилиями будет следовать соответствующей спецификации, а не использовать другой тип рендеринга, несовместимый с некоторыми спецификациями.

Объявление doctype не зависит от регистра. В примерах кода на MDN принято использовать строчные буквы, но также часто можно встретить вариант записи `<!DOCTYPE html>`.

## Смотрите также

- [Определение DOCTYPE в спецификации HTML](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Режим совместимости (Quirks Mode) и стандартный режим (Standards Mode)](/ru/docs/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/ru/docs/Web/API/Document/doctype), метод JavaScript, возвращающий doctype
