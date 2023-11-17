---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
---

{{APIRef}}

Интерфейс **`CanvasRenderingContext2D`** предоставляет контекст 2D рендеринга для поверхности рисования элемента {{ HTMLElement("canvas") }}.

Для того, чтобы получить объект этого интерфейса, следует вызвать метод {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} объекта `<canvas>`, передав ему в качестве первого аргумента строку "2d":

```js
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
```

После того, как получен контекст 2D рендеринга для элемента canvas, вы можете начать работу с ним. Например:

```js
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 55, 50);
```

Свойства и методы контекста 2D рендеринга представлены на боковой панели и далее по тексту. Кроме того, в [руководстве по canvas](/ru/docs/Web/API/Canvas_API/Tutorial) содержится больше информации, примеров и ссылок на ресурсы по этой теме.

## Рисование прямоугольников

Существует три метода, которые сразу же рисуют прямоугольники на холсте.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Для всех пикселей, находящихся внутри прямоугольника, определённого начальной точкой _(x, y)_ и размерами _(ширина, высота),_ устанавливает чёрный прозрачный цвет, стирая любое ранее нарисованное содержимое.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Рисует залитый прямоугольник в позиции _(x, y)_, размеры которого определяются шириной _width_ и высотой _height_.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Рисует на холсте прямоугольник с начальной точкой в позиции _(x, y)_, имеющий ширину _w_ и высоту _h_, используя текущий стиль обводки.

## Рисование текста

Следующие методы позволяют создать текст. Смотрите также информацию об объекте {{domxref("TextMetrics")}}, хранящем свойства текста.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Рисует (заливает) заданный текст в заданной позиции (x,y).
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Рисует обводку заданного текста в заданной позиции _(x, y)_.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Возвращает объект {{domxref("TextMetrics")}}.

## Стили линий

Следующие методы и свойства определяют как будут отрисовываться линии.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Ширина линий. По умолчанию `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Форма концов линий. Возможные значения: `butt` (по умолчанию), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Определяет форму вершин, в которых две линии сходятся. Возможные значения: `round`, `bevel`, `miter` (по умолчанию).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Ограничение длины сопряжений. По умолчанию `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Возвращает текущий паттерн штриховой линии, который представляет собой массив, состоящий из чётного количества неотрицательных чисел.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Устанавливает текущий паттерн штриховой линии.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Указывает с какого места начать штриховку линии.

## Стили текста

Следующие свойства контролируют отображение текста.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Настройки шрифта. Значение по умолчанию: `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Определяет выравнивание текста по горизонтали. Возможные значения: `start` (по умолчанию), `end`, `left`, `right` или `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Определяет выравнивание текста относительно базовой линии. Возможные значения: `top`, `hanging`, `middle`, `alphabetic` (по умолчанию), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Направление текста. Возможные значения: `ltr, rtl`, `inherit` (по умолчанию).

## Стили заливки и обводки

Стили заливки применяются к цветам и стилям внутри форм, а стили обводки применяются к линиям вокруг форм.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Цвет или стиль применяемый внутри форм. По умолчанию #000 (чёрный).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Цвет или стиль , применяемый к линиям вокруг формы. По умолчанию #000 (чёрный).

## Градиенты и шаблоны

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Создаёт линейный градиент вдоль линии, задаваемой координатами, передаваемыми в параметры метода.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Создаёт радиальный градиент, задаваемый координатами двух окружностей, передаваемыми в параметры метода.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Создаёт шаблон, используя указанное изображение ({{domxref("CanvasImageSource")}}). Он повторяет исходное изображение в направлениях, указанных во втором аргументе. Этот метод возвращает {{domxref("CanvasPattern")}}.

## Тени

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Устанавливает эффект размытия. По умолчанию `0`
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Цвет тени. По умолчанию полностью прозрачный чёрный.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Горизонтальное смещение тени. По умолчанию 0.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Вертикальное смещение тени. По умолчанию 0.

## Контуры

Следующие методы могут быть использованы для манипулирования контурами объектов.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Создаёт новый пустой контур, обнуляя список фрагментов контура. Вызовите этот метод, когда захотите создать новый контур.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Перемещает точку рисования назад к началу текущего фрагмента контура. Этот метод пытается провести прямую линию от текущей точки до начальной. Если форма уже закрыта или имеет только одну точку, метод ничего не делает.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Перемещает начальную точку нового фрагмента контура в точку с координатами **(x, y)**.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Соединяет последнюю точку фрагмента контура и точку с координатами `(x,y)` прямой линией.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Добавляет кубическую кривую Безье к контуру. Для построения требуется три точки. Первые две точки являются контрольными, а третья - конечной. В качестве начальной точки выступает последняя точка текущего фрагмента контура, но она может быть изменена с помощью метода moveTo() перед созданием кривой Безье.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Добавляет квадратичную кривую Безье к текущему контуру.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Добавляет к контуру дугу, с центром в точке _(x, y)_, радиусом _r,_ имеющую угол начала _startAngle_ и конца _endAngle_, рисующуюся в направлении, заданном в аргументе _anticlockwise_ (по умолчанию - по часовой стрелке).
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Добавляет к контуру дугу, заданную контрольными точками и радиусом, соединяющуюся с предыдущей точкой прямой линией.
- {{domxref("CanvasRenderingContext2D.ellipse()")}} {{experimental_inline}}
  - : Добавляет к контуру эллипс, с центром в точке _(x, y)_, заданный радиусами _radiusX_ и _radiusY_, имеющий угол начала _startAngle_ и конца _endAngle_, рисующийся в направлении, заданном в аргументе _anticlockwise_ (по умолчанию - по часовой стрелке).
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Создаёт контур прямоугольника с началом в точке _(x, y)_, и размерами, заданными шириной _width_ и высотой _height_.

## Рисование контуров

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Заливает фрагменты контура текущей заливкой.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Выполняет обводку фрагментов контура текущей обводкой.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Если заданный элемент находится в фокусе, этот метод рисует рамку фокуса вокруг текущего контура.
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : Прокручивает текущий или заданный контур в видимую область окна браузера.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Создаёт область отсечения из текущих фрагментов контура. Все что рисуется после вызова метода `clip()` применяется только внутри области отсечения. Пример использования см. в разделе [Области отсечения](/ru/docs/Web/API/Canvas_API/Tutorial/Compositing) руководства по Canvas.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Позволяет узнать, содержится ли указанная точка в текущем контуре.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Позволяет узнать, находится ли указанная точка на обводке контура.

## Трансформации

Объекты в контексте рендеринга `CanvasRenderingContext2D` имеют текущую матрицу преобразований и методы для управления ей. Матрица преобразований применяется в момент создания текущего контура по умолчанию, рисования текста, форм и объектов {{domxref("Path2D")}}. Методы, перечисленные ниже, остаются по историческим причинам и из соображений совместимости, в то время как в настоящее время в большинстве разделов API используются объекты {{domxref("SVGMatrix")}}, которые будут использоваться в будущем как замена устаревшим методам.

- {{domxref("CanvasRenderingContext2D.currentTransform")}}
  - : Текущая матрица преобразований ({{domxref("SVGMatrix")}} object).
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Добавляет вращение в матрицу преобразований. Аргумент представляет угол вращения по часовой стрелке, выраженный в радианах.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Добавляет к элементам холста трансформацию масштабирования в x раз по горизонтали и y раз по вертикали.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Добавляет трансформацию перемещения, перемещая начальную точку системы координат холста на x по горизонтали и y по вертикали.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Управляет текущей матрицей преобразований при помощи матрицы, описанной аргументами, переданными в метод.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Переустанавливает текущую матрицу преобразований в единичную матрицу, после чего вызывает метод `transform()` с теми же аргументами.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}} {{experimental_inline}}
  - : Переустанавливает текущую матрицу преобразований в единичную матрицу.

## Композиция

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Значение альфа-канала, применяемое к формам и изображениям, прежде чем они накладываются на холст. Значение по умолчанию `1.0` (полностью непрозрачный).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : Совместно с применённым `globalAlpha` это свойство определяет как формы и изображения накладываются на существующее изображение.

## Рисование изображений

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Рисует заданное изображение. У этого метода есть несколько различных форматов вызова, что обеспечивает большую гибкость в его использовании.

## Манипулирование пикселями

Смотрите также объект {{domxref("ImageData")}}.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Создаёт новый пустой объект {{domxref("ImageData")}} с заданными размерами. Цвет всех пикселов в новом объекте устанавливается в прозрачный чёрный.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Возвращает объект {{domxref("ImageData")}}, представляющий данные о пикселах, расположенных под областью холста, ограниченной прямоугольником длиной _sw_ и высотой _sh_, начальная точка которого находится в позиции _(sx, sy)_.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Переносит данные, заданные в объекте {{domxref("ImageData")}}, на холст. Если в аргументах задана уточняющая прямоугольная область, отрисованы будут только пикселы из этой области.

## Сглаживание изображений

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} {{experimental_inline}}
  - : Режим сглаживания изображений; если отключён, изображения не будут сглаживаться при масштабировании.

## Состояние холста

Контекст рендеринга `CanvasRenderingContext2D` содержит множество состояний стилей рисования (атрибуты для стилей линий, стили теней, стили текста). Следующие методы помогут вам работать с этими состояниями:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Сохраняет текущее состояние стилей рисования, используя для этого стек, так что вы можете отменить любые внесённые в него изменения с помощью метода `restore()`.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Восстанавливает состояние стилей рисования в значение, сохранённое методом `save()` в стек состояний последним.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : Доступная только для чтения обратная ссылка на {{domxref("HTMLCanvasElement")}}. Может иметь значение {{jsxref("null")}}, если она не связана с элементом {{HTMLElement("canvas")}}.

## Области попадания

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Добавляет область попадания к холсту.
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Удаляет область попадания с указанным `id` с холста.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Удаляет все области попадания с холста.

## Нестандартные API

### Blink и WebKit

Большинство из этих API являются [запрещёнными и будут удалены в будущем](https://code.google.com/p/chromium/issues/detail?id=363198).

- {{non-standard_inline}} `CanvasRenderingContext2D.clearShadow()`
  - : Удаляет все настройки теней, такие как {{domxref("CanvasRenderingContext2D.shadowColor")}} и {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.drawImageFromRect()`
  - : This is redundant with an equivalent overload of `drawImage`.
- {{non-standard_inline}} `CanvasRenderingContext2D.setAlpha()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.globalAlpha")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setCompositeOperation()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineWidth()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.lineWidth")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineJoin()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.lineJoin")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setLineCap()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.lineCap")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setMiterLimit()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.miterLimit")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setStrokeColor()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.strokeStyle")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setFillColor()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.fillStyle")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.setShadow()`
  - : Вместо этого метода следует использовать {{domxref("CanvasRenderingContext2D.shadowColor")}} и {{domxref("CanvasRenderingContext2D.shadowBlur")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDash`
  - : Вместо этого свойства следует использовать {{domxref("CanvasRenderingContext2D.getLineDash()")}} и {{domxref("CanvasRenderingContext2D.setLineDash()")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitLineDashOffset`
  - : Вместо этого свойства следует использовать {{domxref("CanvasRenderingContext2D.lineDashOffset")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitImageSmoothingEnabled`
  - : Вместо этого свойства следует использовать {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.

### Только Blink

- {{non-standard_inline}} `CanvasRenderingContext2D.getContextAttributes()`
  - : По аналогии с аналогичным методом класса `WebGLRenderingContext`, возвращает объект `Canvas2DContextAttributes`, который содержит атрибуты "storage", показывающие какое хранилище используется (по умолчанию "persistent") и атрибут "alpha" (`true` по умолчанию), показывающий используется ли прозрачность на холсте.
- {{non-standard_inline}} `CanvasRenderingContext2D.isContextLost()`
  - : По аналогии с аналогичным методом класса `WebGLRenderingContext`, возвращает `true` если контекст canvas был потерян, `иначе false`.

### Только WebKit

- {{non-standard_inline}} `CanvasRenderingContext2D.webkitBackingStorePixelRatio`
  - : Размер хранилища по отношению к элементу canvas. Смотри [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/).
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitGetImageDataHD`
  - : Предназначался для HD хранилищ, но удалён из спецификации canvas.
- {{non-standard_inline}} `CanvasRenderingContext2D.webkitPutImageDataHD`
  - : Предназначался для HD хранилищ, но удалён из спецификации canvas.

<!---->

### Только Gecko

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.filter")}}
  - : CSS and SVG filters as Canvas APIs. Likely to be standardized in a new version of the specification.

#### Prefixed APIs

- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransform`
  - : Sets or gets the current transformation matrix, see {{domxref("CanvasRenderingContext2D.currentTransform")}}.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozCurrentTransformInverse`
  - : Sets or gets the current inversed transformation matrix.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).
- {{non-standard_inline}} `CanvasRenderingContext2D.mozImageSmoothingEnabled`
  - : See {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDash`
  - : An array which specifies the lengths of alternating dashes and gaps. Use {{domxref("CanvasRenderingContext2D.getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozDashOffset`
  - : Specifies where to start a dash array on a line. Use {{domxref("CanvasRenderingContext2D.lineDashOffset")}} instead.
- {{non-standard_inline}} {{deprecated_inline}} `CanvasRenderingContext2D.mozTextStyle`
  - : Introduced in in Gecko 1.9, deprecated in favor of the {{domxref("CanvasRenderingContext2D.font")}} property.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozDrawText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.strokeText()")}} or {{domxref("CanvasRenderingContext2D.fillText()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozMeasureText()`
  - : This method was introduced in Gecko 1.9 and is unimplemented starting with Gecko 7.0. Use {{domxref("CanvasRenderingContext2D.measureText()")}} instead.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozPathText()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.
- {{non-standard_inline}} `CanvasRenderingContext2D.mozTextAlongPath()`
  - : This method was introduced in Gecko 1.9 and is removed starting with Gecko 7.0.

#### Internal APIs (chrome-context only)

- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.asyncDrawXULElement()")}}
  - : Renders a region of a XUL element into the `canvas`.
- {{non-standard_inline}} {{domxref("CanvasRenderingContext2D.drawWindow()")}}
  - : Renders a region of a window into the `canvas`. The contents of the window's viewport are rendered, ignoring viewport clipping and scrolling.
- {{non-standard_inline}} `CanvasRenderingContext2D.demote()`
  - : This causes a context that is currently using a hardware-accelerated backend to fallback to a software one. All state should be preserved.

### Internet Explorer

- {{non-standard_inline}} `CanvasRenderingContext2D.msFillRule`
  - : The [fill rule](http://cairographics.org/manual/cairo-cairo-t.html#cairo-fill-rule-t) to use. This must be one of `evenodd` or `nonzero` (default).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLCanvasElement")}}
