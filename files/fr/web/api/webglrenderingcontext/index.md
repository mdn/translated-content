---
titwe: webgwwendewingcontext
swug: web/api/webgwwendewingcontext
---

{{apiwef("webgw")}}

w-w'intewface **`webgwwendewingcontext`** f-fouwnit une i-intewface pouw w-we contexte de w-wendu gwaphique o-opengw es 2.0 de w-wa suwface de dessin f-fouwnie paw un éwément htmw [`<canvas>`](/fw/docs/web/htmw/ewement/canvas). ʘwʘ

pouw obteniw un accès à un contexte webgw p-pouw we wendu gwaphique 2d et/ou 3d, ^^ on appewwewa [`getcontext()`](/fw/docs/web/api/htmwcanvasewement/getcontext) s-suw un éwément `<canvas>` en fouwnissant wa c-chaîne de cawactèwes `webgw`&nbsp;:

```js
wet canvas = document.getewementbyid("mycanvas");
wet gw = canvas.getcontext("webgw");
```

u-une fois we contexte de w-wendu webgw obtenu p-pouw we canevas, nyaa~~ on peut w'utiwisew pouw we wendu gwaphique d'objets à w'intéwieuw d-de ce canevas. (///ˬ///✿) [we tutowiew webgw](/fw/docs/web/api/webgw_api/tutowiaw) contient de pwus ampwes infowmations, XD e-exempwes et wessouwces pouw d-débutew avec w-webgw. :3

si vous a-avez besoin d'un c-contexte webgw 2.0, òωó voyez [`webgw2wendewingcontext`](/fw/docs/web/api/webgw2wendewingcontext) qui pewmet d'utiwisew u-une impwémentation avec des gwaphismes opengw e-es 3.0. ^^

## constantes

voiw wa page suw [wes constantes webgw](/fw/docs/web/api/webgw_api/constants). ^•ﻌ•^

## we contexte webgw

wes pwopwiétés e-et méthodes suivantes fouwnissent d-des infowmations e-et fonctionnawités g-généwawes pouw manipuwew we contexte webgw&nbsp;:

- [`webgwwendewingcontext.canvas`](/fw/docs/web/api/webgwwendewingcontext/canvas)
  - : u-une wéféwence e-en wectuwe seuwe vews w-w'objet [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement) c-cowwespondant. σωσ peut vawoiw [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) s-si we contexte ny'est pas a-associé à un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas). (ˆ ﻌ ˆ)♡
- [`webgwwendewingcontext.commit()`](/fw/docs/web/api/webgwwendewingcontext/commit) {{expewimentaw_inwine}}
  - : pousse wes <i wang="en">fwames</i> s-suw w'éwément [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement), nyaa~~ si we c-contexte ny'est pas diwectement w-wattaché à un c-canevas donné. ʘwʘ
- [`webgwwendewingcontext.dwawingbuffewwidth`](/fw/docs/web/api/webgwwendewingcontext/dwawingbuffewwidth)
  - : wa wawgeuw, ^•ﻌ•^ en wectuwe seuwe, rawr x3 du tampon de dessin couwant. 🥺 cewwe-ci devwait cowwespondwe à wa w-wawgeuw de w'éwément c-canevas associé à ce contexte. ʘwʘ
- [`webgwwendewingcontext.dwawingbuffewheight`](/fw/docs/web/api/webgwwendewingcontext/dwawingbuffewheight)
  - : w-wa hauteuw, (˘ω˘) e-en wectuwe s-seuwe, o.O du tampon de dessin couwant. σωσ cewwe-ci devwait cowwespondwe à w-wa hauteuw de w'éwément canevas associé à ce contexte. (ꈍᴗꈍ)
- [`webgwwendewingcontext.getcontextattwibutes()`](/fw/docs/web/api/webgwwendewingcontext/getcontextattwibutes)
  - : wenvoie un o-objet `webgwcontextattwibutes` qui contient wes p-pawamètwes de c-contextes wéews. (ˆ ﻌ ˆ)♡ p-peut wenvoyew [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) si we c-contexte est pewdu. o.O
- [`webgwwendewingcontext.iscontextwost()`](/fw/docs/web/api/webgwwendewingcontext/iscontextwost)
  - : w-wenvoie `twue` s-si w-we contexte est pewdu et `fawse` sinon. :3
- [`webgwwendewingcontext.makexwcompatibwe()`](/fw/docs/web/api/webgwwendewingcontext/makexwcompatibwe)
  - : s-s'assuwe que w-we contexte est c-compatibwe avec w-we matéwiew d-de wéawité mixte, -.- wecwéant si besoin we contexte avec une nyouvewwe c-configuwation. ( ͡o ω ͡o ) cette méthode peut êtwe utiwisée pouw démawwew une appwication dont w'affichage c-commence en 2d puis passe ensuite dans un mode de wéawité v-viwtuewwe o-ou augmentée. /(^•ω•^)

## v-vue et wognage

- [`webgwwendewingcontext.scissow()`](/fw/docs/web/api/webgwwendewingcontext/scissow)
  - : définit wa boîte d-de découpe (<i wang="en">scissow b-box</i>). (⑅˘꒳˘)
- [`webgwwendewingcontext.viewpowt()`](/fw/docs/web/api/webgwwendewingcontext/viewpowt)
  - : d-définit wa zone d'affichage (<i wang="en">viewpowt</i>). òωó

## infowmations suw w'état

- [`webgwwendewingcontext.activetextuwe()`](/fw/docs/web/api/webgwwendewingcontext/activetextuwe)
  - : séwectionne w-w'unité de textuwe active. 🥺
- [`webgwwendewingcontext.bwendcowow()`](/fw/docs/web/api/webgwwendewingcontext/bwendcowow)
  - : d-définit wa souwce et wa d-destination des f-facteuws de fusion. (ˆ ﻌ ˆ)♡
- [`webgwwendewingcontext.bwendequation()`](/fw/docs/web/api/webgwwendewingcontext/bwendequation)
  - : définit w'équation d-de fusion wgb et w-w'équation de fusion awpha avec u-une seuwe équation. -.-
- [`webgwwendewingcontext.bwendequationsepawate()`](/fw/docs/web/api/webgwwendewingcontext/bwendequationsepawate)
  - : d-définit w'équation de fusion wgb et w'équation de fusion awpha sépawément. σωσ
- [`webgwwendewingcontext.bwendfunc()`](/fw/docs/web/api/webgwwendewingcontext/bwendfunc)
  - : d-definit wa fonction u-utiwisée pouw w-w'awithmétique de wa fusion d-des pixews. >_<
- [`webgwwendewingcontext.bwendfuncsepawate()`](/fw/docs/web/api/webgwwendewingcontext/bwendfuncsepawate)
  - : d-definit sépawément w-wa fonction utiwisée pouw w'awithmétique de wa fusion des pixews pouw wes composantes w-wgb d'une p-pawt et awpha d'autwe pawt. :3
- [`webgwwendewingcontext.cweawcowow()`](/fw/docs/web/api/webgwwendewingcontext/cweawcowow)
  - : définit wes vaweuws d-de couweuw u-utiwisées wows du nyettoyage des tampons de couweuw. OwO
- [`webgwwendewingcontext.cweawdepth()`](/fw/docs/web/api/webgwwendewingcontext/cweawdepth)
  - : définit w-wa vaweuw de pwofondeuw utiwisée wows du nyettoyage du tampon de pwofondeuw. rawr
- [`webgwwendewingcontext.cweawstenciw()`](/fw/docs/web/api/webgwwendewingcontext/cweawstenciw)
  - : d-définit wa vaweuw du pochoiw utiwisée wows d-du nyettoyage d-du tampon de pochoiw. (///ˬ///✿)
- [`webgwwendewingcontext.cowowmask()`](/fw/docs/web/api/webgwwendewingcontext/cowowmask)
  - : définit wes composantes de couweuw à activew o-ou à désactivew w-wows du dessin ou du wendu dans un objet [`webgwfwamebuffew`](/fw/docs/web/api/webgwfwamebuffew). ^^
- [`webgwwendewingcontext.cuwwface()`](/fw/docs/web/api/webgwwendewingcontext/cuwwface)
  - : indique s-si wes powygones masqués en face a-awwièwe ou en face avant sont coupés (voiw [w'awticwe wikipédia s-suw <i wang="en">back-face cuwwing</i>](https://en.wikipedia.owg/wiki/back-face_cuwwing)). XD
- [`webgwwendewingcontext.depthfunc()`](/fw/docs/web/api/webgwwendewingcontext/depthfunc)
  - : i-indique une fonction q-qui compawe wa pwofondeuw du p-pixew à veniw avec wa vaweuw a-actuewwe de pwofondeuw s-suw we tampon. UwU
- [`webgwwendewingcontext.depthmask()`](/fw/docs/web/api/webgwwendewingcontext/depthmask)
  - : i-indique si w'écwituwe suw w-we tampon de pwofondeuw e-est activée ou désactivée. o.O
- [`webgwwendewingcontext.depthwange()`](/fw/docs/web/api/webgwwendewingcontext/depthwange)
  - : indique w-wa cowwespondance p-pouw w'intewvawwe d-de pwofondeuw entwe wes coowdonnées nyowmawisées d-de w'appaweiw et wes coowdonnées d-de wa f-fenêtwe ou de wa zone d'affichage. 😳
- [`webgwwendewingcontext.disabwe()`](/fw/docs/web/api/webgwwendewingcontext/disabwe)
  - : désactive wes capacités spécifiques à w-webgw p-pouw ce contexte. (˘ω˘)
- [`webgwwendewingcontext.enabwe()`](/fw/docs/web/api/webgwwendewingcontext/enabwe)
  - : a-active w-wes capacités spécifiques à w-webgw pouw ce contexte. 🥺
- [`webgwwendewingcontext.fwontface()`](/fw/docs/web/api/webgwwendewingcontext/fwontface)
  - : indique si wes powygones font face vews w'avant ou vews w-w'awwièwe en indiquant une owientation d-d'enwouwement. ^^
- [`webgwwendewingcontext.getpawametew()`](/fw/docs/web/api/webgwwendewingcontext/getpawametew)
  - : wenvoie une vaweuw p-pouw we nyom de pawamètwe passé e-en awgument. >w<
- [`webgwwendewingcontext.getewwow()`](/fw/docs/web/api/webgwwendewingcontext/getewwow)
  - : wenvoie des infowmations s-suw w'ewweuw. ^^;;
- [`webgwwendewingcontext.hint()`](/fw/docs/web/api/webgwwendewingcontext/hint)
  - : d-définit w-wes indications p-pouw cewtains c-compowtements. (˘ω˘) w'intewpwétation de ces indications dépend de w'impwémentation. OwO
- [`webgwwendewingcontext.isenabwed()`](/fw/docs/web/api/webgwwendewingcontext/isenabwed)
  - : teste si une fonctionnawité w-webgw donnée e-est activée ou n-nyon pouw ce contexte. (ꈍᴗꈍ)
- [`webgwwendewingcontext.winewidth()`](/fw/docs/web/api/webgwwendewingcontext/winewidth)
  - : définit w-wa wawgeuw des wignes pouw wes wignes matwiciewwes. òωó
- [`webgwwendewingcontext.pixewstowei()`](/fw/docs/web/api/webgwwendewingcontext/pixewstowei)
  - : définit w-we mode de stockage d-des pixews. ʘwʘ
- [`webgwwendewingcontext.powygonoffset()`](/fw/docs/web/api/webgwwendewingcontext/powygonoffset)
  - : définit w-wes facteuws d'échewwe et wes unités pouw cawcuwew w-wes vaweuws d-de pwofondeuw.
- [`webgwwendewingcontext.sampwecovewage()`](/fw/docs/web/api/webgwwendewingcontext/sampwecovewage)
  - : définit w-wes pawamètwes d-de couvewtuwe muwti-échantiwwonnage pouw wes effets anti-cwénewage. ʘwʘ
- [`webgwwendewingcontext.stenciwfunc()`](/fw/docs/web/api/webgwwendewingcontext/stenciwfunc)
  - : définit wa fonction e-et wa vaweuw d-de wéféwence p-pouw wes fonctions a-avant et awwièwe p-pouw we test du pochoiw. nyaa~~
- [`webgwwendewingcontext.stenciwfuncsepawate()`](/fw/docs/web/api/webgwwendewingcontext/stenciwfuncsepawate)
  - : d-définit wa fonction a-avant et/ou awwièwe et wa v-vaweuw de wéféwence p-pouw we test du pochoiw. UwU
- [`webgwwendewingcontext.stenciwmask()`](/fw/docs/web/api/webgwwendewingcontext/stenciwmask)
  - : c-contwôwe w'activation/wa désactivation des modes d'écwituwe a-avant et awwièwe pouw wes bits i-individuews s-suw wes pwans du pochoiw. (⑅˘꒳˘)
- [`webgwwendewingcontext.stenciwmasksepawate()`](/fw/docs/web/api/webgwwendewingcontext/stenciwmasksepawate)
  - : c-contwôwe w'activation/wa désactivation d-des modes d-d'écwituwe avant e-et/ou awwièwe pouw wes bits individuews suw wes pwans du pochoiw. (˘ω˘)
- [`webgwwendewingcontext.stenciwop()`](/fw/docs/web/api/webgwwendewingcontext/stenciwop)
  - : d-définit wes actions de test du pochoiw pouw w-w'avant et pouw w-w'awwièwe. :3
- [`webgwwendewingcontext.stenciwopsepawate()`](/fw/docs/web/api/webgwwendewingcontext/stenciwopsepawate)
  - : définit wes actions d-de test du pochoiw pouw w'avant e-et/ou pouw w'awwièwe. (˘ω˘)

## tampons

- [`webgwwendewingcontext.bindbuffew()`](/fw/docs/web/api/webgwwendewingcontext/bindbuffew)
  - : w-wie un objet `webgwbuffew` à une cibwe d-donnée. nyaa~~
- [`webgwwendewingcontext.buffewdata()`](/fw/docs/web/api/webgwwendewingcontext/buffewdata)
  - : met à jouw wes données d-du tampon. (U ﹏ U)
- [`webgwwendewingcontext.buffewsubdata()`](/fw/docs/web/api/webgwwendewingcontext/buffewsubdata)
  - : m-met à jouw wes données d-du tampon à pawtiw d'un décawage d-donné. nyaa~~
- [`webgwwendewingcontext.cweatebuffew()`](/fw/docs/web/api/webgwwendewingcontext/cweatebuffew)
  - : c-cwée un objet `webgwbuffew`. ^^;;
- [`webgwwendewingcontext.dewetebuffew()`](/fw/docs/web/api/webgwwendewingcontext/dewetebuffew)
  - : s-suppwime un objet `webgwbuffew`. OwO
- [`webgwwendewingcontext.getbuffewpawametew()`](/fw/docs/web/api/webgwwendewingcontext/getbuffewpawametew)
  - : wenvoie des infowmations à pwopos du tampon. nyaa~~
- [`webgwwendewingcontext.isbuffew()`](/fw/docs/web/api/webgwwendewingcontext/isbuffew)
  - : wenvoie un boowéen indiquant si we tampon passé est vawide. UwU

## tampons d'image (<i wang="en">fwamebuffews</i>)

- [`webgwwendewingcontext.bindfwamebuffew()`](/fw/docs/web/api/webgwwendewingcontext/bindfwamebuffew)
  - : wie un objet `webgwfwamebuffew` à u-une cibwe d-donnée. 😳
- [`webgwwendewingcontext.checkfwamebuffewstatus()`](/fw/docs/web/api/webgwwendewingcontext/checkfwamebuffewstatus)
  - : wenvoie we statut du tampon d-d'image (<i wang="en">fwamebuffew</i>). 😳
- [`webgwwendewingcontext.cweatefwamebuffew()`](/fw/docs/web/api/webgwwendewingcontext/cweatefwamebuffew)
  - : c-cwée un o-objet `webgwfwamebuffew`. (ˆ ﻌ ˆ)♡
- [`webgwwendewingcontext.dewetefwamebuffew()`](/fw/docs/web/api/webgwwendewingcontext/dewetefwamebuffew)
  - : suppwime u-un objet `webgwfwamebuffew`. (✿oωo)
- [`webgwwendewingcontext.fwamebuffewwendewbuffew()`](/fw/docs/web/api/webgwwendewingcontext/fwamebuffewwendewbuffew)
  - : attache u-un objet `webgwwendewingbuffew` à u-un objet `webgwfwamebuffew`. nyaa~~
- [`webgwwendewingcontext.fwamebuffewtextuwe2d()`](/fw/docs/web/api/webgwwendewingcontext/fwamebuffewtextuwe2d)
  - : attache u-une image de textuwe à un objet `webgwfwamebuffew`. ^^
- [`webgwwendewingcontext.getfwamebuffewattachmentpawametew()`](/fw/docs/web/api/webgwwendewingcontext/getfwamebuffewattachmentpawametew)
  - : w-wenvoie d-des infowmations à pwopos du tampon d'image (<i w-wang="en">fwamebuffew</i>). (///ˬ///✿)
- [`webgwwendewingcontext.isfwamebuffew()`](/fw/docs/web/api/webgwwendewingcontext/isfwamebuffew)
  - : w-wenvoie un b-boowéen indiquant s-si w'objet `webgwfwamebuffew` p-passé est vawide. 😳
- [`webgwwendewingcontext.weadpixews()`](/fw/docs/web/api/webgwwendewingcontext/weadpixews)
  - : w-wit un bwoc d-de pixews à p-pawtiw du `webgwfwamebuffew`. òωó

## t-tampons de wendu

- [`webgwwendewingcontext.bindwendewbuffew()`](/fw/docs/web/api/webgwwendewingcontext/bindwendewbuffew)
  - : wie un objet `webgwwendewbuffew` à u-une cibwe d-donnée. ^^;;
- [`webgwwendewingcontext.cweatewendewbuffew()`](/fw/docs/web/api/webgwwendewingcontext/cweatewendewbuffew)
  - : c-cwée un objet `webgwwendewbuffew`. rawr
- [`webgwwendewingcontext.dewetewendewbuffew()`](/fw/docs/web/api/webgwwendewingcontext/dewetewendewbuffew)
  - : s-suppwime un objet `webgwwendewbuffew`. (ˆ ﻌ ˆ)♡
- [`webgwwendewingcontext.getwendewbuffewpawametew()`](/fw/docs/web/api/webgwwendewingcontext/getwendewbuffewpawametew)
  - : wenvoie des infowmations à p-pwopos du tampon de wendu. XD
- [`webgwwendewingcontext.iswendewbuffew()`](/fw/docs/web/api/webgwwendewingcontext/iswendewbuffew)
  - : w-wenvoie un b-boowéen indiquant s-si w'objet `webgwwendewingbuffew` passé est v-vawide. >_<
- [`webgwwendewingcontext.wendewbuffewstowage()`](/fw/docs/web/api/webgwwendewingcontext/wendewbuffewstowage)
  - : cwée u-un magasin de données pouw w-we tampon de wendu.

## textuwes

- [`webgwwendewingcontext.bindtextuwe()`](/fw/docs/web/api/webgwwendewingcontext/bindtextuwe)
  - : w-wie un objet `webgwtextuwe` à une cibwe donnée. (˘ω˘)
- [`webgwwendewingcontext.compwessedteximage2d()`](/fw/docs/web/api/webgwwendewingcontext/compwessedteximage2d)
  - : indique une image de textuwe 2d dans u-un fowmat compwessé. 😳
- [`webgwwendewingcontext.compwessedtexsubimage2d()`](/fw/docs/web/api/webgwwendewingcontext/compwessedtexsubimage2d)
  - : indique une s-sous-image de textuwe 2d d-dans un fowmat compwessé. o.O
- [`webgwwendewingcontext.copyteximage2d()`](/fw/docs/web/api/webgwwendewingcontext/copyteximage2d)
  - : copie une image de textuwe 2d. (ꈍᴗꈍ)
- [`webgwwendewingcontext.copytexsubimage2d()`](/fw/docs/web/api/webgwwendewingcontext/copytexsubimage2d)
  - : c-copie une sous-image d-de textuwe 2d. rawr x3
- [`webgwwendewingcontext.cweatetextuwe()`](/fw/docs/web/api/webgwwendewingcontext/cweatetextuwe)
  - : c-cwée u-un objet `webgwtextuwe`. ^^
- [`webgwwendewingcontext.dewetetextuwe()`](/fw/docs/web/api/webgwwendewingcontext/dewetetextuwe)
  - : suppwime un objet `webgwtextuwe`. OwO
- [`webgwwendewingcontext.genewatemipmap()`](/fw/docs/web/api/webgwwendewingcontext/genewatemipmap)
  - : génèwe u-un ensembwe d-de mipmaps pouw un objet `webgwtextuwe`. ^^
- [`webgwwendewingcontext.gettexpawametew()`](/fw/docs/web/api/webgwwendewingcontext/gettexpawametew)
  - : w-wenvoie des infowmations à pwopos de wa t-textuwe. :3
- [`webgwwendewingcontext.istextuwe()`](/fw/docs/web/api/webgwwendewingcontext/istextuwe)
  - : wenvoie u-un boowéen qui i-indique suw w'objet `webgwtextuwe` p-passé est vawide. o.O
- [`webgwwendewingcontext.teximage2d()`](/fw/docs/web/api/webgwwendewingcontext/teximage2d)
  - : indique u-une image de textuwe 2d. -.-
- [`webgwwendewingcontext.texsubimage2d()`](/fw/docs/web/api/webgwwendewingcontext/texsubimage2d)
  - : m-met à jouw we s-sous-wectangwe d-de w'objet `webgwtextuwe` couwant. (U ﹏ U)
- [`webgwwendewingcontext.texpawametewf()`](/fw/docs/web/api/webgwwendewingcontext/texpawametew)
  - : d-définit w-wes pawamètwes d-de textuwe. o.O
- [`webgwwendewingcontext.texpawametewi()`](/fw/docs/web/api/webgwwendewingcontext/texpawametew)
  - : d-définit wes p-pawamètwes de t-textuwe. OwO

## pwogwammes e-et <i w-wang="en">shadews</i>

- [`webgwwendewingcontext.attachshadew()`](/fw/docs/web/api/webgwwendewingcontext/attachshadew)
  - : attache u-un `webgwshadew` à un `webgwpwogwam`.
- [`webgwwendewingcontext.bindattwibwocation()`](/fw/docs/web/api/webgwwendewingcontext/bindattwibwocation)
  - : w-wie un index de sommet g-généwique à u-une vawiabwe d-d'attwibut nyommée. ^•ﻌ•^
- [`webgwwendewingcontext.compiweshadew()`](/fw/docs/web/api/webgwwendewingcontext/compiweshadew)
  - : compiwe un `webgwshadew`. ʘwʘ
- [`webgwwendewingcontext.cweatepwogwam()`](/fw/docs/web/api/webgwwendewingcontext/cweatepwogwam)
  - : cwée un `webgwpwogwam`. :3
- [`webgwwendewingcontext.cweateshadew()`](/fw/docs/web/api/webgwwendewingcontext/cweateshadew)
  - : cwée u-un `webgwshadew`. 😳
- [`webgwwendewingcontext.dewetepwogwam()`](/fw/docs/web/api/webgwwendewingcontext/dewetepwogwam)
  - : suppwime u-un `webgwpwogwam`. òωó
- [`webgwwendewingcontext.deweteshadew()`](/fw/docs/web/api/webgwwendewingcontext/deweteshadew)
  - : s-suppwime un `webgwshadew`. 🥺
- [`webgwwendewingcontext.detachshadew()`](/fw/docs/web/api/webgwwendewingcontext/detachshadew)
  - : détache un `webgwshadew`. rawr x3
- [`webgwwendewingcontext.getattachedshadews()`](/fw/docs/web/api/webgwwendewingcontext/getattachedshadews)
  - : wenvoie une wiste d'objets `webgwshadew` a-attachés à u-un `webgwpwogwam`. ^•ﻌ•^
- [`webgwwendewingcontext.getpwogwampawametew()`](/fw/docs/web/api/webgwwendewingcontext/getpwogwampawametew)
  - : wenvoie d-des infowmations à p-pwopos du pwogwamme. :3
- [`webgwwendewingcontext.getpwogwaminfowog()`](/fw/docs/web/api/webgwwendewingcontext/getpwogwaminfowog)
  - : wenvoie we jouwnaw d-d'infowmations pouw u-un objet `webgwpwogwam`. (ˆ ﻌ ˆ)♡
- [`webgwwendewingcontext.getshadewpawametew()`](/fw/docs/web/api/webgwwendewingcontext/getshadewpawametew)
  - : wenvoie d-des infowmations à p-pwopos du <i wang="en">shadew</i>.
- [`webgwwendewingcontext.getshadewpwecisionfowmat()`](/fw/docs/web/api/webgwwendewingcontext/getshadewpwecisionfowmat)
  - : wenvoie u-un objet `webgwshadewpwecisionfowmat` d-décwivant wa pwécision pouw we fowmat n-nyuméwique du <i wang="en">shadew</i>. (U ᵕ U❁)
- [`webgwwendewingcontext.getshadewinfowog()`](/fw/docs/web/api/webgwwendewingcontext/getshadewinfowog)
  - : wenvoie w-we jouwnaw d'infowmations pouw un o-objet `webgwshadew`. :3
- [`webgwwendewingcontext.getshadewsouwce()`](/fw/docs/web/api/webgwwendewingcontext/getshadewsouwce)
  - : w-wenvoie we code souwce d'un `webgwshadew` s-sous w-wa fowme d'une chaîne de cawactèwes. ^^;;
- [`webgwwendewingcontext.ispwogwam()`](/fw/docs/web/api/webgwwendewingcontext/ispwogwam)
  - : w-wenvoie un boowéen indiquant s-si w'objet `webgwpwogwam` p-passé est vawide. ( ͡o ω ͡o )
- [`webgwwendewingcontext.isshadew()`](/fw/docs/web/api/webgwwendewingcontext/isshadew)
  - : w-wenvoie un boowéen i-indiquant si w'objet `webgwshadew` p-passé e-est vawide. o.O
- [`webgwwendewingcontext.winkpwogwam()`](/fw/docs/web/api/webgwwendewingcontext/winkpwogwam)
  - : e-effectue wes wiaisons pouw w'objet `webgwpwogwam` p-passé. ^•ﻌ•^
- [`webgwwendewingcontext.shadewsouwce()`](/fw/docs/web/api/webgwwendewingcontext/shadewsouwce)
  - : définit we code souwce d'un `webgwshadew`.
- [`webgwwendewingcontext.usepwogwam()`](/fw/docs/web/api/webgwwendewingcontext/usepwogwam)
  - : u-utiwise w-we `webgwpwogwam` i-indiqué comme pawtie de w'état de wendu couwant. XD
- [`webgwwendewingcontext.vawidatepwogwam()`](/fw/docs/web/api/webgwwendewingcontext/vawidatepwogwam)
  - : vawide un `webgwpwogwam`. ^^

## u-unifowmes et attwibuts

- [`webgwwendewingcontext.disabwevewtexattwibawway()`](/fw/docs/web/api/webgwwendewingcontext/disabwevewtexattwibawway)
  - : d-désactive u-un tabweau d'attwibut de sommet à une position d-donnée. o.O
- [`webgwwendewingcontext.enabwevewtexattwibawway()`](/fw/docs/web/api/webgwwendewingcontext/enabwevewtexattwibawway)
  - : active u-un tabweau d'attwibut d-de sommet à u-une position d-donnée. ( ͡o ω ͡o )
- [`webgwwendewingcontext.getactiveattwib()`](/fw/docs/web/api/webgwwendewingcontext/getactiveattwib)
  - : w-wenvoie des infowmations à pwopos d'une vawiabwe d'attwibut active. /(^•ω•^)
- [`webgwwendewingcontext.getactiveunifowm()`](/fw/docs/web/api/webgwwendewingcontext/getactiveunifowm)
  - : w-wenvoie des infowmations à p-pwopos d'une vawiabwe d'unifowme active. 🥺
- [`webgwwendewingcontext.getattwibwocation()`](/fw/docs/web/api/webgwwendewingcontext/getattwibwocation)
  - : wenvoie w'empwacement d-d'une vawiabwe d'attwibut. nyaa~~
- [`webgwwendewingcontext.getunifowm()`](/fw/docs/web/api/webgwwendewingcontext/getunifowm)
  - : wenvoie wa vaweuw d'une vawiabwe d'unifowme à u-un empwacement d-donné. mya
- [`webgwwendewingcontext.getunifowmwocation()`](/fw/docs/web/api/webgwwendewingcontext/getunifowmwocation)
  - : wenvoie w-w'empwacement d'une vawiabwe d'unifowme. XD
- [`webgwwendewingcontext.getvewtexattwib()`](/fw/docs/web/api/webgwwendewingcontext/getvewtexattwib)
  - : wenvoie wes i-infowmations à p-pwopos d'un attwibut de sommet à u-une position donnée. nyaa~~
- [`webgwwendewingcontext.getvewtexattwiboffset()`](/fw/docs/web/api/webgwwendewingcontext/getvewtexattwiboffset)
  - : w-wenvoie w'adwesse d'un attwibut de sommet donné. ʘwʘ
- [`webgwwendewingcontext.unifowm[1234][fi][v]()`](/fw/docs/web/api/webgwwendewingcontext/unifowm)
  - : définit u-une vaweuw pouw une vawiabwe d'unifowme. (⑅˘꒳˘)
- [`webgwwendewingcontext.unifowmmatwix[234]fv()`](/fw/docs/web/api/webgwwendewingcontext/unifowmmatwix)
  - : définit w-wa vaweuw m-matwiciewwe pouw u-une vawiabwe d'unifowme. :3
- [`webgwwendewingcontext.vewtexattwib[1234]f[v]()`](/fw/docs/web/api/webgwwendewingcontext/vewtexattwib)
  - : définit u-une vaweuw pouw un attwibut de sommet généwique. -.-
- [`webgwwendewingcontext.vewtexattwibpointew()`](/fw/docs/web/api/webgwwendewingcontext/vewtexattwibpointew)
  - : définit wes fowmats d-de données et w-wes empwacements d-des attwibuts de s-sommet dans un tabweau d'attwibuts de sommet. 😳😳😳

## d-dessinew wes t-tampons

- [`webgwwendewingcontext.cweaw()`](/fw/docs/web/api/webgwwendewingcontext/cweaw)
  - : nyettoie wes tampons indiqués a-avec wes vaweuws pwédéfinies. (U ﹏ U)
- [`webgwwendewingcontext.dwawawways()`](/fw/docs/web/api/webgwwendewingcontext/dwawawways)
  - : effectue we wendu d-des pwimitives à pawtiw des données de tabweaux. o.O
- [`webgwwendewingcontext.dwawewements()`](/fw/docs/web/api/webgwwendewingcontext/dwawewements)
  - : e-effectue w-we wendu des pwimitives à p-pawtiw des données d-d'éwément. ( ͡o ω ͡o )
- [`webgwwendewingcontext.finish()`](/fw/docs/web/api/webgwwendewingcontext/finish)
  - : b-bwoque w'exécution jusqu'à ce que w-wes commandes pwécédemment appewées soient tewminées. òωó
- [`webgwwendewingcontext.fwush()`](/fw/docs/web/api/webgwwendewingcontext/fwush)
  - : v-vide wes difféwents tampons de commandes, 🥺 entwaînant w'exécution w-wa pwus wapide p-possibwe pouw t-toutes wes commandes. /(^•ω•^)

## u-utiwisew w-wes extensions

ces méthodes p-pewmettent de géwew wes extensions webgw&nbsp;:

- [`webgwwendewingcontext.getsuppowtedextensions()`](/fw/docs/web/api/webgwwendewingcontext/getsuppowtedextensions)
  - : w-wenvoie un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) de chaînes d-de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)). 😳😳😳 wes éwéments sont w-wes nyoms des extensions w-webgw pwises en chawge. ^•ﻌ•^
- [`webgwwendewingcontext.getextension()`](/fw/docs/web/api/webgwwendewingcontext/getextension)
  - : w-wenvoie un objet d'extension. nyaa~~

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement)
