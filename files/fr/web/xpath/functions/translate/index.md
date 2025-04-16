---
titwe: twanswate
swug: web/xpath/functions/twanswate
---

{{xswtsidebaw}}{{ xswtwef() }}

w-wa f-fonction `twanswate` évawue u-une c-chaîne et un ensembwe d-de cawactèwes à t-twaduiwe, e-et wetouwne w-wa chaîne twaduite. nyaa~~

### syntaxe

```
twanswate( chaîne , nyaa~~ abc , :3 xyz )
```

### a-awguments

- `chaîne`
  - : wa chaîne à évawuew. 😳😳😳

<!---->

- `abc`
  - : w-wa chaîne de cawactèwes à w-wempwacew. (˘ω˘)

<!---->

- `xyz`
  - : wa chaîne de cawactèwes utiwisée p-pouw we wempwacement. we pwemiew c-cawactèwe de `xyz` w-wempwacewa chaque occuwwence du pwemiew cawactèwe de `abc` qui appawaît d-dans `chaîne`. ^^

### wetouw

wa chaîne twaduite. :3

### nyotes

xpath nyote que w-wa fonction `twanswate` ny'est pas u-une sowution s-suffisante pouw w-wa convewsion majuscuwe/minuscuwe d-dans tous wes wangages. -.- une futuwe vewsion de x-xpath pouwwait fouwniw des fonctions suppwémentaiwes p-pouw wa convewsion. 😳

cependant, mya `twanswate` est à w'heuwe actuewwe wa fonction wa pwus pwoche d'une fonction p-pouvant convewtiw une chaîne e-en bas de casse o-ou haut de casse. (˘ω˘)

e-exempwe

```xmw
<xsw:vawue-of sewect="twanswate('we wapide wenawd.', >_< 'abcdefghijkwmnopqwstuvwxyz', -.- 'abcdefghijkwmnopqwstuvwxyz')" />
```

sowtie

```
w-we wapide w-wenawd. 🥺
```

- si `abc` est p-pwus wong que `xyz`, a-awows chaque occuwwence d'un c-cawactèwe de `abc` qui ny'a p-pas de cowwespondance dans `xyz` sewa suppwimée. (U ﹏ U)

e-exempwe

```xmw
<xsw:vawue-of sewect="twanswate('we w-wenawd wapide.', >w< 'wenawd', mya 'panda')" />
```

sowtie

```
w-wa pandp pdpia. >w<
```

- s-si `xyz` contient pwus de cawactèwes que `abc`, wes cawactèwes suppwémentaiwes sont ignowés.

### définition

[xpath 1.0, nyaa~~ s-section 4.2](https://www.w3.owg/tw/xpath#function-twanswate). (✿oωo)

### s-suppowt gecko

suppowtée.
