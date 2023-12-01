---
title: Using the Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

Web Animations API позволяет нам создать анимацию и управлять её воспроизведением с помощью JavaScript. Эта статья будет правильным руководством для старта c весёлыми демками и уроками с Алисой в Стране Чудес.

## Встречайте Web Animations API

В [Web Animations API](/ru/docs/Web/API/Web_Animations_API) открывает анимацию на движке браузеров для разработчиков и манипуляции через (с помощью) JavaScript.
Этот API был разработан в основе реализации [CSS Animations](/ru/docs/Web/CSS/CSS_Animations) и [CSS Transitions](/ru/docs/Web/CSS/CSS_Transitions), и оставлял свободу движений для будущих анимационных эффектов. Это один из самых эффективных способов анимации, поддерживаемой в Интернете, позволяя браузеру сделать свою собственную внутреннюю оптимизацию без хаков, принуждения, или {{domxref("Window.requestAnimationFrame()")}}.

С Web Animations API, мы можем управлять интерактивной анимацией со стилями JavaScript, отделяя представление от действия. Нам больше не нужно полагаться на DOM-heavy методики написания CSS-свойств и обзорных классов для элементов контроля воспроизведения направления. И в отличии от чисто декларативного CSS, JavaScript также позволяет устанавливать динамические значения свойств и их продолжительность. Для создания пользовательских библиотек и интерактивной анимации Web Animations API может стать прекрасным инструментом в работе. Давайте посмотрим, что он может сделать!

## Поддержка Браузеров

Основы и компоненты Web Animations API, описанные в этой статье доступны в Firefox 48+ и Chrome 36+. Webkit и Edge перешли на API соответственно, но пока нет полной поддержки во всех браузерах, есть удобная служба проверки [handy maintained polyfill](https://github.com/web-animations/web-animations-js) которая тестирует и добавляет её при необходимости.

## Написание CSS Animations вместе с Web Animations API

Самый простой способ в обучении Web Animations API это начать с чего начинало большинство веб-разработчиков: CSS Animations. В CSS Animations есть знакомый синтаксис, который хорошо раскрывает структуры демонстрационных примеров.

### CSS версия

Вот такая анимация написана в CSS, показывающая, как Алиса падает в кроличью нору, которая ведёт в страну чудес (см. полный код на [Codepen](http://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](http://codepen.io/rachelnabors/pen/rxpmJL)

Заметьте, что фон двигается, Алиса крутится и её цвет меняется при вращении. Мы собираемся сосредоточиться только на Алисе в этом уроке. Вот упрощённый код CSS, который управляет движением Алисы.

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

Изменение цвета Алисы и её вращение в течение 3 секунд при постоянной (линейной) скорости и бесконечном цикле. В [@keyframes](/ru/docs/Web/CSS/@keyframes) блоке мы видим, что 30% из всего цикла (около 9 секунд), цвет Алисы меняется от чёрного до насыщенного бордового, а потом снова в чёрный к концу цикла.

### Движение в JavaScript

Теперь давайте попробуем создать такую же анимацию с Web Animations API.

#### Представляя кадры

В первую очередь мы должны создать [Keyframe Object](/ru/docs/Web/API/Web_Animations_API/Keyframe_Formats) соответствующего нашему CSS [@keyframes](/ru/docs/Web/CSS/@keyframes) блоку:

```js
var aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.333 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

Здесь мы используем массив, содержащий несколько объектов. Каждый объект представляет собой код от оригинального CSS. Однако, в отличие от CSS, Web Animations API не нужно назначать точные проценты по анимации для каждого открывающего кода. Он автоматически разделит анимацию на равные части в соответствии с количеством кодов, которые вы ему даёте. Это означает, что объект Keyframe с тремя кодами будет воспроизводить средний код 50% времени через каждый цикл анимации если не указано иное.

Если мы хотим, чтобы определённый набор кода смещался относительного другого кода, мы можем указать смещение непосредственно на объекте который будет меняться, отделив значение запятой. В приведённом выше примере видно, чтобы цвет Алисы менялся на 30%, а не на 50% всего цикла, мы задаём смещение: 0,333.

Там должно быть как минимум два кадра (представляющих начало и конец анимации). Если в вашем списке keyframe только одна запись, {{domxref("Element.animate()")}} то анимация выполняться не будет, вы получите ошибку NotSupportedError exception.

И так повторим, код равномерно распределён по умолчанию, если не указано смещение. Удобно, не так ли?

#### Представление свойства времени

Мы также должны создать объекту временные свойства (an {{domxref("AnimationEffectTimingProperties")}} object) соответствующие значению анимации Алисы:

```js
var aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Вы увидите здесь несколько отличий того, как соответствующие значения представлены в CSS:

- Во-первых, длительность в миллисекундах, в отличии от секунд - 3000, а не 3с. Как {{domxref("WindowTimers.setTimeout()")}} и {{domxref("Window.requestAnimationFrame()")}}, Web Animations API использует только миллисекунды.
- Во-вторых, что вы заметили, что он итерационный (повторяется), а не счётчик повторений.

> **Примечание:** Существует ряд небольших различий между терминологией, используемой в анимации CSS и терминологии, которая используется в веб-анимации. Например, веб-анимации не используется строка "бесконечное", а вместо этого использует JavaScript-код бесконечность. И вместо временной-функции мы используем ослабление. Мы не будем перечислять здесь значение ослабления, потому что, в отличие от CSS-анимации, где по умолчанию [animation-timing-function](/ru/docs/Web/CSS/animation-timing-function) это просто, в веб-анимации API для ослабления по умолчанию используется линейная зависимость - которые мы используем здесь

#### Собираем части вместе

Сейчас соберём все части вместе используя {{domxref("Element.animate()")}} метод:

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

И вуаля, анимация работает(смотрите готовый вариант на [version on Codepen](http://codepen.io/rachelnabors/pen/rxpmJL)).

The `animate()` метод может быть применён на любой DOM-элемент, который может быть анимирован с помощью CSS. И он может быть записан несколькими способами. Вместо того, чтобы делить объекты на ключевые кадры и временные характеристики, мы могли бы просто передать свои значения непосредственно вот так:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.333 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

Более того, если мы хотели указать только длительность анимации, а не её повторение (по умолчанию анимации повторяется один раз), мы могли бы пройтись только по миллисекундам:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.333 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

## Управление воспроизведением с помощью play(), pause(), reverse() and playbackRate

Хотя мы можем писать CSS-анимацию с Web Animations API, где API действительно хорошо подходит в качестве воздействия для воспроизведения анимации. Web Animations API обеспечивает несколько удобных методов для контроля воспроизведения анимации. Давайте посмотрим на паузу и воспроизведение анимации в росте/уменьшении Алисы в игре (проверить полный код можно на сайте [full code on Codepen](http://codepen.io/rachelnabors/pen/PNYGZQ)):

[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

В этой игре Алиса меняется в росте, она то растёт, то уменьшается, а контролируем мы этот процесс с помощью бутылки и кекса. Каждый из них имеют свою анимацию.

### Пауза и проигрывание анимации

Мы поговорим об анимации Алисы позже, а сейчас посмотрим поближе на анимации кекса:

```js
var nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );
```

Метод {{domxref("Element.animate()")}} будет выполняться сразу же как начнётся игра. Чтобы предотвратить автоматическое поедание кекса до того, как пользователь на него нажмёт, мы вызываем {{domxref("Animation.pause()")}} сразу же как игра открывается, например так:

```js
nommingCake.pause();
```

Теперь мы можем запустить метод {{domxref("Animation.play()")}} когда будем готовы:

```js
nommingCake.play();
```

Нам необходимо связать его с анимацией Алисы, чтобы она росла всякий раз, когда съедала кекс. Мы можем сделать это с помощью функции:

```js
var growAlice = function () {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

Когда пользователь поместит указатель мыши вниз или нажимает пальцем на торт на сенсорном экране, мы можем вызвать growAlice, чтобы выполнить все анимации:

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### Другие полезные методы

Помимо паузы и воспроизведения, мы можем использовать следующие методы анимации:

- {{domxref("Animation.finish()")}} перейти в конец анимации.
- {{domxref("Animation.cancel()")}} прервать анимацию и удалить её эффект.
- {{domxref("Animation.reverse()")}} устанавливать скорость анимации если установить ({{domxref("Animation.playbackRate")}} отрицательное значение, то анимация пойдёт в обратном порядке.

Давайте посмотрим на первый playbackRate— отрицательное значение будет запускать анимацию в обратном направлении. Когда Алиса пьёт из бутылки, она становится меньше. Это происходит потому, что бутылка изменяет её анимацию playbackRate от 1 до -1:

```js
var shrinkAlice = function () {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

В [Through the Looking-Glass](https://en.wikipedia.org/wiki/Through_the_Looking-Glass), Алиса путешествует по миру, где должна бежать, чтобы оставаться на месте и бежать в двое быстрее, чтобы двигаться вперёд. Например в гонке с Красной королевой, Алиса и Красная королева бегут, чтобы оставаться на месте (проверить полный код можно на [full code on Codepen](http://codepen.io/rachelnabors/pen/PNGGaV)):

[![Alice and the Red Queen race to get to the next square in this game.](red-queen-race_optimized.gif)](http://codepen.io/rachelnabors/pen/PNGGaV)

Так как маленькие дети легко устают, в отличии от шахматных фигур, Алиса постоянно замедляется. Мы отобразили это в коде путём ослабления (уменьшения скорости) playbackRate анимации.

```js
setInterval(function () {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Но постоянно нажимая на них мышью, мы заставляем их ускориться путём умножения playbackRate (скорости анимации)

```js
var goFaster = function () {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Фон также ускоряется при щелчках мыши или касаниях. Что же происходит, когда вы заставляете Алису и Красную королеву бежать в два раза быстрее? Что происходит, когда они тормозят?

## Получение информации из анимации

Представьте, что мы могли бы использовать playbackRate, как улучшения доступности сайта для пользователей с вестибулярными расстройствами, позволяя им замедлить анимацию на всех страницах сайта. Это невозможно сделать с помощью CSS без пересчёта длительности в каждом правиле CSS, но с веб-анимации API, мы могли бы использовать в будущем (пока не поддерживается в браузерах!) Метод {{domxref("document.getAnimations()")}} систему циклов по каждой анимации на странице и сократить скорость анимации вот так:

```js
document.getAnimations().forEach(function (animation) {
  animation.playbackRate *= 0.5;
});
```

С Web Animations API нужно изменить только одно свойство.

Другое дело, что это трудно делать только с CSS Animations, создавать зависимости от значения предусмотренные для других анимации. В примере игры про рост и уменьшение Алисы, вы можете заметить некоторые странности у кекса:

```js
duration: aliceChange.effect.timing.duration / 2;
```

Чтобы понять, что здесь происходит, давайте посмотрим на анимацию Алисы:

```js
var aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

Изменение размера Алисы в два раза происходит за 8 секунд. Затем мы останавливаем её:

```js
aliceChange.pause();
```

Если бы оставили её на паузе в начале анимации , то Алиса увеличилась бы в два раза, когда выпила бы всю бутылку. Мы хотим остановить её анимацию "воспроизведение" в середине, когда она уже на половину выполнена. Мы могли бы это сделать, установив {{domxref("Animation.currentTime")}} 4 секунды, вот так:

```js
aliceChange.currentTime = 4000;
```

Но во время работы над этой анимацией мы можем сильно увеличить её продолжительность. Разве не лучше установить динамическое изменение времени (currentTime), тогда нам не придётся делать два обновления за один раз. Мы можем это сделать с помощью ссылки на изменение свойства размера Алисы (aliceChange) {{domxref("Animation.effect")}} который возвращает все детали и действующие эффекты, содержащиеся в объекте, на Алису:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

эффекты позволяют нам получить доступ к анимации keyframe (кадров) и синхронности объектов - aliceChange.effect.timing , указывающий на время Алисиных элементов (которые имеют тип {{domxref("AnimationEffectTimingReadOnly")}}) — в этом содержится её {{domxref("AnimationEffectTimingReadOnly.duration")}}. Мы можем распределить её длительность на два раза, чтобы получить среднюю точку во временной шкале для установки нормального роста.

Теперь мы можем запустить её в обратном порядке и играться анимацией в любом направлении, чтобы заставить её расти или уменьшаться

```js
var drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.timing.duration / 2,
  });
drinking.pause();
```

И мы можем сделать тоже самое при установки длительности анимации на кексе или бутылке.

Теперь все три анимации связаны только с одной продолжительности, и мы можем легко переходить из одного места.

Мы также можем использовать веб-анимации API, чтобы выяснить Текущее время анимации. Игра заканчивается, когда вы бежите от съеденного торта или выпитой бутылки. Изображение у игрока будет зависеть от анимации Алисы. Стала ли она слишком большой на фоне крошечной двери и не может в неё пройти или слишком маленькой и не может достать ключ, чтобы открыть дверь. Мы можем выяснить, стала она большой или маленький в конце её анимация, получая текущее время её анимации [`currentTime`](/ru/docs/Web/API/Animation/currentTime) и разделив её на activeDuration:

```js
var endGame = function() {

  // get Alice's timeline's playhead location
  var alicePlayhead = aliceChange.currentTime;
  var aliceTimeline = aliceChange.effect.activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  var aliceHeight = alicePlayhead/aliceTimeline;

  if (aliceHeight <= .333){
    // Alice got smaller!
    ...

  } else if (aliceHeight >= .666) {
    // Alice got bigger!
    ...

  } else {
    // Alice didn't change significantly
    ...

  }
}
```

> **Примечание:** `getAnimations()` и эффект не полностью поддерживаются на момент написания этой статьи, но polyfill поддерживает их уже сегодня.

## Колбэки и промисы

CSS Animations и Transitions (переходы) имеют свои события и они также могут быть воспроизведены и в Web Animations API:

- [`onfinish`](/ru/docs/Web/API/Animation/onfinish) это обработчик события завершения анимации, он может быть запущен вручную с помощью метода [`finish()`](/ru/docs/Web/API/Animation/finish).
- [`oncancel`](/ru/docs/Web/API/Animation/oncancel) это обработчик события отмены анимации, он может быть запущен вручную с помощью метода [`cancel()`](/ru/docs/Web/API/Animation/cancel).

Здесь мы устанавливаем колбэк для бутылки, кекса и Алисы, чтобы запустить функцию endGame.

```js
// When the cake or runs out...
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// ...or Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Нравится перспектива? Web Animations API также даёт две перспективы: [`onfinish`](/ru/docs/Web/API/Animation/onfinish) и [`oncancel`](/ru/docs/Web/API/Animation/oncancel).

> **Примечание:** Эти промисы не полностью поддерживаются в настоящий момент.

## Заключение

Таковы основные особенности веб-анимации API, большинство из которых уже поддерживается в последних версиях Firefox и Chrome. К этому моменту вы должны быть готовы к "прыжку в кроличью нору" анимации в браузере и готовы написать свои собственные эксперименты в анимации! Если вы используете API и хотите поделиться, попробуйте использовать хештег #WAAPI. Мы будем следить и писать другие учебники, чтобы охватить будущие дополнительные функции, в виде поддержки распространяя!

## Посмотрите также

- [Полный набор Алиса в Стране Чудес демки](http://codepen.io/collection/bpEza/) на сайт codepen для вас, чтобы играть, развиваться и делиться
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) — отличная статья, чтобы прочитать, где объясняется больше на фоне веб-анимации API, и поэтому он является более эффективным, чем другие методы веб-анимации
- [web-animations-js](https://github.com/web-animations/web-animations-js) — the Web Animations API polyfill
