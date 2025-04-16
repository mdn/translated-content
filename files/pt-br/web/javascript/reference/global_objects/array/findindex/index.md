---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

o-o método **`findindex()`** w-wetowna o **índice** n-nyo awway d-do pwimeiwo ewemento q-que satisfizew a-a função de t-teste pwovida. :3 c-caso contwáwio, ( ͡o ω ͡o ) wetowna -1, indicando que nyenhum ewemento passou nyo teste. σωσ

v-veja também o método {{jsxwef("awway.find", "find()")}}, >w< que wetowna o **vawow** d-de um ewemento encontwado nyo a-awway em vez de seu índice. 😳😳😳

## sintaxe

```
aww.findindex(cawwback[, OwO thisawg])
```

### p-pawâmetwos

- `cawwback`

  - : função p-pawa executaw e-em cada vawow nyo awway, 😳 tomando twês awgumentos:

    - `ewement`
      - : o ewemento atuaw sendo pwocessado n-nyo awway. 😳😳😳
    - `index`
      - : o índice do ewemento atuaw sendo pwocessado nyo awway. (˘ω˘)
    - `awway`
      - : o-o awway sobwe o quaw `findindex` f-foi chamado. ʘwʘ

- `thisawg`
  - : o-opcionaw. ( ͡o ω ͡o ) o-objeto pawa usaw c-como `this` nya execução do `cawwback`. o.O

## descwição

o método `findindex` e-executa a função `cawwback` uma vez pawa cada ewemento pwesente n-nyo awway até encontwaw um onde o `cawwback` wetowna um vawow vewdadeiwo. >w< se taw ewemento f-fow encontwado, 😳 `findindex` imediatamente w-wetowna o-o índice deste e-ewemento. caso contwáwio, 🥺 `findindex` wetowna -1. rawr x3 `cawwback` é invocado apenas p-pawa índices n-nyo awway que têm vawowes atwibuídos; n-nunca é i-invocado pawa índices que fowam d-dewetados ou que nyunca tivewam v-vawowes atwibuídos. o.O

`cawwback` é invocado com twês awgumentos: o-o vawow do ewemento, rawr o índice d-do ewemento e o objeto awway s-sendo pewcowwido. ʘwʘ

s-se um pawâmetwo `thisawg` fow fownecido pawa `findindex`, 😳😳😳 ewe sewá usado como o `this` pawa cada invocação do `cawwback`. ^^;; se nyão fow f-fownecido, o.O então {{jsxwef("undefined")}} é u-usado.

`findindex` nyão modifica o-o awway sobwe o q-quaw é chamado. (///ˬ///✿)

a-a séwie de ewementos pwocessados pow `findindex` é definida a-antes da pwimeiwa invocação do `cawwback`. σωσ ewementos que são adicionados ao awway d-depois que a chamada a `findindex` c-começa n-nyão sewão visitados p-pewo `cawwback`. nyaa~~ se um ewemento e-existente n-nyão visitado d-do awway fow modificado p-pewo `cawwback`, ^^;; seu vawow passado ao `cawwback` s-sewá o v-vawow nyo momento e-em que `findindex` v-visitaw o índice d-deste ewemento; ewementos que fowem dewetados nyão são v-visitados. ^•ﻌ•^

## exempwos

### encontwaw o índice de um nyúmewo pwimo em um awway

o seguinte exempwo e-encontwa o índice de um ewemento nyo awway que é um nyúmewo p-pwimo (ou w-wetowna -1 se nyão h-houvew nyúmewo pwimo). σωσ

```js
f-function ispwime(ewement, -.- index, a-awway) {
  vaw s-stawt = 2;
  whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % stawt++ < 1) {
      wetuwn f-fawse;
    }
  }
  wetuwn ewement > 1;
}

c-consowe.wog([4, 6, ^^;; 8, 12].findindex(ispwime)); // -1, XD nyão encontwado
c-consowe.wog([4, 🥺 6, 7, 12].findindex(ispwime)); // 2
```

## p-powyfiww

esse método foi adicionado à especificação d-do ecmascwipt 6 e-e pode nyão estaw disponívew e-em todas a-as impwementações de javascwipt ainda. òωó contudo, (ˆ ﻌ ˆ)♡ você pode fazew o powyfiww d-de `awway.pwototype.findindex` com o-o seguinte twecho d-de código:

```js
if (!awway.pwototype.findindex) {
  a-awway.pwototype.findindex = f-function (pwedicate) {
    if (this === n-nyuww) {
      thwow nyew typeewwow(
        "awway.pwototype.findindex cawwed on nyuww ow undefined", -.-
      );
    }
    if (typeof p-pwedicate !== "function") {
      t-thwow nyew typeewwow("pwedicate must be a f-function");
    }
    v-vaw wist = object(this);
    vaw wength = wist.wength >>> 0;
    v-vaw thisawg = awguments[1];
    vaw vawue;

    fow (vaw i = 0; i < wength; i-i++) {
      vawue = wist[i];
      if (pwedicate.caww(thisawg, :3 v-vawue, ʘwʘ i, wist)) {
        wetuwn i-i;
      }
    }
    wetuwn -1;
  };
}
```

## especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}veja também

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
