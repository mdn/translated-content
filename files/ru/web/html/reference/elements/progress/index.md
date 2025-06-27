---
title: "<progress>: Элемент индикатора выполнения"
slug: Web/HTML/Reference/Elements/progress
---

{{HTMLSidebar}}

HTML-элемент **`<progress>`** отображает индикатор, показывающий ход выполнения задачи, обычно отображаемый в виде прогресс бара (индикатора выполнения).

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Потоковый контент](/ru/docs/Web/HTML/Guides/Content_categories#flow_content), [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content), контент, ассоциированный с label, явный контент. |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимый контент                                                | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content), но среди его потомков не должно быть элемента `<progress>`.                                                                     |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                  |
| Допустимые родители                                               | Любой элемент, который принимает [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                                                                |
| Допустимые ARIA-роли                                              | Нет                                                                                                                                                                                                               |
| DOM-интерфейс                                                     | {{domxref("HTMLProgressElement")}}                                                                                                                                                                                |

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `max`
  - : Этот атрибут описывает сколько затрат требует задача, указанная элементом `progress`. Атрибут `max`, в случае указания, должен быть положительным, также, возможно применение числа с плавающей точкой. Значение по умолчанию 1.
- `value`
  - : Этот атрибут указывает какая часть задачи была выполнена. Это может быть число с плавающей точкой от 0 до `max`, или между 0 и 1, если `max` не указан. Если атрибут `value` не указан, индикатор выполнения не определён; это указывает на то, что действие продолжается без указания на то, сколько времени оно займёт.

> [!NOTE]
> Минимальное значение всегда 0, а атрибут `min` недопустим для прогресс-элемента. Вы можете использовать свойство CSS {{ cssxref("-moz-orient") }}, чтобы указать, должен ли индикатор выполнения отображаться горизонтально (по умолчанию) или вертикально.

> [!NOTE]
> Псевдокласс {{ cssxref(":indeterminate") }} может быть использован для работы с неопределённым индикатором выполнения. Чтобы индикатор выполнения стал неопределённым после присвоения ему значения, вы должны удалить атрибут value с помощью `element.removeAttribute("value")`

## Примеры

```html
<progress value="70" max="100">70 %</progress>
```

### Result

{{ EmbedLiveSample("Примеры", 200, 50) }}

### Дополнительные примеры

Смотрите {{ cssxref("-moz-orient") }}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [\<meter>](/ru/docs/Web/HTML/Reference/Elements/meter)
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
