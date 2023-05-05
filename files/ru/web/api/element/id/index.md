---
title: Element.id
slug: Web/API/Element/id
tags:
  - API
  - DOM
  - Element
  - Property
  - Reference
translation_of: Web/API/Element/id
---
{{ ApiRef("DOM") }}Свойство **`id`** представляет идентификатор элемента, отражая глобальный атрибут **[id](/ru/docs/Web/HTML/Global_attributes/id)**.

Если значение **`id`** не пустое, то оно должно быть уникально в документе.

**`id`** часто используется с {{domxref("document.getElementById", "getElementById")}}, чтобы получить нужный элемент. Часто применяют [ID как селектор](/ru/docs/Web/CSS/ID_selectors), для стилизации документа, с помощью [CSS](<r u/docs/Web/CSS>).

> **Примечание:** идентификаторы чувствительны к регистру, но вам следует избегать создание id, которых различает регистр (смотрите [Чувствительность к регистру в классах и идентификаторов](/ru/docs/Case_Sensitivity_in_class_and_id_Names)).

## Синтаксис

```
var idStr = element.id; // Получаем id.
```

```
element.id = idStr; // Применяем id.
```

_`idStr`_ - идентификатор элемента

## Спецификации

| Спецификации                                                                     | Статус                           | Комментарий                                        |
| -------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-id', 'id')}}             | {{Spec2('DOM WHATWG')}} | Нет изменений от {{SpecName('DOM2 HTML')}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-63534901', 'id')}}     | {{Spec2('DOM2 HTML')}}     | Нет отличий от {{SpecName('DOM1')}}.       |
| {{SpecName('DOM1', 'level-one-html.html#ID-63534901', 'id')}} | {{Spec2('DOM1')}}         | Изначальное определение.                           |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Глобальный атрибут [**id**](/ru/docs/Web/HTML/Global_attributes/id)
