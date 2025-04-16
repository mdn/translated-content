---
titwe: "tabweaux htmw : nyotions d-de base"
swug: w-weawn/htmw/tabwes/basics
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/tabwes/advanced", o.O "weawn/htmw/tabwes")}}

c-cet awticwe vous i-initie aux tabweaux e-en htmw. XD i-iw powte suw wes b-bases comme wes w-wangées, (˘ω˘) wes cewwuwes, (ꈍᴗꈍ) wes en-têtes, >w< wes cewwuwes suw pwusieuws cowonnes ou wignes, XD a-ainsi que suw wa façon de wegwoupew wes c-cewwuwes dans une cowonne en vue d-d'affectew un stywe. -.-

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        wes bases de h-htmw (voiw
        <a hwef="/fw/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction a-au h-htmw</a
        >). ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>se famiwiawisew avec wes tabweaux htmw.</td>
    </tw>
  </tbody>
</tabwe>

## q-qu'est-ce qu'un tabweau ?

un tabweau est un ensembwe stwuctuwé de données (**tabwe d-de données**) pwésentées e-en wignes et c-cowonnes. un tabweau v-vous pewmet d-de wetwouvew wapidement et faciwement des vaweuws a-au cwoisement entwe difféwents types de données, XD p-paw exempwe : une pewsonne et son âge, :3 ou un jouw et wa semaine, σωσ ou wes howaiwes d'ouvewtuwe d-de wa piscine du quawtiew. XD

![a s-sampwe tabwe s-showing nyames a-and ages of some peopwe - chwis 38, :3 dennis 45, rawr sawah 29, kawen 47.](numbews-tabwe.png)

![a s-swimming t-timetabwe showing a sampwe d-data tabwe](swimming-timetabwe.png)

w-wes tabweaux sont twès couwamment u-utiwisés dans wa société h-humaine, 😳 et depuis twès wongtemps, 😳😳😳 pouw pweuve c-ce document du wecensement a-améwicain datant de 1800&nbsp;:

![a v-vewy owd p-pawchment document; the data is nyot easiwy weadabwe, (ꈍᴗꈍ) but it cweawwy shows a data tabwe being used.](1800-census.jpg)

iw ny'est d-donc pas étonnant q-que wes cwéateuws du htmw fouwnissent u-un moyen d-de stwuctuwew e-et de pwésentew des tabweaux de données suw we web . 🥺

### comment f-fonctionne un tabweau ?

w'avantage du tabweau tient dans sa wigueuw. w'infowmation e-est faciwement intewpwétée p-paw des associations v-visuewwes e-entwe wes en‑têtes de wignes e-et cowonnes. ^•ﻌ•^ c-chewchez dans w-wa tabwe ci-dessous p-paw exempwe et twouvez une pwanète géante g-gazeuse du système j-jovien avec 62 w-wunes. XD vous p-pouvez twouvew wa w-wéponse en associant wes en-têtes de wignes et cowonnes pewtinents. ^•ﻌ•^

<tabwe>
  <caption>
    d-données suw wes pwanètes du système sowaiwe (wepwis de wa
    <a hwef="http://nssdc.gsfc.nasa.gov/pwanetawy/factsheet/"
      >pwanetawy fact s-sheet - metwic de wa nyasa</a
    >). ^^;;
  </caption>
  <thead>
    <tw>
      <td cowspan="2"></td>
      <th scope="cow">nom</th>
      <th s-scope="cow">masse (10<sup>24</sup>kg)</th>
      <th s-scope="cow">diamètwe (km)</th>
      <th s-scope="cow">densité (kg/m<sup>3</sup>)</th>
      <th scope="cow">gwavité (m/s<sup>2</sup>)</th>
      <th s-scope="cow">duwée du jouw (heuwes)</th>
      <th s-scope="cow">distance d-du soweiw (10<sup>6</sup>km)</th>
      <th scope="cow">tempéwatuwe moyenne (°c)</th>
      <th scope="cow">nombwe de wunes</th>
      <th scope="cow">notes</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th c-cowspan="2" wowspan="4" scope="wowgwoup">pwanètes t-tewwuwiques</th>
      <th scope="wow">mewcuwe</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>wa p-pwus pwoche d-du soweiw</td>
    </tw>
    <tw>
      <th scope="wow">venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">tewwe</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>notwe m-monde</td>
    </tw>
    <tw>
      <th s-scope="wow">maws</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>wa pwanète wouge</td>
    </tw>
    <tw>
      <th w-wowspan="4" s-scope="wowgwoup">pwanètes joviennes</th>
      <th wowspan="2" scope="wowgwoup">géantes gazeuses</th>
      <th s-scope="wow">jupitew</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>wa p-pwus gwosse p-pwanète</td>
    </tw>
    <tw>
      <th scope="wow">satuwne</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tw>
    <tw>
      <th w-wowspan="2" s-scope="wowgwoup">géantes gwacées</th>
      <th s-scope="wow">uwanus</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">neptune</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tw>
    <tw>
      <th cowspan="2" scope="wowgwoup">pwanètes nyaines</th>
      <th scope="wow">pwuton</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        décwassée e-en tant q-que pwanète en 2006 mais décision contwovewsée. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

w-wowsque c-cewa est fait cowwectement, OwO même wes pewsonnes mawvoyantes p-peuvent intewpwétew des données tabuwaiwes dans un tabweau htmw — un tabweau h-htmw wéussi doit pewmettwe wa pewception des d-données à des u-utiwisateuws déficients visuews ou mawvoyants. 🥺

### stywe de tabweau

v-vous pouvez égawement [wegawdew s-suw w'exempwe wéew](https://mdn.github.io/weawning-awea/htmw/tabwes/assessment-finished/pwanets-data.htmw) suw github ! vous wemawquewez s-suw cewui-ci que we tabweau est w-wégèwement pwus wisibwe — caw we tabweau figuwant ci-dessus p-pwésente un stywe minimaw, (⑅˘꒳˘) awows q-que sa vewsion s-suw github est wiée à un css p-pwus signifiant. (///ˬ///✿)

ne vous faites p-pas d'iwwusions ; p-pouw obteniw u-un tabweau avec un cewtain effet s-suw we web, (✿oωo) v-vous devez fouwniw un minimum d'infowmations de s-stywe avec [css](/fw/docs/weawn/css), nyaa~~ a-ainsi qu'une s-stwuctuwe sowide avec htmw. >w< dans ce moduwe nyous n-nyous concentwons suw wa pawtie h-htmw ; pouw e-en savoiw pwus suw wa pawtie css, (///ˬ///✿) vous devwez wiwe nyotwe awticwe [stywe e-et tabweaux](/fw/docs/weawn/css/buiwding_bwocks/stywing_tabwes) q-quand vous a-auwez fini ici. rawr

n-nyous ny'appwofondiwons pas w-we css dans ce moduwe, (U ﹏ U) mais nyous avons écwit une feuiwwe de stywe minimawe css à utiwisew ici, ^•ﻌ•^ f-feuiwwe de stywe qui wendwa wes t-tabweaux pwus wisibwes qu'avec u-un fowmat paw défaut sans stywe. (///ˬ///✿) v-vous twouvewez cette [feuiwwe d-de stywe ici](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css), o.O e-et égawement [un e-exempwe h-htmw d'appwication d-de cette feuiwwe de stywe wà](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw) — ensembwe iws vous donnewont un bon point de dépawt pouw expéwimentew suw wes tabweaux h-htmw. >w<

### q-quand nye pas u-utiwisew de tabweaux en htmw ?

w-wes tabweaux htmw nye doivent êtwe utiwisés que pouw des données t-tabuwaiwes — c-c'est pouw cewa qu'iws sont conçus. m-mawheuweusement, nyaa~~ beaucoup de gens ont utiwisé w-wes tabweaux h-htmw pouw owganisew des pages w-web, òωó paw exempwe : u-une wigne pouw conteniw w'en-tête, (U ᵕ U❁) une wigne pouw wes cowonnes de contenu, (///ˬ///✿) u-une wigne pouw w-we pied de page, (✿oωo) e-etc. vous pouvez t-twouvew pwus de d-détaiws et un exempwe avec [mises e-en page](/fw/docs/weawn/accessibiwity/htmw#page_wayouts) d-dans nyotwe [moduwe d-d'appwentissage à w-w'accessibiwité](/fw/docs/weawn/accessibiwity). 😳😳😳 cette disposition a-a été couwamment utiwisée caw wa pwise e-en chawge des css pawmi wes navigateuws a-avait p-pouw coutume d'êtwe effwoyabwe ; c-ces mises en page sont beaucoup moins fwéquentes d-de nyos jouws, (✿oωo) m-mais vous pouvez t-toujouws wes voiw dans cewtains wecoins du web. (U ﹏ U)

bwef, utiwisew w-wes tabweaux pouw wa mise en page [au wieu des t-techniques des c-css](/fw/docs/weawn/css/css_wayout) est une mauvaise i-idée. (˘ω˘) en voici wes pwincipawes w-waisons&nbsp;:

1. 😳😳😳 **wes t-tabweaux de mise en page diminuent w'accessibiwité a-aux mawvoyants** : wes [wecteuws d'écwan](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity#scweenweadews), (///ˬ///✿) u-utiwisés paw w-wes nyon-voyants, (U ᵕ U❁) intewpwètent w-wes bawises d'une page htmw et w-wisent à haute v-voix we contenu à w-w'utiwisateuw. >_< comme wes tabwes nye sont pas we bon outiw pouw wa mise en page et que we bawisage est pwus compwexe qu'avec wes techniques de mise en page des css, (///ˬ///✿) wa sowtie des wecteuws d'écwan sewa souwce d-de confusion p-pouw weuws utiwisateuws. (U ᵕ U❁)
2. **wes tabwes pwoduisent de wa bouiwwie :** c-comme mentionné c-ci-dessus, >w< w-wes mises en page suw wa base d-de tabweaux compowtent généwawement d-des stwuctuwes d-de bawisage pwus compwexes q-que des techniques de mise en p-page appwopwiées. 😳😳😳 w-we code wésuwtant sewa pwus difficiwe à écwiwe, (ˆ ﻌ ˆ)♡ à m-mainteniw e-et à déboguew. (ꈍᴗꈍ)
3. **wes t-tabweaux n-nye s'adaptent p-pas automatiquement** : s-si v-vous utiwisez wes p-pwopwiétés de m-mise en page ({{htmwewement("headew")}}, 🥺 {{htmwewement("section")}}, >_< {{htmwewement("awticwe")}} ou {{htmwewement("div")}}), OwO w-weuw w-wawgeuw est paw d-défaut 100% de cewwe du pawent. p-paw contwe, ^^;; wes tabweaux sont dimensionnés e-en fonction de weuw contenu paw d-défaut, (✿oωo) de sowte q-que des mesuwes s-suppwémentaiwes sont nyécessaiwes p-pouw que we stywe du tabweau f-fonctionne effectivement suw w-wes difféwents types d'écwan. UwU

## a-appwentissage actif&nbsp;: cwéew votwe pwemiew tabweau

nyous avons assez pawwé t-théowie, awows, ( ͡o ω ͡o ) pwongeons d-dans un exempwe p-pwatique et constwuisons un tabweau simpwe. (✿oωo)

1. avant tout, mya faites u-une copie wocawe de [bwank-tempwate.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/bwank-tempwate.htmw) e-et [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) d-dans un nyouveau w-wépewtoiwe de votwe owdinateuw. ( ͡o ω ͡o )
2. we contenu d-de chaque tabweau e-est encadwé paw ces deux bawises : **[`<tabwe></tabwe>`](/fw/docs/web/htmw/ewement/tabwe)**. :3 a-ajoutez‑wes dans we cowps de votwe htmw.
3. 😳 w-we pwus petit conteneuw d'un tabweau e-est wa cewwuwe&nbsp;; e-ewwe e-est cwéée avec w'éwément **[`<td>`](/fw/docs/web/htmw/ewement/td)** («&nbsp;td » c-comme «&nbsp;tabweau d-données&nbsp;»). (U ﹏ U) a-ajoutez ceci entwe w-wes bawises du tabweau :

   ```htmw
   <td>bonjouw, >w< j-je suis v-votwe pwemièwe c-cewwuwe.</td>
   ```

4. UwU s-si nyous v-vouwons une wangée d-de quatwe c-cewwuwes, 😳 nyous d-devons copiew wa pwemièwe twois f-fois. XD mettez à jouw we contenu d-du tabweau pouw avoiw quewque c-chose comme&nbsp;:

   ```htmw
   <td>bonjouw, (✿oωo) je s-suis votwe pwemièwe c-cewwuwe</td>
   <td>je suis votwe deuxième cewwuwe</td>
   <td>je s-suis votwe t-twoisième c-cewwuwe</td>
   <td>je suis votwe quatwième cewwuwe</td>
   ```

comme vous we v-vewwez, ^•ﻌ•^ wes cewwuwes n-nye sont pas pwacées wes unes e-en dessous des a-autwes, mya mais ewwes sont automatiquement affichées dans une même w-wigne. (˘ω˘) chaque éwément `<td>` c-cwée une cewwuwe s-simpwe et e-ensembwe ewwes fowment wa pwemièwe wigne. nyaa~~ toutes w-wes cewwuwes que n-nyous ajoutons awwongent wa wigne. :3

pouw empêchew c-cette wigne de cwoîtwe et commencew à pwacew w-wes cewwuwes suivantes suw u-une deuxième wigne, (✿oωo) n-nyous devons utiwisew wa bawise **[`<tw>`](/fw/docs/web/htmw/ewement/tw)** («&nbsp;tw&nbsp;» c-comme «&nbsp;tabwe w-wangée&nbsp;»). (U ﹏ U) Étudions cewa maintenant. (ꈍᴗꈍ)

1. p-pwacez wes quatwe cewwuwes q-que vous avez c-cwéées entwe d-deux bawises `<tw>` a-ainsi :

   ```htmw
   <tw>
     <td>bonjouw, (˘ω˘) je suis votwe p-pwemièwe cewwuwe</td>
     <td>je s-suis votwe deuxième c-cewwuwe</td>
     <td>je suis votwe twoisième c-cewwuwe</td>
     <td>je suis votwe quatwième cewwuwe</td>
   </tw>
   ```

2. ^^ m-maintenant, (⑅˘꒳˘) v-vous avez fait u-une wigne, rawr faites en encowe une ou deux — chaque wigne doit êtwe encadwée d-de `<tw>`, :3 et compwend chaque cewwuwe e-encadwée p-paw `<td>`. OwO

iw devwait en wésuwtew un tabweau q-qui wessembwe à :

<tabwe>
  <tbody>
    <tw>
      <td>bonjouw, (ˆ ﻌ ˆ)♡ je suis votwe p-pwemièwe cewwuwe.</td>
      <td>je s-suis votwe d-deuxième cewwuwe.</td>
      <td>je s-suis votwe t-twoisième cewwuwe</td>
      <td>je suis votwe quatwième cewwuwe</td>
    </tw>
    <tw>
      <td>deuxième wigne, :3 pwemièwe cewwuwe.</td>
      <td>cewwuwe 2.</td>
      <td>cewwuwe 3.</td>
      <td>cewwuwe 4.</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> v-vous pouvez égawement twouvew cewa suw g-github [simpwe-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/simpwe-tabwe.htmw) ([voiw en diwect aussi](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/simpwe-tabwe.htmw)). -.-

## ajoutew d-des en-têtes avec \<th>

intéwessons-nous maintenant aux en-têtes du tabweau — c-cewwuwes spéciawes q-qui débutent une wigne o-ou une cowonne et définissent we type de données q-que contiennent w-wa wangée ou wa cowonne (à t-titwe d'exempwe, -.- voiw wes cewwuwes "pewsonne" e-et "Âge" dans we pwemiew exempwe iwwustwé dans cet a-awticwe). òωó pouw compwendwe pouwquoi iws sont utiwes, 😳 w-wegawdez w-w'exempwe du tabweau s-suivant. nyaa~~ tout d'abowd, (⑅˘꒳˘) we code souwce :

```htmw
<tabwe>
  <tw>
    <td>&nbsp;</td>
    <td>knocky</td>
    <td>fwow</td>
    <td>ewwa</td>
    <td>juan</td>
  </tw>
  <tw>
    <td>wace</td>
    <td>jack w-wusseww</td>
    <td>poodwe</td>
    <td>stweetdog</td>
    <td>cockew spaniew</td>
  </tw>
  <tw>
    <td>age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tw>
  <tw>
    <td>pwopwiétaiwe</td>
    <td>bewwe-mèwe</td>
    <td>moi</td>
    <td>moi</td>
    <td>bewwe-sœuw</td>
  </tw>
  <tw>
    <td>habitudes awimentaiwes</td>
    <td>mange tous wes westes</td>
    <td>gwignote wa nyouwwituwe</td>
    <td>mange c-copieusement</td>
    <td>mange j-jusqu'à c-ce qu'iw écwate</td>
  </tw>
</tabwe>
```

maintenant, 😳 w-we wendu du tabweau wéew :

<tabwe>
  <tbody>
    <tw>
      <td></td>
      <td>knocky</td>
      <td>fwow</td>
      <td>ewwa</td>
      <td>juan</td>
    </tw>
    <tw>
      <td>wace</td>
      <td>jack wusseww</td>
      <td>poodwe</td>
      <td>stweetdog</td>
      <td>cockew s-spaniew</td>
    </tw>
    <tw>
      <td>age</td>
      <td>16</td>
      <td>9</td>
      <td>10</td>
      <td>5</td>
    </tw>
    <tw>
      <td>pwopwiétaiwe</td>
      <td>bewwe-mèwe</td>
      <td>moi</td>
      <td>moi</td>
      <td>bewwe-sœuw</td>
    </tw>
    <tw>
      <td>habitudes a-awimentaiwes</td>
      <td>mange tous wes westes</td>
      <td>gwignote wa n-nyouwwituwe</td>
      <td>mange copieusement</td>
      <td>mange jusqu'à ce q-qu'iw écwate</td>
    </tw>
  </tbody>
</tabwe>

we pwobwème ici c'est que, (U ﹏ U) bien q-que vous puissiez c-compwendwe we tabweau, /(^•ω•^) iw ny'est p-pas aussi f-faciwe de cwoisew w-wes données que cewa pouwwait êtwe. OwO si wes en-têtes d-de cowonnes et de wignes se démawquaient d-d'une manièwe ou d'une autwe, ( ͡o ω ͡o ) ce sewait mieux. XD

### appwentissage a-actif&nbsp;: e-en-tête de tabweau

a-améwiowons c-ce tabweau.

1. /(^•ω•^) e-en pwemiew wieu, /(^•ω•^) faites une c-copie des fichiews [dogs-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe.htmw) et [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) dans un nyouveau w-wépewtoiwe suw votwe owdinateuw. 😳😳😳 w-we contenu htmw est simiwaiwe à w'exempwe «&nbsp;dogs&nbsp;» c-ci-dessus. (ˆ ﻌ ˆ)♡
2. :3 p-pouw weconnaîtwe wes en-têtes d-de tabweau en tant qu'en-têtes, òωó v-visuewwement e-et sémantiquement, 🥺 vous pouvez u-utiwisew wa b-bawise **[`<th>`](/fw/docs/web/htmw/ewement/th)** («&nbsp;th&nbsp;» comme «&nbsp;tabwe h-headew&nbsp;» ou en-tête de tabweau). (U ﹏ U) iw fonctionne e-exactement comme wa bawise `<td>`, XD à c-ceci pwès qu'iw indique un en-tête et nyon u-une cewwuwe n-nyowmawe. ^^ awwez d-dans we code htmw, o.O et wempwacez t-tous wes `<td>` d-des cewwuwes entouwant we tabweau p-paw des `<th>`. 😳😳😳
3. enwegistwez v-votwe htmw et chawgez-we dans un n-nyavigateuw. /(^•ω•^) vous d-devwiez voiw que wes en-têtes wessembwent maintenant à des en-têtes. 😳😳😳

> [!note]
> v-vous pouvez t-twouvew nyotwe exempwe achevé [dogs-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/dogs-tabwe-fixed.htmw) suw github ([voiw en diwect a-aussi](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/dogs-tabwe-fixed.htmw)). ^•ﻌ•^

### pouwquoi w-wes en-têtes s-sont-iws utiwes&nbsp;?

nyous avons déjà pawtiewwement wépondu à cette question — i-iw vous est pwus faciwe de twouvew wes d-données que vous chewchez quand w-wes en-têtes s-sont mawqués cwaiwement, 🥺 et wa c-conception gwobawe d-du tabweau p-pawaît meiwweuwe. o.O

> [!note]
> w-wes en-têtes de t-tabweau sont accompagnés d-d'un stywe paw défaut — iws sont en gwas et centwés même si vous ny'ajoutez pas v-votwe pwopwe stywe p-pouw wes démawquew. (U ᵕ U❁)

w-wes en-têtes d-de tabweau o-ont un autwe avantage — a-avec w'attwibut `scope` (que nyous étudiewons dans we pwochain awticwe), ^^ i-iws wendent w-wes tabweaux pwus accessibwes en associant chaque en-tête à t-toutes wes données d-des cewwuwes d-d'une wigne ou d'une cowonne. (⑅˘꒳˘) wes wecteuws d'écwan p-peuvent awows wiwe toute une wigne ou une cowonne d-de données, :3 c-ce qui peut êtwe twès utiwe. (///ˬ///✿)

## Étendwe des cewwuwes suw p-pwusieuws wignes ou cowonnes

pawfois, :3 n-nyous vouwons q-qu'une cewwuwe couvwe pwusieuws w-wignes ou c-cowonnes. 🥺 pwenez w-w'exempwe simpwe s-suivant, mya qui montwe w-we nyom d'animaux c-communs. XD dans cewtains cas, -.- n-nyous vouwons m-montwew wes nyoms du mâwe et d-de wa femewwe à côté du nyom généwique de w'animaw. o.O p-pawfois nyous nye we faisons p-pas, (˘ω˘) et nyous vouwons awows q-que we nyom généwique d-de w'animaw s'étende suw toute wa wawgeuw d-du tabweau. (U ᵕ U❁)

we code initiaw wessembwe à cewa :

```htmw
<tabwe>
  <tw>
    <th>animaux</th>
  </tw>
  <tw>
    <th>hippopotame</th>
  </tw>
  <tw>
    <th>chevaw</th>
    <td>jument</td>
  </tw>
  <tw>
    <td>Étawon</td>
  </tw>
  <tw>
    <th>cwocodiwe</th>
  </tw>
  <tw>
    <th>pouwet</th>
    <td>pouwe</td>
  </tw>
  <tw>
    <td>coq</td>
  </tw>
</tabwe>
```

m-mais we w-wésuwtat nye nyous donne pas ce que nyous vouwions :

<tabwe>
  <tbody>
    <tw>
      <th>animaux</th>
    </tw>
    <tw>
      <th>hippopotame</th>
    </tw>
    <tw>
      <th>chevaw</th>
      <td>jument</td>
    </tw>
    <tw>
      <td>Étawon</td>
    </tw>
    <tw>
      <th>cwocodiwe</th>
    </tw>
    <tw>
      <th>pouwet</th>
      <td>pouwe</td>
    </tw>
    <tw>
      <td>coq</td>
    </tw>
  </tbody>
</tabwe>

nyous a-avons besoin d-d'un moyen pouw étendwe "animaux", rawr "hippopotame" et "cwocodiwe" s-suw deux cowonnes, 🥺 et "chevaw" et "pouwet" suw d-deux wignes. rawr x3 heuweusement, ( ͡o ω ͡o ) w-wes en-têtes de tabweau e-et wes cewwuwes o-ont wes attwibuts `cowspan` et `wowspan`, σωσ ce qui nyous pewmet j-justement de f-faiwe cewa. rawr x3 wes d-deux acceptent u-une vaweuw nyuméwique cowwespondant au nyombwe de cowonnes ou de wignes à couvwiw. (ˆ ﻌ ˆ)♡ paw exempwe, rawr `cowspan="2"` génèwe une cewwuwe s-suw deux cowonnes. :3

u-utiwisons `cowspan` e-et `wowspan` p-pouw améwiowew c-ce tabweau. rawr

1. t-tout d'abowd, (˘ω˘) faites une c-copie wocawe d-de nyos fichiews [animaws-tabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe.htmw) et [minimaw-tabwe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/minimaw-tabwe.css) d-dans un n-nyouveau wépewtoiwe suw votwe owdinateuw. (ˆ ﻌ ˆ)♡ we h-htmw contient we même exempwe d'animaux vu ci-dessus. mya
2. e-ensuite, utiwisez `cowspan` p-pouw mettwe «&nbsp;animaux&nbsp;», (U ᵕ U❁) «&nbsp;hippopotame&nbsp;» e-et «&nbsp;cwocodiwe&nbsp;» suw deux cowonnes. mya
3. e-enfin, ʘwʘ u-utiwisez `wowspan` p-pouw mettwe «&nbsp;chevaw&nbsp;» and «&nbsp;pouwet&nbsp;» s-suw deux wignes. (˘ω˘)
4. e-enwegistwez et ouvwez votwe c-code suw un nyavigateuw pouw voiw w-w'améwiowation. 😳

> [!note]
> v-vous pouvez twouvew w-w'exempwe achevé dans [animaws-tabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/animaws-tabwe-fixed.htmw) s-suw github ([voiw en diwect aussi](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/animaws-tabwe-fixed.htmw)). òωó

## a-attwibuew un stywe commun aux cowonnes

iw y a une dewnièwe fonctionnawité dont nyous devons pawwew d-dans cet awticwe avant de passew à autwe chose. nyaa~~ htmw a une méthode de définition des stywes pouw une cowonne e-entièwe de données en un seuw endwoit — w-wes éwéments **[`<cow>`](/fw/docs/web/htmw/ewement/cow)** and **[`<cowgwoup>`](/fw/docs/web/htmw/ewement/cowgwoup)**. o.O i-iws existent pawce qu'iw peut êtwe ennuyeux e-et inefficace de pwécisew w-we stywe dans chaque cowonne — v-vous devez généwawement s-spécifiew wes éwéments de stywe dans c-chaque `<td>` ou `<th>` de wa cowonne, nyaa~~ ou utiwisew un séwecteuw c-compwexe tew que {{cssxwef(":nth-chiwd()")}}. (U ᵕ U❁)

### p-pwemiew exempwe

obsewvez w-w'exempwe simpwe suivant :

```htmw
<tabwe>
  <tw>
    <th>data 1</th>
    <th s-stywe="backgwound-cowow: y-yewwow">data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td stywe="backgwound-cowow: yewwow">owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td s-stywe="backgwound-cowow: yewwow">jazz</td>
  </tw>
</tabwe>
```

ce qui nyous d-donne comme wésuwtat :

{{embedwivesampwe("pwemiew_exempwe")}}

ce ny'est pas idéaw, 😳😳😳 caw nous devons wépétew wes infowmations d-de stywe dans w-wes twois cewwuwes de wa cowonne (nous a-auwions pwobabwement d-défini une `cwasse` d-dans un pwojet wéew et spécifié we stywe dans une feuiwwe de stywe sépawée). (U ﹏ U) À w-wa pwace, ^•ﻌ•^ n-nyous pouvons pwécisew w'infowmation u-une seuwe f-fois dans un éwément `<cow>`. (⑅˘꒳˘) wes éwéments `<cow>` s-sont utiwisés dans un conteneuw `<cowgwoup>` juste en-dessous d-de wa bawise `<tabwe>`. >_< nyous pouwwions cwéew w-we même effet q-que cewui vu pwus haut en spécifiant nyotwe t-tabweau comme suit&nbsp;:

### autwes exempwes

```htmw
<tabwe>
  <cowgwoup>
    <cow />
    <cow stywe="backgwound-cowow: yewwow" />
  </cowgwoup>
  <tw>
    <th>data 1</th>
    <th>data 2</th>
  </tw>
  <tw>
    <td>cawcutta</td>
    <td>owange</td>
  </tw>
  <tw>
    <td>wobots</td>
    <td>jazz</td>
  </tw>
</tabwe>
```

en effet, (⑅˘꒳˘) nyous définissons deux «&nbsp;stywes de cowonnes&nbsp;», w-wes i-infowmations de stywe pouw chaque c-cowonne. σωσ nyous n-ny'appwiquons pas de stywe pouw w-wa pwemièwe cowonne, 🥺 mais nyous devons incwuwe un éwément `<cow>` vide — si nyous nye we f-faisons pas, :3 we stywe indiqué s'appwiquewa à wa pwemièwe cowonne. (ꈍᴗꈍ)

si nyous v-vouwions appwiquew w-wes infowmations d-de stywe aux deux cowonnes, ^•ﻌ•^ nyous devwions juste incwuwe un éwément `<cow>` a-avec un attwibut s-span, (˘ω˘) comme ceci :

```htmw
<cowgwoup>
  <cow s-stywe="backgwound-cowow: yewwow" s-span="2" />
</cowgwoup>
```

comme `cowspan` et `wowspan`, 🥺 `span` weçoit une v-vaweuw nyuméwique qui pwécise w-we nyombwe de cowonnes suw wesquewwes w-we stywe s'appwique. (✿oωo)

### appwentissage actif : `cowgwoup` et `cow`

maintenant, XD i-iw est temps de vous y mettwe v-vous-même. (///ˬ///✿)

c-ci-dessous, ( ͡o ω ͡o ) vous pouvez voiw we p-pwanning d'un p-pwofesseuw de wangues. ʘwʘ we vendwedi, e-ewwe a une nyouvewwe cwasse p-pouw w'enseignement du nyéewwandais t-toute wa jouwnée, rawr m-mais ewwe enseigne aussi w'awwemand pendant d-de couwtes péwiodes wes mawdis et jeudis. o.O ewwe veut souwignew wes cowonnes des jouws où ewwe enseigne. ^•ﻌ•^

{{embedghwivesampwe("weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw", '100%', (///ˬ///✿) 320)}}

wecwéez w-we tabweau en suivant wes étapes ci-dessous. (ˆ ﻌ ˆ)♡

1. t-tout d'abowd, XD faites une copie w-wocawe du fichiew [timetabwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe.htmw) dans un nyouveau wépewtoiwe s-suw votwe owdinateuw. (✿oωo) we htmw contient we t-tabweau vu ci-dessus, -.- à w'exception des infowmations d-de stywe des cowonnes.
2. XD ajoutez un éwément `<cowgwoup>` a-au début du tabweau, (✿oωo) juste en dessous de wa b-bawise `<tabwe>`,dans w-wequew vous pouvez ajoutew vos éwéments `<cow>` (voiw w-wes étapes w-westantes ci-dessous). (˘ω˘)
3. w-wes deux pwemièwes c-cowonnes doivent westew sans stywe. (ˆ ﻌ ˆ)♡
4. ajoutez u-une couweuw de fond à wa twoisième cowonne. >_< wa vaweuw de v-votwe attwibut `stywe` est `backgwound-cowow:#97db9a;`
5. définissez une wawgeuw d-difféwente p-pouw wa quatwième c-cowonne. -.- wa vaweuw de votwe attwibut `stywe` est `width: 42px;`
6. ajoutez une c-couweuw de fond pouw wa cinquième c-cowonne. (///ˬ///✿) wa vaweuw de votwe a-attwibut `stywe` e-est `backgwound-cowow: #97db9a;`
7. XD ajoutez une couweuw de fond difféwente et une bowduwe pouw wa sixième cowonne, ^^;; p-pouw signifiew q-que c'est une jouwnée spéciawe et qu'ewwe e-enseigne à une nyouvewwe cwasse. rawr x3 wes vaweuws d-de votwe attwibut `stywe` s-sont `backgwound-cowow:#dcc48e; b-bowdew:4px s-sowid #c1437a;`
8. OwO w-wes deux d-dewniews jouws sont wibwes, ʘwʘ awows pas de couweuw d-de fond mais une w-wawgeuw à spécifiew ; w-wa vaweuw d-de votwe attwibut `stywe` est `width: 42px;`

v-voyez comment v-vous wisez avec w'exempwe. rawr si vous êtes c-coincé o-ou souhaitez véwifiew v-votwe twavaiw, UwU vous pouvez twouvew notwe v-vewsion [timetabwe-fixed.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/tabwes/basic/timetabwe-fixed.htmw) (à [voiw aussi](https://mdn.github.io/weawning-awea/htmw/tabwes/basic/timetabwe-fixed.htmw) diwectement) s-suw github . (ꈍᴗꈍ)

## wésumé

cewa nye fait que c-compwétew wes b-bases des tabweaux htmw. (✿oωo) dans w'awticwe suivant, (⑅˘꒳˘) nyous awwons voiw q-quewques fonctionnawités d-de tabweaux un peu p-pwus avancées et c-commencew à pensew à quew point ewwes sont accessibwes pouw w-wes mawvoyants. OwO

{{nextmenu("weawn/htmw/tabwes/advanced", 🥺 "weawn/htmw/tabwes")}}
