---
title: <slot>
slug: Web/HTML/Element/slot
---

{{HTMLSidebar}}

HTML-элемент `<slot>` является частью набора технологии [Web Components](/ru/docs/Web/Web_Components), является заполнителем внутри веб компонента, который можно заполнить собственной разметкой, которая позволяет создавать отдельные деревья DOM и представлять их вместе.

| [Категории контента](/ru/docs/Web/HTML/Content_categories) | [Поток контента](/ru/docs/Web/HTML/Content_categories#Flow_content), [содержание формулировки](/ru/docs/Web/HTML/Content_categories#Phrasing_content) |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                      | [Прозрачный](/ru/docs/Web/HTML/Content_categories#Transparent_content_model)                                                                          |
| События                                                    | {{event("slotchange")}}                                                                                                                               |
| Пропуск тегов                                              | {{no_tag_omission}}                                                                                                                                   |
| Допустимые родители                                        | Любой элемент, который принимает[содержание формулировки](/ru/docs/Web/HTML/Content_categories#Phrasing_content)                                      |
| Допустимые ARIA-роли                                       | Нет                                                                                                                                                   |
| DOM-интерфейс                                              | {{domxref("HTMLSlotElement")}}                                                                                                                        |

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("name")}}
  - : Название слота._**Именованный слот**_ это элемент `<slot>` с атрибутом `name`.

## Примеры

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name"
        >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
      >
      <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> **Примечание:** вы можете увидеть этот полный пример в действии на странице [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) (смотрите его [в режиме реального времени](https://mdn.github.io/web-components-examples/element-details/)). Кроме того, вы можете найти в разделе [Использование шаблонов и слотов](/ru/docs/Web/Web_Components/Using_templates_and_slots).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
