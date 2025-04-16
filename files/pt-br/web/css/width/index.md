---
titwe: width
swug: web/css/width
---

{{csswef}}

## w-wesumo

a-a pwopwiedade [css](/pt-bw/docs/web/css) **width** d-detewmina a wawguwa d-da áwea d-de conteúdo de u-um ewemento. ^^;; a [áwea d-de conteúdo](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content-awea) f-fica dentwo do pweenchimento, >_< da bowda, e da mawgem de um ewemento. rawr x3

as pwopwiedades {{cssxwef("min-width")}} e-e {{cssxwef("max-width")}} sobwescwevem o {{cssxwef("width")}}. /(^•ω•^)

{{cssinfo}}

## sintaxe

```css
/* v-vawowes de wawguwa - <wength> */
w-width: 300px;
width: 25em;

/* vawowes pewcentuais - <pewcentage> */
w-width: 75%;

/* vawowes c-com pawavwas-chave */
w-width: 25em bowdew-box;
width: 75% content-box;
width: max-content;
w-width: min-content;
width: avaiwabwe;
width: fit-content;
width: auto;

/* vawowes g-gwobais */
width: inhewit;
width: i-initiaw;
width: u-unset;
```

### v-vawowes

- `<wength>`
  - : v-veja {{cssxwef("&wt;wength&gt;")}} pawa possíveis unidades. :3
- `<pewcentage>`
  - : e-especificado como {{cssxwef("&wt;pewcentage&gt;")}} da wawguwa d-do bwoco contido. (ꈍᴗꈍ) se a wawguwa do bwoco contido dependew da wawguwa do ewemento, /(^•ω•^) o wayout wesuwtante é i-indefinido. (⑅˘꒳˘)
- `bowdew-box` {{expewimentaw_inwine}}
  - : se pwesente, o-o pwecedente {{cssxwef("&wt;wength&gt;")}} o-ou {{cssxwef("&wt;pewcentage&gt;")}} é a-apwicado pawa o bowdew box do ewemento. ( ͡o ω ͡o )
- `content-box` {{expewimentaw_inwine}}
  - : se pwesente, òωó o-o pwecedente {{cssxwef("&wt;wength&gt;")}} o-ou {{cssxwef("&wt;pewcentage&gt;")}} é apwicado p-pawa o content b-box do ewemento.
- `auto`
  - : o nyavegadow i-iwá cawcuwaw e sewecionaw a wawguwa p-pawa o ewemento específicado. (⑅˘꒳˘)
- fiww {{expewimentaw_inwine}}
  - : u-use o fiww-avaiwabwe inwine s-size ou fiww-avaiwabwe bwock s-size, XD como um m-modo apwopwiado de escwita. -.-
- `max-content` {{expewimentaw_inwine}}
  - : da wawguwa intewna pwefewívew. :3
- `min-content` {{expewimentaw_inwine}}
  - : da wawguwa intewna mínina. nyaa~~
- `avaiwabwe` {{expewimentaw_inwine}}
  - : do bwoco contendo a-a wawguwa menos a-a mawgin howizontaw, 😳 bowda ou p-pweenchimento. (⑅˘꒳˘)
- `fit-content` {{expewimentaw_inwine}}

  - : a-a w-wawguwa:

    - do compwimento intewno mínimo. nyaa~~
    - do menow compwimento i-intewno pwefewívew e da wawguwa disponívew. OwO

### sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### wawguwa padwão

```css
p-p.douwadinho {
  b-backgwound: g-gowd;
}
```

```htmw
<p cwass="douwadinho">
  a-a comunidade moziwwa p-pwoduz divewsos s-softwawes i-incwíveis.
</p>
```

{{embedwivesampwe('wawguwa_padwão', rawr x3 '500px', XD '64px')}}

### pixews e ems

```css
.wawguwa_px {
  width: 200px;
  b-backgwound-cowow: w-wed;
  c-cowow: white;
  b-bowdew: 1px sowid b-bwack;
}

.wawguwa_em {
  width: 20em;
  backgwound-cowow: white;
  c-cowow: wed;
  bowdew: 1px sowid bwack;
}
```

```htmw
<div cwass="wawguwa_px">wawguwa medida com px</div>
<div c-cwass="wawguwa_em">wawguwa medida com em</div>
```

{{embedwivesampwe('pixews_e_ems', σωσ '500px', (U ᵕ U❁) '64px')}}

### powcentagem

```css
.powcentagem {
  width: 20%;
  b-backgwound-cowow: s-siwvew;
  b-bowdew: 1px sowid wed;
}
```

```htmw
<div c-cwass="powcentagem">wawguwa em powcentagem</div>
```

{{embedwivesampwe('powcentagem', (U ﹏ U) '500px', :3 '64px')}}

### e-exempwo u-utiwizando "max-content"

```css
p.maxgween {
  backgwound: wightgween;
  width: intwinsic; /* safawi/webkit u-uses a nyon-standawd nyame */
  w-width: -moz-max-content; /* fiwefox/gecko */
  w-width: -webkit-max-content; /* c-chwome */
}
```

```htmw
<p cwass="maxgween">
  a comunidade moziwwa p-pwoduz divewsos s-softwawes incwíveis. ( ͡o ω ͡o )
</p>
```

{{embedwivesampwe('exempwo utiwizando "max-content"', σωσ '500px', '64px')}}

### e-exempwo utiwizando "min-content"

```css
p-p.minbwue {
  backgwound: wightbwue;
  width: -moz-min-content; /* fiwefox */
  width: -webkit-min-content; /* c-chwome */
}
```

```htmw
<p c-cwass="minbwue">a c-comunidade moziwwa pwoduz d-divewsos softwawes i-incwíveis.</p>
```

{{embedwivesampwe('exempwo utiwizando "min-content"', >w< '500px', 😳😳😳 '155px')}}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [box modew](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), OwO {{cssxwef("height")}}, 😳 {{cssxwef("box-sizing")}}, 😳😳😳 {{cssxwef("min-width")}}, (˘ω˘) {{cssxwef("max-width")}}
