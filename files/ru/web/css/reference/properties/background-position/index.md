---
title: background-position
slug: Web/CSS/Reference/Properties/background-position
original_slug: Web/CSS/background-position
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`background-position`** устанавливает начальную позицию для каждого фонового изображения. Положение относительно уровня положения, установленного {{cssxref("background-origin")}}.

{{InteractiveExample("CSS Demo: background-position")}}

```css interactive-example-choice
background-position: top;
```

```css interactive-example-choice
background-position: left;
```

```css interactive-example-choice
background-position: center;
```

```css interactive-example-choice
background-position: 25% 75%;
```

```css interactive-example-choice
background-position: bottom 50px right 100px;
```

```css interactive-example-choice
background-position: right 35% bottom 45%;
```

```html interactive-example
<section class="display-block" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: navajowhite;
  background-image: url("/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  height: 100%;
}
```

## Синтаксис

```css
/* Ключевые слова */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <процент> значения */
background-position: 25% 75%;

/* <отрезок> значения */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Несколько изображений */
background-position:
  0 0,
  center;

/* Значения смещения края */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Глобальные значения */
background-position: inherit;
background-position: initial;
background-position: unset;
```

Свойство `background-position` указывается в виде одного или нескольких значений [`<position>`](#position), разделённых запятыми.

### Значения

- `<position>`
  - : {{cssxref("&lt;position&gt;")}}. Позиция определяет координату x/y, чтобы разместить элемент относительно границ поля элемента. Она может быть определена с использованием одного и двух значений. Если используются два значения, первое значение предоставляет горизонтальную позицию, а второе представляет вертикальную позицию. Если указано только одно, второе значение считается `center`.**Синтаксис 1-значения:** значение может быть:
    - Значение ключевого слова `center`, которое центрирует изображение.
    - Одно из значений ключевых слов `top`, `left`, `bottom`, `right`. Оно указывает край, на который следует поместить элемент. Затем для другого измерения устанавливается значение 50%, таким образом элемент размещается в середине указанного края.
    - {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}}. Оно указывает координату X относительно левого края, с координатой Y установленной на 50%. **Синтаксис с 2-значениями:** одно из значений определяет X, а другое определяет Y. Каждое значение может быть:
      - Одно из значений ключевых слов `top`, `left`, `bottom`, `right`. Если здесь указаны `left` или `right`, то оно определяет X, а другое заданное значение определяет Y. Если даны `top` или `bottom`, то оно определяет Y, а другое значение определяет X.
    - {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}}. Если другое значение является `left` или `right`, то оно определяет Y, относительно верхнего края. Если другое значение `top` или `bottom`, то оно определяет X, относительно левого края. Если оба значения `<length>` или `<percentage>`, то первое определяет X, а второе Y.Обратите внимание,что:
      - Если одно значение `top` или `bottom`, то другое значение не может быть `top` или `bottom`.
    - Если одно значение является `left` или `right`, то другое значение не может быть `left` или `right`.Это означает, например, что `top top` и `left right` являются недействительные.

### Официальный синтаксис

{{csssyntax}}

## Примеры

Каждый из этих примеров использует свойство {{cssxref("background")}} для создания жёлтого, прямоугольного элемента, содержащего изображение звезды. В каждом примере, звезда находится в другой позиции. Третий пример иллюстрирует, как указать позиции для разных фоновых изображений в одном элементе.

### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
```

### CSS

```css
/* Общий среди всех <div>-ов */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* В этих примерах используется сокращённое свойство 'background' */
.exampleone {
  background: url("star-transparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("star-transparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* Несколько фоновых изображений: каждое изображение сопоставляется
   с соответствующей позицией, от первого указанного до последнего. */
.examplethree {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-position:
    0px 0px,
    right 3em bottom 2em;
}
```

### Результат

{{EmbedLiveSample('Examples', 420, 200)}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

### Quantum CSS заметки

- В Gecko есть ошибка, означающая, что `background-position` не может быть {{cssxref("transition","transitioned")}} между двумя значениями, содержащими разные числа значений {{cssxref("&lt;position&gt;")}}, для примера `background-position: 10px 10px;` and `background-position: 20px 20px, 30px 30px;` (смотрите [Firefox bug 1390446](https://bugzil.la/1390446)). Новый параллельный CSS движок Firefox (также известный как [Quantum CSS](https://wiki.mozilla.org/Quantum) или [Stylo](https://wiki.mozilla.org/Quantum/Stylo), который планируется выпустить в Firefox 57) исправляет это.

## Смотрите также

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Использование нескольких значений](/ru/docs/Web/CSS/Multiple_backgrounds)
- {{cssxref("transform-origin")}}
