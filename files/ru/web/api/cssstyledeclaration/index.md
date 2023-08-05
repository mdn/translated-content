---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
---

{{ APIRef("CSSOM") }}

Интерфейс **`CSSStyleDeclaration`** представляет объект, являющийся блоком объявления CSS, и предоставляет информацию о стиле и различные связанные со стилем методы и свойства.

Объект `CSSStyleDeclaration` может быть представлен с помощью трёх различных API:

- Через {{domxref ("HTMLElement.style")}}, который имеет дело с встроенными стилями одного элемента (например, \<div style="...">).
- Через API {{domxref("CSSStyleSheet")}}. Например, `document.styleSheets[0].cssRules[0].style` возвращает объект `CSSStyleDeclaration` для первого правила CSS в первой таблице стилей документа.
- Через {{domxref ("Window.getComputedStyle ()")}}, который предоставляет объект `CSSStyleDeclaration` в качестве интерфейса только для чтения.

## Атрибуты

- {{domxref("CSSStyleDeclaration.cssText")}}
  - : Текстовое представление блока объявления. Установка этого атрибута изменяет стиль.
- {{domxref("CSSStyleDeclaration.length")}} {{readonlyInline}}
  - : Количество свойств. Смотри ниже метод {{domxref("CSSStyleDeclaration.item()", 'item()')}} .
- {{domxref("CSSStyleDeclaration.parentRule")}} {{readonlyInline}}
  - : Содержащееся {{domxref("CSSRule")}}.

## Методы

- {{domxref("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Возвращает необязательный приоритет "important".
- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
  - : Возвращает значение свойства, заданное именем свойства.
- {{domxref("CSSStyleDeclaration.item()")}}
  - : Возвращает имя свойства.
- {{domxref("CSSStyleDeclaration.removeProperty()")}}
  - : Удаляет свойство из блока объявления CSS.
- {{domxref("CSSStyleDeclaration.setProperty()")}}
  - : Изменяет существующее свойство CSS или создаёт новое свойство CSS в блоке объявления.
- {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}}
  - : Поддерживается только через getComputedStyle в Firefox. Возвращает значение свойства в виде {{ domxref ("CSSPrimitiveValue")}} или `null` [для сокращённых свойств.](/ru/docs/Web/CSS/Shorthand_properties)

## Пример

```js
var styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (var i = styleObj.length; i--; ) {
  var nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
