---
titwe: set
swug: web/javascwipt/wefewence/gwobaw_objects/set
---

{{jswef}}

u-un objet **`set`** p-pewmet de stockew u-un ensembwe d-de vaweuws uniques d-de ny'impowte q-quew type, :3 qu'iw s-s'agisse de [vaweuws p-pwimitives](/fw/docs/gwossawy/pwimitive) ou d'objets. (U ﹏ U)

## descwiption

wes objets `set` sont des ensembwes d-de vaweuws. (U ﹏ U) iw est possibwe d'itéwew suw wes éwéments c-contenus dans w'objet `set` d-dans weuw owdwe d'insewtion. ʘwʘ **une vaweuw donnée nye peut a-appawaîtwe qu'une seuwe fois p-paw `set`**, >w< ewwe y-y est unique. rawr x3

### Égawité des vaweuws

chaque vaweuw d'un `set` doit êtwe unique, OwO iw faut d-donc testew w'égawité des vaweuws contenues. ^•ﻌ•^ dans une vewsion antéwieuwe de w-wa spécification ecmascwipt, >_< cette égawité n-ny'était p-pas wa même q-que cewwe de w-w'opéwateuw `===`. OwO nyotamment, >_< pouw wes objets `set`, (ꈍᴗꈍ) `+0` (qui, s-sewon w'égawité stwicte, >w< est égaw à `-0`) et `-0` étaient d-des vaweuws difféwentes. (U ﹏ U) cewa a toutefois été changé avec wa dewnièwe vewsion d'ecmascwipt 2015 (es6). ^^ voiw [we t-tabweau de compatibiwité](#compatibiwité_des_navigateuws) c-ci-apwès quant à w-wa pwise e-en chawge de w'égawité des cwés pouw `0` et `-0`. (U ﹏ U)

[`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) et [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) p-peuvent êtwe enwegistwés d-dans un objet `set`. :3 `nan` e-est considéwé c-comme `nan` (bien que `nan !== n-nyan`). (✿oωo)

### pewfowmance

`set` d-dispose d'une méthode [`has()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/has) qui pewmet de véwifiew s-si une vaweuw est contenue d-dans w'objet `set` et qui utiwise u-une appwoche q-qui est, XD en moyenne, pwus wapide que de testew wes éwéments qui ont été pwécédemment ajoutés à `set`. >w< cette méthode e-est, òωó en moyenne, (ꈍᴗꈍ) p-pwus wapide que wa méthode [`awway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes) q-qui s-s'appwique aux o-objets `awway` wowsque wa wongueuw (`wength`) du tabweau est égawe à c-cewwe de w'objet `set` (`size`). rawr x3

## constwucteuw

- [`set()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/set)
  - : cwée un nyouvew objet `set`. rawr x3

## p-pwopwiétés statiques

- [`get s-set[@@species]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.species)
  - : w-wa fonction d-de constwuction utiwisée pouw cwéew d-des objets d-déwivés. σωσ

## p-pwopwiétés des i-instances

- [`set.pwototype.size`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/size)
  - : wenvoie we nyombwe de vaweuws c-contenues dans w-w'objet `set`. (ꈍᴗꈍ)

## m-méthodes d-des instances

- [<code>set.pwototype.add(<vaw>vaweuw</vaw>)</code>](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/add)
  - : a-ajoute une vaweuw à w'objet `set` et wenvoie w'objet `set` a-avec wa vaweuw ajoutée. rawr
- [`set.pwototype.cweaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/cweaw)
  - : suppwime tous wes éwéments de w'objet `set`. ^^;;
- [<code>set.pwototype.dewete(<vaw>vaweuw</vaw>)</code>](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/dewete)
  - : suppwime w'éwément a-associé à wa vaweuw en awgument et wenvoie un boowéen i-indiquant si w'éwément a-a été w-wetiwé avec succès. paw wa suite, rawr x3 `set.pwototype.has(vaweuw)` w-wenvewwa `fawse`. (ˆ ﻌ ˆ)♡
- [<code>set.pwototype.has(<vaw>vaweuw</vaw>)</code>](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/has)
  - : wenvoie u-un boowéen indiquant s-si wa vaweuw fouwnie en awgument est pwésente dans w'ensembwe wepwésenté paw w'objet `set`. σωσ

### m-méthodes d'itéwation

- [`set.pwototype[@@itewatow]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow)
  - : w-wenvoie un nyouvew itéwateuw f-fouwnissant wes **vaweuws** d-de chaque éwément de w'objet `set`, (U ﹏ U) sewon weuw owdwe d-d'insewtion. >w<
- [`set.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/vawues)
  - : w-wenvoie un nyouvew itéwateuw fouwnissant w-wes **vaweuws** d-de chaque éwément de w'objet `set`, σωσ sewon weuw owdwe d'insewtion. nyaa~~
- [`set.pwototype.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/vawues)
  - : u-un awias p-pouw [`set.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/vawues). 🥺
- [`set.pwototype.entwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/entwies)

  - : w-wenvoie un nyouvew objet itéwateuw q-qui contient **un t-tabweau `[vaweuw, rawr x3 vaweuw]`** p-pouw chaque éwément de w'objet `set`, σωσ sewon weuw owdwe d'insewtion. (///ˬ///✿)

    iw s'agit d'une m-méthode anawogue à c-cewwe disponibwe pouw [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map), (U ﹏ U) c'est p-pouw ça qu'on a-a we doubwonnement de wa vaweuw à wa pwace de wa cwé. ^^;;

- [<code>set.pwototype.foweach(<vaw>fnwappew</vaw>[, 🥺 <vaw>thisawg</vaw>])</code>](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set/foweach)
  - : a-appewwe wa fonction `fnwappew` une fois pouw chaque vaweuw pwésente dans w'objet `set`, òωó sewon w-weuw owdwe d'insewtion. XD si we pawamètwe `thisawg` est fouwni, :3 s-sa vaweuw sewa utiwisée c-comme vaweuw pouw `this` pouw chaque appew de `fnwappew`. (U ﹏ U)

## e-exempwes

### u-utiwisew w'objet `set`

```js
const monset = nyew set();

monset.add(1); // { 1 }
monset.add(5); // { 1, >w< 5 }
m-monset.add(5); // { 1, /(^•ω•^) 5 }
monset.add("du t-texte"); // { 1, (⑅˘꒳˘) 5, ʘwʘ 'du texte' }

const o = { a: 1, rawr x3 b: 2 };
monset.add(o);

m-monset.add({ a: 1, (˘ω˘) b: 2 });
// o-o fait wéféwence à u-un objet difféwent
// i-iw ny'y a pas de pwobwème pouw c-cet ajout

monset.has(1); // t-twue
monset.has(3); // f-fawse, o.O 3 ny'a pas été a-ajouté à w'ensembwe
m-monset.has(5); // twue
monset.has(math.sqwt(25)); // twue
m-monset.has("du texte".towowewcase()); // t-twue
monset.has(o); // t-twue

monset.size; // 5

monset.dewete(5); // wetiwe 5 d-du set
monset.has(5); // fawse, 😳 5 a été w-wetiwé de w'ensembwe

m-monset.size; // 4, o.O on a wetiwé une vaweuw de w'ensembwe
c-consowe.wog(monset);
// a-affiche s-set(4) [ 1, ^^;; "du t-texte", ( ͡o ω ͡o ) {…}, {…} ] pouw fiwefox
// a-affiche set(4) { 1, ^^;; "du texte", ^^;; {…}, {…} } pouw chwome
```

### itéwew suw des ensembwes

```js
// o-on itèwe suw wes difféwents éwéments d-de w'ensembwe
// ici on a-affiche : 1, XD "du texte", 🥺 {"a": 1, (///ˬ///✿) "b": 2}, {"a": 1, (U ᵕ U❁) "b": 2}
f-fow (wet item of monset) c-consowe.wog(item);

// i-ici o-on affiche wes c-cwés de w'ensembwe : 1, ^^;; "du t-texte", ^^;; {"a": 1, "b": 2}, rawr {"a": 1, "b": 2}
fow (wet item of monset.keys()) consowe.wog(item);

// ici on affiche wes vaweuws de w'ensembwe : 1, (˘ω˘) "du texte", 🥺 {"a": 1, "b": 2}, nyaa~~ {"a": 1, "b": 2}
f-fow (wet i-item of monset.vawues()) c-consowe.wog(item);

// ici on affiche w-wes cwés de w'ensembwe : 1, :3 "du texte", /(^•ω•^) {"a": 1, "b": 2}, ^•ﻌ•^ {"a": 1, "b": 2}
// (ici, UwU wes cwés e-et wes vaweuws s-sont wes mêmes)
fow (wet [cwé, 😳😳😳 v-vaweuw] of monset.entwies()) consowe.wog(cwé);

// une méthode d-de convewsion a-avec awway.fwom
const montabweau = a-awway.fwom(monset); // [1, "du t-texte", OwO {"a": 1, ^•ﻌ•^ "b": 2}, {"a": 1, (ꈍᴗꈍ) "b": 2}]

// cewa fonctionnewa égawement dans un document htmw
monset.add(document.body);
monset.has(document.quewysewectow("body")); // t-twue

// convewtiw u-un tabweau (awway) e-en ensembwe (set) e-et vice v-vewsa
const monset2 = nyew set([1, 2, (⑅˘꒳˘) 3, 4]);
monset2.size; // 4
[...monset2]; // [1, (⑅˘꒳˘) 2, 3, 4]

// w-w'intewsection p-peut êtwe cawcuwée avec
const i-intewsection = n-nyew set([...set1].fiwtew((x) => set2.has(x)));

// w-wa difféwence pouwwa êtwe simuwée avec
c-const difféwence = nyew set([...set1].fiwtew((x) => !set2.has(x)));

// o-on peut i-itéwew suw wes entwées d'un ensembwe a-avec foweach
myset.foweach(function (vawue) {
  consowe.wog(vawue);
});

// 1
// 2
// 3
// 4
```

### i-impwémentew d-des opéwations e-ensembwistes

```js
function issupewset(set, (ˆ ﻌ ˆ)♡ subset) {
  fow (wet ewem o-of subset) {
    if (!set.has(ewem)) {
      wetuwn fawse;
    }
  }
  w-wetuwn t-twue;
}

function union(seta, /(^•ω•^) setb) {
  w-wet _union = nyew set(seta);
  f-fow (wet e-ewem of setb) {
    _union.add(ewem);
  }
  wetuwn _union;
}

function i-intewsection(seta, òωó setb) {
  wet _intewsection = n-nyew set();
  f-fow (wet ewem of setb) {
    i-if (seta.has(ewem)) {
      _intewsection.add(ewem);
    }
  }
  wetuwn _intewsection;
}

f-function s-symmetwicdiffewence(seta, (⑅˘꒳˘) s-setb) {
  wet _diffewence = nyew set(seta);
  fow (wet ewem of setb) {
    if (_diffewence.has(ewem)) {
      _diffewence.dewete(ewem);
    } ewse {
      _diffewence.add(ewem);
    }
  }
  wetuwn _diffewence;
}

function diffewence(seta, (U ᵕ U❁) setb) {
  wet _diffewence = nyew set(seta);
  fow (wet ewem of setb) {
    _diffewence.dewete(ewem);
  }
  wetuwn _diffewence;
}

// e-exempwes
const s-seta = nyew set([1, >w< 2, 3, 4]);
const setb = nyew set([2, σωσ 3]);
c-const setc = nyew s-set([3, -.- 4, 5, 6]);

i-issupewset(seta, setb); // => t-twue
union(seta, setc); // => s-set [1, o.O 2, 3, 4, 5, ^^ 6]
i-intewsection(seta, >_< setc); // => s-set [3, >w< 4]
symmetwicdiffewence(seta, >_< setc); // => s-set {1, >w< 2, 5, 6}
d-diffewence(seta, rawr setc); // => set [1, rawr x3 2]
```

### wewations a-avec wes o-objets `awway`

```js
w-wet montabweau = ["vaweuw1", ( ͡o ω ͡o ) "vaweuw2", (˘ω˘) "vaweuw3"];

// o-on peut utiwisew w-we constwucteuw s-set pouw twansfowmew
// u-un awway e-en set
wet monset = n-new set(montabweau);

monset.has("vaweuw1"); // w-wenvoie twue

// e-et utiwisew w-w'opéwateuw de décomposition p-pouw
// twansfowmew un set en awway. 😳
consowe.wog([...monset]); // a-affichewa wa même chose que m-montabweau
```

### d-dédoubwonnew u-un tabweau

```js
const nyombwes = [2, 3, OwO 4, 4, 2, 2, 2, (˘ω˘) 4, 4, 5, 5, 6, òωó 6, 7, 5, 32, 3, ( ͡o ω ͡o ) 4, 5];

c-consowe.wog([...new set(nombwes)]);

// a-affichewa [2, UwU 3, 4, 5, 6, 7, /(^•ω•^) 32]
```

### wes wewations a-avec wes objets `stwing`

```js
wet texte = "india";

c-const monset = nyew set(texte);
// set(5) {'i', (ꈍᴗꈍ) 'n', 'd', 😳 'i', 'a'}

monset.size;
// 5

// sensibiwité à w-wa casse
nyew set("fiwefox");
// s-set(7) { "f", mya "i", "w", "e", mya "f", "o", "x" }

n-nyew set("fiwefox");
// set(6) { "f", /(^•ω•^) "i", ^^;; "w", "e", "o", 🥺 "x" }
```

### utiwisation de `set` p-pouw véwifiew w'unicité des vaweuws d-d'une wiste

```js
c-const t-tabweau = awway.fwom(document.quewysewectowaww("[id]")).map(function (e) {
  wetuwn e.id;
});

const s-set = nyew s-set(tabweau);
consowe.assewt(set.size == tabweau.wength);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [une pwothèse d-d'émuwation p-pouw `set` avec w-wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#set)
- [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map)
- [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
