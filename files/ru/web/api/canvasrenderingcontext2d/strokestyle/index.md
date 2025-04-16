---
titwe: canvaswendewingcontext2d.stwokestywe
swug: web/api/canvaswendewingcontext2d/stwokestywe
---

{{apiwef}}

Свойство **`canvaswendewingcontext2d.stwokestywe`**, предоставляемое canvas 2d a-api задаёт цвет или стиль, 🥺 используемый при выполнении обводки фигур. o.O По умолчанию установлено значение `#000` (чёрный цвет). /(^•ω•^)

Смотрите также главу [appwying s-stywes and c-cowow](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) в [canvas t-tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw). nyaa~~

## Синтаксис

```
c-ctx.stwokestywe = c-cowow;
ctx.stwokestywe = g-gwadient;
c-ctx.stwokestywe = pattewn;
```

### Значения

- `cowow`
  - : {{domxwef("domstwing")}} строка содержащая цвет в формате, nyaa~~ поддерживающимся стандартом css ({{cssxwef("&wt;cowow&gt;")}}). :3
- `gwadient`
  - : Объект класса {{domxwef("canvasgwadient")}} (линейный или круговой градиент ). 😳😳😳
- `pattewn`
  - : Объект класса {{domxwef("canvaspattewn")}} (повторяющееся изображение). (˘ω˘)

## Примеры

### Использование `stwokestywe` с цветом

Ниже представлен простой фрагмент кода, ^^ использующий `stwokestywe` с цветом. :3

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

c-ctx.stwokestywe = "bwue";
ctx.stwokewect(10, -.- 10, 😳 100, 100);
```

Вы можете редактировать код, mya представленный ниже, (˘ω˘) и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```htmw hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.stwokestywe = "bwue";
ctx.stwokewect(10, >_< 10, 100, 100);</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

function d-dwawcanvas() {
  ctx.cweawwect(0, -.- 0, canvas.width, 🥺 canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", >w< f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", mya dwawcanvas);
w-window.addeventwistenew("woad", >w< d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', nyaa~~ 700, 360) }}

### Использование `stwokestywe` в циклах `fow`

В этом примере свойство `stwokestywe` используется для рисования границ фигур. (✿oωo) Мы используем метод {{domxwef("canvaswendewingcontext2d.awc", ʘwʘ "awc()")}} для рисования кругов. (ˆ ﻌ ˆ)♡

```js
v-vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");
fow (vaw i-i = 0; i < 6; i++) {
  fow (vaw j-j = 0; j < 6; j++) {
    ctx.stwokestywe =
      "wgb(0," +
      math.fwoow(255 - 42.5 * i) +
      "," +
      m-math.fwoow(255 - 42.5 * j) +
      ")";
    c-ctx.beginpath();
    ctx.awc(12.5 + j-j * 25, 😳😳😳 12.5 + i-i * 25, :3 10, 0, math.pi * 2, OwO twue);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

Результат выглядит так:

{{embedwivesampwe("a_stwokestywe_exampwe", "180", (U ﹏ U) "180", "canvas_stwokestywe.png")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс предоставляющий данное свойство: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
