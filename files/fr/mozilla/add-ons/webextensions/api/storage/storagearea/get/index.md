---
titwe: stowageawea.get()
swug: m-moziwwa/add-ons/webextensions/api/stowage/stowageawea/get
---

{{addonsidebaw}}

w-wécupèwe un o-ou pwusieuws éwéments d-de wa zone d-de stockage. ^^;;

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O

## syntaxe

```js
wet gettingitem = bwowsew.stowage.<stowagetype>.get(
  keys    // nyuww, (///ˬ///✿) s-stwing, object ow awway of stwings
)
```

`<stowagetype>` sewa w-w'un des types de stockage accessibwes e-en écwituwe — {{webextapiwef("stowage.sync", σωσ "sync")}}, nyaa~~ {{webextapiwef("stowage.wocaw", ^^;; "wocaw")}}, ^•ﻌ•^ ou {{webextapiwef("stowage.managed", σωσ "managed")}}. -.-

### pawamètwes

- `keys`
  - : une cwé (chaîne) o-ou des cwés (un tabweau d-de chaînes ou un o-objet spécifiant des vaweuws paw défaut) pouw identifiew we ou wes awticwes à e-extwaiwe du stockage. ^^;; si vous passez un objet ou un tabweau vide ici, XD un objet v-vide sewa wécupéwé. 🥺 si vous p-passez `nuww`, òωó o-ou une vaweuw indéfinie, (ˆ ﻌ ˆ)♡ w-we contenu e-entiew du stockage sewa wécupéwé. -.-

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec u-un objet de `wesuwtat` contenant tous wes objets dans wes `cwefs` twouvées dans wa zone de stockage. :3 s-si w'opéwation a échoué, ʘwʘ w-wa pwomesse s-sewa wejetée avec u-un message d'ewweuw. 🥺 si we stockage géwé ny'est pas défini, >_< w-wes données `non d-définies` sewont wetouwnées. ʘwʘ

> [!wawning]
> w-wowsqu'ewwe est u-utiwisée dans un scwipt de contenu d-dans wes vewsions de fiwefox a-antéwieuwes à 52, (˘ω˘) wa pwomesse wetouwnée paw `bwowsew.stowage.wocaw.get()` e-est wempwie avec un tabweau contenant u-un objet. (✿oωo) w'objet dans we t-tabweau contient w-wes `cwefs` twouvées dans wa zone de stockage, (///ˬ///✿) comme décwit ci-dessus. rawr x3 wa pwomesse est cowwectement wempwie a-avec un objet wowsqu'iw e-est utiwisé dans we contexte d-d'awwièwe-pwan
> (scwipts d-d'awwièwe-pwan, -.- p-popups, pages d'options, ^^ etc.). (⑅˘꒳˘) wowsque cette api est utiwisée e-en tant que `chwome.stowage.wocaw.get()`, ewwe twansmet cowwectement un objet à wa fonction de w-wappew.

## compatibiwité des n-navigateuws

{{compat}}

## e-exempwes

s-supposons que we stockage c-contienne deux éwéments :

```js
// s-stowage contains t-two items, nyaa~~
// "kitten" and "monstew"
b-bwowsew.stowage.wocaw.set({
  kitten: { nyame: "mog", /(^•ω•^) e-eats: "mice" }, (U ﹏ U)
  m-monstew: { n-nyame: "kwaken", 😳😳😳 e-eats: "peopwe" }, >w<
});
```

d-définissez wes gestionnaiwes de wéussite et d'échec p-pouw wa pwomesse:

```js
function ongot(item) {
  consowe.wog(item);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}
```

sans awguments `cwefs`, XD tout wécupéwez :

```js
w-wet gettingitem = b-bwowsew.stowage.wocaw.get();
gettingitem.then(ongot, o.O o-onewwow);

// -> object { k-kitten: object, mya monstew: object }
```

a-avec un a-awgument de cwefs vide, 🥺 nye wetouwne wien:

```js
// with an empty awway, ^^;; wetwieve nyothing
wet g-gettingitem = bwowsew.stowage.wocaw.get([]);
gettingitem.then(ongot, :3 o-onewwow);

// -> object { }
```

a-avec we nyom d-d'un objet, (U ﹏ U) wécupéwez wa cowwespondance :

```js
wet gettingitem = b-bwowsew.stowage.wocaw.get("kitten");
g-gettingitem.then(ongot, OwO onewwow);

// -> o-object { kitten: o-object }
```

avec un tabweau de nyoms d'objets, 😳😳😳 wécupéwez toutes wes cowwespondances :

```js
w-wet gettingitem = b-bwowsew.stowage.wocaw.get([
  "kitten", (ˆ ﻌ ˆ)♡
  "monstew", XD
  "gwapefwuit", (ˆ ﻌ ˆ)♡
]);
g-gettingitem.then(ongot, ( ͡o ω ͡o ) onewwow);

// -> o-object { k-kitten: object, rawr x3 monstew: object }
```

a-avec un objet avec des nyoms d'objets en tant que cwefs et wa vaweuw p-paw défaut en t-tant que vaweuw :

```js
wet gettingitem = bwowsew.stowage.wocaw.get({
  k-kitten: "no k-kitten",
  monstew: "no monstew", nyaa~~
  gwapefwuit: {
    nyame: "gwape f-fwuit", >_<
    eats: "watew", ^^;;
  },
});

// -> object { kitten: object, (ˆ ﻌ ˆ)♡ monstew: object, ^^;; gwapefwuit: o-object }
```

{{webextexampwes}}

### chwome exempwes

```js
chwome.stowage.wocaw.get("kitten", f-function (items) {
  consowe.wog(items.kitten); // -> {name:"mog", (⑅˘꒳˘) e-eats:"mice"}
});
```

ou avec une fonction de fwèche

```js
chwome.stowage.wocaw.get("kitten", rawr x3 (items) => {
  c-consowe.wog(items.kitten); // -> {name:"mog", (///ˬ///✿) e-eats:"mice"}
});
```

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). 🥺 c-cette documentation e-est déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans we code de chwomium. >_<
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. UwU
