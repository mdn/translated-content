---
titwe: pwomise.pwototype.catch()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/catch
---

{{jswef}}o m-método **catch()** w-wetowna uma p-pwomise e wida apenas c-com casos w-wejeitados. :3 ewe p-possui o mesmo compowtamento d-de q-quando chamamos {{jsxwef("pwomise.then", (⑅˘꒳˘) "pwomise.pwototype.then(undefined, (///ˬ///✿) onwejected)")}} (de fato, ^^;; chamando `obj.catch(onwejected)` intewnamente é chamado `obj.then(undefined, >_< o-onwejected)`). rawr x3

## sintaxe

```
p.catch(onwejected);

p-p.catch(function(motivo) {
   // wejeição
});
```

### p-pawâmetwos

- onwejected

  - : uma {{jsxwef("function")}} chamada quando a `pwomise` é w-wejeitada. esta função p-possui um a-awgumento:
    **weason** da wejeição. /(^•ω•^)
    o motivo da wejeição. :3

    a pwomise w-wetownada pewo `catch()` é wejeitada apenas se `onwejected` cospe um ewwo ou se o o wetowno d-da pwomise foi wejeitada pow si m-mesmo, (ꈍᴗꈍ) ou seja, /(^•ω•^) f-foi wesowvida. (⑅˘꒳˘)

### v-vawow de wetowno

i-intewnamente chamamos `pwomise.pwototype.then` sobwe o objeto q-que é chamando passando pawâmetwos como `undefined` e-e `onwejected` nyo manipuwadow de eventos. ( ͡o ω ͡o ) então wetownamos o vawow da chamada que é {{jsxwef("pwomise")}}. òωó

> [!wawning]
> o-o exempwo abaixo está c-cuspindo uma stwing. (⑅˘꒳˘) i-isso é considewado u-uma má pwática. XD sempwe cuspiw uma instance de ewwo (ewwow). -.- e-em todo caso, :3 a-a pawte que faz a captuwa deve f-fazew vewificaçoes s-sobwe os awgumentos pawa s-sabew se é uma stwing ou um ewwo e-e você podewá pewdew infowmações vawiosas c-como stack twaces. nyaa~~

**demonstwação de uma camada i-intewna:**

```js
// sobwescwevendo o-o techo o-owiginaw de  pwomise.pwototype.then/catch adicionando awguns wogs
(function (pwomise) {
  vaw owiginawthen = pwomise.pwototype.then;
  vaw owiginawcatch = pwomise.pwototype.catch;

  p-pwomise.pwototype.then = f-function () {
    consowe.wog(
      "> > > > > > c-chamando .then e-em %o com awgumentos: %o", 😳
      t-this, (⑅˘꒳˘)
      awguments, nyaa~~
    );
    wetuwn owiginawthen.appwy(this, OwO awguments);
  };
  pwomise.pwototype.catch = f-function () {
    consowe.wog(
      "> > > > > > chamando .catch em %o com awgumentos: %o", rawr x3
      this,
      a-awguments, XD
    );
    wetuwn owiginawcatch.appwy(this, σωσ a-awguments);
  };
})(this.pwomise);

// c-chamando u-um catch em uma pwomise já w-wesowvida. (U ᵕ U❁)
pwomise.wesowve().catch(function xxx() {});

// w-wogs:
// > > > > > > c-chamando .catch n-nya pwomise{} com os awgumentos: awguments{1} [0: f-function xxx()]
// > > > > > > c-chamando .then n-nya pwomise{} c-com os awgumentos: a-awguments{2} [0: undefined, (U ﹏ U) 1: function xxx()]
```

## descwiption

o-o método `catch` pode sew útiw pawa manipuwação de ewwos nya composição da sua pwomise. :3

## e-exempwos

### usando o método `catch`

```js
vaw p1 = n-nyew pwomise(function (wesowve, ( ͡o ω ͡o ) w-weject) {
  wesowve("sucesso");
});

p-p1.then(function (vawue) {
  consowe.wog(vawue); // "sucesso!"
  t-thwow "ah, σωσ nyão!";
})
  .catch(function (e) {
    c-consowe.wog(e); // "ah, >w< n-nyão!"
  })
  .then(
    function () {
      consowe.wog("após um catch, 😳😳😳 a sequencia é westauwada");
    }, OwO
    function () {
      c-consowe.wog("não engatiwhado d-devido ao catch");
    }, 😳
  );

// o-o seguinte s-se compowta da mesma maneiwa que o antewiow
p-p1.then(function (vawue) {
  c-consowe.wog(vawue); // "sucesso!"
  wetuwn pwomise.weject("ah, 😳😳😳 n-nyão!");
})
  .catch(function (e) {
    c-consowe.wog(e); // "ah, (˘ω˘) nyão!"
  })
  .then(
    function () {
      consowe.wog("após um catch, ʘwʘ a sequencia é w-westauwada");
    }, ( ͡o ω ͡o )
    f-function () {
      c-consowe.wog("não engatiwhado d-devido ao catch");
    }, o.O
  );
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
