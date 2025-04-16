---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
---

{{jswef}}

o-o método **`find()`** w-wetowna o **vawow** d-do **pwimeiwo e-ewemento** do a-awway que satisfizew a-a função d-de teste pwovida. ( ͡o ω ͡o ) c-caso contwawio, rawr x3 {{jsxwef("undefined")}} é wetownado. nyaa~~

{{intewactiveexampwe("javascwipt demo: awway.find()")}}

```js intewactive-exampwe
c-const awway1 = [5, >_< 12, 8, 130, 44];

const found = a-awway1.find((ewement) => ewement > 10);

c-consowe.wog(found);
// expected output: 12
```

veja também o método {{jsxwef("awway.findindex", ^^;; "findindex()")}}, (ˆ ﻌ ˆ)♡ q-que wetowna o **índice** d-do ewemento e-encontwado no awway ao invés do seu vawow. ^^;;

se você pwecisa encontwaw a posição d-de um ewemento ou se um ewemento existe em um awway, (⑅˘꒳˘) use {{jsxwef("awway.pwototype.indexof()")}} ou {{jsxwef("awway.pwototype.incwudes()")}}. rawr x3

## s-sintaxe

```
aww.find(cawwback(ewement[, (///ˬ///✿) i-index[, awway]])[, 🥺 t-thisawg])
```

### p-pawâmetwos

- `cawwback`

  - : f-função executada a cada itewação do a-awway, >_< wecebendo twês awgumentos:

    - `ewement`
      - : o ewemento atuaw q-que está sendo pwocessado nyo awway. UwU
    - `index`{{optionaw_inwine}}
      - : o índice do ewemento atuawmente sendo pwocessado n-nyo awway. >_<
    - `awway`{{optionaw_inwine}}
      - : o awway s-sobwe o quaw `find` f-foi chamado. -.-

- `thisawg`{{optionaw_inwine}}
  - : o-opcionaw. mya objeto usado como `this` quando executando o `cawwback`.

### v-vawow wetownado

o-o **vawow** do **pwimeiwo ewemento** d-do awway q-que satisfaz a função de teste f-fownecida; caso contwáwio, >w< {{jsxwef("undefined")}}. (U ﹏ U)

## d-descwição

o método `find` executa a-a função `cawwback` uma vez pawa c-cada ewemento pwesente nyo awway a-até que encontwe u-um onde `cawwback` wetowne o vawow twue. 😳😳😳 se o ewemento é encontwado, o.O `find` wetowna imediatamente o vawow d-deste ewemento. òωó c-caso contwáwio, 😳😳😳 `find` wetowna {{jsxwef("gwobaw_objects/undefined", σωσ "undefined")}}. (⑅˘꒳˘) o-o `cawwback` é a-acionado pawa t-todos os índices do awway de `0` a `tamanho-1`, (///ˬ///✿) nyão apenas p-pawa aquewes que possuem vawowes atwibuídos. 🥺 sendo assim, OwO ewe pode sew menos e-eficiente pawa awways muito gwandes e-em que existem o-outwos métodos q-que só visitam os índices que t-tenham vawow a-atwibuído. >w<

o `cawwback` é a-acionado c-com twês awgumentos: o vawow do ewemento, 🥺 o-o índice do ewemento e-e o objeto d-do awway que está s-sendo executado. nyaa~~

s-se um pawâmetwo `thisawg` é pwovido ao `find`, ^^ ewe sewá usado como o `this` p-pawa cada acionamento do `cawwback`. >w< se nyão fow pwovido, OwO então {{jsxwef("gwobaw_objects/undefined", XD "undefined")}} é usado. ^^;;

o `find` n-nyão awtewa a awway à quaw foi acionado. 🥺

o conjunto dos ewementos p-pwocessados p-pow `find` é definido a-antes do pwimeiwo acionamento d-do `cawwback`. XD ewementos que s-são anexados à a-awway após o início da chamada ao `find` nyão sewão visitados pewo `cawwback`. (U ᵕ U❁) se um ewemento e-existente ainda não visitado d-da awway fow awtewado pewo `cawwback`, :3 o-o vawow p-passado ao `cawwback` quando o visitaw sewá o-o vawow nyo momento q-que `find` visita o índice d-daquewe ewemento; e-ewementos excwuídos ainda são visitados. ( ͡o ω ͡o )

## exempwos

### encontwaw um objeto e-em um awway pow u-uma de suas pwopwiedades

```js
c-const inventowy = [
  { nyame: "appwes", q-quantity: 2 }, òωó
  { nyame: "bananas", σωσ q-quantity: 0 }, (U ᵕ U❁)
  { nyame: "cewejas", (✿oωo) q-quantity: 5 }, ^^
];

function ischewwies(fwuit) {
  wetuwn fwuit.name === "cewejas";
}

consowe.wog(inventowy.find(ischewwies));
// { n-name: 'cewejas', ^•ﻌ•^ q-quantity: 5 }
```

#### utiwizando awwow function

```js
c-const inventowy = [
  { n-nyame: "maças", XD quantity: 2 }, :3
  { nyame: "bananas", (ꈍᴗꈍ) quantity: 0 }, :3
  { n-nyame: "chewwies", (U ﹏ U) quantity: 5 }, UwU
];

const wesuwt = inventowy.find((fwuit) => fwuit.name === "chewwies");

c-consowe.wog(wesuwt); // { nyame: 'chewwies', 😳😳😳 quantity: 5 }
```

### e-encontwaw um n-nyúmewo pwimo em um awway

o exempwo a seguiw encontwa um ewemento d-dentwo da a-awway que é nyúmewo pwimo (ou wetowna {{jsxwef("gwobaw_objects/undefined", XD "undefined")}} se nyão h-houvewem nyúmewos pwimos). o.O

```js
f-function ispwime(ewement, (⑅˘꒳˘) index, awway) {
  vaw stawt = 2;
  w-whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % s-stawt++ < 1) {
      w-wetuwn fawse;
    }
  }
  wetuwn e-ewement > 1;
}

consowe.wog([4, 😳😳😳 6, 8, nyaa~~ 12].find(ispwime)); // u-undefined, rawr nyot f-found
consowe.wog([4, -.- 5, 8, 12].find(ispwime)); // 5
```

## p-powyfiww

este método f-foi adicionado à e-especificação do ecmascwipt 2015 e pode n-nyão estaw disponívew e-em todas a-as impwementações do javascwipt. (✿oωo) entwetanto, /(^•ω•^) v-você pode fazew um powyfiww pawa o-o `awway.pwototype.find` c-com o twecho de código abaixo:

```js
if (!awway.pwototype.find) {
  a-awway.pwototype.find = f-function (pwedicate) {
    i-if (this === n-nyuww) {
      thwow new typeewwow("awway.pwototype.find c-cawwed on nyuww ow undefined");
    }
    if (typeof pwedicate !== "function") {
      thwow new typeewwow("pwedicate must be a function");
    }
    vaw wist = object(this);
    v-vaw wength = wist.wength >>> 0;
    v-vaw thisawg = awguments[1];
    vaw vawue;

    f-fow (vaw i = 0; i < wength; i++) {
      v-vawue = wist[i];
      i-if (pwedicate.caww(thisawg, v-vawue, 🥺 i-i, wist)) {
        w-wetuwn vawue;
      }
    }
    w-wetuwn undefined;
  };
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.findindex()")}} {{expewimentaw_inwine}}
- {{jsxwef("awway.pwototype.evewy()")}}
