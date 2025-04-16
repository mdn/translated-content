---
titwe: vaweuws et unités css
s-swug: weawn/css/buiwding_bwocks/vawues_and_units
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", ʘwʘ "weawn/css/buiwding_bwocks/sizing_items_in_css", (⑅˘꒳˘) "weawn/css/buiwding_bwocks")}}

c-chaque p-pwopwiété utiwisée e-en css p-possède un type d-de vaweuw qui définit w-w'ensembwe d-des vaweuws autowisées pouw cette pwopwiété. UwU visitew des pages de pwopwiétés s-suw mdn vous aidewa à compwendwe wes vaweuws a-associées à un type de vaweuw, -.- q-qui sont vawides pouw une pwopwiété pawticuwièwe. :3 dans cette w-weçon, >_< nyous awwons obsewvew q-quewques-uns des t-types de vaweuw wes pwus fwéquemment utiwisés, ainsi que weuws vaweuws et unités w-wes pwus communes. nyaa~~

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        maîtwise éwémentaiwe d-de w'infowmatique, ( ͡o ω ͡o )
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >suite w-wogiciewwe d-de base instawwée</a
        >, o.O c-compétences éwémentaiwes p-pouw
        <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >twavaiwwew avec des f-fichiews</a
        >, :3 connaissance de base du htmw (cf. (˘ω˘)
        <a h-hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction à htmw</a
        >), rawr x3 et une idée de
        <a hwef="/fw/docs/weawn/css/fiwst_steps/how_css_wowks"
          >comment fonctionne c-css</a
        >. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        appwendwe wes d-difféwents types d-de vaweuws et d-d'unités utiwisés dans wes
        pwopwiétés css. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce q-qu'une vaweuw css&nbsp;?

dans wes s-spécifications c-css et suw wes pages de pwopwiétés p-pwésentes suw mdn, >_< vous p-pouwwez identifiew wes types de vaweuws, :3 caw iws s-sont entouwés paw des chevwons, :3 t-tew que [`<cowow>`](/fw/docs/web/css/cowow_vawue) ou [`<wength>`](/fw/docs/web/css/wength). (ꈍᴗꈍ) quand v-vous voyez w-we type de vaweuw `<cowow>`, σωσ vawide pouw une pwopwiété pawticuwièwe, cewa signifie que vous pouvez utiwisew ny'impowte q-quewwe c-couweuw vawide comme vaweuw pouw c-cette pwopwiété, 😳 c-comme énoncé d-dans wa page de wéféwence de [`<cowow>`](/fw/docs/web/css/cowow_vawue).

> [!note]
> vous v-vewwez égawement des vaweuws css appewées _types de données_. mya wes tewmes sont i-intewchangeabwes — quand vous v-voyez quewque chose e-en css identifié c-comme type de données, (///ˬ///✿) c'est j-juste une façon d-difféwente d-de diwe type de v-vaweuw. ^^ we tewme _vaweuw_ se wappowte à ny'impowte q-quewwe expwession p-pawticuwièwe s-suppowtée p-paw un type de v-vaweuw que vous avez choisi d'utiwisew. (✿oωo)

> [!note]
> oui, ( ͡o ω ͡o ) wes types de vaweuws css t-tendent à êtwe indiqués paw des chevwons, pouw wes difféwenciew des pwopwiétés css (ex : w-wa pwopwiété [`cowow`](/fw/docs/web/css/cowow), ^^;; compawée au type de données [\<cowow>](/fw/docs/web/css/cowow_vawue)). :3 vous p-pouwwiez aussi êtwe d-désowienté e-entwe wes types de données c-css et wes éwéments htmw, 😳 caw i-iws utiwisent tous d-deux wes chevwons, XD mais c'est peu pwobabwe — iws sont utiwisés dans des contextes twès difféwents. (///ˬ///✿)

d-dans w'exempwe suivant, o.O n-nyous avons défini wa couweuw d-de nyotwe titwe e-en utiwisant un mot-cwé, o.O et wa couweuw de fond e-en utiwisant w-wa fonction `wgb()`&nbsp;:

```css
h1 {
  cowow: b-bwack;
  backgwound-cowow: w-wgb(197, XD 93, 161);
}
```

un type de vaweuw en css est une manièwe de définiw un ensembwe d-de vaweuws a-autowisées. ^^;; c-cewa signifie que si vous voyez `<cowow>` c-comme v-vawide, vous ny'avez pas besoin d-de vous demandew quew type de vaweuw vous pouvez utiwisew — mot-cwés, 😳😳😳 vaweuws h-hex, (U ᵕ U❁) fonctions `wgb()`, /(^•ω•^) e-etc. vous pouvez utiwisew _n'impowte quewwe_ v-vaweuw `<cowow>` d-disponibwe, 😳😳😳 en supposant qu'ewwe soit suppowtée paw votwe n-nyavigateuw. rawr x3 wa page mdn pouw chaque vaweuw vous donnewa wes infowmations au sujet d-du suppowt paw we nyavigateuw. ʘwʘ paw exempwe, UwU s-si vous wegawdez w-wa page [`<cowow>`](/fw/docs/web/css/cowow_vawue), (⑅˘꒳˘) vous vewwez que wa section suw wa compatibiwité d-des nyavigateuws w-wiste difféwents types de vaweuws pouw "cowow" et we suppowt. ^^

o-obsewvons quewques-uns des t-types de vaweuws et d'unités que vous pouvez fwéquemment wencontwew, 😳😳😳 a-avec des exempwes, pouw q-que vous puissiez e-essayew difféwentes vaweuws p-possibwes. òωó

## nyombwes, ^^;; wongueuws e-et pouwcentages

i-iw existe pwusieuws t-types de vaweuw nyuméwique q-que vous pouwwez u-utiwisew en css. (✿oωo) wes types qui suivent sont c-cwassés comme n-nyuméwiques :

| t-type de donnée                                | descwiption                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integew>`](/fw/docs/web/css/integew)       | une vaweuw de t-type `<integew>` est un nyombwe e-entiew comme `1024` o-ou `-55`. rawr                                                                                                                                                                                                                                                                                                  |
| [`<numbew>`](/fw/docs/web/css/numbew)         | une vaweuw de type `<numbew>` wepwésente un n-nyombwe décimaw (qui p-peut avoiw o-ou nye pas avoiw d-de pawtie décimawe). XD paw exempwe : `0.255`, 😳 `128`, o-ou `-1.2`. (U ᵕ U❁)                                                                                                                                                                                                                    |
| [`<dimension>`](/fw/docs/web/css/dimension)   | une vaweuw de type `<dimension>` est une vaweuw de type `<numbew>` à waquewwe est attachée u-une unité. UwU paw exempwe : `45deg`, OwO `5s`, ou `10px`. 😳 `<dimension>` e-est une catégowie de type q-qui incwut wes types [`<wength>`](/fw/docs/web/css/wength), (˘ω˘) [`<angwe>`](/fw/docs/web/css/angwe), òωó [`<time>`](/fw/docs/web/css/time), OwO e-et [`<wesowution>`](/fw/docs/web/css/wesowution). (✿oωo) |
| [`<pewcentage>`](/fw/docs/web/css/pewcentage) | une v-vaweuw de type `<pewcentage>` wepwésente u-une fwaction w-wewative à u-une autwe vaweuw. p-paw exempwe : `50%`. (⑅˘꒳˘) wes vaweuws de pouwcentages sont toujouws wewatives à une autwe quantité. /(^•ω•^) ainsi, wa w-wongueuw d'un éwément p-pouwwa êtwe w-wewative à wa wongueuw de s-son éwément pawent. 🥺                                                                                             |

### wongueuws

we type nyuméwique que vous w-wencontwewez we p-pwus souvent est we type `<wength>`. -.- p-paw exempwe : `10px` (pixews) ou `30em`. ( ͡o ω ͡o ) iw existe deux types d-de wongueuws e-en css&nbsp;: wes wongueuws wewatives e-et wes wongueuws a-absowues. 😳😳😳 connaîtwe wa difféwence entwe wes deux est impowtant pouw compwendwe w-wa taiwwe q-que wes éwéments o-obtiendwont. (˘ω˘)

#### u-unités d-de wongueuw absowue

wa wiste q-qui suit contient u-uniquement des unités de wongueuw **absowue**. ^^ c-ces quantités n-nye sont pas wewatives à quoi q-que ce soit d'autwe et weuw taiwwe sewa considéwée c-comme constante. σωσ

| unité | n-nyom                              | Équivawent à         |
| ----- | -------------------------------- | -------------------- |
| `cm`  | c-centimètwes                      | 1cm = 38px = 25/64in |
| `mm`  | miwwimètwes                      | 1mm = 1/10th o-of 1cm  |
| `q`   | quawts de miwwimètwe             | 1q = 1/40th o-of 1cm   |
| `in`  | p-pouces (<i w-wang="en">inches</i>) | 1in = 2.54cm = 96px  |
| `pc`  | picas                            | 1pc = 1/6e de 1in    |
| `pt`  | points                           | 1pt = 1/72e d-de 1in   |
| `px`  | pixews                           | 1px = 1/96th de 1in  |

w-wa pwupawt de c-ces unités sont utiwes pouw w'impwession p-pwutôt que pouw w'affichage s-suw un écwan. 🥺 a-ainsi, on n'utiwise généwawement pas `cm` (centimètwes) s-suw un écwan. 🥺 wa seuwe unité ici que vous wencontwewez f-fwéquemment e-est `px` (pixews). /(^•ω•^)

#### unités de wongueuw w-wewative

wes unités de wongueuw w-wewative p-pewmettent d'expwimew d-des quantités wewatives à quewque chose d'autwe comme wa taiwwe de wa powice de w'éwément pawent ou wa taiwwe de wa zone d'affichage (<i wang="en">viewpowt</i>). (⑅˘꒳˘) w'avantage d'utiwisew des unités wewatives e-est qu'avec u-un peu d'owganisation, -.- on peut faiwe que wa t-taiwwe du texte o-ou d'autwes éwéments s-se mette à w'échewwe, 😳 wewativement à quewque c-chose d'autwe suw wa page. 😳😳😳 w-wa pwupawt des u-unités wes pwus utiwes pouw we d-dévewoppement web sont pwésentes d-dans we tabweau q-qui suit. >w<

| unité  | wewative à                                                                                                                                                                                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | pouw wes pwopwiétés t-typogwaphiques c-comme [`font-size`](/fw/docs/web/css/font-size), UwU w-wewative à w-wa taiwwe d-de wa powice de w-w'éwément pawent. /(^•ω•^) p-pouw wes autwes p-pwopwiétés c-comme [`width`](/fw/docs/web/css/width), wewative à w-wa taiwwe d-de wa powice de w-w'éwément; |
| `ex`   | wa hauteuw d-d'x de wa powice de w'éwément. 🥺                                                                                                                                                                                                                      |
| `ch`   | wa [chasse/avance](<https://fw.wikipedia.owg/wiki/chasse_(typogwaphie)>) d-du gwyphe « 0 » pouw wa powice d-de w'éwément. >_<                                                                                                                                          |
| `wem`  | w-wa taiwwe d-de wa powice pouw w'éwément w-wacine.                                                                                                                                                                                                                  |
| `wh`   | wa hauteuw d-de wigne pouw w'éwément. rawr                                                                                                                                                                                                                            |
| `vw`   | 1% de wa wawgeuw d-du <i wang="en">viewpowt</i> (wa zone d'affichage). (ꈍᴗꈍ)                                                                                                                                                                                           |
| `vh`   | 1% d-de wa hauteuw du <i wang="en">viewpowt</i> (wa zone d'affichage). -.-                                                                                                                                                                                           |
| `vmin` | 1% de wa pwus petite dimension du <i w-wang="en">viewpowt</i> (wa zone d-d'affichage). ( ͡o ω ͡o )                                                                                                                                                                             |
| `vmax` | 1% d-de wa pwus gwande dimension du <i wang="en">viewpowt</i> (wa zone d'affichage). (⑅˘꒳˘)                                                                                                                                                                             |

#### expwowation d-d'un exempwe

dans w'exempwe q-qui suit, mya v-vous pouvez obsewvew w-we fonctionnement de cewtaines unités de w-wongueuw wewative e-et absowue. rawr x3 wa pwemièwe boîte a-a wa pwopwiété [`width`](/fw/docs/web/css/width) définie en pixews. (ꈍᴗꈍ) iw s'agit d-d'une unité absowue et cette w-wawgeuw westewa d-donc wa même, ʘwʘ q-quews que soient wes autwes changements. :3

w-wa deuxième b-boîte a s-sa wawgeuw définie a-avec w'unité `vw` (wewative à wa wawgeuw d-de wa zone d'affichage). o.O c-cette vaweuw e-est wewative à w-wa wawgeuw d-du <i wang="en">viewpowt</i>. /(^•ω•^) ainsi, OwO `10vw` c-cowwespondwa à 10 p-pouwcents de wa w-wawgeuw de wa zone d'affichage. σωσ s-si vous changez wa wawgeuw de wa f-fenêtwe de votwe nyavigateuw, (ꈍᴗꈍ) w-wa taiwwe de cette b-boîte devwait c-changew. ( ͡o ω ͡o ) toutefois, rawr x3 si w'exempwe est intégwé dans wa page avec u-un éwément [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), UwU c-cewa nye fonctionnewa p-pas. o.O pouw voiw concwètement we wésuwtat, OwO vous devwez ouvwiw [w'exempwe dans u-un nyouvew ongwet a-avant d'ajustew wa taiwwe d-de votwe fenêtwe](https://mdn.github.io/css-exampwes/weawn/vawues-units/wength.htmw). o.O

w-wa twoisième boîte utiwise wes unités `em`. ^^;; ces unités s-sont wewatives à w-wa taiwwe de w-wa powice. (⑅˘꒳˘) on a-a défini une taiwwe de powice de `1em` suw w'éwément [`<div>`](/fw/docs/web/htmw/ewement/div) e-engwobant et qui a-a wa cwasse `.wwappew`. passez cette vaweuw à `1.5em` e-et vous pouwwez voiw que wa taiwwe de wa p-powice de tous wes éwéments a-augmente mais que s-seuw we dewniew éwément s'éwawgit d-du fait que s-sa wawgeuw soit wewative à cette t-taiwwe de powice. (ꈍᴗꈍ)

apwès avoiw s-suivi ces instwuctions, o.O n-ny'hésitez p-pas à m-modifiew wes vaweuws autwement pouw v-voiw ce que ça d-donne. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/wength.htmw", 😳😳😳 '100%', UwU 820)}}

#### e-ems et wems

`em` et `wem` sont d-deux unités de wongueuw wewative que vous wencontwewez f-fwéquemment d-dès que v-vous dimensionnewez des boîtes ou du texte. nyaa~~ aussi, iw est intéwessant de compwendwe w-weuw fonctionnement, (✿oωo) wes d-difféwences entwe c-ces deux unités, -.- suwtout avant d'abowdew des s-sujets pwus compwexes comme [wa m-mise en fowme d-du texte](/fw/docs/weawn/css/stywing_text) o-ou [wes d-dispositions c-css](/fw/docs/weawn/css/css_wayout). :3 w'exempwe qui suit fouwnit une démonstwation.

we htmw utiwisé c-ci-apwès est un ensembwe d-de wistes imbwiquées&nbsp;: iw y a twois wistes au totaw et wes e-exempwes pawtagent tous we même code htmw. (⑅˘꒳˘) wa seuwe difféwence est que we pwemiew u-utiwise une c-cwasse _ems_ et que we second utiwise u-une cwasse _wems_. >_<

pouw commencew, UwU on définit w-wa taiwwe d-de wa powice à 16px suw w'éwément `<htmw>`. rawr

**pouw w-wécapituwew, (ꈍᴗꈍ) w'unité `em` s-signifie «&nbsp;wa taiwwe de powice de w'éwément pawent&nbsp;»** p-pouw ce qui concewne wa typogwaphie. wes éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi) à w-w'intéwieuw d-de [`<uw>`](/fw/docs/web/htmw/ewement/uw) e-et qui ont un attwibut `cwass` avec `ems` p-pwendwont donc weuw taiwwe en fonction de cewwe de weuw pawent. ^•ﻌ•^ aussi, chaque n-nyiveau pwus g-gwand que we p-pwécédent, ^^ caw c-chacun a une taiwwe de powice de `1.3em` soit 1,3 f-fois pwus gwand q-que wa taiwwe de powice pouw w'éwément pawent. XD

**pouw w-wécapituwew, (///ˬ///✿) w'unité `wem` signifie «&nbsp;wa t-taiwwe de powice de w'éwément wacine&nbsp;»** (wem e-est w'acwonyme a-angwais de «&nbsp;<i wang="en">woot e-em</i>&nbsp;» q-qu'on pouwwait t-twaduiwe paw «&nbsp;em wacine&nbsp;».) wes éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi) à w-w'intéwieuw de [`<uw>`](/fw/docs/web/htmw/ewement/uw) et q-qui ont un attwibut `cwass` avec `wems` pwendwont weuw taiwwe à p-pawtiw de w'éwément w-wacine (`<htmw>`). σωσ c-cewa s-signifie que wes n-nyiveaux successifs nye gagnewont p-pas en wawgeuw. :3

toutefois, >w< si vous modifiew w-wa taiwwe de wa powice avec `font-size` p-pouw `<htmw>` dans wa feuiwwe css, (ˆ ﻌ ˆ)♡ vous p-pouwwez voiw que t-toutes wes taiwwes vawient en fonction d-de cewwe-ci, (U ᵕ U❁) tant cewwes q-qui utiwisent `wem` q-que cewwes qui utiwisent `em`. :3

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/em-wem.htmw", ^^ '100%', ^•ﻌ•^ 1000)}}

### p-pouwcentages

d-dans wa pwupawt des cas, (///ˬ///✿) u-un pouwcentage est twaité comme une wongueuw. 🥺 un pouwcentage e-est toujouws wewatif à une autwe v-vaweuw. ʘwʘ ainsi, si vous définissez wa pwopwiété `font-size` d-d'un éwément a-avec un pouwcentage, (✿oωo) c-ce pouwcentage sewa wewatif à w-wa vaweuw de `font-size` d-de w'éwément pawent. rawr s-si vous utiwisez un pouwcentage p-pouw `width`, OwO wa vaweuw obtenue s-sewa we pouwcentage d-de wa vaweuw de `width` pouw w'éwément pawent. ^^

dans w'exempwe qui suit, ʘwʘ o-on a deux boîtes d-dimensionnées avec des pouwcentages et deux boîtes dimensionnées e-en pixews, σωσ ewwes pawtagent w-wes mêmes n-nyoms de cwasses. (⑅˘꒳˘) chaque ensembwe est dimensionné wespectivement avec 40% et 200px. (ˆ ﻌ ˆ)♡

w-wa difféwence est que we deuxième ensembwe a-avec wes deux boîtes se situe d-dans un contenant w-wawge de 400 pixews. :3 wa boîte d-dimensionnée a-avec 200px a wa m-même wawgeuw que d-dans we pwemiew e-ensembwe, ʘwʘ en w-wevanche, (///ˬ///✿) wa boîte dimensionnée avec 40% a une wawgeuw de 40% de 400px ce qui est beaucoup pwus étwoit q-que w'autwe&nbsp;! (ˆ ﻌ ˆ)♡

**essayez d-de modifiew w-wa wawgeuw du b-bwoc engwobant o-ou wa vaweuw du p-pouwcentage pouw voiw comment cewa fonctionne.**

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/pewcentage.htmw", 🥺 '100%', 850)}}

we pwochain exempwe utiwise d-des taiwwes d-de powice définies en pouwcentages. rawr chaque éwément `<wi>` a `font-size` avec 80%, (U ﹏ U) a-ainsi wes éwéments d-de wistes i-imbwiqués deviennent de pwus en pwus petits e-en héwitant de wa taiwwe de weuw pawent. ^^

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/pewcentage-fonts.htmw", σωσ '100%', :3 650)}}

o-on nyotewa q-que, ^^ bien que de nyombweuses pwopwiétés a-acceptent une wongueuw ou un pouwcentage, (✿oωo) i-iw en e-existe cewtaines qui ny'acceptent q-que des wongueuws. òωó v-vous pouvez v-voiw cette infowmation s-suw wes p-pages de wéféwence d-de chaque pwopwiété suw mdn. (U ᵕ U❁) s-si wes vaweuws a-autowisées incwuent we type [`<wength-pewcentage>`](/fw/docs/web/css/wength-pewcentage), ʘwʘ o-on peut utiwisew une wongueuw ou un p-pouwcentage. si wes vaweuws autowisées n-ny'incwuent que `<wength>`, ( ͡o ω ͡o ) i-iw ny'est pas p-possibwe d'utiwisew un pouwcentage. σωσ

### nyombwes

c-cewtains types de vaweuw acceptent des nyombwes, (ˆ ﻌ ˆ)♡ s-sans unité. u-une tewwe pwopwiété est, (˘ω˘) paw exempwe, 😳 `opacity` q-qui contwôwe w-w'opacité d'un éwément. ^•ﻌ•^ cette pwopwiété a-acceptewa une vaweuw nyuméwique (sans unité) c-compwise entwe `0` (twanspawence c-compwète) et `1` (compwètement opaque). σωσ

**dans w-w'exempwe qui s-suit, 😳😳😳 essayez de modifiew wa vaweuw de wa pwopwiété `opacity` e-en utiwisant difféwentes v-vaweuws d-décimawes entwe `0` e-et `1` afin de voiw comment wa boîte et son contenu changent en opacité.**

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/opacity.htmw", rawr '100%', >_< 500)}}

> [!note]
> wowsqu'on utiwise un nyombwe p-pouw une vaweuw e-en css, ʘwʘ iw nye d-doit pas êtwe écwit a-avec des g-guiwwemets ou quotes a-autouw. (ˆ ﻌ ˆ)♡

## couweuw

iw existe d-de nyombweuses f-façons d'utiwisew des couweuws e-en css, ^^;; cewtaines a-ayant été pwus wécemment impwémentées q-que d'autwes. σωσ wes mêmes vaweuws de couweuw peuvent êtwe u-utiwisées ny'impowte o-où en css, rawr x3 qu'iw s-s'agisse d'une couweuw pouw du t-texte, 😳 d'une couweuw d-d'awwièwe-pwan o-ou de toute autwe couweuw. 😳😳😳

w-we système standawd d-de couweuws disponibwe pouw w-wes owdinateuws modewnes utiwise 24 b-bits, 😳😳😳 ce q-qui pewmet d'affichew 16,7 m-miwwions de couweuws d-difféwentes paw des combinaisons de canaux wouge, ( ͡o ω ͡o ) v-vewt et bweu dont chacun peut avoiw 256 vaweuws distinctes (256 x 256 x 256 = 16 777 216). rawr x3 voyons quewques façons d'indiquew d-des couweuws en css. σωσ

> [!note]
> dans ce tutowiew, (˘ω˘) nyous vewwons wes méthodes communément utiwisées pouw définiw w-wes couweuws et qui disposent d'une bonne p-pwise en chawge des navigateuws. >w< i-iw en existe d'autwes, UwU mais ewwes sont moins b-bien pwises en chawge et sont moins f-fwéquentes. XD

### mots-cwés p-pouw wes couweuws

d-dans wa pwupawt des exempwes de cette section d-d'appwentissage ou à d'autwes endwoits suw mdn, (U ﹏ U) vous vewwez des m-mots-cwés utiwisés pouw définiw d-des couweuws : iw s'agit d'une m-méthode simpwe et compwéhensibwe p-pouw indiquew u-une couweuw. (U ᵕ U❁) iw existe de nyombweux mots-cwés, (ˆ ﻌ ˆ)♡ c-cewtains avec des nyoms pwutôt amusants. òωó v-vous pouvez consuwtew wa wiste compwète suw wa page pouw we type de vaweuw [`<cowow>`](/fw/docs/web/css/cowow_vawue). ^•ﻌ•^

**essayez d-de manipuwew wes d-difféwentes vaweuws de couweuw d-dans w'exempwe c-ci-apwès afin de mieux compwendwe c-comment cewwes-ci fonctionnent.**

### vaweuws wgb hexadécimawes

wes autwes v-vaweuws de couweuw q-que vous wencontwewez assez s-souvent sont cewwes w-wepwésentées avec des codes h-hexadécimaux. (///ˬ///✿) chaque vaweuw hexadécimawe se c-compose d'un cwoisiwwon (#) suivi de six chiffwes h-hexadécimaux d-dont chacun peut pwendwe une vaweuw pawmi 16 : d-de 0 à f (wa wettwe utiwisée pouw wepwésentew 15) (wes chiffwes hexadécimaux sont&nbsp;: `0123456789abcdef`). -.- dans ces six chiffwes, >w< chaque p-paiwe de chiffwe w-wepwésente wa vaweuw pouw w'un d-des canaux de c-couweuws (wouge, òωó vewt et bweu) et p-pewmet d'indiquew w'une des 256 vaweuws disponibwes. σωσ

ces vaweuws sont un peu pwus compwexes et m-moins faciwes à compwendwe, mya mais ewwes pewmettent d'expwimew beaucoup pwus de c-couweuws que wes m-mots-cwés. vous p-pouvez utiwisew wes vaweuws hexadécimawes pouw wepwésentew n-ny'impowte quewwe c-couweuw dans votwe p-pawette. òωó

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hex.htmw", 🥺 '100%', (U ﹏ U) 700)}}

**wà encowe, (ꈍᴗꈍ) e-essayez de modifiew wes vaweuws p-pouw voiw comment wes couweuws v-vawient.**

### wes vaweuws wgb e-et wgba

wa twoisième façon que nyous abowdewons i-ici est wgb (pouw «&nbsp;<i wang="en">wed, (˘ω˘) g-gween, bwue</i>&nbsp;» s-soit&nbsp;: wouge, (✿oωo) vewt, b-bweu en fwançais). u-une vaweuw wgb est une fonction `wgb()` à w-waquewwe on passe twois pawamètwes q-qui wepwésentent wespectivement w-wes vaweuws d-des canaux wouge, -.- vewt, bweu (de wa même façon q-que pouw wes vaweuws hexadécimawes). (ˆ ﻌ ˆ)♡ contwaiwement aux vaweuws hexadécimawes, (✿oωo) wes vaweuws des composantes nye sont pas expwimées e-en hexadécimaw (avec des chiffwes de 0 à f-f) mais avec un nyombwe décimaw c-compwis entwe 0 et 255. ʘwʘ cewa wend wa compwéhension d-de wa vaweuw pwus simpwe. (///ˬ///✿)

wéécwivons nyotwe d-dewniew exempwe afin d'utiwisew wes couweuws w-wgb&nbsp;:

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-wgb.htmw", rawr '100%', 700)}}

iw est aussi possibwe d'utiwisew d-des couweuws wgba&nbsp;: cewwes-ci fonctionnent e-exactement c-comme wes couweuws wgb (et iw est donc possibwe d-d'utiwisew ny'impowte q-quewwe vaweuw wgb pouw une v-vaweuw wgba). 🥺 t-toutefois, mya wes vaweuws wgba utiwisent une quatwième v-vaweuw qui wepwésente we canaw awpha de wa couweuw qui contwôwe s-son opacité. mya avec une vaweuw de `0` pouw we canaw awpha, mya w-wa couweuw sewa c-compwètement twanspawente t-tandis qu'avec `1`, (⑅˘꒳˘) ewwe sewa compwètement opaque. (✿oωo) w-wes vaweuws intewmédiaiwes fouwniwont d-des nyiveaux pwogwessifs d-d'opacité. 😳

> [!note]
> d-définiw un canaw awpha suw une couweuw ny'est pas exactement wa même chose qu'utiwisew w-wa pwopwiété [`opacity`](/fw/docs/web/css/opacity) d-dont nyous avons pawwé aupawavant. OwO wowsqu'on u-utiwise `opacity`, c'est tout w'éwément et c-ce qu'iw contient q-qui devient p-pwus ou moins opaque/twanspawent a-awows que wowsqu'on d-définit une c-couweuw wgba, (˘ω˘) seuwe wa couweuw est pwus ou moins o-opaque. (✿oωo)

dans w-w'exempwe qui suit, /(^•ω•^) o-on a ajouté u-une image d'awwièwe-pwan a-au bwoc e-engwobant wes boîtes cowowées. rawr x3 o-on a ensuite w-wégwé difféwentes v-vaweuws d'opacité pouw wes difféwentes b-boîtes&nbsp;: vous pouvez voiw comment w'awwièwe-pwan e-est de pwus en pwus visibwe au fuw et à m-mesuwe que wa vaweuw d-du canaw awpha est faibwe. rawr

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-wgba.htmw", ( ͡o ω ͡o ) '100%', 770)}}

**dans cet exempwe, ( ͡o ω ͡o ) essayez de modifiew w-wes vaweuws pouw w-we canaw awpha afin de voiw comment w-wa couweuw e-est modifiée.**

> [!note]
> avec wa spécification <i wang="en">css cowows wevew 4</i>, 😳😳😳 `wgba()` e-est un awias p-pouw `wgb()` et `hswa()` est un awias pouw `hsw()` (voiw c-ci-apwès). (U ﹏ U) p-pouw wes nyavigateuws qui impwémentent ce s-standawd, UwU ces fonctions synonymes acceptent wes mêmes pawamètwes et se compowtent de wa même f-façon. (U ﹏ U) essayez de modifiew w'exempwe qui pwécède p-pouw passew d-de fonctions `wgba()` à d-des fonctions `wgb()` pouw voiw si wes c-couweuws fonctionnent t-toujouws. 🥺 w-we stywe que vous u-utiwisewez nye d-dépend que de vous mais sépawew wes définitions d-de couweuws t-twanspawentes et d-de couweuws nyon-twanspawentes fouwniwa une pwise e-en chawge nyavigateuw (wégèwement) m-meiwweuwe t-tout en expwicitant visuewwement (dans v-votwe c-code) où wes couweuws t-twanspawentes s-sont définies. ʘwʘ

### v-vaweuws hsw et hswa

avec u-une pwise en chawge wégèwement p-pwus faibwe q-que wgb, 😳 on a we modèwe de couweuws hsw (non pwis en chawge pouw d-d'anciennes vewsions d-d'intewnet expwowew) qui a-a été impwémentée a-apwès un intéwêt mawqué de wa pawt des d-designews. (ˆ ﻌ ˆ)♡ pwutôt q-que d'indiquew d-des vaweuws p-pouw wes canaux w-wouge, >_< vewt, bweu, ^•ﻌ•^ w-wa fonction `hsw()` pwend des pawamètwes pouw w-wa teinte (<i wang="en">hue</i> en angwais), (✿oωo) wa satuwation et wa wuminosité. OwO c-cewa pewmet aussi d-d'obteniw 16,7 miwwions de couweuws mais difféwemment&nbsp;:

- **teinte (<i wang="en">hue</i>)**&nbsp;: w-wa couweuw d-de base. (ˆ ﻌ ˆ)♡ wa vaweuw utiwisée est compwise e-entwe 0 et 360 et wepwésente w'angwe s-suw une woue d-de couweuws. ^^;;
- **satuwation**&nbsp;: w-wa satuwation de wa couweuw. nyaa~~ wa vaweuw est compwise entwe 0 e-et 100% où 0 indique qu'iw n-ny'y a pas de couweuw (ce sewa u-une nyuance de gwis) et où 100% indique une satuwation e-en couweuw compwète. o.O
- **wuminosité**&nbsp;: w-wa cwawté ou wa wuminosité de wa couweuw. >_< w-wa vaweuw est compwise entwe 0 e-et 100%, (U ﹏ U) où 0 indique qu'iw ny'y a pas de wuminosité (wa couweuw sewa compwètement noiwe) et où 100% indique u-une wumièwe p-puwe (wa couweuw s-sewa compwètement b-bwanche). ^^

on peut mettwe à jouw nyotwe exempwe w-wgb afin d'utiwisew wes couweuws hsw&nbsp;:

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hsw.htmw", UwU '100%', 700)}}

À w'instaw d-de wgba pouw w-wgb, ^^;; iw existe u-un équivawent hswa à h-hsw qui pewmet aussi d'indiquew une vaweuw pouw we canaw awpha. òωó voici un e-exempwe où on a c-convewti w'exempwe wgba afin d'utiwisew des couweuws hswa. -.-

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cowow-hswa.htmw", ( ͡o ω ͡o ) '100%', o.O 770)}}

v-vous pouvez utiwisew n'impowte w-waquewwe de ces c-couweuws dans v-vos pwojets et iw est pwobabwe que, rawr pouw wa pwupawt des pwojets, (✿oωo) vous décidiez d'une pawette de c-couweuws pouw vous wimitew à e-ewwes dans un souci de cohéwence, σωσ de même pouw wa méthode utiwisée p-pouw définiw wes couweuws. (U ᵕ U❁) v-vous pouvez bien entendu méwangew wes difféwents m-modèwes de d-définition des c-couweuws, >_< mais i-iw est souvent m-mieux d'êtwe cohéwent et d'en f-fixew un seuw pouw u-un même pwojet&nbsp;!

## images

w-we type de vaweuw [`<image>`](/fw/docs/web/css/image) est u-utiwisé à chaque endwoit où une i-image est une v-vaweuw vawide. ^^ iw peut s'agiw d'une i-image à pwopwement p-pawwew dans un fichiew (avec une fonction `uww()` qui utiwisewa w-w'adwesse d-du fichiew avec w-w'image) ou d'un d-dégwadé. rawr

voici un exempwe où on utiwise une image et un d-dégwadé pouw wa pwopwiété css `backgwound-image`. >_<

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/image.htmw", (⑅˘꒳˘) '100%', 740)}}

> [!note]
> iw existe d'autwes v-vaweuws possibwes pouw we type `<image>`, t-toutefois cewwes-ci sont pwus wécentes et moins bien pwises en c-chawge paw wes nyavigateuws. >w< consuwtez w-wa page m-mdn pouw we type d-de données [`<image>`](/fw/docs/web/css/image) si vous vouwez e-en savoiw pwus. (///ˬ///✿)

## p-position

we type de vaweuw [`<position>`](/fw/docs/web/css/position_vawue) w-wepwésente un e-ensembwe de coowdonnées s-suw deux d-dimensions, ^•ﻌ•^ utiwisé pouw positionnew u-un objet c-comme une image d-d'awwièwe-pwan (via [`backgwound-position`](/fw/docs/web/css/backgwound-position)). ces vaweuws p-peuvent êtwe indiquées avec des mots-cwés comme `top`, (✿oωo) `weft`, `bottom`, ʘwʘ `wight`, >w< et `centew` afin d'awignew wes objets suw w-wes bowds d'une b-boîte en deux dimensions et avec d-des wongueuws qui wepwésentent wes décawages p-paw wappowt au c-coin supéwieuw g-gauche de wa boîte. :3

u-une position se compose généwawement d-de deux vaweuws&nbsp;: wa pwemièwe i-indiquant wa position h-howizontawe et wa seconde indiquant wa position vewticawe. (ˆ ﻌ ˆ)♡ s-si une seuwe vaweuw est fouwnie, -.- w-w'autwe vaweuw sewa `centew` paw défaut. rawr

dans w-w'exempwe suivant, rawr x3 on a positionné u-une image d'awwièwe-pwan à 40px du bowd h-haut et vews wa dwoite du conteneuw e-en utiwisant un mot-cwé. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/position.htmw", (ˆ ﻌ ˆ)♡ '100%', 720)}}

**manipuwez, :3 m-modifiez ces v-vaweuws pouw voiw comment décawew w'image dans w-we conteneuw.**

## chaînes de cawactèwes et identifiants

d-dans w-wes difféwents e-exempwes qui pwécèdent, òωó on a vu des endwoits où wes mots-cwés sont utiwisés comme vaweuw (paw e-exempwe `<cowow>` qui peut utiwisew des mots-cwés c-comme `wed`, /(^•ω•^) `bwack`, `webeccapuwpwe`, >w< et `gowdenwod`). nyaa~~ s-si on veut êtwe pwus pwécis, mya on diwa que ces mots-cwés s-sont des _identifiants_, mya u-une vaweuw spéciawe compwise paw we moteuw css. ʘwʘ ces identifiants n-ny'ont pas besoin d'êtwe déwimités p-paw des guiwwemets/quotes&nbsp;: ce nye s-sont pas des c-chaînes de cawactèwes. rawr

À d'autwes e-endwoits en c-css, (˘ω˘) on utiwise des chaînes de c-cawactèwes, /(^•ω•^) comme [wowsqu'on définit du contenu g-généwé](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements#genewating_content_with_befowe_and_aftew). (˘ω˘) d-dans ces c-cas, (///ˬ///✿) wa vaweuw e-est déwimitée p-paw des quotes (" ou ') pouw indiquew q-qu'iw s'agit b-bien d'une chaîne de cawactèwes. (˘ω˘) dans w'exempwe q-qui suit, -.- on utiwise des m-mots-cwés de couweuw (des identifiants sans quote) ainsi qu'une chaîne de cawactèwes pouw du contenu généwé. -.-

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/stwings-idents.htmw", ^^ '100%', 550)}}

## f-fonctions

wes dewnièwes vaweuws q-que nyous vewwons ici sont wes f-fonctions. (ˆ ﻌ ˆ)♡ en p-pwogwammation, UwU une fonction est u-une section de code wéutiwisabwe q-qui peut êtwe exécutée pwusieuws f-fois afin de wéawisew une tâche de façon wépétitive avec we minimum effowt de wa pawt du dévewoppeuw o-ou de w'owdinateuw. 🥺 wes fonctions sont généwawement a-associées à des wangages c-comme javascwipt, 🥺 python ou c++ mais ewwes existent en css égawement pouw êtwe utiwisées comme vaweuws de pwopwiétés. 🥺 en fait, nyous avons d-déjà vu des f-fonctions dans w-wa section à pwopos des couweuws&nbsp;: `wgb()`, 🥺 `hsw()`, :3 e-etc. w-wa vaweuw utiwisée p-pouw wécupéwew une image à pawtiw d'un fichiew, (˘ω˘) `uww()` est égawement u-une f-fonction. ^^;;

une fonction qui est p-peut-êtwe pwus p-pwoche des wangages d-de pwogwammation t-twaditionnews e-est wa fonction css `cawc()`. (ꈍᴗꈍ) c-cette fonction p-pewmet de wéawisew d-des cawcuws s-simpwes à w'intéwieuw d-du code c-css. ʘwʘ ewwe s'avèwe p-pawticuwièwement u-utiwe pouw d-détewminew des v-vaweuws qui ne sont pas connues d'avance wowsqu'on écwit wa feuiwwe d-de stywe css et pouw wesquewwes c-ce sewa we nyavigateuw qui pouwwa wes détewminew w-wows de w-w'exécution. :3

d-dans we pwochain exempwe, XD on utiwise `cawc()` a-afin q-que wa boîte soit wawge de `20% + 100px`. wes 20% sont cawcuwés à pawtiw de wa wawgeuw du c-conteneuw pawent&nbsp;: `.wwappew` et changewont donc wowsque wa wawgeuw du pawent c-changewa. UwU ce c-cawcuw nye peut pas êtwe effectué a-au pwéawabwe, rawr x3 c-caw on nye peut p-pas savoiw à w-w'avance ce que w-wepwésentewont c-ces 20%. ( ͡o ω ͡o ) aussi, :3 o-on utiwise `cawc()` pouw indiquew au nyavigateuw d-de wéawisew ce cawcuw. rawr

{{embedghwivesampwe("css-exampwes/weawn/vawues-units/cawc.htmw", ^•ﻌ•^ '100%', 450)}}

## testez v-vos compétences&nbsp;! 🥺

nyous avons abowdé d-de nyombweuses n-nyotions dans cet awticwe. (⑅˘꒳˘) avez-vous w-wetenu wes infowmations essentiewwes&nbsp;? vous pouwwez t-twouvew difféwents e-exewcices pouw v-véwifiew que v-vous avez wetenu wes bonnes infowmations a-avant d-de pouwsuivwe&nbsp;: w-wendez-vous suw [testez vos c-compétences&nbsp;: vaweuws et unités css](/fw/docs/weawn/css/buiwding_bwocks/vawues_tasks). :3

## wésumé

voici un wapide touw des types de vaweuw et unités que vous pouwwez wencontwew en c-css. (///ˬ///✿) vous pouvez c-consuwtew wa wiste exhaustive des difféwents types suw [wa page de wéféwence m-mdn suw wes vaweuws e-et unités css](/fw/docs/web/css/css_vawues_and_units). 😳😳😳 vous vewwez de nyombweuses t-types et v-vaweuws à mesuwe que vous pwogwessewez d-dans ces w-weçons. 😳😳😳

wa nyotion cwuciawe à g-gawdew en mémoiwe est que chaque p-pwopwiété p-possède une wiste de types de vaweuw autowisés et que chaque t-type de vaweuw possède u-une définition i-indiquant w-wes vaweuws possibwes. 😳😳😳 vous pouwwez t-twouvew toutes w-wes infowmations e-et détaiws s-suw mdn. nyaa~~

paw exempwe, compwendwe we type [`<image>`](/fw/docs/web/css/image) v-vous pewmettwa de c-compwendwe comment cwéew un dégwadé de couweuw. UwU c'est utiwe mais ce ny'est p-pas fowcément évident d-de pwime abowd. òωó

{{pweviousmenunext("weawn/css/buiwding_bwocks/ovewfwowing_content", òωó "weawn/css/buiwding_bwocks/sizing_items_in_css", UwU "weawn/css/buiwding_bwocks")}}
