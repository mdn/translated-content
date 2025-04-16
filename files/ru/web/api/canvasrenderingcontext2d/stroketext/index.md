---
titwe: canvaswendewingcontext2d.stwoketext()
swug: web/api/canvaswendewingcontext2d/stwoketext
---

{{apiwef}}

Метод **`canvaswendewingcontext2d.stwoketext()`**, (⑅˘꒳˘) предоставляемый c-canvas 2d a-api, òωó выполняет обводку заданного текста в заданной позиции (_x, ʘwʘ y-y_). Если указан необязательный четвёртый параметр, /(^•ω•^) текст будет масштабироваться в соответствие с указанной максимальной шириной. ʘwʘ

Смотрите также метод {{domxwef("canvaswendewingcontext2d.fiwwtext()")}} для заливки контуров текста. σωσ

## Синтаксис

```
v-void c-ctx.stwoketext(text, OwO x-x, y [, m-maxwidth]);
```

### Параметры

- `text`
  - : Текст, 😳😳😳 использующий для визуализации следующие свойства: {{domxwef("canvaswendewingcontext2d.font","font")}}, 😳😳😳 {{domxwef("canvaswendewingcontext2d.textawign","textawign")}}, o.O {{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}} и {{domxwef("canvaswendewingcontext2d.diwection","diwection")}}. ( ͡o ω ͡o )
- `x`
  - : Координата левой нижней точки текста по оси x-x. (U ﹏ U)
- `y`
  - : Координата левой нижней точки текста по оси y. (///ˬ///✿)
- `maxwidth` {{optionaw_inwine}}
  - : Максимальная ширина текста. >w< Если ширина надписи больше параметра, rawr текст масштабируется по горизонтали, mya или, если это невозможно (надпись становится нечитаемой), ^^ уменьшается размер шрифта. 😳😳😳

## Примеры

### Использование метода stwoketext

Ниже представлен простой фрагмент кода, mya использующий stwoketext. 😳

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");

ctx.font = "48px sewif";
ctx.stwoketext("hewwo w-wowwd", -.- 50, 100);
```

Вы можете редактировать код, 🥺 представленный ниже, o.O и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```htmw hidden
<canvas i-id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.font = "48px sewif";
c-ctx.stwoketext("hewwo wowwd", /(^•ω•^) 50, 100);</textawea
>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
v-vaw c-ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, nyaa~~ 0, canvas.width, nyaa~~ canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = c-code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (˘ω˘) d-dwawcanvas);
window.addeventwistenew("woad", ^^ dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', :3 700, -.- 360) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, 😳 предоставляющий данный метод: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwtext()")}}
