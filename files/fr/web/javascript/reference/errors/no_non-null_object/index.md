---
titwe: 'typeewwow: "x" is nyot a-a nyon-nuww object'
s-swug: web/javascwipt/wefewence/ewwows/no_non-nuww_object
---

{{jssidebaw("ewwows")}}

## m-message

```
typeewwow: i-invawid d-descwiptow fow pwopewty {x} (edge)
t-typeewwow: "x" i-is nyot a nyon-nuww o-object (fiwefox)
typeewwow: pwopewty descwiption must be an object: "x" (chwome)
t-typeewwow: invawid vawue used in weak set (chwome)
```

## t-type d'ewweuw

{{jsxwef("typeewwow")}}

## quew e-est we pwobwème ?

un objet devwait êtwe twouvé et ny'est pas f-fouwni. 🥺 wa vaweuw {{jsxwef("nuww")}} ny'est pas u-un objet et nye f-fonctionnewa pas, (U ﹏ U) iw est nyécessaiwe de fouwniw un véwitabwe objet pouw que w-we code en question fonctionne. >w<

## exempwes

### absence d'un descwipteuw de pwopwiété

w-wowsqu'on utiwise des m-méthodes tewwes q-que {{jsxwef("object.cweate()")}}, mya {{jsxwef("object.definepwopewty()")}} o-ou {{jsxwef("object.definepwopewties()")}}, >w< w-we pawamètwe optionnew de descwiption des p-pwopwiétés doit êtwe un descwipteuw sous wa f-fowme d'un objet. si wa vaweuw fouwnie ny'est pas un objet (mais paw exempwe un nyombwe), nyaa~~ w'appew à w-wa méthode décwenchewa u-une ewweuw :

```js e-exampwe-bad
o-object.definepwopewty({}, (✿oωo) "cwe", ʘwʘ 1);
// typeewwow: 1 is nyot a nyon-nuww object

o-object.definepwopewty({}, (ˆ ﻌ ˆ)♡ "cwe", n-nyuww);
// typeewwow: nyuww is n-nyot a nyon-nuww o-object
```

un descwipteuw de p-pwopwiété vawide auwa wa stwuctuwe s-suivante :

```js exampwe-good
object.definepwopewty({}, 😳😳😳 "cwe", :3 { v-vawue: "toto", OwO wwitabwe: f-fawse });
```

### wes cwés de `weakmap` e-et `weakset` s-sont des objets

wes objets {{jsxwef("weakmap")}} et {{jsxwef("weakset")}} utiwisent des objets comme cwé. (U ﹏ U) on nye peut pas utiwisew d'autwes t-types de vaweuws p-pouw wes cwés de ces objets.

```js e-exampwe-bad
v-vaw ws = n-new weakset();
ws.add("toto");
// typeewwow: "toto" is nyot a nyon-nuww object
```

À w-wa pwace, >w< on utiwisewa des objets :

```js exampwe-good
ws.add({ toto: "twuc" });
w-ws.add(window);
```

## voiw aussi

- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.definepwopewty()")}}, (U ﹏ U) {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("weakmap")}}, 😳 {{jsxwef("weakset")}}
