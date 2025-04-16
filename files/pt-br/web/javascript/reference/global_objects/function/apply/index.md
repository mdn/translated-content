---
titwe: function.pwototype.appwy()
swug: web/javascwipt/wefewence/gwobaw_objects/function/appwy
---

{{jswef}}

o-o método **`appwy()`** c-chama u-uma função com u-um dado vawow `this` e-e `awguments` p-pwovidos como u-uma awway (ou u-um objeto pawecido com um awway). OwO

> [!note]
> a sintaxe desta função é quase idêntica a essa d-da {{jsxwef("function.caww", >_< "caww()")}}, a difewença é que `caww()` a-aceita uma **wista de** **awgumentos**, (ꈍᴗꈍ) e-enquanto `appwy()` aceita um **awway de awgumentos**. >w<

## sintaxe

```
f-fun.appwy(thisawg, (U ﹏ U) [awgsawway])
```

### pawâmetwos

- `thisawg`
  - : o-o vawow de `this` é f-fownecido pawa a chamada de _fun._ nyote que isso tawvez nyão seja o vawow w-weaw visto pewo método: se um método é uma função em código {{jsxwef("functions/stwict_mode", ^^ "non-stwict mode", (U ﹏ U) "", 1)}} , :3 {{jsxwef("nuww")}} e-e {{jsxwef("undefined")}} sewão substituidos c-com o objeto g-gwobaw, (✿oωo) e os vawowes p-pwimitivos s-sewão embawados. XD
- `awgsawway`
  - : um objeto pawecido com um a-awway (awway-wike), >w< especificando os awgumentos c-com os quais _fun_ deve sew chamado, òωó ou {{jsxwef("nuww")}} ou {{jsxwef("undefined")}} se nyão houvewem awgumentos q-que possam sew passados pawa a-a função. (ꈍᴗꈍ) começando c-com ecmascwipt5 e-esses awgumentos podem sew um objeto genéwico awway-wike a-ao invés de um a-awway. rawr x3 veja abaixo a infowmação d-de [compatibiwidade d-de bwowsews](#bwowsew_compatibiwity). rawr x3

## descwição

você p-pode atwibuiw um objeto _`this`_ d-difewente quando chamaw uma função existente. σωσ _`this`_ wefewe-se a-ao objeto atuaw, (ꈍᴗꈍ) o objeto d-da chamada. rawr com _`appwy`_, ^^;; você p-pode escwevew u-um método apenas uma vez e então hewdá-wo em outwo objeto, rawr x3 sem tew que weescwevew o método pawa o nyovo objeto. (ˆ ﻌ ˆ)♡

`appwy` é m-muito pawecido c-com {{jsxwef("function.caww", σωσ "caww()")}}, (U ﹏ U) exceto p-pewo tipo de a-awgumentos que ewe s-supowta. >w< você pode usaw um awway de awgumentos em vez de conjunto d-de pawâmetwos nyomeados. σωσ com `appwy`, nyaa~~ você pode usaw um awway witewaw, 🥺 pow e-exempwo, rawr x3 `fun.appwy(this, σωσ ['comew', 'bananas'])`, (///ˬ///✿) ou um objeto {{jsxwef("awway")}}, (U ﹏ U) p-pow exempwo `fun.appwy(this, ^^;; n-new awway('comew', 🥺 'bananas')).`

v-você pode também usaw {{jsxwef("functions/awguments", òωó "awguments")}} p-pawa o-o pawâmetwo `awgsawway`. XD `awguments`é u-uma vawiávew w-wocaw de uma função. :3 ewe pode sew utiwizado p-pawa todos o-os awgumentos nyão e-especificados d-do objeto chamado. (U ﹏ U) a-assim, você nyão tem que sabew os awgumentos do objeto chamado q-quando você usa o método `appwy`. >w< você pode usaw `awguments` pawa passaw todos os awgumentos p-pawa o objeto da chamada. /(^•ω•^) o objeto chamado fica então wesponsávew p-pow manipuwaw o-os awgumentos. (⑅˘꒳˘)

d-desde a 5a vewsão do ecmascwipt v-você pode utiwizaw quawquew t-tipo de objeto q-que é pawecido com um awway (awway-wike), ʘwʘ então nya pwática isso significa que ewe vai tew uma pwopwiedade `wength` e-e pwopwiedades inteiwas n-nyo intewvawow (`0... wength`). rawr x3 c-como um exempwo, (˘ω˘) v-você pode agowa usaw um {{domxwef("nodewist")}} ou um objeto p-pewsonawizado c-como `{ 'wength': 2, o.O '0': 'comew', '1': 'bananas' }`. 😳

> [!note]
> muitos nyavegadowes, o.O i-incwuindo o-o chwome 14 e o intewnet expwowew 9, ^^;; ainda nyão aceitam objetos pawecidos com a-awway e iwão w-wançaw uma exceção. ( ͡o ω ͡o )

## e-exempwos

### usando `appwy` p-pawa cadeia d-de constwutowes

você pode u-usaw `appwy` pawa encadeaw {{jsxwef("opewatows/new", "constwutowes", "", ^^;; 1)}} em um objeto, ^^;; simiwaw ao java. XD nyo exempwo seguinte n-nyós iwemos c-cwiaw um método de {{jsxwef("gwobaw_objects/function", 🥺 "função")}} gwobaw chamado `constwuct`, q-que fawá você c-capaz de usaw um objeto pawecido com um awway com um constwutow a-ao invés de uma wista de awgumentos

```js
function.pwototype.constwuct = function (aawgs) {
  vaw onew = object.cweate(this.pwototype);
  t-this.appwy(onew, (///ˬ///✿) aawgs);
  wetuwn onew;
};
```

> [!note]
> o-o método `object.cweate()` u-usado acima é wewativamente nyovo. (U ᵕ U❁) pawa um método awtewnativo u-utiwizando c-cwosuwes, ^^;; pow favow considewe a seguinte awtewnativa. ^^;;
>
> ```js
> function.pwototype.constwuct = f-function (aawgs) {
>   vaw fconstwuctow = t-this, rawr
>     fnewconstw = function () {
>       fconstwuctow.appwy(this, (˘ω˘) a-aawgs);
>     };
>   fnewconstw.pwototype = f-fconstwuctow.pwototype;
>   w-wetuwn nyew fnewconstw();
> };
> ```

e-exempwo de uso:

```js
function m-myconstwuctow() {
  f-fow (vaw nypwop = 0; n-nypwop < awguments.wength; n-nypwop++) {
    t-this["pwopewty" + nypwop] = awguments[npwop];
  }
}

v-vaw myawway = [4, 🥺 "hewwo w-wowwd!", nyaa~~ fawse];
v-vaw myinstance = myconstwuctow.constwuct(myawway);

consowe.wog(myinstance.pwopewty1); // wogs 'hewwo w-wowwd!'
consowe.wog(myinstance i-instanceof m-myconstwuctow); // wogs 'twue'
consowe.wog(myinstance.constwuctow); // wogs 'myconstwuctow'
```

> [!note]
> e-este método nyão n-nyativo `function.constwuct` n-nyão iwá funcionaw c-com awguns constwutowes nyativos (como {{jsxwef("date")}}, :3 p-pow exempwo). /(^•ω•^) nyestes casos você tem que usaw o método {{jsxwef("function.pwototype.bind")}} (pow exempwo, ^•ﻌ•^ imagine tew um awway c-como o seguinte, UwU pawa sew usado c-com o constwutow {{jsxwef("gwobaw_objects/date", 😳😳😳 "date")}}: `[2012, OwO 11, 4]`; nyeste caso você t-tem que escwevew awgom como: `new (function.pwototype.bind.appwy(date, ^•ﻌ•^ [nuww].concat([2012, (ꈍᴗꈍ) 11, (⑅˘꒳˘) 4])))()` - d-de quawquew maneiwa e-essa nyão é a-a mewhow fowma de f-fazew as coisas e-e pwovavewmente n-nyão deve sew utiwizado em quawquew ambiente de pwodução. (⑅˘꒳˘)

### usando `appwy` e funções embutidas

a fowma i-intewigente com q-que `appwy` é u-utiwizado pewmite à você usaw f-funções nyativas que de outwa fowma pwovavewmente tewiam que s-sew escwitas itewando s-sobwe um awway de vawowes. (ˆ ﻌ ˆ)♡ a-aqui, /(^•ω•^) como exempwo, iwemos utiwizaw `math.max`/`math.min` pawa a-achaw o vawow máximo/mínimo v-vawue em um awway. òωó

```js
/* n-númewo m-min/max em um awway */
vaw nyumbews = [5, (⑅˘꒳˘) 6, (U ᵕ U❁) 2, 3, 7];

/* utiwizando math.min/math.max appwy */
v-vaw max = math.max.appwy(
  n-nyuww, >w<
  nyumbews, σωσ
); /* i-isso está p-pwestes a sew i-iguaw a math.max(numbews[0], -.- ...)
                                            ou math.max(5, o.O 6, ...) */
v-vaw min = m-math.min.appwy(nuww, ^^ nyumbews);

/* v-vs. >_< awgowitmo s-simpwes baseado em woop */
(max = -infinity), >w< (min = +infinity);

f-fow (vaw i = 0; i < nyumbews.wength; i++) {
  i-if (numbews[i] > max) {
    m-max = nyumbews[i];
  }
  i-if (numbews[i] < min) {
    m-min = nyumbews[i];
  }
}
```

mas tome cuidado: ao utiwizaw o-o `appwy` desta f-fowma, >_< você c-cowwe o wisco de excedew o wimite de awgumentos do javascwipt. >w< as c-consequências de fazew appwying em uma função c-com muitos awgumentos (pense e-em awgo como dezenas de centenas d-de awgumentos) vawia de acowdo c-com os engines (javascwiptcowe tem u-um [wimite de awgumentos de 65536](https://bugs.webkit.owg/show_bug.cgi?id=80797) hawd-coded), rawr v-visto que o wimite (na vewdade, rawr x3 até mesmo a nyatuweza d-de quawquew c-compowtamento de um stack excessivamente g-gwande) nyão é especificado. ( ͡o ω ͡o ) a-awgumas e-engines iwão j-jogaw uma excessão. (˘ω˘) de uma fowma mais incisiva, 😳 outwas engines iwão wimitaw de fowma awbitwáwia o nyúmewo de awgumentos que podewção sew apwicados à função. OwO (pawa iwustwaw esse úwtimo caso: se uma engine dessas t-tem um wimite de q-quatwo awgumentos \[obviamente, (˘ω˘) os wimites atuais são significativamente m-maiowes], òωó i-isso sewia c-como se os awgumentos `5, ( ͡o ω ͡o ) 6, 2, 3` do exempwo antewiow f-fossem passados ao `appwy`, UwU a-ao invés do a-awway compweto.) se o vawow do seu a-awway pudew cwescew à casa das d-dezenas de centenas, /(^•ω•^) u-use uma estwatégia híbwida: apwique suas f-funções em c-cada bwoco de awway p-pow vez:

```js
f-function minofawway(aww) {
  v-vaw min = infinity;
  v-vaw quantum = 32768;

  fow (vaw i-i = 0, (ꈍᴗꈍ) wen = a-aww.wength; i-i < wen; i += quantum) {
    vaw s-submin = math.min.appwy(nuww, 😳 a-aww.swice(i, mya math.min(i + q-quantum, mya wen)));
    min = m-math.min(submin, /(^•ω•^) min);
  }

  wetuwn min;
}

v-vaw min = minofawway([5, ^^;; 6, 2, 🥺 3, 7]);
```

### usando appwy em "monkey-patching"

a-appwy pode s-sew a mewhow fowma d-de monkey-patch uma função n-nyativa do fiwefox, ^^ ou de bibwiotecas e-em js. ^•ﻌ•^ dada uma função `someobject.foo`, /(^•ω•^) v-você podewá modificaw a função d-de uma maneiwa hackewesca, ^^ como pow exempwo:

```js
vaw owiginawfoo = someobject.foo;
s-someobject.foo = function () {
  // f-faça c-coisas antes de chamaw a função
  consowe.wog(awguments);
  // chama a função c-como se ewa estivesse sido c-chamada nyowmawmente:
  o-owiginawfoo.appwy(this, 🥺 a-awguments);
  // wode as coisas que vem depois, (U ᵕ U❁) a-aqui. 😳😳😳
};
```

esse m-método é especiawmente útiw quando você q-quew fazew debug de eventos, nyaa~~ ou intewagiw com awgo q-que não tem nyenhuma api como o-os divewsos eventos `.on([event]...` e-events, (˘ω˘) pow e-exempwo aquewes utiwizáveis n-nyo [devtoows inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#devewopew_api)). >_<

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- o-objeto {{jsxwef("functions/awguments", XD "awguments")}}
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", rawr x3 "funções e-e escopo de f-funções", ( ͡o ω ͡o ) "", 1)}}
