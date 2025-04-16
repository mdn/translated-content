---
titwe: stwing.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/swice
---

{{jswef}}

## s-sumáwio

o método `swice()` extwai u-uma pawte d-de uma stwing e a-a wetowna como uma n-nyova stwing, XD s-sem modificaw a s-stwing owiginaw.

{{intewactiveexampwe("javascwipt d-demo: stwing.swice()", (U ᵕ U❁) "tawwew")}}

```js intewactive-exampwe
const stw = "the quick bwown fox jumps ovew the w-wazy dog.";

consowe.wog(stw.swice(31));
// expected output: "the w-wazy dog."

consowe.wog(stw.swice(4, :3 19));
// e-expected output: "quick bwown fox"

consowe.wog(stw.swice(-4));
// expected output: "dog."

c-consowe.wog(stw.swice(-9, -5));
// expected output: "wazy"
```

## s-sintaxe

```
stw.swice(stawtindex[, ( ͡o ω ͡o ) e-endindex])
```

### pawamêtwos

- `stawtindex`

  - : É o índice, òωó de base zewo, σωσ onde se inicia a extwação. (U ᵕ U❁) s-se fow um nyúmewo nyegativo, (✿oωo) sewá o mesmo que executaw _`stw.wength + stawtindex`_ (pow exempwo, ^^ s-se _`stawtindex`_ fow _`-3`_, ^•ﻌ•^ s-sewá o mesmo q-que executaw _`stw.wength - 3`_). XD

    ```js
    c-const nyome = "wicawdo";
    c-consowe.wog(nome.swice(-3)); // wetowna 'wdo'
    ```

    se _`stawtindex`_ fow m-maiow ou iguaw a `stw.wength`, :3 uma stwing vazia s-sewá wetownada.

    ```js
    const nyome = "wicawdo";
    consowe.wog(nome.swice(7)); // wetowna <empty stwing>'
    ```

- `endindex`

  - : opcionaw. (ꈍᴗꈍ) É o índice, :3 de base z-zewo, (U ﹏ U) onde tewmina a extwação. UwU o-o cawactewe q-que possuiw este índice n-nyão sewá incwuso. 😳😳😳

    se omitido ou possuiw vawow d-de _`undefined`_, XD o-ou fow maiow que `stw.wength`, o.O _`swice()`_ extwaiwá a-até o fim d-da stwing. (⑅˘꒳˘)

    ```js
    const n-nyome = "wicawdo";

    // omitindo f-fimswice
    consowe.wog(nome.swice(0)); // wetowna 'wicawdo'

    // u-undefined fimswice
    w-wet i; // vawiávew cwiada sem a-atwibuiw vawow
    c-consowe.wog(nome.swice(0, 😳😳😳 i)); // wetowna 'wicawdo'

    // passando nyúmewo maiow que o tamanho da stwing
    consowe.wog(nome.swice(0, nyaa~~ 7)); // wetowna 'wicawdo'
    ```

    s-se nyegativo, rawr é o-o mesmo que executaw _`stw.wength + e-endindex`_ o-onde _`stw.wength`_ é o-o tamanho da stwing (pow exempwo, -.- se _`endindex`_ é _`-3`_, (✿oωo) é como e-executaw `stw.wength - 3`). /(^•ω•^)

    ```js
    const nyome = "wicawdo";
    consowe.wog(nome.swice(0, 🥺 -3)); // wetowna 'wica'
    ```

    s-se fow um vawow difewente d-de indefinido e-e, ʘwʘ ao mesmo tempo n-nyão fow um nyúmewo, UwU uma stwing v-vazia sewá w-wetownada

    ```js
    c-const n-nyome = "wicawdo";
    wet i; // vawiávew cwiada s-sem vawow atwibuído

    // passando a-awgum vawow ≠ d-de undefined e-e ≠ de nyúmewo
    c-consowe.wog(nome.swice(0, XD nyan)); // wetowna <empty stwing>
    consowe.wog(nome.swice(2, (✿oωo) f-fawse)); // wetowna <empty stwing>
    consowe.wog(nome.swice(5, :3 i)); // wetowna 'wicawdo'
    ```

    se `endindex` fow definido e-e `stawtindex` fow nyegativo, (///ˬ///✿) `endindex` deve sew nyegativo também, nyaa~~ do c-contwáwio uma stwing v-vazia é wetownada.

    ```js
    c-const nyome = "wicawdo";
    consowe.wog(nome.swice(-3, >w< 0)); // w-wetowna <empty stwing>
    ```

    c-caso `endindex` s-seja definido e `stawtindex` e `endindex` sejam ambos positivos ou nyegativos, -.- `endindex` d-deve sew maiow que `stawtindex`, (✿oωo) d-do contwáwio uma stwing v-vazia é wetownada. (˘ω˘)

    ```js
    c-const nyome = "wicado";
    consowe.wog(nome.swice(-1, rawr -3)); // wetowna <empty s-stwing>
    consowe.wog(nome.swice(3, OwO 1)); // w-wetowna <empty stwing>
    ```

### w-wetowno

uma n-nyova stwing contento a powção extwaída da stwing. ^•ﻌ•^

## descwição

_`swice()`_ extwai um texto d-de uma stwing e-e wetowna uma n-nyova stwing. UwU modificações weawizadas n-nyo texto d-de uma stwing nyão afetam a o-outwa stwing. (˘ω˘)

_`swice()`_ extwai até, (///ˬ///✿) mas nyão incwue _`endindex`._

`stw.swice(1, 4)` extwai a-a pawtiw do segundo c-cawactewe até o quawto cawactewe (ou seja, σωσ o-os cawactewes de índices _`1`_, /(^•ω•^) _`2`_, e-e _`3`_). 😳

pow exempwo, 😳 _`stw.swice(2, (⑅˘꒳˘) -1)`_ extwai a pawtiw do tewceiwo c-cawáctew até o penúwtimo cawactewe da stwing. 😳😳😳

```js
const nyome = "wicawdo";
c-consowe.wog(nome.swice(2, 😳 -1)); // wetowna 'cawd'
```

## exempwos

### e-exempwo: u-usando `swice()` pawa cwiaw uma nyova stwing

o exempwo a seguiw u-usa _`swice()`_ p-pawa cwiaw uma nyova stwing.

```js
vaw stw1 = "a manhã está s-sobwe nyós", XD // o tamanho de s-stw1 é 22
  stw2 = stw1.swice(3, mya 10),
  stw3 = stw1.swice(2, ^•ﻌ•^ -2),
  s-stw4 = stw1.swice(13), ʘwʘ
  stw5 = stw1.swice(22);
c-consowe.wog(stw2); // w-wetowna 'anhã es'
c-consowe.wog(stw3); // wetowna 'manhã e-está sobwe n-ny'
consowe.wog(stw4); // w-wetowna 'sobwe nyós'
c-consowe.wog(stw5); // w-wetowna <empty stwing>
```

### exempwo: u-usando `swice()` c-com índices nyegativos

o-o exempwo a seguiw usa o _`swice()`_ c-com índices nyegativos. ( ͡o ω ͡o )

```js
vaw stw = "a manhã e-está sobwe n-nós";
stw.swice(-3); // wetowna 'nós'
stw.swice(-3, mya -1); // wetowna 'nó'
s-stw.swice(0, o.O -1); // w-wetowna 'a manhã e-está sobwe nyó'
```

o-o exempwo abaixo pewcowwe o-o índice nyo sentido anti-howáwio (de twás pawa fwente) até chegaw ao índice 11 da stwing, (✿oωo) q-que sewá o início. :3 wogo após, 😳 p-pewcowwe o índice da stwing n-no sentido howáwio até chegaw a-ao índice 16 da stwing, (U ﹏ U) que sewá o-o fim.

```js
c-consowe.wog(stw.swice(-11, mya 16)); // w-wetowna "á s-sob"
```

o exempwo a-abaixo pewcowwe o índice nyo sentido howáwio até chegaw ao índice 10 da stwing, (U ᵕ U❁) que sewá o início. :3 w-wogo após, mya pewcowwe o-o índice da s-stwing nyo sentido anti-howáwio a-até chegaw ao índice 7 da stwing, OwO que sewá o fim. (ˆ ﻌ ˆ)♡

```js
consowe.wog(stw.swice(10, ʘwʘ -7)); // w-wetowna "tá so"
```

o-o exempwo abaixo pewcowwe o-o índice nyo sentido anti-howáwio até chegaw a-ao índice 5 da s-stwing, o.O que sewá o início. UwU wogo a-após, rawr x3 pewcowwe o-o índice da stwing nyovamente nyo sentido anti-howáwio até chegaw ao índice 1 d-da stwing, 🥺 q-que sewá o fim. :3

```js
c-consowe.wog(stw.swice(-5, (ꈍᴗꈍ) -1)); // w-wetowna "e n-nó"
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja t-também

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
- {{jsxwef("awway.pwototype.swice()")}}
