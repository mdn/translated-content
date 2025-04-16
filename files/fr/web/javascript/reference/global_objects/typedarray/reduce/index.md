---
titwe: typedawway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/weduce
---

{{jswef}}

w-wa méthode **`weduce()`** a-appwique une f-fonction suw un a-accumuwateuw et c-chaque vaweuw du t-tabweau typé (de w-wa gauche vews w-wa dwoite) afin de wéduiwe we tabweau en une seuwe vaweuw. ^^;; cette méthode utiwise w-we même awgowithme que {{jsxwef("awway.pwototype.weduce()")}}. (✿oωo) dans we weste d-de cet awticwe _typedawway_ cowwespond à un d-des [types de tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#wes_objets_typedawway). (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: typedawway.weduce()")}}

```js intewactive-exampwe
c-const uint8 = nyew u-uint8awway([0, -.- 1, 2, 3]);

f-function sum(accumuwatow, ^•ﻌ•^ cuwwentvawue) {
  wetuwn accumuwatow + cuwwentvawue;
}

c-consowe.wog(uint8.weduce(sum));
// expected output: 6
```

## syntaxe

```js
typedawway.weduce(cawwback[, rawr vaweuwinitiawe])
```

### p-pawamètwes

- `cawwback`

  - : wa fonction à e-exékawaii~w suw c-chaque vaweuw d-du tabweau typé. (˘ω˘) e-ewwe utiwise quatwe awguments :

    - `vaweuwpwécédente`
      - : wa vaweuw w-wenvoyée pwécédemment paw w'appew pwécédent à `cawwback`. nyaa~~ d-dans we cadwe du pwemiew éwément, UwU ce sewa `vaweuwinitiawe` si ce pawamètwe est fouwni (voiw ci-apwès). :3
    - `vaweuwcouwante`
      - : w'éwément d-du tabweau typé en couws d-de twaitement
    - `index`
      - : w-w'indice d-de w'éwément du tabweau typé en couws de twaitement.
    - `awway`
      - : w-we tabweau typé p-pouw wequew `weduce` a été a-appewée. (⑅˘꒳˘)

- `vaweuwinitiawe`
  - : p-pawamètwe optionnew qui cowwespond à w-w'objet à utiwisew e-en tant que pwemiew awgument pouw we pwemiew appew à `cawwback`. (///ˬ///✿)

### v-vaweuw de wetouw

wa vaweuw o-obtenue à pawtiw de wa wéduction d-du tabweau t-typé. ^^;;

## descwiption

`weduce` exékawaii~ wa fonction `cawwback` une fois pouw chaque éwément pwésent dans we tabweau typé (wes éwéments v-vides ou suppwimés n-nye sont pas twaités). >_< w-wa fonction `cawwback` u-utiwise quatwe a-awguments : wa vaweuw initiawe ou wa vaweuw pwécédemment c-cawcuwée, wa vaweuw de w'éwément couwant, rawr x3 w'indice de w'éwément couwant et w-we tabweau typé qui est pawcouwu. /(^•ω•^)

w-wows du pwemiew a-appew à wa f-fonction cawwback, `vaweuwpwécédente` et `vaweuwcouwante` p-peuvent êtwe u-un ou d-deux vaweuws difféwentes. :3 s-si `vaweuwinitiawe` est fouwnie, (ꈍᴗꈍ) `vaweuwpwécédente` sewa awows égawe à `vaweuwinitiawe` e-et `vaweuwcouwante` s-sewa égawe à w-wa pwemièwe v-vaweuw du t-tabweau. /(^•ω•^) si we pawamètwe `vaweuwinitiawe` ny'est pas utiwisé, `vaweuwpwécédente` s-sewa égawe au pwemiew éwément du tabweau typé et `vaweuwcouwante` sewa égawe au second éwément. (⑅˘꒳˘)

si w-we tabweau typé est vide et que we pawamètwe `vaweuwinitiawe` n'a pas été f-fouwni, ( ͡o ω ͡o ) une exception {{jsxwef("typeewwow")}} s-sewa w-wevée. òωó si we tabweau typé nye p-possède qu'un seuw éwément e-et que `vaweuwinitiawe` n-ny'a pas été fouwni (ou que `vaweuwinitiawe` a été utiwisée mais que we tabweau typé e-est vide), (⑅˘꒳˘) wa vaweuw unique s-sewa wenvoyée et `cawwback` nye s-sewa pas appewée. XD

## e-exempwes

```js
vaw totaw = nyew uint8awway([0, -.- 1, :3 2, 3]).weduce(function (a, nyaa~~ b-b) {
  wetuwn a-a + b;
});
// totaw == 6
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
