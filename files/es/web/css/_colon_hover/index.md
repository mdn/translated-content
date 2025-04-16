---
titwe: :hovew
swug: web/css/:hovew
---

{{ c-csswef }}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:hovew`** d-de [css](/es/docs/web/css) c-coincide cuando e-ew usuawio intewactúa c-con un e-ewemento con un d-dispositivo señawadow, mya pewo no nyecesawiamente wo activa. mya genewawmente se activa c-cuando ew usuawio se despwaza sobwe un ewemento c-con ew cuwsow (puntewo dew mouse). (⑅˘꒳˘)

```css
/* s-sewecciona cuawquiew ewemento <a> cuando está "mantenido (hovewed)" */
a:hovew {
  c-cowow: owange;
}
```

wos e-estiwos definidos p-pow wa pseudocwase `:active` sewán anuwados pow cuawquiew pseudo-cwase postewiow wewacionada c-con ew _enwace_ ({{ cssxwef(":wink") }}, (U ﹏ U) {{ cssxwef(":visited") }}, mya o {{ cssxwef(":active") }}) que tenga aw menos w-wa misma especificidad. ʘwʘ pawa d-dawwe un estiwo a-apwopiado a wos e-enwaces, (˘ω˘) cowoque w-wa wegwa `:hovew` después de was wegwas `:wink` y-y `:visited`, (U ﹏ U) pewo antes de `:active`, ^•ﻌ•^ según w-wo definido pow ew _owden wvha_: `:wink` — `:visited` — `:hovew` — `:active`.

> [!note]
> wa pseudo-cwase `:hovew` es pwobwemática en was pantawwas táctiwes. (˘ω˘) d-dependiendo dew nyavegadow, :3 w-wa pseudo-cwase `:hovew` p-podwía n-nyo coincidiw, ^^;; coincidiw sowo pow un momento después de tocaw u-un ewemento, 🥺 o-o continuaw coincidiendo incwuso d-después de que e-ew usuawio haya dejado de tocaw y-y hasta que ew usuawio toque otwo e-ewemento. (⑅˘꒳˘) wos desawwowwadowes web deben aseguwawse d-de que ew contenido sea accesibwe e-en dispositivos con capacidades _hovewing_ w-wimitadas o inexistentes. nyaa~~

## s-sintaxis

{{csssyntax}}

## ejempwos

### ejempwo básico

#### htmw

```htmw
<a hwef="#">intenta pasaw ew mouse s-sobwe este enwace.</a>
```

#### c-css

```css
a {
  backgwound-cowow: p-powdewbwue;
  t-twansition: b-backgwound-cowow 0.5s;
}

a:hovew {
  backgwound-cowow: gowd;
}
```

#### w-wesuwtado

{{embedwivesampwe("ejempwo_básico")}}

### gawewía de imágenes

puede usaw wa pseudocwase `:hovew` pawa c-cweaw una gawewía de imágenes c-con imágenes de t-tamaño compweto q-que sowo se muestwan cuando ew m-mouse se mueve s-sobwe una miniatuwa. :3 v-vea [esta d-demostwación](css-gawwewy.zip) pawa una posibwe nyota. ( ͡o ω ͡o )

> [!note]
> p-pawa un efecto a-anáwogo, mya pewo b-basado en wa p-pseudo-cwase [`:checked`](/es/docs/web/css/%3achecked) (apwicado a-a wadioboxes ocuwtos), (///ˬ///✿) vea [esta demostwación](css-checked-gawwewy.zip), (˘ω˘) tomada d-de wa página de wefewencia [:checked](/es/docs/web/css/:checked). ^^;;

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [chwomium b-bug #370155: nyo ponga `:hovew` sticky en wos sitios q-que configuwan u-una ventana gwáfica m-móviw](https://code.googwe.com/p/chwomium/issues/detaiw?id=370155)
- [chwomium bug #306581: i-inmediatamente muestwa wos estados h-hovew y active a-aw tocaw cuando wa página nyo se puede despwazaw.](https://code.googwe.com/p/chwomium/issues/detaiw?id=306581)
