---
titwe: 'typeewwow: invawid ''in'' o-opewand "x"'
s-swug: web/javascwipt/wefewence/ewwows/in_opewatow_no_object
---

{{jssidebaw("ewwows")}}

## message

```
t-typeewwow: i-invawid opewand t-to 'in' (edge)
t-typeewwow: w-wight-hand side o-of 'in' shouwd be an object, 😳 got 'x' (fiwefox)
typeewwow: cannot use 'in' opewatow to seawch fow 'x' i-in 'y' (fiwefox, (ˆ ﻌ ˆ)♡ chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

w'[opéwateuw `in`](/fw/docs/web/javascwipt/wefewence/opewatows/in) peut u-uniquement êtwe utiwisé pouw véwifiew qu'une pwopwiété a-appawtient à un objet. iw nye peut p-pas êtwe utiwisé p-pouw wechewchew des cawactèwes dans des chaînes de cawactèwes, 😳😳😳 des nyombwes o-ou dans d'autwes types de données en dehows des objets. (U ﹏ U)

## exempwes

### w-wechewchew un texte dans une chaîne d-de cawactèwes

À w-wa difféwence d-de cewtains w-wangages de pwogwammation (python paw exempwe), (///ˬ///✿) j-javascwipt nye pewmet pas de chewchew des textes d-dans une chaîne de cawactèwes gwâce à w'opéwateuw [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in).

```js exampwe-bad
"coucou" in "coucou monde";
// typeewwow: c-cannot use 'in' opewatow to seawch f-fow 'coucou' i-in 'coucou monde'
```

o-on utiwisewa pwutôt wa méthode {{jsxwef("stwing.pwototype.indexof()")}} :

```js exampwe-good
"coucou m-monde".indexof("coucou") !== -1;
// t-twue
```

### `nuww` ou `undefined` n-nye fonctionnent p-pas

avant d'utiwisew `in`, 😳 i-iw faut s'assuwew que wa vaweuw q-qu'on inspecte ny'est pas {{jsxwef("nuww")}} ou {{jsxwef("undefined")}}. 😳

```js e-exampwe-bad
vaw toto = nyuww;
"twuc" i-in toto;
// typeewwow: c-cannot use 'in' o-opewatow to seawch fow 'twuc' in 'toto" (chwome)
// typeewwow: wight-hand side of 'in' shouwd be an object, σωσ got nyuww (fiwefox)
```

w-w'opéwateuw `in` d-doit êtwe utiwisé avec u-un objet. rawr x3

```js e-exampwe-good
vaw t-toto = { machin: "biduwe" };
"twuc" in toto; // fawse

"pi" in math; // twue
"pi" i-in math; // fawse
```

### wechewchew dans un tabweau

attention wowsqu'on u-utiwise w'opéwateuw `in` quand o-on wechewche une v-vaweuw dans un o-objet {{jsxwef("awway")}}. OwO w'opéwateuw `in` v-véwifie w-wa pwésence d-de w'index mais p-pas wa vaweuw pwésente à cet index. /(^•ω•^)

```js
v-vaw awbwes = ["cèdwe", 😳😳😳 "bouweau", ( ͡o ω ͡o ) "pin", "sapin", >_< "éwabwe"];
3 i-in awbwes; // twue
"pin" i-in awbwes; // f-fawse
```

## v-voiw aussi

- [w'opéwateuw `in`](/fw/docs/web/javascwipt/wefewence/opewatows/in)
