---
title: Значения свойств CSS
slug: Learn/CSS/Building_blocks/Values_and_units
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

Каждое свойство используемое в CSS имеет значение или набор значений которые допустимы для этого свойства, и изучение страниц MDN со свойствами поможет вам понять какие значения валидны для того или иного свойства. В этом уроке мы рассмотрим некоторые наиболее общие значения и единицы в использовании.

| Prerequisites: | Basic computer literacy, [basic software installed](/en-US/Learn/Getting_started_with_the_web/Installing_basic_software), basic knowledge of [working with files](/en-US/Learn/Getting_started_with_the_web/Dealing_with_files), HTML basics (study [Introduction to HTML](/ru/docs/Learn/HTML/Introduction_to_HTML)), and an idea of how CSS works (study [CSS first steps](/ru/docs/Learn/CSS/First_steps).) |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objective:     | To learn about the different types of values and units used in CSS properties.                                                                                                                                                                                                                                                                                                                                 |

## Что такое значение CSS?

В спецификациях CSS и на страницах свойств здесь в MDN вы сможете определять (узнавать) значения, потому как они будут заключены в угловые скобки, например [`<color>`](/ru/docs/Web/CSS/color_value) или [`<length>`](/ru/docs/Web/CSS/length). Если вы видите значение `<color>` как действительное для определённого свойства это значит что вы можете использовать любой валидный цвет в качестве значение для этого свойства, как перечислено на странице [`<color>`](/ru/docs/Web/CSS/color_value)[.](/ru/docs/Web/CSS/color_value)

> **Примечание:** You'll also see CSS values referred to as _data types_. The terms are basically interchangeable — when you see something in CSS referred to as a data type, it is really just a fancy way of saying value.

> **Примечание:** Yes, CSS values tend to be denoted using angle brackets, to differentiate them from CSS properties (e.g. the {{cssxref("color")}} property, versus the [\<color>](/ru/docs/Web/CSS/color_value) data type). You might get confused between CSS data types and HTML elements too, as they both use angle brackets, but this is unlikely — they are used in very different contexts.

В следующем примере мы установили цвет нашего заголовка используя ключевое слово и фон используя функцию `rgb()`:

```css
h1 {
  color: black;
  background-color: rgb(197, 93, 161);
}
```

Значение в CSS это путь определения коллекции допустимых под-значений. То есть если вы видите `<color>` как применённый, то вам не надо озадачиваться какой из разных типов значения цвета может быть использован — ключевое слово, hex значение, функция `rgb()` и т.д. Вы можете воспользоваться _любым_ доступным значением `<color>` при условии, что они поддерживаются вашим браузером. Страницы для всех значений на MDN дадут вам информацию о поддержке браузеров. Например, если вы посмотрите на страницу [`<color>`](/ru/docs/Web/CSS/color_value) то вы увидите раздел совместимости браузеров в котором перечислены различные типы значений цвета и их поддержка.

Давайте посмотрим на некоторые типы значений и единиц с примерами чтобы вы могли опробовать различные возможные значения, с которыми вы можете часто сталкиваться.

## Числа, длины и проценты

Существуют различные типы числовых данных, которые вы можете использовать в CSS. Следующие типы классифицируются как числовые:

| Тип данных                                    | Описание                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integer>`](/ru/docs/Web/CSS/integer)       | `<integer>` (целое число) — целое число такое как `1024` или `-55`.                                                                                                                                                                                                                                                                                                                             |
| [`<number>`](/ru/docs/Web/CSS/number)         | `<number>` (число) представляет десятичное число — оно может иметь, а может и не иметь десятичную точку с факториальным компонентом, например `0.255`, `128`, или `-1.2`.                                                                                                                                                                                                                       |
| `<dimension>`                                 | `<dimension>` (измерение) это — `<number>` (число) с единицей измерения, прикреплённой к нему, например `45deg`, `5s`, или `10px`. `<dimension>` — это зонт категорий, включающих в себя типы [`<length>`](/ru/docs/Web/CSS/length), [`<angle>`](/ru/docs/Web/CSS/angle), [`<time>`](/ru/docs/Web/CSS/time), и [`<resolution>`](/ru/docs/Web/CSS/resolution) (длина, угол, время и разрешение). |
| [`<percentage>`](/ru/docs/Web/CSS/percentage) | `<percentage>` (проценты) представляют собой долю некоторого другого значения, например `50%`. Процентные значения всегда относительны по отношению к другому количеству, например длина элемента относительна к длине её родительского элемента.                                                                                                                                               |

### Длины

Числовой тип, с которым вы будете сталкиваться чаще всего это `<length>` (длина), например `10px` (пиксели) или `30em`. Существует два типа длин используемых в CSS — относительные и абсолютные. Важно знать разницу для того, чтобы понимать, насколько большими станут вещи.

#### Абсолютные единицы длины

Ниже приведены все единицы абсолютной длины — они не являются относительными к чему-либо и обычно считаются всегда одинакового размера.

| Единицы | Название                        | Эквивалент          |
| ------- | ------------------------------- | ------------------- |
| `cm`    | Centimeters/Сантиметры          | 1cm = 96px/2.54     |
| `mm`    | Millimeters/Миллиметры          | 1mm = 1/10th of 1cm |
| `Q`     | Quarter-millimeters/Четверть-мм | 1Q = 1/40th of 1cm  |
| `in`    | Inches/Дюймы                    | 1in = 2.54cm = 96px |
| `pc`    | Picas/Пики                      | 1pc = 1/6th of 1in  |
| `pt`    | Points/Точки                    | 1pt = 1/72th of 1in |
| `px`    | Pixels/Пиксели                  | 1px = 1/96th of 1in |

Большинство из этих значений больше полезны при использовании печати, чем для вывода на экран. Например, мы обычно не используем `cm` (сантиметры) на экране. Единственное значение которое вы в основном будете использовать это `px` (пиксели).

#### Единицы относительной длины

Относительные единицы длин являются относительными к чему-то ещё, возможно к размеру родительского шрифта или к размеру окна просмотра. Преимущество использования относительных единиц состоит в том, что при тщательном планировании вы можете сделать так, чтобы размер текста или других элементов масштабировался относительно всего остального на странице. Некоторые наиболее используемые единицы веб-разработки перечислены в таблице ниже.

| Единица | Относительна к                                           |
| ------- | -------------------------------------------------------- |
| `em`    | Размер шрифта родительского элемента.                    |
| `ex`    | x-высота шрифта элемента.                                |
| `ch`    | Предварительная мера (ширина) глифа "0" шрифта элемента. |
| `rem`   | Размер шрифта корневого элемента.                        |
| `lh`    | Высота строки элемента.                                  |
| `vw`    | 1% от ширины окна просмотра.                             |
| `vh`    | 1% от высоты окна просмотра.                             |
| `vmin`  | 1% от меньшего измерения ширины окна просмотра.          |
| `vmax`  | 1% от большего измерения ширины окна просмотра.          |

#### Изучение на примере

В примере ниже вы можете увидеть, как некоторые относительные и абсолютные единицы длин ведут себя. Первый блок имеет {{cssxref("width")}} (ширину) установленную в пикселях. Как абсолютная единица эта ширина будет оставаться такой же неважно что ещё измениться.

Второй блок имеет ширину, установленную в единицах `vw` (ширина окна просмотра). Это значение относительно к ширине окна просмотра и таким образом 10vw это 10 процентов от ширины окна просмотра. Если вы измените ширину окна вашего браузера, размер блока должен измениться, однако этот пример встроен в страницу с использованием [`<iframe>`](/ru/docs/Web/HTML/Element/iframe), поэтому это не сработает. Для того чтобы увидеть это в действии вы должны [открыть этот пример в отдельной вкладке браузера](https://mdn.github.io/css-examples/learn/values-units/length.html).

Третий блок использует единицы `em`. Они относительны к размеру шрифта. Я установил размер шрифта `1em` для содержимого {{htmlelement("div")}}, который имеет класс `.wrapper`. Измените это значение на `1.5em` и вы увидите что, размер шрифта всех этих элементов увеличится, но только последний объект станет шире, поскольку его ширина относительна к тому размера шрифта.

После выполнения инструкция выше, попробуйте поиграть со значениями и посмотрите, что у вас получится.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 820)}}

#### em и rem

`em` и `rem` — две относительные длины, с которыми вы вероятное всего сталкиваетесь чаще при разметке чего-либо от блоков до текста. Стоит понимать как они работают, понимать различия между ними, особенно когда вы начинаете переходить к более сложным темам как [стилизация текста](/ru/docs/Learn/CSS/Styling_text) или [разметка CSS](/ru/docs/Learn/CSS/CSS_layout). Приведённый ниже пример показывает это.

HTML это набор вложенных списков — у нас имеется три списка в общей сложности и оба примера имеют одинаковый HTML. Единственное различие в том, что первый имеет класс _ems,_ а второй класс _rems_.

Чтобы начать, мы установили 16px для размера шрифта элемента `<html>`.

**Повторим, единица em означает "размер шрифта родительского элемента"**. Элементы {{htmlelement("li")}} внутри {{htmlelement("ul")}} с классом `ems` получают свои размеры от своего родителя. Так, каждый последующий уровень вложения становится прогрессивно больше, так как каждый имеет свой размер шрифта установленный на `1.3em` — 1.3 раза от размера шрифта родителя.

**Повторим, единица rem означает "размер шрифта корневого элемента"** (rem значит "root em". (root - корень)). Элементы {{htmlelement("li")}} внутри {{htmlelement("ul")}} с классом `rems` получают свои размеры от корневого элемента (`<html>`). Это значит, что каждый последующий уровень вложения не продолжает увеличиваться.

Однако, если вы измените `font-size` (размер шрифта) `<html>` в CSS, вы увидите что все остальное изменится относительно ему — и `rem`- и `em`-размеры текста

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1000)}}

### Проценты

Во многих случаях проценты обрабатываются таким же образом, как и длина. С процентами фишка в том, что они всегда устанавливаются относительно некоторого другого значения. Например, если вы установите `font-size` элемента как проценты, то это будет процент от `font-size` родительского элемента. Если вы используете процент для значения `width` (ширина), то это будет процент от `width` родителя.

В примере ниже два блока с размерами в процентах и два с размерами в пикселях имеющих одинаковые имена классов. Оба набора имеют ширину 200px и 40% соответственно.

Различие в том, что второй набор блоков находится внутри обёртки которая имеет ширину 400 пикселей. Второй блок шириной в 200px имеет ту же ширину что и первый, но второй 40 процентный блок теперь имеет 40% от 400px — намного уже чем первый.

**Попробуйте изменить ширину обёртки (.wrapper) или процентное значение чтобы увидеть, как это работает.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 850)}}

В следующем примере размер шрифта установлен в процентах. Каждый `<li>` имеет `font-size` 80%, поэтому элементы вложенного списка становятся прогрессивно меньше так как они наследуют свои размеры от родителя.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 650)}}

Обратите внимание, в то время как многие значения принимают как длину, так и проценты, существуют те, которые принимают только длину. Вы можете посмотреть какие значения допустимы на справочной странице свойств MDN. Если допустимые значения включают [`<length-percentage>`](/ru/docs/Web/CSS/length-percentage), тогда вы можете использовать и длину, и проценты. Если же допустимые значения включают только `<length>`, то использование процентов невозможно.

### Числа

Некоторые значения принимают числа без каких-либо единиц измерения. Примером свойства принимающего числа без единиц измерения может служить свойство `opacity`, которое контролирует мутность элемента (настолько он прозрачен). Это свойство принимает числа между `0` (полностью прозрачное) и `1` (полностью мутное).

**В примере ниже, попробуйте изменить значение** **`opacity`** **на различные десятичные значения между** **`0`** **и** **`1`** **и посмотрите, как блок и его содержимое становится более и/или менее мутными.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 500)}}

> **Примечание:** Когда вы используете числа в CSS в качестве значений, они не должны быть заключены в кавычки.

## Цвет

Существует много способов определения цвета в CSS, некоторые из которых реализованы довольно-таки недавно по сравнению с другими. Одинаковые значения цвета могут использоваться везде в CSS, определяете ли вы при этом цвет текста, цвет фона или цвет чего-либо ещё.

Стандартная система цветов доступная в современных компьютерах — это 24-битная система, которая позволяет отображать около 16.7 миллионов отдельных цветов через комбинацию различных красных, зелёных и синих каналов с 256 различными значениями каждого канала (256 x 256 x 256 = 16,777,216). Давайте взглянем на некоторые способы, с помощью которых мы можем определять цвет в CSS.

> **Примечание:** В этом руководстве мы рассмотрим общие методы определения цвета, которые имеют хорошую поддержку браузерами; существуют и другие методы, но они не имеют столь же хорошей поддержки и являются менее общими.

### Ключевые слова цвета

Довольно часто в примерах как здесь, так и на других страницах в MDN вы будете видеть использование ключевых слов цвета, поскольку это простой и понятный способ определения цвета. Существует определённое количество этих ключевых слов и некоторые их них имеют довольно занимательные имена! Полный список вы можете посмотреть на странице значений [`<color>`](/ru/docs/Web/CSS/color_value) .

**Попробуйте поиграть с разными значениями цвета на живом примере ниже, чтобы понять больше об идее как они работают.**

### Шестнадцатеричные RGB значения

Следующий тип значения цвета, с которым вы сталкиваетесь вероятнее всего — это шестнадцатеричные коды. Каждое hex-значение состоит из символа решётки (#) за которым следуют 6 шестнадцатеричных чисел, каждое из которых может принимать одно из 16 значений от 0 до f (представляющая 15) — то есть `0123456789abcdef`. Каждая пара значений представляет один из каналов — красного, зелёного или синего цветов — и позволяет нам определять любой из 256 доступных значений для каждого (16 x 16 = 256).

Эти значения являются немного более сложными и менее простыми для понимания, но они намного более универсальны чем ключевые слова — вы можете использовать hex-значения чтобы отобразить любой цвет, который вы хотите использовать в своей цветовой схеме.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 700)}}

**И снова, попробуйте изменить значения, чтобы посмотреть, как варьируют цвета.**

### RGB и RGBA значения

Третья схема, о которой мы здесь поговорим это RGB. Значения RGB это функция — `rgb()` — которой даётся три параметра представляющих каналы красного, зелёного и синего значений цветов, во многом так же, как hex-значения. Отличие с RGB является то, что каждый канал представлен не двумя hex-цифрами, а десятичным числом между 0 и 255 — что отчасти проще в понимании.

Давайте перепишем наш последний пример используя RGB цвета:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 700)}}

А также вы можете использовать цвета RGBA — что работает в точности, как и цвета RGB и то есть вы можете использовать любое значение RGB, однако существует четвёртое значение, которое представляет альфа канал цвета, которое контролирует мутность. Если вы установите это значение на `0`, то это сделает цвет полностью прозрачным, тогда как `1` сделает его полностью мутным. Значения между дают вам разные уровни прозрачности.

> **Примечание:** Настройка альфа канала в цвете имеет одно ключевое различие в использовании свойства {{cssxref("opacity")}} которое мы рассматривали ранее. когда вы используете мутность вы делаете элемент и все внутри него мутным, тогда как при использовании цвета RGBA вы делаете мутным только тот цвет который вы специфицируете.

In the example below I have added a background image to the containing block of our colored boxes. I have then set the boxes to have different opacity values — notice how the background shows through more when the alpha channel value is smaller.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 770)}}

**In this example, try changing the alpha channel values to see how it affects the color output.**

> **Примечание:** At some point modern browsers were updated so that `rgba()` and `rgb()`, and `hsl()` and `hsla()` (see below), became pure aliases of each other and started to behave exactly the same. So for example both `rgba()` and `rgb()` accept colors with and without alpha channel values. Try changing the above example's `rgba()` functions to `rgb()` and see if the colors still work! Which style you use is up to you, but separating out non-transparent and transparent color definitions to use the different functions gives (very) slightly better browser support and can act as a visual indicator of where transparent colors are being defined in your code.

### HSL and HSLA values

Slightly less well-supported than RGB is the HSL color model (not supported on old versions of IE), which was implemented after much interest from designers. Instead of red, green, and blue values, the `hsl()` function accepts hue, saturation, and lightness values, which are used to distinguish between the 16.7 million colors, but in a different way:

- **Hue**: The base shade of the color. This takes a value between 0 and 360, representing the angles round a color wheel.
- **Saturation**: How saturated is the color? This takes a value from 0–100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
- **Lightness**: How light or bright is the color? This takes a value from 0–100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white)

We can update the RGB example to use HSL colors like this:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 700)}}

Just as RGB has RGBA, HSL has an HSLA equivalent, which gives you the same ability to specify the alpha channel. I've demonstrated this below by changing my RGBA example to use HSLA colors.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 770)}}

You can use any of these color values in your projects. It is likely that for most projects you will decide on a color palette and then use those colors — and your chosen method of specifying color — throughout the whole project. You can mix and match color models, however for consistency it is usually best if your entire project uses the same one!

## Images

The [`<image>`](/ru/docs/Web/CSS/image) data type is used wherever an image is a valid value. This can be an actual image file pointed to via a `url()` function, or a gradient.

In the example below we have demonstrated an image and a gradient in use as a value for the CSS `background-image` property.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 740)}}

> **Примечание:** there are some other possible values for `<image>`, however these are newer and currently have poor browser support. Check out the page on MDN for the [`<image>`](/ru/docs/Web/CSS/image) data type if you want to read about them.

## Position

The [`<position>`](/ru/docs/Web/CSS/position_value) data type represents a set of 2D coordinates, used to position an item such as a background image (via [`background-position`](/ru/docs/Web/CSS/background-position)). It can take keywords such as `top`, `left`, `bottom`, `right`, and `center` to align items with specific bounds of a 2D box, along with lengths, which represent offsets from the top and left-hand edges of the box.

A typical position value consists of two values — the first sets the position horizontally, the second vertically. If you only specify values for one axis the other will default to `center`.

In the following example we have positioned a background image 40px from the top and to the right of the container using a keyword.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 720)}}

**Play around with these values to see how you can push the image around.**

## Strings and identifiers

Throughout the examples above, we've seen places where keywords are used as a value (for example `<color>` keywords like `red`, `black`, `rebeccapurple`, and `goldenrod`). These keywords are more accurately described as _identifiers_, a special value that CSS understands. As such they are not quoted — they are not treated as strings.

There are places where you use strings in CSS, for example [when specifying generated content](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#Generating_content_with_before_and_after). In this case the value is quoted to demonstrate that it is a string. In the below example we use unquoted color keywords along with a quoted generated content string.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 550)}}

## Functions

The final type of value we will take a look at is the group of values known as functions. In programming, a function is a reusable section of code that can be run multiple times to complete a repetitive task with minimum effort on the part of both the developer and the computer. Functions are usually associated with languages like JavaScript, Python, or C++, but they do exist in CSS too, as property values. We've already seen functions in action in the Colors section — `rgb()`, `hsl()`, etc. The value used to return an image from a file — `url()` — is also a function.

A value that behaves more like something you might find in a traditional programming language is the `calc()` CSS function. This function gives you the ability to do simple calculations inside your CSS. It's particularly useful if you want to work out values that you can't define when writing the CSS for your project, and need the browser to work out for you at runtime.

For example, below we are using `calc()` to make the box `20% + 100px` wide. The 20% is calculated from the width of the parent container `.wrapper` and so will change if that width changes. We can't do this calculation beforehand because we don't know what 20% of the parent will be, so we use `calc()` to tell the browser to do it for us.

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 450)}}

## Summary

This has been a quick run through of the most common types of values and units you might encounter. You can have a look at all of the different types on the [CSS Values and units](/ru/docs/Web/CSS/CSS_Values_and_Units) reference page; you will encounter many of these in use as you work through these lessons.

The key thing to remember is that each property has a defined list of allowed values, and each value has a definition explaining what the sub-values are. You can then look up the specifics here on MDN.

For example, understanding that [`<image>`](/ru/docs/Web/CSS/image) also allows you to create a color gradient is useful but perhaps non-obvious knowledge to have!

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

## In this module

1. [Cascade and inheritance](/ru/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors)

   - [Type, class, and ID selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
   - [Attribute selectors](/ru/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
   - [Pseudo-classes and pseudo-elements](/ru/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
   - [Combinators](/ru/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [The box model](/ru/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Backgrounds and borders](/ru/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [Handling different text directions](/ru/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [Overflowing content](/ru/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [Values and units](/ru/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [Sizing items in CSS](/ru/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [Images, media, and form elements](/ru/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/ru/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/ru/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/ru/docs/Learn/CSS/Building_blocks/Organizing)
