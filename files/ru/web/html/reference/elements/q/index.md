---
title: "<q>: Элемент строковой цитаты HTML"
short-title: <q>
slug: Web/HTML/Reference/Elements/q
---

**HTML-элемент `<q>`** указывает, что заключённый в него текст является короткой строковой цитатой. Большинство современных браузеров отображают такую цитату, оборачивая её в кавычки. Этот элемент предназначен для коротких цитат, которые не требуют разрывов абзацев; для длинных цитат используйте элемент {{HTMLElement("blockquote")}}.

{{InteractiveExample("HTML Demo: &lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Значением этого атрибута является URL-адрес, указывающий на исходный документ или сообщение, из которого была взята цитата. Этот атрибут предназначен для указания контекста или первоисточника цитаты.

## Примеры

```html
<p>
  According to Mozilla's website,
  <q cite="https://www.mozilla.org/en-US/about/history/details/"
    >Firefox 1.0 was released in 2004 and became a big success.</q
  >
</p>
```

### Результат

{{EmbedLiveSample('Example')}}

## Техническое описание

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Guides/Content_categories"
          >Категории контента</a
        >
      </th>
      <td>
        <a href="/ru/docs/Web/HTML/Guides/Content_categories#основной_поток"
          >Основной поток</a
        >,
        <a href="/ru/docs/Web/HTML/Guides/Content_categories#фразовый_контент"
          >фразовый контент</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Разрешённый контент</th>
      <td>
        <a href="/ru/docs/Web/HTML/Guides/Content_categories#фразовый_контент"
          >Фразовый контент</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>Нет, открывающий и закрывающий теги обязательны.</td>
    </tr>
    <tr>
      <th scope="row">Разрешённые родители</th>
      <td>
        Любой элемент, который принимает
        <a href="/ru/docs/Web/HTML/Guides/Content_categories#фразовый_контент"
          >фразовый контент</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная роль ARIA</th>
      <td>
        <code
          ><a href="/ru/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Разрешённые роли ARIA</th>
      <td>Любая</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс DOM</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("blockquote")}} для длинных цитат.
- Элемент {{HTMLElement("cite")}} для указания источника цитаты.
