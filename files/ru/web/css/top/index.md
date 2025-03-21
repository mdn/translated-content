---
title: top
slug: Web/CSS/top
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`top`** частично определяет вертикальную позицию позиционируемого элемента. Оно не влияет на непозиционируемые элементы (т.е. **`top`** не применится, если задано `position: static`).

{{InteractiveExample("CSS Demo: top")}}

```css interactive-example-choice
top: 0;
```

```css interactive-example-choice
top: 4em;
```

```css interactive-example-choice
top: 10%;
```

```css interactive-example-choice
top: 20px;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #264653;
  border: 4px solid #ffb500;
  color: white;
  position: absolute;
  width: 140px;
  height: 60px;
}
```

Эффект свойства `top` зависит от того, как позиционируется элемент (то есть от значения свойства {{cssxref("position")}}):

- Когда задано `position: absolute` или `fixed` — значение свойства `top` устанавливается как расстояние между верхней гранью элемента и верхней гранью родительского контейнера.
- Когда задано `position: relative` — значение свойство `top` устанавливается как расстояние, на которое смещается верхний край элемента от нормальной позиции.
- Когда задано `position: sticky` — свойство `top` работает так, как при `position: relative` во время нахождения элемента внутри области просмотра, и как `position: fixed` вне области просмотра.
- Когда задано `position: static` — свойство `top` _не имеет никакого эффекта_.

Когда заданы оба свойства `top` и {{cssxref("bottom")}}, а свойство {{cssxref("position")}} установлено как `absolute` или `fixed`, то оба свойства `top` и {{cssxref("bottom")}} учитываются. Во всех остальных ситуациях, если {{cssxref("height")}} как-либо ограничена или `position` установлено как `relative`, то свойство `top` будет учтено, а {{cssxref("bottom")}} — проигнорировано.

## Синтаксис

```css
/* Значения величин */
top: 3px;
top: 2.4em;

/* Процентные значения от высоты родительского блока */
top: 10%;

/* Ключевое слово */
top: auto;

/* Глобальные значения */
top: inherit;
top: initial;
top: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Отрицательная, нулевая или положительная величина, которая представляет:
    - для _абсолютно позиционируемых элементов_ \&mdash расстояние от верхнего края содержащего их блока;
    - для _относительно позиционируемых элементов_ \&mdash расстояние, на которое элемент смещается вниз, относительно своего положения в нормальном потоке.
- {{cssxref("&lt;percentage&gt;")}}
  - : Процент от высоты родительского блока.
- `auto`
  - : Это ключевое слово, которое означает:
    - для _абсолютно спозиционированных элементов_ — позиция элемента опирается на свойство {{cssxref("bottom")}}, пока `height: auto` обрабатывается как высота в зависимости от содержимого; если так же и `bottom: auto`, то элемент располагается так же, как при статическом позиционировании.
    - для _относительно спозиционированных элементов_ — расстояние элемента от его обычной позиции основано на свойстве {{cssxref ("bottom")}}; если значение `bottom` также `auto`, элемент вообще не перемещается по вертикали.
- `inherit`
  - : Это ключевое слово указывает, что значение будет соответствовать вычисленному значению родительского блока (необязательно непосредственного родителя). Вычисляемое значение обрабатывается так же, как {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} или ключевое слово `auto`.

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
/* Для body могут быть использованы единицы px, также и для div */
body {
  width: 100%;
  height: 100%;
}

/* div теперь может использовать значения в процентах (body ширина и высота установлены) */
div {
  position: absolute;
  left: 15%;
  top: 30%;
  bottom: 30%;
  width: 70%;
  height: 40%;
  text-align: left;
  border: 3px rgb(0, 0, 0) solid;
}
```

```html
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
  <head>
    <meta http-equiv="Content-Type" content="application/xhtml+xml" />
    <title>Mozilla.org height top left width percentage CSS</title>
    <style type="text/css">
      /* Для body могут быть использованы единицы px, также и для div */
      body {
        width: 100%;
        height: 100%;
      }
      /* div теперь может использовать значения в процентах (body ширина и высота установлены) */
      div {
        position: absolute;
        left: 15%;
        top: 30%;
        bottom: 30%;
        width: 70%;
        height: 40%;
        text-align: left;
        border: 3px rgb(0, 0, 0) solid;
      }
    </style>
  </head>
  <body>
    <center>
      <div>...Some content...</div>
    </center>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
