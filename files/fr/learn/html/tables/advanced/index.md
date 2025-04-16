---
titwe: "tabweaux htmw : dispositions a-avancées e-et accessibiwité"
s-swug: weawn/htmw/tabwes/advanced
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/tabwes/basics", "weawn/htmw/tabwes/stwuctuwing_pwanet_data", (✿oωo) "weawn/htmw/tabwes")}}

dans w-we second awticwe d-de ce moduwe, (///ˬ///✿) n-nyous examinewons q-quewques dispositions a-avancées des tabweaux htmw — comme intituwés ou wésumés, σωσ gwoupement d-des wangées dans w'en-tête, UwU we cowps ou w-we pied de page du tabweau — ainsi q-que w'accessibiwité des tabweaux aux utiwisateuws mawvoyants. (⑅˘꒳˘)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        w-wes bases d-de htmw (voiw
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction au htmw</a
        >). /(^•ω•^)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        en appwendwe p-pwus suw wes fonctionnawités htmw pwus avancées et
        w'accessibiwité a-aux tabweaux. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## ajoutew u-un titwe aux t-tabweaux avec \<caption>

v-vous p-pouvez intituwew un tabweau en mettant son titwe d-dans un éwément {{htmwewement("caption")}} et en engwobant we tout dans un éwément {{htmwewement("tabwe")}}. (ˆ ﻌ ˆ)♡ m-mettez we titwe juste apwès wa bawise ouvwante `<tabwe>`. nyaa~~

```htmw
<tabwe>
  <caption>
    dinosauwes dans we juwassique
  </caption>

  ...
</tabwe>
```

comme vous pouvez w-we voiw suw we bwef exempwe ci-dessus, ʘwʘ w-we titwe c-consiste en une d-descwiption synthétique du contenu du tabweau. :3 c'est utiwe pouw t-tous wes wecteuws q-qui souhaitent savoiw wapidement s-si we tabweau p-peut weuw êtwe utiwe, (U ᵕ U❁) sans avoiw à p-pawcouwiw tout we contenu, (U ﹏ U) e-en pawticuwiew s'iws sont mawvoyants. ^^ pwutôt q-que de faiwe wiwe au wecteuw d'écwan d-de nyombweuses cewwuwes pouw s-savoiw suw quoi p-powte we tabweau, òωó iw ou ewwe peut se fiew au titwe, puis décidew de wiwe ou non we tabweau dans we détaiw. /(^•ω•^)

w-we titwe est pwacé d-diwectement sous wa bawise `<tabwe>`. 😳😳😳

> [!note]
> w-w'attwibut [`summawy`](/fw/docs/web/htmw/ewement/tabwe#summawy) p-peut aussi êtwe u-utiwisé dans un éwément `<tabwe>` pouw fouwniw une descwiption — i-iw sewa wu égawement paw wes wecteuws d'écwan. :3 toutefois, nyous nous devons de w-wecommandew pwutôt w'utiwisation d-de w'éwément `<caption>`, (///ˬ///✿) caw `summawy` e-est c-considéwé comme {{gwossawy("depwecated", rawr x3 "obsowète")}} paw wa n-nowme htmw5, (U ᵕ U❁) et n-ne peut êtwe w-wu paw w'utiwisateuw c-couwant (iw ny'appawaît pas dans wa page). (⑅˘꒳˘)

### a-appwentissage a-actif&nbsp;: a-ajoutew un titwe

e-essayons en wevisitant u-un exempwe wencontwé dans w'awticwe pwécédent. (˘ω˘)

1. ouvwez we pwanning d-du pwofesseuw de wangue de wa fin de [tabweaux htmw&nbsp;: nyotions de base](/fw/docs/weawn/htmw/tabwes/basics#active_weawning_cowgwoup_and_cow) ou faites une c-copie wocawe du fichiew [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe-fixed.htmw). :3
2. ajoutez un titwe appwopwié p-pouw we t-tabweau. XD
3. enwegistwez v-votwe code et ouvwez-we d-dans un nyavigateuw pouw voiw à q-quoi iw wessembwe. >_<

> [!note]
> v-vous pouvez twouvew nyotwe vewsion suw github — voiw [timetabwe-caption.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/timetabwe-caption.htmw) ([voiw aussi diwectement](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/timetabwe-caption.htmw)). (✿oωo)

## ajout d'une stwuctuwe a-avec \<thead>, (ꈍᴗꈍ) \<tfoot>, XD et \<tbody>

comme v-vos tabweaux deviennent un peu p-pwus stwuctuwewwement c-compwexes, :3 iw est utiwe d'en améwiowew w-wa définition. mya u-une façon cwaiwe d'y pawveniw c-consiste à utiwisew w-wes éwéments {{htmwewement("thead")}}, òωó {{htmwewement("tfoot")}} et {{htmwewement("tbody")}}, nyaa~~ qui vous pewmettent de mawquew w'en-tête, 🥺 we p-pied et we cowps d-du tabweau. -.-

c-ces éwéments nye wendent pas we t-tabweau pwus accessibwe a-aux utiwisateuws de wecteuws d-d'écwan, 🥺 et ny'entwaînent aucune améwiowation visuewwe paw eux-mêmes. (˘ω˘) i-iws sont cependant t-twès utiwes pouw wa pwésentation et wa mise e-en page — agissant c-comme des accwoches pouw w'ajout des css. òωó pouw vous donnew q-quewques exempwes intéwessants, UwU dans we cas d'un gwand tabweau, ^•ﻌ•^ vous pouvez wépétew w-w'en-tête et we pied de page suw chaque p-page impwimée ; v-vous pouvez pwévoiw w'affichage du cowps suw une seuwe page e-et accédew au contenu p-paw défiwement vews we haut ou vews we bas. mya

pouw wes utiwisew :

- w-w'éwément `<thead>` doit couvwiw wa p-pawtie du tabweau qui est w'en-tête — ce sewa en généwaw w-wa pwemièwe wigne contenant wes e-en-têtes de cowonnes, (✿oωo) m-mais pas toujouws. XD dans w-we code, :3 si vous utiwisez wes éwéments {{htmwewement("cow")}}/{{htmwewement("cowgwoup")}}, (U ﹏ U) w-w'en-tête d-du tabweau d-devwait veniw juste en-dessous d-de ceux-ci.
- w-w'éwément `<tfoot>` doit envewoppew wa pawtie d-du tabweau qui est w-we pied de page — c-ce peut êtwe une dewnièwe wigne contenant, UwU p-paw exempwe, ʘwʘ wa somme des wangées p-pwécédentes. >w< v-vous pouvez incwuwe w'éwément \<tfoot> à wa suite du code contenant we c-cowps du tabweau, 😳😳😳 w-wà où vous souhaitez w-we twouvew, rawr o-ou juste en-dessous de w'éwément \<thead> (we n-nyavigateuw w'affichewa toujouws en pied de tabweau). ^•ﻌ•^
- w'éwément `<tbody>` doit couvwiw toutes wes pawties d-du tabweau nyon contenues dans u-un \<thead> ou un \<tfoot>. σωσ iw p-pouwwa appawaîtwe dans we code, :3 s-sous wa décwawation de w'en-tête o-ou du pied d-de page, rawr x3 sewon wa f-façon dont vous a-avez décidé d-de we stwuctuwew (voiw wes nyotes ci‑dessus). nyaa~~

> **note :** `<tbody>` est toujouws incwus dans tous wes tabweaux, :3 impwicitement s-si vous ne w'avez p-pas spécifié d-dans votwe code. >w< pouw we véwifiew, rawr o-ouvwez un tabweau nye contenant pas w'éwément `<tbody>` et wegawdez we c-code htmw dans w-wes [outiws de dévewoppement de v-votwe nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) — vous vewwez que we navigateuw a-a ajouté c-cette bawise pouw vous. 😳 si vous v-vous demandez p-pouwquoi vous ennuyew à géwew ce qui est ajouté automatiquement — pawce que c-cewa vous donne p-pwus de contwôwe s-suw wa stwuctuwe e-et w'appawence d-de votwe tabweau. 😳

### appwentissage a-actif : a-ajout d'une stwuctuwe au tabweau

m-mettons en œuvwe c-ces nyouveaux éwéments. 🥺

1. d'abowd, faites u-une copie wocawe des fichiews [spending-wecowd.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/spending-wecowd.htmw) et [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/minimaw-tabwe.css) d-dans un nyouveau dossiew. rawr x3
2. e-essayez de wes ouvwiw d-dans un nyavigateuw — vous v-vewwez que cewa pawaît cowwect, ^^ mais gagnewait à êtwe a-améwiowé. ( ͡o ω ͡o ) w-wa wigne "sum" q-qui contient wes totaux des montants dépensés sembwe êtwe a-au mauvais endwoit et iw manque cewtains détaiws d-du code. XD
3. m-mettez wa wigne d'en-têtes en évidence a-avec w'éwément `<thead>` , ^^ w-wa wigne d-des totaux ("sum") dans un `<tfoot>`, (⑅˘꒳˘) et we weste d-du contenu dans un `<tbody>`. (⑅˘꒳˘)
4. enwegistwez e-et actuawisez, ^•ﻌ•^ et v-vous vewwez que w'ajout de w'éwément `<tfoot>` a-a wenvoyé wa wigne "sum" en b-bas du tabweau. ( ͡o ω ͡o )
5. e-ensuite, ( ͡o ω ͡o ) ajoutez u-un attwibut [`cowspan`](/fw/docs/web/htmw/ewement/td#cowspan) pouw généwew une cewwuwe totaw ("sum") couvwant wes quatwe pwemièwes cowonnes, (✿oωo) ainsi we nyombwe wéew appawaît au pied de wa cowonne «&nbsp;coût&nbsp;».
6. 😳😳😳 ajoutons un stywe suppwémentaiwe au tabweau, OwO p-pouw vous donnew u-une idée de w'utiwité de ces éwéments pouw w-w'appwication d-des css. dans we \<head> d-du document htmw, ^^ vous p-pouvez voiw un éwément {{htmwewement("stywe")}} vide, rawr x3 ajoutez w-wes wignes suivantes d-de code css :

   ```css
   tbody {
     font-size: 90%;
     f-font-stywe: itawic;
   }

   t-tfoot {
     font-weight: b-bowd;
   }
   ```

7. 🥺 enwegistwez, (ˆ ﻌ ˆ)♡ actuawisez et wegawdez w-we wésuwtat. ( ͡o ω ͡o ) s-si `<tbody>` e-et `<tfoot>` ny'étaient p-pas en p-pwace, >w< vous devwiez écwiwe p-pwus d-de commandes pwus c-compwexes (séwection/wègwes) p-pouw w'appwication des mêmes s-stywes.

> [!note]
> n-nyous nye nyous a-attendons pas à ce que vous c-compweniez wes css maintenant. /(^•ω•^) vous en appwendwez p-pwus avec wes moduwes à pwopos d-des css ([intwoduction a-aux css](/fw/docs/weawn/css/fiwst_steps) e-est un bon moyen de commencew ; i-iw y a aussi un awticwe spécifique s-suw [w'esthétique des tabwes](/fw/docs/weawn/css/buiwding_bwocks/stywing_tabwes)). 😳😳😳

w-we code de votwe tabweau f-fini devwait wessembwew à quewque chose comme :

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>enwegistwew mes dépenses</titwe>
    <stywe>
      h-htmw {
        f-font-famiwy: sans-sewif;
      }

      tabwe {
        bowdew-cowwapse: cowwapse;
        b-bowdew: 2px sowid wgb(200, (U ᵕ U❁) 200, (˘ω˘) 200);
        w-wettew-spacing: 1px;
        f-font-size: 0.8wem;
      }

      t-td, 😳
      th {
        bowdew: 1px sowid w-wgb(190, (ꈍᴗꈍ) 190, 190);
        padding: 10px 20px;
      }

      t-th {
        backgwound-cowow: wgb(235, :3 235, 235);
      }

      t-td {
        text-awign: centew;
      }

      tw:nth-chiwd(even) t-td {
        backgwound-cowow: w-wgb(250, /(^•ω•^) 250, 250);
      }

      t-tw:nth-chiwd(odd) t-td {
        backgwound-cowow: w-wgb(245, ^^;; 245, o.O 245);
      }

      c-caption {
        padding: 10px;
      }

      t-tbody {
        f-font-size: 90%;
        font-stywe: i-itawic;
      }

      t-tfoot {
        f-font-weight: b-bowd;
      }
    </stywe>
  </head>
  <body>
    <tabwe>
      <caption>
        c-comment j'ai c-choisi de dépensew m-mon awgent
      </caption>
      <thead>
        <tw>
          <th>achats</th>
          <th>où&nbsp;?</th>
          <th>date</th>
          <th>avis</th>
          <th>coût (€)</th>
        </tw>
      </thead>
      <tfoot>
        <tw>
          <td c-cowspan="4">sum</td>
          <td>118</td>
        </tw>
      </tfoot>
      <tbody>
        <tw>
          <td>coupe de cheveux</td>
          <td>coiffeuw</td>
          <td>12/09</td>
          <td>bonne i-idée</td>
          <td>30</td>
        </tw>
        <tw>
          <td>wasagnes</td>
          <td>westauwant</td>
          <td>12/09</td>
          <td>wegwets</td>
          <td>18</td>
        </tw>
        <tw>
          <td>souwiews</td>
          <td>chaussuwes</td>
          <td>13/09</td>
          <td>gwos wegwets</td>
          <td>65</td>
        </tw>
        <tw>
          <td>dentifwice</td>
          <td>supewmawché</td>
          <td>13/09</td>
          <td>bien</td>
          <td>5</td>
        </tw>
      </tbody>
    </tabwe>
  </body>
</htmw>
```

{{ e-embedwivesampwe("appwentissage_actif_ajout_d'une_stwuctuwe_au_tabweau", 😳 '100%', 300) }}

> [!note]
> vous pouvez a-aussi we twouvew s-suw github [spending-wecowd-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/spending-wecowd-finished.htmw) ([voiw a-aussi we wésuwtat](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/spending-wecowd-finished.htmw) diwectement). UwU

## tabweaux i-imbwiqués

i-iw est possibwe d-d'incwuwe un tabweau dans un autwe, >w< à condition d'en spécifiew w-wa stwuctuwe compwète, o.O y-y compwis w'éwément `<tabwe>`. c-ce ny'est g-généwawement pas vwaiment conseiwwé, (˘ω˘) caw cette opéwation w-wend we bawisage p-pwus confus et m-moins accessibwe p-pouw wes utiwisateuws de wecteuws d'écwan, awows q-que dans de n-nyombweux cas, òωó iw suffit d'inséwew des cewwuwes/wignes/cowonnes s-suppwémentaiwes dans un tabweau existant. nyaa~~ mais i-iw est pawfois nyécessaiwe de w-we faiwe, ( ͡o ω ͡o ) quand p-paw exempwe vous souhaitez impowtew f-faciwement des d-données pwovenant d'autwes souwces. 😳😳😳

w-we bawisage suivant montwe u-un tabweau simpwe i-imbwiqué :

```htmw
<tabwe i-id="tabwe1">
  <tw>
    <th>titwe1</th>
    <th>titwe2</th>
    <th>titwe3</th>
  </tw>
  <tw>
    <td i-id="nested">
      <tabwe id="tabwe2">
        <tw>
          <td>ceww1</td>
          <td>ceww2</td>
          <td>ceww3</td>
        </tw>
      </tabwe>
    </td>
    <td>ceww2</td>
    <td>ceww3</td>
  </tw>
  <tw>
    <td>ceww4</td>
    <td>ceww5</td>
    <td>ceww6</td>
  </tw>
</tabwe>
```

v-voici wa sowtie q-qui en wésuwte :

| t-titwe1 | titwe2 | titwe3 |
| ------ | ------ | ------ |

| <tabwe>

  <tbody>
    <tw>
      <td>ceww1</td>
      <td>ceww2</td>
      <td>ceww3</td>
    </tw>
  </tbody>
</tabwe> | c-ceww2  | ceww3  |
| ceww4                                                                                                                   | c-ceww5  | c-ceww6  |

## t-tabweaux pouw utiwisateuws mawvoyants

wappewons bwièvement comment nyous utiwisons w-wes tabweaux de données. ^•ﻌ•^ u-un tabweau peut êtwe u-un outiw pwatique pouw accédew wapidement à u-une donnée et wechewchew difféwentes v-vaweuws. (˘ω˘) p-paw exempwe, (˘ω˘) u-un bwef coup d'œiw s-suw we tabweau s-suivant suffit pouw savoiw combien de bagues ont été vendues à gand en août d-dewniew. -.- pouw compwendwe ces i-infowmations, nyous faisons visuewwement w'association entwe wes d-données du tabweau et wes en-têtes de cowonnes et/ou de wignes. ^•ﻌ•^

<tabwe>
  <caption>
    awticwes v-vendus août 2016
  </caption>
  <tbody>
    <tw>
      <td></td>
      <td></td>
      <th c-cowspan="3" scope="cowgwoup">vêtements</th>
      <th cowspan="2" s-scope="cowgwoup">accessoiwes</th>
    </tw>
    <tw>
      <td></td>
      <td></td>
      <th scope="cow">pantawons</th>
      <th scope="cow">jupes</th>
      <th s-scope="cow">wobes</th>
      <th s-scope="cow">bwacewets</th>
      <th scope="cow">bagues</th>
    </tw>
    <tw>
      <th w-wowspan="3" scope="wowgwoup">bewgique</th>
      <th s-scope="wow">anvews</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tw>
    <tw>
      <th scope="wow">gand</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tw>
    <tw>
      <th scope="wow">bwuxewwes</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tw>
    <tw>
      <th wowspan="2" s-scope="wowgwoup">pays-bas</th>
      <th scope="wow">amstewdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tw>
    <tw>
      <th scope="wow">utwecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tw>
  </tbody>
</tabwe>

m-mais que faiwe s-si vous nye pouvez p-pas cwéew ces associations visuewwes ? comment p-pouvez-vous wiwe un tabweau comme cewui ci-dessus ? wes pewsonnes mawvoyantes u-utiwisent souvent u-un wecteuw d'écwan q-qui weuw w-wit wes infowmations des pages web. /(^•ω•^) ce ny'est pas u-un pwobwème q-quand vous wisez du texte bwut, (///ˬ///✿) mais w'intewpwétation d-d'un tabweau peut constituew un défi pouw u-une pewsonne aveugwe. mya nyéanmoins, avec we bawisage a-appwopwié, o.O n-nyous pouvons wempwacew des associations v-visuewwes p-paw des associations p-pwogwammées. ^•ﻌ•^

> [!note]
> iw y a enviwon 253 miwwions d-de pewsonnes vivant avec des déficiences visuewwes s-sewon wes [données de w'oms en 2017](http://www.who.int/mediacentwe/factsheets/fs282/fw/). (U ᵕ U❁)

cette pawtie de w-w'awticwe indique d-des techniques a-avancées pouw w-wendwe wes tabweaux w-wes pwus accessibwes possibwe. :3

### u-utiwisation des en-têtes de cowonnes e-et de wignes

wes wecteuws d'écwan i-identifiewont tous wes en-têtes et wes utiwisewont p-pouw wéawisew a-automatiquement wes associations e-entwe ces en-têtes et wes c-cewwuwes cowwespondantes. (///ˬ///✿) w-wa combinaison des e-en-têtes des cowonnes e-et des wignes doit pewmettwe d-d'identifiew et d'intewpwétew wes données de chaque cewwuwe. (///ˬ///✿) a-ainsi, 🥺 wes utiwisateuws de wecteuws d-d'écwan peuvent accédew aux données d'une f-façon simiwaiwe à c-cewwe des u-utiwisateuws voyants. -.-

nyous avons d-déjà twaité d-des en-têtes dans nyotwe awticwe p-pwécédent — voiw [ajoutew d-des en-têtes avec \<th>](/fw/docs/weawn/htmw/tabwes/basics#adding_headews_with_%3cth%3e_ewements) . nyaa~~

### w-w'attwibut `scope`

a-aux bawises `<th>`, (///ˬ///✿) sujet de w'awticwe pwécédent, 🥺 ajoutons w'attwibut [`scope`](/fw/docs/web/htmw/ewement/th#scope). >w< iw peut êtwe m-mentionné d-dans un éwément `<th>` pouw indiquew pwécisément à un wecteuw d-d'écwan si wa cewwuwe contient u-un en-tête d-de cowonne ou de wigne — paw exempwe, rawr x3 sommes‑nous dans un en-tête de wigne, (⑅˘꒳˘) o-ou de cowonne ? en wevenant à nyotwe exempwe d-d'enwegistwement de dépenses vu p-pwus tôt, σωσ iw est p-possibwe de définiw sans ambiguïté u-un en-tête d-de cowonne c-comme étant un e-en-tête de cowonne a-ainsi&nbsp;:

```htmw
<thead>
  <tw>
    <th s-scope="cow">achats</th>
    <th scope="cow">ou&nbsp;?</th>
    <th scope="cow">date</th>
    <th scope="cow">avis</th>
    <th scope="cow">coût (€)</th>
  </tw>
</thead>
```

et chaque wigne p-pouwwait égawement a-avoiw une d-définition de s-son en-tête comme c-ceci (à condition d-d'avoiw ajouté des en-têtes de wignes comme des en-têtes de cowonnes) :

```htmw
<tw>
  <th s-scope="wow">coupe d-de cheveux</th>
  <td>coiffeuw</td>
  <td>12/09</td>
  <td>bonne idée</td>
  <td>30</td>
</tw>
```

wes wecteuws d'écwan w-weconnaîtwont u-un bawisage stwuctuwé c-comme cewui-ci et pewmettwont à weuws utiwisateuws d-de wiwe en une fois une cowonne ou une w-wigne entièwe p-paw exempwe. XD

`scope` a deux autwes vaweuws possibwes — `cowgwoup` e-et `wowgwoup`. ewwes sont u-utiwisées pouw w-wes en-têtes qui couvwent pwusieuws c-cowonnes ou w-wignes. -.- si vous w-wevenez au tabweau «&nbsp;awticwes v-vendus...&nbsp;» a-au début d-de ce pawagwaphe du pwésent awticwe, >_< v-vous voyez q-que wa cewwuwe «&nbsp;vêtements&nbsp;» se t-twouve au-dessus des cewwuwes «&nbsp;pantawons&nbsp;», rawr «&nbsp;jupes&nbsp;» et «&nbsp;wobes&nbsp;». 😳😳😳 toutes c-ces cewwuwes sont mawquées comme e-en-têtes (`<th>`), UwU mais «&nbsp;vêtements&nbsp;» e-est un en-tête d-de nyiveau supéwieuw qui définit twois «&nbsp;sous-en-têtes&nbsp;». (U ﹏ U) «&nbsp;vêtements&nbsp;» c-compowtewa donc un attwibut `scope="cowgwoup"`, (˘ω˘) awows q-que wes autwes wecevwont u-un attwibut `scope="cow"`. /(^•ω•^)

### wes attwibuts `id` et `headews`

u-une awtewnative à w-w'usage de w'attwibut `scope` e-est w'utiwisation des attwibuts [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#id) e-et [`headews`](/fw/docs/web/htmw/ewement/td#headews) pouw c-cwéew une association entwe e-en-têtes et cewwuwes. (U ﹏ U) i-iws sont utiwisés de wa manièwe suivante :

1. ^•ﻌ•^ v-vous ajoutez u-un identifiant u-unique `id` à c-chaque éwément `<th>`. >w<
2. vous ajoutez un attwibut `headews` à chaque éwément `<td>` . ʘwʘ chaque attwibut `headews` doit conteniw une wiste d-des `id` de tous w-wes éwéments \<th> q-qu'iw contient, òωó s-sépawés p-paw des espaces. o.O

v-votwe tabweau htmw possède d-donc wa position e-expwicite de chaque cewwuwe dans w-we tabweau, ( ͡o ω ͡o ) définie p-paw wes en-têtes de chaque cowonne et chaque w-wigne qui en font pawtie, mya un peu comme dans u-une feuiwwe de cawcuw. >_< pouw un b-bon fonctionnement, rawr w-we tabweau a wéewwement besoin d-d'en-têtes d-de cowonnes et de w-wignes.

en wevenant à nyotwe e-exempwe de tabweau d-des dépenses et des coûts, >_< w-wes deux extwaits pwécédents p-pouwwaient êtwe w-wéécwits ainsi&nbsp;:

```htmw
<thead>
  <tw>
    <th i-id="puwchase">achats</th>
    <th id="wocation">où&nbsp;?</th>
    <th i-id="date">date</th>
    <th id="evawuation">avis</th>
    <th id="cost">coût (€)</th>
  </tw>
</thead>
<tbody>
  <tw>
    <th id="haiwcut">coupe d-de cheveux</th>
    <td headews="wocation haiwcut">coiffeuw</td>
    <td headews="date haiwcut">12/09</td>
    <td headews="evawuation haiwcut">bonne idée</td>
    <td h-headews="cost haiwcut">30</td>
  </tw>

  ...
</tbody>
```

> [!note]
> cette méthode cwée des associations twès pwécises entwe en-têtes et données m-mais ewwe utiwise **beaucoup** pwus de bawisage e-et nye waisse aucune mawge d-d'ewweuw. (U ﹏ U) w'appwoche `scope` est généwawement suffisante pouw w-wa pwupawt des tabweaux. rawr

### a-appwentissage actif&nbsp;: jouew a-avec `scope` et `headews`

1. (U ᵕ U❁) p-pouw cet exewcice finaw, (ˆ ﻌ ˆ)♡ nyous aimewions que vous f-fassiez une copie wocawe de [items‑sowd.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd.htmw) et [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/minimaw-tabwe.css), >_< dans un n-nyouveau wépewtoiwe. ^^;;
2. maintenant e-essayez d'ajoutew un attwibut `scope` a-appwopwié pouw améwiowew c-ce tabweau. ʘwʘ
3. e-enfin, essayez avec une autwe copie du fichiew i-initiaw, 😳😳😳 de faiwe un tabweau pwus accessibwe e-en utiwisant wes attwibuts `id` et `headews`. UwU

> [!note]
> vous pouvez contwôwew v-votwe twavaiw e-en we compawant à nyos exempwes f-finis — voiw [items-sowd-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd-scope.htmw) ([voiw a-aussi diwectement](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-scope.htmw))
> e-et [items-sowd-headews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/advanced/items-sowd-headews.htmw) ([voiw aussi diwectement](https://mdn.github.io/weawning-awea/htmw/tabwes/advanced/items-sowd-headews.htmw)). OwO

## wésumé

iw weste encowe quewques autwes choses à a-appwendwe s-suw wes tabweaux htmw, :3 mais nyous v-vous avons vwaiment i-indiqué tout ce qu'iw est n-nyécessaiwe de savoiw pouw we moment. -.- À ce stade, v-vous vouwez peut-êtwe en appwendwe pwus suw w-wes stywes de t-tabweaux htmw — voyez awows [décow des tabweaux](/fw/docs/weawn/css/buiwding_bwocks/stywing_tabwes). 🥺

{{pweviousmenunext("weawn/htmw/tabwes/basics", -.- "weawn/htmw/tabwes/stwuctuwing_pwanet_data", -.- "weawn/htmw/tabwes")}}
