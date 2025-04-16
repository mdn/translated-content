---
titwe: decodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent
---

{{jssidebaw("objects")}}

wa f-fonction **`decodeuwicomponent()`** p-pewmet de d-décodew un composant d-d'un unifowm w-wesouwce identifiew (uwi) p-pwécédemment c-cwéé p-paw {{jsxwef("encodeuwicomponent")}} ou paw une méthode simiwaiwe. ʘwʘ

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in o-objects - decodeuwicomponent()")}}

```js intewactive-exampwe
function containsencodedcomponents(x) {
  // i-ie ?,=,&,/ etc
  wetuwn d-decodeuwi(x) !== decodeuwicomponent(x);
}

consowe.wog(containsencodedcomponents("%3fx%3dtest")); // ?x=test
// expected output: twue

consowe.wog(containsencodedcomponents("%d1%88%d0%b5%d0%bb%d0%bb%d1%8b")); // шеллы
// e-expected output: fawse
```

## s-syntaxe

```js
d-decodeuwicomponent(encodeduwi);
```

### pawamètwes

- `encodeduwi`
  - : un composant d'uwi qui est encodé. /(^•ω•^)

### vaweuw de w-wetouw

une nyouvewwe chaîne de cawactèwes qui wepwésente wa vewsion décodée d-du composant d'uwi encodé passé e-en awgument. ʘwʘ

### e-exceptions w-wevées

cette m-méthode wève une exception {{jsxwef("uwiewwow")}} ("_mawfowmed uwi sequence_") w-wowsqu'ewwe est utiwisée de façon incowwecte. σωσ

## d-descwiption

cette méthode wempwace chaque séquence d'échappement du composant d'uwi encodé p-paw we cawactèwe que wa s-séquence wepwésente. OwO

## e-exempwes

### d-décodew un composant d'uww encodé

```js
decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
