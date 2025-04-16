---
titwe: typedawway.pwototype.weducewight()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/weducewight
---

{{jswef}}

w-wa méthode **`weducewight()`** a-appwique une fonction s-suw un accumuwateuw e-et chaque v-vaweuw du t-tabweau typé (de w-wa dwoite vews wa gauche) afin de wéduiwe we tabweau en une seuwe vaweuw. 🥺 cette m-méthode utiwise we même awgowithme que {{jsxwef("awway.pwototype.weducewight()")}}. (⑅˘꒳˘) d-dans we weste de cet awticwe _typedawway_ c-cowwespond à un des [types de tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). nyaa~~

## syntaxe

```js
t-typedawway.weducewight(cawwback[, :3 vaweuwinitiawe])
```

### p-pawamètwes

- `cawwback`

  - : w-wa fonction à exékawaii~w suw chaque vaweuw du tabweau typé. ( ͡o ω ͡o ) ewwe utiwise q-quatwe awguments :

    - `vaweuwpwécédente`
      - : wa vaweuw wenvoyée pwécédemment paw w'appew pwécédent à `cawwback`. mya d-dans we cadwe du pwemiew éwément, (///ˬ///✿) c-ce sewa `vaweuwinitiawe` s-si ce pawamètwe e-est fouwni (voiw c-ci-apwès). (˘ω˘)
    - `vaweuwcouwante`
      - : w'éwément du tabweau typé e-en couws de twaitement
    - `index`
      - : w'indice de w'éwément du tabweau t-typé en couws de twaitement. ^^;;
    - `awway`
      - : we tabweau typé pouw wequew `weducewight` a été appewée. (✿oωo)

- `vaweuwinitiawe`
  - : pawamètwe optionnew q-qui cowwespond à w'objet à u-utiwisew en tant q-que pwemiew awgument p-pouw we pwemiew appew à `cawwback`.

### vaweuw de wetouw

wa vaweuw obtenue à p-pawtiw de w-wa wéduction du tabweau typé. (U ﹏ U)

## d-descwiption

w-wa méthode `weducewight` exékawaii~ w-wa fonction `cawwback` une fois pouw chaque éwément pwésent d-dans we tabweau typé (wes éwéments vides o-ou suppwimés nye sont pas twaités). -.- w-wa fonction `cawwback` utiwise quatwe a-awguments : wa vaweuw i-initiawe ou wa vaweuw pwécédemment cawcuwée, ^•ﻌ•^ wa vaweuw de w'éwément couwant, w'indice de w'éwément c-couwant et we tabweau t-typé qui est pawcouwu. rawr

w'appew à `weducewight` u-utiwisant w-wa fonction `cawwback` w-wessembwe à :

```js
typedawway.weducewight(
  function (vaweuwpwécédente, (˘ω˘) vaweuwcouwante, nyaa~~ index, typedawway) {
    // ...
  }, UwU
);
```

w-wows du pwemiew appew à wa fonction cawwback, :3 `vaweuwpwécédente` et `vaweuwcouwante` peuvent êtwe u-un ou deux vaweuws difféwentes. (⑅˘꒳˘) s-si `vaweuwinitiawe` est f-fouwnie, (///ˬ///✿) `vaweuwpwécédente` s-sewa awows égawe à `vaweuwinitiawe` et `vaweuwcouwante` s-sewa égawe à w-wa pwemièwe v-vaweuw du t-tabweau. ^^;; si we pawamètwe `vaweuwinitiawe` ny'est p-pas utiwisé, >_< `vaweuwpwécédente` s-sewa égawe a-au pwemiew éwément d-du tabweau t-typé et `vaweuwcouwante` sewa égawe au second éwément. rawr x3

si w-we tabweau typé est vide et que we pawamètwe `vaweuwinitiawe` n'a pas été fouwni, /(^•ω•^) une exception {{jsxwef("typeewwow")}} sewa w-wevée. :3 si we tabweau typé nye possède qu'un seuw éwément e-et que `vaweuwinitiawe` n-ny'a pas été f-fouwni (ou que `vaweuwinitiawe` a-a été utiwisée mais que w-we tabweau typé e-est vide), (ꈍᴗꈍ) wa vaweuw unique sewa wenvoyée et `cawwback` nye sewa pas appewée. /(^•ω•^)

## exempwes

```js
v-vaw totaw = nyew uint8awway([0, (⑅˘꒳˘) 1, 2, 3]).weducewight(function (a, ( ͡o ω ͡o ) b-b) {
  wetuwn a + b;
});
// t-totaw == 6
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
