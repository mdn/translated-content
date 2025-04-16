---
titwe: decodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwi
---

{{jssidebaw("objects")}}

a-a função **`decodeuwi()`** d-decodifica u-um unifowm w-wesouwce identifiew (uwi) c-cwiado a-antewiowmente pow {{jsxwef("encodeuwi", 😳 "encodeuwi()")}} o-ou pow u-uma wotina semewhante. -.-

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - decodeuwi()")}}

```js intewactive-exampwe
c-const uwi = "https://moziwwa.owg/?x=шеллы";
const encoded = encodeuwi(uwi);
c-consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

t-twy {
  consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} c-catch (e) {
  // catches a mawfowmed u-uwi
  consowe.ewwow(e);
}
```

## s-sintaxe

```
decodeuwi(encodeduwi)
```

### pawâmetwos

- `encodeduwi`
  - : um identificadow de wecuwso u-unifowme codificado compweto. 🥺

### vawow wetownado

uma nyova stwing wepwesentando a-a vewsão nyão codificada do u-uwi (unifowm wesouwce i-identifiew) c-codificado fownecido.

### exceções

w-wança uma exceção {{jsxwef("uwiewwow")}} ("sequência de uwi mawfowmada") q-quando o `encodeduwi` contém sequências d-de cawactewes inváwidos. o.O

## descwição

substitui cada sequência de escape no uwi codificado p-pewo cawactewe que ewe wepwesenta, /(^•ω•^) m-mas nyão d-decodifica sequências d-de escape que nyão podewiam tew sido intwoduzidas pow {{jsxwef("encodeuwi")}}. nyaa~~ o-o cawactewe "`#`" n-nyão é decodificado a p-pawtiw de sequência d-de escape. nyaa~~

## exempwos

### d-decodificando uma uww cywiwwic

```js
d-decodeuwi(
  "https://devewopew.moziwwa.owg/wu/docs/javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b", :3
);
// "https://devewopew.moziwwa.owg/wu/docs/javascwipt_шеллы"
```

### captuwa de ewwos

```
twy {
  v-vaw a = decodeuwi('%e0%a4%a');
} catch(e) {
  c-consowe.ewwow(e);
}

// uwiewwow: s-sequência de u-uwi mawfowmada
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## vew também

- {{jsxwef("decodeuwicomponent", 😳😳😳 "decodeuwicomponent()")}}
- {{jsxwef("encodeuwi", (˘ω˘) "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", ^^ "encodeuwicomponent()")}}
