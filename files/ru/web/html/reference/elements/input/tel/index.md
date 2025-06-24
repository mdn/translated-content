---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
---

{{HTMLSidebar}}

Элементы {{HTMLElement("input")}} с типом **`tel`** используются для ввода телефонных номеров. В отличие от {{HTMLElement("input/email")}} и {{HTMLElement("input/url")}} вводимое значение не проходит автоматическую валидацию перед отправкой формы, поскольку форматы телефонных номеров сильно различаются по всему миру.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;tel&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="phone">
  Enter your phone number:<br />
  <small>Format: 123-456-7890</small>
</label>

<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

Несмотря на то, что поля ввода `tel` функционально идентичны обычным полям ввода с типом `text`, они приносят пользу: например, браузеры мобильных телефонов могут предоставлять для таких полей специальную клавиатуру, оптимизированную для ввода телефонных номеров. Использование специального поля ввода для телефонных номеров также упрощает реализацию их проверки и обработки.

> [!NOTE]
> Браузеры, не поддерживающие тип `tel`, будут отображать обычное поле ввода {{HTMLElement("input/text")}}.

## Значение

Атрибут [`value`](/ru/docs/Web/HTML/Reference/Elements/input#value) элемента {{HTMLElement("input")}} содержит строку, которая представляет номер телефона либо является пустой строкой (`""`).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Руководство по HTML-формам](/ru/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}}
  - {{HTMLElement("input/text")}}
  - {{HTMLElement("input/email")}}

- [Compatibility of CSS properties](/ru/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
