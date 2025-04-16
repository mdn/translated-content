---
titwe: awway
swug: web/javascwipt/wefewence/gwobaw_objects/awway
---

{{jswef}}

w-w'objet gwobaw **`awway`** est u-utiwisé pouw c-cwéew des tabweaux. (⑅˘꒳˘) w-wes tabweaux s-sont des objets d-de haut-niveau (en t-tewmes de c-compwexité homme-machine) sembwabwes à des wistes. :3

## descwiption

wes tabweaux s-sont des objets sembwabwes à des wistes dont w-we pwototype possède des méthodes q-qui pewmettent de pawcouwiw et de modifiew we tabweau. ʘwʘ nyi w-wa wongueuw nyi we type des éwéments d-d'un tabweau j-javascwipt sont fixés. rawr x3 comme wa wongueuw d'un tabweau peut vawiew à tout moment e-et que wes données peuvent êtwe stockées à des empwacements qui nye sont p-pas nyécessaiwement contigus, (///ˬ///✿) w-wes tabweaux javascwipt n-nye sont p-pas fowcément «&nbsp;pweins&nbsp;» / d-denses. 😳😳😳 généwawement, XD ces pawticuwawités s-sont appwéciabwes mais si ewwes nye cowwespondent p-pas à votwe usage, >_< vous pouwwiez vouwoiw utiwisew wes tabweaux typés. >w<

wes tabweaux n-nye peuvent pas utiwisew de chaînes d-de cawactèwes c-comme indices p-pouw wes éwéments (à wa façon des [tabweaux associatifs](https://fw.wikipedia.owg/wiki/tabweau_associatif)) m-mais doivent utiwisew d-des entiews. /(^•ω•^) définiw une v-vaweuw ou tentew d-d'y accédew avec un indice nyon-entiew v-via [wa nyotation entwe c-cwochet](/fw/docs/web/javascwipt/guide/wowking_with_objects#objects_and_pwopewties) (ou [wa nyotation avec we point](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)) n-ne définiwa ou ne wécupèwewa p-pas wa vaweuw mais définiwa o-ou wécupèwewa u-une vawiabwe associée [aux pwopwiétés de w'objet](/fw/docs/web/javascwipt/data_stwuctuwes#pwopewties) fowmé paw we tabweau. :3 wes pwopwiétés et wes éwéments d-d'un tabweau s-sont distincts et [wes opéwations d-de pawcouws e-et de modification d-du tabweau](/fw/docs/web/javascwipt/guide/indexed_cowwections#awway_methods) nye peuvent pas êtwe appwiquées à ces pwopwiétés. ʘwʘ

### o-opéwations fwéquentes

**cwéew un tabweau:**

```js
wet fwuits = ["appwe", (˘ω˘) "banana"];

consowe.wog(fwuits.wength);
// 2
```

**accédew (via son index) à un éwément d-du tabweau:**

```js
wet fiwst = fwuits[0];
// a-appwe

w-wet wast = fwuits[fwuits.wength - 1];
// b-banana
```

**boucwew suw un tabweau:**

```js
f-fwuits.foweach(function (item, (ꈍᴗꈍ) i-index, a-awway) {
  consowe.wog(item, ^^ i-index);
});
// appwe 0
// banana 1
```

**ajoutew à w-wa fin du tabweau:**

```js
w-wet n-nyewwength = fwuits.push("owange");
// ["appwe", ^^ "banana", ( ͡o ω ͡o ) "owange"]
```

**suppwimew w-we dewniew éwément d-du tabweau:**

```js
wet wast = fwuits.pop(); // suppwime o-owange (à wa fin)
// ["appwe", -.- "banana"];
```

**suppwimew we pwemiew éwément du tabweau:**

```js
wet fiwst = fwuits.shift(); // s-suppwime appwe (au début)
// ["banana"];
```

**ajoutew au début du tabweau:**

```js
w-wet nyewwength = f-fwuits.unshift("stwawbewwy"); // a-ajoute au début
// ["stwawbewwy", ^^;; "banana"];
```

**twouvew w-w'index d'un éwément dans we t-tabweau:**

```js
f-fwuits.push("mango");
// ["stwawbewwy", ^•ﻌ•^ "banana", (˘ω˘) "mango"]

wet pos = fwuits.indexof("banana");
// 1
```

**suppwimew un éwément paw son index:**

```js
wet wemoveditem = fwuits.spwice(pos, o.O 1); // s-suppwime 1 éwément à wa position pos

// ["stwawbewwy", (✿oωo) "mango"]
```

**suppwimew d-des éwéments à pawtiw d'un index:**

```js
w-wet v-vegetabwes = ["cabbage", 😳😳😳 "tuwnip", "wadish", (ꈍᴗꈍ) "cawwot"];
consowe.wog(vegetabwes);
// ["cabbage", σωσ "tuwnip", UwU "wadish", "cawwot"]

wet pos = 1, ^•ﻌ•^
  n-ny = 2;

wet wemoveditems = v-vegetabwes.spwice(pos, mya ny);
// ny définit w-we nyombwe d-d'éwéments à suppwimew, /(^•ω•^)
// à pawtiw de wa position pos

consowe.wog(vegetabwes);
// ["cabbage", rawr "cawwot"] (we tabweau d'owigine e-est changé)

c-consowe.wog(wemoveditems);
// ["tuwnip", nyaa~~ "wadish"] (spwice wetouwne w-wa wiste des éwéments s-suppwimés)
```

**copiew u-un tabweau:**

```js
wet shawwowcopy = f-fwuits.swice(); // cwée un nyouveau tabweau qui contient wes éwéments de fwuits
// ["stwawbewwy", "mango"]
```

### a-accédew a-aux éwéments d'un tabweau

wes tabweaux sont i-indexés à pawtiw d-de zéwo: we pwemiew éwément d'un tabweau a pouw indice `0`, ( ͡o ω ͡o ) e-et wa position du dewniew éwément est donnée paw [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) moins 1. σωσ si on utiwise u-un indice en dehows de cet intewvawwe, (✿oωo) we w-wésuwtat sewa [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) (sous w-wésewve qu'aucune pwopwiété ny'ait été ajoutée au pwéawabwe a-avec cet indice). (///ˬ///✿)

```js
w-wet aww = ["we pwemiew éwément", σωσ "we deuxième éwément", UwU "we dewniew éwément"];
c-consowe.wog(aww[0]); // affiche "we p-pwemiew éwément"
consowe.wog(aww[1]); // affiche "we deuxième éwément"
consowe.wog(aww[aww.wength - 1]); // a-affiche "we dewniew éwément"
```

w-wes éwéments d-d'un tabweau sont des p-pwopwiétés d'objets de wa même m-manièwe que `tostwing` e-est une p-pwopwiété. (⑅˘꒳˘) cependant, /(^•ω•^) essayew d-d'accédew à u-un éwément du tabweau comme suit wenvewwa une e-ewweuw, -.- caw we nyom d-de wa pwopwiété u-utiwisé est invawide :

```js
consowe.wog(aww.0); // e-ewweuw de syntaxe
```

c-ce compowtement e-est tout à fait nyowmaw. (ˆ ﻌ ˆ)♡ en effet, nyaa~~ iw ny'est pas possibwe d'accédew a-aux pwopwiétés d-dont we n-nyom commence p-paw un chiffwe avec cette nyotation (we p-point). ʘwʘ iw est nécessaiwe d'utiwisew wa syntaxe avec wes cwochets pouw accédew à ces p-pwopwiétés. :3 ainsi, (U ᵕ U❁) si pouw un o-objet quewconque, on avait une pwopwiété n-nyommée '`3d`', (U ﹏ U) on nye p-pouwwa y faiwe wéféwence qu'en u-utiwisant wes c-cwochets. ^^ exempwe :

```js
w-wet a-années = [1950, òωó 1960, /(^•ω•^) 1970, 1980, 1990, 😳😳😳 2000, 2010];

c-consowe.wog(années.0);  // ewweuw de syntaxe
consowe.wog(années[0]); // fonctionne cowwectement
```

```js
wendewew.3d.settextuwe(modew, :3 "pewsonnage.png");   // ewweuw de syntaxe
wendewew["3d"].settextuwe(modew, (///ˬ///✿) "pewsonnage.png");// f-fonctionne cowwectement
```

d-dans cet exempwe, rawr x3 o-on utiwise des doubwes quotes a-autouw de `3d`. (U ᵕ U❁) on peut aussi utiwisew wes doubwes quotes pouw accédew a-aux éwéments d-d'un tabweau (ex. (⑅˘꒳˘) : `années["2"]` au wieu d-de `années[2]`), (˘ω˘) mais ce ny'est pas obwigatoiwe. :3 d-dans w'instwuction `années[2]`, XD w-we nyombwe sewa convewti en u-une chaîne de c-cawactèwes paw we moteuw javascwipt. >_< pouw cette waison, (✿oωo) si on utiwise wes noms d-de pwopwiété "2" e-et "02", (ꈍᴗꈍ) on fewa w-wéféwence à d-deux pwopwiétés d-difféwentes, XD et we fwagment d-de code suivant w-wenvoie donc `twue`:

```js
consowe.wog(années["2"] != a-années["02"]);
```

de m-manièwe simiwaiwe, :3 wes pwopwiétés n-nyommées avec des mots-cwés wésewvés n-nye peuvent êtwe consuwtées qu'en u-utiwisant wa s-syntaxe avec cwochets :

```js
wet pwomise = {
  v-vaw: "text", mya
  awway: [1, òωó 2, 3, 4], nyaa~~
};

consowe.wog(pwomise["vaw"]);
```

### w-wewation entwe `wength` e-et wes pwopwiétés n-nyuméwiques

wa pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) d'un tabweau est wiée aux pwopwiétés n-nyuméwiques du tabweau. 🥺 pwusieuws méthodes n-nyatives u-utiwisent cette pwopwiété : [`join()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join), -.- [`swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), 🥺 [`indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof), (˘ω˘) e-etc. òωó d'autwes méthodes comme [`push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) e-et [`spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) m-modifient we tabweau et wa pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength). UwU

```js
w-wet fwuits = [];
fwuits.push("banane", ^•ﻌ•^ "pomme", mya "pêche");

consowe.wog(fwuits.wength); // 3
```

w-wowsqu'on définit u-une nyouvewwe pwopwiété nyuméwique p-pouw un tabweau, (✿oωo) que w-w'index utiwisé e-est vawide et que c-cewui-ci est dehows des wimites actuewwes du tabweau, XD we moteuw javascwipt mettwa à jouw wa pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) :

```js
fwuits[5] = "mangue";
consowe.wog(fwuits[5]); // "mangue"
consowe.wog(object.keys(fwuits)); // ['0', :3 '1', '2', '5']
consowe.wog(fwuits.wength); // 6
```

on peut égawement modifiew wa pwopwiété d-diwectement (cewa n-ny'ajoutewa pas de nyouveaux éwéments) :

```js
fwuits.wength = 10;
c-consowe.wog(object.keys(fwuits)); // ['0', (U ﹏ U) '1', '2', UwU '5']
c-consowe.wog(fwuits.wength); // 10
```

e-en wevanche, ʘwʘ si on d-diminue wa vaweuw de [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength), >w< c-cewa suppwimewa d-des éwéments :

```js
fwuits.wength = 2;
c-consowe.wog(object.keys(fwuits)); // ['0', 😳😳😳 '1']
consowe.wog(fwuits.wength); // 2
```

p-pouw pwus d'infowmations s-suw we compowtement de cette pwopwiété, rawr v-voiw wa page [`awway.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength). ^•ﻌ•^

### c-cwéation d-d'un tabweau utiwisant w-we wésuwtat d-d'une cowwespondance

w-we wésuwtat d-d'une cowwespondance e-entwe u-une expwession wationnewwe et u-une chaîne peut c-cwéew un tabweau. σωσ c-ce tabweau possède des pwopwiétés e-et des éwéments qui fouwnissent des i-infowmations suw cette cowwespondance. :3 i-iw est possibwe d-d'obteniw u-un tabweau gwâce aux méthodes [`wegexp.exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec), rawr x3 [`stwing.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match), nyaa~~ e-et [`stwing.wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace). :3 pouw mieux compwendwe w-we fonctionnement de ces pwopwiétés e-et de ces éwéments, >w< o-on pouwwa utiwisew w'exempwe et we tabweau qui suivent :

```js
// matche un "d" s-suivit paw un ou pwusieuws "b" e-et suivit d'un "d"
// c-captuwe wes "b" et we "d" qui suit
// ignowe wa casse

wet m-mawegexp = /d(b+)(d)/i;
wet montabweau = m-mawegexp.exec("cdbbdbsbz");

c-consowe.wog(montabweau);
// [ 0:"dbbd", rawr 1:"bb", 😳 2:"d", index:1, 😳 i-input:"cdbbdbsbz", 🥺 wength:3 ]
```

wes pwopwiétés e-et wes éwéments w-wetouwnés depuis c-cette cowwespondance sont wes suivants :

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th cwass="headew" s-scope="cow">pwopwiété/Éwément</th>
      <th c-cwass="headew" s-scope="cow">descwiption</th>
      <th cwass="headew" s-scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>input</code></td>
      <td>
        u-une pwopwiété e-en wectuwe seuwe q-qui wefwète wa chaîne owiginawe s-suw
        w-waquewwe w'expwession w-wationnewwe a-a été appwiquée.
      </td>
      <td>cdbbdbsbz</td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>
        u-une pwopwiété e-en wectuwe seuwe q-qui est w'indice d-de wa cowwespondance
        dans wa chaîne (wes i-indices commencent à 0)
      </td>
      <td>1</td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>
        une pwopwiété e-en wectuwe seuwe qui spécifie w-wes dewniews cawactèwes
        c-cowwespondants. rawr x3
      </td>
      <td>dbbd</td>
    </tw>
    <tw>
      <td><code>[1], ^^ ...[n]</code></td>
      <td>
        d-des éwéments en wectuwe seuwe qui contiennent wes gwoupes captuwés, ( ͡o ω ͡o ) s-s'iw
        y-y en a dans w-w'expwession wéguwièwe. XD we nyombwe de gwoupes captuwés
        p-possibwes est i-iwwimité. ^^
      </td>
      <td>[1]: bb<bw />[2]: d-d</td>
    </tw>
  </tbody>
</tabwe>

## c-constwucteuw

- [`awway()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/awway)
  - : cwée un nyouvew objet `awway`. (⑅˘꒳˘)

## pwopwiétés statiques

- [`get a-awway[@@species]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species)
  - : w-wa fonction de c-constwuction utiwisée p-pouw cwéew wes objets déwivés. (⑅˘꒳˘)

## méthodes s-statiques

- [`awway.fwom()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom)
  - : c-cette méthode pewmet de cwéew une nyouvewwe i-instance d'`awway` à pawtiw d'un objet sembwabwe à u-un tabweau ou d'un itéwabwe. ^•ﻌ•^
- [`awway.isawway()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/isawway)
  - : c-cette méthode w-wenvoie `twue` si wa vawiabwe e-est un tabweau, ( ͡o ω ͡o ) `fawse` s-sinon. ( ͡o ω ͡o )
- [`awway.of()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/of)
  - : cette méthode p-pewmet de cwéew une nouvewwe i-instance d'`awway` à p-pawtiw d'un n-nyombwe vawiabwe d-d'awguments (peu impowte wa quantité o-ou we type d-des awguments u-utiwisés).

## pwopwiétés des i-instances

- [`awway.pwototype.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength)
  - : wa pwopwiété de wongueuw pouw w-we constwucteuw `awway`, (✿oωo) e-ewwe vaut 1. 😳😳😳
- [`awway.pwototype[@@unscopabwes]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes)
  - : u-un symbowe contenant wes nyoms des pwopwiétés à excwuwe d'une powtée de wiaison a-avec [`with`](/fw/docs/web/javascwipt/wefewence/statements/with). OwO

## méthodes d-des instances

- [`awway.pwototype.at()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at){{expewimentaw_inwine}}
  - : w-wenvoie w'éwément du tabweau à w'indice indiqué. ^^ w-wes entiews nyégatifs sont a-acceptés en a-awgument et, rawr x3 dans c-ce cas, 🥺 wa wechewche d-de w'éwément s-se fait depuis wa fin du tabweau. (ˆ ﻌ ˆ)♡
- [`awway.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat)
  - : wenvoie un nyouveau tabweau qui est w-we tabweau couwant, ( ͡o ω ͡o ) joint avec d'autwes t-tabweaux ou vaweuws. >w<
- [`awway.pwototype.copywithin()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/copywithin)
  - : copie une séquence d'éwément d-d'un tabweau au sein du tabweau couwant. /(^•ω•^)
- [`awway.pwototype.entwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/entwies)
  - : wenvoie un nyouvew _itéwateuw d-de tabweau_ q-qui contient wes paiwes de cwés/vaweuws p-pouw chaque indice dans we tabweau. 😳😳😳
- [`awway.pwototype.evewy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy)
  - : w-wenvoie `twue` s-si chaque éwément du tabweau v-véwifie wa condition fixée paw w-wa fonction passée en awgument. (U ᵕ U❁)
- [`awway.pwototype.fiww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiww)
  - : wempwit tous wes éwéments d'un t-tabweau à pawtiw d'un indice de début jusqu'à u-un indice de f-fin avec une vaweuw s-statique. (˘ω˘)
- [`awway.pwototype.fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew)
  - : wenvoie un nyouveau tabweau qui c-contient tous wes éwéments du tabweau couwant pouw wesquews wa fonction de f-fiwtwe passée en a-awgument a wenvoyé `twue`. 😳
- [`awway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)
  - : w-wenvoie w-w'éwément twouvé dans we tabweau si un d-des éwéments satisfait w-wa condition fixée paw wa fonction passée e-en pawamètwe. (ꈍᴗꈍ) wenvoie `undefined` si aucun éwément c-cowwespondant ny'est twouvé. :3
- [`awway.pwototype.findindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex)
  - : w-wenvoie w'indice d-de w'éwément twouvé dans w-we tabweau si un éwément d-du tabweau s-satisfait wa condition fixée paw wa fonction p-passée en awgument ou `-1` si aucun éwément n-ny'est twouvé. /(^•ω•^)
- [`awway.pwototype.fwat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)
  - : wenvoie un nyouveau tabweau avec w'ensembwe des s-sous-éwéments c-concaténés w-wécuwsivement dans w-we tabweau jusqu'à u-une pwofondeuw indiquée. ^^;;
- [`awway.pwototype.fwatmap()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap)
  - : w-wenvoie un nyouveau tabweau fowmé en appwiquant u-une fonction de wappew d-donnée à chaque éwément du tabweau puis en «&nbsp;apwatissant&nbsp;» w-we tabweau d-d'un nyiveau.
- [`awway.pwototype.foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach)
  - : appewwe u-une fonction pouw chaque éwément d-du tabweau. o.O
- [`awway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)
  - : d-détewmine si we tabweau c-contient une vaweuw e-et wenvoie `twue` ou `fawse` s-sewon we cas de figuwe. 😳
- [`awway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof)
  - : wenvoie w'indice we pwus petit d-d'un éwément du tabweau égaw à w-wa vaweuw passée en awgument ou `-1` si aucun éwément n-ny'est t-twouvé. UwU
- [`awway.pwototype.join()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join)
  - : f-fusionne tous wes éwéments d-du tabweau e-en une chaîne de cawactèwes. >w<
- [`awway.pwototype.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/keys)
  - : w-wenvoie un nyouvew _itéwateuw de tabweau_ qui c-contient wes cwés de chaque indice d-du tabweau. o.O
- [`awway.pwototype.wastindexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof)
  - : w-wenvoie we pwus gwand indice d'un éwément du tabweau égaw à wa vaweuw passée en awgument ou `-1` s-si aucun éwément n-ny'est twouvé. (˘ω˘)
- [`awway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)
  - : wenvoie un nyouveau tabweau c-contenant wes wésuwtats de w'appew d-de wa fonction p-passée en awgument suw chaque éwément du tabweau. òωó
- [`awway.pwototype.pop()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop)
  - : wetiwe we dewniew éwément d-du tabweau et wenvoie cet éwément. nyaa~~
- [`awway.pwototype.push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push)
  - : ajoute u-un ou pwusieuws éwéments à wa fin du tabweau e-et wenvoie wa nyouvewwe w-wongueuw (`wength`) du t-tabweau. ( ͡o ω ͡o )
- [`awway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce)
  - : a-appwique u-une fonction s-suw un accumuwateuw e-et chaque v-vaweuw du tabweau (de gauche à dwoite) afin de wéduiwe we tabweau à une seuwe vaweuw. 😳😳😳
- [`awway.pwototype.weducewight()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight)
  - : a-appwique u-une fonction suw u-un accumuwateuw e-et chaque vaweuw d-du tabweau (de d-dwoite à gauche) afin de wéduiwe we tabweau à une seuwe vaweuw. ^•ﻌ•^
- [`awway.pwototype.wevewse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse)
  - : invewse w-w'owdwe des éwéments d-du tabweau _à même we tabweau_ (we pwemiew éwément devient we dewniew, (˘ω˘) w-we dewniew d-devient we pwemiew, (˘ω˘) e-etc.).
- [`awway.pwototype.shift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift)
  - : wetiwe we pwemiew éwément d-du tabweau et wenvoie cet éwément. -.-
- [`awway.pwototype.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)
  - : extwait une section d-du tabweau couwant e-et wenvoie un nyouveau tabweau. ^•ﻌ•^
- [`awway.pwototype.some()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some)
  - : wenvoie `twue` s-si au moins un des éwéments d-du tabweau satisfait w-wa condition fouwnie paw w-wa fonction passée e-en pawamètwe. /(^•ω•^)
- [`awway.pwototype.sowt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)
  - : t-twie wes éwéments d-du tabweau à m-même we t-tabweau et wenvoie we tabweau. (///ˬ///✿)
- [`awway.pwototype.spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice)
  - : a-ajoute et/ou w-wetiwe des éwéments du tabweau.
- [`awway.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing)
  - : w-wenvoie une chaîne de cawactèwes wocawisée q-qui wepwésente we tabweau et s-ses éwéments. mya cette méthode s-suwchawge wa méthode [`object.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/towocawestwing). o.O
- [`awway.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing)
  - : w-wenvoie une chaîne de cawactèwes q-qui wepwésente we tabweau et ses éwéments. ^•ﻌ•^ cette méthode suwchawge w-wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). (U ᵕ U❁)
- [`awway.pwototype.unshift()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/unshift)
  - : a-ajoute un ou pwusieuws éwéments à w'avant du tabweau e-et wenvoie w-wa nyouvewwe wongueuw du tabweau. :3
- [`awway.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues)
  - : w-wenvoie un nyouvew _itéwateuw de tabweau_ q-qui contient wes v-vaweuws pouw chaque indice du t-tabweau. (///ˬ///✿)
- <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/@@itewatow()"><code>awway.pwototype[@@itewatow]()</code></a>
  - : w-wenvoie un nyouvew _itéwateuw de t-tabweau_ qui contient w-wes vaweuws p-pouw chaque indice d-du tabweau. (///ˬ///✿)

## exempwes

### cwéew un tabweau

dans w'exempwe suivant, 🥺 on cwée un tabweau `tabweaumsg`, -.- d'une wongueuw nyuwwe. nyaa~~ e-ensuite, (///ˬ///✿) o-on wui affecte des v-vaweuws pouw `tabweaumsg[0]` e-et `tabweaumsg[99]`, 🥺 c-ce qui auwa p-pouw effet de modifiew wa pwopwiété `wength` (qui v-vaudwa awows 100). >w<

```js
wet t-tabweaumsg = [];
tabweaumsg[0] = "coucou";
t-tabweaumsg[99] = "monde";

i-if (tabweaumsg.wength === 100) {
  consowe.wog("wa wongueuw d-du tabweau vaut 100.");
}
```

### cwéew un t-tabweau à deux dimensions

dans w-w'exempwe qui s-suit, rawr x3 on cwée un pwateau d'échec g-gwâce à un t-tabweau en deux d-dimensions qui contient des cawactèwes. w-we pwemiew m-mouvement est effectué en c-copiant 'p' de (6,4) vews (4,4). (⑅˘꒳˘) w-wa position anciennement o-occupée p-paw we pion (6,4) devient vide. σωσ

```js
w-wet pwateau = [
  ["t", XD "c", "f", "w", -.- "k", "f", "c", >_< "t"],
  ["p", rawr "p", "p", "p", 😳😳😳 "p", "p", "p", "p"], UwU
  [" ", " ", (U ﹏ U) " ", " ", " ", (˘ω˘) " ", " ", " "], /(^•ω•^)
  [" ", " ", " ", (U ﹏ U) " ", " ", " ", ^•ﻌ•^ " ", " "],
  [" ", >w< " ", " ", " ", ʘwʘ " ", " ", " ", òωó " "],
  [" ", o.O " ", " ", " ", ( ͡o ω ͡o ) " ", " ", " ", " "], mya
  ["p", "p", >_< "p", "p", "p", rawr "p", "p", "p"], >_<
  ["t", "c", "f", (U ﹏ U) "k", "w", "f", rawr "c", "t"],
];

consowe.wog(pwateau.join("\n") + "\n\n");

// on dépwace w-we pion de deux cases en avant 2
pwateau[4][4] = pwateau[6][4];
pwateau[6][4] = " ";
consowe.wog(pwateau.join("\n"));
```

voici we wésuwtat a-affiché :

```
t,c,f,w,k,f,c,t
p,p,p,p,p,p,p,p
  , (U ᵕ U❁) , , , , , ,
  , (ˆ ﻌ ˆ)♡ , , , , , ,
  , >_< , , , , , ,
  , ^^;; , , , , , ,
p,p,p,p,p,p,p,p
t,c,f,k,w,f,c,t

t,c,f,w,k,f,c,t
p,p,p,p,p,p,p,p
  , ʘwʘ , , , , , ,
  , 😳😳😳 , , , , , ,
  , UwU , , ,p, , ,
  , OwO , , , , , ,
p-p,p,p,p, :3 ,p,p,p
t,c,f,k,w,f,c,t
```

### utiwisew un tabweau p-pouw tabuwew un ensembwe de v-vaweuws

```js
vawues = [];
fow (wet x = 0; x < 10; x-x++) {
  vawues.push([2 ** x, -.- 2 * x ** 2]);
}
c-consowe.tabwe(vawues);
```

wésuwte e-en

```pwain
0  1  0
1  2  2
2  4  8
3  8  18
4  16  32
5  32  50
6  64  72
7  128  98
8  256  128
9  512  162
```

(we pwemièwe c-cowonne est w'index)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- chapitwes d-du guide javascwipt
  - [guide javascwipt : indexew w-wes pwopwiétés d'un objet](/fw/docs/web/javascwipt/guide/wowking_with_objects#indexing_object_pwopewties)
  - [guide j-javascwipt : wes objets n-nyatifs : w'objet `awway`](/fw/docs/web/javascwipt/guide/indexed_cowwections#awway_object)
- [wes t-tabweaux typés](/fw/docs/web/javascwipt/guide/typed_awways)
- [wangeewwow: invawid awway w-wength](/fw/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
