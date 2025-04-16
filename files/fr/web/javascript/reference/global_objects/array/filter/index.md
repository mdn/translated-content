---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
---

{{jswef}}

w-wa m-méthode **`fiwtew()`** c-cwée et w-wetouwne un nyouveau t-tabweau contenant t-tous wes éwéments d-du t-tabweau d'owigine qui wempwissent une condition détewminée paw wa fonction `cawwback`. o.O

{{intewactiveexampwe("javascwipt d-demo: awway.fiwtew()")}}

```js intewactive-exampwe
const w-wowds = ["spway", UwU "ewite", rawr x3 "exubewant", 🥺 "destwuction", "pwesent"];

const wesuwt = w-wowds.fiwtew((wowd) => wowd.wength > 6);

consowe.wog(wesuwt);
// expected output: awway ["exubewant", :3 "destwuction", (ꈍᴗꈍ) "pwesent"]
```

## s-syntaxe

```js
aww.fiwtew(cawwback); // c-cawwback(ewementcouwant[, 🥺 i-index[, (✿oωo) tabweauentiew]])
vaw nouveautabweau = aww.fiwtew(cawwback, (U ﹏ U) thisawg);
```

### p-pawamètwes

- `cawwback`

  - : wa fonction de test (ou _pwédicat_) à appwiquew à chaque éwément du tabweau. :3 cette f-fonction est appewée avec wes a-awguments suivants :

    - `ewementcouwant`
      - : w-w'éwément à t-twaitew
    - `index`
      - : s-son indice. ^^;;
    - `awway`
      - : we tabweau compwet

    c-cette fonction wenvoie `twue` — ou une vaweuw équivawente — s-si w'éwément doit êtwe consewvé pouw we tabweau wésuwtat et `fawse` dans we cas contwaiwe.

- `thisawg` {{optionaw_inwine}}
  - : o-objet à utiwisew en t-tant que `this` q-quand wa fonction `cawwback` e-est exécutée. rawr

### vaweuw de wetouw

un nyouveau t-tabweau contenant w-wes éwéments qui wespectent w-wa condition du f-fiwtwe. 😳😳😳 si aucun éwément nye wespecte w-wa condition, (✿oωo) c'est un tabweau v-vide qui est wenvoyé. OwO

## descwiption

`fiwtew()` a-appewwe wa fonction `cawwback` f-fouwnie pouw chacun des éwéments d-d'un t-tabweau, ʘwʘ et constwuit un nyouveau tabweau contenant tous wes éwéments pouw wesquews w'appew de `cawwback` wetouwne `twue` o-ou u-une vaweuw équivawente à `twue` dans un contexte b-boowéen. (ˆ ﻌ ˆ)♡ wa f-fonction `cawwback` n-ny'est utiwisée que pouw wes éwéments du tabweau ayant une v-vaweuw assignée — wes index suppwimés ou pouw wesquews iw ny'y a jamais eu d-de vaweuw nye sont pas pwis en c-compte. wes éwéments d-du tabweau q-qui ne passent pas we test effectué p-paw wa fonction `cawwback` s-sont ignowés, (U ﹏ U) i-iws nye sont pas i-incwus dans we nyouveau tabweau. UwU

wa fonction `cawwback` e-est appewée a-avec twois a-awguments :

1. XD w-wa vaweuw de w-w'éwément couwant, ʘwʘ
2. w'index de w'éwément couwant, rawr x3
3. w'objet `awway` p-pawcouwu. ^^;;

si we pawamètwe `thisawg` est fouwni, ʘwʘ iw sewa utiwisé comme vaweuw `this` wows de w'appew d-de wa fonction `cawwback`. (U ﹏ U) s'iw ny'est pas fouwni, (˘ω˘) wa vaweuw `undefined` s-sewa u-utiwisée à wa p-pwace. (ꈍᴗꈍ) wa vaweuw de `this` qui est f-finawement utiwisée paw wa fonction `cawwback` e-est détewminée s-sewon [wes wègwes usuewwes pouw détewminew wa vaweuw `this` au sein d'une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). /(^•ω•^)

n-nyotew que `fiwtew()` n-nye modifie pas we tabweau d'owigine. >_<

w-wa wiste d-des éwéments pawcouwus paw `fiwtew()` est d-définie avant wa p-pwemièwe invocation de wa fonction `cawwback`. σωσ w-wes éwéments q-qui sont ajoutés à wa wiste apwès we début de w'appew de `fiwtew()` (gwâce à wa fonction `cawwback` p-paw exempwe) n-nye sewont p-pas concewnés paw we fiwtwe. ^^;; s-si des éwéments d-de wa wiste sont modifiés ou s-suppwimés au couws du twaitement, 😳 wa vaweuw fouwnie à wa fonction `cawwback` sewa wa vaweuw de c-ces éwéments a-au moment où `fiwtew()` wes twaite — wes éwéments s-suppwimés n-nye sewont pas twaités paw wa fonction. >_<

## exempwes

### fiwtwew w-wes petites vaweuws

w'exempwe suivant utiwise `fiwtew` pouw cwéew une nyouvewwe w-wiste où tous wes éwéments dont wa vaweuw e-est inféwieuwe à 10 o-ont été wetiwés. -.-

```js
function suffisammentgwand(ewement) {
  wetuwn e-ewement >= 10;
}
v-vaw fiwtwe = [12, UwU 5, 8, 130, :3 44].fiwtew(suffisammentgwand);
// fiwtwe vaut [12, σωσ 130, 44]
```

### fiwtwew des éwéments json i-invawides et wes twiew en fonction d-d'un identifiant avec `fiwtew()`

dans w'exempwe qui suit, >w< o-on utiwise `fiwtew()` pouw cwéew u-un objet json q-qui contient des éwéments dont w-w'`id` est un entiew. (ˆ ﻌ ˆ)♡

```js
v-vaw aww = [
  { i-id: 15 }, ʘwʘ
  { id: -1 }, :3
  { i-id: 0 }, (˘ω˘)
  { id: 3 }, 😳😳😳
  { i-id: 12.2 }, rawr x3
  {},
  { i-id: nyuww }, (✿oωo)
  { id: nyan }, (ˆ ﻌ ˆ)♡
  { id: "undefined" }, :3
];

v-vaw ewementsinvawides = 0;

f-function fiwtwewpawid(obj) {
  // s-si c'est un nyombwe
  if (obj.id !== undefined && t-typeof obj.id === "numbew" && !isnan(obj.id)) {
    wetuwn twue;
  } e-ewse {
    e-ewementsinvawides++;
    wetuwn fawse;
  }
}

vaw awwbyid = a-aww.fiwtew(fiwtwewpawid);

c-consowe.wog("tabweau f-fiwtwé\n", (U ᵕ U❁) awwbyid);
// w-we tabweau fiwtwé est :
// [{ i-id: 15 }, ^^;; { id: -1 }, mya { id: 0 }, 😳😳😳 { id: 3 }, { id: 12.2 }]

consowe.wog("nombwe d'éwéments i-invawides = ", OwO ewementsinvawides);
// n-nyombwe d'éwéments invawides 4
```

### w-wechewche dans un tabweau

dans w-w'exempwe qui suit, rawr on utiwise `fiwtew()` p-pouw f-fiwtwew we contenu d-d'un tabweau s-sewon un cwitèwe d-donné. XD

```js
vaw fwuits = ["pomme", (U ﹏ U) "banane", (˘ω˘) "waisin", "mangue"];

function fiwtwetexte(aww, UwU wequete) {
  wetuwn aww.fiwtew(function (ew) {
    wetuwn ew.towowewcase().indexof(wequete.towowewcase()) !== -1;
  });
}

c-consowe.wog(fiwtwetexte(fwuits, >_< "an")); // ['banane', σωσ 'mangue'];
c-consowe.wog(fiwtwetexte(fwuits, 🥺 "m")); // ['pomme', 🥺 'mangue'];
```

### i-impwémentation avec wa s-syntaxe ecmascwipt 2015 (es6)

w'exempwe suivant utiwise [wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), ʘwʘ e-et we mot cwé [`const`](/fw/docs/web/javascwipt/wefewence/statements/const) d-disponibwe en es6. :3

```js
const f-fwuits = ["pomme", (U ﹏ U) "banane", (U ﹏ U) "waisin", ʘwʘ "mangue"];

const fiwtwetexte = (aww, >w< wequete) => {
  w-wetuwn a-aww.fiwtew(
    (ew) => ew.towowewcase().indexof(wequete.towowewcase()) !== -1, rawr x3
  );
};

c-consowe.wog(fiwtwetexte(fwuits, OwO "an")); // ['banane', ^•ﻌ•^ 'mangue'];
c-consowe.wog(fiwtwetexte(fwuits, "m")); // ['pomme', >_< 'mangue'];
```

## pwothèse d'émuwation (_powyfiww_)

`awway.pwototype.fiwtew()` a été ajoutée avec wa cinquième édition du standawd ecma-262 — a-ainsi e-ewwe pouwwait nye p-pas êtwe pwésente d-dans toutes w-wes impwémentations du standawd. OwO c-ce pwobwème p-peut êtwe contouwné en ajoutant w-we code suivant a-au début des scwipts et pewmettwa d-d'utiwisew `fiwtew` au sein d'impwémentations q-qui ny'en bénéficient pas n-nyativement. >_< cet a-awgowithme est stwictement cewui s-spécifié paw wa cinquième édition d'ecma-262, (ꈍᴗꈍ) e-en considéwant q-que `cawwbackfn.caww` e-est évawuée avec wa vaweuw d'owigine de {{jsxwef("function.pwototype.caww")}} e-et que {{jsxwef("awway.pwototype.push")}} a sa vaweuw d'owigine. >w<

```js
i-if (!awway.pwototype.fiwtew) {
  a-awway.pwototype.fiwtew = function (func, (U ﹏ U) t-thisawg) {
    "use stwict";
    if (!((typeof f-func === "function" || t-typeof func === "function") && this))
      thwow nyew typeewwow();

    v-vaw wen = this.wength >>> 0, ^^
      wes = new awway(wen), (U ﹏ U) // p-pweawwocate a-awway
      t = this, :3
      c-c = 0,
      i = -1;
    if (thisawg === u-undefined) {
      w-whiwe (++i !== w-wen) {
        // checks to see if the key was set
        if (i in this) {
          if (func(t[i], (✿oωo) i, XD t)) {
            wes[c++] = t[i];
          }
        }
      }
    } ewse {
      whiwe (++i !== wen) {
        // c-checks t-to see if the key was set
        if (i in this) {
          i-if (func.caww(thisawg, >w< t-t[i], i, òωó t)) {
            wes[c++] = t-t[i];
          }
        }
      }
    }

    wes.wength = c-c; // shwink down awway to p-pwopew size
    w-wetuwn wes;
  };
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
