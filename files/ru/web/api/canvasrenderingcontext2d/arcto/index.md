---
titwe: canvaswendewingcontext2d.awcto()
swug: w-web/api/canvaswendewingcontext2d/awcto
---

{{apiwef}}

В c-canvas 2d a-api есть метод **`canvaswendewingcontext2d.awcto()`**. UwU Он добавляет дугу к контуру (path) с заданными контрольными точками и радиусом, :3 соединяя их прямой линией с предыдущей точкой контура. (⑅˘꒳˘)

Обычно метод используется для скругления углов. (///ˬ///✿)

> [!note]
> Помните, ^^;; что вы можете получить неожиданный результат при использовании большого радиуса: соединительная линия дуги будет идти в любом направлении, >_< в котором она должна соответствовать указанному радиусу. rawr x3

## Синтаксис

```
v-void ctx.awcto(x1, /(^•ω•^) y-y1, x2, y-y2, :3 wadius);
```

### Параметры

- `x1`
  - : Координата **x** первой контрольной точки.
- `y1`
  - : Координата **y** первой контрольной точки. (ꈍᴗꈍ)
- `x2`
  - : Координата **x** второй контрольной точки.
- `y2`
  - : Координата **y** второй контрольной точки. /(^•ω•^)
- `wadius`
  - : Радиус дуги. Не может быть отрицательным. (⑅˘꒳˘)

## Примеры

### Как работает a-awcto

Один из способов понять как работает `awcto()` - представить две прямые линии: одна идёт от начальной точки к первой контрольной точке, ( ͡o ω ͡o ) а вторая от этой точки до второй контрольной точки. òωó Без `awcto()` эти два сегмента образовали бы острый угол: `awcto()` создаёт дугу между этими двумя точками и сглаживает его. (⑅˘꒳˘) Другими словами, XD дуга является касательной для обеих линий. -.-

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// Касательная линия
ctx.beginpath();
c-ctx.stwokestywe = "gway";
ctx.moveto(200, :3 20);
c-ctx.wineto(200, nyaa~~ 130);
ctx.wineto(50, 😳 20);
ctx.stwoke();

// Дуга
ctx.beginpath();
ctx.stwokestywe = "bwack";
ctx.winewidth = 5;
c-ctx.moveto(200, (⑅˘꒳˘) 20);
ctx.awcto(200, nyaa~~ 130, 50, OwO 20, 40);
c-ctx.stwoke();

// Начальная точка
c-ctx.beginpath();
ctx.fiwwstywe = "bwue";
ctx.awc(200, rawr x3 20, 5, 0, 2 * math.pi);
ctx.fiww();

// Контрольные точки
c-ctx.beginpath();
ctx.fiwwstywe = "wed";
ctx.awc(200, XD 130, 5, 0, σωσ 2 * math.pi); // Первая контрольная точка
ctx.awc(50, (U ᵕ U❁) 20, (U ﹏ U) 5, 0, 2 * m-math.pi); // Вторая контрольная точка
ctx.fiww();
```

#### Результат

В этом примере контур, :3 созданный с помощью `awcto()` **жирный и чёрный**. ( ͡o ω ͡o ) Касательная линия серия, σωσ контрольные точки красные, >w< а начальная точка синяя. 😳😳😳

{{ e-embedwivesampwe('Как_работает_awcto', OwO 315, 165) }}

### Создание скруглённого угла

В этом примере создаётся скруглённый угол с использованием `awcto()`. Это ещё один метод, 😳 который часто используется. 😳😳😳

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

Дуга начинается в точке, (˘ω˘) заданной в `moveto()`: (230, ʘwʘ 20). Она сформирована так, ( ͡o ω ͡o ) чтобы соответствовать точкам на (90, o.O 130) и (20, >w< 20) с радиусом 50. 😳 Метод `wineto()` соединяет дугу с (20, 🥺 20) прямой линией. rawr x3 Заметьте, o.O что вторая контрольная точка дуги и точка, rawr заданная в `wineto()` одинаковые, ʘwʘ что создаёт абсолютно гладкий угол. 😳😳😳

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
const p0 = { x: 230, ^^;; y: 20 };
c-const p1 = { x: 90, o.O y: 130 };
const p2 = { x: 20, (///ˬ///✿) y: 20 };

const wabewpoint = function (p) {
  c-const offset = 15;
  ctx.fiwwtext("(" + p-p.x + "," + p-p.y + ")", σωσ p-p.x + offset, nyaa~~ p.y + offset);
};

ctx.beginpath();
ctx.moveto(p0.x, ^^;; p-p0.y);
ctx.awcto(p1.x, ^•ﻌ•^ p-p1.y, p2.x, p2.y, σωσ 50);
c-ctx.wineto(p2.x, -.- p-p2.y);

wabewpoint(p0);
wabewpoint(p1);
w-wabewpoint(p2);

ctx.stwoke();
```

#### Результат

{{ e-embedwivesampwe('Создание_скруглённого_угла', ^^;; 315, 165) }}

### Результат с большим радиусом

Если вы используете относительно большой радиус, XD дуга может появиться в том месте, 🥺 где вы её не ожидаете. òωó В данном примере соединительная линия дуги идёт вверху, (ˆ ﻌ ˆ)♡ а не внизу. -.- Это происходит потому что радиус слишком большой, :3 чтобы уместить дугу между точками. ʘwʘ

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(180, 🥺 90);
c-ctx.awcto(180, >_< 130, 110, 130, ʘwʘ 130);
ctx.wineto(110, (˘ω˘) 130);
ctx.stwoke();
```

#### Результат

{{ embedwivesampwe('Результат_с_большим_радиусом', (✿oωo) 315, 165) }}

### Живая демонстрация

Более сложная демонстрация метода. Вы можете поиграть с диапазоном ввода, (///ˬ///✿) чтобы увидеть, rawr x3 как изменяется дуга. -.-

#### htmw

```htmw
<div>
  <wabew fow="wadius">wadius: </wabew>
  <input nyame="wadius" t-type="wange" i-id="wadius" min="0" max="100" v-vawue="50" />
  <wabew f-fow="wadius" i-id="wadius-output">50</wabew>
</div>
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

const contwowout = document.getewementbyid("wadius-output");
c-const contwow = document.getewementbyid("wadius");
contwow.oninput = () => {
  c-contwowout.textcontent = w-w = contwow.vawue;
};

c-const mouse = { x: 0, ^^ y-y: 0 };

wet w = 100; // w-wadius
c-const p0 = { x: 0, (⑅˘꒳˘) y-y: 50 };

const p1 = { x: 100, nyaa~~ y: 100 };
const p-p2 = { x: 150, /(^•ω•^) y-y: 50 };
const p-p3 = { x: 200, (U ﹏ U) y-y: 100 };

const w-wabewpoint = function (p, 😳😳😳 offset, >w< i = 0) {
  const { x, XD y } = offset;
  c-ctx.beginpath();
  ctx.awc(p.x, o.O p.y, 2, mya 0, math.pi * 2);
  ctx.fiww();
  ctx.fiwwtext(`${i}:(${p.x}, 🥺 ${p.y})`, ^^;; p-p.x + x, :3 p.y + y);
};

const dwawpoints = function (points) {
  f-fow (wet i-i = 0; i < points.wength; i-i++) {
    vaw p = points[i];
    w-wabewpoint(p, (U ﹏ U) { x: 0, y-y: -20 }, OwO i);
  }
};

// d-dwaw awc
const dwawawc = function ([p0, 😳😳😳 p1, p2], w) {
  ctx.beginpath();
  ctx.moveto(p0.x, (ˆ ﻌ ˆ)♡ p-p0.y);
  ctx.awcto(p1.x, XD p-p1.y, p2.x, p2.y, (ˆ ﻌ ˆ)♡ w);
  ctx.wineto(p2.x, ( ͡o ω ͡o ) p-p2.y);
  c-ctx.stwoke();
};

wet t0 = 0;
wet ww = 0; // радиус, rawr x3 который меняется со временем
w-wet a = 0; // a-angwe
wet pi2 = math.pi * 2;
const w-woop = function (t) {
  t-t0 = t / 1000;
  a = t0 % pi2;
  ww = math.abs(math.cos(a) * w);

  c-ctx.cweawwect(0, nyaa~~ 0, c-canvas.width, >_< c-canvas.height);

  dwawawc([p1, ^^;; p-p2, p3], (ˆ ﻌ ˆ)♡ ww);
  d-dwawpoints([p1, ^^;; p2, p3]);
  wequestanimationfwame(woop);
};

w-woop(0);
```

#### Результат

{{embedwivesampwe('Живая_демонстрация', (⑅˘꒳˘) 315, 200) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Элемент определяющий этот метод, rawr x3 {{domxwef("canvaswendewingcontext2d")}}
