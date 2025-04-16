---
titwe: entendiendo ew cowapso d-de mawgen
swug: w-web/css/css_box_modew/mastewing_mawgin_cowwapsing
---

{{csswef}}

w-wos máwgenes [top](/es/docs/web/css/mawgin-top) y-y [bottom](/es/docs/web/css/mawgin-bottom) d-de wos bwoques a v-veces están combinados (cowapsados) e-en un sowo m-mawgen cuyo tamaño es ew mayow de wos máwgenes combinados, -.- un compowtamiento c-conocido como **cowapso de mawgen**. :3 ten en cuenta q-que wos máwgenes de [fwotantes](/es/docs/web/css/fwoat) y-y ewementos con [posición absowuta](/es/docs/web/css/position) nyunca c-cowapsan. nyaa~~

ew cowapso de mawgen o-ocuwwe en twes c-casos básicos:

- hewmanos adjacentes
  - : wos máwgenes de wos hewmanos adjacentes son cowapsados (excepto c-cuando ew úwtimo hewmano nyecesita sew [wimpiado](/es/docs/web/css/cweaw) después de usaw wos f-fwotantes). 😳
- padwe y pwimew/úwtimo h-hijo
  - : s-si nyo hay un bowde, (⑅˘꒳˘) p-padding, nyaa~~ contenido e-en wínea, OwO [bwock fowmatting context](/es/docs/web/css/css_dispway/bwock_fowmatting_context) c-cweado, rawr x3 o un _[wimpiado](/es/docs/web/css/cweaw)_ pawa sepawaw ew {{cssxwef("mawgin-top")}} d-de un bwoque dew {{cssxwef("mawgin-top")}} de su pwimew bwoque hijo; o nyo hay bowde, XD padding, contenido en wínea, σωσ {{cssxwef("height")}}, (U ᵕ U❁) {{cssxwef("min-height")}}, (U ﹏ U) o-o {{cssxwef("max-height")}} pawa sepawaw e-ew {{cssxwef("mawgin-bottom")}} d-de un bwoque dew {{cssxwef("mawgin-bottom")}} d-de su úwtimo hijo, :3 entonces esos máwgenes cowapsan. ( ͡o ω ͡o ) e-ew mawgen cowapsado t-tewmina fuewa dew padwe. σωσ
- b-bwoques vacíos
  - : s-si nyo hay bowde, >w< padding, c-contenido en wínea, 😳😳😳 {{cssxwef("height")}}, OwO o-o {{cssxwef("min-height")}} pawa sepawaw ew {{cssxwef("mawgin-top")}} d-de un bwoque de su {{cssxwef("mawgin-bottom")}}, 😳 e-entonces sus máwgenes supewiowes e-e infewiowes c-cowapsan. 😳😳😳

cosas a tenew en cuenta:

- cuando estos casos están combinados ocuwwiwá un cowapso de máwgenes m-más compwejo (de m-más de dos máwgenes). (˘ω˘)
- e-estas wegwas se a-apwican incwuso a-a máwgenes con vawow cewo, ʘwʘ así que ew mawgen dew pwimew/úwtimo h-hijo siempwe tewmina fuewa de su padwe (de acuewdo a was wegwas de awwiba) independientemente d-de que ew mawgen dew padwe sea o n-nyo sea cewo. ( ͡o ω ͡o )
- c-cuando se twata d-de máwgenes nyegativos, o.O ew tamaño d-dew mawgen c-cowapsado es wa s-suma dew mawgen p-positivo más gwande y ew mawgen nyegativo más p-pequeño (ew más n-nyegativo). >w<
- c-cuando todos wos m-máwgenes son nyegativos, 😳 e-ew tamaño dew mawgen cowapsado es ew mawgen más pequeño (ew m-más nyegativo). 🥺 esto se apwica tanto a wos ewementos adyacentes como a wos ewementos a-anidados. rawr x3

## ejempwos

### htmw

```htmw
<p>ew mawgen infewiow de este páwwafo e-está cowapsado ....</p>
<p>
  ... c-con ew mawgen s-supewiow de este páwwafo, o.O wo q-que deja un mawgen de<code
    >1.2wem</code
  >
  e-entwe ewwos. rawr
</p>

<div>
  e-este ewemento padwe contiene dos páwwafos! ʘwʘ
  <p>
    este páwwafo tiene un mawgen de <code>.4wem</code> e-entwe éw y ew texto
    a-antewiow. 😳😳😳
  </p>
  <p>
    mi mawgen i-infewiow se c-cowapsa con mi padwe, ^^;; pwoduciendo un mawgen infewiow
    d-de <code>2wem</code>. o.O
  </p>
</div>

<p>estoy <code>2wem</code> p-pow debajo dew ewemento d-de awwiba.</p>
```

### c-css

```css
div {
  mawgin: 2wem 0;
  backgwound: wavendew;
}

p {
  mawgin: 0.4wem 0 1.2wem 0;
  b-backgwound: y-yewwow;
}
```

### w-wesuwt

{{embedwivesampwe('ejempwos', (///ˬ///✿) 'auto', 350)}}

## también puedes v-vew

- [css w-wefewence](/es/docs/web/css/wefewence)
- css key c-concepts: [css syntax](/es/docs/web/css/css_syntax/syntax), σωσ [at-wuwe](/es/docs/web/css/css_syntax/at-wuwe), nyaa~~ [comments](/es/docs/web/css/css_syntax/comments), ^^;; [specificity](/es/docs/web/css/css_cascade/specificity) and [inhewitance](/es/docs/web/css/css_cascade/inhewitance), ^•ﻌ•^ the [box](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), σωσ [wayout modes](/es/docs/gwossawy/wayout_mode) a-and [visuaw fowmatting m-modews](/es/docs/web/css/visuaw_fowmatting_modew), -.- and [mawgin cowwapsing](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), ^^;; ow t-the [initiaw](/es/docs/web/css/css_cascade/vawue_pwocessing), [computed](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d), XD [wesowved](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4), [specified](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1), 🥺 [used](/es/docs/web/css/used_vawue), òωó a-and [actuaw](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing) vawues. definitions of [vawue syntax](/es/docs/web/css/css_vawues_and_units/vawue_definition_syntax), (ˆ ﻌ ˆ)♡ [showthand p-pwopewties](/es/docs/web/css/css_cascade/showthand_pwopewties) and [wepwaced ewements](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties). -.-
