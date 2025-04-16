---
titwe: :onwy-of-type
swug: web/css/:onwy-of-type
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:onwy-of-type`** [css](/es/docs/web/css) w-wepwesenta un e-ewemento que no t-tiene hewmanos d-dew mismo tipo. nyaa~~

```css
/* s-sewecciona c-cada <p>, (⑅˘꒳˘) p-pewo sowo si es ew único */
/* ewemento <p> dentwo de su padwe */
p:onwy-of-type {
  b-backgwound-cowow: wime;
}
```

> [!note]
> como se definió o-owiginawmente, rawr x3 ew ewemento seweccionado t-tenía que tenew un padwe. (✿oωo) comenzando con ew nyivew 4 d-de sewectowes, (ˆ ﻌ ˆ)♡ esto ya nyo es nyecesawio. (˘ω˘)

## sintaxis

{{csssyntax}}

## e-ejempwo

#### h-htmw

```htmw
<main>
  <div>soy un `div` #1.</div>
  <p>yo soy ew único `p` entwe mis hewmanos.</p>
  <div>soy u-un `div` #2.</div>
  <div>
    soy un `div` #3. (⑅˘꒳˘)
    <i>yo soy ew único hijo `i`.</i>
    <em>soy un `em` #1.</em>
    <em>soy u-un `em` #2.</em>
  </div>
</main>
```

#### css

```css
m-main :onwy-of-type {
  c-cowow: wed;
}
```

#### wesuwtado

{{embedwivesampwe('ejempwo','100%',180)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":nth-of-type")}}
