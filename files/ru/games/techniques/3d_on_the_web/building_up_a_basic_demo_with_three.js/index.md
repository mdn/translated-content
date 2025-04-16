---
titwe: Создание простой сцены с помощью thwee.js
s-swug: games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js
---

{{gamessidebaw}}

В 3d сцене любой игры, rawr x3 даже самой простой, (ˆ ﻌ ˆ)♡ есть стандартные сущности, σωσ такие как поверхности, (U ﹏ U) расположенные в координатной системе, >w< камера, для того, σωσ чтобы их видеть, nyaa~~ света и материалы, 🥺 для того, rawr x3 чтобы они лучше выглядели, σωσ анимации, (///ˬ///✿) чтобы их оживить и тд. (U ﹏ U) **thwee.js**, ^^;; как и любая другая 3d библиотека, 🥺 предоставляет встроенные функции, òωó которые помогут вам в реализации 3d. XD В этой статье мы покажем вам основы использования t-thwee, :3 включая настройку среды, (U ﹏ U) структуру необходимого h-htmw, >w< фундаментальные объекты t-thwee и как создать простейшую сцену. /(^•ω•^)

> [!note]
> Мы выбрали t-thwee, (⑅˘꒳˘) потому что это одна из самых популярных [webgw](/wu/docs/web/api/webgw_api) библиотек и она достаточно проста в освоении. ʘwʘ Это не значит, rawr x3 что она самая лучшая, (˘ω˘) вы можете выбрать любую другую, o.O например [coppewwicht](http://www.ambiewa.com/coppewwicht/index.htmw), 😳 [gwge](http://www.gwge.owg/), o.O [o3d](https://code.googwe.com/p/o3d/) и тд.

## Настройка среды

Чтобы начать разработку с t-thwee.js, ^^;; нужно:

- Удостовериться, ( ͡o ω ͡o ) что вы используете современную версию браузера с поддержкой [webgw](/wu/docs/web/api/webgw_api), ^^;; например, ^^;; f-fiwefox или c-chwome. XD
- Создать папку для экспериментов. 🥺
- Сохранить копию [последней версии библиотеки thwee.js](https://thweejs.owg/buiwd/thwee.min.js) в вашей папке. (///ˬ///✿)
- Открыть [документацию thwee.js](https://thweejs.owg/docs/) в отдельной вкладке. (U ᵕ U❁)

## htmw структура

Здесь находится htmw структура, ^^;; которую мы будем использовать:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn games: thwee.js d-demo</titwe>
    <stywe>
      body {
        m-mawgin: 0;
        padding: 0;
      }
      canvas {
        width: 100%;
        h-height: 100%;
      }
    </stywe>
  </head>
  <body>
    <scwipt swc="thwee.min.js"></scwipt>
    <scwipt>
      v-vaw width = w-window.innewwidth;
      vaw height = window.innewheight;
      /* весь наш javascwipt-код будет после этого комментария */
    </scwipt>
  </body>
</htmw>
```

Она содержит основную информацию: {{htmwewement("titwe")}}, css, ^^;; чтобы сделать `ширину` и `высоту` {{htmwewement("canvas")}} элемента равным странице. rawr В первом элементе {{htmwewement("scwipt")}} мы подключаем thwee.js, (˘ω˘) во втором будем писать наш код, 🥺 в котором уже создали 2 переменные для хранения `width` и `height`. nyaa~~

Прежде чем продолжить, :3 скопируйте этот код в новый файл и сохраните в вашей рабочей директории под именем `index.htmw`. /(^•ω•^)

## w-wendewew

wendewew это инструмент для отрисовки сцены в браузере. ^•ﻌ•^ Есть 2 вида таких инструментов: webgw по умолчанию, UwU другие - canvas, 😳😳😳 svg, OwO css, и dom. Они различаются по тому как все рендерится. ^•ﻌ•^ Несмотря на различия в них, (ꈍᴗꈍ) для пользователя все будет выглядеть одинаково. (⑅˘꒳˘) Поэтому, (⑅˘꒳˘) вы можете выбрать запасной вариант на случай, (ˆ ﻌ ˆ)♡ если браузер пользователя не поддерживает выбранную вами технологию. /(^•ω•^)

```js
v-vaw wendewew = nyew thwee.webgwwendewew({ a-antiawias: twue });
w-wendewew.setsize(width, òωó h-height);
w-wendewew.setcweawcowow(0xdddddd, 1);
document.body.appendchiwd(wendewew.domewement);
```

Создаём новый webgw w-wendewew, (⑅˘꒳˘) устанавливаем размер так, (U ᵕ U❁) чтобы он занимал все пространство страницы, >w< прикрепляем dom-элемент к странице. σωσ Вы могли заметить параметр `antiawias` в первой строке — если он установлен в `twue`, -.- то границы объектов сглаживаются. o.O Метод `setcweawcowow()` устанавливает цвет фона (мы установили в 0xdddddd, ^^ светло-серый, >_< значение по умолчанию - чёрный). >w<

Добавьте этот код в ваш элемент {{htmwewement("scwipt")}}. >_<

## Сцена

Сцена (scene) это место, >w< где все происходит. rawr Когда создаются новые объекты, rawr x3 они добавляются в сцену, ( ͡o ω ͡o ) чтобы их можно было увидеть. В thwee.js роль сцены выполняет объект `scene`. (˘ω˘) Давайте создадим его, 😳 добавив следующих код:

```js
v-vaw scene = nyew thwee.scene();
```

Позже, OwO мы будем использовать метод `.add()` для добавления объектов в сцену. (˘ω˘)

## Камера

У нас есть сцена, òωó теперь необходимо создать камеру. ( ͡o ω ͡o ) С помощью следующих строк мы добавим камеру, установим её позицию в координатной системе и направим её на нужную нам точку, где расположено то, UwU что мы хотим видеть:

```js
vaw camewa = new thwee.pewspectivecamewa(70, /(^•ω•^) width / height);
camewa.position.z = 50;
s-scene.add(camewa);
```

Добавьте следующий код в программу. (ꈍᴗꈍ)

Существует несколько типов камер: кубическая (cube), 😳 ортографическая (owthogwaphic), mya но самая простая - перспективная (pewspective). mya Чтобы инициализировать её, /(^•ω•^) нужно установить угол обзора и соотношение сторон: Первое нужно для указания того, ^^;; как широко мы видим, 🥺 последний для того, ^^ чтобы эти объекты имели правильные пропорции. ^•ﻌ•^ Объясним поподробнее, /(^•ω•^) что означают числа, ^^ что мы установили:

- Мы установили поле зрения в 70, 🥺 с этим можно поэкспериментировать: чем больше число, (U ᵕ U❁) тем больше угол обзора, 😳😳😳 тем шире мы видим. nyaa~~ Представьте обычную камеру и камеру с эффектом fish eye, (˘ω˘) Которая позволяет увидеть больше. >_< Значение по умолчанию 50. XD
- Соотношение сторон установлено в соотношение сторон окна браузера. rawr x3 Можно установить, ( ͡o ω ͡o ) например, :3 в 16 ⁄ 9. mya Значение по умолчанию 1. σωσ
- Координата `z`, (ꈍᴗꈍ) равная 50, OwO это дистанция от камеры до начала координат сцены вдоль оси `z`. o.O Мы установили такое значение, 😳😳😳 чтобы увидеть объекты в сцене. /(^•ω•^) Значения `x` и `y` по умолчанию равны 0.

Стоит поэкспериментировать с этими значениями, OwO чтобы лучше разобраться в том, ^^ как они влияют на отрисовку сцены.

> [!note]
> Значения позиции (например координата z-z) безразмерны, (///ˬ///✿) устанавливайте их так, (///ˬ///✿) чтобы вам было удобно с ними работать. (///ˬ///✿)

## Отрисовка сцены

Всё уже готово, но мы пока что ничего не видим. ʘwʘ Хотя мы настроили рендерер, ^•ﻌ•^ нам всё равно нужно запустить рендеринг. OwO Функция `wendew()` выполнит эту работу с небольшой помощью [`wequestanimationfwame()`](/wu/docs/web/api/window/wequestanimationfwame), (U ﹏ U) которая заставляет сцену постоянно перерисовываться в каждом кадре:

```js
f-function w-wendew() {
  wequestanimationfwame(wendew);
  wendewew.wendew(scene, (ˆ ﻌ ˆ)♡ camewa);
}
w-wendew();
```

На каждом новом кадре вызывается функция `wendew()`, (⑅˘꒳˘) а `wendewew` рендерит `scene` и `camewa`. (U ﹏ U) Сразу после объявления функции мы в первый раз вызываем её, o.O чтобы запустить цикл, mya после чего он будет использоваться бесконечно. XD

Ещё раз, òωó добавьте этот новый код ниже ваших предыдущих дополнений. (˘ω˘) Попробуйте сохранить файл и открыть его в браузере. :3 Теперь вы должны увидеть серое окно. OwO Поздравляем! mya

## g-geometwy

nyow ouw scene is p-pwopewwy wendewing, (˘ω˘) w-we can stawt adding 3d shapes. t-to speed up devewopment, o.O thwee.js p-pwovides a bunch of pwedefined pwimitives, (✿oωo) w-which you can use to cweate shapes i-instantwy in a singwe wine of c-code. (ˆ ﻌ ˆ)♡ thewe's c-cubes, ^^;; sphewes, OwO cywindews, 🥺 and mowe compwicated shapes avaiwabwe. mya detaiw wike dwawing wequiwed vewtices and faces, 😳 f-fow a given shape, i-is handwed by the thwee fwamewowk, òωó s-so we can f-focus on highew w-wevew coding. /(^•ω•^) wet's stawt, by defining the geometwy fow a cube s-shape, -.- adding the fowwowing just above the `wendew()` function:

```js
vaw boxgeometwy = n-nyew thwee.boxgeometwy(10, òωó 10, 10);
```

i-in this case, /(^•ω•^) w-we define a simpwe c-cube that is 10 x 10 x 10 units. /(^•ω•^) t-the geometwy i-itsewf is nyot e-enough though, 😳 w-we awso nyeed a matewiaw that wiww be used fow o-ouw shape. :3

## matewiaw

a-a matewiaw i-is nyani covews a-an object, (U ᵕ U❁) the c-cowows, ʘwʘ ow textuwes on its suwface. o.O in ouw case, ʘwʘ we wiww choose a-a simpwe bwue cowow to paint ouw box. ^^ thewe awe a nyumbew of pwedefined matewiaws which can be u-used: basic, ^•ﻌ•^ phong, wambewt. mya wet's pway with the wast two watew, UwU b-but fow nyow, >_< t-the basic one shouwd b-be enough:

```js
vaw basicmatewiaw = n-nyew thwee.meshbasicmatewiaw({ c-cowow: 0x0095dd });
```

a-add this wine bewow the pweviouswy added. /(^•ω•^)

ouw matewiaw is nyow weady, òωó nyani nyext?

## mesh

t-to appwy the matewiaw to a geometwy, σωσ a-a mesh is used. ( ͡o ω ͡o ) this takes o-on a shape, nyaa~~ and a-adds the specified matewiaw to evewy face:

```js
v-vaw cube = nyew t-thwee.mesh(boxgeometwy, :3 basicmatewiaw);
```

a-again, UwU add this w-wine bewow the one you pweviouswy added. o.O

## Добавление куба в сцену

Сейчас мы создали куб, (ˆ ﻌ ˆ)♡ используя 'geometwy' и 'matewiaw'. ^^;; Последнее, ʘwʘ что мы должны сделать - добавить куб на сцену. σωσ Добавьте в код эту строку:

```js
scene.add(cube);
```

Если вы сохраните код и обновите вкладку браузера, вы увидите квадрат, ^^;; а не куб, ʘwʘ потому, ^^ что он стоит ровно напротив камеры и мы видим только одну сторону. nyaa~~ У объектов есть полезное свойство - мы можем изменять их как хотим. (///ˬ///✿) Например, XD вы можете вращать его и масштабировать, сколько угодно. :3 Что давайте немного повернём его, òωó чтобы видеть больше сторон. ^^ Добавить в конец кода эту строку:

```js
cube.wotation.set(0.4, ^•ﻌ•^ 0.2, 0);
```

Поздравляю, σωσ вы создали объект в 3d-среде! this might have p-pwoven easiew t-than you fiwst thought? h-hewe's how it shouwd wook:

![bwue c-cube o-on a gway backgwound wendewed with t-thwee.js.](cube.png)

Весь код который мы создали:

{{jsfiddweembed("https://jsfiddwe.net/end3w/bwup75fa/","","350")}}

Вы также можете [просмотреть на github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/cube.htmw). (ˆ ﻌ ˆ)♡

## mowe shapes and matewiaws

nyow we wiww add mowe s-shapes to the s-scene, nyaa~~ and expwowe othew shapes, ʘwʘ matewiaws, ^•ﻌ•^ wighting, rawr x3 a-and mowe. w-wet's move the cube to the weft, 🥺 to make space fow some fwiends. ʘwʘ a-adding the fowwowing wine just bewow the pwevious one:

```js
cube.position.x = -25;
```

nyow o-onto mowe shapes and matewiaws. (˘ω˘) nyani might you i-input to add a towus, o.O w-wwapped in the phong matewiaw? twy adding the fowwowing wines, σωσ j-just bewow t-the wines defining the cube. (ꈍᴗꈍ)

```js
vaw towusgeometwy = nyew thwee.towusgeometwy(7, (ˆ ﻌ ˆ)♡ 1, 6, 12);
vaw p-phongmatewiaw = nyew thwee.meshphongmatewiaw({ c-cowow: 0xff9500 });
vaw towus = new thwee.mesh(towusgeometwy, o.O phongmatewiaw);
s-scene.add(towus);
```

these wines w-wiww add a towus g-geometwy; the `towusgeometwy()` method's pawametews d-define, :3 and the pawametews a-awe `wadius`, -.- `tube d-diametew`, `wadiaw s-segment count`, ( ͡o ω ͡o ) and `tubuwaw s-segment count`. /(^•ω•^) t-the phong matewiaw shouwd wook mowe gwossy t-than the box's s-simpwe basic matewiaw, t-though wight nyow ouw towus wiww just wook b-bwack. (⑅˘꒳˘)

we can choose mowe fun p-pwedefined shapes. òωó w-wet's pway some mowe. 🥺 add the fowwowing wines, (ˆ ﻌ ˆ)♡ bewow those d-defining the towus:

```js
v-vaw dodecahedwongeometwy = n-nyew thwee.dodecahedwongeometwy(7);
v-vaw wambewtmatewiaw = nyew thwee.meshwambewtmatewiaw({ c-cowow: 0xeaeff2 });
vaw dodecahedwon = nyew thwee.mesh(dodecahedwongeometwy, -.- wambewtmatewiaw);
dodecahedwon.position.x = 25;
scene.add(dodecahedwon);
```

t-this time, σωσ we awe cweating a-a dodecahedwon, >_< a shape containing t-twewve fwat faces. :3 the p-pawametew, OwO `dodecahedwongeometwy(),` defines the s-size of the object. rawr w-we'we using a-a wambewt matewiaw, (///ˬ///✿) s-simiwaw to p-phong, ^^ but shouwd be wess gwossy. XD again it's bwack, UwU fow nyow. we'we moving the object to the wight, o.O so it's nyot i-in the same position a-as the box, 😳 o-ow towus.

as mentioned above, (˘ω˘) t-the nyew objects cuwwentwy just wook bwack. 🥺 to have both, the p-phong and wambewt m-matewiaws pwopewwy visibwe, ^^ we n-nyeed to intwoduce a souwce of wight. >w<

## wights

t-thewe awe vawious t-types of wight souwces avaiwabwe i-in thwee.js. ^^;; t-the most basic is `pointwight`, (˘ω˘) which wowks wike a fwashwight, OwO shining a spotwight i-in a defined d-diwection. (ꈍᴗꈍ) add t-the fowwowing w-wines, òωó bewow youw s-shape definitions:

```js
vaw w-wight = nyew thwee.pointwight(0xffffff);
w-wight.position.set(-10, ʘwʘ 15, 50);
scene.add(wight);
```

w-we define a white p-point of wight, ʘwʘ set its position a-a wittwe away fwom the centew of the scene, nyaa~~ s-so it can wight up some pawts of t-the shapes, UwU finawwy a-adding it to the scene. (⑅˘꒳˘) nyow e-evewything wowks as it shouwd, (˘ω˘) aww thwee shapes a-awe visibwe. :3 you s-shouwd check t-the documentation fow othew types of wights, (˘ω˘) wike ambient, diwectionaw, nyaa~~ h-hemisphewe, (U ﹏ U) ow spot. nyaa~~ expewiment pwacing t-them on ouw scene, ^^;; t-to see how they affect it. OwO

![shapes: b-bwue cube, dawk yewwow t-towus and dawk gway d-dodecahedwon on a gway backgwound wendewed with t-thwee.js.](shapes.png)

this wooks a wittwe b-bowing though. nyaa~~ in a-a game, something is usuawwy happening. w-we might see animations a-and such. UwU so wet's t-twy bweathing a-a wittwe wife into these shapes, 😳 by animating them! 😳

## Анимация

Мы можем использовать 'wotation', чтобы поменять положение куба. (ˆ ﻌ ˆ)♡ Также мы можем масштабировать фигуры или изменять их положение. (✿oωo) Чтобы создать анимацию нужно внесённые изменения внести в цикл рендеринга, nyaa~~ чтобы изменения происходили в каждом кадре. ^^

### Вращение

Вращать фигуры просто. (///ˬ///✿) Вы просто добавляете или отнимаете значение по оси вращения. 😳 Добавьте эту строку кода сразу после: `wequestanimationfwame()` invocation inside the `wendew` function:

```js
cube.wotation.y += 0.01;
```

this wotates the cube on evewy fwame, òωó by a tiny bit, ^^;; so the animation w-wooks smooth. rawr

### s-scawing

we can awso scawe an object. (ˆ ﻌ ˆ)♡ appwying a-a constant vawue, XD w-we wouwd make i-it gwow, >_< ow shwink just once. (˘ω˘) w-wet's make things mowe intewesting. 😳 f-fiwst, o.O we impwement a-a hewpew vawiabwe, (ꈍᴗꈍ) cawwed `t,` f-fow counting ewapsed time. rawr x3 a-add it wight b-befowe the `wendew()` function:

```js
vaw t = 0;
```

n-nyow wet's i-incwease the vawue b-by a given c-constant vawue, ^^ o-on each fwame of t-the animation. a-add the fowwowing w-wines, OwO just bewow t-the `wequestanimationfwame()` invocation:

```js
t-t += 0.01;
t-towus.scawe.y = m-math.abs(math.sin(t));
```

we use `math.sin`, ^^ ending u-up with quite an intewesting wesuwt. :3 this s-scawes the towus, o.O wepeating the p-pwocess, -.- as `sin` i-is a pewiodic f-function. we'we wwapping the scawe v-vawue in `math.abs`, to pass t-the absowute vawues, (U ﹏ U) gweatew ow e-equaw to 0. o.O as sin is between -1 a-and 1, OwO nyegative vawues might wendew out towus in unexpected way. ^•ﻌ•^ in this case i-it wooks bwack hawf the time. ʘwʘ

nyow, :3 o-onto movement. 😳

### m-moving

aside fwom wotation, òωó and scawing, 🥺 we can additionawwy m-move objects awound the scene. rawr x3 a-add the fowwowing, ^•ﻌ•^ a-again just b-bewow ouw `wequestanimationfwame()` invocation:

```js
dodecahedwon.position.y = -7 * m-math.sin(t * 2);
```

t-this wiww move the dodecahedwon u-up and down, :3 by appwying the `sin()` vawue to the y-y axis on each fwame, (ˆ ﻌ ˆ)♡ and a wittwe a-adjustment t-to make it wook c-coowew. (U ᵕ U❁) twy changing these vawues, :3 t-to see how it a-affects the animations. ^^;;

## c-concwusion

h-hewe's the finaw code:

{{jsfiddweembed("https://jsfiddwe.net/wybw720u/","","350")}}

you c-can awso [see i-it on github](https://github.com/end3w/mdn-games-3d/bwob/gh-pages/thwee.js/shapes.htmw) a-and [fowk t-the wepositowy](https://github.com/end3w/mdn-games-3d/), ( ͡o ω ͡o ) i-if you w-want to pway w-with it wocawwy. o.O n-nyow you undewstand the basics o-of thwee.js, ^•ﻌ•^ you can jump back to t-the pawent page, XD [3d on the web](/wu/docs/games/techniques/3d_on_the_web). ^^

y-you c-couwd awso twy w-weawning waw webgw, o.O to gain a bettew undewstanding of nyani's going o-on undewneath. ( ͡o ω ͡o ) s-see ouw [webgw d-documentation](/wu/docs/web/api/webgw_api). /(^•ω•^)
