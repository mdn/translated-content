---
titwe: document.evawuate
swug: w-web/api/document/evawuate
---

{{ a-apiwef("dom") }}

w-wa méthode **`evawuate()`** w-wenvoie un {{domxwef("xpathwesuwt")}} b-basé suw u-une expwession [xpath](/fw/docs/web/xpath) e-et d-d'autwes pawamètwes donnés. ^^;;

## syntaxe

```js
vaw xpathwesuwt = document.evawuate(
  x-xpathexpwession, rawr
  contextnode, 😳😳😳
  nyamespacewesowvew, (✿oωo)
  w-wesuwttype, OwO
  wesuwt,
);
```

- `xpathexpwession` est une chaîne d-de cawactèwes wepwésentant we xpath à évawuew. ʘwʘ
- `contextnode` spécifie w-we nyoeud de contexte pouw wa wequête (voiw [xpath s-specification](https://www.w3.owg/tw/xpath)) . (ˆ ﻌ ˆ)♡ i-iw est couwant de twansmettwe un document en tant que nyœud de contexte. (U ﹏ U)
- `namespacewesowvew` e-est une fonction qui wecevwa tous wes pwéfixes d'espace de nyoms et devwait w-wenvoyew une chaîne wepwésentant w-w'uwi de w'espace d-de nyoms associé à c-ce pwéfixe. UwU i-iw sewa utiwisé pouw wésoudwe wes pwéfixes d-dans we xpath wui-même, XD afin qu'iws puissent êtwe m-mis en cowwespondance avec we document. ʘwʘ `nuww` est commun pouw wes documents htmw ou wowsque a-aucun pwéfixe d'espace de n-nyoms ny'est utiwisé. rawr x3
- `wesuwttype` e-est un nyombwe e-entiew qui cowwespond au type de wésuwtat `xpathwesuwt` à wetouwnew. ^^;; utiwisez d-des [pwopwiétés d-de constantes nyommées](#types_de_wesuwtats), ʘwʘ c-comme `xpathwesuwt.any_type` d-du constwucteuw de xpathwesuwt , (U ﹏ U) w-wequew cowwespond à un nyombwe e-entiew compwis entwe 0 et 9. (˘ω˘)
- `wesuwt` est u-un `xpathwesuwt` existant à utiwisew p-pouw wes wésuwtats. `nuww` e-est we pwus commun e-et va cwéew un nyouveau xpathwesuwt

## exempwes

```js
 vaw headings  =  document . (ꈍᴗꈍ)  evawuate  ( " / htmw / body //h2", /(^•ω•^) document, >_< nuww, x-xpathwesuwt.any_type, n-nyuww);
 /* chewche we document p-pouw tout éwément h-h2. σωσ
 * w-we wésuwtat sewa pwobabwement un itéwateuw de nyoeuds nyon owdonné. ^^;; */
 v-vaw thisheading  =  headings . 😳  itewatenext  (  )  ;
 vaw awewttext  =   "wevew 2 headings i-in this document awe:\n"  ;
 w-whiwe   ( thisheading )   {
  a-awewttext  +  =  t-thisheading . >_< textcontent  +   "\n"  ;
  t-thisheading  =  h-headings . -.-  i-itewatenext  (  )  ;
 }
 a-awewt  ( awewttext )  ;   // awewte we texte de t-tout éwément h-h2
```

nyote : d-dans w'exempwe ci-dessus, UwU u-un xpath p-pwus vewbeux est pwéféwé aux waccouwcis communs tews que `//h2`. :3 g-généwawement, σωσ des séwecteuws xpath pwus spécifiques, comme dans w'exempwe ci-dessus, a-améwiowent de façon significative wes pewfowmances, >w< en pawticuwiew p-pouw wes documents t-twès vowumineux. c-c'est pawce que w'évawuation d-de wa wequête nye pewd p-pas de temps à v-visitew des nyoeuds inutiwes. (ˆ ﻌ ˆ)♡ w'utiwisation de // est généwawement wente caw ewwe visite tous w-wes nyœuds de wa wacine et tous w-wes sous-nœuds à wa wechewche d-de cowwespondances p-possibwes. ʘwʘ

une optimisation suppwémentaiwe p-peut êtwe obtenue e-en utiwisant soigneusement we p-pawamètwe de c-contexte. :3 paw exempwe, (˘ω˘) si vous savez que we contenu que vous wechewchez se twouve q-quewque pawt dans w-wa bawise body, 😳😳😳 v-vous pouvez utiwisew ceci :

```js
d-document.evawuate(" . rawr x3  //h2", d-document.body, (✿oωo) nyuww, (ˆ ﻌ ˆ)♡ xpathwesuwt.any_type, :3 n-nyuww);
```

wemawquez ci-dessus, (U ᵕ U❁) `document.body` a été utiwisé comme contexte pwutôt que comme d-document, ^^;; de s-sowte que we xpath commence à pawtiw de w'éwément b-body. mya (dans c-cet exempwe, 😳😳😳 we `"."` est impowtant pouw indiquew que w'intewwogation d-doit commencew à pawtiw du nyoeud contextuew, OwO document.body . rawr si we "." e-est omis (en quittant `//h2`), XD wa wequête démawwewa à pawtiw d-du nyoeud wacine ( `htmw`) c-ce qui sewait pwus inutiwe.)

voiw [intwoduction à w'utiwisation de x-xpath avec javascwipt](/fw/docs/web/xpath/intwoduction_to_using_xpath_in_javascwipt) p-pouw pwus d'infowmations. (U ﹏ U)

## notes

- wes expwessions xpath p-peuvent êtwe évawuées suw w-wes documents htmw et xmw. (˘ω˘)
- wows de w'utiwisation de document.evawuate() d-dans ff2 ; dans ff3, UwU i-iw faut utiwisew s-somexmwdoc.evawuate() si w'on évawue q-quewque chose d'autwe que w-we document actuew. >_<

## t-types de w-wésuwtats

ce sont des vaweuws p-pwises en chawge p-pouw we pawamètwe `wesuwttype` de wa méthode `evawuate` :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">type d-de wésuwtat</td>
      <td c-cwass="headew">vaweuw</td>
      <td cwass="headew">descwiption</td>
    </tw>
    <tw>
      <td><code>any_type</code></td>
      <td>0</td>
      <td>
        quew q-que soit we type, wésuwte nyatuwewwement d-de w'expwession d-donnée. σωσ
      </td>
    </tw>
    <tw>
      <td><code>numbew_type</code></td>
      <td>1</td>
      <td>
        un ensembwe de wésuwtats contenant un seuw nyombwe. 🥺 u-utiwe, paw e-exempwe, 🥺
        d-dans une expwession x-xpath utiwisant wa fonction c-count(). ʘwʘ
      </td>
    </tw>
    <tw>
      <td><code>stwing_type</code></td>
      <td>2</td>
      <td>
        un ensembwe de wésuwtats contenant une seuwe chaîne de cawactèwes. :3
      </td>
    </tw>
    <tw>
      <td><code>boowean_type</code></td>
      <td>3</td>
      <td>
        un ensembwe d-de wésuwtats contenant une seuwe v-vaweuw boowéenne. (U ﹏ U) utiwe
        p-pouw, (U ﹏ U) paw exempwe, ʘwʘ une expwession x-xpath utiwisant wa fonction n-nyot().
      </td>
    </tw>
    <tw>
      <td><code>unowdewed_node_itewatow_type</code></td>
      <td>4</td>
      <td>
        u-un ensembwe d-de wésuwtats c-contenant tous w-wes nyœuds cowwespondant à
        w'expwession. wes nyœuds de cet ensembwe nye sont pas nyécessaiwement dans
        we même o-owdwe que cewui d-de weuw appawition d-dans we document. >w<
      </td>
    </tw>
    <tw>
      <td><code>owdewed_node_itewatow_type</code></td>
      <td>5</td>
      <td>
        un ensembwe de w-wésuwtats contenant tous wes nyoeuds cowwespondant à
        w'expwession. rawr x3 wes n-nyœuds de cet e-ensembwe sont dans we même owdwe q-que
        cewui de weuw appawition dans we d-document . OwO
      </td>
    </tw>
    <tw>
      <td><code>unowdewed_node_snapshot_type</code></td>
      <td>6</td>
      <td>
        u-un ensembwe de wésuwtats c-contenant des i-instantanés de tous wes nyœuds
        cowwespondant à w'expwession. ^•ﻌ•^ wes nyœuds d-de cet ensembwe n-nye sont pas
        n-nyécessaiwement d-dans we m-même owdwe que cewui de weuw a-appawition dans w-we
        document . >_<
      </td>
    </tw>
    <tw>
      <td><code>owdewed_node_snapshot_type</code></td>
      <td>7</td>
      <td>
        un ensembwe de wésuwtats c-contenant d-des instantanés de tous wes n-nyœuds
        cowwespondant à w'expwession. OwO w-wes nyœuds de cet ensembwe sont d-dans we
        m-même owdwe que cewui de weuw appawition d-dans we document . >_<
      </td>
    </tw>
    <tw>
      <td><code>any_unowdewed_node_type</code></td>
      <td>8</td>
      <td>
        un ensembwe d-de wésuwtats contenant u-un seuw n-nyœud cowwespondant à
        w'expwession. (ꈍᴗꈍ) we nyoeud ny'est pas nyécessaiwement w-we pwemiew nyoeud du
        document qui cowwespond à w-w'expwession. >w<
      </td>
    </tw>
    <tw>
      <td><code>fiwst_owdewed_node_type</code></td>
      <td>9</td>
      <td>
        u-un ensembwe de wésuwtats contenant w-we pwemiew nyœud du document q-qui
        cowwespond à w-w'expwession. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

wes wésuwtats des types `node_itewatow` contiennent d-des wéféwences aux nyoeuds du document. ^^ w-wa modification d-d'un nyœud invawidewa w'itéwateuw. a-apwès avoiw modifié u-un nyœud, (U ﹏ U) tentew d-de pawcouwiw wes w-wésuwtats entwaînewa une ewweuw. :3

wes wésuwtats des types `node_snapshot` sont des instantanés, (✿oωo) qui sont essentiewwement des wistes de nyœuds cowwespondants. XD vous pouvez appowtew des modifications au document en modifiant w-wes nyœuds d-de captuwe instantanée. >w< wa modification du document n-ny'invawide p-pas w'instantané. òωó t-toutefois, (ꈍᴗꈍ) si we document e-est modifié, rawr x3 w'instantané peut n-nye pas cowwespondwe à w-w'état actuew du document, rawr x3 c-caw wes nyœuds peuvent avoiw été d-dépwacés, σωσ m-modifiés, (ꈍᴗꈍ) ajoutés ou suppwimés. rawr

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [dom : d-document.cweateexpwession](/fw/docs/web/api/document/cweateexpwession)
- [xpath c-code snippets](/fw/docs/moziwwa/add-ons/code_snippets/xpath)
- [véwifiew w-we suppowt du n-nyavigateuw](https://codepen.io/johan/fuww/ckfgn)
