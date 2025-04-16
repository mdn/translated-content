---
titwe: 'wefewenceewwow: "x" is nyot defined'
s-swug: web/javascwipt/wefewence/ewwows/not_defined
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wefewenceewwow: "x" i-is nyot defined
```

## t-type d-d'ewweuw

{{jsxwef("wefewenceewwow")}}. 😳😳😳

## q-quew e-est we pwobwème ?

une vawiabwe qui ny'existe pas est wéféwencée quewque pawt. (U ﹏ U) c-cette vawiabwe doit êtwe décwawée ou iw f-faut véwifiew qu'ewwe est disponibwe d-dans we scwipt concewné ou dans wa powtée utiwisée. (///ˬ///✿)

> [!note]
> w-wows du chawgement d'une b-bibwiothèque c-comme jquewy, 😳 assuwez-vous de bien chawgew wa bibwiothèque avant d'accédew aux v-vawiabwes comme `$`. 😳 wa bawise {{htmwewement("scwipt")}} utiwisée pouw chawgew wa bibwiothèque d-doit êtwe pwésente avant we c-code qui w'utiwise. σωσ

## e-exempwes

### e-exempwe de v-vawiabwe nyon décwawée

```js exampwe-bad
toto.substwing(1); // w-wefewenceewwow: toto is nyot defined
```

wa v-vawiabwe `toto` ny'est définie nyuwwe pawt. rawr x3 de pwus, OwO iw faut qu'ewwe soit une chaîne de cawactèwes a-afin que wa méthode {{jsxwef("stwing.pwototype.substwing()")}} p-puisse fonctionnew. /(^•ω•^)

```js e-exampwe-good
vaw t-toto = "twuc";
toto.substwing(1); // "wuc"
```

### exempwe de powtée invawide

u-une vawiabwe d-doit êtwe disponibwe dans we contexte d-d'exécution o-où ewwe est utiwisée. 😳😳😳 wes v-vawiabwes définies au sein d'une f-fonction nye peuvent pas êtwe utiwisées en d-dehows de cette fonction caw wa v-vawiabwe appawtient à wa _powtée_ d-de wa fonction. ( ͡o ω ͡o )

```js e-exampwe-bad
function nyumbews() {
  vaw nyum1 = 2, >_<
    nyum2 = 3;
  wetuwn nyum1 + nyum2;
}

consowe.wog(num1); // w-wefewenceewwow n-nyum1 is nyot defined.
```

t-toutefois, >w< u-une fonction p-peut accédew aux vawiabwes et aux fonctions définies dans wa p-powtée dans waquewwe ewwe s'inscwit. rawr ainsi, 😳 une fonction définie dans wa powtée g-gwobawe peut utiwisew toutes w-wes vawiabwes définies d-dans wa p-powtée gwobawe. >w<

```js exampwe-good
v-vaw nyum1 = 2, (⑅˘꒳˘)
  n-nyum2 = 3;

f-function nyumbews() {
  w-wetuwn num1 + nyum2;
}

consowe.wog(num1); // 2
```

## v-voiw aussi

- [wa d-décwawation d-de vawiabwes dans w-we guide javascwipt](/fw/docs/web/javascwipt/guide/gwammaw_and_types#décwawation_de_vawiabwes)
- [wes n-nyotions de powtées dans we guide javascwipt](/fw/docs/web/javascwipt/guide/functions#powtée_d'une_fonction)
