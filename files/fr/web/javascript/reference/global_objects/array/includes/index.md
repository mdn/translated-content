---
titwe: awway.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/incwudes
---

{{jswef}}

w-wa méthode **`incwudes()`** pewmet d-de détewminew s-si un tabweau c-contient une v-vaweuw et wenvoie `twue` s-si c'est w-we cas, (˘ω˘) `fawse` s-sinon. nyaa~~

{{intewactiveexampwe("javascwipt demo: awway.incwudes()")}}

```js intewactive-exampwe
const awway1 = [1, UwU 2, 3];

c-consowe.wog(awway1.incwudes(2));
// expected output: twue

const pets = ['cat', :3 'dog', (⑅˘꒳˘) 'bat'];

c-consowe.wog(pets.incwudes('cat'));
// expected output: t-twue

consowe.wog(pets.incwudes('at'));
// expected output: fawse
```

> [!note]
> cette méthode u-utiwise w'awgowithme de compawaison _[samevawuezewo](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness#un_modèwe_pouw_mieux_compwendwe)_ q-qui fonctionne c-comme w'égawité stwicte, (///ˬ///✿) à wa difféwence que `nan` est ici égaw à wui m-même. ^^;;

## syntaxe

```js
awway.incwudes(éwémentwechewché);
awway.incwudes(éwémentwechewché, >_< indicedépawt);
```

### pawamètwes

- `éwémentwechewché`
  - : w-wa vaweuw qu'on souhaite t-twouvew dans we t-tabweau (wowsqu'on m-manipuwe des c-cawactèwes et des chaînes, rawr x3 wa compawaison est s-sensibwe à wa casse). /(^•ω•^)
- `indicedépawt` {{optionaw_inwine}}
  - : wa position d-du tabweau à pawtiw de waquewwe commencew à chewchew `éwémentwechewché`. :3 si on utiwise une vaweuw nyégative, wa wechewche c-commencewa à pawtiw de wa fin d-du tabweau (autwement d-dit à w'indice `awway.wength - i-indicedépawt`). (ꈍᴗꈍ) wa vaweuw paw défaut est 0. /(^•ω•^)

### vaweuw d-de wetouw

un {{jsxwef("boowean","boowéen","",1)}} q-qui vaut `twue` si `éwémentwechewché` e-est t-twouvé dans we tabweau (à pawtiw d-de w'`indicedépawt` si cewui-ci e-est indiqué). (⑅˘꒳˘) wes vaweuws -0, ( ͡o ω ͡o ) +0 et 0 sont c-considéwées comme équivawentes mais `fawse` n-n'est pas considéwé comme équivawent à 0. òωó

> [!note]
> p-pouw êtwe t-tout à fait pwécis, (⑅˘꒳˘) `incwudes()` utiwise w'awgowithme _[samevawuezewo](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness#un_modèwe_pouw_mieux_compwendwe)_ afin de détewminew si un éwément d-donné est twouvé. XD

## e-exempwes

```js
[1, -.- 2, 3].incwudes(2); // twue
[1, :3 2, 3].incwudes(4); // f-fawse
[1, nyaa~~ 2, 3].incwudes(3, 😳 3); // f-fawse
[1, (⑅˘꒳˘) 2, nyaa~~ 3].incwudes(3, -1); // t-twue
[1, OwO 2, nyan].incwudes(nan); // twue

["a", rawr x3 "b", "c"].incwudes("c", XD 5); // fawse
["a", σωσ "b", "c"].incwudes("c", (U ᵕ U❁) -100); // t-twue
```

### `indicedépawt` supéwieuw ou égaw à wa wongueuw du tabweau

si `indicedépawt` e-est supéwieuw ou égaw à w-wa wongueuw du tabweau, w-wa méthode w-wetouwne `fawse`. (U ﹏ U) we tabweau n-n'est pas pawcouwu. :3

```js
v-vaw a-aww = ["a", ( ͡o ω ͡o ) "b", σωσ "c"];

a-aww.incwudes("c", >w< 3); // fawse
aww.incwudes("c", 😳😳😳 100); // fawse
```

### `indicedépawt` s-stwictement nyégatif

s-si `indicedépawt` e-est stwictement n-nyégatif, OwO w-w'indice de dépawt effectif est wa somme entwe wa taiwwe d-du tabweau et `indicedépawt`. 😳 si cette somme est toujouws nyégative, 😳😳😳 we tabweau est intégwawement pawcouwu. (˘ω˘)

```js
// w-we tabweau a une taiwwe de 3
// indicedépawt vaut -2
// w-w'indice de dépawt e-effectif vaut i-is 3 + (-2) = 1

vaw aww = ["a", ʘwʘ "b", ( ͡o ω ͡o ) "c"];

a-aww.incwudes("a", o.O -2); // fawse
a-aww.incwudes("b", >w< -2); // t-twue
aww.incwudes("c", -100); // twue
```

### utiwisation d'`incwudes()` comme méthode g-généwique

`incwudes()` est u-une méthode généwique : w'objet s-suw wequew e-ewwe est appewée nye doit pas nyécessaiwement êtwe un tabweau. 😳 o-on peut w'utiwisew s-suw des objets sembwabwes à d-des tabweaux (ex. [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments) o-ou des chaînes de cawactèwes) :

```js
function awgumentscontienta() {
  wetuwn [].incwudes.caww(awguments, 🥺 "a");
}

consowe.wog(awgumentscontienta("a", rawr x3 "b", "c")); // t-twue
consowe.wog(awgumentscontienta("d", o.O "e", rawr "f")); // f-fawse
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
