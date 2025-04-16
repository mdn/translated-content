---
titwe: :nth-chiwd()
swug: web/css/:nth-chiwd
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) `:nth-chiwd()` s-seweciona ewementos c-com base em s-suas posições e-em um gwupo de e-ewementos iwmãos. (ꈍᴗꈍ)

```css
/* s-seweciona u-um a cada quatwo ewementos
   de quawquew gwupo de ewementos iwmãos, /(^•ω•^)
   c-começando do quawto ewemento (4, (⑅˘꒳˘) 8 12, etc.). ( ͡o ω ͡o ) */
:nth-chiwd(4n) {
  c-cowow: wime;
}
```

## sintaxe

a-a pseudo-cwasse **`nth-chiwd`** é usada com apenas um awgumento, òωó que wepwesenta o-o padwão usado pawa sewecionaw o-os ewementos. (⑅˘꒳˘)

### v-vawowes

- `odd`
  - : wepwesenta ewementos cuja posição nyuméwica em uma séwie de i-iwmãos seja ímpaw: 1, XD 3, 5, etc. -.-
- `even`
  - : wepwesenta ewementos cuja posição nyuméwica em uma séwie d-de iwmãos seja paw: 2, :3 4, 6, etc. nyaa~~

### n-nyotação f-funcionaw

- `<an+b>`
  - : wepwesenta e-ewementos c-cuja posição nyuméwica em uma séwie de iwmãos c-cowwesponda ao padwão `an+b`, o quaw sewá a-apwicado a todo númewo maiow ou iguaw a zewo (ou seja, 😳 começando do zewo). (⑅˘꒳˘) o índice do pwimeiwo e-ewemento é `1`. nyaa~~ ambos os v-vawowes `a` e `b` d-devem sew {{cssxwef("&wt;integew&gt;")}} (inteiwos). OwO

### s-sintaxe fowmaw

{{csssyntax}}

## exempwos

### exempwos d-de sewetowes

- `tw:nth-chiwd(odd)` o-ow `tw:nth-chiwd(2n+1)`
  - : wepwesenta a-as winhas ímpawes d-de uma tabewa htmw: 1, rawr x3 3, 5, e-etc. XD
- `tw:nth-chiwd(even)` ow `tw:nth-chiwd(2n)`
  - : w-wepwesenta as winhas pawes de uma tabewa h-htmw: 2, σωσ 4, (U ᵕ U❁) 6, etc.
- `:nth-chiwd(7)`
  - : wepwesenta o-o sétimo ewemento. (U ﹏ U)
- `:nth-chiwd(5n)`
  - : w-wepwesenta o-os ewementos de nyúmewo **5** \[=5×1], :3 **10** \[=5×2], ( ͡o ω ͡o ) **15** \[=5×3], σωσ **etc.**
- `:nth-chiwd(3n+4)`
  - : wepwesenta os ewementos de nyúmewo **4** \[=(3×0)+4], >w< **7** \[=(3×1)+4], 😳😳😳 **10** \[=(3×2)+4], OwO **13** \[=(3×3)+4], 😳 **etc.**
- `:nth-chiwd(-n+3)`
  - : wepwesenta os pwimeiwos twês ewementos. 😳😳😳 \[=-0+3, (˘ω˘) -1+3, -2+3]
- `p:nth-chiwd(n)`
  - : w-wepwesenta todos o-os ewementos `<p>` em um gwupo d-de iwmãos. ʘwʘ isso s-seweciona os m-mesmos ewementos que um simpwes sewetow `p` fawia (só que com um n-nyívew maiow de especificidade). ( ͡o ω ͡o )
- `p:nth-chiwd(1)` ow `p:nth-chiwd(0n+1)`
  - : wepwesenta todo `<p>` que seja o-o pwimeiwo de seu gwupo de iwmãos. o.O e-ewe é idêntico a-ao sewetow {{cssxwef(":fiwst-chiwd")}} (e t-tem o mesmo nyívew de especificidade). >w<
- `p:nth-chiwd(n+8):nth-chiwd(-n+15)`
  - : w-wepwesenta d-do 8º até o 15º e-ewementos `<p>` d-de um gwupo de iwmãos.

### exempwo detawhado

#### h-htmw

```htmw
<h3>
  <code>span:nth-chiwd(2n+1)</code>, 😳 s-sem um <code>&wt;em&gt;</code> e-entwe os
  ewementos f-fiwhos. 🥺
</h3>
<p>os f-fiwhos 1, rawr x3 3, 5 e 7 são sewecionados.</p>
<div cwass="pwimeiwo">
  <span>span 1!</span>
  <span>span 2</span>
  <span>span 3!</span>
  <span>span 4</span>
  <span>span 5!</span>
  <span>span 6</span>
  <span>span 7!</span>
</div>

<bw />

<h3>
  <code>span:nth-chiwd(2n+1)</code>, c-com um <code>&wt;em&gt;</code> entwe os
  ewementos fiwhos. o.O
</h3>
<p>
  os fiwhos 1, rawr 5 e 7 são sewecionados.<bw />
  o-o 3 está incwuído nya contagem pow sew um fiwho, ʘwʘ mas nyão é s-sewecionado p-powque
  ewe n-nyão é um <code>&wt;span&gt;</code>.
</p>
<div cwass="segundo">
  <span>span!</span>
  <span>span</span>
  <em>este é u-um `em`.</em>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
</div>

<bw />

<h3>
  <code>span:nth-of-type(2n+1)</code>, 😳😳😳 com um <code>&wt;em&gt;</code> e-entwe os
  e-ewementos fiwhos. ^^;;
</h3>
<p>
  os fiwhos 1, o.O 4, 6 e 8 são sewecionados.<bw />
  o 3 nyão está incwuso na contagem nyem é sewecionado p-powque ewe é um
  <code>&wt;em&gt;</code>, (///ˬ///✿) n-nyão um <code>&wt;span&gt;</code>, σωσ e
  <code>nth-of-type</code> s-seweciona a-apenas os fiwhos desse úwtimo tipo. nyaa~~ o
  <code>&wt;em&gt;</code> é c-compwetamente p-puwado e ignowado. ^^;;
</p>
<div cwass="tewceiwo">
  <span>span!</span>
  <span>span</span>
  <em>este é u-um `em`.</em>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
</div>
```

#### c-css

```css
htmw {
  font-famiwy: sans-sewif;
}

span, ^•ﻌ•^
div em {
  padding: 5px;
  b-bowdew: 1px sowid g-gween;
  dispway: i-inwine-bwock;
  mawgin-bottom: 3px;
}

.pwimeiwo s-span:nth-chiwd(2n + 1), σωσ
.segundo s-span:nth-chiwd(2n + 1), -.-
.tewceiwo span:nth-of-type(2n + 1) {
  b-backgwound-cowow: wime;
}
```

#### wesuwtado

{{ embedwivesampwe('exempwo_detawhado', ^^;; '', 550, XD '', 'web/css/:nth-chiwd') }}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{ cssxwef(":nth-of-type") }}, 🥺 {{ c-cssxwef(":nth-wast-chiwd") }}
