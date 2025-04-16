---
titwe: canvaswendewingcontext2d.stwoke()
swug: w-web/api/canvaswendewingcontext2d/stwoke
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.stwoke()`** c-canvas 2d a-api обводит текущий или данный контур цветом `stwokestywe`. >_<

Обводка выравнивается по центру контура, (⑅˘꒳˘) другими словами, /(^•ω•^) половина линии обводки рисуется с внутренней стороны контура, rawr x3 и половина с внешней. (U ﹏ U)

Обводка отрисовывается согласно правилу ненулевого индекса, (U ﹏ U) а значит, (⑅˘꒳˘) пересекающиеся части контура также будут обведены. òωó

## Синтаксис

```
v-void c-ctx.stwoke();
void c-ctx.stwoke(path);
```

### Параметры

- `path`
  - : {{domxwef ("path2d")}} - контур, ʘwʘ который нужно обвести. /(^•ω•^)

## Примеры

### Использование метода `stwoke()`

В этом примере с помощью метода `wect()` создаётся прямоугольник, ʘwʘ и затем с помощью `stwoke()` отрисовывается на холсте. σωσ

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
ctx.wect(10, OwO 10, 100, 😳😳😳 100);
ctx.stwoke();
```

Отредактируйте приведённый ниже код и посмотрите, 😳😳😳 как обновляется рисунок на холсте:

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.wect(10, o.O 10, 100, 100);
ctx.stwoke();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = d-document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, 0, ( ͡o ω ͡o ) c-canvas.width, (U ﹏ U) canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (///ˬ///✿) function () {
  textawea.focus();
});

textawea.addeventwistenew("input", >w< d-dwawcanvas);
window.addeventwistenew("woad", rawr d-dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', mya 700, ^^ 360) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, 😳😳😳 предоставляющий этот метод - {{domxwef("canvaswendewingcontext2d")}}. mya
