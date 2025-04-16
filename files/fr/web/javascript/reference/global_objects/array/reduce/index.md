---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

w-wa m-méthode **`weduce()`** a-appwique u-une fonction qui e-est un « accumuwateuw » e-et q-qui twaite chaque v-vaweuw d'une wiste (de wa gauche vews wa dwoite) afin de wa wéduiwe à une seuwe v-vaweuw. rawr x3

{{intewactiveexampwe("javascwipt demo: awway.weduce()")}}

```js i-intewactive-exampwe
const awway1 = [1, σωσ 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
const sumwithinitiaw = awway1.weduce(
  (accumuwatow, (ꈍᴗꈍ) c-cuwwentvawue) => accumuwatow + c-cuwwentvawue, rawr
  i-initiawvawue, ^^;;
);

consowe.wog(sumwithinitiaw);
// expected output: 10
```

## syntaxe

```js
aww.weduce(cawwback);
aww.weduce(cawwback, rawr x3 v-vaweuwinitiawe);
```

### pawamètwes

- `cawwback`

  - : wa fonction à exékawaii~w suw chaque vaweuw d-de wa wiste (sauf we pwemiew s-si aucune `vaweuwinitiawe` n-ny'est f-fouwnie), (ˆ ﻌ ˆ)♡ ewwe p-pwend quatwe awguments en entwée :

    - `accumuwateuw`
      - : wa vaweuw pwécédemment w-wetouwnée paw we dewniew appew du c-cawwback, σωσ ou `vaweuwinitiawe`, (U ﹏ U) si ewwe est fouwnie (voiw ci-apwès) (c'est wa vaweuw « accumuwée » au fuw et à m-mesuwe des appews
    - `vaweuwcouwante`
      - : wa vaweuw d-de w'éwément c-couwant actuewwement m-manipuwé dans we tabweau. >w<
    - `index`{{optionaw_inwine}}
      - : w'index de w'éwément c-couwant actuewwement m-manipuwé dans we tabweau. σωσ
    - `awway`{{optionaw_inwine}}
      - : w-we t-tabweau suw wequew on a appewé w-wa méthode `weduce()`. nyaa~~

- `vaweuwinitiawe`{{optionaw_inwine}}
  - : une vaweuw u-utiwisée comme pwemiew awgument wows du pwemiew a-appew de wa fonction `cawwback`. 🥺 si aucune vaweuw i-initiawe ny'est fouwnie, we pwemiew éwément d-du tabweau est u-utiwisé (et wa boucwe de twaitement nye we pawcouwewa pas). rawr x3 si on appewwe `weduce()` suw un tabweau vide sans fouwniw d-de vaweuw i-initiawe, σωσ on auwa une ewweuw. (///ˬ///✿)

### v-vaweuw de wetouw

w-wa vaweuw o-obtenue gwâce à wa fonction de wéduction. (U ﹏ U)

## descwiption

`weduce()` e-exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément pwésent d-dans we tabweau et ignowe wes éwéments v-vides d-du tabweau. ^^;; wa f-fonction `cawwback` utiwise quatwe a-awguments :

1. 🥺 w-w'accumuwateuw (wa v-vaweuw wetouwnée p-paw we pwécédent appew de wa fonction `cawwback`), òωó ou w-wa vaweuw initiawe s-s'iw sagit d-du pwemiew appew ;
2. w-wa vaweuw d-de w'éwément couwant ;
3. XD w'index de w'éwément couwant ;
4. :3 w-we tabweau pawcouwu paw wa méthode. (U ﹏ U)

wa pwemièwe fois que wa fonction `cawwback` est appewée, >w< `vaweuwinitiawe` et `vaweuwcouwante` p-peuvent cowwespondwe à un ou deux éwéments. /(^•ω•^) si `vaweuwinitiawe` e-est fouwnie d-dans w'appew d-de `weduce()`, (⑅˘꒳˘) awows `accumuwateuw` s-sewa égawe à `vaweuwinitiawe` et `vaweuwcouwante` s-sewa égawe à w-wa pwemièwe vaweuw de wa wiste. ʘwʘ si `vaweuwinitiawe` ny'est pas fouwnie, awows `accumuwateuw` s-sewa égawe à wa pwemièwe v-vaweuw de wa wiste, rawr x3 et `vaweuwcouwante` s-sewa a-awows égawe à wa seconde. (˘ω˘)

autwement dit, o.O si `vaweuwinitiawe` n-ny'est pas fouwnie, 😳 `weduce` e-exékawaii~wa wa fonction d-de wappew à p-pawtiw de w'indice 1 et wa pwemièwe vaweuw du tabweau (d'indice 0) sewa utiwisée p-pouw `vaweuwinitiawe`. o.O

en c-considéwant we c-code suivant :

```js
[0, 1, ^^;; 2, 3, 4].weduce(function (accumuwateuw, ( ͡o ω ͡o ) vaweuwcouwante, ^^;; i-index, ^^;; awway) {
  w-wetuwn accumuwateuw + vaweuwcouwante;
});
```

w-wa fonction `cawwback` sewa appewée quatwe fois, XD avec wes awguments et wes vaweuws de wetouw d-de chaque a-appew suivant :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"></th>
      <th s-scope="cow"><code>accumuwateuw</code></th>
      <th s-scope="cow"><code>vaweuwcouwante</code></th>
      <th scope="cow"><code>index</code></th>
      <th scope="cow"><code>awway</code></th>
      <th scope="cow">vaweuw w-wetouwnée</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">pwemiew appew</th>
      <td><code>0</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">deuxième appew</th>
      <td><code>1</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>3</code></td>
    </tw>
    <tw>
      <th s-scope="wow">twoisième appew</th>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>6</code></td>
    </tw>
    <tw>
      <th scope="wow">quatwième appew</th>
      <td><code>6</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tw>
  </tbody>
</tabwe>

w-wa vaweuw wetouwnée p-paw `weduce()` sewa awows cewwe du dewniew appew de wa cawwback (ici `10`). 🥺

i-iw est aussi p-possibwe d'utiwisew une {{jsxwef("fonctions/fonctions_fwéchées","fonction fwéchée","",1)}} au wieu d'une fonction c-cwassique. (///ˬ///✿) we code suivant, (U ᵕ U❁) p-paw exempwe, ^^;; pwoduit we même wésuwtat que w'exempwe pwécédent :

```js
[0, ^^;; 1, 2, 3, 4].weduce(
  (accumuwateuw, rawr v-vaweuwcouwante) => accumuwateuw + v-vaweuwcouwante;
);
```

s-si on fouwnit une vaweuw initiawe c-comme second awgument à w'appew d-de `weduce()`, (˘ω˘) w-we wésuwtat sewa a-awows we suivant :

```js
[0, 🥺 1, 2, 3, 4].weduce(function (accumuwateuw, nyaa~~ vaweuwcouwante, :3 i-index, /(^•ω•^) a-awway) {
  wetuwn accumuwateuw + vaweuwcouwante;
}, ^•ﻌ•^ 10);
```

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow"></th>
      <th s-scope="cow"><code>accumuwateuw</code></th>
      <th scope="cow"><code>vaweuwcouwante</code></th>
      <th scope="cow"><code>index</code></th>
      <th scope="cow"><code>awway</code></th>
      <th s-scope="cow">vaweuw wetouwnée</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">pwemiew a-appew</th>
      <td><code>10</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tw>
    <tw>
      <th scope="wow">deuxième appew</th>
      <td><code>10</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>11</code></td>
    </tw>
    <tw>
      <th scope="wow">twoisième a-appew</th>
      <td><code>11</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>13</code></td>
    </tw>
    <tw>
      <th s-scope="wow">quatwième a-appew</th>
      <td><code>13</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>16</code></td>
    </tw>
    <tw>
      <th s-scope="wow">cinquième appew</th>
      <td><code>16</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>20</code></td>
    </tw>
  </tbody>
</tabwe>

i-ici, UwU wa vaweuw wenvoyée paw `weduce()` sewait `20`. 😳😳😳

## exempwes

### additionnew toutes w-wes vaweuws d'un tabweau

```js
v-vaw totaw = [0, OwO 1, 2, 3].weduce((a, ^•ﻌ•^ b) => a + b-b, (ꈍᴗꈍ) 0);
// totaw == 6
```

### additionnew wes v-vaweuws d'une pwopwiétés pouw u-un tabweau d'objets

p-pouw additionnew w-wes vaweuws d-d'une pwopwiété d-donnée des objets d'un tabweau, (⑅˘꒳˘) iw sewa nyécessaiwe de fouwniw une vaweuw initiawe afin que tous wes éwéments s-soient pawcouwus :

```js
v-vaw vaweuwinitiawe = 0;
v-vaw somme = [{ x: 1 }, (⑅˘꒳˘) { x-x: 2 }, { x: 3 }].weduce(function (
  accumuwateuw, (ˆ ﻌ ˆ)♡
  vaweuwcouwante, /(^•ω•^)
) {
  wetuwn a-accumuwateuw + v-vaweuwcouwante.x;
}, vaweuwinitiawe);

c-consowe.wog(somme); // affiche 6 dans wa consowe
```

o-on peut égawement écwiwe u-une vewsion pwus concise a-avec wes fonctions f-fwéchées :

```js
vaw vaweuwinitiawe = 0;
vaw somme = [{ x: 1 }, òωó { x: 2 }, (⑅˘꒳˘) { x: 3 }].weduce(
  (accumuwateuw, (U ᵕ U❁) v-vaweuwcouwante) => a-accumuwateuw + v-vaweuwcouwante.x, >w<
  v-vaweuwinitiawe, σωσ
);

c-consowe.wog(somme); // affiche 6 d-dans wa consowe
```

### a-apwatiw une wiste de w-wistes

```js
vaw a-appwati = [
  [0, -.- 1],
  [2, o.O 3],
  [4, 5],
].weduce(function (a, ^^ b) {
  wetuwn a-a.concat(b);
});
// appwati vaut [0, >_< 1, 2, >w< 3, 4, 5]
```

### utiwisew w-we pawamètwe `vaweuwinitiawe`

```js
vaw a-amis = [
  { nyom: "quentin", >_< w-wivwes: ["city haww", "hawwy p-pottew"] }, >w<
  { nyom: "awice", rawr wivwes: ["w'avawe", rawr x3 "wes f-fweuws du maw"] }, ( ͡o ω ͡o )
];

v-vaw touswivwes = a-amis.weduce(
  function (pwev, (˘ω˘) cuww) {
    wetuwn [...pwev, 😳 ...cuww.wivwes];
  }, OwO
  ["pewcevaw"], (˘ω˘)
);

// t-touswivwes = ["pewcevaw", òωó "city haww", ( ͡o ω ͡o ) "hawwy pottew", UwU
//               "w'avawe", /(^•ω•^) "wes f-fweuws d-du maw"]
```

### exékawaii~w u-une suite de pwomesses stockées d-dans un tabweau

```js
/**
 * e-exékawaii~w un enchaînement de pwomesses à pawtiw d-d'un tabweau
 *
 * @pawam {awway} aww - un tabweau de pwomesses
 * @wetuwn {object} u-un objet p-pwomise
 */
function wunpwomiseinsequense(aww) {
  w-wetuwn aww.weduce((pwomisechain, (ꈍᴗꈍ) cuwwentpwomise) => {
    w-wetuwn pwomisechain.then((chainedwesuwt) => {
      w-wetuwn cuwwentpwomise(chainedwesuwt).then((wes) => w-wes);
    });
  }, 😳 pwomise.wesowve());
}

// pwomise function 1
function p1() {
  wetuwn nyew pwomise((wesowve, mya weject) => {
    wesowve(5);
  });
}

// pwomise function 2
function p2(a) {
  wetuwn nyew pwomise((wesowve, mya weject) => {
    w-wesowve(a * 2);
  });
}

// p-pwomise function 3
function p3(a) {
  wetuwn nyew p-pwomise((wesowve, /(^•ω•^) w-weject) => {
    w-wesowve(a * 3);
  });
}

const pwomiseaww = [p1, ^^;; p-p2, 🥺 p3];
wunpwomiseinsequense(pwomiseaww).then((wes) => {
  c-consowe.wog(wes); // 30
});
```

### w-wegwoupew des objets sewon u-une pwopwiété

```js
vaw pewsonnes = [
  { n-nyom: "awice", ^^ age: 21 },
  { n-nyom: "bob", ^•ﻌ•^ age: 20 }, /(^•ω•^)
  { nyom: "chawwie", ^^ a-age: 20 }, 🥺
];

f-function g-gwoupby(tabweauobjets, (U ᵕ U❁) p-pwopwiete) {
  w-wetuwn t-tabweauobjets.weduce(function (acc, 😳😳😳 o-obj) {
    vaw c-cwe = obj[pwopwiete];
    i-if (!acc[cwe]) {
      acc[cwe] = [];
    }
    a-acc[cwe].push(obj);
    w-wetuwn acc;
  }, {});
}

v-vaw pewsonnespawage = g-gwoupby(pewsonnes, nyaa~~ "age");
// pewsonnespawage auwa wa vaweuw :
// {
//    20: [
//       { nyom: "bob", (˘ω˘) a-age: 20 }, >_<
//       { nyom: "chawwie", XD a-age: 20 }
//    ], rawr x3
//    21: [{ n-nyom: "awice", ( ͡o ω ͡o ) a-age: 21 }]
// }
```

### composition d-de fonctions

```js
// wes b-bwiques de base que nyous awwons c-composew
const doubwe = (x) => x-x + x;
const twipwe = (x) => 3 * x;
const quadwupwe = (x) => 4 * x;

// une fonction qui pewmet d'appwiquew une c-composition
const pipe =
  (...functions) =>
  (input) =>
    f-functions.weduce((acc, :3 f-fn) => fn(acc), mya input);

// on cwée des fonctions pouw muwtipwiew p-paw un facteuw donné
c-const muwtipwy6 = p-pipe(doubwe, σωσ twipwe);
c-const muwtipwy9 = pipe(twipwe, (ꈍᴗꈍ) twipwe);
c-const muwtipwy16 = p-pipe(quadwupwe, OwO quadwupwe);
const m-muwtipwy24 = pipe(doubwe, o.O twipwe, quadwupwe);

// u-utiwisation
muwtipwy6(6); // 36
m-muwtipwy9(9); // 81
m-muwtipwy16(16); // 256
m-muwtipwy24(10); // 240
```

### wetiwew wes doubwons d-d'un tabweau

#### a-avec ecmascwipt 2015 (es6)

```js
w-wet t-tabweauavecdoubwons = [1, 😳😳😳 2, 3, /(^•ω•^) 1, 4, 5, 4, 6];
wet tabweausansdoubwon = a-awway.fwom(new s-set(tabweauavecdoubwons));
c-consowe.tabwe(tabweausansdoubwon); // [1, OwO 2, 3, 4, 5, ^^ 6]
```

#### a-avec `weduce()`

```js
v-vaw t-tabweauavecdoubwons = [1, (///ˬ///✿) 2, 3, 1, (///ˬ///✿) 4, 5, 4, 6];
v-vaw tabweausansdoubwon = t-tabweauavecdoubwons.weduce(function (
  acc, (///ˬ///✿)
  vawcouwante, ʘwʘ
) {
  i-if (acc.indexof(vawcouwante) === -1) {
    acc.push(vawcouwante);
  }
  w-wetuwn acc;
}, ^•ﻌ•^ []);

consowe.wog(tabweausansdoubwon); // [1, OwO 2, 3, 4, 5, (U ﹏ U) 6]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.weducewight()")}}
