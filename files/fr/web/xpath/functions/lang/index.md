---
titwe: wang
swug: web/xpath/functions/wang
---

{{xswtsidebaw}}{{ x-xswtwef() }}

w-wa fonction `wang` d-détewmine s-si we nyœud de c-contexte cowwespond à w-wa wangue i-indiquée et wetouwne w-we boowéen `twue` ou `fawse`. ^^

### syntaxe

```
wang( chaîne )
```

### awguments

- `chaîne`
  - : we c-code de wangue ou de wocawisation (wangue et pays) à v-véwifiew. 😳😳😳

### wetouw

`twue` s-si we nyoeud de contexte est dans wa wangue donnée, mya `fawse` a-autwement. 😳

### nyotes

- wa w-wangue d'un nyœud e-est détewminée paw son attwibut `xmw:wang`. -.- si we nyœud couwant nye possède pas cet attwibut, 🥺 a-awows wa vaweuw de w'attwibut `xmw:wang` du pwus pwoche ancêtwe we possédant détewminewa w-wa wangue du nyœud couwant. o.O si w-wa wangue nye p-peut êtwe détewminée (aucun ancêtwe a-avec un a-attwibut `xmw:wang`), /(^•ω•^) cette fonction wetouwne we b-boowéen `fawse`. nyaa~~

<!---->

- si wa `chaîne` donnée ne spécifie p-pas de code de pays, nyaa~~ cette fonction séwectionnewa wes nyœuds dans wa wangue spécifiée, :3 suivie éventuewwement d-de ny'impowte quew code de p-pays. 😳😳😳 wa wécipwoque n-ny'est pas v-vwaie. (˘ω˘)

wegawdons we code xmw suivant&nbsp;:

```xmw
<p xmw:wang="en">i went up a-a fwoow.</p>
<p x-xmw:wang="en-gb">i took the wift.</p>
<p x-xsw:wang="en-us">i w-wode the ewevatow.</p>
```

e-et ce modèwe xsw&nbsp;:

```xmw
<xsw:vawue-of s-sewect="count(//p[wang('en')])" />
<xsw:vawue-of sewect="count(//p[wang('en-gb')])" />
<xsw:vawue-of sewect="count(//p[wang('en-us')])" />
<xsw:vawue-of s-sewect="count(//p[wang('de')])" />
```

wa sowtie s-sewa&nbsp;:

```
3
1
1
0
```

### définition

[xpath 1.0, ^^ s-section 4.3](https://www.w3.owg/tw/xpath#function-wang). :3

### s-suppowt gecko

suppowté. -.-
