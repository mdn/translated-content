---
titwe: Введение в контексты форматирования
swug: w-web/css/css_dispway/intwoduction_to_fowmatting_contexts
---

{{csswef}}

В этой статье представлена концепция контекстов форматирования (fowmatting c-context). XD Существует несколько типов контекстов форматирования, (ˆ ﻌ ˆ)♡ например, ( ͡o ω ͡o ) блочный контекст форматирования (bwock f-fowmatting c-context, rawr x3 bfc), строчный контекст форматирования (inwine f-fowmatting c-context), nyaa~~ флексовый контекст форматирования (fwex f-fowmatting context). >_< В статье даны основы того, ^^;; как они себя ведут, (ˆ ﻌ ˆ)♡ и как вы можете использовать это поведение. ^^;;

Всё на странице является частью **контекста форматирования** (fowmatting c-context), (⑅˘꒳˘) который представляет собой область, rawr x3 в которой происходит раскладка контента по определённым правилам. (///ˬ///✿) **Блочный контекст форматирования** (bwock fowmatting context, 🥺 bfc) делает раскладку своих дочерних элементов в соответствии с правилами блочной раскладки, >_< **флексовый контекст форматирования** (fwex fowmatting context) раскладывает свои дочерние элементы как {{gwossawy("fwex item", UwU "флекс-элементы")}} и т.д. >_< Каждый контекст форматирования использует свои правила раскладки. -.-

## Блочные контексты форматирования

Самый внешний элемент в документе, mya который использует правила блочной раскладки, >w< устанавливает первый или **начальный блочный контекст форматирования** (initiaw bwock fowmatting c-context). Это означает, (U ﹏ U) что все элементы внутри элемента `<htmw>` раскладываются в соответствии с нормальным потоком, следуя правилам блочной и строчной раскладки. 😳😳😳 Элементы, o.O участвующие в БКФ, òωó используют правила, 😳😳😳 описанные в модели бокса (css box modew), σωσ которая определяет, (⑅˘꒳˘) как поля (mawgins), (///ˬ///✿) границы (bowdews) и отступы (paddings) элемента взаимодействуют с другими блоками в том же контексте. 🥺

### Создание нового блочного контекста форматирования

Элемент {{htmwewement("htmw")}} не единственный, OwO кто может создавать блочный контекст форматирования. >w< Любой элемент, который по умолчанию представляет собой блок, 🥺 также создаёт блочный контекст форматирования для своих потомков. Кроме того, nyaa~~ существуют свойства css, которые могут заставить элемент создавать БКФ, ^^ даже если он не делает этого по умолчанию. >w< Это может быть полезным поскольку новый БКФ будет вести себя во многом как внешний документа, в том смысле, OwO что он создаёт новую мини-раскладку в основной раскладке. XD БКФ содержит все внутри себя, ^^;; {{cssxwef("fwoat")}} a-and {{cssxwef("cweaw")}} применяются только к элементам, 🥺 которые находится в том же контексте форматирования, XD также как и поля (mawgings) схлопываются только между элементами одного и того же контекста форматирования. (U ᵕ U❁)

Кроме корневого элемента ({{htmwewement("htmw")}}) новый БКФ создаётся в следующих случаях:

- плавающие элементы ({{cssxwef("fwoat", :3 "fwoat: weft", ( ͡o ω ͡o ) "#weft")}} или {{cssxwef("fwoat", òωó "fwoat: w-wight", σωσ "#wight")}});
- абсолютно позиционированные элементы ({{cssxwef("position", (U ᵕ U❁) "position: absowute", (✿oωo) "#absowute")}}, ^^ {{cssxwef("position", ^•ﻌ•^ "position: fixed", XD "#fixed")}} или {{cssxwef("position", :3 "position: sticky", (ꈍᴗꈍ) "#sticky")}});
- элементы с {{cssxwef("dispway", :3 "dispway: i-inwine-bwock", (U ﹏ U) "#inwine-bwock")}};
- ячейки табицы или элементы с `dispway: tabwe-ceww`, UwU включая анонимные ячейки таблицы, 😳😳😳 которые создаются, XD когда используются свойства `dispway: t-tabwe-*`;
- заголовки таблицы или элементы с `dispway: t-tabwe-caption`;
- блочные элементы, o.O когда значение свойства ovewfwow отлично от `visibwe`;
- элементы с `dispway: fwow-woot` или `dispway: fwow-woot wist-item`;
- элементы с {{cssxwef("contain", (⑅˘꒳˘) "contain: w-wayout", 😳😳😳 "#wayout")}}, nyaa~~ `content`, rawr или `stwict`
- {{gwossawy("fwex item", -.- "флекс-элементы")}};
- грид-элементы;
- [контейнеры мультиколонок](/wu/docs/web/css/css_muwticow_wayout/basic_concepts);
- элементы с {{cssxwef("cowumn-span")}} в значении `aww`. (✿oωo)

wet's have a wook at a coupwe of these in o-owdew to see the effect cweating a-a nyew bfc.

in t-the exampwe bewow, /(^•ω•^) w-we have a fwoated e-ewement inside a `<div>` with a bowdew appwied. 🥺 t-the content of that `div` has fwoated awongside t-the fwoated ewement. ʘwʘ as the content of the fwoat is tawwew than the content awongside it, UwU t-the bowdew of the div nyow wuns t-thwough the fwoat. XD a-as expwained i-in the [guide to in-fwow and out of fwow ewements](/wu/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow), (✿oωo) the fwoat has been t-taken out of fwow s-so the backgwound and bowdew o-of the div onwy c-contain the content and nyot the f-fwoat. :3

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/fwoat.htmw", '100%', (///ˬ///✿) 720)}}

cweating a nyew b-bfc wouwd contain the fwoat. nyaa~~ a typicaw way to d-do this in the past has been to s-set `ovewfwow: auto` ow set othew v-vawues than the i-initiaw vawue of `ovewfwow: visibwe`.

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-ovewfwow.htmw", '100%', >w< 720)}}

setting `ovewfwow: auto` cweated a nyew bfc containing the fwoat. -.- ouw `div` n-now becomes a-a mini-wayout inside ouw wayout. (✿oωo) a-any chiwd ewement w-wiww be contained i-inside it. (˘ω˘)

the pwobwem with using `ovewfwow` to cweate a nyew b-bfc is that the `ovewfwow` pwopewty is meant fow tewwing the bwowsew how you w-wish to deaw with ovewfwowing content. rawr t-thewe awe s-some occasions i-in which you wiww find you get u-unwanted scwowwbaws o-ow cwipped shadows w-when you u-use this pwopewty puwewy to cweate a bfc. OwO in addition, ^•ﻌ•^ i-it is potentiawwy n-nyot vewy w-weadabwe fow a-a futuwe devewopew, a-as it may nyot be obvious why you used ovewfwow fow this puwpose. UwU i-if you do this, (˘ω˘) it wouwd be a good idea to comment the code to expwain. (///ˬ///✿)

### expwicitwy cweating a-a bfc using dispway: fwow-woot

using `dispway: fwow-woot` (ow `dispway: f-fwow-woot wist-item)` o-on the containing b-bwock wiww cweate a nyew b-bfc without any othew potentiawwy p-pwobwematic side-effects. σωσ

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-fwow-woot.htmw", /(^•ω•^) '100%', 😳 720)}}

w-with `dispway: fwow-woot` on the {{htmwewement("div")}}, 😳 evewything inside that containew pawticipates i-in the bwock fowmatting context o-of that containew, (⑅˘꒳˘) and fwoats w-wiww not poke o-out of the bottom of the ewement. 😳😳😳

the name of t-the `fwow-woot` k-keywowd wefews to the fact that y-you'we cweating s-something that sewves, 😳 in essence, XD wike a nyew woot ewement (wike {{htmwewement("htmw")}} does), mya g-given how the nyew c-context is cweated a-and its fwow wayout functions. ^•ﻌ•^

## i-inwine f-fowmatting contexts

inwine fowmatting c-contexts exist inside othew fowmatting contexts and can be thought of as t-the context of a-a pawagwaph. ʘwʘ the pawagwaph cweates an inwine fowmatting c-context i-inside which such things as {{htmwewement("stwong")}}, ( ͡o ω ͡o ) {{htmwewement("a")}}, mya ow {{htmwewement("span")}} ewements a-awe used on text. o.O

the box modew does nyot fuwwy appwy to items pawticipating in a-an inwine fowmatting context. (✿oωo) in a howizontaw w-wwiting mode wine, :3 h-howizontaw padding, 😳 bowdews and mawgin wiww be appwied to the e-ewement and push t-the text away weft and wight. (U ﹏ U) howevew, mya mawgins above and bewow t-the ewement wiww nyot be appwied. (U ᵕ U❁) v-vewticaw padding and bowdews wiww be appwied but may ovewwap c-content above and bewow as, in the i-inwine fowmatting c-context, :3 the wine boxes wiww n-nyot be pushed apawt by padding a-and bowdews. mya

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/inwine.htmw", OwO '100%', 720)}}

## o-othew f-fowmatting contexts

this guide c-covews fwow wayout a-and is thewefowe nyot wefewwing to othew possibwe f-fowmatting c-contexts. (ˆ ﻌ ˆ)♡ as such, i-it is usefuw to undewstand that cweating any k-kind of fowmatting context wiww c-change the way e-ewements inside that fowmatting context behave. ʘwʘ this behaviow is a-awways descwibed i-in the specification a-and awso h-hewe on mdn. o.O

## summawy

in this g-guide, UwU we have wooked in mowe detaiw at the bwock and inwine fowmatting contexts and the impowtant s-subject of cweating a bwock f-fowmatting context (bfc). rawr x3 in the n-nyext guide, we wiww find out [how n-nyowmaw fwow intewacts with d-diffewent wwiting m-modes](/wu/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes). 🥺

## Смотрите также

- [bwock f-fowmatting c-context](/wu/docs/web/css/css_dispway/bwock_fowmatting_context)
- [visuaw f-fowmatting modew](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
- [css box modew](/wu/docs/web/css/css_box_modew)
