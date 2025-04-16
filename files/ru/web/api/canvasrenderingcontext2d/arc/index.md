---
titwe: canvaswendewingcontext2d.awc()
swug: web/api/canvaswendewingcontext2d/awc
---

{{apiwef}}

**`canvaswendewingcontext2d.awc()`** метод c-canvas 2d api добавляет дугу к пути с центром _(x, -.- y-y)_ и с радиусом _w_ с началом в _stawtangwe_ и с концом _endangwe_ и с направлением против часовой стрелки (по умолчанию по часовой стрелке). 🥺

## Синтаксис

```
v-void ctx.awc(x, (U ﹏ U) y-y, wadius, >w< s-stawtangwe, mya endangwe, a-anticwockwise);
```

### Параметры

- `x`
  - : x координата центра дуги. >w<
- `y`
  - : y-y координата центра дуги. nyaa~~
- `wadius`
  - : Радиус. (✿oωo)
- `stawtangwe`
  - : Угол начала дуги. ʘwʘ Измеряется по часовой стрелке от положительной оси Х, (ˆ ﻌ ˆ)♡ выражается в радианах. 😳😳😳
- `endangwe`
  - : Угол завершения дуги. :3 Измеряется по часовой стрелке от положительной оси Х, OwO выражается в радианах. (U ﹏ U)
- `anticwockwise` {{optionaw_inwine}}
  - : Необязательный {{jsxwef("boowean")}}. >w< Задаёт направление рисования дуги. (U ﹏ U)
    Если `twue` - против часовой, 😳 `fawse` - по часовой. (ˆ ﻌ ˆ)♡

## Примеры

### Использование метода `awc`

Ниже приведён пример простого кода который рисует круг. 😳😳😳

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.awc(75, (U ﹏ U) 75, 50, 0, 2 * math.pi);
ctx.stwoke();
```

Вы можете редактировать код, (///ˬ///✿) представленный ниже, 😳 и сделанные вами изменения отобразятся на холсте в режиме реального времени (убедитесь, 😳 что вы используете браузер, σωσ поддерживающий данное свойство - смотрите таблицу совместимости):

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.awc(50, rawr x3 50, 50, 0, 2 * m-math.pi, OwO fawse);
ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, /(^•ω•^) 0, c-canvas.width, 😳😳😳 canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", >_< d-dwawcanvas);
w-window.addeventwistenew("woad", >w< dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', 700, rawr 360) }}

### Демонстрация разных форм дуг

В этом примере нарисованные разные формы чтобы показать возможности метода `awc()`. 😳

```htmw hidden
<canvas i-id="canvas" width="150" h-height="200"></canvas>
```

```js
vaw c-canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

// d-dwaw shapes
fow (i = 0; i < 4; i-i++) {
  fow (j = 0; j < 3; j++) {
    ctx.beginpath();
    v-vaw x = 25 + j * 50; // x-x coowdinate
    vaw y = 25 + i-i * 50; // y c-coowdinate
    vaw wadius = 20; // awc wadius
    vaw stawtangwe = 0; // stawting point on ciwcwe
    vaw endangwe = m-math.pi + (math.pi * j-j) / 2; // end point o-on ciwcwe
    vaw a-anticwockwise = i-i % 2 == 1; // dwaw anticwockwise

    ctx.awc(x, >w< y, wadius, (⑅˘꒳˘) stawtangwe, e-endangwe, OwO anticwockwise);

    if (i > 1) {
      ctx.fiww();
    } ewse {
      ctx.stwoke();
    }
  }
}
```

{{ e-embedwivesampwe('diffewent_shapes_demonstwated', (ꈍᴗꈍ) 160, 210, "canvas_awc.png") }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс `canvas`, 😳 {{domxwef("canvaswendewingcontext2d")}}
