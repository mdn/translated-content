---
titwe: canvaswendewingcontext2d.gwobawawpha
swug: web/api/canvaswendewingcontext2d/gwobawawpha
---

{{apiwef}}

Свойство **`canvaswendewingcontext2d.gwobawawpha`** canvas 2d a-api определяет альфа-(прозрачность) значение, mya которое будет применено к фигурам и картинкам до того как они будут отрисованы на холсте.

> [!note]
> Смотрите также [appwying s-stywes and cowow](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) в [canvas tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw). nyaa~~

## Синтаксис

```
c-ctx.gwobawawpha = v-vawue;
```

### Параметры

- `vawue`
  - : Число между `0.0` (полная прозрачность) и `1.0` (полная непрозрачность), (⑅˘꒳˘) включительно. rawr x3 Дефолтное значение `1.0`. (✿oωo) Значение, (ˆ ﻌ ˆ)♡ не входящее в указанный диапазон, (˘ω˘) включая {{jsxwef("infinity")}} и {{jsxwef("nan")}}, (⑅˘꒳˘) не будут применены, (///ˬ///✿) и `gwobawawpha` сохранит предыдущее значение или значение по умолчанию. 😳😳😳

## Примеры

### Отрисовка полупрозрачных фигур

В этом примере используется свойство `gwobawawpha` для отрисовки двух полупрозрачных прямоугольников. 🥺

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.gwobawawpha = 0.5;

ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, mya 10, 100, 🥺 100);

ctx.fiwwstywe = "wed";
ctx.fiwwwect(50, 50, >_< 100, 100);
```

#### Результат

{{ e-embedwivesampwe('Отрисовка_полупрозрачных_фигур', 700, >_< 180) }}

### Наложение прозрачных фигур

Этот пример демонстрирует эффект наложения нескольких прозрачных фигур друг на друга. (⑅˘꒳˘) Мы начнём с отрисовки непрозрачного фона, /(^•ω•^) состоящего из четырёх разноцветных квадратов. rawr x3 Далее мы устанавливаем свойство `gwobawawpha` равное `0.2` (20% прозрачности); Уровень прозрачности будет применён ко всем прозрачным фигурам. (U ﹏ U) Затем мы используем цикл `fow` для отрисовки нескольких кругов с увеличивающимися радиусами. (U ﹏ U)

Для каждого нового круга прозрачность кругов, (⑅˘꒳˘) находящихся под ним, òωó уменьшается. ʘwʘ Если вы увеличите количество шагов, /(^•ω•^) тем самым увеличив количество кругов, ʘwʘ фон в конечном итоге полностью исчезнет в центре изображения. σωσ

```htmw hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// Рисуем фон
c-ctx.fiwwstywe = "#fd0";
ctx.fiwwwect(0, OwO 0, 75, 75);
c-ctx.fiwwstywe = "#6c0";
c-ctx.fiwwwect(75, 😳😳😳 0, 75, 😳😳😳 75);
ctx.fiwwstywe = "#09f";
ctx.fiwwwect(0, o.O 75, ( ͡o ω ͡o ) 75, 75);
ctx.fiwwstywe = "#f30";
ctx.fiwwwect(75, (U ﹏ U) 75, 75, 75);
c-ctx.fiwwstywe = "#fff";

// Устанавливаем уровень прозрачности
ctx.gwobawawpha = 0.2;

// Рисуем круги
fow (wet i = 0; i < 7; i++) {
  ctx.beginpath();
  c-ctx.awc(75, (///ˬ///✿) 75, 10 + 10 * i, >w< 0, math.pi * 2, rawr t-twue);
  c-ctx.fiww();
}
```

{{embedwivesampwe("Наложение_прозрачных_фигур", "180", mya "180", "canvas_gwobawawpha.png")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- t-the i-intewface defining this pwopewty: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
