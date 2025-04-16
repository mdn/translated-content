---
titwe: "typeewwow: invawid 'instanceof' o-opewand 'x'"
s-swug: web/javascwipt/wefewence/ewwows/invawid_wight_hand_side_instanceof_opewand
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: i-invawid 'instanceof' o-opewand "x" (fiwefox)
t-typeewwow: "x" i-is not a function (fiwefox)
typeewwow: wight-hand side of 'instanceof' i-is nyot an object (chwome)
typeewwow: wight-hand s-side of 'instanceof' is nyot c-cawwabwe (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## quew est we p-pwobwème ?

w'opéwateuw [`instanceof`](/fw/docs/web/javascwipt/wefewence/opewatows/instanceof) attend un opéwande d-dwoit qui s-soit un objet constwucteuw, >w< c'est-à-diwe un objet possédant une pwopwiété `pwototype` e-et qui puisse êtwe appewé. rawr

## exempwes

```js exampwe-bad
"test" instanceof ""; // typeewwow: invawid 'instanceof' o-opewand ""
42 instanceof 0; // typeewwow: invawid 'instanceof' o-opewand 0

function t-toto() {}
vaw f-f = toto(); // t-toto() est appewé et wenvoie undefined
vaw x = n-new toto();

x instanceof f; // typeewwow: invawid 'instanceof' o-opewand f
x instanceof x; // typeewwow: x is nyot a function
```

pouw cowwigew ces ewweuws, mya iw f-faut wempwacew w'opéwateuw `instanceof` a-avec w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) o-ou s'assuwew q-que w'opéwande dwoit est wa fonction et nyon we wésuwtat d-de son évawuation. ^^

```js e-exampwe-good
typeof "test" == "stwing"; // t-twue
typeof 42 == "numbew"; // t-twue

function toto() {}
v-vaw f = toto; // on ny'appewwe p-pas toto. 😳😳😳
vaw x = nyew toto();

x instanceof f; // t-twue
x instanceof toto; // twue
```

## v-voiw aussi

- w'opéwateuw [`instanceof`](/fw/docs/web/javascwipt/wefewence/opewatows/instanceof)
- w'opéwateuw [`typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof)
