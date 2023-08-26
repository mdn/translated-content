---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`transform`** позволяет вам поворачивать, масштабировать, наклонять или сдвигать элемент. Оно модифицирует координатное пространство для CSS [визуальной форматируемой модели](/ru/docs/Web/CSS/Visual_formatting_model).

{{EmbedInteractiveExample("pages/css/transform.html")}}

Если свойство имеет значение, отличное от `none`, будет создан [контекст наложения](/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). В этом случае, элемент будет действовать как [содержащий блок](/ru/docs/Web/CSS/Containing_block) для любых элементов `position: fixed;` или `position: absolute;` которые он содержит.

> **Предупреждение:** Только трансформируемый элемент может быть `transform`. Т.е. все элементы, шаблоны которых регулируются блочной моделью CSS, кроме : [неизменяемые инлайновые блоки](/ru/docs/Web/CSS/Visual_formatting_model#Inline-level_elements_and_inline_boxes), [блоки таблица-колонка](/ru/docs/Web/HTML/Element/col), и [блоки таблица-колонка-группа](/ru/docs/Web/HTML/Element/colgroup).

## Синтаксис

```css
/* Значения ключевым словом*/
transform: none;

/* Значения функций */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Мультифункциональные значения */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Глобальные значения */
transform: inherit;
transform: initial;
transform: unset;
```

Свойство `transform` может быть указано как значение ключевого слова [`none`](#none) или как одно или более значений [`<transform-function>`](#transform-function).

### Значения

- {{cssxref("&lt;transform-function&gt;")}}
  - : Одна или более применяемых [функций CSS-трансформации](/ru/docs/Web/CSS/transform-function). Функции трансформации умножаются в порядке слева направо, что означает, что составное трансформирование эффективнее применять в порядке справа налево.
- `none`
  - : Указывает, что трансформация не должна применяться.

### Формальный синтаксис

{{csssyntax}}

Если {{cssxref("transform-function/perspective", "perspective()")}} является одним из мультифункциональных значений, оно должно быть указано первым.

## Примеры

### HTML

```html
<div>Transformed element</div>
```

### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

### Результат

{{EmbedLiveSample("Примеры", "400", "160")}}

Для того, чтобы посмотреть другие примеры, обратитесь к [Использование CSS-трансформации](/ru/docs/Web/Guide/CSS/Using_CSS_transforms) и {{cssxref("&lt;transform-function&gt;")}}.

## Accessibility concerns

Scaling/zooming анимации являются проблемой для accessibility, поскольку они становятся частым триггером для определённых типов мигрени. Если вам нужно добавить такие анимации на вашем веб-сайте, вы должны предоставить элемент управления, позволяющий пользователям отключать анимации, предпочтительно для всего сайта.

Кроме того, рассмотрите возможность использования @media-опции {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} — используйте её для написания {{cssxref("Media_Queries", "медиавыражения")}}, которое отключит анимацию, если пользователь уменьшил анимацию в системных настройках.

Узнать больше:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_%E2%80%94_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Использование CSS-трансформации](/ru/docs/CSS/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} типы данных
- [Плагин jQuery для кросс-браузерной 2D-трансформации](https://louisremi.github.io/jquery.transform.js/)
