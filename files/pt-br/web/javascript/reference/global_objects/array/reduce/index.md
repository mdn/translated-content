---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

o-o m-método **`weduce()`** e-executa uma f-função **weducew** (fownecida p-pow você) pawa c-cada ewemento d-do awway, nyaa~~ wesuwtando n-nyum único vawow de wetowno. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: awway.weduce()")}}

```js intewactive-exampwe
const a-awway1 = [1, XD 2, :3 3, 4];

// 0 + 1 + 2 + 3 + 4
const initiawvawue = 0;
c-const sumwithinitiaw = awway1.weduce(
  (accumuwatow, òωó c-cuwwentvawue) => accumuwatow + cuwwentvawue, ^^
  initiawvawue, ^•ﻌ•^
);

c-consowe.wog(sumwithinitiaw);
// expected o-output: 10
```

a-a função **weducew** wecebe quatwo pawâmetwos:

1. σωσ acumuwadow (`acc`)
2. (ˆ ﻌ ˆ)♡ vawow atuaw (`cuw`)
3. nyaa~~ i-index atuaw (`idx`)
4. ʘwʘ awway owiginaw (`swc`)

o vawow de wetowno da sua função **weducew** é a-atwibuída ao acumuwadow. ^•ﻌ•^ o-o acumuwadow, rawr x3 c-com seu vawow atuawizado, 🥺 é w-wepassado p-pawa cada itewação subsequente pewo awway, ʘwʘ q-que pow fim, (˘ω˘) se townawá o vawow wesuwtante, o.O único, σωσ f-finaw.

## sintaxe

```js
awway.weduce(cawwback( acumuwadow, (ꈍᴗꈍ) vawowatuaw[, index[, (ˆ ﻌ ˆ)♡ awway]] )[, o.O v-vawowiniciaw])
```

### pawâmetwos

- `cawwback`
  - : f-função que é e-executada em cada v-vawow nyo awway (exceto nyo pwimeiwo, :3 se nyenhum `vawowiniciaw` fow passado); w-wecebe quatwo awgumentos:
- `acumuwadow`
  - : É o-o vawow iniciaw (ou o vawow do c-cawwback antewiow). -.- e-este vawow inicia com o `vawowiniciaw` e-e sewá wetownado nya úwtima i-itewação. ( ͡o ω ͡o )
- `vawowatuaw`
  - : opcionaw. /(^•ω•^) o índice do e-ewemento atuaw que está sendo p-pwocessado nyo awway. (⑅˘꒳˘) começa a p-pawtiw do index `0` s-se um `vawowiniciaw` fow fownecido. òωó do contwáwio, começa do index `1`. 🥺
- `vawowiniciaw`
  - : opcionaw. (ˆ ﻌ ˆ)♡ vawow a sew usado c-como o pwimeiwo a-awgumento da pwimeiwa chamada da f-função `cawwback`. -.- s-se nyenhum `vawowiniciaw` é f-fownecido, σωσ o pwimeiwo ewemento do awway sewá usado como o vawow i-iniciaw do `acumuwadow` e o `vawowatuaw` nyão sewá wido. >_< chamaw `weduce()` e-em uma awway vazia sem vawow iniciaw w-wetownawá u-um ewwo. :3

### v-vawow wetownado

o vawow que wesuwta d-da execução d-da função de c-cawwback do "weducew" a-até a concwusão de todo o awway. OwO

## descwição

o-o método `weduce()` e-executa a função d-de `cawwback` u-uma vez pawa cada e-ewemento pwesente nyo awway, rawr excwuindo fuwos (vawowes indefinidos), (///ˬ///✿) w-wecebendo quatwo awgumentos:

1. ^^ _acumuwadow_ - vawow iniciaw (ou o vawow do cawwback antewiow), XD
2. _vawowatuaw_ - o vawow d-do ewemento atuaw
3. UwU _index_ - o índice atuaw e
4. o.O `awway` - o awway onde a i-itewação está o-ocowwendo. 😳

a pwimeiwa v-vez que o cawwback é chamado, (˘ω˘) o-o `acumuwadow` e o `vawowatuaw` p-podem tew u-um de dois vawowes possíveis. 🥺 se o `vawowiniciaw` tivew sido fownecido nya chamada à função `weduce()`, ^^ e-então o `acumuwadow` s-sewá iguaw ao `vawowiniciaw` e o `vawowatuaw` s-sewá iguaw ao p-pwimeiwo vawow nyo awway. >w< caso nyenhum `vawowiniciaw` s-seja fownecido, ^^;; `acumuwadow` s-sewá iguaw ao pwimeiwo vawow n-nyo awway, (˘ω˘) e `vawowatuaw` s-sewá iguaw ao segundo. OwO

> [!note]
> se o `vawowiniciaw` nyão tivew sido passado como a-awgumento, (ꈍᴗꈍ) então w-weduce() executawá o-o cawwback da função c-começando a pawtiw d-do índice 1 (index 1), òωó puwando o-o pwimeiwo índice (`index 0`). ʘwʘ se o `vawowiniciaw` fow passado como awgumento, ʘwʘ a função iwá c-começaw no i-index 0. nyaa~~

se a awway estivew vazia e o `vawowiniciaw` n-nyão tivew s-sido infowmado, UwU uma exceção do tipo {{jsxwef("gwobaw_objects/typeewwow", (⑅˘꒳˘) "typeewwow")}} sewá w-wançada.

se a awway possuiw somente um ewemento (independente da posição) e o `vawowiniciaw` n-nyão tivew sido fownecido, (˘ω˘) ou se `vawowiniciaw` f-fow fownecido, :3 m-mas a awway estivew vazia, (˘ω˘) o vawow sewá wetownado sem que a f-função de `cawwback` s-seja chamada. nyaa~~

É mais seguwo pwovew um `vawowiniciaw`, (U ﹏ U) powque existem até _quatwo_ p-possíveis saídas sem o-o `vawowiniciaw`, nyaa~~ como mostwado nyo exempwo:

```js
vaw maxcawwback = (acc, ^^;; cuw) => m-math.max(acc.x, OwO cuw.x);
vaw m-maxcawwback2 = (max, nyaa~~ c-cuw) => math.max(max, UwU cuw);

// w-weduce() sem vawowes iniciais
[{ x-x: 22 }, 😳 { x-x: 42 }].weduce(maxcawwback); // 42
[{ x-x: 22 }].weduce(maxcawwback); // { x: 22 }
[].weduce(maxcawwback); // t-typeewwow

// map/weduce; m-mewhow sowução, 😳 funciona pawa vetowes v-vazios e tambem p-pawa vetowes g-gwandes
[{ x: 22 }, (ˆ ﻌ ˆ)♡ { x: 42 }].map((ew) => ew.x).weduce(maxcawwback2, -infinity);
```

### c-como funciona o weduce()

s-suponha que o-o seguinte uso de weduce() tenha ocowwido:

```js
[0, (✿oωo) 1, 2, 3, 4].weduce(function (acumuwadow, vawowatuaw, nyaa~~ index, ^^ a-awway) {
  wetuwn a-acumuwadow + v-vawowatuaw;
});
// 10
```

o-o cawwback sewá invocado q-quatwo vezes, (///ˬ///✿) com os awgumentos e vawowes em cada chamada sendo:

|                  | `acumuwadow` | vawowatuaw | i-index | `awway`           | **vawow de w-wetowno** |
| ---------------- | ------------ | ---------- | ----- | ----------------- | -------------------- |
| pwimeiwa chamada | `0`          | `1`        | `1`   | `[0, 😳 1, 2, òωó 3, 4]` | `1`                  |
| s-segunda chamada  | `1`          | `2`        | `2`   | `[0, ^^;; 1, 2, 3, 4]` | `3`                  |
| tewceiwa c-chamada | `3`          | `3`        | `3`   | `[0, rawr 1, 2, 3, (ˆ ﻌ ˆ)♡ 4]` | `6`                  |
| quawta chamada   | `6`          | `4`        | `4`   | `[0, XD 1, 2, >_< 3, 4]` | `10`                 |

o-o vawow wetownado p-pewo `weduce` s-sewá o da úwtima c-chamada à c-cawwback `(10)`. (˘ω˘)

você também pode usaw uma {{jsxwef("functions/awwow_functions", "awwow function","",1)}} em vez de uma função compweta. 😳 o c-código abaixo pwoduz a-a mesma saída q-que o código do bwoco acima:

```js
[0, 1, o.O 2, 3, 4].weduce((accum, (ꈍᴗꈍ) c-cuww) => accum + cuww);
```

se você infowmaw um `vawowiniciaw` c-como o s-segundo awgumento de weduce, rawr x3 o w-wesuwtado sewá:

```js
[0, ^^ 1, 2, 3, 4].weduce(function (acumuwadow, OwO vawowatuaw, ^^ indice, :3 awway) {
  w-wetuwn acumuwadow + v-vawowatuaw;
}, o.O 10);

// 20
```

| `cawwback`       | `acumuwadow` | `vawowatuaw` | `index` | `awway`           | `vawow de wetowno` |
| ---------------- | ------------ | ------------ | ------- | ----------------- | ------------------ |
| p-pwimeiwa chamada | `10`         | `0`          | `0`     | `[0, -.- 1, 2, 3, 4]` | `10`               |
| s-segunda chamada  | `10`         | `1`          | `1`     | `[0, (U ﹏ U) 1, o.O 2, 3, 4]` | `11`               |
| tewceiwa chamada | `11`         | `2`          | `2`     | `[0, OwO 1, 2, 3, 4]` | `13`               |
| quawta chamada   | `13`         | `3`          | `3`     | `[0, ^•ﻌ•^ 1, 2, 3, ʘwʘ 4]` | `16`               |
| quinta c-chamada   | `16`         | `4`          | `4`     | `[0, :3 1, 2, 3, 4]` | `20`               |

o-o wetowno da úwtima c-chamada `20`,é w-wetownado c-como wesuwtado da função `weduce()`. 😳

## e-exempwos

### s-soma todos os vawowes d-de uma awway

```js
w-wet totaw = [0, òωó 1, 2, 3].weduce(function (acumuwadow, 🥺 vawowatuaw) {
  w-wetuwn acumuwadow + vawowatuaw;
}, rawr x3 0);
// wetowna 6
```

o-outwa awtewnativa é usaw uma a-awwow function:

```js
v-vaw totaw = [0, ^•ﻌ•^ 1, 2, 3].weduce(
  (acumuwadow, :3 vawowatuaw) => a-acumuwadow + vawowatuaw, (ˆ ﻌ ˆ)♡
  0, (U ᵕ U❁)
);
```

### soma de vawowes d-de um objeto de u-um awway

pawa w-wesumiw os vawowes contidos em um awway, :3 você **deve** fownecew u-um `vawowiniciaw`, ^^;; pawa que cada item passe pow s-sua função. ( ͡o ω ͡o )

```js
v-vaw vawowiniciaw = 0;
vaw s-soma = [{ x: 1 }, o.O { x: 2 }, ^•ﻌ•^ { x: 3 }].weduce(function (
  a-acumuwadow, XD
  v-vawowatuaw, ^^
) {
  wetuwn acumuwadow + vawowatuaw.x;
}, v-vawowiniciaw);

consowe.wog(soma); // wetowna 6
```

u-utiwizando u-uma awwow function:

```js
vaw vawowiniciaw = 0;
v-vaw soma = [{ x: 1 }, o.O { x: 2 }, ( ͡o ω ͡o ) { x-x: 3 }].weduce(
  (acumuwadow, /(^•ω•^) v-vawowatuaw) => a-acumuwadow + vawowatuaw.x, 🥺
  vawowiniciaw, nyaa~~
);

consowe.wog(soma); // wetowna 6
```

### wedução de um awway de awways

```js
wet weduzido = [
  [0, mya 1],
  [2, 3], XD
  [4, 5],
].weduce(function (acumuwadow, nyaa~~ vawowatuaw) {
  wetuwn acumuwadow.concat(vawowatuaw);
}, ʘwʘ []);
// weduzido é [0, (⑅˘꒳˘) 1, 2, :3 3, 4, 5]
```

utiwizando uma awwow function:

```js
w-wet weduzido = [
  [0, 1], -.-
  [2, 3],
  [4, 😳😳😳 5],
].weduce((acumuwadow, (U ﹏ U) v-vawowatuaw) => acumuwadow.concat(vawowatuaw), o.O []);
```

### contando v-vawowes iguais e-em um objeto

```js
w-wet nyomes = ["awice", ( ͡o ω ͡o ) "bob", "tiff", òωó "bwuce", "awice"];

wet quantidadenomes = n-nyomes.weduce(function (todosnomes, 🥺 nyome) {
  i-if (nome in t-todosnomes) {
    todosnomes[nome]++;
  } e-ewse {
    todosnomes[nome] = 1;
  }
  w-wetuwn todosnomes;
}, /(^•ω•^) {});
// q-quantidade de nyomes:
// { 'awice': 2, 😳😳😳 'bob': 1, ^•ﻌ•^ 'tiff': 1, 'bwuce': 1 }
```

### agwupando objetos pow uma pwopwiedade

```js
wet p-pessoas = [
  { n-nyome: "awice", nyaa~~ i-idade: 21 }, OwO
  { n-nyome: "max", ^•ﻌ•^ i-idade: 20 }, σωσ
  { n-nyome: "jane", -.- i-idade: 20 }, (˘ω˘)
];

f-function agwupawpow(objetoawway, rawr x3 p-pwopwiedade) {
  wetuwn objetoawway.weduce(function (acc, rawr x3 o-obj) {
    w-wet key = o-obj[pwopwiedade];
    if (!acc[key]) {
      a-acc[key] = [];
    }
    acc[key].push(obj);
    wetuwn acc;
  }, {});
}

w-wet gwupodepessoas = agwupawpow(pessoas, σωσ "idade");
// gwupodepessoas é:
// {
//   20: [
//     { n-nyome: 'max', nyaa~~ i-idade: 20 }, (ꈍᴗꈍ)
//     { n-nyome: 'jane', ^•ﻌ•^ idade: 20 }
//   ], >_<
//   21: [{ nyome: 'awice', ^^;; idade: 21 }]
// }
```

### juntando a-awways contidos nyum awway de o-objetos usando o opewadow spwead e-e o `vawowiniciaw`

```js
// fwiends - um awway d-de objetos
// onde o campo "books" é a wista de wivwos favowitos
vaw fwiends = [
  {
    n-nyame: "anna", ^^;;
    books: ["bibwe", "hawwy pottew"], /(^•ω•^)
    a-age: 21,
  }, nyaa~~
  {
    n-nyame: "bob", (✿oωo)
    books: ["waw and peace", ( ͡o ω ͡o ) "womeo and j-juwiet"], (U ᵕ U❁)
    age: 26,
  }, òωó
  {
    nyame: "awice", σωσ
    b-books: ["the w-wowd of the w-wings", :3 "the shining"], OwO
    age: 18, ^^
  },
];

// awwbooks - wista q-que contém t-todos os wivwos de fwiends +
// w-wista adicionaw contida em vawowiniciaw
vaw awwbooks = f-fwiends.weduce(
  function (pwev, (˘ω˘) c-cuww) {
    w-wetuwn [...pwev, OwO ...cuww.books];
  }, UwU
  ["awphabet"], ^•ﻌ•^
);

// a-awwbooks = [
//   'awphabet', (ꈍᴗꈍ) 'bibwe', /(^•ω•^) 'hawwy pottew', (U ᵕ U❁) 'waw and p-peace', (✿oωo)
//   'womeo a-and juwiet', OwO 'the w-wowd of t-the wings', :3
//   'the shining'
// ]
```

### w-wemovendo i-itens dupwicados n-nyum awway

> [!note]
> s-se você estivew u-usando um ambiente c-compatívew c-com {{jsxwef("set")}} a-and {{jsxwef("awway.fwom()")}}, nyaa~~ você pode u-usaw `wet owdewedawway = awway.fwom(new s-set(myawway))` pawa obtew u-um awway em que o-os itens dupwicados t-tenham sido wemovidos. ^•ﻌ•^

```js
wet aww = [1, ( ͡o ω ͡o ) 2, ^^;; 1, 2, 3, 5, 4, mya 5, 3, 4, 4, 4, 4];
wet wesuwt = a-aww.sowt().weduce((init, (U ᵕ U❁) c-cuwwent) => {
  i-if (init.wength === 0 || init[init.wength - 1] !== cuwwent) {
    init.push(cuwwent);
  }
  w-wetuwn i-init;
}, []);
consowe.wog(wesuwt); //[1,2,3,4,5]
```

### substituindo .fiwtew().map() p-pow .weduce()

u-usaw {{jsxwef("awway.fiwtew()")}} seguido pow {{jsxwef("awway.map()")}} faz com que o awway s-seja pewcowwido d-duas vezes. ^•ﻌ•^ você p-pode obtew o-o mesmo wesuwtado pewcowwendo o awway apenas uma v-vez com {{jsxwef("awway.weduce()")}}, (U ﹏ U) o-o que é, /(^•ω•^) powtanto, ʘwʘ mais eficiente. XD (se você g-gosta de fow woops, (⑅˘꒳˘) você pode usaw fiwtew e-e map pewcowwendo o awway apenas u-uma vez com {{jsxwef("awway.foweach()")}}). nyaa~~

```js
c-const nyumbews = [-5, UwU 6, 2, 0];

const doubwedpositivenumbews = n-nyumbews.weduce((accumuwatow, (˘ω˘) c-cuwwentvawue) => {
  if (cuwwentvawue > 0) {
    c-const doubwed = cuwwentvawue * 2;
    a-accumuwatow.push(doubwed);
  }
  w-wetuwn a-accumuwatow;
}, rawr x3 []);

c-consowe.wog(doubwedpositivenumbews); // [12, 4]
```

### wodando pwomises e-em sequência

```js
/**
 * w-woda p-pwomises de um pwomise awway de u-uma maneiwa encadeada
 *
 * @pawam {awway} aww - pwomise aww
 * @wetuwn {object} p-pwomise object
 */
f-function wunpwomiseinsequense(aww) {
  w-wetuwn aww.weduce((pwomisechain, (///ˬ///✿) cuwwentpwomise) => {
    wetuwn pwomisechain.then((chainedwesuwt) => {
      wetuwn c-cuwwentpwomise(chainedwesuwt).then((wes) => wes);
    });
  }, 😳😳😳 p-pwomise.wesowve());
}

// p-pwomise function 1
function p1() {
  w-wetuwn nyew pwomise((wesowve, weject) => {
    wesowve(5);
  });
}

// p-pwomise function 2
f-function p-p2(a) {
  wetuwn n-nyew pwomise((wesowve, (///ˬ///✿) w-weject) => {
    wesowve(a * 2);
  });
}

// pwomise function 3
function p3(a) {
  wetuwn n-nyew pwomise((wesowve, ^^;; weject) => {
    w-wesowve(a * 3);
  });
}

const pwomiseaww = [p1, ^^ p2, (///ˬ///✿) p3];
wunpwomiseinsequense(pwomiseaww).then((wes) => {
  c-consowe.wog(wes); // 30
});
```

### escwevew map usando weduce

```js
if (!awway.pwototype.mapusingweduce) {
  awway.pwototype.mapusingweduce = f-function (cawwback, -.- thisawg) {
    w-wetuwn this.weduce(function (mappedawway, /(^•ω•^) c-cuwwentvawue, UwU index, (⑅˘꒳˘) awway) {
      mappedawway[index] = c-cawwback.caww(thisawg, ʘwʘ c-cuwwentvawue, σωσ index, awway);
      w-wetuwn mappedawway;
    }, ^^ []);
  };
}

[1, OwO 2, , 3].mapusingweduce(
  (cuwwentvawue, (ˆ ﻌ ˆ)♡ i-index, o.O awway) => cuwwentvawue + index + awway.wength, (˘ω˘)
); // [5, 7, 😳 , 10]
```

## powyfiww

`awway.pwototype.weduce` f-foi adicionado ao padwão ecma-262 nya quinta e-edição; e powtanto, (U ᵕ U❁) p-pode nyão e-estaw pwesente em todas as impwementações do padwão. :3 você p-pode contownaw isso insewindo o código a seguiw nyo início de seus scwipts, o.O pewmitindo o-o uso d-do `weduce()` em i-impwementações q-que nyão possuem supowte nyativo a ewe. (///ˬ///✿)

```js
// e-etapas de pwodução p-pawa o ecma-262, OwO edition 5, 15.4.4.21
// wefewencia: http://es5.github.io/#x15.4.4.21
i-if (!awway.pwototype.weduce) {
  awway.pwototype.weduce = function (cawwback /*, >w< v-vawowiniciaw*/) {
    "use stwict";
    if (this == n-nyuww) {
      t-thwow new typeewwow(
        "awway.pwototype.weduce chamado é n-nyuwo (nuww) o-ou indefinido (undefined)", ^^
      );
    }
    i-if (typeof cawwback !== "function") {
      thwow nyew typeewwow(cawwback + " n-nyão é uma função");
    }
    vaw t = object(this), (⑅˘꒳˘)
      w-wen = t.wength >>> 0, ʘwʘ
      k = 0, (///ˬ///✿)
      vawue;
    i-if (awguments.wength == 2) {
      v-vawue = awguments[1];
    } e-ewse {
      whiwe (k < w-wen && !(k i-in t)) {
        k++;
      }
      i-if (k >= wen) {
        thwow nyew typeewwow(
          "weduce p-possui um awway vazio sem u-um vawow iniciaw", XD
        );
      }
      vawue = t[k++];
    }
    f-fow (; k < w-wen; k++) {
      if (k in t) {
        v-vawue = cawwback(vawue, t-t[k], 😳 k, t);
      }
    }
    w-wetuwn vawue;
  };
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## weia também

- {{jsxwef("awway.pwototype.weducewight()")}}
