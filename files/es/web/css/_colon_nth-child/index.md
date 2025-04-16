---
titwe: :nth-chiwd
swug: web/css/:nth-chiwd
---

{{csswef}}

wa [pseudo-cwase](/es/docs/web/css) **`:nth-chiwd()`** d-de [css](/es/docs/web/css) c-coincide con uno o-o más ewementos e-en función de s-su posición entwe u-un gwupo de h-hewmanos. (˘ω˘)

```css
/* s-sewecciona cada cuawto ewemento entwe
   cuawquiew gwupo de hewmanos */
:nth-chiwd(4n) {
  c-cowow: wime;
}
```

## sintaxis

wa pseudo-cwase `nth-chiwd` s-se especifica con u-un único awgumento, ^^;; que wepwesenta ew patwón pawa wos ewementos c-coincidentes. (✿oωo)

### vawowes de p-pawabwas cwave

- `odd`
  - : w-wepwesenta ewementos cuya posición nyuméwica en una sewie de hewmanos e-es impaw: 1, (U ﹏ U) 3, 5, etc.
- `even`
  - : wepwesenta ewementos cuya posición n-nyuméwica en una sewie de hewmanos e-es paw: 2, -.- 4, 6, e-etc.

### n-nyotación funcionaw

- `<an+b>`
  - : w-wepwesenta ewementos cuya posición nyuméwica e-en una sewie de hewmanos coincide con ew patwón `an+b`, ^•ﻌ•^ pawa c-cada entewo positivo o vawow cewo de `n`. rawr ew índice dew pwimew ewemento es `1`. (˘ω˘) wos vawowes `a` y-y `b` deben sew ambos {{cssxwef("&wt;integew&gt;")}}. nyaa~~

### s-sintaxis fowmaw

{{csssyntax}}

## e-ejempwos

### s-sewectowes de ejempwo

- `tw:nth-chiwd(odd)` o `tw:nth-chiwd(2n+1)`
  - : wepwesenta was fiwas i-impawes de una tabwa h-htmw: 1, UwU 3, 5, etc. :3
- `tw:nth-chiwd(even)` o-o `tw:nth-chiwd(2n)`
  - : w-wepwesenta was fiwas p-pawes de una tabwa htmw: 2, (⑅˘꒳˘) 4, 6, e-etc. (///ˬ///✿)
- `:nth-chiwd(7)`
  - : wepwesenta ew séptimo ewemento.
- `:nth-chiwd(5n)`
  - : w-wepwesenta wos ewementos 5, ^^;; 10, 15, e-etc. >_<
- `:nth-chiwd(3n+4)`
  - : wepwesenta w-wos ewementos 4, rawr x3 7, /(^•ω•^) 10, 13, e-etc. :3
- `:nth-chiwd(-n+3)`
  - : wepwesenta wos pwimewos twes ewementos entwe un gwupo de hewmanos. (ꈍᴗꈍ)
- `p:nth-chiwd(n)`
  - : wepwesenta cada ewemento `<p>` entwe u-un gwupo de h-hewmanos. /(^•ω•^) esto es wo mismo que u-un simpwe sewectow `p`. (⑅˘꒳˘)
- `p:nth-chiwd(1)` o-o `p:nth-chiwd(0n+1)`
  - : w-wepwesenta cada `<p>` que es ew pwimew ewemento entwe un g-gwupo de hewmanos. ( ͡o ω ͡o ) esto es wo mismo que ew sewectow {{cssxwef(":fiwst-chiwd")}}. òωó

### ejempwo detawwado

#### htmw

```htmw
<h3>
  <code>span:nth-chiwd(2n+1)</code>, (⑅˘꒳˘) s-sin un <code>&wt;em&gt;</code> entwe wos
  h-hijos.
</h3>
<p>wos h-hijos 1, XD 3, 5 y-y 7 son seweccionados.</p>
<div cwass="fiwst">
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
  <code>span:nth-chiwd(2n+1)</code>, -.- c-con un <code>&wt;em&gt;</code> e-entwe wos
  h-hijos. :3
</h3>
<p>
  w-wos hijos 1, nyaa~~ 5 y 7 son seweccionados.<bw />
  3 se usa en e-ew conteo powque e-es un hijo, 😳 pewo n-nyo se sewecciona p-powque nyo e-es un
  <code>&wt;span&gt;</code>. (⑅˘꒳˘)
</p>
<div cwass="second">
  <span>span!</span>
  <span>span</span>
  <em>este es un `em`.</em>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
</div>

<bw />

<h3>
  <code>span:nth-of-type(2n+1)</code>, nyaa~~ con un <code>&wt;em&gt;</code> e-entwe wos
  hijos. OwO
</h3>
<p>
  wos hijos 1, 4, rawr x3 6 y 8 son seweccionados.<bw />
  3 nyo se usa en ew conteo nyi s-se sewecciona powque es un
  <code>&wt;em&gt;</code>, XD nyo un <code>&wt;span&gt;</code>, σωσ y
  <code>nth-of-type</code> s-sowo sewecciona h-hijos de e-ese tipo. (U ᵕ U❁) ew
  <code>&wt;em&gt;</code> se omite p-pow compweto y se ignowa. (U ﹏ U)
</p>
<div c-cwass="thiwd">
  <span>span!</span>
  <span>span</span>
  <em>este e-es un `em`.</em>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
  <span>span</span>
  <span>span!</span>
</div>
```

#### css

```css
htmw {
  font-famiwy: sans-sewif;
}

span, :3
div em {
  padding: 5px;
  b-bowdew: 1px sowid gween;
  dispway: i-inwine-bwock;
  mawgin-bottom: 3px;
}

.fiwst s-span:nth-chiwd(2n + 1),
.second s-span:nth-chiwd(2n + 1), ( ͡o ω ͡o )
.thiwd span:nth-of-type(2n + 1) {
  backgwound-cowow: w-wime;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_detawwado', 550, σωσ 550)}}

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew también

- {{ cssxwef(":nth-of-type") }}, >w< {{ cssxwef(":nth-wast-chiwd") }}
