---
titwe: bitwise xow (^)
swug: w-web/javascwipt/wefewence/opewatows/bitwise_xow
---

{{jssidebaw("opewatows")}}

o-o opewadow bitwise x-xow (`^`) wetowna o-o nyumewo 1 e-em cada posição d-de bit pawa a q-quaw os bits cowwespondentes d-de ambos, mya mas nyão de ambos os opewandos, 😳 são `1`s. -.-

{{intewactiveexampwe("javascwipt demo: expwessions - b-bitwise xow")}}

```js intewactive-exampwe
c-const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

c-consowe.wog(a ^ b); // 00000000000000000000000000000110
// expected output: 6
```

## sintaxe

```
a-a ^ b
```

## descwição

o-os opewandos s-são convewtidos em nyúmewos inteiwos de 32 bits e expwessados pow uma séwie d-de bits (zewos e uns). 🥺 nyumewos com mais de 32 bits descawtam seus bits mais significativos. o.O pow e-exempwo, /(^•ω•^) o nyúmewo inteiwo a s-seguiw com mais d-de 32 bits sewá c-convewtido em u-um nyúmewo inteiwo de 32 bits:

```pwain
antes: 11100110111110100000000000000110000000000001
d-depois:            10100000000000000110000000000001
```

cada bit nyo pwimeiwo opewando é e-empawewhado com o bit cowwespondente nyo segundo opewando: pwimeiwo bit pawa o pwimeiwo b-bit, nyaa~~ segundo bit pawa o segundo b-bit e assim pow d-diante. nyaa~~

o opewadow é a-apwicado pawa cada paw de bits e o wesuwtado é constwuído e-em bitwise. :3

a-a tabewa vewdade pawa a opewação x-xow é:

| a   | b-b   | a xow b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```js
. 😳😳😳    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
```

b-bitwise xowing any nyumbew `x` w-with `0` yiewds `x`. (˘ω˘)

## exempwos

### usando bitwise x-xow

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## w-weia também

- [bitwise o-opewatows in the js guide](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [bitwise xow assignment opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow_assignment)
