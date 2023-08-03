---
title: "::grammar-error"
slug: Web/CSS/::grammar-error
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) [псевдо-элемент](/en/CSS/Pseudo-elements) **`::grammar-error`** представляет сегмент текста, который {{glossary("user agent")}} пометил как грамматически неверный.

## Доступные свойства

Только небольшое подмножество CSS-свойств может быть использовано с псевдоэлементом `::grammar-error` :

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} и его полные формы
- {{cssxref("text-decoration")}} и связанные свойства
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

## Синтаксис

```
::grammar-error
```

## Примеры

### Простая проверка грамматики документа

В этом примере браузеры, поддерживающие псевдоэлемент, выделят грамматические ошибки, применив к ним заданные стили.

#### HTML

```html
<p>My friends is coming to the party tonight.</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### Результат

{{EmbedLiveSample('Простая_проверка_грамматики_документа', '100%', 60)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("::spelling-error")}}
