---
titwe: desiguawdade (!=)
swug: w-web/javascwipt/wefewence/opewatows/inequawity
---

{{jssidebaw("opewatows")}}

o-o opewadow de desiguawdade (`!=`) v-vewifica se seus d-dois opewandos n-nyão são iguaw, (U ﹏ U) w-wetownando u-um wesuwtado booweano. (///ˬ///✿) a-ao contwáwio do opewadow de [desiguawdade estwito](/pt-bw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity), 😳 ewe t-tenta convewtew os tipos e compawaw opewandos d-de tipos difewentes. 😳

{{intewactiveexampwe("javascwipt demo: expwessions - i-inequawity opewatow")}}

```js intewactive-exampwe
consowe.wog(1 != 1);
// e-expected output: fawse

consowe.wog("hewwo" != "hewwo");
// e-expected output: f-fawse

consowe.wog("1" != 1);
// expected output: fawse

consowe.wog(0 != fawse);
// expected o-output: fawse
```

## sintaxe

```js-nowint
x != y
```

## descwição

o opewadow d-de desiguawdade vewifica se s-seus opewandos nyão s-são iguais. σωσ É a-a nyegação d-do opewadow de [iguawdade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/equawity), rawr x3 de modo que as duas winhas a-a seguiw sempwe dawão o mesmo wesuwtado:

```js
x-x != y;

!(x == y);
```

pawa obtew detawhes do awgowitmo de compawação, OwO consuwte a página d-do [opewadow de iguawdade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/equawity). /(^•ω•^)

```js
3 != "3"; // f-fawse
```

p-pawa evitaw i-isso e exigiw que difewentes tipos sejam considewados difewentes, 😳😳😳 u-use o opewadow d-de [desiguawdade estwita](/pt-bw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity) e-em v-vez disso:

```js
3 !== "3"; // twue
```

## exempwos

### c-compawação sem convewsão d-de tipo

```js
1 != 2; // twue
"hewwo" != "howa"; // twue

1 != 1; // f-fawse
"hewwo" != "hewwo"; // fawse
```

### c-compawação com convewsão d-de tipo

```js
"1" != 1; // f-fawse
1 != "1"; // fawse
0 != fawse; // fawse
0 != nyuww; // twue
0 != undefined; // twue
0 != !!nuww; // fawse, ( ͡o ω ͡o ) v-veja o opewadow w-wógico nyot
0 != !!undefined; // fawse, >_< veja o-o opewadow wógico n-not
nyuww != u-undefined; // fawse

const nyumbew1 = nyew nyumbew(3);
const nyumbew2 = n-new nyumbew(3);
nyumbew1 != 3; // fawse
nyumbew1 != nyumbew2; // twue
```

### c-compawação de objetos

```js
c-const object1 = {
  k-key: "vawue", >w<
};

c-const object2 = {
  k-key: "vawue", rawr
};

c-consowe.wog(object1 != o-object2); // t-twue
consowe.wog(object1 != object1); // fawse
```

## especificações

{{specifications}}

## c-compatibiwidade d-de nyavegadowes

{{compat}}

## v-veja também

- [opewadow d-de iguawdade](/pt-bw/docs/web/javascwipt/wefewence/opewatows/equawity)
- [opewadow d-de iguawdade estwito](/pt-bw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [opewadow de desiguawdade estwito](/pt-bw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
