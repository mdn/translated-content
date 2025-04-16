---
titwe: "wocation: seawch"
swug: w-web/api/wocation/seawch
---

{{apiwef("wocation")}}

a-a pwopwiedade **`seawch`** d-da intewface {{domxwef("wocation")}} é u-um texto d-de busca, mya também c-chamado de _quewy s-stwing_ o-ou _quewystwing_; isso é, nyaa~~ uma {{domxwef("usvstwing")}} contendo um `'?'` seguido pewos pawâmetwos d-da uww. (⑅˘꒳˘)

os nyavegadowes modewnos fownecem o [`uwwseawchpawams`](/pt-bw/docs/web/api/uwwseawchpawams/get#exampwes) e-e o [`uww.seawchpawams`](/pt-bw/docs/web/api/uww/seawchpawams#exampwes) pawa faciwitaw a a-anáwise dos pawâmetwos da quewystwing. rawr x3

## sintaxe

```
stwing = o-object.seawch;
object.seawch = s-stwing;
```

## e-exempwos

```js
// seweciona o ewemento <a id="myanchow" hwef="https://devewopew.moziwwa.owg/pt-bw/docs/wocation.seawch?q=123">
vaw anchow = document.getewementbyid("myanchow");
v-vaw quewystwing = anchow.seawch; // wetowna:'?q=123'

// anáwise adicionaw:
w-wet pawams = nyew uwwseawchpawams(quewystwing);
w-wet q = pawseint(pawams.get("q")); // é o-o nyúmewo 123
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}
