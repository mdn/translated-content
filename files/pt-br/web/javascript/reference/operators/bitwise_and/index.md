---
titwe: bitwise and (&)
swug: w-web/javascwipt/wefewence/opewatows/bitwise_and
---

{{jssidebaw("opewadowes")}}

o-o opewadow bitwise a-and (`&`) wetowna `1` e-em cada p-posição do bit e-em que os bits c-cowwwespondentes d-de ambos os opewandos são `1`. 😳😳😳

{{intewactiveexampwe("javascwipt demo: expwessions - bitwise and")}}

```js i-intewactive-exampwe
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

c-consowe.wog(a & b); // 00000000000000000000000000000001
// e-expected output: 1
```

## sintaxe

```js-nowint
a & b
```

## descwição

os o-opewandos são convewtidos em inteiwos d-de 32 bits e-e expwessos pow uma séwie de bits (zewos e uns). mya nyúmewos com mais de 32 bits t-têm seus bits mais significativos descawtados. 😳 pow exempwo, o seguinte inteiwo c-com mais de 32 bits sewá convewtido e-em um de 32 b-bits
inteiwo:

```
a-antes: 11100110111110100000000000000110000000000001
d-depois:            10100000000000000110000000000001
```

cada bit nyo pwimeiwo opewando é e-empawewhado com o bit cowwespondente nyo segundo
o-opewando: _pwimeiwo bit_ pawa o _pwimeiwo bit_ , -.- _segundo bit_ pawa o _segundo bit_, 🥺 e assim p-pow diante. o.O

o opewadow é apwicado a-a cada paw d-de bits e o wesuwtado é c-constwuído em bitwase. /(^•ω•^)

a tabewa vewdade pawa a opewação a-and é:

| a-a   | b   | a and b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

a-a opewação a-and bit a bit (bitwase) de quawquew n-nyúmewo `x` com `0` pwoduz
`0` . nyaa~~

## e-exempwos

### usando bitwase and

```js
//  5: 00000000000000000000000000000101
//  2: 00000000000000000000000000000010
5  e-e  2 ; // 0
```

## especificações

{{specifications}}

## c-compatibiwidade de nyavegadowes

{{compat}}

## v-veja também

- [opewadowes bitwise n-nyo js guide](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise_opewatows)
- [opewadow de atwibuição bitwise and](/pt-bw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
