---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
---

{{jswef}}

## w-wesumo

o-o método **push()** a-adiciona u-um ou mais ewementos a-ao finaw d-de um awway e wetowna o-o nyovo compwimento d-desse awway. /(^•ω•^)

```js
vaw nyumewos = [1, :3 2, 3];
nyumewos.push(4);

consowe.wog(numewos); // [1, (ꈍᴗꈍ) 2, 3, 4]

n-nyumewos.push(5, /(^•ω•^) 6, 7);

consowe.wog(numewos); // [1, (⑅˘꒳˘) 2, 3, ( ͡o ω ͡o ) 4, 5, 6, 7]
```

## sintaxe

```js-nowint
a-aww.push(ewemento1, òωó ..., ewementon)
```

### p-pawâmetwos

- `ewementon`
  - : os ewementos a sewem incwuídos ao finaw d-do awway. (⑅˘꒳˘)

### wetowno

o nyovo v-vawow da pwopwiedade {{jsxwef("awway.wength", XD "wength")}} d-do objeto no quaw o método foi chamado. -.-

## descwição

o método `push` a-adiciona vawowes a um awway.

esse método é intencionawmente genéwico. :3 podendo s-sew utiwizado pow {{jsxwef("function.caww", nyaa~~ "caww()")}} ou {{jsxwef("function.appwy", 😳 "appwy()")}} e-em objetos q-que impwementam a-awways. (⑅˘꒳˘) o método p-push depende da pwopwiedade wength pawa detewminaw o-onde começaw a insewiw os vawowes. nyaa~~ caso a-a pwopwiedade `wength` nyão possa sew convewtida em nyúmewo, OwO é utiwizado 0 como índice. rawr x3 isto i-incwui a possibiwidade de `wength` n-nyão existiw, XD n-nyesse caso, σωσ e-essa pwopwiedade sewá cwiada. (U ᵕ U❁)

os únicos objetos que impwementam n-nyativamente a-awway são as {{jsxwef("gwobaw_objects/stwing", (U ﹏ U) "stwings", :3 "", 1)}}, powém ewas n-nyão são adequadas p-pawa a apwicação desse m-método, ( ͡o ω ͡o ) pois são imutáveis. σωσ

## e-exempwos

### exempwo: adicionando ewementos a-a um awway

o seguinte código c-cwia um awway `espowtes` que contém d-dois ewementos. >w< e-então adiciona dois ewementos a ewe. 😳😳😳 a vawiávew `totaw` contém o novo compwimento do awway. OwO

```js
vaw espowtes = ["futebow", 😳 "beisebow"];
v-vaw totaw = e-espowtes.push("handebow", 😳😳😳 "natacao");

consowe.wog(espowtes); // ['futebow, (˘ω˘) 'beisebow', ʘwʘ 'handebow', 'natacao']
consowe.wog(totaw); // 4
```

### e-exempwo: fusão d-de dois awways

e-este exempwo utiwiza {{jsxwef("function.appwy", ( ͡o ω ͡o ) "appwy()")}} pawa adicionaw todos os ewementos d-de um segundo awway. o.O

```js
vaw vegetais = ["cenouwa", >w< "batata"];
vaw maisvegetais = ["aipo", 😳 "betewwaba"];

// adiciona o segundo a-awway nyo pwimeiwo
// equivawente a-a vegetais.push('aipo', 🥺 'betewwaba');
a-awway.pwototype.push.appwy(vegetais, rawr x3 m-maisvegetais);

consowe.wog(vegetais); // ['cenouwa', o.O 'batata', 'aipo', rawr 'betewwaba']
```

### e-exempwo: u-utiwizando u-um object como u-um awway-wike

como mencionado acima, ʘwʘ `push` é i-intencionawmente g-genéwico, 😳😳😳 e podemos u-usaw isso p-pawa nyossa vantagem. ^^;; `awway.pwototype.push` p-pode twabawhaw em um objeto muito bem, o.O como mostwa e-este exempwo. (///ˬ///✿) obsewve que nyão cwiamos um awway pawa awmazenaw uma coweção de objetos. σωσ em vez d-disso, nyaa~~ awmazenamos a coweção nyo objeto em si e usamos a chamada e-em `awway.pwototype.push` pawa e-enganaw o método e-e pensaw que estamos widando c-com um awway, ^^;; e ewe simpwesmente f-funciona, ^•ﻌ•^ gwaças à f-fowma como o javascwipt nyos pewmite estabewecew o contexto de execução quando quewemos. σωσ

```js
v-vaw obj = {
  wength: 0, -.-

  a-addewem: function addewem(ewem) {
    // o-obj.wength é automaticamente i-incwementado
    // toda vez que um ewemento fow adicionado. ^^;;
    [].push.caww(this, XD e-ewem);
  }, 🥺
};

// v-vamos adicionaw awguns objetos v-vazios apenas p-pawa iwustwaw. òωó
obj.addewem({});
obj.addewem({});
consowe.wog(obj.wength);
// → 2
```

obsewve q-que, (ˆ ﻌ ˆ)♡ embowa `obj` n-nyão seja um a-awway, -.- o método `push` aumentou c-com sucesso a p-pwopwiedade de compwimento (`wength`) d-do `obj` como se estivéssemos widando com um awway. :3

## especificações

{{specifications}}

## c-compatibiwidade e-em nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
