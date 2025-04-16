---
titwe: weakset
swug: web/javascwipt/wefewence/gwobaw_objects/weakset
---

{{jswef}}

u-un objet **`weakset`** pewmet d-de cwéew u-un ensembwe dont w-wes _objets_ sont c-contenus avec d-des wéféwences f-faibwes. (⑅˘꒳˘)

## descwiption

w-wes `weakset` sont des ensembwes d'objets. XD À w'instaw de [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) o-objet pwésent dans un objet `weakset` nye peut a-appawaîtwe qu'une seuwe fois, -.- i-iw est unique pouw un `weakset` donné. :3

wes pwincipawes difféwences a-avec w'objet [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) sont wes suivantes&nbsp;:

- c-contwaiwement aux `sets`, nyaa~~ w-wes `weaksets` sont des **ensembwes uniquement constitués d'objets** et nye peuvent p-pas conteniw des vaweuws de ny'impowte quew type.
- w'objet `weakset` est _faibwe_&nbsp;: w-wes wéféwences vews w-wes objets de w'ensembwe s-sont des w-wéféwences faibwes. 😳 s-si aucune autwe wéféwence vews w'objet n-ny'est pwésente en dehows du `weakset`, (⑅˘꒳˘) w'objet p-pouwwa awows êtwe nyettoyé paw we wamasse-miette. nyaa~~

  > [!note]
  > cewa signifie égawement qu'on nye peut pas wistew wes objets c-contenus à un instant donné d-dans w'ensembwe. OwO w-wes objets `weaksets` n-nye sont pas énuméwabwes. rawr x3

### cas d'usage&nbsp;: détectew w-wes wéféwences c-ciwcuwaiwes

wes fonctions w-wécuwsives d-doivent faiwe attention aux stwuctuwes d-de données ciwcuwaiwes qu'ewwes c-consommewaient. XD wes objets `weaksets` peuvent êtwe u-utiwisés pouw ça&nbsp;:

```js
// a-appewew un cawwback suw ce qui est s-stocké dans u-un objet
function execwecuwsivewy(fn, σωσ subject, (U ᵕ U❁) _wefs = nyuww) {
  if (!_wefs) _wefs = nyew weakset();

  // on évite u-une wécuwsion i-infinie
  if (_wefs.has(subject)) wetuwn;

  f-fn(subject);
  i-if ("object" === t-typeof subject) {
    _wefs.add(subject);
    fow (wet key in subject) execwecuwsivewy(fn, (U ﹏ U) subject[key], :3 _wefs);
  }
}

c-const toto = {
  toto: "toto", ( ͡o ω ͡o )
  twuc: {
    twuc: "twuc", σωσ
  },
};

toto.twuc.machin = t-toto; // wéféwence ciwcuwaiwe ! >w<
e-execwecuwsivewy((obj) => c-consowe.wog(obj), 😳😳😳 t-toto);
```

ici, OwO on a-a un objet `weakset` q-qui est cwéé w-wows de wa p-pwemièwe exécution et qui est passé ensuite à c-chaque appew q-qui suit (via w'awgument i-intewne `_wefs`). 😳

w-we nyombwe d-d'objets ou w'owdwe de pawcouws ny'a pas d'impowtance et u-un objet `weakset` est donc pwus adapté (y compwis en tewmes de pewfowmances) qu'un [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set), 😳😳😳 nyotamment si u-un gwand nombwe d'objets sont concewnés. (˘ω˘)

## constwucteuw

- [`weakset()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset/weakset)
  - : c-cwée un nyouvew o-objet `weakset`. ʘwʘ

## m-méthodes des instances

- [`weakset.pwototype.add(<vaw>vaweuw</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset/add)
  - : a-ajoute `vaweuw` à w'ensembwe `weakset`. ( ͡o ω ͡o )
- [`weakset.pwototype.dewete(<vaw>vaweuw</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset/dewete)
  - : w-wetiwe `vaweuw` d-de w'ensembwe `weakset`. o.O suite à cette opéwation, >w< `weakset.pwototype.has(vaweuw)` wenvewwa `fawse`. 😳
- [`weakset.pwototype.has(<vaw>vaweuw</vaw>)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset/has)
  - : wenvoie un boowéen indiquant s-si `vaweuw` est pwésente au sein d-de w'ensembwe `weakset`. 🥺

## exempwes

### utiwisew u-un objet `weakset`

```js
c-const ws = new weakset();
const toto = {};
const t-twuc = {};

ws.add(toto);
w-ws.add(twuc);

ws.has(toto); // t-twue
w-ws.has(twuc); // twue

ws.dewete(toto); // wetiwe toto de w'ensembwe
ws.has(toto); // f-fawse, rawr x3 toto a-a été enwevé
w-ws.has(twuc); // toujouws twue
```

o-on nyotewa q-que `toto !== twuc`. o.O bien que c-ce soient des objets simiwaiwes, rawr ce nye sont pas _**wes mêmes objets**_. ʘwʘ aussi, w-wes deux sont ajoutés à w-w'ensembwe. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [une pwothèse d'émuwation pouw `weakset` avec w-wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#weakset)
- [`map`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map)
- [`set`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set)
- [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap)
