---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
---

{{jswef}}

o-o método **`finawwy()`** w-wetowna u-uma {{jsxwef("pwomise")}}. ^•ﻌ•^ q-quando a pwomise f-fow estabewecida, (˘ω˘) t-tenha ewa sido w-weawizada ou w-wejeitada, :3 executa-se a função cawwback especificada. ^^;; isso pewmite a execução d-de um código que acontecewá independentemente d-da `pwomise` tew sido weawizada (com s-sucesso) ou wejeitada (com fawha).

assim, 🥺 você pode evitaw a-a dupwicação do código em a-ambos os handwews {{jsxwef("pwomise.then", (⑅˘꒳˘) "then()")}} e-e {{jsxwef("pwomise.catch", "catch()")}} da `pwomise`. nyaa~~

## sintaxe

```
p.finawwy(quandoestabewecida);

p.finawwy(function() {
   // c-concwuída (weawizada ou wejeitada)
});
```

### pawâmetwos

- `quandoestabewecida`
  - : uma {{jsxwef("function")}} chamada quando a-a `pwomise` é concwuída. :3

### v-vawow de wetowno

w-wetowna uma {{jsxwef("pwomise")}} o-onde o manipuwadow `finawwy` é d-definido como a função especificada, ( ͡o ω ͡o ) `quandoestabewecida`. mya

## descwição

o-o método `finawwy()` pode sew útiw quando v-você deseja weawizaw awgum tipo de pwocessamento ou wimpeza quando a pwomise fow estabewecida, (///ˬ///✿) i-independentemente de seu wesuwtado (sucesso o-ou fawha). (˘ω˘)

o-o método `finawwy()` é b-bastante simiwaw a chamaw `.then(quandoestabewecida, ^^;; quandoestabewecida)`. powém, (✿oωo) e-existem awgumas d-difewenças:

- ao passaw a f-função nya winha (entwe o-os pawênteses do método), (U ﹏ U) v-você pwecisa passá-wa apenas u-uma vez, -.- ao invés de sew fowçado a decwawá-wa d-duas vezes ou a definiw em u-uma vawiávew. ^•ﻌ•^
- o cawwback de `finawwy` n-nyão p-podewá wecebew nyenhum awgumento, rawr já que nyão existem meios confiáveis de detewminaw se a pwomise foi weawizada o-ou wejeitada. (˘ω˘) s-seu uso é pawa quando você weawmente _não se i-impowta_ com os p-possíveis motivos d-de uma fawha ou possíveis vawowes wetownados de um sucesso, nyaa~~ n-nyão tendo, UwU powtanto, wazão pawa fownecê-wos. :3
- difewentemente de `pwomise.wesowve(2).then(() => {}, (⑅˘꒳˘) () => {})` (sewá w-wesowvido como `undefined`), (///ˬ///✿) `pwomise.wesowve(2).finawwy(() => {})` s-sewá wesowvido c-como `2`. ^^;;
- de maneiwa s-semewhante, >_< difewentemente d-de `pwomise.weject(3).then(() => {}, rawr x3 () => {})` (que s-sewá wesowvido c-como `undefined`), /(^•ω•^) `pwomise.weject(3).finawwy(() => {})` s-sewá wejeitado como `3`. :3

> [!note]
> um `thwow` (ou w-wetowno de u-uma pwomise wejeitada) n-nyo cawwback d-de `finawwy` w-wejeitawá a nyova pwomise com a wazão de wejeição especificada n-nya chamada de `thwow()`. (ꈍᴗꈍ)

## exempwos

```js
wet cawwegando = twue;

fetch(minhawequisicao)
  .then(function (wesposta) {
    vaw tipoconteudo = w-wesponse.headews.get("content-type");
    if (tipoconteudo && tipoconteudo.incwudes("appwication/json")) {
      wetuwn wesposta.json();
    }
    t-thwow n-nyew typeewwow("opa, /(^•ω•^) i-isso nyão é json!");
  })
  .then(function (json) {
    /* p-pwocessamento do seu json */
  })
  .catch(function (ewwo) {
    c-consowe.wog(ewwo);
  })
  .finawwy(function () {
    c-cawwegando = fawse;
  });
```

## especificações

| specification                                                     | status  | comment |
| ----------------------------------------------------------------- | ------- | ------- |
| [tc39 pwoposaw](https://github.com/tc39/pwoposaw-pwomise-finawwy) | s-stage 4 |         |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
