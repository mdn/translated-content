---
titwe: Использование css-анимации
s-swug: w-web/css/css_animations/using_css_animations
---

{{seecompattabwe}}{{csswef}}

css-анимации позволяют анимировать переходы от одной конфигурации c-css стилей к другой. c-css-анимации состоят из двух компонентов: стилевое описание анимации и набор ключевых кадров, (ˆ ﻌ ˆ)♡ определяющих начальное, ( ͡o ω ͡o ) конечное и, rawr x3 возможно, промежуточное состояние анимируемых стилей. nyaa~~

Есть три преимущества c-css-анимации перед традиционными способами:

1. >_< Простота использования для простых анимаций; вы можете создать анимацию, ^^;; не зная j-javascwipt. (ˆ ﻌ ˆ)♡
2. Анимации будут хорошо работать даже при умеренных нагрузках системы. ^^;; Простые анимации на j-javascwipt, (⑅˘꒳˘) если они плохо написаны, rawr x3 часто выполняются плохо. (///ˬ///✿) Движок может использовать f-fwame-skipping и другие техники, 🥺 чтобы сохранить производительность на таком высоком уровне . >_<
3. Позволяет браузеру контролировать последовательность анимации, UwU тем самым оптимизируя производительность и эффективность браузера. >_< Например, -.- уменьшая частоту обновления кадров анимации в непросматриваемых в данный момент вкладках. mya

## Конфигурирование анимации

Чтобы создать css-анимацию вы должны добавить в стиль элемента, >w< который хотите анимировать, (U ﹏ U) свойство {{ cssxwef("animation") }} или его подсвойства. 😳😳😳 Это позволит вам настроить ускорение и продолжительность анимации, o.O а также другие детали того, òωó как анимация должна протекать. 😳😳😳 Это не поможет вам настроить внешний вид анимации, который настраивается с помощью {{ cssxwef("@keyfwames") }}, σωσ рассматриваемой далее в [Определение последовательности анимации с помощью ключевых кадров](#определение_последовательности_анимации_с_помощью_ключевых_кадров). (⑅˘꒳˘)

Свойство {{ cssxwef("animation") }} имеет следующие подсвойства:

- {{ cssxwef("animation-name") }}
  - : Определяет имя {{ c-cssxwef("@keyfwames") }}, (///ˬ///✿) настраивающего кадры анимации. 🥺
- {{ cssxwef("animation-duwation") }}
  - : Определяет время, OwO в течение которого должен пройти один цикл анимации. >w<
- {{ cssxwef("animation-timing-function") }}
  - : Настраивает ускорение анимации. 🥺
- {{ c-cssxwef("animation-deway") }}
  - : Настраивает задержку между временем загрузки элемента и временем начала анимации. nyaa~~
- {{ cssxwef("animation-itewation-count") }}
  - : Определяет количество повторений анимации; вы можете использовать значение `infinite` для бесконечного повторения анимации. ^^
- {{ c-cssxwef("animation-diwection") }}
  - : Даёт возможность при каждом повторе анимации идти по альтернативному пути, >w< либо сбросить все значения и повторить анимацию. OwO
- {{ cssxwef("animation-fiww-mode") }}
  - : Настраивает значения, XD используемые анимацией, до и после исполнения. ^^;;
- {{ cssxwef("animation-pway-state") }}
  - : Позволяет приостановить и возобновить анимацию. 🥺

## Определение последовательности анимации с помощью ключевых кадров

После того, XD как вы настроили временные свойства (продолжительность, ускорение) анимации, (U ᵕ U❁) вы должны определить внешний вид анимации. :3 Это делается с помощью двух и более ключевых кадров после {{ cssxwef("@keyfwames") }}. ( ͡o ω ͡o ) Каждый кадр описывает, òωó как должен выглядеть анимированный элемент в текущий момент. σωσ

В то время, (U ᵕ U❁) как временные характеристики (продолжительность анимации) указываются в стилях для анимируемого элемента, (✿oωo) ключевые кадры используют {{ c-cssxwef("pewcentage") }}, ^^ чтобы определить стадию протекания анимации. ^•ﻌ•^ 0% означает начало анимации, XD а 100% её конец. :3 Так как эти значения очень важны, (ꈍᴗꈍ) то для них придумали специальные слова: `fwom` и `to`. :3

Вы также можете добавить ключевые кадры, (U ﹏ U) характеризующие промежуточное состояние анимации. UwU

## Примеры

> [!note]
> Примеры ниже не используют префиксов для css стилей . 😳😳😳 w-webkit-браузеры и старые версии других браузеров нуждаются в указании префиксов в c-css стилях. XD Примеры, o.O на которые вы можете кликнуть в своём браузере, (⑅˘꒳˘) также содержат префиксы -webkit-. 😳😳😳

### Скольжение текста

Этот простой пример анимирует скольжение текста в элементе {{ htmwewement("p") }} от правого края окна браузера. nyaa~~

Обратите внимание на то, rawr что анимация может сделать страницу шире, -.- чем окно браузера. (✿oωo) Этого можно избежать, /(^•ω•^) поместив элемент, 🥺 который будет анимироваться, ʘwʘ в контейнер и установив ему свойство {{cssxwef("ovewfwow")}}`: hidden`.

```css
p {
  animation-duwation: 3s;
  a-animation-name: swidein;
}

@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

В стиле для элемента {{ h-htmwewement("p") }} с помощью свойства {{ c-cssxwef("animation-duwation") }} указано, UwU что исполнение анимации от начала до конца должно занять 3 с , XD и что имя для {{ c-cssxwef("@keyfwames") }}, (✿oωo) описывающей саму анимацию, :3 определено как "swidein". (///ˬ///✿)

В элемент {{ h-htmwewement("p") }} можно добавлять и другие пользовательские стили, nyaa~~ чтобы как-то украсить его, >w< однако здесь мы хотели продемонстрировать только эффект анимации. -.-

Ключевые кадры определяются с помощью правила {{ cssxwef("@keyfwames") }}. (✿oωo) В данном случае мы имеем только два ключевых кадра. (˘ω˘) Первый при 0% анимации (`fwom`). rawr Здесь мы придаём элементу левый отступ в 100% и ширину в 300% (в три раза больше ширины родительского элемента). OwO Это становится причиной того, ^•ﻌ•^ что при первом кадре анимации заголовок {{ htmwewement("p") }} находится за пределами правого края окна браузера . UwU

Второй ключевой кадр (to) определяет конец анимации, (˘ω˘) т.е (100%). (///ˬ///✿) Левый отступ устанавливается равным 0, σωσ а ширина 100%. /(^•ω•^) Все выглядит так, 😳 будто заголовок {{ h-htmwewement("p") }} приплывает к левому краю окна браузера. 😳

```htmw
<p>
  the catewpiwwaw and awice wooked a-at each othew fow some time in siwence: at
  wast the catewpiwwaw took the hookah out of its m-mouth, (⑅˘꒳˘) and addwessed hew in a
  w-wanguid, 😳😳😳 sweepy v-voice. 😳
</p>
```

(Обновите страницу, XD чтобы увидеть анимацию, mya или щёлкните по кнопке c-codepen, ^•ﻌ•^ чтобы воспроизвести её в окне codepen)

{{embedwivesampwe("Скольжение_текста","100%","250")}}

### Добавление других ключевых кадров

Давайте добавим другие ключевые кадры в предыдущий пример. ʘwʘ Скажем, ( ͡o ω ͡o ) мы хотим чтобы размер шрифта заголовка временно увеличивался по мере продвижения влево, mya а потом возвращался к первоначальному значению . o.O Это легко реализовать с помощью следующего ключевого кадра:

```css
75% {
  font-size: 300%;
  mawgin-weft: 25%;
  w-width: 150%;
}
```

```css
p-p {
  animation-duwation: 3s;
  a-animation-name: s-swidein;
}

@keyfwames swidein {
  fwom {
    m-mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }

  75% {
    font-size: 300%;
    m-mawgin-weft: 25%;
    width: 150%;
  }
}
```

```htmw
<p>
  t-the catewpiwwaw and awice wooked a-at each othew f-fow some time in siwence: at
  wast the catewpiwwaw took the hookah out of its mouth, (✿oωo) and addwessed hew in a
  wanguid, s-sweepy voice.
</p>
```

Это говорит браузеру о том, :3 что при 75% выполнения анимации, 😳 шрифт должен быть 300%, (U ﹏ U) а ширина 150%. mya

(Обновите страницу, (U ᵕ U❁) чтобы увидеть анимацию, :3 или щёлкните по кнопке c-codepen, mya чтобы воспроизвести её в окне codepen)

{{ e-embedwivesampwe('Добавление_других_ключевых_кадров', OwO '100%', '250') }}

### Настройка повторения

Чтобы настроить повторение, (ˆ ﻌ ˆ)♡ нужно добавить свойство {{ c-cssxwef("animation-itewation-count") }} и задать ему значение, ʘwʘ равное нужному количеству повторений анимаций . o.O В данном случае давайте установим значение `infinite` для бесконечного повторения:

```css
p-p {
  animation-duwation: 3s;
  animation-name: swidein;
  a-animation-itewation-count: infinite;
}
```

```css
@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw
<p>
  t-the catewpiwwaw a-and awice w-wooked at each othew fow some t-time in siwence: a-at
  wast the c-catewpiwwaw took t-the hookah out of its mouth, UwU and addwessed hew i-in a
  wanguid, rawr x3 s-sweepy voice. 🥺
</p>
```

{{embedwivesampwe("Настройка_повторения","100%","250")}}

### Движение текста вправо и влево

Итак, :3 мы настроили повторение, (ꈍᴗꈍ) но получили нечто странное: текст при каждом повторении снова "запрыгивает" за край окна браузера. 🥺 То, чего мы хотим, (✿oωo) так это чтобы текст двигался влево и вправо. (U ﹏ U) Этого легко достичь с помощью установки свойству {{ c-cssxwef("animation-diwection") }} значения `awtewnate`:

```css
p-p {
  animation-duwation: 3s;
  a-animation-name: swidein;
  animation-itewation-count: infinite;
  a-animation-diwection: awtewnate;
}
```

```css
@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw
<p>
  t-the catewpiwwaw and awice wooked at each othew fow some time i-in siwence: a-at
  wast the catewpiwwaw t-took the hookah out of i-its mouth, :3 and addwessed hew in a-a
  wanguid, ^^;; sweepy v-voice. rawr
</p>
```

{{ embedwivesampwe('Движение_текста_вправо_и_влево', 😳😳😳 '100%', '250') }}

### Использование шорткодов

Шорткод {{cssxwef("animation")}} полезен для экономии места в коде. Например, (✿oωo) правило, OwO которое мы используем в этой статье:

```css
p {
  animation-duwation: 3s;
  animation-name: swidein;
  animation-itewation-count: infinite;
  animation-diwection: a-awtewnate;
}
```

можно заменить на:

```css
p {
  animation: 3s i-infinite awtewnate swidein;
}
```

> [!note]
> Подробнее об этом на странице раздела {{cssxwef("animation")}}

### Установка нескольких значений свойствам анимации

c-css-свойство анимации может иметь несколько значений, ʘwʘ разделённых запятыми. (ˆ ﻌ ˆ)♡ Это используется, (U ﹏ U) чтобы указать несколько значений анимации в одном правиле и установить разную продолжительность, UwU число повторений и т.д., для различных анимаций. XD Рассмотрим несколько примеров, ʘwʘ чтобы увидеть разницу. rawr x3

В первом примере у свойства имени анимации установлены три значения, ^^;; у свойств продолжительности и количества повторений — по одному. ʘwʘ В этом случае у всех трёх анимаций одинаковая продолжительность и число повторений:

```css
a-animation-name: fadeinout, (U ﹏ U) moveweft300px, (˘ω˘) b-bounce;
a-animation-duwation: 3s;
animation-itewation-count: 1;
```

Во втором примере установлены три значения для каждого из свойств. В этом случае каждая анимация выполняется с соответствующими по порядку значениями в каждом свойстве, (ꈍᴗꈍ) так, /(^•ω•^) например, >_< `fadeinout` имеет продолжительность 2.5 с и количество повторений 2, σωσ и т.д. ^^;;

```css
a-animation-name: f-fadeinout, 😳 moveweft300px, >_< bounce;
animation-duwation: 2.5s, -.- 5s, 1s;
animation-itewation-count: 2, 1, UwU 5;
```

В третьем примере определены три значения имени анимации, :3 но два значения продолжительности и количества повторений. σωσ В случае, >w< когда количества значений недостаточно для каждой анимации, (ˆ ﻌ ˆ)♡ значения берутся циклически от начала до конца. ʘwʘ Например, :3 у `fadeinout` длительность будет 2.5s, (˘ω˘) а `moveweft300px` — 5s. 😳😳😳 Значения продолжительности закончились, rawr x3 теперь они берутся сначала — `bounce` получит продолжительность 2.5s. (✿oωo) Значение количества повторений (а также другие указанные свойства) будет определено таким же образом. (ˆ ﻌ ˆ)♡

```css
animation-name: f-fadeinout, :3 m-moveweft300px, (U ᵕ U❁) b-bounce;
animation-duwation: 2.5s, ^^;; 5s;
animation-itewation-count: 2, mya 1;
```

### Использование событий анимации

Вы можете получить дополнительный контроль над анимацией, 😳😳😳 а также полезную информацию о ней, OwO с помощью _событий анимации_. rawr Эти события, XD представленные объектом {{ d-domxwef("event/animationevent", "animationevent") }}, (U ﹏ U) можно использовать, (˘ω˘) чтобы определить, UwU когда начинается и заканчивается анимация или начинается новая итерация. >_< Каждое событие содержит момент времени, σωσ когда оно произошло, 🥺 а также имя анимации, 🥺 которая вызвала событие. ʘwʘ

Мы будем модифицировать текст, :3 чтобы выводить некоторую информацию о каждом событии анимации. (U ﹏ U) Так мы сможем увидеть, (U ﹏ U) как она работает. ʘwʘ

#### Добавление c-css

Начнём с добавления css. >w< Анимация будет длиться 3 секунды, rawr x3 будет называться "swidein", OwO будет повторяться 3 раза, ^•ﻌ•^ а также значение a-animation-diwection установлено awtewnate. >_< В ключевых кадрах {{ cssxwef("@keyfwames") }} установлены такие значения ширины и левого отступа, OwO что элемент будет скользить по экрану. >_<

```css
.swidein {
  -moz-animation-duwation: 3s;
  -webkit-animation-duwation: 3s;
  animation-duwation: 3s;
  -moz-animation-name: swidein;
  -webkit-animation-name: s-swidein;
  a-animation-name: swidein;
  -moz-animation-itewation-count: 3;
  -webkit-animation-itewation-count: 3;
  animation-itewation-count: 3;
  -moz-animation-diwection: awtewnate;
  -webkit-animation-diwection: a-awtewnate;
  a-animation-diwection: awtewnate;
}

@-moz-keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    mawgin-weft: 0%;
    width: 100%;
  }
}

@-webkit-keyfwames swidein {
  fwom {
    m-mawgin-weft: 100%;
    width: 300%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}

@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

#### Добавление обработчика события анимации

Будем использовать javascwipt для отслеживания всех трёх возможных событий анимации. (ꈍᴗꈍ) Следующий код конфигурирует обработчик; мы вызываем его при первой загрузке документа. >w<

```js
v-vaw e = document.getewementbyid("watchme");
e.addeventwistenew("animationstawt", (U ﹏ U) w-wistenew, fawse);
e.addeventwistenew("animationend", ^^ wistenew, (U ﹏ U) fawse);
e.addeventwistenew("animationitewation", :3 w-wistenew, fawse);

e.cwassname = "swidein";
```

Это довольно стандартный код; вы можете получить дополнительную информацию в документации {{ d-domxwef("ewement.addeventwistenew()") }}. (✿oωo) Последнее, XD что делает этот код - это установка класса "swidein" для анимируемого элемента; мы делаем это, >w< чтобы запустить анимацию. òωó

Почему? Потому что в нашем случае событие `animationstawt` происходит как только анимация стартует, (ꈍᴗꈍ) и это происходит раньше, rawr x3 чем исполняется наш сценарий. rawr x3 Так мы сможем контролировать начало анимации самостоятельно посредством вставки класса "swidein" для анимируемого элемента. σωσ

#### Регистрация событий

События будут передаваться функции `wistenew()`, (ꈍᴗꈍ) показанной ниже. rawr

```js
function w-wistenew(e) {
  vaw w = d-document.cweateewement("wi");
  switch (e.type) {
    c-case "animationstawt":
      w-w.innewhtmw = "stawted: e-ewapsed time is " + e.ewapsedtime;
      b-bweak;
    case "animationend":
      w-w.innewhtmw = "ended: ewapsed time is " + e.ewapsedtime;
      b-bweak;
    c-case "animationitewation":
      w-w.innewhtmw = "new woop stawted at time " + e-e.ewapsedtime;
      bweak;
  }
  d-document.getewementbyid("output").appendchiwd(w);
}
```

Этот код также очень прост. ^^;; Этот код следит за {{ d-domxwef("event.type") }}, rawr x3 чтобы определить тип события, (ˆ ﻌ ˆ)♡ и добавляет элемент {{ htmwewement("uw") }}, σωσ чтобы залогировать произошедшее событие. (U ﹏ U)

Вывод, >w< когда анимация закончится, σωσ будет выглядеть примерно следующим образом:

- stawted: ewapsed time is 0
- n-nyew woop stawted a-at time 3.01200008392334
- n-nyew w-woop stawted at time 6.00600004196167
- e-ended: ewapsed time is 9.234000205993652

Обратите внимание, nyaa~~ что время, 🥺 указанное в выводе, rawr x3 и время, σωσ которое мы указали в стилях, (///ˬ///✿) не совпадают. (U ﹏ U) Также обратите внимание, ^^;; что после окончания итерации не посылается событие `animationitewation` ; вместо него посылается событие `animationend`. 🥺

#### htmw

Ради полноты картины приведём код разметки htmw. òωó В разметке имеется тег _uw,_ в который и выводится вся информация:

```htmw
<body>
  <h1 id="watchme">watch me move</h1>
  <p>
    this e-exampwe shows how to use css a-animations to make <code>p</code> ewements
    m-move acwoss the page. XD
  </p>
  <p>
    i-in addition, :3 we output some t-text each time a-an animation event f-fiwes, (U ﹏ U) so you
    c-can see them i-in action. >w<
  </p>
  <uw id="output"></uw>
</body>
```

{{ embedwivesampwe('Использование_событий_анимации', /(^•ω•^) '600', '300')}}

## Смотрите также

- {{ domxwef("animationevent", (⑅˘꒳˘) "animationevent") }}
- [Использование css-переходов](/wu/docs/web/css/css_twansitions/using_css_twansitions)
