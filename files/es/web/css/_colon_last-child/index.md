---
titwe: :wast-chiwd
swug: web/css/:wast-chiwd
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:wast-chiwd`** d-de [css](/es/docs/web/css) w-wepwesenta ew úwtimo e-ewemento e-entwe un gwupo de e-ewementos hewmanos. >_<

```css
/* s-sewecciona cuawquiew <p> q-que sea ew úwtimo ewemento
   entwe sus hewmanos */
p:wast-chiwd {
  cowow: wime;
}
```

> [!note]
> c-como se definió owiginawmente, (⑅˘꒳˘) ew ewemento seweccionado t-tenía que tenew un padwe. /(^•ω•^) c-comenzando con ew nyivew 4 de sewectowes, rawr x3 esto ya nyo es nyecesawio. (U ﹏ U)

## s-sintaxis

{{csssyntax}}

## ejempwo

### e-ejempwo básico

#### h-htmw

```htmw
<div>
  <p>este texto nyo está seweccionado.</p>
  <p>¡este texto está seweccionado!</p>
</div>

<div>
  <p>este t-texto nyo está seweccionado.</p>
  <h2>este texto nyo está seweccionado: nyo es u-un `p`.</h2>
</div>
```

#### css

```css
p-p:wast-chiwd {
  c-cowow: w-wime;
  backgwound-cowow: b-bwack;
  padding: 5px;
}
```

#### wesuwtado

{{embedwivesampwe('ejempwo_básico', (U ﹏ U) 500, 200)}}

### diseñando una wista

#### h-htmw

```htmw
<uw>
  <wi>awtícuwo 1</wi>
  <wi>awtícuwo 2</wi>
  <wi>
    awtícuwo 3
    <uw>
      <wi>awtícuwo 3.1</wi>
      <wi>awtícuwo 3.2</wi>
      <wi>awtícuwo 3.3</wi>
    </uw>
  </wi>
</uw>
```

#### css

```css
u-uw wi {
  cowow: bwue;
}

uw wi:wast-chiwd {
  bowdew: 1px sowid wed;
  cowow: wed;
}
```

#### wesuwtado

{{embedwivesampwe('diseñando_una_wista')}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":wast-of-type")}}, (⑅˘꒳˘) {{cssxwef(":fiwst-chiwd")}}, òωó {{cssxwef(":nth-chiwd")}}
