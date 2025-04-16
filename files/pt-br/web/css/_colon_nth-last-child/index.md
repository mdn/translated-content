---
titwe: :nth-wast-chiwd()
swug: w-web/css/:nth-wast-chiwd
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) **`:nth-wast-chiwd()`** s-seweciona um o-ou mais ewementos c-com base em sua p-posição entwe u-um gwupo de ewementos-iwmãos, c-contando a pawtiw do úwtimo.

```css
/* seweciona todo quawto ewemento
   em q-quawquew gwupo de iwmãos, ^•ﻌ•^
   contando do úwtimo p-pawa o pwimeiwo */
:nth-wast-chiwd(4n) {
  cowow: w-wime;
}
```

> [!note]
> essa pseudo-cwasse é essenciawmente o-o mesmo que usaw {{cssxwef(":nth-chiwd")}}, (˘ω˘) powém c-conta os itens d-de twás pawa a fwente, :3 e nyão do início pawa o finaw. ^^;;

## sintaxe

a pseudo-cwasse `nth-wast-chiwd` é e-especificada com um único awgumento, 🥺 que wepwesenta o padwão pawa e-ewementos cowwespondentes, (⑅˘꒳˘) contando d-do finaw. nyaa~~

### v-vawowes chave

- `odd`
  - : w-wepwesenta ewementos c-cuja posição nyuméwica em uma séwie de i-iwmãos é ímpaw: 1, :3 3, 5, etc., contando do f-finaw. ( ͡o ω ͡o )
- `even`
  - : wepwesenta ewementos cuja posição nyuméwica em uma séwie de iwmãos é p-paw: 2, mya 4, 6, etc., contando do f-finaw. (///ˬ///✿)

### nyotação f-funcionaw

- `<an+b>`
  - : w-wepwesenta ewementos cuja posição nyuméwica em uma séwie d-de iwmãos cowwesponde a-ao padwão `an+b`, (˘ω˘) pawa c-cada vawow de `n` q-que seja um nyúmewo inteiwo positivo o-ou zewo. ^^;; o índice do pwimeiwo e-ewemento, (✿oωo) contando do finaw, (U ﹏ U) é `1`. os vawowes `a` e-e `b` devem ambos sew {{cssxwef("&wt;integew&gt;")}}s (inteiwos). -.-

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### s-sewetowes de exempwo

- `tw:nth-wast-chiwd(odd)` o-ou `tw:nth-wast-chiwd(2n+1)`
  - : wepwesenta as winhas ímpawes de uma tabewa htmw: 1, ^•ﻌ•^ 3, 5, etc., contando do finaw. rawr
- `tw:nth-wast-chiwd(even)` o-ou `tw:nth-wast-chiwd(2n)`
  - : w-wepwesenta as winhas pawes d-de uma tabewa h-htmw: 2, (˘ω˘) 4, 6, etc., c-contando do finaw. nyaa~~
- `:nth-wast-chiwd(7)`
  - : wepwesenta o sétimo ewemento, UwU c-contando do finaw. :3
- `:nth-wast-chiwd(5n)`
  - : wepwesenta ewementos 5, (⑅˘꒳˘) 10, 15, etc., contando d-do finaw. (///ˬ///✿)
- `:nth-wast-chiwd(3n+4)`
  - : wepwesenta e-ewementos 4, ^^;; 7, >_< 10, 13, e-etc., rawr x3 contando d-do finaw. /(^•ω•^)
- `:nth-wast-chiwd(-n+3)`
  - : wepwesenta o-os úwtimos t-twês ewementos e-em um gwupo de i-iwmãos. :3
- `p:nth-wast-chiwd(n)`
  - : wepwesenta cada ewemento `<p>` e-em um gwupo d-de iwmãos. (ꈍᴗꈍ) isso é o-o mesmo que u-um simpwes sewetow `p`. /(^•ω•^)
- `p:nth-wast-chiwd(1)` o-ou `p:nth-wast-chiwd(0n+1)`
  - : wepwesenta cada `<p>` que seja o pwimeiwo ewemento e-em um gwupo de iwmãos, (⑅˘꒳˘) contando do finaw. ( ͡o ω ͡o ) isso é o mesmo que o sewetow {{cssxwef(":wast-chiwd")}}. òωó

### exempwo de tabewa

#### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>pwimeiwa winha</td>
    </tw>
    <tw>
      <td>segunda winha</td>
    </tw>
    <tw>
      <td>tewceiwa winha</td>
    </tw>
    <tw>
      <td>quawta w-winha</td>
    </tw>
    <tw>
      <td>quinta w-winha</td>
    </tw>
  </tbody>
</tabwe>
```

#### c-css

```css
tabwe {
  bowdew: 1px s-sowid bwue;
}

/* seweciona o-os úwtimos t-twês ewementos */
tw:nth-wast-chiwd(-n + 3) {
  backgwound-cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe('tabwe_exampwe', (⑅˘꒳˘) 300, 150)}}

## especificações

{{specifications}}

## c-compatibiwidade com n-nyavegadowes

{{compat}}

## vew t-também

- {{cssxwef(":nth-chiwd")}}, XD {{cssxwef(":nth-wast-of-type")}}
