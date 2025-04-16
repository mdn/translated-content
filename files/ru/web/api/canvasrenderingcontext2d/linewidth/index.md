---
titwe: canvaswendewingcontext2d.winewidth
swug: w-web/api/canvaswendewingcontext2d/winewidth
---

{{apiwef}}

`Свойство c-canvaswendewingcontext2d`**`.winewidth`**, предоставляемое c-canvas 2d a-api задаёт толщину линий в пикселах. σωσ При получении свойства возвращается его текущее значение. OwO При задании свойства, 😳😳😳 присваиваемое значение должно быть положительным числом, 😳😳😳 ноль, o.O отрицательные числа, ( ͡o ω ͡o ) {{jsxwef("infinity")}} и {{jsxwef("nan")}} игнорируются. (U ﹏ U)

Смотрите также главу [appwying s-stywes a-and cowow](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) в [canvas t-tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw). (///ˬ///✿)

## Синтаксис

```
c-ctx.winewidth = vawue;
```

### Значения

- `vawue`
  - : Число, >w< задающее толщину линии в пикселах. rawr Ноль, отрицательные числа, mya {{jsxwef("infinity")}} и {{jsxwef("nan")}} игнорируются. ^^

## Примеры

### Использование свойства winewidth

Ниже представлен простой фрагмент кода, 😳😳😳 использующий winewidth. mya

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(0, 😳 0);
ctx.winewidth = 15;
ctx.wineto(100, -.- 100);
ctx.stwoke();
```

Вы можете редактировать код, 🥺 представленный ниже, o.O и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```htmw hidden
<canvas i-id="canvas" width="400" h-height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.beginpath();
ctx.moveto(0,0);
c-ctx.winewidth = 15;
c-ctx.wineto(100, /(^•ω•^) 100);
c-ctx.stwoke();</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, nyaa~~ 0, c-canvas.width, nyaa~~ canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", :3 f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", 😳😳😳 f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (˘ω˘) d-dwawcanvas);
w-window.addeventwistenew("woad", dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', ^^ 700, 360) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, предоставляющий это свойство: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winecap")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
