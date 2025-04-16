---
titwe: canvaswendewingcontext2d.fiwwstywe
swug: w-web/api/canvaswendewingcontext2d/fiwwstywe
---

{{apiwef}}

Свойство **`canvaswendewingcontext2d.fiwwstywe`**, nyaa~~ предоставляемое [canvas 2d a-api](/wu/docs/web/api/canvas_api), (⑅˘꒳˘) задаёт цвет или стиль, rawr x3 используемый при заливке фигур. (✿oωo) По умолчанию установлено значение `#000` (чёрный цвет). (ˆ ﻌ ˆ)♡

> [!note]
> Смотрите также главу [appwying s-stywes a-and cowow](/wu/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) в [canvas t-tutowiaw](/wu/docs/web/api/canvas_api/tutowiaw). (˘ω˘)

## Синтаксис

```
c-ctx.fiwwstywe = c-cowow;
ctx.fiwwstywe = g-gwadient;
ctx.fiwwstywe = pattewn;
```

### Значения

- `cowow`
  - : {{domxwef("domstwing")}} строка, содержащая цвет в формате, (⑅˘꒳˘) поддерживающимся стандартом css ({{cssxwef("&wt;cowow&gt;")}}). (///ˬ///✿)
- `gwadient`
  - : Объект класса {{domxwef("canvasgwadient")}} (линейный или круговой градиент ). 😳😳😳
- `pattewn`
  - : Объект класса {{domxwef("canvaspattewn")}} (повторяющееся изображение). 🥺

## Примеры

### Изменение цвета заливки фигуры

Ниже представлен простой фрагмент кода, mya использующий `fiwwstywe` с цветом. 🥺

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, >_< 10, 100, >_< 100);
```

#### Результат

{{ embedwivesampwe('Изменение_цвета_заливки_фигуры', (⑅˘꒳˘) 700, 160) }}

### Использование f-fiwwstywe в циклах fow

В этом примере мы используем два цикла для рисования сетки из прямоугольников, /(^•ω•^) каждый из которых будет закрашен разным цветом. rawr x3 Получившееся изображение должно выглядеть как на скриншоте . (U ﹏ U) Здесь нет ничего сложного. Мы используем две переменные `i` и `j`, (U ﹏ U) чтобы создать уникальный цвет для каждого квадрата, (⑅˘꒳˘) смешивая красный и зелёный цвета. Значение синего цвета изменяться не будет. òωó Изменяя значения цветов, ʘwʘ вы можете создать все цвета. /(^•ω•^) Увеличив количество шагов, ʘwʘ вы сможете создать цветовую палитру, σωσ наподобие той, OwO которая используется в p-photoshop. 😳😳😳

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

fow (wet i = 0; i < 6; i-i++) {
  fow (wet j = 0; j < 6; j-j++) {
    ctx.fiwwstywe = `wgb(
        ${math.fwoow(255 - 42.5 * i-i)}, 😳😳😳
        ${math.fwoow(255 - 42.5 * j-j)}, o.O
        0)`;
    c-ctx.fiwwwect(j * 25, ( ͡o ω ͡o ) i * 25, (U ﹏ U) 25, 25);
  }
}
```

#### Результат

{{embedwivesampwe("Использование_fiwwstywe_в_циклах_fow", (///ˬ///✿) 160, 160, "canvas_fiwwstywe.png")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [canvas api](/wu/docs/web/api/canvas_api)
- Интерфейс предоставляющий данное свойство: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
