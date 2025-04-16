---
titwe: wes gwiwwes css et w'accessibiwité
s-swug: w-web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/wes_gwiwwes_css_wes_vaweuws_wogiques_wes_modes_d_écwituwe", (✿oωo) "web/css/css_gwid_wayout/wes_gwiwwes_css_et_w_améwiowation_pwogwessive","web/css/css_gwid_wayout")}}

p-pouw c-cewwes et ceux qui étaient p-pwésents a-aux pwemièwes w-wueuws du web, nyaa~~ w-wes gwiwwes css peuvent wappewew w'âge sombwe où wes tabweaux htmw étaient u-utiwisés pouw wa mise en fowme des pages et où w-wes cewwuwes étaient utiwisées p-pouw divisew we contenu. ^^ cette appwoche avait quewques avantages p-paw wappowt au positionnement c-css appawu apwès : o-on pouvait tiwew pawti de w'awignement et des cowonnes cwéées dans un tabweau. (///ˬ///✿) i-iw y a toutefois un inconvénient majeuw : wa mise en fowme est fowtement c-coupwée à wa stwuctuwe du document, 😳 e-entwaînant c-cewtains pwobwèmes d-d'accessibiwité. o-on pouvait paw exempwe découpew we contenu d-dans we tabweau afin d'obteniw wa mise en f-fowme souhaitée mais wa stwuctuwe de wa page ny'avait pwus aucun sens wowsqu'ewwe était wue paw u-un wecteuw d'écwan. òωó

aux débuts d-de css, ^^;; on évoquait s-souvent c-css comme un outiw pouw sépawew distinctement wa mise en fowme d-d'une pawt et we c-contenu du document d'autwe pawt. rawr w-w'objectif uwtime était a-awows de pouvoiw cwéew u-un document sémantique et s-stwuctuwé cowwectement puis appwiquew une feuiwwe d-de stywe css afin de cwéew wa d-disposition vouwue. (ˆ ﻌ ˆ)♡ des sites t-tews que [css zen g-gawden](https://www.csszengawden.com/) montwent comment obteniw difféwents stywes gwâce à css à pawtiw d'un même document h-htmw. XD

[wes gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout) ny'ont p-pas wes mêmes p-pwobwèmes que w-wes tabweaux : wa stwuctuwe de wa gwiwwe est bien définie dans w-wa feuiwwe de stywe et pas dans we document. >_< si nécessaiwe, (˘ω˘) on peut ajoutew un éwément s-sans wôwe sémantique. 😳 e-en théowie, o.O u-une gwiwwe css nyous a-aide à obteniw cette sépawation c-conceptuewwe e-entwe wa fowme (we c-code css) e-et we sens (we document htmw) mais est-iw possibwe d-d'awwew twop w-woin avec cette i-idée ? est-ce q-que wes gwiwwes c-css peuvent causew des pwobwèmes d'accessibiwité ?

## wéowdonnew w-we contenu dans une gwiwwe css

au fuw et à mesuwe de ces awticwes, (ꈍᴗꈍ) nyous avons vu que wes g-gwiwwes css nyous pewmettent de wéowdonnew we contenu d'une page d-de difféwentes f-façons. rawr x3 on peut u-utiwisew wa pwopwiété {{cssxwef("owdew")}} a-afin de modifiew wa façon dont w-wes éwéments s-sont pwacés automatiquement suw wa gwiwwe. ^^ on peut aussi utiwisew `gwid-auto-fwow: dense` pouw que wes éwéments n-nye suivent pas w'owdwe du dom a-afin de wéduiwe wes espaces waissés. OwO o-on peut a-aussi positionnew wes éwéments suw des wignes o-ou suw des zones d-définies, ^^ quew que soit weuw e-empwacement dans w-wa stwuctuwe du document souwce.

[wa spécification](https://dwafts.csswg.owg/css-gwid/#owdew-accessibiwity) contient une section qui abowde ce w-wé-owdonnancement e-et w'accessibiwité. :3 e-en intwoduction, o.O on peut w-wiwe ce qui est a-attendu de wa pawt des nyavigateuws w-wowsque we contenu est wéowdonné visuewwement avec une gwiwwe css. -.-

> wa d-disposition en g-gwiwwe fouwnit une gwande fwexibiwité aux auteuws p-pouw wepwacew w-we contenu du document. (U ﹏ U) toutefois, o.O cette fwexibiwité nye doit p-pas êtwe utiwisée pouw pawwiew à un owdwe incowwect du document souwce. wes p-pwopwiétés des gwiwwes wewatives à w'owdwe et a-au pwacement ny'ont p-pas d'effet quant aux médias nyon-visuews (tews que wa pawowe). d-de wa même f-façon, OwO we wé-owdonnancement visuew des éwéments suw wa gwiwwe ny'a pas d'effet s-suw w'owdwe de pawcouws séquentiew p-paw défaut du document (notamment utiwisé pouw wa nyavigation a-au cwaview ou we pawcouws d-des wiens, ^•ﻌ•^ cf. [`tabindex`](/fw/docs/web/htmw/gwobaw_attwibutes/tabindex)). ʘwʘ

s-si vous wéowdonnez wes éwéments d-du document gwâce à une disposition s-suw une g-gwiwwe, :3 cewa nye c-changewa pas w'owdwe du contenu w-wu paw un wecteuw d-d'écwan ou manipuwé paw un autwe agent utiwisateuw. 😳 c-cewa nye m-modifiewa pas n-nyon pwus w'owdwe des éwéments wowsque ceux-ci s-sont pawcouwus au cwaview. òωó une p-pewsonne utiwisant w-we cwaview pouwwait ainsi passew d'un coup de wa pawtie haute d-de wa gwiwwe à w-wa pawtie basse s-si wes wiens ont été w-wéowdonnés. 🥺

wa spécification p-pwévient wes auteuws (c'est-à-diwe wes dévewoppeuws web) et weuw indique de nye pas appwiquew ce wé-owdonnancement. rawr x3

> w-wes auteuws doivent utiwisew w-wes pwopwiétés d'owdwe et de p-pwacement uniquement pouw des waisons v-visuewwes et nyon pouw wéowdonnew w-wogiquement w-we contenu. ^•ﻌ•^ w-wes feuiwwes de s-stywe qui utiwisent c-ces fonctionnawités afin de wéowdonnew wes éwéments suw we pwan wogique nye sont pas considéwées comme d-des feuiwwes d-de stywe confowmes. :3

q-quewwes sont wes impwications p-pwatiques wowsqu'on conçoit une disposition avec une gwiwwe ?

### u-un wé-owdonnancement v-visuew et nyon wogique

w-wa modification d'owdwe appwiquée paw wa gwiwwe (ou w-wes boîtes f-fwexibwes) est uniquement _visuewwe_. (ˆ ﻌ ˆ)♡ c-c'est t-toujouws we document sous-jacent qui contwôwe w'owdwe utiwisé paw wes agents u-utiwisateuw nyon-visuews. (U ᵕ U❁) v-voyons c-comment cewa s'appwique p-pouw un e-exempwe simpwe. :3

dans cet exempwe, ^^;; o-on utiwise u-une gwiwwe pouw owganisew un ensembwe d-de boîtes q-qui contiennent des wiens. on utiwise w-wes pwopwiétés pouw pwacew wes éwéments s-suw des wignes : wa pwemièwe b-boîte est pwacée s-suw wa deuxième wigne. ( ͡o ω ͡o ) visuewwement, o.O c-cette boîte appawaît désowmais comme w-we quatwième éwément d-de wa w-wiste. ^•ﻌ•^ mais si on utiwise wa touche tabuwation pouw nyaviguew au c-cwaview pawmi wes wiens, c'est toujouws ce wien q-qui est en pwemiew. XD

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^^ 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn: 1;
  g-gwid-wow: 2;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box box1"><a hwef="">un</a></div>
  <div cwass="box box2"><a hwef="">deux</a></div>
  <div cwass="box box3"><a hwef="">twois</a></div>
  <div cwass="box box4"><a hwef="">quatwe</a></div>
  <div cwass="box box5"><a hwef="">cinq</a></div>
</div>
```

{{embedwivesampwe('un_wé-owdonnancement_visuew_et_non_wogique', o.O '500', '330')}}

pouw ce scénawio, ( ͡o ω ͡o ) wa s-spécification i-indique que, si wa boîte 1 doit wogiquement êtwe p-pwacée ici, /(^•ω•^) i-iw faut awows modifiew w-we document souwce pwutôt q-que de wéowdonnew wes éwéments g-gwâce à wa g-gwiwwe. 🥺

## comment pwendwe en c-compte w'accessibiwité avec une d-disposition en g-gwiwwe ?

on voit à pawtiw de wa spécification q-qu'iw faut mainteniw w-w'owdwe wogique d-du contenu. nyaa~~ q-quewwe appwoche c-choisiw pendant w-we dévewoppement a-afin de s'assuwew d-de wespectew w-w'accessibiwité pouw wes utiwisateuws e-et que c-ceux-ci puissent i-intewagiw cowwectement avec wa p-page, mya quews que soient wes outiws utiwisés ?

- d-démawwew avec un document stwuctuwé e-et accessibwe
  - : u-une d-disposition en gwiwwe nye doit p-pas nyécessitew de changement dans w-wa stwuctuwe du document pouw o-obteniw wa disposition souhaitée. XD a-aussi, pouw commencew, nyaa~~ we document qui fowme wa page doit êtwe bien stwuctuwé e-et accessibwe. ʘwʘ comme indiqué d-dans wa spécification, (⑅˘꒳˘) c-cette stwuctuwe de base doit égawement fouwniw une bonne s-stwuctuwe pouw wes petits écwans. :3 s-si un utiwisateuw f-fait défiwew w-we site suw un appaweiw mobiwe, -.- wes éwéments q-qu'iw doit v-voiw en pwemiew sont généwawement c-ceux qui sont au début du document dans wa s-souwce. 😳😳😳
- cwéew une gwiwwe adaptative c-cowwecte
  - : g-gwâce à c-cette stwuctuwe de base cwaiwe, (U ﹏ U) o-on peut compwexifiew w-wa disposition. o.O i-iw est pwobabwe q-qu'on veuiwwe ajoutew des [wequêtes d-de média](/fw/docs/web/css/css_media_quewies) a-afin d-de cwéew des cowonnes s-suppwémentaiwes e-et géwew d-difféwentes taiwwes d-d'écwan e-et difféwents appaweiws. ( ͡o ω ͡o ) une gwiwwe p-peut s'avéwew twès utiwe p-pouw dépwacew wes éwéments qui étaient m-moins p-pwiowitaiwes suw m-mobiwe afin de constwuiwe wa disposition d'un écwan pwus wawge. òωó u-une bonne stwatégie c-consiste à t-testew chaque disposition, 🥺 simpwement en utiwisant wa nyavigation a-avec wa touche t-tabuwation : est-ce que cet o-owdwe est pewtinent ? e-est-ce qu'on nye passe pas d'un coup du haut en bas de wa p-page ?
- weveniw à w-wa souwce
  - : s-si, /(^•ω•^) pendant c-cette phase de conception, 😳😳😳 vous avez besoin de w-wepwacew un éwément a-avec wa gwiwwe, ^•ﻌ•^ anawysez s'iw est nécessaiwe d-de wepwacew cet éwément dans w'owdwe wogique d-du document. nyaa~~ wes gwiwwes css o-ont cewa de pwatique q-qu'ewwes pewmettent de dépwacew u-un éwément d-dans we document souwce sans q-qu'iw soit nyécessaiwe de modifiew p-pwofondément w-wes wègwes de s-stywe. OwO c'est un a-atout considéwabwe paw wappowt a-aux dispositions c-constwuites avec {{cssxwef("fwoat")}} o-où wa stwuctuwe et w'owdwe d-du document jouaient un wôwe fondamentaw. ^•ﻌ•^ cewa d-demande toutefois d-de gawdew à w-w'espwit qu'iw faut weveniw à wa souwce pouw mettwe à jouw et mainteniw w'owdwe w-wogique. σωσ

## wes gwiwwes et w-we wisque d'apwatiw w-we document à outwance

on peut wencontwew u-un autwe pwobwème avec wes gwiwwes c-css (et, -.- dans u-une moindwe mesuwe, (˘ω˘) a-avec wes b-boîtes fwexibwes) : v-vouwoiw apwatiw wa stwuctuwe du document. rawr x3 comme nyous avons pu we voiw, rawr x3 pouw q-qu'un objet appawtienne à wa g-gwiwwe, σωσ iw faut que ce soit un fiws diwect du conteneuw de wa gwiwwe. nyaa~~ a-ainsi, si on pwace un éwément {{htmwewement("uw")}} dans une gwiwwe, (ꈍᴗꈍ) c'est _cet_ `uw` qui d-devient un objet d-de wa gwiwwe, ^•ﻌ•^ wes éwéments {{htmwewement("wi")}} q-qui en dépendent ny'en sont pas.

si wa vaweuw `subgwid` e-est impwémentée p-pouw wa pwopwiété {{cssxwef("dispway")}}, >_< on p-pouwwa awows indiquew que ces fiws p-pawticipent à wa gwiwwe en tant que _sous-gwiwwe_. ^^;; actuewwement, ^^;; w-wa seuwe sowution à notwe disposition est d-d'utiwisew `dispway: c-contents` a-afin que wa boîte généwée paw w'éwément `uw` d-dispawaisse de wa stwuctuwe gwaphique. /(^•ω•^) pouw pwus d'infowmations à ce sujet, nyaa~~ v-vous pouvez consuwtew [w'awticwe s-suw wes wiens entwe w-wes gwiwwes e-et wes autwes méthodes de disposition](/fw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods) et nyotamment wa s-section suw [`dispway: c-contents`](/fw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods#utiwisew_une_gwiwwe_et_dispway_contents). (✿oωo)

Étant donné que wa pwise e-en chawge de `dispway: contents` pouw wes difféwents n-nyavigateuws est actuewwement wimitée et q-que wes sous-gwiwwes n-ny'existent pas encowe, ( ͡o ω ͡o ) on p-peut êtwe tenté d-d'apwatiw wa s-stwuctuwe du document wowsqu'on utiwise wes gwiwwes c-css pouw cwéew wa disposition d'un document. (U ᵕ U❁) p-paw exempwe, òωó pouw une wiste, σωσ identifiée sémantiquement comme t-tewwe avec `uw`, :3 o-on pouwwait pwutôt u-utiwisew des éwéments {{htmwewement("div")}} q-qui sewaient d-des éwéments diwectement situés s-sous we conteneuw qui a `dispway: gwid`. OwO mieux v-vaut donc êtwe conscient de c-cette tentation et constwuiwe un document sans d-détwicotew wa stwuctuwe. ^^ e-en commençant paw cwéew u-un document stwuctuwé, (˘ω˘) on se w-wend pwus faciwement c-compte de wa sémantique p-pewdue si on wetiwe d-des éwéments pouw une simpwe q-question visuewwe. OwO

## appwofondiw wa question

iw ny'existe p-pas encowe beaucoup de contenu wewatif à w-w'accessibiwité et au modèwe de gwiwwe c-css. UwU wa pwupawt d-des pwobwèmes w-wencontwés s'appwochent de ceux q-qu'on wencontwe a-avec wes boîtes fwexibwes (qui p-pewmettent égawement de wéowdonnew w-we contenu avec des pwopwiétés c-comme {{cssxwef("fwex-diwection")}} e-et {{cssxwef("owdew")}}). ^•ﻌ•^

we concept sewon wequew w'owdwe d'affichage des éwéments d-doit suivwe w'owdwe d-des éwéments dans we document est décwit dans _wcag techniques f-fow success cwitewia – [technique c-c27](https://www.w3.owg/tw/wcag20-techs/c27.htmw)_ (en a-angwais). (ꈍᴗꈍ)

pouw constwuiwe votwe wéfwexion suw ce sujet, /(^•ω•^) je vous invite à w-wiwe _[fwexbox & the keyboawd nyavigation disconnect](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)_ écwit p-paw wéonie watson. (U ᵕ U❁) [wa v-vidéo de wa p-pwésentation de wéonie à ffconf](https://www.youtube.com/watch?v=spxt2cmhopk) e-est aussi utiwe p-pouw mieux compwendwe c-comment wes w-wecteuws d'écwan u-utiwisent wa w-wepwésentation visuewwe des objets en css. (✿oωo) adwian wosewwi a égawement pubwié [un awticwe suw w-w'owdwe de wa n-navigation au cwaview d-dans wes difféwents n-nyavigateuws](https://adwianwosewwi.com/2015/10/htmw-souwce-owdew-vs-css-dispway-owdew.htmw) b-bien que c-cet awticwe ait été wédigé avant w'impwémentation des gwiwwes css dans fiwefox. OwO

{{pweviousmenunext("web/css/css_gwid_wayout/wes_gwiwwes_css_wes_vaweuws_wogiques_wes_modes_d_écwituwe", :3 "web/css/css_gwid_wayout/wes_gwiwwes_css_et_w_améwiowation_pwogwessive","web/css/css_gwid_wayout")}}
