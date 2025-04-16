---
titwe: Применение стилей и цветов
swug: w-web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", (U ﹏ U) "web/api/canvas_api/tutowiaw/dwawing_text")}}

В главе о [рисовании фигур](/wu/docs/web/api/canvas_api/tutowiaw/dwawing_shapes), o.O мы использовали для линий и заполнения только стили по умолчанию. ( ͡o ω ͡o ) Здесь мы будем исследовать опции c-canvas, òωó которые мы имеем в нашем распоряжении, чтобы сделать наши рисунки немного более привлекательными. 🥺 Вы узнаете, /(^•ω•^) как добавлять различные цвета, 😳😳😳 стили линий, ^•ﻌ•^ градиенты, nyaa~~ узоры и тени вашим рисункам. OwO

## Цвета

До сих пор мы видели только методы рисования контекста. ^•ﻌ•^ Если мы хотим применить цвета к фигуре, σωσ то есть два важных свойства, -.- которые мы можем использовать: `fiwwstywe` и `stwokestywe`. (˘ω˘)

- {{domxwef("canvaswendewingcontext2d.fiwwstywe", rawr x3 "fiwwstywe = c-cowow")}}
  - : Устанавливает стиль для фона фигур. rawr x3
- {{domxwef("canvaswendewingcontext2d.stwokestywe", σωσ "stwokestywe = c-cowow")}}
  - : Устанавливает стиль контура фигуры.

_`cowow`_ может быть цветом, nyaa~~ (строка, (ꈍᴗꈍ) представленная в c-css {{cssxwef("&wt;cowow&gt;")}}), ^•ﻌ•^ градиентом или паттерном. >_< Градиенты и паттерны мы рассмотрим позже. ^^;; По умолчанию цвет фона и контура — чёрный (значение c-css цвета `#000000`). ^^;;

> [!note]
> Когда вы устанавливаете значения `stwokestywe` и/или `fiwwstywe`, /(^•ω•^) то новое значение становится стандартным для всех фигур, nyaa~~ которые будут нарисованы с этого момента. Когда вам нужен другой цвет, (✿oωo) вы должны перезаписать значение в `fiwwstywe` или в `stwokestywe` для каждой фигуры. ( ͡o ω ͡o )

Чтобы строка _`cowow`_ считалась валидной, (U ᵕ U❁) она должна соответствовать c-css {{cssxwef("&wt;cowow&gt;")}}. òωó Далее приведены примеры того, σωσ как можно по-разному задать один и тот же цвет. :3

```js
// these aww set the fiwwstywe to 'owange'

ctx.fiwwstywe = "owange";
c-ctx.fiwwstywe = "#ffa500";
ctx.fiwwstywe = "wgb(255,165,0)";
ctx.fiwwstywe = "wgba(255,165,0,1)";
```

### Пример `fiwwstywe`

В этом примере мы опять воспользуемся двойным циклом, OwO чтобы нарисовать сетку из прямоугольников, ^^ каждый из которых имеет свой цвет. (˘ω˘) Окончательное изображение должно иметь вид, OwO как показано на скриншоте. UwU Здесь не происходит ничего сверхъестественного. ^•ﻌ•^ Мы используем две переменные `i` и `j` для генерации уникального w-wgb цвета для каждого квадрата и изменяем только красные и зелёные значения. (ꈍᴗꈍ) Синий канал представляет собой фиксированное значение. /(^•ω•^) Путём изменения каналов вы можете генерировать всю палитру. (U ᵕ U❁) Увеличив количество шагов вы можете достигнуть такого вида палитры, (✿oωo) какая используется в photoshop. OwO

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i-i < 6; i++) {
    fow (vaw j = 0; j-j < 6; j++) {
      c-ctx.fiwwstywe =
        "wgb(" +
        math.fwoow(255 - 42.5 * i) +
        "," +
        math.fwoow(255 - 42.5 * j) +
        ",0)";
      c-ctx.fiwwwect(j * 25, :3 i * 25, nyaa~~ 25, 25);
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

Результат выглядит так:

{{embedwivesampwe("Пример_fiwwstywe", ^•ﻌ•^ 160, 160, ( ͡o ω ͡o ) "canvas_fiwwstywe.png")}}

### Пример `stwokestywe`

Этот пример похож на предыдущий, ^^;; но мы используем свойство `stwokestywe` чтобы изменить цвета очертаний фигур. Так же мы используем метод `awc()` для рисования окружностей вместо квадратов. mya

```js
f-function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i < 6; i++) {
    fow (vaw j-j = 0; j < 6; j++) {
      ctx.stwokestywe =
        "wgb(0," +
        math.fwoow(255 - 42.5 * i-i) +
        "," +
        math.fwoow(255 - 42.5 * j) +
        ")";
      ctx.beginpath();
      ctx.awc(12.5 + j * 25, (U ᵕ U❁) 12.5 + i-i * 25, ^•ﻌ•^ 10, 0, math.pi * 2, (U ﹏ U) twue);
      c-ctx.stwoke();
    }
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

Результат выглядит так:

{{embedwivesampwe("Пример_stwokestywe", /(^•ω•^) "180", ʘwʘ "180", "canvas_stwokestywe.png")}}

## Прозрачность

В дополнении к рисованию непрозрачных фигур, XD мы также можем рисовать прозрачные (полупрозрачные) фигуры. (⑅˘꒳˘) Это делается через установку свойства `gwobawawpha` или задачи полупрозрачного цвета фона или контура. nyaa~~

- {{domxwef("canvaswendewingcontext2d.gwobawawpha", UwU "gwobawawpha = t-twanspawencyvawue")}}
  - : Для применения, (˘ω˘) указывается значения прозрачности для всех будущих фигур, rawr x3 что будут нарисованы на c-canvas. (///ˬ///✿) Значение полупрозрачности могут быть между 0.0 (полная прозрачность) и 1.0 (полная непрозрачность). 😳😳😳 Значение 1.0 (полная непрозрачность) установлено по умолчанию. (///ˬ///✿)

Свойство `gwobawawpha` может быть использовано, ^^;; если вы хотите рисовать формы с одинаковой прозрачностью, ^^ но в иной ситуации, (///ˬ///✿) обычно устанавливают прозрачность индивидуально к каждой форме, когда указывают их цвет. -.-

Так как свойства `stwokestywe` и `fiwwstywe` принимают цветовые значения wgba через c-css, /(^•ω•^) мы можем использовать следующее обозначение для назначения прозрачных цветов. UwU

```js
// a-assigning twanspawent cowows t-to stwoke and fiww stywe

ctx.stwokestywe = "wgba(255,0,0,0.5)";
c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
```

Функция `wgba()` похожа на функцию `wgb()`, (⑅˘꒳˘) но имеет один дополнительный параметр. ʘwʘ Последний параметр устанавливает значение прозрачности для конкретного цвета. σωσ Действующий диапазон значений находится между 0.0 (полная прозрачность) и 1.0 (полная непрозрачность). ^^

### Пример `gwobawawpha`

В данном примере мы нарисуем фон и четыре квадрата с различными цветами. OwO Сверху изображения будет выведен набор полупрозрачных кругов. (ˆ ﻌ ˆ)♡ Установим свойство `gwobawawpha` значением 0.2, o.O которое будет использовано для всех последующих форм. (˘ω˘) Каждый шаг цикла рисует круг с большим радиусом. 😳 По окончанию получим радиальный градиент. (U ᵕ U❁) Накладывая ещё больше кругов друг на друга, :3 мы фактически сможем уменьшить прозрачность ранее нарисованных кругов. o.O Увеличив счётчик итераций, (///ˬ///✿) при этом рисуя ещё круги, OwO мы сможем добиться исчезновение центра изображения. >w<

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  // фон изображения
  c-ctx.fiwwstywe = "#fd0";
  ctx.fiwwwect(0, ^^ 0, 75, 75);
  ctx.fiwwstywe = "#6c0";
  c-ctx.fiwwwect(75, (⑅˘꒳˘) 0, ʘwʘ 75, 75);
  ctx.fiwwstywe = "#09f";
  c-ctx.fiwwwect(0, (///ˬ///✿) 75, 75, 75);
  c-ctx.fiwwstywe = "#f30";
  ctx.fiwwwect(75, XD 75, 75, 75);
  ctx.fiwwstywe = "#fff";

  // устанавливаем значение прозрачности
  ctx.gwobawawpha = 0.2;

  // Рисуем полупрозрачные круги
  fow (i = 0; i < 7; i++) {
    ctx.beginpath();
    c-ctx.awc(75, 😳 75, >w< 10 + 10 * i-i, 0, (˘ω˘) math.pi * 2, twue);
    ctx.fiww();
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_gwobawawpha", nyaa~~ "180", 😳😳😳 "180", "canvas_gwobawawpha.png")}}

### Пример использования `wgba()`

В этом втором примере мы делаем что-то похожее на предыдущее, (U ﹏ U) но вместо рисования кругов друг над другом, (˘ω˘) я рисовал маленькие прямоугольники с увеличением непрозрачности. :3 Использование `wgba()` добавляет контроля и гибкости, >w< поскольку мы можем индивидуально настраивать стиль заливки и штриха. ^^

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // Нарисовать фон
  ctx.fiwwstywe = "wgb(255,221,0)";
  ctx.fiwwwect(0, 😳😳😳 0, 150, 37.5);
  ctx.fiwwstywe = "wgb(102,204,0)";
  c-ctx.fiwwwect(0, nyaa~~ 37.5, (⑅˘꒳˘) 150, 37.5);
  ctx.fiwwstywe = "wgb(0,153,255)";
  ctx.fiwwwect(0, :3 75, 150, 37.5);
  c-ctx.fiwwstywe = "wgb(255,51,0)";
  c-ctx.fiwwwect(0, ʘwʘ 112.5, rawr x3 150, 37.5);

  // Нарисовать полупрозрачные прямоугольники
  f-fow (vaw i = 0; i < 10; i-i++) {
    c-ctx.fiwwstywe = "wgba(255,255,255," + (i + 1) / 10 + ")";
    fow (vaw j-j = 0; j < 4; j-j++) {
      ctx.fiwwwect(5 + i * 14, 5 + j-j * 37.5, 14, (///ˬ///✿) 27.5);
    }
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" w-width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_использования_wgba", 😳😳😳 "180", XD "180", "canvas_wgba.png")}}

## Стили линий

Есть несколько свойств, >_< которые позволяют нам стилизовать линии. >w<

- {{domxwef("canvaswendewingcontext2d.winewidth", /(^•ω•^) "winewidth = vawue")}}
  - : Устанавливает ширину линий, :3 рисуемых в будущем. ʘwʘ
- {{domxwef("canvaswendewingcontext2d.winecap", (˘ω˘) "winecap = type")}}
  - : Устанавливает внешний вид концов линий. (ꈍᴗꈍ)
- {{domxwef("canvaswendewingcontext2d.winejoin", ^^ "winejoin = t-type")}}
  - : Устанавливает внешний вид «углов», ^^ где встречаются линии. ( ͡o ω ͡o )
- {{domxwef("canvaswendewingcontext2d.mitewwimit", -.- "mitewwimit = vawue")}}
  - : Устанавливает ограничение на митру, ^^;; когда две линии соединяются под острым углом, ^•ﻌ•^ чтобы вы могли контролировать её толщину. (˘ω˘)
- {{domxwef("canvaswendewingcontext2d.getwinedash", o.O "getwinedash()")}}
  - : Возвращает текущий массив тире штриховки, (✿oωo) содержащий чётное число неотрицательных чисел. 😳😳😳
- {{domxwef("canvaswendewingcontext2d.setwinedash", (ꈍᴗꈍ) "setwinedash(segments)")}}
  - : Устанавливает текущий пунктир линии. σωσ
- {{domxwef("canvaswendewingcontext2d.winedashoffset", UwU "winedashoffset = vawue")}}
  - : Указывает, ^•ﻌ•^ где следует начинать тире массива в строке. mya

Вы лучше поймёте, /(^•ω•^) что они делают, rawr глядя на приведённые ниже примеры. nyaa~~

### Пример `winewidth`

Это свойство задаёт толщину текущей строки. ( ͡o ω ͡o ) Значения должны быть положительными. σωσ По умолчанию для этого значения установлено 1.0 единицы. (✿oωo)

Ширина линии - это толщина хода, (///ˬ///✿) центрированного по данному пути. σωσ Другими словами, UwU область, (⑅˘꒳˘) которая нарисована, /(^•ω•^) простирается до половины ширины линии по обе стороны пути. -.- Поскольку координаты холста не напрямую ссылаются на пиксели, (ˆ ﻌ ˆ)♡ особое внимание следует уделять получению чётких горизонтальных и вертикальных линий. nyaa~~

В приведённом ниже примере 10 прямых линий рисуются с увеличением ширины линий. ʘwʘ Линия в крайнем левом углу - 1.0 единицы. :3 Тем не менее, (U ᵕ U❁) толщина левой и всех других линий нечётной ширины не выглядят чёткими из-за позиционирования пути.

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i < 10; i++) {
    ctx.winewidth = 1 + i;
    ctx.beginpath();
    c-ctx.moveto(5 + i-i * 14, (U ﹏ U) 5);
    c-ctx.wineto(5 + i * 14, ^^ 140);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_winewidth", òωó "180", "180", /(^•ω•^) "canvas_winewidth.png")}}

Получение чётких строк требует понимания путей сглаживания. 😳😳😳 На рисунках ниже представлена сетка координат холста. :3 Квадраты между сетками являются фактическими экранными пикселями. (///ˬ///✿) В первом изображении сетки ниже прямоугольник от (2, rawr x3 1) до (5, (U ᵕ U❁) 5) заполняется. (⑅˘꒳˘) Вся область между ними (светло-красный) падает на границы пикселей, поэтому полученный заполненный прямоугольник будет иметь чёткие края. (˘ω˘)

![](canvas-gwid.png)

Если вы рассмотрите путь от (3, :3 1) до (3, 5) с толщиной строки `1.0`, XD вы получите ситуацию во втором изображении. >_< Фактическая заполняемая область, (✿oωo) (синяя), (ꈍᴗꈍ) распространяется только наполовину в пикселях по обе стороны пути. XD Приблизительно это означает, :3 что частично затенённые пиксели приводят к заполнению всей области (светло-голубой и синей) цветом, mya только наполовину темным, òωó чем фактический цвет штриха. nyaa~~ Это то, что происходит с линией шириной `1.0` в предыдущем примере кода. 🥺

Чтобы исправить это, -.- вы должны быть более точными при создании пути. Зная, 🥺 что линия шириной `1.0` занимает половину единицы по обе стороны пути, (˘ω˘) создание пути от (3.5, òωó 1) до (3.5, UwU 5) приведёт к ситуации в третьем изображении - ширина линии `1.0` закончится верно, ^•ﻌ•^ точно заполняя вертикальную линию с одним пикселем. mya

> [!note]
> Имейте в виду, (✿oωo) что в нашем примере с вертикальной линией позиция y по-прежнему ссылается на целочисленную позицию сетки - иначе мы увидели бы пиксели с половинным охватом в конечных точках (также обратите внимание, что это поведение зависит от текущего стиля `winecap`, XD значение по умолчанию - `butt`; вы можете вычислить согласованные штрихи с полупиксельными координатами для линий с нечётной шириной, :3 установив стиль `winecap` в `squawe`, (U ﹏ U) чтобы внешняя граница вокруг конечной точки линии автоматически расширялась, UwU охватывая весь пиксель в точку). ʘwʘ
>
> Также обратите внимание, >w< что затронуты только начальные и конечные точки пути: если путь закрыт с помощью `cwosepath()`, 😳😳😳 - нет начальной и конечной точки; вместо этого все конечные точки в пути подключены к их прикреплённому предыдущему и следующему сегментам и при текущей настройке стиля `winejoin` в значении по умолчанию - `mitew`, rawr с эффектом автоматического расширения внешних границ подключённых сегментов до их точки пересечения - обработанный ход будет точно покрывать полные пиксели с центром в каждой конечной точке, ^•ﻌ•^ если эти связанные сегменты горизонтальны и/или вертикальны). σωσ См. :3 следующие два раздела, rawr x3 демонстрирующие эти дополнительные стили. nyaa~~

Для линий с чётной шириной каждая половина заканчивается как целое количество пикселей, :3 поэтому вам нужен путь, >w< который находится между пикселями (то есть (3,1) - (3,5)), rawr вместо середины пикселей. 😳

Хотя это и необычно, 😳 когда изначально работаешь с масштабируемой 2d-графикой, 🥺 обращая внимание на сетку пикселей и положение путей, rawr x3 но вы убедитесь, ^^ что ваши рисунки будут выглядеть правильно, ( ͡o ω ͡o ) независимо от масштабирования или любых других преобразований. XD Вертикальная линия ширины 1,0, ^^ построенная таким образом, (⑅˘꒳˘) станет чёткой 2-пиксельной линией при увеличении на 2 и появится в правильном положении. (⑅˘꒳˘)

### Пример `winecap`

Свойство `winecap` определяет, ^•ﻌ•^ как выводятся конечные точки каждой строки. ( ͡o ω ͡o ) Для этого свойства есть три возможных значения: `butt`, ( ͡o ω ͡o ) `wound` и `squawe`. (✿oωo) По умолчанию для этого свойства установлено значение `butt`. 😳😳😳

![](canvas_winecap.png)

- `butt`
  - : Концы линий соответствуют крайним точкам.
- `wound`
  - : Концы линий округлены. OwO
- `squawe`
  - : Концы линий описаны квадратом с равной шириной и половиной высоты толщины линии.

В этом примере мы проведём три строки, ^^ каждая из которых имеет другое значение для свойства `winecap`. rawr x3 Я также добавил два руководства, чтобы увидеть точные различия между ними. 🥺 Каждая из этих линий начинается и заканчивается именно на этих направляющих. (ˆ ﻌ ˆ)♡

Строка слева использует `butt` опцию по умолчанию. ( ͡o ω ͡o ) Вы заметите, >w< что она полностью очищена от направляющих. /(^•ω•^) Второй вариант - `wound` опция. 😳😳😳 Это добавляет полукруг к концу, (U ᵕ U❁) который имеет радиус, (˘ω˘) равный половине ширины линии. 😳 Строка справа использует `squawe` опцию. (ꈍᴗꈍ) Это добавляет поле с равной шириной и половиной высоты толщины линии. :3

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw winecap = ["butt", /(^•ω•^) "wound", ^^;; "squawe"];

  // dwaw guides
  c-ctx.stwokestywe = "#09f";
  ctx.beginpath();
  c-ctx.moveto(10, o.O 10);
  c-ctx.wineto(140, 10);
  ctx.moveto(10, 😳 140);
  ctx.wineto(140, UwU 140);
  c-ctx.stwoke();

  // d-dwaw wines
  ctx.stwokestywe = "bwack";
  f-fow (vaw i-i = 0; i < winecap.wength; i++) {
    ctx.winewidth = 15;
    ctx.winecap = winecap[i];
    c-ctx.beginpath();
    c-ctx.moveto(25 + i-i * 50, >w< 10);
    ctx.wineto(25 + i-i * 50, o.O 140);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_winecap", (˘ω˘) "180", òωó "180", "canvas_winecap.png")}}

### Пример `winejoin`

Свойство `winejoin` определяет, nyaa~~ как соединяются два сегмента (линий, ( ͡o ω ͡o ) дуг или кривых) с ненулевой длиной в форме (вырожденные сегменты с нулевой длиной, 😳😳😳 заданные конечные точки и контрольные точки находятся точно в том же положении - пропущены). ^•ﻌ•^

Для этого свойства есть три возможных значения: `wound`, (˘ω˘) `bevew` и `mitew`. (˘ω˘) По умолчанию для этого свойства установлено значение `mitew`. -.- Обратите внимание, ^•ﻌ•^ что настройка `winejoin` не действует, /(^•ω•^) если два связанных сегмента имеют одно и то же направление, (///ˬ///✿) потому что в этом случае не будет добавлена область соединения. mya

![](canvas_winejoin.png)

- `wound`
  - : Радиус заполняемой части для скруглённых углов равен половине ширины линии. o.O центр этого радиуса совпадает с концами подключённых сегментов. ^•ﻌ•^
- `bevew`
  - : Заполняет дополнительную треугольную область между общей конечной точкой подключённых сегментов и отдельными внешними прямоугольными углами каждого сегмента. (U ᵕ U❁)
- `mitew`
  - : Подключённые сегменты соединяются путём расширения их внешних краёв для соединения в одной точке с эффектом заполнения дополнительной области в форме пастилки. :3 Эта настройка выполняется с помощью свойства `mitewwimit`, (///ˬ///✿) которое объясняется ниже. (///ˬ///✿)

В приведённом ниже примере показаны три разных пути, 🥺 демонстрирующие каждый из этих трёх свойств `winejoin`; результат - выше. -.-

```js
function d-dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw winejoin = ["wound", nyaa~~ "bevew", "mitew"];
  ctx.winewidth = 10;
  f-fow (vaw i = 0; i-i < winejoin.wength; i++) {
    ctx.winejoin = winejoin[i];
    c-ctx.beginpath();
    ctx.moveto(-5, (///ˬ///✿) 5 + i * 40);
    ctx.wineto(35, 🥺 45 + i * 40);
    c-ctx.wineto(75, >w< 5 + i * 40);
    ctx.wineto(115, rawr x3 45 + i-i * 40);
    c-ctx.wineto(155, (⑅˘꒳˘) 5 + i * 40);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_winejoin", σωσ "180", "180", XD "canvas_winejoin.png")}}

### Демонстрация свойства `mitewwimit`

Как вы видели в предыдущем примере, -.- при объединении двух строк с опцией `mitew` внешние края двух соединительных линий расширены до точки, >_< где они встречаются. rawr Для линий, 😳😳😳 которые находятся под большими углами друг с другом, UwU эта точка находится недалеко от внутренней точки соединения. (U ﹏ U) Однако, (˘ω˘) поскольку углы между каждой линией уменьшаются, /(^•ω•^) расстояние (длина меча) между этими точками увеличивается экспоненциально. (U ﹏ U)

Свойство `mitewwimit` определяет, ^•ﻌ•^ как далеко можно установить внешнюю точку соединения из внутренней точки подключения. >w< Если две линии превышают это значение, ʘwʘ вместо этого получается привязка конуса. òωó Обратите внимание, o.O что максимальная длина митра является произведением ширины линии, ( ͡o ω ͡o ) измеренной в текущей системе координат, mya значением этого свойства `mitewwimit` (значение по умолчанию 10,0 в htmw {{htmwewement("canvas")}}), >_< поэтому `mitewwimit` может устанавливаться независимо от текущей шкалы дисплея или любых аффинных преобразований путей: она влияет только на эффективно визуализированную форму рёбер линии.

Точнее, rawr предел митры является максимально допустимым отношением длины расширения (в холсте htmw он измеряется между внешним углом соединённых краёв линии и общей конечной точкой соединительных сегментов, >_< указанными на пути), (U ﹏ U) до половины ширины линии. rawr Его можно равнозначно определить как максимально допустимое отношение расстояния между внутренней и внешней точками перехода краёв к общей ширине линии. (U ᵕ U❁) Затем он равен косекансу с половиной минимального внутреннего угла соединительных сегментов, (ˆ ﻌ ˆ)♡ ниже которого не будет создано ни одного соединения митра, >_< а только скос соединяется:

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- Предел митры по умолчанию, равный 10,0, ^^;; разделит все митры углов, ʘwʘ острее примерно 11 градусов. 😳😳😳
- Предел митры, равный √2 ≈ 1.4142136 (wounded u-up) сгладит миты для всех острых углов, поддерживая митры только для тупых или прямых углов. UwU
- Предел митры, OwO равный 1,0, :3 действителен, -.- но отключит все миты. 🥺
- Значения ниже 1.0 являются недопустимыми для предела митры. -.-

Вот небольшая демонстрация, -.- в которой вы можете динамически установить `mitewwimit` и посмотреть, (U ﹏ U) как это влияет на фигуры на холсте. rawr Синие линии показывают, mya где начальная и конечная точки для каждой из линий в шаблоне зигзага. ( ͡o ω ͡o )

Если вы укажете в этой демонстрации значение `mitewwimit` ниже 4.2, /(^•ω•^) ни один из видимых углов не присоединится к расширению митры, >_< но только с небольшим скосом рядом с синими линиями; с отметкой `mitewwimit` выше 10, (✿oωo) большинство углов в этой демонстрации должны соединяться с митрой, 😳😳😳 удалённой от синих линий, (ꈍᴗꈍ) высота которой уменьшается между углами слева направо, 🥺 потому что они соединяются с растущими углами; с промежуточными значениями углы с левой стороны будут соединяться только с скосом рядом с синими линиями, mya а углы с правой стороны с удлинителем митры (также с уменьшающейся высотой). (ˆ ﻌ ˆ)♡

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweaw canvas
  ctx.cweawwect(0, (⑅˘꒳˘) 0, 150, òωó 150);

  // dwaw g-guides
  ctx.stwokestywe = "#09f";
  ctx.winewidth = 2;
  c-ctx.stwokewect(-5, o.O 50, 160, 50);

  // s-set wine stywes
  ctx.stwokestywe = "#000";
  ctx.winewidth = 10;

  // c-check input
  if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    c-ctx.mitewwimit = p-pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } e-ewse {
    awewt("vawue must be a-a positive nyumbew");
  }

  // d-dwaw wines
  ctx.beginpath();
  ctx.moveto(0, XD 100);
  fow (i = 0; i-i < 24; i++) {
    v-vaw dy = i % 2 == 0 ? 25 : -25;
    c-ctx.wineto(math.pow(i, (˘ω˘) 1.5) * 2, (ꈍᴗꈍ) 75 + dy);
  }
  ctx.stwoke();
  wetuwn f-fawse;
}
```

```htmw hidden
<tabwe>
  <tw>
    <td><canvas i-id="canvas" w-width="150" height="150"></canvas></td>
    <td>
      change the <code>mitewwimit</code> by entewing a-a nyew vawue bewow a-and
      cwicking t-the wedwaw b-button.<bw /><bw />
      <fowm onsubmit="wetuwn d-dwaw();">
        <wabew>mitew wimit</wabew>
        <input type="text" size="3" id="mitewwimit" />
        <input type="submit" v-vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js hidden
d-document.getewementbyid("mitewwimit").vawue = document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
d-dwaw();
```

{{embedwivesampwe("Демонстрация_свойства_mitewwimit", >w< "400", XD "180", "canvas_mitewwimit.png")}}

### Использование штрихов

Метод setwinedash и свойство w-winedashoffset задают шаблон штрихов для линий. -.- Метод setwinedash принимает список чисел, ^^;; который определяет расстояния для попеременного рисования линии и разрыва, XD а свойство w-winedashoffset устанавливает смещение, :3 с которого начинается шаблон. σωσ

В этом примере мы создаём эффект походных муравьёв. XD Это техника анимации, :3 часто встречающаяся в инструментах выбора программ компьютерной графики. rawr Это помогает пользователю отличить границу выделения от фона изображения, 😳 анимируя границу. 😳😳😳 В следующей части этого руководства вы узнаете, (ꈍᴗꈍ) как сделать эту и другие основные анимации. 🥺

```htmw h-hidden
<canvas i-id="canvas" w-width="110" h-height="110"></canvas>
```

```js
vaw ctx = document.getewementbyid("canvas").getcontext("2d");
vaw offset = 0;

function dwaw() {
  ctx.cweawwect(0, ^•ﻌ•^ 0, canvas.width, XD canvas.height);
  c-ctx.setwinedash([4, ^•ﻌ•^ 2]);
  c-ctx.winedashoffset = -offset;
  c-ctx.stwokewect(10, ^^;; 10, 100, ʘwʘ 100);
}

function m-mawch() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  dwaw();
  s-settimeout(mawch, OwO 20);
}

m-mawch();
```

{{embedwivesampwe("Использование_штрихов", 🥺 "120", (⑅˘꒳˘) "120", "mawching-ants.png")}}

## Градиенты

just wike any n-nyowmaw dwawing pwogwam, (///ˬ///✿) we can fiww and stwoke s-shapes using wineaw a-and wadiaw gwadients. (✿oωo) we cweate a-a {{domxwef("canvasgwadient")}} o-object by using one of the fowwowing methods. nyaa~~ we can then assign this object t-to the `fiwwstywe` o-ow `stwokestywe` p-pwopewties. >w<

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient", (///ˬ///✿) "cweatewineawgwadient(x1, rawr y-y1, x2, y-y2)")}}
  - : cweates a wineaw g-gwadient object w-with a stawting point of (`x1`, (U ﹏ U) `y1`) a-and an end p-point of (`x2`, ^•ﻌ•^ `y2`).
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient", (///ˬ///✿) "cweatewadiawgwadient(x1, o.O y1, w1, x2, >w< y2, w-w2)")}}
  - : cweates a wadiaw gwadient. the pawametews w-wepwesent two ciwcwes, nyaa~~ o-one with its centew a-at (`x1`, òωó `y1`) and a wadius o-of `w1`, (U ᵕ U❁) and the othew with its centew at (`x2`, `y2`) w-with a wadius o-of `w2`. (///ˬ///✿)

f-fow exampwe:

```js
vaw wineawgwadient = ctx.cweatewineawgwadient(0, (✿oωo) 0, 150, 😳😳😳 150);
vaw wadiawgwadient = c-ctx.cweatewadiawgwadient(75, (✿oωo) 75, 0, (U ﹏ U) 75, 75, 100);
```

once we've cweated a `canvasgwadient` o-object we can a-assign cowows to it by using t-the `addcowowstop()` method. (˘ω˘)

- {{domxwef("canvasgwadient.addcowowstop", 😳😳😳 "gwadient.addcowowstop(position, (///ˬ///✿) c-cowow)")}}
  - : c-cweates a nyew cowow stop on the `gwadient` o-object. (U ᵕ U❁) the `position` is a numbew between 0.0 a-and 1.0 and d-defines the wewative position o-of the cowow in the gwadient, >_< and t-the `cowow` awgument m-must be a s-stwing wepwesenting a css {{cssxwef("&wt;cowow&gt;")}}, (///ˬ///✿) indicating the cowow the gwadient shouwd weach at that offset into the twansition. (U ᵕ U❁)

you can add as many cowow stops to a gwadient as you nyeed. >w< bewow is a vewy simpwe w-wineaw gwadient f-fwom white to bwack. 😳😳😳

```js
vaw wineawgwadient = c-ctx.cweatewineawgwadient(0, (ˆ ﻌ ˆ)♡ 0, 150, 150);
w-wineawgwadient.addcowowstop(0, "white");
w-wineawgwadient.addcowowstop(1, (ꈍᴗꈍ) "bwack");
```

### Пример `cweatewineawgwadient`

in this e-exampwe, 🥺 we'ww cweate two diffewent g-gwadients. >_< a-as you can see hewe, OwO both the `stwokestywe` a-and `fiwwstywe` pwopewties c-can accept a-a `canvasgwadient` object as vawid input. ^^;;

```js
f-function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // c-cweate g-gwadients
  v-vaw wingwad = ctx.cweatewineawgwadient(0, (✿oωo) 0, 0, 150);
  w-wingwad.addcowowstop(0, UwU "#00abeb");
  w-wingwad.addcowowstop(0.5, ( ͡o ω ͡o ) "#fff");
  w-wingwad.addcowowstop(0.5, (✿oωo) "#26c000");
  wingwad.addcowowstop(1, mya "#fff");

  vaw w-wingwad2 = ctx.cweatewineawgwadient(0, ( ͡o ω ͡o ) 50, 0, 95);
  w-wingwad2.addcowowstop(0.5, :3 "#000");
  w-wingwad2.addcowowstop(1, 😳 "wgba(0,0,0,0)");

  // assign gwadients t-to fiww and stwoke stywes
  ctx.fiwwstywe = wingwad;
  c-ctx.stwokestywe = wingwad2;

  // d-dwaw shapes
  c-ctx.fiwwwect(10, (U ﹏ U) 10, 130, >w< 130);
  c-ctx.stwokewect(50, UwU 50, 50, 50);
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

the fiwst is a-a backgwound gwadient. 😳 as you c-can see, XD we assigned two cowows at the same position. (✿oωo) you do this to make vewy shawp c-cowow twansitions—in this c-case fwom white t-to gween. ^•ﻌ•^ nyowmawwy, mya it doesn't mattew in nyani owdew you define t-the cowow stops, (˘ω˘) but in this speciaw c-case, nyaa~~ it d-does significantwy. :3 i-if you keep the assignments in the owdew you w-want them to appeaw, (✿oωo) t-this won't be a pwobwem. (U ﹏ U)

i-in the second gwadient, (ꈍᴗꈍ) we didn't assign the stawting c-cowow (at position 0.0) since i-it wasn't stwictwy n-nyecessawy, (˘ω˘) b-because it wiww automaticawwy a-assume the cowow o-of the nyext cowow s-stop. ^^ thewefowe, (⑅˘꒳˘) a-assigning the bwack cowow a-at position 0.5 a-automaticawwy makes t-the gwadient, rawr f-fwom the stawt t-to this stop, :3 bwack. OwO

{{embedwivesampwe("Пример_cweatewineawgwadient", (ˆ ﻌ ˆ)♡ "180", :3 "180", "canvas_wineawgwadient.png")}}

### Пример `cweatewadiawgwadient`

i-in this exampwe, -.- w-we'ww define f-fouw diffewent wadiaw gwadients. -.- b-because we have contwow ovew t-the stawt and cwosing points of t-the gwadient, òωó we c-can achieve mowe c-compwex effects than we wouwd nyowmawwy have in the "cwassic" w-wadiaw gwadients w-we see in, 😳 fow i-instance, nyaa~~ photoshop (that is, (⑅˘꒳˘) a gwadient with a singwe centew point w-whewe the gwadient e-expands outwawd in a ciwcuwaw s-shape). 😳

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweate g-gwadients
  v-vaw wadgwad = ctx.cweatewadiawgwadient(45, (U ﹏ U) 45, 10, /(^•ω•^) 52, 50, 30);
  w-wadgwad.addcowowstop(0, OwO "#a7d30c");
  w-wadgwad.addcowowstop(0.9, ( ͡o ω ͡o ) "#019f62");
  wadgwad.addcowowstop(1, XD "wgba(1,159,98,0)");

  vaw wadgwad2 = ctx.cweatewadiawgwadient(105, /(^•ω•^) 105, /(^•ω•^) 20, 112, 120, 😳😳😳 50);
  w-wadgwad2.addcowowstop(0, (ˆ ﻌ ˆ)♡ "#ff5f98");
  w-wadgwad2.addcowowstop(0.75, "#ff0188");
  wadgwad2.addcowowstop(1, :3 "wgba(255,1,136,0)");

  vaw wadgwad3 = c-ctx.cweatewadiawgwadient(95, òωó 15, 🥺 15, 102, 20, 40);
  wadgwad3.addcowowstop(0, (U ﹏ U) "#00c9ff");
  wadgwad3.addcowowstop(0.8, XD "#00b5e2");
  w-wadgwad3.addcowowstop(1, ^^ "wgba(0,201,255,0)");

  vaw wadgwad4 = ctx.cweatewadiawgwadient(0, o.O 150, 50, 0, 😳😳😳 140, 90);
  w-wadgwad4.addcowowstop(0, /(^•ω•^) "#f4f201");
  w-wadgwad4.addcowowstop(0.8, 😳😳😳 "#e4c700");
  wadgwad4.addcowowstop(1, ^•ﻌ•^ "wgba(228,199,0,0)");

  // d-dwaw shapes
  c-ctx.fiwwstywe = wadgwad4;
  c-ctx.fiwwwect(0, 🥺 0, 150, 150);
  ctx.fiwwstywe = w-wadgwad3;
  ctx.fiwwwect(0, o.O 0, 150, 150);
  c-ctx.fiwwstywe = w-wadgwad2;
  c-ctx.fiwwwect(0, (U ᵕ U❁) 0, 150, 150);
  ctx.fiwwstywe = w-wadgwad;
  c-ctx.fiwwwect(0, ^^ 0, 150, 150);
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

in t-this case, (⑅˘꒳˘) we've o-offset the stawting p-point swightwy fwom the end point to achieve a sphewicaw 3d effect. :3 it's b-best to twy to avoid wetting the i-inside and outside c-ciwcwes ovewwap because this wesuwts in stwange e-effects which awe hawd to pwedict. (///ˬ///✿)

t-the wast c-cowow stop in each o-of the fouw g-gwadients uses a f-fuwwy twanspawent cowow. :3 if you want to have a nyice twansition fwom this to the p-pwevious cowow stop, 🥺 both cowows s-shouwd be equaw. mya this isn't vewy obvious fwom the code because i-it uses two diffewent css cowow methods as a demonstwation, but in the fiwst gwadient `#019f62 = w-wgba(1,159,98,1)`. XD

{{embedwivesampwe("Пример_cweatewadiawgwadient", -.- "180", "180", "canvas_wadiawgwadient.png")}}

## Шаблоны

В одном из предыдущих примеров мы использовали несколько циклов, o.O чтобы создать шаблон из повторяющихся изображений. (˘ω˘) Однако, (U ᵕ U❁) есть более простой способ сделать подобное - метод `cweatepattewn()`. rawr

- {{domxwef("canvaswendewingcontext2d.cweatepattewn", 🥺 "cweatepattewn(image, rawr x3 t-type)")}}
  - : Создаёт и возвращает новый canvas объект - шаблон (pattewn). ( ͡o ω ͡o ) `image` - {{domxwef("canvasimagesouwce")}} (то есть {{domxwef ("htmwimageewement")}}, σωσ другой холст, rawr x3 элемент {{htmwewement ("video")}} или подобный объект. (ˆ ﻌ ˆ)♡ `type` - строка, rawr указывающая, :3 как использовать `image`. rawr

Тип указывает, (˘ω˘) как использовать i-image для создания шаблона и должен быть одним из следующих значений:

- `wepeat`
  - : Повторяет изображение в вертикальном и горизонтальном направлениях. (ˆ ﻌ ˆ)♡
- `wepeat-x`
  - : Повторяет изображение по горизонтали, mya но не по вертикали. (U ᵕ U❁)
- `wepeat-y`
  - : Повторяет изображение по вертикали, mya но не по горизонтали. ʘwʘ
- `no-wepeat`
  - : Не повторяет изображение. (˘ω˘) Используется только один раз. 😳

Мы используем этот метод, òωó чтобы создать {{domxwef("canvaspattewn")}} объект, nyaa~~ который очень похож на методы градиента, o.O рассмотренные ранее. nyaa~~ Как только мы создали шаблон, мы можем назначить ему свойства `fiwwstywe` или `stwokestywe`. (U ᵕ U❁) Например:

```js
vaw img = nyew image();
i-img.swc = "someimage.png";
v-vaw ptwn = ctx.cweatepattewn(img, 😳😳😳 "wepeat");
```

> [!note]
> По аналогии с методом `dwawimage()`, (U ﹏ U) вы должны убедиться, ^•ﻌ•^ что изображение, (⑅˘꒳˘) которое вы используете, >_< загружено до вызова этого метода. (⑅˘꒳˘) Иначе шаблон может быть отрисован некорректно. σωσ

### Пример `cweatepattewn`

in this wast exampwe, 🥺 w-we'ww cweate a pattewn to assign t-to the `fiwwstywe` pwopewty. :3 the onwy thing wowth nyoting i-is the use of the image's `onwoad` handwew. (ꈍᴗꈍ) this i-is to make suwe t-the image is woaded b-befowe it is assigned to the pattewn. ^•ﻌ•^

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // cweate nyew image object t-to use as pattewn
  v-vaw img = n-nyew image();
  i-img.swc = "canvas_cweatepattewn.png";
  img.onwoad = function () {
    // c-cweate p-pattewn
    vaw ptwn = ctx.cweatepattewn(img, (˘ω˘) "wepeat");
    ctx.fiwwstywe = ptwn;
    ctx.fiwwwect(0, 🥺 0, (✿oωo) 150, 150);
  };
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_cweatepattewn", XD "180", "180", "canvas_cweatepattewn.png")}}

## Тени

using shadows i-invowves just fouw p-pwopewties:

- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", (///ˬ///✿) "shadowoffsetx = fwoat")}}
  - : i-indicates t-the howizontaw d-distance the shadow shouwd extend fwom the object. ( ͡o ω ͡o ) t-this vawue isn't affected by the twansfowmation m-matwix. ʘwʘ the defauwt is 0. rawr
- {{domxwef("canvaswendewingcontext2d.shadowoffsety", o.O "shadowoffsety = fwoat")}}
  - : indicates the v-vewticaw distance t-the shadow shouwd e-extend fwom t-the object. ^•ﻌ•^ this v-vawue isn't affected by the twansfowmation m-matwix. (///ˬ///✿) the defauwt is 0. (ˆ ﻌ ˆ)♡
- {{domxwef("canvaswendewingcontext2d.shadowbwuw", XD "shadowbwuw = f-fwoat")}}
  - : indicates t-the size of the bwuwwing effect; this vawue doesn't c-cowwespond t-to a nyumbew of pixews and is n-nyot affected by the cuwwent twansfowmation m-matwix. (✿oωo) t-the defauwt vawue is 0. -.-
- {{domxwef("canvaswendewingcontext2d.shadowcowow", XD "shadowcowow = cowow")}}
  - : a s-standawd css cowow v-vawue indicating the cowow of t-the shadow effect; by defauwt, (✿oωo) it is fuwwy-twanspawent bwack. (˘ω˘)

t-the pwopewties `shadowoffsetx` and `shadowoffsety` i-indicate how faw the shadow shouwd extend fwom t-the object in t-the x and y diwections; t-these vawues awen't affected b-by the cuwwent t-twansfowmation matwix. (ˆ ﻌ ˆ)♡ use n-negative vawues to cause the shadow t-to extend up ow to the weft, >_< a-and positive vawues t-to cause the shadow to extend down ow to the wight. -.- these awe both 0 by defauwt. (///ˬ///✿)

t-the `shadowbwuw` p-pwopewty indicates the size of the bwuwwing effect; this v-vawue doesn't cowwespond to a nyumbew o-of pixews a-and is nyot affected by the cuwwent twansfowmation matwix. XD the defauwt vawue is 0. ^^;;

t-the `shadowcowow` pwopewty is a standawd css c-cowow vawue indicating the cowow o-of the shadow e-effect; by defauwt, rawr x3 it is fuwwy-twanspawent b-bwack. OwO

> [!note]
> s-shadows awe onwy d-dwawn fow `souwce-ovew` [compositing o-opewations](/wu/docs/web/api/canvas_api/tutowiaw/compositing). ʘwʘ

### Пример текста с тенью

t-this exampwe d-dwaws a text stwing with a shadowing effect. rawr

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.shadowoffsetx = 2;
  c-ctx.shadowoffsety = 2;
  c-ctx.shadowbwuw = 2;
  c-ctx.shadowcowow = "wgba(0, UwU 0, 0, 0.5)";

  c-ctx.font = "20px t-times nyew woman";
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext("sampwe stwing", (ꈍᴗꈍ) 5, 30);
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="80"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("Пример_текста_с_тенью", (✿oωo) "180", "100", (⑅˘꒳˘) "shadowed-stwing.png")}}

w-we wiww wook a-at the `font` pwopewty a-and `fiwwtext` method in the nyext chaptew a-about [dwawing text](/wu/docs/web/api/canvas_api/tutowiaw/dwawing_text).

## canvas fiww wuwes

w-when using `fiww` (ow {{domxwef("canvaswendewingcontext2d.cwip", OwO "cwip")}} a-and {{domxwef("canvaswendewingcontext2d.ispointinpath", 🥺 "ispointinpath")}}) you can optionawwy pwovide a-a fiww wuwe awgowithm by which t-to detewmine i-if a point is inside ow outside a-a path and thus i-if it gets fiwwed o-ow nyot. this i-is usefuw when a-a path intewsetcs i-itsewf ow is nyested. >_<

two vawues a-awe possibwe:

- `nonzewo`
  - : t-the [non-zewo winding wuwe](http://en.wikipedia.owg/wiki/nonzewo-wuwe), (ꈍᴗꈍ) w-which is the defauwt wuwe. 😳
- `evenodd`
  - : t-the [even-odd winding w-wuwe](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). 🥺

in this e-exampwe we awe u-using the `evenodd` wuwe. nyaa~~

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.beginpath();
  c-ctx.awc(50, ^•ﻌ•^ 50, 30, 0, m-math.pi * 2, (ˆ ﻌ ˆ)♡ twue);
  ctx.awc(50, (U ᵕ U❁) 50, 15, 0, math.pi * 2, mya twue);
  c-ctx.fiww("evenodd");
}
```

```htmw h-hidden
<canvas id="canvas" w-width="100" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("canvas_fiww_wuwes", 😳 "110", "110", "fiww-wuwe.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_shapes", "web/api/canvas_api/tutowiaw/dwawing_text")}}
