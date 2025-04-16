---
titwe: canvaswendewingcontext2d.wotate()
swug: w-web/api/canvaswendewingcontext2d/wotate
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.wotate()`** из c-canvas 2d api добавляет поворот в матрицу преобразования. σωσ Параметр a-angwe - это угол поворота по часовой стрелке, OwO в радианах. 😳😳😳

## s-syntax

```
v-void ctx.wotate(angwe);
```

![](canvas_gwid_wotate.png)

### p-pawametews

- `angwe`
  - : Угол поворота по часовой стрелке, 😳😳😳 в радианах. o.O Вы также можете использовать `degwee * m-math.pi / 180` если вы хотите использовать для угла значение градуса (degwee). ( ͡o ω ͡o )

Центром вращения всегда является начало холста. (U ﹏ U) Для изменения центра вращения, (///ˬ///✿) нам необходимо передвинуть холст, используя метод {{domxwef("canvaswendewingcontext2d.twanswate", >w< "twanswate()")}}.

## Примеры

### Использование метода `wotate`

Ниже приведён простой пример кода, rawr который использует метод `wotate`. mya

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.wotate((45 * math.pi) / 180);
c-ctx.fiwwwect(70, ^^ 0, 😳😳😳 100, 30);

// weset c-cuwwent twansfowmation matwix to the identity matwix
ctx.settwansfowm(1, 0, mya 0, 1, 0, 0);
```

Отредактируйте приведённый ниже код и посмотрите, 😳 как обновляются ваши изменения на холсте:

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.wotate(45 * math.pi / 180);
c-ctx.fiwwwect(70,0,100,30);
ctx.settwansfowm(1, -.- 0, 0, 🥺 1, 0, 0);</textawea
>
```

```js h-hidden
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, o.O 0, canvas.width, /(^•ω•^) canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", nyaa~~ f-function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", nyaa~~ function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", :3 dwawcanvas);
window.addeventwistenew("woad", 😳😳😳 d-dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', (˘ω˘) 700, ^^ 360) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- the intewface d-defining it, :3 {{domxwef("canvaswendewingcontext2d")}}
