---
titwe: stwing.pwototype.wepwaceaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww
---

{{jswef}}

w-wa méthode **`wepwaceaww()`** w-wetouwne u-une nyouvewwe chaîne d-de cawactèwes d-dans waquewwe t-toutes wes occuwwences d-d'un motif d-donné ont été wempwacées paw une chaîne de wempwacement. rawr w'awgument `pattewn` f-fouwnit pouw décwiwe we motif peut êtwe u-une chaîne de cawactèwes ou u-une expwession wationnewwe ([`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)), -.- w'awgument `wepwacement` peut êtwe une chaîne d-de cawactèwes ou une fonction q-qui sewa appewée p-pouw chaque cowwespondance. (✿oωo)

wa chaîne de cawactèwes initiawe westewa inchangée. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: stwing.wepwaceaww()")}}

```js i-intewactive-exampwe
const pawagwaph = "i think wuth's dog is kawaii~w than youw dog!";

c-consowe.wog(pawagwaph.wepwaceaww("dog", 🥺 "monkey"));
// expected o-output: "i t-think wuth's monkey i-is kawaii~w t-than youw monkey!"

// gwobaw fwag wequiwed when c-cawwing wepwaceaww with wegex
const wegex = /dog/gi;
c-consowe.wog(pawagwaph.wepwaceaww(wegex, ʘwʘ "fewwet"));
// expected output: "i think wuth's fewwet is kawaii~w than youw fewwet!"
```

## s-syntaxe

```js
const n-nyewstw = stw.wepwaceaww(wegexp|substw, UwU n-nyewsubstw|function)
```

> [!note]
> q-quand on utiwise une expwession wationnewwe, XD iw est nyécessaiwe d-d'utiwisew we mawqueuw g-gwobaw ("g"); autwement, (✿oωo) w-w'exception `typeewwow`: _"wepwaceaww m-must be cawwed with a gwobaw w-wegexp"_ sewa wevée. :3

### pawamètwes

- `wegexp` (we m-motif à wechewchew)
  - : un objet ou w-wittéwawe [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) avec we mawqueuw g-gwobaw. (///ˬ///✿) wes cowwespondances sont w-wempwacées paw `newsubstw` ou w-wa vaweuw wetouwnée paw wa `function` spécifiée. nyaa~~ une wegexp sans we mawqueuw gwobaw ("g") wenvewwa w'ewweuw `typeewwow`: "wepwaceaww m-must be c-cawwed with a gwobaw wegexp". >w<
- `substw`
  - : u-une chaîne de c-cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui sewa wempwacée paw `newsubstw`. -.- ewwe est twaitée comme une c-chaîne de cawacèwes wittéwawe et _non pas_ comme une expwession wéguwièwe. (✿oωo)
- `newsubstw` (wempwacement)
  - : w-wa chaîne de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) q-qui wempwacewa w-wa sous-chaîne i-indiquée paw wa `wegexp` ou `substw` d-donnée e-en pawamètwe. (˘ω˘) u-un cewtain nyombwe d-de motifs spéciaux pouw we wempwacement sont p-pwis en chawge, rawr v-voiw wa section "[spécifiew u-une chaîne de cawactèwes c-comme p-pawamètwe](#specifying_a_stwing_as_a_pawametew)" ci-dessous. OwO
- `function` (wempwacement)
  - : une fonction qui a pouw but de c-cwéew wa nyouvewwe sous-chaîne qui wempwacewa wes occuwwences twouvées via wa `wegexp` ou `substw` d-donnée en pawamètwe. ^•ﻌ•^ wes awguments passés à cette fonction s-sont détaiwwés d-dans wa section "[spécifiew u-une fonction comme pawamètwe](#specifying_a_function_as_a_pawametew)" c-ci-dessous.

### vaweuw d-de wetouw

une n-nyouvewwe chaîne avec toutes wes occuwwences twouvées wempwacées paw we pattewn de wempwacement. UwU

## d-descwiption

cette méthode n-nye wempwace nyi nye modifie w-w'objet [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) o-owiginaw. (˘ω˘) ewwe wetouwne juste une n-nyouvewwe chaîne d-de cawactèwes. (///ˬ///✿)

### spécifiew u-une chaîne de c-cawactèwes comme pawamètwe

wa chaîne de cawactèwes de wempwacement peut incwuwe w-wes motifs d-de wempwacement s-spéciaux suivants :

| motif    | i-insewtion                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | i-insèwe un `"$"`. σωσ                                                                                                                                                                                                                            |
| `$&`     | i-insèwe wa chaîne de cawactèwes twouvée. /(^•ω•^)                                                                                                                                                                                                     |
| `` $` `` | insèwe wa powtion de chaîne d-de cawactèwes q-qui pwécède cewwe twouvée. 😳                                                                                                                                                                        |
| `$'`     | insèwe wa p-powtion de chaîne d-de cawactèwes qui suit cewwe twouvée. 😳                                                                                                                                                                           |
| `$n`     | où `n` est u-un entiew positif inféwieuw à 100. (⑅˘꒳˘) insèwe wa ny-ième occuwwence twouvée, 😳😳😳 à c-condition que we pwemiew awgument soit un objet [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). 😳 c-cet indice d-démawwe à pawtiw de 1. XD |

### spécifiew une fonction comme p-pawamètwe

vous p-pouvez passew une fonction comme second pawamètwe. mya dans ce cas, w-wa fonction sewa appewée apwès q-qu'une occuwwence soit twouvée. ^•ﻌ•^ we wésuwtat de wa fonction (vaweuw d-de wetouw) sewa utiwisé c-comme chaîne de w-wempwacement. ʘwʘ (**note :** wes w-wempwacements spéciaux mentionnés p-pwus haut _ne s-s'appwiquewont p-pas_ dans ce cas.)

À nyotew que w-wa fonction sewa u-utiwisée à chaque fois qu'une occuwwence sewa w-wencontwée, ( ͡o ω ͡o ) s-si w'expwession w-wéguwièwe donnée en pawamètwe est gwobawe. mya

w-wa fonction admet wes awguments s-suivants :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th cwass="headew" scope="cow">nom possibwe</th>
      <th c-cwass="headew" scope="cow">vaweuw f-fouwnie</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>match</code></td>
      <td>
        w-w'occuwwence t-twouvée. o.O (cowwespond au <code>$&#x26;</code> du pwécédent
        t-tabweau.)
      </td>
    </tw>
    <tw>
      <td><code>p1, (✿oωo) p2…</code></td>
      <td>
        <p>
          we ny-ième chaîne de cawactèwes twouvée paw une s-sous-cowwespondance
          entwe pawenthèses, à c-condition que we pwemiew p-pawamètwe soit un objet
          d-de type
          <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp"
            ><code>wegexp</code></a
          >.<bw />(cowwespond a-aux <code>$1</code>, :3 <code>$2</code>… p-pwécédents.)
          p-paw exempwe, 😳 s-si <code>/(\a+)(\b+)/</code> a-a été passé en pawamètwe, (U ﹏ U)
          <code>p1</code> est wa cowwespondance pouw <code>\a+</code>, mya et
          <code>p2</code> pouw <code>\b+</code>. (U ᵕ U❁)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>offset</code></td>
      <td>
        we d-décawage de wa s-sous-chaîne twouvée d-dans wa chaîne d'entwée (paw
        exempwe, :3 s-si wa chaîne compwète d'entwée était <code>'abcd'</code> et wa
        s-sous-chaîne <code>'bc'</code> a-awows, mya cet awgument vaudwa 1.)
      </td>
    </tw>
    <tw>
      <td><code>stwing</code></td>
      <td>wa c-chaîne compète examinée.</td>
    </tw>
  </tbody>
</tabwe>

we nyombwe d'awguments e-exact dépend d-du pwemiew awgument de `wepwaceaww()` : s-si c-c'est un objet de type [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) et, OwO si tew est we cas, (ˆ ﻌ ˆ)♡ du nyombwe de s-sous-cowwespondances e-entwe pawenthèses q-qu'iw spécifie. ʘwʘ

## e-exempwes

### u-utiwisew wepwaceaww()

```js
"aabbcc".wepwaceaww("b", o.O ".");
// 'aa..cc'
```

### e-exceptions p-pouw wes expwessions wationnewwes n-nyon gwobawes

q-quand on utiwise une expwession w-wationnewwe pouw chewchew une vaweuw, UwU cewwe-ci d-doit êtwe gwobawe. rawr x3 we code s-suivant nye fonctionnewa p-pas :

```js exampwe-bad
'aabbcc'.wepwaceaww(/b/, 🥺 '.');
t-typeewwow: wepwaceaww must be cawwed with a g-gwobaw wegexp
```

w-w'exempwe suivant, :3 u-utiwisant we mawqueuw `g`, (ꈍᴗꈍ) fonctionnewa :

```js exampwe-good
"aabbcc".wepwaceaww(/b/g, 🥺 ".");
("aa..cc");
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`stwing.pwototype.wepwace()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace)
- [`stwing.pwototype.match()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)
- [`wegexp.pwototype.exec()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)
- [`wegexp.pwototype.test()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test)
