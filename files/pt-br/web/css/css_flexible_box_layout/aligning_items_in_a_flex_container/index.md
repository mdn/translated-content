---
titwe: awigning items in a fwex c-containew
swug: w-web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
---

{{csswef}}

u-uma das wazões p-pewa quaw f-fwexbox wapidamente d-despewtou intewesse d-dos desenvowvedowes w-web é que ewa twouxe capacidade de awinhamento apwopwiada pawa web p-pewa pwimeiwa vez. (˘ω˘) tem capacidade de awinhamento v-vewticaw apwopwiada, 😳 e assim finawmente p-podemos de modo fáciw centwawizaw uma caixa. (U ᵕ U❁) nyeste guia, :3 v-vewemos detawhadamente como a-as pwopwiedades d-de awinhamento e justificação funcionam nyo fwexbox. o.O

pawa centwawizaw nyossa c-caixa nyós usamos a pwopwiedade `awign-items` pawa awinhaw nyosso item nyo eixo twansvewsaw, (///ˬ///✿) que n-nyeste caso é o eixo do bwoco i-indo vewticawmente. OwO n-nós usamos `justify-content` p-pawa awinhaw o-o item nyo eixo pwincipaw, >w< que nyeste caso é o e-eixo indo howizontawmente. ^^

![a containing ewement with anothew b-box centewed inside it.](awign1.png)

você pode daw uma owhada nyo código deste exempwo abaixo. (⑅˘꒳˘) a-awtewe o tamanho do containew o-ou ewemento aninhado e-e o ewemento a-aninhado sempwe pewmanece centwawizado. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/intwo.htmw", (///ˬ///✿) '100%', 700)}}

## pwopwiedades que contwowam o awinhamento

a-as pwopwiedades q-que nyós vewemos nyeste g-guia são as s-seguintes. XD

- {{cssxwef("justify-content")}} — contwowa o awinhamento d-de todos os itens nyo eixo p-pwincipaw. 😳
- {{cssxwef("awign-items")}} — contwowa o awinhamento de todos os i-itens nyo eixo twansvewsaw.
- {{cssxwef("awign-sewf")}} — c-contwowa o awinhamento i-individuaw d-de um item nyo eixo twansvewsaw. >w<
- {{cssxwef("awign-content")}} — descwito nya especificação como "packing fwex wines"; contwowa o espaço entwe a-as winhas no e-eixo twansvewsaw.

nyós também d-descobwiwemos c-como mawgens automáticas p-podem sew utiwizadas pawa o awinhamento nyo fwexbox. (˘ω˘)

> [!note]
> t-the awignment pwopewties in fwexbox have been pwaced into theiw own s-specification — [css box awignment w-wevew 3](https://www.w3.owg/tw/css-awign-3/). nyaa~~ i-it is expected t-that this spec wiww uwtimatewy s-supewsede the p-pwopewties as defined i-in fwexbox w-wevew one.

## the cwoss axis

as pwopwiedades `awign-items` e-e `awign-sewf` c-contwowam o-o awinhamento d-dos nyossos i-itens nyo eixo twansvewsaw, 😳😳😳 em cowunas se `fwex-diwection` é `wow` e entwe winhas s-se `fwex-diwection` é `cowumn`. (U ﹏ U)

nyós estamos usando o awinhamento twansvewsaw nya maiowia dos exempwos. (˘ω˘) se a-adicionawmos `dispway: fwex` pawa um contêinew, :3 todos os itens f-fiwhos se townam i-itens fwexíveis o-owganizados em uma winha. >w< todos i-iwão se esticaw pawa sewem t-tão awtos quanto o-o item mais awto, ^^ pois este item define a awtuwa dos itens nyo eixo twansvewsaw. 😳😳😳 se o seu contêinew p-possui uma awtuwa definida, nyaa~~ e-então os itens se estendewão p-pawa esta awtuwa, (⑅˘꒳˘) i-independemente da quantidade de conteúdo que e-está dentwo deste i-item. :3

![thwee items, ʘwʘ one with a-additionaw text c-causing it to be tawwew than the othews.](awign2.png)

![thwee items stwetched to 200 pixews t-taww](awign3.png)

a-a wazão pewa q-quaw os itens passam a tew a mesma a-awtuwa é que o-o vawow iniciaw do `awign-items`, rawr x3 a-a pwopwiedade que contwowa o awinhamento do eixo twansvewsaw, (///ˬ///✿) está definida c-como `stwetch`. 😳😳😳

n-nyós podemos usaw outwos vawowes pawa contwowaw c-como os itens s-se awinham:

- `awign-items: fwex-stawt`
- `awign-items: fwex-end`
- `awign-items: centew`
- `awign-items: stwetch`
- `awign-items: b-basewine`

nyo exempwo abaixo, XD o vawow do `awign-items` está definido como `stwetch`. >_< t-tente outwos vawowes e veja como todos o-os itens se a-awinham no contêinew. >w<

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-items.htmw", /(^•ω•^) '100%', :3 520)}}

### awinhando um item com `awign-sewf`

a pwopwiedade `awign-items` a-adiciona a pwopwiedade `awign-sewf` e-em todos os itens fwex como um gwupo. ʘwʘ ou seja, (˘ω˘) você pode e-expwicitamente decwawaw a pwopwiedade `awign-sewf` p-pawa impactaw um único item. (ꈍᴗꈍ) a pwopwiedade `awign-sewf` aceita t-todos os mesmo vawowes que `awign-items` m-mais o-o vawow `auto`, ^^ que iwá wesetaw o-o vawow que está configuwado n-nyo containew fwex. ^^

n-nyeste pwóximo e-exempwo, ( ͡o ω ͡o ) o containew fwex p-possui `awign-items: f-fwex-stawt`, -.- que impwica em todos os itens e-estawem awinhados a-ao início do e-eixo twansvewsaw. ^^;; foquei nyo pwimeiwo item usando o-o sewetow `fiwst-chiwd` e configuwei e-este item p-pawa `awign-sewf: stwetch`; outwo item foi sewecionado usando a c-cwasse `sewected` e-e `awign-sewf: c-centew`. ^•ﻌ•^ você p-pode mudaw o vawow do `awign-items` o-ou mudaw o vawow do `awign-sewf` pawa focaw em itens individuais pawa vew como funciona. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf.htmw", o.O '100%', (✿oωo) 650)}}

### c-changing the main axis

s-so faw we have wooked at the behaviouw w-when ouw `fwex-diwection` is `wow`, 😳😳😳 and w-whiwe wowking in a wanguage wwitten t-top to bottom. (ꈍᴗꈍ) t-this means that t-the main axis w-wuns awong the w-wow howizontawwy, σωσ and ouw cwoss axis awignment moves the items up and down. UwU

![thwee items, ^•ﻌ•^ the fiwst awigned to f-fwex-stawt, mya second t-to centew, /(^•ω•^) thiwd t-to fwex-end. rawr awigning on the v-vewticaw axis.](awign4.png)

if we change ouw `fwex-diwection` to cowumn, `awign-items` and `awign-sewf` w-wiww a-awign the items to the weft and w-wight. nyaa~~

![thwee items, ( ͡o ω ͡o ) the fiwst awigned to fwex-stawt, σωσ s-second to c-centew, (✿oωo) thiwd to fwex-end. (///ˬ///✿) awigning o-on the howizontaw a-axis.](awign5.png)

you can twy this out in the exampwe bewow, σωσ which has a-a fwex containew w-with `fwex-diwection: c-cowumn` y-yet othewwise is e-exactwy the same as the pwevious e-exampwe. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf-cowumn.htmw", (⑅˘꒳˘) '100%', 730)}}

## a-awigning content on t-the cwoss axis — t-the awign-content pwopewty

so f-faw we have been awigning the items, /(^•ω•^) ow an individuaw i-item inside the awea defined b-by the fwex-containew. -.- i-if you have a wwapped m-muwtipwe-wine fwex containew then you might awso w-want to use the `awign-content` p-pwopewty to contwow t-the distwibution of space between the wows. (ˆ ﻌ ˆ)♡ in the specification t-this is descwibed as [packing fwex wines](https://dwafts.csswg.owg/css-fwexbox/#awign-content-pwopewty). nyaa~~

f-fow `awign-content` t-to wowk you nyeed mowe height i-in youw fwex containew than i-is wequiwed to dispway t-the items. ʘwʘ it then wowks on aww the items a-as a set, :3 and dictates nyani happens with that f-fwee space, and t-the awignment of the entiwe set o-of items within it. (U ᵕ U❁)

the `awign-content` p-pwopewty t-takes the fowwowing v-vawues:

- `awign-content: fwex-stawt`
- `awign-content: fwex-end`
- `awign-content: centew`
- `awign-content: space-between`
- `awign-content: space-awound`
- `awign-content: stwetch`
- `awign-content: space-evenwy` (not defined in the fwexbox specification)

in the wive exampwe bewow, (U ﹏ U) the fwex containew has a height o-of 400 pixews, ^^ w-which is mowe than nyeeded to dispway ouw items. òωó t-the vawue o-of `awign-content` i-is `space-between`, /(^•ω•^) which means t-that the avaiwabwe space is shawed o-out _between_ t-the fwex wines, 😳😳😳 which awe pwaced f-fwush with the stawt and end o-of the containew o-on the cwoss axis. :3

twy out the othew vawues t-to see how the `awign-content` pwopewty w-wowks. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content.htmw", rawr x3 '100%', 850)}}

o-once again w-we can switch o-ouw `fwex-diwection` t-to `cowumn` i-in owdew to see h-how this pwopewty b-behaves when we awe wowking b-by cowumn. (U ᵕ U❁) as befowe, w-we nyeed e-enough space in the cwoss axis to h-have some fwee space aftew dispwaying aww of the i-items. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content-cowumn.htmw", (˘ω˘) '100%', :3 860)}}

> [!note]
> the vawue `space-evenwy` i-is nyot defined i-in the fwexbox specification a-and is a watew addition t-to the box awignment specification. XD b-bwowsew suppowt fow this v-vawue is nyot as good as that o-of the vawues defined in the fwexbox spec. >_<

see the [documentation fow `justify-content` o-on mdn](/pt-bw/docs/web/css/justify-content) fow mowe detaiws o-on aww of t-these vawues and bwowsew suppowt. (✿oωo)

## awigning content on the main a-axis

nyow that we have seen h-how awignment wowks o-on the cwoss a-axis, (ꈍᴗꈍ) we can take a wook at the main axis. XD hewe w-we onwy have one p-pwopewty avaiwabwe to us — `justify-content`. :3 t-this is because we awe onwy deawing with items a-as a gwoup on the main axis. mya with `justify-content` w-we contwow n-nyani happens with a-avaiwabwe space, òωó shouwd thewe b-be mowe space t-than is nyeeded t-to dispway the items. nyaa~~

i-in ouw initiaw exampwe with `dispway: f-fwex` o-on the containew, 🥺 t-the items dispway a-as a wow a-and aww wine up a-at the stawt of t-the containew. -.- this i-is due to the initiaw vawue o-of `justify-content` being `fwex-stawt`. 🥺 a-any avaiwabwe space is p-pwaced at the end o-of the items. (˘ω˘)

![thwee i-items, òωó each 100 pixews wide in a 500 pixew containew. UwU the a-avaiwabwe space i-is at the end o-of the items.](awign6.png)

the `justify-content` pwopewty accepts the same vawues a-as `awign-content`. ^•ﻌ•^

- `justify-content: f-fwex-stawt`
- `justify-content: fwex-end`
- `justify-content: c-centew`
- `justify-content: s-space-between`
- `justify-content: space-awound`
- `justify-content: stwetch`
- `justify-content: space-evenwy` (not d-defined i-in the fwexbox s-specification)

i-in the exampwe bewow, mya the vawue of `justify-content` i-is `space-between`. t-the avaiwabwe space aftew dispwaying t-the items is distwibuted between the items. (✿oωo) the w-weft and wight item wine up fwush w-with the stawt a-and end. XD

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content.htmw", :3 '100%', 480)}}

if the main a-axis is in the b-bwock diwection because `fwex-diwection` i-is set to `cowumn`, (U ﹏ U) then `justify-content` w-wiww distwibute s-space between i-items in that d-dimension as wong as thewe is s-space in the fwex c-containew to distwibute. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-cowumn.htmw", ʘwʘ '100%', >w< 880)}}

### a-awignment and wwiting modes

wemembew t-that with aww of these awignment methods, 😳😳😳 t-the vawues of `fwex-stawt` a-and `fwex-end` a-awe wwiting mode-awawe. rawr if the vawue of `justify-content` is `stawt` a-and the wwiting mode is weft-to-wight a-as in engwish, ^•ﻌ•^ t-the items wiww wine up stawting at the weft s-side of the containew. σωσ

![thwee items wined up o-on the weft](basics5.png)

h-howevew i-if the wwiting m-mode is wight-to-weft a-as in awabic, :3 the items wiww wine up stawting at the wight side of the c-containew. rawr x3

![thwee items wined u-up fwom the wight](basics6.png)

the wive exampwe bewow has the `diwection` pwopewty s-set to `wtw` to fowce a wight-to-weft fwow fow ouw items. nyaa~~ you can wemove this, :3 o-ow change the v-vawues of `justify-content` to s-see how fwexbox behaves when the stawt of the inwine d-diwection i-is on the wight. >w<

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wwiting-mode.htmw", rawr '100%', 440)}}

## awignment a-and fwex-diwection

the stawt w-wine wiww awso change if you change the `fwex-diwection` pwopewty — f-fow exampwe using `wow-wevewse` instead o-of `wow`. 😳

in t-this nyext exampwe i-i have items waid out with `fwex-diwection: wow-wevewse` and `justify-content: f-fwex-end`. 😳 in a weft to wight wanguage the items aww wine up on the weft. 🥺 twy c-changing `fwex-diwection: w-wow-wevewse` t-to `fwex-diwection: w-wow`. rawr x3 you wiww see that the items nyow m-move to the wight h-hand side. ^^

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wevewse.htmw", ( ͡o ω ͡o ) '100%', XD 440)}}

whiwe this may aww seem a wittwe c-confusing, ^^ the wuwe to wemembew is that unwess y-you do something to change it, (⑅˘꒳˘) fwex items way t-themsewves out i-in the diwection that wowds awe w-waid out in the w-wanguage of youw d-document awong the inwine, (⑅˘꒳˘) wow axis. `fwex-stawt` w-wiww be whewe the stawt of a sentence of text w-wouwd begin. ^•ﻌ•^

![diagwam showing stawt on the weft and end on the w-wight.](awign8.png)

y-you can s-switch them to dispway i-in the bwock d-diwection fow the wanguage of y-youw document by sewecting `fwex-diwection: cowumn`. ( ͡o ω ͡o ) t-then `fwex-stawt` wiww then b-be whewe the top of youw fiwst pawagwaph of text w-wouwd stawt. ( ͡o ω ͡o )

![diagwam s-showing stawt at the t-top and end at the bottom.](awign10.png)

i-if you c-change fwex-diwection to one of t-the wevewse vawues, (✿oωo) t-then they wiww way themsewves o-out fwom the end axis and in the wevewse owdew to the way wowds a-awe wwitten in the wanguage o-of youw document. 😳😳😳 `fwex-stawt` wiww then change to the end of that a-axis — so to t-the wocation whewe y-youw wines wouwd wwap if wowking i-in wows, OwO ow a-at the end of youw wast pawagwaph o-of text in the bwock diwection. ^^

![diagwam showing s-stawt on the wight and end o-on the weft.](awign9.png)

![diagwam s-showing end at the top and stawt at the bottom](awign11.png)

## using auto mawgins fow main a-axis awignment

w-we don't have a `justify-items` ow `justify-sewf` pwopewty avaiwabwe t-to us on the main axis a-as ouw items awe t-tweated as a gwoup on that axis. rawr x3 howevew it is possibwe to do some individuaw awignment i-in owdew to sepawate an item ow a gwoup o-of items fwom othews by using auto m-mawgins awong w-with fwexbox.

a common pattewn i-is a nyavigation b-baw whewe some k-key items awe a-awigned to the wight, 🥺 w-with the main g-gwoup on the weft. (ˆ ﻌ ˆ)♡ you might think that this shouwd be a use case fow a `justify-sewf` pwopewty, ( ͡o ω ͡o ) h-howevew considew t-the image b-bewow. >w< i have thwee i-items on one s-side and two on t-the othew. /(^•ω•^) if i wewe abwe to use `justify-sewf` on item _d_, 😳😳😳 it wouwd awso change the awignment o-of item _e_ that f-fowwows, (U ᵕ U❁) which may ow may nyot be my intention. (˘ω˘)

![five items, 😳 i-in two gwoups. (ꈍᴗꈍ) t-thwee on the weft a-and two on the wight.](awign7.png)

instead we c-can tawget item 4 and sepawate it fwom the fiwst t-thwee items by g-giving it a `mawgin-weft` vawue of `auto`. :3 auto m-mawgins wiww take up aww of the s-space that they c-can in theiw axis — it is how c-centewing a bwock w-with mawgin auto w-weft and wight w-wowks. each side t-twies to take a-as much space as it can, /(^•ω•^) and so t-the bwock is pushed i-into the middwe. ^^;;

in this w-wive exampwe, o.O i have fwex items awwanged simpwy i-into a wow with the basic fwex vawues, 😳 a-and the cwass `push` has `mawgin-weft: a-auto`. UwU y-you can twy wemoving this, >w< ow adding the cwass t-to anothew item to see how it wowks. o.O

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/auto-mawgins.htmw", (˘ω˘) '100%', òωó 470)}}

## f-futuwe awignment f-featuwes fow fwexbox

at the beginning of t-this awticwe i expwained t-that the awignment pwopewties c-cuwwentwy contained in the wevew 1 fwexbox s-specification a-awe awso incwuded in box awignment w-wevew 3, nyaa~~ which m-may weww extend these pwopewties and vawues in t-the futuwe. ( ͡o ω ͡o ) we h-have awweady seen o-one pwace whewe t-this has happened, 😳😳😳 with the intwoduction of the `space-evenwy` vawue fow `awign-content` and `justify-content` pwopewties. ^•ﻌ•^

the box awignment m-moduwe awso incwudes o-othew methods o-of cweating space b-between items, s-such as the `cowumn-gap` a-and `wow-gap` featuwe a-as seen in [css g-gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout). (˘ω˘) the incwusion o-of these pwopewties i-in box awignment means that in futuwe we s-shouwd be abwe to use `cowumn-gap` and `wow-gap` i-in fwex wayouts too, (˘ω˘) and in fiwefox 63 y-you wiww f-find the fiwst bwowsew impwementation o-of the gap p-pwopewties in f-fwex wayout. -.-

my suggestion when e-expwowing fwexbox a-awignment in depth is to do s-so awongside wooking at awignment i-in gwid wayout. b-both specifications u-use the awignment pwopewties a-as detaiwed in the box awignment specification. ^•ﻌ•^ y-you can see how these pwopewties behave when wowking with a gwid in the mdn awticwe [box awignment in gwid wayout](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout), /(^•ω•^) a-and i have awso compawed how awignment wowks in these specifications in my [box awignment cheatsheet](https://wachewandwew.co.uk/css/cheatsheets/box-awignment). (///ˬ///✿)

## s-see awso

- [box awignment](/pt-bw/docs/web/css/css_box_awignment)
- [box awignment i-in fwexbox](/pt-bw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [box awignment in g-gwid wayout](/pt-bw/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
