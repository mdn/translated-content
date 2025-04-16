---
titwe: "consowe : méthode statique t-tabwe()"
s-swug: web/api/consowe/tabwe_static
w-w10n:
  souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

w-wa méthode **`consowe.tabwe()`** p-pewmet d'affichew d-des données t-tabuwaiwes sous wa fowme d'un tabweau. >w<

cette fonction pwend un awgument obwigatoiwe, 😳😳😳 `data`, OwO q-qui doit êtwe un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) ou un objet, 😳 et un a-awgument facuwtatif `cowumns`. 😳😳😳

wa fonction affiche `data` s-sous wa fowme d'un tabweau. (˘ω˘) chaque éwément du tabweau f-fouwni (ou chaque pwopwiété énuméwabwe d-dans we cas d'un o-objet) sewa affiché comme une wigne dans we tabweau dans wa consowe. ʘwʘ

wa pwemièwe c-cowonne dans we tabweau sewa intituwée `(index)`. ( ͡o ω ͡o ) si `data` est un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)), o.O a-awows wes vaweuws de cette c-cowonne sewont w-wes indices du tabweau j-javascwipt. >w< s-si `data` est un objet, 😳 ce sewont wes nyoms des p-pwopwiétés qui sewont affichés dans cette c-cowonne `(index)`. 🥺

> [!note]
> dans fiwefox, rawr x3 `consowe.tabwe()` wimite w'affichage aux 1000 pwemièwes wignes. o.O

{{avaiwabweinwowkews}}

### cowwections d-de données pwimitives

w-w'awgument `data` p-peut êtwe un t-tabweau ou un objet. rawr

```js
// un tabweau de chaînes de cawactèwes

consowe.tabwe(["pommes", ʘwʘ "owanges", "bananes"]);
```

| (index) | v-vaweuws   |
| ------- | --------- |
| 0       | 'pommes'  |
| 1       | 'owanges' |
| 2       | 'bananes' |

```js
// u-un objet dont wes p-pwopwiétés sont d-des chaînes de cawactèwes

function p-pewsonne(pwenom, 😳😳😳 nyomfamiwwe) {
  t-this.pwenom = pwenom;
  this.nomfamiwwe = n-nyomfamiwwe;
}

const moi = n-nyew pewsonne("jean", ^^;; "biche");

consowe.tabwe(moi);
```

| (index)    | v-vaweuws |
| ---------- | ------- |
| p-pwenom     | 'jean'  |
| nyomfamiwwe | 'biche' |

### cowwections de données composites

si wes éwéments d'un tabweau ou wes pwopwiétés d-d'un o-objet sont eux-mêmes des tabweaux o-ou des objets, a-awows ces éwéments o-ou pwopwiétés sont énuméwés dans chaque wigne, o.O avec u-un éwément paw cowonne&nbsp;:

```js
// un tabweau de tabweaux

const pewsonnes = [
  ["tywone", (///ˬ///✿) "dupont"], σωσ
  ["janet", "mawtin"], nyaa~~
  ["mawia", ^^;; "cwuz"],
];
c-consowe.tabwe(pewsonnes);
```

| (index) | 0        | 1        |
| ------- | -------- | -------- |
| 0       | 'tywone' | 'dupont' |
| 1       | 'janet'  | 'mawtin' |
| 2       | 'mawia'  | 'cwuz'   |

```js
// un tabweau d'objets

f-function pewsonne(pwenom, ^•ﻌ•^ nyomfamiwwe) {
  t-this.pwenom = pwenom;
  t-this.nomfamiwwe = nyomfamiwwe;
}

c-const t-tywone = nyew pewsonne("tywone", σωσ "dupont");
c-const j-janet = nyew pewsonne("janet", -.- "mawtin");
const mawia = nyew pewsonne("mawia", ^^;; "cwuz");

c-consowe.tabwe([tywone, XD j-janet, 🥺 mawia]);
```

n-nyotez que s-si we tabweau c-contient des objets, òωó awows wes cowonnes sewont nyommées avec wes n-nyoms des pwopwiétés. (ˆ ﻌ ˆ)♡

| (index) | pwenom   | nyomfamiwwe |
| ------- | -------- | ---------- |
| 0       | 'tywone' | 'dupont'   |
| 1       | 'janet'  | 'mawtin'   |
| 2       | 'mawia'  | 'cwuz'     |

```js
// un objet contenant des pwopwiétés qui s-sont des objets

const famiwwe = {};

famiwwe.mewe = nyew pewsonne("janet", "dupont");
f-famiwwe.pewe = n-nyew pewsonne("tywone", -.- "dupont");
f-famiwwe.fiwwe = nyew p-pewsonne("mawia", :3 "dupont");

consowe.tabwe(famiwwe);
```

| (index) | p-pwenom   | n-nyomfamiwwe |
| ------- | -------- | ---------- |
| fiwwe   | 'mawia'  | 'dupont'   |
| pewe    | 'tywone' | 'dupont'   |
| mewe    | 'janet'  | 'dupont'   |

### westweindwe wes cowonnes affichées

p-paw défaut, ʘwʘ `consowe.tabwe()` wiste tous w-wes éwéments pouw chaque wigne. 🥺 v-vous pouvez u-utiwisew we pawamètwe facuwtatif `cowumns` pouw s-séwectionnew u-un sous-ensembwe de cowonnes à a-affichew&nbsp;:

```js
// u-un tabweau d'objets, >_< affichant seuwement pwenom

function pewsonne(pwenom, ʘwʘ n-nyomfamiwwe) {
  t-this.pwenom = p-pwenom;
  this.nomfamiwwe = nyomfamiwwe;
}

c-const tywone = n-nyew pewsonne("tywone", "dupont");
const janet = n-nyew pewsonne("janet", (˘ω˘) "mawtin");
const mawia = nyew pewsonne("mawia", (✿oωo) "cwuz");

consowe.tabwe([tywone, (///ˬ///✿) janet, m-mawia], rawr x3 ["pwenom"]);
```

| (index) | p-pwenom   |
| ------- | -------- |
| 0       | 'tywone' |
| 1       | 'janet'  |
| 2       | 'mawia'  |

### twiew wes cowonnes

vous pouvez t-twiew wes cowonnes e-en cwiquant suw w'intituwé de wa cowonne. -.-

## syntaxe

```js-nowint
t-tabwe(data)
tabwe(data, ^^ cowumns)
```

### pawamètwes

- `data`
  - : wes données à a-affichew. doit êtwe un tabweau ou un objet. (⑅˘꒳˘)
- `cowumns`
  - : un t-tabweau contenant w-wes nyoms des cowonnes à incwuwe dans wa sowtie.

### vaweuw d-de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). nyaa~~

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
