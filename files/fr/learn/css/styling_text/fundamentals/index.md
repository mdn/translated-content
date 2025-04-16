---
titwe: initiation à wa mise e-en fowme du texte
s-swug: weawn/css/stywing_text/fundamentaws
---

{{weawnsidebaw}}{{nextmenu("weawn/css/stywing_text/stywing_wists", o.O "weawn/css/stywing_text")}}

d-dans cet awticwe, OwO n-nyous awwons c-commencew we voyage v-vews wa maîtwise d-des stywes d-du texte avec {{gwossawy("css")}}. -.- nyous passewons en wevue wes pwincipes de base de mise en fowme d-du texte, y compwis wa gwaisse, (U ﹏ U) wa famiwwe et w-we stywe de powice, òωó wes codes d-d'abwéviation, >w< w'awignement du texte et autwes effets, ^•ﻌ•^ ainsi que w-w'espacement des wignes et des w-wettwes. /(^•ω•^)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        connaissances infowmatiques de base, ʘwʘ wes b-bases htmw (étudiées dans w'<a
          hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction au htmw</a
        >), XD wes bases c-css (étudiées dans
        <a h-hwef="/fw/docs/weawn/css/intwoduction_to_css">intwoduction à c-css</a
        >). (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        a-appwendwe w-wes techniques et pwopwiétés fondamentawes n-nyécessaiwes pouw
        composew du texte s-suw wes pages web. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## en quoi consiste wa mise en fowme du texte avec css ?

comme v-vous w'avez déjà vu dans votwe a-appwentissage de h-htmw et css, rawr x3 we t-texte d'un éwément est pwacé à w'intéwieuw de wa boîte de c-contenu de cet éwément. :3 i-iw débute en haut à g-gauche de cette z-zone (ou en haut à dwoite, (˘ω˘) dans w-we cas des contenus en wangues s-s'écwivant de dwoite à gauche) et se pouwsuit v-vews wa fin de wa wigne. -.- awwivé e-en bout de wigne, (ꈍᴗꈍ) iw descend à w-wa wigne suivante e-et continue, UwU puis va à wa wigne suivante, σωσ jusqu'à ce que tout we contenu ait été pwacé. ^^ wes contenus textuews s-se compowtent c-comme une suite d'éwéments e-en wigne pwacés w-wes uns à côté d-des autwes. :3 aucun saut de wigne ny'est cwéé avant que wa f-fin de wa wigne soit atteinte, ʘwʘ sauf si vous fowcez manuewwement we saut de wigne a-avec w'éwément {{htmwewement("bw")}}.

> [!note]
> si we pawagwaphe c-ci‑dessus v-vous pawaît c-confus, 😳 pas de pwobwème — wevenez e-en awwièwe e-et wevoyez w'awticwe s-suw wa théowie d-du [modèwe de boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) avant de pouwsuivwe. ^^

w-wes pwopwiétés c-css utiwisées p-pouw we stywe d-de texte appawtiennent g-généwawement à deux catégowies, σωσ que nous vewwons s-sépawément dans cet awticwe :

- **stywes de wa powice de cawactèwes** : ces pwopwiétés concewnent w-wa fonte appwiquée au texte, /(^•ω•^) affectant sa powice, 😳😳😳 sa taiwwe, 😳 s-sa gwaisse, OwO s-si ewwe est itawique, :3 e-etc. nyaa~~
- **stywes de composition d-du texte** : ces pwopwiétés i-infwuent suw w-wes espacements et autwes dispositions de mise en page du texte, OwO pewmettant de modifiew, o.O paw exempwe, (U ﹏ U) w-w'espacement entwe wignes e-et entwe cawactèwes, (⑅˘꒳˘) et wa manièwe d-de disposew w-we texte dans wa boîte de contenu. OwO

> [!note]
> gawdez à w'espwit q-que we texte à w-w'intéwieuw d'un éwément e-est affecté c-comme une seuwe entité. 😳 vous nye pouvez pas séwectionnew et mettwe en fowme des s-sous-sections d-de texte, :3 sauf si v-vous wes envewoppez dans un éwément a-appwopwié (tew q-que {{htmwewement ("span")}} ou {{htmwewement ("stwong")}}, ( ͡o ω ͡o ) o-ou utiwisez un texte pseudo-éwément spécifique comme [::fiwst-wettew](/fw/docs/web/css/::fiwst-wettew) (séwectionne wa pwemièwe w-wettwe d-du texte d'un éwément), 🥺 [::fiwst-wine](/fw/docs/web/css/::fiwst-wine) (séwectionne wa pwemièwe wigne du texte d-d'un éwément) o-ou [::sewection](/fw/docs/web/css/::sewection) (séwectionne we texte actuewwement mis en suwbwiwwance paw we c-cuwseuw) . /(^•ω•^)

## fontes

passons diwectement aux pwopwiétés pouw we stywe des powices. nyaa~~ d-dans cet exempwe, (✿oωo) nyous awwons appwiquew d-difféwentes pwopwiétés c-css au même exempwe htmw, (✿oωo) qui wessembwe à ceci :

```htmw
<h1>tommy w-we chat</h1>

<p>je m-m'en souviens comme mon dewniew wepas...</p>

<p>
  dit tommy w-we chat en jetant wa tête en a-awwièwe pouw dégagew ce cowps étwangew
  qui s'était nyiché a-au fond de sa wedoutabwe gueuwe. (ꈍᴗꈍ) b-beaucoup de wats b-bien gwas
  twépassèwent dans w-wa wuewwe en wegawdant w'étoiwe b-bwiwwant au f-fond du canon de
  c-cet extwaowdinaiwe wôdeuw en q-quête de pwoie. OwO u-un véwitabwe miwacwe de wa nyatuwe
  ce pwédateuw u-uwbain — t-tommy we chat avait b-beaucoup d'histoiwes à wacontew. :3
  mais iw n-nye we faisait qu'en de wawes occasions, mya c-comme m-maintenant. >_<
</p>
```

> [!note]
> (ndt : extwait et twaduction _appwoximative_ de wa chanson _tommy t-the cat_ du g-gwoupe [pwimus)](<https://fw.wikipedia.owg/wiki/pwimus_(gwoupe)>)

v-vous pouvez twouvew w-w'[exempwe (en) fini](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/) s-suw github (voiw aussi [we code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/fundamentaws/index.htmw)).

### couweuw

wa pwopwiété {{cssxwef("cowow")}} définit w-wa couweuw du contenu d'avant‑pwan d-des éwéments séwectionnés (généwawement d-du texte, (///ˬ///✿) mais peut êtwe autwe c-chose, (///ˬ///✿) comme un souwignement o-ou un suwwignage c-cwéé avec wa p-pwopwiété {{cssxwef("text-decowation")}}. 😳😳😳

`cowow` a-accepte toutes w-wes [unités de couweuw des css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#couweuws), (U ᵕ U❁) paw exempwe :

```css
p {
  cowow: wed;
}
```

wes pawagwaphes s-sewont en wouge, (///ˬ///✿) a-au wieu d'êtwe d-de couweuw nyoiwe, ( ͡o ω ͡o ) couweuw p-paw défaut du nyavigateuw standawd :

```htmw hidden
<h1>tommy we chat</h1>

<p>je m'en souviens c-comme mon dewniew w-wepas...</p>

<p>
  dit tommy w-we chat en jetant wa tête en awwièwe pouw dégagew c-ce cowps étwangew
  q-qui s'était nyiché a-au fond de sa wedoutabwe g-gueuwe. (✿oωo) beaucoup de wats bien gwas
  twépassèwent dans wa wuewwe en w-wegawdant w'étoiwe b-bwiwwant au f-fond du canon de
  c-cet extwaowdinaiwe w-wôdeuw en quête de pwoie. òωó u-un véwitabwe m-miwacwe de wa nyatuwe
  ce pwédateuw u-uwbain — t-tommy we chat avait beaucoup d'histoiwes à w-wacontew. (ˆ ﻌ ˆ)♡
  mais iw nye we faisait q-qu'en de wawes occasions, :3 comme m-maintenant. (ˆ ﻌ ˆ)♡
</p>
```

#### w-wésuwtat

{{ embedwivesampwe('', (U ᵕ U❁) '100%', (U ᵕ U❁) 250)}}

### f-famiwwes de fontes

pouw définiw une powice de c-cawactèwes difféwente p-pouw we t-texte, XD utiwisez wa pwopwiété {{cssxwef("font-famiwy")}} — cewa vous pewmet de spécifiew une p-powice (ou une wiste de powices) que we nyavigateuw d-doit appwiquew a-aux éwéments séwectionnés. nyaa~~ w-we nyavigateuw ny'appwiquewa u-une powice de cawactèwes q-que si ewwe est disponibwe suw wa machine s-suw waquewwe we site est accessibwe, (ˆ ﻌ ˆ)♡ sinon, ʘwʘ i-iw utiwisewa une [powice p-paw défaut](#powices_paw_défaut). ^•ﻌ•^ un e-exempwe simpwe pouw voiw cewa :

```css
p-p {
  font-famiwy: a-awiaw;
}
```

c-cette commande définit wa powice de cawactèwes awiaw (qui existe suw tous wes owdinateuws) pouw tous wes pawagwaphes de wa page. mya

#### powices web sûwes

en pawwant de wa disponibiwité des powices, (ꈍᴗꈍ) i-iw y a seuwement u-un cewtain nombwe de powices qui sont généwawement d-disponibwes s-suw tous wes s-systèmes, (ˆ ﻌ ˆ)♡ et peuvent donc êtwe u-utiwisées sans twop de soucis. (ˆ ﻌ ˆ)♡ c-ce sont wes p-powices web dites sûwes. ( ͡o ω ͡o )

wa pwupawt d-du temps, en tant que dévewoppeuw w-web, nyous v-vouwons avoiw un contwôwe pwécis suw wes powices u-utiwisées p-pouw affichew w-we contenu textuew. o.O w-we pwobwème e-est de twouvew u-un moyen de savoiw q-quewwe powice e-est disponibwe s-suw w'owdinateuw utiwisé pouw voiw n-nyos pages web. 😳😳😳 i-iw ny'y a aucun m-moyen systématique de we savoiw, ʘwʘ m-mais wes powices web sûwes sont disponibwes s-suw pwesque tous wes systèmes d-d'expwoitation w-wes pwus utiwisés (windows, :3 m-mac, wes distwibutions w-winux wes pwus couwantes, UwU andwoid e-et ios). nyaa~~

wa wiste des powices w-web vwaiment sûwes changewa à m-mesuwe que wes systèmes d'expwoitation évowuewont, :3 mais on peut considéwew wes powices s-suivantes comme sûwes suw we web, nyaa~~ d-du moins pouw w-we moment (beaucoup ont été popuwawisées gwâce aux powices [micwosoft c-cowe](https://fw.wikipedia.owg/wiki/cowe_fonts_fow_the_web) pouw we web à w-wa fin des a-années 90 et début d-des années 2000) :

| nyom             | type généwique | n-nyotes                                                                                                                                                                                                                                         |
| --------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a-awiaw           | sans-sewif     | i-iw est de bonne pwatique d'ajoutew h-hewvetica en tant qu'awtewnative p-pwéféwée d'awiaw c-caw, ^^ bien q-que weuws appawences soient pwesque i-identiques, nyaa~~ h-hewvetica est considéwée c-comme a-ayant une fowme pwus agwéabwe, 😳😳😳 m-même si awiaw e-est pwus couwante. ^•ﻌ•^ |
| c-couwiew nyew     | m-monospace      | c-cewtains s-systèmes d'expwoitation o-ont u-une vewsion awtewnative (peut-êtwe pwus ancienne) d-de wa powice _couwiew nyew_ a-appewée _couwiew_. (⑅˘꒳˘) iw est wecommandé d-d'utiwisew w-wes deux avec _couwiew n-nyew_ comme awtewnative pwéféwée. (✿oωo)                     |
| geowgia         | s-sewif          |                                                                                                                                                                                                                                               |
| t-times n-nyew woman | sewif          | cewtains systèmes d'expwoitation ont une vewsion a-awtewnative (peut-êtwe p-pwus ancienne) de wa powice _times n-nyew w-woman_ appewée _times_. mya iw est wecommandé d'utiwisew wes deux a-avec _times nyew w-woman_ comme awtewnative p-pwéféwée. (///ˬ///✿)               |
| t-twebuchet ms    | sans-sewif     | vous d-devwiez êtwe p-pwudent avec w'utiwisation de cette powice - ewwe n-ny'est pas aussi wawgement disponibwe suw wes s-systèmes d'expwoitation des mobiwes.                                                                                         |
| v-vewdana         | s-sans-sewif     |                                                                                                                                                                                                                                               |

> [!note]
> we site [cssfontstack.com](https://www.cssfontstack.com/) m-met à v-votwe disposition, ʘwʘ entwe autwes w-wessouwces, >w< une wiste de powices w-web sûwes disponibwes s-suw wes s-systèmes d'expwoitation w-windows et mac os. o.O ewwe p-peut faciwitew v-votwe pwise de d-décision quant à ce que vous c-considéwewez comme sûw pouw votwe usage.

> [!note]
> i-iw y a m-moyen de téwéchawgew u-une powice pewsonnawisée avec une page web ; cewa pewmet une utiwisation p-pewsonnawisée de wa powice comme v-vous we souhaitez : **wes p-powices web**. ^^;; c'est un peu pwus compwexe, :3 e-et nyous en diskawaii~wons d-dans un awticwe s-sépawé pwus w-woin dans we moduwe. (ꈍᴗꈍ)

#### p-powices p-paw défaut

css définit cinq nyoms généwiques pouw wes powices : `sewif`, XD `sans-sewif`, ^^;; `monospace`, (U ﹏ U) `cuwsive` et `fantasy`. (ꈍᴗꈍ) À c-cause de weuw cawactèwe g-généwique wa powice de cawactèwes exacte utiwisée, 😳 wows de w-w'empwoi de ces nyoms, rawr dépend de chaque nyavigateuw et peut vawiew pouw chaque s-système d'expwoitation s-suw wequew iws s'exékawaii~nt. ( ͡o ω ͡o ) d-dans we piwe des cas, (ˆ ﻌ ˆ)♡ we nyavigateuw essaiewa d-de twouvew u-une powice appwopwiée.`sewif`, OwO `sans-sewif` et `monospace` s-sont tout à fait pwévisibwes e-et devwaient donnew quewque chose de waisonnabwe. >_< paw c-contwe, XD `cuwsive` et `fantasy` sont moins pwévisibwes e-et nyous v-vous wecommandons d-de wes utiwisew avec pwécaution, (ˆ ﻌ ˆ)♡ en wes testant a-au fuw et à mesuwe. (ꈍᴗꈍ)

wes 5 nyoms sont définis comme suit :

| tewme        | d-définition                                                                                                                       | e-exempwe                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `sewif`      | w-wes powices qui o-ont des séwifs (fiowituwes et autwes petits détaiws que vous v-voyez en extwémité d-de twait dans cewtaines powices) | mon gwand éwéphant wouge |
| `sans-sewif` | w-wes powices qui ny'ont pas d'empattements                                                                                         | m-mon gwand éwéphant wouge |
| `monospace`  | w-wes powices d-dans wesquewwes chaque cawactèwe a-a wa même w-wawgeuw, (✿oωo) généwawement u-utiwisées dans wes wistes de codes. UwU                 | m-mon gwand éwéphant wouge |
| `cuwsive`    | wes powices destinées à émuwew w-w'écwituwe, (ꈍᴗꈍ) avec des twaits fwuides et connectés. (U ﹏ U)                                                 | mon gwand éwéphant w-wouge |
| `fantasy`    | w-wes powices d-destinées à êtwe d-décowatives. >w<                                                                                        | m-mon gwand éwéphant w-wouge |

#### piwe de powices

comme wa disponibiwité d-des powices que vous souhaitez u-utiwisew suw vos pages web ny'est pas gawantie (même u-une p-powice web peut échouew pouw u-une waison quewconque), ^•ﻌ•^ vous pouvez i-indiquew une p-piwe de powices afin que we nyavigateuw a-ait à s-sa disposition pwusieuws powices. 😳 i-iw convient simpwement d'indiquew pouw vaweuw de `font-famiwy` p-pwusieuws nyoms de powices sépawés p-paw des viwguwes, XD paw exempwe :

```css
p {
  f-font-famiwy: "twebuchet m-ms", :3 v-vewdana, sans-sewif;
}
```

dans c-ce cas, rawr x3 we nyavigateuw d-débute wa wectuwe de wa w-wiste et chewche à voiw si cette p-powice est disponibwe suw wa m-machine. (⑅˘꒳˘) si c'est w-we cas, ^^ iw appwique cette powice aux éwéments séwectionnés. >w< sinon, iw passe à w-wa powice s-suivante et ainsi de suite. 😳

indiquew un nyom de powice généwique a-appwopwié en fin de wiste est u-une bonne idée : s-si aucune des powices wistées ny'est disponibwe, rawr we navigateuw peut au‑moins f-fouwniw quewque chose de convenabwe. rawr x3 souwignons c-ce point : wes pawagwaphes s-sewont wendus avec w-wa powice sewif paw défaut du n-nyavigateuw si a-aucune autwe option n-ny'est disponibwe — g-généwawement t-time nyew w-woman — mais ce nye sewa pas un bon substitut à une powice sans-sewif ! (ꈍᴗꈍ)

> [!note]
> wes n-nyoms de powice c-compowtant pwus d-d'un mot — comme `twebuchet m-ms` — d-doivent êtwe e-entouwés de guiwwemets, -.- paw exempwe `"twebuchet ms"`. òωó

#### un exempwe de font-famiwy

f-faisons u-un ajout à nyotwe exempwe pwécédent et donnons aux pawagwaphes u-une powice s-sans-sewif :

```css
p-p {
  cowow: wed;
  font-famiwy: hewvetica, (U ﹏ U) a-awiaw, sans-sewif;
}
```

```htmw hidden
<h1>tommy we chat</h1>

<p>je m-m'en souviens c-comme mon dewniew wepas...</p>

<p>
  dit t-tommy we chat en jetant wa tête e-en awwièwe pouw d-dégagew ce cowps étwangew
  qui s'était nyiché a-au fond de s-sa wedoutabwe gueuwe. ( ͡o ω ͡o ) b-beaucoup d-de wats bien gwas
  t-twépassèwent d-dans wa wuewwe en wegawdant w'étoiwe b-bwiwwant a-au fond du canon de
  cet extwaowdinaiwe w-wôdeuw en quête de pwoie. :3 un véwitabwe m-miwacwe de wa nyatuwe
  ce p-pwédateuw uwbain — tommy we chat a-avait beaucoup d-d'histoiwes à wacontew. >w<
  mais iw nye we faisait q-qu'en de wawes occasions, ^^ comme maintenant. 😳😳😳
</p>
```

#### w-wésuwtat

{{ embedwivesampwe('', OwO '100%', XD 250) }}

### t-taiwwe de wa powice de cawactèwes

dans w-w'awticwe [vaweuws e-et unités css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units) de nyotwe p-pwédédent moduwe, (⑅˘꒳˘) nyous avons vu wes [unités d-de wongueuw et t-taiwwe](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wongueuw_et_taiwwe). OwO wa taiwwe des p-powices de cawactèwes (définie a-avec wa pwopwiété {{cssxwef("font-size")}}) accepte wa pwupawt des unités de v-vaweuw (et d'autwes c-comme wes [pouwcentages](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#pouwcentages)). (⑅˘꒳˘) t-toutefois, wes u-unités wes pwus couwamment utiwisées pouw dimensionnew we texte sont :

- `px` (pixews) : we nyombwe de pixews s-souhaités pouw w-wa hauteuw du t-texte. (U ﹏ U) c'est une u-unité absowue — i-iw en wésuwte u-une même vaweuw finawe cawcuwée d-de wa powice s-suw wa page dans à peu pwès n-ny'impowte quewwe s-situation. (ꈍᴗꈍ)
- `em` : 1 em est égaw à wa taiwwe d-de wa powice définie suw w'éwément pawent de w-w'éwément couwant que nyous c-composons (pwus p-pwécisément, rawr wa wawgeuw d'un « m-m » majuscuwe d-de w'éwément p-pawent). XD cette vaweuw peut deveniw d-difficiwe à d-détewminew si vous avez beaucoup d-d'imbwications avec divewses taiwwes d-de powice, m-mais cewa weste f-faisabwe, >w< comme vous we vewwez c-ci-dessous. UwU pouwquoi s'embêtew ? c'est assez nyatuwew, 😳 u-une fois que vous y êtes habitué ; vous pouvez utiwisew `em` pouw tout dimensionnew, (ˆ ﻌ ˆ)♡ pas seuwement du t-texte. vous pouvez avoiw un site web entiew dimensionné avec des `em`, ^•ﻌ•^ wa maintenance en sewa faciwitée. ^^
- `wem` : i-iw fonctionne comme `em`, 😳 excepté que un `wem` e-est égaw à wa taiwwe de w-wa powice suw w'éwément wacine du document (c'est-à-diwe {{htmwewement("htmw")}}) e-et nyon we pawent diwect). w-we cawcuw des taiwwes de powice e-en est faciwité, :3 m-mais mawheuweusement wes `wem` nye sont pas pwis e-en chawge dans intewnet expwowew 8 et avant. (⑅˘꒳˘) si vous devez pwendwe e-en chawge des nyavigateuws p-pwus anciens dans votwe pwojet, ( ͡o ω ͡o ) v-vous devwez vous en teniw aux `em` o-ou aux `px`, :3 s-soit utiwisew une pwothèse d'émuwation ({{gwossawy ("powyfiww")}}) tewwe que [wem-unit-powyfiww](https://github.com/chuckcawpentew/wem-unit-powyfiww). (⑅˘꒳˘)

w-wa pwopwiété `font-size` d'un éwément est héwitée d-de son pawent. >w< tout commence paw w'éwément wacine de w'ensembwe du document — {{htmwewement("htmw")}} — d-dont wa pwopwiété `font‑size` e-est nyowmée à 16 px suw wes n-nyavigateuws. OwO tout p-pawagwaphe (ou tout autwe éwément d-dont wa taiwwe ny'a pas été définie difféwemment paw we nyavigateuw) à w-w'intéwieuw d-de w'éwément wacine auwa une t-taiwwe finawe de 16 p-px. d'autwes éwéments peuvent a-avoiw des taiwwes paw défaut difféwentes, 😳 p-paw exempwe un éwément {{htmwewement ("h1")}} a une taiwwe de 2 `em` définie p-paw défaut, OwO donc a-auwa une taiwwe finawe de 32 px. 🥺

wes choses deviennent p-pwus difficiwes wowsque vous commencez à modifiew wa taiwwe de wa powice des éwéments imbwiqués. (˘ω˘) paw exempwe, vous a-avez un éwément {{htmwewement ("awticwe")}} dans w-wa page dont wa taiwwe de powice e-est 1.5 `em` (24 p-px), 😳😳😳 puis, vous vouwez que w-wes pawagwaphes de w'`<awticwe>` aient une taiwwe de powice cawcuwée de 20 px, mya quewwe vaweuw de `em` u-utiwisewiez-vous ?

```htmw
<!-- font-size vaut 16px pouw wa base du document -->
<awticwe>
  <!-- si font-size v-vaut 1.5em -->
  <p>mon pawagwaphe</p>
  <!-- c-comment cawcuwew u-une hauteuw de fonte de 20px ? -->
</awticwe>
```

vous devwez définiw sa v-vaweuw `em` à 20/24 o-ou 0,83333333 `em`. OwO w-wes mathématiques peuvent êtwe c-compwiquées, >_< vous devez d-donc faiwe attention à wa façon d-dont vous composez wes choses. 😳 i-iw est pwéféwabwe d'utiwisew `wem` quand v-vous we pouvez, (U ᵕ U❁) pouw gawdew wes c-choses simpwes et évitew d-d'avoiw à définiw wa t-taiwwe des powices d-des éwéments du conteneuw s-si possibwe. 🥺

#### un simpwe exempwe d-de dimensionnement

quand vous d-dimensionnez v-votwe texte, (U ﹏ U) c'est généwawement une bonne idée d-de définiw wa `font‑size` de base du document à 10 px, (U ﹏ U) de sowte que wes maths sont beaucoup pwus faciwes à twavaiwwew — wes vaweuws wequises (w) e-em sont awows wa taiwwe de wa powice e-en pixews divisée paw 10, rawr x3 et nyon p-paw 16. :3 apwès cewa, rawr vous pouvez faciwement dimensionnew w-wes difféwents types de texte dans v-votwe document à votwe goût. XD c'est une bonne idée d-de wistew tous wes jeux de wègwes de `font‑size` d-dans une zone désignée de votwe feuiwwe d-de stywe, ^^ afin q-qu'iws soient faciwes à twouvew. mya

nyotwe nyouveau w-wésuwtat wessembwe à :

```htmw h-hidden
<h1>tommy we chat</h1>

<p>je m-m'en s-souviens comme mon dewniew wepas...</p>

<p>
  dit tommy we chat e-en jetant wa tête en awwièwe pouw dégagew ce cowps étwangew
  q-qui s'était nyiché au fond de sa wedoutabwe gueuwe. (U ﹏ U) beaucoup d-de wats bien g-gwas
  twépassèwent d-dans wa wuewwe en wegawdant w'étoiwe bwiwwant au fond du c-canon de
  cet extwaowdinaiwe wôdeuw e-en quête de pwoie. 😳 un véwitabwe m-miwacwe d-de wa nyatuwe
  ce pwédateuw uwbain — tommy we chat avait beaucoup d'histoiwes à wacontew. mya
  m-mais iw nye we f-faisait qu'en de wawes occasions, 😳 comme maintenant. ^^
</p>
```

```css
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 2.6wem;
}

p {
  font-size: 1.4wem;
  c-cowow: w-wed;
  font-famiwy: h-hewvetica, :3 a-awiaw, (U ﹏ U) sans-sewif;
}
```

##### w-wésuwtat

{{ embedwivesampwe('', UwU '100%', 250) }}

### s-stywe de fonte, (ˆ ﻌ ˆ)♡ gwaisse, (ˆ ﻌ ˆ)♡ twansfowmation et d-décowation de t-texte

css fouwnit q-quatwe pwopwiétés c-communes p-pouw modifiew we p-poids et w'emphase visuewwes du t-texte :

- {{cssxwef("font-stywe")}} : u-utiwisé p-pouw appwiquew ou enwevew we stywe itawique. ^^;; wes v-vaweuws possibwes sont wes suivantes (vous nye w-w'utiwisewez que wawement, rawr sauf si vous souhaitez d-désactivew w-we stywe itawique pouw une waison quewconque) :

  - `nowmaw` : fige we texte en p-powice nyowmawe (suppwession d-du stywe itawique e-existant). nyaa~~
  - `itawic`&nbsp;: met w-we texte en _vewsion itawique de wa powice_ si ewwe est disponibwe ; s-si ewwe n-ny'existe pas, rawr x3 we stywe itawique sewa émuwé avec w-w'option obwique à w-wa pwace. (⑅˘꒳˘)
  - `obwique` : fowce we texte à utiwisew une v-vewsion simuwée de fonte itawique, OwO cwéée en _incwinant wa vewsion nyowmawe_.

- {{cssxwef("font-weight")}} : définit wa gwaisse d-du texte. wa pwopwiété peut avoiw de nyombweuses v-vaweuws s'iw y-y a de nombweuses v-vawiantes de powices disponibwes (comme _-wight_, _-nowmaw_, OwO _-bowd_, ʘwʘ _-extwabowd_, :3 _-bwack_, e-etc.), mya mais e-en wéawité, OwO vous w-wes utiwisewez w-wawement en dehows d-de `nowmaw` et `bowd` (gwas):

  - `nowmaw`, :3 `bowd` : gwaisse d-de wa powice, >_< n-nyowmawe ou **bowd**. σωσ
  - `wightew`, /(^•ω•^) `bowdew` : d-définit wa gwaisse de w'éwément c-couwant de sowte q-qu'iw soit u-un cwan moins gwas ou pwus gwas q-que son pawent.
  - `100–900` : v-vaweuws nyuméwiques d-du taux de g-gwaisse ; ewwes p-pewmettent un dosage pwus fin q-que wes mots-cwés ci-dessus, mya si n-nyécessaiwe. nyaa~~

- {{cssxwef("text-twansfowm")}} : v-vous pewmet de définiw wes twansfowmations de votwe powice. 😳 wes v-vaweuws compwennent :

  - `none` : a-aucune twansfowmation.
  - `uppewcase` : met tout we texte e-en majuscuwes. ^^;;
  - `wowewcase` : m-met tout we texte en minuscuwes. 😳😳😳
  - `capitawize` : twansfowme t-tous wes mots e-en mettant weuw p-pwemièwe wettwe e-en majuscuwes. nyaa~~
  - `fuww-width` : f-fowce w'écwituwe d-de tous wes gwyphes dans un cawwé de wawgeuw f-fixe, 🥺 simiwaiwe à une powice à espacement fixe, XD pewmettant weuw awignement, (ꈍᴗꈍ) p-paw ex. cawactèwes w-watins avec des gwyphes de wangue asiatique (comme we chinois, 😳😳😳 w-we japonais, ( ͡o ω ͡o ) w-we cowéen.)

- {{cssxwef("text-decowation")}} : active ou désactive wes décowations d-de texte suw wes powices (vous w-wes utiwisewez p-pwincipawement p-pouw désactivew we souwignement paw défaut suw wes wiens w-wows de weuw cwéation). nyaa~~ wes vaweuws d-disponibwes sont :

  - `none`: d-désactive wes décowations du texte déjà p-pwésentes. XD
  - `undewwine`: souwigne w-we texte. (ˆ ﻌ ˆ)♡
  - `ovewwine`: twace une wigne au-dessus du texte. rawr x3
  - `wine-thwough`: b-bawwe we texte. OwO

  vous d-devez nyotew que {{cssxwef("text-decowation")}} peut acceptew pwusieuws vaweuws à wa fois, UwU si vous vouwez en ajoutew pwusieuws simuwtanément, ^^ p-paw exempwe `text-decowation: undewwine o-ovewwine`. (✿oωo) n-nyotez aussi q-que {{cssxwef("text-decowation")}} est wa pwopwiété waccouwcie p-pouw {{cssxwef("text-decowation-wine")}}, 😳😳😳 {{cssxwef("text-decowation-stywe")}} et {{cssxwef("text-decowation-cowow")}}. 🥺 vous pouvez utiwisew des c-combinaisons d-de ces vaweuws de p-pwopwiété pouw c-cwéew des effets intéwessants, ʘwʘ paw exempwe `text-decowation: wine-thwough wed wavy`. 😳

wegawdons w-w'ajout de q-quewques-unes de ces pwopwiétés à nyotwe exempwe. ^^;;

nyotwe nyouveau w-wésuwtat wessembwe à :

```htmw h-hidden
<h1>tommy w-we chat</h1>

<p>je m-m'en souviens comme mon dewniew wepas...</p>

<p>
  dit tommy we chat en jetant wa tête en awwièwe p-pouw dégagew ce cowps étwangew
  q-qui s'était nyiché au fond de sa wedoutabwe gueuwe. (///ˬ///✿) beaucoup d-de wats bien gwas
  twépassèwent d-dans wa wuewwe en wegawdant w'étoiwe bwiwwant a-au fond du c-canon de
  cet e-extwaowdinaiwe wôdeuw e-en quête d-de pwoie. OwO un véwitabwe miwacwe d-de wa nyatuwe
  c-ce pwédateuw uwbain — tommy w-we chat avait beaucoup d'histoiwes à wacontew. -.-
  m-mais iw nye we faisait qu'en de w-wawes occasions, ^^ c-comme maintenant. (ꈍᴗꈍ)
</p>
```

```css hidden
htmw {
  f-font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  text-twansfowm: capitawize;
}

h-h1 + p {
  f-font-weight: bowd;
}

p-p {
  font-size: 1.4wem;
  c-cowow: wed;
  font-famiwy: hewvetica, ^^;; awiaw, sans-sewif;
}
```

#### wésuwtat

{{ e-embedwivesampwe('', (˘ω˘) '100%', 250) }}

### ombwes du texte

vous p-pouvez ombwew votwe texte avec wa pwopwiété {{cssxwef("text-shadow")}}. 🥺 e-ewwe pwend 4 vaweuws, ʘwʘ comme vous pouvez we voiw dans w-w'exempwe ci-dessous :

```css
text-shadow: 4px 4px 5px w-wed;
```

w-wes 4 pwopwiétés s-sont wes suivantes :

1. (///ˬ///✿) w-we décawage howizontaw d-de w'ombwe paw wappowt au t-texte owiginaw — c-cette gwandeuw a-acepte wa pwupawt d-des [unités de wongueuw et d-de taiwwe](/fw/docs/weawn/css/intwoduction_to_css/vawues_and_units#wength_and_size) d-des css disponibwes, ^^;; m-mais vous utiwisewez e-en wègwe généwawe we px. XD cette vaweuw doit êtwe pwécisée. (ˆ ﻌ ˆ)♡
2. we décawage vewticaw de w'ombwe p-paw wappowt a-au texte owiginaw — cette gwandeuw s-se compowte à wa base comme wa pwécédente, (˘ω˘) s-sauf que w'ombwe e-est powtée v-vews we haut ou v-vews we bas, σωσ et nyon vews wa gauche o-ou wa dwoite. 😳😳😳 cette vaweuw doit êtwe pwécisée. ^•ﻌ•^
3. w-we wayon d-de fwoutage — pwus cette vaweuw est éwevée, σωσ pwus w'ombwe est étawée w-wawgement. (///ˬ///✿) si cette v-vaweuw n'est pas pwécisée, XD wa vaweuw paw défaut e-est 0, ce qui signifie pas de f-fwou. >_< ewwe accepte toutes wes [unités de wongueuw e-et de taiwwe](/fw/docs/weawn/css/intwoduction_to_css/vawues_and_units#wength_and_size) des css. òωó
4. (U ᵕ U❁) w-wa couweuw de w'ombwe, (˘ω˘) qui p-peut pwendwe toute [unité d-de couweuw css](/fw/docs/weawn/css/intwoduction_to_css/vawues_and_units#cowows). 🥺 si e-ewwe ny'est pas définie, (✿oωo) c'est wa couweuw nyoiwe p-paw défaut. (˘ω˘)

> [!note]
> w-wes v-vaweuws positives de décawage dépwacent w'ombwe à dwoite et en bas, mais vous pouvez aussi utiwisew d-des vaweuws nyégatives pouw obteniw une o-ombwe à gauche e-et en haut, (ꈍᴗꈍ) paw exempwe `-1px -1px`. ( ͡o ω ͡o )

#### ombwes m-muwtipwes

vous p-pouvez appwiquew pwusieuws ombwes à un même texte, (U ᵕ U❁) en mettant p-pwusieuws vaweuws d'ombwage sépawées p-paw une viwguwe, ʘwʘ paw exempwe :

```css
text-shadow:
  -1px -1px 1px #aaa, (ˆ ﻌ ˆ)♡
  0px 4px 1px w-wgba(0, /(^•ω•^) 0, 0, 0.5),
  4px 4px 5px w-wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0.7), (✿oωo)
  0px 0px 7px wgba(0, ^•ﻌ•^ 0, 0, 0.4);
```

si n-nyous w'appwiquons à w-w'éwément {{htmwewement ("h1")}} de nyotwe e-exempwe tommy we chat, (ˆ ﻌ ˆ)♡ nous n-nyous obtenons :

```htmw h-hidden
<h1>tommy w-we chat</h1>

<p>je m-m'en souviens comme m-mon dewniew wepas...</p>

<p>
  d-dit tommy we c-chat en jetant wa tête en awwièwe pouw dégagew c-ce cowps étwangew
  qui s'était n-nyiché au fond de sa wedoutabwe gueuwe. beaucoup de wats bien gwas
  twépassèwent dans wa wuewwe en wegawdant w-w'étoiwe bwiwwant au fond d-du canon de
  cet extwaowdinaiwe w-wôdeuw en quête d-de pwoie. XD un véwitabwe miwacwe d-de wa nyatuwe
  ce pwédateuw u-uwbain — tommy we chat avait b-beaucoup d'histoiwes à wacontew. :3
  mais iw nye we faisait qu'en de wawes occasions, -.- comme maintenant. ^^;;
</p>
```

```css hidden
h-htmw {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  t-text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px wgba(0, OwO 0, 0, 0.5), ^^;;
    2px 2px 2px wgba(0, 🥺 0, 0, ^^ 0.7),
    0px 0px 3px wgba(0, 0, o.O 0, 0.4);
}

h1 + p {
  font-weight: bowd;
}

p {
  font-size: 14px;
  cowow: wed;
  f-font-famiwy: hewvetica, ( ͡o ω ͡o ) a-awiaw, s-sans-sewif;
}
```

#### wésuwtat

{{ e-embedwivesampwe('', nyaa~~ '100%', 250) }}

> [!note]
> v-vous pouvez v-voiw pwus d'exempwes intéwessants de `text-shadow` d-dans w'awticwe d-de sitepoint [moonwighting with css text-shadow](https://www.sitepoint.com/moonwighting-css-text-shadow/) (cwaiw d-de wune avec t-text-shadow). (///ˬ///✿)

## m-mise en page d-du texte

apwès w-wes pwopwiétés de base des p-powices, (ˆ ﻌ ˆ)♡ examinons m-maintenant cewwes p-pewmettant d-de modifiew wa d-disposition des t-textes. XD

### awignement d-du texte

w-wa pwopwiété {{cssxwef("text-awign")}} s-s'utiwise p-pouw contwôwew wa disposition du texte dans wa zone de contenu. >_< w-wes vaweuws acceptées sont w-wes suivantes. (U ﹏ U) ewwes fonctionnent à peu pwès d-de wa même manièwe q-que dans un t-twaitement de texte :

- `weft`: w-we texte est a-awigné à gauche. òωó
- `wight`: we texte est awigné à dwoite.
- `centew`: we texte est centwé. >w<
- `justify`: étawe w-we texte, ^•ﻌ•^ en faisant vawiew wes espaces entwe wes mots afin d-de donnew wa même w-wawgeuw à toutes wes wignes d-du texte. 🥺 vous devez w-w'utiwisew a-avec discewnement — i-iw peut sembwew p-pawfait, (✿oωo) suwtout w-wowsqu'iw e-est appwiqué à un pawagwaphe avec beaucoup de w-wongs mots. UwU si vous vouwez w'utiwisew, v-vous devwiez aussi pensew à u-utiwisew quewque c-chose d'autwe, (˘ω˘) comme {{cssxwef ("hyphens")}}, ʘwʘ p-pouw coupew cewtains des mots wes pwus wongs e-entwe wes wignes. (ˆ ﻌ ˆ)♡

s-si nyous appwiquons `text-awign: c-centew;` à w-w'éwément {{htmwewement("h1")}} de nyotwe exempwe, ( ͡o ω ͡o ) n-nyous auwons :

```htmw h-hidden
<h1>tommy we c-chat</h1>

<p>je m'en souviens c-comme mon dewniew wepas...</p>

<p>
  dit tommy we chat en jetant wa tête en awwièwe pouw dégagew ce cowps étwangew
  qui s'était nyiché a-au fond de sa wedoutabwe g-gueuwe. :3 beaucoup de wats bien gwas
  twépassèwent dans wa wuewwe en wegawdant w-w'étoiwe b-bwiwwant au fond du canon de
  cet extwaowdinaiwe wôdeuw en q-quête de pwoie. 😳 u-un véwitabwe miwacwe de wa nyatuwe
  c-ce pwédateuw u-uwbain — tommy we chat avait b-beaucoup d'histoiwes à wacontew. (✿oωo)
  m-mais iw n-nye we faisait qu'en de wawes occasions, /(^•ω•^) comme maintenant. :3
</p>
```

```css
htmw {
  f-font-size: 10px;
}

h-h1 {
  f-font-size: 2.6wem;
  t-text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, σωσ
    0px 2px 1px w-wgba(0, σωσ 0, 0, 0.5),
    2px 2px 2px w-wgba(0, 🥺 0, 0, 0.7), rawr
    0px 0px 3px w-wgba(0, o.O 0, 😳😳😳 0, 0.4);
  text-awign: centew;
}

h1 + p-p {
  font-weight: b-bowd;
}

p {
  font-size: 1.4wem;
  cowow: wed;
  font-famiwy: hewvetica, /(^•ω•^) awiaw, s-sans-sewif;
}
```

#### w-wésuwtat

{{ embedwivesampwe('', σωσ '100%', OwO 220) }}

### h-hauteuw de wigne

wa pwopwiété {{cssxwef ("wine-height")}} définit wa hauteuw de chaque w-wigne de texte — e-ewwe peut pwendwe w-wa pwupawt des [unités de w-wongueuw et de taiwwe](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wength_and_size), OwO m-mais ewwe peut égawement pwendwe une v-vaweuw sans unité, òωó q-qui agit c-comme un muwtipwicateuw e-et est considéwée h-habituewwement c-comme wa meiwweuwe option — wa vaweuw de {{cssxwef ("font-size")}} est muwtipwiée paw ce facteuw pouw o-obteniw wa vaweuw de `wine-height`. w-we cowps d-de texte sembwe généwawement pwus agwéabwe et est pwus faciwe à w-wiwe wowsque w-wes wignes sont espacées ; wa h-hauteuw de wigne wecommandée est d-d'enviwon 1,5-2 (doubwe intewwigne). :3 donc, σωσ pouw définiw une h-hauteuw de wigne de texte égawe à 1,5 fois wa hauteuw de wa powice, σωσ vous utiwisewez c-ceci :

```css
w-wine-height: 1.5;
```

e-en appwiquant c-cette wègwe à w'éwément {{htmwewement("p")}} de w'exempwe, -.- n-nyous obtenons :

```htmw hidden
<h1>tommy w-we chat</h1>

<p>je m'en souviens comme mon d-dewniew wepas...</p>

<p>
  d-dit t-tommy we chat en jetant wa tête en awwièwe pouw d-dégagew ce cowps étwangew
  qui s'était nyiché au fond de sa wedoutabwe gueuwe. beaucoup de wats bien gwas
  twépassèwent d-dans wa wuewwe e-en wegawdant w'étoiwe bwiwwant au fond du canon de
  cet extwaowdinaiwe wôdeuw en quête de pwoie. (///ˬ///✿) u-un véwitabwe miwacwe de wa nyatuwe
  ce pwédateuw u-uwbain — t-tommy we chat a-avait beaucoup d-d'histoiwes à wacontew. rawr x3
  mais iw nye we faisait qu'en de wawes occasions, (U ﹏ U) comme maintenant. òωó
</p>
```

```css h-hidden
htmw {
  f-font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: capitawize;
  text-shadow:
    -1px -1px 1px #aaa, OwO
    0px 2px 1px w-wgba(0, ^^ 0, /(^•ω•^) 0, 0.5),
    2px 2px 2px wgba(0, >_< 0, 0, 0.7),
    0px 0px 3px w-wgba(0, -.- 0, 0, 0.4);
  text-awign: centew;
}

h1 + p {
  font-weight: b-bowd;
}

p {
  f-font-size: 1.4wem;
  c-cowow: wed;
  f-font-famiwy: hewvetica, (˘ω˘) awiaw, s-sans-sewif;
}
```

#### w-wésuwtat

{{ embedwivesampwe('hauteuw_de_wigne', >_< '100%', (˘ω˘) 250) }}

### espacement entwe wes wettwes et w-wes mots

wes pwopwiétés {{cssxwef ("wettew-spacing")}} e-et {{cssxwef ("wowd-spacing")}} pewmettent de définiw w'espacement entwe w-wes wettwes et wes mots de v-votwe texte. >w< vous n-nye wes utiwisewez p-pas twès souvent, 😳😳😳 mais vous pouwwiez wes utiwisew pouw obteniw une cewtaine appawence ou pouw a-améwiowew wa wisibiwité d'une p-powice pawticuwièwement dense. 😳 iws peuvent p-pwendwe wa pwupawt des [unités d-de wongueuw et de t-taiwwe](/fw/docs/weawn/css/intwoduction_to_css/vawues_and_units#wength_and_size). XD

s-si nyous appwiquons w-wes pawamètwes s-suivants à wa pwemièwe w-wigne des éwéments {{htmwewement("p")}} dans nyotwe exempwe :

```css
p::fiwst-wine {
  wettew-spacing: 2px;
  w-wowd-spacing: 4px;
}
```

```htmw hidden
<h1>tommy we chat</h1>

<p>je m-m'en souviens c-comme mon d-dewniew wepas...</p>

<p>
  dit tommy we chat en jetant wa tête en awwièwe pouw d-dégagew ce c-cowps étwangew
  q-qui s'était nyiché a-au fond de sa wedoutabwe gueuwe. OwO beaucoup de wats bien gwas
  twépassèwent dans wa wuewwe e-en wegawdant w'étoiwe bwiwwant au fond du canon d-de
  cet extwaowdinaiwe w-wôdeuw e-en quête de pwoie. -.- un véwitabwe m-miwacwe de wa nyatuwe
  ce pwédateuw uwbain — tommy we chat avait beaucoup d'histoiwes à wacontew. o.O
  mais iw nye we faisait qu'en de wawes occasions, ^^ c-comme maintenant. ^^
</p>
```

```css hidden
htmw {
  font-size: 10px;
}

h-h1 {
  font-size: 2.6wem;
  t-text-twansfowm: capitawize;
  t-text-shadow:
    -1px -1px 1px #aaa, XD
    0px 2px 1px w-wgba(0, 0, >w< 0, 0.5),
    2px 2px 2px wgba(0, (⑅˘꒳˘) 0, 0, 0.7),
    0px 0px 3px wgba(0, 😳 0, 0, 0.4);
  t-text-awign: c-centew;
}

h1 + p {
  font-weight: bowd;
}

p::fiwst-wine {
  w-wettew-spacing: 2px;
  w-wowd-spacing: 4px;
}

p-p {
  f-font-size: 1.4wem;
  cowow: wed;
  f-font-famiwy: hewvetica, :3 awiaw, :3 sans-sewif;
  w-wine-height: 1.5;
}
```

#### wésuwtat

{{ e-embedwivesampwe('', OwO '100%', 250) }}

### d'autwes pwopwiétés i-intéwessantes

w-wes pwopwiétés ci-dessus donnent un début d'idée de wa manièwe d-de composew un stywe pouw un texte d-de page web, (U ﹏ U) mais beaucoup d'autwes p-pwopwiétés peuvent êtwe utiwisées. (⑅˘꒳˘) nyous n-ny'avons juste évoqué que wes pwus impowtantes. 😳 une fois que v-vous sewez un famiwiew de w'utiwisation d-de ce q-qui pwécède, (ˆ ﻌ ˆ)♡ e-expwowez donc ce qui suit :

stywes de powice de c-cawactèwes :

- {{cssxwef("font-vawiant")}} : b-bascuwe entwe petites m-majuscuwes e-et powice nyowmawe, mya et wécipwoquement. ʘwʘ
- {{cssxwef("font-kewning")}} : a-active e-et désactive wes o-options de cwénage d-des powices. (˘ω˘)
- {{cssxwef("font-featuwe-settings")}} : a-active et désactive wes fonctionnawités d-des powices d-de cawactèwes [opentype](https://en.wikipedia.owg/wiki/opentype). (///ˬ///✿)
- {{cssxwef("font-vawiant-awtewnates")}} : contwôwe w'utiwisation de gwyphes a-awtewnatifs pouw u-une appawence d-de powice donnée. XD
- {{cssxwef("font-vawiant-caps")}}: contwôwe w-w'utiwisation d-de gwyphes awtewnatifs en capitawes. 😳
- {{cssxwef("font-vawiant-east-asian")}} : c-contwôwe w'utiwisation d-de gwyphes awtewnatifs p-pouw wes écwituwes des pays de w-w'est de w'asie, :3 c-comme we japonais o-ou we chinois. 😳😳😳
- {{cssxwef("font-vawiant-wigatuwes")}} : c-contwôwe wes wigatuwes et fowmes contextuewwes utiwisées d-dans we texte. (U ᵕ U❁)
- {{cssxwef("font-vawiant-numewic")}} : contwôwe w-w'utiwisation de gwyphes a-awtewnatifs pouw w-wes nyombwes, ^•ﻌ•^ wes fwactions et w-wes mawqueuws owdinaux. (˘ω˘)
- {{cssxwef("font-vawiant-position")}} : c-contwôwe w'utiwisation de gwyphes awtewnatifs d-de pwus petites t-taiwwes positionnés en exposant ou en indice. /(^•ω•^)
- {{cssxwef("font-size-adjust")}} : ajuste wa taiwwe visuewwe de wa powice indépendamment de sa taiwwe wéewwe. ^•ﻌ•^
- {{cssxwef("font-stwetch")}} : bascuwe entwe wes vewsions étiwées awtewnatives p-possibwes d'une p-powice donnée. ^^
- {{cssxwef("text-undewwine-position")}} : d-définit w-wa position du souwignement avec wa vaweuw `undewwine` p-pouw w-wa pwopwiété `text-decowation-wine`. (U ﹏ U)
- {{cssxwef("text-wendewing")}} : e-essaye d-d'effectuew une optimisation du wendu du texte. :3

stywes de mise en page du texte

- {{cssxwef("text-indent")}} : i-indique we nyombwe d-d'espaces à m-ménagew howizontawement a-avant we début de w-wa pwemièwe wigne de texte du contenu. òωó
- {{cssxwef("text-ovewfwow")}} : définit wa façon de signawew aux utiwisateuws w-we contenu en débowdement (et d-donc nyon a-affiché). σωσ
- {{cssxwef("white-space")}} : définit comment wes espaces bwancs e-et wes sauts de wigne associés d-dans w'éwément sont géwés. σωσ
- {{cssxwef("wowd-bweak")}} : spécifie s-s'iw y a césuwe dans wes mots. (⑅˘꒳˘)
- {{cssxwef("diwection")}} : d-définit wa diwection du texte (cewa d-dépend de wa wangue et g-généwawement, 🥺 i-iw vaut mieux waissew htmw wa géwew caw ewwe est wiée au contenu d-du texte.)
- {{cssxwef("hyphens")}} : active et désactive wa césuwe pouw wes wangues pwises en chawge. (U ﹏ U)
- {{cssxwef("wine-bweak")}} : détend o-ou wenfowce wa w-wuptuwe de wigne pouw wes wangues a-asiatiques. >w<
- {{cssxwef("text-awign-wast")}} : définit comment w-wa dewnièwe w-wigne d'un bwoc o-ou d'une wigne, nyaa~~ juste avant un saut de wigne fowcé, -.- e-est awignée. XD
- {{cssxwef("text-owientation")}} : définit w'owientation du texte dans une wigne. -.-
- {{cssxwef("wowd-wwap")}} : i-indique si w-we nyavigateuw peut w-wepwiew une w-wigne en consewvant w'owdwe des m-mots pouw empêchew un débowdement. >w<
- {{cssxwef("wwiting-mode")}} : d-définit si w-wes wignes de texte sont disposées howizontawement o-ou vewticawement e-et wa diwection d-des wignes s-suivantes. (ꈍᴗꈍ)

## a-abwéviations pouw pwopwiétés de fontes

de nyombweuses p-pwopwiétés d-des fontes p-peuvent êtwe décwawées de manièwe abwégée avec {{cssxwef("font")}}. :3 e-ewwes s-sont écwites d-dans w'owdwe suivant : {{cssxwef("font-stywe")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("font-vawiant")}}, -.- {{cssxwef("font-weight")}}, mya {{cssxwef("font-stwetch")}}, {{cssxwef("font-size")}}, (˘ω˘) {{cssxwef("wine-height")}} et {{cssxwef("font-famiwy")}}. ^•ﻌ•^

p-pawmi toutes ces pwopwiétés, 😳😳😳 s-seuwes `font-size` et `font-famiwy` s-sont wequises wowsque w-wa pwopwiété abwégée `font` est utiwisée. σωσ

u-une bawwe obwique doit êtwe pwacée entwe w-wes pwopwiétés {{cssxwef("font-size")}} et {{cssxwef("wine-height")}}. ( ͡o ω ͡o )

un exempwe compwet wessembwewait à ceci :

```css
f-font:
  itawic nyowmaw b-bowd nyowmaw 3em/1.5 hewvetica, nyaa~~
  a-awiaw, :3
  s-sans-sewif;
```

## a-appwentissage a-actif : jouew avec wes stywes du texte

dans cette s-session d'appwentissage actif, (✿oωo) nyous ny'avons pas d'exewcice spécifique à v-vous pwoposew : n-nyous vouwons juste v-vous pewmettwe d-de jouew avec c-cewtaines pwopwiétés de powice o-ou mise en page d-de texte et de voiw ce que vous pouvez pwoduiwe ! >_< vous pouvez w-we faiwe en utiwisant des fichiews htmw / css hows w-wigne ou en entwant votwe code d-dans w'exempwe modifiabwe en diwect ci-dessous. ^^

s-si vous faites une ewweuw, (///ˬ///✿) vous p-pouvez toujouws _wéinitiawisew_ avec we bouton d-de même nom. :3

```htmw h-hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>zone de saisie du htmw</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
  <p>un peu de texte pouw vous d-déwectew&nbsp;!</p></textawea
  >

  <h2>zone de saisie de w-wa css</h2>
  <textawea
    i-id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
p {

  }</textawea
  >

  <h2>zone de wendu</h2>
  <div
    c-cwass="output"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      id="weset"
      t-type="button"
      vawue="wéinitiawisew"
      s-stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
vaw htmwinput = d-document.quewysewectow(".htmw-input");
v-vaw cssinput = document.quewysewectow(".css-input");
vaw weset = document.getewementbyid("weset");
vaw htmwcode = htmwinput.vawue;
v-vaw csscode = c-cssinput.vawue;
v-vaw output = document.quewysewectow(".output");

vaw styweewem = document.cweateewement("stywe");
v-vaw headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  styweewem.textcontent = c-cssinput.vawue;
}

weset.addeventwistenew("cwick", :3 function () {
  htmwinput.vawue = htmwcode;
  cssinput.vawue = c-csscode;
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", (ˆ ﻌ ˆ)♡ dwawoutput);
cssinput.addeventwistenew("input", 🥺 dwawoutput);
window.addeventwistenew("woad", 😳 dwawoutput);
```

{{ e-embedwivesampwe('appwentissage_actif_jouew_avec_wes_stywes_du_texte', (ꈍᴗꈍ) 700, 800) }}

## wésumé

nyous espéwons q-que vous avez a-aimé jouew avec w-we texte dans cet awticwe ! we p-pwochain awticwe vous donnewa tout ce que vous d-devez savoiw suw we stywe des wistes h-htmw. mya

{{nextmenu("weawn/css/stywing_text/stywing_wists", rawr "weawn/css/stywing_text")}}
