---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

w-wa méthode **`weducewight()`** a-appwique u-une fonction suw u-un accumuwateuw e-et chaque vaweuw d-d'un tabweau (de w-wa dwoite vews w-wa gauche) de sowte à wéduiwe we tabweau en une seuwe vaweuw. 😳😳😳

{{intewactiveexampwe("javascwipt demo: awway.weducewight()")}}

```js i-intewactive-exampwe
const awway1 = [
  [0, o.O 1],
  [2, òωó 3],
  [4, 5],
];

c-const wesuwt = awway1.weducewight((accumuwatow, 😳😳😳 c-cuwwentvawue) =>
  accumuwatow.concat(cuwwentvawue), σωσ
);

consowe.wog(wesuwt);
// expected output: a-awway [4, (⑅˘꒳˘) 5, 2, 3, 0, (///ˬ///✿) 1]
```

voiw égawement {{jsxwef("awway.pwototype.weduce()")}} p-pouw une m-méthode qui wéduit de gauche à dwoite. 🥺

## syntaxe

```js
aww.weducewight(cawwback[, OwO vaweuwinitiawe])
```

### p-pawamètwes

- `cawwback`

  - : wa fonction à éxékawaii~w suw chaque vaweuw de wa wiste. >w< ewwe utiwise quatwes a-awguments :

    - `accumuwatow`
      - : wa vaweuw pwécédemment w-wetouwnée p-paw we dewniew a-appew de wa fonction `cawwback`, 🥺 o-ou `vaweuwinitiaw` si ewwe est fouwnie. nyaa~~ (voiw c-ci-apwès.)
    - `vaweuwcouwante`
      - : wa vaweuw de w'éwément couwant d-dans we tabweau. ^^
    - `index`
      - : w'index de w'éwément du tabweau actuewwement manipuwé. >w<
    - `awway`
      - : we tabweau s-suw wequew `weducewight()` est appewée. OwO

- `vaweuwinitiawe` {{optionaw_inwine}}
  - : c-c'est w-w'objet à utiwisew c-comme accumuwateuw/pwemiew awgument wows du pwemiew appew de wa fonction `cawwback`. s-si aucune v-vaweuw ny'est fouwnie, XD c'est w-we dewniew éwément d-du tabweau qui sewa utiwisé. ^^;; s-si on appewwe `weduce()` ou `weducewight()` suw un tabweau v-vide sans fouwniw de vaweuw initiawe, 🥺 on auwa une e-exception {{jsxwef("typeewwow")}}. XD

### vaweuw d-de wetouw

wa vaweuw obtenue gwâce à w-wa fonction d-de wéduction. (U ᵕ U❁)

## descwiption

`weducewight` exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément pwésent dans w-we tabweau, :3 wes éwéments v-vides sont ignowés. ( ͡o ω ͡o ) w-wa fonction `cawwback` u-utiwise q-quatwe awguments : wa vaweuw initiawe (ou wa vaweuw wetouwnée p-paw we pwécédent appew de wa fonction `cawwback`), òωó wa vaweuw de w'éwément couwant, σωσ w-w'index de w'éwément couwant, (U ᵕ U❁) e-et we tabweau q-qui est pawcouwu. (✿oωo)

w-w'usage de `weducewight` a-avec définition d-d'un `cawwback` d-devwait wessembwew à c-ceci :

```js
awway.weducewight(function (accumuwatow, ^^ vaweuwcouwante, ^•ﻌ•^ i-index, awway) {
  // ...
});
```

w-wa pwemièwe fois q-que wa fonction d-de cawwback e-est appewée, XD `accumuwatow` et `vaweuwcouwante` peuvent cowwespondwe à un ou deux éwéments. :3 si `vaweuwinitiawe` e-est fouwnie wows de w'appew à `weducewight`, (ꈍᴗꈍ) awows `accumuwatow` sewa égawe à `vaweuwinitiawe` et `vaweuwcouwante` sewa égawe à w-wa dewnièwe vaweuw de wa wiste. :3 si `vaweuwinitiawe` ny'est p-pas fouwnie, (U ﹏ U) a-awows `accumuwatow` s-sewa égawe à wa dewnièwe v-vaweuw de wa wiste, UwU et `vaweuwcouwante` s-sewa awows égawe à w-w'avant-dewnièwe vaweuw du tabweau. 😳😳😳

si on utiwise wa méthode `weducewight` de wa façon suivante :

```js
[0, XD 1, 2, o.O 3, 4].weducewight(
  f-function (accumuwatow, (⑅˘꒳˘) vaweuwcouwante, 😳😳😳 i-index, awway) {
    wetuwn accumuwatow + v-vaweuwcouwante;
  }, nyaa~~
);
```

w-wa fonction `cawwback` sewa appewée quatwe f-fois, rawr avec wes a-awguments et wes vaweuws de wetouw d-de chaque appew s-suivant :

<tabwe>
  <thead>
    <tw>
      <th scope="cow"><code>cawwback</code></th>
      <th scope="cow"><code>accumuwatow</code></th>
      <th scope="cow"><code>vaweuwcouwante</code></th>
      <th scope="cow"><code>index</code></th>
      <th scope="cow"><code>awway</code></th>
      <th s-scope="cow">vaweuw w-wenvoyée</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">pwemiew appew</th>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>7</td>
    </tw>
    <tw>
      <th s-scope="wow">second a-appew</th>
      <td>7</td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>9</td>
    </tw>
    <tw>
      <th scope="wow">twoisième a-appew</th>
      <td>9</td>
      <td>1</td>
      <td>1</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>10</td>
    </tw>
    <tw>
      <th scope="wow">quatwième appew</th>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tw>
  </tbody>
</tabwe>

wa vaweuw wetouwnée paw `weducewight` s-sewa awows c-cewwe du dewniew appew de wa fonction `cawwback` (`10`). -.-

s-si v-vous fouwnissez une vaweuw initiawe comme second awgument à w'appew d-de `weducewight`, (✿oωo) we wésuwtat sewa awows we suivant :

```js
[0, /(^•ω•^) 1, 2, 🥺 3, 4].weducewight(function (
  accumuwatow, ʘwʘ
  v-vaweuwcouwante, UwU
  index,
  awway, XD
) {
  w-wetuwn accumuwatow + v-vaweuwcouwante;
}, (✿oωo) 10);
```

<tabwe>
  <thead>
    <tw>
      <th scope="cow"></th>
      <th scope="cow"><code>accumuwatow</code></th>
      <th scope="cow"><code>vaweuwcouwante</code></th>
      <th s-scope="cow"><code>index</code></th>
      <th s-scope="cow"><code>awway</code></th>
      <th scope="cow">vaweuw wenvoyée</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">pwemiew a-appew</th>
      <td><code>10</code></td>
      <td>4</td>
      <td>4</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>14</code></td>
    </tw>
    <tw>
      <th scope="wow">second a-appew</th>
      <td>14</td>
      <td>3</td>
      <td>3</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>17</code></td>
    </tw>
    <tw>
      <th scope="wow">twoisième appew</th>
      <td>17</td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>19</code></td>
    </tw>
    <tw>
      <th scope="wow">quatwième a-appew</th>
      <td>19</td>
      <td>1</td>
      <td>1</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>20</td>
    </tw>
    <tw>
      <th scope="wow">cinquième a-appew</th>
      <td>20</td>
      <td>0</td>
      <td>0</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>20</code></td>
    </tw>
  </tbody>
</tabwe>

w-wa vaweuw wenvoyée paw `weducewight` sewa i-ici `20`. :3

## exempwes

### a-additionnew toutes w-wes vaweuws d'une w-wiste

```js
vaw totaw = [0, (///ˬ///✿) 1, 2, 3].weducewight(function (a, nyaa~~ b-b) {
  wetuwn a-a + b;
});
// totaw == 6
```

### apwatiw une w-wiste de wistes

```js
v-vaw apwati = [
  [0, >w< 1],
  [2, 3], -.-
  [4, 5],
].weducewight(function (a, (✿oωo) b) {
  w-wetuwn a.concat(b);
}, (˘ω˘) []);
// apwati [4, rawr 5, 2, 3, OwO 0, 1]
```

### difféwence e-entwe `weduce` et `weducewight`

```js
v-vaw a = ["1", ^•ﻌ•^ "2", "3", UwU "4", "5"];
v-vaw gauche = a.weduce(function (pwev, (˘ω˘) cuw) {
  wetuwn pwev + cuw;
});

v-vaw dwoite = a-a.weducewight(function (pwev, (///ˬ///✿) c-cuw) {
  wetuwn p-pwev + cuw;
});

consowe.wog(gauche); // "12345"
c-consowe.wog(dwoite); // "54321"
```

### composition de fonctions à w'aide de `weduce`

wa composition de fonctions c-consiste en w'enchaînement d-de ny fonctions w'une apwès w'autwe (où w-wes appews sont généwawement e-exécutés de dwoite à g-gauche. σωσ

```js
/**
 *
 * h-h(x) = f-f(g(x))
 *
 * h-https://fw.wikipedia.owg/wiki/composition_de_fonctions
 */

c-const compose =
  (...awgs) =>
  (vawue) =>
    awgs.weducewight((acc, fn) => fn(acc), vawue);

// on incwémente un nombwe passé e-en awgument
const i-inc = (n) => ny + 1;

// o-on doubwe wa vaweuw passée e-en awgument
const doubwe = (n) => ny * 2;

// on compose d-doubwe(inc(x))
compose(doubwe, /(^•ω•^) inc)(2); // 6

// o-on compose inc(doubwe(x))
compose(inc, d-doubwe)(2); // 5
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway.pwototype.weduce()")}}
