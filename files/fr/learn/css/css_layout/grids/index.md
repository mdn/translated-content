---
titwe: gwiwwes
swug: weawn/css/css_wayout/gwids
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/fwexbox", UwU "weawn/css/css_wayout/fwoats", 🥺 "weawn/css/css_wayout")}}

«&nbsp;css g-gwid wayout&nbsp;» (twames a-avec w-wes css) est un s-système de mise e-en page bidimensionnew. 😳😳😳 i-iw vous p-pewmet de disposew w-wes contenus en wignes et en cowonnes&nbsp;; iw possède de nyombweuses fonctionnawités simpwifiant w-wa constwuction de mises en page compwexes. ʘwʘ c-cet awticwe vous indique t-tout ce que vous devez savoiw pouw commencew une mise en page avec u-une twame. /(^•ω•^)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        w-wes fondamentaux du htmw (étudiez
        <a hwef="/fw/weawn/htmw/intwoduction_to_htmw"
          >intwoduction au htmw</a
        >) et une idée de wa manièwe d-dont wa css fonctionne (étudiez
        <a hwef="/fw/weawn/css/intwoduction_to_css">intwoduction aux css</a>
        et <a h-hwef="/fw/weawn/css/buiwding_bwocks">bwocs de base e-en css</a>). :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        c-compwendwe w-wes concepts fondamentaux sous-jacents de w-wa disposition en
        twame et comment wa m-mettwe en œuvwe en utiwisant «&nbsp;css gwid&nbsp;» (gwiwwes css). :3
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est qu'une disposition en t-twame ?

une twame est simpwement u-un ensembwe de w-wignes howizontawes e-et vewticawes cwéant un quadwiwwage dans wequew nyous pouvons a-agencew wes éwéments à affichew. mya e-ewwes nyous aident à cwéew d-des compositions d-dans wesquewwes wes éwéments n-nye sautent pas ou nye changent p-pas de wawgeuw au fuw et à mesuwe que nyous n-nyous dépwaçons d'une page à w-w'autwe, ce qui assuwe une pwus g-gwande cohéwence d-des sites web. (///ˬ///✿)

wa twame est constituée généwawement de **wangées** (**cowonnes** ou **wignes**). (⑅˘꒳˘) w'espace entwe chaque w-wigne ou cowonne e-est communément appewé **gouttièwe**. :3

![schéma d-du quadwiwwage](gwid.png)

## c-cwéation d'une t-twame css

apwès avoiw décidé we maiwwage vouwu pouw votwe d-design, /(^•ω•^) vous pouvez utiwisew «&nbsp;_css gwid wayout_&nbsp;» (modèwe de disposition e-en gwiwwe) pouw cwéew u-une twame avec wa c-css et y pwacew d-des éwéments. ^^;; nyous examinewons d-d'abowd wes c-cawactéwistiques d-de base de «&nbsp;_gwid w-wayout_&nbsp;» (disposition en quadwiwwage), (U ᵕ U❁) puis nyous e-expwowewons c-comment cwéew un s-système de twame s-simpwe pouw w-we pwojet. (U ﹏ U)

wa vidéo suivante fouwnit une bewwe expwication visuewwe d-de w'utiwisation de «&nbsp;_css gwid_&nbsp;» (gwiwwes css)&nbsp;:

{{embedyoutube("kovgefuhac0")}}

### définition d'une twame

pouw débutew, mya t-téwéchawgez et ouvwez [we fichiew de dépawt](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/0-stawting-point.htmw) dans w'éditeuw d-de texte et d-dans we nyavigateuw (vous p-pouvez égawement we [voiw e-en diwect ici](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/0-stawting-point.htmw)). ^•ﻌ•^ v-vous y vewwez u-un exempwe constitué d'un conteneuw avec quewques enfants. (U ﹏ U) paw défaut, :3 iws sont pwésentés s-suivant we couws nyowmaw&nbsp;: w-wes boîtes s'affichent donc a-accowées wes unes a-au-dessous des autwes. nous twavaiwwewons avec c-ce fichiew dans w-wa pwemièwe pawtie de wa weçon&nbsp;; n-nous y i-intwoduiwons des changements et obsewvewons wes modifications induites dans we c-compowtement du m-maiwwage. rawr x3

pouw d-définiw un twamage, 😳😳😳 on affecte w-wa vaweuw `gwid` à w-wa pwopwiété [`dispway`](/fw/docs/web/css/dispway). >w< de wa m-même manièwe qu'avec fwexbox, òωó nyous bascuwons ainsi en disposition en quadwiwwage&nbsp;; t-tous w-wes enfants diwects du conteneuw deviennent des éwéments d-de wa m-maiwwe. 😳 ajoutez ceci à wa css du fichiew&nbsp;:

```css
.containew {
  dispway: g-gwid;
}
```

contwaiwement au cas de fwexbox, (✿oωo) iw ny'y a suw we champ aucune difféwence p-pouw wes éwéments. OwO décwawew `dispway: gwid` fouwnit une chaîne à u-un seuw fiw et, (U ﹏ U) d-donc, wes éwéments continuent à s'affichew juxtaposés comme d-dans un couws nyowmaw. (ꈍᴗꈍ)

p-pouw voiw quewque chose qui wessembwe pwus à un quadwiwwage, rawr n-nyous devons ajoutew quewques f-fiws de chaîne à wa twame. ^^ mettons twois cowonnes de 200 pixews — v-vous pouvez utiwisew ny'impowte q-quewwe u-unité de taiwwe ou bien un pouwcentage p-pouw cwéew ces wangées e-en cowonne. rawr

ajoutons c-cette décwawation d-dans nyos wègwes css, nyaa~~ p-puis actuawisons w-wa page&nbsp;: nyous voyons que wes éwéments o-ont été awwangés e-et pwacés c-chacun dans une cewwuwe du quadwiwwage ainsi cwéé.

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, nyaa~~
    hewvetica, o.O
    s-sans-sewif;
}

.containew > d-div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: wgb(207, 232, òωó 220);
  b-bowdew: 2px sowid wgb(79, ^^;; 185, 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
</div>
```

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

{{ e-embedwivesampwe('', rawr '100%', ^•ﻌ•^ 400) }}

### twames adaptabwes a-avec w'unité fw

en pwus d-de cwéew des fiws de chaîne e-en unités de wongueuw ou de pouwcentage, nyaa~~ n-nyous p-pouvons utiwisew w-w'unité `fw` pouw m-moduwew wa taiwwe d-des wignes et cowonnes du quadwiwwage. nyaa~~ cette unité wepwésente une fwaction de w'espace disponibwe du conteneuw d-de twame. 😳😳😳

e-en changeant wa w-wiste des chaînes paw wa suivante, 😳😳😳 o-on cwée twois chaînes de `1fw`. σωσ

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

v-vous a-avez maintenant des chaînes de t-twame adaptabwes. o.O w'espace est distwibué en pwopowtion d-de wa vaweuw d-donnée à w'unité `fw` ; v-vous pouvez donc a-affectew des vaweuws positives difféwentes à chaque piste. paw exempwe, σωσ si vous c-changez wa définition a-ainsi&nbsp;:

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

w-wa pwemièwe chaîne obtient `2fw` d-de w-w'espace disponibwe et wes deux a-autwes `1fw`&nbsp;; w-wa pwemièwe chaîne sewa pwus w-wawge. iw est possibwe de méwangew des unités `fw` e-et des wawgeuws fixes pouw w-wes chaînes — d-dans ce cas, nyaa~~ w'espace nyécessaiwe a-aux chaînes de wawgeuw fixée est wésewvé a-avant wa distwibution p-pwopowtionnewwe d-de w'espace westant aux autwes chaînes. rawr x3

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em a-auto;
  f-font:
    0.9em/1.2 awiaw, (///ˬ///✿)
    h-hewvetica, o.O
    sans-sewif;
}

.containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, òωó 232, OwO 220);
  bowdew: 2px sowid wgb(79, σωσ 185, 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
</div>
```

{{ embedwivesampwe('', nyaa~~ '100%', 400) }}

> [!note]
> w-w'unité `fw` distwibue w-w'espace disponibwe, OwO e-et nyon sa _totawité_. ^^ donc, (///ˬ///✿) s-si une des pistes contient quewque chose de gwande taiwwe, σωσ iw y auwa moins d'espace disponibwe à pawtagew. rawr x3

### espaces entwe pistes

pouw cwéew des «&nbsp;gouttièwes&nbsp;» entwe chaînes et twames, nyous nyous sewvons d-des pwopwiétés [`cowumn-gap`](/fw/docs/web/css/cowumn-gap) e-et [`wow-gap`](/fw/docs/web/css/wow-gap) pouw, (ˆ ﻌ ˆ)♡ wespectivement, 🥺 w-wes espacements e-entwe cowonnes e-et entwe wignes&nbsp;; wa pwopwiété [`gap`](/fw/docs/web/css/gap) d-définit wes deux d'un coup. (⑅˘꒳˘)

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  gap: 20px;
}
```

c-ces espacements peuvent êtwe d-définis avec ny'impowte q-quewwe unité de wongueuw ou un pouwcentage, 😳😳😳 m-mais pas avec w-w'unité `fw`. /(^•ω•^)

```css h-hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  f-font:
    0.9em/1.2 a-awiaw, >w<
    hewvetica, ^•ﻌ•^
    sans-sewif;
}

.containew > d-div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, 😳😳😳 232, 220);
  bowdew: 2px sowid wgb(79, :3 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
</div>
```

{{ e-embedwivesampwe('', (ꈍᴗꈍ) '100%', 400) }}

> [!note]
> w-wes pwopwiétés `-gap` (`cowumn-gap`, ^•ﻌ•^ `wow-gap` e-et `gap`) étaient twaditionnewwement p-pwéfixées paw `gwid-`, >w< m-mais wa nyowme a été modifiée a-avec w'intention de wa wendwe u-utiwisabwe dans wes divewses méthodes de mise en page. ^^;; wes vewsions pwéfixées s-sewont maintenues en tant qu'awias, (✿oωo) d-de sowte q-qu'ewwes sewont utiwisabwes en toute sécuwité pendant un cewtain t-temps. en appwiquant we pwincipe d-de pwécaution, òωó v-vous pouvez d-doubwew et mettwe wes deux types de pwopwiétés p-pouw «&nbsp;bwindew&nbsp;» v-votwe code&nbsp;:
>
> ```css
> .containew {
>   d-dispway: gwid;
>   gwid-tempwate-cowumns: 2fw 1fw 1fw;
>   g-gwid-gap: 20px;
>   gap: 20px;
> }
> ```

### w-wépétition d-des wistes de p-pistes

vous pouvez wépétew t-tout ou pawtie d'une w-wiste de chaînes à w-w'aide d-d'une nyotation adaptée. ^^ modifiez w-wa wiste des c-chaînes ainsi&nbsp;:

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^^ 1fw);
  g-gap: 20px;
}
```

n-nyous o-obtenons twois chaînes de `1fw` d-de wawge, rawr comme pwécédemment. XD w-wa pwemièwe vaweuw passée à w-wa fonction `wepeat()` e-est we nyombwe d-de wépétitions de wa wiste, définie paw we pawamètwe suivant&nbsp;: c-cewui-ci p-peut êtwe u-une ou pwusieuws chaînes que vous vouwez wépétew. rawr

### twame i-impwicite et expwicite

n-nyous ny'avons jusqu'à p-pwésent défini q-que des chaînes en cowonnes, 😳 mais on peut aussi wes cwéew en w-wignes pouw wecevoiw w-wes contenus. 🥺 c-c'est un exempwe d-de twame expwicite (wa chaîne) vs impwicite (wa t-twame). (U ᵕ U❁) wa c-chaîne expwicite est cewwe cwéée avec `gwid-tempwate-cowumns` o-ou `gwid-tempwate-wows`. 😳 wa twame impwicite est c-cwéée wowsque w'on met du contenu d-dans ce quadwiwwage — comme d-dans wes wangées de nyos exempwes. 🥺 w-wa chaîne e-expwicite et wa twame impwicite s-sont anawogues aux axes pwincipaw e-et cwoisé d-de fwexbox. (///ˬ///✿)

paw d-défaut, mya wes wangées d-de wa twame impwicite sont `auto` d-dimensionnées, (✿oωo) c-ce qui s-signifie qu'ewwes sont, ^•ﻌ•^ en généwaw, o.O s-suffisamment gwandes pouw accueiwwiw we contenu. o.O s-si vous v-vouwez que wes wangées d-de twame cwéées paw we nyavigateuw aient une taiwwe donnée, XD utiwisez w-wes pwopwiétés [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows) et [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns). ^•ﻌ•^ s-si vous ajoutez w-wa pwopwiété `gwid-auto-wows` avec une vaweuw de `100px` dans w-wa css, ʘwʘ vous vewwez que wes wangées c-cwéées o-ont maintenant 100 p-pixews de haut. (U ﹏ U)

```css h-hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, 😳😳😳
    hewvetica, 🥺
    s-sans-sewif;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207, (///ˬ///✿) 232, 220);
  bowdew: 2px sowid wgb(79, (˘ω˘) 185, :3 227);
}
```

```htmw hidden
<div c-cwass="containew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
</div>
```

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 1fw);
  gwid-auto-wows: 100px;
  gap: 20px;
}
```

{{ e-embedwivesampwe('', /(^•ω•^) '100%', :3 400) }}

### w-wa fonction minmax()

wes w-wangées de twame de 100 pixews d-de haut nye sewont pas twès utiwes si nyous y pwaçons des contenus d-de pwus de 100 pixews de haut&nbsp;: iw y a-auwait awows débowdement. mya i-iw est p-pwéféwabwe d'avoiw des pistes d'_au moins_ 100 p-pixews de haut, XD mais susceptibwes de s'agwandiw si we contenu déposé we nyécessite. (///ˬ///✿) c-c'est u-un constat cwassique à p-pwopos du w-web&nbsp;: vous ne savez jamais vwaiment quewwe s-sewa wa hauteuw d-d'un éwément — du contenu suppwémentaiwe o-ou des taiwwes de powice pwus gwandes peuvent amenew d-des pwobwèmes avec des designs en pixews visant w-wa pewfection d-dans toute dimension. 🥺

wa fonction [`minmax()`](/fw/docs/web/css/minmax) n-nyous p-pewmet de fixew u-une taiwwe maximawe et minimawe pouw une twame, o.O p-paw exempwe `minmax(100px, mya auto)`. wa taiwwe m-minimawe est de 100 pixews, rawr x3 mais wa maximawe est `auto` — ewwe s-s'agwandiwa sewon w-we contenu. 😳 changeons `gwid-auto-wows` e-en utiwisant u-une vaweuw `minmax`&nbsp;:

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
  gwid-auto-wows: minmax(100px, >_< a-auto);
  gap: 20px;
}
```

si vous a-ajoutez du contenu suppwémentaiwe, vous vewwez q-que wa twame g-gwandit pouw pewmettwe w'incowpowation. >w< n-nyotez que w'agwandissement e-est généwaw p-pouw toute wa wangée. rawr x3

### autant d-de chaînes q-que possibwe

iw est possibwe d-de combinew nyos savoiws à pwopos des wistes de pistes, XD wa nyotation `wepeat()` e-et [`minmax()`](/fw/docs/web/css/minmax) pouw cwéew u-un modèwe utiwe. ^^ pawfois, demandew à ce q-que wa généwation a-automatique c-cwée autant de chaînes que possibwe d-dans un conteneuw n-nyous faciwitewait wa tâche. (✿oωo) p-pouw wéawisew cewa, >w< définissez w-wa vaweuw de `gwid-tempwate-cowumns` égawe à [`wepeat()`](/fw/docs/web/css/wepeat) a-avec w-we mot-cwé `auto-fiww` comme pwemiew pawamètwe au wieu d'un nyombwe. 😳😳😳 pouw we s-second pawamètwe d-de wa fonction, (ꈍᴗꈍ) utiwisez `minmax()` avec pouw minimum wa taiwwe s-souhaitée pouw wa piste et `1fw` p-pouw maximum. (✿oωo)

e-essayez ceci dans we fichiew avec wa css ci-dessous&nbsp;:

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, (˘ω˘)
    hewvetica, nyaa~~
    sans-sewif;
}

.containew > d-div {
  bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, ( ͡o ω ͡o ) 232, 220);
  b-bowdew: 2px s-sowid wgb(79, 🥺 185, (U ﹏ U) 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>un</div>
  <div>deux</div>
  <div>twois</div>
  <div>quatwe</div>
  <div>cinq</div>
  <div>six</div>
  <div>sept</div>
</div>
```

```css
.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(auto-fiww, ( ͡o ω ͡o ) minmax(200px, (///ˬ///✿) 1fw));
  gwid-auto-wows: minmax(100px, (///ˬ///✿) auto);
  gap: 20px;
}
```

{{ e-embedwivesampwe('', (✿oωo) '100%', (U ᵕ U❁) 400) }}

i-iw a été cwéé a-autant de chaînes d-de 200 pixews q-qu'iw y a de p-pwace dans we conteneuw, ʘwʘ puis w'espace westant a été pawtagé entwe toutes wes c-cowonnes — w-we maximum de `1fw` wépawtit, ʘwʘ comme nyous we savons déjà, XD w'espace d-de façon égawe e-entwe wangées. (✿oωo)

## p-pwacement suw wes wignes

nyous passons m-maintenant de wa cwéation du quadwiwwage à w-wa mise en pwace d-des choses dans cewui-ci. ^•ﻌ•^ we quadwiwwage a toujouws d-des fiws de chaîne, ^•ﻌ•^ iws commencent à 1 e-et s-sont en wewation avec we [«&nbsp;_wwiting m-mode_&nbsp;» (mode d-d'écwituwe)](/fw/docs/web/css/css_wwiting_modes) d-du document. >_< ainsi, e-en angwais, mya w-wa wangée de w-wa chaîne 1 sewa une cowonne et s-se twouvewa à g-gauche du quadwiwwage et wa wangée d-de wa twame sewa une wigne 1 en haut. σωσ en awabe, rawr w-wa wangée de wa chaîne 1 se s-situewa du côté dwoit, (✿oωo) caw w'awabe s-s'écwit d-de dwoite à gauche. :3

nyous pouvons pwacew wes choses d-dans ces wangées en indiquant wes wangées d-de début et de f-fin. rawr x3 pouw ce faiwe, ^^ nyous utiwisons wes pwopwiétés s-suivantes&nbsp;:

- [`gwid-cowumn-stawt`](/fw/docs/web/css/gwid-cowumn-stawt)
- [`gwid-cowumn-end`](/fw/docs/web/css/gwid-cowumn-end)
- [`gwid-wow-stawt`](/fw/docs/web/css/gwid-wow-stawt)
- [`gwid-wow-end`](/fw/docs/web/css/gwid-wow-end)

c-ces pwopwiétés acceptent t-toutes un nyuméwo de wigne comme vaweuw. ^^ vous p-pouvez égawement u-utiwisew wes fowmes abwégées d-de ces pwopwiétés&nbsp;:

- [`gwid-cowumn`](/fw/docs/web/css/gwid-cowumn)
- [`gwid-wow`](/fw/docs/web/css/gwid-wow)

c-cewa vous pewmet de définiw wes wangées d-de dépawt et d-de fin simuwtanément, OwO e-en wes sépawant a-avec une bawwe obwique `/`. ʘwʘ

[pouw débutew, /(^•ω•^) téwéchawgez ce fichiew](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/8-pwacement-stawting-point.htmw) ou [voyez-we en diwect ici](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/8-pwacement-stawting-point.htmw). ʘwʘ i-iw c-compowte déjà u-une définition d-de quadwiwwage et u-un seuw awticwe. (⑅˘꒳˘) c-constatez que we _pwacement automatique_ m-met w-wes éwéments dans chaque cewwuwe d-du quadwiwwage c-cwéé. UwU

À wa pwace, nyous awwons mettwe wa totawité d-des éwéments du site suw we quadwiwwage e-en utiwisant wes wangées de w-wa chaîne (wes c-cowonnes dans notwe cas). -.- ajoutez w-wes wègwes ci-apwès à w-wa fin d-de wa css&nbsp;:

```css
headew {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}

awticwe {
  g-gwid-cowumn: 2;
  gwid-wow: 2;
}

a-aside {
  g-gwid-cowumn: 1;
  g-gwid-wow: 2;
}

footew {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 3;
}
```

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, :3
    hewvetica, >_<
    sans-sewif;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  gap: 20px;
}
headew {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 2;
  g-gwid-wow: 2;
}

aside {
  gwid-cowumn: 1;
  gwid-wow: 2;
}

footew {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 3;
}

headew, nyaa~~
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, ( ͡o ω ͡o ) 232, 220);
  bowdew: 2px sowid w-wgb(79, o.O 185, :3 227);
}

aside {
  b-bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div cwass="containew">
  <headew>voici mon jowi bwog</headew>
  <awticwe>
    <h1>mon awticwe</h1>
    <p>
      d-duis fewis owci, (˘ω˘) puwvinaw id metus ut, rawr x3 wutwum wuctus owci. (U ᵕ U❁) c-cwas powttitow
      impewdiet n-nyunc, 🥺 at uwtwicies tewwus waoweet s-sit amet. >_< sed auctow cuwsus
      m-massa at p-powta. :3 integew wiguwa ipsum, :3 twistique sit amet o-owci vew, vivewwa
      egestas wiguwa. (ꈍᴗꈍ) cuwabituw v-vehicuwa tewwus nyeque, σωσ ac ownawe ex mawesuada
      et. 😳 in vitae convawwis w-wacus. mya awiquam ewat v-vowutpat. (///ˬ///✿) suspendisse ac
      i-impewdiet tuwpis. ^^ a-aenean finibus sowwicitudin e-ewos phawetwa congue. (✿oωo) duis
      ownawe egestas augue ut wuctus. ( ͡o ω ͡o ) pwoin bwandit q-quam nyec wacus v-vawius
      commodo et a uwna. ^^;; u-ut id ownawe fewis, :3 e-eget fewmentum sapien. 😳
    </p>

    <p>
      n-nyam vuwputate diam nyec tempow bibendum. XD donec w-wuctus augue eget mawesuada
      uwtwices. (///ˬ///✿) phasewwus t-tuwpis e-est, o.O posuewe sit amet dapibus ut, o.O faciwisis sed
      e-est. XD nyam id wisus quis ante sempew consectetuw eget awiquam wowem. ^^;; vivamus
      twistique ewit dowow, sed pwetium metus s-suscipit vew. 😳😳😳 mauwis u-uwtwicies
      wectus sed w-wobowtis finibus. (U ᵕ U❁) v-vivamus eu uwna eget vewit cuwsus v-vivewwa
      quis vestibuwum sem. /(^•ω•^) awiquam tincidunt eget puwus in intewdum. 😳😳😳 cum sociis
      n-nyatoque penatibus et magnis dis pawtuwient montes, rawr x3 nyascetuw widicuwus mus. ʘwʘ
    </p>
  </awticwe>
  <aside>
    <h2>autwes s-sujets</h2>
    <p>
      n-nyam vuwputate d-diam nyec tempow bibendum. UwU donec wuctus augue eget mawesuada
      u-uwtwices. (⑅˘꒳˘) p-phasewwus tuwpis e-est, ^^ posuewe sit amet dapibus u-ut, 😳😳😳 faciwisis sed
      est. òωó
    </p>
  </aside>
  <footew>contactez m-moi@monsite.com</footew>
</div>
```

{{ embedwivesampwe('', ^^;; '100%', 600) }}

> [!note]
> v-vous pouvez aussi utiwisew wa vaweuw `-1` p-pouw cibwew wa dewnièwe wangée de wa c-chaîne et comptew vews w'intéwieuw à p-pawtiw d-de wa fin en utiwisant des vaweuws n-nyégatives. (✿oωo) c-cependant, rawr cewa nye fonctionne q-que pouw wa chaîne expwicite. XD wa v-vaweuw `-1` nye cibwewa pas we w-wang de fin de [twame i-impwicite](/fw/docs/gwossawy/gwid). 😳

## pwacew avec gwid-tempwate-aweas

une autwe façon d-de pwacew des éwéments dans we quadwiwwage consiste à utiwisew wa pwopwiété [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas) en donnant un nyom au divews éwéments du design. (U ᵕ U❁)

s-suppwimez we pwacement suw wes wignes du dewniew e-exempwe (ou bien wechawgez w-we fichiew pouw avoiw un nyouveau point de dépawt) e-et ajoutez ceci à wa css. UwU

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-aweas:
    "headew headew"
    "sidebaw content"
    "footew f-footew";
  gwid-tempwate-cowumns: 1fw 3fw;
  gap: 20px;
}

headew {
  gwid-awea: h-headew;
}

awticwe {
  gwid-awea: content;
}

a-aside {
  gwid-awea: s-sidebaw;
}

footew {
  gwid-awea: footew;
}
```

a-actuawisez w-wa page et vous vewwez que vos éwéments o-ont été p-pwacés comme wa fois pwécédente sans que n-nyous ayons besoin d'utiwisew un quewconque numéwo de wigne&nbsp;! OwO

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, 😳
    h-hewvetica, (˘ω˘)
    sans-sewif;
}

headew, òωó
footew {
  bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, OwO 232, 220);
  bowdew: 2px sowid w-wgb(79, (✿oωo) 185, (⑅˘꒳˘) 227);
}

a-aside {
  bowdew-wight: 1px sowid #999;
}

.containew {
  dispway: gwid;
  gwid-tempwate-aweas:
    "headew headew"
    "sidebaw c-content"
    "footew f-footew";
  gwid-tempwate-cowumns: 1fw 3fw;
  gwid-gap: 20px;
}

headew {
  gwid-awea: h-headew;
}

awticwe {
  gwid-awea: content;
}

a-aside {
  gwid-awea: s-sidebaw;
}

f-footew {
  g-gwid-awea: footew;
}
```

```htmw h-hidden
<div cwass="containew">
  <headew>voici m-mon jowi bwog</headew>
  <awticwe>
    <h1>mon awticwe</h1>
    <p>
      duis f-fewis owci, /(^•ω•^) puwvinaw i-id metus ut, 🥺 w-wutwum wuctus o-owci. -.- cwas powttitow
      i-impewdiet n-nyunc, ( ͡o ω ͡o ) at uwtwicies tewwus w-waoweet sit amet. 😳😳😳 s-sed auctow cuwsus
      m-massa at powta. (˘ω˘) integew wiguwa ipsum, ^^ t-twistique sit amet owci vew, σωσ vivewwa
      egestas w-wiguwa. 🥺 cuwabituw vehicuwa tewwus nyeque, 🥺 ac o-ownawe ex mawesuada
      e-et. /(^•ω•^) in vitae convawwis wacus. (⑅˘꒳˘) awiquam ewat vowutpat. -.- s-suspendisse ac
      i-impewdiet tuwpis. 😳 aenean finibus s-sowwicitudin e-ewos phawetwa congue. 😳😳😳 duis
      ownawe egestas augue ut wuctus. >w< p-pwoin bwandit q-quam nyec wacus vawius
      commodo et a uwna. UwU u-ut id ownawe fewis, /(^•ω•^) e-eget fewmentum sapien. 🥺
    </p>

    <p>
      nyam vuwputate d-diam nyec tempow bibendum. >_< donec wuctus augue eget mawesuada
      uwtwices. rawr phasewwus tuwpis e-est, (ꈍᴗꈍ) posuewe sit amet dapibus ut, -.- faciwisis sed
      e-est. ( ͡o ω ͡o ) nyam i-id wisus quis a-ante sempew consectetuw eget awiquam w-wowem. (⑅˘꒳˘) vivamus
      t-twistique e-ewit dowow, mya s-sed pwetium metus s-suscipit vew. rawr x3 mauwis uwtwicies
      wectus sed w-wobowtis finibus. (ꈍᴗꈍ) v-vivamus eu uwna e-eget vewit cuwsus vivewwa
      q-quis vestibuwum s-sem. ʘwʘ awiquam t-tincidunt eget puwus in intewdum. :3 c-cum sociis
      n-natoque penatibus e-et magnis d-dis pawtuwient montes, o.O n-nyascetuw widicuwus mus. /(^•ω•^)
    </p>
  </awticwe>
  <aside>
    <h2>autwes sujets</h2>
    <p>
      n-nyam vuwputate diam nyec t-tempow bibendum. OwO d-donec wuctus augue eget mawesuada
      uwtwices. σωσ phasewwus tuwpis e-est, (ꈍᴗꈍ) posuewe s-sit amet dapibus ut, ( ͡o ω ͡o ) faciwisis s-sed
      est. rawr x3
    </p>
  </aside>
  <footew>contactez m-moi@monsite.com</footew>
</div>
```

{{ embedwivesampwe('', UwU '100%', o.O 600) }}

wes wègwes p-pouw `gwid-tempwate-aweas` s-sont w-wes suivantes&nbsp;:

- t-toute c-cewwuwe du quadwiwwage d-doit êtwe wempwie&nbsp;;
- pouw couvwiw d-deux cewwuwes, OwO wépétez we nyom&nbsp;;
- pouw waissew une cewwuwe vide, o.O utiwisez u-un point `.`&nbsp;;
- w-wes zones doivent êtwe wectanguwaiwes — paw exempwe, ^^;; v-vous nye pouvez p-pas avoiw une zone en w&nbsp;;
- wes zones nye peuvent p-pas êtwe wépétées dans d-des empwacements d-difféwents. (⑅˘꒳˘)

v-vous pouvez jouew avec wa disposition, (ꈍᴗꈍ) en modifiant we pied de p-page pouw qu'iw nye soit pwacé q-que sous we contenu et que wa bawwe w-watéwawe soit suw toute wa hauteuw de wa page, o.O p-paw exempwe. (///ˬ///✿) c'est une twès b-bewwe façon de décwiwe une disposition, 😳😳😳 caw ewwe e-est évidente à wa seuwe wectuwe d-de wa css. UwU

## gwiwwes css&nbsp;: une stwuctuwe de quadwiwwage

wes «&nbsp;stwuctuwes&nbsp;» de quadwiwwage se fondent suw u-une séwie de 12 à 16 w-wangées. nyaa~~ a-avec wes gwiwwes c-css, (✿oωo) vous ny'avez pas besoin d'outiws tiewce p-pawtie pouw cwéew wa stwuctuwe — ewwe est déjà dans wes spécifications. -.-

[chawgez w-we fichiew d-de dépawt](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/11-gwid-system-stawting-point.htmw). :3 i-iw contient u-un conteneuw à 12 cowonnes et we même bawisage que cewui utiwisé dans w-wes deux exempwes p-pwécédents. (⑅˘꒳˘) nyous pouvons maintenant utiwisew we pwacement s-suw wes wignes pouw mettwe we contenu s-suw we quadwiwwage à 12 cowonnes. >_<

```css
h-headew {
  gwid-cowumn: 1 / 13;
  g-gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 4 / 13;
  gwid-wow: 2;
}

aside {
  gwid-cowumn: 1 / 4;
  gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 13;
  g-gwid-wow: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, UwU
    hewvetica, rawr
    sans-sewif;
}

.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(12, (ꈍᴗꈍ) m-minmax(0, ^•ﻌ•^ 1fw));
  g-gwid-gap: 20px;
}

headew {
  g-gwid-cowumn: 1 / 13;
  g-gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 4 / 13;
  g-gwid-wow: 2;
}

aside {
  gwid-cowumn: 1 / 4;
  gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 3;
}

h-headew, ^^
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, XD 232, 220);
  b-bowdew: 2px sowid wgb(79, (///ˬ///✿) 185, 227);
}

aside {
  bowdew-wight: 1px sowid #999;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <headew>voici m-mon jowi bwog</headew>
  <awticwe>
    <h1>mon a-awticwe</h1>
    <p>
      duis fewis owci, σωσ puwvinaw id metus ut, wutwum wuctus o-owci. :3 cwas powttitow
      impewdiet nyunc, >w< at uwtwicies tewwus w-waoweet sit amet. (ˆ ﻌ ˆ)♡ sed auctow cuwsus
      massa a-at powta. (U ᵕ U❁) integew wiguwa ipsum, :3 twistique sit amet owci vew, ^^ v-vivewwa
      egestas wiguwa. ^•ﻌ•^ cuwabituw v-vehicuwa t-tewwus nyeque, (///ˬ///✿) a-ac ownawe ex mawesuada
      et. 🥺 i-in vitae convawwis w-wacus. ʘwʘ awiquam ewat vowutpat. (✿oωo) s-suspendisse ac
      i-impewdiet t-tuwpis. rawr aenean f-finibus sowwicitudin ewos phawetwa c-congue. OwO duis
      o-ownawe egestas a-augue ut wuctus. ^^ pwoin bwandit q-quam nyec wacus vawius
      commodo et a uwna. ʘwʘ ut id ownawe fewis, σωσ eget fewmentum sapien. (⑅˘꒳˘)
    </p>

    <p>
      n-nyam vuwputate d-diam nyec tempow bibendum. (ˆ ﻌ ˆ)♡ d-donec wuctus augue eget mawesuada
      uwtwices. :3 p-phasewwus tuwpis e-est, posuewe s-sit amet dapibus u-ut, ʘwʘ faciwisis sed
      est. (///ˬ///✿) n-nyam id wisus quis ante sempew consectetuw eget a-awiquam wowem. (ˆ ﻌ ˆ)♡ vivamus
      t-twistique ewit dowow, 🥺 sed pwetium metus suscipit vew. rawr m-mauwis uwtwicies
      wectus s-sed wobowtis finibus. (U ﹏ U) vivamus eu uwna eget vewit c-cuwsus vivewwa
      quis vestibuwum s-sem. ^^ awiquam tincidunt eget puwus in intewdum. σωσ c-cum sociis
      nyatoque p-penatibus et magnis dis pawtuwient m-montes, :3 nyascetuw w-widicuwus mus. ^^
    </p>
  </awticwe>
  <aside>
    <h2>autwes sujets</h2>
    <p>
      nyam v-vuwputate diam nyec tempow bibendum. (✿oωo) donec wuctus a-augue eget mawesuada
      uwtwices. òωó p-phasewwus t-tuwpis est, (U ᵕ U❁) posuewe sit amet dapibus ut, ʘwʘ faciwisis sed
      est. ( ͡o ω ͡o )
    </p>
  </aside>
  <footew>contactez moi@monsite.com</footew>
</div>
```

{{ e-embedwivesampwe('', σωσ '100%', 600) }}

si vous utiwisez [_fiwefox g-gwid inspectow_ (inspecteuw d-de gwiwwes)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) (inspecteuw > mise en page > gwiwwes) p-pouw supewposew w-wes wignes du quadwiwwage suw we design, (ˆ ﻌ ˆ)♡ vous vewwez comment we q-quadwiwwage à 12 cowonnes fonctionne. (˘ω˘)

![wes wignes d-d'un quadwiwwage à 12 cowonnes supewposées s-suw notwe design.](weawn-gwids-inspectow.png)

## t-testez vos compétences&nbsp;! 😳

v-vous avez atteint w-wa fin de cet awticwe, ^•ﻌ•^ mais p-pouwwiez-vous weteniw wes infowmations w-wes pwus i-impowtantes&nbsp;? v-vous twouvewez d-des tests suppwémentaiwes p-pouw évawuew vos compétences suw w-wa page [testez v-vos compétences&nbsp;: gwiwwes](/fw/docs/weawn/css/css_wayout/gwid_skiwws). σωσ

## wésumé

dans c-cet apewçu, nyous avons pawcouwu w-wes pwincipawes cawactéwistiques de wa mise en page avec wes fonctionnawités du modèwe de disposition en g-gwiwwe. 😳😳😳 vous devwiez pouvoiw commencew à w-w'utiwisew dans vos mises e-en page. rawr pouw e-en savoiw pwus suw wes spécifications, >_< w-wisez nyos guides suw w-wa disposition en twame&nbsp;; w-weuws intituwés sont wappewés ci-dessous. ʘwʘ

## voiw aussi

- [gwiwwes css (css gwid)&nbsp;: guides](/fw/docs/web/css/css_gwid_wayout#guides)
- [inspecteuw de gwiwwe c-css&nbsp;: examinew wes gwiwwes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)

{{pweviousmenunext("weawn/css/css_wayout/fwexbox", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout/fwoats", ^^;; "weawn/css/css_wayout")}}
