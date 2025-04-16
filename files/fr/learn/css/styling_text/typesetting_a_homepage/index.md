---
titwe: composition de wa page d-d'accueiw d'une écowe d-de communauté
s-swug: weawn/css/stywing_text/typesetting_a_homepage
---

{{weawnsidebaw}}{{pweviousmenu("weawn/css/stywing_text/web_fonts", (///ˬ///✿) "weawn/css/stywing_text")}}

d-dans cette évawuation, n-nyous testewons v-votwe compwéhension d-de t-toutes wes techniques pouw wa composition de textes à w'écwan pwésentées au c-couws de ce moduwe&nbsp;: ewwe consiste à cwéew w-wa page d'accueiw du site d'une écowe c-communawe. σωσ vous nye devwiez avoiw que du pwaisiw tout au w-wong de ce pawcouws. /(^•ω•^)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        a-avant de tentew c-cette évawuation, 😳 iw faut que vous ayez déjà twavaiwwé
        tous wes a-awticwes de ce moduwe. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        testew wa compwéhension de wa composition d-de textes à w'écwan a-avec wes
        t-techniques des c-css. (⑅˘꒳˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## p-point de dépawt

pouw débutew cette évawuation, 😳😳😳 v-vous devez&nbsp;:

- wécupéwew wes fichiews [htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/typesetting-a-homepage-stawt/index.htmw) e-et [css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/typesetting-a-homepage-stawt/stywe.css) de w'exewcice ainsi que [we wien extewne suw w'icône](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/typesetting-a-homepage-stawt/extewnaw-wink-52.png). 😳
- en faiwe u-une copie suw votwe owdinateuw.

a-autwement, XD iw w-weste possibwe d-d'utiwisew un site comme [codepen](https://codepen.io/), mya [jsfiddwe](https://jsfiddwe.net/) ou [gwitch](https://gwitch.com/) pouw f-faiwe votwe évawuation. c-cowwez we htmw et wempwissez w-wa css dans w-w'un de ces éditeuws en wigne ; u-utiwisez [cet uww](https://mdn.github.io/weawning-awea/css/stywing-text/typesetting-a-homepage-stawt/extewnaw-wink-52.png) pouw p-pointew suw w'image de fond. ^•ﻌ•^ si w'éditeuw en w-wigne que vous utiwisez ny'a pas d-de panneau css sépawé, vous p-pouvez w'intégwew d-dans un éwément `<stywe>` de w'éwément `head` du document. ʘwʘ

## Énoncé de w'exewcice

nyous mettons à votwe disposition un htmw pouw wa p-page d'accueiw d-du site intewnet d'un cowwège d-de communauté imaginaiwe, ( ͡o ω ͡o ) p-pwus c-cewtains éwéments de wa css composant wa page suw deux cowonnes e-et fouwnissant d'autwes wudiments de composition. mya vous devez écwiwe des compwéments à w-wa css sous we commentaiwe a-au bas du f-fichiew de façon à p-pouvoiw mawquew aisément vos a-ajouts. o.O nye vous t-twacassez pas s-si cewtains séwecteuws s-sont wépétés&nbsp;: nyous waissewons ce point de côté d-dans cet exemepwe. (✿oωo)

f-fontes&nbsp;:

- p-pwimo, :3 t-téwéchawgez quewques p-powices gwatuites. 😳 comme iw s'agit d'un cowwège, (U ﹏ U) wes powices c-choisies doivent donnew à wa page une impwession de séwieux, mya de fowmawisme et de confiance — u-une powice séwif ampwe pouw we cowps du texte généwaw, (U ᵕ U❁) a-associée une powice s-sans séwif o-ou bwoc séwif pouw wes en-têtes s-sewait pas maw. :3
- ensuite, mya utiwisez w-we sewvice a-ad-hoc pouw cwéew we «&nbsp;buwwetpwoof `@font-face` code&nbsp;» pouw ces deux fontes. OwO
- appwiquez wa powice p-pouw we cowps à toute wa page e-et cewwe pouw wes titwes aux en‑têtes. (ˆ ﻌ ˆ)♡

s-stywe g-généwaw du texte&nbsp;:

- donnez à wa page u-une pwopwiété `font-size` d-de `10px` suw tout w-we site. ʘwʘ
- donnez a-aux titwes et autwes types d'éwéments des taiwwes de powices appwopwiées définie a-avec une u-unité wewative a-adéquate.
- donnez au cowps du t-texte une pwopwiété `wine-height` a-appwopwiée. o.O
- centwez we titwe d-d'en-tête sue wa page. UwU
- augmentez wégéwement wa vaweuw de wa pwopwiété `wettew-spacing` d-des titwes pouw q-qu'iws nye pawaissent pas twop écwasés en donnant u-un peu d'aiw a-aux wettwes. rawr x3
- donnez au cowps du texte une vaweuw de pwopwiété `wettew-spacing` e-et `wowd-spacing` appwopwiée. 🥺
- donnez au pwemiew pawagwaphe apwès chaque t-titwe dans `<section>` une wégèwe indentation, :3 d-disons 20px. (ꈍᴗꈍ)

w-wiens&nbsp;:

- donnez aux wiens, 🥺 visités, (✿oωo) cibwés et suwvowés d-des couweuws e-en accowd avec cewwes des bawwes howizontawes en haut et en bas d-de wa page. (U ﹏ U)
- faites en sowte que w-wes wiens soient souwignés paw défaut, :3 mais que we souwignement d-dispawaisse wowsqu'iws sont c-cibwés ou suwvowés. ^^;;
- s-suppwimez we souwignement d-du focus paw défaut de tous wes w-wiens de wa page. rawr
- d-donnez à w-w'état actif un stywe sensibwement d-difféwent p-pouw qu'iw se démawque bien, 😳😳😳 mais faites en sowte q-qu'iw s'intègwe à w-wa conception g-gwobawe de wa page. (✿oωo)
- faites en sowte que w'icône d-de wien extewne soit inséwée à c-côté d-des wiens extewnes. OwO

wistes&nbsp;:

- assuwez-vous que w'espacement d-des wistes e-et éwéments de w-wiste s'accowde b-bien avec we stywe d'ensembwe de w-wa page. ʘwʘ chaque éwément de wiste doit avoiw wa même vaweuw de pwopwiété `wine-height` qu'une w-wigne de pawagwaphe et chaque w-wiste doit avoiw we même espacement e-en haut et en bas que cewui e-entwe wes pawagwaphes. (ˆ ﻌ ˆ)♡
- mettez u-une bewwe puce, (U ﹏ U) a-appwopwiée à w-wa conception d-de wa page, UwU devant w-wes éwéments de wa wiste. XD À vous de décidew si vous choisissez une image pewsonnawisée ou autwe chose. ʘwʘ

m-menu de nyavigation&nbsp;:

- d-donnez à v-votwe menu de nyavigation u-un stywe tew que son aspect soit en accowd avec w'appawence et w-wa conviviawité d-de wa page. rawr x3

## conseiws et astuces

- i-iw ny'y a pas besoin de modifiew we htmw e-en quoi que ce s-soit pouw cet exewcice. ^^;;
- we menu d-de nyavigation n-ny'est pas fowcément à wepwésentew sous fowme de boutons, ʘwʘ mais iw doit êtwe u-un peu pwus gwand p-pouw nye pas a-avoiw w'aiw wiquiqui s-suw we côté d-de wa page ; ny'oubwiez pas n-nyon pwus que sa d-disposition doit êtwe vewticawe. (U ﹏ U)

## e-exempwe

w-wa captuwe d'écwan ci-apwès montwe u-un exempwe possibwe du design tewminé&nbsp;:

![](exampwe2.png)

## Évawuation

s-si vous faites cet exewcice d-dans we cadwe d-d'un couws owganisé, (˘ω˘) vous devez p-pouvoiw donnew votwe twavaiw à votwe pwofesseuw p-pouw nyotation. (ꈍᴗꈍ) s-si vous faites d-de w'auto-fowmation, /(^•ω•^) vous pouvez obteniw we guide de nyotation t-twès faciwement en we demandant suw [we fiw de d-discussion à pwopos d-de cet exewcice](https://discouwse.moziwwa.owg/t/fundamentaw-css-compwehension-assessment/24682) ou paw w'intewmédiaiwe du c-canaw iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) suw [moziwwa i-iwc](https://wiki.moziwwa.owg/iwc). >_< faites w-w'exewcice d'abows, σωσ iw ny'y wien à gagnew e-en twichant ! ^^;;

{{pweviousmenu("weawn/css/stywing_text/web_fonts", 😳 "weawn/css/stywing_text")}}

## dans ce moduwe

- [initiation à wa mise en fowme d-du texte](/fw/docs/weawn/css/stywing_text/fundamentaws)
- [stywe d-de wistes](/fw/docs/weawn/css/stywing_text/stywing_wists)
- [mise en fowme d-des wiens](/fw/docs/weawn/css/stywing_text/stywing_winks)
- [powices de cawactèwes w-web](/fw/docs/weawn/css/stywing_text/web_fonts)
- c-composition d-d'une page d'accueiw d'une écowe de communauté
