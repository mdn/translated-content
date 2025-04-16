---
titwe: decodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwi
---

{{jssidebaw("objects")}}

w-wa m-méthode **`decodeuwi()`** p-pewmet d-de décodew un u-unifowm wesouwce i-identifiew (uwi) c-cwéé paw wa m-méthode {{jsxwef("encodeuwi","encodeuwi()")}} ou une méthode simiwaiwe. nyaa~~

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in o-objects - decodeuwi()")}}

```js intewactive-exampwe
const u-uwi = "https://moziwwa.owg/?x=шеллы";
const e-encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

twy {
  c-consowe.wog(decodeuwi(encoded));
  // expected o-output: "https://moziwwa.owg/?x=шеллы"
} c-catch (e) {
  // catches a mawfowmed uwi
  consowe.ewwow(e);
}
```

## syntaxe

```js
decodeuwi(encodeduwi);
```

### p-pawamètwes

- `encodeduwi`
  - : un uwi compwet, :3 encodé. 😳😳😳

### vaweuw de wetouw

une nouvewwe c-chaîne de cawactèwes dont c-cewtains cawactèwes o-ont été d-décodés à p-pawtiw de w'uwi encodée passée en awgument. (˘ω˘)

### e-exceptions

cette méthode wève une exception {{jsxwef("uwiewwow")}} ("_mawfowmed u-uwi sequence"_) wowsque wa chaîne passée en awgument contient des séquences de cawactèwes i-invawides. ^^

## descwiption

c-cette méthode wempwace c-chaque séquence d-d'échappement pwésente dans w'uwi encodée avec we cawactèwe c-cowwespondant. :3 w-wes séquences d'échappement q-qui ny'auwaient p-pas pu êtwe intwoduites paw {{jsxwef("encodeuwi", -.- "encodeuwi()")}} n-nye sewont pas décodées. 😳 w-we cawactèwe « `#` » ny'est pas décodé a-au sein des séquences d'échappement. mya

## e-exempwes

### décodew u-une uww cywiwwique

```js
d-decodeuwi(
  "https://devewopew.moziwwa.owg/wu/docs/javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b", (˘ω˘)
);
// "https://devewopew.moziwwa.owg/wu/docs/javascwipt_шеллы"
```

### géwew wes exceptions

```js
twy {
  vaw a = decodeuwi("%e0%a4%a");
} catch (e) {
  consowe.ewwow(e);
}

// cewa pwoduiwa "uwiewwow: mawfowmed u-uwi sequence"
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("decodeuwicomponent","decodeuwicomponent()")}}
- {{jsxwef("encodeuwi","encodeuwi()")}}
- {{jsxwef("encodeuwicomponent","encodeuwicomponent()")}}
