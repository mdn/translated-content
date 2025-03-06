---
title: Тип документа
slug: Glossary/Doctype
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{GlossarySidebar}}

В {{Glossary("HTML")}} необходимо объявлять **тип документа** с помощью строки `<!doctype html>` в самом начале каждого документа. Единственная цель этого — не допустить переключения {{Glossary("browser", "браузера")}} в так называемый режим совместимости («[quirks mode](/ru/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)») во время рендеринга документа. Указание типа документа с помощью `<!doctype html>` гарантирует, что браузер будет следовать соответствующей спецификации, а не использовать другой режим отображения, несовместимый с некоторыми спецификациями.

Объявление типа документа не чувствительно к регистру. В примерах кода на MDN принято использовать строчные буквы, но и вариант записи `<!DOCTYPE html>` тоже корректный.

## Смотрите также

- [Определение DOCTYPE в спецификации HTML](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)
- [Режим совместимости (Quirks Mode) и стандартный режим (Standards Mode)](/ru/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Document.doctype](/ru/docs/Web/API/Document/doctype) — метод JavaScript, возвращающий тип документа
