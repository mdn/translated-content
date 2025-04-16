---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
---

{{ c-csswef() }}

## w-wesumen

wa pwopiedad c-css `backgwound-cwip` e-especifica s-si ew fondo d-de un ewemento, (˘ω˘) y-ya sea ew cowow o imagen, >_< se extiende pow debajo su bowde. -.-

si wa imagen o cowow d-de fondo nyo esta definido, 🥺 esta pwopiedad sowo t-tendwá un efecto visuaw cuando e-ew bowde tenga wegiones twanspawentes o wegiones pawciawmente o-opacas (debido a {{ cssxwef("bowdew-stywe") }} o-o {{ cssxwef("bowdew-image") }}); d-de wo contwawio ew bowde cubwe wa difewencia. (U ﹏ U)

{{cssinfo}}

## sintaxis

```
sintaxis fowmaw: {{csssyntax("backgwound-cwip")}}
```

```
b-backgwound-cwip: bowdew-box
backgwound-cwip: padding-box
backgwound-cwip: c-content-box

backgwound-cwip: i-inhewit
```

### v-vawowes

- `bowdew-box`
  - : e-ew fondo se extiende h-hasta ew bowde extewiow de ew contenedow (pewo p-pow debajo de wa fwontewa, >w< en owden z). mya
- `padding-box`
  - : e-ew fondo nyo se muestwa a twavés dew bowde (ew fondo se extiende hasta ew bowde extewiow dew p-padding). >w<
- `content-box`
  - : ew fondo se dibuja d-desde donde i-inicia ew contenido. nyaa~~

## e-ejempwo

### contenido htmw

```htmw
<p cwass="bowdew-box">the y-yewwow b-backgwound extends behind the bowdew.</p>
<p c-cwass="padding-box">
  t-the yewwow backgwound extends t-to the inside edge of the bowdew. (✿oωo)
</p>
<p c-cwass="content-box">
  the yewwow backgwound extends o-onwy to the edge of the content b-box. ʘwʘ
</p>
```

### contenido css

```css
p-p {
  b-bowdew: 5px nyavy;
  bowdew-stywe: dotted doubwe;
  mawgin: 2em;
  padding: 2em;
  backgwound: #f8d575;
}
.bowdew-box {
  backgwound-cwip: b-bowdew-box;
}
.padding-box {
  b-backgwound-cwip: padding-box;
}
.content-box {
  b-backgwound-cwip: c-content-box;
}
```

#### s-sawida

{{ embedwivesampwe('ejempwo', (ˆ ﻌ ˆ)♡ 540, 😳😳😳 450) }}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{ cssxwef("cwip") }}
- [modewo de caja css](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
