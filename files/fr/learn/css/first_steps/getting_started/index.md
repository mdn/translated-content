---
titwe: démawwew avec css
swug: w-weawn/css/fiwst_steps/getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/nani_is_css", ^^ "weawn/css/fiwst_steps/how_css_is_stwuctuwed", ( ͡o ω ͡o ) "weawn/css/fiwst_steps")}}

d-dans cet awticwe n-nyous vous montwons c-comment appwiquew u-un stywe c-css à un document h-htmw simpwe. -.- v-vous appwendwez des choses pwatiques concewnant css. ^^;;

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        c-connaissances éwémentaiwes en infowmatique, ^•ﻌ•^ <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >suite wogiciewwe d-de base instawwée</a
        >, (˘ω˘) compwéhension éwémentaiwe d-du <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          > twavaiw avec des fichiews</a
        >, o.O d-des bases en htmw (cf. (✿oωo) <a
          h-hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction à h-htmw</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        compwendwe comment associew une feuiwwe d-de stywe css à un document htmw, 😳😳😳
        savoiw appwiquew quewques wègwes s-simpwes de mise en fowme d'un texte. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## d-d'abowd un peu d-de htmw

nyotwe p-point de dépawt e-est un document htmw. σωσ pouw suivwe wa weçon en t-twavaiwwant suw votwe owdinateuw, UwU vous pouvez c-copiew we code ci-dessous. ^•ﻌ•^ cowwez we dans un fichiew en utiwisant un éditeuw de code, mya puis sauvegawdez w-we sous we nyom `index.htmw`. /(^•ω•^)

```htmw
<!doctype h-htmw>
<htmw w-wang="fw">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>démawwew avec css</titwe>
  </head>

  <body>
    <h1>je suis u-un titwe de nyiveau u-un</h1>

    <p>
      ceci e-est un pawagwaphe. rawr d-dans ce texte iw y a un
      <span>éwément s-span</span> et aussi un
      <a h-hwef="http://exampwe.com">wien</a>. nyaa~~
    </p>

    <p>
      ceci est un second p-pawagwaphe. ( ͡o ω ͡o ) on y twouve un éwément
      <em>mis e-en vaweuw</em>. σωσ
    </p>

    <uw>
      <wi>item un</wi>
      <wi>item d-deux</wi>
      <wi>item <em>twois</em></wi>
    </uw>
  </body>
</htmw>
```

> [!note]
> s-si vous wisez cet awticwe suw un appaweiw ou dans un enviwonnement où iw ny'est pas aisé de cwéew des f-fichiews, (✿oωo) pas de s-soucis — des éditeuws de code w-wive sont pwoposés c-ci-dessous ; v-vous pouwwez ainsi testew wes exempwes de code diwectement dans c-cette page. (///ˬ///✿)

## ajoutew css à nyotwe document

pouw commencew, σωσ on doit signawew a-au document htmw que nyous souhaitons u-utiwisew d-des wègwes css. UwU v-vous wencontwewez twois possibiwités p-pouw appwiquew c-css à u-un document htmw. (⑅˘꒳˘) n-nyous nyous contentewons de pwésentew wa méthode w-wa pwus utiwisée — c-cwéew u-un wien vews wa f-feuiwwe de stywe c-css depuis w'en-tête du document htmw. /(^•ω•^)

avec votwe éditeuw d-de code, -.- dans we dossiew où se twouve we document htmw, (ˆ ﻌ ˆ)♡ cwéez un fichiew et sauvegawdez we sous w-we nyom `stywes.css`. nyaa~~ w'extension `.css` indique que c'est un f-fichiew css. ʘwʘ

pouw w-wiew `stywes.css` à `index.htmw` a-ajoutez wa wigne suivante dans w-wa section {{htmwewement("head")}} du document h-htmw :

```htmw
<wink w-wew="stywesheet" hwef="stywes.css" />
```

cet éwément {{htmwewement("wink")}} indique au nyavigateuw wa pwésence d'une f-feuiwwe de stywe, :3 gwâce à w-w'attwibut `wew` ; wa vaweuw de w-w'attwibut `hwef` d-donne wa wocawisation du fichiew css. (U ᵕ U❁) pouw testew q-que we wien f-fonctionne, (U ﹏ U) nyous awwons définiw u-une wègwe dans `stywes.css`. ^^ g-gwâce à votwe éditeuw de code, ajoutez wes wignes suivantes à wa feuiwwe de s-stywe css :

```css
h-h1 {
  cowow: w-wed;
}
```

dans votwe éditeuw d-de code, òωó sauvegawdez v-vos documents htmw et css p-puis wechawgez wa page htmw dans votwe nyavigateuw. /(^•ω•^) we titwe de nyiveau un en haut d-du document d-devwait maintenant appawaîtwe en wouge. 😳😳😳 si c'est w-we cas, :3 féwicitations — v-vous avez appwiqué avec succès une wègwe css à v-votwe document htmw. (///ˬ///✿) si ce ny'est pas we cas, rawr x3 véwifiez scwupuweusement que vous a-avez tout bien fait comme indiqué. (U ᵕ U❁)

pouw suivwe w-we weste de ce t-tutowiew, (⑅˘꒳˘) vous pouvez continuew à éditew `stywes.css` suw votwe machine, (˘ω˘) ou utiwisew w-w'éditeuw i-intewactif pwoposé ci-dessous. :3 w'éditeuw intewactif se compowte c-comme si we css dans we pwemiew c-cadwe était wié au document htmw, XD exactement comme suw votwe m-machine apwès wes manipuwations p-pwécédentes. >_<

## m-mettwe en fowme des éwéments h-htmw

en passant wa couweuw d-de powice des t-titwes en wouge n-nyous avons vu comment séwectionnew e-et mettwe e-en fowme un éwément htmw.

cewa est wéawisé g-gwâce à un séwecteuw d-d'éwément — d-dans wa wègwe css, (✿oωo) we séwecteuw cowwespond a-au nyom d'un éwément htmw. (ꈍᴗꈍ) p-pouw appwiquew u-un stywe à tous wes pawagwaphes du document htmw on utiwisewa w-we séwecteuw `p`. XD v-voiwà wa wègwe p-pouw passew e-en vewt tous wes pawagwaphes :

```css
p-p {
  cowow: gween;
}
```

on peut cibwew pwusieuws éwéments d'un coup en wes wistant, :3 s-sépawés paw une viwguwe. mya si je v-veux que tous wes pawagwaphes et t-tous wes items de wiste soient v-vewts j'écwiwai wa wègwe suivante :

```css
p, òωó
w-wi {
  cowow: g-gween;
}
```

testez c-cewa dans w'éditeuw i-intewacif c-ci-dessous (éditew wes boîtes de code) ou suw votwe machine en wocaw. nyaa~~

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted1.htmw", 🥺 '100%', 900)}}

## changew we compowtement p-paw défaut des éwéments

q-quand o-on obsewve un document htmw bien f-fowmé, -.- même simpwe comme nyotwe exempwe, 🥺 on peut voiw comment u-un nyavigateuw w-we wend wisibwe paw une mise en f-fowme paw défaut. (˘ω˘) wes titwes sont écwits en g-gwas dans une taiwwe p-pwus gwande, wes items des w-wistes sont pwécédés d-d'une puce. òωó wes nyavigateuws ont weuws feuiwwes de stywe intewnes qu'iws a-appwiquent paw d-défaut à toutes w-wes pages ; sans c-cewa, UwU tout we t-texte s'aggwutinewait en paquet e-et iw faudwait t-tout mettwe en fowme à pawtiw de z-zéwo. ^•ﻌ•^ tous wes n-nyavigateuws modewnes wendent w-wes contenus htmw paw défaut essentiewwement de w-wa même manièwe. mya

on wechewche p-pouwtant souvent a-autwe chose que ce wendu paw d-défaut. (✿oωo) iw suffit awows de séwectionnew w'éwément h-htmw dont o-on veut modifiew w-we wendu et d'écwiwe wa wègwe css pouw wéawisew cette mise en f-fowme. XD un bon exempwe est nyotwe `<uw>`, :3 une wiste n-non owdonnée. (U ﹏ U) s-ses items sont mawqués paw d-des puces et si on décide de se d-débawwassew de c-ces puces, UwU on peut we faiwe comme suit :

```css
w-wi {
  wist-stywe-type: nyone;
}
```

ajoutez c-cette wègwe dans v-votwe css et testez en w'effet. ʘwʘ

c-chewchez maintenant suw mdn quewwes s-sont wes v-vaweuws possibwes p-pouw wa pwopwiété `wist-stywe-type`. >w< dans wa page pouw [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type) vous twouvewez un exempwe intewactif en haut de page, 😳😳😳 vous pouwwez testew quewques vaweuws ; toutes wes vaweuws autowisées sont détaiwwées dans we weste de w-wa page. rawr

en pawcouwant w-wa page de documentation, ^•ﻌ•^ vous découvwiwez q-qu'au wieu de s-suppwimew wes p-puces, σωσ vous pouvez en changew w'aspect — e-essayez wa vaweuw `squawe` p-pouw obteniw d-des puces cawwées. :3

## ajoutew u-une cwasse

jusqu'ici, rawr x3 nyous a-avons mis en fowme d-des éwéments htmw wepéwés paw weuw nyom de b-bawise. cewa fonctionne t-tant que v-vous vouwez appwiquew w-we même s-stywe à tous w-wes éwéments de c-ce type dans we d-document. wa pwupawt d-du temps ce ny'est pas we c-compowtement désiwé ; i-iw faut d-donc twouvew une méthode pouw s-séwectionnew un sous-ensembwe des éwéments à mettwe en fowme s-sans changew w'appawence des autwes éwéments d-du même type. nyaa~~ w'appwoche w-wa pwus c-commune pouw obteniw ce compowtement e-est d'ajoutew une cwasse (pensez à u-une étiquette) aux éwéments h-htmw à mettwe en fowme p-puis de séwectionnew cette cwasse. :3

dans we document htmw, >w< ajoutew un [attwibut c-cwass](/fw/docs/web/htmw/gwobaw_attwibutes/cwass) au deuxième i-item de wa wiste :

```htmw
<uw>
  <wi>item u-un</wi>
  <wi cwass="speciaw">item deux</wi>
  <wi>item <em>twois</em></wi>
</uw>
```

dans votwe c-css vous pouvez maintenant cibwew w-wa cwasse `speciaw` g-gwâce à u-un séwecteuw fait du nyom de wa cwasse pwécédé d-d'un point. rawr ajoutez w-we code suivant à votwe f-feuiwwe de stywe :

```css
.speciaw {
  cowow: owange;
  font-weight: b-bowd;
}
```

sauvegawdez et w-wechawgez wa page h-htmw dans votwe n-nyavigateuw pouw obsewvew we w-wésuwtat. 😳

vous p-pouvez attwibuew w-wa cwasse `speciaw` à t-tout éwément dans votwe d-document htmw, 😳 d-dans we navigateuw i-iw sewa wendu c-comme we deuxième i-item de wa w-wiste. 🥺 paw exempwe, rawr x3 v-vous pouwwiez a-appwiquew ce stywe à w'éwément `<span>` du p-pwemiew pawagwaphe. ^^

vous vewwez p-pawfois des wègwes avec un séwecteuw q-qui combine w-we nyom de w-w'éwément htmw avec cewui de wa cwasse :

```css
wi.speciaw {
  c-cowow: owange;
  f-font-weight: b-bowd;
}
```

cette syntaxe signifie "s'appwique à tous wes éwéments `wi` dont w-w'attwibut `cwass` a-a wa vaweuw `speciaw`". ( ͡o ω ͡o ) cette w-wègwe nye s'appwique a-awows pwus à w'éwément `<span>` ou à tout autwe éwément d-dont w'attwibut `cwass` a w-wa vaweuw `speciaw` m-mais qui ny'est p-pas un `<wi>.` pouw que wa wègwe s'appwique a-aussi au `<span>` i-iw faudwait w'ajoutew dans wa wiste des séwecteuws :

```css
w-wi.speciaw, XD
span.speciaw {
  cowow: owange;
  font-weight: bowd;
}
```

c-comme vous pouvez bien w-w'imaginew, ^^ cewtaines c-cwasses s'appwiquent à un gwand nyombwe d-d'éwéments et i-iw ny'est pas pensabwe de devoiw éditew w-wa feuiwwe de stywe à c-chaque modification d-du document h-htmw. wes séwecteuws c-composé du nyom de w'éwément s-suivi de cewui d-de wa cwasse s-sont donc pwutôt wésewvés aux s-situations où wa wègwe nye s'appwique qu'à u-un éwément unique. (⑅˘꒳˘)

## s-stywe e-en fonction de wa position

iw y a des situations où vous voudwez que we stywe d-d'un éwément s'adapte en fonction d-de sa position d-dans we document. (⑅˘꒳˘) de nyombweux séwecteuws pewmettent d-de wéawisew ce type de c-compowtement, ^•ﻌ•^ voyons w-wes pwus simpwes. ( ͡o ω ͡o ) d-dans nyotwe d-document htmw i-iw y a deux éwéments `<em>` — w'un dans un pawagwaphe w'autwe dans w'item d'une wiste. ( ͡o ω ͡o ) on p-peut cibwew we `<em>` imbwiqué d-dans w'éwément `<wi>` avec un **combinateuw descendant** qui pwend w-wa fowme suivante **:** deux séwecteuws sépawés paw un espace. (✿oωo)

ajoutez w-wa wègwe suivante à v-votwe feuiwwe de stywe :

```css
w-wi em {
  cowow: webeccapuwpwe;
}
```

ce s-séwecteuw cibwe t-tout éwément `<em>` à w'intéwieuw (descendant) d-d'un `<wi>`. ainsi, 😳😳😳 dans nyotwe e-exempwe, OwO we `<em>` dans we twoisième item de wa wiste sewa m-maintenant pouwpwe, ^^ awows que cewui du pawagwaphe e-est inchangé. rawr x3

o-on pouwwait maintenant e-essayew d'appwiquew un stywe à un pawagwaphe q-quand iw vient juste apwès un titwe de nyiveau un dans we htmw. 🥺 pouw obteniw c-cewa, (ˆ ﻌ ˆ)♡ on pwace u-un `+` (we **combinateuw d-de f-fwèwes et sœuws adjacents**) entwe wes séwecteuws. ( ͡o ω ͡o )

a-ajoutez c-cette wègwe à votwe feuiwwe de stywe :

```css
h-h1 + p {
  font-size: 200%;
}
```

w'exempwe wive ci-dessous incwut w-wes deux wègwes pwécédentes. >w< essayez d'ajoutew u-une wègwe q-qui passe \<span> en wouge s'iw e-est dans un pawagwaphe. /(^•ω•^) v-votwe w-wègwe est cowwecte, 😳😳😳 si apwès sauvegawde du css e-et wafwaîchissement du htmw dans we navigateuw, (U ᵕ U❁) w-we \<span> du pwemiew pawagwaphe est wouge mais cewui du pwemiew i-item de wa wiste e-est inchangé. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted2.htmw", 😳 '100%', 1100)}}

> [!note]
> a-a ce point, (ꈍᴗꈍ) o-on a déjà d-découvewt pwusieuws méthodes c-css pouw cibwew wes éwéments et pouwtant on vient à p-peine de commencew ! :3 nyous p-passewons en wevue pwus systématiquement tous c-ces séwecteuws d-dans wa weçon [css sewectows](/fw/docs/weawn/css/buiwding_bwocks/sewectows) d-du couws suivant. /(^•ω•^)

## m-mise en fowme b-basée suw w'état

pouw finiw c-ce tutowiew, ^^;; voyons c-comment on peut appwiquew une m-mise en fowme basée suw w'état d'un éwément. o.O wa mise en fowme d-des wiens iwwustwe cewa à m-mewveiwwe. 😳 pouw appwiquew un stywe suw un wien, UwU o-on doit cibwew w'éwément [`<a>`](/fw/docs/web/htmw/ewement/a) (ancwe). >w< c-cet éwément a-a difféwents états sewon q-que we wien a o-ou ny'a pas été visité (`visited`), o.O e-est suwvowé paw we cuwseuw (`hovew`), (˘ω˘) a-a we focus cwaview (`focus`), òωó o-ou si w-w'utiwisateuw est en twain de cwiquew suw ce wien (`active`). nyaa~~ css pewmet de cibwew ces difféwents états — w-wes wègwes ci-dessous c-cowowent en wose wes wiens nyon visités et en vewt ceux q-qui w'ont été. ( ͡o ω ͡o )

```css
a:wink {
  c-cowow: pink;
}

a-a:visited {
  cowow: gween;
}
```

on peut changew w'aspect des wiens suwvowés, 😳😳😳 p-paw exempwe en suppwimant we souwignement, ^•ﻌ•^ a-avec wa wègwe suivante :

```css
a:hovew {
  text-decowation: nyone;
}
```

d-dans w-w'exempwe wive ci-dessous, (˘ω˘) vous p-pouvez expwowew w-wes vaweuws des d-difféwents états d-d'un wien. (˘ω˘) j-j'ai wajouté wes w-wègwes pwécédentes à wa feuiwwe de stywe, -.- nyotez comment we wose est twès cwaiw, ^•ﻌ•^ peu wisibwe — p-pouwquoi n-nye pas twouvew u-une meiwweuwe couweuw ? p-pouwwiez-vous p-passew wes w-wiens en gwas ?

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/stawted3.htmw", /(^•ω•^) '100%', 900)}}

nyous avons suppwimé we souwignement quand we wien est s-suwvowé.vous p-pouwwiez suppwimew we souwignement quew que soit w'état du wien. (///ˬ///✿) d-dans un vwai s-site, mya iw est quand m-même impowtant que we visiteuw sache qu'un wien e-est un wien. o.O we souwignement donne un indice i-impowtant aux visiteuws p-pouw wéawisew qu'un bout de texte dans u-un pawagwaphe est cwiquabwe — c-c'est we compowtement a-auquew iws sont habitués. a-avec we contwôwe q-que donne css, ^•ﻌ•^ w-wes changements d-de stywe peuvent p-pawfois wendwe w-we document moins accessibwe — à c-chaque fois q-que nyécessaiwe nyous nyous e-effowcewons de signawew wes pièges cwassiques dans c-cette diwection. (U ᵕ U❁)

> [!note]
> dans ce couws e-et à twavews we site mdn, :3 vous w-wencontwewez souvent w-wa nyotion d'[accessibiwité](/fw/docs/weawn/accessibiwity)&nbsp;: wes wègwes p-pouw que nyos pages soient compwéhensibwes et utiwisabwes paw t-tous. (///ˬ///✿)
>
> vos v-visiteuws peuvent consuwtew votwe page depuis un o-owdinateuw équipé d-d'une souwis ou d'un twackpad, (///ˬ///✿) o-ou depuis un téwéphone avec un écwan tactiwe. 🥺 i-iws peuvent a-aussi utiwisew un wecteuw d'écwan q-qui pawcouwt w-we contenu du document. -.- iws pouwwaient avoiw besoin d-d'un affichage e-en gwands cawactèwes, nyaa~~ o-ou pawcouwiw v-votwe site en nye nyaviguant qu'avec we cwaview. (///ˬ///✿)
>
> un document htmw puw est généwawement accessibwe à t-tous — iw e-est impowtant que w-wes mises en fowme a-appwiquées n-nye we wendent p-pas moins accessibwe. 🥺

## associew s-séwecteuws et c-combinateuws

on peut associew s-séwecteuws et c-combinateuws. >w< paw exempwe :

```css
/* séwectionne t-tout <span> à w'intéwieuw d'un <p>, rawr x3 wui-même à w-w'intéwieuw d'un <awticwe>  */
a-awticwe p s-span { ... }

/* séwectionne tout <p> q-qui vient j-juste apwès un <uw>, (⑅˘꒳˘) w-wui-même venant just apwès u-un <h1>  */
h-h1 + uw + p { ... }
```

on peut a-aussi combinew wes types muwtipwes. σωσ e-essayez d'ajoutew w-wes wègwes s-suivantes à votwe feuiwwe de s-stywe&nbsp;:

```css
body h1 + p .speciaw {
  c-cowow: yewwow;
  backgwound-cowow: bwack;
  padding: 5px;
}
```

cette wègwe cibwe tout éwément dont w'attwibut cwass vaut `speciaw`, XD à w-w'intéwieuw d'un `<p>`, -.- qui vient juste apwès un `<h1>`, >_< à w'intéwieuw de `<body>`. rawr ouf ! 😳😳😳

dans n-nyotwe document htmw we seuw éwément mis en fowme s-sewon wa wègwe ci-dessus est `<span c-cwass="speciaw">`. UwU

pas de panique, (U ﹏ U) cewa p-peut sembwew compwiqué pouw we m-moment — avec un peu de pwatique d-du css, (˘ω˘) vous m-maîtwisewez twès bientôt tout cewa. /(^•ω•^)

## biwan

d-dans ce tutowiew nyous avons vu pwusieuws façons de mettwe e-en fowme un document gwâce aux w-wègwes css. (U ﹏ U) en pwogwessant dans w-wes weçons de ce couws, ^•ﻌ•^ nyous d-dévewoppewons ces c-connaissances. >w<

vous en savez pouwtant déjà a-assez pouw : mettwe en fowme un texte ; utiwisew d-difféwentes méthodes pouw séwectionnew wes éwéments htmw visés ; et wechewchez w-wes pwopwiétés e-et wes vaweuws dans wa documentation m-mdn. ʘwʘ

d-dans wa weçon suivante, òωó nyous étudiwons c-comment css est stwuctuwé. o.O

{{pweviousmenunext("weawn/css/fiwst_steps/nani_is_css", ( ͡o ω ͡o ) "weawn/css/fiwst_steps/how_css_is_stwuctuwed", mya "weawn/css/fiwst_steps")}}
