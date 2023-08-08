---
title: Применение цвета к HTML-элементам с помощью CSS
slug: Web/CSS/CSS_colors/Applying_color
---

{{HTMLSidebar}}

Использование цвета - одна из фундаментальных форм человеческого восприятия, так дети экспериментируют с цветом ещё до того, как начинают осознанно рисовать. Возможно, именно поэтому цвет - одна из первых вещей, с которой люди хотят экспериментировать, изучая разработку веб-сайтов. С помощью [CSS](/ru/docs/Web/CSS), существует множество способов присвоить цвет [HTML](/ru/docs/Web/HTML) элементам, чтобы придать им желаемый вид. Эта статья даёт базовые представления о всех способах применения цвета к HTML-элементам с помощью CSS.

К счастью, присвоить цвет к HTML-элементу очень просто, и это можно сделать практически со всеми элементами.

Мы затронем большинство из того, что нужно знать при использовании цвета, включая [список элементов, которые могут иметь цвет, и необходимые для этого CSS-свойства](#что_может_иметь_цвет), [как задать цвет](#как_задать_цвет), и как [использовать его в таблицах стилей и в JS скриптах](#использование_цвета). Мы также рассмотрим как [предоставить возможность пользователю выбрать цвет](#предоставляем_возможность_пользователю_выбрать_цвет).

Завершим мы статью размышлениями на тему как [использовать цвет с умом](#using_color_wisely): как выбрать подходящий цвет, учитывая потребности людей с различными визуальными способностями.

## Что может иметь цвет

На уровне элементов HTML, всему можно присвоить цвет. С точки зрения отдельных составляющих элементов, таких как текст, границы и т.д., существует ряд свойств CSS, с помощью которых можно присвоить цвет.

На фундаментальном уровне, свойство {{cssxref ("color")}} определяет цвет текста HTML-элемента, а свойство {{cssxref ("background-color")}} - цвет фона элемента. Они работают практически для всех элементов.

### Текст

Эти свойства используются для определения цвета текста, его фона и любого оформления текста.

- {{cssxref("color")}}
  - : Свойство color применяется к тексту и любому [оформлению текста](/ru/docs/Learn/CSS/Styling_text/Fundamentals#Font_style_font_weight_text_transform_and_text_decoration), например: подчёркивание, линии на текстом, перечёркивание и т.д.
- {{cssxref("background-color")}}
  - : Цвет фона текста.
- {{cssxref("text-shadow")}}
  - : Добавляет и устанавливает параметры тени для текста. Один из параметров тени - это основной цвет, который размывается и смешивается с цветом фона на основе других параметров. См. [Text drop shadows](/ru/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows), чтобы узнать больше.
- {{cssxref("text-decoration-color")}}
  - : По умолчанию, элементы оформление текста (подчёркивание, перечёркивание) используют цвет свойства `color`. Но вы можете присвоить другой цвет с помощью свойства `text-decoration-color`.
- {{cssxref("text-emphasis-color")}}
  - : Цвет, который используется для выделения диакритических знаков, прилегающих к каждому текстовому символу. Это свойство используется преимущественно для восточноазиатских языков.
- {{cssxref("caret-color")}}
  - : Цвет, который используется для каретки ({{Glossary("caret")}}) (курсора ввода текста). Применимо только к редактируемым элементам, таким как {{HTMLElement ("input")}} и {{HTMLElement ("textarea")}} или элементам , для которых установлен атрибут [`contenteditable`](/ru/docs/Web/HTML/Global_attributes#contenteditable).

### Блоки

Каждый элемент представляет собой прямоугольный блок с каким-то содержимым, фоном и границей.

- {{cssxref("Borders")}}
  - : См. раздел [Borders](#borders) с перечнем свойств CSS, с помощью которых можно присвоить цвет границам блока.
- {{cssxref("background-color")}}
  - : Цвет фона блока.
- {{cssxref("column-rule-color")}}
  - : Цвет линий, которые разделяют колонки текста.
- {{cssxref("outline-color")}}
  - : Цвет контура, вокруг границы элемента. Этот контур отличается от границы элемента тем, что он не занимает место в документе и может перекрывать другой элемент. Обычно его используют как рамку-индикатор, чтобы показать какой элемент находится в фокусе.

### Границы

Вокруг любого элемента можно создать [границу](/ru/docs/Learn/CSS/Styling_boxes/Borders), т.е. линию вокруг содержимого элемента. См. [Box properties](/ru/docs/Learn/CSS/Building_blocks/The_box_model#box_properties), чтобы узнать больше про отношения между элементами и их границами, и статью [Оформляем Границы с Помощью CSS](/ru/docs/Learn/CSS/Styling_boxes/Borders), чтобы узнать больше про то, как применять стили к границам.

Существует краткая запись {{cssxref("border")}}, которая позволяет задать сразу все свойства границы, включая даже не связанные с цветом свойства, такие как толщина линии ([width](/ru/docs/Web/CSS/border-width)), стиль линии ([style](/ru/docs/Web/CSS/border-style)): сплошная (solid), штриховая (dashed) и так далее.

- {{cssxref("border-color")}}
  - : Задаёт единый цвет для всех сторон границы элемента.
- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, and {{cssxref("border-bottom-color")}}
  - : Позволяет установить цвет соответствующей стороне границы элемента: **border-left-color** - левая граница, **border-right-color** - правая, **border-top-color** - верхняя, **border-bottom-color** - нижняя.
- {{cssxref("border-block-start-color")}} and {{cssxref("border-block-end-color")}}
  - : С помощью этих свойств вы можете установить цвет границ, которые расположены ближе всего к началу и концу блока. Для письменности слева направо, начало границы блока - верхний край, а конец - нижний. Не путайте с началом и концом строки, где начало - это левый край, а конец - правый.
- {{cssxref("border-inline-start-color")}} and {{cssxref("border-inline-end-color")}}
  - : Эти свойства определяют цвет границы, расположенной ближе всего к началу и концу текста в блоке. Сторона начала и конца зависит от свойств {{cssxref("writing-mode")}}, {{cssxref("direction")}} и {{cssxref("text-orientation")}}, которые обычно (но не всегда) используются для настройки направления текста. Например, если текст отображается справа налево, то `border-inline-start-color` применяется к правой стороне границы.

### Как можно ещё использовать цвет

CSS не единственная web-технология, которая поддерживает цвет.

- HTML [Canvas API](/ru/docs/Web/API/Canvas_API)
  - : Позволяет создавать растровую 2D-графику в элементе {{HTMLElement("canvas")}}. См. [Canvas tutorial](/ru/docs/Web/API/Canvas_API/Tutorial), чтобы узнать больше.
- [SVG](/ru/docs/Web/SVG) (Scalable Vector Graphics - Масштабируемая Векторная Графика)
  - : Позволяет создавать изображения с помощью команд, которые рисуют определённые фигуры, узоры, линии для создания конечного изображения. Команды SVG форматируются в XML, и могут размещаться непосредственно на веб-странице, или в элементе {{HTMLElement ("img")}}, как и любое другое изображение.
- [WebGL](/ru/docs/Web/API/WebGL_API)
  - : Библиотека Веб-Графики (The Web Graphics Library) - это кроссплатформенный API на основе OpenGL ES, используется для создания высокопроизводительной 2D и 3D-графики в браузере. См. [Learn WebGL for 2D and 3D](/ru/docs/Learn/WebGL), чтобы узнать больше..

## Как задать цвет

Для того чтобы задать цвет в CSS, необходимо найти способ как перевести понятие "цвета" в цифровой формат, который может использовать компьютер. Обычно это делают разбивая цвет на компоненты, например какое количество единиц основных цветов содержится в данном цвете или степень яркости. Соответственно, есть несколько способов как можно задать цвет в CSS.

Подробнее о каждом значения цвета, можно прочитать в статье про CSS {{cssxref("&lt;color&gt;")}}.

### Ключевые слова

Существует набор названий цветов стандартной палитры, который позволяет использовать ключевые слова вместо числового значения цвета. Ключевые слова включают основные и вторичные цвета (такие как красный (`red`), синий (`blue`), или оранжевый (`orange`)), оттенки серого (от чёрного (`black`) к белому (`white`), включая такие цвета как темносерый (`darkgray`) или светло-серый (`lightgrey`)), а также множество других смешанных цветов: `lightseagreen`, `cornflowerblue`, и `rebeccapurple`.

См. [Color keywords](/ru/docs/Web/CSS/color_value#ключевые_цвета) - полный перечень всех доступных ключевых слов.

### RGB значения

Есть три способа передачи RGB цвета в CSS.

#### Шестнадцатеричная запись в виде строки

Шестнадцатеричная запись передаёт цвет, используя шестнадцатеричные числа, которые передают каждый компонент цвета (красный, зелёный и синий). Запись также может включать четвёртый компонент: альфа-канал (или прозрачность). Каждый компонент цвета может быть представлен как число от 0 до 255 (0x00 - 0xFF) или, опционально, как число от 0 до 15 (0x0 - 0xF). Каждый компонент _необходимо_ задавать используя одинаковое количество чисел. Так, если вы используете однозначное число, то итоговый цвет рассчитывается используя число каждого компонента дважды: `"#D"` превращается в `"#DD"`.

Цвет в шестнадцатеричной записи всегда начинается с символа `"#"`. После него начинаются шестнадцатеричные числа цветового кода. Запись не зависит от регистра.

- `"#rrggbb"`
  - : Задаёт полностью непрозрачный цвет, у которого компонент красного цвета представлен шестнадцатеричным числом `0xrr`, зелёного - `0xgg` и синего - `0xbb`.
- `"#rrggbbaa"`
  - : Задаёт цвет, у которого компонент красного представлен шестнадцатеричным числом `0xrr`, зелёного - `0xgg` и синего - `0xbb`. Альфа канал представлен `0xaa`; чем ниже значение, тем прозрачнее становится цвет.
- `"#rgb"`
  - : Задаёт цвет, у которого компонент красного представлен шестнадцатеричным числом `0xr`, зелёного - `0xg` и синего - `0xb`.
- `"#rgba"`
  - : Задаёт цвет, у которого компонент красного представлен шестнадцатеричным числом `0xr`, зелёного - `0xg` и синего - `0xb`. Альфа канал представлен `0xa`; чем ниже значение, тем прозрачнее становится цвет.

Например, вы можете представить непрозрачный ярко-синий цвет как `"#0000ff"` или `"#00f"`. Для того, чтобы сделать его на 25% прозрачным, вы можете использовать `"#0000ff44"` или `"#00f4"`.

#### RGB запись в виде функции

RGB запись в виде функции, как и шестнадцатеричная запись, представляет цвет, используя красный, зелёный и синий компоненты (также, опционально можно использовать компонент альфа канала для прозрачности). Но, вместо того, чтоб использовать строку, цвет определяется CSS функцией {{cssxref("rgb()")}}. Данная функция принимает как вводные параметры значения красного, зелёного и синего компонентов и, опционально, четвёртого компонента - значение альфа канала.

Допустимые значения для каждого из этих параметров:

- `red`, `green`, и `blue`
  - : Каждый параметр должен иметь {{cssxref("&lt;integer&gt;")}} значение между 0 и 255 (включительно), или {{cssxref("&lt;percentage&gt;")}} от 0% до 100%.
- `alpha`
  - : Альфа канал - это числовое значение между 0.0 (полностью прозрачный) и 1.0 (полностью непрозрачный). Также можно указать значение в процентах, где 0% соответствует 0.0, а 100% - 1.0.

Например, ярко-красный с 50% прозрачностью может быть представлен как `rgb(255, 0, 0, 0.5)` или `rgb(100%, 0, 0, 50%)`.

### HSL запись в виде функции

Дизайнеры часто предпочитают использовать цветовую модель [HSL](https://ru.wikipedia.org/wiki/HSL), где H - Hue (оттенок), S - Saturation (насыщенность), L - Lightness or Luminance (светлота). В браузерах HSL цвет представлен через запись HSL в виде функции. CSS функция `hsl()` очень похожа на `rgb()` функцию.

![HSL color cylinder](640px-hsl_color_solid_cylinder.png)

_**Рис. 1. Цилиндрическая модель HSL.** Hue (оттенок) определяет фактический цвет, основанный на положении вдоль цветового круга, представляя цвета видимого спектра. Saturation (насыщенность) представляет собой процентное соотношение оттенка от серого до максимально насыщенного цвета. По мере увеличения значения luminance/ lightness (светлоты) цвет переходит от самого тёмного к самому светлому (от чёрного к белому). Изображение представлено пользователем [SharkD](http://commons.wikimedia.org/wiki/User:SharkD) в [Wikipedia](https://www.wikipedia.org/), распространяется на правах лицензии [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0) ._

Значение компонента _оттенок_ (H) цветовой модели HSL определяется углом при движении вдоль окружности цилиндра от красного через жёлтый, зелёный, голубой, синий и маджента, и заканчивая через 360° снова красным. Данное значение определяет базовый цвет. Его можно задать в любых единицах, поддерживаемых CSS-свойством {{cssxref("&lt;angle&gt;")}}, а именно - в градусах (`deg`), радианах (`rad`), градиентах (`grad`) или поворотах (`turn`). Но компонент _оттенок_ никак не влияет на то, насколько насыщенным, ярким или темным будет цвет.

Компонент _насыщенность_ (S) определяет количество конечного цвета из которого состоит указанный оттенок. Остальное определяется уровнем серого цвета, которое указывает компонент luminance/ lightness (L).

Подумайте об этом как о создании идеального цвета краски:

1. Вы начинаете с базовой краски, т.е. с максимально возможной интенсивности данного цвета. Например, наиболее насыщенный синий, который может быть представлен на экране пользователя. Это компонент _hue (оттенок)_: значение представляющее **угол** вокруг цветового круга для насыщенного оттенка, который мы хотим использовать в качестве нашей базы.
2. Далее выберете краску серого оттенка, которая будет соответствовать тому, насколько ярким вы хотите сделать цвет. Это _luminance/ lightness (яркость)_. Вы хотите, чтобы цвет был очень ярким, практически белым или очень темным, ближе к чёрному, или что-то среднее? Данный компонент определяется в процентах, где 0% - совершенный чёрный цвет и 100% - совершенный белый (независимо от насыщенности или оттенка). Средние значения - это буквальная серая область.
3. Теперь, когда у есть серый цвет и идеально насыщенный цвет, вам необходимо их смешать. Компонент _saturation (насыщенность)_ определяет какой процент конечного цвета должен состоять из идеально насыщенного цвета. Остаток конечного цвета формируется серым цветом, который представляет насыщенность.

Опционально вы также можете включить альфа-канал, чтобы сделать цвет менее прозрачным.

Вот несколько примеров цвета в HSL записи:

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">Color in HSL notation</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg, 100%, 50%)</code></td>
      <td style="background-color: hsl(90deg, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td style="background-color: hsl(90, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 50%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 50%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 50%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg, 90%, 50%)</code></td>
      <td style="background-color: hsl(270deg, 90%, 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("hsl-swatches", 300, 260)}}

> **Примечание:** Обратите внимание, что, когда вы не указываете единицу измерения оттенка (hue), то предполагается, что он указан в градусах (`deg`).

## Использование цвета

Теперь, когда вы знаете какие существуют свойства CSS для присваивания цвета к элементам и какие есть форматы описания цвета, вы можете соединить это вместе, чтобы начать использовать цвет. Как вы уже видели в списке под разделом [Что может иметь цвет](#что_может_иметь_цвет), существует множество вещей, к которым можно применить цвет, используя CSS. Давайте взглянем на это с двух сторон: использовать цвет в таблицах стилей ({{Glossary("stylesheet")}}) и добавлять, изменять цвет, используя {{Glossary("JavaScript")}} код.

### Цвет в таблицах стилей CSS

Самый простой способ присвоить цвет элементу и то, как это обычно делается - это просто указать цвет в CSS. Мы не будем останавливаться на каждом из вышеупомянутых свойств, а просто рассмотрим несколько примеров. Где бы вы не использовали цвет, принцип один и тот же.

Давайте начнём наш пример с результата, который нам нужно достичь:

{{EmbedLiveSample("Цвет_в_таблицах_стилей_CSS", 650, 150)}}

#### HTML

HTML, который создаёт вышеупомянутый пример:

```html
<div class="wrapper">
  <div class="box boxLeft">
    <p>This is the first box.</p>
  </div>
  <div class="box boxRight">
    <p>This is the second box.</p>
  </div>
</div>
```

Все довольно просто: первый {{HTMLElement("div")}} используется как обёртка (wrapper) содержимого, которое состоит из ещё двух `<div>`, каждый из которых содержит один параграф ({{HTMLElement("p")}}) и имеет свой стиль.

Все волшебство, как всегда, происходит в CSS, где мы и будем присваивать цвет к данным HTML-элементам..

#### CSS

CSS мы рассмотрим более детально, чтобы по очереди проанализировать все интересные части.

```css
.wrapper {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}
```

Класс `.wrapper` определяет стиль для элемента {{HTMLElement("div")}}, который заключает в себе все остальные элементы. Он устанавливает размер контейнера с помощью свойств ширины {{cssxref("width")}}, высоты {{cssxref("height")}}, внешних {{cssxref("margin")}} и внутренних {{cssxref("padding")}} полей.

Но больше всего нас интересует свойство граница {{cssxref("border")}}, которое устанавливает границу вокруг внешнего края элемента. Данная граница представлена сплошной линией, шириной в 6 пикселей, светло-бирюзового цвета (`mediumturquoise`).

Два цветных блока имеют ряд одинаковых свойств, поэтому далее мы установим класс `.box`, который определит эти общие свойства:

```css
.box {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Вкратце класс `.box` устанавливает размер каждого блока и параметры шрифта. Также мы используем [CSS Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout), чтобы с лёгкостью отцентрировать содержимое каждого блока. Мы включаем режим `flex` с помощью {{cssxref("display", "display: flex")}}, и присваиваем значение center {{cssxref("justify-content")}} и {{cssxref("align-items")}}. Затем мы создаём отдельные классы для каждого из двух блоков, которые определят индивидуальные свойства.

```css
.boxLeft {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}
```

Класс `.boxLeft`, который используется для стилизации левого блока, выравнивает контейнер по левому краю и присваивает цвета:

- {{cssxref("background-color")}} определяет цвет фона блока значением `rgb(245, 130, 130)`.
- {{cssxref("outline")}}, в отличие от привычного нам свойства `border`, не влияет на положение блока и его ширину. `Outline` представлен сплошной, темно-красной линией, шириной в 2 пикселя. Обратите внимание на ключевое слово `darkred`, которое используется для определение цвета.
- Обратите внимание, что мы не определяем значение цвета текста. Это означает, что свойство {{cssxref("color")}} будет унаследовано от ближайшего родительского элемента, у которого это свойство определено. По умолчанию это чёрный цвет.

```css
.boxRight {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}
```

Класс `.boxRight` описывает свойства правого блока. Блок выравнивается по правому краю и становится рядом с предыдущим блоком. Затем определяются следующие цвета:

- `background-color` определяется значением HSL: `hsl(270deg, 50%, 75%)`. Это светло-фиолетовый цвет.
- `Outline` блока определяет, что вокруг блока должна быть прерывистая линия, шириной в четыре пикселя, фиолетового цвета немного темнее, чем цвет фона (`rgb(110, 20, 120)`).
- Цвет текста определяется свойством {{cssxref("color")}}, значение которого `hsl(0deg, 100%, 100%)`. Это один из многих способов задать белый цвет.
- С помощью {{cssxref("text-decoration")}} мы добавляем зелёную волнистую линию под текстом.
- И наконец, свойство {{cssxref("text-shadow")}} добавляет небольшую чёрную тень тексту.

## Предоставляем возможность пользователю выбрать цвет

There are many situations in which your web site may need to let the user select a color. Perhaps you have a customizable user interface, or you're implementing a drawing app. Maybe you have editable text and need to let the user choose the text color. Or perhaps your app lets the user assign colors to folders or items. Although historically it's been necessary to implement your own color picker, HTML now provides support for browsers to provide one for your use through the {{HTMLElement("input")}} element, by using `"color"` as the value of its [`type`](/ru/docs/Web/HTML/Element/input#type) attribute.

The `<input>` element represents a color only in the [hexadecimal string notation](#hexadecimal_string_notation) covered above.

### Example: Picking a color

Let's look at a simple example, in which the user can choose a color. As the user adjusts the color, the border around the example changes to reflect the new color. After finishing up and picking the final color, the color picker's value is displayed.

{{EmbedLiveSample("Example_Picking_a_color", 525, 275)}}

> **Примечание:** On macOS, you indicate that you've finalized selection of the color by closing the color picker window.

#### HTML

The HTML here creates a box that contains a color picker control (with a label created using the {{HTMLElement("label")}} element) and an empty paragraph element ({{HTMLElement("p")}}) into which we'll output some text from our JavaScript code.

```html
<div id="box">
  <label for="colorPicker">Border color:</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <p id="output"></p>
</div>
```

#### CSS

The CSS simply establishes a size for the box and some basic styling for appearances. The border is also established with a 2-pixel width and a border color that won't last, courtesy of the JavaScript below\...

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### JavaScript

The script here handles the task of updating the starting color of the border to match the color picker's value. Then two event handlers are added to deal with input from the [`<input type="color">`](/ru/docs/Web/HTML/Element/input/color) element.

```js
let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  function (event) {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  function (event) {
    output.innerText = "Color set to " + colorPicker.value + ".";
  },
  false,
);
```

The {{event("input")}} event is sent every time the value of the element changes; that is, every time the user adjusts the color in the color picker. Each time this event arrives, we set the box's border color to match the color picker's current value.

The {{event("change")}} event is received when the color picker's value is finalized. We respond by setting the contents of the `<p>` element with the ID `"output"` to a string describing the finally selected color.

## Using color wisely

Making the right choices when selecting colors when designing a web site can be a tricky process, especially if you aren't well-grounded in art, design, or at least basic color theory. The wrong color choice can render your site unattractive, or even worse, leave the content unreadable due to problems with contrast or conflicting colors. Worse still, if using the wrong colors can result in your content being outright unusable by people withcertain vision problems, particularly color blindness.

### Finding the right colors

Coming up with just the right colors can be tricky, especially without training in art or design. Fortunately, there are tools available that can help you. While they can't replace having a good designer helping you make these decisions, they can definitely get you started.

#### Base color

The first step is to choose your **base color**. This is the color that in some way defines your web site or the subject matter of the site. Just as we associate green with the beverage Mountain Dew and one might think of the color blue in relationship with the sky or the ocean, choosing an appropriate base color to represent your site is a good place to start. There are plenty of ways to select a base color; a few ideas include:

- A color that is naturally associated with the topic of your content, such as the existing color identified with a product or idea or a color representative of the emotion you wish to convey.
- A color that comes from imagery associated with what your content is about. If you're creating a web site about a given item or product, choose a color that's physically present on that item.
- Browse web sites that let you look at lots of existing color palettes and imags to find inspiration.

When trying to decide upon a base color, you may find that browser extensions that let you select colors from web content can be particularly handy. Some of these are even specifically designed to help with this sort of work. For example, the web site [ColorZilla](http://www.colorzilla.com/) offers an extension ([Chrome](http://www.colorzilla.com/chrome) / [Firefox](http://www.colorzilla.com/firefox)) that offers an eyedropper tool for picking colors from the web. It can also take averages of the colors of pixels in various sized areas or even a selected area of the page.

> **Примечание:** The advantage to averaging colors can be that often what looks like a solid color is actually a surprisingly varied number of related colors all used in concert, blending to create a desired effect. Picking just one of these pixels can result in getting a color that on its own looks very out of place.

#### Fleshing out the palette

Once you have decided on your base color, there are plenty of online tools that can help you build out a palette of appropriate colors to use along with your base color by applying color theory to your base color to determine appropriate added colors. Many of these tools also support viewing the colors filtered so you can see what they would look like to people with various forms of color blindness. See [Color and accessibility](#color_and_accessibility) for a brief explanation of why this matters.

A few examples (all free to use as of the time this list was last revised):

- [MDN's color picker tool](/ru/docs/Web/CSS/CSS_Colors/Color_picker_tool)
- [Paletton](http://paletton.com)
- [Adobe Color CC online color wheel](https://color.adobe.com/create/color-wheel)

When designing your palette, be sure to keep in mind that in addition to the colors these tools typically generate, you'll probably also need to add some core neutral colors such as white (or nearly white), black (or nearly black), and some number of shades of gray.

> **Примечание:** Usually, you are far better off using the smallest number of colors possible. By using color to accentuate rather than adding color to everything on the page, you keep your content easy to read and the colors you do use have far more impact.

### Color theory resources

A full review of color theory is beyond the scope of this article, but there are plenty of articles about color theory available, as well as courses you can find at nearby schools and universities. A couple of useful resources about color theory:

- [Color Science](https://www.khanacademy.org/partner-content/pixar/color) ([Khan Academy](https://www.khanacademy.org/) in association with [Pixar](https://www.pixar.com/))
  - : An online course which introduces concepts such as what color is, how it's percieved, and how to use colors to express ideas. Presented by Pixar artists and designers.

### Color and accessibility

There are several ways color can be an {{Glossary("accessibility")}} problem. Improper or careless use of color can result in a web site or app that a percentage of your target audience may not be able to use adequately, resulting in lost traffic, lost business, and possibly even a public relations problem. So it's important to consider your use of color carefully.

You should do at least basic research into color blindness. There are several kinds; the most common is red-green color blindness, which causes people to be unable to differentiate between the colors red and green. There are others, too, ranging from inabilities to tell the difference between certain colors to total inability to see color at all.

> **Примечание:** The most important rule: never use color as the only way to know something. If, for example, you indicate success or failure of an operation by changing the color of a shape from white to green for success and red for failure, users with red-green color-blindness won't be able to use your site properly. Instead, perhaps use both text and color together, so that everyone can understand what's happening.

For more information about color blindness, see the following articles:

- [Medline Plus: Color Blindness](https://medlineplus.gov/colorblindness.html) (United States National Institute of Health)
- [American Academy of Ophthamology: What Is Color Blindness?](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [Color Blindness & Web Design](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html) (Usability.gov: United States Department of Health and Human Services)

### Palette design example

Let's consider a quick example of selecting an appropriate color palette for a site. Imagine that you're building a web site for a new game that takes place on the planet Mars. So let's do a [Google search for photos of Mars](https://www.google.com/search?q=Mars&tbm=isch). Lots of good examples of Martian coloration there. We carefully avoid the mockups and the photos from movies. And we decide to use a photo taken by one of the Mars landers humanity has parked on the surface over the last few decades, since the game takes place on the planet's surface. We use a color picker tool to select a sample of the color we choose.

Using an eyedropper tool, we identify a color we like and determine that the color in question is `#D79C7A`, which is an appropriate rusty orange-red color that's so stereotypical of the Martian surface.

Having selected our base color, we need to build out our palette. We decide to use [Paletteon](http://www.paletteon.com/) to come up with the other colors we need. Upon opening Paletton, we see:

![Right after loading Paletton.](paletton1.png)

Next, we enter our color's hex code (`D79C7A`) into the "Base RGB" box at the bottom-left corner of the tool:

![After entering base color](paletton2.png)

We now see a monochromatic palette based on the color we picked from the Mars photo. If you need a lot of related colors for some reason, those are likely to be good ones. But what we really want is an accent color. Something that will pop along side the base color. To find that, we click the "add complementary" toggle underneath the menu that lets you select the palette type (currently "Monochromatic"). Paletton computes an appropriate accent color; clicking on the accent color down in the bottom-right corner tells us that this color is `#508D7C`.

![Now with complementary colors included.](paletton3.png)

If you're unhappy with the color that's proposed to you, you can change the color scheme, to see if you find something you like better. For example, if we don't like the proposed greenish-blue color, we can click the Triad color scheme icon, which presents us with the following:

![Triad color scheme selected](paletton4.png)

That greyish blue in the top-right looks pretty good. Clicking on it, we find that it's `#556E8D`. That would be used as the accent color, to be used sparingly to make things stand out, such as in headlines or in the highlighting of tabs or other indicators on the site:

![Triad color scheme selected](paletton-color-detail.png)

Now we have our base color and our accent. On top of that, we have a few complementary shades of each, just in case we need them for gradients and the like. The colors can then be exported in a number of formats so you can make use of them.

Once you have these colors, you will probably still need to select appropriate neutral colors. Common design practice is to try to find the sweet spot where there's just enough contrast that the text is crisp and readable but not enough contrast to become harsh for the eyes. It's easy to go too far in one way or another so be sure to get feedback on your colors once you've selected them and have examples of them in use available. If the contrast is too low, your text will tend to be washed out by the background, leaving it unreadable, but if your contrast is too high, the user may find your site garish and unpleasant to look at.

## See also

- [Drawing graphics](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Graphics on the web](/ru/docs/Web/Guide/Graphics)
- [MDN's color picker tool](/ru/docs/Tools/DevToolsColors)
