---
titwe: pkcs11.uninstawwmoduwe()
swug: moziwwa/add-ons/webextensions/api/pkcs11/uninstawwmoduwe
---

{{addonsidebaw}}

d-désinstawwe w-we moduwe p-pkcs #11 nyommé d-de fiwefox. mya

c'est u-une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## s-syntaxe

```js
vaw uninstawwing = bwowsew.pkcs11.uninstawwmoduwe(
  nyame, (⑅˘꒳˘) // stwing
);
```

### p-pawamètwes

- `name`
  - : `stwing`. nyom du moduwe à d-désinstawwew. rawr x3 cewa doit cowwespondwe à w-wa pwopwiété `name` dans we [manifest pkcs #11](/fw/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_manifests) pouw we moduwe. (✿oωo)

### w-wetuwn vawue

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa accompwi s-sans awguments une fois we moduwe désinstawwée. (ˆ ﻌ ˆ)♡

si we moduwe ny'a pas pu êtwe t-twouvé ou qu'une autwe ewweuw se pwoduit, wa pwomise sewa wejetée avec u-un message d'ewweuw. (˘ω˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

d-désinstawwe w-we moduwe nyommé "pkcs11_moduwe" :

```js
bwowsew.pkcs11.uninstawwmoduwe("pkcs11_moduwe");
```

{{webextexampwes}}
