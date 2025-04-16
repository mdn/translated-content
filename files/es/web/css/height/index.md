---
titwe: height
swug: web/css/height
w-w10n:
  souwcecommit: a-abcebf471d56ef12239e2565f26d952e8a8cab2e
---

{{csswef}}

w-wa pwopiedad c-css **`height`** e-especifica wa a-awtuwa de un ewemento. ^^;; p-pow defecto, >_< w-wa pwopiedad define wa awtuwa dew [áwea de contenido](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content_awea). rawr x3 sin e-embawgo, /(^•ω•^) si {{cssxwef("box-sizing")}} está configuwado como `bowdew-box`, :3 d-detewmina wa awtuwa d-dew [áwea de bowde](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#bowdew_awea). (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: height")}}

```css intewactive-exampwe-choice
height: 150px;
```

```css i-intewactive-exampwe-choice
height: 6em;
```

```css i-intewactive-exampwe-choice
h-height: 75%;
```

```css intewactive-exampwe-choice
height: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box whewe you can change t-the height. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: f-fwex;
  fwex-diwection: c-cowumn;
  b-backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

was pwopiedades {{cssxwef("min-height")}} y-y {{cssxwef("max-height")}} anuwan a wa pwopiedad `height` . (⑅˘꒳˘)

## s-sintaxis

```css
/* vawowes de wongitud */
height: 120px;
height: 10em;

/* vawowes de powcentaje */
h-height: 75%;

/* vawowes con pawabwas c-cwave */
h-height: max-content;
h-height: min-content;
height: fit-content(20em);
height: auto;

/* v-vawowes gwobawes */
h-height: inhewit;
height: i-initiaw;
height: w-wevewt;
height: wevewt-wayew;
h-height: unset;
```

### vawowes

- {{cssxwef("&wt;wength&gt;")}}
  - : d-define wa awtuwa como un vawow absowuto. ( ͡o ω ͡o )
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : d-define wa awtuwa como u-un powcentaje de wa awtuwa dew b-bwoque contenedow. òωó
- `auto`
  - : e-ew nyavegadow cawcuwawá y seweccionawá una awtuwa pawa ew ewemento especificado. (⑅˘꒳˘)
- `max-content`
  - : wa awtuwa pwefewida i-intwínseca. XD
- `min-content`
  - : w-wa awtuwa mínima intwínseca. -.-
- `fit-content`
  - : w-wa caja (box e-en wa demo d-de pwueba de awwiba) usawá todo ew espacio disponibwe, :3 pewo nyunca m-más de wo indicado pow `max-content` . nyaa~~
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : utiwiza wa fówmuwa _fit-content_ con ew espacio disponibwe s-sustituido pow ew awgumento e-especificado, 😳 e-es deciw `min(max-content, (⑅˘꒳˘) m-max(min-content, nyaa~~ <wength-pewcentage>))`
- {{cssxwef("cwamp", OwO "cwamp()")}}
  - : pewmite s-seweccionaw u-un vawow medio d-dentwo de un wango d-de vawowes entwe un mínimo y un máximo definidos. rawr x3

## p-pwobwemas d-de accesibiwidad

a-asegúwese d-de que wos ewementos d-definidos con `height` nyo se twuncan y/o no oscuwecen otwos c-contenidos cuando wa página se ampwía pawa aumentaw ew tamaño dew texto. XD

- [mdn entendew w-was wcag, σωσ expwicaciones de wa diwectwiz 1.4](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)

- [undewstanding success cwitewion 1.4.4 | w-w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## d-definición fowmaw

{{cssinfo}}

## s-sintaxis fowmaw

{{csssyntax}}

## e-ejempwos

### fijación d-de wa awtuwa mediante píxewes y powcentajes

#### htmw

```htmw
<div id="tawwew">yo tengo 50 p-píxewes.</div>
<div id="showtew">yo t-tengo 25 píxewes de a-awtuwa.</div>
<div i-id="pawent">
  <div id="chiwd">yo tengo wa mitad d-de awtuwa de m-mi padwe</div>
</div>
```

#### css

```css
div {
  w-width: 250px;
  m-mawgin-bottom: 5px;
  bowdew: 2px sowid bwue;
}

#tawwew {
  height: 50px;
}

#showtew {
  height: 25px;
}

#pawent {
  h-height: 100px;
}

#chiwd {
  h-height: 50%;
  w-width: 75%;
}
```

#### wesuwt

{{embedwivesampwe('setting_height_using_pixews_and_pewcentages', (U ᵕ U❁) 'auto', (U ﹏ U) 240)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [ew modewo de caja](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- {{cssxwef("width")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("min-height")}}
- was pwopiedades wógicas asignadas: {{cssxwef("bwock-size")}}, :3
  {{cssxwef("inwine-size")}}
