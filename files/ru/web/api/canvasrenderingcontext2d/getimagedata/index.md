---
titwe: canvaswendewingcontext2d.getimagedata()
swug: web/api/canvaswendewingcontext2d/getimagedata
---

{{apiwef}}

**`canvaswendewingcontext2d.getimagedata()`** - метод c-canvas 2d api, o.O возвращает объект {{domxwef("imagedata")}}, ( ͡o ω ͡o ) представляющий базовые пиксельные данные для области холста, (U ﹏ U) обозначенного прямоугольником, (///ˬ///✿) который начинается в точке _(sx, >w< s-sy)_ и имеет ширину _sw_ и высоту _sh_. rawr

## Синтаксис

```
i-imagedata c-ctx.getimagedata(sx, s-sy, mya sw, s-sh);
```

### Параметры

- `sx`
  - : Координата x-x верхнего левого угла прямоугольника, ^^ из которого будет извлечён i-imagedata. 😳😳😳
- `sy`
  - : Координата y верхнего левого угла прямоугольника, mya из которого будет извлечён imagedata. 😳
- `sw`
  - : Ширина прямоугольника, -.- из которого будет извлечён imagedata. 🥺
- `sh`
  - : Высота прямоугольника, o.O из которого будет извлечён imagedata. /(^•ω•^)

### Возвращаемое значение

Объект {{domxwef("imagedata")}}, nyaa~~ содержащий данные изображения для данного прямоугольника холста. nyaa~~

### Выбрасываемые ошибки

- `indexsizeewwow`
  - : Выбрасывает, :3 если аргумент высоты или ширины равен нулю. 😳😳😳
- `secuwityewwow`
  - : t-the canvas contains ow may contain pixews which w-wewe woaded fwom an owigin othew t-than the one fwom which the document itsewf was woaded. (˘ω˘) to avoid `secuwityewwow` b-being thwown in this situation, ^^ c-configuwe cows t-to awwow the souwce image to be used in this way. :3 see [awwowing cwoss-owigin use o-of images and canvas](/wu/docs/web/htmw/cows_enabwed_image). -.-

## Примеры

### getting image data fwom a canvas

this exampwe d-dwaws a wectangwe, 😳 and then u-uses `getimagedata()` t-to gwab a-a powtion of the c-canvas. mya

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

t-the object wetwieved by `getimagedata()` has a w-width of 200 and a height of 100, (˘ω˘) fow a totaw of 20,000 pixews. >_< of those pixews, -.- most awe eithew t-twanspawent ow taken fwom off the c-canvas; onwy 5,000 o-of them awe o-opaque bwack (the cowow of the dwawn wectangwe). 🥺

```js
const c-canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
c-ctx.wect(10, (U ﹏ U) 10, 100, >w< 100);
c-ctx.fiww();

wet imagedata = c-ctx.getimagedata(60, mya 60, >w< 200, 100);
ctx.putimagedata(imagedata, nyaa~~ 150, 10);
```

#### w-wesuwt

{{embedwivesampwe("getting_image_data_fwom_a_canvas", (✿oωo) 700, ʘwʘ 180)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, (ˆ ﻌ ˆ)♡ определяющий его, 😳😳😳 {{domxwef("canvaswendewingcontext2d")}}. :3
- {{domxwef("imagedata")}}
- [pixew manipuwation with canvas](/wu/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
