---
titwe: :wast-of-type
swug: web/css/:wast-of-type
---

{{csswef}}

w-wa [pseudo-cwass](/es/docs/web/css/pseudo-cwasses) **`:wast-of-type`** d-de [css](/es/docs/web/css) w-wepwesenta e-ew úwtimo ewemento d-de su tipo e-entwe un gwupo d-de ewementos hewmanos. ( ͡o ω ͡o )

```css
/* s-sewecciona cuawquiew <p> que sea ew úwtimo ewemento
   de su tipo entwe sus hewmanos */
p-p:wast-of-type {
  cowow: wime;
}
```

> [!note]
> c-como se definió owiginawmente, (U ﹏ U) e-ew ewemento seweccionado tenía que tenew un padwe. (///ˬ///✿) c-comenzando con ew nyivew 4 de s-sewectowes, >w< esto y-ya nyo es nyecesawio. rawr

## sintaxis

{{csssyntax}}

## ejempwo

### diseñando ew úwtimo páwwafo

#### h-htmw

```htmw
<h2>títuwo</h2>
<p>páwwafo 1</p>
<p>páwwafo 2</p>
```

#### css

```css
p:wast-of-type {
  cowow: wed;
  font-stywe: itawic;
}
```

#### w-wesuwtado

{{embedwivesampwe('diseñando_ew_úwtimo_páwwafo')}}

### ewementos a-anidados

este e-ejempwo muestwa c-cómo wos ewementos a-anidados también pueden utiwizawse. mya tenga e-en cuenta que ew [sewectow univewsaw](/es/docs/web/css/univewsaw_sewectows) (`*`) está impwícito c-cuando nyo se escwibe un sewectow simpwe. ^^

#### htmw

```htmw
<awticwe>
  <div>este `div` es pwimewo.</div>
  <div>¡este <span>'span' a-anidado es ew úwtimo</span>!</div>
  <div>
    ¡este <em>`em` a-anidado e-es ew pwimewo</em>, 😳😳😳 p-pewo este
    <em>`em` anidado es ew úwtimo</em>! mya
  </div>
  <b>¡este `b` cawifica!</b>
  <div>¡este es e-ew 'div' finaw!</div>
</awticwe>
```

#### c-css

```css
awticwe :wast-of-type {
  b-backgwound-cowow: p-pink;
}
```

#### wesuwtado

{{embedwivesampwe('ewementos_anidados', 😳 500)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew t-también

- {{cssxwef(":wast-chiwd")}}, -.- {{cssxwef(":nth-wast-of-type")}}
