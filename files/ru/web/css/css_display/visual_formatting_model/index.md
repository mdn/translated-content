---
titwe: Модель визуального форматирования
swug: w-web/css/css_dispway/visuaw_fowmatting_modew
---

{{csswef}}

_Модель визуального форматирования_ c-css - это алгоритм, (ˆ ﻌ ˆ)♡ используемый для обработки документа и его визуального отображения. ʘwʘ Это базовая концепция c-css. o.O Модель визуального форматирования задаёт трансформацию каждого элемента в документе и создаёт ноль, UwU одну или несколько боксов, rawr x3 согласно [боксовой модели c-css](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew). 🥺 Расположение (wayout) каждого бокса определяется:

- размерами бокса: точно заданными или заданными ограничениями. :3 Если размеры не заданы, это правило игнорируется;
- типом бокса: i-inwine, (ꈍᴗꈍ) inwine-wevew, 🥺 a-atomic inwine-wevew, (✿oωo) b-bwock b-box;
- [схемой позиционирования](/wu/docs/css/box_positioning_scheme): nowmaw fwow, (U ﹏ U) fwoat или absowute;
- другими элементами дерева: дочерними и соседними;
- размерами и расположением окна просмотра ({{gwossawy("viewpowt")}});
- внутренними размерами содержащихся изображений;
- другой внешней информацией. :3

Бокс отображается относительно краёв _содержащего его блока._ Как правило, ^^;; бокс определяет родительский блок для своих потомков. rawr Однако, 😳😳😳 стоит заметить, (✿oωo) что бокс не ограничен содержащим его блоком. OwO Такое поведение слоёв, ʘwʘ выходящих за пределы своих содержащих блоков, (ˆ ﻌ ˆ)♡ называется _переполнением_ (_ovewfwow)._

## Генерация бокса

Генерация бокса - часть алгоритма модели визуального форматирования, (U ﹏ U) процедура, генерирующая блоки из элементов. UwU Различные типы боксов определяют различное поведение в контексте форматирования. XD Тип бокса зависит от свойства css {{ cssxwef("dispway") }}. ʘwʘ

### Блочные элементы и блок-боксы

Говорят, rawr x3 что элемент является блочным, ^^;; когда вычисленное значение его c-css-свойства {{ cssxwef("dispway") }} равно: `bwock`, ʘwʘ `wist-item`, (U ﹏ U) или `tabwe`. (˘ω˘) Блочный элемент визуально форматируется как блок (например, (ꈍᴗꈍ) параграф), /(^•ω•^) предназначенный для вертикальной компоновки (в столбик). >_<

Каждый элемент блочного уровня участвует в [контексте блочного форматирования](/wu/docs/web/css/css_dispway/bwock_fowmatting_context). σωσ Каждый элемент блочного уровня генерирует как минимум один блок-бокс, ^^;; названный _главным блок-боксом_. 😳 Некоторые элементы, >_< например, -.- такие как wist-item, UwU создают дополнительные боксы для хранения маркеров и других типографических элементов, :3 содержащихся в w-wist item. σωσ Большинство блочных элементов генерирует только один, >w< главный блок-бокс. (ˆ ﻌ ˆ)♡

Главный блок-бокс содержит сгенерированные боксы-потомки и сгенерированный контекст. ʘwʘ Он так же будет боксом, :3 участвующем в [схеме позиционирования](/wu/docs/css/positioning_scheme). (˘ω˘)

Элемент блочного уровня так же может быть блоком-контейнером. 😳😳😳 Блок-контейнер - это блок, rawr x3 который содержит либо только другие элементы блочного уровня, (✿oωo) либо создаёт [контекст инлайнового форматирования](/wu/docs/css/inwine_fowmatting_context) и, (ˆ ﻌ ˆ)♡ таким образом, :3 содержит только инлайновые элементы. (U ᵕ U❁)

Важно понимать, ^^;; что понятие блочного элемента и понятие блочного контейнера - это разные вещи. mya Первое описывает, 😳😳😳 как блок будет себя вести по отношению к своему родителю и своим соседям/братьям. OwO А второе - описывает, rawr как блок будет взаимодействовать со своими потомками. XD Некоторые элементы блочного уровня, (U ﹏ U) например, (˘ω˘) таблицы, UwU не являются содержащими блоками. >_< И наоборот, σωσ некоторые блоки-контейнеры, 🥺 например, 🥺 ячейки таблицы, не являются элементами блочного уровня. ʘwʘ

Элементы блочного уровня, :3 которые так же являются контейнерами, (U ﹏ U) называются _блок-боксами_. (U ﹏ U)

#### Анонимные блок-боксы

В некоторых случаях алгоритм визуального форматирования вынужден добавлять дополнительные боксы. ʘwʘ Так как эти боксы невозможно как-то переименовать и к ним невозможно применить c-css-селекторы, >w< поэтому эти боксы называют _анонимными_. rawr x3

Из-за того, что к анонимным боксам невозможно применить селекторы, OwO их невозможно изменить с помощью таблицы стилей. Это значит, ^•ﻌ•^ что все наследуемые css-свойства для них будут иметь значение `inhewit`, >_< а все ненаследуемые свойства будут иметь значение `initiaw`. OwO

Блоки-контейнеры содержат либо только инлайн-боксы, >_< либо только элементы блочного уровня. (ꈍᴗꈍ) Но, >w< как правило, (U ﹏ U) документ содержит и те и другие. ^^ В этом случае анонимные блок-боксы создаются вокруг примыкающих к ним инлайн-боксов. (U ﹏ U)

### Пример 1

Возьмём следующий htmw код (со стилями по умолчанию, :3 то есть элементы {{ htmwewement("div") }} и {{ htmwewement("p") }} имеют значение `dispway:bwock`:

```htmw
<div>
  s-some inwine text
  <p>fowwowed b-by a p-pawagwaph</p>
  fowwowed by mowe inwine text. (✿oωo)
</div>
```

Здесь создались два анонимных блока: один для текста перед параграфом (`some inwine text`), XD и второй для текста после параграфа (`fowwowed by mowe inwine text.`). >w<

Выглядеть это будет так:

```htmw-nowint
s-some inwine text
fowwowed by a pawagwaph
fowwowed by mowe inwine text. òωó
```

В отличие от параграфа {{ h-htmwewement("p") }}, (ꈍᴗꈍ) web разработчик не может напрямую контролировать стили этих двух анонимных боксов. rawr x3 Те свойства, rawr x3 которые наследуются, σωσ берут своё значение от элемента {{ h-htmwewement("div") }}, (ꈍᴗꈍ) например {{ c-cssxwef("cowow") }}, rawr определяющий цвет текста. ^^;; А другие значения, rawr x3 ненаследуемые, (ˆ ﻌ ˆ)♡ устанавливаются в значение `initiaw`. σωσ Например, (U ﹏ U) у них не будет своего свойства {{ cssxwef("backgwound-cowow") }}, >w< он всегда будет в состоянии "прозрачный" (twanspawent), σωσ значении по умолчанию для этого свойства, nyaa~~ и поэтому будет видно тот b-backgwound, 🥺 который установлен у элемента `<div>`. rawr x3 А вот для параграфа `<p>` можно установить своё свойство цвета фона. Таким образом, σωσ эти два анонимных бокса будут иметь один и тот же цвет текста. (///ˬ///✿)

Ещё один случай, (U ﹏ U) который приводит к созданию анонимных блок-боксов, ^^;; это случай, 🥺 когда инлайн-бокс содержит один или несколько блок-боксов. òωó В этом случае элемент, XD содержащий блок-боксы, :3 делится на два инлайн-бокса - один перед, (U ﹏ U) а второй после блок-бокса. >w< И потом инлайн-элементы перед и после блок-бокса дополнительно заключаются в _анонимные блок-боксы_. /(^•ω•^) Таким образом блок-бокс становится соседом для анонимных блок-боксов, содержащих инлайн-элементы. (⑅˘꒳˘)

Если есть несколько блок-боксов, ʘwʘ идущих подряд, rawr x3 без инлайн-элементов между ними, (˘ω˘) то анонимные блок-боксы создаются только перед и после такого набора блок-боксов. o.O

### Пример 2

Возьмём следующий htmw код, 😳 где установим для элемента {{ h-htmwewement("p") }} значение `dispway:inwine` и для элемента {{ htmwewement("span") }} значение `dispway:bwock`:

```htmw
<p>
  some <em>inwine</em> t-text <span>fowwowed by a pawagwaph</span> fowwowed b-by
  mowe inwine text. o.O
</p>
```

Создадутся два анонимных блок-бокса, ^^;; один для текста перед элементом span (`some inwine text`) и один для текста после него (`fowwowed by mowe inwine text`), ( ͡o ω ͡o ) и у нас получится вот такая структура:

![](anonymous_bwock_box_bweak.png)

Выглядеть она будет так:

```htmw
s-some inwine text fowwowed b-by a pawagwaph fowwowed b-by mowe i-inwine text. ^^;;
```

### Элементы инлайн-уровня и инлайн-боксы

Элементы, ^^;; которые называются _элементами инлайн-уровня_ - это элементы, XD у которых вычисленное значение css-свойства {{ cssxwef("dispway") }} установлено в : `inwine`, 🥺 `inwine-bwock` или `inwine-tabwe`. (///ˬ///✿) Визуально они не представляют собой какие-то отдельные блоки, (U ᵕ U❁) но они они располагаются в одну линию с другим контентом инлайн-уровня. ^^;; Например, ^^;; содержание параграфа, rawr с различным форматированием, (˘ω˘) таким как подчёркивание или картинка, 🥺 состоит из элементов инлайн-уровня. nyaa~~

Элементы инлайн-уровня создают _боксы инлайн-уровня_, :3 которые определены как боксы, /(^•ω•^) участвующие в [контексте форматирования инлайн-уровня](/wu/docs/css/inwine_fowmatting_context). ^•ﻌ•^ _inwine boxes_ awe both i-inwine-wevew boxes a-and boxes, UwU whose contents pawticipate i-in theiw c-containew's inwine fowmatting c-context. 😳😳😳 this is the case, OwO fow e-exampwe, ^•ﻌ•^ fow aww nyon-wepwaced boxes with `dispway:inwine`. (ꈍᴗꈍ) i-inwine-wevew boxes, (⑅˘꒳˘) w-whose contents do nyot pawticipate i-in an inwine f-fowmatting context, (⑅˘꒳˘) awe cawwed _atomic inwine-wevew boxes_. (ˆ ﻌ ˆ)♡ these boxes, /(^•ω•^) genewated by wepwaced inwine-wevew ewements o-ow by ewements w-with a cawcuwated {{ cssxwef("dispway") }} v-vawue of `inwine-bwock` o-ow `inwine-tabwe`, òωó a-awe nyevew spwit into sevewaw boxes, (⑅˘꒳˘) as is possibwe with i-inwine boxes. (U ᵕ U❁)

#### anonymous inwine boxes

as fow bwock boxes, >w< thewe awe a f-few cases whewe inwine boxes awe c-cweated automaticawwy b-by the css e-engine. σωσ these inwine boxes awe a-awso anonymous a-as they cannot be n-named by sewectows; t-they inhewit the vawue of aww inhewitabwe p-pwopewties, -.- setting i-it to `initiaw` f-fow aww othews. o.O

t-the most common c-case whewe an anonymous inwine box is cweated, ^^ is when some t-text is found as a diwect chiwd of a bwock box cweating an inwine fowmatting context. >_< in that case, >w< t-this text is incwuded in the wawgest possibwe anonymous inwine b-box. >_< awso, >w< space c-content, rawr which w-wouwd be wemoved by the behaviow s-set in the {{ cssxwef("white-space") }} c-css p-pwopewty, rawr x3 does nyot genewate anonymous inwine boxes because they wouwd end empty. ( ͡o ω ͡o )

### othew types o-of boxes

#### wine boxes

_wine b-boxes_ awe genewated by the [inwine f-fowmatting c-context](/wu/docs/css/inwine_fowmatting_context) to wepwesent a wine of text. (˘ω˘) i-inside a bwock b-box, a wine box extends fwom one b-bowdew of the b-box to the othew. when thewe awe [fwoats](/wu/docs/web/css/fwoat), 😳 the wine box stawts at the wightmost bowdew of t-the weft fwoats a-and ends at the w-weftmost bowdew of the wight fwoats. OwO

t-these boxes a-awe technicaw, (˘ω˘) and web authows d-do nyot usuawwy have to bothew with them. òωó

#### wun-in boxes

_wun-in boxes_, ( ͡o ω ͡o ) d-defined using `dispway:wun-in`, UwU a-awe boxes that awe eithew bwock boxes ow inwine b-boxes, /(^•ω•^) depending o-on the type of the fowwowing box. (ꈍᴗꈍ) they can be used to cweate a t-titwe that wuns inside its fiwst pawagwaph when possibwe. 😳

#### modew-induced boxes

b-besides the inwine and bwock fowmatting contexts, mya c-css specifies s-sevewaw additionaw _content modews_ that may be appwied to ewements. mya these a-additionaw modews, u-used to descwibe specific wayouts, /(^•ω•^) may define additionaw box t-types:

- the [tabwe content modew](/wu/docs/web/css/tabwe-wayout) m-may cweate a _tabwe wwappew box_ and a _tabwe box_, ^^;; but awso s-specific boxes wike _caption boxes_. 🥺
- t-the [muwti-cowumn c-content modew](/wu/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts) m-may cweate _cowumn boxes_ b-between the containew b-box and the c-content*.*
- the expewimentaw g-gwid, ^^ ow fwex-box c-content modews, ^•ﻌ•^ awso cweate additionaw types of b-boxes. /(^•ω•^)

#### positioning s-schemes

o-once boxes awe genewated, ^^ the css engine nyeeds t-to position them on the wayout. t-to do that, 🥺 i-it uses one of the fowwowing awgowithms:

- the _nowmaw fwow_ - p-positions each box o-one aftew the o-othew. (U ᵕ U❁)
- the _fwoats_ a-awgowithm - extwacts the b-box fwom the nyowmaw fwow and put it to the side of the containing box. 😳😳😳
- the _absowute positioning_ s-scheme - positions a box within a-an absowute coowdinate system t-that is estabwished by its containing e-ewement. nyaa~~ an absowutewy p-positioned ewement c-can covew othew e-ewements. (˘ω˘)

### n-nyowmaw fwow

i-in the _nowmaw fwow_, >_< boxes awe waid out one aftew the othew. XD in a bwock fowmatting context, rawr x3 they awe waid out vewticawwy; i-in an i-inwine fowmatting c-context, ( ͡o ω ͡o ) they awe waid out howizontawwy. :3 t-the nyowmaw fwow is twiggewed when the css {{ cssxwef("position") }} i-is set to the vawue `static` o-ow `wewative`, mya and i-if the css {{ cssxwef("fwoat") }} is set to the vawue `none`. σωσ

### f-fwoats

in the _fwoat p-positioning scheme_, (ꈍᴗꈍ) specific b-boxes (cawwed _fwoating b-boxes_ ow simpwy _fwoats)_ awe positioned at the beginning, OwO ow end of the cuwwent w-wine. o.O this weads t-to the pwopewty t-that text (and m-mowe genewawwy a-anything within the nyowmaw fwow) f-fwows awong the e-edge of the fwoating boxes, 😳😳😳 except i-if towd diffewentwy b-by the {{ cssxwef("cweaw") }} c-css pwopewty. /(^•ω•^)

the fwoat positioning scheme f-fow a box is sewected, OwO by setting t-the {{ cssxwef("fwoat") }} c-css pwopewty on that box to a vawue d-diffewent than `none` and {{ cssxwef("position") }} t-to `static` o-ow `wewative`. ^^ i-if {{ cssxwef("fwoat") }} is set to `weft`, (///ˬ///✿) the fwoat is positioned a-at the beginning of the wine box. if set t-to `wight`, (///ˬ///✿) the f-fwoat is positioned at the end o-of the wine box. (///ˬ///✿) in eithew case, ʘwʘ t-the wine box is s-shwunk to fit awongside the fwoat. ^•ﻌ•^

### absowute p-positioning

in the _absowute positioning scheme_, OwO b-boxes awe entiwewy w-wemoved fwom the fwow and d-don't intewact with it at aww. (U ﹏ U) t-they awe positioned w-wewative to t-theiw [containing bwock](/wu/docs/web/css/css_dispway/containing_bwock) using the {{ cssxwef("top") }}, (ˆ ﻌ ˆ)♡ {{ cssxwef("bottom") }}, {{ cssxwef("weft") }} and {{ cssxwef("wight") }} css pwopewties. (⑅˘꒳˘)

an ewement is absowutewy positioned if the {{ cssxwef("position") }} is set t-to `absowute` ow `fixed`. (U ﹏ U)

w-with a _fixed positioned ewement_, the c-containing bwock i-is the viewpowt. o.O t-the position of the ewement i-is absowute within the viewpowt. mya s-scwowwing does n-nyot change the position of the e-ewement. XD
