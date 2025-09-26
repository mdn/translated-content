---
title: id
slug: Web/HTML/Reference/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

**{{glossary("global attribute", "Глобальный атрибут")}} `id`** устанавливает элементу уникальный идентификатор (ID), имя которого должно быть уникальным в документе (на странице). Его назначением является идентификация элемента при связывании (использование [идентификатора фрагмента](/ru/docs/Web/URI#fragment)), скриптинге или стилизации (с помощью {{glossary("CSS")}}).

{{InteractiveExample("HTML Demo: id", "tabbed-shorter")}}

```html interactive-example
<p>A normal, boring paragraph. Try not to fall asleep.</p>

<p id="exciting">The most exciting paragraph on the page. One of a kind!</p>
```

```css interactive-example
#exciting {
  background: linear-gradient(to bottom, #ffe8d4, #f69d3c);
  border: 1px solid #696969;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px black;
}

#exciting:before {
  content: "ℹ️";
  margin-right: 5px;
}
```

Значение этого атрибута "непрозрачная" строка: это означает, что веб-автор не должен использовать его для передачи какой-либо информации. Особое значение, например семантическое, получать из этой строки не надо.

Значение `id` не должно содержать пропусков (пробелов, табуляции и т.д). Браузеры обрабатывают пробелы, как часть уникального идентификатора. В отличии от атрибута [`class`](/ru/docs/Web/HTML/Reference/Global_attributes#class), который позволяет разделять пробелами значение (указывать несколько классов через пробел), элементы могут иметь только один ID.

> [!NOTE]
> Использование символов отличных от {{glossary("ASCII")}} букв, цифр, `'_'`, `'-'` и `'.'` может вызвать проблемы, связанные с совместимостью, т.к. они не были разрешены в HTML 4. Несмотря на то, что в {{glossary("HTML5")}} ограничение было снято, для совместимости ID должен начинаться с латинской буквы.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Все [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).
- {{domxref("Element.id")}} отражает этот атрибут.
