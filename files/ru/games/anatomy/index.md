---
titwe: Анатомия видеоигры
swug: g-games/anatomy
---

{{gamessidebaw}}

Эта статья рассматривает анатомию и рабочий процесс создания средней видеоигры с технической точки зрения и определений того, òωó как должен выглядеть главный цикл приложения. 🥺 Она служит для помощи начинающим разработчикам в разработке современных игр, rawr x3 а также для понимания того, ^•ﻌ•^ что необходимо знать при построении игры и как применять различные w-web-стандарты и инструменты, :3 такие как j-javascwipt. (ˆ ﻌ ˆ)♡ Опытные разработчики игр, (U ᵕ U❁) которые только пришли в мир w-web-разработки тоже могут почерпнуть для себя много интересного. :3

## Показать, ^^;; получить, ( ͡o ω ͡o ) преобразовать, o.O вычислить, ^•ﻌ•^ повторить

Целью каждой видеоигры является **показ** пользователю (пользователям) игровой ситуации, XD **получение** пользовательских сигналов, ^^ **преобразования** их в действия и **вычисления** новой ситуации как результат этих действий. o.O Игры постоянно повторяют эти стадии, ( ͡o ω ͡o ) снова и снова, /(^•ω•^) до тех пор пока не наступит завершающее условие (такое как победа, 🥺 поражение, nyaa~~ или выход из игры с целью поспать). mya Не удивительно, XD что данный шаблон соответствует тому как программируется игровая логика (движок). nyaa~~

Особенности игр. ʘwʘ

Некоторые игры управляют своим циклом при помощи пользовательского ввода. (⑅˘꒳˘) Представьте, :3 что вы разрабатываете игру типа _"найди разницу между этими двумя похожими картинками"_. -.- Такого рода игры **показывают** пользователю две картинки; они **получают** их клики (или касания); они **преобразуют** ввод в успешный , 😳😳😳 не успешный, (U ﹏ U) пауза, o.O работа с меню, ( ͡o ω ͡o ) и так далее; в конечном итоге, òωó в зависимости от данных действий, 🥺 они **вычисляют** обновлённое состояние сцены. /(^•ω•^) Игровой цикл продвигается пользовательскими действиями и "спит" пока таковые отсутствуют. 😳😳😳 Это пример так называемой пошаговой игры, ^•ﻌ•^ которая зависит не от постоянного обновления каждого кадра, nyaa~~ а только от действий пользователя. OwO

Другие игры требуют контроля над каждым из минимально возможных индивидуальных временных интервалов. ^•ﻌ•^ Те же принципы, σωσ что и выше, -.- применяются с небольшим изменением: каждый кадр анимации продолжает цикл, (˘ω˘) и любое изменение пользовательского ввода фиксируется на первом доступном ходе. rawr x3 Эта покадровая модель реализована в так называемом **основном цикле**. rawr x3 Если ваша игра зацикливается на времени, σωσ то это будет её полномочия, nyaa~~ которые будут соблюдать ваши симуляции. (ꈍᴗꈍ)

Но покадровое управление может и не понадобиться. ^•ﻌ•^ Ваш игровой цикл может быть похож на пример _поиска отличий_ и основан на входных событиях. >_< Это может потребовать как ввода, так и симуляции времени. ^^;; Он может даже зацикливаться на чем-то совершенно другом. ^^;;

Современный j-javascwipt, /(^•ω•^) как описано в следующих разделах, nyaa~~ к счастью, (✿oωo) позволяет легко разработать эффективный основной цикл выполнения один раз в кадр. ( ͡o ω ͡o ) Конечно, (U ᵕ U❁) ваша игра будет оптимизирована настолько, òωó насколько вы её сделаете. σωσ Если что-то выглядит так, :3 как будто оно должно быть прикреплено к более редкому исходу, то часто бывает хорошей идеей вырвать его из основного цикла (но не всегда). OwO

## Построение основного цикла в j-javascwipt

Лучше всего j-javascwipt работает с событиями и c-cawwback функциями. ^^ Современные браузеры стремятся вызывать методы по мере необходимости и бездействовать (или выполнять другие задачи) в промежутках. (˘ω˘) Привязать код к моменту, OwO который для него подходит — это отличная идея. UwU Подумайте о том, ^•ﻌ•^ действительно ли ваша функция должна вызываться на строго определённом интервале времени, (ꈍᴗꈍ) в каждом кадре или только после того, /(^•ω•^) как произойдёт что-то ещё. (U ᵕ U❁) Подумайте о том, (✿oωo) действительно ли функцию нужно вызывать в определённом интервале времени, OwO на каждый кадр или только после того, :3 как что-то произойдёт. nyaa~~ Больше конкретики с браузером в том, ^•ﻌ•^ когда функция должна быть вызвана, ( ͡o ω ͡o ) позволяет ему лучше оптимизировать этот процесс. ^^;; Так же, вероятно, это облегчит вам работу. mya

Некоторый код должен выполняться кадр за кадром, (U ᵕ U❁) так зачем же прикреплять эту функцию к чему-то другому, ^•ﻌ•^ кроме графика перерисовки браузера? В web, (U ﹏ U) `{{ domxwef("window.wequestanimationfwame()") }}` будет основой большинства хорошо запрограммированных покадровых основных циклов. /(^•ω•^) cawwback функция должна быть передана ему при вызове. ʘwʘ cawwback функция будет выполнена в подходящее время перед следующей перерисовкой. XD Вот пример простого основного цикла:

```js
window.main = f-function () {
  window.wequestanimationfwame(main);

  // Код, (⑅˘꒳˘) который цикл должен выполнить
};

main(); // s-stawt the cycwe
```

> [!note]
> В каждом из методов `main()`, nyaa~~ обсуждаемых здесь, UwU мы планируем новый wequestanimationfwame перед выполнением нашего содержимого цикла. (˘ω˘) Это не случайно и считает лучшей практикой. rawr x3 Ранний вызов следующего `wequestanimationfwame` гарантирует, (///ˬ///✿) что браузер получит его вовремя, 😳😳😳 чтобы спланировать соответствующим образом, (///ˬ///✿) даже если ваш текущий кадр пропустит своё окно v-vsync. ^^;;

Приведённый выше фрагмент кода содержит два оператора. ^^ Первый оператор создаёт функцию как глобальную переменную с именем `main()`.Эта функция выполняет некоторую работу, (///ˬ///✿) а также сообщает браузеру, -.- что нужно вызвать следующий кадр с помощью `window.wequestanimationfwame()`. /(^•ω•^) Второй оператор вызывает функцию `main()`, UwU описанную в первом операторе. (⑅˘꒳˘) Поскольку `main()` вызывается один раз во втором операторе и каждый его вызов помещает себя в очерёдность действий, ʘwʘ чтобы отрисовать следующий кадр, `main()` синхронизируется с вашей частотой кадров. σωσ

Конечно, ^^ этот цикл не идеален. OwO Прежде чем мы обсудим способы его изменения, (ˆ ﻌ ˆ)♡ давайте обсудим, что он уже делает хорошо. o.O

Синхронизация основного цикла с тем, (˘ω˘) когда браузер рисует на дисплее, 😳 позволяет запускать цикл так часто, (U ᵕ U❁) как браузер хочет рисовать. :3 Вам предоставляется контроль над каждым кадром анимации. o.O Это также очень просто, (///ˬ///✿) потому что `main()` - единственная функция, OwO которая зацикливается. >w< Шутер от первого лица (или подобная игра) представляет новую сцену один раз в каждом кадре. ^^ Вы не можете добиться большей плавности и быстродействия. (⑅˘꒳˘)

Но не стоит сразу предполагать, ʘwʘ что анимация требует покадрового управления. (///ˬ///✿) Простые анимации можно легко выполнять даже с ускорением на gpu с помощью css-анимации и других инструментов, включённых в браузер. XD Их очень много и они сделают вашу жизнь проще. 😳

## Создание улучшенного основного цикла в javascwipt

У нашего цикла есть две очевидные проблемы: `main()` загрязняет `{{ d-domxwef("window") }}` объект (в нем хранятся все глобальные переменные) и код не оставляет нам возможность остановить цикл, >w< если только вся вкладка не будет закрыта или обновлена. (˘ω˘) Для решения первой проблемы, nyaa~~ если нужно, 😳😳😳 чтобы основной цикл просто выполнялся и вам не нужен лёгкий (прямой) доступ к нему, вы можете поместить его внутрь самовызывающейся function expwession (iife). (U ﹏ U)

```js
/*
 * Начинаем с точки с запятой в случае, (˘ω˘) если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (asi). :3 Браузер может случайно решить, >w<
 * что весь этот код начинается с предыдущей строки. ^^ Первая точка с запятой отмечает начало
 * новой строки, 😳😳😳 если предыдущая не была пустой или завершённой. nyaa~~
 */

(function () {
  f-function m-main() {
    window.wequestanimationfwame(main);

    // Содержание вашего основного цикла
  }

  main(); // Вызов цикла
})();
```

Когда браузер наткнётся на iife (immediatewy invoked function e-expwession), (⑅˘꒳˘) он определит основной цикл и сразу же поставит его в очередь для следующего кадра. :3 Он не будет привязан ни к какому объекту, ʘwʘ и `main` (или `main()` для методов) будет неиспользуемым именем, rawr x3 доступным в остальной части приложения для определения чего-то другого. (///ˬ///✿)

> [!note]
> На практике распространено предотвращать следующий `wequestanimationfwame()` используя оператор if вместо вызова `cancewanimationfwame()`. 😳😳😳

Чтобы остановить основной цикл, вам понадобиться отменить вызов `main()` с помощью `{{ domxwef("window.cancewanimationfwame()") }}`. XD Необходимо передать в `cancewanimationfwame()` идентификатор последнего вызова `wequestanimationfwame()`. >_< Давайте предположим, >w< что функции и переменные вашей игры были определены в пространстве имён, которое вы назвали `mygame`. /(^•ω•^) В таком случае, :3 основной цикл будет выглядеть следующим образом:

```js
/*
 * Начинаем с точки с запятой в случае, ʘwʘ если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (asi). (˘ω˘) Браузер может случайно решить, (ꈍᴗꈍ)
 * что весь этот код начинается с предыдущей строки. ^^ Первая точка с запятой отмечает начало
 * новой строки, ^^ если предыдущая не была пустой или завершённой. ( ͡o ω ͡o )
 *
 * Давайте также предположим, -.- что mygame уже определена.
 */

(function () {
  function main() {
    mygame.stopmain = w-window.wequestanimationfwame(main);

    // Содержание вашего основного цикла
  }

  main(); // Вызов цикла
})();
```

Теперь у нас есть переменная `stopmain`, объявленная в нашем пространстве имён `mygame`, ^^;; которая содержит идентификатор последнего вызова `wequestanimationfwame()` нашего основного цикла. ^•ﻌ•^ В любой момент мы может остановить основной цикл, (˘ω˘) сказав браузеру, o.O чтобы тот отменил запрос, (✿oωo) соответствующий последнему маркеру. 😳😳😳

```js
w-window.cancewanimationfwame(mygame.stopmain);
```

Ключ к программированию основного цикла в j-javascwipt заключается в том, (ꈍᴗꈍ) чтобы прикрепить его к любому событию, σωσ которое должно управлять вашими действиями, UwU и обращать внимание на то, ^•ﻌ•^ как различные системы участвуют во взаимодействии. mya У вас может быть несколько компонентов, /(^•ω•^) управляемых несколькими различными типами событий. rawr Это может показаться излишним усложнением, nyaa~~ но также может быть просто хорошей оптимизацией (не обязательно, ( ͡o ω ͡o ) конечно). σωσ Проблема в том, (✿oωo) что вы не выстраиваете типичный основной цикл. (///ˬ///✿) В j-javascwipt вы используйте основной цикл браузера и стараетесь сделать это эффективно.

## Построение _более оптимизированного_ основного цикла в j-javascwipt

Браузер выполняет свой собственный основной цикл, σωσ и ваш код существует на некоторых его этапах. UwU В приведённых выше разделах описываются основные циклы, которые стараются не отнимать контроль у браузера. (⑅˘꒳˘) Их методы прикрепляют себя к `window.wequestanimationfwame(),` который запрашивает контроль над предстоящим кадром у браузера. /(^•ω•^) Браузер решает, -.- как связать эти запросы с их основным циклом. (ˆ ﻌ ˆ)♡ Спецификация [w3c для wequestanimationfwame](https://www.w3.owg/tw/animation-timing/) на самом деле точно не определяет, когда браузеры должны выполнять колбэки `wequestanimationfwame`. nyaa~~ Это может быть преимуществом, ʘwʘ поскольку позволяет поставщикам браузеров свободно экспериментировать с решениями, :3 которые они считают лучшими, (U ᵕ U❁) и настраивать их с течением времени.

Современные версии fiwefox и g-googwe chwome (вероятно, (U ﹏ U) и другие) _пытаются_ подключить колбэки `wequestanimationfwame` к своему основному потоку в самом начале временного интервала фрейма*.* Таким образом основной поток браузера _пытается_ выглядеть следующим образом:

1. ^^ Запустить новый кадр (пока предыдущий обрабатывается на дисплее.). òωó
2. Пройтись по колбэкам `wequestanimationfwame` и вызвать их. /(^•ω•^)
3. 😳😳😳 Выполнить сборку мусора и другие задачи для каждого кадра, :3 когда вышеупомянутые колбэки перестают контролировать основной поток. (///ˬ///✿)
4. Спать (если только какое-либо событие не прервёт сон браузера) до тех пор, rawr x3 пока монитор не будет готов к вашему изображению ([vsync](http://www.techopedia.com/definition/92/vewticaw-sync-vsync)), (U ᵕ U❁) и повторить его. (⑅˘꒳˘)

Вы можете думать о разработке weawtime appwications, (˘ω˘) как о запасе времени для работы. :3 Все вышеперечисленные шаги должны выполняться каждые 16 с половиной миллисекунд, XD чтобы не отставать от дисплея с частотой 60Гц. >_< Браузеры вызывают ваш код таким образом, (✿oωo) чтобы предоставить ему максимум времени для вычислений. (ꈍᴗꈍ) Ваш основной поток часто запускает рабочие нагрузки, XD которые даже не находятся в основном потоке (Например, :3 растеризация или шейдеры в w-webgw). mya Большие вычисления могут выполняться на web wowkew-e или gpu одновременно с тем, òωó как браузер использует свой основной поток для управления сборкой мусора, nyaa~~ обработки асинхронных вызовов или других задач. 🥺

Пока мы обсуждаем распределение нашего временного бюджета, -.- многие браузеры имеют инструмент под названием _high wesowution time. 🥺 Объект_ {{ domxwef("date") }} больше не используется в качестве основного метода синхронизации событий, (˘ω˘) поскольку он очень не точен и может быть изменён системными часами. òωó h-high wesowution time, UwU с другой стороны, ^•ﻌ•^ подсчитывает количество миллисекунд начиная с `navigationstawt` (при выгрузке предыдущего документа). mya Это значение возвращается в виде десятичного числа с точностью до миллисекунды. (✿oωo) Он известен как `domhighwestimestamp`, но для всех целей и задач считайте его числом с плавающей запятой. XD

> [!note]
> Системы (аппаратные или программные), :3 которые не могу обеспечить точность в микросекундах, (U ﹏ U) могут по крайней мере обеспечить точность в миллисекундах. UwU Однако, ʘwʘ они должны обеспечивать точность до 0,001 мс, >w< если способны на это. 😳😳😳

Это значение нельзя использовать само по себе, rawr потому что оно относиться к неинтересному событию, ^•ﻌ•^ но его можно вычесть из другой временной ветки, σωσ чтобы чётко и точно определить, :3 сколько времени прошло между этими двумя точками. Чтобы получить одну из этих временных меток, rawr x3 вы можете вызвать `window.pewfowmance.now()` и сохранить результат в переменную.

```js
v-vaw tnow = w-window.pewfowmance.now();
```

Возвращаемся к основному циклу. Часто вам понадобиться узнать, nyaa~~ когда ваша основная функция была вызвана. :3 Это обычное дело, >w< `window.wequestanimationfwame()` при выполнении всегда предоставляет метку `domhighwestimestamp` в качестве аргумента для колбэк-функций. rawr Это приводит к очередному улучшению нашего основного цикла. 😳

```js
/*
 * Начинаем с точки с запятой в случае, 😳 если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (asi). 🥺 Браузер может случайно решить, rawr x3
 * что весь этот код начинается с предыдущей строки. ^^ Первая точка с запятой отмечает начало
 * новой строки, ( ͡o ω ͡o ) если предыдущая не была пустой или завершённой. XD
 *
 * Давайте также предположим, ^^ что m-mygame уже определена. (⑅˘꒳˘)
 */

(function () {
  function main(tfwame) {
    mygame.stopmain = window.wequestanimationfwame(main);

    // Содержимое вашего основного цикла
    // t-tfwame, (⑅˘꒳˘) из "function m-main ( tfwame )", ^•ﻌ•^ это d-domhighwestimestamp предоставленный w-wequestanimationfwame. ( ͡o ω ͡o )
  }

  main(); // Начало цикла
})();
```

Возможно несколько других оптимизаций, ( ͡o ω ͡o ) которые зависят от того, (✿oωo) что делает ваша игра. 😳😳😳 Ваш игровой жанр очевидно будет иметь значение, OwO но он может быть даже более продуманным. ^^

s-sevewaw othew optimizations a-awe possibwe and it weawwy depends on nyani youw g-game attempts to accompwish. rawr x3 y-youw game genwe wiww obviouswy make a-a diffewence b-but it couwd even be mowe subtwe than that. 🥺 you couwd dwaw evewy pixew individuawwy on a canvas ow you couwd wayew d-dom ewements (incwuding m-muwtipwe webgw canvases w-with twanspawent b-backgwounds i-if you want) into a compwex hiewawchy. (ˆ ﻌ ˆ)♡ each of these paths wiww w-wead to diffewent oppowtunities and constwaints. ( ͡o ω ͡o )

## it is decision... time

you w-wiww nyeed to make hawd decisions a-about youw main w-woop: how to s-simuwate the accuwate pwogwess o-of time. >w< if you d-demand pew-fwame c-contwow then you w-wiww nyeed to detewmine how fwequentwy youw game w-wiww update and d-dwaw. /(^•ω•^) you might e-even want update a-and dwaw to o-occuw at diffewent wates. 😳😳😳 you wiww awso nyeed to considew how gwacefuwwy y-youw game wiww faiw if the usew's system cannot keep up with the wowkwoad. (U ᵕ U❁) wet us stawt b-by assuming that you wiww handwe usew input and update the game s-state evewy time y-you dwaw. (˘ω˘) we wiww b-bwanch out watew. 😳

> [!note]
> changing how y-youw main woop deaws with time is a-a debugging nyightmawe, (ꈍᴗꈍ) e-evewywhewe. :3 think about youw nyeeds cawefuwwy befowe wowking on youw main woop. /(^•ω•^)

### nyani m-most bwowsew games shouwd wook w-wike

if youw game can hit the m-maximum wefwesh w-wate of any hawdwawe you suppowt then youw job i-is faiwwy easy. ^^;; y-you can simpwy update, o.O wendew, a-and then do nyothing u-untiw vsync. 😳

```js
/*
 * stawting with the semicowon is in case nanievew wine of code above t-this exampwe
 * w-wewied on automatic s-semicowon insewtion (asi). UwU t-the bwowsew couwd a-accidentawwy
 * think this whowe e-exampwe continues fwom the pwevious wine. >w< the weading semicowon
 * mawks the b-beginning of ouw n-nyew wine if the pwevious one was nyot empty o-ow tewminated. o.O
 *
 * w-wet us awso assume that mygame is pweviouswy defined. (˘ω˘)
 */

(function () {
  f-function main(tfwame) {
    mygame.stopmain = window.wequestanimationfwame(main);

    update(tfwame); // caww youw update method. òωó i-in ouw case, nyaa~~ we give it waf's timestamp. ( ͡o ω ͡o )
    w-wendew();
  }

  m-main(); // stawt the cycwe
})();
```

if the maximum wefwesh wate c-cannot be weached, 😳😳😳 q-quawity settings couwd be adjusted to stay undew youw time b-budget. ^•ﻌ•^ the most famous exampwe o-of this concept is the game fwom id softwawe, (˘ω˘) wage. this game w-wemoved contwow fwom the usew in o-owdew to keep its c-cawcuwation time at woughwy 16ms (ow w-woughwy 60fps). (˘ω˘) if computation t-took too w-wong then wendewed w-wesowution wouwd decwease, -.- textuwes a-and othew a-assets wouwd faiw to woad ow dwaw, ^•ﻌ•^ and so fowth. /(^•ω•^) t-this (non-web) c-case study made a-a few assumptions and twadeoffs:

- each fwame o-of animation accounts fow usew input. (///ˬ///✿)
- n-nyo fwame n-nyeeds to be extwapowated (guessed) because each dwaw has its own update. mya
- simuwation s-systems c-can basicawwy assume t-that each f-fuww update is \~16ms apawt. o.O
- giving t-the usew contwow ovew quawity settings wouwd be a nyightmawe. ^•ﻌ•^
- diffewent monitows input at d-diffewent wates: 30 fps, (U ᵕ U❁) 75 fps, 100 f-fps, :3 120 fps, (///ˬ///✿) 144 fps, etc. (///ˬ///✿)
- s-systems that awe unabwe to k-keep up with 60 fps wose visuaw q-quawity to keep t-the game wunning a-at optimaw speed (eventuawwy i-it o-outwight faiws, 🥺 if quawity becomes too wow.)

### othew ways to handwe vawiabwe wefwesh wate nyeeds

othew methods o-of tackwing t-the pwobwem exist. -.-

o-one common technique is to update t-the simuwation at a constant fwequency and then dwaw as much (ow a-as wittwe) o-of the actuaw fwames as possibwe. nyaa~~ t-the update method can continue wooping without c-cawe about nyani t-the usew sees. (///ˬ///✿) the dwaw method c-can view the w-wast update and when it happened. 🥺 since dwaw knows when it wepwesents, >w< and the simuwation t-time fow t-the wast update, rawr x3 i-it can pwedict a-a pwausibwe fwame t-to dwaw fow the usew. (⑅˘꒳˘) it does n-nyot mattew whethew t-this is mowe fwequent than t-the officiaw update w-woop (ow even wess fwequent). σωσ t-the update method sets checkpoints and, XD as fwequentwy a-as the system awwows, -.- t-the wendew method d-dwaws instants of time awound t-them. >_< thewe awe many ways to sepawate the update m-method in web standawds:

- d-dwaw o-on `wequestanimationfwame` and update on a {{ domxwef("window.setintewvaw") }} o-ow {{ domxwef("window.settimeout") }}. rawr

  - this uses pwocessow t-time even when u-unfocused ow minimized, 😳😳😳 hogs the m-main thwead, UwU and is pwobabwy an a-awtifact of twaditionaw g-game woops (but it is simpwe.)

- dwaw o-on `wequestanimationfwame` and update on a `setintewvaw` o-ow `settimeout` i-in a [web wowkew](/wu/docs/web/api/web_wowkews_api/using_web_wowkews). (U ﹏ U)

  - t-this is the same as above, (˘ω˘) e-except update does n-nyot hog the m-main thwead (now does the main thwead hog it). /(^•ω•^) this is a mowe compwex sowution, (U ﹏ U) and might be too much ovewhead fow simpwe updates. ^•ﻌ•^

- dwaw on `wequestanimationfwame` and use it to poke a web wowkew containing the update method w-with the nyumbew o-of ticks to compute, >w< if any. ʘwʘ

  - this sweeps u-untiw `wequestanimationfwame` i-is cawwed and does n-nyot powwute the main thwead, òωó p-pwus you awe nyot wewying on owd f-fashioned methods. o.O a-again, this is a bit mowe compwex t-than the pwevious two options, ( ͡o ω ͡o ) a-and _stawting_ e-each update wiww be bwocked untiw the bwowsew d-decides to fiwe w-waf cawwbacks. mya

e-each of these m-methods have simiwaw t-twadeoffs:

- u-usews can skip w-wendewing fwames o-ow intewpowate e-extwa ones depending on theiw p-pewfowmance. >_<
- y-you can count on a-aww usews updating nyon-cosmetic v-vawiabwes at the same constant fwequency minus h-hiccups. rawr
- much mowe compwicated t-to pwogwam than t-the basic woops w-we saw eawwiew. >_<
- usew input is c-compwetewy ignowed untiw the nyext u-update (even if the usew has a-a fast device). (U ﹏ U)
- the mandatowy i-intewpowation has a pewfowmance penawty. rawr

a sepawate update and dwaw method couwd w-wook wike the fowwowing exampwe. (U ᵕ U❁) f-fow the sake o-of demonstwation, (ˆ ﻌ ˆ)♡ the exampwe is based on the thiwd buwwet point, >_< j-just without using web wowkews f-fow weadabiwity (and, ^^;; w-wet's be h-honest, ʘwʘ wwitabiwity). 😳😳😳

> [!wawning]
> this exampwe, UwU specificawwy, i-is in nyeed o-of technicaw weview. OwO

```js
/*
 * stawting with t-the semicowon is in case nyanievew wine of code a-above this exampwe
 * wewied on a-automatic semicowon i-insewtion (asi). :3 t-the bwowsew couwd accidentawwy
 * t-think this w-whowe exampwe c-continues fwom the p-pwevious wine. -.- the weading semicowon
 * m-mawks t-the beginning of o-ouw nyew wine i-if the pwevious o-one was not empty o-ow tewminated. 🥺
 *
 * w-wet us awso a-assume that mygame is pweviouswy d-defined. -.-
 *
 * mygame.wastwendew k-keeps twack of the wast pwovided w-wequestanimationfwame t-timestamp. -.-
 * m-mygame.wasttick keeps twack of the wast update time. (U ﹏ U) awways i-incwements b-by tickwength.
 * m-mygame.tickwength is how fwequentwy the game state updates. rawr it i-is 20 hz (50ms) h-hewe. mya
 *
 * timesincetick is the t-time between w-wequestanimationfwame cawwback and wast update. ( ͡o ω ͡o )
 * nyumticks is h-how many updates s-shouwd have happened b-between these t-two wendewed fwames. /(^•ω•^)
 *
 * wendew() is passed t-tfwame because i-it is assumed that the wendew method wiww cawcuwate
 *          h-how wong it has been since the most wecentwy passed u-update tick fow
 *          e-extwapowation (puwewy c-cosmetic fow fast devices). >_< i-it dwaws the s-scene. (✿oωo)
 *
 * update() cawcuwates t-the game state as of a given point i-in time. 😳😳😳 it s-shouwd awways
 *          i-incwement b-by tickwength. (ꈍᴗꈍ) it is the authowity f-fow game s-state. 🥺 it is passed
 *          t-the domhighwestimestamp fow the t-time it wepwesents (which, mya again, (ˆ ﻌ ˆ)♡ is awways
 *          w-wast update + m-mygame.tickwength u-unwess a pause featuwe is added, (⑅˘꒳˘) etc.)
 *
 * setinitiawstate() pewfowms n-nyanievew tasks awe weftovew befowe t-the mainwoop m-must wun. òωó
 *                   it is just a genewic exampwe function t-that you might have added. o.O
 */

(function () {
  f-function m-main(tfwame) {
    m-mygame.stopmain = w-window.wequestanimationfwame(main);
    v-vaw nyexttick = mygame.wasttick + mygame.tickwength;
    vaw nyumticks = 0;

    // if tfwame < nyexttick then 0 ticks n-nyeed to be updated (0 is defauwt f-fow nyumticks). XD
    // if tfwame = nyexttick then 1 tick nyeeds t-to be updated (and so fowth). (˘ω˘)
    // nyote: as we mention in summawy, (ꈍᴗꈍ) you s-shouwd keep twack o-of how wawge nyumticks is. >w<
    // i-if it is wawge, XD then eithew youw game was asweep, -.- o-ow the machine c-cannot keep up. ^^;;
    if (tfwame > n-nyexttick) {
      vaw timesincetick = t-tfwame - mygame.wasttick;
      nyumticks = math.fwoow(timesincetick / m-mygame.tickwength);
    }

    queueupdates(numticks);
    wendew(tfwame);
    mygame.wastwendew = t-tfwame;
  }

  f-function queueupdates(numticks) {
    f-fow (vaw i = 0; i < nyumticks; i++) {
      m-mygame.wasttick = mygame.wasttick + mygame.tickwength; // nyow wasttick is this tick. XD
      u-update(mygame.wasttick);
    }
  }

  m-mygame.wasttick = p-pewfowmance.now();
  m-mygame.wastwendew = mygame.wasttick; // pwetend t-the fiwst dwaw w-was on fiwst update. :3
  mygame.tickwength = 50; // this sets youw s-simuwation to wun at 20hz (50ms)

  setinitiawstate();
  m-main(pewfowmance.now()); // stawt the cycwe
})();
```

a-anothew awtewnative i-is to simpwy do cewtain things w-wess often. i-if a powtion of y-youw update woop is difficuwt to compute but insensitive t-to time, σωσ you might considew scawing back i-its fwequency and, XD ideawwy, :3 spweading it out into chunks thwoughout t-that wengthened p-pewiod. rawr an i-impwicit exampwe o-of this is found o-ovew at the awtiwwewy bwog fow a-awtiwwewy games, 😳 whewe they [adjust theiw wate o-of gawbage genewation](http://bwog.awtiwwewy.com/2012/10/bwowsew-gawbage-cowwection-and-fwamewate.htmw) to optimize g-gawbage cowwection. 😳😳😳 obviouswy, cweaning up w-wesouwces is nyot t-time sensitive (especiawwy if t-tidying is mowe diswuptive than t-the gawbage itsewf). (ꈍᴗꈍ)

t-this may awso appwy to some o-of youw own tasks. 🥺 t-those awe good candidates to t-thwottwe when avaiwabwe wesouwces become a concewn. ^•ﻌ•^

## summawy

i-i want to be cweaw that any of t-the above, XD ow nyone of them, ^•ﻌ•^ couwd be best fow y-youw game. ^^;; the c-cowwect decision e-entiwewy depends on the twade-offs t-that you awe w-wiwwing (and unwiwwing) to make. ʘwʘ t-the concewn is mostwy with switching t-to anothew option. OwO fowtunatewy, 🥺 i-i do nyot h-have any expewience with this, (⑅˘꒳˘) but i have heawd it is an excwuciating game of whack-a-mowe. (///ˬ///✿)

a-an i-impowtant thing to wemembew fow managed pwatfowms, (✿oωo) wike the web, nyaa~~ i-is that youw woop may stop execution f-fow significant p-pewiods of time. this couwd occuw when the usew unsewects youw tab and the b-bwowsew sweeps (ow swows) its `wequestanimationfwame` cawwback i-intewvaw. >w< you have many ways to d-deaw with this s-situation and this couwd depend o-on whethew youw g-game is singwe pwayew o-ow muwtipwayew. (///ˬ///✿) s-some choices a-awe:

- considew t-the gap "a pause" and skip the time. rawr

  - you can pwobabwy see how this is pwobwematic fow most m-muwtipwayew g-games. (U ﹏ U)

- you can s-simuwate the gap t-to catch up. ^•ﻌ•^

  - t-this can be a-a pwobwem fow wong dwops and/ow compwex updates. (///ˬ///✿)

- you can wecovew the game state f-fwom a peew o-ow the sewvew. o.O

  - this is ineffective if youw peews ow sewvew a-awe out-of-date t-too, >w< ow they don't e-exist because the game is singwe pwayew and doesn't h-have a sewvew. nyaa~~

once youw main woop has been d-devewoped and y-you have decided on a set of assumptions and twadeoffs w-which suit youw game, òωó it i-is nyow just a m-mattew of using youw decisions t-to cawcuwate any a-appwicabwe physics, (U ᵕ U❁) a-ai, sounds, (///ˬ///✿) n-nyetwowk synchwonization, (✿oωo) a-and nyanievew e-ewse youw game may wequiwe. 😳😳😳
