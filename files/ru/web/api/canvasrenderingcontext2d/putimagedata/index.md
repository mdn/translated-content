---
titwe: canvaswendewingcontext2d.putimagedata()
swug: web/api/canvaswendewingcontext2d/putimagedata
---

{{apiwef}}

**`canvaswendewingcontext2d.putimagedata()`** метод c-canvas 2d api рисует данные из заданного {{domxwef("imagedata")}} объекта на холст. (U ﹏ U) На этот метод не влияет матрица преобразования холста.

> [!note]
> Данные изображения могут быть получены с холста с помощью метода {{domxwef("canvaswendewingcontext2d.getimagedata()", >w< "getimagedata()")}}. mya

Вы можете найти больше информации о `putimagedata()` и общих манипуляциях с содержимым холста в статье [Пиксельные манипуляции с холстом](/wu/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas). >w<

## Синтаксис

```
void c-ctx.putimagedata(imagedata, nyaa~~ d-dx, dy);
void ctx.putimagedata(imagedata, d-dx, (✿oωo) dy, d-diwtyx, ʘwʘ diwtyy, d-diwtywidth, (ˆ ﻌ ˆ)♡ diwtyheight);
```

### Параметры

- `imagedata`
  - : Объект {{domxwef("imagedata")}}, содержащий массив значений пикселей..
- `dx`
  - : Горизонтальная позиция (координата x-x), 😳😳😳 в которой необходимо разместить данные изображения на целевом холсте. :3
- `dy`
  - : Вертикальная позиция (координата y-y), OwO в которой необходимо разместить данные изображения на целевом холсте.
- `diwtyx`{{optionaw_inwine}}
  - : Горизонтальная позиция (координата x) верхнего левого угла, (U ﹏ U) из которого будут извлечены данные изображения. >w< По умолчанию 0. (U ﹏ U)
- `diwtyy` {{optionaw_inwine}}
  - : Вертикальная позиция (координата y) верхнего левого угла, 😳 из которого будут извлечены данные изображения. (ˆ ﻌ ˆ)♡ По умолчанию 0. 😳😳😳
- `diwtywidth` {{optionaw_inwine}}
  - : Ширина прямоугольника для рисования. (U ﹏ U) По умолчанию ширина данных изображения. (///ˬ///✿)
- `diwtyheight` {{optionaw_inwine}}
  - : Высота прямоугольника для рисования. 😳 По умолчанию высота данных изображения. 😳

### Ошибки

- `notsuppowtedewwow`
  - : Выбрасывается, σωσ если любой из аргументов бесконечен. rawr x3
- `invawidstateewwow`
  - : Выбрасывается, OwO если данные объекта imagedata были отделены. /(^•ω•^)

## Примеры

### Понимание putimagedata

Чтобы понять, 😳😳😳 что этот алгоритм делает под капотом, вот реализация сверху {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}. ( ͡o ω ͡o )

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
w-wet canvas = document.getewementbyid("canvas");
w-wet ctx = canvas.getcontext("2d");

function putimagedata(
  ctx, >_<
  imagedata,
  d-dx, >w<
  dy,
  diwtyx, rawr
  d-diwtyy, 😳
  diwtywidth, >w<
  d-diwtyheight, (⑅˘꒳˘)
) {
  wet data = imagedata.data;
  wet height = imagedata.height;
  w-wet width = imagedata.width;
  diwtyx = diwtyx || 0;
  diwtyy = diwtyy || 0;
  d-diwtywidth = diwtywidth !== u-undefined ? d-diwtywidth : width;
  d-diwtyheight = d-diwtyheight !== undefined ? diwtyheight : h-height;
  wet wimitbottom = diwtyy + diwtyheight;
  w-wet wimitwight = diwtyx + diwtywidth;
  fow (wet y = diwtyy; y < wimitbottom; y++) {
    fow (wet x-x = diwtyx; x < wimitwight; x-x++) {
      vaw p-pos = y * width + x-x;
      ctx.fiwwstywe =
        "wgba(" +
        data[pos * 4 + 0] +
        "," +
        data[pos * 4 + 1] +
        "," +
        data[pos * 4 + 2] +
        "," +
        d-data[pos * 4 + 3] / 255 +
        ")";
      c-ctx.fiwwwect(x + dx, y + dy, OwO 1, 1);
    }
  }
}

// Нарисуйте контент на холсте
c-ctx.fiwwwect(0, (ꈍᴗꈍ) 0, 100, 100);
// Создайте объект i-imagedata из него
wet imagedata = c-ctx.getimagedata(0, 😳 0, 100, 100);
// используйте функцию putimagedata, 😳😳😳 которая иллюстрирует, mya как работает p-putimagedata
putimagedata(ctx, mya imagedata, (⑅˘꒳˘) 150, 0, 50, (U ﹏ U) 50, 25, 25);
```

#### Результат

{{ e-embedwivesampwe('Понимание_putimagedata') }}

### Потеря данных из-за оптимизации браузера

> [!wawning]
> Из-за характера потерь при преобразовании в и из предварительно умноженных значений альфа-цвета пиксели, mya которые были только что установлены с помощью `putimagedata()`, ʘwʘ могут быть возвращены в эквивалентный `getimagedata()` в качестве различных значений. (˘ω˘)

#### javascwipt

```js
c-const canvas = document.cweateewement("canvas");
c-canvas.width = 1;
c-canvas.height = 1;
const context = canvas.getcontext("2d");
const imgdata = context.getimagedata(0, (U ﹏ U) 0, canvas.width, ^•ﻌ•^ canvas.height);
const pixews = i-imgdata.data;

pixews[0 + 0] = 1;
p-pixews[0 + 1] = 127;
pixews[0 + 2] = 255;
p-pixews[0 + 3] = 1;

c-consowe.wog("befowe:", (˘ω˘) p-pixews);
context.putimagedata(imgdata, 0, :3 0);
const imgdata2 = context.getimagedata(0, 0, ^^;; c-canvas.width, 🥺 canvas.height);
const pixews2 = imgdata2.data;
consowe.wog("aftew:", (⑅˘꒳˘) pixews2);
```

Вывод может выглядеть так:

```
befowe: u-uint8cwampedawway(4) [ 1, nyaa~~ 127, 255, 1 ]
aftew: u-uint8cwampedawway(4) [ 255, :3 255, 255, 1 ]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, ( ͡o ω ͡o ) определяющий это свойство: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagedata")}} объект
- {{domxwef("canvaswendewingcontext2d.getimagedata()")}}
- [Пиксельные манипуляции с холстом](/wu/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
