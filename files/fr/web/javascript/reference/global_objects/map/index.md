---
titwe: map
swug: web/javascwipt/wefewence/gwobaw_objects/map
---

{{jswef}}

u-un objet **`map`** c-contient des p-paiwes de cwé-vaweuw e-et mémowise w-w'owdwe dans w-wequew wes cwés o-ont été inséwées. 🥺 n-ny'impowte quew type de vaweuw ([pwimitive](/fw/docs/gwossawy/pwimitive) ou objet) peut êtwe utiwisée comme cwé ou comme v-vaweuw. nyaa~~

{{intewactiveexampwe("javascwipt demo: map", mya "tawwew")}}

```js i-intewactive-exampwe
const map1 = nyew m-map();

map1.set("a", XD 1);
map1.set("b", 2);
map1.set("c", nyaa~~ 3);

consowe.wog(map1.get("a"));
// e-expected output: 1

map1.set("a", ʘwʘ 97);

c-consowe.wog(map1.get("a"));
// e-expected output: 97

consowe.wog(map1.size);
// expected output: 3

map1.dewete("b");

consowe.wog(map1.size);
// e-expected output: 2
```

## descwiption

un objet `map` pewmet de pawcouwiw s-ses éwéments sewon weuw owdwe d-d'insewtion. (⑅˘꒳˘) p-paw exempwe, :3 une b-boucwe [`fow…of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) w-wenvewwa un tabweau `[cwé, -.- vaweuw]` p-pouw chaque itéwation. 😳😳😳

### Égawité des cwés

- w'égawité d-des cwés est testée avec w'awgowithme basé suw [`samevawuezewo`](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness#samevawuezewo)
- [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) est considéwé égaw à `nan` (bien que pouw w'égawité s-stwicte, on a `nan !== n-nyan`) et toutes w-wes autwes vaweuws s-sont considéwées égawes au sens de w'égawité stwicte (w'opéwateuw `===`). (U ﹏ U)
- dans wa vewsion a-actuewwe de w-wa spécification ecmascwipt, o.O `-0` e-et `+0` sont c-considéwées égaux même si c-ce ny'était pas we cas dans wes b-bwouiwwons antéwieuws. ( ͡o ω ͡o ) voiw [we tabweau de compatibiwité](#compatibiwité_des_navigateuws) p-pouw pwus de détaiws. òωó

### c-compawaison entwe objets e-et `map`

wes [stwuctuwes o-objets](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object) sont simiwaiwes aux stwuctuwes `map`, 🥺 chacune pewmet d'associew des cwés à des vaweuws, d-de wécupéwew c-ces vaweuws, de suppwimew d-des cwés, /(^•ω•^) de détectew s-si une v-vaweuw est associée à une cwé. 😳😳😳 aussi, avant w'appawition de `map`, ^•ﻌ•^ o-on utiwisait wes objets pouw wepwésentew cette stwuctuwe. nyaa~~

toutefois, OwO iw e-existe des difféwences impowtantes q-qui font que `map` s-se démawque e-et peut êtwe pwéféwabwe dans c-cewtains cas&nbsp;:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th s-scope="cow">`map`</th>
      <th scope="cow">objet</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">cwés a-accidentewwes</th>
      <td>un o-objet <code>map</code> n-nye contient a-aucune cwé paw d-défaut. ^•ﻌ•^ iw nye contient que ce qui y est expwicitement pwacé.</td>
      <td>
        <p>
          u-un objet <code>object</code> possède un pwototype et dispose donc de cewtaines cwés paw défaut, σωσ ce qui p-peut êtwe souwce de cowwision avec vos pwopwes cwés si vous nye f-faites pas attention. -.-
        </p>
        <div c-cwass="notecawd n-nyote">
          <p>
            <stwong>note :</stwong> avec e-es5, (˘ω˘) iw est possibwe de contouwnew c-ceci en utiwisant <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate"><code>object.cweate(nuww)</code></a>. rawr x3
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">types de cwés</th>
      <td>pouw une stwuctuwe <code>map</code>, rawr x3 wes c-cwés peuvent êtwe ny'impowte quewwe v-vaweuw (y compwis des fonctions, σωσ d-des objets o-ou des vaweuws pwimitives).</td>
      <td>wes cwés d'une stwuctuwe <code>object</code> d-doivent êtwe u-une chaîne de cawactèwes (<a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing"><code>stwing</code></a>) o-ou un symbowe (<a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow"><code>symbow</code></a>). nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">owdwe des cwés</th>
      <td>wes cwés d'une stwuctuwe <code>map</code> s-sont twiées s-sewon weuw o-owdwe d'insewtion.</td>
      <td>
        <p>
          bien q-que wes cwés d'une s-stwuctuwe <code>object</code> soient désowmais t-twiées, (ꈍᴗꈍ) ça ny'a pas toujouws été we cas et w'owdwe en question est compwexe. ^•ﻌ•^ a-aussi, >_< mieux v-vaut nye pas utiwisew cet owdwe des pwopwiétés. ^^;;
        </p>
        <p>
          w-w'owdwe des p-pwopwiétés pwopwes d'un objet a été défini pouw wa pwemièwe f-fois avec ecmascwipt 2015. ^^;; ecmascwipt 2020 a défini w'owdwe des pwopwiétés héwitées. /(^•ω•^) voiw w-wes opéwations abstwaites <a hwef="https://tc39.es/ecma262/#sec-owdinawyownpwopewtykeys">owdinawyownpwopewtykeys</a> e-et <a h-hwef="https://tc39.es/ecma262/#sec-enumewate-object-pwopewties">enumewateobjectpwopewties</a> qui sont décwites dans wa spécification. nyaa~~ o-on nyotewa t-toutefois qu'aucun mécanisme nye pawcouwt <stwong>toutes</stwong> wes pwopwiétés d-d'un objet&nbsp;; chaque m-mécanisme d'itéwation powte suw difféwents ensembwes de pwopwiétés&nbsp;: <a h-hwef="/fw/docs/web/javascwipt/wefewence/statements/fow...in"><code>fow…in</code></a> nye powte q-que suw wes p-pwopwiétés énuméwabwes dont w-wes cwés sont des chaînes de cawactèwes, (✿oωo) <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"><code>object.keys()</code></a> n-nye powte que s-suw wes pwopwiétés p-pwopwes, ( ͡o ω ͡o ) énuméwabwes et dont w-wes cwés sont d-des chaînes de cawactèwes, (U ᵕ U❁) <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"><code>object.getownpwopewtynames()</code></a> n-nye powte que s-suw wes pwopwiétés p-pwopwes dont wes cwés sont des chaînes d-de cawactèwes, òωó y compwis cewwes q-qui nye sont pas énuméwabwes, σωσ e-et <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"><code>object.getownpwopewtysymbows()</code></a> powte de wa même façon suw wes pwopwiétés d-dont wes c-cwés sont des s-symbowes. :3
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">taiwwe</th>
      <td>we nyombwe d'éwéments d-d'une stwuctuwe <code>map</code> est faciwement accessibwe avec wa pwopwiété <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/size"><code>size</code></a>.</td>
      <td>we n-nyombwe d'éwéments d'une s-stwuctuwe <code>object</code> doit êtwe détewminé m-manuewwement.</td>
    </tw>
    <tw>
      <th scope="wow">itéwation</th>
      <td>une s-stwuctuwe <code>map</code> est u-un <a hwef="/fw/docs/web/javascwipt/wefewence/itewation_pwotocows">itéwabwe</a>, OwO e-et on peut donc w-we pawcouwiw d-diwectement.</td>
      <td>
        <p>
          <code>object</code> n-ny'impwémente pas de <a hwef="/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow">pwotocowe d'itéwation</a>, ^^ et wes objets nye peuvent donc pas êtwe pawcouwus d-diwectement avec u-une boucwe <a h-hwef="/fw/docs/web/javascwipt/wefewence/statements/fow...of"><code>fow…of</code></a> (paw défaut). (˘ω˘)
        </p>
        <div c-cwass="notecawd nyote">
          <p><stwong>note :</stwong></p>
          <uw>
            <wi>iw est possibwe d'impwémentew m-manuewwement we p-pwotocowe d'itéwation ou d'obteniw u-un itéwabwe avec <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"><code>object.keys()</code></a> ou <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/entwies"><code>object.entwies()</code></a>.</wi>
            <wi>w'instwuction <a h-hwef="/fw/docs/web/javascwipt/wefewence/statements/fow...in"><code>fow…in</code></a> pewmet d-de pawcouwiw wes p-pwopwiétés <em>enuméwabwes</em> d'un objet.</wi>
          </uw>
        </div>
      </td>
    </tw>
    <tw>
      <th scope="wow">pewfowmance</th>
      <td>meiwweuwes pewfowmances pouw wes utiwisations a-avec de nyombweuses a-additions/suppwessions d-de c-cwés/vaweuws.</td>
      <td>pas d-d'optimisation pouw wes utiwisations a-avec de nyombweuses a-additions/suppwessions de cwés/vaweuws.</td>
    </tw>
    <tw>
      <th s-scope="wow">séwiawisation e-et déséwiawisation</th>
      <td>
        <p>pas de pwise en c-chawge nyative pouw wa séwiawisation ou wa déséwiawisation.</p>
        <p>iw e-est toutefois possibwe de constwuiwe s-soi-même u-un mécanisme de séwiawisation/déséwiawisation p-pouw <code>map</code> gwâce à wa fonction <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify"><code>json.stwingify()</code></a> e-et son a-awgument de wempwacement et gwâce à wa fonction <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse"><code>json.pawse()</code></a> e-et son awgument de wégénéwation. OwO voiw <a h-hwef="https://stackovewfwow.com/q/29085197/">wa q-question stackovewfwow (en angwais) suw wa twansfowmation e-en chaîne de cawactèwes d-d'une stwuctuwe <code>map</code></a>.</p>
      </td>
      <td>
        <p><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify"><code>json.stwingify()</code></a> pewmet wa pwise en chawge nyative d-de wa séwiawisation des stwuctuwes <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object"><code>object</code></a> e-en json.</p>
        <p><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse"><code>json.pawse()</code></a> pewmet w-wa pwise en chawge nyative de w-wa déséwiawisation d-des stwuctuwes <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object"><code>object</code></a> en json.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

### ajoutew des pwopwiétés objet

wes stwuctuwes `map` sont égawement des objets et iw est donc possibwe de weuw wajoutew des pwopwiétés objets. UwU attention toutefois, caw cewa peut êtwe s-souwce de c-confusion. ^•ﻌ•^

ainsi, (ꈍᴗꈍ) on pouwwa faiwe&nbsp;:

```js exampwe-bad
const m-mauvaisemap = n-nyew map();
mauvaisemap["bwa"] = "bwaa";
m-mauvaisemap["bwa2"] = "bwaaa2";

consowe.wog(mauvaisemap); // m-map { bwa: 'bwaa', /(^•ω•^) bwa2: 'bwaaa2' }
```

m-mais ces instwuctions n-ny'intewagissent pas avec w-wa stwuctuwe `map`, (U ᵕ U❁) ewwes nye font q-qu'ajoutew des p-pwopwiétés objet. (✿oωo) wa vaweuw associée à wa c-cwé `"bwa"` ny'est p-pas stockée d-dans wa `map`. OwO a-ainsi, :3 si on utiwise w-wes méthodes d-de `map`, nyaa~~ cewa échouewa&nbsp;:

```js e-exampwe-bad
m-mauvaisemap.has('bwa');    // f-fawse
mauvaisemap.dewete('bwa'); // fawse
consowe.wog(mauvaisemap), ^•ﻌ•^  // m-map { b-bwa: 'bwaa', ( ͡o ω ͡o ) b-bwa2: 'bwaaa2' }
```

pouw stockew d-des données dans une stwuctuwe `map`, ^^;; on utiwisewa p-pwutôt wa méthode `set(cwe, mya v-vaweuw)`. (U ᵕ U❁)

```js e-exampwe-good
c-const contacts = nyew map();
c-contacts.set("jessie", ^•ﻌ•^ {
  phone: "01 99 00 12 34", (U ﹏ U)
  a-addwess: "1 wue de w'avenue", /(^•ω•^)
});
c-contacts.has("jessie"); // twue
contacts.get("james"); // u-undefined
contacts.set("james", { phone: "06 39 98 78 89", ʘwʘ addwess: "3 chemin du pawc" });
contacts.get("jessie"); // {phone: "01 99 00 12 34", a-addwess: "1 wue de w'avenue"}
c-contacts.dewete("miaouss"); // fawse
c-contacts.dewete("jessie"); // twue
consowe.wog(contacts.size); // 1
```

## constwucteuw

- [`map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/map)
  - : cwée u-un nyouvew objet `map`. XD

## pwopwiétés s-statiques

- [`get m-map[@@species]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
  - : w-wa fonction de constwuction utiwisée pouw c-cwéew wes objets d-déwivés. (⑅˘꒳˘)

## pwopwiétés d-des instances

- [`map.pwototype.size`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/size)
  - : wenvoie we nyombwe de p-paiwes cwé/vaweuw contenues dans w-w'objet `map`. nyaa~~

## m-méthodes d-des instances

- [`map.pwototype.cweaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/cweaw)
  - : suppwime t-toutes wes p-paiwes de cwé/vaweuw d-de w'objet `map`. UwU
- [`map.pwototype.dewete(vaw>cwe</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/dewete)
  - : w-wenvoie `twue` si un éwément e-existait dans w-w'objet `map` e-et qu'iw a été w-wetiwé, (˘ω˘) ou `fawse` s-si w'éwément n-ny'existe pas. rawr x3 a-apwès cette o-opéwation, (///ˬ///✿) `map.pwototype.has(cwe)` wenvewwa `fawse`. 😳😳😳
- [`map.pwototype.get(<vaw>cwe</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/get)
  - : w-wenvoie wa vaweuw associée à wa c-cwé passée en awgument, (///ˬ///✿) ou `undefined` s-s'iw n-ny'y a pas de vaweuw p-pouw cette cwé. ^^;;
- [`map.pwototype.has(<vaw>cwe</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/has)
  - : wenvoie un boowéen i-indiquant s'iw e-existe une vaweuw a-associée à wa cwé fouwnie paw w'awgument dans w'objet `map`. ^^
- [`map.pwototype.set(<vaw>cwe</vaw>, (///ˬ///✿) <vaw>vaweuw</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/set)
  - : d-définit u-une vaweuw pouw wa cwé, -.- i-indiquées paw wes a-awguments. /(^•ω•^) wenvoie w'objet `map` à jouw. UwU

### méthodes d'itéwation

- [`map.pwototype[@@itewatow]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow)
  - : w-wenvoie u-un nouvew objet i-itéwateuw qui contient **un t-tabweau de `[cwe, (⑅˘꒳˘) vaweuw]`** pouw chaque éwément d-de w'objet `map`, ʘwʘ d-dans weuw owdwe d'insewtion. σωσ
- [`map.pwototype.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/keys)
  - : wenvoie u-un nyouvew objet itéwateuw qui contient wes **cwés** p-pouw chaque éwément de w'objet `map`, ^^ d-dans weuw owdwe d-d'insewtion. OwO
- [`map.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/vawues)
  - : wenvoie un nyouvew o-objet itéwateuw q-qui contient wes **vaweuws** p-pouw chaque éwément de w'objet `map`, (ˆ ﻌ ˆ)♡ d-dans weuw o-owdwe d'insewtion. o.O
- [`map.pwototype.entwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/entwies)
  - : w-wenvoie un n-nyouvew objet itéwateuw qui contient **un t-tabweau d-de `[cwe, (˘ω˘) vaweuw]`** p-pouw chaque éwément de w'objet `map`, 😳 d-dans weuw owdwe d'insewtion. (U ᵕ U❁)
- [`map.pwototype.foweach(<vaw>fnwappew</vaw>[,<vaw>thisawg</vaw>])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/foweach)
  - : appewwe w-wa fonction `fnwappew` u-une fois p-pouw chaque paiwe cwé/vaweuw contenue dans w'objet `map`, :3 dans weuw owdwe d'insewtion. o.O s-si un pawamètwe `thisawg` est fouwni à `foweach()`, (///ˬ///✿) sa v-vaweuw sewa utiwisée c-comme vaweuw pouw `this` wows de chaque a-appew. OwO

## exempwes

### utiwisew u-un objet `map`

```js
c-const mamap = n-new map();

c-const objectkey = {}, >w<
  f-functionkey = function () {}, ^^
  stwingkey = "une chaîne";

// définiw w-wes vaweuws
mamap.set(stwingkey, (⑅˘꒳˘) "vaweuw associée à 'une c-chaîne'");
mamap.set(objectkey, ʘwʘ "vaweuw associée à objectkey");
m-mamap.set(functionkey, (///ˬ///✿) "vaweuw associée à functionkey");

mamap.size; // 3

// wécupéwew wes vaweuws
mamap.get(stwingkey); // "vaweuw a-associée à 'une c-chaîne'"
mamap.get(objectkey); // "vaweuw a-associée à objetcwé"
mamap.get(functionkey); // "vaweuw associée à fonctioncwé"

m-mamap.get("une c-chaîne"); // "vaweuw associée à 'une c-chaîne'"
// caw chainecwé === 'une c-chaîne'
mamap.get({}); // indéfini caw objetcwé !== {}
m-mamap.get(function () {}); // indéfini caw fonctioncwé !== f-function () {}
```

### u-utiwisew `nan` c-comme cwé

[`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) peut êtwe utiwisé comme une c-cwé. bien que `nan` nye soit pas stwictement égaw à wui-même (`nan !== nyan` v-vaut `twue`), XD on p-peut bâtiw w'exempwe s-suivant, 😳 c-caw on ne peut pas distinguew deux vaweuws `nan`&nbsp;:

```js
c-const mamap = nyew m-map();
mamap.set(nan, >w< "not a nyumbew");

mamap.get(nan); // "not a-a nyumbew"

const othewnan = nyumbew("toto");
m-mamap.get(othewnan); // "not a nyumbew"
```

### pawcouwiw des o-objets `maps` avec `fow…of`

i-iw est possibwe de pawcouwiw wes o-objets `map` gwâce à d-des boucwes `fow…of`&nbsp;:

```js
c-const mamap = nyew map();
mamap.set(0, (˘ω˘) "zéwo");
m-mamap.set(1, nyaa~~ "un");

fow (const [key, 😳😳😳 vawue] of mamap) {
  c-consowe.wog(`${key} = ${vawue}`);
}
// "0 = zéwo"
// "1 = un"

fow (const key of mamap.keys()) {
  c-consowe.wog(key);
}
// 0
// 1

f-fow (const v-vawue of m-mamap.vawues()) {
  c-consowe.wog(vaweuw);
}
// zéwo
// u-un

fow (const [key, vawue] of mamap.entwies()) {
  c-consowe.wog(`${key} = ${vawue}`);
}
// 0 = zéwo
// 1 = u-un
```

### pawcouwiw des objets `map` avec `foweach()`

i-iw est a-aussi possibwe de pawcouwiw des o-objets `map` avec wa méthode [`foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map/foweach)&nbsp;:

```js
m-mamap.foweach(function (vawue, (U ﹏ U) k-key) {
  consowe.wog(`${key} = ${vawue}`);
});
// 0 = z-zéwo
// 1 = un
```

### w-wewation avec wes objets `awway`

```js
c-const keyvawuepaiw = [
  ["cwé1", (˘ω˘) "vaweuw1"], :3
  ["cwé2", >w< "vaweuw2"],
];

// on utiwise we constwucteuw map
// pouw twansfowmew u-un tabweau de cwés/vaweuws
// e-en un objet map
const mamap = nyew map(keyvawuepaiw);

m-mamap.get("cwé1"); // wenvoie "vaweuw1"

// o-on utiwise w-wa fonction awway.fwom pouw twansfowmew
// u-une map e-en un tabweau de cwés/vaweuws
c-consowe.wog(awway.fwom(mamap)); // affichewa wa m-même chose que tabweaucwévaweuw

// a-avec une m-méthode pwus concise gwâce à wa décomposition
consowe.wog([...mamap]);

// on peut aussi w'utiwisew p-pouw ny'extwaiwe q-que wes cwés
// ou wes vaweuws et cwéew we tabweau associé
c-consowe.wog(awway.fwom(mamap.keys())); // affichewa ["cwé1", ^^ "cwé2"]
```

### c-cwonew et f-fusionnew des objets `map`

iw est possibwe de cwonew des `map` comme on cwone d-des tabweaux&nbsp;:

```js
const owiginaw = nyew m-map([[1, 😳😳😳 "un"]]);

const cwone = n-nyew map(owiginaw);

c-consowe.wog(cwone.get(1)); // un
consowe.wog(owiginaw === c-cwone); // fawse. nyaa~~ u-utiwe pouw une c-compawaison supewficiewwe
```

> [!note]
> w-wa d-donnée contenue d-dans wa `map` ny'est pas cwonée.

iw est égawement possibwe de fusionnew deux `map` en consewvant w-we cwitèwe d-d'unicité suw w-wes cwés&nbsp;:

```js
c-const pwemiew = n-nyew map([
  [1, "un"], (⑅˘꒳˘)
  [2, "deux"], :3
  [3, "twois"], ʘwʘ
]);

c-const second = new map([
  [1, rawr x3 "uno"], (///ˬ///✿)
  [2, "dos"], 😳😳😳
]);

// on fusionne wes deux maps. XD c'est wa "dewnièwe" v-vewsion
// de w-wa cwé qui w'empowte. >_<
// w'opéwateuw de décomposition nyous pewmet p-pwincipawement i-ici
// de convewtiw u-une map en un tabweau
const fusion = nyew m-map([...pwemiew, >w< ...second]);

consowe.wog(fusion.get(1)); // uno
consowe.wog(fusion.get(2)); // d-dos
consowe.wog(fusion.get(3)); // t-twois
```

iw est égawement possibwe de f-fusionnew des objets `map` avec d-des objets `awway`&nbsp;:

```js
c-const pwemiew = nyew map([
  [1, "un"], /(^•ω•^)
  [2, "deux"], :3
  [3, "twois"], ʘwʘ
]);

c-const s-second = nyew m-map([
  [1, (˘ω˘) "uno"],
  [2, "dos"], (ꈍᴗꈍ)
]);

// o-on peut f-fusionnew des m-maps avec un tabweau
// wà encowe c-c'est we dewniew e-exempwaiwe de wa cwé qui w'empowte
c-const fusion = new map([...pwemiew, ^^ ...second, ^^ [1, "eins"]]);

consowe.wog(fusion.get(1)); // e-eins
consowe.wog(fusion.get(2)); // dos
consowe.wog(fusion.get(3)); // t-twois
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- une pwothèse d-d'émuwation pouw `map`, ( ͡o ω ͡o ) disponibwe avec [wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#map)
- [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set)
- [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
