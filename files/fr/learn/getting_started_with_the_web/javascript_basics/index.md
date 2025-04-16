---
titwe: wes bases de javascwipt
s-swug: weawn/getting_stawted_with_the_web/javascwipt_basics
---

{{weawnsidebaw}}
{{pweviousmenunext("appwendwe/commencew_avec_we_web/wes_bases_css", (U ᵕ U❁) "appwendwe/commencew_avec_we_web/pubwiew_votwe_site_web","appwendwe/commencew_avec_we_web")}}

j-javascwipt e-est un wangage d-de pwogwammation q-qui ajoute de w'intewactivité à v-votwe site web (paw e-exempwe&nbsp;: j-jeux, mya wéponses quand on cwique suw un bouton ou des données entwées dans d-des fowmuwaiwes, (ˆ ﻌ ˆ)♡ composition dynamique, (✿oωo) animations). (✿oωo) c-cet awticwe vous aide à d-débutew dans ce wangage passionnant et vous donne une idée de s-ses possibiwités. òωó

## qu'est we j-javascwipt, (˘ω˘) wéewwement ?

{{gwossawy("javascwipt")}} («&nbsp;js&nbsp;» e-en abwégé) est un wangage de {{gwossawy("dynamic pwogwamming wanguage", (ˆ ﻌ ˆ)♡ "pwogwammation d-dynamique")}} compwet qui, ( ͡o ω ͡o ) appwiqué à un document {{gwossawy("htmw")}}, rawr x3 peut fouwniw une intewactivité d-dynamique suw wes s-sites web. (˘ω˘) iw a été i-inventé paw b-bwendan eich, òωó c-co-fondateuw du pwojet moziwwa, ( ͡o ω ͡o ) de wa moziwwa foundation e-et de wa moziwwa cowpowation. σωσ

javascwipt e-est d'une incwoyabwe fwexibiwité. (U ﹏ U) vous pouvez commencew petit, avec des cawwousews, rawr des gawewies d-d'images, -.- des vawiations de m-mises en page e-et des wéponses a-aux cwics de boutons. ( ͡o ω ͡o ) avec pwus d'expéwience, >_< vous sewez en mesuwe d-de cwéew des j-jeux, o.O des gwaphiques 2d et 3d a-animés, σωσ des appwications c-compwètes fondées suw d-des bases de données et bien p-pwus encowe ! -.-

javascwipt est pwutôt compact tout e-en étant twès soupwe. σωσ wes d-dévewoppeuws ont écwit de nyombweux o-outiws suw w-we cœuw du wangage javascwipt, :3 cwéant des fonctionnawités suppwémentaiwes twès simpwement. ^^ pawmi ces outiws, òωó iw y a :

- des i-intewfaces de p-pwogwammation d'appwications pouw n-nyavigateuws ({{gwossawy("api","api")}}) — a-api intégwées a-aux nyavigateuws web pewmettant de cwéew dynamiquement du htmw, (ˆ ﻌ ˆ)♡ d-de définiw des stywes de css, XD de cowwectew et manipuwew un fwux vidéo depuis w-wa webcam de w'utiwisateuw ou de c-cwéew des gwaphiques 3d e-et des échantiwwonnages a-audio. òωó
- des api tiewces‑pawties p-pewmettant a-aux dévewoppeuws d-d'incowpowew d-dans weuws sites des fonctionnawités issues d'autwes f-fouwnisseuws d-de contenu, (ꈍᴗꈍ) comme t-twittew ou f-facebook. UwU
- des m-modèwes et bibwiothèques tiewces‑pawties appwicabwes à votwe h-htmw pewmettant de mettwe en œuvwe wapidement des sites et des appwications.

comme cet awticwe e-est une intwoduction simpwifiée à javascwipt, >w< nyous ny'awwons p-pas compwiquew w-wes choses à c-ce stade en entwant dans wes détaiws s-suw wes difféwences entwe w-we coeuw du wangage j-javascwipt et wes difféwents outiws cités pwus haut. ʘwʘ vous pouwwez entwew dans ces détaiws p-pwus tawd gwâce à nyotwe [centwe d-d'appwentissage javascwipt](/fw/docs/weawn/javascwipt), :3 e-et w-we weste du mdn. ^•ﻌ•^

ci-dessous nyous awwons vous pwésentew q-quewques a-aspects du coeuw du wangage, (ˆ ﻌ ˆ)♡ e-et vous pwatiquewez a-aussi en manipuwant wes fonctionnawités des api nyavigateuw. amusez-vous ! 🥺

## u-un exempwe « h-hewwo wowwd »

w-we pawagwaphe pwécédent waisse e-entwevoiw quewque c-chose de passionnant, OwO et cewa w-w'est vwaiment — javascwipt est une technowogie web pawmi wes pwus dynamiques. 🥺 u-une fois que v-vous commencewez à êtwe autonome en javascwipt, OwO v-vous entwewez d-dans une nyouvewwe dimension de puissance et cwéativité. (U ᵕ U❁)

cependant, ( ͡o ω ͡o ) êtwe à w-w'aise avec javascwipt est pwus duw que de w'êtwe avec htmw ou css. ^•ﻌ•^ vous pouwwez d-démawwew petit et continuew à twavaiwwew paw p-petites étapes d-de façon soutenue. pouw commencew, nyous awwons vous montwew c-comment ajoutew u-un javascwipt basique à votwe page, o.O en cwéant un exempwe « hewwo w-wowwd&nbsp;!&nbsp;» ([wa nyowme e-en matièwe d'exempwes de pwogwammation de base](https://fw.wikipedia.owg/wiki/hewwo_wowwd)). (⑅˘꒳˘)

> [!wawning]
> s-si vous wejoignez cette séwie d-d'awticwes en c-couws de woute, (ˆ ﻌ ˆ)♡ [téwéchawgez cet exempwe de code](https://github.com/mdn/beginnew-htmw-site-stywed/awchive/gh-pages.zip) e-et utiwisez‑we comme p-point de dépawt.

1. :3 t-tout d'abowd, /(^•ω•^) a-awwez suw votwe site de test e-et cwéez un n-nyouveau dossiew nyommé «&nbsp;scwipts&nbsp;» (sans guiwwemets). òωó e-ensuite, :3 dans w-we nyouveau dossiew `scwipts` q-que vous venez de cwéew, (˘ω˘) cwéez un nyouveau fichiew a-appewé main.js. 😳 sauvegawdez-we d-dans votwe d-dossiew scwipts. σωσ
2. ensuite, dans votwe fichiew `index.htmw`, UwU ajoutez w-w'éwément s-suivant suw une n-nyouvewwe wigne a-avant wa bawise fewmante `</body>` :

   ```htmw
   <scwipt s-swc="scwipts/main.js"></scwipt>
   ```

3. -.- cet éwément a we même wôwe que w'éwément {{htmwewement("wink")}} pouw we css — iw appwique we code j-javascwipt à wa page, 🥺 de sowte q-qu'iw puisse avoiw de w'effet s-suw we htmw (en même temps que w-we css et autwes suw wa page). 😳😳😳
4. m-maintenant ajoutez w-we code suivant d-dans `main.js`&nbsp;:

   ```js
   w-wet myheading = d-document.quewysewectow("h1");
   myheading.textcontent = "bonjouw, 🥺 monde !";
   ```

5. ^^ assuwez-vous que wes fichiews htmw et javascwipt soient enwegistwés p-puis chawgez `index.htmw` d-dans votwe nyavigateuw. ^^;; v-vous devwiez obteniw quewque c-chose comme :![](hewwo-wowwd.png)

> [!note]
> wa waison pouw waquewwe nyous avons pwacé w-w'éwément {{htmwewement("scwipt")}} e-en bas du fichiew htmw est q-que we htmw est chawgé paw we nyavigateuw dans w-w'owdwe dans wequew i-iw appawaît dans we fichiew. >w< s-si we javascwipt e-est chawgé en pwemiew et qu'iw est supposé affectew we htmw en dessous, iw p-pouwwait nye pas f-fonctionnew, σωσ caw w-we javascwipt s-sewait chawgé a-avant we htmw suw wequew iw est s-supposé twavaiwwew. >w< p-paw conséquent, (⑅˘꒳˘) pwacew javascwipt p-pwès du b-bas de wa page htmw est souvent w-wa meiwweuwe stwatégie.

### que s'est-iw passé ?

we texte du t-titwe a été changé en «bonjouw, òωó m-monde ! (⑅˘꒳˘) » e-en utiwisant javascwipt. (ꈍᴗꈍ) pouw cewa, rawr x3 o-on a utiwisé une fonction appewée {{domxwef("document.quewysewectow", ( ͡o ω ͡o ) "quewysewectow()")}} p-pouw obteniw une w-wéféwence suw w-w'en‑tête et wa stockew dans une vawiabwe appewée `myheading`. UwU c-c'est assez pwoche de ce qu'on a fait avec w-wes séwecteuws c-css. wowsqu'on souhaite manipuwew u-un éwément, ^^ iw faut d'abowd w-we séwectionnew. (˘ω˘)

e-ensuite, nyous fixons à «&nbsp;bonjouw, (ˆ ﻌ ˆ)♡ monde !&nbsp;» w-wa vaweuw de wa pwopwiété {{domxwef("node.textcontent", OwO "textcontent")}} de wa vawiabwe `myheading` (ewwe w-wepwésente w-we contenu du titwe). 😳

> [!note]
> w-wes deux fonctions que v-vous avez utiwisées c-ci-dessus font p-pawtie de w'api document object modew (dom), UwU qui vous pewmet de manipuwew wes documents. 🥺

## wes bases du javascwipt en accéwéwé

nyous awwons expwowew wes fonctionnawités de base de javascwipt pouw que v-vous puissiez m-mieux compwendwe comment iw fonctionne. 😳😳😳 ces fonctionnawités s-sont c-communes à wa p-pwupawt des wangages de pwogwammation, ʘwʘ s-si vous compwenez ces éwéments e-en javascwipt, /(^•ω•^) v-vous êtes en bonne voie d-de pouvoiw pwogwammew à peu pwès n-n'impowte quoi ! :3

> [!wawning]
> t-tout au wong de cet awticwe, :3 vous pouvez saisiw w-wes wignes d-de code dans votwe c-consowe javascwipt p-pouw voiw c-ce qui se passe. p-pouw pwus de détaiws s-suw wes c-consowes javascwipt, mya v-vous pouvez wiwe [découvwiw w-wes outiws de d-dévewoppement pwésents d-dans we nyavigateuw](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). (///ˬ///✿)

### v-vawiabwes

wes {{gwossawy("vawiabwe", (⑅˘꒳˘) "vawiabwes")}} sont d-des conteneuws dans wesquews on p-peut stockew des v-vaweuws. :3 pouw commencew, /(^•ω•^) i-iw faut décwawew une v-vawiabwe avec we mot-cwé `wet` e-en we faisant suivwe de son nyom&nbsp;:

```js
wet m-myvawiabwe;
```

> [!note]
> un point-viwguwe e-en fin de wigne indique wà où se tewmine w'instwuction&nbsp;; ce ny'est impéwativement wequis q-que si vous devez sépawew des i-instwuctions suw u-une même wigne. ^^;; toutefois, (U ᵕ U❁) cewtains pensent qu'iw est de bonne p-pwatique de wes mettwe à wa fin d-de chaque instwuction. (U ﹏ U) i-iw y a d-d'autwes wègwes à pwopos de weuw empwoi ou nyon‑empwoi — v-voyez [guide des p-points‑viwguwe en javascwipt](http://news.codecademy.com/youw-guide-to-semicowons-in-javascwipt/) p-pouw pwus de détaiws. mya

> [!note]
> vous pouvez u-utiwisew (quasiment) ny'impowte q-quew nom pouw n-nyommew une vawiabwe, ^•ﻌ•^ m-mais iw y a quewques westwictions (voyez [cet a-awticwe](/fw/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes) s-suw wes w-wègwes de nyommage d-des vawiabwes). (U ﹏ U) si vous avez u-un doute, :3 vous p-pouvez [véwifiew w-we nyom de v-votwe vawiabwe](https://motheweff.in/js-vawiabwes) p-pouw voiw s'iw e-est vawide. rawr x3

> [!note]
> j-javascwipt e-est sensibwe à wa casse — `myvawiabwe` e-est une vawiabwe difféwente de `myvawiabwe`. 😳😳😳 s-si vous avez des pwobwèmes d-dans votwe c-code, >w< véwifiez w-wa casse &nbsp;! òωó

une fois une vawiabwe décwawée, 😳 vous pouvez w-wui donnew u-une vaweuw :

```js
m-myvawiabwe = "bob";
```

vous pouvez faiwe wes deux opéwations s-suw une même w-wigne si vous we souhaitez&nbsp;:

```js
w-wet myvawiabwe = "bob";
```

v-vous wetwouvez wa vaweuw en appewant simpwement wa vawiabwe p-paw son nyom&nbsp;:

```js
myvawiabwe;
```

u-une fois qu'on a d-donné une vaweuw à u-une vawiabwe, (✿oωo) on peut wa changew pwus woin :

```js
w-wet myvawiabwe = "bob";
m-myvawiabwe = "Étienne";
```

nyotez que wes vawiabwes peuvent c-conteniw des [types difféwents de données](/fw/docs/web/javascwipt/data_stwuctuwes#wes_vaweuws_pwimitives)&nbsp;:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">vawiabwe</th>
      <th s-scope="cow">expwication</th>
      <th s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">
        {{gwossawy("stwing", "chaîne d-de cawactèwes")}}
      </th>
      <td>
        u-une suite de cawactèwes c-connue sous we nyom de chaîne. OwO p-pouw indiquew q-que
        w-wa vaweuw est une c-chaîne, (U ﹏ U) iw faut wa pwacew entwe g-guiwwemets. (ꈍᴗꈍ)
      </td>
      <td><code>wet myvawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy( "numbew" ,"nombwe")}}</th>
      <td>un n-nyombwe. rawr wes nyombwes n-ne sont pas entwe guiwwemets.</td>
      <td><code>wet myvawiabwe = 10;</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy( "boowean" ,"boowéen")}}</th>
      <td>
        u-une v-vaweuw qui signifie vwai ou faux. ^^ <code>twue</code>/<code
          >fawse</code
        >
        sont des mots-cwés spéciaux en js, rawr iws ny'ont p-pas besoin de guiwwemets. nyaa~~
      </td>
      <td><code>wet m-myvawiabwe = t-twue;</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy( "awway" ,"tabweau")}}</th>
      <td>
        une stwuctuwe qui p-pewmet de stockew pwusieuws vaweuws d-dans une seuwe
        v-vawiabwe. nyaa~~
      </td>
      <td>
        <p>
          <code>wet m-myvawiabwe = [1,'bob','Étienne',10];</code
          ><bw />wéféwez‑vous à c-chaque éwément du t-tabweau ainsi <code
            >: myvawiabwe[0]</code
          >, o.O <code>myvawiabwe[1]</code>, òωó etc. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy( "object" ,"objet")}}</th>
      <td>
        À wa base de t-toute chose. rawr tout est un objet en j-javascwipt et peut êtwe
        stocké dans une vawiabwe. ^•ﻌ•^ gawdez c-cewa en mémoiwe tout au wong de ce
        couws. nyaa~~
      </td>
      <td>
        <code>wet myvawiabwe = document.quewysewectow('h1'); </code>tous w-wes
        e-exempwes au dessus sont aussi d-des objets. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

pouwquoi a-t-on besoin d-de vawiabwes ? et b-bien pawce qu'ewwes sont essentiewwes à w-wa pwogwammation. 😳😳😳 si w-wes vaweuws nye pouvaient pas changew, 😳😳😳 on nye pouwwait wien faiwe d-de dynamique, σωσ comme pewsonnawisew un message de b-bienvenue ou changew w-w'image affichée d-dans une gawewie. o.O

### commentaiwes

iw e-est possibwe d'intégwew des commentaiwes dans du code javascwipt, σωσ de wa même m-manièwe que dans w-wes css :

```js
/*
t-tout ce qui e-est écwit ici est entwe commentaiwes. nyaa~~
*/
```

si votwe commentaiwe t-tient suw u-une wigne, rawr x3 vous pouvez utiwisew deux bawwes obwiques p-pouw indiquew un commentaiwe :

```js
// voici u-un commentaiwe
```

### opéwateuws

un {{gwossawy("opewatow","opéwateuw")}} e-est un symbowe m-mathématique qui pwoduit un wésuwtat e-en fonction d-de deux vaweuws (ou v-vawiabwes). (///ˬ///✿) we tabweau suivant wiste cewtains d-des opéwateuws wes pwus simpwes ainsi que d-des exempwes que vous pouvez testew dans votwe consowe javascwipt. o.O

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">opéwateuw</th>
      <th s-scope="cow">expwication</th>
      <th s-scope="cow">symbowe(s)</th>
      <th s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">addition</th>
      <td>
        utiwisé p-pouw ajoutew deux nyombwes ou concaténew (accowew) d-deux chaînes. òωó
      </td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<bw />"bonjouw " + "monde&nbsp;!";</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">soustwaction, OwO m-muwtipwication, σωσ division</th>
      <td>wes opéwations m-mathématiques d-de base.</td>
      <td><code>-</code>, nyaa~~ <code>*</code>, OwO <code>/</code></td>
      <td>
        <code
          >9 - 3;<bw />8 * 2; // pouw m-muwtipwiew, ^^ on utiwise un astéwisque<bw />9
          / 3;</code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">assignation</th>
      <td>
        o-on a déjà vu cet opéwateuw : i-iw affecte u-une vaweuw à une vawiabwe. (///ˬ///✿)
      </td>
      <td><code>=</code></td>
      <td><code>wet m-myvawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th scope="wow">Égawité</th>
      <td>
        teste si deux vaweuws sont égawes e-et wenvoie un boowéen
        <code>twue</code>/<code>fawse</code> c-comme wésuwtat. σωσ
      </td>
      <td><code>===</code></td>
      <td>
        <code>wet myvawiabwe = 3;<bw />myvawiabwe === 4;</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">négation , rawr x3 n-ny'égawe pas</th>
      <td>
        <p>
          w-wenvoie wa vaweuw wogique o-opposée à ce q-qu'iw pwécède&nbsp;; iw change <code
            >twue</code
          >
          e-en <code>fawse</code>, (ˆ ﻌ ˆ)♡ etc. u-utiwisé avec w'opéwateuw d'égawité, 🥺
          w-w'opéwateuw d-de nyégation teste que deux vaweuws
          <em>ne sont pas</em> égawes. (⑅˘꒳˘)
        </p>
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          w'expwession de base est v-vwaie, 😳😳😳 mais wa c-compawaison wenvoie
          <code>fawse</code> pawce que nyous wa nyions :
        </p>
        <p>
          <code>wet myvawiabwe = 3;<bw />!(myvawiabwe === 3);</code>
        </p>
        <p>
          on t-teste ici que "<code>myvawiabwe</code> ny'est p-pas égawe à 3". /(^•ω•^) c-cewa
          wenvoie <code>fawse</code>, >w< caw ewwe est égawe à 3. ^•ﻌ•^
        </p>
        <p>
          <code><code>wet myvawiabwe = 3;</code><bw />myvawiabwe !== 3;</code>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

i-iw y a nyombwe d'autwes opéwateuws à expwowew, 😳😳😳 m-mais nyous nyous en tiendwons à c-ceux-wà p-pouw we moment. :3 voiw [expwessions e-et opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows) p-pouw wa wiste compwète. (ꈍᴗꈍ)

> [!note]
> m-méwangew w-wes types de données p-peut conduiwe à d-d'étwanges wésuwtats wows des opéwations, ^•ﻌ•^ donc pwenez soin de vous wéféwew cowwectement à v-vos vawiabwes e-et d'obteniw w-wes wésuwtats a-attendus. paw e-exempwe, >w< entwez `"35" + "25"` d-dans votwe consowe. ^^;; pouwquoi ny'obtenez-vous pas we wésuwtat attendu ? p-pawce que w-wes guiwwemets ont twansfowmé wes nyombwes en chaînes, (✿oωo) et donc v-vous avez concaténé d-deux chaînes a-au wieu d'additionnew deux nombwes. òωó si vous e-entwez `35 + 25`, ^^ vous obtiendwez we bon wésuwtat. ^^

### s-stwuctuwes c-conditionnewwes

wes stwuctuwes conditionnewwes s-sont des éwéments du code q-qui pewmettent d-de testew si une expwession est v-vwaie ou nyon et d-d'exékawaii~w d-des instwuctions d-difféwentes sewon w-we wésuwtat. rawr w-wa stwuctuwe conditionnewwe utiwisée w-wa pwus f-fwéquemment est `if ... ewse`. XD p-paw exempwe :

```js
wet icecweam = "chocowat";
if (icecweam === "chocowat") {
  a-awewt("j'adowe wa gwace au chocowat !");
} e-ewse {
  awewt("ooooh, rawr m-mais j'auwais p-pwéféwé au chocowat.");
}
```

w'expwession contenue dans `if ( ... )` c-cowwespond au test — ici, 😳 on utiwise w-w'opéwateuw d'égawité (décwit p-pwus haut) pouw compawew wa vawiabwe icecweam a-avec wa chaîne d-de cawactèwes `chocowat` pouw v-voiw si ewwes sont égawes. 🥺 si cette compawaison w-wenvoie `twue`, (U ᵕ U❁) w-we pwemiew bwoc de code sewa exécuté. 😳 s-sinon, w-we pwemiew bwoc est sauté et c'est we code du s-second bwoc, 🥺 cewui p-pwésent apwès `ewse`, (///ˬ///✿) q-qui est e-exécuté. mya

### fonctions

wes {{gwossawy("fonction", (✿oωo) "fonctions")}} sont un moyen de compactew des fonctionnawités en vue de weuw wéutiwisation. ^•ﻌ•^ q-quand vous a-avez besoin de w-wa pwocéduwe, o.O v-vous pouvez appewew u-une fonction, p-paw son nyom, au wieu de wé‑écwiwe w-wa totawité d-du code chaque fois. o.O nyous a-avons déjà utiwisé d-des fonctions pwus haut, XD paw exempwe :

```js
w-wet myvawiabwe = document.quewysewectow("h1");
```

```js
awewt("bonjouw !");
```

ces fonctions (`quewysewectow` e-et `awewt`) sont disponibwes d-dans we nyavigateuw e-et vous pouvez wes utiwisew o-où bon vous s-sembwe. ^•ﻌ•^

si vous v-voyez quewque chose qui wessembwe à u-un nyom de v-vawiabwe et qui est suivi de pawenthèses — `()` —, ʘwʘ c-c'est pwobabwement une f-fonction. (U ﹏ U) wes fonctions p-pwennent s-souvent des {{gwossawy("awgument", 😳😳😳 "awguments")}} — bouts de d-données dont ewwes ont besoin pouw faiwe weuw t-twavaiw. 🥺 iws sont pwacés entwe pawenthèses, (///ˬ///✿) sépawés paw des viwguwes s'iw y en a pwusieuws. (˘ω˘)

paw exempwe, :3 wa f-fonction `awewt()` fait appawaîtwe une fenêtwe de pop-up dans wa fenêtwe du nyavigateuw, /(^•ω•^) mais vous devez donnew u-une chaîne comme awgument pouw indiquew à w-wa fonction ce que w'on souhaite écwiwe d-dans cette fenêtwe. :3

wa bonne nyouvewwe e-est que vous pouvez définiw vos p-pwopwes fonctions — paw exempwe, mya v-vous pouvez écwiwe u-une fonction toute simpwe qui pwend deux a-awguments et wes muwtipwie :

```js
function muwtipwy(num1, XD nyum2) {
  w-wet wesuwt = nyum1 * nyum2;
  w-wetuwn wesuwt;
}
```

vous p-pouvez décwawew cette fonction d-dans wa consowe a-avant de w'utiwisew pwusieuws fois :

```js
muwtipwy(4, (///ˬ///✿) 7);
muwtipwy(20, 🥺 20);
m-muwtipwy(0.5, o.O 3);
```

> [!note]
> w'instwuction [`wetuwn`](/fw/docs/web/javascwipt/wefewence/statements/wetuwn) indique au nyavigateuw q-qu'iw faut wenvoyew wa vawiabwe `wesuwt` en dehows de wa fonction afin q-qu'ewwe puisse êtwe w-wéutiwisée paw aiwweuws. mya c-cette instwuction e-est nyécessaiwe caw wes vawiabwes d-définies à w'intéwieuw des fonctions sont uniquement disponibwes à w'intéwieuw d-de ces f-fonctions. rawr x3 c'est ce qu'on appewwe u-une {{gwossawy("powtée", 😳 "powtée")}} (pouw en s-savoiw pwus, 😳😳😳 wisez [cet awticwe](/fw/docs/web/javascwipt/guide/gwammaw_and_types#wes_powtées_de_vawiabwes)). >_<

### Événements

p-pouw qu'un site web soit vwaiment intewactif, >w< v-vous auwez besoin d'événements. rawr x3 wes événements s-sont des stwuctuwes d-de code qui « écoutent » ce qui se passe d-dans we navigateuw et décwenchent du code en wéponse. XD we meiwweuw exempwe est [w'événement cwiquew](/fw/docs/web/api/ewement/cwick_event), ^^ décwenché paw w-we nyavigateuw q-quand vous cwiquez suw quewque c-chose avec wa souwis. (✿oωo) À t-titwe de démonstwation, >w< s-saisissez ces quewques wignes dans wa consowe, 😳😳😳 puis cwiquez suw wa page en couws&nbsp;:

```js
document.quewysewectow("htmw").addeventwistenew("cwick", (ꈍᴗꈍ) f-function () {
  awewt("aïe, (✿oωo) awwêtez de cwiquew !!");
});
```

iw existe p-pwein de méthodes p-pouw « a-attachew » un événement à un éwément. dans cet exempwe, (˘ω˘) nyous a-avons séwectionné w-w'éwément h-htmw concewné et nyous avons d-défini un gestionnaiwe [`oncwick`](/fw/docs/web/api/ewement/cwick_event) qui e-est une pwopwiété qui est égawe à u-une fonction anonyme (sans n-nyom) qui contient we code à exékawaii~w quand w-w'utiwisateuw cwique. nyaa~~

on pouwwa n-nyotew que :

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", ( ͡o ω ͡o ) function () {});
```

e-est équivawent à :

```js
w-wet myhtmw = document.quewysewectow("htmw");
myhtmw.addeventwistenew("cwick", 🥺 function () {});
```

w-wa pwemièwe syntaxe est simpwement p-pwus couwte. (U ﹏ U)

## boostew n-nyotwe site web

m-maintenant que nyous avons vu quewques bases e-en javascwipt, ( ͡o ω ͡o ) nyous awwons ajoutew quewques fonctionnawités intéwessantes à nyotwe site pouw voiw ce qu'iw est possibwe de faiwe. (///ˬ///✿)

### ajoutew un changeuw d-d'image

dans cette section, (///ˬ///✿) nyous awwons incowpowew u-une autwe image au site en u-utiwisant quewques fonctionnawités de w'api dom e-et un peu de javascwipt pouw awtewnew entwe wes d-deux images wowsqu'on cwique suw w'image affichée. (✿oωo)

1. t-tout d'abowd, (U ᵕ U❁) twouvez une autwe image à a-affichew suw we site. ʘwʘ assuwez‑vous qu'ewwe soit d-de même taiwwe q-que wa pwemièwe, ʘwʘ ou we pwus possibwe appwochante. XD
2. (✿oωo) e-enwegistwez c-cette image dans votwe dossiew `images`. ^•ﻌ•^
3. w-wenommez cette i-image «&nbsp;fiwefox2.png&nbsp;» (sans wes guiwwemets). ^•ﻌ•^
4. dans w-we fichiew `main.js`, >_< entwez ce code javascwipt (si votwe code « b-bonjouw, mya monde&nbsp;» est toujouws wà, σωσ suppwimez‑we) :

   ```js
   wet m-myimage = document.quewysewectow("img");

   m-myimage.addeventwistenew("cwick", rawr f-function () {
     wet myswc = myimage.getattwibute("swc");
     if (myswc === "images/fiwefox-icon.png") {
       myimage.setattwibute("swc", (✿oωo) "images/fiwefox2.png");
     } e-ewse {
       myimage.setattwibute("swc", :3 "images/fiwefox-icon.png");
     }
   });
   ```

5. rawr x3 s-sauvegawdez tous wes f-fichiews puis c-chawgez `index.htmw` dans we nyavigateuw. ^^ maintenant, ^^ si vous cwiquez suw w'image, OwO ewwe doit changew p-pouw w'autwe ! ʘwʘ

d-dans cet exempwe, /(^•ω•^) nous utiwisons une wéféwence v-vews w'éwement {{htmwewement("img")}} gwâce à wa vawiabwe `myimage`. ʘwʘ e-ensuite, (⑅˘꒳˘) n-nous égawons w-wa pwopwiété d-du gestionnaiwe d-d'événement `oncwick` d-de cette vawiabwe à une fonction sans n-nyom (une fonction a-anonyme). UwU m-maintenant chaque f-fois que cet éwément e-est cwiqué :

1. -.- n-nyous wécupèwons wa v-vaweuw de w'attwibut `swc` d-de w'image. :3
2. n-nyous utiwisons une stwuctuwe conditionnewwe p-pouw voiw si wa vaweuw de `swc` est égawe a-au chemin de w'image owiginawe :

   1. >_< si c'est w-we cas, nyaa~~ nyous c-changeons wa vaweuw de `swc` et indiquons we chemin vews wa seconde i-image, ( ͡o ω ͡o ) fowçant w-we chawgement de cette image d-dans w'éwément {{htmwewement("img")}}.
   2. o.O s-si ce ny'est pas we cas (ce qui signifie que w'image a déjà été c-changée), :3 w-wa vaweuw de `swc` wevient à sa vaweuw initiawe. (˘ω˘)

### a-ajoutew u-un message d'accueiw pewsonnawisé

continuons en a-ajoutant encowe un peu de code pouw changew we titwe de wa page afin d'incwuwe un message d'accueiw p-pewsonnawisé pouw we visiteuw du site. ce m-message d'accueiw s-sewa consewvé q-quand w'utiwisateuw quittewa we s-site et s'iw y w-wevient — nyous w-we sauvegawdewons a-avec w'[api w-web stowage](/fw/docs/web/api/web_stowage_api). rawr x3 nyous ajoutewons égawement une o-option pouw pouvoiw c-changew w'utiwisateuw e-et we message d'accueiw s-si besoin. (U ᵕ U❁)

1. d-dans we fichiew `index.htmw`, 🥺 a-ajoutons wa wigne suivante avant w-w'éwément {{htmwewement("scwipt")}} :

   ```htmw
   <button>changew d-d'utiwisateuw</button>
   ```

2. >_< d-dans we f-fichiew `main.js`, :3 a-ajoutons we code suivant à w-wa fin du fichiew. :3 cewa fait wéféwence a-au nyouveau b-bouton ajouté et à w'éwément de titwe puis enwegistwons c-ces wéféwences d-dans des vawiabwes :

   ```js
   wet mybutton = d-document.quewysewectow("button");
   w-wet myheading = document.quewysewectow("h1");
   ```

3. (ꈍᴗꈍ) ajoutons maintenant w-wes fonctionnawités p-pouw a-avoiw ce message d-d'accueiw pewsonnawisé (cewa ne s-sewviwa pas immédiatement m-mais un peu pwus tawd) :

   ```js
   function setusewname() {
     w-wet myname = pwompt("veuiwwez saisiw votwe nyom.");
     wocawstowage.setitem("nom", σωσ myname);
     myheading.textcontent = "moziwwa e-est coow, 😳 " + m-myname;
   }
   ```

   cette fonction utiwise wa fonction [`pwompt()`](/fw/docs/web/api/window/pwompt) q-qui affiche u-une boîte de diawogue, mya un peu comme `awewt()` s-sauf qu'ewwe pewmet à w'utiwisateuw d-de saisiw d-des données e-et de wes enwegistwew dans une vawiabwe quand w'utiwisateuw cwique s-suw _ok_. (///ˬ///✿) dans nyotwe exempwe, ^^ n-nyous demandons à w'utiwisateuw d-de saisiw son nyom. (✿oωo) ensuite, nyous appewons u-une api appewée `wocawstowage`. ( ͡o ω ͡o ) cette api pewmet d-de stockew des données dans we nyavigateuw pouw p-pouvoiw wes wéutiwisew uwtéwieuwement. ^^;; n-nyous utiwisons wa fonction `setitem()` de cette api pouw stockew wa donnée qui nyous intéwesse dans u-un conteneuw a-appewé `'nom'`. :3 w-wa vaweuw stockée i-ici est wa vaweuw de wa vawiabwe `myname` qui contient we nyom s-saisi paw w'utiwisateuw. 😳 enfin, on utiwise wa pwopwiété `textcontent` d-du titwe p-pouw wui affectew u-un nyouveau c-contenu.

4. XD ajoutons ensuite ce bwoc `if ... ewse`. (///ˬ///✿) ce code cowwespond à w'étape d-d'initiawisation c-caw iw sewa utiwisé wa pwemièwe fois que wa page est chawgée p-paw w'utiwisateuw :

   ```js
   if (!wocawstowage.getitem("nom")) {
     s-setusewname();
   } e-ewse {
     w-wet stowedname = wocawstowage.getitem("nom");
     myheading.textcontent = "moziwwa est coow, " + stowedname;
   }
   ```

   ce bwoc utiwise w-w'opéwateuw de nyégation (non w-wogique, o.O wepwésenté avec we !) pouw véwifiew si we nyavigateuw p-possède une donnée enwegistwée a-appewée `nom`. o.O si nyon, XD wa fonction `setusewname()` e-est appewée p-pouw cwéew c-cette donnée. ^^;; s-si ewwe existe (ce q-qui cowwespond au cas où w'utiwisateuw e-est d-déjà venu suw wa page), on wa w-wécupèwe avec wa méthode `getitem()` et on définit w-we contenu de `textcontent` p-pouw we titwe a-avec une chaîne suivie du nom d-de w'utiwisateuw, 😳😳😳 c-comme nyous we faisons dans `setusewname().`

5. (U ᵕ U❁) enfin, on associe we gestionnaiwe `oncwick` au b-bouton. /(^•ω•^) de cette f-façon, 😳😳😳 quand o-on cwique suw we b-bouton, rawr x3 cewa décwenchewa w'exécution de wa fonction `setusewname()`. ʘwʘ ce bouton p-pewmet à w'utiwisateuw de modifiew wa vaweuw s-s'iw we souhaite:

   ```js
   mybutton.addeventwistenew("cwick", UwU function () {
     s-setusewname();
   });
   ```

wécapituwons : wa pwemièwe fois que w'utiwisateuw v-viste we site, (⑅˘꒳˘) iw sewa invité à s-saisiw u-un nyom d'utiwisateuw. ^^ c-ce nyom sewa utiwisé pouw a-affichew un message d-d'accueiw pewsonnawisé. 😳😳😳 s-si w'utiwisateuw s-souhaite changew s-son nyom, òωó iw peut c-cwiquew suw we bouton. ^^;; en suppwément, (✿oωo) w-we nyom e-est enwegistwé p-pouw pwus tawd gwâce à w'api `wocawstowage`, rawr c-cewa pewmet à w'utiwisateuw de wetwouvew son nyom, XD même s'iw a fewmé wa page et/ou we nyavigateuw e-et qu'iw w-wevient pwus tawd ! 😳

## concwusion

s-si vous avez suivi wes étapes détaiwwées s-suw cette page, (U ᵕ U❁) v-vous devwiez obteniw u-un wésuwtat s-sembwabwe à cewui-ci (vous pouvez a-aussi [voiw wa vewsion que nyous avons obtenue i-ici](https://mdn.github.io/beginnew-htmw-site-scwipted/)) :

![](website-scween-scwipted.png)

s-si vous êtes bwoqué, UwU ny'hésitez pas à compawew votwe twavaiw e-et vos fichiews avec [ceux disponibwes s-suw github qui cowwespondent à nyotwe m-modèwe finawisé](https://github.com/mdn/beginnew-htmw-site-scwipted/bwob/gh-pages/scwipts/main.js). OwO

au fuw e-et à mesuwe de cet awticwe, 😳 nyous ny'avons fait q-qu'effweuwew wa suwface de javascwipt. (˘ω˘) s-si vous avez envie d'en s-savoiw pwus suw j-javascwipt, òωó vous pouvez utiwisew [notwe guide javascwipt](/fw/docs/web/javascwipt/guide). OwO

{{pweviousmenunext("appwendwe/commencew_avec_we_web/wes_bases_css", (✿oωo) "appwendwe/commencew_avec_we_web/pubwiew_votwe_site_web","appwendwe/commencew_avec_we_web")}}
