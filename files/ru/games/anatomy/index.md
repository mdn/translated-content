---
title: Анатомия видеоигры
slug: Games/Anatomy
---

{{GamesSidebar}}

Эта статья рассматривает анатомию и рабочий процесс создания средней видеоигры с технической точки зрения и определений того, как должен выглядеть главный цикл приложения. Она служит для помощи начинающим разработчикам в разработке современных игр, а также для понимания того, что необходимо знать при построении игры и как применять различные web-стандарты и инструменты, такие как JavaScript. Опытные разработчики игр, которые только пришли в мир web-разработки тоже могут почерпнуть для себя много интересного.

## Показать, получить, преобразовать, вычислить, повторить

Целью каждой видеоигры является **показ** пользователю (пользователям) игровой ситуации, **получение** пользовательских сигналов, **преобразования** их в действия и **вычисления** новой ситуации как результат этих действий. Игры постоянно повторяют эти стадии, снова и снова, до тех пор пока не наступит завершающее условие (такое как победа, поражение, или выход из игры с целью поспать). Не удивительно, что данный шаблон соответствует тому как программируется игровая логика (движок).

Особенности игр.

Некоторые игры управляют своим циклом при помощи пользовательского ввода. Представьте, что вы разрабатываете игру типа _"найди разницу между этими двумя похожими картинками"_. Такого рода игры **показывают** пользователю две картинки; они **получают** их клики (или касания); они **преобразуют** ввод в успешный , не успешный, пауза, работа с меню, и так далее; в конечном итоге, в зависимости от данных действий, они **вычисляют** обновлённое состояние сцены. Игровой цикл продвигается пользовательскими действиями и "спит" пока таковые отсутствуют. Это пример так называемой пошаговой игры, которая не зависит от постоянного обновления каждого кадра, а только от действий пользователя.

Другие игры требуют контроля над каждым из минимально возможных индивидуальных временных интервалов. Те же принципы, что и выше, применяются с небольшим изменением: каждый кадр анимации продолжает цикл, и любое изменение пользовательского ввода фиксируется на первом доступном ходе. Эта покадровая модель реализована в так называемом **основном цикле**. Если ваша игра зацикливается на времени, то это будет её полномочия, которые будут соблюдать ваши симуляции.

Но покадровое управление может и не понадобиться. Ваш игровой цикл может быть похож на пример _поиска отличий_ и основан на входных событиях. Это может потребовать как ввода, так и симуляции времени. Он может даже зацикливаться на чем-то совершенно другом.

Современный JavaScript, как описано в следующих разделах, к счастью, позволяет легко разработать эффективный основной цикл выполнения один раз в кадр. Конечно, ваша игра будет оптимизирована настолько, насколько вы её сделаете. Если что-то выглядит так, как будто оно должно быть прикреплено к более редкому исходу, то часто бывает хорошей идеей вырвать его из основного цикла (но не всегда).

## Построение основного цикла в JavaScript

Лучше всего JavaScript работает с событиями и callback функциями. Современные браузеры стремятся вызывать методы по мере необходимости и бездействовать (или выполнять другие задачи) в промежутках. Привязать код к моменту, который для него подходит — это отличная идея. Подумайте о том, действительно ли ваша функция должна вызываться на строго определённом интервале времени, в каждом кадре или только после того, как произойдёт что-то ещё. Подумайте о том, действительно ли функцию нужно вызывать в определённом интервале времени, на каждый кадр или только после того, как что-то произойдёт. Больше конкретики с браузером в том, когда функция должна быть вызвана, позволяет ему лучше оптимизировать этот процесс. Так же, вероятно, это облегчит вам работу.

Некоторый код должен выполняться кадр за кадром, так зачем же прикреплять эту функцию к чему-то другому, кроме графика перерисовки браузера? В Web, `{{ domxref("window.requestAnimationFrame()") }}` будет основой большинства хорошо запрограммированных покадровых основных циклов. Callback функция должна быть передана ему при вызове. Callback функция будет выполнена в подходящее время перед следующей перерисовкой. Вот пример простого основного цикла:

```js
window.main = function () {
  window.requestAnimationFrame(main);

  // Код, который цикл должен выполнить
};

main(); // Start the cycle
```

> **Примечание:** В каждом из методов `main()`, обсуждаемых здесь, мы планируем новый requestAnimationFrame перед выполнением нашего содержимого цикла. Это не случайно и считает лучшей практикой. Ранний вызов следующего `requestAnimationFrame` гарантирует, что браузер получит его вовремя, чтобы спланировать соответствующим образом, даже если ваш текущий кадр пропустит своё окно VSync.

Приведённый выше фрагмент кода содержит два оператора. Первый оператор создаёт функцию как глобальную переменную с именем `main()`.Эта функция выполняет некоторую работу, а также сообщает браузеру, что нужно вызвать следующий кадр с помощью `window.requestAnimationFrame()`. Второй оператор вызывает функцию `main()`, описанную в первом операторе. Поскольку `main()` вызывается один раз во втором операторе и каждый его вызов помещает себя в очерёдность действий, чтобы отрисовать следующий кадр, `main()` синхронизируется с вашей частотой кадров.

Конечно, этот цикл не идеален. Прежде чем мы обсудим способы его изменения, давайте обсудим, что он уже делает хорошо.

Синхронизация основного цикла с тем, когда браузер рисует на дисплее, позволяет запускать цикл так часто, как браузер хочет рисовать. Вам предоставляется контроль над каждым кадром анимации. Это также очень просто, потому что `main()` - единственная функция, которая зацикливается. Шутер от первого лица (или подобная игра) представляет новую сцену один раз в каждом кадре. Вы не можете добиться большей плавности и быстродействия.

Но не стоит сразу предполагать, что анимация требует покадрового управления. Простые анимации можно легко выполнять даже с ускорением на GPU с помощью CSS-анимации и других инструментов, включённых в браузер. Их очень много и они сделают вашу жизнь проще.

## Создание улучшенного основного цикла в JavaScript

У нашего цикла есть две очевидные проблемы: `main()` загрязняет `{{ domxref("window") }}` объект (в нем хранятся все глобальные переменные) и код не оставляет нам возможность остановить цикл, если только вся вкладка не будет закрыта или обновлена. Для решения первой проблемы, если нужно, чтобы основной цикл просто выполнялся и вам не нужен лёгкий (прямой) доступ к нему, вы можете поместить его внутрь самовызывающейся Function Expression (IIFE).

```js
/*
 * Начинаем с точки с запятой в случае, если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (ASI). Браузер может случайно решить,
 * что весь этот код начинается с предыдущей строки. Первая точка с запятой отмечает начало
 * новой строки, если предыдущая не была пустой или завершённой.
 */

(function () {
  function main() {
    window.requestAnimationFrame(main);

    // Содержание вашего основного цикла
  }

  main(); // Вызов цикла
})();
```

Когда браузер наткнётся на IIFE (Immediately Invoked Function Expression), он определит основной цикл и сразу же поставит его в очередь для следующего кадра. Он не будет привязан ни к какому объекту, и `main` (или `main()` для методов) будет неиспользуемым именем, доступным в остальной части приложения для определения чего-то другого.

> **Примечание:** На практике распространено предотвращать следующий `requestAnimationFrame()` используя оператор if вместо вызова `cancelAnimationFrame()`.

Чтобы остановить основной цикл, вам понадобиться отменить вызов `main()` с помощью `{{ domxref("window.cancelAnimationFrame()") }}`. Необходимо передать в `cancelAnimationFrame()` идентификатор последнего вызова `requestAnimationFrame()`. Давайте предположим, что функции и переменные вашей игры были определены в пространстве имён, которое вы назвали `MyGame`. В таком случае, основной цикл будет выглядеть следующим образом:

```js
/*
 * Начинаем с точки с запятой в случае, если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (ASI). Браузер может случайно решить,
 * что весь этот код начинается с предыдущей строки. Первая точка с запятой отмечает начало
 * новой строки, если предыдущая не была пустой или завершённой.
 *
 * Давайте также предположим, что MyGame уже определена.
 */

(function () {
  function main() {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Содержание вашего основного цикла
  }

  main(); // Вызов цикла
})();
```

Теперь у нас есть переменная `stopMain`, объявленная в нашем пространстве имён `MyGame`, которая содержит идентификатор последнего вызова `requestAnimationFrame()` нашего основного цикла. В любой момент мы может остановить основной цикл, сказав браузеру, чтобы тот отменил запрос, соответствующий последнему маркеру.

```js
window.cancelAnimationFrame(MyGame.stopMain);
```

Ключ к программированию основного цикла в JavaScript заключается в том, чтобы прикрепить его к любому событию, которое должно управлять вашими действиями, и обращать внимание на то, как различные системы участвуют во взаимодействии. У вас может быть несколько компонентов, управляемых несколькими различными типами событий. Это может показаться излишним усложнением, но также может быть просто хорошей оптимизацией (не обязательно, конечно). Проблема в том, что вы не выстраиваете типичный основной цикл. В JavaScript вы используйте основной цикл браузера и стараетесь сделать это эффективно.

## Построение _более оптимизированного_ основного цикла в JavaScript

В конце контов, в JavaScript браузер выполняет свой собственный основной цикл, и ваш код существует на некоторых его этапах. В приведённых выше разделах описываются основные циклы, которые стараются не отнимать контроль у браузера. Их методы прикрепляют себя к `window.requestAnimationFrame(),` который запрашивает контроль над предстоящим кадром у браузера. Браузер решает, как связать эти запросы с их основным циклом. Спецификация [W3C для requestAnimationFrame](http://www.w3.org/TR/animation-timing/) на самом деле точно не определяет, когда браузеры должны выполнять колбэки `requestAnimationFrame`. Это может быть преимуществом, поскольку позволяет поставщикам браузеров свободно экспериментировать с решениями, которые они считают лучшими, и настраивать их с течением времени.

Современные версии Firefox и Google Chrome (вероятно, и другие) _пытаются_ подключить колбэки `requestAnimationFrame` к своему основному потоку в самом начале временного интервала фрейма*.* Таким образом основной поток браузера _пытается_ выглядеть следующим образом:

1. Запустить новый кадр (пока предыдущий обрабатывается на дисплее.).
2. Пройтись по колбэкам `requestAnimationFrame` и вызвать их.
3. Выполнить сборку мусора и другие задачи для каждого кадра, когда вышеупомянутые колбэки перестают контролировать основной поток.
4. Спать (если только какое-либо событие не прервёт сон браузера) до тех пор, пока монитор не будет готов к вашему изображению ([VSync](http://www.techopedia.com/definition/92/vertical-sync-vsync)), и повторить его.

Вы можете думать о разработке realtime applications, как о запасе времени для работы. Все вышеперечисленные шаги должны выполняться каждые 16 с половиной миллисекунд, чтобы не отставать от дисплея с частотой 60Гц. Браузеры вызывают ваш код таким образом, чтобы предоставить ему максимум времени для вычислений. Ваш основной поток часто запускает рабочие нагрузки, которые даже не находятся в основном потоке (Например, растеризация или шейдеры в WebGL). Большие вычисления могут выполняться на Web Worker-e или GPU одновременно с тем, как браузер использует свой основной поток для управления сборкой мусора, обработки асинхронных вызовов или других задач.

Пока мы обсуждаем распределение нашего временного бюджета, многие браузеры имеют инструмент под названием _High Resolution Time. Объект_ {{ domxref("Date") }} больше не используется в качестве основного метода синхронизации событий, поскольку он очень не точен и может быть изменён системными часами. High Resolution Time, с другой стороны, подсчитывает количество миллисекунд начиная с `navigationStart` (при выгрузке предыдущего документа). Это значение возвращается в виде десятичного числа с точностью до миллисекунды. Он известен как `DOMHighResTimeStamp`, но для всех целей и задач считайте его числом с плавающей запятой.

> **Примечание:** Системы (аппаратные или программные), которые не могу обеспечить точность в микросекундах, могут по крайней мере обеспечить точность в миллисекундах. Однако, они должны обеспечивать точность до 0,001 мс, если способны на это.

Это значение нельзя использовать само по себе, потому что оно относиться к неинтересному событию, но его можно вычесть из другой временной ветки, чтобы чётко и точно определить, сколько времени прошло между этими двумя точками. Чтобы получить одну из этих временных меток, вы можете вызвать `window.performance.now()` и сохранить результат в переменную.

```js
var tNow = window.performance.now();
```

Возвращаемся к основному циклу. Часто вам понадобиться узнать, когда ваша основная функция была вызвана. Это обычное дело, `window.requestAnimationFrame()` при выполнении всегда предоставляет метку `DOMHighResTimeStamp` в качестве аргумента для колбэк-функций. Это приводит к очередному улучшению нашего основного цикла.

```js
/*
 * Начинаем с точки с запятой в случае, если какая-либо строка кода выше данного примера
 * полагается на автоматическую вставку точки с запятой (ASI). Браузер может случайно решить,
 * что весь этот код начинается с предыдущей строки. Первая точка с запятой отмечает начало
 * новой строки, если предыдущая не была пустой или завершённой.
 *
 * Давайте также предположим, что MyGame уже определена.
 */

(function () {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    // Содержимое вашего основного цикла
    // tFrame, из "function main ( tFrame )", это DOMHighResTimeStamp предоставленный requestAnimationFrame.
  }

  main(); // Начало цикла
})();
```

Возможно несколько других оптимизаций, которые зависят от того, что делает ваша игра. Ваш игровой жанр очевидно будет иметь значение, но он может быть даже более продуманным.

Several other optimizations are possible and it really depends on what your game attempts to accomplish. Your game genre will obviously make a difference but it could even be more subtle than that. You could draw every pixel individually on a canvas or you could layer DOM elements (including multiple WebGL canvases with transparent backgrounds if you want) into a complex hierarchy. Each of these paths will lead to different opportunities and constraints.

## It is decision... time

You will need to make hard decisions about your main loop: how to simulate the accurate progress of time. If you demand per-frame control then you will need to determine how frequently your game will update and draw. You might even want update and draw to occur at different rates. You will also need to consider how gracefully your game will fail if the user's system cannot keep up with the workload. Let us start by assuming that you will handle user input and update the game state every time you draw. We will branch out later.

> **Примечание:** Changing how your main loop deals with time is a debugging nightmare, everywhere. Think about your needs carefully before working on your main loop.

### What most browser games should look like

If your game can hit the maximum refresh rate of any hardware you support then your job is fairly easy. You can simply update, render, and then do nothing until VSync.

```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 */

(function () {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);

    update(tFrame); // Call your update method. In our case, we give it rAF's timestamp.
    render();
  }

  main(); // Start the cycle
})();
```

If the maximum refresh rate cannot be reached, quality settings could be adjusted to stay under your time budget. The most famous example of this concept is the game from id Software, RAGE. This game removed control from the user in order to keep its calculation time at roughly 16ms (or roughly 60fps). If computation took too long then rendered resolution would decrease, textures and other assets would fail to load or draw, and so forth. This (non-web) case study made a few assumptions and tradeoffs:

- Each frame of animation accounts for user input.
- No frame needs to be extrapolated (guessed) because each draw has its own update.
- Simulation systems can basically assume that each full update is \~16ms apart.
- Giving the user control over quality settings would be a nightmare.
- Different monitors input at different rates: 30 FPS, 75 FPS, 100 FPS, 120 FPS, 144 FPS, etc.
- Systems that are unable to keep up with 60 FPS lose visual quality to keep the game running at optimal speed (eventually it outright fails, if quality becomes too low.)

### Other ways to handle variable refresh rate needs

Other methods of tackling the problem exist.

One common technique is to update the simulation at a constant frequency and then draw as much (or as little) of the actual frames as possible. The update method can continue looping without care about what the user sees. The draw method can view the last update and when it happened. Since draw knows when it represents, and the simulation time for the last update, it can predict a plausible frame to draw for the user. It does not matter whether this is more frequent than the official update loop (or even less frequent). The update method sets checkpoints and, as frequently as the system allows, the render method draws instants of time around them. There are many ways to separate the update method in web standards:

- Draw on `requestAnimationFrame` and update on a {{ domxref("window.setInterval") }} or {{ domxref("window.setTimeout") }}.

  - This uses processor time even when unfocused or minimized, hogs the main thread, and is probably an artifact of traditional game loops (but it is simple.)

- Draw on `requestAnimationFrame` and update on a `setInterval` or `setTimeout` in a [Web Worker](/ru/docs/Web/Guide/Performance/Using_web_workers).

  - This is the same as above, except update does not hog the main thread (nor does the main thread hog it). This is a more complex solution, and might be too much overhead for simple updates.

- Draw on `requestAnimationFrame` and use it to poke a Web Worker containing the update method with the number of ticks to compute, if any.

  - This sleeps until `requestAnimationFrame` is called and does not pollute the main thread, plus you are not relying on old fashioned methods. Again, this is a bit more complex than the previous two options, and _starting_ each update will be blocked until the browser decides to fire rAF callbacks.

Each of these methods have similar tradeoffs:

- Users can skip rendering frames or interpolate extra ones depending on their performance.
- You can count on all users updating non-cosmetic variables at the same constant frequency minus hiccups.
- Much more complicated to program than the basic loops we saw earlier.
- User input is completely ignored until the next update (even if the user has a fast device).
- The mandatory interpolation has a performance penalty.

A separate update and draw method could look like the following example. For the sake of demonstration, the example is based on the third bullet point, just without using Web Workers for readability (and, let's be honest, writability).

> **Предупреждение:** This example, specifically, is in need of technical review.

```js
/*
 * Starting with the semicolon is in case whatever line of code above this example
 * relied on automatic semicolon insertion (ASI). The browser could accidentally
 * think this whole example continues from the previous line. The leading semicolon
 * marks the beginning of our new line if the previous one was not empty or terminated.
 *
 * Let us also assume that MyGame is previously defined.
 *
 * MyGame.lastRender keeps track of the last provided requestAnimationFrame timestamp.
 * MyGame.lastTick keeps track of the last update time. Always increments by tickLength.
 * MyGame.tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
 *
 * timeSinceTick is the time between requestAnimationFrame callback and last update.
 * numTicks is how many updates should have happened between these two rendered frames.
 *
 * render() is passed tFrame because it is assumed that the render method will calculate
 *          how long it has been since the most recently passed update tick for
 *          extrapolation (purely cosmetic for fast devices). It draws the scene.
 *
 * update() calculates the game state as of a given point in time. It should always
 *          increment by tickLength. It is the authority for game state. It is passed
 *          the DOMHighResTimeStamp for the time it represents (which, again, is always
 *          last update + MyGame.tickLength unless a pause feature is added, etc.)
 *
 * setInitialState() Performs whatever tasks are leftover before the mainloop must run.
 *                   It is just a generic example function that you might have added.
 */

(function () {
  function main(tFrame) {
    MyGame.stopMain = window.requestAnimationFrame(main);
    var nextTick = MyGame.lastTick + MyGame.tickLength;
    var numTicks = 0;

    // If tFrame < nextTick then 0 ticks need to be updated (0 is default for numTicks).
    // If tFrame = nextTick then 1 tick needs to be updated (and so forth).
    // Note: As we mention in summary, you should keep track of how large numTicks is.
    // If it is large, then either your game was asleep, or the machine cannot keep up.
    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - MyGame.lastTick;
      numTicks = Math.floor(timeSinceTick / MyGame.tickLength);
    }

    queueUpdates(numTicks);
    render(tFrame);
    MyGame.lastRender = tFrame;
  }

  function queueUpdates(numTicks) {
    for (var i = 0; i < numTicks; i++) {
      MyGame.lastTick = MyGame.lastTick + MyGame.tickLength; // Now lastTick is this tick.
      update(MyGame.lastTick);
    }
  }

  MyGame.lastTick = performance.now();
  MyGame.lastRender = MyGame.lastTick; // Pretend the first draw was on first update.
  MyGame.tickLength = 50; // This sets your simulation to run at 20Hz (50ms)

  setInitialState();
  main(performance.now()); // Start the cycle
})();
```

Another alternative is to simply do certain things less often. If a portion of your update loop is difficult to compute but insensitive to time, you might consider scaling back its frequency and, ideally, spreading it out into chunks throughout that lengthened period. An implicit example of this is found over at The Artillery Blog for Artillery Games, where they [adjust their rate of garbage generation](http://blog.artillery.com/2012/10/browser-garbage-collection-and-framerate.html) to optimize garbage collection. Obviously, cleaning up resources is not time sensitive (especially if tidying is more disruptive than the garbage itself).

This may also apply to some of your own tasks. Those are good candidates to throttle when available resources become a concern.

## Summary

I want to be clear that any of the above, or none of them, could be best for your game. The correct decision entirely depends on the trade-offs that you are willing (and unwilling) to make. The concern is mostly with switching to another option. Fortunately, I do not have any experience with this, but I have heard it is an excruciating game of Whack-a-Mole.

An important thing to remember for managed platforms, like the web, is that your loop may stop execution for significant periods of time. This could occur when the user unselects your tab and the browser sleeps (or slows) its `requestAnimationFrame` callback interval. You have many ways to deal with this situation and this could depend on whether your game is single player or multiplayer. Some choices are:

- Consider the gap "a pause" and skip the time.

  - You can probably see how this is problematic for most multiplayer games.

- You can simulate the gap to catch up.

  - This can be a problem for long drops and/or complex updates.

- You can recover the game state from a peer or the server.

  - This is ineffective if your peers or server are out-of-date too, or they don't exist because the game is single player and doesn't have a server.

Once your main loop has been developed and you have decided on a set of assumptions and tradeoffs which suit your game, it is now just a matter of using your decisions to calculate any applicable physics, AI, sounds, network synchronization, and whatever else your game may require.
