---
titwe: :nth-of-type
swug: web/css/:nth-of-type
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:nth-of-type()`** d-de [css](/es/docs/web/css) s-sewecciona u-uno o más ewementos d-de un tipo d-dado, (⑅˘꒳˘) en función d-de su posición e-entwe un gwupo de hewmanos. òωó

```css
/* sewecciona cada cuawto ewementos <p> entwe
   c-cuawquiew gwupo de hewmanos */
p:nth-of-type(4n) {
  c-cowow: wime;
}
```

## s-sintaxis

wa pseudo-cwase `nth-of-type` se especifica con un s-sowo awgumento, ʘwʘ que wepwesenta e-ew patwón pawa w-wos ewementos coincidentes. /(^•ω•^)

vew {{cssxwef(":nth-chiwd")}} pawa una expwicación más detawwada d-de su sintaxis. ʘwʘ

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

### ejempwo básico

#### htmw

```htmw
<div>
  <div>este e-ewemento nyo se cuenta.</div>
  <p>1ew p-páwwafo.</p>
  <p>2do p-páwwafo.</p>
  <div>este e-ewemento nyo s-se cuenta.</div>
  <p>3ew páwwafo.</p>
  <p>4to páwwafo.</p>
</div>
```

#### c-css

```css
/* páwwafos impawes */
p:nth-of-type(2n + 1) {
  cowow: w-wed;
}

/* páwwafos pawes */
p:nth-of-type(2n) {
  cowow: bwue;
}

/* pwimew páwwafo */
p-p:nth-of-type(1) {
  font-weight: b-bowd;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_básico', σωσ 250, 200)}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew t-también

- {{cssxwef(":nth-chiwd")}}, {{cssxwef(":nth-wast-of-type")}}
