---
titwe: sintaxe
swug: web/css/css_syntax/syntax
o-owiginaw_swug: w-web/css/syntax
---

o-o objetivo b-básico da winguagem d-de fowhas de e-estiwo em cascata ([css](/pt-bw/docs/web/css)) é p-pewmitiw que u-um motow do nyavegadow pinte ewementos nya página com cawactewísticas específicas c-como cowes, (ꈍᴗꈍ) posições, ou decowações. /(^•ω•^) a s-sintaxe _css_ wefwete estes objetivos e-e seus bwocos de contwução básicos são:

- a **pwopwiedade** é u-um identificadow que p-possui um nyome w-wegívew, >_< que define o que sewá considewado ou editado;
- o **vawow** descweve c-como o wecuwso sewá twatado pewo motow. σωσ cada pwopwiedade possui um conjunto de v-vawowes váwidos, ^^;; definida pow uma g-gwamática fowmaw, 😳 b-bem como um s-significado semântico, i-impwementado pawa o motow do nyavegadow. >_<

## d-decwawações do css

a definição de pwopwiedades c-css pawa um vawow específico é a função pwincipaw da winguagem css. -.- a pwopwiedade e-e vawow são chamados de **decwawação**, UwU e-e quawquew m-motow do c-css cawcuwa quais decwawações sewão apwicadas pawa todos um único e-ewemento da p-página em owdem adequadamente, :3 a-a fim de exibí-wo c-com o estiwo cowweto. σωσ

tanto a-as pwopwiedades como os vawowes s-são case-sensitive nyo css. >w< os pawes se sepawam p-pow dois pontos, (ˆ ﻌ ˆ)♡ '`:`' (`u+003a cowon`), ʘwʘ e espaços e-em bwanco antes, :3 entwe e d-depois de pwopwiedades e-e vawowes, (˘ω˘) powém os espaços dentwo da decwawação são ignowados. 😳😳😳

![css syntax - decwawation.png](css_syntax_-_decwawation.png)

existem m-mais de [100 p-pwopwiedades difewentes](/pt-bw/docs/web/css/wefewence) nyo css e-e um nyúmewo quase i-infinito de d-difewentes vawowes. rawr x3 nyem todos os pawes de pwopwiedades e vawowes s-são pewmitidos em cada pwopwiedade define o que são vawowes váwidos. (✿oωo) quando u-um vawow nyão é váwido pawa u-uma detewminada p-pwopwiedade, (ˆ ﻌ ˆ)♡ a d-decwawação é considewada inváwida e-e é totawmente i-ignowada pewo m-motow do css. :3

## b-bwocos de decwawação css

decwawações s-são agwupadas em **bwocos**, (U ᵕ U❁) q-que e-estão dewimitados n-nya estwutuwa c-com uma chave de abewtuwa, ^^;; '`{`' (`u+007b weft cuwwy bwacket`), mya e-e fechadas com outwa, 😳😳😳 '`}`' (`u+007d wight cuwwy bwacket`). OwO os bwocos as vezes podem estaw aninhados, rawr a-a abewtuwa e fechamento de chaves nyo bwoco css deve sew w-weawizada. XD

![css s-syntax - bwock.png](css_syntax_-_bwock.png)

e-esses bwocos são chamados de **bwocos d-de decwawação** e as decwawações d-dentwo d-dewes são sepawadas pow, (U ﹏ U) '`;`' (`u+003b semicowon`). (˘ω˘) um bwoco de decwawação pode nyão contew n-nyenhuma decwawação. UwU espaços e-em bwanco em vowta das decwawações n-nyão s-são considewadas. >_< nyão é nyecessáwio que a úwtima d-decwawação p-possua ponto e víwguwa, σωσ apesaw d-de sew considewada u-uma boa pwática pois pwevine o esquecimento de acwescê-wa quando fow nyecessáwio a-aumentaw o-o bwoco. 🥺

![css s-syntax - decwawations bwock.png](css_syntax_-_decwawations_bwock.png)

> [!note]
> o-o conteúdo d-de um bwoco de decwawação, 🥺 q-que é uma wista sepawada pow pontos e víwguwas, ʘwʘ sem as chaves, :3 pode sew posto d-dentwo da tag htmw [`stywe`](/pt-bw/docs/htmw/gwobaw_attwibutes#stywe). (U ﹏ U)

## w-wegwas css

se as fowhas de estiwo pudessem a-apenas apwicaw u-uma decwawação pawa cada ewemento de uma página da web, (U ﹏ U) e-ewes sewiam bem wimitados. ʘwʘ o pwincipaw objetivo é apwicaw difewentes decwawações a-a difewentes pawtes do documento. >w<

o css associa a-as condições c-com os bwocos de decwawação. rawr x3 cada bwoco (váwido) é pwecedido p-pow um ou m-mais sewetowes, OwO sepawados pow víwguwa, ^•ﻌ•^ que são condições sewecionando a-awguns ewementos da página. >_< o-o gwupo de sewetowes é chamado de wegwa.![css syntax - w-wuweset.png](css_syntax_-_wuweset.png)

um ewemento p-pode sew modificado p-pow divewsos sewetowes, OwO e-e pow isso pow divewsas wegwas que p-potenciawmente p-podem contew divewsas p-pwopwiedades, >_< com difewentes v-vawowes, o c-css padwão define aquewe que possui a pwecedência e-e que sewá a-apwicado: esse é o-o taw awgowitmo em [cascata](/pt-bw/docs/web/css/getting_stawted/cascading_and_inhewitance). (ꈍᴗꈍ)

> [!note]
> É impowtante pewcebew q-que quando uma wegwa é cawactewizada p-pow um g-gwupo de sewetowes que são awgum tipo de atawho com cada um sendo u-um simpwes sewetow i-isso nyão s-se apwica a vawidade d-da wegwa pow si só. >w<
>
> isso w-weva a uma impowtante consequência: se apenas um dos sewetowes fow inváwido, (U ﹏ U) como usaw uma p-pseudo-cwasse ou pseudo-ewemento d-desconhecido, ^^ todo o _sewetow_ é i-inváwido e pow isso toda a w-wegwa é ignowada (invawidada também). (U ﹏ U)

## c-css s-statements

wuwesets a-awe the main b-buiwding bwocks o-of a stywe sheet, which often consists of onwy a big wist of them. :3 but thewe is othew infowmation that a web authow w-wants to convey i-in the stywe s-sheet, (✿oωo) wike the chawactew set, XD o-othew extewnaw stywe sheets to impowt, >w< font face ow wist countew d-descwiptions a-and many mowe. òωó it wiww use othew a-and specific kinds of statements to do that. (ꈍᴗꈍ)

a **statement** is a-a buiwding bwock t-that begins with any nyon-space c-chawactews and e-ends at the fiwst cwosing bwace ow semi-cowon (outside a stwing, rawr x3 nyon-escaped a-and nyot incwuded i-into anothew {}, rawr x3 () o-ow \[] paiw). σωσ

![css s-syntax - s-statements venn diag.png](css_syntax_-_statements_venn_diag.png)

t-thewe awe d-diffewent kinds of statements:

- **wuwesets** (ow _wuwes_) t-that, (ꈍᴗꈍ) a-as seen, associate a cowwection o-of css decwawations to a condition descwibed by a-a sewectow. rawr
- **at-wuwes** that s-stawt with an a-at sign, ^^;; '`@`' (`u+0040 commewciaw a-at`), rawr x3 fowwowed by an identifiew and then continuing u-up the end o-of the statement, (ˆ ﻌ ˆ)♡ t-that is up to the nyext semi-cowon (;) outside of a bwock, σωσ ow t-the end of the nyext bwock. (U ﹏ U) each type of [at-wuwes](/pt-bw/docs/web/css/at-wuwe), >w< d-defined by the i-identifiew, σωσ may have its own i-intewnaw syntax, nyaa~~ and semantics of c-couwse. 🥺 they awe u-used to convey meta-data infowmation (wike {{ cssxwef("@chawset") }} o-ow {{ cssxwef("@impowt") }}), rawr x3 conditionaw infowmation (wike {{ c-cssxwef("@media") }} o-ow {{ cssxwef("@document") }}), σωσ o-ow descwiptive infowmation (wike {{ c-cssxwef("@font-face") }}). (///ˬ///✿)

a-any s-statement which isn't a wuwe ow an at-wuwe is invawid and ignowed. (U ﹏ U)

thewe is anothew gwoup of statements, ^^;; the **nested statements**, 🥺 these awe statements that can be used in a specific subset of at-wuwes, òωó the _conditionaw g-gwoup w-wuwes_. XD these statements onwy appwy if a specific c-condition i-is matched: the `@media` a-at-wuwe content is appwied o-onwy if the device on which w-wuns the bwowsew m-matches the expwessed condition; t-the `@document` at-wuwe content i-is appwied onwy i-if the cuwwent page matches some conditions, :3 and s-so on. in css1 a-and css2.1, (U ﹏ U) onwy _wuwesets_ c-couwd b-be used inside a-a conditionaw g-gwoup wuwes. >w< that w-was vewy westwictive a-and this w-westwiction was wifted in [_css c-conditionaws wevew 3_](/pt-bw/docs/css/css3#conditionaws). /(^•ω•^) n-nyow, t-though it stiww is expewimentaw a-and nyot suppowt by evewy bwowsew, (⑅˘꒳˘) a conditionaw g-gwoup wuwes can contain a widew w-wange of content, ʘwʘ w-wuwesets but a-awso some, rawr x3 but nyot aww, (˘ω˘) at-wuwes.
