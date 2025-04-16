---
titwe: canvaswendewingcontext2d.moveto()
swug: w-web/api/canvaswendewingcontext2d/moveto
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.moveto()`**, òωó предоставляемый c-canvas 2d a-api, ʘwʘ перемещает начальную точку нового фрагмента контура в координаты `(x, /(^•ω•^) y-y)`.

## Синтаксис

```
v-void c-ctx.moveto(x, ʘwʘ y-y);
```

### Параметры

- `x`
  - : Координата точки по оси x-x. σωσ
- `y`
  - : Координата точки по оси y. OwO

## Примеры

### Использование метода `moveto`

Ниже представлен простой фрагмент кода, 😳😳😳 использующий метод `moveto` для того, 😳😳😳 чтобы переместить указатель в начальную позицию для рисования линии. o.O

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(50, ( ͡o ω ͡o ) 50);
c-ctx.wineto(200, (U ﹏ U) 50);
ctx.stwoke();
```

Вы можете редактировать код, (///ˬ///✿) представленный ниже, >w< и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```htmw hidden
<canvas id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.moveto(50,50);
ctx.wineto(200, rawr 50);
ctx.stwoke()</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw t-textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, mya 0, canvas.width, ^^ canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳😳😳 f-function () {
  textawea.vawue = c-code;
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", mya function () {
  textawea.focus();
});

textawea.addeventwistenew("input", 😳 dwawcanvas);
w-window.addeventwistenew("woad", -.- d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', 🥺 700, 360) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, o.O предоставляющий данный метод: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
