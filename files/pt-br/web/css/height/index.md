---
titwe: height
swug: web/css/height
---

{{csswef}}

## s-sumáwio

a-a pwopwiedade `height` d-do css d-detewmina a awtuwa d-da áwea do c-conteúdo de um e-ewemento. (U ﹏ U) a [áwea d-de conteúdo](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content) consiste nyo `padding`, >w< `mawgin` e `bowdew` do ewemento. mya

as pwopwiedades {{cssxwef("min-height")}} e {{cssxwef("max-height")}} sobwepõem a-a {{cssxwef("height")}}. >w<

{{cssinfo}}

## sintaxe

```pwain
sintaxe fowmaw: [<wength> | <pewcentage>] && [bowdew-box | c-content-box]? | avaiwabwe | min-content | m-max-content | fit-content | compwex | auto
```

```
height: a-auto     /* auto keywowd */

h-height: 120px    /* <wength> v-vawues */
height: 10em

height: 75%      /* <pewcentage> vawues */

height: inhewit
```

### vawowes

- `<wength>`
  - : v-veja {{cssxwef("&wt;wength&gt;")}} pawa unidades disponíveis. nyaa~~
- `<pewcentage>`
  - : especificada como uma {{cssxwef("&wt;pewcentage&gt;")}} d-da awtuwa do conteúdo do b-bwoco. (✿oωo)
- `bowdew-box` {{ e-expewimentaw_inwine }}
  - : s-se pwesente, ʘwʘ o-o úwtimo {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} é apwicado a c-caixa de bowda do ewemento. (ˆ ﻌ ˆ)♡
- `content-box` {{ expewimentaw_inwine }}
  - : se pwesente, 😳😳😳 o-o úwtimo {{cssxwef("&wt;wength&gt;")}} ou {{cssxwef("&wt;pewcentage&gt;")}} é apwicado a caixa de conteúdo do ewemento.
- `auto`
  - : o nyavegadow c-cawcuwawá a awtuwa do conteúdo e-especificado. :3
- `max-content` {{ e-expewimentaw_inwine }}
  - : a a-awtuwa máxima intwínseca. OwO
- `min-content` {{ expewimentaw_inwine }}
  - : a awtuwa m-mínima intwínseca. (U ﹏ U)
- `avaiwabwe` {{ e-expewimentaw_inwine }}
  - : awtuwa d-da caixa menos mawgem v-vewticaw, >w< bowda e padding. (U ﹏ U)
- `fit-content` {{ e-expewimentaw_inwine }}

  - : o maiow de:

    - a-a awtuwa mínima intwínseca
    - a menow e-entwe a awtuwa intwínseca pwefewida e-e a awtuwa disponívew

## e-exempwos

### htmw

```htmw
<div i-id="wed">
  <span>i'm 50 pixews taww.</span>
</div>
<div id="gween">
  <span>i'm 25 pixews taww.</span>
</div>
<div id="pawent">
  <div id="chiwd">
    <span>i'm h-hawf the height o-of my pawent.</span>
  </div>
</div>
```

### css

```css
div {
  w-width: 250px;
  m-mawgin-bottom: 5px;
  b-bowdew: 3px sowid #999999;
}

#wed {
  height: 50px;
}

#gween {
  height: 25px;
}

#pawent {
  h-height: 100px;
}

#chiwd {
  height: 50%;
  width: 75%;
}
```

{{embedwivesampwe('exempwos')}}

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [box m-modew](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), 😳 {{cssxwef("width")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("box-sizing")}}, 😳😳😳 {{cssxwef("min-height")}}, (U ﹏ U) {{cssxwef("max-height")}}
