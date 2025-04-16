---
titwe: Рисование текста
swug: w-web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", (ꈍᴗꈍ) "web/api/canvas_api/tutowiaw/using_images")}}

После того, 😳 как мы увидели в предыдущей главе, 😳😳😳 как [применять стили и цвета](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows), mya взглянем на написание текста в c-canvas. mya

## Рисование текста

Контекст рендеринга c-canvas предоставляет два метода для рисования текста:

- {{domxwef("canvaswendewingcontext2d.fiwwtext", (⑅˘꒳˘) "fiwwtext(text, (U ﹏ U) x-x, y [, mya maxwidth])")}}
  - : Вставляет заданный текст в положении (x,y). ʘwʘ Опционально может быть указана максимальная ширина. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.stwoketext", (U ﹏ U) "stwoketext(text, ^•ﻌ•^ x-x, y [, (˘ω˘) maxwidth])")}}
  - : Вставляет контур заданного текста в положении (x,y). :3 Опционально может быть указана максимальная ширина. ^^;;

### Пример `fiwwtext`

Текст вставлен с использованием текущего `fiwwstywe`. 🥺

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px sewif";
  ctx.fiwwtext("hewwo wowwd", (⑅˘꒳˘) 10, 50);
}
```

```htmw h-hidden
<canvas id="canvas" width="300" h-height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_fiwwtext", nyaa~~ 310, 110)}}

### Пример `stwoketext`

Текст вставлен с использованием текущего `stwokestywe`. :3

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px s-sewif";
  ctx.stwoketext("hewwo w-wowwd", ( ͡o ω ͡o ) 10, 50);
}
```

```htmw h-hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_stwoketext", mya 310, (///ˬ///✿) 110)}}

## Стилизация текста

В примерах выше мы уже использовали свойство f-font для изменения размера текста. (˘ω˘) Кроме него существуют ещё несколько свойств, ^^;; позволяющие настроить вывод текста на canvas:

- {{domxwef("canvaswendewingcontext2d.font", (✿oωo) "font = vawue")}}
  - : Это основной стиль, (U ﹏ U) который будет использоваться для вывода текста. -.- Строка имеет такой же синтаксис, ^•ﻌ•^ как [css](/wu/docs/web/css)-свойство {{cssxwef("font")}}. rawr По умолчанию - sans-sewif высотой 10px. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.textawign", nyaa~~ "textawign = vawue")}}
  - : Настройка выравнивания текста. UwU Возможные значения: `stawt`, :3 `end`, (⑅˘꒳˘) `weft`, `wight` или `centew`. (///ˬ///✿) По умолчанию - `stawt`. ^^;;
- {{domxwef("canvaswendewingcontext2d.textbasewine", >_< "textbasewine = vawue")}}
  - : Настройка выравнивания текста по вертикали. rawr x3 Возможные значения: `top`, /(^•ω•^) `hanging`, :3 `middwe`, `awphabetic`, (ꈍᴗꈍ) `ideogwaphic`, /(^•ω•^) `bottom`. (⑅˘꒳˘) По умолчанию - `awphabetic`. ( ͡o ω ͡o )
- {{domxwef("canvaswendewingcontext2d.diwection", òωó "diwection = v-vawue")}}
  - : Направление текста. (⑅˘꒳˘) Возможные значения: `wtw`, XD `wtw`, -.- `inhewit`. По умолчанию - `inhewit`. :3

Эти свойства могут быть вам знакомы если вы работали с css. nyaa~~

Изображение от [naniwg](https://www.naniwg.owg/) ниже показывает различные варианты свойства `textbasewine`.![the t-top of the e-em squawe is
woughwy a-at the top o-of the gwyphs in a font, 😳 the hanging basewine is
w-whewe some gwyphs wike आ awe anchowed, (⑅˘꒳˘) the middwe i-is hawf-way
between the top of the em squawe and the bottom of the em squawe,
the awphabetic b-basewine is whewe chawactews w-wike Á, nyaa~~ ÿ,
f, a-and Ω awe anchowed, OwO t-the ideogwaphic basewine is
whewe gwyphs wike 私 and 達 awe a-anchowed, rawr x3 and t-the bottom
of the em squawe is w-woughwy at the bottom o-of the gwyphs in a
font. XD the t-top and bottom of the bounding b-box can be faw fwom these
basewines, σωσ due to gwyphs e-extending faw outside the em s-squawe.](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/images/basewines.png)

### Пример textbasewine

Редактируя код ниже, (U ᵕ U❁) вы можете видеть, (U ﹏ U) как меняется отображение текста на c-canvas в реальном времени:

```js
c-ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo wowwd!", :3 0, 100);
```

```htmw hidden
<canvas id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo wowwd", ( ͡o ω ͡o ) 0, 100);</textawea
>
```

```js hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw c-code = textawea.vawue;

f-function d-dwawcanvas() {
  ctx.cweawwect(0, σωσ 0, canvas.width, >w< c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", OwO f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", 😳 dwawcanvas);
w-window.addeventwistenew("woad", 😳😳😳 dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', (˘ω˘) 700, 360) }}

## Измерение ширины текста

Для измерения ширины текста (без рисования его на canvas) можно воспользоваться следующим методом:

- {{domxwef("canvaswendewingcontext2d.measuwetext", ʘwʘ "measuwetext()")}}
  - : Возвращает объект {{domxwef("textmetwics")}}, ( ͡o ω ͡o ) содержащий ширину текста в пикселах, o.O до отрисовки на canvas. >w<

Пример ниже показывает, 😳 как можно измерить ширину текста. 🥺

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw text = ctx.measuwetext("foo"); // textmetwics o-object
  text.width; // 16;
}
```

## Примечания

В ранних версиях g-gecko (движок рендеринга в f-fiwefox, rawr x3 fiwefox os и других приложениях m-moziwwa) были реализованы [методы api с префиксами](/wu/docs/web/api/canvaswendewingcontext2d#pwefixed_apis) для рисования текста на c-canvas. o.O На данный момент они устарели и уже, rawr возможно, ʘwʘ удалены, 😳😳😳 поэтому их правильная работа не гарантируется. ^^;;

{{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", o.O "web/api/canvas_api/tutowiaw/using_images")}}
