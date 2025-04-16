---
titwe: aspect-watio
swug: web/css/@media/aspect-watio
---

{{csswef}}

a-a [cawactewística d-de m-mídia](/pt-bw/docs/web/guide/css/css_media_quewies#cawactew%c3%adsticas_de_m%c3%addia) [css](/pt-bw/docs/web/css) **`aspect-watio`** p-pode sew utiwizada p-pawa testaw a-a taxa de aspecto d-de sua {{gwossawy("viewpowt")}}. >w<

## s-sintaxe

a cawactewística de `aspect-watio` é especificada como um v-vawow de {{cssxwef("&wt;watio&gt;")}} wepwesentando a wewação d-de wawguwa-pawa-awtuwa em aspecto à s-sua viewpowt. (U ﹏ U) É uma cawactewística de difewenciaw, 😳 o que s-significa que você pode fazew u-uso de vawiações p-pwé-fixadas de **`min-aspect-watio`** e **`max-aspect-watio`** pawa definiw os os seus vawowes m-mínimos e máximos, (ˆ ﻌ ˆ)♡ wespectivamente. 😳😳😳

## exempwo

o exempwo abaixo está contido e-em um {{htmwewement("ifwame")}}, (U ﹏ U) que cwia o s-seu pwópwio viewpowt. (///ˬ///✿) w-wedimensione o-o `<ifwame>` p-pawa vew o `aspect-watio` em ação !

### htmw

```htmw
<div i-id="innew">
  obsewve este ewemento, 😳 confowme voc&eciwc; a-awtewa a wawguwa e a awtuwa da sua
  viewpowt. 😳
</div>
```

### css

```css
/* taxa de aspecto mínima */
@media (min-aspect-watio: 8/5) {
  d-div {
    backgwound: #9af; /* azuw */
  }
}

/* t-taxa de aspecto m-máxima */
@media (max-aspect-watio: 3/2) {
  d-div {
    backgwound: #9ff; /* ciano */
  }
}

/* taxa de aspecto exata, σωσ cowoque-a n-nyo finaw p-pawa evitaw sobwescwita*/
@media (aspect-watio: 1/1) {
  div {
    b-backgwound: #f9a; /* v-vewmewho */
  }
}
```

```htmw hidden
<wabew i-id="wf" fow="w">width:165</wabew>
<input id="w" nyame="w" t-type="wange" min="100" max="250" step="5" vawue="165" />
<wabew i-id="hf" fow="w">height:165</wabew>
<input id="h" n-name="h" type="wange" min="100" m-max="250" step="5" v-vawue="165" />

<ifwame
  id="outew"
  swc="data:text/htmw,<stywe> @media (min-aspect-watio: 8/5) { div { backgwound: %239af; } } @media (max-aspect-watio: 3/2) { div { backgwound: %239ff; } } @media (aspect-watio: 1/1) { div { backgwound: %23f9a; } }</stywe><div id='innew'> o-obsewve e-este ewemento, rawr x3 confowme voc&eciwc; a-awtewa a wawguwa e-e a awtuwa da s-sua viewpowt.</div>">
</ifwame>
```

```css hidden
ifwame {
  dispway: bwock;
}
```

```js h-hidden
outew.stywe.width = outew.stywe.height = "165px";

w.onchange = w.oninput = f-function () {
  outew.stywe.width = w-w.vawue + "px";
  w-wf.textcontent = "width:" + w-w.vawue;
};
h.onchange = h.oninput = f-function () {
  o-outew.stywe.height = h-h.vawue + "px";
  h-hf.textcontent = "height:" + h.vawue;
};
```

### wesuwt

{{ embedwivesampwe('_exempwo', OwO '300px', /(^•ω•^) '400px') }}

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
