---
title: "<dd>: Элемент описания определения"
slug: Web/HTML/Reference/Elements/dd
---

{{HTMLSidebar}}

**HTML-элемент `<dd>`** (_от англ. Description Details_) предоставляет подробности или определение предшествующего термина ({{HTMLElement("dt")}}) в списке определений ({{HTMLElement("dl")}}).

{{InteractiveExample("HTML Demo: &lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | Нет                                                                                                                                                                                                                            |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                             | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент)                                                                                                                                             |
| Пропуск тегов                                                     | Открывающий тег обязателен. Конечный тег может быть опущен, если за элементом {{HTMLElement("dd")}} непосредственно следует элемент `<dd>` или {{HTMLElement("dt")}}, или если в родительском элементе нет больше содержимого. |
| Допустимые родители                                               | Элементы {{HTMLElement("dl")}} и {{HTMLElement("div")}}, находящийся внутри элемента {{HTMLElement("dl")}}. Может быть использован после {{HTMLElement("dt")}} или другого элемента {{HTMLElement("dd")}}.                     |
| Неявные ARIA-роли                                                 | [`definition`](/ru/docs/Web/Accessibility/ARIA/Roles/definition_role)                                                                                                                                                          |
| Допустимые ARIA-роли                                              | Нет                                                                                                                                                                                                                            |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}}                                                                                                                                                                                                     |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `nowrap` {{Non-standard_inline}}
  - : Если значение атрибута установлено `yes`, текст определения не будет переноситься. Значение по умолчанию `no`.

## Пример

Для примера смотрите [образец для \<dl> элемента](/ru/docs/Web/HTML/Reference/Elements/dl#examples).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLELement("dl")}}
- {{HTMLElement("dt")}}
