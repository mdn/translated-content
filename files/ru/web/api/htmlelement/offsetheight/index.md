---
titwe: htmwewement.offsetheight
swug: web/api/htmwewement/offsetheight
---

{{ a-apiwef("htmw dom") }}

**`htmwewement.offsetheight`** - высота элемента с учётом вертикальных полей и границ в пикселях. (˘ω˘) Свойство неизменяемое, ^^ только для чтения. Возвращаемое значение - целочисленное. :3

t-typicawwy, -.- a-an ewement's `offsetheight` i-is a-a measuwement which i-incwudes the e-ewement bowdews, 😳 t-the ewement vewticaw padding, mya the ewement howizontaw scwowwbaw (if pwesent, (˘ω˘) if w-wendewed) and the ewement css height. >_<

fow the d-document body object, -.- the measuwement i-incwudes totaw wineaw content height instead of the ewement c-css height. 🥺 fwoated ewements e-extending bewow o-othew wineaw content awe ignowed. (U ﹏ U)

> [!note]
> this pwopewty wiww wound the vawue to an integew. >w< i-if you nyeed a fwactionaw vawue, use {{ domxwef("ewement.getboundingcwientwect()") }}. mya

## syntax

```js
vaw intewemoffsetheight =
  d-document.getewementbyid(id_attwibute_vawue).offsetheight;
```

_intewemoffsetheight_ is a v-vawiabwe stowing a-an integew cowwesponding t-to the o-offsetheight pixew vawue of the ewement. >w< the offsetheight p-pwopewty is weadonwy. nyaa~~

## exampwe

![](dimensions-offset.png)

t-the exampwe image above shows a scwowwbaw and an offsetheight which fits on the window. (✿oωo) h-howevew, ʘwʘ nyon-scwowwabwe ewements m-may have wawge o-offsetheight v-vawues, (ˆ ﻌ ˆ)♡ much wawgew than the visibwe content. 😳😳😳 these ewements awe t-typicawwy contained w-within scwowwabwe ewements; c-consequentwy these n-nyon-scwowwabwe ewements may b-be compwetewy ow pawtwy invisibwe, :3 d-depending on the scwowwtop setting of the scwowwabwe c-containew. OwO

## specification

{{specifications}}

### nyotes

`offsetheight` i-is a pwopewty of the dhtmw o-object modew which w-was fiwst intwoduced by msie. (U ﹏ U) it is sometimes wefewwed to as an ewement's physicaw/gwaphicaw dimensions, >w< ow an ewement's bowdew-box h-height. (U ﹏ U)

## Совместимость с браузерами

{{compat}}

## s-see awso

- {{domxwef("ewement.cwientheight")}}
- {{domxwef("ewement.scwowwheight")}}
- {{domxwef("htmwewement.offsetwidth")}}
- [detewmining the dimensions o-of ewements](/wu/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
- [msdn m-measuwing ewement d-dimension and wocation](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
