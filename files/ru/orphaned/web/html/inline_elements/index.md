---
title: Строчные элементы
slug: orphaned/Web/HTML/Inline_elements
---

## Определение

В HTML (Языке Гипертекстовой Разметки), строчные элементы это те, которые занимают только то пространство, которое ограничено тегами, определяющими строчный элемент (необходимое для отображения их содержимого) и не нарушая потока содержимого (не требующее новой строки после каждого элемента). В этой статье мы рассмотрим встроенные элементы HTML и то, как они отличаются от [блочных элементов](/ru/docs/Web/HTML/Block-level_elements).

> **Примечание:** Строчный элемент не начинается с новой строки и в ширину занимает столько места, сколько это необходимо для его отображения.

## Пример строчного элемента

### HTML

```html
<p>Этот элемент <span>span</span> строчный; цвет его фона изменён, чтобы показать начало и конец элемента.</p>
```

### CSS

```css
span { background-color: #8ABB55; }
```

{{ EmbedLiveSample('Inline_example') }}

## Строчные vs. блочные

- Модель контента
  - : Как правило, встроенные элементы могут содержать только данные и другие встроенные элементы. Вы не можете помещать элементы блока внутри встроенных элементов.
- Форматирование
  - : По умолчанию встроенные элементы не заставляют новую строку начинаться в потоке документа. С другой стороны, элементы блока обычно вызывают разрыв строки (хотя, как обычно, это можно изменить с помощью CSS).

## Элементы

Следующие элементы являются строчными:

- [b](/en/HTML/Element/b), [big](/en/HTML/Element/big), [i](/en/HTML/Element/i), [small](/en/HTML/Element/small), [tt](/en/HTML/Element/tt)
- [abbr](/en/HTML/Element/abbr), [acronym](/en/HTML/Element/acronym), [cite](/en/HTML/Element/cite), [code](/en/HTML/Element/code), [dfn](/en/HTML/Element/dfn), [em](/en/HTML/Element/em), [kbd](/en/HTML/Element/kbd), [strong](/en/HTML/Element/strong), [samp](/en/HTML/Element/samp), [time](/en/HTML/Element/time), [var](/en/HTML/Element/var)
- [a](/en/HTML/Element/a), [bdo](/en/HTML/Element/bdo), [br](/en/HTML/Element/br), [img](/En/HTML/Element/Img), [map](/en/HTML/Element/map), [object](/en/HTML/Element/object), [q](/en/HTML/Element/q), [script](/En/HTML/Element/Script), [span](/en/HTML/Element/span), [sub](/en/HTML/Element/sub), [sup](/en/HTML/Element/sup)
- [button](/en/HTML/Element/button), [input](/en/HTML/Element/Input), [label](/en/HTML/Element/label), [select](/en/HTML/Element/select), [textarea](/en/HTML/Element/textarea)

## Смотрите также

- [Блочные элементы](/ru/docs/Web/HTML/Block-level_elements)
