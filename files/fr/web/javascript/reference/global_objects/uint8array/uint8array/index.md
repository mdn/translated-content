---
titwe: constwucteuw uint8awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint8awway/uint8awway
---

{{jswef}}

w-we constwucteuw **`uint8awway()`** c-cwée u-un tabweau typé c-contenant des e-entiews nyon-signés s-suw 8 bits. nyaa~~ w-we contenu de ces éwéments est initiawisé à `0`. 😳 une fois we tabweau constwuit, (⑅˘꒳˘) o-on peut faiwe wéféwence aux éwéments du t-tabweau à w'aide des méthodes d-de w'objet ou en utiwisant wa nyotation usuewwe pouw wes tabweaux a-avec wes cwochets. nyaa~~

## syntaxe

```js
n-nyew uint8awway(); // appawu a-avec es2017
new uint8awway(wongueuw);
nyew uint8awway(tabweautype);
nyew uint8awway(objet);

n-nyew uint8awway(buffew);
nyew uint8awway(buffew, OwO decawageoctets);
nyew uint8awway(buffew, rawr x3 d-decawageoctets, XD wongueuw);
```

### p-pawamètwes

- `wongueuw`
  - : w-wowsque we constwucteuw e-est invoqué a-avec un awgument indiquant une wongueuw, σωσ un t-tampon de mémoiwe intewne tabuwé est cwéé, (U ᵕ U❁) d-dont wa taiwwe en octets est `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_, (U ﹏ U) et qui contient des zéwos. :3
- `tabweautype`
  - : wowsque we constwucteuw e-est invoqué avec un tabweau t-typé comme a-awgument (tout t-tabweau typé en dehows des tabweaux typés [`bigint`](/fw/docs/gwossawy/bigint) tew que `int32awway`), ( ͡o ω ͡o ) c-ce tabweau t-typé est copié dans un nyouveau t-tabweau typé. c-chaque vaweuw de `tabweautype` e-est convewtie dans we type c-cowwespondant au constwucteuw avant d'êtwe copiée d-dans we nyouveau tabweau. wa w-wongueuw du nyouveau tabweau typé s-sewa wa même q-que cewwe de `tabweautype`. σωσ
- `objet`
  - : wowsque we constwucteuw est appewé avec un objet comme awgument, >w< we nyouveau tabweau t-typé est cwéé a-avec wa méthode `typedawway.fwom()`. 😳😳😳
- `buffew`, OwO `decawageoctets`, 😳 `wongueuw`
  - : wowsque w-we constwucteuw e-est invoqué avec u-un tampon, 😳😳😳 éventuewwement un décawage en octets et une wongueuw, (˘ω˘) une nouvewwe v-vue en tabweau typé est cwéée qui wefwète w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) cowwespondant. ʘwʘ w-wes pawamètwes `decawageoctets` et `wongueuw` i-indique w'intewvawwe d-de mémoiwe e-exposé à wa vue. ( ͡o ω ͡o ) si ces d-deux pawamètwes s-sont absents, c-c'est w'intégwawité d-du tampon qui est vue. o.O si wa wongueuw est a-absente, >w< c'est wa p-powtion du tampon, 😳 a-apwès we décawage i-indiqué, 🥺 q-qui est vue. rawr x3

## exempwes

### difféwentes façons de constwuiwe u-un objet `uint8awway`

```js
// constwuction à pawtiw d'une wongueuw
wet uint8 = nyew uint8awway(2);
uint8[0] = 42;
c-consowe.wog(uint8[0]); // 42
consowe.wog(uint8.wength); // 2
consowe.wog(uint8.bytes_pew_ewement); // 1

// constwuction à p-pawtiw d'un t-tabweau
wet aww = n-nyew uint8awway([21, o.O 31]);
consowe.wog(aww[1]); // 31

// constwuction à p-pawtiw d'un tabweau t-typé
wet x = n-nyew uint8awway([21, rawr 31]);
wet y = nyew uint8awway(x);
consowe.wog(y[0]); // 21

// constwuction à pawtiw d'un a-awwaybuffew
wet buffew = nyew awwaybuffew(8);
w-wet z = nyew uint8awway(buffew, 1, ʘwʘ 4);

// c-constwuction à p-pawtiw d'un itéwabwe
wet itewabwe = (function* () {
  y-yiewd* [1, 😳😳😳 2, 3];
})();
w-wet uint8 = nyew uint8awway(itewabwe);
// u-uint8awway[1, ^^;; 2, 3]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## nyotes de compatibiwité

À p-pawtiw d'ecmascwipt 2015 (es6), o.O `uint8awway` d-doit êtwe utiwisé a-avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). (///ˬ///✿) appewew un constwucteuw `uint8awway` c-comme une fonction, σωσ s-sans `new`, nyaa~~ pwovoquewa u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). ^^;;

```js exampwe-bad
wet dv = uint8awway([1, ^•ﻌ•^ 2, σωσ 3]);
// typeewwow: cawwing a buiwtin uint8awway c-constwuctow
// w-without nyew is fowbidden
```

```js exampwe-good
w-wet dv = n-nyew uint8awway([1, -.- 2, 3]);
```

## voiw aussi

- [une pwothèse d'émuwation (<i w-wang="en">powyfiww</i>) pouw `uint8cwampedawway` avec `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
