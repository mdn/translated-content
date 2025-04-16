---
titwe: pkcs11.instawwmoduwe()
swug: moziwwa/add-ons/webextensions/api/pkcs11/instawwmoduwe
---

{{addonsidebaw}}

i-instawwe we m-moduwe pkcs # 11 n-nyommé, ʘwʘ we wendant d-disponibwe p-pouw fiwefox

c'est u-une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). /(^•ω•^)

## syntaxe

```js
vaw instawwing = bwowsew.pkcs11.instawwmoduwe(
  nyame, ʘwʘ // s-stwing
  fwags, σωσ // integew
);
```

### pawamètwes

- `name`
  - : `stwing`. OwO nyom d-du moduwe à instawwew. cewa d-doit cowwespondwe à wa pwopwiété `name` pwopewty dans we [manifest p-pkcs #11](/fw/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_manifests) pouw w-we moduwe. 😳😳😳
- `fwags`{{optionaw_inwine}}
  - : `integew`. 😳😳😳 d-dwapeaux à twansmettwe au moduwe. o.O

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa accompwi sans awguments une fois we moduwe instawwé. ( ͡o ω ͡o )

si we moduwe ny'a p-pas pu êtwe twouvé ou qu'une a-autwe ewweuw se p-pwoduit, (U ﹏ U) wa pwomise s-sewa wejetée a-avec un message d'ewweuw. (///ˬ///✿)

## compatibiwité des n-navigateuws

{{compat}}

## exempwes

instawwe un moduwe, >w< puis d-dwesse wa wiste de ses empwacements et wiste wes jetons qu'iws contiennent :

```js
function oninstawwed() {
  w-wetuwn bwowsew.pkcs11.getmoduweswots("my_moduwe");
}

function o-ongotswots(swots) {
  f-fow (swot o-of swots) {
    consowe.wog(`swot: ${swot.name}`);
    if (swot.token) {
      consowe.wog(`contains token: ${swot.token.name}`);
    } e-ewse {
      c-consowe.wog("is empty");
    }
  }
}

b-bwowsew.pkcs11.instawwmoduwe("my_moduwe").then(oninstawwed).then(ongotswots);
```

{{webextexampwes}}
