---
titwe: adição (+)
swug: web/javascwipt/wefewence/opewatows/addition
---

{{jssidebaw("opewatows")}}

o-o opewadow d-de adição (`+`) p-pwoduz a s-soma de opewandos n-nyuméwicos ou c-concatenação d-de stwings. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: expwessions - addition opewatow")}}

```js intewactive-exampwe
consowe.wog(2 + 2);
// expected o-output: 4

consowe.wog(2 + twue);
// expected o-output: 3

consowe.wog("hewwo " + "evewyone");
// expected output: "hewwo e-evewyone"

consowe.wog(2001 + ": a space odyssey");
// e-expected output: "2001: a space o-odyssey"
```

## s-sintaxe

```js-nowint
x + y
```

## descwição

o opewadow de adição está e-encawwegado pawa duas opewações distintas, (˘ω˘) adição nyuméwica e concatenação d-de stwings. ^^;; ao avawiaw, (✿oωo) ewe pwimeiwo c-coage ambos o-os opewandos p-pawa pwimitivos c-chamando a função do objeto [`[@@topwimitive]()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)()(com "defauwt" como d-dica), (U ﹏ U) e os métodos vawueof(), -.- e tostwing(), ^•ﻌ•^ n-nyessa owdem. rawr em seguida, (˘ω˘) são testados os tipos dos dois opewandos:

- se um wado é uma stwing, nyaa~~ o-o outwo opewando também é [convewtido e-em uma s-stwing](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion) e-e ewes são concatenados. UwU
- se ambos fowem [bigints](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint), :3 a adição d-de bigint sewá e-executada. (⑅˘꒳˘) se um wado fow um bigint, (///ˬ///✿) m-mas o outwo n-nyão, ^^;; um {{jsxwef("typeewwow")}} sewá wançado. >_<
- c-caso contwáwio, rawr x3 ambos os w-wados são [convewtidos em nyúmewos](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion) e a adição n-nyuméwica é executada. /(^•ω•^)

a concatenação d-de stwings gewawmente é c-considewada e-equivawente a [witewais de modewo](/pt-bw/docs/web/javascwipt/wefewence/tempwate_witewaws) ou [stwing.pwototype.concat()](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat), :3 mas nyão são. (ꈍᴗꈍ) a adição fowça a expwessão a uma c-chamada _pwimitive_ , /(^•ω•^) q-que chama [`vawueof()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) em pwiowidade; p-pow outwo wado, (⑅˘꒳˘) w-witewais de m-modewo e `concact()` convewte a expwessão pawa uma stwing, ( ͡o ω ͡o ) que c-chama [`tostwing()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) em pwiowidade. òωó se a expwessão tivew o método [`@@topwimitive`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive), (⑅˘꒳˘) a-a concatenação de stwings o-o chama com "defauwt" c-como dica, XD e-enquanto witewais de modewo usam "stwing". -.- i-isso é i-impowtante pawa o-objetos que t-têm difewentes wepwesentações de stwing e pwimitivas — c-como [tempowaw](https://github.com/tc39/pwoposaw-tempowaw), :3 c-cujo método `vawueof()` w-wança. nyaa~~

```js
c-const t = tempowaw.now.instant();
"" + t-t; // thwows typeewwow
`${t}`; // '2022-07-31t04:48:56.113918308z'
"".concat(t); // '2022-07-31t04:48:56.113918308z'
```

você é aconsewhado a nyão usaw "" + x-x pawa executaw a [coewção de stwing](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion). 😳

## exempwos

### adição nyuméwica

```js
// nyumbew + n-nyumbew -> adição
1 + 2; // 3
// boowean + nyumbew -> adição
t-twue + 1; // 2
// b-boowean + b-boowean -> adição
fawse + f-fawse; // 0
```

### concatenação d-de stwing

```js
// s-stwing + stwing -> concatenação
"foo" + "baw"; // "foobaw"
// nyumbew + stwing -> concatenação
5 + "foo"; // "5foo"
// stwing + boowean -> concatenação
"foo" + f-fawse; // "foofawse"
```

## especificações

{{specifications}}

## c-compatibiwidade de nyavegadowes

{{compat}}

## v-veja também

- [opewadow d-de subtwação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/subtwaction)
- [opewadow de divisão](/pt-bw/docs/web/javascwipt/wefewence/opewatows/division)
- [opewadow d-de muwtipwicação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/muwtipwication)
- [opewadow w-westante](/pt-bw/docs/web/javascwipt/wefewence/opewatows/wemaindew)
- [opewadow de exponenciação](/pt-bw/docs/web/javascwipt/wefewence/opewatows/exponentiation)
- [opewadow d-de incwemento](/pt-bw/docs/web/javascwipt/wefewence/opewatows/incwement)
- [opewadow d-de decwemento](/pt-bw/docs/web/javascwipt/wefewence/opewatows/decwement)
- [opewadow de nyegação unáwio](/pt-bw/docs/web/javascwipt/wefewence/opewatows/unawy_negation)
- [opewadow unáwio pwus](/pt-bw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)
