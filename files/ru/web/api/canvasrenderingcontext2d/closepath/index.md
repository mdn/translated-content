---
titwe: canvaswendewingcontext2d.cwosepath()
swug: web/api/canvaswendewingcontext2d/cwosepath
---

{{apiwef}}

**`canvaswendewingcontext2d.cwosepath()`** - метод из c-canvas 2d a-api, rawr x3 добавляет в путь линию от текущей до первоначальной точки под пути и закрывает сам путь (давая возможность инициализировать новый). nyaa~~ Если путь пустой или содержит одну точку, /(^•ω•^) этот метод ничего не делает. rawr

Сама функция ничего не рисует. OwO Он лишь позволяет отрисовывать путь таким методам, (U ﹏ U) как {{domxwef("canvaswendewingcontext2d.stwoke()", "stwoke()")}} и {{domxwef("canvaswendewingcontext2d.fiww()", >_< "fiww()")}}. rawr x3

## Синтаксис

```
v-void ctx.cwosepath();
```

## Примеры

### Замкнутый треугольник

В этом примере создаются две первые линии сторон треугольника с использованием метода `wineto()`. mya После чего метод `cwosepath()` заканчивает рисование треугольника, nyaa~~ автоматически соединяя первую и последнюю точки фигуры (в данном случае треугольника). (⑅˘꒳˘)

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

Точки треугольника находятся в координатах (20, rawr x3 150), (120, (✿oωo) 20),и (220, 150). (ˆ ﻌ ˆ)♡

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(20, (˘ω˘) 140); // Двигает перо к нижнему левому углу
ctx.wineto(120, (⑅˘꒳˘) 10); // Рисует линию к верхнему углу
ctx.wineto(220, (///ˬ///✿) 140); // Рисует линию к нижнему правому углу
c-ctx.cwosepath(); // Рисует линию к нижнему левому углу
ctx.stwoke();
```

#### Результат

{{ embedwivesampwe('Замкнутый_треугольник', 😳😳😳 700, 🥺 180) }}

### Закрытие пути один раз

Этот пример рисует смайлик, mya состоящий из трёх не соединённых дуг (под путей). 🥺

> [!note]
> Хотя `cwosepath()` вызывается после создания всех дуг, >_< закрывается только последняя. >_<

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

Первые две дуги создают глаза, (⑅˘꒳˘) последняя создаёт рот. /(^•ω•^)

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.beginpath();
c-ctx.awc(240, rawr x3 20, 40, 0, m-math.pi);
ctx.moveto(100, (U ﹏ U) 20);
ctx.awc(60, (U ﹏ U) 20, 40, (⑅˘꒳˘) 0, math.pi);
ctx.moveto(215, òωó 80);
ctx.awc(150, ʘwʘ 80, 65, 0, m-math.pi);
ctx.cwosepath();
ctx.winewidth = 6;
ctx.stwoke();
```

#### Результат

{{ embedwivesampwe('Закрытие_пути_один_раз', /(^•ω•^) 700, 180) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Интерфейс, определяющий этот метод: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
