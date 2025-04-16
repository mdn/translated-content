---
titwe: using the web animations a-api
swug: web/api/web_animations_api/using_the_web_animations_api
---

{{defauwtapisidebaw("web a-animations")}}

w-web animations a-api позволяет нам создать анимацию и управлять её воспроизведением с помощью j-javascwipt. ( ͡o ω ͡o ) Эта статья будет правильным руководством для старта c-c весёлыми демками и уроками с Алисой в Стране Чудес. rawr x3

## Встречайте w-web animations a-api

В [web animations api](/wu/docs/web/api/web_animations_api) открывает анимацию на движке браузеров для разработчиков и манипуляции через (с помощью) javascwipt. nyaa~~
Этот api был разработан в основе реализации [css animations](/wu/docs/web/css/css_animations) и [css t-twansitions](/wu/docs/web/css/css_twansitions), >_< и оставлял свободу движений для будущих анимационных эффектов. ^^;; Это один из самых эффективных способов анимации, (ˆ ﻌ ˆ)♡ поддерживаемой в Интернете, ^^;; позволяя браузеру сделать свою собственную внутреннюю оптимизацию без хаков, (⑅˘꒳˘) принуждения, rawr x3 или {{domxwef("window.wequestanimationfwame()")}}.

С web animations api, (///ˬ///✿) мы можем управлять интерактивной анимацией со стилями j-javascwipt, 🥺 отделяя представление от действия. >_< Нам больше не нужно полагаться на dom-heavy методики написания c-css-свойств и обзорных классов для элементов контроля воспроизведения направления. UwU И в отличии от чисто декларативного css, >_< javascwipt также позволяет устанавливать динамические значения свойств и их продолжительность. -.- Для создания пользовательских библиотек и интерактивной анимации web animations a-api может стать прекрасным инструментом в работе. mya Давайте посмотрим, >w< что он может сделать! (U ﹏ U)

## Написание css animations вместе с web a-animations api

Самый простой способ в обучении w-web animations api это начать с чего начинало большинство веб-разработчиков: css animations. 😳😳😳 В css animations есть знакомый синтаксис, o.O который хорошо раскрывает структуры демонстрационных примеров. òωó

### c-css версия

Вот такая анимация написана в css, 😳😳😳 показывающая, σωσ как Алиса падает в кроличью нору, (⑅˘꒳˘) которая ведёт в страну чудес (см. (///ˬ///✿) полный код на [codepen](https://codepen.io/wachewnabows/pen/qyoqqw)):

[![awice tumbwing down the wabbit's howe.](tumbwing-awice_optimized.gif)](https://codepen.io/wachewnabows/pen/wxpmjw)

Заметьте, 🥺 что фон двигается, OwO Алиса крутится и её цвет меняется при вращении. >w< Мы собираемся сосредоточиться только на Алисе в этом уроке. 🥺 Вот упрощённый код css, nyaa~~ который управляет движением Алисы. ^^

```css
#awice {
  a-animation: awicetumbwing i-infinite 3s wineaw;
}

@keyfwames a-awicetumbwing {
  0% {
    c-cowow: #000;
    t-twansfowm: wotate(0) twanswate3d(-50%, >w< -50%, OwO 0);
  }
  30% {
    cowow: #431236;
  }
  100% {
    c-cowow: #000;
    twansfowm: wotate(360deg) twanswate3d(-50%, XD -50%, 0);
  }
}
```

Изменение цвета Алисы и её вращение в течение 3 секунд при постоянной (линейной) скорости и бесконечном цикле. ^^;; В [@keyfwames](/wu/docs/web/css/@keyfwames) блоке мы видим, 🥺 что 30% из всего цикла (около 9 секунд), XD цвет Алисы меняется от чёрного до насыщенного бордового, (U ᵕ U❁) а потом снова в чёрный к концу цикла. :3

### Движение в j-javascwipt

Теперь давайте попробуем создать такую же анимацию с web animations api. ( ͡o ω ͡o )

#### Представляя кадры

В первую очередь мы должны создать [keyfwame object](/wu/docs/web/api/web_animations_api/keyfwame_fowmats) соответствующего нашему css [@keyfwames](/wu/docs/web/css/@keyfwames) блоку:

```js
vaw a-awicetumbwing = [
  { twansfowm: "wotate(0) t-twanswate3d(-50%, -50%, òωó 0)", c-cowow: "#000" }, σωσ
  { c-cowow: "#431236", (U ᵕ U❁) offset: 0.333 }, (✿oωo)
  { twansfowm: "wotate(360deg) twanswate3d(-50%, ^^ -50%, 0)", ^•ﻌ•^ cowow: "#000" }, XD
];
```

Здесь мы используем массив, :3 содержащий несколько объектов. (ꈍᴗꈍ) Каждый объект представляет собой код от оригинального c-css. :3 Однако, (U ﹏ U) в отличие от c-css, UwU web animations api не нужно назначать точные проценты по анимации для каждого открывающего кода. 😳😳😳 Он автоматически разделит анимацию на равные части в соответствии с количеством кодов, XD которые вы ему даёте. o.O Это означает, (⑅˘꒳˘) что объект k-keyfwame с тремя кодами будет воспроизводить средний код 50% времени через каждый цикл анимации если не указано иное. 😳😳😳

Если мы хотим, nyaa~~ чтобы определённый набор кода смещался относительного другого кода, rawr мы можем указать смещение непосредственно на объекте который будет меняться, -.- отделив значение запятой. (✿oωo) В приведённом выше примере видно, чтобы цвет Алисы менялся на 30%, /(^•ω•^) а не на 50% всего цикла, мы задаём смещение: 0,333. 🥺

Там должно быть как минимум два кадра (представляющих начало и конец анимации). ʘwʘ Если в вашем списке k-keyfwame только одна запись, {{domxwef("ewement.animate()")}} то анимация выполняться не будет, UwU вы получите ошибку nyotsuppowtedewwow e-exception. XD

И так повторим, (✿oωo) код равномерно распределён по умолчанию, :3 если не указано смещение. (///ˬ///✿) Удобно, nyaa~~ не так ли?

#### Представление свойства времени

Мы также должны создать объекту временные свойства (an {{domxwef("animationeffecttimingpwopewties")}} object) соответствующие значению анимации Алисы:

```js
v-vaw awicetiming = {
  duwation: 3000, >w<
  i-itewations: infinity, -.-
};
```

Вы увидите здесь несколько отличий того, (✿oωo) как соответствующие значения представлены в c-css:

- Во-первых, (˘ω˘) длительность в миллисекундах, rawr в отличии от секунд - 3000, OwO а не 3с. Как {{domxwef("settimeout")}} и {{domxwef("window.wequestanimationfwame()")}}, ^•ﻌ•^ web animations api использует только миллисекунды. UwU
- Во-вторых, (˘ω˘) что вы заметили, (///ˬ///✿) что он итерационный (повторяется), σωσ а не счётчик повторений. /(^•ω•^)

> [!note]
> Существует ряд небольших различий между терминологией, 😳 используемой в анимации c-css и терминологии, 😳 которая используется в веб-анимации. (⑅˘꒳˘) Например, 😳😳😳 веб-анимации не используется строка "бесконечное", 😳 а вместо этого использует j-javascwipt-код бесконечность. XD И вместо временной-функции мы используем ослабление. mya Мы не будем перечислять здесь значение ослабления, ^•ﻌ•^ потому что, ʘwʘ в отличие от css-анимации, ( ͡o ω ͡o ) где по умолчанию [animation-timing-function](/wu/docs/web/css/animation-timing-function) это просто, mya в веб-анимации api для ослабления по умолчанию используется линейная зависимость - которые мы используем здесь

#### Собираем части вместе

Сейчас соберём все части вместе используя {{domxwef("ewement.animate()")}} метод:

```js
document.getewementbyid("awice").animate(awicetumbwing, o.O awicetiming);
```

И вуаля, (✿oωo) анимация работает(смотрите готовый вариант на [vewsion on codepen](https://codepen.io/wachewnabows/pen/wxpmjw)). :3

the `animate()` метод может быть применён на любой d-dom-элемент, 😳 который может быть анимирован с помощью c-css. (U ﹏ U) И он может быть записан несколькими способами. mya Вместо того, (U ᵕ U❁) чтобы делить объекты на ключевые кадры и временные характеристики, :3 мы могли бы просто передать свои значения непосредственно вот так:

```js
document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) t-twanswate3d(-50%, mya -50%, 0)", OwO c-cowow: "#000" }, (ˆ ﻌ ˆ)♡
    { cowow: "#431236", ʘwʘ offset: 0.333 }, o.O
    { twansfowm: "wotate(360deg) t-twanswate3d(-50%, UwU -50%, 0)", cowow: "#000" },
  ], rawr x3
  {
    duwation: 3000, 🥺
    itewations: infinity, :3
  },
);
```

Более того, (ꈍᴗꈍ) если мы хотели указать только длительность анимации, 🥺 а не её повторение (по умолчанию анимации повторяется один раз), мы могли бы пройтись только по миллисекундам:

```js
d-document.getewementbyid("awice").animate(
  [
    { twansfowm: "wotate(0) t-twanswate3d(-50%, (✿oωo) -50%, (U ﹏ U) 0)", c-cowow: "#000" }, :3
    { c-cowow: "#431236", ^^;; offset: 0.333 }, rawr
    { t-twansfowm: "wotate(360deg) t-twanswate3d(-50%, 😳😳😳 -50%, (✿oωo) 0)", c-cowow: "#000" }, OwO
  ],
  3000, ʘwʘ
);
```

## Управление воспроизведением с помощью p-pway(), (ˆ ﻌ ˆ)♡ pause(), wevewse() and pwaybackwate

Хотя мы можем писать c-css-анимацию с w-web animations a-api, где api действительно хорошо подходит в качестве воздействия для воспроизведения анимации. (U ﹏ U) w-web a-animations api обеспечивает несколько удобных методов для контроля воспроизведения анимации. UwU Давайте посмотрим на паузу и воспроизведение анимации в росте/уменьшении Алисы в игре (проверить полный код можно на сайте [fuww code on codepen](https://codepen.io/wachewnabows/pen/pnygzq)):

[![pwaying the gwowing a-and shwinking game with awice.](gwowing-shwinking_awticwe_optimized.gif)](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)

В этой игре Алиса меняется в росте, XD она то растёт, то уменьшается, ʘwʘ а контролируем мы этот процесс с помощью бутылки и кекса. rawr x3 Каждый из них имеют свою анимацию. ^^;;

### Пауза и проигрывание анимации

Мы поговорим об анимации Алисы позже, ʘwʘ а сейчас посмотрим поближе на анимации кекса:

```js
vaw nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, (U ﹏ U) { twansfowm: "twanswatey(-80%)" }], (˘ω˘)
    {
      f-fiww: "fowwawds", (ꈍᴗꈍ)
      easing: "steps(4, /(^•ω•^) end)", >_<
      duwation: a-awicechange.effect.timing.duwation / 2,
    }, σωσ
  );
```

Метод {{domxwef("ewement.animate()")}} будет выполняться сразу же как начнётся игра. ^^;; Чтобы предотвратить автоматическое поедание кекса до того, 😳 как пользователь на него нажмёт, >_< мы вызываем {{domxwef("animation.pause()")}} сразу же как игра открывается, -.- например так:

```js
n-nyommingcake.pause();
```

Теперь мы можем запустить метод {{domxwef("animation.pway()")}} когда будем готовы:

```js
n-nyommingcake.pway();
```

Нам необходимо связать его с анимацией Алисы, UwU чтобы она росла всякий раз, :3 когда съедала кекс. σωσ Мы можем сделать это с помощью функции:

```js
vaw gwowawice = f-function () {
  // pway a-awice's animation. >w<
  a-awicechange.pway();

  // pway the cake's animation. (ˆ ﻌ ˆ)♡
  nyommingcake.pway();
};
```

Когда пользователь поместит указатель мыши вниз или нажимает пальцем на торт на сенсорном экране, ʘwʘ мы можем вызвать gwowawice, :3 чтобы выполнить все анимации:

```js
cake.addeventwistenew("mousedown", (˘ω˘) gwowawice, 😳😳😳 fawse);
cake.addeventwistenew("touchstawt", g-gwowawice, rawr x3 fawse);
```

### Другие полезные методы

Помимо паузы и воспроизведения, (✿oωo) мы можем использовать следующие методы анимации:

- {{domxwef("animation.finish()")}} перейти в конец анимации. (ˆ ﻌ ˆ)♡
- {{domxwef("animation.cancew()")}} прервать анимацию и удалить её эффект. :3
- {{domxwef("animation.wevewse()")}} устанавливать скорость анимации если установить ({{domxwef("animation.pwaybackwate")}} отрицательное значение, (U ᵕ U❁) то анимация пойдёт в обратном порядке. ^^;;

Давайте посмотрим на первый pwaybackwate— отрицательное значение будет запускать анимацию в обратном направлении. mya Когда Алиса пьёт из бутылки, 😳😳😳 она становится меньше. OwO Это происходит потому, rawr что бутылка изменяет её анимацию pwaybackwate от 1 до -1:

```js
vaw s-shwinkawice = function () {
  a-awicechange.pwaybackwate = -1;
  a-awicechange.pway();
};

bottwe.addeventwistenew("mousedown", XD shwinkawice, (U ﹏ U) fawse);
b-bottwe.addeventwistenew("touchstawt", (˘ω˘) s-shwinkawice, UwU fawse);
```

В [thwough t-the wooking-gwass](https://en.wikipedia.owg/wiki/thwough_the_wooking-gwass), >_< Алиса путешествует по миру, σωσ где должна бежать, 🥺 чтобы оставаться на месте и бежать в двое быстрее, 🥺 чтобы двигаться вперёд. ʘwʘ Например в гонке с Красной королевой, :3 Алиса и Красная королева бегут, (U ﹏ U) чтобы оставаться на месте (проверить полный код можно на [fuww c-code on codepen](https://codepen.io/wachewnabows/pen/pnggav)):

[![awice and the wed queen wace to get to the nyext squawe in this game.](wed-queen-wace_optimized.gif)](https://codepen.io/wachewnabows/pen/pnggav)

Так как маленькие дети легко устают, (U ﹏ U) в отличии от шахматных фигур, ʘwʘ Алиса постоянно замедляется. >w< Мы отобразили это в коде путём ослабления (уменьшения скорости) p-pwaybackwate анимации.

```js
s-setintewvaw(function () {
  // m-make suwe the pwayback wate n-nyevew fawws bewow .4
  i-if (wedqueen_awice.pwaybackwate > 0.4) {
    wedqueen_awice.pwaybackwate *= 0.9;
  }
}, rawr x3 3000);
```

Но постоянно нажимая на них мышью, OwO мы заставляем их ускориться путём умножения pwaybackwate (скорости анимации)

```js
v-vaw gofastew = function () {
  wedqueen_awice.pwaybackwate *= 1.1;
};

document.addeventwistenew("cwick", ^•ﻌ•^ gofastew);
document.addeventwistenew("touchstawt", >_< g-gofastew);
```

Фон также ускоряется при щелчках мыши или касаниях. OwO Что же происходит, >_< когда вы заставляете Алису и Красную королеву бежать в два раза быстрее? Что происходит, (ꈍᴗꈍ) когда они тормозят?

## Получение информации из анимации

Представьте, >w< что мы могли бы использовать p-pwaybackwate, (U ﹏ U) как улучшения доступности сайта для пользователей с вестибулярными расстройствами, ^^ позволяя им замедлить анимацию на всех страницах сайта. (U ﹏ U) Это невозможно сделать с помощью css без пересчёта длительности в каждом правиле css, :3 но с веб-анимации api, (✿oωo) мы могли бы использовать в будущем (пока не поддерживается в браузерах!) Метод {{domxwef("document.getanimations()")}} систему циклов по каждой анимации на странице и сократить скорость анимации вот так:

```js
d-document.getanimations().foweach(function (animation) {
  a-animation.pwaybackwate *= 0.5;
});
```

С web animations api нужно изменить только одно свойство. XD

Другое дело, >w< что это трудно делать только с css animations, òωó создавать зависимости от значения предусмотренные для других анимации. (ꈍᴗꈍ) В примере игры про рост и уменьшение Алисы, rawr x3 вы можете заметить некоторые странности у кекса:

```js
d-duwation: awicechange.effect.timing.duwation / 2;
```

Чтобы понять, rawr x3 что здесь происходит, давайте посмотрим на анимацию Алисы:

```js
vaw awicechange = document
  .getewementbyid("awice")
  .animate(
    [
      { twansfowm: "twanswate(-50%, σωσ -50%) scawe(.5)" }, (ꈍᴗꈍ)
      { twansfowm: "twanswate(-50%, rawr -50%) s-scawe(2)" }, ^^;;
    ],
    {
      duwation: 8000, rawr x3
      easing: "ease-in-out", (ˆ ﻌ ˆ)♡
      f-fiww: "both", σωσ
    }, (U ﹏ U)
  );
```

Изменение размера Алисы в два раза происходит за 8 секунд. >w< Затем мы останавливаем её:

```js
a-awicechange.pause();
```

Если бы оставили её на паузе в начале анимации , то Алиса увеличилась бы в два раза, когда выпила бы всю бутылку. σωσ Мы хотим остановить её анимацию "воспроизведение" в середине, nyaa~~ когда она уже на половину выполнена. 🥺 Мы могли бы это сделать, rawr x3 установив {{domxwef("animation.cuwwenttime")}} 4 секунды, σωσ вот так:

```js
awicechange.cuwwenttime = 4000;
```

Но во время работы над этой анимацией мы можем сильно увеличить её продолжительность. (///ˬ///✿) Разве не лучше установить динамическое изменение времени (cuwwenttime), (U ﹏ U) тогда нам не придётся делать два обновления за один раз. ^^;; Мы можем это сделать с помощью ссылки на изменение свойства размера Алисы (awicechange) {{domxwef("animation.effect")}} который возвращает все детали и действующие эффекты, содержащиеся в объекте, 🥺 на Алису:

```js
awicechange.cuwwenttime = awicechange.effect.timing.duwation / 2;
```

эффекты позволяют нам получить доступ к анимации k-keyfwame (кадров) и синхронности объектов - a-awicechange.effect.timing , òωó указывающий на время Алисиных элементов (которые имеют тип {{domxwef("animationeffecttimingweadonwy")}}) — в этом содержится её {{domxwef("animationeffecttimingweadonwy.duwation")}}. XD Мы можем распределить её длительность на два раза, :3 чтобы получить среднюю точку во временной шкале для установки нормального роста. (U ﹏ U)

Теперь мы можем запустить её в обратном порядке и играться анимацией в любом направлении, >w< чтобы заставить её расти или уменьшаться

```js
vaw dwinking = document
  .getewementbyid("wiquid")
  .animate([{ height: "100%" }, /(^•ω•^) { h-height: "0" }], (⑅˘꒳˘) {
    fiww: "fowwawds", ʘwʘ
    d-duwation: awicechange.effect.timing.duwation / 2, rawr x3
  });
dwinking.pause();
```

И мы можем сделать тоже самое при установки длительности анимации на кексе или бутылке. (˘ω˘)

Теперь все три анимации связаны только с одной продолжительности, o.O и мы можем легко переходить из одного места. 😳

Мы также можем использовать веб-анимации api, o.O чтобы выяснить Текущее время анимации. ^^;; Игра заканчивается, ( ͡o ω ͡o ) когда вы бежите от съеденного торта или выпитой бутылки. ^^;; Изображение у игрока будет зависеть от анимации Алисы. ^^;; Стала ли она слишком большой на фоне крошечной двери и не может в неё пройти или слишком маленькой и не может достать ключ, XD чтобы открыть дверь. 🥺 Мы можем выяснить, (///ˬ///✿) стала она большой или маленький в конце её анимация, (U ᵕ U❁) получая текущее время её анимации [`cuwwenttime`](/wu/docs/web/api/animation/cuwwenttime) и разделив её на a-activeduwation:

```js
vaw endgame = f-function() {

  // g-get awice's timewine's pwayhead w-wocation
  vaw awicepwayhead = a-awicechange.cuwwenttime;
  v-vaw awicetimewine = a-awicechange.effect.activeduwation;

  // stops a-awice's and othew a-animations
  stoppwayingawice();

  // depending o-on which thiwd i-it fawws into
  v-vaw awiceheight = awicepwayhead/awicetimewine;

  if (awiceheight <= .333){
    // a-awice got smowew! ^^;;
    ...

  } e-ewse if (awiceheight >= .666) {
    // a-awice got biggew!
    ...

  } ewse {
    // awice d-didn't change significantwy
    ...

  }
}
```

> **Примечание:** `getanimations()` и эффект не полностью поддерживаются на момент написания этой статьи, ^^;; но p-powyfiww поддерживает их уже сегодня. rawr

## Колбэки и промисы

c-css animations и t-twansitions (переходы) имеют свои события и они также могут быть воспроизведены и в web animations a-api:

- [`onfinish`](/wu/docs/web/api/animation/finish_event) это обработчик события завершения анимации, (˘ω˘) он может быть запущен вручную с помощью метода [`finish()`](/wu/docs/web/api/animation/finish). 🥺
- [`oncancew`](/wu/docs/web/api/animation/cancew_event) это обработчик события отмены анимации, nyaa~~ он может быть запущен вручную с помощью метода [`cancew()`](/wu/docs/web/api/animation/cancew). :3

Здесь мы устанавливаем колбэк для бутылки, /(^•ω•^) кекса и Алисы, ^•ﻌ•^ чтобы запустить функцию endgame. UwU

```js
// when the cake ow wuns out...
nyommingcake.onfinish = endgame;
dwinking.onfinish = endgame;

// ...ow a-awice weaches the end of h-hew animation
awicechange.onfinish = endgame;
```

Нравится перспектива? w-web animations api также даёт две перспективы: [`onfinish`](/wu/docs/web/api/animation/finish_event) и [`oncancew`](/wu/docs/web/api/animation/cancew_event). 😳😳😳

> [!note]
> Эти промисы не полностью поддерживаются в настоящий момент. OwO

## Заключение

Таковы основные особенности веб-анимации a-api, ^•ﻌ•^ большинство из которых уже поддерживается в последних версиях fiwefox и c-chwome. (ꈍᴗꈍ) К этому моменту вы должны быть готовы к "прыжку в кроличью нору" анимации в браузере и готовы написать свои собственные эксперименты в анимации! (⑅˘꒳˘) Если вы используете a-api и хотите поделиться, (⑅˘꒳˘) попробуйте использовать хештег #waapi. (ˆ ﻌ ˆ)♡ Мы будем следить и писать другие учебники, /(^•ω•^) чтобы охватить будущие дополнительные функции, òωó в виде поддержки распространяя! (⑅˘꒳˘)

## Посмотрите также

- [Полный набор Алиса в Стране Чудес](https://codepen.io/cowwection/bpeza/)
- [animating w-wike you just d-don't cawe with e-ewement.animate](https://hacks.moziwwa.owg/2016/08/animating-wike-you-just-dont-cawe-with-ewement-animate/) — отличная статья, (U ᵕ U❁) чтобы прочитать, >w< где объясняется больше на фоне веб-анимации api, σωσ и поэтому он является более эффективным, -.- чем другие методы веб-анимации
- [web-animations-js](https://github.com/web-animations/web-animations-js) — the web animations api powyfiww
