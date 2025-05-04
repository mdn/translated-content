---
title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 476fb44932d56c0f50628a620348cd77f411b5ab
---

{{HTMLSidebar("Global_attributes")}}

[Глобальный атрибут](/ru/docs/Web/HTML/Reference/Global_attributes) **`style`** содержит объявления CSS-стилей, которые будут применены к элементу. Однако рекомендуется определять стили в отдельном файле или файлах. Этот атрибут и элемент {{HTMLElement ("style")}} в основном предназначены для быстрого добавления стилей, например, для целей тестирования.

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> Этот атрибут не должен использоваться для передачи семантической информации. Даже если все стили будут удалены, страница должна оставаться семантически корректной. Как правило, не следует использовать этот атрибут для скрытия несущественной информации, это лучше делать с помощью атрибута [`hidden`](/ru/docs/Web/HTML/Global_attributes/hidden).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.style")}}
