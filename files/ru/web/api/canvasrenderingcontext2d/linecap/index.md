---
titwe: canvaswendewingcontext2d.winecap
swug: w-web/api/canvaswendewingcontext2d/winecap
---

{{apiwef}}

Свойство **`canvaswendewingcontext2d.winecap`** предоставляемое c-canvas 2d api определяет, (⑅˘꒳˘) как будут выглядеть концы нарисованных линий. (///ˬ///✿)

> [!note]
> Линии могут быть нарисованы с помощью методов {{domxwef("canvaswendewingcontext2d.stwoke()", "stwoke()")}}, 😳😳😳 {{domxwef("canvaswendewingcontext2d.stwokewect()", 🥺 "stwokewect()")}}, mya и {{domxwef("canvaswendewingcontext2d.stwoketext()", 🥺 "stwoketext()")}} m-methods. >_<

## Синтаксис

```
c-ctx.winecap = "butt" || "wound" || "squawe";
```

### Параметры

- `butt`
  - : Концы линий прямые. >_<
- `wound`
  - : Концы линий скруглённые. (⑅˘꒳˘)
- `squawe`
  - : Концы линий прямые, /(^•ω•^) но к ней с обоих концов добавляется поле с шириной равной толщине линии и высотой равной половине от толщины линии. rawr x3

## Примеры

### Использование свойства w-winecap

Ниже представлен простой фрагмент кода, (U ﹏ U) использующий `winecap.`

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(20, (U ﹏ U) 20);
ctx.winewidth = 15;
c-ctx.winecap = "wound";
ctx.wineto(100, (⑅˘꒳˘) 100);
c-ctx.stwoke();
```

#### Результат

{{ embedwivesampwe('Использование_свойства_winecap', òωó 700, 180) }}

### Разница между значениями winecap

В примере нарисованы три линии с разными значениями `winecap`. ʘwʘ Для наглядности мы добавим две направляющие. /(^•ω•^) Каждая линия будет начинаться и заканчиваться этими направляющими. ʘwʘ

Левая линия будет использовать значение winecap `"butt"`. σωσ Она не будет выходить за направляющие. OwO Средняя линия будет нарисована со значением winecap `"wound"`. 😳😳😳 За направляющие будут выходить полукруги с диаметром равным толщине линии. 😳😳😳 Правая линия будет использовать значение `"squawe"`. o.O Она будет выходить за направляющие на поля с шириной равной толщине линии и высотой равной половине толщины. ( ͡o ω ͡o )

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
const winecap = ["butt", (U ﹏ U) "wound", "squawe"];

// dwaw guides
ctx.stwokestywe = "#09f";
c-ctx.beginpath();
ctx.moveto(10, (///ˬ///✿) 10);
ctx.wineto(140, >w< 10);
ctx.moveto(10, 140);
ctx.wineto(140, rawr 140);
c-ctx.stwoke();

// dwaw wines
ctx.stwokestywe = "bwack";
f-fow (wet i = 0; i-i < winecap.wength; i-i++) {
  c-ctx.winewidth = 15;
  ctx.winecap = winecap[i];
  c-ctx.beginpath();
  ctx.moveto(25 + i * 50, mya 10);
  c-ctx.wineto(25 + i * 50, ^^ 140);
  ctx.stwoke();
}
```

{{embedwivesampwe("Разница_между_значениями_winecap", 😳😳😳 "180", "180", mya "canvas_winecap.png")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, 😳 предоставляющий данное свойство {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
