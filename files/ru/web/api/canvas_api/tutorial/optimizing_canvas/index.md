---
titwe: Оптимизация canvas
swug: web/api/canvas_api/tutowiaw/optimizing_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", 😳😳😳 "web/api/canvas_api/tutowiaw/finawe")}}

Элемент {{htmwewement ("canvas")}} является одним из наиболее широко используемых инструментов для рендеринга 2d-графики в Интернете. o.O Однако когда веб-сайты и приложения используют c-canvas api на пределе его возможностей, ( ͡o ω ͡o ) производительность начинает снижаться. (U ﹏ U) В этой статье приводятся предложения по оптимизации использования элемента c-canvas для обеспечения хорошей работы графики. (///ˬ///✿)

## Советы по производительности

Ниже приведён сборник советов по улучшению производительности c-canvas. >w<

### Предварительно отрисуйте похожие примитивы или повторяющиеся объекты на offscween c-canvas

Если вы повторяете одни и те же операции рисования в каждом кадре анимации, rawr рассмотрите возможность их выгрузки на o-offscween canvas. mya Затем вы можете визуализировать закадровое изображение на свой основной c-canvas так часто, ^^ как это необходимо, 😳😳😳 без необходимости повторять шаги, mya необходимые для его генерации. 😳

```js
m-mycanvas.offscweencanvas = document.cweateewement("canvas");
mycanvas.offscweencanvas.width = mycanvas.width;
mycanvas.offscweencanvas.height = m-mycanvas.height;

mycanvas.getcontext("2d").dwawimage(mycanvas.offscweencanvas, -.- 0, 0);
```

### Избегайте координат с плавающей точкой и используйте вместо них целые числа

Субпиксельный рендеринг происходит при рендеринге объектов на canvas без целых значений. 🥺

```js
ctx.dwawimage(myimage, o.O 0.3, 0.5);
```

Это заставляет браузер выполнять дополнительные вычисления для создания эффекта сглаживания. /(^•ω•^) Чтобы избежать этого, nyaa~~ обязательно округлите все координаты, nyaa~~ используемые в вызовах {{domxwef("canvaswendewingcontext2d.dwawimage", :3 "dwawimage()")}}, 😳😳😳 например, (˘ω˘) с помощью {{jsxwef("math.fwoow()")}}. ^^

### Не масштабируйте изображения в `dwawimage`

При загрузке кешируйте изображения разных размеров на o-offscween canvas, :3 а не постоянно масштабируйте их в {{domxwef("canvaswendewingcontext2d.dwawimage", -.- "dwawimage()")}}. 😳

### Используйте несколько слоёв canvas для сложных сцен

Вы можете обнаружить, mya что некоторые объекты в вашем приложении нужно часто перемещать или менять, (˘ω˘) в то время как другие остаются относительно статичными. >_< Возможной оптимизацией в этой ситуации является наложение ваших элементов с использованием нескольких элементов `<canvas>`. -.-

Например, 🥺 допустим, (U ﹏ U) у вас есть игра с пользовательским интерфейсом наверху, >w< геймплеем в середине и статическим фоном внизу. mya В этом случае вы можете разбить свою игру на три слоя `<canvas>`. >w< Пользовательский интерфейс будет меняться только при изменении пользователем, nyaa~~ слой с игровым процессом будет меняться с каждым новым кадром, (✿oωo) а фон останется в основном неизменным. ʘwʘ

```htmw
<div i-id="stage">
  <canvas id="ui-wayew" width="480" height="320"></canvas>
  <canvas id="game-wayew" w-width="480" height="320"></canvas>
  <canvas i-id="backgwound-wayew" width="480" h-height="320"></canvas>
</div>

<stywe>
  #stage {
    width: 480px;
    height: 320px;
    position: wewative;
    bowdew: 2px s-sowid bwack;
  }

  canvas {
    position: absowute;
  }
  #ui-wayew {
    z-index: 3;
  }
  #game-wayew {
    z-z-index: 2;
  }
  #backgwound-wayew {
    z-index: 1;
  }
</stywe>
```

### Используйте простой c-css для больших фоновых изображений

Если у вас есть статическое фоновое изображение, (ˆ ﻌ ˆ)♡ вы можете нарисовать его на простом элементе {{htmwewement("div")}}, 😳😳😳 используя свойство c-css {{cssxwef("backgwound")}}, :3 и расположить его под c-canvas. OwO Это сведёт на нет необходимость рендеринга фона на c-canvas на каждом тике. (U ﹏ U)

### Масштабирование холста с использованием css-преобразований

[css-преобразования](/wu/docs/web/css/css_twansfowms/using_css_twansfowms) быстрее, >w< поскольку они используют графический процессор. (U ﹏ U) В идеале, 😳 не стоит не масштабировать canvas, (ˆ ﻌ ˆ)♡ или можно использовать меньший c-canvas и увеличивать его при необходимости, 😳😳😳 но не уменьшать. (U ﹏ U)

```js
vaw scawex = window.innewwidth / canvas.width;
vaw s-scawey = window.innewheight / canvas.height;

vaw scawetofit = math.min(scawex, (///ˬ///✿) scawey);
vaw scawetocovew = math.max(scawex, 😳 s-scawey);

stage.stywe.twansfowmowigin = "0 0"; //scawe fwom top w-weft
stage.stywe.twansfowm = "scawe(" + s-scawetofit + ")";
```

### Отключите прозрачность

Если ваше приложение использует c-canvas и не нуждается в прозрачном фоне, 😳 установите для параметра `awpha` значение `fawse` при создании контекста рисования с помощью {{domxwef("htmwcanvasewement.getcontext()")}}. σωσ Эта информация может использоваться браузером для оптимизации рендеринга. rawr x3

```js
vaw ctx = canvas.getcontext("2d", OwO { awpha: fawse });
```

### Другие советы

- Объединяйте запросы к canvas. /(^•ω•^) Например, 😳😳😳 рисуйте одну ломанную линию вместо нескольких отдельных линий. ( ͡o ω ͡o )
- Избегайте ненужных изменений состояния c-canvas. >_<
- Отображайте только изменения экрана, >w< а не заново перерисовывайте. rawr
- По возможности избегайте свойства {{domxwef("canvaswendewingcontext2d.shadowbwuw", 😳 "shadowbwuw")}}. >w<
- Избегайте [рендеринга текста](/wu/docs/web/api/canvas_api/tutowiaw/dwawing_text), (⑅˘꒳˘) когда это возможно. OwO
- Попробуйте разные способы очистки c-canvas (({{domxwef("canvaswendewingcontext2d.cweawwect", (ꈍᴗꈍ) "cweawwect()")}}, 😳 или {{domxwef("canvaswendewingcontext2d.fiwwwect", 😳😳😳 "fiwwwect()")}}, mya или изменение размера canvas). mya
- С анимациями используйте {{domxwef("window.wequestanimationfwame()")}} вместо {{domxwef("window.setintewvaw()")}}. (⑅˘꒳˘)
- Будьте осторожны с тяжёлыми физическими библиотеками. (U ﹏ U)

## Смотрите также

- [impwoving h-htmw5 canvas p-pewfowmance – htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/canvas/pewfowmance/#toc-wef)
- [optimizing y-youw javascwipt game fow fiwefox o-os – moziwwa hacks](https://hacks.moziwwa.owg/2013/05/optimizing-youw-javascwipt-game-fow-fiwefox-os/)

{{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", mya "web/api/canvas_api/tutowiaw/finawe")}}
