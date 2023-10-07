---
title: CSS Images
slug: Web/CSS/CSS_images
---

{{CSSRef}}

**CSS Images** - модуль в CSS, который определяет, какие типы изображений можно использовать (тип {{cssxref("&lt;image&gt;")}}, содержащий URL, градиенты и другие типы изображений), как изменять их размер и как они, и другие замещённые элементы, взаимодействуют с другими моделями макетов.

## Справка

### Свойства

- {{cssxref("image-orientation")}}
- {{cssxref("image-rendering")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}

### Функции

- {{cssxref("linear-gradient", "linear-gradient()")}}
- {{cssxref("radial-gradient", "radial-gradient()")}}
- {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("element", "element()")}}

### Типы данных

- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;uri&gt;")}}

## Руководства

- [Использование CSS градиентов](/ru/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Представляют собой особый тип CSS изображений, _градиенты_, как создавать и использовать их.
- [Создание спрайтов в CSS](/ru/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
  - : Описывает общую технику группировки нескольких изображений в один документ, чтобы сократить количество запросов и скорость загрузки страницы.

## Спецификации

| Specification                                                    | Status                   | Comment                                                                                                                              |
| ---------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("CSS4 Images")}}                                      | {{Spec2("CSS4 Images")}} | Added {{CSSxRef("image-resolution")}}, {{CSSxRef("conic-gradient")}}, and {{CSSxRef("_image", "image()")}}                           |
| {{SpecName("CSS3 Images")}}                                      | {{Spec2("CSS3 Images")}} | Added {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("object-fit")}} and {{CSSxRef("object-position")}} |
| {{SpecName("Compat", "#css-%3Cimage%3E-type", "CSS Gradients")}} | {{Spec2("Compat")}}      | Standardizes the `-webkit` prefixed gradient value functions                                                                         |
| {{SpecName("CSS3 Values", "#urls", "&lt;url&gt;")}}              | {{Spec2("CSS3 Values")}} |                                                                                                                                      |
| {{SpecName("CSS2.1", "syndata.html#uri", "&lt;uri&gt;")}}        | {{Spec2("CSS2.1")}}      |                                                                                                                                      |
| {{SpecName("CSS1", "#url", "&lt;url&gt;")}}                      | {{Spec2("CSS1")}}        | Initial definition                                                                                                                   |
