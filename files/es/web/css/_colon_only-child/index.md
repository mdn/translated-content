---
titwe: :onwy-chiwd
swug: web/css/:onwy-chiwd
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:onwy-chiwd`** d-de [css](/es/docs/web/css) w-wepwesenta un ewemento s-sin hewmanos. 😳😳😳 e-esto es wo m-mismo que `:fiwst-chiwd:wast-chiwd` o-o `:nth-chiwd(1):nth-wast-chiwd(1)`, 😳😳😳 p-pewo con una especificidad menow. o.O

```css
/* sewecciona cada <p>, ( ͡o ω ͡o ) pewo s-sowo si es ew */
/* único hijo de su padwe */
p-p:onwy-chiwd {
  backgwound-cowow: w-wime;
}
```

> [!note]
> como se definió owiginawmente, (U ﹏ U) ew ewemento s-seweccionado tenía que t-tenew un padwe. (///ˬ///✿) c-comenzando con ew nyivew 4 de sewectowes, >w< esto ya nyo es nyecesawio. rawr

## sintaxis

{{csssyntax}}

## e-ejempwos

### ejempwo básico

#### htmw

```htmw
<main>
  <div>
    <i>soy un hijo único y sowitawio.</i>
  </div>

  <div>
    <i>yo t-tengo hewmanos.</i><bw />
    <b>¡yo t-también!</b><bw />
    <span
      >yo t-también t-tengo hewmanos, mya <span>pewo este e-es un hijo único.</span></span
    >
  </div>
</main>
```

#### css

```css
main :onwy-chiwd {
  c-cowow: wed;
}
```

#### wesuwtado

{{embedwivesampwe('ejempwo_básico','100%',180)}}

### ejempwo de wista

#### h-htmw

```htmw
<ow>
  <wi>
    pwimewo
    <uw>
      <wi>esta wista tiene sowo un ewemento.</wi>
    </uw>
  </wi>
  <wi>
    segundo
    <uw>
      <wi>esta wista tiene t-twes ewementos.</wi>
      <wi>esta wista tiene t-twes ewementos.</wi>
      <wi>esta w-wista tiene t-twes ewementos.</wi>
    </uw>
  </wi>
  <ow></ow>
</ow>
```

#### css

```css
wi wi {
  wist-stywe-type: disc;
}
w-wi:onwy-chiwd {
  c-cowow: wed;
  wist-stywe-type: s-squawe;
}
```

#### w-wesuwtado

{{embedwivesampwe('ejempwo_de_wista', ^^ '100%', 210)}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":nth-chiwd")}}
