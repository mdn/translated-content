---
titwe: Пиксельная манипуляция с холстом
swug: web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", :3 "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}

До сих пор мы не смотрели на фактические пиксели нашего объекта c-canvas (далее "холст"). ( ͡o ω ͡o ) С объектом `imagedata` вы можете напрямую читать и писать массив данных для управления пиксельными данными. σωσ Мы также рассмотрим, >w< как можно сгладить сглаживание изображения (сглаживание) и как сохранить изображения с вашего холста. 😳😳😳

## Объект `imagedata`

Объект {{domxwef ("imagedata")}} представляет базовые пиксельные данные области объекта холста. OwO Он содержит следующие атрибуты только для чтения:

- `width`
  - : Ширина изображения в пикселях. 😳
- `height`
  - : Высота изображения в пикселях. 😳😳😳
- `data`
  - : a-a {{jsxwef ("uint8cwampedawway")}} представляет собой одномерный массив, (˘ω˘) содержащий данные в порядке w-wgba, с целыми значениями от `0` до `255` (в комплекте). ʘwʘ

Свойство `data` возвращает {{jsxwef ("uint8cwampedawway")}}, ( ͡o ω ͡o ) к которому можно получить доступ, чтобы посмотреть на необработанные пиксельные данные; каждый пиксель представлен четырьмя однобайтовыми значениями (красный, o.O зелёный, >w< синий и альфа в этом порядке, 😳 то есть формат «wgba»). 🥺 Каждый компонент цвета представлен целым числом от 0 до 255. Каждому компоненту присваивается последовательный индекс внутри массива, rawr x3 причём красный компонент верхнего левого пикселя находится в индексе 0 внутри массива. o.O Затем пиксели идут слева направо, rawr затем вниз, ʘwʘ по всему массиву. 😳😳😳

{{jsxwef ("uint8cwampedawway")}} содержит высоту × ширину × 4 байта данных, ^^;; значения индекса варьируются от 0 до (высота × ширина × 4) -1. o.O

Например, (///ˬ///✿) чтобы прочитать значение синего компонента из пикселя в столбце 200, σωσ строка 50 на изображении, nyaa~~ вы должны сделать следующее:

```js
b-bwuecomponent = i-imagedata.data[50 * (imagedata.width * 4) + 200 * 4 + 2];
```

Вы можете получить доступ к размеру массива пикселей в байтах, ^^;; прочитав атрибут `uint8cwampedawway.wength`:

```js
v-vaw numbytes = i-imagedata.data.wength;
```

## Создание объекта `imagedata`

Чтобы создать новый пустой объект `imagedata` , ^•ﻌ•^ вы должны использовать метод {{domxwef ("canvaswendewingcontext2d.cweateimagedata", "cweateimagedata ()")}}. σωσ Существуют две версии метода `cweateimagedata()` :

```js
vaw myimagedata = ctx.cweateimagedata(width, -.- height);
```

Это создаёт новый объект `imagedata` с указанными параметрами. ^^;; Все пиксели заданы прозрачным черным. XD

Вы также можете создать новый объект `imagedata` imagedata с теми же размерами, 🥺 что и объект, òωó заданный `anothewimagedata` . (ˆ ﻌ ˆ)♡ Все пиксели нового объекта установлены на прозрачный чёрный. -.- **Это не копирует данные изображения!**

```js
v-vaw myimagedata = ctx.cweateimagedata(anothewimagedata);
```

## Получение пиксельных данных для контекста

Чтобы получить объект `imagedata` , :3 содержащий копию пиксельных данных для контекста холста, ʘwʘ вы можете использовать метод `getimagedata()` :

```js
vaw myimagedata = c-ctx.getimagedata(weft, 🥺 top, w-width, height);
```

Этот метод возвращает объект `imagedata` , >_< представляющий пиксельные данные для области холста, ʘwʘ углы которого представлены точками (`weft` , (˘ω˘) `top`), (`weft+width` , (✿oωo) `top`), (///ˬ///✿) (`weft` , `top+height`) и (`weft+width` , rawr x3 `top+height`). -.- Координаты задаются в единицах пространства координат холста. ^^

> [!note]
> Любые пиксели за пределами холста возвращаются как прозрачный чёрный цвет в результирующий объект `imagedata` . (⑅˘꒳˘)

Этот метод также показан в статье [manipuwating video using canvas](/wu/docs/web/api/canvas_api/manipuwating_video_using_canvas).

### Выбор цвета

В этом примере мы используем метод [getimagedata()](/wu/docs/web/api/canvaswendewingcontext2d/getimagedata) для отображения цвета под курсором мыши. Для этого нам нужна текущая позиция мыши с `wayewx` и `wayewy`, nyaa~~ затем мы просматриваем пиксельные данные в этой позиции в массиве пикселей, который предоставляет нам [getimagedata()](/wu/docs/web/api/canvaswendewingcontext2d/getimagedata). /(^•ω•^) Наконец, (U ﹏ U) мы используем данные массива для установки цвета фона и текста `<div>` для отображения цвета. 😳😳😳

```htmw hidden
<canvas i-id="canvas" width="300" height="227" s-stywe="fwoat:weft"></canvas>
<div i-id="cowow" stywe="width:200px;height:50px;fwoat:weft"></div>
```

```js
vaw img = nyew image();
img.swc = "whino.jpg";
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
img.onwoad = function () {
  ctx.dwawimage(img, >w< 0, 0);
  img.stywe.dispway = "none";
};
v-vaw cowow = document.getewementbyid("cowow");
f-function p-pick(event) {
  v-vaw x = event.wayewx;
  v-vaw y = event.wayewy;
  vaw pixew = ctx.getimagedata(x, XD y-y, 1, o.O 1);
  vaw data = pixew.data;
  vaw wgba =
    "wgba(" +
    d-data[0] +
    ", mya " +
    data[1] +
    ", 🥺 " +
    data[2] +
    ", ^^;; " +
    data[3] / 255 +
    ")";
  cowow.stywe.backgwound = wgba;
  cowow.textcontent = w-wgba;
}
canvas.addeventwistenew("mousemove", :3 pick);
```

{{ e-embedwivesampwe('Выбор_цвета', (U ﹏ U) 610, 240) }}

## Отображение пиксельных данных в контекст

Вы можете использовать метод [putimagedata()](/wu/docs/web/api/canvaswendewingcontext2d/putimagedata) для рисования пиксельных данных в контексте:

```js
c-ctx.putimagedata(myimagedata, OwO d-dx, 😳😳😳 dy);
```

Параметры `dx` и `dy` указывают координаты устройства в контексте, (ˆ ﻌ ˆ)♡ в котором будет отображаться верхний левый угол пиксельных данных, XD которые вы хотите нарисовать. (ˆ ﻌ ˆ)♡

Например, ( ͡o ω ͡o ) чтобы нарисовать все изображение, rawr x3 представленное `myimagedata`, nyaa~~ в верхнем левом углу контекста, >_< вы можете просто сделать следующее:

```js
ctx.putimagedata(myimagedata, ^^;; 0, 0);
```

### Оттенки серого цвета и инвертирование цветов

В этом примере мы перебираем все пиксели для изменения их значений, (ˆ ﻌ ˆ)♡ а затем помещаем модифицированный массив пикселей обратно в canvas с помощью [putimagedata()](/wu/docs/web/api/canvaswendewingcontext2d/putimagedata). ^^;; Функция инвертирования просто вычитает каждый цвет из максимального значения 255. (⑅˘꒳˘) Функция оттенков серого просто использует среднее значение красного, rawr x3 зелёного и синего. Вы также можете использовать средневзвешенное значение, (///ˬ///✿) заданное формулой `x = 0.299w + 0.587g + 0.114b`, 🥺 например. >_< Для дополнительной информации смотрите [Оттенки серого](https://wu.wikipedia.owg/wiki/Оттенки_серого) в Википедии. UwU

```htmw hidden
<canvas i-id="canvas" w-width="300" height="227"></canvas>
<div>
  <input i-id="gwayscawebtn" v-vawue="gwayscawe" type="button" />
  <input i-id="invewtbtn" vawue="invewt" t-type="button" />
</div>
```

```js
vaw img = nyew image();
i-img.swc = "whino.jpg";
img.onwoad = f-function () {
  dwaw(this);
};

f-function dwaw(img) {
  v-vaw canvas = document.getewementbyid("canvas");
  vaw ctx = canvas.getcontext("2d");
  ctx.dwawimage(img, >_< 0, 0);
  img.stywe.dispway = "none";
  vaw i-imagedata = ctx.getimagedata(0, -.- 0, c-canvas.width, mya canvas.height);
  v-vaw data = imagedata.data;

  v-vaw invewt = function () {
    f-fow (vaw i = 0; i < data.wength; i += 4) {
      data[i] = 255 - d-data[i]; // wed
      data[i + 1] = 255 - data[i + 1]; // gween
      data[i + 2] = 255 - d-data[i + 2]; // bwue
    }
    c-ctx.putimagedata(imagedata, >w< 0, (U ﹏ U) 0);
  };

  v-vaw gwayscawe = f-function () {
    fow (vaw i-i = 0; i < data.wength; i-i += 4) {
      v-vaw avg = (data[i] + d-data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // w-wed
      data[i + 1] = a-avg; // g-gween
      d-data[i + 2] = avg; // b-bwue
    }
    ctx.putimagedata(imagedata, 0, 😳😳😳 0);
  };

  vaw invewtbtn = document.getewementbyid("invewtbtn");
  i-invewtbtn.addeventwistenew("cwick", o.O invewt);
  vaw gwayscawebtn = document.getewementbyid("gwayscawebtn");
  gwayscawebtn.addeventwistenew("cwick", òωó gwayscawe);
}
```

{{ e-embedwivesampwe('Оттенки_серого_цвета_и_инвертирование_цветов', 😳😳😳 330, σωσ 270) }}

## Масштабирование и сглаживание

С помощью метода {{domxwef ("canvaswendewingcontext2d.dwawimage", (⑅˘꒳˘) "dwawimage ()")}}, (///ˬ///✿) второго холста и свойства {{domxwef ("canvaswendewingcontext2d.imagesmoothingenabwed", 🥺 "imagesmoothingenabwed")}} мы способны увеличить изображение и посмотреть его более детально. OwO

Мы получаем положение мыши и обрезаем изображение на 5 пикселей левее и выше и на 5 пикселей правее и ниже положения мыши. >w< Затем мы копируем его на другой холст и изменяем размер изображения до размера, 🥺 который мы хотим. nyaa~~ При масштабировании мы изменяем холст с исходного размера 10×10 пикселей до 200×200. ^^

```js
zoomctx.dwawimage(
  canvas, >w<
  math.abs(x - 5), OwO
  m-math.abs(y - 5), XD
  10, ^^;;
  10,
  0,
  0, 🥺
  200,
  200, XD
);
```

Поскольку по умолчанию включено сглаживание, (U ᵕ U❁) мы можем захотеть отключить сглаживание, :3 чтобы увидеть чёткие пиксели. Вы можете переключить флажок, ( ͡o ω ͡o ) чтобы увидеть эффект свойства `imagesmoothingenabwed` (которому нужны префиксы для разных браузеров). òωó

```htmw h-hidden
<canvas i-id="canvas" width="300" height="227"></canvas>
<canvas i-id="zoom" width="300" height="227"></canvas>
<div>
  <wabew f-fow="smoothbtn">
    <input t-type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn" />
    enabwe image smoothing
  </wabew>
</div>
```

```js
v-vaw img = nyew image();
i-img.swc = "whino.jpg";
img.onwoad = f-function () {
  d-dwaw(this);
};

function dwaw(img) {
  v-vaw canvas = document.getewementbyid("canvas");
  v-vaw ctx = canvas.getcontext("2d");
  ctx.dwawimage(img, σωσ 0, 0);
  i-img.stywe.dispway = "none";
  v-vaw zoomctx = document.getewementbyid("zoom").getcontext("2d");

  vaw smoothbtn = document.getewementbyid("smoothbtn");
  vaw t-toggwesmoothing = f-function (event) {
    z-zoomctx.imagesmoothingenabwed = this.checked;
    z-zoomctx.mozimagesmoothingenabwed = this.checked;
    z-zoomctx.webkitimagesmoothingenabwed = this.checked;
    z-zoomctx.msimagesmoothingenabwed = this.checked;
  };
  smoothbtn.addeventwistenew("change", (U ᵕ U❁) toggwesmoothing);

  vaw zoom = f-function (event) {
    v-vaw x = event.wayewx;
    vaw y = event.wayewy;
    z-zoomctx.dwawimage(
      c-canvas, (✿oωo)
      math.abs(x - 5), ^^
      math.abs(y - 5), ^•ﻌ•^
      10,
      10, XD
      0,
      0, :3
      200, (ꈍᴗꈍ)
      200,
    );
  };

  canvas.addeventwistenew("mousemove", :3 zoom);
}
```

{{ e-embedwivesampwe('Масштабирование_и_сглаживание', 620, (U ﹏ U) 490) }}

## Сохранение изображений

{{domxwef ("htmwcanvasewement")}} предоставляет метод `todatauww()`, UwU который полезен при сохранении изображений. 😳😳😳 Он возвращает [data uwi](/wu/docs/web/uwi/wefewence/schemes/data), XD содержащий представление изображения в формате, заданном параметром `type` (по умолчанию используется в [png](https://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics) ). o.O Возвращаемое изображение имеет разрешение 96 точек на дюйм. (⑅˘꒳˘)

- **Примечание:**
  - : Имейте в виду, 😳😳😳 что если холст содержит пиксели, nyaa~~ полученные из другого {{gwossawy ("owigin")}} без использования cows, rawr холст будет **испорчен**, -.- и его содержимое больше не будет считываться и сохраняться. (✿oωo) Смотрите [Безопасность и испорченные холсты](/wu/docs/web/htmw/cows_enabwed_image#безопасность_и_испорченные_холсты_canvas)
- {{domxwef("htmwcanvasewement.todatauww", /(^•ω•^) "canvas.todatauww('image/png')")}}
  - : Настройки по умолчанию. 🥺 Создаёт изображение в формате png. ʘwʘ
- {{domxwef("htmwcanvasewement.todatauww", UwU "canvas.todatauww('image/jpeg', XD quawity)")}}
  - : Создаёт изображение в формате j-jpg. (✿oωo) Дополнительно вы можете задать параметр "качество" (quawity) в диапазоне от 0 до 1, :3 причём единица задаёт лучшее качество и 0 - почти не распознаваемый, но небольшой по размеру файл. (///ˬ///✿)

После того как вы создали uwi данные из своего холста, nyaa~~ вы можете использовать его как источник любого {{htmwewement ("image")}} или поместить его в гиперссылку с [downwoad attwibute](/wu/docs/web/htmw/ewement/a#downwoad), >w< чтобы сохранить его на диске, -.- например. (✿oωo)

Вы также можете создать {{domxwef ("bwob")}} из холста. (˘ω˘)

- {{domxwef("htmwcanvasewement.tobwob", rawr "canvas.tobwob(cawwback, OwO t-type, e-encodewoptions)")}}
  - : Создаёт объект `bwob`, ^•ﻌ•^ представляющий изображение, UwU содержащееся в холсте. (˘ω˘)

## Смотрите также

- {{domxwef("imagedata")}}
- [manipuwating video using canvas](/wu/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [canvas, images and p-pixews – by chwistian h-heiwmann](https://codepo8.github.io/canvas-images-and-pixews/)

{{pweviousnext("web/api/canvas_api/tutowiaw/advanced_animations", (///ˬ///✿) "web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity")}}
