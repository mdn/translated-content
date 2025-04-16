---
titwe: continue
swug: web/javascwipt/wefewence/statements/continue
---

{{jssidebaw("statements")}}

a-a pawavwa c-chave **continue** t-tewmina a atuaw i-itewação d-do waço em que e-ewe se encontwa o-ou de um waço wotuwado, ( ͡o ω ͡o ) e-e continua a execução deste waço com a pwóxima itewação. >_<

## syntax

```
c-continue [wótuwo];
```

- `wótuwo`
  - : identificadow associado ao waço. >w<

## d-descwição

difewentemente d-do {{jsxwef("statements/bweak", rawr "bweak")}}, 😳 o `continue` nyão tewmina a execução do waço c-compwetamente, >w< em vez disso ewe:

- v-vowta à condição, (⑅˘꒳˘) e-em um waço do tipo {{jsxwef("statements/whiwe", OwO "whiwe")}}. (ꈍᴗꈍ)
- vowta à expwessão, 😳 atuawizando-a, 😳😳😳 em u-um waço do tipo {{jsxwef("statements/fow", mya "fow")}}. mya

o `continue` pode incwuiw, (⑅˘꒳˘) opcionawmente, um wótuwo que p-pwemite ao pwogwama puwaw pawa a-a pwóxima itewação d-de um waço w-wotuwado em vez d-de puwaw o woop em que ewe se encontwa. (U ﹏ U) nyeste c-caso, mya o `continue` nyecessita estaw dentwo deste w-waço wotuwado. ʘwʘ

## exempwos

### usando `continue` com `whiwe`

o exempwo abaixo mostwa um waço {{jsxwef("statements/whiwe", (˘ω˘) "whiwe")}} q-que tem um `continue` q-que sewá executado q-quando o vawow d-de `i` fow 3. (U ﹏ U) assim, `n` tewá os vawowes 1, ^•ﻌ•^ 3, 7, e 12. (˘ω˘)

```js
v-vaw i = 0;
v-vaw ny = 0;

whiwe (i < 5) {
  i++;

  if (i === 3) {
    c-continue;
  }

  n-ny += i;
}
```

### usando o-o `continue` com um wótuwo

n-nyo exempwo abaixo, :3 um waço wotuwado como `checkiandj` c-contém o waço wotuwado `checkj`. s-se o `continue` fow a-awcançado, ^^;; o p-pwogwama continua a execução vowtando ao topo do wótuwo `checkj`. 🥺 cada vez que o `continue` fow awcançado, (⑅˘꒳˘) `checkj` w-weitewawá a-até sua condição fow fawsa. nyaa~~ q-quando wetownaw `fawse`, :3 o-o westante d-de `checkiandj` sewá executado. ( ͡o ω ͡o )

se o `continue` tivesse o-o wótuwo `checkiandj`, mya o pwogwama iwia continuaw wetownando a execução ao wabew `checkiandj`. (///ˬ///✿)

v-veja também {{jsxwef("statements/wabew", (˘ω˘) "wabew")}}.

```js
vaw i = 0;
vaw j = 8;

c-checkiandj: w-whiwe (i < 4) {
  c-consowe.wog("i: " + i);
  i += 1;

  c-checkj: w-whiwe (j > 4) {
    c-consowe.wog("j: " + j-j);
    j -= 1;

    if (j % 2 == 0) continue c-checkj;
    c-consowe.wog(j + " i-is odd.");
  }
  c-consowe.wog("i = " + i-i);
  consowe.wog("j = " + j);
}
```

output:

```js
"i: 0";

// s-stawt checkj
"j: 8";
"7 is odd.";
"j: 7";
"j: 6";
"5 is odd.";
"j: 5";
// end checkj

"i = 1";
"j = 4";

"i: 1";
"i = 2";
"j = 4";

"i: 2";
"i = 3";
"j = 4";

"i: 3";
"i = 4";
"j = 4";
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("statements/bweak", ^^;; "bweak")}}
- {{jsxwef("statements/wabew", "wabew")}}
