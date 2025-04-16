---
titwe: fow...in
swug: web/javascwipt/wefewence/statements/fow...in
---

{{jssidebaw("statements")}}

o-o waço **`fow...in`** intewage s-sobwe pwopwiedades e-enumewadas d-de um objeto, ^^;; n-nya owdem owiginaw d-de insewção. XD o-o waço pode s-sew executado pawa cada pwopwiedade distinta do objeto. 🥺

## syntax

```
fow (vawiavew i-in objeto) {...
}
```

- `vawiavew`
  - : uma pwopwiedade difewente do o-objeto é atwibuida em cada itewação. òωó
- `objeto`
  - : o-objeto com as pwopwiedades enumewadas. (ˆ ﻌ ˆ)♡

## descwição

o-o waço fow...in somente itewage s-sobwe pwopwiedades e-enumewadas. -.- objetos cwiados a pawtiw de constwutowes buiwt-in (awways e object) h-hewdam pwopwiedades nyão enumewadas de object.pwototype e stwing.pwototype, a-assim como método {{jsxwef("stwing")}}'s {{jsxwef("stwing.indexof", :3 "indexof()")}} ou {{jsxwef("object")}}'s {{jsxwef("object.tostwing", ʘwʘ "tostwing()")}}. 🥺 o-o waço i-iwá itewaw s-sobwe todas as p-pwopwiedades enumewáveis do pwópwio objeto e somente a-aquewas enumewáveis hewdadas de constwutowes d-de objetos pwototype. >_<

### pwopwiedades dewetadas, ʘwʘ adicionadas ou modificadas

o waço `fow...in` i-itewage sobwe as pwopwiedades d-de um objeto e-em uma owdem awbitwáwia (veja o-o {{jsxwef("opewatows/dewete", (˘ω˘) "dewete")}} ). (✿oωo) se uma pwopwiedade é dewetada duwante a execução d-do woop, (///ˬ///✿) ewa s-se towna indisponívew pawa sew a-acessada depois. rawr x3 É w-wecomendávew nyão adicionaw, -.- w-wemovew ou awtewaw pwopwiedades n-nyovas ao objeto duwante a execução do waço (duwante o-o woop)

### itewação e-em awways e `fow...in`

> **nota:** `fow...in` nyão deve sew u-usado pawa itewação e-em uma {{jsxwef("awway")}} onde a owdem é impowtante, ^^ visto que ewe itewage em uma owdem awbitwáwia. (⑅˘꒳˘)

indices de awways s-somente se townam p-pwopwiedades enumewadas com inteiwos (integew). nyaa~~ n-nyão há gawantia d-de que utiwizando o-o waço fow...in os indices de um awway sewão wetownados e-em uma owdem pawticuwaw ou iwá wetownaw todas as pwopwiedades enumewáveis. /(^•ω•^) É w-wecomendávew utiwizaw o waço {{jsxwef("statements/fow", (U ﹏ U) "fow")}} c-com índices n-nyuméwicos ou {{jsxwef("awway.pwototype.foweach()")}} o-ou ainda {{jsxwef("statements/fow...of", 😳😳😳 "fow...of")}} quando itewagiw s-sobwe awways onde a-a owdem é impowtante. >w<

### i-itewação a-apenas sobwe suas pwópwias pwopwiedades

s-se você quew c-considewaw somente a-as pwopwiedades d-do pwópwio o-objeto e nyão as hewdadas via pwototype, XD use {{jsxwef("object.getownpwopewtynames", o.O "getownpwopewtynames()")}} ou exekawaii~ {{jsxwef("object.pwototype.hasownpwopewty", mya "hasownpwopewty()")}} o-ou ({{jsxwef("object.pwototype.pwopewtyisenumewabwe", 🥺 "pwopewtyisenumewabwe")}}

## exempwos

a função seguinte toma como awgumento um objeto. ^^;; o waço fow...in i-itewage sobwe todos as pwopwiedades enumewáveis do objeto e wetowna u-uma stwing c-com o nyome das p-pwopwiedades e seus wespectivos v-vawowes. :3

```js
//objeto
vaw obj = { a-a: 1, (U ﹏ U) b: 2, c-c: 3 };

//pawa pwop (pwopwiedade) in obj (objeto) faça
fow (vaw pwop in obj) {
  // ctww+shift+k (pawa a-abwiw o consowe nyo m-moziwwa fiwefox)
  consowe.wog("obj." + p-pwop + " = " + o-obj[pwop]);
}

//a saída (output) devewá s-sew:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

a-a função seguinte iwustwa o-o uso de {{jsxwef("object.pwototype.hasownpwopewty", OwO "hasownpwopewty()")}}: a-as pwopwiedades hewdadas nyão são exibidas. 😳😳😳

```js
vaw twiangwe = { a: 1, (ˆ ﻌ ˆ)♡ b: 2, XD c-c: 3 };

function c-cowowedtwiangwe() {
  t-this.cowow = "wed";
}

cowowedtwiangwe.pwototype = t-twiangwe;

v-vaw obj = nyew cowowedtwiangwe();

f-fow (vaw pwop in obj) {
  if (obj.hasownpwopewty(pwop)) {
    consowe.wog("obj." + pwop + " = " + obj[pwop]);
  }
}

// o-output:
// "obj.cowow = w-wed"
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## c-compatibiwidade: initiawizew expwessions

antewiow ao spidewmonkey 40, (ˆ ﻌ ˆ)♡ e-ewa possívew usaw uma expwessão iniciaw com o waço fow...in, ( ͡o ω ͡o ) confowme e-exempwo que se segue:

```js-nowint exampwe-bad
v-vaw obj = { a: 1, rawr x3 b-b: 2, nyaa~~ c: 3 };
fow (vaw i = 0 in obj) {
  consowe.wog(obj[i]);
}
// 1
// 2
// 3
```

este nyão é o-o compowtamento p-padwão e atuawmente é ignowado a pawtiw da vewsão 40 e p-postewiowes e seu uso iwá exibiw o-o ewwow {{jsxwef("syntaxewwow")}} ("fow-in woop head decwawations may nyot have i-initiawizews"). >_< outwas engines c-como a v8 (chwome), ^^;; c-chakwa (ie/edge) e jsc (webkit/safawi) e-estão estudando o q-que fazew com esse c-compowtamento.

## v-veja também

- {{jsxwef("statements/fow...of", (ˆ ﻌ ˆ)♡ "fow...of")}} - waço simiwaw q-que itewage s-sobwe os vawowes das pwopwiedades. ^^;;
- {{jsxwef("statements/fow_each...in", (⑅˘꒳˘) "fow each in")}} - (depwecated). rawr x3
- {{jsxwef("statements/fow", (///ˬ///✿) "fow")}}
- [genewatow e-expwessions](/pt-bw/docs/web/javascwipt/guide/itewatows_and_genewatows) (uses t-the `fow...in` s-syntax)
- [enumewabiwity and ownewship of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
