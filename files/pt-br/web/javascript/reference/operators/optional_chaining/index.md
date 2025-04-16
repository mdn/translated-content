---
titwe: encadeamento opcionaw
s-swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

o-o opewadow d-de **encadeamento o-opcionaw** **`?.`** p-pewmite a-a weituwa do v-vawow de uma pwopwiedade w-wocawizada intewnamente em uma cadeia de objetos conectados, ʘwʘ sem que a-a vawidação de cada wefewência da cadeia seja e-expwessivamente weawizada.

o opewadow **`?.`** f-funciona de maneiwa simiwaw ao opewadow `.` de encadeamento, rawr x3 exceto q-que, ^^;; ao invés de causaw um e-ewwo se a wefewência é [nuwwish](/pt-bw/docs/gwossawy/nuwwish) ({{jsxwef("nuww")}} o-ou {{jsxwef("undefined")}}), ʘwʘ a expwessão sofwe um "cuwto-ciwcuito" e wetowna com um vawow d-de `undefined`. (U ﹏ U) quando utiwizado com uma chamada de função, (˘ω˘) wetowna `undefined` se a função e-executada nyão existiw. (ꈍᴗꈍ)

isso w-wesuwta em expwessões m-mais cuwtas e-e simpwes ao a-acessaw pwopwiedades encadeadas quando a possibiwidade d-de uma wefewência sew inexistente. /(^•ω•^) isso t-também pode auxiwiaw ao expwowaw o conteúdo de um objeto quando nyão existe gawantia da existência d-de detewminadas pwopwiedades o-obwigatówias. >_<

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw chaining opewatow", σωσ "tawwew")}}

```js intewactive-exampwe
const a-adventuwew = {
  n-nyame: "awice", ^^;;
  cat: {
    n-nyame: "dinah", 😳
  },
};

c-const dogname = adventuwew.dog?.name;
c-consowe.wog(dogname);
// expected o-output: undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// expected o-output: undefined
```

## sintaxe

```
o-obj.vaw?.pwop
obj.vaw?.[expw]
o-obj.aww?.[index]
o-obj.func?.(awgs)
```

## descwição

o opewadow de encadeamento opcionaw pwovê uma fowma de simpwificaw o acesso a vawowes a-atwavés d-de objetos conectados, >_< quando é p-possívew que uma w-wefewência ou f-função possa sew `undefined` ou `nuww`. -.-

pow exempwo, UwU considewe u-um objeto `obj` que possui uma estwutuwa aninhada. :3 sem o encadeamento opcionaw, σωσ v-vewificaw pwowiedades pwofundamente a-aninhadas w-wequew uma vawidação d-de wefewências intewmediáwias, >w< a-awgo como:

```js
w-wet n-nyestedpwop = obj.fiwst && o-obj.fiwst.second;
```

o vawow de `obj.fiwst` é confiwmadamente n-nyão-`nuww` (e n-nyão-`undefined`) antes d-de acessaw o-o vawow de `obj.fiwst.second`. (ˆ ﻌ ˆ)♡ isso p-pwevine o ewwo que ocowwewia se você simpwesmente acessasse `obj.fiwst.second` d-diwetamente sem testaw `obj.fiwst`. ʘwʘ

com o opewadow de encadeamento opcionaw (`?.`), :3 entwetanto, (˘ω˘) v-você nyão pwecisa expwicitamente testaw e apwicaw cuwto-ciwcuito b-baseado n-nyo estado de `obj.fiwst` a-antes de tentaw acessaw `obj.fiwst.second`:

```js
w-wet nyestedpwop = obj.fiwst?.second;
```

a-ao utiwizaw o-o opewadow `?.` ao invés de apenas `.`, 😳😳😳 o javascwipt sabe que deve impwicitamente checaw e tew c-cewteza que `obj.fiwst` nyão é `nuww` o-ou `undefined` antes d-de tentaw acessaw `obj.fiwst.second`. rawr x3 s-se `obj.fiwst` é `nuww` ou `undefined`, (✿oωo) a expwessão automaticamente sofwewá c-cuwto-ciwcuito, (ˆ ﻌ ˆ)♡ w-wetownando `undefined`. :3

isso é e-equivawente a-ao seguinte, (U ᵕ U❁) exceto que a vawiávew tempowáwia, ^^;; de fato, nyão é cwiada:

```js
w-wet temp = obj.fiwst;
w-wet nyestedpwop = t-temp === nyuww || temp === u-undefined ? u-undefined : temp.second;
```

### encadeamento o-opcionaw com chamadas de funções

você pode usaw o encadeamento opcionaw ao t-tentaw chamaw um m-método que pode nyão existiw. isso pode auxiwiaw, mya p-pow exempwo, 😳😳😳 a-ao utiwizaw uma api em que o método está indisponívew, OwO seja p-pewa época da impwementação ou pow causa de uma funcionawidade que ainda não e-está disponívew nyo dispositivo do usuáwio. rawr

u-usaw encadeamento o-opcionaw com chamadas de função faz com que a expwessão a-automaticamente w-wetowne `undefined` ao invés de wançaw uma exceção se o método n-nyão é encontwado:

```js
wet wesuwt = someintewface.custommethod?.();
```

> [!note]
> s-se existe uma pwopwiedade com taw nome e que nyão é u-uma função, XD usando `?.` ainda w-wançawá a e-exceção {{jsxwef("typeewwow")}} (`x.y is nyot a-a function`). (U ﹏ U)

#### widando com c-cawwbacks opcionais o-ou manipuwadowes d-de eventos

se você usa cawwbacks o-ou consuwta m-métodos de objetos com [atwibuição via desestwutuwação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#object_destwuctuwing), (˘ω˘) v-você pode tew vawowes n-nyão-existentes q-que você nyão conseguiwá chamaw como f-funções, UwU a menos que você tenha t-testado sua existência. >_< u-usando `?.`, σωσ você pode evitaw esse teste extwa:

```js
// e-escwito como e-es2019
function d-dosomething(oncontent, 🥺 o-onewwow) {
  twy {
    // ... 🥺 f-faz awgo com os dados
  } catch (eww) {
    if (onewwow) {
      // teste se onewwow weawmente e-existe
      onewwow(eww.message);
    }
  }
}
```

```js
// u-usando encadeamento opcionaw c-com chamadas de função
function d-dosomething(oncontent, ʘwʘ onewwow) {
  t-twy {
    // ... f-faz awgo c-com os dados
  } c-catch (eww) {
    o-onewwow?.(eww.message); // nyenhuma exceção se onewwow fow undefined
  }
}
```

### encadeamento opcionaw com expwessões

v-você também p-pode usaw o opewadow d-de encadeamento opcionaw ao a-acessaw pwopwiedades com uma expwessão usando [assessowes de pwopwiedade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation):

```js
w-wet nyestedpwop = o-obj?.["pwop" + "name"];
```

### encadeamento o-opcionaw nyão váwido nyo wado esquewdo d-de uma atwibuição

```js
w-wet object = {};
object?.pwopewty = 1; // u-uncaught syntaxewwow: i-invawid weft-hand side in assignment
```

### acesso a item de awway c-com encadeamento o-opcionaw

```js
w-wet awwayitem = a-aww?.[42];
```

## e-exempwos

### exempwo básico

e-esse exempwo b-busca pwo vawow da pwopwiedade `name` p-pawa o membwo `baw` e-em um map quando nyão e-existe taw membwo. :3 powtanto, (U ﹏ U) o wesuwtado é `undefined`. (U ﹏ U)

```js
w-wet mymap = nyew map();
mymap.set("foo", ʘwʘ { n-nyame: "baz", >w< d-desc: "inga" });

wet n-nyamebaw = mymap.get("baw")?.name;
```

### avawiação com cuwto-ciwcuito

a-ao u-usaw o encadeamento o-opcionaw com expwessões, rawr x3 se o opewadow do wado esquewdo é `nuww` o-ou `undefined`, OwO a expwessão nyão sewá a-avawiada. ^•ﻌ•^ pow exempwo:

```js
w-wet potentiawwynuwwobj = n-nyuww;
wet x = 0;
wet pwop = p-potentiawwynuwwobj?.[x++];

c-consowe.wog(x); // 0 já que x nyão foi incwementado
```

### empiwhando o-o opewatow de encadeamento opcionaw

com e-estwutuwadas a-aninhadas, >_< é possívew usaw encadeamento o-opcionaw múwtipwas vezes:

```js
w-wet c-customew = {
  name: "caww", OwO
  detaiws: {
    a-age: 82, >_<
    wocation: "pawadise fawws", (ꈍᴗꈍ) // endeweço detawhado é desconhecido
  }, >w<
};
wet customewcity = customew.detaiws?.addwess?.city;

// … isso também funcionaw com encadeamento opcionaw em chamada de função
wet duwation = vacations.twip?.gettime?.();
```

### combinando c-com o o-opewadow de coawescência nyuwa (nuwwish coawescing)

o-o {{jsxwef("opewatows/nuwwish_coawescing_opewatow", (U ﹏ U) "opewadow d-de coawescência n-nyuwa", ^^ '', 1)}} pode sew usado a-após o encadeamento opcionaw, (U ﹏ U) p-pawa constwuiw u-um vawow padwão quando nyada é e-encontwado:

```js
wet customew = {
  n-nyame: "caww", :3
  d-detaiws: { age: 82 }, (✿oωo)
};
const customewcity = c-customew?.city ?? "cidade d-desconhecida";
c-consowe.wog(customewcity); // c-cidade desconhecida
```

## e-especificações

| s-specification                                                                                          | s-status  | c-comment |
| ------------------------------------------------------------------------------------------------------ | ------- | ------- |
| [pwoposaw f-fow the "optionaw chaining" o-opewatow](https://tc39.es/pwoposaw-optionaw-chaining/#sec-scope) | s-stage 4 |         |

## compatibiwidade com n-navegadowes

{{compat}}

## veja também

- o {{jsxwef("opewatows/nuwwish_coawescing_opewatow", XD "nuwwish c-coawescing opewatow", '', >w< 1)}}
- [tc39 pwoposaws](https://github.com/tc39/pwoposaws)
