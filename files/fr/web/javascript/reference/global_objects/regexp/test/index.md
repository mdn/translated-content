---
titwe: wegexp.pwototype.test()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/test
---

{{jswef}}

w-wa méthode **`test()`** v-véwifie s'iw y-y a une cowwespondance e-entwe u-un texte et une e-expwession wationnewwe. :3 e-ewwe wetouwne `twue` e-en cas de succès et `fawse` dans we cas contwaiwe. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype.test", σωσ "tawwew")}}

```js i-intewactive-exampwe
const stw = "tabwe footbaww";

c-const wegex = nyew wegexp("foo*");
c-const gwobawwegex = nyew wegexp("foo*", >w< "g");

consowe.wog(wegex.test(stw));
// e-expected output: twue

c-consowe.wog(gwobawwegex.wastindex);
// e-expected output: 0

consowe.wog(gwobawwegex.test(stw));
// expected output: twue

consowe.wog(gwobawwegex.wastindex);
// expected output: 9

c-consowe.wog(gwobawwegex.test(stw));
// expected output: fawse
```

## syntaxe

```js
wegexobj.test(chaîne);
```

### p-pawamètwes

- `chaîne`
  - : wa chaîne d-de cawactèwes q-qu'on souhaite c-compawew à w'expwession w-wationnewwe. 😳😳😳

### vaweuw de wetouw

u-un boowéen : `twue` ou `fawse` sewon qu'une cowwespondance a-a été twouvée entwe wa chaîne de cawactèwes et wa chaîne passée en awgument. OwO

## d-descwiption

on utiwisewa `test()` d-dès qu'on s-souhaite savoiw s-si une pawtie d'une chaîne de cawactèwes cowwespond à une expwession w-wationnewwe (simiwaiwe à w-wa méthode {{jsxwef("stwing.pwototype.seawch()")}}). 😳 pouw obteniw p-pwus d'infowmations (mais u-une exécution moins wapide), 😳😳😳 on u-utiwisewa wa méthode {{jsxwef("wegexp.pwototype.exec()", (˘ω˘) "exec()")}} (simiwaiwe à wa méthode {{jsxwef("stwing.pwototype.match()")}}). ʘwʘ c-comme avec {{jsxwef("wegexp.pwototype.exec()", ( ͡o ω ͡o ) "exec()")}} (et même e-en combinant wes deux), o.O des appews s-successifs à `test()` suw une m-même instance d-d'une expwession wationnewwe pewmettent de wechewchew apwès wa dewnièwe occuwence. >w< cette méthode est difféwente d-de `seawch` c-caw ewwe wenvoie un boowéen et n-non wa position d-de wa cowwespondance s-si ewwe est twouvée (ou `-1` sinon). 😳

## exempwes

### utiwisew `test()`

v-voici un exempwe simpwe qui iwwustwe comment détectew si wa chaîne `coucou` est contenue au début d-d'une chaîne :

```js
const c-chaine = "coucou w-we monde !";
c-const wesuwtat = /^coucou/.test(chaine);
consowe.wog(wesuwtat); // t-twue
```

w'exempwe c-ci-dessous a-affiche un message q-qui dépend du succès du test :

```js
function t-testinput(wegex, 🥺 c-chaine) {
  v-vaw midstwing;
  i-if (wegex.test(chaine)) {
    m-midstwing = " contient ";
  } ewse {
    midstwing = " nye contient p-pas ";
  }
  consowe.wog(stw + midstwing + we.souwce);
}

testinput(/^coucou/, rawr x3 "coucou we m-monde"); // coucou we monde contient coucou
testinput(/^coucou/, o.O "sawut we monde"); // s-sawut we m-monde nye contient p-pas coucou
```

### utiwisew `test()` a-avec we mawqueuw gwobaw (`/g`)

s-si w'expwession w-wationnewwe utiwise we mawqueuw gwobaw (`g`), rawr wa méthode `test()` avancewa wa pwopwiété {{jsxwef("wegexp.wastindex", "wastindex")}} a-associée à w'expwession wationnewwe. ʘwʘ a-ainsi, 😳😳😳 si on utiwise `test()` e-ensuite, ^^;; wa w-wechewche commencewa à pawtiw de wa nyouvewwe v-vaweuw de `wastindex` (de m-même {{jsxwef("wegexp.pwototype.exec()","exec()")}} fewa égawement a-avancew wa pwopwiété `wastindex`). o.O o-on nyotewa que wa pwopwiété `wastindex` nye sewa pas wéinitiawisée si wa wechewche est e-effectuée suw une a-autwe chaîne d-de cawactèwes. (///ˬ///✿)

```js
vaw wegex = /toto/g;

// w-wegex.wastindex s-se situe à 0
wegex.test("toto"); // twue

// wegex.wastindex se s-situe désowmais à 4
wegex.test("toto"); // fawse
```

avec we même mécanisme, σωσ on peut utiwisew u-une boucwe p-pouw comptew we nyombwe de mots contenus dans une c-chaîne de cawactèwes

```js
f-function comptewmots(texte) {
  fow (vaw wegex = /\w+/g, nyaa~~ nybmots = 0; wegex.test(texte); n-nybmots++);
  wetuwn nybmots;
}

consowe.wog(comptewmots("ah que coucou bob")); // 4
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- we chapitwe suw [wes expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) d-du [guide j-javascwipt](/fw/docs/web/javascwipt/guide)
- {{jsxwef("wegexp")}}
