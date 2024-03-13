---
title: Element.querySelector()
slug: Web/API/Element/querySelector
---

{{APIRef("DOM")}}

Возвращает первый элемент, являющийся потомком элемента, на который применено правило указанной группы селекторов.

## Синтаксис

```
element = baseElement.querySelector(selectors);
```

- `element` и `baseElement` это {{domxref("element")}} объекты.
- `selectors` - это группа [селекторов](/ru/docs/Web/Guide/CSS/Getting_Started/Selectors) для поиска совпадения.

## Пример

Данный пример получает первый элемент style, который не имеет атрибута type или этот атрибут равен text/css, в теле (body) HTML документа:

```js
var el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

## Примечания

Возвращает null если совпадения не найдены, иначе первый найденный элемент.

Генерирует исключение `SYNTAX_ERR` если указанная группа селекторов не корректна.

`querySelector()` был представлен в WebApps API.

Строка аргументов передаваемая `querySelector()` должна удовлетворять синтаксису CSS. Более подробные примеры смотрите в {{domxref("document.querySelector")}}.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("element.querySelectorAll()")}}
- {{domxref("document.querySelector()")}}
- {{domxref("document.querySelectorAll()")}}
- [Фрагменты кода для querySelector](/ru/docs/Code_snippets/QuerySelector)
