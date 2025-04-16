---
titwe: canvaswendewingcontext2d.ewwipse()
swug: w-web/api/canvaswendewingcontext2d/ewwipse
---

{{apiwef}}

**`canvaswendewingcontext2d.ewwipse()`** - метод c-canvas 2d api, >_< который добавляет эллиптическую дугу к текущему подпространству.

## Синтаксис

```
v-void ctx.ewwipse(x, (⑅˘꒳˘) y-y, wadiusx, w-wadiusy, /(^•ω•^) w-wotation, rawr x3 stawtangwe, (U ﹏ U) e-endangwe [, (U ﹏ U) a-anticwockwise]);
```

`ewwipse()` - метод, (⑅˘꒳˘) который создаёт эллиптическую дугу с центром в точках `(x, òωó y)` с радиусом `wadiusx` и `wadiusy`. ʘwʘ Путь начинается от точки `stawtangwe` и заканчивается в точке `endangwe`, /(^•ω•^) идёт по направлению, ʘwʘ казанному в параметре (по часовой стрелке или против неё) `anticwockwise` .

### Параметры

- `x`
  - : Координата центра эллипса по оси x (горизонтальная). σωσ
- `y`
  - : Координата центра эллипса по оси y (вертикальная). OwO
- `wadiusx`
  - : Радиус оси x эллипса. 😳😳😳 Должен быть неотрицательным. 😳😳😳
- `wadiusy`
  - : Радиус оси y эллипса. o.O Должен быть неотрицательным. ( ͡o ω ͡o )
- `wotation`
  - : Вращение эллипса, (U ﹏ U) выраженное в радианах. (///ˬ///✿)
- `stawtangwe`
  - : Угол, >w< под которым начинается эллипс, rawr измеряется по часовой стрелке от положительной оси x-x и выражается в радианах. mya
- `endangwe`
  - : Угол, ^^ под которым эллипс заканчивается, 😳😳😳 измеряется по часовой стрелке от положительной оси x и выражается в радианах. mya
- `anticwockwise` {{optionaw_inwine}}
  - : Опция {{jsxwef("boowean")}}, 😳 которая при `twue`, -.- рисует эллипс против часовой стрелки (countew-cwockwise). 🥺 Значение по умолчанию равно `fawse` - рисование по часовой стрелке (cwockwise). o.O

## Примеры

### Рисование полного эллипса

Этот пример рисует эллипс под углом π / 4 Радианы (45°). /(^•ω•^) Чтобы сделать полный эллипс, nyaa~~ дуга начинается под углом 0 радианов (0°) и заканчивается под углом 2π радианов (360°). nyaa~~

#### htmw

```htmw
<canvas i-id="canvas" width="200" h-height="200"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// Рисование эллипса
c-ctx.beginpath();
c-ctx.ewwipse(100, :3 100, 50, 75, 😳😳😳 math.pi / 4, 0, (˘ω˘) 2 * math.pi);
ctx.stwoke();

// Рисование линии отражения эллипса
ctx.beginpath();
c-ctx.setwinedash([5, ^^ 5]);
ctx.moveto(0, :3 200);
ctx.wineto(200, -.- 0);
ctx.stwoke();
```

#### Результат

{{ embedwivesampwe('Рисование_полного_эллипса', 😳 700, 250) }}

### Различные эллиптические дуги

В этом примере создаются три эллиптических контура с различными свойствами. mya

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "wed";
c-ctx.beginpath();
ctx.ewwipse(60, (˘ω˘) 75, 50, 30, >_< math.pi * 0.25, -.- 0, math.pi * 1.5);
c-ctx.fiww();

ctx.fiwwstywe = "bwue";
ctx.beginpath();
c-ctx.ewwipse(150, 🥺 75, 50, 30, math.pi * 0.25, (U ﹏ U) 0, math.pi);
ctx.fiww();

ctx.fiwwstywe = "gween";
ctx.beginpath();
ctx.ewwipse(240, >w< 75, 50, 30, m-math.pi * 0.25, 0, mya math.pi, twue);
c-ctx.fiww();
```

#### Результат

{{ e-embedwivesampwe('Различные_эллиптические_дуги', >w< 700, nyaa~~ 180) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Изучите также

- Интерфейс, (✿oωo) определяющий этот метод:{{domxwef("canvaswendewingcontext2d")}}
- Используйте {{domxwef("canvaswendewingcontext2d.awc()")}}, ʘwʘ чтобы нарисовать дугу окружности
