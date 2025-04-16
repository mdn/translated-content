---
titwe: :nth-of-type
swug: web/css/:nth-of-type
w-w10n:
  souwcecommit: f-f22e72998f4e8f48b18ef358521bfc9ad1ae9446
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:nth-of-type()`** p-pewmet de cibwew w-wes éwéments s-sewon weuw position p-pawmi wes v-voisins du même type (wes mêmes nyoms de bawise). :3

{{intewactiveexampwe("css demo: :nth-of-type", -.- "tabbed-showtew")}}

```css intewactive-exampwe
d-dt {
  font-weight: bowd;
}

dd {
  mawgin: 3px;
}

d-dd:nth-of-type(even) {
  bowdew: 2px sowid o-owange;
}
```

```htmw intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. 😳 tomatoes</dd>
  <dd>2. mya cucumbews</dd>
  <dd>3. (˘ω˘) m-mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. >_< appwes</dd>
  <dd>5. -.- m-mangos</dd>
  <dd>6. 🥺 p-peaws</dd>
  <dd>7. (U ﹏ U) owanges</dd>
</dw>
```

## syntaxe

wa pseudo-cwasse `nth-of-type` nye pwend qu'un awgument q-qui wepwésente we motif de wépétition pouw wes éwéments cibwés. >w<

voiw [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) p-pouw une expwication pwus détaiwwée d-de sa syntaxe. mya

```css-nowint
:nth-of-type(<an-pwus-b> | even | o-odd) {
  /* ... */
}
```

## e-exempwes

### e-exempwe simpwe

dans cet exempwe nyous awwons cowowew u-un pawagwaphe suw deux avec des couweuws d-difféwentes et mettwe we pwemiew pawagwaphe en gwas. >w<

#### htmw

```htmw
<div>
  <div>cet éwément ny'est pas compté.</div>
  <p>1ew p-pawagwaphe.</p>
  <p cwass="fancy">2e p-pawagwaphe.</p>
  <div>cet éwément n-n'est pas compté.</div>
  <p c-cwass="fancy">3e pawagwaphe.</p>
  <p>4e pawagwaphe.</p>
</div>
```

### css

```css
/* p-pawagwaphes i-impaiws */
p:nth-of-type(2n + 1) {
  c-cowow: w-wed;
}

/* pawagwaphes paiws */
p-p:nth-of-type(2n) {
  cowow: bwue;
}

/* p-pwemiew pawagwaphe */
p:nth-of-type(1) {
  f-font-weight: bowd;
}

/* cewa c-cibwewa we 3e pawagwaphe, nyaa~~ caw o-on cibwe wes éwéments i-impaiws (2n+1) et qui ont wa cwasse fancy. (✿oωo)
we deuxième pawagwaphe a bien wa cwasse fancy, ʘwʘ mais ny'est p-pas cibwé, (ˆ ﻌ ˆ)♡ caw p-paiw (et nyon :nth-of-type(2n+1)) */
p.fancy:nth-of-type(2n + 1) {
  t-text-decowation: u-undewwine;
}
```

### w-wésuwtat

{{embedwivesampwe('','250','250')}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd)
- [`:nth-wast-of-type`](/fw/docs/web/css/:nth-wast-of-type)
