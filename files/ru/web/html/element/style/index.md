---
title: <style> - элемент для указания стилей
slug: Web/HTML/Element/style
---

{{HTMLSidebar}}

HTML-элемент **`<style>`** содержит стилевую информацию для документа или его части. По умолчанию стилевые инструкции внутри этого элемента считаются написанными на [CSS](/ru/docs/Web/CSS).

- _[Категории содержимого](/ru/docs/HTML/Content_categories)_[Metadata content](/ru/docs/Web/HTML/Content_categories#Metadata_content), and if the `scoped` attribute is present: [flow content](/ru/docs/Web/HTML/Content_categories#Flow_content).
- _Permitted content_ Style information matching the language of the `type` attribute.
- _Tag omission_ Нет, открывающий и закрывающий теги обязательны.
- _Допустимые родительские элементы_ ...
- _Интерфейс DOM_ {{domxref("HTMLStyleElement")}}

## Атрибуты

This element includes the [global attributes](/ru/docs/Web/HTML/Global_attributes).

- `type`
  - : Этот атрибут определяет язык стиля в виде MIME-типа (кодировка не указывается). Этот атрибут необязателен, и при отсутствии считается «`text/css`».
- `media`
  - : К какому виду медиа должен применяться этот стиль. Значением этого атрибута является [медиавыражение](/ru/docs/Web/Guide/CSS/Media_queries), которое по умолчанию соответствует `all`.
- `scoped`
  - : Если указан этот атрибут, то стиль применяется только внутри своего родительского элемента. Если не указан, то стиль применяется ко всему документу.
- `title`
  - : Specifies alternative style sheet sets.
- `disabled`
  - : If set, disables (does not apply) the style rules, specified within the element, to the {{domxref("document","Document")}}.

## Примеры

### Простая таблица стилей

```html
<style type="text/css">
  body {
    color: red;
  }
</style>
```

### Таблица стилей с ограниченной областью действия

```html
<article>
  <div>
    Атрибут scoped позволяет включить элементы стиля в середине документа.
    Внутренние правила применяются только внутри родительского элемента.
  </div>
  <p>
    Этот текст должен быть чёрным. Если он красный, ваш браузер не поддерживает
    атрибут scoped.
  </p>
  <section>
    <style scoped>
      p {
        color: red;
      }
    </style>
    <p>Этот должен быть красным.</p>
  </section>
</article>
```

#### Live sample

{{ EmbedLiveSample('Таблица_стилей_с_ограниченной_областью_действия', '100%', '200') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("link")}}, позволяющий использовать внешние таблицы стилей.
