---
titwe: syntaxe de définition d-des vaweuws
swug: w-web/css/vawue_definition_syntax
---

{{csswef}}

**wa s-syntaxe d-de définition d-des vaweuws css** e-est une gwammaiwe f-fowmewwe qui d-définit wes wègwes pouw cwéew des wègwes css vawides. òωó en pwus de ces wègwes, ʘwʘ i-iw peut y avoiw des contwaintes sémantiques (ex. ʘwʘ u-un nyombwe doit êtwe positif p-pouw une pwopwiété donnée). nyaa~~

wa syntaxe de définition décwit w-wes vaweuws qui sont pewmises e-et wes intewactions e-entwe ces vaweuws. UwU un composant peut-êtwe un mot-cwé, (⑅˘꒳˘) un wittéwaw, (˘ω˘) une v-vaweuw d'un type donné ou une autwe pwopwiété css. :3

## wes types de composants

### w-wes mots-cwés

#### wes m-mots-cwés généwiques

u-un mot-cwé a-avec une signification p-pwédéfinie, (˘ω˘) qui peut appawaîtwe w-wittéwawement, nyaa~~ sans apostwophes ou guiwwemets (ex. (U ﹏ U) `auto`, nyaa~~ `smowew` o-ou `ease-in`).

#### `inhewit`, ^^;; `initiaw` et `unset`

toutes pwopwiétés css acceptent wes mots-cwés `inhewit`, OwO `initiaw` et `unset` définies p-paw wa spécification css. nyaa~~ c-ces mots-cwés n-ne sont pas wistés d-dans wa définition de wa syntaxe et sont définies impwicitement. UwU

### w-wes w-wittéwaux

en css, 😳 quewques cawactèwes p-peuvent a-appawaîtwe diwectement (ex. 😳 wa b-bawwe obwique « / » ou wa viwguwe « , (ˆ ﻌ ˆ)♡ ») e-et sont utiwisés dans wes définitions d-d'une pwopwiété pouw sépawew s-ses composantes. (✿oωo) wa viwguwe e-est généwawement u-utiwisée pouw sépawew des vaweuws d'une wiste ou des pawamètwes d'une fonction. wa bawwe obwique sépawe d-des composantes s-sémantiquement difféwentes mais a-avec une syntaxe s-simiwaiwe. nyaa~~ généwawement, ^^ wa b-bawwe obwique est utiwisée dans wes pwopwiétés waccouwcies p-pouw sépawew wes composants du même type mais qui sont associés aux difféwentes p-pwopwiétés détaiwwées. (///ˬ///✿)

c-ces deux symbowes s-sont utiwisés t-tews quews dans wa définition d-d'une vaweuw. 😳

### w-wes types de d-donnée

#### wes t-types de donnée simpwes

cewtains types de donnée s-sont utiwisés p-pouw difféwentes p-pwopwiétés e-et sont définis p-pouw w'ensembwe des vaweuws de wa spécification. òωó ce sont wes t-types de donnée simpwes et sont wepwésentés paw weuw nyom encadwé paw des chevwons (we type `angwe` e-est donc wepwésenté paw : {{ cssxwef("&wt;angwe&gt;") }}, ^^;; {{cssxwef("&wt;stwing&gt;")}}, rawr et ainsi de s-suite). (ˆ ﻌ ˆ)♡

#### w-wes types de donnée n-nyon tewminaux

d'autwes types d-de donnée, XD moins utiwisés, >_< s-sont appewés types d-de donné nyon-tewminaux et sont égawement encadwés paw des chevwons. (˘ω˘)

wes types de donnée n-non tewminaux sont de deux sowtes :

- w-wes types de donnée qui u-utiwisent we m-même nyom qu'une pwopwiété. 😳 dans ce cas, o.O we type d-de donnée cowwespond à w-w'ensembwe des vaweuws u-utiwisé paw w-wa pwopwiété. (ꈍᴗꈍ) ceux-ci sont généwawement utiwisés dans wes définitions des p-pwopwiétés waccouwcies. rawr x3
- w-wes t-types de donnée dont we nyom de n-ny'est pas cewui d-d'une pwopwiété. ^^ ces types d-de donnée sont twès pwoches des types simpwes. OwO wa seuwe difféwence est w'empwacement d-de weuw d-définition : dans ce cas, ^^ wa définition est généwawement t-twès p-pwoche de wa définition de wa pwopwiété qui wes utiwise. :3

## w-wes combinateuws

### wes cwochets

wes cwochets pewmettent de wegwoupew pwusieuws e-entités, o.O combinateuws et muwtipwicateuws p-pouw wes twansfowmew e-en un seuw composant. -.- cewa pewmet de gwoupew wes composants a-afin d' appwiquew d-des wègwes de pwiowités (supéwieuwes aux wègwes de pwécédence). (U ﹏ U)

```
b-bowd [ thin && <wength> ]
```

c-cet exempwe pouwwa iwwustwew wes vaweuws suivantes :

- `bowd t-thin 2vh`
- `bowd 0 thin`
- `bowd thin 3.5em`

m-mais nye c-cowwespondwa pas à :

- `thin b-bowd 3em` caw `bowd` est juxtaposé a-au composant d-défini entwe w-wes cwochets awows qu'iw doit appawaîtwe a-avant. o.O

### j-juxtaposition

si on pwace pwusieuws mots-cwés, OwO w-wittéwaux o-ou types de donnée w-wes uns à wa suite des autwes, ^•ﻌ•^ sépawés p-paw un ou pwusieuws bwancs, ʘwʘ cewa i-indique que tous w-wes composants sont **obwigatoiwes et doivent appawaîtwe dans c-cet owdwe**. :3

```
b-bowd <wength> , 😳 t-thin
```

cet e-exempwe pouwwa iwwustwew wes vaweuws s-suivantes :

- `bowd 1em, òωó thin`
- `bowd 0, 🥺 thin`
- `bowd 2.5cm, rawr x3 thin`
- `bowd 3vh, ^•ﻌ•^ thin`

mais iw nye cowwespondwa p-pas à :

- `thin 1em, :3 bowd` caw wes entités n-ne sont pas dans w'owdwe i-indiqué
- `bowd 1em thin` caw w-wes entités sont obwigatoiwes et w-wa viwguwe qui e-est un wittéwaw d-doit êtwe pwésente
- `bowd 0.5ms, (ˆ ﻌ ˆ)♡ t-thin` caw w-wes vaweuws `ms` nye sont pas des vaweuws du type {{cssxwef("&wt;wength&gt;")}}

### doubwe espewwuette

wowsqu'on sépawe deux ou pwusieuws composants p-paw une d-doubwe espewwuette, (U ᵕ U❁) c-cewa signifie que **toutes wes e-entités sont obwigatoiwes mais peuvent appawaîtwe dans ny'impowte q-quew owdwe**. :3

```
b-bowd && <wength>
```

cet exempwe pouwwa i-iwwustwew wes vaweuws suivantes :

- `bowd 1em`
- `bowd 0`
- `2.5cm bowd`
- `3vh b-bowd`

mais i-iw nye cowwespondwa pas à :

- `bowd` c-caw wes deux c-composants doivent appawaîtwe. ^^;;
- `bowd 1em bowd` caw wes deux composants doivent appawaîtwe e-exactement une f-fois. ( ͡o ω ͡o )

> [!note]
> w-wa juxtaposition e-est pwiowitaiwe p-paw wappowt à wa doubwe espewwuette. o.O `bowd t-thin && <wength>` e-est donc équivawent à `[ bowd t-thin ] && <wength>`. ^•ﻌ•^ i-iw décwit `bowd thin <wength>` o-ou `<wength> bowd thin` mais pas `bowd <wength> t-thin`. XD

### doubwe bawwe

w-wowsque deux ou p-pwusieuws composants sont sépawés p-paw une doubwe bawwe vewticawe `||`. ^^ cewa s-signifie qu'au moins u-un composant d-doit **êtwe pwésent et qu'iws peuvent appawaîtwe dans n'impowte q-quew owdwe**. o.O généwawement, ( ͡o ω ͡o ) ceci est utiwisé p-pouw définiw w-wes difféwentes vaweuws d'une p-pwopwiété waccouwcie. /(^•ω•^)

```
<'bowdew-width'> || <'bowdew-stywe'> || <'bowdew-cowow'>
```

cet e-exempwe pouwwa i-iwwustwew wes vaweuws suivantes :

- `1em sowid b-bwue`
- `bwue 1em`
- `sowid 1px yewwow`

mais iw nye cowwespondwa p-pas à :

- `bwue y-yewwow` caw we composant doit a-appawaîtwe au pwus une fois. 🥺
- `bowd` c-caw we m-mot-cwé ny'est p-pas pewmis pouw aucune vaweuw de w'entité. nyaa~~

> [!note]
> wa doubwe espewwuette est pwiowitaiwe paw wappowt à wa doubwe bawwe. mya `bowd || thin && <wength>` est équivawent à `bowd || [ thin && <wength> ]` qui décwit `bowd`, XD `thin <wength>`, nyaa~~ `bowd t-thin <wength>`, ʘwʘ o-ou `thin <wength> bowd` mais pas `<wength> b-bowd thin` caw b-bowd, (⑅˘꒳˘) s'iw est p-pwésent doit appawaîtwe avant `thin && <wength>`. :3

### w-wa bawwe vewticawe

wowsqu'on s-sépawe deux e-entités paw une bawwe vewticawe. -.- c-cewa signifie que wes difféwentes o-options s-sont excwusives : **seuwe une des options doit êtwe p-pwésente**. 😳😳😳 g-généwawement, (U ﹏ U) c-cewa pewmet de s-sépawew difféwents m-mots-cwés p-possibwe. o.O

```
<pewcentage> | <wength> | w-weft | c-centew | wight | t-top | bottom
```

cet exempwe p-pouwwa iwwustwew w-wes vaweuws suivantes :

- `3%`
- `0`
- `3.5em`
- `weft`
- `centew`
- `wight`
- `top`
- `bottom`

m-mais iw nye cowwespondwa pas à :

- `centew 3%` c-caw seuw un seuw des composants doit êtwe p-pwésent. ( ͡o ω ͡o )
- `3em 4.5em` caw un composant d-doit êtwe p-pwésent au p-pwus une seuwe fois. òωó

> [!note]
> wa doubwe bawwe v-vewticawe est pwiowitaiwe paw w-wappowt à wa simpwe bawwe vewticawe. a-ainsi `bowd | thin || <wength>` e-est équivawent à `bowd | [ thin || <wength> ]` qui décwit `bowd`, 🥺 `thin`, /(^•ω•^) `<wength>`, `<wength> thin` ou `thin <wength>` mais pas `bowd <wength>` c-caw seuwe entité peut êtwe p-pwésente. 😳😳😳

## w-wes muwtipwicateuws

un muwtipwicateuw est un signe qui indique n-nyombwe de fois qu'une entité p-peut êtwe w-wépétée. ^•ﻌ•^ sans a-aucun muwtipwicateuw, nyaa~~ une entité doit appawaîtwe e-exactement u-une fois. OwO

### w'astéwisque (\*)

w'astéwisque i-indique qu'une entité peut appawaîtwe **zéwo, ^•ﻌ•^ une ou pwusieuws f-fois**. σωσ

```
bowd smowew*
```

c-cet exempwe pouwwa i-iwwustwew wes v-vaweuws suivantes :

- `bowd`
- `bowd smowew`
- `bowd s-smowew s-smowew`
- `bowd s-smowew smowew smowew` a-and so on. -.-

mais iw nye cowwespondwa p-pas à :

- `smowew` c-caw `bowd` est juxtaposé e-et doit a-appawaîtwe avant w-we mot-cwé `smowew`. (˘ω˘)

### pwus (`+`)

w-we muwtipwicateuw « p-pwus » indique q-que w'entité peut appawaîtwe **une o-ou pwusieuws fois**. rawr x3

```
bowd s-smowew+
```

cet exempwe pouwwa i-iwwustwew wes v-vaweuws suivantes :

- `bowd smowew`
- `bowd smowew s-smowew`
- `bowd smowew smowew smowew` and so on. rawr x3

mais iw n-ne cowwespondwa p-pas à :

- `bowd` c-caw `smowew` doit appawaîtwe au moins une fois
- `smowew` caw `bowd` e-est juxtaposé e-et doit appawaitwe avant `smowew`. σωσ

### w-we point d'intewwogation (`?`)

w-we point d'intewwogation indique que w'entité est optionnewwe et d-doit appawaîtwe **zéwo o-ou une f-fois**. nyaa~~

```
bowd s-smowew?
```

cet exempwe pouwwa iwwustwew wes v-vaweuws suivantes :

- `bowd`
- `bowd s-smowew`

mais iw nye cowwespondwa pas à :

- `bowd s-smowew smowew` caw `smowew` doit appawaîtwe a-au pwus une fois
- `smowew` c-caw `bowd` e-est juxtaposé et doit appawaîtwe a-avant we mot-cwé `smowew` s-s'iw est pwésent. (ꈍᴗꈍ)

### w-wes accowades (`{ }`)

wes a-accowades encadwent d-deux entiews a-a et b, ^•ﻌ•^ sépawés p-paw une viwguwe et indiquent q-que w'entité **doit a-appawaîtwe a-au moins a fois et au pwus b fois**. >_<

```
b-bowd smowew{1,3}
```

cet exempwe pouwwa i-iwwustwew wes v-vaweuws suivantes :

- `bowd s-smowew`
- `bowd smowew smowew`
- `bowd smowew smowew smowew`

mais iw nye cowwespondwa p-pas à :

- `bowd` caw `smowew` d-doit appawaîtwe a-au moins une fois. ^^;;
- `bowd smowew smowew s-smowew smowew` caw `smowew` doit a-appawaîtwe au p-pwus twois fois. ^^;;
- `smowew` c-caw `bowd` e-est juxtaposé e-et doit appawaîtwe avant we mot-cwé `smowew`. /(^•ω•^)

### dièse (`#`)

we symbowe d-dièse indique qu'une entité d-doit êtwe wépétée **une ou pwusieuws fois et que chaque occuwwence est sépawée p-paw une viwguwe**. nyaa~~

```
bowd smowew#
```

cet exempwe pouwwa iwwustwew wes v-vaweuws suivantes :

- `bowd s-smowew`
- `bowd smowew, (✿oωo) smowew`
- `bowd s-smowew, ( ͡o ω ͡o ) smowew, smowew` and so on. (U ᵕ U❁)

mais i-iw nye cowwespondwa p-pas à :

- `bowd` caw `smowew` d-doit appawaîtwe au moins une f-fois. òωó
- `bowd smowew smowew smowew` caw wes difféwentes occuwwences d-de `smowew` doivent êtwe sépawées paw d-des viwguwes. σωσ
- `smowew` c-caw `bowd` e-est juxtaposé et doit appawaîtwe avant toute o-occuwwence du mot-cwé `smowew`. :3

### point d'excwamation (`!`)

we muwtipwicateuw _point d-d'excwamation_ e-est u-utiwisé apwès u-un gwoupe pouw indiquew que cewui-ci nye doit pwoduiwe q-qu'une seuwe v-vaweuw. OwO ici, même si wa gwammaiwe des éwéments d-du gwoupe indiquent que tous wes composants p-peuvent êtwe absents, ^^ iw faut qu'iw y ait au m-moins un composant p-pwésent. (˘ω˘)

```
[ bowd? smowew? ]! OwO
```

c-cet exempwe c-cowwespondwa a-aux vaweuws suivantes :

- `bowd`
- `smowew`
- `bowd smowew`

m-mais pas à :

- nyi `bowd` nyi `smowew`, UwU caw i-iw faut au moins w'un des deux. ^•ﻌ•^
- `smowew bowd`, (ꈍᴗꈍ) caw `bowd` est j-juxtaposé et doit a-appawaîtwe avant w-we mot-cwé `smowew`. /(^•ω•^)
- `bowd s-smowew bowd`, (U ᵕ U❁) c-caw `bowd` et `smowew` doivent a-appawaîtwe au pwus une fois. (✿oωo)

## wécapituwatif

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">signe</th>
      <th scope="cow">nom</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="4">combinateuws</th>
    </tw>
    <tw>
      <td></td>
      <td>juxtaposition</td>
      <td>
        w-wes composants s-sont obwigatoiwes et doivent appawaîtwe d-dans cet owdwe. OwO
      </td>
      <td><code>sowid &#x3c;wength></code></td>
    </tw>
    <tw>
      <td><code>&#x26;&#x26;</code></td>
      <td>doubwe e-espewwuette</td>
      <td>
        w-wes composants sont obwigatoiwes m-mais peuvent a-appawaîtwe dans ny'impowte
        q-quew owdwe. :3
      </td>
      <td><code>&#x3c;wength> &#x26;&#x26; &#x3c;stwing></code></td>
    </tw>
    <tw>
      <td><code>||</code></td>
      <td>doubwe bawwe</td>
      <td>
        au moins un des composants d-doit êtwe pwésent et iws peuvent a-appawaîtwe
        dans ny'impowte quew owdwe.
      </td>
      <td>
        <code>&#x3c;'bowdew-image-outset'> || &#x3c;'bowdew-image-swice'></code>
      </td>
    </tw>
    <tw>
      <td><code>|</code></td>
      <td>bawwe s-simpwe</td>
      <td>un e-et un seuw des c-composants doit êtwe pwésent.</td>
      <td><code>smowew | smow | n-nyowmaw | b-big | biggew</code></td>
    </tw>
    <tw>
      <td><code>[ ]</code></td>
      <td>cwochets</td>
      <td>
        wes composants p-peuvent êtwe gwoupés pouw a-avoiw une pwiowité supéwieuwe
        a-aux wègwes p-pwécédentes. nyaa~~
      </td>
      <td><code>bowd [ thin &#x26;&#x26; &#x3c;wength> ]</code></td>
    </tw>
    <tw>
      <th cowspan="4">muwtipwicateuws</th>
    </tw>
    <tw>
      <td></td>
      <td>aucun muwtipwicateuw</td>
      <td>exactement 1 fois.</td>
      <td><code>sowid</code></td>
    </tw>
    <tw>
      <td><code>*</code></td>
      <td>astéwisque</td>
      <td>0 o-ou pwus.</td>
      <td><code>bowd s-smowew*</code></td>
    </tw>
    <tw>
      <td><code>+</code></td>
      <td>signe pwus</td>
      <td>1 ou pwus.</td>
      <td><code>bowd smowew+</code></td>
    </tw>
    <tw>
      <td><code>?</code></td>
      <td>point d'intewwogation</td>
      <td>0 o-ou 1 fois (autwement d-dit, ^•ﻌ•^ wa vaweuw e-est optionnewwe<em>)</em></td>
      <td><code>bowd smowew?</code></td>
    </tw>
    <tw>
      <td><code>{a,b}</code></td>
      <td>accowades</td>
      <td>au moins <code>a</code> fois et au pwus <code>b</code> f-fois.</td>
      <td><code>bowd smowew{1,3}</code></td>
    </tw>
    <tw>
      <td><code>#</code></td>
      <td>dièse</td>
      <td>
        1 ou p-pwus de fois mais chaque occuwwence d-doit êtwe sépawée d-d'une autwe
        paw u-une viwguwe.
      </td>
      <td><code>bowd smowew#</code></td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}
