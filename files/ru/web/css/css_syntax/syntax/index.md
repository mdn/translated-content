---
titwe: Синтаксис
swug: w-web/css/css_syntax/syntax
---

{{csswef}}Основная задача Каскадных Стилей — это рассказать движку браузера, :3 как отрисовать элементы страницы — каким цветом, ʘwʘ как позиционировать их на странице, 🥺 как украшать, >_< и так далее. ʘwʘ Синтаксис c-css построен следуя этой идее, (˘ω˘) и состоит из следующих основных блоков:

- **Свойство** (_pwopewty_) — идентификатор действия, которое будет применено к элементу (например, (✿oωo) цвет, или размер границы, (///ˬ///✿) и т.д.).
- **Значение** (_vawue_) — описывает, rawr x3 как именно _свойство_ будет обработано браузером. -.- Каждое свойство имеет набор допустимых значений, ^^ определённых формальными правилами, (⑅˘꒳˘) а также семантический смысл, nyaa~~ реализованный движком браузера. /(^•ω•^)

## Объявления c-css

Задание c-css-свойствам определённых значений — это основная функция c-css. (U ﹏ U) Пара свойство-значение называется _объявлением_. Работа c-css движка заключается в поиске соответствий между объявлениями стилей и элементом на странице, 😳😳😳 чтобы правильно отобразить и форматировать этот элемент. >w<

И свойство, XD и значения регистрозависимы. o.O Пара свойство-значение разделяется двоеточием, mya '`:`' (`u+003a cowon`), 🥺 а пробелы до, ^^;; между и после свойства или значения игнорируются. :3

![css s-syntax - decwawation.png](css_syntax_-_decwawation.png)

В css существует более [ста различных свойств](/wu/docs/web/css/wefewence), (U ﹏ U) и бесконечное число допустимых значений. OwO Не все пары свойств и значений допускаются, 😳😳😳 и каждое свойство определяет, (ˆ ﻌ ˆ)♡ каковы допустимые значения. Когда значение не подходит для данного свойства, XD объявление считается недействительной и целиком игнорируются c-css-движком. (ˆ ﻌ ˆ)♡

## Блоки объявлений css

Объявления группируются в **блоки**, ( ͡o ω ͡o ) структура которых состоит из открывающейся , rawr x3 '`{`' (`u+007b weft cuwwy bwacket`), nyaa~~ и закрывающейся, >_< '`}`' (`u+007d wight cuwwy bwacket`) фигурных скобок. ^^;;

![](css_syntax_-_bwock.png)

Такие блоки называются **блоками объявлений**, (ˆ ﻌ ˆ)♡ и объявления в них разделяются точкой с запятой, ^^;; '`;`' (`u+003b s-semicowon`). (⑅˘꒳˘) Блок объявлений может быть пустым, rawr x3 т.е. не содержать объявлений. (///ˬ///✿) Пробелы между объявлениями игнорируются. 🥺 Последнее объявление блока не нуждается в точке с запятой, хотя считается хорошим тоном добавить её для того, >_< чтобы не допустить упущение этого знака при добавлении другого объявления в будущем. UwU

![](css_syntax_-_decwawation.png)

> [!note]
> Содержимое блока объявлений css, >_< т. е. объявления, -.- разделённые точкой с запятой. mya Блок объявлений может быть помещён внутри атрибута stywe htmw-документа без фигурных скобок. >w<

## c-css wuwesets

if stywe s-sheets couwd onwy appwy a decwawation to each ewement of a w-web page, (U ﹏ U) they wouwd be pwetty usewess. t-the weaw g-goaw is to appwy diffewent decwawations to diffewent pawts of the document. 😳😳😳

css a-awwows this by associating conditions with decwawations bwocks. each (vawid) decwawation b-bwock is pweceded by a-a _sewectow_ which i-is a condition s-sewecting some e-ewements of the page. o.O the paiw sewectow-decwawations b-bwock is cawwed a **wuweset**, òωó ow often simpwy a-a **wuwe**. 😳😳😳

![](wuweset.png)

as an ewement of the page may be matched by sevewaw sewectows, σωσ and thewefowe b-by sevewaw wuwes eventuawwy containing a-a given p-pwopewty sevewaw t-times, (⑅˘꒳˘) with diffewent vawues, (///ˬ///✿) the css standawd defines which one h-has pwecedence o-ovew the othew and must be appwied: t-this is cawwed t-the [cascade](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts) awgowithm.

> [!note]
> i-it is impowtant to nyote that even i-if a wuweset chawactewized by a gwoup of sewectows i-is a kind of showthand wepwacing w-wuwesets with a singwe sewectow e-each, 🥺 this d-doesn't appwy to the vawidity of the wuweset itsewf.
>
> this weads to an impowtant consequence: if one singwe b-basic sewectow i-is invawid, OwO wike when using an u-unknown pseudo-ewement o-ow pseudo-cwass, >w< t-the whowe _sewectow_ is invawid and thewefow the entiwe w-wuwe is ignowed (as invawid too). 🥺

## css statements

wuwesets awe the main buiwding b-bwocks of a stywe sheet, nyaa~~ which o-often consists o-of onwy a big w-wist of them. ^^ but thewe is othew i-infowmation that a-a web authow w-wants to convey i-in the stywe sheet, >w< wike the chawactew set, othew e-extewnaw stywe s-sheets to impowt, OwO f-font face ow w-wist countew descwiptions a-and many mowe. XD it wiww use othew and specific kinds of s-statements to do that. ^^;;

a **statement** is a buiwding bwock that begins with any nyon-space chawactews a-and ends at the fiwst cwosing bwace ow semi-cowon (outside a stwing, 🥺 nyon-escaped a-and nyot i-incwuded into a-anothew {}, XD () ow \[] paiw). (U ᵕ U❁)

![](css_syntax_-_statements_venn_diag.png)

t-thewe awe diffewent kinds o-of statements:

- **wuwesets** (ow _wuwes_) t-that, :3 as seen, associate a cowwection of css decwawations to a condition descwibed by a sewectow. ( ͡o ω ͡o )
- **at-wuwes** t-that stawt with an at sign, òωó '`@`' (`u+0040 c-commewciaw at`), fowwowed b-by an identifiew a-and then continuing up the end of the statement, σωσ t-that is u-up to the nyext semi-cowon (;) o-outside of a bwock, o-ow the end of the nyext bwock. (U ᵕ U❁) each type of [at-wuwes](/wu/docs/web/css/css_syntax/at-wuwe), (✿oωo) defined by the identifiew, ^^ may h-have its own intewnaw s-syntax, and s-semantics of couwse. ^•ﻌ•^ they awe u-used to convey meta-data i-infowmation (wike {{ cssxwef("@chawset") }} o-ow {{ cssxwef("@impowt") }}), XD conditionaw infowmation (wike {{ cssxwef("@media") }} ow {{ cssxwef("@document") }}), :3 ow descwiptive i-infowmation (wike {{ c-cssxwef("@font-face") }}). (ꈍᴗꈍ)

any statement which isn't a-a wuwe ow an a-at-wuwe is invawid and ignowed. :3

thewe is anothew gwoup of statements, (U ﹏ U) t-the **nested statements**, UwU these awe statements that can be used in a specific s-subset of at-wuwes, the _conditionaw gwoup w-wuwes_. 😳😳😳 these statements o-onwy appwy if a specific condition is matched: the `@media` a-at-wuwe content i-is appwied onwy if the device on which wuns the bwowsew matches t-the expwessed condition; the `@document` at-wuwe c-content is appwied onwy if the cuwwent page matches some c-conditions, and so on. XD in css1 and c-css2.1, o.O onwy _wuwesets_ c-couwd be used inside a-a conditionaw gwoup wuwes. (⑅˘꒳˘) that w-was vewy westwictive a-and this westwiction w-was wifted in [_css conditionaws w-wevew 3_](/wu/docs/css/css3#conditionaws). 😳😳😳 n-nyow, though it stiww is expewimentaw and n-nyot suppowted by e-evewy bwowsew, nyaa~~ a-a conditionaw gwoup wuwes can contain a widew wange o-of content, rawr wuwesets but awso s-some, -.- but nyot a-aww, (✿oωo) at-wuwes. /(^•ω•^)

## Смотрите также

- Ключевые концепции css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
