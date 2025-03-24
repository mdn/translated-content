---
title: <angle>
slug: Web/CSS/angle
---

{{ CSSRef() }}

[Тип данных](/ru/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) [CSS](/ru/docs/Web/CSS) **`<angle>`** представляет собой значение угла, выраженное в градусах, градах, радианах или оборотах. Он используется, например, в {{cssxref ("&lt;gradient&gt;")}} и в некоторых функциях {{cssxref ("transform")}}.

{{InteractiveExample("CSS Demo: &amp;lt;angle&amp;gt;")}}

```css interactive-example-choice
transform: rotate(45deg);
```

```css interactive-example-choice
transform: rotate(3.1416rad);
```

```css interactive-example-choice
transform: rotate(-50grad);
```

```css interactive-example-choice
transform: rotate(1.75turn);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This box can rotate to different angles.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #0118f3;
  padding: 0.75em;
  width: 180px;
  height: 120px;
  color: white;
}
```

## Синтаксис

Тип данных `<angle>` состоит из числа ({{cssxref("&lt;number&gt;")}}), за которым следует одна из единиц измерения, представленные ниже. Между литералом единицы измерения и цифрой нет пробела. После `0` указывать единицу измерения необязательно.

Опционально перед числом может стоять знак `+` или `-` . Положительное значение отмеряется по часовой стрелке, а отрицательные – против часовой. Чтобы достичь статистических свойств, каждый угол может быть представлен разными значениями, эквивалентными друг другу. Например, `90deg` равняется `-270deg`, а `1turn` равняется `4turn`. Тем не менее, для достижения динамических свойств эффект будет другим. Например, при применении {{cssxref ("animation")}} или {{cssxref ("transition")}}.

### Единицы измерения

- deg
  - : Представляет угол в [градусах](<https://ru.wikipedia.org/wiki/Градус_(геометрия)>). Один полный круг равен `360deg`. Например: `0deg`, `90deg`, `14.23deg`.
- grad
  - : Представляет угол в [градах](https://ru.wikipedia.org/wiki/Град,_минута,_секунда). Один полный круг равен `400grad`. Например: `0grad`, `100grad`, `38.8grad`.
- rad
  - : Представляет угол в [радианах](https://ru.wikipedia.org/wiki/Радиан). Один полный круг равен 2π или примерно `6.2832rad`. `1rad` - это 180/π градусов. Например: `0rad`, `1.0708rad`, `6.2832rad`.
- turn
  - : Представляет угол в количестве [оборотов](<https://ru.wikipedia.org/wiki/Оборот_(единица_измерения)>). Один полный круг равен `1turn`. Например: `0turn`, `0.25turn`, `1.2turn`.

## Примеры

| ![](angle90.png)      | Прямой угол: `90deg = 100grad = 0.25turn ≈ 1.5708rad`                              |
| --------------------- | ---------------------------------------------------------------------------------- |
| ![](angle180.png)     | Развёрнутый угол: `180deg = 200grad = 0.5turn ≈ 3.1416rad`                         |
| ![](angleMinus90.png) | Прямой угол (против часовой стрелки): `-90deg = -100grad = -0.25turn ≈ -1.5708rad` |
| ![](angle0.png)       | Нулевой угол: `0deg = 0grad = 0turn = 0rad`                                        |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
