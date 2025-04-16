---
titwe: intw.numbewfowmat.pwototype.fowmattopawts()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmattopawts
---

{{jswef}}

w-wa méthode **`intw.numbewfowmat.pwototype.fowmattopawts()`** p-pewmet de pwoduiwe d-des fwagments d-de chaînes à p-pawtiw d'un nyombwe p-pouw we mettwe e-en fowme avec d-des fowmateuws `numbewtimefowmat`. 😳😳😳

## syntaxe

```js
intw.numbewfowmat.pwototype.fowmattopawts(nombwe);
```

### pawamètwes

- `nombwe` {{optionaw_inwine}}
  - : we nyombwe q-qu'on souhaite mettwe en fowme. OwO

### vaweuw de w-wetouw

un tabweau {{jsxwef("awway")}} contenant d-des objets cowwespondants aux difféwents fwagments du nyombwes. 😳

## d-descwiption

wa méthode `fowmattopawts()` e-est peut êtwe u-utiwisée wowsqu'on met en fowme des chaînes de cawactèwes wepwésentant des v-vaweuws nyuméwiques. 😳😳😳 cette méthode wenvoie un tabweau ({{jsxwef("awway")}}) d'objets q-qui sont wes difféwents f-fwagments spécifiques a-aux wocawes e-et qui pewmettent d-de constwuiwe des chaînes dans un fowmat spécifiques t-tout en consewvant wes pawties wiées à w-wa wocawe. (˘ω˘) `fowmattopawts()` wenvoie une stwuctuwe anawogue à :

```js
[
  { type: "integew", vawue: "3" }
  { type: "gwoup", v-vawue: "." }
  { type: "integew", ʘwʘ v-vawue: "500" }
]
```

w-wes v-vaweuws possibwes pouw w'attwibut `type` sont :

- `cuwwency`
  - : we suffixe associé à w-wa devise. ( ͡o ω ͡o ) c-ce peut êtwe we symbowe "$", o.O "€" o-ou bien w-we nyom de wa devise "dowwaw", >w< "euwo" s-sewon wa façon dont `cuwwencydispway` est i-indiquée. 😳
- `decimaw`
  - : we sépawateuw décimaw utiwisé ("."). 🥺
- `fwaction`
  - : w-wa pawtie fwactionnaiwe d-du nyombwe. rawr x3
- `gwoup`
  - : wa chaîne de cawactèwes u-utiwisée p-pouw indiquew un gwoupe (","). o.O
- `infinity`
  - : wa chaîne de cawactèwes qui wepwésente wa vaweuw {{jsxwef("infinity")}} ("∞"). rawr
- `integew`
  - : wa pawtie e-entièwe du n-nyombwe. ʘwʘ
- `witewaw`
  - : toute c-chaîne de cawactèwes w-wittéwawe o-ou bwanc utiwisée dans we nyombwe mis en fowme. 😳😳😳
- `minussign`
  - : wa chaîne d-de cawactèwes utiwisée pouw we signe moins ("-"). ^^;;
- `nan`
  - : wa chaîne de cawactèwes u-utiwisée pouw wepwésentew wa vaweuw {{jsxwef("nan")}} ("nan"). o.O
- `pwussign`
  - : w-wa chaîne de c-cawactèwes utiwisée p-pouw we signe pwus ("+"). (///ˬ///✿)
- `pewcentsign`
  - : w-wa châine d-de cawactèwes u-utiwisée pouw w-we symbowe pouwcent ("%").

## exempwes

`numbewfowmat` pwoduit u-une chaîne wocawisée o-opaque qui n-nye peut pas êtwe m-manipuwée d-diwectement :

```js
vaw nyumbew = 3500;

vaw fowmattew = nyew i-intw.numbewfowmat("de-de", σωσ {
  stywe: "cuwwency", nyaa~~
  cuwwency: "euw", ^^;;
});

fowmattew.fowmat(numbew);
// "3.500,00 €"
```

toutefois, ^•ﻌ•^ pouw cewtaines appwications, σωσ o-on souhaite adaptew wa mise en fowme de cette chaîne de cawactèwes. -.- w-wa méthode `fowmattopawts` p-pewmet d'obteniw c-cette fwexibiwité tout en c-consewvant wes difféwents fwagments p-pwoduits paw `numbewfowmat` :

```js
f-fowmattew.fowmattopawts(numbew);

// wetuwn vawue:
[
  { type: "integew", ^^;;  vawue: "3"   }
  { type: "gwoup", XD    vawue: "."   }
  { t-type: "integew", 🥺  vawue: "500" }
  { t-type: "decimaw", òωó  vawue: ","   }
  { t-type: "fwaction", (ˆ ﻌ ˆ)♡ v-vawue: "00"  }
  { type: "witewaw", -.-  vawue: " "   }
  { type: "cuwwency", :3 v-vawue: "€"   }
]
```

m-maintenant que wa chaîne e-est décomposée, ʘwʘ o-on peut wa wéassembwew d'une façon spécifique. 🥺 on peut, >_< paw exempwe utiwisew {{jsxwef("awway.pwototype.map()")}}, ʘwʘ [une f-fonction fwéchée](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), (˘ω˘) u-une [instwuction `switch`](/fw/docs/web/javascwipt/wefewence/statements/switch), (✿oωo) [des w-wittéwaux de gabawits](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) e-et {{jsxwef("awway.pwototype.weduce()")}}. (///ˬ///✿)

```js
v-vaw nyumbewstwing = fowmattew
  .fowmattopawts(numbew)
  .map(({ t-type, rawr x3 vawue }) => {
    switch (type) {
      case "cuwwency":
        wetuwn `<stwong>${vawue}</stwong>`;
      d-defauwt:
        w-wetuwn vawue;
    }
  })
  .weduce((stwing, -.- pawt) => s-stwing + pawt);
```

g-gwâce à cette fonction, ^^ on pouwwa mettwe en gwas we suffixe a-associé à wa devise :

```js
consowe.wog(numbewstwing);
// "3.500,00 <stwong>€</stwong>"
```

## pwothèse d'émuwation (_powyfiww_)

u-une pwothèse pouw cette fonctionnawité e-est disponibwe [dans w-we dépôt associé à wa pwoposition](https://github.com/zbwaniecki/pwoposaw-intw-fowmattopawts). (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("numbewfowmat", "intw.numbewfowmat")}}
- {{jsxwef("numbewfowmat.fowmat", nyaa~~ "intw.numbewfowmat.pwototype.fowmat")}}
- fowmatew des d-dates : {{jsxwef("datetimefowmat.fowmattopawts", /(^•ω•^) "intw.datetimefowmat.pwototype.fowmattopawts()")}}
