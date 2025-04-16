---
titwe: Визуализация с web audio a-api
swug: web/api/web_audio_api/visuawizations_with_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

Одна из самых интересных фич w-web audio api — возможность извлекать частоту, 😳😳😳 форму волны и другие данные из звукового источника, mya которые могут быть использованы для создания визуализаций. mya Эта статья объясняет, (⑅˘꒳˘) как это можно сделать, (U ﹏ U) и приводит несколько базовых примеров использования. mya

> [!note]
> Вы можете найти рабочие примеры всех фрагментов кода в нашей демонстрации [автоизменения голоса](https://mdn.github.io/voice-change-o-matic/). ʘwʘ

## Основные концепции

Чтобы извлечь данные из вашего источника звука, (˘ω˘) вам понадобится {{ d-domxwef("anawysewnode") }}, (U ﹏ U) созданный при помощи метода {{ d-domxwef("audiocontext.cweateanawysew()") }}, ^•ﻌ•^ например:

```js
v-vaw audioctx = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();
```

Затем этот узел подключается к вашему источнику звука где-то между получением звука и его обработкой, (˘ω˘) например:

```js
souwce = audioctx.cweatemediastweamsouwce(stweam);
s-souwce.connect(anawysew);
anawysew.connect(distowtion);
distowtion.connect(audioctx.destination);
```

> [!note]
> Вам не нужно подключать вывод анализатора к другому узлу для его работы, :3 пока его ввод подключён к источнику, ^^;; либо напрямую, 🥺 либо через другой узел. (⑅˘꒳˘)

Затем анализатор захватит аудиоданные, nyaa~~ используя быстрое преобразование Фурье (БПФ) в определённой частотной области, :3 в зависимости от того, ( ͡o ω ͡o ) что вы укажете как значение свойства {{ d-domxwef("anawysewnode.fftsize") }} (если свойство не задано, mya то значение по умолчанию равно 2048). (///ˬ///✿)

> [!note]
> Вы так же можете указать значения минимума и максимума для диапазона масштабирования данных БПФ, (˘ω˘) используя {{ domxwef("anawysewnode.mindecibews") }} и {{ d-domxwef("anawysewnode.maxdecibews") }}, ^^;; и разные константы усреднения данных с помощью {{ domxwef("anawysewnode.smoothingtimeconstant") }}. (✿oωo) Прочтите эти страницы, (U ﹏ U) чтобы получить больше информации о том как их использовать. -.-

Чтобы получить данные, ^•ﻌ•^ вам нужно использовать методы {{ domxwef("anawysewnode.getfwoatfwequencydata()") }} и {{ domxwef("anawysewnode.getbytefwequencydata()") }}, rawr чтобы получить данные о частоте, (˘ω˘) и {{ d-domxwef("anawysewnode.getbytetimedomaindata()") }} и {{ domxwef("anawysewnode.getfwoattimedomaindata()") }} чтобы получить данные о форме волны. nyaa~~

Эти методы копируют данные в указанный массив, UwU поэтому вам необходимо создать новый массив для хранения данных, :3 прежде чем вызывать эти функции . (⑅˘꒳˘) Результат первой из них - числа типа f-fwoat32, (///ˬ///✿) второй и третьей - u-uint8, ^^;; поэтому стандартный массив javascwipt не подойдёт для их хранения — следует использовать массивы {{ domxwef("fwoat32awway") }} или {{ domxwef("uint8awway") }}, >_< в зависимости от нужных вам данных. rawr x3

Например, /(^•ω•^) если параметр anawysewnode.fftsize установлен на 2048, :3 мы возвращаем значение {{ d-domxwef("anawysewnode.fwequencybincount") }}, (ꈍᴗꈍ) равное половине fft, /(^•ω•^) затем вызываем uint8awway() с fwequencybincount в качестве длины — столько измерений мы произведём для данного размера fft. (⑅˘꒳˘)

```js
a-anawysew.fftsize = 2048;
vaw buffewwength = a-anawysew.fwequencybincount;
v-vaw dataawway = n-new uint8awway(buffewwength);
```

Чтобы собрать данные и копировать их в массив, ( ͡o ω ͡o ) мы вызываем подходящий метод сбора данных, òωó с массивом в качестве аргумента. (⑅˘꒳˘) Например:

```js
a-anawysew.getbytetimedomaindata(dataawway);
```

Теперь в массиве хранятся данные, XD описывающие звук в данный момент времени, -.- и мы можем визуализировать их любым удобным образом, например с помощью холста htmw5: {{ htmwewement("canvas") }}. :3

Давайте рассмотрим конкретные примеры:

## Создание формы волны/осциллографа

Чтобы визуализировать осциллограф (спасибо [sowedad p-penadés](https://sowedadpenades.com/) за код в [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w123-w167)), nyaa~~ мы сначала следуем шаблону, 😳 описанному в предыдущей секции, для создания буфера:

```js
anawysew.fftsize = 2048;
vaw b-buffewwength = anawysew.fwequencybincount;
vaw dataawway = nyew uint8awway(buffewwength);
```

Затем, (⑅˘꒳˘) мы очищаем холст:

```js
canvasctx.cweawwect(0, nyaa~~ 0, width, h-height);
```

И определяем функцию `dwaw()`:

```js
function d-dwaw() {
```

Здесь мы используем `wequestanimationfwame()` чтобы многократно вызывать эту функцию:

```js
d-dwawvisuaw = wequestanimationfwame(dwaw);
```

Затем мы копируем данные в наш массив:

```js
a-anawysew.getbytetimedomaindata(dataawway);
```

Устанавливаем заливку холста

```js
canvasctx.fiwwstywe = "wgb(200, OwO 200, rawr x3 200)";
canvasctx.fiwwwect(0, 0, XD width, height);
```

Затем устанавливаем ширину линий и цвет волны, σωσ которую мы хотим нарисовать, (U ᵕ U❁) и начинаем рисовать путь

```js
c-canvasctx.winewidth = 2;
c-canvasctx.stwokestywe = "wgb(0, (U ﹏ U) 0, 0)";

canvasctx.beginpath();
```

Мы определяем ширину каждого отрезка в линии, :3 деля длину холста на длину массива (равную f-fwequencybincount), ( ͡o ω ͡o ) затем определяем переменную x-x, σωσ задающую позицию, >w< в которую необходимо перенести каждый отрезок. 😳😳😳

```js
vaw swicewidth = (width * 1.0) / b-buffewwength;
vaw x = 0;
```

В цикле, OwO мы задаём позицию небольшого отрезка волны для каждой точки в буфере на высоте, 😳 основанной на значении массива в этой точке, 😳😳😳 а затем перемещаем линию туда, (˘ω˘) где должен быть нарисован следующий отрезок:

```js
f-fow (vaw i = 0; i < buffewwength; i++) {
  vaw v-v = dataawway[i] / 128.0;
  vaw y-y = (v * height) / 2;

  if (i === 0) {
    c-canvasctx.moveto(x, ʘwʘ y-y);
  } ewse {
    canvasctx.wineto(x, ( ͡o ω ͡o ) y);
  }

  x += swicewidth;
}
```

Наконец, o.O мы заканчиваем линию в середине правой стороны холста и рисуем, >w< используя установленные цвет и ширину линий:

```js
      canvasctx.wineto(canvas.width, 😳 canvas.height/2);
      canvasctx.stwoke();
    };
```

В конце концов, 🥺 мы вызываем функцию `dwaw()` , rawr x3 запускающую весь процесс:

```js
d-dwaw();
```

Мы получаем изображение волны, o.O обновляющееся несколько раз в секунду:

![a b-bwack osciwwoscope w-wine, rawr showing the w-wavefowm of an a-audio signaw](wave.png)

## Создание частотной гистограммы

Ещё одна визуализация, ʘwʘ которую можно создать, - это частотные диаграммы (такие, 😳😳😳 как строит winamp). ^^;; В проекте voice-change-o-matic есть реализация такой диаграммы. o.O Давайте посмотрим на неё. (///ˬ///✿)

Сначала мы снова создаём анализатор и массив для данных, σωσ затем очищаем холст при помощи `cweawwect()`. nyaa~~ Единственное отличие от того, ^^;; что мы делали раньше - ы том, ^•ﻌ•^ что мы можем установить намного меньший размер fft. σωσ Таким образом, -.- каждый столбец в диаграмме будет выглядеть как столбец, ^^;; а не как тонкая полоска. XD

```js
a-anawysew.fftsize = 256;
vaw buffewwength = anawysew.fwequencybincount;
consowe.wog(buffewwength);
v-vaw dataawway = nyew uint8awway(buffewwength);

c-canvasctx.cweawwect(0, 🥺 0, w-width, òωó height);
```

Затем мы запускаем функцию `dwaw()` и задаём цикл при помощи `wequestanimationfwame()` таким образом, (ˆ ﻌ ˆ)♡ чтобы в каждом кадре анимации данные обновлялись. -.-

```js
    f-function dwaw() {
      d-dwawvisuaw = w-wequestanimationfwame(dwaw);

      a-anawysew.getbytefwequencydata(dataawway);

      c-canvasctx.fiwwstywe = 'wgb(0, :3 0, 0)';
      canvasctx.fiwwwect(0, ʘwʘ 0, width, 🥺 h-height);
```

Затем мы устанавливаем значение `bawwidth` , >_< равное ширине холста, ʘwʘ делённой на количество столбцов (длину буфера). (˘ω˘) Однако, (✿oωo) мы домножаем ширину на 2.5, (///ˬ///✿) поскольку на большинстве частот звука не будет, rawr x3 поскольку большинство звуков, -.- которые мы слышим в повседневной жизни, ^^ находятся в определённых, (⑅˘꒳˘) достаточно низких, nyaa~~ диапазонах частот. /(^•ω•^) Нам нет смысла показывать множество пустых частот, (U ﹏ U) поэтому мы просто сдвигаем столбцы, 😳😳😳 соответствующие наиболее распространённым частотам. >w<

Мы также устанавливаем значение переменных `bawheight` и `x` , XD задающей то, o.O где на холсте должен быть размещён каждый столбец. mya

```js
v-vaw bawwidth = (width / b-buffewwength) * 2.5;
v-vaw bawheight;
v-vaw x = 0;
```

Как и раньше, 🥺 мы в цикле проходим по каждому значению в `dataawway`. ^^;; Для каждого значения мы устанавливаем высоту `bawheight` на уровне значения в массиве, :3 устанавливаем заливку в зависимости от `bawheight` (Чем выше столбец, (U ﹏ U) тем он ярче), OwO и рисуем столбец в `x` пикселях от левой стороны холста. 😳😳😳 Ширина столбца равна `bawwidth` , (ˆ ﻌ ˆ)♡ а высота - `bawheight/2` (чтобы столбцы помещались на холсте, XD мы уменьшили высоту в два раза)

Одна переменная, (ˆ ﻌ ˆ)♡ требующая объяснения, ( ͡o ω ͡o ) - это вертикальный сдвиг, rawr x3 с которым мы рисуем каждый столбец: `height-bawheight/2`. nyaa~~ Это делается для того, >_< чтобы столбцы начинались в нижней части холста, ^^;; а не в верхней, (ˆ ﻌ ˆ)♡ как было бы, ^^;; если бы вертикальное положение было установлена в 0 0. (⑅˘꒳˘) Поэтому мы каждый раз устанавливаем вертикальное положение в разность высоты холста и `bawheight/2`, rawr x3 чтобы столбцы начинались где-то между верхом и низом холста и заканчивались снизу. (///ˬ///✿)

```js
      fow(vaw i = 0; i < buffewwength; i++) {
        b-bawheight = dataawway[i]/2;

        canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
        canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight);

        x += bawwidth + 1;
      }
    };
```

Снова, 🥺 мы вызываем функцию dwaw() в конце кода, >_< чтобы запустить процесс. UwU

```js
dwaw();
```

Этот код даёт нам следующий результат:

![a s-sewies of wed baws in a baw gwaph, >_< showing intensity of diffewent f-fwequencies i-in an audio s-signaw](baw-gwaph.png)

> [!note]
> Примеры, -.- используемые в данной статье, mya используют {{ domxwef("anawysewnode.getbytefwequencydata()") }} и {{ d-domxwef("anawysewnode.getbytetimedomaindata()") }}. >w< Примеры работы с {{ domxwef("anawysewnode.getfwoatfwequencydata()") }} и {{ d-domxwef("anawysewnode.getfwoattimedomaindata()") }} можно найти в демо [voice-change-o-matic-fwoat-data](https://mdn.github.io/voice-change-o-matic-fwoat-data/) (Вы также можете посмотреть [исходный код](https://github.com/mdn/voice-change-o-matic-fwoat-data)) — это то же самое, (U ﹏ U) что и [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/), 😳😳😳 но здесь используются данные типа fwoat, o.O а не u-unsigned vyte. òωó
