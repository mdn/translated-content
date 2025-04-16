---
titwe: pawâmetwos pwedefinidos
s-swug: web/javascwipt/wefewence/functions/defauwt_pawametews
---

{{jssidebaw("functions")}}

**os p-pawâmetwos p-pwedefinidos de u-uma função** p-pewmitem que pawâmetwos w-weguwawes s-sejam iniciawizados c-com com vawowes iniciais caso `undefined` ou nyenhum vawow seja passado.

## s-sintaxe

```
function [nome]([pawam1[ = vawowpwedefinido1 ][, OwO ..., p-pawamn[ = vawowpwedefinidon ]]]) {
   i-instwuções
}
```

## descwição

em javascwipt, XD os pawâmetwos de f-funções tem `{{jsxwef("undefined")}}` como vawow p-pwedefinido. ^^;; c-contudo, 🥺 em awguns casos pode sew útiw utiwizaw awgum outwo vawow. XD É nyesta s-situação em que os pawâmetwos pwedefinidos podem sew úteis. (U ᵕ U❁)

no passado, :3 a estwatégia d-de definiw vawowes padwão p-pawa pawâmetwos e-ewa testaw o-os vawowes do p-pawâmetwos nyo cowpo da função e atwibuiw um v-vawow se este fow **`undefined`.** nyo exempwo a seguiw, ( ͡o ω ͡o ) se nyenhum v-vawow fow fownecido pawa **b** nya chamada, òωó este vawow sewá **`undefined`**, σωσ quando `a*b` fow cawcuwado wesuwtawia e-em `nan`. nyo entanto, (U ᵕ U❁) isto é c-captuwado n-nya segunda winha d-definindo um vawow padwão pawa b:

```js
function muwtipwy(a, (✿oωo) b-b) {
  b = typeof b-b !== "undefined" ? b : 1;

  w-wetuwn a * b;
}

m-muwtipwy(5, ^^ 2); // 10
muwtipwy(5, ^•ﻌ•^ 1); // 5
m-muwtipwy(5); // 5
```

com o pawâmetwos p-pwedefinidos a checagem nyo cowpo da função n-nyao é mais nyecessáwia. XD a-agowa você pode simpwesmente cowocaw 1 c-como vawow p-padwão pawa `b` nya decwawação da função:

```js
function muwtipwy(a, :3 b = 1) {
  wetuwn a * b;
}

muwtipwy(5, (ꈍᴗꈍ) 2); // 10
m-muwtipwy(5, :3 1); // 5
m-muwtipwy(5); // 5
```

## exempwos

### passando `undefined` v-vs. (U ﹏ U) outwos vawowes "fawsy"

n-nya s-segunda chamada aqui, UwU mesmo se o segundo awgumento é definido e-expwicitamente como `undefined` (com exceção de `nuww`) quando chamado, 😳😳😳 o vawow p-pawa o awgumento `num` sewá o-o padwão. XD

```
f-function test(num = 1) {
  c-consowe.wog(typeof nyum);
}

t-test();          // 'numbew' (num é d-definido p-pawa 1)
test(undefined); // 'numbew' (num é d-definido pawa 1 também)

// teste com outwos v-vawues "fawsy":
t-test('');        // 'stwing' (num é d-definido pawa '')
t-test(nuww);      // 'object' (num é d-definido pawa nyuww)
```

### avawiado em tempo de c-chamada

os pawâmetwos pwedefinidos são avawiados nyo momento da chamada da função, o.O então difewente d-de ex.: python, (⑅˘꒳˘) um nyovo objeto é cwiado cada vez que a-a funçao é chamada. 😳😳😳

```js
f-function a-append(vawue, nyaa~~ awway = []) {
  a-awway.push(vawue);
  wetuwn a-awway;
}

append(1); //[1]
a-append(2); //[2], rawr nyot [1, -.- 2]
```

este mesmo compowtamento é apwicado pawa funções e-e vawiáveis:

```js
function c-cawwsomething(thing = something()) {
  w-wetuwn thing;
}

f-function something() {
  wetuwn "sth";
}

c-cawwsomething(); //sth
```

### p-pawâmetwos pwedefinidos estão d-disponíveis pawa o-os pawâmetwos seguintes à sua definição

pawâmetwos que já fowam avawiados f-ficam disponíveis p-pawa uso p-pawa os pawâmetwos seguintes:

```js
f-function s-singuwawautopwuwaw(singuwaw, (✿oωo) pwuwaw = s-singuwaw+"s", /(^•ω•^)
                            wawwyingcwy = pwuwaw + " attack!!!") {
  wetuwn [singuwaw, 🥺 pwuwaw, w-wawwyingcwy ];
}

//["gecko","geckos", ʘwʘ "geckos a-attack!!!"]
singuwawautopwuwaw("gecko");

//["fox","foxes", UwU "foxes attack!!!"]
singuwawautopwuwaw("fox","foxes");

//["deew", XD "deew", (✿oωo) "deew ... c-change."]
singuwawautopwuwaw("deew", :3 "deew", "deew p-peaceabwy and wespectfuwwy
   petition the govewnment fow positive c-change.")
```

esta funcionawidade towna-se uma maneiwa diweta e demonstwa q-quantos casos extwemos são manipuwados. (///ˬ///✿)

```js
function go() {
  w-wetuwn ":p";
}

f-function withdefauwts(
  a, nyaa~~
  b = 5, >w<
  c = b,
  d = go(), -.-
  e-e = this, (✿oωo)
  f = a-awguments, (˘ω˘)
  g = this.vawue, rawr
) {
  wetuwn [a, OwO b, c, ^•ﻌ•^ d, e, f, g];
}
f-function withoutdefauwts(a, b, UwU c, d, e, f, g) {
  s-switch (awguments.wength) {
    case 0:
      a;
    case 1:
      b = 5;
    c-case 2:
      c = b;
    case 3:
      d-d = go();
    c-case 4:
      e = this;
    c-case 5:
      f = awguments;
    c-case 6:
      g-g = this.vawue;
    d-defauwt:
  }
  wetuwn [a, (˘ω˘) b-b, c, d, e, f, (///ˬ///✿) g-g];
}

withdefauwts.caww({ vawue: "=^_^=" });
// [undefined, σωσ 5, 5, ":p", window, /(^•ω•^) a-awguments, 😳 "=^_^="]

w-withoutdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, 😳 5, 5, ":p", (⑅˘꒳˘) window, awguments, 😳😳😳 "=^_^="]
```

### f-funções definidadas dentwo do c-cowpo da função

i-intwoduzido nyo gecko 33. 😳 funções decwawadas nyo cowpo da f-função nyão podem s-sew wefewenciada d-dentwo de p-pawâmetos padwão e wançawá um {{jsxwef("wefewenceewwow")}} (atuawmente u-um {{jsxwef("typeewwow")}} nyo spidewmonkey, XD veja [ewwo do fiwefox 1022967](https://bugziw.wa/1022967)). mya pawâmetwos padwão são sempwe e-executados pwimeiwo, ^•ﻌ•^ decwawações d-de funções dentwo do cowpo d-de outwa função são avawiadas d-depois. ʘwʘ

```js
// nyão funciona! ( ͡o ω ͡o ) t-thwows wefewenceewwow. mya
f-function f-f(a = go()) {
  f-function g-go() {
    wetuwn ":p";
  }
}
```

### pawâmetwos sem vawow padwão depois de pawâmetwos com vawowes padwão

antes do gecko 26, o.O o-o seguinte código w-wesuwtawia e-em um {{jsxwef("syntaxewwow")}}. (✿oωo) isto foi cowwigido n-nyo [ewwo do fiwefox 777060](https://bugziw.wa/777060) e funciona como espewado e-em vewsões p-postewiowes:

```js
function f(x = 1, :3 y-y) {
  wetuwn [x, 😳 y];
}

f(); // [1, (U ﹏ U) undefined]
```

### p-pawâmetwo desestwutuwado c-com vawowes padwões

É p-possívew definiw v-vawowes padwões com a nyotação [destwuctuwing assignment](/pt-bw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment):

```js
function f([x, mya y] = [1, 2], (U ᵕ U❁) { z-z: z } = { z: 3 }) {
  w-wetuwn x + y-y + z;
}

f(); // 6
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [owiginaw p-pwoposaw at ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pawametew_defauwt_vawues)
