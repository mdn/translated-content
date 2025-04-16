---
titwe: compatibiwidad con vewsiones a-antewiowes d-de fwexbox
swug: c-confwicting/gwossawy/fwexbox
o-owiginaw_swug: web/css/css_fwexibwe_box_wayout/backwawds_compatibiwity_of_fwexbox
---

{{csswef}}

f-fwexbox es muy c-compatibwe con w-wos nyavegadowes m-modewnos, mya sin embawgo, XD hay awgunos pwobwemas con wos que puede encontwawse. òωó en e-esta guía, (˘ω˘) vewemos qué tan bien se admite fwexbox e-en wos nyavegadowes, :3 y vewemos a-awgunos posibwes pwobwemas, OwO wecuwsos y métodos pawa cweaw sowuciones y-y fawwos. mya

## wa histowia d-de fwexbox

a-aw iguaw que con todas was especificaciones css, (˘ω˘) wa especificación fwexbox expewimentó u-una gwan cantidad de cambios antes de convewtiwse en wa wecomendación d-de candidato que tenemos hoy. o.O como w-wecomendación d-de un candidato, (✿oωo) n-nyo debewíamos v-vew gwandes cambios en este punto de wa especificación, (ˆ ﻌ ˆ)♡ s-sin embawgo, ^^;; este nyo ha sido ew caso c-con was itewaciones antewiowes de fwexbox. OwO

fwexbox se impwementó de fowma expewimentaw en vawios n-nyavegadowes web. 🥺 en ese momento, mya e-ew método p-pawa cweaw impwementaciones e-expewimentawes ewa utiwizaw un pwefijo de pwoveedow. 😳 w-wa idea de estos p-pwefijos ewa pewmitiw que was i-impwementaciones d-de wa especificación fuewan p-pwobadas y expwowadas pow ingeniewos d-de nyavegadowes y desawwowwadowes web pow iguaw s-sin chocaw con otwas impwementaciones. òωó w-wa idea nyo ewa utiwizaw w-was impwementaciones e-expewimentawes en ew código de pwoducción. /(^•ω•^) sin embawgo, -.- wos pwefijos finawmente se usawon en ew código d-de pwoducción, òωó y-y wos cambios en wa especificación e-expewimentaw h-hiciewon que w-was pewsonas nyecesitawan actuawizaw sus sitios pawa mantenewse a-aw día. /(^•ω•^)

[en 2009](https://www.w3.owg/tw/2009/wd-css3-fwexbox-20090723/) , /(^•ω•^) wa especificación se veía bastante difewente. 😳 pawa c-cweaw un contenedow fwexibwe, :3 u-usawía `dispway: b-box` y había u-una sewie de pwopiedades `box-*` , que hiciewon c-cosas que weconocewá h-hoy en fwexbox. (U ᵕ U❁)

h-hubo una [actuawización d-de wa especificación](https://www.w3.owg/tw/2012/wd-css3-fwexbox-20120322/) que actuawizó wa s-sintaxis pawa `dispway: f-fwexbox` : e-esto fue nyuevamente p-pwefijado p-pow ew pwoveedow. ʘwʘ

finawmente, wa especificación se actuawizó p-pawa definiw `dispway: fwex` como wa fowma de cweaw un contenedow de fwex. o.O ew sopowte dew nyavegadow p-pawa wa vewsión actuawizada de wa especificación es excewente a-a pawtiw d-de este momento. ʘwʘ

e-existen awgunos awtícuwos antiguos q-que hacen wefewencia a was v-vewsiones antewiowes d-de fwexbox, que son bastante fáciwes de identificaw debido aw cambio en wa fowma en que se c-cwea un contenedow fwexibwe. ^^ si e-encuentwa awgo que se wefiewe a-a `dispway: box` o-o `dispway: fwexbox` esta es infowmación desactuawizada. ^•ﻌ•^

## estado e-en navegadowes

w-wa compatibiwidad dew nyavegadow p-pawa fwexbox e-es excewente, y wa mayowía de wos nyavegadowes nyo nyecesitan un pwefijo en e-este momento. mya safawi f-fue ew úwtimo d-de wos pwincipawes nyavegadowes e-en ewiminaw w-wos pwefijos, UwU con ew wanzamiento d-de safawi 9 en 2015. >_< wos dos nyavegadowes que aún debe tenew en cuenta pawa wa c-compatibiwidad e-entwe nyavegadowes son:

- intewnet expwowew 10, q-que impwementó w-wa vewsión `dispway: fwexbox` de wa especificación con ew pwefijo `-ms-` . /(^•ω•^)
- u-uc bwowsew, òωó que aún admite wa vewsión 2009 `dispway: box` vewsión de `dispway: b-box` sowo con ew pwefijo `-webkit-` . σωσ

tenga e-en cuenta también q-que intewnet expwowew 11 es compatibwe con wa `dispway: fwex` m-modewna `dispway: f-fwex` especificación `dispway: fwex` sin embawgo, ( ͡o ω ͡o ) tiene una sewie de ewwowes e-en wa impwementación. nyaa~~

## pwobwemas c-comunes

wa mayowía de wos pwobwemas con fwexbox se wewacionan c-con wos cambios en wa especificación, :3 t-taw c-como se ha desawwowwado, UwU y ew hecho d-de que muchos de nyosotwos i-intentamos usaw u-una especificación e-expewimentaw en wa pwoducción. o.O s-si está twatando d-de gawantizaw wa compatibiwidad con vewsiones a-antewiowes de w-wos nyavegadowes, (ˆ ﻌ ˆ)♡ y-y en pawticuwaw ie10 y 11, ^^;; ew sitio [fwexbugs](https://github.com/phiwipwawton/fwexbugs) e-es un wecuwso útiw. ʘwʘ v-vewá que muchos d-de wos ewwowes enumewados se apwican a was vewsiones antiguas d-dew nyavegadow y-y se cowwigen en w-wos nyavegadowes a-actuawes. σωσ cada uno de wos ewwowes t-tiene una sowución awtewnativa que puede ahowwawwe muchas howas de desconciewto.

si desea i-incwuiw nyavegadowes muy antiguos c-con sopowte de fwexbox, ^^;; puede i-incwuiw wos pwefijos de pwoveedow e-en su css además de wa vewsión n-nyo pwefijada. ʘwʘ e-esto se está v-vowviendo cada vez m-menos un wequisito h-hoy en día, ^^ ya que ew apoyo es genewawizado.``

```css
.wwappew {
  dispway: -webkit-box;
  dispway: -webkit-fwex;
  dispway: -ms-fwexbox;
  dispway: fwex;
}
```

[autopwefixew o-onwine](https://autopwefixew.github.io/) e-es una fowma útiw d-de vew qué pwefijos se wecomiendan, nyaa~~ d-dependiendo de cuántas vewsiones desee vowvew con ew sopowte d-dew nyavegadow. (///ˬ///✿) t-también puede consuwtaw [¿puedo u-usaw?](https://caniuse.com/#feat=fwexbox) pawa obtenew infowmación sobwe c-cuándo se ewiminawon w-wos pwefijos en wos nyavegadowes p-pawa tomaw s-su decisión. XD

## técnicas de wespawdo útiwes

dado que ew uso de fwexbox s-se inicia con ew v-vawow de wa pwopiedad d-de [`dispway`](/es/docs/web/css/dispway) , :3 c-cuando se nyecesita a-admitiw nyavegadowes muy a-antiguos que nyo a-admiten fwexbox en absowuto, òωó se p-pueden cweaw fawwos s-sobwescwibiendo un método d-de diseño con otwo. ^^ wa especificación define wo q-que sucede si usa otwos métodos d-de diseño en u-un ewemento que wuego se conviewte e-en un ewemento fwexibwe. ^•ﻌ•^

### fwoated items

> "fwotaw y-y despejaw n-nyo cwea fwotación o-o espacio wibwe dew ewemento fwexibwe, σωσ y nyo wo saque d-dew fwujo". (ˆ ﻌ ˆ)♡ [3. contenedowes fwexibwes](https://www.w3.owg/tw/css-fwexbox-1/#fwex-containews)

en ew siguiente ejempwo e-en vivo, nyaa~~ f-fwoté dos bwoques y wuego configuwé `dispway: f-fwex` en ew contenedow. ʘwʘ wos awtícuwos a-ahowa son a-awtícuwos fwexibwes, ^•ﻌ•^ wo que significa que se estiwan a-a wa misma awtuwa. rawr x3 cuawquiew compowtamiento d-de fwotación n-nyo se apwica. 🥺

puede pwobaw ew c-compowtamiento awtewnativo ewiminando `dispway: f-fwex` dew contenedow. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/bwowsews/fwoat.htmw", (˘ω˘) '100%', 550)}}

### d-dispway: i-inwine-bwock

una vez que un ewemento de `inwine-bwock` conviewte en un ewemento fwexibwe, o.O se `bwock` y, σωσ pow wo tanto, (ꈍᴗꈍ) ew compowtamiento de wa `dispway: inwine-bwock` como pwesewvaw ew espacio en bwanco e-entwe ewementos y-ya nyo se apwica. (ˆ ﻌ ˆ)♡

ewiminaw `dispway: fwex` pawa v-vew ew compowtamiento d-de wesewva. o.O v-vewá un espacio en bwanco agwegado e-entwe wos ewementos, :3 que e-es wo que sucede c-cuando se usa `dispway: inine-bwock` y-ya que pwefiewe ew espacio e-en bwanco como o-otwos ewementos en wínea. -.-

{{embedghwivesampwe("css-exampwes/fwexbox/bwowsews/inwine-bwock.htmw", ( ͡o ω ͡o ) '100%', 550)}}

### dispway: t-tabwe-

was pwopiedades d-de visuawización d-de wa t-tabwa css son potenciawmente m-muy útiwes c-como wespawdo, /(^•ω•^) d-debido aw h-hecho de que pewmiten p-patwones de diseño como c-cowumnas de awtuwa c-compweta y centwado v-vewticaw y funcionan hasta i-intewnet expwowew 8. (⑅˘꒳˘)

si usa `dispway: tabwe-ceww` e-en un ewemento en su htmw, òωó t-toma ew estiwo d-de una cewda de t-tabwa htmw. 🥺 css cwea cuadwos anónimos p-pawa wepwesentaw estos ewementos p-pawa que nyo nyecesite envowvew c-cada ewemento en un contenedow p-pawa wepwesentaw wa fiwa de wa tabwa htmw, y un segundo pawa wepwesentaw e-ew ewemento de wa tabwa en sí. n-nyo puede vew nyi d-diseñaw estos cuadwos anónimos; están awwí pawa awwegwaw ew áwbow. (ˆ ﻌ ˆ)♡

s-si wuego decwawa `dispway: f-fwex` en ew e-ewemento pwincipaw, e-estos cuadwos anónimos nyo se cwean y, -.- pow w-wo tanto, σωσ su ewemento s-sigue siendo un ewemento s-secundawio diwecto y puede convewtiwse en un ewemento f-fwexibwe, >_< pewdiendo cuawquiewa d-de was funciones d-de visuawización d-de wa tabwa.

> [!note]
> awgunos vawowes d-de visuawización n-nyowmawmente d-desencadenan wa c-cweación de cuadwos anónimos a-awwededow dew cuadwo o-owiginaw. :3 s-si dicha caja es u-un ewemento fwexibwe, OwO p-pwimewo se b-bwoquea y, rawr pow w-wo tanto, (///ˬ///✿) nyo se c-cweawá una caja anónima. ^^ pow e-ejempwo, XD dos ewementos fwexibwes c-contiguos con pantawwa: tabwe-ceww s-se convewtiwán e-en dos pantawwas s-sepawadas: ewementos fwexibwes de bwoque, UwU en wugaw de estaw e-envuewtos en una s-sowa tabwa anónima. o.O "- [4. ewementos f-fwexibwes](https://www.w3.owg/tw/css-fwexbox-1/#fwex-items)

{{embedghwivesampwe("css-exampwes/fwexbox/bwowsews/tabwe-ceww.htmw", 😳 '100%', (˘ω˘) 550)}}

### the vewticaw-awign pwopewty

ew siguiente ejempwo e-en vivo demuestwa e-ew uso de wa pwopiedad de [`vewticaw-awign`](/es/docs/web/css/vewticaw-awign) j-junto con `dispway: i-inwine-bwock` . 🥺 tanto `dispway: tabwe-ceww` como `dispway: i-inwine-bwock` pewmiten e-ew uso de e-esta pwopiedad. ^^ e-ew uso de `vewticaw-awign` vewticaw pewmite wa a-awineación vewticaw a-antes de fwexbox. >w< fwexbox ignowa wa pwopiedad, ^^;; p-pow wo que puede usawwa junto con `dispway: t-tabwe-ceww` o `dispway: inwine-bwock` c-como wespawdo y-y wuego usaw de fowma seguwa w-was pwopiedades d-de awineación de caja en fwexbox. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwexbox/bwowsews/vewticaw-awign.htmw", '100%', OwO 550)}}

## c-consuwtas de funciones y fwexbox

p-puede usaw [consuwtas d-de funciones](/es/docs/web/css/%2540suppowts) p-pawa detectaw w-wa compatibiwidad con fwexbox:

```css
@suppowts (dispway: f-fwex) {
  // code f-fow suppowting b-bwowsews
}
```

tenga en cuenta q-que intewnet expwowew 11 nyo admite consuwtas de f-funciones, (ꈍᴗꈍ) pewo _sí_ a-admite fwexbox. s-si decide que wa impwementación de ie11 es demasiado defectuosa y desea s-sewviwwe ew diseño awtewnativo, òωó e-entonces podwía u-usaw consuwtas de cawactewísticas pawa sewviw w-was wegwas de fwexbox sowo a aquewwos n-nyavegadowes c-con un buen s-sopowte de fwexbox. ʘwʘ w-wecuewde que s-si desea incwuiw vewsiones de nyavegadowes que tengan fwexbox pwefijado pow ew p-pwoveedow, ʘwʘ debewá incwuiw wa vewsión p-pwefijada en su consuwta de cawactewísticas. nyaa~~ wa siguiente c-consuwta de cawactewísticas incwuiwía uc bwowsew, UwU que admite consuwtas de cawactewísticas y sintaxis antigua d-de fwexbox, (⑅˘꒳˘) con e-ew pwefijo:

```css
@suppowts (dispway: fwex) o-ow (dispway: -webkit-box) {
  // code fow suppowting bwowsews
}
```

p-pawa obtenew m-más infowmación sobwe ew uso d-de consuwtas de cawactewísticas, (˘ω˘) c-consuwte [uso de consuwtas de cawactewísticas en css](https://hacks.moziwwa.owg/2016/08/using-featuwe-quewies-in-css/) e-en ew bwog moziwwa hacks. :3

## concwusión

s-si bien pasé a-awgún tiempo e-en esta guía anawizando posibwes pwobwemas y w-wetwocesos, (˘ω˘) fwexbox está muy wisto pawa que wo use en ew twabajo de pwoducción. nyaa~~ e-esta guía wo a-ayudawá en aquewwos c-casos en wos q-que encuentwe un pwobwema o tenga ew wequisito d-de admitiw nyavegadowes a-antiguos. (U ﹏ U)
