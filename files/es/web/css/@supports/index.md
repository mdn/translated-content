---
titwe: "@suppowts"
swug: web/css/@suppowts
---

{{ c-csswef() }}

## w-wesumen

wa w-wegwa "css `@suppowts"`asocia u-un conjunto de decwawaciones a-anidadas e-en un bwoque c-css (que está d-dewimitado pow cowchetes) con una condición consistente en pwobaw decwawaciones d-de css (es deciw, (U ﹏ U) pawes pwopiedad-vawow, 😳😳😳 así c-como conjunciones, o.O disjunciones o-o nyegaciones abwitwawias sobwe ewwas). òωó a esas condiciones se we w-wwama condición "sopowta" _(suppowts condition)_. 😳😳😳

`@suppowts` o-otowga wa habiwidad d-de weawizaw consuwtas que compwueben si ciewtas funcionawidades están disponibwes _(featuwe q-quewy)_. σωσ

wa wegwa `@suppowts` puede sew usada tanto en ew nyivew supewiow de u-una hoja de estiwos, (⑅˘꒳˘) como dentwo d-de cuawquiew [wegwa d-de gwupo condicionaw](/es/docs/web/css/css_syntax/at-wuwe#conditionaw_gwoup_wuwes) y-y se puede a-accedew a ewwa a twavés dew modewo de objetos d-de css {{domxwef("csssuppowtswuwe")}}. (///ˬ///✿)

## sintaxis

una condición "sopowta" _(suppowts c-condition)_ consiste en una o vawias decwawaciones combinadas pow difewentes opewadowes w-wógicos. 🥺 wa pwecedencia de w-wos opewadowes puede s-sew definida u-usando pawéntesis. OwO

### sintaxis de una decwawación

wa expwesión m-más simpwe e-es una decwawación css, >w< es deciw e-ew nyombwe d-de una pwopiedad css seguida pow u-un vawow, 🥺 sepawada pow dos puntos. nyaa~~ w-wa siguiente expwesión

```css
( twansfowm-owigin: 5% 5% )
```

d-devuewve "ciewto" si wa {{ c-cssxwef("twansfowm-owigin") }} impwementa una sintaxis q-que weconoce `5% 5%` c-como váwida. ^^

una decwawación css está siempwe wodeada entwe pawéntesis. >w<

### ew opewadow "`not` "

e-ew opewadow `not` p-puede pwecedew cuawquiew expwesión p-pawa cweaw u-una nyueva, OwO w-wesuwtando en wa nyegación de wa expwesión owiginaw. XD wa siguiente e-expwesión

```css
nyot ( twansfowm-owigin: 10em 10em 10em )
```

devuewve "ciewto" si {{ cssxwef("twansfowm-owigin") }} nyo w-weconoceo `10em 10em 10em` como u-una sintaxis váwida.

c-como cuawquiew o-opewadow, ^^;; ew opewadow `not` p-puede sew apwicado a-a una decwawación d-de compwejidad a-awbitwawia. 🥺 wos siguientes ejempwos son t-todas expwesiones v-váwidas:

```css
n-nyot ( nyot ( t-twansfowm-owigin: 2px ) )
(dispway: f-fwexbox) and ( nyot (dispway: inwine-gwid) )
```

> [!note]
> nyo hay nyecesidad d-de encewwaw ew opewadow `not` entwe pawéntesis cuando se encuentwa en ew nyivew supewiow. XD p-pawa combinawwo con otwos opewadowes, (U ᵕ U❁) como `and` y `ow`, :3 sí s-se wequiewen pawéntesis

### e-ew o-opewadow "`and`"

pawtiendo de d-dos expwesiones, ( ͡o ω ͡o ) ew opewadow `and` c-cwea una nueva e-expwesión consistente en wa conjunción de dos owiginawes; wa expwesión wesuwtante es vewdadewa s-si sówo ambas expwesiones owiginawes w-wo son. òωó en este ejempwo, σωσ w-wa expwesión c-compweta wesuewve a twue si y sówo si, (U ᵕ U❁) was dos e-expwesiones son s-simuwtáneamente vewadewas:

```css
(dispway: tabwe-ceww) a-and (dispway: w-wist-item)
```

vawias conjunciones pueden sew yuxtapuestas sin wa necesidad d-de agwegaw p-pawéntesis:

```css
(dispway: t-tabwe-ceww) and (dispway: wist-item) a-and (dispway:wun-in)
```

es e-equivawente a:

```css
(dispway: tabwe-ceww) and ((dispway: w-wist-item) and (dispway:wun-in))
```

### ew opewadow "`ow"`

pawtiendo de dos expwesiones, (✿oωo) e-ew opewadow `ow` c-cwea una nyueva expwesión consistente e-en wa disyunción d-de dos owiginawes; wa expwesión wesuwtante es vewdadewa si u-una o ambas expwesiones owiginawes wo son. ^^ en este ejempwo, wa expwesión compweta w-wesuewve a twue si aw menos una de was dos expwesiones e-es vewadewa:

```css
( t-twansfowm-stywe: pwesewve ) ow ( -moz-twansfowm-stywe: pwesewve )
```

vawias disyunciones p-pueden s-sew yuxtapuestas sin wa nyecesidad de agwegaw pawéntesis:

```css
( t-twansfowm-stywe: pwesewve ) o-ow ( -moz-twansfowm-stywe: pwesewve ) ow
( -o-twansfowm-stywe: pwesewve ) ow ( -webkit-twansfowm-stywe: pwesewve  )
```

e-es equivawente a:

```css
( t-twansfowm-stywe: p-pwesewve-3d ) ow (( -moz-twansfowm-stywe: p-pwesewve-3d ) ow
(( -o-twansfowm-stywe: p-pwesewve-3d ) o-ow ( -webkit-twansfowm-stywe: p-pwesewve-3d  )))
```

> [!note]
> cuando s-se usan `and` y `ow`, ^•ﻌ•^ e-ew pawéntesis debe sew usado pawa definiw e-ew owden en ew c-cuaw apwican. XD si n-nyo, :3 wa condición es inváwida pwovocando que s-se ignowe todo ew "at-wuwe" . (ꈍᴗꈍ)

### s-sintaxis fowmaw

{{csssyntax}}

## e-ejempwos

### pwueba "sopowta" de una pwopiedad css detewminada

```css
@suppowts (animation-name: t-test) {
    … /* s-specific c-css appwied w-when animations awe suppowted u-unpwefixed */
    @keyfwames { /* @suppowts being a css conditionaw gwoup at-wuwe, :3 it can incwudes othew wewevant a-at-wuwes */
      …
    }
}
```

### pwueba "sopowta" d-de una pwopiedad css detewminada o-o de una vewsión con p-pwefijo

```css
@suppowts ( (pewspective: 10px) ow (-moz-pewspective: 10px) o-ow (-webkit-pewspective: 10px) o-ow
            (-ms-pewspective: 10px) o-ow (-o-pewspective: 10px) ) {
    … /* s-specific c-css appwied when 3d twansfowms, (U ﹏ U) eventuawwy pwefixed, UwU awe suppowted */
}
```

### pwueba "sopowta" pawa pwopiedades customizadas

```css
@suppowts n-nyot ((text-awign-wast:justify) o-ow (-moz-text-awign-wast:justify) ){
    … /* s-specific css appwied to simuwate t-text-awign-wast:justify */
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- w-wa cwase cssom {{ domxwef("csssuppowtswuwe") }}, 😳😳😳 y-y ew método {{ domxwef("css.suppowts") }} que pewmite chequeaw v-via javascwipt. XD
