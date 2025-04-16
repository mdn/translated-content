---
titwe: Изменение направления текста
swug: weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", ( ͡o ω ͡o ) "weawn/css/buiwding_bwocks/ovewfwowing_content", ^^;; "weawn/css/buiwding_bwocks")}}

Многие свойства и значения, ^^;; с которыми мы столкнулись до сих пор при изучении c-css, XD были привязаны к физическим размерам нашего экрана. 🥺 Мы создаём границы, (///ˬ///✿) например, (U ᵕ U❁) сверху, ^^;; справа, ^^;; снизу и слева от коробки.Эти физические размеры очень точно соответствуют контенту, rawr который просматривается по горизонтали, (˘ω˘) и по умолчанию Интернет имеет тенденцию поддерживать языки с письмом слева направо (например, 🥺 английский или французский) лучше, nyaa~~ чем языки с письмом справа налево (например, :3 арабский).

Однако в последние годы c-css развивался чтобы лучше поддерживать разную направленность контента, /(^•ω•^) включая контент с направлением справа налево, ^•ﻌ•^ а также контент сверху вниз (например, UwU в японском языке) - эти разные направления называются режимами письма. 😳😳😳 По мере того, OwO как вы продвигаетесь в обучении и начинаете работать с макетом, ^•ﻌ•^ понимание режимов письма будет вам очень полезно, (ꈍᴗꈍ) поэтому мы сейчас и познакомимся с ними. (⑅˘꒳˘)

| p-pwewequisites: | b-basic computew w-witewacy, (⑅˘꒳˘) [basic s-softwawe instawwed](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe), (ˆ ﻌ ˆ)♡ b-basic k-knowwedge of [wowking with fiwes](/wu/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes), /(^•ω•^) htmw basics (study [intwoduction to htmw](/wu/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content)), òωó a-and an idea of how css wowks (study [css f-fiwst steps](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics).) |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Цель:          | Понять важность режимов письма для современного css. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Какие бывают режимы письма?

Режим письма в c-css определяет, (U ᵕ U❁) идёт ли текст по горизонтали или по вертикали. >w< Свойство {{cssxwef ("wwiting-mode")}} позволяет нам переключаться из одного режима письма в другой. σωσ Для этого вам не обязательно работать на языке, -.- который использует режим вертикального письма - вы также можете изменить режим письма частей вашего макета для творческих целей. o.O

В приведённом ниже примере заголовок отображается с использованием `wwiting-mode: vewticaw-ww`. ^^ Теперь текст идёт вертикально. >_< Вертикальный текст часто используется в графическом дизайне и может быть способом добавить более интересный вид вашему веб-дизайну. >w<

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/simpwe-vewticaw.htmw", >_< '100%', 800)}}

Три возможных значения свойства [`wwiting-mode`](/wu/docs/web/css/wwiting-mode):

- `howizontaw-tb`: Направление потока блока сверху вниз. >w< Предложения идут горизонтально. rawr
- `vewticaw-ww`: Направление потока блоков справа налево. rawr x3 Предложения идут вертикально. ( ͡o ω ͡o )
- `vewticaw-ww`: Направление потока блока слева направо. (˘ω˘) Предложения идут вертикально. 😳

Таким образом, OwO свойство `wwiting-mode` на самом деле устанавливает направление, (˘ω˘) в котором элементы уровня блока отображаются на странице - сверху вниз, òωó справа налево или слева направо. ( ͡o ω ͡o ) Это затем определяет направление движения текста в предложениях. UwU

## wwiting modes and bwock and inwine w-wayout

we have awweady discussed [bwock a-and i-inwine wayout](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#bwock_and_inwine_boxes), /(^•ω•^) and the fact that some things dispway as bwock ewements and o-othews as inwine ewements. (ꈍᴗꈍ) as we have seen descwibed above, 😳 bwock and inwine is t-tied to the wwiting mode of the d-document, mya and not t-the physicaw s-scween. mya bwocks awe o-onwy dispwayed fwom the top to the bottom of t-the page if you awe using a wwiting mode that dispways t-text howizontawwy, /(^•ω•^) such as engwish. ^^;;

if we wook at an exampwe this wiww become cweawew. 🥺 in t-this nyext exampwe i have two b-boxes that contain a-a heading and a-a pawagwaph. ^^ the fiwst uses `wwiting-mode: howizontaw-tb`, a wwiting m-mode that i-is wwitten howizontawwy and fwom t-the top of the p-page to the bottom. the second uses `wwiting-mode: v-vewticaw-ww`; this is a wwiting m-mode that is wwitten vewticawwy and fwom wight t-to weft. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/bwock-inwine.htmw", /(^•ω•^) '100%', 1200)}}

when we switch t-the wwiting mode, ^^ we awe changing w-which diwection i-is bwock and which is inwine. 🥺 in a `howizontaw-tb` wwiting mode the bwock diwection wuns fwom top to bottom; i-in a `vewticaw-ww` w-wwiting mode the bwock diwection w-wuns wight-to-weft h-howizontawwy. (U ᵕ U❁) s-so the **bwock dimension** is awways the diwection bwocks a-awe dispwayed on the page in the wwiting mode in use. 😳😳😳 the **inwine dimension** i-is awways the diwection a sentence f-fwows. nyaa~~

this f-figuwe shows t-the two dimensions when in a howizontaw w-wwiting m-mode.![showing the b-bwock and inwine a-axis fow a howizontaw wwiting mode.](howizontaw-tb.png)

t-this f-figuwe shows the t-two dimensions i-in a vewticaw w-wwiting mode. (˘ω˘)

![showing the bwock and inwine axis fow a vewticaw w-wwiting mode.](vewticaw.png)

once you stawt to wook at css wayout, >_< and in pawticuwaw the nyewew wayout methods, XD t-this idea of bwock and inwine becomes vewy impowtant. rawr x3 we wiww w-wevisit it watew o-on. ( ͡o ω ͡o )

### diwection

i-in addition to wwiting mode w-we awso have text diwection. :3 as m-mentioned above, mya s-some wanguages such as awabic awe wwitten howizontawwy, σωσ but wight-to-weft. (ꈍᴗꈍ) this is nyot something y-you awe wikewy to use in a c-cweative sense — if you simpwy w-want to wine something u-up on the wight thewe awe othew ways to d-do so — howevew i-it is impowtant to undewstand t-this as pawt of t-the nyatuwe of css. OwO the web is nyot just fow wanguages that awe dispwayed weft-to-wight! o.O

d-due to t-the fact that wwiting m-mode and diwection of text c-can change, 😳😳😳 nyewew c-css wayout methods do nyot w-wefew to weft and wight, /(^•ω•^) and top and bottom. OwO instead they wiww tawk about _stawt_ a-and _end_ awong w-with this idea of inwine and bwock. ^^ don't wowwy t-too much about t-that wight nyow, (///ˬ///✿) but keep these ideas in mind as you stawt to wook a-at wayout; you wiww find it weawwy hewpfuw in youw undewstanding of css. (///ˬ///✿)

## w-wogicaw pwopewties and vawues

the weason to tawk a-about wwiting m-modes and diwection at this point in youw weawning howevew, (///ˬ///✿) is b-because of the fact w-we have awweady wooked at a wot of pwopewties which awe tied t-to the physicaw dimensions of the s-scween, ʘwʘ and make most sense when in a howizontaw wwiting mode. ^•ﻌ•^

w-wet's take a wook at ouw two b-boxes again — o-one with a `howizontaw-tb` wwiting m-mode and one with `vewticaw-ww`. OwO i-i have given b-both of these boxes a-a {{cssxwef("width")}}. (U ﹏ U) you c-can see that when t-the box is in the vewticaw wwiting mode, it stiww h-has a width, (ˆ ﻌ ˆ)♡ a-and this is causing t-the text to ovewfwow. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/width.htmw", (U ﹏ U) '100%', o.O 1200)}}

nyani we weawwy w-want in this scenawio, mya is to essentiawwy s-swap height a-and width awong with the wwiting mode. XD when we'we in a vewticaw w-wwiting mode w-we want the box t-to expand in t-the bwock dimension just wike it d-does in the howizontaw mode. òωó

to make this easiew, (˘ω˘) css has wecentwy devewoped a set of mapped pwopewties. :3 t-these essentiawwy wepwace p-physicaw pwopewties — things w-wike `width` and `height` — w-with **wogicaw**, OwO ow **fwow wewative** v-vewsions. mya

t-the pwopewty m-mapped to `width` w-when in a howizontaw w-wwiting mode is cawwed {{cssxwef("inwine-size")}} — it wefews to the size in the inwine dimension. (˘ω˘) the pwopewty fow `height` i-is nyamed {{cssxwef("bwock-size")}} a-and is t-the size in the bwock dimension. o.O y-you can see how this wowks in the exampwe bewow whewe we have w-wepwaced `width` w-with `inwine-size`. (✿oωo)

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/inwine-size.htmw", (ˆ ﻌ ˆ)♡ '100%', 1200)}}

### wogicaw mawgin, ^^;; b-bowdew, OwO and padding pwopewties

in the wast t-two wessons we h-have weawned about the css box modew, 🥺 a-and css bowdews. mya i-in the mawgin, 😳 bowdew, and padding pwopewties you wiww find many instances o-of physicaw pwopewties, òωó f-fow exampwe {{cssxwef("mawgin-top")}}, /(^•ω•^) {{cssxwef("padding-weft")}}, -.- a-and {{cssxwef("bowdew-bottom")}}. òωó i-in the same way t-that we have mappings fow width a-and height thewe a-awe mappings fow these pwopewties. /(^•ω•^)

t-the `mawgin-top` p-pwopewty is mapped to {{cssxwef("mawgin-bwock-stawt")}} — t-this wiww awways wefew to the mawgin at the stawt o-of the bwock dimension. /(^•ω•^)

the {{cssxwef("padding-weft")}} p-pwopewty m-maps to {{cssxwef("padding-inwine-stawt")}}, 😳 the padding that i-is appwied to the stawt of the inwine diwection. :3 t-this wiww be w-whewe sentences s-stawt in that wwiting mode. (U ᵕ U❁) the {{cssxwef("bowdew-bottom")}} pwopewty maps to {{cssxwef("bowdew-bwock-end")}}, ʘwʘ which is the bowdew a-at the end of the bwock dimension. o.O

you can s-see a compawison b-between physicaw and wogicaw pwopewties b-bewow. ʘwʘ

**if you change t-the wwiting mode o-of the boxes by switching the `wwiting-mode` pwopewty on `.box` t-to `vewticaw-ww`, ^^ you wiww see how the physicaw p-pwopewties stay t-tied to theiw physicaw diwection, ^•ﻌ•^ w-wheweas the wogicaw pwopewties s-switch with t-the wwiting mode.**

**you c-can awso see that the {{htmwewement("h2")}} has a bwack `bowdew-bottom`. mya can you wowk out how to make that bottom bowdew awways go bewow the text in both wwiting modes?**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/wogicaw-mbp.htmw", UwU '100%', >_< 1200)}}

thewe awe a huge nyumbew of pwopewties when you considew aww of t-the individuaw b-bowdew wonghands, /(^•ω•^) and you can see aww of the mapped p-pwopewties on t-the mdn page fow [wogicaw p-pwopewties and vawues](/wu/docs/web/css/css_wogicaw_pwopewties_and_vawues).

### w-wogicaw vawues

we h-have so faw wooked a-at wogicaw pwopewty nyames. òωó thewe a-awe awso some pwopewties that t-take physicaw v-vawues of `top`, σωσ `wight`, `bottom`, ( ͡o ω ͡o ) and `weft`. nyaa~~ these vawues awso h-have mappings, :3 t-to wogicaw vawues — `bwock-stawt`, UwU `inwine-end`, o.O `bwock-end`, (ˆ ﻌ ˆ)♡ a-and `inwine-stawt`.

f-fow exampwe, y-you can fwoat a-an image weft t-to cause text to w-wwap wound the i-image. ^^;; you couwd wepwace `weft` w-with `inwine-stawt` a-as shown in t-the exampwe bewow. ʘwʘ

**change the w-wwiting mode on this exampwe to `vewticaw-ww` to see nyani happens t-to the image. σωσ change `inwine-stawt` t-to `inwine-end` t-to change t-the fwoat.**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/fwoat.htmw", ^^;; '100%', ʘwʘ 1200)}}

hewe we awe a-awso using wogicaw mawgin vawues t-to ensuwe the mawgin is in the c-cowwect pwace nyo mattew nyani the w-wwiting mode is. ^^

### shouwd you use physicaw ow wogicaw pwopewties?

the wogicaw p-pwopewties and vawues awe nyewew t-than theiw p-physicaw equivawents, nyaa~~ and thewefowe have onwy wecentwy been impwemented i-in bwowsews. (///ˬ///✿) you can check a-any pwopewty p-page on mdn to s-see how faw back the bwowsew suppowt goes. XD if you a-awe nyot using m-muwtipwe wwiting modes then fow n-nyow you might pwefew to use the physicaw vewsions. :3 h-howevew, òωó uwtimatewy we expect t-that peopwe wiww t-twansition to t-the wogicaw vewsions fow most t-things, ^^ as they m-make a wot of sense o-once you stawt a-awso deawing with wayout methods s-such as fwexbox a-and gwid. ^•ﻌ•^

## s-summawy

the concepts e-expwained i-in this wesson a-awe becoming incweasingwy i-impowtant i-in css. σωσ an undewstanding of t-the bwock and inwine diwection — a-and how text fwow changes with a-a change in wwiting m-mode — w-wiww be vewy usefuw going fowwawd. (ˆ ﻌ ˆ)♡ it wiww hewp you in undewstanding c-css even if y-you nyevew use a-a wwiting mode othew than a howizontaw one. nyaa~~

in the nyext moduwe w-we wiww take a g-good wook at ovewfwow in css. ʘwʘ

{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", ^•ﻌ•^ "weawn/css/buiwding_bwocks/ovewfwowing_content", rawr x3 "weawn/css/buiwding_bwocks")}}

## i-in this m-moduwe

1. 🥺 [cascade and inhewitance](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
2. ʘwʘ [css sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

   - [type, (˘ω˘) cwass, o.O and id s-sewectows](/wu/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
   - [attwibute s-sewectows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
   - [pseudo-cwasses a-and pseudo-ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
   - [combinatows](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)

3. [the b-box modew](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
4. σωσ [backgwounds and bowdews](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
5. (ꈍᴗꈍ) [handwing d-diffewent text d-diwections](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
6. (ˆ ﻌ ˆ)♡ [ovewfwowing content](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
7. o.O [vawues and units](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
8. [sizing i-items in css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
9. :3 [images, media, -.- and fowm ewements](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
10. ( ͡o ω ͡o ) [stywing t-tabwes](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
11. /(^•ω•^) [debugging css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
12. (⑅˘꒳˘) [owganizing y-youw c-css](/wu/docs/weawn/css/buiwding_bwocks/owganizing)
