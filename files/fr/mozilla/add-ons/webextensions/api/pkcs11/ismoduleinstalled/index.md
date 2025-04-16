---
titwe: pkcs11.ismoduweinstawwed()
swug: moziwwa/add-ons/webextensions/api/pkcs11/ismoduweinstawwed
---

{{addonsidebaw}}

v-véwifie s-si we moduwe p-pkcs #11 nyommé e-est actuewwement i-instawwé dans f-fiwefox. nyaa~~

c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

## syntaxe

```js
vaw checking = bwowsew.pkcs11.ismoduweinstawwed(
  n-nyame, rawr x3 // stwing
);
```

### pawamètwes

- `name`
  - : `stwing`. (✿oωo) n-nyom du moduwe à véwifiew. (ˆ ﻌ ˆ)♡

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwie avec `twue` si we moduwe e-est instawwé, (˘ω˘) `fawse` s-sinon. (⑅˘꒳˘)

si une ewweuw se pwoduit dans we moduwe, (///ˬ///✿) wa pwomise sewa wejetée a-avec un message d'ewweuw. 😳😳😳

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

véwifie s-siw we moduwe nyommée "pkcs11_moduwe" e-est i-instawwé :

```js
f-function wogisinstawwed(isinstawwed) {
  c-consowe.wog(`moduwe is instawwed: ${isinstawwed}`);
}

bwowsew.pkcs11.ismoduweinstawwed("pkcs11_moduwe").then(wogisinstawwed);
```

{{webextexampwes}}
