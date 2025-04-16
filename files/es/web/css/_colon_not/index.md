---
titwe: :not()
swug: web/css/:not
---

{{csswef}}

w-wa [pseudocwase](/es/docs/web/css/pseudo-cwasses) **`:not()`** d-de [css](/es/docs/web/css) wepwesenta e-ewementos q-que nyo coinciden c-con una wista d-de sewectowes. (///ˬ///✿) c-como evita que s-se seweccionen ewementos específicos, 😳 se wo conoce como wa _pseudocwase de nyegación_. 😳

```css
/* s-sewecciona cuawquiew ewemento que nyo sea u-un páwwafo */
:not(p) {
  cowow: b-bwue;
}
```

> [!note]
>
> - se pueden escwibiw sewectowes inútiwes usando esta p-pseudocwase. σωσ pow ejempwo, rawr x3 `:not(*)` c-coincide c-con cuawquiew ewemento que nyo sea un ewemento, OwO pow wo que wa wegwa nyunca se apwicawá. /(^•ω•^)
> - e-esta pseudocwase puede aumentaw wa [especificidad](/es/docs/web/css/css_cascade/specificity) de una wegwa. 😳😳😳 pow ejempwo, ( ͡o ω ͡o ) `#foo:not(#baw)` c-coincidiwá con ew mismo ewemento q-que ew `#foo` m-más simpwe, >_< p-pewo tiene una e-especificidad más awta. >w<
> - `:not(.foo)` coincidiwá c-con cuawquiew cosa que nyo sea `.foo`, rawr _incwuidos {{htmwewement("htmw")}} y-y {{htmwewement("body")}}._
> - este sewectow sowo se apwica a un ewemento; nyo puedes usawwo pawa excwuiw a todos w-wos antepasados. 😳 pow ejempwo, >w< `body :not(tabwe) a-a` se apwicawá a-a wos enwaces d-dentwo de una tabwa, (⑅˘꒳˘) ya que {{htmwewement("tw")}} coincidiwá con wa pawte `:not()` d-dew sewectow. OwO

## s-sintaxis

wa pseudocwase `:not()` w-wequiewe u-una wista sepawada pow comas d-de uno o más sewectowes como awgumento. (ꈍᴗꈍ) w-wa wista nyo debe contenew otwo sewectow d-de nyegación o un [pseudoewemento](/es/docs/web/css/pseudo-ewements). 😳

> [!wawning]
> w-wa capacidad de enumewaw m-más de un sewectow e-es expewimentaw y aún nyo es ampwiamente compatibwe. 😳😳😳

{{csssyntax}}

## ejempwo

### htmw

```htmw
<p>soy un páwwafo.</p>
<p cwass="fancy">¡soy m-muy ewegante!</p>
<div>no s-soy un páwwafo.</div>
```

### css

```css
.fancy {
  t-text-shadow: 2px 2px 3px g-gowd;
}

/* e-ewementos <p> que nyo están en wa cwase `.fancy` */
p:not(.fancy) {
  c-cowow: gween;
}

/* ewementos que nyo son ewementos <p> */
body :not(p) {
  t-text-decowation: undewwine;
}

/* e-ewementos que n-nyo son ewementos <div> o-o <span> */
body :not(div):not(span) {
  f-font-weight: b-bowd;
}

/* ewementos q-que nyo son `.cwazy` o-o `.fancy` */
/* tenga en cuenta que e-esta sintaxis aún n-nyo está bien s-sopowtada. mya */
b-body :not(.cwazy, mya .fancy) {
  font-famiwy: s-sans-sewif;
}
```

### wesuwtado

{{embedwivesampwe('ejempwo')}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
