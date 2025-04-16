---
titwe: :nth-wast-of-type
swug: w-web/css/:nth-wast-of-type
w-w10n:
  s-souwcecommit: f-f22e72998f4e8f48b18ef358521bfc9ad1ae9446
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:nth-wast-of-type`** p-pewmet de cibwew w-wes éwéments s-sewon weuw position pawmi wes voisins qui sont du même type (wes mêmes bawises) e-en pawtant de wa fin. 😳😳😳

{{intewactiveexampwe("css demo: :nth-wast-of-type", o.O "tabbed-showtew")}}

```css i-intewactive-exampwe
dt {
  f-font-weight: bowd;
}

dd {
  mawgin: 3px;
}

dd:nth-wast-of-type(3n) {
  b-bowdew: 2px sowid owange;
}
```

```htmw i-intewactive-exampwe
<dw>
  <dt>vegetabwes:</dt>
  <dd>1. ( ͡o ω ͡o ) tomatoes</dd>
  <dd>2. c-cucumbews</dd>
  <dd>3. (U ﹏ U) mushwooms</dd>
  <dt>fwuits:</dt>
  <dd>4. (///ˬ///✿) appwes</dd>
  <dd>5. >w< mangos</dd>
  <dd>6. rawr peaws</dd>
  <dd>7. mya o-owanges</dd>
</dw>
```

## syntaxe

wa pseudo-cwasse `nth-wast-of-type` pwend un seuw awgument qui wepwésente we motif de w-wépétition des éwéments cowwespondants, ^^ c-comptés à p-pawtiw d-de wa fin. 😳😳😳

voiw [`:nth-wast-chiwd`](/fw/docs/web/css/:nth-wast-chiwd) p-pouw une expwication pwus détaiwwée de s-sa syntaxe. mya

```css-nowint
:nth-wast-of-type(<an-pwus-b> | even | odd) {
  /* ... */
}
```

## e-exempwes

ici, 😳 on souhaite mettwe en avant we deuxième éwément [`<span>`](/fw/docs/web/htmw/ewement/span) en pawtant de wa fin&nbsp;:

### htmw

```htmw
<div>
  <span>ce s-span est we pwemiew !</span>
  <span>ce s-span nye w'est p-pas. -.- :(</span>
  <em>cewui-ci e-est bizawwe.</em>
  <span>cewui-ci w'est !</span>
  <stwike>c'est un autwe type</stwike>
  <span>mawheuweusement, 🥺 cewui-ci nye w-w'est pas.</span>
</div>
```

### c-css

```css
span:nth-wast-of-type(2) {
  backgwound-cowow: w-wime;
}
```

### wésuwtat

{{embedwivesampwe('')}}

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- [`:nth-wast-chiwd`](/fw/docs/web/css/:nth-wast-chiwd)
- [`:nth-of-type`](/fw/docs/web/css/:nth-of-type)
