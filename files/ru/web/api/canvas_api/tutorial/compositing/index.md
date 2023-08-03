---
title: Композиция и обрезка
slug: Web/API/Canvas_API/Tutorial/Compositing
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

Во всех наших [предыдущих примерах](/ru/docs/Web/API/Canvas_API/Tutorial/Transformations), фигуры всегда были нарисованы одна поверх другой. Это более чем достаточно для большинства ситуаций, но это ограничивает порядок, в котором построены композиционные формы. Однако, мы можем изменить это поведение, установив свойство `globalCompositeOperation`. Кроме того, свойства `clip` позволяет скрыть нежелательные части формы.

## `globalCompositeOperation`

Мы можем не только рисовать новые фигуры за существующие формы, но мы также можем использовать его, чтобы замаскировать определённые участки, очистить разделы от холста (не ограничивается прямоугольниками, как{{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} method does) и другое.

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : Это задаёт Тип операции композиции для применения при разработке новых форм, где Тип является строкой, идентифицирующей, какие из двенадцати операций композитинг в использовании.

См. [примеры компоновки](/ru/docs/Web/API/Canvas_API/Tutorial/Compositing/Example) кода из следующих примеров.

{{ EmbedLiveSample("Compositing_example", "100%", 6750, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example" )}}

## Обрезка контуров

![](canvas_clipping_path.png)Отсечённый контур похож на обычную форму холста, но он действует как маска, чтобы скрыть нежелательные части фигур. Это визуализируется на изображении справа. Форма красной звезды - наша отправочная дорожка. Все, что выходит за пределы этого пути, не будет нарисовано на холсте.

Если мы сравниваем отсечённый контур со свойством `globalCompositeOperation` на изображении, мы видим два режима композитинга, которые достигают более или менее того же эффекта в исходном и исходном состоянии. Наиболее важные различия между ними заключаются в том, что отсечение контура фактически никогда не обращается к холсту и контур обрезки никогда не влияет добавление новых форм. Это делает обрезку контура идеальным для рисования нескольких фигур в ограниченной области.

В главе о [рисовании форм](/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), я назвал только `stroke()` и `fill()` методы, но есть третий способ можно использовать с контурами, так называемый `clip()`.

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : Преобразует текущий выстраиваемый контур в отсечённый контур.

Используйте `clip()` вместо `closePath()` для закрытия контура и его преобразования в отсечённый контур вместо создания заполняющего или обрамляющего контура.

По умолчанию элемент {{HTMLElement("canvas")}} использует отсечённый контур, который в точности совпадает по размеру с размером самого холста. Это означает, что никакого отсечения попросту не произойдёт.

### Пример обрезки

В этом примере мы будем использовать круговую обрезку контура, чтобы ограничить рисование набора случайных звёзд определённой областью.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

В первых нескольких строках кода мы рисуем чёрный прямоугольник размером с холстом в качестве фона, а затем переводим начало координат в центр. Затем мы создаём круговой обтравочный контур, рисуя дугу и вызывающий `clip()`. Обрезанные контуры также являются частью состояния сохранения холста. Если бы мы хотели сохранить исходный обтравочный контур, мы могли бы сохранить состояние холста перед созданием нового.

Все, что нарисовано после создания отсечённого контура, появится только внутри этого пути. Вы можете видеть это чётко в линейном градиенте, который нарисован далее. После этого набирается набор из 50 случайно расположенных и масштабированных звёзд, используя `drawStar()`. Снова звезды появляются только в пределах определённого обтравочного контура.

{{EmbedLiveSample("A_clip_example", "180", "180", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
