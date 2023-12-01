---
title: ":focus"
slug: Web/CSS/:focus
---

{{CSSRef}}

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) **`:focus`** применяется, когда элемент (такой как input формы) получает фокус. Обычно он активируется при клике мышью пользователем или при выборе элемента с использованием клавиши "tab" на клавиатуре.

```css
/* Selects any <input> when focused */
input:focus {
  color: red;
}
```

> **Примечание:** Этот псевдокласс применяется только тогда, когда в фокусе находится сам элемент. Используйте {{CSSxRef(":focus-within")}}, если вы хотите выбрать элемент, в котором находится сфокусированный элемент.

## Синтаксис

{{CSSSyntax}}

## Пример

### HTML

```html
<input class="red-input" value="Я буду красным, если на меня попадёт фокус" />
<input class="lime-input" value="Я буду лаймовым при фокусе" />
```

### CSS

```css
.red-input:focus {
  color: red;
}

.lime-input:focus {
  color: lime;
}
```

### Результат

{{EmbedLiveSample('Пример', '100%', 40)}}

## Проблемы доступности

Убедитесь что визуальный индикатор фокусировки хорошо виден людям с плохим зрением. Это также поможет любым другим людям, которые используют экран в ярко освещённом месте (например, на солнце). [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) (_WCAG 2.1 SC 1.4.11 Нетекстовой контраст_) требует, чтобы контраст визуального индикатора фокуса должен быть не менее 3 к 1.

- Доступность визуальных индикаторов фокуса: [Добавьте на ваш сайт фокус! Советы по разработке полезных и удобных индикаторов фокуса](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### `:focus { outline: none; }`

**Никогда** не удаляйте фокусный outline (видимый индикатор фокуса), не заменяя его фокусным контуром подходящим под требования [WCAG 2.1 SC 1.4.11 Non-Text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

- Небольшой совет: [Никогда не удаляйте CSS контуры](https://a11yproject.com/posts/never-remove-css-outlines/)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
