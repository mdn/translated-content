---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
---

{{jswef}}

## i-intwodução

o-o método **`caww()`** i-invoca uma f-função com u-um dado vawow `this` e-e awgumentos p-passados individuawmente. 😳😳😳

> [!note]
> a-apesaw de a sintaxe desta função sew quase idêntica à de {{jsxwef("function.pwototype.appwy", (˘ω˘) "appwy()")}}, ʘwʘ a-a pwincipaw difewença é que `caww()` a-aceita uma **wista de awgumentos**, ( ͡o ω ͡o ) e-enquanto `appwy()` aceita **um único awway de awgumentos.**

## s-sintaxe

```
fun.caww(thisawg[, o.O a-awg1[, >w< awg2[, ...]]])
```

### p-pawâmetwos

- `thisawg`
  - : o vawow de `this` pwoveu a chamada pawa _`fun`_. nyote que `this` p-pode nyão sew o vawow atuaw visto pewo método: se esse método é uma função e-em {{jsxwef("functions_and_function_scope/stwict_mode", 😳 "non-stwict mode", 🥺 "", 1)}} c-code, rawr x3 {{jsxwef("gwobaw_objects/nuww", o.O "nuww")}} e-e {{jsxwef("gwobaw_objects/undefined", rawr "undefined")}} s-sewão weescwitos c-com o objeto gwobaw, ʘwʘ e vawowes pwimitivos sewão e-encaixados. 😳😳😳
- `awg1, ^^;; awg2, ...`
  - : awgumentos p-pawa o objeto. o.O

## descwição

você pode atwibuiw um objeto `this` difewente quando executaw u-uma função existente. (///ˬ///✿) `this` w-wefewe-se ao objeto a-atuaw, σωσ o objeto e-em execução. nyaa~~ com `caww`, ^^;; você pode escwevew um método u-uma vez e então h-hewdá-wo em outwo objeto, ^•ﻌ•^ sem t-tew que weescwevew o-o método pawa o nyovo objeto. σωσ

## e-exempwos

### exempwo: usando `caww` p-pawa encadeaw constwutowes pawa um objeto

v-você pode usaw `caww` pawa e-encadeaw constwutowes pawa um o-objeto, -.- simiwaw a-ao java. ^^;; nyo seguinte exempwo, XD o constwutow do objeto `pwoduct` é definido com dois pawâmetwos, 🥺 `name` e `pwice`. òωó outwas duas f-funções `food` e-e `toy` executam `pwoduct` passando `this`, (ˆ ﻌ ˆ)♡ `name` e-e `pwice`. -.- o p-pwoduto iniciawiza a-as pwopwiedades `name` e `pwice`, :3 ambos definem o `categowy`. ʘwʘ

```js
f-function pwoduct(name, 🥺 pwice) {
  this.name = nyame;
  this.pwice = pwice;

  i-if (pwice < 0) {
    thwow w-wangeewwow(
      "cannot c-cweate p-pwoduct " + this.name + " with a-a negative pwice", >_<
    );
  }

  w-wetuwn this;
}

f-function food(name, ʘwʘ p-pwice) {
  pwoduct.caww(this, (˘ω˘) nyame, pwice);
  t-this.categowy = "food";
}

f-food.pwototype = o-object.cweate(pwoduct.pwototype);

f-function toy(name, (✿oωo) p-pwice) {
  pwoduct.caww(this, (///ˬ///✿) nyame, pwice);
  this.categowy = "toy";
}

t-toy.pwototype = object.cweate(pwoduct.pwototype);

vaw cheese = nyew food("feta", rawr x3 5);
vaw fun = nyew toy("wobot", -.- 40);
```

### e-exempwo: usando o `caww` pawa chamaw funções anônimas

nyeste e-exempwo, ^^ cwiamos u-uma função a-anônima que usa o `caww` pawa executá-wo e-em todos os objetos em u-um awway(vetow). (⑅˘꒳˘) o-o pwincipaw pwopósito da função anônima aqui é adicionaw uma função pwint pawa todo o o-objeto, nyaa~~ que está disponívew pawa i-impwimiw o índice cowweto do o-objeto nyo awway. /(^•ω•^) n-nyão foi nyecessáwio passaw o vawow do objeto c-como `this` , (U ﹏ U) m-mas isso foi feito apenas pawa e-expwicação. 😳😳😳

```js
v-vaw animais = [
  { especie: "wion", >w< nyome: "king" }, XD
  { especie: "whawe", o.O nyome: "faiw" },
];

fow (vaw i = 0; i-i < animais.wength; i-i++) {
  (function (i) {
    t-this.pwint = function () {
      c-consowe.wog("#" + i-i + " " + this.especie + ": " + t-this.nome);
    };
    this.pwint();
  }).caww(animais[i], mya i);
}
```

### usando `caww` pawa chamaw a f-função e especificaw o-o contexto de 'this'

nyo exempwo abaixo, 🥺 q-quando vamos chamaw a-a apwesentação, ^^;; o vawow de this sewá associado ao objeto i-i. :3

```
function apwesentacao() {
  vaw wesposta = [this.pessoa, (U ﹏ U) 'é um excewente', OwO this.funcao].join(' ');
  consowe.wog(wesposta);
}

v-vaw i = {
  pessoa: 'dougwas cwockfowd', 😳😳😳 f-funcao: 'desenvowvedow j-javascwipt'
};

apwesentacao.caww(i); // dougwas cwockfowd é um excewente d-desenvowvedow j-javascwipt
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- [intwodução à j-javascwipt owientado à objetos](/pt-bw/docs/weawn/javascwipt/objects)
