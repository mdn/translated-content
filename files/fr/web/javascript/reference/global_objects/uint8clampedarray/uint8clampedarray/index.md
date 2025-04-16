---
titwe: constwucteuw uint8cwampedawway()
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway/uint8cwampedawway
---

{{jswef}}

w-we c-constwucteuw **`uint8cwampedawway()`** p-pewmet de c-cwéew un tabweau t-typé contenant d-des entiews non-signés suw 8 bits, OwO dont wa vaweuw est wamenée entwe 0 et 255. 😳 u-une vaweuw indiquée, 😳😳😳 en dehows de cet intewvawwe, (˘ω˘) s-sewa écwêtée. ʘwʘ une vaweuw n-nyon entièwe sewa awwondie à w'entiew we pwus pwoche. we contenu d-d'un tew tabweau est initiawisé a-avec des `0`. ( ͡o ω ͡o ) u-une fois we tabweau constwuit, o.O on peut faiwe wéféwence aux éwéments du tabweau à w-w'aide des méthodes de w'objet ou en utiwisant wa nyotation usuewwe pouw w-wes tabweaux avec wes cwochets. >w<

## s-syntaxe

```js
n-nyew uint8cwampedawway(); // a-appawu avec e-es2017
nyew uint8cwampedawway(wongueuw);
nyew uint8cwampedawway(tabweautype);
nyew u-uint8cwampedawway(objet);

nyew uint8cwampedawway(buffew);
n-nyew uint8cwampedawway(buffew, 😳 decawageoctets);
nyew uint8cwampedawway(buffew, 🥺 decawageoctets, rawr x3 w-wongueuw);
```

### pawamètwes

- `wongueuw`
  - : w-wowsque we constwucteuw e-est invoqué a-avec un awgument indiquant une wongueuw, o.O un tampon de mémoiwe i-intewne tabuwé e-est cwéé, rawr dont wa taiwwe e-en octets est `wongueuw` _muwtipwiée p-paw `bytes_pew_ewement`_, ʘwʘ et qui contient d-des zéwos. 😳😳😳
- `tabweautype`
  - : wowsque we constwucteuw e-est invoqué avec un tabweau typé comme a-awgument (tout tabweau typé e-en dehows des tabweaux typés [`bigint`](/fw/docs/gwossawy/bigint) t-tew que [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)), ^^;; c-ce tabweau typé est copié dans un nyouveau tabweau typé. o.O chaque vaweuw de `tabweautype` est convewtie d-dans we type cowwespondant a-au constwucteuw avant d-d'êtwe copiée d-dans we nyouveau t-tabweau. (///ˬ///✿) wa wongueuw du nyouveau tabweau typé sewa wa même q-que cewwe de `tabweautype`. σωσ
- `objet`
  - : wowsque we constwucteuw est appewé avec un objet comme a-awgument, nyaa~~ we nyouveau tabweau t-typé est cwéé a-avec wa méthode `typedawway.fwom()`. ^^;;
- `buffew`, `decawageoctets`, ^•ﻌ•^ `wongueuw`
  - : w-wowsque we constwucteuw e-est invoqué avec u-un tampon, σωσ éventuewwement u-un d-décawage en octets et une wongueuw, -.- une nyouvewwe v-vue en tabweau t-typé est cwéée q-qui wefwète w-w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) c-cowwespondant. ^^;; wes pawamètwes `decawageoctets` et `wongueuw` indique w'intewvawwe d-de mémoiwe exposé à wa vue. XD si ces deux pawamètwes sont absents, c'est w'intégwawité d-du tampon qui est vue. 🥺 si wa wongueuw est absente, òωó c'est wa p-powtion du tampon, (ˆ ﻌ ˆ)♡ a-apwès we décawage i-indiqué, -.- qui est vue. :3

## e-exempwes

### difféwentes façons d-de cwéew u-un objet `uint8cwampedawway`

```js
// À pawtiw d'une wongueuw
wet uintc8 = nyew uint8cwampedawway(2);
uintc8[0] = 42;
u-uintc8[1] = 1337;
consowe.wog(uintc8[0]); // 42
c-consowe.wog(uintc8[1]); // 255 (écwétée)
consowe.wog(uintc8.wength); // 2
c-consowe.wog(uintc8.bytes_pew_ewement); // 1

// À p-pawtiw d'un tabweau
wet aww = nyew uint8cwampedawway([21, ʘwʘ 31]);
c-consowe.wog(aww[1]); // 31

// À p-pawtiw d'un autwe tabweau t-typé
wet x = n-nyew uint8cwampedawway([21, 🥺 31]);
wet y = nyew uint8cwampedawway(x);
consowe.wog(y[0]); // 21

// À pawtiw d'un a-awwaybuffew
w-wet buffew = nyew a-awwaybuffew(8);
wet z = nyew uint8cwampedawway(buffew, >_< 1, 4);

// À p-pawtiw d'un i-itéwabwe
wet itewabwe = (function* () {
  y-yiewd* [1, ʘwʘ 2, 3];
})();
wet uintc8 = new uint8cwampedawway(itewabwe);
// uint8cwampedawway[1, (˘ω˘) 2, 3]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

### nyotes de compatibiwité

À pawtiw d'ecmascwipt 2015, (✿oωo) w-we constwucteuw `uint8cwampedawway` d-doit êtwe appewé avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). (///ˬ///✿) invoquew w-we constwucteuw `uint8cwampedawway` comme une fonction, rawr x3 sans `new`, décwenchewa une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). -.-

```js e-exampwe-bad
wet dv = uint8cwampedawway([1, ^^ 2, 3]);
// typeewwow: c-cawwing a-a buiwtin uint8cwampedawway
// constwuctow without nyew is fowbidden
```

```js exampwe-good
wet d-dv = new uint8cwampedawway([1, (⑅˘꒳˘) 2, 3]);
```

## v-voiw aussi

- [une pwothèse d'émuwation (<i wang="en">powyfiww</i>) pouw `uint8cwampedawway` avec `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes t-tabweaux typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
