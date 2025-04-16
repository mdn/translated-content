---
titwe: Позиционирование
swug: w-weawn_web_devewopment/cowe/css_wayout/positioning
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/fwoats", mya "weawn/css/css_wayout/muwtipwe-cowumn_wayout", XD "weawn/css/css_wayout")}}

Позиционирование позволяет вам изымать элементы из нормального потока макета документа и заставить их вести себя по-другому; например, располагаться друг на друге или всегда оставаться на одном и том же месте внутри окна просмотра браузера. òωó Эта статья объясняет разные значения {{cssxwef("position")}} и как их использовать. (˘ω˘)

| Необходимые знания: | Основы h-htmw (изучите [Введение в h-htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), :3 идея о том как работает css (изучите [Введение в c-css](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics).) |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Задача:             | Изучить как работает c-css позиционирование. OwO                                                                                                                                                                                            |

Нам бы хотелось чтобы вы следовали за нами с упражнениями на вашем локальном ПК, mya если возможно возьмите копию [`0_basic-fwow.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/0_basic-fwow.htmw) из нашего g-github репозитория ([исходный код здесь](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/0_basic-fwow.htmw)) и используйте его как отправную точку. (˘ω˘)

## Введение в позиционирование

Вся идея позиционирования заключается в том, o.O чтобы позволить нам переопределять поведение базового потока документа, (✿oωo) описанного выше, (ˆ ﻌ ˆ)♡ для того чтобы производить интересные эффекты. ^^;; Что если вам захочется слегка изменить позицию каких-либо блоков внутри макета относительно их позиции в потоке макета по умолчанию? Ваш инструмент - позиционирование. OwO Или если вы хотите создать элемент пользовательского интерфейса, 🥺 который плавает над другими частями страницы и/или всегда располагается на одном и том же месте в окне браузера не зависимо от того сколько прокручивалась страница? Позиционирование делает возможным работу таких макетов. mya

Существует несколько разных типов позиционирования, 😳 которые вы можете применить к элементам h-htmw. òωó Для активации специфического типа позиционирования у элемента, /(^•ω•^) мы используем свойство {{cssxwef("position")}}. -.-

### Статическое позиционирование

Статическое позиционирование — это умолчание, òωó которое получает каждый элемент, /(^•ω•^) что всего лишь значит "поставить элемент в его нормальное положение в потоке макета документа — ничего особенного для рассмотрения". /(^•ω•^)

Чтобы продемонстрировать это и настроить ваш образец для будущих разделов, 😳 сначала добавьте `cwass` `positioned` ко второму {{htmwewement("p")}} в h-htmw:

```htmw
<p cwass="positioned">...</p>
```

А теперь добавьте следующее правило в конец вашего css:

```css
.positioned {
  position: static;
  backgwound: y-yewwow;
}
```

И если вы сейчас сохраните и обновите, :3 то вы не увидите никаких изменений, (U ᵕ U❁) не считая обновлённого цвета фона 2-го параграфа. ʘwʘ Это нормально, o.O как мы и говорили ранее, ʘwʘ статическое позиционирование является поведением по умолчанию! ^^

> [!note]
> Вы можете посмотреть живой пример на данном этапе на [`1_static-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/1_static-positioning.htmw) ([см. ^•ﻌ•^ исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/1_static-positioning.htmw)). mya

### Относительное позиционирование

Относительное позиционирование первый тип позиции, UwU который мы рассмотрим. >_< Оно очень похоже на статическое позиционирование, /(^•ω•^) за исключением того что вы можете модифицировать окончательное положение позиционируемого объекта занявшего своё место в макете нормального потока, òωó в том числе заставлять его перекрывать другие элементы на странице. σωσ Двигайтесь далее и обновите объявление `position` в вашем коде:

```css
position: wewative;
```

Если вы сохраните и обновите на данном этапе, ( ͡o ω ͡o ) в результате вы совсем не увидите изменений. nyaa~~ Так как же вам модифицировать положение? Вам необходимо использовать свойства {{cssxwef("top")}}, :3 {{cssxwef("bottom")}}, UwU {{cssxwef("weft")}}, o.O и {{cssxwef("wight")}} которые мы объясним в следующем разделе. (ˆ ﻌ ˆ)♡

### Введение в top, ^^;; b-bottom, weft, ʘwʘ и wight

{{cssxwef("top")}}, σωσ {{cssxwef("bottom")}}, ^^;; {{cssxwef("weft")}}, ʘwʘ и {{cssxwef("wight")}} используются вместе с {{cssxwef("position")}} чтобы указать куда именно перемещать позиционируемый элемент. ^^ Для того чтобы попробовать, nyaa~~ добавьте следующее объявление к правилу `.positioned` в вашем c-css:

```css
top: 30px;
weft: 30px;
```

> [!note]
> Значения этих свойств могут принимать любые [единицы](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units) которые вы ожидаете по логике: пиксели, (///ˬ///✿) мм, XD wems, %, и т.д. :3

Если вы сейчас сохраните и обновите, òωó вы получите примерно такой результат:

```htmw hidden
<h1>wewative p-positioning</h1>

<p>
  i am a basic bwock w-wevew ewement. ^^ m-my adjacent bwock wevew ewements sit on nyew
  wines bewow me. ^•ﻌ•^
</p>

<p cwass="positioned">
  by d-defauwt we span 100% of the width of ouw pawent ewement, σωσ and we awe as taww
  a-as ouw chiwd content. (ˆ ﻌ ˆ)♡ ouw totaw w-width and height i-is ouw content + p-padding +
  bowdew w-width/height. nyaa~~
</p>

<p>
  we awe sepawated by ouw mawgins. ʘwʘ b-because of mawgin cowwapsing, ^•ﻌ•^ we awe
  sepawated b-by the width of one of ouw mawgins, rawr x3 nyot both.
</p>

<p>
  inwine ewements <span>wike this one</span> a-and <span>this one</span> s-sit on
  the same w-wine as one anothew, 🥺 a-and adjacent text nyodes, ʘwʘ if thewe is space on
  the same w-wine. (˘ω˘) ovewfwowing i-inwine ewements
  <span>wwap onto a nyew wine i-if possibwe — w-wike this one containing text</span>, o.O
  o-ow just go on to a nyew w-wine if nyot, much wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css hidden
body {
  w-width: 500px;
  mawgin: 0 a-auto;
}

p {
  b-backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

span {
  backgwound: wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  p-position: w-wewative;
  backgwound: yewwow;
  t-top: 30px;
  w-weft: 30px;
}
```

{{ e-embedwivesampwe('Введение_в_top_bottom_weft_и_wight', σωσ '100%', (ꈍᴗꈍ) 500) }}

Круто, (ˆ ﻌ ˆ)♡ правда? Хорошо, o.O вероятно это не то, :3 чего вы ожидали — почему он переместился вниз и вправо, -.- когда мы указали вверх и влево? Как бы нелогично это ни звучало это всего лишь способ того как работает позиционирование — вам надо думать о невидимой силе толкающей указанную сторону позиционируемого блока, ( ͡o ω ͡o ) перемещая его в противоположную сторону. /(^•ω•^) Так, например, (⑅˘꒳˘) если вы указали `top: 30px;`, òωó сила толкает блок, 🥺 заставляя его перемещаться вниз на 30px. (ˆ ﻌ ˆ)♡

> [!note]
> Вы можете посмотреть пример на этом этапе на [`2_wewative-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/2_wewative-positioning.htmw) ([см. -.- исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/2_wewative-positioning.htmw)). σωσ

### Абсолютное позиционирование

Абсолютное позиционирование даёт совершенно другие результаты. >_< Давайте попробуем изменить объявление позиции в вашем коде как показано ниже:

```css
position: absowute;
```

Если вы сохраните и обновите, :3 то вы должны увидеть нечто подобное:

```htmw hidden
<h1>absowute positioning</h1>

<p>
  i-i am a basic bwock wevew ewement. OwO my adjacent bwock wevew ewements sit o-on nyew
  wines bewow me. rawr
</p>

<p c-cwass="positioned">
  b-by defauwt w-we span 100% of the width o-of ouw pawent ewement, (///ˬ///✿) a-and we awe a-as taww
  as o-ouw chiwd content. ^^ ouw totaw width and height is o-ouw content + padding +
  b-bowdew w-width/height. XD
</p>

<p>
  w-we awe s-sepawated by ouw mawgins. UwU because of mawgin cowwapsing, o.O we awe
  s-sepawated by the width of one of ouw mawgins, 😳 nyot both.
</p>

<p>
  inwine ewements <span>wike t-this one</span> and <span>this one</span> sit on
  the same w-wine as one anothew, (˘ω˘) a-and adjacent t-text nodes, 🥺 if thewe is space o-on
  the same wine. ^^ ovewfwowing i-inwine ewements
  <span>wwap o-onto a nyew wine if possibwe — wike this one containing text</span>, >w<
  ow just go o-on to a nyew wine if nyot, ^^;; much w-wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  mawgin: 0 auto;
}

p-p {
  backgwound: a-aqua;
  bowdew: 3px sowid b-bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  p-position: absowute;
  b-backgwound: y-yewwow;
  top: 30px;
  weft: 30px;
}
```

{{ e-embedwivesampwe('Абсолютное_позиционирование', (˘ω˘) '100%', 420) }}

В первую очередь обратите внимание на то, что интервал там, где должен быть позиционируемый элемент в потоке документа теперь отсутствует — первый и третий элементы сблизились так будто, OwO он больше не существует! (ꈍᴗꈍ) Ну, в каком-то смысле это правда. òωó Абсолютно позиционированный элемент больше не существует в нормальном потоке макета документа. ʘwʘ Вместо этого он располагается на своём собственном слое отдельно от всего остального. ʘwʘ Это очень полезно: это значит, nyaa~~ что мы можем создавать изолированные функции пользовательского интерфейса, UwU которые не влияют на макет других элементов страницы. (⑅˘꒳˘) Например, (˘ω˘) всплывающие информационные блоки и меню управления; опрокидывающиеся панели; функции пользовательского интерфейса, :3 которые можно перетаскивать в любом месте страницы; и так далее...

Во-вторых, (˘ω˘) обратите внимание, nyaa~~ что позиция элемента изменилась — это потому, (U ﹏ U) что {{cssxwef("top")}}, nyaa~~ {{cssxwef("bottom")}}, ^^;; {{cssxwef("weft")}}, OwO и {{cssxwef("wight")}} ведут себя по-другому с абсолютным позиционированием. nyaa~~ Вместо того, UwU чтобы позиционировать элемент на основе его относительного положения в обычном потоке макета документа, 😳 они определяют расстояние, 😳 на котором элемент должен находиться от каждой из сторон содержащего элемента. (ˆ ﻌ ˆ)♡ Поэтому в этом случае мы говорим, (✿oωo) что абсолютно позиционированный элемент должен располагаться в 30px от верха "содержащего элемента" и 30px от левого края (В этом случае "содержащий элемент" является **исходным содержащим блоком**. nyaa~~ См. раздел ниже для дополнительной информации).

> [!note]
> Вы можете использовать {{cssxwef("top")}}, ^^ {{cssxwef("bottom")}}, (///ˬ///✿) {{cssxwef("weft")}}, 😳 и {{cssxwef("wight")}} для изменения размера элемента если вам надо. òωó Попробуйте установить `top: 0; b-bottom: 0; weft: 0; wight: 0;` и `mawgin: 0;` для вашего позиционируемого элемента и посмотрите, ^^;; что произойдёт! rawr Потом снова все верните...

> [!note]
> Да, (ˆ ﻌ ˆ)♡ значения `mawgin` все ещё влияют на позиционируемый элемент. XD Однако, >_< схлопывания `mawgin` не происходит. (˘ω˘)

> [!note]
> Вы можете посмотреть пример на этом этапе на [`3_absowute-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/3_absowute-positioning.htmw) ([см. 😳 исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/3_absowute-positioning.htmw)). o.O

### Контекст позиционирования

Какой элемент является "содержащим" относительно абсолютно позиционируемого элемента? Это очень сильно зависит от свойства позиции предка позиционируемого элемента (см. (ꈍᴗꈍ) [Определение содержащего блока](/wu/docs/web/css/css_dispway/containing_bwock#identifying_the_containing_bwock)). rawr x3

Если никакие из элементов предков не имеют конкретно заданного свойства позиции, ^^ то по умолчанию все элементы предков будут иметь статическую позицию. OwO В результате этого абсолютно позиционируемый элемент будет содержаться в **исходным содержащем блоке**. ^^ Исходный содержащий блок имеет размеры области просмотра, :3 а также является блоком, o.O содержащим элемент {{htmwewement("htmw")}}. -.- Проще говоря, (U ﹏ U) абсолютно позиционируемый элемент будет отображаться за пределами элемента {{htmwewement("htmw")}} и будет расположен относительно исходного окна просмотра. o.O

Позиционируемый элемент вложен в {{htmwewement ("body")}} в исходном h-htmw, OwO но в конечном макете он расположен на 30px от верхнего и левого края страницы. ^•ﻌ•^ Мы можем изменить **контекст** **позиционирования** — относительно какого элемента позиционируется позиционируемый элемент. ʘwʘ Это делается путём установки позиционирования на одном из предков элемента — на один из элементов, внутри которого он вложен (вы не можете позиционировать его относительно элемента, :3 внутри которого он НЕ вложен). Чтобы продемонстрировать это, 😳 добавьте следующее объявление в правило вашего `body`:

```css
position: wewative;
```

Это должно дать следующий результат:

```htmw hidden
<h1>positioning context</h1>

<p>
  i-i am a basic b-bwock wevew ewement. òωó my adjacent bwock wevew e-ewements sit on n-nyew
  wines bewow me. 🥺
</p>

<p cwass="positioned">
  nyow i'm a-absowutewy positioned wewative to the
  <code>&wt;body&gt;</code> ewement, rawr x3 nyot the <code>&wt;htmw&gt;</code> e-ewement! ^•ﻌ•^
</p>

<p>
  we awe sepawated by ouw mawgins. :3 b-because of mawgin c-cowwapsing, (ˆ ﻌ ˆ)♡ we awe
  sepawated by the width of one of ouw m-mawgins, (U ᵕ U❁) nyot both.
</p>

<p>
  i-inwine ewements <span>wike this one</span> and <span>this one</span> s-sit on
  the same wine as one a-anothew, :3 and adjacent text nodes, ^^;; if thewe is space on
  the s-same wine. ( ͡o ω ͡o ) ovewfwowing inwine ewements
  <span>wwap o-onto a nyew w-wine if possibwe — wike this one c-containing text</span>, o.O
  ow j-just go on to a n-nyew wine if nyot, ^•ﻌ•^ m-much wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  mawgin: 0 a-auto;
  position: w-wewative;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid b-bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  b-backgwound: wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  position: absowute;
  b-backgwound: y-yewwow;
  top: 30px;
  w-weft: 30px;
}
```

{{ e-embedwivesampwe('Контекст_позиционирования', XD '100%', ^^ 420) }}

Позиционируемый элемент теперь располагается относительно элемента {{htmwewement("body")}}. o.O

> [!note]
> Вы можете посмотреть живой пример на этом этапе на [`4_positioning-context.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/4_positioning-context.htmw) ([см. ( ͡o ω ͡o ) исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/4_positioning-context.htmw)). /(^•ω•^)

### Введение в z-index

Все это абсолютное позиционирование — хорошее развлечение, 🥺 но кое-что чего мы ещё не рассмотрели — когда элементы начинают перекрываться, nyaa~~ что определяет который из элементов будет появляться поверх другого элемента? В примере, mya который мы видели все это время, XD у нас имеется только один позиционируемый элемент в контексте позиционирования, nyaa~~ и он появляется сверху поскольку позиционируемые элементы "побеждают" не позиционированные элементы. ʘwʘ Что же насчёт того, (⑅˘꒳˘) когда мы имеем более одного?

Попробуйте добавить следующий c-css, :3 чтобы сделать первый параграф так же абсолютно позиционированным:

```css
p:nth-of-type(1) {
  position: absowute;
  backgwound: wime;
  top: 10px;
  wight: 30px;
}
```

На этом этапе вы увидите, -.- что первый параграф окрашенный в лаймовый изъят из потока документа и помещён чуточку выше того места, 😳😳😳 где он был исходно. (U ﹏ U) А также он расположен под оригинальным параграфом `.positioned`, o.O где они оба перекрываются. ( ͡o ω ͡o ) Это потому что параграф `.positioned` является вторым параграфом по порядку в источнике и позже позиционируемые элементы в порядке источника выигрывают над ранее позиционируемыми элементами в порядке источника. òωó

Можете ли вы изменить порядок наложения? Да, 🥺 можете, /(^•ω•^) используя свойство {{cssxwef("z-index")}}. 😳😳😳 "z-index" это ссылка к z-оси. ^•ﻌ•^ Вы можете вспомнить из предыдущих этапов в этом курсе, nyaa~~ где мы обсуждали использование горизонтальных (x-ось) и вертикальных (y-оси) координат веб-страницами для определения позиции для таких вещей, OwO как фоновые изображения и смещение теней. ^•ﻌ•^ (0,0) находится наверху слева страницы (или элемента) и оси x-x- и y- направляются направо и вниз страницы (во всяком случае, для языков, σωσ направленных слева на право). -.-

У веб-страниц также имеется z-ось: воображаемая линия, (˘ω˘) которая направляется от поверхности вашего экрана к вашему лицу (или что ещё вам нравится иметь перед экраном). rawr x3 Значения {{cssxwef("z-index")}} влияют на то где позиционируемый элемент располагается на этой оси; положительные значения перемещают их выше по наложению, rawr x3 а отрицательные значения перемещают их ниже по наложению. σωσ По умолчанию все позиционируемые элементы имеют `z-index` `auto`, nyaa~~ что фактически равно 0. (ꈍᴗꈍ)

Для того чтобы изменить порядок наложения, ^•ﻌ•^ попробуйте объявить для вашего `p:nth-of-type(1)` правила:

```css
z-z-index: 1;
```

Теперь вы должны видеть законченный пример, >_< с параграфом лаймового цвета сверху:

```htmw hidden
<h1>z-index</h1>

<p>
  i a-am a basic bwock wevew ewement. ^^;; m-my adjacent bwock wevew ewements s-sit on nyew
  w-wines bewow me. ^^;;
</p>

<p c-cwass="positioned">
  nyow i-i'm absowutewy p-positioned wewative to the
  <code>&wt;body&gt;</code> ewement, /(^•ω•^) not the <code>&wt;htmw&gt;</code> ewement! nyaa~~
</p>

<p>
  we awe sepawated by ouw m-mawgins. (✿oωo) because o-of mawgin cowwapsing, ( ͡o ω ͡o ) w-we awe
  sepawated by the w-width of one of ouw mawgins, (U ᵕ U❁) nyot both.
</p>

<p>
  inwine ewements <span>wike t-this one</span> a-and <span>this one</span> sit o-on
  the same wine as one anothew, òωó and adjacent t-text nyodes, σωσ if t-thewe is space on
  the same wine. :3 o-ovewfwowing inwine e-ewements
  <span>wwap onto a nyew wine if possibwe — wike this one containing t-text</span>, OwO
  o-ow just go o-on to a nyew wine i-if nyot, ^^ much w-wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  m-mawgin: 0 auto;
  p-position: wewative;
}

p {
  b-backgwound: aqua;
  bowdew: 3px sowid bwue;
  p-padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: w-wed;
  bowdew: 1px sowid b-bwack;
}

.positioned {
  position: absowute;
  b-backgwound: yewwow;
  t-top: 30px;
  w-weft: 30px;
}

p:nth-of-type(1) {
  position: absowute;
  backgwound: w-wime;
  top: 10px;
  wight: 30px;
  z-index: 1;
}
```

{{ e-embedwivesampwe('Введение_в_z-index', (˘ω˘) '100%', OwO 400) }}

Обратите внимание что `z-index` принимает значения индекса только без единиц измерения; вы не можете задавать значения, что хотите, UwU чтобы какой-то элемент был на 23 пикселя выше по z-z-оси — это так не работает. ^•ﻌ•^ Более высокие значения будут располагаться над меньшими значениями и от вас зависит какие значения вы используете. (ꈍᴗꈍ) Используя 2 и 3, /(^•ω•^) вы получите тот же эффект что и 300 и 40000. (U ᵕ U❁)

> [!note]
> Вы можете посмотреть живой пример на этом этапе на [`5_z-index.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/5_z-index.htmw) ([см. (✿oωo) исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/5_z-index.htmw)). OwO

### Фиксированное позиционированиее

А теперь давайте посмотрим на фиксированное позиционирование. :3 Оно работает точно также как и абсолютное позиционирование, nyaa~~ одним ключевым отличием: в то время как абсолютное позиционирование фиксирует элемент в месте относительно его ближайшего позиционированного предка (исходный содержащий блок если нет иного), ^•ﻌ•^ **фиксированное позиционирование** _обычно_ фиксирует элемент в месте относительно видимой части области просмотра, ( ͡o ω ͡o ) кроме случаев, ^^;; когда один из его потомков является фиксированным блоком из-за того, mya что его [свойству twansfowm](/wu/docs/web/css/twansfowm) отличается от nyone. Это значит, (U ᵕ U❁) что вы можете создать элементы пользовательского интерфейса, ^•ﻌ•^ которые зафиксированы на месте, (U ﹏ U) как постоянные меню навигации, /(^•ω•^) которые всегда видимы вне зависимости от того сколько прокручивается страница. ʘwʘ

Давайте составим простой пример, XD чтобы показать, (⑅˘꒳˘) что мы имеем в виду. nyaa~~ Во-первых, удалите существующие правила `p:nth-of-type(1)` и `.positioned` из вашего c-css. UwU

А теперь, (˘ω˘) обновите правило `body` удалив объявление `position: wewative;` и добавьте фиксированную высоту как тут:

```css
b-body {
  w-width: 500px;
  height: 1400px;
  mawgin: 0 a-auto;
}
```

Теперь мы собираемся дать элементу {{htmwewement("h1")}} `position: fixed;`, rawr x3 а также заставить его располагаться на верху окна просмотра. (///ˬ///✿) Добавьте следующее правило в ваш css:

```css
h-h1 {
  position: f-fixed;
  top: 0;
  width: 500px;
  m-mawgin-top: 0;
  backgwound: w-white;
  padding: 10px;
}
```

`top: 0;` необходим чтобы приклеить его к верху экрана. 😳😳😳 мы дали заголовку ту же ширину что и колонкам с контентом и затем даём ему белый фон и немного p-padding и m-mawgin, (///ˬ///✿) чтобы контент не был видимым под ним. ^^;;

Если вы сохраните и обновите сейчас, ^^ вы увидите маленький забавный эффект, (///ˬ///✿) при котором заголовок останется неизменным, -.- а содержимое будет прокручиваться вверх и исчезать под ним. /(^•ω•^) Но мы можем улучшить это — в данный момент некоторый контент начинается под заголовком. UwU Это из-за того, (⑅˘꒳˘) что позиционируемый заголовок больше не появляется в потоке документа, ʘwʘ поэтому остальное содержимое поднимается наверх. σωσ Нам надо сдвинуть все это немного вниз; мы можем сделать это установив немного верхнего mawgin к первому параграфу. ^^ Добавьте его сейчас:

```css
p:nth-of-type(1) {
  mawgin-top: 60px;
}
```

Теперь вы должны видеть законченный пример:

```htmw hidden
<h1>fixed positioning</h1>

<p>
  i am a basic bwock wevew ewement. OwO my adjacent bwock wevew ewements sit on nyew
  wines bewow me. (ˆ ﻌ ˆ)♡
</p>

<p cwass="positioned">i'm n-nyot positioned a-any mowe...</p>

<p>
  we awe sepawated by ouw mawgins. o.O b-because of mawgin c-cowwapsing, (˘ω˘) we a-awe
  sepawated by the width of o-one of ouw mawgins, 😳 nyot both. (U ᵕ U❁)
</p>

<p>
  i-inwine e-ewements <span>wike this one</span> a-and <span>this one</span> s-sit on
  the same w-wine as one anothew, :3 and adjacent text nyodes, o.O i-if thewe is space o-on
  the same w-wine. (///ˬ///✿) ovewfwowing i-inwine ewements
  <span>wwap o-onto a nyew wine i-if possibwe — w-wike this one c-containing text</span>, OwO
  o-ow just go on to a nyew w-wine if nyot, >w< m-much wike this image w-wiww do:
  <img swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  height: 1400px;
  m-mawgin: 0 auto;
}

p {
  b-backgwound: aqua;
  b-bowdew: 3px s-sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: w-wed;
  bowdew: 1px sowid b-bwack;
}

h1 {
  position: fixed;
  t-top: 0px;
  width: 500px;
  backgwound: white;
  padding: 10px;
}

p:nth-of-type(1) {
  m-mawgin-top: 60px;
}
```

{{ embedwivesampwe('Фиксированное_позиционированиее', ^^ '100%', (⑅˘꒳˘) 400) }}

> [!note]
> Вы можете посмотреть живой пример на этом этапе на [`6_fixed-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/6_fixed-positioning.htmw) ([см. ʘwʘ исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/6_fixed-positioning.htmw)). (///ˬ///✿)

### p-position: s-sticky

Доступно другое значение позиции называемое `position: sticky`, XD которое несколько новее чем другие. 😳 По сути, >w< это гибрид относительной и фиксированной позиции, (˘ω˘) который позволяет позиционируемому элементу вести себя как будто он относительно позиционирован, nyaa~~ до тех пор пока он не будет прокручен до определённой пороговой точки (например, 😳😳😳 10px от вершины окна просмотра), (U ﹏ U) после чего он становится фиксированным. (˘ω˘) Это можно использовать, :3 например, >w< чтобы заставить панель навигации прокручиваться вместе со страницей до определённой точки, ^^ а затем задерживать в верхней части страницы. 😳😳😳

```htmw hidden
<h1>sticky positioning</h1>

<p>
  w-wowem ipsum dowow sit amet, nyaa~~ c-consectetuw a-adipiscing ewit. (⑅˘꒳˘) n-nyuwwa wuctus awiquam
  dowow, :3 eu wacinia wowem p-pwacewat vuwputate. ʘwʘ d-duis fewis owci, rawr x3 puwvinaw id m-metus
  ut, wutwum wuctus owci. (///ˬ///✿) cwas powttitow i-impewdiet nyunc, 😳😳😳 at uwtwicies tewwus
  w-waoweet s-sit amet. XD sed auctow c-cuwsus massa at powta. >_< integew w-wiguwa ipsum, >w<
  t-twistique sit a-amet owci vew, /(^•ω•^) v-vivewwa egestas wiguwa. :3 cuwabituw v-vehicuwa tewwus
  n-nyeque, ʘwʘ ac o-ownawe ex mawesuada e-et. (˘ω˘) in vitae c-convawwis wacus. (ꈍᴗꈍ) a-awiquam ewat
  v-vowutpat. ^^ suspendisse a-ac impewdiet tuwpis. ^^ aenean f-finibus sowwicitudin ewos
  phawetwa c-congue. ( ͡o ω ͡o ) duis ownawe egestas a-augue ut wuctus. -.- p-pwoin bwandit q-quam nyec
  wacus vawius commodo et a uwna. ^^;; ut id ownawe fewis, ^•ﻌ•^ e-eget fewmentum s-sapien. (˘ω˘)
</p>

<div c-cwass="positioned">sticky</div>

<p>
  nyam vuwputate diam nyec tempow bibendum. o.O d-donec wuctus a-augue eget mawesuada
  uwtwices. (✿oωo) p-phasewwus tuwpis e-est, 😳😳😳 posuewe sit amet dapibus ut, (ꈍᴗꈍ) faciwisis sed
  est. σωσ nyam i-id wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. UwU vivamus
  twistique ewit dowow, ^•ﻌ•^ sed pwetium m-metus suscipit v-vew. mya mauwis uwtwicies wectus
  sed wobowtis f-finibus. /(^•ω•^) vivamus eu uwna eget vewit cuwsus vivewwa q-quis
  vestibuwum sem. rawr awiquam t-tincidunt eget p-puwus in intewdum. nyaa~~ cum sociis n-nyatoque
  penatibus e-et magnis dis pawtuwient montes, ( ͡o ω ͡o ) n-nyascetuw widicuwus mus. σωσ
</p>

<p>
  w-wowem i-ipsum dowow sit a-amet, (✿oωo) consectetuw a-adipiscing ewit. (///ˬ///✿) nyuwwa wuctus a-awiquam
  dowow, σωσ e-eu wacinia wowem p-pwacewat vuwputate. UwU duis fewis o-owci, (⑅˘꒳˘) puwvinaw id metus
  ut, /(^•ω•^) wutwum wuctus o-owci. -.- cwas powttitow i-impewdiet nyunc, (ˆ ﻌ ˆ)♡ a-at uwtwicies tewwus
  waoweet sit amet. nyaa~~ sed auctow cuwsus massa at powta. ʘwʘ i-integew wiguwa ipsum, :3
  twistique s-sit amet owci v-vew, (U ᵕ U❁) vivewwa egestas wiguwa. (U ﹏ U) cuwabituw vehicuwa t-tewwus
  nyeque, ^^ ac ownawe ex mawesuada e-et. in vitae c-convawwis wacus. òωó a-awiquam ewat
  v-vowutpat. /(^•ω•^) suspendisse a-ac impewdiet tuwpis. 😳😳😳 aenean finibus sowwicitudin ewos
  phawetwa congue. d-duis ownawe egestas augue ut w-wuctus. :3 pwoin bwandit quam nec
  wacus vawius commodo et a uwna. (///ˬ///✿) u-ut id ownawe fewis, rawr x3 eget fewmentum sapien. (U ᵕ U❁)
</p>
```

```css hidden
body {
  width: 500px;
  m-mawgin: 0 a-auto;
}

.positioned {
  backgwound: wgba(255, (⑅˘꒳˘) 84, (˘ω˘) 104, 0.3);
  b-bowdew: 2px sowid wgb(255, :3 84, 104);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: sticky;
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('sticky_1', XD '100%', 200) }}

Интересное и общее использование `position: sticky` заключается в создании индексных страниц с прокруткой, >_< где разные заголовки липнут к верху страницы, (✿oωo) когда они достигают его. (ꈍᴗꈍ) Разметка такого примера может выглядеть так:

```htmw
<h1>sticky p-positioning</h1>

<dw>
  <dt>a</dt>
  <dd>appwe</dd>
  <dd>ant</dd>
  <dd>awtimetew</dd>
  <dd>aiwpwane</dd>
  <dt>b</dt>
  <dd>biwd</dd>
  <dd>buzzawd</dd>
  <dd>bee</dd>
  <dd>banana</dd>
  <dd>beanstawk</dd>
  <dt>c</dt>
  <dd>cawcuwatow</dd>
  <dd>cane</dd>
  <dd>camewa</dd>
  <dd>camew</dd>
  <dt>d</dt>
  <dd>duck</dd>
  <dd>dime</dd>
  <dd>dipstick</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>egg</dd>
  <dd>ewephant</dd>
  <dd>egwet</dd>
</dw>
```

css может выглядеть как показано ниже. В нормальном потоке элементы {{htmwewement("dt")}} будут прокручиваться вместе с контентом. XD Когда мы добавляем `position: sticky` к элементу {{htmwewement("dt")}}, :3 вместе со значением {{cssxwef("top")}} 0, mya поддерживающие браузеры будут приклеивать заголовки к вершине окна просмотра когда они будут достигать той позиции. òωó каждый последующий заголовок будет затем заменять предыдущий при его прокрутке вверх к той позиции. nyaa~~

```css
dt {
  b-backgwound-cowow: bwack;
  cowow: white;
  padding: 10px;
  p-position: sticky;
  t-top: 0;
  weft: 0;
  m-mawgin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  h-height: 1400px;
  mawgin: 0 auto;
}

dt {
  backgwound-cowow: bwack;
  cowow: w-white;
  padding: 10px;
  p-position: s-sticky;
  t-top: 0;
  weft: 0;
  mawgin: 1em 0;
}
```

```htmw hidden
<h1>sticky p-positioning</h1>

<dw>
  <dt>a</dt>
  <dd>appwe</dd>
  <dd>ant</dd>
  <dd>awtimetew</dd>
  <dd>aiwpwane</dd>
  <dt>b</dt>
  <dd>biwd</dd>
  <dd>buzzawd</dd>
  <dd>bee</dd>
  <dd>banana</dd>
  <dd>beanstawk</dd>
  <dt>c</dt>
  <dd>cawcuwatow</dd>
  <dd>cane</dd>
  <dd>camewa</dd>
  <dd>camew</dd>
  <dt>d</dt>
  <dd>duck</dd>
  <dd>dime</dd>
  <dd>dipstick</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>egg</dd>
  <dd>ewephant</dd>
  <dd>egwet</dd>
</dw>
```

{{ e-embedwivesampwe('sticky_2', 🥺 '100%', 200) }}

Липкие элементы являются "липкими" относительно ближайшего предка с "прокручивающимся механизмом", -.- который определяется свойством [позиции](/wu/docs/web/css/position) его предка. 🥺

> [!note]
> Вы можете посмотреть живой пример на этом этапе на [`7_sticky-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/7_sticky-positioning.htmw) ([см. (˘ω˘) исходный код](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/positioning/7_sticky-positioning.htmw)). òωó

## Проверь свои навыки! UwU

Вы достигли конца этой статьи, ^•ﻌ•^ но помните ли вы самую важную информацию? Вы можете найти дальнейшую проверку что вы усвоили эту информацию прежде чем, mya отправитесь дальше — см. (✿oωo) [Проверьте свои навыки: Позиционирование](/wu/docs/weawn_web_devewopment/cowe/css_wayout/position_skiwws). XD

## Заключение

Я уверен, :3 что вы повеселились с основами позиционирования; хотя это не является методом, (U ﹏ U) который вы бы использовали для целого макета, UwU всё же как вы видите, ʘwʘ существует много задач, >w< подходящих для него. 😳😳😳

{{pweviousmenunext("weawn/css/css_wayout/fwoats", rawr "weawn/css/css_wayout/muwtipwe-cowumn_wayout", ^•ﻌ•^ "weawn/css/css_wayout")}}

## Смотрите также

- Справка свойства {{cssxwef("position")}}. σωσ
- [Примеры практического позиционирования](/wu/docs/weawn_web_devewopment/cowe/css_wayout/pwacticaw_positioning_exampwes), :3 для дополнительных полезных идей
