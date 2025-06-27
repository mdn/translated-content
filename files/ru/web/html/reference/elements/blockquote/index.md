---
title: <blockquote> - элемент цитаты
slug: Web/HTML/Reference/Elements/blockquote
---

{{HTMLSidebar}}

## Описание

**HTML-элемент `<blockquote>`** (от англ. _Block Quotation_) указывает на то, что заключённый в нем текст является развёрнутой цитатой. Обычно он (текст) визуально выделяется наклонным (смотри [Примечание](/ru/docs/Web/HTML/Reference/Elements/blockquote#notes), где говорится о том, как это изменить). URI на источник цитаты можно указать в атрибуте **cite**, тогда как текстовое представление источника может быть задано элементом {{HTMLElement("cite")}}.

{{InteractiveExample("HTML Demo: &lt;blockquote&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <p>—Aldous Huxley, <cite>Brave New World</cite></p>
</div>
```

```css interactive-example
div:has(> blockquote) {
  background-color: #ededed;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

blockquote + p {
  text-align: right;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Основной контент](/ru/docs/Web/HTML/Guides/Content_categories#основной_контент), секционный корень, явный контент. |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Основной контент](/ru/docs/Web/HTML/Guides/Content_categories#основной_контент).                                   |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                    |
| Допустимые родители                                               | Любой элемент, который принимает [основной контент](/ru/docs/Web/HTML/Guides/Content_categories#основной_контент).  |
| Допустимые ARIA-роли                                              | Любые                                                                                                               |
| DOM-интерфейс                                                     | {{domxref("HTMLQuoteElement")}}                                                                                     |

## Атрибуты

Для данного элемента доступны [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : URL, указывающий на исходный документ или сообщение, откуда была взята цитата. Этот атрибут предназначен для того, чтобы сослаться на информацию, объясняющую контекст, или ссылки, из которых была взята цитата.

## Пример

```html
<blockquote cite="http://developer.mozilla.org">
  <p>This is a quotation taken from the Mozilla Developer Center.</p>
</blockquote>
```

Результат:

{{EmbedLiveSample("")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Примечание

Чтобы изменить отступ элемента `<blockquote>`, используйте [CSS](/ru/docs/Web/CSS) - свойство {{cssxref("margin")}}.

Для коротких цитат используйте `элемент` {{HTMLElement("q")}}.

## Смотрите также

- Элемент {{HTMLElement("q")}} для встроенных (строковых) цитат.
- Элемент {{HTMLElement("cite")}} для указания источника.
