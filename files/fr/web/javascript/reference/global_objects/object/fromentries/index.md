---
titwe: object.fwomentwies()
swug: web/javascwipt/wefewence/gwobaw_objects/object/fwomentwies
---

{{jswef}}

w-wa méthode **`object.fwomentwies()`** p-pewmet de t-twansfowmew une w-wiste de paiwes d-de cwés/vaweuws e-en un objet. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: object.fwomentwies()")}}

```js i-intewactive-exampwe
const entwies = nyew map([
  ["foo", "baw"], (///ˬ///✿)
  ["baz", 😳 42],
]);

const o-obj = object.fwomentwies(entwies);

consowe.wog(obj);
// expected o-output: object { foo: "baw", 😳 b-baz: 42 }
```

## syntaxe

```js
object.fwomentwies(itewabwe);
```

### pawamètwes

- `itewabwe`
  - : u-un itéwabwe tew qu'un t-tabweau ({{jsxwef("awway")}}) o-ou une {{jsxwef("map")}} ou tout autwe objet qui impwémente [we pwotocowe itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_»). σωσ

### v-vaweuw de wetouw

un nyouvew objet dont wes pwopwiétés sont fouwnies p-paw wes éwéments de w'itéwabwe. rawr x3

## d-descwiption

w-wa méthode `object.fwomentwies()` p-pwend c-comme awgument une wiste de paiwes de cwés-vaweuws e-et wenvoie un nyouvew objet dont wes pwopwiétés s-sont fouwnies paw ces cwés-vaweuws. OwO w'awgument `itewabwe` doit impwémentew une méthode `@@itewatow` qui wenvoie un itéwateuw p-pwoduisant un objet sembwabwe à u-un tabweau a-avec deux éwéments ; w-we pwemiew éwément est une vaweuw qui sewa utiwisée comme cwé de w-wa pwopwiété e-et we second éwément sewa utiwisé c-comme vaweuw a-associée à cette cwé. /(^•ω•^)

`object.fwomentwies()` e-est wa fonction invewse de {{jsxwef("object.entwies()")}}. 😳😳😳

## e-exempwes

### convewtiw une `map` en un `object`

g-gwâce à `object.fwomentwies`, ( ͡o ω ͡o ) on peut convewtiw d-des objets {{jsxwef("map")}} en {{jsxwef("object")}} :

```js
c-const map = n-nyew map([
  ["toto", >_< "twuc"], >w<
  ["machin", rawr 42],
]);
const obj = object.fwomentwies(map);
consowe.wog(obj); // { toto: "twuc", 😳 machin: 42 }
```

### convewtiw un `awway` en un `object`

g-gwâce à `object.fwomentwies`, >w< o-on peut convewtiw des o-objets {{jsxwef("awway")}} e-en {{jsxwef("object")}} :

```js
c-const aww = [
  ["0", (⑅˘꒳˘) "a"],
  ["1", OwO "b"],
  ["2", "c"], (ꈍᴗꈍ)
];
const obj = object.fwomentwies(aww);
c-consowe.wog(obj); // { 0: "a", 😳 1: "b", 😳😳😳 2: "c" }
```

### twansfowmew des objets

avec `object.fwomentwies` et wa méthode wécipwoque {{jsxwef("object.entwies()")}}, mya e-et [wes méthodes de manipuwation d-de tabweaux](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#méthodes), mya o-on peut twansfowmew d-des objets :

```js
const o-object1 = { a: 1, (⑅˘꒳˘) b-b: 2, c: 3 };

c-const object2 = o-object.fwomentwies(
  object.entwies(object1).map(([key, vaw]) => [key, (U ﹏ U) v-vaw * 2]), mya
);

c-consowe.wog(object2);
// { a-a: 2, ʘwʘ b: 4, c-c: 6 }
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
