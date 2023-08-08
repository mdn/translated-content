---
title: Градиенты
slug: Web/SVG/Tutorial/Gradients
---

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}

Возможность создания и использования градиентов, также как заливки и обводки, более интересна, чем просто заливка или обводка.

Есть два типа градиентов: линейный и радиальный. Вы должны присвоить градиенту атрибут `id`, в противном случае на него не смогут ссылаться другие элементы внутри файла. Градиенты определяются в секции `defs`, а не в самой фигуре. Это позволяет их использовать многократно.

## Линейный градиент (Linear Gradient)

Линейные градиенты изменяются вдоль прямой линии. Чтобы вставить градиент, нужно создать ноду {{SVGElement('linearGradient')}} внутри секции `<defs>` SVG файла.

### Basic example

```html
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop class="stop1" offset="0%" />
      <stop class="stop2" offset="50%" />
      <stop class="stop3" offset="100%" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="red" />
      <stop offset="50%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <style type="text/css">
      <![CDATA[
              #rect1 { fill: url(#Gradient1); }
              .stop1 { stop-color: red; }
              .stop2 { stop-color: black; stop-opacity: 0; }
              .stop3 { stop-color: blue; }
            ]]>
    </style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient2)" />
</svg>
```

{{ EmbedLiveSample('SVGLinearGradient','120','240','/files/722/SVG_Linear_Gradient_Example.png') }}

Выше находится пример линейного градиента, который применён к элементу `<rect>`. Внутри линейного градиента есть несколько {{SVGElement('stop')}} нод.. Эти ноды сообщают градиенту, какой цвет он должен использовать в позициях, определённых атрибутом `offset` для позиции и атрибутом `stop-color`. Это может быть задано прямо в SVG или через CSS. В целях этого примера оба метода были смешаны. Например, _Gradient1_ начинается с красного цвета, изменяется до прозрачно-чёрного в середине и заканчивается синим цветом. Вы можете вставить столько стоп-цветов, сколько нужно, чтобы создать смесь, которая будет красивой или ужасной, как вам нужно. Границы всегда должны изменяться от 0% (или от 0, если вы хотите опустить знак %) до 100% (или 1). Повторяющиеся значения будут использовать стоп, который будет находится дальше всех по XML-дереву. Также, подобно заливке и обводке, вы можете определить атрибут `stop-opacity`, чтобы задать прозрачность в этой позиции (опять же, в FF3+ можно также использовать rgba-значения для этого).

```
 <stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```

Чтобы использовать градиент, мы должны сослаться на него из атрибутов объекта `fill/stroke`. Это делается таким же образом, как вы ссылаетесь на элементы в CSS, используя `url`. В этом случае, url - это просто ссылка на наш градиент, которому задан уникальный ID, "_Gradient"._ Чтобы добавить его, установим `fill="url(#Gradient)"`. Наш объект теперь многоцветный. То же самое можно сделать с атрибутом `stroke`.

Элемент `<linearGradient>` также принимает некоторые другие атрибуты, который определяют размер и внешний вид градиента. Направление градиента контролируется двумя точками, обозначенными атрибутами `x1, x2, y1, y2`. Эти атрибуты определяют линию, вдоль которой двигается градиент. По умолчанию градиент имеет горизонтальную ориентацию, но это может быть изменено с помощью этих атрибутов. Gradient2 в примере выше предназначен для создания вертикального градиента.

```
 <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
```

> **Примечание:** Вы также можете использовать атрибут `xlink:href` для градиентов. Когда он использован, атрибуты и стопы из одного градиента могут быть включены в другой. В примере выше можно было бы не пересоздавать все точки остановки в Gradient2.
>
> ```
>  <linearGradient id="Gradient1">
>    <stop id="stop1" offset="0%"/>
>    <stop id="stop2" offset="50%"/>
>    <stop id="stop3" offset="100%"/>
>  </linearGradient>
>  <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1"
>     xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Gradient1"/>
> ```
>
> Я включил пространство имён xlink прямо в ноду, хотя обычно вы хотели бы определить его в верхней части вашего документа. Подробнее об этом мы [поговорим в разделе изображений](/en-US/Web/SVG/Tutorial/Other_content_in_SVG).

## Радиальные градиенты

Радиальные градиенты похожи на линейные, но рисуют градиент, который "излучается" из точки. Для создания градиента вам необходимо добавить элемент {{SVGElement('radialGradient')}} в секцию **defs**.

### Basic example

```html
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="RadialGradient1">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient1)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#RadialGradient2)" />
</svg>
```

{{ EmbedLiveSample('Basic_example_2','120','240','/files/726/SVG_Radial_Gradient_Example.png') }}

Атрибуты **stop**, используемые здесь - отвечают за то же, что и в линейных градиентах. Однако сейчас объект будет красным в центре и постепенно меняться к синему цвету, "двигаясь" к краям. Как и линейный градиент, элемент `<radialGradient>` может иметь несколько атрибутов, описывающих его позицию и ориентацию (направленность?). Однако, в отличие от линейных градиентов, радиальные немного сложнее. Радиальные градиенты задаются двумя "точками", которые определят где будут границы. Первая "точка" определяет окружность, где градиент заканчивается. Для этого нам потребуется центр круга, который обозначается как **cx** и **cy**, и радиус - **r**. Изменяя эти атрибуты, вы можете "двигать" внешнюю границу градиента и менять её размер, как показано во втором прямоугольнике выше.

Вторая "точка" называется **фокальной** и задаётся атрибутами **fx** и **fy**. В то время как первые "точки" указывают на внешнюю границу градиента, фокальная "точка" определяет где должна быть его **середина**. Это легко увидеть на примере.

### Center and focal point

```html
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#Gradient)"
    stroke="black"
    stroke-width="2" />

  <circle
    cx="60"
    cy="60"
    r="50"
    fill="transparent"
    stroke="white"
    stroke-width="2" />
  <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
  <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">
    (fx,fy)
  </text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">
    (cx,cy)
  </text>
</svg>
```

{{ EmbedLiveSample('Center_and_focal_point','120','120','/files/727/SVG_Radial_Grandient_Focus_Example.png') }}

Если фокальная точка передвинута за границы круга, то градиент будет отрисован некорректно. Поэтому фокальная точка обязательно должна быть внутри границы круга (или на самой границе). Если фокальная точка не указана, то по дефолту она совпадает с центром круга.

Линейный и радиальный градиенты также принимают несколько атрибутов, описывающих как они могут изменяться. Единственный атрибут, о котором я хотел бы рассказать более подробно - это **`spreadMethod`**`. Этот атрибут указывает, что должно происходить, когда градиент "достигает" внешней границы градиента, но объект ещё не заполнен. Аттрибут может принимать одно и трёх значений:`"pad", "reflect", или"repeat". "**Pad**" - это то что вы пока что видели: когда градиент достигает "краёв", финальный цвет используется для заполнения оставшейся области. "Reflect" - градиент продолжает "двигаться" в "зеркальном" отражении (стартовый цвет берётся из 100%, а конечный из 0%). А затем снова "переворачивается". И так до тех пор пока не достигнет края.

### spreadMethod

```html
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient
      id="GradientPad"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="pad">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientRepeat"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="repeat">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
    <radialGradient
      id="GradientReflect"
      cx="0.5"
      cy="0.5"
      r="0.4"
      fx="0.75"
      fy="0.75"
      spreadMethod="reflect">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="blue" />
    </radialGradient>
  </defs>

  <rect
    x="10"
    y="10"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientPad)" />
  <rect
    x="10"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientRepeat)" />
  <rect
    x="120"
    y="120"
    rx="15"
    ry="15"
    width="100"
    height="100"
    fill="url(#GradientReflect)" />

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">
    Pad
  </text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Repeat
  </text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">
    Reflect
  </text>
</svg>
```

{{ EmbedLiveSample('spreadMethod','220','220','/files/728/SVG_SpreadMethod_Example.png') }}

У обоих типов градиентов также есть атрибут **`gradientUnits`**, который описывает систему измерений, которую вы собираетесь использовать, когда описываете размеры или ориентацию или градиент. Данный атрибут принимает 2 возможных значения: **`userSpaceOnUse`** или **`objectBoundingBox`** (дефолтное, показывалось во всех примерах выше). **`objectBoundingBox`** автоматически адаптирует градиент к размеру объекта, так что вы можете указать координаты в виде значений от 0 до 1, и браузер автоматически их отпозиционирует. **`userSpaceOnUse`** позиционирует градиент в абсолютных единицах измерения, так что вам необходимо знать где находится целевой объект, чтобы правильно применить к нему градиент. radialGradient выше может быть переписан:

```
 <radialGradient id="Gradient" cx="60" cy="60" r="50" fx="35" fy="35" gradientUnits="userSpaceOnUse">
```

Вы также можете применить иную трансформацию к градиенту, используя атрибут **`gradientTransform`**, но мы пока что [его не изучали](/en-US/Web/SVG/Tutorial/Basic_Transformations), я оставлю это на потом.

Существуют и другие предостережения для работы с
`gradientUnits="objectBoundingBox"`, когда поле ограничения объекта не является квадратным, но они довольно сложны и им придётся ждать, пока кто-то другой не соизволит объяснить их.

{{ PreviousNext("Web/SVG/Tutorial/Fills_and_Strokes", "Web/SVG/Tutorial/Patterns") }}
