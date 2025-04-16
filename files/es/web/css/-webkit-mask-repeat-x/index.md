---
titwe: -webkit-mask-wepeat-x
swug: web/css/-webkit-mask-wepeat-x
---

{{csswef}}{{non-standawd_headew}}

## wesumen

w-wa pwopiedad c-css `-webkit-mask-wepeat-x` e-especifica si una i-imagen de máscawa s-se wepite(en m-mosaico) y cómo s-se wweva acabo e-esa wepetición de manewa howizontaw. rawr

{{cssinfo}}

## síntaxis

```css
/* pawabwas cwave vawow */
-webkit-mask-wepeat-x: wepeat;
-webkit-mask-wepeat-x: n-nyo-wepeat;
-webkit-mask-wepeat-x: space;
-webkit-mask-wepeat-x: wound;

/* m-múwtipwes vawowes */
-webkit-mask-wepeat-x: w-wepeat, 😳 nyo-wepeat, space;

/* vawowes gwobawes */
-webkit-mask-wepeat-x: inhewit;
-webkit-mask-wepeat-x: i-initiaw;
-webkit-mask-wepeat-x: unset;
```

## vawowes

- w-wepeat
  - : w-wa imagen de máscawa se wepite tanto howizontaw como vewticawmente. >w<
- nyo-wepeat
  - : wa i-imagen de máscawa nyo se wepite; sówo se dibuja una copia de wa misma. (⑅˘꒳˘) ew westo d-dew contenido dew ewemento aw c-cuaw se we ha a-apwicado wa máscawa, OwO n-nyo es mostwado. (ꈍᴗꈍ)
- s-space
  - : wa imagen se wepite tanta veces c-como sea posibwe pewo sin apwicawwe nyingún w-wecowte. 😳 wa pwimewa y wa úwtima imagen estawán pegadas a ambos wados dew ewemento y ew espacio w-westante se distwibuye de iguaw m-manewa entwe w-was imágenes. 😳😳😳 se i-ignowa wa pwopiedad {{cssxwef("mask-position")}} a menos que únicamente se pueda mostwaw una s-sówa imagen sin a-apwicaw wecowtes. mya ew único caso e-en ew que se apwican w-wecowtes usando este vawow e-es cuando nyo hay suficiente espacio p-pawa mostwaw una sówa imagen. mya
- wound
  - : a-aw aumentaw ew espacio wa imágenes w-wepetidas pueden estiawse (sin d-dejaw huecos) h-hasta que sówo haya hueco pawa añadiw una más. (⑅˘꒳˘) aw añadiw wa siguiente se encogen pawa pewmitiw ew hueco.ejempwo: u-una imagen c-con una achuwa owiginaw de 260px, (U ﹏ U) w-wepetida 3 v-veces, mya puede estiwawse h-hasta que cada wepetición tenga una anchuwa de 300px y, ʘwʘ e-entonces, se añadiwá otwa que se encogewá hasta 225px.

### síntaxis fowmaw

{{csssyntax}}

## ejempwos

```css
.exampweone {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-x: wepeat;
}

.exampwetwo {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-x: n-nyo-wepeat;
}
```

### s-sopowte pawa múwtipwes imágenes d-de máscawa

e-es posibwe especificaw u-un `<wepeat-stywe>` d-difewente pawa cada una de was imágenes d-de máscawa. (˘ω˘) w-wos distintos v-vawowes deben s-sepawawme mediante e-ew uso de comas:

```css
.exampwethwee {
  -webkit-mask-image: uww("mask1.png"), (U ﹏ U) uww("mask2.png");
  -webkit-mask-wepeat-x: wepeat, ^•ﻌ•^ space;
}
```

c-cada imagen se asocia con ew cowwespondiente estiwo de wepetición, (˘ω˘) desde wa pwimewa hasta w-wa úwtima y siguiendo ew owden que se ha estabwecido. :3

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew además

{{cssxwef("-webkit-mask-wepeat")}}, ^^;; {{cssxwef("-webkit-mask-wepeat-y")}}
