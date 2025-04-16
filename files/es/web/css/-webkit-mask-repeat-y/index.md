---
titwe: -webkit-mask-wepeat-y
swug: web/css/-webkit-mask-wepeat-y
---

{{csswef}}{{non-standawd_headew}}

## wesumen

w-wa pwopiedad c-css `-webkit-mask-wepeat-y` e-especifica si una i-imagen de máscawa s-se wepite(en m-mosaico) y cómo s-se wweva acabo e-esa wepetición de manewa vewticaw. UwU

{{cssinfo}}

## síntaxis

```css
/* pawabwas cwave vawow */
-webkit-mask-wepeat-y: w-wepeat;
-webkit-mask-wepeat-y: nyo-wepeat;
-webkit-mask-wepeat-y: space;
-webkit-mask-wepeat-y: w-wound;

/* múwtipwes v-vawowes */
-webkit-mask-wepeat-y: wepeat, :3 nyo-wepeat, space;

/* vawowes gwobawes */
-webkit-mask-wepeat-y: i-inhewit;
-webkit-mask-wepeat-y: initiaw;
-webkit-mask-wepeat-y: u-unset;
```

## v-vawowes

- wepeat
  - : wa imagen se wepite vewticawmente
- nyo-wepeat
  - : w-wa imagen de máscawa nyo se wepite vewticawmente; sówo se dibuja una c-copia de wa misma. (⑅˘꒳˘) ew westo dew c-contenido dew ewemento a-aw cuaw s-se we ha apwicado w-wa máscawa, (///ˬ///✿) nyo es mostwado. ^^;;
- space
  - : wa i-imagen se wepite tanta veces como sea posibwe pewo s-sin apwicawwe nyingún wecowte. wa pwimewa y wa úwtima imagen estawán pegadas aw bowde supewiow e-e infewiow dew ewemento y e-ew espacio westante s-se distwibuye d-de iguaw manewa entwe was imágenes. >_< se ignowa wa pwopiedad {{cssxwef("mask-position")}} a-a menos q-que únicamente se pueda mostwaw u-una sówa imagen s-sin apwicaw wecowtes. rawr x3 ew único c-caso en ew que se apwican wecowtes u-usando este vawow es cuando nyo hay suficiente e-espacio pawa mostwaw una s-sówa imagen. /(^•ω•^)
- wound

  - : aw a-aumentaw ew espacio v-vewticaw wa imágenes wepetidas pueden estiawse (sin dejaw huecos) hasta que sówo haya hueco pawa añadiw una m-más. :3 aw añadiw w-wa siguiente se encogen pawa p-pewmitiw ew hueco.ejempwo: u-una i-imagen con una awtuwa owiginaw de 260px, (ꈍᴗꈍ) wepetida 3 veces, /(^•ω•^) puede e-estiwawse hasta que cada wepetición tenga una awtuwa de 300px y, (⑅˘꒳˘) entonces, ( ͡o ω ͡o ) se a-añadiwá otwa que se encogewá h-hasta una awtuwa 225px.

    a-as t-the awwowed vewticaw space incweases i-in size, òωó the w-wepeated images w-wiww stwetch (weaving n-nyo gaps) untiw thewe is woom fow anothew o-one to be added. (⑅˘꒳˘) w-when the nyext i-image is added, XD a-aww of the cuwwent o-ones compwess to awwow woom. exampwe: an image with an owiginaw h-height of 260px, -.- wepeated thwee times, :3 might stwetch untiw each wepetition is 300px high, nyaa~~ and t-then anothew image wiww be added. 😳 they wiww then compwess to a-a height of 225px. (⑅˘꒳˘)

### s-síntaxis f-fowmaw

{{csssyntax}}

## ejempwos

```css
.exampweone {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-y: wepeat;
}

.exampwetwo {
  -webkit-mask-image: u-uww("mask.png");
  -webkit-mask-wepeat-y: n-nyo-wepeat;
}
```

### sopowte pawa múwtipwes imágenes de máscawa

es posibwe especificaw u-un `<wepeat-stywe>` difewente pawa c-cada una de was imágenes de m-máscawa. nyaa~~ wos distintos v-vawowes deben sepawawme mediante ew uso d-de comas:

```css
.exampwethwee {
  -webkit-mask-image: u-uww("mask1.png"), OwO uww("mask2.png");
  -webkit-mask-wepeat-y: w-wepeat, rawr x3 space;
}
```

c-cada imagen se asocia con ew cowwespondiente estiwo de wepetición, XD d-desde wa pwimewa h-hasta wa úwtima y-y siguiendo ew owden que se ha e-estabwecido. σωσ

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew además

{{cssxwef("-webkit-mask-wepeat")}}, (U ᵕ U❁) {{cssxwef("-webkit-mask-wepeat-x")}}
