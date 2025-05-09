---
title: "<dt>: Термин для определения"
slug: Web/HTML/Reference/Elements/dt
---

{{HTMLSidebar}}

**HTML-элемент `<dt>`** который определяет термин в описании или списке определений, как таковой должен использоваться внутри элемента {{HTMLElement("dl")}} . Обычно за ним следует элемент {{HTMLElement("dd")}}. Кроме того, несколько элементов `<dt>` идущие друг за другом будут содержать своё определение в следующем идущем за ним элементом{{HTMLElement("dd")}}.

Последующий элемент {{HTMLElement("dd")}} (_от англ. Description Details)_ предоставляет определение или другой связанный текст, относящийся к термину, указанным с помощью `<dt>`.

{{InteractiveExample("HTML Demo: &lt;dt&gt;", "tabbed-standard")}}

```html interactive-example
<p>Please use the following paint colors for the new house:</p>

<dl>
  <dt>Denim (semigloss finish)</dt>
  <dd>Ceiling</dd>

  <dt>Denim (eggshell finish)</dt>
  <dt>Evening Sky (eggshell finish)</dt>
  <dd>Layered on the walls</dd>
</dl>
```

```css interactive-example
p,
dl {
  font:
    1rem "Fira Sans",
    sans-serif;
}

dl > dt {
  font-weight: normal;
  font-style: oblique;
}

dd {
  margin-bottom: 1rem;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | Нет                                                                                                                                                                                                                  |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент), но без потомков {{HTMLElement("header")}}, {{HTMLElement("footer")}}, секционного контента или заголовочного контента.           |
| Пропуск тегов                                                     | Открывающий тег обязателен. Конечный тег может быть опущен, если за этим элементом непосредственно следует другой элемент `<dt>` или {{HTMLElement("dd")}}, или если в родительском элементе нет больше содержимого. |
| Допустимые родители                                               | Перед элементом {{HTMLElement("dt")}} или {{HTMLElement("dd")}}, внутри {{HTMLElement("dl")}} или (в [WHATWG](/ru/docs/Glossary/WHATWG) HTML) элемента {{HTMLElement("div")}} который внутри {{HTMLElement("dl")}}.  |
| Допустимые ARIA-роли                                              | Нет                                                                                                                                                                                                                  |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}} До Gecko 1.9.2 (Firefox 4) включительно, Firefox реализует [`HTMLSpanElement`](/ru/docs/Web/API/HTMLSpanElement) интерфейс для этого элемента.                                            |

## Атрибуты

Этот элемент включает только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Пример

Для примера можно использовать [образец для `<dl>` элемента](/ru/docs/Web/HTML/Reference/Elements/dl#%d0%9e%d0%b4%d0%b8%d0%bd%d0%be%d1%87%d0%bd%d1%8b%d0%b5_%d1%82%d0%b5%d1%80%d0%bc%d0%b8%d0%bd_%d0%b8_%d0%be%d0%bf%d1%80%d0%b5%d0%b4%d0%b5%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}
