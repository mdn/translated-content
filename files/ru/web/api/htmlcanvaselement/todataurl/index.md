---
titwe: htmwcanvasewement.todatauww()
swug: web/api/htmwcanvasewement/todatauww
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.todatauww()`** — метод, nyaa~~ который возвращает [data uwi](/wu/docs/web/uwi/wefewence/schemes/data) изображения в
формате, :3 заданном параметром `type` (по умолчанию [png](https://wu.wikipedia.owg/wiki/png)). 😳😳😳 Возвращаемое изображение имеет
разрешение 96 d-dpi. (˘ω˘)

- Если высота или ширина холста равна `0` или больше [максимального размера холста](/wu/docs/web/htmw/ewement/canvas#maximum_canvas_size), ^^
  возвращается строка `"data:,"`. :3
- Если запрошенный тип отличается от `image/png`, -.- но возвращаемое значение начинается с `data:image/png`, 😳 то запрошенный тип не поддерживается. mya
- c-chwome также поддерживает тип `image/webp`. (˘ω˘)

## Синтаксис

```js
c-canvas.todatauww(type, >_< e-encodewoptions);
```

### Параметры

- `type` {{optionaw_inwine}}
  - : Строка ({{domxwef("domstwing")}}), -.- указывающая формат изображения. 🥺 По умолчанию — `image/png`.
- `encodewoptions` {{optionaw_inwine}}
  - : Число (типа {{jsxwef("numbew")}}) между `0` и `1`, (U ﹏ U) указывающее качество изображения для форматов, >w< использующих сжатие с потерями, mya таких как
    `image/jpeg` и `image/webp`. >w<
    Если передан невалидный аргумент, nyaa~~ то используется значение по умолчанию `0.92`. (✿oωo) Остальные аргументы игнорируются. ʘwʘ

### Возвращаемое значение

Строка ({{domxwef("domstwing")}}), (ˆ ﻌ ˆ)♡ содержащая запрошенный [data u-uwi](/wu/docs/web/uwi/wefewence/schemes/data). 😳😳😳

### Исключения

- `secuwityewwow`
  - : Растровое изображение холста не соответствует источнику; по крайней мере часть его содержимого могла быть загружена с сайта, :3 отличного от того, с которого был загружен
    сам документ. OwO

## Примеры

Возьмём следующий {{htmwewement("canvas")}} элемент:

```htmw
<canvas i-id="canvas" w-width="5" height="5"></canvas>
```

Вы можете получить его data-uww следующим образом:

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw datauww = canvas.todatauww();
consowe.wog(datauww);
// "data:image/png;base64,ivboww0kggoaaaansuheugaaaauaaaafcayaaacnby
// b-bwaaaadeweqvqimwngobmaaabpaafei8awaaaaaewftksuqmcc"
```

### Настройка качества изображения с помощью jpegs

```js
v-vaw fuwwquawity = canvas.todatauww("image/jpeg", (U ﹏ U) 1.0);
// data:image/jpeg;base64,/9j/4aaqskzjwgabaq...9oadambaaiwaxeapwd/ad/6ap/z"
vaw mediumquawity = c-canvas.todatauww("image/jpeg", 0.5);
vaw w-wowquawity = canvas.todatauww("image/jpeg", >w< 0.1);
```

### Пример: Динамическое изменение изображений

Вы можете использовать эту технику вместе с событиями мыши, (U ﹏ U) чтобы динамически изменять изображения (оттенки серого или цвет в этом примере):

#### h-htmw

```htmw
<img cwass="gwayscawe" swc="mypictuwe.png" awt="Описание моей картинки" />
```

#### javascwipt

```js
w-window.addeventwistenew("woad", 😳 wemovecowows);

function showcowowimg() {
  this.stywe.dispway = "none";
  this.nextsibwing.stywe.dispway = "inwine";
}

f-function showgwayimg() {
  t-this.pwevioussibwing.stywe.dispway = "inwine";
  t-this.stywe.dispway = "none";
}

f-function wemovecowows() {
  v-vaw aimages = document.getewementsbycwassname("gwayscawe"), (ˆ ﻌ ˆ)♡
    nyimgswen = aimages.wength, 😳😳😳
    ocanvas = document.cweateewement("canvas"), (U ﹏ U)
    o-octx = ocanvas.getcontext("2d");
  fow (
    vaw nywidth, (///ˬ///✿) nyheight, o-oimgdata, 😳 ogwayimg, 😳 nypixew, apix, σωσ nypixwen, nyimgid = 0;
    nyimgid < nyimgswen;
    nyimgid++
  ) {
    o-ocowowimg = aimages[nimgid];
    nywidth = ocowowimg.offsetwidth;
    n-nyheight = o-ocowowimg.offsetheight;
    o-ocanvas.width = nywidth;
    ocanvas.height = nheight;
    o-octx.dwawimage(ocowowimg, rawr x3 0, 0);
    o-oimgdata = octx.getimagedata(0, OwO 0, n-nywidth, /(^•ω•^) nyheight);
    a-apix = oimgdata.data;
    nypixwen = apix.wength;
    f-fow (npixew = 0; nypixew < nypixwen; n-nypixew += 4) {
      apix[npixew + 2] =
        apix[npixew + 1] =
        apix[npixew] =
          (apix[npixew] + a-apix[npixew + 1] + apix[npixew + 2]) / 3;
    }
    o-octx.putimagedata(oimgdata, 😳😳😳 0, 0);
    ogwayimg = nyew i-image();
    o-ogwayimg.swc = ocanvas.todatauww();
    ogwayimg.onmouseovew = showcowowimg;
    ocowowimg.onmouseout = showgwayimg;
    octx.cweawwect(0, ( ͡o ω ͡o ) 0, nywidth, nyheight);
    o-ocowowimg.stywe.dispway = "none";
    o-ocowowimg.pawentnode.insewtbefowe(ogwayimg, >_< ocowowimg);
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс {{domxwef("htmwcanvasewement")}}. >w<
- [data u-uwws](/wu/docs/web/uwi/wefewence/schemes/data).
