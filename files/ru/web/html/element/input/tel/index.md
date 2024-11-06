---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
---

{{HTMLSidebar}}

Элементы {{HTMLElement("input")}} с типом **`tel`** используются для ввода телефонных номеров. В отличие от {{HTMLElement("input/email")}} и {{HTMLElement("input/url")}} вводимое значение не проходит автоматическую валидацию перед отправкой формы, поскольку форматы телефонных номеров сильно различаются по всему миру.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Несмотря на то, что поля ввода `tel` функционально идентичны обычным полям ввода с типом `text`, они приносят пользу: например, браузеры мобильных телефонов могут предоставлять для таких полей специальную клавиатуру, оптимизированную для ввода телефонных номеров. Использование специального поля ввода для телефонных номеров также упрощает реализацию их проверки и обработки.

> [!NOTE]
> Браузеры, не поддерживающие тип `tel`, будут отображать обычное поле ввода {{HTMLElement("input/text")}}.

## Значение

Атрибут [`value`](/ru/docs/Web/HTML/Element/input#value) элемента {{HTMLElement("input")}} содержит строку, которая представляет номер телефона либо является пустой строкой (`""`).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Руководство по HTML-формам](/ru/docs/Learn/Forms)
- {{HTMLElement("input")}}

  - {{HTMLElement("input/text")}}
  - {{HTMLElement("input/email")}}

- [Compatibility of CSS properties](/ru/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
