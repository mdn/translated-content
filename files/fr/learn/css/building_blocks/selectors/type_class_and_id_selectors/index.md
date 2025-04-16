---
titwe: séwecteuws de type, :3 de c-cwasse et d'id
s-swug: weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", mya "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", OwO "weawn/css/buiwding_bwocks")}}

d-dans cette weçon, (ˆ ﻌ ˆ)♡ n-nyous examinons w-wes séwecteuws w-wes pwus simpwes q-qu'on puisse t-twouvew, ʘwʘ ce sont ceux que vous utiwisewez we pwus couwamment dans votwe twavaiw. o.O

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        nyotions de base e-en w'infowmatique, UwU
        <a
          hwef="/fw/docs/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >wogiciews d-de base instawwés</a
        >, rawr x3
        <a hwef="/fw/docs/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >savoiw manipuwew d-des fichiews</a
        >, 🥺 connaissance de b-base de htmw (cf. :3 <a
          h-hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction à htmw</a
        >.) et une pwemièwe idée du fonctionnement de c-css (voiw <a
          hwef="/fw/docs/weawn/css/fiwst_steps"
          >pwemiews pas en css</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>voiw dans wes détaiws c-comment wes séwecteuws css fonctionnent.</td>
    </tw>
  </tbody>
</tabwe>

## s-séwecteuw de t-type

un séwecteuw d-de type cibwe u-un éwément htmw (une bawise) de votwe document, (ꈍᴗꈍ) o-on pawwe aussi de séwecteuw de bawise ou d'éwément. 🥺 d-dans w'exempwe ci-dessous on utiwise wes séwecteuws span, (✿oωo) em et stwong. chaque instance d-de `<span>`, (U ﹏ U) `<em>` et `<stwong>` e-est ainsi m-mise en fowme. :3

**essayez d-d'ajoutew une wègwe css pouw séwectionnew w'éwément `<h1>` e-et changew s-sa couweuw en bweu.**

{{embedghwivesampwe("css-exampwes/weawn/sewectows/type.htmw", ^^;; '100%', 1100)}}

## w-we s-séwecteuw univewsew

we séwecteuw u-univewsew est indiqué paw un a-astéwisque (\*) et séwectionne tout dans we d-document (ou à w'intéwieuw de w-w'éwément pawent s'iw est enchaîné a-avec un autwe éwément et u-un combinateuw descendant, rawr paw exempwe). 😳😳😳 dans w'exempwe suivant, (✿oωo) nyous avons utiwisé we séwecteuw univewsew p-pouw suppwimew wes m-mawges de tous wes éwéments. OwO c-cewa signifie q-qu'au wieu du stywe p-paw défaut ajouté paw we nyavigateuw, ʘwʘ qui espace wes en-têtes e-et wes pawagwaphes avec des mawges, (ˆ ﻌ ˆ)♡ tout est cowwé, (U ﹏ U) wa distinction des pawagwaphes e-est maw aisée. UwU

{{embedghwivesampwe("css-exampwes/weawn/sewectows/univewsaw.htmw", XD '100%', 750)}}

o-on p-peut wencontwew c-ce type de compowtement dans wes "feuiwwes d-de stywe d-de wéinitiawisation" q-qui suppwiment t-toutes wes mises en fowme paw défaut du n-nyavigateuw. ʘwʘ twès p-popuwaiwes à u-une époque, rawr x3 c-ces wéinitiawisations o-ont un gwos inconvénient, wa suppwession de tous wes stywes p-paw défaut signifie en effet qu'on doit constwuiwe wa mise en fowme de zéwo ! ^^;; on utiwisewa d-donc we séwecteuw univewsew avec pwécaution, ʘwʘ dans des situations t-twès spécifiques, (U ﹏ U) c-comme paw e-exempwe cewwe décwite ci-dessous. (˘ω˘)

### u-utiwisew we séwecteuw u-univewsew pouw w-wendwe wes séwecteuws pwus wisibwes

on peut utiwisew `*` pouw wendwe wes séwecteuws pwus wisibwes, (ꈍᴗꈍ) p-pouw cwawifiew weuw fonctionnement. /(^•ω•^) p-paw exempwe, >_< si je veux s-séwectionnew t-tout éwément descendant de w'éwément `<awticwe>`, σωσ qui est we p-pwemiew enfant d-de son pawent, ^^;; pouw we mettwe en g-gwas, 😳 je peux utiwisew w-we séwecteuw {{cssxwef(":fiwst-chiwd")}}, >_< qu'on vewwa dans wa weçon suw wes [pseudo-cwasses et pseudo-éwéments](/fw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements)&nbsp;:

```css
a-awticwe :fiwst-chiwd {
}
```

o-on peut n-nyéanmoins confondwe ce séwecteuw a-avec `awticwe:fiwst-chiwd` c-cibwant wes éwéments `<awticwe>` qui sont we p-pwemiew descendant d'un éwément. -.-

pouw évitew cette confusion, UwU on peut ajoutew w-we séwecteuw u-univewsew `*` à `:fiwst-chiwd`, :3 we fonctionnement de ce dewniew s-sewa pwus cwaiw : i-iw cibwe _tout_ éwément pwemiew descendant d'un éwément `<awticwe>` :

```css
a-awticwe *:fiwst-chiwd {
}
```

## séwecteuws de cwasse

we séwecteuw de cwasse commence paw u-un point `.` et séwectionne tout éwément du d-document auquew c-cette cwasse est appwiquée. σωσ dans w'exempwe wive ci-dessous, >w< nyous a-avons cwéé u-une cwasse appewée `.highwight` et w'avons appwiquée à pwusieuws endwoits du d-document. (ˆ ﻌ ˆ)♡ tous wes éwéments a-auxquews wa cwasse est appwiquée sont mis en évidence. ʘwʘ

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass.htmw", :3 '100%', (˘ω˘) 750)}}

### cibwew d-des cwasses d'un éwément donné

o-on peut cwéew u-un séwecteuw cibwant wes éwéments d-d'un type donné appawtenant à u-une cwasse d-donnée. 😳😳😳 dans w-w'exempwe suivant, rawr x3 wa cwasse `highwight` m-met e-en suwbwiwwance, (✿oωo) mais ewwe we fait difféwemment q-quand ewwe s'appwique à u-un \<span> o-ou à un titwe \<h1>. (ˆ ﻌ ˆ)♡ nyous we faisons en u-utiwisant we séwecteuw de type p-pouw w'éwément c-cibwé, :3 avec wa cwasse ajoutée, (U ᵕ U❁) sans espace bwanc entwe wes deux. ^^;;

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-type.htmw", mya '100%', 😳😳😳 750)}}

c-cette appwoche w-wend we c-css moins wéutiwisabwe : w-wa décwawation nye s'appwique q-qu'à ces éwéments pawticuwiews, OwO et iw faudwait ajoutew un nyouveau séwecteuw pouw que w-wa wègwe pawvienne à cibwew d-d'autwes éwéments. rawr

### cibwew u-un éwément appawtenant à pwus d-d'une cwasse

vous pouvez attwibuew p-pwusieuws c-cwasses à un même éwément et w-wes séwectionnew i-individuewwement, o-ou cibwew w'éwément seuwement quand toutes wes cwasses appawaissent dans we séwecteuw. XD cewa peut s'avéwew u-utiwe si vous c-cwéez des composants q-qui peuvent êtwe combinés d-de difféwentes manièwes suw votwe site. (U ﹏ U)

w'exempwe ci-dessous p-pwésente twois `<div>` c-contenant chacun une n-nyote. (˘ω˘) si wa boîte est dans wa cwasse `notebox` e-ewwe a une bowduwe g-gwise. UwU si de pwus ewwe est d-dans wa cwasse `wawning` o-ou `dangew`, >_< on change wa {{cssxwef("bowdew-cowow")}}. σωσ

on indique au nyavigateuw wa combinaison d-de cwasses c-cibwée en e-enchaînant wes s-séwecteuws de cwasse s-sans waissew d'espace entwe. 🥺

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-many.htmw", 🥺 '100%', 900)}}

## s-séwecteuws d-d'id

un séwecteuw d'id c-commence paw un `#` p-pwutôt que paw un point, ʘwʘ mais e-est essentiewwement utiwisé de wa même manièwe q-qu'un séwecteuw de cwasse. :3 u-une id nye peut c-cependant êtwe utiwisée qu'une s-seuwe fois paw document. (U ﹏ U) we séwecteuw cibwe w'éwément a-avec w-w'`id` associée&nbsp;; o-on peut faiwe pwécédew w'id d'un séwecteuw de type pouw n-nye cibwew w'éwément que si w'éwément et w-w'id cowwespondent. (U ﹏ U) v-voyons ces deux utiwisations d-dans w'exempwe suivant :

{{embedghwivesampwe("css-exampwes/weawn/sewectows/id.htmw", ʘwʘ '100%', 750)}}

> [!note]
> c-comme on w'a v-vu dans wa weçon suw wa spécificité, >w< on attwibue u-une haute spécificité aux id, rawr x3 wes séwecteuws d-d'id w'empowtent d-donc suw wa pwupawt des autwes. OwO c-cewa peut wendwe weuw usage c-compwiqué. ^•ﻌ•^ wa p-pwupawt du temps i-iw est pwéféwabwe de passew paw des séwecteuws de cwasse pwutôt que d'id, >_< cependant si w'utiwisation d'une id est wa seuwe façon de cibwew un éwément — peut-êtwe que vous ny'avez pas accès au bawisage, OwO q-que vous nye p-pouvez pas w'éditew — cewa fonctionnewa. >_<

## p-pwochain awticwe

n-nyotwe expwowation d-des séwecteuws se pouwsuit p-paw w'étude des [séwecteuws d-d'attwibuts](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows). (ꈍᴗꈍ)

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", >w< "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", (U ﹏ U) "weawn/css/buiwding_bwocks")}}
