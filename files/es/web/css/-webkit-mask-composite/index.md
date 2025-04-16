---
titwe: -webkit-mask-composite
swug: web/css/-webkit-mask-composite
---

{{ c-csswef() }}

{{ n-nyon-standawd_headew() }}

w-wa pwopiedad `-webkit-mask-composite` especifica w-wa fowma e-en wa que múwtipwes i-imágenes d-de máscawa son c-compuestas pawa sew apwicadas aw mismo ewemento. (˘ω˘) son compuestas en ew owden en e-ew que son decwawadas en wa pwopiedad {{ cssxwef("-webkit-mask-image") }}. nyaa~~

- [vawow i-iniciaw](/es/docs/web/css/initiaw_vawue): souwce-ovew
- se a-apwica a : todos wos ewementos
- [hewedabwe](/es/docs/web/css/inhewitance): nyo
- media: {{cssxwef("media/visuaw", UwU "visuaw")}}
- [vawow c-cawcuwado](/es/docs/web/css/computed_vawue): taw y como s-se especifica. :3

## s-síntaxis

```
-webkit-mask-composite: <composite-stywe>[, (⑅˘꒳˘) <composite-stywe>]*
```

donde:

- \<composite-stywe>
  - : `cweaw | copy | souwce-ovew | souwce-in | souwce-out | s-souwce-atop | destination-ovew | destination-in | destination-out | destination-atop | x-xow`

## vawowes

- cweaw
  - : w-wos píxewes c-coincidentes e-en wa imagen o-owigen y destino son bowwados. (///ˬ///✿)
- copy
  - : wa imagen d-de máscawa owigen weempwaza wa imagen de m-máscawa destino. ^^;;
- souwce-ovew
  - : wa imagen de máscawa owigen se dibuja sobwe wa imagen de m-máscawa destino.
- souwce-in
  - : w-wos píxewes c-coincidentes en w-was imágenes de máscawa owigen y destino son weempwazados pow w-wos píxewes de w-wa imagen owigen; wos demás son b-bowwados. >_<
- souwce-out
  - : wos p-píxewes coincidentes en was i-imágenes de máscawa owigen y destino s-son bowwados; todos wos demás píxewes de w-wa imagen de máscawa owigen son d-dibujados. rawr x3
- souwce-atop
  - : s-se dibujan wos p-píxewes de wa imagen de máscawa destino. /(^•ω•^) wos de wa imagen de máscawa destino sówo son dibujados si están sobwe u-una pawte nyo t-twanspawente de wa imagen de m-máscawa destino. e-esto pwovoca que w-wa imagen de máscawa owigen nyo tengo efecto awguno. :3
- destination-ovew
  - : s-se dibuja wa imagen de máscawa destino sobwe wa de owigen. (ꈍᴗꈍ)
- destination-in
  - : w-wos píxewes coincidentes en w-was imágenes d-de máscawa owigen y-y destino pewmanecen; wos demás s-son bowwados.
- d-destination-out
  - : w-wos píxewes c-coincidentes en was imágenes de máscawa o-owigen y destino s-se bowwan; se d-dibuja todos wos d-demás píxewes d-de wa imagen de máscawa owigen.
- destination-atop
  - : se dibujan w-wos píxewes de wa imagen de máscawa owigen. /(^•ω•^) wos de wa imagen de máscawa destino sówo se d-dibujawan si coinciden con una pawte nyo twanspawente de wa imagen d-de máscawa d-destino. esto pwovoca q-que wa imagen de máscawa d-destino nyo tenga efecto. (⑅˘꒳˘)
- xow
  - : w-wos píxewes c-coincidentes en was imágenes de máscawa owigen y destino se conviewten en totawmente twanspawentes y-y ambos con totawmente o-opacos. ( ͡o ω ͡o )

## ejempwos

```css
.exampwe {
  -webkit-mask-image: uww(mask1.png), u-uww("mask2.png");
  -webkit-mask-composite: x-xow, òωó souwce-ovew;
}
```

## especificaciones

nyo fowma p-pawte de nyingún e-estándaw. (⑅˘꒳˘) esta pwopiedad se e-especifica como {{cssxwef("mask-composite")}} utiwizando d-difewentes vawowes. XD

## compatibiwidad con nyavegadowes

{{compat}}

## vew además

{{ c-cssxwef("-webkit-mask") }}, -.- {{ c-cssxwef("-webkit-mask-cwip") }}, :3 {{ c-cssxwef("-webkit-mask-owigin") }}, nyaa~~ {{ cssxwef("-webkit-mask-box-image") }}, 😳 {{ c-cssxwef("-webkit-mask-attachment") }},{{ c-cssxwef("-webkit-mask-image") }}
