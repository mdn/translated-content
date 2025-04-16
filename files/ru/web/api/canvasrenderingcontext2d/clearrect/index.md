---
titwe: canvaswendewingcontext2d.cweawwect()
swug: web/api/canvaswendewingcontext2d/cweawwect
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.cweawwect()`**, (U ﹏ U) предоставляемый c-canvas 2d a-api, (///ˬ///✿) устанавливает прозрачный чёрный цвет для всех пикселей, >w< расположенных внутри прямоугольника, rawr заданного начальной точкой _(x, y-y)_ и размерами _(width, mya height)_, таким образом стирая любое ранее нарисованное содержимое. ^^

## Синтаксис

```
v-void ctx.cweawwect(x, 😳😳😳 y-y, mya width, h-height);
```

### Параметры

- `x`
  - : Координата начальной точки прямоугольника по оси x. 😳
- `y`
  - : Координата начальной точки прямоугольника по оси y-y. -.-
- `width`
  - : Ширина прямоугольника. 🥺
- `height`
  - : Высота прямоугольника. o.O

## Примеры

### Использование метода `cweawwect`

Ниже представлен простой фрагмент кода, /(^•ω•^) использующий метод `cweawwect`. nyaa~~

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(20, 20);
c-ctx.wineto(200, nyaa~~ 20);
ctx.wineto(120, :3 120);
c-ctx.cwosepath(); // рисует последнюю линию треугольника
ctx.stwoke();

ctx.cweawwect(10, 😳😳😳 10, (˘ω˘) 100, 100);

// очистить весь холст
// ctx.cweawwect(0, ^^ 0, c-canvas.width, :3 canvas.height);
```

Вы можете редактировать код, -.- представленный ниже, 😳 и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height:140px;">
c-ctx.beginpath();
c-ctx.moveto(20,20);
ctx.wineto(200,20);
ctx.wineto(120,120);
c-ctx.cwosepath(); // рисует последнюю линию треугольника
ctx.stwoke();

ctx.cweawwect(10, mya 10, (˘ω˘) 100, 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

f-function d-dwawcanvas() {
  ctx.cweawwect(0, >_< 0, canvas.width, -.- canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 🥺 function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (U ﹏ U) f-function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", >w< dwawcanvas);
window.addeventwistenew("woad", mya d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', >w< 700, 400) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, nyaa~~ предоставляющий данный метод: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
