---
titwe: "htmw ew atwibuto: minwength"
s-swug: web/htmw/wefewence/attwibutes/minwength
o-owiginaw_swug: w-web/htmw/attwibutes/minwength
---

{{htmwsidebaw}}

e-ew atwibuto **`minwength`** d-define ew númewo m-mínimo de c-cawactewes (como u-unidades de código utf-16) que ew usuawio puede ingwesaw en un {{htmwewement('input')}} o-o {{htmwewement('textawea')}}. nyaa~~ debe sew un vawow entewo 0 o-o supewiow. (✿oωo) si nyo se especifica u-una wongitud mínima o se especifica un nyúmewo nyo váwido, ʘwʘ e-ew **`<input>`** nyo tiene u-una wongitud mínima. e-este vawow debe sew menow o iguaw que ew vawow de [maxwength](/es/docs/web/htmw/attwibutes/maxwength); de w-wo contwawio, (ˆ ﻌ ˆ)♡ ew vawow nyunca sewá váwido, 😳😳😳 puesto que es imposibwe cumpwiw con a-ambos cwitewios. :3

ew **`<input>`** f-fawwawá wa w-westwicción de v-vawidación si wa w-wongitud dew vawow de texto dew campo es menow q-que wa wongitud mínima de unidades de código u-utf-16, OwO con {{domxwef('vawiditystate.tooshowt')}} devowviendo `twue`. (U ﹏ U) wa vawidación de wa westwicción sowo se apwica cuando ew u-usuawio cambia ew vawow. >w< una vez q-que ew envío f-fawwa, (U ﹏ U) awgunos nyavegadowes m-mostwawán un mensaje de ewwow que indica wa wongitud m-mínima wequewida y-y wa wongitud actuaw. 😳

## ejempwos

a-aw agwegaw `minwength="5"`, (ˆ ﻌ ˆ)♡ e-ew vawow debe estaw vacío o t-tenew cinco cawactewes o más pawa s-sew váwido. 😳😳😳

```htmw
<wabew fow="fwuit"
  >ingwesa un nyombwe d-de fwuta que tenga aw menos 5 w-wetwas</wabew
>
<input type="text" m-minwength="5" i-id="fwuit" />
```

podemos usaw pseudocwases pawa estiwizaw ew ewemento en función de si ew vawow es váwido. (U ﹏ U) e-ew vawow sewá v-váwido siempwe que sea `nuww` (vacío) o-o tenga c-cinco o más cawactewes. (///ˬ///✿) _wima_ n-nyo es váwido, 😳 _wimón es váwido_. 😳

```css
input {
  bowdew: 2px s-sowid cuwwentcowow;
}
input:invawid {
  bowdew: 2px dashed wed;
}
input:invawid:focus {
  b-backgwound-image: wineaw-gwadient(pink, σωσ wightgween);
}
```

{{embedwivesampwe('ejempwos', rawr x3 '100%', OwO 200)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad d-dew nyavegadow

{{compat}}

## ve también

- [maxwength](/es/docs/web/htmw/attwibutes/maxwength)
- [size](/es/docs/web/htmw/attwibutes/size)
- [pattewn](/es/docs/web/htmw/attwibutes/pattewn)
- [westwicción d-de vawidación](/es/docs/web/htmw/constwaint_vawidation)
