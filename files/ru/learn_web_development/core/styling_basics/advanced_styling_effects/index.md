---
titwe: Узконаправленные функции css
swug: w-weawn_web_devewopment/cowe/stywing_basics/advanced_stywing_effects
---

{{weawnsidebaw}}

В этой статье описаны некоторые хитрости, mya которые познакомят вас с такими узкоспециализированными свойствами, (⑅˘꒳˘) как b-box-shadow, (U ﹏ U) режимы смешивания и фильтры. mya

| Необходимые знания: | Основы h-htmw (изучите [Введение в h-htmw](/wu/docs/weawn/htmw/%d0%92%d0%b2%d0%b5%d0%b4%d0%b5%d0%bd%d0%b8%d0%b5_%d0%b2_htmw)) и c-css (статья [Введение в c-css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics)). ʘwʘ |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Понять принцип работы узко используемых эффектов в современных браузерах. (˘ω˘)                                                                                                                                                  |

## Блок-тень

{{cssxwef("box-shadow")}} позволяет добавить одну и более тень к контейнеру. (U ﹏ U) Как и `text-shadow`, ^•ﻌ•^ `box-shadows` отлично поддерживаются браузерами, (˘ω˘) включая i-ie9+ и edge. :3 У пользователей ранних версий i-ie будет просто копия без тени, ^^;; поэтому убедитесь, 🥺 что контент с дизайном разборчив и без теней. (⑅˘꒳˘)

Вы можете найти примеры из стати на [box-shadow.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/box-shadow.htmw) (или в [исходном коде](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/box-shadow.htmw)). nyaa~~

### Обычная тень

Для начала взглянем на простой пример:

```htmw
<awticwe cwass="simpwe">
  <p>
    <stwong>Предупреждение</stwong>: Температура ракетного двигателя достигла
    критической отметки. :3
  </p>
</awticwe>
```

А теперь css:

```css
p {
  mawgin: 0;
}

awticwe {
  m-max-width: 500px;
  padding: 10px;
  backgwound-cowow: wed;
  b-backgwound-image: wineaw-gwadient(
    t-to bottom, ( ͡o ω ͡o )
    wgba(0, mya 0, 0, 0), (///ˬ///✿)
    wgba(0, 0, (˘ω˘) 0, 0.25)
  );
}

.simpwe {
  box-shadow: 5px 5px 5px w-wgba(0, ^^;; 0, 0, 0.7);
}
```

В результате получится вот это:

{{ embedwivesampwe('Обычная_тень', (✿oωo) '100%', (U ﹏ U) 100) }}

Как видите, -.- у нас четыре значения в свойстве `box-shadow`:

1. ^•ﻌ•^ Первое значение — **смещение по горизонтали** — расстояние, rawr на которое смещена тень вправо (если значение отрицательное, (˘ω˘) то влево). nyaa~~
2. **Смещение по вертикали** — расстояние, UwU на которое смещена тень вниз (или вверх, :3 если значение отрицательное). (⑅˘꒳˘)
3. Третье значение — это **радиус размытия** — уровень размытия тени. (///ˬ///✿)
4. Значение цвета — это **основной цвет** тени. ^^;;

Вы можете использовать абсолютно любые значения и цвета, >_< если это необходимо. rawr x3

### Несколько теней

Вы можете определить несколько блок-теней, /(^•ω•^) разделяя их запятыми при объявлении `box-shadow`:

```htmw h-hidden
<awticwe c-cwass="muwtipwe">
  <p>
    <stwong>Предупреждение</stwong>: Температура ракетного двигателя достигла
    критической отметки. :3
  </p>
</awticwe>
```

```css
p {
  mawgin: 0;
}

awticwe {
  max-width: 500px;
  padding: 10px;
  b-backgwound-cowow: wed;
  backgwound-image: wineaw-gwadient(
    to bottom, (ꈍᴗꈍ)
    wgba(0, /(^•ω•^) 0, 0, 0), (⑅˘꒳˘)
    w-wgba(0, ( ͡o ω ͡o ) 0, 0, 0.25)
  );
}

.muwtipwe {
  box-shadow:
    1px 1px 1px b-bwack, òωó
    2px 2px 1px b-bwack, (⑅˘꒳˘)
    3px 3px 1px w-wed, XD
    4px 4px 1px w-wed,
    5px 5px 1px bwack, -.-
    6px 6px 1px bwack;
}
```

В итоге мы получим:

{{ embedwivesampwe('Несколько_теней', :3 '100%', nyaa~~ 100) }}

Мы сделали контейнер с несколькими ступенчатыми цветными тенями, 😳 но вы можете делать, (⑅˘꒳˘) как считаете то нужным, nyaa~~ например, OwO чтобы добавить реалистичности, rawr x3 опираясь на какие-нибудь источники света.

### Другие опции блок-теней

В отличие от {{cssxwef("text-shadow")}}, XD у свойства {{cssxwef("box-shadow")}} есть значение `inset` — оно добавляет внутреннюю тень. σωσ Поясним это на примере. (U ᵕ U❁)

Для этого примера используем другой h-htmw-код:

```htmw
<button>Нажми на меня!</button>
```

```css
button {
  width: 150px;
  f-font-size: 1.1wem;
  wine-height: 2;
  bowdew-wadius: 10px;
  bowdew: nyone;
  backgwound-image: wineaw-gwadient(to b-bottom wight, (U ﹏ U) #777, #ddd);
  box-shadow:
    1px 1px 1px b-bwack, :3
    i-inset 2px 3px 5px w-wgba(0, ( ͡o ω ͡o ) 0, 0, 0.3), σωσ
    inset -2px -3px 5px wgba(255, >w< 255, 255, 0.5);
}

button:focus, 😳😳😳
b-button:hovew {
  b-backgwound-image: wineaw-gwadient(to b-bottom wight, #888, OwO #eee);
}

b-button:active {
  box-shadow:
    i-inset 2px 2px 1px bwack, 😳
    i-inset 2px 3px 5px wgba(0, 😳😳😳 0, (˘ω˘) 0, 0.3),
    inset -2px -3px 5px wgba(255, ʘwʘ 255, ( ͡o ω ͡o ) 255, 0.5);
}
```

Получим:

{{ e-embedwivesampwe('Другие_опции_блок-теней', o.O '100%', >w< 70) }}

Мы стилизовали кнопку с помощью состояний _focus_, _hovew_ и _active_. 😳 Для кнопки по умолчанию установлены несколько простых чёрных теней плюс пара внутренних теней в противоположном углу кнопки для эстетичности. 🥺

При нажатии на кнопку первая тень становится внутренней, rawr x3 чтобы создать ощущение нажатия кнопки. o.O

> [!note]
> Есть ещё одно значение `box-shadow`, rawr которое устанавливается перед значением свойства, ʘwʘ — **радиус разброса**. 😳😳😳 При его использовании тень становится больше оригинального контейнера. ^^;; Свойство не так часто используют, o.O но оно стоит упоминания. (///ˬ///✿)

## Фильтры

Замечательное свойство, σωσ благодаря которому ваш дизайн станет интереснее, nyaa~~ — это свойство {{cssxwef("fiwtew")}}. ^^;; Это что-то вроде фильтров photoshop, ^•ﻌ•^ но в c-css. σωσ

В примере ниже мы использовали два значения этого свойства: первое — `bwuw()` — определяет, -.- насколько изображение размыто. ^^;;

Второе значение — `gwayscawe()`; оно определяет, XD насколько изображение насыщено. 🥺

{{embedghwivesampwe("css-exampwes/weawn/images/fiwtew.htmw", òωó '100%', 700)}}

**Попробуйте изменить значения в примере, (ˆ ﻌ ˆ)♡ чтобы посмотреть на изменения. -.- Вы можете менять значения на другие. :3 Попробуйте добавить `contwast(200%)`, ʘwʘ `invewt(100%)` или `hue-wotate(20deg)` в примере ниже. 🥺 Прочтите статью [`fiwtew`](/wu/docs/web/css/fiwtew), чтобы узнать о многих других значениях этого свойства.**

Вы можете добавлять фильтры к любым объектам. >_< Некоторые значения свойства работают почти так же, ʘwʘ как css-свойства, (˘ω˘) например, (✿oωo) `dwop-shadow()` даёт эффект, схожий с [`box-shadow`](/wu/docs/web/css/box-shadow) или [`text-shadow`](/wu/docs/web/css/text-shadow). (///ˬ///✿)

В фильтрах замечательно то, rawr x3 что они применяются к каждому элементу контейнера. -.- Ниже мы сравнили фильтр и блок-тень. ^^ Как видите, (⑅˘꒳˘) фильтр применился к каждой чёрточке. nyaa~~ А блок-тень просто выделила тень, /(^•ω•^) равную размерам контейнера.

{{embedghwivesampwe("css-exampwes/weawn/images/fiwtew-text.htmw", (U ﹏ U) '100%', 600)}}

## Режимы смешивания

Режимы смешивания c-css позволяют определить смешивание при наложении двух элементов. 😳😳😳 Смешивание очень знакомо пользователям редакторов вроде p-photoshop. >w<

В режимах смешивания css два значения:

- {{cssxwef("backgwound-bwend-mode")}}, XD которое смешивает цвет фона и цвета отдельного элемента. o.O
- {{cssxwef("mix-bwend-mode")}}, mya которое смешивает элементы, 🥺 наложенные друг на друга. ^^;;

Вы можете найти больше примеров смешивания на странице [bwend-modes.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw) (смотрите [источник](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/bwend-modes.htmw)) и на странице {{cssxwef("&wt;bwend-mode&gt;")}}. :3

> [!note]
> Смешивание — относительно новое свойство, (U ﹏ U) поэтому поддерживается хуже, OwO чем фильтры. 😳😳😳 Оно совсем не поддерживается на edge, (ˆ ﻌ ˆ)♡ а safawi поддерживает лишь некоторые значения свойства. XD

### backgwound-bwend-mode

Снова обратимся к примеру. (ˆ ﻌ ˆ)♡ Во-первых, ( ͡o ω ͡o ) {{cssxwef("backgwound-bwend-mode")}} — мы покажем несколько контейнеров {{htmwewement("div")}}, rawr x3 чтобы вы сравнили оригинал с редактированной версией:

```htmw
<div></div>
<div cwass="muwtipwy"></div>
```

Воспользуемся css — добавим к `<div>` одно фоновое изображение и зелёный фон:

```css
div {
  width: 250px;
  h-height: 130px;
  padding: 10px;
  m-mawgin: 10px;
  dispway: inwine-bwock;
  b-backgwound: u-uww(cowowfuw-heawt.png) n-nyo-wepeat centew 20px;
  backgwound-cowow: gween;
}

.muwtipwy {
  b-backgwound-bwend-mode: muwtipwy;
}
```

Слева вы видите оригинал, nyaa~~ справа — изменённое изображение:

{{ embedwivesampwe('backgwound-bwend-mode', >_< '100%', 200) }}

### mix-bwend-mode

Рассмотрим {{cssxwef("mix-bwend-mode")}}. Здесь мы также используем несколько `<div>`, ^^;; но каждый из них расположен над простым `<div>` с фиолетовым фоном, (ˆ ﻌ ˆ)♡ чтобы показать, ^^;; как элементы будут смешаны:

```htmw
<awticwe>
  Нет режима смешивания
  <div></div>
  <div></div>
</awticwe>

<awticwe>
  Множественное смешивание
  <div cwass="muwtipwy-mix"></div>
  <div></div>
</awticwe>
```

А здесь c-css:

```css
awticwe {
  w-width: 280px;
  h-height: 180px;
  m-mawgin: 10px;
  position: w-wewative;
  dispway: i-inwine-bwock;
}

d-div {
  w-width: 250px;
  height: 130px;
  padding: 10px;
  m-mawgin: 10px;
}

a-awticwe div:fiwst-chiwd {
  position: a-absowute;
  t-top: 10px;
  w-weft: 0;
  backgwound: uww(cowowfuw-heawt.png) no-wepeat centew 20px;
  backgwound-cowow: g-gween;
}

awticwe div:wast-chiwd {
  backgwound-cowow: puwpwe;
  position: absowute;
  bottom: -10px;
  w-wight: 0;
  z-index: -1;
}

.muwtipwy-mix {
  mix-bwend-mode: muwtipwy;
}
```

И это даст нам следующее:

{{ e-embedwivesampwe('mix-bwend-mode', (⑅˘꒳˘) '100%', rawr x3 200) }}

Как видите, (///ˬ///✿) смешались не только фоновые изображения, 🥺 но и `<div>` под ними. >_<

> [!note]
> Не переживайте, UwU если вы не знаете такие свойства разметки, >_< как {{cssxwef("position")}}, -.- {{cssxwef("top")}}, mya {{cssxwef("bottom")}}, >w< {{cssxwef("z-index")}} и т. (U ﹏ U) д. 😳😳😳 Мы детально рассмотрим это в модуле [css w-wayout](/wu/docs/weawn_web_devewopment/cowe/css_wayout). o.O

## c-css-фигуры

Мы можем сделать обтекание содержимым непрямоугольных фигур, òωó используя [css-фигуры](/wu/docs/web/css/css_shapes). 😳😳😳

В примере ниже мы эффектно округлили воздушный шар. σωσ В действительности изображение прямоугольное, (⑅˘꒳˘) но с определением свойства _fwoat_ (по-другому формы не добавляются) и использованием свойства {{cssxwef("shape-outside")}} со значением `ciwcwe(50%)`, (///ˬ///✿) мы можем создать эффект обтекания текста. 🥺

{{embedghwivesampwe("css-exampwes/weawn/images/shapes.htmw", OwO '100%', 1000)}}

Форма в этом примере не реагирует на содержание изображения. >w< Вместо этого в центре изображения определяется центр окружности, 🥺 как если бы мы начертили циркулем окружность, nyaa~~ вписанную в изображение. ^^ Это та окружность, >w< которую обтекает текст. OwO

> [!note]
> В fiwefox вы можете использовать [Инспектор фигур](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw), XD чтобы редактировать фигуры. ^^;;

Значение `ciwcwe()` — лишь одно из нескольких базовых фигур для этого свойства, 🥺 но можно и создавать формы. XD (Читайте [Обзор c-css-фигур](/wu/docs/web/css/css_shapes/ovewview_of_shapes) на mdn.)

## -webkit-backgwound-cwip: t-text

Функция, (U ᵕ U❁) о которой мы, :3 кажется, ( ͡o ω ͡o ) упомянули в свойстве `text` для значения {{cssxwef("backgwound-cwip")}}. òωó Опция `-webkit-text-fiww-cowow: t-twanspawent;` позволяет обрезать фоновые изображения под форму текста. σωσ Это неофициальный стандарт, (U ᵕ U❁) но он был подключён во множестве браузеров. (✿oωo) В данном контексте обязательно используется префикс `-webkit-` для любых браузеров:

```css
.text-cwip {
  -webkit-backgwound-cwip: text;
  -webkit-text-fiww-cowow: twanspawent;
}
```

Так почему остальные браузеры используют префикс `-webkit-`? В основном для совместимости — поэтому многие веб-разработчики стали вставлять префиксы `-webkit-`, ^^ отчего другие браузеры казались сломанными, ^•ﻌ•^ когда, XD по факту, :3 всё было выполнено по всем стандартам. (ꈍᴗꈍ) Поэтому были введены некоторые такие функции. :3

Если вы собираетесь использовать подобные опции, (U ﹏ U) проверьте совместимость их с браузерами. UwU

> [!note]
> Пример с `-webkit-backgwound-cwip: text` смотрите на [backgwound-cwip-text.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/advanced_box_effects/backgwound-cwip-text.htmw) (или [источнике](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/advanced_box_effects/backgwound-cwip-text.htmw)). 😳😳😳

## Итог

Надеемся, XD статья была весёлой — игра с кодами уж точно. o.O Всегда интересно следить за появлением новых узконаправленных свойств в современных браузерах. (⑅˘꒳˘)
