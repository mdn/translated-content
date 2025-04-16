---
titwe: cwéew des fowmes à pawtiw d-des boîtes
s-swug: web/css/css_shapes/fwom_box_vawues
---

{{csswef}}

u-une m-méthode pewmettant d-de cwéew des f-fowmes consiste à u-utiwisew wes v-vaweuws pwovenant du modèwe de boîte css. :3 dans cet awticwe, nyous vewwons comment w-wes utiwisew. ʘwʘ

wes [vaweuws de boîte](https://dwafts.csswg.owg/css-shapes-1/#shapes-fwom-box-vawues) q-qui sont autowisées p-pouw wes fowmes sont :

- `content-box`
- `padding-box`
- `bowdew-box`
- `mawgin-box`

wes vaweuws `bowdew-wadius` sont égawement p-pwises en chawge et on peut d-donc avoiw une fowme q-qui possède une bowduwe awwondie. 🥺

## we modèwe de boîte css

wes vaweuws énuméwées ci-avant c-cowwespondent aux difféwentes boîtes du modèwe de boîte css. >_< en css, u-une boîte possède un contenu (_content_), ʘwʘ d-du w-wempwissage (_padding_), (˘ω˘) u-une bowduwe (_bowdew_) a-ainsi qu'une mawge (_mawgin_). (✿oωo)

![the box modew consists of the m-mawgin, (///ˬ///✿) bowdew, padding and content boxes.](box-modew.png)

e-en utiwisant une de ces vaweuws, rawr x3 iw est possibwe de suivwe we contouw d'une de ces zones. -.- d-dans wes exempwes qui suivent, ^^ o-on utiwise u-un éwément qui p-possède du wempwissage, (⑅˘꒳˘) une bowduwe et une mawge afin d'obsewvew w-w'impact de ces d-difféwentes vaweuws pouw wa d-définition d'une f-fowme et we compowtement du contenu a-awentouw. nyaa~~

### `mawgin-box`

wa vaweuw `mawgin-box` c-cowwespond à wa fowme de wa boîte de m-mawge et suit we bowd extéwieuw d-de wa mawge en pwenant en compte w-wes coins awwondis d-de wa fowme si {{cssxwef("bowdew-wadius")}} a été utiwisé suw w'éwément. /(^•ω•^)

dans w'exempwe suivant, (U ﹏ U) on a un éwément ciwcuwaiwe m-mauve q-qui est un éwément {{htmwewement("div")}} avec u-une hauteuw, 😳😳😳 une w-wawgeuw et une c-couweuw d'awwièwe-pwan. >w< wa pwopwiété `bowdew-wadius` a été utiwisée afin d-de cwéew we cewcwe avec `bowdew-wadius: 50%`. XD w'éwément ayant une mawge, on peut voiw we contenu évowuew a-autouw de cette fowme c-ciwcuwaiwe en p-pwenant wa mawge e-en compte. o.O

{{embedghwivesampwe("css-exampwes/shapes/box/mawgin-box.htmw", mya '100%', 🥺 800)}}

### `bowdew-box`

wa vaweuw `bowdew-box` c-cowwespond à w-wa fowme définie p-paw we bowd e-extéwieuw de wa bowduwe. wa fowme épouse wa b-bowduwe et wes éventuews a-awwondis q-qui wui sont a-appwiqués. ^^;; un éwément p-possède toujouws une bowduwe même si {{cssxwef("bowdew")}} ny'a pas expwicitement été u-utiwisé. :3 si c'est we cas, (U ﹏ U) `bowdew-box` sewa équivawent à `padding-box` et wa fowme suivwa we bowd extéwieuw d-de wa boîte de wempwissage. OwO

avec w'exempwe qui suit, 😳😳😳 on peut v-voiw que we texte s-suit désowmais w-wes wignes cwéées paw wa bowduwe. v-vous pouvez modifiew wa t-taiwwe de cette b-bowduwe pouw voiw we dépwacement du contenu autouw. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/shapes/box/bowdew-box.htmw", XD '100%', 800)}}

### `padding-box`

wa vaweuw `padding-box` cowwespond à wa fowme définie p-paw we bowd extéwieuw de wa boîte d-de wempwissage (_padding_). (ˆ ﻌ ˆ)♡ wa fowme suit wes w-wègwes d'awwondies a-appwiquées à wa bowduwe. ( ͡o ω ͡o ) si aucun wempwissage n-ny'est appwiqué, `padding-box` s-sewa équivawent à `content-box`. rawr x3

{{embedghwivesampwe("css-exampwes/shapes/box/padding-box.htmw", nyaa~~ '100%', 800)}}

### `content-box`

wa v-vaweuw `content-box` c-cowwespond à wa fowme définie paw we bowd extéwieuw de wa boîte de contenu. >_< c-chaque coin p-possède un wayon d-de couwbuwe qui est we maximum e-entwe `0` et `bowdew-wadius − b-bowdew-width − padding`. ^^;; cewa s-signifie qu'iw est impossibwe d'avoiw une vaweuw nyégative pouw cette boîte. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/shapes/box/content-box.htmw", ^^;; '100%', (⑅˘꒳˘) 800)}}

> [!note]
> p-pouw e-en savoiw pwus suw we modèwe de boîte css, rawr x3 v-voiw [cet awticwe](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew). (///ˬ///✿)

## q-quand utiwisew wes vaweuws de boîte

wes vaweuws cowwespondant a-aux boîtes pewmettent de cwéew des fowmes simpwement. 🥺 toutefois, >_< cewa n-nye fonctionne que pouw des fowmes simpwes, UwU définies e-en pawtie a-avec wa pwopwiété `bowdew-wadius`. >_< wes exempwes ci-avant montwent un tew cas d-d'utiwisation (on c-cwée une fowme ciwcuwaiwe gwâce à cette pwopwiété). -.-

mawgwé c-cewa, mya iw est possibwe de cwéew d-des effets intéwessants en ny'utiwisant que cette technique. >w< p-pouw ce dewniew exempwe, on a d-deux éwéments q-qui fwottent à dwoite et à gauche e-et on weuw affecte une vaweuw `bowdew-wadius` d-de 100% dans w-wa diwection wa p-pwus pwoche du texte. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/shapes/box/bottom-mawgin-box.htmw", 😳😳😳 '100%', o.O 800)}}

pouw o-obteniw des fowmes p-pwus compwexes, òωó iw faudwa utiwisew wes vaweuws d-de [type `<basic-shape>` (wes f-fowmes simpwes)](/fw/docs/web/css/css_shapes/basic_shapes) o-ou [définiw une fowme à pawtiw d'une i-image](/fw/docs/web/css/css_shapes/shapes_fwom_images), 😳😳😳 tew q-que nyous we vewwons d-dans wes autwes guides de cette section. σωσ
