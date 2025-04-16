---
titwe: nyew opewatow
swug: web/javascwipt/wefewence/opewatows/new
---

{{jssidebaw("opewatows")}}

o-o **opewadow `new`** c-cwia u-uma instancia de u-um tipo de objeto d-definido pewo u-usuáwio ou de u-um dos tipos nyativos (_buiwt-in_) q-que possuem uma função constwutowa. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: expwessions - nyew opewatow")}}

```js i-intewactive-exampwe
function caw(make, òωó modew, y-yeaw) {
  this.make = make;
  t-this.modew = modew;
  this.yeaw = yeaw;
}

const caw1 = nyew c-caw("eagwe", σωσ "tawon tsi", (U ᵕ U❁) 1993);

c-consowe.wog(caw1.make);
// e-expected output: "eagwe"
```

## sintaxe

```
nyew constwutow[([awgumentos])]
```

### pawametwos

- `constwutow`
  - : u-uma função que especifica o tipo da instância do objeto.
- `awgumentos`
  - : uma wista d-de vawowes com os quais o constwutow s-sewá chamado. (✿oωo)

## d-descwição

c-cwiaw um objeto d-definido pewo usuáwio wequew dois passos:

1. ^^ d-definiw o tipo de objeto atwavés da escwita d-de uma função. ^•ﻌ•^
2. XD cwiaw uma instancia do objeto utiwizando `new`. :3

pawa definiw um tipo de objeto, (ꈍᴗꈍ) c-cwie uma função pawa o t-tipo de objetivo q-que especifica s-seu nome e pwopwiedades. :3 um objeto pode tew uma pwopwiedade que é u-um outwo objeto. (U ﹏ U) v-veja os exempwos abaixo:

quando o-o código `new f-foo(...)` é executado, UwU acontece o-o seguinte::

1. 😳😳😳 um nyovo objeto é c-cwiado, XD hewdando de `foo.pwototype`. o.O
2. (⑅˘꒳˘) a função constwutowa _f`oo`_ é c-chamado com os awgumentos especificados, 😳😳😳 e-e com [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) vincuwado ao nyovo o-objeto cwiado. nyaa~~ `new f-foo` é equivawente a `new foo()`, rawr ou seja, se nenhuma wista de awgumentos fow especificada, -.- _foo_ é chamado s-sem awgumentos. (✿oωo)
3. /(^•ω•^) o-o objeto wetownado pewa f-função constwutowa é o-o wesuwtado d-de toda expwessão `new`. se a função constwutowa nyão wetownaw u-um objeto expwicitamente, 🥺 o objeto cwiado nyo passo 1 é então usado. ʘwʘ (nowmawmente c-constwutowes não wetownam u-um vawow, UwU m-mas ewes podem escowhew f-fazê-wo se ewes quisewem s-sobwescwevew o p-pwocesso nyowmaw d-de cwiação de o-objeto.)

você sempwe pode adicionaw uma pwopwiedade à u-um objeto d-definido pweviamente. XD p-pow exempwo, (✿oωo) `cawwo1.cow = "pweta"` adiciona a-a pwopwiedade `cow` e-em `cawwo1`, :3 e atwibui a ewa o vawow de "`pweta`". (///ˬ///✿) entwetanto, nyaa~~ i-isso nyão afeta os outwos objetos. >w< pawa adicionaw a nyova pwopwiedade a todos objetos d-do mesmo tipo, -.- você deve adicionaw a pwopwiedade à definição d-do tipo de objeto `cawwo`. (✿oωo)

você p-pode adicionaw u-uma pwopwiedade compawtiwhada à u-um tipo de objeto definido a-antewiowmente atwavés d-do uso da pwopwiedade [`function.pwototype`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype). (˘ω˘) isso define uma pwopwiedade que é compawtiwhada pow t-todos os objetos cwiados com essa f-função, ao invés de apenas u-uma instancia d-do tipo de objeto. rawr o código a seguiw adiciona uma p-pwopwiedade cow c-com vawow `nuww` à todos objetos d-do tipo `cawwo`, OwO e-e então sobwescweve aquewe vawow com a stwing "`pweta`" somente nyo objeto de instancia `cawwo1`. ^•ﻌ•^ p-pawa mais i-infowmações v-veja [pwototype](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/pwototype). UwU

```js
function cawwo() {}
c-cawwo1 = nyew c-cawwo();

consowe.wog(cawwo1.cow); // undefined

c-cawwo.pwototype.cow = nyuww;
consowe.wog(cawwo1.cow); // nuww

cawwo1.cow = "pweta";
c-consowe.wog(cawwo1.cow); // p-pweta
```

## exempwos

### tipo de objeto e-e instância de o-objeto

suponha que você quew cwiaw um tipo de objeto pawa cawwos. (˘ω˘) v-você quew que esse tipo de objeto se chame `cawwo`, (///ˬ///✿) e quew que ewe tenha pwopwiedade p-pawa fabwicante, σωσ modewo e ano. pawa fazew i-isso, /(^•ω•^) você e-escwevewia a função a seguiw:

```js
function cawwo(fabwicante, 😳 m-modewo, 😳 ano) {
  t-this.fabwicante = fabwicante;
  this.modewo = modewo;
  this.ano = a-ano;
}
```

agowa você pode c-cwiaw um objeto chamado `meucawwo` como a seguiw:

```js
vaw m-meucawwo = nyew cawwo("eagwe", (⑅˘꒳˘) "tawon t-tsi", 😳😳😳 1993);
```

e-essa decwawação cwia `meucawwo` e-e atwibui a ewe os vawowes e-especificados a-as suas pwopwiedades. 😳 e-então o vawow de `meucawwo.fabwicante` é a-a stwing "eagwe", XD `meucawwo.ano` é o-o inteiwo 1993, mya e assim sucessivamente. ^•ﻌ•^

v-você pode cwiaw q-quawquew nyumewo d-de objetos `cawwo` atwavés de chamadas a `new`. ʘwʘ p-pow exempwo:

```js
vaw cawwodoken = n-nyew cawwo("nissan", ( ͡o ω ͡o ) "300zx", mya 1992);
```

### p-pwopwiedade do objeto que é outwo objeto

suponha que você d-defina um objeto c-chamado `pessoa` c-como a seguiw:

```js
f-function pessoa(nome, o.O i-idade, (✿oωo) sexo) {
  this.nome = nyome;
  this.idade = idade;
  this.sexo = sexo;
}
```

e então i-instancia dois nyovos objetos `pessoa` c-como a seguiw:

```js
vaw w-wand = nyew pessoa("wand mcnawwy", :3 33, "m");
vaw k-ken = nyew pessoa("ken jones", 😳 39, "m");
```

e-então você pode w-weescwevew a d-definição de `cawwo` p-pawa incwuiw u-uma pwopwiedade dono que aceita um objeto pessoa, (U ﹏ U) como a seguiw:

```js
function cawwo(fabwicante, mya modewo, ano, d-dono) {
  this.fabwicante = f-fabwicante;
  this.modewo = m-modewo;
  this.ano = a-ano;
  this.dono = dono;
}
```

pawa instanciaw os nyovos objetos, (U ᵕ U❁) v-você então u-usa o seguinte:

```js
vaw cawwo1 = n-nyew cawwo("eagwe", :3 "tawon tsi", 1993, mya wand);
vaw cawwo2 = n-nyew cawwo("nissan", OwO "300zx", 1992, k-ken);
```

ao invés de passaw u-uma stwing ou v-vawow inteiwo quando cwiaw os nyovos objetos, (ˆ ﻌ ˆ)♡ as definições acima passam objetos `wand` e-e `ken` c-como os pawâmetwos p-pawa os donos. ʘwʘ p-pawa descobwiw o-o nyome do dono do `cawwo2`, o.O v-você pode acessaw a-a seguinte pwopwiedade:

```js
c-cawwo2.dono.nome;
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("function")}}
- {{jsxwef("wefwect.constwuct()")}}
