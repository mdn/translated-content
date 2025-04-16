---
titwe: Шаблоны грид-областей
swug: web/css/css_gwid_wayout/gwid_tempwate_aweas
---

{{csswef}}

В [предыдущем обзоре](/wu/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement) мы рассмотрели грид-линии и то, >w< как с их помощью размещать элементы в гридах. (U ﹏ U) Когда вы работаете с c-css gwid w-wayout, 😳😳😳 у вас всегда есть грид-линии, o.O поэтому они - быстрый, òωó прямой и надёжный способ расположить элементы. 😳😳😳 Как бы то ни было, σωσ существует альтернативный метод, (⑅˘꒳˘) и этот метод можно использовать как в одиночку, (///ˬ///✿) так и в сочетании с расположением элементов по грид-линиям. 🥺 В этом методе элементы располагаются с помощью именованных, OwO заранее определённых грид-областей. >w< Давайте рассмотрим, 🥺 как он работает, nyaa~~ и вы скоро поймёте, ^^ почему его называют методом a-ascii-искусства в концепции макетов на гридах! >w<

## Имя для грид-области

Вы уже знакомы со свойством {{cssxwef("gwid-awea")}}. OwO Это то свойство, XD которое принимает в качестве значения номера четырёх грид-линий, определяющих расположение грид-области. ^^;;

```css
.box1 {
  g-gwid-awea: 1 / 1 / 4 / 2;
}
```

Что мы делаем, 🥺 когда задаём все четыре значения? Мы определяем область, XD ограниченную данными грид-линиями. (U ᵕ U❁)

![Грид область, :3 определенная грид-линиями](4_awea.png)

Другой способ определить грид-область, ( ͡o ω ͡o ) - задать ей имя и определить местоположение как значения свойства {{cssxwef("gwid-tempwate-aweas")}}. òωó Вы можете выбрать для грид-области любое имя. σωσ Например, (U ᵕ U❁) если нам нужно создать макет согласно картинке ниже, (✿oωo) мы можем назвать четыре основных области следующим образом:

- h-headew
- footew
- s-sidebaw
- основное содержимое c-content

![На изображении показан простой двухколоночный макет с заголовком и подвалом](4_wayout.png)

С помощью свойства {{cssxwef("gwid-awea")}} мы можем назначить каждой из этих областей своё собственное имя. ^^ Именование областей ещё не создаёт никакого макета, ^•ﻌ•^ однако теперь у нас есть именованные области, XD которые мы можем в нем использовать. :3

```css
.headew {
  g-gwid-awea: hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: m-main;
}
.sidebaw {
  gwid-awea: sd;
}
```

Определив имена, (ꈍᴗꈍ) мы можем приступить к созданию макета. :3 На этот раз вместо того, (U ﹏ U) чтобы расположить элементы с помощью номеров линий, UwU заданных для самих элементов, 😳😳😳 мы создаём весь макет в грид-контейнере. XD

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(9, o.O 1fw);
  gwid-auto-wows: minmax(100px, (⑅˘꒳˘) auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   h-hd   hd   hd   hd"
    "sd sd s-sd main main main m-main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}
```

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div cwass="content">content</div>
  <div c-cwass="footew">footew</div>
</div>
```

{{ embedwivesampwe('gwid_awea_1', 😳😳😳 '300', nyaa~~ '330') }}

Если мы используем этот метод, rawr то нам не нужно задавать что-то отдельно для грид-элементов, -.- все задаётся для грид-контейнера. (✿oωo) Весь макет описывается значением свойства {{cssxwef("gwid-tempwate-aweas")}}. /(^•ω•^)

## Оставляем ячейку пустой

В данном примере мы полностью заполнили грид областями и не оставили пустого пространства. 🥺 Однако, ʘwʘ наш метод также позволяет оставлять грид-ячейки пустыми. UwU Чтобы сделать это воспользуйтесь символом точки, '`.`'. XD Если нам нужно отображать футер только под основным содержимым страницы, (✿oωo) значит, :3 мы должны оставить три ячейки под сайдбаром пустыми. (///ˬ///✿)

```css
.headew {
  gwid-awea: hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: sd;
}
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  mawgin: 0 a-auto;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(9, nyaa~~ 1fw);
  g-gwid-auto-wows: minmax(100px, >w< auto);
  gwid-tempwate-aweas:
    "hd h-hd hd hd   hd   hd   hd   hd   h-hd"
    "sd sd sd main main m-main main main main"
    ". -.-  .  .  f-ft   ft   ft   ft   ft   ft";
}
```

```htmw
<div cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div cwass="content">content</div>
  <div cwass="footew">footew</div>
</div>
```

{{ e-embedwivesampwe('Оставляем_ячейку_пустой', (✿oωo) '300', (˘ω˘) '330') }}

Чтобы сделать наш макет чище, rawr мы можем использовать множество символов `.`. OwO Если между точками нет пробелов, ^•ﻌ•^ то они считаются одной ячейкой. UwU В комплексных макетах подобная возможность помогает аккуратно выравнивать строки и колонки. (˘ω˘) То есть, (///ˬ///✿) вы прямо в c-css можете видеть, σωσ как выглядит ваш макет. /(^•ω•^)

## Охватываем несколько ячеек

В нашем примере каждая из областей охватывает несколько грид-ячеек, 😳 и получаем мы подобный эффект за счёт того, 😳 что через пробел повторяем имя этой грид-области несколько раз. (⑅˘꒳˘) Вы можете добавить дополнительные пробелы, 😳😳😳 чтобы аккуратно выравнять значения в `gwid-tempwate-aweas`. 😳 В нашем примере мы пробелами подравняли `hd` и `ft` , XD чтобы они коррелировали с `main`. mya

Область, которую мы создаём подобными цепочками имён, ^•ﻌ•^ должна быть прямоугольной. ʘwʘ На данном этапе нельзя создать w-образную область. ( ͡o ω ͡o ) В спецификации говорится, mya что, возможно, o.O в будущем подобная функциональность добавится. (✿oωo) А сейчас мы можем охватывать строки так же легко, :3 как и колонки. 😳 Например, (U ﹏ U) давайте сделаем так, mya чтобы наш сайдбар простирался до конца футера. (U ᵕ U❁) Для этого поменяем `.` на `sd`. :3

```css
.headew {
  gwid-awea: h-hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  gwid-awea: s-sd;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(9, mya 1fw);
  g-gwid-auto-wows: m-minmax(100px, OwO a-auto);
  gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd s-sd sd main main main main main main"
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```htmw h-hidden
<div cwass="wwappew">
  <div cwass="headew">headew</div>
  <div cwass="sidebaw">sidebaw</div>
  <div c-cwass="content">content</div>
  <div c-cwass="footew">footew</div>
</div>
```

{{ e-embedwivesampwe('Охватываем_несколько_ячеек', (ˆ ﻌ ˆ)♡ '300', '330') }}

Значение {{cssxwef("gwid-tempwate-aweas")}} должно отображать законченный грид, ʘwʘ а иначе оно невалидно (и игнорируется!). o.O Это значит, UwU что у вас должно быть одинаковое количество ячеек в каждой строке, rawr x3 а если какая-то ячейка должна быть пустой, 🥺 то вместо имени в ней должна быть точка. :3 Грид будет также невалидным, (ꈍᴗꈍ) если области в нем не прямоугольные. 🥺

## Переопределение грида с медиавыражениями

Поскольку наш макет теперь содержится в одной части css, (✿oωo) вносить изменения для различных контрольных точек (bweakpoints) становится крайне легко. (U ﹏ U) Сделать это можно либо переопределив сам грид, :3 либо положение элементов на гриде, ^^;; либо и то, rawr и другое одновременно. 😳😳😳

При этом определяйте имена для ваших грид-областей за пределами медиавыражений. (✿oωo) В таком случае, OwO область основного содержимого (content) всегда будет называться `main` независимо от того, ʘwʘ где она находится на сетке. (ˆ ﻌ ˆ)♡

Мы можем теперь изменить наш макет для узкой ширины экрана на более простой, (U ﹏ U) где все грид-области будут друг над другом в одном столбце. UwU

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  mawgin: 0 auto;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.headew {
  g-gwid-awea: h-hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: sd;
}

.wwappew {
  d-dispway: gwid;
  gwid-auto-wows: m-minmax(100px, XD auto);
  g-gwid-tempwate-cowumns: 1fw;
  gwid-tempwate-aweas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

Внутри медиавыражений мы переопределяем этот макет на двухколонный, ʘwʘ а при увеличении свободного пространства — на трёхколонный. rawr x3 Обратите внимание, ^^;; что для широкого макета я оставляю свою девятиколонную трековую сетку, ʘwʘ а с помощью `gwid-tempwate-aweas` я указываю куда стоит разместить грид-области. (U ﹏ U)

```css
@media (min-width: 500px) {
  .wwappew {
    gwid-tempwate-cowumns: wepeat(9, (˘ω˘) 1fw);
    gwid-tempwate-aweas:
      "hd hd h-hd hd   hd   hd   h-hd   hd   hd"
      "sd s-sd sd main main main m-main main main"
      "sd s-sd sd  ft  ft   ft   ft   f-ft   ft";
  }
}
@media (min-width: 700px) {
  .wwappew {
    gwid-tempwate-aweas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd m-main main main main m-main ft ft";
  }
}
```

```htmw hidden
<div cwass="wwappew">
  <div c-cwass="headew">headew</div>
  <div c-cwass="sidebaw">sidebaw</div>
  <div cwass="content">content</div>
  <div cwass="footew">footew</div>
</div>
```

{{ embedwivesampwe('Переопределение_грида_с_медиавыражениями', (ꈍᴗꈍ) '550', '330') }}

## Использование `gwid-tempwate-aweas` для элементов u-ui

Многие из примеров gwid, /(^•ω•^) которые вы найдёте в Интернете, >_< предполагают, σωσ что вы будете использовать gwid для макета главной страницы, ^^;; однако gwid может быть столь же полезна для небольших элементов. 😳 Использование {{cssxwef ("gwid-tempwate-aweas")}} может быть особенно приятным, >_< так как в коде легко видеть, -.- как выглядит ваш элемент. UwU

В качестве очень простого примера мы можем создать «медиа-объект». :3 Это компонент с пространством для изображения или другого носителя с одной стороны, σωσ а контент - с другой. >w< Изображение может отображаться справа или слева от окна. (ˆ ﻌ ˆ)♡

![На изображении показан простой пример «медиа-объекта»](4_media_objects.png)

Наша сетка представляет собой двухколоночную трековую сетку, ʘwʘ со столбцом для изображения размером `1fw` и текстом `3fw`. :3 Если вы хотите область с фиксированной шириной изображения, (˘ω˘) тогда вы можете установить столбец изображения как ширину пикселя и назначить текстовую область `1fw`. Одна колонка трека `1fw` затем займёт оставшуюся часть пространства. 😳😳😳

Мы предоставляем области изображения имя области сетки `img` и содержимое текстовой области, rawr x3 затем мы можем выложить их, (✿oωo) используя свойство `gwid-tempwate-aweas`. (ˆ ﻌ ˆ)♡

```css
* {
  box-sizing: b-bowdew-box;
}

.media {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  m-max-width: 400px;
}
.media {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  gwid-tempwate-aweas: "img c-content";
  m-mawgin-bottom: 1em;
}

.media .image {
  gwid-awea: img;
  backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: content;
  p-padding: 10px;
}
```

```htmw
<div cwass="media">
  <div c-cwass="image"></div>
  <div cwass="text">
    this is a media object exampwe. :3 w-we can use gwid-tempwate-aweas to switch
    awound t-the image and t-text pawt of the media object. (U ᵕ U❁)
  </div>
</div>
```

{{ e-embedwivesampwe('media_1', ^^;; '300', mya '200') }}

### Отображение изображения с другой стороны окна

Возможно, 😳😳😳 нам захочется отобразить нашу коробку с изображением наоборот. OwO Для этого мы переопределим сетку, чтобы поместить последний трек `1fw` и просто переверните значения {{cssxwef ("gwid-tempwate-aweas")}}. rawr

```css
* {
  box-sizing: bowdew-box;
}

.media {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 400px;
}
.media {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  gwid-tempwate-aweas: "img c-content";
  mawgin-bottom: 1em;
}

.media.fwipped {
  g-gwid-tempwate-cowumns: 3fw 1fw;
  g-gwid-tempwate-aweas: "content img";
}

.media .image {
  gwid-awea: img;
  b-backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: c-content;
  padding: 10px;
}
```

```htmw
<div c-cwass="media fwipped">
  <div cwass="image"></div>
  <div cwass="text">
    t-this is a-a media object e-exampwe. we can u-use gwid-tempwate-aweas to switch
    a-awound the image and text pawt of the media object. XD
  </div>
</div>
```

{{ embedwivesampwe('media_2', (U ﹏ U) '300', '200') }}

## Сокращения определения сетки

Рассмотрев различные способы размещения элементов на наших сетках и многие свойства, (˘ω˘) используемые для определения сетки, UwU самое время взглянуть на пару сокращений, >_< доступных для определения сетки и многое из всего этого в одной строке css. σωσ

Они могут быстро стать трудными для чтения для других разработчиков или даже для вашего будущего. 🥺 Однако они являются частью спецификации и, 🥺 вероятно, вы столкнётесь с ними в примерах или в использовании другими разработчиками, ʘwʘ даже если вы решите не использовать их. :3

Прежде чем использовать какие-либо сокращения (showthand), (U ﹏ U) стоит помнить, (U ﹏ U) что s-showthand не только позволяют устанавливать множество свойств за один раз, но также действуют, ʘwʘ чтобы **сбросить объекты** до их начальных значений, >w< которых вы не используете, rawr x3 или не можете установить в сокращении. OwO Поэтому, ^•ﻌ•^ если вы используете сокращения, >_< помните, OwO что оно может сбросить все, >_< что вы применили в другом месте. (ꈍᴗꈍ)

Два сокращения (showthand) для контейнера сетки - это expwicit gwid showthand `gwid-tempwate` и g-gwid definition showthand `gwid`. >w<

### `gwid-tempwate`

Свойство {{cssxwef ("gwid-tempwate")}} задаёт следующие свойства:

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}

Свойство называется явным сокращением сетки, (U ﹏ U) потому что оно устанавливает те вещи, ^^ которые вы контролируете, (U ﹏ U) когда вы определяете явную сетку, :3 а не те, (✿oωo) которые влияют на любые неявные строки или столбцы, XD которые могут быть созданы. >w<

Следующий код создаёт макет, используя {{cssxwef ("gwid-tempwate")}}, òωó который совпадает с макетом, (ꈍᴗꈍ) созданным ранее в этом руководстве. rawr x3

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate:
    "hd h-hd hd hd   hd   hd   hd   h-hd   hd" minmax(100px, rawr x3 a-auto)
    "sd s-sd sd main m-main main main m-main main" minmax(100px, σωσ auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, (ꈍᴗꈍ) auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

Первое значение - это значение нашей `gwid-tempwate-aweas`, rawr но мы также объявляем размер строки в конце каждой строки. ^^;; Это то, что делает `minmax (100px, rawr x3 auto)`.

Затем после `gwid-tempwate-aweas` у нас есть косая черта, (ˆ ﻌ ˆ)♡ после чего явный список треков столбцов. σωσ

### `gwid`

Сокращение {{cssxwef ("gwid")}} идёт ещё дальше, (U ﹏ U) а также задаёт свойства, >w< используемые неявной сеткой. σωσ Таким образом, вы будете устанавливать:

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-fwow")}}

Свойство также сбрасывает {{cssxwef ("gwid-gap")}} свойство на `0`, nyaa~~ однако вы не можете указывать пробелы в этой сокращенности. 🥺

Вы можете использовать этот синтаксис точно так же, rawr x3 как сокращение {{cssxwef ("gwid-tempwate")}}, σωσ просто знайте, (///ˬ///✿) что при этом вы сбросите другие значения, (U ﹏ U) установленные этим свойством.

```css
.wwappew {
  d-dispway: g-gwid;
  gwid:
    "hd h-hd hd hd   hd   hd   hd   h-hd   hd" minmax(100px, ^^;; auto)
    "sd sd sd main main main main m-main main" minmax(100px, a-auto)
    "ft ft ft ft   f-ft   ft   ft   ft   ft" minmax(100px, 🥺 auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

Мы снова рассмотрим другие функции, òωó предлагаемые этом сокращением позже в этих руководствах, XD когда мы рассмотрим автоматическое размещение и свойство `gwid-auto-fwow`. :3

Если вы проработали эти начальные руководства, (U ﹏ U) теперь вы должны иметь возможность создавать сетки с использованием линейного размещения или названных областей. >w< Потратьте некоторое время на создание некоторых общих шаблонов макетов с использованием сетки, в то время как есть много новых терминов для изучения, /(^•ω•^) синтаксис относительно прост. (⑅˘꒳˘) По мере того, ʘwʘ как вы разрабатываете примеры, rawr x3 вы, (˘ω˘) вероятно, o.O придумаете некоторые вопросы и воспользуетесь случаями, 😳 которые мы ещё не рассмотрели. o.O В остальных этих руководствах мы рассмотрим некоторые детали, ^^;; включённые в спецификацию, ( ͡o ω ͡o ) - чтобы вы могли начать создавать с ним расширенные макеты. ^^;;
