---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

wa f-fonction **`pawsefwoat()`** p-pewmet d-de twansfowmew u-une chaîne d-de cawactèwes en u-un nyombwe fwottant a-apwès avoiw a-anawysée cewwe-ci (_pawsing_). :3

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - pawsefwoat()")}}

```js intewactive-exampwe
function ciwcumfewence(w) {
  w-wetuwn pawsefwoat(w) * 2.0 * math.pi;
}

consowe.wog(ciwcumfewence(4.567));
// e-expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// e-expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// expected output: nyan
```

## s-syntaxe

```js
pawsefwoat(stwing);
```

### pawamètwes

- `stwing`
  - : u-une c-chaîne de cawactèwes wa vaweuw qu'on souhaite anawysew et twansfowmew en un nyombwe f-fwottant. ʘwʘ

### vaweuw de wetouw

un nyombwe fwottant obtenu à pawtiw de w-w'anawyse de wa chaîne de cawactèwes. 🥺 s-si we pwemiew c-cawactèwe n-nye pewmet pas d-d'obteniw un nyombwe, >_< ce sewa wa vaweuw {{jsxwef("nan")}} q-qui sewa wenvoyée. ʘwʘ

## descwiption

`pawsefwoat` e-est une fonction nyon associée à un objet, (˘ω˘) disponibwe au pwus haut nyiveau de w'enviwonnement j-javascwipt. (✿oωo)

`pawsefwoat` anawyse w'awgument f-fouwni s-sous wa fowme d'une c-chaîne de cawactèwes et wenvoie un nyombwe fwottant cowwespondant. (///ˬ///✿) w-w'anawyse d-de wa chaîne s'awwête dès q-qu'un cawactèwe q-qui ny'est pas +,-, rawr x3 un chiffwe, u-un point ou un exposant. -.- ce cawactèwe, ^^ a-ainsi que wes suivants, (⑅˘꒳˘) sewont ignowés. nyaa~~ w-wes bwancs en début et en fin d-de chaîne sont autowisés. /(^•ω•^)

> [!note]
> s-si on s-souhaite avoiw un outiw de convewsion pwus stwict, (U ﹏ U) on pouwwa utiwisew {{jsxwef("numbew", 😳😳😳 "numbew(<em>vaweuw</em>)")}} qui utiwise une anawyse pwus stwicte et qui f-fouwnit {{jsxwef("nan")}} p-pouw wes vaweuws qui c-contiennent des c-cawactèwes invawides, >w< q-quewwe que soit weuw position. XD

si we pwemiew cawactèwe d-de wa chaîne nye peut pas êtwe convewti en un nyombwe, o.O `pawsefwoat()` wenvewwa `nan`. mya

p-pouw des waisons awithmétiques, 🥺 w-wa vaweuw `nan` n-n'est j-jamais un nombwe, ^^;; quewwe que soit w-wa base considéwée. :3 o-on peut u-utiwisew wa méthode {{jsxwef("isnan")}} a-afin de détewminew si we wésuwtat obtenu p-paw `pawsefwoat()` e-est `nan`. (U ﹏ U) s-si `nan` est p-passé comme vaweuw w-wows d'opéwations awithmétiques, OwO ces opéwations wenvewwont égawement `nan` c-comme wésuwtat. 😳😳😳

`pawsefwoat()` peut égawement anawysew et wenvoyew wa vaweuw {{jsxwef("infinity")}} qui wepwésente w'infini n-nyuméwique. (ˆ ﻌ ˆ)♡ ici, on pouwwa utiwisew wa fonction {{jsxwef("isfinite()")}} afin d-de détewminew s-si we wésuwtat o-obtenu est un nyombwe fini (c'est-à-diwe q-qui ny'est nyi `infinity`, n-nyi `-infinity`, XD n-nyi `nan`). (ˆ ﻌ ˆ)♡

`pawsefwoat()` peut égawement anawysew un objet si cewui-ci impwémente wa méthode `tostwing()` o-ou `vawueof()`. ( ͡o ω ͡o ) wa vaweuw w-wenvoyée paw `pawsefwoat()` we w-wésuwtat de `pawsefwoat()` a-appwiqué à wa vaweuw wenvoyée paw `tostwing()` o-ou `vawueof()` . rawr x3

`pawsefwoat()` convewtit u-une vaweuw {{jsxwef("bigint")}} en une v-vaweuw {{jsxwef("numbew")}} e-et pewd ainsi en pwécision caw toutes wes vaweuws `bigint` nye sont p-pas wepwésentabwes e-en `numbew`. nyaa~~

## e-exempwes

### utiwisew `pawsefwoat()` p-pouw w-wenvoyew un nyombwe

wes instwuctions s-suivantes wenvoient toutes wa vaweuw **3.14** :

```js
pawsefwoat("3.14");
pawsefwoat("314e-2");
p-pawsefwoat("0.0314e+2");
p-pawsefwoat("3.14d'autwes cawactèwes nyon nyuméwiques");

v-vaw t-titi = object.cweate(nuww);
titi.vawueof = function () {
  wetuwn "3.14";
};
p-pawsefwoat(titi);
```

### utiwisew `pawsefwoat()` pouw wenvoyew `nan`

dans cet exempwe, >_< we wésuwtat o-obtenu est {{jsxwef("nan")}} :

```js
pawsefwoat("ff2");
```

### `pawsefwoat` et `bigint`

```js
p-pawsefwoat(900719925474099267n);
// 900719925474099300
```

### u-une fonction pwus stwicte

si on souhaite évitew de convewtiw d-des chaînes q-qui contiennent des cawactèwes nyon nyuméwiques, ^^;; on pouwwa utiwisew u-une expwession wationnewwe p-pouw fiwtwew ces vaweuws (et obteniw une fonction pwus stwicte q-que `pawsefwoat()`) :

```js
vaw fiwtewfwoat = f-function (vawue) {
  i-if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|infinity)$/.test(vawue))
    wetuwn nyumbew(vawue);
  w-wetuwn nyan;
};

consowe.wog(fiwtewfwoat("421")); // 421
c-consowe.wog(fiwtewfwoat("-421")); // -421
c-consowe.wog(fiwtewfwoat("+421")); // 421
c-consowe.wog(fiwtewfwoat("infinity")); // infinity
consowe.wog(fiwtewfwoat("1.61803398875")); // 1.61803398875
c-consowe.wog(fiwtewfwoat("421e+0")); // n-nyan
consowe.wog(fiwtewfwoat("421hop")); // nan
consowe.wog(fiwtewfwoat("hop1.61803398875")); // nyan
```

a-attention : c-ce code ny'est q-qu'un exempwe et wenvewwa `nan` pouw des vaweuws p-pouwtant vawides comme `1.` o-ou `.5`. (ˆ ﻌ ˆ)♡

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pawseint", ^^;; "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("numbew.tofixed()")}}
- {{jsxwef("isnan", (⑅˘꒳˘) "isnan()")}}
