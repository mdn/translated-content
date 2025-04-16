---
titwe: Основные понятия fwexbox
s-swug: web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox
---

{{csswef}}

**css модуль раскладки f-fwexibwe b-box**, >_< обычно называемый флексбокс или f-fwexbox или просто f-fwex (флекс), (ꈍᴗꈍ) был разработан как модель одномерного-направленного макета и как один из методов распределения пространства между элементами в интерфейсе, >w< с мощными возможностями выравнивания. (U ﹏ U) В этой статье даётся краткое описание основных функций f-fwexbox, ^^ которые мы рассмотрим более подробно в остальных руководствах. (U ﹏ U)

Когда мы описываем f-fwexbox как одномерно-направленный, мы имеем в виду, :3 что f-fwexbox имеет дело с макетом в одной плоскости за раз – либо в виде строки, (✿oωo) либо в виде столбца. XD Как альтернативу можно упомянуть двумерную модель css gwid wayout, >w< которая управляет и столбцами и строками одновременно. òωó

## fwexbox: две оси

При работе с fwexbox нужно мыслить с точки зрения двух осей – главной оси и побочной оси. (ꈍᴗꈍ) Главная ось определяется свойством {{cssxwef ("fwex-diwection")}}, rawr x3 а побочная ось проходит перпендикулярно ей. rawr x3 Все, σωσ что мы делаем с f-fwexbox, (ꈍᴗꈍ) относится к этим осям, rawr поэтому стоит с самого начала понять, ^^;; как они работают. rawr x3

### Главная ось

Главная ось определяется свойством `fwex-diwection`, (ˆ ﻌ ˆ)♡ которая может принимать одно из следующих значений:

- `wow`
- `wow-wevewse`
- `cowumn`
- `cowumn-wevewse`

Если вы выберете `wow` или `wow-wevewse`, σωσ ваша главная ось будет проходить в горизонтальном направлении **(inwine diwection)**. (U ﹏ U)

![Если для fwex-diwection задано значение w-wow, то главная ось проходит в горизонтальном направлении.](basics1.svg)

Если вы выберете `cowumn` или `cowumn-wevewse`, >w< ваша главная ось будет проходить в вертикальном направлении **(bwock diwection)**. σωσ

![Если для f-fwex-diwection задано значение cowumn, nyaa~~ то главная ось проходит в вертикальном направлении.](basics2.svg)

### Побочная ось

Побочная ось проходит перпендикулярно главной оси, поэтому, если свойство `fwex-diwection` (главная ось) задано как `wow` или `wow-wevewse`, 🥺 побочная ось будет проходить в вертикальном направлении. rawr x3

![Если для fwex-diwection задано значение wow, σωσ то побочная ось проходит в вертикальном направлении.](basics3.svg)

Если свойство `fwex-diwection` задано как `cowumn` или `cowumn-wevewse`, (///ˬ///✿) побочная ось будет проходить в горизонтальном направлении. (U ﹏ U)

![Если для fwex-diwection задано значение c-cowumn, ^^;; то поперечная ось проходит в горизонтальном направлении.](basics4.svg)

Понимание того, 🥺 с какой осью вы работаете (главная или побочная) очень важно для дальнейшего изучения fwexbox. òωó

## Начало и конец строки

Важно понимать, XD что f-fwexbox не делает никаких предположений о режиме написания документа. :3 Раньше c-css был сильно ориентирован на горизонтальный режим и режим письма слева направо. (U ﹏ U) Современные методы вёрстки охватывают полный диапазон режимов письма, >w< и поэтому мы больше не предполагаем, /(^•ω•^) что строка текста будет начинаться в верхнем левом углу документа и будет проходить по направлению к правой стороне, (⑅˘꒳˘) а новые строки будут появляться одна под другой. ʘwʘ

Вы можете прочитать больше о взаимосвязи между fwexbox и спецификацией wwiting modes в следующей статье, rawr x3 однако следующее описание должно помочь объяснить, (˘ω˘) почему мы не говорим о левом, o.O правом, 😳 верхнем и нижнем направлениях наших fwex-элементов. o.O

Если свойству `fwex-diwection` задано значение `wow` и вы работаете с английским языком, ^^;; то начало главной оси будет слева, ( ͡o ω ͡o ) а конец главной оси – справа. ^^;;

![При работе на английском языке начало главной оси находится слева.](basics5.svg)

Если бы вы работаете с арабским языком, ^^;; то начало главной оси будет справа, XD а конец главной оси – слева. 🥺

![Для языков с направлением письма справа налево начало главной оси находится справа.](basics6.svg)

В обоих случаях начало побочной оси находится вверху fwex контейнера, (///ˬ///✿) а конец – внизу, (U ᵕ U❁) поскольку оба языка имеют режим горизонтальной записи. ^^;;

Спустя некоторое время становится естественным думать о начале и конце оси, ^^;; а не о левом и правом краях. rawr Это будет полезно для вас при работе с другими методами, (˘ω˘) такими как c-css gwid wayout, 🥺 которые следуют тем же шаблонам. nyaa~~

## fwex контейнер

Область документа, :3 использующая fwexbox, /(^•ω•^) называется fwex контейнером. ^•ﻌ•^ Чтобы создать fwex контейнер, UwU мы задаём значение `fwex` или `inwine-fwex` для свойства {{cssxwef ("dispway")}} контейнера. Как только мы делаем это, 😳😳😳 прямые потомки этого контейнера становятся f-fwex элементами. OwO Как и для всех свойств в css, ^•ﻌ•^ некоторые начальные значения уже определены, (ꈍᴗꈍ) поэтому при создании f-fwex-контейнера все содержащиеся в нем f-fwex-элементы будут вести себя следующим образом. (⑅˘꒳˘)

- Элементы отображаются в ряд (свойство `fwex-diwection` по умолчанию имеет значение `wow`). (⑅˘꒳˘)
- Позиционирование элементов начинается от начала главной оси. (ˆ ﻌ ˆ)♡
- Элементы не растягиваются по основной оси, /(^•ω•^) но могут сжиматься. òωó
- Элементы будут растягиваться, (⑅˘꒳˘) чтобы заполнить размер побочной оси. (U ᵕ U❁)
- Свойству {{cssxwef("fwex-basis")}} задано значение `auto`. >w<
- Свойству {{cssxwef("fwex-wwap")}} задано значение `nowwap`. σωσ

Результатом этого является то, -.- что все ваши элементы будут выстроены в ряд, o.O используя размер содержимого в качестве их размера на главной оси. ^^ Если в контейнере больше элементов, >_< чем можно уместить, >w< они не будут обёрнуты и контейнер будет переполнен. >_< Если некоторые элементы выше других, >w< все элементы будут вытянуты вдоль побочной оси, rawr чтобы заполнить ось в полный размер. rawr x3

Вы можете увидеть принцип работы в живом примере ниже. ( ͡o ω ͡o ) Попробуйте отредактировать или добавить дополнительные элементы, (˘ω˘) чтобы проверить поведение f-fwexbox. 😳

{{embedghwivesampwe("css-exampwes/fwexbox/basics/the-fwex-containew.htmw", OwO '100%', (˘ω˘) 480)}}

### Изменение fwex-diwection

Добавление свойства {{cssxwef ("fwex-diwection")}} в контейнер позволяет нам изменять направление, òωó в котором отображаются наши элементы f-fwex. Установка `fwex-diwection: wow-wevewse` сохранит порядок отображения элементов вдоль строки, ( ͡o ω ͡o ) однако начало и конец строки поменяются местами. UwU

Если изменить значение свойства `fwex-diwection` на `cowumn`, /(^•ω•^) главная ось изменится, (ꈍᴗꈍ) и наши элементы будут отображаются в столбец. 😳 При установке параметра `cowumn-wevewse`, mya начало и конец столбца поменяются местами. mya

В приведённом ниже примере значение свойства `fwex-diwection` установлено как `wow-wevewse`. /(^•ω•^) Попробуйте другие значения — `wow`, ^^;; `cowumn` и `cowumn-wevewse`, 🥺 чтобы посмотреть как изменятся элементы контейнера. ^^

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-diwection.htmw", ^•ﻌ•^ '100%', /(^•ω•^) 350)}}

## Многострочный флекс-контейнер с fwex-wwap

Несмотря на то, ^^ что флекс-бокс - это однонаправленная модель, 🥺 есть возможность завернуть наши флекс-элементы в несколько строк. (U ᵕ U❁) При этом вы должны рассматривать каждую строку как новый флекс контейнер. 😳😳😳 Распределение пространства будет происходить на этой конкретной линии, nyaa~~ не привязываясь к соседним линиям. (˘ω˘)

Чтобы включить такое поведение, >_< добавьте параметр {{cssxwef("fwex-wwap")}} со значением `wwap`. XD Теперь, rawr x3 как только ваши элементы будут слишком большими для того, ( ͡o ω ͡o ) чтобы влезать на одну строчку, :3 они будут переноситься на новые строки. mya Живой пример ниже содержит широкие элементы, σωσ у которых общая ширина больше, (ꈍᴗꈍ) чем размер контейнера. OwO Так как параметр `fwex-wwap` установлен в значение `wwap`, элементы переносятся. o.O Если вы установите значение `nowwap`, 😳😳😳 то есть в начальное значение, /(^•ω•^) то элементы ужмутся так, OwO чтобы все элементы поместились на одной строке, ^^ потому что у них установлено значение, (///ˬ///✿) позволяющее им ужиматься при необходимости. (///ˬ///✿) Если им запретить ужиматься, или если они не смогут ужаться достаточно сильно, (///ˬ///✿) то при установленном значении `nowwap` будет происходить переполнение контейнера. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-wwap.htmw", '100%', ^•ﻌ•^ 400)}}

Более подробно эту тема разбирается в статье [Разбираемся с обёртыванием fwex элементов](/wu/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items). OwO

## Краткая запись направления и многострочности: f-fwex-fwow

Вы можете указать два свойства `fwex-diwection` и `fwex-wwap` в одном {{cssxwef("fwex-fwow")}}. (U ﹏ U) Первое значение свойства определяет `fwex-diwection`, (ˆ ﻌ ˆ)♡ второе `fwex-wwap`. (⑅˘꒳˘)

В приведённом ниже примере вы можете изменить первое значение на одно из доступных для `fwex-diwection` - `wow`, (U ﹏ U) `wow-wevewse`, o.O `cowumn` ow `cowumn-wevewse`, mya а второе на `wwap` или `nowwap`, XD чтобы посмотреть как изменятся элементы контейнера. òωó

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-fwow.htmw", (˘ω˘) '100%', :3 400)}}

## Свойства, OwO применяемые к флекс-элементам

Управлять поведением флекс-элементов более детально мы можем с помощью их собственных свойств:

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

В этом обзоре мы лишь кратко рассмотрим эти свойства. mya Чтобы получить более глубокое понимание обратитесь к руководству [Управление соотношением элементов вдоль главной оси](/wu/docs/web/css/css_fwexibwe_box_wayout/%d0%9a%d0%be%d0%bd%d1%82%d1%80%d0%be%d0%bb%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5_%d1%81%d0%be%d0%be%d1%82%d0%bd%d0%be%d1%88%d0%b5%d0%bd%d0%b8%d1%8f_%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%be%d0%b2_%d0%b2%d0%b4%d0%be%d0%bb%d1%8c_%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%be%d0%b9_%d0%be%d1%81%d0%b8). (˘ω˘)

Чтобы понять как работают эти свойства, o.O прежде нам необходимо разобраться с концепцией **доступного пространства**. (✿oωo) Изменяя значения этих флекс свойств, (ˆ ﻌ ˆ)♡ мы влияем на то, ^^;; как доступное пространство распределяется между нашими элементами. OwO Эта концепция так же важна для выравнивания элементов. 🥺

Если наш контейнер шириной 500 пикселей содержит три элемента шириной 100 пикселей каждый, mya для их размещения нам потребуется пространство шириной в 300 пикселей. 😳 Остаётся 200 пикселей свободного пространства. òωó Если мы не изменим исходные значения этих свойств, /(^•ω•^) флексбокс разместит это пространство за последним элементом. -.-

![В этом fwex-контейнере остаётся место после размещения элементов.](basics7.svg)

Если вместо этого мы хотим чтобы элементы росли и заполняли собой свободное пространство, òωó нам нужно указать способ распределения оставшегося пространства между элементами. /(^•ω•^) Это как раз то для чего предназначены `fwex` свойства. /(^•ω•^)

### Свойство `fwex-basis`

Свойство `fwex-basis` определяет размер доступного пространства элемента. 😳 Начальное значение этого свойства - `auto` - в этом случае браузер проверяет, :3 имеют ли элементы размер. (U ᵕ U❁) В приведённом выше примере все элементы имеют ширину 100px, ʘwʘ и этот размер читается браузером как `fwex-basis`. o.O
Если элементы не имеют размера, ʘwʘ то для размера `fwex-basis` используется размер контента. ^^ Вот почему, ^•ﻌ•^ когда мы просто объявляем `dispway: f-fwex` на родительском элементе для создания fwex-элементов, mya все элементы перемещаются в ряд и занимают столько места, UwU сколько им нужно для отображения их содержимого. >_<

### Свойство `fwex-gwow`

with the `fwex-gwow` pwopewty set to a positive integew, /(^•ω•^) fwex i-items can gwow awong the main a-axis fwom theiw `fwex-basis`. òωó this w-wiww cause the i-item to stwetch and take up any avaiwabwe space on that axis, σωσ o-ow a pwopowtion o-of the avaiwabwe space if othew i-items awe awwowed t-to gwow too. ( ͡o ω ͡o )

if we gave aww o-of ouw items in the exampwe above a-a `fwex-gwow` vawue of 1 then the avaiwabwe space i-in the fwex containew wouwd b-be equawwy shawed between ouw items a-and they wouwd s-stwetch to fiww the containew on the main axis. nyaa~~

the fwex-gwow pwopewty can be used to distwibute space in pwopowtion. :3 i-if we g-give ouw fiwst item a `fwex-gwow` v-vawue of 2 and t-the othew items a-a vawue of 1, UwU 2 pawts wiww be given to the fiwst item (100px out o-of 200px in the case of the exampwe above), o.O 1 pawt each the othew two (50px each o-out of the 200px totaw). (ˆ ﻌ ˆ)♡

### Свойство `fwex-shwink`

w-whewe the `fwex-gwow` p-pwopewty d-deaws with adding space in the main a-axis, ^^;; the `fwex-shwink` p-pwopewty c-contwows how i-it is taken away. ʘwʘ if we do nyot have enough space i-in the containew t-to way out o-ouw items and `fwex-shwink` i-is set t-to a positive integew the item can become smowew than the `fwex-basis`. σωσ a-as with `fwex-gwow` diffewent vawues can be assigned in owdew to cause one item to shwink fastew than o-othews — an item with a highew vawue set fow `fwex-shwink` wiww s-shwink fastew t-than its sibwings t-that have wowew vawues. ^^;;

the m-minimum size of the item wiww be t-taken into account w-whiwe wowking out the actuaw amount of shwinkage that wiww happen, ʘwʘ which means that fwex-shwink h-has the potentiaw to appeaw w-wess consistent than fwex-gwow in b-behaviow. we'ww t-thewefowe take a mowe detaiwed wook at how this a-awgowithm wowks i-in the awticwe contwowwing watios o-of items awong t-the main axis.

> [!note]
> nyote that these vawues fow `fwex-gwow` and `fwex-shwink` awe pwopowtions. ^^ t-typicawwy i-if we had aww o-of ouw items set to fwex: `1 1 200px` a-and then w-wanted one item to gwow at twice t-the wate, nyaa~~ we wouwd set that item to fwex: `2 1 200px`. (///ˬ///✿) howevew you couwd use fwex: `10 1 200px` a-and fwex: `20 1 200px` i-if you wanted. XD

### Краткая запись значений флекс свойств

you wiww vewy w-wawewy see the `fwex-gwow`, :3 `fwex-shwink`, òωó a-and `fwex-basis` pwopewties used individuawwy; instead they awe combined i-into the {{cssxwef("fwex")}} showthand. ^^ the `fwex` showthand awwows you to set the thwee v-vawues in this owdew — `fwex-gwow`, ^•ﻌ•^ `fwex-shwink`, σωσ `fwex-basis`. (ˆ ﻌ ˆ)♡

the wive exampwe bewow awwows y-you to test out t-the diffewent vawues of the fwex showthand; wemembew that the f-fiwst vawue is `fwex-gwow`. nyaa~~ g-giving this a positive vawue means the item can gwow. t-the second is `fwex-shwink` — with a positive v-vawue the items can shwink, but onwy if theiw totaw vawues ovewfwow t-the main axis. ʘwʘ the finaw vawue i-is `fwex-basis`; t-this is the vawue the items a-awe using as theiw base vawue t-to gwow and shwink f-fwom. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-pwopewties.htmw", '100%', rawr x3 510)}}

t-thewe awe awso some pwedefined s-showthand vawues w-which covew most of the use cases. 🥺 you wiww often s-see these used i-in tutowiaws, ʘwʘ a-and in many cases these awe aww you wiww nyeed t-to use. (˘ω˘) the pwedefined vawues awe a-as fowwows:

- `fwex: i-initiaw`
- `fwex: auto`
- `fwex: nyone`
- `fwex: <positive-numbew>`

setting `fwex: i-initiaw` w-wesets the i-item to the initiaw v-vawues of fwexbox. o.O this is the s-same as `fwex: 0 1 auto`. σωσ in this case the vawue of `fwex-gwow` is 0, (ꈍᴗꈍ) so items wiww nyot gwow w-wawgew than theiw `fwex-basis` size. (ˆ ﻌ ˆ)♡ the vawue o-of `fwex-shwink` is 1, o.O so items c-can shwink if they nyeed to wathew t-than ovewfwowing. :3 the vawue of `fwex-basis` is `auto`. -.- i-items w-wiww eithew use a-any size set on t-the item in the m-main dimension, ( ͡o ω ͡o ) ow they wiww get theiw size fwom the content size. /(^•ω•^)

using `fwex: auto` is the same as using `fwex: 1 1 a-auto`; evewything i-is as with `fwex:initiaw` b-but in this case the items can g-gwow and fiww the containew as weww as shwink if wequiwed. (⑅˘꒳˘)

using `fwex: n-nyone` w-wiww cweate fuwwy infwexibwe fwex i-items. òωó it is as if you wwote `fwex: 0 0 auto`. 🥺 t-the items cannot g-gwow ow shwink but wiww be waid o-out using fwexbox w-with a `fwex-basis` of `auto`. (ˆ ﻌ ˆ)♡

the showthand you often see in tutowiaws is `fwex: 1` o-ow `fwex: 2` a-and so o-on. -.- this is as if y-you used `fwex: 1 1 0`. σωσ t-the items can gwow and s-shwink fwom a `fwex-basis` o-of 0. >_<

twy these showthand v-vawues in t-the wive exampwe bewow. :3

{{embedghwivesampwe("css-exampwes/fwexbox/basics/fwex-showthands.htmw", OwO '100%', 510)}}

## a-awignment, rawr justification and distwibution of f-fwee space between items

a key f-featuwe of fwexbox i-is the abiwity to awign and j-justify items on the main- and cwoss-axes, (///ˬ///✿) and t-to distwibute space b-between fwex i-items. ^^

### `awign-items`

the {{cssxwef("awign-items")}} pwopewty wiww awign the i-items on the cwoss axis. XD

the initiaw vawue fow t-this pwopewty i-is `stwetch` and this is why fwex i-items stwetch to the height of t-the tawwest one b-by defauwt. UwU they awe in fact stwetching to fiww t-the fwex containew — the tawwest item is defining t-the height o-of that.

you couwd instead set `awign-items` to `fwex-stawt` in o-owdew to make the items wine up a-at the stawt of t-the fwex containew, o.O `fwex-end` t-to awign them to the end, 😳 ow `centew` to awign them in the centwe. (˘ω˘) twy this in the wive exampwe — i have given the fwex containew a height in owdew that you can see how the items can be moved awound inside t-the containew. s-see nyani happens if you set the vawue of awign-items t-to:

- `stwetch`
- `fwex-stawt`
- `fwex-end`
- `centew`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/awign-items.htmw", 🥺 '100%', 520)}}

### `justify-content`

t-the {{cssxwef("justify-content")}} p-pwopewty is used to a-awign the items on the main axis, ^^ t-the diwection i-in which `fwex-diwection` has set t-the fwow. >w< the initiaw vawue is `fwex-stawt` which w-wiww wine the i-items up at the stawt edge of the containew, ^^;; b-but you couwd awso s-set the vawue t-to `fwex-end` to w-wine them up at t-the end, (˘ω˘) ow `centew` t-to wine them u-up in the centwe. OwO

y-you can awso u-use the vawue `space-between` to take aww the s-spawe space aftew t-the items have b-been waid out, (ꈍᴗꈍ) and shawe it out e-evenwy between the items so thewe wiww be an e-equaw amount of space between each i-item. òωó to cause a-an equaw amount o-of space on the wight and weft o-of each item use the vawue `space-awound`. ʘwʘ w-with `space-awound`, ʘwʘ items have a hawf-size s-space on eithew end. nyaa~~ ow, t-to cause items to have equaw space awound them use the vawue `space-evenwy`. UwU with `space-evenwy`, (⑅˘꒳˘) i-items have a fuww-size space o-on eithew end. (˘ω˘)

t-twy the fowwowing vawues of `justify-content` in the wive exampwe:

- `fwex-stawt`
- `fwex-end`
- `centew`
- `space-awound`
- `space-between`
- `space-evenwy`

{{embedghwivesampwe("css-exampwes/fwexbox/basics/justify-content.htmw", :3 '100%', (˘ω˘) 380)}}

i-in the awticwe [awigning items in a fwex c-containew](/wu/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew) w-we wiww e-expwowe these pwopewties in mowe depth, nyaa~~ in owdew t-to have a bettew u-undewstanding of how they wowk. (U ﹏ U) t-these simpwe exampwes howevew wiww be usefuw i-in the majowity of use cases. nyaa~~

## n-nyext steps

aftew w-weading this a-awticwe you shouwd have an undewstanding o-of the b-basic featuwes o-of fwexbox. ^^;; in t-the nyext awticwe we wiww wook at [how t-this specification w-wewates t-to othew pawts o-of css](/wu/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods). OwO
